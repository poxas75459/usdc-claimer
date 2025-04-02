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
    "32B9VLxbkkSxC26rD4ANKa1abvpujhpfXXenAwjN5RnouQUdnRRKKsSgPRguzNg3tboifaKRMPAuwzJgFbKEXeE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qnbuWM1NHRG4u8NZ4zov6QxySrtCt5MeMSKE7SCLfWyZMRQq6jq2CVKB2th3FcuBqLkKsegDuw8HC91XHvPeR8y",
  "key1": "4XwKUYnsTGHq25xoYwpzprDBJpSqAWQMMK5XGLPQhgpmZUAndYpF1AMXKkdYxzhMXYiS5cyNfoRcR9VZHrd2VMC5",
  "key2": "25DDyYEssJ2xGVGwydgrXRd7Uy4igZ9S6AtzriHHp65Hbge44ppw7v1j5c7H5ofGAQj29eRZA45sjjMHQeR5TiG1",
  "key3": "2bnj15SnCmQazBj8QYQGL9K7h7ZAx5YBpSXdNh2WPKLLoBqGq5FkpKphhPpy1LJRqBxAHwK668DxwEx7NSttxkju",
  "key4": "WAKtWwbPLVDe4vWbCq2WQB9Q6UaKHNB4FdxwYXp5KhdnK41UKFbLEBtoDcaCpCfV9QFjwwHdezGx88z2WdTXCAs",
  "key5": "56XwfNfLuQbcSSinamux8KmQgzFjvnbXuTZgg76rz28gzYEmwSac2kLNd1bsrExN9Syvq7dsBjh4KvCpGLgA6Q58",
  "key6": "2mp5iLJbQn2HHZLsciCCryZazHnN775m9CCm9DXnJkGuP8wM2JKyHtrt4aZsTQS4dsqV9MBGNKERCMC8wWTNV3Ms",
  "key7": "2HMJ4ukBxBoTgEPUhPAm3B2R8x6p7q7AwpHqxL28Rjv1zvgXUU3sjsF21TAFgLQSU1NUzoRNxKFYiABVPR8iwDUa",
  "key8": "4bZsakkqeoMygbPvh26RVcFu4XuVcWWCpMn2PpqhQvSAycb9L2Mo8rpDWX1JLkuNELwFoWvzqTor3HZu8dw8BXcD",
  "key9": "55YXAXKuQgktiWGSkqEZJ13RgWzvvrDGJeGNMywghfe6uduaxL6uaiuvyFcpSnxFkpU4ybTRhj28epoHkuzEBJ1e",
  "key10": "4BesahVFauhcqhYUEU6GWa6hZpGjXGZPmCPonsjx35e7tSBKxkbp5GoK2eprLcCWCs71wYMz1b5qAhC6CiCJvFbx",
  "key11": "2Yz2LpS9KoQEPnGrS1ejrA7N6sdzeoxcPjGFPNN2RYiNRqR5BfJsg6k4krSdiU6hDTGyg1ftidwBVr6Xei6utc1j",
  "key12": "3tCsmb7YUz7nh2bg37VdbGf6S22Cp74vxZkiBnQQCEVgk6sMbuNft5U83tbR7V3d4YrsxkMhueki9U9f4kKcLn9d",
  "key13": "3Cj7woHBexTKWcMeigKnHiGNkYquHSLpPwLU9iDFJbmvG5rgAaZc5gNuYn5QwRJK81ZpKK3BJMQ7A2X1GVxNCCVs",
  "key14": "3pEnJuAnX8ksdVxmGFemTFwhqbXojSWGqBLi8jJEmSRdh7p1VSdQbMKMB8tVWBAtQS46GDQub5WJPSm331JqKRLA",
  "key15": "35BtuZoaHP5gyoFTXXRRTPEGjMcnKbP2jzWcknzBLGFeWaFxkNj11LDbnfptH4QkdwBybQujVZiV7yjCi2MwWgwf",
  "key16": "2A2hQFAhVM4dtdBjxBYdeFEDAeegT69QGYPB46ZcNs9uzmUHzHmTXDMPYY5Nfpu7yxfEcdx5dgYxL5gkC1ZUZtsR",
  "key17": "2aH7BaKFTVUuKef6afiCB4sQ8hG1VRhQAvZMzqcdLVm4wKrmJ1cSk9Yi8VsaatCy8nk2dXUofXZGZJS3zq5UPEkS",
  "key18": "4m3c6eXU6vqGkeW9YeG94HNWP8wQig81j5w1KSKW9b6uGVshnu3buE9RUMB8v7kzpjyD2qTx4yFDRPrwFcGvfm5W",
  "key19": "ifs5byLv3wWWQi1PmFjSNArjQyuocBvX1se1XetefmPbJvqAStSGqKXDFTntkVymGh6dCBgkjn7mvzdevvbjzoW",
  "key20": "3gcX9r9FpY8CpRdrJ53AmhnzWFpjAFRU8SYjNgBwR6a3ShZ782xVtjyDAATBPjTRRUqGNqjFbNSxaE9NiSdhxqNM",
  "key21": "4ZxHmR5wLmFbXx8HmtyCxVHySTU4NjPNgdxrDazpH81nCvEYKfw5fCKDfFirjhX8oostE9TrReaHthsU1Y9JcA31",
  "key22": "3NE7ccgjuuKd6U8wAZpjQZkDpJNzsFeYQs6Ts6WnoTXxRA24wBAZfmzKKPefgpPk7sYuoDpV52zdmidhNQkGV7oK",
  "key23": "4RkGprf8fPx922am5qcBo7wwwmT2JFPytgFH5jqi4uyk9nbcBEay73Lyq6Qmf75Txz3JtUmCGW3VqjX83Neoa7yy",
  "key24": "2UrU6CswYg5ZUod2s4aWyWRNsEeEqbWyYFUzK9pfF4gN4VkkKbTW3KrXXPNbseipwivkQD2kk8AcwwL1Nr7rAASV",
  "key25": "2azF25Z7rgeFQuxyYKNS3FgTVDhzKAiAk31Mf42T7Ld8QRBAP1t7z3u91NkgyvP9HApAbvDp2SN7H2fk737rZgje",
  "key26": "34v45qzcd2Rbbcc6NmSK4bWqWrdqhNaHH4MddWLKkR8yzDnK2KrgfyVAz9ftXKKZvDuqbkiYfY4wiwysDC5YtnWL",
  "key27": "3DGVXTR9igLTgLB1nUhBs9WXopiqW8KsAZ9P8R51qYp1mbkJ7NLt8YRAkTZ2NvN4n2nAYseKvSerucLCwQyZTtUe",
  "key28": "5PJvGfAEpzTpzqMFYQ9fczyXmdrvicLE7n7DCEoEkLRgQ4ZBSutx4k1rJJiTqmLaEdz7BNZxm3xwYQoGU4s77T97",
  "key29": "77njxYWXyqprh7gZ5rDUbxQH44BVfexZpJbR2cKXJx4kPpktc6yr8cPa27qkiV6JiJtvtpgeLih6Hqd6Xf2EF9R",
  "key30": "5nNvz8Fk2vkcdBaWppqPFJZba1rLkwfhYKg9EVRuYbPnKHVVZ17VxxA3cGvwRocwbd9hDeQ1KhmLCQVu3xHJjVT3"
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
