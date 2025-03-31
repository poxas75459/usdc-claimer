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
    "4qxdAyJdounQPm1xGkGUVhcHvBBUcaUkEDcYj83Sp4VLznq8QdAsskxzZdDZtcQ5CQbgP3yiiavCffajrNTdWw5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6661fZC73XtGUraPCeDxTHoreKxAkyQeQWkC42cmeK5yQNc17f3g8BB3KhrUXXkxgKoQahEEZHvCQx4HCdxABNQt",
  "key1": "iS6XqsqGgJ7Dt9ioQBMidKSeozomaxVAFgo6E8Jhxn37AFUcyZRDEy9GadHfKeFtCczTBS839DrhKgzNzKNUxUs",
  "key2": "3Z74Zto79T5AjeKGGUUcv2yq5nH1AnVRY8qaPJDDuMRaKgFSuQudQv5aDkU3D6nVEZKxqLw4qAnFrupvZWP7x411",
  "key3": "7SxeLNFDEtWZorUSFhp5UMv7xwNEJ7s7SbPPRzTVoid9yyWrazcfenDi1jNdMqLUC9fLA1yYk4f3XGMs8ZBHMnt",
  "key4": "498djUnLDz7g9iyywrhDoersharM29fi1ihQ4qr7E6JM99paD8GyHdGFkNNZjz2kfxgdSsUCjwaBgsNu8cTwxQD6",
  "key5": "3up5SFZcvHNNeJkonUAE9CtPEVpGa1RSUas53vnBzb4JrcxLQ2Mq8p41CzKawVNcHvoGTzVQ5rG7HUiofm7gwoqK",
  "key6": "3sgmHqCLmBSc7LrozVxGLjtuHrSRUcff6u4GhezG8iHiEKF5V6DB19GRMJQ1En4cXbq25svTACnY9U2c4neUFMFa",
  "key7": "5WWTjV4ktmoLBHJW5vrFLde2jfksJSdUrVipk2XycZBTFtf5mN4W6eouecYZVsZZueWQr3rnjz5ioMtYQNviHgsb",
  "key8": "2dbYt9K6iaqTXUdGqkt77H2ksYp7GieAYKZb8ik6rq46TbfWpnsrauqiyne1d3CXp73tX14ERD7zEKKazxo9cMXK",
  "key9": "5c9rojb3DjjNhYqAjLJLwMTcR4dUgXPysvLoLPjhwcQKZhJqH5FwET6Ae621SVipgwWXg5LxRbT6jQGy2HRuSJoq",
  "key10": "2wbXrUabCUiaEVCe87XoSrnjRjRAWCYwGpz3kycrnVL41jHSa8isxUV2aij6NipkUzpuouFwVtN6tjYBakxKymSB",
  "key11": "2F1u6VMjp16edge6KXEAePwkCxcXvVdk67UuGo5x1ebaiWpCTQjEwWaS8xhQGyJkdFnLbARvc9PNUb5bhCbViTJY",
  "key12": "3HyywTtCSi5SLNgUURECbm8gcNsbLm7iTPMuGMo19MXWMcjeuRUUGeAZbEwoP6BvyCvVH5KjuH744dgj5QnNQFZy",
  "key13": "3xnREnoeqKF9fUsdtUPgmBDHHPyeeEXhfsm18UhzLNAg8yLkaugh1eKRyNMUDnPwtgZUCEYLj7pNdTrhFTmBcTY",
  "key14": "5bzMqZ14ktzo7NgmcGBhx72RTjSmN17i2xzXCjX6cuz5YwjuxHcmxwrXssL223Zy5FvgqBW532EB3yX9ut4UMJxm",
  "key15": "46DUm97g8WmoNYvuDFHSB9pJKGHea11oxHkoeWC3poyKwfpV6uQV43BknSHcak9yHmwvZ1vuduYwqWg7fj4vLbXW",
  "key16": "2XzkdAixJDD59csBZd97ghBjXiBVFWwygQEx3bSzGBUSkHHFYFQwiswoS8uWaVCpLshCW3VHedLafU367e5aeGaN",
  "key17": "5MHD91vbFXkW5zZ4vs43SnBjTWvRMQU5hPxc341dLAZVCzywwczxWjyawyFQ8HcNEVN9qVrdwCZ5sQkgDaPiVUni",
  "key18": "VVUCWo4nssizg5qYG5EPV2WB4QrhJVV3X41N6KbHCeCFPkRYqScMEFvhhKFNYFqKgxaX1aerVi1MLL41ascdx4W",
  "key19": "4DiK9Co2jW6YueSezH38XZkHiSbPT2G6Vm2djGoEKPt4AN6UPSgRsuN2ZQJ8ydxcDbZJHjG62szXzBochCSqocoy",
  "key20": "3wkgDVL3oQdfi1VXzCeYMjPJBCHYLhqvTvXcaHZ2H8arhbn9F15qAfjHmv8Bivc6ADF2gwqDPwZDhjWrtjbucwt3",
  "key21": "5kQZafkfeXFgqmuuwA2noXFpueABR8JZ9N5LDEo3hsxHfwHjJmJ7j2ScA1mdGcyxgkAEPWF2uBY5oZ3hyP3jPc4L",
  "key22": "4qt2j42bCAgrgioK3yTShcThSVRrm9S5T5oc6qSUHEY2U9xUwQrwTKWRxFzBcrKNfnYKLEjfDD1nHg8fMr3rEZCd",
  "key23": "2LLusioRxtWVuLWJQzZobuRxWCFRpKnJ3y6T8Qj6LERBBFaj2miCCdWvG2y1NW4AEG8SCPQqGB5V2aRt3qFmtofC",
  "key24": "jcswWh4oRSpu364vQxmvW63EStNVe7GbhNpVaNByCyRGzQXEeBhE879woZ15CL3x5gGsdgz9WXimmd92wyYfffh",
  "key25": "GFDYgzufJJcJkdEh5Dapwi8TCSUTYdQXdk5LQDPXytDWdLNbpCeLPGX66QjP3bYDab5h4dtjXwZUPAsZhk5kNxz",
  "key26": "4KH3ZmGshVfSJ5V5Pn8B7ZGzXYHDNdM9CeZYKse74XLJQqBK1FJy5VUwXSYFht9SwZLT4ZurSZxdB8hbQMZiwDiy",
  "key27": "37efGvEyr6RM7VTx2XsZXWj6dfAZ1hbD3WPYhvEpKMEML5dAdyVJEvB1vknQB8RzYUvPVEFtf7S8WBcs9QoCK8LP",
  "key28": "5FR2v6BySxNxXCqGFTTjhmvnBERdNnaYXAfDehTW2qQCYJ2pn2L7Zf3Fb8EMo6PAnRjytyra6HaAoJZmqh5xQvzy",
  "key29": "4YoPEvpmrkrYtZv1uFwJeyD7xnUubNtUyRANxqC6rpAKRiE4zfnsg2w39zXnq7voGQ4u5cKeHosYRQ8gMSa7uRAi",
  "key30": "dKEukh1LH5AaGDATriLFVmnDVpQPRGXM5ZA2wSHjC11qyrVAnrVXQYPduqK7u2LaJHcNUmvZjk3RfXzc24QBmzG",
  "key31": "4E2tNMd72zSaEjNznzHDt8moX6rVvm7Aoqfte7gp5fGFNRk1mr9PochP6EocZJ2SbCjtUEABaZmMkvYRAziqCaFU",
  "key32": "533MeNTsFdAimp7KSirnT9oZRgRm1vbca1hfirctNv9p2Sv7epTgiZdEUDpjWcgvMrbRjoPLJtMMwQypPA1n4eW7",
  "key33": "2ioamnW1ETaisC133z74M3Pn2TywBSXQPtYNLo8N4czpvzZbHmSncLVFxQvcivxN5UAeqjVbSrMwYDggJZKySkbM",
  "key34": "2FSvG8id81Q6WgqamKKgmAdBBZj8zuvnmpkrnSrrBv1UCzwVjt25BUeinhNRmbzvdBJRZNaPyZwjePMfKKhKD2Fg"
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
