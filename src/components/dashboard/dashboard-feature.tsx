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
    "5qukkzd72BwghF6d1ztJwDvxL8mpR1GD5Eq6Zz22L7dwAbkxUvPQsP3GBdrRuhjJWrarFCUr2z4opouqfZhpGgxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sNTR9u7HmPiW6MGzYSUgv19G7aQAvQk8g8qWwkFAi7kkERkBZerLrwSs6cJRjResxRRnKjBGQTNniNhzF9uXGpp",
  "key1": "58mg1LZw7JAFCr5uLhrAEf1U51bg7Vq2ChbSd1gBsS8dDC5QxiZoAJYMv9KEEMvqta19WXFn5GYHkpt1eB7oib4R",
  "key2": "3hTG3AqxHLLMnFyUBt6JBRYCktqard4mXoqRbVMnmtUQrSpAanrWJpK1dEvnsziRi4GcfSZypYkUa17z3WtZTZcU",
  "key3": "2PAXbXpWEae2FsyN1ABFyTLN2C7bVZ9FGstSPBgPiM2TXnT44UKiLE185EuY65926P4AoHcXP7SueFHMvsLKcitq",
  "key4": "51DbvXQFmNkMC2GGgmxRdKb7c81GvmwYQoS8aGaE3ccUEbLB59Eg4bJ2psw9pZ9NzTNiUSusAbPcSE5dUSRq8XkC",
  "key5": "42qu2dcfy5wBfFLgFYrm8FfWvmzU7YVWxNNdpArNqMokRrHtxb8be851MBdB8ojNxPP353mzGjLWMFPfqDepg8iM",
  "key6": "3nkXJA19DdaMG992kpcjPnXs9KZNR1PVUG6ShGzEbLYqjmm3HqCqxD4cwk5MuhG4SzAYVcejCM1UoN5SY2drRVXB",
  "key7": "3uzrHWnB2tNLjG5tXLBqCyJu8AEfsjiWHvFzXbiBN9BzChCeCQR3p6uZa8vQprECyTbDG8KVPWxntoKnJ58pr5sw",
  "key8": "66Djbvt7xb58AwhyU6Ka3YisHacSYFwuiQWo6iM3g3mpKJzSFoKxXeC7CAJh7AedxfNw5AxN7xfubywRcMC1w1pV",
  "key9": "2DoFpif2u4aMDgDbbt91LQj4X2YMUamxc9BZE7oxZqyiKYqq8unE7rD1wJvcyuQjoYLFQGjv4mNXiUvhfdfjtnfr",
  "key10": "5qqxKFVuRDyeMbKg9GmTd8KJosb3APAuDD26ncu8KAjZ9ATyBmGM6Wdj8g9yvXdGmHtnRcFnhSTu9kJEcv59oQ9i",
  "key11": "4bYtW6sH7BFgNf9CJysBAqMcSGpjZUJ82oZAFkTGdZy2SQxDCcGdGM5dgE2QmAVvwRbdg5mJi9mPZixm351pgybH",
  "key12": "5gYf5jLCWYfUt6SP4ej8BV9p5NeNNKkThM5L9pVZm7afLwQ9kzvHRKdiaxVm3qffvvNqdK86RYwoCrYHuwS98bbp",
  "key13": "43PsUqjN7krHcWgTHnKEC8CnBVDg2uZUEZMd8EMLHc2E1FSFWJj3iZzsa577wtrfYnK5Rxz9i59AasGDYn3Jdqav",
  "key14": "3gAq4rwrkfcHJwpGkBVgPsaGh9uWCBA1ViZH4grJ2SxYGEaqSkdBPd7t8cpEXMsBQeDbmt4Ga8Y996JDE1AsAExN",
  "key15": "2m1YdsufBiAq8vzUD7BEb5cAt7jA6VsoUAsNUP7rjFjojV7MPYVw5TAgc4ogtivFz7mP4FauTdHV4zBaNyitH4w1",
  "key16": "EZ1cBzPkTmXXe8zYPNdckFDyaWKwJaPSuhD1AuvfrvFJkVre5Xh5gk9S2TyGUP93Q6t24tmxAw3D7nCqQ7dNWAV",
  "key17": "2AeUs8f6XuVFdhwMtySfanYNh5ZvZatuwvfox3DsxeWJMRwu9aKe4Lj9gr2FKexEHhyPVrEVqNKZ9QynjM6KKKxm",
  "key18": "5xdpADGRrXrobn5uUNpbGcpCbnityaEdwCNcTwkoVV7VJSfexVcYVQUDdV3F9ZTMzHhhQrFtowsWreid8Mbu8YAj",
  "key19": "4DHwd2h3DPcRh7SnQj6hZ4BEUA5kG58Ze57vwCCRFPfJwmqyE1YyyZ5Erg1E8fv46iczFM1TXEMoGGW8K2SCokbr",
  "key20": "odVDaLWc1TpvFaFJo7kZfCicUyQJw7thqBPJBimMmPV4xPMaHbYHxuyUkfa2EBAUN4Rr5K78Kxm9RzUmMWQsKsg",
  "key21": "2wQa6q1ZG7U1A4cQzWctiq6TzCp7BLxfixf4QFEf7yBU4gKPdfZEw1rEbLQmb3bRrF5gbGCzyvNeCySkeoDLMhs2",
  "key22": "4Bm11iLg3iaPeVpL7ftenNKDeuqrz6FY9m3bC8JGdhqEwyc2cwEiWwQQsJ2kwT2jq6jKN1zwF6PSdGQ4k6NSLe39",
  "key23": "5CNYQsW1RZAhxJYjj3NJQDMH57JiCTzfZJX7pBsfxmHMPav1ipJjQDZvAyecrrtnWLcR3fjFSLkAuenUKVjRygja",
  "key24": "KXpu1GVHv7w2VchTA4NyxsvabScN4Cb51dVmSeYrP8w6KDbJy8sTGebjkfz2VrRSYe8rZjJR51dT61YpnfM24Ap",
  "key25": "4YxcKkudfbRixEvbn1q1mYk7qTYdbUt41nVzy68arjX7RLKKKs3NV8menPfbFaa9ofwtiaEdZ7DTKb5od2rWS9U",
  "key26": "X12FBXi37161cWKD7sr5Ecs3zNvn7zMYXsQa5Bf6YaRdCD7bjM4wrbxLJLDw6Dr8rAPc6FFRZdasaT57zr66bi8",
  "key27": "297HY1groRDAD5mJLb78fmbvLtcvcj8o8HtHDdPXjnFiCDNFUkk6Lb7Jw6SZTdGtEK36jk3mkW1N6iBz5zmiVUo1",
  "key28": "5VYSBPX8k8Pkfa3RDCUmC3LANJkSoTjmkhgnFLATrgqFwfVw8ufqveBZfmDB7vGKaWbBrDBNGVhjsMHk9KKbrqh2",
  "key29": "2udrBsS6ACZKgvkrVidHyGrmtCfeojtMh67D4r9FkwTuNkQs6yninMqtrQ21k4KndD9AbaqbsxLZbtaTfshhwucH",
  "key30": "5zXM4vpuaoA8BPEqXjpXmb14KCG84S7dTCbVGKrPzcVkeHdZwCsXKmrmf1SZuh7YaJWQn8DKgx6s4TspXvYFSg9t",
  "key31": "4rMvj2YJKFeDi1Ki9Yo1qqUjjBSNmi4AdmXnByTodTfU6h9HC4mrH1pUb6vLKU7wbCjx8i2Y1TBHB4FJymEdo8tf",
  "key32": "2B7JkqeVJE55taFHBiWwF6NAJ2hbZeBNTD84XTTnToDGh5G7cdCitWUReiF4htRwvgJNSWCJfApkuA2VWqc1LoMt",
  "key33": "2KRv1U9oTFcs1N5oJ5eZDidbqC49uey9oMsHeYFAvvz2Vi1fzK1GZt5vQgzbN2bPvj8HXe8gYXkNov6tGEcfTqXE",
  "key34": "4HemRfvBxgyugduYHVZV2GPXRhjcG4jF7pY2jecLxKB8bD3ZTUWwkQN3Vf7iy37SJ5VEqfYADe28cBNVmk59sUEg",
  "key35": "42naiVdzB99qkGGiTWgEK2QdHqpcLSywqZBdt7vh2R1SHf5QtUwG4fpWy2rk3NFoR3fLb7iK7UGspovty3azyapu",
  "key36": "5k1zMd4cakEoSWNNhoyNJEQbVMtFdFsk7joJyz2yx3rGhFuCauPrx1qiS2Q5z6dnHGmW5dJR2xxwANW7Uqu9kADK",
  "key37": "3BJvcoLeXerhBP5ph62i2g2wwGHvHGAAT7NMNVD6Pxmg471LwQPc4KHKgJBnwx9WMXFSicfe7JyxQ8xCdxf2hkxj",
  "key38": "3XPv4moLa4FXMZcep4P6tPs9UVWwiE2c9UMSCa1QB8URtA8ZZrzbAMcAqfvfY7zr7HSFTwZ85Q7KTbzYctUX3u63",
  "key39": "2kViTGb6euJSjUH356CDkCojDRgNuW4ezeGyGeTyoQw4EtNAUaUwk7s4CdpGViuXyPWXvS1bQv9EtpWtU1aJxPVG",
  "key40": "3JovCMhhSZa83knwJBHKgH8Zkc3fqVJktgCqchNfbj8KTm1TDAksxbGEEgrYZDfCUDFQJgaTWt41CXRX1Bu7MrKy",
  "key41": "2QjUii7aEtg6wm45PvRr4Uk15GzRfdiHLE1B6y68YrDr99wmfdoNQLALgHCw4gQcPPeerwbvyevj8aRY4iexMS7F",
  "key42": "UzxMRckUDiD59mi4i6DLg5oxKmSLMttBKAKUvkWFpG21m94YCrUf67KR4qeNVFrG61VusKQKDM55hhTP5T57kH3",
  "key43": "4o1vhJpsNUX3AxHNVZfdnBg3djtTDTBTwzzypVtnVRX2S8ERP3PuWwsx4iYTa2n6KqsA8RwymMa1Kd5tvihNE1xF",
  "key44": "51HyZTxoeJLzjgD13BAZAF2wjDJwufuxQtFQboKWcQnE8dbzujaQgoL3GmNFqP3M4jbRWvottVY1xWZ2HfcAJdLg",
  "key45": "4MBVPMvs4sasBeWh9TtYD7B4LHk8HJ1MAwNFSJJwBxU7h7BjDQyn1XyhvwFTDP7ZPfrzPrVH9oLrwxZUVyoqMp25"
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
