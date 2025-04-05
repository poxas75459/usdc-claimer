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
    "5PQ1imuWhh6DWm1fN6qG3jHHDjfv9DXp2pgSXuc1GAnUZWduyxGTv7fzzW59shCA9Sbp4w1dYqKmT6zz8hk6Snoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UqR18EYNFKc6mfuTKqXRYhUT5yq6hEvbCx92LVs2aqFnud25E6ki5691Eo5oGpRaczA1ptQRL86ghi3Tyyo91ZW",
  "key1": "5bU2y4XaRAftfu6QBKwScexqwixbnrjDV57XzKwV1ySxo2uaf8knWmiCNPdx4HWtzZ5x39tPoZABn5tqVVjzVrNt",
  "key2": "3AFuST4xk36HJCrc4nZJBpP4HfK9z7BZgE61Te3ngd5DP87saHYJmJKxA8rwdLkLsYNvSsKcdPB68pzeNP21jfqg",
  "key3": "4uKWrCVPEJuf2H4iN5kbNG9M5k9XLBSu8dr67aajhscWN1dN6fXGgf54FtkVJcPfowCxJJqS55Ek9xvFGMJnTSbC",
  "key4": "b6zBBUBoXbZR1PfZciWwi7kAytiNJNksoMGwCn6Edhr9vkiTXtjFRmcR6CPrPWFfoQmNA1Hau41pHZYvHc25r9N",
  "key5": "2mwuFVxYQTToXq6CfmRJfKqtA9XoRbcoyvTbPezn6oDNcT2HGGRCWFU3VnvZyK1vA5Hj7ZexJqTorV9bvSNXaFqJ",
  "key6": "4CPHPpzfzHhwBZ9cvLWBuF1HHzYDEfkAbxdERqxrAr1CALXemDAoZzU9aUMaFzH9eXk8BedEvCGWo6LaxzL9Btes",
  "key7": "48VRDTF7xsZNH4rFXPNW4cWn8E36bN58Tg8sUHDbkV8cMB48HbJjAJXNU5sAgpRYDKReSuoURtTVL7nj316CXqGa",
  "key8": "4Bgg6q7mKeTw5hxZZdEoWZ6JdtDwX9HZsEFsmtijxFXAeegLhp3RS87NKkYXKvNRQc8qevSCo4v1ukgqFpsbJCKx",
  "key9": "5nkQCQV9dVcMxgBHUb5Yd2tgEsK7LRDg6VejqUNGTyVB8njThebzbWyXf569rpKxJYaPavtVfTDagYQtxaes2xvK",
  "key10": "4ZLgSmpMGizqiCNDivvXvwaquzdJZceancxxJarGNjQKdDTjqF2vt8Eh7Z2pyrrqnHdBBCmZn7F3jfcHG9ZbLWgU",
  "key11": "2vokvroTaMboAeQcz4c2CL4Du9L7cE9axJYn8urCoiHYVkV9SS8RKqozksJZJPwgAhUWLWsaa86UFArwxZSCVGPw",
  "key12": "jX25ijzk6mcCrKfRiY3rtM4UAXdKBv1PVJi1q5VpSuHSrGW8BPgVfHXy7RiPDmo8WCPkdrmGrktvkCPsN2Gxgds",
  "key13": "5YppSXXurmHbpLNgC7EMkXLxn9P7zmbfhk8TCJWsUcGN4VFgpFpKZpFtsQAQ8KM1uqzKnBQ8bsWEbfhzsJSib3t9",
  "key14": "2VqSwiz8g5wAWAJQwoSSuv4QS8m8o4ujD8476SXkBCsa2vXQFjMgRHrFVAuYYyrbFrLqquLNHZAnvR3kV1o3TAbX",
  "key15": "4axfZgJcX3sTJWrxgLeKqMhZRBo5KigYMP5uNXr1BXnEGq2HS7kmvu7uvjzXgWoDJZZYeYLXWFfqUqDU7MVhQHN2",
  "key16": "28vJX5zW6cDZUjb7P8D8Fd6iNharvFxE7UHoRAcGedJ87hrKCX9KjG1MGXH8erhexnTpf32zunNyT6e9MFj7g1DS",
  "key17": "3WfsJSDisiMsUs2zjCJG2Bbbks8oeyWsPkpZzSjQtaryxdi9iUk2HDp3r15r2SmrYf6geXzhiiRxbSQ9rDBQhADJ",
  "key18": "4pmVwM2tvaoZQmHthvCwJZZAmB9SagEZyjLKhACHqUzgcVCjSapZmp7wSD4UCGpU8TfUMot4eWfSEdSRi2jKQL8M",
  "key19": "21sZEiRD3ZM4HaNHqBLo2steg2qsBryS2ph2NdcrFaVTTnLe7Pi5wgdVmtKTHfpviUDoJZZYa3VWnRXPD6VtpMUy",
  "key20": "5EGMmt1CuaQZyTjeUhdf2tDXRJ2dBxNoybcfeffPTtNMu2x9QUrPiB1wkgLGyR7fXFt7yQJftL5XUWpUeEntWW8x",
  "key21": "wDpfh9o5V7BengQvbf7vYe5k78TcKKjdRxrAkikuqdbc24qwur8uLEms45rjLCJcd4o18RYvxbacoiYrtbMC7dF",
  "key22": "amS7NwAfDwQRZP7kV3T7yKbtKyKPxDkiEAgk6t3VkLaZhHRokC9dNKA8ubNHBMkGzALeHLwYchhnsHFn89zuLGy",
  "key23": "acFJnWaNw29PLGFDE4Vsh1enzHeuLzwjutAiNwAN9QiT2ZGza3yYpxEJu5kFo1cZe9AUVeyBMt48JgoDPnpK6AA",
  "key24": "4r8NQFpXGupmWRMxrm3rpgDZ4QtiJu5vVwCfLWkCx8S2AMfs3FQQG6pdmLc4Pt9NaSuieV2UQcWkq3KikbnGPhLt",
  "key25": "66fnw7DrHSoFrdhKMCXiBJhf25CeTJJUXAo11J2pFhjzVNBmXkpJF6AWkAjYHAfWduaoHNmxL8CEUaqAqCQqA2da",
  "key26": "4c6hUdRV2ehWwMwnK3tBYJUz1W6pxaLo2m9bc7S82JyFCX6cSPJ1ANEUbPn4QmYs2FXnSGNRH3kHA3vFFBZhbwiF",
  "key27": "2VsfFqnWHBkEmfSCHdXKYALvMFhZnUt7WUPyQJUCSQFQtZn4PDJrQhZoJBum2W6dANyzYznQAJcdi6km42Gj5xGL",
  "key28": "5RD1rRLRPSJJ9qSbvRQHxVF3U5JFsV4aZ7hPyC6YYC1GRDYBfvuSrDneZpMxk7aBvBigBywwpsRuPGT3EqtBYobj",
  "key29": "45BRXuskxRVrSH1grdhDNkzbRsSLA2LNmVhxeYjE8wwqzQbtUMXmEiX3HobzxX69ZeaEjCGnbJKBiRaJ4GqMeEUT",
  "key30": "26jxrB9Qo1NS9vKDGZM9GZKW7e4fPs5er9J5xKyvafHQjzD56udLQDm3TyRi1yiYWGLDrxYJRJhQxBBT1YmvFT9y",
  "key31": "43k89PNTTgjjUKTeabk6tV82JLe7XuTNKjhMC8u5VA3GEHxTZkVBan17DXnvAWWt8JSfMjFGCkQ1nfp1eHCJ3nyd",
  "key32": "469mCbEc5egaXd2YZyibNWNzdeXCSN8n8J4uCcsQtLoGfSAX3s5PqLLg7p8pCjmprBVujrs14XzCxnLCsrnTJTRm",
  "key33": "2uEWoPDVdS6mMQMhJaobRqr54vkMC6J7sGZsJ1oMvA5WmbLmXkXyE6BCA5wSuXDMiASoQzkaFV9osGcNfAnZYbg1",
  "key34": "4QrfWMXnQy4chx6dus3eP2vuPYQNaBVgEAXcCAZ3UuyaqGxgzXrWwgRQ9oYDqpPi1TQ1qv2CyxRRrK4CuKv1vZac",
  "key35": "4mhC7Q7mv8aT2Z1YfxRqDyihWTXuUHsLDatbR3t2BvmGYDd1JKbBZSXhb322FZqr8HndryxMcjkWzTZyEETiEg6a",
  "key36": "34Y5FSYN78e7F1xcQGV2Tj9s2m1yeitd8vXYxB96Ctc42VYZxbgoWjrtkUhZkTFW5fW1CHAVe8CcnKLzjzQmfMWW",
  "key37": "CQCA6EVT7ZVFv7ZLAWDB2nvyuUewu618xsdPykEN4qABMMSzASAWQ1XpRPhnsdsu5PhX94s9Ub7wshEGexMf2tF"
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
