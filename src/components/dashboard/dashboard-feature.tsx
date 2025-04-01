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
    "47u5swrFtc5rDJXsogqrv8fhVeeLfhTA19sUBWRLVxYWPZTZVRrrWqhtYPoiRXdorY2MbBjEkx55ukLDdMz44t4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mYbALMfZzqg5QMzRifZXGuZ69eiXtMEJSnyuxyiy9XjmeWFiTnDHYDwof6AeBZM5J5oZ5p1ShkMhdMcjyBXUnKP",
  "key1": "3Jp7iM3avSmWLLyQKE3PbTSApZsmYw9QcJCggK6uMqsHEfL43LWuQK8kwZnxd9uXLLWfCHMGpgan27LiZCZuwzja",
  "key2": "dTwf11nCMTQv49qPc29gTiTQGvZnciMWeRBUvwCJzu6AwhrPhcXDYkPV1eNwnR1q9pQwFSFSWo8iUfw8cAUFeSJ",
  "key3": "5SEaoG2Daf3TrFdrrg7JiYqEzvB3GNKsxuQh3Ce5KToq4je4adeyk5oR7dteMF3o2uwy4qi4jUrCdWoapTkH5nqv",
  "key4": "4BhD7zSBM3u6qFfGPefzyeE6YPMHyFPCVcNZskCzSsr8fTJ3GGTaM2cHRPbYzfi76HUJDuFTqpWLt9GhKw1XZdh9",
  "key5": "4YEP1568FgLEiE8ppQn79yFN1vqpVGHdsxcNhjXJYDabqnQe7V2rfrDnLjQ1NpYNNt8JQ6iyBrnVKsyhbXEgssER",
  "key6": "383b7M133DbbauErwoGyNCepuEvkWcEPa4LyKaYLtBQEvGMQcxNm3m9eAviFMLaRoCZ2W7UMdsToJwCTfrrDQF4D",
  "key7": "4FgtWwwXeeTmYybshnQossf5CKTTcLvdT46r3SGSjbdNkU2yC6897Q5Fom53djaBqUchZx5rgKYodTZqR3AkCcLf",
  "key8": "jPVRETj4bZ3PXyBEqUsqTLox4bffMHkSw8Aa5XSG82akWeU3SgTuahUihRbcaJGmMFqyRC9r9uGD48r9LoecZ5i",
  "key9": "5m4Ev1RpF43CNAGMB2XZvTsAoyAGujcdDDmWdCpWjSgbf6ccJrTdK6mnQHK3afs9b7tf6VFw82sfzS4fCWfsBJsL",
  "key10": "1DAoUoKDgDRjji9ExWiGTJM6rBkt8wrgR1Eh16o2EsS8EuJPQHwrscffvDPPcScQwjtVd8CMWgrn3FQduiQwudj",
  "key11": "2dPtu7nTUragRd3NT9tmMSeJ2a51SpigjXv75JDj2Z81UrwVMVKBQjZdaFzcf7WxH7x7wCqx1Xh8JXcrAsxmAhfx",
  "key12": "54PfUD3h4JtWcDDtFEJgkm2g9AK9PrAg2ZeCmo47UZ8eP34Kw3nuBnWX9XLUqKFGTVofBeBCp2Yo3awnk9Y6LKyF",
  "key13": "57JNLes6bW8yZgwNyh6FdfBxPagjMwdQcfbRyUAuwmSbcM8JfMNW2sTJpJeuPb32hXydxsR3kivetuwHrc66APph",
  "key14": "5f2fvvfy9scivdCKCqbfbokmdXgKzvv9e7qRv1uEF3HC1g5Re7jLuz9ve1XLLRJo963ofo9c4u3xPUZVAbC1fdd3",
  "key15": "2W5M1UcucHdnHkX26q2CBShUUwcZXhdVRAKvDTciaMJuhMLZBEMA3Q7gHjCUB5au4kQ73sNnZbPQpEMgvfLMxZqE",
  "key16": "5aMcHfi6dvoPknNQjdtHfSQAPsitZJ2Vd95XbLkPM7CMo6f63F4HuxrmHVUiRWjXvFmwzbTNZQ8wgMQuUBSBcuSd",
  "key17": "ryogUdgTsWu6ERBdxJ1S1nGEyAB1m15rkAUidFzYUU9Ddt6AyTpNrvBxpzRbJx7omabmtqYPm84W2BjvgnGYF8e",
  "key18": "yhM2NapzqLZHRHaEmPq7evvrJxUzbHDoMamYwv9213AsqpBsLAyR29g4vVUKGWS9AVEEoqGgKkUDwYuxx5VpHUW",
  "key19": "2rgtMgiY2nQUvbAw8x9y1jaMGQC8Fnotk8NQK1JPs36vX4SdYbzPCaA1ECDaYicdtyTyL4o4QYrexJCeuLnpgTiS",
  "key20": "5SiN3qKrvDHF16FESkeUWmJ1yaFu32nnMKWCyg848mufNcYzWZTEExdBkHcLJLxj9g7CBRhHVpf49VysJBv78Gzr",
  "key21": "2q4o6EdyyNK3xckJFKopspAgExNb7Fa9vWHsTTZEMAoTJxKrGiCoi6oqUapn6qv4uuk19WJ1f88yrffESSdVQzGF",
  "key22": "3SGXSEyEnCAmRuy5euxebi9k9Dswe5ux1CLxFFAVMtiQT2Nmi3NpXx1S5oyJEPzjSYCGZFQJv4a65EP84w1Mhb9n",
  "key23": "2W1WDQkCVe1w7MUh93pHtaMgri2PEge94daQuS1kbobKg7umXBKwqn1Uyz5ZBNufB7cpz3C2vKnbRH16RE5nyVKV",
  "key24": "4hUKVyfB1NuNDRLHpv3h42qhGVyLYoXtS7r2rc4YEUrRzGSwsBpKTqBkGQkhTxjv7ej7c2aRQTpCfKVtbLY4iZ8W",
  "key25": "5RFw98vE1SbhvnipDTLVJzkna54meNvAQKNPowDPEhq2n29R6CVsBHA5GR5wsHuSt2KBqrKztBCMjRu3UPG8quER",
  "key26": "3CCrocmgREhqsxuhM4FmTgs2CHvJ8uTn9DhVNRBWkrmapvX1bdLtDnpoGgDTwHhpPNemak6XqH2nfFNyf4NWS3A7",
  "key27": "3U7Xp2eyz2UZqcuH5vMeENXs9f14uP4ShAV5DSUQFhvvDhisfRZ5FAsjhzsxUDnn2YvXTQyqSwk8BvrwNa4kLNcz",
  "key28": "5bLMjvgm4ZoZUKdq16ehNBB3zCgCXSj6HWTVkcSnZq7tboqGjVp4q2Z1ME1ShN448AEeteUZEmHCAzgQQ3KZaebr",
  "key29": "49ZqWFHnvSF2TLoWMHif1m15NohXmfWZqauihWN3Zq4fdKnzw66TgLfDmhUC511RHgb2JGnqGad9XB2SeS451yy9"
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
