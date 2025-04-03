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
    "3E5bLyMQux1jBv56sr3CXhmTLa6W2GUm16KdEeWhxmhw6QsA4qELGxvbtJ5Pu3UHwqn5RFY4VK3AkYmaBjSRTss6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yUL5t4HxfKdroG4ELkbj7CgHLDcX8Q12sGyUfTtJUUGrT2MzaNHRYXuS8pGVb55hT512t7MBEGWFgmVnZoMt2jf",
  "key1": "2EscJsHv3WsABZEJe66M7X6cmdiJBhkSbXQaZpS33XGzmUJPkJb3bUH6s6XkDP2JT9UKdGCnRPy9cJYGUYgzd3LJ",
  "key2": "4XGu7zQptZngU4ENoW19D3Da2KtnZP422mNLEnG5gKGDJcQuM33ZdngVc2hepoLDCVDLkvS1Nk6XG5apgJUvgwe4",
  "key3": "EmAGuQECZcC1UabKPUi5iPMVJAKBZKgzsa6jWLVQmtPVTHCnYxLmsj7XcHL5Lc8swh7kqRyYewh2owArEsD332V",
  "key4": "6473rgzdLBd1ZGrZRfAhos8u1uEYzt9X9PyRMW3K83zUDm2N2ARjMdBig2QYaHdKDgvPzLdXrrKkgKyHUpt9v3qa",
  "key5": "3HYrQHzuBwHM3KEvBeMPKfcRCZzBiWx8fEJnkVWpggYfCnK5xdw8YDnYbjkMgMuD2t9Yo1rXSwB5AGuQM6n5ez6h",
  "key6": "2fr4nsVC13MuvKjKMADQ31CJNb9jJSAS7Jn82o6bEnUXNSQ2j7UkAdaDFuFAjuApkkioFFSM9LZ2NHUT9F2yp4sy",
  "key7": "2PMg3GSdZ2gvvK6Auf9jsrKSNbTQPybKvN87Nmm9SQUwEvx65Xje4hs8qSVSaAohwPDuyHJQU1Xgv6BNtuCsuq43",
  "key8": "67kCGNBYAsaA2GJ1JhRMztJpZeHKdQUV9ewMJGduXz2T4RxdNXE3GubYesUcWrYxeovbzZ1gdmQodjbgVXLpWPKR",
  "key9": "3DLPE3yrbRedbep48rgaWHGhZkFW3Ns6fUgX6NR6UTuxjHKLMEpmbkt8X9MuZTTtsiCTJkJ3NSsbUMFfKeE7e64q",
  "key10": "3ny9e9Zj7Mgurnj74G3ixKeu24EteutsSHazU9yQ37NzhQV58ZfNYPLYQF2bcn3SzeoSujvcY4pXtt4dpBZcAMwW",
  "key11": "3F33ivDX16bsY34yZ5pnPiX7Lgb4zv6fe1LA1mameEBAvybK695RwwkZzWybeA3JQPjGqWMavZVzbvhZGFoTMG2k",
  "key12": "N7jizTNqNgsjxxf5hFwTWamuRMht3ERXqN5FTyQbD4aGGnKsRHkypCsXVCBfAgNTnGNNQdGs2sEthe5FNLFTXfH",
  "key13": "2MrFBgas7T2kj8EYiH29ehM4PViuwkM7Fn4XgcCCBCm19sFYFNm24AMe56WXLa5ogN1Dv3KY2Kn5mmkodKchNS9X",
  "key14": "8rjH7xuU4REVUZQLeYiwbkFUU25D7GpwTPa5Jh7eGPfyshGf4ciDCB23dwQkL1oFSWywk2UNosEeyMBTF9ZBvYt",
  "key15": "Vodfc7Fh6MJ7DVHN5uJLZMvaVytuqH92qUYXeDHYT5bsJTLQWZRRSH4nQCXEEDrNGY9YR6EGyXgK5DpvRcNtafG",
  "key16": "2wWvMZcGAHzwrmk2a7DkEfQNgt76eLiWDGAiWPk85zrchacN7kdU4C625RAyA7UFT21TQTQqP7xPHtWvdxuzoeur",
  "key17": "3vm6Nr2nZng27AbhsfJgN62TxkVAG13zbECvQdX2fT1Mc1e3gKbK3Q94Jfc3QEHYJvgfA5q9jvw9ZXU7Ex5J1boe",
  "key18": "4A2MSFJQXJ1bzZF2jTuGj3cC3p595JP9JbEBj14dRimBqqL4wK3hpfEZXgZBqAkyMq19mn5z14wDc7b4veGePWzS",
  "key19": "2Hjnz4bpjtYF6rWaVMuVemsuXWn9FnUScjrt93fT1XW5hmKwoGZw2oXm4pLqMA1y9FgtCQ68tFzHRLcy6YkrRkGs",
  "key20": "5EpR1YqoZuz4sdez3z4kAWxADpcgownLM6RMiKLPLK6xc5py8aWBJkBHrua3x1EsPyLNQVPRj5AN1JKMJB1iAzAF",
  "key21": "5Ct6U35n94sWBCoq5UWGyH7HoW9iPC71Nm1mricFY1c9Hh6W2brKskWEhVVFZnctJRiQddnmPm4wRo46f1pspC4V",
  "key22": "48RRrSNND69iPp6UFFcXMtNLuwfLzW8zyHirou8wk69S7yCibSbKQp7dLKKG72PyV479WwKfpH5Wso9ShpHXDHPT",
  "key23": "4wh8DvxTWZfLgfhRnAr2PBk31YkDgTQE424CLqhVuzNjT9j2PDzYg1PE1RZNThYCEcPgxzR3fPhdhaaNuFSqPo5e",
  "key24": "37Xfn4prgTME4hywY8P8NrvPtLBXj2BcoF618PrVE3aBUdcWqjRJ2Di8H2C9GChsU3326EuG8YbMo8YbvjAd6Vdj",
  "key25": "VQzA7yH2y9JY7pDoJ3eVGTeo5niKDKvHkYoN1B6JoLjXF9husBLi9FJ8ciGNU2gMGa3Xb5gF2mgPbt28wE8vqpW",
  "key26": "4CjXCVfUGxeJc8Es6Xq4tYQ1SjMHqhPY7G4AhBU9EzvWbR7yZ9kRozo9rHAkvPoGsunWCdYZ6ypf84tCMbwpwNJW",
  "key27": "665PCZ2twD1MoRvcAWE6ue5WUESZcRNPJRDLBSQgqknfLJXENNYkFezKEtnnUHuRRhX8EbAcGUcUinFqP3nzPYBv",
  "key28": "4FM5KvFDJAMCjayhvB8UVcKxeH397DBYfANtK3JvhLKyQmGeKvZxZJQvbCUsr6XhL2xC6M8B78Ne9ik11Gn2hDho",
  "key29": "2M5aj2oGE33y8fxo5FkhtqVk7cuyNh3YnMVhprWNws8cAavXpdYiff9M5H1FR6G87r4y8Ygkumv6bpWnBgdjCCsz",
  "key30": "3oXJ1D8RXiGSmtNVFc53s2pUNzudYM4vdmyBwha9xHMMAPTsgLjHZEZ14gcaUQq3yHMehyjApsxNTtVAXog3Ugnn",
  "key31": "36PxQSEn6mfGS84dz9kLK6mjVPEUszqURdrf9S1DBhqm1y6r2agqgg52LEyBDnnZXNmrZib59YGYeHkXXibjSwBd",
  "key32": "4oSXhaJjLB7iZ5anmxwLv9fe6YhRL3p88bHpae5kJYCV4WZMvCv6vDxRa925fZXvyW51V9FGjei768V2WXmnsXEa",
  "key33": "4M7b7nvYdeTX4GrPups84a7uwQusYiUKqeEjNPan21TcSw1CAha8HEz4tuC9ztquySaE8xL2NCxnuKPvBnFtkG5M",
  "key34": "3SzwpH1955Ac9yzbxa3sA6U2aDxLrWFLcEBUByJ5qYMdY7FLaCJaXvGCCbDA6Dt7Y9vmiECrjAyPGCXK5rvszsyu",
  "key35": "dw6BmYKfcrkXWL6wxA485z15LowQ5r61UYrvVtQ8eK2PMoj7oPixJjQaoso8XpQNpm1Qvo87ZzU4jfAteQkZY3e",
  "key36": "4sQsQp3Kgy57wAwuQsUmCUYCVEUJqYi8W9KwvGBALUhht1LuT8fKGpHJaCbZATc7wy3jCZ9ErUocxFTszTAEntL5",
  "key37": "5Kx2BYQKxW9tHyvd4TS2Q2QoPLsTqVEDHdpgZzactLEpWMrKX44r7mccwQpPYm9v3z3QRmT73GG2mHqB9UbomJW2",
  "key38": "4Z5rRgYNVUZT84H5mthCzGkim9gL7aaxnYFwBM8WhYRvvvt1mNNvNxzJ2VmqZ45xYvgMvTmndwiPCwJNi3mDGW2s",
  "key39": "2GudGYkixU22wQt9sxpLwAM8MueDtPvweh2CmCXs181rU4N6MDojNAjZWrebsbbVdcFbMaQ5Euj54h9YjHjvHg8e",
  "key40": "45X15yM7a9caHQj1CxRJCoaVFkx589pyge4dwZUe9pZFhfHHj6VoTpBkmH4CNfgoYDQCyBGgpJd9KFMjUky2ptj",
  "key41": "3M3Ftk3VHbsZ98yzhR16psozMoTKrwjFaGKkBqVfX4fTcN44Lp59hBwAPPgRyQe1vrQ6BBR6Dvhx2gRkbvLrZJHy",
  "key42": "2aCUCeDqB99NXzjFDyuC6YkhxCk15Jc47XcrK1PGsD3HsPUeN6Z7x7sbpmdNDbJFiPNXrC6jeuLKY1XVwFR2juH3",
  "key43": "4Fqe43KdsqhxfUuGWKCGxNxHmrcmMHYzGYxK4C455B2vAkPoZpY8pcSFs3CQEQRCP3vp4bRpG7iiqfoEg82D4KNS",
  "key44": "4HzghBVEdP9LbzL7sscKzzCkjCVr4nKbjWvoeEtTUZc4gJhRF1pz9egghTWrz8PsCnmyTQn3xonnqyuThyEwigAe",
  "key45": "4xt3rNm9KcoUeeH6sSUtxTnKNhc4DCHbe4WXyRbNXc7Uz3fCh1ukDUNX7jNYN75DeKN2zmoNxcAiCw35aNEqvyUm",
  "key46": "3YefZmvvcvsvWzsRnQFqLHyUVtkqDCam6rnszJ1s3CKPZKLd18hnjvSKBdqr1eERK8ZShFQn8ZgSikbr5etWWK2R",
  "key47": "D6sZKbLshgsSKLrfRXqauzHpzob38uyv3xutfst16yeTDqYM7v1dQTNJKFnNAj33MsuLYUQfqWHioYVghuBMncJ"
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
