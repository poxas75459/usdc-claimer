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
    "hxkthv2XrLXUP67Mo4GETha8XiPzaRYCsDp5BfBLRS8NhxgPb94hyqMTCJwsyNrAFUG8GakrYaK6rirRRNxfHAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ScL9C4wt1ZGGJL4RK6FNdTtiNkDaPYDn847zzPfLbEohniTWkJRdUDfhjeuwnBcLGP3mbdxJHTQ57FQwaGXAA6F",
  "key1": "3frt3ReMx1EJgmbYcZdjrEcMuCbPwZ2CBwTjLRUwik6j65Hh3fYHAnDjkwhnKvCQPtoDXSZMVSxff8rbAV4RQwwi",
  "key2": "5Un536ABPQ9rgy8VL2DnVfrPmuoXr82gS6pMioKdroCEPymanhrH7w71Mq6aVpEJi2zS7bnYe5r3MN2HVHfVDP2s",
  "key3": "39SHv6phzp8Qp9i36cphE2LAKWGEt7NLvdMroxHz9AoMxuB4onhWZB3z7VrccRGtCHHw8NQn96Tt4tovZmCHCNBU",
  "key4": "3hGSYaaUFh43eFYFdg8NPigy8ypA32T1GtzxcaEu3v1MvEmQrZPJPJxsNwiGdMNVhqtQkb1S4yHgbt5yGy739oMr",
  "key5": "27n722Rk4VmWtUrys6QTk3bU8sUcM6VyXAwWcn28h3Nd2KsDsWgNnSShK9q7fxfFTJwqJVDzK81LePCScN5832W1",
  "key6": "4Xp5ETiCX7K3mnEBbbyMBywrGJwsfcLvA5PCS7GjbhdNgVYZWbH87U1sT8GUNPPzQmmo1yp9BGwK5gPiWUkuuEhg",
  "key7": "1mCpjvmRCCq4bwnX65tHQE5MoY8sWWdTpwJgVKALErad2UtE7gs6Eh4VveWZf6AGMESxtuutFHjYXvWRLwF95u7",
  "key8": "2M2QmDnkfn55YFcJUL3629cb5HfqywXhNKGbYf4hodm27EiEpxj8i2LZqfMfGGcsNkXKbWGpAw22YxmuGx4uuZ8k",
  "key9": "JBKZLEhuLcgoAfnTi1EcYoHZsK7iSCxfT9AVd3kB2aEgUncRnppH3ZKaMqbPBNXZ4cik7TaoRbN1XYqv662g64b",
  "key10": "4tZNeUBJbuF416KDN3vhjNkoekKym8axPVB7RvGCiAqXwznFTbSdeKL4Hv3GCRqeRkjUGQZskwjswpWjv5WHjGRh",
  "key11": "4o6Nb9xEBpzc4jN3f93v1TR87hMtDzMpECU9MPaojrcofeKP9i76Q8v63MsFykovPcnX5zo5CKhkca5svKyCSqjV",
  "key12": "58EUAFP2r4ryocexGL5PUyYG7vg99vTFhKA6eVwKPSsDEowckMSh5rAbo9m1omg98v9bXLvFeqLAPTKYppWUzJwt",
  "key13": "4mf5uJeB3vtwm1X9NQ8QA8g6DAEy55HhMmWspHULgtsVwUeF98bzqJjcVMuq43o7jG5RcEjBJ31U3JA6DajmKjG5",
  "key14": "6pCDB2ovpSa6xTwJtcPkq7QZe1TkEyqTuo4dU8M5w8fPEVMDvxL6vgazSVzTeb1yDxYqkbbACgVgKtd3oNG2kTg",
  "key15": "27HQea95k4vcnmnh58fvgn5n8EF2YkeTxQbCyH51FmavGXx5JmhXyRiSaEZbHk7FCsTnkxh5fy9pBm3Qrs52ouF9",
  "key16": "4vzYKjg4MHWUguzyRZ2TCuUXu2fGS7AMmGbhfdYN9gGdFHwYUHvZJxqQ87FNDP5eP3EUsYV4pDYQNqVKU8tppgTi",
  "key17": "2jRhuM1nLqbCRBa45dmzQVyu8JhYXNRnkB9dFF1zLbRUgyqJYDB3ahJhgbWc3JwTcuf5w4aJhFSgUiNokWsCvzA",
  "key18": "28SMM3HfzgQcg6mgAv6NeT5u7WMUx3EFeXS6S7TQggRLTmHiBDu7FsxjrveEaWGoyrova29Q5apRxuzSAD1e9jB8",
  "key19": "48QZfULwRNRprMRTXVG6v1B5yFVXm6xXG5KzRroRi6yjWy35mktB7kJ1RuinBVGQhk4rZ178PrMbmQsmBpchFT3G",
  "key20": "4LDSDAm5bjgWQeq4CHPNXngoztU7RA2Y6JpgVnKZkTj9yYrkrtwqVFWY5qT7pKAhByTaKUopdMq92tireQyrH1y3",
  "key21": "5HpwKgM6TkLuaVRShhUTQCXvcw5XVjY4czcfkTEmqru7QdhGreGfxVzVHRfRBGkTkwNQn1PR2rRFyqFaJAK84rLH",
  "key22": "5Amst51DKxxAWqjcM9TiH94dmrnK2zN2cqFDmMcUghtFjRDMRjrohwhp6wQV5zYfZUb9pv6vADLd3z1UR26bEbc4",
  "key23": "3vjR561rrtco4K8TGhUjEdR5Jh75B9zk6xJLFvqZJ2pXTJ1GQYm355Ve8h8yZnQHHWV9py6wzGPVTxLPn4yB2Ytx",
  "key24": "38iKFKgy2mpxMn6jHYKZPPqkFJVsVfDW9gLeKjchMZZ4pNtnCALYupp1fQnYNFVHrEJQeVATy4B17bH3N2gBJNYw",
  "key25": "4tir9vJsWB2VV3WLADTAFREbJCa9rVtBXzx1RQpqj1S86EPaURXmBjD2eL5ae8RCXspY3hfXmm1vvW7NYjfL151o",
  "key26": "3JRvaiHSW9xmzbVFZPd5RrijyKMqo6zNBcx9ymhE2FNnVwk1y28kFmopoxYQXNSm2rqAy6GiPzTffXGAkDtauYGj",
  "key27": "4rcDqxBtvvUGryRLPJ1t4RtKo4LHJZSm4b49DhxmzyUEALknmDCXVDDwZV8LZWp9x7TuQJ4bYxfMXHpQjEZcUFUU",
  "key28": "5LrH9GsvDXLP7YQRjRgqxD5qCMdSYnayTUBd6Seu9vQmXcaqWEK6VALtuF6hSaXroffxENYaQR1zzbDu9yJFD4pe",
  "key29": "63C9ht7K5zyPP8RfZXXcYJ6w8Gtoun9dpyVH4acEEdCa7KbQH8r8LFAukowuSX8vUbeNbP35uV2bqpRudQpWxEFU",
  "key30": "5qR3wU2WYgZMAkpvT2PJng6Vgvt4ECFumT76sDXznfTVE6ky2MDx7Q7HikKsRswZB3JF51roHvNscqaXBBr6tjkg",
  "key31": "QN981gwW8So5W3bzFGXGL47kn5w7Q7Ewi9nrtZgNtpvtycmfBSzzCtrwQYkAPNhn9EFixvdrFURVzdQ5QZ6Ctji",
  "key32": "5GvY5DaKyZi3X8ARjMtk8WnP3UbujUpX9hDdShg3s1SoG9gAYZ9RtvT6FQFMK3XdAKaVtjnD2Gky1rhB6g4VU8hv",
  "key33": "5jbtVJ7smZVDZCScQAkYXKYfTyqsMsSGJ88wDGae642TwKaEcjZVUrX11xgPcs1YhmsEXimZCMB5NWPyY7FtR5u4",
  "key34": "N7zW8g1xGK8xGqcvzVKgjDWxdVavWxarHchJJZ5XbsjiVrRRmWToVxLVgTSx4GYvwC1iVDGbqwdAw14wXwPhtFn",
  "key35": "2hiCCUhCfhPB9Ctpuy1jxLjKCLQ82KrBurm9xahRFoxvzsjPwxK8rQUCKbAD6JVrNiq6kHmwdeX4ioYC8yyq5giy",
  "key36": "3xvhKGnW4XeCdQYYvsouZZt1XvvAhaAXkDrhLsTbVZYWQHokqEpwk8H96zpQ14D2VHtpoYoriwXmRDEmx68xuvkV",
  "key37": "63J5HYv4Nq3BybTrteqjtdN4H6saydhxpt2LhudBJdTkJgBsbqzYUoC51aQxJGEmf8eYrVVKJdn8LywQTFwuWmgX",
  "key38": "5wsMSC9sZ8NN8SfR37FrW362gTwxEcNwYwkhXTUdnpkUFWKEuPvgx8WohccEEgJZvyrzRxg5KfWXg3Sw4JasQSzS",
  "key39": "4CQcwpeTnaoWqY2yiAdWqyubcwDyCVB3ETbDrdwKxqB6cg8fsZWK16btsKEwkgzuA5P9o5LZtCR1ULaZsafhNw5C",
  "key40": "3qzuT4jJELbrq8h7N4rNrPwK3EZBQFFcCUqxFR5po6cAfu1HdVpAed1VEwjgMLkFVgg9aEizZF9TtWoQTgeSnSRk",
  "key41": "2dzSSpNWgsbUNyQpM351gomebzfpL7jiaCanqJnVLbuVotdqpJtKTDitMDnhpNoF5cbempm9UhrCw37SUGmxvyZs",
  "key42": "BJ1QXZTZC3wUtAEdh6xtVL4EQmm5o27BDQxjeRLEY9CUuTK69cDuC9F7wyMb3f73its4GrxsJxittV2YF3cwWuq",
  "key43": "Y5zX5s7YnEroTbopZc3QEUgZRTHZh8k3ZPDaJaNpV8oXaTb6EuTMKsKkwcN4DzLmnJaxN69RPTi28GHwppCqP9F",
  "key44": "2E75g6w4EPLuzKB9nQRPWMP5fXyH8yJaB8kuSbJ5QqSJcFHZ1RiKFe7uRYtte4PcuuD5mJEtguRPintPDu6yi9pF",
  "key45": "gbpQDdBh6fadUkGqueTk4YvPXemkgh1fEpCTUcj79jFgippMoWbxydsLRJ4NidLetGaQYoN34r2vaSRzHXTu28o"
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
