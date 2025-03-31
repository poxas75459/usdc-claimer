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
    "1cKWhHQq4bkWjwA8A2zE5h8UAmTAsSntBSDt1KueFSCCk3r4VUtJ8qzH5aNqBZMVo9YnTsTb37ob5YYcUvjZfN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QZTJeb7xAjLHnxXYyKAa4dR8dzwe3AotL8ydF6bwXGyhY9mDMcXLKWYzofL8d5W7xygBvoBS7nFkfwmgvSxvm2W",
  "key1": "4yVomBKtHgwkvDWeYazXPchEEEfpziZVihjspGkf3S9sFEyLmnGBFB6E4qWGNeQbBdiKaxDVZQZq1nd4a4yK279s",
  "key2": "2ecCix4s5gBit2Ropz7BdcDUu23KPzYvbzzocUHPXSiLGiAwMos5DiDi9oHQif92mLn9uyaYePpMk99DmCazfh8",
  "key3": "3mWzDNAxtiLbgzR3f46wfJGALSmDXLGKQWFKUwbbUrf8uKtuTZQdB5MnGVTyoRi7jnZGfdVuAsJhua7TxJv7DPFp",
  "key4": "4jhGrBXtBBoS8pBrwVcZgxUtg6kxWukWRzMzwjJgnjdWmGpJ55XvnVcRpuLjboKGRQpnn9ooQffGLnGAUjpc7rML",
  "key5": "3mB4gjhyL6XmCfMPtXDdStWnxrj7aqJBr37Vx2sahbfkz5XMA9WCFN5LxHXnnzcmndoARDLe9oRWHAHSTK8oXYVg",
  "key6": "G54doR2G1EMRDSFpuqanpgN7owtGiLzP2SGuLbzPxnxMSZknovi8ZHpxDNQ5rRynrK5QWm9avxukWYeiA8GEJMR",
  "key7": "4fVvUVGyZv4MTZoPYR6Kz8QwSRW7awuTrHfK1ubqNAweGJPyVSV9kG9jGQfUbWXdLPdxshtzRfympMAE5oB4RizG",
  "key8": "3yfmtr6awFba9GMAEPpZ9xtuQgnFwKXPnTT6rZAQZc6z7XjeBNGH6XzyPL6TjZ9dVmtpyeAV7pqiKNdoKddGPv7U",
  "key9": "4gTsCgnF8Q8g7diNzarn9rVhCLmJQctjMuGNJXAYpngDqqH9iTXZq9eR53RVehZTma2vmFrWKqMXLB1bYnJzYBfn",
  "key10": "2aJN21rsqAANHYunr49ie1VLyU4xeLUN5chuR4m5oateVtpyWgffBc2C5sCZKGAfchbeS172wdjWb5qeVzNZB9NZ",
  "key11": "4TAVyRdZF2mctPUKa3sLuM7TJGRnTA6U7MkrTkRrZ7LFv6Zf9hpBqAc8k9e1XNvGRLzBt7BhKeTHMy4ahor7LWgi",
  "key12": "3H7jfJYTkhmrSJKS9gky9qRMrhcHRG1ptVe2j1CWaK4trFz2zMMM1WutQPgs3c8p2sNLPP3bDwj2vCT99AorLuhU",
  "key13": "5hnBo63xvgPL2cFZQtkcmb51TttxsDY9DP6urVHzCKeNZAUT4fe8oHiJQ5J8qADZ8qTJTVaEv8mk3XZ4jkx8FTTK",
  "key14": "sLFDqQLX3SFBq3YHsmo9ABR6Dr518w3xdi7DRec7Vkym4QPJv5kdTmKZ4mMXrNtf8n9tZKPZ3Mche7vzWnhdJro",
  "key15": "5BgH67WiApemFJvsfY8Q7y5zZvBCubsCqntvZEBB7W8fFe95k82YfwkYW3YkxBobVSg5YR8LuZQbHAjFtG6yk3qj",
  "key16": "39YdsferUPqaMCdnPE4JY8DKFaUrVzuB4WZCetw6VQ7DgJsDctHmmMSjs6YfyyeR69SFcQPcxLbHvVBEx87NrCMH",
  "key17": "4QMShBNCaeZbB9Cvr6hdADyP3gHhpzaB4pwCKcha5g7VioZyLzWdrVh11SGBjkeTptrL6kGqf7onHinaaQa9LBLJ",
  "key18": "2pDd5yG7Hjs89H32EZQjVbgVW5n8mNw8xRDse4UnMXWDv9eVTLAF7tU7JPaUNT88e6p1HR7iWKQyTBgUT5jbxpL3",
  "key19": "2iXzoaSHrWdFmKXHC3nng51Qgzzv14pcfZNzGSRUyNwxRupyDgejHL2hfcCmTHzCCHT3VX6EtC6FpTyRDt8c7i4J",
  "key20": "4DiR7qVe7pmknw8ZvoxPhiDEHo2kmgemccWWVeThYM6x7XtWDvPFpR7ucKER2kHZHLoUPT3mRzpFrg4BNV1RLio5",
  "key21": "3EwLpuR8LV3eJ2suKw83TqXoWQ8wC8g9t4STR9mN9aieHkdRPu2Ai5KZeLB1LKoyU3URFGJq2zA44WvHdzoGzxH9",
  "key22": "2f5usGpXarNaNDz7eVPQvvFnaNxMmrdpTXMC6qcGeDaDNhVrGazRVf5tdoHoAUAFcS37xekNUfB2qn4Ty8ZaqN2Q",
  "key23": "5mX7n2b8EFUdf2TDzH1GgkTRDjX19f5cReyybczu8L6dA5mJ2UGujbZjM1dGrRACfCqcQWxDPy6RnMBrhXGmxGu6",
  "key24": "57k4p1AhJgHCYGDgsfMF5ZktxZxeTLX9j3AC3UbH2Q5v7X25dp3mgKrosiXMC6BrR3N6TLLiG7sUAL5iVZhG7sG4",
  "key25": "fN68VcRR5iRujLs2NaB2SFMnLu5rchtg491wWpY31bQAVnmADDNnuzp6U78K48GrFCeQypHaeBBP16zLBNxBzBQ",
  "key26": "5K8C4wXUUMhsU2Qqmrhtde44gftk37wbbcSzsetUhtqkZCPAAknND9b2Evcppi3eb6FW85zdeYrPhWCYVdryyRTc",
  "key27": "3FZxmUAmXn7yBFYnDHG9wpJTv9YTHX89YrK8e85tdTkvgnL2jasPRth6bWb5FfPbsDmKf9e16k3EkFxkKVa3xSNT",
  "key28": "65yoAeLsijkie6nke8NGp8Sus3iAHPgns2zipVf11iRbsBa53VU134xnx7SFjARmvpzJSDKE9y89zSRJaCYqq8uc",
  "key29": "5YmBwqdcBnKhsSnssBorMLCmRcUgD6rr97hyKdPBW7RLg5E4WZVk8vkJNWn8fSZvw7vyZYGJ9qRSi2WA6ih69qr",
  "key30": "4d8MUUac6H5rb9CkfmyCScreLcAamgAzqKe8iJifQTSnuBMQc6QspohWnTgDK6TE9Hk16jMBXFiwtNyTBYmFFFz5",
  "key31": "33Xe2dH2WfJ5opPkxmCqoDRuJzb9TJRJZpbfi11LAPXwppz3sw3Mj5LykQEU8mRu8NvYKYrdWjAKsgDeZ98uvWNC",
  "key32": "5DzM9uchuFB2zYuqrPaBsSPw3nEF7NcVZ19gtgHU34M38nMCTrNasgy3CRSSRHkJC2zZ1KeLCnJikx67wCCAgwsF",
  "key33": "3zPkihuPt21hM4xEFwCA3yyacjBf1eqhHQVDPV4pUiWyRVswqjm73ttn72NS9vRCrgUW5ByRpBQYejwmF5Gwe6ir",
  "key34": "5LXM7QPdrGHwqGjSkapHCV2WfdJ4fwHPoNXJG2fy1X3ECjt5vSnzMXwKR863L84vCTLyGEkLg16veKBVqA4suNjD",
  "key35": "2NjQGcmVCpoEYjEu5MUC5ez7x8fS57h456crKWvepEmhEUgNxmGxP7EizTqf2rK2afB5vHctaX6NYk52rwuzLiNe",
  "key36": "3MdEYVuzgjYQJa9x4WfvwB9kVn8VSDVyNpXt2SzZdq7dP75qXTz6ZFY42FDaxBgo1ahUyERhkcqsUUD4iZJincdf",
  "key37": "5oSSgawjwbpzkhw7ezW444mndNbr4f4efquFBqgKy4kYJQ18xuXbAe53kV87oTMrjzEvmCgtYbmH9Kq3KBH6GXBG",
  "key38": "2SfrhFBerBKUEy6Sfy8wEzX27UrhV158YenvSE9vscy1fyr3bm996GpmpGYEkJ3bt2ZyDXGWhixQLeqPhTV4Rheh",
  "key39": "2SZvuJLN6LGLNkYgHe6v3gpY9sFgNftSRmYzm6X3kSR4JoonA1iaeCs6KS6nc8TvvitpXTptpqoC5P6L2CjAx7gm",
  "key40": "5DsVe8L9hhP6ugn6zqMKkEpith9dSWLj1SB5CtQh2MMdRTmreK1LAsUicZwbBVuvs3GEUY1LeonRF7cQs7ye3JAY",
  "key41": "3NujNGWEYEPUN2MPUB9rpk15B6UR8ARFkUputM6uFgogzNECXxoZZn5K8VoowViVsudn58wrTAonEBMH7DYRQNiS",
  "key42": "2HmF5hoAD7abLHGuYKFcLFxr2hvnipheuKpK4rTPHn5bfcpiVYJPczRNjP8r8UyMSspWc33cuogpTKzfn7JJFgjx",
  "key43": "5e7DGnM8dAgnwzgbgNiBvkqxUBnb5z7RDSc2BtaurKnh5AvN32x59vQKgiNhS21B7jWdJzn4oQ5XQD3ip3914ECi",
  "key44": "5WRtVvpa3s37jpVjRJtCKmWezfNNwBPWeMBH5KA3QuMyU1TQowCJpFjFMSBYmFuGbWd5ihdx33tFKvPmvmvnTRcY"
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
