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
    "5xJK8JvnK7FQL217gQG7BkfVJgegZvzRFTAR3i6k56NCAddd69qFH6cqDe35NiBt1WDjdy2FwyX4ptRniwDytxkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dEunfc2hxj7C1kTbnxaLFr9pUE6SwY4P7Esy6WxZH8y6U2ERuWi2UqdVfWaQ4RxDyzZuAme7cUnGVd9DceEG2MK",
  "key1": "3KkPBgNSxyHDSDhHYHUFC1y5mcGwfwtZ5zdXWf29xW7ip97TtwMgJ3vyVMgvyetnD8nPUoUfhrg3149VFdH1VJP8",
  "key2": "4jaMx5vdZ5wGPa7t38sj935Q5Qit15H2aKa6dWic7uMkFt6f7WrxsYwzGKepNfU7Fo3zV742woMxwE4KvcgATeHX",
  "key3": "38pGVTCMEX9nYxFEneKUEBvpB6VWGWPA9GF1Q4yjasWCj9SkxZQ3QZonsUSQ6bUFWfKDLNWWP3jjVrXHHY3FKNkG",
  "key4": "3iJQsStEfwBCMtcfJLaS9Y8aMtUSn26SFx7S1BaWQW4P21vYoRLJ1B6GwrdVL4rEzEkwtnfyHrSpbLKpfH3TpDHu",
  "key5": "2B9LXBH47w2qo78XnMYWfXmuyqhb3Fz2FLvFTDaBve7MLn1ouYeSvxSj5ejiP7eb7wnHJm5YS349uEQrD3D5ArVe",
  "key6": "oqMToNBqZ94hGwZ8nYtcC88c8kYZyWwzioxJre9ZThAimCeoSUavZ85bc267Aq7mGX8pNeTQKGb73qnRMV2LgWF",
  "key7": "5ZA9jAj1sNFCzyM8a1PpG118Y5CDSAr6gGb9tnfh8ugFrzJLHTR4DnUZTbNyiiFL4pw1bNnwEoc5cKyZgjD8X4QE",
  "key8": "2Cz7aiqhdVpBLnCgXEDJSPw3sLCdUBc6b1Tpkh8trnX2Z1GcCgddauq68XDTS1zcC7Yht4TRNp7rTgMLgLsHk2FU",
  "key9": "34VP2PhE1Qq6ibZ3zrcA6q7mXfYSiMCzYywq2T23fQhkKGPwd34Bto4yVU4q8Yci1MLoTZ7aKy1s8ZYjAoX8ysiB",
  "key10": "C5Pvcs1sMsM5g2PuzMmyTi5zRhqfdT7EQCX9PDirpTfaRyyWzkazMuT13Fq3z8YLRhxMAvNniioLNr8m17kwkZJ",
  "key11": "3wbPqsuxaH4pMBCZ3dMLAZWthsasciGYTzZ5uTbjcFdXss5o62fGtc3kkYxXKGM2gYZoE4QsDcsrRbWPe13s3LHm",
  "key12": "4kUgsLJXQBueatL9yLCbTiWZhXeXmS6gthBrryf3MSafNK8ESMa83K6r3YPQG9oc55wxu8NKCbbvgL6NQZpZAvYt",
  "key13": "4hSNSUGAxusS5MBm7UMUNepyBk7FiTBtRGBN2kCDj97EWUrRTHe2VN4x5MfF9e4rPmTQyFGbhTWPgBK9AeqXFRXm",
  "key14": "5QRARwaMUPfaBtB6v4wUVRVR9QaJGGSXem7ipDcLKJeKkVfErWxDeRYntmPsGEQ3K3QjtNHmbJ5WYuZESZJq2jfT",
  "key15": "5LTn1wdNx1MBKoxS3sRksh8osD1KpxLb7UNC63xhSzvqoEMfij6nb7XX2NKUAUCnfbnJyfLejMa2X4Lf7i9PUZXv",
  "key16": "2TqPQfi8C6PgoqtYrBmFFqzEAzumpjuwjiCmPZ2YekzzgHUKePFZ37qkKSFrdRPmhqJ29xxdhHYpuWJKk7jXo6ES",
  "key17": "5GcBCBaHzUcpsseKixFb2RTwaKGuJ2nkbzN8QtSBsuobNdzGaUectVkbCUtpLDhvbHMiA3frnrJHynkXSwbegQkf",
  "key18": "2M2S4XvkvbtqQmULEE1B2Gz8m9AkK1DEyVZdH4mWx1jZp3dJkqMBQJu3F2bvMntRAbhS4c1hvZsnRZsiTpEMZpsw",
  "key19": "4KGpE7uTxKKBLmhaUqQpqSqXdosQtqegpHk3wiTMHW3gQkDY5yNBD7QFxZqFoMihrmqCHTWkyBKXevB7oaVKiwtN",
  "key20": "4SjEpYBDDXoht6WuRcuC2dMqwgT8ZGfSwf5PKEhevFNbL9CjNMTyo8wapxFtUYUV4naNDccJ7HGAAdicXcLqd27z",
  "key21": "5FS8aH3g1b1rtxdwCpKXHvgBtuwn4JfW8Bzpwg199m3CxaygqAwkuPbVQqWPPGnPPgyAeQ8rejvS8zxdnwAJqzE4",
  "key22": "2KrDRut723R3Gc3Js2SBvSJVXY3wFXLdz8EZ3L1GRLGADBiLxHnC2QJDdRw8tV2KuAnTZCr8QNLFynkqmdFwtqUa",
  "key23": "aR18UabP3gPnKH83YgBYJcT8a4SPRw6Zxmo92PRX96jHCFNq2yuEVP52M46eH6BvuJ38mSh9rGZRGYhYXWApjjs",
  "key24": "2kZHtmpbZNhcfBwPkJpLzzL4CsdSKzAsxB7Vc3M5kVZCF4r9kiuoXevgBTyzZvNXD6NYdFBMkoBaptpZuTiTZEeU",
  "key25": "25RmqTXK3WCp2QYNNRT8ePX9kga7koWEdZzk38XMnhDKaDsXTjQv4UddzgATtJdepGNLJJf6xEu9cfHiNTgB72dU",
  "key26": "MiAso1s8g9DD74KxzYJG3BQNx15xReN8L9MZj5rKRQDrwDU2R6fHrN61skPs8YMNZXFdBGDbH2bdDZKqLK7Hngd",
  "key27": "2CVBcZsvPE5EusvMt5dADa8XFEiZ2y9jXCNgV37GdA4TXfXU7NXikJbdRvimsWhcS1NhJwDWZEr3YviE7WJcb5VZ",
  "key28": "2JLu8YETDPzSfmXovJJtp4uix6zxfofXZfdyS2eUjn2JroF2vQEarAXMVMTDMrtnZTeo8jBe47NmVe5j9pTvHwWh",
  "key29": "5afsrZYJj2W1MaGyufTAVR81czQbDrpdZBtfLf1i2wrzn7azVHfwZFCBfVVeDLPyrjtvtQzXPXUQeeRcVCQmTVqk",
  "key30": "3M1WKCwktHA9EEENffTksi4TBoodXQopEinN9DdSRPf9F1oav7YeBBQ5wZquvRPUVWT56bRwBX6Ge62eCHWXe4jA",
  "key31": "ETr2KBfAstNmsD7hUQmMQdKYUrUv6C1XzoSpKHAyKoKDGgSUeo8MNYuNRC536hFYTPtZxG4wHMySHNonkeoPvfL",
  "key32": "3akNyrHXzVmXbAcBWmc8an6TaNM9BTdZaLQruDQmtzgLwikyJuani8Tv26RVVogu52e3TLEc5uzXwfe76E65gdz6",
  "key33": "52HF2fzpug4xt6nG6JwJDc4J7pkjc1Q2WPmLg3LR8JcmTKv9fNNvUBaMYGDgu73FaxkcrtvJjkyjqM2fkP8Db69z",
  "key34": "5HmV55gTP5inx3XAjeWw8RrGZZCoAs2iwkyQ7CBkvK1YmPNhphL4eqFeE1ko5ZGXMoY5BHDh7UzRhskoMHNY43uf",
  "key35": "4gBEpRwJXxdePpXHfNrNMpRBG9aW8spCVgoWZHajvAKktZYYkAkKU6Kgqfh2Cm62aRPsJeS2W1ea59EhQekT3NEM",
  "key36": "3mmmHE9PZ5kuS8TJJ7P8PeC6ze7nob4uqNHXdXWdsv4F2CpidbmLm7ximcEc5bzCqYnKfgXY9Y5qPmdsUiEEtAvk",
  "key37": "5Agi9wtNF9X72Y8nHuo2RxsRT9g1Z28QC7CYddFEqjd6Y7XmokcYayC9KANGh5HKeofpzfVNRUMm5NyYK42cR8V3",
  "key38": "NvBNjRVxYwwAbNKS5nErei28vQjDJitcceUoxiUneBjqiLR6yJhGjCmxYmdyJuiC4TuopaLGrwpHfhx1qVACtf2",
  "key39": "5b2uvzbN3gTTomfiCCGxiyY8U84WprQGnnVovBdyVQa6azP9oyHxGfjJLTtbpSgCfXBL7B6oRC6HGTEdHVvmRwNV",
  "key40": "3v7JBtxHVN7ETny77geSiacEAxfYhd1jUkV5DnX9DYkjBeRxPqhJRpSrfM8ehy4mwUPD1C2dnucmFXMSEm7doWb",
  "key41": "3J5meGvexjDDuHCz2aBvHvw1CEJm5ZxFBcLjGBNM31MaC3tzsQAumfz15ZYFS5oPfbRaADVBdmu5mkbNjNozpCXY",
  "key42": "3DsZjEHhgoWx9QDqBxCMEoiucEVrGb3MuMzUhn2rKQkKgzkmDj38PUbNPUtZFzyknYssB8nibtJjxQm3bugPCyDQ",
  "key43": "4ENpsRkfLubm3ZSyGWVeKUGyAM6KkBLoKx2f6kaZuMckYeP3Vhg8emnNSHujc9ShBwyTs6knuY7fm7B2me3yqGEV",
  "key44": "3cAruHMjKpSUpE6GS8NKoPUXw8N9MdwSSGkmfoPodFhQy9P9VbJ2CsuM5YAHwQMZXcHAfRLn4cYVoJNX7qcUUyPr",
  "key45": "4LgGH7p4DxGRhfXe5aD1Mxy3jWmVdnjsCzCFYsN1e7yyd2KFvybUSo67yZ46cDNkQ1oaKsFbWjg2Tk2WL9YaJ4CN",
  "key46": "2wuu6UrPesJNbDubtimrspTr7hX8bMwWjcNagvaH58zkeSqR1QegH7QC3EEwDCzsLnAVKmBNtyLjbeDFajE3sJ8w"
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
