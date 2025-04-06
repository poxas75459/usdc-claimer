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
    "32YwCYD6iXzoLpHpTEWdspAdWffMFt16HFeWUv6U9EZqYYTWnuNkhQNfH3EuZT8Y1RwvHNp7b47sP58ZpAKjeQWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sGnyyEm6aG37d1myGoeEtQA94FzRFeiamD9F2afwQhjdV7sWsSZxUd95RG2jtRvmR8A8Wh8jy6PJHWG3i64DtZa",
  "key1": "4c5dutKxBt8G2jEAEcjw4v7tadbDjFCLKrrFTv4Gfg5LJvdSudh4MkYgCoToSmiejoCdZqzuShy34CtDW8Wmy6QR",
  "key2": "AM1R2LnESNf2434WbEhQkq7HQSwBxPUmTvA2DmVdvWXyouJ3MmKnDdK5XwmnqMg7EHCiiWxW3ngGDtETtKwWeAz",
  "key3": "gDDXuBbP58HqbtiGCHGKrWZw9LMfxXJF1AkiJMTKCpPGcHsDCoi7W8q5BDWcXbEbDvtQNjcxJLmtA6HjDPzvYXX",
  "key4": "3vb912481RejjjwRxifRMEGxZDCSohKWde9cn4Xjva1bFmCR6bM1jB73r5J7tviD634ryNJy7urQtMsoAKVezedt",
  "key5": "WFoCqPB7emiVuEV39WwEZPFcEGcPHJtQL3fnN72u3bdsat8u2yQez2xtMQUPRwSgSQ3xvLtCWy4DimfaymSdgG9",
  "key6": "3snHEXCeniXCHF379G49y6xaMUV7ULjcR5ihnqzpzE2ZDuUKDnxhiNfjqyN27k7iw1qrMQ29GdLtoQ9WqsFEaf8U",
  "key7": "53NLdxbwkMfsizSMaPCbmTg5FpiZYkXr5PmFpLW1e5Re2ekTDZCww1c2jXbUyz79b2StsWsebpFQb7DGgii1F7g2",
  "key8": "49kGvjXyQ9cH4w4AoE7FwRrVMdcx2uFrvwNNjBXJWWwVKE7LqCjjobjvrSnU6w81rMVQViz8udd7bZuFCgSfeWia",
  "key9": "4XQgsrFkoyJZxr5HYS1dnw9VV5CyCsupyuqSsqAgX5E3EaWWLEV731yT6aKMYzkuidmxjbzWUbZDhAnNuSjt1RXu",
  "key10": "4fA3TYtMvAyg4f3deSvo41nm8f3FvbocEGRF1kuaKAWGXyUrGi3CMsm1NzSZqmZAZWX7v6sQSUyhRiejHkkWMz2y",
  "key11": "5etqwxeeFwLRMc1QXvQHHve9rMouFXKrdV7NF8Bxh2dLVREh53mxMjGnK6eP1m5jmAT72Z4xMrwfizWDnNno6khQ",
  "key12": "2Xckemzyag6FJDBzMXcUsfCYhHk75e2FGMmndJX6Ng5Qjn7gQS74fQJPA8skQtbdCkLwKPPEVzRiD1NSZipq6Xzu",
  "key13": "5hVaW2K1SzegDvj7t74KWuo9G4RGYy7Lp2kfE1CgiS6sJd9U5exHFDaegu7ayCHF9Gh5sQwKnSEiRJb4xn3oBHAn",
  "key14": "3tNFdc8KxerUXYgWq7ibChSQYJtwGRV7Eg4SmmMCUR8HNpgNUTTmojy9ckjwMH6aVUspNy5iDP5jThahs47xhohm",
  "key15": "2aaegeSJMJpCE1bprN2Mf4vmFdcsH93FEKeMfQ3u9LwgpREBmeXBzxvBxGSyberQtMs3ThjD8DhC4pfDyT4H1QJQ",
  "key16": "2eSWLGFE2AndUTsT5KXquzHnpTSp45R5JqZKvsgfbn6JV74nFcyLWHZszgDmHfpD63j39PtyLsKe8vtP9xMznqiZ",
  "key17": "3bAzyTi9Jnrmx8RPGyfw8rKDciNqZayPTwbND2a8J5LuZpLpjUeJKZiksMWpWrXX1ChCMVYLb9tWDJUZmE9koJZA",
  "key18": "2XuStPrsTSXtqJUYmk6xTdHgugfU23XXSMCyzbAyqwUFruQ28PbGStuTwscQdkeENYKGioBVtn3bYTgEcMe9ffdj",
  "key19": "Riq22EkQcLKqrUj1K5GdikJfESto7UshyXD416TdeRY8sPEoWMRbW4QxTJxqDGLDSpeB4Q6Z7dwEpQveEZfxvn3",
  "key20": "4bRG4tBMNSRJZY615fjS5ZGhQdwmotq9rgsfiwrrYQ1dHrBoe1xtwY6srRswPh6DcqT1KaY67Fbww5AKkW6SsjXu",
  "key21": "576DgrEFGgy4x9SkCzj9BTNtPtmXqvn747eQ617wtDLCpSY2YPPG7aXPxE3otKBTes5NftxyKL6KNpYLgLFKoa4Y",
  "key22": "4mn2bNc1a9ET3FNhumehJcUceJTdXAmAMimeL1y3dB9oyYcR3pGJ47GNeEGKejt7R6udPZZaTZbFMEuutzKKaKfk",
  "key23": "5eiwePcL2w7qbnh9p9MfS44qkY4sxqfotXe1Qq1ceDZiKXbE7kKzeurFRkedF2GaydBqGRqLsoyYpnnonjYEpd4L",
  "key24": "3k47ytHPTNsv3ngnsTJ5eY68RVdUhUrXYUbALvujn1JfydxmoQAz9bzdR2Ropectz9GKW22pY8h1j2K32dG4Uiyj",
  "key25": "3xDjHmR7NgLUico13dqiL3xtgXJHX3y6LgNrNmUmicjskXrKN9azU96B79NEMQ6wyH6pLZRe56WQnP6QdrJ3cxCU",
  "key26": "2JuYa3RudXsju3CCCYaVWXL4hunUHCTHezpeUpViRT8GkBNGkQPosHtgFecoQhCdYwKC4CSqJ8ncjkL8XbP39RzY",
  "key27": "3LKenj3pBoLzCNEpuVUvs2VGpbHCwSV59s1syXZF5y2DKWFbh59QbFUxuiWYeXgk3anVTTeKKFADoHQyKr9xH9CC",
  "key28": "5W2FaMLXzytueSeKS2wPqg3v2idhiTzjhYY8bh3aWgm2tFrEguqCbjLwiXMndhDzywdcPoraBNMYyikRLrKyWf2y",
  "key29": "4BYExqAB71LNj6QePfRK47mVUwArPoSd3jPibrhbL4vfYkmNKyExsU3AVU1C8VRF8uoUFsCdA36WWELqiPohjF76",
  "key30": "P4iKG74SjG3RddMbquW9W9JrCPfH3YKpTTLwEnTrb3B6twNuFoUH2n5sZHT1DyEuNpoUDC4ohsm7Wtwe1J7iDfh",
  "key31": "64W48GP6gMKw3KAp8BemX1s6D7ofzrLosCuKjxfcmfQHW2vhhgxG5Zp1YM1yMJCax9C3omibs7pcd6ARyr1yknxC",
  "key32": "enRcVuM1AqxvvtbtMcAPrh52ZLsNUUwYa8NT7QrY4GD9pkNPMZFtGyWmJ8VUW7Xk94sud9Zt1yJDFcS4f1XtpXS"
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
