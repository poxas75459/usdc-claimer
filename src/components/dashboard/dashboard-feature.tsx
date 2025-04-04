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
    "2JVBVuS8EWxmYo7gtgppRPdbeRWxgrnYsbK964dXBrEN6rSHob5ktNDRFD9CiH2zZu4YG2DVbFnCGTjAmqnYtCh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BSJ3LJmRFkitBf1urgsz3YqafreGnMjQDdjd6z58sYoM8jCaECY5XgELYdxacxVdh3xA7bcACifeovHz4DqFEsE",
  "key1": "3hMwQzTTcgjL6pJkVBBisoCFFwSZEd1VsyjQFE8VFXdPjPfJKEemVFXB3UQnxuDFPA37oNiiU7EGLaFDyyXq5bNc",
  "key2": "58q153f5sxmRo4Tmt5UHLmVyGWbAChaMDXPocgpjkyHJbCzD4vAkQyHyoxaV5A4vRWVrNCyW1H6523BLSrks7sjF",
  "key3": "4Pfq2zfYayRHj1hAZT8RfjTqkc9BXhogvkRCy9bppuy48rGjXXcxF4woQc68XkLyhnZW1f3mt1iCE1v32d73t4X6",
  "key4": "8FGfixc5xo8ABGFP7WLnMzVQcKEX4XnotLkU17QnmSkqfs9vqQxtrWxZvL3WE6FNwQxuXSXjYFNbw2euqZtjuyg",
  "key5": "4V56fzifwNSRxjXhNut6cpXnjjqXycmxigTHMUCFYTZ1VXPNSTYBPVgosEJPJH5u4AhQQ9bgPUSFegDUeoZLpmwd",
  "key6": "66MaHAtp8sgvJjwGRFD2yrM5cbBZLTPDPNTa2pfEonPqdRajLb8VrXcvcqBFxjaHoon3AurAPQuv9CkG6hPbAkyi",
  "key7": "3ghUu6mQ63Rxyzm6X9RctY97VV24g6Y4rGdHByGEGFoUTPSnKtkEjUbfi4ctJf4v5tLG96nr9dsdyrLtccE6AfbT",
  "key8": "44r2pdAw2ocycDv2DEFcMxJ3EXUW16KFGocRi8w2JvK9RBRDaiqfJ1E1Ck3QU41Dk4jkBjWEbD5FYXEh2Ns39pXi",
  "key9": "mZAtzT3nhSj873VsQegZmTbe1MMis9f45Rvx3XqaAg3Yrh9SpUD2JLfkPkeN4toayr9HjFyUsHMfBN2ZYaobvwU",
  "key10": "3nvCp9XNm1oSuWGt9AKUpxmXyLVP2MENBNaMZQ58XNCvr7JYJCzvj43Kh3tH9L79R8coiFeLhxY4z8sAFV5KhbGF",
  "key11": "3KG444JTWBeQ5PFpSqmQ2k6kcuVsC3aXZ6HENwngHpqUoXYeeti2PpVBT4Yh9b7ocMZBiDdA2cJi95WUcPmfghNj",
  "key12": "4Uiydi4711E8AJiz3Rff8UD9rcAx1r22vZNYepeNv2tcvPmxQLDGPhXrKV5Ly7geJwWEtpZfU1Zr7WZMoJRBYNeR",
  "key13": "3R9NJbYxwhXBQpJukWWtUAZBS7b64NT6cCQzMduMxwigsSqvRnouauyY5sDrXHKGMgfkWZZDzMHBi3U5nGhYgDX4",
  "key14": "4f8dDifCYMW9Khgor6oWEuqHVNfZXqrQAF3SV4GEKMiQGyyafkrN5hmpbTeVoC6pSevdDG3r1BpS6MoednhWAo6H",
  "key15": "4GK1okcfi145pA8h1YdwyXPTFrZ1o1xrqUZAWpEnMNFJGSZPpDWmtxBZu3qG7g73yzKvoEQjrsfSHZNqeD4jaUB1",
  "key16": "2g4ixZniC8qKrYAwj4uC3H6xL6dCVwgxE7AcBNKeqmwg6zK64zabRXH7E6yXzYewBFoeTZf6ThxuoVLEvgcc7e1q",
  "key17": "2F2qxy3c5X6PZ48HAZpbBMSbaXYndNzU7btqS43UzVBwwns3giqMAZEYJAcKaPpV24unxqvQ8ca3JUwPTQoK3DTp",
  "key18": "czvhdNiAhAyDWMHi5Lrf5qCFyHETGswu1r3AfRoogEuC12rQMEiwZMKtkvbBAN6Wf72Ef1UQzkNCyZCGmK6diVv",
  "key19": "5T96mBJgK9TxSYPYjZMYqff6eVW4MP2iUPUXtob57Ct6qhJpExxNSRDFx643Qr4cfkuc5wqsQ8wNTUkE7Ss4CmHj",
  "key20": "3KrbnY8m7QqyfKLtKN6rhXRzLsK1jaWn35mGga5DQPFhSpaTPmXsD3THv4Ri1LuqcQrWBqsCiD5h5bJCMkajQuFT",
  "key21": "3o2nZbo7hiCv1D8CbV1i2Yx3GWK1iUBnQWuFSUjSxyvoYWvvYfSmzReUMcg318SNZ7g6PYSLiPb7b4mSv6kRVT5K",
  "key22": "2z8mrnG2nUdRMsnRro2b26aLVWSgsgVmYN6BnAtJexS72hCAQhaU2aN1ugH9eYF6MrRBhctFSWPmvPPSNtDzdpfy",
  "key23": "5mzannWP1gezY9E4rLgVbqnhMLhF7dMWUQmVYnANY7NAnddiSiN1c3g4anEKCJimm4zDmDHS6KkRMi5FnHQoibUY",
  "key24": "3kQSeVr6ETs9j53JTcX6keQS7yv7hrBecBAUchsEKe6Gwt2m3LaruPmgW9SmrSW6LvxkTepFvZQJDs7W7wmvSSr2",
  "key25": "5q25LomCNHv2ix2Z3NGuzkxxvLXXVqnT4BbxkXFgT9vUbj6BGXjk62CX1wpYD321tH14hsnLBZCyN7hnM9tP731m",
  "key26": "3a57KgEm6AZYwtmfUSbVuiYWSTC7X81ZPzjfNnDiYHKCHQgMfmuoDnoo8yiBFC4zAas1ySTw6DACkWhmAWSXCo92",
  "key27": "59YqiRhEtydkUMMqE5dUk2RHwpVwLHJi2QUpmXNJk4aKn4XaWLmZKnsK3jWoDPGiCmvMb9RoCPGX58oyiZ9fvxHj",
  "key28": "5eS6Xzurkm2jKV7qYNjG7gdJBRZfNXh1GHjCYSf5TZy7XJ7VU4NBJr8mMuHwnhbKWx1T5g2BfxnjT9jaCpWEhgYX",
  "key29": "4wFojkHU22ZNmDUQizWUEJ9p3ogtacotAmjxZGpuA7Me9txFtfKoo13G4gf2oKPcFjbKygK5ZKHEU768jD3Kpmv5",
  "key30": "2SNBEQLgtNKjgAjeUkfJfvYmsPVHcceHFme6p4kJBv3wPFJ79RXn8dAXZiTCFzjKCvCk2i6hrCeted6hhyMoBVyB"
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
