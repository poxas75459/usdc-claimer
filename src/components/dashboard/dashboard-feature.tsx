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
    "4iPdKmfUdurQQXWDcHozy6sTVG64qy4pqQWyBs3gCZBDM5etUdGJWC8CwD4SgSmzufWU3DvTtpShSh9gnJkVrEaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HBH17suKRBxL3MrizxoM5CKHpk1mc5gudHP56dewftfnTTYLEgSKrHEUnsAy77noSWhWiCVq7zP1P78ALa3Yi2U",
  "key1": "2xTgmN6USjEaWS2qEGLqCmRDsS7YdrVcMkJiNtWACaH3k6miigMzKQwPTTW1JEL5Rwzkyyoqds9ryC4hxUVuFj5C",
  "key2": "59AAismQgC56pJfFd3jmU3JAdGBY9epY47zmULkdjkatTQhexJEN9B9RTc8Rkh9vCGrAL21gHQxUzRLJpytUcxNy",
  "key3": "3sWooT9NeNYpY4pJ7aNhup5EN7D4dba7p6Up7fkjiyBYPXaSJ4sFULtZfudkSuPi8UiBtsWzBuZTqseRXCk58YFd",
  "key4": "3XKePEg1Kn3cVtWTQ3mndebYScZLJfDisXP3o4PehiRvU4e8pAXzR7imD4gPaNPrb2SosJZuj7x1zVZnpfYkvpmp",
  "key5": "2Vapqp35ZwsLhQF2LD6CT8vcxwjC4DEgLZf5tiEcsSNp17PbDAtrdHHgSyvFAU7XzWg67VUZua9Ez2rS4UhVSGNm",
  "key6": "5bHiDTDR5gu4TKU5E1JBxeoNipspjrN5t6jbdwqWwwxm6v37iEee58CR6pBfuUQTECTxPeS3VYXGyxcxkowSasHi",
  "key7": "5fTCX6xEf86W26zdEW8W7QeQbnWApekhvEArz1Y7xWFLy2CRKSovWRRr2kizeGpqojNYwwxziXFRXsLBCjDwMn6f",
  "key8": "4EQD9iiH2QJmjUNZ2JXXtLKjeD9otNwSWrrSe8xU44auXY5TtA1j2ikfduvfgutg97s78BKqnzSWANr8p1on7UkG",
  "key9": "348JAN8g78sjqCx2vbj6GWFG72FUDpHgpNvJgi7GcXCv8SBfNbHxFCHcBAUrjgyiPJbYLzW7T6ZzBqyr8Tm2sR5G",
  "key10": "3QidWcoAAbtunFRTPLKWqbJQ23KqztMQ1pK8rN8uAtqZySdCFTNpqBhQoFaZhNVAEZ25PxQd47N4n2Xaovd4wPoA",
  "key11": "4dsaiBRdMaHtZ2ZceqCTufM5hMQKhzJbntip81GtG6RXpUrZPag7CB4YW3ZBfLfh24SoDKX2iQAQKJ5nMNExHZan",
  "key12": "3zwYzJpoLbHs2YzpL5dxEL54PtPiL3tsLa6z9gRvU7aE37y3CnnPnHyuxpxKpgyjxrr7bFcNwooPMwp5yyDhpKdV",
  "key13": "4tTQbcdr2YYYFAkm68U8FZVHRJf22e4oHGzsVTHQ8YAiDwSDWcfD852noJoRms8MjoS9ji2HHrk2cfjrbEWdyp2g",
  "key14": "2cBK2tbgvuC1vrjoARrQyabY9EujbkxGEAG4xYbr2p16VmdgNYrwMzASQMwtm3P7MjktutGPm4RYoJkCoVwYmXpD",
  "key15": "2qAHTDm2uijqzh6a7eki1zdg2i6SNZg4CArUrjT3UzJGYZ9Xiz4x6LMFz6REofDcocDkxGezJimrxgGRvdj8b11A",
  "key16": "oz2Hgd8fXqwcz9eW5obJ9KqSP8gPNTkwBDK8a5WoLj4JxZc1pLNxK3eCR699YXYUA72kv88m45M7kQuhMacM4TU",
  "key17": "21BSuSiExGRfXNDWFuvzDywhxruz7HF9Ef5h4ovBm6VaoLF54biA7VW7NM5NFbMtbTP2VZcZuMVQJEPhK71dUUrg",
  "key18": "5z7NNpMyKh8B6GKJege9ukhWCmrgWF9gUZRFbr4xZ4xbjafPBVbKvrxtMe3owKZnneHhuTT5NMf1Tc6jXKFv5v85",
  "key19": "5AcWv4A1LQg6ah6wh3zjo3bqmtQxbmywTv5Fvx8FZqJNpeTJutwvXopwgNFgcX1S39QAjgNaHDhQ7qhEFYSCHkAx",
  "key20": "3zXyS1HfqmLAWRSc5sLFj7qZqu6KAozTRb6kpbxQju8tpuwUDA3tTbFckgeKbWcGSgnxp39u84RBwVo5TamWYXpX",
  "key21": "Po7hu3Dpbshguef9q4ZwyVuhd9J225HH3SY4KZmnwqPecfbRtoQ86VhDCSNUytLafJn47WsC9T2ECcsbxEV6TMu",
  "key22": "DZy7K458sXaYFyer9JFqv7msTsb1mZfWCkb7AhE9t4wjWiht6Zp3qpgr4hSbs13VHYcsEGkWfvudooAa3LrfAp7",
  "key23": "3zMqgsNDaCG7dMjfXmKGhxTLdmQoTSxFJJ1Lrv6Rzkayhig5nRTa41nm2m8gbzvau9xoGS9oJT8s7ev2LqJoXUh6",
  "key24": "2xbj9SjLjWjHymFemVbh8Z31NycydE3ZjDBGrhy4BQHn3bpc6Mkf6FSrWG7FeAVvnBvZHbMr2gsBWRXPjskJcqgA",
  "key25": "2ogpJzdiNUCqiBqArvit7r6he9a925qiwgYyzfpqBEQMZYfuMCfkvn1sEnDrFP4CY4tF7ESQTAY5dKQs7Aj7vWJV",
  "key26": "4gVyPmQp9AvXKYz2oANdLjrVAAkzwBTs7H8mUugFqhVr84UKNGecTvv8tSFzrrENtBrdnXgAVEmw1mwMoXipckgc",
  "key27": "QeBRHcCBAxqpxkive97BYwkfQvq7kGcXAtXRDY4D23PiHnat15oa1cGXVXMkthFkaf3jJYKfbH8KfiEGwLsVPBe",
  "key28": "5sqJtQuofEBp9KQLvPjp6z38Znc9YzL8y7wymenBVHDnn1XjdsCCpckYVUtssXupzSP5Q419tSUEv8SuBNpAaX9Z",
  "key29": "2Nbw7vEj9aWhx4ChtJN15aXej9mZpQARNYqYhwKCVx2UeXurft1SdxxQxo7Su1PgGuMMVFRce2MGq2rTjFaep7y9",
  "key30": "3QJ3XyBbuZUUPFfVch9fG3ASEJRJBj5NzxnZnLVUD8qLe3DzsiGqVg529GZ3iCXRTnHFAP8qMmNUbZ2jASw4jqNq",
  "key31": "5nyTnGcFNAaTWfieKvrwwBDi4kj2GLGN9nwKDpANjEpD785fzuHNdX2MZXrKKzvDvsmX69ybkobTSpFqRiAy9eXS",
  "key32": "3kaAXENBw1uUMZq3avSauCHo5ygZpUknE9yanJPGJgYbdzqwaFU2TQamSVUZb2ZuwDevmqh4e5brFTNCufViQXGc",
  "key33": "3iPhvGjbsuBZsqE2yMJUG8aRG2uYN8ZLM5wLzjvsS52PuDvjERfjz6hL2nghvJqFMuch4w8QNzEsqpy7gEXqeLfq",
  "key34": "52hcRd43HkL55CVgib4ZJ6GNnGEV3XvLmkeWbQrvnwJUyswKQuND3MAHLLqwRUoTXf9YM1SwfzgVGrHYk7Wa3jN3",
  "key35": "3ZcvSQxPZZ1cUPGTuRFBtErAKuybWNC2dYDVKKymqKVkXMcWvwheqCsEXwmbN9F8onZWZdNSUNgqL6kyaHiyi5Yf",
  "key36": "3UTPz3WqAWG1LW3t9LJEZEBn92YrD5Rhj4R6kyBLepvZNUzZuawZoUyh5VaZt3BmaMFNhPPQn2sLEbW2iuJsXcit"
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
