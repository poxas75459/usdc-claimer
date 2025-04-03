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
    "39sd1sJjMkNgbKrkZexqWngfiSRH21b7YJmUkWjqRXWL5NNC3mWPCupw6o6jumfTNZEtudjLgvbFD5KHNAHmDsy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Aeq7pe57yXXtA4wZ8PrPRBCcAzCYNdogCFE6ioMnGJHFQw5gEXmpAo2aXegk5n7vNMjehYYNUcYsJicP2C4j8MQ",
  "key1": "4jRbWiDVmK2FoDc7EgLvvo515haXuPcCNXr9rzRT34qjtxAGdsvEWLfPbExrFY9h6iW76Whm8qTro6UHUqUXMxC1",
  "key2": "3QC6hwrBiBGpWu16z3zTrB2YN5TwvNdV3CSBCsYgz3dx5oR3aAJSUpTv8iMW9PJ2Skmq6iKHM9iv4U23iku4dcQA",
  "key3": "3Mnwk8xLhXnFR8BRUUfPt3zXUZHqsJ5pd1xMtqqgnmnP2U9L2kvKSQ7NGTu91jmaoW5wtn6S9yXDD1ozEf74GcL8",
  "key4": "2mkT4D3UhB8HKAqmvMeZ8rAiedu3bkz9kMfSnS4UZjtABYf1PMM69bjWzrkRYpK3HxBSrLBw1VWrBo6vGYSLfSDM",
  "key5": "5xzM1WJn4CFjxXuxFuj6k2AHp2qk7BwfqEeJPxTJQ4sKPicR6s8f1DxVwSqunLf2qiGuVCLJDAMEsLdKkGEAB8s9",
  "key6": "4z8srzaHLMhJCCswgoEsXUrVx4pUevd5ERkWyiZmYyFfq6bCMuT3BtFJW37BerQy2SZURJ9zfLhEMoauYCsaraFe",
  "key7": "2PsbNCPWftHc3ddAkeNpNHMJxJmfBAkGXCG48dpmFBA9ypK34KLLbBqz6jtAuy4uMRHeFwBV5LwixswHBuGwpadb",
  "key8": "5EDJdyUVghBThnVpXNLU9XMBffFo3t3dKnVPgCP6wG5LLBJp32yXtYV6wYjXmerSC6sLEnNoENSxqdxaYsctDqgN",
  "key9": "4tRct3eUrbRAZ1ssUvvYReafMuHUDTFAPJtDcU2GdD1xCehVZAeWfLoohBs8cvChgZ9yK3cEoNbG7BWgCu8D59XP",
  "key10": "57JYBHyrapqUepTDGSSSwf3SDoSuv2iexNGt7c7DETbjYq8F4aNLcnSWjxmg2ZrgLrGEHJMVWC9bKvcaWqWAcKvg",
  "key11": "7ZVm2k9kFgpauEGd4NPdsSTk9E7Cwr9KsZLfSWsYB42h7xDVek8QxKyvTc7pnRQ6QjrmeAUD6sZpck42enRHbUr",
  "key12": "2g1HBSKTLpWNfap6XNvvq5xjiEs1Qptbvq1Q1Vqn3S4GsXfQVZH1j9kgWcaSRqiu2XGD8GK9mgMtNben38WBCZnr",
  "key13": "3hD1HDpg6xvurPF4gdSERZu2YLeP9yVGAgPCjCPjz74WSpZKofmWLUNGXJfZzKf2YdscbviPhdpkWtenF1WPakqa",
  "key14": "4jXeFPorQaLpGAp8e5fwWbYGZhZBkiBmVVCkpW4pvrNXsjPJaATY96M2botyrGeD57Q3DoUHcVprPSBe3t3aWinr",
  "key15": "Nvb844MpcRJdThBuPq6zrNzLSFBXcqYiN4NgKLULr56D7RTSNfSC8UxyNME6YBgM74VyrSdZnP3GV9VAyzvEkbu",
  "key16": "3ud5TUJHGhXqJ2QRqRXztibfZnd4LfeF4TQ99bnwATJcssm9yJJdFxHN6AQAMm9KGij6w1QHNHFidECoEkTkiyWB",
  "key17": "bNvD4RLnWK79YXbzUeMTsN9A7oVotps7k2CjcQ19CmFDdfzbs3CKd3NZdBQJ4bK8eKy6APkFEeVmTqDJQAKejFn",
  "key18": "DwUUmtfLtEB4Qq5r96yNvqCrBuPpA9fvC4Zzi2Jg7Z76Lh8Tr9kuXNU7ig7PeobQYdYbY7jfkdw59YXR2Dpo4x9",
  "key19": "2c5zqH1S3rDXoKBCT7ACbYUUsuA8rjGvvSV4k33HTgqpXddTCxmo2kqnd7mqtrtdwDUPMtvrkTXyQ9teVeL2GKqB",
  "key20": "39dfz8j58zxEHAF6AodfN6hgbeLuuAqFeaN3aaV2LxLuHJVDQdt4uWNs5bzhxmaKaMpAAS5u6QUHX1aL7LytWrm2",
  "key21": "5TgiM9RY78SJkeCK6CrUgFhhV3PUSW1uk6J8Qreao1efMrXykMeyQ82NPJDB31iwUWTpqemBT65nLZLGiC16UD15",
  "key22": "PMD7BphcjKwaAZ6SFFzWHkmUG3rwj9pSYzuDJxheQseV9TwHxrakeXHiz7cpwNFNYQ1bpjUnDqyYVwTsGxhS7rw",
  "key23": "3jL5azS7Hk6rcZKvCiXTsvJJ3gN4Jv9YYsd7m9g2TAd3L4GpufHDHUVKKJhqxULA3QwQozj5JFqJ5H3B3hNwsTLr",
  "key24": "5MKzx5JMajVadtgPchhb1uzjD3DX6YLaJQYgbHL6JzJjDrUsfJD14aZeqkbFHHXfF4UXdfJfikMsqJZXDp6tq4Cu",
  "key25": "4Hd6FxiCja9hz5DsUD1F8GjpK3jZsa2YQjh2Rk6TDZo5iLgVAQDdBGZeBpeRKryBhYpibFE9H1p6jxQFR7QHuamr",
  "key26": "43Z5Mo8UBDwWm3NgDVsVqhvzSBcegrQyytKFaNwVxZCYw6nEhvo2xTbjajyn98t99aCEQU9TXnhF5h13joupDUT2"
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
