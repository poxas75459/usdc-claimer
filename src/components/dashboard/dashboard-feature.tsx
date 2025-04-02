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
    "38Tt1Hh45K7t5GPFi1QFE9BS91u6Jokgk52moGaJmY6pHqvZArCMAg1Pdi8vEhFcEQwdE33qJvNK2qhQE9QHoo9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t32xTC3vry5NtW7tVvqbEvpnFmeDjjsYiyo9xAnaPoNVo87ut3evnNa3wZpM85Qn4E3PT4A2eD6Q2gRBf4Ww5mD",
  "key1": "4T1SCCFGp9qHDXFTu8RMeswJJScPhfCCwkkJsrbwatxNh8j1MEFpLFwH36b8p3itGZUFCU8wVkP2Tdv76yAPAkfK",
  "key2": "4DvbMgnBCKmZfv5pbg94ogT5uyA6S1tGeEW95fahoMkiXLhpDfTmzy7jZYP3XLSKmh3gz2WWzaMqzYp5qdTXcytc",
  "key3": "4fq79QJFo9R1J9k7dNAtLoi3riP6Ap4uNr3MMH6rZEaU3wS7HLFrvt87wRy3TYixgHZuKeuXzD35Y2R777nNnJZL",
  "key4": "2Zjje2YUNw7FkF3oNXbH9YD12J9iqjWkVuqnQdfp8R2oaBUVt15N2wagBu2u7EZAPtano3YiX4SiwtvL1rycBfEs",
  "key5": "5jvJFATdxfQzXWhXD7nbGduFygbGA3NEmEZwVy4VDsfUE5w5Sk3rtw7LAPM4w96ZPyhdDrwXt4JMzZQ8Bgo1S52x",
  "key6": "cHkpmSCACtFdQBUsn7TCw1quUNeEdq8QTgNNWhiYnhiLSbiR8CACwSQxTsor2JAnE4qdM8r5gu4NQboCttv5po8",
  "key7": "2sVpT5b6qZ8KhKfz1XDzg6HnttTF8gfkvMY4ivPcxJj9WcQdB7efqQB23LC2tUUPTKNURUbAXWtw4fkVWGoCUgL1",
  "key8": "4p9Ca3UPX8GjQzZ7vEiSYoRaWeyc33DkvNkuJQLLiubYNkRaVjQSJguqpnX6QBRPEVeE1Ssr25VvM6etShixv711",
  "key9": "3LuiQbd3AUucu5G28UNNdD3eVQeXbydHuFmpYTCcVKQNUiWeuVm3Qjb4BxBrx1q8AiWCGsPSGQ7WHJR27eqSRaCH",
  "key10": "hmeVaqbKqUVmkZhU9HzDbphPG3iC9eSXSAeQeND2DWkpef6PjsowbpU5ziNu1LDz5zRToidVnxRqSyeaeQZ5Cmk",
  "key11": "z9Tdv3tpq2oHiDBGvqEvJEd98tV3a5pJw7m51CUDYwBW9H28uey4ST1rXD5rvFhCC2kNHdRqmZFx5a9ZPBaRPyu",
  "key12": "4Y7WZZCKiXbQpjyJbK9bw2kMrPsNnca8TdoWjMF2aWiJjNxtXaQzbn7EyzSj3adBy2QeExy4adUEuTzLKgZg4KF5",
  "key13": "4T2ZwzraWVKMNAfWi1MEQUhK2Wu4RbsTSyh2EST3uegHWKZmqr9ZAtYNiq3vr9KKNt9vg3hvK5MVtEcyaRGvbCLm",
  "key14": "WpcEP37TNVkoqjZKVFfr4zK7beBXFt7de4sr8QFb6g27gTevSXYpApEvmNv2FdN65Xd5p3VgnmH8pTw2MoooEZP",
  "key15": "4Fss4BE2ZgETZbxLo7sBAJ8QgZvu4UGj7nbatCzeiWhMgd9kQNEQF2TqRtkxAQseLgfBD2jN7tcGrLpBi6mfjtF8",
  "key16": "67WnE82L8m9ezPph3X8J5phqPieYuVutY8wru3W8KsSBxhcdYFfcoBbrHXEYdqr1Nf6a5eAuzCDA7Ag2Z2g6Apao",
  "key17": "LwhuT1GSeAeQQunf7PGQh8zCJAPqt2Q2MLQiQmxj6eY49qs7cKy85Fi8LzCFoHy58tRcP4cf7vfj4AXz1gtANTv",
  "key18": "4jzP7r3DqgqkUpMrKuDwftGEDdJUm6iLDe6EKySs7JJL4LGyky67QEonVDvfps7mztHWFecpt7rqqCTkBUi6d4XE",
  "key19": "p5Edqc22GMctthaHrsA5LHjAY8h99aXyMLvJBuxBzPL2TxMQwSm6jq2doSLJoXdeNt36SvCm1A45BBYb8EVcsv8",
  "key20": "58U72E3uLAvCa4AAJNn69CtcERirFyAKL3KU3jP4WUQfVJ4Hyp3tNWK4ZYAv2f3yTepADh6tNT6BgmwY87JwY3Q7",
  "key21": "2JYhGTM5MRMWr5AFHgG2cJHxYPqDiruqKAyubWacB3YZFheQ9URteEyLCDDvHUSNhiV6L2e2UhFM7RymJ2vU2U51",
  "key22": "3E33j76vb1BkovuCZ7jTwKCmZW3AZ1JTB5VcmSqwTfk1kEn78sHDhcJmY32Qj6o8axHkV3mguW4w3tCj98J64kNV",
  "key23": "53BYfZBaaoFzF2yTC3VDT3jwpzjGoFXXru7TBKK8mvjFuSt8mh4w8jNHsgWjHEMnh7BsUebD664aTxukqDxyUEei",
  "key24": "3Lu5R3AXxV5SvSGWvgPkX1MZGSzLWhu2n22JmKKQnwm74bxh1hNipsctt6Mj8jK9hUw8oo9iNmEwkiT1JvEQiRTs",
  "key25": "hqG3FuygfVSSSCVEWKGD3b8M6v8hGfN7cM64nf7SHVhTzw5fYrkXuzmhfvS2bNYcuCsFrcB9eqQpCDi8ovc9fwL",
  "key26": "67MSdxfxxY32FfFupcXxkq3YKjL7owy3vfhAM4Efc3dzzDpWwSY18XaJnaPtJi7ZwJCUoLzm5UoTiR1rGyr1jFFV",
  "key27": "4zmQXkLuPSmkkGpEFkj7NJbVuZSD5Tih6qX1uybkhkcw62NR7hE7fvBo9m1MmFhMssiqVxPdv4rWAR6veKcGvCkQ",
  "key28": "omK6kkb3E2HZ1LL29bLXzYjkNabkG1KAMjP5ScKWZwPjFtg6L7NHX2vDPYRfWJu2ZRVs7MHFennimPHQQJgQzGb",
  "key29": "3ZcxRQZHo5fh1FcesN5ivLMWt5hCxSmDytKJcZGQTB3E71SpvCFey352kT2gBQfLXVFXMp6cnaLVYwtyQXo4zdZb",
  "key30": "4MAEZoJZFXNKruqmuLF6eWzRdMKV5QQ4ERs8ZpKPnPf2Nste9wnAzKM1rNC7zNcrKVP7fbxmvwkvpFdFnDh51JiU",
  "key31": "7aLHQ1qmX1s44Ce3gvmLUZKrNcYmCHH9LxWvQCasjx2mf1SpMsZkoLSpwssCAqGE3Gpm7cyecZjD7HGkKTSk88f",
  "key32": "kSFWKZCS2rUgLeerATqDMUe7Lzytncr5UDEP6iSMgdxgfscTxXnFm4HQwtfnVE2PwjR6oVz62XtYhGP5KScJBmp",
  "key33": "3irEgd9HB7yXNTRHoYocngrrLY3L4JVMtBnkG8UekqJyUXEzP3VCQ51LH19K2LmfagfMwHP4FHpGzHm6HubRG5Lz",
  "key34": "213fDWimNv39YZNC7Hzwig7hX1eexb6yu3tuZc4UVzgkv9vzkFLKGgnQW9g3iEiNy4Vrktpc1hVorPrXEqmD1aTt",
  "key35": "3QHjNFQzWcMXrnf6MZfsfpMtaXwumsQwnzNrezefJTykg3E5pYVXL5LnCttYCuUDs8Zad8mD1Czp67WLAwgwzR6N",
  "key36": "MrHYho47hn4HiVfFgCsja4dv1A9TV9Ync7bvTe9GyoBarhUXARDHqZbttt9jTLE2QFjkp2aPGkVECM2VTXNWSXo",
  "key37": "5BVoeCH27KgFUxHcnsKLKhRDyC2dCUmoVEG592c5tLB7qyU4UnKwwonFy4Dwh8nKRvKyDab2VeQvSXkKF8R68mbR",
  "key38": "g5B8AX7heyGsxaaNuF9SrU1CXUi2cJGMVTHouBTfcxF7pgsgcYppmtocP1F5D6tMdK7tTczaNK6E9ErkFx8PL5U",
  "key39": "4TNMUn6Wsx6z8dDgF5sLPfz3aQjypBweiBq1Zr7dp2NLpPicoAQZwBYMUYPL5LaGX8vLVLGWZFV8CskWdbk9Nysg",
  "key40": "LMCcTe43ZYcMQ532XEQFK7UC6SH99ML8ee7799ia5FXTUqqevEvgiCDa5DWeiobFuz3ZfNdYunt1G8SfRBU8oXQ",
  "key41": "4Fksf6vS4N41JaLtYBRSAkVQLboYndoQQHQn9XczLXaAtVSjWb6DAvat5KwBEjusDpHJuu3xHogbAhBmweG9t7vG",
  "key42": "4hDbwbraYeBBcQERPRog9W74XMt5jQBe8jP7HWttRndS4ie24rsgTUJp8BLFSCpnNiPt1eV7YCdnbsozebc8iCch"
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
