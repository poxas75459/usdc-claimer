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
    "52nZvCXZ5DHM8udtrFsXXJV7G1XSJwELFDJ7SprWWwLY78dMeNzvr52dM4jkxTvwDnxnP5i4q1NH6ojZd1cv9PPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bEjD9jHLro2s2ELMBuieh8cLwoFphKjNKNQvQZLdvMMyPWDaJNruZ57J9KfwF2GZX3Z46Mps4YVr9JAGVMKHsqZ",
  "key1": "4gReMN3B59vUxUp7EveBXb9AeYghxEdAY5nMofdHzf2q1bX5kUXW8SrrmePayuCopbwt3dRxzRxGknkKpF7G1G8y",
  "key2": "2aaof78UQ7poC8aoMjCH7PWN5LEnudM2KoNSiAqeurTfn9BT25ygLo56PPHsG3cgQmcBtiLya2DAGMC9nQXEpy91",
  "key3": "5fLzQA9uBVq5BQuLUJApG9Ww1ce4mTyiDiKQV5sMLw6sLYVA3buLQXiSg738ASBPu1nxfgus3XdWrr65HvS2hfJ5",
  "key4": "3Jaqz8fAbEVuuPfU6XW5VDQJQvJxDYjkRp6RXLfFERnHdwieurm7fBy6c1yrbYxj74eT4zGf1TJRW4V4WZDHPswh",
  "key5": "hZAgSTmksUWg7Fvn4RhEYWoXKk2v5rziwcYuAxRYncGCo2jDto6J9fCPeZdbLpA4MxPvLPZzkcKqJrbgj7LLzJW",
  "key6": "2DkhtoFqaophZGj2pEgSAvKbKRzATFAabY94GRFULvtgnPk35imHB4FAeno7pJGehHDGhivW9WtauZr7iBZLKiMQ",
  "key7": "4ikwAcyo8Ar6DNjVE2DBJ62yrFdqfTRnAcDbVCptcTYJLBuGDhLqsc6BTXCmusZHa96i3D8QCgZzxiAudQ91BhLY",
  "key8": "5vTsVLNtUYJ9fCb88ygxbn3XJQ6WbtFFbdquvbwU5LthzfsNmtBJWQYRRhHKuKVmAqqmvmRGVz32JL2AHmpmBifg",
  "key9": "2pYEnhbgrvbYuG7oDiR8Z99TzsnbVNPp3h6QHwcfJ2Y2F8s98UbFHyseXgfqw3vhgWsVEbRwa4ePZ1FGNzQR6EaL",
  "key10": "BWqSBkJ2WmvsVanornt5r4jYHKmDY14uwXvqKi3FUVg4Hae2zg5AcStBHmmbEZfkvHsEVg3CFe3RrFTZt76C9Jq",
  "key11": "29JYATA6hdxx511WeUdwcTyLWrY8Yp5SZc6FcX2tReh2sCKCEAfXez93PxJ1AsfnJHJSx4AQ8wrCabAQhTuTY1uZ",
  "key12": "4ZEyVAJjcNEva5ZJqPHvo2peqQBTo9qZMWETVFZPdA3RTtzhVHQkdQHiLXxFJ2HPYad9BZpMvAvSRhrnggnNQSBC",
  "key13": "2TttNZG8Ygn3aZy9nX3tcUtHAnsaaXKRkEXjV3kSgqBmNDMR8WGFTf5jGFSZvZTD9anVtg5bBL2MC8jginNP1bde",
  "key14": "29fhzgUuXPg8i8jJSLSLXiQQuChpTB8KvoxTkWCFKgL3VuzZes8ZiVUShpj5aZrY677oxxfYzUU1V1gjDMFC3hfC",
  "key15": "49twtwrsCRachf1kffFawuXvp4Nf4FXYe1UWijkRns8keVFgyxvYLukai3gDK3mUoJKFNerz66xBsrhnxHwekTZm",
  "key16": "3CghDRt8VwuEGToT8pNdEA8WJ2hDprzkKw5hf8QKVKz3rxEqRTB4RGQkABn1fW6iH9cpEpjjavWYLKeBth3jY3RR",
  "key17": "2Td8hi64sQNufLFb5Ht2LaREGvUKEyhHNNY6B6ecRDyc3oC9tCR3dVem5r7yRqegaBSGNKPTVd9tefrGeizmUXp8",
  "key18": "2i7T31skEWPWouQBc24xc2DALggZAYWuW29oVF8dKqFhTUSKEd2BrEebb7Es3zWYYN6DjMsW3phk8A8CwhJex2BN",
  "key19": "3kvLsJSs4rNvSz6yqEy4R1ZCQmZek133qrcos8RJNPS22Uc9T8QfaUhMM6MMKDP91CgobnajmzzN6fPK49kMbSzi",
  "key20": "3XEQXXqhZCoz9BBnSJ1tGxZAqDBRf7oLrzwFaxNPV6wEm1SjYzLyHQ7mGFw5pKZvibauwR6q1X9LpiMEpphomXjL",
  "key21": "2jbRwYMo3mBGYqX5jmr9srT6T4S1kgL1qsU4oXfMUEi1B7Vr7ySxoMbU6ZKF3RtCtcEmwAJgad9FVcJSDqKa7GqM",
  "key22": "2KYG237yaUKutKWfYe81kH6mRs82MJWczLS9ukZ9f7LfhA864Gni5BpfY1fRcBes9dV3pt8q1uP3W4ZuCLWFRW4b",
  "key23": "58wygfMwUNicuB8T49xRDMtRWy3padLbvRQBTLt8Ya9EfPuLnpFAJtpEDQ88mQuGqDxjsEGX6zyLL6pkWmKNN6wZ",
  "key24": "5cBHALjSBHciikN6HTaGrzUvsxGQN8uHXRVUumJHyVWtyY2dBsuiPqu9qr1t8PjRUsfPYgLFcsGmCmaCkeeGUKXQ",
  "key25": "661SjMTQdxxRym2kwvTTbr6EqauvmpbcNgrGwVrrszmhcGWB9JamfEm4QoZREbdz9hwfTEzbMUiw2Rh3c4MMZG6k"
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
