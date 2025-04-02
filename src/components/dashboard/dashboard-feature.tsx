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
    "2MFgci5VLgrCyMjGcLZ8ZXga6roUyPZ8m54XCFRWEwTHBVSdp5wDqKidShARET1f5ws7KwgAHDM7rg3amEGBSqR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jhaKk5oShJ7FJXrgebzUDdc2LizsAUbdjSdyc5dx3EEZBx8MT4Tw8fPirh5qkuMeyCnbiwhvUWqLr4Zq7ogxfXq",
  "key1": "4U8aKWs7Kg551HhHmXnSDWXjY6xCp5z5o4RGUfmrQWqsyW7FtzCXyaHAHRMRpzCPVdMwi6ko4sre6GUmaB3RVjVv",
  "key2": "4BpgrHw41cmbGASpAzKzjU85kmnX1V8iijnW11U1yckqMCUJPBGeUz8amx7E1BU5h3XzyGPNByeBrqLjzGQoUr1e",
  "key3": "3ogdgtQWKTLKBShzmkNJXoafcPEY55ghvvdPznyEq7TEwBxiWqyBJKSV1MLP1XTXmnazdWsCwXww4wcB1CNhR1HQ",
  "key4": "s15KRxKF8eKJJ2JkjWYELmzaQcGiF6e5vgtapaZHP1jfuxVSydgKEJeedwaztLVeRbiPNMV5g23Qht72TnECzCx",
  "key5": "3CVE5NEt7esGpuYFb3bXMkabEEc8NcicA1sCBq8kfnvYd7EgVnMMwY1bWbnw9jJniNVP32KwNqTGR8XD9XqPKcib",
  "key6": "4MTsbFshXKYcTgmag7ZCsCV73Leyk7v9JynX1dQfbNEUzc8pmgyDyybPtFqVGwU92sU4PErswcUfNRKmL1pw6k55",
  "key7": "ZBRhnmZ4XaDcN8ZpcLq5JuDaXWarzaG9uTSioFbirVbAGNf47FpuYSnJwyJ38p3nW4KJMW9GFozpmH1dAJTSeNa",
  "key8": "2fE27K6SAfWFSgkhUutV5Lpai8FfJ93n43TSHyLWrME81fWYY7p5hY1dWCtvH7DZMhagoBcWXEVTWTjYxvLWHbiX",
  "key9": "3drhdAhL5ZLSGjBXLK3N2EkoEqAELCZboDJUy8jSCza44gfcfmsf2fjvc2RTCxqDbdyxGevgvtPTfgK3PnFJdMNX",
  "key10": "3PoKpiAGTo1Zz4N75sDMMizDrwu1sGpLzaRErBACDkGvrh4XJQEKyb9qgja8QfosoRBXXQ8nd3coJ2J1xP8JVJEn",
  "key11": "5itB59FD5MNfGT6DhjXGn7mCj9FSPhwgtg4QEfRxCosErK7WQ2wy4g6PDrhaRPTLJNFaccFT1XcPvZtgdNsjxbtp",
  "key12": "36nXR2LxeHzx1MvdGPP3kEeXxeJ4kshK8hMUqDFrfQGt72BbBnEUrhRicp6pemRvnn6iqjykPpmc4qU17ECthBGD",
  "key13": "26C93UVGhNhA2KWG3TDdUHuew1u354uDfnJx7uPauu3Z3AtjgK5nvKTS4VpccRWN4Tehymw8mos2EMVJRt1v8gJu",
  "key14": "vrPSLPPzbz3HDPkujQGbx7KSTXf2HWZMUgLi63LPh6rfNsb4sf81AcrGaQgHC9X9vUQhXFpUeR8kWNS1AZRw4ZT",
  "key15": "3u5ADwGQSHyixvkQmw6iDgQUmWGaECbiQHYHV5gr4KWJHeWMLBxKCc1ceETVsydEo6m5pXVMg52tcDiLxrJokBBT",
  "key16": "5V49JZ583TAea2b2n3M8jPYEzFEoZF7fqDAWi5oYxGzv2CvAbwbp7SY7GuspjeXJrxMBvEsgyHdtKWyfFqLEzVT2",
  "key17": "338zkXAcs5SyLmDUhP94r4aND7Dh9BZ8Wy5uK9hURoZm66vHKwuCz9MALbtbjLRraAu7oNstfxTFxVH1wweP9hnJ",
  "key18": "2Aoxkevosbepc3Mmr3yqdgtDXjaLkQvR5eEG4jT26TRhQYWb6o2fQtjtsTt3mY7kS5HMxd5Dh66TVgvt13srfBcj",
  "key19": "67BfocZgic1eh3RPazP1SzFPmQQ4TKRLqxXYcuqkF27ocpdkyZBUz37WbHdGQ4gtfLoNPNyeEgg3exD1be4ceYUT",
  "key20": "3S9a85pbTYh13NN8ssRi7CPRjxuAPEnNX2XN98ACv2hgWcjTu2p8f5dHBU4DPoKubg9Qma9xCewmPaoCoUB4iWSX",
  "key21": "2Q5oeE9EBzF9WFmacZyEfkAg1d9e6qgoZdwVs9sSJJFwHCHMu7y743rtog7hVGMmwA9FCS2FLwDh1d3yFD6tocr8",
  "key22": "yDCh476bAaaGjSGkziAVQrTTYNUCH3pd8KHZPM3R3iNXtK6iUkuZu2kKWkFTKdHS2TVS229kfi14QJxaraVkct7",
  "key23": "29rLUi763UTkfpC3U2yUsyARA6a3yYEgwdJ82cmGpibgCjvsYARcfMWertWzakWrij1Mu4wyjSBsx3aXh76pJZ9z",
  "key24": "35Ceukte9xVeTFeRiMtTdda3HSFMo9GY1ZS7M56PDdE1be1pVccrsoCHZ1KtmteZeVojrCHH3aGCjm3MLBqy7V1T",
  "key25": "3cdE2BwAYtMVRSyTgEZirMbXqDAs7iyAvyJx68ENAnD2j4w6JSjnBhUq5h1dtBTdSktwPfw5DjcsEDbr8GByb43U",
  "key26": "4E7MGcmSW6zL9pKY4Ar4kk7sYg3TE3on9KZbE9T2qnAdNAx4Th86UPB8gVLxAxiYGwUs3caoFi2Uw5i4LWco6MP1",
  "key27": "3zgY7PNpxRkmntYFyFAfpfyK32s93K49JkYovB8A7tLGcq3KBRku3FJ3zHKp68dBo4eDye8TxcrKUPgMRdLXSUDb",
  "key28": "4BTP8rktwLJ7ramKJc9YKa4KBYojNUQKChSFsTei7423cGuAE8oKZN8HFkWjBVh96wZdZ6xX2BPW9YEwnDtBeGiy",
  "key29": "2ZgUpyFxAoP8rFoU2pKEL3Wj8m2LKg8AU5sN48QUx8zAX42V7nxSpkEuQh7FMEkVnKZ9vM9rgnfSAvhzwDpuWxK8",
  "key30": "5rpbrkP6LGFj7J8J2SHMrgSGNWCUHWnKGTZzTR1LkjNH4MbHMYJrMtWuRqoczaNDJdnF5Lq5mXM9q91fHoiMPSLK",
  "key31": "3SAyZJc4ifBur7H6XaZbXXfhVVD9mkeqt64p36g6P8ywBq9UUJT7i62dnAW8QEX9HLyE578hMf44B5PNRtSrP3XB",
  "key32": "4N22tDMpoWzKsTUAQkXFgb2VTTCfjMGjScQpa7F2H8ERJmHt1Z15SxZwsXnKH1MugNopu5dZyobHo6mWUG72DPQH"
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
