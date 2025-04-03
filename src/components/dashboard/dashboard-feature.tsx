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
    "553vev3Sjf4eFghGYL1LWso89rJJ2eqWe162oNuthPHNxLy8Wx9yCLUqg8g1agKE6qBX8yG1wSsXbdMfaxupkRwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61qnP4mpPoYiQxvz96gzs9BL3uQj8GwmZirGGARNYYtg8HsZBzigxzz7VHpAv5AVcBBQY6vSofWnJpXuCTfJZ39e",
  "key1": "5TJMg8thai2GWSvdKUmw45YVZPDfpdqyD3udpHE7ZoKXRNLXKpcruS46X8yNG73MFULUJwzHGwLcLuBWLFuYN18Y",
  "key2": "3NDMXsUjSg6wM6UsjCAMWaU384qLJKZAAxcJzRMoSyzXQboZUhHMDWteEWQWqzxchkx5gxCzeYBscK5vxMbmyyw2",
  "key3": "JA2trpz5DAycfFTXDoc3ekjqTR6cedkeriJqP7BGopnoHJTYZzUbd7rTQWLfDqNQvBH6w2CxYt1j3zy2QuuscJi",
  "key4": "29vLCmBozkpnvq7STjAyVrmuEcJ4CPY3Zp2EDK6rufGSzaY18KwWssKzQa7wErAtzGUv3oK5eWJBDVVqceqLXtQr",
  "key5": "Eqi8FqiF8Ehme9XUkzxNoQmPrc6ATjMjXs77bhLA49rfG7fvp3uCJBNRKZmbdBou1FXxdSU71KqA9wfgtbNTC7g",
  "key6": "4eFPPckJ2FxFxUbmtFmU62a1NEQpnwM3uHUS3Br59Ek19wuHZf8sbKamPLm7DpVb7kDDugrFMPNGnoZmNogpW1V6",
  "key7": "4xuH2c189DPPsWXnvitRwDtA8Z3cPAn3nGxD36aXGNohbAxAk4Atk9FRuAJXyyiURwbZAie52qmurRAhPm4VB1ki",
  "key8": "5byY7yk7VXo3wx6o1NUw3DpbUtAsnjTjhuLAjoN4WV8PicHTfGmMcgFhxLG7YxtcnBLNky1Lai4hFjokBpPZcrX2",
  "key9": "PjmvRwvusjULucTtm4KsVCMdP52R3XgoSueTQ6teSiSQ9JZk3SX397hJWwhdaB8i9eGcSPV694bV1jtPZ1aTutW",
  "key10": "4vG9o569UEFXs2LrVYcRLiKiBtDGfUwnyPTPtS8J1AHRxmu5UE7kz7nR2H3TqpzEw6ctNrYwAeKLyfrhSYQU1YPx",
  "key11": "NTGSkSav9fFmeFq63wzhVi6ALCPgGrjCs7Q8MDgHqSTVo89D8QjSBQwyHMRTXCmKXCt2vREPRFe1EYqvwYa1Lhn",
  "key12": "2HC6j1YWc6uyC4n2imQ3L4H7akHeNx27zBpQz7sjBXRoG8EFGF5cdP4tWgKPU5NJaMePKjhyp3c1HdCD1X9ZJhpA",
  "key13": "F1jedYjM3NEJdjFsPhQ3BaDxTumWqF22KfN1n5okWUyGeZyeDeBKHHntX21LUs6BXx1yxU5Jnq93coLQD66RYsC",
  "key14": "8k7PaU4myupZU9JE5aUZEJxaWkAecCY8j4zeEgKxqSbYT27SHC4CserVohEGQLyN5jkTaPuQYtMWxAVtvimoF1W",
  "key15": "5ARDzDUXyudxNA39Hva5pDxwpbPHcteZppenGKWYC7AUMoZPApAJvLidzqTBELRYBeuM6cXKQJ7NyXMm3gGjaDoZ",
  "key16": "3We5rcmMaBJDu3R4Fdd8CUL5tzEwCDcHYs7CG4b95gYytn4wpupsaMhEKSvTjb3BZf2FKw9AzSA6UzPxQ4diGC6r",
  "key17": "DmFchphZBZUsq16UJJDjxcgo1uF2X1o8BumZDw4NC32dLVij9iD6g876HGDWgQSW2bbinnuLbJEyUUnd7B8uSv9",
  "key18": "gjNxes92a9eXCafS4egBQczXvFfGYwwAStsMwAmy2NqUVjkbMzPcax1cLAarNa9L1JZqowdAxuCRCkcKkBdHMpw",
  "key19": "CyqwEpBrXnC2Da4P5W3JCRxThSsKzY62Erfu42JuMshxTmwWnKa2wWfFbsEX9WX38AjV9VRvg4LxnAg5eFAMXMQ",
  "key20": "65X4dm8dFVNo1Z4oZTjD3CyYj5QeFJQV2FjVSkRtdLEz8hoD3sESRVjmbFbxfGvWKQqEKaMQTpHypuccXuv7RTF5",
  "key21": "5FntHXR5RexKszsxC5otF42cMfdGKSUpj9EtWY4Chbuv1QDUcyFr8sTL97zYVUVmGjCE3eXsMcD8gaQzXyidWNh2",
  "key22": "EEcba5T9VqhdhuhCWf5YhMmsAZPQRGiaMmj4vNf9XH62jNmm5N9wK6wfh4fqo8wYSNXDEux7Neh5WLiHYnCM9vE",
  "key23": "4FhBLLyFrNbEsUxQckCk3SATBhb3v72rNzGQj3TnxS3PFx755Xk6yjXGSD4u5AV2SC78aEeFS73QrEapuLGV7sjL",
  "key24": "jAaX2ZWthdQiwdUY3YMJqt64gkK9oB5gWS4wf1NJFEzPAtWSSBGZBnBf9bz61AaonPt16jezKPg4r6NwkK3SG6V",
  "key25": "w2wTFQjg6xYRKKPtTZG4xYLQFizfiVwyoDSLMFDF1omqW6HfcuUoW6awSuGvv4PkvTVMm1zBkh9r8bUank4LDZg",
  "key26": "4ark6qZAqDHBw5G9Mvv4gsp2AvbLrjNHAoDnKJuLTUStYpesivc1scPbbAZqhwsntcfQFgStR5x75a3Fx1TNnCMA",
  "key27": "3MeAPBvUJktnXph9hi86knxPZvGxQ4h9Y5BopiBQPn6J8zYQqzrEGABkgBkk7L9nS3LJ9XHY6bV6HYWTixbEgqXM",
  "key28": "5ZfnZw5jtWcPwsEj48s2697q2JGY6aK1oBVHKQic7nWwzUbAH4dTH436MP9S966GHPjL47cgmRVczGeCCADSKHtK",
  "key29": "nH2UpwDjf58BLK3DE2oV6mS7gtvK98982HH3DCCc7GTy7BQRtqioJki2ssJFzaKSXWxe2bQmLWmNMLbfP48dyy6",
  "key30": "35prUhmotMRkQcTaKegi4XBD8tvAGm8FjtjywFsnuShjGNo4GZVwYRdiSGeGiDG9mA15z1yDQd3hvNK8rNpT5cHr",
  "key31": "5TYT3HeieRcVG6vmwhJsM67mBsxNGyQSfvFqe6aT8AfonakkFgbAEYpiJh7ZSGje2wbXBTeEc9JyGtH5Fo6PCkg7"
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
