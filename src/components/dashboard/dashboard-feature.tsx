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
    "2QAU4sKGmLCvfQNjiX5J4HsMNSnGPaLjRp2QY5mkFZYQPhYFTEDTcMsQ66JYbTpmd8mt68cDSAzqWqvdCjWug3E1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45GBTTabnB8NJXqefxvVQcsjXRXy9aZATcutaLnepujAjPDUifQR1vLkYiyZ2dPRDQvm7bvr724gPxXtWsozAAYo",
  "key1": "3MKthPm7Tmie1vWzk2UaUNRaRrFLd7aRAkCULRX2U38iM7BPbpPYJU8z17mqq31jsaD1Da4T2ZCrHnNDpqMyFwgn",
  "key2": "5WLdN8MmUi5TgrngrRbALaaaRiu72a4N4cpGg5BaSohrFNDQoMRtUJCRU87cZofRyHqh4AmGnHV3PCN2ng6EMSWm",
  "key3": "5Mjgqnj3ryqPqLNGBxmgEmm8LQVsmtMB2UQPRwndLgdXh57YeVNuj59KXYWsUjCN3Z6MknNif7t4RuwgCkWaPrxY",
  "key4": "3UazQsUzBFkMdytEeNRiGDveGaFfJ7n5A3MQy6YwHsBQce5AQpckx97pP1GJF92koC8qFta6bs7fKu1XYDfoZHbz",
  "key5": "3Z7GoMwrSYr4oJFvB4Dw3kGXSv8PaemXJkvyj9G7AW7MepTc4DE3AQDhWDHsBicyJQjnsdM6U8iKB41yzEZ4HfJg",
  "key6": "3yYRDSNJAxnVaSFrCT26s8ZUv15f11G7hUcHAuubiUABBxExrfiimUiKzDNZfHKePpgSs6VKgsKwykoFcUSPqwbp",
  "key7": "2BFze514yv8eiNgEJdyargLrRBpHyQRRCajxyoFtPqomtzZUY8yvRASjKT9xdkrGgnrCnWE6YMg6Vm7osDzWBBZU",
  "key8": "51GTZDUA5GDkdEE5zvJh1GxLZttjZU6ZgnUu7iTJvt8ZtdGCEHqb1CmfPU3HvQEJFxgZkypR9Bdt6CQCrndxp6Rq",
  "key9": "Aa1FwdzU1JuN8cYBHC16BYbjpVF9SXgLbgA6ztp7yzJXuVr74iGnsfonH2zf7KcCeR3ys99dk6FiyK84qiuX4Mg",
  "key10": "hRGCSs4zNfizRA2Y8vJgXij3QFtPDYEfWk7xgXLVPDnRDt9cT8K7Vz6fxKYVd1DHFsbhpgWyZeJuyUixae37eZd",
  "key11": "5TWiRpvjc11KwND8Y69uNtT9qvNK9tz9KGVfggsEYPGVAuHBrvoGnQETKwy425eP1meCmS88ZUVVKHw59XNDjv2f",
  "key12": "zb3bjnvfTrBGiLR5qer6Z5LjL1d37gobHB6Dy2BCa9RYEAhSG4zv4QHCLticS3Y5fMUZc3Bb2jsymH7bEyVZy1k",
  "key13": "2bd6V2pHfnJWGPJeqNEXkBpPvwDAhtsfXHCNnxZa4oPafDqqFHEpdEMoECaRRBXWVnyTHJykQAFNLmotYRCejfC1",
  "key14": "2Xdij8f9H6rQbyNDqseTjDTSmRfssmosfpMLnWWYcdt9g8n2q6Z1xg31oyrnV5eQabyWXsmKUrKKAh2pDPShHHf",
  "key15": "5sRFq7oQefrxSNhENC9SxqbZgMAvFaJPZSGrjwun1nXCgsvwLRj2Yb8G6jYvFH4QcoJQj8tgXDZXHCGVzsk9Udko",
  "key16": "F6geUPuN37xoeaDyY8be2CMhdRmLBXNPEaHc6Ckav9YTB7DbjMc66JYTwHbjfWThwxqoSbYsh4rCtdKxPUBqoSm",
  "key17": "5SpWX8xbwcRPMj7m75Zjhki9xYWZSib6GwpDuqccZraDpbmS96AjePv8q3JKjySJt2PN5qPEN4uwD4VjeYka1hJh",
  "key18": "7bym8Jcorksf4d99Yk6U9AKa47Ky72GguLHTWPehU5VDwDbNnKFZQqNBG4CJMtcNW8vZPmU4mniaYjTuLSFyLKj",
  "key19": "3SXe7MRJuoAzJPDEU7CkLbC4Jq4tUh1rXr9BYdBkQHbLSsMLExY4S8YfBzimc2uEBVbRCnQuUEfAfauZ4pRmzzWQ",
  "key20": "4t2FhUQScfB4hmarNhwzBra862d358Yr6fKnGgbRUATcjneUZ4vCiNMWmzsaNmGHWVkMKSSpKWFGy7xHTcGfga8H",
  "key21": "39GrsqyUKkMqsaDQfyRdeG8vqEhkenAtjqGRriLF8zCbLrnz3LQvVFeX2QsgGwsuWLNAVCGoy9v3Z4GFYCJCimeH",
  "key22": "3fK7boYs5CdJBui6HrzGmnnAVumpVz8YcMmER2H8d3LQN52AQ319dpGWpNeyjsAfA8oatZedbnkr4nXGEG7UU9Gd",
  "key23": "4BrfzbJaQ32aYmBpqujWzoUDH3p2jh6PoSoMwSRP3J4YaBgqugCwW1H5xjQzvU5WJ52ArEfLRe82kk6Wq9qwzXuK",
  "key24": "5fhZ3XLiyGaJWxweB5YXGgAdTHpEC5c3orxsarFFnP4a4c3okfDRZFxeJGVZQqun5jqqWoAfmmeN3KNaE1TrvYas",
  "key25": "5XDB81FjAjumGigza7RLfU5vvNarBzqvXpTkUVn8r3FSPa6QbXWtK72MKuCwe4YchxUzbRYPHs9dpLmT23n6HTDw",
  "key26": "Ufxrgpfz9iwdCXSr1kTMe1Ma729YzXpKcrUZagH94WiMHvzdAVKGUSvF3BsJ91MXcMWuv2MbXaFgM1SEXtHK94K",
  "key27": "4VdpQUpKk5RoSHgTu2HUF2fMRknc6U9zqfQVuY26uyXs7nTEwz1rTzct8sig3Lx8WoqBfksWYMiEXZvDoLdfppNa",
  "key28": "5VR93pMhPTnqeKbZ6MtEdKWhwTXoWHr1nRovrKxuGXiteNunFKWEpwbxeGBMbvrdLE64ztyuSQkr48sTxDhLDmxm",
  "key29": "2MBxUWPyKhDWicRSJ4gjVGTLT4AJrEZUzV9frJyQMNUaL4Y97zVEirZgW78fRaNrnu74s5Ca2F2kGSbEdkYrStci",
  "key30": "5jmCU8uqjhFpKQ13i1utFZoNMKsEQfZJZbAafSegt7c8hGr55zJVfXWkxH2YuMJhXvwQsyz7WhXkEshDc46na6hU",
  "key31": "4io9PaosMEKfUbKXHHZyuHgY8dB9aXPsDTJENKjZ71PZEHkLh7hmZrpvqbBCErvYuGhpCJKWv81B1GMYDxWQjLYQ",
  "key32": "BNb5YtQV9hdkbRYcFnDcPdtVrANC87mbYSukG5xpMbXgyJonD7yN7hQ8JcVx9nFG2vX4nmfDS4zL7Jcrzz4GyKK",
  "key33": "hPF3swyN6XJc78zPSrvdTK7C39zdRW65nJD4DXMKVjMZKJdXFMSFCoDtAMoRoqZx9RYWnMuRZn8h7o9XFaY2zn6",
  "key34": "YJvRXmTi4VYXsz5qnTY1DPTX4cjLqu1QmXLipwMCYxxwZNqdgWDbnMyNhEjHZWN5tGVfDfcGXvyMmScy6LxamrN",
  "key35": "4MQHQ5kWCcCM6QCBAZ4nbKNRDxZ7v9HSQ41AMf6vmzQYswwPgdXnFyTgFJe2dfqnchVHywvMZ1C4SUg97H6oie5F",
  "key36": "2tkgsWLvvEuv6gcuJ11JyBpPkyeF7VmvKiXhy4toLbZe6MzoTkV5UHcswW62eBZWhDHSzXgrNYyB3yog3PN3Lkt7",
  "key37": "4xHWMCoJVYwn4TWSebnefqQGqxJkwmJ6pCqMR4QjYowto5ys44zQFDUCVsXYTZ3hx4JULhx4A9LSXfDQYnN5dPq3",
  "key38": "2V7PSQhhKLtwSbYdcVpMWBgLZcVepYYLi9gqCHPatyyzEHzNZdbJRf2pq5ZGv5TjB696DocTWMLsnMwY9noEv1ig",
  "key39": "5P1t81Fg9VU5UAcJLjxxMqtgFKVjnh53Tkv3yPgjzeA6bBr2voNoSb14fNFSKeoTJPgTK5JcvQyLckyJsTGnUMzf",
  "key40": "Mr2a5yGaaGog9mzd1Lbjxozm6vigrJ3ucC9rwy2RYRKvi44YPo4k1JEAVRLsGLU9M4hA7wzDtd2AFGVh7TCVCiY",
  "key41": "3GJ1CUTFdGuD5bh8E2fqEieeygKfyhqhSniqa7svgqmLjKCumsNM7zdVJR3eXFKJsCjYQ2cptzjqWj5eKSFWRXam",
  "key42": "4pzNfyRdFZ22ns6q7Zf4MRm1GbUeD5ZcQSZeZc7JzeVgsVQRDCR2kfQX7G5V1EKKW9KWRD9uu3BTCT9pddxiVwth"
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
