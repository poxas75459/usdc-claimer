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
    "1AnTNhdh18EUjExX8Jhcq9LxdHwaGS8RYz8Fzd2rHxvn211v46SohmhXPQutUSo9VeEMKcWEHbmFLdp1GQczbCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MW7BQYPgW6A4tFRtmxdCfPnYLAw9u3yc9LaMVo6Sg5afjiq7yvrny4m1fKq4VBNaLRP5xxN7ZVQvF4LNenZ9HLX",
  "key1": "2tWnE5BH6YDQTLnUo5SpeepwsQwtsYMpwyFe4Vp4ddxsFxfMt2FAwsjXSXP9sRuvdstbk7BEYW3Foj4xp2vJ9gCv",
  "key2": "4DZVqt96jwoxiiSa9mANzScZf7kF3gun98sQBA6BSbYUR6ujNmZxewzxpX2FeWy3DkjkNzLq1tDnMsAUx1SHTCT",
  "key3": "owtMut58p7X56fvzxEhwkMA6dvYK9RqWfS7bkTVkwkASCkxrcpCYcoUg56edZfEF3dPwtnb4R2ad9EYcY9XoiuG",
  "key4": "4pUYQXmcUEYeCdnH7YMcucAnLqn6zmrRrAhgtyLCrLdTW3V3W6dRWJT4fbdN2sbNR3avKCLosWTshKMTyXrMpTH",
  "key5": "5nEspNnXWp45fexD5ea7a6swGkM3kB1FVPvEqHTZXB8wiXibR95oUGYf7dJneEGsTXzsn2DmBTu62YZfRekNRQBs",
  "key6": "2zCUHJWedVoMCfcUG8tcWpDZTkBZ2KF3EedE5hQBJX9BR3C4XNfpTk4cMXAdWUjQCq4Thm7mzMeNFdVUaNfV9h7A",
  "key7": "33QDixi2iktWJgNA8ezqivGVMwSR5U288GJLAXE5SP5eX8DvR1h6RrHWUgUy1HNwyraJ6PHB8dQzYGHQ8gqjcALv",
  "key8": "zPNHy24jE7sDGC41eHYSqK5tRsftn2Tj9C5Q9ivKfDwcL8QkZwP5Hmkg6ogqKwHv9znDMuwYLJaHUaqt2CBCJ6c",
  "key9": "4d5t7y4SqqnyVpmCkusGbggjxQt8LPLVHAZzWi9TdhwECPvsxT5ZZcjktrRpfhaNescqmjakbhyvqPmDkKoqaaw7",
  "key10": "5ZM6Lo8wBjtwARN71vNACv5VFLMHnkL6BLkM21kQvXDQTLc7yxKStEBpNN626AhTuFUsyAmHDAjQikT9MJkKm4ET",
  "key11": "5FeFvhzvYJjQ92rLhF11Q6muyJ2dazcGDrs45EimZbe7fGH3siKeseYa99dMVvfkTX5fZs5LcBsaaLXSqesjbn2G",
  "key12": "iABTQASTJsu9uo2Q2wf7RLpiuWniGFevexaxGPELY88MYrYuXAkGaz4qAccmzrpA3Jm7DZkUH7o3TTg5jko1VWV",
  "key13": "2rukb6ssWJTeBviMG2FC8DAcjAyadGbUjv2xzUyQLkaYJUQRvwFhuvK98tPpVzraqLv6BexAYeNH3cUcEx9UdFJQ",
  "key14": "3QYdnhK8mc5MaB2foZyRJrc5Zt95QFJ9m5xLW4KEXU4jVRqAx7YxWMXJmhZrrdP6nXwR6efhp5oNstdyHYStZa4Z",
  "key15": "3nhQcSU3vbjbTfs1HN1YTxgoqJzSFPuFSaMPC6wJdcrfzMeTxdyikWVWpzwgVSfstE2h6BJMoYmh3mT6nSPHnS41",
  "key16": "Q2PXC1SpcX6votggmPojpzr3FPW52xRrgTUFcJsXANAefsREziWwx4yErw7KVxF5Ng8Nbejp2HuNyjjbwCP2KrX",
  "key17": "4pvYdob5wwCBThhtVnjiSwPyCaCoZmeEDHQXAPMhc5yuS1jYDti6g6jsW5SKFFCAvPdZMJZC6vWUJGpzVJExQzWn",
  "key18": "3f9eFGARWkQ8jvE5sKSAyjSGFsTowvgPtEaDummmchaiPQ9G5dzYbtDX5svm4NESFdw8iCcPNVjUjBT5CDdyTpPu",
  "key19": "2H9NG73mBSCJ8Bub82iPEystrW2eujEM2XHUmhxLVvRHwCrYHN519NfT42JvmvfPrz22gbdN1Y8yX4BuJKi8sFyB",
  "key20": "2vBpUN5mRVpxfsKfQnmh8vRQokMSV82mpAu4sUwpy6ZHksV3DG42vvuhzmhTWWUfn2e9bMNj8omRGsr29Ctug9ZM",
  "key21": "66iA88sey95KCYtDXwzGcXnuguh3kyMkD8tWU7oqqq99KX6SNaBpwfTXJY3ASFh58sAYAy7tr2K48CqoCy5FaNjC",
  "key22": "3KXvKtLwkX4duoaZA4gz3naJYfqWSSjog7h8ULhWZwmGHaaEFysqgqpw36wnskWsRevhEKsH9JBrKbmgMQpdhDrP",
  "key23": "34FB9L55Tx4e7sLySg1TMjNsqoCATrggvqY2j13UeyzL56DeUauiHwwc1CuVr5MuA7cbeBjPqo57kC6VhRBfBSZh",
  "key24": "62x5KTnPREjej58gMLQuDcVBx2JkyHcmMqMKQkPyYxovnCDs3gfvevRGwtKn1bwhCapUrhcNZvHd6HSa9oePUsQg",
  "key25": "2SAX6iDdpL9q6n2qMnvUatGbLMfyNYnhJ8tGhsuWxMD2gGrSw7FB99gcrArprEbkFje568dR6CzbFTAns2GcxQmx",
  "key26": "Bpps1TGHPWLVbPTjyPLbwpj3zi9Yi45mVtx5RrfZ2JFkvaf49XK3Q2KqDUG5hpntfAwP6Q8WuYDCKgUhKaDRbUd",
  "key27": "5Q8pFtq5D1kXHxDD49C29gxPdgdHUszHrXLy7dJebghMh3rgSUGjHRoEaSfBnvzMn8ckaLk4cizi7gawG2xBiyMf",
  "key28": "5WomM3uMEku4SyfKwEmUtK4eMzPXYXVPqWxtPaZ9TQgs9BmQfjfzRFpCsxacH56RuNA5f5Hm4Xw2wXKxKr6yem98",
  "key29": "jrmSWKqiE2CvBrCj65Dm3zyp3xRJ2TQVnYbC5pRmNwZgcM7F5skuPhPrkGVeYHjrGAsSyzhazxxyCsmL3nk1JZP"
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
