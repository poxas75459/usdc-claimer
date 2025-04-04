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
    "216LezJ38WUhC2dqm2tb8ay2gMm264xGEPvg5pnSKSyHotbXGga924f6bG5BQkUFMrQk3NmNJLyDkRb3sxEEkCdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sa3crUEDK9PhHQRmTB82CfVd7CJgvUFY1Niz1KHVCzBn7V3bqPkV1u42mnfzYm2g6Z8ET14rf5vxmBQrjQiXonR",
  "key1": "5UEp9HD43fAUD1KGrZtcHCwPJvVJgTPk3G5TKVoDTb6R7uwn4s968yPScesxmYGotnrqbApJacZBkM1FVWbXnc3X",
  "key2": "4eLJG68abhH2eztXupAkwwN7gkUEujPWJMXuoxZacgXs4wQXTfsAMH5pinrH4yTzHSTBDgihFkqvkWB8jdp3Dd4c",
  "key3": "23DCXGd6AjFkrsf6CxJDQxifXR3uWDA4DV4LUauFN6uewPBtjXE9nGdi9i9siYaaRScj5grSityHPG8EUYRjfMCX",
  "key4": "2qVjcpvzNY6R7o8rDhfqnLk7MQ3XEpeRAWbD3yJw2NasgofCwUJB3HodqFKVjAcATTUpASCWZBxwFMvH1D1WuGQg",
  "key5": "2yRHGcunHzTSHWaAZ7VHr47LfmVKJRDfRsgqKTXWrSvC4pgBWjhD33ixaAJ1FY7cet7Hdng6NrZBf15mdxRLQvRp",
  "key6": "3u5NFdeUUh14C1YmZdgSfyne3qEAzGRXSSZbJqsYbEWoqoa2xsKeeucAFxZx15dj4wKSp91KNpWmWW9AwFuNkWYF",
  "key7": "48jQ1v1cvYQNkJijuKrEyouhKydYJPZ9HfVoctRTcbhWuX1cuyc6vBxc9LsVh3e4Fnw4NbiBtV9erGFiU47gapaY",
  "key8": "2STRTuPXL6JVpgTx35wKBUoiQwTMKSMmp63eEpLixCjLiDVjpPosoSZ6vXNM5GdfSAwn5pefuC1WCwnfA9BpwfzA",
  "key9": "38CagxZm5WyE4Nhd2dDJ3Z5DmDdCjGxk7F4ndRFDksrGk2ZxVytXfBruutyvrn6DdooNhZc2TVeZzMJsVC9xTta8",
  "key10": "2khyc4MnHBaBq8eszZNi1CEgLrFFKvJrhMqEojBQvH4YmGqD5AGhKFuLLYkWBiQc8W4FUFPVnRhvfkSA9hZBFA7B",
  "key11": "4kguBRJgAVkVwD3aovTkeKPzGW2N5e4osGp8gswTgRunqF1k9FhGsxXpdeKsq68akKfmFd8WUHMEGUsWFBE4J5Ew",
  "key12": "42CSHfqFXumzMVereKdtNinBZCJ7cWwHSxz1NELuLxiNtrat974ysrx2XbRYzJEfeYVytD3mJteyx5RCQTD2Amqe",
  "key13": "fGTuEj1cjYaxL7Qpxy5uh9YDAatqs92LJEsepoNwA3Ug7m7HXYrqJ84uPW44p8V72E7raBBX6bn3nJfY4jAxzaK",
  "key14": "2i4Tv9r9334jgN1q4gsXJTVvZciAyxrUZW6yWJaSJxM4qyUAG4s2TXm7HAWLoZGezFib1p7xrNwgccgR35DCk9yj",
  "key15": "8ef69swNMPzTtkYGim1QDvcZPePg6vUCWFpeQAkSJqThjU7fPjUTijCoWJzQvM2Dq4DwQEJ3Kjx6kJy6PqNWdoy",
  "key16": "4xwA7UmWbgcJ1pWPajfGiVWRcS8peizE5rE3ZjCChax5Lz8Uw85uNNxLiZMeAEj2sKLPsRaHkdnWW4o3hSjShvJo",
  "key17": "5R7PbXLjDCmsSYZJxJSpiKCiMfKY7pdGrWCkyrqSRJdJsjZCcnWSGGMhzwHqmbiP6pT6xLQ63exeLCpTjJbr8QHf",
  "key18": "gQb9KHhH4FyXE3pXBwkK2k2p6p5eXmGWL22SHuaz3SMffWbLrdaRf4w9NFc8jh5gj5RAXayj7W68r5wZL27MTPo",
  "key19": "7ZGwferf48oAdZvY3TwDqyaTWXeYr3oYEEdnXUftTwznLBvvWVuMN2mPgavxnpgT3cYWYseC6PPxYaMjymRoWSC",
  "key20": "65z7EaygNZrmjGCdZsg7TmmLB8NTcGDGMtJ1HLt2udVRby1zbuCBWw2hdbgFFTXCLHtUQgvBwsm6hDfWESYoyLjd",
  "key21": "2xb55tFvK3kVHrmUTUbziXBSRi5ALjk4JwupAbaGGRAQYiMyDebFkVbsY376kHNKtxM5L4wZ6YY8NvzGNe28Z8dN",
  "key22": "NiYvyN1McB3TTWQ2ZoRvxueZwWqz9t6fSTgbKdM71mB9Soq33u22PWQg4k8h2VQAAdrrgZEEQcRUfn9FERrnBgx",
  "key23": "5ZE5KQgZXKGXVvaZ4yJ514pvPQdpthnPcJpYCgKNdszbHzHuktb1bXKgVCD7U6q3NVR4qAkv2uUcnQPc4vvedkLP",
  "key24": "2HL9DVrvp9QqtzzMoitiK9xxFz3UCcudspgPvKg1BsdhaupvZU6ZTz3AyWMDu84kMYMkfJwWhuTgBsJ5rv18g3PG",
  "key25": "4PMDPvdShPTgoQN72ubTMNzkvvx9md1K5cJFUfsCKA2xkMBRsgC4kJMLagTN94YAGQjBMCYpbQ4BpFyoYJYnkx57",
  "key26": "3x8hKtZRXWrNkijh7i5NxZnQtzKtWEtaT6ZaamXvizBc8waLmsXeubALyFsEc6QxKynHvQiCcnmpFGuJ6vEGcjac",
  "key27": "5GftMXBkeDrTqi1VmGNgCE1yiTGESd86YMobaJQSoJoyd5hEUENAQMBT36ox7ahJZvngHgLcBgZSo2pUUHMS6pQt",
  "key28": "42ZNy5EEX766X8s88YRRNncCARn6TjyyALv3FHrMBkyeHreYLSKvhvCWLozNCPooSLwBr8kb8i3N6wwnbqyzv4XM",
  "key29": "2cyXCJrKQX65MooS2gwAaaoXbHXS3U2WLEucqGLcbHErF4neRGFi6hnCRANvJ6HNFxXgm1VSg1xdaTgZt5KwYun",
  "key30": "4heFPniPiUdJgTucwnyidtWgmPsUZ7XaSy1GZsgP7HRWnDPbBzAd4poWt1CQNivn5yp9hQnvpbiFFkA5esfdfco9",
  "key31": "57fhDSwoqYchuv4cw44FLfWhCV9gVUQBjuM2jVhShvndCMRbsxguRVxbCrgti952vxDs3duQ3V8U67Z5yuU8zcoB",
  "key32": "4JbJbbbq3uPVWaVK7pLWCfD1Xy3QFAoSz16hmHywm2C1CEWqCJpjju5hDNPxWQzXjrqUdoDQucjMTuipDW9HmhvC",
  "key33": "3QQw3apckzxoPiQFvyAhhmk4oy2QiZQkvaWEUZFaiSJrJVBgTaREEMvce5sJJmVpdjXF86L6gvXd1AoNEJCyBAbC",
  "key34": "238k3kth2dawAhUtioK3MbDSrHb9VE1Qx7EydiFMLGh49sSonZxQwcLW4q69gjFBwEFChk2nQnC4HajDR6aNc5L3",
  "key35": "3m53j5bdNbDfxEtVxEXHRpQYRCVXNWAuiJ1tf54BkwLCM8QuDXw5Jq9z2rQC7EdRAYgMARv4t8LdxbhofZ6BF7yN",
  "key36": "5iKUsNUifpC7qKDu68wbV19UY7NPvU26s4HCEjZ6RwZ5akieTn157spPujoVmv9vHKs9d6HHyggfQ1kBgWAf51Ah",
  "key37": "5qdhKoiZ5hzeL7LJNps3bpBwc3w2uJoHQKB77PdxbnBxakXZXcDk4TSyQA4N6U8gAeFmH8htCSjQwmJSNcpc6KFP",
  "key38": "a1bZcePQEiGeSWAf2gqt3hmgGqFsf5Rd15KkMeG8nSYMw84BT4HWxPXf39QPQnXTPWRNhu7RHTMBF6yfNxjmeyy",
  "key39": "2CXFxznXUmK4PqGBk3RKdR2C81pRvUM1sYD3GqFXi7Mwk8MFvcx5otMVLUpTFZ9MWJUWcMLrWw38eq6bJqXbE9pQ",
  "key40": "2QGjufm6GrYU4W9zPJsEgjheueU6yGEGKHW22pL6FnhW3Wwf6C5DuHYSHJSFK1XYpDUiUz9ezeCiCBckvRsJd5Z3",
  "key41": "33Whqz5ry3ZHp6enbHDJi2o1NiR1JbYmoscqQT6TGPkkiYdy2VW3aRKZG9wkmx6F3oLUBA7WLuB22wvEwCXBpKqc",
  "key42": "41T9YMX7VPMfLWiY61KxKasHZHpN5cArTZWk5CGdHL2eG6HTtDLdS5jnnNiLrRKxd2LRheoYh9ddMz9YgXo61DCB"
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
