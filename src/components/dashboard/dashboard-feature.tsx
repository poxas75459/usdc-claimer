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
    "4q7rLr7n3sDu3LiSV2e4q7DgwrHvRPgdpSfekb58tJQw3s9bHuHW9fpQy772aG2vZw2ComXu2Az1wGV3tk9RuCoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JnNKDeYnFc9QbGJRfkXPi4f81BwyZYABmC9yATiTmPfsEzWRnaqvCkVuZfxNtDkYS6cFbuDYhLXaeKEXsJ31Swe",
  "key1": "4fcns2Sz9maqxJDNRovAYVhVRCHqyWpyBCzscK8hVa9aLMLHqHF5GtQBmcpGfjwLae7bdnYtmv2XVZapghpV4ToG",
  "key2": "66UGYJf1Bxo7UhjpR9jR1ycjMBtRMB8Jzq1MnAHeV8ZcKMdCAUKCENc6RTHsrPDktttwjfMxDhKLv5eUkiN6y6k4",
  "key3": "35Dc8oGuvPU5ttbAnNaSQqX5G1spLiuwqAy89CfbHD7Fz6cJnEyBkHvHzLDxsJSfenymnuqb4HXj2LFWBbxPGAoE",
  "key4": "4bMBePWxv1gwdP838NGqp4qLQ1YzLs23T9djuKkeh4HRq9KD5Whh426FkpUaTK1rzLfgfT6Qai71hSjgoHrejauv",
  "key5": "4oAucgy9SQkafXFpyTbH2S2sbbLArSf25e3yccWRynXGha33RJqwGdwJpRgNwRtE2s2htDnnZ2S7bHLgYPrWAhfY",
  "key6": "2kao3zCYqGopDPuSEhj1ce4c2UEvmywxQmrvauobyRTfkEQi3CJAjCGB4dPmnmyn5MyEYWRCekeCsnp7UrWQRdC",
  "key7": "5GRVNnkdJ6KV1NJNZsXf748bEcLnr4i861hoFX8rihkkXqummU94NP6To6Y9Wx8ahiGge4erSsbZDQdCiW4xDQbt",
  "key8": "2jMGcp6zUwxuWYuFuZ3jNSTHnjMPmm2KARWa2c2aVQzzqmKkMTnkjcaCztcRLnZEs7YbBxRDW4UFvgpEVf5h1J3A",
  "key9": "5ZnUVhzfXjaXTB3BmkNQfbv5PnfqRMrtYC22ycqMaGMLGcjZ6VpCJ4u89qr5P83tvrU4AJMSUxiooDJC5ZYeA9t4",
  "key10": "27vzaox6FoLmF23sw5GzVNrajHj13nLAsLBzprkEmG2mRved9xuYRxQE4KK6RmbRBRdWbE1x2PBVJU6EreKuNUGt",
  "key11": "2bm3eU6fKNUqLEULKTcwnhyRg1Sv5RyykaRoSHMPh4EyJTnZqPASCcf9QeGgZ5KDepL4wKyc58Z2mr33Uaq4P2Yt",
  "key12": "5ZXmkbKnKoQiAhStw2TAyT9UoGunu6mz56eR62F7gfdL6KiMq6EHSkvqQgX7rEw1DLM6Luxc8ku2B5WaVw6Kb7bp",
  "key13": "5bs4ha5paxPBn6jtTsypAtGNW89gPfzYgD8psTMHre2opWfcR1YvutiaXr7S2MiCMZjk2YZpvDfypz9F8r9aAZQS",
  "key14": "3xvseKWivPGm7eganpFx8Uh3pvYkmrsMQy16JUges73FgEDiXYhicAFmViiapgg9FPKcEzPe9q7ay4rN5BDi2ucR",
  "key15": "hbUBMuxbfpBhHu5Qj2Ccs6BvL942GGyPuohYbXU2mdQq1iShCJCvKZ5tGg315Y2gWVRCm1GseWbkjfKDecq2nYn",
  "key16": "4E8LBGLSnWiYZdvzWJsERCDfXdFR3MFPTJDWAgcHQaTwcCPqdt3abmVv48xFG9Ri2rfXh9k46zNzTAdjfsNVSZmc",
  "key17": "3qEfCirTKqk2QRG2BiJg6kYdy43NaaK17SrkkA8MZCtSb8sQxMwQenKo8UeeXeNE3cDngvVmNpv9LwoqSCpEZUQX",
  "key18": "5RkH2vejBRAk29c5Xfw8E7MAAfu9rMm7McEGf77jCepSUpBi4EArJXFS9i6y9wNcteSKpiohuqE612ZazmFgjep1",
  "key19": "4CWZLPfoTtZvVa8ia3GCHa3xwa3KrorC1tzL63Rtu2e9M4kRXt57R6ug6dCsm8L9xSCx7KFigVnQCzERSCUbPz4c",
  "key20": "5hbm8ydCZCu2SMHtk5t2SNkS8bP6ftT6X8KbWJGeYyWcFB25m1GGKbv3ZaBpPGgsrK5N1TJV4hEpgma8HtoiTSaM",
  "key21": "5DwsPcdX7FXpxxGysamm73yxgkeGVqntkBXupnwrt9G6ovUAKg5eCx79QAWeBvFrEsxfeobUZFkmtcr9pJcW2cau",
  "key22": "3CK5BxhYPKJDJ6MpFU9rDpnNzJQxssAS3nevFVRDqtazVHDMzYaUPyiGZf4Kasr65cPwNx5FGqVUkptpUc95Y8HR",
  "key23": "E7Dn7uh5u7MGe8cLkLPNraTuS4Xyg55jrnTTh6H4VHLhJ7XFwUPt89JRK6TLr3sd5FCzsdEUNYdWXPWXdmwzTnj",
  "key24": "5U855EZA3qeU6Q5GCBgnb85qtQmoSaF39pM89UJdLHFLb71P4hGFbEkqDZFF2KsAKCtRsTFm1wZjAU2pYaNBytCp",
  "key25": "2pt4Nz3d7Kx4mLsQXuexbmE9WJFewySKwGkTDFduDsS52x2TXGAYuTixDiz3p3QtzsEBLStsyRruParQUDwFAf3D",
  "key26": "3tUXg4ca1irsXtE4GiDbBnafwexKt2Hg6xhCvCj1ano7iZkJgTtRNwcbcNoPT6ZxkGa63HyBLP2MN5bK7TF23DAu",
  "key27": "383daZv2wWdui3N4MfbLDkRbRWxKWrrV5DvujJA5xCSy7sVFdXvYpNjsjJqFZ2B7rm4ZxUKPSeShm8sXrxJiJuCE",
  "key28": "4gwMoRx3RwFXrGgBTWqmDeWE1DzDjnYftsJgYaB3BUFtkXGGsMKP14PS274aCR5ugSLoJoBNiPUAzzgnWJnSem3z",
  "key29": "wdZC66XXNsaZ4uVCoR1FteDCBNwii9411J437ge4w8ryYqKTF7Hsc5SweKKhzv8aUehQSys4zi89yQoTe6kyxPQ",
  "key30": "4u2tcF2u6cFdV9NEGbYTRWCEiyk4ZQtAZBLschBaLveQYiPcUT5je6c4nMw7w8GKP99HevCoHTnb96GWwNSeDT5T",
  "key31": "5rzRu7d6s7Zmku54TgLnJq6WyMJ3fyReTvZyPAZ97otqq3TkeNcTGky9EAYTn81v4GHurXvY4deCXmmxK35H8Cnp",
  "key32": "5ur5AtemGKeL3nds6mgPRnUvGzWb9wcLwBmmdSS58vSeZd4BpqxLViFs1Lfq3fXDZEjmvZT1ZPEgPkfMK56cPtCc",
  "key33": "APmL1tnnRfyYmyeV2R5A8u3qfMc2gffV7MSsRqM2Ln1QA2JtfqL6znVzARwBrd4ziAiynmtAwko4VUjoPkSDZwN",
  "key34": "Fw6jaJcXK8vBHV7bsKWf9UoPoR4LnpNtFxZ3F3o4D2osYWH1PsY1zwJ7h1AZgrz5k9WUnRsFfMuj1MyVjbshm7N",
  "key35": "4Pk7vfbNaps2VHJ9gMcpBCPiU9XzDbSNRqDsDQd1Aj8Vun2SvM7kR67fyqXu832cNCrLTFKUwGAdh7hVjVF6X2kg",
  "key36": "4EhoMsceGz1zmz9ydTTLrJJsK8472fWbHaEoPwm2Z51RNio5efMUNJGcAitKn4raktFMNwtkdVDJ4pad5eTxnBNF",
  "key37": "GZkmht58u5wre1QiZvrqWJ3UMaTpeh6ZkVuTNXBtBKdKQQQjs3oDXyVpNxt9BrkgToVC7RmHY7FCQYVcBbJi9Dc",
  "key38": "5ThfJVAzef636aULN1TVeBwnJj4q6oiQPs5NokybfcegvCiQAyQxBfmaim4WmLsTAfcwUdwxBMVX5h5bvqPkSHZM",
  "key39": "N5iHbpSMd3vSfdyK8qt6iPhuo5dZ7k13Jqe4yd2NSvjQ51vU2F3GzzeSg2WmAD79r258aXvxynwBCux6NsAUkcn",
  "key40": "4cNxsfRU5UqQomv17RLENqpooLLeLB5PAEYPnb45MZDviGXgscKUnpNBshzjkyew4NRq5UhJyWP9JYKXmGL7DFCv",
  "key41": "27TsiTDZink1vVFLQtJZmwwYnrV6mcMwKSb14STtHWL5CReNdT8S97y3zXa3Mhok51pBNEn6ay75vVk4qoTYrvAd",
  "key42": "2mvoHXfKJm2j9AaRRBfQ7Y1nigT7Jjb7QCa9VWDPr3EXpWA3a5J7R4iAbcrUKtrcxivxx4mRNZPTzngNP4KZdGc6",
  "key43": "75Veqq1riVbY9WUK8dHoM7Xb6zCacUSBGUVyBwvXsgmMepEuEDzRCX72pphG2pCZeBYkgFmppwwwCTo8mVMPR7R",
  "key44": "4Fn1LC7wBhLvR5nfXF9zMXEf9Jru4HHLzUYLnVWv6NuugzYQPjdwoj5nNDZRpdMANPmQvF6VoddjYb2dsLUn5NDG",
  "key45": "5dkW2btBhLfnTNrPN4zcob8sR3JWxx12Hwrw2szLRB9FTR91H1kopyaUcpt7BwkGDrFg1RrwaLpC3FedttGz3Cd6",
  "key46": "396dyy32yHdC6tZjxi2ujHBwc5nN87qdwUQi33fem1wH9jdcwsTirvXW2dwzav1AFwj7wGQaWe2PdfP4TGmDAR9L",
  "key47": "K9ooYk91u4ynj6qRtE9wxPpGjD435LR1Dd2UALLBV5UubibvU2ubpqFMKvRGw7ZsL6HYPbc5UPbVbkND1uWgeAR",
  "key48": "5ebCZcemqVRUyteDrWEGoZnXcrfShKRn8jx9FBxUjZjUnyGngK6rTMs8KCA1QSE6LAiyD1x67oc3xC5g6h7gEPfY"
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
