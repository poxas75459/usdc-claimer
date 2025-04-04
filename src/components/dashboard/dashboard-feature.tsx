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
    "3AtggvhjXfZTBA1YancRjykzp9yRriGmHMa77GXRDvnbgT8gbHoAqMFddJmitSLLuc1Pcw7QGN51xcY8hwkFCXRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w252pPnH9i6jDMmvaJrkVBxLhggwF3EMGriMTxR6ae3Ru75dcEVCkL6QDmxs65Xd4nhhJQL6tNchph8TQGXboY",
  "key1": "4dq1FnTNCeUth2iiu9nMNAftX4wPd5ZrZPWMJmHWusigv1Uc8KPEdh9J9BTEAt8qKnDAKTKdJdGp9xBM1hMhvf98",
  "key2": "4f9TFp61Tv33vghbFRvq8fW2kWHubmgGdu4AzRPga4meJFHyXRYcZuiLmVmajePkzhXFNxWYM6pG7CnxteKr6RBY",
  "key3": "5TdvhNwk4JQPL73VGqoeFNu31m7KLmcgUVqaQ58asYv95pdgvhfwGeFxCqot72wHAc34u9WCzbCedqJ2mCnz9aYU",
  "key4": "5D8vCZJUoJRKieH5jjPzxTux3kpfJgBAFkwBb8fV7bBk5Vv62FbiHnpa5oHmmWtEph2N1HmU3gVq6o6DkCpJjRZY",
  "key5": "2cufV4U6fNF25iD73G23jkMgqTHrpBHo6Mh4Axgszs2V5u9YGFb9gLpkcAGn7tPn4MJRdFRiiYLXF4VDXhxbpbYz",
  "key6": "4kVu98aSz9Ssy3SZtVeLWUTu4ws9MdmEoFzCRQwufY4fJAjjnpAk1ccwKXwyVMJgrYcpCoLC4XRKXxJ9MmKTboQW",
  "key7": "26WfzmukhxYAQVKLizWaQea6Zi1g6HbXTQ1J5gHdNi9jz18SjvAjMmVMuFjgKRybMWwSDuGdKtxe7X1HBfJkpJTu",
  "key8": "653fdMyrXMhzmhWCunMkitWXf7jyUQjisUYR5zwVggFrBxi4wnGbM7XzjsAXEFRh5YkxL6g5wys8x42DDgYEf3bR",
  "key9": "3o7b1vTHdE5D9W8ioRUrNPf36DyjJfN296s93vVTffVoU5dZr63uia4h1fgTxJz9gHXALzgr6KNJn6bpJS1SQLgz",
  "key10": "2AfJDtYsEQL2upNgg78EAdvXhw3cihfNREYYytrSQNm8ToMo34mYuHT1n9d67PvX8rgR3ePpGuWsJ1FCkd8XDGaG",
  "key11": "5wmBp19Ym1vq9MaXbsgBcykGyMpfPjR69XrK8VsXtu9uYmy3q5gY3Uekt1G1ztts9ze3FMXsAaweZcfgbptfhJDr",
  "key12": "3peqopGyHzPKPSE99CfrcT69ZJ4qQdi9WBj3kdXxXTy1b8ku9GfCn2seFTAXF5f6CrfeYgzPJ9J3XZJL3a3FKMeA",
  "key13": "2vXJc8DRVhyGJ9tc9te7tyKhyCyv1e98KtciRHTorpN5v4JSt1A5Sw4sRxjg9ycDtmChBMQrZwydxVeyN6qbDamZ",
  "key14": "n4rjSMvSB9CF6LTBUEe6cA4EJfDf6mZe1SimjgFwDWxsj6HDLChSvM2jrKTdRY7fLPi6DqABmf6JUSDJ1CHfRg6",
  "key15": "24yrZw12jZXdKLCDG6SuVrAyyghSYJGCV4dZbCooA2GfAD2KiW6YfR3EuL1iw8okWj5jNjcReLQyPa1dbT7Rnf6B",
  "key16": "3jSDTa511RwS4tiujMem9s2RvHjRsc1LicB9wwUwS77kNrjupkDn2ocz58fTSUJTzVz8iDttp2RTbrExbmVmuEYP",
  "key17": "27ox7HRwCqoBLDtyxyWK8DufZizfiXLggn1MPUfCRcXjCTuNSysY2AfatYqgdZfDbkjMyvkTJrJXN911S9aWqBwg",
  "key18": "4ZjcZwG2Kiog3Dr8Ee3LUyMZmBWRNqZVjTDAAUnfzijub38UqZXNDTkmbuAQTborwwb4NYc2J5wbH93etze97J5D",
  "key19": "4zptiGKYV322SEHqngYdFpqUN1WeUF3mZbcYEvdcfsiBzBskaMNPZ6urkFqJufMMqiDpnH1cpWbPaXBBrXBY6eu7",
  "key20": "zRqyiSYVhJ7SKHzkB7zmcT931CMdQKDkwps3gw7Jqunu39wP3LKfSnGYBKPPa1bY27B8LC95xRMimMaUrN4FksY",
  "key21": "2E1SpZyPizMpZYu9vDBrv9SbCziCZAyNC9nibL7uZyuSz1ahZje8833BY8LNg9nv7BcsWNMQwTuZbp4gjKKtC18X",
  "key22": "3zNBoRFr2crJzvPRxCqZvSGEZn3pDNcAhw9BKVp2Sw4ZS9uZVMNLYubzkCRgyygkspSfYrYC65Q8jxGySKpBQBup",
  "key23": "qU8AzXrtWEkNTdtjkNvbscJ39VP1jyxF92yuc2d7WdA561Esen6UcrtkDcGNKbDxLyHLPLXTK5ZdgVcD7L55rhy",
  "key24": "65XRGZZxKjyvgbRTcGYVqYMdm1Sihc47HKL9kqbsRaJ1VUeBtjaHhQhqeUs1YZ4QY71f2X8ghabrGiGyfJ6qsF8K",
  "key25": "5omyTweGwyah2at3XV2TsQ5L15PruG4NwXswKXVWCubTgXTxjzLaTVm6DiAJSVzeqkDX3TzysUrjxEke4FJCVL4J",
  "key26": "3gaGKK5R47LJk9oGRBxooVpcysCqXVA5ZCQ4GcfQKauKzGKLDnYx3Ujerm5SmNAww6knQEoxaAF8VLc2F3UAUTta",
  "key27": "5crE6A1GJzwiqhF745WL7rehM3j4WGDyoAXEeL5SeZFayUpa7XspsFDSdgmnQ1aN513Qk9jM73V72MRZBkAhPUd5",
  "key28": "vpLcLAZa8KfqB5qyHaQoFajQ34YvBXE4bLhnEHTj3Y8ALq3VgL7yUr95JqVRbyMPPyRBFN9iMAGrqSPhoFAvckm",
  "key29": "5dd4SGsiWKZevVR2TbJwXYj3MEP8i5hWmvMduL3MeuNs1LxzxQv9n2gkLRzsN3j9V3DpTUdZSx4PLvYwVpU1SDeT",
  "key30": "5Ly7gWnaAuL7qa1eGC75xpzgKkhKf1AWiAYRuH4Rb4mYMY3cRajB7BLQzbzXSJwsmBXsvKUpyT8XSwtVg73K7pba",
  "key31": "4GSR8Y4Y8xp6VRPanFw7NXzDNqwXjd8KiuudxpdtwDFoouSoGmj8gTArg1jyxxTNXbEhRGo8UZbVhJqiCYy6upqB",
  "key32": "57GmNtV5Tw6iWe9ceSenDQEWRQC7kPdTajPFZGhXViUhDeBsF2ZiXjWcPwqs5DTA9g2Cu9ahkFb8vrFZWZCVtfyW",
  "key33": "2cU3Rr8MZ8c86AURecjhnZeJC8pqUBaJaaQ1zUdwssFQZzVYJru4v485ikM3h9AMNt4G1MtWCKKWgDbgVdkHBuK3",
  "key34": "2wdWy7CXvPntKckLyZhqEb1btfUYM2zAJMqzEoNfSMtf1vVRdwcRNzgr28KV6xX3Py7RFsod5aCNzjCYBZ7nFjkT",
  "key35": "65m9xCwVCiYTrucZV7sKch9w4ANhcJZDqKLmQoyMvBdfpzrJwSBUtNANYWGhCx2q1Mj4vTgNACUZt1UwZbU8eYTq",
  "key36": "3egEY6oWdS3bRH8DvzA5sSuhfPbv54xYN9CCWQ7kqrKY9vz18eLFTNC1yKYpxxeozias5d41WvY2fJ6AtQ2mTpjC",
  "key37": "2Femo9MyJBgsu5WGTrFSkDktXpjacpLs34EJ2GGhDozi7YMfDqAsbVGw1ZHc2GagiTjung2RQ79T9DP5eeagsHU2",
  "key38": "4UNRVM2wnGzAG8QeHnbSd9LgeUos2MbuFT3cmka7G7mURYmdsZt4rRdYtmauq5TFCfP7BgsyEbuJYHTUTuooKNio",
  "key39": "4H2bmfVtEUcCUg3YLqdrmHHEf5UsKQNXwQitBBDSrwRa231fMHvvpmAsVVSAxNXaYP1A186KhZvsea7NuA33cUSz",
  "key40": "35X8Qc1CBEjntWNqz4G8jmgQMqLt2LkbnBkVRGa45wupC96t4jdHrguyfx6zYoy6C9mnvgXgcWWiHqh4tauc39eQ",
  "key41": "4VPXM9setSMmZgdPo1yHmdNUuCVgarbk8dQ1oL47hS19VcZvCANjSUT1vbhfgHuyPB4hyXAQoDb4kWrYcDBckf9q",
  "key42": "62uUbRfoCjdAvs7uJfs9AsFr58ikexD2mhRu6RLywVX2n2b1DKmC6NeQxEgyGvfJcE9bcUuT8BvVvsKfKnTH9UDZ"
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
