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
    "4acs4EBBvqkX2izi9muT9nmCSRjF4wdFTwmcyfFqCPiqYouKJhhwESk6Fw6E9VbSPuNfR5QMZwtEXUT8Dyvkmqv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JqTWyTPUCZLxsL5J9iJunDKi5ybgNXoEiU1pH9AQdz5tdx2guPgN29ZqGd63pnSQkyp7drnw1z5C2QcKF9zgbAK",
  "key1": "3HNJkqT5MAMv6YdMntM9ywWom1UwLrWui7gK12bk9ehHVr6Krvm3MUqzkXFvedJkf2yn1t2qqUCCqSyBJ1sGeyxo",
  "key2": "3yifpNJtg2w3BRfr5sBvyVEUkT3ktdFMn3ejHFoteqn1PU6MnQpTqYpJRWzreYRMntp9wotoeLACx8QFb5AmjyYp",
  "key3": "4TwsgGSNTiRznVPYTjR3MkBUSBXkXtnDwrnRuK3EXW2rR7haf5KxiU1tCwtUkXFD6WyUruLUEg4g2DdhEB7b8Hsr",
  "key4": "EyGAMi5Pg1tPuY8GSkopyDAxqirNwKxKW9UsKp1r64StM3dBzPPPkNRm9fX7MtcfJhrhxLgPG32Ug378SHWjLme",
  "key5": "47QBVtFc9DthUiHjyj6JvvGetUA3ABajpQyu4oZCfwM8NA21xhoYX6Q7C9n9SDAvsjbrid448BiVdthr3bCtMQYB",
  "key6": "2Q44vfy3YwBFWbti4evgoHSkoEYCZJBPZhaBvCbt8RpP43M3UaGX9VjRKLCDZLTnM8YbD2owy3ZRahbGosNYpKfp",
  "key7": "4KwA8rDXovtw683pXWveDxZzBRSAEuFwhoRg1hNRNkAZLi227ArZPxZtpBTAEnPtLEzp3zWk9oY8oDSQydyteAs9",
  "key8": "65PUXkJXj1qS9zNsBvfpi2aPNGHdgdg7JFQ9vt5Dodwmyua8DVJTfNhQyW8Ccbx94zo3j569nz73hBYGaLsppZVx",
  "key9": "4etvXmyJX8EBXnFEXmChTuUXZegow3BzBethFj2FFDuL3Z6Lx3dbWsvwmsa5BTEYfxBHWtTo5J9eXposyzCNAgdc",
  "key10": "4A7LkFDofHBvyoqd5JQQeqqYb5KRtskjrQWW9HoKfNdFEbDn9VrCEtRTGEpSghAPfFyEwEW3G5YwyJH9XqK8SE4Y",
  "key11": "rSxBoLNjsR24k1gHKBb3u5Voe3D3zhKdT9ZGKWrW42NquKj3vsLUqGHnXSDHaFzmh1fBUzVvohK9wiio3Xw75np",
  "key12": "3dDbpt86QGNyxPiC73jmKkjZh43dE4YniaG5j7K88JEAP8qv8Sp57hYVBph9YjnTwxArgtd5Z1VQRKFggwnQ3s1i",
  "key13": "5cHod5XD2V3FSJqr7uTraLFpMMAefNLcJUsTraiUJ9QzP25BkcivdZSRVEc2kqnwEScbmmoWeYuNksEXTUg4Gdfi",
  "key14": "3Zc81YxAzbhexiGRt8xLBNxRUvRC2yF2hCLHmdg3w7fU65pJVnind1KD6cdRNqcHMvNcaNALtpaXusHiXxqsgwGS",
  "key15": "5vMiKknR47GVQHZDwf1gBWKcFE9qSgtwg9Zw3NMSRYoxNhoYYAQJA44jsq7Kk7Re3NMUV9dtPhsANzwqWAFd8qMH",
  "key16": "4SEDK7Y9DxdjuvpYGdchH86hFruw3QJrmPj6JmcmZMSP2Coj8z5cHEArjQnG7TpN15QcgcFoqPcRwwT9kYwwNMzV",
  "key17": "3fHaGjSnDQY8gJMRXD6AfFeqCpubRQAK8B53AcGKVAQZXAoZXM6BbqYovWjTzAsro5iKM74DHkJQEm38WTCyagtV",
  "key18": "6P8HF4Gm5w9MSjBJQjAwh9Qjot2C6Nu8nJdyEEAnXWFG78GARRrVJKVTLZSFHBtz5FNpzpGeN2ohYeCdErqSzFZ",
  "key19": "3Lhuz3HJKF6ysJhcbDjWPcsdYmJDUtGSe3qx12C6q7yB4SWjA6KjC49xpKEdP5SJ3KnqbvDHC9bhiRGvbDCmGXUy",
  "key20": "4ghCWmfn43Ei1atu1QKEXCHMVcvMHFGWKWyYoUKCg2G2XafNDubJn6DnwPGkmukNM7XEA9guHeFRcsUW5K8Y6sdd",
  "key21": "4QMxk2NpNZ2fiFENwZqZh9fHdhq8jBArTM1R1r1wtAejKkkPRwAoGwt7hb7ft8dskBZtGJyQakhuPpnUvmLQRYms",
  "key22": "3qZb138H7d8rK8KNautzUa86w4aLyrP9AWN2vhVLfzufbjMpWUoGCmpm9cBxbnd4C9Xpo5CtrJkkCJE8YrnMSQ2D",
  "key23": "3aerE3cLavuBRTWsQwHBPhNMwPAzmfMhetxhmmXDs9KKU8xhpRsaJiAKNoh5oNXMiZRMDo6URAMgAXTCXDdMsak1",
  "key24": "5nX8wmEzWhvMVfAsncGTBLqdg1GZvH7zGQCKRLCSpahJvGeGXyayNA6WYF1pKiYkrLd2n5Bo2DVvaxHQBq3VyA18",
  "key25": "4qvvFB5pKGeqK1xCTVvZcevcUvp4ntoH9QxxgLizYJGxLAiTFhP3tLwgEDMujtB5QE4aap6vB5dzVvwxL5HAs2jK",
  "key26": "49EYn5YeVrWGj3stToTNRCY73QhCU2Zm2ECuzzLtiyBN4veZrWjXi84N9nrJBnLc1pqxorcESYNpWB5J1KpMbYSK",
  "key27": "4Qt2gCUDcJ51T9qoe4tuy5cu9nazdjUSe1rRr9FKgtYFgb4EfWWziqadgPRjfdvcwb9r5JxoBYpDpVdZWwxTFhXz",
  "key28": "4E4S8bb61qk2TFEQnSrJG2uMKx1enoSJpRABhK8by3xuukbpeTVAZWu1CK8VTJ1aw4yqqCa5EngexhU9k7DvG8n9",
  "key29": "2fkiqsLLy8z6rtpzMzK4ViSyC9cmCHJRsJE5vkzUzu7paFKcXhHC7mdGXGxP5KuknedbifiTZ2V3TMcmkV3rY4i6",
  "key30": "2jJ1TPshGzR6pHtiy9JXW575JJ6CBkvb5k5gVj2CtSW6QUohQ2jWj6WvzACTaUkaMrMhzCBSdUJKcCVQVstP61CN",
  "key31": "5m8FsXyCBox1QKGN3kF4YPUt437nKiXMFVjZcp7FmZ6y5jM97mBs5ArPKooX68m7kajVchieu9uipKa77q9cwqLG",
  "key32": "5Z21aBU166Dgj7U9KtsXTizetcYaJTLxQKNcDm84kXYuNdesCyVpPiuiwjCZb6jV3mVojsjHWY65CHaeShHjQoZ9",
  "key33": "2NmvKx367xAHC5oJt5WksYDzUvXwZy7JX47QvvgrvUo5afU2cPeJt7BBtKfvTQzv2bXhbhZv9HKNjd94xxp3AuHi",
  "key34": "2gsj1caUpxE5Y56j6EsJdfJavieD8gbtxradGcJqfzHUxF9UxGbowNSDtRCPP7ZoF65Udd1Ym8jWZt9t2ca6koBr",
  "key35": "biv7nwAkX1zUGzNgA8ADd7KpnhuhMWaxtaHZw1UBTmZqwXVSP4PTQKVLRJTEB3H8Rj4A3KNkPgUoJCsi4r3x5Zt",
  "key36": "4PPupqWxjqeRRmBb8r9HHdUZRWuwnxPGVu4worF8xrowhJzd442HXTiHFwcyjhAnJFfKMj3iY9guzefxjM4kD2w2",
  "key37": "5YHBhzJbbFBURVzgzEkJLZkVXfakoLqNBfDkt1UxBBHgy4ybSt92WmYAFpeJbSon8Y6YtWXbiJKfMcLcGwbuLEwD",
  "key38": "2GRHNQTCfat1wRYpS1zLZPiJhmTt3fW1HdGCR7cYEFSWCbHaMPaLdNtT8qcHCrCzM6FAzFQv6CSYsU7uD3cATe6U",
  "key39": "DsyWEdWLZkC1enxj3jaQCE9XA3UddfD7TnQEeeDM4zvFT5btuyX8gzLk8cmmQKr6yUaiZqZdodiMH9JFtxcBqmB",
  "key40": "46NUAepWFEz6Ezk4UrmMyn1b3oNf4FYKdGTMwxHRxUseqecAj4G2Xz5hMgKASXfv2H2Q8PdYMGDfGkEqzqwzdFki",
  "key41": "JDoKy2vW3GoL55PCJRWvsq74jZg9NrA13CJZATEQZVSburb3ccsYrBR74eqdAgEnF1ENXXR6wYvXpRD2jX5yg4o",
  "key42": "xqaAAssDEbNi6ar9hUBDCUEFeQLMasaLFuVw7FAd28QESkB6REfUmTYpbzPHGX8JfHcGtAdPoSANGDGKY6YrbD1",
  "key43": "2WP5TbmE7yZL1W5WtaXXDiduq6kuvV9UHAKxmf1xXBsMNJk37tr9TRkpD1RKEkCYxKwGUcogoeFqDHBe84F9WT9G",
  "key44": "4TLkMr2SCNKekiHHN74rcdSCHjo4uyUNdyQvASMDtD12QTSD3JdDnsB6XugMM8oNrTW5NddA5V4SwxMR4VBLEhcN"
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
