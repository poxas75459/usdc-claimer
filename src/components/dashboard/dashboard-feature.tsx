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
    "3ATX1EutrB228sBjZvAk1gbx8dnPDgwq3ieStCr4dpeogLhXrSkh5xedejjkmw7sxhtiyi2quF6hG83XMvUonZLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C1TQhRBqPbrZeQk9mieMfiPZ7nDVV3Gn6zQr1aDmBexY7TWNRKnGqnvBeZDJ61V94ZbScd3EgEN9RJnWKT3GHYD",
  "key1": "55N38pb6y6vavgjWN6YZPscZqiZgXdYEkYsnUjhzKnCmhVnjuzbvXiFVyMaz2aTQrbPzYuk7tsiEDYeDmqSxcepA",
  "key2": "4YBocdsHLeZWBZ3igMPbfu5cSH4codXFadCsSFzQh4j98YWD1XuJkhPGzn3YQsQHy78V3PjE3K4Rf1h99s1Z8So",
  "key3": "3bm7yTgbiRSUJ83f8QhPzRaSkpFHzLyxzZd2XK4CycfBV7ZZjbU8hGzW2XPvDceNsaAH5rbZSpUvPES7NB6mHJnT",
  "key4": "bBuauFjgSRF8fM1X9h9NQYiaRnV2KwZGzEh6Guph5Qt9qkvjiXkLPNeJ9ttv7Ewa7HYEHfGUGZ6t6BomekFpiyb",
  "key5": "2FK3sokcg8FAZLRYUyeMmMjYGJqb9b1qovQjVTV76qbSAzvuUVmNaKaG1CS1Z4MeHNBuNBEqQkjq8YkKYPUBqiqT",
  "key6": "5tUq4bexjQKDhsBfBWHfCgR32LMAD4UW9yyehfmfk829PKWJ31TBfajP6JdQoRjVucfDqLtUhfCsAkaBNnyUaasz",
  "key7": "2EbL7A39CiqrmJZztm1gtAG1JJb7uWx62MqFsUitaK4JexHcmg7CGL83hvAfnq5Cs16Jugc1ZyQiGyjsPRYZHq7t",
  "key8": "5F2wGjuCYM6mSM2QUu7b2kcJckkmh1WNHZZRKisk7bzvCRwSG31hqynskF5a6o5Usp5ooG4emQbyUDq3QvyTTZUC",
  "key9": "nkD36EEKYcrZjfZBEddDviWXu3eQp9kEN8d3n4pVEmoyzBHUkGUWhxXJw2p9xjRsxt1B5TMzmpkxJTDRvBZmxHE",
  "key10": "PQSiMy2jbhiYZ6dW3YkmTzpz797Ktt7bCmZMPAoVMwGo8bhQEXNMu7MV2SdzPR1LxhUzPcP99wLBq5xALJVEQtF",
  "key11": "4bwy5hEVx5n1pzJ4PnNjKEEgaSose8cxgLZM1zorBKK4FoD127TRBJGQhAK4LFW2bgGnaKAYF7R86J3pYZvxctGS",
  "key12": "4MTU8YmSJYWZyXRvchGM5mWMTss8rYAqzmirxuJ1uGnivBfyyCMCxZGdmxuMSjNZvLFEaTMr7Zao9XYX7z6HQSox",
  "key13": "Bd7X66M1aVupcevn2jMXihFAug1AhgAMgcTup6NEn68kUKwRdofbZjJ7E5wCccrGp3uHcqwfyusVbP55VbeR1oa",
  "key14": "5j8NcGHZm8ckgmX2cGpApD28NL6aofAZwZGzPynHxjzN6q4gYe4PfUGEqXmjmSnZqdNmx1vwmFwsYvDcJY2nAX5U",
  "key15": "3NFPfcSXFmfW1HZQtDUaNHzdd77qPH9Zc8SLswGDomW1CNKDt3uwXxM4eYg4YqsVCi3YwnkWQ9CMYwakRmR9a3mX",
  "key16": "PVeyqumgaB5efAUb2vXitTLoKaSwQwoyZRcB5q6mn2hZ79dkMRs94SJbTF6Lj1KX2FAbpuUhDHKK3Jp5GREhiyo",
  "key17": "3AVnQqMghyw9LrkipgKKE6gNwT8TZDZ12C4PyvizddWGdAzQcxrs6yDu6CRAREtZXLM8RFLBZhQsqeJEqRChc2tG",
  "key18": "3AwvXSEpwYAYbY5DPhGmVF9cWUFpSNbmqQ1946mzA7znJjQtjYT8htvmtnqsJa1ng8MDasxPmdxB41P2azg9pnv7",
  "key19": "bUedLGP4xhRFxSfZyRcW7zWNSHpcnnV3v4mgeXCo2tZNmxiYc9EkfSFvc348F9sJgzbMB5gmGVy9bvUBD46pmrm",
  "key20": "2pNKn1G5wiEiJ8yW95SHVCTPvUpjaXK4G4StPqgW9CxGysfEtwXGNLsiC67UbbE2QoYb7AKkUnNirsCAxJ1pGMp1",
  "key21": "3Z9giFrUpSHCecRiJofMNDyt7Ts8HwL5HMoQMAynxiGpMXZgTd7yBBsuLAeZHvF5NGxzquN3VJhoBVzUrMziEkod",
  "key22": "2djZuzcwRHERDXYAj629mnaQtBbGpeqSNuYaMHg7k3nNxxQF5uLexFRhgHUo3hrseqboPCibJDQgKvDXozmQysbb",
  "key23": "2ViLWFzM3iLSv4QHwzhp1cgnEAdV1PkZUUfENMVwPir1Hinz57hUyJnqwtk8bXXAnLZhCxNeHY8ZmVjhyMmXjgHA",
  "key24": "57wjqYhoiVGxDPZWVdao9AtuBCr2L9UGp19qHfMJFQjmqYWgqvXFcNnyqirTbimeEw5Nq59CEtuEdzbUe49dSyAq",
  "key25": "4JAz4mYST2AmuN2Vw4pnXSUFcoKHgiy7yvLQPdmMo4gjTkT9Sd1LFkBYcYzCVVcZgRbapXgM2AJoeCFH7gGTfFBn",
  "key26": "4UY8S893FYc3tLNhKpcB7XW7jHg1wgyrkWzUSkZR7NRyX8GLk5x6S5gdS9Xe9H6bHovSci82JhdccxY4tUs7at6b",
  "key27": "67VejsGPbmToZnhLxUdFb2a6heXg8JessuWGWDvB6TZoXnbsFeY8B2gNG8w7hvA493kXoheAjnoMFdzgZiLC6gfw",
  "key28": "3Ji2Dj44Mqbbo5c7JzMXyxj35VNQ3k15ckVBjMjw3QEb5UPNohczUsadoPRF1BPewKZsCsP33MiWEHAbfmE1qJ2z",
  "key29": "JDDxii9bGNDisG6U9LgpTrTpNr5u8AdSeF2GVNninMcfRYLvWybVkFw1ZRZZW2aj2JkqyuDSFNAANAADHK7CxUJ",
  "key30": "2xDjSZXbvw9ezbK4waL2LkZmDZZ66VfUGjoC4fZJEaDTrLDc48ab1b59vQHBRe1JWrgxEmzt3wRkJmVF9dVPPXwZ",
  "key31": "4U4QnCAavXXwaJXbzcWiLhuGeZ3miK5pBSU5N4fnJJq1f5S4nas8j8AxpXpk2eBGqxmvzNF28UJLEca6kbMQSxg6",
  "key32": "5HnAYaQhCUkuRgHe434K2KgPXw4pJDDx7Hk73urfFuBow82SoCo9mp5F6k4D3LGSWEtYQVbHwKSPzTXk4c66Bjuh",
  "key33": "c3Mkm3HRkJLE3bYbYy8eYXeUkum4nuzyaAS7GdMSG3y1WtpDka2vNQtbpztrJFbAZZNpoEZrha5WDpMgNA5ysFt",
  "key34": "2JSYuivExRKkQ4TPJQ4oJGzmvRScn6PCe9Ga2BJKgMWyCoV3F3viBAZrd7jkNPWNGjtBurDTsumJL5Xf2cvY9pFj",
  "key35": "5MVQDNNKY4QTUbPrpNw5SHLXJGg9EvQmgLMjWNEFspdA3RB4qHsdcxNuCNMHy7Z2vgxC7JLcDMiJcP8fpqk97qTC",
  "key36": "4SUuT4japv2DdsawFC7QRLLt5za4i268GhfP7qVErfq8xKzbPof8UKMgqWLZXxjD5rC6fiX73MDJLhYTzoebc9VP",
  "key37": "3mnHAoeVPBKbEjDogqT264d5jX8nRZahaaqZiCqH7N81w9sgx4ecsVK8gHY8XdxccgaDaqWEsHZWHsPHqxSdYfNX"
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
