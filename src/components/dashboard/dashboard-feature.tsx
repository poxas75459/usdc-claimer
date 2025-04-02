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
    "4QyZaHPtnsjtQojkF2ZgCwgbguSpkvyQHWHeEy7c5wgoCJGQqKVmb6UgS9LzqfrZhr2ZWh3ZDhcWM6JV7MMJ5W3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3asxFQRh7NWEhNHXHLUTL9NVNnCtDnvXvsDzqmJmTzH2xtHtLdQ5dZNzNZZBwTAREePf7qwdscaunbui7knUKBJa",
  "key1": "QbaeeV129KchXCM6TshDvZraCmo11jui5SpRaX9gitvXiHL49co874VGsNC7HBKzqVSdRtNmhKNpbnBfDBSq3gV",
  "key2": "2U5qHWZaMh6PKTjDovSS5BpBW9a4gXVEUYwxPAkz5uaKX5DUFDWs5prM4M3NVbA64oQvxueJYNG86ZZvCSeUpqAA",
  "key3": "5Ym5gpuLH9QPiCWTohU8hVcnZx7bQZZMMa1HaJWswnammwjSqL4cmjHNAMDdb6WPZAq1yQHsNdVLTwCXZyiXwkzB",
  "key4": "YrrL2Hg1RjbECt3L3pLp7K3EotWU1HoK89ZeM6TRWzFocA9WCyjPmjCgaHyLHALVuRTRBeh2wTpRjs8umQGjfGx",
  "key5": "3snViS23w1KAoufvxwdoPQqyNyrXVorNKGKwyEGu6E6NeSzS8RQaDYrrmyZ4pqDXsxe24tCTBFJfPTQjSpMA4WZg",
  "key6": "4ApBXpZPQLHYcXS5MBWL33Fy9FHVg4nVb1WqPqST3uSi7KiknjLYkY7oZ66FP5kFWvBfJ9N792dGbRKx5FD4YV2B",
  "key7": "5ctDWTpkp6eHqXv2Yg8tCFq2CUfxbncqYKuXhP6wrQ4iuus5bLBuvkZq1GoFSAZ3Du8FzEU5bkWP6vaGuC97owco",
  "key8": "4vo2UixtXKT8XxXQQibKKCqDPaHYTnqvPvSzoqHhK7bbtN4mzzuCfd1Ge8LvE1hiNdK8woLGqRe9gSExeaEEQo3E",
  "key9": "2fQj9M8pATCidJUQqKjmvQ1ho4hBrHaFaB8ToWYpD7qjDpmBL17CQLoSUsDa1xvZZUPi5v9PmX8G1ZVW9UJwEZej",
  "key10": "3bpswsmqKkD4bJeTumAYbApsFN51MevQiaWBohksyBcj3iJb9fW4KFgvy3mzyVzxCNU2P3n5GMX2u1v7pw7WyzNx",
  "key11": "5g5EV3nyzkfAKH2yQLzzwTCcomQdRJYFTmrs44CEvHMa5Anfi9kumn1bUVxtAdGe7uZLZ8BXByuvm4MiUWMh29nV",
  "key12": "4Z74Wh3JKc2NvF38WfiUCvYKwGtxvZ4F82UVqqJpuf2uzHiFfvmXxVjdt6YUrYggkXwMUXnpvYaiewMeb7CRbqBz",
  "key13": "2HepFSmwRwAdqgJMKBhiTL5W1adhTrUTkL7CJ9NMCYc3drdVkQLjy2z15xCmX6UUCnEce27cDAu5sUcDruHiuRZY",
  "key14": "3WksT6j5YVWVw5gCbg2Lwe3BiWW4PYMcUq3AvYAx8qomo8vjUarSjmEYRke5WxouN4j3WfM2TKrF3XPqKGEJEoD6",
  "key15": "3KY8DehMd2gQDwNoptMGFabkXBpcZWEP8w5KVMSr12jZNyMM4h3trnHG514YAgh9Edb2dmEtkbFrYXxCswPaoWfQ",
  "key16": "5jj8CfKepmzu1cHXQUCMPqwrUTAR752sAqrGoPbhGhFjXPF9vsRgoQP8iRd6MNMy3r7AmYrqq68wF8oqjCPVbB61",
  "key17": "59KDof1d5E9tNVxmznXZWqmajBCjghTPnNHHp5WwqDXpFQ4gsT9qmHLAnAmEuKjcoXxSsHEWqU1amPDzwFTTofUT",
  "key18": "5chxoAu5Wx3M9xTSvWgiLHynB3kHo8LAZ9tCdEd1XwMEqytpbWs6SwRcm7gbRvoQHVeQkjvyzJYyNH7c4XukU2HP",
  "key19": "2pcH1Hv2szCQWoRHrF3FujVBxiuT6MZ6bEnYu2uToAw883ANnB2pKgEgqPiNjGQzc5Hkb5WeJjEGQ5DfbpxyAma2",
  "key20": "CPJFj32h4asT5Ga5vKFGgq9vc7wRMJv8ovCe143vkijZkajEHS614AjLeEoaMVwqmbKPUKjF7ZRGPghLo2EDMeg",
  "key21": "5anxfaYRRuxy1C4P76T8imfBAjoew44PeSHhJ6QGMQxr2oTwmewpTPkCKwDAx35uaGnYbeYAgDr9zeqZKoiH2qyV",
  "key22": "2NpcaNQSzmvjWo37dEoALaizpWHhgNjRP62DuQQXdvKJL9fiyEEQmbQpHBCpi18Ep53B4y4W6MgbFbrjSBowBQ7B",
  "key23": "3U1z9WEkCgBSbzx5ALQzHxP4B7CcWrJPKPiaG7iU4GsYPo66P2nsADsq7x1JKz6ZByhh2MmXfqJMNfNjvFMzkwo5",
  "key24": "3fUAkJDAtvpMVcr8kSahdU1yUqvWoJHZqUnrWKsEQ4Sf9sQgxAjH9s2hM5yPFgt6KP1nC7yk2wdvph5bVFFicYgX",
  "key25": "5g4CPHj27rh8bXvATxr1uaKwuG779BSFmSUFno3qiNLuh2cQF93JY82XZXi9xVrEqfJF7XbPnoyxvPAQNRpdddrD",
  "key26": "52PEtGALAEemfiaWsgfhdQpUuKGSXoHRZemzzGDX5srwrZ2hC3H8wWu7s3R9CdzmUMLjTxcvqzvdyemd1eZbbJwB",
  "key27": "2nA2dDiySKddAPCwmbefPCyAUpKo5pkr9DiquU8wLCojkKQuMid54bVjdzaM2ggcoXcKuwEghYx9tEkzi7NgtXtQ",
  "key28": "4MRjqQrgZGKkoh7YPn58Z55nDySot2MuFAkzSPHktbVkcHZhuAthnBDcoEQqEkBfB8G6gxBpieYv6JQYFYxcXGjC",
  "key29": "5nikrrFDJoXXgRYLz4PYPVDeqC7MptVaxqqh3QqDLAWXCaKQfCjLZ9bVnrRi7Cu3fJkbFkSoPDoSc5YVvo9Yw7nf",
  "key30": "5se9bpuBiebh3TvQVBNyLfzfsy6KhYcECajCnnumFNAwwMBfkziaGEbcpHV8gZJf9cejcXZ13jDRoKAWofj4DzFv",
  "key31": "5McP2ZhmgXDFsXbcjWxEy1iDd99LsEPLpvFTBsBieGWwyin4C6VrwcateXw314N9PJ8ixCdejCY7REFGcjdXnRAJ",
  "key32": "2SMzy9QUgxXVuKBC5EMUPYRwMmqfYH2WFkDNLduaivCtArha8smNYcLVw4sPwgNZPKneJUcmHPsx7qhSQPJxtEez",
  "key33": "FN6uYuC8WuW3hBJ79M3ATwqbdAKMQeraCwRVX38tvAQHxSHkBsMGzwb57yoj3JgEaVtGnd1BkK51Rr1PZpjBBNY",
  "key34": "5kQJTsEY2d2cPtHhggcmHKHsiGDirZ2c2JSHK9X87YrygVgL9vLsRWFC2GjCfENdtDr6d9DiMD9Yjyz7iztaR57p",
  "key35": "32cxoVCNGYoFEMybLkEEKRAooEE1qeNSNvf1FLqdxD38DoxUAFeNSjYv1pKhXZbydXv6Hmp3HZaQwP3rHw5SpYuH",
  "key36": "ZmfwD485TvxNwEYBUVvv3uwpdphJNFzv75X6doa8yRvdQwf1kUvk2kNkL8ZMUFuJjHNwvpsftWWf6Wm2TR2JxNF",
  "key37": "4x9oJ4Lzw3b5V3Z66uMiL1tvaZbZsGiLXdVNztU1Hne8kt51vHeVn4Hx8oGa2GhksbfXUWuKwcRJrw4Jx68sTGHs",
  "key38": "3Yh56vHS2Tj8w3ofVwg6iHfgzst5DxrkR9niTZpHS6oCHqv5No81ZqodZqnmB8oBLqRLXmppeFT1SDLzn1e267QK",
  "key39": "4TZS1s7KaVkPj9vGg5zBNPUVfVfKsSVNezvou5dGbTSuBwbPs6j9eqg9ekcsBfWoVo8viWsdN1Q8raAS7jfeDkJi",
  "key40": "4Gn6i9UED6r9BwgWC8AHUEa5RS2nWTmbVP5RKnZ5N3CMvaV8icxmTpvQpe9pmAbEsH2nNjPRChAjPbGxdGgx8fJ9"
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
