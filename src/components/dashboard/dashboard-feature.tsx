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
    "3edC3krNp3zLZhv3A4pB9fNVbSPzyoVAX8hKy6dBGxB16ToGT1z3oArqqCjbBGCHP6gRsUBhrHa9E1esWVUqyNFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yZfQ4vuoHr9uDhUXwMu6ebiAU917fCDKUrdpxkWKhFtSTVTSefPBNhxZ8KPYAvTUPYvx6HKZZkbLZPk5doEkwpx",
  "key1": "391xdEn396SvYG1vvnPBoEZQ5TmTe1gu5nrTRAAtLDDjWHPHX5GfU1jmAqHUBtaGNimXkNRb5SqnxaemtsbpQcUP",
  "key2": "HpZknmxBVo4ewku2ebCBa6woe1So9m9GJiJXxohxhidSihnJMVSsBsV72w3RhhTszVKGvvQDGW2Wd9SDvMWL3Q6",
  "key3": "WcDdKH5VGKQuHSHhR38YBdb7Zvs86zRXe7EqK2wiXuXiHHUkpiWPmFMEUXpxZrP7J1SkJfQaHSjo4Wicfp7SUxu",
  "key4": "24zTqqCFyUXvNrdLhHQfabhZK4kRGSa6aELdwJpwmyuzNv9GM7ys2mzddjg6NrMZiMznc3U6f22xFoXszrcZgUvn",
  "key5": "4AHs8ziBcFKiyVKp9QxX4v96Nds4zVzXTfmETFuerr1UzfY13hQvk5TG2D5MiPVCEnrboWgZ7kDa5M3Sh8VqGuco",
  "key6": "4fJ5utacxC2jMqonT7qSgsadS2WF2SdwL4aMHuiVyVH2nZc63GxRocSZ3oPWnga4PcL6hTRTiWnRxbTXfk9LL2ny",
  "key7": "n2BSJYFaaPf7CvcjKScgFyuk7mcFL9jQjpFt6VyW4EhsRTRZUCyQW2VRnVXRjaAzEtHmLVg2CePhjw5TrKfqKp3",
  "key8": "32QUMBBwRKKVxuUwaBbWDCSmEJchiqBi3gq2btMD68eporMD3cV6cqaeiE6uUpdvXaS3qAmCBqZpT97r12HNuM83",
  "key9": "2za5PuufoDnxsC1XoYFRzjAwNBcZTxEcb666vDBTnkhx8zLqL7cxao3Q5Xd8zBkA9x1F6xdazSQLBoHG6LVWkKbQ",
  "key10": "JeTtBvaVNdLMi1NCkkaDy9qxDcRJ7v8pGDxi5x3C3GJ4CgBuQwr4Bc7bQQTkXUfFRCeg1c7HvYiiv61gjuLQEQk",
  "key11": "47EHCVbxqoHwm7KXE5GX6jnxM379tC1Zf6jZcraqdDRt7a8aBwmZzgEXYSgzsP3ratrQguZMeTycStGLUS1ayRji",
  "key12": "5AtT6oUvvXQyz9FpWzskVk9ZfnBxp7DAkQHu2gKWLQR3v7GzGnPLzNTkMEqhUdKZLhV6rNc9EPhq8XwxNrc7PqrY",
  "key13": "5ryvEHPbsj49bm3iKXtGuhcUMZJFjvSYjH1PNUFyW9DvTg1S9PDcfUoCt18dPATGRMXdkqTqnFsTqLxh4ZYFAP3h",
  "key14": "27UVXAAh9DbEs2VASEXtLdw4LjGo46wHczZJqx63TF2P9TRRZWz9H3EwPXvu4MW9oBahp7tLtqyNgPpDcd7QD9vY",
  "key15": "2HPmhNwwV4pbc6Vakse4C9L52cWHPxEHwdzb8StQ4mt87JrY2mwRNqnnnJACpdkbBVQvYNAVMYgYparQYEbFxb4z",
  "key16": "5Q221SNDY9EmaLUA9Y52dtuQQ9WrNZPeKhtVcFq6CsgMEC1KY3sPS75awoGXLU6g92PQEh7qFgxpAYxAAKeMBnuT",
  "key17": "3J1MjjbXhoPNfQubyJGoB8NbWpUiw9Xp2qPxofqzM35BvNevbmJKorMvCELADrBGRikyZpgjhbh4un12c4MRRDuJ",
  "key18": "3oGaycSU6cYr6Nx29gyKADHxhbvmMt1B4K4jJDwNhRzZavfxZLH3XCVtJx4bmZcaSZwUs6vhsbMpMnqmCz3b1rfZ",
  "key19": "3N9EohLb72GBGGSzjn4n57SA7jtFrwp4n6Fr7wcK7fhXmKZMNKmScoyYGx4r9fGa1W4TznXeufv7EzoD2AitidPs",
  "key20": "4Y8do76hTUnMTjhgi7hEk1gkY1DQxX7UuyhV1rpppHDbgD4mxQZY1oA1Qcpm6c63d3YGDrqzr2Aij5sGAiu6WDE4",
  "key21": "2HoxAvNpsgbv4CceXRY7jD5JqbPF5hZHsjgqaavMXHNz1eC1nTnMXXHc6QR6obVBda8Rk9bfgNyyncUp3SYDc72E",
  "key22": "3eQc6tRFHvvLV9UUqpwB1SK117QDAHLNdBPzK8f2YM7PT2sTh85eZ39sWQk3UyPacT1y6xCJEFYwPGC7KMnQXit8",
  "key23": "4We2WrSKazRpH4PUQwf8Ksp5fCEwaADwzziKMqercvTNpFD3ryvpk7ThVVPinywP1hJZ6zBChFbmv8vG6rMvcUGK",
  "key24": "3Ga5q7zNmLwzzAfxPsiq7wNsNt4f4DnL3DLoVUKHT2EV7b5xQRAYMCEJ4Fatbiick8GGBUQ4R9SboM8s8xFsNZgR",
  "key25": "3TqqeBbkoqeto9ru7qDTK4kkiLJPDFqbYdfy74WrrCwWCqEmz3wbz69wVoKA4xf2ix7GwMDygxM46Mh7ZVTKE3rM"
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
