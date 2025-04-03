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
    "3txTVQHSL1KRnyq7p4GXZMb1VUDVH1exAiPydsRxw3PXjmhDhaEmAAf3pYRuVXea1rXYAvbMh4hWmHzWEvuixL8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8N1DnjGL93uLunx6np1a1TijGyZthGagBuUHJt7imCx8EnUArjUmutLWbxV2pbpRLyapeBrnNEZRyie3nwk2eP",
  "key1": "dPxMrhEFs9Dtw5Rt2mfbru5UQp5RpUpTN5xArb1v8mo7Tb3M6y3VDY2TyAf7j2bQuSUCvaoGJPrDHq1qNGzS7ND",
  "key2": "zdu26mXXz5twmc2Fh9dThufufPWZR2rrrjWiPEQPD4GYJSdzCff5i8XUmEKzSYAmf2cUw8Gfvy7bapEqz7pw4N5",
  "key3": "5ajvzGWKNp886gSZWWuBewjQE7C5xfWcr3dyXkgVXniBJabMS3QeDiq1BGiQ5m1YN2eM3Btu4N6Q1wCEy6p4ooVK",
  "key4": "4muWpDA2XnU3JMjg3EWsfKK1ZvPDkmuTYUN4z6cX4kGr4N9Jd1zwGME1opCzGTSPd7DjhyAPMKArVjihxbjNp9hJ",
  "key5": "A7Fn7CDmxWt1AG7h26JfGWg3J3z7s5q1YCwwkXhyHEeRweNx8MBYyAXt96w5LZm4PUiZPYmVTsrdULtNgrBtTGS",
  "key6": "2x1aoxAVRNFpP7eqkvzkn2eHjMeHTEZsWKv6DCSAqhm69cBGac84GVe8dZYDRMzA6hfqFj7aHMMrMQcmpHX2Dp5g",
  "key7": "5An6GCHRuHesjFoNfwfZURMRwjDLMFgeYkHFttT7ke7imFJDFRmV6XUm43fzMakodW4KagCBqYjHvLsYoHTEN33H",
  "key8": "51mDQ64cyCWMUyZsdUyn6op8CeFx3CYcEp29uEoknm3zXjMBPwkGJ5h4yyBPbFZV9B2ZrKW21edEjaCdmbPF5vyg",
  "key9": "si1fUVMEAmtN65UpKgDnAFeWis1kX9V8DWUE9HvMwkyHZFEuo5kTLt49FVV6KNmN6CPXeXCs2keRKw29YNAg3B9",
  "key10": "t74rYyy88EkWgMwVkCJzmmjyFrhyh3tXY782v3yJWunfwtaeCQqK2c4zM4UmKSDAoPe78DB4WHb2JREM2HTUyGN",
  "key11": "2H975uBtN3ibmoSsTrpteKw8dhS3NxGA7eEXtUW4gLbZtcN51sSNBtm872DWPJqgdhQc1vrC9PrftZ4NRK3KpBTv",
  "key12": "362Quwbdka4FzMzzjqkmYhtPy2LqKSjwH8VGCeFt1cFTNXVKkBQZMx6tA4qsCijCyp4WA3PxVU8ej3Qq37MgXhEq",
  "key13": "3HGCzaMfuUJW4oVWZQccjTjbzdhKgki77qEdyxvZZiXQaUwSoCBq4xYGU3DnmtvgjGMGfZjB66TE1bJksGkWqKv6",
  "key14": "4hHCnyuTnTsuw29b2CNeef95RwSepsLR7zxbck66RPvRKW25ie4ykMCr1XMxHX9yWo8svQd3RvRv5eDNyWhLjwAq",
  "key15": "3PNSUVq7f8hUUXFPp6KKnL6bkMCLs2Mp2pm8qmQHyQepYioR3xZPFPns66iRGKhBTr3qaLEdhXfpAUqvfWUrJCtW",
  "key16": "5vr5NkTebCVrfwVpD2sKMpWAamxqfvQvScycviNKj7XNLmvNqB631uDPinYHdNNun4B6NK557FNuX3yT3irF9sh",
  "key17": "3DqM6chyMkfWaTBrGH5d5PXZBWQ5dunJwbZazMs2cxXQceEgU2LwULjpigqFKQtNCCTV7kNALMvrbR9knrEpU5Z3",
  "key18": "mzndUN9JZzMF6Mr9ywasxXn6Nk4LAas89ddnZuvZ7b4Eh2fnkDSA1mwoJM9FmEKmtXAop4PM4wKp31tg17xFWiT",
  "key19": "4cxmwcnRCwgJyZL521C3dG6mNoXrDaL3CqhXAZ7CsanY4pXh5bNd5WJ4yfoWeyf9UkSTVd16EgKQXo8zeuTtYNyq",
  "key20": "5CWwfWm9oHf7eJmAJmKn1ARiG6hhPhEASwCdUALYYxMdRM2uha73V8Lk5zCrdyjXUXixq5o3mcSqT1WdrQBtKXrv",
  "key21": "4hEjaP9eHWVMnaDCRMiMhdZJdAnzUgawL9A2v9XTPmdqQH69Wa3mRS3ez1gLwcPJtn8ay7ydqPUPVKtQZCmTjo7s",
  "key22": "2x4foeP6PRwznFqaKDNrRQA49J6rZXtp2oRWoM36evUqieRfhgPbsrhvE9xmGznRyyQwVNHepVp3NteqxqVLMAWm",
  "key23": "3Ze3awDZ5Aumia3b57onPViJY7NxE7mrF5qJdGRRyeMEZtXcXAz7cMuefJyyfKGvUncWyh4mxwM76pboRrHVHZb5",
  "key24": "3nhZWKuAVyaZ5Vx2yms641RjE1JFoA2VvGUkq6FgaLCJGV3WWmtSYrpCXeinL9JqsXSkvDEJPEaFHYNYbUv2o5Yc",
  "key25": "2JxrjwcywexdRxkQgcUfJaVhiUF46UK1kpieHZYBheWPz7U49FuuMhZVKL9eGgemp6MJqF6kwavxDBU5jqRbxfmj",
  "key26": "25Cu7XBrdBtLgmn3vRssy3EDGiBdvuS4tmsdTXujRUhDBpLuVv6BKKtVvrCLTrBtY4LDf7rE51ubDRygsBKgP89i",
  "key27": "3mHc3iUgDzdSQ4r4778hF2subLK659hsqDJ9t2ecgaL891WdgCLbDcqhESEtCyuwF9DM4DCnR9nPbYyJBAp2ksMA"
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
