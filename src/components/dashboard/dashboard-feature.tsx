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
    "5jb9HAD2NLp9UwKwMY1con1wLjaMRYK34G8Z7HkAeVDEaeRVttnK3oGWqCVCBGgcRUTN14xk9WLaz7b6jxNyJA8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a9o1SQ9SHPVmLG9NEEA8fBsfU7m9cC54xujYQV4F7NQQvMd8QNTzwGo7czPQPziGMhLBeSdAV7Luws2FZa43tPu",
  "key1": "3yo13M7hL495YGdjWzPxHER7kPPoH4ybkBwjJCJudJNZY8LsCDV6jpYWYpVRHKJqiivrGiBqNWH6YZyjQpZG4tqu",
  "key2": "5eZQYezX6peqJmsLEEiw1G4pEvZXpKpXKqYJHuYqsKFmmEx6uqo2XLZEg7Bavt9fP9mPHjq2BYtmyDarGr3JyYjM",
  "key3": "5VmRZkKc3FPArsVf7nHcVnZJ2cLhb19Huo8DdxJ24Jgyuf5MzCFGV98XqQ13NT578rogM5JU7Qp1qJR3vyNrkgjm",
  "key4": "2PDf8KvQvstSqxMVDXtRpSCkiSBDaF5A6bbwizqi9iUD5k1FuoFZJNsdos8jEPtWrrENG1Cap9cGEzzb3CGvmknm",
  "key5": "5q361VA5BgBB51KUoQ4gchAocdXD7jg2vQLnbPuAKCb2W51dbrVJmhiDWHb9hFFwJwqxv89vX9UubLCAiGsijY4c",
  "key6": "4E8TbhWKVNtqP4RN3eJKU3j9G8y2346tJWZDNrEqDEcHeXYGENTQv8yC1FsTUuvVyaNNv22osdYLGVnojVPoX2G8",
  "key7": "3Mcabpx31TMkZLQ7QBkNKdJxJyxp4NZrAreTGB1qshnurGnWHGD6VmTPYkVJVxtFHDYoor7bCgDZrAxgCQiZGRxm",
  "key8": "4CzmnaMijSyx6Lk91VnvFoV2hP8Bt497Moh4GnY4Ct7rNE9qRmnoXhcmicQ96JrVRXYUU7G6xh5u96mJgGj2thtU",
  "key9": "5bwBqw8ntGfRKhtb16Vtrt42ECxP7zgMqim9g21FdyrnAY8fZcmFFPHAYYHUN9ACu3ZHnDbPs1Q13wS2iGNQJd2X",
  "key10": "4XxFWC6Zv9rn4bZGzT84hKKRPNZjCVQ44L1VfU6bS17ibDyEsVAgZGKd13zy8BCBpJxiyAue3rbwT22E7kdkTgbE",
  "key11": "4CyqVTXfD2yG1R21M55kVSLU3mAb2ofRcK9EHyM3oiFovZyXqEKC7vyNtQgFFt7pazcpHHCcP8F1TLgwSimzctTx",
  "key12": "47ovwqWRp2SRFDymLNATX5nGpDvrqf7rDoGUoMZGZXEH9UXeBMbKAdUvHiDdRSvyPFGUA65WW6CSSdTMBKYioyKt",
  "key13": "2ZZMHLszL8M4oQZ3SEWb3xYDFSadYdarfAXRSMyFKsWNjqyc5JrmCbqjG8uEZotGAttrMDDpP15X2Afw7cHKQBwi",
  "key14": "5HTiK5LWX8UoUQmyG3jXDJW6qeAXriHS6Q6RXVvgsYSrJc95hoBKGUF2oiHJ18hqxGL2M2dcSGdVr7gyTKSvG1wp",
  "key15": "2avwqJ1ZxZDgApSoSeSsXrnt3J5btntJ7ZtVXLf19M1ZuB7yzh8pAmEUMCdu3TTwvHavU1UEXjmmWa115i8ES7fR",
  "key16": "5bxyRtBhL4FBGESRcvXU4SL4BhCixbbbGUnB9KpGSN9vg2zpyfCqavPYo2s5ihbje5fANusTs5Lg9VJBYCQHeid9",
  "key17": "3kJcut8wpZ9NwWNnyHt9v1ANCNeprjJ88MnnssK9F3K9KZszFP5RLzdZ8J2XW5xhsr3uuWbLnR9zeG5vmMQpQ4g4",
  "key18": "3ThUhBPqvZNPUnBPCHopxGhLJLiGYB6EhVWykfMd9JH5eB1sT3efx9shdYGHh7VSuJqyVaYiXgQ3BtNwU4P5BT7E",
  "key19": "3abr5n2hePS8fRSCjk8mpuh7VzYLeCeEPtsfFG3b9ETRm4SG9ixp4rv5hppePgPNeVgd7T5WnkND3cpamxA3D8ph",
  "key20": "2fRKaoMnEUX1oE1yQiPKBYJ2cJnRmKfXS7QoiFevVy7DMsZvea9q7g2kDw4fJjkx4oKusnpCjHyjyt6g23TjMVQL",
  "key21": "2yfxmFHjBxuGHMLiErUMnLQLx8bwfLcsxBt1GGeDdbsWorA45p41fnoJLbUDZJqkEceS7xZst9hrBVkHG1pJyT5k",
  "key22": "5N51GEJBhVQQZsKYJ1arhVLxxyA1V2XTNSrjHCtDQNzPCPoRCbEL2zwK5oWjvc62DAGLfJPtqYcZoEKceo6SH4bH",
  "key23": "3pzTb8CEBfH9BU8dexJtiwUoBdKq6YCe7G2w1XHmd87ZEXSXNWXXaYhd9CzChUAMAHxQFYK7HXFYuLSUow5FuTyA",
  "key24": "3r12HC3SqUB8dUa2WwssEuNd9VaAuJp8BD4iEUq5onNsyapfLeMPsmkfiBMfnBeLEfwDvxmVkVYaZVXCCGjrdGAd",
  "key25": "2ZGB3HTSTQ2s7qprBD9VWF887mvfswpb6AF6k3UzNHJqbWMrH84zEu9bbKHJFVCi7aFyFVyjyaL8X9HmjFv3PMWk",
  "key26": "3VdAoEDiJLNXyURfPhszWh8LJhA1mpbZuioijQ5u3oZdFj5DgCPxkzZu1U3FjGNhGZSaafYvtV7sNEhxNhTnrMN1",
  "key27": "53R5JmmTvLQKiWQBbcn4QybeYVJQYDMNdDTKUmGdeseU6XdLMXckft57sBeZEVKokEBS6bc7a8Tg13mAtkh4h7Gc",
  "key28": "5qSq2eDiFXyXefWUtwdnoXoWu3CNy5fdh5J1bYV46Gyqpvv7VrLKsNmEe2hfdcNjWZfnTWd1oUyPHShqbPmqwTcq",
  "key29": "2CEcrc6v6uLQ6xrtiPJP6rtDh2UWYWEiih6US9ecwRSqN9GNtdYo8HdrxMzR9mjKKQnkvUVqLrUrxC4bL9RvESeD",
  "key30": "5e3WU5dFk2pi5jkJcQfsitNVkmjpdwssUR4RWLqn3m4JerYZgGtPbW3Japn9qhHNj5jcFDJefPe4fRZf1QoC2Exp",
  "key31": "5SEijVakrGeB9NVnJtpZg7q1gdTkC4Ubc94P2Kp885ZhiQMCzxAsZSP4fF3wHN9UzPPgGEnmfUHPdf7CYSmkwstW",
  "key32": "3bPaBMqwoP5ejSiQqzu9GiPQbAYptzZxYMufkn7updqn6exRD57S5FS3qSr3GMxVieHVEfCv5oVLEebwbssittVq",
  "key33": "3cpmJHvNqkuXMdr3FntiUunLFZUhQcDP2rtyJw6kzxg6GXcBxPMr95sV69e8QSQbVDUCoKJb5J63H5JSj65M8iwu",
  "key34": "5WoaDG6hNm8fBeZbkksCX31pZ1m8D38ZmW4gJWrUuXLB4KJUfwUyfdr1upH5dRnreuRPakpDHsC7eB1h7GaSkfjj",
  "key35": "SUvDjRoumpPhkun3xjhtKXUKjQeE45UGrcR2aViGuskkuoJbdS4ULss2zPwfrsRmoPLiHhbSykzmBE2hTkArcyQ",
  "key36": "2YeqdYeETC4PJJ7tYArzyeKTuAg44y7thDsvDhHpYuLFTXRt1jh4c67FvsmkQ9uSymjrJ6KjCrAwJjH3U5ZAVtP8",
  "key37": "5mGxJJfi3uiuKDL8KyEveoEyfJ3nKY17ANb61KhizTe6Tino9sTY1M9w1X1xu5DEM96KJYwqRABkXqK9PTPvdZBo",
  "key38": "zTq4WhCYrzn1Fx5frfnRdJB7QKeXuNwTrEbh9oC7kpU5h7xvQjEFyZgndyM1adLQp5VRrb3V4gzXT4Sxzrq1wz7",
  "key39": "4xohZErUrDxVa8KnKh21ctCe3rNVs8GhqVy6V2wDcwiJfTNoxBHzBk62TBzCyNUHb5FhH2ndWzkukLhBzuGX4Lgx",
  "key40": "4ddChRcMh6nvkdS2JCMW1Epzf1tQvyZwce97yrCp8vRicwjWnq37LhqfWoMvuf1MfsbRATiyEULuMwvekh93wf4G",
  "key41": "5JmvPmxmK8ABtjNVnBLrQX71cwTgcSpcQjxpt1fajmsVwCbf87pBXVMFirNJfA89jaXSC2kgWFej5UNCiYNmL3jy",
  "key42": "4qH8XUeGFtveydxSEHFyDnsWCesikQgfiWCDqeUX16wEfESWSmTDyan1Sx1K7LFyB4gpDbJ3Cc6aRpUkgLVKKppA",
  "key43": "4G2roH7HE8p6agoNfVFA7equ7CDajKZMtA1r6uom3QpdWTJPS1TCED27zxNLK9NVrprJ4J4SCSEYuAhkvRzWh4fJ",
  "key44": "4DFVrDJSso3ifUpFHwHBnxTLcMSDMcncJ1WsjreRpcgTaxYHEkT9fFtVeyPZT5wehJpu2ajq3gmkNaYVj86s6deE",
  "key45": "63bMgzzeFJibrZegYvMbBGvNdzE7gzZ9KQAaobihoaDcaDX7pYKoMhuVFBtsidXt8duAapueAj6L9br9MumbzjkL",
  "key46": "3qp37VKTdhXkHESJoyPr2CfMjnVUX72Epa4ZzKNMqFiYNK3mVTeCHfc2aJNCgcZCPS42Dhd3Cg1jWJhAArfbpaKt",
  "key47": "3NU8hUNcPAyCKc9qK5f1TxuCq6gHRknFph9BWrFmU5StoGxhswP7nYodgiw6522Z2J9HweX3LBhN6tYixcTf2Eq8"
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
