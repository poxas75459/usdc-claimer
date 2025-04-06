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
    "4vVJcvNzC59BSvqm6E2UzCoiaKnPUVjK3YSNxpYGsNJfYhMettmt2mGw7mK8aBrbtWkj3ksJrviwt9piDJroBiC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ycwJrstYYfxVoHJvwLQ8RBGWa41s2frdaNmDaFLPhNDTrJEvwinj1Q5iezhPt7Yn4JeHyBcfcxFUvtgs4Dqwudj",
  "key1": "62xDh9vrc7DAmDPp6YVwVDoQhi8TKdkAg9FNuMfvbaiipTE4kuZYsX8NH77Dz4xYAUsbsT5jmqHPiF35jJxQ7549",
  "key2": "1BTeEWrUWk6jcCgP6duF4orH3jE6htAffZwPdooQuV6YKUu8LQsgz1wQCX9AubCYbHwck9RtZqW1FnpD9W8fMMm",
  "key3": "5iWwnoERAVDxDEfYsZUGBUh3KnM4gvxfhe4Wk6JMNM8EgwpETqxzaME8PRwqiX5L1M6rV6uLo174FnUWafY76kLE",
  "key4": "2g9gHbkiaLWJFpjMfcdsVNhLqPctXUfAjUp98HVoFKJBvSZ1sxoH2jymrSozG1rhHC6zyESwUgSiNvsUBHFTdfmC",
  "key5": "iVmLFhd28PPjsX42ZbAqifTxbSDogycL5seBg27sZWX7ZWPs6ekwjPADgTtWALxQK1jJfPBLdYDJVHBBN3Gdtpy",
  "key6": "aLsm7xg2mhDCCcRs4BuSW6wuEdinHgkVzpevi2rJ3iMVyek2U4z4rSo4YfNuNGiWjgyaYoDNkTtHK9R7g9PgnxB",
  "key7": "5WMyY3HsLRvwMH2xLzC3mkdTec3vcWVpfoqsoBfEZqZJovucd9RcK4huR1h7s781mZbXmpye4uoK2fQG712mBSHJ",
  "key8": "cCZDQCEaritBAT4w2GcTfCK43pGSZ9AwxPWiyS5z63WVmncZaPta2WkFEkpFEHhsQ3cRw2uM8ynaDNL1BRZwCgP",
  "key9": "bxDfxR8HdwCdSaCzXZaGa7yfxfCB9AXDSnWRnkKSmX57P56qDPHEzQzChRA4vL8zAkDs1MRe7eGrNC9kqX2Sp7d",
  "key10": "4zkjTKQBZZzQ9crw4JTHvAjDEZu7U2RrNmgbDXakCjp1YEq7epZAQDsyoyX5UQeAVKVJcxFN2cgWG1HBpcdMRTn7",
  "key11": "2Jb523rWWP2RqEwu8jy3hZmHmt7nzN6wHxDa52wmoccHvbGGkHHDF5JAo1osAmF96zc2dSe971ui6NbkdKRgNox2",
  "key12": "23kXbtruECgAgWEktRhc8forXB6FnDj5yV4dDkKnXAvKP2DCBC1wkrC6D8xARMCbKkAjuGPfWKvT46jewnNXfovM",
  "key13": "5yHQC3tuqtBYH1cBzYwAhTmTntJHaGFqyirgxLvoHUFw6zeUVLPjUZpv7UPpkPKrwgfuLFyt5jFMGauZeL6fGToX",
  "key14": "5jXgJQeQoPVojNo1At9xTwEZYJoGEZvgHHg1tW72hNgduj8NxUjkb5wEMgLyfgkRDhfvJTSkQsG6a3L8Wh42xNEz",
  "key15": "2VYnwjp11yGLBquMmLqsDjSPCVFgKbxEPR5jT5YfpAm9yPY1qJp1J3kNZtPU5mcEPfQwJUY4EWbrngFswsSrCs6y",
  "key16": "3N6DEmE5Nvw9hJVjrDSeiJGkYzWyoP37cyE6qjBRTkLkdC4Yb22zRBeQgBJikPMxcD4kyD3ToTya4ZyrpdCGKCTe",
  "key17": "2d69JGhvFYwq4tneVMAFu8VhanTdqnHKRKG3XuyJ1hJTXkdm7JoDGcnKjyrWqGERv2gs8okBRvKr6XqxmHGAmihQ",
  "key18": "4oxtfmeRJ64uCa7zNiQB6bwphgHYJBD4h5cbm2db6FTezLiMx8r4Rf73JStoR9yjc17Crn4pjjhwtsRdeRESxAbt",
  "key19": "47qLi9ZC12KBkbR9teY83RXhwcXEwn2RMQg44fBQrirBSEHqe6GXypH6JUcvq2P4MNPna6FWSGeHkXmszGPVeNKR",
  "key20": "35i8WvkUaqMJ3ChE7AGf6hLxwhypgjBZ183QjdQ7gDgK9j1TTD821e4NmmsmBJEfa6aisAqcwKqdYyf9LSNjUtAL",
  "key21": "4RUGd8R3t4TiL3WxsqUTe86NKPNTd9pAGK9DhETvbUH7caXbqzbeXiqe4cG5iyZSsoYT7KvfW3wLfHoarLhzA33V",
  "key22": "5QcQ1EHQHcAJjvUoXXYEGpwHLCtHs6Kh26oZaZXWXXRghwfdir9HTNxk9o3QR93fVKg8tPWqUNVEscUFoaoxbxMs",
  "key23": "3SthRzHrXQnhJHNsFwscP6C8AehkPG4tFDd6qBMd2f4MPBmakh4H8ageTsX3XGCX6QjjisamvQvnpVYXLLomX5jG",
  "key24": "4foiAtQnA42Ebp9kbfMN4W5Y8pZf6mGQVeC9LxAzsrmsqvr7ok8gLRvnxGvT55d2E3mXvB3kTsLLZC915ZmFFEfg",
  "key25": "3VjFCstZDEVyBE5Rfi3BN6pWxTS5x5JBE9j9iqNTn55i2FuREDWMPV1N6KDvmMSbBSsFufcUFFTi1JYJpFCaZ49",
  "key26": "2rPuae3vZzwb4XXDsS4anRwA1tjPEstwVikAFTPTdf5wqM28ty6PQHptMHa6vs4aDu75JMGkScWr8S2fQ3BfCdAv",
  "key27": "5LgqU8EVAea3mBx5tJnphWFoeo1rXKwCNZ51CxqA59rnQx8hsdsYaM1jvyhqxotwFXEyFYYt7CM9GqQ5ewgikzhv",
  "key28": "5CfS8XyQ9CZ4UKXUFFDnwpD7xnXDC9NJqFN4w2Thk1qjk2FLnrRf86v9SkLR6cgpxmJBqcsdFnZyqj4S9ZmArSxQ",
  "key29": "3gTNZwf5r8fubeNsFo46twryRsTBzVtrFHzEoXW7dx9BUiwHShAVhrmuqkWHpSuxqhqwAtvGq6QN85Gq24Q5ULhJ",
  "key30": "22E2KMkN4XkbQr1b2Jo3Hq4FreXhp8iyJN6L3mnMnn1eDWXYDmh8qFQf8gtf752v6JFbPcx4zyud2DPJVWzgJwAQ",
  "key31": "23xGatWUMK9iSi8rTYH8qx8BSDmSo4s9VuaHppUiDHRYFXgke9WJN7yN2aJx1RSfysWbsQZzi6ExicgDwc8jR797",
  "key32": "ZWZjeBVXPGv3PrGbarpoVkjCbHeuuKLkffbtQJrT6JCoQf9jhYqFEiW48na1R82ZehDxuYcnnAHgyEVynpRuvbm",
  "key33": "4h3Bfhd8t8ZLWDiJUmadh3PcMLMkxwyJRXMQw8MWvJyigPfzR2W1CLiMUD2jG8Uc8HJ95ZDmodoFyqxXUfix1XJf"
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
