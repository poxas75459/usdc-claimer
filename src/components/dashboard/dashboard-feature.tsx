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
    "4K9Qgo6XgtyAQDfKdSPWmbszZTZm6XavFMkCXPcjaMxnWJnPC2PKvwDYbpssLZuH5MXdRdoXRyU72V3zpcyrynzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GyV6YDbqJFVyR3f1gryWi4n4ZaoiANpDfGWiNzfVTSPzpyS64Qh86McWYUb5Wn8YDW9iBn3tGcZk75wc9nAgnzm",
  "key1": "3yCnDUoqSSUJnJHXgm5ZTbaWLV4VifP3Z34FCHkNPRkYw9WYRVNNs1xc8k4snkCvEnacDj3EDhmXJmXE29GAhH2u",
  "key2": "2o5EPJtEuXN17PcXsKw4bmit9cRjZDppZvy3cQHiJb6mQj3u3RVyFwhKCWUK1T93yFW55ZfkpaqR9kTd9iapQ68S",
  "key3": "3GUW2Q9i9WuFpCDUGNv3U954sH6ENmmnpNP28uhRmEcJUtne2XJ3ptR5u7xbVFrkK4EZJ6FF8xxNix8n928URsto",
  "key4": "5Gek7qNdPmGdN4h97WD8RWdDboy89ZUExdimJMWB2GkH5tjdEYc5x2K8tL2gdwWxzPM3Mp76FhEfKXEEJbkStVhJ",
  "key5": "4cYwKayWrMLiYRa6wwUMehAqeghMAPRhuR2u8QCxobNntkVQ2wwHhTopA5Uf7JNygXkbufsB8EnTB62AKqhzSJ6",
  "key6": "2QtSi5wEQNoExW9vj7RvihyPZGKPUyypnYwwVRD2TArXYqRMVyG6cb6pVUuFnkgrY8ZGm9oD8M1Dq1zHCFdpSVEX",
  "key7": "2LHVrYbQFR3EDCTRttFp9ftYd5XHiT1h8toJDJXGACJZ3AS3cQrbUZQEaB8qKBseaJ7Exda4ydaPtkchWAXE3SBD",
  "key8": "6fbu361mXSJgvXtBWGi4j7SVKXBQnYDd14PgEUiJFZgF7Y8T4D9X2SA11Tz1Z3XkHfqEvmw57LvCvDAKGJCCpFg",
  "key9": "5AhiyyA6b8FzRFfz3sJjsjeBdZpNUNyCon8xuGc5YveqRyk6eveGC9mP5x9WhjsTpkLt2oVdn1BQkc3mEDszzyGA",
  "key10": "2TEW7bqchi6muPUW2ppycrhau1XMUps6sVCDWMvhzbJs3VwszpNCABiZcnML1TriKBarz3vQfkmBLAHVZUD7PEJj",
  "key11": "23fJ2G7hx9JuZS3dKaMA4qyqDMxS3GRoiXac1Gewr5p6BAPLrYCtetfbhjw9cRVBxwkWX9LLoqe6EWH15i6ikxE7",
  "key12": "XpfSnfBKtGyqFeKLrco3H4GfmkFkYuMLhtagvhiMutu573Uh7eSuNUMGY8HDrhDb1VPJnSKoWkVME1yHnQuymL2",
  "key13": "26TrBrVKZj6HdW4dTdXEhsDVfYwimunaBcabnR6aGbU9EZy2bShnsb696QhAWAuhX1gJ7NUKzsPKyhdrfuhTywqG",
  "key14": "uSU2Pfh69ALTjznkC71jWV2bKG5MKvh7f47ja1zj2wjtRUdsJojMPHYxkuWwZ1LwLDpoNjYtDm6h8wrESvStHip",
  "key15": "212yXexc7Qh7BqYw2dgejQGpmD8z9uY4BPNvwPCyGFwTYA6Uds8KUJ3w96euFND5qHQvc4pAtGn5FZQCnxQcyMJ6",
  "key16": "49uSiB486gzDQHxpa4QoPvVWkTWxBAgb2yozFLF5HGYTtLNbD3rAE5FXXTFAygkuyyjfRPJRaGP7FdURETukBbHD",
  "key17": "4WbnHJnD68XN7RhFR4BJVfox2JyhGhht63SGQ7iRcHPJoDcs4SpfqGhyBPm8M8ZLayYPL69N9SHi5rzHmQ998txX",
  "key18": "3e73xwgmymUXT2CrdrzY3Myr13FnoMGcwuiQGYu53yn5ftL7Fm4AhKxCF97x9nridBH3fkL7tue8XYsdfsQfWvJ8",
  "key19": "5ut6dGmSfF2TvspvnEiDfMM9onyvQoTuP58xD3yHerUaFCyCEyYXV3BHK3rCAqrdca8eLZAmxMrNgUBTsCJto4rS",
  "key20": "58BqhHkRahXTDjY7nfkFnYXDi4igdnF1xLxgq3HNKHnTYmoL4w6ct7FrvR7pNrvsev8FAHMprcDwDnTeHHpGSZBB",
  "key21": "5PFoMAVBugNboehKJYY56NnBr7aZExbSVLpo9XBJbaqwHXUJTPJVh74zyY4ZftkQtadiAfcYLVCfs3247tYdrYX6",
  "key22": "2BkcGqgVmMVEfPeAPb7YgC6oBdr78ULboCZ6ryt9i3teEt7ghDpxT7RourS4cByrMbsoa2xLfRCjpvtpD9w1jwL3",
  "key23": "5FYdFRN2nsTj3rWfQXt4WSLsju9SKgYqCf24WYbcHg1BmHLEWMpGi4AjaBzuhy2UxyScwCo2SAYJ1M1hjbTX4e2E",
  "key24": "48ohdjXXvfYfpBfXXa4QrAaNUWBWRhVzemdFzZz2tKjriJ4yfuXCv5XUb7qpRV88reW8Jz3qsMM4AmqioVnA7h95",
  "key25": "uNiD1S7CiEkTE5n9Zg81VhYbH2EZdr6TXhsSKeLyp2o7g8mmTY8E6HEFNsz2Rbf7NcQQQLunPKeqaSBUo6nZ8GU",
  "key26": "5dsQCcBfgoS86YeuiR87ZBsemFWx2yQzo21aiupTHgKQZx6MBf4R5k6ESuWKKAQsGMbDJT2muMNUGGy84UsUdxsG",
  "key27": "4z9f6cfqWyXpTGrGtZJHMjYC217Lat6JSdiq3jGZSmZye2gg4yprN6q9WSFEsepJBStVn3zMACQjYu1g7FiPEAjB",
  "key28": "Ayg7mvrpgEsLZwjcK8xjsrJGxBVJ2XcZeCyVGZNcmWxcQNidGogyr12wMfiFpWwzrKihHxkgwvXNz8KoWBBVcY8",
  "key29": "4iGKmEnjxeNi8h2aX2JQRME1u1ZxVYbrBWAHd3ssrTG6wNsKAptF9BtvuWNNG2HmaoGWUA8rVLNnJNnzTtXrea7y",
  "key30": "4tkQdhfgb3qo1BQZGJGUB4GiGFXfx3Sq9kXCcjFncHwECAVzMpWgidAAsM55Z1tBvVTLpXfK2cePxEhx53Zeshm9",
  "key31": "3KADaJwExNYYayzLVijrJKaMbCjxgbSdiXSPySKPoUXgiTaB549k5pcaqHfBcqgh1bV8Nqrbawt7LibpaYNu6vXv",
  "key32": "3jJc2F3HuN9pTiKBZaSviaBFNzQTDNbvFQMnmpup8Bt4JeXmLWdAqvri5oJSYE2P6SdQmGQEAp1y9XSyapjy58Y9",
  "key33": "44YmVoBnCmrbomg453ob6Z94Jvjn6BdnPaju8uNUSjj9oL88VkdXGyALNpyGi3HbGTGfRiAUErJuadL1RxT5CpvP",
  "key34": "3kYCZ6ov1GW8KUbvGb4jqEjTGkaWW6PGpBCfFY9RcVfkrhMfcBP3dgsfKbPmsGtpsHfGCTjreQRegHKGq6cEkh3Q",
  "key35": "3wYYY23AGhA156SyjhYp3tbJ1LMV35fHdppGKF6eVDeUH7W5LcB1RaDyAvtPLHqnetNsA8s33iRTMxPyy3DNLMhZ",
  "key36": "2beNQ9t7Z2p3jN2Aw5g7y9KQSDDFoKhUkQSxyG9N4CqXyasvoNoHnyNC8CvYrTibW2UFtKNEz4Bnn8ibZ4iHmKtP",
  "key37": "373ivu3NG7eiasJ2W7qJhiiqgPd5PGJgmguzpWEv77RHLwXLko5Ch9NQGCv67Zw2Ec7c3dykKTwtqA7RxcY8dkar"
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
