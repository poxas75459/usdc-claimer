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
    "3PQWESg2vbBudCtkpD1HYaw26BCAJtCSGBLbwAx9ZF6hnkFnPN2kdikDUEohjYGKV5S5vZ2jjDHazjTJSxKMLWCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BgaHvGMRzGygPQLnVxDoZb6GwuiT57tvYfFwrzwnVhRSLAoL4m8MR7u1G9vENp6aGVVbJqT2kPnDfKwLq8ALKdk",
  "key1": "ZjiZ1SUszQA7V4YkGuf1fzeFBjLyWapNGaDd2s2p4Jv8UeDRy8KY1msNRhuqndADqpDqTneLHS7kNMp3cAdNvzt",
  "key2": "43ipwPAGcNisx56aNonnfEGpYYzCdTvno71CyGb7imQnRqs7MwHeLgft7LWC59RopSJp3HUALArtp3Pji8k1uP6i",
  "key3": "5dFitMYX3LHmYTjRvweiASogv4m5oCCPBEwCd1NnQYu2qkjU7qUqe2EMeUaD2efdgftbkTLWsYJ3SLkebqKZUbT",
  "key4": "2yAkpABQndCHRnmYpZkfzRa2319tJQJoFWAmV8riXzjW28adebYwjW5nSG5N1dtYe1TcLcAzCCzvq7wKERuS6j8D",
  "key5": "3ff1sBMhjEcBfvHS49vGUrYGyWcofyKxU2abxjEXT2HAcGoKDPGMjDbjEknVbLGu51Pp2P9z6wiojVJ46NMdmZgR",
  "key6": "3NFtg2F3V3X4VSrdebw1tFsnbFfSRHPmvzNKJBxzExXgMax3VNWRFd6d29mfqDbxRSyNjaoWAcookwRPA12t1KUg",
  "key7": "2h45jHQVuevGMVKdX4NzutaCd3dzHmAvBTEBGw4312AxbKDJ4LXXejj6ckiJzUDuPpdBuLKzhaXQd1jFrD9uc4w5",
  "key8": "3zCBBnK7QLHpeK3BZZtd5DJKrnPuLKn9GxM8n7j4gYQY1ER6wzvSVV5jVkwBpFStqYMBEWQfxL7ZUmUrvwHQdiPe",
  "key9": "3BhSR8rL6WMgQN7EyB2oZf8hb3XGsq9JVxouGeDUv6ZWuDKw17htHz1rmHZEpjASuBm5FvxdMyMgi5A7owxsV9AY",
  "key10": "F8neF63FYoZvFqSfY9E9UKrwCjc2JYoiiq3xcZ58AyeFmpivkPXgCvKgF5ztwvPHMzb9WChEitduZK5RzhzQ1RW",
  "key11": "34n9kKj5oK4dEYkBCEJttmQfVDrzUCA3oaqyznREbFtDy2jJBR8b7kJQ2faD7HtHcQHgnqn5F8aHQ5o2uM5gz9Uf",
  "key12": "4mWVeU6xc2BryJ1AomjciLyFrJwyCdpL2AYtX8zWi6zJHB4BLff2Lbj6CuzmRcv754WK2eyqDfVHzfdMfDxzwHjQ",
  "key13": "3YN8qGSm9hQGFU5nk9UwBmKNepC9f4u4bBuMku1z5G1jtSNki8QgbwqzeB9AYFpdu7G5fYwrmSCKBgQATMPbN7Vb",
  "key14": "6H6sdQ1Hgz2vCqXjyhaSCBiv8RsQktEW8Nn7YW9r14bMsTtW1jyu5pKwFEKgGxRVUnuTg2HiPB4qJTME6YYNmiH",
  "key15": "sj2j86VEYnovf9tYz2qAHG2nZjDGqpnyzvjMtrVoCujtss7cZGSex14L1zXyByyWSvvwRrnd89yqvDFhHZum2k3",
  "key16": "58Srdp9UdPo2x2ZNAfedGUzNJd4sGKuLwz8XNwCxbFeU75TswoUZfzXWfUHU6fkBnmBAn8PsqfFBoT6f2G6s8ZaQ",
  "key17": "2bp9zkFij3aXdDZ8UCYdpXAFpoXoYo3UNLjszhcVevdbpCmwCiTNswX8JpjMuxyvUYqbjJeN15NB1bGK23Mn5D5Z",
  "key18": "4XFTrerLmQF2ggN4jn2AnRD6e6epBiS81sY5yqpPstGmW86DF4RRbxwG2B8Ni81WVHML9mjUrRi9oUz7C4w1XFyK",
  "key19": "39dK7d39gRNVrjtT5s7JteQRm5vvwAJrwoTnyijUDvJeMvfpAwmgMNZPWskC1UjyiUvSW5VhucGKeHsC8TZSuH7F",
  "key20": "46JRseAaJnPja3AVQkWVtzVZ7wodDFi174PtsnmXpS9uRWrTVUCM3h162bT8cNggBXcGwSMN8qQCXa6MtLPtUfLF",
  "key21": "u4eiB3RhtqM3TUf7b7VsxGtaHboFEMgRbpKDfMaxTfRHfpUP51jasakSdy7v5CxhuJEaZTahqvLyGxkMY8jMazD",
  "key22": "25k2zzaGZzirTaE7uPNwmV6jcDnmCNURayNBtoXkMmUCfWKtnBYf2VnnLGnsMxf5PTvncortZp54x7Ckaa4wfExY",
  "key23": "4SbYCwB39QCZMY1WBuF8e4SiirCGxd9bpnb22rut9mAbCWKqSsqTZfrjEUxh3yT82iHK8aKAM3qkVnqvsepvJ1WP",
  "key24": "4MgRmo4WNydG6Lx9V11JdzHgrL46wGrRSBPuwfSbxFR3azpD9bCAH9EggCZhJ3AA7hv7TgAhTAYTsNnrsT7esdWK",
  "key25": "3Q7ThFaVh3UWSKGPJcdnHG43oR49MEtv5W7AUHK61UAiybWNMQtAeLnNGrxmj8hiGtF5vkfsVSezrczyorRpFsTz",
  "key26": "3C3d1PK8T9emtd9SwZKuVZXzAn1eHZZd1ZGx7SXL5sAPTt5nWZhBAMTJABcDEMvqM46EYmek5n3MKNubHRR9u7ga",
  "key27": "5P6M5cEzWbonjkkDysNedjsoazztGRjbBScGAFbtS1quBFBkT9X3U8ZpGATehkaKLhvjfrVuUBGAijsVBcS2eWTd",
  "key28": "4FDjcXNYLYmfh7jPenGgVBwxkFyR5DDwUUsVFnLZnXB9Jhf2jM9VoWFmqTxNaR3i18bWCy2QNUMUttKDhweaWvsP",
  "key29": "4qhoNvoUgNMx4Hqv2d3bUnjsQMqA1wDD1mx4j8HcdtNGfhQyQAPewhVj8om1m1am5HQyaY4C3CfZ9MCdocDWWsHw",
  "key30": "5F954NNkYrLsQJZVAWaFAghnnRjzZSHNGpHt9r2QBrgVzuivaeKVD3TsmW1foFriMRaMq68j4Mf89TNLaCADxZU4",
  "key31": "5S8xVVn3Tcstq8hQzprVUgsqjTS92fGZeHhR9CaZzZVybLZMJSp7Zmwi8hPNv1xbJ4wSDNfkhJb1Q8Tv6UN9J6qW",
  "key32": "4LGbzkBVtTkvMUGsLQhgHnUEMRWVUmcxsc5r3Gz4EZJjF7QtsDGE5JJBAAqhrp5z7nTZHVmfjMa4KHs7MYSuG5ky",
  "key33": "4QdDrVApa2wP86R5x3zq6ZjApNF3FcGqmY1YJx7ptp2djwNPaM7n7H6gs1d4A3bzphuVabGdf6vKYb71jx5C1vXa",
  "key34": "5tGyGVjNbEPocNqXY2qUjApT4Sy3B6ZSEMuRj2NAAkn312A48jsjEXJh86UPVvp32DSbtDdbTqqhYpqTtHHkNjU8",
  "key35": "4CM1A2NHWQvTfqGroEQqpPSG4pAJcobZZMfWnsnk2CELfS1qU4R2Spz4MUG8xhJ2WXMeKkjciVoGcjxS3QL3d5CT",
  "key36": "28DQY2iFWNdNvq4LsHJfnrQ2TNiteFSBBBh3vtncL5rJBSFxj6YY9VTkkvqJLoJ2rSvrERFNvaaCaRGs48jmrizN",
  "key37": "54AEzCYd8692FSKVzYFLWQN12fc78v7PJqoG4uTQha6jZdYTWMA2PSPN9Jkd1oBpZnMTrY7CYNMAN8qEZPiEREgz",
  "key38": "4rPw6PundR4WgEjtEPQBP5fp3JoJRGKNBrCKR9iEjL4EaooHtLA4zWdMckRqXLyNg8tHsCMvczcfGaQS3uSuEe73",
  "key39": "3i7aW6KquWisD5z6Bn68Q9nZWzkzcMJQaJG6o567e6kVyau7NpFEJ5YHdc7ZMMD8WkdfVMZF4ENwLT8MorkLpUKJ",
  "key40": "3JQzDxvRUNcAFiZ9ZV8487SRXYLA19riWJotyccthJJ83rCN5Ue7oGUmyHxKFB1pt13eFPXtXQZkMCnjNVsNnvyq",
  "key41": "YYzyqEGvVGxe8yBLY8ZBrAK2zw7aAZJ2xeXGBvgbpMHnWUQCDaH8jvNzKBqQqar4fzbiaf1kSMxxe96oBCoENsv"
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
