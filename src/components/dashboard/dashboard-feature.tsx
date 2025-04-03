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
    "3jYznzPgPnMmafqdrMS1mwP3vYxyyYvgjWc8pQBs6VniHKD9MFFHtDfCL4tpJe7RpY6M6r7i7BcyCpDBeiGmN7g4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C8MRk4VYo7g8DLQ8MJtQAbHE8WHj4wM1ALgd4u3esQm8g1LTrjL6QHrRC7MCBzJ7vp7S9hSMheR1tmpUko7xxj6",
  "key1": "35jxaq3R3PfWSwWof1eBjvy4F3FbUNjSydnbcNkRP3QYEhp6yNf4JC16t1waDnKydfpkKQk8vwsxM4PzFrg4ymqt",
  "key2": "ZG1BWvbcP6EjKNegU87xwYKzdCCo15ZCg8ACX5m8SjX4qPfAeCfJqyvZ1qmJAT9nbd9ZwY2rUc5KRD9xJsi9TXa",
  "key3": "y4ibXXqJcXY4hS9Mu5FKfmyVXm8oPDgtJKenoBYLQPiTrGhu8ZrxEHa3CevCgKwrxvXFZe1aj6saZoYmmdBo3FJ",
  "key4": "2x51E3nXGno4RUxQtarezqcQnAya2QbXPyYLVXnqNL2TaJvcnxNENA9NRuwGtWrQTJC5qFPDjvrewL3SC2F1ifHh",
  "key5": "3PsU7MpDcGyBujAhtYemT7jkBRT1i1q8dR1TaXX7VjXu32ipZUHRqv3bmAEBfUeExEmbfMctjbYhp3zfBQxPjrwk",
  "key6": "3WnbXT7QdcjdrVtckR9ossaDoFy6drVJsYN3816xZB2BxW448uB7tRGX6epivWNKihL3G2cvnHfrTy75vfoof9br",
  "key7": "URzntChhDKQEL8nFsxfjxSyhBH6bn3F7nbVPSbrUzqPCeuz9ybpg5HJZESC1KUcG89ybYcWjHSDu8gn5eRJsLis",
  "key8": "4Tknieqkqs4NMfwiRYXwTeveEZEy21xwZfqkcCV4My8Yb1kUihtSKjSbhrDhithKQb31gF3qkYtm7NHkyTtWFn1T",
  "key9": "21SpCAFdv4CsFKbi91vKcqRgmRVyjGDarfKiAGLoRznCjPdJ7iGFTaatdteVAMZESELd6L9yQrzRNxsBmMkmP14m",
  "key10": "2xZ9N6DPKbUuFEKyfcgRcpazTkv5adKX4ftny4Ynrsrmeeb5zy6pcvHWZ9LZ7duBoAkVccwW9zQjVCGP3UAJWTLe",
  "key11": "2EhjgerTKuQhcHY73AjYkST71x8fsA8qFUEFzaK1NZBiFnKup6xeriGC82ECyRtPYV5dsiXjpgPvs3sXXuZwYMfm",
  "key12": "3ZzUgDcxPZZmHXFHfGhPPf1y8Z5ZfTRzHdHStdUvvktTMxeyzNJPTekogFfb8DkgEPsRobNofhtcXgzpQBEZHMWM",
  "key13": "5jmFMBmZda3yXnTTJbBj6ikQHx3KW5xsTydgD4KfxL9X2Hh2qXLTK4wyVPmy3PiSrxCYtMxa8733RJcYmu6vvNds",
  "key14": "32XgZ92bfoajxSmWiV1HYtL2NQbvpmPVUTmdocK9Ej3qjFwbLHTg2g7Vd93oWn7i8HV9SSQkM2vPK2RNNJjimjBe",
  "key15": "Q8LV8Ss6ndN8uRXtv3CU8hkoXniDKFxNU81gis6HjYPdkRRcyQUa8PMCd14o4CP2HmXuVE8Khym85rP1k5axSCH",
  "key16": "2jYfutQoouH7NYXMCuZBC2JJbqjJqe9gzzNLSDJLoNZPup38LMTZ5J873rZxrjnBovbpK8xUjTqC8hCSqw2wmBmF",
  "key17": "3csh5zBqgY8A8Syt6nNNS9S2sSjvQQjP4gSR49FkPU5fRQwnmfSwYGCYQzWEurFbVnsK62BT9S7HFUQBpYVA4Zeo",
  "key18": "5HZmuyhWXxsCd17bwz872e6qPU3izwVUvMmw5WGEnmteVPZmaZ61VysRxa54oPKkUhMCxbHcBXrT5LL76PLc5mQ8",
  "key19": "4wD9Hu1L84CX1wAdwhdJ2kPeKHn8bv5UZ2MoxUKizLkZxiiEuFK7CBFVHs3UrX1P95ajRuju5ovVzjpN4YbSWFXh",
  "key20": "31eZS5bFTqvjTmMXqysmUoVv3yF2cuN1NzS3Aq93mHEDLKag9PUxkjTqiRjFuoos89Ncu339jvNnG4WYJRthb33w",
  "key21": "4DMTYXi2NCKrmtmpgvpiXTjvheRUqymBCMzW4dSSQFxHdec9VHvYyPGVieuZ1gc2wpNfKSTEPX4Mr1hpVcDpS5Wk",
  "key22": "54t8joHqhNca6dTS5VTF9eqpUpFsdWpo9uagkf7d1Sq5fFYhL35cXQ8n97BQAndKXeTQSoN94bp3j3VqfcMKmKW6",
  "key23": "5b6yVc9nHQvnJaZbZzFdi2RENPnLf34AQbW3mvGq46cRQZdMU9GKsxDMMA8mPtByBfTtXY2fknPf15QJn3J8QbjW",
  "key24": "2encdcRTEtjWLxEnZTpYpvW8ZCRXSqhCKcExXm3WbErzKVY9AxKHKnCjb36phtKFf1TeubrjapUVYxAQCQB3zgb3",
  "key25": "3XqAck16NpL4xi3ovhjaFyZWo1arTVb9bZKRGJBNW2UQQ5YyP8mDwjjSHeuNpM8nqv25n3kazU1MwWbn2d2LVKiZ",
  "key26": "qTqYWNSbQwTkYcVD3YFXJwuRUeUDFt3W735ZWiqjL4XBJi9GfADqM8tcZuQeMscYatQBmpGCNkJ668g4VpQiT35",
  "key27": "4rejzY9EKpQs1tHcFRGHnVdCG4myDk1amMb7W9BhhqFvZ9WuaS7ZGnHtYNTunxw7bs5EBdeAFVT4nPtqfJj7sbjV",
  "key28": "5p2bSx2DyGrFyvd6KsiXvKMrSbUvbKPFixvv6JGwSPQcHu788Gyz4Z5Acpogk5dwCMhGB7LezWzEJJ2mNvzKZgu1",
  "key29": "5KCnjsjrK6o1iLD1Zgw1C4fvCgaJ8PtFykj6gLbBog4KW1Qd8PfXTZzwCSRS1zqM7Uz97PZX3t7193tB5q6eeLbg",
  "key30": "oPTaHRhAxzr3N1Mvd8HYf6A7MbuhrQ6aLa6fWUXYkJsL89DpgjunP11xf7bFQcXsmfpVGdYuR8Ch3cWfUobpc6K",
  "key31": "2uJYwpeQe3Sf7odHZ4Nw1NhjgdZzpRZsXj3t3d9c7begcgjv1WisSaNir42mH2wjHBiq2P88qm1B59rUZTKRbip9",
  "key32": "2akh2Q9S3ayJr3Jz4uNaHpgJLhyDjwFR6BzTScsKNBj4MU8vS5i63R5QS58PHHfSum7A6ycf2kAYmJUZw3DTPPe",
  "key33": "F4CSk1ckHWJKgt8WnEZGTCKbnKyHQ9V77ZEMP692Gpo5STeMiH2qXkBw2rmggrU7RMW4FjXUQAKbAsFyQ5hHhex",
  "key34": "2afg6MXK59WfsfjkCPQfdv1QwWo2go1RLDKQArTr49B7nrc16nHrjphFMfH7DGik8iqfhSMzHRjJkLFGnQXMNB1T",
  "key35": "G5pWgLnAw3PvFZkHVWJQLtZUmtSVCWXSkK5W2fEWX2sgsNXaiKgCTAAML6J7VRbpfiuEZZDgTbc3qJC9BkhqiGH",
  "key36": "NzZwXri7htDDCnJxEwAoh9oFvpHBmPcMmcydhp6tV8N4B3hpsK7faKErdBtDLWZEigLTXq7Ne9aD8RVgv2NtkT5",
  "key37": "523wxsHrN1FLNkLsAjVbHU3BcE1Z3CPNUtscEqawtWWaZdjZDNywiJgnTkxMWEdwqsxyN7PysDuL99BsnNDzp8ap",
  "key38": "4oPyhmCnRZfvUoiRX8xsitP3Q6Gr3AzmRzSRFaPFqX85bURUJNgRTuEgE75ZXnKfpctfBcfSQeJqQTBaLuPTb43h",
  "key39": "3ztJFFoqXTdia1q3me7FsPNMrcYK9udSRHfg18DYhPrukLavELqL2ZW4STvLZcTHG4sYn7DZ1srT43vCHyM6Kyp7",
  "key40": "4aekpxuy2FLwVU8JvPc3yVn4zQCxRq8LX2P7tTSKvkag75w3BVKga1c2xfNq6pHabXF8p4xC8NRUth1TLqKyotjZ"
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
