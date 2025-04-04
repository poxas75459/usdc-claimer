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
    "29LaBhv21Aej5aGmoGBc2FsrcupdvgEbL9TTbTPCXLYLyfwVtEQ2YNUU44vuZvQG3aJqjF8H2RCusoWgXKf5cJAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uk47W6C4b9deRzdBF9eWj3amJwQZPQmqz399VSycHM5JJtBTgkusjZ94KU7DCqqu71tgXFztYt8yV6An7BRrSoS",
  "key1": "DU9grbwVpZcHvsJggS35XVzjMxnmBTt7WRrKBZwLrAch4nRtU8EyLNEVf11UQ9QZ59ppWxfpe3GhkJkxnphiwvt",
  "key2": "362kgTKHC1Vdi9iGdgwZd7mUwZtinLC4c6y4m8nhk9ewTHSRUJ7sGsFBU2Ki29vCddDu84KBGH81xfpzZRvXUShP",
  "key3": "g2N6G9P7erEW7MvmzuBU4rhf5M565h98wPjpmBCnXH8gCWkcjuS4VWmKgBFbRpJ5KknAHKcdY9KdKhQnhwRo5U3",
  "key4": "3ifvTQrjZ23m2wrsJx9Uvj7or6mRzAgswW12VQ8ekGHbeEF2A37MuqJWUnx9GqeJ3XKqq3SRKxUwmDxJfj7HxTsT",
  "key5": "3bGPgdQEkwTavNcf9fdyvUG2orRxh9DUHTH1XPM3BoSQs83W7ASR9kuBeTLkvqYfJRqDsqU1kuxWyvYC7GkMfBz6",
  "key6": "3azzTRfzHvhUU1tAE21K5GeVH8nKPENTg4aGfERC3SmuL9wCZHb839rmZmy49oNHcudx4MatcgngiZiopQvxiSVn",
  "key7": "2hpkcR9zfyKKJczDp9fNQCCio6fZNH4q74ydnohZWSi1wzkuXhbMa7VX6aUjkh7wAVh9Sg5sF95kWmHKbKKxy1Rh",
  "key8": "7nxhD5UN7WmkjqwoNAq1rrc5dUPYNg6LEm8yGUjRkv8U3Jp3TX2BPWAg3bQDCduJBuNfkWMRpB7otaijdQdtook",
  "key9": "3WvopRV35Liq6REsyFkmiWKVnZFwMcuUZn7zyKNSwUqp7wCuh5rTGTk3ApMBGkKM65sW11XKwCJBamHcMdmoZkuy",
  "key10": "62ZrMPFcd6FGftrxm5aqdSehBMhfaPu1ywqMr4mVLdLoeX7tYQUBHmZCva6e57E1fxPfiyMHPfAk6pZVDBHCAuru",
  "key11": "LEuaFeVCLit4JvRsA85gjuWY8pgTkehEyd5CVnf3MmxgaspM6GPdUgY9se1hiBPu6j4vC2thpbSZevv3nyJBn9F",
  "key12": "3YoyJhiXUjNNuHXBbDZyEWuTcBEd5fEwHryptWgvn7bJ6uWeAg1KUEGUZppMJghC6bceVeij6WeY9dzCLGuxrErb",
  "key13": "3uVMVzkdxsAqjsENmT2K4a8vwjXfHaT4yYT5MhZ1xhcwrSKbLuYHPm2yoZXV3R1nQ7n2yyoLq7JRcDqvAB9ebevi",
  "key14": "2DFuqwAUQAXL8DtDGreC8bjUVhARymztuzc4MGPpKsdDQSegiefJgZ45ATos65uaqf9Z5EX51eRqgakU7b6TynAe",
  "key15": "2pkzKyk9RhW366x9Q6kHcE9tW6QUBC874sai25uvK41Xvz6yJF1v1ZA61Zhfm5LYEun6VZQhseRiEqhqnWyniNVg",
  "key16": "ydkUmiiLo4jeg1rkayKj3D1GbVVfSpHJ9GDKeashc2z8EhHmjCUK7PjUjjVTT25egD5knWDRKwZNNEWh2HLuyq2",
  "key17": "63RQ84drxWusCr62VcR6zkpUTkTPrm6nNVacnPLpXx4tBxmWagPrYGhnzL2dechtEMFiK82ZmoKRi8NQyQm74aTu",
  "key18": "3cCsa5TU8qk16o31JwY6ALjS5NkvqZLQuqjr2QhWYGtVG29d9GsK8d497r2RLTsK6o7ikCASWefgA1ZyG3586QZa",
  "key19": "2mzgxDSzzS2imLmT8RpT7SqKYwRM21eAuSyiiyPx4neonCKhg89PrthgTSwL5eJg7fkcHgiQhHBpiJSKY9NZyL5b",
  "key20": "63xuou3YrU6dV3vPUsU1dooTPedS9outpjRg8pQh72aZ27YNp4DNaiy3WXyowvd1pLqibZQhgYtDHcG6SXx8GDby",
  "key21": "56R2Fqw9P88dnwFrxsEtF3EfaXjVs6GPK9NFVYV2uEaqjiMfZemKR297isLEQGaycZFXAZBPsMAra2fcQ8dwxW3Z",
  "key22": "3zWFh7WUg3wYPTX7R8pBxgY4EgNJJqzgkT34S6rn7uYju8ZiLdppKzJKpJTuTNN5F7aDUztSgM87J2rMN4FfLXi9",
  "key23": "3UTh8ZYJq77XW5hAbea4AJUH8NJZUwdc1yYDDHrvwc2jzWAtqAhXXLrfvZ6LhRn9JrJ95h759AL2PGwt1ojPNwfe",
  "key24": "EkBZSfKZt9m1LHpjZDQG9WdzhN665NBWm84YemdHxiHBMbvoCThtCrybYjbYZBVzvLqHQ3jDcV4kV3rvF2E1tp9",
  "key25": "fzfbfcGwLmFuDeDudsYr8LcrajjgTCQZuzJeAGztX8dXGa9MhG8bHJgifZXp6rHeKM9jb4kAf3tmHTkqWGWAd7w",
  "key26": "2rgNvAJRtreKMkK9PREBz8EjG6GUuBTcsHJTeepEBCeLKzBLeemmh3qHeZ6ntBA8m5y9mApPbiH4pCSC7nMFwXb1",
  "key27": "tS3kiPdbiEHJpdJcbk5P2GnK8zn7ygWKYXcViYaF1CCktuJLJJesWejWNGhE4YnBnQZTM7uq5RrTfD7LKWzrQf4",
  "key28": "3BqEWG7WCgS2VjuBy2aJn9PbwW3n3dTAHiy3dgvyRhUR8tQSfW2emCoHD6zogC2jGWKjnQGNvNagdnkyfT1TekH",
  "key29": "8TubAEGGGSQ8NBrVX2sXzmkw7KaZsZ3ESC88mt46asMkpuHYaCeYqnPrp7gBAVqHAJ1XRicDof83VnzogfqvAX8",
  "key30": "3eu3DZTw2eYrBh1vV32huuko4ECjXbQ9wvQyC2ege2w9M7ZxeCkabzLgdiUAYzj4x15im2HBVAcHyRUxwwfazfu5",
  "key31": "5QSYiPrhEY8bxJ6pztsnCMFrjSSmUFk4Wv7aEsLSJGPMF3JoByBr5ckfqAb3KMEHFr88BmVHwaRefDpz8CNiFhNz",
  "key32": "tGS9LnSxyrzuEqpLxDtpZkGoJpTAfUiWAZFyE5Ku2Wv1MmDRDwwB4Gh2QybzPUvxBELgepvAxDqGKKBwSCAvBoL",
  "key33": "2neCgRXmZChA6aP7L8bXgQUffVKUNoFgMof63QTdpqjZy6uUbx1DxwGiqqPSdfR4vEgW3eskVX3NtZXz78FZZjR",
  "key34": "sakBgctM4jfnZCh9tZkckWVHhrF52MSHrLDBcWFib3JrEnwLcNFSaNqD2YHc2gQQyb1s1zpg2v348x8TuQ6eAix",
  "key35": "5xVsHDHcv3xYvnWd934Lu7khBNLTuQKu8UkBT1xwFxfWGQsLmvgodBUMdsQWvKLsGiYANGfsrh9m5yAGDf2zf6Sz",
  "key36": "2VCSTFU5BaxkpvVDgSn4DpCkQDDWtsBAY3sW4FdqweSAMdP2V69z1AYPeWYEzbhqzXUJBk73ZZ7r1UvkhyidmQzs",
  "key37": "4itL9EiaSME3RiFQFWhu1YStQrkYomnFPJWXJADZX3anvg35K1YhsyNnLjD63QFf8ysKTF2F99tEBjkbaxXJk5Dy",
  "key38": "4GZSkeYR44BccXHHkjiaBZ1dnjdJbj4W7CtRef93njNMjMjx8xmvVFHqWmBk14nWz8ewRyxCbbrAhvWk2CccPZRF",
  "key39": "2xG3ioaiYq7CByrKVrTJXbcaGBVwpHSRurM3rVfnPQNqYmEUEwJnEJMf3LUcd5XqZNfNMZaFrx46rFbk5fZbzeSL",
  "key40": "4eUxYVfVA3ZAtpwvewgJpLrQ648hRbSMgFdWx375Q3CR5UVSKBPWoj5jbLJ3dW3AQZYm2B2RfENEvHbcuL7REfie",
  "key41": "ddYvas8vEjCdjrtVyfK6miCkYMDsgtuNNc1SM32ho3q5bvchGvHmY4CJFCEkoF5JhqiAZtp3Fa3DX4qLEmpSDHN",
  "key42": "TCynYzfgRLddEe9NuxobbLfJWSsuKbfSz3p41RuWTSHbuSPkcXRcW1NF6A5NAATbgMEhxMgDui5GqkmozXxKCUo",
  "key43": "39i4uxSeAg2tvZCTyekUSqStYuW7z6zEn23RJVew8vJSTWRgS8MH71Ed38CVHDrjw9GNr8dMtGuAgZVFspHiFzCW",
  "key44": "3Ttv1WP4gy5ZpyCBMpodpYKEsd5zpPLnggKTAFZmA7EezP1cKNMuoHDQes7tuz8iAfWvbFMCuMZnsaoBNXum4g1B"
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
