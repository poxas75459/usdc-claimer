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
    "35jVwe86jpQo1Db2HqJKjiyggkHUF7MehY26RZBJFLQFGmNNedKyUAfBwzT7smdTVfr7W6GCmjmT9wnmAJJAn3VT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GhB7QqkbeJuae4y9sdkLiPMRGhZfMAhMNbKVYQCFezMvhvTjTe7Kfjv8jiihx6GzdM1PC9DeXBgV3Jm6PWGhzdL",
  "key1": "5jr8iBv7Wgrn9uMUAKfUvhuXMEwEAqS3jHDDh39oJTrBqBznCCU96nsqE78t4U74D6VrKmZf8MFehThUoucqB6ie",
  "key2": "2H9Bs2PCuiLsK5XgTAmauvmxcMdffQChQi7pt7qva2gPPxzpKrXVjXwbF4D1NVUPpWiWzCLGVXo3zCuGU6mGaU11",
  "key3": "2vD9Rs634bf11Ec78wepCZAhrXgXhdXYzVwtURuyDQa5JmcZTTBxTtUoK2KKPw7xybyVjUDYeMeFU8wFv2JXpsuK",
  "key4": "Jm9RiMtqzAyuSN5CiGqFDeEch5v8BmrXBqtt38QzdAGZhJKBHNhN29ahpT1EU5QpCzSeo6U9AjbRZaR6SbBwAco",
  "key5": "3WyXZ5k7H4gtoZAFNpzzLQZreC7gF3Qq4uGDxDGGRGZeR6eXEAp29m5XahmPprdMEeeXBRtva7MDgaLSdwQeYJ4Q",
  "key6": "2LSx8CUKyEiEZaRD4adT982yjfy8KECGxFq2SYtfPH3URf9efwrji4btNzQkiTFbP7gYmgpBrF3qWzre2CBVzA9h",
  "key7": "46ZWs9uAiVgqJpX6dpRaGGMNbZgA1fRFuyhvj9nwsGUDUzjoXrAAVPE7nyATdys2AvmL4uE8135j6CqYvrcByqwn",
  "key8": "57YXaNsyZJZysc5vULziqBiCkCygHzR3S9LS7vqfjneAvAnfQ25uv6Q7ziYEFTjRPVccHmTaPaaSbM6PNMDtiN8N",
  "key9": "5K1mA7rqWgoiwiLoHwLwBi2FCJoWp5rju9d5VxjKU1xtdM6H7hBr6U5cCAUc6zfwQq8DYGzv9resK1BJdarVgnSE",
  "key10": "2WJsiMCh7JZegUbyPwdWyKzEbMDdBXphXvpNydBsLWkCjoNQmf4fdvuJkQQME4KKkXffqAtBaFFndvY6etCPQuJh",
  "key11": "2FrWBWVJvmga68wzLXM6KY3HHubYiJGbUQQ5FhKhhGjhRP71EEMjbTwaAArkW5yedVCJ4qVMY7Akxoy7SeWog4dA",
  "key12": "3WQtY44nAZjPVodaH76ypgD46BZtF1j9SZ3v64kyWCd7rvbpUowBZvDXmMCY48WfngHa6SqKWHQeGeaKbK5vzJAx",
  "key13": "4q2YBS346FjYiMLGaQSLEf7LustdkmX9Tnr3zaAQoqrf3odbrbydDkhx1CxRkv49dctAV79F8MqB45eWM5BTBPDv",
  "key14": "1Rw6CuzLESRTRWZKx323wNB7UmaP1MVMib8wHmoJ1Z7yW2aftrj9sqbEmvAJGZWQvJaNkXNRb3PvYkucUS98PMU",
  "key15": "4k6bKMTdaDgTEZ7kRC6NujuHEv174L4E9KrTGM9fpQmfbqMUV32jSELgGEyMzALbShxLu4yAjArwPdsQcoda8NWn",
  "key16": "494DZsLh2z6pgq3b7LFHUmQVfbFM4EVW3vsh8MFzQwJpnnWjrtB4BrC3ANx5s4NLaR1jSNxMxQm9ZzXtZvutdrVC",
  "key17": "51ES9p6jHxwp7TPPYqgCWERK9TjPtTVDRV6MkZXmGjRJTuJF1Ry5hGYmJXifEyLUdpZZsimd33aNT5eGwQ7Hy71x",
  "key18": "5QQeWURShpX9kr6JP5mLRfzENfhAPz2Ra8whpcxWWZyGWzMGRiYr4pFqXdmWwFefG2uk2zC7yAQhwqmBePhNDgff",
  "key19": "3CWCe7xvnWstU6yQiyzhRMUKDrrZJMDVjA784H6HHBdD3YCdUXyMak329ov12RLquxXoKQqWd6k9p9JSXn2do5Bt",
  "key20": "49v1BVnjBvmz39V5SpCRcZ8UugsfY4nAMVXQiZRWPaGyRqub38hENrQT2SSDFWEGVdm3UPxbqv39sm6Xtxfg6fZ3",
  "key21": "3obwwfFzM43QUgChzM3hmypym5dnprwvCUFFFwbvFHVdv32TUWWuVT5F42smeQSSEpyUqcohpQ87VHP9es6Y3Hpg",
  "key22": "3eWZWkEw7Yfa3cc42E1AKqFF6DooAbxgtH8Pqfs2Z2JXAp9p9gMSK7qrYri9drkvxwWu8LRR3g7W9cG6Ng5dx4ct",
  "key23": "dXiqyM2LR1CGNJBFYpgfFWhyy6adTi1AuScxYLmfakg967wrBFCHEA7qSa4kVuQb7FhKcfvpfPajFauSSE61vVi",
  "key24": "3mxp1PHdwWAhwP7NoGd2ofzPifg2GdD1Pf4rcm9FPKTa9N3tYXxdytrGEHm84GomEVY7EDuVPWQgRtk7h6f1KEHa",
  "key25": "67hLAS6iBV4NW9UkAruzA5druG1dhmoSbS3LkDShTw4vrR6tWcCaQtJvbUtFxJr9bbCBFtVPtsfR75DqjMnSoZtD",
  "key26": "4uMhxMJE4HEzhohW8HPKA4WuNAU1BmSb6QPPEZewvts1XLicuH5nEV7Bk9xbYxgg4M7FqcHMfktAKqcVKUjhHasc",
  "key27": "3MyJtK3fNEN1Lobd9JZLjgQZ14rDYSJKTKgYW8LjBQoEQULJRtfzuYu24KgRFhpAGSRBtDaDtLHsjk3et8xDQxFF",
  "key28": "2Gxm3uR8t3tTMrZvc32jFhyKLzzVy1sUnMSdycusL7YUje85D3Co3m6Ghd5kACeyCRQN6M4qLQVvwjF6fiKPPjzf",
  "key29": "4WBoFC4HgoyboHC6DCSSBbbbjKcnSC9fWr922zrV8v1UqvJ3cNdqfxjwj2C35JVeVvWAB3bBM12KJNXJHbBG4gaz",
  "key30": "4oiCN3xjCSoUPinDdvBLCWq9d6YTkArksQ5zMmbMBkwEMnhTbjSYBbscPPUkRBQ6k1GrSHDiRqUbJQtmTk6vw88e",
  "key31": "5AHpqmLzvKyaE52AdQ3teT29J62SrEJU4oPRoEUUi1VFD134t82YJFCLyr7ndtqzwsr8jXtFZcoQihPMAn7oxFEC",
  "key32": "3NMkeG7c1oofRBeYinMcixJRkqBJmKBtAfdnaaqejGfYXtfPHHQPws4toheHwtUkpdiWee8kpKpGcNKHqzCpAPg2",
  "key33": "2vgRtGeuwXU5artRL5LouPjcW2kJbUvrjxruMBWGwsQFoEpU2U9DBhTt8bSMCCP5ueMtwJxcQ9x1xPqQ4X17ghGv",
  "key34": "2a8kcCH5cNVgXpiRs5RGp2y6XJhixhGA6ErRv4Phqwy8CMPsQLESkYTXWjFrJWGHfyZN4g2up1ikSPKHuBphjtTA",
  "key35": "AeCB2rb8oBmTJZmkTgPds2ZmLefacLkTvq2oU98o1Ae96pDoY3pJsmpBZwUrHRkoKiHJEyv6ecdV9SD6aYGLPeQ",
  "key36": "RMFQibiKLrZdoNQaYb7DKejESzfL8ahcrJxHxMdW8PZfUdfaSicEiNjT6gjNYDyYsQufH6QjSm4ERtJT5Fa9Gf3",
  "key37": "DPt7hw8gApcdJjRNDtUoHVQ6f1ub8VaqgMq5wn1NxZKwAf8YBJLZRK6TdNJrJAA1tWvSgoXSeHB6U5Fxhfw7f5g",
  "key38": "AL7X8HMbYTas3N7nHbb9mWNT5sSqm3pGLCAR7pXdiSpAyH9hjCLDZiGktW8Ssk46mse9jVUxvzyRqnFpUTGFJ52",
  "key39": "3xPawTs8kNmfZ4ufV9kRiAFTtukG6hhEZXRQC7w4fHCkvQ5832ev1MyVQE2XcaHSwKozatxuk5ABXMnB1S4EWkev",
  "key40": "3cgYq7yUS6SVxYV2Gh6vjvCYbGPxJbsX37pPj2MJE4SGcZ4DyobEeVJy7CL4jWgFU9AaY4yUNCbcJ2M4CxxQV8po"
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
