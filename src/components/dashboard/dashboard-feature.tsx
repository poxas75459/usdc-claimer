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
    "5F1prX4m9t9WfYLkkd1qzZpUgTKHrZ13BtFo7ZhQpJa3mDKfk3RT3gva94PpdP7nTnmeW3nNycJFvpSMDbFK6FyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NVoho3w8NaKs6sVRgmptryL3dVxra6W5w16hkbAvnAiXfsH3YAxNRsYN7Ykp5PN5eBo3eKFZ1ReyVvseKCdb6sy",
  "key1": "2shsPLEJUK3Phfk4MRE23BZPWd7dfJEEtDzPigWFSLAuATSJb67bZd7K61cJ8SG5VnqMYxe6BrkTfUq49WKXvAQf",
  "key2": "5k3csSUfQ1i2Bm696HsY4egxTSmJU3VLPokGjgrKXP1ChosFUwgH9wdUXXnyouXC4eD9wAqA194gyEvFYowZt5WZ",
  "key3": "VG1JFYzM6DBM2cZgn5QerD2iJaCYYqDMDXQTmkY7TZCy2sU4F6F8XzQ4HN2aVT48u7gggjqJgm6mh6BBAZNTRE5",
  "key4": "5dYMMow1fYWo2z4v8o3kvnpPmZGh78xG2QsrvpBhBSLKw8p5VHbtLQr6qiRSALwjvNGy2iy2LBFighfW7GXvqJEB",
  "key5": "2b6vxpfugDKez34JTAtwjuaq57JMp682MAHK9JNMsAQ9PMFqioNncVGFRLTm39X3WUNJCV3z8FeseGK1JzhP8ZKW",
  "key6": "4uapc3new7zTzyyHvcv3TDi7EV76UqdwkokNbBLqUbmXiUE3PGeVL2dT3iS4mVZ67FEh3X7QocKau5Q1pqnSuJXA",
  "key7": "5nhKffBH5BGeVj2JCPzBHZfv3Kpozbqh8MyjJCmf6Jbt6ELr74uHygC7buD2s26JnAtU1zq7R1F1uSsHhr5ZF2Cj",
  "key8": "3cUNcnUdWsmpknN5X1ieJTWTvhh7PjtBtu44Y5SBaVYxArwugkuJBesCkRox2BH4uHuCPkHkJS5ounYX93yP7rYp",
  "key9": "2Ut42Pki41dM2nwz4Da7qdQcvRwn7EM3v6tSekoL9hLdDjZ58fBqneC1zWWUGNnhicYWWbrCmUdiLhiBGrFXH7Bs",
  "key10": "5BSPGKzJLvhvoqGT9gMAcMVahjZGKEsGNqmvKU43LLFzoRnfqzP16PzinibY1oqDuGUbH9tNegA27vFZTrb6C28v",
  "key11": "3Yw5xrtJWXfUjANJ94fKLDofcpxYbLQUUYYt2TPKWgwr1bKdnN9mfCf1tcGs5Do4BnfTbmWeVJ3ZvzQtSPtacf8U",
  "key12": "2F8axk873pfDL7Cv86yHazDmgeuZMJq4RTKyjJgukwwbAGxgdahELPgbfDHq1CAv6rfVfxgiGN4d8utv9F3Ex1Lz",
  "key13": "4sBdN7t4tm6WX4o1oF3PFGyGpZy6WqfqmYwVGV6iKW9bX5Mq1vn6iDtqmDE1s4E1myxxazaXtZcYRQHkB3yZqUen",
  "key14": "3T6JEvyWzdPZ1tUiCJwnK5dGpJ4ioVo8U72k7GcL6ZxvqzfFpiYD6LAb8ugiQ3sqrLwDXA9gkKbzYbtDWH5tLGMM",
  "key15": "2Xfrpmb5fyCxgtDtsHP3mcm6pWw9sKtZUouM5Rx6YotZKk1ZupcbfpESkKnt9S6L1CjhBxAx3ej4MY47gXrK1CFH",
  "key16": "57a2zbEHpna77rL9mmi122QC4d2Su9h96NWJhWmpSy1z6DjY3y7LnEEDweqdtnyceFRgW2hQBN2UQAu9EYNZhWkQ",
  "key17": "3AoQzvtEDC8FMpwJXR9uxavQ1TxQcLPztx3FRdrkijjXN2V7J23AxRqDwbGgxG85R12AZM7QWxicxD3Va8de5uo7",
  "key18": "2jdWm9tRAeV629njB3mcsAFNAfxkm7CPphvEGZXxjxiJ3PvNTSaxsU48PsZzo3LNXfxYUQZj7wsXFMG2hWyH4Tww",
  "key19": "3GAhVY5oYBemjmXvdTvr2JMmWJiZgGRQ6PGYovsATiiP1rnNakkUQG8avBVrfLyGWWrmkUMyrvwwHfaJQnWqAnzE",
  "key20": "4rK76XiRVkuHh8n1mQvF19x1rDbwibhUaqAwgoQStG5HFS1nuwims9Tg7t5NC3bLyqMTk7RDARK8hTeqQtBJamE8",
  "key21": "5ozmW1CAxLSnSKEvcahNa7Tn7aGLYrD1cwCddVfcHniyrfXjNW3HAVafi24Ge8XveXffPLgtFn2b3uJVtjLeVuHV",
  "key22": "2k69gfdQKMAbC3hhpRDUFV6mDAU84uTN9Y3g4dJeBmRS9gPSenNjEXsxDVMZ2zUe2KR19Xho798vq6YZRrLG4dSb",
  "key23": "zo3UNkkFtUW7bNteem5mmSEfDomuUszdi1rpnagqc9QWnkpkhPP9goUVwzMjtXA8XPrd5F8s8BMezXdfvZUtrBV",
  "key24": "abZGeNtAhqGFQBCjC25gSnMuppfaSTDmhtxPCPnavnq5tcFCUzsoFFdZZCzGSCHkb95pP2zyP8iLYy5JLn8Z7K3",
  "key25": "uVyVQADEUjXvz8MgoaPrFPhox8Te8vdtJ7pbndw8EAUkCADi4RwHc1NCmTpLgvdSN2YUWX1EmrwrSgXYVmcAc7e",
  "key26": "s7PJ1yYoTJHapJzC2tVFzrnyfcXmQrrStxgsgCxTWUJ6ajxua63gRKs9Fy47MGJRaSMciZQbLVe46EdY1VnCzQE",
  "key27": "5C17v5W3GMBXYDwJqifAezKP1ASiLNms9LwdqQ4s5BaJhgWAd26FbVyo6ZU5ECLtLDu7BdFTt7Z95bn2rTJDxau9",
  "key28": "3DvCbLX9YvEG8GiBdYogFyc9wnihzpCbVB92s3XuCsEs2GDAHoMJ2wFDupKq3sLgjZkhkgdYhYA3JxqHc264BKh4",
  "key29": "5wLF9gPsemiJmfsbJfWujEQBzJ798EjTsy5G6tmrWHSHyHUpscLLaZf7ZQTK9Gz3Jxs1rSpK2czWzDwyguPJvze6",
  "key30": "m1eBZMeYzkEDrbZUNX8v1s2Dh24E22SnGAryeuesJk1534nrdQVrFgrwEpmNUwzkLVCWP4xCV8iwRbKwjSkzGXz",
  "key31": "2n324q11DkHUPBCmeyi5spSv7fLn7ygahatNKMMY2BQqThjpNSVvMgzH2U7NdP5immfKwHjkfmX6k9qaLts56Yi3",
  "key32": "63qZigs569Qrdjx9pV4vbnLCB13HWNr7REuSmzdij3NcNvZGwJvJa6hsgo4m1eszzneGVw8gZtgfi8pBzNnbngYT",
  "key33": "51QtrY4D5VyAmohcCt8r193CftBKtr3vzHSeaaP1XZLYDMToaAesFMMF1zUsNsc3pj8bcVBvCTHfbq3JAYi3NGTr",
  "key34": "3UrRtVz1A8hGh7Se5Nte78mzUMhPjgBBkTfPNPZ1Mz2i4YMrJeAHGGvvAXxpLRwA3AVeX4EY9WXsPRXGBqYc5nDo",
  "key35": "3tEmh6ZjriKZdw3tSp1pFrb5dfkAwoMa9bg8UE7U8P85jXpogdPtZsDFGVn3YWYMtdkafVPCupFA4KaiUD3DMVCh"
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
