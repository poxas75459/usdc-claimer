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
    "ERorJV9qX96xBYafyTZvxmHr1ksLPL6ZyV4WCq8xSGmCzGLotp6bHUjkUeR1Zrwiu9P4qUs58Yrf9PTBNBpbVXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66rdhPzb2yLyGRhTRhSUqBxaxS8ZUYhsTea1PHgiEHfZ3FmAw48wwTuHnomDct4szW3N1MoD8oJEBBpG5W9w5AJD",
  "key1": "5d5poG3BU1V7jgFK9NPVGXTLUs9R68jBsynNJJf991uPHKxFLrRHSAR6HRFF2XuM3PvhnqhFtUYqGfLJRjJZ7PB9",
  "key2": "5tVD4oB6vtdrC6ekDk3yunFqa9CJFGtscHaqpz1uBXqPYEH4bFiiV54sHQSh3pk3tz7GU6T7SExeyTCiEScgZhAE",
  "key3": "jpPXGvazTYbU4FaC7a6nkvDwmC1Ksv7nBfZp3YKLrDwdrhswLZss31Qzkr5UvcWkaqnBu1fmcTSVJGBnDSw18Bm",
  "key4": "5jLSuw4nUFvmh7jUxrd72R36upmWo7yR2JtEx4BPCAUsBkaTegaBDWoxMujJJpRQ6UyXAtQKS8NbRQY7iwxHWeyk",
  "key5": "3aGsiyG1iLf1SuNTcbYjDDCUca2yqfHosaUtanKxpwNbmyiL24qvrv6BGU5BzwMVN2pyZjrW66MBo5vhJem4sMQv",
  "key6": "66V5UKxkSc9wx7HEKSH1eR9aRMwPhifJZ5744muWSuPVBgrtCHFbmm5Ah7pSZWLadiGJ6a2nCc7gUWnFvAP7hnJ8",
  "key7": "345vpYhwJUJQgyyJ1L7GHm2DQC12BpCgR3A9QDTAuiP6fPUMi276KsnSu2CjFrq5UedQsGfDnJy2MabE2tGnpn55",
  "key8": "2gJBsSq3JEaUxP317SV4jibvKsQ2nvkAQAmTkGqk5rAgvbXBXJ6spj2q1fDBi5H5kh1UWimYHjEnjDWLZFX79xXb",
  "key9": "3VUydoYsr7A7ZnzJkEWXd3rdN4StvCYeFYViPE8Cpvqg42UBzHBJJRLQHm6292SBoMguymnvtP9wuB9pXfJUr1Ta",
  "key10": "5NfC88QWNdHW48kd591xDL6St9Dx4urEwa7THBvyuVQNY342sjK45BCDyu1G2SdYbWJCx3MFSfG75BB4VxqYRAh4",
  "key11": "2KL2XTyPyruSgWERK3fcs2NVFFmEm7nXtdkWkDRJGHSjWDSvfcrAr1uP6RUx8NZQCakDL1paMQsJVdou2hf5jDCE",
  "key12": "2fjMJDGw9LRC4pu6U4hghGDgtMZBuo3iyZUQwtT6RGMpM71JYZ8xAM6TbmJ43xACWRMLfuUfcZauotmuJjqPBbX9",
  "key13": "3L9MeybvZB9kH1PGHvLkbqxSjnP8dfTHJyrCsS1G2R1DvHGxWRJwDQnBkbgt59g64yundMd7vpk1BMBrqLiLTJf2",
  "key14": "fdownZnQiiEVFxGTGbR9V1ezmHHruHJXcsvYrq7tihRS85u5JAZ4sNmEA5pbWr3ipBsAn8rEx46zZ1P94uNm9XN",
  "key15": "2AG4WeDjkKTW45Z2p8AP5ZTvCikM6TU8xHt2kFgxHBLczHMbcyfAAujRLUJvucrhSME6CZktnW7P8Ka4did3s1Lt",
  "key16": "25QbfSFVDGY5QBtrXwDTUBEfE9n1xMAMAbWmVsTQoxFMSM6e2TdacQmmWv1h6xjeBC939BgzHb5WH1VynJFR2mhr",
  "key17": "gNWmG3vyL2A3y8ZQqYM3yKa1ZiofzuqyVoSDydWaRGu522ZwdYBHdujRT3bzANCEcxNw31xLrkmycVcAarwLv8j",
  "key18": "3FauCEfyTDXck9iiGu79TmnpqdWkicvySD4NmAdNAgTsV9Qi64VLeR7ptzY74RvWCAKwpemNjVczTYsPWjocbSjq",
  "key19": "2Taqqfz8mcZxfV66qUhLFm3ynvwrb1hEVEXZXiUvu6ub9ySeEs9RxV6fVNofYsUb2euNcbkMv9Eb9AEHr4CogBS9",
  "key20": "54ASiEYB5dmqHL8xhF1VHQQPxawa4rtdkGd2PFYS2Btb3DRA8PYwkFwgUSuyEEaqJG1z9gq9iqEo56fqNNM1cpGa",
  "key21": "4t5YEgXdhUV4bLJoyhz2QkfTxx4Veiuj6kSVgCRQEf93dH4BchDXhGfa2qbPfuZ8BhBGFrcroAihcFhCwRCKgmuJ",
  "key22": "2M2vtKTJVcJX9zFHiaLozKUMboaYdED2WmWLfW5xgk5C6pK3ForewRfAxR46CXds9YzragSHcb1k61EuEw5ax2P1",
  "key23": "AiHvEjRbRad13DnsT6JXNgDPgbgw1dXViQiivTxwnF5QV1RFpk9PTCFCjuzGWtnjN71PCBrDC4V1roM8v1Yu6At",
  "key24": "2s6tmrd237EN6KmkwF5quQvRMisiFMNiBD9eQUfrZS5yM8UFYLYzjDuxt7z97iEFFTKdfTvzfJBMwgFxF25mt1Mz",
  "key25": "39Mckmz7sco8aesuTExKKZNAhDasEjmGmFtNDEMdJNmpEprcKY2FBwXuNWmYqt26Q53yihwSLuNrbcDtLTwd3uLa",
  "key26": "3Q7Vm2tJt4bxvYpsgV4toTEccKC4ruqLSQwYqRMJ6QSzKv13WwqPQ3Y4mr7AVRfmzJ6BgoTpvX6evTj4vZGgQ8MH",
  "key27": "2U1Bu4u8T39FMZVajDXGoukaZKP8TSqLcM1Nj4c2JwMPDrevYYehu15sEBjufSbMY73YNGbEBo5Ym3VL28MW1hK",
  "key28": "2FnGfp6NQZVfvZhRrzmkwQiTii5iuRST3YuiwURkCtC1KEMJhsaM6GKzkmX33hwT8chKUVp3vAif8S2ySdfPoz4K",
  "key29": "3bFY1pJ5dAXXLpGcLwqTdVXkjoRxQ9JePEnhFxhHcUdhfrbtp1qfx2Bm2SgdeFgqWKtyeH5PZTC7W6KeoRB6Jz5p",
  "key30": "TZE18fSM7iQXZWZpRt1JZkZAjHqdhnoLCnNPkkZ4aM6ETWRs4T7fdbJ4L8F2BXB21KXV89LsBoQWanwERzv9dk7",
  "key31": "PvXZtendpF9LPUFCZx3zHgMfq2ddpMtR4ByaEy5tjuXWAdnVohSrnE7GUYBU1FdVwTyK6SwKXcHVNowL69WZWWc"
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
