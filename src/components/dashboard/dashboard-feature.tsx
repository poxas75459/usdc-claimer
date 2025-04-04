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
    "5fNGTgMm2TVKNZW3swKTxqhho1fZYsuwJV4cEADrpAvTsBGgzxFhLcNr5Vjmks1kRuVAMVGcwTUqVXnrGfUUcmmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cnvuBBcR25JPfjrbj3inkNCcfPHX8JnGMYVRck5vE73TnYv2UVs6MJUi8ZS835mH4uRJaEQd6oZKfXwite4uB7P",
  "key1": "TtLbgQBCw3h1H6HpzWwzfboLHP4vxpohQBGxtQ1RFdAqKbW8EVrXPZMXjsWBScoeiaAxTuuAZSV7GkGajwAft6A",
  "key2": "59zqs6D3sP3RHEkkKTtSrH1T4utgVEQuiXSVyTnh53Kb2Lott3yg1GCbfeB6DvVCX31g9ox6VXaehjeAjaXBT2Uq",
  "key3": "2bPqPxzqJF25QpeaLPHdezY4k5Z52oXEfNFdPYSkWth1iure1Kmt2m6V4Ttb1vskkHr2MUNS3m58dgsHT8SR7wtb",
  "key4": "43ib6JcbsFPGoiZgKyxMEN69FJhcVwR4NjBWDpRsykzX6Q1AzDKRbjVheF87tmTCvVjqoA1VY6vsoEw4JQyiNvPp",
  "key5": "5Qha3NRg4YjGh4FBjDFeMuyc5qq9W9xDeSuE9CzdeRzrXSf9nBurs46DegC1e1BgG759uzrr5quaceXPsGqjyomz",
  "key6": "M7vDkFt7mwj1iLCXXDNUX4CPp6Kkz7AHEXVAW8fATFJ8y699RgaweqLLpTZQHWhs6JpaAX48wxF47BjgYKU1mZR",
  "key7": "3UHYQfpfxg1Zmpm4ThyFbXTNwZ8CYAfUoKUrrQKSGHEAicjUKDaKPF16Cmi4aeh6qfNkGg5KPaJxuCRBM19DWsDr",
  "key8": "4HmsKJrmVrfmWcnQ7UE1xbafpy8dx8Z7ujSQxppx2ZDMWd1YyxfjCP5yebpnHoSm56uSe6HEFg9BMHkbSgQyoAgb",
  "key9": "3KESjfaLqux57qfs5hfuBUsaJ9qRz7p9nUSvMTf3RE3wCo3VGN1rgaS1sW36jvTaHtWTEoffn7rRssV2k6ATHUpN",
  "key10": "iPxBmukUFBcdV7mWVXMZvkJeimr5o7HwxAkgSqx12vg4VHkQheEX8wYzjpQQyo8EwJPDQxanVQGd4FyfZi59Zri",
  "key11": "3EjSeMgPeapFhp3kTcy8Uzj1uHMWEbN3DeaxSuxHJwBJU48VuHRzk49JvxXPf2aMcYuniKVyyXydjQm3nhJM7TY8",
  "key12": "41DkuGwnRkGxv195Lm37bj5LXtR5kdzYWFNs1C7gq1z7SQogHsQiJUX6H4DThhZq9dnFBr1iZoYzYFAHovfNJb1y",
  "key13": "66B5ZSoNiMj9kaLgEwR4B5WojDBXguwgtnVa5VstQfb78eKy4BBT2252yCS5S7WcrSDzkkjhr73GyNhtAn8wDxjx",
  "key14": "ndorC9N9mADvueM7CpNMpjVJNM28ze4mQGciuTDCPoRXMR4aTKPBL5KSnfis8X9qFdHhunrtCzLk7JDwsMZNrut",
  "key15": "4aPKBik6ZTEYbKaoUcQdJuk34EazKj2nhDHTHLSUcEHpLnRbNJifwzjkp5ypxo3sRvSF9W7HS4jdcNVCPMYyG2ci",
  "key16": "3RvLpKH6xiT9cByqMiuFtj16covmsHW3rqRjRg8W1BZtq7WVmHYiGbz9EBs1mxZ1o8upvrXfHarVMkrFa9dwMdYk",
  "key17": "5doYN4Wu64e69rp8YJm2h8gWP8pDhwuvjb4MsMuvNhaDvDgWMMnNGz79Q25a6Eze4wDJuCXkwX8dVk94HqTpEsbf",
  "key18": "2Jq8xEcpCxQ8iqGkAAXrg3DqxVydYajQtgg2ti9vHc3LQju6TYuSyLSueJpiVD2bdZgdhW31GmvazHWapMRTpPzX",
  "key19": "42fazUfTyCE3kUhKwrx2jhMxXMxTip8pzFNdAX1isdjfiBbm6fWK7jiwAoXZoXqNTudpBADGYwDjg5mh4KfZqMR",
  "key20": "5k2zcyMgDuR3ecXkguQAHLy5eEHxQKH9emnhNmYEWG792qnYNkqHXYu6T75AGy61M1jGUz9WLbvWTcMjepqBByue",
  "key21": "2EivnqyMxto7ffpdvF6f1Vv8aYaw4oS9U8hGFFw2muGSTVgBGPQ2PfMxtFNDAf3QCkmjzkGKPBwfDZVGrz871dps",
  "key22": "4u3UM9R1NHXrnfWbwE8A3ZaHM4aRj29UcHqjvGRfHwia3shbwk1r3PzwfeRUnsQ3CUhf9uodLbuQRtvLSpbkxugH",
  "key23": "489yDov9fPagxnq6r4QSDU21Sak5e58DsQj8Dosfu2oGMicmNd4P26uUkfiRBRnu77AWyJLthhpHUUDn9QW46tLo",
  "key24": "3K3HRgTfMAo93TAbi8sXasyAN6DLyT2zZsfHEVRUecuMW4TkVSB98cADnZ85usCvGg1zrqbVCro8VDCHHPguUsn1",
  "key25": "6qjBnghQgBwFbqiNNx9KCHr2pZR9SM7hTLS4GMWY5rsqh6bQkjGTSMzD5hkgZWMCGz7ESfR3ibLhk6o6FGC1e7b",
  "key26": "2XbjNAzBtqMhqKcYWSCwdZiqZoqtoZSatVDvqmuEp9fEjGXXq8VvkSGErUGAMb62wr6T9BWAKFXRUFrRffP8cX6K",
  "key27": "2ZV9EHnXjENvhW8NUpEcCocqefHEgZGuEXHzwtnyV7HMNmaUULkSRLyShttDJ2NiNKpuuzEL6NSqfHBRHyBXMzL2",
  "key28": "3TN21SGyoZo1JZvfiG4A654fUHaPhPynw259edZqFEWZxtRS4nCXEGFNVzcK32vCEqzKiTuRvXDFVYv7Xn5QESVv",
  "key29": "5CKkc65q6DmJWkFQoZLF69UfCcEe7NuibvmgdhV3BfeYh9AmWUTZiddt1mcPVkyrv2yqdsNW9NqgFSPdJWQAZrpV",
  "key30": "4zRcwbjPFWawHVVuW1LFhwdNjFNUmoACEL1m71aDNH6bPWABE95pLeNhzF3mUyQQSs8FFSxSUSa4CNDiAAQM4ZcR",
  "key31": "NKcfbeigDSBMifuvpNMoP5XoLX7yqMpGcry9Jhnk6B7QXM54Ki31p4sHowh8UXAz8JVPK7EwVzmLXw7eCiuw71h",
  "key32": "zHmH64KWujfiFDzvxLSa7iQwc9BpktzfKXFb7mUywVuPp74V1xCRgquqjWa2q1mbj2gzhpM9VQjoJJcgnjXU4sn",
  "key33": "2XrW7AduePETRge8f8GzDWN39X86NYK2WjtRpjpKEpZbPmnpY1uod6tjWBPrinMP8P22LNhTUEQ7P5E41Vr54xeC"
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
