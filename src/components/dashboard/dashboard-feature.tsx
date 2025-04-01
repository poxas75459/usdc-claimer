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
    "3ZSKvnVMAj7yHmd8Pc8AyCPus4Phsxwu98o4G9iZFdbLH4F9uiy6vFpuRxrF691n9k9m4oTbrkFMpKwKZdXrQkcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6693D9HBzbqjR2K5U34iCqNxwdXV6T15Va7nDJtVmr4CEZM5EuAXQsHJ939Hb3HatKgjBaDKi7H1nsfwJiGXSkQo",
  "key1": "2a8JcK8X8GCPkm1xvWzYc9ywdnGA7uj7btpXALUFq8UD7ueTp4pZgCCtzPdsMMAodXyAUmHP7gLF8MVqoaHRbu6r",
  "key2": "5KpXmELsZh8eovPGfZ71v9gQJ9GSdzCF3TSc2REYzsX9ERkkg3BiKT3FdQmrYMQ92iDm2QjJMdxrSuHUcgVdBmsV",
  "key3": "2GMZn6MFDAhsqtVAFPmuRHLkaV4U91MaKckkeb5c31yomLidfdf9Q62k5pYssahFXjP99p8WH364C3ghK5ZhkBsk",
  "key4": "5yexEVPrYRCjiMDsvjhU5Ud5NeLDnMo2wAUqyqiM86eJu5j5aQAcubfqUD2pxLXiXpvuHiDHeETv8UvaAnjsD633",
  "key5": "4c7JtmShwAj9ZRMmmreQESsxviFdD3rvEuQLPCp8FRWgfK9QKCB9qzYsD6H622w3KB3GVHj3yzDXxJUhWveAsrWw",
  "key6": "2RXj3T7quT6YiFDKTNP1pshG4HVUWWr5an88ELhZeyv8SQyLPDiPrkwFv3F2JehScUup9jDKFjYiJif6SGsfgWeu",
  "key7": "iCy956xxnFWPJVVzVJX55Lj3cjgDJmxnsR4UfkbCrwq3rC3aZ1ETnMf9DzTB2icwE7wHpXaXm1dn4SWTYzAMMoy",
  "key8": "5bX6bHFfgpAsk1g9VwouaeP1Y26E41Q64qYhSA8nkVfGe7QZjYHWXFEgLveF6FnX1UFMgwiuZsGP8SWzLfVtabRA",
  "key9": "4GPjEbc6m6EZfgELxiF5s1ipjyDJNmnPsj9eaq1QyC9oiKdr7hK36HZQYvEMDazgevZsWopPCiLYQPe7MpFaBLCh",
  "key10": "4w6MBDFqC63eL5E2j42AAZHS4hRqJqnjeQw66VVoE78A6FzpQgjyGsfstPeXXh7SUNfUqG7WNw2CLs5GQA5bCTH9",
  "key11": "ua7M2Mz8E4xzCzpbjPhSieLPRvuvWtUhy2qrgyRX2HHJyuEQ2BPpRy1cGtUAGBeNBJ6SzCLRwwVazjaXyDkjjxk",
  "key12": "2aSsCqfYwmoHa1AwjRHnpc6MZJsZaEqrr6xaVY48WNqQpdMkRB3eBaVs35uQh8h3P1Mq6iStFcGkA7vXcAF3NkiX",
  "key13": "318NLecduCgg8W2EbCmib2PUv6nQyNKvXW8k2Nsp7p9gZuiKfHBJUxTGAMKM34Xak7NCFtUK2eH81cP8c3GECpRZ",
  "key14": "21aYKHnCjjsmcmzWX1ii99XfFsUPuvtSK6m1vkeCkfFJCMkwmmHMwT8N8LDzsFzekXeJ6NimpPiqe8PQritRcFo9",
  "key15": "61mKsfdx7Sq1A1FATTF2LpNw1wpKPdNoi2zfDmHWX2ptx8BS6PFdcPiDM5oPeGwUEzXwpGf59rde3J1QydVUtFnz",
  "key16": "5ZXxMXPYFnoCVdx8DeFNaKXNBQ4MYAykyfPN8T24DAV6iHZcc6wsn7aVz5BbQtQin6bQKNf5yDmkxizHeatMwFEf",
  "key17": "2Q3iRjmWArMEyGXSuCgWWmdGuSKSuhiWGzdsDHjJnVkLFd7W7AzMCa9nKumrgL1Et5evEsv1LsQmyiuaTyBmm5D5",
  "key18": "5JwkbyfT4oJ6EwpKMaDTgFVw7vVwU2pjdhhZ25ry93WxscRyZ4U61ThFysrfwXBcDkW4M8pyYE9d3YUhzkePBh8W",
  "key19": "21jA9o7BfZYtwU3JaLpxGaiuLRLaq7LszBmchixnH2QDaEmdxKCH2SvoYeW2sauXm713Y7s2FAeg5yZjt3JBULcF",
  "key20": "31YmKjMKVVB6ejdYN9Q7nqqJ3chSC3TMWVtRqYhAoctpJaQTjACmYvty1kDsLjBxk2ot36HvN9E95Noc4YBf9Eur",
  "key21": "4yQLrybkJ6YzTx3cXJGKs5Kt37LYip9kAqqY3eK6nWH5aT6ffy4frvhaHE39JFS5fWuCuBKpUcwF7p66FYDLoetD",
  "key22": "62YsncZGHvJmDybZeZoqgQbhQ8iB9DTX7mdB4dHbJ61tV6kgBqPUbdZgP3HKWGxNdNpitMwFmMfiMy86FMcfM1R2",
  "key23": "4RCnFzdX1gSUPnkU6UUPyAP6B1aFLBuNa8yUDogT5FGyamGkkGFxwmqm8mWH4i9XAyqGbDiX5irxqPjxEpBXbC41",
  "key24": "22caebjMhnsdCyEmz9MpacmqwpWjhujDBQmmfEoTc9hVQpWZxHdm3cxaxJrMB3K5FoHAcotB4N3vZACbqtrwevDv",
  "key25": "RAD4Txu73DaTfQNduEQBHg6fSjSMPwUKDCkoyg6pddd9tE7yFjnKg8jqtqybpj66VXoKnYoaC4TiCXWo9qx58fF",
  "key26": "33nuFrXYFffXJdeJSPgFYW1TP6ksHgJrpviXjvsbkSYz1U5T83Bf6A8GCtmcoLMNspdRJWMCZhvDfia2WJbgjBLU",
  "key27": "22zNsVx4vp7vCmk92aHLZCigp3HjwoT3MzPDtS79MAH8EHEBnWi1Ay3AYF1i3U5wmW5PaNLLWH75XXF8fLAxSqaJ",
  "key28": "5sjthGY9x9x4sbs1qohWkYJkHW69YrTVci8ytf32avR17kLddrJ81RZ9JorJq1WrkFqZzaGHwRxip6Sag8wWPHVx",
  "key29": "3cber1C3anCNgKnxbZEUBHyZckGYrBZW44YmCpd19DjJDxYZsGnAYkXUnYLgNrTdY714rDrLhCaPQjjgqwH3xoVB",
  "key30": "3fvZEkPDnm6jDZgp2yHpK8zbNcjgcvKfctwM66QEFo8kjp2NCuDRZbKnjvLAzgqFZaBLeE5dQMC1rguCKWHWSYKL",
  "key31": "2Bd18zdruy7B9YZPRHDChWCP1nkzG9bErMmdQSgoGHAh1jMzLy3PeeQRwnUrJpEevC93TAnC6ZRRyZmubttXrKCh",
  "key32": "25FN44vEqt9AGu97XeXBUtLY991GxTuBF86gy62RUpshC7ozEsVU78r9L22hSEvAhskmkqEGPrF4T11Zx2A7Xb5N",
  "key33": "5s14N4LZPehfApXPvJqypsSVmYeGHrqGa2Btt7caDhJ81Bj79rMKa1CWgzMngoXQYiCog8EDAmqhoZo9jKECirzN",
  "key34": "DFcrbfM8rMU7hgsjpjo8puMfgkgch6XyCCKrW7QckZDHKuC7YAgq5xnBhoTt5rDH4E2UDrx3B4cvasadJcWzjNG",
  "key35": "5Cb3Z1HMenMbHMGPqgiHoARvNfyBxCdzBqQwSoDZSNt1g31LbhC9hAsgDtbF1biLBd4RTFy2Azc4m5iR7PErnPvN",
  "key36": "4naircBJq3AhhvEKCT6cQQtCELFzkKkPs4CiSb1FZMr2wWUm3JRTdUhws2zabJW8kEop6vX1ESpAfZ5d885pa1Wk",
  "key37": "3UaV5xdScoWH15iKuFupdRCQ7C5AhCbNvvSqsfSBupsSP3q3M7tgGJMNRfYAwDe833dvmVHYdDvpekvk8M4LDvjx",
  "key38": "51xSvbyFSJP2DS2eHLPciGqC2hxY2okF9bt81HNe9t38Y1LibUdnXSVjeUGSCnrERZ9KFrKwmCaAbeqp5u5WZx9h",
  "key39": "3FNp3kZ3vpWNrhReRBTmqcinh1rrr67jF46rb5XLqjn5q93n2A4MYce5JQpmHrb2FGDBW44a92NVJwKoBfgfnW8X",
  "key40": "46Wfb9shkpTXkco534KtXhBBA6WKpJwJSHfRkHb3t9SiidRbrxZjeoYiEnd1dxdpVdK4PR5dDFEv63Q1i6EKaXan"
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
