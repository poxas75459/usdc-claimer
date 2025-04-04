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
    "3A2nhRJr44zHf1Kbrzxz3iMgepDg5jyCKCNyhu2ctfkbFYZE9causcz4xXsoADiZQx1hTdwtbLuR6HQHMgpZuqJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34sDecTUoKToNuxnkLKyBgp7cpWsGRHVT3dJvG7K91rEs4CjJsDtrQFSnFXM1z5EzgyK6CxmnbYRDFc3VzNy653V",
  "key1": "4wbVfqvwRjEkFczkV549fxt9Jgb2bNqD7ouNpisKheJVT7z59WpatbXRBSa9V4EdQkDc9h2FpcNPm4cJjFcDMdSN",
  "key2": "2g7AEjhd7ENuXt3hEZjApd4fPoEuTP942URCwmvArcDBH27ZJZVg2CWc1hBnUSVv8r5kLmHdJB7NpZHZEi4xuF5C",
  "key3": "554ZidTZoiTXDweLPPSsRQswNhsHKYdnJezgYMgsXN1dWGGqpwkNsGaftwJxAoS4tVfpdpGd1gY5TH9ktpUyQ7D",
  "key4": "cnLzWEqXuwaPg9pvq8gY6nrpF9fBzKZjM5CMmtqhj4aP91aKZ1GaV2uCCUP1kBNRAPhMUxJ7btqoV3trJPcmPWr",
  "key5": "g7RCHzvitG45F83cBHzF9TNEtrJrugMcnBjpmDvM1gtdqvF9y1qzSxEvBvpYQjjxy2diboEyTt9rDNpLvUCuajh",
  "key6": "4DiPL9oyK7WzDbemDLRSz6qJoadEm2Z2xxPCrCrBDqwDq5uEpFT6vL86wghSJgRGUVvFNxHhTzTrupgCCLJ1QtJM",
  "key7": "2ToTVNDjWFrcELL8pMfBiJnaoZLz1tWCwnoJZCFpudKf8DDxLvuT5ESSP6LJM3As77MRgHcaDTTRy6fBqsLYRyam",
  "key8": "3UNBg6wmdSXpUohQgbubkyWYLH2xFZond83uGm1a2fBmvuG5Xqk5CjuHwsGHn5yyKTGmJPLkEpDg7U8X6ctW4q19",
  "key9": "2dR9gjXshNdsUzMfzQf8rhUkaamfexi4tfkJmh2rQFcLHWiG7BjSgtLTPSV98nQ8Jq1SaCdXLNP6NZWkMEGqkkUe",
  "key10": "4ACHg64tgVXf24cniEiQocpLTiauKZhDhtGEDXMrbZGr2icXSgdajXhRdpSXzaZgZc1ApxcdiLHYCwnSmxEmkrDP",
  "key11": "64KCN1F2cQpyf8hLtmPxv1rnY42uyanXapwfSsmRfrtqMGHvxuagQhFeJmUTtTvS6imea91YYwYHY7iuYJVor5GV",
  "key12": "2Qgc9MddXvuWwDRUz3rtLJyvfcTE63x9xfwFzFZhADcGJJ4fLMMFrrDgs9MQxYwcvCWWhuam52VkvF1m7MxjpGNi",
  "key13": "4yytxGwsgfFk6HcNRfQJ1RKH95y2Zy8oVNxf7wyB1gytByebBi7SX71pJJY7Ps5p8n26hGdVWeox6qTXfY3AniTb",
  "key14": "5UhypREBZxRu9woYYxeCqR1JmbyBKoYR3m3gHgrZQYnTP9Ds6Meiybh5B8zDZ9P4rSTWpVArXSr8LJFHviDQBrib",
  "key15": "4NZPS4AwejBgkpL61KJK7syMKNnytHsaQ39YXjNJbNrcFZGUXLfugMy6UTC8kUi2ryBsfaXXEHZV8svTnsy6xAG3",
  "key16": "35u9vMEYWnzrwLSn2CjB3U3QtGfjtRyeHbbd9m9F9o6txnmWzzmpMBkr1CYWxVGeYqoW8hMHg6Qg6zSEMa8dhbVG",
  "key17": "2EY1uX5gDmSrFEueMAZct9Xc13BmLnMdk6p1w4gebG7s69NRGzCiwQzxvM4zneCwmo2L9rDef96KgAbUWhKqpy49",
  "key18": "3XDmfEAfoMjRakdgLxhJp3YJm1mLjtLBRdax19iAzrMCALtDEbhojMvY88LXXCwktYPCXfTwmi473gx2U8zEmwox",
  "key19": "3KkgFeFbJCEDb8cKDkoMisWyEvgZYprr9mbu7URcescZwMSUCkwXVgYDYH62cfvdtaWBp2M4R3UFjnAo8xU6cP98",
  "key20": "2ikkDWyQyJVZxBwdvY48f9P3tCd4H5UX5U8TFzbLXYTBa3UTKbVJocE9Me2qygyrGApiBxZu2S7xd9m8XBmXCPpa",
  "key21": "5AutTkYWLV6HqjrAj6tVJ5mhFnb8oCxokJhsJ6xXSTeZQ4qxNtRhTsQncYwyCfeGMLre7WQABWC6VcKSrWcVFmCB",
  "key22": "fAhdL65cArb6gT17pkLAankpCPMGvS4rvtdRcyD6MZNr4JuxZff5kuAfi4Gncsct8N6h7VRvq8DrrUukXgwmE3d",
  "key23": "4GSthpnPJVnU15wVDGqghQDneCyRB8HQBtKHkD9iLfpD6DdLNpcvb6a47p9pWnrzoKRDhsrqbBMVTLqUtheWJc5H",
  "key24": "5oFMJucPrU7maTeHTh99s3WJZGYZX5S5QQjkGJbPNhjov6jJVmdSyddrGFci44p2XzTbPbdLbzmzyiLKysj3A95g",
  "key25": "4ocitA3fd4qNWus1JarAvjUgwKAiECQz1XeNCYC49EL1zFyVnVfKAzSmSQR82f4YdSwwwQxYeZMkunafEvvfkEi6",
  "key26": "2WvddHxiRY82fVjpjHSSyrw8SJVoYnumRknZYUEUBcLRdbTP5QkZebWdcFRKhb3fmvpX8MshChk7AFpCDD8JbyvE",
  "key27": "Ka9GEF8bNPeNtGTKCrZFjZxtpeS3iYZAT33ctZ5PThW3ph9nTDYfaVMQhqL8dvN5vGVvXaysrNr6Qi4Srs2JeEo",
  "key28": "3mpFg4RKgnb5oCx8LsvrpkCnH8f8L1j3eakAYsQ1nkPpqY8cQgDw6wHNaeC2MiqNfjaCuYZSSNWUtnLiXWUixPTp",
  "key29": "3kzR5wPYbkuwgd1m1R4m2UzikGSi4w44kf8MNbJtdwZhdcR3Bxd5PRi7rZhBzpFKct449Bm3x3RsBnRrD4LX8skL",
  "key30": "3PDzLJsphmpBmXEkmCeDHLUfTE8SCk8HFKbZys412YP6NSKRtC5PZd7ABW9PBiioG8oi4XkUJ4JUxerAmi9ssC6v",
  "key31": "5PfiyhNpy7sJAeVm7vabCR1CQtk8kg1hGLTXtg4Mseo6SkZZzicVkSjeXjTpZKFbYyWBLLaAtCVyXQut3T5TuAAN",
  "key32": "2RmDMddqR26MQiyr32xTF9SzJoyHckgXg2bGE3AWWnar6pd2ueFsjHvuPEcWKVYLWsbi8L6PNsQpVw9LrWprbjgf",
  "key33": "4dvms1K5LuaPT6QcYMaA8Jrvj4QdFDU1pcVaRbAPxwafVB9F18zBNHSPjR34QkpZ2mtijHTkzzPhSdxfiNyn3yWn",
  "key34": "32BJoxbHW6Guyxjgrr1DRd48yWJ229zZcSc7BjZCuptX7zmLRGJHjwZLXriSFeaqmpKbHAvNXpUWAPGb41GgMwmK",
  "key35": "2wyUHvDpvhcaU2qQMhpjqY4eMX4gTCv8gftQCtR1axCtHgM3oEyiNL59PpgwumjofAbr4F2wD9w4cRA5x6zdo5QG"
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
