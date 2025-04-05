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
    "5nEL3xjmrgLoBu7Z3FMRz3WAhMVXeRBSuYyWFHRE9PKDwS8KxZ6Fg43kh6nPoFUjncqo6g9656JSVLL2dSRasQes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9bd6w3sudfjhuxShky1RpfxZ891Yk9vrsDKxFJ1kvtiL6RmKUMAazFvG2BfEBu96Uh8Lut8ACj9d2kfTzdJL3a8",
  "key1": "wsT5J7J4UMG4pg62HiPMSZ6xy84AuF2AUiaryDHBn1yktUc5TfnMBRdzADS6XVyv4V2w4TxJ9YvipZ2Shp8KQ8H",
  "key2": "4jz756QaTPDuHurd4CmMabZ9rE3vGu2G7vEwaFXz9H4sMw3xRPGm5geBd4Z7F3f19S8pE77qbkuktjLC2vNbYpk7",
  "key3": "5EtQczPZd1r5V9nTc1kJqCJPFKcfcizQ3CMDsoasRJeMFBiTatWTHUwxfwwxjeScpEiLnooZJWQLR7iWjWsjGHHA",
  "key4": "4SV1R7Wd4RrXQfmPRDaVn7hJKBypU5Z8m4SidSBa2fKHuXgEaazhYJKx4wWiwErtQPV5f1nauUthxs8VcE6TWrmQ",
  "key5": "3ASsA6nNqTXj6o2qCD4qdf2ph4PUr8RrJ6oHxMvH1QauJTXo2dQfLAVdAQisrPXTycyCeivVyTgACA4VZN2oewNh",
  "key6": "4uCvkan2SNGCXBghgUaArXeNgjTXnvLx347pTW4dpmLZRm2K8YRJMh7M7YQ8GYE1t19KoLMGtW4JEx1FjJdYDHBJ",
  "key7": "52P6kWaZ4gnXBCCvXUucU9ZRquWjdm58o9g8qpJHLPi7DSZoykR8jRb8Pn9QfSTG6mkFtavQ6cjDdthqLh6zoGSW",
  "key8": "4qtyDKQ6ggWXpDx42RTALQFsZ51ceD1QeQV4fVCtnybtRjk1Vq4qprpnGXJENE7hqxHPEK64VkbBWi9AQhh8nkVy",
  "key9": "4geM8FGJrPmREw7eKtScwoDn4wv6hrhcH2zQRw21JpNcjAuYNUAwKVCM7WZyAXQx9cxNGE8wQBicjR6qZRKBhjYz",
  "key10": "3ZFm7mD8rTdNG7VhnA6SuX5daXvmPGUCqBycBixCoUTr8CatAYABM3Vp8To4GYhh7fCppvChWCw1MNQaKMmoYyKh",
  "key11": "43hh4uCUJ8WgvxURGQ5oCHAJ7DMk4ecxTJEY1K9NS3JBuMBz9hYQybt7yUrm9HpW4pPSgw3FVDGJBH27qsEmMHMM",
  "key12": "5wFws1mu1M1Ks1hSCfnq4ChE681jxb7pHr3DVmFaCMMAk8HYonSVQyt5N35mBQqHZsbMwUTt44wSLcPmNz6BuG7A",
  "key13": "4jTuY3w2euQChgm6j6tKFj4GzoMKM46Gw6K2B4SrWJTJGR8TrjZwjukwGQBKhUdEDBfo1immPpxwj1cxpRou6PmH",
  "key14": "4c8oKNbmpU77n6xdBh3gcSr4uUQwN3JF1wzivwDg8ZrGPXWqRvz8gbDykGYUendNAYEK7Lc8SdngY9a6EBkFyjgy",
  "key15": "54ru77cce5nYEUp629j8RMTPA6TFeXgNzPuQ4KL7rLRDjEAmUnnYhshhcKAnz8DxHLA2H6S4ghqZVcXiQd6J8u3z",
  "key16": "4BT5BmLTNTdfCQ5mKWc583AZtohrEmb7wBwhRmsW3RQKERnNBMdQugjo8g6GQPpFpEuYRXt8njBXz2x7RRG7nTQo",
  "key17": "3S3DLv8wKuZMx5FGVecsQJ9rBuJV4WyArg3xQLC8wAp6m2hfD36na1BgBhwcaP1FS7ekWUx9WdQbH13VohXT2R1b",
  "key18": "44Byi34yjTodJzo5rvHEN6BJRabQnZDvxJQ2WTyCqhrXHQGDv8fBfZUJAZGjsbF9Ebzk8pQRrN43LpQPChHuVJkV",
  "key19": "qe967oRHbmGoa1nt8csTP1YTJGTWBPRNH9XCAiA2oSi6cy4sNxmMy1wwML3MyJkpfYXybLSfobJYdKWi8BrdpQT",
  "key20": "5fwDXwuXu472mX15bLwuXxkyoU9xbbsGNWZS2AcSgf7QmXWjsXXExwGk84z42WrjoWdYmKjgGun4SA5mJhGd2pJm",
  "key21": "64ET7XB9YbwQkDvedPTMTzkZaDea2z22kY6xojBLfq7PwU14Cevu2eGFbxU3WSpvX8gWZFHWo6A32sppVJtcpxAq",
  "key22": "654c63g7n1d2rxKtvCr427gbL3MHvd4sRC7Xm7mgEz95x1JffReugJAoNU27nT34i4ga1wr73raXD45dgfo8MLYu",
  "key23": "5Md43V5pcwgujRi45g1Ma5DKMP2E4QiUmpHRpsvozbXKo6pVzjeS1FBD9PDa4J7Be7iBgtFSYhtcyJZ1J7ADEa9S",
  "key24": "YPXyhMpoCe5i97KZvHKsuS15DAKvmdHsN6suic1CdQpP5CwwidUq3UMANKSFBb17J5c12hxrFFwRdmVFBzut6Xm",
  "key25": "48d2ZHsS8KVnFvMPfoGvR66rjmBPzYrCXubZfzTNLaM3QfmvRWQXJgDAzZJra64PYaX6pzZHkCi9Hb2tQkY5xvpX",
  "key26": "U96rDBph1wRUZPdSdXARZ3oy4h5y3nG48fWN6L1gmxDuac1Eh85shRFAqJsq29dKba1HPrHRZswNNhMXBAjRKeG",
  "key27": "3mSvr689ty5E9fsUy4ZS8HkfWoPHNSDpr5cWVauog3r94F86ZVA3aBLFfD1xowQz5izWwboquwRLWW4FY8bwsxeF",
  "key28": "4RRfv8krgsfFK2mh8Rm9cy3yfmrJqzU5yoC5uuQF4StAT8b7WwQaPk1jmLj5V7V9rUavBmG7R8wPLHBpRHxqBLjC",
  "key29": "5krzykSz6fpJvgaY2yGpSPpLsLPrZpxhzhVGiQBY1Jp95N1WzEQNuXZrYaWenn74za3Qm8qdvq1x67zxTyFpnea9",
  "key30": "55VrNrcvuBYFcJksvj2FzLv5Suk7RJ9VTsKs8k16b5nTNkMdep5c28XCJ33P7NiPejNq5NsPfRxzfQvvaS4Nv7GX",
  "key31": "2eCcxXTFwgapm4nDXQW1KeTNC2tvZqhazZ2jP4vMT9xa6zkfQybCSXBV5yxYfgEcfYc1U1YNFYRrQuN4Zd6HDevp",
  "key32": "4G7oSz74qQrhURTxGnetCQBqd9xhsmU96U4SP2TKtVGiqTa9XN6iNaAMSdSRtPWMZbgJNSrXnTjLXqx9mMCWMQLf",
  "key33": "3uiXx1qs8Ub1aRRjbeunqWNga7oJv376iphX9CbNxcF78izGEmUFWSeqqqDqUyrsP9zFQd1TxcAbqMajjpUdVDpz",
  "key34": "3XGQ7HG5TS2sSH6QSe5wTE9rWjvvSkeg5jrpAsyayTMZNicVExdq1kdoNXtRtxp313URzvDuunsX62zJsu8sGmB7",
  "key35": "2W2XjzJNumQM2mw6yM7Z7wmr7qSPPnRxa2A3v96SjcAQa9VmvZ6FAj83L369kZAp2pAHyEaqHG9XSgteLtMesj5u",
  "key36": "4ZV8BY9AU6o2jtosTwB8fP6cddSnmB49LkWkhFqEgjJ3zDYC6V97ZDPeCZUsXubE6rX9z8tvZtcdNFwutZ6uyETS",
  "key37": "bUKmRBbn45iVCBdgLTtg4qjMQwZshJJCef7GRe2ULA8gKUJjNfBLPKJaNhfTK51AtAD5abpSEFEJZFvfXxYyT1k",
  "key38": "5kEJRBFqJEdw93mBCzi1r3j89TfkDHqkBijm7R4wW3QiySzpc9LG6sBaRHmYRAxH1Qy29GEgyX5ve8hHuGxJwkbU",
  "key39": "62re5KNxVDxXiXgzyB5zguLsP9zKc7q7JKFFwK4DiDTws1BuVM3JpC7VePWvioqpkmFyRYN2jWVnbA5VnjUTvmBC",
  "key40": "2FqU8X5CYs9HeBYQaxhVtyAaiA1FBJRH3zCxvXRxfRCnT8esm3QYcYbozZL1qMfiuhi4koSjbtwvSiwSK1gajCXi",
  "key41": "64oFoifMQUscGnGWwoenT2Tq4Xm4avvTD35iKsi6V1G13HDvcg3ZiSrMJiq5d1bD3rGdA8hwjmNx2tT34skcw4Mi",
  "key42": "2hq2rNX6nbnEyHKv5spoBKsbrdbXvoPV1cMy5nkD8ptPZCF11kCm7KaK5vBzGk5Ax1kuV2CK5EYZ9v1k4EMcZb3p",
  "key43": "NujvwWzckdJfzQdSf5Dm4rRDYHbcfVZcxfENz5faVhyPUh1eEbCrqpsVLBc754BV9r4C1er3jLH9pCEY9fM6ATy"
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
