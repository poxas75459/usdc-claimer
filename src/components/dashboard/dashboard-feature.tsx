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
    "5hY6Yp48fZN2vCekf2C3Shj8HxhEga3eu9Z8hFkeW6MPweufcooMcLANfD8XS1tMMThPhQZmdD5gPzwWW9jBWW4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bxxGzabVPBrVgaRRwzvmsJckUsC3eSeXZNntGkqacF1RA5isXGKj5C37R2fX5uw7wHkL3tEstYCrhpejrt5tkiq",
  "key1": "2H7eJiPGoqUaGdduD9J3cNdCT3nkkaQFby6LpjjPUpL2TMa8MYUjPAsKUaXBdSBdnci78nKADa1SX2Jx2mUyLrLP",
  "key2": "2q2sYkWo932yGAVEyRXkCAx2Y1EQobs6xtLhMcXTeGFp3khkSHbAw23PSKBpwC4F69FQ2LmxuJk32Md6zHAVwGAi",
  "key3": "3dKwvKe9aMihUW4P3L4QFKZYhi7AvCP1AeiAtRXgmY1Zaa3LLH1mgSjE6wLevg5givcJbhxgU7oUYbFoqCmetPyx",
  "key4": "2dn8bK5Xn9oUfWYony4pgJrdB7EWjykcpqyzbJQnCt36R4TJYVjbtzLMKXyFacBcvzXvkKWYbgNW8xUbhKjoFzGK",
  "key5": "3udxnLQPDvmVvpuSQMaPCM3FHrr2QTkeyzKLVoszxENbvcRmpaVms72q8ewJRm2rCjG4bsYmnTdGrmPJxcAaRPL2",
  "key6": "2Qhns169qvboyDhm3MatM2LH5ZmvC3chByCUo6tdVa5pUDhYaCmLHT7eL887L2eSH98tQZtxuvRidehMxNMXWcUE",
  "key7": "3KMan9GjFqQnQRcw13eCBqPEoLmQytxgYx2pjBtGPeMUsr9RD4CUwzHrcKMTRuzhvQC5D9tt3AJQjgfUxsnfBLj7",
  "key8": "3Wdf9UdQghWD1Ytdo5vyXYr9sR3G4soEq1ZAQpp2m7RyoHg6vyXi416xJbY8CEiXkGeu9wHYyVSvEryXxRFVeh2D",
  "key9": "VfQN3MS8CtsaeW3rAkzMXTBN64hZSJGiax8MZbsZFpwi4odqcWay2zh9pU6ipPqvVY1AZ7NeruEgXpfGapcGEzT",
  "key10": "4AtqMyDVxCpGHxF4VhfQgXJA6g89kadXtq1wzDqgrgtAvERssqb1KQkUHStKMakNDtCD9stTXPoQQswiRsoo6YNZ",
  "key11": "3DzvFxx6zQEPTrFmUnAAN6347whNYyrLKkQ1fCV6PU1y1vZa8rD4ZNP4hWxb8FxcXVCE1fkzj32TXeZEgpVu2aev",
  "key12": "2YME4PPz1GiwpzVti1tS6HxyZawG9ppygKbYWR1ovNuRWACtAu9gmsVDffKdUX2eHXXqKLuPpiQvuxhxQzB85eEY",
  "key13": "UXq5R88reM5WzANgAemhMMRUCeSvBmGFcxjwoDLZwcN1kGjFTwpSNNBgbjsB3cMKjL961wuCWcgWD88HunUhmfy",
  "key14": "5kyt5sBTKnD4EBPoG1VZ1EcoHCdYW9GXtxmJLbiCsTJnhiEARR7uG3dgtTsbyyP1cnb7wXbjjHvsCWd5PkBHFoi2",
  "key15": "U5DfoAZdW5y8U2DHtT3YjBtUiAJupjhMnmxTfisvbbQxqTqA3se5Vxx82Zd5VUcQX3wW9b7b92BXeEi49y3ekCR",
  "key16": "5rG2ZcJGDqM96Rs8kSx1iTs2kiqM2mMwnHtZUCnAfRa8ZDxx9W13RT3Wnamw2LeE45q4BE1pSyXqtYbWvTbKLS7G",
  "key17": "5c6VtLEUvoTab7d3QG5ahFMgTkCvV21iyfR1wVjwrzcY8NtLPJcG4TZPSz2YmirSvSSMsZdFxkRAn3aFLLguifdS",
  "key18": "519HrFTHzp1U4emZdSBWrAfrVyWSZzHcb3n2jvuZwFne8upK3PxqR3H3EwqosEtqs5EvyHPJWvKcmpWLAAq7JC1u",
  "key19": "3x1sJUjSwaCWt3CtkPxsoBLiG1QpSizhePWdTqNBz9jCjJSGtNgSVCHGQGjC1zY9zx266hE1GViyZCLZNQ6XWpqU",
  "key20": "KeUgmWZX9eh7QT4pnFCLju6EkToNYACw7KkPiQiwiw5pp9XVeAxqtJw3ioqs3xtMzBohA9GLNCR9GWSrJj1wHod",
  "key21": "4b87xhAQywMbov1VLN1steaeH2ZAVWXYNXCNQ4sLcudweDTbrxPVLdTqucfdCfhMQm4BMcMj6nqoRC9tVdWZCapk",
  "key22": "5a8nzzEFeXff1QgFnjncUqrmeoNLHoETa4ZiXTNza1JHuws9Y3XPCh1px72TMBiAgCfTApu7JWibuNGGZ5Wp5Fvn",
  "key23": "2Hji2VAPL3J1g67BiNydH6rAbq29uPMj8VLDtG77kQgJbhv28mSjtouZ5acsbGLA21G8HySuPfG9SChGRNPLSeaz",
  "key24": "HWGDLscqT7gBEeoTvZgAbvU6opPkwdJ1x77j7dnYaomB11jNyhENJ2QPhUTsNyvYRSvu3HCFGuS7oHnCVy84apV",
  "key25": "3S4BroixbWfa5BuTqTkXbaoNb92h1eye5G21SgvNQewc4zzhigxiTqFPybmNmJLdqY1X2L6wr6pPA7LTpttdRLtC",
  "key26": "2WNoYm7GiaFbBfXPp6URQ7mmUh8aNivp2e3CZ5nJAXeeyvg6TvBHXvaiGmGZkCVdAr8bM7p4gbzxQbUKVqMqhjKf",
  "key27": "5TiEFdTD1ZtxxhyPVMshKb6KqQm9dArMHYSBHSDwhXmwW3NQBoTvNRYrYim8bdkrtmASxHXYufywdHg8Pr7UnQoR",
  "key28": "5Sysij1g1zdTDepvegg4QjPhTrZa6DoSTZFXL9SLARLJT8PedXS2iickkLT1ZdSE8fzfEPNyvQXpg8Euwt3S7qSr",
  "key29": "2sRvAy3ijkHvt8HkUbnrELPPBuLZm4v83V4f99fdA5S8UKdGHYXao6Q1WcG33BXazvQGRCfUPk3iujKhqvmR2DBr",
  "key30": "fvhb8zChCBRvHPtDQZy3KBStearTHiwxHFhVa4F6b3QaMU3uLnJYrQUD6UQR3HXp1NDuxM5kJpCodtZ5xHHjwY8",
  "key31": "21CaYJQq7Q4GaL3a7sw9fcVDFXccDdm7b9a5MmKTdfgRf6qbr9kt5C6fAiuSuBQiw5wFptHCtefmN7xknBuYV3Hb",
  "key32": "2c7woK2ADNNLb2HawrcTLbSMxURG6Tie5PZqv24cYLX4as8kQUNKq6rEhu6ya3DQzaJEriEwFx77PGQtxtkhid15",
  "key33": "cGxvwNo3KMFQzSkB7wD81PGig6wKpA4p7zSERa4AgpVaopF1nHgMBKntKRkYR1iZTgbVTEJysZhYcafXoLY4Qun",
  "key34": "4Va11h7Hp4htaWJiDYDxVGGL52dBDRiJy4JyeMTrzkaQCKVpQaE3zzfbmbicQYuWbWiTsTULVtXj3gF2zkQCmErz",
  "key35": "2F2ZGJ2gKo2HEKGpj25mbUteA1SuAyAC8M5io1SEz8X5p6jLgwabGgLaaFP9dn59KeEoLAGAFcDxWm8eiyxWR1RD",
  "key36": "2vhXqYd7ysKJRoPXm14LkWoTp6W557pmXw44hTwE1bxANRDaB9CvvgB77GiV38DBSxaNdnJ7Wg4mihzxNbomvuxm",
  "key37": "2XDwqzVqC9UfmsJhyM1qA7JSxWTPPUAyzv16747KwwfztHgq8Hk8rccBL18L21Yys9BC11GywLBRzgXCGtrdYFaW",
  "key38": "no8u2zFRBu64HcmohiqJqCWYwoJSo8PDY4TcWAqSmyq6viW1YRWx4pzNix2EpWFZT9tyMEvfGNzgYFa9qnqTVDe",
  "key39": "5shnc3KZtRNQUxBCAu2GtuBTnAbnGayYtMf2vM229cJ5dHC522BXqpdX23QJPWTBi5GZiFMnBjumqxTELqvUKMK6",
  "key40": "Yo9YJN63aH6N9Pq8qnAtQvpQoD9erUkYpuaST9w9W6hpFtnfWMv3yBk7T3z23v1CFU7J3uJjVe7tjYyoHfp9rer",
  "key41": "4kiBkVP8XXKuuqYctt4TNGDDSKnGWBLaFrZnUiCowmr68cZqTRafnJHtCCHPfQFNJFWRVaQmvkDAbuungxUe8iwA",
  "key42": "iQRB5nzqResh44zMZy3js2KFNorpb3TxujZXYEBCs2tWwCM1NshYsb68TTerksgtfafhYty8PSXU1ktE4tYmYpH",
  "key43": "2Jmy4jwCVzGLn5PNz42FwHYATSv4SN1pfCUbuWwR67mqsz8Q5VrfPaymkZRfGbpTNyFrTdTCFacmbkyTWFiwHJtA",
  "key44": "4uRCVHw28N4XVZ2NQNGRQveVjabe26ttWWoeNgLNG8rnSogRudSos3tbq8KAuGsfQzDUFzUb2HyxEX47U73zGPCq",
  "key45": "3bb7P5pmXDSew7JHeStup4MejynqCUYh8sqkY3v6xxECQkGj4pLfy92TXi1CMTWUSJbVNzLMhVbwV1Bmrj3GuuPi"
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
