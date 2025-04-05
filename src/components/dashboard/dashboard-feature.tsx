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
    "4NuUxb9BZzwdif89Auz8eVn9PVbchHNCSpzs1WD4A8W5BJXYsfJZDXs1geXWYvGk8ut4a1P6WEXvksEQsM1GkHvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T7ghi2m7PqN11Cr2un465MBVq6HeELqhV2UpfdMyD9xd4VXEH8rv2btvY1JPXL6oRKeejQVUAGc9xY3qR45z9P2",
  "key1": "4ApFqXzSgazaJXaGyrWgsCTVKab7qUCdfA1W5NxxdAuiKJyjQSJyw2MfSY4653s11MtNj42bEdtHneGzMCGUqigt",
  "key2": "5Cb2s6eucRFuHYBLv4fD5bRzK4w3a66TNUJVVU68xoefEJKhHVr5vgTq2BDatm5oTWg5VmZxLeH6GtyatZ7uBoyx",
  "key3": "4Ei6bpdQPoZvby8G459omn882kBERYyxa44K3nagCJJxaeB2enRpXpr1MKtoAKR7u4BA3adCGoKXusTnoq2jbfgE",
  "key4": "3EQhLhjLxQz7NM1ySVcmeSFMWeC27mwnbuTnT5f6TXWaoY1M1AuJh9nDpzrgjrzLJQ2PHQcXyYcQXdWQGECGroAz",
  "key5": "4pwwR3RVukhxaF76vQo8Wet8ZqGFkg9Sw5ThdDPAoxAm28stoN1YQjWiCaGPCVFBTu9jPDVTedYHPGvLBfVUEUNx",
  "key6": "7ndH2hcquE97QnQEGAvgXZTwx88i9v65xVJeXJokm3DFwA2Mg8oruVSku4ffACpdveBxo3ee6pfUucuNHL6C7oD",
  "key7": "5S7pxvMpyMFygECjdnBd2G1jQSPGpqQf9KKRQDgP1W14S3jZa48SM3p6hDSZBPwK8aLqigF3sMEh3Qcm7VpDZ7AR",
  "key8": "3iJHQahQnDdmYUExbTPjCne6ApexiqeVzH1TUh8D28cwjkRAFrTSZpKcXgMki1qtCdMPChaL5WhWKMSyxzpmceeq",
  "key9": "46ypB6pMheR8z6evGZyw9AjkDy5sRSEv4oj3omzmwovbiyKqPoJLP2r5j4zt9sYZaWLFPdHMrKNLGpo69gCMs5nJ",
  "key10": "au7o94oamChcW8hyiNAg7BMoqdQAd2ZauPhsDFBnifKZEf5n44ghAnAQy4hGwcny7pHPetjLbCgbgdSi1up84nz",
  "key11": "4EzMXu7FFuof33LiC1MEQwxjGeAzzGEm6hWRnngCbBpV9YVqwtpad5Zti1hCPHuQu3UCPW3PEqJRktdYpyBBmkvs",
  "key12": "2yD1ADV4aiBjdxjmQTpDPVMRz7kwbWXEdmNLHMgYt8F6c7FX9SUwGsLUqWFdU1sGFGK6vi9bjwJ1MRqB6Xf5Mche",
  "key13": "262BpV4AXgHqz8nk6ku6o1WJAgsmCnwZLs4hFhBbHNA8ue1Dy73QPUuGXuD4aHgmYYxptB3p1YQgmjApejv1J7tz",
  "key14": "UtrQeFh8jMm7FPDiCtg3XqWDBLHcha81oAQif7F1ZUZjZUtp26scv8CPqr58sTezj7wCTdkNvMdbvdC1izjnyhd",
  "key15": "448aBt5H8zSVJ6sWN7bHeVuFm7dTJsGSBVfWU59rFGAmQ6R3nMET5ZpmDkdNpPimKPPrpKxaMcYfY1FterCgmUFW",
  "key16": "2juqLexgnpovGQT3h6XH2TaVDvzNy6JGLTejBQaCprCQMdY41q2LHboYgxtYPdLR4X6pQgRUN9yKo8ULWrUeKrZb",
  "key17": "r4qu8K2C7wpWqp3Mg34XNhs7uVCLBFDxLgvA2FDXd6j7CYDGqGLCkDFcNHjGbxnHACyAdM7BpfVYGa4QFh2eAsk",
  "key18": "4hdjyNqVHAzsaiQpCKKVQfn17nA9QLAtY28XXYHoQXS9xcfrSacZL3syDcsJWx1swT2fgz26WtcRUchNR181cU9i",
  "key19": "4jncKbaHKZbvoQCLoJEwDCUzdHNf38fdGJzrT1Ct7ke6dMsa6hCHQhoErCXj4Y2EbQsMMxcfGVfhKb9bFXUmokGH",
  "key20": "TbwsaSmFqqXuEkKBBJgcu3xS9X7mNkk8q2Kat38toQ8LYWroavaxxZHyUgHTgKMrVWst9R4pfxwnc6KRaC8hAuN",
  "key21": "2bCCCt2waW3hp2kMcTifJeNc5D5t9fjKB6TikX4vLKKSc5aeRJr25m3mYFL5PEW9mw47vfzYFCcwgVv53c2htqhR",
  "key22": "7ijGBy5j43SGrkUsC5LvWAyumQZmwkDcDTxTu9QNZgD2YudpdNiVRAqbSsSveLQ1D4DPeGcrvoQJvXMpkhz2HH3",
  "key23": "4B1AWHGtcw1RdpwGHNm3y2JzyJAdSwEt7z9dWZRE5BA5fwNRMPviiSFfKSkhrbMmzh48AcDNj2Lm4m8arrAwDEcB",
  "key24": "67ZAY8bY1JR469FEc96b7ADFyWoU4M8YK7s5eZtHZp6QdWxQ7WnhqQErYjHXBtXHQ7r5hTF5ijYdQiDsL82kkJSZ"
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
