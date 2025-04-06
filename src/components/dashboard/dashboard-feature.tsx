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
    "2MsEALHMUrDNges9VxcC2aXyMDof4RiSdVa6XiwRtqF5EJkjGrsQezKcJeYkJ3FXhrgqU7LLLke4zx74T6ZQ7zgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ksvtno9WZkJbA7p2TeFGnWTy9FM3rsGGYkPBiSbSTzvkq8aXxQNwhfniDbqY2kJqMEv9edNGqmgJHXRLnUfYQek",
  "key1": "2HmAbFeBTVnLmdHS4mEQfCiuTH9cGEUaQthfQpJMzYy6yHuZQNceYXY6WWxvStPyPRY7SwyAGSnJ2YbSbgDDcbn7",
  "key2": "2DyWdyUs4b5oDkKqPKbWkanKweChjrcGhBc4aBmHBQ2ms4iC874obUkWnRbT1rzAxESnSBEcu9wfcx6qtMHrbooK",
  "key3": "41DLPkwaDXYwyvm1P5VBrtHYQNPNc763bveE3eeK7WgcTSqqUVEiM2xoqFacDKMxQn3iPPcNUmzNfJVTHiXhQ7bL",
  "key4": "3C9fjwcVmSFo7hM9znqyJqswna3Nxvd1AR3X5EUvAWLFxt4zG3c45Juf8UqiTDfKJR38Pnc3JHZrPcZ4kUFQMVEs",
  "key5": "3rdRDAYV8Ca5f3E39GT5wvizMb8geiCM8Jj6d93NbQ9xBG1QLQfLTvoCk28MtGF3yL9soA4AsFqhqdRQJDgSDbjK",
  "key6": "5x7vwURmeRf5PTGbrmecCA6ufR9LRjdCrqtNuaRCPyRiNcRdeXRnwB9xPKy2ntqfjwH1gzkqf9XqWq4vzCprK69X",
  "key7": "3TKH8naDvM2WdVb4VbDJzaQtfQfdNWtdoPwccWeCKBuAwLyRh8EZHbnjCe5GVHT6BWheaQZBucgomLaC93Xa8WQn",
  "key8": "3a9T43bPSQJ2j43Sbp3u1aFmqeR8sdHiatorG6EGHP9xwWsEMhR77PhoUjUUt8xpiZj7xnjBFMKmPsUpdddAKjo4",
  "key9": "3YHPL7nWaivLXqJPKfAEHCrLykeHRS8g25qqZSD2NWvb6y14YTxPVgqaHobtLnbF9iWKhn2P9NGPR3cKxeF5CGi7",
  "key10": "3WCf4EyqyYFAXe8JPwyyixVMix16pKrRkCY5bRUSQp1zTBJbnmmh94Z4m19kNrAXDZyDz5DqeUfqcDeLtV1Nkgue",
  "key11": "2HKKSbjdmyVQt4hMAd1SU5CZVVyXQtwKUFP1g8CwXnsU15HzHrTiEmiAXLSpxQBkhNw836WNxcCh6DuDJ6ejBAq5",
  "key12": "5EP6LaJhZYsmy6uS9mpT6fi18xr4nH9CSxYcfBnXjg4e4D9byEXWNVXmDP1Ns2k5pawTVZ6iVoryArwSkKvaihLU",
  "key13": "3r32Vq4jzuTvtc4hmJupvZETTb76S3SRZK2oqAMbKB2p47ab1dyj3kt2kuNhoBXQcrraoC8EZwngLR4hU997b31u",
  "key14": "3FRfQ9vAgafZvXFL2257eVse4u3CJ7A7GRyYovSUVEkqL7xziCnBHDzWcybXEyNjuqgucVoCJqo9oBw9GbfsSub6",
  "key15": "5GgPsTeX4Sy7uy74GMchbA7V86GKLKwr3arm14btFgghsDVrKcoQBCpNmsBaMSVBt33RpLdUsLUacqgEA4QmXLaP",
  "key16": "5rGFptvpkQDde2Btdyp86LCmeeU1wPrRaeRBCBeUDb6P6nXCm3ga8CPgZMpY4QWhTA7ZEnDDUcgxwgxqWwp95B3e",
  "key17": "3snD87LSmJq9UgBZuU2nS6zp8bELnhJsSa3fut9vTwvjvqSMYNAeq82md7FE2t5pQUDWLKKLnpCbfJNq65uBL4bh",
  "key18": "eGQ4MqCvuwK7SrGqdN4hbMM3Atk6AC6pPJyFJUzFyh7xprAvQSb8t9i432p2663FkPaDCwNZDMdn8s9jvmH3MuK",
  "key19": "64DXcVUst3E67xYhH2DvjQ5iZvYpdXU7SH2E5V28vNJC54JmkA8KTZwRcDj36Vi9k9AtUMzwTRZMkWBUb9zbvTaC",
  "key20": "5f15uAwTZa3PZWsSRSnKoXNLBZa223ew5QSNi76nLwDobaivig2e7PYhQnsF7YgXjM3VquSHKnByFHVnY6kBSatQ",
  "key21": "2XGBYqr7f8gkcTkcL1KK5Ty4NX76f1ZzLrXAq77JXQNdPcvceCBDRxrA5jsmrSyCuE6SBTSssVaxGQZCD8kjf9HW",
  "key22": "iddZ2c5xWfdALXwAh3nUbXmgjk5T74QMLZhhBcF2EPQBTQ3S3eypf4ZLsqY6bn7M3DFD5hivgRLmgT8fW8bqbBr",
  "key23": "3W7jD3WYSVVwFK4DMPU9q5LvLfJKzSqJp4A9rmfotgx2yLLALfEcSb9EThcgDJxPMD1UsUZi1kkQGWA9BVihEosX",
  "key24": "4z4MRdtqoRySiybtXMbKpUkFBoDkxNKxMeB4ge3KAwkv38dfZmPRum8Uu1dSdfqrrw1X84DSBzWPHFCkFNeQkxLg",
  "key25": "3VqheVgbsfweS4oZhFdfpKbokAb1upKGLajPEVhkWijigY6GXzVVUbMAGFizqoSChbxFFKsnthGy3Q8npWVLrqev",
  "key26": "3bkEryHRKqrtyGZTerNj6vsakQ3FUEZUXZB9wvAg8VPDks1gno6ijJsZd75gke31gy4DQNLLWWNoJRZfUmfn4xHa",
  "key27": "56xmTGTqNcL9ZUpPGwbwRZieNTWSuN1w1Zo1oYr4rjX5k2JHFNfbogQyFZjtggRPNB5ejB1RKEprk9rsojPmtiXZ",
  "key28": "2EPNsyzKikcbBufyFphqHeWQcToapopsRUFjEc8w2rWet6T57A7pYWq1PK56gxQjLnag8swbDum9oVwTdiGPkwzH",
  "key29": "55rzBcaD8NKsduPBAR1ru1V4sWjZsCm9sak5xNtsSMjqgq9C67owi4WvnXX9ftgLrnuXvLFM9eKFAFxxoHUrkfYX",
  "key30": "4y2Yr6mg4ic1mdBnG26vzmZmgi2qX6mKduj421GRLXZrQgynKFP9ZYwTCzb6JjNC3TiSWK52WaWedo4WvardWLU7",
  "key31": "2RrqRTH74CEscKCcPUvsfr22CFHp2ghuGhRvGMw8NpZBUaCJFMJYqP4CYB3ubdUoXux6UCjvV9qRD4dFGvCihr7k",
  "key32": "4GKQPmwxB4d7Ffpxj1GcQV3CNWAPGQ2HWDdn2EPCeEsGcTHLwBNdLnumELuU8AYti5sXjyN5axaPvPG2cbdzpEsu",
  "key33": "3Nkk5SZtWegpx3JzosqTsFTnKzEWttg3cpWeWW5UzNswX1EKCsnjfVKCYxjAx4ckJrfTLXhiYkG5i3KdDkCDWi15",
  "key34": "2d8RCiH1cEm9MR9atGDJm9Eq5RzhaP3CtqGeSZbvf4zuRnWf7Pod4cEoHNngQcCLABgUnQDJ72hPZo9uGRDHUpCD"
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
