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
    "wpTcf5N9dXzxUVHbxUSLZJqsbt4LVh9TN9oWwr4aNonGSorg149FtzBb8dJ7g6K6oTf4goRLUnXhQo5o98DfvjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KH61SfkMhzXw6fN3fHj8kFgMKBGcBpHeLjJHdPMWAEsHuhhZFDhwyF5B6UeRMWwSvDNtNGsB52qBpLXwsxmM6fh",
  "key1": "2qvNoQyHiLmhBnH4jGM1auuV6y4BmQt6VGXP68zGmeh83qoyPbZ2233zuLfDTPMTXtbvbGYNp4uyLG9WsxjgaGkF",
  "key2": "g31XbPnkRDhqfNV6qqBpTSKhLwwJZhChrPRvV4gapPwtZ4uVvBfKjPhC8RiLtaWYkaHSKxiC7PqfUjcdWzsGuYy",
  "key3": "2Sy5QBWr1tTjVAfDrqjbNY21oAK8zu6qMgBYfiFsKMuj2wkJktC3MYtWiKDCzLeU231Sf8xHFMAnwSsALFYDanyj",
  "key4": "taX2MHxb2YhWUWmmrtUiZiFSrpRUkkz5HNXwEfv5d4RqKfB2eJvquuDsMnDS6SaqJvuowaicUNpW86grxZdWdVL",
  "key5": "HDcr637hdG9LWfY2R5oRdn3wPoNg9ReZaX9XAF1f4HaG9zusbTKMsUBUS6zZoNFkWV7Tbg59HZ7zvFtmQEsxt7C",
  "key6": "5G35kS56oLicot9F6bndDwWm1RBmuvQSD3kuKr9NF5HDCMbgQzrksqJt2deXHAfsx2BiYVyWkP3g82sTeKqL1FGN",
  "key7": "4J9WcbbXQ4Z8s2FdjA5VNym6ajk8c1kpP21BUP9kkSfGwDUJWr3vqtGD29SLKMmbskXg7rnCQp25fmkAsaRtFv99",
  "key8": "4eUfZ31pRpgRVbYBy8b4aKQyrAEY1G5C2dyBUsbSzDfkb6TNURc9dnZWPuAPNKtjZ6puCdzdJJVBQfMA8PQZtzmX",
  "key9": "42nSNEYwoLT1jHiriAhKbie6rc4w9d4Pi9sbgyAt1JvHhWq4Xxbkpekf1c6ABg64pgCGZoPXzcdP2ubUSgBVPMf1",
  "key10": "DCvjmarmeqFya7vaEEM71QrvjxnrCR3q4vim9YNye4XRV6aoQhGGWg4zV6WwRakarNosfPCCb3j9RHsGAsPWWWD",
  "key11": "nYNdgJw1SsRqxZxB6abEcMHob12ndvqx7HF7RAizn29ag5YDu4JabEXB7waKGHRzmRS2v8nytXhYWCiC5fBiwT7",
  "key12": "5BL6MNKNsLc2q5mis47dXmabQDe6gCqCDmq595P2jQzH9rJwhUXtiN5FygLaCRtoxiwESrcxcRLm485CHbamrmLD",
  "key13": "5QnNWZWTCLns2xBJQK8yYZGo1YngzyiDkghbdKbV25qvkPkC69AZL324Q1ze4WPKis7VMnaMbBw7pornmiVYR8Ax",
  "key14": "2s8kKsCLF5QH5S89ya925uFCfJSDrt6pEpzbUhgkh2HcYoBXwu2LWziuXGDPsEyBoeTRdcUDazd9cLFcMRgNwPhV",
  "key15": "28rvxGvA4ph5A8BQRtnZRAdoQ9J6Fiv7PWQn2KLfezbDxR4kkN4gKSrmNeZfR2WxUJThavNnD9WnQU8RUm1VXaWN",
  "key16": "5QHXSSCCFgyA9nK5Rt1qYdLNuhqMUarmxzouf3uChtTJCBv3Ju3WdDrLbQ3nVJwZrRpe7hff6WDbC8Ei8CgRdMhA",
  "key17": "5rakb3APfKTkTgMo5BXHt7VYz9mu5xmRqKkpgw8D6UsE1t8Ac6M574USrmz8smQfpYcjU6jc1ME4AhmcbvtGdf8P",
  "key18": "m2EZ5t72KcQZTmk7tguhYp9dwbkvxrUSzRyPLmLY47ShW4ywf16nTQrhfUD8Yc1xR7zQLK3FC4yDpXP8b8f3iP3",
  "key19": "5La3G8rWVVMVckNjLzMaa9AQLfVQmYNWVd8V7SnxXRvdqYsAodQHwJSSfReFNLdrLyBNrNnWKYwcRLe9xuE41Ud1",
  "key20": "3t2urjjcGHWymoBegP9oEggV82Aq3arrfQk4PfKokkMrhMzoSJzq5aebRUDWM7zXkUYwDriMHHTpzzNMUY1nZWcg",
  "key21": "5NiNWFJe3BAgaaMyJN79auoM8PPq7EApr2jCZ2qdfhgKWJWWnhaJZy1ovabDhHKKJQ1m74wNKo2czXWF9Ds8UTo",
  "key22": "31uTPKxz5Mim2cMRS5Wnr28BcCK5yyZZNYoAV3J7NdrWVWq7HGo7SH1MYAC96WMv5y4AYSPGREjGV5NjoKbNMiJg",
  "key23": "5JiaosUV1jk9YU6T1NcMDLpSKGdiyY5J4wqsSuHLoMoxXAGNuHFCwxwCVc6uPNJnLtchJtNJ1URiG4F72iGLQMdv",
  "key24": "2sRYWdWXd5xHzQ6poYTcdyv3ryfpqVrDdU9wmaKCXhcFy9S8K7Ytp6oH51ux55Bu7GP92BSHqpNrgAN9FcjnEQuh",
  "key25": "eud2x7yRFd29TCVFjvkR8dgQQ12XtUwB1NMvuP2tb2ZkNwVjjjr6JWitRvANcVohhGYHMy6YLxtegBf7d4F1VYC",
  "key26": "5nbknXwMfo2cYsEBuPKyUCes3K6o7kHDXfpcVZdQQJj48Ma4bv2WfhPBEfgfxcwj54512om7gsfYaGuBkmgCPYco",
  "key27": "3BkxGAko9gsyuu2MJ6gSN99ouNo4X21WS9RbqXWhSc5QbGvn3rc2mJDroTWYPBYG7UUcZdaWYqQ8iZUVVR8nAVRh",
  "key28": "5diUaFaAUVkYUWBARLwBieMccAsakdkEMM1mNk7eDWZKmfA1gR9MW5yWaefm1gis4wHEVu5pesdVTUoktUS9pVBg",
  "key29": "2yK5sZcv5WWXvAqb1BoqhR4ALHcdZJaRgKfcLEfMurkDERAnVV5zuH2mvUEMH7RgWb7F3bwkSiuQDEfMij4ZJv6f"
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
