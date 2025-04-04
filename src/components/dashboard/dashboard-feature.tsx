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
    "A8isp4MqMfo5kiFZndJdd6XogQMLgDcsF1FemuUbovk9sW8AQF5HaSkex3s5b4cSf7HtPDBsi5PpJweJFr7fEEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RahuWsUQ5EwUr9J6zoUYvAPZHuVLgeP6TMXcsMZB5wVr2FTNh8XC7Podvqyz57BABqpcC8uuMUFJa3heL1A7GJ1",
  "key1": "33bvk2AvjUKP9PyRovPgqWBPvBkMcV4wKyJ6o1eyf7d1pwbXJaycCq6THKLwTssLGCmssA4tJQ6LLyokL1FyuCnp",
  "key2": "21PwnhfspjLrxowBmCmkWdTxxfDRBnAyc51RGQs2HJrs7Hu1XSCTf6nLuiAaNZDULR96uzaB3UugcRPL3mFTXqWy",
  "key3": "3Ds1PMZRyxVinuMhFSL7U4iaF47Zw9xhYtEWa8PicjMAmh946jaqLVdkCYQsfQ7qvAEy941E9unWxmUHPY8pMZb1",
  "key4": "SoppCuBpw9sUhUX2VqjM8Yba6WN8qEADC9RFUHAmR6vjMeJyVWXJigWoCV3aohLZk5BS9xJUhXn2Kr7jUm5BKbv",
  "key5": "3hqWMtFaQokoaxnAnaDFJob3ni79nU6E66c3BGQ1rcRqmzfmFsKcAgqNMdPQ6NxSnqUWvBcXZQ3HGob5y3fwfQe2",
  "key6": "3TbdNsQVcVN12Gmfd8Rh3baQczgifAjeJP5BBaoKNx55dnua4yZk9BWcJNtH4z6WU5hnb4cBSs7dCmuG5TNwQq4P",
  "key7": "U1zgLw3rs2e1yEPqRwVETHoad3Bsgth58bfn9nFZoEuiwai2dSEpoq13eRDBN8wHijTv6aqTUnUV5t2KDqFjugN",
  "key8": "51HVpFtwTSUSNLsypy2P5cFTFjbwJ2CRNRmUbRyDgGdAD6RceCb8ZBc6W5WwMFvDSCPAbsVeaNgZGfpLAAjXjPbk",
  "key9": "4iPXrTZ14evRxqWJgGKTBrNBsaCnbdUJm7WtMCRND7n2w6UFnUSvzb2owVtsRSnA6mHDF5jwhvq89fxULYobViFc",
  "key10": "3aCaJ8UJGF5iG2pUFeNh9589kuhQQkzWB5kcb3vUgr5jAEKMzVvsn2Ukb6CbSAgq2T4nEh1a45wNuT83UAeaEewx",
  "key11": "23zDGfCR1gqjqEnFtzVatSqR3qEAdL5SvGHKJbDsEqT1erpyKaRkSfjRMfzYKrpkUk9wDzvJ2Bw8tYcsT83pFw8z",
  "key12": "3e8rzxpPfDeV9pjzi2EVWaFNNDwz5Uc4Naz9GcmzKRUrFHmftm89UbTZp362st8N9xwBrWMogDXAAbsZbbnaC2uH",
  "key13": "24x4jt8Rr2WGxXCUZBdpEL1bAfXDsueRjNoRB6zCsY9DbUr54CXaib6S2CAcaKcnUfeVVKuCLCRmQ8isuPWPqLcS",
  "key14": "3Sg43UdnM4WHU8SAVd3DAvj5W92QoKGuAdd4asv5W7Je1tmMx6NYL7S97QGf7UDr75vyZev9zxJHJgXWKFEYeFCA",
  "key15": "gAjg72gehtrA8vJgWgPh5zbq2ddZRS15MEZEzxQ5eBfSqeVtGXkBnshb8XDtiCVuFNcptMAWGpGtShR77JmKYAc",
  "key16": "4ev8LnwsT34KcVZEj8jcDs1KbRUD4UoGGNFiMyPPsCRMPVABsu9zjSZwtsEoFnWiAFaS29yK1KsjrBfb2dU9ehu8",
  "key17": "wtAqWtQQd4qUv9XbtaY2C5Px1s7Y261bKjk49LdzhC2KXFo4mLUWcGTLzP8WnNmAmbDEonADsxRDWt8EVac9wAc",
  "key18": "4rGYddVxMpWJEuoYVcxxTSB6gANzGsegJmm1WmD3KdKLrgZMKKWNBn9nSHi8Kv1QUAJ7nVYrMCFqpqkEJQLFWRWC",
  "key19": "2KsqEkGr2hVJUVjZrnEaPuyYmEKLuf9LnicBLvXwbvZ1xRC3izbXpEbQEG9qHqfwvHJreyRN17HdbypRhqSAS9iC",
  "key20": "32jm3t6JzjLrQxB9ggGZ5hfMheWRRxU9JtukK5kGBqcHusyJkYBtQmJ5H2yMtdrcKXyuBPvQd5ijjzv2y7sjWFNr",
  "key21": "51wLbBSHpJ3R8Ud2MZbdKixqnMBWVxibM6hWk1NKgAQ3TNWxgC7boisQWrzci5RvpkvDKpytG1rBR4Z1XF6NZfSf",
  "key22": "3NHjxzmST77MrmeakT4qYqpNPeC4UEAsQSjz85qusLn2Xi3GLZuAVa2gVKwSyK5jLjsZU8QxwwSnDYsArXayHuHG",
  "key23": "2J4DRFbs3r9kuNTQwai5t8HMCfG6NZcy35gL5M5geR9FydEw8rdFzUHEthieaQPHjd8oe5UGQtcKKsgyJ3Y64jB1",
  "key24": "5S7Vcn6tL95B1DEeoDkKiQLyH4TuYnomriQAhcz2ToMrGX13N9yurinSFtm16i2nqwQbd1ccxozA6vqJR6gxtswn",
  "key25": "32jihEkGYHgjqha9z25cQbCkChCiMqyaGmERZeQWEbm6FygJHm6YcgNM9T3vQzM6hxtCTWs6Hej9cXei3eikhR8z",
  "key26": "CiqZLai45KbhXQmuTgY1RPfpvEoTTM4zdb37o6vPPRg6ePqX7FxJYch3s6QiTps6GefK9EH7vsH6MYCP49BAjN7",
  "key27": "HvP7hNy3PnGoxwEUPDpr2dQPaRCZfyLYdGd551DhZ4V8xySiFfCH4iL1x1KZWrHdsL2LboG9cKh9KRo7D5BJP1X",
  "key28": "4GwsZoQJGzsAkJqH6KM99jyQaxL4d3bLvVfdYnnVsziqSb4SQkt9smYHCNXVK8GNGLs38VzpuNUDjC9WJ2dFVg8f",
  "key29": "57ygYpMTL5AEg6im4B2t3QCinxS9r5TVaEgcLKJty8r88B2iwKVmrnYTmWor75GaQ2xAKgco1PJ2D3a6KqGLyewK",
  "key30": "4MUvT1T1z6RoWrNQ8Jj9r45xQ3hD79z43Mq7zW52SS3STmTa6sug48YdyzcXFGdRS1SPT2XdfyBGXS7GB7mXvnpy",
  "key31": "4U3Erh3i4dUMDBFoxM1aGhV7arX5pBbYogLR1tQL8ZvCQD4VMYobFWd396wMn3vLkB1nB7q2Knj84vPnzoZ7ZK2X",
  "key32": "9DP8hiude54BS7ia4YZC7RUgNDqFL4b9yY9uPMjibXJemMgq5ZgtMKQ2fqNauut4odNwkrixwdwVT9HFta7zpYX",
  "key33": "4M5MrP8j587bw61LzfWNK3XErWWmxvD2VMM745SMtYGwsjSnVYxo4nQw5iuFXW6bRwxPdN9UtiSUAxzt26SkCkTE",
  "key34": "DNss96me86kHQGTw7XZxjr6RwKH36oLLqKmhtSqicYYkPWFn3nPruRaEPuSKPAUMwBEAfnxoQCYZ1cNkpmjQknA",
  "key35": "pQTMU8M5ezQJW3DMGa6W9fwDxeZUWZfiUpowuq28TjRvpGRjBmMUAZAkD4VMxR5P4GidPemzQUDkn9iAiivyHmz",
  "key36": "zLYGuFaK4LwdGqHozivrfPphZFGNkedHQpudbFC3HMKSTGCfXjr7w9uBdMFDw3aaWcGkjdhSLVLFGqoT9soDhaG",
  "key37": "4BvNrEnRAUsqvQRLH8WsK5jgXPo4J49CT8in19djLm67g1SoYxFsPfQTaJWG3orW9wG3jmQciL6JVvLba71MVbg4",
  "key38": "3bFSVx3DpYRpRs9xYLWZkk3urfRn9PWNX5cPLnF3hY7VysLV2BxAiLFMRFN81Vp4EYQHff1LLVySLowRELDmqELu",
  "key39": "41AcS12dxpPp66rfiVfhdh56DzSFSBjHAo93fBdk1Zs35z5AGMsfLEcrNgp584XhA9RT6N6jqVLmhKrgnL8fU6Ft",
  "key40": "358AnGSVjpUbtuzsj8onE4BDquk5fKYsqT1nnDegsMWr6P7S2JKAQZAvedt36KnVcSWrYDAwEdJBJNnJTFsYuo9t",
  "key41": "5bapimLvdAMqUqdGBc4RFqxcxyY7z8iWrg86brbL5SmJBjCsRkZtd4rR3DojJzPYnuLAQ3wn8DAUjgnWSNNihcDg",
  "key42": "3PqsGBmRHsgCYhZM5SRB9z69gAVE3eBoSaKeCdHeXp8urdZTm8QwDdjn3R2YXReLU9MhbzAmC6ApkKx6tWgwukwN",
  "key43": "3xxsMVrF3yJqUYYvZF9kzpahpsHgLds9CR85YtqyvcL9epQdCBsSRy3BZkGxPzAY8kzCWMLDmPpEo39mhNKDfWt",
  "key44": "4kLAYVGaJL6Pe4ZGvvQQ6U1wETmN6ZseefgLf2JaSy4gu7pojzxcAyD9ZWakxWUWqFsD4TwU4WyAKuDYv7NbVa5k",
  "key45": "dUeymtgrZCSNoJXJAhSSMREr5NMzCeXboJbDj11EfX9yDe8oCrwicTxpxbfoLBChyhVFTnPQTwaEpgoh2Qq2Jdf",
  "key46": "2XC7ZgWkiVw81p36ve1YaMJ3NLToK63cTi2GPfKm8hXUmLc5JKURBFMFtkHcY6Jo2WpbWHTKamTKTAAQt1K9XuVx",
  "key47": "4h64WteX1DUuK8D3CLKzpiqRZKtHVYZFstznajrNZmg7wDwWR7GwDMGdLxZdzvuz1tkcEXZnDkkwrsyj99uBdVmX",
  "key48": "mkqapPfKonQiSo118QMeXJ9fbAmN1FjCS73FsbUZg49zW2MuFpeD42CLEHBKL8zyBoPBfd4w6J1Ti4JzDi3EtGN",
  "key49": "5YySgyV9V42ziavtqbX33EfXH8FiEtUJYp5eSCvC2SHdshBGk2Pe7rFWPdpKsB3BucgFf7bsdh9SShS1z32ctag"
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
