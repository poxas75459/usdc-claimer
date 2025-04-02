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
    "7kWYTBqB64TRSR1CYS3U9vyoQiy3RBz4No7H1smwWgKj7UkTZWWHrVTV5AJfZoYrTW8a8ZQKZ4odfd2W24yZXn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4re5gzerJZ5BwXhNDNjeR7M7asdA4ND5nr4YtH9AbK4tUCKPpbSJybS6WveDe1bRqcvLmC6hfUyAotyU9u6eBcjR",
  "key1": "54hSG8JJBgZgWCVxG5rgpTrLEscSQqBcGDvjCLuCLAKAYCw3e6NiXmBcMKZHTm1Xrc9xBLjBDdMf87cDASYA7rHK",
  "key2": "3naYLyXMh8JFRFZRyHSftJhtEtGvaqZz2a3qUqyupf2Ja6ku5xJ7bjsWBEke7gfvwQFVhAtsjw6pEUXariaJUbHs",
  "key3": "5cdPZVgxUaaiRf5Hx6oD7jpyrRKDMnos5HnAEEFXRNx1y4Dy2XEW2iCjRzh8onhQbEHZwh3mHtYDGVY7JLvbq9t7",
  "key4": "Y9oB6RGQx3DQGqHCB9sE7xwsJAcuJbhC9dqQ7Kfh9fLE9KHBfiMWCZSM95ex9wXRJxzm6ohxSs2QEyxfi5fxicn",
  "key5": "5i3aES6puEFYS7B6vsz4vbuQnzQ1qVHrR3QP2YzcLFmEec77Ttg9J1oWnVf17STQEgKSVvH5GFgLp8SZ66G31t84",
  "key6": "r4Q6p8SFqmL5bmgWGkBtVzpokBhy774M6sNXggW3FQNBF5CA69Yf6k6BZ6cBA6eboHWgzxnRVDUyH1v3hJ1617d",
  "key7": "46if3YzydBL3d4DcfMW5TiaETn8xB582mQanY5RrtsqPQWA348TQuq3hMu89QhbCmZKPy1ew6WYsco7cr3hPdbn6",
  "key8": "5Svfi5QELhUnjMEidbfAXVwacooB5zKk8xxcPoQ4rH8LJTN7xZn3iKdPz2gmocN6Pb6wXHAgmUMLoyxKTpy4FbWR",
  "key9": "5RVjUxHh5XEAjyUZwNP95s6h2fXHfngu5FRRYTTCEguHDpDAkrF8TnEVVvextmYNfBc57fByQ1hGiKG8SM7BayKk",
  "key10": "5P1yPNKitVjc3PbKUxuYKASg1yQEHS9N1xadaEYCPzmQ1DLoDPB47MDGUWUhmv9J3BB7HGJRq2zftfQSrPQgoMwz",
  "key11": "c6FC7dgTq4yrZgddvM3SMDv65RuFvDyg87UqswBdnqUsxhkvEEBwhZriJWMHN5AtCQ6rF5adxsp6L5NcSuidJDH",
  "key12": "52L6sbdHvmR4kmGn3fPEN6PCgsSSAYohGGbeFtuQmApGDUiyzKuZJuLFsouR5wyAxJv79qKbrdDQo9Ta2AXWBV2z",
  "key13": "3iD6KS5R1KRauMRcvjWVGaWGAMU8T4RX9bZVyzvHADnRYcmUzmZcxNGqEeqAwhCgzAnbHyZyWvepeQMLRRCMG9oG",
  "key14": "4L7XNs9ocJKqUz727JjVj6ZcBQWu8UbVcvjHGeCTuBM7grPVouFsH6qiAuZQ4sKkJkw7vkcdP7LdvC5X8JSFRiuW",
  "key15": "4PVrDTGouVz9ybEn4DSK7qBi5mpjpTdhmYiJQTbKYyaNitZW9F6GtRUPzykVy3qozxzEKDwyMZDedBmnP9Z7VXXm",
  "key16": "5Dn2JMEiAvqBLTXeagrf8ixZGQe1U5X41cunZkYbU3qpaSPJ9zWxqcBtYr7kYtX5TT4eqMUPWp2W9gntJAhoxv9a",
  "key17": "4x55XT57rfGnXfBGtWbgBaWDxhYXf8Z4L5Ysr4BrfLTQLLYZHKSxMHEeRpMGzPZU3tkrLYJT5J2i1XWzowTx2RMH",
  "key18": "2uodBRtF6SBZdeQcyymEAazbEbkUpBBKiEkAL1MdxNrSex1xWZGjxrRzApg5uJBvP8nVx6xzYFkoD9J3tqdTW8Xg",
  "key19": "xfj2GhFJNVMSFejz6Lrrn4enLmD7B1dZuHArajuEMumz2tU1SPffnqtdUx4PLskVkA3ntP7oBuod7vddrUg3cAf",
  "key20": "xQrEFdtqQPvziCyb7RW5UJXoGLcKFPrLbJVAniCxU2QHRzoDxrBqZ7NWEvE7HekfGenr3KvgRonCmqdpdv7hXYs",
  "key21": "3KnWQb2oV4x3pq7zUzW8GAEhcQdweng44EJFJ1s84mtwPhuWNv5GxXXohtFCQjddxoDYPdFBLiYqdocS353X4aEK",
  "key22": "EJ3iepXg3KbwcmfS7N8wnpV7e2dK6sBLatquFJAADweGEFWFca5Emvh1Gfuq3Ui8DzyiHAYWevsXKY9epoQ9PX7",
  "key23": "eysLNj85cLwHLHCAZLET8a79AydSC5ARgGYgPKjkPoh7WT96Zh4mL6MbGTGsneFTiW8mLxHgf6nXLTE5rA9FNkm",
  "key24": "4STnSw1KK4igvtL2Aq3aHAsbSkZCiSQb77Qq43mBixU3LG2vyD1F5dKvQ4cEZ6n37yARUetpw27b2sZKCFFjCPJo",
  "key25": "4DhCY2DVgu7a82Fa1YxS2KrYNLBYGLMBcmNh433fMbNAjHZUh8n5xACpsdJoT42TDABEiX87bQCwxxQhewms2oD6",
  "key26": "53mM6jiUNm5G6twqoQcmmNgCgwWgPSffPSH2MVRdkjML75fwj5imHhchbvdESAodtvrf2WF5LvUAL1ViLDWAMLSQ",
  "key27": "nK48QP5ACgetQSMpkEgqegM1To4jpyuCD18GPWeosPigqAoULndnvREE1M3bnWDCEsbyKF1YieR8DwZxVDckGLp",
  "key28": "3Pzz7BnxWhXFyGagLuFXXZezktdZ2M1uihQuE2SEahTzuD5Cur583kA1heNFvRLYjv3MecZTjcWNKyrQfzadKLqJ",
  "key29": "2rQiG9DzpJKmW5A5qpxQw3yTW8qt5dGDkdMqwhiJfsaJASnwSx22f6pk7oSPd8z9ZKzRpLiowyh9xBnhfZ2AT1Wz",
  "key30": "2u1wFSUvpGJMmVGNjpDReXJ412LTpbFZiFKYmd4ioSEAM7mbkKweDytJG8dphFNBpdwCumWCNFeFCgLUsTbwiAGu",
  "key31": "2imqV3NgqRLMhNHDozFTxkvVe7d9pVyj4xtsF59h5wDZhQG1ddRFG28naV6N8VxZkY481gA9R4qCAmYvfJUAtsEv",
  "key32": "t9DBp3CSjTNS7LwPvcSs7sAiytXAE9gyZEjWZwwZR7asbnSvjHxPKHTigP6LMGHXi4kRWzHjFMx8YdheGKiG7Fz",
  "key33": "5cLbGsqiDUwasTeE69muNDzQha3GXc8MrcYinwoAwmRsNNX9juStFzsKu7py2Jn83LQBQ7Pkg1cVcFPenHwoCWio",
  "key34": "61ZqfpwvMuzf1UnqiDt3bvgNZT83DU1XR6Qz6SCd7THHeEHSWT4RsjecHzcAqtQeSJpokUvEEeqWyAFkHMG657S5",
  "key35": "4fqcujsr83B29YmJ6CzRTn1NreDGFtxw4xuPePWKaUjcKLEebBTtuyNuCa6SQZoJ4MKJ1YyJ7RSbJxSZfeRkoowg",
  "key36": "4fWh8etBiUHZjvgTtK7USoasSQmTB7omKA94cF3mA69FohYU9x7hGrqe76ZBzxU7oxnGwWqxfJH7ddYST1spcKjo",
  "key37": "fRRzo93yT4MnvWi875wYLntcM3YYWvk1uY9ekFFSRsqJ4542hArk9BDMSUTSuqywjtcyXPZVNF1tUnqiWS7QVBv",
  "key38": "4RZdt7yMY8xECGQcqKoUBoYzJU5gFab4pDxcwGa7CQUAj4riGgQEsdyxBxybqPfhA8hacoGn1DaKiyKfWjcuQHDR",
  "key39": "61vZJnSpmEJxwnXiLFufCfVi2vQUGnWWuPj1M1eXnk2ikt8W86V9UELZdVTL997ErKiXQFkm9f6aYX3e2UKbRpDB",
  "key40": "hYD3JtzWQ3ubT2vktCJhXeLtytdFyFqsvDijVdaBVNn63hEg6sZ4m3tTWjMJeftinBj92gysUFKN1Ngb9mMxKJZ",
  "key41": "SrK8ybdC33KGhijoQ8ghuYsAjiokXnr2hSNXxKpcX8YXSsNUewJrjsBUqJq93mkiLt53jZpvDuZgd36WyDkpBCH",
  "key42": "211aD7pz7JzuEp6kB1CXgohnHeVnzW71DabZDQxFvFP5okhrEupZ8oe9fTASSY6NPVvxUWuFV6u6LNaaBd5k15eT",
  "key43": "4rsq7ATiajsYDC3m7MjKt9Sb9kR489V5GhbvoY8BbreKjL2LUcDDUMszA4j8Ng6RdJef6GMHc3sTfT8s5MrUbhry",
  "key44": "3JXHcoZVDNgqiex5uFTjzvX2rbXeLjP2YoM86w4R3baPJUNMJ1XsU2vdq2NnhbUHH27eBVy22HB3zqjctHm913M3",
  "key45": "5BaaWcr8TsoQiVxzpz7CvtpybDe3s9cAcCm4CaPuyz5RhhgSfiU2GnSWgV9t3sJk29eHp4dShRrYKgdis5qFKeFP",
  "key46": "5oXcDQMnHchtMNkmSVJyWpcJC4B6vSdDB3qPAFEVfYXdxFWcd82HZsiYFuTiQKzCu8cHPWTq3BRWgxmG5e27GAXx",
  "key47": "4kjfJPoYoXZvRPi25nTwNxYvoZieV63RV5ENNni7jaWGJEimjph2zARWHip2tT352vvSsC4aMhadNHMZtLGdtBNc",
  "key48": "3Q5xBGcogFgoBAJzTnyZcc6XaYcMrdUaEWvdcotCFWEgLkwohowSy5k2eh1c1YjmzZQaXM51Lp5aZKmXQMAGeG21",
  "key49": "3V7RoqHGPbfjZkZcZBTvgYHTnsJTKMKCpLu4ugbwbryzVf1mJewGti6RSySitJ6kZm6gGij4CY5dBhqqEUyGVbnn"
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
