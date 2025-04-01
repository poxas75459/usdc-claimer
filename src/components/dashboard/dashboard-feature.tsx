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
    "2SidcHuK9io7MVxz5NHEZXCAp539DPYs9AWgooPXhwQc7mZahuZ3ECzMowB6HghsZv8bjp5cB7NZ9cvcXEN9JAf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LSwhjpYHU7V1stTbD6BpPciTSHVvhMaiXtHspN7m537CfzuDyp2ZFxQXjGzcfZ4or9GpZSNv5Hp7MfuwKchMGoh",
  "key1": "UjGxyBAtuX6BvSbRZmsxoUbUGa3A9XaCPqXH2XgVXm6TyR1bZwhVt53fTcmjUkY3xXXHAyrqEEtPXTfTkzNtu2L",
  "key2": "31VZc6sBCPU7eZ4egfeX4XZhtgApFkWaZ4nuLJjFmmMXmgXuWTUjknopnhnjNTdzPYat5bwPASSBijLdq5o3JP5k",
  "key3": "5uSRApa2GNBW15wQH5yPdnPkzvFjSWvbHD9kyNJb6oi6yXXoKg3rpdKkyEjYnySvVYuJHH61HertELqkdhMo2SDP",
  "key4": "3TkrdciogDfhumYkaS3mqUh1XQAYgioEgMZJkhX7W9N9ryNkWXGpW4ZuRwjcTaVLCycLuLs5CJAGhgoeQok9xgCk",
  "key5": "2tNN8BzekCN2TtkaPf1LnFUHXC7iQG4HtZWP95TaYGv3FWHLNP32rA5ffNMGYBaqv2PGLdZXPCU8SXc6V4ZzkBnX",
  "key6": "4pHeQfieddeQh3z2PNtzBGL8ysSnewobH9NnaNcaNuGYTKFXtL97VqFJ2v4KksQQQaAmpH9RiprnTLSR9JYChExg",
  "key7": "3wKuVf9nV7v2dPWS6BeqGGTq4Wa8GHD5SsnG1SXBmDv4R1YtJ6hSR69vQizphi18ZZcJYWimiJRTW99see5prj4p",
  "key8": "52v5Lkfm3tfbfgAyf4EpU5EHsxa3P4RDfwu9nfNXh6AYGCETf6MrHk8FCiPEbnLgAreSMCTPhReCJJKvW4zhqDsi",
  "key9": "271J3DSCmYjquCiWP4YFMmkUVsk9TeVqNYmACbd1MZATTQgWWeEHm9HmRS49trN52YqfomDQRncFHN5tQVvtqhjT",
  "key10": "4gFsqechFj3PvrNhA3uBZH4ZjBmsZRcg1UHf9ZhECdZkBdpQAk29k7dPMZCHcxHHEFkSpjz4GtobbBkXgrLBKfkT",
  "key11": "2Zv6nVWRZPWmD9g2e3R8uXwb5s7zR3heLgKUmQNo9Y2LkRLdjMnHu8mSigV5k9yTMggTXoGBSyz1ih1j8AVNGtDa",
  "key12": "31BPomiNSqSJUS7fq6qqvwSeZaBSgTNEyzWWtgbM5d48Lvjna6TvorS9xDno2fMbBCRoojRnoxM4S3Jwn5HedEjN",
  "key13": "mMf4vYXzPcX5EWgjQZzCbFYwwLQP8RFWb52LD2PuKv7MPEoMRc2KA4VxUcPGmFCQLMBvYxPUYEDMxfay4PtSXDY",
  "key14": "H6ekAxwxPe5THSY53nYmLuBEaMuq9mKcXMBd2Ljurvo33ddLVGkqcAoc7tcYY51gHcwXX4MTABJtcz9sLJidsA1",
  "key15": "3tqkf26qTp89CvKvnZJWQUvzukwkJEQypm24EaXWYzkAekZ3UiqSoG3TCY49Zmpauu8dcLFFUeYwLszKXDzLA5TW",
  "key16": "5WUCUy6apSdCMctBwZXtgttmj3oJcngGPHWgvZ1TdEsAoVm2ufkajEhgi7UWtdKdwqUmF3DaG3514WZ7RZb5NwzW",
  "key17": "2DbEgaePDEPwaMSyZTqD7Suw83ZURvN1uLXrWPAq71Up1B56RWdHxCWjoHRojqKbfmgJ7hqCGa8ZVnsEKFjyijt2",
  "key18": "4UQc3YJtXTDwLxN93UpxBtYEQJ48ygKQHQyYbFTZBHfbRNQcLPETiZ286zCMfwsgnMfmNdzYLF3pp7338o3LqeoY",
  "key19": "3mNRdS6dvWW2BnM5N2fYCpKZsX69rvsQWi6ZXH7J2J57ooXnd4LS67JFo3nv7fnangLwQXKu9R4jmk3wGaxUEYJi",
  "key20": "2jNvbUCSDG5BB9oz89xmRxFxQowx74QWRj5f75T9v41JF1ynb3L932AtLsgsagExLTtvuWwVxYLrBPmowdXtcqaV",
  "key21": "2Qi1RVZpWrpd7cdmnjXau5jfH35hsyESTzTKZNUvS47sLUgYJD6uFuqAHLaqASuHYYUdpfv3J6hbJ5dAQoMUxUk9",
  "key22": "5PCstZ3gHCJ499V8FDL88njpDv6QWqvTJ2dh7HVGx5Yv4XmeghKnQfBbDWCj5iMBR4cnN4otPHHXMNmCZZUsbviW",
  "key23": "uhknTuf8xUVbtVNLH8PKZJG9VXAS3uwK9mQKc2R1Enjd1vvw6B5EkQictJew39UKps5GJbkzwkDZy7i8CNTtNPn",
  "key24": "RYZCej2e4xtunm3GrptnSsyqpnZV2URyHM8D5QRUJVVVkvq4tRNX6R2QmHXsih5DQDi364fQ8jU4DhzBhWfsgxd",
  "key25": "y7ecmkPUm4rVyQMSRtPzN3kWDusC6Za5oHkcnK8HHbihB7oMgFvFk1QF6mtSVbFN4HQNkLmaGMRVm6bU6JDQW4n",
  "key26": "2ykvZB13N4WpvmaxvDd5fDqbchpeUorficdiqqTMecye457Fkf6iLukQ1UySuSCzLsjsbYFDucNiVRRSuete6R8G",
  "key27": "3E73cE3sLTnVtAmL57hAX5FhvNbNz4kKH8CF7LCrnE2kUhw5iGCVkyMnP82UA3skpJKcw53F44mJakTW8H3jNcZn",
  "key28": "2gcdmvosFNvrjDcEiwoUr3skpYzeB2Em97nULMk6ZZqyoLngP9h9ATBTTV4i4NTLk41LeQwrYbPjp3Fasv1NsULf",
  "key29": "2SPtoq7tUx4Bf5ZepdvfkxiBSRp7VGKvqgodDgJPBcva8YDmBe9iDxCquYiCo72C2KyLAnu5yfs1Z62SUTgMDTs8",
  "key30": "4T97KMgtB9Ss4f53GL3vvLNrydM3rSoDUEm9DFYv5Pawciutq3SdVkyM8ySai3dNFB9GNud87ts5sh6smQQSJUt2",
  "key31": "2EQknvERzXkCSkgbnHCVBxtfNTSxyxQaqMCNePEkLXpY2kVGWAASYW8DzKgFqN9JJerEKJTdG3YTNbtU17MAqgH3",
  "key32": "5XgHWURiMXu7FCFwZZ9JsMcFGVZA679QcajVJULQEnKNWq6t6SawSxkEtDpXfb3AGUnH42XGtwcKCRMugrS7PbrU",
  "key33": "62zNmuQCZP6T9JSb4vJopdg8JA1dkqHD89dhtqXpdadFHfZb244Gy4xLDkUT3LNANQa53DhpQRHxjAbAyZuVPYsw",
  "key34": "4jAay2cWBowpqKbisYQwWFELhRjYGp6dXZ1mr24A27frcBMgtGexYGpTvNuSjMeFxukrQmpnG7SRvJNMMfmwv4ZS",
  "key35": "36yzLn8WrWaGLV6QLkCJcfU4SswKVPb1k23BwmT1UNHuDPnfFFPUbfw3YoiP5FGic5cs4FpTabLdVSaFoLx7c2ek",
  "key36": "2jFxWGudv6ygBV6MnQEUXQv2saRZ4XMSioUSx5EPbqAh558Vgv8mx9VzfaRw3Epq3wkutAk7YUgWd4PquJu8T7V2",
  "key37": "47MG3BvLYkrNdgrAhumZyvv5J1htxtAPHhV2XgR1ypuAEMhcKDoZLtzRQPKNxBBdvgSut3rZRxiCs3gctjao7HMs",
  "key38": "552FRN3sRKPVWxTXkrJq2iSrFjJzL8hh3hyzC9nz6fmUN81oXNkBcKJJx8XsK1MJMZozYPtwh277hXcBygbD7KUV",
  "key39": "2PYc5Qc1KCBxn2dvoJMk8uzgiygN5TnxrGdGyV9oCpp5iTikStUL8SE9V4NpmhYn7UsFCtPBdz3fSA22fbiMYCpg",
  "key40": "3ydGgjAXe7KgWvQrxh27Qe8kY8qofBFwyw3MoWndYV2JRGZn99XK1Gx9DqvBay5iP8gZsBFGvuApn2j89wxh5tCS",
  "key41": "5xuxzGBikRK8Dt1YQqC5AifE36W6bKzWsD1LbKfxomAMQeGQufLtX5V2MJJQoPXVsAUkNhr4hV6mpGQzfsr441Ay",
  "key42": "5NcyZzspxcNSMmJoRGN9MWmKvqtASdqYEeimoXQTPafgR1NNpNdF65NxpSXioUHajhcvxMsjxwj6NHSrkAP9scPG",
  "key43": "uRBN5SkrEkb9qpTWy9kRts1RNv4A6Jdm4j7oHCQJtFstPi5PdiLCr3YrNHweJipAxGxUAWo79ktXBugAVf5GDyR",
  "key44": "3FbyfQPB2gFUXgvsaQ8dQUAm62KBzdGCj3qSgVonTSidNTMonHyfiKKMtjobDtrikTD4aZS7Tk73jWKKsSEYwfoE",
  "key45": "MBN2UELRey5SmjvwzFgiexCNGFXmX9WXE4kK4RJf6CPE6gyHZ8yTqz1LgCrzbgYPw1s4rcNCeG5T8LnHkivJgJe",
  "key46": "43HvEujaSnCNL64YjzPaPsqW1tPtzV54SS2FR1TdLzgxUJUvctK7LbAS8x5SBEzPnwhsiM2q6GnkFsNe2vzoLfuZ",
  "key47": "4N5ByRYAgzRbCg5NdfN8QbAbciV3mbG9wBziHiN9NuwEkjvFD9pYvzgZv6RKPH98AM9B2Ccmr6YfCp1zEhL6eVAi",
  "key48": "zE4SrwfyeYRLmnvo7bYMeyvPNjAuBmCWxnuYfnXMfuJgRwajT7K2pLYzYPgMokFhN7gCN94x8ErEBbjwR4puy4t"
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
