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
    "r9ADrLxKyLsuVn9KWRtCQFj2j7vJY1LocPzNWVbLJLaLd6URpUDQE5FQF9AxbGdJv5MkX4dV5UwPFm2tbKTgRzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8WDtkRXZTfuV99mHHLzPD86JXFxsQ6k8ZzD5CSnApJipWyAUdfwkYtFXBCxDULeUnYk5fHXESttGrdzfacJBFH",
  "key1": "4FTkf44UewstWFp7guzQYRJDZiqaxWoR1K1r9StfCGLKiYYkvjnAC97WsaeXwJvaSX6nmKd59S4NNRnLsoHSLNVW",
  "key2": "3ctthXdvYi4SJx7UiyuDF2ZsVD8Z4wTqZY8b8gq2N5iydgkQgy8MTwPWeRZiaKgJ2V1PFdVvrmb43HQ4WabrydWD",
  "key3": "3ynv7BB2AyoreZKGjdqoxcmndEZyttZrPAY2zZ8JHg5ggGDzm2VVcmeTRmCyQusEiutod7kSoeErVio9nNKDCnjj",
  "key4": "9z7sjHiCbvaubBCugMbxB1ZjRCKZmhCvVtF4r6bFCPhf9K5xBxiFsbKKLCpkjp7hVWE2cTHMrzSt5dK9mf5tyfE",
  "key5": "3ZwhBSZXLukcCJ7YaacBu2xtLSQgDX2TFC3p8wzaZaGYApuFKZkvc958L22k5Ta3DYTi9AFbyqvYp7a9LSce96qq",
  "key6": "4urFD5yrY6NYDxZ14onG8vmMgCSpZPc7YWPMtN2LE7Yf8A9uXnYfXzDXXfhAbRP2m3aTYrVM1yvCxcSLYuapJ35i",
  "key7": "2knGVyQiJGm1TYrPtFoUD6iDGWUJ4cWjd3KETQBu4FkEhKKZDjUfQMnvdE6WRvEgFYnGeujMNWtpQnnL2eVBrEMr",
  "key8": "vQDkRv19dtZvtDCoXpNkuzFjHhHfrAALv3vBzADy7jk43dL5mEBkF78oHse1MdG5qPLhpzedgJ2ivRNM19BqsB3",
  "key9": "3qCD3iN76BnSUR15JtUE6SJMX8nha4xuSPf4Eb5bq7PMv2kxnCgeE9xMmiVKoSPRfLPyzHEcjcNRdwrm7RLDnuEB",
  "key10": "4DcZmYxBsiedB7ac4VBCWzvEci5rrEyJNaMdYs32Jiiei4v8U6mTp5LbohVj7KRfRuvZTWunk1JfW2SokdSJnPcZ",
  "key11": "boJVikjYsL1aZFEWDy91HJ8kFD2Gb9vMj2u4LM2KLERoVgR7EzFmaTaPkySAPem62bfqBKQfTWLTfRtC9dkC51k",
  "key12": "3fufZ83javWX6ZKTSadXv12LQmVSwPS275FuBRTQrrhgofPgjNzLJKAgx88p8R2qNaSnA3Zxe9xniLEU4YDE4eMD",
  "key13": "3cqC1b5BXJ3aAP8KmsWBui5xcfNFUhn9swKDhobtLAaU2w8RLA9bazLD2ugU2A25WYRWm1RBfo4VBkstqJsds7mJ",
  "key14": "3DwvNjtF3YF3zV3AYtHf2MfW2EbSAeAyVTQx7AUi2a5JhWPbYBTpwGg5MPCykFZ4WNUTWJUT3DbwkVh7CP881qFj",
  "key15": "CVU7er9EXWHLusocc56QQJGWhKoDiA2MsNrr4E4eT1xoc876gmqytg6mAWbUYmc9odt9oo8FZip3cwYJ6XJQ1B8",
  "key16": "62gnXUSCp4nysycgb5w7hark8UhTuUj8bdX31oWzKzrKfbpPUyB98VCwhCWRKadNqLs677spvP4pHLD9KmqJMpgW",
  "key17": "2Eqn6PUVFssGCPJ7MDaCxUTPRraJxp6oAeXsSXqL4vSobYShWnxdgRut2UE3myA9h8pzQBWj9seUhWb7xjUpqgq1",
  "key18": "3DZawifu7Kpm4Hmfvx5HSh6yVEGzQthNT48sZjLt842G5Pt4eatbYjnHSwdHbmg86NwFLky33qppSvj8Keg7eC7k",
  "key19": "2yAfKZaVS3RnkjboV1gRi2zKFSevwpftqRQqcdTtWiUyUNDDPvJoJVBDcPwzyKCuPfZLjnvgC4szq9Cafa9iFufQ",
  "key20": "5n1TQN8u2roT6V2727C2gMuWBofKQE4qLcPpMCEW3pg6HULX5cf6M1UWMGJvAfoWgecfsCZtR4J1g6Ca4fejUrAt",
  "key21": "2cfX13dRaFw4NNUyTPHLtmvjA19BMpJDC4WvR7B8Ddee987KKdsy7mtZK9kdwXAWe2XJosd1Du1NzAVZGu8sRvYe",
  "key22": "9sRVLvGHPR7nVcQcPwf17Vtwu4pmVeHpwmjjKqjL81ZsJJppigU2kLX2ZjgRkqvQxCqHZ4qjWudrAvXsuTxzePM",
  "key23": "45aiUbZomQx9TxG6vUP9u2BuBG8Qm6EGbbyLb1QR29ELgCH2YDmwW52dAwKTFYSy2TWwnwuKahhYVdqPZgMHMuQV",
  "key24": "3i98HXHPQK5BYec1LMLNzVUjFSAs6sdPn8HDx5NymK3dqBncxmFEwoUavp9XztZwtgeZy93239WrmMkMb9Qut7UF",
  "key25": "2o5sxsKw7HPZiGGNKBCfcG1u4foa9D5Awaq5ViSSqx5ZVcpZFchMtZCvTmukhhkNCwbSqo7QNXRovVD78HcrquFE",
  "key26": "22iwdQKAQCMDEnMFdSviVSAQ229gifC8WMdRSW1FoAQfyJA5xukrCS37ZBDi5Dk7YH2M3x3Azvxrnub9UcDJigqY",
  "key27": "3cN6YzygfvadacqMV3gtHAwuHsiPLbmmdNuBfb1Lv2hTgYukqs2rYRrNrTNvMP1Vre5mEGh89JQS977PNfJj8TUY",
  "key28": "2HNmptLuGQP26tx1ScbvYWxhx2ej3Hka88EPC3ej8iPPNzCyJEDVjQfxqFRJe9z9S8oq9CnbFQn8N2NktHNffkqT",
  "key29": "W2hrgaipJh4qUgGw5gWRH5LVR24pfdhp4v5G7NMBnTMPu7T2wD7xTs6zasFiXj6ET2KX9JgMpEMTgD9Yg4WN4ir",
  "key30": "4c9BLGjaLYCGPPy4qKATG7HdAuGNHEgvtww29TreofEAdmyV1YNRp7SEBqjCarJkYGmVsWV9pMHMZBxmzDEaJ42A",
  "key31": "2X1e5fg3UWDTuDvg5j1t4JULCjFWpBJvaDxjQ81jW7tE8PHgFSFP4X23Ycm77P7fZL1543EzPowUPVfvKQNdjk4F",
  "key32": "4TgpSkLACLY5RatL4Rts4d8rdnhiXqpoa4e5JKHYghcvgZUV6pnGU1RbYh9juczqThESRH8Hqbb8JzTAX99hupAb",
  "key33": "5Qb1Vsvb4EX7EypngkQPrrAp7H5WZ4sxXbD2UaxfDovqMHzyashiPM3YTXiuXDW9PPDoouoSddYHiNCzJ4bfTTA",
  "key34": "ohovTcGfz7KLx2KRBcNxjCYVTGpEfqB6iRuSAbREwEoDxVYfMB54vix9z5njtNfoEotEeYopNrgkWVP9Cykj9CP",
  "key35": "4emijmqXyrgj2tTHnz7VAB5u4mPfDpwxx4YpbRtkKbWNEVsT5E8UgjyUJNGvZiRnTwwCx6GfQ9du5uiQgSMMGyhA",
  "key36": "2edyv1MhDYXUwpKSf4w8b4udTbLZkGHPWzEwz5RCiEMC3P9zAUPuohQvHs9UmsqexEmesuPLJ7bDQX5smmWsPjXC",
  "key37": "436h2Fz1ms3n3BMFDFoite6HMaU6x6A5DkKfNGZnuexuRHRY9Bfttsaf3MfMnRhGpaYpXA8DbiZkrZMar3QTp8ep",
  "key38": "3xHLmdCskFUSS2jRHQYGha6bv9sLvE1cfd4TmZf7YH2HdRwMJD2U4Ew67q227BN3XCH57xw4c9aAMaAKtqsxKVzz",
  "key39": "2M4RVKseAqTF3vNLzoAeoPsxLvbUDQtBvsApfnSnSei2bepsx1tn4go35pN5eU3MXM7YENXAPX7uPGyoRhxhVMxL",
  "key40": "5p4c9mHxtkMym3bPsuRgKymV3BCV2fuq1DxgLeMwGhJ5ridPfBEY4druZc71tbdZp3Y1RyjAYwFPMTvBPSw1vLdS",
  "key41": "4Gp1PQiZwKkmSHTAAfLwgs8xE3mGt6EaX2fNMzqWqmTuCQQMzWWpM2Pzg4FgEpJuU5FXZYHmbPeQo1EHAdaGVHCJ",
  "key42": "5Exooyr9JPduJPzg5EnoyT1SjQMG1yEZTecfYTTTcaSxirZmaTLjwAUy4AKYV2BsZeU4MU2kFfS6Y28HvngXeMTk",
  "key43": "3pPNMgHyU4KQFDAZrHC6TqUpJF9JoED8kvunfktrs4gHYZyPTtZEDnfRWt3s8rHXyrP3KZ2pzPmxzNzYVfw5nawY"
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
