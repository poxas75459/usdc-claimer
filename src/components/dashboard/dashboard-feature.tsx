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
    "sEM9P2Fabjc7p3E2Tcuy3HYcnbs4XbCpgGzTDgpYjnmoC64WZo2D9yEnHWsfRVcrwMCpVZaVjSginxLSoU6UHhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ubKXHJFSVHWfQzqVAiPKmHvjCcBMQmVJMeowCaWeNiosjXQ1pRLZKiPYXVSzYgu4CUeyxVsDFYdUEDNJBJgQkGj",
  "key1": "5KRmCKqGLQdwDaXQk3nusWmUoBJEntCyLxzQeu6s2ctfjKkK2gAMqYQDKc2rfmWSPtnoJZJqJkAmLbWXzxRk7Cbc",
  "key2": "5MzTxsPHXjv3M8tu6tX2pSWgCcUWDE14pPqpFqDdZeokwJogkZcTh6UcoNetANgGivjgQyKNxifVvRfGCmzqU8jN",
  "key3": "HVRxXaQ42uy3nhzqhpeGssWTRw8ovfzy8inWq3jGN8JymibrMhvuZPtaMFHmrqgrBQsJuYM6ULd2ikEJYPCGy2i",
  "key4": "58axGSVZ8FRo3jzmLAdphhJcQXbNX1VBUEP5d5rw32njXV96UtPKjewdQuUhLCXP5PaY5qqxcSwR8ANNkcwyFqBe",
  "key5": "44UmTJBkqebM8aQ3pHrcEDfzFXv4Jm8zGjCP9e1jZy95uETc7Bc9Hr6DA3Ss3iu6vXSn2vpLRpdmdzhAoR4fevds",
  "key6": "3aqhHNL7LZkap69GzidUzXvyr9cT5sqVNxdaQwLNyTwQqnK197tD5xVDiwGgwi6WpuTZ3v46ypZkfJJmiMEQxLUN",
  "key7": "3Mdgfywf264Fo4HytjPfmmDig8t3PZGUAxXaeJEmPZbLKyXFwSvTE5tBUWsZWWRKjSFTUjBGzR5rLCVUh8ZSGfDA",
  "key8": "5tpQXdrRY82m6vLWY5kuiPaeCNnaVJULBXsxKJEnFdj7gnWqyttGRgNTTezn6Zq82NdWsUjUU7phWCRYvM8yWwkH",
  "key9": "2o7mSYhRMVGTwLMr4tBfn2XgzUNoErugTKoH1vK7xRrpZFvTHuRNkH1ragp1apVhYe3Dp7XXrH8u4TKsT2q1svuN",
  "key10": "bQ7LzfaEhBWi4yiDPqce5Lof3qETgu9qWrw4KgeixRdpCakCxkSXAPts2c76hD8wuFXDgaKuwFF6VcyLxLhCCDh",
  "key11": "5D7QXUbLCvK9C6J6iqiJErJLiEqob7Tus74zpXUBihgRjStCNp6q7toXkygE4UcDcAMDyeA2mixTEJu4Jbxv5QHZ",
  "key12": "5HbkWEaWr6JxGhTofVPQtpT371C8nn8VcuSisBde6grmnPZberpZFgtt6MQ2zJRY3JQu3BrLXoUSGzr3ZURQyoTj",
  "key13": "5WexCb7Sse7zgApUzbFTC9qcaD5PnLcH4jnWcfFpQ2iZg9qsJFMX9QcDMt2YRRzHUymqh4o5TwdogZGjYA5uLcmT",
  "key14": "3mobkofNLEBmzojxuAj8pjtNmUFKW96etjEc6ZStRNdyuENz8dz8bqq4R7JgQuJqvfoU7xzbXDWodJpoPVDyPuP2",
  "key15": "2hvVmzatKxmva6ZstcXZquhT5xYjqAep3gv5UunouMQjHTbTzX2qqCupVqxrk7FreqCyrk3dxa2d3nRD27iBhLro",
  "key16": "61MAxAR7svEa1KoarftMhoUDskuHvjoTsWb2Wp2vvKzSa4z6ydU3upZGSPeeqaASB4Bk5n59o5kVk9oodT7647nU",
  "key17": "2GMoW8ntR8BjKhRCeiU3hR7ZriEUj2xab7GMKV1Lvh44ZYHMNbwFNJjEYrbhgfEK8oY2qTnawDN1uRg45LqMBF8p",
  "key18": "RpXs3Wxg2RGTuj24qw2kto9H98dN7QPiiB5Mm8W55R8CQpnJLSCkew5ZBvECLYZXeZdrMGJeNsqtiM4DqAPgb5K",
  "key19": "5JnW8nJ4roV7QUXAUTDAayCtsKrhRVZKiL1wEurbj1b1k1mKd2K41QXKNnyNjQs3p9gKcJdiDBhVKTuUyNWRjzMJ",
  "key20": "51ZbH6vnQgzicL2c4deXotDAnMJKZNKGXFZVPbHF1pGxWaJTJWHCM6NfVMkJjP3qzk3ovsfoJmbkRsb1b6jL3Vmu",
  "key21": "4BnLHWEKTSstzuLrM3pvCoNC3jbZ6nWhBXB1gzjLdK9u4WUJ2oAxtGgVw7eWGBr1w9PKWc4hXYS4qesq8dXABJ3g",
  "key22": "2gJPtTSjF4VRwJu7y4obSaPeHrvMFXvVqotfHGWVxWsUJKCWujuvFh7rPHNqbFJzxk8TSWEjKFUHpUjMLckGWKu4",
  "key23": "28cbTjL84KY1Ln46tVrYmbV8Ls2Z1hoyqu2v2CxbFaswKodEDXxAiioMDrfB8zhjDgbZhQbxqyM155ZnTGcgKmta",
  "key24": "5QjmCCHgsU7cdtCVf3J6tDD1GbEPD7WemQiKLGU3wpT8JCGti3VPt219YoZ9foPe8TTeJz2z13DJtoqwBhmV1Hzy",
  "key25": "ivwgWkKQRrBqg15ayZV4FqVV64wx6douDDZGbbtTjaerkoLDfC7yXzUhWfef9qcDV8qeZtdm3k7YJL2Uoq8hoQi",
  "key26": "3oHw9hroMQPAnknfXd5PojE6gw6X61QFkkvJxTej1cfr8Ma3a5TxzRxQpqhrHB6ttZDqzoTuHVrLKBCz53iYmXat",
  "key27": "4TSKXbL4QKDG1YH1aMTmSRGAaTmTEjmF5YxT5cDqrwPA7GxAUcJbqA1TziVR6mxxVuBwt28AWhA3xWQVcFCQ8Tr7",
  "key28": "3jJp7NrFqvnAK3YcgV8wBL84uk5J1EvBEDuZxUew5yLUsEMj8FcwWDVBnzYbpinYMNCT8c9XhGTRkWhzbbi72RB8",
  "key29": "2PJi7pBMjhp9nGEHSZSpZukgkPnrf8cBDM2Ls7pzywuRDSeExLfW4iTMq9jk5zz1ugW2eenpqSMvB5HfCQR4KG3u",
  "key30": "2s9t51s7kvtRuzdWHsBw7cjaERspY2euoUjmNtf9tcQobaNoEPiafSJC9euFJQFrjkTzcDaC7skVtPTmHoujetsF"
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
