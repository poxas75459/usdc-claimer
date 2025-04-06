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
    "2rQx6Ge9VCvB96x3eTnJWWmxz38bq9N9XqCj5PHoAGHgoJFrZz7QxXiacNP8E8akEAKcEjM41xGnGNG1RyyAkrQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xa3NwFXrZA48X2NWkcNZWjR5q9y8sv5KPicYJHND7xdFjPcBmmT6w4PvUfmLNVqsmzFFG2zRNBeie8LtsDubx6H",
  "key1": "51KMVJC3myCPn4PuNwrjb3HoeSyxYaxxfaCuqGXWuvcSCSTNX2mLuTd1LcHppZ1vkDnRyPbfWNyH24iKZGsXTgR8",
  "key2": "33P3Ka3ibTciHbP9qdCRTQ7xjAJdJEyPMpLMS2SmH5NSriBr784mntY57DyMpAY3oz7vQRrMmDvcuoF8zaY4k1tF",
  "key3": "4mvL6nkZMTRjACQXe3yCb8HXT4zHVr9JyNf7wqPim83khq57r64Df2v7HKBYWfGEtRRack69wbZ86on2iUm1xaWo",
  "key4": "rruEjCtcAUS7aS9Qp1dhecm6tv4u42uF87HzfHmkNGwrGzdKwrBZL4msYqKmmutLJekBZiLPGubr6UZs1K7oWwC",
  "key5": "4oZHaChGZKruncGe2Cer8wFx1i3FKACiMS8j5p7Weua9HzzFZU37UrNkz2zGtLKhdAjhCz4JRnFxZhhNusNVnuwu",
  "key6": "5qpvgPqnpRuXnRrSWL2GTXwquo2RpoXRF7YLqGpJBhRDP478HCB3LJmgNfetHzELYcqzpHAHVc5yE7JuYnMJCbTY",
  "key7": "mj7QQSC4GZrnjUqbYDcAEVDVSXT3xrjDgigmnbEhNdWKbtBg8pqCj8ATdNNn86DFnRTSkwW7LL9XwZUdP7psd3h",
  "key8": "8pGRQtoJT5dqtzw1QaQhjn9yNtQ7ryVmyv5gjAjaEKxfXLWdmRoh5yY4CAG6VpfGE1UHMzkkd19UEDBCboccGoB",
  "key9": "E5kJ6Gu9BUXWQC3povBWKbzjS9pUMfum2hc5NN3QSYsSiw5QAxud4wsL2BgDvY33w7jbRppL8ZY4ZGMZqVygKnW",
  "key10": "5kzgkeFhyRrwKVPveWVSTEGWTuDcxJ7XGGgjCYYS6wqBU3pDaFfakbCedYFqVgNWjNTicHSTA1MPwUWvPuqrCGXn",
  "key11": "4N7Wak1DWHkAcFmnRhXkcwzcB75r5P586wjKr6NJLyWCWNWcpgppGrvnyMm4qRX1evpqE1K7KaphAiq16Ka1SZC1",
  "key12": "3YcuBGzF4ePZbCEBeD5K8XrrYKhdd3rfM5JfRi8LoXNnu4KdaTMjGqff2spfEgwRn6ck9dJ1rGDmkSYxXMsV8hWt",
  "key13": "vQwJPeUV5BLXct5NfJuCFqbhaJiR2tkouqVk5wr3uYkjsKET8UxrSAhzpqhkVoHrCtmFccZiZ3WNH2RzKcSHNrw",
  "key14": "5JR5w1DKaSS6uXtP6kMuUBuKKdskLyHBkMhCBdtuT27fo81Yr7N1h6y5zSyH9UPNFAsNwxvGpY7rebKvvFYRFbGW",
  "key15": "2f7XdoW6AiYhoY1Ep4q6hLZdfh4bVUxa4NSRDpWx2KnZegMUd44gLif63MerffEiikLj6Gp35WwTtjXyWi7TjThH",
  "key16": "26rMSFLPNrmbzwwLhATus3PYEUBMYnjEqTnEgf62cfD3NBw66rdLjYSTV6U7UWCw2M8JNaZcK1DqoFoyRrp8BQqR",
  "key17": "rayptXL7zyhY5n9rptpwD61CxdEKM9n5GYd28h34eZ3DGtfcHwV3PVe5MLq7sExq9V8ww7gjV3diVgZ7PUESjqo",
  "key18": "67qeT1zcFmwpf5AUaYW8nKQuhGoy3bjDHoC3JpjTkdLy7jdn98Fv6m5QqUdqjyNRmAEyAuPchjAYYhk8vn8mNg5W",
  "key19": "Suq4TWRmmq718TiKMh9QSx18J9j6ANqoukwaphk337iMbKK9iR1YYHh2RwX5LZvBBrGWW3dPygBimdiRf1G2vvF",
  "key20": "2GfXop6ccaGgVbytUnjo19HVFUMQrMkER7AwGtGamkKarBu3oMsfJtsUwz3d2WKhhkBDPbdzw1PzGyTrMXS1dt4N",
  "key21": "2n6AZvyX22o7pGk5e7Cg89G5zQ7JKmB1hPjiPjbt3iUzRcrdb3GRJTNA5iUKBAUyUNCqzkS4xNWQ3nJStQ4AFxvH",
  "key22": "3ZABa5xGroJe4sHqRNhZg2sqAcuhhxwKHjMx5kC8GaHsHcxDS5kohoJ4uViK96WQ1dHu8GxSfudEycPTeTqCmnHd",
  "key23": "3bMREuWwuSPtSbhjkZ6HHe2Vwc2pGEUtPJnyX7WBF3Atw9jS5n1B1YVKu3LjteETYyzCS46NE4CfDP2GvcHBJYnY",
  "key24": "iqBpZEy6rmJMnt7JKSwUuTdStjiKhcBiTjy6FCKN4T7SJomMPvsYzHbPBcPozZrjNFe1RbV1ZEMZCm8sb99boVt",
  "key25": "3kd7dHtjWUFG74F5F2GMp1ksb7ULkFKRXJ2Lvx8vP7ZeoxaWsGpPAhk3YU5ZKdeo2xbu7QeERykQfKxGweDChf8K"
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
