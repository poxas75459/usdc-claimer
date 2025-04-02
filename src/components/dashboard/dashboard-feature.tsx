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
    "3h25NurTNd3ynziLi94aUbhzEjbXLrE6e4ioRgYtGVaoZNxpa4aPGMvCQuU3fwiTtHhzFak3Qzqm5Rzt7JoDhQtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ivcR2AV7hxWPx7SYu13uFoh85VSJVX3AncEF64c1PL1w2WTk8tKVsbsGsDX6oaKknVazvbQ8o3gWqinmWFPHjoT",
  "key1": "4j7HNcepEoR7dNupy2UqxPLoP31T1Gw8ZsTdQcuEmhYwgecx2Gbu42cJjkmZSGa6RA3c8YN5ZqE8QWLD5o48qtzk",
  "key2": "35KHZ6SVhFE5ghcAZLhLUu3DpagdhQrLZSp4MqgAZdtiNMn4MXQKB8yF9e1KeVMTqEn7JqxDy45gvyLiWCASX5xm",
  "key3": "4hpDQPkFbAjfBwKKwtg5XaR3kPrub7yhdVqSufCui2gP3QpCESaxEKMjcKVaeVyq4KSc4TxFEAuC8GwMqZRhDAt3",
  "key4": "4wzXbCRuPuQLAVqNK8kGcAEmn5xmvdfTm2wshRNwUD7Ts81f8ecVEx2zKgnt5ecaGPa2rrUPj3wuGBc88mc477jA",
  "key5": "2DXsiwY6aAXZ7eUhQzqXKFMhqqeuwd2RoXjaf8VWXG3f2QLpowZHgDoT13ArrMPP4V4SL94kXrbu9DpYjM9zXq9f",
  "key6": "3asxNFkDKm7gBpAR6SX58hUiJ1JkxgtGBXFmkGx4TpoMFsws4Cz8uETUs7ubC15xThoLKa5iF7DkXFrxMxhYebRG",
  "key7": "2xwENwBNtWyNRru3tmDfgKc8LKq8DcDVNcy6xReRn8HHs4XjLkwYFCHtbNa6LruHuLBYh3FYhhsHsJASruRvR6Bx",
  "key8": "54LcdCghCWq5geKYgVaFBM5iLQPeUJ4Di9bQw2GruKzQ3WEWeWVc6nMbEvDt6pVXngoJZprbUG8c952zNCXyhGwK",
  "key9": "4UAH4dwweVR8r7erzgjpL4tkAVasbTzbRV9ZtHNFR5P2SZdvW9SQ8qY3jHiW6oJeKsLFejLCyCoNCndex8ZH25WE",
  "key10": "PVqbRX7eHUf9JqnPggRGcxSvV3rUh2SNmYSigc1SvyAYx1BvshGqdTDV9eA8QBinqbTZyTKWDDKmQE8r7SAb6z3",
  "key11": "2HLdJyzk16ALR1tNMiTQZgyEgNRGhso8aj6fLjLgsdqCDiJ72wQMF4ZuwPFzVpVSB3iMMt9Q9dPfXJciDVD1FRoU",
  "key12": "5ESq2bv1GN1EGfvp5TBsztG5Pu77Dinxhgp84TnNFvTSdTfMnGhdJxGYCuVhN7HFzJTamLBiLteky9RQTmhcREDR",
  "key13": "vfbRK5Kg4Z5ijq37jq1KMcM71u5torXxxQootRMyrJT6FjnTjETJ5WEydhuoWLz7bpFskwroueP2wTCs9gqiwsc",
  "key14": "ioGu16jQeHdVqFRbniB9otco21rHpQEcdTbanqtxFNBTkjoCEQCQLBUM93tMX7T4p9zQSzia3bmQFS47ceUq4tY",
  "key15": "3T2C4DsMvyyZnMddpDvkJigkSScFH2aNbrjDWfJM3s5ZJKYL1bZKUd8ArAq12QJVuyhoDdGgimD43WVb1Pv6zYMZ",
  "key16": "2iJXj4fkFVqviJMh6QskRLSBiwMNzGDTSKKS3db5cygFazaJckhjvQMKcR1RwodNt6AtkDnA4US7eTiH1yKuUZhn",
  "key17": "2WdHdLNaaqCc7ExT2y1aRGowDhjdUcDd8eNuFEjGDjNGusR2ppbHoEBUxJfKHPxEhdDXRvfD3ewxkweGF4DXfsBu",
  "key18": "QzZzWiWbJSWddeov1yScj8hxHFJ4b583Q2uaLQJyXdSNGgjuecvjVWN5XetQmKr71PvY2HFwqLWpwEN7XVkD6FG",
  "key19": "2JJLRg4wDw8TgqPsmEUEPWeSTF32UMoKALzsBsxGn4vU95XZ4jQL64hjCP5cr9bVsMwpQbNMfoCPH4ujYvUaaJZc",
  "key20": "4rDpFoKZFUPWRvv3HyPhLsBTin3hUUUKTyz7EQBe77Vv8S14Cz7jwG9JvehJoPGy5C6AeVWN9woi5T9zVddyAwsV",
  "key21": "2MQM75xZrpZLW9Adf8C6iUfKr4zAc77JZywEhDxbE8n8y4VpU545tSYewvtmE7FftQxEzo4sfRehegj1HkUBKTvA",
  "key22": "5cHh8kvo9xzTSqiHsNBRkviG8LcuBJF5k4grNPkdxm4M4hZ9hCxRFcGAcwPSjtWbLiT91Hsep9itAtzhq8fACiti",
  "key23": "4jDp1ogwprABkd84SeFxYzJ6MvNxDdgjAUBLbUtoLvrVbMkSkiJefYAPU21Jhu6G1KJLKwioGtET7QQpNgVswYUL",
  "key24": "229vFbKXygq7qH9DjhzAK5YMjViUQYVVcBt2Z3oRMduWoH8uRWzEKmyHUugVsNxcT9Bajs9jECkvDJk6zUBg1FDT",
  "key25": "MBYfbcwfYeLVVZT3B8LUpzs51YzbsDq4Sx1XyrYhukow2XcKELcMHPW6vxKAgGHBPLG6Nf4q6VJ6Jpaig2RLCXf",
  "key26": "2Q81HVsq1vwZcCh8RSmnL57YKxicCBnsLzc85BvhX8yJD6VLQAS671PWdxnmgA1ycR1Q6mjDJhYyBXaoC3PHdU47",
  "key27": "uQddMDqTT4R9HxqKUbZ9QNZFM2eX6Y6j9VGyoetD15h2wNKjp61TvWuy9vuuJBmrTjtbiLWZwBJYgN31FExY5cc",
  "key28": "2XtiFihzg3rcSWhu62g4DNZqGqha5bhsRw1fPG4pX8hd1h8MQjGQpdvoagJqmPgBjRbU5ZqpAjwLQHHjK6VR7an9",
  "key29": "952qi7otj8ktCfPbvbKyd9L9PmwmzjZGp3hYRWHCTHem2dzz443WUmqzbAfv5EcHiVTe7Di6svjVan5FaHBVHmP",
  "key30": "5fPXpEVvA1Hzr3VYE1PDi6f7vo8aD84qrSZ9ssuRKXSBdYD48TdQE1a5NFQ4KkUg6wFnZRxwLwsPBPMFXDaUzoiY",
  "key31": "3HcrvPEjZtqyBEKczty2278LGonD42yfYEQy4LmzcFcJcfvM3S6ZZ4mkkVcrWSMp3tnD8EjYKpXM811HgZ1sjZC9",
  "key32": "4kB43x2N75kNBEWzKmKpDyvpCk9Jod8u8JcrQDQBbFhvesLtmdJQHMyQ5m5tvmF8h3P8P9sJAQeYs3DhvZPpYam",
  "key33": "MyV2WaHjAjZNpYv5Gnd1fWCL7nAtj4N5mRGkwfir48P8Tzq1dztMshR9eHCCChf111GixSBSLEAqPnWzUANggZZ",
  "key34": "4NeqgQdgrjgb8vusnygMoYTfkhHrX7hWUW6z2UJURzp4wyM8n9CiFQF1z8DXoFN598rYFYM4P5fpvZf6szhinaKb",
  "key35": "d1yxPmXyhdS3AD7opZY7x3pMTie3fzqsdgu2MSeFRzv9u9inSjYdsD3XGnKe3YaeAoDKU4gTzS2Nzu76UPHFdgd",
  "key36": "yk8Ptofi3ULKemBZGaDM2L9mJzDHPT5e85xeKv4myZpJwtXs5oFZKG3kxU1LXNvNXYZx43AnSpps7YadXK9eBRf",
  "key37": "29Kiz3vjaRmKty9yxHksF2SEKqL5Fm6p8uWcxJW4RfBRfw35jkoi5mnHu5NfYf9ShWaDm2weiNNBiLqPivWg3Eof",
  "key38": "372N1kNnfY367Hqbc3JroqpHmQrsiMqiZN6oT8gMK8bqk9GjiniRybMZCnVRPmDFxWCwBrJVEo3aatrfC5dSb7UQ",
  "key39": "3rmh1aoLzVf7r39yjCB8jsb51zibCgfuDFdnb34uFQUYuqtrU3815WV23x11rCLvmp4oW7KzCq6dV2jRdv4dBzW8",
  "key40": "5s8UZyuLvtV7FMBXXyxzGFMkpAhtD6qP4A8eXRKtHy8kWALt1H8UsWoTb5nAB6HjqVURaoqcKRq31tk7RsCTCiUs",
  "key41": "2dVN72UvHLpPVP7ydsXM9GboRkMP8KJxWvLY8PrTK3r3grgacTmsUf6UigDjAofsjoiruCySnchPDbYp67fpwmgn",
  "key42": "5XjoNhodWjZkMuS4ENrLgerVzbpELkWTrqDugvD3znqBCJNXSEkVKbr3xphjFwJX4H9z8fwdgcobeiPqhTwG4Mve"
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
