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
    "F2abVqkZBaueYZrJ4T5b8Fhjr2xBqPdwYLYrneDqzzip66UARh7Eztaoqbn5rUvvFkWqDQy1PwfBWnzFo7nDrjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vyakrW7v6gixvpiaMSuTh6Dku9JvV6eNnkEuaPE1mLz5qjHeiqjg8bmM762Hydfr3CpoMke6FsQogvGebQNJYCz",
  "key1": "5ogsTX6zcZDqJGsy3BQeFoeUDiXZNi7WwPe1CP2vwRAdKus5rcKjKJW9htD4BmZ1yzaYhk4N5CpSSoMUa1b15yvk",
  "key2": "4RoLgirRFwHUqzFp1u4Qx3EebEEvqGaXDW13hXEsCYarGag1VGEkD1GQL8rUkKGUJC96u2PwMkjzF4RkXGgADFW1",
  "key3": "46vSF6kXmXMUQJUJcneVbgZfc9qaUwbbydgMEHsKR79xkFqFPZAXeJcZDn8iiVJctXHGmKDC42ESfp7aubKqFdzM",
  "key4": "22whQV8YUFQYmk3Air1dDZbPJPmaUNFuAvKVxAc4wd3bynVB3uwUP8nQZoP7j6c7qXgbXbFaWRddioyyjwW5brCQ",
  "key5": "5JkRuJXm657ts35F34oGypxy8PNjcCnHz23nwcWVcnfF9w93pUcKbMfcgSBdqzsCg3TmghAEti2f8ChRkhy9iBvF",
  "key6": "4rvo6x7v5aFikrFWHv6aBpjynzzt4p8eJ2FGqF6n3KWm6pFDTvF6bXfRoozvPveW3iz3TqE2cQmakgwCWKBo8GPP",
  "key7": "LCKPpxcGxpStm97K4kktSQShB89htaxGU1JV2urx1p6Q7J5TPgTbYQ3DPiuFZEE72MPXqby8o8VpsrY9eMBAmxK",
  "key8": "2uZ7Nr5DJ2upQFVAasTmgZY9odh4WdbXjp8hnqKskTFJPQBU9ErBtNmymYTwVR5e1vazvgg8A2iEJzvWptaETzx8",
  "key9": "3p3dmo9KyB1xJGUU4wGCkuDVFW2gh5JbgY1HLaN82ffeNjBV65kPGHZYTZf8riKS6P5FX4s55uKbWbz62u8bktwc",
  "key10": "3H635EvjwHsSS2vt1V7eCbUAwbnNK3JDcTKpqqzTWnygb2Vx8H1k1ger9XGNGD5VBHEJfd27WnSqxrrHtF7XFoEJ",
  "key11": "2M8X5BiRPLQzQ1BxmTvcxUnBoz3cZMPgJYXemdYbptqMn15h5doreJEzE31g7B6syR54L6KKtJgZCXSiQzWwnVjp",
  "key12": "LLvD7ik4FX6hxc4DGhWCsbkHdsVvCbQ66oiqvPLsvmB8n9XWbWZLGvdNvBhoYvHyP93A8x2VhP7RmpbGu8fxfQk",
  "key13": "teeGKY5KGtSAJbjW6DZxj3BjF99YYqcnfycWtPbbdBoz5NYX5E5RFGtCUZGt7W1jTHMvTnChK1SyUnbsqu38REs",
  "key14": "shm6r218ctFiRyU9agY8UiJ11abq2tTshDjAj7amZmn6UPHBFHa92heUcJNQpc5cExqN6BjZn4jLCTGcQoPPMRY",
  "key15": "4Tdwiv8rSkffPePwEoYvZwepSabSgYtguh1U39LHbByFxjFBiAVwVjsLVhW4vK2esyNdHwpfyh7theYtwrsC1spB",
  "key16": "3joGdj5a4eoHVUbbLsuCE6ZhAhoW6jdeRNeByEUymkCxQs2AmVaMX1Qz8GQqE3bCJPDTAas4iRcJaWbAbE9APQBM",
  "key17": "6RtbSjrBcEqQ3nAsFk6xxJp1UhrbGBb3qVhiwTTmAEDqWzF3WKzbE4gY1HU6X4vLyGcpnvVzTfgtYWBHf2bVy3V",
  "key18": "2Z4KJkMH2yES7gHJ4HmdRvuy98yiTQ5vpv42RCoMvZWXBDmW7sGkSPKqKwFCsMj9eqAGBrVwXRh6yQuU85p3KieJ",
  "key19": "4AfJ78gLKBRXQtrT3Ybe2DUyQBmyWgxTAEDuiULr4hmoeLkziExjAyUn8bu51UN2bNx31He58svsa1cn7fi7Wy5b",
  "key20": "5xEhhJ4KoXbep9XqZHVs2xMZPRjay6QgfXVty8drRvSLsYK5GwfxpQfNJafJ45Ctwno8SY5m5tWGzb5mRBcR6ZJR",
  "key21": "2A8FHoGiEDCiAM2VDZQJss65GsDW9dxtmDKfy3RYrp8hD4ozaAeWYBXTs2zVstPzHj7TGVBAaaiBfSAPskqS8xch",
  "key22": "2yB2wSBxA1M5bjJk9fCseWnJt2yNPFw2f1szV2K7Ar6VBzEaCdExTgWrrLYaAj4aEnEpoKiL8YrSWyvEtjMJmhZP",
  "key23": "Vsx1RAZszN3bFg2DoG3wytC9Nh452gHGe5YDZhzG4j4S89LQP1iJ1nxtBj31LVQxutL2iZskXWjB9mA65gFmrWZ",
  "key24": "5FjjC8H6govYwf4t4qPxojzQDEWQyNZFA9b45DvzopPMTYD8FDwA1prCwXm3g31CAAd6woAHVCdU6HtXhnQFmi4p",
  "key25": "4x6GKA6ugNNBrDuMncgi1faMgztQW82p5YPDbEBSJvcsNNzMMGhbuWKY68KPoKL2ijmi8jowLjXmbyZiBd1S1oeq",
  "key26": "5QnxrtuMrdVv6Tg5YRdWHSv82NMTuuxb8VL27Aue9q11FtSwFm5BgFEx7z7TR1Coq4d4JdVhrKjWrBMhc5UFQKnH",
  "key27": "3c9fkv6i8UVV4gGzfmRdUwpjwruBz9GH5n8CpfiL6Qq15Av29NVWyiym8uEiR2AgqpdD7ATD8DwxmKiWscfjApaJ",
  "key28": "4P9ZtWcMCcKwSDjovBpX9Cc4xQP7PCbZcYsf1vrFAEE7xgvzjb6gLyZVEUqXaF7zXCLSV5JUhrN6iEMtBytnnNxV",
  "key29": "Tu9WGwXmeSa46ff63y8rGm1U5iQorTAbou72xVSR2waaig5ozmCMzTHKc37UMJ6H5NneZ3BXzU1jYdnWWinLQPP",
  "key30": "2CFMww9Z2opf4qXn4dsxY1Sn4dCRPgrYWhsZcpLTT3r3vzSJHGsAAy9uJEcCBaKtd4GmSbc4UGb3kK9GpGsqgpyi",
  "key31": "5ScGFBWrEtm9hQePrzuNNW5rLVtRiqfuiTBao4khZVjiWaSghZk2yEC6b6rAKUKjdX4S6FUM4RzpEyY6C5jUzP7r",
  "key32": "2UJL66YrKLpxtG4vna15V93b1XnL6ch7oF8si9qc4GYntiB5QyXzs29oKasxWLXFTZxj4PShqeysyurzyWKz7Jkm",
  "key33": "RY19pJtkzGNWiKpKov6aRDctGTLThrBYJAxyLW5kgY2cTQBJhXFCqVzGMvuthfUubkdP38fRm5sGFR69gAiKGWt",
  "key34": "3sb9mo2PKXjNz24Lo3VfL5TmB4xkJYfLuRbXVQ7Uf8rStbxdjZHZVoRjouKWu3qirZC17ApnZdnDeKSE7US7dQRv",
  "key35": "2kKZsH6VJtLu7odDyj7BXnthH3yXPvdkrvsBQnkHvERG7DFrW41YW8gBiWc8Wj4m2m61ANzA8WGhmGSzxGG9yg4m",
  "key36": "2urFerh9eviQAnGM7RKhdD9ExCUEYnm6E9Z2R7ZEzP9Ur21NBa15UjX7VjoCqFKKDorAnXwjksC9yeyfjZLePrid",
  "key37": "4gUVzJouSMfGBHdKGydFJFVdB7cJvHnT5nx1vwzMCefDSF7UNhfXi9snawDAx1F41AT9GTauZMGQMZBqTCxRdLdo",
  "key38": "4zNVMqLTpe8F9zeoHXbvBaLXEGNYL2etR3EofUGd6ZpFxdzkpEnNZBDHfVVu3vKcNV7B6rGmjcXtkU4VKWmVBN5X",
  "key39": "mahxoDLoCdhF6SpDbyDPoAHrADDMsfMqPBqD2B86RQnfnCMujaVSPJCUsu9E6cjg8AYo1yZep1WteapTrHTG83G",
  "key40": "4gxSfs2v5hJM9aXs93GsGf22kmYvYKKC3UoAbe3ukX1w8Fv4YeFoV5Eg8UPuqoShJzFLF2ZEJJpPs2JFYhTKJesP",
  "key41": "2djmQyuzvi9agtnqfFjhnbfUapfKTBpq2DyBm5Tx3Zy9Aww4Z1bx6vdSiTXZUjvDV4mQ8y94ytx91e1wH3vMy6bU",
  "key42": "43PctMRyUwrBqGoHHjGC6pf2WbNEUEi1BEd5qR3bFruZWURzmzepQA7THGqhjg5W9zfGSj5RYSNRTruz565qRjf3",
  "key43": "SyCiXaaqG7D8n1cFNUrx9GCTT4dtT8d1nHTN2U2iUG5BSGbMQ3PJk3JDJamkzT1sGNFS33caVkLFP34r8qAp3hB",
  "key44": "67S5iEG4jA6s9oHN771Zd6Aq4rsiodqYkrnRDDtUbzK4gJZWMKguyL3R9AcPPm6WCqZdnMGkAdNwPrM4NR9gLgU8"
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
