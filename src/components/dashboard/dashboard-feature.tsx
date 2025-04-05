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
    "4HQ8jgGMK2ySYT97vPdYchFfRLnrhqgRKLwPSutbiu9QM6DBhzH6WpuPoTBbJLectoCdMejVvitw1Rv4vxnFGzEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F2bQ95sxQMduAMTBUj2z3fdH78WzqnCW1YBBmgPKYYsLNTs8qN7kUKqWYDKAQ4ZXEF9t5J3e67UTG8BPKkgsZaC",
  "key1": "pbe1mscfjeMNjJM8SfgMYn9AXarCBiKmviYRcEncedarWQQzQkkADd7xqPHd8FqVzSKgcXk7S8yToWrFgq1vEiT",
  "key2": "4KFudaBxia64n39RueeJaoaUeqK9eKhBtJ4S83bbypcwnPbCRvTR3GXb17i2q8FjkStQj9sHXH5XH8DKkDuP6t82",
  "key3": "4rhs5RgRT3qZ3FrsKAoU6HSwxfDSvCAKGfFoeERtyHzEhKMn2Mg3pC6y2nwqbouna9h27C9A2nNQxvmHibRvZNze",
  "key4": "2uPhJFP2Xegz4qf9A5XTB3mGZSYVxTyXYmk4gKBbXZpqW7Bu3JMxF4JWWzkc8642E36gP9r94cHe1G1cG7K8ULkz",
  "key5": "3Yvk6xnhoKenBxxBrLDLRnvzMgyiDcm9VjX8G2P56FvP9tahhpvK8u5QiPNJMYbobBoYVp1Z2LPovUgwMhbKNJue",
  "key6": "3tBELnm7P52qJwP51sRV75CHZrYYaaeHqTxdMWrCVan9ZNYZcALY3cLY7d197o23Tv3ivCyiWDHgGGGyFnzr8tRz",
  "key7": "34TzU9y6wZzcKdPXA8XtJz5YX13KX3EHcFjwSUs5BAz5kc6EBhGdgYkKC1jV8LwDFrQtdKDJ4sTgng6f5cFGJFhw",
  "key8": "ZrSyXh4F8RK5vhn7LaGDC4dgtjqaVs9NjBoZVH62Cm5xnqMR9rJNPA4EVz3FthsB4pJVStxFmTYRcHsfRQ3mXYp",
  "key9": "39UuvQbes8bfbaDLUhwRqakxfVGnnUgJbuhXgRiiAeawKn818mUVpXPsAvFAjQDG3G1tEM1nXfBAHWQ9S37EuLPC",
  "key10": "YstPAS43JBwmm2kARkx2VLBi2iR2ncJEBg23x6VLakqNt81ZFRkkN1Fwos99Ew8kZa5tMdQWzuRWPkXesm5db67",
  "key11": "iTfenDMw9qAMyuKVB3vBzDfYvstCsMamPaCVGRzTWZSATMEB3K2ggCByUnvk7TBh3UhQXvnj94Ysy3nFVWEXaBC",
  "key12": "2kBehCVnCEVkMrhuikkZd8hDGK9sYHsGbJXXTHSHsGT38Ki4NbzT3TUbLrsrdTWtuAuCaybb7LsSseL6BHhsm1tr",
  "key13": "2wwgMWC5ecwAcs8kXecJct4XvJHkJF9CE6ZGjFskJPqvtPzesptVYExkRmTHM6ofPk3xGt4E5YA6KaQqQpXufvMW",
  "key14": "5aeGofW8tBLPzF5iKayyh3RMa6vtbxxrikCH2WUL4BWqrRCkD787NJiGCoNYfzXRXB18zKAbsd2YqCk814jrqDaf",
  "key15": "2qVoZKm68sgzM2oof5D1JzthGhEb47rqGmoD2wmDUpqWi2EP94cXKEnNMAaUvFc4Vz6xZNccQFY9AsCGAMQ7FV6B",
  "key16": "5rKKwEhgLHFmZkJzze1Daq29AeMnP8oxWMEsWfJV9kryEfjSRj3zhEuugxuRgMT4ePpFrfffDBRc6FzASNuUmUCq",
  "key17": "25hHwB6Z24NcuvxcFmubLwYYZXqZajCJGdqaw782JRMMn43zzB3P2XdNNkjRYJhTkZUuN4NCePyuBPnV2N9ADLQh",
  "key18": "L3JpajtdpcVan4fegcBSaKoRL21kf2ZrfJ3UjJTj6bW2FVTShu2SVERU7TYNhvBANfWuN7Q1TCNAuMT4PgVoTbv",
  "key19": "4tX1XE7xTMAWypWTxBwRon1dfLsKhJjbQPhdo45P791czEoS9KuZqF8uryhUHs8SxJ3NMz7Kg8xULb55Q5NqogRp",
  "key20": "5Zd9WDBqpaPhw9M9hy2tEfF1VZWGrNu84ANhABUxXxPcRh4mVJRBwYrdNi2MoQcy2DdeEcU4HscSDR5y96UgCXTP",
  "key21": "38JimR968X9czg27SaNwYtYD2GUevaBLrFvaFAguuL4UnpwZ1sXoeAttb4ty7oay7iG4K4UVRNQyx6Phj9AK93cs",
  "key22": "4ywYyKAdzMMFk37rqKPPHswDAGNcWJsKSeigvs1yw5dKR2rMditTGfQTvCqdxcG9Ypbbs6nJ8frCtJ1xxGJz2WfG",
  "key23": "3b4zyAWR8bpMMF1yEC1erSgoKt4ujjgYEteDMZrvtXU7hG2afTcLNvvDjBG12M7h7VNeJA9YUfJatpaSJhegUE6J",
  "key24": "5HbbRkcEQhH2YWWrDKCWUc9FXHc2ncBzWGF52bLgGaTZNJZHgQ6tTL5ZvJtiRQK9sbXA15B4bqbsxwGUQVCTpykT",
  "key25": "2P1q7NK7sXLY5bfQNnQuoProFjMVKgTL5MkGqoMzmThrDLL3FfMZsw9udPSEjMdnP4EzcMp5FmnxsVAk7R6ZA4cC",
  "key26": "3gcfU2PWpV6wmRuZGtheY5FWTgYypRmK21gNM6p7LsAZ4FLukR2QU5LKoB6fKEt4PGaJrNJ9ATBbVcxKTmbS6GJk",
  "key27": "4uXofm99fyk8bHhKvUmQkyNyg2ouUA2tUhTKZ94TKBmA3n6i7Eh8FztM5MTFWgoxzFQvKvVtUZCdx5G2upY6dUFK",
  "key28": "5vnaMt32YNFzm7zUpEG4YiovKKCVngpDgYA4i6Jq2MBKnzW6vyuy3Tdm9NJzr8nWatdbmzxpNwrwJKbewMun9RJJ",
  "key29": "58fab92Pc5jZWMYB2Gn6b21WWgXsgeyAP13zxiBq42JoDmsxMyEqdg5VsmPaC7oskMmVarRpYFRL9cUVRXNGQEWW",
  "key30": "2HndhVXcLrt2rc6peJDGsRjy3fpxsMhDna6LCHFgycu49uv88WEic2eXB5oeZmYjhPJwqWNcpSeitRuxfUAhxZsh",
  "key31": "3pyGZ7j4qZaxPdM2MAPhfL7mskgQqsXXENuniborMZB6FjMBkGZxLhZ8S6jJaEoQWV1x19at7B4dJvgUDmu2H8pM",
  "key32": "3JJMo4kTrkTNYUQDu82rvSBiCbpr1GG8sNVFcCe15NKkaubRLp5vQGTycJv359SqiNPXYJaNnuJf9ocLhBCCmi59",
  "key33": "3kCkF1KzPeEhRmDP2fcQhfYzxMaHC7YUzQU9MAciyCx3wJKYKfuafJaq7BLhjTkmdm8JQSANmev6xxMPJNdGj7M1",
  "key34": "3ugeMf89irczzC9wPEXdZe8Lj6oWP3oqXnF8jdyG7P5NGMw6ijWv7Pxqc6zCUUTctXJYz5aupu8JCxJxty9P9WEB",
  "key35": "3MVgEnS4EKb9oV7gmP2Z2JnSsKTL3wxA91hmrPa9thgJbaZpUykiCUH1R8vvdw4wStrSWTjxaC4eytML8Sy9M1Z2",
  "key36": "23akNe3LnuFRmJZiv3L9kfoFppMQaMMSPZkiu4anWQLY5ywwmskPXuF8XSjxCHLBpjRa76tdXcyB1yV7kfnTLhmm",
  "key37": "3qtiHrNZTc3jWxTgDnj9WpQYUzT6FnXtBaGuv2EyBfcKMRs3Rws7y6329qLkzHdGpLW67co7cyURyjbuXGKAucNE"
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
