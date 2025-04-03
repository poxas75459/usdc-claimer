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
    "2iiH7ZArxMJbKWuJXpvZk4b7WsfsRU1s2ajzyiKpF7JCrBrjo9dN6W9BSnG6Xox4YcQBJZE5jmu13uFC2DL4JrhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wkmESTNQ9yeckV8BhbY5fhTUJXVX6jrYrkU1UKu8V9sBHj858kBdySMqnBgvkGHmHNDFrBxzYQUZGSRHx9RkPka",
  "key1": "34KSJHpiruycjtLmSm5Du1vgAmavy4PmTwYS6HjTaVdQFw1qriec3W6QaLFv5C581uDqUZ2HKbdLLy8LozGCvQse",
  "key2": "44aTbKGCe5bWyGf7amPQTPdVWT2ikfZdkC7yDpfzzXQbrHbFjEADSaUhN2AmWsH7JZoVfaJwDS74y4msAJZhunCy",
  "key3": "F9xC7SBkLkNCGGPCRYqg7vQEEAkx3vyULcYbjydV12qYc3HW95iPTaaUV273aziv6kRuzJ5yEWEn4A3s3myP25E",
  "key4": "49Qo92byFnxzYGjA27TLKwbHamqVtoEkSWdTWcSVgcGdd8y3U9LowT5iksrNFhnuFPX5AGq3Gw9VjknGeU5o7uTQ",
  "key5": "5QiQRy7dpqixx5wW8k2536V3dEoXSFKp9GVBLd5cRxvUPPKpvfJrw3LPcWmpe3SgpAqFqxNEAtdAEBYQKRCj3Nqd",
  "key6": "4Q7qs9KrBYatYx1pnkHYAeWFy5z84XDgwVt1oQh2omLFS2uatZS2fQt4ontQWmrUwWttpijBjRi2SXmnn8QTq1JL",
  "key7": "2kTTajAigTMWRXJLxEfCyz6JNbNtmRBwMaw4bvMYcQdNF7g5oXqZwuvRLaHS2eCA3WHfM1E1DbqDhku7bSQMhbWT",
  "key8": "MQTCY4FVYVu8kqBh1HovCsp93BX1GDpQAdxuvRefQzzYgHnLtc8Hpr9eZLTWnMMsB4oCyGTSa7coMLqVPDrywSg",
  "key9": "2Tqx3b9Sy856Vc64HbZfciAkcQgBDpH2rRiBEYonw4u62Qm5GJsUCG8CZuWRn5GHdHLbVVuqfZ43F1KC2S8U3SB7",
  "key10": "5m5iz7rnuqpVjxaTdSBfGPsyYuXqEmAQVKk9SDtwChVeHvC87XNdmWB67iQ4HVbJCLDNLRdAWithHYUNXfGxSSTL",
  "key11": "3RB8xug8Vz5u74wQXaejFWU5z8P7h7QiCwNqpCqeSKzJjShP9w3N35KGkgEzBEAqYqVksUymF8xtbKLeGiJWNwwy",
  "key12": "2ZgvGag5DHyMDXsEfpuMzRysrZKkwPH7Fc99bj73doeUDYzFUjN6pwbxZ3wzY9Utv9rheRAEhehddrFo7q9ozuLC",
  "key13": "31WCaggo1HrdxTNU22P6s1NXnEodKAWFvwPL3eAWGe4M3VQFHs2YFK2ZwpVsnKy61KqXSF4tW5cVMnc5N5EfeMyy",
  "key14": "4pEEpYP4pXCnT4QkXGWtzL3EKDfpYDcuUnX9feQF7ryaEtKJnPuSE9iXEgU8aSnJydDRpPnhSVJceqocVGSBRZdX",
  "key15": "522a2XemQu9Xzsd7Z6itwXLcrpJANjyeED3G4Lxiz8Giu1jDmM9P3aXcMDL5bHetae757g27AN7Db6APsBNM4ysP",
  "key16": "2tmHLv2jbwC2GAz3vxaJJzgdrx4k9c3wGpBwjKkBJrTtt6GpMQt4XhMs1wGbV3mbmqRMgNEjXYDdLy31qqvVMxJ3",
  "key17": "4wjWWLGPjfYBsSUYTT7XboHZxe1aYNGramBcyWvM7A5aVAbewwV3Wk9X8LM2URsFDGNZWqg65Z7okZb2C179iEZm",
  "key18": "4p4XQ6Gfqz25xrz8AZgBC9x1yGwBHLV6jjD5zWW1g1NwFwPMa4ExCHhW3Nof8bVAtirDWDjFmvkMkpt8tWoV84CG",
  "key19": "5aZEBhkQTQQesogaewo433iVKDzCxxiKfjSosfszRCJanLveVVwbbDzUDMLV2FUXJ9VWLz1Ws2YtHnyvjidUKeEd",
  "key20": "4v8EWvzHDrhBdadYwGmzqZLiB6oUqh2mutPFjfSD93h6Zow9JuyeFpdyJeh8gFscJxfSrMyTRR5xYeNngmjfDLSz",
  "key21": "5TUe3L1yJZhSVE4WkWkNU1hh9SyQewQ4RSUSYHTRNxcsGzfvqTvyWq669nVwZ8cyrzs8SzHLEnUydki8CvpRY4K4",
  "key22": "2XvVePjYzzWdgTtmr6VEZTY4kWs5qKopSzTixGZcyfzWPK9HX1VrSDAvkv6JrcgW7XmoKyFTgbra3XpZYHZuvbXj",
  "key23": "2j2LcAbStMz1JemYoeRaaYLmk1iLbuaajXa5B2SjAnTRQTp4FiRRpjHEAR5oAeaNcMwWgUFYhPuY7FE9ggeVr8C8",
  "key24": "UaV578fATdYmEiEH1pU2ufQJf7ZvzbWcJNKfdG54Z8Rsw8WA3tCVGuVFzRNqqRsyS52deYh3Ssgmvs1csUnkYbS",
  "key25": "4KEBFmPn6wgyXFV1JawRzmoKGMQtXXxSRS7zHdxQjtJNEaK9B3L27zuc812AmY54bU4mcSLHLpLbfKgjgBmAJja6",
  "key26": "4FL8vmx6XLkf8ddPkMnxkTK8yHQKUQrRGjD1hVXgkgJi4M8WJRUiwXrHdXkGo9VKrihfLCjpTWz6JyFSN9xbeBCe",
  "key27": "3xrW19FRznpuG492kREuP3sKX8zR3sSQRuraMKRq6hcrK2WMhbUXgHoE2Z2oZijT9U4bpXSQBKswnN8mNztw5H4F",
  "key28": "2tLse9fDTUXnyMRp5fxmhHcoA2eYKVX9Nw2XCoiyRPofr3QvY974vDXkZgbpU7N3RmZcXaVLPagiSdMnYVoF4ydf",
  "key29": "2UVo198RXAMNXWLDHM7rTzyw4exkLe3nVHaKS7rqAkTCEZnT7sRUS1p5xceTPGb62xK6DX9NwXQQmMfmL76nVK39",
  "key30": "42gkJWNGZbomqmqCbysRESZk4acNPJ5itHcb89RWSjZ3qRsvbGsCAstTcXQB5cmLNUu8EWdhGfhPCAjsQZzwQG7L",
  "key31": "4yBKLP6NPFoNPEPMnyF5EwDRZm6YzXH91RRpR4zRXMULbtGighN6JbWts9D2fgxyJjgLnZqiqa59MYnDRUi2jwSF",
  "key32": "44puYtTMS5K9L7B3M4fpR57Gq7veenYxj1hmFdDRPV3o2kNwExN8GFaoozwTB1wF1K7bKHsRFqaG7REd53GYw7iR",
  "key33": "3XVMduBumFyoFdL1LRjVbqDctw2aNN2Yvuf2LDtSTd6rKS7iKHdPUcyD1BydWGT2kokmMuF64VMZWcgMbLgipXVo",
  "key34": "ZEXpZVwZ9U4iaJHN2iC65VwZR5tibTGPLwgkp1CDXCNfEXbPiwdLrycG5HqGhe48LFUF6cCCfAwo7qp5nKomRie",
  "key35": "2hQMdAJpo4D7JapnWEkfR1MAf9j3X8ryveBGF4Unzhrx4A7Wa8ekQtey4oLSgRj4PET46CuzFBXFuEmSz8GSfa31",
  "key36": "KSdztLNzPz3jt5tmzxRcB7bdNz4Wm9HSAYyC6EwuiKndcP1MYPeaeDBcdwUdyQ3F1oDGtviKrKpdy812nQP2qH7",
  "key37": "4x44LQF4174NJmoedWDzvv1HSmV8xmwPe8GASdF4HNudvKLbFiQKmURxdLgeacWVP7GZkG7A6hvKxcVeZjqcMqif",
  "key38": "45iRJrHMrJrTC4GzBaN3EwiRxYCmPP6S9iy9KoYUivHUM7j2WLQCAEzCeKFXqcjrozZaYF9LtxjU7bUke4WFrrPb",
  "key39": "PGYjvkGir2dYZX1oe7PbaFg4A94nawb6GGhR27XaUojKuGsP81mqt1pEKoZj747BGcdqieGmdcV74sqvdxQrxra",
  "key40": "wztQsV8vzqYAM8SK1eAv4YJ2eP2zow3okAtE2BtVMa1Zt5Hg4YBMirfkHU9moZfyAoem8AhBdUccpsXwmXGRdZe",
  "key41": "3PsjdzfFNDr9qQxkDCsnhcXYF1b1BXy9W8NGKCzK6jHSYeeviZGex3yA24THiUiXhx1N6u1UjvgLRCfuMCoNs4CJ",
  "key42": "5spPZb2ddP9Ez68QsvRL9m3c7YvpwmQJHYVum2gwwcJa7eqDy1fhMT8VP1QmkkeNNXFyxT1yEvaGBWHyDmFjQZiU",
  "key43": "2sr5hLj6TYUzRmLQHhBa6iB1wPXkF2KqYgwRM1LGLA7T46mYQiTaU9gb6b7RjmdfxBSpJAMiVLrZGRJKxSnb6aex"
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
