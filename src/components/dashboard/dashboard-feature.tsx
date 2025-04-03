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
    "4TTbiCd9N6no688dNwuz9gnu5tmQVLrPZqC5paefgX6dmnN38Pnsih65yQ6h8M1Gszryxm7x9VzNrFSiKYgk8Tcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EcMuFW8dtg6v8YBaSwNFJpEFxuNH51HhrsAaCRo8ajU36YpnqgM1EMZ8R48HNUXiKy5sPquFoYCmrQ2ZyjHDmgS",
  "key1": "39koUzwEnr9mJtQbDuqLKqQhf8fxamppg7V3VrHzEmYstU7B6QRPE9vSMiKwCEKqfPnDZnCQyCueCB6E8PbZUxDf",
  "key2": "45Lm1gNzxLxbj5rQddsX8AB71DzU6BayXFagGv5m2RxYcWhug7ZUjsET2Ji3FpqikR86LGXiTacLZ8cezunPsXCe",
  "key3": "CWUPLRkrj4QdKuYni4Firf7DHRN6YQKLwksBhbPPCkjaqPY4VJ49tUPkp49e5CjZBDKg1aAsvY3hKLtaFu4h3EE",
  "key4": "Vev6aNomV4T4erGzFtmL7dV31d2YHHhDQqAzoeiWq4fvW52gtmniv1tY7Xkhr1XTSMoFhP5NubYJcxeiHrPMmy4",
  "key5": "1uYw26cDjPXWDZyRFVBerGaX87nRQVJ5DWinbwHPuj3MAdDpkJFoh4yxmy4i2vFPbCEDQr6UaRHFKWKMYg8scNx",
  "key6": "3GnFpN2iq7Y15WYbZZ8YuXwgBUhQJQRn47ZkEW1DBVbRsPLrAqf54nc98UCYT9WefLZTan1YfZ29vJoc2DjZZUms",
  "key7": "4jdzZAM997ELKgqzUj2KHYJztGjE1mRB1jsJYjfipt4AqbLDzuyo8HQayUZRbCmR56r55hkSAmWjfHnf66THzMUr",
  "key8": "BFDDmvrN22FvypCDUc41VEY2j5kvbL2keCg6VQgTEAGbD62RPkpCCMJF82bCEbMEcrbnTXaX2HX8h1qzWd98KPB",
  "key9": "3TtFK7GkhVgjU7zLWRnDE4AaeRE5HWAn2vtUCyYNbuueLpr6Ez3Erp1es4QqpvisemvsGBWqvTpbc87iuyWoBXdL",
  "key10": "4tdva7Qv9Rsh4CYVMCLgh5S66DhKZsQFUcJ9HaMsEc35xkxmya85tZwVs3R9chdrVQVcLMUXPfvBisQz5gMH2eZ8",
  "key11": "2ZuY3TG1xZERSwjKcdqkuZ4pwrktMa1bRLCpWr5sFzc8aPtj3wwCFodYi8kotQ5ZGehTuGrGRSWbxMGpxHa5YUJu",
  "key12": "5LWq8UcyjAS1ZUpQJZQzzcyTMuEW3SjQGhbDvZyiXDEXPo7K7bAgLNaAXQdSNhLyoR26Up5e5Qx2H2Ugnh3H1orf",
  "key13": "Cb88Rn4BPSM5zvX9Es9AoTRGcM1e9Nas5cS6jKpyPwRwKDBRfdtNAgiNVVPefD4phYm2YVUSsjpyym3oZf2bxLb",
  "key14": "2PXcUQgAfKUcgkJoUjQSqhVB7vUmWiG4AXtmBmZtQG4hkDhPHTEjnr2bNLkn7RmEiURfcm2zEYpXn1rSGoLfGE5a",
  "key15": "3p1BzVoR6fxRneJFQqae1N4NeMUAJzokfwF53GTkicVs4y4THAKJGxNrbztcMyGwpmc4d6VETfpKCD5ceZDn7UNf",
  "key16": "3cv2XydsvHNutpjfLcUMR7ENTevGNqYuEq9zjyWC9Niwnpa5s3hNAThPmaefn32d2DjFN7LW5rviuhbVQXnb9s3v",
  "key17": "23yMKCd5gY7eDhkxYrG46p9rKkmBK3qq3ja4F4TdB6wtnYHTtYscKQMYBs3qQgPriRQhg1iHS43cT1Ez5HJTVGTk",
  "key18": "2J1UbcNHaPqCNctwvBytgpY9xE1io546JA8fvf3Qy6TMbBbQGTW3rfBdcNR68yGPwyCSF6cvpxp5M9Hm4RgS5tLw",
  "key19": "3WBdj7eGBaf21XuH8R2VqiMeTLwhmBeSG6sUJpbpZjZijQXZDLNxmn1kSGyXvMi97b98Us1bUm9LkbrRNSadsCaU",
  "key20": "5NDiUtz1yxL2AfyokovNK7dtZ9EhUNzfXcxcaLctxfut8kvCaWo6CtLuZmUqv7BBFnAJHb1AtcM3ABJaTka2CBix",
  "key21": "2Zmtq1Cgnqz7LSWNxgoo2NNRGHb6Eoc9RRvfVvewFodbTQERYsMAJWvzN8WvH8NDADKrskXV8umHNyKohVEghVCE",
  "key22": "2HmFAEihfhXJEWjGEVn4152x4YzbgWh3UmoLnMqfUyUMHciDk4q7bYNhxZodAmUeHVAxuJbznHvhhwmw4s4WAPZ5",
  "key23": "4nyQ6GeaTFhYcaJzfhVikNhhSS6vDPL6XDY729nv62ce9LRVoZh6FTs9X3Wn8fJ4zcHVDq5anPa5Agy9C2RBNV5M",
  "key24": "3PasTGQhgqw2bs6NMzp9dqJPmwxvgtkqv5zofkj96S2tR75vPX3DTtQGHrDtdvscyT6J8KyV7AmmTrVTi3x68cWq",
  "key25": "2Px2gmEv4MvuG3mx1RAjuGxMqSBXW8M9wyZEGLyEmSCGBoSDgPSmFLHEYNxRWvm5n9LGA3xBrQaQ3WcCSK3ay7Kp",
  "key26": "39ByoJUsvynSY5GgEAZaJNCdT2DUjmTLB236dCkeZdKKDjPF8aByiCMxr1z3zWZRVxohn1zgMTWRNVhRBkN2GFk4",
  "key27": "2CPeQjfE13vUnEn1QQcZyxXE9dcgUYr9g4EVcBgYkmgfNMaG1QHGPdGsf9QdC65RaYKTECahrrt43mGZeZnDxphZ",
  "key28": "VcuDNTxJcjz83ajzrZLbwFeDK1jaxTzj3NKuN4tzjCxLQpgAbZer4ot7QNtwGkSUzB9L9H4tswcHVXcvWftC4xp",
  "key29": "34jmo4agBfLBdTmiL4m9YM3Q34WG5S2f4Z1dsH4mGv6pUcwuk13bwFekGBc3giG6eVttACnc6D66HgvCqjHcL4Kh",
  "key30": "3nFjNwFcwq4KzHwE5ccj2psLPAe4DmyWGge2uQoueqXr13p3PrafFe7c9KENitbbyBtKXxz2yK2K5Px4bRGjjGV8",
  "key31": "5jYkBXsBKtkb9XCVYRgfZ6LSHXgPBZANC6fmGYNbemRHkSnNzgJen3PijfGSUpipD4rkorZ5hE7eJ5PkYX1r57eC",
  "key32": "4EjAQ2wPsqKNydpzvYWWu6xhShq4QLDrQ6WhMiBq7v82zVasWvkyAbvGNmXjEiqQCRWJ1rSYrAKTXMJvitsWE1Xp",
  "key33": "3GEwPSPLwzbczB3HTpQNBVEmm93ywobAjaVS4zNfSyt2dyzJ3n5w28ssFi1iBsctMxPpY9aPZoqCm1sdwCSsa48C",
  "key34": "LB2RdAL5dX67ZjKZbqkvqopbnQXxygbtRDNjG8jJygbT5nJnQH3nTSetdZqMqGuomaqxPtWiiEauxKHDWNZeW93",
  "key35": "62vw5Jfa47h3bB3kkAPjph6L3chiAStH8AogUMhKaDqHQ6hx5iexReKBeVKPgXYQbNbkrNn6kguHfjJUZ3ekUVkr",
  "key36": "AqwgfSmBv3UKdDyGtv66jYLjAMkFUw6f9HRLZZXwyZ7oSA3M2Z1chwZSrZgpKaqaeTV8SNe6GWS6PYcwjEAZpsD",
  "key37": "1Y1nxBemPZVtE8DLWjK8K8TYjakqTqc1HapVWifbiRxZ3wdrtDbjzPBQio8NT7WjLEBFSamXNVmRTZZGQMCcEsB",
  "key38": "Gj3QApUpQPiQB3E1MUxGgScyY71NryhCMKk2YJqEHZfp3WNPoHCh1Pn4Bn4sMHjXSv4dCc2fumNCmh9gFFW6hgT",
  "key39": "2eethQuQMyKuGMbRAqDhWkJw7cW62cgCY7tSUkTDx8UkjUxC82Y61QNGDyDUbo52bW9jA5RcSCsQsaZZ5vFASmgZ",
  "key40": "3wBgRu1C6aAaVFpu79RBd1xmkcdNHnk3BMD6VLQyy4md7BsME9UZrTfpEGE6zgTUC5AGZsP22Lo2DbPYzpkAVL9g",
  "key41": "5TRZXGwGNnZV3BUnsoch7y2MLsQrZcih46cMvt6vW7soZGkZ4npMyvAYbdNoo67PsERN8stn2ZJ6Wb2f3hTQcYF2",
  "key42": "amfv4bx7yD7ovdCNMpCNTcRZ625hWV1eGrK76ZKQigdGHgh6qqFm2PseGzJRvdtL3zRBB8j29q8tziZJtxgcNGj",
  "key43": "4D8begVyQbBX9jj154skdjLVVjxkdA8RMLJsZNMm9vd3ngNfaMDCEU4yyywrtT5ZjaynSJmrup84Q4qRhUhenncd"
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
