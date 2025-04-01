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
    "25dEF1HGacHqCc6ypPrS6yEgSPTJbpoK71X2aQiRX2Fim8y9HewVEA3Yn3HUa6fGRrMbJuqdqZtKqpZonC7aokNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38M14H9vvvknrq5YE99a4kdZHjoL7qEUc1oKxt1FKBkCmaQN5Z87ogeTaTe255LbN7YxkbU9AtqWzb4tLSoUmS8k",
  "key1": "4fq8iaGdhQSzowNWuSKovVsrnVrt5aDuisqez4hmGapLdHTvgWC4xZ9ayDkBM6YVzfBjkgVUkNX1YumrWzLUVStq",
  "key2": "2rwVgTNs9fWJ2LL3rTEv6nrqWzxsEosuEJxZmUokuzgwn7ZQueaPyzJRyoJCsUaLHdvoYEH3CL8N4KgQvfD3FDHw",
  "key3": "3Hrqg55Hxi2P9L6nwZoyeysbmvcwezcHCC9QACxdVnW63ffiSH1HQXkCFzY9rsHnHCn9ZwK6UJ4iBz25WVtYTkrX",
  "key4": "3uNcbi8nhg2TGvKsVZP4AkGNHJmKa1AcbdnDzQin4SdZQsvoEAt7FWB9AWRXuvwBMmerhec75j1FYmjjRTRDteSC",
  "key5": "4xgEEKSEGwo3WUTgUrsaCxwzAXUoEiF5hmE1PwqQbT5hD67rcemDhCEQTsh4NR33Huzn8eumUcKjDLPCbThdSvJK",
  "key6": "4YZJv9dxxVq9FK58yXr7Ud3YHUKnxhijBDV3pPv7CKkR5xCGz9ENjgQrVhdgnfciqqtDxubHgaHcavfseQ6oHiSV",
  "key7": "3vNBXrkR2yBTFaLmDZV4RWC7qhUBmVMpPtPx9J8poYEvs6UvJz5BEB9i29h9thpzDAqYVSUppzvKAdMsMjXtuDsB",
  "key8": "4YSrzuRRceoE4nnA4p23n3wER2hX4TWXajgwiC2ULK1goiLn6fMobD6ZG8FJooQCe9uTeZToaUDXxGD2wXDUqWHi",
  "key9": "3WddjTLBnZ3ATpVPf9Dw57t5Ru8mAaapvtoc7nprCUkVDsAYC2grr4RcyRNryhxuNaThC5CZopgBEJCbq8V2g9Qn",
  "key10": "4mM4AJQhJxTqoJS49a7987q9pEy6iXCm53GcbSJ5UCPKwXiJNmfU21RDNM7FyajwMD7jzGygTZn4pzGFKuNvNPv8",
  "key11": "4Yo44ZVBQTWDUvYNwEghiUG1PnHF5nRpwfwEz1qqyPempivXuwKDVoF8BDswKr9mm3PtbzqKZEPVCq9VLm8UujSc",
  "key12": "2NErUFK87GZBom6XmV4re7rqf23hzQ7cYkVjEAnb5frNNz8rUui1Mz9YNtwKCLzANWd8P4Qkgo8BfSRP6wGiZBN5",
  "key13": "3UF5sNTKCkqJe1tYrbdzhmvPLBLNC3eFuqYU6fj7F2URAWvV6GUpLpcCmScLxicch2E41sP19QZb34GXqz2Q7EKP",
  "key14": "2o7RrWbHxm5DjJ9nsVPVM5gHXphsm32EumQLy91rrErneVqFshgwamSJhxAJ4MMcj3vWo1ykoGnEXVqCpKML5bz1",
  "key15": "2H8ucy1NzaZmwPB5wNmnkqG82hMXm1etR9B9C4UocmrnGNyWxiRYRkwG5q9bUPaWPmKiFJfbDnxB4yzc6heVYqgq",
  "key16": "2XbQeCStkxh8aFEnQX5que5LqypFWXeugVsEQS4iJrmnpGZqnahk5DuCpma1X34nTaWUjofDek7WBdJq6KqKNxRt",
  "key17": "yshJr3rJC3d621G4kC2NFs7tiRPQqFD1DHNDhhkg98P2ZErYdYNByAAHEDTup5zC2Zsn67F7HrsSQfQ5LwoMAj4",
  "key18": "4Cs6Av2VqG5g5k7aiy6PB7eztDXYEnAsxriRAEfrb69SLvYhCFhCTJSHXbtBJTA2ntXMSGmH6ab4XmfdaExu1zoh",
  "key19": "5dErj6bboVVgNcpvgsYf6f34VYqZFGvGo15F1pjJztYAnamu4Sz9GDMCC2pSi6Hh31Uhv9azZPCoX2XgrRWAjpVx",
  "key20": "a3NRfLTtu3vTtkggUXp1Gfvdh33LgipzcPRAjLCPAHN65xz17t9sX8sH6YYLbyZUc8iYEcvEu4PVjNkk6Rq8DCj",
  "key21": "5kDEFnh8tMVN1W3DFgCGE9fd8knkxx8zSEqXLHB8Axm6v5BLrDU3HpP3Pu7StXUFJ5Jx5Hip1zCKmeiPRsMWZ8Ri",
  "key22": "PP7Ybv6bM68jCvgeJV6ryPQ3crCQS7d3AjE4F7x4ZLnu8Fush9jMsWXCgFKzLPCwdnFvq4HGVY9B8PNjMMDbA1N",
  "key23": "3pVsYkJckdur4akitQAHHE1sru6o4AyGgqr2KDR5CmazYYaEJ28cHxJVbV7kNGr3uaQuareUjivCzpQn3UznaQj1",
  "key24": "28PR6jQYCHYUgu8j4xNNXqQJJe6n5o3raj1YYCVMSXnHbMuamZoAweiWUhRgKw9N8hKP9TgPKaQZpPB5DvRheSkU"
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
