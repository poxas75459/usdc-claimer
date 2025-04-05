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
    "4F3nC5LGa8dzqDBKzH76tbeHjczHifvgnuPQp1h6arht7Sxat71qNfFhrCtFTbeMvDnKYQ9ftMsGomLP9DNnopWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FpbnWkw1w86qDM2QbFhrRHFKN6gpTTQ4DFGNbVfuyjTtz1P3e7uaWVfnWHGVPphUuGBY2RyG1YsXvVSsspy7rqS",
  "key1": "NrnEa5FKAvdhWBTsidstegQSUEH8fmKmnoxbjzXdRY1tXW8CVd8e2QrkiKAyMYho1TiW8anKDgCMtgSLoNY8KNn",
  "key2": "5GHLJSbPfEra9BF22t3cWWBWV6mmQAd9dCuqPRe8FtmonLboWhEJoTaVpmJchiidUZwBk5zEGwkmZMrHWq2rQCTZ",
  "key3": "2f4WYD6UsJBWQfhX56x6J2qbQdaHoXBBDCTxzc7RfbJbmqZZQ9fnFogQRTK7LWr4FW9kjEMfoBvPb4DGRJSjPiUQ",
  "key4": "sPa1F6FRBPMbU5sAepd5jRgMS7F8AxS46xS7tJ46RGRFuCtqnN2kTH4hA8yPTmeHExSpLUuhC2DFRKfxZERFJ2d",
  "key5": "x45cyQBk5QKLYC7iwj6PWu3az3vRgoR2HNiYQoADP4r2pGtYH71GSJ9kaxHTkyJn33afTpWHHUp3fXaRtc9FmkQ",
  "key6": "49aQcioSqCNAKrJ3XAGb3M9rwV4UriuGJVLfXJX7hkqHH3QvmNK8F87k39d2VCPPp8Uqeq9qvCFiuxoDTrnTGk5B",
  "key7": "haCwviQVAmz7krv7Z1qKGckQoUZ8oMgXmTyjb9myE6yrK9dmeRzktFDU8qFTKFNLLX38Gda5R33VnLu8eRV3Tyk",
  "key8": "2afEMcgDMAKCS4u75ufG5n298E3CMd8YpFPPvXc98KmsKgqyYrggfMavzYZHEBncfXY2FZJmvYEyW3WcV4ZSf2vC",
  "key9": "n7ZwhQ3u3jUcrk118QUsgtZWd4uRhufCphWTGbetaDu1tdpp6sJYrdscHnpmeizRbwhRUgLFM1gqr3nUsjCRPAQ",
  "key10": "2MBPS54mxBLi88d71zc8c1EZ7RQVsQFvzHx43cxT6qFg7DkVE8NUowsHgoQhjxD1pbXDhivpBZ1iTxoqJQNUhuJf",
  "key11": "2LTqaKJCW5jZtXBnMkaczyX83UVnDmyvSQvTQ5m1XA9csffmzDYVyX2pr1RoZJvihAF4znaRg38E4TB9UhUDLohu",
  "key12": "5RztYTDqJ5YyRVHg9ovsSyE9e6augY1KXMZitzgBVsKXkBpAZHoLtptnzMpDM3eabV5oFv3QU2SbtVcdmxtKqhZi",
  "key13": "4hacc24Njibp8LjJuzh2Ey8xySK7W3LTA3DRw7w2bV5qzpRUF74FvATPQB98waoWY3XqXCgStrNbCtSkDQSvA9jM",
  "key14": "4ssM9Nmr3TDDvYGM3EEUQH41bwxDFH841yFDzTxwivBRPfB5Nk7ZNtLYSKgqdM7LgkAxZtTsuZHPYNLH9g69uDMk",
  "key15": "5U7haH3tgwR5JvpHUnwc3yy6CEPVb7bVJRE922vD8JgBgK79P2nRvbPTjjUUF9cTpccvB74APXLu1r6K8s6LHLEb",
  "key16": "4nfAKveJkm8UM9aEKLf7siwJTjmudAc8J4uvq6rAfXq92R5EEZM4ZWfAyBdLmxJQNgEyed4HZS93Dq1UTLCcSnJL",
  "key17": "3Ne5KZ1Ydt7mzThd2jSwVZ3HNytAVUB4yxaGGg8W5Se6Dr9cTkbNgXh2RpF84hgzBQ2Jj4QMtQxs9z8byBPpiVfu",
  "key18": "2LoYwQyBVwgz75swavwgLyvrzaLRKYdURaDqWNV5tqkGSJSYDTPctx3n1roxd4s9SDh2E1CqUyNRKf4nEx1ozpeZ",
  "key19": "34u7tTtY8kDBwNM8DTTsgNDipRf5r3Zw4sg7JdkNuoz7gCPFCBTLiGc64Ve2ERTtcPdU2Tgv1x9BM2Dcd2EVBftK",
  "key20": "51MVzUh7yEoo4t45cztpCSvb9ijgtXVrjKyi3gN5hzRM81NmpaNZmgreeAFtS4UTn17LQNQ4QA19QgKca6gLcoaw",
  "key21": "4iNusoc9s87U3pixMmErtDtZWLtBqzcBYv2zSzLRnTghS8ygammjS6E9goKfwvKkq7KECMENe75uu9vjXAF6jtig",
  "key22": "2ReA4KJeWw4Ncn3NQF3cFQCzRf9A4NRkqqMru7nGc2qSeozkknXiS7qm3R1tWQwcJTSHY3ebjkNBrGPnsGZobwLi",
  "key23": "3ghuErNHKPXazjoQyMTsFe9x6k5quWYZC8Quj1sLhjEvWdsQkbzRSVyQi8h9EybenxdnSaJkVdT8PbtK7y94nF1S",
  "key24": "43wPFvjZ1cfVWT1QWCEoj7JZ7wMRLPFJqJ3CLg1YV8XqH5iipyKk4UofPKCK6z7QyAKjiZJFetnnR6FGLN1einSb",
  "key25": "4zsS3vczKSKuqBAYrWnZBmwejZNh5uWGswvMY5wTdhC4NxDRQynQkX9vkd9xAzc27oK3BsQY8XEhR8xf8U7NRMP8",
  "key26": "2sxtkC6yfyigKsUHZoha9mqg1aPqSJjHgVBqhxVr11RZK4ZrCp7YccAuB3QY7F7h6aF45QdnRXBHM7fhnKpKcDTW",
  "key27": "52YGTXPGuncQAL5GSgYcy54D1H9P77miz6TZVPi4UkkGvMGyJ3UKGHe2ag71VY3GU1ZViGzHW4mnp3GbBrFv43V8",
  "key28": "26bQYwA2NGaojGvLXyrbB3bsqmJVU82bZuTM7d7q5JNJJQ8VZw4sB9fhTyYhWSWLmxGKkVZohYbggdRTsw1aJQbo",
  "key29": "44iiYrVvafZtyJLSpfyTTifRCyNEdjqRyP49MBqzR7pqbL6TZKDDbV7uyVdLmHN1Xs729tHBmJEug6T8NpvkLzDd",
  "key30": "C4QDcPo9N3TrhqKuhUqHwHx6vWfVTkCM47mm58WiudgGWckMjfv7oF8CKqwAbjB3Pi6vqR2FyZ5hiyy6p8A1K9p",
  "key31": "NNF3vhzZMjQynhJ8jLh9aW1MvtoFHEHJ2NyrtzYsyL4nCgxp52i1g2DcPgUk3Gng4xq9YDBSoAPvdwvxnUAEHVW",
  "key32": "5t2FsWM1UuSrEuUhurYs5kLu3LTqPW2HiktXo7ST2CPavhjq9icGZVS6Py1Y4nGQR8wNUtoRZamqbwzZ5zvuf8ok",
  "key33": "ASk3EVjRb5kasiQGsypK9dKMcNuAATGoNTTwrX5BoeWQFPKryvaarrkaKLvFEJJ4u6Knv6mqbuSdwcwNcSXpb8v",
  "key34": "guEQadyuCEcnUmBT9ScLN7TNkcoSSWTiJfSNZAEysX1qrGNGZsC8QEgwCRbUvuD2j1MtgZ6Fxp6RuM4LWG6TNDQ",
  "key35": "3y63AX6aqWiWbPWUxmEU6ZVLySRvHtsLHhdNBN1pRmJmZ87QLnkwgc1226EZ7NugSdrVJXeguHETtBrXkwxCDrtE",
  "key36": "3GrzAWn8narPSXwJCusH53hkbYoHYD7N4n7GRvMoCGC8pAjRetD8FB9JcQcK6BJ3v8eBdNBPNgMXt7D5d871EGaT",
  "key37": "5LivmMDCX2vttVeFqrV88V2qbDWHURJetzxWnkqWK4AjPWH8tTFE7F1MxGJVhxFj4m1hffazEy7FK6F1z4ezxVdt",
  "key38": "5FrzAixYzcjeKA615eTV3LNy6YANqEM7oNobTCRKJipN5qJ2avbUqEzMs2P84akJVshvREi8eXtLoJeyu6amNi3c",
  "key39": "2pSzbHXd4QgB2PWXSHuqvnRhPat98Nej6f39LckSp1JtYQpGwTqNKRhfkUD3guPDNPSwL5U6igb5ENjkYX4MdckT",
  "key40": "5T8Jg4RAmsBJZ46XdTRTufo8fTNb73muJeWh2Qamq9kB1jSXSh5mAFywLDFyD4PEgjXMAMxDzELAQqPzZdrCvaLX",
  "key41": "5JC89LpXxitzLBqBELGixttn7JbZpAbKweDj2tzmhnxgF4oCs5yzEp96vHh23dSP8ffn1pAxsDBGCTrKjpY3uExr",
  "key42": "6289Zp1s9xitumaLV52u5g2vWTPk8CnqT6bdzMzp73a2ZqSvsDHxXCKw4kV91dmMDmaDsj3ZypWWt1c92GNoMwVS",
  "key43": "66c4pMCS4y64wEfHhfhdu5HZQ3deE9emkC4uonLufpnp9B39UGXqmodGQAqUuLxU6HMTH62BDVfd695gBqdkWeMJ",
  "key44": "4v33m1gWnXV9vzuXEqrehdnDDsJqQt5z6sfy1UNAibZ4UdUXGgVcX1w2GopcjUupdNQdD7viZpmfaxY7qUcXaLwh",
  "key45": "4iP98gy6rtLPfFQ6kyHeJzU5MmjW4FY8eqL41SSu4br69iVFazuBFBqPgLXXBgGNKRERt5wWgvCDtLcE4XMJbQWs"
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
