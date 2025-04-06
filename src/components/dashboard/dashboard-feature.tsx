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
    "4X7oFMaQWvc3PZcUiGN3q724riNNB92FWadPUkxrzDFcwUgFehcPxe53ycEwptx5Dj5MnhPs9pXoZ5NnrvHzhUht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hVgxYqsG2AwjwtcoAa4Z3mhErsapoAZGqpvSAgpnis58ehxsgbAEE7MRMzwVozXPRN9P5MyNFMBRdpwB25ovRJb",
  "key1": "4CeHJi7r9DfXnSRNAYgaawdCzEqfep3XbQu4nSwT4G5qZQakKiEAwjnCFYtQMFSffr28my8dB35fCYS4J5sjjWny",
  "key2": "2BJCduMzv79yDm2vYT2JHkE4qbpcX4diu6uqmoHHdiPFdUo8Bu1d644QBybz7DW6T1Ns4ewpnjnFft4FCUdX6pQx",
  "key3": "5gBsmSUCiHrDDyaUSaBFiExKCWSJMJrwQPSqeGZBuP8dKQzb3LWdqgmaZqaRqZTTQWuRAodYJEqfEmq8eoLubihy",
  "key4": "2acwqNzJaaZag8GFRrYTo299DvNWP9NPjdh7DiDApzEkZmP4YjmTdDxdVweURK6K4E1iyG9xVerTfZm3SQ1kAFPE",
  "key5": "u3ZpMC1Zy6c162cEqRVNLCJZHhyZNk2EPSDKbzCarEHhEFsGfK9mfnN4Bd6rU5QncqcGRGE6kENcfDX4UXvTpQC",
  "key6": "FCitmCZ8f7DqMyVBLgqu4toiuSr6KMEkAVwR73AqzsDbjEPWtKAs92EHQ1KEgUFHAxFoL1DiEUwcEZ5u15w34Y9",
  "key7": "3DmcmtS3cA8ASts8t7ijDB9FLAGzYNS3KAtXaxuE8o3u9nnDUwh1AncbygEG7PBgrAfem2sjSgKbG69wi3oz98oZ",
  "key8": "5mz9aPWefV1r3YivbErMz1MjY7R2qN5tkUModb4e1wDXVGnWRF7Fj7LoWi4fUe3AkXEwmgWzzRKkef6mDyQnLcT4",
  "key9": "ZrxAmRmFXSMZ1K7RsUbnCc4NWtSju4riRqvUuB9EYnH8uihMLRSPMLFyDkAzhLLewUEHpy29p9V3PaBNMakhq2E",
  "key10": "2dBwrtiYNmX9hBycWXwoQeVzkqXdkmWsSjzoXhcSrRrUaHzPeHTZ969BRrG2Q7Zhpmv3w5TgqNUnBaYV1Ze16EYj",
  "key11": "2CvAvEuvBtTJEAFTJxbNCkNiR734nGzgs5qpDZJzEUPtkrWaLDN4GPsgerLt57QbAMV5Y6tDAD2UBbVwDE4BBrdd",
  "key12": "3HXXFHCeN6DkKBpcrZQDL2sFN7DGyEwBwsrtaR6sCQwAY1FazKD5kojtwxj8bbxTy9Qfrxj9UBWjay5MSFfPr8kL",
  "key13": "2tdwLcAobtrCbpKtW8DcPi8okkqZkBQ2T3r6nsDzBezKSVCdBuizQEfQDGBKrYSx2RQU9DhxjhJuRExE5LHsCdSq",
  "key14": "kanRQAosaG4YSuWWn65Cjs2Cjncaf7FxGn878YGCBLmXDqxjBFeSdbJbxxajh1dZGgsWFkmQpUC9AEL1UjiUc6y",
  "key15": "P9HQmyPEezGQstS7RBW81gUwR144M24iGFnuBGx4bcauqtJ1N1ijjEU9RdsorCFyrnL3L9xUTnBCtQ9RvS74Diy",
  "key16": "4BtCwxnGZUiQv7TRicuNbX4FTvc1ccu2PcPZXWvRjDVENg9pacyPt61FXqnimAPoxfpXRc1xob3juFWQSEMjAjCq",
  "key17": "4EAnJupbYxoWjoT3TWCGbBkq8jNUR7wG3o6nBnDkownsqvFrV34ZcJ1Eh4hNghsy4RSaUDxmxFMVAx8Q1m25aiqG",
  "key18": "i2Rd6mpyLLMX6nHYrbhkLJznHahDw9dxxgnnLo8EFah4frR9AHpEaWMK5noMVY7eKDbhUQr8BFAusdswbesjqLM",
  "key19": "hHadVYLw59D5LDWE4dtKZ5UZ2jKeYpKqogg9Z3132F8BsJ6imsqqxhnETydc4JaWyVKTRzgGzVXpvXQ2ynKT5N7",
  "key20": "4AdwaSYjHfH5oY3FbgtFbHBY5h7WGqV9RDjD3c8aj2fWiN3NGqts42N6bBJ6Rc6x38WicYL1AneBoNjGt6y86KLz",
  "key21": "3on1y96oE9eePFqK5sg5C2B4RnHSYQeET9GvEsEBbDnNwP16KeoK6Y6xEtYef9hZ1asUh4XDhisBxEZrKuxY1hG3",
  "key22": "4dTSTstAbgV8gudc3usjgydYVFES7EWRJQiWDvGVQVa69NFGYzQUNExWt8PGA4DCVLAwSvf3ivqsUYNbAMcvR7D2",
  "key23": "5mZzhk5t6RUZw9FRKaNVZkhSsynpmLmBDHs9XGsvjsMKNuGDB6aMq2CGQb6Yq7uqQHw46NkzoRdSVgYmtXtMog1y",
  "key24": "4mYXSqnLxaXJm3cMdEdo1smeKzW5DokZvRmy545eAeSNZYEUmu7BUMyBLLePPEeJERAxkGxQGCy47F3JwNarF4Tu",
  "key25": "3A6JhKijcf4P6aUn41duRJFvh1uqb6htq6SsWFLMCf3ty9p5fgNqRCL3fcSaCHXMd8UeZhT6rBgM8xK5bR39RMTv",
  "key26": "5nsLGr9MGUY51exPHr2wyyERmZdPtMhaFPuQ98EPeMih4C3qzfybFdzvKDEXg3UoA6ch1p5v4mLvvsc1ZTkGTDBz",
  "key27": "2iVBrAnbWfATP4zZUU8xWXZv4h5b4J6F5WaDnzS22szWw3YH39weGPPsMJ4G5Nun7zy59yKXYQaczKjxX2HmcHXU",
  "key28": "64n2P4WJZtaJZW17dWzTbpXSuNtr38Si1741chYn5VwqJvA7AMoEDSSRt2pR1BzDZabs83pT8kcCsxTgp4KVzBqY",
  "key29": "2ZpRSzMhAdoLZESj38xyNhpinPvos9jrwuTmMhiDxWBojjYN1LYPk11jtHAYLr6bpusqn7VhSSq8GV9Kktjt6spz",
  "key30": "66xvdpbZksHcAsDPWSuvwykABJRK3V6JuFxy7wLaRu46qDn89xHw3gS5f4T6NzkpM3ijkn2UgJknGzZ3THh25VuL",
  "key31": "3oXcuz8LSH4nq5iEpLae9rCZxrRpWTzzhJmAvaEPYc3AaZ9A6ay98o18Km9R8WWWUxJ3gLdJeAtMX6T24A8ZgDbQ",
  "key32": "3C1vSDVcy9NYKM7m59YN9NCYV8ZfASCdLBuzFMDymzRAb26MrRCtRzusdCxfK75F2cgx2nvLrwiGoW6sSpUp69rC",
  "key33": "4HhC7tkW1tXBFxP7MjEJ7qoSu6CVCf4k1chnAfpWJ73VdLBxgMbPoFqtCDNsB3wi1to65KssDxanGkkqA1zXGidn",
  "key34": "5Z2JjmMqwywmXusL1rTxzqfzdYwPRLV3mxduDBSyQWCqEimdaPufetQFDaypTXupejKvnijasmAhxwHpUWVvv2Rd",
  "key35": "eWk8zJuhZQ3fjof67sJwRgRLcwckSmYzj14whRaFUaaqD3LksbeuyBPoTwMXurXJ3CT7dk2TbnAxV4qAPDRE7Xq",
  "key36": "5oHvCWX7i2c7fQRNoHLKTqFKR8Y6k45ic4GNWbspDuGRZcoDp5BJBDJ49kGDsadcWHrJuMkZ1YLi7VarHMtb5x67",
  "key37": "2HvCcoU4RRyVkNc6iJedeMJZoDaGEM6H1665qS1zbL632UbEkJYdMbEVTYV3xpEUyEs6rB5bAXjwyhdezg42FUMn",
  "key38": "343wQwGqgTjo1EgaeLRhivQLhUL7ynAS4NjxuxunWSyiD2Cy8zJwdEiK8hG6Lh34zwsGTbJHjMCMj2c1VEC3FVtD"
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
