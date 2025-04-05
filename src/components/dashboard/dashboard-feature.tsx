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
    "3G6vhmFM6dmdFTcShsU8m9N3yxrUaHYxMnJBbs44yhomYvtjw7uHcnW1No6FW9EER1z5kdgyhtUFwAekYV1VeXuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Qu3YNLjxhpvXrytk6g3kQBS2wppo2iA2i3tmxmgaybTaArPy1KuAcSSCuWo4a7fV5h3LqudFdhUFoVf1NiknfQ",
  "key1": "5jAFV83k5Kad3W18WaAfrzHe4mymmjqowJDqMJtWuugc46hFLV4bYvqs6nN6GD1B9UiEgoZJMuybTPikb8KQnbTG",
  "key2": "JT2CwtceHW7UNq1FR8PaTHHeYjadY5F8H3LY9hQ2NSXFqMdp1mCFp8k11ZvVAX8ZurVngKxhARKJBhmsDsULhYB",
  "key3": "2LUmTXDxFpkvTT2DdGAUEvhSKx788aPsEAJPq78FjkfuPiGRYUbQKt1iScwi8yunS29pJqrFSUaptXxXzHBqHbW4",
  "key4": "WcpE9VhZW9YDHMwqp5N8tbtYbgViep1TkUYJD6FzGFSSjXF7o6cZ5ErSi7QVxcpmNRUyD5yq1jfUbKV6qNgqPre",
  "key5": "67c1vvCUCXekD5tUMtU6eQ9oMaEv3iHRLx5kzxZtpYx1HzbnvytwQfmAca3XWDgUMQN12sEZ8axBDmUivuR6oQr5",
  "key6": "Vx6KFLsCRcEocrvtyGocD8oL3EADMhJWniSRjBzVK4pTeGfaVVbThoNKHY9xg7DJW8yVgXSPtr97JnocacLqJiW",
  "key7": "kAQ2KNJQF3hiftMzRsEpX8P7pvZVr2pahSRQMdLqB4XEyszJodeaPMQ3BJzt2iHTN8G3Lm7VodMWvKSfsTTVRvP",
  "key8": "5PCUF97FutgAk8S9EpNTnJMVb658gbvDVJwZ3mwfYngiJF3E77LhuJtyA2JLQNLBDmxJbxUCZpZ2BG9wqoo258CC",
  "key9": "3XtbWrs55jSgTWYn9gB2KNJazfVV57wmiCmVh8wMRj4ofJBHP3mJQS3yittrEKchuN18AnYGxz5RmDEapumGkftc",
  "key10": "5JgTFsHwBsgd8Z7LKwzVumXwiD8cM7FtE5Wpt8LTnwGgxyCdEVSny2mT5ouhc8qA5csJFbws3iRM8xietpBWoRdS",
  "key11": "3uQMb4XR3q3nt2m52Fp2DPA96feg3KnTTtTa9u9d5ySiXtT1PdRRKWkiUUQATAKsKK67XpKbFbqBTJUzVrP7Pexu",
  "key12": "3Nb2PiU1EWucoVfEEJFCsxMuA4WXQXJUs86sDirY6Urei9DcggiYaWP6KBmWnxbNoce1eroAoYRbFhBT1EGtAtp1",
  "key13": "2oERv4V3hYqSpPpfJanHqxbcVx2Am4bgbYkJ8xpMD4NhC9tLo97jj71TwQyYBGYt45LXpamqAA8LeMTCfn11cxMw",
  "key14": "3i2eKZtVyQNJcgRwFTpMQq76WRLL6csb5XyVbQz5VW3CZCwMDnuMFrqPSk3uXGaoxzYbUJ6qzFhpTBNgPVvwhzpY",
  "key15": "3Rq2q9SJXFH1sQFqbgCWStqJNsULg7WjnbfAa6An8VJ7MEovq8CJaqLRQn23ztsAdB78Rbqjri7UpZ588LUFSEaL",
  "key16": "53M97Y7YK3ae5nEVTQQt6EPqtum2Eef8a1giNRSeWNSJQjBCwdxwg2UEKyGZquJCLCmQuZDgnGET2whEshDVrU3r",
  "key17": "43JyByqFQNkhshi5TGjgfeBm77JQ3GSGhxgDWnee2SMDixNpnovED8XX6qGYkT1QxWjbxL3reXgBqNE4rtrijx2U",
  "key18": "2e8wvXXkaQroshRWSjaQQbLH3AoAcYsGBPuZcUGZasgWngXr23kD1HP18TBCjbUP65hMcShW43fj8W4MPErgbFsS",
  "key19": "4xjRseGKWAxD8Bca7xmcHf1kDMvaWiqQgQFuHJXWVQwQy6UfD1VVLqKFdHrDiLx1gX7QszPtzf72FtPLFiCsCJcy",
  "key20": "5NbDagqHaPNoo4SPajTY8vu1hoRDWE6DJawwDDMoGUT4LGbUJTQaw1H4fRvHUVaMpp1vVsj5kAkKkkPD8xDFXxpw",
  "key21": "6Cg7D2nZtbbFjXpry75xjnq66FgK2PaEGqfkfrSa4VDDBbC1JjwcXDpSVEz1yHUfuV7CDNPFZ5T7uxoWZEGi2gK",
  "key22": "2ViYsUch7aexcdqmbbvtJvkphajoFV154Jnvdk9BqeE8jpfyynxCTjb8L3kc6NWYJMrLnArCd4sGmVazGPWrRpq7",
  "key23": "FRtMdMgMARxrp6dydf4GQf1DoxDaA7CVp63qtGdJ9NEWbP8V68mzLf8RNNksDWG5WFg9gQUDvUC3upmPgqJasmJ",
  "key24": "2ros6yZi1Q3xxSZ2gaU5UQG1HuYFociLnaFJXyWrDFUKYoSmRnwNenAeCcWCU69rDE3JMoZUCBHzzDpCtcLpCrG5",
  "key25": "5xacSnRkKB9N59KZHe9DdhghX5bDqmFufJgNoMfG79FabmiigJX3uuRuSwxvD9BXdTJt5wfG2Az3Mfmruz6ghLv1",
  "key26": "2dofsfzxD7pjJAaBsJgRk5DFiW8Tn4q9wDpHDvpAdqw9Xh2pjAawpZSJeB3wmgMLL6JLAA65GvxCtkqnngiLczBC",
  "key27": "5ECFmnZ2v58UkjNGuvNrgU54wKekV1wZ7vQT1EJfBK8sa4tKw56M2bhaFtrMGYjKw9PvaVKjTe4mUsYPFFTqJpvy",
  "key28": "5tHmfpFb18V4ripysT95KCi4jmzpGiUGTQbHzsa2EzeT7Xos6c8P8NCDtiqKN11ABHhy5gWY5NMAtZZXpmBTvYVb",
  "key29": "3GmLCAVxutu8HhpYAXJBFaUN3aFwtG2sZqX4NhxjDFyesUe8P63XBTLJ6x721gCD3AL5jiNMAGki5G9SLmnYAZPj",
  "key30": "jKRUyy5aw78gCd815gKFBRsfNrv1eKnUPzKc6bpwprZ2iQMj1ozhkwDaZTMbiuRJo8hjyW8rAX4CBPpJBg37p5c",
  "key31": "3R2P1W8QGJe5RqGUt1UzvVKApvRVYkSpSacEqaWgyRfMHZge6FJJLpDmFgsMWHFwwNgnhgYj5bE3KHWiKBtfrhp9",
  "key32": "X4sayeBsGhTJcpv8gDiXPZWRQb5hcZGNFJ5EKqZ3CYBcvzCeu3jLeoRNgaMqV7hFD33UXj9ADxjzTuRtSnET2BL",
  "key33": "3pjqkff1MKiJ49jWVtJ43mo9jUVQi7pKZGtB276QJno5J4FfGCmXc66hQ8SmgKVS9Z8howxSiBRb7AHjuqKgGjfA",
  "key34": "3hYyk4Ciby22pA5F3ZjVBC2DKS1wBepijJcJsmYSaksT8Eb3wb1Un4WcL8b9TYj4vuZFAMQYttN94yEFRHgdWwv8",
  "key35": "4amUFuYqJQhZeCzPa8ZK3bMDf8KVL4L3m9BFhyf4BSDPxgYh8z2rY4C5eaxPvxnRB6Z4GqBhADiSAGLedYJ4BqVe",
  "key36": "yzMuyeDSHBmcoz49J8ohuar4x4KF8q1VcQ9GECWjuTtdpc2jXQ9buKYHxrNMsL5TCCiomHp1eCkRynbyMx5rk7h",
  "key37": "4yxWn9MpPBnX6qSLmBbQvk7UtyHLsjziApzErf8LDno8z6bb4E771JpYewM6CKp6DnSLBGxz7BzDSLbnLFcUtna8",
  "key38": "nXYpbEmhp4EY1qxV9XEzF1Js4bPheAXr4f45FizKZTTiCXDzpQGwpqBjKDcTfwy4wGMGHkACgKFLfx37zndsihW",
  "key39": "PeJaMzGCWrC9MsP3Kc9kw6uQHdZ61HRf1GBSZKtP6znjp6md4CEoVvbjCziuT5HKJdHC3wvwftfvwuRjdxn5tJN"
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
