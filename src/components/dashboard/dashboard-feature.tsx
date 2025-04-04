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
    "398GUCs6cS1mVedFWPPuBbDJ6wfDCGPhfzzPY1Xr99RvUrpqXZRkMoqFEwtcLfaSyew1fS9qNQAxmGGZHryJUPBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tUVLowiFohnxTmVAUaQJ6ZHQBrQkaNHnoxEQNPQ8cmghvRTZ6JaHJP4SxfzFUVmpghmY2s4mLGVuxBvofqHbGba",
  "key1": "okBSEjQN7JpDwUp4PLnNMYQs7jwyHAZv6G89LqdunzeXXQGT8zrhWw4fbZvoToKuT7Lm5Np3TreWzkWe6tszVtS",
  "key2": "3SS1Uqh5UpMYKjvmdJswtP8aWjcbGMvU8iKsTpLJ29PLEHZykGaxXCaEnyKLSJ7wxcSQMJxR6EL1XPJTWf1rVuYb",
  "key3": "3Ti6PB1H2wY1hkN3S17GNzxeosDuKMXcnycC2hVnmEhq9iRhoLmuDQAMtd8ZeKSGAmbGJKNSQftS93E9F8u3hzAK",
  "key4": "4ck93pWYDt4fVSbXX98DakmiQx77rAtgt2ichx3rzFJ7EVZashrjL6VkAEdLcaQ2shjeydTSYe7Uk2innsZ36ScY",
  "key5": "2s5BDvPfUd91toioUPGYsr8M5xwnZ4H39X9mjNKLMNySEDoakRTyBiAJr2j9in5uodpxrXCdUkkdJ6CvTQxoNtpY",
  "key6": "3mx8hWsBzo4StDfUBUsCnY3AYeJEUBhzgCDHJdnUaNDFsWyVMpAQDGQGGqop6UbqUrHyp1ay1VmeTMwT7Cw42qdU",
  "key7": "3fWsBxvWk1YL4d95pqLv1vWSD3dE5zTMYpQa6f75LMxqz7XAmYK3vK4RoKHQ1G4DjQmLjDv5LA9vvX9ZdpdmH8Am",
  "key8": "4eMZyzSooqTdfcHN4sM3FCjZbLWkTE3rk6KSVXgXzeiUobCTU6Wn2WTcj2dJVGWrtfS2kcRGxY46Ch2Yq3Jdmyf6",
  "key9": "yptcrTjccRXc3nyz8Dx85r6Qb7D3JWW2QFHFB37nQJCtHsVRtKghn4D2cgP7H8CRJWmuE7j4jgh2jVh5XygauEc",
  "key10": "1Syd9Kou7GwaLx34VooS2tRiz7rZJEHLZAWBKFdGstzyorGtPV9CNvh17sK6aB2PC7oL2SpnBT5pwCUEJVTgGYB",
  "key11": "4PwyCJciWQgeBVWy6gSr6xz6w1WzxZbZqi2DPtBJsyLGWcZ4cTL5jtCjDSdNDoezAfEDKSoEuwWQc4ouvbemiH7S",
  "key12": "bCGhTjV3WYCrod7nNo2PgLhJv2hhRAUpTBeucyRwecpeFEa7H4D8NPj762doXYyboufKyGoxjBMRAf2vXTKHsLY",
  "key13": "2AGScQ9BGq8mxatSH5JEfZRcjLWPqmwM1CC9WzvHiHt66ueGqWMfvtkScTZ4SAwnRYhab9gmCbDEzP6j5ETKGgYL",
  "key14": "52vd91RdGDT1abDZc2yJmVwMqYReDMZWsJF9h4DyiDNvEik8FUtaHTAnSmKxdpZCSeeyMKDxajKdXkwSWsNdWQG4",
  "key15": "keZcJ5VdfoWaVvG77cejT5cbpY6f4xRNE9s1mQcHgVFVPhEpmLAPvxZr8MD9RL1PkhUXMW6rh1RXiXqgiqiZGbW",
  "key16": "2o2nF5F4NPjg1ZTsjfw86AXn3GE7wmt8g7ddWAt4mpLT8dzTuKcFwoDv1kGDLAh8Aoqy72VxpPtmp6ahvXMUgZBj",
  "key17": "Tn72Zj1X5xQmGJhSa9qxqAEfvqWAf2tbhrsszuoz5T55L32DgRhovsQHJdUXopzZyg8vYhFQMyYiqHXPqMWkKWr",
  "key18": "mn8jiVCidFUwNg5YWt3k5SwM5aAhdKykwuyTAqtjiJ8rTPBTHQbv8vwKQMC87KgdH6Nqw5L4Pei2QcJXGvtNgA2",
  "key19": "489KzibQ91hjNJsc7HCkR7DL82qRwWQ7cJpQJefNU49WEzQ3NDQ9jYUXgRzyfqF6BMFNzV9a7FBcAqhjuwN35fPv",
  "key20": "3DCcXkR7ANARs8pxmBT9mHpjh8AtciLcpcMicAmFAhpir8wr2ECfGhAJrjEENkKpSe3rKhoBxWyRPkbGHTBFrgfn",
  "key21": "5tudkUDjfuBQHMKKBSu7Wi8ueKvMz8mA7GVP5HyJTu8Eg5PB3bubRfViQ2ys58Z3c9FbGY4oRnJBMSFE5ov2quYt",
  "key22": "Wb4s37wxFCLNgWFFeUBNUaMVpqGWnioWzetPrEnhfbQRFBUR7E1kgt7toUM1NvT2ygJ4Q8uxuayWRnajyvcW4aA",
  "key23": "4ioKsunkiDJKAY4Nd6hMP3rLPegEL3b5Hf7Bb1W7NvwGGz6UUsgdpYcN3mHTWdqMfg1fYzEEBLtDxixafyh2oVkp",
  "key24": "268ShwMtaXwiLzDimtiJu6a2bxMbQQ1VWSYQ8fr36z9J92Hcd9kY13CqCA3P2TGRr9pzLTedDGR9Q8oBRMiYoYd2",
  "key25": "3JudDFVzFgtHkPf3WYzoRkCscgH9EvGGLWQhEnPF7jcmgNNW4U1kBx2SdWYgfuNjKr1GBSpSurZV88LLGKKrefS",
  "key26": "2rVxNskQGna7HHAT5DczLwiRXhjtvmWkPHyV2JULWT54KXhgtJWnBNG17sbWRt7L6zuVRPMAvEnWS9DYP6V7YuS"
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
