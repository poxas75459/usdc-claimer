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
    "5sTFau3Tdt88iVDTAsQiUvucaBEyW7NfBYTkrcAYC4NQFqoWZHKmWYWNNndaTaZzsob8bNHD9JMJ7ikV6B6f2mmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A1c9rQ379sThNSEnV1mzYW33qrxHkTFw9aSYnPxgKoF8pkm44JpecYK2tJdnAsD8bBfudgAtjUxU6AHNT1mc3e7",
  "key1": "48ztPaTa7L1Gw3VzpMafS4HGzp8t2UiAG79xskMXkvMwrThk1FQA4gbJexz9iQv3ymEm59b3vApmnk87KuNcgwQn",
  "key2": "4wZcDTouBYEkdSVGfpXtdXLqCdDUYSghJczs4qELhzp1JYhB7oo8uM9q8PuYPR3ufzBcnXZYfrHqyTcFWTZnRPAE",
  "key3": "5pmaeEikWhUZzwrpiejsUv54edNt7qMJx6FTa6Bz5dPMbuoXEcMk6zvD26HUXYeVV15PCCF14x4RBzsU2hN8c9mx",
  "key4": "62rZvgkHVFnXJU4sEneavUMQzWnhke4JYsBavaMRBYET1QMzfUDJSWt1nwnrUMja2iPQjAfAnVcR8zH2ogAnWRkd",
  "key5": "2CJSfDB9UQqa99z1nAQKvVfjDqA8FaabJD3b8GYn6EzjRbbBDQTdhyb5yhVKCT9MCvbnQbQab1teZgZSJaMatt6y",
  "key6": "4mkn8Aag5nCfiGtZyXTft16QBoMqKpYDCpVDFJpw8Hrc9Fg2tLA3ukJNEReUZo8VfSDdsydCh2hjGsHyzCvjcCx4",
  "key7": "3tCEY877boipAebPTBQmWThnFKET5ZKQEmqbTjYM2n61jYgMmZm9uAoR7CWa4MS9hcfaBZrRjhC5wsp6ZqbCSgye",
  "key8": "4BaHxA7XKdBgL1k9uyB1Za3ZxSouMwJJXWUfxGypM8yhvgZGcT9k7zFySriJa71shVCesPQtjtNkH7rGfNktrAbK",
  "key9": "VF8Ak9qWjFeGWpPkwVjnb5fRMCME63aSnShci1xjekJgtLYzUWmABvbL7ZvX51fK7p6bJGenprRdzsmSfSGNypg",
  "key10": "475pSxN5m7bUxfkMKQyDq4QNu7q3MteWyXwayXb4r5PQff94cm3gtFB5SBw8FGtM1nnFUWNcpKgb4ivPHoxkdW34",
  "key11": "4kpG1XJV5Up2ErsWLt5BtFFUPPSENfACfzG1PQVzqiFnmyJjfrmqJeA8W7NVmSWhciRoTJUM73Eb3kKZK7BsUXYg",
  "key12": "3MqcmUAxjrVBrGtnRiD7MQpBRkeNWSgCbjs5vLR3ZvTFMTDcivR4fMJX4FQSEY8zcv9EUNyF44imer3A3NPRgp4k",
  "key13": "62UsJ3YZjQkyUA8wst1CYX2z8mFt6nGDHFm9UPVWbQYhz2Y3bNvAqDXsE49TfKKtzDSPS2pstQqGnB9ns2NfRXQD",
  "key14": "2GRzthSTyHdTtUFbsXYU2S4yamrdZEkUizRw1AgwohqFc9hopKnxx3WbmNpqVov6aZCKb6SN9nKgRhaP3sRfwSmT",
  "key15": "RnspetVSFaDTiEn3yjmVtJVurHvFqZY88yADWiSDz4Q97VPeT6U3K4dgXvdmkSftSrBi9Qv2iKSTXLXySYsvph3",
  "key16": "3kkjRNawZa82KGnpEwM8mcm88aaXRZ4Hfako2FD9k1wSrPE9LCfeeJMLkTDEasa96iPqWvGC4UyGS1y2FeaDJywZ",
  "key17": "2bq18GP7dTUFxnZTNZNbZpdxRVe4E3RfZMB2Nbw2yLkFkpQAmtF9KNFHFhnkQL1Za5hNXatkoXqGh1cMfGeXZu3k",
  "key18": "3RUrVeFE9zM5WrScirSuuV2KpxtwcLZgNryRQANwZp4hN8fE1DbCjD9TNNq6uPCH29CwhegrVesPhe8fMB56xix5",
  "key19": "3nDrBWTbKrHWund77aT6CbwySmYQzJ9WDcoSBdqma3Wbg5eZB1WauhMhivLA7SeK3x3xbaBnUzmCvwPBc6zMtwNJ",
  "key20": "52W2jGkNpS3hF87Vrzvh9pYW24vCwCEmW7xp3EDBRUAYWuouVeaa6WDcZDqJrpaCaJHCgkt11Hkea9yFxc4ch7vW",
  "key21": "394V5RNcKioGa5TBgmeXhpFkAbS81AagaHreZuQ3ssqRREoQcwmQ3QbkRTmU5fRWhx9a3RMp8SEgge4k2Pq1qJEG",
  "key22": "F52beq9NwUZA3wZFwf5aVDyax2sm45t3z47cFjrq4w5ieqk8ANb6qEXYNFRUiWFPhs7oNYWNNYk2gPDCiLN4juG",
  "key23": "3W8KeYaymGerzApEU5PBzVc2wEvqsrxk2j2nHDMkiEJpC4MMW6UqTehXjoQXzs68cgz9378VjhW1d7KfWQgpJs1X",
  "key24": "3xqN6kskUhbeG4ZxiR123TjySCxSAtqmPyj16rZg98kRgxpBn9Yj77cozzLjN3k4qE2DirDkGRnArhCPUdjVTbLC",
  "key25": "2g55mz25SU1MV1smWAxXNGn4wM26o9K2tKP5SyDarCFcoSTfzBhA5sJi9BDr8j2a5xCsywC7YECTCVpfLaPWRNgp",
  "key26": "22DWhVMPfXHn1yAtZDutHxCbQnjPQWrcLxgb9qz9z3HGaKyYMHYuPC6faFEgUktgcckYkE9xoz6enaDkYUQyNAwM",
  "key27": "j4EKQJ9cksgGfbNL75vQxbiXS2sUFTcLPTuLMtSYFeRx6Sa3yhgvKHhDv3bdQihB3jtC1T6d9eLjmDyK5TzMGoG",
  "key28": "3nArSkbtd6Y5X1rdDbpM1aMk7LgVKDPAPWUzszJqrggexpVxdneG52ySQFjbTaBkvsMwwkZo6PtKihpDBsHve6XR"
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
