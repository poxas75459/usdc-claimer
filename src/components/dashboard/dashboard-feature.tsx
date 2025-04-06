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
    "4MGAuNWGVq1WW3CrwAXoo3Vgfz7GHJEf3RJm9QLbKVzugLXf1X4wcwi3Dh4vbogKGzQHiXaMNuJB2ekJDFX8DTUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2podm814vHcvtXej59gKTx5QvCMoLVARURFW8AjcYhz5aMT2BRafGwtRzZNyyL2NGWiuzWmXioxvdQhLhGu6EsxC",
  "key1": "7Hjha4xAHvPVN2gcPBSfTLMraHe4DCbVwLhhDRimFJddezXEZRmzGgReu8W1gCZrWtaRGhmGaTwG6YaSgL2cxge",
  "key2": "qebD4o3EEzzJWfQocHU1tRwu2jf4w9pA8nTtuzf6SDrVuXvXQ5PArLiUVC3MzfGSZHXMdHtQzzqQwceBJdRmT34",
  "key3": "4vKUcyoy6gSYmrqQdaeTjKPM4mawDHJzQrkJEjBqGDjmVm5tqht69tS3t1xGiPQnbYVgLvGzBugqSJAe9bo367G3",
  "key4": "3d3qeRE9MwDA82BywcTLxmHVZoPWSeL7h3zQ6dos9fsyiwdSQSaMXpbeNGWez9DdW9RqgP22tg31vJTnWjg4kVDs",
  "key5": "5g5EqqPzfmtVSZNcZf5skoaeoQCCZpfYskw7PGdci7fbtXgZHSeRw6T9h6pCatHs3gDhxck9zZhVk8HEzfv5YQux",
  "key6": "2UZRZe3TyatFGEsNHVaP6M4PcUgH32eKcbXtCwZLC4rtJHBh6iB5K4XRV8xTvRfifn9P2fjz4LMh8hWNR5GZFqdA",
  "key7": "5NwSLLEk1UJ4njxiBDYFj4Dq9PbnrA6naB9JNe7xjoTkt7SmE5UoJxKeuRSa9rYUHyVxE9wcKrm62rrWnGaTezYT",
  "key8": "3qAVspbpywmDBuN68a6cfcq9YpVdrudcnUKmqoBWHje6vF6URFGD17wvzkBPryMNsNLtTPMSavx3SXBwxfiBa6od",
  "key9": "4yd2ZrC8XAz7xnZbJ5WSfm73yVUNZeYVXUmBku2AEr2cjusgKACA5gFvUR3FW4C3N5rk18SNGYEzB2mKtjAXiqRS",
  "key10": "3u4SsTeesSrhLSrnFmadv8eaz7Sktpae5ac4iYsTqAG1cf8g8Hk1GPDNv2MJmvCwUQzG5Kuiqok2MY1qctnWiGy9",
  "key11": "46KC5nw8Z8QNK1YuhSBDDxVk3U2V7WJ4H9GtBy5nJuxQFvwKkzX3fX27yTJuxrgtsaf4NYA3jKRzNHTfCnXhnkWX",
  "key12": "4f1jWB3J1nmNkrwWgnpiAnHHBPksoRAt7tKXqDDUA5ZHrJCd4RJMa6brEJw5L1vsAmeHmCZL3uGmmUjGAwt5qyAw",
  "key13": "3hc43p6vRvCRTq6z4e44wvT493eVuEKAxVjwBcLSJwuV56zEViwM2z8RBaXk679GVuycoWg5e4woTg9bjzzUsXCv",
  "key14": "2i7hDKNSnUax7mRKPbXCA7y5A41of2AbU4W7MgwEodEiCnkxdd2Yh1VKjvocECNfCMGQG8csXvf7H8bQ8JhHDT6",
  "key15": "3eLMQiKbgkNP3ZJbaght5yDNzmuPrWiFptJjGw3K3tL5aiJiqGvwMzfktDXGggtMkFVLZtK1iRggCdHhAYpVGpUq",
  "key16": "ZFncoGs4fsetbVR1S7wZYT3317LZrXTiqXiAPB3SdevAn622kJV1Q6Pe48HTicaikKpt2yAMc96EacaSfa7YSyv",
  "key17": "2TgrBfWPfZc2MpX1yxSCo7ukbCeQ8BwZHNwoRQJtTL4qvPAvNEtGR1Wt6t3V73bCNyeepdaBoJKeNm4dSq9kTfkD",
  "key18": "2gtjuEM8dpZ54nJE98PugbF8JZea7X1yioBphJLzb6sgF7UiapGPwT2HTpobcHrbmDzeT3MAC2RdGf7zqsL7JxmN",
  "key19": "4SDB2WBny469eFNqyHJBA5HHvtqukFHndnfvi6iTH4abnaVEEDrLczFTkzK25BqRCKoCgby1oEvBbcYWFcsR89n8",
  "key20": "1muDRiK8Ff8xKHDdG1FEvMipFmEbfjgxgHERhsknXzFq2nwDoeTvyvSZdQ57WzxNDzfPZ5SuR1jpRn1edUcmW9q",
  "key21": "9GiZYR2oZeJpY3CnGrPJvpmzkMGRUpwzN7XwvZm1Hdb3J8VwULdQrQGxMA9oZCdkDa6moy1vuGQnMBp29uaWkkh",
  "key22": "JtKnePk6q7k5QBPcGdtnuDo7K2eGVT2UmRwnTk2mo6TVHCy1ahJGice1UCmnjLPu2KbXfNoEpXLGMbxr3iXzBGC",
  "key23": "bSdXQpqrjgFTsXfhSy847eZvCCX1rrgGM35QsSkFqjAwjBn9ZeURVGBqZvWjdYh85C41t3hSviVAZWEFYwSUeTc",
  "key24": "2awHfBaogzWY78CL4LwXY8sXo7BEKzaw6X6DrGfdosa6PHdEUsVWFDRe3SNCFHzrczytvUGc6Ggf568Uxh4YXrZn",
  "key25": "2YEbn6nj4Rj6ievnP1E9rotV8vhrveoPVK3mtVXuTvnFa7brJzKvsG5p5mzZHKNFk4RWdyxJ4szxvXgckCXM4N2K",
  "key26": "5k8CiEBgACGX96ygyAYXxo8xNYuDScFBsExScHopNa8tuLR16TDZD2dPe1nqQNm9226ybhRKbCY5UcMmEdxfupvw",
  "key27": "VSsRGEwUMb7dRqbDCkVYDuUqcLcYfNyLtsCRvCuNjAYsejrZZ8W3oHqjCE6kfMrbGascDV1B7U2sREEafxyBP4K",
  "key28": "NDXhcnpx2HvdPe2yqFBjX89CGUrqbB9FuaPDHxCCYKGwfSx5KX2MN4ymUYf1RsjiVkfa5ZVoadssorEkBnv1u4D",
  "key29": "f8r8kTxG5B3US2eSr7iR2kwdxJQRQ6oYZUtwLxZm32spe2xvX9SzGwmufhWy1Lj6yYtZhcmRjmJXCRtCJsS3jdD",
  "key30": "VSJPJpoEkxp1jdWtmBbBkJSA7pTVqaCSmx3tq2rn7QRva676pipaFJXUxbHa4fgCHhJZxhNBsqG9aaUkkjrEoUX",
  "key31": "54vL4cs4YPmMXyeYdqxzekN9miXbCi4nQ7xw44n1zbFhsEVSG2sJVYnYXuq5em2VNFYNqBEeZmq5kKsMKVXMmZ7e"
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
