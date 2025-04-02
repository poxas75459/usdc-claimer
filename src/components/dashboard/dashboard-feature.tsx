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
    "3uUW1oeUgGPgjj2sxGQTNF5AVbmU9GL1kz7ZNpuCo2ZwaexpHu2Hd5i3sjSMGcvw5e55zKMS67Yhu3abojcnpWuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xLQEpacWkTgCGVWJQjKHuhPP8p6cJJbABUrDMsHXJEwW5e9QTNH9YnDJxB38W6iAqPcYFtPfpwqziSVGXo76qEz",
  "key1": "5yeWUX8bJ9LYEGdbab18kXFGXsEFYDwcHG5GMV9P4dEyY7VmreT92MTQeFYnpw69mx6HdcxhMXa2w16Ch4NDwx9g",
  "key2": "4qzpRR214HYGvHCd8M1qTdFiPv1zrJSTLyvRYnhRE2K4tCwayscD9HriDEcryu1dBApFCARX8p9zUcJAhgZB3NMk",
  "key3": "5yuk9Y3XS2CsNDWT5m8d7Jx4ZrG7hRNWKXueKuXeMfswD6hBv3KMHCkNssnxrnbM553kLejLboTgTrzeyoSa5mgU",
  "key4": "Vzioaq5morigBsF2CVHsTyDzwJtwLjLHdeJbqqaZZP7Z6EjFjR81wiQd9Y8cYxw19MgddFMrgRMyXZeUeEoTCNj",
  "key5": "4E4pSsbVwdR9o5ifBxyNjZzpzR8adSVHJKi2op2hnQMDaVrHjA7AGq9Qb5KnEC4ZWpLVd57LD9kapbVd6tTvPFBa",
  "key6": "3bJsSSxonBNUFLJva6mRxTBn2yfxfafPedq7TpaMdXDWLs3Qqtnt44L1c2JrC8n9AvWbusmEzbDDQKHEPkLqSXKZ",
  "key7": "5dtEyGMToeYehERacz7Xg7p98fxyHuXtcSqJB5NNJvFz2yEWG8eMpiTt9pSddNCH4Z8ZJhbwhhkGQftLXagx8qYa",
  "key8": "5EB1T7FsNd4d8Umdf28eUBS1axDmzvRsKimPnwsUvkFXrvD5eua3EJuEdDWDSnNkiHBjpaf2XkP8jQD72quEAaiq",
  "key9": "4PaF4c3e66mzMHY5GDUbTQgrbAYQPy2N9P1ZTfV5setrA4HF65skLkT5Fsw1nr5NDGJEmRFra416ryB7No5FEM4D",
  "key10": "36BocrPtFgKVAb3y25wysg8DYTnm74K8Ysy8oUgdy2R1eeiRzg6gcxeRgepz3S7FSDZPC42c4bsjpYFYn7DfFp8Q",
  "key11": "5jRSaAbFX1doV7qNAbjbkMUCQNCQW7Mtqd4NkWnCa9S1tPNHcyV5K6DKdjjbPd2n7XrxMUVWEn9K3t1hzd6KkKSJ",
  "key12": "bH7xGwTWPyULaX6wtke4DFx6kt9J4b745uDJkYKRiGA6wTG3nqcWwPQ4VYtSmdgZoHwQAQzc3eJ3q2dHZD3WVVG",
  "key13": "26Ly8g1ZjFYuyvap8GSYUpeuzESoXqy8oREoRDWMcPrxVSzatnSJsKHvUC9ZdNMj8mF8o1QeZFQNejETHL7QSaPo",
  "key14": "UTDxfpMdSirnLAaETCnbPWV8wYbeWNe8n49XVZ7nVN3gwjpfuFPXvEdnCRoMMrXNDCZ4Ts1HYH9ateyCC3RZB4T",
  "key15": "2u9Ne3DL3y9UWZeoUXctw88m58WBCzkxL9sWpYRpWe3Mi4FEqFrBiLKHoonqzVRz23ng3AZiYFexkEQxX5DwCsCo",
  "key16": "297hgiq2ojwoqxEadoC9k4yjdyRgfw5cohaDAFZpZqgwe7ghaQTXtTY9ys8Y5d4TgTYN7Ng7usDY3Q7pkbg1bv2t",
  "key17": "4KEhhN6Wp7oBwJaYTH6RibhQUv1djPAecFhZ4X9FaNiWbsYxp1Uugcux6gDv7R29tFZrKqX6DLQa6QScf5uh1bzV",
  "key18": "57AEH2MVYi3StaiKiGRj6D5Nnei3d7HLM8f2DfYeC717KmgPrhk55qEuTAgVLmR88ryho2DfQH1VQ3Sbm4PQWy7V",
  "key19": "ryjEG3j9pXDzd9a61ok9fj8XWwkxfBZnustRupmRnN5mDo58y5u7oYVhnhcePXL5cKSn2aowhgARxVUUm94VXFY",
  "key20": "2yqq5gPqr6uLKANbqM5ggB6NUz9ApFNX9PWBgHSpzYsAGpdYXf4z9hVfYEpZHotSekf24zZCDhaSstTfqU8SFs6b",
  "key21": "25iNEonUM2LjQxiMGMnhHpxv4Y5tc9BpKm54oVjQJdjxCGZXjxvVy5MbS4U4KNYwSdMnkFbMKt45jHTjnf4Rb9QW",
  "key22": "hDpQ9N5hVKQPbHwKCsDQcvs1Ppoe6RAryb36cKqPZnyCCyeZ9DwVbMVp6U91jMGHM9tGai35VD1XXwJXWkFWktH",
  "key23": "hvFjVxWFmUKo2rZCtN7kDR4PKZEH3cwrXVex2zrkHfop5ErTgGUn6pRoPuqa8Nx4Xv61feuKvUvXLiupQAnP5Mj",
  "key24": "3MGEkG8YzMPkztV54YVDqid866czu2vMeAsfzpVRuUqhiMSJ6oRzzf8GEueqmxjGSJvZ26qxvvwq6tGp4apvKoGq",
  "key25": "4YSyh4yRHbyt9tSqnJ5SCa2Ew9sPpFki11a24deMHxR9hvKDpiAqX26jBDgpk3FDpHh7QpfUQ2FH9f16VZBySTo5",
  "key26": "3VHkiPPeSjEfN4n4XmvSx4YHBrmE8L5u19yWaggHkvRrnhWiFHCxkU1uKTdVQ3hBLVp69GYxuSQg1qKPiFUMUAay",
  "key27": "5d3eNEdVgt8H8sULzdTWpXfoMS2FLatsEuav8kwDoWUW6zeaLQM2DzKQazUbSFQxpqu6jvbzsB8YaVzghndAqiso",
  "key28": "3sSE79j8qphX1FsAnpCo1ysfACxDgujnsYSeYei4WDpidLDGAsVhYSDsei1ztbWtYaVeC66zZG1x1fPDd4r9X5FU",
  "key29": "3fJ5p2wB3nfJE5xMVk5YssP1gQwBfsnTdsMGtAQVyzQCSG5Q52vFrsQ4zbJsx5HvQJfo31QFdaqpmfnY3nB2YG1T",
  "key30": "2z4TeCAuFuUN1nHYGdsZ5fjFHez3jg8HU2Mg1HQscCv8999PY3rCLmHUFkaaDe1eTt2hDKQr2pRmtTngZAFyMCeH",
  "key31": "5qo41p4zkAZP4un8WZNxEaRBoCRnxBvTSDnKzwGpVEpyY8rTeZWbdExVQdjXUrMjxLFpt5kuM8QUg9RqPyXTmq7b",
  "key32": "UYWZJBH1JS832WHXehoTHMey65xcTagL3Ws98nau2mige76u93RweG8bSJNXRK7tm2eQWTWkMSB2dyGNyTW6DtE",
  "key33": "LTP3Niua1sbbZwV3eoRkfGyyCkW7r1RfUb7S4wwQMcxZQ17aHp6H3NC8MtqKguBm1ZPtKwo7mnEZYf8m8FQzzJz",
  "key34": "5QLHxBpGwSdHXhGahSjc22B2vzX656a4vJGQRUiLL1Up7jXV3HNXvtU8rGw67aCGumhYr9Z4JYP1nVF8x6UjZtEu",
  "key35": "5Tvx1V8mzz8GDdjFXJofX37Qt52fh4dPeZG5jmJ25cdEpA8bSEQq7ULQ7RQAgPnGdjHVmW9oJm7eQoebWFZMQReZ"
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
