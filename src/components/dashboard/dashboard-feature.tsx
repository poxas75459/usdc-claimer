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
    "3JDMC2R3hTNiY6iExcKZSgBK7oj4Brz64zAiBXDudaANvFAyodLBkd9axg83j9baEwUpV1FoqEmUq4rtmZkvwAaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48DRGSLvMETYYcgivWpHM5PRK2xMQP1t5WtX16rt5KxgFV8wtadMmvD28BZYrNiPzVkjxpYNAQ7zfGQipaVfY9tK",
  "key1": "2iZWrpzPcor6y3LmmegBHFFiqxWYAZZiDYQ9nuU28BsDeGhoMW13SvPAb1DUWkUR59ctDzpPE8Gts8Cgm7o2orNh",
  "key2": "KG1duU5mQCWEeuZLtRYWRtATUDbNZSg89wq4SVNQ9JiueejsR3cx3SgYBK68emYQNfN8mTbxk3o2PiviQS4UVzP",
  "key3": "ym2YKdMHGPYb8NiVxVKCT8sdrkewwc9boqdhaxRKSNfVXLHH4g93Hs1FmSPj5fhNgDRaL3KSnKWUmbhd4SJ4Drx",
  "key4": "367cQLxe6GWEPNugGH1LpoGNALytKoAQjU419t3jBNHko9zSu1TXJFEm3k6aGEyMgvyrb5vbXvUK7h1saMCHN5pk",
  "key5": "4QXXUXbLavKV98JV1g2zJ4qK2kx3xW7rQF8q4KP5vsSU2MadYybUPx2ecv22DUhvurbruuEWXgLZq9Za3Jx8qeap",
  "key6": "2g2F7M6rFSMojS5jrF9x5PjH9PBdJBM8C896SuhLHSf3tu8gfdaXSec2AL5DN9xZLGy7eRSUj2Cm4CQo3CXY7AV9",
  "key7": "5ZSxa4f1dN4LRLVXwHktDcxMPss4JK6onMaDD4FCEfNLs9QTxY6XsfLSsaHrRUu2SSku9dof4XabtoUkYP8u1vXP",
  "key8": "5p8ny5tu667DW8dfzgBKiYNegJiuMwv4UetZxCmHzKRcoBaeP3zEiLNQNYTkTFkR8YvQpY1XXBco9HgzYZe2RA8D",
  "key9": "3Pk1fBxAqpB99ag7TAuDmdgA58s1SVa15augXb4wbeBduRpC4vpysHJAeTYKzAqTRoDLJASVAkWF9dqoijmax1BW",
  "key10": "w8NoMQCuNGCrQBSaocLjpeMeB9S8Q2YPmFeGJBzfDpRbXsvFsywJysz8RqdkDtKfUr3ZNxWNCR4dZxnfXDzXn6J",
  "key11": "5fTZs2Lhs8abnrqBDt3fBU4sCgtPMCe6yamZr7vhvEqYMAGxkz4sXR2mcgQUQJxKC6xKzaEay8juxMvxkv4x2Ax2",
  "key12": "47HoQ9iUcRRfc2pbRQpKw22S52Zhqn7s6NywWSbTbeFVccbTH2cKHTYTCbVd3MU1fuKvNkmnZGUQsaFo3gRQQGLY",
  "key13": "2U8nTwVbjSMyAbj5nRMRpnbDaWuopWjYX92nLNFupknCKBdcmDZGFDEWuAtZBnfPwQ3ie97GvCFjLEsEzL94QsYG",
  "key14": "GYq871Dcuijh3i9ZhKHNw5nNuckgFURVxURGPikzSCN7vyieZJgh5w6wfARW69BazAdMsAXMFbj1zR9XNrzZz7g",
  "key15": "2sL2UdVRxwFWmPWnFA4jvxf7tWUH4QbUvUXCNVVgwBt29i2G1NjC8p6ELqi4bcJPPiwQfXo5xV7JPg3KiidWChHb",
  "key16": "5dpxyKAbV6gvQnEvMHP55LgDDAMHC7SbPgKYjk696zSBYJG4NfQ8DBQRKknByBrbtn1ksR8xHo3G3L3G6N4DFWPh",
  "key17": "66G3ULoCnrhVLscV7PtGBSkHEwR5u8UwjPKgXJcnDVB1jwYdCoH1ei6fFTmEHQu2cWcei9CP5esMUTHzMJ5Uyc3U",
  "key18": "3zjCxdJf9pSTRzgQfzBXpJjJNLwuW2zfgsxt6K2fCN9G4W1dwiTkf2bVTVTzdk7mPgWqP8ZVmE2chZbstboNU4jw",
  "key19": "4niTnUbmTq91YBWi3R3MSTwXLbRmb4v7Ks7MCNtE7YFtHKzwkx63dspTVwv5cEp8V3p6JR7Z83YEy37MvQXJZFiS",
  "key20": "35ADf7yFpswwmHbrLrb1ABRSp7Zvmy4xDBUic5MJDKPAkGHbgTmqKXy5wuGyZGrKourdgkkVnmtZ3v5LKtbuu9Qc",
  "key21": "5JmNvsYNvMcUHHPTdqUarcfDhDaHJsojZAxF4dufLnbZS2jkreDPQnKMLd1eTSRmqq5ZND9ctLuAUtzUenQ1wqM8",
  "key22": "3fBu7rHHxYiSjUn3nPKP3ARUGqafqnEofD4rUzVMFVbpQhJsEwjSLCsZutRfudtSmQGsLK4EF1vkXPe572iNqeKe",
  "key23": "DRW6QR3CjpGQ16sc3nhRs2TB3LXoaxMPrW3nM4WicumvmD3YnJxeiNtBVFZPZsEujXisSJdLguqSUag9q5FFcko",
  "key24": "2dzttxLsNByDskxX3qW8NpQ1SQ2DoSMhKTfg8JD1xF3sWRakAQgEb8Udt22VXBZgeGyvkqwXG4QVGxcWfantzCs2",
  "key25": "3tNoccSuUPKzK9zEvAAQek9BrYsnXWdffcKdHw2SAo25dfreRaMRwtUFRWACceqVPnouG4aoCtvS5LWzefQj2WRs",
  "key26": "5hErmca1QK9Xvw3Wv4rUX6g9cwiePc2XJmUZu5C7FDVxcns5hxGv1SsD4himdLRkLKVrUYu2LTYQCb18C8EY7nPM",
  "key27": "4X3wGseui3XvPsG5hAboXAHcspuPXprygHdjbiwtwLRVauMJ8YvoC5PsYM6NxBt8hYfv1Ki7gg2993DkYPmXSZML",
  "key28": "3pWRKyefq7rwvpt22ihTRuRLVgKeoFM7w9LjAaZyicNTgH67GU7nArmkjiNNXjnxRFnJGeMwsRfFLccQfNEppQdF",
  "key29": "2418FgwWYTVeW7v1Q9kuisPSWoHfiq5GQEYEmU1RArguHVvU7XQ8a3BAd6txYLibPqkPpHGsBfENPZhVNwBS6X3Q",
  "key30": "3h5uE3MKM8NVYZCs5g3HDa4gg7sz3ou1hMqumN7BCR6eAwzwRbxemCqqVgytbdgtMuKWTpNJ1diL2vPDV3ykJnpk",
  "key31": "3kiJdMHMgCyoRAf6BWy4g5gWt2MVhPhR5gdMndHJU4Vt5n6bhHY5aLveZmREnyiJqh3vgdUpFi4CYsMuJRHyn41n",
  "key32": "43aAxBqThduoHVnaY38uNZ1FjdZp8jz6uvqQwXvnXzFkxJJmwMDDz6zt6piFvKAoZhJaBfDKcVXPsAwq7Vbf7fkU",
  "key33": "42hJAumpKovLX7XYmARBAivegGMCZb5ePvLNuCx1ALn2aGBn72zBC6TvcaMDA5ss664vWXMpMNbWe5j6JRTY2614",
  "key34": "ucWgknNeLNpULVBSXNU4fKrCqzzH59kh81CCijN88KGfDLoS81yQL9qbmj7r29Armu8ju23kHcTcSCKEAdfm1iA"
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
