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
    "3KrLB3gTTe7gv9VM7Pdb5avHF4YCmV3UTAoAgn3pnHaZSy1UYoA2BZeGphiorC1Re9xuiwBQ6cqHvXuSWQvzQ6ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rPhUcGkAEfnStzMDq2S3iedo6BpdX8ZasZjSgavCuM7CpVwFC8jUcYt8QaNvBSg3mqnjd3xVtJ5k2j3ocPgFzV8",
  "key1": "3PbvAYLXjPp3ExMpfdWeeoBVEAXV8c2P9gLkBZvwvbBnkdK7TngJEaksPkf3m5nNYa8wWyPWXdUBskjKTWJ4Ny6b",
  "key2": "4tcqNXvD1gggFDrxrxyu1R1hZTVwNuC1Z1NCNdtULC6UPCP4Gqn8cyLeQ1CAxPa4DVMvrdJGWEmGRpCJ18kW69v",
  "key3": "4dqKRE8LBvb8RFwfNfXpWco8bgoG9urymrq3V1buTg7ut3AyvnyMkQGNUuWjnZhkiBM3GoyQ4ES4V7LmUgwcpfRj",
  "key4": "2XAtyDXUtKWtcGYSRXKYjcL2N4XXBSTVV2hGzinsfVQNZYEPoTCr8uPgt6Nqj59mzTGfQdvXMWbDdoiSVvaFi34u",
  "key5": "3nsYCoM88UZ4r4Von4qPGTiXHUtfQPydtJvBRJPve9wq6XVi4RzHkMdJwRwXQm59JqL2xoNDhVCbhW8gC6KaNnKa",
  "key6": "4TjZZLubZ1vvmPLZdy6rnXqvXhTmg9U5inHyHo1G8BUjogvZr3cjDsXy6hVqVBDof5HKDfFVVxbzc8P9zitaV6PV",
  "key7": "2TiY88oJ9zW6HzAMwUBurvvTmB2272ARfpH31RjbjZb4d2bncL7ReM1zPFEbMz1FcsHVBu5uLxuSsawpHqfaLFT6",
  "key8": "2Y1YpLFaEggoPFzxV4q79UcCiRRuoPHpL3AhzeFhHPqy3PAQDso6omqBZ2DKdRKr14J7uXDhHePavxr3rPz7EP2j",
  "key9": "4WBbCuphY62rugH7V3mtQQCHHUYEfi5FXER7rcgrvHW7RScero765kHSv9mQLQA29re8v9Mv2V69yidyPuTftm8Q",
  "key10": "5FrEfJ4kTGVSkhicFjP4CJiYSTBNcxRhZiHXAau3CQz1KECens2jGXGcvWfBBaUyqVBVT29BbKTV5iYaXKFBC4xr",
  "key11": "3uo4cPCBTdmTr9ccoWqJwLxoj2VsZfr3AjijNGPtqCtSzBeV3HCmtRRyCLokTTSKYp5N49dNwnuQv3EarqdUEiSf",
  "key12": "Wkqasi2C7qebs7xP51kK9aKpah7CwwgJ4PrnAFGHX5wysPP5rp3wRukSFbjCYMzEF4ThVvesbGAcpWnPN5SjAAZ",
  "key13": "3uUhhT3j68U5qt5CQ6rd7S36jGxDNJhj71eUccA23cme7tw3Lf8cRsVjbqdkFBE23Bk93M3jXa138nFjQDzihMsn",
  "key14": "5djK2JU1ixTxdrfUkkp59A3apYoJN8M5VwgraHY62xMtu9hMoRJY9o4Q4nxehaiWALs5zhiDxY9FNu6YQWFELzBs",
  "key15": "tyA1BNGc2ZAoForXiawYDvq1Gw6Ka2fvekJjxCQjZe29q6fKViWCjP1igAASFeQzNzU6pUVqEd6fga9tVFfcs1T",
  "key16": "28iusyHx5docwq2h7RyAU4Xi7PqW3Fep2PH77f6bQPMquMkt6pPfvLYFGbgNPceJhPTmXaEgvUdyynFsv3cm9V7X",
  "key17": "3cqyUzSHn6eRLjYQeCAmfnnZqXabpw3ivm9DmDU6NLHbiLdwzUg9RjhineENQchaUecNdPuA3wuGQJxc7b1DCnoe",
  "key18": "56VuhH97MJNXcDccea71p5YbZ2zZjGXZ7g4TZefKhyhCvxJhqSj2vqZu29AYebJyyzFqgFBAuzHqQdM7XrAWwDaY",
  "key19": "j6QirVTvqyV5MKRwiqzo7ywgA2vrkYwLpYeC6ga5PHRcsWdFkMrpJH7JY49GTF8B64Dy87iEMbqw1rzhbpuR7qQ",
  "key20": "2ZHXELAkrbDWzHB1SpVEFFjTmCQ8jAdeAX8j14c6KJVXBDe9sF5So9pegmSZSJ93xLooF1E8QAc3MNp7HWpZN3MU",
  "key21": "2aBH9GdjgKapu4VuNa3f6sqRgP11eD8pvx39rkUvFvqK53TUUyKAjoW3A6yWgnZpFi1MzZdKeVGnkzAR8mrDCkfb",
  "key22": "2NnwqTRThuA5YVSKoVZD8BUPE8rvKB69UMbBun3oWcZdeQurbxQ1fEbMNNjCeEMZUcciYfZKDHgEQDkVPv23vd9a",
  "key23": "2Qszb6TTaFmFpn15fZSJaRXRYNqfPzNkDpEABWyssqjCq4sGZUfgwAotCtqUFtXJwpNG5Rz6kNMkLwsui3r6tdg1",
  "key24": "3mjHNU84pWv4QdRhQgi8SJQd47abkr4DLRr5CcbMTf3VoNLbv6wfxZwUdhwpnN4xX2fZVP2Tx91yEwkSKVMwEZHj",
  "key25": "UBopmCdN6FLDY6oXfgDzTgVDkqoJysLjrQ9vSAcUmfYfksYhUDgFcMYqSPRWMJDoVzeMrxgszDdstNRqNetwUys",
  "key26": "5xoecKa4uqLS8Xpv1nWukq4VkUeWXpcGct6gktPLz2rEYitwPfVUTxoNjXSa5AXkL3PWu7z4NKLaoeVV9h5i9t7T",
  "key27": "AbqHiYZy435ZDztwJdyYQS55ngyd4SaCsj8ZwD5GhdoQXgGWStbdAP25NrB2sMVCVALEQVzYuUSr5vmpG8fS9fH",
  "key28": "5sCgR1QBp974K9BYCwoL1T3JYp8CLVhsMjx4VatXLrQoWV91GUZdv9wUfG1QQKc9KEPtBRhJ571fr4aVEveXPAFi",
  "key29": "3gKka8v4gt6pBwRy4RHQ7dfDdb2LTcGTYtfHBbzGddT8TNzftGSPQhA2gosED2cr16jtnUqyisqmCSpavE15VJTG",
  "key30": "3AsSKyWDg7o9nn22BU4Xrs5optWupH3RdH2CfjspQzMVSYT3EWWtC7YMPDqdp4tKdwooZPmjL1vtqopLWogZ4EaB",
  "key31": "3VcmZKjsbhMDzXrLHMNVZGHBRqpZYeBuWXfJL2s2GyVB29UgqxkjvMYxvo5PkBZnTHibuGZyQzDkJiLsxxaup5GS",
  "key32": "4R9LryFazEhZU4Kxbdc2r1XoinfhQn1YefbngJazrnNo8SG7YNLWr77BjKAdwUd65WWHGT9xhg6A9Y4Wfj81p9AZ",
  "key33": "2GocwXygfGamvFyDTbjQcee6K2smSQJnTFTdqWc2hzaFUWxSiGX5P7Mc4bPDfW1KhwZn6GbDLzkaYvFGSTZEBDZ8",
  "key34": "3gf4LneWvywegGF2xvrRbuwp6He3LTAmL676qQ2EpmZngprseuRoVYBuXWm3cEkTTFC1L2yyfmxJyegXKze6RqmF",
  "key35": "3GTyC44zegNoYeFmE38HKRoVPQKREkBfv57hWobAN8kRV12jqwxhQQZHtQrrVcJz8x4XvTemMsNK8sVRJp5hFw2b",
  "key36": "2nJpkWahAWSRfjBQP8oWSMNR32hFos1VjjtDSB9Xu8KmGyy48rsttRpEvu54GDtP513JyHw8JpKGwjdf223UhTEr",
  "key37": "Lb5PKYXTriq7rLTxyesf9Huf1HR859gjsDmVZsaTvkULB3xrWj7wM1PuHhhe1t5ax4L85NKttQVK1mYoAPCsqxL",
  "key38": "2ZF4iCgPqQoa1L5qoiSfBHEgCNJsru9aqo5bso2tbzmi8LyzBnKC4qSHPF12aSyyPjTo8pnEGa2xdUTCbiJSVdUD"
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
