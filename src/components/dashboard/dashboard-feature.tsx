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
    "552NSvwtJgc8KBW6FQxZeT25jSnUees4zKK8i1QeT96m9YqGyj5EapwyDeUAgzFztB1L5n8A37w72H7Zr2YAQ66k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YxcrXasWBLxAyHgEVfnrSvAvUm1GUyseVZYUQLVCupi9pWx1dVTBcBuvY2ABPtR71iKDBN5PjzmGxK1zK1V3dWG",
  "key1": "3BdNgm4cEDMFWcU2HVu3pyh3eLdj2EY2EgtEQqyvTCqF5GCBzdtXK9M1kzFeFSBbHCFQq4uYcGsmgpsh4aPcjoFp",
  "key2": "7GbAzFCWfki51WfMHYiNGpB4CTV8CQFCQyZrQux36dvmWdzype1qPtFqybHMfoS4qxcaBhVywpFX3P3b1Ga1P4Y",
  "key3": "3FFX31pkJv3eenPgs7rbGhg1NpiHwqz1cbGQDxBXftbjSQ5o5k26pPfrzqgK2oTMhkweYLiE5YXebSr7GLVEGTcx",
  "key4": "5vELwbJhD2hwrhW3fuwvVs1gHFBf7rAcXiaFJjkWjRBtiRRnr5fodkorLQnwpmEP6NLua8jDA9wjvd99bUV6Fneh",
  "key5": "21P7ANdpNY4YQ6cjFxoHF1Cg5Mff5gsuA31iWxGbvQBU2vyRJANJABvrDZxHDfkgcbPTLnDNf3oBo93BZJ54K7K9",
  "key6": "bi2mfxsGUacH5pYA1N21UZxaUVyqcXMG9dxDKPy9kjyGBnYo2KH9UuAFzRP8ApAYwtVpBC72XiudCk1uQKbmK9p",
  "key7": "2ocebkyBX6LDKyQt6HJJbLJQRgVGZsP2S9xFJc3aqGDrqTwCQpmUfaTZgB5i2AmSbr8irssujFzKXpW3cqoYV5oY",
  "key8": "5upCXjYSwStGMgNiLHQKRy8sZy56LcJ4qCtnbEyWacy5au71LwaMSwYMauabpnTFCd3eBFGqvhMWTHfTCv3F4zKr",
  "key9": "5Cf1pNPhg83zSuY1izNycBJCoedZ4KkAR1JFDxszd9GXM9dgzJsSvkepRn7YN5jpQLe56HX3m3Mw2mwfYfr4BC8F",
  "key10": "4JFoTqTZU9DRSU5LX21WepokCxtwCiyS6Xeo7CHQD85fTaD2eZFTCHnh686ZBtBNT1miKjSmC1dctXTzycWcFPCq",
  "key11": "38RWSRTzygh5y6Na23DZobsLr2YPuKdcj1YZiK9itReusLf2gKC2ejRzerSLg9dPynijmMh5hkAe8GoGyWCezwvg",
  "key12": "5PqjearmtxVdN6Kq6EfKCFVJCcZxRoWu9G9PA1J7dLoCMStDNH44fUCSMQZcpSRbLZphkaYHYstDMtz3G4YiAKuc",
  "key13": "4mVdggtgGK3XjSv1CZH5auTGsG1BykWVq5Mgcr8rtp8UxkFxuQRQcp1y8QwfXGjmEfegdkUQbHzkchqbXekSUk1M",
  "key14": "4XtkEZyNLzZeMX977HVauZ7k3KUQ2yRRBqLQS5EaZTLL7nxJLk4xteTp9ip5njoAGLeDMrmugfi9tXuYHP47j9EE",
  "key15": "xa6ioJ1ynuz2dYACreeBnj7s1nP29Jg8Sfz3JXpSWtDoBWe475tWGFHuKgtkW6sLXmSWPMHLmQRhSqNUVBwbdZ3",
  "key16": "4GyEST3Yr1xP12LUUZQqK5zpgNBXQZtcNJEeoLkanxovoA2PH8wM5ab5zKZjgy9yzDiHShNsu6ZS5HfNwFTT9nob",
  "key17": "3XMBtndcnwVzRpFqomwojBGqEL3iDXXARAqtKYQrjf4QrSzFb336c3eso5pniASdXLKYCM4mNSdR82jK4qjFvKPE",
  "key18": "5NCiCjfD5iqaZi1SADuuRbo7neV6svHrhCE5JugurmywnNnv6PRexAgHHnmpdEY3LaGNorBG6WCRmrAupikZadNR",
  "key19": "4Qry17FwvSgMUFjTUgA8beG7mZ48CQ9pRzkJ5WKUSPeP6voS76ZKQPBoRtAdRkdGpjV21PE76KbKyhM7C6WVFL7v",
  "key20": "42hfJnhGCYgY98axL15V8bkuSF9TCT9f4xM5Q3mfoQLnBgZKVmFX7aYAdEcTfqwsZVKf7ojzHy1uUztbYkjQgbMw",
  "key21": "5nMz9buaqaCnVAK62WXS78inkXrnmFqSdBQbJPrBYp3DGeDBbUXeWcnYcu2NdBSRxetiN6ZvCgHE2QoJCmnxWTTk",
  "key22": "Johy5inh7tQo6rg4r2sSaxqFGF7Vu4iWwqBqvhUcZyNmhXPg7s2VXFyBQRXJX5nkXja6NiRMG6w6RC4B937Gtrt",
  "key23": "4KFzrKQrKdA77jypfSqz8Vv3RimZzYfhU1FAuz2HHkKnKfCA2wUpEQNXXNYut9yN1yGuRmsVa8dCaRzdJgzTs1Sq",
  "key24": "2kmUnyQ6Cprv8TsH5cChq8PiuRWAmLDZLh5vxhkdwmeQeH35ANS7DqwJt5VQVSq8VfPW6rHDx1wAor1AwsdmThup",
  "key25": "3a8D7tpk4yETUMjbAUQmsURHrXkmQqWL35rKAA4ybNcbwGjgcSr2YARaqto5rSNdu7WeT9RaAjdP8Q8ugXK71t9y",
  "key26": "pnAwPjK58Vfv3ygNi5tvJpJZH8YYVSgC8v4WmczuqACbDAtdytJKrBEFcLQ3veAeJJtP8JqmyUxoqxHtPvb2Wog",
  "key27": "2jL5UsjLKZ1zR3zvWHBrWLueksnLCeBhFaWUjuQwfFQPNBEebdtBvuQF7Ng5VXsUVqLtrE8F5EjrL3SyUbnkbraw",
  "key28": "ZFEzwBK1WpJ7D9Vg1RK5rGp3zgDdaKseektnxAb2fe3Ercspz1q5ZJ4hudiEYN79dHD2EacWEeh8ZbGoSKbh8p2",
  "key29": "4ZkFJiwDMedbmXV8bYUjLLJwBfdyUTwM1NsnCvWpjuFesxY8k5PMWG2RUztcKD8sRJrGFjuR92U6jMGpNcrV19Ca",
  "key30": "4H3rG9AX3kBJHzsgNiDoydFupLMCkRt6UKdfmnE9vEwxgbfanNtnhhiZdcAEZVzNQe3M797JQ7gjnkodcAfbyxwT",
  "key31": "5zL6xNguP5R2YmyME2JnSQxvCQ6M6E4zLgR6CLJ5ZTRrUxNup5pPfZoAmNJPcbcHuSrdvzgNHuDAvDRgeWaJCRtu",
  "key32": "1um4zigog7w8CKT1s31zJErs7xwxSFjzFxJV1Mij9FUD7q1dgznXpdqM7vN6g1oJJ1DkViBKDP9HeFcHpaXu71R",
  "key33": "5aSrsfLucmerUTd6c1dNxFdd6vh1FWmCY58guehZd5AHsNXZRssGzWmS8ECpdpF5M3SNJ49qVL4DqhzYjRQHWh6",
  "key34": "3HaUxu53pJPmC6uK3JmRvozBBER2hXxmqHRpgCaS6rNLEktuU32pNm2dd3HcusLckPSuFz9bPRk4mYGMgXgR3Lic",
  "key35": "27p2FyDDkbTt3s7hfQbfRb9nCYzE4t74SKmUsNiFESFm7VSKqiVu34Lcsg3SJLrw6JShqRaCtLg55fArxezyZBGw",
  "key36": "3ed82mjjz3UuteyLoVNU5v4avhNLAe3iY2RCkYBuM2YXqDUounzscpzcRv1k6sdMgVcNnYUxNMS3hpJf9cAswxjH",
  "key37": "2RHagRX2xaUJefntjW6wXJcaUNWJtaubUVHysSKvU6Awwsd44cxA4zELLrrGLkkTS6NEzqYYMLuYkSS3FNDX1kBe",
  "key38": "3KeiHe2jF6keKXQJp7K2AsaqLSPRJq8aKWmZFeTTDCwB2KoZqev5vvRKwKovDVBtkmQ82jfjXhetkK7Z87yiuGwi",
  "key39": "53PEm1yuUvKRsJEnvjrNAAsGvsrpZE2HKhyvW8XfDiXKfpjYn4xz4oZyD2JF4rVccfC3XhzjQTqeWWeQA7sDA7Ri",
  "key40": "2ePE8mAP2qk1nP9RKJpgye6evT23SLdYU4PSLAWKieucfiDSriMdEh7X3YwE5ixqgGmKq35d18wrCotPo8KMfWr5",
  "key41": "2gtFxSeEr8H6BHbo7GhDfKKf1k5ZJpF7bRV1sPc4wPY45Ru1WgvXpbydNpXpFAFwHarGCV5PXtXpXBBfUg4URUV",
  "key42": "5ngnW9Pnr815FT8byZbFuhdW7J1Qpckb3eZmuUBtXZK3JcJ4vuoymB2c4LW4D2PuBrUMPAXRYknJDbWZ7ThfaTL8",
  "key43": "2UUUha5EmSG5KZhpaGxHQDBQNou77U2hyoYSLW13uUWXvm5xCKWKQwCVDEDuANu1AMdFXAnWh8US2Qb9RajQW8uv",
  "key44": "5X3HYtdjRB8GxXbDWikATEuEyk3jV9cA2U5rfD394uwEQzJJKzxaQydLVCDdputT3HEKs2F8zLkky8kPr6GB7gZ7"
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
