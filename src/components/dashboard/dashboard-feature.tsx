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
    "pvQqVsLUpyv8KAdv8apMhJ7cHbSpeJ9rgDqiqiwrokxFSteRKUh9bKAW2mjdfU1Rof9t6DxL8FHUR6pogMhWJea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Avafe9rmaK1ovmKW88xLnQLTFwfEhHcxSNPUXbs2Vd6HY1w2XGRT3YYKBUGdyAvwbyYqGo4SdW5PC3rS68iNzGR",
  "key1": "2E81qp2TZP6MmetZD7ABMp8HxPB4bjMmsvr6i5hCMkGBA9GKHreriGGXBwsQCoisoUVC3pwd28QYLoMQXhT7jU6g",
  "key2": "2SNzcQs1eHzVHhdt5bWbcZDN3NyFcUVRZfRKzoH85QxUSgnEkxgg21KsUqy3w8RfmwMFkoSE8TntMf3yCun3g5wq",
  "key3": "SSokYjzfLH4boAghzTDhBxkrT1Ka85RyunA2psr6pDgUzR9mdHvg9dn5QM1EjUcvqFNECDLWg4Kv7RqiZnCpo6j",
  "key4": "2P4fbDYYiBDzszCN4F9p3uymM9289PyuzEKjHtsS8zP3fwLVCRPVBir2HysScuwRTmngri7QEF4RqUj4PEJUjdcd",
  "key5": "2aHVmyDVSgqDj9ZJSU9a7bUqukDvXAfLbNt12ZadZZchakjC7NQV966izPtPQnEizYm2hXbvEfzZdUXALmP2Dg8o",
  "key6": "4rbWG1s9dw4xFADC46SfmuTa4oxdsYSMU9c4X6hcnWdvH6MG4gEdyDH1LQURCa2sa7mjkRSSDyt4gFeZ45fxhzg3",
  "key7": "3iR1ZDEDrxBcHEsNWuHRS3HQdZYyUEPAtpjJSDhqJDVNndPFRJ3hBkgXfdJuYaywfKNaCpRB6PAMzLss24gc2b25",
  "key8": "3u5vBhcxAwcrNNjfJjQrgKnCtBFdEFzaHWU4Q9N2A6xeHG8N4vVb9X9ZXwACeGopKsaRK4VPJ33BTQDzcSvixxeb",
  "key9": "34TDovK2ovNVRsu3p18Kmcq6kK5bW7gmnNCNFUdfkWYdff5e7B6P1ZTYt6FvPtwdrsnC69mKWG9wTQBN8soSstyk",
  "key10": "3nQ74CLfwhRQDzdgTrM5HHvD5xxtXEAsnRX4oNPeBPfjZG8p3rsnZmUsq94eCtdjbhHBApxswr4RAHCiyasGPRhd",
  "key11": "4PzSf5mE4bqpy23ezCnda3BpaFXAxCzJAk24uN3V5kwiSG65S6SyfzGK78XgYbtfLK1SotR7qF1ycubZdcjbpzNP",
  "key12": "MiSXiSAA3LSzB3yw3SsFXMXo3TZTcXtbEi53faiw2JZdS813d5MXiXZNSW3H3Qy9F8iGxQ7meUXGcvtf4XbeKPH",
  "key13": "4qTpkhfoY5tCJkYxSaV5F1enjAkKqv7ezoKWHtFCxDXBZ4SUUpSNpbjR6zef9rpZkaCiziUPNyfu8vxLs2mp2y4J",
  "key14": "5hBsdt7Fzf1eYNuQR5AAvnoTeVbJJ3T1D3Uy5bWTeQkpYACbZdGEo6Pa1yZwUYH3K9RV3YMmo2HsJhGRf4jLCsFq",
  "key15": "3vjEcoXsGgoL9RjjG9PxCngGiSS5BKqCvWwkxRWeuGvNUCe1SFrxqUMP8ZTdJ1BJn2BzBdDqLunpXNXgazxgFqqe",
  "key16": "2SAW5J9RgJrMSwPfd9i8Uacu1tz3AD6nfnorL7SoijKzyrLzfHHXP2iNZYq1gcN4JzYAgrLnLRHDTSBbXaAZA3MM",
  "key17": "2t9arLguPD9KgWkiBrApzo1WRMUGiDiKvaBDZQ9i9GDGfW3PosfbiMSb6CJ5LMbNkUeiTefd6ZN4hgXTUiocQLbp",
  "key18": "5CgGZyx1i4ynwzsACmGUuxst9XzG931X6Xsap3GRfbdZYz8xtxeCYUUyku1kwj4PUfovok1N5KFecnxvMrJ6MwFP",
  "key19": "4PjgxJphosymtMQAb8vA53bBd68iJq3FDpuUdasaZsiqLDnjmr2TPDsrefzWyFn6PDe8gWJ1yqCE139kWM98bC97",
  "key20": "2kMabxYh7PNyB7xbtUpE5tcEgLYSmNN9SbeFB5u73yJYWjJitvoavdgYeRwWLDwnVi8HiqQuu8crSyh4rVy4z64i",
  "key21": "2zRK2A4qu9yuLUfa7nf2poEkSyMiyJpDgsQCeoDrxXkDQYHvCnUNnZ87xto1TvuoYtU44yrr5uxofiCbNAdtfthk",
  "key22": "39YvE2ngDUoF3RLTm9be8nihTfUGpzJxfWVkqAVEaCuoCv4vQ7HupaFi1315NUo5VmjAD4aDrCThv4xe5SAuuqwd",
  "key23": "3A73KDoK6CwKaXxPzcxVzL3aKb6uEAiiRPjtWLGQ17SQ2GrAWbNcyoPfCeEjgN9e8uE3UHitohD67zj9zvgMkqfH",
  "key24": "4DXSFsLAP4CkYeSikvgXQsFTdeKXymJ82mgAMSfFGkDY1FTTqNmKTLXYFckCLbbs11Zc7p69FE1YGoJWdU61QWqT",
  "key25": "5wkjMr8nTdaMknMD1v3pEnJuSL1BVZnojvdwwv4C8gt8DoHDwVGYMFxjH33GDyoUyurXPRYwu1hzD7bwZ8mL8GuN",
  "key26": "2jDt7JrKTJvJrofq9vJPTUMFqQkEWXpEwH48GiHjMDzxdngeJN87zfrK3K8pqJModinj8FGcnspXrG8caLWgTGqG",
  "key27": "58GMdKv5snCCxNbd2LLueEgYsjKad27TtBhGQNganxDqWW3UZzz5Tg9hg16SykkYxcqmZz8pqZUV3tioRraRdoed",
  "key28": "4PNk4pbT6nLQ94Q1DLNKgcriJjqY4zm1HwwTQiYKMgDD3Pk8RABCbjg8JZ8b5gSpDsCdoSRndfnanUg2VmmSHrgg",
  "key29": "3DhLzPnEMqWNYVMTFtokDWh34P2Gg7kexj1uTLQXZVe1HjPxLAHxxnav3A1jJu6Ne2fuvyB5jik3GP6s9sbkhU3a",
  "key30": "ZH7yynaaAkmwnV7HSf2GukvimrhdtVfK2Wn8mg7QUto4FGCgUL39TnpjxdyiHu1LKjaS19T6Kqhzg6rMq5pRRa4",
  "key31": "42Gu19kndhSj9DEFk626jn1VCcWenQ9L3WN19wszQhZBKQvY8UqEXmYVoq9sHoRj9B2mz417PvteCgdBvihWyjYw",
  "key32": "5UtHf6SnGFzMuzNMzrWQ9WYvAfc7yG3vdm8c8X4LrsKrarBiK7iqmi34beF46sBpdXiZ2MJoLCGTHN2FATJf4pj1",
  "key33": "2UR1t1gQEsrk61gjYKZ2YDQF72SQgxbCtUYUpJuNEEEq5WDdA2aEmVTmHhwef2ubfLS6AKZpd3J5qqKxUXUSeNf5"
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
