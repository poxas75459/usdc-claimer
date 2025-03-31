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
    "21yfJzsxfVFhk2QUihhKLi4APqoFxhjysgvn5FsLrU4iimbjkTZhR77uKMDebLw1MnBKSYE2kftsePmjVGKVzKqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rHCYe5Vkv5vKkAi1SzMe1VvJHKz3HbLhRoUu9gTKNxMjeMyHCSkzi4E3fdM8Jikt8MNzwfT8jTSbZ4BN14vvWfG",
  "key1": "2BQQ64azGhTLuxRV348JJjsHsAEcmB9uCXCLdwsbmTk3AaBQkT8YPWYG1ePt2wtVwEaF1hf3vvRbb4qaqTpL1cDw",
  "key2": "3oVc2jzgfAgdVy6qerUg1JV5sgxKMafdvXHpmYCz61Z3nEsxjfgHZvLnREVLLPz4UQHLK5MBAqNAM9FGpiwq9n99",
  "key3": "46d37X9miCbcBccrWLQrZ9q1Ew53x5huXMccVrV9b2CobDN9TXQMTR9SvFuty5XYXgkkSFdgvUDeoiJtHD9z11pR",
  "key4": "4qW8qrvSkAXvxvRVkkZwsR5tUTC8PcemPZVZBe5AAC1HZA6okYtUYNcHP99CMG3sFNrrrKbTcasCzCimN3zCaava",
  "key5": "3bU7nhuh5h5fVRfccNqVwF9ic6hnyAyMf8ZYvLxz3FgFKCfz1FutjbEEfVfEqqLvgzayadbqa76rAkydUDL8tTKm",
  "key6": "4FMfWRwjq8QV1sTBDsDwASPjKmBStoaidd6JrHekgT4z9J4JzRQkHvkY97GbAn75Pi7UQWzaxGS46rpNBuVnLZ7w",
  "key7": "2ajUbtammhFyth4wozfsRqb6Ub3VwdPAZXBwasSANBSTghq7rsetqRBKNZ879aWivFkRbfKhZG6bSCFkpgtatigt",
  "key8": "5YGjqHioJsKPG41VmW8LWHqgU5JbwXno5f1ofwJThd1EpHBttcykdCsx8838B4uUbU37Vw3yMiqBxJXnfgR4vpHi",
  "key9": "CPaN1PXxWaviNoGhfczLtTYFhdRze8nVMVmGYTd7ydUBnqMxqSvVV5rq7k78GBYern4ZcZFwwW2cocryQZkLuX8",
  "key10": "2S9TE3ZSAvGsdjhscnwdBaSeUbLVCmNfP3JPAbUMQvgNhoFMLnj6XtbuSTmtCtBrfZ1ijEXGLtH5EghAvwjpPzKX",
  "key11": "5U9JJbjHkTth8Dd8eE5c7EWS7tWyyTDQa1KLCuASN3FuXqLRknMFNLLpSEZcsub2PhJYdtLH7GENscUAg2WU37qJ",
  "key12": "3zEf4rybUzZrYf3Pk2H5n2qnK75YrmciwGTanjyxLxq9oMS5P4jhYwipx6Csy1dBEuzQdaXVR1BUNYoxTJty79r9",
  "key13": "2egGRnoUKC89om2okpLNx9A7tX66NfGT8okc9eoCeZpL1DbUFdJeWuYh79aEiyXZ4fcW4emJCqk2cj3DRhXZ72WS",
  "key14": "3rHdAioPZ6JG1A3yWU44ZGExfi9u8mPJgxgEPkHCNmsBDSnpGTLMTSCX3E9ojB5dGCit1SG1AqufyXiGZ9qvAmzR",
  "key15": "3aE7xtF5dvDMD529vj3qpRgCsUtgpeBKEhkGxxMR3iD35MzGHn7GzD5A9k8HrRmbywvnLrNazYBvLGjExAGKUwMz",
  "key16": "4v6vhJzjgoQ8HyG9FverKNszkJSqwAeqk1aCVJdKeaaSTPsVFFxhpzTfUbLXKhSoa3qRTnkUxyZcUS7tfafffkaW",
  "key17": "3qEBCuLD6wGS1esDoL7N62pGNF4ndugY1pywr1jFZAKfawFUoeo5AmNgQvNy1aTJMZxcV5oYzbqjN5R2ghHmVHvB",
  "key18": "2JqiSYq5RwLNcA7AKCemRY8EW1eSTR3Et6SPGtyVLSvxZ98Js4DxxQPmfLLfcRWqMmEF2H98wtKsnKYyH6Qu7Phd",
  "key19": "5GuRjMDseacvhba2p1CQYLbSdNAi5ERcU66oWGaqrqw6CicL8E7sicnqQ4jihjkAbSgshF34eDogpgevTdvrP8Cf",
  "key20": "3HeubiLMYiEoLAE78Y9cJ3m3rvmiA8FRVUvZbpoXC4985YidNT7MQGXGiQXbTrL42oa2brDpuLZJyPF52xzHDedC",
  "key21": "td6cnAun3pB9mpcmnvCSc27upE7qTebJfPaiKgD7fgEWoxSkTPDhSjt8hcZKGEgdUdocnNWQ2hNCJn6FPWXQ2mi",
  "key22": "2RwktSSKtRNR3GcJyrhnkC673NVVu5yZ3TD4TN9gDhGeoCC8LhARYdKvTuGupp1CXtQ33a93z3cCmgr84FuG5ub1",
  "key23": "48Q3jQJs3g4fWVNiRcbkpa3NK3tMCKX7qqdNzoF74s3jsLVbF4ZP9jEuiBMgB7FL2hk8JCDL9J42GL16ntrEPGtc",
  "key24": "28viwdchPzzf1wbKMSTMucttqbjC53fdeT2UeKZ81rstWFQMdVinq8fRGyL4mnTq7JmCwJrdtWxCkGCgkPzApwWY",
  "key25": "5qUL84GTozN6p6oP82rUT7oXqsi8r1X1npAWFPjrCYB1dV289LEevXgqp3eVmV9CyMDAn4yHEGFkf6cmRPBjAGf",
  "key26": "43iLiP1d3NGCHRvAA9XaUb39sQLpydFeuZxsZSQ4AFHDwdunjcoqnuL2C5n8BYpkatHvfeR2v83ZCmsncMssTHVN",
  "key27": "57CHvTrKJtwF1Tt3rugra5waeJhojxXQdAu68hz1oxVMz7wpgHscFkp2mZRzJs2Dd6hxizWNKKD7tFQoX2f4Xen2",
  "key28": "5ZhpaK9WxRLwVLmykUE6Rxeat1f8imaQWZ6pXHYhG12nxdcK1WG3yMxFPL9UyRc8XY3H1THvnfhs4rkT9gtySTTt",
  "key29": "4K1WwhLEvNgHhZ7k5M2Kd1VyAJpYLJBiVaNESjYTRyWb7Hon6EtjaEDLi97PdW79xdsuS21vLTZQ3BSC1UmtnerZ",
  "key30": "RStdpb5aGPK2kbz3BcDXyoBkFPw984NnUwwhUAa5P57YUe51mKicFcgMZXjiRoHKbqrUySeHSu4gnUGLhZWSqni",
  "key31": "419nzgprSBC6VUargmtEoaQDcTL7j6TUqGwsxcgCeJoi9Zik6EdepKVzSXBGDo8Y6rFzD62DbSaNQNddrUJpvTAQ",
  "key32": "58h96mg618jT6kjY1gQzfxzSxKWBrQ3ZdoC6oZT7u2ozaetcRbWeKgNpVGkJAvQbD7DyDwRXQScRG1bQeY4HMMWi",
  "key33": "4bCfJfPPhYfNPg8sHQ8oXinrsaQQgercjHvu8SAe1zN9ucuQUxmB8wWR3fYs4G8ZrU25JsouSNVL1X2UUyqpv3UJ",
  "key34": "5RZ6FrfPYw67pqGFbDehvEPJ798bhjFoyBrvWjWcd9he19RyPAvzJvNE59FgS3jtWAkXQUbPtawABUGEgmzYJ212",
  "key35": "qBVKowDVUn22ZmNmQj1foobxZvqUdVQcffFcjd3njsaKmb5zqH1QyqjQxd3MKbMyZBwWUQ6GLoZYJm9d45dUg91",
  "key36": "4K2LWFKTZ6kLcMSjhfFmVpnJb8FR1iBtMvQNerMBKeZDJKqHLeH5znM4brqwidSWR58ZezTMQGrBB2qLi8QZdoQg"
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
