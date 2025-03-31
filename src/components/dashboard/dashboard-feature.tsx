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
    "2hUTMGtW5NdWGZooZmmYFLxNXLwFQ1CDthXuiAe7RfG5omkh1K3htkKy6mgvN1DamyZrAdhR9Kcf4KAAQFuSiEft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kipa8fnpEV5Ctq68YEGzQ29a8JK5izv7JGFXZEjGF3ycmpoeNjF58e1iJtD156d6WcT2wqqn9pnjVJXG5JQLtHi",
  "key1": "2VnVU9tZmXSfUzSeT5DqdWeLMmCvACp5H5fHbW8NaDT5GAFw4furp9en3pDuV6K6uizQ3T5LhP7L28y4rtiDYz9B",
  "key2": "3anzzQWUXVJGio6hDGYNMfrQVKgxNDC1XQyyz4qXsEeavphZHYR2wTXPbV8wHm7xS769fmobiEjvTvsd5kU531u2",
  "key3": "4KNjN97atYQ4u4Kco8hiUQXxQyynsgSgH7QxXLKX3gJJ2Wc9VSCNCsgt25HcxoAaAXSkKFZa9FhUK8BKhrkteDLo",
  "key4": "2L1ukNTdAQKupEFMRWY4ipcKGCTowUvyJTYkc6n8sVzU8yG73MnzqmUaB17i3TuXet6QdYvua6zDa5zrZc2osbfq",
  "key5": "W8fxv1wxpDHqpiXFbU8ZCtq24sM9W5yE4MkQAir7Qwr2cBCWjBqKGyBqx7AyTSwRnRhjzpoAGTnWg3mnegNNBHK",
  "key6": "3KgfiDV5wBzo9Z5vbpQHg7LrScgWb57cptwN7czfJCE6R8wvVyrnGAnfdu84Hxsi5VcBzbNcTKHn1fYzWd5Xc8cF",
  "key7": "56Rfbi2m2iDU93XPLrL6SpSnrb7Q28AUAgWjfBpTZQ8Xb1Zq5wzdEGxfC32prrnRkvpu3p7H9syg6WCFhkmrrn1T",
  "key8": "3VcDoiUom4QT51TrU3WCFG8etCwBRn4WfChx6pVUZhPNbTkQuDE9Wz273KwvB5uKGC3skTBBX522S345BcroJFzm",
  "key9": "2bFALydW7TU7zPDxRC5PxkHUtqTWFatdRvcXoAooGsGhnfNpCT1XpuxK83xXYcPabS4Yu4SY1VEyVPkrMKqYhbuJ",
  "key10": "5XsKW4gXSwEmtXYPnhPKceqZmeqEwdGQUKbEpa7mu5yQacuRfeuZYicDjKgXtyg5Qnma18kXqKWicv5VwgsStuML",
  "key11": "2c2HqCGcikUSEb3GjkkVfq8q6Ec7Dm993YviXdq8aKRuFRwjZ9QY4s1dwGkB28btRDdiD5PVbR68dYkhGgQcpUuV",
  "key12": "3vWVqe1Zgyg5fqRCoESHSCV9ii3eeyWgPRJVwuiyAN44kyyVGKH9BkmNRDUV9u55AM165qnoFwfJ417UiLFnzZ73",
  "key13": "4bnKywXdy2d1rKo2mFMPzWu8y9sY6CuLqJxtTayRAU564MdxhgPq53bStWwZim5VGiBqPkKmNJ4McLVbCqLhPX2D",
  "key14": "4NnH3PERnRsBcXA1VAZfiTsPAaKQWoMbemgwVf1uek2ouN5jg1RhqRkzWe1VZy27rZAQ4UMhLHHupeJHpQSXUYqh",
  "key15": "EHKZwDSuidYu4A8FyoLhgqygRp2zbwphYVk8VYTWREiAxEGrhMere4j74rNiqKsSCVwyWzWGdHqcrFPhT4xVedh",
  "key16": "2j9eByzRTqUs2bZQFyGBhWZdV3CZMtZ7efSu2qK15YxDwWXyEmJn4dY6LsNvJLwrvDc5auGCcL1ZuDM1roWH28Gx",
  "key17": "3GtFCWbB1cerUtDKgoBBP9fibEc8VriX9wrU2Q4HGZ1iLWRTZMk7ZtC9ZZ8qB2eWpELHdkrpuQz3RT8sHrpQ1BU5",
  "key18": "zQYtbDmDMK7uD2GEaKLpY87k6dsEkQV1WZFH69tSYzbTAsTLqTJyD97SFRaGvuk5VwMLAKdkr3uEx6VXSTCt2hy",
  "key19": "2uEGXgpLVkEFchPNQ85QkjEa9NGVoF6aJq2hvyS6yqZYiiAnWSGAm9TNfNqewZKtk2PEa8YwphRPn9fxPMEQ9QVb",
  "key20": "5yAbXJ3pTbMv6QUmGac2ZaXU8K7hihjkAqXhCtE5nG4X1jeuuXwPRWoYuo9oQirWB8Te5Xq7LvKhs69Tdxk2XoH6",
  "key21": "2TSPCw8VDZxgn2Wfh7cU1Ryf6uFEB37YhFvozwybVCZbwLG14Su4DZrPAcjehZ4ZGKYCJqee75AsjsGhx3psUiB",
  "key22": "3coGnQA2mToM2cV825Wg8szgfnxhg1aVjqkXGsBdJ5ZVn4fLcfh67TWkdieq99kFBfGJWLEWvKtW9YAXbfKZuHTK",
  "key23": "dKQFuTgwZfghUHjJ3rMuYMSHrJaUuJ4bd8r8uxH4fuqxQzc5XzqYU8v6Wyrd1bPV38YKAjfFvUYm8h15fdCkJAa",
  "key24": "2EQDfKYkYhqcYvP62eu8RQZK6KHF2VZHeZHAuCAG4hAShhYUSoDWAJsxH5uc7Bt8QausYzR9qHQrXr1p9AMHMHyJ",
  "key25": "3gW8vRzuigAhi3hiqsWW4PaFuFmJcHcHhm9Uirkh5o2KRFELfVeXGJR8ovmXMhkC55tMsCmYXkiTr1MMNg1t9mWM",
  "key26": "4BGt54W4M8222RxbCBmaixB3HQvzqCfUX8feu1PoFXzPM7PYneuvR75y9kbUHKwkXkp3RavUtdsE2vpHbvsEdUu7",
  "key27": "gRER7E3pTHB2E5uydpq4QUe5tyzAWv1c3ySL6QstEEugqVFPuVsdYjhQ4t1SmQsvYp4y36RKyh6c1h1shLed5gw",
  "key28": "2dhWCNXf4gL9ajaTwNLNGmVWJcPXPJ7eV4BpaYwemu9YwEkDX9H3LEZDK4d4hQjNV6KzEWc4Z2YD1YFSKHL6xK8J",
  "key29": "WuVM1GK8tTPZ9HwgNBvwBALiYVX6BUE6ksC1wbUHZzk2waR6gGcvQkcKtwfFbfDmskX7Bp1dyxhrJtxmp2KB3jx",
  "key30": "s9aqPMADe3pNHzTDartptqG3Wvhw3d3um1X6x7QLJoYXcd16dghS7Z72y13s3HqbPHiFth3Y16e2PGtziuKp8yR",
  "key31": "5cJz4LYJNjngUJr3t4ZsLLsYdHx1W5PTm86x8fiuR8DeR8DoP2UU9NHD45wMNouhoDDEkNAnFtqj6aXZsuHE1Y3b",
  "key32": "55g8zR5W82MbRgNjeRSoAzUTxehC67YyR4Pja17prnJ1QBE9G7HJVCDf6odNsSmGRoakiDvF6xsQ1tbgy5uH3RfN",
  "key33": "2RcNUFasPTf7avxTsrMzKYZogpM3Bf15WrGG5eqNH9hK9YMaGPZDLfxuXH5cYpENEtiQuXJqed5dU7Q9BEPM3nC1",
  "key34": "51j9mDFy3NcvQH3GcNt2nAhMEGfCFFqHkLKtLJtJETdLwTsHY17xrMAxLYCKoCL7uU8miA1rA8DD1gdFTSAFeCYD",
  "key35": "3cRah6nT88G98gwhGSJQcpJ4yDg7spPSqcUc13YE6stdAU7LpyZg7Vp5YKCyesYogSXSCQKW1qZwRoyBiyMGtwPP",
  "key36": "2soqghPUSZ39b5QPzVGc6k34W1oqFe5DiACgxK25Q1FeR5wexYoqicUopVw3cGR1dPVmqx6PkgMbFghUVXk7izrW",
  "key37": "5xaTWcb7ucuJeaeFyBdbRF8F8k9byRPkY9rHADceuuZjiTVDtTP3RaqfE1rAkrHCsPZLL3DdenBctDi5Rz89YoCp",
  "key38": "5VUpQZY2BniwnAL4D3NVzqZf2xtDweXZjYJXXiA3ieuYx6ZHZQW2s6HqhYx5wfG5DiWRq2KUAYy5LqpQJ7ACkwaV",
  "key39": "6pDRT49BYGie8uSwNZfUNZxPX4mogZDAbtT8bMpKL9x4zPcPktVJjMDaF3S5qDVrJxgueXP5uQmj5QfD2phawMh"
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
