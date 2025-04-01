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
    "3eFEX6E4iXTeKsL3LdYSLRW6GyBofmdLSPzt8k8B4z2t148wWnZWaadgD4kGN44gxvpeNHDxdPH5AS9mvpE8desL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BZ5gpkAhRUggWQjQ5PHyD5MbPxxrHK36ZKZ66JpbcjbVXCbjkLmjN67xhMSiTaj9SnqH38YCcQwgWHz2mS8bJ96",
  "key1": "5mffQEn1DpPgLKcK75bKDHrm6Dvo7duU32qrq27TtdAXwDJXCErdVaQ91deKFPVVt5o8VhmdDcV29Bgrqshc1cGe",
  "key2": "3EW7NynRcyK3muu1EJszQuwcRixrnXXtwPviTdBaHXKD1jjuNVYAdKfTW51qNxvMdXeKanrwdfWVZM9nyXcmzmBE",
  "key3": "35ZnyoTZ3RxHT3FMTFfu6m5FQEC5EC1gTeee4eNjMhFuvCnbS5jDDzHeHpNKXnTiAFuCX338K7aFDkqxWrv1SDwP",
  "key4": "55B7cJXnHrcjR7qie9zk6zs3Bkxx1L96hAHRvNoTX1PM4UGkYLMTK9bV4KciCdsbAXfUbW5By3hZouuLVr1Zhm82",
  "key5": "22CBpVSCKd5eDsrVWfLNk7NXGQue1o9hLBR94j5UEfRogmgG4BzC7RE6JwHgM8Afag18EFp6j3QCzWxGtQWTaWfp",
  "key6": "Xms38bDFDM5rpMU6pRyifUQJS91RUsSn5LjnGaGhdHei9Zwzt99weZAqSRqUoXbH5Cox93R1Z2dK26ZNnQHB7c3",
  "key7": "2aAhEi2a3ajN4JmMeW9yMWRqdyijZvk5BY1b5rKeMXn7jAUpjzYoP25RPj6rFZH7pYVyLu6sgmf5zbNVC2kgGJgv",
  "key8": "58JXcUQ7553ifj548NZ8rc1DvpT7zmgf8kq9ZPeadpEMNsWfMFwXCEtcKSkjq8JUNFqU8zNCQuBfrzkMvmBaBSXH",
  "key9": "3p4w59tGJ9aDVo49UsWoTa8mferu1MdBg9CRGWqrdWzxXsa63uv5FiuWoMBwkyHTMy4rdcDBx3MpMdSBoxym6vMF",
  "key10": "52cTzwHGRAeKQxSFcpc2nFicwmrNaQXVCJw6r3WVPj1sVkYoSYPzNnGXzdvwgW2Ny1JnQ8HNuKP63WdrwZroad19",
  "key11": "27UF4isywLAm79UpBhVR5G4pL72NKCUTPFjNaXjE8ktgE3BYCpm4MTA6g9fnuAY8QbEzs3c8c4LcKMCJBau4KLyZ",
  "key12": "5YBQtEm4djZvQmnahTVJCXGC3Qbb2QXuy4cpjwquwJaTocESshX8WrPdRtmNVHQaCtxLVH3E3wdkSrxS8epPN56b",
  "key13": "3gAWgntYbxR3PGYS4enJttcF6kYswk1pvc9125JgDueHr8MffDDP5LBek17NzXcmoXJSf7rArjRDJEtDP5H17wnd",
  "key14": "4ipr8M3CVEpoaqpjCQFyorxvbZ1PGvXCiyyeiniXiTBEjsx3nw2JjwHtWPBqFgUpxtaEx2bf2NmPwsvopzNF4ahV",
  "key15": "2Rm3rfhCUC8z1XwEtCywNpp1bjajRD9azCLBCyM31z3r1UzxbBtPgaBwMmjcbrJacFNo1JjTNYyfnajxeNGs4Mjq",
  "key16": "36mdTELg5AZy556J8n9HJBbzGMHAjq6bDrbjDde4eHt4QN9LFB6bbAHaH95vBUiVDDv2fFiReYB9YMA4ewxq1c5d",
  "key17": "4DBhU2f2z7jbvS54R6cxsmCdgz4Bi2mpiypLn3hvsBrFZ7QJxjUaSisosMM37RSQpT52B6WcRoMuwDQdN7ZVbaVA",
  "key18": "3NTqmrCccPEczH99qeGCYvv7aff5s9s2wHbZHPwqwg1hLz9Njm1bU77aVswNHAAkC7itKw1odixKLsVasPgpeEft",
  "key19": "4myvAdcu7daXPAcgUVvz3isMRwAqcBxBwmrjXWVn2p8EyvJviaejAVktavSp2LZN7uTFFzDsS6nUQxSR7SJ2u6ZZ",
  "key20": "5H9zqAuarb9nHxVzyTDUWPDU5fXAsh9xccR2PLetANwqzSPskBggVJfgcQ2JNEmMoCAzTBZuStV39YZh73NoGvpt",
  "key21": "xShPazRS4TfC2HRauP888EdPU58TS7dnNE6YSbXSNurSdBbrqz92wtkCZKRgY9H7rFeco6aR8vL2B4r2RNXKrqt",
  "key22": "3Q7AY4GJJJFdupqemYK5dDmUGvzMn53pHwLp4jd6YC6VmYphQmNu6Qw2EM8niWKBKEEZc1AjwmKE1UHHng2j8EC5",
  "key23": "39MBmD3Rjwh4jjAjhG7ffKnQsV5W1ej9UDkUnf1aqmcnqkHFVTx255hCC6ZwHFKJZ7WyyEKa4EeBgTMDEMQ8EHU3",
  "key24": "67oeatPL3dbSimigxwtsj26jAMRBUm1MFQgdz8FJDfVQTHoVTpM8vdZpcH7LsikJUJijw1aQq7DUmTukrxT5VQRb",
  "key25": "3zstmBKG8aep7L1vDK5WuoSEVsDRgs4GhQb6cy2J7PmnjAo9PZ3BFYTnxQCiP2nB8UXwTvDSn2wNoreh5YT8Md9s",
  "key26": "4cMWN85encX3Uhpu7hcp1y9vzcQfhvjTCx1BkJApAHweVY4hhNfXkqLwzJUJJwnaXPo6Y9kHqywUhi2wstfrCzeY",
  "key27": "THjCUoWfguLMMGMh1cXAFfw3GEZ8u4KMfz4cSQEyjNKw4v11e3r2RJThofMKMP8FGJjGswJNmBQ6G3SBi5fWjGw"
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
