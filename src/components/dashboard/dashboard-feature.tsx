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
    "2oxbzDwExKx96sWYazC5icMwZN7y65nvVkBMQdXxKZjp4tyKh63nH7Exr3ouEU89nDD95aNJkuF2N9NZL2QXpeQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H65HZGvuBsYYcgqmDVkG1zrFPVFxQCemMd1Q7rZDTu2qJT61ucCj8KRd3oSx18AQ12FWHnhSCsofoKosXiyuNtH",
  "key1": "3eeGEpFT8gmAc7zRFEPnUQGGFC4cpVR7hE8XJ9FmVvXsuUYHaSiZqBjyLPFBZnHpLMonfxbTbDwYqRfKScL6r1v2",
  "key2": "4WyAFzGzgmbwCb5Crp3Vw7SMmejQ4QAekFDjnLuBCpNEnYXxA4Czu39D5vmDsbDhTSbCLPcde4CG452JKUKujd4a",
  "key3": "59SomaA6sJL2sumLGcPtCVtN2xZtpvRB9fxRFLFauSz3Ju8c4Raoyn1ut3LnG12aqo5gsypj2n5Wr6fqsghBX9Z2",
  "key4": "hFeEyFujzUnvzRw9Q52YRHxRQzaEk5E3tXaxNmrpgRb19VXBPdv3L8j1jSPHPnNjQcNRFMiWUQtpLHKiwr92teW",
  "key5": "2nV1HVkk4LmGbo47Y8ormg6qmgqfBgJBo3yUwcWsk8irCzdxVVCwFj4nVBL9wYfYTmu1K3C5qhymAA1JkxvQKF28",
  "key6": "2scCuzo9oY6VEJmjYi3qZVmudtCnurVZ4G8ThJBqabaJWtEywXqA8V8rvuiK5AtxEPgMcGMUXVDWQYHJCC2R2ChR",
  "key7": "4rrF3Z11LqM5KQ7T7Hybw2rGtqJqKsoiLx98B25YN4DTKBdqNVA9rd4A6GF54ft6iEgRGx2mUuH6erqomFCusAuj",
  "key8": "4qVc5ryWYNTcu4cLECXyDAVvwYP7iSbtNHo38Xgq1KuzLC2y5UAGQyjQPYfaQKtYmytQjsPxv3dguxsnCGFinw77",
  "key9": "3hAaudqH8Nr2mVzrB157Vwf5d3zgNPjFeoo2ZKMb3Lj9sTreRiJzvjV73WVhnzbyMhYaDarjfsKXsfH9U3LSDz1P",
  "key10": "2vGUjuRpcW8nAU5yBhi8yYLWmuqR2Tjiah81sdknp7XY4Z4KotzJYGDeRNMDJ29b7tgBxvU4tmZkzkoQwmmp95ue",
  "key11": "VN6cHhx13HkBLZK8Fs8h6KaWdJbch1chRurzAv3X7c1bYM3mY21byfabcvndUyH6sX3fvRQqTm3daukGDrjo23L",
  "key12": "2KeicYZF9ALUzZhptcePsj8xR1giKSqU64KViDoshAVmbWEgGgd5Z5ao7B2oN4Sa7BrNueER7okgtq3a827gSvyx",
  "key13": "3bDUSidPHexA9XG5dvBGa1td948azLD5Z8nsLsKKnFN1uRkribisSquodfKoZzvS1toxq7S93VNrgEkgXB3Jh7Z7",
  "key14": "2vKLaptTWsonMyeTugUMgLTYoQ2GqfhJtBhtt35eATzVX8uKooquFvzCCHPEgasZNqY1arSysiu5dzabuhtNvjZC",
  "key15": "261vTV5p5G3c1Yg3CbtQiCRf5hsgYggsbNP7UQfRh8oRMiQKuc9XK15k52zvhjyti3JKBSpHciGHinC96ubzHf5B",
  "key16": "44byaYfWXYS7LvtftmN1pF7k9vmZJS2vnr4brvue8aZoMt9Zfg37xkaiuxcPfvMWPGrxDZksGZZtgPai4zxcKkWy",
  "key17": "56aDjhaufwtoGnKxrK8PDb8jRNW1vhRmCpEpN6RPTLbNuMpHUWGtQwS18MWpznjfuiX4TXGkKNpdvWyAruMPqRrd",
  "key18": "4zvAz1RLkTaxSSwRG84hu9b6nw3GHH1VPAqXjYPf7RY5KgizUQjA54qjnSiBtB7vbsJhMqQZycxRFckq1i4ofsgr",
  "key19": "5rUtzdjudUeWkHj5H5VL8NZJN5612pH56TJ8q7sKmJ9qqX4vE7gnL6kS99dEsVWuknmVh2r5oPb6Zd8gfwQrJBw6",
  "key20": "4MTZCc1VfpcMeAsyGaNdbmLRo6QwESR5kcCB4qi8hGstBvX3BqbWQ5VzDdCLp7GgVmPv5QFJsHEiwTGrxES3X2gi",
  "key21": "21jzvWFvW44r7BXcLmP5A8XtzAAezaM8zGr91LHhAS3jHJD4JzAwf1x4C7nem69QMQxPRqZ4dmTNQbpAVYaidGDB",
  "key22": "5oNCbg1KjBzJLC7VQxvA2U6RLZYMnGkRKKLFJrTp9DD1daxPHBD1iiaB8HtcHJe1LS8RuZYrHv6C1yqwUWs7wyzi",
  "key23": "4Mn5WPHDxMMrvd91n8d1MCRLVj62Rs4QsdqVDNMMgeab2jgX9nuMmrN7SXqFN55rLjxNbo46k4g2axWt8dVypLDM",
  "key24": "4yAPphvRXDncQ2MAU935BzjdqthgAptd24RmPS7dS3CdSj42Whg4ADHrMJaw91xcJVy98wbpT3PygUgdN1bBhbjD",
  "key25": "YsB84vUcjWv9pzShCKVwLyb8hYHNotW6BMJ7qYPJnVEsEVm3gxPbuQNXzRwDKAMTRhcs2iwpEsHx8veFPwmPSDT",
  "key26": "4u8bp29f4SghB2XVS5dYAC3cAhXADdhfMRvyXyVWEYucBk2duXyk3pptAPMHrnFv5qB8CkBwjeV389zN1bzV6Uu8",
  "key27": "2f5QWnwTZ9GHvRGZXuEAVKk4BY9wK6i1a3wgiKc5hwNytkveGuDzWP6WUs3GVecNhw6e2tTgHirSVhWicXipCD3m",
  "key28": "5v3y7e96mmNE5sjo46skwraQCPhNU6ZpFpFZh7HvUzPCQZrDau9tDUzg4qpvEmHAZ5SztAzebcp26kx4Xr4dyjvX",
  "key29": "3aKAeKpesKoydmUtDBFpPTty5EMAb3365iYnMD9vVGmMjSaRqn939Gqe9GAD6d4kM6uEAokPH8nHi172tESgYcQp",
  "key30": "5oQ2Mw1ttyiCB4WH98ZQcTZkVb3aZTL4vjojatkPBC93LsQ617xC1iVcvoMinaiCcqLHzGykwHR2FaHSS5zGfYqF",
  "key31": "2d86ygRXRXMaAVruhGvVTfpqSaLiQsMeSFX19w7omMZRCi5njFnStLtTcStDu255poXSE6CT6L1H6vRSHfENMWHw",
  "key32": "c4rwZek3FWVV98owUGGJm7nn5GRpj3vjdGPr9mttXXP3xerBgv2HmjZGWQBu6dDWX1D9QLprJKJ3NYk4DL15FRF",
  "key33": "53KTHHcdr9Dj58wFRermUMAzY8qcLeodp9tTcqCTCbzmtyRFHhLCSETitGFYVh1cru2bfsdyU77amA8APgY7GrZW",
  "key34": "28HQBeTpsuK25ghvgzVG88BZaTivPa3uDUfZq3vFETovNUHEmggqrCErSEThFrjLEAz9x1EYj1FjUBYfeNLMzgdv",
  "key35": "2srBiyjTuwQ9BrGNoVG953LHv5UsDs9aKRJ6dt3kXkznckjWmT7snHbTb3hVPHsRmQhnQyrSujqzZ4DrWJnMhSYx",
  "key36": "3ssnvim3tjYL7FxHuhkzvzBFAgGHXKnib4LHuyEErSqqKFU3qJ1PEzirLqLAf44TGHZGw6DGKV7vdQqzMjAmqbNi",
  "key37": "Mjfxsfm4jQAzWyEVJ2DYKTfk9AubPk2Y6h7Jx3aTpB6DVEy6ExAVdsLxwEDytxcay54XMBHMzJuRJmywvHHsNSN",
  "key38": "itkyVkoBcoAQGPdCjZNKUsojCPmZgn33sR7PkpYwSg5hKXn8u4Q3C8oeKSoj5PcV5NRHzJLtK5xEqxXtmDKa97g",
  "key39": "3z5fj2G4YV51VBNgFMiMPyhjr7h6bzzMeDsqVbw3ZJXayek6hZpUdrgCrnsGwnik7wesYqjiWHZhcJeH6tvDbjsm",
  "key40": "3xhTiLmSmvPTnhvu8hGVyXjsS47A8dKys4mpTWXfE8sPo1ixiwuv3Efa99RdjQKKWEghHGiFkAAarBBVPGepvXQ8",
  "key41": "3dezAabNuMXBsqXo7FR8peziFSi4fwrMA7KxqgWHH7mxv13p85GWxGKSBiqiigJfoxPNo3y4Es6cvGUxPA7ggydZ"
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
