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
    "2GmRGBRYfhazgBCuDH8NU1cAekse9rAZpFyvpkwLsYi8QBnMrsuRkv36iCv1tcy5P2CrNXaPAh1XNeiXJoT1zkaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KCuj2ZiJzaTzNhDAbDhjqDKm3uX5AWNRy6R228Hm3gEa5zwEkExUqFj8BNpQuQLFNfdTufEuUMvpVNbteHdnUou",
  "key1": "3B5A2dkWtpY6Qqrmzag6vd196vbHQSHvvCGUiP15gipEUhctBEW8s9UejDNnZsExjxcrkkPP4iBrgEHjWgpwVnnv",
  "key2": "4Knirr11JcKaA8HCjz2bkHxkfp3jyYWgHG59Xp8PQUYaxru1wVBWoEejZ6CuJdDTCh9QCZd1dLGCzSNtaqLhFr3q",
  "key3": "4usP68xTEciXAUc62NQrV1J9CMdTYYJGpW1YMwaKWG1MCsT95trJK7ixjRd1FttXs8PowJYDuNNH84i1JBYUB3Kz",
  "key4": "4qYwujSMsXmsT5iX3gqCho5ExMkwEn23X4H2aeQraNSq8pnvboniyyifoqeiHy26BCY8y1sRgU3ned4dyeidRe28",
  "key5": "2R18EUsjjShCWh4YZYKkKRzzijeMp3MW84FYFQzxc8F79eTQR4k7TPazLbRrvNhzjvNtzRsaFCgs9KK2x6DhxpTc",
  "key6": "4sttxuYYCnwGYs2AvVAZWPwYT2JZuRbqnZSwqq56Gu2QX3bsXm561GATSMuedg1qeBiFo95aLNzvaAULFdRbVkpX",
  "key7": "gGiLEVzWXYpw4RJ8Xdk9PQnxitdMbKTURTfo1PWYAd6bcnfgbUTXHfxmWkgEKShDhJkN2x8W8mLpPFmRpKjaPNN",
  "key8": "XgmZbDoeuzSHgowD3T61TEUjxDpMeW4gfWSTzWoTcEndm6R9zpcE1fHChM7qKKJRJCYindChcEsowwms9s9q1FL",
  "key9": "51G8FX5n7NVnk3nrRGpqu3cxHFpy4a9DbzCH9iDjdghZzDnvwTXxdr9vh4gZSANMZcPJL7k4gvKu6kgiCtuVsrAg",
  "key10": "45dK6ZZgLREiCCThUP3Y18AfdiDeHG2XmPpsrvoscJPZevt7sLzh655gKyRf5iWEjnAZt82Y3o1Lc9b9AWyacrxm",
  "key11": "2gMz6SPbphA3fc78cEoCxNwBzwzNb9YbV11JGkHiPvtZYXpsPhuzhwKmMrHBGEMzjG5ALrHtZBjUZ3Asj71TnK3U",
  "key12": "5EsMKBy7Ty9xbEGWXALK8KYGnfRw1hHE3XK3hzgYSaqMLSwBFJaUFzHP99jrM4spzeCdJHW3VjcFXrzwtBBtyVMu",
  "key13": "5Fu59hXroRtRrPi7fKodjGW4tTHWfJWtdsvbz5AbpCuNFzMr2fKYdfqokVPXv6cYS17ETzdUwGHe5qxSRknuzyRW",
  "key14": "85u4UM75bNeefDNKGLjpVP3ZyEYAaHsR1SQRtytbXQvgH6a3HjxGWZG5trXwu8fgoWqeTCQQu9g5JFV6y5CRqNM",
  "key15": "4epiYvPh9LNc3dYyhbaFLwUv9KHxA1FEs8UpMcifytwaTSbx2nGtLQ9bET6NHCF3T3D7v7bnToXTzDAzX44WFSjX",
  "key16": "3Pdh4bZ81LCgdwE8GajeA5Wc9o5p2qF9C4H5z6Aih2FiTmFT7opgiZmTuWNjhnSGWyq42HDayminwLo2VtasotSR",
  "key17": "2UHf6J9KEJ76yWxPgacRQwbM4kdGxjHbrH3mMPCgAGkzzzwbkFJUPRf7auVTZRF2AK7va2MWQAtQFxhzZGomQxF4",
  "key18": "eqDNaqfsYFWgPXkufQVM4oWYbaBL5X4xxBFZgdUkB7pNSRi4SdT8i6C5Eu3UsfjpBsTipBRAhkx3ss7uRHxSkxD",
  "key19": "2vHs9ruU9UKutWXJn2wE8FgcPDt918vH4uQA7jJiS3uTzfVqQbaMRtdcsnhWH2BRRrFHwPzBTSg5epJPPRXyXk6m",
  "key20": "491zJU66iGkTt4opJChC5a5VWCmA34bm7ptcf653zNV92asnDrWD7PHJx2N9MFjSsh2MsCi6kTH7bvCr1RZTvCuV",
  "key21": "4CkjXdmzgaHsg2c3AR9P8Wm4V6bDTcUgpyeGH7uzk12nEhsu1Zikx4WnSGPdtKLnFf2MQCJmFvTDqftpvtwKxhYh",
  "key22": "49WPPnJmVjNk8xtj7u7VVf6k199H9rkxcwcdqCKjgjY8YY1hs2GQgjeb6txsWmt5iXK3UyWfTAFxBri7SXFiVzfN",
  "key23": "27V4ZrLhMT2252ZLG9JYyp7b2nHgxaGFsfB8MBmK2vmZpteNxZigSxVQtgfoo7jmynokXNVj1nArZ5K5av8YBPQS",
  "key24": "yoqJXgigiVH9gF2zVZPS8CPfi3bj2EzYz2p8Eeb9D8zz2vPdvzDceFAhXDwDQAUyLWknoVSdRuVjvDJGXYzMrVm",
  "key25": "4vbpvZXEzG2MJhZYYiRgres3sRfmN4sAf4DACpccZnmtA5Exhb3op8c9HURkJNCTN8QEzMJXeNoqRwoonGj7uFG3",
  "key26": "3fEBdtyTg5w73wbwrVbk26g6UbCcbjSwu2X967hwwRLub8KWQ5oUHSbKjLqEgHhEcQwgD4Vsh22Z4CrHGm4AFbRg",
  "key27": "5ktgRE8qFdwDWGizs5xvrWNSaVRzZyMuooAfJVeyq74xeVqVWQvGm92hrET4aYbvZHXaxC5dVYq1tMNgPhkCGRH8",
  "key28": "3E54PT5gnJMWwhmtrb2nMMJQWsJCJaw6fgRZoaNoavNkwk26uaueCcwQoEMLGxXVEQDmocKatk1Zo9sNxvaTHCG1",
  "key29": "2AtfYXyX9pNM9vpNruF7H9mzYtQGdT9Xc8NTWxxHaK1t7haueJzrk92CvSuzqZNfvN1PUChMaxTo9Uo3vpSNPRoj",
  "key30": "5cUtMUD33aTt8SDy8VqGVQU5Ni1STfi3Z5b8JJtghrPcuyMWu342oW8k6ritza2hPQYzpxopLTqVJcgWamexRX4e",
  "key31": "4JtFU67goaR9fcbok2VTJ2nKiWxaRqTwPeuuQp7xPzJxxNB1Yg8N5QY5EDCvzhTWeaii491TCG23A78iCRibrW2f"
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
