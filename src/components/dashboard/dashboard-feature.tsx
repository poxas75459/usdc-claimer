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
    "5DFYewfSP9tpSUGMk72yEXGftVPUzYWYN7t2NVHnuoUVp5QpoaCqEwMkxArw2wG9q1fEGauq9bLnnCpVG55XgLoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qTdqkZr4xL7SyygXhwr97Zx1Ww9fXDaeQmYHrxNUEtjUSbecnPzkB1unBUTVc1eX3JrcQLQWrPbGLDLTDf1dQA2",
  "key1": "R9nU1KSxHvDMB9f7Fidb92sC99wU7zaxTqX6ntAKGokcdYShtMs9Tdxjf8D4h11AvZtHwLnYjHKxA53Dx98QUK4",
  "key2": "3gFhvb8ZniZ79zfGS7LD3SFsXpfz5EFF9CmQiR6cWYjjAAZESpsLRZmzKMRwujh4bUW6egJRyciiKawfsCKg8L3P",
  "key3": "3xRXN2UKaJa5McWWmWE1RBsYUNrouc1yaKE7YMaffzUKFKXRKK2Pze7orUEEFyHVYUk2RxnQcbpyfCGYATgMCFey",
  "key4": "4ieG7kF7tEYydTgWBopNADqMAYmdBBCNcP68doofN2SMEB51qAyct78sL4tcuTMBba1yf3DExQkCDBkpSUyTZLjt",
  "key5": "27yLVekCEwZetZJnTk7rgridGCwb47siBa7NMLirFPsDsRTsaQvCqPiSE8k3zm7nJtFkmKKwMVvhiJWTBy4tprUq",
  "key6": "HWnSff2aiHQf8pFSFzsu63gPd3j1buhQxHkprS3rGpTibRBb5YhpXYdUT3GAXF4tEiX9WoRkWVvyjNetTMgxoEj",
  "key7": "282ABCASp7GEbTLetp5oJN1frrAWCtp52fPGMhH7e6y1oeL5SbT4X6T9dLFyQn5qQzvXGiqttpChjhPVrApKdbGm",
  "key8": "5DVXV9D8SzYAPVVWzemmgQPcByHv5u1kfPem3BhDKpJvEiCVjPns1o7zWJwbrvsHtaqNYZw5kTnrwnejYUzmnrhA",
  "key9": "58NPNbE7zA9PLw8ZeQbZ8EdzQoXnfbEWnmGWKLrBWESE7ShnPcNFWDSsn3oRwEtzCZrryKdti87jQDwcr7rn5C6Q",
  "key10": "27kLZdDwmLZgtHe9CTNooTmwyWEwsv3nJE6rPYQDZBQZDeWvrAn4A25EEQh2j5EAQB3LnZ2in8iH4kNSUCWuJkxs",
  "key11": "3xWZTk1y1nYWCP64LPHSqU8uHnmPXpxy3AMoArXFVTNnkE1dRTGfwtqQ5eQz7gXPQqmgwRpmtqFXYPp8Pj5VBivC",
  "key12": "2tnKqGCRwfeGBzAbcVFkMWjxHaw91KhMEGZYF8EJ8JrpzUtUWcmMYiWvwtgDmiRYJSrnJaeSuozyPZqjwhmck3Sw",
  "key13": "3dkJw42mqjsC3i2Au5cTwLimNTP5saxS1vV1fdYnDfw9hCwhwstLuwQx6ByrrXJqcvDw3xUN6oTGcPk2Ue9n9Fxt",
  "key14": "4175CPzEpUMqRRbe9ZvGaS6tJ3RuefjzpeY3Rx4RBgpCgRBveiBKi8gJxoC2CoXwgtM9FuTTBXSNiPNcBZ6qBgS3",
  "key15": "k6pgZVYopdWYavgMWMXwsktpUda76RaKuEj8tsxRDwxQF2gGTPGYXxi5eRxVZ5WyAXSzbCAucxSyXQXW2Rft7Rx",
  "key16": "5DfkSuZUatrdQoX9woA1wMTCgvWnPMHFJSWP5fP9Gb3t881CkeiekPT7ptfM6HF1EsQzYLqzTHmySiNJQdN2iGVB",
  "key17": "4Aj1BV1xhBEDpyKHoKrxF7GyuUbLcYGY9DX52fPJc7t1xmEvfjSxVvqp11UcqaGRtZJDjUUWs3dG78jT3xXS5i6b",
  "key18": "53djLoDUi5Ckiz5X9YmL7wVAcKgJ6x2XaRc1Jkd1ybrpnLBv2Ek9CKAEHCYxs8qWLm2dN6tAshqomGcFRFdcbwKM",
  "key19": "EvBQVT1C9CB1sTaYeBfvHVTsctNoicRrpzb3qsuHp3ww7bPmXHUrrhNn86tHgGukK349rnwQY1KrhWsaVCXacM5",
  "key20": "4rRCgkqnM38uPQ3mdXATxwvdmXXAvfZUrdh18oMbGw1HAeU2ppZL8WvuExhcSJe24zqXuCEhT8j19gm3MfHUwVsZ",
  "key21": "4eQLK8hGLPCpAsgQcZDnNWBrC1azJE1NfbKV8nYP2QDG88f1izr5HLq7iZy6utd5rQsDUx9vhuMyjrwcDqQcCBm1",
  "key22": "4NhLnJduGTqgeRYH4GkmpEjWmP5uyMA6nuJZzXG9cAQWpbXRpWcaPwuyzfEVKmiRTKPNM9K9SHmn7t5KciJGMDgf",
  "key23": "3t8onJhKWrnYHJj8hWtJ9EEmYLxJm9m4ZYsT15peB5Qvnmfd4zzfbmhYYN8xLX4q9YR6qxrxD4v5m3mnHYiNr6Ua",
  "key24": "3G3oNa3X72ejj5HjfZPbUnTVQ5PqAfoKL9X4yaYJ6FnKGkbnJiS7cLS157RwZARQHDLK3a6Y6RcxTpmsMutFJzFs",
  "key25": "5RmWuwCvW2fjgXRAmjDdqWgpWFURH827xzq2koMesdssx9iv7xdDDNftxL3kTdSpRuS4adf1L93V6f5seur95yu3",
  "key26": "3i9Kt2T5fCNhxJxtfy4VjYr2WpHig9ZHxd9r9G9ycqGgz8AfXdt2nGoVYYTiBDHAMFdPmPYxRWkTnjcu5CVf93M3",
  "key27": "1ECUkyMRkaMpFswmieGZvWXS25gJLx4F5WMYyvjDWj5aLCrpRxyGzqT5T7kECSbph6o38wX2AJ576Jj8Huoc7Ks",
  "key28": "4AY4w42vGVXumiX3KWv66s8jqiJnekrJktHQWwiBAFmwY61qNXsGC1ju2K4aFPJYj8uRkE5KKTwTXqjrHME2n2N5",
  "key29": "yUQDWb7E2tohWSp6SP6vGJxw4Fp9oJnrAVNtaH4tZEWXjoTZLmgg1UWkaopBtRjboHatMmgFNiisdq1JLiqV9yS",
  "key30": "3aBkRLFaTiXSNup9b4rKjuxKKxXL4Ei69WNKk9UuuGECfeXxP1U9khM4cnpUtBEz96D8xqSA8Pw4LE4uhmh99HGE",
  "key31": "5xjP9QcXd1WhATpFKb7wtBDSaX8Yw9baLZyfbgy2ChJ89x4GJzgjFNcnfTX68fGyFHJqLcAThByMqnRx4REZckVx",
  "key32": "2N1okdapdid1834pVP6uBj8jTCQXk7vXyhDZp6FLctsMJPCHemf4fF8Uh9GUNTCqPrHV6nuvVx2PSwPQVqkL2kAn",
  "key33": "2ZDk3U5PSmdxwHiunYyeQFX2Ko5p6HuiNqjzbabw9ZQy68NUhgsuiUWVcYjS7KPyL8FwvnoeTkmgEgiXg4b3ZwTC",
  "key34": "4z5LVZdVR5stsDckurh88Dmq7gpxuZYx44D4kxjLE4sVFbnHqPvXM4Urvi7A6uyoW9YChwy2EWT2PMeC7NPE7hYK",
  "key35": "3o6EAKbgkJz58gihvrU8hGVLG4Pt5xzt9rWiZffLbuDGhTHz7VEmrxEBjQxwaKDmnkR5oJGKxpa6kp4GEdBNBSGF",
  "key36": "5UNnwYinb5iKWYwKdNxFgSYjxXTCAfg34sCe9uSRRa1fyEEefiqBCCB65F7q1G86UZV6N9Mz3okmvg5ygTg9ZfZn",
  "key37": "2eWhdACxWJnSqPFJcAei9mhU8q7mR19fXfEY16aYi179EWKUKWe85xz3pwsgdAkc9XLPFb6YgPJiSuMJjSaVPGBV",
  "key38": "5Vmyadd4sgrdbyWkJZ6Zr2LUE9Q8PwvpYtksaeBSy5LPqCYRKpkVkYCH2RoaZ2DbJEtxmFNw7ofYWm4nGEu32d94",
  "key39": "3AJskAKsP3EZv2ovL4oP8eQhspe1kTeKf8NzDZWpqFexxJsrpAfL1YNViuynQJbGjBPb7g99gjP5xq93HFkCvtx4",
  "key40": "4oVaN65GQfEkoiBEkuCsuU7iwWyJ8z1qemvJM94qbNqgM4ZxwzoLD6KNHxUMXXjLxSsCYHmuSSPNCYA2fUiLJ6Tr",
  "key41": "5t6NTK1xDW9xyEQkrGukT5SRVQBirx3s34dbsBLt1hL6ymycQsV3nUnrD9ng68ATcNon1j51QtXAAPD43Kg11jrS",
  "key42": "4PmrSNAwWyeV49PNrpj9psYmCfKNKUnxQhYEqbY6fVLTbRi8HLQpzwD261JGTUohEQCSdbwtCyrAgo37Q3njk4Dd",
  "key43": "4CQ1qMEprmgGT5rxvaGDtdaYsG54GGMsBXaBgg766Y4xcfuJ19GxzYSCRt5AVvbPbuXPczA6Xoi9ZUf1uqaXGtoC",
  "key44": "LEuaSmgZCpw1rq7H3qXVAUgpKch2u4oxRpogmgXD7JSqEDpXYTqU7viyHQ5Vi7bVitCvQxjDbFcaJReaAVXuov2",
  "key45": "4TaJ6zyPvfuPSxUiUt64Sk4C2ZMzpven6uVxFKJbe1CgNf1Z66R4mWJAYQAT8q51MjkyLisVQFLHcAMYXDRX9cWa"
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
