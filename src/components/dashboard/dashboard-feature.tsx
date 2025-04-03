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
    "3QccWFAcd6kbPsjSNa1LezehyhBA4KfZH1LbSzwvjzj9yaWBnQLzBgtExAsJTCzFk9243xT6RF5TyAmC2htSHvMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5muDyq37gL5BnTFUKjVtFCSyLaHwZsLbVDtXdzvX6VN9nKSnjukWu36tFBV1uNRrbQviLcEhYrTjfnedxmQLBWo8",
  "key1": "2p4e258ikQ8Jzoug8ZXN68tBLxMA6qEea7QSuq9D8zZFcQ2RU4WfSquuBWXTuGkp7p3sWQV3GCDEGX4QSxNXN7tD",
  "key2": "4xfZ5d84RBR7zFL3sCDnL8uKXGQjcCymXTgJ6fZiPQt8eAF9J6d7bdvE4pPPoFAjWVtJix5FFCynzyakjTSBkMh5",
  "key3": "4PAmUFDwFgRuTaBG85DAzctFbKTMe3yji49Yx6TfoT5cjcEM91EqU1vLN1ZX9zeqVFc2yaMABnsBVsyxZwTfoY2B",
  "key4": "64nnTcn8nkqXz58Mwq5Zm2zGBZtV8DTBX53fhgHeJtbNfZHn8zdkm6Xafkq14BCkJJ7jVyWmTeDHFby2n9tEBzeU",
  "key5": "25o9Nw9g3BVuCE6KYRx82YCCfK1bnRwL9SNUfcZGHj1YCVBAW8eLeaLE98Dd78umi6vkq3Z41C3XqRyemiHKj64G",
  "key6": "2d8HMgXP41Zjuob4pzdajFtmgHBZSoWHU4SCvduhwumXhFwqCZ64biPdeYBfnqxQpeTJpP25skbaSsUt3zuDXP35",
  "key7": "4m3ekNwgS7U6uUxjmyZQjdqd2aaH2p7yssFpDMkCRRMQy1iowPvDcmLMGFJrugqQGxXwjfAivC6tMHdXnipKRj3Z",
  "key8": "3KiiRDVG9HnZCYWRQEkocrCHeW2T8DB2iQpny45dr9sKtRbyjRYkVu3oerkQ1vUqtt1xjrH6xMVHzSzbHkMnVdGu",
  "key9": "4rLd7QCRLuzgGGd479zXw1AJS6znS66KfGhoL2HL2Fu5jcYBows6nhAMHzQVWTNtJTS73q7UQGpPfMAhZdmUij9T",
  "key10": "5bCbJuuBKjZz8K7yNFm5HB8sNqEW98GTEx5RK8nVT12kJ9j4shFBo6wvZpvrFYiQNUKyNBiDRpJoFpUgWj13CkQx",
  "key11": "3kUUQE9NoZW97DB4ozuqxevac6Wo1oXcotwvdBb8uY9adgUHWEA2g93Rnrq1TPTG1DZrQdfYdWXnKTjnGjwzspDB",
  "key12": "2UMuHatpgFxRRixHSuv59yZoPweyyA8s1sHqQGsAgC1rMS7Pq9LKyJmTWfkMar2PCuc7AX2FoF9JWbN7n3e35rn3",
  "key13": "2MPiEJbFycDemZPpSegZHwKTmqtc5fwPBVZdS4Az9peVsKyWY9FwNfcreu7AVsRivRseYFxqSVSywWj4Jtt5E9Zp",
  "key14": "59KQ2PR7gncCutfDbPus5PuUhjwosXU3w6kSb7nbqB3t79fCxngd5hDgvcvWwGfPKgsN9KD5tf8sm1Y5JpF7A8xa",
  "key15": "VzMwYD3cDjDJXjR8nGoVjuFTZvF4FLcTZyQ2tNxrkzFW7gQjssgMDNpGTEqPAbfV9N3SNkfUDri1LMSxJFC3NJo",
  "key16": "bMAUDbs3A3HckHXnGC99KsYvTy83U2eF17YbgkKmYaePmGFQatmbaf2LVvPSLo23pTnNLTTydPeVm8d1QqvmgfH",
  "key17": "5TrKcyYzPPYDmcwePUTQBbgvT8sacCN5w5a3V7ASPe2HvWsHqfTnNaBX3B9UxEpmVLM7fKdtuzQVc4iNq4RFtmoz",
  "key18": "5zv53y4PhrGPR6jKkT4csDW8Q6pSWifZqZS51xZVZBQURWMC6wsy71EA7FhBCjAEewg3761o1dRBqEgYxmenMx2D",
  "key19": "5tt5FLGdyvNHh7ZPDLMihUHEL55dCpSkRG9v4GQGXvocCzR6b7zEp1hxBupZWskRhLGpGQdAEiugz1Mr44hphQdE",
  "key20": "3DCVzu3G476QZzWmCG1DAsThJFNxAcfYw5byz6RnYfnbqv8jCfoSsk9jJXALBRH22BZWgrT8n7dx72RpHwZ81SP",
  "key21": "3Ls5UTvyQsoFKLHQeGAARnes26UiTE22ff3cm9kE9iFAPCDyyNQMm3LxNRXdos69yzdPwd2VYnG45NyVXEePYgub",
  "key22": "3J1rByhe78EmfirydAtTDhWTaKAwuL2RoxegLAgd9LNgSrdvGycMZDrgWdJXqCmCu6ghkWumLKLyED9aKHBVCPew",
  "key23": "pjgCcJZztsSzsfQDrXvcTdKZfk7yARMJTDz7adujm3xYQsxNoYF3DXvmwBb1EjN2bX18GbacQ21iMPe2hhrEp9B",
  "key24": "2MFpAJjwcd96pfBnEEAnprn94Aoyubs6mHpoRpwmcSGMTF7mJsiqsoGTZMFY9BK6Xhw5xN8SsZXhMaAupZRTbLGE",
  "key25": "LPyRYLD5g8h5JthcjmdwxvPwmUTqbRP1mL6GTTehSn6cfT3jbRhgsQomr3U6KjkeBfXqw7kwaAudtm1MdexkVdv",
  "key26": "qgDAG7kwbNEPSmaFGFHryuPtrY6JJUYqYYXFtbMECnPbPist9Jzhq3GnmdnubRtfHG5PkwZ8T1s7DX6cTokU99T",
  "key27": "5b3ztL5xnycj3ei98TSQuLXd8kvgVT2ymJbkK5ZPB9aEo2SDk5pSJymJnopTQ5EPCVNohWxTdYSGXuXWVPpxx2sL",
  "key28": "2P5M33JEgjHzSbyS5Hm4eyQv4dE2ueWiN1xFcSnMRqVanmcwPFGiEv8JLePZ3gBDs1QSCyrAwpJbsx4GHQCis21w",
  "key29": "3gkLzp8ggzALgaLMHTPga4dSFFpjzWoJHhJtXTkzzJQPEw8w1UFVYHbVHNbu4LVRzfyy3FUi7YaSRfCazNAmB8Uc",
  "key30": "AxuQQsgDEBmnuVUzENXETtPn4HbDSgz8CQLAZnhwUXmUdVZAX5huckTnqXQK8MFNBivgKs9WxG4Qx3XFHfbcRXc",
  "key31": "25WZqCeyMTFvjToDm5yngZxYskctfGsG5R87ehm2MG2DqAuyvZX2mXjQwc57TjuViq7vrkQFLg7sZWH1bg758ZAH",
  "key32": "2pRfWmbzPANKSamvvsNSCjXHf8nkfSQhG5WnBjshu36sgUpvikumq8K1oCyMc8oUNxmLEjMkWXJmZEUwUAzSH4Rj",
  "key33": "5VaY8ENy4H8dWy6fVgxKELvSkBspdEtskWFPCaddsK3N6jUrhws6AyXkiVtgaAvfvgtvzBeN6EfgW7S95BShJNnG",
  "key34": "iiZ646jDdTmkq8m3jezWd6vz6tBeJu8axybqf2keu8pHEc4GaYh2H6irtfHVEmtkdwWocKww4CwyuZpcUC5Rw7G",
  "key35": "4MKBZq2nZVQAFFuDS1q95dHK66tMQdp2UJrd5kb6iE5eLBHHd8aufCepUvE7fzgDbHLbZUPYmaXHCbyXMT7TNFgo",
  "key36": "3J3oe3QMw5RTFovB99mwCzEkcMAAkDTxz9JV6n7v3zYJCZUkRsGm5j1BZ8qitPqYoYQgfLCnYmf3mmsD6U3EwNBL",
  "key37": "28EQCC6uTmh1amo4kjU7qrypaHRanbU4f4NhBuZtjT16gHj6ZYkdvpWtNC1RvczCo9xcPCisWjdfwN3zL54qm1zH",
  "key38": "5G9Z49HnjAmPqsXufhwSodUbPQSETW1RSsgX7nUoLUyXcXdKZQZrzWRZ7bfd29La3oN9FsTmjkAwo6X9vF5jxGgT",
  "key39": "4rmDod5Ft9q2QH9bpyq2cntU7EtVhKDAE9cYaAD59tUxtVtnuC9jv2bAa3a9SHZHjZo4K5Gx1H2DayFXu57Gpmyz",
  "key40": "33a81FetTNjun1TtBzkq4d2836vGEV2jcPfq8PLL3dAVz1HbuM7Pt7jmQbMEQFJdjY5rZnxg7vc6PdkStMDaPr16",
  "key41": "7puNZRbJ4mTvvg2gt4KsLXZ5Ys8Y7QKb1dCrgEXaNcxWhzUdrCqpqaMDuq3WTXmqVt3jfeCF6AeHDFzyVXJP6UJ",
  "key42": "3F9E4gpMj3S3sJYYRY6aUNhtLZZQ6YSSVFU5vAQERFmR9G8yWqyCkVCWJF2wagkeVbKzv6FyXBe5tp3V4scXvEix"
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
