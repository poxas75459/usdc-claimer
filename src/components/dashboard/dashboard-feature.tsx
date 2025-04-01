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
    "3SZaHyTYTeBPRd9VoG6CuPwbXm5MvAN6i9NWB3yimR5Z4YBxe2pyPgbRaxScbuSfc9GiGTu8DGSF4PnkHVrEPyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HbpPMGJNDRFfbt2CTpQpqAm4J1Gtf7fCb4kHhqCoj5G7gyJWEx6grnET4TTMqfwFp32aKimtP6SnivwAVh7jfWe",
  "key1": "p73RCTMsLU2cvyndrLAVpQxQpcyofRiM4KxS4ogCSoAeWygdCkt9QxKZqfEqkJuo73kTaNbdzbCGkZRwXLJipKn",
  "key2": "BV4kkB7spN4MYZTQG8RBuC4heRjRK4ktsvKiPMyZhxqvp5oKM9kSvyQ4yBQCd9d5EYy7MtKAN7U4rDfVxKkgRSV",
  "key3": "3X1LHAqvuSNUX621sxHdaHR9ePZCrkS4ZrStVLb6mWJ93grhj4DUTBCrGZjVUanEDxgoWx2hZSjABk2XGt8ZxmsB",
  "key4": "5GRd48BiEvom2sFj7brskAxJMpMeLGCYq4aT2KyRjqXiJzfHTDDpfbY7sqckCogmFihu5ozWgViRCfn3iSWmBtaP",
  "key5": "ius3LEtdhAr2BDxTWGnWCUDMyJQq8JhmkjjGBNk94DnRUFCfhLvnHx9ekKx1fQ3Pr3yhvqKyRBeXRgZ75pznoye",
  "key6": "3LHJkHg2rmAWJnhfmgSYyhjxv3ZbMiKecq2gbPQwAQZ8NuDeU7gjhbZmZaF15SYo8swhnyAZvhYRps4W2RFbez9q",
  "key7": "6HMZD9GyZCyjaKYGBPkKKwbmMW8FZN4msQcRkCHqvhjSriN2EKSE1qC5iQjA96DK3HthGugSmooEwCecAUXZLg3",
  "key8": "5npy3kbbMW3AbCaCyfYUysZX4CGzXFu2wQoWmfeZZLeLkHX14jfPYX8NxV588AvhQvHD9MHzvaTfbQVYtZdPqZTs",
  "key9": "3MAXStYvWBeBG5yiGZExL2aGk7vUGnDmPcZmoSqHvv67D1TF6EtXvzkLQ1kY6ruaroU8oJ5wii2Lb2WJavEEZG9h",
  "key10": "2MiY5iwBX3BGqWERbbrPfJLfzR3nXqXUNWnVmiqir9X85NtnneposHA6wHqh1B3LTVLeRYcf9cKbZE7oMrc7cK64",
  "key11": "2WJRvrY712GX592dvuw1KsMd3h5QuDdxDtSQc4ngg2qT6dmvbdwxLd1Cxbtp1GgjpqYAAFizkAtfXBgWC7NfRJtj",
  "key12": "5EyaveEukWn2qPDXJbMBBQhNvmKDA4J6ndvnF3wZcBBjL1VMKRVDaG58zCgmSU4RZXyghZA3gvkiA3KLH7gxfHZa",
  "key13": "guRSntjRZLo36NercjWmVEhcTg9975JvxURNNuuDUGNM59tk4wfFLBt7WkBvLC7k7BKwNjqZFaP4UsztLgV1XAX",
  "key14": "4girTZVDU2ux84WxQo9JEARYKc7KNkXYcy6sHGzNv3D1q7USdSDujig5jqxHWtKwiMdR6wBzcigFia1Ww7VcuWRL",
  "key15": "e97D4RUmBtf1bmT2tr35wT6ucqJACh9XRHKPBmsyq5rxbYSHtSWXqfZiLdB8enfnMokEsoPzPoR1ywohKiXhfeX",
  "key16": "48UVzS3dtZfjZpZyQZMVeGEU3Axxi4TidAVtEphnibya18L4Qdu3qu8yUC59ADVfrKANhs5oETzFz7vXep55GeDt",
  "key17": "2ijgVAnLq1vC9hq9bMsYgjX2nePeAPeFmgUgWSdSZ91WHWpdN4adgpQY8SWW9on2KAs353NLrzcDrg4sg2pDqxoo",
  "key18": "ds9XoW6t2DxBJcmaYvoJgdfTFbSjJEmrM17AzrhUkayNQbejNwBbfJ2MKWCVy9eeED5yqUt5bGx7hDawSbtoGcH",
  "key19": "oN3MFeJxx3v2fvUjwD7S17g8wp31RHGiCYdEqJCBhNyk9yUE74QkChUT7H9JgJPQZkHqAp17DqhUdGsKCy3bQF9",
  "key20": "66YZEYfUxNXEiooyGN7yeFJ8LpuDQifRJP7giif1TDjrHpsi1i84N5kFAPk1dy5Xyn9f2vP3C1QYupoAkkFYqcEe",
  "key21": "4Xkerge9Qt4VRWKHiJBgtWgoVcSK2QaT4oeEyHSGkiG2L69E4LjEVWiqpyj4WjGrEVHe2PYvtRzHXCYMrj47oydY",
  "key22": "3AziWtyCHhDWojhSmxi8fPphBnfV2J2mRcT1SBdq6uL7z3NY1ReZXqXMN3rQaUZyciq668DH81Qf2GRm14b3R9aA",
  "key23": "PSF5DDfUqfbYLm4CS3Q9eCDWR4C5QgAfnioPKsj5aBwfEdo2F5K5eC37WCjyNDteX3F3KfR7tytP5r4M5BkiGPt",
  "key24": "4NnJ47uA631upEZhxgs1iiuFLL373Ttc1xPvLw1mo9KeEJZQDAgyGHE95jVGAGGxGEFxhKJmK5V7TXYocNz8gW8c",
  "key25": "3VMmVRpSHxD8ZnWNS6PjXZnQcwyyT54Q4fo8CfAhzTgXy211tsEbwrCBRHHm1MYz52Yjckj7GdDXLMtXCn7yTdk3",
  "key26": "5hZCadL5PwXsBQLa5cVPEUL7R1H23WsNVKHTS5NXhjhE2zdvh9cGTPwKTzYSX9SqiZGobTpu1TSigckKCN9S82rt",
  "key27": "4Yat6qYfL4uNvQKnzqtuwaLbT4du8Caxt7qxnqQwTrQyHPToJWtsZAWX8L6oyujPEoro51eTfXNHri6MobwhnTnN",
  "key28": "3Mt82C2heVEkYmS5NCB9CbVT5MD7KyMGCDdpUkVpY4e2U7HpCdujVPNxSd9wd5zsXj8HF5E6S3T1XBub3hk12HLq",
  "key29": "5DWSZZpoM8hCyU8cjCXrZaUPLHLsrgcdiu3sfaiQnuNdpuzsxfFkniw6VBfLdTqHtV6Xq6zh668hgBddGuVs7YMa",
  "key30": "63CpQXuXfo12zkmQGxBgbUXJJgxhYdVvUfsfK1kZHZazHgyyrsHcmtyvxMEcTxFbUHt1mePZFnCQ4834aFGX67JB",
  "key31": "3fCWhzmvo123aTWQbRrSfRBcFZDG26YEaU9WbR64v6iPZJNmqa7Nc6DSaHQn5i7Jt47kavVDTEvRyg8gvPvPnoTg",
  "key32": "3zXtqYQ9D6t5cfEtW6Z3i53cXHiaA3unU3a2dPj7ygiWwdcFJMZsq2vWAFUYnXJNmqLQtAcsBGyvvxYZXZZyCVAy",
  "key33": "3AdCZY7feysD9YMwzSQQAZuCMcSdDCdcfeJYmUpQ9mnrBzc9vX4ojciEfhysCi4esN4YdcQkPaCKh5peXVrJvEYi",
  "key34": "3yhzoAv9qi1HeNj4SFDiDWhmqSsW1n794j5U61yKCXjhgvGFriT4hZUEaaXrDSGkTx9MBeBFLudF5Hhfm1auRaa8",
  "key35": "41LF8iEtGEcyVXWh7wgC4UG7KjP5HMCGZ5YB2bSiyeF1SoDnEKa7WaP2ysTU2VA9uYwnrrE7bZssrSrD4DvgHT6"
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
