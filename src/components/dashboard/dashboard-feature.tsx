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
    "2gtGCc1QeA3UKtDNDet8w9DB2VmSaVCFvGZ4iT8xuxWVrRLPPLwEPzLj4tfXArNSH81oppsvdJJSURsnYCJRWb6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oW72DF5rAXZYAjWZJSaLHiDAAUPaPsamxndMk6s7XU1ZR8HquBSMA9rsD8kfEvhhkwNWv4PfSxoMkursux9sTXT",
  "key1": "2GBYeWJThoTnt3iVZ86ccsjaswyk95HXWNT57Vn3GvwyThZZgXAmyDRTm3JM2Afp9jqfJWNBcdJYuaw7N6sRgt9b",
  "key2": "2pAYyJxscbmZjziAQsYhqSnVzuFRSraejtQwNT9fwdL3nfV5PrzcSuZoUhivKPvQ7Lnafy5KTJ9csnHSykfuUvHx",
  "key3": "21FWcUynwWWeYPm6xADjvdBe4nCQiQnrqnG1MTHuXoiXVjqsdbpDv3oXpLB19fDMbrsBVcvAfqa9j4UBF3sDZ5M2",
  "key4": "2xsFdTejg9DQtMCcJug6cuyyDJrbCmomBfgHrKY996s4QZ2H38sJFGwgHcNCfPvB1FuaJZzC4SSbMRNhCGk7KSiE",
  "key5": "2oFA5SBBJXA8sa6XKFuZhrviEGCqGHWMQjeRpHVdeKcc38NgAyoKr7RGSMYoJsE54dLHxo8BW7LGiPkBSKuYHsWD",
  "key6": "VTPc1Cmpz9x2QQo47yYxa1xgNjhatDwPfMc57YsGjhiyUQ4xwY54191wjq4T7ncX9rLZNZ7sYynM7qEGjv6P2HQ",
  "key7": "4cc78x4yHRBunVkeUoXEHuyEVdBoHJMKHGZYAejyYYdxcn4THf68PisRUbtxdY53XAMzk3pyUZQT2vTgHrLEcDdr",
  "key8": "4Mont4dUjHDadXDMAPGSovZMhV15SCdD1dmPcsugWwwJQhHCi7ieS4ijoCKm7tLwEXF9ngSHmLEhTxN3Y538xmFh",
  "key9": "5k2CNRfQPFT5XSGorVzmQRQLt86koHDrkeLBR4WNja6dwDhRZxcHnSVxmKn9eunqGJVve43uXXZAnrRVn4CWyb65",
  "key10": "4pYr8TSW7UQbdNXfKWD86osx9aEzHwPtXAVqQ3sSTkkXwp1Hz7VQ2udRk66CpYq1qhNXsQVhzcKjmEFKbD9ky4m3",
  "key11": "2P5zWqyRW2FfoKNbsxRivY6rKtvtRPaC2a5s5gnQzgx6heYNPUvDf5Yz17g8jSH8yZgysiFJLu91yxcTSfSKbB7D",
  "key12": "2gWrCj5yxRKXYcsSoaEWbXNvHYzF487gebQ24LQM2NGz5jAFAT3EgzEkbh5JsJ5f22MV2btGYmVeWtmC641U3EHr",
  "key13": "TrpHV2zfVUDjYwJcW5v3C4Rz5Urhu7efWMoR7QDeMKbY6WuuyQoKx2YaoijP2jWm7Bxag85yHfU3CzjG8kMaknN",
  "key14": "5xcmbGcDDYZN2rpCjXXMWj3qddyRZGxH3DVbYRFYHYAwqB9KiYUCc5EEnvWzmFjCL4QzSM6pXW7CFymWQbLyDyRN",
  "key15": "523YsonogpHosTWA5sy1aLrFBbn398M3jwdpLmuPBSyHA66XcGv5AYfLraycH9qSfdhx3BLNcazMTo6DaatGS9oh",
  "key16": "fvhKQdEYUVsgrk6KVhZTemFwSz6m2vvCXsXut1MmePeXxYDwbRhZ8DqTDEm1TS6JPrhdjZ6tGXexJot5tvABjVh",
  "key17": "4kTSjkV54UzWzUq4EYbnubsgszi6q5y9717DLgUKeENpiKm8Ja4ijj1mRGc1yiSyxsFjFNJbFNdVBstH2m5d6MXy",
  "key18": "yx7A1iKgZC8VBm9bP9YbTyT2GsJVriqjNBD4HKNTLPFJ6oUnkeJuR687McKkbmCKiWPKauu44vXCmqKHccZMWna",
  "key19": "4r8eMd6fHvhMGKuB64zWUk28VFyWD2n9HtoGfbtA9TSGMFgQEjZLspKV1skEQSy611GWyfoPqPmJ3peYpzmrKtk6",
  "key20": "641jhTjgr6XDdqKsDGdSx5xheYzuCnQ9H2sC1rgh5gJfroBc3GSghXYKknSVK9ZotZBDHGFNgt43XgiDUrfSz3f8",
  "key21": "2nkrvJg6mDoxSaVWURoDsT3hKq5smzhsDQHrHbdscF7SoVv5TjLDDyzETJSa9G4Zm4s4jpUmrcDon74x1TfFFwaP",
  "key22": "2qY8F6hnRZMMkEWkp9x5R5yBjjQgqPFoS4eWp57QmDRTG9CscXQ8tnx2YxCdzbdkiNCxHviQZfzD66TjSUxXdag2",
  "key23": "2sTcodyZDB6abz3odXU9B51JYoeRmunTGSJGCh8nfvg5gzMgNp5LyNzkkHFzGMHHQ1K1J96fC7ejMpVTigedQo6v",
  "key24": "4Z1UPMk4tTNUkkx5g1F6kMpac3GAdL5SBLFGPoF6nrNDfKFvi4JXKT5Lnh1B9EZT7EbS49ZbXdrQ7nYS3uoMSgje",
  "key25": "38cwZhT5n3rqmP1rx4HZroiTdYQwx3GmjBSU1dzfVAVzPewvXU2wVDSsoMnna2EQCWwXDX5CMvvFZvCVQzuuN85N",
  "key26": "5ZC2ZLzBMZ8aW6KUBkmZxpeLY5hJRydnzRz63D2keUsL3UQMjdx8oiaodVnA7GaQgV39hWHNe9mTYuMSupddBJUj",
  "key27": "5E7N3ChuCyouqyHCG4RQ8eFoJYz1pqQyPmBpJfMSvfVzgQyMu5tQDq6ugbc2t91UBmtEPmKeqrR6qu6xxNb2PWim",
  "key28": "Qspoxjbjd37uCWk6aWEcCtmzqDm7kD7nHPNkCNQcczkoMLvt7tiAHRktQkHonMMkFXdMRMSdtsWJmMuPbFfCdMz",
  "key29": "2EyWCiMUeyVW2bLnH2vEsktw6T2KUENJ2MgYUuf5EUkobHoTJSGkKsccdo92RQQzmbrZfhFo64CETqML1Ui6HUCk",
  "key30": "5qxTsEpuuAzSWWHvE4mtYyvozjRDv8sFyEgAPSp3H8pN2dgN8gjoMJGvSwbJamDLyX62SuTix9J91dwSeCyKkFFw",
  "key31": "kaq3JGKzoA8nZ2SyyfGKuZywsYMAixyjn9VB2o94R3fkFyqy1gybbhcweUF121ZF2aY38u2fRTLUcVaPu6kki2F",
  "key32": "3Ew6U9RjFdCF6Z56GpbWrDH3xBMTDDY97iDfirwR7LMyGTC1eq3hsGyv9cS7vFDBKaWfZSd577nnKBH5NAExXtXd",
  "key33": "YoJsGBb3VshwhUsYmJ662z7inEiajgqnN1hH6t3w7bfZfASVoWoWNNJDBbr7sdEYUNVJKbcwbdhVEySromBT4K3",
  "key34": "2pZS4i9BZXGynHjpwaTC81rDKEXgJ4wXoqM75fvT4ckuAYYXdNaH2ZA12tcETRrjDmC1JXKPLgousbsa5WCFXStr",
  "key35": "4vTU1HgDJziWXSEiQp7YsZvmpf7no4YjAbpQf7C7VY8qZNpyxeRModn82N7id5Xv2DG38cRYbD6niyms22TXpymH",
  "key36": "3Y7KYb97cTTP6ULQ6XZDJXa8mj7EdYWSXcJsnQ244zaEEpFdzm1VgDCe86QuGhK8gYmgee6nbiVZ3JKuqpoAuiNr",
  "key37": "38FmFRdqs6K8xJBQyjP4AjgLMPF4avA5GaELQVnvQdVTXRgbbNUE74xzjWEyfvmpau2Rs3H7RWAmWT9pjS3BnJeb",
  "key38": "48GGtoK8iS7kFp6a47UUexh5wPARZQLaTJ8zZGJLvdWzQWLNYw3tdGoWRRC98VAhowtEtmX8sLuTikSeaRujLyeD",
  "key39": "5wi1JxBD2jZ2kxQYk2Pitn37CryLXmMZmvn4rt2dY6QsQYpa3hQ36v5CS335fZpxaxZtLd9MhTrThvmtNVdo6drb",
  "key40": "aWYvfuMBuwVRNRNk3P7frNBeVDey7odpqxEbyUi5Md5ijzyoaRsD7wQBzd8uM1ABPH8K3LrM5pTFSHMGDGEiANo",
  "key41": "5ys472FSEgmnoxaT2Q5uTYUcVunQjN1C1Guhfx7VwtabrNwWhyeH6AvWMYWpmbxcMCs4tvAHrijLcjPMauoZw5g7",
  "key42": "37CXvotxQ6H5cce9qQLXmzJhPRmvLUcQdSJigZ6Veq6scKEpX5ohtBs5GtDx2GxGMeCQ1esZBUu9j9Be3jzKacBk",
  "key43": "3fJ9Bx4GMv3ayokdnMmMe1rD55HkKad8uz3nVDnZ5eZYhDiELpGJ1P1ErRY4dTdJv1TNve2qJDgiugejq2kKJtcQ",
  "key44": "61A7NB8F5F7tZoxgrBR7uQRiGbXAG5ZPXLPbuCfJricshkBVkuugvgfydwQayMtzPY4h4oeShS6x41sk9RqNwjRD",
  "key45": "3KExVTyKPD3R9LPyEdzg7SdN1EphG6q8kdezz1uyieB6qTRHPpEqE8c4cahwQZ77645wUKKpNxtcYnzyFdRjVEJt",
  "key46": "5rKy25gUwFFm4NioLrpkUzJyA5mnjH7nyVKqaBidKpibSMUHiy6FaebiUESgt1bAs9LSBLz4E9XYYpJ93UgwL5ML"
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
