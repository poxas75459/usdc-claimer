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
    "5JnbqpmNpbTHsbyx99preBCe82sYMoGcoduC8VNB1aKpnqpya6EqTqC8FzgC6toS1H5fZB1RV4YgvUTVgULvWtFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KiqyGdWt8CLHyEmoXe4WaX4MsB6U4fTM7dpKkty9pgPfutt4UEQerjPTGpyMqnFszsZBeM8n2kfYeyoXbFGDZHU",
  "key1": "2YAf57M8g2osSbNG9yvyuGXY8ZYuiwujKftCo99siAvHrW9FCQEqxGZ7L6vkPrN17sUmBUiNpAPZARoM8jRGQe4G",
  "key2": "4SLFrDFipAjot445RoGzo7FSmwwKMkyp6NyqtjctBFWEMbKM2sd4fHejGRQkrWi7p6P1SPwFUbBvtsbBEgxsW9eE",
  "key3": "47DaxdkBKrCNFSQh3xosR13NuxKfj4jr8SiDJkfifvwhLdJw3PV1E57mf6TcGj34LUD2iTZZ5Vjawo86qiNHkVyo",
  "key4": "4SVJzQhPn3ptrmDomwjLKXheVE8SvyFZzKjZMKZmnbFZt9sPBejdsS8zBJfBi9P3iQMMEfWdhdE1LPyaGABrcChi",
  "key5": "519Hu89woRAUimPJBfXL6uPbcKKNn74X7m1cft6GAnUxSFmMX2k4ci7LNCAsz6JpaTG9Mj9izmBtAY4ks1euaD8n",
  "key6": "5w68KwQ964rzJ7RUn5oaGAYZdZej8NJcguvZ19eehi59gXpAPiikkVE5WzxGV2Aas7bqWMAwep5RY3Etn4b2SR1T",
  "key7": "sDSJsxnKvfr6knwZLGLi3dWVnJ9o7ykzpd12Tgdh2hxrySNA9xDS4uyJ4QPvqXFGvBUSxPBD89wmS2b6pvJoGMe",
  "key8": "2T9EPFYTDVzcTtcRB3hA9hH2Wg6a1nfXsBrJeJC5yzSv6YYQoeGCj3NDzt9RHW9rY4K9ZxKLSvccYsZdRPesiT8h",
  "key9": "62UJi8SjEVcPAE31w4bxcgfji8XwcJkxGbBkjC6oKZS27yXKearCJu7SGAVVEmvfu6jBvgcivqAzQUQMLHJVfos",
  "key10": "6jdBS5qVbaCVHsUnyn5rS8wvUANdg5D2AThqkM7N3XAjZXF7UreDrT3HppNrKHixg6bvWPKA14ZHZvRyeBWJpEi",
  "key11": "7vbgWrTZKUFMApnfECGDXgurxLVnm2C1Rkvo4EsxAFuBhf4JgXH3fb4C1UiUWpLVJacLyrbucCXyybwhmDqD93X",
  "key12": "3AXgGF5xncScPeS58kwwhgibBABradr4VW7BpbZNqYRynnjHoWzQhAiHBMmj3HD37x54JK7sLiquUz1M9cFwn8B1",
  "key13": "3iUd3rjRn1UBAHLVGhRUohwgidNzkj6GFsu748aWEdaUC6pHHyFnXXhFWToetV32yie9M5P2My9i9iWWeqfUP9qh",
  "key14": "66KdhzvSu6APHdvvE8n1TSi97KgDvZkHTTkQQ6kQEajdK6SSt2ESJqZvcLjyyMWfKTSJ2JaKjoj9by8RBTKjrDmG",
  "key15": "MRKhBGAMJY3fj6JWxo7YHC7ozf6eaMQ6RjS7YbKsLaqUERR9AqddyT8ngH1pi8LJeM6crNMrheJbbL3LUnyeHFz",
  "key16": "4mStnyM68FTkdsWfsHjLckGBF4bF12YSdMjKEpetPFAe9DzbDVqC2NqBCe99v7jfTq68A7RwpdtsjrvKnMrX5C4x",
  "key17": "6wTwLcFHXdGiKTgW4FbqWAoy4wHthTWWZip8QQBbbXpwav79dUMCaqQhzhXWiDBv2cUiV7NHegjUfeMwyMpaGGH",
  "key18": "23Rek6GKKi4iKWHeqbxgnCNqjKBRUP8WMbQLosuwxdJtXGmjALRsfR35EAAFeRLGKXKRQ5ocJ38Px2BtRB4nrrts",
  "key19": "mmVSMc2raf6YbtXZtNgm4sfve7QetPWnoDgex37ctKDgdMhb4ETUYbTSLUBPDa7RYuntwpGoYmCCFgJQiGcYuzY",
  "key20": "32Dh944w3KX3M2o7Zp9pZLqhpwvJWTAsgFD7edhruN9d7aH876iJP7UEZtfkyETuUuhwMhgk935Tj9YN482At9QT",
  "key21": "2T8r4n6X7kBbPLjBZLN42VSy72LwF2bSCZN3XgL1E1e6HrY77NGzXKHEAZ1xpjxC6j7BWwi7KYT39k92YiRWVtd3",
  "key22": "6BjLdpffUM5EvwVd13wLBg1MhZS7ugtFcnqTpemc19gcHaCaU4UjU8HdRxjToYYuX4ekXi2SYu2FtKihYQWzxf4",
  "key23": "59aayvZ7DaiSZeVL9BVVi6istNWaFZU51fqhSGLTWfdXzH7VUFZsRtmYJ81LcDFfnpzh4axodTuyLFkTn8i285n5",
  "key24": "2uKvikTHDpFZM6u1JpQgqucGE6nieTgZx8QC26eCD39W7fFZkCWVNaw3JrrsS7SLnNXGfKTZqvqhLzTgVAASMCSU"
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
