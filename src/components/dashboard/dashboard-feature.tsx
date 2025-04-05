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
    "2nECc7bLR5tfqaRxStfwawGw3oi3dqe9JgDNZBFJDT2R2STJCaTTH26iGr5gVqJnu6hm3ccewtBLLEGRVUoGPDUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "249dbE6rfdiXzWJCAANVN6AJjwvFUQ2iFm2Umg2hne2rKEi4Rz83Xe6fKfdtgz6o8uJ265uvamNairgPLJBmHLcE",
  "key1": "2gUcQbMGKWvKRkYwxUFfNEkR3gnBBychtcmcVGGPiTfLvDiKDrEsLcRVuZ9U6PmxGhLX7Fz5YXax5WGcgtdiJHBV",
  "key2": "3yBcpt9purbHwsXteozUZriiVTtH7aHhKm5pEZbrcgGjw1a1XKnqPhCT2FnLpLZSVUrcrMgXbeKTN1hGiFAyyK6j",
  "key3": "58aJVdupnCCdBaQ5ioYyKFWdErcSMYEE3BfzjSshEHuWCbiUwXbXGd1bYiewMKpL9iQoAjaz9pSRXHR5gzJUaf8C",
  "key4": "5gk3ztNjnv2BYGazvWqmCBYcC5b4NEGJY4dx6U2pi7fg8so7qZY62JDNp9VLDqs3VZZuBLutCghMbUZKon6qeLBX",
  "key5": "jfEMvjGhHPTovcPTt78N6r1UnaCujaHDG7x53eTayEXX4b6ntupkdVBJhRtqNTMvbj22oKoKj95k3e3NFGTU3hH",
  "key6": "39A3SChRVGNTZUm1s41HRHB5yiK9k43pKifP4yhgWyK8kdcDKqFpmJbwzjLrmSSZmoUyRBhfPbGGswFVNo1DsFPb",
  "key7": "259A4aByxntwvDn1TtsoVLzQrHRDfP6LrNPESSzBsorbMEV1cPSPq8QCWvaZKTcqEjNV5wCjcFkggGnorMGqUJFu",
  "key8": "u8XKsmgyxZRHEvVAeW2jrg7wH3fTzr7e9BRdcqnRd45M5aXsNc8ZsubHTa6uoXJjywvgnS4ujcTjfszUWQ216zp",
  "key9": "2B9b5V8oKPbJEk8rTGXoj99PdED1Q4naHjvR9ZznWXPFoyE7gL79FBTrU3hBNkuMXDLeCXVxbAotpo4q6jG89hir",
  "key10": "fTBnXqJ8FCiKwmU1i6eEpoRTR2noc28scAbcdYVoRK8or5RpFdPGoAwS14fGL7ssULsNqGkzvVfxtrFb7bNk72x",
  "key11": "3Tj7qpAPv8uyk76U9aVqVzbSCVj5vvjZieFSzAhc6weVhyimudkEvg4sgmXjT3Vdzgze8yXt4bYJWB2YrLVW6Wrt",
  "key12": "3HdNX937LETJr4Te2Xp3KckHAc7M8q5fcgqfDQRyqkaM7UxD7x92fGzAs6dBVZsZjzNPwCFeQJQ1Hz22KADKAJFR",
  "key13": "5L5eGHVr6XXNqur5XBK4SCQXfQCDmaQx77EPVykhuq3gTDWqq2RfZ5ZSHeS79jinXS94bhbPV7rsdg2croAaVANm",
  "key14": "3h1jVHku5yei5izH6kVXKPLvZnYXPrDyjxYPuToyEFfiazhDQg9AdrvtRcRmohSjU4MT6q2aDaHosiYPQXac9uRX",
  "key15": "35w7HxX2MgpETRZ7JcYQtH8aKAVjKaqL2t1Atm4exVirpxRp5MBWKpPCtroERYz4CTCtCYA7EtFvRdusX66KDb9s",
  "key16": "3hBoS3cayNPNLgnxtUrUJWQbEKvkYnoJsW5yCGoQdiTzxBqDn6Gt7m9JoPXYdLXNjtjhxcDBpvgfr6LthmoSbv8u",
  "key17": "652n3q474rvhfnFFPox9gRPwZrEUn78zG3hV2SuYQP4JrSA8UEe2m8e4s5dNHYiveyXNPTKA1piU2ZQkey4AZwcw",
  "key18": "5una1nbVFfozzkax7X3UeBMYu3AsYo6zrNz2eMRES7ZaaSmGn8jfZEsicBHyLCRVMfgHFtsD6Qd7HHecHWf8MR4J",
  "key19": "3mg8pNV7VEdN7K8GuGhRRUfyCWtsSABNB7SYyGoLu91Kw3NDjNwba3aeSqfTkHzy76iZWkQsqF5xRWNrxKMczfbc",
  "key20": "4BmHc9xMvQfmWsGoXDtik8d2hsJbbMWjWU3MrWtGdePc7KdP22JzGbD6CQfQbjCPn3PKjn3zUDnf76m1nobbALRd",
  "key21": "4JEeRNQb7mveUMnXrHKg2Ls5DvfrvCrdMVNCGoJ9j4N5mDoeFbHkinQ9TaXphNsh2JWDnocqi563wnGt78GE7GsQ",
  "key22": "3R2ewh7UQ7JMdRjvZFCKoYDZMYUkunugxd3GiDnDvj26a4dN5me2Av718wzNxgc2c9yEwCKmghwenncsmhfSpeMq",
  "key23": "5UTyE7u8EBnADYkTxr3c8DR4836L3QngtheNeRUGdrkeAzfNyNT63iQzk1HLNomne6iZ1hSfRRkQTCXVXfrk8dDv",
  "key24": "4BzZ81RhwNLNGJxniTiQrpzUf8UtCbBb3vSyZADZqKhSLNdcotuY15wwDw4bgjQcoVEUyv3tLpmxYXnveeKb3ZJb",
  "key25": "34UbiVZvJqh2Z5bDCfJs6RHhTtoVnRRq2XRjQZMpaUzLh1UGHzcmUJy1nCcAJFSVT6MVr6XezV6LVmsxnsE4nK3d",
  "key26": "k7WQUT9UjCS1fL9MuDEcE893uivXRKmM96bcBn4usGjNjiapLxitGBNWh9Cq36aF1pGweDuZ2a6vU6B4NapWcRx",
  "key27": "2uun3kYNVqGSL6TSyqPEf2Eumw2MiXa8yBJoRSqf9qYHxbPEhKbi2dCySBYGgnM4fFyf4F7zChunu3smifc6gyuV"
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
