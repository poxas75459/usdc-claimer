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
    "2ixRXpF2w9geqR6G7imNw3kM4Kz2dorHvNH2zNuJLRH3qCEWQYQjkDF6EtkHVpH3GDGkqKrKVfMNpf5iYZqZbr26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mVp4Y4EtwGVaNUKGEaTi7bTTm17FTJkJxuGrNQW6cqC3ZDHxprTg3y2rsRRajgAFyXA6goXufgLai22wAyFFB41",
  "key1": "5TU35gVBFRibtjGLpBHtwzaP5obMfW1zvdgYZWBX1nqKCddkufiYUGWZ9xhcQMtbarLNbbKqbRrpMmf7ZYQHhnho",
  "key2": "5UQCfd2pQq75RyKtyGumTE3ekMrDU4QgaxcfvGLWcnqCW1H84Rer9HWVfK6YV4bh9cQWoVkDSPG262k22zEghtjK",
  "key3": "kbinc9fvFuDZgqPfTbvH7HkKG56yGLPWigudfxjEj7Y8GSiektDwXdXga1kuPCAFCCpwgtxtDvFWg1bP74dpQcb",
  "key4": "2Bc2PFFnBg4555FYkoj5Fc9VVH28iAbeDHh4oenne78wQM666RT77BcPtWJnYjaqdAhqDeDCh2ithiaqA3p4R2rr",
  "key5": "2bzGhsdFUwWxnDt4DbQWfLMeVJPafdRHXKVmywfa9qs45fFEyLRnopQb9b9JnTZWSpdh7ZFTKxFRfCK4Hjcc5Fz2",
  "key6": "3hpBGiTNTyArpsJTDf4ShYVP2tb4vtfxMe93kJuCG9guDPVYEt4kpb6Dnn1GrKELLJAZVBD4FNJyJsNjF2hvLVyj",
  "key7": "5T5ojt9Qp8p314jJJhScjcdUhMABFqcXMCSCj8NvCq9sFQnb8eWC2nSUXwTcgY4h1WENGugzga2ChCRkL2CWcYzB",
  "key8": "31uRGeLkgZBRQBYM8YRBgbeZBVqJqrWiuBGsusj7QZWYHKLEe75Mdh3WoxagSVDPZ9b7BxzhnXmFk8h6xbLEymy9",
  "key9": "4W8n1wNGTyJqgZw6QwSnS5yfmcRTXh11mYxh7fAZNGRESfyVnni9KL4EQ5zj4gjFrvyv6wQrhDxjU1niAA8h19Td",
  "key10": "3x3skXKddZiLrTKR5JoYZtdhfUcQjZmQPe1EBb9vU1R6Z28gaPzvBcVtnZ2JhcNRALT2UBTvNQZkBFLxkSB9FeiG",
  "key11": "24RGzPGV1qjX6ut7NL7GNMeQvWMxRJzdJwysaR4GKwjbm5QHSpmuy4ypxKzRo1p1YG8aLNYtT3iQsfjm4o8uxyin",
  "key12": "5Cc2eAhZCWfvBvLbC7656eh4Y811H3uDFCkxoaAe3pqEscv6w4Bo3V2zjz2dPjLPs4cfy1kdgatSVEmss5zVjfzP",
  "key13": "2FCEx9vrd1WycAtgZiFGmFtDPatLnF9YJMph5XQEapQvJ3uNNmJRYfPCYedsAdskhqoWF2GheLSemEWySeFE1Ns4",
  "key14": "3gWC9K6WWiXHdRCFjSyHuVgXjjzqtQaL1UyBhrUQGngsbboNbmxYE3j2nmyQDoUd9CP2AT6cAuTK4AToCmugVN1o",
  "key15": "63HjMDktRG9XETbLWf571PaXCStetwRcMmoPeDdXbEdv4ftNKVB7nWwwJHAeYDfRgNRc7CLrmVMipuo3CQ2V3L5b",
  "key16": "4Z5LPcpkMi2HQ7n2WyZ8oLz9YBxPb5TRnAM7j9aMySxeXsn2hY7MRpr1tUbhJTHoHiPLhWxWjqeWKd6XvtzifBtP",
  "key17": "3kZdnviquVgrfy3xribeW1UXhKMBUD2Ex1ZsNS4ACPf7oJQycHHitXwzB1a2tNJkXAcbnVNem2jSQgDAZirP8bRA",
  "key18": "25TbJsdUKvk5fGw7mewAQawMvNosjEaZAEWPF2F73NJV6PUayYs2exDTdmSrxbYbdXEMZ3bFTaKsoezYvd5L7zXH",
  "key19": "3nVqLV9SyGK2CcsUHRDZCAvp6DZs1HG9H2CCAXUZvHPGA89juyQHdDyRQkCYfHEdtUd4rwZFSsDLvgDoHLY26XJ9",
  "key20": "QcW1DQqNzoCnsS2XWMmC42u9PEFMe3oYGvaBPXpr58EdYfXJQ9UjrDUsqGVyn4HiivjFVPtVu6ER839ibvcQUsH",
  "key21": "2QhfHRxabVWKtkLhQ6VRiArpQPYoZDe1nYAgtqjg2kwinq8hfchzouDQwtfpGPdrSLeHF6aXio4t8BeWH9AEyqGT",
  "key22": "JmuAXsaAw2JaqH3C26xqMf6RuogzFaviF5xTAZgYoJY1vvPvE9ec7cQqt3szaqNTdEsJMGtAifKaijMALg2QexE",
  "key23": "555pS5vYQtNqqpMUPKR38hm4wrKY5bRTu7MucT5i6CTjKgux5ViKH1eyuThk2XsVRGWMTqrxV6Xg4YEQ1Cx6QWoZ",
  "key24": "5yz9kUQGGHSd1pHsthKRRpFdFd6GScDAjvAYfuESAjFJTHD3j1XxzHunhBtfCcPbmX7tRvuMUeVkt8ty3XvitpM9",
  "key25": "4tQnx4LPsiWsap8nr2DSr7uEe71VUUXCb5oG7UWJoBtRjzYnuYG5xEMnzec9Bz8afZJawwbbw3UXS9EyGedXS7b4",
  "key26": "4eEy1Qhazhsb4TyNiGQjxhUSGy11pBDWsizhEqsxBwK38pEutvkx2EvU78ktsKqF9GyZvmF6oYsLLmDgvSuTchRU",
  "key27": "72H7yEVzcp2P2b5LZbBgiCsHHfDFXWvhzfvUaph81THtrRXdzmAAEn77mKd87V5cmergKD3YX3qSMWdp59T9me2",
  "key28": "4FmNxxgGGkg9C5ujRJQ6BhiBhU457HZ5C134iqsK6JV22rzWHe5vzAMukjNG2hFCrf9ofFGcLotGEmxvCPKyaGp2",
  "key29": "61q48oQNRfojZYWbTHtoMA6j2v2h5P5xkcC3YWkgT6JYVrQSzEiwP3DqkzcDA8FwMRZhu1kQUNmUUp9Xoj23xNuy",
  "key30": "5hDG4DJcNTTfgLzBMyZNAYRvPJFDxtCkZ4FY4SGns2zDLSfqpTPCQ2xNsPkf8w1xyA4mkeednyFU5pWsA1C234jf",
  "key31": "62QZ2pbB9U6ncSMTNTckZufjWhXzN1hP2ParvtaSN5FdSLgFPHDA9bz5NXR5zts8fEDL5mypLM2XpmVD5oRzH4Ff",
  "key32": "4WsQDVLuNur8LsjbKdUBShKguVAULRsemhoVVHfpimJQyyQUs3f2DYa8WuzoxR9gM2vhVmR87YA53AQWYsvCLJdM",
  "key33": "EQVKgQztLJD6o11XChZKwzSACVQSzYLBjVLDc9N4StdxBJopWhRdQYTx3L2QKTp9j4h8zWhwjdhnvoUav7Z1WA5",
  "key34": "2tJz8cLcUQL7ZKTXv1UziFyfs1cun7VxPDmtvHRyb64d2ysvVABoET8b8duRkJgA3JjHUWV41fLJP7dfh8TzWK84",
  "key35": "5PzoQ7N68DCuoxbrjCFSG8wFUWnFU3oZjwCkpF4n96nwFNQDt2sj6S7uewLKgNDMT8RGnz6ZsjuRRDjXZ6ZYjmvk",
  "key36": "2t1RZeySMNx4FeeAuXw5eUsYxscxfQwZcEMbGoGcEfL2jEYvKP2cWwNgdTHh6DYwwiT3s5afgdd2DJqbmdtVx9DF",
  "key37": "3EB3we1uvxNM921wVp5FM8PD5jdTgyjnA7y54hYhnG9a66Pj63mZ3UWBLmj6wQPDftncG4UJbBJjkGTudEg7fyGG",
  "key38": "ZeLHQjJvZbTfwdfZEzNtrPcgHmgoXLcVQbXhEykbRHUb9UjWqXcAL3t9NjE6FN7wS3xtEBsNzGLYgzUYQZtqqCq",
  "key39": "4cbfJibmUahPZb8FhwfyQ66D5evorFPGZAes3oxamQ4A1PXtFqjBDa6xiss3CPE9rpSrGAi1We3ycU7pRTo3QaNF",
  "key40": "32vCRTGoMYrBxKhAn3JVoyc5XseTQWFT9nVf1kke69J61dWrLczF5CZGDSRp5uucUCtm371YPMJw5tHXRuLQp1Sw",
  "key41": "41uxZ1Jkvre3tWKVZ9aahmTnmnAbTTAbadTEdNgMwCL151EXpfN71urHJ5UySoqtuqTnuaZmydqJ5hXcSnXXb1Rz",
  "key42": "4YJe6zwXCYucDY125VvkQ2TkBeGFnti43DDkXhca2ek1B7mcr6ADDuuX24mCiyKdmRjiKiFhb6kS8P38WBh5xCe8",
  "key43": "66AvTrLRLNZDN14Bj7EBoJJ59LN2SSu6R4pMRJ1LuyeTvaNdfC7jRxYuGc3m35K128einuYanSsRqKyfGU8maP4W",
  "key44": "3kPJ3qRkC7UWXkY9oiWQNQmq3JX1QBwfqhM9f9WthHZBDJsV23oAoSLp23iHJbhv9X6K4LAE4Grrxiy64b1TqvWz"
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
