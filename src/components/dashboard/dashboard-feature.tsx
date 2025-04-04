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
    "3s6YjKbUUk9LQ63NBwHzc2XGqXGDSZw6xzMFysvYWVmccBYppzoAjCKsWq3dXpjcq9BCR7xCywouybWcdsTc97ks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CEPVZhpnSj5UFKf8eSpXcMjmWmnn3e8vATLfNYP5jUgrrWc5RmgbxALxp9NE4k3MMEom8pQeB2zB3w32PuQM388",
  "key1": "2N1ykwVzxz8SbnY5XDTM9KnkbFzhCx6HpVdPWb7swcmytwm4UzaW11Pw8hM8i65QWp5ujm5dLnCN23F51wcvCoUP",
  "key2": "4pr4hC2LRsm4cX4rPK2dB5TXEy8EpnayA3wUMsjyHEwTKqybVcw1c3jWSEKwCt2ZNbqTaYjGrCA6pFSaQVjqmv6z",
  "key3": "5reUBHCtftuD3CScTzYCxVneLbj3G9JH5k7Nx3ViaAxN6GwdX6xBY24jCVS9nJckqGpt5K3DLoo61qPxSqG6U7sW",
  "key4": "WT9DZVoso8Fcvsv4ciiJcMeweFYyh64RWmZsKBs74rjZpLyUMBcqbGrHMrKGC6WjAbPhxAjfmTRB2pA13vd61Td",
  "key5": "4poJGjEKJZ2dH1ziH9U7HRxr5hp5vi7Af9zhqfCUz4dUbxA9gnPBn9WYjLbog9Y5RBb8yfnnKHfjGciFn5QWRU6g",
  "key6": "3weAYCykkX6uzBcaipMkrV6xxGsUKe4oGr3ABz4hibLXdwXxTTkkPVcheewjGc3oQeXjzFPvJL8f21uvz7gg8BaB",
  "key7": "26H6GXLKVjUJ4ABdqo83aY1CUayEiqm38eD8E6wCMY7ax5gxAte3Tnx7FebvQVtTbU163LAFcaLs3KdCuLMYwJrz",
  "key8": "3KhwUEfiDHJvX82J3aiRYGgDuDv9hVrrWEqPExiJY4zc5vSJ1UEDHk6bWtR5VzHkV4Vnvaxk4EEEzdxJr8jk2s3W",
  "key9": "5wTpH5HG2crZm7QFohsV6gBkLCFk9gE6LXCtPArRoUSWUYjYMi5baoCuyDyyQA9dX4ehTt3zRKaEQmCE5eNwmVoW",
  "key10": "2gKnSuZqyVbwVJNBewdL7hjTB2dZfD7ea5ihWj3qiTpx56MRnU1Dz5UTbhSeUQGafkZE1ZQPeMx8gKoYmfhfsi1b",
  "key11": "4rPK3fELNnbesoa2Su7upUvHVodDsT6Z7uuu19KbWNGRooZVepn2PKaphJ3uVEfRkBEErgHsU8GrvFJquxFepTk5",
  "key12": "nKjx6pyNdssNf9tnSWMvHYRjAtV15DZW8JHrnGm3k36aFXZR9sfg3ziiWTCze4qbEUY9vkCM7MHaLqG2tuVdeLF",
  "key13": "3eNx63k8fz6dnumze4EUbNcCJUSxVc9ZG4RCTsjZQRFcR3gtst9Jkv2SvGEuwLTycwKjNopGF3PnMhsHFwPD8ZHR",
  "key14": "29YFLpmeCeZEvWixJX4NY9tKwhiExW8A6jjs1GmUGPgGXu6QzxUGT5nY5Ui3o7Mfa8EYgTu2EXJzjykZuhkT1J6x",
  "key15": "3P61caMsDkiGxkSnZFfoQB6bG29YRcjW6vy38ngi1iZbwuypQ2FLaNA6jckRDGXFhNnkDehCner1jEZJqqrw2Edy",
  "key16": "4taaaFZreGAnu3GXfPop1RmZi1H7p15UR6yxJTbkBk8eYZ53kyqRLw1k2HAq7h7aGWWo4tPhP6bKydKZ4BpYtSmP",
  "key17": "5TT6RAbpKdsmkcEATzHqmQe8toCEcz2yD5nk96gY8t1xZfjcMK1ZS9UNQ6Jcd8sEgPLhtN2ViJMFNyt4ydk24TkY",
  "key18": "2FUDv9mFzidG7xTS6F9rpS2DkJG51NRcj3qAnVgedKc7AWeoi2t1sT2bAzQvVPudKfFh8hM9aatMNWMhxcqdboLw",
  "key19": "2ktDhe2EPjJJ9aPvKxz4QYY9CS6ysxVB83HKFYY2GAJ41w4PdUjn7b9bPtPQgM5DNhH2x6aoAyZSh79vPqZu2tL7",
  "key20": "4JTfudHpQvwxAnHa4XSZK7t5Eh928X63rAfsBTtmeyxpsyCMchUakgktkabQ8727xXV8Y3dc18AWwBWPdkAkyuss",
  "key21": "4WR6XWjAvM1odyfe9KYraTdCa4o9A1NJ3QXYXcQDceE5RHcsjvURTAXp6JWaRZk75qm19gtJZk85t3nJ7QvEfxkk",
  "key22": "rSYDyBz9DXwhVrrbHTykkTt512WyFkoyUrDEUTwqeCrkAJx1rGFXAa2ajSXtvM4bTuozKgysetkS6BS19fhXA1Q",
  "key23": "pYZPARdMyuNviR7SaVqkfMEqXUxmsVNRjKfjPA4RTdGDV82mWXYe5hXmciCcQbAtVjk9zxorVURQJfUHrF9yHJB",
  "key24": "2EQ93ALn7yUKjGWYvKsRKjPUvkyrsopMmCU1ESb8nLE55eycNKPUsr1cqpqaRaE3TKnfvp9TCEDg7ifdQdhVuq8j",
  "key25": "3qdSQbvoymmJtVUMiHBXdTPKUTsJtxzEXnbjpxQPqLSXca7UBapZVQcJrGAWpjwEqc3XArA8FHWTswCtu1nWVTDb",
  "key26": "5hbzAqAMWgzUdttFkrHRZrrezG8QL4vC88V5ne4aAGTYqahkQ8EQnDogvVeVzFnifit3tpHaF5E6Ynduo9qRrvch",
  "key27": "5n3NdEAbWzVzBeTneUP5SAWJSAF2b7xnuWPrjkJ3yvqhyo7zNKpkTQXHzoyrL5GGasxsUVEQATeiuoB7es1NmAed",
  "key28": "U6G471jYMK8zTbtnvQ9EX9rQWSt2qfEZZnjA9DhsksXWVTszo13EdFxYqsdReKbEW7t9GFqsfRvsNRaKukf99qY",
  "key29": "5g45sU1DRZrqm36zGWsdKCVsZbA4XKkLBQ7yxPdf8ticbttYKt9fUEBpd4XTCMDpdSZtWPxoEcvXWCpQ7nxxnpHo",
  "key30": "3JU3WLGBHsbPodg8KqVTMdoz8dL52di7hhnpLh9NAzCeAE1fycryDedVNHU3xreXyZRULcXoasiwaftrYkY2xedd",
  "key31": "3JL48uFYra4RzUTDLuFaShFTJN2zyx11VnnJJUCymAkj3Yc8MsCLDpv58Q2EYyggvmuKWo81qwRckugdcRXysJqW",
  "key32": "5RrwSvDmwwi8GfFRdJNMePT2JNNBBw21oZbvTAAjVgBhjipVA1YJ9SqeGjpMuDWKusSLJpdzGYfU7YsES6qfpWbF",
  "key33": "2AfSqPjHAk235KoVBTaaRP99RPjGefTuP84QcwWoGbY8HMmB6dLZ14LbsQtjm18thEoRKUvsW5upLHComLEA1C6D",
  "key34": "2CfAv2zkQ7b5xhW3GGYLMQ4ZnH1DVHZTjSAWcn9nQPcyqAXnzNuQvw6SRENiinmbibCHjdtX55xAXPBxip3gaVYY",
  "key35": "5xG2msh8WcG4RHaRGf75Ngx8aNkhRWbqV61AApz2xM2pDnt58GWKDDAHpyznDy7dj2e3wrSNdkBsVaL9Pkv4iYKe",
  "key36": "5bnNmn38W4LKV5FhDPArJNNBvqkQqc2eWc7AJkcnu7vbzu5zED59CfLsKwcGQR8bUh19SVjHDDqKBucTHz85dDSm",
  "key37": "451tPTAHsGdKvSgqPcc7XsCVMSjTuqnkMtcjr9rHCxqez1XriyJL7dLs5F9dK7WpyL19h7HHZvfQofSXee1foi7Z",
  "key38": "2LWU4pa6BajdB2MzUR2Arzc2QqhS79PTUGrRP5mojnN1a7ggkU5TrJUvNrAVCTbWqLmLgDZPXVYLq2KNMXo4xGfj",
  "key39": "2mprqqFNmEYa7SBDeo1zAubdbpJBmE6aTBrKftXg4Ac2poiSUt7H8Yv9jFRS9K7He6e3PR3397KQKQgDP3rCrjqa",
  "key40": "2Z9gTk2vW3uQ833BYKh7PBmicma2rHh4s5YeoYLoa6WG4Rc22sFJ8LmfLQ4okbW2qrX9phW9s5rgW6KE9PPbvis9",
  "key41": "3XxpYAbkMTR9vXYanP6jpwQH9MnnWyUgagW7omNUBdTyx7mx31vpiRFGHi92gUEMbaqGnzB2ePFrmSYkZcWsNUFg",
  "key42": "9zhju4jvXqWwNHqw8yPnQEbHTeheBuhDEUhKiXKM76s1M2EkuEH7v5HCkueBMG4efZg7hndpEJX3MeeTgDomCHJ"
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
