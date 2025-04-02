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
    "5gHHz2GYeaGu7s5WdGBA34hgGbcd4Hako4E6shjpXsb5Z3Qb6JkXdQa79awy1BGbLESfrAoZdA2xDRUJdTSrXjLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EwBBE7rAmQKrNePK3q1yjZhyEeFNBccs3n5jkDdRxdpv5tdVjSGtnd6AfkVvfM9C8VU9NYfZzk89LRfs81pkaKM",
  "key1": "5r4bT5K5dBp3MKZPZ5gSYzp8hDqhHTCxpZaLuJu4jYUePARfjngwyrVtsAro1hP6EzJpekJ9GByHn43yAg4bvQge",
  "key2": "2G5Apf1PphaKbyYSFoHXa7rsFtb9QUHRhBDmpQeMDgyDh3jS5SJDUG2dpWEH4JMV55i9U9nXy8KdZGoi7fmQbPrT",
  "key3": "2CCu7RMBEbjcDcmSURH7XDNshxtxhH7qZ9DVhjoUZPNXDgddnCvCBk6mjaR4GvAEUXn9nAKUbrUfhykhQzvCFcs6",
  "key4": "3aqytEB4Q5EJBn2gEjBmryV5fctxy6BZeJLUNtArGNzxaKwpkKFURyMnsL8YD9PdkP7JHLcYzr7fpxfz5tonigWW",
  "key5": "iVQRfSanFeQWeYDNXx1UZyectVBZ9EBnRkkMR29bjNi1dEGAURD8og3M73qVsvRJzzoSVSM6qXoisLUGhA9f5ws",
  "key6": "3zuSuTJtDZsNNq9te2AAS4vg1EqCnsm5tHPzXYoaKFZzV7DRsJvXTekHegeEB4iiaWQ64SebKDL45AgevUvUUYdV",
  "key7": "2oPBAHnJaFxobRnueeVc1xBNMebFk7Wn6Qx7eLzuvwWGc1kXUq5gqDmEruHVYuA7aLgrxJQcuobS2UbAaoLi2VzN",
  "key8": "2cDXhRhRK4UqAxHT5jGCE28iNTMs3v4ffdTZG2UzqaQ3jgu4GUnzDqeQZvw7Ak7Fee3p9SqfY19MvCtfNAPaNqEg",
  "key9": "5GUwvYeQfaZVuny5pW5uYzBBmCgnWN2DBDGRSfovoHoTYuR4tRc1Mi1MgAQahfxx3kPgqxgYgafHMHeGCoGka5aq",
  "key10": "262A5Qn6HU5XmC8VXA7jBw88V1WMb6WujX698BLYnHusQgzBHVuujvtqgjcDPHE4UCFAstkRXSwFUAMYmt7VLmYK",
  "key11": "26ExthWzARpFMKppandawwzvXBn8hX9jCWN8x3fXCWJphYgz1xRNk4F4UuTc7BzF3Gj3r7ZaeDWCQDAL8VXfpQ2d",
  "key12": "46hEXrPhUmQSUQfnenPtzixyujyfSzqWUK1FrcJX7w2VmeqCusTCwQQ2UGrCmm78NDSi4gWJAYYqDUYxYqmerpis",
  "key13": "5nVo1j88E9qxQ5GDqfWtN3pJU629ghzCvQ4ZBdQuceejiH6V2hRRhZmtPibmjTi1QsK3SWenrxNYuq9eYJGc7qzR",
  "key14": "561PGDnLWBcUn9NPBbHbYJVZPrCqK5ansQeigLMsCv7PhNAfhmE6efTyJB12q3EVuKpws3kV8onh4HPybvFuZZBJ",
  "key15": "VukdekchKf3RLwtXRM7X35QepembM4y4R3WvPR1uEBStUoC51stHaA1oMDKX944eKdaJVDHKFFCm58hodVDt6wp",
  "key16": "4TwUjyLLQGsXn1WecJesC6gFgnCeJGAdVP4JEc5pEMz9Neq42GfWVw5TjZuParx4ek4rZJueBcfEGdWGMvoFx9Qy",
  "key17": "5AGK1aB1NWhTnouC8kbemWKdMwtCDj6DpapRZPpLx2fwTpSCWJvTQMr4dDQKCegekGbpKSXjv71peLeNjyxLZoMC",
  "key18": "12vmpfvcfaSgzQiab3cnHskwkyozRdcGEfSV47s1aoi7Ycg2LTUUm18b1Mqre75qYG5VPdjUQfPzL2bF6nTATd1",
  "key19": "2HzTpjG5RQRbhi4hws7K2gCozyfiqXQ4R4uZ3NbAc5vTv2CV6EzjSQpxiVxDEoEbUMZLrdU5Wm1U6QYMwAZqrA8L",
  "key20": "2LsuVswYA7J9iPG8bZV1ZL3Q3YrxzBDzrkS7fzdupESCSsaimVHXzE3JjHLSaA2C3zrEncC33S81rhZ5w7XXtfA7",
  "key21": "4aayUkhwVDHV6MnsRuthzUdHaoW7uX5EG2USQFfRAxw3tNjn3fgQ4UnrvLRMKnXJqN81X68t12UmyQDWjDpDicii",
  "key22": "2GPGpvgoLTnBe9fLjD5X7EJgfaLBRFn3X4Vh6D1z7fyVMZ7KCbvfqAgTGG8dC3fkpenWbNyLuqanSjPoLfjGf6Cb",
  "key23": "27iSij5bdi2orsQtM3gGKEJdmfp6yEx9SbVR5tyvtjMpf7WphkPTwNNr1PGfeP6V4sgfGMYcuDR5zBtP7MR8tzGN",
  "key24": "AW5WU6ZCbD5YPsDaNiSxY3CkfUfev3jhkqQueG7ngDKApuZDh6FUbC7XZzeoG2uLwBicjkFBzesCSu4doV5b85e",
  "key25": "5sSF3xmATKWy7tnZVKgtvrghocoiAv5QVz4czSHp9zheWUXTdw2NZAD1K8e4Dv8u6PaqxGGQQb6Fa9v3TGRb7Gku",
  "key26": "5KAQgQsR1kQYBxz5KsaBrFJnkW3q5X29uDsmjAPTPwA5HZdsh8Sk3nTWNsW4Vtzct58LWEBDvxviZwrPbvEvDgQV",
  "key27": "2ag8vm5EJwRzJLQzzwzGQWcbrxqhVPr9jH6tFCXz9gVZNYYv4dqsTiSijTGUDqN21Mb2SsLwtmMtvpSHFSBVYtSb",
  "key28": "HjuneWmmMSMBLym6C89Q7LMiJANTXwQPiBJrV1YV3vEFPSko2hTWjTBHz1iZYU75npGe6JwM1mXJx6Nqwcf5Ta6",
  "key29": "4TwMxyaUKEiXtc9yN1G4kkyjuCfYWHQPLK8NeALoCDHMC1VrVkk9wRrVHqvdDuAemVTe7EEr285mZxGEh3rGJirL",
  "key30": "4hbfkV81dBSdnLCYVH3NdFh2j1J3Dg6wcZ4Y8He5BaPtdsCPN19RN8DKJ9kZQvJfVvekShDJwZhzd8iuhXZBiLu1",
  "key31": "3jrmX4bWV5fzkCbfDDKRWKcW9JqY6ZNWbgLG6wGqhyjNGMKdkycbCHTDahVi5abmSb2HjGQpYTMyLikZ3LoGzeBx",
  "key32": "57fgqCMkq4vzZSMreRHSUweyEQGUDmQxvneJTTXuGyo796qrsrBPV2SignaQ1Xo67jgQ4Dh1qaR4Q5KpdwXcjjBm",
  "key33": "2sYF4gUbob2PP6HeSuSV2uq2ymNs9RPV97RBpaJuhayDcxWcKJAwqCSW6GYCmXpLjBk18NVX43zM8FpiUYgfmm7S",
  "key34": "3wE9KRwDjevDvNZ68SyDAhvFPhmz7ZiQ9eL1mkLaehdWuvo4fGCV6h1MmEcHhyGTfkPktZe4Hfq3dhnXdryDh3hj",
  "key35": "s3eTuJRGeeC9kQWw3jFSNHtJ1Ez2LDv3cNu6noMBz2P3kBYWsQR2hHJZj7NtR2wCR7Cq9hRgmZJfU1vQWLSsCvr",
  "key36": "2NnUfd9QtBJuXndsX7wM6XnnqmPbd2GL3epCP7QHdCCARmNjAkCKgytDnjBq4GECPThgphxLvurXRcCDJ6cfwSFg",
  "key37": "55KnypeZQGeWUPBczPNUzWBRq3LpYtb1GTgus6rNecb96RWCHdbhkpmacUtEGSrpTAbrJy4zjowDcGHVYgKgphZH",
  "key38": "64SCwhkogfEaWqXFKLswkexvjzy1RDJs3kRaqaxL2o9f1i8Cwws362NsZyWf9q2kfATjCteM6cnush1FrJat6hsr"
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
