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
    "4cn8fB6bxinPGLZYkaqSGVQC16FJUBp9TUfLUHJ1GgrHkxyfNT7dhNXwBFxvtNpqrToSnB1XT5mXaAfPsGbnuXQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ns5xwTEjzzeq7P3tzqgs5jzf94S5dgvPKxf8sT9b9LmBjCPot33V6dCQXjHpWy8Lih1XKf53ngnBRAMBPTjSVKo",
  "key1": "5jXnDVNjzTrJbEvojAXgGvDMBumnJnDFH9mw9t8Hep6GQFpmyXWv7ojWTJsHMyGq2wri6HNNZbU4dfhzTYCcQWPD",
  "key2": "32zx4SEJcdzmKANSVMJ88EUuzvHNA93gq3wfaeQnsPYp35TjicGn46GaoY7nRZdAmrWzP1jJ4TnU1npTUwVMTGzR",
  "key3": "2TQdpLMtnsLgLqjtaPptFs2cTjszXkEr3jr1tcdoSLF8yTbWhsb8999HzFAm4ro156avvDvJmpiTWupMwBGtUXAQ",
  "key4": "5ggMRh9Y4uUrRYA2uWzuxEQki2UxtxjCy5MBgmCGVge3esvFok3yidu3sRd37S7W3bQWZQCYnfJTEScMPPbxcJyG",
  "key5": "XZHTiV3yE1zHPbGJoVEbChEpTHQHxunKtUZ5kB5H5Wrm8xuBMAGtkg74qekqf7HEmeXTVwTi5eKM68BCEruMsQW",
  "key6": "4GV4nfoH243LiHLN1xtFRUSbZpSNwPnCnUnyJoZztxf1mZuHwf2j3TbpHLvNs32EpzTvrxHaJKqzo16fXvBdNrSz",
  "key7": "5q755awCZj877FZiUarWqukvYqSdLpmAhME3eznBQkwPG4GEmAtqNqKuvabnuiycff96YE7B9kDomtJGwK9xfzgB",
  "key8": "5tjgiT2XyWkqogV4vApjiK3RLWg11y4m1BGnB7T5hQdSujJeea3SGZEtq8JmFbsN2xnd6ac6oSDpD3SoVT8pFG77",
  "key9": "3jQEVQXPA7e5HRu5dHhPn1JBsj7LYKbJUYXopL386CShikmaLWhbU4MjzHoTeBt2eEWMTGBiTeKM1AKXgg4RhYpB",
  "key10": "4PYhUvSEq8A2vZ8PYjmL8eQwpxSw5SWgmH9Arof4qmVA5yVTNHqVaYE9GxW5htnGqMBJsEAtCnXmXkUk1nSjB9ih",
  "key11": "2RKZQPbPmGxwVUDBd5Ba1sPqPr8fnG2RYZ8DQxw86bavv8Jqw6R4usN7jtKekyAh5vM3J3xWgB6rcsK1AXE4iJZ7",
  "key12": "3vp3E912Qoc8WbHmQWL1vJs87G1ZnBHtwho68fmGJSdbA34kTkokZ9QwxuPQT8ZCwZq2qTFJrvDX5ybULxXpTExT",
  "key13": "4DenZQ8USv4Jp1LtERr3Nnv5A9CfbgXLKDUrDqeEM9VQJPEFxsNxxhR25DizxVPQEsKHMArTo8YQtqb9tCHDZa1z",
  "key14": "45nV48qXMtro7WZc8gXBYTuEpBKfz451ewNNTjTnN6fsA2TwpTRVa77bdVC387bdqY5bKgkzpiPBDFQQHg5xesuK",
  "key15": "3P8cvL2eabAKbwm8hPdxJ4fsrCjsz3BqaA53b7ipDZ41Nz2DVNM2qAoj9pVdbmR9Nu5CyEtSxnYH676JDEohr39X",
  "key16": "22WMxQ8qREHjDCVAfPzYzq3CQ9Adjjno6wmyB8prRMorzg2GVfK2YACeRFHGqkELsyc8ktEUVDwjF8QeHCvmJXNR",
  "key17": "3gZP6eoHsRXu2Xs2u8Ub1mLpENmkF4KcUJfW1tUbsPD7289Ye68DF4YHnUdJEtkNe2Wh4QP6QwqYCgi1NkQtrefM",
  "key18": "38Xe9ggNsuXuGfBdyJsu1Zd3rHPdrtqjrF8RvPB9CJgpfFzhoULgYzUZ1Wp57uunxCfFnTmXSCohKiYWTG3Eyywo",
  "key19": "3uL4fHpYr3rgRoK34QLm4P3JTH36mQnqXtXp1xaKdZzaWfQ1noosucNtTeXLLsWuxuWzSUKSUtWXc6wYiVpp7TA1",
  "key20": "XRjLUwS8a5je7MVeujiUkGvFEtkxuAG7Yg2y1Q2Guhj3Xkux1H51i8CyoUi18CGDYkcVHyUGZvEBJzWWPFgFRJS",
  "key21": "21Df7JXmTsPBAtBRjbjwbMZ92jFDi9fn3mJtR5Gb3qmswF12aGp2g1ShdqU6sAAtrZWgwzZr35SnJkvy8FpxRAZw",
  "key22": "5rzd341bn2GNEG8wuwhJtFHmUuL6pPhE1BbFj2oAM6oUe5RB9tPw1yQveE1rkKpc6xFJwbf7y7e9vGRcnEzaCaMy",
  "key23": "3jwQ2b8LEcrQdksHQtzHRsK3StaPwKcsDstiYmwzdmK5UBDrpFn5cpqfujhE1dM1sbueLVhvG6E725GMYkwoP7aW",
  "key24": "645LHLFSGwhP8MDgLfzM7NcTKb11dEFpEkcXZebD9xy4ASEaC9WBu1eK9jVjikiYeeJYPDvTnwdRVexSH8ZmgrLV",
  "key25": "5yZ9Hq4m3H3BWZAKdXqEcu9rFyRNyrdZzs3FEjEoJzyuhyezDkZ3XL6P3PJWMS32E2SseAwVS7UMVWgYbPpXPBVp"
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
