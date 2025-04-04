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
    "4fCzphCmvQrq6KWZAStqzzcF7DBe5iDoArVWgVcnaE2pDg4HaaRQv6wKyc8akpTV4cXB7wVTips3hSK1ZfmQTwc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LXQHGwi4jsA6MTnyaYn33rrh1nJdTt8CTJnDGMo7H5UQQmze38rnivi8UfQwMX2tNmYxiaxSGV8CF4jex6P6yXY",
  "key1": "5xLwyC4HLD3rJZn1An1K2RT9hXBnPEUoaBp3UQrVJ4e3PE2i6iWwjkZvRmiU5Qk2oAtv6BX4RzAFLthoG8VDkQ9F",
  "key2": "2aCLebXU7gKKhWKVHjpDR8Hv4YNW2NisL4tbxdKJ9j4as7txe7HwKRV8L2B7QTbSox1SJqoRhE4hLpuv1Jh5FLgK",
  "key3": "5PAMTCLbRKSFNK89EuUybRmN86oTH91htFKJ7sbh51NPZ5B8JYfi3iwgVCXaEmK4nE3HxYuuy4gwzvPn1tjPxCTC",
  "key4": "BdXt1jP4oTazv1EV3EQYe9kHGjxLL3CoqpKizgFzsqoGVqfjq7QQqnvto43wtMZoPvW3wQbj9xYNUES3n6nTAyq",
  "key5": "3FkfwmiThdLa9UEVPu284esV4LgYAsWFh42HrsdTD825gcw7xZVcrNf1qnCmkeryen1cLnYyCKCnRvapB1xK5gkH",
  "key6": "4ucKQuyVes84wrNwwu3EbA4QGo8Ud9GZ2QkQC8iGHL67a6i5WjHG1pGVz49fh8F3Zk8NxSoRhTpgjGqUKXYxohmF",
  "key7": "4GFogkTwXn8oDKHZYrGcCPD4kKMoc1bACb9TboWxgveUayGSgHU68aouLZmKKhGpSqmvg8H6RHpPQKpXxxCvsf3g",
  "key8": "2CuNSnV7sd4MuWPng27kdUew2G4d7aVHZrjzpoL1w291YhzqfErn22LHgk5suQFCHmjmLi99EDgFUV2o6p67AfbC",
  "key9": "3qPeMCrQCnBVZLpGjJYnHdeQkcMBMm8WK4sjnbCAnNhWFKamazsCVRqDHS9kZuqcpUzsX9LjwkyMetAU9WAAunZB",
  "key10": "4rahLcYjYbEc34vraRZuux5tRh6bU6nK3swFGAiT7kMsRNxKjqAAMhFzD8paFBzNNWZYx8SUoj22rUEDr1FH9vao",
  "key11": "2ryNSrnTuieD8KLb36BZjA56vbdKvChFJMdLDxWVhQjb6mvCbSr6ghdZ3mYBaPfgGacMaZugL3idwcsLaEu1mpMz",
  "key12": "2faKVaW5WACczAuBA9Yw2SgwfuCbWt9Kz2AmtsytUGPat4JaFAMTxNQKRPaZAvVs8YYuvsuQT7T12petgXN2KTjS",
  "key13": "QaFHEBT984XyGPU6zJH5G2QBQ6D7BaP8vnoE9Qdnn72ukjA41u3779HaeUPfsyJdB6UwWcKqdHda7kxhajohVQ8",
  "key14": "4nVZV8SVmE2cAPoGaC5czCbWpKway6hZGNkJcPLm8NzpazqXztULPV8dVdmjSMUX5b4Sx8ea9bsWKFtgA5wjwr6U",
  "key15": "2LwbMvgKWSBKg2kDXRnPgLs9DNueFoMeNkm2GQUmig5hBx5abj7zWyfpF8EQxhLRK9ETvf3uVnKc69jT6EkXttzT",
  "key16": "4fa2vapVgFTfjDXSRVqt23mTSty4pi1PA6M49c5hzQCeSDvAfDCWHAdntEtcFsw9Wbg9yqiR4Fy4dd8RQEZpC9vo",
  "key17": "4xCd6gNKGfvVAFmyTTmKcMgcGfAhAYq9qUWYcfuz6sd3LLu7oKZtKzfAtxUSYArXjcsh6AuaWA9pW4cBpDiEQ9tE",
  "key18": "4CBAci4pK6tLZ6eRPsFdT4trD4ciVW76QtPGCLrZxtBBZfYfTnYqTqAu878auUqinjWoggTv7qwCeUhJBRcfmZYV",
  "key19": "3SsSrT22ZCcpP3XHvLe9wVR4Z6XSNyfsTyWChUYqawnqsWqoR6x4QULbRL4tV5Sr1L5dWEXsNubwBzvFperSVSyV",
  "key20": "r7N7hvLzqedQxXNNH4PXbydtvgCjw8P9h7iJVcCibf5MDKUKciqU1prqiJz9ZPAu9dancic4LCfc7RVUFiAN7dz",
  "key21": "3EKjW3mVgzs1ZD56JB9zzRJ6YQCdDqqQ93PKXocA6SqTfV52FyauRKk9WnLvRDNZpACHvcTuurNtyYo77as1wkkV",
  "key22": "5q5WM5gLmWnaT3H5M3DRfDN6wMnNzTaMc3Y1YpGgyCeqqVSNSP9zTDP9BusfbmBsWdYeDSwPyvHzNUVDMgVYe6L2",
  "key23": "4DLLahe9Las8auUjvfVmzAQFBe8bE95Xs4WngFee7224vhpFJUdtQZwKTj7q4FCKYQHUAPaiNbe399SgN9EaMtzM",
  "key24": "3HWhmnTY2nA8EdvWf5jUpn8LtuStg2geiQg66ZCkcy8b6bthmBWSRQs4CQLKjJJbD6PrMsyAYNdwDegWzR2QP45Z",
  "key25": "5htGLepnsee3yUa1WDegd1uxtp71qyGJnXJTRqVwSNBPb5cA65ofyDBFSwD3T2T3oqL3psybaR7NtchYLXeZSVop",
  "key26": "4dRd4N4YLEfpSDMAVBwzrjp3BCpmCAAnSHgUFkeSCv854utV3VEyJWGZz8Zcdt1TV7XNUdLZS44PnGzZdhYYbhks",
  "key27": "9GojEoow6ajdM4PPWHmRiAsVT24wJX5nC2gWufghQzDB9dEuS1JzN6tRaG1wfEFLK7YF3N3YgUBiWdMXKQpaSE6",
  "key28": "uS3oi2kgnkMHkdpSkUdapFTan6pwWN8CECWN3kGq6mM4z6vQufiSoACzkaWoxXzq3Eje8u9oRLRK5k2NcDDpheV",
  "key29": "4SzK7fFdJFRf4R2MKNvm8avwNrZNAk3ibpX88YfZB4CsPgJT8H2NUWLVyFuNWrCV3K79bvEPPeMetCFhR2m7dVCf",
  "key30": "3evbzgmxNcvYsFi4DMBNDVr7CkGCg21L2bbEYNRjbkg3T96nFnDtKEzF9NLa37jk1P5AWhqCAPyCPKumVFbiTw47",
  "key31": "4mtywEnhS2EQ2UPCTngEG6yHhxWCkCgdfktckQnaVz4dztTEX4fvrbMtn6LdYKdVvREEtq49TE5qap8pDfwe3Uki",
  "key32": "3qGAMp6GAcCs7rhSJfnpv8NjuNWnspb4PNq1wUmUXxCAhQTtMx2EJYRYiuJGPh2YYmmMA3dsj6HbCs9tTVbt2wai"
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
