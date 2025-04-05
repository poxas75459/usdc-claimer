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
    "5yLJKWKmPLSKd393jWFRLkL6EQbF4WmCMBhsVNWde9vihsWdQnvVX6pKVkMk7r13WQCQPzjXxdc6RZXsCMx9r9U5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nVo94ksgCmtjbEGDaLDQixZbVbnx4AXZsYxBWpJGvH34YnmTGu4rxgzKYttqhRANmU7pg8XAWGsZhPKdLcefRvL",
  "key1": "n29a3esaug76E83hkuPnMtcRpzYnJVFH6WLGmFVDk1LAz5hSMaG2ovuNVkLVLAzuvZ9zfV56VEytXx2L2XJnJUL",
  "key2": "5b84wew3j7HeQ9RVFYEBTEuiy1qRBAQBjCntELs47XbMmcUbsCrsiTL1zoaQQzZwDAFM2xipp9vs3DmyyyitbqiP",
  "key3": "3bGodVMsmbveGr7xKZZtGSz2VFHYewn4nLpPRRRncCmV3JF3wdE8vCb881UDid5BGCBNtVzEEqRC7i9Nb5g4jyih",
  "key4": "4ev8heqvsDFRN8hzZ3DkziVyAWVb2QVoofgL2ByvqTgXt5WF9D7MsFAoqt8pFhx6HGqY7yAbuavZ5mo2aRNgNC4i",
  "key5": "2QZ9cfMofN7gKx8B1S4s5GyKpXnzKdyXiKpZqHgNjSMCkNXti2aEp5NTdE6nQGmWYGDbx79sVzLShVfEWy7sF3vr",
  "key6": "2SZGmMjsYTEHJNyj6HVReruGNveTWfwCYoCSLYFXofHjEdGR2C3eXhgWczw4qC9oXbjiPTKBuQN15d2vBsNsNFpQ",
  "key7": "2zhDyivWPx6dJiybPdZhFtJcCGKtJ28ByPsLiZQFeBukWrKuBeXpWJfKGcxjBb9evBemx6XTRg8cazZ9ufgXcY2m",
  "key8": "3HnAh8bjmDeJ9LJ9fGBoK3Dt85L1Bu6C4i3dijbJxRiqr6D2f2rSeq9fL3qt3HHKNJpaH4DdBQtidFGjwFMAL98c",
  "key9": "55W4m783w7yLP38fzLu3qAzKBhpkPHc4ohpjtACExXg4xr15ebUEKgW1YLhmYyJiioKPZzPNJL1LQQsX1ugqWRiQ",
  "key10": "3Y5GWgBBwp3iXSE1tPB4wGUPABC5SjuswgnXCEtWYnS4hYi2DiNU6g9RZ9eLBgiwp5jYTeJysVexneEukzaH6aqQ",
  "key11": "5828g5mrxB72CFnhyRvzXBg2qFjTWQfPFVNEtm6udqmM4yvQV8xXLE45zs94xiVC5ycB48RHG51ap4E4mBqboi9F",
  "key12": "5acx3XPZSSAYGwdeLge7oN1wT4dYLgxFM3wxKHQjLazYtBPfub1FpY7ZexYxPc8kHcqKs3qee89bJwkY2B2SiaW2",
  "key13": "3drSZ9upnyuQ1kZUrSEGYgaA96CiEu2iA3zf2qRxA9LHURyEab6XVLa9Q3PhK1NBwLLZJhLCe3Wpius1gc5Z44MT",
  "key14": "2Ydi8U56SSKi4Aa49xLTc9ihn8HAZ18HGddZ7x7Bdb4jZ8EZLTQLvHnwBrdSEoJB71c9YyLFyS6r1fxbLdjqApoo",
  "key15": "4puWYEWfdK8EeH21fSn54omYVda6VbJmbCzS4CG2cwueCKMdrEQ3fwJ3S9AkCAfQKoEtcufq8Harc4QB8ou6Q6jR",
  "key16": "59jdue2hwPZXPctwTqJMJsBrH5YP7nkg844qbQ55HbC3RWNdkZwpGAQsdaj8cuFcwqhAJhCoRdnu3NQXfMU16DhW",
  "key17": "2CtZTqPrh1WoCL3D79jiRtmHnbqBELjd9xDCGKkWQzxzbZHaP37TVvAaVDeXEjazW8WPYUJh2YJ6rg6URkbVKoyZ",
  "key18": "3PFpGRpT4TKrQHuJeZm8hyagVXbqJVSLMTkMv3NiDuugeBjkiBt3F7XmeUMLjJ6bRhyB5bVYDC34m7VVZ5fbKBQy",
  "key19": "dV6pHH98gYAvHJzeSAdNFr7MzwoKkrVvibntkdCxodFNsBegT5LMkeWoAPtMd9YTg9t8Bbzkts8SVPe3nyWRvVN",
  "key20": "25AHzQyfTKs2ryKxs48Mhoh7e3oUGNaYfaPMC6E4gzih15cKomoNjyBLYuQg5TRfKgGWEiiAsCpXi6dCbjt4eH8Q",
  "key21": "3u2SnJHoX6TgB2xdFpTTERnh4esWxDo5FhuL4VgW6zo9w3NKq7av5VZHufaFkWttwftxp1UAY3R4oBeD3fxt9DL7",
  "key22": "RV3SMwfrhFJucJEtzXNA4g3LQhshRUsXiF3RTKMWQsajreLgnKemsPjS8kpjBGAyitDaifXMVzpvoQ8bhWxXiTz",
  "key23": "3HLuSf9iHWoKjFn6XEuTuc4EZz6ZYDgF8dcF2BSVLXLNsdb3p7bQcbsLtVScxaGdjBAp5ik1EVTY2z9nUJtxyR8S",
  "key24": "qARGV5EoQcLFdd5UUKUFxm3MmUr3AQMhQqMDh4D96edZP5E9KQuL1QoHacmd8WzPsvw2qpsAWXnca6p1uHHc7ev",
  "key25": "2JkDEd7nwGxkHhVzuvYVpmuLEr7se6rDQxd8qSCdgGARoZ6FAbXkKWkwQ6bHXSP2sgHjvYyBvyt1t7uvM3eCtyFU",
  "key26": "3uL2ZSSDbfVtExLaY9KY91LAtFREgYTpkxfxEVGwqoamJt1DrDva7vLGBVMw69rXkXmvcnyApvUafFEdRxWYUSfZ",
  "key27": "5jFsZcQCi8DzaTki4mUMu2pZtF2xCGiZ4JRSriKU5eGRuRyhXgpFFhnmbqSc3Knc4PAWfRhsp5NSR8LC7w3jdAGe",
  "key28": "4K9qU2KZ9QTjFJYHhcYoRKTbMt214REZHrMA7C2QzucDw4shfuWLyFzEr2XpBWmMzBXDKwZPG62Ex7YV4TdKA6nn",
  "key29": "JJGze6F64dwvkjRSgKJtJGyPd7FH6Qct1J873uYDMaMsBtNveS9aXePWnoerzaR8PUF8oswLh8tn9CVXFFRNjMg",
  "key30": "4rMoiP1Zhrsf3yYDxhLCaECSb8nTSRtsU6b9W3HRUCFbKvhomYhzUgLhMH23XNrhSkneNsHa9WX3Sb8e9NHVQ5fN",
  "key31": "8mJLNTVu7rN5WScvw59ZFtsLA4BwrXBD41aQEZ7hw1oei6x1nKYLjWQWQjhHPhxQ7kDesdjJWTjmsNQsU9qKLxY",
  "key32": "2mEE6hM6PGD7hYZcBQpmvqt2CZuQMXN8fyJ8ZYbLtJ3JjJieZnV5Tp1cuLKsawQet5u7ZnDKGLDgzuJjvGci6RST",
  "key33": "3xTAafwNjj5CbENBMFjJjFupu47goPB8zxMGWyvyXsUZJRPjMPy9hXW59mHrLQJ2XDmevRrYiv82MqB7q7uj1QhN",
  "key34": "676dbb4Ynsb4AnyxqT6wf8eAZwbN96wo4shpUxoUohaKu96H4Gs4TzxTss9Rrrx857diTUR951xunYGxYaDw5Zr5",
  "key35": "3F8Vy2mkQH3VWM4NJna8pMdozsXKxbsELMQzYLHeRvrxNE5KhmccY9JUBnvHg3wTCMUmvjwGcPVCnrfaC1kR8fsr",
  "key36": "5CyRSD8PokTCBLJKf1Wp96YGNWqVvLz6kShs7Ch2ZuDgLdNmzQ1yxNvX22uu7saUGtJCEML56DG7Xt5H3aRTi1xr",
  "key37": "4HirUihdzrXi7Tt9fmhoCGKKvxWQ7fwGtnPKxPhVkvsXbeGvjaMEKqphgZyGsfADEgRTBKZoWsMMHHqwfMDBLAWf",
  "key38": "2YgQNwfbyNpLbJEWfhxuJLtuMUXGVgV1nQpiWWBADVaUMGPGbPRUiPpYKho8JNeCeHK4qQbhDiZTcUCszEWBfNxG",
  "key39": "5MsPfEoSwzhKPtiXunfj3Non8iXbkNqZSjB5NNbrYanALhVSs3PCrJ9GHBZ8hNa3crYvUGN2JkVeq5sNdgwS4SQM",
  "key40": "4cXLF654sFDDGrNAWWH19HJxwABpZxq923AtN3dZArcKbMb6hYoa19QTRj51kJMmRTsmy6VcCo7aDQw2wddo9EmE",
  "key41": "29tiM8BosNt9ifLoAYy44fKBDMF6dGv12i6vCnCisN15PEhShDE9qj1fN2L3myXo6yFHgMpyuoqeMfTDYVSeov2k",
  "key42": "U9TNKY99D42V3baKd6uHgjSdUnuyfdvTWhTnWY19tDub9QQpxuvXXeorVxDFE33Rv389zgJkjqtV1tek9bq5Abb",
  "key43": "Wm1pu1UMLzEEzhrtRQuZ9KfgpkSRypDYhTcSpBrffvvNNTFdQfuM8C9wXMfwqBif7UBaq8n7JCG4THx5ym3TLzX",
  "key44": "Hr4VWPMudmTj6AjS6vgq428Wit6sAWSEDUNqSXpi8c3RsDfA2nAMp4B389rEoBXULvKydkheCsHYFqUVDPMeJKt",
  "key45": "2KpB4gAqraRsponerkMsVqXn5STpGjPob9WwQWYvSYRnS9fjTbEo2iEM76hKmny4yAUawLPS5AidHZCvR5YDW5Th",
  "key46": "5MHX5HuANPz5aC4sXTYhXMX2p2fizbtRQqBWifR5iv4u1Pp4PMqibnAyn7dtXNPTgBLCQ4iSHfnUcoXdvUjJsYDb"
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
