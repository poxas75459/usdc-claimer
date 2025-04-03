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
    "2UGVhKCUiTbU2jhq3WYcJsiV9bDEUfVcDVe7QFSmsH81f7sWT4dqXgnUF7CcA1Gi69vtutfThSPcaCJN6C4pmVaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TUANER6GjvE5QGd1Gwo1jueAC2b8nGavfvPw23kDTpAjXWFXaYLnWTcYo6Vm7su2DmvzPYz5uQAFEvBYTc6eaJf",
  "key1": "xJQrnfAbaxVZoGE3WfnzRxH8p1osgZYoMoUqb3FiSjf8CGhYhhZLXefxcgPZYb2fDzvoVR9iwUgQpvc1HmrRjhG",
  "key2": "RYNzn427VfdHZrK6xwbPeHQLpZxuzhiiSnvwkqzBi9eTSUkKyNwZYSwdJ5s5Xc7UXERwcpeBPSc4tKiRSkWcphb",
  "key3": "649P4asPuY3qKBjCRcbwtm8y14jzVuyso2R1Sw11sBAp5GnJ7HuhgQszpgUeZGx3v8ostVZmdCb6CW2rX8VYuKnR",
  "key4": "3AKCv2Akv4Q31kNREXsiFv3Zq11XZaaAGK5J3d9iEAhRvusiifirs1qHwGPM11XGcMW5sSd4jG3JMqYa5JQoAdC",
  "key5": "21zvQAGiVCgFZv3z6d79nv6bfp4LGF2L6MBgxnajX9uTArULqUYceceD5GUwZ3q1Zq4E6zokHwbT5v2R544LWqhV",
  "key6": "2Zq5NaAkCbvenujkowtz13bydjYUivjzb5R3ZdyEfKaKwuqygzwQrnpzvJqZoqWp6F2ENMR24ep4HJszjEYpAk5V",
  "key7": "4nkcLFotp1usyjyWRbDV9Qr8eHnfneTGNzkLFr12rNu5BKZP1NEE4KwTWRXcs6uVKFDoXDoTJqnHzNrJqYeheCLN",
  "key8": "8ccnTonzk5gMeoqKNWTUAVkd3BS4W8KJJazTgW96a5iedBzfLqTFHHcWLaEC3ugDDy2oMREBqodeC6aK2nZDvFQ",
  "key9": "gdYxJhVn2LJC3GZuwW8Vy6GmUWqCaxr8cd9EZ2z35btKhGLWgnjeqyNHW4YvLgi2ZfEC51uW6yEAkU7tSGbU9bN",
  "key10": "5WosVx3fPAFLhJF481BwQAcrYm4pbvh4ypkVfBT4t4cTyhS85gv6aNgNtnnT91PHhpNLUJPBoecSohtcdTd86sJ5",
  "key11": "2UpybXLuCrgLYerxUXqiLNGNFhLZtywTBruTrsNPvUyf3JC71tE4Vg2UwDLuiJJ3x8saCzKJJfvBjYuFnYYyxet3",
  "key12": "57c4LFsfqtPMYjacJWuKEpXv8vhMYophj2DFHZFobe6haU3ESs4Qi5zHMfb8DbUfyK4tbxr6iFCMu5LnWVhPv35W",
  "key13": "4ifKcuDvGGJYNUuqHPqGAMyNZUbtTZrKiPEWkuDuFFSUpntb3fP4vT7tQfsWuUw8TfBjqJgKEBwtm1gbj4KS9yus",
  "key14": "5kvHvAED8ztLPPh1HqcYaEHMtAYijbrs79GGbHgWVBSVkNC1745t5qtt4CenGXMU1AcPoA5sZrLUUcfpiweU5Fe2",
  "key15": "46HmUEVZe1WcuZEddygmEXwfN9DTUcTJTL2YtaF39McaSBTwrp17Zt4B1dnKBotVegNZENRwcqKmPCGEpTXT4KSd",
  "key16": "4rhTfB5zrkSEoZWwp4ek5kYsm3aoe5vpq9mR2ZTnxsXACuY74XYNsxUzps1cgWqCDJthxnXkrofCNcB5Z2qHtuJA",
  "key17": "4zL7CJdocVEFjiSaKjod2kMFsPCGxPUTJdUZcj4gXXBfkXaGZGSGPkZYhWZm8sRj5m8kHZSzaJUeLtMBtP57dfa2",
  "key18": "5aVMv8FmmKZyCs25dALgd22RJZumen5EA31Co1LhbCq2oqF9TT1gCKHQsC17Ro27Fu2DXDdk3rXgz6kUYdoLhSFD",
  "key19": "H34D1wHWkv89QEXNrSBTRDEWGHXewfTWuv9eshBP5MCHjs9JrkVaA3SR7Qawy239SGymH9qQQEax84NEyKesxfb",
  "key20": "3zDWKrXxYdGSfwR6KVRfKrfqSDMD9n4dnde78KcKHspJCEModk5ihgnz1yEaesNxr8VHV6otMmWPFZmNgCDS8WG3",
  "key21": "3zyo9CsFb4VSiW1P1gFpQFfQwcpSc5Crjs2urfv9MYQ6nUsK3DYJJ4s3L8mQZQeFzQYF57DwLkvavjEaRVR7ZQwE",
  "key22": "4pX63VjV3tWcnWoamQ2MdB61tqVmfMXnx2MCX3JB1QYceA8UYVU8gVF2dY8NynrwjrgphwRZkHyAAVNGFGQ5x5z",
  "key23": "3gx57iS3Vo2nzaKWA5Vp2NyBnYQbtZixn3VKXftstLhvpsSHC6LC67AoSnmiY4trSikuoxFmumwgzW2u1iH3KVwE",
  "key24": "2ygqBhqPgYQPMaewaSCX6Bx9f4xeANpAJSr6fFH2qN9RiB42wrGmSuLjPng2nDiMaCvBDrYpSaJs9JV9WatwqjMz",
  "key25": "58Up3PV227Tpk6nrjHPQWJ4tbWjvrEPBH4oPf3xiMMoVAQZt4LD8aQDgeEswVJYe4xrP7VDu58NUdpf54pfdLGNz",
  "key26": "4yVFvkqrJxvQzSjDkrfb7UjEPXMS4ZpztjonL4aaHTWScS2HUwd6R3eorD6SpunGPbFqd2DWXSdecQKesy1Ugkra",
  "key27": "231q8qFeDikzjWEL9pi5eeQ6JpYosRwXdvDn8aWn75aXqbU1Kpcw7PruvhyWVvb9WKTTQ6CQtMvWK9bvMaMpAhHY",
  "key28": "3JzGf6ZsUxEe21G1gogtyJ58ofunop8815hMmd51s4WkaMTDejArjDa3acYD6wLJPGaKw3wNtztmbTMh1xbCqW7g",
  "key29": "2w7YJQtQeCAdSSDb7qF7FUzsiDJyvpiD6CgWUsDcsSwrj6fKdkTu3xWaRmY2DWMTrTXUhUM2NEZnCiTZY2ktfZUk",
  "key30": "3dvyjzR7h6AW8DbutLDqPnXY58Jp68KaGNLitk2sbvmWbaN7jH1uvdkoCucyC1gs7LNb59YRwkxNLREDkvXTBxyx",
  "key31": "2nXwmeZrSvSzFwinfdztFFhyAyu2PTAaNjk6xwUvZ7FgXtHPwktEMmikwpJaP8fHQKKWHmEVyMSZphtCsw6KX9Vp",
  "key32": "5yAVaMY7JBJXbVGA9VQbguncrVVmp7R1mxUUL56KbXgcfo2FovsbAz1h7gfPbRcSFS7bdpR9cM9NbbQHdNhVuYNn",
  "key33": "58MEhyXRFCqgx1TnQZ8roi6msGfbACZNd8sMMdidbbKh6ZRVgNShvjhAPT9Wrm7g3dbcB7LoJ4HGGvRfhc2zwvXx",
  "key34": "2LmokquUCzbMs1FU9UQM2EtkXpgR1gFdLH9oCLGLWd81GL9r9e3jVPTRCxmMHqMMCp6cQzy7onFbBqCS9uuYNPNG",
  "key35": "2QyY36Gv3ZwmYromJtRwReSfZ9vJSFvAf7LGw2BpWGM6JoKfjULy8LXZ3pPHeMth6TBP9omiKM2tpkELb3h29BQ8"
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
