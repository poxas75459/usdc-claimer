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
    "3BGAMKadZ85mRFji3AnyZKNpDQM2sNUvXVSzzr3DBGumvuVhsr3YE8GFN9pnYf37eZomveNv1FhyYfKJjLSapnaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aCtNEhFwL35PXhG8Q8Zd9uf56gkYHYa7DMUHuwNFfwPmLXp9ecK3WzBiE9Z3BH7UvxMBbrj2FNUBmA9NDG3evLx",
  "key1": "4dE4QJw8QpQjp4GdrmX8bSPDJMox3p74y7wKvYpuaLNaJzxtZ6C7pSAJo5oGJBUo27ms62qjJovq4VnaTu3jWH5x",
  "key2": "2mLhy57oCjH2LJ6g76i8M9NmaBSWL6tijmFzVx6hqxNow8wtcSMDeU136wsipVtSLZeT9Dt2mgYkdrnEco6TqgRX",
  "key3": "3P8wGyX2hJ16UJ13Sq2Vjrf3TkmXi3wjCG3dxpJfrzv48dGRZTf3246Ji8cJ5wcBo18MTfpEqvJDS3XqyxDHQFKM",
  "key4": "3xgDYum37Hg2xqZs2mC7FLqayLWtfvYCFPLEyD89kYV852uUpUi35A3rmqSM19S3mg6gLS7Twzcz9qjYbUYyggK6",
  "key5": "57BAemeBb1LRWEehfpvuh91Uawn9wrk2AyoA9HTudkr9PSqha6RY9xSXGuR77ELJKmqCbvUzS5FaWKbdH95DRg2H",
  "key6": "4JeNE74ZmsKTV9ChmgbuVR77GUBndhaW1a7H2yS6q3UGDvZA4ricfQvJdbZCjq3BjWtv2jeideWToh8aRtzcNFAo",
  "key7": "5adkE8fPZ5MpBVe2PvSohTg1MEyUMSTQUMeFMw2h3obHFu656JqsKSRfApd97ZmzyGNtFPGJ8BEgQEH9gVyxioq2",
  "key8": "3Y7zzTwFnNcUAUd2sgVSrJ41bMKBngkjfmqyoK9VwqrcdiLk1Ye9Sx1sHSMTskozMPzYS9TWhV82vQ8EzZ3nz7dN",
  "key9": "5ohjM6AJev8KjCxoeQKKGSZz4fx4Zf1nu6jBGJ7JgiapNUVA6BQ9dxWJ17RgM5cfsw4KoTNGLyUbaX17e8QHyH43",
  "key10": "5SKAGSz85ZRUXGRNByaBzmZixjV99pmCjhQrbpJXxE4XKSAGbeZh3gaKWWih4n11p3qWw7AzFNY74LAkFiCWkaP5",
  "key11": "2AWubSmiw53ZZpu4LpuKxZrNYfU4cnD7WnTLkSzPSdeik5GMVZWN8wCUNYrEVZ7etPF22eAwJAWjSThwfTof7q9E",
  "key12": "4qKKtSd66f9RB89hYaGQ3s7XFEdiUu4sk8h8pkgNtQcRYAG88gyb3j24uAMbj3v1HPqcb6XtCYDCBvp1WSWU4Agb",
  "key13": "fPaWMh7BxB4nju7iJq9U56Gt8XDjd3bxpdQLQGbCthABJkGhGoGmweW6XU13h9ssAPoNE3rccG3jiFmjg9ibhhS",
  "key14": "56aMENj3AzYwsxz9S3n4i7aSfDhLHRBJghPXdD2JKSNdnKDjKWLRwY33f4vGHAHYMHmLUe71kKvKUxoLQuhCVTm9",
  "key15": "2JbMwrbEAw1TbFbCA5yFvwGgiSAepV2wqrpLHgsFsTxKXJeRy6YGd6L8iHy66VhgVm6xzxW9qPcVdncRnnnSnc2h",
  "key16": "ibnBHXTLfmK44osq1YdL5pnudeyKG5qRgvs3KLfjjhr4eVMa12jGmmMFfVa3t7Qnqhw97ueLrePrEMyJUtQgn5d",
  "key17": "SS9nUi2mbey6RWA7ZDGZCPKFvDgnbQPf5vK4eJg1DWMxzCaKKUnwrW2ckQ4tRAjicZsGnpKvAQEcHoJbDLBuVqL",
  "key18": "3CuWEBBppzoMGsBXSuXCjEVmS4UUT1PCCpTmFpnDbwAjRUE5qKerLauBKQ5E3yknoRnKtTp8ErmqJMJwcwg2sQ1F",
  "key19": "efuiXNjD5DBQBUzAnXxBmNgd3nnhfibX5dhb7DvSXSDbBQEwfmEWr5BRZCMze4MAFegwxwVjkBUF9BztPxK9ct2",
  "key20": "4dpnzxC2ciF9RWgnELoKFKYYaQduBHaZt2LwWG7actoEgtm6ENyzNvRKKsGjUCZtDXq6ScQtzEdEXKMVu3vdMS8e",
  "key21": "D4SmYrnvEc4QZgqLrEMSgUhp64Bec1VcTUxTPefgqqjQ7n9oFRFj5DMgaZjY7VRPD9Ctx1VCtTD6qUkbZV921PM",
  "key22": "4ePGNAeuz233zdH3UXRZa5CR2CQCUzev7nVM25BeVnxGNbYhnHwYsiRSHkuMVrw6NuEiwMhMJ13TztnQw9atZHP9",
  "key23": "5WperVF1iREi69kTsfn4GbW6D7kHCFk3GJ4wcmvykoqFQmBimTdMaQPgpxac7cdqYvfWVQQe7fYBJScjC7TsNuvK",
  "key24": "662meM8KQ1ihivtFV1GBfwNitdj8ySHhfPs5cw4nj6C5oFBFE21BMi1DChcgcFyQEaaJqtVFoNxNyRzP7WzgjALZ",
  "key25": "2HiMh4Wt8Ehot8mbrNNydeijj64763NBMf5g23mN5jdpnmDCh8QSFzWKZoj335GYkLFLik7NvQwyuGJYX4GibzWX",
  "key26": "4qPbKHm8r7H9macD8Ro7bZEx3qjzSpPPNrviHfdibVM3dhWq9wpiHvzm2Scv6SJCwx5rpPF6YiJJQs99tpCYd42B",
  "key27": "2HgLGJHaSQ4g5iDivSrYz43N8wbH6Bts1AE1R8kD3Cj3D6MmCQ7TX7VzfVMFHbEgXoUgVgKZY34NgarxPixPfQJ8",
  "key28": "4fEmFxB53diMhMqVJTNnnd413ApM42TcCEYW1t9KSW89MFyKNp9i233eXKJQPaXAg8tR1d4jKZyAncPqNYhVGwhe",
  "key29": "2EzeZxW64Ak7A2vDiCQdgy8V5Yr5CvjRq4Lbykqyw9zM1NbqXGs1duCJahkbhRXWaqLpcPBfbdQtoEp4BeDyvgxi",
  "key30": "3JZsmAMWCZ8txeQXK62J5f9h11Nij5VT6uCGTrnwA4bwKSV8rcvXEcqyFBkXe5oaeknUg9EcWWQpFSe8DdYobV2a",
  "key31": "4BbhAbaWxfNucNGGyVNkg439xHZs6gLt1uytpuU8Lmh67ai4kT9RdBdfUnzzMSCuRdzh3DHZz78nGAR4ghcacyzR",
  "key32": "NBfsxEUegirgMGBgeWw11aTkzVVbdxWYATaj3gYccGcywR7LRBVmxDkVPsgo4jsUDvHWsrntq8QXMURJKqJ2SE4",
  "key33": "4MPvDnTBHzLziVDf6c8sGe1HfiBziKPU6fUJ539Kwsnz89KBJiiYMuQMuXhT1ECc7db9YkgsoezxF7cZaBebHtVb",
  "key34": "k4Pxfv6vTZLZRynoxwL4JqdSuLR3imHfvschwucfshMnpcdiNay5LggZG4urk1yWoTUFN13jow3aQHcJiWkopco",
  "key35": "2KtcTQhcnUjMMaLvLaTNyDXdXyh5W666YgQfgjq1T92WvWZ2TttKYtgmXjES9AdTMRk7mZZwAMsFAhmXxrJCVVzZ",
  "key36": "4KLNJAD7cLTAXWhP2eVrNfBc7tSCoEatTqkNxzypVbyEcS1zPUeRgrJj11sViEt4FGqQjK83ymnZDkf79bibwtyi",
  "key37": "23TLj4WryT2JEtLGzigs74etdU7NAYeND3S2KyFshbgDq3AEvFEMbGAcMhuW8hfk2u7JPjkVLohhcMcS5dtoodua",
  "key38": "3RLTqyj25uZkd2dkaXozTYy6rNhM4u2G4kFRP1zjcscJL1JSRrQFQTmgji2dw9c3EBc2dMkzpBWJ9JDxBpReKosc",
  "key39": "5T5wtfdCeqcxT2ydd7HoD9gTxHkKrPAWjLxTBqe1wXoXjvZHVu6PbNy5KGy5HbjX3yiMdXfkxqTwukDBdckwva5X",
  "key40": "3ST17UvUJtMYo4cia6exyqaHjiLT39hn7TSHCNNDDQnQcULuhyAY6MBq2Ti8wvnfjmVRCcRqanBaHAmqMWfn6KKw",
  "key41": "4jYDoRgtpNhncFnJkdTsCZboD5CwCTkAJR2HGSfKDzqmYnpJj46FhWHeezJAuEaxDxgfysUF95HGFMqBthq5SAFQ",
  "key42": "25NV1FqVyBS6pLm9z9MWmNg1pGCNKobSn73Q7pVJ1rXTzjbWE7HZfau79RE7vDnn8QwVia6nczwEARpGKnP66sWR",
  "key43": "3xJqsT2kwLieTRJCowv2mhwHKoxye5aDdr3iyPDwvcVAFVF9JcbfcKqc2tNmrLrpB1dsJQuKuVRcWfM6BEMPPdZS",
  "key44": "5tFx2W7xdrsY6C3qSRivJFVse9tBwD7Xt8yyHwWmFaSCPZcwbxJGro3meLPdutJQdteDGqhs8PGexyBeabDK1EfL",
  "key45": "2G5pBC3QjKS2NmSGU5LnAa8piFWEknQQVwcpyRipY7csoETWeqvNQBMCwSmfRtYTsxX2aaRg5DC5fkGx4LbMpg1W",
  "key46": "3xd58sXx83Uqg3j8JD1rhQghaUew4kikaRGU4v5pbR9sgzdaNQnC2gbYLD65DDsbL4Rw8mMWXjcmHFjuYgb7zVd8",
  "key47": "3Fe1JSrv4xaSWjHxuCqyEaECmtSiH4L88M2DAAS8ARV1ERBUTeA9U5svJWWU5XPb8p6pDZ4j6uCdBXxeFTLQg35K",
  "key48": "5dtgAV7vV2rRrUXM9dsGnhCK5FkS8ArTAfDZ9sd35neA9Ds3W52uFcj8FoHw95kb6JGBBBgCd7jE74AVdmyNxSak",
  "key49": "4fY3VZHFXfDGxRT2UiC4PcuEYEmtPPEbS1nxVhKSi5XVTFikSp57Ve7R4XAXEMYtWnvmjZHHb8uQyMgpF23WYXyc"
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
