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
    "441BzskHYPNuPdbgvudDHhZsjFnSfbckXbog3zcrhnp8PyFjKd9ZCdCe7tPStD2FJQ3s16RkzcJDaEM5hb97heqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53tjHdgTrfJ9TMySYzsD924pZC48YovsJssir4PSpeRmWm2yCrxYQxSD7sqgUwsRxotYSB5cqE6y8JVaBiZfS7SB",
  "key1": "2cZooQhZ4fdQkfTt2Nh6eKTkWjacE9vxaAYQAmrG5EgdjxHTbLm7oDF8C1ed3zdkuPmfS6CqyRVnrPjczdnusjV5",
  "key2": "4VRvfQvThvsZunGgNfRKvnkCHtqhahoVqfznjGbsMApcoX12pseoEWASbif12rTeJ8KTcWFR7eBUMkogmg6ZgoZs",
  "key3": "m8oDDV29ttZvqqh2mL3jJnLgcGfZzC3VTaXC24kCGevD1EpmxkoCk1SjMwW1jBd47KXtoRud8Q6gbAZt7jw4L7N",
  "key4": "2ULVGRXYNLwQ4Jn6awT2CWMdhdDzWxtzDsorSzbQQJhHeESkZ2wkcETf2neyNu2faq7g7t6Kkxir8qriWbv4qSN5",
  "key5": "4PkSLkcK2REbGFW3yJdgtjJWvgueYdqhB1vbnVG8cHPHkoV9fm5STYg9AY6eBXii4vvDg8dxgoueEmr1wWi4cnEZ",
  "key6": "429LduHqVhNaDeRoQjx7d2YmsHE1URTKD9CEXwepJHqovBqPgKRWEMert22NFBk58kAubx7CCdr24fGBs2R6fMR6",
  "key7": "2Xi3tJg6Vrpfhw6B2WHAdLm3W76H5k1TExBk8BubYQHbaWSerdDVtJXma7tyKcfD2KGnnY3DigydroMjQsbM1g9f",
  "key8": "3cmnSiYc8BFM8GSZbX6igmXyrzbSSGyYW8quwJdefcTxebgKj2VEKuito2NKRqWeTHvmxGFsrhPHfDDGzLdLEisE",
  "key9": "2kbw92Zevd4uZZ9ysqBmN3vSSBMPr6QxakrWbg9b7GRp1JbAfymK4wekZCecNXGfPCXFMxkAKruDjFU63ZumBEQ6",
  "key10": "35R8NsFKLo9hDz1oMo8dUtKFngAdxYsjnn8WTT8GwK94rRRbxGhKLimtawsZ869wQntC77dDoF6w7auePVC3qFpY",
  "key11": "W3NvXZbkNy8jZMUG7MdDQnQrxD8Tqaio5tjgayiN7Fc7faw1m2pg9bHrEDeTa7Tj4cfX8LXCa4d9fbaMRCVffZZ",
  "key12": "4AMMjhuqcecHZQGaVMwKZ6d1MGFM5A3VexncDrH9YGCZFpm6jdmnGXApnUWKdD5WEDYT3ZiboLfLBCLuTEGgnthu",
  "key13": "5aMUeJfqocGNZGrwFyQww9eRGFe239qS1PbzDffCdSXXRExUQBewFroajTZMnNNWcX2nSskmMu3Z9ARcZqrJMwQZ",
  "key14": "gQZcRjydWHp2Ra8cptknT7jAap3WzVfWYYkfZV4a2yinQtyLSRRYr712EK4M96HSJAn9XCCFaJvb8oywCsNJwB6",
  "key15": "aXVvMgbinNnSKgFwDnFu7w1AW7uYzVa4SXJErszYTUQGNT8ma5JrDLXqDiHHvu8j6A29QyhthN575RxqZBEzsmt",
  "key16": "4eoG2rc298fZE8f9wfDod8tJCdmaGVk2oGcXBG4qzFzYY1u5oC8EwepmQUMcmmRJyiosjXn7ZLRU79vrGDeh7BHp",
  "key17": "VRgp3hWz8pMmQNusexjn7PQwqDUQzNYPE5dvZDxPgfLfoqBnb4j3wzYmHBqAx31wyHJzGxnnuKomWWuYer8SBvx",
  "key18": "EqCbLhjYRi3cjSg6jrkBkvBtAJWPc96oyEqFWiNgs1f3kjrQKB5NyzxKvxTbf4DuwQTCWH5CGJzg2Lg1fWXfjXy",
  "key19": "2eVzhytdg2HjdxWmjHjbUrCR9Y7Kt8iEcP9JKNL6G1Rjj2scqqrHkeKMP7UGoN2a8fvbs1YrMw9FMWscFiXur4AB",
  "key20": "2QxuKqN1uPZbDZGUrSAuqXHtwvKNAAxxzxvLHtvVNdMR1xnKHdPcUWqVCPmeHWfhGVyEg2ZpWVroDW8uH7WeqG4k",
  "key21": "QED8NAn3ZrmJTkiWdsYxLj7PyZXktLz4bJtnzKvHMv2uFFJhmQ6Jsx6bTcquBwMDdqGSRCsqA7k2gXPLjTos29b",
  "key22": "4e5ziJ26VXrk3GSjwQqWrW7Rxz4gGGuUvChMv6dyfV2r6h8r3vWjHB4g8fHRBBKb4JcFSLiFEG3N2bV4LpBDkYxs",
  "key23": "4nwRTDAYFGP3hbwZTSbmJmSqg679nh6GKg2oPLyAaP9uFLQVjTLmGR63W7ob5CMDbDBBrruP1zTWo3mPGuN4vyPw",
  "key24": "hUM6J1QiCB4oQR7KdgjZRkeB7cjeYbbhxJVAAHkhriig2XzqkSYzeA4KE8dLoSFxgKDJ7G2UXBH38uYT1sVYAKM",
  "key25": "4TCeofWWM7A5q6cV4EFsBnxnnjaaMZQd9tJLE42TBFMgKpjeH8n1fm9HGjmzkFTJwssS4KAEzwinbFPtdzUWRitd",
  "key26": "TF86b5reeByHZzmT32mt7s9RJnNg7hmHDdTYNa7xbNgbnT5r4mkUH5PzSQXvBBiQzWkLAVb6AEA9exz6WSv8TM9",
  "key27": "5hjkzZfwdMfXeNfAPWhumu5oYLaUcXYqyt2GHetDX3ZV2m9aNYyn5eT3KuqebQPYQdSF4RPpLsGCMBSs6DzJ4Jp5",
  "key28": "Wx1FtPAc8q2zjqmqN9pG2QyAvtrTnunRXTnrkyipRZWc6wSurZXyEYBp8MCyUinBPFJZQy33jRTX86yegkNmyRb",
  "key29": "53MQB4QDL3TKrTGLcHxpTJUgd4M6CVNtFzk93NpP2fVB4iH9UBcR9SAgL2MhDPQ8dXkqcPXmzetKmWeCTfCjNFYW",
  "key30": "TcQB2ZfDdhugbs1ZkVHAKmFxoddLLUwL9QzvELgvBqoCBdndVxdUYeqepBdTVrHQe52bkMaD8htVjf8kXT2q8wS",
  "key31": "2Ab7v4j8iSAdJZQUabdxr1Nk3SZeSsRme8xxdLfipBf1BwUsBUrxFw6oHieyAWfxYL5VxJthWfcBNyQV9kcFrnsX",
  "key32": "3ufdXHQdbWuxMmik7qnCU22arAfsb7GBrH3LnpkeoLZYgZFzPKw13tx4tnmyAKA93M5aTbhpjyc4LYFwgkeMk4Gz",
  "key33": "5vznWyozcv8b6DMdv6LFXdiA7J3v65VyEucoH8VP56cogLgAXifYTfSiySpjRJSps1ocmuAoXogtw1nxsDMywSTL",
  "key34": "2QQHqGqQSpFSmmuMb3rLoPRBHgKUXzfZAWQCw6d49XXNH7kPGjEuhGCqeqZ71HTwPRxECGHfK6UenZPhRR837qiC",
  "key35": "3GzV3VNd7dv99a8f5EFK5gUEFUCrUB7vRr9oDhTagNimiwRGLpBimf27hcCG6SvbYxMstxRMRSyi7eitbZnz1D8h",
  "key36": "3p2fq12dyUS6hz7dYHjM3D52BaZht2PQJYmnRYSQNKutJtpNVknM6t9GgFpzqwc3BZxvKarPTF2i7WFWhSR87w31",
  "key37": "4Jh5wdDF6sHiHA4o9crJgJufunrnJYD7WMwi4JzqKWgUJXt3wkXjcTxQmn6DWyz6ouj3tWbqVXBvP1BC3R2eN3WH"
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
