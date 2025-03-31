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
    "2mGwDpA8qbdWL4UP21trE1x1h3DEj5cncxLGyYA12XzcnjzvhZHbqGhpXresGDQUMLivXAnqidHiiuvf1fK2ZtwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33gRcGqE5TateNuWDdkYKnACQo3WvQywfLpmiCU1PvCrg8NKeKTq3S82w9vuhJaVNZPb2jUA99nYcCJDvgHFTCo9",
  "key1": "5yNuPdts5BbLDdGYCPBfP3m2WAVrMtnzBKv2X7SDHggRqYEP3qz8PnL7VA4VJaSBpqjfQzKip6zgb2zGVPqvPG7U",
  "key2": "3RQC3X9jULXPE1DjyzKf6f1Mdxn85QKiqEq5JazLt8dx5wgw4mumwRs6swkAgYxPkVZF16PXzq8ArsTzvBuH2GHT",
  "key3": "2kc2vsHSY3J3GZmEJbxc6BKB96JdDY28qPrKqkWngoww9Pjxzatr6bdkoAGb4kEwBv7ZFzhCKUR2bKy3cq3ngBcY",
  "key4": "HX1nc1nWNSTiPpBdxfWgt1251JMDgez3b4VQb7L1FECLn4yS9u8sJu2k7NRH1xi2SbPg1bQ2p1ogAg8ajrreGpV",
  "key5": "4EP28rPNfuMUpjm7gLXF7Zti8mRSHXTo9q7B1cS5mAPZQNjFv1wvfUPgC9haeECZtA9KE7Ru9hms5xpvcnTcA4Lx",
  "key6": "3vC4fYu5Lny6GDHSNXAx6Dor5GN2BMz5rRF3JJJT4JabixE1Guys4g6xZCZCY3sgXBS1bSMn5PnE8Gaadb7NX6XH",
  "key7": "5jejSVtjoNJYRzfULuvpgL5V89g4yCFkvD9RQRjUMzYZXjs3dQQD8cX1Hee4vfGHjnFpUFyQmWgMVFCYqpiHbR9B",
  "key8": "64rJGVyAMVqAUETW2VgPBzE91rt5x92SeW6TLmbyf6idusJD2p4USegKmr3ypU63P1c2TVkUNQQ3QZC3BDAwqaea",
  "key9": "3zXd4po7RMAGYH9tt3m9De8yTZRnzWvbNfctMMPPfn6MqhRr6WhWDLqDaUst3p2XsP2WTxgNdpqNqhFwvYGFp5Qc",
  "key10": "51GWim6MpcX1M1pN1vvXCVDe4TGqkNhT9B4HKsbaqjGksdqeaUw3kqmZMm2Kkhnyd6gkrfQxwMVCTNk3gPSfq5B1",
  "key11": "3QxHQU7RdVEkbeJ2w6JzStxmjE6fFwbfkpVKvHyRde1hpjg14ZS6HumwGhTR35Y7Tg2pfm9AM5f3uQkPwKYSoQbW",
  "key12": "2KnTtZVTweNBkVtQmrSywaDAiyA5NAs66EK97e3tVMoxBXFpYdNxa8bFM6sBXF9MbpRe7sA7UAB8cCenkVt33N3D",
  "key13": "5adWC4DWbJ83aswbqPqjEAXTa7gg3bnA2gumqzRVSVX8j57KPBs16hfjp5iwBZAi9VNr2Mr7zuGmy5Qdhd6K1StP",
  "key14": "rKKqFd8wyu6DmrfYfGWqzzAp7jFLNPStAzjHdbecpWevzA3EP2Ym5C9GeqdcwGgEqMoC9N67ieCpEqbPDX3SefX",
  "key15": "2Hub2PK9nm3DULXfDmNa4G8kKcHc8iytyqbQzx9CywGqYxDTUZ1MtW1iGbseT6ofK2f15CrJzouqW26d2jih8am3",
  "key16": "GnUsRC1mxYJTaxBSHPD4nbj14f2GwVgmypmLeKJ9dKxiwgPsi3LdCqFk4cHSCwVcwpYbrAqR8MAuiGPtkz3bZrw",
  "key17": "2mS6S8weKebpzBGhAGbyymtsR2WvvXoBBKyJZ6k5KB1LAzhrH9KvWGa4B6SxEsh6SL1Snd9fcmmnR7bvbFZcdqU9",
  "key18": "5WcMcGiuEWdAKdxRPUyLDSGWbDqe6ZKPcnN4CScijXgNMV8WB6Fu5HzC3Av8E2k3TRXUA3FNzRvF1a2uekjLdyva",
  "key19": "63bPu2aMPDQKGDAA9wrbspyPWxz49GWuDHHJv25hGp2huFzWvh53qU3BrMKyAkE68QEbkG7TMgrvSGpEf873qB9T",
  "key20": "4xpeMadmuM3L8upUNpaW9tKiu2PCt9bCTigjX95ZD2oGVLBP9hpw3wDYmq5FLR6SKeDEXXVdTgAT72aVTKcrqm1M",
  "key21": "48exdaJBU4h3mqMyn3PxZtvx3jbF86bUKdVmL7pHsxSq8Gyn7f7BsXkeoi7Y4DF4S1YAKk6P9sJpzvgoYeXkDHNh",
  "key22": "tePbWNz67tcGRNBhnm3pv2ZRDEV9LBji2PmY2xp5HTy6LkVkyRjc97MtRPDTg2pbzUMAs7Nqjs1CFhWyHcxcoRv",
  "key23": "UJV9by39722Sb38QyTTXEeCBvGRtmwakgJNHiAEG9XoBr3XAdUzdTn6VPfdssJD8CNhbJeQGezVZiyATzCa1KTt",
  "key24": "roDZpiD29qFC59842qrYUA7cNrCFd5iQPk1SgdSjGwJRB1Yi6auVKuQo7LWwN6rR4kTVCmsfZS9XB1fzJn1EcY1",
  "key25": "3NaJRrvTVgZvTH2R3LMnXU7xWowWnwqqdhgv7APnEjCq7g9Bhg2P3eD2dDwXExyVs55xwiK9tTT5syg7DHnDASQu",
  "key26": "3sTFBARwHc3ijgFiJpfRMaa9CRHz4VDPtf1e6iNicFNpAvVadn6ywxm6G7RrVPDh8JyiYjwKdJR5YWsfvrFwkBWw",
  "key27": "n2pKV2yLUcFhSHA1ZRcLF317QkCpFxLjuHJWC787kWzxujmD8tAMz2hyNhJNM3quxDCuGYgrg5U4uToy1aGkwHc",
  "key28": "5rM8HtPohkpa3ae4xz5r3YDYYgVcW8LUdgRMYn2reynbydfHwHjzrCtiCUXF37ZCzxGnenxUqJkT4ifXyLkyhymT",
  "key29": "2eBRKtuqDjGEku8cK1MRWr5LS9zEL6pUCtNmcvpPnRqEHWYBx4FyYqdg8i3aArhA7gMLByoM9WCWkdXrHTsbC1Sm",
  "key30": "3EoKJ4AHCjmmS5jCEV2n3FNraUdATjVYF52be7aW65uXLA8YtS17Ke3pazYVvtfZRgUbe7PHqsnjf6FfVqcwvL6D",
  "key31": "5RE8f9AyM9gmgPkuj1YpJyzSrMoD1RSBaPQD1AsC1J8S2HaHvAxEiUcbjY2dHSKuQz9RgXAn8bUQEi6TYhNPxPAv",
  "key32": "4d6cFb4oSZjk6qJrD7J43S4aooBRLcw6FQTxaHm6D555hWSixL2o3nMfmX5eym1qxuVYYAUg3obmcEBZqrGDRLuX",
  "key33": "4NhN1ZwPirP4pzKNRkwsBQgWxpKzPbAvVX9cdExQqTW2aApE6z29eQfte2woeBdXuw6utPvcxGV7VVhGrvvqYWye",
  "key34": "5wCoqFvExmKjh4uFcz1u9eYhMNUwtyq1PiqZNzha89wrLk5yQbg2yQvYem176wEvkpfZWFxSZnSbGyJBjYi83Vc9",
  "key35": "2MoY5rCS9xKZUrs95Bg5oaju2U6ESKj9GfhMypXm3wkHcwPWoMFtSdqCdjjztNasvaWNGfp25RqfiudXaNApevjF",
  "key36": "FyaGLdKqQw6b25p962rEjAfYJ7Nb3feCkc3TG6Bko9fPmVyhtrhSxjyZEyYMcV6Fym5ezQipg2sQCRJcwdu2Ga1",
  "key37": "4y1cWbLZG26PWfy1EdCc39sgcGY2gyKZ5MvfBWVrkZ36FsEGVtGmVmwziPmUFaUEqrVKEn3UZSvUpw8YfJZeqXmL",
  "key38": "3RHzMDzAiVJFBMi3ntZS5sHN95LsSaJJZs5ybbJKwAXxFQ3H6UeiR1qM8YnPBmAMwYTWhQHgzLVb51BnWd5Pguis",
  "key39": "4HAQNUGgYv1wdCSkgB89K95cDnoxUWiL2N556ZAy8ys6pbKB1FZuFXdewvDnnnxJB2D5zb8qwPWeEjoFh9Dvz3yx",
  "key40": "4juvuckm23JKNPLeuejp4AJbSidM1G8twrTWvBMWvK4WEV9GB7QeBE2TohxX28C1ZxySVR2bs9pzkMDimvtLXJJP"
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
