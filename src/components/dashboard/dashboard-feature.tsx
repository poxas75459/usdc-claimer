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
    "2qhzRcnp8krJ8fr3EzAm5Huk3bsFmLLt4hYxU5hNhzSmnvwag4CTdqabA7GPP8K1bAZmhtsjxW8eyTsYMfBHFFHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63HH65xsyWWnR2nMAMK2dRGkjzgnfBQKg4HCq5TMkSPPoXFBkrqsqnx121q1uuJ11F4hbeCja9kamgBoPJtfv6u",
  "key1": "4y65KrKw6NYhaddhLKa8e2N8bUGhTD7EamgaGzh3Cf2RuvYHP65mN76qAdbucPSQW3qUiLgw3gCs19x79RQ1zJMZ",
  "key2": "2V2qAHmdnmnd2Rj7jB1fpHhHRZF9VMrVaV2Fo17Mm2Yq2vTFJpScTghxYzPYxVw3DYsZdr7GguHUKv7EzqtoRKTE",
  "key3": "3uUHHacMmkXRmQC6YZfwK7DzSEeAXtSHGBmLoEjL4n1CrNJZWBnoZ7XrZty71PdRedbf3XAkidrBjDwG73eVokcE",
  "key4": "4Sj4tC5Jf14RZrr4VSb39NQudEruq6KaGUAvWNV3dF2XKBEnJUQ7Hthn3sHN7HaqdVHsq4xdBqsHehtHDe9b3kim",
  "key5": "4hUDvhtsXyy8NLWmwRpogDbBTBjt5SfAz1sZSVLXxkQyAFya77mN6WfhUXoeXN1ivcazHwnyjwP3eATY8FQeBdzw",
  "key6": "9x2xEuf5pJEU4Lod948LX3VZqZPiTC6cKCWWiRFnZ4r3JiK8xqp4vax3atsdWkkdW4JZegikTseq5qZzNV6TkpB",
  "key7": "4UeFjTVFGqaap9h78L3W8WgpJF1Q2WQJj4AV4jtE8oEejb2MPoF3D4yDQBbbb7iEDSmJW7dKFurj1S312UEcpPGB",
  "key8": "3y5F6E6URQqKesSXdKa4VBGd8UcuE7iKw4ZxGsiqjDXLUKtS6CKpavGn2SgTkJAWFxGVy4VTSvywKe57gKmGjXmC",
  "key9": "3jn6p1rgFsSxd7GXKn89fFb1jLrEpzFC7Mj9oiy3z3QiHfo3uCfGcJJq3ew3BiSfRhRvdMEGq5RQmm3aRyReFHnc",
  "key10": "4tiy31Z4odwGhjg53gKHfcXrLMsA9WXPK7q7qig6KeVMrtRVoHGdznw15SYoHbGRrpM6cFZnTgjEm3v9wkJZcDWh",
  "key11": "gfTdURiSp2X26veNdkaeXjC7cec63LMXY6Ca1zwYKfaJbQ91pREBptRditYDQV87hqLC8W9ZhnxxC1ruWDZ5gyc",
  "key12": "5xwYDQWXVY5oibw4PwYE1c74vZdKprwooMKzaDdPekdsH3XLwsFAkGN45MCN4XsUZKsCBdp8Nq3BSD39ayVWFv8n",
  "key13": "4FgpX3ydSU1bLa42Z5DAR9YW3Pd5h3GJHJzh3ah5LV8zFxmFW5iwUiSBDiUugbFZmLJoZChDxo7EY6VHcCDvEKu4",
  "key14": "3ges5rR8CWjsdSZgwT3rGyPjprYue4GeH5Lzye7ncvTa1DW5Gz6RdeUDAPJhbpY5vAsKhqPFozAUPomKkkPvajyR",
  "key15": "H9LLk5QcRdAaUDm8Xq4usKphiBzeHVsJub9qorSWYzssxfUu7jteGGCobqQ9hABP3dLMRPRj1yNX1VoqHHLy5fA",
  "key16": "3ooSMEDYBhDeJZexb91YvpHKrRmfr6uLbFnoegG9Xa9pArYrLtVumgks6mXqwfpU9Koj95pNb8LhqWgTwQtzDCa6",
  "key17": "4nYPoJKEV5XcTBeUfUZBikFJ7EFni39ahx9mtBUXvnGvbUzSHMHQeC2b5S2QfYE6VksJLKss5qNukcp9abpJnD8b",
  "key18": "5MHpxfaZSERXwM1aJFNSoMq6AzcTStGspBWnNhBTBcfo7nvE8wszdbM5rGiSMCVUhtP1S8gsUcAQFcrmEcGDrgMn",
  "key19": "3orHcyNz82LjBMNiLkZEhHC1mSzP7e4die2zEsmwU4o8R18MVvVN4Co9CVEBW5m8gWshdcL8iyTcrF3ssUMEjW2Y",
  "key20": "5qyBzpjfACKygDKGPKCq6En71Zp4CtQsD6T8wGXSY5URB4S3PikRQUWhwhZnX3hqBF9kMKFK8uFVqE39GTgzVCR9",
  "key21": "5Vt8BatGz4YhVThKf1Co5QAES58UeHAmU9nGhoQnBW9U8P3yKqZruHFndGdTDHzv8j3vaUmftsnEed1dkNuqU4MR",
  "key22": "2vJMiuvujF2RcnSuhNiK6PyxRdMqtudBGpSogBTwPFCpU3nsZ5zgZ4bAiHsFHyWFCQ1imxoifobn2VZJX1efL6V",
  "key23": "5b5GpPddbThErWYLtoxWGFurfGMo7447cA4FA8AfoUtrgtC8xB72QeqQrsvf2W3puZUt47NxJXCUQwiM2yR6ZRXj",
  "key24": "JeBKuwjXbh6MS1xrpm1pp8UtB3YxSkYnchTiAafazvPK4ro5wLHrbC2B4fqHhoWzdYtpfBmdKsL3EHarjCXrZSN"
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
