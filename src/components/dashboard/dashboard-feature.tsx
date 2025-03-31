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
    "w5Mi8NXHgrbm7MmnSL8DcuCBMYoFCZcSYPqcwn9kpuxuMSUeyN6PZbXzFCzjTu629PoJCTwp2R2vg68pdPeufMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EEAAKDDzCcdRKj2bUJG44rNjsLwPZM3HT1ibu5CkXbsyTbioMYbadULWuq1ReqkZ53VMoNH9zufR1D8upni2K8u",
  "key1": "5iDF4qcbi9JSTEHet1ED7GrC1JojqZRqC2RrgjR73nFk2xtbtL4min2rt1hWxQ2vHf3tMgTS6Pc9JuiCsBb87wY7",
  "key2": "3n9m8ytDe3TxWJ8txVFHeQayV4nxTN6SaRaBz3QdVFKed2JpngfjtkgNSRrJojJbjrVwigtzgufukW6zVVdZZKSL",
  "key3": "2D7UfddLbzQkNgostyYfzrgZWErhgyCznKw3Nu4JHwFo5RoRvaDfwKFgpTgDpQk5DqEXbSFUVSJw9LD2LR3TRCL",
  "key4": "54q6WsdxtMrCo72VzyKr2HGo7BZqvadyeDYBrCGUo8RxbNx985JvwtDf5kiUXtjMyYCXvFJsTuiXaCBdwJ2csHav",
  "key5": "3Grcf75H8zUQp7JyNFSSUbinbfYaRfMj8SWERaCW9zNYDxwBqymKjL7rAcer6S86kgDudGV4ofc9AvaHSsij6vd",
  "key6": "W94HcyrsJ5bSdhqcRRBSQJWQxfAQFG4xG3YRhfzdn5ATg6p3QcLPmzw1wZvU91s9V13KkYrUWcC1c9dTVQkSC4c",
  "key7": "5WNwruZ427TbiiG8RTF8oNpW2WSEkhExzYobU6xe4NwVbBGC7XZ8givfQiYJpKs2om5nkFQe5pQvEjssLUHQ7Knr",
  "key8": "2sVgHwH6XduMkjPjyXoDAMAsyVfHBivaWcRQDbBfABEjTYw9uVyuqoHhEPoxAmpwmaUUPdq1agU4WQRrqCtZNtRd",
  "key9": "2sYaPFfnBh4RAK3weTu6EfJsGp7bkfq9eG6vJamMmNoxsqJHCvz69t98PLyNMSfqAEtqkFnGt5rKFHgw3WEiBCTX",
  "key10": "2RCB5DsDhiyA7XjV8UxGjcSedTbZpo4BXzPJXUf3zrRmVoFaakgKHLENYpmicPzPDHC1gnfVtNjYCxR3GC2wnzWu",
  "key11": "3r1sE98vNxKyf3vXGMfS2Z27QTHhnmvpA8NayLHqef8KqqD9pVQUL8sSRekcXEd1yvRfeQhyANhzMzMzreQC6rTU",
  "key12": "4ZsFWhyhddp8sHsKZseUw3b3Gj92UX5TXMr8LmugRhaJdEoVWvosJNccoExc81qB2c3JSHbLK3uHCZ9YHD24ngg7",
  "key13": "5vd9W1sXrt3t9kap7hyQfwujkPk7RjfkGwVA7cvuGp5H1gu4gLmFYrmoCrDrY7SaNgifzqdhzARi7oChM2nMrDpM",
  "key14": "63hbR2Ej3oQDWhZywap53gnkMDepSHc9bvmeQL66GrLeG2c8Usyy82AfavWPengbcAaU8NE8p9YpynRnT7AvEcaC",
  "key15": "3VZ8vYkWG2AZkHj1VLRBuVRxvMLRbGUNQgD4deW9Z4kpnLZ76pAvPBGS7tHWNxGkCQjFNAeDfSqd8RjGoEL6m5vB",
  "key16": "2NsmUq4ztE2KPs8UyQRDv3VugZu9jnzqW6Ma1Mo6SFK61vQK9iZF5A9JrbJZ8enB4obzsDVHLQHyrRiqFV959Yn4",
  "key17": "4SnLbTkBtp8A5dAKf5EeUYAVc72xY3t68GqxNjybWLwiHirP6HKcToRkFBZudQ5zmQTnD4EmNCGuLQs2xvuM7Eza",
  "key18": "5Vi79AwmYxFCx396YeikWbWxZiNvtkYqSJGhNDrPyD16s9cWooxfviY1rXyUNd8pjDTEhzGb7k8nr3MBHMhAqUWV",
  "key19": "32yG8TPPMXPRpiUGMNPhXFenSUqr8Dc4NvLL312dxFWicqoqUNoWNDL6QebtgFejacJ6N9Ae3hYYmwbvvtsBED93",
  "key20": "53Jg9VZYCyk3KYDp8Kan5MrVqrnju3HiTNgc4jsMnUea9r6WjjeHmLSM5o1sHfCcgbXyzGhCAtZGd4r4Eu8R9kXM",
  "key21": "42svoaucro6qWcuwNjJd8LSRkhJnaKyqoVdkTuS59Rny1AEH2aVo8i3BHkwDhhuUkJN3ndujWSQtbrudP7mPt4KK",
  "key22": "5H1WyDCT7vd2ujf7yPTqV6wf2zhSxLmiZMEYYpdLG6oELixZAic2RuJ9Gq53kdUUutAKhRCFM4HZH5Gi3PyTYeFf",
  "key23": "etEyKzsVdGfRxcx9qpsG4NxyHkGMNXcf9Cfdaw2L46yvvmBjfxwX9G38q1Y2FRCNAJFPj1ouopCL7aBhegeyj4v",
  "key24": "3LvFCQvrfpmv5J63q44vHnmHW1fWHwiKBRnjDToGboohPJZeW7zs7djw1fNJFqfWC7yBX9LXXvBEcfN3TAAZTLHQ",
  "key25": "tQZ8TG6FuhUT1HAfTSGatDiS3G2qSUCuKXZAvQCDn7odfoiR6znwd3fqvBKowosxpJD3aaSn1dpYkJSscTdantu",
  "key26": "63dN9mdZUT2aCC65TtHLP9AgTqLaQ2rYazgSDSKZadH9USpuNmRTnuDqmyLeqU415jEWoP1JBFY1X7wDizYSji7p",
  "key27": "4gWdUPD7GGt5g1HA35pqJxyFBFUZiDpdp5gAXNkWejz8utdCN1Gwn2emkLeiTDWb6BiHCsPLEZgLtaYtg5oJtjwa",
  "key28": "3ePnEcyCkPNycVxntahXtzWdC5vZAWdmouBn8KYiv2BKgK55B3Q33x4Dm9NrfQqHXu71QT5S2WkwoRoSnkCCSSdj"
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
