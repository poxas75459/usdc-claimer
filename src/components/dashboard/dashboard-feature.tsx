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
    "nwrPL8GXJJmyaNSEWYNPBMCJ2owYpXrHyoVwRiaDGQNoPTxUTJnxX5JmLcQ6eDSG7xUdLvqQR5KtZZabtTtPEcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AbMKRuTjJRHneSpMp1V5StX1a6tFEE3JHg7cA5n6hMUFz7YAtPEWynEHiC2cXzT1m9teH7jVdww9Har1y94oBNC",
  "key1": "tZEcipyLv2CTfMRtzaDnKHg8pgmpZyrUydqaWRUvAwLiLTV6ofC4HeFHLPUKK685Ef3ZpST4PWkQLHviQuaDjxm",
  "key2": "5DAJ7HqfmoQpXwkbMN8rtZTJ4iqPacCWTt7DN4FxGdGmLyAHZUiEjCh36qnJ1nB1scKNNomvZc3s8i4Fq4jcb83b",
  "key3": "4t2sbgddzmsFnvPSuy768GcxqxusqYG9eXomb7DfLzMFrREaTdSX5UVyw3nhmRNGnTrYFvGgm5y2heRcoLsEve9H",
  "key4": "2RdKo9WdGSAimmNTXmR4FJLHP7LBjX5UxxdPV9Yh3Y92q3pimSqWipRqvm1uDxkKbb87ijo26y1DoByxvLm1zu6g",
  "key5": "2DsuGioaT8z9TgnWBd6BPGHrqyHsdbr2o41YosVDzXBjpLzGjaegRMioYxZp5t4SpTy36VJ5CnQovckJ16oNEYVt",
  "key6": "4ErWooCke1CuorKnVXguuT28kT1bTRZd4V8aqe1SG5RN4frJkGEeNqywqKfQ3wqSVna3yR3g3iqbR5woepRFc37s",
  "key7": "8KGkv29aj2TBYQk3XNEkBWbjmzuDXJ3V1wnwiLnmmGUSBZVDWf1QkwGFqESfFmXRpHNr1K6HL8e6rWREUjE2Zn8",
  "key8": "2j5SDBU1V2Enwk93eBeXKbh4mihQuz8mSenDCVZ31amxJB8qEdQ1tm8peQ7qDJmk3LTbdvkxkENFTYBu62nGuQYh",
  "key9": "66erHS18QfY38kLXaAsrEfurPAgezXcGMzzY1V9eeNZ7WkvqTCZxf3TJB3uDyjAovML83G2V9ugjqMo9rW6wXLAK",
  "key10": "49pTGfS5Dxb6Vs5RS1JUvyBuWkzWQ1Lx8JN9dFmXTnrduHFDtf6fz5KLu5xYb3qJtxycE6Kn257xsy5FyeHkVAvG",
  "key11": "5RSv24yXwzQPgBYZxKubPxjpvRtLSytrEecEw2M3hdLDZRprQU9F1FcQnpc1uNFCwep6BbwWmGCg1X4T7t5Zvr83",
  "key12": "5zh9n4dQGMoymBi1ibqAScQVezaNkfPtWFLpDn4nBVKxFZMSkbwhWUxRN3WstswGAHCpoFf5EDFVjtJsghUbM2Pp",
  "key13": "n7sTCKoTEZzwok3et56piwp4wDSgkoiCCJBvYKYhK8jGkgACiH7fjaVUbcrfyyi7pQ4bxCjkYvEfDAkJVcXths3",
  "key14": "297b19Bwm48hA4nLWL4TbuJy6zcbhKJQezAEHTp4fyZoPAqUY8pvJrggn46wkHqABkTuCuajiwDtQgqgMVFpfxeo",
  "key15": "2TjUP49wErDVjtiSzka9GSafpYNuHq1oXdUABcFQHS6yMPAyizUFykgbAbNkzrqrQkppyqGDxD3Z8rpPubPhzxvD",
  "key16": "3LPXTn7sRwDrD1a5eudsVbfQLcnjhj7nCc7hfQ6UQaRdecweWt8nAT1xbooAyF4s43ambMPajxCqWqLJY4PCjBpt",
  "key17": "5VAtj9zwbJcK79oFYoJfVHT9AFBWZp4ayq7XFZLgzf5Ed2QKJ3vgqnCUgcfDn4MbRdo6deYzZgKRbmmXaunUKiLj",
  "key18": "5LUc3SM2pJB732ibs1hpwK79Mo4FtoUf93KyMLa4neWoJG37TwcfxJ1v4BbvJzn44WpXGMCBkyGbjtSjWQvdJcAT",
  "key19": "woFbuViYGvwe1o9QjATPBLuAAJbqAEEVmxdzxUQDoh4kii6Fv5RraHtKNLNi4qyfP5GCxFDASXRTHTLswyrjh8w",
  "key20": "3eyNnGPWp8hhEvLycn28K7sUUfZiGRvmWvMSbpS65hC5XiXifoweJ5oQJN5LeYci1Mf9PufsgR2WPxcESGeG5v9L",
  "key21": "3yGZgnSLFopWXBw6JyJe1fJcodtAtsLsPMMxcdu1whCtasUGB1VjUxUkaK58715r2Jqxbe1k7r4gufr1Bdq18ecX",
  "key22": "3jkMr9stxQwXB27vE7QNy4HCe22JaNf5Q14FHY1fKcCTYPJZgXNwFBKG3iMQxETnGwBy6Aigtisc23FpBVu13CA3",
  "key23": "5BJ4GZPQkgGWEsWdn5WLtjB4BVXY56FjvJkyxjUzCw3ifDV9NapC6qzQ9BE5kZ5cAkNvkt7cybcbx2kN3QJsne5H",
  "key24": "3FzRzU6VLVzHTCWBToZECjo7JdoEuXVsGuB1BPafTtzG6GqAmaQCzu6WtFCW3z3771L6Cd3sADbjV1ftbNoxvVvj",
  "key25": "3YgHWNq37ji7z3axSHRMnKvkvS1AdhGNjbWLfP1MoicFQkjaPpLMxeweJgC6234AWZJfhK3aaniEd6EvfqU15c8X"
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
