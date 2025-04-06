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
    "4Ydj81uHbLpdg5WqTAnk4nPcFesN7nuvAnropM5ZgtL8BaF6LVQbY9SwUwjzjx8Gxwmd6kk4Yfp61MF2EgDr2f1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RELfZYGpA8Q4a5TxaZKrMoEt6kpciG1xocSBApTg5MEx7PYhotfpPaq9NT47rMM7q54QswiKWjGTSHKEuCs3awP",
  "key1": "XY6U6kBrQBjECrVDQ3nfb5tkFgiXZotzR9hDhJRQXevwCqe3Yk1Fiq8YY6wu7sqWdVg6Ld3xtzwkrjHQfdaqh2t",
  "key2": "2hw8p1AoCfWdEDbNSeyvcj5pkBKz1j8ALHBbHnFLn9qJkxpU9MfWexaMd9RkZK3MqAHwUjThd2PCtZP6JTbVKgv2",
  "key3": "5x7u5QhSzRDYc4EsgTJxEiajH4BYkox9PttwNLMyuc6kSkhXLvpSqbBmEjRmNbywfhgE3n4mDBSGCQbP5xC5fTYp",
  "key4": "439pMoj6qjoHKw8HCHbposVsJnRo3hM4o2qfDKkNL6e6JN84uxx2vciHHavGHhfR6TacmVwF1ypZDnG8VpJBrp1T",
  "key5": "P3Rm4krgoKSh7o3jWVcdeyKftEYSNr64wkiE6w7HLP4mUdQXTPVJZGv2r8HVQR9sRS2WVVPtTLUWGLgEMFrTgFe",
  "key6": "36TFZaiouyrpxYfqis2pWvscHYaX2HhgeTikEinyegCFnrmkQsLNNqW31bz4zj2bFapcY924TxEBciyb9oREPGst",
  "key7": "thVaUyHg2g7zCkJtwSULeYy5a5P7VhJS3fzMntdWLSwScEJcEfams36dQsVbTLNnNficCkL6Q3ECD9E6dXBvNj7",
  "key8": "EHDeFBFQmnKAM3JQaRLhvecmRxGoSQNxqoEvgCqsMFG1aTh99tP5bhgTNJ3ExQHk9ePAg8QHSJbZmQ9c39kSgyd",
  "key9": "59QnEh7AvmDZsVXc7LtG58bJVjK53gB1T3dNeSaQMfvPbwA5xP8pAR9kawP7eTsYNz6TVpb9khzcKdThGBZ8aVHy",
  "key10": "3u6k2ct5fpdZaKqoG8kWEF2dF7dVrKdgVSUHBahsJJ357SthmFBoW2orLGVhUXARG5qEYdW7LuiDmCdLbhJfRM4H",
  "key11": "3DDMsD4vHuyDGjNJQHy3NjCe3xL9Wi4vMcL95qSoKrrmtLYtzLALobm9dSpLcGafnjsR2PKyQwDaqC5nh4fkNRt4",
  "key12": "VGPdLaREeqagaRbubjnQujmkbUCtcKQTSeKu36PvjRkTqouRtvJ9SbLeHNZdF7k5FAZ2ZQB3tfvxFPtUWKjZ1sN",
  "key13": "5Cbb2R8hnhYu1xnyotAajyatCfqMFZVfEwFiJsD1PCVVxKtmnU1CF5ur1myu3t2ymjaW5LCkvZLDTCUZT6iN86oj",
  "key14": "5SbqPcSG8joDC6JqEEQC5Ywg9i37VMtAkoo7MacxLB6656PiSjTpD5DyuyN5RZxfNk11GV5YqnoCRJUSHpKN5oTb",
  "key15": "23UF65t37uaek671Yx3vvKKs2tsamV3AiSX2gq72UBuYR4vRgycLL9zVacV3Xed4RdDgz7uhewoeEnsB5EjUnp1V",
  "key16": "V3mYUmGUjps1Cn6QYD1upruo9Ri156nXhZTWp9WjXQcEqDXapTrZxYfqBCHoqEQeVkTB2cGHYoNA1YQ8e1ypxw8",
  "key17": "612Fg9gjxT4tdVFCz6cabg84PFmCRVFawaZefkEbSNSWmSZwZdoqJM7XfbmWtWaxxqGB5Le2fuSmJEVieXGhQv8n",
  "key18": "2ac8UJeAGjPGCoXBvrQc7QQFdNtacsF1BU9kMmbUTfwpMArvmzVtMwYMAoreoKi4oGv6QLE2AhAnAg1pXyyQ8a4V",
  "key19": "61PTg8nBy6sJzirziuCPTDdW8UkyFrtmVXay8EYEZK2zQoRmR66bQar6A6EzUwJHZRNooMANHyM1TYVHDXv4hq3S",
  "key20": "2yHzzBr8dMdMq3AvdPLNTPQk6jVZemULo41i7wP9VYNzZuTEp5TXTFE7wrm2ihXnn9wyYGpTN6r2c7ZToSxDaQuS",
  "key21": "4Ev9p19HmoD8V17tZjrDw5uitjroTCF9KckmkCFrJ3HaNbeVvpbT2tfRGq4Dq11XM1MsKgLPdwiC88tRkfBJcGNA",
  "key22": "kC4FKeFagViAuyro7tySS15rPG7B4KfbGHEEpUnrF46DKPfiBPyakP9Tty43WtsC79zjUhCtixkYWJX7vS7MWpy",
  "key23": "TZfpPBrz3wSafTcvVuxEYmfwxiYMyStWshpJjU3CUSmVpn6QKJTZGmWXSAugVcKBmY7jDPqESjPH6SbTzCcxKuQ",
  "key24": "3hQCcMhXCjAVAhG1yxiWExWZR17juktqSuVsHtaMMyJFWh7t9juDpNxEzTuyUG4Jhac4DBZuCh2ekKukFnGPuuSd",
  "key25": "5eCrHoofHuiCyuFzE1ce8cuMH2Wh9mQUB3eJBtUk6D1ELax1YgewadKosmG1YNYY9vBQsV8qbXhgjqf5LYgJwaZu"
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
