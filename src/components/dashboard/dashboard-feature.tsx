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
    "5zVyztSb1rbkYt3bdeqMRGBWhdUi1fH3LcKbebQu5VV1FyVfiQzkAzr2S3MTHKZq9GAGzYnRDSHhFsfcbQfmcXLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YUDZxQv4qtEgYJ4BcKwa9cAeUkseB5XdZwHQLEdqTFPHvXtkhkqfDaMDWz1qzr935eFNAPa3aRVJEscvyN18wf1",
  "key1": "3wbPLLgeG2pCSnoMbho7LaJ4vR6JoQKxLxuPu4TdhSwj4bZ4hB257U9Pdiszvp8DWBRAGmbNibTWfmyRAMwifohY",
  "key2": "3RR751aGfowXorv1n4Wu8fidSze4xBkau3uyBcRqJWB8TawBjbSteQ4QX1y3fwudNY79JcPJpfZCDVp2p8aG6TbQ",
  "key3": "4nDQ1EsZxEtZhrkb91MAHW3jPdUyVBZHyRsFK1uAcnTqot1wAgjoUNkA5tHV9C2H4SiqMh2bcH616idCkPSy9ush",
  "key4": "4A6BNv5vyJ4xCwZpY6YsaggwuEVDpViw2FpQCG8MFN9DyfZJmncYtFK5kfhh5EzdYjBNBmTZUyEsrnaAyxuaeka4",
  "key5": "2hkM9jRTnCrVJuLP8WRzWeypoS3Lyy9oKHeEcXrDyLGYY1g7z7A1wNJhCrZSXYVaxrJM8xd3sAdBq8YiHuapyvvS",
  "key6": "3ez3BRWuhDsJzo9FdbLqhAXDAsLr97k6DmKHd7YgFi9LPyetC1sEcy3RZGwVs9EAvxa3ojx5QoJKgnqJHuzNspwj",
  "key7": "5s3JgmarSLsSt8TzxzygjwSQ8u3GNnHU4eBaxyAuzCDV7pr2eEjDxQu9W44QomsiXTgaAfVF3t9R7X25qv5zTxkh",
  "key8": "5dQ2gGEe7UYkfhLsyajFXHnU8njzkUWLVqtHfctR7WahJKJEH7yXmwqrFwUJcHdwGvehv3Q8eRw7CmZ8ptY3vs1A",
  "key9": "29J7NzgWW3Mv8mLcbWBmqsjaLMu6GkmJQZk9zwoSLnfpMGo7TxX3L3XvKyY3iyXhqzWVAVRXyohkoJAgYd84qwEy",
  "key10": "54BxtczFsau1pi3a3k2WuTWcNcRbjg8SY795ymhFFKyxiaLXGzrR9koMYimEoJXdt2qR4bGdMbKw5uwMKaWQDXWR",
  "key11": "5mXSFJMRF3VABBVmtLS16Vpy936uSQB9PNbpjicMKHHjsugdtFC6xx31Ss7teUTYteHETF9uwYcbjzgAL6xRtiwR",
  "key12": "3tF3Q8cTpQj4qyB2tdfMCbZNvhHDPoqd5Puut8TFtk6SGZJ5xwQaFDxYwv9feTfrtqe1xAhbYkNNXE3jgH3EVJ72",
  "key13": "JTeWxstNSSNZfWwBLBkTjWJiVMRxR9ojE6r7AffTdXDGTbRwDPJtzZZx3TB2zsdT2RgjNWedudHR7NiBGqddp45",
  "key14": "5PAh4Mwyrc3gVa416uhXBkkHNUKQzErpgpJmHGoAXJFmZbTCCmhxGdWDfb79FuzLFLUfdiLxFDQzqCVWYwoZ1hif",
  "key15": "5xjntWAkGyG5T7SgqeYUHV67Ea7M4j5fbhU3y47xA7zbpKiAbnhp39nFSSxqP59Rd8rKc7c8EeZrnMx7RxK22xuw",
  "key16": "5Mdf8LacnEyYiqC2ph5WtSAcGktVCpfyu2jhM3icEM1kfFDM5FSKjHVoEvvwopzf6FJguk9C9SgPWobkypBoBa5S",
  "key17": "2Hfgr8Ye1SqNWLVx2KPLdJk1mM22LCDKBwiNaekDZEVZAo7gWibX7sXKSMHxKPTiqK6g2Lau9iMRuQTWUBBt14tc",
  "key18": "2BTpfowGFsEHuHnyBT7eWg5G4E4smBjT7XCeYML6Pn6DQwpATeYZxEyfpkX5Per6kjqCRGFocbuFXoMLH7KdtFyt",
  "key19": "4F8smhF7zzKKAjVmCQh7FPvxS9d1dU7zCwbzBsxyuchFDp1tsHgEj8EE8Q83JsEjcu8RKmEdbaQVZ9gBUJQWxRJk",
  "key20": "3rjtyNGEcjx1wDprJxqzVMLFKhYmEkDLqDZmF79b1fipdEcLPXEeDPxgJfiEatzSAXrxzDxDmo9uf47YnQuHq1rb",
  "key21": "5zNsF97exXDcJq8ZQgrVpdagoS2dDNhVS6htupPj4gwMdiCbFWsRCnnSotxdjygtqjLHLyXLGFjbSCG2aA2p88Mq",
  "key22": "44jzgpMDePqSV3QqGhjih66oZ9dLkrfLaY2Uw3nmSX6AhNski8SCNc225n2rJLsGhD2jsiixjdt3ZRgAxoHE6tVu",
  "key23": "3spvYi5Vqvu41nMyb4UWDTy98iizXhvkT7gXNGuHeaTZYV1vekwbcefEvDRKpzuNrZrTcP8fUY1MitRYmn7FW5f9",
  "key24": "5FNeqqHaPGh46KGcNVrTgAgTZeb5LcH917yy5SDZhCWonennDZaUrm2Cqpt8TSS3mo3quusv8LAi1zNM3dAkFST6",
  "key25": "42Q5U32JYo9YNtamW1RrCKwDiTSxyLTSfRdWtqzQpCUzwEvjexeYkanZE1JKYsjKQBEt3F8pjjyph8N2hM6GkR4M",
  "key26": "24aGNrhD3ryRvuK2awR53qDt9EWaiGBBzRYhJvMSRLbUiBLAdTSBRBBo41KGGFrgQSPVmPs6cQ3XEtEvDemhYnnr",
  "key27": "3g9EXTk1WS6AZE7YmGaeiTiVMzpdppkNDU3oyKW1EyR2ztKHMq1hF8kNc2hQmKK41C4SpywYRz6cx8repKeg2XjG",
  "key28": "3LHatDafCU7n3r7eKch3tHQzUR3k3FWyAEYDZFsgJJCo4YqtuxJB8sLgqoSYmxuG3k9BL5J8wRcipGNCoRqPhyUU",
  "key29": "4zrXH1qYusWQ8xGDGELEzgNtD5Sp7TJBfdsrMj8x3RWTVzvsox4ywsVzGakpF6pd8kPDcUw892SwoFTLodZoUefX",
  "key30": "37uQK7iTf1swt5FqE4oGJ5tf7yqXypKWTxUmu9rqRcQVYJ72YMPi3Lf8n8DaDTMqnjkTLEVGER6qm9sxMxRi2xtE",
  "key31": "5HYryoDX3nCfRgcchUwCLG9xNCQzVtP56KqrnGbwvwVmhFGZRV4s3vMohHzmCFbUaaQxpDSgS2J8E5G3rPAe5EkH",
  "key32": "54fToHCv8Q3c8AfA35WUPwypQj46ToHPzxm7AQ4bPmjVo43WqSuxLTKDiySxDJgUWDtRdnkdJjq5AidEyjXPSASj",
  "key33": "56svXXZr2TTrd2K63AgVWkx8M3GKY3A2YUus2L2KB3EG1vLkZJga8JczjstBs5R5tpVZQveMzzc5o1q1KpzZNGYM",
  "key34": "3piqHRLo5tUFrNL7M6Afp8pwTPbgd2qcryQAB9VdZvKy5g7B31Khxw3tde7LHnASwuwqb9TvDPQHPofrvxxAzyvP",
  "key35": "4F6r3bZuFKfsNfxrt2oP963T3bzgw3BhTCBnyUg8jtRDoGzqwbW9Zwygobs2kDcqEnSL182b7Pyc8fdjKZLjCQXp",
  "key36": "4YjQiS2kRtzKB2uN8YYEpyPcBnTGvvHaixamWkVpH5dK1ivpeFsjCRKg4df5TRuKsGrPWFeGpBZAW9MXdw3bGfxP",
  "key37": "4smgein7d3KASyxcxyGu4eEHFeEwaF2mn3xsePsd7Za4P1HBP5x6VFbFFh2whtBnodf8BRbNmygcnHW4mwxEi8Li"
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
