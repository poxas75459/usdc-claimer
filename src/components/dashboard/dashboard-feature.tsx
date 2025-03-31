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
    "4WH8FKBdxDAtbnN3cBA9yj4W7MYMGwBB8sa5K3V4eVfp6t2GQ4EPhNjvAEzvapgRn7xHj1yuV2jX5hYE7UngzGYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E3dKwurytof6MA95VdUfEUkTRdft1CLKE5j6LnEQwFKUS42JbcZm89dv1KBJHHmg5dNXZMviFvjojqMdX64Ng4m",
  "key1": "iqawNb5ANNWMK113jZAQEGwFyc6dZQ3shPGoCdbtGVC3Lt3FUXuNskMQjx3HgsP28Lp9fMqHd11QFwBUa298heZ",
  "key2": "4uiqZSGVvGmukDdV9ue3PkYNYf6WS8dfxVHjtJDYLegeGAogUbSFHNHPPezkuhdZk4eP2feRPbvavUbiVrJV9ugb",
  "key3": "3AQRvumch8RpUeSrGAm1R4N5EtLCxQcD2Wr3Fj7qJzBuj4pEXT2NBv2gQR3XFfR6V7BaxpSwtQqZxmB1VXB8423q",
  "key4": "4WwSWNs5aLyuLySo5jvGJnj16MkVEoy282LLmogVx1r1PwsfDKLmcqYCcNeJ74z41q7fPnmusmeHok6HXX6DbZjj",
  "key5": "3oP49iwH1afMrMDMqACZcHpGBXLKmkLBRNdk8mnQJdtSTzSUR5LT2wb8tYjk8qgTfDHrNCydhUfpzkhMvF4FspDz",
  "key6": "3htkJ4hSkBbWsGvAuM6wXLU5s32WrxUAo8RN8UmdywKARmyh1jKMHxUUSXyLtKimpGhu8mfkx5nMEpZuWzbC3ti6",
  "key7": "ndba2ouuHPTnVhrDdVDDLCbg9NBJkjkp8oGQfyMk5GTw7scgKxHrYUdyNvaWCCxu88Jr81qj7UxwsB8i2p9fmmf",
  "key8": "64Zb7t9jd8NVQGoi2EnHWeHrq9BkrXc9TGF5fmLTkrPhpxMbPRECnXEpqRqU8eeYms9zUgRRHGjfQ76NQygXtRqh",
  "key9": "2Tc9o3RkfhR6LtpL3FrnvporqqsQYdPNVcj7UGcdGHbu5CRnpNqHanwYMv6CrHZCLAj5At4HGDU9xtqWX7u91pNx",
  "key10": "2K7rKWZ2uwJEbaXhKxJF8MfsV3844qUxNW2UABucKmcSpE8sNX1Yt7hPUFvDbqrTw5QGrQDvzKgeYjt89f7cxCgR",
  "key11": "4zWdg9Sy5d39Dd4yt5dyJBnchWUFbMMRFWFa2w1785V3cHK5edBJoRbnvnzbboB6YdEspNHe7sEsFFHj4U97PYE4",
  "key12": "5KKCgiVg8xCJFKStnUsniAh9329DrU6SndQLMeRckxKJnnXfoYr3MdvstokyoLAKxUZ81yYmMqYjUYyewCk74jBR",
  "key13": "T1UPS6iCTk7vHz2txTMtCg5wtzPbEZdobpobdHdqqV1hmU6MPJP9XTDpAuPANp6qxtB9bTk9PkUQC9dVCu3ii7N",
  "key14": "49Ctqz1KZ5ur9rYWqmAmoBVGvf1Uh8jy9ZNrabDE53kCDvxfn8qE5VFL9MitjcwoSHwQKR8rGR67LVnYF2BS2z4m",
  "key15": "5QDcEipD2LiSAXUcDZipaW3sRNFGzD1iYoS85cbc9KbQqbTAK2rMqbPbuuEnJR5XmUsJnjPLEEYNPnmcaZYLJpoc",
  "key16": "3e8i75wp342m1m9mHmp7Fv2FtCN2J6S8BSovNq2iMdC5abfQ4ZkEH4PM5topaBu6mR58CKEAfPgD23MQs2StqwEM",
  "key17": "3zZF7wgrHGJg5tkXANZev98SnKH5969YEp2JbwsZGAz7gfnVwtoBpnKoTEyE5n7LHhsAAXdiP2RdqW29h6sXnzik",
  "key18": "2EJxkNsgWj3hmPVWzbrNGPWgCAGxxhJ9on3wxzwQa1htUnBinLbpx29MW5o3Ufy6qLmgV3rQkvwWM6WH6T2nCxTv",
  "key19": "ezzxBtiQpQrZAiietugaMgUwUTgW98KvBorJXpEJD1SKs3Pi3dBCLjERuCWjU61pEuaSaiWLoczVqNB3DHVSGnp",
  "key20": "3b1UPgqtkYFa3Ni4LPJY6RNX7J3LNrk1WAbPcDX8A94Z38xuStauwbXfCmyzSi5tGg5Fw83trBYjxzS4RNfNG7A5",
  "key21": "5JMVjt3fjYDASZPpicgfGQcoJq7qni1sE7z79jRLb2Uhj6Zmz6vaYXz8UkZjZJKpGRB2WojXyWjXBnx55QGfrYVd",
  "key22": "4zr9PN8fEzL2MTQzw3WrGqPfS5Zt18CiHqMDK5wz9Yj7yL5xo48rfBd5KYT5MHiuxk8G3jhXF1TYKtJFr1ijVnqR",
  "key23": "3DXVj3nMC7udTJxcusseKU3EnskqfwskWo3J5ToAu2PMZ8rhgQErLLPVw7VFdsXZud775SfNykhc8J4cpvu3t9Gs",
  "key24": "4K51gxgGFtw4PGDciU7x82goxYqqMqyEKh2cQ5ijX83Lbj4QUCiZbHy2oUZDSn4iGwBWAoBskVq2HwqFwHBNAGLL",
  "key25": "3TJ4rTuHTfEUajWqnHybjEBxERbjN69oM2BYaouUMR7cLRTgGHZkMivLFCnyqAhd9Ut1D5ezGRbyCYcrj6KuEC4d",
  "key26": "4gpiRDMu6b5RT3caZxZYwvv7289cRVT8aawBrH5KyCprsnnEpof9g54PmS2gn57az3XErDqTfKhWMzV9tDbio7QX",
  "key27": "5v7Gc644yq6xYmu6683TAHPuDKiMLLpj5jUn3JHxtLx8QCWuYruTXreECCV5BQ8VkzhY4g9uUMq3Ko2agkk9kFXM",
  "key28": "4jcYDuccustWZGULicCAWDLVD9KYmTGNiHH1MtMwwZ4ygQ9c6zWLaWK1eJVgCvFThJpTwm3HjGRZzAvbYQon7PTu",
  "key29": "56YumTN2nBYW3nyQfVbMRFVGdfUhZmrCvzcK6b7m7GRdEWEeurJGJm9Vf6Hts6WfzgX3stuANruVW49zqPRGzEAT",
  "key30": "5AKVa1iR2ZP1ndUvXMmYKUXFNy1s53HX3XGTgGE8Ks2Jp6WsC7b78vbkHHwzTiLm4SLMpF63pPLA5B5pecgpy5pd",
  "key31": "3YEEub9FE1AriiXY4PCALvWobC7GMSPMd8ZTYr5zBKJAPhUpzQPJ6CgUuwGUmLr8G5jmb6iFsWvxWvCmNvkm877o",
  "key32": "CsiFJdz2HKbd5jMEyoXeDWX8sYiF56FPaVoMGf9EBv2pDJ3ZjwS29aJ6qZfY3NhvyaxTeUWx5EpGaFQDELDnoAG",
  "key33": "2ux8a8YhYjLMgbBTnDhqKRVTHNbXrkVGeKjsMZbvX4RiL8Te8j9h4SCu5nDQJSXiP9sB2VYHKh1NwFUP8Utooddg",
  "key34": "kVChFfaBk8s9iJ9bt3BdYAyyvddHyXBcFYSWd7dEg9sAJc8j6LPgC7FWvhqVx37x1tV5Lw33To3pE13rzUfk1pm"
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
