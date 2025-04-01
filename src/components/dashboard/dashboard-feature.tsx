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
    "5n4fe9g1R3skfKSN4QMHVmQEmPdowymbs5V89nX1aUQ1ibpAsL1xjzA1nmrJkeztD7T4CLBbr2pbLQymdanhrYM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ajoDke1EvMo1Fn5Yzdbwumz4XFdpSVcrmSiJ2rLgwm6nr3w6RDbfo6PSR26af5isekonsiFrVxbrtvMTpAdxzC",
  "key1": "XFWeJEctbSVh9ma6ZoPagSs5hSQcDDJ4CaKTgzqT6uSJUdgavTsMhUL76r6TKZ3u8vbwsprNiyPYXeerNSvyViS",
  "key2": "SXtx2sxSWukwqxXNixeMEVDmdmtSsLp5ogFbsUKfZqgPgX57dZ8KodhmZK3rtq9SkTDHd3BgL2Are4y9X5dCURZ",
  "key3": "CEzwRQwpnTh1jrf2pgDZqsEdBc6BAJWE1rDTyoKBR9utUXssKKXkSKE2GxupXKGrobLFZVuqnWuWKyN8xuE5QQ8",
  "key4": "46NGBRqwa1LUqdm35cxLWXRwFegJUdCbcPLZ8J9p5vZbsEp6SSWpZZ42TK94Ah4LFMJ5bHMV3yujZaq9t9DmDiE6",
  "key5": "WhVYYyu5kWLK9WaQQkbhkTJcAQuPAamtgSawikKemBagLjepgLmxkFfmhvYUz96k6HVGeWunwuTghj7SFAHZcUm",
  "key6": "2EARt3L8Kp5PNG7FRbieKttVjnSeXgc1X9RWDziLYhaCB6x5YqTKiibRULSLmtBZ6iCYzzyFQubQ8vuTs4dBcAa6",
  "key7": "5YWE9Ytz63C4vtQZk6xDQzY1fsTcCLXhA88qyzgBK324RPVnofeLVUtksptfE3SRKsvMMKfTstLpGL4AhB3zkoNq",
  "key8": "21icRRPyiMEj2AH1FxWEdhdKarUpzBdDWz4iLvETGWdSr75HNqtuRZGndoYvzhoxnrGzpGomfJBJFFZUqt4c1haj",
  "key9": "2bs4K4wWumndtXe1r28V5fAMDpVBZTgrgjTyuU3PEcot8aMF8MFqcbP527hDvKJupTUBrhyWVDis1rqchZEgwGji",
  "key10": "2CDbwvW3GzKDCGLDHXbfpyKuZF39raLpJhgTFDCqDxicKUTt2aLFGjFe2PQoi5SZeCjvbrcF4yBDKycDj7jN1hqq",
  "key11": "61iLcWpiNgzmATyhQyMcz2ZSPFfLyD9YyxK73tBqvuakwAG2RdgiP5X67GhnACMUybDTgP8UJhCA2UNLY43LuY3h",
  "key12": "3hzZgvWkwUdm4mgxL83SYpv9fCKnFGW3opxPd3MurCnMeVMnnGxmL5HHyR2Ya4nLPBDGrnVtQv1k9DBmJBCjDERJ",
  "key13": "4G1tMSyUagWJxaTaRdPTD27uYFUMPYwaAcxdJpxmzbnWrxCy412jA2VgAjxx3CZzDmaZXHK6vfVb2Zk57v9N21qF",
  "key14": "9wbFnWtoGy3BUVLsUDponGKRohunGAKNKBnUPPmu8E1mXN9kjoCJWfitk7shSRUCL2sMKeBzPabUj9v8kkRHCUa",
  "key15": "5uaYzjiNg5N2g1e3t72CmRC2a574CovLxzNVTbmqt8nvMyWAKp7pppmm9xkxUCck2dUXwQcP1YptKnrjYzVTnuhC",
  "key16": "n5BitkCKjKTMeFD4bDJ46Eu9YD2yzPqFB8WbPSkoXmuAGQw1AtnXdWSSKrynSwbPuoDVT2nDhEs8MNX9jp6fE68",
  "key17": "4vghptwHcNy15uTVvs5eX8wrk697zLjPnPDsTT4ZiJBm6Y7FhXywDxUYWTMDP9WPaej3ugRRAtrbmp3i6KspjbgF",
  "key18": "xXwHBq98YJmyh6dbTKJu9DaqTPr9kYuVJMssj8K4sxVHdttophnrTgBZn9NuhzcNxAvWsPHERoqHn4rLAg7q7Lx",
  "key19": "43jS45Te3UVAMZL16J8NPynqnAvCZysG1jTaAA3JVh5GbSwaoLEo9dmYzBM3YjVkfbpJEAU4uMevmAvQb8qVjcoo",
  "key20": "gKR3Wo6vzD8sADBTudzxQsag41mn9dDtMFM5NgnuajEj4jSFd7JNS8AajQ36oAGgmjsoAetvFb5Tb1oTuEs52LV",
  "key21": "7icCJih37QoQd8FCNLSvCroG4VUhPJKSxPC3vbDvp6Vs6Y8xHAopSRHYBpGrTcHh9ZmYPLi4GYQ8dk192oXr2yU",
  "key22": "kXc3gBtSNvowhganPFY6zCxvbZft7vbcJPjKTAfiGeXE7XiPzNa9Z7yMmLpYCB8Srsw8HMqnMG2r5ZgaJ3zwJRM",
  "key23": "2mcmuuQuVefjoGkcEWJCVhQEJHMYWxxUudUy6ZRn6Dg69C5Ap1aPDwFWYheZRqcLctUbwXTA8QK2i3QspQjHVBKe",
  "key24": "3JgJckHnRRfYDTaBRGffJZiCrpc9s7hTRKYXEEQkr2SeRasgQd9ct8tAwNmHrtJ2kx5L5iYQaTvu8Za2sV7oNQ9B",
  "key25": "AmURMh5SBAk47NZFGF21vv7TPi7zn5jCXeq3FngCtRtAfJhYsjPq7wNi5Mc7pNzjydStNUuZm4yNJV9uC7D9wbD",
  "key26": "3TgYCxa4w68snimKMkmindSLpKYdDqJDmMt2b9tJGEPVFgzvD1MgGEobC7DqCNdgyzW9nm3ijyEKqWWj6kZiqhRz",
  "key27": "2Rzmpgyyx58X8n8h54ntu7bviQ6cT7XkCmZuyHizm7mZFq3AzW9MBDaXev16TkBkwY5ygw18TaKyKJGPkKxyZv4Y",
  "key28": "4tECMSikkUhvQ2Wxn4Gmrs4Eg3bYpjS8d8oFLzmYhqHHo2N2yJJ2Gi7tyjF478iHTdeV9jvCwcF3h2MDjSC49z7v",
  "key29": "3fXs5VFXUnbn7fQX6U9F8yD37SJWSm8uA7EkZcV189ZjRiFAgTUETpFAUz8EhjXb9536Uqvnv3JXDgonoGsr7Dba",
  "key30": "2HynLqrt5oFEmJr5VHAcHnyn8SX8wRCrpZRwHo48vQPQrucwkoD8ceEEjfQnvv1zd19D5GWAybpMJyW9KaWYfgSJ",
  "key31": "9zhKMAERnPytouk7cBCQZUkFwpHqfSNpYEdVZSeGbxNUGHqSfZoBY1Rs4ZTiQn5xzevqdtkbYjEDncWCC6DR3Nn"
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
