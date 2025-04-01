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
    "31goiciKKR92Ki2ySaJSG9PHkjeYpSYXy4aCB6AefhB5brdx22VBL9p7Mn3RNkNqDCyDXQBXg9yHJ4C6aaxVGouv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yivWHrqL8ckQBTgEXgaw2TgBteU6nompP6CvJCGzpYUrmnqhoNWascZTx7qd15CcdBoPH383hdRURJCghc5hF7C",
  "key1": "3meGYfpEVs9Q8xoKK2Jd7dAyc3ZcWt6aeH1a7jMbtvQdhNZAtQV1jRq4H7pNvQJR682CNcWXZ9RCpVeCA5wvVv8h",
  "key2": "YoFBiBSoM1Xf5yxDnWhFcr6eKvymJcZA9Bsw3jbBfU16NHJwj24E5MVPziFRUho8Hyeu2ded7zkKwNMvGrEsgYg",
  "key3": "3NfLhNCyySzVLUzonnSsnbCJ9Q28XrvpJwj5scuGBnR19Zw2f1XpLL9nYNqrrUqP1YjLX26QVdCFXgToJFA9GNCQ",
  "key4": "3PYpxruCEPKVmRKFsqnv5sw2Cj842VHM5gKWePod95qRV4s2cEvVEPH1jqcE6vA2fvqFjVLerqHsWf5kNK3B9pVo",
  "key5": "5wPHDj9GctGwmsHwFGEdqXmJkb7ydvteDPHwpgvkLSQEVxkRU3CMjWABSMzuQqDQxuakNYvNM82RAZVaEPMhLXQC",
  "key6": "3zm3gzicxp3vzvUMAwpGR3P4cU3yPydg7bvunErFdnTMoZ79Kcio9jt5EjU45YREAptTzzktErQQBsPUxLjxt1bZ",
  "key7": "2fcjy4yGZ4a49eq6ytuKqdvg6UnBMUofaGx2igU9wPDHTHjfSxskaFZwpr9amSvmXDarVgw6TA51xfs3c7Td2kS6",
  "key8": "5acSxE8zE2wgA5nw42n8uhCwCjzy3QDQwCV6i2PHuewH24FFA8AJ7WPDY4jH1iXn3LsrZvYFakprURXj2VqTQMFV",
  "key9": "ntEe7gjzhZtbKFdmcNz2c65o3wA1ZP66kWWQDF8bJpLVrqbUj12YNpQMzZc5MkeeihYRrXwrA3CP6fBRoP628iA",
  "key10": "KFPD9bu1XTqfHqqpyN9jeJ8QtU3scmifYPfjASKfbnxZ6K7hycQy8qzCdfV9AimWEaWeQQ2MFvGe6byiomtir9A",
  "key11": "2YbiijtuxZK9Us1GQNKdsaW1yCgKsVyqqE2u1tSkicicUj6RCQuEeVHSFJHHBoSRWGhdhZ8wPJh86rAbCeh7nTHz",
  "key12": "4D2WQ9fQCNH44o6rNstc6j9MpHsyFuFncBUWN9Xs1SZZEJZNeo4ANywrRiGauaSSZeV9DzKm2wVfbGx2GkRBb1r4",
  "key13": "3uGrURnns1nfvStzKGksAH8ve6TrHWjwFLucPqTMMEBUM3jLDerdwG7cozXHDAVQNbVr21ov72HJuqmYYGD6wTs8",
  "key14": "2QkQEtBEHPkPE4w4w8xnpeDx1nYXGCsit7DPHycgkTUxUNG1tnRBDME47kR3MZwcLMsrRqrwgLmRD9w7qJzC8MXQ",
  "key15": "332jNoRdCqqfbVLv27Q4cd3iNzdhFjQkMAsHX2MGUkH3qAPJLe6NemSAex8tTE9tmGfjij8jfkX2p13CrDAo9kXj",
  "key16": "FByE8dhqt6TGdpz5Wqy4dNCCLYqyXZqD6uLyKAb8umfaK9JKooUwtFhKkySx7GNgzHYEc8JyciR6jwX8XwT574z",
  "key17": "5UqvcKyLbyMpJkdtvDS12XZHUWEwD3rM4Wt4Mv3pvwQXfUNpGXp7F168raXXz38C8uN468WcVULWCp66EcwpHvJF",
  "key18": "4kds3hQGZEDy9exgVomCvs53YxH8kh53iJWg9S9E5kyM9HSUrLtvQyrqWyyWQmvAbhDSHLYic3YTcV2WDy3diRVC",
  "key19": "4Yzwrb9zEKR7e5bxrTZsgfrMP2JZenpj913qZRdxfkTLbZvojwXJ7zhDTRTuPykyz5THsXY22xGpcZebfoy6tZUr",
  "key20": "2bqGacxv1hUEniBJZ6Qx5esxLTYwcoYk2v9kXbHKKDQgUPFJkCHEoLu4p3TUs1R3PijHRE5YteCFd9nHA9VYbbVS",
  "key21": "5iXha8owp2FV7SuhWoQUPvEc14EXA4GYeCqnj8jKG72jKVFQpRRAoWbBxDNrkVzX13itY1CmAUmSh1GeN5JUyAwg",
  "key22": "7TdovR7p7g4das9hvooZiNz51ppdej5ULAEbKhYEp4zjuE8wootpEfTc32MB47CMjY1yJ8swHBXFE5xF9SY4jNf",
  "key23": "59RY7AMAaKwPZyRW6egmmfrULiTt6BdNZtmvDNcZHcJgzGpBQHPECbDLTbZ2DjgpD2L9gRp4j2yfC9RuTFda1jyT",
  "key24": "2HjqwA3DEaHyL7aZ3p9X2yEEWpSFYuikaFwAA95LnmtgUz3BPZz7gQsguBd5LmvgpxgY2GDZN4yn7nXFR5QVS4Ff",
  "key25": "2SuNXpyXne6bU4MgGf6aXMpPEMh2m1XJPJAqR8fNeVq8A5FhWUKDqCoiX3mhhj5z6Rxvmsx2TjrmmBYFe4tEBauf",
  "key26": "4N7S3LeVzv5v4D1iwhvPnBp422fNZs1ri9oTCCfMC8Xztqy7bRJygdyiNAEQqnezjyjQm7N3dDtNejuipdp1FLNk",
  "key27": "2wKyn8mH8LTwEhSrairS5aEPqFDiWwQshkMFyJtRqwFWDEmayFakK315ViRwcicHeX7VUp5s7gbysBMPKErLncGe",
  "key28": "5HNbCWF27XSXCNATxNyxgC6Sm43ar4BUkRe2PPvqhyNyFHNuPR733pEfoWqCXapJ7rEj7Mk9YQ7nsoZw2trN9X1E",
  "key29": "3J9zdAfAefCwzHmoYZDFX9GbexpFisezqqxTonuv4oxdfWKCEGGRfFpyANYR1XcKyD69uo2j3P61X3g9NGfQ3ZRW",
  "key30": "3B8Cagt4RdoEip23rbFjsgKmPvZ6gFmZQ2iw8NKZAv9KybDxDpMZeXAMqXFjYMtuykFirFio3pcYrhHn2NFoQk4c",
  "key31": "nhPejNSy2WdBwCck9iAiZ16KSYrYCDmbuqD6DsmqExcWmkk6oEgKmR22BjfymWSsxS2aJMCWm9KM6sqbVzEnuzD",
  "key32": "3LcSTsfcseMcimwEmHZfZo9YJPwqoGPBfCrUZSMPzHCynB1kQDbcWaCjCSwWRGWHLWDtkiGThsCdXueFaUDNPm1s",
  "key33": "X4JnEsHqVhdgeH9Va1JpWNXFRvyZPYYxLK6F38tx5qViYrmtNFvGqDWFopJVnGPeZVQn6MUw8sUha4Qe2f1XV5s",
  "key34": "4fww89SceGEGbzoJ7RLAdGSQMAsD4R4LSKEqrEt4ktFB9W3xbFHtQsqkwdfD3bePcDMMRSzhwR73g4LcDQGxHfvY",
  "key35": "5EF4CuQ2DXTARq7xZVrN96WA5zUMsFf8GM9ABrv6x6Wui3dtmLmxexcqTzGAUWN9oMZDJohhVEER3obLENUEFH4T",
  "key36": "5AWhiTuRAmBbYCoLCj1pdXdhA1tioLMU6CUTkGStDsfErrYjMPoQbFqsppNRKqmtJioRQLRMqsaxsFTfURhM6TkG"
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
