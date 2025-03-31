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
    "TugA8hV9ivyzwZjYzLes5zcEzhMw9YnwuxvFG2RmrtGPQ7xTDy4CRHLRxcE7XLHW1SGM8xNNpvX4r4Fk8FsjfLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R8LhAxU6GVJtBwb9YTAHR8Skt7bLXnWDchhpECPisSNmdiTBhB3xCiRzzGG9vn7FUkN3wNVdCsCMuwcwTtvqhLa",
  "key1": "42RZJGAafbwuw7bLMFkZHwHDTUsRAMBx9kPEjpHRv3LBR8U2Q1663YHdrecNWGXG3e1HCmXJjGWZ5pe8Xx723iZG",
  "key2": "UHLv6hgBYUFfR3Jiu3A8xoniScHTcHnU4PBUph847rW7ChFPztXT4UotwWdiBEwJUAdv5wR2xsj2znXyFPLNTL1",
  "key3": "2hvZLV2qf1YbCyndpa15MD3X3irMHSd1VPPcxgD9evSGHuz8kG5MpXJ1Z76B7SCovAZmqJ7ErHHSK6Qm65haNSfB",
  "key4": "5FALjmMpjWjZ5uZUkcaV6UgqxUira82MA9Goe7oJxd7Q8RVk229sWRoBQkLhw92vh2buNbEba2jYGAucYsn8Cdv4",
  "key5": "4PnFqmwuCHteFzJncLT1k2LeascFzd6nP5hpJVS7jaJCCFesSaPzVDZGpCWipmLALTYtz5No86bsBq255sv4jgZy",
  "key6": "2Jjy1PcwzgfQpvePrrA6K4GWdsvfXXPM7M89TcBBmBt8W27QxHw2R3wnBz4ehVf931qoozgMyAbJCh3nKPtQMSPX",
  "key7": "EVLq9t4hcQuzmzLjECyqypE81Az87paY1bLLseRxJpKPTa9Uw9yRgc7XbkjCeNMfCz37kmnGQKoN2xvbQjjcDUM",
  "key8": "4f1hsQCnmAemPCbfTHehbH3L9uYtzN9fR4mqPRB4sXGLAro97JJxWrMyfovVoSUMvjtPuabgVhQvG6JzvFA2vPKX",
  "key9": "ZGCob9Tek8kyCGA2KU2HRWWdVh2radUEmVHDCb5CUiy5hw98ysz3mgfEhjW5zN1Dy3UsnP7XWEcCeHVu9nVBAeN",
  "key10": "3KHP3AtC2HkLdbDVqb6WmsaB89AvuUzx7LHGveASFdTQu3DEG2wyW5nt3bqb2D1BkbgJtDZiLRWDTvjWgiQqaKEi",
  "key11": "2GoWiW1TKV6tChVcVRi78w4CvtpYdbRDBzrVuWqzGBoePbmscKa8rGvVjyqcDLth66ERGbyjevsUSojogUFfi8i7",
  "key12": "3gc9y25sTLMKyBCwGmrYqCV9sjBUejCHhWnudZMvwttJ7LNBKM56HFNhyGuSpoioxgVCD1rWbaA8BTB4rLqwWRwZ",
  "key13": "a7sFCiZJduRAQpr8YWaAhy3QtEKV8gvHBMHsFyPDj6YezM8ZPkEA5h3p9kZt9oLdi1QnUsbL56bmqWQWDCJHXaQ",
  "key14": "2du43iQWNigCJANaruxfRNA9JiPC6an3fMyzcmcLVBG4JESrhTfdRxBX9Tdd6xkNQTZ4e6zKx5iAfEGegkkCz3r5",
  "key15": "rhCKjq8Z9KzR8hnHdKQPrwReHxWPWUSajunCYEwLXbc43xHuPVKif8HFbCzAAHNpZo6cos4onyBRaA3NoGFctfb",
  "key16": "2wrvk4RuYZk9esahts1RhAXWaNkk6zQKYSrt8Ds4KouS7TbrHvuWhhYqLT89N2a2aj7Qf3ZtjEKVzEipunHFRohu",
  "key17": "2w9bCJmGxLwtAc7Q67ssDeMgHso3gCeHynfE88JX5vCF62Uh5ZJWRgZxRVa1nqsMrwufESdrARNypaBUSmq548Vw",
  "key18": "3mh1fZAECtJH2ZWsPwpb3aSy3W5hxyVybmADkb7vQ7E1qpApZfXLkeGap1Z2XhN5ERY1m1Pk396fbtqttN4HaPv3",
  "key19": "38rXR4FcvrRr6qwaHQee8CdV3po94qS2N8abn73FNhhNXnHdJaAHFCzCxxKMMPRAyqbF36mQBNHnixWGnR6qjpxp",
  "key20": "N7dTGCwqQYfXu7BoK6ZwSRH2KJPetWG1iAQFcpe9vBgXy2NdjSFRdLT7m8hegNco92LT68DXBKzt9qPCA9KFKiG",
  "key21": "61Sq8HhDLyTMELD9KRYxPggeinoLJ25MakKyXtUpgzVugu77hnLxCL5e9qpuChcW1Mfrt5oo3rAcpPqoSVeJs1Kr",
  "key22": "8X2UhXWEPvTPu6FgFbLDACxmzznCJAcJavijC5Qn1Qwk32xz6aViobkjTXvzKM1Ei35ymV9XbCdPWj58wmddsvD",
  "key23": "jUbLnZ9JEKvyYoo9cUHhTDs7rByZibZsaxS9UTJCF8ks4HuJJ7UuRvsJWf92YchtPhWnUTbXqq1epKCfnpr1xFB",
  "key24": "3yW7HWtFFc2hUBJSGQAgY9mzbNAtVnNh5mb1RsqUbdkg2jdPNm5U7NMZmqhyaqJdrJK9MBF7pPaaRvtLbSAbbLgo",
  "key25": "4nAUtZTU6p8rsNPxAGKiyLdQ2W8mf7H343GKPUXqFyouVgETth5arRzyMfSeVYmeYionzJtAnzUGPdQz1B86hYQt",
  "key26": "2wynh3fhy5FV9HP3MSvccuHdLzSkThVHh6dBVBoHPrW2UhX2GJGMdqepMFjWieuGtLHJz6kDrq3QSYY4GcSFjD4n",
  "key27": "4nJsgxzGNsB5vKxNSon1VNmZXL8pdJ7owUd9diqUg5fg8zU5vxwh2g8bZrPX8PqY1UGUtqcnBoLCG8Zqb7pC8md8"
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
