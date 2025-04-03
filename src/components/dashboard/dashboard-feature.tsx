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
    "57em4cUoB9tZBDhbw3eTSvJwsekVNPVrf28vMU7HweVPkQnS8MtvxB3ZpbWfzTqGX9NerbgAJAfcoyVBqzAavWh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2axqAWFNgVJp8JCYDjYZicNpANFnag1RKdcKBexdq9VCGWpSdswVmvpViJPwgP1Sdgy73hRpmWJoQNZrAc8gdCQS",
  "key1": "4sctjNQzHEuKDz3hnTgSwosuDkuDKs6ikhx5A5UzykXzrQ11k99u7SNHXvgESFnssPXs4zHnrzXGFvA8L4jgi15B",
  "key2": "3kRAQ5kCbmP2rfiMnKSN12LLGtBuet13Dow7hiypiGBPVprgJa8XckDesP7nXqyrxxrcjy4nbExLWv4dXyQwJkAg",
  "key3": "2hMcBz6szHRTWFewJ5Nzk1N38PyNsWGbXsW4vGWvcQtMn9yphxfhbbzUoadjK5CmxSMsjXkdCQfWktZLwNMLiByE",
  "key4": "212PGxpusto5ZP6Xz5GAXsSXhReUQUXV3osVUQNsR47hTFn1Qw2qFqzF1UHjHug8YeCMd9JdvHE2WsSpxrpHDxoK",
  "key5": "4k2RBV1rFwKHSw8fspH6AB6AsyijAYNaixeTueWJY21od3H8AKvMmbyt5qptWnEKKNRtRZjbcBZPKDuhYMJL8eEj",
  "key6": "5NAWi5Snfv4UUMbwKLWj9H3NGxsuVM4vWCuEM6p8yRjy8ivmpGhVg7J5kgHa7YJVsewzZzsY7TMaprFZkCKQnmvA",
  "key7": "fhPAMJo3hhfSR3vq5FCehFb1RpRsEYMKSwTqBZ3Pop6h4pBCp8Cy6rwuA5xcjq8AQZ2hveBC5cbC9Vc9B31V1WM",
  "key8": "KifmXuihP2bmvUEW7EFQVM7S1qNBaco7e7aEirWVoQwKeKyx41fqgneadcka3zNV4nDWq7nKE7naVfpvTyZtrpC",
  "key9": "mkPY8KB48kvaAci6oy7QMKuFzTRtdQKBAYy6ZLWeTKNVwR9iEgFygHZKy5FTNBhACx5pmj5e76psjUow4JVMfPQ",
  "key10": "3APkw43u515QiauhBMm65aCsUx6ooCa3bkTNvaWjyNtXKLYuwXACzVMwZuW8n8V2J2gqNvGF7KTwCrERrptjwGh9",
  "key11": "3YJTZZiukZ4VqKzPhGBjhicxioM2otPRLnZsMnh7QMsaLdHRUyPZKiHKz4iL7n7amEaXA95LR2rrERfykxvTZRca",
  "key12": "3ghyTx4eSLT3ZF3VdVM9T31RtXhMYbGB4ngnF5MEeuGaJWFXm6he9B2JoYwaxH4zC8vFwMVpK8r3UV8NAZR9qsSG",
  "key13": "2dveg7EkDLAwW17y7QbLNgXXeq6uer6jeVpZL2EucByVU2CSopLVvq8gfxSjZzcu1CXtuAueReBuBAeJU9pH6RnG",
  "key14": "2UCPegzYxzAFzx6PAVugT6E2NaJKjUGhy4qvDSvYDVWVu3gMHfVGcW3JWeC3tjRxfZ3uD3afjNYNFmjvx2mqDdQZ",
  "key15": "FX9tYqHzSnj9ezXGnp9hLdZVqKrqBSZY3eRpWeyqUBzY4TTTS7hSXoHveB73CuMxqStgkBmnB9VjTYpDLEUnQG2",
  "key16": "2LfcoWPDj8aMVfN9otFSLz6vRa92RyvV2FwL9ZStTXHbtBkLNFN44NcwvsoECMBorR1PdEQrh6ssEymeZHjU121N",
  "key17": "2Bfz9mhRFwgx3TZEREjD1Kgscw51sFhc5LxSGyJF4DxusC8EXWijSxUi4bfnWTUSjzscpHnsFutEv276pqkAmZGj",
  "key18": "2CPX6AFoHhJzin61NVdpvU3Vd5rYiKF3roJ6LXKT7nQzmA9GmAMKDdfm1ZoneeSqks6228vHLrrZeU9z3brBcEZT",
  "key19": "2R247KXiMtZLoTmN2J22WodtQ2c6qDVajmugQESpXmGDdeGdTKG8t6xn3yvvhWY9DZpFmoRsSx5B6n5ZWsJxHwgF",
  "key20": "3pfAGLCjy4GtcKj2tBViWuTd8ruT2oYt4krnNLyTAeC7DzUpfd1SuZb1Q74pQmLpCn4Zo6J6hnNQPM1NZ7D2uHsz",
  "key21": "4F8tMCownmZwXa7MWT3kPKPmwsvhKGKBL9tq8pTF9qSwgKWQmLkfb7vi2781FPvx3mMtAPmPwEX2XPfExU1ZqM9H",
  "key22": "45jrLXcd3Zjcv5iyHR1MHgbAyGXdP14gQB4pyMoVCsvVivt4rM8FBXYuSHzjWSnup9zm3PMoBBNjXWaVGdHpDmzE",
  "key23": "3Wq8RhtHZqH8GEfgZH6GbRLuajp4Ri8j2Wmw96JjCKcrJSmFJZ7KjEiycnoc6yiZZT4VcMjB2mFW33daZCpB3mG6",
  "key24": "4TtnwQ9rB7nY7mpEqPsoUPNv2gLxk6MYX5uhkXGyobxozA6SDPDRJrwbs7sieDEqb2ENcBLHXcqpoQtCJzgK1Q2v",
  "key25": "44tw3N1BNhRSg7sftrcLZvVG7NTarKTbz3zVvTvXHkxiZtHkSPbyRJfRHAiBheZGg6SdS89vgEXcEDmpRo16rUUc",
  "key26": "3ymazgCdqZNu9Y6MHepM69kD5wkVH9S1etNHgNH8GdQUR6eKzcoFQVL85TEF1h9nj3S8fDBzXoZ2PXRNeRf245V1",
  "key27": "5XVpdU6Rv3VHZrxypvrS6aSb4NUAaskQjLjsCY5UitFKQCkE6pmhQiLpAttePFmgyQnDBeBrEoNsPnGFXmLvGeij",
  "key28": "4HTrfZTibJtYbfdS1dmjoGjuS8H8QbpcAHiV4SR8pqXWP8soZAEwQMDdFXnQFFPJmDbxpqWz8yeejbvRHpUBKQLV",
  "key29": "47Wr4xVpy2ucsAqhFfMgNz6LoDg7bTGyVyR7AbBnHQfor1cpzUyMzxTjRi3ec1wfEWmZs9XKi9Nw6sD3hogLbkKo",
  "key30": "dQ1embrMBSXvrbetjRQmYLpXBv9PTooj4m49UNpDXdFTuztoWRfY4yEC9nRRgvsGppzWW8gUx3AWGtZpTgns8vk",
  "key31": "3CJXdv8gmtP89Rt86dpA5nQTrEbj6TQLCnUVysbj4XZztVxGL3bXY6X3PGFDeCBEfPVXuAExu5WJiNCu82tTEJdE",
  "key32": "634ZiKkstAywMA4NE5TZ3DrzcQZgcKzXhmy1rGwVLFqFZVVSWFYQ8P28T4NHWvsB1SCv7v3DmZDuM7frWbweAT1S",
  "key33": "5iEjfxxyt3Amrv7abguS4w6RPRLuBiLTNZHMJt9m17J9pBJ1zX6qQYov6hUTyZFYfvQ8nQtuhpSoWge3ThqGjFth",
  "key34": "2dVMSqB4t5e5bBooQqNPBcbbqctY3uymHeWkJ7ePYmMbrY6SX71RkcbxxPk1JZrU48P4GsMc4b8hKy9Fgkg8DtNz",
  "key35": "4Wi5suJTWSsAHzTWDU4bYZt52FyczWosL8LQZaobiHKM1BMmEe4JDp9kwRdY3e7N31MRGdW5hGByUrdtujreuLHq",
  "key36": "5i5RkAkfYMN62oaxveLiWacohYY4TyzrNbTYoExboN7XFLRWRtPxBgDDpsnbo3nE8HZP7p2BYuXQmR8kkSEHj42e",
  "key37": "iWQcxbWGZyBxGYqPgyjs7P8H7fk1fyNtM6h5p7BRXteib8oXHeAPuBuR7cuzPgYu8bh6pGiM4LG52xzet9Aw1hd",
  "key38": "3bZgjGk9MuPSiSMN8sEb1vVgdekznM9Ax6GZQn53D1ZfUmv37MhNskW4o3C5woGn1u6LzxTW7Tifo4boYfjqJ9bC",
  "key39": "25RboS1xsTedxVDpBbUMW5Xnw19B3nxLZ8oDTmL2DNwYJhWL5q2vDaKexZpA2Txgi9U5ySYznkKBkZSp2Wnb8wTT",
  "key40": "4Ab1UUC92gMAwXEQoWdSRnaLfkTwc27gT6BdiQuTwFA84CY3vQ5JLHuEbgDeqqc29ois6s9Bb4NnNVUCFipWyUan",
  "key41": "3cBSEhS9JqK3j5iDnThJAE4ddqAmkn4T9xKQJMJN4CGD1njHk9mxdvdKwC3jqidq2UdnBEZgNEpkSmBgdhjUFkoo"
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
