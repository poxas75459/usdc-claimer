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
    "27oaWRxsJLu39DX2x9bNGv5KhX6bkxagfpNnAkgUTpvSJC82EQqJuPCALCweMq4UyS5ip545KxiZ6pXPGfFYxxcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FxTDYFjzu5CWjufXetoj8nk6qsykhANu7zhJuhQYqNJpcaRoP1Kk7KzV2ytEwoDGa8WgzK7iQvPyCtLRrA4LTKo",
  "key1": "4DGuBrNiyCDGVHam2k649xgT93FLcGv3thpqLRMB8mo75Wgedp76YBWaoJoHiBssifiGev5WmQBua2u5k5icBDUw",
  "key2": "3A6zdHpW2zfdmZ3Hacv59b83ZZ1WcPy98zMqeuJZGgbixzqkaoXDuYFXFSs8y9wmxpAHkGdZ98CZ7SXoftHqLGKQ",
  "key3": "QS7bMcNQKcCxhRM3D7z5P1C6pKowuyvdz3sUgbCKKZmMyuT9jSYWHWZg5Hq3Wm8ghLiBT2PeAh1nsheZ7Zew9B1",
  "key4": "62LN3ucyE9mQFzrgf72BadSnM3KoZSdENDRVYEw5SZYRThAqBkR7zHGLuJVfm3omhB9p4jdf7eHtngTUttdAHHym",
  "key5": "zmFdwubHHLz4HB1DvU1XedUF9MC2SJTzR8pFF14D7WCHHqGRWPp7XwruPh29qC2PsbTAJgwxFGTpkT68FnbEv9K",
  "key6": "4CA7w1ew4tLCABDLi9oC885fT91c8tnhCv1yKZoodHFFrkAxtpZDmC4X9FdvPCTDLhuM9xiT71YW1WZQ2yDzveGC",
  "key7": "2eZq5wiNrM7misvKF4fJq5XDe9e4s2WVBkDrxfV1ofpGtKMoJUu9o5TQV4TpF5CdnDabn81VtW5VK2LuSo7n4PoA",
  "key8": "3p2pET8f13CsH7XLhSkPYVBhdcB9zVXTorVJtfRG9iSW3oubFMVZyR5AMFZoRSBruzHPALn7eXJy87DLWhCpZ7TE",
  "key9": "37PvSZsVJ5eCTYHhTqzJYqKhdoganKwpnYjGuh3c9uY2dmszQRVNtz62hkjpu5eFxSqu6FMtTQVTx1JQgnGsu4fs",
  "key10": "431ynifkiLqWdZrWUh3uFVs5BdP2W2tiAHhChTZ9uojQWor299x3VpXsb2pzBa8WGhWKFzV3ovCLEzohfhzDfYBU",
  "key11": "4M31JscHJ1FFDBDYhZ1bK8MuJaqSn1oe8x7BKBCN7yxizcm7TX6SxNV2SZYmg9jQGQugkCG5vVReNGnyt5J3d8Mr",
  "key12": "64UkDuQbW9AzTYhTB6tDmJrcjZHtbgzW9FsVwt5rQ1oFXRtAWAteJjkhYnjqSBD8WQ4NPHDc2neZrLcwcvD7HsGH",
  "key13": "3ChDydJDA6e8nyUJSRkNZAT3QhWuBdmUSK3zDEgHcdA56i4n4FLbZrjQMV12TL76NXcj2eWMVVfSUqDL2kuq1P6C",
  "key14": "3zsiRPXygTNm5wxwpAy915hknmMUbJtJ3uPaHjKFsW5D74qJRBL4fgR3fAem4puNVRPZZwck2fPFmC1rPfi4YVrX",
  "key15": "Qvea6i1BuM5qTsNR1xFWvuD1Hhxy8NKqLdmEfzA1ZHCWRjx7NSPciAba3o2aSnfNnN3a24nceuJSpr9cnvLDxi3",
  "key16": "2SSsjb5ac477eFo94EW54z1mMdURLstKTKERmu3gwCiLK84FeggSe7393BaGaC4CqByggNwfouNTUZkvdoMVFU5M",
  "key17": "k8KfVrUmkrHzw1e7Fnqo4DqFunitf38YKWyKufwviHfWBwAbpNfVXDaSHPwXAUX6oiz3MpEsG1sZcoQdwNvoSL4",
  "key18": "4pK65Hckj3AHQ7EcBzaQq3ay27vzWbETfoTKDt3pAyMNBDc1jL1xCHmyk1UnVysD8B377X4Xhj8HVasmGF8phkqf",
  "key19": "29kxWWfcaypygUtsffMJjukmC8LzmERZBjCRdRZHNwbTLsBKPR72Vbvkgf4oMUEG28rGVTpJW1Fn4e8BwPgMLTVe",
  "key20": "5AYb8ygJvkpU1RXDXiXbgMTmapfpUurUBKPaTD2RmuYMeijtLhNQZDEivyZJ5f5WQwnHjNerwi4Lbo1wNwPFdVAj",
  "key21": "3PS94VK9AGkFcafZbs3UMyyfR2Ujd9K89tWwoMUdYnPGodi4dAA7uzAZXuP7m5BanojWnWgGFDJkoSV2JQo2Vimv",
  "key22": "5khcRtgKFbs1UcDGBUE2Rbgx2P7D4ap1tCzUFZdP5Xi95oRMBztL5MZrhVnf7fFaX9wUDqDfs3cjGA2uZGC7Ncww",
  "key23": "5tVnLa5fhKecnwLSUA1cqKNx5p2Bjgm5EChuLNZ9SfHTC9N9xaSEqBiwLH7Y3Fms3FKAPtAeKx66fgFHzoWYhecr",
  "key24": "5hxPgo4GbMibsHyTxASyjBSQrmTZED3Mkuh471EyGizMonnTeHmtvaHxkkMyUupt9RPbwP9JasTys2HTuhBDGwxQ",
  "key25": "DYUPuG8VQhMU43pU6YmPSJG7hmLg2uJo1mzpbLJBSkGqVr3ytC74FnD3HX2eM5r3Ym3PZLZwNbZJuWCcVyiYCBg",
  "key26": "5DBaTKTdzBQk4KQh2upJDcHRMweQJ1F2m8asoV6MjDgpujypRjtgiuzRtrrrm55kEdzpsEuWM5gdBcGSUpJD9sQ",
  "key27": "55NUkUcXuCXRRZMwtMP5ho38LEA3XKDwmPHKCFCjDGcHmjybFbowGarVPje6Tjox1XsVb9fo1dQ1kcv4kUt715gj",
  "key28": "5NWx3mKy83N1nkeXFaqYSzkgB9XB2EnNSotypQNYEAkq2WH2fknXGqrgCyKjqQSVZe8k6bDjCSdDnBiPHuUCRq1d",
  "key29": "3WdiavQ7XShW4qSW5Awx9BmvAA9Jg3XomVHkSrD6HQZPsEdXx32PvrFWjMoFV4FL76hq3xxyadadxQUZNftB1vkM",
  "key30": "ia3JdRve5sXo6swmeq96bjzQDGfJMqo66e9voTahhgVeRApNcCV4x5U1ZXTPmMhd9GU4AS3JcVApmJ33wgLVLn2",
  "key31": "hThypYLTydPdu4AUt5dEogpowfeX8fAKt1pXRR2hUfvTBHXRpsBCngehjyjfo76cJHFG2wFmAKT8D3SS41PSCvd",
  "key32": "2bUj15HLZChi3FL76RpuMdsFQ4As5SBxL3AjCyazykasneYCv9x9dHvBqwJG2sZpUSerCdhSmGUY9YC3G7RVFQWQ",
  "key33": "2C2cutrqzZZN3uAL4zXQLZCvbLduKabjFVv6qgybjUAzJG8LDsu2xCkwj8xuzEJKSuZWoU8C58z3GRDGSgVNqo7T",
  "key34": "2r1UpViN4r4DnQC2Yq6JaPSURHQa4jqzm48kU15mPBBzfJ5aXet1G6VkC2Fqgjm3d4WPFCRGE6igTf6cWfJkmdJE",
  "key35": "4zsJTMVnYssaqrS4sz1JgbWm7AhF3JPtkySX8RtJg2qM5k5Hn8Hdjhi35obAYsZnc2dJm6qUpZRZGbgUdUeG7Bsm",
  "key36": "pKB8HrzCL5szZCWLQAcL19B4zxp5r7zGkAb7rSUxmXucfGzzh3nK1w5Uzqy6BYmUzi5roubmyiXSg7oAaAHtQkq",
  "key37": "PyKgcRKytR1BZXHY2r2oaNW92ufnA5Qt4X8nudtpyZEvdJUyuV6hwqwQqFraG7YSFthpfBbfAFxv8WvHH4zHGHi",
  "key38": "HTdPp4gGBA321pYcbLhHj1cs6SyMzRhZZhNxtjQViSL8y2gjLkiZQC73GWwww5NzuPtvFmHHc8Ew3LkHZnPxvAu",
  "key39": "CFw9qLv2VzC9aQMGZ7FCNhPaRsUZR2ptLX4FcSuQWBxQCb9CbKSsw8FzDLny7EFEMztrkLPjZ6QzeixRcbQwbu8",
  "key40": "32yBtDKD6B54gaZ71pDavfws9kez75xVUfxyuckqFBaYJmeaVEMw22CWnz9ksJ1uPLrgXUpWpmJrvrP8DNAENp7x",
  "key41": "647vsMsCE3UPiPsbvtx9PsH4CFUaB8mgnjYPfySkfbSYiWhaoXsvTkSxz2TKbR9fmm87YtYHQHTYTnnHwS2DFpHR",
  "key42": "5HArGivBE6zXucgSZHyAaQrkvEsbKTGMDoY6V1CkbTBh8pV9EAzjJXYSQetYwpcBu1BybuYhJXpmKQvCfcvGZemq"
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
