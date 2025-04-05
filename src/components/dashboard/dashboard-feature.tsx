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
    "5rrodV4D8Kz4cFBtccq8f7UYekiNgTJpoFLVrWHCB3pPBMZEYiMcA5gMhkhmmn4iaoBSJUpdLtGkWgha13GNpbkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pUfxDNXEuV69kcLLqviJniTXJZTrto433ZV8jmHEi44nv4fp6K7KUxrSee8fEAaLJJzgbVSLyPPDb9e7rJXVFMi",
  "key1": "67Fw1fYSvRS6uhhSqe1iP4E15LPs2CyTTU3GQTvufUvWYPTQuXJbJTz3TMPTRxw6aBAoizesofs9nuiwaVAiYBNJ",
  "key2": "z9oL5ddQxHT6HDQ1obpmPDHP3DCXQAWYUFmp1jxdsWVUe9UpnB6QbzgeCFMD4w3gmaoAQzgrZRRb8zpwT7qcAF8",
  "key3": "5ePLxmqLNGmvxjLEJPANNTWGgSRavLz7RkbKW77U17k98m7JJxNxVvmvMCeK5e1GSz4HLoH26Dnjfqvf6eC3esLE",
  "key4": "23vin1PYdwhCsS1HNmENwrqBkxNEuKj9k5X6m2fvduPx1RPL1Cv2Gt5mMuLPAcN7P2DjGQZLUdLTtvWarmusRvQJ",
  "key5": "4bBP9FoqGtQ4Sp6Cxg8sobSJzbfTwApgiEhv1aZEjvSxTRJrDpeaUis8Q2CnM5xwCTCSbyb9hrqfQYNULfwfCqoR",
  "key6": "2ER2Bm9ojgzWwX1Qz1rD3hSeac5KFPJ3cGqiN6M1DeskQ2117BZDiwEkaaD4s7nigKfpwmLimBNruLhpwFgh4W74",
  "key7": "4W6hb2BeX5Tg1KVGr9yT9RTAG8bXDxSeX5ksNc6Pi6aHLh8Xe35QUY15PnxenTGj3uNpuo4g5ordYnwAY6KWyP2u",
  "key8": "5WxCprtaZmq2iEsj1b5V5kt7CCLvLUJry2VyduwBC6cbTMR6pEv39YRavSDjoadNxMm4TVVaiZB75BDuFbBSJqYr",
  "key9": "5w4r3GR1a9U598s5s9iAgsmheyaoakm9a2Usf637SZey9dzxb2Y2i7GziW9F1eFQEauSF8zNE8gT67vQBFhyW7KU",
  "key10": "4N4rDycGg8c2B66ba13FVqDTQw6CkFaN1LfFQdD3SwaGf9gKLKxzoN4C73UTZCRaweTbY1wrwxcgcxEfh9zY53jZ",
  "key11": "2YQ9hjDFxeFq65BrNiLsTcCrtrNm3RyHxb1PNghq3z38EoXmkcGaDQGecYFP7TWcubwDW3ZWeu7u8N7v14sPYRjm",
  "key12": "4kRNKkBn2r8uphS6sBt84GwSGMASpmdLyUrQo4JY4dUrxiVvHim3qBJGqGP6YS6Zf5wCRMQEsgfKjcUareFwBTUx",
  "key13": "214ucCpoCpXPanhN69tnbspevFz6LvCJbTtNJF7TvyDru2SubykC2JdaS2UCbpWnf1VUQFqLLRjjd3vK79pJutm2",
  "key14": "3AVnTjHDaqBmtEQCPSB4LkYFFrV5eUB9yvdLtgpnt7j8rTgw4D49bV4jB7tKPsU6diFTJPf8kWH1wMiTUPhDSmFg",
  "key15": "swi5VioXsJfaB24qc33eBctdT9dXPNtaY8jDrbEfw7k81eHJZkDwkjZWScaqwRXnCDzMjaN4Q7nFXPzVZPNeebr",
  "key16": "3o3AaUNgkxUywnsmd2mAedaJkibkoZdBErsEDeUhkMAZz1DjfYePMPv22L2opoveTdKwvqX3nnrm5gmNH55tn1rB",
  "key17": "59Eyq2LqDQYhPwP55MGSikTvUGPaTETLXJvjSHozNWGAngAnEAbLvhwiPvPeVFgJek1DCL1EQRw2FR4Xm73bz5hy",
  "key18": "4ryBREvMKzMJUepJ2qeg4kSS7XHN7PhwFtnVQSTsHxhkeHDcaKBaiNsUMiTk2SMuxJQhcnmHvMMytRLGw79Xd8fw",
  "key19": "sGAsCrzJ44QPUkXizWvBRB1QdWcEcSjGfiT958jT3zXkfgKBaSDJZv4DMfkug6zb6WAFo4PtuDEFnN67hmNdx47",
  "key20": "BU7NvNkm8zZwMGdyLo2Hxd8mkpkvLXh9rVEiuXcYamxuPVNenhMhfDRtNAseCm6dkTPt5WttDZABFoxgabmmKhC",
  "key21": "4Wf68HQZHi5nx1Jw5vwkJ15rjovzCMxCTTha5X65kubPH34SXNy5VgTCN3nukAe48Uuyr3FcjpMEQ2odzBSzQt7m",
  "key22": "5EQnMqm1DHCfUFDg8v75WyKHmSBLnsgJqyvitN5gJ3ihzEVDAXt3CfBw1JyKk16LPWfTfiHwrz4Ha8Q8srBGDKa4",
  "key23": "5hs98Go6hBf3vQysYQDRUwC8pVcxtHACrKmQTKPNhm6Y232QWKjArd3UJ8E8TsxacNiMd6FGzE6oXvDVhmDMtADW",
  "key24": "4u5J5pswSm7mwPCw4xDNVZvrfTqAve5NVXo67nJL6e4Dh3xg9YD2AZbD88DdcrU9CgtqJcEk9KLvN1jwyScZun1V",
  "key25": "GyS5fPisiNiSBPHq3NPR5MY7FZ7vSiCpKE93ZCWz2UCjsj88Pu8w9G891Mr7Epo6YQbgNDrGWSgDjZfhounSRWh",
  "key26": "4XE3E1RsTPSG3bVsVttG2VcuHu5YnnfAj9R6CsZmDnSUkUt453iMGYZoF62snMBau51EhohL1wvFmx5fbPt46HiF",
  "key27": "64pkQoyh9YVnSY7FYBtAKS4Z4DddZaTMx2jrZenoMD1nshYUu6Qp9xmdBq6GABe3TorMJai3bxb7Th4hhfVVdWs3",
  "key28": "4oia2ta6eULEhvkiNUkxNF9txL4UfV8YnxNbDHcbuvTvqd2jzs6UtrNuwr8kWDEEH1YyipY9dfCupwMchaeCpH17",
  "key29": "Sfvyax8s3aib9SDtRgU58FtPtoeKJt9AXqSRuA9tK1qgpdhdmoVRJhoWt8NGjvW64VTgnJjEFBaGq6huQ45FK7Z",
  "key30": "5XxsarBDTZngrfQpCdkyrJwA8owdaAcHutrbWTmAXfTDYoSdmzSu2nDnmwap6n8supp74SavRsDAcDMaE6d9ngyh",
  "key31": "59CTMUY5pCyhnNw27Ptg19i1Ji9qNSZFYXeVzQErPEGjQf2WkB97r1HM8XqTmbvSfdpGC4T2L6S9srip5dJQ2okB",
  "key32": "5zCxpq8yVFkti1G5xnvH1t9oNTK4LvWCxGZQ6PacdRoiKwGReEPz7EFoeBTmcxGe1Td1g4fsKA7Gfq2m57SPCJos",
  "key33": "mU1PqvmnE2kWwKNussCgYozJ7PQzuSM7bwHfrkE5RM2bs29Fn9gjBTcEoQ4UFZKdhgZwreoHN7QC2GRgGACjggr",
  "key34": "5WVjvoVGjdDWhP1BCoHimUDrMR5Mshsuy2twGtyT45e8eAUHDbiZxBKvcgJ6zsePvg3JCx17BsaBidLcE8Yo8zwA"
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
