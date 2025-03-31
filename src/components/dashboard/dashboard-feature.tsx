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
    "54WZHdm3NAnTFaLTpj8McERRnRYuojHYmcimQqbXpSqxTaEekrk4eeDTUddDBvwzbsuxBytcaAbvTKtWMWsCC94P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cStimK1XUB9vdarQba1Emhwp5UrhmwUS9cJy9M3sBmXcMxv9KdGLMPeGeeiVJpC9EaLuxbyrFwDL1JMMviVTND5",
  "key1": "4sJtaZzewwqU4FKhVbnoHXPwUV4uAYMbsm9zuhKcKKjNMUdPqki3vtr4v7CD5n1ccuW5oFemATC7SRN7DW5jtCdJ",
  "key2": "pvg4miQbQdw1YuM1vURppU2nS6GhXdPZfTVmbpiZaPmMziRK3aAaZLce98TCt3MC2ggNRsmgeLsfywG2os9r3Ry",
  "key3": "3p1aFA4Tn6t4XgrXz2JXbhjB88ruC8nV8p77SKnTaPArKuAemH4MbToREUC1WQcCDvAVh84yAGwqo8UTVNTD8dC8",
  "key4": "2e8E3z3HD2fLCLT2M21aHJHpaECn42p7pQgViamSuZJJpNtmPFQC9TxQpXaCQQ1Sf1SnW3uEchNtsat1JA1TUMR3",
  "key5": "5jNg2uMK4fvkJDaYNTM6oyHuXeVtFvqD3wToFXdU7ZSSKFLpcmdtcrCFmwfw28m4EY7SSfqMiGixcj1no6L4FuaV",
  "key6": "65NWu3exhxVZsuHZq3G6tTLoiaBMRX2UYKbBMTjw519sEctsZsQrYoWZNWRYLMcxCU5nwEGpADQYnQJjU8BDtk2G",
  "key7": "4GG9stUofz794aEYTGDgdeZqHoHEbSbjAAKgxDii1SW7GThVgxPdXkQk85tSyDFTkte33NyyduwNQf4pJDP1ZnY5",
  "key8": "4yFXS2ytrxvbLS7TE81K4zWQF7SD5dvb9hKxPjMxB7QXQqP5jyUK5gKTzZWBLtBbjsa6ujGghdQ3M6bZxrk7qkYL",
  "key9": "5EPbEiumrT3MCazbKaKfrRJz7mwma1iz9UQuQkVteAytAn9iPBDwYyzuaGs7fEedBbkUywHkpsxaADRiimsef9RD",
  "key10": "1MYTdGv4CrhZUqexrNwYZmHupZ1dfeakm2xHpwNWNKXLmGLSDNUmG6iesHh8k2jk2Wyj33zckkRhgTicdXRLXeS",
  "key11": "2Lw3bcsTCnXCUHT5PaHy37VbCxY6tdBquVpe5zT9a4qMqov9fVVLZkRb1U4fYzNQwyU9VUU9NQWb2LxcfpyUqzhE",
  "key12": "39HRsvP5EGUaycxFYhCQLiKwZX3xjzj3qc2gnhYTiREVP1rE6j1xQZU1gg1FA9rm53gNrSjSCjWHhg9XVzTg9hYi",
  "key13": "3jf9ZF8SumYKNPHsbqCLf18QauEobtcbnZx8kkon7FFPb14bZpEMXSjW3mE5eLGnSZ96LMuT9NVWVwv6T6n7XDjf",
  "key14": "5Z8Eppw16VTDCrkK4XukdAtCRqwtJi8zx5hVNjDQcR6aBvukiDho7KLA4cbDtPc8eEcCY9u15jWrc8vN37ijByBq",
  "key15": "315daWc9KamDk5p8CqkdCDjwbSUWuocDz2aGkYukQKenxNZ3Pyg2cettq2L7hkrc4NT381c7BHoFuduaXqE1N7kM",
  "key16": "5HbApBLGzawqdCVV3jpVeQVcBtZovmdLDPpiphRo3VeT5mEJJo1FMJT13tcrcDxN7utowkKq8VjjNT4tydZvG3Z7",
  "key17": "3eJBYeLqsi3GGvZEaHFntNeohb6NsfrsJjHU1tMPFu4N7BR1VN4qLiGFZNcLHbmk1RzsT3EsrbCxGHY7otHgLgnZ",
  "key18": "4xC7toBodZAVXJ4tkU2zwr6LbziEUNQ2gyijY3E9ipnm9dT5zBLvmTaKtPitLNscTq5HYKB7YqzndEPaJU9JUwGa",
  "key19": "xggHqKb39LrihrLCoo3kU2qqVskbYCkw3yaJ7tRoEzZ1rzF2j1VZ4TYrFeznMJ3vNSmzBAp5w1p53eTdLq4cRDn",
  "key20": "3MR1BUDiRBiDuqVsa8U7t6BrT4b8NWYJPMi5Jsz7BXvhQPe9dDikGBxt4zkpTEYqkskekTMLtSQt5buhtBxvhmey",
  "key21": "37yksX1p4GyGQQFzWWgH1Xwpjryini3xcvG1utSHBHdUChkVbifvcs7NDLtzkf1MrYQK5ac8v9ksxd2rd6NjTqQP",
  "key22": "B3TcqSyG4yEd12xGnBMeF6ruQZx9BoLhSt9DcXX6ZXdbysnHzAMMZht3viY1M4p5pT8sCrW2Xq19CmrdXbZFxNX",
  "key23": "aCsgt3dFs74wfH5zwzzhbF3HkvvpgtVsyJiLoazmcPHdFAAKDt1M38VnUpxvdhzVCNi2FSRPP7fQ6WZkt6Hy1PE",
  "key24": "22wWo3piE6GWNvsLSFAHkV7jAhxAcS32fZarS4jepZ3pPaCtPvUjKzEP56hrFhyTDjMuzasvTYYu8KpUvgWNVBcd",
  "key25": "211nDBstQqZwQiY8t9CMDw1H5Qd7UmCeXmHRpjmpoTYX8fPnQ99v7eN6Sj8au9eT1sUYe9Lir2MzoGKybznSC2dP",
  "key26": "4LVjLWo7BJJoeAxk8bQJosz56AtVNrQmGpQ68UxMaLJfCgtwU1wW3z99rGY64YzZ2XrdTfiffe2rFcoDGPr55rm8",
  "key27": "x9W2HGzXcuo1LwrXcb5zZzGyVPfckSgeebBsZe71jFFS6jJyZXLs6Xj9THcNc7b1unz8ZJhns5GLuJxeDbfMPDX",
  "key28": "UGNZomJ9CLvnfAPwXKVRUf5jWz1KjgWgtdE2g1xEtdJNRFmLRwK9qAPLKdAHgWTjRY3GiqQkuredQBbwFL4cYnn",
  "key29": "59bHkDQinBSyhJ4YRT32AqeAwt9Kk7GNLT4SK4S5jo9fdbA6vZeCZcDn2bFKQJLvJ9agZHX7yN8B4S1b7sZvRN8J",
  "key30": "eCuZ1ErjR13DgduEtcSWzDcpgYY3Jc7qfTUruW2upJ1QFJF7MKjeMbebPaWUPW96qRwJJMwhRoRWmShfMSQTKdW",
  "key31": "26gNW2NwqfwE5A6jv4chNWcyBhSTJq8dSiwej93nFpYvr512cdkadfbWTeTr7R3gVNw9sgtPCgYt1Bp7q6Lm1uc6",
  "key32": "QRF4kVYw13V6XNtBqPghkWusDBGTyAVywHG3K1oMyrwbp3CiB5LohuWn9R8P4zgZANsfbZaVcPh5u9JSdaLPgPe",
  "key33": "3wMuMUQ7EwM8ze5KaEADNsnTg49fy8KB28yQAftQZNHhRZkL9fB2mdfnp7Htp9J4ikua4p5NvWzPKAUn3uqXZqhc",
  "key34": "3LnThU8pGadPqMG6wcBekHL8U6bbkcpn3xW8fa8GxQME8DiVzt7EmanFdmkL6BypkW65FShc5vzskFKmfwBNcC1A",
  "key35": "5EdN9vybdGAvtUq7NYRPTGVsYtfzxDnnCatAKWgqQWH2kCCbrQTLZVtrAs9uL4RLSeZmKPBVY4d9RGFKT5HpsrzD",
  "key36": "46f51z8T5bUfGkHvdPUqNEDSyzRxqkYqJbGREzFknd3LD848MTRV1TUf7QXEAHaGgBSDAbrdajDzAv8EKZ69pzq4",
  "key37": "4wpn3Q5CUwWX3GnSxER46NVizPXq1ZS7xbmPUdaUBYMamBfLhmeZB4p2phup4w2xRDkP5un3XUVdPo377QKSkm9H",
  "key38": "2Vp2cfWhhoJ2VvNm9mW8RBGMiqu6gedjWYnV1MLHRucd8bYTeZV5aAMjMynPMqJTGRPwgQSoVqULzZG8PXyF5v47"
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
