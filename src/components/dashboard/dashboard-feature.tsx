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
    "55MiaRVAGs7KfXo4sTFc1RSke8R5K7FaVyKKGVPeko1Cuu3yHSTqcxZmR81JNNfvYfvvPTPWSVsERUDwkn4bFTG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33uSW9TozUogezkbQUcJWVCFkfTuMcRrgK16kaj6bXEaKAXGz7fwiPin8eCfN5PxJUWp3tFhAWQTDRpHZ384pRbW",
  "key1": "5L425b5AvsMPB5YneN63aUsqGav1oXPoutxdEKSxifGLmsQdze1w9XuPPHg3WzF3NPP6TDAgAJQDZoEqB3Rr5yHk",
  "key2": "5VSmCrMa5LVV5NMKFxd1bav6fx1XVeEo81twCZF7aE6dzS5YAkak2qqhN1ziXzFpKbVzVuGozrbR9qfUpJD5PnXv",
  "key3": "5bzxPTdyzQoHigrTRYXd7KyA4q11p2WCukWMz8vSTZvYVGw48wpBMnTnUxDpa2qF4Unp26nDyade2fScqV7Q56ZJ",
  "key4": "5ZoYBwzuBQoHBxpugDroHjKdAun8RjsRViFRxiymDi6Pqf7LpBMePh7yhusLnpgxbAZanWEWTfMPUpMM99ZRN9xf",
  "key5": "dnmck8cwCHPvd6aFPGNv75WoGftshFS3VfnMRCB53j4LVR22qeVsQtaZTYDVHu8TGh8TLcFSfJo8BLbkevmSmem",
  "key6": "21eHrcXfg7gZ6DHZRSCv87X1A65ZgWfLCXHY3LRj9kcCDQ5ozLHksJCpuneYExFJrfw5aP7fUwdKG9nAtVxZfwD2",
  "key7": "2QQpgspeHgYDvARJj3gZ4p8XadL1tcBK4sjS1rDfS2qfhTLiphkHqzjCDxbDvUQUL1YPSnSA8T4aEK6xbectDmg2",
  "key8": "43Q8nueHnVjp8wCFi1fQcH2gvQp1UVakkzrkyQGrWP4JE5gGDabgKMr1gdoBMM8w5vSGwKZTdX1nTSADruBEvn3x",
  "key9": "53ujLTtuHvYDzpJDwQPdyW2Gg5xYnqRCti4dDSyb9Rvsitt9uEj5kW9i4TyDkt1Jux79QnP52yCj7zy71bJjTaH6",
  "key10": "FgtWWLSKopH5XyXrjdswWZFtVDCSVKDFfPteWBxDodHDLijQsMdahQfE1DAbtLAy8RvtRpwFUfUv9q3gfrXCj1o",
  "key11": "3pUTgSDqBXhC5Q8oqcN54hGV8AN1y7m9Eo6gKxpTe88rwtpWFrASxQ5bh4zxVH8HdpPPPiJexFUWno2MQDDUqpoa",
  "key12": "4k5pvbTjASkR5mZUAHHhUcVf2wVbGbcybdjG5oXvgyy6B7hfRKkuxn83xQmtnuS1DdinnscZWbrJFdeoZkvsAp2",
  "key13": "33BerijUgcJzKJPXhZpLzZCf8hPnbHZK5wUgCecq2qojxc2YoK18YLsL4iwKZ5FBykvke5461whjNbLT89T5oocK",
  "key14": "2gP2s9L6An6tq1shPVC5oZB5qDYp8LqXPfR65xWTzWgPLsL7QyLVmSd5GKaQ5fPGwtCT1zUtJ9tCBNyEesERZncA",
  "key15": "N1R2Td1fRXMfvC9pVUfMUtF1qsyGbDeM8si17zfQzv9hfJSguJKKa9cHY9NxBLWQgM9swnG34s55gW2dNvFQ6dH",
  "key16": "2g6XYh6YRPp5k9dUNt4Ab3UKGzDvyFxPZ1wi2GLEJYq8hkGmfYaDtKggV4JKBqKN7NhBZTQu6CtV42oZj1GzRVBe",
  "key17": "5WkePpa9hT445q8y1Q8P81PgyVG4QRKZpwoXwFn5Gs1qP4kFjAEYm8iTvafPtxnmW4QWFJkYHgkasoQqD8ZcjJ6G",
  "key18": "3su7JFiq1bAd3JyrJLGoj7UEMvqijxTBLV8bMeiQYXm417CpWmzDC92c3dmtXD2PgeMQRayit4Q6E15QTEeoraFW",
  "key19": "2BzLXFAgsYyZysJxyqsKtA4Fa63pi3jth6C8FnrbwGoW6Cn4KEPpTkBnFcVKBNssJKf4gD4MYm7UVg2mXCuJX4A2",
  "key20": "2kD2KSqS76hpBMYrY4RpGPycPCba26cd94WvyRbXFF4mzVjyNYfBJBaJayeZnYAJ8M7HMwJeabZkZPZoHNS17ak7",
  "key21": "3UL5UUoVU75VoiBdSNWY6r1tcmHthVpsGnKvfCxDoFf9DhkPR8eHoBh9S71Ew8ajfygUfcQo1rYLNPGegT7WJZux",
  "key22": "5M1YNjvNGcGow2SapVM3RUYM35UszuVXehf1qVTD8exuXxhLo6UtCzoWxfjN96DKUMci5uAgpmExiHJQ79Azz5s5",
  "key23": "2uSqGcuMF32ydxm4BfzNqkacJZzoGqgtUWqvaDL97z2hMoYhj1nteG5UpdyrKrauMfVZ8ohJmLAfNwdoaeqdEpWV",
  "key24": "2xHutGeYxrLfYaBYogcrp6RUgS8eLsvaRNjvGQkDEmavdBghQxRRsJNAtn9eZBkDBZa2TfZ1uGRKh4UzDZjihPq6",
  "key25": "5gvJK1poc3zPcJefkXnRtBDUFvZmuTyETUxnKRRrXNkaPSy55B6PHrt1poXUzTGDL317DUMrYk9qZjDSuVnJ4p7",
  "key26": "2LixP6ohLpRBLKDTyrpma9ryY1F3B7jh3opghDoNazugWEqM2vff2LDjWTWSwJtwhVt9XYWFx93W7sHn99tq9GZ1",
  "key27": "5o1cthRKx4h5prJoXVL9xJf4SPqg7DSe39U3i6HKeNyWrhxVEC25jfznPVhQxvJF6JvkJtW6dzJ6SRTceBPmYEtk",
  "key28": "4JoxMrEYF1Px2QphJj5MBAzcpPj7nDYUVHLbfEuBrnDNgsGTNoCrGyLSYThexv6nipvu4TMDV3h41uiBceQ2pXUz"
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
