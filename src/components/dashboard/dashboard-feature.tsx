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
    "3wxLVMSmkGQruEuv25ZjK1cNhVyfBgk2yhUAkH2XfgjGFYsAajjRQ4jMxuxPPjvAfQm2JdSMR7E9gun2RQ1Vwaub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54jEhsVdx1jGSA568U5JFqH9wiKK4bVUXQvZvHpqmUXLjygHvWdjUoGfKAJyDvVKqVbVuzdQu2QUDhZkzvsMGPjD",
  "key1": "62PHcb8vdVURF1YTJ5xX2mayfCkGY7RFH9KWSf8eXhoUYmhHc7jc7RHoAz1WgWSEZdLavBLfR36UCtZobLjH7y5A",
  "key2": "3yRx3HgeBw88eYfa5Eh8penTm6JKAKkkCJSsZXQJzqiWwWJ5u944KYav6iraCjG2weShe9XAZXsAsSshuziWsLU5",
  "key3": "32SZJ1nuLqzXRUGh4FmNwb6sJtLubrt9smKMX1oqVLfH8LCKkTj9XYFoX2WELqiHCMpSqMJtnVWZeaA8omEdQbQN",
  "key4": "4nu5qDLYRQeVqoCreGuo92GCYABsdB7dgtfJEeBBWGV3gdfmweu2M95agxiydbSYnvYb4fycuzWjhxrDns9cYfG7",
  "key5": "4QTaEF19PdT5AqayN1E5Pe9yjRamYvm4BiH9cFDP1ndCbwoD9nvbNSKVzWarRCEfxw9TNMfJWcpbKviiRGoXQ9W5",
  "key6": "WEEzXonw8Vgm75t2SzewRVMbFSkZe4TRfT456aZESA9pDgDyg1kqwWj9zoYcqg2Ear4wqvhAvVavA3c6HVNwWp6",
  "key7": "2mdeosZCo5WMeZbVXYH7DppkLSwQeDEZRwGJGwF85b3WR3XEPRTGCw4cnnjGrsgierwMaGwdznHN4jUHRHG4QFk6",
  "key8": "38FdpkenNnt3sFBJ4g8E7vUEuZ7zRoerqMhTtrxLXmSgTB47hsrNK3K6z6xrJzrJoY4cmmP6jRJWuD1jHH2XyTt1",
  "key9": "jgRzAmCwqMqqPfxgVchyBfjz4u8Gb2gpBCg6qwP36Y5PH49twLa86ZGtd73zsbMqcRVFXdSjPEUwYDwtyBYo3x4",
  "key10": "kjLhYpfF8beMD33PETbE2Qq9ygynQPXn8hVZ4MEQbH5iuC5LkvTo1HUa4T6QcWEkv7c335Cv5u65mg5xiJvxj8P",
  "key11": "K3myvpUvdH2Jf8nBUZjDKKrvMEAr8t9471wpMu6CX8rWUWPTf5niL4A66ubg3wsqopXzGsuwntKn9ZHG1W1Lh6w",
  "key12": "28B7Cy8muYvayo7Q5Wq5si6cUQaqwXBPvpYesBusKiQAkK3dLCigmVarxMXwNmRKAMLmAZwNzqbh1ZVBUFfB8ViJ",
  "key13": "4ZmgDwKy3neoGBtfivVoSYMwCSQm3qnCgkHQ5xeZtWeB53AQXhHW6c2BnYbgXDmZEtmrkDzrQQqwMQ3sXbXAVaHi",
  "key14": "2bdMCqia8W9G2oLx5bCUVA9bc48TWmjs17Dia8Q41k4RL55W5U98QTrBgJtdzKuDWtgDrm69jee7WVCuQPznZnsP",
  "key15": "3dkV8T19HBdR2jYDdy1DSKYyxQ2ADFzymkZPPuMJdh9mibReNbGuKdwu6sqwK7Wv1VCk6kShePRRDfKE9ayGQzk",
  "key16": "3YrtVnuJyebQHchF8y5N9eqLD2Zo2oWi3NowK3wdX1uMcNj4gJdXuD4xyrLoAiURPrpufTDDTVo6X98RADhChWRp",
  "key17": "4yYZ9ccxB9q4SUp1XYCmmMcEY28kjx9pfgDjCbydN9eqYreSxeEA9ryhS4EXG3KJ6tp5THwDfLZMHvuzTsenxzrd",
  "key18": "whAnxQjxAFkwVRMtKLdtbPc5GiRRW8qZzZ79D23VX6D9jPzoZatccwpxv7jsTbS8MF3tAz1r7Jeh5x2zKt21DMZ",
  "key19": "4oi32eNMRs6hEBjCyiqVYNzhETdEES6gWEH3Eri61Fba2khzGbkewsknpBDvmtsWMw25aGx34xYPfeQYQBAASBdj",
  "key20": "3kiMboUqDWs5sPgm7DzmPLbE5LJhpG7ghX2gxnbSNUzSkjEcgX1UuwjgVppVy12W6mGvGzvtrpufEwXTnpMEvJKs",
  "key21": "bbMQKKEvZJoqhuWxLM47vaUjt5TFx7rBdfwvxRTgA7oGFVbftL6Gy3YPjXQLooCycGdLqgoNk6ifYY9BMNQt3zv",
  "key22": "2V17mZGRib2evkosjDLZQbDjPNtKDQEoaxVH8YX2WPZ2GkAedyWKbbwerGzWYFzEQfojbvsooxp6Z4AkHDqbiK1z",
  "key23": "3cQmLERvhrB9eLuDuWwC93Y8jEB8CGLQumyT4n63rg2THt4t1csS6e7mDAzeLuinEd9GHcAwrAj2c4qZLFcgmJGj",
  "key24": "5ush8e633AFiYCus4Lg38QCvZD6J9GAtQPGMnaS7Z8asqLKZKNtxZTo79B9Zj8y58EvHfFDUxbFxHjVL5wcqNMbx",
  "key25": "5xX8b1YiUdYtj3HNkC9AD5983WwvohJsuks9cDucQ2nJn3CLxGDuriToAmsPmxKaYmTSjaYs8wXhSiv5pdbScsUN",
  "key26": "2kTCgBAZugCXxrHaPnGwS1V8uKrKCSshwUEFarsUVHUXCizCs4ANwBugUVprhq58cXJEZHDrxMCV53zMDsz27FKq",
  "key27": "39MuGSKwrQVUk7MsYoqnJRDH5qCm2vEm71mD2oZXhdFCbSN6hjmf9YCUydhNNjzndGR7rw5LM9hxfe6ddd8cMmbN",
  "key28": "43Szra5suMgnkAW7FP4qMHRvDTEcjBTYer44ciKEFUXgW6QUBsYZbT5dWk6HdYs4sxDFbLqbvuRWjEptJcoGNLZn"
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
