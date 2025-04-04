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
    "2zKCQ3YcS2XrmJWWofVk2QEAyAHRcnqrJ2Bz9sm5Lg1weC199YF7Afnaa9VuEaJUn8V4deeQA94G2zqL6bH8UPre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DvEkYBj5xD69kHjZg5dJ3vkrgnqbjeNy1qSviWQzPe1y5YfBHjJv9exQ5dYiYaKHS345Nf8RhuhVxw8jYJdUJTV",
  "key1": "38rUC885dhz8EdaWeWdCahxkMTwPNCoq7N6w7a8BonEwdFB7RbPzSZi5HhGJ1KMjb7ojQgpkRVQZtjAEijq4gZRE",
  "key2": "3jswrbfVPTyvuxPRLSsRCZSxWYPZiS5G5YSZYH5na9HdN6ShNVKLhA86a3fr9Na5sK4QYYeQPxcJGdwX5EaiZrzG",
  "key3": "4ZFBoUMPB4Lj6k2FaBnU3eAxvit9Nxyvj6qJqBBpEA55vVTtjWv1sHRFRNAqhKLdtFmyeK3cs6p7MnTWZMpyd9cz",
  "key4": "58knfqump8Kin57m1RG5MyLbDs5G8sY4dyMeULSJ7AUYJwbgcVZZ9tg8RfbZedhrVXQ82kU1PnKpTcGEcpzyJ491",
  "key5": "56gCqkd4SkHfj9TQUgA18JBeTVczD7LtAAvdAS2JQ6ppEjAn6vJwxSKr5rGTgXcyVSvmEXfzcgC4ge4kMpynLQoq",
  "key6": "Vrf5vZ1snNPRJeFkcHrEFrT7vs6LucjBLDPobitmnfTs9zu5t68q9gBorbR4fXRrGNsc8FUhy6XWvJXjjGELGPK",
  "key7": "4MJPaLKt1ppuSHNP86fpH66qzUGinAvP2u7ESuF2UeeQf73NkzZFchvzrAYeYzDVzqAzQEB8aDox1mxjThDtzo83",
  "key8": "2dLRrWEf16WusAzGp8gypcVSGF9FQDQFRNLcKMAxmLKj1aKpGeSwUTXsEqxNXDRZwLXzLVpnwodPoBparerTsBki",
  "key9": "2W8YRFkoTxQgyLVZNDo8q9mu66ohAmrS4K8Li3BqMpRop7tewwrUEnUmcnpZdEE3C5bo7eY7Cm59Suz3bfFSVzVS",
  "key10": "5yvEk4Jadin8A4sA41t6HMZJgF7ewdjm5ydDJf8sn3fdxEHkC7xgoDRRfu55YsuSbv2m8mPLZTs9YqYje2dL6jiq",
  "key11": "2Y3ABFSpVJfJMALYAYJqPBeny1tsAFSm7Z6KyfFmC3mEB5k6yezEgREHenNmFZZjE7H6xjwewULwUVc4NSTDyGDP",
  "key12": "67X1Qw6jho1849AEzuCjBaWjpcSDGB3YEyzAuU8kKDJcWsZBgUtP56EA2Q24LrDrBjr8gqXEvrC2Gj1E6gi9Pm22",
  "key13": "48P5Ws4UgMHcBRvySjQtN5YarWAxamwH2NsaVQARpYUyWDVrcbMktoULa4gh1MUngb6mfHExxzyq7aZnEW6HfiU",
  "key14": "2oMWCQLdDEPbWxLRF4eAQLhvEqmy5AGt4NZArViG7vcM1rd3xuKu1CGHRM6Jd6a7CUqPKELN8YqqJ7cZpV4SxJPQ",
  "key15": "3eogT36fjVALbwCpn1aoGMb4p9n4omyACX1sLBtdVJqEcM4dAEh86qW9GbkGBT4QNNPTt3fL27SHWkEcZoyPLXeo",
  "key16": "jJ2PK6BrcfUMyjdtAciGTmpTv6QptXCURzj2bixBdwKXtBT2oXh2WnrQfwkrbAfrnsxAnNsuf5pgZusQi1X67wA",
  "key17": "4QxhrZB8FYbTwcAUjqRL3MEgziTtNJgaWmwfTrGBP5HrsNah7sTvgtYmmQNtfWu2KHPX6ugQjAqKzPSsTnECQAY2",
  "key18": "1SKo3M9zemfxCDHBqGTXq9JnMvvLFAQgSebKj3KWtkf5JHr67JTtXmErcVdoEVVowY2h4QHjW181Ei9jo3JrkMY",
  "key19": "3nm4YkPV3rCWp1mmCgm4cKKciEPu3QVZTddnvhS8BnWvC3iTfiK1TSwVjc9SNW7S28g12H16jM5eKN7NkGswsefr",
  "key20": "2nK6BDJ4KAYzuBmrFVFjB5WbJFZUJ2aQsCdGZtEzuaycaqT25gY9xB4Yb5Ldqy5wYncCUaVvSaRdtqtuXNyutmLf",
  "key21": "3bHoU3M9wsQCUwoU2TTF42DScDguDxTGyUPDsFVrxLhm5GhqRrqUMLYZ1DgQBHN66JRBE5wScYXzvhDJEFDLDzDN",
  "key22": "4rNFuPtnJihuzdtb4qeHUr5Phc186SV2mGdGbX3HkfwcEyuvS552gnenskCh77XQpJ8GVbNejEJBF5KiwZU9sJDD",
  "key23": "4ZfJQiAVGuNc7PSdp36BNsqSuqVepQtUCvmUyTNTXJJc1iM3L8oJWPoPRJMbJuYnVV5bjhZB3Biykgv4FzaTrmNp",
  "key24": "5HNvUyqSZkZck9yknwqbJaxa2uP6AeayfvmUT2kvW19Sm5JizwppHKn51mNpnHZAUXsTFZn8WuQJFgjZ4mpvMQYM",
  "key25": "2aEZgoMup41UdG7ycoXquy6PhiN6JWrXSt8Q3q14gn6WJB3FhLksKaQdmiiFprSEnfYUFneJrLzNvZAsJrFjCutB"
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
