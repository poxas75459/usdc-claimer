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
    "5ea7dLU6T4KZDoug4ez9QbJ2hBcEoiWNMB1hUdLSRqXK9arGTK2XBmnn6trU4A25ERJDqKfwuSMptKkbvcYDRkBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XVhE6C85jYZrJuZHm1CRxLsja9WuLq8Ru3k163nsXyQCyz6A7b8mHbVGqpRRXWborNwfWtMeHu8E36CBx7roRoU",
  "key1": "31omUL9GMhfg7gieZWqGLEZHRvA38TPcs2p1vHgpFDasrGFhaTgE21Rcb5kcGrQ4aTLxVvW31EUZv9762sqzyhM4",
  "key2": "5RUJSPKGwFfm3gqE4i5mL7PFLYWfEWPnQozgdoYFSCCdBZ6GLkyfStHPacAVz4mQYkdSyvNgrwS2Pp93ijtkudyZ",
  "key3": "2JLmSj1uUqdrQS3jtvK4RysBJTkmWQAxiwy7kyUYXAqMUtW2yX1pHULuiXzJA7eDndqrRBH5EV4upUB2HyxazeEB",
  "key4": "ssNCJSLVizJEQTxYjpJuNgfUA6froknV3tuYz3Ei8h7a4mCaFTxuwKsAUBhysMB54sSmyAb66VBUESzcXyoygvy",
  "key5": "67QwNV2X6cmFV4BYsBfZ1PnMDjDR2mRHjoKxrsBAb28PoTPnfXWBkVbWvU7X9nH8TeavJJd88khRJ7HptsSwtxQY",
  "key6": "4tfJbZfazVm8d3hm1BDLotGgMacQZTqm66pW7KCfe4gzJFtuKsi6Zd6YuKtEGRQqdWSPc31KKTYFE4S8RnhvmiWj",
  "key7": "g6WrMmuFcu2RmeurMFPEsS3Rn3cLtoNMEvPyyEt5qKwmM4F8Ckq5tzWVviGgTqGqZA7nTY5gNLQeVfey2SmvYNp",
  "key8": "5XZPHpW89hNdkiWE72voQxmJ7B2qoLxr5sQ5zZJMC1GXf4PtVzKFx14U9RpR2ennsjf7jLrFJoxztd2sHscBLjtM",
  "key9": "2nvsHf7npPmcxWCMgn2e8ZWKYoSmPTLFGcnquhFwBMsS7m6D5A3CuemJxsSNrHH8wAd9L4BtGEDxnm8CYqoGaXC5",
  "key10": "om3YKNQu2FfbHWNBNXBeoHqA1t4bjeKLj2ZyAYgNHn5uQ4suGTfShhRmG6GHxFMtaA4Cof34Dr7kdHqNU5s9pnh",
  "key11": "64E8RLdH8FLoj2v2RD8bCa1CdMuxXM95pqWCqPmjhdH9GuTC2Eec8xVJ196GkDwn4GRQqW7JPTpLyrxj4rXQs3Yt",
  "key12": "36FQPc8xLu8tDeHUdfsEUjA5AG1c5AMTESyjAbK2fGsM17DwcsPuc6GmXTCe68buPtNb2tV3AVPag24kk7rYLhQy",
  "key13": "5FvgDFN8Uy3fo3Jq566jvkS5Ys1EYNQBwxearB7nVGbKzZT2Zc3123PJgDSWuuoNuD5JHsferbySYEAmTAEXZB9g",
  "key14": "54wzsybCa884cqaDDFeuoWo85vj9Rc2Cxta32QhA64zfn8zK6S17yaz8iYm3TzHdLhu8URsXJvMdZG4LwfMsSeeU",
  "key15": "4AXQqMnXVeY8TkQdM5QiQvQUpzS5j9wA7y9TBQDtYmFaSsJySTBxhbtZphAn4jR5Xs5J837NdzXNHm12ZtnYHTDi",
  "key16": "4WNBw5Yczvn98bGsijpyQcPuFAkxEaeWbTnX7uzZXsQjthvBmow7Q65KM8PMaTQPZzPuRkXgYwJc5NpFhR15Dfwa",
  "key17": "59WJyLasEEvUpRg2hVQYDBTpc97RqLqiFTGudEbUg6GL2uAdtWjJf6ouZ5284mPp7vicKuZ7xX9AXQ1Vz78HCXac",
  "key18": "43GTHcGE5kHrcw7fo8KwKcGEnsZL4QkC3LjTDsi2vDzNK4CvDft8Phi5JNB5QLrgK5MSWB2v32BGwX2rHvbVkCuZ",
  "key19": "3geAW8V24xmt1jyGX3YvGcUQ4ckWnQ33gthMXzsDyYmJp6AXAMrYQyXG9eEzLN7NocwFVZSiTt1DcNLeFb3bVyhX",
  "key20": "4JHEHWGprheV5q3M867Gbh6TaW7rXv4ouV9wch2h1qxcL3tEKmbvz77Aa68DESSD2pn6AVxsDsg38GPqEUgPxkMd",
  "key21": "5kTeuFkFUpArxRW3Bc98stZR3WmGyP9ba5LkiQ5c1D9yJNk9CjToWf4UCsoHmEMz1qajAD56AaFoXPgiQh3a7r5b",
  "key22": "2zkCadvzXuV1DxLKrZhUgUm7vPa15EVoVnQdT3qq2C5rzFbLHepkrdpqSUiPWNMvJDkRMUuAnU8v7k2jaFNSY4w3",
  "key23": "mJ7kCN73nrp9ex4pJ4SN98GcbpKS44SkjeMvSdwWaZRd8nqaEHnujSBAw5w3UWPMwVWXf7GaybFQZeBPftcYvbH",
  "key24": "b7HQQY64mmJ2dHETth1Nz94W4DSsuBDaRbQp9pDxKZLfnrpHnRTLf3j4hjrTSQG9Uch9eUPSAAV9Ze5PZPST4qx",
  "key25": "657HyAwuAopX3BtWkAkd5vwGVhvDUgbVsJRE7BqdaVXuiVcMTXykyP4XrWn5nBwpMTjRUyhJFACgJWtjtLj2xAzP",
  "key26": "27Lrv61PF975BwG2wd6CTKpxKnLUTEHYD9Fg6xrZd2tfx7NkFjErCVfYAEbsJccRDKieqF5jjsGTs92aSSvQuy4K",
  "key27": "5vmqHg66UR7UCdU7nHaXjN2d2hkeygUrvK1AxArztfsGruASUSyKZFbPggpHCkkvB4X6CXtrM2n9E3r6zuXNDxAU",
  "key28": "2afW1ZGfXvZkiW9Amba1GXFRfwg8q4CxSEJ2hHB45JBGTW1HT56myNmVMwLLfn4cEJRGwdst5RpoW29iTmqXMobg",
  "key29": "3EXLWRFbRTRPuzbVbKpaQBR1eJxPQ2t2RWTCZgVNnxF53suJB7FYazyjDAt6zmFBmStZjdc3KxgXpkG6mzYaUJV5",
  "key30": "4HnoeU3MwoKCNKcgAgPjqwgmBJCPw3m5XJeQixsZTv3bvQEN7TSELruVTf3pa74uMQiko29N5SnYXPV9wReUnTov",
  "key31": "3Je5joNqEKBU1XSNVBx5iDEQ7es1LFMhgsXjXiLL65ypW64KgDW8TqSrQFcgc1D8pKj3BZFsucSqnwbqVhvq8pPi",
  "key32": "643rmC5GNZCWXRTZQCYfzF5GtNBQkNCVftaNa6fXCiZjrbU7fB1ALWYyhNCkvBFqxiuNb3hwzyh8yaGoUMPZRY1L",
  "key33": "54f61bdzPfEGh9xxHRbxZGy2c51L3pJnazbwN2qkem9ZTftQFYhvCE95hWgVWWVCyA6jHmeHJgzp4PmfwTYqrJfp",
  "key34": "JCYqcXj9duVSmxjjhE8LF8uif6HWPCgr2jwHxW4rBdJco5pRxBzKK9Q6eZQajNsMLcF7AhxEGAfbiAoHG67Qbyg",
  "key35": "26LSP6zD6t2mkKYPmedmbhW8WEi6zsNKep7dvCscJ9C7AxEtVLuykyfgvqxReyMXdHn1CCwD1jfjQa4m3Mm4nPHj",
  "key36": "4Zm9cPtGJNRG7AtHVT6MapVSEYgnGAy1o5cvngqKy3hRXyTbnMK9KjqCqDTyqpNS2nkBbsaVQhnfJ13BrsNwTEaZ",
  "key37": "3Y2Kj4NCyGSh8fsCiUULACEW5oAJqhmM2GPpDhxP9Arp5kh9CfzGU4Z3dizgu7QNXVQ6EEdTxHoM5idVn5RxenZM",
  "key38": "JCrpGo5DCkhJTWe2teDup8HqhNhgYR83s8D7wRScgLqnVqz6Gf3c7ZXWhGqGUfgvHUFxcvc9NGYY78BP79vgWVw",
  "key39": "2mdTyfXEN6TwmpMzgzPSCRFLkTU57RLzq3xEikFn5keNjR5nD67mqzE7yu1tpmEBARywsshHEh8Zgk3fLCEruS1d",
  "key40": "4iYMCAwJFKeNY1aiQPRvPMUYKFj2dgypsSneXA8zcAhDuEQwMcjMWtnuyUm78w5uz7QrsXtP5SSDqB6YCQMZFkCc",
  "key41": "2Qr7TK5r75Xq4L4TPguUibGujq9pGMbuL6mN6USFQVbtYrnfaSAypCbUjqBpN2ZtndXYw2rdgUZRhGbH29r3k14J",
  "key42": "2SV8d5vkoiziPgd8j2pGBR4AeCSffqwTYD1qKj88DUWxvM5Dr5SHrYGrW2NbcjhQpBAxsNZx2cKaDnSJrXtxTRrf",
  "key43": "vDs2A8JFW9AEjewnaJzvhoALULpSvWaikcdwZkobNxV2qwDr28kRPoGs1tsp5jhNPQM53YUrBs8AXQVEEJbNzG9",
  "key44": "4i1fDC98SbG5NScTCip9Eq2TJoYhCrqD6QSRYbW2oZcdJK9ra1PQB5nQyWJw8GuwRs5ZdJr6cen3BKRB8hkHuzXM",
  "key45": "4TSQCyhtXbtibtPLBD9vVKRvB7VrnASPnMAPbt1nG7cbmNWo1yqxYXXQQd9hG5iDBRw1mDo527QzLJGV6LMKKffQ",
  "key46": "59GBUE53TK7U5tM4ohD4iwUocxUjddss1Q6oyRH6pFKSwNPivzj2FTs77d5DcPpkFrVpmUwyQbwPAXcEwNEdCYYo",
  "key47": "5Z9SqSiWLyfN9e69Gbzp8nM1EpNxuv8uv3nVH7RE2AUWaY7wzY8f38BMVxpMXpo9RoECjzHXb9HtjDeGcMBNyu3k"
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
