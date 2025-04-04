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
    "5ztY4jwGJUTTyyjwkegMC1jxAhLgtx6ght9GiVpg2ndjWjy7JqKNVz2tu9Kn6PvSkBoqYkb7hkMCFmW9uyoC9Z2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uxQmS6xi6iCtdPavmAEc9TN2XNtkn7A8yhsQmsyzC4QD4anbAjbj2tRuKh4UDWb5qausgNyWN95Bi3PZYSNq9if",
  "key1": "3WTqN5PvVJJk5C99WKroG1DpRTyLBvXxjBxQLs1eJTQbvQuZ1NVGKvGP3D4qcXZJ6ZQNJPfen2nEiy8t25qyoTwj",
  "key2": "NC7JzKkRDVZbni8DCZTZ6LxTHQcrLT9wwbu5Ts65QeJhsfH3BoHTWPRHoNXRgCEpsng5SUDs943FZrVgTHESoau",
  "key3": "4Atj5o34nHd5oo3Gj8dd5pHxLkpNBqZJCn5zwanhTdafGjzudq5AwC6daHD3xQHDzvnLCpdEB54zV2xmy5meCM6g",
  "key4": "5HvD6K2CixHsqfwFFEcCjSZW8jpSnW6yHWGYdRzLV5v7xmcLBqAWq3kARqQ43uZfhx6cTCCqhnWGCrxBW3JPVYxU",
  "key5": "5n7cKKbyTey2Tbndg653wsSRnn8LTKWYdSTr3cATosgCjFE1H5evJ6hLwnLkYKk7HsAwFJouKnmQZAG6t2fzjbTc",
  "key6": "2PUZVLdX7zceJ4wBZngX6tHdxE86qb1SFsfM5kpuMnDcR2Sz2HN6kYqgHDppXPsEWsJALytiLKCanmuQgeJ8gyBz",
  "key7": "casj2qygxDDPeQrHTaVThwNvevzLbXhindvzqdd8gHdZx1C8KFeEF5nvtxY2LfwXgtceRSwUmd4arcL7Nim1aBG",
  "key8": "2pwfMcWwYMSVrLnycUXaHFdyNpv1FxBv6tSfQ2QjEpz73D7chpLChciPTzeGi9eyz8CT1Q5Fp1yW9TCZErvDND6k",
  "key9": "42Bk6hFh7Cd4KJRavGr2jD3mFXcS5TKYMfu2cuJDit4ih2iS31qWqMcE2G3SZkcFq6s4ZsKaRYferqdDRueYxMVJ",
  "key10": "5ZUD3FMMA9fxTL2MFiWwGNBdDcKXEMyKoeKd7xyvsRScs2JVG3xf66XtC1WXjLtz2Y3Fdr1faqj1U3K6BhZGDZJv",
  "key11": "jdK4v2XA73NaLtJGb7z1TJCruz8SKikMtcuk5ZqPvAZh81FRQkzJWt1QMgNgXDhBuvCv45LCos3pgFkhcKQg2ES",
  "key12": "4Xc7i1BHqih1Veu4PunX99DNFMsdxroRWzeGqx6j2Y7gVCzJBJ1EKtKk3FTujk65VvUL7mY1piRLnRz1yyCFwTFf",
  "key13": "3K9HoxWdCzgjHYVViaPL2UCETCrLX3ZTjjtTcc3Y7oKCAGMtKoDoZZph8yWR6bv9S5xZsMoX8w9ueisxgjkn5TG4",
  "key14": "5EkewJJr4oQntmvg7VreRWaywqNVi8uoD6AUUQsd1ibsSBLaGedfGvBXtMnzq4m23UJdMaGkchUwosDHVHhH5Syy",
  "key15": "3msHvQVtABLizjoPYvdjQrzS8VVAojKorMZTHhTMyCk8JES4EMfAGxb7QDREXxPCiXtmkQw3CXMV4xFWhAT6Ljsq",
  "key16": "2KX8pT8D9UQxigpZ6b5D44CPqN8MNxCBLA8Gc1VZAmTApNnZ6akf9Q1KXTrg6imdT5eynjcabeBmQxJckm2zksGv",
  "key17": "4S5m9ppRqRUZZAuCQJnrxxcvDVYPd1dBGYupZXgBPnsWygVcM5CFGX4FiFJRAUoWyMruZMnfPS3PtyCbAyJoCRTC",
  "key18": "2RzHm7jzBANf9SzH6FWboUAzvdZB1N2taZF5dYQ9Gs24YCNphCai197Wryex7ELTQXeSE7mkJ2SbH575dgvcSrMc",
  "key19": "48H2fw5bfr8hPJhsFywMyxjhHmdUFEM3wXD4dAW3UpK9Z2DX1uV5cCmy98hc549jLqwm9ah4sVesXA5X9ihBW56Q",
  "key20": "4wuxbB7oSdovA1QwJ6DkDUDdkSMQJcdnhKAMauN1PryUWMjHNZjw34LqAX5SsVzQoZdfUxAZvo5EsmoXgoi6g8ie",
  "key21": "4PBoWTKru6BGfqANkkmDmyZHotc2mrBF1v9DgDrxUqeAgP9PxKo2eKnoHe5xJXd9jKLgxRn26kCubQpttpnAYNmF",
  "key22": "3gdXJ9vvBH2FBZDfNCQmWCTa7istVm6TRiLaDZQoQ8fLhhMiDdSwhMngHDdXG74LWfRpvoxcP8ogQWQWxf3iFABR",
  "key23": "zygk2DjFmSooKnH1uQTQMSWJiiHqE8AnQgrjCrM6wit5dsgAcXZJ9Yqdf94F6JnjRW2F8KT1N449YzQSUh5bkjx",
  "key24": "5NUZii7f39pSDCjXi5aJF8hy1zjsWWQ68ggqALP8cCqgGpyND9itG1L2wU3kGckTxo4BZEvZg6iFcsYRU2LQspHR"
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
