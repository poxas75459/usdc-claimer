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
    "2Rduk4mYaJyYJUQuCP6QEUBKPvUxsvVZsCxAi4p6qGheKsMyYX8qwaz1RJPbQSpbDxMVjEMTRqe9tNhUZo5tvDxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53zX9MosCJtcfxRNLvmoSMmnfEDH9fMDjfn27Zaw78fSiJvtxB6Zyqbr4THuZugubENHN3WGM6tGG1Whcg97TiPf",
  "key1": "61WEScouS82vtgPKhwMaxYa8gdkR4s9uRdUGNT5DJ4igee3Fe55Y9WTCHetyuZcSKYS2MPbGki36R7WFZhEJGnMy",
  "key2": "SybB2xK7sqTbt68wbpjW7FGGTrouHmkrNcjra3NMYotUggEftWuXjCEfF1ZgC6vZsdCoRVfTHu94bbHvrNQom2i",
  "key3": "3d91DKDJenemTwgwfDLNhaXgHtW28Bp9Gj9TaabbMQasTtsXjBLBtk6NEv1AX8sBTKmYXdkuCknNNVoTmubRKMz9",
  "key4": "5HhFdvtXm5KBBkCfTG4JQRoorMNhspvS1hgGT3ZbJG9Zk512g23S5aNFJzbcZY9bNRq3feev2FwugFdLtVMKMkBU",
  "key5": "35GZAuQT85eMbBenyscwcQhu2ULxJgyyBSEm85YY8cc4S1EGGeG2kTWKoaxyLJVQK29iZoafXrpuH6ReAJQ8JLM7",
  "key6": "5yv4cVEzomdoGCg5hYaiv69J3gz1Kx71hycFMSSSLcmpD9i4TYfB5PtFMcRLFxva3beiykxxtPTzKzQii4XJtK5A",
  "key7": "2uvgi8XuYK3svnMvmFHdNWgPyS81KrtjyqPuRKLEvEZn69bQCG7iKiDi6RDb36nejcwyqMhNRZQ7sg1aqByXuYeR",
  "key8": "3nMQYc9Gpj6QQ4fv26PK1S1yMx4MmXMfvwLCSzpHkZGyfTjyweAspqXHZHaWjnaNx1xsDFHUhQFvuRXHjia9W7Y7",
  "key9": "37gFkd8vNmPN4gzf3FbTidX6Vf3622dvgcySSveCsBVybRi31961Mx6hBWCHJTSPaTa7RFQCxJep9AGeLtVvUvgN",
  "key10": "35Pbg1H5KacVNqUUb2fEpWqJG9516Gnm5UDrYt2U7Xwmjq6QJNgYpAHxZoKFBFWThjr1xspTMNqHEnSoMZ1PmxJH",
  "key11": "abtAcRWxESJzredFQeiBQdtFAVbJ9urDFb1k1Z2ZhPpahj8BHgYcqnhUs7tnAMCa2JVjxYJkAaNi6DNPdLC1DFH",
  "key12": "rK3qgmGbHA4rH1u12RjCj7TAg7qBjq8q7scTvNXpULqZ6QZJZm9FJUgWuhq9NyWTxTu37zTvHsFxohat5REX53V",
  "key13": "61G862ZLX8ZyjByEiiKNXs1LzLAwkvpBjX1YTs6Y2G9RenVLb7eW2aWpHNWhS535QGVqfydeM9GWuyPi2s3Wk8sC",
  "key14": "25YBRoXmgKKdX3fbHTG43H1S18ABgBb4eoWPXwirmskSLjVGtY3i8UEEAXAzN8e1nerDbxZiHbzQEZJvh3i9c21i",
  "key15": "5Aqam5Ks6hkALkR49YjMy91Xz7HyurQ8AVQjuMzep1SbzfxFzwexAgXBsYqiyd2CBs4nrtYZNxXuuAPtFAZLsBVn",
  "key16": "4ugSVyxmNkDDLJL5e5CdQZr8WY33qBSs2Z5fiBnoubQeMmpLwnbvD9MjPrtTBkgTnP7u6RP2BbAWPtBUYbpJ4WWU",
  "key17": "ZvR6rWUt4cRq6Ek1KCrDYJyqkgcMMQiQfoJJ67Qj262ioWwynx2NUthP7TyohZg3YhJ7VtD29gZXZh3GufB3qpK",
  "key18": "4uHRapQY4S9yiLk6rTjM9kcxDLgFtZM7xa1LY2TCtALCMu24pM3MiwrGb2vgSE1XfYUQuoREJsSj18kZzD61Q7qG",
  "key19": "28pXcRdDAHuvnBnYLGMSYFb5xipBZcmMzUsKkmv5czfcVoWgY4AyqGuzdXFFt7jk5RPFhGkYjYy8GiLeqtzEMr9f",
  "key20": "2p1xWPJEHmBhDwFb2G8GGY7Z9zp5KzS1TWiDqcRd85TqMyhS5bcoZBHvRfgn654hfVVJfHK8t1DoV6cpZJBMoSeN",
  "key21": "4WdNXbHyjrwZ3cjNNJet5Lfe8hzTyJbhSAFXuuVCzyg4pMtrnqyQuV3U7rG4iMgctymKrDjipsWAjh7wPJRuMhAf",
  "key22": "5dd63Mxb4QUEd3ExEdbB2xrXBRQbcvhd5E5gRvxJuYavvJBWLr8sqmvqQrdWDscgMDfafw34zGFdvgGfUMNJQEBS",
  "key23": "RPxQ4RouGzoCEcy9cGJZ8GutQrTo5N7oW5F8Uk1t34TMPh8391SXFoCUFKKDGYpVZMutciNbJPWkWvfWSnjagtG",
  "key24": "31jWcQk63kwYDGf6n2vubu3mGf2d51hi2R1xc96TWDhkcrotGmgTPTvStm31MEeUaukhWsUinGqkzUuAddMcS5bz",
  "key25": "28mxMctoR587E7k59cy4KkiNjcDZGUYxMuQ8UvYWTV3VLQ8TVxs42QLDKbf4YcafHDB6AHsbUmr2XUvNDfExHB2J",
  "key26": "4unJSLWMZ6LftWaXfRCZjWrwgThQk51K94HWxajaJPGaocJWytuBcpfpLVFRhBvUa3ipVEHk1NyFBRSmuujXhs8B",
  "key27": "2bboYfhRrxW2mvu9wCwcL9vW6gAnNJ3njBxVizGWuq5wxg5u3m2nZBkauhLDCEJkBSzpJcG2r6WMfDHkgqYYk2hE",
  "key28": "bbccNxnoEfhxSrWbW5HYsv7qbUALwQ6L1fJVXmKwx22FDXRYtyXWkRdE8uvbRmaeuz555FQpgvKu1PN1BSjNGa4",
  "key29": "mhq82NmfR6yUggBqzpxhCQL5d2bNotfbD3k2MM3C2HRShANpFwG1JME4HnMsftmEw5Eq3YDo1HJuo1Gx1G9oKrj",
  "key30": "5jgHYiTqpviZJYDYvNSAzU9g6cJYAeDGJda2XXkhV16RbKFUQwVRLWG5J27F2tYcbjhrQX6CJhz7ANhroSyTS82Z",
  "key31": "2ypzvJtMVruK85WXtuUUeBBeY5PkJ8jmX5S91njDjbsEfmh8Maf1ZJi7z9T86LDqsuJQnNe9dsgqB7FaCkbgpre",
  "key32": "64wdLxzJKVEhYKyRL7Efo2AnxAtRNpYGnTNecMFVWW1ZB1hCmQfhY3xguxNYkKpmSDx6ibyvJZ2EuJquv61VPC13",
  "key33": "22j2VjKfnLmxVfboc3BvJf3z53nt1h4DeXMUPVw5uWDnDQZ4FqosscWzwCzXXcBaXCvrAM1qk8vBBu2WJEbYhrM9",
  "key34": "5ioQ7WfiDi18fGPD4vuh5sQzAmxgK4RVkbScd8PkMqzXWzzZkqDbaQn8ggWh2un67gCaa8nDs3KbgMF5WJfkLQrt",
  "key35": "2T83DtA8HRfGesbkVT3RVDgBrKnaquYHDhjFbDhUozjKxr6deCSifp5aA2HUmgMWRndtuiTef2SK7wbWbcE8sayM",
  "key36": "gCbktUBUedTZP4spHeUCK5jSEhnvvNNiB52916Y18uugQTfKSXixP9iyyFmE1Gr3Jaqjmi7XWAPPHGx6bGDPP4c",
  "key37": "2wheWB4jj9HXsGWHA8XQXhRf2z3gt8qTteeXv4RpdGvCtMWZdoB7rtNW5ke7WeEd73hrm4LsBTzGGoXZaWf2ncbJ",
  "key38": "2RRVDtYU7Unt9M7jvMJUrJW57aEQtZDNUCEEdaFp9rqscNa1hxtB8XhKqvoK4MDwn1TXBkqyQXA37PFMYi9X4Co",
  "key39": "5L9yhuniaymyoMFSpF3mB3VYnyKYP69XuFXQFXTmA77Q8sansJMea1g2SmPpbzRxxEMjJ1oZrdbL9zEq5iaipmwG",
  "key40": "3br7sfNoLUiNzzeytxPWvDYuHNCRM8LBce6QZhpf4NmsWTGWLFV68aoSrx4zobeuKduBH5xZoM11UbFDSiXzKu3Z",
  "key41": "2i9jaBGagndXTHAR3ieyz5YdzW6fMadZhNCADnikrpnMgB2Y8wuD4edezdQ8t6zoWobPxi2VPbQCkuphfpiznwNy"
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
