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
    "3NxVx5MyA1fyEDkxWQitgqjLDaFbg5JSdahWyir11tH1k4662kSv8vqxhx1W1EKrmjj8DaNwRuhmtN2fWah4HAKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZMqZmugxtypcfcZRfHoTbx9AjvwSmsn98sf2oP7wSgBFmqDQqHDBmeaUZckqCrT9BAzu9KPvp1zme519gek8wDs",
  "key1": "jXEA3jeffFgbBhYtUjAvrghMY4Q4fiTw7HdVhLigDR8exnEoqNPGccUZRBoJvNbpU98WCzVwXVPLBvKg8QqVzDY",
  "key2": "64HVypw9vBRgksqYoHvcA4tZtGjSJ8L5jSegd1csNA9LNwfw1R3o2dNF6F9rxmS9wr7wkBFnZG9nFeUVYfp1ySHf",
  "key3": "PZHrKHKy5CKc2TrHLtFobWT2BnoqEui1GvxvvarzdYMPErJ7wc8ocuWk6MmAnGygV4J8xKzSh1JRJT8zscQCx3n",
  "key4": "2DfyDpCazYX7C844kV9dZHVmUQc1JbZ4zeRu827VwR5FyCA4WaRDTxwazU8nC786M22YejSjK2JL8C1dkkB7V1Sw",
  "key5": "35jJgUsvZbxDMCtswGxbD3UuEq2jsQkgFdCG8CURRbzKEmBKsAk8T6MaUy5iXvh6Fi2CGV69FxtnDBRnseJDMA5f",
  "key6": "4pvqUS8KawW4DG8ku9JXtfXBVsyRGitBH5upbNvQEFwbRk1ztanbmTvmaAvbcup85ohv8X5XM8Dys1Jxd5AUETkx",
  "key7": "4BRbrDdxMetTWzUKUYjbXBZUVuQH2Yx5Z2EB5KN8dmDK51LHi2uQhWUYDhhDvHSdUXcDw6tNAoDGantWyoXogXRc",
  "key8": "3fs6EQdh3NdiMAhHNMPeteBsiAoskS7yFaXXTcg8p2SHj3igQgG7tzBgGRzuUVvMLwCtNNTtohCj32GjqvWYttMi",
  "key9": "2mMzdqJW1pnab1QX69Pb6s88JYodSf2Z1KgWsjqGdhMBG8QP7BiPpYwxht45pmqpkqtFHPxXNkmG1aA49qPfF6uk",
  "key10": "49hcdfhpj1po8RzLrGrmjFrVixmbykTf4F7PvRPz3VSj6rc62NpJUidhjCec1VWEk43ptSvV3frugfHCCPc8G2vX",
  "key11": "2DKGV6iN2mrKFeSG2mEWYNprXE63fDVNiMvygU3Ym93cLPYbUqpCWPUkWpTEXS1SfYvTSQn7NSra59ndaEsL24QY",
  "key12": "5yFD1BKq4x9NPHvyULSTYVRTc3XniGPJw3WP1cFjZ3QcGF3xSwMDMjyMCX75hxbow5FdgxS3HUEjCKNaTaZXS7oR",
  "key13": "4r3z1vHKfZscfRh45QgKPcSRQaZJJoZrrCk9DtotBevPf4ZRaKhoDQNiYnssn1iXvpKkutFiWSqYkziqoBAVbK8F",
  "key14": "45dW4sQqhqFS632EHWomus2L4aBAzXfAmSwUuZphGnLJ2QM4UxpMVbYU4gDLgs9cMo6gAj7983USG9P5Q15V1VEg",
  "key15": "cSnAqNWWu4QTXNUFZdYpfydx7yibKiMASKfqfZo91DBrLQoNYLUeYULYtRWrbYLT3crgwFrie928Rh3Cb8vWS8C",
  "key16": "3hB85fwukvMo2MDvd56FVu9QsMKAFNXK8cbnDLmcMLEEBENfHT6cdj8EFkS9PAk8Ja1eSdxyWUVXidcWWztismhe",
  "key17": "23mGxeVtQNSjQxbHHnCor8pYF3ohdAoYu9uQoQDPzLPR7a5vEFLSpLjXEPFnMmfgewsALgGQ1RLTwEwQMuiyL9ZY",
  "key18": "3vxHKmtab47DC8utqT6VkTDiztXrp1BTwQ687986CK3PojFYHjogCrzAjnDn6VfQByyrAq1pgYRFdN5QDrY6Pg64",
  "key19": "4YJRUN1oqQxHb6ivZyg5iPAhEcoTofZQq1L3FjsWKd5i8YJoqLy61xSmLa8E7fg4M1WH3Tz9nHjW1dsUFdn8Mhfa",
  "key20": "2n9fyfoshPXxQpD9fwsMnTFtsQZG94PmQteuCGj1MTKuQv4tRX9HUfC3Jk2a5U167uFP47pV1fAEvCmWYw823gCL",
  "key21": "4ueNDJE8eh34oyRFvb6cTjZcRyeqVREeQFs6oezGNHR47VQMPpYvE21J22Q9GZ9qQyjj9mTXG4w1fWh54FzmtskY",
  "key22": "5jPhzSCtgutoYU8kFwoe8F1E845ZktwpqSuxBCyATwwjjW6TJuC1cCnCwTLfYGjZ5nAZmuvPWPBfVkSCoJ8hy8if",
  "key23": "Zjs8K2BjJAjyXxxaUYRBFUBPXamQQ3w7zG5CxWSBKAoTceVHax2QcVFczBUscNDPCnqUTT1XRj3qSrHZUuv8kJg",
  "key24": "29L5pkdygdtgA63naAr42zQVR6YPtxzkoYAcKRtFM6Jt47EeC4oHeG833tswDumGwAZTg1KSXZ2SbDf9SKg73kVw",
  "key25": "5T5jui13hsAuygiXMgfyhD8jBb3Sght2RrXeqyanAsB6K4R2GwVn6AorUXRhdVmG4S9bBFD6xaXN3UmAtrajDM76"
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
