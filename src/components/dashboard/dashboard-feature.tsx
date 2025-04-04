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
    "xroRckpsa1vbWJznXEqXow8ehdpREiZ2sCTJfTHQkTBB9Aszs26wFUviSmuMduJp49DSKCnQz5fCFudeDEzwK4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65RvKkCdZ3yCre7JFbPuJ39E8m1igR6FQ2GipWn2ipPTCCBgZuunwGLi7hsWjHDc2CyWphxhQgYDLFVaMVf5bsDG",
  "key1": "2nc3VxM3VuYL1jD8D2rqkXAd8Fh9vMyvWK3XNv84LhGrpUJ8u9nZ5hvYwB4Sr1FaBga7fHpMX87JsGFuMVz7N5JZ",
  "key2": "Yw16qLUJLHUfZbf1kwezHRF7ai4CGQqc8N18HmpEXhVydBLGpeipQ5L2ei3M4MTxmEoV5F2CTB8AV3GUBBPSrH6",
  "key3": "3e5KdT14UGDhroVzz6Q7eGajdsUUPaqFvpFgdMvXDxjh4NQB45ybCA5N2XmtXQaMghz587m42B8ZPij84nvePxh1",
  "key4": "3MzWCqDbiVfNUVPbWKJozWpnRVraYPXrqWwh7fz9Yv4PA6maYGuyjBN73tfixzg6Pm2M7ofJjYAHivMnyB34spg6",
  "key5": "4AwDxCjUD27Cj3GCTH8kceJcw7fYHdxkQbZgZHYhvpCByG72haSwW2mr4BtLZnBKpprBt5RaKHMZaTNyvyCsgCbD",
  "key6": "3zdYbbjugV5wzevJPNFfugwowoK9MgNGj9P1HA3kCRqG9sf76Gbp9Tz3UD6VffZxmmZqtuvCdM9qcasTJUGihmXz",
  "key7": "3WoqA8D1FWxjc1xQ9yyW8xa1cPVBcZVyDsecBctDUnkcwk1kdwiMgzKiVLMFrwADHC1ZniwVDGPoWPS3Nrfyth4G",
  "key8": "5bbubURMLr7iUV88qFRYAXCB1kMPqatirh4szncZJGUhjrEDTqsdUMaxJoAmbHZQ5wbTfnqfDw9TmvjUebJaLUd5",
  "key9": "3pDe2HPmas7BxBWsFAPyVrxTfh5Q2nvc25Vfd2nVzTeivrFyXruw2QCwHraNnQDUq9dWWjg9DnE9xSS9ukcqnZEZ",
  "key10": "5kBuqVkWcv5JhGj4cD2WVi2pPu1KpvRLqM6d7N7KSPXfhzfMptvqCuLdWYdYSFWnKwKJEfD8nR2VhiuPpMzvcEZL",
  "key11": "5YHZJCGDir9B372DyzHCsjK6TjU32YowVhPhjBdzGHSw4pLxjW8H8Y5Mubsfz51YBPqRqjgxPEJgt3axtMUF3MLA",
  "key12": "2eoj9XBqmLdC3r9KKgUQMhdcfi25waHmGSxk1iLkUnXRj5QjBdcYz5kwa5k4SYxTvYeUMcPaouXCFySfXE3sNvz9",
  "key13": "4YYTrT1rXTna9Le1KV545zqWLPzogmhV3Uj1eAbAfhLincFjdFQZfDJNmYFqv9qyKSmBLQBqpEk1FvbsXWLdMgF8",
  "key14": "4dPPmoFuaNARHXXw4nGZVkPU54unKRTBnEkqQsSkLTKNCvoLqqXbkQFfVcxBUJQrhhQpgYC9LoeeS4Jz4ujXY6LA",
  "key15": "PEYC8QRpfo5u7srUniAt78QRsUqYjEERq9iAWjm2YVnLBauHq5BoyvnFtmf2y5fuGWHT4YP1s74NiCKZX4fXvVG",
  "key16": "3dS1b8oLfE7jqSBD7rpRBn6ZUHzAD9JFwiDWQuYz9Tq5mvx6ua7hQsEJVygN6Tfba5zFVh7MEdbycQ3rTeshsv7u",
  "key17": "Y7HZjz5boCdAXasXoKYgNSmtbMchd2PiLsHJGDv4pSXqaAoJkcBEDRJgxUzTSfFiaWHq2HcjjTf1HJJU9PMdAc3",
  "key18": "4iUfSUmFv8raYikXn7LyV6NeVbYtrPYfnfXV9PuVasbc1DPfirgbhyz48nrn3CxWv4fZPecKdW82UwiBU4K98BRj",
  "key19": "5VLBbjJGhCyKwPT7sp35VmmnWqVE9mf3u5iUhB9aHLhXgriw8gu77DkgrhH2wthMasPeaQ1a4o5ugwj62U2Pj9kG",
  "key20": "4vB6mWwsokzLreM2wpE9k5EJaPXrT1uTBw6JAW8DWkjA2WMWggDcKah4bb6pygwMUHvL7BUj9kaKkabYxM1zkm8e",
  "key21": "56ZrW9zj3YsokuvsdC7JdkhuHJ6SZvYmqNEHrAVU9BgAJwMYmSMx6NyJty1M64nRFNMQf5Ssz8rSPzgV7TCUkhpN",
  "key22": "3VzB6evMzU95P7gDouNEpBGj1qfmEEZxmd4mo7o2s9yXQVp3guQQGpXb3c9x2wtzAux63cgrdbpvzFkPnyEh91d2",
  "key23": "5EKjU6YCo7nDnDZ2AqCMLzPxMU1uZavtKjZRLNLyftfR1GTzGm3XoLjS8fCEhKGQ4AqdsP2buH2N3U1NfvrFRKHd",
  "key24": "2dmoMrW7Hjc5Rr9rBPntNYi2g2AZoERV1jFvHz37EikNTBxCEKDUjtdE7yVaWXsNat1zaFoYwbQ8uYo9pN6c1ZJp",
  "key25": "3RZFvDQ2DUbJAGuCaXgDVeCfpVSKJsNy14Drr5TqsLdAKer6XqTT4cc3LcNBKgJ2t91zosPd1ziqJszPqhgwhkEs",
  "key26": "2Hj4VR3E2XunqzWA4ciCcqCthpDLUibKh3CPAVEq1XmBYUc2ZoDm2mLhrkKDcHVDKHQZqfbHwMwLnvcrMKimURen",
  "key27": "3tJtdN8CWeC5boEBS7R4avwSRWHryMiw3eznf2e4aMCyA1wzWjfAHHVxz35cmuMJbu6JK66yqK8fqkoj53k9bsrm",
  "key28": "4wXUAH8PfWbjuajCFurC9eHjSWzc1WJSeZnLYpD2w4cJGp4DS4w2SBKUd5v2yyQVV8AF9wp2MzuBTCP1m6fUBgap",
  "key29": "4oLxSsBzm6gVUsLhoP9KLm1PL1bTk5Y5eD4j8s2PnTKUqbkHH1Tybuy6MTWjBYshUcXWPZQPh6oLn7sSDVrwSLwR",
  "key30": "5z9nraNwEZM2oSbTwcMaxgQJvRBf6obVdfsvHeRqVFcLhyVDY4k32ctkLFTQDyqmsc9rUzuXZpqmzVWNfpKmQdzf",
  "key31": "4E2JoVKwjqPinJtn8iBtDiBw6Nk17weMz16V9o9Rn5FQ7KSgPe3vc5BMQ9KWe2GR1ZBM8Nte4vVgNCQ4cR2Zgbds",
  "key32": "5U35h9n4mHMFEK27G8CJqMvRY9qDcSUz937CHJk3saYhcmQ3GbnqsHWAYgfZeRC6skHWD5D9g1Mx7jpa7F2YBGpJ",
  "key33": "5Nm2wdRwToHUm1aWuXnVWFxCnLKemzPDtdkCyU15XyNviwSbmr3Dy8aZG39KDMDgrdyTufQe2juUzhCyUduD8Yza",
  "key34": "Wmf95Y9FLVTKMspwiV7xh4gAFdLvH8oxacND9JdvPWN2acaGQ9V8N3gxrDnWydSMMN1CjUhdVZLgrxn7WcB5fBW",
  "key35": "yS2d8TTBurRY57qxHjeyPu3gVPkkJz7iqWG7SQxzie1VvT6Msioyoy4ebZuUrSo3vKW8y39MCvLmsqn8L4aughw",
  "key36": "3GLGDDhm8Hc8FSpSjZjDit8yR749fxZ5Qmi8cMHfZLqPC99uoT2efzBJZqtj7P6kwRNq5mckRkpdwM2eQrTgn5xQ",
  "key37": "62vrXSu4ryhWSb1wc9PVAX386Gk7MWgo3UXVycyurxEhUDVwhzaSnqXkC4PdM3SpTFwoDadzmnvQeWV61BUt26PP",
  "key38": "2wCB53J4tgBnaKBnB8tT4NbvZUZKpv6TdNKF4R4JvZfFhTUp11nByAVSibzXAceJudGmSBytdU6DZFvdvjM3tJYc",
  "key39": "5ws4gBpTpEp7PsaMXcuT4JFtn8ULL4isubwQUNQX1kNW9dLuEBgwS92PXuUJxneJDcfzPHQPWGiGVyXYzhv1oUdx",
  "key40": "4nbu9qxKsMhVs2sh1MRx19poCZhdruZ5fJAU2jRtY4j5pnjeUcyjzZCA74cbTjdD9t8uh2hptdmuFUqqC1pUHfnP",
  "key41": "2XWbmV52xHGnsZniS8fTZiUuoLQpwaDdNbFWYUfPMqgdgSWDGfsofvunFvjg5YtcfnkmfJdH95NDcJvzTrqz4cj5",
  "key42": "66X5M5GBq16sgeEEkTiTMQonioupjaP7VxPiWvhNF7uLHTm9wTFyFk2nuTUXu3rdAn2Ggm2WX46SLfSxqXdbZJRE",
  "key43": "JPUHFVWmMPjbRmC3PSNM7RoCpWrt8eiMDwA2wdr3QPqc6VoPZPvDtedHmtRs9XZa2rZEoN9Nc9sjbfcuK6VtbG6",
  "key44": "SAUBigxauHpJUqaZRosDT9PQKqqgdkJSst65U7meBtRJLiq5bmaYSnsn3Hf84UrW3AdvNLGsUyBc3rrftQqU28a",
  "key45": "2CQE4DmuhaJCzBm3NBk1vMduUhvC7Q597Y1MLVSEcaJiwfG1qp5yX2C3dYf9uTW92p9QJ5L1Nd27VzoJDMor9HYz",
  "key46": "5k4BSyjBRcrJVb7wp7PdDEti9ZWpthUPRREoM3KvuzLhBEzqwBoxnRFxNVKv2aLXzABsZkQF68a1f2be6J2pPXQD",
  "key47": "59TqShwbk6CeBp2uh9hXSs3oieR6rsRSUZLQBJx2vPnebfM2PZWzrqycjMpG2WckWFrv5VEdiRRVQzBbCV9cP58f",
  "key48": "5ZzwFKQCyPLo4d16osYJ5RBgBYH4v2fcYTjSvEDJtWnJbot2bAsB98CNn5vtJwzWoF3UzNjRcm8nGkbhFKFfAT9X"
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
