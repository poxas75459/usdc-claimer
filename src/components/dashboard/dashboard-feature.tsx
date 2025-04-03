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
    "YPcZMg1VD6Aj2sz6umBe1xdNeepQzP4nTPKjH6Yj4q6mmgygtCvAM5x67nDw2ujRYtamPCcwxA6r8XzBFSrh1YM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cAfs4ondp6pzSUxoEY4FAPaj3sVw5K6yLV6AWGoFhZvr3K8gLGmmkCUTc9CkALAN9yBfbS7HG6WcPXRtiDWxvQn",
  "key1": "4v6yNAdfD7WGTyr9mKd34Tqwzi1rs6PzFQZcnRvujH5vxjJxUqFJW6vWZctk2GGk7ifBcwrphKhXkRQwYegBpK5v",
  "key2": "5paA2yByFo3e28ZgMUu7Qoak6TMYUEUZmMhwCg7Mm69BwwvAR5nUQM8uAB7CVpAYFYqBsHYqFLxdNBSbpt3wzHbn",
  "key3": "4KwSVv9yBLqk4LU5LYTNRiPrZRBAk7qk4RegMhL2yd14UTd12tpXcavrQ6bFD3iTpkdnDzTTWWbh3K5GvXT9ZK7D",
  "key4": "nR99obJh7zN6oi7aftymeZNhbweKSCYquDpC5n4cR4kLp7DFQps5QKFFMQAXv3bT43AErTnFYpDC8VYVArk5wwR",
  "key5": "4pU6rdAowU2LvQZMymLnM5gzvNgr64Z88uQBkz4VZb5CdAoecHVkSNYb1CvUCgr9WuzCvFSSWVoeU61n7V8nCcv1",
  "key6": "wa3byeGbGhSLun97mgnt5AJezgiTqViJ9TJ1ogPLLKq7D3avRiXn8zc6dvxm5Y1XzpRHm2jnHCaob6i1aTq3L57",
  "key7": "4RExzkkxtSTen2MMStTJDFYjxoZT2cgiCt8Zo2oHBmEnstfPzUpcZ2qNFD4CD2aJfH7Pi4d253KYDgD9Ttti9Ac3",
  "key8": "5rMhwU4GhmcFPXTTqnR4nS3t32LnGhFmxbgBMwFmKXujr43duV2ZWJP7Jh4KS62q6RXwyVXu3Jjfbuj5t4ZaahNV",
  "key9": "RQjtWC8XpY5FdFSQKNkv4Tj5isBHnqkTbiHTyAmwxP48dAHWRr3DpwXYLV2rHo7wC9WR2dt9x6thxxq9TRhgjEW",
  "key10": "5uEeuYf7Rv4agCSavUHS6jo6VYtkpaWCmGGrfoqYyyse3GAgx7sMoSJXRDYQanzoQFRCx8mDysGgNCDvAjTdzmuy",
  "key11": "4TZ8qTHjK7mDCgjU29MoyyY5F5E9e15u2D9djGneD3vGTfv6fkr6hadYLyb7vbFzkQizPxtG5JQytVExCaafKSrS",
  "key12": "zDzZpsXzwwXALnsdW1zVF6oCk1UdgrGKeQ21cpMiFqQUdV42gsWCigGKqZtAjKrwZgWJHC3hbi5CYhcmB3Jg9Zz",
  "key13": "2xqJ7dYirZTBxTWV53afYe2L5gveQzaXwVUrm66FBP6kLHcMtLVdwSrbHMsKnjQZwq5d5Fe8sALXNhxfs5TPGXBd",
  "key14": "3jamTEbkXATdNUTk4fQpaAJgCh51UeRH4jndbo47sXGrmF1SQFS2ZMSvDdTnBUiEK8g49cBECJCgw9KgJaZwKS11",
  "key15": "DRvLHHcLMgczfXEdzTxWxaCcwPU2ZdqVvEJ4PvgadfVyXzXPoXYCEc2jpE2kKTYQyKpcYcu2hvvYN7STSpFUnjw",
  "key16": "465s5N1E5FaMGWPsW6pPQfgsouRy75upe6jVvRNnnxcSokmdJ3HH2dVsetsqXb5jYa2TEhnD8gVHYXGfRuoPXyZa",
  "key17": "59rsQ81Ca3tWdpF64jASqpvViteoexAoxnqkpCHqoCMCK55Km8gQ4G5DaXw9PfX7GdAyNVpE8LxZjs4GYuPG9jxs",
  "key18": "5XkDZFgmTap9NjcnkqWj8DytwEaemgizJs4KRE4ygjRw18CFwM3tuBz9wBGDXTM2yAVpExBcKYvJijfxfei2CL7r",
  "key19": "52HGcbQJBsyYwTRA95osusYUyQVvFicysB5scPuoQjCFBSrRwE3Eit6FVmstydtkXt9UKfiasG2g3hXKYC1wSKst",
  "key20": "62K5LTyZqFVap6Bn3v4c9DQwSV2bgJpPGCHV7NyiLH2w5AfHajfQxrzMk4ztonEeU8nb4mNHkkip47HJS37JuGyb",
  "key21": "9vuFsJ9kQTVKKmafjs77bS4HPjBD27pRvr6uGyqkSxy4bPkuWV8XnTUVGqP9QkgnbuEFqAdSiy7QVgtPT6o4Ebv",
  "key22": "2FPAEp3p68kGeY317LBPR3NTZc9DqvG5wqhS26JRwUxS8431Cr6utM5bnj9kwRwBxvs7FbngpZjxnhnpMUDUyX7b",
  "key23": "2zEpfvq554Ne2iSw8bDV7h9QR5Mwx7XvWqP86jFYbv7vJ4T3cVPnSkvhpxTsNH8Q65eg7RGGKeUVWwpD747AZad7",
  "key24": "3h2z1esFsYPsvQiychSDtjZQeDJLx6ZXVNe8Kfq6a3zH1BDAurwrMMLcUnmCExjsYAcEhuLrjeK3ejaXTpEmzMps",
  "key25": "EGQdKcDDsg8Qa7so8VQBiAZmKTg79naantSK5GcYCzsTgisJzF3rUXX7WAAmMdZiMxk7giM1kLH3f4wFFBwmpmX",
  "key26": "2rZyPqCyhabfze4RU6psNDaMZjNLkFP1DkZciym93tVVWaUHo2X5jTezeh7sGcTBLJ2S7nZo5N1Aj8bJ1DBdA8st",
  "key27": "2c4GiRJxizSpn8uRkWsjtQjEzkWzaxGBFnH44knPPftptzyFzKB71J7VJy9CruJcopFchZUBCYFEn9RTCdQL5BRJ",
  "key28": "4YjMn8upqsq7Z9gj9nfNpdg1f7QjEmoeNVUrhs9LcpmeX7kAZJuFdmuJyotZXKUrf2WAAQLYwNn22ooMXqhPofaE",
  "key29": "3xfqcFvSm8HDMvW1YWyvCnH2zLUwvsDwBcxBhymoc7BPuqxE4wotUgoQBWNqLR1RePUkknoq4HLANvMXoQv72czb",
  "key30": "2r884uoJkE32WeD9YCtWWMT8iizBqmhpxPp21SFDfusE6yRLazrb6ythkDQ82X3zyFzMNMTiNK7UZxJv4NmDTBKi",
  "key31": "4CMoA6iELS1FbNA6R4FB4kwT32582eU3NNhFkBDDkYaDLaEr8UjHPqn9h8bZWGyxNTg1MimFFsv4H6FTAn43FF9U",
  "key32": "4CqPGcXRJWjXrfmdAd5Dcrm5UjhW7u1YgwfJkqXNN9BA2JaLQnhvzU3rTygSiXS2WgYZgCnGBswZMrMpDJ3uWo9s",
  "key33": "2NUmE4qsHsugRprhJFDSt6eykWJkfmWVTVER5bcMSFWdZPzPTDStKrfyN1N7kNSTbUkytw7wQSGXFBwE7c5FjNvh",
  "key34": "3QB9rotXMWCNrVikntrNQhpiinaNTNVEo92bAMzKbAQEkoonUfBEPdV1jS8BAmGbCDxFTVL1iVuYoupkpJ8WYZk1",
  "key35": "4Gfu69HwwH6S6nexvYrjDWXtnDLw2cR9w5UYrJ1EzbpCvsuz9yUPJExTDDUev51VEZS9epvoL6iUA1GsJipV9raP",
  "key36": "2Z4Ve9pPeBG9dVCpRYSgPixSEfG4SepU8FgAGP9rk82tANPSnj2W5eYMpSzoKRKEXM532MxJDdNKoZ2C4iPUuZ4Y",
  "key37": "2HnPYHCWtb41E1us5o9tzqeQGFcCCcX5RGSWH8ULbtyTB9SeXX7ctKt8ZtZ8jUYLKWWbFyMkWDKFLB9NRrJFJFFg",
  "key38": "5BApZ665T94gpF7Pu1vtCY5PJp3s1vt929PrVxi6DgV7WyruxeBXki4rjd5smjnMTZiFHc5k3KaiBWNSirYyYemo",
  "key39": "2KrzFTr36k6bsJdGkD1vwbpH6QYfRA53bziukPRjQNTKdmkvEaq9k1NLX68jaLFeBk8tupcB8j9o2a9RJTR4uTau"
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
