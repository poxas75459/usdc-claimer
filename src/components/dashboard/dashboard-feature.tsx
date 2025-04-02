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
    "39i6fBZaM6xagX9H6uSq5i27TxC9iqmnKugtwDdwcwpfZgP6oVxghdQhhpVdhzA6qZ7FyYm1wD6y2qqKCrynNNst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZQsEXUTdLDADSYfB4MqboXiDrvYebtKFa7eXebkK9pi4NKwdxZnacXZSRBSVta9od4XB4xM3xD7tkf9od3x1JfE",
  "key1": "3TfHKKpRYpL7F2FpPNvfaHCSwiP8uZzchPHMoSPCtVU4N3p9NyzUpikkhG81Mrq1a5MznF9D6YQS3uizYQAv4dXM",
  "key2": "2rJAcMRxYb3BvTMohAah2NtKn4dxNWcGR3d69SX14ndV7HUh7UAncs3LLLFZy7wMZqibppXBfPB4ZyV2imeDiJr1",
  "key3": "DnGQMFGBThEmUVB5ueE2VRDoHZd7v3VMGhN35ecxvHpR3W5fnTev6QoRaUuHVYESycBPzLGsL74X84HRGPN4smL",
  "key4": "4Zk7G7Nq5x6SXYoKYKktyAG2eN7D2SXUM8ut2eaV2Ws288fXiviDSFEmL8FevV2x4i2gDs8tGxS1GXPbuGkvqvJf",
  "key5": "ptbq8LgQPkuD2L4itqCXiKxEcZ6eLQbR5DjJU6UBqvGFx8tqn57yeN9Dcy23JfGr3d8WR6uLW5wruLfxcFLep61",
  "key6": "3jZjhRezibCn7VPDEGpZvgxwsaQPJPdB1pFi6EJFQ4ao92pWZcx7fjzdbZTXrHLr224P6kGXNEKuRcX6Ar8snNU8",
  "key7": "3xzSgFZs8nsnFoPwjdfpubDXZahMnMq8FYcezTzshs98Evh5BXNpVb4Vn3FnknoKMrkKxx2WF34YafoKrQPEFHfm",
  "key8": "2uEbGfAYMbFaJZ2j4m32NYF6nyeZQHnMSaEsd1754cEbCvJs1YaTv3fY1Yu2dhFdReFYXKhp62gAcLPGjsg8ySbL",
  "key9": "5dVAMDTs2xPF91oBMhag7mEqYJyVHCDSTyJB86FfGDG7q7sjL6FmEnH5npDvYidDDZnsxfhig2UVqeqDRqx1oxmR",
  "key10": "5aUNrYPvaV7KdshYPHWagesp3Tef6fB4mVQ3hSnaJgzSxBjYhzTktAhZ2iXrtnpjn7uuh4gPNsJTcec3iFa4y7W",
  "key11": "66yJPsChnpV8MGZR3RJhhruECvBK5XDaYxfRcAoNuC4GUSjRV3dM7KwqGodGDT6UsTNZhhQbcWEM2VguAWRBhwZ",
  "key12": "2hDkPiovDgF3ByeChQfeiFh66hpUbikbZCmtEV3oZXoRgN6SAxBD4skp97zadwVusxma5ViYANfCRJqY9NBUTFqR",
  "key13": "4WaCSE9B15QswQ5fViiB1aEsuWRN6LdNG47jSoZU3uormLS4XBGd4sbo6w7Nop2gzB9SbxqLYzuzf1txK7m9SJHw",
  "key14": "3K7TQkt84GQcaJoYCMmuu4144wgHfwPpHTt7ZnB64DAM2gXpSYS4ga9vC4b6hT5UN6mAhf1qRCPv1nPdiSBFNP5L",
  "key15": "3e7XjYKrmVmHL6vNtaRSNPdSDaQmVjA8P4Hd5Uh7E4dBWGbtu8gacEuybNLgtJ6z5KFVuMmGqkqoGPQycFeW11m6",
  "key16": "3PFmwVG1DGND5WZmF4f89zHVVjVvBcYVBjriL8A727ix2MDBRFSzvBJac5KHMjDJFLHHHaoKTTqTPfwo8z7TFHCh",
  "key17": "2v8WVYYMJHxQnPZrd1Rw4munGMu8Ae6NFBtx7uJYe6UKtcNHJw6xM7F32oyEwGWWMMMVBLfT4fWcZCexCq8oqXi7",
  "key18": "4mnvQJpTgUKqwizLxDurYjwwHFkDm8psBRi26P128NyY4vWq1yY5mhKYncrksh71UP16rcGT6CVgTrRg3gA2yJVb",
  "key19": "63gsjrznvZd5u1Lengh5ZWp59bJZ6zL4iLvSgb15VnKxzx8bK41pxqLMy1BeNBRGP8UaEm7WELEbyKTGEpU2yqfr",
  "key20": "2HN9GdnA5pm57R9y4iwgpbyb5cuPLsEhNPEpNmxWMwQ5itwdoqFMB2Mu5RGtBPexTQxNHUHLvro4283mgPj2b7HQ",
  "key21": "46x4c57f7u8EL2rKq1fgnVkUakqzosn4WJhLWYzoK58ag8jogmLHv2qvQ6QbWhKK9DePcGKaR2TN9YKStYAsduJf",
  "key22": "5XSkGSPLLuw78PJNSugicumfHVc1diqQNgUdKs9yGDrqFp2Cj85FvmHA4J19JJ9bdKi1TMgfbFe1q6ZW2dn5sS6K",
  "key23": "4AxJLXTmCU5dv8CwGRCt7W5xHd5t5pAjSBrb4ctLvsua7CQKaJ1r3V6yzawCnaFfiy2H7kYK2XfdF9SoDsaVdrW9",
  "key24": "3RmUSNj6emfbcdDrNL9GCqMY9Vnj7auMAMh9gmGV9yw7DpfSQkJuwMUHkyQ7EW2kzLwchxJGASFzpsoYcirQwpG8",
  "key25": "4avS2WhAejiBJZsQXVVC1iPYkgfCYwzZp6mFyBp6LxAncaq8CMDfQ6Vy7YMbUasyFbqDZwumJEr9nWc4gwdqDBr8",
  "key26": "5Lm4v7Lk3W4FzsPEbDax1rwNFKezwVrppvs2wy4XhnQKCHC1Do3mibbsCZ6gAyxNeeXWF6HGjCAc241X1SUkLiZ4",
  "key27": "2tTDjFLNpBKZSfzPP85EUnBQ7qc9TxUwsrKZD3xKj1iBEisaY1XKWey7J4TauzxANxK6xKjqYYFQZnZX9Vdg2Lpt",
  "key28": "3m71fupjziXp6j4F1TqNcKvNvCeeEkmSA5TRD8a3ariWPRcaCdY9sTugGeUZzTPEHCyy2S1rJ5evS4bUuJw6VnBM"
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
