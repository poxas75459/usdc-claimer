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
    "5qgnueeR7sQaFVYdVAYTCDNHdd5xraw28apWqL4sAuEKyo5mKZcXXzZX9Y6z9b5LKMHHSBvWXatxxZNqV7USRh1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sYu3yEHWVVkGmMDfFcbqu2PqpY7vhBtEGqgsaG14XRN5ZeF8kntKnYtb8SY256HDt4eVhnsWc3EPT4ocA8XFtwA",
  "key1": "5GqyiSY45ESh6xic4AJLA7jSJoQsZSk1oatNkcQBoK6bRoEwFzA9FrUYB1kddmbnZDP82Q2zeAtESSUmpcfFcZsk",
  "key2": "2W1irtM6v22F1b8fM9DjXV7X7zm27WGqkYc7oFqjhoc8qfR5wonxTZeq5QSjGAKbbiKh8ygTPPYJmNPLWwhb5FMT",
  "key3": "zc6eKu4E2HWM3nYdWTATKAuyB1RKp9HSe33vSxVrU3c63N1Bb4wesCTFPqmjwQjYsefCdGHxVnWC35pvqLkiLvC",
  "key4": "4TmCH98x2oZb9iNKWHMdMqpdFsyY9xDWTLUMYQK9MgYG2hZBdiHTqhPTb1tFegp11SHr8ZWkbpJBhtmxf5EXAV3K",
  "key5": "4fmCGVSUsrUWJYhLruV8kSu475XZgJSq5AQ3URYWhBuicgMeYgKjJJpQ9NTFBUNshiD7c25WxKziTFJFYb4kiNRG",
  "key6": "3qeNNNpe2F4AyHyjLRvgcgCdxHFvEcRj8qf1ha5DC35RufeGYSDFHNqv5NtLsUaBcx1SLouqSqVGgE4wDNnsLJAo",
  "key7": "8dRmYhTHjrRvWrf5H4qNRkUzdeRoNs83T4M3dJZP1hSUh3BoBGynThxDJBpngnEn1HCwQKx8zjTneTXzP9dAZz7",
  "key8": "3E6dhu7xPBNh1jTyH3nLuzrrzsE8itR35DpYZw6AYcLB5ATVSSC3S9k3Lt8o64AbSgrqvBykApScDjkBNsZHU1oV",
  "key9": "293DRNZN2rmJ9vQE3r69xBAgrkNc9tg5SMbB46GRdGEUW5QfaJdDhrKa68URXuVNcdatg5pmWmSd2uvgPMcV9rGX",
  "key10": "PHmB4SEGf2zv2mueBx7LPHfQ8x4dUK5JCTzZB8tgGg5W2pkC5QqmrdhBTcoP38yxeNqNycJVehoSrscrx911cLS",
  "key11": "1KQCnQJePLY7fytAvYAxYQ955hUsspvFTBLF3gJrTFxbwJ1hWHSbPn7mJVg1droUoCm29QyAFdzcFdqwZafBkPr",
  "key12": "4Kv1yWqY2CqMCwq6HQhARjfBJjizHTfzoe6VKgJq1QnDtEKe4apDBkGq9iA4V8pPia9J4Th41EsZbi5yqvCP6Ptk",
  "key13": "3sN1E46rYuExk3WTK1EZHS44KmcrLP7oKk6XGSdKkGh2LeKuR1us5k8AxaKdbbPexVf6LUsduSUTf4Uftk2BEfaH",
  "key14": "3AVfmwpjjpaSPeCq3Ls8sT7bDd8thq21iSfoqoFKu5Wnf3N89UvKUFhu4kAgykyTkUCsDHPzVse5vizAQ7uVyF3r",
  "key15": "5qt1wAAJyixGUEUu17RE2Qnx5pBSm64nMDCN2uVVjY4UXbd785tLa52PiawXo6ySKbBAWpkL3DKtuaMVuvJP25Jq",
  "key16": "4fAgTza6taAbZNEShid2KrWf2JkDZ7KN7e3EwSA1YCWRgVLWVFUiL8xKK2Grhj2mvAJ42StBRaynVbjjaPb5MAxZ",
  "key17": "3yEipEX3j7sAfuzkzAsjsVsyBqh9fS43xkxZb3fv1c7Nao4aDQo6AxPSJr2uMJtBVG2fqhvDSE4GzfqGJT5hHBb2",
  "key18": "3ZbSJmiRgWwHMdg5K7mVdY6TmUM5dNozFqcavAUQMP1ETwKFZfjhpZaBdVgb3Ux23YNF4eCvhnFvzK5NEH953dyC",
  "key19": "3qYzPQx9k9QXg7wykqEtTBFQKju5t5UgngWdbbZQrjdLs2zNopDaCXJLCFdJGBVVKnHNP1Y9qYUccQuBttNhTCW8",
  "key20": "46k3UdiTp4qq385U4anrfonHqWECgACKCHsaPakVzrt1g3WbcRpaoL4KXpvynFKy4amFyKTp6H53DeK1KYRno6yy",
  "key21": "3KMmy9hfD1dgBit526eiHV68P7VcML3HSGY6UL258gfKeJ78cydFN2UYyXT6H1jaPy8K9weYB8CoKbd2mGGfLp53",
  "key22": "5bXEN6GhZeHXJCtFohpfonJm5UCj2Z2r9JAZYjoC5P8rXfo3yfL95JktGf9WLB7odkg3DCer9cGcPBJ1dWCK332a",
  "key23": "hm25SrvihzzVNRbw9GGYEmJsiggaYSCLbFwcauRzBU2mP5qJB4p9HvqmTp3GfLp6JR8VJCnsDyTopPhUNRaJo8M",
  "key24": "3suFckcmH2cMkiLCPqqFTtdhdGncjMPdhwNynNq3NLByYoR6RaPfRMS9a9s3fVcTU3VpeYae2LqF1vdXgrP2NnBC"
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
