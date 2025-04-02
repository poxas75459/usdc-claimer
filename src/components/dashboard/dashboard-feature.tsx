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
    "5L5xQr3eEpEEUnNSgq9DKfG55L3GjeJhgHkk6HfvX7b4KrCTm2HWAdbnEc8rCZf9zw9SrocbtxrPfatxYQXjo3MK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f41nC5nThpRVvvHssnGvqc3uXneZDj2U2EtWUHAUnQaZvNDNttPrB3QmT6ADAv9dv9EQJ1HYyr6F8SM9L54f5GW",
  "key1": "2MinVS8sbYxcK1mDy2Spz7ZHT9R2VzCiv5qTewmES6nyBYcwdf9d7aVJdWSP15occwqUzEHqasTGJXQ5tR2KZpYo",
  "key2": "5Knc7n26JoHxUzXtX9LuojBaFRFPS8jwCvdwX9UxYphPpQT9xU8DgMKEZ5chhBhWNrtiqrq5pd6Q7tXKQ4foJMoK",
  "key3": "5HSZuBmZV154WjsSFsKvKANRLQBhSntCAHtSrtxb7SCbBzc2eHQsqFttdrN5poQFBDZhPVfntt2gv3aKVQRarQoK",
  "key4": "2vwDrYGuvcu6CVVgC2awTqRWVqW3bNGKRbnVu7rtQWrmgjZiiBxnewtQDLs8qCiaxPypj5kdnCzmwg9zNUWjPsNA",
  "key5": "br1vc5ueQT9yhd4qTCq1pvcZcuawubfJa4GcsrjqUXheTxaVV43Wqvyy6Gc5pDuGjvbhnvgWVhwhbGmXGoRbbwE",
  "key6": "4jiNpmMNfwnxpxghdJf5qGUrynSNxqwPJiHehQ5iGeZdq8gU3ShegRCzrbbxN9qJKKFUKftSJQ3iwLFnkfE3cKup",
  "key7": "2Uiyv8eQXyDDeN9Ps9v8P33wbGxeGfG6y6PdiqRYFMiRgneFixVG27mArzhJAkhwH9zH57uFgrvgjoncKYjk8yh7",
  "key8": "fbvQsaFQkDk4dsA8Ft6orqCf9DBR5q4md9GaPVqxPGSZRqHdF8RmgEyfp7fipa9uuKkogVRN5Pv6rschFSX1cjm",
  "key9": "23YzE8zMwBVBVydM3bU9SAa9JLesrQoXJqftWFe6wJ1gkVcL1VK9tWdddNi84FxUQP5FyyMzQ5tVNYTzcWxos5AF",
  "key10": "32N1afqidQL2gak4JCb8pPhGtGusnT5772eLAcYeAhptfnt8s1N1JC99u2HVLJGjP3wYFdM323zDjM4TqSFnsx7P",
  "key11": "49au2MWpoSGuYRWjAU7x5JHqjHZbACv1wVPa6dTj6KvYPJi3jn9Vrv245PVze368BSbMR8Bwe27GSK5WamEC1bWv",
  "key12": "21rhsChEm2zsLdhsRjtczrVvPXbC294XTRFpnwpiLDyrMjcjxhLN98KrHidoHsKMDcs65gL5yNnuLCcuYNzv2dfK",
  "key13": "5n9iV48tTMcsyq1JwJ6Ps5DpEgxP9Cd3JYJN97t3P6o5pEVSjAuUQEX6S671GPAKux9bGLyz4w1t134MpatQ5Jeb",
  "key14": "2YD24cpag4toF19A1RjzsDvbgA9AzScu83mJ1z1uL4t5eKYfcsaj8pJpNkdDdGfaRnEmUT3ikz3Se6kMYvP1JMwF",
  "key15": "4Q6SLYoV1mokmK4rA7hiHvpH1EJBAqGAUDEeLBuUiGAziJrgiwJmTot5jRNFZMD6nRUaYsMjZa26bC9fUDamhWg1",
  "key16": "4yX4Gioz2Q1xrvXsTaGuX7CHTh9q4j5wMKToqNo5Ds9WfeZp4iNy6Ai5wFenhgLjVuEoWJWzhwsdmuPUK46vtdPz",
  "key17": "5YDqJqiEpWUqouNxyLNoSjLLF2fifusVGN883k1CDzJxuZdNPKv416odjT3fa3dJVEjysegfVuwcgxfbKfstCf4n",
  "key18": "3oXiDKz7tsK2BwPHu3BEBZxYV8sWNsAt6NctuS6e9b3htfiEUzA2WTZAXwKsF8Dn3oJG8aYWr9qLA4LsqgPEvyGw",
  "key19": "3tdkxJbUsRcypNsf5kfFE22Lf6YXAQMd1Wj9tw6BP79RUToTyH42GdfQYtF7M5HZjLo7eWpMnf2BoSpc26S1UAiu",
  "key20": "3v8Hztvi5qb2hNsgGF1tMhPAvFNVQQwsFd5gcyZj5PrPhjuUHYNMb89VR4i5KDiwqjZyvTeok9XoFHJD4LUKgvw4",
  "key21": "3DKgajuGUSdDH3FHs1oUogeUmfwbtqzeMBSSstL8zJsH9ctrpBDb2nULsDisHhCdmF9Mhso9M1FnehJTV3N3WRBr",
  "key22": "5LjG1ftgpRZzz2GodtcyyXaAwdBz2pvVh9K6do9BWLi9un6Gn7Vyp7H5QHu9UqJPe3UVta9TtoAvhdN85WZrWQFg",
  "key23": "sjGtg5ZKdNyQYxpz6UAtUA1VKHy8tDmoYPEzzeWnR1C133ksWf89r2DgLQ5UzxLET8ciza1EeB8y6udemE71JCo",
  "key24": "4paPW2zacooEXcBWzzgBJgUPMqT891E1BDywEiH9afvCuRx9kYomLKgPJU4iPsnn6ZdBgc97UzsjSzcoHeKmwgma"
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
