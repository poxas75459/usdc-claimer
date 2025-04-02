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
    "2EUCi92Jm2VkRh25mjnTSbQtzL16FLs6EpHyzWFP3ySsJhZhWradqpH9qLbvnnEPvqcwPPM3661dPfgpYyC8UWzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MGkKYoWNxuzx1dvsukta8MsCkm9XqbmUMXrucYkmiVSD2hL797Hr7Sd7h5gifM7619AwEaNL53oKgKXrn3ivwTJ",
  "key1": "utN8C5xRt1coDLeA4nx5pmv3WFef396eahk8TuF9Ds8VeATWXhgvDsvVBgtL5cXHkrnNXCZ84mkyr1WbT3yyx8D",
  "key2": "PS2RNMkuRgqWBEJKbVYpX6GbKNKmSmNGT3kcy5wDKaDWWNuxsWGCkDwWnLVAET8m91S52UaYL1ZfJp8pF2A1ybw",
  "key3": "9TQx7gLVJocMa9nFkVuxdPGK9SPsTbQoeLbBiuV4JFVgiCxr4Xb9imCmtaq88Mm3gNk7AtaGNVeXS3B6TKwYTtt",
  "key4": "5gDqKDbJTTgVcXi6vKgZrRa7j6F9wj4K8uzmL8CUoYdcWy5oAbCtnW3WKrWKJ8mDqEazzhr5VzynrGnMzJVi6koy",
  "key5": "3zYNH4zDWcHVWq1urzNj4dnfxnJ61bc7S6FzXviDyBSR5kFaeq5heWppoGyrjmCzGJwYrC7mcUwbSE9WZoJqtoDQ",
  "key6": "4i56VaW44MHc6ySr5EHwFkoj5J9PJCqHTCVvnW461AVgz955twULbTSVbvxPjHesafmRR99oJAk6yK6fHjiGr7up",
  "key7": "DudfzgdZccFsunbJiTwNig5KbDEgGjXUw9RS1r3rbvvXR6YZfeWtE9sUB62rUvt5jtdXdd4tndvxxCtZifzzpmA",
  "key8": "2CNh9sPCCCqXGF3fhbiNcyEWXFBt85Pp4Mpb1en7pB1kQgaKHaHwwnD4LJEk93F4JXpWTvHeKqzrGu9bxNDWGt1m",
  "key9": "4JvUYnSmCZf3JpLZhSoze13SYQeF2YxNAUzuJtQBvQ2jfW5tCXaXaXswacEccqsKwgv35e6HNK5S3q5q2fP8ufrH",
  "key10": "5ZxahBRu2zj4zZKyYL8XZGzRenDGKaMmUCXd4h3TVk26qBrr4dZAyq2PTdUVuCycRwJDHrRV68AtmoxJohjCJoYx",
  "key11": "5buqiweMcgwKBdKa6qG8KLwj42yxEqsFi2QKQFB22YhzDi9NtJquue68Zi6bcm3RKCGMccgBUnTfYNKZsNL21mX6",
  "key12": "2c1buS7nc1vdc4HHVXCbP59Bot63QXBmwXrGAnkNWzK4pqRwGd3VNtxnUBidXH8Zk3zWp2Vsds6v4pRyYq24nWmE",
  "key13": "5iGg8jPjS1h9J5vTNyfu92qXyNyLMZ5vWwGvBYvrGfowRcwhku6oKN2SLWyNJEoxQzzRBNFctfk8SQD7i8vBx44H",
  "key14": "5mRYN46eR7aGPFL9PpNGUD42LK6n3D7xQc5PJewE1JfWYMJvLbMYo8cJzWcpmfWi2TBefAexuEpkkbmesg2bZhwn",
  "key15": "4R5uimZd1z9ChhmxL73xYNnTL7YfGuizAGEex8vKPXi4JWa2XB8Q3xgGnspC11QiFEABxs7bQsmyZFnUiyjh6QRC",
  "key16": "36cCFethMDrxFpNce8mDJuYiALY7f6yvJ7K2yxVxo1sqg3UiKfgEAe6TdXfKb79dJThPSdY3mMyAUo4sC3LbRiu7",
  "key17": "5fDdqCEMVSG73sbiwvBEyw6KSKn2zMAGtzBgPRbUQomXY5m1j6vCdkYvcxJGFkmdBwM11ppvdJogUqnvPYUEo2JA",
  "key18": "2uGrNE6yAELrV1hXkDAohUc6PM6XhV7dNVQaHooDJYi34swrT33k5qGxzMLdk8Em3RSRC1yW2SwDByQMXFDiu2Em",
  "key19": "2vP2zXrCDyaPpmjZfcxkf1ovCYmvuxjG1rqsuhWJpStBYZbMXm27M5RidK9vSPrzobVFhASyVueZR2tGLwVrfGM5",
  "key20": "CH5nPgmEoYnydWD6TJntV74JqA59EjxhzLZihjoqRG9Ubu28ZGuUvLGAVeEmL6XGhUwzEe8GCeSDp85hdvAKHuy",
  "key21": "4uTmZEAGGkPLJLkYq1pDEERBGNRWEXUTQ1jUahVN21LGncF6YuJbindoBbTnq55g7BSqaGLgHauFPChodxq9pwNH",
  "key22": "24Z5LWon7GUKP8mrMBHwgb7Wp7M8W7pCDy5G4ZXsHmARDAGobEcQpaG44pue8Zdftd7XN8X7nmqySuHkK3T4tsu7",
  "key23": "5DTiExZzr88a5jgn1aZUtLYr2owgtP6RPVdEswR347TVfpnHizAa5Z4oG9zcsxbtVcrhbrqyKV9ceqpCb4n8QaLU",
  "key24": "g2Fg9cA7EnfonGLxx4xr8JvgPPGJg7MMGxyQqnnqX2S21qEsH7kW3WsJJ9ZM8fFtzNbNAsWb19ZjzfpBxoeRm9g",
  "key25": "2kVfJAes48zGZDHrUiHaeP3mFQ2hDyN18VRSbMgex4tfPGbDmh9TWs7cThPUA69DTfSwY3LSGpz3f4YL3Vqge8Qe",
  "key26": "5wPsq3AVSLmpibALM6uL1CqaJaMGpQwSMuGenyBDQRZTvTiXCbbS8bn14WHtvJLwU1TiJCKYfYVPP9uUBpABuPPG",
  "key27": "bzhSxysm9P5dvayJhyJS9afQvYH1gVyyM6jVV9TZJ5VZJiLEm6gAfTyvCuspQiryqPcbjT3CHZZaLR6i4734a2y",
  "key28": "5qNy19CJBuSRwayoEBDH9cu3GssjPUSY186Fqjnre9PqdB6o71MQoujS1i84THDhiK3KzX6GUNS8dhwWz4Tx88Tn",
  "key29": "27udnXwrDHrQm1PsM5LirtsHHREADH4NhaZPubeE7kfYJrwbsKn1i2WVxzQrN5ZnASVLos51xDWMiikzwz2gcrLH",
  "key30": "2edhuvmkAioAUUkgXbkfdW5JH4aX13VGzA1msMmzvUpw23kL4KamHVC8cF63oUpMun4UYV7HTfo7NR4gAXfZzrow",
  "key31": "3MCjvMompEyzGXtPVy2nctExMU9tejp1NYGdwjF6dD9AhdEQiUvCbcZAYW6FuUn9QPtQsv5YLQz91D5DxtmbHvU6",
  "key32": "57Zt4SJPZgGXczyMHs4AFCeQxP3Nn3VZazYp45xtUTcfXmfn1ZmWsJDa15t5FoVtQENbRc7cKygXY8qL5CuaJwGE",
  "key33": "3eroW9JLGjPeBW1zZHegKdZ224DbqAk2CuN9zx2Trt2szYxeEzbNuESEYqGTb8DY2mxf23CgeyyqWhJLMEwjD5Vw",
  "key34": "4mjvUXdvZehtxZ1Ls83xy5J3PyVi78mGXAtRJqLoLdF9D2AhXmLV4qkstmoouRKMYtifm3LiymxdUZyQiVTBL5zW",
  "key35": "435DXEXe2Z1Rbj2c22gBauKFdzrhGq977YSnvdYKauZyKC8WTGe7CKRqnoTXq1FQqPuwVXg5ve8NLEaKiD2gGdqy",
  "key36": "2Nf3jhKZEhxCmSxkvoME2UyCWfTgLtr6uvJSVSU5FPe2cr5d9uvLGDQ2gbcK3DcR5g9q5YL4jDdbLG7vx7UyUj9q",
  "key37": "5em2BnACtUEAqUE6Wq9ZEN2wwtwfXUikSnNTLQPgN2e4LyHGbb4fR8Ncs1nbmP1Cz1mqJHi37ZPPM66Rn1Uynmik",
  "key38": "5fpYNc3nUxrjgXcg8cNamJyq1MHT49V2NkwarfY9sPsaAX1Gyz8yG6WviXeWia4WqCi3XGh77oNEgaej6nXVSXWp",
  "key39": "4jhLgRNhhqCtQGUUgoryD9xihboQ9ShBLfgxqSRZQpPj1csJF2wqBRk9cVqxEPPEDV9uWZM3NBu9wqo7VtWsVXFX",
  "key40": "5W2hWiFYCTUXTkgWqoRCS6dUFL2kSWXsB36vmfjtPmsh47KRSzs5hLfrsBqmduHy3A2Eko75px9Et5qyySN5GMcx",
  "key41": "5wdb1bnd61NJy2ur5afyFoS52QaDrPBbXKeUQdZz1M8RfSSQjE6Bu6ye45cZL5LwxucepsoDUQMqhvzYLdB3n1Mm",
  "key42": "1oxpSP25MMsX5BGzMB8JmRUpBL1CYywGUErJTsrEWwhrLgUy2QPwcwty2sJBABWCJucvi2PbvMqhRdq69A9cT7i",
  "key43": "4WZfuhyZwXmAgpPZcHLKuUAcrmaMZmSqr3YHAcUpXM3peeWPzkEN1KWAUHqDmzttawu1gcQ2DnwxWEcnjjzZH7L1",
  "key44": "5MjbJTAcf1vDRzzYM4QuXVMSM66kxYSCWa55K1kHcSmxBWvS9WYqiy52usK6Jenahs5ZfD3CchqthPsLao3wQkPJ",
  "key45": "yyyMu8kr74hEiMF8zu4xBwuqVKfqqSVoDBacTtYWGp4kVjvNCe87ndaeAvseAFE2Ni6WmRB4bkT9UjohqVfR5Hs",
  "key46": "4rmW5z8Fkzjq75uDNFsCcuhLu9K1NRLKkYd17D16BkP6mgh63f8YHRAG9XjDGraSkYts82AJVzfj3tYHYVdDHNPV",
  "key47": "4t7a9gh1XN73NcSJLE3Bfqu43hqQrmYwwCDBUWwjs92Ngh1PeDoapJe6B78zpZBTBpeuycji3p3kFp4iZvQg4BLq",
  "key48": "fyAjV2Tte8EoDWrjLsu3inxeAHTqHqiWoKNHtmAuEcrj9tM55g4a63L58T4bikZUnJQC48S6rcf31wjDVf5visv",
  "key49": "2HtqphLNicKGG8cAVwEjTYx9bMcbDB2t5uLxcesnwDuHhdaNLTpMTh5im6wUYmEkYXUNEYiSe2yuzSdaXTfKGzpo"
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
