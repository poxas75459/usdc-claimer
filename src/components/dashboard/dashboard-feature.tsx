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
    "Ds2cmQXPHyULn7sqWYYFUJWAVAt67EUnMer5Db1TNFoge34FFkMgYKz1pHzzPJaZaksASvbcr3GToAiELEXCKCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38qGWM7FRqNyhDGqk5o6RjTjxPgwXJeQufh8KHEMK5gVpmwgm5ajn7Aqte42PyKf4AH8JTTvgdTYNxsPLUC2eXRT",
  "key1": "WMWiWMT1JNkg8XHAdsyCE1Aaa5BhJB7Ac6g8NSJUW8vc9cDchD7ACTmDr5FjHRMrxSM7WHMDX3ztRMYHV1HgPd8",
  "key2": "PuNZ9pmVuTAdMBXB2QkVJTQEHkXsfHFjDe3vzz8tm4NYBDK47Feubee5P2pMFqXhaDb9NGvUq1D7zCHLKPSwFuQ",
  "key3": "5wB7T7shPs3pBNnZgJRTtmUL7CCAGRat261DeHBUssaRkQPvYKSwyMwdxQDNMVj1CTtQv572Z7Q9ZDkCdcceZQKM",
  "key4": "2k9hxKgT1HgnrPG7Lv4HCti3Y7gD8JRE4JWDbPRRuQcYtKymtDqcDJGrWBXcy69x8hL2Jr4sY7GMvDbuNkzB76xU",
  "key5": "37wmwaHh1PgV9LSftchqAE3ihGjw3vJHEghEgFX1Cukq46tLaK9yrjVhj5kd3GTrP8sQB4FcdwXZRr2HTuyb1WVd",
  "key6": "5foEBaizZT9RG6TnjKXQTxijpbTiho9vGRWFFa3xr1kZUzbagg6jwdohgU1UnYrofWpS3LYRpzJbTYUmY5PUthuL",
  "key7": "CPde3EzmE3tZg28HZKivPsWyqTeGh4zMpZqJsRLvTDpZh5VYFvpp3vz7WnRkTUbjknorPRHG2B7SAirZGywpL6F",
  "key8": "5BBJCQiAoB22R1pDB2zRJqxQGMLpkKXpoteC8KuHzhBd2KYiuD9qiLC3YBHZAiJMRNnrjt6GoaPDDdSog3YyMQZR",
  "key9": "3ndszYT4fwKtd4dnrbT2EAQU29Jjx8H6uZVw4jD47PJKXG4TWCZhvbsjpNeoqKjLoWrUXEkykkYKFG7g4EbsGCdv",
  "key10": "5qeXhZwTw738xUM5Pxa4mv9MFtdAZBfLuouq1xJbiCPNqQfEuqxjVCuK5TSnxrqJBuSyNTDuPkspjF1qfCXzxuTa",
  "key11": "64f6yhRko2wMGEEHAqhVm7XhUukVdGv9VQKpdFTvWDork1xFDiiFTD2yommbQqaCKFzTUamHWS3rAfhcp1VW8gTw",
  "key12": "5tz318fkrdPtQMCYytn59ihMcMitzyhbi51QsTpCcoGcssY8bKYxPJfm9K6q3P6ypnFkou7UNRFcFdmJ6LJmkNLy",
  "key13": "37Nh59RDcGR5XWUbN9ouKZBPosLzibu5WKEMdpu2rp33Ex2PwMh1yc7g9dqC38wsha7CPQ8LAxoCVbDbdKjUeNxp",
  "key14": "32PyzzBkukQPXYATzUKHp5ZuVfjbWBnmRSUBg3yXq1Y1HT9HaquwxdLUsyMD69J6qGyKididjJJtEp8Q44qcG6Ym",
  "key15": "4fk1GMJRZqZetRgBrv833mdRMpNW3wkWByJXoDZNrZCeZjQteGJgVaiZRzdd59itCDZ1q82tYvzABx2VTwL2eSPq",
  "key16": "HhpaD5DdygrzioZ1372cSxW7Zvyvrw27zG466MC4HqHfdU1w7yKxYK4KWnKbkMgyinBajpHSqWkBgbiuvju9KNK",
  "key17": "61N1z5yoxmx5hFj5vXbxWBUu5pnpb2ondxBAatX24jkditJJEcdMHiDqicHSdFWVNzntf4jzEphhonxxkaq8cx1G",
  "key18": "3ZtzsncBKDBYPZUwYyAagoMBump1Q8u1t4ksPQhWGGhbVVvZe5TsK6c2QRsDLB11QjHMFGnLD7jeYWPfAGYSMaui",
  "key19": "FV4yyVjNkRYLXpazGURmciGT6KejgYGQdR4uYnRdD9BHB7SWFS2gfF5mdMtHKxPLSR3AEz1fewMTtGQ9tT9rEhX",
  "key20": "33xyEsMXaaparTy56SrNHwvYX2x652ZthA54HP2s4BtfUGKvwSQkkyYWy2aWGoVdRNwLjaAyknScdotGatc1RM9X",
  "key21": "4kFtRJRxfVdfKPYSQqSdvYRxdyDNbKeWJvEb7jcMFjxsPWUidHT1DS6foPRS51H3bM15Wu9JBRQWLWaeBzc77dmG",
  "key22": "5KY6Cnu3dL3EmgtfjdYWZti8oaoUTnPxSoUdWAHSjib6nih2MHG1ZWyxufqHkw84guVcEUJPdsYPkxe5e27nh2tx",
  "key23": "3nBzkpgM2YYsKJ1afBP6cKRBY99VRsFZBQ2FcLpwBGbenuYGtNvwxnP1kmMnXaLisQgbj9uxhQCwru1bv8ZkiKbM",
  "key24": "TWAjPUjXKrtFxEzjWwctaKLN5eeGMV3vH6ReZ5tRND6mxmUPFB4ZSDou9vbYVpqihVaNhjNiNLUkq4D4ECq5L2D",
  "key25": "4Ls3cgEMs5BDDPYQ3ZZrxpkYeQWiu8Gxa1Y2p7VzfXMPVxxwS6ke8pUtVJfKPDVCerD9YvBVs69xJusUigJbcab1",
  "key26": "4EzeMCEv7oStwg13LFN13KN5RUmD3EQeP6trVTeyZgmjt1yzDhxTbTCJFppinTBR8FstGbukv7NY1LY5j7sQswvo",
  "key27": "328vQJBdfSD1j3L3CG4um9Nn6KDe5zez6jPndfEfoNaeWKMhAM7bfTZFki82nwkc7o99xegFewtKTR1DUxPvXhVP",
  "key28": "rdruYKMuniQtfTidBgWGY7G4A7wuZwtk3m7uyibmcuAw2vcArFyiXPimXLoc8uBuio2wBi8PJn61EE8wWP72QVU",
  "key29": "2fG7ECXYpTjG9Ybk2b2YmK2EuvgWapTJfmENGkvH4y14SDwXo2enQkjeznGPC1xbKGdSRzSoaYP3Krno3EDWoqDc",
  "key30": "5UDEZXyczodLspKjyGY3E4KgyEVk8yVwxYgtyJTziGUKAehevYeCV5JeU6KiUdc6xRGe8Wfc5sH3ezsGqdg2wdbD",
  "key31": "3v5sjTjByARsbqMDqh8rDMXLPkohHJRVCivG7Vx7Pb5RAvxDxvhDt4Lkugt5bECZ8qWhPvjkQp8ovSKz1i1EMstN",
  "key32": "HWB4pKv4qbsPQmTZpfVwFTu1JkQHswbxuB3cos4abooi2k2fRqWQS48kedGaXBUWEXE9RPdmQ4gypuGBnW5N4C4",
  "key33": "WT9MoR8ZSgMPZcFyxxLbJj3k7ZDn9epKxaamDPbf3KVPSjkVNsmdEMhgn5zxqSpy4PazMXeBV8zbPM7k4712fjd",
  "key34": "2QYs1jEQNEzYdfWbcqcikJMTTk5Gg4kxP1ZBgCZkrLAEz819DvUoSRDr9GeG7iTzV3aYEUbm93GyHhpD2Mp6E8k8",
  "key35": "3k5oV4TP5dnrzoJCSjjVUSv4o7eoUAweYCYw8982jcZzTsTin11be1anYccQHWmacnQyC9iqgrs8XpM8hyC8SQ5a",
  "key36": "3eUX2yu8bbokAicWTmBYa8AdfNZEscWUph1cWMxs3YAfrR5qS9VRVefotfPo1W1mteMPFNRZPx8RgRm8gvonSmev",
  "key37": "2M8XbprqWBYzxDL1koaPVFp69djvEStHrKDVcY941ZNLRBX2QBoCQ2dh6a3VLybUGn7eKnREytwAsvBjyH7gtwEP",
  "key38": "4VgDvdXvC9eFU9LaGrqUb9D1B5B9Lfm3mEsNaWAPKiEEaJhFswh9wptidajKWM8ccwVBjgRBq6gMhpocFPuMcH6H",
  "key39": "4KSLicyqZfoE1ividcijyUAyTRkPFizYWNJY4zGD5itcxcp4weNe5EYseXfCYGSYtGZYmXTtAiRDhL2bcLNVJNSV"
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
