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
    "3iofPLTSaR7sC4pSUy9YuWdssty5nqNub5sRL5dwndSd6KmCgrAW5fNEstgD159M4KUfugWcxbS8KgH9tBV1J9xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dp8eE7UusR5M1fcsS1dnHdgm6bys7S62snKLme48JuTL6uNJEpnouMcQRVvbXCuHrb5QF5VvGTekyPzXLQSvEJk",
  "key1": "4jC93JhdRzMCZw5yfXY5yQSGmcKaDDtbNuYAZZ3rCApjWquAfxWJ5rfhvhsJQZ3oJBVMD3P8NohZiswdpKTkKStT",
  "key2": "5FpSLsGHGh4GJMtvHTZen73u9sacggb8fhcyzHN8JcVV61gAspSdDojoeL9agxjCbnUBJzGnRoqSPLo1efjiBHi6",
  "key3": "5TnwvYZvRHojADmgQBgQqPG4fd4buSd9Ep62TTV8Bc2M1FPe7JqMjcrbv7fok2GbayjS5wygBDDBcKoHba4XvC6G",
  "key4": "5sXbGSwVRRu6pf3vkThanmoX5h3N8Vj46pSciuZ8SEd2nJRrCU6SJTF9pQUMGYbJFNKHSnE1JwZ3cLJ28uGu5YhA",
  "key5": "4ndu3SLz2Uf6qAzpWWGVJhfNM1coaFAve5qmCp4ukoaUZBt8ft53QHTQcarCudiXzWPMyVSCh14y2Ut7fQHVW2H1",
  "key6": "fe8CBgvLSU6rPDWW82RoGAqGJD9qGJSzEvNSoQq2C9kHd1ea6KJi2p4gP8Dmkc4CtjquaANFVSizvrRRoh1Pp2e",
  "key7": "5DMdvk9QFSjF6yn76dbYTuv2K3SeAd9tLHu1ofM72Xk8Sv3uiwjqUm8d2j5uNVC1ut489N24a9YSDNoPqTGp1A9j",
  "key8": "6dXSfohcAm3DnCaEy4a1BUaRdXE3efcBZj2RmGvsrcWXqUzRwG3PLw3fCS4b1D3B3aqfcdwDaB6nKVpRwTjM9JH",
  "key9": "3ovXEumDFheN1B9i9rs3RqxptpDWMihZgWyQrCg7auQDEAkEPaMS59doV2n8xwQE3MqqcMXrwdadP9XufVDKr3Sv",
  "key10": "5C6FkDKHLoUBjm4dVuJumrRpZwm6Cuc3KaFr1eWMuGviYxVU92HnN9W9QPtnxW5Z3oyMS7HFUDMYZUsWDM4Wo8mE",
  "key11": "ziR9BGrLoT1MVCUyGXsZW2dBB1rjSwGFAkSZt51BbiD2ZAgKEnRJpinLt1y2BScTAth2qsy9Vj7XBV3akZyCuw9",
  "key12": "3o3E4kjBk1FroQtbTcaBfXrAGfS8qZEKgA9C95VaxMvMbzhxK245DJdLagkoEe2Qij2W4HNQxNbtThNATYZXXVNH",
  "key13": "495uBD4sfzEiTU5HT6KEX1bfzBQ18u1TSZQviQJufAnWGW9Vffpqx3fqhvVu99Z8GdAwRPZUCAa53CE5TvEzgDU5",
  "key14": "2UZUWukgcygg2HasLqBr34r3vFfrMGVcEqfwJ7nHSRK6y1VnyDhUZDoPHbLs38SpwRPVZyCuUMQGXBQaAMSrrvC9",
  "key15": "2LKQiEyRJicumQAUowAZcreSZoaqEVKMU8chmw4asRQYS9D8X2rFovGXpSRutSdn7414bS6nHMoheDHtjXJr1fFo",
  "key16": "5bESvDzwwCmui9ewD5PPjLBUDk3t3wnrDCqeCiTEWy3KoBxJzu5E6We77h6QVFwysc2QF9PNwHiWh1mZPFBxpxf1",
  "key17": "3wGVLp1pDSY2EtPFkRiy25wH6MNTEJCmgsBijLtKc8xxwAjpjRRHgQcQSGRZSr89Grfui7jtBMJMgc8cfvHiLhfL",
  "key18": "4VpmGCQkmC3k1zGp2MiTXR3g3sAKD6LWNiWmqb8xJqCniEuCwdSdaeR2c2PSRqC6VtMWEPADkRtSAnRuFHNQNjx6",
  "key19": "5z9boKo7WkR84ekfB4gvSn4gsFuwKxmsmtm7VGJQsfojfLsMespdFJcad9GGndi5dJj1poeMsg4kSs19UZDMCVGh",
  "key20": "4nDwKWHWwnyykTomZLnFr88EC35vt3FevPuYSnMp3jRhg5aw4nZ5z7qpbATm8R8xwJE6i78wN2jt3koZ7CswHVQo",
  "key21": "4BuJCbnPmickvf3Q55ePqP3tzHMiTxtGzGZdSjrxcM4ULzzWgCgfEJHfsMBGdr2bodrrxraMv2pmAKUQ6Ria1zu1",
  "key22": "2g6wL2p1L9Q97d9cSeWUgsPd3KQVagmfLE31ynVkmgQYYBNyD9WqyQWcUvGqsSMrfMYL5YWinJ3L9AqUYxudYnSY",
  "key23": "5AnqFehwpkTPmwiCEjh9bHcTTJqiRVzfC8AoQ7VHLvokaUak2jPCyC7pBiZgAMHpFkd7sx2qBDoYf6K9gYyNX1GP",
  "key24": "jswKiRAdDZWkcEKaeEK2Uo4PvbKv2Z23BjQBd7Kgm8rZcedBSU1udHWMB1xquycBi5AiQgqDyJhPPWKFErkGhfh",
  "key25": "314PbteqSdrzbiyVdCA7YAtp8mNrGbxQyikw9hoTmWniKouSRebXGoK3afDoNuDkRs2zarAKkt6x63uCpQW9vYJq",
  "key26": "jgEmvfoYsnvyHa7Vztz8fkpVbBQco6T9VsEENdZbbRJhn8n73YrHoR8Zp9tqfH8PBvWMGeAKdJgkMZCeMeZ2tRM",
  "key27": "5EKVLdCPczF9G3CHHXopuAmRVtdsHG661z2YT1qfJuFt31j3Fe2KtswtrP4VL8H293QqhGVGW1yucf9PnE8t4GGz",
  "key28": "4bxwLkLpLaoTssB2ri7SEp1rgFw8mgSiG5vxAWhNUZZthLJUYE6ZrSkR2zvK8q587yN3Dhkyz4j5yffWETjXzG2k",
  "key29": "5nTttnU675u4z9s1cq4mJJ2kHhaWW2XmCWxDFAE7egyh6HRsP76hr7yKcUNyTzsz1RuFGhFQZz1Afot4PWoEDPy1",
  "key30": "3iWPcm5hRhLUYYcmFyFzHfjwX4EnZWQ986gwfminLPegxh83RBbQXpZfYrM2X5nHRpHNyGGxGD4HfTVAf7QmHb1K",
  "key31": "4rz6vRaGr9zGEqYHJXb6ex4mXrJv8ipBGMchi1AwyNtZrKPkFE3TpKmsa9qJ5Uu2momHjLapJogMiH2hBGNmdynz",
  "key32": "XBUMgDw8voeiPX1jV79doAEoxtP2F9ZuLadQAeKUoVCtvcbUvem37V1ChiHTLj2mc6URNUNDfxeMz5b8Ta8veyB",
  "key33": "3Hm3g22QeNYevTfsijQ41Hrs24JfPHq6pwX9hpRGkSg5tqjcVD1NDHoHp7X9YahpZ5UYHQNVBFF1mtGXsYr2LMZj",
  "key34": "5LWt2wLBN6nXiU4KMBdp7q2G5wGk2VfVkJivrAG6g8r4eF5nx6U51Sjyzk4tDTEroN9Yb84f7oyMb7azEVC11ons",
  "key35": "4QfPkNx2LFjKgfzi3demHHMGbXtcjTncKirPUZpch1heWSwHCEN3Z95t467AEj2yDjppwaT8efJBtQagCwJewhi1",
  "key36": "3GzNRRHDKSj9iAFbYtmcnCqrV6VFw1swQYhE48ZhBMzuxSaGn5xzaHR8tKXBYp7qDpgtt55X3JLvfHfk4KHejhrs",
  "key37": "4pAG4KnVfxeYQSdTJSeJE1kfJXBSxF6XKu5HSze7uvRgLaaH7Wmx7ekn1G8G8w3HJJDj2RJpdc3wjsr5HfgFxmyz",
  "key38": "51Vhe1FBS16Zc9HsdbR5ZKFyS7xeM4YF5HfhjSYdG1nBmE7B6UeCgyRNAGXNjs4udNUBt9AzeMS2UThQ6Bo6hFBJ",
  "key39": "28PjDMX4mURc1B2gxBi5MqwfW4RXskXkwqQSNj4EeKME4arHVP53zx4M9Dyr917HpHs5VHzq8RWoqQYoXayj59KA",
  "key40": "4kpsXobM1kvwxqMAAuKrkFgaNV1k9GxYRhy9RVTJxv5yRByPzqmHjJ3EyvmXC5HraWMunZvkgfqd7Tp8CgQLn5k6",
  "key41": "5CmtrXPxUDTbBkCxQuCmsdUchMQ9PLVfkbC5NurYxBRxnaA8aN44j7YgVTC8vsco6PChdJ64ndntMM8HanT8uRPS",
  "key42": "2PWA4ww9LxdzhCZmxobYg7XmknLLo33fvNZkUNjgCNqUNQh3EmQJg7rrzgL9JMbWuDTineGeDEirg9DLcj3k1jPA",
  "key43": "3v486pnxndQrBduBExWsCuPnREAbhYyweBdxFoGq8CPZX7yPMS9PNE9U8upB5nXjRayvhrvf5towwCzoGnXnu7cb"
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
