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
    "4FQDHTfkhveNJZcdRq342LgYni2ADUHxaSnePAxza8eKNswswmepM9WcoVLyWxpGhoMS6VvUwDWjWVVgC7xTC5cL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EsypK5Y74vfGFhjKwFuU9zq13qnCYs6Z3KockQpYhGVa9RP8nc7pyqwfwdy9FbgCYuVs52MPR7jJZ6oiSyvLaCf",
  "key1": "3jAyK8vcJBAeeLSic76zFPoJ2T4nexCWVxCB4GwjfjFK2ijGjsB6ScgkksUfPnAxisWXN67L28Gn65uxSLtHASZr",
  "key2": "E4LAw7ANdP6VRUwdAJe9Q42fsq4rpFKT9ckvkUmuQDERa1ZvkxsWcwP3Mbw7tybi1iW9yCFA27ZZ4MBbQ5o7pao",
  "key3": "c1rgRDm7bnKtk28i67APvuwLHBXt9PyyVFMq6xAmNLyHZGg8MF3YhaoMy8yRHEnajuwKW8CUmzfakHWA6yxT7Jr",
  "key4": "5Z71srPS41S1b6SyUbQWPqnhU3qzjohThASNuPzD1ZN3JoTamZGSKuN8XV5L9EryzzuSD1RPEa2M2tiuHMQA8Vnr",
  "key5": "5MXgb2jiRd754vf2usQ6WyK32LSjRhicN59irqgiLoKezyXUJYvcJQbeKY6aEdVPo3S6p8R6BEHjYGyehtSVoLip",
  "key6": "495AQCwnggDPGTKZRRnnjhJ9J76xPPKVBAgNSvVXRVRLCLmTzUeCWtdSJKdg4aw5isFeUMyDW5n8Ci4GJhifx2Wx",
  "key7": "5GeiXazZa8JsLR93erhFokA9PbmzLLzLgQJxMGGCebkaPjQsgwstmroBChp7xgoMM1U1Aven7hZJ16dHZemyiLJm",
  "key8": "5kGubDCfYmaNkzSBmrS5D865kV4NHmNHXiyLe2KgLjvLKd4fCaArJeBeSEChW8zSkPbbstqY2n6SshTX1FqfAfuA",
  "key9": "3bJBAAz9B969U88GARNjvKyspGejoWgQ2SjHeBSiHnQVRo1pwhTms14RGyGfwBCuYqsnaie7bVYfmcHfaGUqv3Uw",
  "key10": "5H6cj63ExCsq98zWmjrquUAqjx8VLoDXkpgmmY29jXCwyoAHLfuXbCJp6nXVwZDzWFrUF2bnWfaLsqbrqiCJyWqL",
  "key11": "5k7BC43htcteNKnBgyEv6q3efubRF3RPdDzGfeCZgbqKHe6RS6gcGBJeX7awtvwR53KAwHFTv6K9faWYN3BmFxgG",
  "key12": "5hgcnnjVukELrkKcQVjDJRp2xu3HhhAMhKvgRmjp63FQzm1f7b6PqtSDrcYVNSZTnkTfDeBA6yMPzne49qcvP1j5",
  "key13": "3j8zokiYxbKz8VLHV5WzsdA1u6xWbXuejgu9yH7sSJLDgBs8ZVg4xrfy9Gj9KHULWUWYKaRuZ5GybqBaeRpTAnw3",
  "key14": "5s26qnvNgg5SHQWTjvC4jGZQ6cEJWnS2KVEJMWmHPKK5PuKDk6EdY6BGKYNQYnBFJq99XnAV36ppNYLSwtQCF6hH",
  "key15": "3gDEH5iLzCjQPGEcnqgJgocNSEdzq8zGARi39X7Vi4yMffP4m7aDUr8FfBTxLEGWsm7xJNu5opEByY2pPKoXJzqJ",
  "key16": "44eTiFzQ2shYJbtedx14nYriKfAR3pYtvKL65TathkBLfeVvK4WnXMaFm3Ai957XvcSx1iRJTkoX2vdt96bBP8sK",
  "key17": "5ic1SahU6X2STX38zbgc1xf1DeMLorTd4fBZs9uCm2d6SpotFJAaG4s9xutc27g36Y6sPC96JLTc4m3fbEj6ERxy",
  "key18": "2hq3wTCwVXNr6cfjR2HAYgmr33V8wg1qs6Rx2bwbndEAC2EF2PyPV4indNjeavAbYqYzvwySjZcogEfMdqYQ8Ehf",
  "key19": "QWKHiiyPHWVuaCe7vs7k7rJBxE2qd9BaygaUdQxBAxTSVx6CegHtVei54CyrAE36xpZDfJpjPdY3exQ1jdJ1vEY",
  "key20": "1uvRc9FCqF7uAQNKaYMWQCqrCx2pNmkoBEeHfDbjHVXuNxDHsyqKGc3mbZ4CoLUkJk4dJrF3MVydjXqL3UUJqb3",
  "key21": "F8HhqGmh5Kq4v9HMoRHGdvfi38tgbhNPzs89oRQieFYqjzkUt5JC1G66aoJRwBhu6tdJUKC1Jr8wp9AwtDScaSS",
  "key22": "2DTJUiHWbckzw5a18xnGRNk2nDPWpyJiCYVsnTvHmbbXFeyip9qtdakkRVe65u9yceCManEypeuQy7thcy9DtPJW",
  "key23": "3dqRQNUENcwTAjb9gtvR521v1JmzbJgHLFtEWUZGaJQfdKuWSE2ovqfPGGH62b7k1snwvhwCEagQbzPYXe5crJJQ",
  "key24": "MeeNMixjVFUYPs1KutkEnHyu4Z5sV1EZXoKmSSSXDqJb1Z7GokcE8RjyvGYPeUHovo5xeCRDJkuRPjTTprkWF2u",
  "key25": "2EbtjS5TCZBN1G8qh42jKrBig4oBGEWwyn5UsCntiU3rf8URqxGTBpKc2qCLvX8iSqWzgAE6sLDWfpTxsEhKojgB",
  "key26": "DbZiJUwjVtGLyvW5pKDs3pxVfdFCjywbnW1PLDPeeQzqaviGMwRResiBdpeduqUoxFxAAZZMnyQxMCUNMjYeEob"
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
