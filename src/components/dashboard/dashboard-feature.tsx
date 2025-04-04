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
    "3CJ822dEZudMHsoTmBbHzSxtDU8cernSi6cwVYga5cHUPfkt1Zi1QLmY2y2g4dSwYkJDdQoicnkcfBb5fz3hcEQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k6ihmFQgx7HrnJziFKJZUYCEN5utf6Hndx3zkGLtPC4to9M8QuNqaVbYCmMj2hxVSPaSX1dozFbgp6y6RuUkvhN",
  "key1": "2ZRyk95eLxKjBW4dpUuN6MyGKDSVmqZGR31dkbthwpHUUx91L1cCzQJPVMfCcSe2Gec1wKwhSHkrzeCmsnGuPN9X",
  "key2": "5yvStxL2DJunp2ixBd6XB82EX8SdGGXMM82UGvvjauaFN8BND28Wo2x8v3gGgYg53ET4rALw9P8HYQ12x6uhnafx",
  "key3": "4L2poUCfj1xar7qfd7EeMGm4SZWC94uX4T3QPFGEPdDfLfAo87s8D5VcrMRsiSnmu7jFFRS9wYELtgFSgSufi1Pa",
  "key4": "5esGgkaWn1W4kP7BMgYPbXn2oHu6v7mntYpK5HTweXUhTkdbXj9p4dSFznxg18Cmugmc8s2gUBtLqH5bP7RDbV5R",
  "key5": "5sPhRrpeko3L21iKBniN9dtTK7QDDjF1kU3fXjBzXmWSP85cMVZdNT68t2eQi8rGgtZ37ijPBttqvCxaXKHY6Ddt",
  "key6": "5hH4BeRHarkucRMS1f9ZEA8gejJ7Tk3De8SB8Kcv1SmUhvMU4eKu4S97wTyjcJsxLrQz3Apm71wyj9wJUfgZh3tN",
  "key7": "CyT22yDs3T3Crh2ZJ1Q9HUMB3zoxGLCZ8moqeYvAr6zfeQ3ETebYXsMZphJBEQW8iM1VhrJu3vvC7HFPp564o8H",
  "key8": "4mz6Fzjcvz4MauE77ByYDSfiw1v3Qcc4RwbQiVREL3CnT7AjKLDvs5vjhf3W4Mevnz4HqjC4tLYwe7Uk1k3XnLsU",
  "key9": "2f5UdrAPRfeeVxWNVZaYbQE7hNNrcYdVqmArLdHgLF9DKHaxmxYoJdHMrTHfKGJ1SK6FRYzEVzfT3GumAWH4qo8Y",
  "key10": "67NZGmDCr7MUyz3u4vJthps43wgHzRiWyir7gDNgDWBQBaopJyrwsVH15Fasnt5RzUqGvVZXbupQ7vckjWBBWJiA",
  "key11": "3iqoc7JR6sQsakp3YBJ5QkqNWjsfv8dEPKjL67HK3j2W6MdFtZ4xh7QsCuYAztiwDLT35yD1K3aQkQGaJKynXmiv",
  "key12": "5iGr2J4yk3PQRacqSf2xgUzyhLZ65DgXTNkxtw8rPpsLgsocsPHC9fagFmbzDaRawUUCGoFDXXgKCgmNbP1XM5vv",
  "key13": "4Dfsh8XPRXMGDDBJJspBcKZRXV4sB5RvWWbeqZwGDJyhNkePnHsyStDxMrj5JjWMcbe7LJDghAMSrA2vQUigp9jG",
  "key14": "2sGyc6nA79Qq4jpkuxo2SxjxygSoNUdbLuMQquQSaR9TstSQVFYxMFdhJrfYnEyMW6iskzqH3x7n1MBJiLcTTy9W",
  "key15": "93sGbL6cXs8EWU95fCsHDQJbE6ubKukZG7Dq3HbLoZm7WMS3muFdv2ryVaFTWEqjX8C5BM4DE666jyKnnxN5MB8",
  "key16": "647q2rkTc3bFsg1sjPQB3CuSodm6VJyDdfEwb1HSmhvMnmzJtgcWtimsKHiEzE2vzL8eaYchwGMA1vaj6NkyQ9Sq",
  "key17": "3mPaztdMcckEpuEWfqocPEdDAsTMf49RAXWQC8LUUBPneqc4Xc26VqxYVhWyrSzE3NA6jKx6N1yqGU4x5DC3h1MJ",
  "key18": "37YaLbVHeruh7A61oup4hABok8q5JzrZSY3abZBFUhVCHbFu2Upbo54fngC8poTGCwP4U9QMn3UmvF3tEZNvtanH",
  "key19": "4GS36bJ66BiYuCMb9CEeK11kXPX6wbe79LUQR2PwVobFPNauorPA1bc1nG3U9e7nzB8hehCeG9ALnfuNneMuo2Ky",
  "key20": "2efNu4ujYsTL3a4ZQw1JfxD2YWENw37Sc7gs3Jg9mhtvM4V1i9eVLjmPkBAySgY1pqHZTwjgESAxX4otVmewczbC",
  "key21": "NL5mS9L8eDMWxvRPVZZ9cyuy78wa88TbGDPBvH67r8MaW8zg7pdkE4uk7tTnbpPN37jx5XGWFSbSYgv1KB3mg7t",
  "key22": "4T6VwLNJCxB6X5W7idq94XHNT8gWvUAML4qaRhzZVUQmK7PKgb2CwXSXH2DRSc7FS7KvKW1xYznHc1kK5ep9aYyQ",
  "key23": "2G7MXNMnUbJYzhecGqfMRGX47A1oJQ6xyAM3dtM1MWw7Xpzf2ac2nAot2jMLiw8eN7iXZs3qDh84MdbKnTpcCyjw",
  "key24": "5A2yS1ercgvT7x6F94TgKzy5Mg7jnBrsF4TKR3X7sEjNwCqNDuSDQbvGvB4CTuusCWNGpGodhcokfHENuHUjibdp",
  "key25": "iv1cB2pWVNfsdQQAK9uAFUxKUqbv3CU5us8AnP8V32oUT8B5spLhyHE31EKHteSZ3oFAZmEYgGQSDk6oeAnAmkr",
  "key26": "4i1Vkay2GHhhgsZrnwzKmEYHhAmC54KkGffQJZUeGj5qP7hWxuBmEB1yLmezows8HsSUjKEZHzrzGcXiDY6pSsx",
  "key27": "5T4X2J6QPramgSndDaUiUmpRRz4XQQVnVfV2N3YK12PgKkFnBuEYT7Q4UJtDucawQUw8sHNg5ead6zY5nnQ7HFA4",
  "key28": "3HKiiuwaZrFRzmnQVx9Tz37yznWZ1af7Me1QPnqweL2GhxA2Pu936SeSqUxg1LMojt3Qiia3NDJ1A4tJpfeyPZkG",
  "key29": "5mHY89NBxjsiEFRWBFQ4fVFvo47D6uLn8kLEidmyw8dEboRSWeyEynjb1n86P4vtqXWCyMrMGTvqzNnKSqS9MfJQ",
  "key30": "62cLVA4xtoQrjeyhRik3KuKoBTu1uaLpDWq3YyhVDeBfRr4o6LJtXSCYjtQ2w8BC5FizdEfnHC5XHZfXF91Vry7d",
  "key31": "tuyp7JvGEW71vcTvcG1obMAdfcZLqsWdEwmmiDJ9YE151KFBSitmcUQFT8u7PKaW9RiQKdJ8zzv2qwGEVqmhxRg",
  "key32": "3RE5scAg7nW9omCtzYWXUmRPuDB6cq4EWbuT7Pu43WqBCr2a4ABVZc9J68JxoDAoPCMUmbVQMVWBRsPHVutM541u",
  "key33": "E1ghJoDCykczjUJGvS1DzinZ1qoQeqxR5A4zuwZLHKD3ZJfW33y7Q93W5ZZEZvszhcPKqidteHEzwhx76LT7HVK"
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
