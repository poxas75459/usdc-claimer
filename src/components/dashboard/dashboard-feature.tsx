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
    "3uJs44YzXVukSkR8Jo7xnWvSLsfBNhAVt24Zdm7266WHCWxoES7M57HBCeFzxF778a8JR2RYuc9DDYmTNHzuE1z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mqgpfAE4rd8kWrw5bcWJfueZWL332aBRFNxNNGCefdh723fWDUcF1sxNvcJhPbeXjUBsh9UXL1CYrpJTRuAPeau",
  "key1": "3z6s5EyfHfFW1Fy3pTrvbLYfGpWZit8d6eFB7ZhC3cHvkEppoRBEpEfbwYQpu398zR12BXb9SUvg89fjTw25miJW",
  "key2": "3gfuhdbL2cH6ecRq9bqNvoUyErTDhXdwdtah3BB3UsmBT4qDKnkmA9sqp99CSj2ULsG67dtVCA57KKajHmcR7tLw",
  "key3": "2fZDqAP2Vgwi4ZprhwUoZQDoMdnb5ktSLgKdzH8vtbQe7jeqzWwJQ9etEUvrB258oVEjiQjxnUjaJDtrCAnssN1D",
  "key4": "4K6S6x1uYCVDvKiMTmHqvaBVjfoBUPXfoPAeerG2aTAWWyCKpH7dWUvXBjGAE5DcxBFBJqeEmy1iLuz6EAy6TBXc",
  "key5": "2ejVpi31U7ePmffGNGU7wyBjCaTVBXAN2SERnJ31Tz8gH4UC8fKvq9ZM3VTiS7SrZwq7n7jM64MB6Ui4ZZbz4f7k",
  "key6": "4PeDANeKeLut7uZswY5bRspG8RTHzt9E8xtNg8VMP8RHoVCoys74LTjZGJzZ6sm5eovV17eLmHkfGy53EmMTU4TL",
  "key7": "4MXakNi1iEFQdGh8sA487sLK7cVpya5w4MZX4PJS7asF6TyVWMEsYe3aN4agWqjmJgH7r37yD4yhxA8WP5iXuWpi",
  "key8": "3kwC4RNvhogH2sNJ1C9yR5fXxctfkByku2XoVpG3HTPwPzyW8mEWQRU7s4pmbrFJJePxbf4BbpSS1FVQ7a1BeM9H",
  "key9": "2sbZ22sVty6scfQoVxKowifyeuqkxuZoPtKkxWmygp5Dd295L4ExVckb4fQ4MynaZX2u7sgNf1fdKGBz2KC3vZ7d",
  "key10": "5JBQfH4mYzekUgEWxX3YYcTRt91faPUYDP3A1SeeYKWZcndH8rvYLF7qGRcSjhahciWSCAqv5aBC34ap9SkqNrez",
  "key11": "57jU5dmo8JnasWu3qmJYwGpC6H7uZh799UYYy7XZZgrSRfng9APr9Lfzqdxm5fMz4aHkuUgsP5y1QNwyf3QBEX7o",
  "key12": "5N7Z151hnuoZr2cjKJ4AJMTxHLQLHhAMgQMvbP8buV7V15uHSyTACsFZUV6niRa6LpnYaaRNE6ihhm1ixuKcUgk4",
  "key13": "4rUB6gG5YKHTNPHZKeQ1KHH5hdf4FzXifhFuSBbDq9FmdBrdMYvrVuM2NWv7HmoPHY7DZ2BLj1MzXK5pAXJwp9wa",
  "key14": "4wkf5orHF3MdrSKrCndz4qvHCyDn4yzr8PEYH4X7CxxSgyxvDTsJvFUixrkBdpBrXezF33Poo1TpkvzNhuapnQAF",
  "key15": "E7RX5SndUaJ5p1qiBbCY3oLdjCJAzJ79b9FW1njVpwsNpWwsDv7Ujqk7gaHrukFahjy2FwReGGyUnRBuj5Lz346",
  "key16": "62PdUkQ85sqJLSqYRcPA2WZSKEdaHMc2NC9JUuEt8NS34PdD3rCoH5PFasz4b7up1hrJvBcyvakYh1h3YRmL4Pgq",
  "key17": "544H3cUSHcU5uUz14ARCdvGmxB2reCAmt3QwXgWcuri1SwQQDfxt2Cr7c7hzwdnmy2HmQtyJu8k6rxXsLoeV4fCW",
  "key18": "4RAkQNjksYZV32wkbTBMMNCAsuDQd7BJou6Tk2bsP5H3fYydZBn4YmoLYcDsQkGf4jekp5GygtB8cAi194G2JG6Z",
  "key19": "RpfhWtCJjQ2igZ8fgEsAByd6YZyZwhHUU1A3cJV2ZYxkgVr9TcpoWW9EshhkpRPUMcg4Pto1Gs395KDVUYHXze6",
  "key20": "65ZmEa1zEhaduwyhKmE7t6tZ9x26Dm43W2txEkCEZ3aDctqVcypYygmCAKS8JnCUH4P7S7DcadrJVjHY7iHtcK2Q",
  "key21": "bZmjhtX6C5BpGuuwtr4YoeSJSKnhpehY1Hp6HDUtrcAM7xPoogjAMpPLwuB7iBaSEigoesseBihgX9CjrBzCKbn",
  "key22": "23uVjrSxLivuVnSLBjVkdoNbemjFSFVP3QHrMPg41kANFbyY9dxxV7wbtWxhWRTfcwBgiD6DeWt6DCXgn1Yzy646",
  "key23": "2YbCnb1yvdRZMnbtAbRn2cn3J7rg4D2GPm5qu4X1teXRhEN6ncucJv3WAGf3yDBisQwduysGBKZfDxNJUXdCoLSw",
  "key24": "5JmwHLxPxfaZNeVPnWpBWgs44ur8unjpjLzNBLeG5vncJeXhqryn9FJrm5Kdk6gUZCUrT5TEUUbuV9F8bYifnG9Z",
  "key25": "5xAywJPYWVRoJaD2vWYyQvEZayYwk28HeUfdxBnwwkyNUB3Re8RhVHybUvnw2bDjxjrdFYAqVPEf2q8ZjeWRNjK1",
  "key26": "51M5pLzehwRGd6AMRP8Fu7yCCNzC6iV93Yp2GJsqsfyWxRdeztZy5M2YMmJ7eFwkfNd8iyLK1GxETx2N8q6KMHC",
  "key27": "5DZA8Uez96Q3zW4JhArs4vwrKBz1C6o91dy56h8mBsBz1fFBDR2R4vgZCNKmEt8LwzfANgquYhdLdUTkvdVX8wnT",
  "key28": "TqCS8sxufAYadaxy8GbBUase2HqTfJKjLKWq6upSs9BiDJR7o3AUiFbwiPH3MEr8f3b9xZG8kUK1KAXmgym2dBG",
  "key29": "18ToYn6JMrkLDkd4s4NdbzqqVCqjJFBA7ZnVUCC9MyoizdaxEhE5iL9v4LawLW1i2BKRugg3sfwYntsbv443bUR",
  "key30": "xDEn7WjWPo5uSpCHZN4QuzwzGvP2q4SuTbKGWzMBPPsK3mjReUXmhjwesxxnemutSuhc4Dafwo7PzQ929tFTfpA",
  "key31": "5qh9NCqLoVTWe3KE7b75Nfw3U79TqkNcz2NgacWquVJTPfieq2w17zah6Zkxkq17VWXpmFrvwGon5nnKJvJEYdQU",
  "key32": "2VmT6GAZYQRFERsP8E6RoULZSJxHmWwExA6Kb6TG9Ad28SCSL3aAN9szMfH9RhBbV48ji2p7C1qMTwAz3FjPUH8D",
  "key33": "3wQVdRGzoc827i594LkXTLzS5xHjTN4XbGrLC5JRVjWzDY8oGUHNtMNXiGKqcqpAFuzkurVmYd2JCBGrMmJPSHTg",
  "key34": "5YybkQRDY2HfsUatnAL2G2yTxAdQHqyysxuq9h9AyztEVWGu4yKfjtTzC7K4a5iTHFxqwH5GLKRsMcLjcS5BUjMk",
  "key35": "3XN9ewPZQSrt7sUhg6C2foLVAQqz2aEWdkuBVW6fKRNYXzjwf4NWsXs7a6EnnCZjMZorAa9LvPeLB8o1Qb2MkcH2",
  "key36": "4JwiL9c9wSznfSpD9KkkzoN3hMy3kKCruFz5geJEVTDN3QjWFU7KDDgp9MLnmR2bHmEcC5bZZ66mGFNZ1jVkHaFp",
  "key37": "vgznYi5Wrhqsr5qXbPR9Ni1a5GHJKXDk6uZXtgawV3BD2eGmFmoqoQKJCobWVU4XaSiZMrmWTbEBrqpdnafwE9Q",
  "key38": "2NCGE3BdkwGDt2FmL5SEGGPvoixHoiGXHnDzvKPfYYrxXfzDMNjd9uPf4igSRAb8sk5ng2qtqLPiyB4k3Hh9nwTS",
  "key39": "87WEqWsTrnAyHwSVQGqXJ8gY8rsggzTtqcgCbU3DMvJoX5JKHCb41BPbykAHkyGDmBtZgGCUre38koLZtQ7p3ZK",
  "key40": "2ax9xrBpVFLCz4KZyY3iCfoGURkRk5wjVrbjG24GYvSNFW3DUaSjGsAbZYwXDQYcAhg5CVQZZ9RKaGMbWwg3hAYK",
  "key41": "3tppDtqqwaazgi97qDcSj2Y6u5k6k6CJrU5p9EdWAgv8Lu6gqCKXzGDNx3U1PrZNfg5hKfnEcXTiZPbinqcR4vGb",
  "key42": "3bW1hwJWHqRg9PT8r8UdofREme4TJKrbQVkSSYW8dec4PWBfx6VZrHixnG6zSqzgwkhioEKWJY16W2JieE6mgSY8",
  "key43": "66dYztP7VfgttPPs8aNfQ2WdVvUFdSjqgkUQyw3LwCTMPJNmxtdwJCrz9zRRHr8dFuLuAirFdPVaeGfkYPcDVmgh",
  "key44": "3CiS6MGUCeKfdAXxJMqeMeL9WbMR6ZmQ3WEchjZXmarqptYFb51hWNqN8657y1n6YZAUKYrxVBFJT55sEcVmfj8x",
  "key45": "2e6Na8PhECJDhmdKHxDrxqP7X3GEWHAfm6aveeEBvnMbHz3pqJFV6ocmiN4jDRak9V9EHtDTyzuVnAZTtTdDjhHp",
  "key46": "2tR418vh9SvuKphFVjgUvdFuHa51kTifHyseWrkKt2hNHzFJYvAfP2EQuTe3shWpLV6V82DytM8EHjT9PRccz1h1",
  "key47": "4YaQa3KQeDuW5PkYMdsYXVkUD3SQoWXzbWnWYLrm8bLjNUJb1E9ttqpQP6rNckgtHPSGjUxVibk5wvweMGSbcDiz",
  "key48": "4JMFcpqm2zBANpka5kFfyG9efE2tztxz2gmvEFNNqitKpKhdvK39VvguYXJzqYUtdEwBWVe6rhPtJdPB9eXUgLRi"
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
