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
    "3ToygMfRgCfk6N5cJ2AehhuuLFFTAHzUEh8VmtgSPw2xTpBQWCErXb5FADC5og4r4j6ibnawXXtwB7TBbwrCbXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c4Tz3jyjCuzdscQwbLzBfpybTxfpVVRbAxpeaerrv1USF1VNZDMdQjk4iBwuGaq5eP6kRyKU3QSFRZZHaoTpJhj",
  "key1": "3ouW8C57TPCEVtAyXBTREtyusFV9oRqtgWRTPddyuy4oK8EiaSkus7PqfCi4gNjWdEVVDNLetHiTtPnRwyTEVbVg",
  "key2": "4r5LQVHutYpXnUyFHPf1PD1UhjdMvQ4aWkZ4p29U6RG68NZa8zDzH9HLrVNfLgiC1Zwbj9PyRcRVcy25v4k7B47Y",
  "key3": "2SXvv41oVLt2Rzg4XtXfG3oY537hBvNPfNag7uRyXVEMeTP5NHmyLGA7aymnk7R6DVWZvALV6HxCQmKnvkhjd39P",
  "key4": "4gv2XHWt8vqbdNyWKWX4qdk2Le4eN8fJxWKUKRvcovGvh5jFUugcAcTxciSVAVbSj6EA3GcFcfpnr42jTiyvekqF",
  "key5": "2MkWz9MBCk68DScNDvoXzbX2FLYUqrKs45bAwMsUGNAYkNL5i1vg6xenPSzcQE4XDdRi4Z8jzNcWj2uUEKHvzMg8",
  "key6": "2gbkjttCceE2oCBXyAyXjJarLffFcYW7iKEirhtu1nkrFv8Dxm42pPAAb3TqbdQaPpMpRrdSArvmtieT1HdUGmg7",
  "key7": "2PtExQsYNVeAYW2WZgW1L31tTZi8xojMQZ6KTqERsVY75xemQZQzj9QuuUgiJ7LtByYvZNrohUraRXirhDC1Moce",
  "key8": "4qUDN32xMDDkfxtdMPtho6TBSdL57JZaKt6tAgPbHGJEkEt8557zF5wgKGDQanPwCwusWSuB3z4rN92V6NG5VrSA",
  "key9": "5JXszHBsk6ECrZQNNohmLYJyjRditTG3euC5KvsH1jKL4ngatkuqhwHS1iM58HpKAyvLevtgUVWMAtjXdonSzCD8",
  "key10": "XD19cB5feFryNnzEkHEU1yfKVbbkEAWpkh8grNCNcNsTvxDDdRz7JDYkAobCT1YTgxHAw8oEKbDszqQBSfjmVwS",
  "key11": "36Np9CaB2ynpzXMr2PJDscybB4MWFiGs5AgiLHyBqNzaGWUWQm31wxrfLEMEmQGhohmta71oMX8rg8ZRa4RsSrQs",
  "key12": "2QvZWXZCuHu6UnfuNJmC6jysEm87nDgzXWRPuSpduBZGRr2S8u9Fbns4fNNSgykQ3zy81t215MccyEtcpcHJhyXs",
  "key13": "5uXMdChZj9YwG7aAMS1aJFo36dMweb9gp1V2P1nEmdFjUDNbxfLF1RGSLERRMwKMi2HCVwKV6CXkQQYvN1TSaZmF",
  "key14": "2s1qL3Ljv55E2bEkuVHH2vUA3KQM3ynxpzLfkVent79xfELzQaiW3cYSr9yHDXdYuQfPnk5CYhjmHmbbLhzPRzLk",
  "key15": "224LxReSHCrpSuqeroHb7jq1iz2BbjccYoDiiz3kcdRn4HvUJjczseHktJMk5RsA2YpXfQBVou1bvrFbALVBczf6",
  "key16": "2zc1ZyePFM17ARcFsSHAJiFgyG7ZmkhHCi2fjTzmHz57SHvg1R3wzX3ywh3GGNss7vGrAxJp2eUVTRec29u6zzq4",
  "key17": "5BaDZRu4EH8jMBPwu5xcEgUeLCAWyXVju7PmDAikxBAB58RqVFV8eU7WobXnGNwjcsTJoeeUCYbfLYyAXzaNB4Jj",
  "key18": "333RUPyHQ4VUdtqCQcLg7zwpGQkBGRnLheK1WxG91o6Qbt5wJLTtpRoHZddTtBDdfWtKb6sQuVc3wa5bNYhDuNjd",
  "key19": "5uugoKC37QnhUMNVJT9FSd5duPM591cwUVdKXtJDz9bSHS5rSExZ7qJy7JEfW8gNA6mPR1jjRU2F1pKq5S6eec18",
  "key20": "FHJ5SpNKB2ycSQGho7R1Ctoprv2NDiWPE8igJtkKcs14ZwVLDcdK1zbADq6NheB63q5NJAiXV2mAtR5JZcLDwxo",
  "key21": "5knXY46Mg9ErCm5U7t2kg3MvriAG9G7HnSyypiKBDjq8UD11z6D9uJT83CknB6ae7YcpHtaFePSCEZkLBozUWRXm",
  "key22": "4GPxpZBt6W7iFkzKRvNqeieE5LwLCZ7oBZpM4o1ry16ZNprTzfxtztPRK8PiZokdxweK1sRJCJi6JgQ146Tzu8k",
  "key23": "3cAQi55MnQxykmFputf2FF4HDEScvXxHeoJA4sgandmvaqyz7aiBBiWPkjmedhjFnZaFLHkNLr3cseQdDi5qrcdJ",
  "key24": "2qXEAesbvqTCGDdkG3bzF9V1Ec2SvXBvdSbwb7ko8nfRpJfUvGCGRx3XZavZyJVNfWPoGFZinp5xCawcNuqbd5NW",
  "key25": "29NtZvc8dbYAy1jwUiHAPWrH9KDKnzfH9sLvfeuiUitbpFE96imrg28UEuybUZbSG4VsitqqCKNSfZKUNUyfHdxS",
  "key26": "5bzr2UcZ9i3BN4UkXxj9Lcka7h65PfYciCyMGWMMu6ShysRgmUKv2tXaouDb9ReMBExX23nFipmUwZK87YS4KQr7",
  "key27": "31xuopYufRgCFbVYvz2MXPrTRKBZRBnprfhh2xdEHEv5go336ESyvM8awSjR2hanrTweWVEomPLKo4ymE7J1rDH4",
  "key28": "4Kv9NJ6hAEhXPn1UbjKCvrkh7nwArJeconyB2A74po2VwMGWr9xpcKWLkF4fPc2yfbcn9ydx2Mmi5EcdcjMziek3",
  "key29": "2Gv3cVvvRyHmxqoEiJq1f34BkYEysuEWvt69rVEDzxwfBUS54RZvkHQrAnE1MjgDbuHaV2fbC2J1NbwtGD45yvDK",
  "key30": "2AUAva6J9zYCr5wMnfrRqtWqWDYFaevAk5VAewuAp3F1MJ86UbUXbR3geDAiJbxN3Zs3SLsZR8Ep1neL46HX6hmf",
  "key31": "54cteW3VHbZRNeYXf1H8wbevBj1LYD7FjRAf8cPFug4RSY4hBXYucpHr2Wo8FriwX4QKYGXPPAuPvguhpQwhzEpW",
  "key32": "JTFbUX7HfQHZuL5xwcj5ZWDXpxaCKaFhc8PNaYCEc86oWUGfe9oT24tGXa5vzDiabYUj9yiUYgoKUAMV1K3AaGi",
  "key33": "3FoUoGwaqjLZig4JWk8gKaLegewthN6xYjHJxoxgtQJQjP6oeeYvtBtSwgD5Kj77Sci1VbJWjJXJFi3dtSzPmw5e",
  "key34": "3hEozhMRzajshTTYxYKQAXkahELoAn197XrSoxRG3iFzyaZnAQw3yBuCcRjfaq4m14yKaFg8mS1UobLSC6gSfBwS",
  "key35": "3Ea2CRxmGEkDrzpoSL6xen8STA8hqd4qUr873CipsLd2Pjgg4qb7xWB1cqyU9had99bLHtnWekZuJUj98HKUGwyQ",
  "key36": "5mT1Abyn8iYJHXy5aU6Vw59cb6TWyg6UdpJkEvtC2yfuKbQ5ejG9eWhg4AD9nTnfnSGqkqhcpveJbpP6sFEaGFw9",
  "key37": "5JVX3nmgCrutTsLVUtsCpjD5gStbNhJybk63wa7wTJvWVX5AL4NCQ4VLGLeA3P9ADsXtCDeg8XUWcyFXKZNWDwKw",
  "key38": "4Vw8NXi2z59HzjLp27Ra3ieQistgvz26SzPRUuchczn3cfNX8ZSEVwjN6Fntd5hkHZEUNhtCNKiLFEXWWbD8yR1h",
  "key39": "5qQMBG2yHEbxgM8PZx56qwY1uYpyuHFNyAMZp2J1VaUY1nTUWm8op2TXXFRcUCAN3NubjncT3VcjZN1REoKP4cE4",
  "key40": "uciaBqWtrNJ5uTqn8bwcZL6QXNQRukAniL752MteD1a46qDGZ7zssPmzdJmgUzcsNY9LtiFAqP6kNHBWxmSs2TP",
  "key41": "45HpZrjEUqgNvDMnZZw5iPibSjxprcmAJ4d3dfxjbA4cuHRVDiPmcH5KuJuCff2ynhzK8skYrzLD3m2EDc4vmWqz",
  "key42": "FmuqYj7T2he8ttuMDdX64ov1VtNtUpaJaiZxjPNPV59ehLpYsqQBkKh9RGiQy3XmKgvx8MVtUm8D4AxDteB7edE",
  "key43": "5aa3RzsVR3izdNQ81yu677LMLXUMhe8ib2RXhMEnBLUwyBRA8JSrja5b83CNeQn1EuttR7BQ95KphGuLhtVSAyFd",
  "key44": "4XdpEM98qAWizRYhf2MFnMpE8ZTrawEiTby7psXQbWks4CpR9Nse2bY8WMT5uvUzxsGMxzy9NgjGJpufss1B8aU8",
  "key45": "TNpC5xQxrcJ6nHEFtBpArT93CHpFr7mZnAuMTPwEBKDgFwp396H4eN56DB5LVd8VJmkV3L4KJdmNFFQupc9XmSp",
  "key46": "5L8GCee1tcDFzRKN59jkw2wouoyxxfcxVsrr2SvtpHpd6hf9Bc7Na9z6zujcf2WB6npbtSWibUzEwd4aYBaW6ms1",
  "key47": "2uocKb84LiednqucyjHbP3YDYvCjN3Ac19NDZvVDfhNo58Qkjo3qBKF8uiwAqyRXZiBGhe3XR7aY5FXbTaTY2Mdj",
  "key48": "54waCUX8DsHjchnboMnt6y3fKuXFNeNnhGwg2jx9s55g1qJU4c8koARgWpoNSU33mDwDMxc5Fnp5qB6xQcEPkbRh"
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
