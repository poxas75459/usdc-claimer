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
    "4tKJaL7MyTTLuTw2Lfn4mka2B3J6dtnj5ZCvHLPqexjxr3MdZNFssbJcd6sUvqPrxtGA3R5po8b9ygvqwzU548xM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FbDoKCWBTavxjbVy21PAA6qr4qZd1bAjYaz9qt2Nkv2ek8ss5Ss65eG6zTTHcizebPX3mu7HjoKgpFi2VE94ckt",
  "key1": "2a6hKze945XYsDVgfgWdMMKu4Rn7xWFD2Kd6E3T9ASnpyETuj38UDYbXUMJAKR6DCnotUPhDqju1PgJU3KbDXKhY",
  "key2": "67KZgXqDRACw8jKbHzPeCtBtrhbuHER74wMqPzuwqWRNaH9cm1pxMYtZfLmPQExonoHb6J55bmeTE42w233UXH5T",
  "key3": "3DerBQ4MLZKxvG1goEQcgQvSgg2EaviPZPbgF7vw4kErbezXkqtRoXZP5EUTkyC59uvZA9srAfpmHJJ1oUHUgvru",
  "key4": "2WuuovhCGPp3cchmBXWZXd97DE1uRBCgvsQytgsvY1f9bRxJdtKHckWwBuSLA1c5UMtPpWsUC8wdjKMMxXNvG8si",
  "key5": "4YhrrgKGBwTcozh8y3FbCkbZ7jEtxsiUuimakZnhGhKFiiqjnTEW2yDtMz6ykFP7btvFkt4bUbst3KySEqz2jNU",
  "key6": "2Xf7HLDpyPDQbiFcsdbFgd9WXNLoW6yZsgVJtjkLud8nKTfikNtGXuC3GMmhk8zbZAvAnEPEyWpGvxPkzAoucGVn",
  "key7": "3xLz7gPbRGH9eQ8P4nPUgzGX9YMDHma4xwyakBGsUcj5juQzgBgK1AbYzXast8uowZgFM3DzskDMfSxcFbhMHR89",
  "key8": "67DhjN3YbTQqnoHBFHvte4eBo5bMFQ6Z5DvGzVUUCtdStiq34dtD8nh2sPdAiAxFREMiwUGd24szmu8pLwgnUgKU",
  "key9": "5ZhgPFvoZM74nw2f4Fs2bW5npPekfzUHPF2Mu5tok2uReTftD9U6xAonwhGvF74SA4nZ9dYep13pDEeLLnXrtnjN",
  "key10": "65SZ8cZxEsehYDjRgmpt9wxWzAH8j1z8ZcvYPHSwqcjBu4zFRoVGvBvf4QwiX1ab2gHdctQD3A5QjfSeM9nQ7A3K",
  "key11": "4yt1bGkkx3cJMGuALswjsnHj2cyqUeqGW3Y3qzedLKLPvvtXp6R3ick2k1s6UoGxEg33qLzaSZ6Wcrbav3kVzCf6",
  "key12": "DjBFKY1nCALiMDpXHFeA1ybn5Lx7HkvhDjce26qRKJ945fjZEeeM6VZZkBgEDGZGxCNUZ4c2SxrLKworAJoEggD",
  "key13": "2KTcHGaNQCcfbypfdiwK3qhbqZfJwgCeiPjbbhC6zPJ76q36ii2Hf1oNHipzM1YYqroG7w4qSSHJcQJLTNMgEHgs",
  "key14": "4ammFpsXLdpY9EuJy1Rmxn3nScoubriNV1W8xzBWxfLTnJEYRaU9dgUcAgwpio7xv4BFCi2jpYeQNTRgzsrcPQys",
  "key15": "2aPNeFkTfMosr4TGDsPYQi8M7ZAvzugCDGmureH64564p2n1qTbuv7uZtQAFkxc86A6SJ56qgBsYLr3DRfL6gNZY",
  "key16": "4jCxYnUtx45zmKbQh62adm7PaivVZnc9ZzKoAEApysgCeHdX1587KYAcrkPUqsbu8T5uosNrBeZFTZoTdxKcF2qQ",
  "key17": "2aMG8jHDu4FZKhbUzSgjZm5E9LuVrVewg9aZiuN9gDgkz3xGWdxD4fdixpefuM8JequDenLpGSdE6hN6bJwKfkFg",
  "key18": "3V5UuZAW1jgiEgzJWeEoYfpbYQqKbX6pKP8KSyFNMibsZ5k8zccmLsaRNrEQWZbogq2e1UVGQQmtBPSkmWgoktpz",
  "key19": "3643tCLxiz1kQX5jjyT6uxLJVsCaT97m5EJ6KV4REKiEEQ2Yu7LzYmPYCt46XiPWQQJqZnMTLDCRv3Pw596neJbf",
  "key20": "hVsPfqrMYXSWFxKtg1KNCdXeC1X4W1CjKnFhoYxwwPfimPWV2ziJP97mKoz6dYCZ9GLBv9v8Jkn2cYu7sKWY8g4",
  "key21": "41TjKUMUN8tEocSJJ1cjTzpogjxvUdWLgtHJPSUfWUsTb3iTnDMjcsy7uJzy4qJdiDhzmX7aZoEzvfxP5gHYJT1t",
  "key22": "TE1i8VMcrA1x6UoY7jKjMKhGP3VwzuXq4Z87QgNggdT5U939DKmfe5Zh1sxGTyWjnBzKDw2oZLcRU5u9Z8kgsfU",
  "key23": "5KW7qSqD9d8xvCzPgFYJ1BXXC1pc2at428tBep3HgVbMB5ZKBcr5SU71MEkkHA5XdLLHKPAvY7hDPJ187f8Vw8vV",
  "key24": "4zhXtcVCPRBGZ5iaDdRuaUnBpmHzJ7XWCw4i1JyXEJafoJrCXECSRxtpa8E3DMS1qkaRNatQXB76dq17L1wCwxjh",
  "key25": "4f81BjvnpyQu3mpGjDDH1WGuntfZUkNaaLEAtTEDzBWe64ojgquLS5BJugvDg6YdNSvEe3u4U4DPKe6BmL2LDCip",
  "key26": "5VoaXdodJ4xLaU4snpZPy8oAKSVUan6PMPyCzEr7YiPhUa2WbZgs7y7m2nudJPWzbwGHmt8SR6hAC3yyg4c1qzWu"
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
