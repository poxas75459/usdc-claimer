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
    "4No8aCPv4oxesWj4HKjiSXqhxdTj8jhqgDV3pHyT3BgD9FaL3WpaF3LsCMXSQVReBHFN51CoZhD93H6YhiZ6Ygfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LLrnpTCuqrZKhsBeUzidY8MVv6zVkAqRFgrUNmtvnt9LzX9uYegbdwjD6eQVXRSL5JGJe2ZUm6zPwQt4FVHDjyF",
  "key1": "4Ck1mk2xTBaYEaKR1mTVqMmtLTZXbAxwxdBesVYetGPKg4VYdZJ9TsJ7kfwkqS3NiA2UHMCtkUyoQQM2yfKHg8cR",
  "key2": "4F9MPnnTHRYkRnwigLJAu4zL4XTT6fkuDwFT1BcehyhDxCs88V8LBgwAc6Tu6pvELXi981RB3PXBwvqQEA6bfkMX",
  "key3": "29RsKNKgVdTq45o7MpXeWrVsgVq82ERVAjor4dBo5Zpf6CZrL5kcBwsCAS5PeZ8GbNAGFHMHiPufzcKedoxGoygC",
  "key4": "2dehGhbqFuv6aUK6HmkeziNTNFetNm9qgtiW2tpBsezFUi4PrV8jKH8iGfVEcP5WRi4nPhEDe1DrzmoGw2R2j6uN",
  "key5": "3ybwZjQMH7Fz9fMhipjcNN2V5XCdpccseHJve5LPhaaQ5ay5UTqRKCXFNvRL5RrfoWUMpBT4H14RN1LBYmkAqvrN",
  "key6": "5jhhtnufesiu5pDVRZfW3SrSZT2wSk7oa6C6qnY5KLWjkt2dA15SsuuGoHwS9fmfMwsPH8vFn4WLGSNqYusbAFE3",
  "key7": "hgKLXSY8g1cCcsHr9RN1je2BkjWsBS9LzbfCruENxGXqDZB5uo7WLFAw1ndaHN8D2LPdQzX2ADJvDssTRCUsfCB",
  "key8": "2KAgbqQucu1CnWa4nqFVHaNdtvX69hv6uBgQCF9ciAthF4NZ6FFS5JnXgYVoKfVUqWNowjogMRheimemoMYFgGRu",
  "key9": "42zv4VhRGAqYGhe3MGXSwh4J3ppKrxphdyN6gyqvRA7fVXVWcHyGMrycaDgSs5B5fD3AAHga65DtXCwtz4mgEw7L",
  "key10": "2xydiVcpyukVJUcNmVrCafPTadXTx4jCsAy7s511vV4MSNaa3kokcgqBuMnY2VJE9WFcR6WtoHjGhqbiNnR7HKz2",
  "key11": "5gAu6hBsKrkwBMyYKNixXpsYeqRKtoFiyWebMqSWNhktmxprWQLvxR76iHof1KvH2Tgcq98f3Pgu22ruPnxUZWhH",
  "key12": "2Frxzzp6AUjVcCCofRa6N3AubPskXBgS4uk6S1aZpPkDgSD1z7sjPVvWW4BNsGUX7rpPKJLhVziT5cxXUjmcNcKo",
  "key13": "RQpchjkDzexwCa3UwBxXwS2NsqjxDWQ4WEu5vX7VuNYxCArTLLk57B6DTmhu1Cui6UfHTJNY3waEEbVJdx1EHx1",
  "key14": "4Zwf7YxPYjvkDVp8GbJw9sJZpJJrpLhvCNHTdDhtVm3Zc8LkCZTyirm1N5bJYBsrVooSVBoW22jKdgXYhrANznVP",
  "key15": "2t3M6gXX27rPt1brqBnswtuaxkdyzEsT4LJ1kvdYCLYGAkJn2wJGzerYLPptg47aBkEd1XGTKGTXTjwi2gnF1U4y",
  "key16": "4LViX3D5uycaoTvrwmeEiU7MaJofsCKZzx3fX3jUhzAfKidocVcAn7uuHT2Cs3vLJ3k5vxnGTyqoGCVykX1SJzyG",
  "key17": "fP3aA5qA7pK7qaBApT2qxdsQe1tkRkMUMsZ3AdFeukBjW2cCfJJMzgPmwRQ9dsJtwPzExG2jsGczGMKWcT7Rrnd",
  "key18": "3cYUHwDEzBi9kePJqPMQnXkUwiEDePVf1gMsyQbDSWGYBBVkzERULDWSz8coTjD5gg9Svo4MeSP4YJrVhZGM1zRn",
  "key19": "3sP9TSX7PhAVQHo123FoG61zLQXgdiKuhW3xQGHcb8NF3aSVMsTCvaY3Z5PUSoMbPmcPFaHVwWSqAs3Bjk66QKhU",
  "key20": "MyKYjHgxYBTSVn6fvte4q85UfJbd9YCRFZdzSRzz6UuxtdizWuokGZZdaeRvRq7S2Nht8QACazurrpkMwjHkHCG",
  "key21": "22dVqHvskmnwyZDDZgxzcQwLRmRhXu8TxRF4hN9z3CLC2UMrFjqJv3iLaEp5dwUvSNCRybrz6rULUd5h5aFp4ozc",
  "key22": "2mftSFdxwBBTokeTd9TfwMMeaDo7v88b7KA1qFqhf4Qoifwd68MWbcfqX3jHjZogwkgfvuNZXS6nA4MGa8VkemDj",
  "key23": "5kfnxEjVgG9iX1RcSbbegsm2MkATX1NU5p7RBWcgNgQY6rCBjnJRZbX7xuUSppLEgv8ePUmi14CApumpHda5XXK2",
  "key24": "4ufjBs4yhgb77pdD64EAPWUPi1888kgdsSFUDoYqVu61JgwXQmXP2tg6FCFSQUkc6uAZ5dkuokNYwm3fW8aKyyVQ",
  "key25": "4GGN1fyiX8gxLUdDtgekmkkNFLDcDkkL1hcp7sqvuy2UBkStGSNcr3YdkN7Py4drSgkvSSZA7m2FQQGncEVgQHJB",
  "key26": "24PZAfbFXDbSj58BDNjhxv8MLLaNMJJku45FKEjo6QNz3BpctmLj49EWtk23Mry8RxeFQPbCmZzyyhdcGzWXeadz",
  "key27": "nvhVbCm892fArAe3fbSQPwKx6qTsdh1u4wVMGBdknFCrEPe63JxEZBSUhqMNy38HRbLBKkJdabbC1MRNXTVGTgB",
  "key28": "4hNiX2TtwwAG7aY49z5v2uX88NgptfBnPByfYHEA5CsjsUyKCAfEcauvtiYrQUaudsPYK7hmhPtYSHwGB9TXYUH4",
  "key29": "2MUSZphLatJ4gaLA9iuGR8HyXFbL3r9WDrtjKopJNrWzmgHAGLDv2jqkBRDoTgp5jQW6AeVwtN7RTfUb5LsDtaaN",
  "key30": "3SmhVxqg1R3Aqf5YPFRmumcFvDRzfx2fENwCSHZizVk47BsD4Uw8sN6ZcwNLExYazSndNdKokv1Tdf8PFiCkLWH6",
  "key31": "5gU2LGWaGZzrmexdPReb7QKfGqjYdoaJxsy9kEhCcyeyJwdSuH9oNQc5MAF463A3rSdJfxx1orznm34v1Bwc6ZwJ",
  "key32": "2qQUKhwu1K8NPZGcoNMPNCbcPU2244nQvVG67dNXVkdr43p9eV4WpEn7rfmyXeZnohFRG1kahtF6ngLCaaoBZbkW",
  "key33": "2u2eXeC3x5hubyPeZ9NWCdKroJN2Qf9rhK1BD8znWaVkexb8UZQ8pTtNnXKCf8Fc4J8kRrGen7J6JFu1y9kpuW37",
  "key34": "2bMsyrfwb9YRSQSwQkKYttDLRUKRR5fe7ZeRAWaQqrJREthVL4Us9LSKM5bJoZzueCufUB8GosXKsxayYsCDZBMJ",
  "key35": "5LskvNw1fGwDt41S2XdQEyY1TS45cZVvn2nAhvzsGuDXyTZKPb62U2VkMPxyfavHnxTnL9QpHGbriAr6hRtvqVYv",
  "key36": "3caLew5pwTdNbgwNtUEMy7GoHBWnS5xw1tFrrwDSrneQZshFZN9UmR9oMScmZPCj9rEecV169KPKnzmeJXzoveqC",
  "key37": "3CJwnQB4B36ZUitadANAxHTCR2siMff1Qv2FpHRkhBZq98C7dL4ewaDXHTwz8kHgKUXU5DejVp2PpqX2bgupKBaN",
  "key38": "2Bj4DWnQc4FVs8tEACxcE7NHtkkYPHxy4ssBQPmhz7p7aqKPq7AQUQbeJCekvtgXu8WmKDsqUj4xu6FiHuvwdLLw"
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
