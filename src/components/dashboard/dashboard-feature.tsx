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
    "3Grqq5X5pvAWdHe8p93eL972hGF2t74GMFRnpCyZoDJfFSCGPLqkHQnTAwAUNGtnR1Sqe4HKjzA2Lvxe2but6SEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c4qZ3arCmP3rBe4Zyknqf8XYw3sSgFqecHUhVR9PiFufyrfvbJJTaNietMSTRqtHrLaJowRpEHJpAjTmmpeYmam",
  "key1": "2pVM3ZXHv2H6cwwK6yk6CpKHxh3eFVeC2J7bg4LsgGW469MBspcHFQY8jgNVCW8toaNr7XaCDrJgoyXtNAr7iAMi",
  "key2": "KX9As8mTdGfm9vn54yuQfoQFA9Vi9UB24T6PGVxDoRqNk1Y2dnmbCQRaZcbptx4Ej5Yy9jWa8uBphB6GuEpAaTH",
  "key3": "94LXCH1LPJD8v3EeQTp3VRBcZ73bLcLJkNAWM4W95k3YqnHUnMupZ9WPgYbnXRYSebpjdiNbxUjAVG9aqh8QioM",
  "key4": "4DBunkKqGKJoksxRadCj8JWp1aXMLzGDCz4sNgWjv7YggZruezwgGBqstsSsT6LSnWBgFNiFFSYczM5txTTvELzU",
  "key5": "4za9uoJpBnFKeA6DGzvHsbWVyFeQroebTh9DYqxGQLHar5dVptQPt35iAkDGSQr8e5EoC24yBtPX8BSfAE5jvf1T",
  "key6": "5GRaACdmMG7iye6nCUfR5XwwXMoDjjLpunkMwtXxpmeAg21txUPUWGxxYGvoHbggLTA9jzVaxgBqijjV6PKquWGW",
  "key7": "5amvtC1GfArBg3GdGSGJj2EULh7SZt3RfXXG3uk6b5Myi7TMZgH69HELgDFuQYG5pZhdeSDyQicsi3dAuqpr7QAK",
  "key8": "5uoEv1zt8cit4AxKYKyBx3FUuJLyvE1aq6cPPexkAJ19eHZMf1YojenHDjdeza9NCCGbngcAWQ2DTFQL5HLiUDMs",
  "key9": "4GxBTT2jZXGh8ip4pvx3GebJSn9KfJg3Hm31JB5ZodNSaADgnBQMR1mQek8YkiyZJug2gJM9egZGNexcr18Lgfud",
  "key10": "5JWzoUQg4cDBNGtNtbRAtUSdttCqMe7BS5JZtKWD1vtADwqCuTXoUJxFBcLci1HgEckCxgaZNaRfdZgdW2mFTwD3",
  "key11": "2UxYbx7iEMXep64mqiLxhG2XwQL5khzyt1n37fSwktVDgx2h1BBHypGaWNLJzmqqZxa9BtSpDjoYiXG891tmQfda",
  "key12": "3MRzGqSxctx5kfwaJjL8VUTq7oXVzyGUhkAvbLVRko9FuvfRZc2WMCZ6fkuBLduHjzjqBW71v3zGapnmsF45x6ZN",
  "key13": "3QsE1h13oKma5HSEm48xSAQ1yWSTAJtWyWz1Bohysjf55Ze6dc1JpUb6xQxi9TWNz25knr8mu37CFRU1FsEHR8Ev",
  "key14": "3LpcZ41zDGEHijEtjHQnRqcxA9ncr1apoRequBQayv7xcM3UxhTEJqaCxZCaqCmfciFbNfBxNNixTdT8yXAcswQq",
  "key15": "5PHSKPbaU28xy78mnAaKjTf7turLJqRiKrxGwNcArLyGLmxHkoFkFtxnzPNpbvgBTEQ4Qoc7msyvWFBF8eAZThwb",
  "key16": "4jzLRvvjPrgoGUjz3y16hyDuE21747Y8bWvutjWrvrg5V5yWmUz7aFgDNMUqg9GH3uW9oaQcTyKi9yHMPbBs9LXg",
  "key17": "2aHVaBAE3DHwGnyHDwYYZWR4mwdZTRCFoDCrWVAu166RXumZUVLa6doiXHuaj8NV24JW86f9CeF1NEct96xBGpJT",
  "key18": "5dAuruoeK33Dz7d16VZZTwTMyjmuoSui2rbjw1jMaZYDYmT4BPyvdE5KX5tnvMrYf9wn8jgmQRR5VpK46zmTY1ym",
  "key19": "4eXNvA6dpdusmMbMhSx7C4AMKTw6E4CZb4kCTJS7z1oAeeoaH2pgw2PZ9FMbo4x7BMzDphMEf1ohGsRgCXS2xWqL",
  "key20": "2JjoaqBEWbeohpf2RM7UbSnC4cmDtWkXtGqGk8M6DH1AVaPr2YsZhK3uqCU9yJk5mqzJ2acduyedx3vWVVTEh4yp",
  "key21": "2resc9sozENGfBW13LMZNdRHJ6Zf2XG636mCtPNjcr78sBZfDLnhrBwu8kZYELuAHUc4CmQus2EEGVTDRLaTjZcf",
  "key22": "2U3mPt4vSNqx3mUZTqMRTTwf68mQWU1quyCLytGyNUVSdDMMXXsNdPNBwaL12PvQdAJMWptDhJiBNitywQaBAZma",
  "key23": "1NwYY6EFwDLtr76uPHqAMCf78Lyhe5UeAMR6r1FceNcR1v2DPCzUAn6ELNRfkhL7SC11Lg71itBNYhW4uaRQ7mK",
  "key24": "4zjhHtZfrRVKD5p386PNr8RoJQ2NSGsxJqMATnXwFKxCFdYGLyNqiFMpiZsXoJrvfNNisXyPCtRooJrxn7CfUQwL",
  "key25": "REajFi6nuMAeVU9tvCyBwTekDpwkfoEERa2X5cHUqh3nEdaz8HoC1tG78tEVdYTLoomnsQCfG1kvzP5gJ4Xz3Bp",
  "key26": "4soFsx4RwiWiMzqd3eYJHFpSPTPdc42S6Ex37jTrZRDr6EEasGJ81MBsrY5aLttWHGjF2zHg4FU4jRiUAu3qmARK",
  "key27": "3TqoG24ryY15G6gwgEgdVRZqddrbbNR9zgd5GzZXproCuJJ9Z4irmduAg7FJjRb7WB4HcLRg3FBWT3VgaYceiLN6",
  "key28": "4ZGBrayvshBzkMASCWLZeJ4mkxLaBTUFjnGj4k5PvuCSHeNgauwJoXHamfB91qJKrN8w6gPugepGTegQMftVhrBB",
  "key29": "4miHu4zEciQtp62E4vJviUS8wg6aaDwNBao94yg6pwttr1PXnPZmZEnDsVLyQZn2CvRe3AjN5EffdvupmsgywFng",
  "key30": "5HE5wx9WBJ61Et8RqNkgpyKowotKmwPT8oZJ7jr2vX96PtPuvN6CxpmoZf6oV891V7iDZcRrYhuLJBciCMp5veuM",
  "key31": "3bquDPgyf9sDDHrYykKLfdTngrSMSQB5WmQXTpi2nWWEQLCbmk67z5isX2KKszBT2gABKSzTyjZEo8x2Qam54JTG",
  "key32": "2vFscccsXiEi9eDf5Sn5vtLoSZwva5rshQuCsj2XF5s3gCwvQ1mQznJdR7xhpNPsMAseko1HX8xzQBMfTnJFNgzP",
  "key33": "3kTHcDGcFKV8oMumNXZKKs7ZvxHYLFAXvZpPfye9BDarEQk6PR5Xw8dhuihWdx87j8KryBr6DYaKty1ty5fmNHic",
  "key34": "3bvsX2DfDsvVwX9cdBkPnN3dDMKp94hwqwqARHKEXsQYJYntPiW8dYJF5Qk2fk1xMfnh7Ev175n8HPMDMsJr6k4d",
  "key35": "vMHo5rPtUy9mTQixfeALvXBcZhjUqcCbHuAQDAkAv4tQY4vWcjjrjVzEcRwwZZYNaPD8fZSXzCX1GvQjNiUFKNw",
  "key36": "3sGwMts95Fy9GEgD8tiuvFR435uLKEUMHtTVfEN9SZA1rxBqQjSKAACmAZ1YhotGhfb4jm3qDHCdJouXzFAMgLch",
  "key37": "3WAuFTfudgtHyWWk3QppVxF8ftwbukAatz9ZWBoFqApuZAF2JNyouprsruqVeaBTmUnBiAFCi76WorccvxK5mDjT",
  "key38": "2qVG2F3dYWDHWLnVADcK6At15oLLB1U7wr2Jj1gqa8KK2r3oasDUZAbQUydNmC7avHjmiVcoVxj1gv9SHHJKG7b3",
  "key39": "UJWuiLRag9tTrZPPrjYtQaDysyqrUEMvbEJZjjfgB9ww5ZwpGuUPsYcegLS1vAawMqoY7tkdn7sGSp3UJz6PLdo",
  "key40": "oMR9jFbRnbyUrX9KXiwB2PE1gLHxujU3e99E8pETNtY1dwgk3VLFwHuxSgpEt6PtNe2ped3jQgqgdjfDjWukCy2"
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
