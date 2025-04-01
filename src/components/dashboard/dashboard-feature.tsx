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
    "2G8XkJsZfKH28yQt8rvTvD6uHWHyfmrRvNkZ6QAeHcKvkXUrQx3timymZ7fbhBLLE1CZYe6yzMQDXgCjcBFkhnDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HcrQCJHEaxPzNUnY7eLL7fSrJRJD7yfueVf8k23WWJGD2XBV8NJX6qhYhxkMtF1vrhSdPFC9HH5DQo7VXtxCk1y",
  "key1": "3UunsbSgXW1g3Fg96heUDDk3rFX6YzNuW3yfb5zQvT6sbZi36uZ4Ji7TKGxr9ToWSeETgFHhGaLFgMzBCAsxt2E3",
  "key2": "3UYoFky3Bh3whDfHXYiiPfLzScyigLcoskF8oWD2n8bmVCoUMnhJvAoQMi4Nuj4aixuX6nZftFrJwdeAopPWs8PZ",
  "key3": "4QS9cBvdM9GY7zhmM66gCcf8azPgDoBZYah71xruw7FyezdbxDiyW9vxgUz9sfkf3LXjd3Ucix2hY5R1v6yNK325",
  "key4": "5xDNS6QnWoboD8Hb9vxqRbccY5NbHMdzx9hGXcXiqSWuKiRJkcTfyB6rKZWwE4mQP16nQB9oCCU2xU9RuWRhockJ",
  "key5": "4e9R3bs67JXC19tjMRxsu1VHQqjb5sx6rnaKrZxyKsuvUMjTUmaGec2Lrde15tPtx4YXAevcEZs8u1pZzjG2AmLF",
  "key6": "26E492ZUGkuSZhTV45LqkBrHVeCbaRUnQK8A76JRutLhm9Z5XB7Nc6Noo31GWsaL8QDyoJacHCqArPcTFRNSkikV",
  "key7": "3WSXT1WwhXtyPWm2a9rCP4sJy9gYrMmqDzFQ7YbE1wJevULp2Dnsr6Y4zFw6mcM9fUabd2gSWUKQAh8xPB9rcxoe",
  "key8": "5HTrBs7dWb1cdKAFo7d5QjsyhxkRx2ZsGaLUwWaJeRXSF2RWVzcvHmdpEs8y4Ere2EemrKCgeCcaTcH6oSb5Hc8L",
  "key9": "3ScGN3mwSvVswZT44jA41Jyg1a7CuFrhntLShqgYX5n4c8hXnZ5nHvfkJDUeMYfFrBJhZGBNnwtaNm9trqHuHXx5",
  "key10": "23amC851UEevBvuAeewk2EiApb55Mh7TpnQChZXqZfS74pwz3s5RahhJwDCcEeYbk6srg88FwzPsJp5EqhrEKYW8",
  "key11": "2JbSzDCB3MsDv6LJKG2zAhdAXKR8QLvovxPDtkgmVumFBGGEY9FwXY9kCyqL2nRPyFpyNLGh1dZ9LK5i3VhYDmML",
  "key12": "3rx1Sk9D4vRbJDaaxFLE6y3tqLSx62Vfqf7xVKB6Z9gYycsdxJXPjB5GRUvuVsm84ULupp4FRcWGekfysvBMXBsh",
  "key13": "cm82z1Et29WECei7NFCHPbMQqg591U3g7SoH7hqMwPeM1hQmQRwY9q8ifadAHh2CgP2eudr17LaDScckZRV771u",
  "key14": "gnK667MBr7C5P98kk559BFuhQibgDnUjKvwbAXwG6e44zMFHzvJ4wfqtHZGTdPpDCsFUZj5tuPdHZ1K8kyrwT3W",
  "key15": "3DzBvJgemkfuYUM6W65nTNEoUDrkTexFGCHgJEBsjDqNwYv4h3qTC4LijwR53uLHNWEoYNmUic7avyBXdfXJ7tF8",
  "key16": "4FjBQtNqZyBCmZ4CBkNyJVxSHoouAWF4jquggJ5REWh6vddLVDPeAbNYjEEBKLoijkasvXAhst5VNGJUkC6zjQQK",
  "key17": "2T2bpm4Y241igRYKsiPpdKQMAEAAajEaSpwXDna6ubepFSiv3MmcsgW96ZqusV76BA9CepJ6WizmPXNV5nsDZbBM",
  "key18": "3Z6d7fpuTLxtmGDR1fzX7Mz9LvcaDHoFsLtQren45JqoYejsFrdqrCiiwQVPE5Fp22swbtFxM5PyT9AuAzpohhN",
  "key19": "Fa9VNXkXVfpG66TijVs1MzNh17sEE8u1jisukF228vPAynR34rSu49mE5x1uEeXuba5ijRM5nhJuxdqtG5sz8MS",
  "key20": "3rajXeTGBBZs5bvujQ36NZC4vrJY5pJLG72G7DJCQAi4SA8JYvC97SdewFwJGDCRpbRGhPXvB46DKwTYzHanTEBQ",
  "key21": "AU2fwpVw5SdrEg2hhqnLA2QZrpXi7S75fiEDQv5Vwdcv6vRusY45zHKyLG87CFq2sveHPuHbJpRxFbimH2GfZy5",
  "key22": "29yVsBH623kxViuPMyDPu52XrvtZnq6VPfteTJBp9pNcjFnJm3LuzXzc75ow6Nc4R3nSkcL4jv9U8fQXwkwx2GXB",
  "key23": "3v2jbK1GkvGYLm5uDcDpPJduFUDMVnVMazwyN28v1GkjocqyHyNFtgDebmBi896KBTAthvg36okdmsti5d77WEhv",
  "key24": "3MHjA3boogEM9jW1uajo7jQYkVVJodBmsTitrH3VjjBgmEZa57PLLGWiYs8JZvzpvfij4qCTM1LkyCn8p5ZL8xAd",
  "key25": "67g6b88nbiEoq2E5ybzZv5hSXRNGpiVFHJDvtgEQP2we5sFCGcd427kH5UkdQk15WevsuxdTJtWhpRQ8VafhGppz",
  "key26": "5oBErhAB23xxAFrYCdS1DzJUHJ4fn5hrHJvr2zNjRGdSqSpLP5H8BSYYtZnqTWsPAZsDR9SPE1wEC1T7F8tB7vfv",
  "key27": "3eEcnRGZainyBw5q5Reov1KzV2eKKo4zq5W1MinJNDjHSL5ekWFoxhvG4wyHk9GmY5a51fsacpHHrAU8d2ghcqws"
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
