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
    "3vG2ZgeJnLNNxbkMmctq67J8Hq98NwoUhF13ur8WqBUrFQCxszWCe3jZaPouv7qXcUtwKtF2JHSKHaD1uK5PyvLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eUH8QP1nCbMku2DHi5SAv9jisUz5XwAC8iR743h33x5WUgy6b8oFnsaT9TPTSmkje2xvV9zA2cTX29h7JD2oEJu",
  "key1": "dyb5Jj6uYmLYcjZTNxSstWf2JsUna8t1vLX4v6Ye6v7SVzJzbmgzoKFPAF2NmVFqmyAciZwgUSRTZ3c1PvmMYuN",
  "key2": "4aukJo97VrPYyaeKVTHcHMN3ZaKeUukRGwgH8VHfDcY3VQLFTi4U7jt7NhrCLonPjJFJvd7nVmTD2iLbapphjcot",
  "key3": "4Yv4EUimBiCZhQN76CCMvCrr5W6124Wwy26rJYyHRDk7okpZpHK1WjvXvhFdNpRGpnoDAKoQErVi8pvCEbHbxxVw",
  "key4": "iZfq3Dx4RLvtetfPyFjcSqjf4FAxXcxhjatLeAtiVf1p8svChMhTwjwh5BixjeoxETVXyGNkwGo7ZVMc9Yyqxkf",
  "key5": "vorFd8Yh8Mnfc2RZFAkpsWLJK7F9GmfidysPdhrGjvW35pYSWdPS6CveFTYr58u4jthAbzYikjGQrgS3tZ6NM7P",
  "key6": "4wPeAkuFswjmsTtyLLn2XabZCG71FY7o4GFy8qACngDGBwVqPvHdVDechLGBcXCCQDRFKgDSDJY7Kbs7toyWbKcu",
  "key7": "2p1V1pBG2AMGrGNXcHsCH8uUNkT1qjeQxUiW6gv8guQBVCdxyRe7nFtKAF2oqLXaY8gE9nYdVXm15oUTQSZrRjHW",
  "key8": "2cCvqr4FTrTPuJhdApPMRhF5ub71fGGdjKFeeVjCLjMbdp1asESAkCuTww5Ey82AjQ4rtXW6s3MAyn5BpdEouQKm",
  "key9": "3BKqieqJw652AKuY9uV2fSneK4BG3tfCnhJ2GjJFtVoLGe5TaoWemwhbyX9k3oFac9CCdLLyZMmiA4RRt3ETnnnK",
  "key10": "5QNCuLcwLXXRwDymeHTonTzZbJUjkbkdYWCSg1Dxa6JHNbn91LPa52xyCUwdR4dNhTxyMLgukkWYL9tgvCx8ux73",
  "key11": "5ttKLuzWs8EE3pkn3ccjNqne33mzi6gSbociGCpKqgzeDC1ndA6UWArRDnhccERVxjrhjw8zMmxBRhZZZByhwiYj",
  "key12": "5PudjHYQM2Qxgmt2YyWCTsuvEYPwrHzD6shKNAYwHxHaFcnSZsVPmtSCxGcZQsYdsdVErkc249uSVarCCmBxvZo4",
  "key13": "43XMmjnhHuiuy8kDZhdgc96VuGaBCKgipZ9ncEa91np4swqrpHF5eJ5VDp3yvsE7Bc8AcG6bFrHV84ZeLnUSg6kX",
  "key14": "5i5VobjtamZuMYoJTf8n6FDbm3tauJBhU12Nf4GqMRJoj1TTY4C5qRWpmgj8U5QBX268BVTFLtwTEDPQMQsiiQ6o",
  "key15": "vFWBDwTFPLzjhmHetYVd25vwRpAB14V2KKmCxKZ6CiwFYj6QiHLhkPtW9WQp4vypANJ4t4BzoSEgp6D6ULmp3A8",
  "key16": "3Na1B3awsQRhmm81r2WZ91YdwLPEFMPHyF5jW1bFUyhsYH4KXdQayytotr3QsBaF7kbCuyDEXSn23VWdJGaU7g3t",
  "key17": "2aXvnZcH8eoQ41HrKfGDgtF5uQV43NZpAhcvULWQsZifEBx2j8PSm72umbFn67ciWMbu5vvFgaWfLmsa8fhTnPwA",
  "key18": "GCemVAmSfnEEyWBiStqMh679Uj42opCWQ1d7AjiTGAXgHiZ9kr2vTNFmxGKChCVGMcbAUZwoEfp1fa1VEnVbuCS",
  "key19": "4j8KTNMVfZiNxTVPPxB64Qbo9hW3rSW47osAgLVDT1KVQat5nwrwyEzLdnkN6bkceCtCaCzDeMBESfaubPvz9GEG",
  "key20": "4rBcpHXrcfkyw63fBVkBq3dhUbz7YbySZUtUhCWaB8wujc4FEnNrjT2oDSekRUDddu2YeJ9p74S1gdNciHGVgN5X",
  "key21": "3gdL4M1TvRnefa2XhaTjUBh2o9qv64379o2B4AND5zsj96huRV7YMFodeiinmJy7p48WTuSy1MUMWhnBx6cEtuJ4",
  "key22": "4gTgEmAYLGRonXZTc7QyqEm6vjvccg8778PV3xL4Q4Pc1QHaaq6R2eTrHkTZatL3n5WGhvFrbdtMGL1SnK4o16Pj",
  "key23": "3u8MxAdAnUqCxdAX73gAYE3tpZyqPTFVffv8o443c1Ya6bixFgvuA3dezvz2f7WerPo5NuseaeMsbrNsGsZFRPEd",
  "key24": "xTsaVgPpUr8acFxAEiGYBDAbZ9wxUuNp6hmCr7SjVxBGzHtrn4TbuozAQme699Ybn8Kj4PKAcwLfGGk5eCNqtt9",
  "key25": "3QeLN9G5f6d7amnYBbo3GieaBpa5ekZfZsduJ94KsTuqCa1nEd6YVyDY7tKkpfS8XXPqSHsrHhcabxnnCrG1KCm5",
  "key26": "3h7dGofCcvrDzJjGwN9ouwFHBKhmk4GHJQwzcUx3ASbahyyahRHJ3VwepaDCHjHBujn78Z2dT6tt6gBKzsySYwqg",
  "key27": "5NEsaFk5WCA98WfGFAmJ3ZtCpjQ7KsRSBPnZLBPg4ETGMLBpfdMUksiFY7LVrRXbmpTcGAhnWE5QwRqNVfoNHPJD",
  "key28": "2u8si83BZLNG1ynQH311bRW3hYvMHEuMaT25TocyKRkcb2sPRgATJ7mkW2NtMeB5ifjZzi3S1MNMV7hJKgrCvWWd",
  "key29": "5oxvkRsugFvxrA3zUpqmvV8DZteS6TiJieteUcJh948rRm9U4j9cokx5ak1su7RSHYAoowN9g1v3XUsisdwoHWdg",
  "key30": "3EcNvKk2SjrDnMahQQLzzmt8fXGqnHrnMnbo9h3sXGJmq66iGh1HZTYcFz1cjJQiX4XSBsfV5La64xGJkJUxdCJt",
  "key31": "EUoECPuKvaRC5KYNXLfDDxy7GJHQGuUPKSF29PDwFEgSfwUfskVQqUmDgYJ4wXWS4xQRiqgnjnwijndx25BnfEA",
  "key32": "4wEh6ZdugVaX8fCPQP8zKUx3XoP4BCgaAcGtXnrQWvfJTFuupNnKMxAXWWn4rFjg3qtfP2UP7g2ZPweVj3geWfof",
  "key33": "3wZ2KiayrDQKAUZumrtozLHGRz3E5LrNBJb1UWB43R5QYJ2X4vLBr8ETEmswgCwcnaMi11TXmPBkok7xpwHuPzfU",
  "key34": "3jq5gdw9qYyaYPBTytxugckFfeRB76oGE9jXurLokqqWEFU6tPhFiCufjcV9hJhKhBUjd1AyvQ7u1JXHUA5MrnhZ",
  "key35": "5iG6oXLzA3mDBA2rP2XRLtADT482usXi7EW4FcPub1s9ToHRwqqAhz7aWYWqsxzM9NunDjWv11sRkqw8z48hm5yC"
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
