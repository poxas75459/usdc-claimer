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
    "43UUtfBBtNBgzoRyXDgbFXWrFqFBH1ZSqRcUxnT9wr32WnBHa6QFX3DzaQqviwKfXpiAcDv5XxAHpsAQ7cuRyv8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fic1CgN6dfNx3zE6SQ8W5deffEGU7uTdfT8nycfMv5qwPsGAEGVbpzEF6WR9wRCknpAekw3su6bb6mAigoHwd77",
  "key1": "4KoX2toJRMo8hfE7y9RYfsM5BpRc7UHi5Ljnx7hpCSFJXz35gDCzVrDazKM9uXWNCMGDSg54A8uNbk35Xy7H6ScT",
  "key2": "4tERhJpXBXdBsj74kuxPTQEpyDU4t9azxMcjdkkyhYwTFeC8MZ3Eb9MRx8XbSN9hkwhx5yBj81vay6DAGDWKByyy",
  "key3": "55Unc9BDVCtR5ukky3ywVgEwMckrdzfBum85j5YkVDboy2nbMbSnfSE1i3W7ibYstazWzZJj2okvEqKNusCcZ2Do",
  "key4": "4j3LASoKQJT5rav8trjPdnf5jhxrFGuih1dAcMncwy6bDAHRnT4jg3ZV4cCwutwwrRHjMJRWsN9dQGwB7SdKHFxE",
  "key5": "JCrpkCD6pm5z5dmPxgvSJWi2yTxNzdfrMpcNFtdivAEJVU81uidq1o8EaUkEnukN1evpmQMc5biuxeCcqgu5EYx",
  "key6": "CT59rrqifAK8E2PahecYK9qK1FrDS49KJWiFLNbAwx2ebLt7snqScJF3D1Mw3qr7ATHkyRAPE2RH2hBhDbzTFjC",
  "key7": "3xocsgR3Si219MZkMSD3nLbAEuGRJuBX1gjqqvgaFBa5ujdXMVDqGPLY74TJvjE7ivYtscqiddvf6PemLwpp5bP",
  "key8": "5gtdrLtemDoHXBqQMdmeA1vmsuz8YxmK7LFUG4FPYbTnMFFomMx1TUnz236a6jDusZpt48sqoGm2waniSdu3iSSA",
  "key9": "2EuNk3qxJnJQ6j1grsse5yxQHYynt39NY3aZeTcozvDbFUU97avfRmxixKQLah7Egp7PcB8AirZXPTDMGtKKnT7S",
  "key10": "5fiGNdC84uPkzqg6ckBTeYC3JtP15zbESY27q4XoCuRvfi9KUGtcLukT4aTeJobqxEsYc1dj5yQLNit2jfnf2agW",
  "key11": "5vm4ENHTVtkUeK3oM84HkuvwDAjHieVu3PNQUU9VQnKreh7pzjCWgX6ZUNBt1MUDHcatFC7GoMq32NEpFrr2Poku",
  "key12": "2LCWR2XxoSLtSLbe6CddPYKa9UbvgUGDaRFHkDFKBd9J46gTbkJD1vtvgNQGvKUkHDSz8z4kb3q8T4Es1iaULWPE",
  "key13": "4WNDFW5P2mMhjZXGNSv9C8Qy7Ra4MScj8L2LaESo7mJYx7rwANvhUtfdc9P7ppKeqRUryiiQAiRiFHUpJKnvHMcW",
  "key14": "3iXmWk43YYwRFQj3vVsvV2MPndYFAkoA9oGQEtkg2BXWwoGFAGHqrwTQfC3w42D8HTxfj4BmCkHHnhENw2XbREri",
  "key15": "3CuXmtJ9bJ1nVJCHAznataeyhhX3oi6rFeNkP33XZPxb7XN6WPoysGhCNh9oJk6KWMYAEVAiFScPqwUNemJC8BhZ",
  "key16": "3CSX81Jkd1v8uorfYpz1DKUVN5v2jhAHmLuRkoYKwajiYahxB5yDGau2xqbyUBtQ66LzzRN3MGw9gR9jmwSmpEcY",
  "key17": "d886QaVTgYLvKgcvfStGjbpS2BiWbHEqwAPwrPjQd6CGe6vLKWr65JGqCE4e37HFLaUQawCQv7QVW3avAin5Er2",
  "key18": "4snxYW9FC6XfhpmQoyc1LvjGQnb5p43SeEdaifoQZprdksNbScKssdM7xiLURgJuHWS5YbHFYcGCrTEriS6wZiGW",
  "key19": "Qgo8GmynJNzVVtAFXUBFmUmSBFUfnJsvHtECoc1YiBqWLgRF2Y6PGAcBhM1fzJCSz3Uoy9DR4KuBrDSdXKvVzWp",
  "key20": "4pgtF2bNtY2C4WddeY99u16DUispP5sx8WTiyhx63oLegDWPkUPzCD9USa1sMBXh2iWZaHNHMYYB5LQhf9ofVipQ",
  "key21": "5C9RrErnRY4jvsW4YB5QLbu2sRdpr5D175TtxtamTAeu5Pwo3XZv5aaiGX55UpsuCoSy9PeBkGTHBDAommWnXRot",
  "key22": "3q9JUSyCM67AArEBrg8ugSxzyjVngcsLAAun9RWQEGKpu6ucnFJSZtczpUrWjiLKTT3j8iVtR3y9Pwh8Yaf5Ma6X",
  "key23": "4ZXmEU2XZyRb2UCbG372PiBi9VuG3cqfd54LWbBZ5xJC3MiAWqc84u17ULHAEj3bgisKhEGwtqoNzhYhzjauvtqC",
  "key24": "22nTgPHTH64AeW5sW2GwgqCNz6GeLzETNDYN7VjCvDb2B74yeUKhV1GU2GqCB2GUtTty35uW3FSWRto8fYBL9gz4"
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
