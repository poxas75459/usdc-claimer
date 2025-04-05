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
    "3A85nVL5uPUNRa5u5NGtieqUqtGy2SZkYpRNtYBD21eoYqppNE2n8dyvjLX1HwnJCwZCfyuHYDrYYSsUTFpMuHTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8HuZRdrpcBczUPSx5BaAAYC1nDYMKRnmbs5bnW5SHBw3dZHt1rzrmXiYfvF2dyJ8357k5GJq6rff8xJhxUtHvVm",
  "key1": "cpbUi7tynbUYqgbavpUALBXYN2JK6QbUFjQ1bwwrZoqZSVFryqe5eNFVwN3qhxhsidrnNG2bHk9cfoLfwf6oZZe",
  "key2": "3UatwzPhsBmrVkgR8Z46WrpM7mKq9e1WZSG5QXfTVfrp5KoTZhDYS8Fiv2q7mGFrbS84oh2yTQ2KA1x1mneFXTmf",
  "key3": "N7cFLNTcBp2Thp44ph9vkLKEUh5wFcNFooWrjtu25p8FkWJTUrTxwUBtCircMGPAcgCoxf8xfdrfrNiv9NocqNd",
  "key4": "5SsFfvxxbg77AT6wExtt2i47e398WEMcUNdUmL9dRJbJrYyjGnUvVpUj116dvFXszNBXrgN2KwKXoC5CGTRzCKm8",
  "key5": "4Tk2v8vkmEriHLWCBoDj8Nwksv2eiwem2tEh6DUSnktxd9JVixzhM1cUJzVnkLukx3vEtfYP6vM2M814zapYxmXW",
  "key6": "3eF6rhvNYpLN31ymZ8PpazUSt21CAN5yXKfHhruFKX7bXEa88mH8zbXmdZEswAcHMW3bcS52MsxkxtJJaUgjz1dw",
  "key7": "uNe1KTqgnAkED1YZosc4mKecx1Xg5CzDuYp9i45wi6cMAS6eEgNQMUPhzdeiVdn2rwWxoEju8DkSYgNvXgXZRv1",
  "key8": "39k4CU3pLJfQ8LuqYAPN2hrRhCnn5KZrEC4m9jiGCMKqnpKvJbR4C9MQvexPGtBfLfXGnFoKhFRJiHEhmGFzfCU1",
  "key9": "4mb1Vqb9Vei5uyzQDWEzMGtTKs55LELTHRybDbXKfTW4K5gtSk4zwHJdQtKmu7iUmMcs9KjuuCsCKcCqMkeiFHiN",
  "key10": "4z93HkqJouNApBbrZLP12XqGKfE5N9WUYn53Gpeb9x89m3TwXsvBDkoozuJrFbKq1eQuv9SxvujNBTkX1sEW8nTf",
  "key11": "ZDFh4fXxEFj9pY7E2nuKR1Adv2JPQqEZsUGFrPpq8VnGwiRLFer3koraYaoisjwsuqJ1NSNo8a57A6tbQjy42mR",
  "key12": "3GSDsuzqNSokzKDD6URC3WXoiyooDvrNUJDVcFMhbKm7BKsVX3Xhc6oLGHHN9pvTqbBxMJSrhGU9bqnW9fu97ho8",
  "key13": "4UfBvjUEQKU88hd1vEw13SLDQB5RGfYFMDngrtt3uM63QSzgMZKNzBaV3TunuodLpXkXYpQGeoiDXMC2uFZxkLsw",
  "key14": "KFMVCpqpxxw7xJprYxinjrodimbkwKgts7p5Asv9J71PX5MibUsAmZXBya76nMrkQFrRzAwndQptwoQuwMyg2uu",
  "key15": "4DejKcxpb9sZ9FvPNT9hSSNtb85j4JMJqwVKfysxNP6WT2phnUrp4kUrnBAY5LH8Si6y793G3gEHuRphAkbq1bE2",
  "key16": "3PgePiaPnkzq2uzAvu2BeTJa7oi5ntPsHY8q3iijcRbh2Q8Cqkb6wi96jKEegR2XaycLt3wzkRgggNxwGAGG1qFg",
  "key17": "5r9n9ZyUa9rvdDY9F9FLqEWRfkbMFLrV5U7w12WtDCxD7QkHMbWX8d28fqLe7SkPrS1N2LHW8DNoLZuEVJYQME91",
  "key18": "2yKXSd8dcFXp2oCAHKk1X7V1sbS6YDX9UziWDp5QU2ZqqDfBVfEdv3VupXUzhriUptnLUsShLi6GAFE1bqDvQChv",
  "key19": "SQwUjctj7bKKU4Uq6VygAFP1Z19EwhyCaZNbHYxpzfx8AYvCABQA2W2WS4GupSAu3WY8upusaAscpgtXR9VoXET",
  "key20": "gx5JfotkrVprGRtWhGxLKGCAF528uSvcXLFbgwCn6DuM9nBHiJnHxHyNACyMuRNTzcLQiDCnbNb82Ymig1pRmjj",
  "key21": "4gQF3nQu8bMfE7wFq6KV9Jv6NYCQ2kZNHEzMybqcFtapN92RV3c5MQsLPpeZwYogaWthM5x7qH8Vwj9prNyFebwx",
  "key22": "5t1Pas3WM7zTFp8rtXPAFkQR9dQX2Y79JaMpUmiPfb1DWMwJHhiPFUC8qxboNej2dZfcq15WgycQ1hAJYrX3Rht2",
  "key23": "2rvf8KKpxmH4aotSG341byABw41avNSb9WXV9XUZYuSPv5B3GyWLRrWPGU3romo6g9R3DgUYjFLLEbWdPCALP8t4",
  "key24": "52ziMYqsJtZWacuzhFoWyMMqybdUvEuHmo6WJeELh2qnsbi8k6Z836S7DMrvEPJqxsBHNRG3DwCdkZ7kpgiGBdE7",
  "key25": "2FBB1vd5oXm3GReD3WBSQQyaqyyvA1xrM8jRJCuo6GATiUKr257X9aD9YH9fEwNKKGskCtPDgZ6QitNVcHw4Ax7y",
  "key26": "345vNwKRSAPCSDBCMoFH7445K9ACrvYquwY3syM7t6vrwCzTgx1RMym7driRmChYY6zk5MpdQZzfZyinr1DBW8cW"
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
