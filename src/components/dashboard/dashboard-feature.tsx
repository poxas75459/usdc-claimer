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
    "5bP4fGwEahfK4sqdhBEX3EHebuNrcpg7krVTpDvVKJv4r2mEKP8YekGFqwWnZZ6uX1KMYvQXJH2WgLZaNS9nq9an"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hrvWe4FQmAtyDtXXiCoX6ggrtExzcUFETSNrQQQ8Tmfv6qwGQvyms6cEiWRXSRiS9SKp3fHenEyAKtVKHFBs1Uw",
  "key1": "r9rd7CfiasVy5L1mwrEbjv65pZ5Tmxc6edyD9h8y8DjApj8qwG7G8vrGCWSufruncQfEhysaaNtjBbTziLS5ch4",
  "key2": "ML8e9qsQ39BW8cPmeVVRGiZeKR7udMaoYcj7NE76ndGfdRXFp5mgrhYjpQshjKsNhmqkkFSGTLvNeGnXQ35VtWa",
  "key3": "2siLa952W3BMFSgSjGYbfqk7Trxzxu9K8UUKa1HwSz5bfMUw8VR6DRG48oE5jrtgyB6pstuQ4tmBrV5WLD4b8hvA",
  "key4": "3nV2fFz6oaVxPjWmB87VYiTrbfiUtbJNsmV854WnYJnRKfbokdDnjbNUs8JGqhBZ2tcxFwftcK7vXR57n3n2oeh4",
  "key5": "4MhjtyXYyCKuJErfPv8MnzPDtqMpKU3McWEihBUZBDc8NoBtPGXVv8F4TkcNVr4SyaSXDoY6nt5jx6BnEv6UWDnZ",
  "key6": "36frVU2kHZ2qr7wAfT6HdmdG8tP5pH2tphEJDr5Txw5iVEWNmEPiWLVwEKoawCCiGzF2hVV2r3qKKo3jkps3nqCE",
  "key7": "5YJCJJhtaTHGaYdpZbhxNaBJA2TagQC5ZTRe1jwBMq4NSq2gaC8oNnYZDF3jKjPStpeNZyJMpguUUCnGEPt2bCEQ",
  "key8": "2eTgFdej8YxXYzPWWdG2yP3a74Y6DyuSvnZ8njMVev9cr7SkakAkEFJemFQdCRiDDeBJoZ1QsqQQgs8AJjXXBgaw",
  "key9": "26UzKcQTCRyn8AsMMXXFkDW6wf69kNRupht8NAAwuDbMuFf11xyCjBQNt3FY92tGjf8fcFhEAghJGvzAhe9b18YU",
  "key10": "1KqXsbioBDMmrynauBt9vMVTxjikUWEqDAMYaP4kWgdUAr7W44F42JkmQTAwfZPrqk5ifwYYZZevjnR7KwPZHTh",
  "key11": "2Qz39JGB5CKfVUohQs5rHAj2aBjMqz86NRpWWSFnoKA96jFnQFpMKQtSds5CqiMQTurHAFihWY33XMYjCEsNZHec",
  "key12": "3BaH15to5cH7AyoNsBGCaTC3m3MQfMEYRJg54CqtRxmS4aUgJK7mbae77Jr4stucU9ferbcr7UMrK5P5fmbeNdaM",
  "key13": "2m2CzAAz1rZQmy5cY95g2hr98MGMumhbVLyhZ2M56wuwYsLD28fFPpsMLMw8eRzY3Fd93tzQ7De1ejMA3UKT5G2c",
  "key14": "5mCQcdU7zbkDkfV3Q6S5ixUr6Bd7rsqHBTum4Ao5oeCpzQxe3qZ7Q2pyuLt2owkreNE3Vq1NfGKeDvivRJA5iJYY",
  "key15": "vREVTf1aNkyJRmCvnDWjwCsARTK57fzkNeyP4XsvmYrq5qsobjm4RApKtPo17HyDMNv6uvZhKEfUvuoc5ag2e1c",
  "key16": "2UtfmjMfgyQvVCgUnd2rTgcrBmxiEBdFibrXt3d2SDsip5nvkKCDeNoSzqGsqVY1ufWj6KRt6sGK9LLh4qH1qrhK",
  "key17": "2bG75AAYDRP7eiVx6YbjMkuegKg7WUfNaxX9NvJhNfEfHsJiuPvkBDERSxrYYdrmjYEXkZs4WjAudDnWxNNTKaha",
  "key18": "qWQhUr6QrqaLzrHRcnUSf1ZkGNmVgLJU3EazpWkwR4YZTEjA349uRKU5Egp1YbBPV7QXZtmrNKAKTcXxeSpE2Er",
  "key19": "zjPGUJLVHQ3oAJXvcMRGVatWMUT5xb39Gek6MVgTe1nTvPAc3Aw5BMDTqqasHy3btdeXdruf8V9oP6nXHZBabDu",
  "key20": "5r4UuBx72kgvKtivStofBurh7FpVoHKgNSMAupqZ62mp9YkGxr7qqYwtxKPZtWayJXWAJXFHzuCysQ6sE2aJS1SX",
  "key21": "WqFTGGEg4TBGUxgnthHPrq9bQVtksBn3yujTBttd71L14sSYVfFggrvkCXTmLTk5osWd4v7kwhbe8smA8XFtWmD",
  "key22": "NPsAkWb7LRvyYa7Ds5biHMQMosxV1F8qnU614ZJV1YUu5yLn7auAmkuibD7YyrRRtQKQtgtGFHdZqJ1RJTvREaE",
  "key23": "5kpMC3xmraCCCbYqkiPpAXXwjaKsKnsPSGPFia7D7gQQEZ8PMPjaPoa52sN9zZswsUEDF6srtkiWxanffzLSnxHR",
  "key24": "2iEyUj1Brr1bcweL2TywkgEHcAn7sRgc5qHWWuSPJ4w9xG2dr1cJQcGVGxN59rZWdrGGGnZmKnhYGTCYdYd1xxnH",
  "key25": "2ynboQ7iP4s4yCgU237U6cu4j8frsNGTLAVBkkshmHERgdoRaQqgb5DiZSfZaNrM8tnPiAzkkHfW1kVx598JKFxh"
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
