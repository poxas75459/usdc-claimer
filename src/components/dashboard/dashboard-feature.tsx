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
    "2gie3NDwwEEs4w74UL1n14SzpUr9RzWLgnyxoQMdeMB9bczd6NkTHUG3UceWRM7j6W9A3n4KFuimw4QbNomWqamz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KNRwHtcbviVsiE1SjT6VudxAY3us1y9Htt8LZQ1WSMLYMU7upobXZUydrKEJEDnFtTpbTFJDayC2gfa5BQFjpEq",
  "key1": "64gsNComnhdHTb4GSpUcBM4GWuNuf4qQhamXhXB3EVkkMYTJxvE2N5yF8Eo889ew6TdGQHCM5cghikmQMTuU4YjW",
  "key2": "o4uQkQqA4GvnopFWEgDRvp4rryMK3KBD4iDMbNnexSwqDGE3DtNd3xs4qPdwwoY6wWMEGW8kHxGLgWfRWS79Umo",
  "key3": "BKoVnHtgwk5CUzGqo4HM8iSCqc3rXDbWasu1YKvzWUq1kphkUH1wagByesg6RorCRaxMkiMQewqWEKkwYTqDqFt",
  "key4": "4CXqnQVQGXMdjF9aUXJfnYG9ZzaZwYaGa8ebi1XDJqGjEHk5Q2rX6jQ8o3U7u9KkemY5LZC2bDxuAPfmLTM918gL",
  "key5": "fpv91pyAtA2YhLBggPgDTpcopz6Ny7GkaNnBd2r3RNmefcf8Lij3d33ZdzBWwBdyLe2RHM5kxFtAK6nXQqV34eY",
  "key6": "4Y5SXU5dLRX4YW5D41VGwhqhb5tsHgzJ3xmczojBVkFo8gEt6pZeggQSnVV39rSZQcVKQ68o58VTaCa7C4FnCSNJ",
  "key7": "tZFU1Cmrvjp8TAZf95N4HVVyzHnitmhFx6gSb5NK95Vf2bTYJjPZm6mHKQZxhessZrVTmx4vUaWVat56HQUB4vP",
  "key8": "3MG5a7sanmp9AkkRyiAptBkSYdhnU2AhmoWtMuQsH978wLg8qd6XmtSU9AYrjpRfdEEowVUgUwLGDzbw9chnKW2k",
  "key9": "3DF7qDhfXpaRbaUwsNDGBAjCq5ge6qDESELZJQBqAxpvHnQfPrv5pbsHAW7B4LDGYKAQuuz7pd88KrufA3vTnxpx",
  "key10": "5x9aRQnWVmqi6WnyqDyz8PtdYjYYD7AFTeP2Bh9F9cnz7voweMPJSBV4VNhXpseCAxVEKVqBjiuDEHcaGpY1gTmR",
  "key11": "2AMMgLXJadsqXLpkizDHCrTYQ9Z4LKHZ6SxJ6ENcuJ2SsQDRXVL6pkV1VpFkBSjEdYPnKDsxm8WC8Qg9br4Y38J2",
  "key12": "4t4mMJWZ8AkXW4RzyrKsk5WJn5TssLTt7ThpdZXHUuWYMyJJ1zTuGBos2DEACxd8roM6GQeisCKLKqRnxCtDyqqM",
  "key13": "3KWAuxM2694DkB2JmsDYwyCGmmRRu5Egofu6wcjH91yViYWdaQ8T88VXqkV2UjDjp5JS2zUwKCFtnBEbg6EzhFhH",
  "key14": "o9D2Lw5st9mAqaRfQXjecsJ6emkaFGtVB12v5hF7XumKrZiPTm7jHrVqW8AzWH1oysYskowZ3J1QEnE5TSHiysL",
  "key15": "2fTfYHumxGYejm7dqGxYwKRDTfWDtKy28HRjhywgRs5VAhnWsLjEn3eXMgf14je78SvyY96br82Sd2b3yhakwFW6",
  "key16": "5A3NaAsvgNCzZm69KyNnok7giCDwLUBAebfo4wqtrz294ZcZi7q4uqbqCKz4s9TbEUQNDKWWJNukAE6uC3cSh5Av",
  "key17": "5krvERbbyaVxZMFCaTzuFwVG53WsDuqXTzsMNYnGY39vNdZzNVKC7dpytooRcTpVy73L2rzzwhQQeSY8enCcAT9B",
  "key18": "3djw4X1vvBCr4vvBi11QxiaR1q9xcVg6QE8tdMbAvNEiTo1UtyamLshMAzKzcixMZvJCLZ98xLxHoXZHBJm5jEK1",
  "key19": "3Hzee2SESR2hqytSWstZ8ofpRDhE5LLwL4GpYDwrSfRFc6uF6kagstXKEFKmMybQYLsjq9Hx4SKdkxPSXK988bzN",
  "key20": "451kxpkUySdm776PNBg8Dj2n5mDxQaczZUvxDPnj4mqh8jPdmvsw4LJpCG52RKn8GFsifkox13UHHpeFLnixASSb",
  "key21": "2VAeSMrXS2pyvwZZ6bvFZRDt6JCzdYkzwGKNyvQPoUnLGAcHoanMHTaETuuVG58cDwYQV162DB3jGUmjCsib5PyR",
  "key22": "57XFurXHc8nWNtjmjiqYgwqYvMB8gkUFssjfM4cffkwTT2ddMan62z6oh3u1GGQ9URAXW1687YvNZi8bQ81JbN18",
  "key23": "3L9NCtCXVU5VPhTAgtfhXfZBxC1Y5GoczuNADmErr2aSaXLstoyGS9Lw4okLdo8sFcmWSykYizLJ9LBWV4HUQ8Ne",
  "key24": "2ukfxBr5j6hEBQcW7GuMvX33yzEWd37WsX4wFWJ3wsssDAFykZUjJ8dm98rdWGr2EM1AMiBTsVuFAbaJHePqoMxL",
  "key25": "oyiFYYuj58iRUb87abKHBAzvwQeBS3xmzLv8Tc7r4b5MQb6MW4JgbvuGDH6iXMoUDP4Tnmj9tDkKX4rqyaYEf8C",
  "key26": "5A5EvbZeLLEMVT7zW5MuJ8m3DNU5L18ng8YXBHiHY84PRZcuBSPR3GXjXbbsYzMgkXv1z7JFyVRVwtRN7Vo2z51",
  "key27": "5cFvBN1eQFTm19ALwzNbLVPWejGSKQkeaYfATgUwKRPMqkyQPswsrgN2Vqxq2woRSLw3jJJMzWzft3KFpwcydJDN",
  "key28": "4bZfJnCfjN3krjHXUs854G3EnajF3pBoESkgS9bsJx9KwiQNjaLdHYruQpJVgMgzisDzwKSP6tcuhtjK4D43KcB6",
  "key29": "bPS4Y5sPnZGAN3tht8H8fNECimy8a7TGxRPJZ5WGGcLof68R2NKwMVRBGMqwGi31CuzsPnaG8yk8487XcwH2HmE",
  "key30": "41m4gtDKf9YJAFP8xgwyacUH6EQSHCd9r39kXKXF3au8t5XTBbbqSEnHKzX9pH6YtqZR3dkHFe6ghezSHBRGZhNX",
  "key31": "4GW6jUaDa4iCDEP1AqVZC743YFbMDjX8taH1YToHuSRvEufi1H4nvXiU53BYHuuboXZKriQohhaLEC7MGpMGNmZS",
  "key32": "JTwG83u3NuPM95cR3ew2ee97WsJ2k4jKigSBpiohRk9z5xUrnz7gszmdiqmK7oGcMmBgdDyveUepqHFzZVMv5D3",
  "key33": "2bKTjqiB12oZdMDXY4YNLjaBa569rxh22pVFj9Bx1p8a8edASVkbSBjtUB9rJQpaTFMsH3itFxkwRuDE1RcHDscL",
  "key34": "4KW35iEbiWVZMXTDiW769p4aAogiZn3dFBLsccp4EFjNWbndTxL2SdBbS4aTwrnb3YZsv1ok3PtjLGZ65VwcRo26",
  "key35": "8nuNW7vDL81UtPprx6acG5o3GNpE4ZEA2WN2mpspwivztp4FXSZZDEBkkShwEpHJKwqBkpUFqQM9QwTz9JpdH8g",
  "key36": "D9XrH9WvhETtNeC5DSJN7ktw8dtX4WqndDtNiobzckJfyqeDL3BBmRhUmXgUP7rgu7GM19Xn7JtizCNC5spJiHv",
  "key37": "2rVwAsG8b5vHGn3KrLWcqoBnL4CER9VaniigPS9h4WBoTRwqdkuFEZjiFVPwrK7aMFjQpVNytLcBSmmRq1w9Vvqe",
  "key38": "3rW8UV233jquL2d8oj7ypDNDqSa6XYqRNmXowFt2Za5G1vpcMjWuwY1c7h6iiEfAxic3mMZoWd2Ke112dJPCuU9w",
  "key39": "5ygVzUk375LBezz8PxALVMDUbrcUt3S2BoXJKGbahki1jATzVLptrAe53CGyAeYLPxK9Mubj3yQv7tVYqKvnhtfQ",
  "key40": "5PitCanHmFbYrCnsjCD1Rm5qdRMmccwVnjNs43DCUzBG8sqFpP7mnNDM3u3VatTxPfM6eVjMLJQj8FTuh666Q3xr",
  "key41": "4HLwnHF8xGVSk4xnobVBkKz71b4gnv5JGsTpKCa451Py5Y2DiWkFxYJgvJp2LMdkPU3KqYX3EARBuusXLRj8oJnw",
  "key42": "mnKYb1VnziRCvd61rxieBoMr44HoxLVz56DKF1ZgecjeMXz1hLzoG9vhuEsC11R7xiQNdztuzSKPfx24oaURcGj",
  "key43": "2BDzJ9kiyofifpb4J2SxEyWrGNQ1Gp1d9Bw1gu51cKD8x1DqMeaS3DpLM64maUC87sXqoajcJw3mQ7U2bqa5gxju",
  "key44": "njUUcYYergvUuMtjjgpLasuDfvPsgaMVvEHHmcxejbw1Mw6qzU9JrRjRNbkoAmkmz3NWSoJ53aVT6XKXXA5JUgj",
  "key45": "4ntBrEvHLXXiYzpGUGeKNBvcB82fpCKDtE9WWMhkUQzcL6ZsPfknp4nK5rHTYFCFDedV9ouTioeyaM8DPhVzHtDZ"
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
