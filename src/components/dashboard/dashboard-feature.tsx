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
    "2Qgen6MxBUH13cfFHQzd64R6LTVLPErk4pT95B7uCnYFUoxh93igwX2Fk72enCgAGALLBvBjFKhQZsEj8qXKda7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pL8nb48rqHezJBam38vQCQuWE1HyyNVK3zFt7VEs83LnueyQ11363PJnKeo3TceBeDkjNgLa85KsPu7GQEVRg15",
  "key1": "3oYn4tdD5VP8TydjmyrHNv9gWDhDJ1rdBo19Mo5J2qHCUpfSk3S1Gh8771At8TBXSQtNNRW4X6exGctThDbuLk7G",
  "key2": "2NB4zsQ9oWobiMa5weqF75HDZgLbBg3paMPBsXaJaFoBB8TgktDquiksHoc69SFnWc29LeDUsAFZcRZhwErioXK3",
  "key3": "25SA7cFgCsgAwGFjmSExfyfDbgvvWkoq2mg242Dag7wDeADcEE9uG2ijeMR5Nxw2xmkjvWuEqDhMhhy7WdiCKVCV",
  "key4": "5fieztkMSXcqBwGU4gKmD4SHWJs3S9pdb59rgTPmpLF9X7BfC9u2JvATnRJqXk4GeQXf758c3Pdt14j9oJhU9yaY",
  "key5": "QFkMW79BMq3G7JBnQEZtzpig6QpvaEkvxAkHiutspSSMZL5myYJgtA1o79apnUdE693uBrSmXcyseob1gC3rEDF",
  "key6": "2CXrCQzHSM7fXaGbPzxhNSoqPNAmXhUbzBdBxNnRoCpnyjmCWMdAgEFChuCqqjm9rKj24GEhEqMV5MBk5CSUG2oY",
  "key7": "3fJ9CCXMdf2UrqAAA8bYYMzVtXy1mp3Bm7RE7TKm5SFFyH3S2FxsKsnk6qatTdg67QCQ5e9fVR621K1gWY9essHA",
  "key8": "2vbCH4m2RNE6cHthM4CvrLSoTJ7fstFC3AquQid3HU9J9FwtW4YyNbjaQPrs5BAA7gEQQ62Js48fSAuS4gNsGYsx",
  "key9": "21e7kUeCZ5mnBmZMXthrNNtw3iMWWbgqDQfX91W4juvB54PJpFCwfrrRcER1Vt9cNLCG4A9CGfhckEbhNaj2Qab1",
  "key10": "2ehX9HgJqR8xYjhQ5UVNJb7NUb6dPiW2xfMd78fSztSx4BR7Q88KN3jKKmCF8kXDRHyWBRayFFc6Xp5G5dvXUdW4",
  "key11": "5dP2UsLViJq35JzpDxPnm866CazTg74o5YEonhTJagkAANzk6MdVLiTvCahMV7WyYLBhYXyRtfzG838WC6putEEC",
  "key12": "3ktA7GdtHDDyCbVrDsER2byCKudWCkwUoHbwjCQ5oZ8xBpWHAhC5VagYBBJa4TWLL4BgSsJ1joLbSJQq3ijRpzDm",
  "key13": "4XGVdRiPEAuMSb19JrmkfxyCtJMRzECis45BZkdaJBxxW3rgALfwRxSreV4yjMtHq4MB5yNbJNtHbXjutCNFeyCM",
  "key14": "2ejyzaMPnNPeetCBfpR3QLinLVPMsL41xaGsJMmKHHWFSmrSACmib77KFDQ1QubkNBRAFzZaL4qpNxqaunxBbVZm",
  "key15": "2fwsA5aL5xTdhmZVAqkvggDbvhJmf4eAziBRb2QHeFar5asEtVgLMnKPJzVAdxvC3mSHusF6iQCv223eCxztLHH9",
  "key16": "32RydpQrX3nUsqp4gp7ThwJiYxMit1YyXBv4sh4BHhNqT7Kskrkn1CtejdiDJTGD7oSt3nvSoDA65HYMVyYLhxX7",
  "key17": "2hJL5DFERJdx7vtKCMuWYFi7ZcLDawLnTcEjibVJxAsEpi9RbT3Hb3GxHcTn28uCz5X9TmC5F5DsyvLVDxBhXsq7",
  "key18": "3ZVj9wwBjRJApm4mTuL66fGPxzoWApKhbbtYS2oyH2kVB2Dh12oEpshhqrdLRTz7b2iKg9QCMiHhowCzX91Hd8Xg",
  "key19": "2pdLVsRysLHS2Rg3pjMKgkEmV7zbeGtJQVf7S2SGqyXqkvCSpir54qRXgXHKAaAhhediAoTY2CU3PmRJSBgM1TcJ",
  "key20": "4TiAxX4tpupfVCxVyySz3PybskuS6QGyormKQJ7ovHpj4WPkaK9vPhdVTw8kQUAMMZ6wpHXDbvouaDPkLu5jZ8wL",
  "key21": "5UrBgiJ5Tdwi4NYJiGWnFDrfoLjhQ5BrAHbPM5Gz4kdwYY6kWfV2KTHjhrAceHiDAXK7e6G4i77eHon7VWJpaWvU",
  "key22": "2MYKQJDMLZP5bF9QKqGjyWwz8SSQi7evskdSvjELPJQFDrnsBunUEkEgeSM9z5Vwp6dMUXcGkPSu28Emd8gKkhp",
  "key23": "2TjSQic8EWFw8D1FsZg2rrqUMTApypqdbu74diFSTZixmu1ZqungS29YaQwappdgbVx2d2wz8TGuZkTNZbH6MQV5",
  "key24": "41E8563rZ82vMgjDHG4YstX9oj2TeQrCS4EBDt86A7U5rwcTgLza8RSTtRjneSoGQJ9XXbYZ53xwRwnB4ad5D8MA",
  "key25": "59ixKpAQWHufFGCULe6AQfY1gALktg23h39wtX3kNKSs49Co8vADUveUVGB7UyQmsuWLiLMtre6Ye6MSJNHhB816",
  "key26": "4cs54BJ35jdKVv1pXPwv3zVh61Vv3y1JRGYD8ZHKKWtt3F6YQpfbyyHAqDXoNjgwgBaJuei2dv9NdnA1KVAKakjx",
  "key27": "27SamQLM6uewReW6N4Fh9sje61uume2y7F6wT31bqnrCT7VKRbJDWhU4xPSfNc7wbga37CKtQ7B781KK6Qd7Bi7z",
  "key28": "2wuQGPh4qExNkwQr1FYaKyT2K9kq3CgPNZiywABUXASaQkg447TQEHGtC2xiu1Wt8znyERLX4tMKK8qpTahjg7iM",
  "key29": "48Yyb7E1r6rXHgz4foTAUBnY7CwPoyx71q8NRoay9XV7u5eTbK86U2qCDS8hJD1qmtz7WV4Rxr7KKSqbC2JYUKjZ",
  "key30": "3Dp1yh8MV2F9PUCZdG5qK6WbBjzLHVsLmixpi5yuTSvrkaB4cUR7wsqSizF7afLc2CgYnSiv652pxnvF5LdCG4tT",
  "key31": "3c33C3tqB7mrq3pHsEezz3wfwnQ9NpUa5twkDbfHwmCAdA3qi3axoCe3tjYqjuyp2yKpjWmTzGmKXmBzbmzQZgnY",
  "key32": "izjSeZ8ymfNQF9DEDhMUyiuV92CYPZ9GUwqfUgSKBBoFGNyDdPnJWftM6LSHwdr32ceanj6KQ71Mp7kTVJoE5SW",
  "key33": "jnvaEYA12J9oCtQ8Js6ZxL7GpkiPwcXrMqsNfiRkf7N8YMWtGNdNrcR9GjYinXcmUzvzbLZuY9jsN12MJLXkrRe",
  "key34": "ZuYxzjHjxhBbtXdiWTz5G8kD7KHxQuv3w4a7YAmwAhjU85KJZnf6Xb2qvXUtV1VwZXsqwZ55XC6qpQ5JRQib2gR",
  "key35": "55oJ9tJDRJRKd4o2K4GvKJu7ZHHraQGUBqmtrDcFosCZcvXKqS91Pzo2M9iFiGJzGpretWYtEPEqkovJKLqVxJpZ",
  "key36": "5AU63yxpbMgm9Tya4KFeLV5tcb72FEceVbzunurqvB2dwCuKzakaxs68PBKSzQSt9PpArMpCFX2Yog7yYRqDEPsa",
  "key37": "5w9SxJ6wbXWm2cBe5sTLKTdujn1Gu33gGmpCUgM9Tdx5Y5ptB5VJhpSQfjVPzTvGvNA8K29hY4FnZWAkui9GXqFb",
  "key38": "4CPjfHQmjWExhZUZzDhw4pcWpJrqsHDLhWtDw84qyGrCqmzNkCh1269QWFvTxmB1SPehKDGafdkeLCBRfHTYnZx4"
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
