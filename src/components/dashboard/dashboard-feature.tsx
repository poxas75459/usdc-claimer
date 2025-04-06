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
    "2cAxHb2LZfq6rt2uqbvFx8XqRf2VF6g7o9A2QM8p4LQQEZ8o87WFmG2UE5egwz7KXKuTdYCRtkhqWCeeZoKJ46o2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mVXKc3ZRRrwokdo8ct9GocuxNB7jVY4aoBPvamPf9qhn14LXJ7E3rqTFJ73wAm8QDk8eu7LroWejMBa5Bw6uiN2",
  "key1": "3fPswp3LmS8osoQBLSDwcnFQqiGB3wzwfFX56WdTj5NYk8jS3AE2XT2JLqKsUWzmUmfnSC2GTaRaHWhZGgeTV62s",
  "key2": "kfJrq5i8J9VWrYAoxedAY8Md12t6RGG3qGgTSX1KPggJ46KNz3gzZpWjEa6oHqdf6PsLuGJy4QQAuS8rg2dQ1An",
  "key3": "2k7SWg5bz8D7GiHewt63rTvopRFQ98UkauM9YKoK8RVfU5vbhjVtvjNBio4eRLJLLG3pLaDv4KZAKBRTA9Le6fJX",
  "key4": "y4aDk228hdiZvJ8QnS1bYNkAR6i6SjonTYtareXjoJw48Py3UitDWXjpXmTLAUrdY5CRymj3x9vsr7ZGNVMoCwH",
  "key5": "2JMDv6AyAEUfVLNo8dzitpZxuTGpkREWrzUQrVT9coGZiXAvBbuVFWf1LbpYEzoLGDxjD4Uc3e76J6H7ay3Kybqf",
  "key6": "64sTfqYtVoYCi8H9J6P21BArXPKkDevDUUMFedSdW2B4BcLR4mHiQMw2oZUMMwoKAaRGEAeyA3xxk9MhwQA7TMrm",
  "key7": "5n3psmEUQhgUm2rFdNzvxZs3sUFmkoW5r1yCX1K8szaupZhUsd1v29GsYLo6b7ynsKAwCGHgrLHyq6VgxR26v7J6",
  "key8": "3uK4e9W7JmrDivvQczPos5Rump6hSnZk4aMVu9obRXqxXEmcKLDbJBkhEGCBreAnXY6ZSvQyn9GfXLfEEnb3WmsU",
  "key9": "2eZAEcxRpUrz4NqadYPCUidSvxaSRdoTdtK5MFgRephs9Xdcu6aw11yo5fGHD1Dp6gozCjJQ8kLUy75hGeLBykNc",
  "key10": "637ggmUifgLxfHNEvyagj3DAp4DNFJ4odDieePjN1SwB8RhydRmfp2Y67YCawBj9889hYEyxVmimh8L8FT3haVhk",
  "key11": "2JuYS7imjcfxur8j6aLfBNnVxAuBMPy4M2pzHox6wwgjWaG72d6mrH3Ky9ktev4kyPsSQwKzM6yR3HcpYHP1TUKN",
  "key12": "3aDHdSXB1KCGFDp7yMtPQAL7xGzHWHArF8UqPhJo2xd7FyVRxLiAwLnorixUs5HvKFrtpYfTDTmpv7PtnH2e94G2",
  "key13": "omSjHpdUEXUVaHAE6pR81HG6kz1aCmViaNtwmZtfLaa9MS45woTmtBUnnhJW8toJ6TGG4qETudefwD9pRA34oxR",
  "key14": "ePiemgPXRWVUivequiYozZ8xzqVYp8Y7tqbSvjw9HQBXBg2GQussHq21sV9ZYj9YHY2umwyR2zVM2SegFcX7ZYQ",
  "key15": "3cemqZ2jq8nPxKYPPs2FWsu9yf4cAecGtPnVySSZQfkm7gabvSk5F2dT22vU9EuocT8pfqEKP2PwKgUQRDha2VRt",
  "key16": "29rn5GvqBqQWujrQ1zZsmJJDGv6HqfLvtxaiUkDLJbbLbWrQ1k9LHrzPCD68NdtJmmeQS1K79NJnxENDCwndH39q",
  "key17": "2eQjU86Dy1YDPGwX7fLpyk2B9ZurgwGDtoYinVGGUGzCozbvaJJebAZ4fFWT3pi3EuL5RUsZvokQh7YS8vaxemiP",
  "key18": "4baQ3vwKo1hnx48MiVa5DLwEBopLSHR7KSscwFZ2neFfMHpThrD9xHyggMWh14y2sugcb37rP4c91sxJDZgaZ9BA",
  "key19": "MMHRx5rga3buBNUhFJmC2BbXJiC8Jath8n8sEW69r1ziFMFBZxeqx7kBYKEZxC9DSFSRHc6LLCC2xdTbCb9DzLE",
  "key20": "2aChvVnHCvfkyvxg1FSwXPC2zf8L92CRdYAEgVNHMVEycWaqgBddDcBmcCbMNrH8wviFamuaURx1CeqCwVpHpCH3",
  "key21": "5iApfeNhQpZbTnmoQYcHyuvtZzqf2Lz9Bh4B8rYcBJWq5NW1rwnfYXbmw6Mxgn4V2LMBvE7Qm8MS5fBGSzH4nXF3",
  "key22": "2kq3EJn2sZVu8eERHB9DbFEpDoGBtRrfQoscxZ4aE3CQ5qJaHdFpviyyxPMT9UPa7F6nYUr93Y6dytDBz4JDb8sq",
  "key23": "5yB2DXnyXZiAaqT4thNLREzhPbkwSrEPdpVmTSWi9DwW6unyjPkC3GUDYZN65z7kmNC775YNVNdGQzEpDruL4x1U",
  "key24": "pUU54mkfwYdcyNGkp5YvRsmJMvyFe81f3dFMawE9szucm5QZUbrgWr3wXtqETQmreywsj6ishRo7vF3y5RKxJAW",
  "key25": "4KgRNwSMzcJyM1DKYhdvjUUPebQCMAnJjJC8haJoLULRLcBmk9kdcTPGBdK3rNyextyisrEMUwsPuAoDVNdqTe8o",
  "key26": "5gHJZ9J3XWUzVFZZpKnvfN4pCBWU21k4ttKGUK6psh8wW6NQdWJNBM12TQHxwLP661jsJr9bhdDX5EB65BVCUQom",
  "key27": "62LriKWjkSmLXFXekUpvBqhYxLmixE7C3fk3NThywA17iyeyAbpSVDv7ctjTuqYG3LmACqCtVN9mRr68HYxM8GQ",
  "key28": "2H3UDFs3WpDD7Fr2TN1yJWvRfJTTeLMHXeY4pxs42xXjwuB1x79NVc8RmJWxvmcthicjBZcNEHUoWYmpqyguYnA1",
  "key29": "41fTAPA24uQJrvk9bpRX4e5A6k1uVv4fevesm2tBybswBAPFSopsoimfVYcRAJe1DLAUbn3T9VADi2HNDk5FEezS",
  "key30": "38NZG1K9LZgS8ndPDBf1UtTPJqKwYz3z5599EAd4xqM65HBmEX4qHx9XhXABgecmiU4twAd4EKCsmise4tTMZ7SX",
  "key31": "5c48tQ5pYeF8wZs4unPLj7f4MiRofV1YUmYBYbm8q3SEy1VCrFxmhmCWbcoa2rym734T9VTX9Mxtd9N2FSDjfLQB",
  "key32": "2kz12bKw7Wyczvyi3aXFUFJrpTmtjprySFbR96y4Ltcpfaf2mauS9ozEZnnXqokvvRhgELZa5kegjD8ngDh8wNUQ",
  "key33": "xciBHPx3ssvaGGiVwTJ5mRPPpxVhazPztA8ZnnCj4Hrwx784Tpsoa22bZJ2zFJhD8yQ5D9Dq36wsgXtriV9yKtJ",
  "key34": "1hsLPAKb67kXt2WQWtEUstDnJjY6sC4X7iGKoHF7N9Wv1SLQyJ7JQsq9r4wLWBvMBNvf11bW2JXEVLzHSdTZ8yX",
  "key35": "5LBP1GxRzRLJThKFvEATQcFj4wZojQJpvRonm7dCXmy5d7boDrEpxCs7s89GpCw41NNvUm3XxZ49TcZdtHUeubCy",
  "key36": "5LMYeCiQnaedx2MPvrg6MwLyyPQnbMs2YL193EbwyRBn5DgGDZh7cuERAF6ppcpbVaPPHNV6vXhkYwGjEYLGEH7T",
  "key37": "67a4MaVAZ8gvUrTGcDjNirG8CdvwgmFrzhgdzCoMrFxdb5urYYRrsPBsFf8p4wnExX7WtsvdnmM1BN8oXe6oFMHB",
  "key38": "2SW3zHgjsTmaRWHN3CRDUeabD8oKMiq7Tgx2pwvmpBB53adeGZ6t1zeGuimDLjFjptyqrK437cfdu3jhmNnpLdw6",
  "key39": "4GCue3LTNmvaq8i1Lxk7w3AR2Vofayo1dvefTXp6zurfvigKqUGm4yXHHo8jXbaPNrrmJz8ZVBRaGMQpD9FteaWz",
  "key40": "2hhCHqzHwCaHTV99TRig9sA3qUokGk5y2bZPR7WZ9SV1pRGQFD3yoCLKbrYxjJ8oeDnp3cshLahvQAeWxnHVcQ8n"
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
