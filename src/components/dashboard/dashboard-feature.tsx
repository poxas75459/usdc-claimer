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
    "3Mec4FGpY9EDPKXFGzvzWgw2iBs378RMxeZrDDWPqkgS32DRUqGs5qTFhaADAg6t6Sexo9rqEX9DMaqoDSUmauHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N7F5tm3erMy5NDStJMpg13t2iSQcKPag895Thf6iBKfHabRA5zKUwHuHNRXiAwCaeo2ndixbjF3esxhbHFZKodj",
  "key1": "26jD4BscyuJ6y6dMifArQt3zjE3Pzj37jPkcCAYqR6Zk17mHkv6dqCdDVnrx4iEAJpvkq7c99oixiT79KSj7xU3t",
  "key2": "39p2BhXCXa4A26GHkRU91ZbCiE3GUS6tPdkattuNo4jfntcYxuB8LN5YPE3d9qEghw367HELeCEDgf1VZ5kPi9g5",
  "key3": "F9oQwAqWQgKTYM7CCbXNs4UrfKwwWur3cNLHYv3fJgi3me79fjDujzPYmGQCtZrw1tpxKiKiwxo2rKHxDZ5JbUV",
  "key4": "5ZXJK8HcnnVffvwcmpfWVvUf6pVEAGfeDdL5jBqHQKVhXVHwr5wjnf7mX2hkb3b9Eissyt1Afco4ADoExq9Qprtx",
  "key5": "4yXAQ7KhwxHMRqeXC1PsMGQDssQz9k3NAGufrCujPP7DJyNZC2KqXzdVRR4BsErATd21vw45sqNupEoayUWorra8",
  "key6": "7Bbu9empULqj48iP56WMrqkfmfYkQmuLoPc48CsKicFkxv66m1GsQACt83YbSfTiQKHwmYwcV7KUZTrJ9RDdYoi",
  "key7": "EHn4jS2z633ydYecvhF8xyHiwKtorX3f3xrotRKZPBaFHdpkkW8WajE9EE4SgtD24H2tUMHuxtGzbP25s48ygBd",
  "key8": "5DMc8UjKz7HkQ8rQVgYsjkZX97X4XkHmttZwjB8dj8UT6gfq826Zg5bC4ebtjrFvwKwD7CHkUnHfBCbGd8wBypT5",
  "key9": "3pWAYYap3uvKc1qDcJ8fCNRKhEWzBh6CaRA4vsXT27FEWjTNe65aoUQuH1w4dVdMrPjrunXNSKEncq66MpCa8U5n",
  "key10": "KzJbCy3JV1cESYy9ZA1qoRHJpy1D5pwewh9Vr6D7PCiAk27C2c1AKVFd6LwasT8a9kXzP5azPeDNJJq1wkZJ4KU",
  "key11": "2WoM6LvLyQQbAPXEMGDo66jW2w28rcn4TmpQot9KQ8CeqQ9o1Qm9K2aJP2pVpqAbvUxNxAXfqKfhAwNaamoYpvmF",
  "key12": "5nu2GHN9P4jLWJ7kjHRR76yhKJ2XAq9gERjRYyEmKQrLbC6NKfisuVy4Zo7NEiGgwh2sw8GfWSfVykkKarUXLhKr",
  "key13": "5PK9Df5MhbBvCaKtmPCLUtBCExwjigKYzuBTD4XVABJk65dbJcqysdZEGoK3DwoN47dpk8bSwUf6jyxLieF2HrTM",
  "key14": "oQvW9cQihgGYf2vRc6vYS9gHeGNiVBJZit2Mf6XQWmWeCkxpNDMRiw6FgkcqKNheiRBUAEDLAwDwK6syteTwm7z",
  "key15": "nBPW4VdxjzbDEvceGNBDkK5YqakEYJYa5Z6C1DV4ec4qpVVnK3R6W2zYR8NTzZjHcGnPA3tVuLT9p7qcMvhiHhB",
  "key16": "5Lv7atoDRRFYPtHPvYy7SFQPvZy8VnfEjS3uHdnwm7YEUv8XyMw5RSMm9pFA1865A9ZFWgKFVyWX4PU1AnkDZrRB",
  "key17": "3LGEyom9nwghS35Rctk2cHQpWwQ7W6UMKtoZDRSYigRB7cBPppwonzTfDzAV4iEsiWiDbHF7bdYij3AiVzP7aYj3",
  "key18": "gKMakyWfs7dc92QUCypQNWQMBfhYGBpfKsCoE17aGBeQLSZw7zJMFQt5ca2mRUjoY9JsmpUFy2DFBc4MBZodwaq",
  "key19": "4HYbcfenTtLYqtGKfpxM7nSJyEzrkS9tAmMvd7LjGhuYTnWArdYgXKqqmDRV5HMmQAufG3QFFWniW5HYPn34yA3S",
  "key20": "2agexSHhKxjsJVMr6KGTwrjQXWcAnNusyNhzGhnHWNDCfxZea5eBpnYQAv2xyjYcMXQJcb1ATRb5rrbnGvhzdDMd",
  "key21": "4shkgD2suuhZ4T86aL2W3naXFsKxs5fGsuQ6YbE7vwvptzqrCfyffRuQQQZtNTK8jWwg6tAXhK3hRxTP8mJ6KCT9",
  "key22": "Lu9e4bENGfETsUQZtc4bZyvBsLUP9oCx2AwdL7jQ48hDcPLd4JjuRWhFKz57ReNvGWrWSKHzNhR3ULR7WYJeLRA",
  "key23": "3qAENSznEwjwjGhuGe4RfmP7M9bmNTNtsEYm68H1whWZr5b5Frai7CMj4N1QYSV2P9GnWVa1SkwFTNWCXYLhAaSc",
  "key24": "57Ynd4gBWJ5bTvk6sozv8zV8kfJy8McGwpDVHgNpuD3vHP8EiPZE93STQ8c7CLYD39GkT5kQQPg94AcdLm7L6DWA",
  "key25": "54UfQq2QMvJqK2Kuxz8wG9rvNcYuVZoHhAWycv5fNstQqnKx5seenK3T3eC8jB6YCo7QJsDCiGmw4to7Mb7uamPX",
  "key26": "2VHXi6aUGaEHsgsdAg6q3wVQVLA439Bg2ZvRvto66fEPVxCMxX2tTbuWd1r8sTnrdXYmH3zmYu8x89LZvEKhmSWx",
  "key27": "5gwYoNVgjoWzzeysGBGuUaCBBt4ct1rLPRf6KDwvnyuBX7CF4ZMnUp8SwvNFXjXAY8r3DmGiNBL39v1MSgxdE9SV",
  "key28": "2wwuaQXmTRPycDhMJj1Ng2qCpJuFCqg6y3yPt5zshL6s33uJL2eDPq4ziS6bJPpAgHJusB6Dq8p42wdmEzDbm8F6",
  "key29": "3BPdPJT1YTPivU5teR9tPT75k2SdSufos4BGN52thffhCLZWtA4zFhDHpvTC8wPfWAeMAq2pKNT6YrpKJVyWfuWW",
  "key30": "5mHqfKcFkHeRtmAwFohVax9CooWQeXb3fJbT9p7YZdmzbWtnkfQ78egzFRLq3x88uY8567SXYaEH8Af3fkBpq6bH",
  "key31": "51nEvfHnbSgYkRipPktaG4bP4VGRDwKEMeJDxaww1A2BhBmoBi6GagUma88mqdmErYtcZZZNosKqeALuFLXHKksc",
  "key32": "4h6xmh2Us7L9dgZ7LgZ8ViMWaP2nhdtBuStpDeLsKqDgpYQCX5ugdpTsQdEtXm6HrRDsVuXBWemBA6xopQ9ZW7dS",
  "key33": "61rEi998AwtUohabKNhAT9ZUTR12fY5dJrLv99E9xJxgpxHoPFRAGRi4x57bFG2uwVDpZAQjyoFGNTi2RE7FQF1g",
  "key34": "yLzqQkH1UZGqoeuuCbCYiWovbNi1GTjwR9d3dyKuckGwiPp2ctazc3TfMJ9W1SrgiQWnNuATdfoeW7k1R2Y2f85",
  "key35": "3BioYHyaAm3HgmGJJaMtTpyzHdqPQrc74LStQyxaNsVNGnuaE2rUNPfQiLU6h4upAXjh9iN7FeeJhw6NNwJu8tYH",
  "key36": "4yLxgZTfMGPLmDwCvtJFLVRLG8zhqSbJQMHrMteQWqtZ1uzYmn5QNqYweM6LmGnhJQoWuuP9UvUdQcgx7F1iTmGo",
  "key37": "5AbHXAtQgcb9juRpfeXd2T5gFcfqakrbo4V1efVN76eKHDE9ATu6BPzozNQDQ9ZnLSFiBVUohmDGWjcTaq7hSGQ3",
  "key38": "4Pmv6dDdv9vTLeo1CwBmodndQHGgHJSkNMdjtqTMGgqUWhjHA88EHx1iGVCNMy3RzQYabGf6PNTKRs8dshmD9yac",
  "key39": "5oV7JXQkUZDWbcufm4rLng6LwFB2op4R1CsF1Uw4V3Gse9ym19yeKkeceQZaTRCvBHjoBTqMRNkDBgkFf3Z7V5j",
  "key40": "KSLvCqWqXQSjzsnaRLWNvE4PjHf8VeRALB58BvLh5MV1NSjwvvkjdM1WQJoEq7DHvyceureiyXLkdeqeQM62Lnx",
  "key41": "PBNBnA9tzwbXRT6QeNC8zGed4H647nbhuyWVyntfbHBrjRtFPpdAeSSAgPrnLDrxJT9kyU1rByLRsXqoERBKLKE"
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
