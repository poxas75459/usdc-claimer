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
    "499ybSvPTKZxWPSdERajccUk84UtPPzorBw9LfKR5FmrC4vH8eW316uCgeuP7YSa8pS9TAVedzVNNQ5SduHsuxBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CHdffxe1QwgpyEqkAvNyC6gifsTX9WWwvNhFzUEcNi3p7PDUUULC8bR2hi8PvKBoo1jfGP7MxG8U22m621i1xnB",
  "key1": "4jERAMrMadRcQqMd9qqNovKaY6xUBbDFLoqcKYeepk5xoLYPhy8CHrMZ66PqGs4jSEajeDALxPs8L8wYaUPPPwt3",
  "key2": "5DyrkcHE5tDfvmuGuctPTbAALCCmSTXmbem9Kuh4ndcGwcR3aNjyVS84sbtBizNdtsZoqEDzSGkZFwXCSjKjVusf",
  "key3": "5n8GdfuvisTFHLtZhMbUNMVE1pnHkV81MBvexCJnPkeWqJhXTGzzLSHzDrmqNp7v6VBgQBzWnK7wmzesTSxPWrxW",
  "key4": "3446XhHKw5xkPpFpZ94rDzP8zb3N49h8y11FgS82UsRB6cZcAEmVPPho59QWkAYURVjGm4JgwakQkJNR5adV3g6D",
  "key5": "4JtTy6p5o6J49ky4NnJwnjBbAk9Wku6VcSKX6tJGurojermtbH26CE8Sg6h43z2WJdR78pNxYqUo5mEqhFeqzbA8",
  "key6": "34Snh8PFgnCzq8JKvUijRgeExgnkusHFMckBbRnQtuZk7F1AymywA9nkiRjw6zU5knu6CvYbpn2jpJhHJEjvTwYq",
  "key7": "252XY1yNJpNV7vSVsrHyscurQ7nJcb5EwJELTrUq7bqyngtTfJz3Hv6sgNCDgCi7jgcYqYUMFwWoWCE2h615dNFZ",
  "key8": "3XYX7sDxobZ66oXizsuCKqqkDabLfShZGtTvQVTLnWDMTVniKFhSHkyPANFiXbcNDygFNijM4nCygkaZWJTMiUmN",
  "key9": "UrUMapyXvzra9mkbgnoKK1FszePKCcPPybbQpF7YBeyiKvx8GhuRGLeBxGTNXspXWZpL7U4CNvSC5xTKoGSB9nz",
  "key10": "QFosPBdBLbvKjHDTraMX5rRToJtjttz2fgTCcymK1EEcYsNGT1SxSZmF5qYWsi8WP1uZwrjDFzoDJbEJRkyrAAd",
  "key11": "3T9oThe1j5SMJL9MKkk19gWFDukFcWbWqqmHJbtDX2W7JnhbBqnJ3x7rtN2HpKjr3b4bNoHFYDNV9sU54ZerbXWJ",
  "key12": "yNK99QNE8dVHWgGFoWypCzqPz1zMTWcqG7kct76v86xTwFsi8SFHa2nHBxuh8hUrnxxWn1LdsvjZCyJerqGGfpW",
  "key13": "27k5qey43eUKeYCodF8TTkc1WwbkD5d65ppEawrXFLH5Uh6Bb5CKbTiBpc4GCzvKW2gA3W9pQ4UFcxCGKfWUsACJ",
  "key14": "61xvXTos9epGf3BkbbJ2cECvmrmfruYvVVcPMduDYsajaaqFr2QpWvHnPSJteBSHmgmXvjpg77Xwa9PGMjCq3Sxp",
  "key15": "5M3ecLhK996AN8AS8w8kFsd14Wq4FJ43Py84jyJgRSQynDd3dNnH4divePvyscEaogMNV1KDByPRhV7YWnKH9RC3",
  "key16": "2CfXyiLbZbZSmSwQSZH2rjy2FJfq5hzv7f5VkRoyxDZLET2pbEf5hzhodVtKiNPXMQvHVk5AEThmx4KwUiXHC9aP",
  "key17": "2ySBBQz7GPjxh1pt8mUyoaTWnEuC1dkXjgttbt6yH2CvvSF9snGigo8vPS8YMK8NrTipW6TzSzPApJ1pTZvkw23X",
  "key18": "mzq3uBc5NpHcHsiNRJeSJmN3AskJSw6sxU2LTiTunbzyZzQ2ZAY8DDpzHA4KSULPjQjtg19qgR3XgnJof832LyH",
  "key19": "SWZ9Bv6Y3qsV35tW1iK1vjVpDUWFa9GcCwWqR4RiQpmtyEf2g8vs4cyqCAF3bimsRs4k7XvYtF6o2FgZ7kVhkZ4",
  "key20": "5qJc5FNSc4kAaK59VMcYmJQJQU81frqKgNGsdAtiakS6tRgZ7CKMRM18sf8twzd7NpomUBMRYigcmmhJrgLQ3XUc",
  "key21": "4f4zKD9agX6YAcGJTL59TeD53hCpLMfdpEgnBNhnoCau3PW54Jg1wBbNgQBJn8BLLhMpU8MZLMkwDztPewA5P8Hp",
  "key22": "5DqQ6VqYsJKrDVXrWideRmgPUf7w2mWapgLxA9r7agZ3AFPDGrALQVPUvHwDJ1uA7YxC5KVByzJkEFuKe6nHQsw",
  "key23": "1B59QPoe5b6Cz72vXVkqGCkhaZsZQBUVP1UaAS92hgDKH3fZUKpfPUFkuu31bXHZaY7pkZhCeAECsAVUCAKNg82",
  "key24": "34n56KvEGeZdPZFYw8FHWwgeRf2enCXt8aQeZx87pWeigZEXc8izG9VGRsH1n4XsMnMNgw7NXZcPbGw6oHBmZdiC",
  "key25": "sbdoY9MW3iigMyTMCJ6KVTV4qmr53HpsNsh6TBVuTd4zLo8sm6aSwjze3hKPQucAEoaxojnbbX3TTPpg2TdSBPL",
  "key26": "8w4VSYnXH3FQpVHsKTnMMdwjjGcphL9QJYBaRn6iE2p6Uq3Ku1HHwaDv6UnbRhAX2pQoPTuyQpTHpBznHra1mAQ",
  "key27": "2hCguLjikJP7jiYo92zG5fBVEJNCmTak1obcCBcCDjK2WL28d3eroakAd9DhCEaUV7GMiHDbDhekkujHEM5MhZ1Z",
  "key28": "2yyDdjhL5v1pMw5tebewTNmKHmgWKdeq53svvwrV35BqRZz4XT36VEHcsUYnyYfzRB6eMa2mTjTehRJMXC3a1maa",
  "key29": "3JH7gshUngyYhokcTsCb2ds5KmuqnPqhWhuWNbdYpK9T7PHcVYxqyr1LdQYuHtiMmsN4d9nwK8W6xJGjWqq1ykTc",
  "key30": "5U7RaPT4KUxYKW3EeJG25hatm1QPrtSkRaBTQAjCoayFh2FRbjnkxQQbxBKvCNVJiDen3fMv5pHnrdU85rLRfyD2",
  "key31": "5bH3e8Bw4TU6n99ff5DdQpMPNfdTJP9Q63C8hSWKVRrCuZc9NCxZQ3rdigMbSCaimjDBbe9YHWa5gSFETf1FehkP",
  "key32": "2VTyascJqmuobnimFgfYwm2kQatqwr8r9SQSFGsHu9TXi6bsgwKajhdxHjSLzSjmDSkjLkLR1jJkCwuqhEeMdWxE",
  "key33": "2jjoPaAGna5yGVSZVoiZjmH99V2GrLz1kdUnABnhCuw5bgHAwBU2DJ4C6DjktDeiG3woGSq349wgFok8DrHUQijP",
  "key34": "2yNtPBFVSGJya3KJaAMwUbJ5NtZyrp2BoZmXoYHiUbGX3iYmMYcQQ8U6RS2wPXfAnE9yGSw6YYMknyexDv8Z2DnH"
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
