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
    "4E16nmfgxAR9S7eW3maBeNALQH32qCzxPxReMpy3aEWjEDFZKZ2x9ZDXZmnqZNiHmmPEeecBvp2u5zMNH5mpRy8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "211CxnTe4A9FeFCMAsVJ3EbwBvDzy8mZ87DDqfNoVtgJwDC3XcYENJ3xBDkBR8FgmHbshiTkoFDsScxG6Eq7EFQ7",
  "key1": "HWzzANYHHLa5gGYf5P74rumEhtqxswSEgmYRMxaDBf48GSs9Ve49TRWBEhotZxpoojjWn3EiJZCR4U51RkCCnk2",
  "key2": "4Zw7VH3FEK2wLj3TSfzQPxewQS18BScUaCH81uHp75zWVa8tK1AitUhqgpJywrZsJ9EeDKkbAGupsNAbsvrnt31r",
  "key3": "3RDZVrnisvxCBcapkEysX93Fng6QEkroanvfouxjRJ8FRz6BVF863ENPieHWsAVGdogEa81stkHKij7u1ecnes2Q",
  "key4": "KXrJh2DMoLwyYLwcTmDL3G25sqwFxe3cVssbcoUzwY2QrD4WCSy1ZGhvUBy1Jvp2tQcjhE3jZftMUQPj8RNydXb",
  "key5": "2ymz3QZHfk6CMk1VGip151BP65dyaWprxS2tb7eQTCA2FPyZ8BDUdKEbfLq51Ddiv7sNpkEsRub9mjBh1dZsoAYq",
  "key6": "qRoJrkmKvoyj9EDZbJbo5vhcyjBtrXcJ74zLLZLQJk6YLT3EtTeR7wAfyVBgUdeDzuxdgNUobVvM2Fz17Uht3r4",
  "key7": "iMG8eq7fJrEp91fJ7dQk4Mf3yDSbC7rRoHd4KQRCMNPABFQpxTmHFKLcVv4cuqXh2MvD8cQnhKt5CrhoV2h3Czt",
  "key8": "41mdsEogZxHJYuKCpKwX1omJd6vM4gqLmBoQMBykW6nvpAP1apeXq8fTGNQ4cqXAxAYetoLrgUBMwHaBGMkTWGSR",
  "key9": "22wpXEmaH3sL6VBG8HxgkYaWkmUEfyxhgPCMqJZhQS4PrySyUkAVwWMVpi67T9ihD5xSRkatX37a6su6WgmT9zHm",
  "key10": "3Cnbx9WJJYcUbzkTKPFXL9Px3ZKvgg6JZj9QeZQoX2Xq5Mh4f6R5uvfBZTj9b4ZKuhWcVANKrq6oY7ccqz1L5UJN",
  "key11": "31wiY6xtTnzqH86LWibYQENwCxpxeQT9KR44oeSDmGgbWCfnr3WCpEBCysnLAG4wYMRJd1PGDiMZMZvCvGKfZTe6",
  "key12": "4ZavKxiMVqxeLDwSfrhfnWYMN1bhUhvRrQ92m8BHWUGFN8mZcLbJtMgf1WrDZnPVhhdNKs7xTs9kByYLj38GvBcr",
  "key13": "5XyCUCETxrFZzm2czyZzeawkhV3Ay7ekSD5afGU8aPW76dKeGqzSALdvP5SxFQ8amZ5jQC1irB3zwEsGB3Qj8vd",
  "key14": "4ZUtkTKKM9wRhLQXwB4md6ThYrtCTVbmXs4yX47RDajDWYorsGrnzhZKPpuq5pPQMW2VrVcLDvaoRRMEPz7cbFj",
  "key15": "5wGPCVnEUXeLYHgicRy3GmADcKWKsV84Ri9WwoapAaaw12arKytHSb3WzwtJCK9cidVnq4L94N3Ua1Zcz8TchpXB",
  "key16": "5Vi34iz8RJj8gREk8V4V46ZSxdC5LU4vk3jdCqWQDohbQsWfPAToXewAw3DhvyhNQgC2SewJmhWZdPMYA1a62xUe",
  "key17": "FggSUczq1K4irvGnEgTXG1qM77LRCo5pmBPVD3tfm81WwLNHfh5w7QCWD6JVvGCNsg9qCa6foCEvMaN8ht6AJET",
  "key18": "3VriHtyfwkenaQBVvJKgut387FyH9bW7dXqCMUvP1YEyCguHCgGVW3Jb6t4Thgx7o9vE4HZzB7GpdX6VnSAxeoiJ",
  "key19": "5sAiGM2WNPRxc4yCsn8rKoXm55sV81TeU2EVKFSA6qt5WaqR7iBkdRrkfpxT6Ab9tuBpbFL6Pg7ohmTtxrAHBR3a",
  "key20": "3BnCcUQHG2rdVcYSB6tRGr36JZLRgTyfwY6K32FbFtptkB7Mok5JMGv8VxHuTxxej9nyi7nxope7UnbRtnWCf6ET",
  "key21": "2wrQTZ8mVpBcXCMdmArcEYZxRDhjak3a2E6we2htzsgVRyohpHV1oMF4nsB5BMVgJH9Cf5oWMLEhbXZ7bGgzqfYg",
  "key22": "4rdMVs5v3hcsv44jB8CgBMHGWC4DxZtvpXBnnqYoYQwbGymRuYPfMxjZ7NaUjXsYzDheYUBw29pjdqqmXnUBqXzk",
  "key23": "szin6y4tgh2m5jj7whmtmNYJ5Jr4CetjnKExAiiDhXVX5aTKPomtVuNNDTG8M2Agu4oUxwUWXtoTxL6HJxpGcRH",
  "key24": "4T5z3bVSXfYKnppTshMs5pfWsd55N48b4cufV45LsiswC6WwTEgo41YeKW6hMUsvNL1Pa1f73sSLbnfuy2FCsYgN",
  "key25": "3CdfGN84Xyk8iZbNAPXKzFFenkzoT5osED8z9ZPHe5AcXgfwpy5vNCfu7DR7VKoS39vR1BnC2jfScEYQszGmTnEa",
  "key26": "5ZFkG3pPGTXYrpMFyZY4P4TG9ozr6fhoiYUGFrBrxe4g39x42FBVsEh2p9qBLERrqBL3wEme2uKGQRX81WCWr2pM",
  "key27": "4aP6mYNyqsn81AgX3vFgjFGnCmxQmVswy4GoLAr5zRozLpCNCahAa3wfQ67mx8wkqtLH5MwRzRwLGqFi1rkeJzcC",
  "key28": "5Lz9nPkhzTpznuP7v6UHKZ3iUotxQqXK2RJGCqNPrTp8EHkWtdQ83KdBmMwq7ipZrgrEm5KMk1a46cpAMWk5DGKx",
  "key29": "V9EbGrWKknqfNAV3QZhMt5daP8tMA9cbeagfUv51eosGH3pKMjp9hthz8sJajXmnsjLXN47LFbEiGiqLqSZZprv",
  "key30": "phBgDkvG3wW4ESJ3cvcmG2rTGVL8n9WtGLXC4umwKWUKmgH1frRT6g1yfZnXSNSTdeaPHk5CYdRGDtqACHk5mbA"
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
