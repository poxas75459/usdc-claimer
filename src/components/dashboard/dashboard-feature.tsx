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
    "4rH5ks9aqRrJVTCZwbXgzkod5qQnmUuZZCVTasJoaL3RST55fEgrVUDxKhw7kmiFw4tHeM9EiGtGeMGrBePTW21m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tcLFz6mNfgKn3kU2RnXYV65bemL6gzUQ8jrjwHLQZVJ82LthkLtWDSPp1iS6oA9mvhciUdMv9Gan7eHKkC8az9g",
  "key1": "4u7gsM9vu6TW5zeFs3HMS5R44smECmHDGbxnMMZtSgxWzdfAakj7WBZaGuy77SR6JQsK3y4shyqQbq2ojTrgdqVv",
  "key2": "5uZbho11afxYXWjcG3U7sp8ghrLEenDAPvvDmD6SBd5m8N4oTXzv77dgyaz3h1Es5tDeecLq2AhgoUzvh7bGPXeQ",
  "key3": "fc9jnqAr6Es6wU4d1gid2wNKHnVPYEkvH4drQgDu17H5Qg7TjEde5xuxVYHLfR19tvcK6wHNRPyMWhEAYNQPTQ3",
  "key4": "4hkrMMa91ENm627g7VxWx6x55UmQLnibKhpmaP2aje3mdGF6N8rXBGMsedLpXMe92cPExYr99fAufo4mbhBaAkko",
  "key5": "5oSrGyqwQcW7hdmW6eCwLEAzs2FoWHgAEJZNNFRcUrwb6QQhvY3WDNCY7G8UiPTEyQiD2gCT2yMGzYRuE1nQr3yL",
  "key6": "3BBsBWEPUpnzoRBWNEHfL9BYchHgrkcSRHJCrLWnZVaERdHhgyN7SDJfGvPgrkcvhM8VCEA2V1e5A8pUj5vtSqbY",
  "key7": "27LNZPpGi9fa86X6UTGQG1p7oxFS7eYcVM6U16ab47edJ4vGDaLBMJdhXeZ27fPecp6RGb6CjYejVDuRQbF7v6Sq",
  "key8": "2bKkx2XsUnqY9kxJex8PKqmURd94MVSj65pzRPNLidhXQUeUnvMQYszUDiTWbVdnGautzeGgs7rUTkB7okVM8Cb9",
  "key9": "3GCFqNJNEPGikPiHePpB7aeykcN5TmKhaxwPZt5vhXydehmCwXaPZ2tWKg54sxA8jBxwUtFM5Eq7tYSoLmoWFSKX",
  "key10": "21B7BUETMXqCjJma9LMTa8QE3ShNXc2J5KpChsmZbbRfPE3kLUUUCqMuokNfCTG9aDDVAEojduX6sWu43Gf7tU8Y",
  "key11": "3ruAZ6QvF8gET7bB6ckSH75oTcscmEQA6kyazDFCm5pCgdWVjetAXS1tKyQGGJEJKESWHVySDtVK68D3Pgm4biCa",
  "key12": "Hu7p5hYGyCwKSrGs6Gpz7H2R89pVP966fCQnhUHpHGZci37Dd83cYbhNR36UdGzchMNmnoNdmojLdc116gsG5Rf",
  "key13": "2Z3VchofD9kutX66hQa3K3Farr5QYHCkA6y2EmbDpK11auWSgr5QueebCuYzfV2JiziniDwSio8ArAFpiXqrnmYp",
  "key14": "7FtPwdpzM4TyvbphmMMHAAYyrSQoL37zVDBve4edd48fWUcR2u64GpvpQ2bqm3bgZiYoeLK9jhvpKBK7TPqCsJJ",
  "key15": "5L7F8UtjjnedFp7dB3VJ2w7Ztra2VuZFLhCTr3hydKECsrLyeMpcRr5sfHFe6KWkUjcUJ8sT41aR8qKL9mwSnLxN",
  "key16": "2Y8dyUh7aJWiS1ewJ8queGA3qViYBjhRzJjMm1prWmGH8cK2obCvngmxsR13MsQVLAcMy57mps8yr2uXnd9wyJDr",
  "key17": "3fb1HE8dzE1TUw559D2MinGwNJQkpx4r4Z3KHwQouQmbNuw8d11fRUPkB5ZWWbjdBgtpGY4tcTc3Wky6iV4ep9V2",
  "key18": "3hx66XtWyFtYQvX22BhegqRxsjujiZSGN536gryb4ZwyrqeYMag1j3QPRaZq1CPAh8QVkT71NU5XqE8remVWiiSW",
  "key19": "2SHxVwNbqfZtnnjGaRKDLLzvoFaxC7Ggy1fimsD9yCHG3Dqm1dnzywaVJs5yauXh49khjhEs5YQu2Ruozmtiz5MT",
  "key20": "AZg7XAGeS5qpBUFXR3qMqdcSGKs6o8DJVdwyuWHnwfVvaqo3t3gsuFxd4m6ec4HqH4tqEn6ohSVnyefjjvwrVeB",
  "key21": "2enCXy5Sb3vtrjKE9v5UwFg1YqL6eXRdabPDCRbPMWjaDFZ41HNvZ255sfpVDTAu3HLDzL71XVepETrezTS1JZQ2",
  "key22": "5df7NK4SVJ4YqthB5gKjV1K3FdH542nbGfKJaiwdipaEEfawP8ZnQqkBM8pnaaoNvHBx9umRtJTYdRLHt7m8YtGy",
  "key23": "2WLtxAVRP47uBr4SoMudBZjS5ikA4tMyA49swjgx19jdSw83cAfz7zgjLuBi7d1Rvy7Nzp15654SxbQULSTtrBMq",
  "key24": "2yURq2BiyAfMXxKL2wkobTfRznS71cPZuTCmk2xAYkeN2yr5YC67HwuB7Rvo4WaLcaB7MNetEeQGp9nLi5GeZjkE",
  "key25": "2htws6a4RiikMkLTeCnoSKCH5ibAwyqmFvvttqHkLiUW7qo8csgVbuzHLsH8uii9L7uRwy5CvsTxDxfHU2zm81CJ",
  "key26": "2jpXi5vguqV4DdEM1d87aVpQ3w2ERvSeK6fdu6CvpA5qEZhbzPXvJExScbNdzUjAasddbpBH35bZMv4kgpbQzq8x",
  "key27": "3tvfAyxkKdN8HP9jLs3RAyWYohwjEobfM1HbU5ghyiZ4Wqzf85LqDbaSHj4xJgwznLKqANfe5dtdn1ayPFMpVRDg",
  "key28": "2QEA4oWXFwG2gF3tfUJEPke6SB93VNy8gwNS5h63fjH8zrpfjBZRVnZpqEDYUGb8HqjUmjsRLqzywxdDie8TKzji",
  "key29": "5Y7mdMDDKV8Ftx6D9169aP1REWjkkujyfKzq9rmVff9pYvtJVwFovRXwDM7eYH73E9cZQKUrm3vfeLTNhiafpT7D",
  "key30": "2uxPMiDJpc4gJJ17HVcRq3QqWvb8NBfGdRRx2WLHBg2pFXezyMXFxsNHwudFc3MhfMyeSTvt33g7PFQKpWQLAKFe",
  "key31": "3jeGzWFsTSJTeXcsXgobHbCGZL1bBdgEcEKppiDdHbM1p1ym7xbQoxMF39Vj92UWmo76FKvUtx4NGF5wf391K7Rd",
  "key32": "3UG1AeodckyjibkuTDQAXDbDja9es6s5wUd3ZRha51Apvm3sbZYoLNV1uu6kNAVSjSQgHDmCx5ec1yi2qJx7x5rT",
  "key33": "2LFdGGU9vYourv4qBGHXhnG3vue3poJ5ZoPaDNSpPUyKHHT68KKkXKJ2rhAhCCjDNuv7dXGzZGaz6dwMNRBEpZYT",
  "key34": "5U4P3r9sXRrShU4AdQJga1CW8e4QKF36cVPBbbhQiBE4HLZPEzjnaLnHu6gAiP6Fo16BUZgts2U1GvvCXZRrGzza",
  "key35": "Srzxh4mtNQEAxs1gMf9VriS6Ff8jXc3mCWKwmKk4PggCoQn3dLd34XUa9jCpRoDkzdRUVLeybsSV8YTpCGqdF1s"
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
