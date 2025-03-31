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
    "42Gm7LHCDNBSSnQpWEKtLabtiLL1ZLoaVii3RjDAEH8k646qvnohyE97caid5z7t1uuG3sYWptoXnBAgHYfeRnfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tHppQCqmu35DEVfSpJpGiaLkAEieopxAiwzfVZG53j8mHKNzY8UwHfEMdpi8L7Z7z4E3uJdYuf3VPwd8jTXCZDH",
  "key1": "46iZKGusojPzD8SoM8obt6p4jwujMG6nBYwy2CPnzsTU9bci9YPP11SZhY1L2hu1jc9a9B4Jtp7DhassEv7QztFx",
  "key2": "3DLk3VH1hHFDPTHUt1hNnURgbcczmSzgoLuWF3TotjkWDQ7iKefrcwYgCuvtAJMWkEBr4ftJwcfwsQwehzGrMbdt",
  "key3": "3qaCzH946ZvZs61CBap6oTktE2UybhAiVDsLK8nkrqbpscqcSAJV23xFERnuT3oRntDXeogZcf26n5mUk7HEZj8P",
  "key4": "TnZjR89Tfv9ALxeWQLBt7wSA8Py4FkSD8dvxmmgaRSudtmbkFueencQGyu73fWw93PDnVBoBD85qy9t2LrpqU8j",
  "key5": "5qGTYymf2pt1djeyRHXSduwpoFmephhZiNquSGvHhAejo6M9dv7etsEp9mBkWeAq3X4wd1c6kbYYJhJYgFfxXqrG",
  "key6": "Mmafexaq8y1S92KaiNFV2cSGKqsrv4URd2HboAY1UdAJAqNaF3UFZzaGc1GTJkZt8z3f2o17tAa8xdQ41NLz8Ve",
  "key7": "4QemmZaAn2rHzSV3tkv9bK9YfXqEo6cDGZiX1P5b2aThA3B5AUMQnPPqTLaq8euqzyJm7CrF4FWBeqSbWvQEaf37",
  "key8": "47yduTc8t6PtTiLZYBqomf8Tya1PQr921x21bv64UkyV8CB6CWcnz6EFxUUfq484MkvYkUGRA7JaqNbtw5V4AJvr",
  "key9": "2PFbxdx2Pa4iptr9nCnayKA18oHY841pZVatUPsGrBvE32XVGVohcXJ74papjtL95h8wAzswTXjQ7wDAATdusnZf",
  "key10": "62VHBgWqKLtxvF6Eu2asHZebKeuSoSjakpHBh84BRzyzFYsQ9MMJpd5WQ5RhbLZdPEwyn4nPXphyUuKxWFyL9Syc",
  "key11": "2Ew4P4gBKhm2CTCTG3jCeUtaFtjJ1irk8SVh6MPud4nhRVP6nwtE5dq4WzL7g7VwAGzbocfk2KJEgAzaBMLgbVuD",
  "key12": "49euYZ81XPiL7sUjHBMh2trPmVnnfADjmQeahE9ySnP62VT6aKgQVjV9sGfj4W43nmRWVKnrmVGdpzKNb62sErvX",
  "key13": "25Bj2xyMQVaz33CCJGWWADqcei6Rfrf1Mr78wjjmBEo84WCGAevegbqTNfGXGotUxNkLa9DXsUyPveX7xhK377FF",
  "key14": "Veo4VHkPVzNWdatRvBGkXCvfE2HoPa9xjQHThWHw5nnVajHxCsjiVzq2rsk2KdYTEgZ3iYegY4rb57FcEEtQP4K",
  "key15": "2M8XYwp9pZwAQ4wR1NTKdeT798A7DdTyNPdDZRh4a23GKYfSh9GFXXbFDadgQr7pK31ViRfbqzGfYSS6wKwsyx2P",
  "key16": "5TDEwESVVdSDxuGqWfhf76BHAmjGtQ5DXwkjQmzPKNTxSytgjSBAz4gLX8ApK5cdwPgyBgSyquyb6CK7wRrXxCy9",
  "key17": "2QSbzUVP5Kau1yEKVtyZPSdC7m1bjPVPQ4rpBdZMTXCFXS7St9pDaDvkJirACMhZU7XdV8aCzrxhttN7ZwGBPmRi",
  "key18": "4V9W5uAJMC5qNv8Ffrzb2MEvNuSVkJFsBUBBXFzXRd4fN6DB52dwft7UuA7ruLziMMrEgaJrZUPUBahKh1RNY7T8",
  "key19": "2X1uZP9VjpjBPgDJCtbEuKY9k38V5ZwHsxLRhENqwxxn5aeKzp7Chjvia4usj8diJvqAAMTAxMvUx6vnnC2Sr6r2",
  "key20": "51pwBG4yiTycjY2EdSqyjR4AK65ZxPGCt6x5EusAWigfFL4GKneJfiQ1remPaKoKYo8tcjmbnhiM6mTxXKU8ZExF",
  "key21": "EMMNGegUrCtUFErZiMf2BkMep4vp8mTB9y4qFyQd4ZGE4i8rXi517De7wdomA9GMCPHpertnSyRw8ccdL2LB8HZ",
  "key22": "5L2B5GxyBUUeKh36c2UfVKN74LUmyFKQwPKVp7UikfbDjQ6XUHUU9QimvK7GpuZa4s5yG8QfjKEKSpiHMLdFHfi2",
  "key23": "3iKw4cELLMVjqUyA9oGLKCyCXXCmCbwXZqDvaNxEzAF6tVfgW8V52SschzvweZyZTGVx2J2ECaPTjY4dkpVmQiXF",
  "key24": "WTYtAyZWoXGeWNGG8eNXdHhZAMRZrnvFeFQKPtbST6hFRPmZnvAXcDU2W3X71qS5XjagPGyjatotmp8C6sJGKh1",
  "key25": "2q3SSHXHv5HQ9JxkpyUs2bMx6zi9Tb3bWEFCCF54xjXy6T5XJ7WXkpQCAx7LgUg6RS289BYXgFPsnDUZcsZhg5Vv",
  "key26": "3qnoAYqK7kb5f1VCQTFC7xCRDYB9LwyaNTW8Ctk6a3io6hqJffBKwrxaMdrBWSFJKzeY8QxckNs7dmTdLWYsRyep",
  "key27": "4F252MkuMwV7CetCANxVbD9YTEyNENrv5JpQfZkiNRsU77J49yNG8oicr3rPhkFWCspRLb9PrBGovaRsFyetEecq",
  "key28": "637cnZHgRjgi3iFbkyAw3r291W6xD4ELY9SQkJZTdyuQLZqeY1vyQELrLz1Ed78eYZKHcu27NyWkypm1Ex3sCTbz",
  "key29": "5JKPRvbAnWLabYpJMs2sYUnLp6jhvsf6QtabkxCA4zyy4b3qRfBGkQEWhpuvnCWjY3WgR6sC9Q3MDK5r4eaNdtL9"
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
