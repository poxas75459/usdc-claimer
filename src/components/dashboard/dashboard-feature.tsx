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
    "3k3W8iUdVWkK2kZBLenhGFshSpyajqADvF7VgYsa6M2YQuERh72kpsbpTmEvaboQfnEfW4JwAK4EmrpwFu6VHnCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34H81JuU6bE39S6HwHMg7k197eZQXzG6WxsAv3mbLtLj6WiZCUnozkW1kgJJ1odsbwwmtDVGwn5QMYqt4WPQRLPK",
  "key1": "5izT112PeBYMKemFjbQ9CWT8btq3PSrALsyRYzKmHtGAeTsLnNyxhEz7tz5LkHnMw4MHEdQwKnQUTDVCJiz54MZi",
  "key2": "rKVBamHdhdXwZY8U1aVSfkgqiAji1CvLWPiXsELXCHGpAs51XxuizLFsWtLSHE1UjjpsCb6jv2uq9Bty1NTaxU2",
  "key3": "4Jv8hWp7znyj1vrL5vvCXC7ZFxt723w1DGahjQ7oi5R1ER9WHfDULzYqN3CNNkV7p2cTgJA3CvJgzXCizoCrPcMo",
  "key4": "Ag3vi3W7Mu5CTUqRJfHRLP3tataZTndp8A3xnx4LxGFuTnvMZZavThhH8s1bTQbCoZpcMBAkqDZiNjpdWcKwQDC",
  "key5": "3L7cqNhDnzML4ePSfrAJCyhw7KkLbsADWEpKn9aJntpKruLpR9YX97F63kXV1Fg59rXLcG5W1zSM3AAzXggZUM1z",
  "key6": "551ipJJPxc3piAxXrRhpEfwQpt5CMEN67iV2wPXQXUb4RuDXZcdsACbNEzZUgqLdxQGC4jXJYNJc1Aoa28K6WX56",
  "key7": "27VzyZ3SHowfbVMcfeHVaEbv4Khw1ypd9JF9oUXojwF5cqGhARVXXtBaPhqaBo2DjuQ5ApFxNZ2yMsQgcnXXuMb6",
  "key8": "4rJih9x9PNTakmNiAmPQ2j3vvon4npLpCUNcXseLz79XfTU9vZT7sJwidsbTJ3aEFRGfYkcK7na59ADucm48udok",
  "key9": "4UViSdSZkXq4CL3qzjqLDVsK3aG5gTnqehHZ9DKbFSYccx2AuuoNE93ctRzCD1Z4PWhu63G7hm13Cdrz6jc8TZUM",
  "key10": "n5B6WZWZ8gvjWSkbaRAcsmYTmsaPP1f2pyUfNgQKXpeNjhGVBHsFVKLHYM6BRBEXb4qgCf4bePWJQEiHyGbNCMQ",
  "key11": "47G9MyoqYkqnH4qwoJ7YmCt32Tw78vbxxvhyjGkemiLC34syK6ZYGQp8GWqr829ESFTQB1j9X3NPkFFKxPpQcjbD",
  "key12": "43NUPCcQDeSrVV2iSBqTLrBWcZb9kpMRfMu7VWAQbM161fsBnsYoBFpNmaWkLT87kw1XCqCBaxEh7vuBqBLw7Ezn",
  "key13": "UQg31mw33b19jGX4hP2quSM5HosHJvSvcuePWMtpgQEBXmPy1WKVmyya1juJdkiw77sUsQ33qrVvQ4gVuD2nQe1",
  "key14": "2BGhcSjdvCbeEJPCg412aKR4bKzxCf1da8prk9VxHkswd5twrgxtSnqxstkuuc7hbiRWgcm1iZkFYPi2CkhTFk5p",
  "key15": "kjkMXGH7aKw9jGr7a6WU9CvXE9b2HZXgN1LKbSB2ee2DjZbioMfVj7HfJdCGiQ1yza2bmqbDHSwvRd6kUpmDx1M",
  "key16": "42j7WSr4CEhGh79sXRZDiREWAEXQot2wWWLKKWUg8y7qVLipvvmX1UvbVCK68jyurhteBzH3BhiHXa5pAez3U64C",
  "key17": "2cyybSKL4rp3cwgfE4UjFasth2oYkvuLCiN4vSatJNYdhCCdWoay9cuTWvpQbvLgmFbFCWDvXGDHKfANn1zVGyXW",
  "key18": "5QNDBFxR7BTFSFpt6WmfXPSQBrGrRNwJ3A2jwNKr8LWE27PkNW12LgDkE9cEQEzA77n6ZWHDdvkDQ6JkWQ6GE3qe",
  "key19": "5hvhtGg7i1rjxrd6YUG8txboTE31qq7zSsV4M6QZJ2DTwzcQLPddXTtKe8eqasRhK38cinCbCNxSKXY5qmUPotFo",
  "key20": "4DGZjXjiC7ZSAP1QFgqHJmw25LkeUUDdi7zo2yHqHbLk76nQMU9qtHc9DnygsehkLuYSv9ZVaiX4haRJJHpz4vWr",
  "key21": "32K2rWtPgkw2Ecqths5QrMYP255vLY7NHC4zhdGMreDAvpfWa6L3J8NMr9KaZUPN2Wh7CxKWEU2CMfcyE5Swb1MN",
  "key22": "2LsuopQBnJgRTZy3u3teaghazji9DcfB9Jp43V47v5AGCken4CuEEwEWHX1ihHRuTVBMYs3EBbTU282kY1SBjys5",
  "key23": "3mYciLSBrAURg6PhxA1We356MM7MghveVAjoxpU31NiBC6WMNNpiuLE8dMwRKs8roiFTXo4zCqoPqvw9XD2HkfxN",
  "key24": "2XwJsc9fiGtFAsSYKjXAVjoXkPDni3NzrzEP2PNwRhV3W8GUTGTXjfNi9dCrSeBcVfro9JaCQJxnEZi7vdNAZnCf",
  "key25": "2bSgW1iUggLBhAhLhbosJ2ZB7QoD9ktDAmbFxJZsEDCkcsYoEzjVNKah6GVHL7mefyiXh5CTn2uVsnHqZmHqSY4D",
  "key26": "3vpLyywouB5iPpztudrvM16V83hwYgeXEV2vcsxQ5CZEWEooXNdTzsLqfM2zYdcG8oR3Kba68MjqFdG1xreFuEeB",
  "key27": "2XunhKRoXQD6bih2HiGpo3M25vfGsSrH2X3XcyvU6iocS3BtxaSTyX5Y1HaFT4EcM9ALpA2HBbS9g7HkBqv3rukz",
  "key28": "5wmvcKXS6ew6E1pxizCcFoEdTxQQQdTRqMofAbTMpx1BrNGgkfF54pDmj3Rps3k1cvAse2nyUcrMktHJiHTLoo8Z",
  "key29": "2soA6T4gznF1ox8SEGyMAfqsRLKmre6ftmWmPJwwRJQ3seHh2KvyEHkfn18tC64fJ1GFJ1TCN2qSraxEqz1bFcNf",
  "key30": "3izeX3pRKQvY81TU2JSCS2qKChvp2Nbrjv2AxkB7kWZQjtqcz6ruiVVXJrDRZ5nPqVcsT7yQDSz2A3wYLCr7nuzp",
  "key31": "4b6LhC3D1ghYfP7SAku6X3jXQm8RCWnJJWXAWacthrsLKPRkUReWykAbYtoBdsHpiPsZnCxCcVZL76f9AnZptvEG",
  "key32": "3ZQ4n4nN6ccgy79YmiHLJyWmEhXWu3JMnvxND3uHrnwLyyggBNyvi8T1fxypNz6yvGbqgGvuYdeWqXYKed6y1Xgt",
  "key33": "4wzq3Cuv1hKT6ej26VdePUVPkr545a73tfNbV23zh6vhqwhjjVZ4zsp3V9rVGE1VTjiZ9WnKcUtPd2JQqcXG9sRS",
  "key34": "4X1zWtTd4RpbD1hUTrjSaSih5SuXUEwNgjE9gKPYH5fiLeu6zmnQUmAMnFftfjwfbgRLa19Zu25LdK4UmK6Zvkeu",
  "key35": "2nH641Zt9ki28RA46RFAnZmsfisLtKzS1xQT2Bkec562kA1eySmzXdSCUBPTEkRRanoRScvJSAns5W4Tfnqi33bb",
  "key36": "2rUor2egW6n5kGqzPJr4ZddvWFhmAThR6SSpUvMw4aX1Cnpjewqy3nTnPNcm2L9yE6ztG9fm9wLvsz4Qp7V7RkK",
  "key37": "2jjbd8KoPkUKU6wXFpt5bgoMeGquGUJhGFr38e64qGbCWiVi2tHogHpRmZPS8pGUZVJSPkitKweQeut9NL2VvGtt",
  "key38": "2uBdruXVYKxqifVzr4H5EnXwGgZ9keTYbEgB8SnGMV5ypERPkqxn1SYpVXt4NUYZVHqBaGgxWLZ9mMiZxQsdqUhm",
  "key39": "c39gTqAbSCAkMzrpnTerhVe7yZyHGq2pgas9fHSmWn1y8oFMb8LEue7DhRNXpWHWKcwEtzUWdzwjAcBLeA6L54t",
  "key40": "2mYpstWSEKvWLJ4AZNiaUzjeB7wGm3sx5AWNgDWCVi5cgkrD5dXZtgfLe9Pj1RZyv4HNab2MMWA7GAah5QbGxrw1",
  "key41": "3zQXDhvspD9175ffhwYh8DusGpcyVMnT74FAbPoPyY8E2FQjvyPWdHifTHRcL778zDxbia9f7bAvLQeBbjsiER9g",
  "key42": "5aYXtLkPt5Ugtyw3ALpziVrcBfs5ZN7nrogfEe39NbXbaMcFjnwtRKPobu6gyjHYrLeWHTGUAFvJFChHZvkK7LGg",
  "key43": "57iXTDPg79yWvFyQJCQSJmZjh8zfWxaoGofGpuyo7MQnZ3ruc7YKyLBvadKzZNTZLX3bmeXi1iGMi5YSfBBvs1P9",
  "key44": "UPT6gnV3jfzJR8js3MXPRQN8g3RZrT8nop7DedwfAwXqSerq3ErpY7oZ2CDHZAAKap6CthShHGcQ2tf3t52BdRm",
  "key45": "5BVSz1Qrhvg9NP9X6d2XKF5DDNCgynA1t8hstZZUujBT4pSPskLrGDbMq7xv4ZAEKDbw4UdpTwbhRhw6RG9qDa34"
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
