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
    "13h64k5Qcxit9wVMojES6kQzwY1UTWBirJTxk2TTwSapw4J98np1CEa2VeQPBZzKZUZER5KGnoH5Sm86aGhuTqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uLnJPWu93Tg4JiSXeBycTV4PHpLDp713JvJ5zcom5aeWfehuTtCFGVDjCJFUBNSbFGvGJN1DJQJfbj39H97ySEG",
  "key1": "3sLtxMAYsGNMSzt6TECDjzkovD1nKAYmMm2thwtRyrpBEHWDBo76Eh4z5e51qdcrBh8bWtVAHM13Ev5HUpoRdXBu",
  "key2": "3yyBj8tJonrB5R99mwGUtFgn3hbwVWZbZEE4RmgGuLGDZuDwJ6bPrAMzBEmP9Tf9BoRR5WFELF4z3hDvLaizSkTz",
  "key3": "3LdFSL6sCwpKZFYwePwRWYKJR58hKnCjb56DNE4S7YxgjN4endhsAN2MNmAfhDdLVcitQo6Zif58RLy3uA6Q8XDR",
  "key4": "JtH4DG9imRKE9eno4UGWBW6X2GyuXaQNz5CKwQuEfyvuVGB1RhvSc3D7orNWQmp3CJTHiQsbcVyFBh3oibECwvS",
  "key5": "3ZEMCf8T41tP1tQgyDePskeJgo99D1eYwi6NkV18U27voNg5A6K6ZVcTxY7qfpPaKU8hzjgJpPdRdQiMX96tzD2f",
  "key6": "2Qp66NarKBziws3VjVNo45KTgBAnry37kHscqEA87dUAWUVagTWSCjpGeoTNQTVWC9TSot9AHejZQUkm5eex3y8r",
  "key7": "2xYy7jy3Q2nVyNntNiAfk2XsnfssHdRdZ6e6AHBbvEa3sX4djU1iYfcNm98996syJK2ZDEgucMBit1pH386euyzW",
  "key8": "4z1GJetuFpF5LFeJD6xwCwLvwSXnyyZ3DmysRXaTLATxMjzDtqaHnJYG3rBQTWgC5kd7pEqYsw2oTtD5CrGxcBSh",
  "key9": "42qouteqzgbay6gPx5nUjTZc5Cb7WYcc3GnY2jtWCC66LZpovwaBp1tLxzg9qHdGZ8RAQ81gCsLZq7n1VT6eh14D",
  "key10": "vTkEgNSjSZb4DkLhJHkZBWMLR3CZyLmFDQrypethpAU3cJXrzT4Eewv4LgVWgN8YbkhvCpDpbMFqW93xPV6P5mF",
  "key11": "GuNUQWDcjH3bPQLYse9T7LxybxA7WSoCcAh1bZLuCuihQSZAyr145DqvSfZEddBaKmjuUuor3PiRMhFSu5Xk6Q5",
  "key12": "368m5aNqWKFSj7Cou7bYJ44wzD2nkF24WUrcRQFZ2RiGZecDRMACCHC6LhaQyN8MgeEYEsmfv3XdmZiw1bWDcou",
  "key13": "424EgKhsJYJXAYMvq828zcuhDLvuBR8NrG1MbkjMvcsriCe3Ta4JxZ8Bqso1WZf7fJCteQdwEGZBKAAJ2FqtzY5w",
  "key14": "23fgxJZeNbNuJZPc4cxWQJD8NmGd5jkgJmMrwKsSbyCmB4RBDMaCR3tviBBLAcFBGXovxu8CL6GtvtUpiH7n5hR1",
  "key15": "2KQyMpoAGgq2yfe2PqwN8JGXhkeEz1gdkbvXeAuUpFZUDCF6L6LwWwWJexzyNAPE3VtDYQUvrCYfA4tPKQoJyWK",
  "key16": "52kjhDXiGDTK2TfiYaERiqTLVt33HaC5TosxMVrBcrXTELxwQNezbKFsTULFzTkmPePBFEtH6pPZrCgCbJo2DE6Q",
  "key17": "5v8RvkU2wYb6kToo59g9LMRKfeVeAFcGfLhmLE1CyzoLsHVWrGLfU8UvTj664HHV6rtzwwtquhkNve72tXmXZEMk",
  "key18": "4aebeoQDsAzjVHxTMtY75wbReuZmivwGqwbuwbctsMhpsQbMB53Zi8qbReDq9XFM4Mqt3kvpkuc6gf5imCbVC1w5",
  "key19": "4LyA6PH4UUMuTUQmP1FKsT7h56wkETVXuYXezbJEe8VvT7Eou2kcq4nNDskndkoMaVT7SMU7PUWcxzfDtkeapC2Z",
  "key20": "YrcWA7NB91Jh1pUi7PXZUYBrXHyesjUehYhiYYUNem3Ege676sUiapYkUjXmz1bB2Y5ZncZH79bNpdPzQTmazHS",
  "key21": "42ZtePFwgk1eLcaXUS5t7NgfFregGAZjNjEMSCQ4CD19eQ5ruj2VRpmbqo8VBBBTbnSvuNpmhuGrSGhyDFFdc49m",
  "key22": "3sXEE8BqNTP6eaH1r7Qu8P4mTLtmbHRhzkMgjWQBHb1jqBgpXAReBg9Eg1rs2Zf5jH8XrJ6f9hf2PZWxJwEVu6Yg",
  "key23": "4bfKEnaQ4QGiW5hx8oChSyYk9fuvv3hQr35rkhq33uuxKpuVb9a8xsVFotg2YueuVmsMm27QpJQQVK2CQ5ZnWD9K",
  "key24": "2n3JRWRTkji8EsjXaiNEA9df96QhabxFeSw77Mp7RDCF1hKzjnZ2AqC7tSsuKmuo4iUUd7nhgiKptugmQMKTzGcf",
  "key25": "5TsSkKVYcgayxCtqgxKf5o6GztSKuJoNiZ16TGSEX4gZKPssoyc5DjbgFYkeURBkyjLpTCrg14cAhG3KEJV1cSkG",
  "key26": "9jikt2pn7Av2NXDmFYofGmMW67oC8mbtzVRtnq24HHRXAyxie47sR1SsEtp9SJmYozDxbJqByRS8hUMoroRSFXY",
  "key27": "2heAdFY52F2aPNruzEWqtgbzrtDNTGaD2W27zMWoDyfuTbUwd5nxp3r3fCyU1hvgySrDMLqfkMn34UbXVUYXZY4c",
  "key28": "2zhw1PxJjMErtCP4muGPv8cu9Sk1V14Rfumkzjwx5KvqdPyzjmJCXvMNCQ8ETm8CbffCoJhwuPr2tPbLjq6dnkEH",
  "key29": "5jsBXEUSph2HFGBw7LXJzhquAJBCbSpYZkcwjkZgPm6fCWsHpYHi4Zxe1a1wyXtTKMC2mYxzzpsTrMSkcedqbSbf",
  "key30": "4F7kzfdJxQzwSZXANxpwhiv2ZrfxaChtz9YTEA7ECvWUEKg6DsuKyC2EizVF8DxqLL9suqpLTfUXnehoPiFdHB3A",
  "key31": "5dq4ZiSa51SH4F3k8HpRmDWggHpeD2YpGrENfgA7M5Y4VE9wa9LRxE49UbZN1c6cQgRWYXZgEt7FLUhgDLFVivV",
  "key32": "4A5e5hrR6iwQ9bedv8H1C1e5UV2XeL3GHUDZfYm4Ui6iGg1FJDC9cxhXYtQu44CXPhwxPWoSzd7cDgPALAK9w7bw",
  "key33": "47ztDqxojGDPJV8gB7CGbg3j6xt4yEGQ4aQqZzJKfh48qSJr8WKCmzfy9SzvPzerdfSKKd6Jcd8zZDQmxmz4q3PG",
  "key34": "2H6TXDSi3bT1ivcUDDU1Jo2R8Br2bbNErs6byPhg5wBgRgR8jF3k7zKe8eokmwG9aKJ5CenFiKXgKZsRdxt2EcPG",
  "key35": "5iRnsxo9TBP5GAjkij8RGuRSXf8SAXi7qaYM14pj38FF1GuPVHPhD5FH9XRjvp1EQMoGSZzd4mEVcceJ9i4sy8qT",
  "key36": "39Z2FzSMfRJHe1eqKZTnTQ3LCUN2Mw82PH7UpXiNCfBffziaLmHnpGD2U1i7ene4fZLK4ivwxaSnM7a44tqDw2Di",
  "key37": "3XUiHo6xfqL3VeSs6LokFqUG1GY571Vp49T4aHGQgcoGkqE2RDsKiifuNdagbMUyGjBybAS4qEipjs2PaJbnqakS",
  "key38": "3M4KdGt4HVzWpsnm95x1Y9yq5izA7g7HyCpMddbrtggdQpfqCumQMx6M5BcQvgDEHTo6nZaD6EyUAoQtJqnnxAVC",
  "key39": "2vMsdVeTLn4Xke2R3yMRHfZPQwrysk6PyyC7DosPVDusnMdJ4C6f4VmAxe1iokfBJNuS7JAEoP7LMDbQ9NWnHxuu",
  "key40": "xeCFYKcyQUgfkf3YtjjQxVNv2iBQTMFvqDHcj3DS4HGyC3jLeYTQiLPGLeG26sQz7XuXCUKgkuuwF14PjD2Q7Bk"
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
