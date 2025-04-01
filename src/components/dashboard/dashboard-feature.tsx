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
    "4LGcBXFbgzJpXzFYnkR86xmiedbnHrX7ghbXDrYW3FnW5gfgxcawRabPECxk6oMKNghdSbGzfBK6rF4zGHKw5J3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64meSNJVZnwsnv4tUKuhjWj2j92KNFXMofvWxSeS1zyL3jLXvJ4PiujfxFeLzqUYsKiMox3bC9pRPaEs9aMhW8sD",
  "key1": "4M5cZYnSCixFX16G276cSNHHiJpoG3qz41tnCud1iPesM7Lfj7tQvwm8rpFih4Wuxdq6VisRiYKwvhYtDzryoiQo",
  "key2": "2eifX9yqsFM89qmwA8f1uBHqTwf1yAmLsE9mpyFpL2WDJfM7Fb4APTr8nySchnXLBqAfTdbEMEfLYBUogDunpVuz",
  "key3": "3pGnzKKvXfXWoQFTqRAHMhPtASpkW2ct8LWRJ1T3rnugLDY27aiAvZXazGGBtvVc6tqX1gnRJ35kCcxeVvxaCe75",
  "key4": "3tmqKnq1tKUAtg6XDmrDte6gR5GB5y9K66wJSarLbs7or1y39gCPDzwsSFYRGGTTYC4PS7pmhshYeMDusYjGjsjF",
  "key5": "2QYpTgbtdFuvv9j8CUSVgPLyzHEHt4VPhyhvcTdCmRt31vnAzk8LPCT1VVgdBFAvNm1cVswbforFbPAwpSmypvAh",
  "key6": "621ozygajWz8edaPAKPZ8jsfSD7myfg9ZXdfdKtMqXmo6NWVoZZfbmeGuuzyfr1LVmWNdm2ZYkcZa7HmwYpGTAfo",
  "key7": "jdxK7AvtPLmaBwM42c3xdvQRN1NwMETD3aum3fjb4dTLSftSkNCzQi6gEMF6JmoFRtZUpwSN6JL6zAALfuUjvx2",
  "key8": "2ZTaMvuVL2PTUMBAdd9CkoB2hxwGdNHonDAwtYbGfAEi65Vd9sRzBsNk9PuaCgpqUTZGaSE4ystC46C25ycBGBQo",
  "key9": "eNM3mDha5m112qKQDz3QhRJPkWfo2j2nd4NS5Da2FioTBCExGNT1195inb9hK9jGzHFBkHMDNt21Msn1jJkyPg2",
  "key10": "4c4jnFfsXT3iWyMdhUMsSCYoyJM2vHkHjm8YP1SPoFnLzF9QNa2yx4U5DoMTuUXGmkj4FcJuzZh7N18dA1mD8int",
  "key11": "3BR9qRU1hiPk9vzexaMNvj838YYuS8CHBdjdjjZ7tjCZt3Jo5ZJRjQoHRReuJsdxa8Tkephc4nWeoeU4U5b8TgyD",
  "key12": "5ChzDgFxePDf4zq4gEYZMuJYTHS9Ud5EC7YEkYSExuqqFHFFvwsSGRf7LnF9Ho6ENGnwNQWxoYToXp7M1ZRip3hx",
  "key13": "49VQzBjY4Wbe6CVjmUTNsrXtx5oGrqtL1fWxi7hrpXrmzWowsqqtDA8qRSmJogJcnfdWcn2mJpkk4nk4rHVGRQkk",
  "key14": "3HHBazXCm7RRXFUYYMzNVEfi9LCmEZBMYPdn5khRgRJuWHgjDQTsAzyUmi8btMy4jkE43EMx5xjmPfZUyyXQVSUz",
  "key15": "5DHxMjRTseAcHszKCDQGKLjp8hKpSYfhBiV76A95shgkx9QqT2n6HZ372xDxABC2NBnfiwZEq6RFc43PQQ9oiZY6",
  "key16": "5oKbC7ZuHQzN1rMXeszF23XDL9jHohrRMQNhrkLibpYvij7NSS5XxRqNndoFh8iac2RSAofo6mUKpA61Qgxmc2Q1",
  "key17": "XUWTQfg6ABqgn1ZcGpZd39pSbPwmuLrq3gFDJ4mkDXKE4ZPAWQKg1nYsuHXULB9XvthDKME8myYUpsgqZ8kWbJv",
  "key18": "3pD85CLRPtFssZATLGvTPhxZQ5rhrRCPve9pt79fKYUNe6fMVdLyeF74nwEvjrSdDB7MsSzYzzhn9mdKUbEg2Mk2",
  "key19": "4vstmsdeidG1sCgoc8iPAXV9DYBbY591eqQTmMwiwSkzrjPdWkqZTj9WNnsnvHfbS2T2S9WkpipkWCXA39UoewyC",
  "key20": "33UKnvu1Ma33AyULGXHrosFhLk7Gb1XZUvW2voYU9Vv6yPRwctCghfc23osKEviscoUnsX9kbJDoSJRPorWCqzpY",
  "key21": "23ZsuzVgScvVKNcWTmcbJp6wyEbAX69yWkMmLzpXWh8oLkDPgeXykuaTZ5j8apoRYfLSVwJPkLET26KpQmmcDBJY",
  "key22": "4hRjhPeK1yfQRYkRCYd4tMXATHJnSJMBhgXcgB8JPtyrpw8nFvezhypyA7u2VZTvDwAvBKX1BAg6aM2ZDafogxSR",
  "key23": "TbiRwMvFVULLGKsTwM7x3bJUvtFjfAMX1JA8QSFNEhPezuv2debvNrq36cy47sdNsirGy7rfeLFKQJyx4EQ3gQz",
  "key24": "46MXLAtU41tnfD7RDuHeCxFQMfZcJBDejG4vd7uU7kJRU1yv9TQWZnFTQjNS6pojAriVxQ8oDskCtToaxQNaqG72",
  "key25": "4D2jKqjtAx2LZHqZ2kAjyhL9ijxDAZLuzcrGC3KnHBUFiVPZmG8oRp21vNZC9HHykUbznNWVec5fWHtDSmacUn5Q",
  "key26": "4AZeonH2nYoLAWnAJbfxC9rrKyAAZFRtTtjQ4DQzd32FisXT3gXvJuqTGMTPXDTdGyCdVgRH2cvpkhLVXevAsFbv",
  "key27": "4qurFjRPChSSERXH4iCQDEV9DvxtRBqQU4k7g4ZZJHSfRFmU72dLyeKdMXiLFwAaiB8PwgsVPrXxGtTDtMpPym6T",
  "key28": "231RdKNR6sjGnVCyZ5AaEKFziJnQvgyzRYPY7SPQdshw8UWUgen2SSSNTVf2gLZzsm8HsD7jHCwxftCMyh1aQWyh",
  "key29": "2WTyZCu79uMzdqv52yyZoC7dPRnGrPjmzVPEwwWirLjcS85JHhEer4dfXCZVt96XvXbrYXZSwSatbGPmMaxuDwZo",
  "key30": "3Yr4KcVavu7MNcZMxh5XgF8Kv6LM3F8sQZr3deWmRoPNFHCo5n26cBHs6NqCMTvASjYUzdMcYxP9CnfDgqtaGxnU",
  "key31": "2aN555cSL4ctU7E8hgUChskSrKRvtiKCMaP9iToFeyvfpw3YpBQVmkbFKK5w4PAUpLMuMZQb3WG1ErWs3vhv4vJi",
  "key32": "4DArAtHzyBHWSnTyYu3xJ6fnGxW2igcdN1cTDGibvT3YaqCKCrqCGasCZ1LUxviy8VJzS9BFsSoNXaH8J21gYVNu",
  "key33": "2mv4a9PKMLB4JDughquCUgAomJ7quN2EFzYVPF54rcvzgEbnHukHJSQWr4iamLPL8JgoYWtZCRfuyechRwdKQdR5",
  "key34": "4vkn5s8P5QepNdEVj3d7R6F6Kf2tfmt341dJCDDVsboMQtu1BXVaTCoeerywGQJjtEVAtqV2Nw4ByQAy14FzRsPF",
  "key35": "xeadYN944JCGnJq16MLSQedXRKjMhSq94HSQ3cEoRE7jk1vyShim7oZ2htXYb123ATL83tocSZRDMezbXm19sUC",
  "key36": "A9NU5u9ogTpaB9bw1SbM4v4r46UVd4JzLb99toPAzha1Jo22ZLS8fr9s92j1Z1faAd5PThwBvUHDRr47ctSMWqT",
  "key37": "2wnSS6k5nv5NMJTgqNAewKkXmEANmopt6eAZbnD16Pk8z8UY56yEiQmWCUaq1VuUPyxCE5jUS26p8FJvs2WSiDvA",
  "key38": "4VxqJfHraiHKYjFr8H5nB7qJMjnzD57wxwHNhiczvotUiAGWXEP3mfiyHU4gp9GuZZKYxDWWAiFyCYow27aXK8jA",
  "key39": "3vHA48EA85qNXuBBBm8mVzk9k5hoksoZswnEZarGa2PAYbfTUbD6vNnncMqP15qkYDJbgXuZ7fcpnEzErkdyzAhH",
  "key40": "26dkRi69mfc4dViPU3GDhqNqYsmfrh5oU4gVyK4MrJndEAU3JvB62PfgS6kzq4whvQH85DBN73Jw8ReV6Pnree4b",
  "key41": "2vwvDPuK47sWPcH3bKkQxUmCbG2S2ohMRs85Dj1vP9mkA8ijqx1qrW6xHmdNQ8v5Y817gc37jbmkUTFQJK4dGNWW",
  "key42": "37CPj45WxQgS9M5g86FTaAkqnLzgpLWi1TJsLkoAsS9g4MZHJSAfdu3Hf72Tjn6mKSuaid3UEM7Y2qdQC8qXUid5"
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
