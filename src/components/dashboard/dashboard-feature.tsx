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
    "3s938pJBJv2AkrCDW4MFDMB8J2GcsG7KXZxCGRqU73B9wWpf4TpozE2Mx2KXmCCPuesW2egGqBjqKtiBjSG5YCMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QTFfGDeQTSjCEGxwwwHXjnpe9q7EXg9MJgvTSShRJjxK6qEtsi37ED8PJ193dNK6t2tU5gYggg7J7vC2MgEFWoe",
  "key1": "5zbCPTqMfLo6PdTzj6vWMF3TcgpmCGfi1znYwQsp92pqGCWZxdYLrRNyGfvSfEfGmXZrHsS661SDR1ez9FTAMvhf",
  "key2": "4qp1Z1arNK2q3okHBbtQ4GXrkq2vs19DSqLUnyFGvFg2wLhvP4bKXbuXu3UPE2BXeZWkNjPNxPWmPRueFQp12cEX",
  "key3": "49LiYMsWxpXvp8e1UUw98GK2wy7Rq244ofddsWTmxzVdmEYq2cgtUMsiku8RAw3vJpY1HLRixk1hAhCup6q2fGsN",
  "key4": "5NWiporWv1ddHqKtPwD1sas3c9CcxYXn92ZdAsSxXAdxWUw6wjMK1Ny2FUYarGEugVGVg317UCzkgLTnMjbzct3P",
  "key5": "4KqqJaZvVeeiCnpzibkGQKvhnPpBYrrp7b5s8Au7PK8F9R5ZWJNgsVrh8NjAb6vRPpGBSNYanu2woUiRkjSUVyGL",
  "key6": "4dJ6vBVk1yC6qkMJdP1pJPH5jZtMNby9WPebHnn8WvRL9UFfxseyNmn6BR2WH1imVkQLpgxBvRBSJdeTcuVeqxT8",
  "key7": "3d9a6dRL72VfHc1Pqz4tZZ6vvn2whYN9Nm3HQSeVe1DDHyTd1q4h5UEtKuMSKVgesSN2zBuHFQRQitkHArPjAXqM",
  "key8": "fVYvwDyuP4HnBQRA898jurxkbyPGRDeLCZgEzZZbhC6mZ9WLLHCPTUKryyM7pxjznVhFrrXBTfxmsrzrqbqQK4e",
  "key9": "4obf7sYoupWjCSjgggY9W1n632C5bNU8Xfu6bwaRZ6j6cPGCB8k4XSkZXWGNfJipJMLeNxUqnFynxinrrw7dtjor",
  "key10": "22jP9stHregjfrF4ECaWJBUrUa3FcvuuE5bkKTGMV6Sr9PYzVCcoDenFgz6dZUYiiV9UHQ3113KPp3mx9DVUHV7V",
  "key11": "4XKgTADQfM9Vphb1HzorNwoTWXZGEmTQujZYQ15rcetp9FUbsiQRAfRm7UYTLmKyCHkKUH2ubsM7YnF7h3ofHuo8",
  "key12": "82YajkeBb4X6N21YjhnnCMQk3nzLC9ghbsxSrTYaM1QR1NGFvHfDD1EXGbTHiVeE1Ye9Z2CgpqKNANXNVEbioUf",
  "key13": "4BffyzjRHqD6ygpQuyRbbuR4icFiV6o9jUCjFg1ipJTUniL2HuPT4TLzn9p1veeziA5nwRGG54uK4cymeqgPpgcM",
  "key14": "2qBxB7mdsGDzQnoz88Sq9vLp4weCdUuSPwgEPS2nNb4Ew6PihGcX6dhBj9CPnz7LBxXBCbzXxuCYL78WR5Hb7Nr5",
  "key15": "2Pztq2eceRqbEALKan5F5JD5xL1ps8GRnw5FDc8KooxpfTFQPktFF8XKcV7qpbfH5cxLK5rF3cuvxaU8cejeLFxA",
  "key16": "2Rhk8Ko3E2eruUxXSc2LPi8TwKiWhJfFoeX6okHuw9o8gpUEcURXmq5tUbNN1qYb2aDjPTBAovTA9uXRMaa4NX8Z",
  "key17": "2c2nXoAGrUWpkeyWSsgavUs7acsqMesuw5i3wsU4oBnhyfPsKL6eyKRvvSUKdfFoQNXYfgPMbGciKBtM64sfVwhF",
  "key18": "5Gdy7w385CUBRmSrzkVifD24kwjrnApFwt3FCfEzBsbWfopMSK8KsnagRXz9jxLXBL7ncxDiFhznz25U2ZapXM1D",
  "key19": "JY9TyCowbAW82z7kN4BSfh7zKehdKbB6chMPAP9gwYpSJPaZjWUCeEw6cPXeya5SAooaQjQWGHZzknhBVjCTqvj",
  "key20": "7WvhMcHydBjzqJxx2h5PMew924ueotBhTSu9p1hZAH9CLrqQqdZ5keUp8a2djLZ8jtz235pxkXh3RJXJ5s3bo13",
  "key21": "25hdCFJctnZiiMQ2M7KtKtQJDJSskbWyfnmBws22z1jS6SFB3Kr3evtfmEpP4E8JVPGzWEgfYxiZ8MB4Xnp7KbdC",
  "key22": "eteqz79FFUguGGDWJe5dDHG25q5rLDFp7G6qZgNor39tRPwSqPg8WYSmFZqdaXca2cCwTKeNUunkckQWAA4zfaC",
  "key23": "2ceYNYxRY12v63uB5KmY8z7xN3cM637VDahwcru1kZeGrdxSvUkJfvRtSurE1nJ4tNUxoYqFmopgBth6v1i3iBdM",
  "key24": "3TrCA7i7aLdZ1U1zvDpVrxa2uG5dP8cJtB5B7Np2rUXsA5YMKaJ73YDPmvvgsUcCbs9EzkXZr8YYaJ6KnroXTcp8",
  "key25": "2fceT9kDe7Wcv7K3ADCVEV4Tu1QV8T9v9V2DMKGKFeNcJ7R9TEeiPeDGs7Z7dnvCs6bJS8fLti37Su3QhdqCSqgq"
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
