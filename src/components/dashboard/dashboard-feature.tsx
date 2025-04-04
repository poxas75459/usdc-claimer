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
    "u4k8k9ayHGvix5PxeiCwaAFWEmpSWTfK3oPsJ4kQTMT8MaiKgHsYAkeYJh5xXaDY8ANkHMpmvmwphLRETkMAnRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rBU9HCsP7pLi3n9nMGVHFfk4mBPRdnAm1o2VXYDCYHSvdsevttt8VtXP3BWurhk3EnULxaBQqNA4igxQf5ZqHK2",
  "key1": "W4HhCC4ZR2qRktVfDEG7EbdFSrNA4GoHXBDB6iGKQFGVLkPua6UJmWtZbNwEWzpafEof9pXExivNtpAzrb5nwHM",
  "key2": "2mzx6M8sTi3cgVY3qDgib4jBR5Pa8ip9uQpNUQLXfPamiww6DaPVUovEV8oRXC4jgZYKE8C3QLdY7kQ6NjUYAgvw",
  "key3": "nHR32dBe3GtcHc3ncJ5XgEcUjztEthSVnL6AFp5o1SfUJPkxL6TvWpzozpfQSoro1QBq9W7QAjzvPWSEfxEpZym",
  "key4": "8sNFSUrBtPUV7gzvRTGFvqUtCd9vmEzrdWvfTTS5g2vxLApDtyjkccBVSWsXrDMyEo7s786jW5ydpSN2RSYW2DQ",
  "key5": "LUm49J1BFo3hnMRz48BKMDtQ3yKtvYq32YBwV5SdbWfzdv7Z7qAUHzknpWLZhieTiQYpfRD88q5UVvD1ZZyoJcG",
  "key6": "5VqE5MWVxwYMdvwz4dCauLqaAYqUukUeVDjDVw3akZGJQWJPwE3UrDSaeKy7GL9fEfcDDJn3rD4YFJTTNt9AMJgz",
  "key7": "5cdc1YTtCRR87miBRsaPSA3NEXaRj21x8j6h5SnFe82VKQLSjk49qePm9gESFgDKU4J5gXsfCnWKrsxiDqiYH36j",
  "key8": "2sjkZg6aNcVEmrvrGAgyWAAuqHgXog4RJ3UCmrDPcvfX84ztG1dx3pUeYJ6ks7LK4QK2pZnb4WB8zjE7JXufp3aX",
  "key9": "5GuNNZ8qwKkxswtzT7U26YDJoWmYcXzE3y6TQkdDZvxrNfjKmLWbTiL6uZLU5NMihjLgz8Zp2GeThankWAEVJVxr",
  "key10": "2UXCBzBDZXoiW3i3PsQk7QoeVxSGCupA3Y4UDeGQFU8oZDjxCXPZXDyNo9wFtfFUPFdpBVsEHab9bD3YC9HyCkoJ",
  "key11": "5JwrZuZ3gyiVQN6YwGdfxppJvPqns8ewGZKAx5Le7h1JdvCjSRK8EYAb7PR2R6SSLvDoorCDQLJ4in2E72zKhZur",
  "key12": "2hj34ZhR1Ca7hRBmgDXhvDquYZoduQAYsuZkyb7HeSDshKpAH1SuRL7Z8LDWwVkgrDesQ8pdYFt49fL7UJQANLjN",
  "key13": "gJB1puNBPYThZPGwGFmTdjhfFxYcQcKwQWCggtJYYF9gmMgj3E2sVcN5bEFQYDD3mpmM6ijHQ4wJc8jWhN7uVeS",
  "key14": "5yjYe4DedyFkmXvmbhG3RkWy9MAAJU4336ZRk8iJUAhvxjznGoQBmXXbdb1dzUsV1E246oCv6oua2GwcLDq1pirn",
  "key15": "5YdDsRpsp8d7MpfjHTw18educXZDnCQT2U5ujkeyQK8hkq6cGwNuR5asEPmr3Kqm1Yk7sfnP4SAKgq5K7go39Ggp",
  "key16": "5PjyqVyN9qWXGVTvBL5vijUqADw7EinboG93re2NgdmXQj15tVk4i64mu2msLQFytVfJH1rbpLyzSspBvJpX22Hi",
  "key17": "3bB3dNXxVLKstP5exHdLvgnAiGwcUVdVAwmDjsNTxpM36vDbRCx4c45YsyuFnaXcFVsuhYqj48bMxdomitHTgK51",
  "key18": "brZspYSQ7FhrmTG2fBWBBjDYpaZdwZR831giaQrkF5zzSvYhZa6a98ZXTsFHpW1eiUbUgphmJHU6DKf8BeLhC6K",
  "key19": "2Xdu6tzgRQt7QduCjCS3cWjsFNGedXneGdK1T1QohAniUeKzY4LXhsTW4SuwaKddV52ynxbkdoT2V8rwN8WzUfGT",
  "key20": "2b4cd826CbshzPCbEHpCJ7dkefqfkusosoAh9BzYDxSCFaDf3UcXXjigyJBYAK8HZYPyobxxCNZSNpYeWPm8vgtB",
  "key21": "2SaagC4b1p3qx55dGUxNNDCMGAbT46U4p7kPSRQNFarRgiTPo69bXNy1WkA58UMve9KYQ3Ra5GfhLbCHF3MBXDQx",
  "key22": "2HHXDwZNSNdh6Da5xdewy35NmhGneRJCu7urrXvgk68NtVs3bpzW19XcMvJpN5hKM9weBHccrnCf2Jtzk23MctQk",
  "key23": "4Cb1wPpYUqFeaqM3zWpPkw1H9xLSjP6hHBDkDzh1JUpCiRsqAJfVQHHFtBt7UFD5e3FZoAXzgdua3ek2v77dMcJb",
  "key24": "BtAnJQA2r2tRZYRwurUQiqfUwQ6Hg1vvapzbQAoWxjRWmdrkPQjG5ovwqm4aTVXPx9nj91oWT35gx8MwpBYSw8f",
  "key25": "5oRsYyEUvVNX9WksUioYVXGW5ux3HWQ4m6nuEthcYHimZGcmH3WTpMoXFEPcCTgNaQ7dh4pjiSBwAxZd9TmEr48j",
  "key26": "NNa9KkjTZTwTdT6M7S68qM4nuepxkm5Be9a3cBBbXpuFDApRwgD8VRRph6NJEMVBqvwqoYv46gU7d69mtg5n45g",
  "key27": "3gxzqEeRqDTsTvPM2ENQNeWAJax4yqdiAskaG4jvB1VcNg2gzf8EdLhcCofSRvS6Fb2UaNDE2TkG5R4DpCSxpNjt",
  "key28": "4nJs678W3jmEaKRJEqsZHswdC26iB2PgUpkA9Ec6EyHTzYjFzR448wMgRnYtTdqtm9cAScoYsuSx6KhvkNsTecrM",
  "key29": "2QjVU3faUgpzrYVRkJh9cKpAdbQCMs3WzqGcLcMYmXa7yomcPihxrfSqjsFdbjjnRCN1wrxBMkQ3NStb6Y8e9SFU",
  "key30": "3DvSiohWz7xYc38EK7BuXDCEu5kTDGTK4cMM24riijU4Pe2Tnsq3WwgEnmiNDPjFVSa6HGKeLXixaGf9QJwXsDVR",
  "key31": "UL5hUwVXVRaM8zmrFxLNdNnrGgXHLctg2Hvim6iWWtCEVZQnyPyXwP7zVZpz3Ha72x6DG3nYHkTbh4kUjsYjWDS",
  "key32": "3ybCLN8kdVC7hFPrD96EzterYnj6n1yQyURREuPGKERsA5veXCKqvsVzXtBmcTXGkrVCoWMXEiDMmtZuNRVU8RzJ"
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
