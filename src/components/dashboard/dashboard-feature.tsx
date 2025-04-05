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
    "3qudrtg1K8KKj3z7Vy5QTdXSKPk9rNH7HH4xDRPmn1qehPgQyydBPPcqFzedubJ1KTjgB6CQs75Mtf4TrQeuqGoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "smCQWPuRzz3nbeifnuVtTdK9xxv7Zc96wREg9uS2kFxoZrRijBU1KHRLgwtzYR5BxeHh9g4aDG9MGhPinNJ3rZ6",
  "key1": "5cdKYrAVr3n1vqUR4VjU8tDxhbhwcjAZh1i1Hs6T1WACujgf3uWrxCq1hsZDrpMUgy8Pb5NSEPxVGm1Ue4D8TLpm",
  "key2": "3cwk5mrVQ1jNn2aV2LTjXaA5ppyE2pk5VvDgSyduweod2sdvMCyebVxU6obbaBrjvNBkKCvrVy7ViUrjfXv9sYsL",
  "key3": "3zYtmBgx2KyMnVTjeeQBRdCv1Z3rC92pRYexb1MaBmbVrXftHAE4454X8Uynea5nD4JDLfbDCLghhhK9BoRDrJQ9",
  "key4": "3fEtWWgzACkGXxxtc5AxioqGfmC4qCXqhEoegbxzZeV57XwTVeugMFHB8QmHzatNph4aSAZMf4bBLFpoLVsjuWwB",
  "key5": "2B3HFKdPaxpXaqzM68UUCjuHJ5g3Dy2LB5KU4thC9bp6Ci6s3y2Q2LtP7Trje8Eyje4DjcnidLh5TkJMDqhQ3xVu",
  "key6": "2PoyPf82SK7hbSSG5XgbMgpxiJ1cAer6kmH8e32ksRb8xTkeheeMxw2Agngx25Ws7jdEEn48Jz6jt7v2fpPBaVyX",
  "key7": "3VQsrSRqr5v4CDVkz7Dbn3V7k88gzP5gGeV8oCoqPQpZv2kKv4Jo6QWCBQxc9XsLAGWPDkbuNE3foc7fESXVMBir",
  "key8": "2Qv7pyJqduN9JvPvYQFYMSma5afWva5u3wfuP7iefhF9vLxaQ3FkETYdDLaKvMunGEqPL6fitAgZaP1AjkhPJj1e",
  "key9": "36YeRbfBuuv8zibNg7Q1tkVdYZRX9uTGZApazTsRM2vRVtMLhXfSP3ZzgkGQRuuNPj2S2D4FRcUGF2yhapY6eSYv",
  "key10": "5hW6nXNdMZyS4qZGrSima2wRytQndGuM8bExkY6LudXApFG15tS8uFN3jhhjneTp8aPB27vyBkPmPYLLDggaLJzM",
  "key11": "3JtWRjS3i1NVMeTdbjz97qVSTrPpziXVdFvyydRXUQ3oQojya9fpHQb2quZAA9csuw1kZkYjXLwAXgdwpT5tRkh2",
  "key12": "3gkRPauagVJmNuuKMz1BuQAN7KH27Qav4yHeaaU2aD5orpg3hV8umxzWZe9ckpJMc4vA5ZTuLxaZ9qv1s28qJNKk",
  "key13": "5FVGF66nw68mQx1UJQTo6QJENaxzFji8WybFcGnTf9SkT5BKuLtmiVdPTCQSvoDiFbzYDXqwPhbGAuLAjVF1qXhQ",
  "key14": "3dHSEv48or3zkkBWDRrecD33RJRXsh23Moa2WLhzeb9b8tGHzVLUgQfYhad4idDfZSWCKyRgW4nQi9eavatKiazR",
  "key15": "46smNm23LnDU4YHtwxikE5NVEJaVUyytmcpFN73wq4BbKyrFqupGAJFuiohpZFZvzwNDv22iZXT9wHaViaDn4VTq",
  "key16": "Hnk9BH7V2U8DqeV36ub4VLvDUxV7KEb7QZikdP6rPmH4RtWAotg66mvgoCgwGywCMY9oGHPqh6Zcac7PDWhabjX",
  "key17": "4RVkRHnML6ZR3oZJeWisMt6iHbinWmyFqPV8y8CZQiJmAx17f2AwXCAYmHRao4X3V2GWna5KK5ZSh1Sx3qB9iqob",
  "key18": "4sWUVwGa58ZLz3vxY3QLWRoQEWQ9kAFwDm6gGpMYCcnu5stMLhCa8fEqGAdwsuvhVqmAKnWSRDRLmgxx1vaYF5Si",
  "key19": "5tXSuee6pTyZWxNatkjgop3z1HdiR4pavVhvCySQGXVK3J4rLjHetJX4CMGsMyxE3sXH2Gcqv1kH2dcWjtZayXDc",
  "key20": "3dbg7TuVVAMFYHLJ3PfhouE8kmxJShgejMazdUfVjJxZQJiXFqBfCAqGq53tRqif7gk27B2Z2W45wM9BeHJRVhtv",
  "key21": "5BzsX6ym6uBZhRUgKyFFcMYJ6iPVcmqhW6PBZzAvdK8MvtftBKKm2jDm3cpjLdYFWzxPQm98ZxFpWXXphRTsvtx2",
  "key22": "3wyiHdKc65rAynNVDtWYk9wmpkb8MkWxwo5boVgjjuB6BFWxPdUy6e8mtv3FfcbbcBKwJxu9MZAG2SvXhmZWGNMY",
  "key23": "NJCtEwQwZQdVk5w3g8BfougGipnv3D9D2SjchYH6zs9mF7JFqCXYh3DawmavEDxo4UYMfybACaMoNENssUqnvZM",
  "key24": "2aMuCsRfpfuZaKrtBaQvRhz6FiZWDMWjq9n3CUKjTFhW4fjujc2MfUgK9Mg9q4AXuQSHjjri6cL47uSJPLYL1dYS",
  "key25": "2bEGBp8o3knibM5DGQqaVieUmLnT11CPfnEWyAvqFTNMaMm1FdGwGUSPQuAhMUNR49b7kQifRgTQgPKofyiEYe6Q",
  "key26": "7Z5f8k3D4v3MXW6S9DEuP9MsDeGwDyVoUtLHLLtTWMgUBFp3swLvhYY7etQt1efzxnqNumfUs7rkyWG8yuRv9xG",
  "key27": "EeSrRNUWGBizCwWGdDW9GsMSfXgdVZgBiF8qf4aZ9859mjHUMhAByvspFuKKmXYEXByp1koy4fu9QVxE5wyxsQh",
  "key28": "3ap21GmBkCPQMq99BzGAejMxaXx6ZyDE2ngaD9czDEUHzSp2xgbdkJ7qhytQ5Zt83uAUaCDj9aXwRvisL2Ghznk",
  "key29": "36rR6fyPY78wdxsMFD3wCmKSV9YFRq4w8zwuEZFRpgxZM1ymV92N2bJATSK7Cmohuq93ZeCoCp3jA41CRdeSQC49",
  "key30": "2RzmAYbNmPkg5JsHaV8nmvx6mDVY4eCP8ZdRaXrffD6JJryhp34Do9fMPposJSQjUaWvJd2SXAc2TSyPq4zoAstH",
  "key31": "5hs8PtLrNUFjoDGvpKHs7Rf7soNi6eNxE9GaZq95cSedXZwuixGowLos5fHhg2Xux2GL8cfUrjb6ExTNML8nxZcZ",
  "key32": "B4V3WEcdT1o4Bc1rVES1zsiZsnfPQ89STRbGdJRvDy9GJkQQW2HyfaGNcQUbixf74YnBCXMNrmRQhyHpxWxq6tL",
  "key33": "57d1DHipo3ouPtVLF6sMs2zJc7Svk2NRz7xxuSu2sRxV6xJjqEkf6E2rYM1zu422b4mT7vyEfDRwn9n5PV7AepKE",
  "key34": "4Qfmj1NTvSEeA1FMaUJBrm5PdXzyMASXj5RKukwg6gTChg1dQkp8dQiHEjikehXJJ6RQiGpbVMBq9SaUj5b8mwdN",
  "key35": "4miqGsWgtYFqViFsrsUsA1xYbPUJHRaaRWnPxEQZT9sKBjwv2by1WpLgXFiHSYmyntBAuCfsmmZcigRRthQjgZkz",
  "key36": "4eyHUeRJXFRzC4dmiBsHJTzkaApFsxtTZyXD8baFYeBT6SFCvBAsE2Cii5zjTcnT8Q9q4wV8q6PaiJGxyy9ee72j",
  "key37": "4bExkHT2KbbUd5pfMWFGGMcbWrmyafx1PCkZNL7ZMpQY3gtDHTYFn61hywSWwJNmbSdnpYABTbqGM4UAWuTC4K2U",
  "key38": "3a2T4EDuCScyTNzAmCgHR6GmzLgGvXNZERcffSpFRSPVdDqyNzp3PJrrjWkYMg6kox4nayj4bdN2wkkQNgxNtYew",
  "key39": "4cwMRgCgpPrarr3sftmWdTbhT9KcYxhpDpDrqK8VLCK4FCfCXzc5KZgwowy755ynY3wgAugGLVmtuYmyq9pfVigC",
  "key40": "5gHyKCZush53JCa4tcDj2p3NhRnqnbu2k17XUWncy5sbjQcxD4jqdKujUjLBsMf1vAuXJVhMy1xwVSJH3h3HHtfY",
  "key41": "25tnTGZ63Hcd7Wur4jTQ6EGFsVCSoTGBzdAovZkHs8ENqMAhoFmkf7myFE4FKgimZmsUNMsCaieQK2cQuCVznrs7",
  "key42": "2FKK5pJDgSEBJcrbuxsGx2kxRqkfzFZjc2UrhhTJPRzPALtg53a4PS4b7Zk58DbTH1wmZAi4xkhzg4i76jJMNfKE",
  "key43": "jt6FjcmPpME5QYLwu7gTS9WRxD2qbxcN1xjiKNcEgMgjcFiJxHbj6MVs43Cx9gCb3qiNNZVRPwSfVT16wJcqLgp",
  "key44": "29dGw5NEbXSZXVeYDQxBMVL8aj23LNy7shrqnsSbLXM9guWq79p2U8o4KHbZK4rjuMWkvWCCc98NWx52A8ba7FEn",
  "key45": "6GFKyUuXLdP3LgdBLL6jaPnsikKR5yYPa8hG5VLoQCHQ6AkxHAFxEwSePYARrrdSA72t6VsTgnqV7vnW3oYQHLZ"
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
