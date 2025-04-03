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
    "9zwzFcL6dfFTmgqxdArkbYFFubZFSGPooiDbeofct9bqbVC9q6fVnDynqgrPajMXosqSBZanGbQcU67F7y3UU2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24vFfdM6CNaHQLEjCMMC7CaGRCEbnYzp6nQECc9XAeBRSwrP6KfKKuFMmXvjfjwLYdPQtAHEpQxofa6GNKtoY32X",
  "key1": "4Jmw6WnG5aipCweCaTiTSwuTxMNvPfVHrUkfjSiuWfUEd519PTs7YsUyY9XB5yTvWXRMpeJ5VhzuezUpaZTxJg2U",
  "key2": "3BsKCRcff6zEj6a7ySgGCGtBZHVJgBMNzemAf3PLnaQVDNXBhKzuQWZFpnezGtLgZvCFaFZHDvoerSQ1XWfMZRRY",
  "key3": "3Q73xZmBqAVJdhqEYAYM2S8swB87LU5bdLdnMT5VmHJapXrWRP9R1DiWf9xM4XSTAbTVnqTT6ToocDdiJ96PwprC",
  "key4": "4XMoMsjvBBxax42wXmYHPn48cj37naEK9jCwAvYP43AgnQR6hVgXneNxApwJvYkSLGGiRogmjRZHyAXApXcwLCwJ",
  "key5": "2hWBd4oGAPy8iCKEMukZnRdB1djv3iGSvUSvE8wGiLZSjZKG2rHXuAEQ2sviTYQVvD5KivN5EM2XgdjFd7xuLejn",
  "key6": "5FmU5cU9e1nsWF9vkYBvQDv2r3pvihLDBqRpwzuTAcPE3Un5kzmy4mqxFha3iX1HYT8vfhCmw5xCFpTQQBqA3wQp",
  "key7": "5dfPb1tWsK9WTKSA7SCFv3cZuxbugatsFDbnZfLpan2R3Xrvi3o2G9y28oFiPumL9crLTAjgn8qtUv4rd1feRboK",
  "key8": "57MB6Zg5r8CDzS6NdPaYGVr5KRwFBgjaH7iS5AA1nMLY52nfwWZ7xffsSmHFBX6xUUYwj7Hk1hmNfTVtR8WCrcQZ",
  "key9": "2Y4pSgd8pseKv1FpvkA3P9Gv6MF9wSfDhASUAsbuDsRNbBYSSucajcWcs5HgJUjdAUYoxAMWn5X1Kes8bmbMNGum",
  "key10": "3LATtzJhadHzkVN6knbnhibciHekx1zDRvSQjrWNNEcNiwcDYsXkyhegixhtmjCmASfH4qKzTWWGqKpsCgJzEjGX",
  "key11": "4wcmPCdQds21cuDDrmFQmBCpWhD4PoVrywDmUmiBv5mUoKjrJzT1btQHKENVD1shhQwrHebSyD5pKXyM3cSrhDb9",
  "key12": "42zokHmiZ2XR4tSpWs5qpcF5SiQBrtrGHWZnUst7y3o5nrhTjhwthGvnZTHV5dubF9Vm513A9Qe6AdYDzEKvMTZD",
  "key13": "2r5JVBrZwsVAqM8trhCufM2bTn7vCpQ2GRPueBoKQFNAohfe374ds1EYEBNNWNjfxBYDs3aFGxAt7o2Kyk2uxVas",
  "key14": "63LKrtoZHRzU566pnatrZroRSApyHUkGZdFLoxQy2fHAg6QMhYbCYkRnhX5TkByNSfgdC1dXxQLzzonKbb1r32wJ",
  "key15": "3NEbvZSshLgsstM7fczXpsu1NsGbKcivsiWfdNhgCELjkDszNUFos98fXGLTeoiqoc4jJerAXBnBohhHidVzYDrY",
  "key16": "5puW8za4M4YGW5G33NdcUK7QzwWPDhMHoALyjaYaegriQRSn2Ra1ucC3csqVzJPYwJyf49HWSjTuuC4TL2GDCfMq",
  "key17": "5AeWqhtt5uPG46489VJgqNw6zQSkZpkhNtPCHYfxbPJJpSv16ZWTQDYaHdWqAMLawc1iYtEbNdr2Qsaf4BKkLkby",
  "key18": "5tuwGNEBQrBsMey3VRupiXHDBDt8tr769SHuwBrGygGfcDAciEVMn9zy96tXe2WZAucnNCswFZq9tXWfjvzh6xBm",
  "key19": "4A997akhdKShDHvY7SkoJySUjMB4rw6Q6uXdx7LniXhSGBADuVa2pCFGrS6iUYnxtQuY7ZoPMz58yAASMjuLfD59",
  "key20": "3cR7fr5R4NYfPN5HUNYReQJK1PtsFxqUKVbmefCorLsxtBocMr8xjC5ZeLAWBxJNcAhv1iohwxQuQsn794VLp5Uo",
  "key21": "aCKJkazKDhFqwkTgwKrWcgwhYKom63cS89gzhqZS4UBipUANEeJm9F7q8QQvsh53c1zPVaJQ1kxHfyesARKtK8a",
  "key22": "5ZV75pujNe2d8sG9c533QV7fq2E1UdZeTZv1pVPHQconS1eWijoxtt7Yh7EKsgiUCnTA9sx2hNmCKPVRx2x2nPo4",
  "key23": "2QTuzpCBpd1xceYzfWBJJ5DUMoAZSEoSBtMBShKLFTeEivaZw6MuEUqPMoDuA8aGofGzavDM6vrCWcxYgjA7r9du",
  "key24": "5bxy39ZG2UavWqNYptJyVegn6NNkTVkPBdj91N6X2vB1w44u39hJF5KteWj6L25N7M2skaXbX4rk4EUU9ggkVLQB",
  "key25": "3uFqpnnLTesP2C1AL4KRYXcb74gTgXajpmrZ14ZAUFo15EUddsegzr32dcEY93zh1JSnyV5e37jTeLV19uoPtEdK",
  "key26": "BHMJSBkjJXdYXRyVRxGvHpq89fSP9NyHr4uDqfJBpFmpi3qM5eGUbXNuZY275hCAe9WgAXztKExYwme9GSTcgQj",
  "key27": "36xszmNDrKy3q5ShpBj4esCLP4C6xTDt3WHiP1tRBCkB3v7g56LRN1PPWQfXwHzphRtrDJbUYWkAqmCbiEXKxgsm",
  "key28": "4wsDbCB2Kvx6fmBytjVJCTf52Tm9JySb1dMge4gQt8FCgfPPxMq7meoAAVEtRb8QxguHbAc5W2ycnGpNnWhZQfiN",
  "key29": "5kphG1H16cDbz275Cu39kL4PUe63x9CWfnCjtLFTVZWQoYzrKoc1fxkEBqkzXKYG5upGNra1MnBWao13z5vvpKum",
  "key30": "23YRH8vvsrdn3R5LdEwHUMKuukdHjHzbgpLhiwJUodLumaWKssCp9XQddpRNajxMFJ4kaQjKZ8T21hmJBpc79xkX",
  "key31": "6BbqiS1cpTmow1uvJ7hLkia8ybEWFEbRtMXsiwGEN18SDbnVCdziPHcmd7NX5eFpY7nH2pChWh6oPKcPQxQPgeK",
  "key32": "5VNdRsTN29P2iHjF9HgYBfeRtPaMWxioCALytJE5gKrfYvsmMxtwGGoFTpNLvVhVMkazxFAJ37JJ152StfkTs9Za",
  "key33": "5suAvAkfKKMmqNfcgNrUqnyakZvJq3c8ktomJZHffJ3LBEd7YuYoGhiqsf11874XKPZNgdrJnZZhthCy5zWiJULz",
  "key34": "3pHfVxLGXRx4H7w45D1YE2cZTigmnnouTvxWdgrsgdXz5fC6zhV3ZaQcVyJpHMWUNAXBRuFFGVt2khC7S5LRrcvT",
  "key35": "4puaLHZXfvCZDMp1Dgmi4bK9JA3axF6S4xPLupgcibv737DJ7571NyhWqcdgYpSjwzLuWimMWKCEz8YoCHvDXkt6",
  "key36": "4aS6h9yFSFjgvXPNijKTWh81MpF86JaNA2xxQEhtjsMUZbDCv3vcCfbHcK99kEzQEEoBHoe9WuvqAnCvpek36Fxv",
  "key37": "37Mqh3z2bPaaQffbsKit3quZpSiLLtLX6WcZ5M8Wr1dn3NuNGLHatg12AsuMbXXnpx79GcmDZcqcRqgp13mm53zR",
  "key38": "4WN71mk5jGBFHPtiwm7p54mDb2zshdHEvuMzXLRtz68AfTXkZPGDQLXGDX6CnAnxzbZLVkfTn7dmtw1w2ZyrCxGQ",
  "key39": "5geyWL6qHzuerNp3ykKDRY35z8sE45kPHwWa9P1qX5bXDkzbp6Zw8BE466pqoTLXmbHHnWbMQQFhL4B8jKgaq6S6",
  "key40": "cn6MjGaQkvd735hY3MJQbdKMp2CqvJeUnHWsSiusMYtHV5NkFCUBypDzYVezDjR7RMpBTgGBWmyAa9P5M3QrSjN",
  "key41": "3agoBzCXpTKdCXdewGyZxB35HGjsnVZZtvoJTkcYqxAgksc1P2oyJEi528n3zqojGiHyyw3j1de4bPWa5CGf9ZUx",
  "key42": "4q5iTG347ZJCr9oKoY13Bdvs9rydcjor8xQd4dDwjqRktPoYKbJSm5ZNWLtPsjEDc13FquawUWiiKFWNTZwTKTv7",
  "key43": "cm7etQcF6P7rNX3hDNwe4G7rdqQ4c4E8it6dofWfqkR2ejj197RwVbfx5fMRwnFcdhuShBChQrhm6cf13W3vTHH"
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
