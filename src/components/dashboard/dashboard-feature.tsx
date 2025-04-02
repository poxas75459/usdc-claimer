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
    "77BWHtpNoMVhgPqe4kzAGUqTou5tDnRXBAvB6uuwMMuKCxMNjz7UhiZcchUwVzZdZiJJeikZkW43h9i6C46Yzes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KSiFpM12YDbJtbvLx4zxBaBEDqD4SWxzmCY86LsCvdzJoaB4HNeqKJJFNCtRtijUc4RcqCLBYqpeHUvdNo9mpbJ",
  "key1": "KQpbAjXah7r9uRnbyP4FrGk83JFJChdqeUebsTUcGTg3BRFwbArtddp6g2fGUcCt5e6SB1nbvcfHh8395SuWZAp",
  "key2": "4THmwKfS5SYn3ZZcKoePr4sUwAs4MEcLnXw5cEE4yDfub63RHYqPbdzRLaBCQ96Rw5d9BGGWuz9SWn7pdyMXwpMV",
  "key3": "2icYrAGwHVyjQZXFXzYhXvyhEKuPv2b3eu8zTCGPJzJDjvCUAMswKfHKwTGgxa45Jt1HpBDYY93MkB1o8tHkz4Bm",
  "key4": "5UGdSsZjxwjkCNrm3D9RRficPmDmmcDdgv1sZz32L3CMDtMfwym1nvQANdURWpbYY1oVcEKd2VrQimgmpDGKBTfA",
  "key5": "4GaatVACStCiwUxmRBYzoMApYA348sGwvASMJ3AVgJPi3tVkNNnkCLABDtPVkmD6Bj6hgz742yhT6s88R6Ypucre",
  "key6": "5AcAqKjWjyXvHCRegcSEF347UKtD1gBJEK4DjPX2s5ProJVCC7DTvtqjCJN1CmxUDiwwv3MXHWYhJVhieT5JoQi2",
  "key7": "5MdqCB7PoQU2hPzjrQ3nNtGgwEpX1sesaoVR1Yj92UqAnT4KVMmTxhCUN4N2eLkMwDdXeniceL5SH8h92P1b6nzi",
  "key8": "ncq5e5xXgz8BRLui3cXb3tpBFwuL3PK3iYXf8p2Qg52tihchQenBwcgTykrFGChpUMwTjX8KfozQB8S6nBbWKwA",
  "key9": "4F3H8h3Dk6B25Cmw8ZNcGZgLBhUG4SavUatSWLcTKR9Y5KfbYLvdv6BEicGQiXP2AeKeqdA3YESU6pzozvWdDEqN",
  "key10": "22mzawMD5GWLxtr2yanRjrsaQ3PabmnwPGeckXSPzbfJQmYEK2UnJGDSfVUrzrYZnrfLXchzwKRPaaTXN6RngMhX",
  "key11": "2yyvMbvJDTsonQ87BB7vJNAsEdUkP2DfKWQLZ5YvF1ycuF4pi4scgmmjjPhxoJZXjRWCbCdgyeAVR2TPFu7HwbB4",
  "key12": "3fpyRTf7uNQQwuVvGBnEz3M2ATrKYPShUru3ci6ZfPHZX23Fzk4XxJny3JCh7uhppMZZXpGMgcXYzJ2s7oLpHQoL",
  "key13": "GjWH8rhESiko5E9YWF8segGfE22rfUiqXAZRv9ZbCkpWQhXEeJvD4o1M7ncf7oT7wRFRPeTbTVpoXoVkQCXYopC",
  "key14": "3n4BE9bVh2RsBo6qwBvaYCM72ZLB6niPJ1YjrKB466yXjaAoX6xVGHo6oeji7PtUtBEZna3c7N8mUoJHjkheSUGz",
  "key15": "tywa2EyqcxjgZzGEbZNWN3RJ7cozUXfvhqrM7u7CWda5PZteLHn14UFzcR25YFTzwEq5jxeeZqQFKcZMYfqJpnY",
  "key16": "38vpezZUZbrWyMdEjFxpsrDMmNGH7Qug4oBn7m5WaQajTNRf39iVSaS8bwCRhjW3EDdE9C6o4Uk9Kja1zts6ppue",
  "key17": "3purdJktCUMWU9VvGnJr3eRyBpt34PbvbWqJS2YxKpCz9MuRiepaNd2PqK8CB1tmm7wmDK2RZ4sFVH2weLkPhSHL",
  "key18": "nRnU1D5xMrjAy39xuBW1DTvmsGBUPdp2HCMx1McypyD7QjFG39oQGvx47xxBWuaSGPMqzyLyCc4hMg2p141mmLN",
  "key19": "5M45Mw5gfLdRJ2G6kd1iDxdP8PeJdpruYkBEg8yYRv2yYp4vPLonBLaD6DJhnzK4UTgEMYuW9WaYvyXtnb6eNV6N",
  "key20": "5ptYFSaytzgv8YRqGdpRpcb9USkRmqVhBdM1zd7cv4jqVphpKyJXsJEbF2D9eXjSc8AdvgN2qQZkkngbupxF36Fa",
  "key21": "4VTEwnL6emYg2kJfS6Nmcu5Hq8wDn7sfzNqKQfffxvciBEz4DEijLtUBBQhvuWASCU7CVwusrMQcwQ89NHwzrkd8",
  "key22": "5BcJf4qgbVxcTVfuCQ7oYCK5ZWi13RSf2qMiJyByJd2YSRmBiVQkYCdU21y6hcUrtgVu2jPMmE3KrqRFSeHmpYCh",
  "key23": "2JjiozcYDWTBcMFUE5YJ3j1zCppX7NN2ced2pSZqH1RqYJAiUECnbu4K6oG5yFJX62HAJMyS7Yceu1hwJoxTyaUj",
  "key24": "45yVb8MbKYBD73kU2VLnsgF5rEdPDkiUFai5q1D2GQk559okaNQ6qfPTAg5usfbs5tG45e9vDaSU8nwHLe17Fw6W",
  "key25": "49xvmP4BBpyxJGqPyrYiagtmGs1PxXFqUYBBY4b4fdZr82U7AyVdZgA5qMSqXrknufxjxNJUzhP8ex98vsoi4NE3",
  "key26": "5azCu9udPaKjGD8AWGeMaygkWFqjXT65fgubYbS9xZLmrh2qgyFDCTLKcCkdcuM33sJ4cAVBaAUETB77rpdnv3zo",
  "key27": "3ghBDTEKw9HxMGkc59BGeaWvuZDm8ACugVA4xDRiaENsEkjxcQUJqFkdxwQ9jMZ2VzNRY7g984vTon5wwDHoNtRy",
  "key28": "5vGjf8vXDPYKQJDJyWZbaRQvJHhMDyYmR2BJbyFkpHmFNiGaZhw66LpsdTAfQcFcZ1oZ2JGq61LF1qupVA2yegQR",
  "key29": "64oFnJnwhiz7C4dRTiwgVMnK3QAirAXitxUeASCKE4cQzsZg5KfzCt3kDxB9i61V4V89pHbKACrmUBD5aHQsskJs",
  "key30": "3SzMXPBtaP2MqKZGPMTcPjSuPJL2SyzPoa4QRx42SGe58WRxgVC62UmkYAwFK4DM6kKReko384tfiCQ3geekLASw",
  "key31": "5MvnbePjDCWdSyZxg2zdKwBYGV7kPCUDdLNpTpje3zomp9JefZTYthYemFWLaXoJTGzNCJQqzQLnhxdcRjYG84qL",
  "key32": "3LqHct1qAMpsrNagK1i7nVjTFMvLS2e7hgFnAftiW4RPLp2LDmcVFM6bLWreGDWiLaadn9dDKz4U9JmPrSErgqm3",
  "key33": "3krNwU8qSLeZ2NV3SgM4PCi1o8N4KGb96dbjbyAxN2Znt7aTedXFWQ6ipcxe79uZ8TPwHzQagZohZyNf6BahxCFv",
  "key34": "3QKRchx33UVTsNDFCZ3B5Qr5VgEMJ1ue8BEwtdaikqMhZwQNv8ULBLnvT21Ljt2zBPvUqq4ePExWoic6voxAk4pU",
  "key35": "5PxAKuMZmK2tgrECZ12g9NM6Mihaa1D7gCQrqrDRptHrNgLPKmD1obeqP3GF2CzAwPewDEfd9fKysMdujjYDPt9s",
  "key36": "5yn5UmhdmHn5suPnnSMF22WzHCX43wFPcuggnjdnBdThaZtUXyNpv1fcP9kVR7tz5dbsRqaxGHqseBeZQsFJ3w7u",
  "key37": "CYG98SpJVoZGPcvZfKs8TWUxnC2Y7ehU8mUXhDjgWDn286hBQ4oXMg7cqapsQVvAuipgvFUc64s6RviWxEMC93L",
  "key38": "3oWp3Jy8bnbuVeS2eHTSpeSe6pZQ47xqPoDLZTCCDg4twC46zrzZXye5zkVeZWa8bDbf8UofwA7MRC68DCeDDGCY",
  "key39": "Qso2K5vEuefMDtE6vV9ZXPKm8gV7FsY7wm81dkFNbPLUZNWB3hyPumFsK6QnzK5gvcJ9w72VYDB4TZyhxhB8kmB",
  "key40": "4jttzJ8u5pLmSFYFdKvodp6BaEbKQfod84si5wbPRrfJqZ8drbDapTwbJ5P4a7gSum2s5ab5cuFfht8GoxQybXSZ",
  "key41": "4h95sCtb4XwS82Af3uNX3X1jsix9EAq1sYw8mk2EsJyAtB2cYn2NpAjpX5mMHJj4QB1UUkBEZwMyKHETtkoswnXC",
  "key42": "VV8yuqp3iKS9v7vaLdrezATp3EP6VSxadBncp3FjbKeAGLHmUuGcY27AxbHKBE8nYRY6WjFNaB4CYM2n6bJFzSc",
  "key43": "4CVunh2SWBGjjWVsj7ESNteiCTEqBPzo2myMp4jTC7o63MFZgLf4CDiVDhFzAtfAqGzhQFZMmeMt1tMtfv7iBK7u",
  "key44": "2Zd6CSAznyexWfQ3gpF69DR6EA9mszCZn1Cgs8jRsopQqoTprZoEbi1Ryt96jYAwmoLQLoiQEimNLK9gTbALSGqX",
  "key45": "2YoMRYpXVCG9q6RyzNQYayQS7CG8bxSpBJdCE8LcaJbLBMS4XZkyHXZuLgHRkY4vDwSDTexkEBNd1ToWH4kARCuw",
  "key46": "39U5xHAirKKR6bFA1oHuGjj4mts6Q2XfcHP7hTc1kv1YtyuyotRSAF7h14SXDsfAmSXTQaoH7wkvMJ6gAWTFiS7j"
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
