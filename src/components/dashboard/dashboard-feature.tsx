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
    "3eHXqJb7C7zpz9b86NdGwRyo1fPsRGHispaVeRUTB2t92d2e14b2FhkdvE4pGcRuMtRgsD8Wff8u47mPfPwycW1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nhScT6jPHR4QvmQnd7LcNZShao3WqYUPNFNtoM7XiW5AtNQjsW5VmvBdHALkBGMWbHteKkTKkFi2LryH4yqaDcJ",
  "key1": "3wNnxwhP75U8FvvsSrpz7NbswLEybRYWwgMGt8DjNb33Zs5fZQSs1BKPQFjQQmwKjtfaHHBtzLZyAUQ92x2Akit3",
  "key2": "3fE7uHkLQKhr2d91h6iPbRsk89T5TcPmh1zoK4aR4yBQEudRT8V8qUSjrHDgqxbh7gtjYBaJNbrFTaX9LMZAroFB",
  "key3": "21iJPTAXWZMvz8wbEeUxNXsrgzGYhr4ipdsC71KqBv1j2tAq9bYLVFf5ddm9z2EjuJrkCHiDafhVb7ogPiSqhP65",
  "key4": "5tTmr7Gv7BdRKsCMRLRRFofAxY25FhEa7qeCYKYxemoE1kFn5ULBJ5EF6nn7KP5eUarDE1ucjo8iBW9z51VGMPfT",
  "key5": "26Y5BUX9bUsHzSvgHGQ3QF2DAjJU77BopZoQ4tVmyqR3dLgDugQE2u6FJqzdvRr1Uj9ABQPdNFhsxaNQkVMKroaS",
  "key6": "5Awq8hZETsVtL43WcU5CiiPFyezQvtPn2Lk43UfcBkBziyco5nmfWYyAz7Usf6Dwe7ZcyEEjMtu16EAyPMvLsSJn",
  "key7": "ScMUXpqyWVM24iWa9hSzTpctqMmz4GXR96jgV9oeigD9i18wShQpajARPojXw9DT2LTe3XjVH8ZgnccL99nZFTV",
  "key8": "561m6sqefJV4r7iXbUpc3cErByuAJxZNnarZspW9iNN39g7ADwJAPdptNx1WqQ741ovug3kr7kBW4CpXhjpaSmjv",
  "key9": "3jYWVmZFADjC65rpNXpv78dyqpD243qY24GwXyDA3zzhuYYqXiRcpBzp2zbsHpQbPEYn8PpURQYoKMmgPgVM2jzc",
  "key10": "2DhbYsX94rpfTa7zRmjruktjgDgKzwKj47yyRz63GVEsCHCJi5GGLbnPdztHRYrEd1hFjUJbNmLP877ayXVHfpCC",
  "key11": "26wyVUF4dLVnfww9vKhpxqEoorEK4GEmNAruAYhEjvDHn7kHEEc1mEt8cKDETxjJzUtMZ7vqU9ZEDjKHn6hmkRWa",
  "key12": "3UWW9XM8UtQCg9KnAf6BQJgxTawHEumpBbdpxETtko6ZnsvmSFi4dMoyXSCChBTdkogRnZ8g8wVZfxYyFvHQAwKe",
  "key13": "58RtFJZ5zTfUxsu3mbNopENVhVWoXMa75wHRUKKAicz9YTPhy49hZEuZuw414wsKk4a9LcYbSgbDSY8nnm7gQYNJ",
  "key14": "2TX5NMFcy5E49nVrPBcQ9cD1Dm5g5AnQkA8rEf8KH1h8gk7GvrXDT9w6eyEd4LWBioQu6Ge4nJgo8FimYVwqmYHg",
  "key15": "44MYULcnBhuWjsVXqbzaFMmMRCaNqhrf9MmzHgxQCqRRYzki1QZ4SrKh8zDsSs5SPZQYQFhkLX6F6KmYtbVZXzQa",
  "key16": "4xBPf7EHdnLa3NRD3aG7dgctFeu76g5aZohPGQDxyhScfVboTDmkH9qaLXVtENaoLYDiXDoGhozogsy1rzpQkzjY",
  "key17": "1MJo9oaqMF6WHMbG9gaGzRf2rhjM2cwkJnEcMBmhwZPWXXNseWzBeRJ92TXwhmPV9hEd5hjyU5rqXr4pSmJK1ad",
  "key18": "4vbS7ANtZYfTiVpc5XrVJU255XtAqiFPFjB9TwyietXGYnKnYmzvS617D35TERuhLTZr1jKNDNVfZT85txqcCJBZ",
  "key19": "2YcVuh9TYb8LzpEVTZKDL1xykMMNnwk3kuG8PNrbwGKEPzPoBXaZLyQdnJbDYrFQYJNAP62CghbnwUnitJTb7XM5",
  "key20": "46GiVSzYuLtKtJFD79w5fz4g4rFzi4hMyyVJBogdguBjN5hxcLAz9DUCiuWNbayrZ24MciWBoY4xBgUkrDJGjDE2",
  "key21": "4j2K22GGbA916jaMzNKXxWHjH2t7JFEe9EXVUE521VDpN6N1BmNDEYNveLSJw6NXhFtH8vp6HpNaFrACFNdGg4F1",
  "key22": "2tXgUkGc849zQ3w92QkDRrCzvSDAs1yiGdzdoV17uD3CuNGp9vc7T6dRxFhLMMqrLyR2ypY7xwGe3SUJ87QshBEy",
  "key23": "5Swt6TwvQ89imwCQG4cwxAbEdc4vwo1BPMWxvt9Xiit7kcoqpcwbZfSEVkoaShguss3B4ewRtSx1cjxQDVP65J8H",
  "key24": "5HUPSqaS1Xed8Ce3LoPyJAJEJ7CrW7KiMoM2m3ENmwppaMTHABEh9JRk5otb1E4G38gdjRhc3sovRbPLqWYE8Phg",
  "key25": "297h4WAonSshsGMxGFQAWaoK7RYz9AAQXrzM6ANpFaMepTqS9Hwbgt7GzmPe6dETNn7Ay2kY7S1spBH1oxWtgrk3",
  "key26": "61ZicwUFJEiu6d9JkDKfTNYMVnx1SUK7dAkVJc95ADbBghepwTXgytFEs7qgRDgpaDRLnNtmbJzCBHfPAB1jmqj",
  "key27": "5gPVC8XVHBKsQtBvW95EJnvyQm2FgLQ444QB2rCLDxyXKR8Ugqea9gLd1YmwLT2VzxgEYwq9sir4gMPgYh6w7epi",
  "key28": "3gzxnvKDn9NW9pGPHpDMnJMKEPsxGL5McKYippV55zgG4GnH84bm5hXkpfYusnqibQnAxZsVbbT6XQeLshf5TeL6",
  "key29": "22S1PbxsEVtNvJuJCh5MBDQfqp44mYRZ3FUK4asMAeRtj8rMZxuxe9Gw78xVcPjvqLxrE6GyJybm8uqnzjyuh7zn",
  "key30": "3pv8vzbGrGQKUAUFGcYa1dMg1MPsxKvANxM6i8jRcjHeJAw9qSFvXwB92ZrhFYj7fguCV22dNYXNQhUmZkjy1Qq",
  "key31": "2rK5SyewzySBJ18cqtMSpHAG48kgU1TkpcQ2AvvxpTkXxew6JEAoZUrc6WXaBrEn1z3B5B42AStJQ2Lm3BTgEoo6",
  "key32": "4ahJfVKqqW6EnoZJqSymcm9aikEsAqB4prDk2EUaeF5RP1pmfFYFceM1KSx1nd3UAt8YYdw6QwRP1Ydyv4KQ8meX",
  "key33": "22hCB3ZdXS95LLH8f8pwsFcvhZfPmxRCFY8T1heES9iEJSjc5gaje7Ru31CUAuUyJrMVD2PHZkwTTLXC6gbWErV3",
  "key34": "djLkU2f4yrDAsFZ4b6bMJQeEP4w7MJ6UxjLnKZiPrdo4PhS3wTXr8RLQ6D7egNMkNkzn7hRbuQf5FE57aLNgZv8",
  "key35": "3ru8sjSW8K2VZyyv63BirxpApmfvXofacVbwyWE13N9HQiZ7vBe8EcrqQVq5ABPr1R1C6Bd373j9EQWR3cHowsgN",
  "key36": "63gY1Qgy3RyEd6HAsxWvfQKhsQ4EZUGsqUiZ9ifMfsaQYtG8yEFBSEwz2gGyv5c3NbwQHRGmWhhcWUTK6i4ePi1c",
  "key37": "2BcLoPLnv5njWUJMDsLXpzGAbuj3zXHKynsrP7dv77p6K93JcYv3VohQpe4TCzxJ6iLy1sQmFdBN9hGxn2BwEUCo",
  "key38": "4cUDTqSiDLaQQGKtuUB4Kxk2KJVpEa4vFCL8dy3UHDzENp3TQPDfLLoXqvZwnSbk6tWG6LpoinEn3Vd57eLkRKTE",
  "key39": "3onbxHUSMGGKhab4wvxw5Jo2EVTVyJni7X3saYQa4b4B7oH4e6zLfA79JHL9kKeAwFFehKLFLUonSpNSpG5PTos",
  "key40": "57MSyByxgSE2XWqoAnE2dTjeKMqSpVY1Y1AmTwMmAFT18iXGxsrR1wqJQYvxyHzS5t3D3BgrEUaKYXdtrVbEAiVG",
  "key41": "4aLmaE8GAqawbHFUSUWgnQ3eFBvJW6RavTn6puquMd1DL7fXzUCWz1zcVKpvbp4TpAVUJQNZHBtuAyjbmzyd4JR3",
  "key42": "4adZvLyVpHKyYXVdUxoRRsxTa5GCzrWMdVfF4WUhpwMY6wPekKwc93X6gr2eCuy8CJuTQr12hsN3zNH3WNWS8cpM",
  "key43": "CMUofYRcFEAfUkPyLPyHJxXjTKw9jvP8JmEUzdahhfbJStdfoM3PHK7HMbWYKYxMwErnydFNppZYiojK5JUtfJm"
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
