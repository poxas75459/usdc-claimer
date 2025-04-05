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
    "od6zXm2YXcHXggeU3tAqcV1ZeQamC1x3B95ZRz7kfRGKtAMWHubSoLRwTXr5t6kahM53mUkLF77dozKzBTBJCLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vk93CHEP9nBBiJSa2cctKNxmQ92sR9FJBQEnpWE32AwNGTFGcbkvo9qLiZ33Su7JiR3qbiQCCbMKngkri5jP61B",
  "key1": "ChUr5K8k19WshxNRTVeqfHVMKbztZE4iMmcouSipEHh2hbUPckH9C2ix9qUeoSsQfVp4SGaCaQSPptZrW36naZN",
  "key2": "2HAp7MCDAQdwRhNnEvmhjV7S4fPFEbUeVcRin3Sk6UTzPUYumUC9jRPobLRrJjDqYC1YqK8FhCw8ZUWNJwJ8rqFu",
  "key3": "5FovfSPvy7CFbWgCCF5ej8z4TJSJpp4B7Qg9gy3YyGhemV3QEQujJQTHjt1wpqU3XvrEFUfJQr3v9kcuq7KyoByC",
  "key4": "662sPBs81Uip6meR6LopCYuLEi9SVyAPwbQSLEfPEk8vSK598SrGA3FXvikE4vrG616RMUWQswgwLe5KotsEmERz",
  "key5": "4pU1FMka6gKPpAGFJMWpR5FwLvDux4xFs1vV5mrupgoWKsGqHkk5Vaxr3KzxRixauwagCG77WV748WUHZB3JccFy",
  "key6": "k3t5cWFffS9kcgh2j4AekpwteMHgwewCtcSQwFAMUWkprXNKKzqw6gwiNWU5XUVnrxoj9DB7S34swDGQkwZn931",
  "key7": "Yx6iUkx4f2T8f9UoaQYHJijzR57vR4Bbg958Exq3bJfFH48bvJAKdL1PVqXJW6mn6CZ3dg2cFWPdg9a3qMtKnrM",
  "key8": "WvRVrXy6umMS4fc8E1ZmmTBdGBMhXpWMcecKqpU6KFe4qj4hRvZezY1JT217A3SxicykhD5MYQPKktztPQGkuH5",
  "key9": "2QoaEMXEYf4cM3BbA7smSqXY2Ls4y5xjQcvjMSoax9Ah3fYLyM6v3j9KfWvH6DWDc7QLDCj76iziA2jychRA6HXi",
  "key10": "3fUdd9Rf66DqkwZaXvryvayC67VH725zpaCvxVt1phsxtsxG3zspKxWVdJ4NC2xMiEGh7my9ArPfnE6x5UJL4d2p",
  "key11": "4159sP94YzTf8zcXySZ3hF1Y5SAHiRQXMYHRt79z9deN67cio1mapZUUSYtXXdFqgUawnPyeHcqP5vUyxWQMsiwL",
  "key12": "tfWTVrUAT5XouVRLv9nvarQDHgxcc2qizNgzF4nRyGmhoUMwKVjt6AMygJXpqC9M7ADMA7vqQbRx5sxdGSxssjy",
  "key13": "5bJt6D5ieW7FyMntkqTe7dkdkvdU6MTMLUjGZE1vvyjhKYqEdjvkxtVf9KEZr3j24K3oo9dLyzAmffGQCRXz35Bn",
  "key14": "4Bp8A4a9qSQXX19jBA2mSCMbdKjv8aLehRr59qgfvzpHsLGmv8H8YAqDJkCYoaLVBmG9Z7QKRWyWKDDPZmDY83TB",
  "key15": "5oQ9fYUYTUtF7AQRsALYy2r3WyeiU5YTcfqk9cmgfTe24gSQoKeeUmujdK8VWqD9TJkyyZ5WmRsc4GyBwhe1hhJU",
  "key16": "Jy7UnVkbf1B81iesThTrWpj7eR5KvJ6KoPTUacEEogv1spWG2WXuQ4Mdu7bSX6Pkhb1mjzG1V2ApBiA8BG4Le2c",
  "key17": "4c98JYwUXeVRK8sfLDBVyN1AFQZTLmbWgn3tSVfATthGAnLG7RDaUy8h7UgHby84LKRTQNFz5fNrnL9KAUkvuMPb",
  "key18": "2rALAvXUbA1XHm6xb8mBQfpq3jbwNEWi6akjQX7oaPFUYL2pGKZZqmcGSsw5ZYa4qxyZbutfGxh2BHVHSbi2Y3KV",
  "key19": "419oDT6ZFuZBpWKuiXNBG1V5Uo25GqbYBZJ8FV27xWMRaJp6ynY6uTDjivBjth5gjLAFYLpeRJ7mzNpvssGAUQ1v",
  "key20": "2mEFbWdBfYADCikqqX5V8Ruef6TQnqMdPR28JeTbopSWZYEYKvTTF1DGAF1A7LLaWpGPmUzqH2ZqbFXRSt141rCB",
  "key21": "57h9FTgXxJNJspbpvjymPmaVqUjjLdLjjGuoQdfMQvwU2FD78TJhHYe4PBgadK3hucZSGgq7WYNku1ZXjFnTTkQL",
  "key22": "2e9yDddx4usEzj6VnARYyZWhrCr47feRmigvH5trwNWrnjt2bsgttpSUVPHRCFXSqG5xCBjGFCo8ioyPgcqA9kPj",
  "key23": "3t7DwEBLzUvXwzZoGjPqeKuN5amVc2dUfSxDg3SppEs9voBYiAF3CCwr9UcJY1PW1QLe6V2tRT8Qz2UY8u8Vg72H",
  "key24": "inQ18shtwFV2xHcgwbGbzPAngJW21m4xDs369SU4BgcfYY3qYzxfCCU97pVAtSZZTJgeXD1fTakhLruwUf5NcGF",
  "key25": "2u6NmVVcLn41jXc1cRfLXXJCxb8gdvrQGwmkRqPeiPA4hiFTTP8nmqJ5m3eH4MMrsQJviqGDnVmRT4jfJHFtueiY",
  "key26": "5P2nsAr31D24Yu75zJpHWv4dpvez3LiBj8mdE2xM41VxeMdf2ASS7XCammW9e6hXZeSXkWYc7NLznkW5wVSKhMTJ",
  "key27": "5cVbaQ5ewJXY3iTacnHcA5w5J3J3PPVitriSKBzFUcsjTokfhDbGqwCJ4PQSKeckHYbkPQssN5sk9i3MBRRS92rH"
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
