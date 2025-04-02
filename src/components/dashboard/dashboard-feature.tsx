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
    "4xkwJzC6ZHCFwiyP3YrPmTvGux62WK53rcGgCNzS6KDAft2xGtgjUk8EZtCdFgNNUEQ7vPP2LwyrfcnCRiL37Afr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vwDJryNbek3dz7rGp89YhPauENjcXfMQTE8Cvz2qi68b7sF8WRZDCPamhnUAqfzMkJag2Tg22JS6MEeQ9oSmoc9",
  "key1": "4SXffGzE8ytWEJVWFDZd4U47VcybK9bNBUmFBJRZyAVde8sTmjF9uTg3dLgNgdJVCjdGDNGY3Qxu7o9sLcpUgAJs",
  "key2": "2QpSXYRhpCAKCzC9WQfy4d6TddJHYcDWn7ga7KhGEVS4GjoJe2dFmJpPDSYJUDQgtvEg2AwzkLK9J8Gu4SyE4Joo",
  "key3": "4JPT65riopeyPu75gX1V17VKAkKWG8USrws1EujUgX1xqSWbmXLApnkB38GEzqnGBUqCMchtsq4ZMJ25Hk3sKCst",
  "key4": "YAuTioj92HYpaP9WPymMPiUJcABR2kZ6bHuT9ktAfxFZcMui7kvPte5yrnmNTVCFZpUVvvTx2QAjmg1Yrs3NZ6V",
  "key5": "2HiFAHW7mNgjBXvvW5dSFxzMQuV6WAfMTmGWu3YhTc4BQAahvtLMkKSk61MNMdbGBek1jd6ERSWEMmXVziR535BQ",
  "key6": "QRercvkK7ycAK3enNiSZXbBpKxAAgcPQgKMeawRcfSD3nN2YAMT9aWv8zwssXcpDtMRtDkkvLQ9Bzg7nGAJuvYq",
  "key7": "4Ai7dSNJ8MPgDRg4gpWFHD2e9aVPoWttNQCcTHrpBoGKmu3B5WRNLGcjoq3DqPh61ApJcGMSLxQdjEG13ktEBLE7",
  "key8": "3iwtRCdyWKtVNUH1yPryuEXHJsn7QZnoGVVcPMbgwBCFJgJa7QBKFJQUYrjvdS6YXCNew6LmVbTgxD55dykYJugE",
  "key9": "2sn2AzNsg8ZGX1cQfsuFdkL5c8jnkvViXJYyqddB5yeArqDHVNqcNVQhmynNsM3onGgAF6s5WTm1fvsKaKbL37D5",
  "key10": "2teE6WacevZ93WVwKFQekFujLdyPUjzfPwWiQVRcmMfVssBxAZsMSij4rsnM1SFHPFTMpDanJWCxk7VzqGJ5Xjpa",
  "key11": "5QDbPmMiuXncnM6DFKzFMJ9qR7z96Z4s82KwQBpnZPgiTrLEPL9QDnm1JKSxk84Z96p9Yec17tH2FeyZgbJwchFs",
  "key12": "2M9MMth6bYhLave57rT78BZpSDQFrF9yoCcv5ra9WNeJvqiBkd5UTiKrLu28iiZ9CWQ5xGtZpVkQffk9U9ywRB6U",
  "key13": "46VyX3PgJ6DPZg4x2BDy4kshn2EcRsp9c7FZPcLCaYont2dNt9Cg92Rq1ciJNuroUBapBndikqJ25piZ6VkazULk",
  "key14": "5MAiJc4AkkzUxKdjTRoQVTLQyiZX16QaYVegUAbbAfnKQ9FXLvnSyYWtPJMnAVvR2u7D6z3sr7TA8KzUVcFeacZx",
  "key15": "oXj64rbbnzZAu67S1vMCKPGDyM4U4QarS7UciZeSfRk13bxM5VVx5UhhoyQsxzwB75vcNMWyDMqxhrw4UqKG528",
  "key16": "GcN5LHdDgyH1scZczpfnt4VAHDDhFhdoXxUU3Zb9mQiLeuSFSAhpeQGp4zar8dyvmMVBMaBwRb2GVHG8ybkEut5",
  "key17": "3THmodQKCtjPeRNngCtQkDSLjFkvo4kpaZDLHkhFZmPxC7himnt1jdzaoAWCdjhWvzCjZ7DM1YbGNRUSA4n9KQtA",
  "key18": "CmjAds8FazL9qTvgG373oCBt6Toa6xdHWco9tstHFS2Rg7ts8cLw4DM1xYHtrdvGcht9kADWECimkUHUm2mAQyG",
  "key19": "5Nm1DbqZ8LNP2ts9MftEGsUkZAdN38A3WoJTEBuKfMwjsG38obiwogLzyt8vhB4HmEDARC7FHV2izFKcTvo4ihn4",
  "key20": "4GS2i3Ds1U56HtKdCoyhPAduiaLkdwLs1csAsCbjSkzz7q2RaTnvGKWWuFysLT1NZJyyKdwTDZLUD7t5RFqwFuNr",
  "key21": "SiD7KLhcP21FkSHGooxtVRnsJaKVTW6u5kjYPLaAC7BFqzh6URt9vxxtsD5e7cdupTJGmyj7FXEbHTB7CwaskuH",
  "key22": "2qeHc4BWUpR8ybaEHvUqwtNb176vyVo84S67AgTc9UFVZMEKoxpCUyUe8LRE3iiZSSkBgVxx4BqwVLfbQtgosC9a",
  "key23": "4cK6sdzwNJxPH7deMYscuA1wPmLUjdDQhYgDErPof5TayfNV9oCnNyFBNZtK1rLti5F3X98fL43go8ioyMKS3kgi",
  "key24": "414CmoLTrmpHEAA5wQY1pp7L8AK5uAegurSa2nqZsNcHa5ELcKC2raq4PyT3igtDk2ZUhqqHj6LqcZCvokA2Ti6i",
  "key25": "2kUGYR5xqrLzD46Vmj5HtYmR8fZTYTSjSfmp9kTyb9tLtMWXoX14CoTnTDruanWm2DTzWu7RWivh2DU8oFeQHcu4",
  "key26": "2TaKCajTFa93VYF8wk6BLM4AYNZVc9KWmu3r6gMfvqPgRggMRoiD94ZbYragt34k8J3xoSW5cRfrtd3zADAZcdoV",
  "key27": "5QNCq77d1gFoBS5wrGCFRm3b44WmGXnKrKhqsp2h1b2Pr8UQfv91wSvN4PTGwrhj9UxWqBf16XmnXFd64qZoKiWc",
  "key28": "2viPAv8MB665sV2tjDsfRhMjXTXgSVuJ4D2FSZkvAVJcnQNtTyvAwYPiNWcXmFyB8EtMoukpNqAvojDva65HE38Z",
  "key29": "451dHQBCTaSaDZzYCqHxE7bT4nYN45UQGQRa4b67vxPkpygq1Sw3pMJwucSoHPgT12Xu2SNHSAFp7iB5mtqujy7f",
  "key30": "54tJPsj6N2jrmDqg6gbfM1YmEMbzs8d96oosY9W92hx3PhWk44yFzeAzXyTPXxvdHrxxxCdHrcoGvvYfcesbAKJ3",
  "key31": "4xYineWwJ4bX1jxezkPLt2kTamdXn4b7BapU92V5fXka3mUevcAQiGpMbUVy1LQYWeViwpoP3KTymyTWW9UL6wgK",
  "key32": "46JTFXvESuYCL3oRYnPporZ9rZXbQVdjRQcJiBNL5NbJZYCNyWbpzSXLFE4TH7jNkNxqmigv7xgzgSvh9WeQ6bQD",
  "key33": "5o92EKFwGHoqsbNbh837RJvEftxrcYgxuYJhPWxchcnTg19uKRmCvqrZB9xDYSZoFh2bbokVUb2UQpYZgGvDvNcd"
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
