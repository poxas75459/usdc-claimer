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
    "5Q9Dmkw4K4Yz93diAM6T7jC5TL4ZWxd924ziE8DUmDVi5Ki6xv8XWwmySvK4RDt1qoot3qn1UE4EiVCJAEtyrh64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LYSJ9coecbWuGLkB6uPDTo3HGGjNjw4bg86keceHdbQgHMouEM5SpJHfrx8k4UGZS6iekJYasoJhMHHdNVmeiAJ",
  "key1": "4WBp1R4gREnPMiz8o94QyuCpGwqJSzzjyhwLcdBWbzCTouWuiqCVRpPzt9S93pKrcCpY7y2vKQcAM6pR2ZithxEp",
  "key2": "4hdWGzA1rzA9fvo8H9GRPXkdse5HphYBADSbAhFqg4NshtW9XBEgiA6VkhQ3EsW7wcSGMEDi9YzoMG5RT68hujYz",
  "key3": "qdPehQikFJWD1xifmG2bqKXVF4FYjCoL82qsXw11cJ95D8YEFamyUXYbrNhrhWyE1wPTvLzqyVafksCYVoa1eij",
  "key4": "4zm9QHeUeNQhv2zjko3xE6ZmhkCDYtfGbucMfMdvVCCwaN8tMSCshvq5AUKKFXfhefhkZyy5C2ZVEryqcevXSrcf",
  "key5": "vNshFAustajUyRuBvgVci1UYLVn1Pj4XdwD2E5RmxSCJhBKVMw5yjKAKjzV5oiXVgHCeQS8dCz5craDidKddhDP",
  "key6": "5w8L5Byk9XrhHRnhEk7qotVBCkSEie34vNyY9CmoXSb2278CarHv4gPynfKrRTBEEkSVrFgbj7maFVsQEN2NN43",
  "key7": "4f1kQipunSixjgUdYKAZxgMrpAE5XZtiSxkxRm4gnqDkEPpgBp1yyoZo5dBwdiNYjT4yUMTATQGkoDMRAjVDXRjW",
  "key8": "2Ghi5pzKNznj1yo2iqFGCGZuCTDnCHW9K2WSWVetUy1QQBuyNALWcgt59GhC6Eceu2S8RVwAWV8jRU8mgEA686gw",
  "key9": "2NpeRUwYLaNfPMUpjycnfJjH9MW95xx6cJk61MSi9AdCbxG9dAi2wXRqV7HFs91hxqzvKPXSHa4wxtfTQYhcDgo2",
  "key10": "4UgJPUzcUNwH96Nu17NtDpLwXkP2x4i83aRyX7PfS6k3j4dYQ4q6hiWEGZx55EFG3TmrHtgkPPm6uGkPNqDS48YP",
  "key11": "2qqP2ssd4XvAobXi9yuVjmgbHprL3J5RfBvszMGW6cQMPsdssWjwVs9bJzeg1oY53WvgVwtAxc6jDKxZ9Z7wG8sb",
  "key12": "5ZMrZxbPfurwdqziufhE3SajKP4s9etNFXG1oaJdqFx8tqpLZQbYXDKBsDxqin24oy1VZqK6wrF27cP9sEmBEpde",
  "key13": "5qCMDUNesXAR6D4DYA6G7f7Bt5JDUqCHEgUhd88wuTUxLB2k94x3xqomiwuBaYJidQTbo3UmLMzMqif477PTteFN",
  "key14": "2pQUaARmkKtGHi3pxKFx6uNstGFoMPuJAo94og6aYTNqE5oJ1rionhFVyp3fuwQ8j7euYg21z8V4hLwAG4ZaFpE",
  "key15": "3T1TDLKoQA45vzz8GZ2CdWntvzsKspGbP8J4FyzL5sVQxTGvTzVXrUTnqbfMqdSJjHmYDkzdvH3HtVDWvqt6ZWAs",
  "key16": "42CMdFGwwxg1YfF3LqmwTuF3n7e3gnoEhPKreN7YHeWGf6krtBaug171Y1oiqsr49FZH4tQACBBzaCjpGpoMjhro",
  "key17": "5hXRa7kKKUSYL1Xa4CCU3d4rDTNUv5kBG1YpRgSpMNyipEoJP5kdxmyzjMAsoBFniyGsB1a4HXpNmWmMaydVnTXq",
  "key18": "48vQSxrVkGzNgvjr6ukiaiRxcUDiz6e8endPeV5m2CuYnHageeYK9kXem8w6jExkRkfeYDPLscS2mctgLAKZyStp",
  "key19": "2Kd1obxJtFDP4cx4NXzJDvEEHNJgyiaXz3v4CQCCXeXN8PtHRaUzzT5FEFHJBrDryjUcH6S9aF8fExX7vgVy2G7m",
  "key20": "28qG9q9x7Cs4jm6NUfM9eKkFyVeyszdKBuNv3GEvj9UrrwvsAQXxuFv2J9JszS6a2BNPeTTEsqmm9mLW8NCNKtJj",
  "key21": "2MYS9LeHKqsJ6C4vSS1dCBGiZmYGXLD5tvTSq8WUXxkAsvnQ8G5ZnknQoNATZuqdybd9mdFuykoR2dULnR7eR6ZZ",
  "key22": "4Ym2iwttoX12uX3wPDMgNc167EJrT2MbVf5WyYyninEk9AgLx9gU62a83voQjKVg5CT7rqp7a15ZiBBqVpnfejga",
  "key23": "2Ds1Kg5EUPmyJdtCu2HuMt5xY7eNpHBwb8fF7hFZ6Ewd461xffEPYSUWsxHHgoqHPS27ufsC5ovXEvvcH6oemVXr",
  "key24": "3KJfRh6LNrxQWG4nLqTeZyurdKFHRsLzxinK2X5RNsX7bkJDWWV1LJ26NUDjcGB8GJFgVYQTgfgBR4LJPfFarTxX",
  "key25": "5Cn2wn72wc5MkAvQ1a62NKLM9yge3U8Cbx9mgE6eZPHVnUW8uFj2CPKx4QHs3KoJXBhL5rMaMw3bv6SHYztHQGjW",
  "key26": "2r3XpUk1NP6yiqgKbj17ZjWKFxSmQVb81X9uhFKyewkVyziM7r45jMcqE3bMTaKoeqVA76M8n9E8bYxmcJMnBghS"
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
