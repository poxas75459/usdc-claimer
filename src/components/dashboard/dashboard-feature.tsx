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
    "2XUzsGCh7tYbE86Kv9yJkAfbpb96gUbJwWzuWgENRkkdjz1sw9tKm1S1fwg4EoqX1mXMDaXK1FVQFCKZaQAxzHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jk1AH2eVjLaf55gHRPD5gRVHVy8Fe3exc4fcGYTpEasD1qXi9PmZz4EEsHWajpc3mmDBaF13EcfWE1689Q6BAGe",
  "key1": "3e3CSfLSSk7berEuNYZtAY1YZsaLbhgFFFLYQ9RCaQekauP59W4unyGJepEoxyh9dUankQhAki8Zmjdfz2K38Xyd",
  "key2": "4i8cxEZzPieNzWnCGYwJ1tHSijpuhPy52oz6i1tcUTSVQbnJ6Ls9YiwzmUnJv9s9NAxgoeNPmkuYeTGiYMpovtAU",
  "key3": "5bbyyEoGrJqfvaHVXPTt1PmaLcTbRriKC8wVjn7LpoEUmmqrALnKNceDkyVtehqsew4cKivUe2gAbKE89TkQ4MXF",
  "key4": "5fprsfs6FuJhNDpGWFfCni1kVH6EPK5aP1sGPUGGDtaejdfP9QDiFEuWnLRDcgVspLzPks49vrJ5UGZp19XWaXQf",
  "key5": "5jXZBD165hT9AgfjkNMLmfozmT7jbYcttwnDfRfsoCz3v556tonrGPz4cJSnCskbpxMnuhAxWebEMextd8cxqAVg",
  "key6": "3LWgBpdcDcnr894ASthttwnvTUaHoJRA18Ke8A2yBb2S98mgEh6yiZL4fQ83EnrxLjDFchTdqcizwiE8LtFFXu8n",
  "key7": "21qQJNGXBAvFt9kDnjxwVTqxVtQuKB7erfgCctZELkH8uhZiFDSQWFHFH9CBGWt3CGR1ThVH3Phdok12kPY6vqdw",
  "key8": "3r5JZL9TkMaDfC3EWpxrjdQuxQnvQco3eJwV3AY736iGNepYQaWjyaCvFdGQtWHrGMK1DiXoKHjDgpcMvPQyPsWu",
  "key9": "kKtYtR214nse23mjjALWBpbEfNCTWYmNf9cBDXcAaPkmGsQfyshP1U4UjofGCJSBjLxWSbEHiMDAGsmyQGJD11v",
  "key10": "3eyGLtC3ABASS8Np2AMZR1CfKy66CMAFXtjVD14unDpMksuitBCwB33WqBXD8b1u8YGbCKV3Bav1TUvUf73moerb",
  "key11": "4krvyvBua1MWd9b9ZPvNVHLfWC7838LW3bzU96kM98LqD31ADJy5ii37h6nKxiRL8Zyt8ZjuCcwAJWAGEh5sPKC8",
  "key12": "4dDheoE6asKhvpqMqobkx74Yjuw2RHVkFYdajdgQtC7PKwkDvSdm9hQ9bx1kt4zjkR5KSFG2hGwcr9QBXgqWDzGS",
  "key13": "5EDWPxhunKbLF8h952S1SjzN2FQ83Arzg8PZyt1j8P1aKqvpEPS5v6pvzsPSSXgJq2xKkLETdzrr3aXUKFN3VPT1",
  "key14": "5ZGTJA4JpeBjBwba2AKjHE12vdnB2Ls2d5LEhq51rNpUHCQbxx8JGrRdY6iWNJdTWDWNX4FGz8KEHgNiHUZ9iDJT",
  "key15": "47weK6cuVJkaBCxwNUBQ1hwBxecajqoUfT6zzyeUN7rGkWMF13tF17t7efgUV2CCqECD6SqmyJP35uBJPKBpNbUP",
  "key16": "2Ztv994Zv76w4BpCHnEoxWuoxY9NPu4fv5vXyjsGH1uLbjzwZaqQPhKa9ZE9Tv45csoEom4HvxUFPFc8CjWwJXdd",
  "key17": "5SvXBC3sntUF9iio6iBrA5V2QB5XLBBgBsQQzqThbNskB5f2qhpqWQdBbuXYGNddXazkGtyZ7giFKJZmeLMrP5sa",
  "key18": "238Bi24FetvUoqk39NGYhZbe6XCHgioBzqJ3a3M11nwM6nLix6rwCbW1T7pLgEHnaYePApDQunVFHGUGEsYxSMCw",
  "key19": "5TxqG4F33F8Nq27M2oAzajEAjuFCuxAZWnS4mgZ6f7UsbGdvXKGgyAEaD8ogccwcCSTPcSoAGbpssJrcpgdMCmLc",
  "key20": "5cqoFDGscbdCSAAMccsLZ5kPYfMQADb7B1ZYm4VLohdmZWDYRRRvcGjaNZ2qGesJEZ4tsa1hbA6Cp7WkX963Lq7J",
  "key21": "4z4XRPEmgvsnqZcjqTLVdCJxE8Xsefo7gKs9SC7cKZ4HBTECP8ekagwSHH2AktKBbsamzdD4KxLP9VSzrRcrg8DB",
  "key22": "3bUzKgDYh2FoqawsBgS1p9heBjCzDu3YVgg8cRioyjMy7NFEiJEqgur6VjYcGP2FshpSMzYM1EhXA1gsKvWHR4R5",
  "key23": "31eaVhR8HrKGvEV5ai7jBspT96irJiUyCmSLiQFjQJgZ1wMPoqzLiHa5qkCSMUwLW8EYp1b1UDe5w3S3eYH7YK6X",
  "key24": "3txWuW7LWZH7w75BGW78DaSr8SGrRbtj4QBxiYQKEnP5bXoK59v2w4a5VHNRtFUPvt19dVFL1kbaWCDcSudF7smH",
  "key25": "5G8ebjuLhC71zNRbZjfUQSxHLEbYMjPhg4VgawgYd4qpJydQxad6AEvem3n86UmmKpGFFhHjJHPjKm21bx5Z7QSM",
  "key26": "5QJrLGF1tssHBH45HCyQkWz8qZtGajQGPavxMDTWN2wmCzX5GaKw6sLc52SNsrWsoTwrEi5L2ceWSMJp8GRmmFA2",
  "key27": "25bpmjrex8MkdgzcM9uvE3qVrwBnrt2fMdi3q7B9XLsd6Nq91cjCRRxD5zXNZvxagnxJYGQe46ZL5j1aX6mneEmU",
  "key28": "2541FjeHCkD5gsbaUZrVWFfDfnQkRfg9pR2ER6PKu4ziiprkViRuLbLHE6rQLx4WZxgSduL62FeoHou6gxjWQnvn",
  "key29": "4VuXpZJTQdb9Q5bsDtqKurtQy8Vowq5dDV5QvoXPpvu7wFvCXnd5QUrgtbfZzR6qNadudDH5dNc7RT9kNCobSnDm",
  "key30": "bUHAzetWrmQ6WJfTyBpSBwTYaLfLCPnXod98CR6QydzEpMZN3SJGNVvZKTu7upZc6GW1irX95ZX3MzWTaDZm8ML",
  "key31": "sVY9u8NX6UrYhAvX9Qfk4CTz4A6KhWztoyuZHeY6wmrZdaHWi8CzKFgK1FsQdvEUzmsuiKs5ptwR7K6kUsqcXs7",
  "key32": "4FTuUqfgw4H3qeLstTYAYrTgPA4EWKtGkL2Wkqx17vBQUhFFpjCFcHnmpL9x78WuVpsWu8Z5T7C3nNdLy24EGYjn",
  "key33": "8Z97HciNccQXDpxwJc6Jmy9DTRLfRmavo1v66uvFzrrkgDvKWif6a725ZEPyqioe6MEWqgq5Cw7rFgXMDm32ih2",
  "key34": "heo3f1WQTk6LWUZm6ZYLnN3K9enx8xF3N8KxfjwMbYe6kYd7gTXWZfzrbGFHN1sk9fPZEYzNtgJbMsbpBcVQ1JE",
  "key35": "Rh5bLeXbzCYfFqZe49hgcaYAtkR8oMa4MjtErDJpNKTSoxpJKBtEDbXAAib4B858zZMsHjqHLeUp1QChmQAnd1f",
  "key36": "2S5W8DdtJZKKaqrjCUvYHN5LfkYhhnXszkhxDDTyW7DmdAADTSG3Kka6EjMA3BUU8yUyAcwkuh46RgibR5BqiQYb",
  "key37": "35jaCeEdFtBSYUNQ5n6hV9zCxrc6E4PV3BBTpfwiQM2JCqgc9z2fMaHps2YaLHG1oLYCeTveiJMmgvjrY5Se3rrw",
  "key38": "YjTeiG6JrYEf9NdpZfzTyuLX8X3UDrLQ8WXgjhUTz9xGShz7jwF38BEhVzZHsLBn8uiWJJZ7cLed2UG2898AVRa",
  "key39": "2gQpKVuwW4GcGg3Z2r9RGhM3LuZSYMGTResMsZwoNxeUZNaE3Nu9UPydf8L296adRuHMdFm34hGMEVJZRJfodZXz",
  "key40": "58wJPpCxUfZrjgMZU9X7yyn8ejuUGnBeQd1ouKJm82zHm8GZxNV4dQuVSdMkzBFJ1orfCzn98NHgJSZ8Hu2haZh",
  "key41": "WZz1Qkz3QtXUmy5vDHCYgkuHSTvLHZ3PAm2XwdBq6zR13X2WvCh53rpCENwkQXza5CveUmoRFJQa6T8B5pfQMfM",
  "key42": "3pPVDx9ddRet9qvvEk2HscdyfG33oySS9qHfGRVa9WNo8AoaJe4F8DvYpyuS4CAmzjQuPmWSgUiv5RgoYjZpctfU",
  "key43": "fvDfBJM9RukUBsRqUxCEYZHznqm7NDZnEc1Nio3f9e8YXQneaGNcfqEiEvn9PPxcjwjLLNgp833JerivL2XkGLy",
  "key44": "52HrzZEMYSJ6XMU2nweuaLJ6dFdqEwZkAM3YJiHid8QGMwr4A96VZaMsQjpjKKtcUUo8vZqLUF32rQz8nKp5FAoU"
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
