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
    "SCh2u74axAxFx1Ub4QYVbxHtmCAh9t93xZSUZkTWraR9K8FhprWZ8o4YdTRv7ZVjHnktUs96PV6mrcuG8G93bVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hJ5dmEznMFSs2BNbKX5vfTWQQfVqNveo5K1Zf53Jwd4ofBuoCfWLDzhQS3a6p8e3PTmm5otd9vjDpWjuupow5Vs",
  "key1": "54NyCk4TQf7UbrHMtqFLXhRXqqBDstQwkyCWRoaBMPmjZXk5cZVxE9fPDSgW2sqKJwMNLmaVU698a9BfUxS54BfT",
  "key2": "Zfb6CBEMWXHpkBF7UnALxzokmsfhspQxnfPiCEBysyxvsCz3Wmep3QoyhcJaMAJg5Kkc7o2JrJK4R9R9iGsiB7X",
  "key3": "5eucgapgCx2GhCSSjkavrfT5wCzeEUaBakowF4En9QuutBHq34QZeDFcdMcnsstyGA3cPFMVHfq9BG2sdLuriEXu",
  "key4": "3VUs5FEFJJvT55KPSqFADommgnHWKWSsEdaRuZCZJb7HbwNyY62QxV3y89aQXzDkHsV1iRN1Liu4vkEC43oaXHRm",
  "key5": "FwHXoU4bXJ9oRf7ayN4cat3mxmAeWsTpBZiyLuNkuMh1Q64fcyZ36Ps1b2Z3yMtqzKjejD4jGGsUZwayF4Gqgt5",
  "key6": "5W5k22S9PXNqN9AcsWmhEJvQ5678fkdd9XfmdhKfvK5hcNbPeeQcvT6cULQHSFP9fRsZpGTqsWRzTQCQd3kM5wzY",
  "key7": "pXwhvMHT5KmrjeoCgmBSq2pDmiwuZkoHb7ATafs48aXNSdKrraj8mMPnh884aMjvmhtdJSGmpKxwWdbP8H1JoQR",
  "key8": "3xUyLy5iwfYTYQeH9LQBvyceYS7Vko7yPMwXgs9pEVqLyusasJMPvBKEdbdZkPH9SfNZUBs4jgWTz314YoSE6ibN",
  "key9": "Uw2MboS6tsa3dEwLddVEKBsvgVb8J9JUe3erFuk3U46vFWKdhXdHK86XhLkyJ977sqbFfBoWkNH2x68d3QhxiMN",
  "key10": "5Bf5euBhaAuM9SrpVDh8f2Zr6A5sjY5TRCso1851TmKjPirtMnwtgY6zVMGMcNZ2pvrBvoQBMS465Ka93u5Cww3j",
  "key11": "2u1n4zvjPYceBQFnQnnPcUY8JAdC7t5wYsEGmwZcD5STWzehFntpUBJonCcLg6FawzgsqxsaTRRcrC53b5vjaA9q",
  "key12": "2SaXRtg7gr8psEJkF2xMGyEVqa6cGBhmY14e8PpS1k9gC9XGPnQEcHSwMtRre79zEe8tQQf6etct8g42Xt4YzxVw",
  "key13": "2WNWePvDCF9aXtqCeMiJj9uAFqEss15EqdER8BJBfxk8ikuqjK8VyGZ8wiV8epG2DikXxauToRZzZpuHoV1ohx2K",
  "key14": "2H1nxxc4m2VAe6KytfjEg1wHXa2SfGAKSr7HawiNYLanyQEsyreT1JqLeyF14iHMgT2sitJUDxKGwPT2wPA2u74Y",
  "key15": "4X81wKxdn8swzuZ8jDSRRW5h6GCFo6GjibeJE2xfd5AcnUVZDZYfHnAFaf8s8y2eHG7Ksp8kw3vh2NrP4QUpKiax",
  "key16": "394Z6rpGrBthKVnGQ4tFyQ1PijVazdNh63pxh9jWqcs289d78xB8DfbyazLFJDcSst3qFs9zFZRogvyBLx7ZHtnU",
  "key17": "4MbNAZdWdRQ3E8nyP6LEC28MDT8FNSxgdanHQUpwcu4ovvxLJfzwtTcMaubxxCASGA11XGCgNF5FULkkr4NdSiLe",
  "key18": "4fGUk9yVCvbZXPNgnPhY2hTgmyASp8T5MP38NGh88T8y8hagaR2avNAfcoTuGJrk63M8M7pPAFzBMJhj8TussaKK",
  "key19": "2CTqjZJVDiHqNMEjUEXvjaBFFYUMz3sDpvvQwJg1bZypgt41X1wA2nXX14sfCGGzwpLFnJ5akn8A5HS1iRNS7Sq9",
  "key20": "2JzAwLhVU2tgm9cnxRiX3dE8Qy8Mhtr3RmnC6HYD7YRJGtVR118nVNGJDAHqjSQTA3824Dz1xnrmW24T7L6qj8wN",
  "key21": "411oAthMKtfFHCeiALxY3i7cknVWXkiCXZMcchrtWrr1avkFW1ys9vMQ6BDuyoVFkBV4QD1zTcE569tKQEz1JMWF",
  "key22": "3jDMT6GbhYYGgE6eJ4v12wBe2W1EEYEwiYy8PCXoYKM8tvmt64hZBXvSPjSTHuyxEpXRVLjzvqg9KNTSM3gsgMib",
  "key23": "5cCnJsbtGyCKBFnUaSb5Ki7m5VeVCKvZEFkqVRZ6Rojg8ySvyXQER3w8LbKEKUDA27cvviDgWVpP6j17B2ABjVs1",
  "key24": "4xqXtFCRHnzkAihJa1WG5KDTGDTC3ywrz9Z6kVnsfeFZyryPXGhpPRxC4Z2foUAYUfTvCLgokyxfg9ahjErgsj4e"
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
