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
    "3rLcsRMBX2ZcCyUPt5y6HcG6gCpNRbxMgsBfLNf1cbuRz8cvgaSBhgPB1dcXmqSCLCQAAxbmQcjXcZoLo6XKVjMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EJi5VzEzj7n7X1hziws9wtECjDifAHHz5XggYgUNJGbKFvPEwbuhGkPBsvwRh9YpSEEzmXetBjmcaN3zFRkfwYB",
  "key1": "2ej3yxLpuA2qcuVBhQ5dAyFWus7SjjW4EcgfTozJ7wbEjjm2oMmAqftpPR3zMXZXmnyfTT6Qpc2kpDzKrNj7KNGM",
  "key2": "nsKUAgKZxQzddvy8pzxBY2az4ejYVjDt5px5ngmKrsjyy7poYogtDkLqdXjB2P3pdbpMKX2ubeu7Njn6VLQ2zSr",
  "key3": "LYHsUT1ws4RsmfihPc3Q6TmU2wb9QEPZWbZb2qBW7wgZHdfJ7wjLrGZokYYG4JyWxGAhM761f7cmpsHHFz9bwZg",
  "key4": "3JT8ENsDDEJTtS5F7z9MWFRMEuP1DKh7KBkosb7MCtrkjqNa5PaYiatYbJRbojerDD5MWNgVqQfVvr1iBCy1rgJ1",
  "key5": "2BeVJjPykp7e9i4V3c2niHj2eBwpn192nZdxDJYuWYt53qFN9EoBLkj7Yf1oRYY86r7PG6iEJR8kL7NUKcrKNxtC",
  "key6": "2nbFZdti9VMGh6vR7YmTXbVcxWyq8236XvLx2GsZTqezGEzkjjAWGtY5gP4jHwKE9573KWeJkLjJB3XmNvnvmXdV",
  "key7": "boEz3zVaAzXcirUkbCDSHf3RvrZRgSxKUkXsJUeBLswJ7XRo6veh2yiZ1Ae11vycyrPy6esJSKhUo4HYWAVHDE7",
  "key8": "icZ2o7fbuGkCCitnh4gExFevkVXkJ1NQe6j1MrhMDHwt7MrkbKamy4hFMwBbch9a6dpNwzmiVxFefNFPppGQwdz",
  "key9": "2rKEYnRNFYuTK36ZTAsSjKH8FbQ44KzQnjSz7hoYYdziN7Dhw16tWFxbAMmmdvmDkHwzaGpx1nq5VBPErbu2Enkf",
  "key10": "3Yh3yPguV8dnD11X5emy8g3U37gvay1TkPmTpYz13bX6WW7YzHJmhE2XuoAftBRmih45YvFCSAtRwVEjqwhRaG9q",
  "key11": "91sLgLEM3FgYSqGoB5RFKW1VjZMCHnG7vTLSvdEc8ome2zym81FR8soCxgrSfjPoW2NaTMYqeUWnwaiSBpjU7YT",
  "key12": "nM1P1VgoeMBAuCESFYpo2c7htMeqKpKkfAgy7TyF1NNXLwLihkEPB2Kfn9qGJ2YpzrcsYCANvYHwQF9XBV9UNyt",
  "key13": "ro17SV7G8r8khwgk67w3XniT8JRb59PqP1CzcDWs9EwuCK27Cu5wqBkPnqEmzK3Jdx3X32rWgfMmeGf6mvNQSye",
  "key14": "aZhfQw3jKNo1MhBLGpY7EzTPPvWeepvct6kz7PGPxhxUAw9Hkz5xtdGsqyX7ezrt92ajfH31mKqUbRKeoCvpM5n",
  "key15": "3vq1FEu1qPAj2M34C2jvzyJTtaRhrzqDCneSLsppJQ2cRjyxmaQTZuEnVDkjkKuBhmNDXSMqnxZvEZcnNvu7raVu",
  "key16": "24AjksZvTEv9hYmB27fQtBkH4d6ZwZpDy1dyomB9c7UCzTim97jXJF9Z3CvFNSLGgiT8BVThukWxti1uqCy5inM1",
  "key17": "5pjQiaGzc8dxebiWwzu4GxhRXoAMkMdWCM9uLXY4TuxYDqPePLtH6PF6kD3rmSCuP5EZJYXFMLBFZ1ptQ1Cn1vub",
  "key18": "4FYLSMbco7ie1vUnS8H24siJ9mhGtrdG9a4opSYPegswBZYtzwisGRNHiFMpob9QELmTUW1BWUfi3c5ruY7PNkZs",
  "key19": "3xLXUVakpN6A7awUG3WAtMaBckKQsatFhyhvZNiSWskCX4cC8uuQLMBxQYah1HkpctZLiWhGhyYFoHzgDc2qAxxJ",
  "key20": "5eVtgUFdEj27JtiUeCJvnZW3TigM98inP5h8ketqhTbJBh7GCDpxS3SVaDuRmAXr4C8yNutdpSBV6Nt8WUowRQC3",
  "key21": "NGiYLC8p9WDSLwde1MgiRMm5DLCm1ohdnQUEiBtKZXhSEJu4Mr6FQEjtZdpxUNLVeSY2qwCrMPtdgX5ao79zL1x",
  "key22": "62AdgvmQJS8h1gnFcNq8u4kssfaURLc56sJXSHxvfNT4i9oFeeaWTBosHWPwcEwtttZ7i16cGk6FjiGx6zryeupx",
  "key23": "3AtguqPfeLiYYnsvh5GMoFFBHTV9LwGPvw6a97oDLwHKjtW4YAAbSJx9zEHgVVVPKC3cySTwLwwWjpRYzCZmuXg1",
  "key24": "27a6X5moPN3EFSSN9YXBSZZaYaEQU6mPiGU7Ze9mN8vb9LLLB5wSA9TAqBjFYyB6fBs9uk5opb4m9NzY7qmJ8j2j",
  "key25": "4cjWFGed1sYLqDXK2NSD33Z348NwPanYvPSsvdR8VFXqymBbo92JKyWQGsnJa9ycJP1pj8FPGMF6qh8FJhkLv2qU",
  "key26": "24xJVjbKiTLzUJEbVgdkx59QkqXJ4avn5kKJKmN22WGSwTdHFQEUXdYt9bmgosiFghjQ1Av3GQ8vfEQb5VtPiYG6",
  "key27": "2meVoV2c28gMAsGzpSG2J1b3qUFWhZYMKzGuev3m1cmxKqw9iM9UTMGdkZgQBfcqfgtRBk3xkY8NxkNvKWXpaEpn",
  "key28": "35HfnifPGGATAYMETwS8uBYj1FBP7YzMDBgVhh9GVdSEqMqoR4tQvwYM3X2zBqNeL7EUd9YMVuRMhQqTCrAV2MSk",
  "key29": "621psgMXnYCYz2c9uhhXYV7yPYzA4N9R7JpKoobWjBuQ1rRkoVJXcRWpsg2JBW4zHpfEuQAJ8NMFNtRPED6sLjUh",
  "key30": "4xsuB6yYRew5UtmZ4Fcwen3ACF1mT8EfkPNsGiuYe1RoQRwTvA3eDFQYV6EgKS1QqadtFSvkRAnuzSqYZaQHMsnS"
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
