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
    "zg98qW4VfATKEw1tWWpoLoSaK2r7oP8pyffQUCuEhKbsmvJqiDCFFmKVvH8hiBBzb3m49srXmD3kU6YxwhfkgLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MrmqsFQ2JERGRLfpxh1TBGTFpQPaRDyjKfvFVo4Cw993nXpToxF8vXCqpyb8tkEJ6GXcXThySzErqmquMS37u9c",
  "key1": "MzVegj88Sze3Eosf9r9z3grhFouQABnZk3YjqVRdkZnE7KAzCzKra4P6zJXm596JJgCdidksoop1NMQZsf2o69P",
  "key2": "4AkHNjXEWc15ET5e5uiHJ6tC9Ahq53GJ5uMMkEPU5DY4B5WDJZBQBcPyYxHx5x7Jeocr9iusFdMwEQDbeZmLJiR3",
  "key3": "57qqyviQqdxo3tPXP1nirpBe2gEX3hiyDHqoQtVWSiKGJWaAY8wGYGHn4kH8GCHYoZhuG1x1w5aUy96i3XvYdEj7",
  "key4": "eZK6Sw4WvBS5tqi894oWmAVQiUAaEQRrJ8FBQ9QThpwumvQ5VVTzkg7LCSuZX3FuyD9RjeUrBk2CSq5yhkoNG6Z",
  "key5": "CmbW1f1Dz9c79ypwx8QcW2vuBwZKdjAMXDPSPmmxbVRYqNYZwmsGP1D6MQ4uCXm6mbCFhFPVzVss3zTEpktQfjK",
  "key6": "3WdejBDWrbEtYcQ1c9YxALopx2i2828yiiz6WsBDvZwK95ZQaieju1CiPCNyMD3ErcnuPydhFa96g9NJdh7Bgmvo",
  "key7": "3emm3QRbqphXmDFTQVgUuUxQw5DEZwLSRgV2FPiCGpQuJVhpJsigXcoBFVF8rtANBYp7a8F7H6wPo5cehPgDB8Da",
  "key8": "huosERzt6D1BVdNq78iSthGQB9e2qyGPgnF9oJ7C8YeR9cyq9eoRjxyMrMiwmLD2bVdH1hxzo6AiFS6DY6qwmNt",
  "key9": "3HcvcaKKALW7boF1SfjCVLDFZG3fJv6xayJ1bCmbEXWzAhgQbYADrfK9QCXZ4m6Qdi4pZAafXTKnGnxDgfZfyRzc",
  "key10": "3RuSMCjbkZWfMcf57rYMvBJEJhB4dzmvUv9C2o74dVqB5fQ34KtaAnk9wuWjTNefAogcvJTzoDPTP98yiDggeGtv",
  "key11": "4MtuGptEJarqKzFYMWQyNbswk65nXA559PDiRkddD67TioUQw1AWi7xoRBS5hWta54nvtXtb3FVRUaHe13w3WTT6",
  "key12": "5NqoKTU5XRLkYMwiAvnVhzhUR9HzxDxYmeytx2dJ6zDnoyeszvTWn5kXgfu3B5hCE1rFi55ErxpWQpsaw4oiPSuo",
  "key13": "2raZsKKPSrYRzC4HQaLxbTdKLF9oCg2rMRkJbwYe5qhFEkVC8GFyZFZo9Z9yiVZwHTFDJNBDpFAVkN2V37ehuo5D",
  "key14": "4qianeTn4bbDZ8dyiUodML461pUKB4wuoraomTCwuqMYXzadG9rRFdBFBTsXnpwWqpFdq5o9Pm2CiPEtX3vi3fPJ",
  "key15": "2kNN3f8ySnevHPcMLaVh8TMP933BrLHJafaLBusBtap1aPbQYpM1Q7A2zdtLcC75Ffy2wJ2GPx8BSMHEuh7orGgx",
  "key16": "3c7mugFBmHzyNfzgRhvsPZvtKPcpfRg5Z67B2UsLFTDkkxBnYbWLq618DKeA38Z4kDdnP85MMZ65wctw83YtnboS",
  "key17": "2qyA7RwwjCjADK49JBnfBo6Tmo3Vb7fEwEcVATrCwW3ZTdRGRYfYELB9AVztaXmgtcgTg369JMYjjH6Fidr28qd7",
  "key18": "5iY5BteqXyvzhpnKj63yRyhY428cdvN919X52BRzJ8mt2qRRmkxd771jhH5va8z3TMv8QGB4wd9WU2328hL7nWyH",
  "key19": "2ob2ytx8X75b2XEjfNeCWapYsDRFRoQ9XZzCVVDTqyZSFktf3hSkZwxJK6vduhzekT99g25hrNghDb3aBqM2RH1R",
  "key20": "zLhoyPSvPCpYJdtygd6BEJHG2sGr2UZNwMuqkvD2jBcAYdaobzsnPwC9H4dJ73nhFUmLGFfX2YNGcBmHVAeds4w",
  "key21": "365eNC2njExRUHWCLHb1dqn7yt5jYLQuk77NhmKNScLYXgDjupHNEixWDayt9a6cmUdrH2K3hn8xFVZHeBoyrsDt",
  "key22": "5HH1bZeCWUhfAwWamCSowB8DGTNH5TLy4Nk36mfPbXBPsSyiswACp9HJUgWTvqL3AtiBeSAGCVTSc9sqREuXZKpt",
  "key23": "2E5NXxgpGe6DuifuGGtR4F9xKJ5j9Ne7iPbqL9coc628xbYvSoZ4gQvGHM2ViGqoKLkW9xvjjy2vGhkySVyX7x5",
  "key24": "345GQETqkH4PZWizc4T4ym4XHvV5zj6DsDKPPdgGueFpXr5s9dYiUmK5TLu12pydnT5zYfusaPW7BsNtG9WnEKkJ",
  "key25": "5h1VURQFvbqSHNgeYzWpCoVm5tnfD9eoQEQmifd3XZANJJLiJwkgWWvTJaDR3ofirMq8Kxd7UEJ7GxXBqfA9x6sA",
  "key26": "67NacX6fij2nwQzhZUuc2uDw9YHrifDZdQvA1va2PDLoHwBJLYYtSVPb3Vb2uv1ZS5Pzpz6BhaqafQeXbU3mUNn6",
  "key27": "2X26qjcKPPRmEihBn3qYzVFLNVRbMH4MPYieYTHgVuYg6XM2dpHRQTim6gEysx2eegqsWmEJkH7GBnsDdZkE9SrK",
  "key28": "4YejQYQdhCyLRUtwmwFAMwFiw27rCf8rB57LDJe8XZLhcs3UJF1iVhKmJjZ2KEKtC147hPnyJPn5cTUpLgMBy86P",
  "key29": "2tNN3Qzir5faYpeeR59wpNptVuuTDptyFSSpdpdsXPic7jAeA2DRM915F7sYKCc14QCShL8YfRdTi3fb3T7bX2EU",
  "key30": "44UcZEZccEWKpCSuppRhBE33VbxgmhYenTVPf9tPQ6KqfeXSneTo5HhmmnzTfBoMUf5aa2B3C1DT74TCrxYchu6t",
  "key31": "4NFTfFWiyr275sLdpeAUSxKjk4Uscp1582x3vpZPnzS2tBbWoMDjsLJioLRXnJTDVm19VJUpPThzuiGNxdo3S6nT",
  "key32": "5aY6F7gqcPxLXddQiPFqUJhJumRobVA4wVPWPJg6B8zkb5VFWfxAFrGWvRhK3ivwFhH2QojYKFCY43g3VsJi2yUd",
  "key33": "MBwiLCzRUTq1AppzTRC8yHMQmokNg8KLB1tfgGyr6LHhjNTpd2ygLF8oqiC7upMSSUR5iBjf35HqCaJLhsfu2xP",
  "key34": "3D4TzecvLi24f4EbtrkiDK7Zgwo3ckFp8Co7DSmpvwRtFRucdKJKhX3PjT8CrWFkEWxznojfU9BtM7TDTaHR3odT",
  "key35": "27P4p2BxUTbZnjpb6caCs51KxhADBrRRzRm4uBiPpqq9NyG89BE2rLXXrVJCX3m1hFqnUSCPmQYpVnSENfsmw6SM",
  "key36": "2dXchCFTtrKtznnb5HT3nempfPy94iwnjk3S8nBceBbFhh7Ay9rkL6vHViebTtgvHYSddELrq8tTvz2ii3CdNYYB",
  "key37": "4fhws8pZx5BS6mweW5Xgv1Uq937FNgw3EiK92cLFbFGSoQ3cMFc8hLaqHmJm21Lk6ze3tsgQeVhbMv4wyZWL61Hi",
  "key38": "2bMta2BSUoLLGREwAU4VuwDNJcyoxLfp16oty1fxcSF5modNNWXKipd28yJgZ1LK2zv3N83D14dgFJjw5LgEJYki",
  "key39": "3WBmMLxoco1sgSxKG7D1MEXsmyxrHUMZC6TGKa7kt8unQX49rhfnYDax1RrXW8HWnvGvNLLRZWuGxevYe2XpQr37",
  "key40": "5Yj3BvskSKp3Fg5cwy3cGScp3SBrVhCMfMyWURGGzS1vL6NRwieRAbZ81ywvqq1T7kr1xcU2gkunoecvdmadZJmf",
  "key41": "68NeEdzsJGB929YupbqJ4E929F3yLJ27wa6pNS47EVwZoZNJcMKy5w4w5XcAidvLxgtKqZpyrjMuNGzFUPrmEkZ"
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
