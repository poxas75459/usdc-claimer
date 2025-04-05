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
    "3asGqyxQsj5bmzN3hTDF49ViVnWphbHbCzb6nRNzyh58HGZo5t3XYkcgkSxARykXS99px743a5q5TL8EvfdExE9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f3xMo3nevZPADvTJZF2xKRvJSzE3hVbZPuLYyv2kyAnrysEb72iHrAUL4tp5YLHZmr7e96Z7N3p6Fid9xpxTcQZ",
  "key1": "4TaBPXEfNskP6jHmPGXDHWzeMy2ivLYQAVo79FTXKUSHvpS9nMJbAdtv1o5oTZXgPNn9znDGF6yC4wCU9RN3crsQ",
  "key2": "46aXWNGo6Am75UnaLNMVw3wHzNRHVfZ4B1AraSwEkzeaMAT6uQ3hh7jDgoeeaKU8WFfViYuxkgo7mMiF8rvHN59b",
  "key3": "4YenpibA8R51F2GP8ekGJzJsmiX7kDYc1SPP9GLMF6RPXTB1Xj6nkc9w4xT42ZxyQsoovvVExmKa2skVZyRqrZjU",
  "key4": "43siB3MwZah38yi9fJwj3cWXGKrMFmcwKxGwfrM5KXALiJ48CyhfWxQuccAnsaWRNgCMGnsnEFUVtFPEGntnEfQn",
  "key5": "GZ6dMQZgmqfxQ26DdpiescN7nUdGBNiVMHi31GDwY79uNqxuiMgFvjfacT7mbakTyo6c8qm3VRsPwrJ8FTRRHx6",
  "key6": "5Vk47bG29motFjBtDt1JYvaCN5f3XuULBYs956GuyhF5xvoyyVGtFRoEDC3onjmkAD33hZMmw1uxRRYmQToD79hE",
  "key7": "2zYbHZTBbpFAF1rJVhFY37Co3NsXkXAVviYZCs5u2BDAs3HvFU8uad9YhheKFn7GJNTu69ZcEgiwLLBoJMSV5uy6",
  "key8": "37mCA9uiujaTJiCgQXi89F33wfsdueEAYncdjuoazQCBu44vC2owAM1TwRcSY9sm7ZTqr1L5xpa5sEYrHqsgaDAX",
  "key9": "FzwcUxjUkmUtDBX5CkKj56QVQ4gRmFhJjWWYbvjuznUxSfb1aEVRmTXse6Xbifz2eGnmvaYiez7dt8do33arfUj",
  "key10": "2RXmvB4BnPR7eDNCAuvWvdnS9hCyJVxRQrV89bqLN3Jr4fQQNH6dyyhtW5su5PwBcZnu4A7ZYCo9x7XQdKFPd3N2",
  "key11": "3t3UkapBjYQ5TfYc3v8iBmekeoBt6U1cwXFMmqbYaJyVXQDShFiHkDqac4EET889YierjZCGePFgbbH71hVyU86Y",
  "key12": "rU2KZSvncpcqWS14CPkDnzHGP3zKV7U92BSaAUgtwvQ3bSJ3x8TjqrSiRiH98eaDdDnik7iJQpLuK6Psmm2vgoi",
  "key13": "4ZkNXQ3hBZoUxzdc9C8irkKQLo1Yj3otur8TRGCS2EbaLiC9B4Xxz7HfdccbwEr2zdT9i2bCH32krTR61ymtgmoU",
  "key14": "42oS37ZGQpRGDUdxB2fh86ToLbKxbM9UqGmHEgwLvW9ZTEamfJwnQatnWVKnt868sB1iRv6vpSMnUTncDWbTrC3M",
  "key15": "4BkhdmBsCp4XQEH7jwpYi8M75Hd1U1oKSwVJwrR9phebYjiJWnz4GAa6Gk4a5Lq1GGvj7gD9wKAH1JnNzqsq37WY",
  "key16": "dNYYYW8ZkqQz2xrdAPNGAmXNNLYh9qwbCQT4AYoF3dVpFrxDuCLjuaLP6zpUXEjjRVN6eawpq9KYrqY2GRyv4mW",
  "key17": "2phNQuZmmx8ugH9J9nxuqfNoPJjZEfbEo864YrTXVj7XxBJdqoesvDiQ9HAjgJQQvxQTirv2XQ7qE3m5RkdRmNUH",
  "key18": "BVHLtYdTphGoY8P96oW1d62fehNbaM9XM4czKb8CvmNwkhwHRS4rh6ve64iEzHjWdR4qu5MbBmmNwDS3wWsqTWN",
  "key19": "jYQXaRv57MgFdJBJ8buWzsb2ortTCzHwWXEDrCrnz4HDLkRuTvuPm57WefmCSbnAoTjshzR4gRBJfitaFKt7uir",
  "key20": "2wp7HXskzdYpxTHeC2ofAm6xxkRjBN5eKwUzkR5X7GJvaatHiwEWsXDwBNLrnLpXFBsgRUhANunfXfabm2zj3wrR",
  "key21": "4YF9f6bfAutHwZBZRmACFrn5ujFkSGyp2TnZWbPyReHVz31wjCGCE8UECbjK44sYDKNSXFE57jycbK7ZLLL6PfD6",
  "key22": "3WXxYvz12eyYLqPPiBpDQSSV65n2i93yjn8CyWPEP3kxKpjFjoG9mz3frReqHptinCTc5KEnTqGGKGnvZWBfdb3M",
  "key23": "2NxTF3XDcfALu948dHAmfxue4DL4DLt2wo4Eq3zvpeQwoBM6wcYy3H8HToR3RKKjZauFbrE7xsKmhLX1fXWuBeAw",
  "key24": "5AWUPUkWbJM4FeeFeKRgL1qc5fTvQWMY5iBdpbNZCCDKewjApKMYcP8yLUMwoSdV9W6sxm8bPySMSCWfsCBiKzBR",
  "key25": "5tcMfibXFhEMM6bQzxLYEDcmtVqeszbwGeQaTwJ4FbdVENmZMzCNQJ4XZp24tMWQkiaF6rndwsikZ2nTfVd7hzMe",
  "key26": "2a2ekHbNZb6v8cqbVjQikgkVizjdNmfUvYTLnceYFPsGtRt5xehzQk1fP11A6dUCHC6QcivhMyczgTTKXkSk8ND6",
  "key27": "E38BKioPmsRaAkPvp7UeCgWEMiWewiWv1iF2gAC6FgiHbtKH5PtepC3cRzgNVk6HCmngvq2HWjR46ujZFRQUZ65",
  "key28": "2MieBbk9q2yu83X8Rjic72vbGdgqNjdu5QFCyYnFNUJoC1MVQHf9hmUxPeW89VzTWbbeinmHFu1rrGBJxVZZhnFW",
  "key29": "2MhqSCM2v3EQDqq1Cwet6PTqqfNefmiY8pg4WiTxXLVygQn4QDDovrrWB2ThhdPtgaRy9QRatohquxe8TpcqBu4M",
  "key30": "3VUsmN5w1VrvAD9xdyG4Hvs8SF6ymbgekvKGdEWqexJhBpGEx2HC5pt7gV4AhtL16ENTQw6v8pbuLkpn6mJP3TqC",
  "key31": "5cBGwFgCXWysbnn3CFaYjGrrRvtAgJrRwdA7iTBzfwzUdvYSLNC9FRXHg4kV4VJCEsP3cuW1usAp14oHywuvqkST",
  "key32": "4kWUkHGudbgeBca63bMrdUB7ehmPrjsyfDXn6ASnxyggdeMhDgAGXrCAVQZGSgpc2GkvzoDBGMKz4aThrQDoKouW",
  "key33": "5RweSG1NqHACyxWZuYUTNc1Zdt5vpkvk2fw1Dku4i2WrYuAjq3L1sGoRQzmEgS8DzM27zVWhJ2hoiXHT7Ht4741g",
  "key34": "6133M4yur1DoW3Pv95CypLFB2kN2kuMt5kQdHbas3X7jLFt7U9bAdAPaSooHqDejNsDETe7B2R6eqauuQisaAADb",
  "key35": "3CCymsfu8JhNYRvn22K3xJDJY1yHdm9cBAdzUwichNQzfNcgcVebAzLvJBQSVh3x3rUZ8ehrJeB7UiKLBJASUVms",
  "key36": "2i1u7DxLrrKqECMjueK4PLEA3u3wVtq5Dge3Pqro7tbQuVs99dJrpbb4beE7SeSGR6JGMD2RqxTRrBrnJhtPsd7y",
  "key37": "3wCe57RPqKT9BNdBzvTrBoTDoFN5LzwWvokHmCnV2TcVTEnDYPQNX4869xgQLe5iNGkpeSN6rGrT4WWT2LmjGWs7",
  "key38": "44w1FaFeEhs9Lss51Ykp69hATYwCQdm12P222HRHUmct4WGNzgKcj5NJfdSxX3dcyACF8rE2VfGJsTK1rLjdyp6R",
  "key39": "3H4r67CT9gYxPdzd5Py1Cgd3Jpi6MFvYWCbyAENJGSzY6TiDpC9PYLjccXVwk9uUGPn8NifzTBNhBoDqKYu59kKs",
  "key40": "48bruf2LhLDfvq6GJPRQS111rZRmr7KTsyDEhEdS42pXwmoWgaNNtLDxX95zzPD4nN8TKEVgRR4bHLbX3dvizg7a",
  "key41": "3ms6xaNsWzyrxkP9k63Ek3e29t5ZjcLQfnMCNWmAqZDtq5A3NxeB8QPG1tdwrA9X84tJEU4SMAN7KBwU4coRohE8",
  "key42": "4bw6KEvkFi8mYyRnsH71ZfiG48HZ4s5zyAZH9fEx4drUxk71Zu3E9jAUUBo2bYYGkxFUtoVWWsyB2AWU9uqJmY6Z",
  "key43": "5ZurYUdYLJBp6ey8Rhwzz45rSpwj8jBaBT7h7iRKvCCxEGagbTG4n1Jwqj3dn1RBUsfgmnhvXmDKcKo8zA31KxEP",
  "key44": "5z3uRtGL7YagsLutUossyax881P7ts5jpRtwEscsGniKtztz97HoL1GQyXe6o9jAPLV2GiTNLRFw4Bob9dgKiurw",
  "key45": "3uw6LDyfpnfoKzAr2AxsiA7cZnbZkBYXxHm3euE4i75W5T8P28h6rddAVfCXLDQXJUJhgJnEvinUWGNazPsBNJje",
  "key46": "2No5CoSPVkShReXnkwXjK18vYSfzH8oCMUTPPkn6ku24vBGSXms2PfdXCkSWqyQPcn5twFucYnC5garCCu9rtEAx",
  "key47": "2HdV4wt1mS143txfKeMh2VFiK9n5KgkTmuBotSj9jshE3htWDjZWED3o8b4QxeeNraHU8pFc1gQ8EfqREFDmqAqq"
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
