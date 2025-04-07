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
    "2BT77E2ZkXBbj267V1F5ydQCyFU4BdxsMi96cZN9qEoongheDZSyPc9XUediEkNKtVQDgBMFWoC2mbpE1RFkakqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JRkjm4GDtSCM6s3EyvmtvQrxEJSy659WJU2cQ7MUTqCX1A9WEoEwHCRH4ghDxYyMedBwLqjNdiavQzTYDY9S8Gt",
  "key1": "5DDsZ1dnidAUe1UbUevC2xiTyvi46XSfEtZFKs2Pt1dV1Q9XWi6fweFZ4mgmvL4rwD7Am9HeV78i1FQU8QMp9ruD",
  "key2": "2fPivChFMs6Xm6WbM3x8wmswfiJsqEy7vtn5pnoUdQ5zQQPhsZbT2TR3FAfce3Cf4tjiZCsMhVVrMcabpEN2SRyq",
  "key3": "3TJBsy25C92hANZTfJzLNpvK63wqjLRGQJrycY3GWnuPDniR1kWWxem46f5rhbyikj9DpfuvB1JWuChpytAvYNdq",
  "key4": "5XKbf1e3EQexrmb7wE6cK5erui7PvZr3NUft1pxg1jwupz9SbWU7hCeP68eCBr9WcEaxRTCaGM4tFg8Js1pguDbg",
  "key5": "3Cnw6xhyT2Qpr1HEQLLAkUQJLVLxWJeap2ZLgHKPYjwZPTtfNgpicqYJ52hozmGGwJMwcVSudHDiR878pn2vvf8A",
  "key6": "3EsLwnbnnUXWgejcvUwkTXCM2BFnLvmUn8K25EKb24EX51gFN221VRdd3krqr79acrGZsnWDvSV4erPD1BT8VNcm",
  "key7": "31VJdQzPYoWEpaAMPFrbkhJjpN78tHLpf4RohouDSc5dBHk4dgriffBYnadnS1oChqsE5XKJWKkQxyCBBtNHxfoJ",
  "key8": "3eiEeffrPytY9gt9K1wMPxkPTNdCRTTcz8BhtbyqWirB3B4npdTzCMW3moi5izsCBBo9acuy37mPC3uKoRuj4RjS",
  "key9": "2UEyzEZ1jwYdXvRUJ15Q7Ws9UXKGZDeXJwbaiSu97kjWqGcmmreLPpSWxhwznTe2Eh9LwcpsWxPNZsR3WK42hhiz",
  "key10": "CKbweGiQCGy5opgzZn46oGuwUFjVyg7Wan19N4hKagAESMsDMDatKz5hHBZfhqZ2FMbX6brtZRT1ZApAYzAv6CQ",
  "key11": "gcJJ7xHjpaob2eCeyVweZnhXzZ4xqhmH7dffdDAsLZQjo51i9rksM8USqLLzrnPqucgXQjtd67hznNAZL59KeRQ",
  "key12": "2V4uCnDwAcYSo5eXaEkuVocZc64Dp7qYyHLY8GaequPscXwi1DwoWfcRvvt5BNKFBTnFRt5sk2fvBNh2mAqFkXdF",
  "key13": "Xpt1aqNPqc4Rdu2mmwjRpLDyZpMxcFa11jjNZ72DdahtWKJurEjaNyZYXA2TGFeiBovrT1PKFNfbZawfptuFrQj",
  "key14": "2jEnWQ755oESYYnWwWkWAG1YpgbYD9XLWrUCE5YNCK3pouSmDEDmVdUzg5xLsYmB9stg2VJDs34ZHjyxMJWYm7uU",
  "key15": "2CvDqkGh8moznGTtbf76MkBV7BgReh8PEE9AgKi4wx961qSdBB62svkAKLyHvt1SmxRmM5uf5cehbiWtMY1ycm1C",
  "key16": "2ZzTH5DuSUyAQHPDENinDmuRMPTKBaZxagx6M8ufxWyUsBeNSicdNmHK27ZY5H2fkLSSyUtLc9r3w7h1eXRjK5Pa",
  "key17": "3Usc8viiTAcRAvtRdNjD7KNBDbZH5PP4w31suzkihLVqnkaYANZ2V3NdtWgB4gVDGpkZP7AYtCPDEELkbEoJZTUU",
  "key18": "3tvQ6eWm1W71SFwesubgsFLgNvzDnh2C4Wq1y6jD9AZee91DBgi7kDfni4i5WxM7z81uQgwDvQhYT1PaT7Ymhgak",
  "key19": "SuTMRiECqaouGq5UY2KBTEKeBZCWkEFpWstNs1zfYxKfsF1fL7k8XeVv7rhG5WqEdaX6VYfJKBxi9ah2EU9YLG3",
  "key20": "3b4qZR1YumDgobkp9WAy7FZZCPPCsUpUajGxrebA9cDMLaVgQ9hYnRQi3zU9kYvUJHMRxpXGZE6w1d8EmAdMiKtx",
  "key21": "2adix8HCnxjJ49JmVWnWo7xGCBpyYnAYb2GcJ7sujh7gUxpAgth6eBHKXbV6f9SmpkC1JBU9MpfzfJt5sNbCmaa2",
  "key22": "5tLP3H8KcQoycEu9FdoJzH6WMrmW7ZnM39Zs6JyGRm8BCfTgC5DNuPE3qtrZ8cZx3totU6UuFXQGgWWjULuVPMUt",
  "key23": "21DaXJafpDjvRPZDF6BfKHCPBET3sphMr7TSpFL7vtmuKE3AkbYuxhzihw992BjtFHuzwdTWW4SxVFnbFMitaqqZ",
  "key24": "3XdgaVynWtYVQ4eYQyTtjPs6K3Luwg6SXJuLEj2tdU7y2hUJbXgV2H12BiJhD19WX12xQuufxXoSag8XgrXkb8rk",
  "key25": "YTRjACq6NpeG3rJY3NRTPbAPvXTEWnYTTFfrFFWbsMkRH29j9mwZP7J9DFsM2bMMsw6NdXnJqLk5pbm7FxUBBgh",
  "key26": "uenL3VCeSjxUSL4gBn9WUKiAedfjtHJYSvPNZyMT2KrhduMcgNYrkFXeHCLK1qveF9RWEsAKL2Fk6ajCeLvoxQv",
  "key27": "1F1VDEgsNrnEFmHs3Xjt3oupsHS8nUPMu8dD2rG6LympzGXSrLjUdf7zs5NCReu97Dnhwxx9zDQwMv8N25YouXe",
  "key28": "2BfUmrbj7cgFWLifXoKrMqPQCkZFGpTnWh1TrWHaDGYpJyYzQwT5tVh9kbpoLePCMfT4too9wHzXLeGkXr3LsvZN",
  "key29": "2EakopsSgVc5bNLS4inYb75k3QC2uCgtQ4ruLd8VFArFB5f5fBkvBkS3Tff16Vi2U7ynZVaPtkEKbNnwMWfH4Q9f",
  "key30": "61gqwrVHVN8TagspZde4FF4QR9fa2gKKNVWF5aa2aM9LQ9HwMXrFBmSfh4BVEiBFWw53FhSSiWneTgtUHDMru4bZ",
  "key31": "2r75QfSEb6qyPcBxTkcJsa7JEyWbaGVtxY9PY2svQW5ppL2VYD3NgZCi5HgPVSkKgJ9wvYusLoxuSz6AhyTxPGnD",
  "key32": "3NSpVf66zDKnhyRVMfhRVQedBAHHeQ8pbAEetm99vXyySvq61MZrhQbNPnrhYMDXS19RHxysqMxcAtCsvi5YgEz7",
  "key33": "63tU327vd8p5R4q8UymbEZC8UTo7zieNZG6GdUzeV3cGXYiqoGZ4NqLxb8xcuCbWSMaza3aKUBrcSiKiGEpZpXKX",
  "key34": "5BGTp1fiEyHFuXtemc6h6UNJdmASqX792FyWpG4iZGJ9sAC9XQEbUBQamGGhkLfPyPKyK39djKmxXeMkDuDStaCN",
  "key35": "5Q9nbvbKAMKLCD6fN1qs6GYQZ4ZfDaxTCnHV2NKuYdfbTWXVV8sqySj3UYtAeAivZDWxT6oyCk59nFUdobYxNSzn"
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
