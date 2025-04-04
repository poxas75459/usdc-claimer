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
    "d4cTncrNpVUqxCtkoRw61dmWrr1H6WfsLBz6gq2aMJgLiCt2NMPhRGdHmMbfH3SeQPCiuCguvYLvnjX3YqBZy5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V6i9kW19L8WqxFbUNKt7V35YmWKZTKVkrvmEwdxnWEHjG6VQF44td6iFXR1XLH3xxmF9RDVHLhbQrtMW5aWhoLQ",
  "key1": "5U3VGxD9R1HZLt6TA8T2Fcp9j2VWevCrCTaTdcXMUVDtkeyoz89oAmbnRPfMS77GSgV8B65fk7qsGvYn4ubzPodV",
  "key2": "WhQS5QJXPMu1myBFtqnk7HR3D1g1gzpkdEGrSVhWvEMxK1RSXZCvtuK1NgVFCMqe1zheS75vs3SgQRvSbCqfwP7",
  "key3": "3oGUz3gKTmQUhUwYxn3J8FdGindJ3KvGqcznqNdsyPegK5FWBZiViynR3ZRQgHzDpSPAnf1nic5tmNbpyWcvh4s6",
  "key4": "5y6aeggKNonexG6kzEaRKFrLEtTc9BWHyrssGEvcEwjWpepdrCXBCEqueXHmpy9Szsf7pCa4k7EgmjvgbDeZDuVe",
  "key5": "53NBqirtthZds7iTHZSU7GjVFhpojH5GnRUAbjG5Np8jvWCAYmuzdzDGMYPji599y4oFKVXHCgVyCtknJmtogSL6",
  "key6": "4aF4qzTbQcqebTJG49whV1A1pbYaChsWacLPXuy1VmRMDL6EsBzigUrini5LvEc31mfVU7zm6NouNciW3ErNjhbP",
  "key7": "oahT3Jr7dYxsKf2pNDv91NA4WzRHLrGiqfGGhqF3bGmeSDXg6FTfzaxPNF7VBuHRNBNu9YtHSNTm8XENoDviHnL",
  "key8": "2omNDsTZ8i8eYkfEJPpKQTfvMrzMaUBmXGTRj3tVLWoVx3nwk5DsKvPL7ZiCqiSAo3TP9ExrU1LGXZ8DQcFKPmVH",
  "key9": "5Mi8xgzxryt4eG17BYrdnuTrNcvNrgyEkU2ndPCfbQG4BaHtAtXbasQ6oxpsAKWgBxnNXK2n1BjJopenDdCWcPT6",
  "key10": "4pkUJpAVgZ69kVLfggSnkgNakAVVDBsA8BDoqU77zTsTG7Hgu7j7TFTM8xkMfjHnhcSyHQzFL6DcpZwhHWenmB3K",
  "key11": "5VWebQojFLd7PzQ5t6FWwWLn8krfzxgp6vb9XKTxeDMgwN1dvDBj2vdReEcKaLm2PxDtCajogmTQivbeYhDHBuq3",
  "key12": "35vFpKfY4NTjp6TY5D7WH4z9rytjaKjcwQDBQDpRYjk4V8T1zTYNAMxowVR9DBqbLFQvUPywyDChh5ooiZS2ix4b",
  "key13": "5JBskZJrnYAFUvgij957bywTdvRbdfJHraiVNpcW5NpQjBSbpPpboDKQtKnmp7NnbVpV6kKpb1ERX9cDbLf7yUsg",
  "key14": "5cYY3XZDqZMKs5rDPvKHLCEHds4YkcTj8U2rpUy3EN1hERxYU65b1KUXNxfv7KLSKP5EyUnxhDcy7UhouAm88T1d",
  "key15": "2tWkEtNDtzF6EX8zHuF9mxrUFMfvtjGAqzS33wNnvbkCCg1nHXhptzUChij68wZCB9SmDqf5e4MyJoZq92VQgmr",
  "key16": "52a1tLXzpPaLVUDDPXHMDorjJUMJxUTB8LtF76auvKdT3DVYv6ekwh6idUPhk1u1RfTPHwPqfti8h41NB32FrxMC",
  "key17": "4biWaWb9zKF4hL1dM1tjsN2wiCe7FQVZRUUg2Ax5CNcPCV8RPu6Qxd7ZBK2ipJWe799VjkNYe3ksCaJnf7J2RPeB",
  "key18": "EZ8h3WPDutR97m7g5jZxmT1mHURQdU8sSpzaGoiBF88Ukm7QKtgQp8qUnMstf7izXUEBzsCsGZAzuqar35xwXdG",
  "key19": "hq6rCvAckNzVe73LLAbfrYxEmFigvCR95nZM59o9mYmV1e7HsRQJW3xUpHXx3oA26LYkRxQLxmrss9EnePsQd3N",
  "key20": "3q3J938muZGvhbrcUinSdPE8K7CHUiAmhoMqVyLog9Wtk91FarJsLVtuq6TEBKvdr3MticiBPvQYfLzCZL6iKb7D",
  "key21": "2gM79FB5JYn9pyjeqkvnUKwRTgi7Vjvx7jmUv21BrRRDtBCJC3GCSxEdnswjQs1MEVd1DF3aGZPYpvmDNzcxXqJV",
  "key22": "56ZVibH1Dtx1Ud53ibP6G4vqSQMqo1FaDmaSqYs5XuvzM5iZh1oUH6iRUDRFzigEWy4AMwkJuVsmswvBDJifRyd6",
  "key23": "4AQ7ShPodHtZufJnFq5246Kdzc8fN4gKuiT91iesYmW3LJdr2nWWEX33zf2jRFHLjJWonvSwjXGkktGVVEwbVwYX",
  "key24": "4MvDWXCPpjBwuJfufzdY2AUzQ3p5SLG6TCa9udNh4eBPPQRZpDwqmWw68UZKidZH98GL9TeXALYbWuUTjBqRDD9N",
  "key25": "4iN68XTK45Y4EpCdGmmJi7wcdHPNUyhPuPt1RbU53JJ2oUufX5DgrAbjJBUJHwHeUgw7EgFpcmKLMaSrS6vFEoZq",
  "key26": "CQaYUFArF74NbDhakAgY7EKRKd6c3Yc5niWjc3sy3Zz4HG7ZuwDfDP3zTFCAVBtSjtmmbRoE671BDRMV7uyCaFK",
  "key27": "4y6WVTviJQrxMoNnsW2npAaU6ucBRa4R8SneURz6rETugwVTJJnxSGpQjpKBTZS4ZRQLBXQkySDj9WdzKAMgCoo",
  "key28": "2HwUoJ6JL2FvoEiu9qTGgufpbFJLPaiT7WpqSvGMPWGdjdM2HGpnkqhaaNNd7FnBUu7zDN5bzBrhTD8h6c43LDhh",
  "key29": "4ryALqTk6XAnTn6DedQUbFwywhZoPps7hYgsxepv1PmuHMohd6nJt8Kb7FxQUX5BeAwEsQMRmUDpVGGwHGRVmWm9",
  "key30": "N9eEwWAtTUz1nN9CN9pX2QML8XmepaBTzTuJPvRxfmE1TEqeypk3k7Xgy3yPgeAw1Hy1wZJicThVKL7Ff4oZwet",
  "key31": "cvJv6LWSPwG6anLRPN3mAz5591EF36eAfdFbdZTy1cZGmD8cjj25Jatb9AWT9H7JDvwpgjuGHpXYM2rQAmWWgtx",
  "key32": "2S7nZop82tKUkewdDq51cVMuQ3yg5o4EawAPAXxaHrhqB1Gg1knBR29MULkszCypBKuJm4FoNB3S2HZDLRXn1mwx",
  "key33": "2wuEE9c8G8pbrVU8SPpJoxUFRZcjeut18ow9eKteFoD9SjjZiBkwoxYuUFWZaPAhKJUgVTKKotDjoFkjM7KH4g1G",
  "key34": "4wwvXP4cuoqwyqtDhnzigY5svzA42fu1tUkWJUiASnA8Qb22pLmCMy8fbV6HMjxKsEfw3zhmMkYzQEoyBXdogrtk",
  "key35": "4PVGVyfwXBFFteTcLFiJw8j8tpsAn2jDyXzXJW9r4wfLC3onPR1sShdAazVHtRosnNVN8qxXLcmhSgFyEB4DFeJF",
  "key36": "2W7VbyTAQVzosPzZDtCsudMbBVapsqw183iqnD5bF2Uqctu7NwWiB9bcehtpwXVijQd6PdAFMAFB6GvusZQBGmCf",
  "key37": "2iPRNo1nsqTgLXJzQSSwxFjfrQLdNcaF7nbdP4fXMfkvRHKQheKkB9uuj7Q4CepNnbPtvJ38gtfLwcLFds9xAHSa",
  "key38": "3fcavhcPd5q9xBVeq6bde3s1hcZzDBG9RCDeRekrm6oXqheJX3dDV2qTMf557j4X5jDoPN1m6v52WPJFakbMhLqc",
  "key39": "49jxY3HueA7DBikiwxHebpgLRzHWSZJqn2n9d3D8mWobMtedRupcBKLhVFZa1b2LwNoJJJV6UaMCSnBtmmJ7tcPo",
  "key40": "5hErUEFHVinQSJ5PQa8KNpC3itgfv3inrERnaAUzxWpJunMZUaFRnmXgCvrjWL2goq27VZjX6APmPr7Zd3VCTWQN",
  "key41": "3x1MEf1SM2kLVut4zdDFN72awW8XoMZcUEgcU6PrXPqe1c7iMeXcCqXH6pw7iTGjxidFezbjsct29XdKV1GtkWHD",
  "key42": "3GEz9D1jdfuAvoPpcxpNcnjs9oBZ5V5EVJCqdsPWkabU2s3HBvjvbCjFmiyZbBSi6GTcaDJYkbjL3pn1DHcjvvAy",
  "key43": "szeqD9H1DxWzdBkcG6dcKvD3NLrMCgViZMbvNtzn1eTR3kWW5C1G3Z8dU7MwLNgNduPPM4TYgbjQn3qggpfWjA1",
  "key44": "3UWR9fG97cxfzcnfcWHUMhHggvpW9cBb8DQ3bPEr5BJ7sSUy9THEFHmSTUmv36r3P6X4TAeWmD9QYzTA6MJi4PTz",
  "key45": "2vvX32NTTB4TPQj84DSUeU3Ft1WkMWmy8NPRLtCkyhv81WQBDkHzb6kULJkDzswhNJEJwTKfh7hPmS225WPtYWK9",
  "key46": "4k9KxNoGW1DXLG4y78Q6WzQDjn781XzfPXRbhrEa1C65U2bZWAVFucVLsngsfEkaDNuso1sKNDM6fE4jzjdPLvdi",
  "key47": "4J8NRqBMdppzbAhECQe66qWFwPhoGQvUDLF4pVxfz2KdnPZDxYg5TYABzysyVBe6oCpkBANZEQDb5rDxVXAntJwG",
  "key48": "2i21AuxfBzYgUsNCkMf2iRXBwD3UGSF6c7tLaorSj6vcmEtk3gHLxXTwy8zYgPJaMoRuxpBd7GCVwxdFUHkNztu6",
  "key49": "5Aw4WBFMEydEjdFeYQVAKMPH8fZschjTdmcbKvjbEU4wS5WcwFT11zLiif8JQNNvzi5ay4BuJkdeRJedibjeh8zr"
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
