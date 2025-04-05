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
    "2JMpXD51NKRTBAZL6WWs1hbJVUNBSXhsxvgHNSCpe5CbhZnNqF5phnD2zqF6uLAnbQXhBbGQx2UkHCbHHY1DVTJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jmZoEy3rmXtfvAxg4Pbz2Qo3rnu3KvpBqPa1E2AzQPMGmmh3qT7zaV7kQ9h1FUJXmzSe5L3Hsw3Y5MGRrjt6MU1",
  "key1": "25xHG1GaS1WsoQX8n9cxemmDs9xdyqCr1csMdTTzp61Yw6BXUGrasSWWsZqSj2opUvKwoAFmr2ZSAhM7FmnSopRQ",
  "key2": "5u6VWB125nGPGd8HVRmzpmoFG43CVEQ9cBi2Z3kmmTbKt9MEuCxDAtxurnZbUsE4qLZjSVkHZ6xrKjW8KtBZuzdn",
  "key3": "5Dqkke9TGoEACPEUwin3XT9mmjU99evbgtg1uNXf734DVxw93BczF4t4FAVAT1MDbe396s8FchXjodvq66MSrunS",
  "key4": "xhZRdHxZcNrcjGH9UCddaNN6SZPYtpmDhwZGFYVMCnQwCAcoF8TM8mScVqZDLEN5xMpr42cD2RouF6EwMTeNYQG",
  "key5": "4XbfyXjZg76mxVbvG49HpWmBgJQa996eCGVrW9QWTqcJpVE3MnPk4DjDudqQD7dJhqq4AdrA434YSVLtFJW7iFUE",
  "key6": "66AdSM7XAxDnDheH7G7Ey7hZtP8JCWrmq45SAo4wgrEMKCUyD9EzvnAHCAwYweExcuBskPBgLNH3mctEqugQm4NR",
  "key7": "2VP2xqCDkNwScZ4q2Qt28Nhm2aNEtSyhCSVEAwMXYVjoTQCTu362BfyK2V2j6c7razhXXzKooFxRoVCUVXSH7S8Q",
  "key8": "2UAkqpL1wyo6QCndTa1FHmAugosjdcaRjKKF4ANyuepQpP7NyoPHVen96cBfNT9RdCbhQuRE591MR16yoqasq5LF",
  "key9": "WJMULqvJD1UBcACgJ4ajA15KQUZH2docbZsbHAejBg2VMTKptoF3qyxMex2MvTjeq4MJ3ior9dpe18NwUwgVHRu",
  "key10": "4gEark5gsRHsxGG2W9BvhXPAePpMfFGCpRy1saiHCiW7rgoof6HGnjXYNHiVT8ozEYew58LyquhHrf4E8qNetVwD",
  "key11": "5A9A98ugpaubfKnYEEe1rUmmcddHBkRTHzN64zoxBf12jRM8c8ZF6FAk5QWgqn27kSRHizSGhXXWhjUN9WYEZUmn",
  "key12": "CdrXWpocp9wAJtyURRrUwAyConZHa4viB4rRRfy299u4wk36CZgKcB98rau2zyrCJJtCtumLHwmdPjCzZ2BzUQ7",
  "key13": "vFsZM3dbkXr2EA6oqLXyvQHxVu6w9GCDb7EoH3UTLrGJ7ERP6gAnZ67jbrjZTaqwL8RNdk4fh3JajriTfzynj5R",
  "key14": "2ruAC1AjxgfEwAxcYxW34oC5cK9vUz5zFfSpyJEALBnDhWTMTkxB25t64vxhWPYMw1VJc1vY2ymUQZ39VnARhKjp",
  "key15": "5xt9khBLgZoESGS1NwXQfkzkFQEfGwJ3ViVARXdQnEke29CZHpLng7hB7b465YHmmYZc4Kd4xXtz12hyNMmuSX6w",
  "key16": "2WiJUEgLPz59B4fPWagSQ9LBpQ18HuNvv2yaCDqCuQyhXEu6AvPaCMVCBjTy6pN2bPbUBG4UBYVgrUFrixYCBBzv",
  "key17": "z7mRmJjuy11WHpEHKP93S2Ssgbi9UdCa9uDbmR6XhUfPxgVoSjxeddesS67YR2UypgcMfvhQgnxeib6BAPw7ojV",
  "key18": "5GFMjimktGRDh26raq1EGxMBxWkkyxC3nf2kxf7ZbiuogxKM6gvHK4XjcMmNgGnUTxRDTYT293T2ptCdWSEjdheB",
  "key19": "5orF7H3UTBVLoV5TmKseU1ZFv6mmzSP7YdyvwpBeShSoRk9gJhuE98DP4sojtxWwfybwPPhVmaQ1Bt6yaRTzRp6N",
  "key20": "upTDuRzW8ifDpeFek6irfKZEbiuJ2Mc7mkvU6qmHFmYexNQuWTgWr5wo6iz69Cct3Sr8tGWh9wcpSYcxBP58yHC",
  "key21": "25Nmp2dUrvb8siDooERuKpevjkw7VacebJKsiz7TnjmoxmhzqKNdznLtAsPrD1yxSXaBHvJdWVn5WGNWwf14wQfJ",
  "key22": "3cW6SmaqRXZbQJgV2DjM3gsgNm2gLgwLJfj82ApHzyZbHecizCMPwckJBjFK8RReSfdRqs6ETrYqSsCjBs9KGArU",
  "key23": "4YPEsTevZkEn6KnWyC4oKmtE9B1LZiTVKv27DRw8RX9hgatW5a1oZ17xJrLeAiRR7kuzBEBF9v37sit9mTdYa2fY",
  "key24": "fA7YnCCCfaioQVb6P8sRfUjBsdCQvNXnwK2EB5beDr62xbWfyC8KfSfP1tvP1AkcXka9j6jvxG54Sar6pbbQ314",
  "key25": "3fz4XGqKwszZbuGPoDGtPiZQEDKTLyTcZYHRR32Syi6B5kK1kq6EgwXcsUkD6zQJrf6UfR9Wcds7tsqrcEH6wEex",
  "key26": "44cB4KnJtX8ZMwTG79sph4YVvDVMyUcPQevt5W3xvjRD6QzqHEyZKw9KAR7mHKeduzJeP7Kn2CUdj85pDpKPjMAZ",
  "key27": "4mQNCYDmfd14A75vVacUKRnidX6zZrYg2i158G6dELAvjK9aQsb5SwuGdJfbpmidGD8yZ8Fqu5XnushMc5VX63io",
  "key28": "4UBbdR93Z21LSiXbzqHgq9UxtP3pjs8vjcnPQEbDxnsb7QqYcfBoH5nRP36zKr7oTTfbGkxY2oBjXP784vDX4hAA",
  "key29": "2yR7E21bbwJmjUrrhLEVdLcCJWWvkb4YdVe1X62Km1xarTGYRafdcAQKMmz4s9b4uCqQ1JbsSMoK9R8Yx9HGSAiY",
  "key30": "5haMVMGKymrdpe9grLQyn8ofbLawNZGHgSZzFnrTmA3QL7fFy3ehoUAtLkNVxsuUZBv68Wf2X4hAp6hJPJnEmCiM",
  "key31": "4obivf9pbSYVqeYuKFdP7sd1PDrWbfmStwpTHG6Zn7qXGzBMLwi9LQY4s5AqU9Uszox8AXRPzGzy25wf3268PZct",
  "key32": "2YAymEYaTKsuz5xSCm1ffmPDxXb88Hi5RYGn3J3ZLvFCBjBd2c3rgEL85n1kzfhTPKqeiNZonrPc3xLtj9eN6fVf",
  "key33": "3hoSTyzx7AwDckbUCecabdHvNzU27GFVGjM7dHfCALRzqxJu1tWP63ivUcGe8MnF79DuAaqKDPxShXjmr5f6Rjq4",
  "key34": "4tH3td1H7FpdfMEj6C3K8dSx4UK6e652tBfcEyTv13ThKjRTbZPwSq6XxZ5v2zJcdEAWyVen3uTjtTEvMHE7RCzN",
  "key35": "eDLjj8Tem8ruSGw1tejFfUyJCsN2KZuqdzJwStmFJvjCRYdRB4dNqJLYbJVAphLNGrfRPjhhcnqy6DhCgu6aVxP",
  "key36": "3Vyu6oA5ctV89DZgPzi5cFTHK8A7oDwUkbwSX5SvibJqYGTScZ65S9AYSKNEqN8BgKogSnFgP1bCnfruVkVXKME8",
  "key37": "55PeyBETarFpkEVuiVGru1ASqMobt78QWZFgjWTU2Jtz8vYYczdouKjKvNxTY2FxKCGQWbVZknioR1ivbLSSuWNH",
  "key38": "3jLmwksWBXioaqtC5qD2AovJcZ3brqs4zJT6ods26ED7DY5QQGAzMhvxGCwQfqwkA9VJ82EFhry3cXRbQV6tS2Y3",
  "key39": "5JUgioQxYrfMgr81Z73LnNFPsxHkEaimfoEcYuwUjvVzH2exNzGdMFU9pFyo2L81shEGjbiEj4DxXFVqhrjDtRRJ",
  "key40": "5KgX39fdpuM1mz485dkBsMo8NYPA2xH7LXhi1jWQzhXXrK2QhmAbMbNWuSzQd8WDsAerZbADFirYRAYE2f8pHZ7e",
  "key41": "4mHgLxM9RNQ6eHW79ZW8zzgS7825heEdz1jzrYdydnnTjr1qAN8q2W5FqCPN8VS9kQrrmYrEnFkKpeS69atNmHm6",
  "key42": "28QSDMQRuitrogckjUGraEByWSM8LroazoH8qq93r5R97j6hdfMrjAmCyHUqkwwH1KTWNbjkHXzGgU91C6B5Kay3",
  "key43": "3TbTJJZsHgeuNpGqPpxpHYoMkmHq9aqK2Adm8PFAbg5KhgezUKL8j5TdJLPcdBP45VTjSMB3goUQt9cQfouDzAc6",
  "key44": "47xacJHuoabdq3MiFhWPzZK51Y3wuz1WFFQZRRYS26VrGtagtRDLU6Kz4UdthE5m8sP4yaeuKnrySjLGBm7cZSx5",
  "key45": "2kmAW91DC39BaDXSkFyAmWwAahkMgFnvFdCqG4kLfu2F7CZxr26QrchaoigKBMrC8CkRZdhKqHetawm6TEspmaEi",
  "key46": "2UkuVj7bFcaPN6q9x4AAAJ38SX4Fk7qutZU16ywGkwHfGpMawYWvR8eQkK3prwu1YuDwRS7fZkY6Kd7cvkTtJkVR",
  "key47": "2PGkCjiVH5XQA9C6rx5nAVXCZLq2r8VPxQ4xh3Q1oQ3LvQnb7tiqWtEErZySdMsBqnJNJ4oGZF7hpNoN7Ys2EwZX"
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
