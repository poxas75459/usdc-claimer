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
    "5KqjruR7Px8xHjtFMSBMNNUUY6KX7Q42p2gqb1Tf9QemUfhSGH7WAvbJVPZsHAKvyt66vemzdZByLsf1NFbHUTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mKbMn9M4gBcnvRoYpfUq5Htx5zgmoJFnLeR3LSg1UXA9cvCFa9DCYx9cjdiT99m9oQd9a1ahe8LPJ7apNN1dCgk",
  "key1": "MsFR4J3GSJPwFYx7FKLdnGc6yUY1hN8BNcsvwtkKWzsoz4KQP1rLmYvrbyxCP8f8ETJnKNQ45Lq36qnKJmCN1wn",
  "key2": "2FQfdHvKyYbQho1sqXV5aMCTwSVRk9i5wJXHBo94QhqodhX2m3EHLDoFzFWTyQVLfG9S8W59dpqisQntavcgZtzz",
  "key3": "35pXGkG82URNavForT25jSdPiZUrZWPge29d27TiCh2X8fQ44mqhVSaSB5okgQ7Co5vD7BPCH9qMpsKeRi4xipqg",
  "key4": "27uaPVEtpuHJavq8Bwe7gZEWk3enyTjqH59Xo94Z9judfpxJjDTnKdr3xPTJice9y22V2z5JZJTQmNUXBVcQKfNm",
  "key5": "5wFPyUqgijZajCdsSsJgBup7mPmWZW4ekSqqtyxRyFkQz9tdqcWfUWBgtZEFkEmcM2tcCrUBEZch9Ecmduj9iTLq",
  "key6": "45NTJMHEG6zMwMh4SuRnMbzzF85fwJxGaSy4T16j554ddcNNpa7U4Rx4zoCNvWpPRwhpjPFCUeNtBpKpadpzmmgR",
  "key7": "3htYdJAVwYaoXcAUjUyaJ5ZxXRbocKn5a2DEEEUh9wYRJUtPb23tKNsWb4RUJDfVxkNXBRqVYZAxSiLRsHra2oa4",
  "key8": "BUGVuQwLKrnjnMpUShhXvnVr4HNhtZdVqTY8ahpyHcdZFqioFHc5A27psvYLtqhMrMv1g43BFGSuCmfu2zWza9Y",
  "key9": "tatLQHwNtPHBztmizf9MxKgC13VW1DQ7FTbgpF5FgEXWwebbgF4U2Sj2XUs7hDDypVqFV14epuKpY1af3z9GJGw",
  "key10": "3Xhc69qTmGouPvbnXfsEHNietFtChkASAeXUVGDoMBtGYusbe83ADZZShBGzgnyxv8oi2kpzvDEhGGUC2kKoXB2g",
  "key11": "4cJVNaMnQMsD5YKFy4DepXcmLcLQpAWrtnyAq13g7p4MnEYndbYohuNk4rEQXEACAyV7JmSgMLoYTrR5SCD3WtCn",
  "key12": "5rj5EkH3WKq2VksVfkpna5RRzEfLVmevhWCRjDcGFjCvPgrbBXNwDdKMSBRww5gxjUSSS37FTLPpez2Mmce73YUo",
  "key13": "3VCfAJP6wGkX95BCTmFGiVZSCLJ34sowWDHqG5VV8nbf3fVWNM5D8koCtt53dwNkkwQy8x2yM6CGzhFKAdDRAYsF",
  "key14": "4Gvt7YVPRr89Kge28aogYKUmp63KugHKDGd4AcxLNTiqyc5qcAqUaY5zcRZniSYz7MzKhfrsyGr6Vi84c8Sq19be",
  "key15": "2rBBKfZk5YV13i1mKqFFtpaYifDRACgPyrhn87p8ZWFqiUrxmoNLKnXxkQKjU8sSb4gwJqFQt75xwuQiJKKbPB5B",
  "key16": "5izKqGXETezTbB75zUe7TEX53aXk9fFWF7hTk4cLyxpL4MyMyY8zSQ2EBoS6E2jCTQvxqz1GmYfiRoWmtFYwbtQE",
  "key17": "iqP5Vix4ewBGMXNjKbXcocHyw4HjdZBPViiy1VhGt7ihgjQeQh3nv3eUt6JnTwJ92KjAfmQ7EbcW8uCMoiXL5Am",
  "key18": "3uTrDGBGnc3bpRdN25W5uPf4THcfS8e8joMiDTuCHEbSUNVuxm9pRvvWxiFKWZphRA2xXLoKQGBjsqPXTutFDMy1",
  "key19": "3Luh53qif1mfbs257veD8qAqWpZKmaYJa7RUfgCLCRQYkX3W7bRMUKmcoBaEr5ZbkU9LivabFFmLY9fkwDHsMD5Y",
  "key20": "reAaUvoDRxR7J1kTWejJZkGVR16TWVpnXkeYaDr8qqSdsgtPz9DLR5VBFmPZrkgTGaGidkKpCMi5d3EsRwPPx6D",
  "key21": "3JMimjB3BMrS7Pkp5644nPmxiqJTi4oYfBnejkZxgggdK6iXsAzUzWdf2EGjT3nrQe1mwRew1vCKbxAMvYQAoDRx",
  "key22": "4fV7Xt11PJgeAgW4yshgkhocuEdu6wFxGjW3yikuu8VzZqGzXkv1qMDrJiGbcaFbDsUD8Kttd9JLwSPH86p556ZG",
  "key23": "31JqzAwEdDKeQw4xuJhmWeX8cmJhCFx998oTF99WfMdbRnT77qPPHSL5CH9YjZFy8kXjZmqbfW8UYG7P42WqzBGZ",
  "key24": "4KXKXDEa7x1THQ58BT8YiN1Xhh9bozRJCfJtW9VCiydqE2xpQnvRoLKbcES1i3MiPcETXFD76Vxwki54Q2cCVxLq",
  "key25": "652zE58rsBhETL2rJBbV833363vNLP26RuUybcBuAVBS96PhW1GyZsuduF2qa3TurZ63npAWLbTfki3DhZqpFx2c",
  "key26": "4yvFQpzBjzReSsntkVfT5RHM4UyNaXLsQUVTBaS14ofnpnCGjuPrGHaFi81fm8uVk5a7fMWRiTcZ2uSwTZFZUMmb",
  "key27": "4TREiGDyuir2HataBFW3fg4XwReBnaQ8yPcGHHdUECicgJoTNiop912969843AQ3mhCtwUtQC6sjPG799SaQeLb8",
  "key28": "5PZgZYkC6JyLb1MtMCwmCS6BktdMbvxT8AsR9QvmZqNC1Nzz6CBneRUtk48vLqb5M4jSVPt9VMBr6NuhvaGEmtmz",
  "key29": "3WfrzjeSX33sSRBYAhGXFQzadxL9WvmTeaVGY2oZD4doxpPmmG34iqN942HqhPhu8ZvPhuHf9uBNoXMxMmoXaiiP",
  "key30": "3LGvkX4hmdnYkKDuNbJikoxJtRSnNbs3nc7d5JAJBK9MGs4D1sRrZ3eYXmkTFRAANT5R8EwmMr1gcdPCjeNjUazN",
  "key31": "7GU3hqDoBXs6vqTaxobeTQ2H7AvtyPQDXNNxXTxcCpDW6eZ4fywuE4ddCmRGRz7GAHdUQ8TaC7YTA1HYLCWWMRw",
  "key32": "3Y9x7m56gf2KCFoexco5mwGPcbomQ4MJLg9hkvgXytyMfUdQNJUB9pwzLUtLK39gPYpW39XyPZPP9MhEFoFJSrZK",
  "key33": "5Hz1Vb9GPvdkEKg5tVXcLyqtxay6CjCsFRWfD9wAD8Bzj5rVW8waUtgxD13PLggBiK2YzeSFe4Xb9eVYNacyB97Y"
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
