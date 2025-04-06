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
    "2W1qC43b78wbsKML1sFiTJWe26BHXpwQpgJgCa23BJ8prbGui6CKrSDHM7toH58A1DH7BPXoXw7vd9mvS8rJBtkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JahBeE3izpCYkDzcxhBKnbCRbG8TUS57zDn8iu9atQcrfCdnRLWRkt7q2n2T37szaSVdLXD5vTT7vG9G27U4Hmp",
  "key1": "22UasbirnSTWTLNoBfEuHjrvpXMzgJRjuLYyykFKYvWDLy3hihXA577QtibWEsxjD6SXnDbRTRfpkYZXZXYtLSLu",
  "key2": "2ixoPhryihD4EDztq8biTGiWLVUPFSAsCna7WD9SdffxvAG4WvLBJP3wPQv5qjWDWvqC8L1zCB17tvezcuhnAQTr",
  "key3": "spJgGegiJZuCk4VboV745MAW1uh6S2whENqZF9d5pr4arT1zs38gsPAWk2miEBiyTcumJsJBWv2UH6V19iwypSh",
  "key4": "bPrVhNNixDdu83D3QYStUqZsh8WUsd1LKNFT283f9LFpyp9q7sQpnYgwwJkpN8wH2vmPErHhVcmkJoh9K8mYNmU",
  "key5": "5LaAFTYDViaWGoNgqyin7gqdetgPqpQj1JNkSvDZMhXqX126TwSuShLALDznTSAvwkgvSNk9sKbj2pRtRk4AiSzf",
  "key6": "5LZ67GsWhSGC4oUwssCyZcbQWQ5z5iVpn1M469ebEPoN6GMPp1pLQza6bWiEPm8rHmx3vFXyNdiqVbjaBmdamNXm",
  "key7": "2sbFh2sZHDPgRa9yYoaFSsoYUounHKvUuapJA6hBXyascVZXHe4QjqL2FUvaH5Yzyo4rWKLREtg7fVSHJs9P4xij",
  "key8": "42wtbcLRM4sswhcTE1mVBz14VZrFaeg6QSJFaLBDWcxhSEioGiWJSgYRp4cozYGT37K2rBETxndhkQyvXbtX4mQ",
  "key9": "5eFc7tzgevzrsmzNZAjzzuhd7BCHT4UELeq2F1FAvQqk4XwhYfBsxAqjQKCE1dT8C1iqUxwsRm77upQ6APZCdRox",
  "key10": "5AxjYq36N5NxGWCeeRpyeMvUUQbNDfiQWGa3BUw6oNpTSDHkobDzrXMGE7U5uykT3iwyuRuE4XMu7FMaUBRdPT53",
  "key11": "2FXZgnAZyEeE6ttHYWLG3dmPm8u6GqhATG2rMiFHwoSwfQgUU9Pkb5koKWthVCXBSUS9EGL4duy2HRGGjFFYxtT9",
  "key12": "5ziczuc3E7mtcqyaLrVqiPSAqDy2pbwovFjGuuJ7U2kvVzba4gWYHshqmu1diQ9n9YJKreTCLukitkTTUbYjRUex",
  "key13": "2n9UHBRU9L3jq1v5AeGZwBop61LcsgoRwTmWTKBxNJy5DCmmCwj82FxTdq5Uv6tpdL4QsoKsLNxcSKQyX9P1cmsc",
  "key14": "4iEsySYo2GLuWiyNinFP8Wx64jMsxUnhA4snQ9i7CTPn9P8nFjxNh7Uj1RYjUkaUpwr3p2hfCnXSvtMC2tvX4uyj",
  "key15": "4oGvrEexHTjaeSC5LYbND8BAgLnAq7oAwZRDoZcoCVECddPYYXueEmvwbjVCoe9M7LjuwiDMmK2eRcvXDESSjM4J",
  "key16": "3z8rEytH8P5q7bjFvMN546d9ZHjftoFeBEhMwWucWnbixyxU4Zd7p2EySrwMXW5DD8hZVUHhw29d2cthkpmiUcYX",
  "key17": "5x4cgkR18kfg3sttspdVBMq2jk1n7Cwk6GguXft6m7GfnNR7ee6bypysbsQvxzR8q3Bn2JTJDw7BJWP2DTasvU44",
  "key18": "54FdYV2Aaq64nc7VC1vXJ7GUZeKPaaZ6m9RQajveLHAb19UxbjXRdN3v8E8fj2u4PYdCNMPPqHVqg3dx9moFADQK",
  "key19": "3LbGQxmGetgpbuJjGq2dFkAL5PhzimgPaCz1TEWnCi43xUs5W7R4PBeT9hujMV5DciY9cPJeuSqqGTSfhcrYV9Ac",
  "key20": "4FAD4LQK6BaNyi7fzsRwd66dfBcNtig6JcMCL4x9GnfF5e2U6wVmhzuUEDXASQHM4sQKGNUR4D4ZvcAzSUTfnCTf",
  "key21": "yr6qsxWthdNwtnBbqXa4z1hyzn2fQCyDiDcV8F84UXgSAa9DGRiG4UjGQgNc3gt5rqfT11VW6jnDzVUNijCrWBV",
  "key22": "W3qG95bnGd8xw7Cf5pLJRh5TFmGxkauRufbKvFV5gpZF5vyo6ZUUt8SYWS7PCCQaevFZh1gQQESqJHbodtvLLJb",
  "key23": "2rkvZK16FTpUirB7W6LJGiWxtg8Ua8iRLBkpjerxCZpLbpBTFjSNvtFVLarHRU7ZVmdYwcvvip6qvR6rWxvGgbsa",
  "key24": "2TZUXYvrDBcgmKHPy33JHvTSDu7xsMwbHDgdt7LGVUTq6z7UXycWDdiUFwtBLquDphFARbtukFU2erQDDd2ijPeH",
  "key25": "55KnDzjmoeRRugJta4xaG674yAUaSP95VBJCzySXi7LnzKjzwXThsRTePL69ut5QVFQLBivmEKESYqAknQAs1Qbg",
  "key26": "3HuncQPUbugzegf9YwinudhQEg1oC5XghqK5TcHXxQrFek8kyLYgiBed73zRfefQpY1Q8MzoMJzDYiuk5bHS6JEa",
  "key27": "294xSstSVGodWoxRDx8rVAtRq5DEQ7j6vKyBKQeCrNyjM81Kco6r2GWuCbJ3toJbTTgpdmjg2Q6Y3f5C5e6Xtc1e",
  "key28": "2KE1KnQknsPbpiRcpbVqwZhUAeuUUwLUKMELvApTiVaYWA6h4TNfSCbXgZAmioKpxEa88qyzMEr2NAzBq2N5DAWG",
  "key29": "GyGduugPPBjTbKbGLEAT5YwefSX1M7CGJyC6TjDN1CG4cuWLzwvL1iEFscNWTYLbWTDW6EXuECTGvuiS8kPHfHy",
  "key30": "5k7HEmeNat8sHryeKWkLNLvx3MpTmPctpnSjUk3DzWtUUpnr22GhYCL7wwEC6pfmB1BTFp4nzZtm3GQd1YNptdhN",
  "key31": "4tBjoDmCXsadyfD7CHgr48AVfrafePLBSKe7psu1TscpV4EqyfMcVkdoMJ19yBaf7QUjXY8yaK8TxHUUzUE9cUwn",
  "key32": "66bjQYB5x65rV4U88cZhp9VS8uD5JYqhNmEAZ4yyMnmEM1xNrsFSNne5cvk21EodcqgPQFwqSfhdx4UhUoRnvyXP",
  "key33": "5i7T8Z8bJuPo4Y7o3oLsZkReD97HSdd6HARzZtA8gqb3UbpLP4LAUAjiPxWQcLgn31KyrMvKTkWxYZs9CgCxJYQW",
  "key34": "drYuLbupsgDDMivwV3ZgG9Dgwjp99aERAAmUyQRRe5HM9Nk7hkKQKxt3gS8ekmG3xdveLjvsUastRwof2GQ3bEe",
  "key35": "2wmZXLPLN7WoQfkw8KVPmZMRAwxdB4vLi6ivX1twvaZV8CVzUWneeb5oYqejs3yCs8nWXYqipvFtGgPhXShoHaaf",
  "key36": "3bvNrdEtibXALQpSCVZGq18iStRjAFbHBmLkHKsZyAK2buvQFVKq8xrM1CxxmDEpYGjkoWV7Bvng54Rp989tP79u",
  "key37": "4c7dFhWCccoFdDDrhYapbsznkYRiLdMQrcnbMiuqdmgMYLauvokW39K28cvzCAn4JFFyiVeyLQgN6V2uNcdY9FYC",
  "key38": "5LdWf4P9RpgisGz5ymjWDXw7CjCAEC8ZZ1fNZGDoUySbC46a69MKHMrq9aFjHQbjnkAGLX4dVMSdjEi31JJwHYSP",
  "key39": "2ngsS71EPfoDrx8ncwLAPyyCMAackrTe1pgNnrP3C1oxkf6JY8VnEb9E1QDVqgwqERMJZucofL5cz6uKqmoYVm73",
  "key40": "57SMc6aAhEuwqrQQndFy4y8yJUQQcsu5BTgBsGACEXCVNjVvnQVyiUTzzCoqwxB2B3qgKwGEJ19W9NyJxfK6e5Hp",
  "key41": "5aeyYeekQPadTySU15i99ppVJ7fXXGQgszGzSWx7aSrNNPG3zBh5GzAfqr4GSXEvLPcsihz22yH8u6sE1qJYEmxg",
  "key42": "4mtqb1o5gELwppVXRrGa52tjMbXuSSadSPEBjFgm99EnRYP4qj2cvP8pA3PCsYd9xsVRMn6hKemo3AeHNLP6k5Uc",
  "key43": "2zpkadJQPi4fz9BD4EWAyrfFGKtLnCpFzaNGRmLb3F4Gps2BhNkfwe2SjDwLCJVzRXq1LJepwbYpMJQqqzpammRM",
  "key44": "5dTrpVALqVSqLBquGERW83GFom76zpzsRzPReDH3VeC1BFWTg2DyiUrm32AkvQmtpV76z4qJN4nEv5mwZ9dbggDP",
  "key45": "3cXRHGFe6ZrzNmgv5qE7ySynCKjaoh6LGMjpzopD7yRNHnAaJ4XsYcLtDkM7DKDMMCZxUszLzU7SSj7yT4Q1h4jH"
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
