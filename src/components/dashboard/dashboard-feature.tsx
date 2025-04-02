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
    "2nW4xg5MtUZtptpWvXC1ygjRyJU9kYgP2Lzmd1DWJjCL5NxoCJkRD7qdrbs3R3LeyPpepu8xbENbQpmyJR1C7dtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42aKp7NThXwLzueXkjYRffd9V3daWqzjhH83hDjxzuEnzftcNatozFaBTaS849pCRRdSriCaWFk99GTZQeM2Y4wA",
  "key1": "YWLbLLxDqbHoGZ82fGD2iMFaRoZ9EkQb3N2GEixcM8cWGAJLgdLWELck18P3ZdfuZmyF89B6duMCQc18ZLptuzx",
  "key2": "3YtUvVooKwFR6EXhaL6BSkcyTJ5h9ApVUJBm6v3iN5i32Va1K6hCymhtkHMV59Wb4RfU5SKxxfwMsHDeyQdMJbqX",
  "key3": "5VJ2SRBRQGSJMFRxmo78pJmEWoiRNK3ywEuUCKQnzMSQkN17yU7PJdQgi7YXnKjiMcdjTaNsTMnPEA4vTSgK7dor",
  "key4": "3d7FULTwDUwr7pLPhjxF1JtJ1VQK1WWBXDgoD3k9WEEGMC9f2vRhyoeDM8YdvmnuLgNCjEeTBwio2fDQpro5b7Le",
  "key5": "5H6Wc6qpXSgoNDArBdBMvffBgEQ4ECB2WdJYEvxD4wYmWWbrPyKJVWgdwo2VBRXpjYaxj2KEhjWGrS2yp2wihghJ",
  "key6": "5BrKrhAqu4Ld4nSgTG9oa6Yg9Qiwrj3cNd7UQbK5b8CE6F1guHpNRE3AbzoeUPnwyywfnVbMCWv2ZkVKiWud4sdJ",
  "key7": "6HVqN1naoDSHt4NMuDhFYwzpZVLxfuz7xGzrcbge8qewaaqdijfWNQVheymZTPWXQ5Kz43rfLuzhwa8utXKk2jS",
  "key8": "2VrAfDhVYVpv4XqsXttGrkJeTt2CuGWGijjNX3UNd6BsxQf6cLi9f66efZynbDMmLQNgCWWn3u6e7mxuNxfwiKCB",
  "key9": "3oHTDzSayMqDLCmehjRboA1FwtKXT4csRpjbx3oUDE2s4D62YXrcoRx4GKnauu6vnPJ3kQybSDe1SdJeQYdwtwZz",
  "key10": "3VngUo28JxuW8sZoqD1BAp7NrfTpX1HRSAqfziFASvZndtrTrQqw127e8CXBq54BFtdAyhb6fxy78peNznG8qW4K",
  "key11": "4zzA5sNG7NcnFqVmTZQFwza5HVPJcT7fsZ1c11e67S2jfMG7fXmzeQQRXzdVyxhsoqUqf1JyRA6rSmHjV2ooqeab",
  "key12": "62Ldy4PmZ61sNK85EtMZTRhhwUoc33FJ2UYaNPNBdaK2ZnBBdeRqLF5EuygmA3he2cPxMugNUsHtt8Jz1792c27h",
  "key13": "4paoNtmQJy8DLzz53dAN192buvBzY7DQQ2XinF7935k5XcMJdQUFvLPHBbthqtd4hFEypChXVSGu2EXAvg6o8Ett",
  "key14": "kXGpS676VLAgivYA63fKd58MAymZZUv7qQhrdwAVWspyKtBYBpB6oJuPHtXfS2kbTj9x5Dk1TeG9Yod4wr2CLRC",
  "key15": "2Y9E2t5zc2Y7UL75YKGtsh7pt6Mu7QKsaCdJvQGG5yeqsdSt7ssSPQxWEk873rKG3MtinMGQLQ4PS22Rjn6jkqyn",
  "key16": "3zMZzn6gQZy49qjuvvd35UGCt5VV7nFTT3fPtTEHV1St753TeJ2ybQqgpG4wUdNLZe8jwGdbQrFi15DkRqEsgroB",
  "key17": "3Uwfk5DYLUgyDPCy7b6y5CCP3jU4ACoHa1RnAirbVoLCmwkh3QVskvzH4UkYPXTAaDNKwDaUjKyrZj1NrKXZTBM1",
  "key18": "zAbfTSRAPio6Kn1PABo6Pp1uHWkPJxiLm7DHR9QhDu7V6dBJ3KHYDUMy9aZVHyhuFawTtRtaeZ2PTFis5uHU3Sp",
  "key19": "2NqLuwmEwqdwi672RfpmD6rrzW9KbsNfXDa4VePGDsQ5YzC7xmTBPRH76Fq2hy6MUnwFoWVBQxKmoHfCr8AhPnce",
  "key20": "4fZQYUzf2MRG7BMsPZc8kV1YdxJfTjJbRbLCjrsj3qChFiTUvUDBLvRZvMsgpzG47G1N3a3Fa4UGpJGLHFEEgWt6",
  "key21": "3u5fcwv6xXRtYKMGrSy1X9wnh2uLMgnSr59K6PXsYXS3DjiBCW4qTxLeZuMjQsoEBT6Z4UbeUVN53B2N3qVvdvd1",
  "key22": "8HjJpo44LX3zH61cSqPA5Y6LZTGPcUHG8CFKVEXeekm5vUYHrA1xsF3NwrbqHFGdV57VfGqCqQGwiGDKoZwDo5b",
  "key23": "23fymxhV8BQvSbQfkEig2vmHgU3HM5qe68TBbHjmGYnWJQaFdqkPSmyYL5yBa3EyKoFXhZavsAB4xv7CGMpBmHjc",
  "key24": "tZn8EuqY6MkmXvazHu3WcegKoEcqkxdTBRuj76RTXfj93Q21h6SLaufjhoMqi6mBmqG7N8nurtY9qxqSZQczShb",
  "key25": "4kvax1BfLQDp7meBd3KW1ErwG1Baakht15VN4GAZv2zu6k2Sa2DdE2Rymewm4ys7ty7Mh2ef1UToRQJANHnJpZid",
  "key26": "5ZMbzEnfmXte3kEHy7jRFWiECPkNG6DJ3k2aAUpLFyE2epBsPYCTA3AYkg6jyYd2rKRzAaDur5QR4JTSrBYhTBjQ",
  "key27": "4BwoMZ4z6nXoNsDcXjWpRtHZAENEAAUKHQkG5eJRHeK6ARw8dqiKMBosqSsT1iRTZ1uPueJKG4P3sKngzcXADAdv",
  "key28": "5eNHGYiTpZ1Sn7Dnbow6dspAmj69azktE924BU64GKKMCVFJGRumVbkykEgTUJ1iF1BrCHFdAGsfGBwprJn7Qmi5",
  "key29": "QETGnrmga6rLTubPPpSZ8eai9h4bKDrCAZtYqjHjfK9CyGmxtH3afRBnjHDJpEyfqdD1LGx7f1yeNgA5fswmRv4",
  "key30": "vZvwiJ1vPbBA73WZj4ajmGtANXGXzZPk3odZarTaVH5ui1dksu7AYdabjuqgeJMea1onsbPrRBphnSRMMsngJcp",
  "key31": "4cmBXcDiT93gENqQFmQeFt9x5Gbx1eUvAc88cdKp3fRxCtaF7e5DVU5or2txJM28wzNgC98FcqXuz6Uv4Ui6m1jh",
  "key32": "Evm6gPVwQahdK5qdnobeJQ66KmBKUHQdDmRVv89DEonDtyDEzGPV7ymtgevD6znNh4S4ocJYr4pvnyDbHAA6La9",
  "key33": "5BGtwy2ZMWMnJghQM9mZCtSjx7fKDYj8RvUxqsKwuPaFPkewiSmTxR5wdEEGyKoiY8fEBwEJdAEoar58a7zYwY7b",
  "key34": "cdnEEVA4qA7vZztgEZNPhHtwddf59McmciTP7QpuDASEvbU14XEQjMFaakJB2cKyKeT2xXZ85LutHMuDXFVLp5d",
  "key35": "37DTiVm6zLGZ5RirmpYc8Ye9R2aJFjf4ST6xZjL6EuJ1fFqrsMz3ywzPC47gmrT3zpmAqLqt2KedS7ZLhZyedTT4",
  "key36": "2CGXarhVqsyHjzUp1JjRHpiC8Wx72LnoF28t17ycKrhP4Nrrvjx5bGRP6pPCEhLpKfTf92oG5k6bRpwpATyRF4sP",
  "key37": "5eFS1LDm32iUhp4SU9jnKCYLSmBgNSWHigvSPbu43M3kLX7DwUKCSFWPLnodyEJtPbsvK9Li8L4SamhE7yJ6wRro",
  "key38": "gS9bQSUQTWh8jhx5xcEmUY2HR5iTqD6WzEN9PhUQ1ZNyzUd8bv4NY5ZyqSfunEeCW9jw9WNqUCRbfMMkaT5f3J1",
  "key39": "661TZetVUgpKNH18HhLoh7h8UerqbHVbSFAwYXKsbAYsJncHuArNRHnezg1nfMjcViN4Vu8Y4P8JkHjiNaWbFLh",
  "key40": "5y2PVoQevAH1C6u2aQeJ3pFUVA8NaKJ4hyPpAm62TinQJv8S3gmWAox4EaV2n9UZB15SAdpNM8k7o14BcuhV85dL",
  "key41": "2MKeNKjUcX9usmZXENeyXLcmA5PwQivBaNTwXh6CQZSSNiVM2ZFdiocUwZmiMGhH883qGWeKyBTtqsfoF5bumAUn",
  "key42": "je82g6PDkVLZYWjjPKuyKEAexU5mfbhCdwdZMMVGWL78DpVJhpLUoGmKdNvaTKJQiWmAyvYL93oJAqNgQzT1MfT"
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
