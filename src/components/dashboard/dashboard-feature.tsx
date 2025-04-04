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
    "3T7WMWKPm9tPMBtqgiUrSTxNB5v8jK53JF3znxAn1kFxVV9nMnK8tCCAqKW8XA17V86ZaGNFrvbspPThhXkwxKNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wDN6RrHxUWPnf5JVjhoAMh4A6uon7FXNvdFK1vDfEECRo4YCh56NzxB3byRWQppDZgwTx7Q3VYwKUakSc2XqDMf",
  "key1": "2q7SANtiBNNECZvdmtY8ii1HVSxewoWmuy35fwur8gWMe3vdTyjoANsUDwiqGqemXg19qy3KFAWku1ijqGBRKgAU",
  "key2": "4Q2KZALGD42aTz1z4zU8eRKrmVzo9YDHVJEho2NE2rpS3m34xoPn3HkgKMv8MaTaXBCi3W3bNPvw2fauGT4D6PkL",
  "key3": "5BzezGTM3oLcs4fzz6xEHpxzfWxWhA91vefcQWruwaj3kRThYGNkwrLzGLssryExcTPtfVxoS9LJMFCgchgpbYJy",
  "key4": "4uSj4eUadoqRu96Cq89ZRwoaMM3iXcFYgedbUqcvh61tBDVQKef1XgsJofZf7wy5vwew7knNYZtRHCpJi6vettqi",
  "key5": "5ME7numeJzTomUHLdNTYUQn7SVt1BRDiTYCdhZTSFjcGQXtRZBzc43aqjm129fMfrJnTgYmdgYwSHwgVtr4srBMk",
  "key6": "33EFkmpxLLHEpuHZE27iHoyVdT65Lp5AQfD3qWGC1rxrBFFJ4nUpmBFfmMPu6wxy5Js5eo4fWGqcrFbQPa1xJkU",
  "key7": "Eq7TgH2Roxp9QTp2xSJJtL9Z7Dy9XQoQh6HNB2aCEagbp1xjQBuXYSFMNNAYAJXMPe1Su2N4Rc5KyhA5LsQLdgJ",
  "key8": "A2kSzt13PSpeEhtWREBL2LKfW8b3dra1kvUQeUh4xTm8F7HS7aEc2kfXHkbjDgWNs44yCKTCcAB1XFpDEDUaBXb",
  "key9": "3QY3TtfYTguTP3c52EFNmDPYo3aXFnkQFg1muYwhAQKVMxFmECB42Qa2cAESYSQfRZ2VsVAkXXU95b2v2juDMief",
  "key10": "58qs24tBLVF37uALUAuUSeK3zLcEBMQjw9Qfr2YeUu7jdjSDPtHNn6AoiESJebQZjfMhd8ea3xrHbvcgDadGWf8S",
  "key11": "57zV4J6bdF4R9ewkgQ6uPZRZi1KruC5tUUax7FMQw4AHUiiAhm2MJ6kyUddfgKesWNZb6rDgGVD4Sb7zutovGAUx",
  "key12": "35FBK2DMSShvJ5kJBRp4iQ6bpv9NkgA39fTETQkFWpBjbuamKuFqj5ruWSF9xu9qw4dwJ2scv1o9LFPrWNw2ar1E",
  "key13": "5rFgSNbQApRUCd6byxHpb3E6UmysQ3RLjYtaCjVNezqg3DP1r4GjMavXw9dJkMFRmdVwvDRzNe8X2Ah7X14WMrGa",
  "key14": "4g94NY94iLdTRty2qand8kKXQdeKwsQvWZUNXhddTm6WkZ85GupmGnMoTqPMsr65htdJ7AW1rLLkqRCGHygbaqLZ",
  "key15": "3fGdT2NYdKT3PsdMpL1vbQez9h86gwJUvTmLkkxYKUL6Ph4B6B1XmjF218M2gkYkoUf4bFRqtWr1nUA6P1gKpQS7",
  "key16": "5UdYcyUuRtmFLHvJETseZTerncgTEijDd2LcFoHn7XN1MDU8QvNCaGz8oNq7aKhgBgiDJEjtbpBxE5PGo2fmoEpZ",
  "key17": "zwutrsVromZMWWa7cXexnGfAan47Uq3LtjvLTpQCFSSUyzyqX6g84ohvA6776LRWmSZrvg8aVBtA2cSpddvUv4C",
  "key18": "4XBwT3it2fhZjhuUxuQbPPXMcbwDAcYH7Pb6iJjQEmadTHhqBseuA2kW3uLhdkNNWggJiQXQFo8H8RF5pGThztPE",
  "key19": "4Gn4JfiwFP4s686W7FfGrf2EHS7ERTKKFNPYSYhyaBTAjLaRiumuF82aZJETitvatPR4uBQ1RgDan45U2U6BfTfA",
  "key20": "3TqPVT4FjDAbgKvTKgLimS1ocPsXosUC3e2bYD5zEb4xhP2dBZXiUfEZcEUPkgpDhCkczkzunCxdUJWLBdEqvuTA",
  "key21": "3gHtM4t7vjLV7wU7poUk83ht1bb3dx6XKFXrY42wN5L6kPMepVpTL86aBVk3d95W4mEDk2FkCLLguLEwHT9nsfVi",
  "key22": "bnSmFMUQvJPQpC4ADnBaV1tb7X5xaqgRC46YKiY9QFDFgr1UbE5MmZQjoEbUPELihp1eaAhCa5kKTSJdTGKhRV1",
  "key23": "3MUevZQKgmwCPPpzT7Bqtk6jGE2F4k9QGarDjVMuhDWu2EtTLikcKQV5SwKt1adPWvJ8AdvCh1TDq1HRtmuLf3fP",
  "key24": "9PgTN5c6qfMR1aBdgvu1ZL1tYCbvGZ1ixkiS44whKtAynvnboAj5JgRXPEUn2Ez5PJ289RKpHsBvQeLfruWkKUT",
  "key25": "3wB7SBSreVN94eo7Serm9qn8Nk1redmZS4AhjiuppB969kyxYrgtqGZGPcVTk6FfiRUEVcta7x6xiav7uWWtoiHp",
  "key26": "4CapmEgVtX3VD9cbzt28MCE1VXvWGx3SvP26UoMbFMhXxBAR8V4wBe6chopXrKpuJ39tbogNwVyzUTGwfBDtWVKs",
  "key27": "2mfTwdau8CyQ6ZSWFY3qBgRnn5C8qZ3p1eERQmhZv2LonxXLQ2EkYRfspMvJVK6AeKvWZzQ9X9WVKtyc8UV2hwNh",
  "key28": "2KxrRREmAuD3WcGrEUCvfsh7Ssnar3dq7T4824KYDfpvzGayUbVDGT5HXLfnyiVDb6VZJ5ecN3JMeEbLTLfdMv37",
  "key29": "5iKzC2UH8h13dh7Lrx94UxViAzACgrTmBre2VE7LSDRziosQsqtZpV3Svb3xFFjbLxjwacGqiK7jKoeTvMVApXFr",
  "key30": "hDtW48PqGoeduEYAnkPzA7Cx11XLHfVQMvkZF1MwVa3d2ycs38rbx4foMMgjceKyc6F8r5i8uwkbKuYAoou9MZF",
  "key31": "5tPMT6hDXL7VauCqXcZYnA4T72zwAGo7LsZG6U2ZhRxgXZ14WSTe6wFwLXdzQnKVvTG7xhU9GT34WaTVxoRG7CmQ",
  "key32": "2rPViRMKF2EB2SprVs4jDmWHsiMf6okM1jmXz3suiTTJZKqhrTUUAXtku6491nNqBHHjzp6ELsvrUVCWRCNvnV6A",
  "key33": "3fwqhSvESesKxGjKjxGtusQRH5gf5VNVZKaq94KroEkdLihtXXWg7aq71H9CSjNV62ZX5dTyAKmZSYmnA4kkoArt",
  "key34": "3W12SaiaQuVqjh3bJuPDBbz1RgifXBfyu9VG7axPdAyJnaDAVqKieQVoppBhz3LnayJ4U5dAM961mhfGkYqLHwxZ",
  "key35": "3xqHY4WJwxG2FgWyLwu6RkbuCoV89TsE2rysSn2keeap7VbkR6xyFTSK347vgeGQYbJjomQmzHt3ihi7UMTNDnWm",
  "key36": "2kGXReg1VfZLofguTr8cyVtBgd2GHJCgCDAHQuzVYUhyMS2gQbVsBXsH1Wc2wu6UdxikwmLroTr8ktQUvMBETtik",
  "key37": "v4UQNme1v4sZigAtfgKwHgmecr4X2Wn8AtruPRnmR5N8ieNNzoMWK5q7fGYboWmaifcRNv1o6JS1NTGyujnrm5K",
  "key38": "3b3uqhouwqRggb9hyfsekNkDYKyL87urRJx2TdRqpPw65ncntQdhidntyRyupeEyQR2AL1aR2QZc9RWQPtU7Ycd3",
  "key39": "63uqXSswWyehrJfoUs61X9RbtS9gsugYvSptYach9NoNjur9rFJAo3WPDjgqiHUWq5iz5nT8CQXmEVecW8ZxT7qv",
  "key40": "3CVVAuoEse6e9pmgJ2D18fR8kXPYLM5MdU71M6ZbK5Yw1tbe5VRM31XhodUThhx4mr7UGgvvrvasD26H3yYcmjEq"
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
