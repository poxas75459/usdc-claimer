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
    "5JizxoFFCPz3QsQo1omyounhfJjWbxePXhQJaGmCw3MVVdetUdabKNiTjCUGtJgRUtWv1EpEyuboAnCHpFaiBJ5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6c4sQBDw6rFuj8FBnn1sC5hGXPiKMcUK5eHgWe9pu36RDDsPQec4HHfGv6FtTfwTNFkVq3F1DVQC7qb8EDnYotc",
  "key1": "5xPF8tbj7kk4idumxb3GAh1E3Mf1ZCLFGpU2FQpDdzVJNGNLXDAbrfW1ha6fiFMsDqJDQeWrLtm5NY47mmxspDCb",
  "key2": "63MzwnWhEx92rwToafGLL4sb1gNoKz5qHw7PsAHmqf72JFNFpG3cAcgP7oHpA9RYimosZ25xDtagCkKgU1H27sM2",
  "key3": "3tJrwq1UpoMHfN8nT1uJU7bhRZjeohPsQZ6nWb1tSUUtiV1DruMH2PVN2EegNGvkfkth94yNAjkxXF6veiWoaPK7",
  "key4": "DXSYLS4J8PJfp2iM1aW3ZYoUFafnhtJ6X5iNwz9AZzvdNnPxNLx6PpQZLv97NdANs4gbPYeLptA14ZKo61y9Wx6",
  "key5": "5qWXozhNNtEy3XHAPnybEJptb11JGif5mMxRay7zoo6XjJqbDSaiBPX5jz7mZvwueTemPC5CeZDhhW8aMjc5iqyB",
  "key6": "5WkmSGtZwEtyxqMSuEDBnxPawZazBNQkEkb9CApULcZ3pKQJP2H38piKgY9dMRqHAWV7JAcLwVvAnjoQYhaLXpTK",
  "key7": "5AXChi4yffvgbD5L2soKvyRX1jNV3xPj8MGYh2q452zGRTBMHtedWUaa3CuRhv32D5Ai88H7UBFo94Heq3xtf6bx",
  "key8": "2L9Sz2WaxS8ZCkeXEbrFhnxQFqTojWvTBvp4RtUfoYezZbHbJvFzSJviCaKJe92LvpftSMpvJAvHWPh5CKwMgUt8",
  "key9": "2H3S3DMrNHHxLZJmsdmUnUbCi7ViHGkHfxW7gsj5aPZWNEB88eAPpUUjVHJ6bHq1axLRTxPE26wrD54g5QEAvw4M",
  "key10": "2r5SwqDshbAbjyyCJnMjqENQQHVjgtTCdmN6dJKer54yeAQmdL5bRN2sdaGzTHoVv1UodnFLG1Cn652UcPAhj3eS",
  "key11": "3hZSrKy9z6ipA276NvWngHBwczKMtKvJDtj4Sw5oWxYkKEd39JGHAdLjKFHSwRRVaJjZFsmrUuxrVrXxDpoSSTfT",
  "key12": "owcFjSXgPkS7tfef6Vuv4QUDYVpQ4d6ubmYyJ53MWeTSrHynS5BzTCE9tsNoNZCnDpWneFfpVotsB9FqyacwUjY",
  "key13": "4ytVcZ3kHCRM2RwKTtuJYNUaEVzYnFsJAh4bWT7yvUx75YmdbeN5E3wT4LFDSJezpWMqDcjxx2KrRPTHwFGLidBe",
  "key14": "3ZRhtuuKQCnX2ccnr6gxsTDG715bfb3gdR24L1pTdjZmnbPuKm8KDnMW3TvoGGaVDYj4RYPEPepd4JBo4x4FAncE",
  "key15": "2nfykCmpVFbv64wHiqvXAtmutZjXisF2nKo8tUjQiytKpv9LUUPsMK3c9kZ3meCWYkpLo2jzbyLeSGLDyzDgghSz",
  "key16": "2erCGcRafqSaXoX5tUpLWYPLTZiNZtWAyuG6QUmGLt9VWgz7ruUw1L5tTLuvFgFBrXfx6EjuXqkCjZjJxb1Ch6sE",
  "key17": "a3L9w2GHxAksxoq74SZB3NvBbDTGx37GW9BUEQPgAUCHUawZCbQCtmKP7FtFyBPkbjgWz5faiwB25knWhCAcy7p",
  "key18": "5aqdJi6mcjyJabT6cVn1B39TQhzn9GABgwqeKZ6m7ervmEsG9Sd435zgUWfCMkE5uQQ7FJ3CdiFS1K86BapaFBYQ",
  "key19": "4z4YqXG3FhPNZoJudkaE3ySZyAVdhjEQsZk8AR9fUDgDAyvyD4ud27WHzk6qvphhGZ5yJzkJK996wbT4kjMqUspo",
  "key20": "4YpEiLB11RQZt9pFAihrUUoUXD3pJ3V7YHEMMdsS8AgQ9bbGHE6uLX2m6TcVKJWkYL1upJxmFCJ22eFpoU5GtEjm",
  "key21": "2MNkwJ37JsXFmZuyYYc2suzkjJvVJMZWwfCmuPE1qQ7yWRJVyuazqV6RroXDh4VmKUSr524nSm2eHDDTBideng6d",
  "key22": "4VG8YZfgGouEkRZtsjTYHQmmBUDGkidK2Pqhbt7rT2gtfuT8p6J9P9mJH7qcTmtokbLhjCUxWVicnV5qc2dCWb22",
  "key23": "2QPQeWrQiXhcEiCT9pFvgKZEx6eKWCMt8tMEWbrwwv35HMoitwKn1fwk23vtGDqFAA6jGJrg19SkW95GGnhkYxiW",
  "key24": "4wLvYhyuxNGzDN4pocHFCbdDPFeCfYcrmp8zrt9to2TqXrWQXWMqbzpQkCLGsohadRiHEDkAxme8DahgVnT94Rhf",
  "key25": "44rH4m66PDYz4x5bhVSC8DnUnNHXaaWDNyQgz3NwmoAjSUaHNxZjpVJQ9ubgnaZ8UAGJ88dXkeyFPBepoEAfp5Ap",
  "key26": "5e4T4NzTbHzB2BGRHE3PGWij1hfuhyJ3E6xbNgHpsvzi37AAFw7uNExNf73LEkTnrX1vMqwKB5He5ySPz4P6BN1p",
  "key27": "3VkFh5MA1aXnAh2QBaUFCarRLRBX4SXQT7cm9nReoZwrMxgkDwrf8qgpp6ysZtGYAsRFXHuxFmAHMkAvt3M7kFPF",
  "key28": "3pxYJWsMuHdLdRBxse4qC1hR9spUrf33EkPTLekc127SWyPYXR9Emhe7diUkw3mYKRpRepyrGHnYNjh8XfZJqzDX",
  "key29": "2XhMa8WAhFTG6vweaqoxjAUD4FSC6HtDpfSMmVwENL26exvzb8D1AzxvNwZ1xjMtoq98BUzbwhAsZTdHAovNwtVK",
  "key30": "62vbbTXo7V1ahiT7kdfabf7p8F56vNxbpVpUuYD8fXRyiBgErsz3tFk3jEjzgBNJBEGQU1rCXiXD7SVfhNHiXq4H",
  "key31": "3WTvtH3NbUrQzSywR7oNUbuHzvbiJFuwr1GPcDSvxE9EuLWUhfVdtT5gq4rFJdiWUuH6opFewDJC3qsaDK1bfhPW",
  "key32": "2yxvufCDESiUWTARxsVo9XmVEJSt96pKJvSUvCJRbQpo3iuq9Nd9BD1Und1MkBtMAoeYWtSQNV8ofBWrSFvdhAku",
  "key33": "4pkJtDXpNDYgQwrg9pDzCkpd78gSixeudUNr6kuKfaxbHYzHZSfeAzvdbh9grjWxqFAUHCo79GbQz31CqmQib3Eg",
  "key34": "3KmvP2ERE383rtFHUHxJypfq4HQZLagND9mxDADodSr8Tc8UY5WCYQ6PPuYsvfFm2T7JMPwYnChV69J2QB6RCm3h",
  "key35": "4Ft1zUNqFWLsHr26EotkbhENoxgY64De4DNK66KukAeHng17e6U8vvBWuvccfpLVYVbTVjUUpqYQtteKH2C7EpeW",
  "key36": "24JoLhjZpf13yQv5arkLUoCHKffNY83RdZQCZrGVsjog49Vghhru1Th6fVHTMQVCLL91qvgid18snDnR6ELYTnGL",
  "key37": "59jivNYBqe2nupWpZjfeVfFJ97zVMZjWrncNgFEoP3pjUwXZe1fygoxuHx2LVPV5KqeivvbAZz4nBUvFvuoeaP6q",
  "key38": "5mPggGFfA4UC3Uo9Dxb73yvzMNUA6Lo88tQfvHQkgFeXG3eB43wPdVxZZi3Rc1mKSXm3a3tGxnCVWE2vTzxKoJqv",
  "key39": "5zRMQJRKMMUYhHMwLcdxDAsUDxLYXWEMUpwugzqhGTuiVDvhXwCn3cz9ZQ5K7PFjaYX3U65fPjAN6VvwuDNEFYiX",
  "key40": "BPtp5RYdRCGkgB8uAFPafGSEkrFSgdjLgw1wHDc92biC5wdCyZ9iGXHJcBNPtwsJND6z8xnWi7PL7bk3LCYKkjV",
  "key41": "5jTfbcQV7U9Q6vFKNXhs4jSsuT87wK8FJ1B5HFaoPDFYAu3m19AcTLjG582JHrc5xLncLAtqD2T1oKh2NvUurmaa",
  "key42": "VPDk5sCK84k5oVswRjHFfkMxxakcTNHK2XYcHe5Hya2oXjt2xXLM4qYmEPkv2fS6KB1hBH1JSUBHKTc7xRRf7py",
  "key43": "57xB6xVFwhwYUjLfHXoZaQi7fvAfEhqsdgutMFKDMSNXe1rAQFpY7wpuPdYQb4soZfgySMVpFaBgZdyisAHp3pFE",
  "key44": "3VjikFMZ5kBxVbt69FY44HWSH4Dj4gN22JmMK1rmiG7hVR12XhtFqdqUNDRBr7HWQMKfVmide7pnCSbmj3oXeTz7",
  "key45": "3TrR3Zb2pDmNy4bQUEZKyrsTsQ1Uh7EixCL8ACFX8w8rKvvetNHdYkuRHJ9BoBc7YP4yxQ4FzA34Fe2hS5w7xPYX",
  "key46": "5zmnuXAKoJVuiSPFkho15zBBNh3xLBmePJjzQxe4mxfe2F5TupRrQiH8ts6UUusLrqQtXRSY2HKQPfH5eMvifEh1"
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
