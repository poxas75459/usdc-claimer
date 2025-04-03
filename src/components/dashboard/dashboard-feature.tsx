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
    "5jCbsYdCw4LruYsdTkaZaN222Nt4Mh9i6z8ENepML817ZTAcfTU347TLy2xVGLvnDqCH3FdakmNkuGEcr5st3x4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "asRWFF1ZRbjzvwF1QWsPwZGHAKkzk6849gv55eiMugZ9yuLoSZ1AAXVL3dpVieNqdu62WuNDbyYeDoAppWjouMr",
  "key1": "5rsXbDE5ucUaGqAUBaYqCMXpfCcWwCs9oaHefCzrZbqqyFu5SwhdAHx5zEPsvQU57UC3GYGXJ2iBDpVmPCyrxn9k",
  "key2": "2FYMCTQyrxpz48TEXw5HtG3XGruZWosSLdLBktzwggWy6yVTsfBDL5AbM3oQ3K4MjDeXM6r3Pz3N3fhVBVm9bLXt",
  "key3": "7Mc1nnWrzr6cDc7J8VCLxs2XRNHZFoevoMspp4ZzPo2Q4YYrLVCweFP9S5ZcC5g3UTkFEoEspNJJqyt181osi9n",
  "key4": "5UKWZKPPHebXnSGe1kCXr4WcT5W4Yibzr53JXEtKJVL3rDmdPgv4pbYS4TbVEj1MHJvA2LZRatBdgbFQ7kYa84LX",
  "key5": "5kqUAWVYYEDcGnw3NanyboNvw5DMJccPMeg3pQDF4dro5wrLsAjLNFszmBVon9rJqNgxS6dQMBiz8Rr2LooaGdAk",
  "key6": "3HgnSyw3K4jWQrzyxtLJNr7NWT9R46MwuBCXZhYxfDxDZPzNMWDo6XMLN8iejaNwmq4hXQB9uGTfYf8NT3MXXHBc",
  "key7": "5b5XB7xrjEWTAifrghdTozGF1XTbE5tG7EChZ99r9MLtusymqfndDHr65Tsv264s2eJShf3GQCiMd5831kYhe5wF",
  "key8": "2BdSuSw9TCyjg2ep1K8xD1Vco7NnnwjLM37uSH8V94Lxh3jchF3yx8R7KMMRwpgn4AqsB8SZb5DQsNWrK4nhsGqb",
  "key9": "2Lx7UpLzQmvr4y6jERdinYatePsrJDH2PyWXzXVEKP1WiKhdjUnjnQ7QLGfF7CZtXLE3dNoyyqD6wu2kLQqczPAg",
  "key10": "3z1kS9eX7ZRZ1ePeTaNeDERvbsBq46rkRpC3sUqgQKjxarAqHNqAQMNYayeJUkvBSuGRxkjRhubdHYxMJuRPXeEQ",
  "key11": "3BdZ3vPgCp65LbtqiFJU55E1shg6krxrjJHKW4LTVDmCTnw9gQSKFxzwgLPd5RAYRqMZYiTAnCs8E9Ra5Ucd5eqz",
  "key12": "286pu4f4ukAe6ud5R2JVJRVbFTbepbU3XrsXGBeeJ4gtRaopzZ8tebDM7yJJyXkKot5SAa3wrgYqf61vhrcEgJLz",
  "key13": "3h6z7pNesyCWS6Ubv3BcgQf4fLAuYC5nx8veoDsmZREL1jWD5pCn57gHWiYwkMfVJDQgGiT3MF5p4cfYp8zxurbs",
  "key14": "yw96RNuQzXaCMnagW275wJmeCjYvFH86CL7xNvrbDQ9u63mw7q9jqPNgfGQHGffAQayGRRkSZndRRgQfJcNbCfT",
  "key15": "5JciFuBwsL1cMfifYNKVDTtW3Dg2TjDRVAzyg37p4Q9Ns6PFrkZw37qPgR9ezSrhzoDyFadBpU2Yof9TqXxAHHvN",
  "key16": "4sbjxmJQEeLnsv1cgsvJw8TuHbh4XXySZST62TxPNmarbhx3KgCu2txNHXWMJnQUig9Kn3SRoq9p9jcN12WDXakP",
  "key17": "LTn6xcoUDKdDrXh7jbLwAWSGHCRFrTycE7kpMdkKR2nQA2goPdsLb3AikePzca5Wgm3Ps9mQtBkcx9FycmhRvYm",
  "key18": "33YhoydcrrTsVRdfAyNaWTXZmpxAgwUmD3vxPcRq8TEyyHzgmMjSYQPYze5foNnErmvNoM663UxYCGXXwAKCfArM",
  "key19": "4Vth5Mq37Mjj6goUuNkk5cqc59RrQFsrETidS4crNdB1RVivHZMNEqFq6ecGGPuKXzymCb11PQxJ6mfcVh6buAGE",
  "key20": "4jjLswFCre196QoTy6HryKaC5p4AX8XWpkECDNaV5499vzpA1Jz9BEDociGNigsY2iLiScgRhcrrNkvQS24Fw3Mb",
  "key21": "3RyQtm4xkz5rNGrREcaTntEbhxNPcH591KERh4466hhw9tmyqLX3hWyptRVG2bCn9c4jdV3KjGn1TpXy5eMLuFiL",
  "key22": "3AJ5twC5pLEoBoSao4o8s6VFuK556HEi1A2BcYgf6FAsoAw3jjrzBnuuj3Wo4kwFHrdDn4TuZEyYycNStyeqQuK6",
  "key23": "4nWyeFA9WzjEVp5bzQ4XD3uYgUHJjmP5NdcoDrRMszZnHFtrsAZZWPZxaBrut3wcgGENWEZKk3C7JKCkmCi3JnLZ",
  "key24": "4F9REYRuNUgELZTpaPQMM4vaVGALJfuJG56iQseVqYDRL91GNhEGkwMoL1ifFNn4jrpth4e9NDAoQnB7vK8QnZmt",
  "key25": "39Jie33S8TLzLhzAbPfCye3H3MZNQJR6vjMGZYjnG5H4Ry5t4NGuTVWjjTrvc7KgAWGz2mPrLG8JK5HWEwx66HTG",
  "key26": "2kSqpNFw21QKF6DchCN36eVXMk23QDLptvye4uQdZpsfVHbUFMuS3Yi7FVjqNjsmeM1QD5BQiuZrYAf3QNt22xkS",
  "key27": "2zu4Lo5JQo597u5gPRKe3fSfLxBiHPXi4ppSym91xWotpcRVhq7ZBWKznjoJvQECYdFS9anqtj4PWDtEhdeqRtcN",
  "key28": "635uDVvKsP2x9HvTPsh4ZBBqgDWhLQgCP9BQu3PMzB9cnY74nSwvkzKJMt6NaEXpPDdQj7Fa8mrvjtMsDnNC716w",
  "key29": "2MHXx8rU1YsHvdxLJiH2vPF45XS9sw7hDSxVm8y6AsS5vrkVUg659BWu85y3pQqdivr93i5AzL4pzr4rXfo8F4zf",
  "key30": "58YoEZSd7MFoyXv4p1341FzLxf24Gp8tRicab67PVN5Yw4uJ6xwQ5MS6QNJ5yn6yYktUtFredJo9ZwsXozq3abyy",
  "key31": "3udF7B59KQRtkXCvZkTo2HaPiuFJi27PuPQoVLHGZjN3ADYogFRoqQ61Rt15PgaV6ArUTrtCppJWqEekhNy66UbA",
  "key32": "4uomzhzV2YsYiPbbB6F5aMcni6wNe1Un1p35KMMJP7vtAxZG98QDcm1tDsaSciHXmR5KhzVFy9ZQ2zuVP4uBqE8a",
  "key33": "3uLWUbePWczwrmjPXthybytSj5HKEtpVbzogT8jvm2Ub2Uciqe3rXzYdVL44LYEDUkqhLcrPjUBrcbd8XjrcKYp1"
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
