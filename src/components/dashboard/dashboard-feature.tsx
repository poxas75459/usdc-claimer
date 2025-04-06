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
    "YaVMPGJpHR2gB3FPZfgnMYR3s8No3SG9kQuVoc2cDmBVmhnA3SB2j15rkfEf431TyTDBqRG4WuCHEsTMHG2fB9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mV51xZj9zcH4e9FDkonLZLAJbxsHC2Vc4T5eixD8MMSt6EefDw5rqTdeCnqB2pGrymq2ra6QWeK2BVdVTpHqw5Y",
  "key1": "2mmPSiiPKKEQW3HvRxUUx8crJZ1SHG3wAhF2RgBtgDtLQEuzdyhjGKpVzgc8CJGGayE9xj9uNqqKjpy3vovJXc4b",
  "key2": "5Hdt2Fyeio7QXk99hSaMgeM6DPL69j9eNzgEbvqGzr5VhEDf16Au1X3RAhQ6W48hA1U5Gb6qoYf7njaXrDMMFupN",
  "key3": "2e57MMYBD696xHS8tqVq4AtCVzxKcsEqVRF3qTN7ciWwJr5XoECxWGrbiJybgfJe3a6TBGeESpWd91NUSgi9CALf",
  "key4": "uxDfmd8WhT2ZtLbtQEA9a6pXFy6r7iwJzmFjdyfQanNsvuFugCd6fBXwAQ7MpcVfmyyfMK7FhQx6fYbLGQE3PBp",
  "key5": "3BYELrY9G9y8jbEjPAP51SUpsLpEPRoCmGz4QzxQbFRCZ3j7eLaAKWxpZSzsjsR58cj7UB5hEdXigwWQxtFRtPhn",
  "key6": "515uj42cU4mESXv4Q7zeLwuUd8DzCeq9BYUYNG9CSuwDokqe1vyoFWS7ENW38x5JX26H1BYNBiCMYP7852UrWVKs",
  "key7": "riaNkg5QNN4JY2H6KJpNnKkP98cmckFvMPcuDrCj6GRTm3jsVEHE8LoZsVkWvFvSJgBA1ydwtLRseUiRdD4tMkd",
  "key8": "oFcRGe91C9FyCEbWLnB37Bn7BVugju1BW7id8yctzZRVDqC4ByQt2x46UjPB6UNoBNYAdFoR8GE98guuq2uT5ca",
  "key9": "4RRteuJwRkrxZ2vz5XCZMEexFAmXDhJ7juuNXaoE8BmWc5SX43xVaJ6yxW8r7w2nf84MRWctc8u6ogaCddaxUaUS",
  "key10": "5LpvAbJ4PjczY8EbgUVSHjfZSjT5uH2pCCERSGM56nNZLFTWqCQucZnFiGUYrJcdgijvZfxjub8g1kZBaT8znCTB",
  "key11": "4GXBAPVMuNvN1q5drDd6fRStoch5BbPr5s7rQnoYJt1U8VFsdSVYahVadSw1q6v3ri1yCKnjfRsbuNV9WaF3qc7v",
  "key12": "3qaJ85N6fwUibKzjNXuYaUxCEfo6kmACbmmTVeFP26gRUoZ3MUNPVPAreztUAgQNL65Rxu1GzcVKAjohtbV2rEGY",
  "key13": "4HupLyHzAFFzNx5TFuZgUAmNr9ontoKBuK8kAXJ58e3BXUhAVkBJgQzYyEJb2VasQbTzYBcDGfdugY8aGg5xyPPA",
  "key14": "44kk7zWdBp7T1VZSzSLirtUkp2CSBjJ34AazRUBFVu5R65DeCucwq8yKtxS8scpZZdiCmfQvvGBn8v6nohEsZi34",
  "key15": "2YmSL9qg4zKhRxvrqujF2T87BrKPj1Goe3ycPPMSNpPnRrZkmHG2jd3MWN9RfPuXu4vLbdhnrYs7W8PAwu72JcnW",
  "key16": "5TsNvDjs954JAZcbzPcWoqpbUETBDLqrBbZfZ17c1Y6jyFX4ZdYb96CYYqH4hmXqg7FQwmA2ZK9DitYRQTBdVDqC",
  "key17": "23LEjJ9fa9YkKv7K2B3gJe2DjkN8EKxtTLADyRZA62CSpXYhnB3myFEpPJvjzeRzRahXuEmbV4fcmtjf6pGzxPV4",
  "key18": "5nbHoYr6hs9tvgLKVn9ssKCxi7NxzqVqZ39Fg7znM17TVYHu3CeEbVvYSXBVc8vYtVtoHP9H5Uq2wtT6w2ADA9yM",
  "key19": "4fxEadjvxQXV2mD2mhALMhQKvfF2fvc7xhtjeBiTjR7qjeK499aLr7WDNy92yJnzCTXRE5N1PgZ1GuBJZgfwQxgX",
  "key20": "2fELWMjqrExCeYSCCxydwLmt7dYoXDrQs7e5fArytMpFjDCACGYSB3dEQpFVfhXqXnvW3e3wBuaS7YSouJHXtHUM",
  "key21": "yWy34ocpJt2BCChedUhNAbkEtM5XEWFPs2JetPzCGkvpT1kQD3Cx9bV3FU3PKzNDUXSo38TAseRcWQnbD9XcqEX",
  "key22": "2kn5yMiw2TEe5QDUQ7BxbgVAMuZQqoHuUJHSE4Cf8K3sTCwEWPemug95ztFNFybuPf4YUoYxZBWmX5W4QtUhVndm",
  "key23": "49nXDU7BxoS3dAAvE23v2XRHzqAxn9hEppsHHsm3as86uQeaVq61QQ5snf1edxaowDE3KJpyEpeHUV37jozK61eb",
  "key24": "2uHUTKqxPXsjg9LHjUNFrF1s4pyKH3t8JGra5hWeSB9pAtqcbMDHU8mjkauoyZhkzw2ysPm5ZuVxvjbByEb6XuDs",
  "key25": "4GZy3PqQ2aC8NuJ4HPDesDCra7RmXNp4tVKezndCKCjSHFdUjsmLxrp79wgMxxPdjaKBoVExwiAMvBc3JaXYoKst",
  "key26": "4ok6HYYx1rSqriEXu7uVhEWujkMAs7jXL1CDLJMwgHWE9u7DHAGToo1A5b56Pes4YVUwtnaEA3Swbfvp52PzMRzM",
  "key27": "57D5Giy9RtYeLNMuhxCgz82x729wRQuTrHbvkJgbKkvKJ1rNPUet6zVzW7JT5ugcjFi1TA6JYQjr9waRrBmpj1wP",
  "key28": "5tygx4XotdRooauZEg15HVHWqfNkSiFXhh6ayDTqLeraZ9tMdWPDwqBRvPp42Eb71xTCvrJbe5viYp8MXTL9YJQ",
  "key29": "27cVRRy1sUzBcTJZPTH29EZ6idaUiRbxDCxkhV6ojRDDcfifx3Em6RzTKWRuS31cDaqtnGAYivfKeU8FZJvP5mGb",
  "key30": "2PTPp4c9hfXLpxrLMrvso7T93Hq6ujwRJ39Jwkxn8AU3tmPeYmkfboLukpfsQ5UNEoHY5nh1WrG2Z9PM9oScvyr8",
  "key31": "TURWwEB9QRmtTQ54YMu8CH8XFduuPcJhqNP9htzYtqAwbdCtAa9qWtWymceAdKPKcKbGfVP5S6jdwoTZDE7zajv",
  "key32": "5ms43eL2ijzXLUJcVomZTxh2JtHL1WihK7suL9j4jZQge5aUi8fwFhKthk1uCGxSf4CpgyAAxy9JGcVkjSCnWT9z",
  "key33": "5TZqwrxzVGMr2pDQG3xY9Wr5e6rs2ShuSB24HSwurJQdjuth22f2zBMChZ5pAJS26dcUVRXpggG45MH7ZvkPyFGv",
  "key34": "3XDxQVnmaAoAzd6VDXiTzvUmtfftnMVGZWdWwHhVUDAjXXX9tY7tf6mcQjTcMdebyjs8w3wHEiAwQgUf6qoiVZAN",
  "key35": "3XcAPVMNbHmstPZHJ2TS2WRTbLnpsGx6S6XF5p4H77qSeJF8PJqjY8PV6Z6f46SVHzvvMBbRpUzKHe54Wvaz1QvU",
  "key36": "4LGEngDArPGY11HNhBWu6SYaJZo4DRK2gNJJjxR2jT82vBj8k16bRpLgfegvG6A7M8UaMu2b8a5zLtnTjNXqVQZC",
  "key37": "4cT1ET2fL8vkgTWwcjVDCq6ELeDc863Rn5UjgtWiQ4kQ9aY5GjB8vixjWFoWN2SSvCgHsBv4BwSJ92TXNUJuUCPB"
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
