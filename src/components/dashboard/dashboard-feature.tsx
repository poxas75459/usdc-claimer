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
    "5ypgtBRqBxLJnTi2P3wBUm4GHyqGJG2syCo3iLXxqssfWYwaFFRYu9NvKeq1gBn1aP1HGTuFSeXjirmB94RVCaDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R4zvGc1iThBMmehz55c3mfpMwoVyBbidNYXYV8hEvYLZBsRmMmC1t4tm1QMt1FHega1eRgUVKBZYcBwFRmxJ5BB",
  "key1": "2YrQsWzhFVvN38rnHtTz51Yai9hrUi2JxNbK84pKZ5sd2Z4gpbPHYFYMJYo8SW1PwMY4qvch2APTPiSDFbFnq1gv",
  "key2": "5Aorq9BQxi9y9fSJhxyG15zFagQheCRoqAgscz7a35SAThH2WcT7nZEJzoTh6GDVqsbvhTdgdACG12ZvLu2fYLde",
  "key3": "3ix6ehdqn8WSQrC9pmb7GeS7pR482YpczCKUaPUxjow7DUiCC4t3oemWZmn5uf5bEvzBzJZEWwHx9wVR89yWXJPS",
  "key4": "5ePMR9v8bPeLrCrKEcMoycGhAwFFmidVKDDcCCc4WNuPXTr214ULLdms6zFyveCDYvHsV6G7Ado7jcH6QJSpCNt4",
  "key5": "4dgceGFzU6abi7bnxxeUWJeCHDm6ac747KNhi9tiuK7zB4U4P1StHG1KsjrUJ6YoGb4ei2omfJKQPk6rJechGauL",
  "key6": "1kRYuhqdCftggvC99RptHnDYfYnBXDnz4umLdAihFPzKkxLtE6Re5CACA3szVeKCjgrDtj71A7KpQmtH6v5zCZv",
  "key7": "TQHF3ZRGcxvuyBsn7Vb8Vr7xSENK2h4YZphFZBscJhHtfMuNEiSgiPuJJprjfzkMPfx12N3pvgvT3cpNFrtXsix",
  "key8": "2TnhtNxTAdtW9TD3F5h8ByGaMxKbakQRyx8KcD63q7xMkExb5dRvrJXhrKaxYC5mWdnisdHM2RQvi6w36KpQG2fH",
  "key9": "3NY9Jk3ESmtK2DtJXCcnqPFtrXAeYJ8rF2xwn5H4JZLtLGGmsdQVDBrpv68sp62xbot4pVnSiqb8qsr2gtbiAZBB",
  "key10": "U3Z8G7UxB3Fy84oe4EhqFc1MGDHssJtWHtGMMiZY9q24ZKUxg36zskktxgXLK8KwwPEDD7MnW5ZiCKJSU8yskTr",
  "key11": "4yhKK4mhQRXiFcjyN11akmE1GLUqGewPA3xgCRbDL6YXgh94eLvmxvsnJT9p9UL6s8rRspoS5VF7fBYaLBz9Ef5R",
  "key12": "24xwfZADc5aLRcavUgWHPpaVqneHDptfdvaDwdH1DyY6WL8BiS3a1Qk5cSkn4YKXJ7xmht8Bkj7gsShTfMwcmV1Z",
  "key13": "612eecn9raof86Np6m7yuFwovbpcef7jquRdsRUxhB9kJtzfiaqS9ni1fvr1kTi1XfdLZ31jFomA6tHXZ8LcnrwM",
  "key14": "5LmQLJZNkUyVmzYhhgaVq4nsTgfsVXc9YGGQdxkTDFWzw1ufjiQ7m5tYrXUZjSa3Pymv6XKog9zPkJsKG4GD2r7k",
  "key15": "3NS54Gun5j6tujaDBZtJ8AJ1iRePCRPmwcE5Tt4wwM7rLihuPhfpdHS6gTy9ruvMBth9pVnJKuGQAzpCbogCpyUH",
  "key16": "4U5rQbghMvYkSsDAN9AwnKLDEcYTXsufbyyC8TsYQkLBfztX46ot9umnt3jGRXX7U4R4XLDKUwAQsVqMSCKnVwSc",
  "key17": "5F6ScCwYVqnT9eVdFEA8zRwnAzSnUS6gJ2FfMoYw43tWWSCmRDTZg8iYDVrrNwzC6UGN9jenpkceVQPpjjEX2YUK",
  "key18": "5BpkpRjL73X2NMKH4sYDJ3WeYAa6DE1giGfhc1DuU4NEVbgFt21AdDABEyNf3b8vGNEBTgUohU9AiNcSB29x6c3X",
  "key19": "3sBUsw2aHdaNkWrsr2dDPaGHFSNvtZMUBpRQ2p1yBENzusu1zLF6fpqWVPF5rVsZyEWWJ2k7Jrtn29HUqcPhY6ZQ",
  "key20": "E3BB6QPSxKCxTmitGqgcTYdMyvb9cLPgCUa117x4XpiBwidwTTvosRmK8fAsDjoeXx6CtJuTQa641dRoHZymjGy",
  "key21": "53Zii23BiZVfTkWE1Pa3xCdvz43YFgWVxkJqxgQBmRSFgSY6TigNogF3Ag7SkunpPPHccagPqXe48P8oL2FFH5Vk",
  "key22": "rTrLWhM14xhrCF89t8NECCe1fY6E6td7NyCQxYE1mMsZ8MCrmGigTf6G2R7EK4sq3sxLnKwoEVoqY9ibyGEC5zg",
  "key23": "3jmpZjt8gkLd4JcHNNRQr6XoZgGMPeh9AVo6jht3qAZioP5gSaeDsm2yyYgaPWUvAtBH8475jDWzfxnHE1WRopQN",
  "key24": "S3AoJPdmyEmC8ov8GVbzZZojHGTmithQ4XNYx1o4h2bfrDUEiw8cYiKLscXzJdwz6Atq9NGYX1ju8RnGGF2zwMg",
  "key25": "3noLQK7nrrq7Cxj7mQmudbSSB1G1H9meQVAkuxUgntX9YsyxQcdXRo7gk1n3z59TEeSik4HC34MLS3aiZu3rtnAt",
  "key26": "4h3Sq1xPgwHkKKyiYZ3neVy44sxsMWLsFzgZUEyzyjs4khykvVV2UF1Pzkhu7JBJAE5fnEKRFo6mFBcvhpkbGvF",
  "key27": "KGZeudDZt32adWAjPMN2NnWKQks9GNG18wbVD8gxx5GLtbTVhzeir7QquyaGJ65LZ5DEoZMov8rJheBaP485pCX",
  "key28": "2gF166iDrcPenLwxoEsvx5PASrEi5D6HhKyG7rtNLg5QLrsud2NNprh8t64xLULr56fN8PqbLd2uhBceRPgKTWto",
  "key29": "FxAiUbm6rHZUGDSD122UMpxQdwres59d2sQdDawpd4grSNtHTJQvLyyx3UVdbWQ3cmxzzAKhzah6KABLFpWmXgp",
  "key30": "454o7EMWbicCNvYaBPqqdy86XwVcmHhE3mvxGrGZKWwEDj7AiuT8uStcp5L8kSu8jBHrD2nyEAzyGsopNYngVkPM",
  "key31": "3UKpkkaee5Th7zpcYrCxRqvCqVLMnu61v3WG8chmqeCQjfsbUN4yvgfc5AuuiEPLDXfJNxc5GDhvU6A7zq9Jrgxd",
  "key32": "5GVRQA6wA7c7vZ5AjcXbhL6gDDxKrFQC4rZuXPNWknjD7fbpatrYrf1zT5EgWhTYqr5FSgTSfjKt54xdzqmEoBsq",
  "key33": "5exerxD4AZJcjj9HCBYHgDQFi4FVDxwc2oUWVx7WZ82SUqkh7wYGNoQx5tHygoxhkZAqaV8hhnUiTsDZVooeH4Zs",
  "key34": "2pR8drN8yKS4q6Ft2uHQA2r9k1r2sL5ChxuYT6QfKSxVosjKywpAKBetHXF1QFQJ7BDpkFBLXzvHLhN8vzunDdYe",
  "key35": "2r24fHosg3gBmSRHiLFTjHbqs41JRXjxo22KFDQeM6SseFCujSM92gVEHdRv1UxSV9aeRb426qaCcAiJK7KpNkf1"
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
