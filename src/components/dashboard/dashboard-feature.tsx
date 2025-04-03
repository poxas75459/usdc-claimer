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
    "5jKvR9J38EUeBQqGULPEGC6NMM4JK5xUwDD62Z8dnaGp81u6xfvnWbaZ6GMbNhnLMJVBh84FDWMrmq46Mfo39xAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQC57dKdhz4yjsPw7mBLdd3dftGNy1YFJNZeDCwRhbsRsMHhpx5VNwgu1ezZFudu92AHV62TuGva2R65tkbLGpt",
  "key1": "25RcxRpHSxxQBFedfDVwoEGFUU5v9khLbHQxsi3jZoHvFgGNSQ7z3gugwAYDrtTj47oZFKDyLZuB7Zci4oivs1A2",
  "key2": "3gNXGZQzSKW8cTiKFeFsqbZgspDKW39kmdYkZbQxjtFUTV29zQdegQrdLueduUtpsSem3zJQTXikkiJePDBrBnER",
  "key3": "3owzYaAS3wYjqfvpp1EBgDYySwwJDccazTrmsxwGYgXNT4ML8XsySbFWdcn9S7LzUYtXS5eivT4i5ZHFHwSwoxFi",
  "key4": "Gp8cU2FgDpkz5pyehYW7f74CnSf8WGamrsR4dfGxDeVpz9A4JtW7akmKpgmK8YJSXaFHzbNK1PZyfbVxMcPrH5j",
  "key5": "5fmQg7CCH5fbxsA6DqjbUeFM317qnJPZ1M2wcPeHFSTRsmLrEnbJT76MweDca5DNnk773CdRxRyTzUPfALtfEvCJ",
  "key6": "431D2pSF3a59jH7eAbwGaqx7ryew4GEcegueqpmii4Hmq8XiQVTaHFYHjA1jcGbTjYv8kXqegm5EgaQvNZeLMkZQ",
  "key7": "4z4VsL1mUQj2Mkg853GyKPYtwjRH9EkJ4g4jGRJzTBmdaQ8Kad7uGJevHx4cWFuJFFFXYSNnc1s5y6nuP21cSjZz",
  "key8": "5Mm3ySCGhgCTidzy1jU8Wx4ncLDmdyhQZk8Pndjqa5z85s4WKroRbnJR1N6mdPYCRvEtftMNE3MpNBt3DiXkno5X",
  "key9": "3LqHYFzLtzoopSTJ8VZPqE52S7SFVpBP8Tbf1wcapPwVUuLH3n2C1YWcGBSNYfvQ3nfneFnXR4tbWLmxWppyCFqg",
  "key10": "w7h9En3EwsCmpHHYmPgBXtDWRF2YPRD1LaqzKbo83RaM6LEhgraPvvKkoA81ayB3d7K1T9dEFveA8gcnjViZ7RA",
  "key11": "457Maz9Wo5eYVg4qapehTrSobcTLVWW5CzAbCMwXEZFqq466MQw6qmduWic3qSmQNxPYuG5RjDn1zZSUTnoGGohA",
  "key12": "45sFG9sX4Q9eKhSrFVLNdJEHQcGgXEMNTBfdXkt3CskV3JrGycxT4PU667npr1mnXWTp3mcE7vDf5Z2K9H9bw3Gr",
  "key13": "2A4oS9CQ4A7zk1bhNM9evRVGHa6e1n7H3rBhNcJtu5yjhxgkey1ZgRBeBxw2cwyhKtBp4264WYkpdV2msr9BsEqF",
  "key14": "m4bViEC3Ze4DKGQiZEEBgfmBFEhtEV5tX1vVyVP4LJyFUq7V7xcDpiL6yHYeSvVEdBMLLmR4bLssPfVfFw7XGk8",
  "key15": "5utp3KFARWCQzfCsrdAi9zHz7BR69fnXWRtPyYxGQkSg5GHvzV2tuSGup22v25FDbKBaJ8v8gAeC2r1JZ6ejv9PE",
  "key16": "5oxqaouW8K5in3g9jNPWC7uGUrz1vWfQMkGpnvsdTqveDpjwXaXz5hdd5MGvWWqGwwcocJkpr2mbTJdzRLoii1NF",
  "key17": "xk1p84gayAzvYozjxBJpnwsE7JDVBsL9EU1A8XSiJUv8HqBwCKvK52dDeTtVAbjWVDyosQmaYx312uZ5RNEmvZf",
  "key18": "4S884enWCjYU56wNfmsamP1m9Voq8gwqytc5MEe3mNu5A3aZgo7QrzewBhr2cNsA9DxGcuJYyj7pusAyu9NiQCsh",
  "key19": "38wmCbHDPw6exM5QWwwdAgWJSciGBGmw1XVf1CnNyNQcQHHDLgXTHq1JgTsdXrHDd9kuYFdJftxEMns9AaVqtTqS",
  "key20": "2k9r9G2dmo4ztBpifWMY3w4Fc35tJjomST5UzLU5bhWbrKx1yRJiFWtBSiZdh2jE3EAghgv99CXySeqfztjybRwJ",
  "key21": "M6tnmvZ9erJEB7bHRGQJQqPnBucdy6j45jjbFcgmsCQMj4fkhnNvntd5S6zZQCRHwkrtmMU6tFgiBgtLjZd67Jc",
  "key22": "2NZ6MBDxPsnUXv33eJf8BbBWDdq7x8sCL3dGDNXi8T8LHd8fW2uzqA8ZwXWis6gUhFhcpoNohHVJ4vcUAzkJ7TMT",
  "key23": "3BspBZa7oiddSgZ8sguC7dBY7cTYNFaiyUQjQjC7ehuTY7nn99JHaDgZDLCocJBYe6wzycz5876ZG6B4DwLR7R8f",
  "key24": "3BzTQrzrMbQwX3Ti1VPjmHoDvjTgWekNAr9ziG6SVMc2e34tcJDxfrGJexepdJkjQxXwyt2RHejGUppHgP5x9Fye",
  "key25": "3QTXeH7aj55hB5LrVPmudMMidcy3eyjW9bB67qRte8bmjJ4akKA7JmohTrHjtwiMuXaRFyH3K7CwbPArG4c6BnYc",
  "key26": "4ifd3hYiPhgQgM9Cr3cdGRbJSffVR934v2Cis56oqNFjq1houf1UBGsvRJ4L5v3vRtv2LUgYc8pnLaajLnGftTH",
  "key27": "HDcxNbpm9eYeXEJLzFQhRaGm6uqgve9NxvaYn6tEBFRqHUrxA4eQvVNGXbqUnZ9kwTpkVAC1T7gihE9cWbKcYHA",
  "key28": "2a13tThsz5sKeDU7nkiy3icCXTGjQ7N4s2cJxCuoUSZSzvumQquazRokVN4kWom1isDe9SfjKp4asdPdewKaLR7Q",
  "key29": "4yNvKr1kKP3yih34DC3pJGQn9yVXuDGCjqEibUgmXpdtWNwLbUs4CLy1rV4xE4BhiHUytWrs5UAP2u31y3mXRe8a",
  "key30": "2ALF8zpUy1zhH5fe9E3P9DAF3LZYPvBkNy4qdm7b8b9Wqoch3Njgw4uEF7jfPoGgQbYwJVras78BqtyTV6buGykr",
  "key31": "5WLjvRMmqkcUELCab4335of8p7i13EFuisG5o3uAG8Z2kZn2SpjFwmEwf8YDZykjVX8bJYK3994AgzTir2AgeEEz",
  "key32": "3emWEVMjYvFcmwd5qg8cQBZ4KMqx8FwHe2LnaSvDALsMpDC8tm2RjRQpUXwU4nptCdn5e2uUzv3AKeguPxLWA3d9",
  "key33": "5CJJqXSZ2qQNBm7JpDg942suSvTh24uoVjMpn1jayQNXoufoZPZxdxRXmnQsxo3dpsofiBE9RNJd9nuGEzmKEGaj",
  "key34": "JUdN2ye38cECrTpM1tYmjvK43GZDTDPq6Yt7eTgZSWj8b4131UwaDx7miaPJ6vPqrWdsPo55G8gLULHe8zgWBCz",
  "key35": "4JCCvrjUq5DxhcmmkkSz4LPRcwGanCkGSSafTHHPbCvB4o3RBBYU5h71bZ2aZXkg2mSCKv4b9mjnsr6wAr26ddZf",
  "key36": "3VrxTcrURbmGNd2u4kfQJEUTUm1cVXX6maJrgHR2jBXLWsKSxrED47iRMNhBqRDqyBA2xJuDiunXHBdWG7DWkdGo",
  "key37": "23tnmQHJWoegjMa7QLUNnQHAXMhqf8JEoZPbbUuiUkE6pxesoAinnB83UYsKLbD8y9BsxHGYAfZT5ywwy5mgfpyw",
  "key38": "s94W8Lj8LrbKoHUqxoYSmg7L6AAVJNPkYB31pZHzNBPmHVtemaAfuSkFjgXg6RA12jWmXdSSJX69smEpDG7BStH",
  "key39": "4EiyxRLquRY2ou1ax5YbPV64zdyE2PV59JR84yaDmmSRBoqkBVAWpWjQtxcb1HcgTnExXsP7fZjXvxoyqdG3rgFP",
  "key40": "ngwMzkGLCGGeZNmt64wQdnK3znVTeCc7ZrSxCUr71NPRXCL1frJG5paP8mwBQRWX4hsijg58b2DMhYujJVPymCp"
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
