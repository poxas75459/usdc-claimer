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
    "5nVi7aW65CkVc97KRzNDoaxwVM3b1cUGjviC3fmeVLCSjiBMq8hq2Lnbj8nR3qHVU3XTGpGa1VGF8K9BDTKR5jJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wCUt75xBCvaK71CkDFm4oaCLkFtSyMS3cmKGLyb8NBe7pp8GRVN12jtH8qGAb3Fdj9Mook5gafqt9fe9B2zzv9i",
  "key1": "5jKJyDJsntNDodTfsVGky4YPhU25tNYVt4ap3sP88G1chZSnBdkCfbQcbhnAhjQsyWkBpzTzCduMvaTZB7ULiDWB",
  "key2": "gZVxHsi1pH3nGYXT7yNFPJqMoT1DFvQu3R7fNc8cbPEBX1qvVbTpAUfUzzbcuJNpGo1Kpa2t92orAscheManJWf",
  "key3": "3sK5nk5rqQFbRUmzTw7f3cZfZPVaHDppnRsJvDoPeeK8WatUBF1wiAUgG5ZnPPn7yP1iEZeXcCG2pUqZiGmgtqj4",
  "key4": "1nq1mr3b7Cy1FZR9FWDrTyQLQ3iViEJJF58x6EJfjSAE7ykFaHoYNwp5JujHkbVvM4ovVS3qXGAuV9kFCFUPcGV",
  "key5": "3C7WoJtXdfEMA9YF6V64f6YMbuGybAETaSZ4LWbhyXQsg3ALmcmj84KjjVVbbQuwoCB1aANjSgNonM21mCZn9yDB",
  "key6": "rsinkTXYSiPzjPKo9r5AFYqu9SXSjYGNRpsYzUqg35YVcnd3Nj6X2iLU8opTT2yiwtgYFCaBSEaLTL541JLzWiR",
  "key7": "hw79JLdEb2CfZYgkUfQzpKpiieViRw4UvGrV5PDgByC7XFN4tpqMPyBCLNvhESxc8RwWxZ9N3wwJPZd4VPb2Y8x",
  "key8": "5Y7rqKRYf5nCbNUJ4METuDA1LNaTJ4DETH1QN1Eebqbz8Kpr7KKraWsoEgnZ2iSV1nVNLNfpXd7epDmBW1vC4AVa",
  "key9": "4A7Kw1QxfXQcJMoioPvpunwZTJd4NcJiyD3g6AxNaQcTTMCHvfMxn9jHeysKjM418i38REYpsbVzKxskfRAhJsQw",
  "key10": "1wbUnCtB6omZRQxMDDBmK7rSfCDWugHbjJzoRxHc6mfWPvC4ug9gcKJW1Aw55KJ43W4J5ZZ1VbHnyPFT4pSwe2H",
  "key11": "461WAGUt7gBSKRbfbXznXkkG1bU7uHtLeiyJxHbfN5LaYtLfhDAKo2mDbCj1wbevhsES7pixgL59tGQMuPqdhezG",
  "key12": "47xBnirGSegDwaU9epd9pt7wVYQDDke583oLRZPscPtiCNn2TxYeQCWBNXUhMLMkvQejTAv1gH8Qh3w3in7cvzBA",
  "key13": "5rSRuXfh7fsn5CBEyLw4EphMDYnW1HpjPoB2Ljg83qd2x2VDXynH4UVXLdMjXJ3aoNEssQVhrJN9YAiRJqwAu6NA",
  "key14": "5CzjWXUeFfMJZDrHun19BFzBRiGaK4sBqFb1qAuV2QRB7sScxBLUkAeLyXgmA2BSq2SSoYkFvp799VwKGrpT6XEU",
  "key15": "5HGEzGYRUycQoucrxWRihAzucHgAdcYuYoWYke86cHBiNYetDBz3QKL7suPp9HMy4faKao6G4uyb4f7YWvS8xCkf",
  "key16": "32VMTfokbT7E67Aq2kZoK8zCnVaebD2poJvAeqARDJdduynmJsSk4oRwC1LMB3RXiiSdn6c1uGiwM7LcWgRpQszR",
  "key17": "3sTzBFJ2WCTUgPSVfgTs1bTXb2fmmh8x4b2UbU5TP8nUegMSJvQxq18LJVA11SydeguxTafEtESMaEFK9h97RP56",
  "key18": "4j6KpMeQL8SBwjCxrdtnWULvuCRgrTEGyPRp9VYsbCbjtccKMao3L46L6dVfhUBhkNMbRn4SSymjDYT3zJYUy8Eh",
  "key19": "nJAY6Ng8XyMUq2yEXKWwkw4Lj9fkPFaYDrvJPmPrSUrYswLjqeUCcWDjndxnTgkWVKTTA5sAcZTUFsmKzNe65Vd",
  "key20": "2Dcjbgxn3w6GbqLQ1n2i7ezNs4Apii6SdqmJw5q2hqBshqkdeAKGBZie3obH3kQhcCwcojG36qTaZxCUN8q7eogL",
  "key21": "4NWUfdeJdoU8Ni9tv52ngBKXxVQP2A7uoFLpYMQeeenNvjoa31A5Jof8EZAwy8khCV9ETKoya4kiAz4cFnNwHzZL",
  "key22": "2EaF2fkLcj1atXLBaeK7ow1GtYmX85F3UzgdzvsTbKQfj798XqCzxgs5XHA5DFJeED27ziUtXebDPCuhw8yc2HFh",
  "key23": "2R5J4objwv7DiVWhjdNgZpHj8byoQosQkwQkPeMJRtrQXJfJqtsZaYu9sVCdndrLxFQGYNo3GcKpiTjgttiBuUdE",
  "key24": "4wq5bBy1go3sL3xfar6kKxSK4ZffmP6Nyj2RSRC3xinNUQgLz3uuxkC7hseXYPhK9GcjmWnwAvPhkt8PSxKBzfEU",
  "key25": "2dNcxPLzcGhdbmnCzGymaXszWHRrrzVjyftaAsnRnjLeuAu8etpvsWAv5n8m9U3vXrhSWQC82ncFUbb2W6tYT4N9",
  "key26": "4kUzqamQZe7XETcTqW4vZf5TSh3rwLGDYqJY6y6x21FM2aehYwTqApRAtWcZpsL25Ny1xGyhPzeK5EHDtwdK65Dy",
  "key27": "5g6gTDCWZyPv5GkHrSFrSoVCwXtneRKBn347GXgBrQadrRq5nmi1unipsqVorQ8xYpLeJEjHfjPAeGzgpZ83Lq1W",
  "key28": "5hbEcVtHrSK8aWzwNkwuizoNBPmakKsthVp2yjHmZUhhYr2zx6TrUisD7eoBkJtJJaxotWM4giNpH96K52vc54kA",
  "key29": "3ZQXuunUUNCutKZdvBoZunsCnuj1r8q92959xo5J4fpF5yveF9JJtRj26rR7fd4EnTtihL5upzG97W9JkVfpup3j",
  "key30": "499YZgim8J3uxXFhh3xSX9G6UynZT2G7FdmjKXUc9Gx9YeoMtv5JHxRhGrrmj26dPdEYxGJRobCGoibCRaHsT73A",
  "key31": "31AUFmwVM1ScTkggs2DqfkTEX26eRxM5yYFAGkUiySVD86qJpgWnmKN38pBpj1ZekmxTtBWHcR7jRaNDEm3DpRkM",
  "key32": "5ZG8BYgxzvYDTivnAiWNeJ2ePjMKx25u5oX43t5yQBSzFka3vUc8jHibgNaWiYKYyD44bDrWoAZQM93DzfWLnb4z"
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
