/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4QnhKds1fUKeNW3Yay92fARnhdeKGB94tVejFLY3nMtfTBiGCbU2EmuiCcvT8d3zG4cdvEYXgpV2X2gHuYe3AkWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66mjDPCjkbnQMKRiJoC1PjqMRpJzgms88EUZzUfEJWDcxBAnr7gZcwzFsM2rdL8t34Dcue9BL3GmEswtUhoLTJaX",
  "key1": "wKggjkv5w7nP92dWQej3bNXnLiGb7KUNrpTR8ZGUFX95fkt21xymqQpwXgNWYaDxWd7bd6JSH8xwmgiv3uDaMCc",
  "key2": "4YJ1jGL1NxyBZhHeNg3AyK6d324vEDCXwJn3HvsM1hq4Xv7x5oPBiTixZfnCorLRK8ZA2TbAMeogEKRrijLtmxVw",
  "key3": "347bRjHxUr3ZvV2eyDFWUm8Cxu9FwVmUfeLhEp5qMw6XHLA71d6pnnnWnBHS2hweX2fdG2mdT95RBp2bKHPBuohG",
  "key4": "5D7CsiMHRjVWPpd5cvjjXgHrYSscyf2hWVRqGbYuNxmC1zCXC5TArPNqEEYsjFgpoCJCsxWjww9v1eaK99T1oeS1",
  "key5": "ibRyEdojmun1yknTrzD7aFxSgdcTbp21tvyz62dZdjaAnZtKGgjL3ffZ896PT76rRfvtnN2xwMQSXQLHDxsYfeH",
  "key6": "qq7ThDXDuYVSxurTVQNigEt4Lqqp6hm5ysuFJ67BtrEG8ADNJnzmTnRXy6SXRfJMMsm3kDcXE3e8Da3UN6X59EB",
  "key7": "x3U2pnxUuhRuzuKNVUo5zhE2RnYhaJFPhhWPkNR3xtx8sFND5fHH5jePfgkUSgbGTDbuYg2G8eeQLHbCG7zNNkv",
  "key8": "3nD6yLXBS5jqVPgyn732QpERPEBGnhvbA2xnapgp8LKdTEeVcC93y7aSwAh6UWrpGYNd3RRkmVRkHrL2K2p2kQ2x",
  "key9": "AYH7sAAu5fsUMoqv6MWr5WAbuLKLzgQqyYUBZ3dgV7fbZYq7eA1eY6FM6RMGsh4PSdu2x3881pCajiyRsL2ejGZ",
  "key10": "3Hx2W5PTpT6m25huREXuQco81P2R7txiL9q8uywDBLYo9xRTGNVE7hQ4232NT6xkFBxhMzpCnngZXJRVUZUbQgkD",
  "key11": "5P44ZK2B28dLGCCXDAHJddmMBwqRa88XrbVogrni4mJhoGz4J6nYteeEd4YwP2P2vcq2nyZBaETtCJ5PL7YR2rpS",
  "key12": "5DouZrvryk74YW2Bw2PNyQTQnkuntRPFZ5KkX6qwHCuqGHnk6gpukKxqtadUTT1aDjzh2cCRZXZdiYkTDZSFLhzF",
  "key13": "4un5QhgtCgrot39QUn2sJvDnoxYFEAA7ABiAWRooK3SQzGNbNvdpLjWFmUBdq3z7SiEkJdwn9oz6DwQsZKr5AWwT",
  "key14": "25yAuuMGbyrjmiZFSooAX5pDB77P7aZXyiUFiv88jBTJXnm6GyL4sFu3R6spgDYzup7UafU2RbYbTqAE4pTx41Bq",
  "key15": "2jw1pLcP3NzAXdJsnZYZCRrTvNfVP5A2rvDi7dmMXkfAJtbMQSPy7E1BwEuEM2mW59SJ3kx75K3Cugmy8zrfCws9",
  "key16": "4GuUfqehNQPB9UB8SR2uDhYGW6xf2CPLUvLRtfnn9pnVLtS4CFnArBnqumKEq4YEheUTbyR5mzbT4sbUmcu18wyQ",
  "key17": "74b8qwqJahwyEi1TiKdJkVhkizB5tmJWWMoQHCS86ucALhM42woyte1rAFA8zEoZGqwgYWN8X85zSHdbG5JLZCj",
  "key18": "4twggG9sMPB9z1pkUtjKsEBAFh792xUcs744iF8hbDiGD2bThVStKEr7EMxaGszsVzdkED9cDpmNvXpyhHNPvtWi",
  "key19": "2ZnuuJBXx6MHFaowbyVHMqLM6KQBP1wpNfNbCMJiRs5BxZCwCDxqjxpuioXFkZjdCBh4fXh23W4QbhsEVN6frJ3Q",
  "key20": "4vFiDR3U2kjKSRZRESV1FXXuFyJUb1cmun1x2LhiUbq7UsL4ijQVCqVASmsrS6R6S5ZXgQExVUVCaFdAbeUQS2Ci",
  "key21": "oCNaiu9uPxyErMbmru5dgaCwLnaJvMshzFoe29mX8ppcAin9JNEAd322hdwHDssPzFXPdfSuEWHq9nGfb5bBSFP",
  "key22": "26ZJ2S23aMqiYC67eq8mRsQ2yJU25HrWZ86ASp4LmwMVUqQCqSfthM8KXUJhY9UhGbEobRrdZzj6iqYE7ExTbsJY",
  "key23": "256XoMEUZgS7dxK8gfYsmprGY9cDWc953YNBLk1XUt9xyoMmxCwFDKVhww2g3YhFaPaavxQmtBZVr4JV3q1vdqvF",
  "key24": "VGDDMcVN6gt5nieWa1R1BzHJVe555M3E337nhscL8uL8ZvTDdXc7Aq4dMibWduESMQP9EiqaDATNF6v21xdmQdi",
  "key25": "2ciaubdkyMHVr8C1amifKkf57S6nqeuEFXZQNLUy4GDtwMrFVpPBPR3ixrMkfbAKmovcubNAsKFRRPEGY6CGj6Ss",
  "key26": "442Gj6yWSuEmvbwKn55L6N6YCSRGtk6wen1PnoP1Km5evrVA4vwCLgmpUUPjNcY6D1kGmbNx4xSMwLqrjMMemd6z",
  "key27": "2Vf69aCLzh4bmJxBBssgkag449efRuCM3eMPW8HgMjXkxaXZrjveLgGkECWviT64TNyxzRZb3FdgfSnG6NKaVg6k",
  "key28": "3jbVyc46JoTr5fd6uRyqbFoMJxC6K93SKgHTMgvqYGGTATV7VHWHGy2pJfoeE8VfQf4vA9eBHofWhEmNtQEDStap",
  "key29": "5GqC1wFv1oYY4uEzQez4zThsAYRqz2GaybAq6A2FEXtGUu6nwzoExzYoVbPP3f5fWVwZd1uY4JZ4XeHEQq3eatwg",
  "key30": "4bhvCtaaqjvodSzBf5Wzsr4CiX4NyHpJUt5RgMXQG2fewNmUnYs7nvAGJth2K75qhMVK1SN1Wz9jFW7c7259DfZL",
  "key31": "5v4UjJGXuksmu5pAGDTtzS4sN2RH56yrZUuSSMArAzKEFHyKtBNfUALzu7E2mR7qrVjQQcQG3txc3WMH2BKmt81i",
  "key32": "5Zk9Azx1mn4pxUcJ5Fjv6sHv2gNQpFQ4cTtyib23cKPJkkyQH7o88omAnRmq2WyrsFnUeCNtbS5ZduC8GpzsRjAr",
  "key33": "3UehdfPvtNjdH95vuUFk96FuMG2YAC9GiBGXTnoWUEXi9ot9Hugh9k7pJGE34u2o7SToFKLA48Q9rxN1AunJQWkT",
  "key34": "5cPb12Xb7xbyVEqnSxoSiRLEMGpErUTGPBoNJKxkTYJtptenaDo82NgdVXPFMFyejpkhh5GeydaMVCxZzkKhdvUC",
  "key35": "3DGG8Lo96fUwoS5nHbxPR2G2ihK5kqXgNTunS37rpSo4poE4pM5wuR4tbpM7k4mEJMK8v7YgAFS9jLQp1QZcNkEt"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
