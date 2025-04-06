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
    "3EkTggDzZ2GMCgdFAWDa4pGE95J36sQpFLZcr9hL7PuPDpcCK2kbbxaGAZErLmVi5WjBUGZXk3WcJRNoZvbiAw34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x8ZJ4xuML4XzBNxCaSvxcJLXtY2PHcUyRjySsB2L7rYCQLpFqPtefvgpxHwtZhQABBz2ALQ7GiEUYcFwkgx4kCc",
  "key1": "3rxr7qwKfJci9Euqn2Z9TwRE5A4FkLKm3KjzNHwamK1cmFrtq9gXdGCxZ1HWReBYssnDGUxKrrjwkiRF3CXcDAcT",
  "key2": "2h9Fv7gT5qgrFJDytWnZCzy7mDsuBRaijdxnC8D3bsKxPX3d29YFTGTPAg5dTktuVorMCh6MwfQqcxLUadYw3LwU",
  "key3": "4nDVjpUSbQdKJZXA3ykriqZ4mtcRqNwzTBCjaFJLwxX4Zn1BkGkUzchwj7R5BvZ8GvXUsF8m5exsQLfhYvawtSdv",
  "key4": "3wggEuHMaVuwZZbtDvVUCF9SBqoy8CCuZhnvWpPtbRnftmtZ72xtxbsBoJZ2esSCmV7MY2ewKLj4vDU64jCBk3eR",
  "key5": "32LovTPXGTat15Tz99zxMeJw1jic9HGFVGfSNuR5LgUgWKpN3wzJ7vDejvT7LTMWC9qF91RoS1mvWeDVAR7XSkCY",
  "key6": "5eSpavjFbNWWsq3QxZK8EkHQWzSKXhm1dATkTX5peJ4fgqs16LYUQpxiqoYy17chzXh5FaLEpsiv34qyGY1ci8hh",
  "key7": "2Czxupfa9WvxeD8s4RKnT5a9J6XJrFHwBTNWyAKs77RCurCySzm7Hx3B4hnKbnMSKpZrvHfEvApcVwAkbf9PEFvJ",
  "key8": "Fi7npmYyJWYhcgYMcg6X6oPjuPxxPMYM1iuFGmozL3kMSk1hSJfbUUwAjRyLQiugBCd49xTeMPw8YH9enRHiJAP",
  "key9": "bUxrREqRUrELmngqsTn1gtDYr3P24VVSmEZJDj8rqJNZkGPs27uk6H7qsiWuVfaobnaPpMgm5nt41QRekq8aZoQ",
  "key10": "DWLBEJzuf9GYPZcocXsh97aKviYT14PFtAeJBM9WRYuhBRSjvgs1CPtoL3EUiftoHra1DqUn5UTMv1Xwtt3jmdv",
  "key11": "TYM37mFSiQPga7knwreEo98XsZwc4gYVBjuKRSVrXrCqhjYGFtXDXx5pe1FtskoC4LEao3XH597LtrpXfM8cVwU",
  "key12": "5BW4wbi9XWvDTosEPSX9oA3rwrA9LcTocjPfp4XSJwXxtrFHybUpHLFE2XYfF5Hnh53mjTjRgAZjTo1JF2Vtmm1U",
  "key13": "47bhRQfS1HgDsjdfLQrL9He1yX5S4avrZWhCVaBMJbLavrxHpFHUdktJ2y4MvQXX2R9ZBtLrfDzVWRyLMwrrZSpq",
  "key14": "4fPYbcFHVWZbhef27ZxYkCPbKBvz4yGbkTeiEz4oEUyLQYevWepZwtZ1viSaadYzoJEY9SkzE4Z8jaxTbLfViN2F",
  "key15": "2gTFa5gL7EW4VB14rAddTV7EXG5vXtaSYFA4NxLUw7guK55Pj7HfwqsyHJ2BeJrFoNGfkwudJWGamUjSRxo86cFA",
  "key16": "2z569qrFxTeBw6oeNteEEJ11xKdwjNB7ddJCj4PWH4u6AgZQ7BayaLaN2VUXApQth45wALohxRRWgdz3dhLiUMSY",
  "key17": "2iFESyoS3cpRnYFs7u9g3jGdq5j2czFbgFHypyR8KPMpWqnNR5Qg3Nv94q49WjbHqonfusMWixFBdBt8AR4Z6fvw",
  "key18": "PKNpLMNwPwZZEUKN6ej3MRGwe7qAriu6icPqsdUvmxtGjfRifZjvRZNPWUXoKgzevfbNwQFoBaSWQujrPeQfQPp",
  "key19": "4CoGac15H4wCyAh6qAGJUc9HiYCxvnfnH6sJxmAb1wNKvJdZBhkX7wqBpk4hZsuA95D2tBwAk9pN7i18wE2DgkvV",
  "key20": "oLgr3Jfos6VqVi47M7hdxF2xUk3H4osPjT1Yzzd4uMb62jbLHSdZcrY9ifjwSPYHM6dufEiRBBGbecgdDaQWP2A",
  "key21": "2BdWnA9rddeJXxrcgbLX3QxX1Q1RHTRAMxSs9HSXRV4TKSiUVj2x53Csc7Ct7qeQ6erHDW1FRnWcFvq1LsYTSLBM",
  "key22": "4XLEAGbdQYzBcjvQKdgwXS8FPtyhbDwdYQ3ooBsUFPrVXG4epYumGcgknd5D6kj91vrubtb2XHequhvX6W82rBt6",
  "key23": "64evdj4Nejo9qDYW3Hbdmn71jtfYe4GZq4xZEtPUKuruDy4XndPLyecajgcSEhMrCYoyhBxmhep73y9WXdDKtjUA",
  "key24": "4rbxZv19ipgmStmQh3GWYMrgwGetGoBFfpZzxHbm36fQNrtV2XeKueNFbpaVPoEe76Wpk4XarigauBZbv8viYjJQ",
  "key25": "2NbiNnG5jAGFZNXSqBjhtRnXNHYKvqghSDHpT4Z3zEAebheQsfgUPVLJygvXoqwkTAQWWh9qCwisD4NHhohs9Qoy"
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
