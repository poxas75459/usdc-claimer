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
    "24YBJK5fg2ZMjuRnpm8RUNYgqDVz3cFMiXaqFKsLq1XybP4J4TK18GsGuVnpVffvXCduP8cFhhsNeq83GRj6vbJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bmXb6Y4fqLkmWzp1EchLQaucZP1oE5uvUnKpzbUYHPbF4gn8rwrD5TScJEzpCViS8BXh7gu6NGgJv6xa5GVf9vw",
  "key1": "4d7X3hgSJFy4EDsv5dNH6Mj7zWQXTUjgPit9eHaVAtaHgf7YCtum71xmAstVUJsZHY6QLj58eggf21gPNfS6SaRc",
  "key2": "2XfrtQXDnvXE7h76yJGxAY6WijfJuY87UTTQL2MihACjFVqnnDYMBk2Y1Legr8uSLsuxPVWSeootnsARFGANVmyD",
  "key3": "3Dg15nZgSV6rfp3ZPzhQjh3GJVWYcHoQxJ72RexZPxVcN9NXn45XfUD3oTCa82qU8srfLgrdq57nXC6u9i47UPBK",
  "key4": "2P6PC3HFZ3DKnubCVaEb8sbnPzUcRQJWS3FZXSsfNNwAQcpF2obza4GLFNKEgWMQSULNHFJkmQT3aoJsrZZQi4pP",
  "key5": "2J9vXpgE1i4HHQeaZZmti8bhmgFGvTmNZCPwxVaP99vnncfZx58EHLhxK8PgBCEFhJpdyRQPTK4kH7fkpoWEXonj",
  "key6": "2UqBj616zbrxwdzTVZCSrkugsxYhWhmm7jdDNqzNKAuhNYWzJyd2274GfKyoLAf68KEDTfs8MsEGtZCb32anTPyh",
  "key7": "2rCzNHYC38ngYm67K5Q8emECBUhsZroXt98z1g9y23pQQSTJbXKbskTa5h4W1v5YTECpEtWJGi7AN4thmjLV2Ldy",
  "key8": "bL6ADaaFRttSv1SMQHfuHiKW2iCuyUhfJhsF8KZ2R346kWnTfCzW79Sv3yUboZG3QhwMN7kSpQwPNSEsTxR6mt2",
  "key9": "4QUDvUAYBPSyZXxzMryUzgtDhd5z1nk3RuU9UHP4oNFPkC68xsjqPPXov9mgFeKMY1ZJ5NrP2Y9RiEBv696rgRxM",
  "key10": "2BZD2Qe5Lm34TbsaYWxNkCnXaaYWcSwELtRjoRnhQEToZEoCWH5Qk8ejUrHHBFFNdAw5Qfx2BEfc4WbJkXLKUFEQ",
  "key11": "3Wp3uwrdiji22SH9WLjKdgCRyGRUQUmYxWEsJ14qoMsT4yhzPdv3ZsQk2VnmjWSgMwQP6QX64YtgDuhosXj7KLPC",
  "key12": "5SFb2VkYPJjAmTuNTUV3xWxPVT1qoWD57GMMqskek87NBL7RLN49Wty6tNkPzcsrJTVbhP6oeF2d6ZHL9UVEDdE7",
  "key13": "x2hbnFGo6YYaMWnQF756WtvGAsihrVWDMaJyPEhFhoHGDDQFc5TtZb5k8xwHhqi16PXcFp2g1f3F9136AQeu321",
  "key14": "4L4aQd8jZqCbSLQdPpZgC9e3QAn7NTmj9hjRWnopxSS7zdsQqcR89yKS8UfaJgxJWHcSnfKsWpD7T5oaRjG76GF9",
  "key15": "3izPzrh5WLsC5KjVnumwHpxR972V4tND1kn9ahEhjbo5hVUFAXhSWcCwQGN7JRHsWmoSSHggQ14FM6SejKeVqvPj",
  "key16": "p1B1c2mJEk8rmx3EYxQAHMSTSmHLb8w7sc97RW2bFqLqU8ZhsQQ7VDVQTyDySuNLCggVFvSaNHP8VcNLiiXTzAu",
  "key17": "1xGbQJa8ti52FCRLiKJmuUzvb1K4wH32u2kwh9VTqmiEvx1KC3SthS6BdDSewTPikggg3fhQEo7iH4BeDoFD8Z5",
  "key18": "3NecjQDKSs45Jeb2cWp9tqCxgMvVzJ7trcNNfBW7pqMNLnSLnwbiWxpYmAzsrLdFTMPn8cjQoCRGPYYd33gtekMR",
  "key19": "3ubpNKaPvx64Qqc1hcjgB8Kc5UNrViCJxZfrTGonpS6twr2WyosGDCPcsbUtUsg6Z3QwL3Z5o2VjNiEvoVYPM5Yc",
  "key20": "CJa6g1wkH7xpBvqoDmMD92HLeiG3m3Y1rk7Z5f1YfVDbsFWbMnAPeofKg6a9FgJRj3UNS3Z2xLBeMhg9RL3PnJ9",
  "key21": "3hTMYnQGeftJG8jyXBeLzTKJhd4F51XjW1EzJYWXMNeNcM2xLHzZHD4aHvtjuedgLHcwamiFiwzDrhqaamtcRDuB",
  "key22": "MrndXwDJuKM315TXuVSKjuFBCx8NuotdVMUZYTNykqNEivGpLLCipzdcSyrt4nxkZEUmYirQiruuqkBRAfkGNaN",
  "key23": "ehWDUJ3r6zk2VX81wfeYLiV9T4vRih779U986Kp2c4jJpCSTkCPdkibrDKX2ciQ3YsC2ETRB9Zx3x1guz6LK7QJ",
  "key24": "4grv9fi8YsaBe3qWoiHM23fZ28G9SMaK1PZxvsGhwrhRfUDYHNM2TnKP3i7WHbw2H3Af4LYnJWbnoitTu2ggp4Lu",
  "key25": "58AEhEXDmpRdVEcQjKaEY9m8Nz24aRsyALX1B3hJ8XqhXTnXtRKurJ9AaAznwaEmck8VTe7PJ7C2T1c61b6MHLjK",
  "key26": "3g5xYpbrdjy16Ea1i2WX3E7GSH7iVK7EmPEMy9GLFsQ6avXpmHpUwHinU8C3eYfYjGRmUX2kL2nXc786epSezivB",
  "key27": "5McmauzZ37yn5JmU5ghwLbDyWsMHVK3hun3kMNcgEZs81622ikpLSNqZ7tFtEAZHrqgbJyEfaut4Qd5vtdTUUaQA",
  "key28": "3tDq447bDdzD9AT5cEsVsnxDbgSdSiwrq3iVw4qFiRZg6cmdLQKsF54e86pTTVrRnwknuNXCib3HoDeh6bzSUZ1B",
  "key29": "3YudNqHFLhFE8j4LtMSqYvwXSqKkLCNuXeRg6AqHms6Jc4n7XyKxtJdDKuYmKNmbfbLNaXLjCwvjK6o3Ds5v81Nb",
  "key30": "5Bcz9F14Xj1R8KdDW71x7N27gCxnGw4GDS3k9pMS4poymAeQySEekSgNsJQ3kYmEQF75mERUvcBQ2EKfFPxWkjYh",
  "key31": "4Bxv2yBgHaef2vDMSsfUjxGKFfwFywWaNbVDEy4NMPrksoHmcRa3kgf1VBbRTBjAzQstfPD6WNYahZ2BgRUZro3J",
  "key32": "42vWfZ1wp8dXrbi5XMTFbNMwpZdnunETdVDwFG9Yvtc5jk7NnCnEVuiovrct3a6xdGjxVteYDcs2WxrVHcQqEm1A",
  "key33": "RWepkSr5eAP6xdCU1Cv2F9vZGLn3tyHwocVm7pWaxYNVQTVhs6fe2vGqdMj7VFKH4everXnaxeVfkXYW9WKtuMm",
  "key34": "3vQdTDW5tQ5J6ad6C5ReZV8ACwV2maRE1Gdqqyjtuf5KYJmmNrHyn1qBJN51mFybB2DbcDFjF17UwwZrSvvQt52y",
  "key35": "34uAJZb7DQyv7gERUU4yekhL8sb1CKzxEWoKBq1nVTjHaGqJLeeHPnTgwKcAWidpEwmT2LCZEficKFrV8qqABv8o",
  "key36": "31BwAm4aMpArYfaTcMEbFomCGfQNbQWBoXrWTS9U26GQrmHDL537ujy6yWRBjRBbzomuzhC9GWijR2Y9UEsssHrB",
  "key37": "yXtcAyWjrLJuwV4zXBKegLDx64dSB73hpUKQasCtkbNXX6JcoNKFzWJ81jfLZehstfaDHGJADgPJjdgZrRJHPAz",
  "key38": "4fVzuB7FuPRuPiJqRsNaX4srR3sS2FHfXZfYpjf2Rb2FD1oGx1KXwtSGhBo3mFQpPTK5yt9pgx6JKmdD7GATVSUr"
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
