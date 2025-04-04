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
    "4rp1xQniEzuJD2ZusU6yEk3THS5iA4ZGiVpVT4Sh7hhy8EJ2HtS9Xmdh6amRAySHkrnPGt513ho8W876Nivj49sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34d9xGxrban9q5rz8n7Krac5aAT9vGiqnLqSQgbafmNFwft2cr9cTAnJULkp42wyoVtYSTaHwB8MA3cqVA1Pqk6F",
  "key1": "BKZDn88EbX5SyYWniTn1hg8BzdaAziLZjsJoSgcg8JunEykCr1xqyXzXpdPN3AGwbHqpfLpCDUeVJyVTpkRTcoD",
  "key2": "5CAqiphuF56gKwsZSHFQZPqiEnEbAD7dvQd4AFYL8SGKwLoeqQLXSqfrAfJBNLnrEW2LGYnGFjwtL7mbpZGnegat",
  "key3": "5L7mqLJmg1mCrm7i5o6Y5Y98Li15wgHWs8EShawDiQKdY2UAPoXyL45FyKGJUKYtmE9YHj6XwyU14pd4YnstQTBS",
  "key4": "5vHfohGXQfM8k4R1atdtzm4jPyDdVtapxvZri47JZQbrWpH7FQJEseFW8pdHZBZZKDBEYsNWCBED6ehMx7zdR5KW",
  "key5": "2RhXjniPMV2qyFbpXZ3vqhsg9rR9EosZMaxgaAFH1jxxbSwEh67MxVCjvqnFHGxpRF3Mz22WGUA8JNh8PDSAFvjW",
  "key6": "57CosLUWY4jv3mpDsopJZKWCV3LAYUJ4V1zSx8rT4Rki4hXDLVicjJYXQPzAh2UCs14QFGYnWUc3Uyekn2jv2qU2",
  "key7": "BmCwHCTPasJ1KPQh14auhc9John2B8jnEJtTBpnxT1nZ2foNpksPReLetAbSTUcAiAVWh393sLwJ5U9kM3wFith",
  "key8": "2J63iCgjKJeVPXH8JiJ1XQ9zrHEwcbKj9V4RvkACK2abTEMaRLt56kRxMrtMWVzh65fyDhvcPwAWp74HZjKiPw9T",
  "key9": "4aLnzfrGeAE3cWYKRbjAqXSGZknBHTMBPUUZcZ7MUd2Lr5hXKp6ye6dzh6HTz5kFSwgcUtaiNNSjoFYQ7MjkPskp",
  "key10": "24XkbVk4Z7uhhfsoWSUdLyVbm4sBQDBHx39oKARcEY38ZuhR4Vp8SMrdniWXooeKyD1rApFYwF6G5nrFFK4RC9xG",
  "key11": "Ebyf97VRdwNWyeXEBbe9eJtdbFWPPYpqSASLbD2NGB19BD4g2oXRKxo8C3dzMF32S36e1Gb9QfzazLKbZeWX4i7",
  "key12": "4RDnnT7k3G6K2NRJJbFBFpecxwVhK62UgDN7mBnwyjEn2x5UH5NKauZEuj1xFhyqwPXYBS2GPmHPZuoBaVfN6xSR",
  "key13": "67oLGSph3j6HiFMy37HAfwos2z3wb1evpFxJCuSx3RuUBULBMnu9vD8aDS6JLh7CSkUrtpphAYRmy3eEgdLg2SqR",
  "key14": "sReCG4aBAhNDYiEuED1uzuA3aVPayuNRfZEd9bfPJsVpsZPkd2YtZYfC6MsQqmjwwQyft2qfMWg9JEgjyCdRyFj",
  "key15": "3VoBqnV51PejPRieSDd7iqd6UVnYXYUXVKbh26fxvZQ8nofizdq75GewZn96S8JZH2wWVRyMqSjRmXdv5dpnyht1",
  "key16": "4iFAnM3cUxpUhGPypokYKdqYcY4af3CdJZFwTcyfFrkgmuV8P6DcehKEM2ydpYJpqLyVKK3XSD2QDXxSbNNQLyNW",
  "key17": "5srMHbDandrfAZPeybVvQmG1rbAMCaEcviNvgKbSUPbtjSEMHPLVtNsaQjnxbzVDv33yyrcxaRdvdELbYWv6Q6Xh",
  "key18": "8fQdZ1QYaUCt4DUdig12KygPMVpm2gzSaLV9ZokZfds4CBKKbkyrT8srteFmaG53zaPr4eZnLp4G7RcBMM6nzBt",
  "key19": "5mQZdEnEz2DtfQkeKZ6a2XSmN7Q1yY6kbge6RzDHAdf8Zas1How3M59EqZbsuqAsPayBez4MAANWeTvxUGMygxA3",
  "key20": "283E2uFJRTtNDuQCAZWrqmudCjzgEWgu2DGt7Pt1c1ptKMC9Sx1C4dQ2rzeUigpWonMghMNfyvhisabnBU38qEfj",
  "key21": "nwc2RwaeK9MQ4MEBCuWNtK4SVS225qE8zRjRHMqEeGqPWHPsZiSfCGauznXeRVWQwYYwn7nZtu8bT8wT85aBpu3",
  "key22": "3PctAviMH1H4p5eNfEjVd9CKDXxCn2WUfp7mDXNxjxc34fvLyg11G5b2w7iHxDQJYjr6jMgtRywRRKuybFjtRPn",
  "key23": "3CBBtNATWT44T3AFpdvb8NDP16CsfMjoTU9HnfpAGBsuBSJcvBC7ZCttGh4BFvreox34YacEj5a7Va4yXnGjVXnP",
  "key24": "5UEGGEK9ARc1EATxdDCDR8Jenwvjuojmuvtcy1CZMKFJWHzCXFghrfqB6ucx7nUYb2xBq8Rsb1y9az4M4h6YjZNE",
  "key25": "2AXc6B5LoU4QwF3mRgVjkYx7byM5zEsVpDWXztuCi8uvLEuw59nLAfMyfwLMcjJMm8nyCYE79nsdMkt9vP7NirFm",
  "key26": "v9BMh9GrkHvqjDGX2wZgNZT48z4Livxofyo3qtrusmgcngwoWmN4uoknyr2FpyaXMsKTN3SjY5xkyNy2YhS7sZe",
  "key27": "2gN39TnmAZsV9bdsPV1Vd9yGDNvFpXBLXyLnmxkpZutSfPjckaSfR9BwZC7bddseWkFoWDxernsfjXdT2eRyhxpe",
  "key28": "55mLUTbX9EaNwRX7JTEowEz8SeE2M91aUfnZYeaNBehLKLvvp8BEWopWUz99DjTgWj5tQMjZqvHpcqxeU6Z5voX2",
  "key29": "52nzJDhuromWoHHAXLZXPxPy1uyAA6Rpp2aDgwdqKnzcUpe3pZGCN1nuUHEVLX4tdrSVJSCV9MQpiEZFQCRNMHB9",
  "key30": "5EDsH3HuqquCmFcu4xD5Foar2EDPJVmX3WJxjdsRZUwrMGnWq6iztMmMq4Bavpf15iSRMAPu6twXoVhG658V9jK5",
  "key31": "28o9ej5bssykrauoa7tPgQsruyxaokhYM8JAcCAbGzQN8h15J8e8iFy6Jh5pGq3fbMzJDq2ncmeHQe4Q7noxuKCK",
  "key32": "4mxXiDsop9Uo6oychUTdaarvBAcy78Y1f6UXKWC8ewcWnYmPLMzmrkQnU3uKVAzvZgmpneDKHtAwyN6e9Y9deJJC",
  "key33": "SkEtEttLiiFM3z2HgPmamrfWZCqgLZSYbohSvMgePjdL3GcegaX5N88vzRsYoSBrefEBKJydYCo65Z4EvrzKUoV",
  "key34": "3xnRntEdHYHWCSAnnPtLyBHbNAwB2iZEguGrMmvbJXnAtKLFMC4mkH39FpzaBdWYnFd8SjVCut6PqSCfuo25rxXZ",
  "key35": "39pg3pifkLKnicCmwvZuayTLC7JZXxEAocuEzUN5ox8sdDaFP9md411UfdHcJq8zzJzpL7VMCY9vLqXAtHpjz9h5",
  "key36": "3V1WviunTs8NNSKAZEcLsLBZ9SByL3kpJgD1tjFyC4y5eYVJKXBegcvyPRLpMGmeLLb9QdAVaZzUvhVxvzdyCfbR",
  "key37": "5XbJS2hy3HPeHcKU9mX5hoZFmDHUZV2woXxbHBKM7mUPRGVSefHnLnKT665tN77MhTxqUaXEHMxsvZEhPvkdsPge",
  "key38": "59Q3AdXUFZTF6juFYSzGBnWiunSevYPEJNjsTcKep67cnvoLaFpcbZWKcPQfnFuXnAEMxLTZtFE8ccDo4XV3UcHW",
  "key39": "3Fkx6iEQfius9PgcfEnMkwSpMaBwYHBJWgVD3txAPxH8cmtv44aLLznm4oPcgRyZDQ3ZGJCXgxfwJcHWbVFFewT6",
  "key40": "51zTxvJttsBHCxkxgYttVrGSSRxL5cQk1KWT55F5PBuE1qwpumCaY9FquZCeFnMqvHBRZMSMUHR2F58Nc4RC7nt1",
  "key41": "5Hv6hGXnCagL9je9VLgeeZDaERZHtTJfjGQLg8TmDEbs7ZByy64PsnW8pQZg2JU6rDPrTKgVVQFBphcKLRBbhbub"
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
