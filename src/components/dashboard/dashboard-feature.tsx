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
    "65huR5Vpy31wdXGSD9HTnSTBwUf7mGJb56JsEX2YufmZ7FJSsoEP7KuLQueWvraBy23cBPSCHeekjmRksjKGATW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uEWBmWiPvknH8w73Rq9avKspoXtmKBSaaqfc4rkbXDp2AuuYHzvfiADzFhd9bhTihxDiSNV7NncS4sP7ALKhjVE",
  "key1": "4bduVbjjFfoKjk75kSvkawqbtkjik6Fp3i3TVHRTbP4ekSfKNv6Hr4pE3JcdpAuq3AfzMd7ZEoxWFJMeHkyiiP4z",
  "key2": "w6jTvHt1TEGTPkRuqdxeX1Uby4YtZCpjBN4Lds3eic6wUPyTBLsfoPXKsPLea2JeDG2hKnN3jg1M17Wih1Z6zUf",
  "key3": "63JK3kBPWfdtkfKpPdx7nfwEF1ubsGauZdHq1VpMkEBtAuWMv3sJTVvuF75DcWF4sLygR1E7hQUTwWWf1hLQZAYH",
  "key4": "5jAvGgKSWMgQ52GrFZRp89jvAHgyCNv9m3u2brJNHjraWESnF2naEKwLx6VVs6QX5GuvUzdorsPdj2qaFUr7DTiT",
  "key5": "2g1o6dc2kjSmuoxMCNdCQKi51kgMxkKJfhLvH4V37E3dRS1BaahgGgA4kCazKRPK1R3SDhxpMgB7PE8YhJ7c1H6g",
  "key6": "2SUiBLyxRFuA4ACMAED8Jfagqt5xXarmBZKA3mN3UGkwFPStkRvJwwdAWYMPRQqYceiT3WMvZaLZjTcaqJwbXxTe",
  "key7": "5KnbigDgRWvFCNERRQK7qDdUW9v7AjukjonPVS8uCzqCugn1GmM2gZL2jG7KQCkBv3otGmgKNFhBezSKpN6BbMB2",
  "key8": "szGAp4MAnVsh9cfNJK84vBLqHHyP4RwN6inacU8KhT3b3XSkpxazK6TdadKCkcsbYmzPh4LAGuA6YnRTStA4ZVV",
  "key9": "4YDDWGnn44LBZ7nXYYFzGVFHMyfhUpTUxhZuTdjJr4BGBHhGtPT6QKZY9YLAyFVMqDuVNmnD3mZkFWEXBnAnqjDf",
  "key10": "4cuuQvw5NUVC7xcyTw9E18hDEuwQaGDJsGjJ3U8nm81Lut6Rr8rjX6yFF9AFp3nEH5CRnzSEm7L3xvKvtj29vGPw",
  "key11": "3KQa27XecWYc6NACFQ1UMCG16f6Ym5Ee4YsNcKm2SikDTHuRPsJUM73oQZxQrqbmGFGBpQ6Ci9nT4YC1KJiZTRUm",
  "key12": "3bxtA1qWAKGyAnTc4uuJtGr71YVTJQmyD74kMEdyVP9gNLm6VP1kSENLu5hJXvceoQWSKi2TUviCJCTfp2XAgiih",
  "key13": "Qm96TpESBi56JSemWTucKpX5LwcxYBds5HtJUHAzoFu49b7w1DcTs7j1G1mxRfqeFHZqH86o1HXsx6JnG4McAJu",
  "key14": "d28pogZ6vs6XhJX2QBv6V8q9AypqMbfWnjo1aYTbH3nRJ6FRvvh8ugrzAQNLfyaQYrQdRZX2t5Z4hs9VfUTYoAw",
  "key15": "3oxRyzkCU4XEV23DajfS1Xa7BaZFYBdupgQtAa1apDg5Pjct4h9aK46thghiyo3rgYsB6SeotFtbpwvJGY4JNCx2",
  "key16": "zo92wVYstbs1pFQ6ho64Khiz7KtRM7tUrMepDjDDZ9aRdkaqFEttsmDVEqFMKTgMeaRqYzYiuirW3y1A6pguRVu",
  "key17": "4Es4KQmrQk7G1yCJYVshG8xknifEcj3NMeFBsKugo9FhFytTobrkj3MAmYWbvchizXQ6aUHwW1eXrz7w1TvdHYAQ",
  "key18": "2kDvn7LecapLZTJXrhWceHp2gXoUBnczFmQqMbi4S2ejLjucdCnstBgKUa76dJ88feyTXDK4cSncYVJTBi3jc6wB",
  "key19": "bBLSGsXjLZXYtZxCDFBG9PspshKrmYvUWBj875jfxKqJ7KwDTEG8ZX5QFJgtWhCkB3xgVVUyaHZmf6RHv5PkLac",
  "key20": "3DkYZS4ptkMJ43AbFfxB2iKkUz8nDoXLcX1GTtrFNtjqUvEbgRvTk7493LW4qwb9Lf6efj1qbVBdCTpiyuBMPacn",
  "key21": "2BJceFd5ARokE8RfYUeeqHz5yXNURSNHL8wix667cXN8HBdbUZ65WGyy9xWsZHQ8fvc84EigmffsvN6c3AQNRgHk",
  "key22": "3smxCaUKCbb6MCQDaq7W3CvaYi8ZgxqY9iSbCDSBMUCLPNyqrp3mV8GxETQZf9ZsbJs4FYc4GoueuyUMd2iT3AAe",
  "key23": "2LZJ4piLKKBAmKsbkh93Kqiyv5SBx3Kfyhk5pDzmT8Zxed35uaYW6hNoi4atXqPEPasYrvpHeWCtEsKc1BbfYsFt",
  "key24": "kJVu8hVWGcPSBWuWyyW8B5s4DzVrEJYTVK9vchchS8rPfxq4rap1t34QtrXJJuZNY6BD8zSf2tLKYpg9nXH3qXc",
  "key25": "USK68thCemX4X8idBGK2rB6U63rPdrVwQQdjfqMmsPnzbw5Cq96kFPgXDBRPcmtMhAdypF8hT31JNtcNC6tVq95",
  "key26": "2ncNxQidTKQb9rEW4eKgmGyk8Ak2LoTGMvUShjVSoTk3ftPfbTuhpmqXdtGCDmTPF57ZvudhdzSK1TwKGmKG1whs",
  "key27": "3ugXmPmQoAT9Q8o12M62FC464EKzP9PnWRzJHcXShJ4pPZTRP7WVyeAqMETwQ4ZDgf8iZz7jwogfiw92jdkSPVGM",
  "key28": "34Zm1QrhsdTJWRctXUbRFNBAd3GWUXQG7QgscaqmmPfMu9SmqZJto4rjW3XjYyXx21oV72s3UEKWQvCxaqxQAxpq",
  "key29": "4MCgCsmbiKSttRCoh2tWayQpFA2wZUizBPvZXGSXbyhwBKgL72PKVNCZ64FWfzxAg4UaR3uqYoWTmhUSiCVUvdug",
  "key30": "57BqQc7rqebdvXkFzgPAC6cgismzsk4hYFeYxqdaLDM87uMxQ34TnmoF3wTuSJx21hzsf4fL2zRUKMXmYYoRGCvk",
  "key31": "5p9Z8qjVApNviuiT6Pb9uwRU3D6YerbhCUYxJBCpm4WK4X7DQJFPERhoPEeatvmQ3NkL5qrfrCoYVskpdJMP9ZDN",
  "key32": "4hfPbfF4RFUMkhLSkPgtLivQyG1E4ffJmMknBedgtsApakBuPzLB6wZRerdy8F4ANGjz2DqfDg89onqvMwY3shDy",
  "key33": "535nRS9zFtgP6uXd9Lgnzw8dtgnF6dnASXKo7FUzfjKtMM4PPXAkArnM1pxmQs39Fi3mQBQyJiNJJg76SjyLz5ah",
  "key34": "GaYDiEetywFGJewwfnSE3uJjtNKSfU3vJu7jyqAzik1ksyuSLzC64bLt1t5qT5725diqdNyFxfX5z98kAgx9m1J",
  "key35": "3GNs5dHXV1zLBbnXdj3PdmRWJsWfxW1RbqjHdb2TaYKUNr9bjCXRnG1Qypms7U4a63LqCfrCKw1CAZ2Vtc9ZPJCe",
  "key36": "2SRgGCJJSxyYJwTBRBc7eTevhKJ8XY5XEUS6ME3Zgzpu5Yxuh7auSMap7Hz8iXqjGSgoAUWsbNyqidw9p77bVEgo",
  "key37": "5cNrpvGSP5Wy3ZkaVsNUA1onfaETJSo3fxNpamDutHso1TYcHiW2UBD5feHYmPgEVc926LNmMDLWGmLH8iebWyik",
  "key38": "vefDeAdhby5ooPNfDM2LDEDYrpAzd2oXE1Wn6bPuhP5Fd4sfeWDgHqFxBRfo2oPrh8qwUgzuiS95nLYVLasoXvj",
  "key39": "4vfPJBGQukRpXdTPwaRLtu8c8G8ezGwUFBQST1FpDCZg3qc8EhNx5DZV4zGCoFZFpbhzLCajyNbsKioKjuoXotZr",
  "key40": "623x8prStxia7f32h1Zw6gG6if3JvkTWbZnSjG8WokRMRrc2YaGrR5eMFHaXF5c16MW4gjf4HauCNUue4mshni3p",
  "key41": "4UcEVhYx7ZGhxyEXvLDF5Q4QXmH1uHTbGfmZCczjqB3xmwxg4GnRaiXAP5YRNPuEX8zFTbVT4SPsViKEFGHcCTxX",
  "key42": "4sgyGNzjjfKKo5zMYsXF9xaDFYy3PfRzejA2jNr2Pk96Qi3bWMsqqb8YyfAk5Qg99ozWxGgN7yUa8XY34iwnmBib",
  "key43": "4Hr1fmByaaLvNe5bsmMMKJKq9QLZbi63UKun3k4oGDdBY4rai2ZxjzLcgNWFy5d8dPripHaW5rdqKp7JhcruZVVY",
  "key44": "i2uxKeszynsQdzyWrwFngSDrSY6SuQvkaZcQTKArUtJdr9i4u4Rbks9PjRomk3oNJVvFwN7ow7FH3gSfGxqCM4S",
  "key45": "2kNZv2cBKPhG4ppSF3ek82aVpyakFMyPbtUycQAMTGwXQcmrKbfXiz9ydWsSssJAgYb6mfLG5MEyhWxcvCfeQUSX",
  "key46": "4aqoKbDfzbcoKb7pzRdsCWZb6TYQ9BikFiygRAdwto25tQijWqsnAm8iZhNSkDRimEAh1Ldoej4vivgBJ6s9gV1s",
  "key47": "44aehaKT7MJjmkPT6LBqBknhwCfd2PTfs3EWLMbxngSn7aSL7pnc2Hx5dBUmuhPzpQ1AAPr9hnWjanXSkAsaz683"
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
