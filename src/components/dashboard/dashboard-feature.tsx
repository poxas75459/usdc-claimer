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
    "5qRQ35kzw2EENuJCfJtSz5hhYpBB8jhsLK4FjTmPT877Gfw4kYuBaqEVkvDEXjH3UTpx5PiVZUX9hV54tnHUnfjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rwauPhw6ShatBhcp291E7SgqNHWJvPNQNmvyBaiXnv2yoNhVHNDS6UFKSEquEwkY9wG3XkJ4pLs6p5uj9cG4G1u",
  "key1": "3bAQUae8L7D44A2YhWBvNWJBrfwPr4LeyYmA2r8F3SgZ5ztSP4YGTEej9VE8RPDg5Pft4w2iurhEWdS4kYgkzJwS",
  "key2": "4jDH3Vv13HGPskdKz2ngMmbmmNb1ci6cyJ7achfmgSwgKA1NAwWSCFwYghRMAMypprS3cDbfTSq7fDC5saTyfPE7",
  "key3": "5n2FsCDh7nEq9qZFnzBtLTXqtrYCwikchoff3ddVifRAULqFUoEkv5SoM7J7wgq8tYEjWArN6uTqTEAMPjxahxK9",
  "key4": "2u2kq9CRqKt5zxYoLdd9hNJ6Z1yWZuPCGTZnBeXUzdqP49XoR1arcDhp57pCyJTcbpEYxncPdVmHA7T7hGdtyN4L",
  "key5": "4hnYfZHoeatedHALYAyD2tc2t2ZiQcERVSvcanJBpSb352HrUeGoT9sG8WS7VvvMUuUw1wBLDbZMKqbQz2Vt8Lbd",
  "key6": "5AvGrAXRvxw6XxqWbg9bqajqAzAz4JHSfp9FtuPuBkXi9NaJUNA9fFwVxHtSJhDMk9hpinDWxdmRK2UfscNuDT6F",
  "key7": "5E4QQyErWe6JRsr2NeUVNg3uB4BoLfdZqVFfuRoQERuEAJR3U3AW6afAXmbD13o1PvwieB8gphV6dmVRkRa51rhg",
  "key8": "2KvRNXJBveNucQPy2XBX2PYq4NJK45uXX2nzpZDYQrcZzAmhSGup3NgLFEFphbVnNZu3PEKnKfsa8Cg2nJCo3epj",
  "key9": "3MtXFYQgGLyMb1nqWQrdhmzPEJhcrNpacLKMFKYKsMWm3KLvoNMTtodbxX39wNwnv94FWUtUctXMPk4eeJhHTjkr",
  "key10": "4AFuPEXNbEPCHZhrSJ6YoraUzU4e3zZa45RqvsFeb88YzwmsdorvYfzisDX53KAoSQH8oaTMLoqGEL3cHoZCLiaJ",
  "key11": "45YXhodBWPzeoRSrayFMHZm5usEAG5QoMWhZYvDMUspvrWji44k4PnrWPfwmmztMBt7usMEhu964hQ1yxyzCJw2H",
  "key12": "3wpNnDRSfMsvRm8y57y19g1VCjt5b3WHZTgu5Pa1MScs5wK8wrdRnPJTiPgDiUbd4qFzfnHjyttzAUg67PgDYTxC",
  "key13": "CzFNc1HELVD12Cm6P6ztYPsZbjK5DD2peoAHBGXuEBxzhXYBwKRFiXxJ9io9emvfFJU3LngYEqKGxuYnEq9xiEY",
  "key14": "5yrEmjq59hKLDh5cF8sdWkxNAsKwet2QC9ye3wAqA1uRSWxaJuSNPbrNQtrdVthkLpsZD9Mm69os1qjK3A9h6Xb4",
  "key15": "2Fsda2x2Wy32aJqSEzL6cB1Y9dmzTWAjGPaQVFF5XQwZahfGwTnMPGXWSJTyx7RXk2JmLMCPRrLfS9Zzo2nyPbfi",
  "key16": "4zkS4i4XqLuesjD1SLncY4zTpWJjReEs8JjYdgA9mkmzsdMvmLDLasf8FfoFbfvwQgnTbM5DnGam7V7bpTDMe6TM",
  "key17": "5xMBxnKTak4d8bi2HmstEkeuumup1cQDuiXvn7CXdY8AXTAoDDD6xpnrkocSrJuHMUUtDeMhQm8kUYQcCHM8fcx6",
  "key18": "62uYpZY1ejtAJV3cxyrjHXvKZjRjfnCBcatfxqkHKBJ3WLewVAzjYNGB8bhC1oDdVRP7ySnq3hh15MdebwcWKiVn",
  "key19": "Vya8QqXWMc16NhxdCvSse4cNM3rpTbH5qGYBn73ADrpvjyz7S7eX822wZFv8tva4o8GyveUbQaXDwsdmWJvx4BC",
  "key20": "3tBdhhhAd7V4ML9yQRjqC3yyKiyhvKsL4Dy94yjRhMXR51LMhXsYg3afQji98jtJkRRCCkwbqiVpwdHWux5ySK24",
  "key21": "2fMU5WZ57CjfmFnpucooMMjCZATwKG8QuCoKXRKMMkrsiEA9FGjDjGSViNdcHv2iq25FCzcSkfsJK4WdDtWb79tK",
  "key22": "4PHzqaJKEVDMNo2EfjRqqBJeedCfhgABPH9dY23HF3rGDJLdfJvfCC8XSeiXi5kzevnUz2FspV4L61CaMAxVgYTW",
  "key23": "3MDD46tZUkP8NRy47fmEcNExacDbAptZoH5yXTsAQ9YCXED39bUoBnNpk3FoG1feCJbwvYu65f3sbEbgfFeNHbgi",
  "key24": "ampsYaj74YEcmsspajps9zJhWcNmCZaDECrv94CuhFpKYfte4LDcqmaMwMNqny4qco6vbjwoVMdAFJuxGwAGEcP",
  "key25": "5Srsa1Z22qZM6rQYRMaUZHioRepnucTYAbkwuLQftQYvMNQbkvnLdfUoExDrx7ywZvMihxNJMZKGGHAS1H6CBXfF",
  "key26": "CMmHpyHmv9evXAuwon7hyU7uSvf53s6EK98Aqy8okK13fJJuLkgu3DRAJoCreRDKTp8Cs9yJ2swgCtJWrSRUs3i",
  "key27": "2Euw2FuBbeo6V7hhbttGfGh5MxN2Dyixt7NsSR3DsktaeNx5asM4hrm4QZDyspKZhPHQRSYWy4smWci7LpM1zD1s",
  "key28": "4MieefpjoKz3BUSmWk9DoTSKkV9rxmthBfsNYHxxDrZRAxhafQTRn851Pv6fgs7aWiHfD8V5NhLvRXa2o32qx44c",
  "key29": "53SsMaCGg2wiKtMdYi6ForUGUdgWddoqpQdcurbQ9gufCscRByMDiVD1uNjqyEtcnSyv27NzRy6Ny28tFqgyuphT",
  "key30": "3buXYtiNsb1iLHNNAku1n93VZbsjCQHeCdqAptice6sL8ZD2cP7iYQW446tRAaQsdm2m1otd45UYmdK9Gp4NueYp",
  "key31": "4bvqFRihyWhaBud2DFN5jiRrXHdxSrx287S6MjEMbhFMWpHZDjYd6x6xfYoaPC5X4cDNQ8sYgyc21QomWjzia1dq",
  "key32": "8kUJqszfBBgLvKCAg1Z3qFdFrmEpsNjyzBaKrAw6vCGHsjRZmbodJedouHjRUPBYvTcuFNZpqwS6K9rXUkLMXC9",
  "key33": "5Y9s5mUgMBiuQVr4NFoCwkdLM8XJr6rCB9iqR6Ad1u2FKZRUxfEKCXy8YbZGdCqteAS526pFwhuxB7rJjKQ1wSTP",
  "key34": "4hPgnQgQKxN7ME7ctrGUpL5pecDksxg4meY7SX7zGG3iGTZFQ8i41Fo3KGk3YYGad4txgidJ4Dk9JJ6EA3UegVdb",
  "key35": "23ovtqrCqVY6JxP9bfrv5yby8RCXpDjHr74qqHzWZvQPuXUKB5QeG4Zo9hWAhiuPA2vuajm1RG42GdSmc7BUdC5b",
  "key36": "2jAL8ZoAf1HPvfS9iqSmPTTM44RKywFwrSdpY6d864vK2pcizW8T5Dphe1GCqzfKr2cP3dQ5GyKKLQvXuU1QFXyL",
  "key37": "2uWy5gxdctyd5xD85WSfWnqYzEo4koN7mpbm6P47U4TxbKr38PmsdjyKMSemNcGSQgLJGCRStY1KMRiVpkVVauSn",
  "key38": "3X22kTgZ97yhNEArA2mKPKDmRzMTYYo7Q5fVW6Bh9x6s9zpqYot7kkgAZ18vLbx2Wq97kUm7yyy56iqzGfjPzP6K",
  "key39": "Y9mKDVcYJHh8Nor8gKXR856pnmmEHaktDC2ufwNa7kUBvfPt9JGP8F3YpphvuZjsHNRW8ynQe3aeWNptP1UtQwp",
  "key40": "3UmP5PCfnnd2ULHK3CQfsWXqBaodrHfLpF1B7N8kFkXxz6xV4XpSVibFb6imD8xodS8fvB3BTUgChNLwnXWfBTjP",
  "key41": "5ALWU7r1jGKxBpT98LMk7AcK44WcnkMneq56ZtvENxWSTWunAYsGK1rXuJWrXVmwDm2pLza6HE4mDaZA5T9vrMD2",
  "key42": "4QKQ9RT3sjCmkBwsERjy9pvULiFK6XMq66nMCJat2qL4pTatwSu4xHfjmUqK5QZx9AuNpnTuo4BiCC3pj2PNzrwD",
  "key43": "5remTCJYmx2umSSPsG9ug3AqhWsj6bHXqng4K9SyZDu6PMtQtuyYg7ji54cqNx4hwccEjeGd1sfYPq58wo9gtyDK"
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
