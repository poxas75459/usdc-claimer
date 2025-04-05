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
    "aExqxEPjoWWyW64f6GvRoSN1nrPCDwTjhadae2Poqp8zpo5H2Y2sarKDrEAUBHcmQiDCftXcyCrz7eX2PdzZXGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XtX1nWxCr1MpQ7ipS5qYTFctDp2sop2wH3n9Ge5MbfyzMptJ1Do9kbjc11fkuhgVogkLzUrpUjaQnC85WMxM34B",
  "key1": "22ej1QiN2DndycCXRCU3YtE5GwkfxeHdUC3Bs1mUdGuy7WVK3iKsAq7hF71Edz1F3kgnYirQHzpBiNysy9fDWByA",
  "key2": "MEgrfWCHZD3BgiyySsfszNGoKyPF5uWFGxPkQbDNr2Sp2XXxTNXKbDyXTUZvuacqyMd5Tuwx8MEAATqvFWNkU9X",
  "key3": "3aPkE7VBWgBTQZmDXFmrHh1aSCNFpZMEfNUP2qCgExfdkedeeJZUkLZuNCXoi8VQrQ6gK1yG4Wi5GSiAqQ4fCUa2",
  "key4": "ysS5PYAu2xbPaknHxyDL7GHyEDPiVxUmuYTeiVndr6r8BhDpbKfH7VZrkQoUb286ekyeVepG4aGre7SRJGKgvZ4",
  "key5": "WcDSz2XFtcke2WYtQsDYjJD9m5D2pyyph8r3ewWhFvM8CKcsvMtkv4dFdXiMN1b58fHTTbBUL4Hr4UmfBnkSCFm",
  "key6": "4JWJNvq2oi8CTNyymFp5YXW7VYnKzZF8MLkReUeREmJVzW4Xu2aLSFrNZXaFrb2iLGALF34pv9RuEDC7wNd81ZJK",
  "key7": "2VsraLufWv4BAGNVWxH9LqB3BwL7SaRAVjFw5zDFd2e94g8b1XdtJF5uL9ifZ2A9RNUjTQvPRciKzBHfYVXNTodi",
  "key8": "3wMVxjccmnvRWYVb9YiCFpLcX42BEr789QU5HrhiRG347Uddb5iGstLUKYKQ1RUKs4wbozzhELMt4Hs8PadXW7yY",
  "key9": "xy7YjMELQ7rEdfXSpsenFL56HKsrai5PJkdmBXwhdpMZyjqXTdC4U8AvN19SxVockCahpKnUMYMDSus4EQiwtaq",
  "key10": "2dpiqshh7nNe5EoFmcBAw5bpEehhBAHdCmPzCqz8wm5H9c79h2LM6MkvKzoo3XEi1ed4djrkxXQgLbmveDXj4M5H",
  "key11": "kUrh5JQFRy3HHDrXKVkn6vxiC3tXF6on1VASGXdemcb54JE4hngMFtzzNwGoCBTMdincBp4ZCU4rjuVnqBLTpSn",
  "key12": "2UwZSc5CbTj7DPjLMkf2EzswKwHehHyQHFaKqCw8DDRb4QRiqRu4Bi1yWRExbk9AT8xBbFzP4yvDpapaF3HgGcpW",
  "key13": "3C2V4hXWmf36jMi1k7iDxHfsKYRo3RTPc5fGZ5ABCqDjYD1W4UfFRkR53nnd5RD1wPrauG4xMP54c3HjNy6Hr9K6",
  "key14": "niqrELFqHL9SCtkFV5Ky4RVbYaq2iuQLuY21Ux9idv91U5CneQewLj9Yc68jp1weSsxfR5t66KRFLZ358BQ1X2s",
  "key15": "QQGyHoLNPz9vMv3EHVGxEkDAmSrkfsrswCV4bz6n5cU3D4MPFdGCaqC2txa46XfeNpZpFWKayDEGjDr2MX3rVqr",
  "key16": "5mgtH6CvmXFLmUQCNNRtKkuwt5KphCAfr38uNJQi6JnSaFFQ8E8RLEZBKF3XQcGyja1UmtWFGqczSL1EqmdnFYg1",
  "key17": "xcVqLiJ1Tno9h6sCUhY2JRb5fr33DLBdEZWtMdgC8SQ2YBw4AcVm2rFN8mpHM27o7T4pC6AC6DgfDgo8tJcLEex",
  "key18": "5EmByxWKtYhu13iLJaPrbn364V5JQ8Gtr8zqruGsJBiGnLhs37NqGJx1gWdhjAXvFrLsExysRM4z8YvCsnEE6edb",
  "key19": "5vwEFgeXjd1GuxzNGzhCZUf2XQ7qKk8Rs4sQMNi5j8TVQA7XV1hgfeCxM666mCAivmv9f9RLkKryGd7aU1AirqGM",
  "key20": "2ZEHzweF9Hhipt1e8MVy376zV76ZT8varRzQYAAQtDmFb4Sjwan5L4KrvRSaW84RKE9KkrYPJSsVvz9tpLZaWgub",
  "key21": "5WpoJSBwGUzQcHwZduNoUqvFURFzDmM1VLcLyncKG54KZvKg3tyctVuBx8B6uizAtaJMRSajFezPkZenF1FLgmFS",
  "key22": "E55xgh8C6DFTK69nqADBLHc8MZ9UnMZ6HQMcFhxk5rxqMWCzQ8YmqP6T1b3v832WJHQxPfYWBrDuXibZjcVvVFz",
  "key23": "3cBnqbFvvBkqKkjieHVgKZV2HGo6tNa9poVyJGaNHS356Dntq3rikFjTYm7WjRqkbZjL9STH1ZKZmBA3tqWmxyYp",
  "key24": "5Q7hbAMrEGEQ1S71XT1vveX9LCYPTTRKWM86yTCCbtreAkhrihq3mzTyMDdgr8UP6yY8Jsh2aaHZKrv8azZfULWE",
  "key25": "45Gxu24HAKe4ovCL5caG2pYBxmcFzpGHthwtwwT2y8aeZ29fiwy5BdyQ57x6sMETQ7JkJHtx9Z5YXSfSVn3FAFSB",
  "key26": "57v31RnLUpatQmkopDgAi7aAxuuN9sCogbVTWjxYhWkN8CZjMKyM5tos1Tng6z6bULkfLBUkGmpG1SgLDmXeAyex",
  "key27": "4fsvwt9qSKREjCKcgDGT7pyFe5DSUS7c4EitkhK4bU2z7KaDMyiWBYhjBbrqJDLwVAkDfs3HERvYuw5E4io4UNej",
  "key28": "3m12Pxox9mqBABoGWqP3kQVsKZdm7e6QFmh7E9ZkwAZSEgM1eBgPyyqaqaHbmBcYdPpfKPn9Yq1yex3mDRCZS2Zt",
  "key29": "4EEhRSxjJkeKys2ts3u5kYEgQQyEHD52VY6qLWt344mkA3tgiyUgMjmsLxDdn65z9UztXXJi44K6tQ2SSyYo1prZ",
  "key30": "42gzeaMc6FT6vcBM3S82UW36aVsqYQME14N1VqsWrGacuyuVxypT4MPbDEc6ZBBfmejuRHs19oL4F4jP1emLe9CB",
  "key31": "yEZWByKPRB3hgiZsEWB4SnCPzYu63u3yAXm4rsc8SAMzdvCHq9pmRpoDuqJPJ68YqfCRhgXuUCHaKyqQeHU455T",
  "key32": "61FvXnPgUsP8fS5veJMmTmsmY2YuTAtcinCduLu4aHazS81LBHdWfFiWBzfJdxDddp6A3EEc256jutmiDf14ABRm",
  "key33": "2P7CgpwAHM65keYCi4VGCzM6VRQe4AviqDjzPB8aVL98H9ZuTUSsLdqZ467aesWsAAsGnsXDbTL1Fr1b3HFxydx1",
  "key34": "3cm6J4PYqs26qPwQwCBbpuwLsS9eBdS4TyKVkQLPwwSxenXQqh4RRHTxrbMMgf23UyzFREZVEn8kdivMz4MAZUuP",
  "key35": "5ZWDPsDTJhJxKvQmbR8MXQVzEVvm2o4WALJUSQSckKkfKqjrgU5xtYu4ekVjxPKDmCws36Lpvwuksr7sTeMfXG8S",
  "key36": "3R1cuwSjRhTuhhHJ3N8U1LmD7bvm2p2i3W7PKcfFAehatcqzTkZ1B5kUir8MzPRALDS6xtc36By4sCEfCaVnGP3s"
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
