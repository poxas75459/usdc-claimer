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
    "setUF2XRu275bmAXEh3SBshN1jk3Jhx9Y7oPNDfMVHPPFosGLx1GyrkxmE8wd1zpHZZ7THsETHSDo96AaSF99KW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RuMFStgQ4gWRAX4R2UyGWNGsTXHi6PoXChWPkpLaFDnZj1R9aCZzbrW3gu8PddvM7C8VHyr6g4fsSpWB9LYqwhL",
  "key1": "2xoavRNnaJ89JgHvUJL42XurDTS7Ex8Z6PiNLnZpYt3ypxUYndjXRzBq5CZVyf8zNwvcL3ZKFniG8u6bpNh833KZ",
  "key2": "64QBvQcjBwTzNTGSA231SFdzqRyU2btwmLp7L3soWFYWxdYUozndY8cUjw2edNJUhft2fXs8wrqWax129ATkaRUe",
  "key3": "AwSvmUfe41j3xuhpipi9g4bVGdvQkrTzqFxAAWXag1Rt8Fs6uX7BPBsYLapDrai5T8H4Gq6nWp11vmdDRfWSoBD",
  "key4": "5LcrQBVa8DQMyRtgm9uCyTc8myCJAFfNkKASG9iQ3NP9T6EJwbZCQhhuQSRYShMhArFDxbUUJJbvbtwSs9GqYw7c",
  "key5": "62JTxtWazjD6vYEqMpSTE24VLPJ9McUNy1DYmtDB2c21CUYpiHghZpdQWanvYDeDkzXoi4phY9Wg8tHszpi12NYP",
  "key6": "3oCWV4vfkwcr3o6WHbHuNepCyCzTn9XEgPeJqAumUnub4aBeADRcT9W5BqDr8VFSXV5PGtBhZjtuJg2LU5ZgqnxJ",
  "key7": "5UKy8q1VWEboeDJi7NPXasEadKKrAWVwKnn3XtBS3xjgL7ZyrspmszoB1msR5o8obbVWiJjf1Ee3FRqZvFStMLp3",
  "key8": "p2wes8hSpy6bZS94fQzcm4Cgd3K76snNg6jLY7XH3gSB3NBVArb5kfeKT6rssoTxmx44etr3JdpfCBYyDCVW1gy",
  "key9": "5djxWsLunhDiwyyvAcLg41WaKFgCeeGW7ouPTqGvTNrRNLTPZZfVPrjMtepCVedZSkVwR9ToVBayk77czKd8zuK6",
  "key10": "4CUvNHFtSpqWBMT2rVfcxLE1PyNVq9cnR1YoPy5MJbGwy1r9gv34HaKNYBjPgmQ1AnwsyNZnxKNMykEUMS1ZZibw",
  "key11": "41U7jYm9wKXeSj5PimYg92uMCu23DBjBFJDFVpchcnPJW2ykAyjfQVA2Gh5wPAS5FXt8X1fJSxtpbrLjmpPwgDfx",
  "key12": "5d8ocXH7vzuhq7iSWNTupvUBimcGoHVKXXDvNKqEtMxwLP194XhQzRzi4xyuByL3bPS7dnUBf7GWyn9JUnDHrJjX",
  "key13": "PrMHuSo5ovhwsddZDmypuBJug757AE56xceyKWbhXb5GqinXzqrh9bQhSwpeeK8TsvJ72kKHHNzUE1X6Y7aTYhQ",
  "key14": "5ySb2u5voz49cYpzY8SMkaU32aSZ1Q7JHChWzPBvUS5VUWex81Z1Bm7a7auqd8S9zvRwhEBxpsHqGt3wsG2tTZc1",
  "key15": "63s5Ex7Z8LYnbZF8RymGcA19arLF5Eyzh6h36x7zHCT67GovTUvpBXubtnEoH8uLJ34p5Uomoa2HBV6KUdDg2x3z",
  "key16": "5HVzYmK9DdJDhdurLaYNDGPQt58UEytqKDGRqWGFZWn8GWqGcmGfvmFjYhcj5LGp5G8P4DEU6xi7343Pi2AjCFQi",
  "key17": "2KhbX16Ehq2o6ibRDNQEc5PQ1gM5bhQBBtjN3qFQmwSExRas89nwoBAh4qztBxC72WYPt4utAxaB81qiRHofpsEZ",
  "key18": "59aYWAvztdQLXfxNG4k3TuUBCCbVTH86F7bkcXSsoCmLCxM5JyfbgsduiGhwTYW4hkLHCHjuqammJf5mCUfTTfFk",
  "key19": "3acYgYwhg9vqe4UyQBaojcD1ESPwPavV1NDgCo2NocmHeiw5rrezV5HiAcPpgL76Zv9yVNycu8ZXrK5D6AuAQGJg",
  "key20": "gL1dmXawUKpYLSHdYG7y12AgYBqbceNbYqqYbrBzYfCkRX9juv9razXs2oZThWqiyWjjDzJYYqcSt2XvKZrr3vv",
  "key21": "qxY4SNSAcjdpiRH4dpgW1PBC3Dgj5nay83XhBb4QDkEmMw61RjpLQaq6cqkDQfrZ5MRsgumSaewn228Rq7QQkJr",
  "key22": "5DSyk1VfAeYmZRXiM6F1Wr39czABnY4rP4ujQtm2irbqAWp4RZui713ZPNnoZ8Uzav2rdxiwx4XjLo1842jnfVBy",
  "key23": "2tXAii3GWqKrbBQovrbbfMXWEucdqqXdVuagJh4Vh3WE2i9xJuFeaU6F4jgNwRifiCmBRmZ5XEDm1yF7Qsv4Yvig",
  "key24": "25UhvqNJf61HsF18Gbr6LNp6TeUAwWD9phhZARUduNS5HvBCVgpizEGHwNZcLBd3DcbkVM7N3R35qHHA6mv1VLJA",
  "key25": "3ZJNGALx2SsfiqL13dbxKamXQN65igBNzACDjGC65x24xFjisU2VJdWNnUiYdJmYCMmZ52FZnwgSAXZxP2nJg9Kp",
  "key26": "4GMw9SYdCzez2ZpSPedzbanNET7AgocD8i9ze2Hntepxf2h8o3oaUohZt7dNxiHAQkjrVcrGgDxTFpYvYtjwFjuK",
  "key27": "4tWiCzXX7eFDacuG7XXDMnU1tP6Epndf83kiNRqRXnQuv1oWtwZezEGjuBDHhK8ragXBnj2qEBntc6NZtNM61ys7",
  "key28": "53ekATbM5Th7YN5Sdh4Bd75Qo9G3NEcSx1hUaLzUVRLSZDQmBfPMJLUoMvCe5rzbAnodZBCieabw2ZSbuYdkChaF",
  "key29": "4Bjf5ifayE164GNngKnYqUBhCfwjuMcrr4KGacwzfUvKHjNqEocpNJtn84JSB29NntqphYwURXhSKV7Yh4HAVUp2",
  "key30": "3kRPbqRmdm4VfWV7KbB9NE4HMSY43u3nmYks16EgyYqDkyr52VCsmsHDZwSGozkTGDwVAdsdoKgJySQ5b3xr8tz",
  "key31": "4mxfiqbztcnbdDsLchRhzBVPTs1KYPDPLUQhfHxA7ECpYWUvBa6gyVNbo1SNYgN13XSFDF8BFUZReevX5v98CLsT",
  "key32": "4jQRxcDrPc441TrXNGoFUzZKsXafcssDydiMQARVU1az9xtR8oXeXiSjDxNciTLa4GiDTkwNXL1xgjZH3cVAQGXy",
  "key33": "sC1b3i3bMtTmztUQT57QugMhtRVQazoWwCKDQ8uq2DyfPxHGHNwbfcGuFio5FUJnPUg5onWkNHx6tCd3qxYM57h",
  "key34": "5eZW4bUXqyMSw4XH92xZRASGNhLUQinh21ofGehkG8JS26RiyAQjbiqKopo2EoyJucVccCXhdzskBr84vs2f3XjR",
  "key35": "5YQ1YLtXQx4er8AjYAPEUPMvLjtLaT3aJHD68duu2qkxLibZiNxM8mZZTWyuWdiagGsSkMqpEmtt1JRBTEitWAD4"
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
