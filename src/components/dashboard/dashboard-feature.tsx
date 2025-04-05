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
    "34kXDQxGFxMVDYDKF22ff4K2rYBCgMMy1inoSFJZ1EKa3z2vrZ4e853YsLrtXXjFLT9DR5u1nk7CUKKmardPN6Sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uSQGtx7Z8r8bQeXNvrETfSCi1T7piEAvudTgBaiKS5PW6D5zRymT3EgpgTrUCBcP4iVb5PdC5RoatejFf93n9yQ",
  "key1": "wLWfLs7P4kTvZThNfTCGowy1EWGojbRY6ejiZ6jq2fvR3Q5zy6vLyWm2MR9TXgy2cosKgtsdBfRoyyd9VmA7L3S",
  "key2": "2JWfq3Fsp8bwNfHpLJyeSEgpHZweRcw15evtDV3hZ2myHSbJFwDtdotnsyVwHFHJyuy1tvp41hNqMPAwXRsuJGfy",
  "key3": "CNXTSTvfL9YRqXCTdpinwiiX9bQLbBgoMJSsGzBR2uPaCbWBvEGP5HFCSshcJPNyEBmRavspxscRbtKDB1chCQw",
  "key4": "GPopx79F53jNvDcpLGuCk6sinEJ4F5U8z7XzA4fUHC4hnDtrMrmBby1vtnZYs74dZSiyKXSPYQJrGUFQpLd3afo",
  "key5": "3ej4sVxHTKazTikj1gvSagTqgUdCrYzxdLsitvQqJF5duoxFYx1MhVzR4DELTFyfCftN2cNXSyjdtiP5Rp6LSESm",
  "key6": "2odkWCsmrKbsJRJnPgXWZJmxBZQXdVi4DKPixHBKFdip427cK5Syt8dkrFFmVPh7e1bLRf6TQGZozxF8gfpGF9g4",
  "key7": "3ZhvmsWQixzfVJHMrsYE2fY4EKF5QVSgt1VxW6J3Eg81ZZE6vpjyYa4yZk65iLMRzvQsygjfRcUE8gRdFV1XonTx",
  "key8": "445VB5BiBtNtBKHQsTqsQoF5V1qJYHgwJdzZ8u6Cuh6E7MpQgQh2buPpV26wDU6vGBPqditx1zrrgPBrt5ZDEHiM",
  "key9": "4fte7sErjrQRNjxbpJL3qXeC24nUzuNx5nkkLcoXXrfAqcpxPHMCiecvJEXdXj6VccLhgu9HSx6R9GajaByha79d",
  "key10": "3fCMNVnGhCBQrGPutNFu5NxTZJZ5W3pREywjn3g5Nz1jGACx2fkuoQgMZKybLT3X9gSFh3xhsJcHFm2E5rbTmnkc",
  "key11": "4ZRQo3txpRjABo9f63pgstX2Htz9jYkpHKPwpTWitvarupn7xDFgCAxbNjWZdGVbRmj8fBWwcaiianDZJNqkZ5HY",
  "key12": "5nTTpHyfBubQYxyCLvHzLE5npFouf4jZ8tpoNyr9Vq4Egxrz9uKpLpwKERyk9Gd4ApsMD9PhgirGZvfEGzB3YwfD",
  "key13": "61PbvFH4qG38D7tHZgWnXTtYvWK2j8SdRhYSPAtJ7KFbLBkoao7Tao38pej4YB6SfqEUsDRT4GELSnAJm4exXvwi",
  "key14": "26LB9wDhvvw2rSNFpCbidBJb8a8M6PEyKwbiJWF5xYjhcfr7qZn6P5ciarhYh9hV2Mkg2g5gQ5QRWuQ33Q1kmRFZ",
  "key15": "54sdv2LphJDpFAGiNdFNcxE5rkrpgLtoinpF2XJRXCXZX8SzUvQnir3oCokWhavHsVSjE9kJb8QSf8qEy7FaJjmZ",
  "key16": "26bXuxGTUQEYuykqbd3gkA2K8RcMBFFre6d7wdiUZumTJNX7t6TeqKDxLfFiNYwBHLhWepznhPLELmbdmXqoPu3U",
  "key17": "5ASmSxuFXaC4aWSGdB1WQWo1JBp4ck6GBACNhmv18pf6oyvPBq57ePeYbkTMmu7jUvdw6dVeX3bWYxW23JSHxNac",
  "key18": "4Xk5qsHRua2pQdYM89cGX1wQ18jsmWQyL1UMYXK9wXkimU731oNRneAVZRLhsdrViM9VW1kWunFhcvGpVeinsLdk",
  "key19": "4GY4kQ9XGxSa2xYYsQFwvRojKGTiUpXZnPqtxUvGc3ifzmD3N9VzJA2fQxHAm3JT9NamU9YGjf8MqjQfHvrDnf7f",
  "key20": "FenTC5qpotSTxYhdUAZV7cUWE9ujahPbs829J5Lh6Zr4Dtknqht5ERff11PHXMrJhQ4T6n7Vd7B4Hu6Scbnx8aS",
  "key21": "4u24bSnHveJU5K4qBzkLr4aXq5wLXF7Zwc4nMt3xX8BYFU4EM8DsZj4x9kKo4LEDWm4ZuSivd1zTZZo9cvvadZ8v",
  "key22": "4CQLd2nWfZFNvKrPu6TiYrpH4uM6aV2wszZ74fvDZ2UGqUPzs9KzbWGFUWqiHeQVjPC5KAJZCXUuaeyiheHTC6s5",
  "key23": "38GJy8MjkmhXC8UHkTA9eUgHsgHxatk2wDxU6ZXoSqcvmq4YuSS7xYUUdcTGYAuiXikk7NHqGhkXzac51L93VaJ8",
  "key24": "sZUJDWFoNB1VzjNz8uhLP2BvzLyCnE8Ap9NzeoAvHWQ6gK1fqy1ah1pqfWEfJe5xodpEQKkeaaXia9AB8nDkvch",
  "key25": "i2ye5ptChURpUzHj6uTVjTsz24j1Up8M3tgsRjxXHrgQ1EBFFCtork3Kp8UCCNB9gBSbErKn64dVNySEUVjXJYc",
  "key26": "3XBWomdqTM84kUMMf7XWbQ8xmS6UvpEXX4Z4TsGeABg9Rwix39kG8NZLMBxYmo4RLKXxZmi4zZ24n8uyRWWjidbX",
  "key27": "mG7G8bwAibLyChBN7hsRhCXjUcYBH2vRDMS7YVSRZgYmxgGukCW2F4nGFToXGt9xQWHGCT7H8cdpCMpgDoFLPmQ",
  "key28": "2fBztGwMNUMFccgC4gs8fLqVEQFSktxLseMJjGpsr3vhiGpYW8XsgRYMggsbcBUJAn5ju64o9SHSjNZKBTGHs93a",
  "key29": "5MrFZgM8x1E55ZQNrspaTsszbXY3HwsLepMhMNevCvNMBxyDt6oe9rFWTkgagetnZKScfBMmopJugXUbcXuMG9ir",
  "key30": "zYGEQT53n1hsVTh6Cbbrmwjud5nBjy6Anys1HUCS1cTpqrk5W7SN4jRnpRMnndTMFxyp3K9vkiGJKTHtFxMAdwj",
  "key31": "4PZD6FxtaQwCcNotyTejNBS98zpxLgGebxp3qgcXUr1L6a3A6NWCrfGarzyHubJvkKiDmxAo68i7Yht9Yf3oPXRb",
  "key32": "EVYXBVFz288LqjGdQ5ueBy9J5RP9433hK5xPsaLGRy1ErqkANqrgXEgeSPcHdJoAw34A8hvZsxzwMs4VoGFtmLz",
  "key33": "63HVNdDQZjuAatXN97xnUNX9Pye6gSotR6SfQXxoCvKve1W6RtBwgKn2SFjsXdcRDjxL6B6u3YWHGXw1sZPGToRf",
  "key34": "5FrRpTGMYq7nvUHQD5mMbSwwH2QbCKp2PLpvRHzJcQFikPWW1guc9hgWc6WuG6gqeZJ6M6uz83hV9oWTeoT9Ro1c",
  "key35": "2Qp3Zrh1Cjh4hPCDCrusREXz7FL6MMuwC8aFr7BwuiaHGBohi18As9UKtQKRPQiQRwN2MaDHndVtcE3XbBAkSysq",
  "key36": "N4ZyQ3vaGcyAwe4QYxbWH844TQDFimWvJ6yH9tQyqCx8YpbpftpPaWW7ZbepKnoN6UsJG2wFDrnfszUf25koujL",
  "key37": "ux9KzNh1b6v1rHCsk81Kj6kfM1xHDntARw3NTBvvRZH55y9QX3wRZqXjqu8agXW1bgzbJhcc7KREkstsPnF9Sna",
  "key38": "WNBVKQKSx4nbsjtLwGxXJwJxkJ2YM7BMCQWkmJJA5TxRxyoqFxp2zQQHPnRcJadRUq7TJd1q4oVWMgqrwBou7CS",
  "key39": "4rERckXZVV9z1mzs8r8HMvkxWcUXR3cxbCNmmb2JGriBZbqTbfdssRL7kBMKe2ykHKWxLFpBpP9J23bAzVPFTL2x",
  "key40": "3hzhL2aFS5zq1gGyqwtNyThx12NgPwLHq9sW57dNozDFyFcueTMtC5AzR6qm98YTphrhcymUgz1SbEEW53J86oyp"
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
