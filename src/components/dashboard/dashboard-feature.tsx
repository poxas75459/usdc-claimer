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
    "5YZDqQbUuKvWqGozjyN1EjReEkqK5dB6AhPTNyCCvbQ8CeQMmrNZeF9RwehRGx9xaduuny6bTY4ik28jceFyFeEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ujP8N1pECCikuaSKMCvVpRtB86RbMAmThxS5sHp7iZS1TchkG4BLEnCvV9uEUYU1MYUXYvNq7P9pQn9KEFc7ccj",
  "key1": "4KNnAk6MMa4DFq2fVmJGKFCiD6BiUn5ExyfFYGboM7EsrHbh19bs9KF3JDhn8f6U9REBGNkj2NEqu4urzhdd9ct",
  "key2": "5FQfnJxdLVvS5WgdEC9ZRcCmNUTsgC3RGzmsmys74kywxDEVbW8nAWiF7W2h1zBryxRdEtiS1Fv1i5CSs6anhevJ",
  "key3": "2DzvLh6VMFp8F8z9UUETxozG1Hrb49oVN2f2j6X76TZcyJ3gXSwFAA3mkTbXNZTSExVSqHs9gmLKf7Gy2RYHDPTD",
  "key4": "2dAmYXwkUD94p9HTM5NUmA3i7bZCNk6oGSmQcRpt55DmFHFNMBuBjoFBwidoGGBjSSoXByH3nrKTYAwf4VdM6xEJ",
  "key5": "5eZDgEsDPkjCQQDqPWxdZDQ2Bif33BqTw5oiuTzsbds7X89Wdcki6K3TmS8pQEbV8Kob3oJQyaxnmsYpmwzPZSUC",
  "key6": "4fertHsrwBjETDHVeHisjBEX62PmuhiMGK7uLK5Ngh6PAqhHkAL1fZqJzhMTApMswMEq4eh5yyNoT11WyswVphu9",
  "key7": "3cKwqKuWtbozTuWKBmAHr5j2q94GKoMHxXoKWgnafpSsqV6A3QL8fYHMZFaiehp4PESYSfvUrRnXmo7M7eHDnDX8",
  "key8": "1r5iyo8xeFr6JJx4uaW5CqAp3hyC7ipttCMQcnrUdsPhtFWREZj7smg9kWBfsLi9G5eQnf3fuCQmnwyNTtFVHrT",
  "key9": "JBCvyZmj7F4NCYT1SVVtmoFi6midsSiVHFNJX5zzRSMHvNoL4NwUUJvF2zLDm7LFQqhRZo2T7BU2ZM3jBr8y9EG",
  "key10": "VjuNaMQsSsUaTkzW9hQiR2yjDovC3WTS1XbQ1tpM5sQtkhd4DzTePqWbMFCeEXf3EUBWVJkUTnZiiWCm4E32yGD",
  "key11": "5iZgMjVnX25Gc8aFuqEUDEKJjHXNXd2KU5ZjcfixUk52aXKbfQqF8z9XyMG61gxVea91uHPQifXVk6kFAQtBSGPX",
  "key12": "4DM2mUAo56HubnEF7Y2KeUZGYzkXZTHCt6tzxLH8eYYEaeqJ7zdQTLyGRLrKtnhuGdfb9C6cyGGsnQpviHVB7DDc",
  "key13": "237LbyErP1rBjHw4KJSv53H2ZtVXRhMd82yYsRsZ7ZNz1zSxhKrGreyNrriYZRaCu5Lba1Z9NHr7hN9wGbLGLbvz",
  "key14": "3xJnxYYcCpVXkA22kHXatM5tHJhpvMHMvxHRiyrgtsSBWgqQH6TRgR4tbfYcorvKr1C6efM6k3WFKBBHi4XXncbA",
  "key15": "4h59gfJyaLiWcM7VUPPC6uy4gtkric7be6TAotJqMjZcHQ8bCyw3eBnXYbtBAEJUuGX4szYTN5YosCspcwNkhae6",
  "key16": "5Ly7Et9WPmMGr7m9UePYf7W7upQcDgoFhqu5PxRLzvnwQHGSVaDu1bqzsgu4hXY1FDXbK5hyFLWUsVqKjoLJnUeh",
  "key17": "3Yicnspbrc6wx2QvLV6nUCcEEUzva7mtGeBPMDPWDcNDyQCrJEce67TAYY6LVX3WnwtfHVsSH1HmZ78YfFJNSQYV",
  "key18": "57cuu3H55pa61buRtSDNv4xbV9NfkbdSA68J4vceEsNi3BXWMqtaCLkHAdYbv9M8fc1TGqaGPGPhUUwR1mUs1xLk",
  "key19": "4SoCqgmDvBJu46K4J87fESk4QtepsmgBmyhJJ63YKCHpFP3txxRvR7xBuKhHDzBqnZqEu7MhzifWxckJ9UpTy7Y8",
  "key20": "5wmV8r72rg8rtn5NPsiJtMNKJ8jQXViVRRZerMfUVcQm7VsXufLvxVXtTSQf4YYXa9QqCnrW9sEhq2SDzNyPFddQ",
  "key21": "3EUZo8DLPucxLjxVc1wqJfoXJB8DkBEFngXBBppxxa8VYW86W6kZq5ZDpuqfHo35zikKxAShvh5uftnXDck5WPYS",
  "key22": "T4orJrAbfDYmKefrTwoZo3QVgfM21cGvrXGciY7A6FAFY945nAHXG8aDBdEa8BgXECKSuXKyTcB4Wngfta5PVVA",
  "key23": "5u2xFeEeC82SYoqfj6VEPXVdwmcNrcnejN5tBL5QVCVYkiKZKzZeXsvei9wfc4k1aXLVsXvH9uoCnCmxWJgdg3m7",
  "key24": "Rcz98Q8BwMhrJATYsbKr9PZR8MGLRVhHw3ExoXtNxhpRe1Haz9aj1BWu1ZkGKZqHXHW9ryg5AU8hv9rV4rK5w3x",
  "key25": "3FUe9J5JrDiPRJHRfHK6oPs8QHwXDQ5qx2n5xjSNCApaeDttsAZZzKpjAtLhSdn7znmfU94aUKHYSzMR1ALtiPo",
  "key26": "2mWhtHD45j5qt3PV3P7mJZJ7ugQUjm7YSWxVzX2CFBznX2tWTdS7imU9px4wDDM92wUgEboSQL4tvA8cRzKzMdbP",
  "key27": "3bhCXMGYhBc2LjgVs6CJycnba6Nj3Kd1PA7Qe3HjieyqB1293wJMh2HZxRKWVWboxc4fkbrwWU5S2y8JnS6xKiqE",
  "key28": "62DyujMLwwib2ewKydsozQbej7p6LzKxaBaXXcQL6e26ntJguEuX8ZL38yY83axjNRMn5wnbpGqY3edYWbs2R8Mr",
  "key29": "3wR9wBHaZRuJ7GBhoWR6RUtmEV46yJ4kKhWrEHttRsCuVLgMNuKtQLXVarzSCacj94CyzKLP39KeQtbueqNG8HT9",
  "key30": "338kfKahGwPVrGe3wssThyEFz5d5kGEd2NDWQNhGceVnGuPVnWCSfRz9x26SjszhTjKUkz7SE42BmbLaLN9Na48j",
  "key31": "5nPq9CsU6ibqNEfz8n1h4YY2oukPfdBpaQNG4TcF392Mmc6gHXydn7qxLviMbSTJuLypGrktgFQPAYb2ykjexrWw",
  "key32": "3Jw1uCFYp4Yiv8a8Rcv2XEQNoFxAhFXFj5P3sPeUHVX7yAf9j3uQcdNk4RhrKYeZFpFgTTRRw5j3GgjQDSe2eseT",
  "key33": "4MKowf3ek9vdYCHgdXqPQgzhHQBgGunZd65kiRam8AUsEnkzfLxFGSiuLXQ8fxHS4QAjagEWkEYNLVMwxVQ2aeJg",
  "key34": "x2tFfeQSXM2QqopcZpPLsiiU3hXJSU5kKbjrbise9jSEDfMteKiCjBSyhCTMJd4J5AArorcuvEQNayWHamKppEm",
  "key35": "5mfchPdbi6K3hZoyUf6XeqtvXH7YY9wPzdgW3m6oo9Su6eFN83BBZe4rXgprJrcVzZrakUjB3skQmEtBrMi2yfMB",
  "key36": "2aseJTyU89TXbz636piUVeeMyv89baP6ngJgeQLKCxcTiQpGK861KrwrAiL7XATwyskegQAkEQj6VGs2m1HcK9iU",
  "key37": "5mbHixdPtS4jiozZXQDDDu1xLME8bNgB7U1kY42Jf3cFx84fdzjq8SHzDruNtYLXdDAn7EpfgFSAxMB3RGmhor36",
  "key38": "YrNHgcgmz35QtnKPD5zq2VnpzDZuFSAnhKkiTJiPkQ5yk4z824Wxqz2Tmpf4eDWgPc5XRgTSWGqNxjsNpaFQdvv",
  "key39": "ocHrqhEWDCFcpM4pDJo7xCL9oseNsDsSCQaogv7p7Gk5QRwFLFYKkhcokVJDqZAAMakziZmk8hmCiR5HMP4ZUr3",
  "key40": "2FHZfxg5UB6cNz6mmBPNg4Cso3j1Qp8Gr5Ky5aSsM4bgt9Mhq9mdTEdruQCvdmmbBYDxppd4E7c4rdoszqtiZBUc",
  "key41": "rKkE9DAtWiMxqSJAniJMkmixbSLo3qVojTPfbqabpAY5DdsnKGgQNQTgjB8nZLFakc2PbsgHi6tWegJkCvGNWHD",
  "key42": "xTb4QZHEnqCnxXiAfhecJEtBSg7dp81yPhKfgBPNhroLaRhrqmry8RQ4NpK71H9UxjnwZ327vzGvKgNEHfZzkBD",
  "key43": "4ejEb8rM9RHDetkLGcjzpCdeNuJLgUphSPh5vxukEZkR2cvTmPx2erwmDZ7VBw1XEBubGiaRyUCGd6Swr5XWGWzS",
  "key44": "434snxPi2JUcvHPC463Akyz5B2YRHLDRR2QaayKH9fpSv23akk7PrZ6TKv1wdxyT6cz8dVpEXgFET4JPmYXkv5Yh",
  "key45": "4Yng5EbEkByBoiEK8vmt6gtvuMJPKp7VQB36XQseQsox56PstMDHHspQaoGowjSmysb4wVvKftc8CEsKvNfZVZc8",
  "key46": "5okGo3fNfi7X3dh7CTyuEoWESJaNYCcxoY6Th5aubW4hqmKqbw3q3GehGpCPVgbXu4GxLSvRjBzi7mmSpx8De8m"
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
