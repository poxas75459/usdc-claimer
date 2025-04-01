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
    "4paCaaJ4Lv6GxSABVN7JSXioQdBBu3UFxWGkL3STHcs9sWPDpEtxwrDud6hjSgcV6JN29nvmsLbt1KCV68HCD352"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J7f8xBNJ1zFD2zcHqn7twXVM25PY5ZQxLDJNf4ynZ6TyWoGZ9npphPiv1hNT7PosfQRAp1iNZvE1wwCDCYP8C94",
  "key1": "2eweyGZyg3TXkVRL5rNak65bF3CGj79pFGYsozHffRm1CntaMEJj3p8sRkqenWnLqG1V3aBQ3YRG6zbqn3jE3W3F",
  "key2": "5Q1j5ockjy42jJ5k5NPjGARhi2QdqJZLeGbr4tKfgMocAjPVgEDdyEvnnBiZirrzDaPrWpN8vzdwTDVNSMPvPW1t",
  "key3": "2p8mhvxw6DWpfbRHpmRbZtg7XbchWJrUCeKKMct8MxycHrewfUhyxtp5baiizTxMR69wKnS7mnndHx99NgfTUCdA",
  "key4": "4nJLnoAGnioU3yoYNXTTbaodYoyNnAB8zhcPsifcvBoDsRNNSg16MkJwygjC673YQ5LzPyyaaPD5XMDp6YnZoPQn",
  "key5": "3WdTPfqKKKNe2Ct8rkKXhn5bzu7kcZSpryoPkNX35UqxoPjUYxpbUY1FfzqW8ZbLMnhkFgibyZS66BHGsomYGNSL",
  "key6": "2YmXVoUUQHYKBdE14fGwWknAL4S3opVBLFrwY7GmHCob9vqB2JxbDzFRn3W6QoL2aH3nPK753DZG2UAsE6SqzUAW",
  "key7": "5ijQZuXyiQep2MQaXbGnMt3acqTFN2ARvhHjimjfZF4cTCsj2jhuBXLByDtH8FWpgW16mPdH6Ui6o7JuBnTtXMDB",
  "key8": "3Cr2rjzT87DpNhhGDkLWSpfJB11dciUHT9BFY5CzzmAdCTUCyhASxkPnKrcCUeUxGu2oDnC7XXT7m4dr3LvKagxb",
  "key9": "3mP3g6NLkTm9WyjnsVahuaeFgXaGchQN8cyXN4WHZRVKB6oVVKJB8AShekXYBoTcbbb8CC11fwzkMW9tNbRTB3Pb",
  "key10": "4yaDa6t4thdL5p3cE6Pd98RGEqLzWaLnHpcN4iLnfKKgAzzqosFhC6PTXaGQhE6PHM8cMf4Yx6MTU7gHmtyNXGTT",
  "key11": "5Ba3JePqjTpzG1qf47vxKpWxEGcH36eTVAzBfYVJ6PyWdKQvb7dfsnGbbVv6mbskASiZQ351QcjMCSBph7diNbv5",
  "key12": "2mYpcRUzaXPuHBUFh9B2JvfJHVE6Paazm4ehu2RGEVAEJh6eHr5GtobwF8v7LcrfGRt7peeQtYefbtNUPWfRxdqN",
  "key13": "WD9bn799P5nnQNiriqG5fjAUaVfWWgFLWmjbcQwYJDmc6qhJGGn4LFf99sKEAHhmhBdFodhUtRnWhAUXM6gXWro",
  "key14": "eVWonS6H5NYDd6KuSrJ1hZgcMoeTNvzgU3bXbNKDpTk7iYt2gsgXD5RDZgNA7SP6pphitgqmr6kifTpssAP8NSe",
  "key15": "5tkTn9ULngLnNhNvb9UXCc4X1vKiFUxWdBzspiTbsrbVwWP6B7xxHoinjpbEGitAH8UAf6UU5aVrbMaZJkDu4d3N",
  "key16": "4ByErgKExdip5mTk9K4ANHxP8K1BUe8EAuykLnGqL7N1WUYHoQ5Y6yEaP6C9JH8qPaoF2T8ENFEcVcuzcQ2rZHsZ",
  "key17": "5NXvJjCTbfCrNdaPqqgtXCp6Vaajk9w5D1iG3TGQq2psArXo9pKyrHF3DeC4jchCkyTvudkQE43RdYqqZPBwHeWA",
  "key18": "4oGDRgg3kGqV1FxZeuYrC7svshYD669uhK7LsEuS2JCk1N59rS4ByEukFVsSyC6ES7TrSLLSw4DFWMh8twcZjDg6",
  "key19": "RqJ2fT8o4r2QHp2gtuAn9mQbyXp6c6Jmk56ZUXCxFJRSJ4g1r4kUmkPNxkoF558Fa33mraUJEK8J9vsampRG53N",
  "key20": "3TbkZzmuHKrzhE8mpyvNJ8NQRZVETrHngRufbjG3QfeME71gfHVppsVXDX5GwDYuJyuc8xuZQaE1DfFaRGMJTrZ6",
  "key21": "2XSnc857Wp5Qa1Mwy9E6p1kUJ9okqZwxpKqjQUkG14KkWHUXWv7ybwRmorBCTd99KGs8Z2wAPjBY7ZmSadhE5mZw",
  "key22": "4NFJ82F682guHHqhbm8ozsPh8QkEwZPH9gYKjkobws6627asKrQ9uBtUDnd5tgUkXE9ip8aw3ugbJGXSjNbWS82o",
  "key23": "2rrrwkzQXwt9oTAtLp1efCEQpWBm576vdM8cbvtxvk1zpGXowDJ9qim5L2xkoTHSpRH11C7Y8tswpMDjSK3ca5bX",
  "key24": "4DX1V9dYe2k6BMJopYV5ZAKyKsbjCJSLcfBytgQc1VCvFc52SV4jCP5U1NduoxBAr8LTpc6NvN89kBP2YiZNdWTA",
  "key25": "3E1UUFVNFwwn9fxDsG73QByGxSPrFibQMjohMNkA71Azvj6kdwrGarjRgngtcfvwCmNWzQ8sQJvs3ZxTMVt1vAEM",
  "key26": "4Q9Sq4qwkFCYCmUtREDcmE7UVFDCmCv3xCFM3TbsDuJaFtjinZJ7qh16RJhF5HSo74bxpGjxZwcGhiFRciJPij3X",
  "key27": "5sv4vJdvz4n9FRFZj5Lq9MZJtSppAW6zRevJMu6u8cgjm3knDtEre7RQeKcK1m1EPnGTfogsF1cRzzA2yYFbjKhb",
  "key28": "2kcTm2UQAoHHL5hBTnaXKZ5LQLmparHk1V8M4Hh8E9V8dV2u2sk71hFdx3N1hekY4zPkPPb8jRYWYBHD2fk9SCGA",
  "key29": "2qmCkbvb6RFHaMANtjZ5AVbgiuoTMVctPpM3CNftQbqyBHZqT4oucHTWDCB44H1KNRasFxjvVR2fyHv473nnEM5B",
  "key30": "euJA6bDj2Lj3ZoYSpke4tVYEwHXrFU2oGbBKZxnysuixyeaR1GvLB2o67Ytcfa1bUq5u5zhYoLmKgCNPmytgvoz",
  "key31": "5AfCkkUdjKEA8wAPobAXBUZK6Fz2Mk6L99RRpB6XnXutr7zbjd7cMkzEtvQTtNuaSxNe56z2ybRDRgv37ubuxzBs",
  "key32": "3nTsAh3AzUYJWdDvqAGEbasoAt9HAPk3EspAuDysXUusVMuxt62t16Tb32u1bVW5HiYrbQc1abmHggNLFAqm41iJ",
  "key33": "RYx6iuuWrZUaL8Knzkpsw6ub6LufVJutaFT3cS8EBuZUWbVJncAuEAcZauPcw67sgpih4vUugmjpyB8Q8phZ745",
  "key34": "3RUg9R8zFb1vA8uMDByp9BpJDUj13iMcpsStu4VkcTJFm6ZBcoUZdVqF6AnK1PoFnPnSH3o7b5F3erXxdriss6s4",
  "key35": "4nLc5a2rsGujJPPAehGxjxWmUyNUBsGXezGMNrvPy9ndeGevepRYUinJ3gg3ygPa2mkh8nCdCFoAvdtzpGbVh4nX",
  "key36": "mUDmahr6B7hpfN9YkfwNVeorgW1z2fzyTKZ4RtWELJQE1HZAzBu6mNbgwZBvEJwUR5t1yPGStDV6D2icaEqMKG5",
  "key37": "9RKTKFuuDkFmSmZA8v7TKaq2Jp7qAiSxikZUCWRmdK7RD2qMTqS8uZYyXjZAFWxkjJ5QP6A4gfxuSo5ojnk2m7e",
  "key38": "35paP5mReDUQudG2wi6aTmyqVaMTwE93CMVeNZHd9dxDexoHHmtYoCzQYE7u5pNXdTyJ3ecB2xxcNhzyqEjjLz7P",
  "key39": "4UcRy4xXbQeRNJ6pAhh3LfjCLd7vbugXjoDGwEU6HUuten5hAXBzhFWAWEC5ecfBM2QGZ2nbrKZP9edHMTvCXBDo",
  "key40": "574NWjCLLSWN3exAN6tqqYuYbKYmXXFUS3DQRwXGPLhu8oN1PPMy97C18ZYbBnbdWyi5CExnD3tJM4Z8SQ9MRmS6",
  "key41": "5oUvieEsuE6gGSdv5P31VuaWxBzuewuY1bHhY3b61enA5qKy2KQGTchtpQrRNpVYn9hDVvYXEmCfwTCH7G4Gfgtq",
  "key42": "5xaSbQxpuJrznrYrM53TJ834YjQHdVYR4XS2NNuG8PajqNCj8c5BXzNRbfPhRHrPBMtRZmnxxkAiECUiDPmpjcfG",
  "key43": "2GYPoPRDWxG6GGj8XY2f8N1w1hs47oATHrxYuM2PcUzNze9QJYVZnmEAXsoCUHpxgjQ1nVDm5iMM1mXRRvEctbpH",
  "key44": "2J2km25y94TzvdszsUBSmYmMKcAVHkJTV8N7xWopWnUVbLcaAo6Qhem9NygTmy1VwSQrDyZbLeZZtZ85TaXW81oq",
  "key45": "4Frsm83zovcP6oQg3YWVofD5fgB1J2pNFJMQEjGxoouWQF6Niam96x3pNUZx5rJCZgroAzQYUiT3yqYYjPqhTsu7",
  "key46": "xujZzg5kJfucQPVViihrF8LNmzjENmEC1NV6sXf72Zavw6mRpXgyMtVDWsWCp1NVyxwvhRJTPSz6Jit1b1VsnBr"
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
