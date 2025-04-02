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
    "4QVGPpwABNaqVDCwBC2n9UontxCVPWd7X9TZzs9JHFoogyNBFdW71LiLZFq4Tm7P8XBtdBymDk1ikJvsphzBpmuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sFxG8WqQKkFQv8W6hHw7imRzoWZkv6pMy8EjWnbJH2135Ujj93CvegA94KLgG9vBRZYtyfspC9YR5TQizdkfsQ4",
  "key1": "4Tj22by2nv297mB2qW3THCEEwRtWxoyfg239roT56QsKaN1eunnkWYBJJWDLgWSTsHrr1MmNcrPDXEHwP5gtq1ca",
  "key2": "4jAP62Yk6vjoQxEWDhFMUMRxwpDkF8dr63Vh6tYM9EtQnj3dxZNgpyMrhhVGfyqXpQVXts41muQF5Ned1rAqwMN5",
  "key3": "15rWxQQhoGVfs8LbCCg6XwYZWCtYxp7BgMQgZAvmZhMj2YjVeofukhvSMfrLrrPkW4b45Dkv66GcBg8f7YYmRcr",
  "key4": "2EuFymzCGomVnWXjzopXoWDGMcmmGuphfB28998QJFS5mgW9hr4dhXti1aqwRPPGfquTTmRcU73y8XsvvZXPbQ1N",
  "key5": "2twoQH3uRByFimHntSE5Hp9RbHaJAA37ZGgqcSJfrsy192CY4vz8DqnhPT1FagxedwQg46paKAstahVEJAN13QW1",
  "key6": "3CQxg8AJt4ZvrZnB1nhFqd4vARLGJHGGW91SUtLZ51NBa1U4JeEZjba4jbU3qvy2B3ocpiiv5dvoeQopCmQJ215o",
  "key7": "48cqTPYPERbB7of6TJK4qMnCckMK7hxTHbm91F2u83bcM27Cs3ZP15zrwdtxvb54ZDRbfLW5MXKqhs52whJDZFDg",
  "key8": "2KybTJa3DQ6gTmzZ1S8iMPzZmu8ETnUww3Xn3p4S8q4fxP16EALKkoiJrbBFnU7Zrq2CiiUAPfYub9gAfyWfbcdL",
  "key9": "53GTsGY7aAgPtiovWGRqH5R6gm5XaCaF2xUbfB9csJQ6FwAE7wz9vZYDTkSnC75QYWv7ujCvKHFBk9MFmmemJAYx",
  "key10": "22MmfeyUJFci8wQKgq122dRo4XvqRx661PCATGp6Cutq32UeTY5EZqjMdC3REKQTRBWef6RLDYxQ9Yg5mribXyJs",
  "key11": "2F5o5zP1zZv5BQetjCkaWAMzaw9gM8MHot21g9Mo4gryQWhfEzUEky88QNiqo4UpZx2BTNEL8vPdaCreRvB7ScJL",
  "key12": "3yN9yqBo413AagamCffyMMRzMwowGFJYY9npt6xTgCdup5v6YRYPVNuYTJfvJKTbstpwAzhTP9D8mo5PmC9DuFje",
  "key13": "4mpGrAfRKtiDGed95qLhkTGWCA44ZvcAyHoe4z6tNUocbH4Zhe181u9iFduDU6vE6rDTp8DqH4WXu1QfdJnqj7XF",
  "key14": "3iVb7ujsS7GQTuJ3Jzr5XPhXcJn4JviNBjwWKTUgM7b7bExByKez3vtSLUH3KfspPU2L1ALeuTBy7cCJska3VDRE",
  "key15": "u393MSyXcucxVCUDpmrMXxCr9gJVuNJ1NQfyHyivY9FeZykeXjt8YsEqdnGT6bQUqW82mJqaq64QyqFnutNuDUQ",
  "key16": "2Jyc8SKfoPdMK6jsfQm1eshppbVRffHzWhtaamtArQf74qjpx2j8zEAZ9PBLK98LcugFGr53semaHnH9ph12BcnQ",
  "key17": "3ScBSBu3Ny3oVtbnm1jzTJKKxrnPJ15KQ6Z48GH9kr5y5RZxcGLfEf9USPr33bGVUdt1sNXW4Ud5dnUpLoyVcdEN",
  "key18": "3B782dpCVSQZGrJioVBPDPELEGwG9VWwLb1oYhxzFnRLJ7FtnkpmgeQ6vb9hgc5ndJXTyDWjvgfq5brKgStGCxyN",
  "key19": "DrewdD1cy5rXpXVtKQGg8gD7iJYNBa84PeUQtSznQihjpoqJYSHMdGQsVoCH9t77wF7Ty2KcsVsMwXjL7FvFsGJ",
  "key20": "38WDYhPHSV4bfuvvtFkiK1X5ZaeBs2Smbm8xKVavkjwtEHfvwL8LUJXAuD4GNduNmWJvaoHkx9cEMXYUoHf8i5e8",
  "key21": "uk31XRWwtHydVGpguhf7a82agSfZEB371Jn84E6nfkKQoKHADXRa7AWyDyAAG4hYRHDHvuSMnWRtq5AFGgVUxvX",
  "key22": "mpj2S9Wp57CYXnuPYoz2P36twgTLjBrmCNoK7yX7zshzhoUN6nw7kUYG6sU9TdwfduZAxdBgogVuFJvGXZkJgRB",
  "key23": "2X41faJEFSMDuanhssqFs5qFRkYYLB1QEZakv1B2EnV4s5LwepuoPmsrELS4UarzrKRc3kMSSpXyUgUnv6F7gztk",
  "key24": "5woBwFSyKA5tyi9qhsweNrKgDc9bWaiBmxYeAN8HNmFgyZy8dnuzgBzTQUDb1YcySKKq4MVXo8FbnJgr1xFe9Tj7",
  "key25": "5s7y6Lu2kGmtdFEgtbrgnYzXv9zVD3fXD8FMx5sWrjtLt3kehfhFyRF1Z4tX87H5o51vZVFnB9vEgLJZqmPMdH5u",
  "key26": "5hY2eFPfUpwHChNbFoo8uk4FEyxrLkxdrgr6FraZZTK4AxqujjabFhNfHB4NqPhoXrTbUG69XBXAy49zG3yKZer2",
  "key27": "35XcJTVEBRntTzTLG7rrmw7AWysekDu49sVZ3MrhgjbFnYpQV33AApUaJcR2HWkvK6DdrZ2BHD5sjkKkHepmRWkp",
  "key28": "2e8iMd2gFQ5Kiph9rzBoxZfWfBwG7466yvcFUirLRNz7ogGs9KeDvxaSveAdDgGzMNHG41xTBdqRVKbAb9wrKn6A",
  "key29": "EbcnVC7j6Szrx2xRrTLAhgB2gh1a7kMaJkCaWKbVPCwMWLo79kwNpjZtxystXnNhUGTD1oXxZtMAMeNywKKh2hf",
  "key30": "2G1D76Z2fLnHZzD2PedKASTmrVhg7Gq2X11rVD78HAZQwBt8c7N1R57RjJrkNt348EPtWqya2u98HrMMBMCRp28A",
  "key31": "4qJWkucXPYF1oexBhjGWa8QYcxunq5HfrkVRfgKcFNbaxwKS2u2n4t5Qyv9Nmbmr76du1ihGjkFYAYFamuj3yw9R",
  "key32": "RUmxUqTKbCrx3GubMfksNhfznczJE8nM6G6oC3uWX6eS8sVnpQEkE5mWNwKB9xhgHD3tUAS8L57hKagzuPSBFJj",
  "key33": "xM5oT5r4jf9MmeCbsNxgeDCASk1HbY3Eja5VsvbAwGSHR2UG45hx13ZyEPo4beGwpMxU3bhuvsSrwdxrwLhYnBA",
  "key34": "3Dsyho2YfsYY9kUrTPzNW1LHVwUh5epqXBdbfknXEWMZzVXei762YFpRSiS8G4jgV8yCWt16K5CV2gk9vMTfJKSq",
  "key35": "33Hc3CdLpSKGko1XyE4hhn7fbVTVoez5yKqMSNvuWindrDsmFw1fcW4f3zMZD1b5rsuah97KZwq1MXNAPdvjxJ3S",
  "key36": "2BLs66fWzq1E5FqetUwaFYXxVSYzka4XJ2AYQytw6gTRsdYaSx3iLhWXuzjkQv3e6ofuEDnP3xScX5icZ3qeMJTq",
  "key37": "4Ku7GVJ4iXtRaqyPPnRn94r2Q8mjvEjjaJkq3D6WbtT3z71k9HHegJiisKEjNUc9fuyD527fqRuEVASuciE9JzBV",
  "key38": "63M6DrZucFR8fuhpMmQiuwBKEkQQx8NuZWSMMJtaSxQVf7Emrg8kvnmwJBSqY9QTuMvwc789J6UicYi6YDD29eQU",
  "key39": "4Xv1LujqNi4PJpPd5xvEBQpBo1YvigzEWHRyMPa7DWT4Vwi4iQjcCnywvgioEZ8WxHzAYje9vUK2ypSWS4xEusTo",
  "key40": "QqU9BVFQNbY4BK65NRszYmw1899bV2KiU9QcLBc9a3owtyMyBUt8jEmgVwqzZ7pUmXWEPP8tAy2dwjKS9XysLF4",
  "key41": "5Xd1gWLm31cMPuG1PT4jx5hUmaCUnYciFr6AL6NY19W9bMXr5Hvs7eveGEwtncxGnNS7YVqiW2WtxYKydRjYioqD",
  "key42": "Ckbsko4Ns5xhTDuj638NcKYDX13hD6A2cm4arkBeXUKSwKwRkKgQbBecNnoZnY5ST41r53554zcmgpeuCRAhtzF",
  "key43": "jQuYNN2GBr166bBLiesL8aNFPNddhxmCmkfBLs9SBSq6piq4xxvhQefc6LVLwFnDzD2RtFQKd8cWvBRRGkMRxC6",
  "key44": "3d7G16VRyVQSgBbzYDU1ZBtYsTkd2ftPMWXEZDRZhNK11ob81eAZuhb5n6zeidomeeQniv8cnuEE2FRp9sgvYUHo",
  "key45": "29oLwqRKSC3mbVNo4Shqu8L83fpqNh7C5yzp4KdzdD9SSwNCxVs2hneuQW1zxQejJErSjMMr2qSzvURCmgqFj4zs"
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
