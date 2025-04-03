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
    "z1bU2wYqvPP35w9WpUzQX3EoYt5k1x8BeLiQ25Kub2AqkcxBa5caCNshbkfqnjhBMMepQZmsJGnDxUUuaUrP2Dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cESPpvByzUvbyHFWU6bEXPGDaytzUWUcdQHjdghHNJfu4BBcdiYhoPvdaVH4Vm37KAs8ADTzhA66piuqDAahWkT",
  "key1": "4yttgLtd7ZL7Z6iASqSRJE3F7LZCcogKt78dPVFTW7MACjwcEptnrrMEhTN5GM4Pvj29F82CBuCbcmmSWdW2NAqy",
  "key2": "4qExzJLwdvw3W6D2MjbaVbSt1Nm8NMhXakTc65u2abWdoWBDkt3NBSxvMCTXVVoMdqjjE7x2gwpxYoEsRDrTrH8A",
  "key3": "3Ro8NVCLqqpnQhjcESyMKEsTE5zfEUjQijxGQSZvmRfML3vxPFV8D2gRzqiCN4bBFfCBXTWXLXCYtUZDzcZMmyhB",
  "key4": "uzPUcD91Ydjyrd7gkrW2wTNnqBt1ftA44TBt4oiA3oZmKYNXSotyutDTmsZEvEJWmY9P75FZigSpL94VDrZkfPG",
  "key5": "57svUd71pTRW6kRdrby4v14dn1herNN36vMiQX4t1WasuPEfR4JdCg5qt4cmCLw8YmGz7qJefrJy4mQa766TtRwk",
  "key6": "3dfg99g7JP5yuh2N2CMoa133vCALznN2Sw9zQ15aFLR6u7byqL47GDsuDfbCo1ri4KkDHYCVW5Lh2PErBnDCyUSD",
  "key7": "5ZK5eGNbydko5HEaCDGqfddFqp9svjFjREcfcAB77h5qnEuxJ1rVfygtecrK8TnnKrpKwf9p2bsKYLzMyUCpsDqg",
  "key8": "4BXXPY5Ea3Qv6e4w6rprAHPErR5SmFuFdsz9TufRUZii2bA39VAz82jwokAPoLzh8sShGaCMZTiXWfz1FTM7os8y",
  "key9": "5w7Baz3aNChXQofQGh49t8VdiTePgF96LeUKG9bFw16uLeyGbsppHgrDJJiaQoRQSo2Q5rYNKaJEbweXayw4aW6n",
  "key10": "GoLae24XfHEF6TxiJ4X4ief6dgFerPxtq5HcvT54RBxTAZM4BphnHidCDtmgiFGyAwibxmynkj6PAUHeb21AZH5",
  "key11": "5xbBJfj7e5ad7BUbjfjJVhS3TUcGkfm524UtV2rcsQqdwwfh6mbYLRzzNGM4qKmnzDFzhsauHwz5r1wRX4mz8d2a",
  "key12": "yyKocg9hfEC7fQX8BKTRd8szrytGqmEysSkZyKsb3SVivXgMF95n8V2VHh3Vs7DGrefrxjUKj6BV36am1uThRkL",
  "key13": "3sYS1LrPtm5Q9mw3CaGq9AGPbiQufHPDkuajCAvYWsQ1oQwsEvz3g8hFu5h8fmig4kLUkS2ZDQwLSPfh7bgHh2vA",
  "key14": "2RKJFmDozJXwJMd8LmhQ2ZqnEtwuPUBsR4N5KWmBi9AKWkyDHrT5yKBgWvt8XAhcYAuWaqDnEHjGDG7hpd4JfqaY",
  "key15": "531DSgUqC2HWEAB3XpoKys2sWkQDRam5SuGMCRd1gbBe3FAfAhkrsCo4CTAqb1tqsTTD43DxZHNn2BPYDte3Ek5b",
  "key16": "P6Y7LEg5cuQxfrvyFUaA5BdbvLynyxuyVFYB8BwM1cBBzq2wGNcsw2PwRRuGxyZJguT1HtQsDLJws1cnjMLDLYN",
  "key17": "2gkFsCu4zR4kMPkGFyUfrWcSEQqUGqQL3moV1YmFwc5zDSpYNdTA6RCyS9P2w2S6GU4B37o5cn28yjkns2zrtdw8",
  "key18": "2fEmMYnHgAHVi3VFST2hQ8fvDxKFpMv1wfJbfuN55xyBavhNh8BJ1gjUeKmyuKP6X7m1yx8D26PTNiudPvi4PtNX",
  "key19": "WgqKV998HveXPc4TS88cR7Zpi8Cer1oQU4Ry8D4dZkFoLkhxKzqmucRsN7h6CfkHnXckW1k4tGHPCjQUmLSi4Yb",
  "key20": "4h94PBTZ5QqybhNnibTqm6BbWv95YUqtAEm6eqryWcNqbLN7M7RT9MUnS2wv3Cv7jBxUt4KPXC4C5hUgGNdjTGUi",
  "key21": "5QKKdf6cgHujH4xRXaMquMRVAqMXuzA4XajxJkBgYUfhYNoyqMoZjWrLd6bHX5VEpg4dWdhPiDPgkBm4X5iV41TW",
  "key22": "eLSJSjBjXiKgeF59ELvfiyeiMr2oprMGHQzZburQwbsYFHPC81a1jtqNB2kAjvzCpPs5p22XEBNvBGiYiFQJos6",
  "key23": "2r8pq1vJHu2dy8efCJThekKrSPcVoa177UMWohUxjeyQm8dGxQ3DU6TL1zkTjW5jg1fbCZxN8i8EJwHtCH4QqG3j",
  "key24": "3k4LrNWrEPTLdy8eKNQnGGFbtFLnP5fHhsUyADqqkebwDSR3qRzDyH2mck32NbvHnBUmUmBMmK5dokYbacvCcGqU",
  "key25": "4LYXE2dn3YjLUkMuLvPUjHZCywWo3j1EDedYdYL6LBEgMCfNvN45icxjzKuoxBTCD5qttfBG6RDdq5ZDm2inamQw",
  "key26": "2Xv15vDdrz68FaPn3vLH23BeojLHMwYXmaLeNMNp8ApJ75sGNkENEaQqoEMprHJ2H5iMhvF8eDeqMLkMq1UBa8Fn",
  "key27": "Q9SvGXRvWnjwAepSetrtLfRuD5GghVTBBr5Y1RPYJuiq2ZoBRiaWnJEEPCDywekEeYPhVdeUzS4dwyoXRzcLiUH",
  "key28": "2CBV7Vrc9sEujGQR3SP2C77hCAi4kMe9Wnnvt6Evj63d45r5Jrwkqns5ixtppAx3vXQs4ngdPBws4Xef9wnLg4rb",
  "key29": "4nj2GgMCgEnJgmj58kuR5xBFasBhWHj35BdW9WsCoUN3zN7FdyAErtmJVim5Edt7HLp54FXfNAjAufBtE22BSfLH",
  "key30": "3MS64Zhzn5Z1kwnzuRma7LsamZgSaZkTRG6Qory96eP7ukZhJWrEEg3dKXzJt2iT9CVwjWedGNxUTENNAUh7YdYt",
  "key31": "Zn43xHeL6o5W86Np8aDKKEpxqPigKPtyphaqbEaRQbGya6AamY6FP6Fah2XCZkUYQt3THV4dnkPQ6sy18DUea8s",
  "key32": "inCB1tP51J7sUKWakXMQa9JJpiMystcdbgdKwBJdzXdMeAXVvpiHA64Q3BARDjD4LrHvfYVZ5M9Agu8HgFEDmou",
  "key33": "G8uX6tFfaJMb3L6UAfqthTyhKCAyEtCLz1E4MWB97BTS9dQRdXR3UU7FuX1vCATS7oVAi8THeTgM9nqQz2pK8Jd",
  "key34": "4vMeMduL1jze5evBJR84BQrbmwaEEgUWGU88EVpKrXAzM4XR8ZqoPbDsVeTQJvYasLEP4dB42z4dPjVMu1wSTodX",
  "key35": "2VhzS1idwSvG919gyu3P4mqPg78nN7UjLk897h7EHAxEc2QMExbLio5myirGvfJBgLrB6SwiMDrAe3ACnqBRbrpe",
  "key36": "5qRnnCvqv8TbCutxj5K2mmAYosu7XVrG7v83iT1Q4wzwsVv1cALM9x2nQfbpztKGPhNpn3PhqUsmrS9opgheiemw",
  "key37": "3C678sgtWG6dgtgMkavYB5SBSRaPE9EmCgPgH4xYbmQtAbBCfPHMdZReRRtk1syVwSZMSmTQexUcaArTaarVr3F2",
  "key38": "ZLqy4Vh4GPtVPhocmpzy9VL7Q1Z5hdCRrfkoB66pwdPagjwd9QBZGqbs3irZapuqKg9hVTRgvAzrLdAdAnXJf76",
  "key39": "2NfvWRuENiB294LdscEXna7gAiN9nanNdLanRirpfNCtTgbEdykaJBrh6TuVkaP1XGtR91e22eg8owRc5hJz92MS",
  "key40": "3FeraVBv2Wk9AMdoKNSV1mB6Bph8BhkEbHFA6g6tCHXqvu45NWQrRBEDt7yXQfkuHzhvmvR1bjAnJPAzaTGWMgfL",
  "key41": "23L8itgiNz23WydLCgC3QEVDq5WGuEFpgXU42hBqE6vAkaKoZ34JTRVZPGuZgX8WS2Xx6VCU91v3X9WPUbFmhtPE",
  "key42": "659grM2PMj3NgumPb1ovqtQwafkjd7zQam6dXvRKSkLah9LFzVQ9V9M9NiJ2WA6S62v5We2sdXTyybYcTJEWT8E5"
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
