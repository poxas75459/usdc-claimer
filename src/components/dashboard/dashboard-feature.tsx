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
    "5rNkLVmGUetn2MbH17a5uRz2EMKvLraAb9Cvq63BfC4VvwyyNNJ8yxJkstkMsERtSdARzLzR6Pc3NJV3FtuxfTx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Surku8rBqCVJvCZA4Y3ScyhSD3tYF31kehrA1eeu9VEi2pxWtNsUPaFjgrZz8KW6mvUC7nJvR5FTLohFLssvLV",
  "key1": "2FyvyhkRNpNBRiSU3ed9kQUpiNDjA9VNRk59asRshy8t3c1VgQWhcxpPnjqwQiFfFvvZEdyHbFZpoy8zXMGoNJHJ",
  "key2": "5MoeCpTEGEdFiRPGyz1fyxez6iuNaZds1onNknD31VJX4k3MwSUg6hwrnc7XoyfTXB79RGPghV8unZbptA2vqBsi",
  "key3": "4rm5tKNZpXhxJderK2paMdFEPC4xT8hhT2NffRsiHj7pJXdn7crhaJyA6YVe21un5894XA1CNST9D4cxUi1zgqrr",
  "key4": "QzN4K9B9GVjErcWDrDibUzXUaUnDCKtb76YbbJbs4n5ob3uHTGZ24fRUv9HQMPDmKFpRVFBx2ng6NmhNWmYYL3J",
  "key5": "3rKq2aHADtW7Dby8sj6qpnVi26ZjFoHQ9EuPDGFSQ71YvKL2qVkQCGJriebJuh7gLTG57oeyDUTrrb7MZ1oK9fQR",
  "key6": "2APcSNy89sCnAbAyMDXgDbEb7SNa9wSzy21RDgxtrGcwGYkvNcry6BjCshK4jkPSd8iRimqT5xcVCxXctEdv3fRn",
  "key7": "2RF8me51MjGcq7ccKrn26eFZn4vZEZetJmjUhAGR1U3s6gbkVr2DpHPSVsbBMWC1qe2DSE94pFKgqHnj7jK15ZL8",
  "key8": "6xkNfP4eaArzCRqg4ZEc21S2v1tEUwb8gBcZ7RnmU78jbqze3wcPGxFaBqMEXXYSLSnhSXmRsFuBHsWApUAaquM",
  "key9": "4oMXwmkrxmPfydRNMfhdhAy7chxexGqmmi63kQdm3yt19nUBNieXAppnAoLAKURxjTm5EU4FydELoYgzqGLwa9WX",
  "key10": "5xK6Y5FjX4tLBVgT556teW2RwmguSrp9T5hKJC8nEcwWYnC8MVWWd5EGfrbcm9d66pvGfy5zCdoxMapPJqAGVsm6",
  "key11": "P1oF2DYKawrbB5c8oc8FVhQVemSHXbFedw3YTVgtdfksQARhLbAKpeFdpYMh8pTMfeCSzGJMWUvG1HCWq3uB2bv",
  "key12": "5nRwsb5C8NCyH61wvu6Gk8JrvqbqJeCRkFFnChsKvEcuxM2HgSEtuDmpmzjV4J7Ris5n63a1ZPmWU58iueGRUvdV",
  "key13": "4PVX9YWctXYs5hAsgFUpq6dBWUjMYHiaZmBNRPB1Lo3D8kAV9yURHCG83T3sCz1kJk3iHRY8cvogUTk2r7yC3r3",
  "key14": "rFppKMWrDG9Uump9wDm9KHMiMFgEyVBcA4heUxXggmk8JetFKLuZctNnXcvimdnYmPnLYV7KiHXjVKsJr312nt4",
  "key15": "2CxZYak1r8Km2roRYDdVD2SUadkW5Wkh7oeQ72jDHEwEkEJgVrZgzV3751z5s2fnpWzj3ZiYP2moxLFhiG3Ui2c6",
  "key16": "3F5CuKtuf5hLWM8mCtGtgjT6NzLJ4okpCayLTZxKVF4bSbm5TVnQyGdvkufREB6pWbL8Tsz7qywkY1CWZ9xFqnQJ",
  "key17": "2mSbSBejscDHNieF846h9Ebu5ed1vF2SaHFCPz64h1P4D8ANxBzx2jBwYd7vucABxLbNq46P2G6zgB3Rc92iCWrb",
  "key18": "48pCrpmY5nvrfYaNCPTvTZK7mA8Q3mcag4iWhDwQBahWU1TVv2H5AajVuEPCkgR1HLX8QrCqxh3XZteFBQN3adXq",
  "key19": "24s5AKEKZTx4s37c67nh88e5ctGw1Rv8jMDDpkLYJuJ9Nc6ukbpHzNJwvMNb4tKmQ6hc3nzNukG3n3ciGC89eeaq",
  "key20": "2266QFUJBhjASUMFu9z5wojUJrgot7Nv1snwfDwttYd9zjPQyySmbbcbcpePADWkwXR17edqtTKEGrHEaA8NTfvy",
  "key21": "osfTmvaVivzEWM2tzh619bRPePCCzisXANcZ3ksEVPpVbzwtfRta3xNPMmfULuhugpz788nyFMxZPJ4QWtQiqD2",
  "key22": "prNitccddmYJBrgubn2ddTuKbkWjsBTq9S18bZEqZB8gKogDeRT2hyMW1HhDDUVK1E7JUhp5onkAkUW27sL3epK",
  "key23": "2soARFucbosAtf8qBSY2kBt1oJcCZ8HkF991tuBMYaEnj8DL1owcixvj92jrvUY9RnTgyCFLVdkfgUJfJDXJNKyi",
  "key24": "AWbdCon3kXkEJ7JS6hhXUzV5AJ1sJPeFFX2oco1bNAb8k4zUEP35sWH5LWDTvy4bPtwrWbXNVr15MuYWyYsRGt9",
  "key25": "2W4oz1cLW7nLs6TEy29fyuBSkpAksfPgpiuSTFwTANfJjtaYpQkFXWvPuQDHUxYgdQHNRvtKBSjkGA3HquAmE38g",
  "key26": "3sgpct35bVTaugoTwjYknghYbnRZRsMYruGKDJFwPqPhFJRLkjk8urV9YVE5VJsxHyfgnWC7rGkU9C2W8Zta6kHt",
  "key27": "2UDPFa7KJnRJTT167LJ9h8fGNei9Fz8DmSyfMS8YMrxvJVG6trWj6TkZEctf8dT4DTjX9gDqtq8MDbg9yNRrYMZh",
  "key28": "y6v6CQqjWrhG2hSpA7PnA9XmejbHT3H66fy6J1kUG4uJtLcsdCXFJuPmUdfMft1oCTZwqKDDBmS7XH8X5fUd3GX",
  "key29": "5qWv8cAYDz76GEwz2tiQHxLtzQTgvDzG8oro5kvmKRFd4gwFPFcXAcCFVe1RzmWk8axoRwzyqNqedh2T2pc66RND",
  "key30": "ebTyR1w6xuJvWPJyjjREhePtg6UhbQuXU9kx957H3r3jvnGLm9n3FUEYgFRzUoapRjZ2SdmZVpDvYQx8H2yWrVe",
  "key31": "7vNjDisezCVdK8mxdShtfGeYKAPX7z6zfWAXhUddzhHAkpcMy2vDr3YDd3JQbpcr4CW33Dzs92PHMzAKJ7wVeYm",
  "key32": "C4dhBj2StvGr2kBmmCPE6GgHzDVqpEQMK6fpAemvCMrpTnpDQC49EwsLxBw2AfHB5ZAmnf8qJbYXt1jh3MWF7Tz",
  "key33": "3k5iCc8nTEunjJqXjcZ1WgPdpE4U9yQcLKcbE9NdQzKaJZp4ND4pU8ry7BpM5SqQCvQmbzVa1tkvte6vaB5zQhdz",
  "key34": "5ecyt9cMM3Z5b6J6HAVfuFUwnL35cQmmY6svyJJix717DGLQFc9Q3ctPvkUqRCoehJHGnT4jcf9ha2Xi8uuyhd1e",
  "key35": "4DMFh3uv1poWyYHL4rzujjixpP96w5z8iFoDqNjszjPND7rmU2nSUBe8gNQdNvxh2LFzVLSHo7fQLv2vHhCFRxoa",
  "key36": "eRAoaGmFHxFe3Zxn89JsRGADn3ZeQeneaYhUjw6MuoiBtK95S2ryFXz1XY4Z7gDRf4WL7FjHsDzS3dVVNGH9tAx",
  "key37": "2GZ2w7hAahYnftYrTsJj4nWXeWvpkZBaoRhp47Y4pD4C5Sn7qrpMW2Yj95SzjgBE9cbmRL48U3upf3PBVEULE7JB",
  "key38": "63bvVLjoNdD4jk5eeq6ZTSgCypxkWeuzBgjLA6cGd6fri337JkusKcPB2qhr3bx5pnJYL3meoN4U4iJfht4f5aEn",
  "key39": "64nTNpJhg88dT9GtZkizCa6Z26PMmqjmbMf4dJ4FyLcYympJv3YTnhpRJc8wR4th2NuSjwoq7jmgpVprVUFqhmZT",
  "key40": "2yGdn7weGnjXwiP8KnVyF3GiU1ogbatE9GLkHBHPKHFF8ixgUUqNTinLuCsNXadUzyqcedXCDJJtTxjAaUaMsij3",
  "key41": "8Qcd6Qizf2fmRbNNW3Eg5wb46Q1wd36nj2TtgdqV6e6AedVaTN1jskRrywgkHJrnk5ca9AJqaEPZtVXXfqUffvd",
  "key42": "2LbGDVm2sSnjjngP3ctS6Ts2RFZMe2kZaF3FJS7PL8yjdm6XwLDk98TdnPsHVu3YoCUtd9pVc9ZueigmxkFuyh7Q",
  "key43": "4mZriaZ3oEGGVPCEaqvrwLg8pXgsHWAVmoTZJxUSsHFscdoswo3VacKMNNqaypMm1ytvDMqLZmVwVij8PDBcknA2",
  "key44": "65RKLzu16tgrXvm8uNCLhFrFykpBrwsbfmc4iqr975fX5HRJaf2ejd69E9nwfFUMYJaSszWGDE3vhhbhpjYjiy8X",
  "key45": "Yv11KPYsvF8Yu3j8YVxdxCTdbYYR7tPP2mSCajAJEVeWsjSfNLSQbvxCoaG6gRXiFRWz72UCqaFFyBH7MBe167Z",
  "key46": "5DKLwv9WDmLQGAzRbDCBcnhgYvBwWHQhPSdfAshBFCVSg6ubb9PbpVaAKKHtYeKUyt72DLqYWrR29cdS9DrHQBrd",
  "key47": "4SjWxV2QLXZ9brmJn4EUEpT8ZfVibr1VAnn2s5CL66mGbFUD4dckKxqgRR66cKCEH1Ryw5PZHa4r5QNQLCTN7aLY"
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
