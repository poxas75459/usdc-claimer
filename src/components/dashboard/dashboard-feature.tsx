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
    "2fzpqqUUNAMKA7LbBUJuTjy5S3fCYeaKXSywkszTuSGDahRi4bFhy3xVYqydNU82TNVAA13BKs9PiWJDvrtYAquY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MUjSDC28r3H22b2YJdsMuJFAFknwgPbe94dPwdmuLXnfZxgsDoi92ACcd8m2hx9TP6y1GkqXkhxKyPzvVbWGz9w",
  "key1": "mrjUn11ztZevrHzjD8Jun8aBdHzqg7gw5uv8hHRmjVYmMMDNsxKiFbRRHs9962JrbTwJyKTkzf7ru8ADEVeLx5J",
  "key2": "etXfVpvkh9cw6cdtTryoDCBWjpdoYDQQHRb5VtaRDPEscvDimRWopjtJzYzFFTJCVWBDmHjDvtS3PgZ1dmLGeqQ",
  "key3": "428ibCYkGxY8EWthK9pk7DbMM8zvTu28gde2brjoSQXeB2oSECSZf6Qw4AX5fuRE1imdfWkuy9ncVrgh9XQiBnVX",
  "key4": "5nCDWvxDC5og1tSmn1ijqYBWzkVopKVFCe7hvnrCp7eRLZE9x1M4bjuEjjtBq3ife2wnVxnVJtxFZ3VKJVH1KPSd",
  "key5": "5LtzG29EdcKprtaV9zSD1rzJsRLvCwfXNgs9jPmk9AXMY2hUsBhqrbmMmDT1WYMQPYQzT7L4N7F1hbcg6EdzsbUE",
  "key6": "2GSAJ4g46DoxPUKXzFhdxu5MVcAaWa9V8y28szYywySdyx6syAAdPsbfDegdPAuiGqfywYaAj1gKJtnUPY16x33U",
  "key7": "5DgDVGxbhArvVA1FmNYbvsgBjRFP5NRKH76DVE1ZvqJevBJTa1VBNarNBtLMFaGtvA56uaHy4Mk7iZwXooYAiHTf",
  "key8": "2EcoQD2vNDe4KUkUYDw5niC9wevgcNaw1Yzd2Wy11KraEi7d7gi93heFtUQgJqi5d4M5FrmnwNs4wf8Av387FFsq",
  "key9": "35ZPYPVsUR1qDr8ZcM2i9LUTvwk4jozQhfpeToUzVCeikNEQ41jUEaDmrUYGAg83dtsUquiu3HtSHr7kPehg53Hy",
  "key10": "3fBUPuroaJXA5NcbAYhhX94r7iVPKStBjZhVBcWgU7p1tbmS6Yvf5gNnYtcvc4GFA1Zsw1m3YW6NfnDBquzqdXTV",
  "key11": "4AruUfeHiw28DJdnfYsc9pbbjsKv9sbZz9xJqP7AKKAPHntaqsHvGgmUSomr6Ey2Cd1oPRsGGQ32UtbSkWH6kD1D",
  "key12": "UjVdeg6Gd1YpL9w5EVHC77t5T5erb5PHhLD8noBuyGxTky9PLHQJqvjPdCmnn2F1dryA5XVU7fPh2q2PBwtsF3p",
  "key13": "3e95LjoDf6fxXwrNkySPQPn38N6ykqTrPyQ1qVgzePB3u9Zo6foyn7FKFtZaCeWrwsZQ6ZbjiuTsuEWKcsbanM8p",
  "key14": "2dKEhk6Cq2EyMxkc7Qh8TB6iqPKCmzkGDF3svVqJLP8ZDNCmke98UFAmYvPxoznfQPJ69n5dMU6Rxk8wwQuhRtvv",
  "key15": "2a4TfJrkdfFazmQtoavUVUN2rXuTHEycEA44mGjaE8VVkfUdD8XEm7RHdnj4hcfaqcrzzv5L84YKjnuaWx166Ud3",
  "key16": "2DrHVpn2yfxZUgWyvFvfDm66jgEs3CZXyMXYwzFfX5ARy8bm5kKKu2N9EUFEd1GkSgixGjUBwob5qywEjbMKv9Sk",
  "key17": "5Yjqv9vmrUgtfgCFwSSyfKmzHkkX8faMqhNgYRrjawyeAgQFD6381KYsMhascZz8HbFCsmrzYotakYGXGyuSJUzB",
  "key18": "2hpRTo9H74GRpywJCYRRRxZZLaJVHvooMbo8i3JjjLkYkxxbfoKWF7cYCEZpABLMK3JasgP8Eut6LHxeVPRdG2hU",
  "key19": "4ouuvLsM1Y2vMDCK6Xji1g5VVfdf3AtAoNohKg2afXSgeNq7irWSmMqGebrCmtziuEoaespR3jYd7qWj118Tm4Q5",
  "key20": "2EwNtW3yfzhsFLyyJ58ywZJx7JoAWkhjgr853B7Yhr9sKv2b1BJUzmWvJnSrcRoQXU7RFocniJuiY3NJWCj2pvVm",
  "key21": "5EBGDQ4NtBSG5ZXjFN7GvBG7DDUSYvipQpa2WxFP4tez5A6E7KQXVqN4GuAPVGi6w9uBjKtKNnYd9wgd2wFKZK5F",
  "key22": "2rwyzQcneKTf7HMFpdsckaKb8McD3hP23PsV17LUDwtKGLbFtBxQaZ4rAhBH8FDTb7nHsRLfZmFTwqh4PHDEdWDg",
  "key23": "2gjyiPy9jGKYNYU1gE9k6e6MGxUqQ3Ev6kckmz5vN9K4R6FmRFhQNjQK2a6QLCYshCkaccpW8XvNa612TAsMeyxh",
  "key24": "5fHHYaZPJtFtzr2jAxvYmshgjmQcPJorw9YkjzKDcJgLs6iYXjjVY1iRx2ZRHNZVidpkQVJc26wagSpCFN6aEwzu",
  "key25": "2wC8PZYgdbHSHDzWnFL3TKh5ftkzrhvbnAKxRfyKckrXfaWNJrcWkFv718gvr5Up8HYdpFWQ5wh24cG2VYkMwtTk",
  "key26": "3hMaJEzKXHWxafrDC1AwUb3JcGC3NcbHp1GaUzgGnTQaH5n716zDNv9sSK7jDvCCtk8Rswewz6niSKmskfXoLSX3",
  "key27": "2zCRa4UirnZX2YoJ5t7Z6jkkFi44uE1y9kXfFFTQXngNJnwz57mECu4MamjL4RBviL4xjq8dUGyXyKGb6tKVLH1e",
  "key28": "3FFrSJgMh8PMYUJGDiWABKF1KUcuKCAYGioPp3LsXU9wDPEcU9wEV3LdL7vXJQUm9KGQ5YzKQhfcTJUKmLw3rBh2",
  "key29": "2nCqbVzqjVNa5jVNG4ioz9F5zwQP8w7DBQGXVjn2KSpxYsVF5tpnzwE7sqRXYxW4wmEYmRGQ9jvuKeEjmt7dFbDf",
  "key30": "5ZK2p3KM3MAZCGeB1NBQv5FKPMfLwnFuZft8hgShnuX1sdWP3pTqqpAQpuokXgEuousz3NPjfGqJkupPfugWPRto",
  "key31": "5NgPxFXpejHei9vccN9UzuC2ryo8q1nh3ydf6bETFCgXHWj7wjZGeW7XAmqXTZo6E6bQgy6Qi2Hpmejoxj5SgACY",
  "key32": "5FtnDfVXED9qVaDCuT7hjgVbdePrVweMHKBQr9NHArNFP1LYRHi8fPqU5MPiEavjsaGHm5JhTvCmgMvCAcU6SEoB",
  "key33": "3fPEEsy3XnvmkSCDaQBZUSo8aYc8ofTVCocQzKNE8MjQScCup3UNbpNS5b97LfVnkpNhaBZKuhFM5GkbUGs6nmDj",
  "key34": "5UuwF2LxqP1ZdfLRDFFcunuCuYkz3D6K8RvXe2Zqdu6uNeU9xuB7jUR7tSPG4fDh3bL6UvD9BdQQLk5oGgTYSEH1",
  "key35": "3BJwdi4hb8yE27HP1RVHduWeyW3zTkhoyfhPFdzqy1sDHhuQH7iW2445f2VRoo9cbnPkd85Q6uKDCDsHJ5GJBmEY",
  "key36": "3ckgetu3XcfovynbFwE3qMUQvrvaKtwfnQhL2tqWypXoYhgwFjKbqcojuZBgw3JDAZoKhLom963P1FbPfK6R4LcU",
  "key37": "5tRHdqY7wZ3sM5KTtxM3L5491s9ydPetap8mQWo4DBA61xGGHysdqHDitxqtyu46HT6faNjxdqEA5ZMFJ1H4S8CC",
  "key38": "56jUvU1KgTapGKQGemQJYJg2Zh26tdPJ63CuMPSQGALR96VMzcMFp7MY5kgpN4Fzrraqq2W1bwJHgjp2RcKnjdCz",
  "key39": "36fRXw8NJH5mhEfJGuQXLxED1a2hinatTiS3veyxRkCZBn9AgnAoDrx1j9ePB9LgXfT6ce8hnnYtKPHZ75osU8Ps"
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
