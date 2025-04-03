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
    "4MDPsmYUCBGGLCYPti2VouCBA4VfSeMXouoQUYQ8tZbGETSWWVPGhVoYXsekCZuhZS9tyw4TLHaiV3K7JwBSH7vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58V84rtJRfG4LDKXfknRKZ7oJMqc6DpytWK6xkWtSkXScSMp6Mk798BZfAaXwWEcaapZLj4V5xcarasX72cN2qt8",
  "key1": "4rn9FdDrFc82R4yo4S6qHeibu1Nrm9MszSXCVjnPg1R54Tui7KoHNVv8CtKpG5HijMxXvouTEP2GAn3YXmR62tn6",
  "key2": "UeEy4q8QEApF6MgPmvkpZHS2wBjPB9PWXycrkHBHnW9FemMwoEsadfdayWx3FVU1DzJ9QvnktWbpdyKybCg3Cnk",
  "key3": "4dCmakmyqfgeZLy2QGyqM1wCS8f6GHpVg2LKQmmYqT9QVZawh9fBRBd4bYHPcza8m4bJA3jHBRQkJZnJnLxxCxC6",
  "key4": "oTfkErX5mjhUL3zYSSJ794u7czG3WKMN4nRJ1qpr3mDsGUYZfqcrGjZC98sVMSAJ19bieDej5sYMsiXHLPh6K3m",
  "key5": "2q6tHrnQ94KvZY1PBL1eLYoTaZVxzfXqYaUjgxPLRccZWgukTuyRXPRVTSi1goDhsJnneyRj9oBAP1SgtS4YdKDj",
  "key6": "56tKfHzuG7RdVwUHbEGroZ24162Jpydftyp2cbUpS1rYNcqpBzxYD3kJ6pNcSyaWYL3AGEZuH2XccwfS6jQex9Fr",
  "key7": "5efpfpsiG42weec5nPuWMnWNVGiFfpBM4yPKsw7vjWyL2pkF8sMgpMTCe3FJKWapAxx57JjdfwqB5FWmPYYDMmxo",
  "key8": "63tqWyAy2WS6iZjCXisridf9Y6QZ7sxizRjzhHbzn47hRg7xphQP2Ln5nRgXx6rrUghGHLX588iRyW2C53QsszFD",
  "key9": "4iQFU7YLU21BSWd8HWPuykLqdqYKZr2mevkagp5NqmDXnCGWidt1w73PDEi7my5eKx7qnmGYjstkXCZUB6ZdVQTE",
  "key10": "3sSD2h7sxt6FJa17iGoR4BRkmwcHGu6oSC1NmKDzmsM31rzrE91e61N4LF4VibBDB6zr4XY9248Q4FxqGpnEK3TX",
  "key11": "634cSBu4PaWybtK7tJHf8dwC9iG12SmQiKAyVD7VxM1doS6QaQETsaZAbKGF92qh6QcuDkFaq4ou1pExz7EipPsT",
  "key12": "5qjhrSdftFxFhggguKR6nUx5sCrdztGB3ajKFNyMUuCNjg5zUsRYZT7dFMbwvhZEwFRNcJZ6aLzRyT617FN8YyPX",
  "key13": "4xhcRPiiaMjdxXgNYngJqZKDX4UvCDfgKJkzsgnxhpRT8Kh91LAfVZPnUDo1b59nsLNtZL2pwGoDbL4p3qSCCApY",
  "key14": "Ttk4wTz7r9opPBJ1KXwA89g6CcVietjwXFDbihoxEA16ojjEGGpsxKkhTqzdD2PJWffggJJw4x1mSZ3Ay7Q4Ubf",
  "key15": "2yfAmCDqhfa2SWkuzm3fe9sf8BDS1uFj3STaW3ngNUkudMrQ12JorBabPv8oMfSKbxFA78KEdq98sRsKxevwi47X",
  "key16": "4aqTWSTcxTHchKD6G49yw5gAuzhVn85KEdv9horEWxJjqseSVyT4pQWML68mRqpNTxgqK6YetPCrCZWtamSf97D8",
  "key17": "Wz4bUKCtTRzzvFU4J9XU7VrmqWUBXwQrgGYYuWWDWLEoqjHgmDZ7k5tHXE1vkpkUWM7mhQ8pej8ombG2CBWENH3",
  "key18": "5X8rmcDFYKWuwcgTMiHg3Mgz4n69SxQmPmqFL98NZsqXRycPBgma36HP7JEr3zuNBPsD227nTkvxfbpZsP9xdosR",
  "key19": "4EPP1tmBk7H4ZMrdsYMZgoSQoVJh44T63XFTvZWNyvh4ARTTkUqBvDwRQjttsaJY4sHrFE9MrPpL6uxt3Ec9Dqut",
  "key20": "5RW4F5Co6gTHtkC9cSoXvpxRchGvXYSAMCpv29kiw91ZvTgQcaTN26AY5KaxNZQjjHZN3AC7AWQWsYR8c11fue9q",
  "key21": "5Br8QpAJmgQgQTn2S5J15vHbNAqRjLErbM1JqGELVfhj1fXaXDEbcgB1s6RcJSYUrWBFMvZ6SBmuS716RoFC1SjK",
  "key22": "7M35P3dBNQpckmAyrs7EwKGcEk1b9AXGzWWJ3exjPDRuZFdYioXjbixoCa23W9Xp8RddNFF9jn12BRHyydnxeNa",
  "key23": "4G1FmDihqDbwzmRub5HR6PpWiwofXKB8wieJra4uZvmNsGC4kaczzERfV9eyB3SxswBZ9e9aGWrBPzbtMVpmpNLQ",
  "key24": "3rrn6XV8Za9PjSCQzFMEmPJ1wMxVtZ5A1ckeV7CKrg1ffpYNDYrkJKaDE9RVcU9KthGpzkvxQgJTJXknEDWUSokB",
  "key25": "4mWDyN2LUx2iheswHPsbPmpJscM78TUq8WqSxjexYG8Fo5jzyggAe3UMsZLgypxWWg2QcrYVHrov4Y89QbGX1oNP",
  "key26": "2eEM3sAyyvvkDPxLGmNYfvgtkik1ZQVHUJCivYRNGxSXrhuNNsZKZgERYLUs9XgsTuMAyzsjMMqTPRnfagUTr4nS",
  "key27": "5mutpPTd1xKUdV9PSAqxs3ajRhXeFndAuQDrobbP3bduQd3L6xYn1ZqsMqHqRRys24CNsH5W7nnvWLjjPHZ3Lpe8",
  "key28": "2B6S2CCECS4BsYV9exp8H8LApeT26hgWuBqQQe97PDUaBpRpFoQF7P1tWhw7TAQExgyG8Rs6s8pXDdqrf5Mef32H",
  "key29": "4rAzRYKi9mXV8BTx5PYiEdAngXFukUiGFgYHvdUxYg8nLLggf5HcKqV4AA6WDysZjC3HaCD3YvqooEcTeGPN7uwR",
  "key30": "5b95AF2iPHTw8h5Xeu3xhNQSNFc7FiDeGAXKV8KxWNftucL9vaeWxQ2X4UpnBY8Jvsn6E2hdLwhBtRFupqLUokxD",
  "key31": "4PT68v7m8J2mf3Ymq5eFLLYLtk7rs7PueGt2i1KM6p7iq2bwgau8AcHk73Y7iEkuUYcFeGf5sxeWJJ2H9yyTBrFF",
  "key32": "98pgKN7XPvPDtUXj41cqBzfUpKa2qdQnnPnjf7n7wN1twr1pJdyzYrD3EPAMUWY8AXXbimP7ajJUy5HWmSfJxNF",
  "key33": "3oUqTrfNDEtF8kMu3Jx6wFCBnG7RAKXxLyvk9dB1Es6sC5mqCwHTU36rzMWAyRi9KmwA4Wmg4QHp4CLKW4jps32w",
  "key34": "65fmuyNuaDnNh12FkRkQMa1tyJywuE88e94w5tP27vKS91TivhL5K98BRbUQfJWeqpiB84DZW4JZaa7JrhBro4dy",
  "key35": "3yzqgsEWieLwiL5ps8GfNqh7Uk6boEaGjTuBc4WTY6iCWYovWFeRpAB3yTtZQU4ePzS7thjKRbqgYwQCyKwFPatV",
  "key36": "2RVfeKaEQ9SLhF7fukhKhob5KRm831rEBRAThvSrGoZMg7brk8tctzHxamcvr4dU5mpzGmYBmYbxXD6we48xibF6",
  "key37": "EQaM9aR51UfpLYM4SgdA3KSKfMaWsoNRrLCfiuCnCaz6insyVqeT6huxBn5btovfhMe2SvmpWTmeNKipTdFJpJU",
  "key38": "b28YeYteQEJfbWZgcet8TwiQbWZpLiHRa4QKp9v3YDD1zqJHom7y49Y45aP8yHBd2UejrRrV2J2eHAWsVzGb4rJ",
  "key39": "4p3aXqQp9KXRMayPeQHimhwY1ddZ9jPbcAcAZaX94n7kcYsd7A5pHhcP6PRTub9GGfQYgJd95oNTLk8MtKmVgfJa",
  "key40": "2pyNDnqGJR3YrgL3HtGkczDhNAgkhJbbTsHrCFSysUjGQae1fE4pa3N4HCus282nMADehKGwuo5qfSe9YDMh7UwR",
  "key41": "HUpBmFA5Qz3j5RosgiJxotViQtKSLAArBz31bZD8G4Jnp1Ji1D7Zp8PaFYGEje6nshkppdXmkaEL2hfBzeV8wuv"
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
