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
    "3MrRhCU2Ua24A6RyjRy7L9jp1ycy7pN85uKk3jwpcQFzT1ZbRwr57q9pGmRN9d19fMxfL2pHWxisVDpvZzpf3TGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aT2r5mmnRKQSxrhpUthm6KvepWVDrgGN4mUeNUHHi7QuyYriLPtnkuDUszQgZf5p3Ypotj9Lsj7S53h95UCKvwY",
  "key1": "2X7wncY9CcE4AXatzgvouuZAJpgT75apQBD3VpQLvgiK57Ek7N4YXBCtZk8c99XLjSKE5cbVBC1s4SCXD8wcfTan",
  "key2": "4rwkMG3iqq15Rp176gjMsoF16CiUZVt8NMtn2ZSFtv396G4v3LQ1AkwSpYXfhU7oqfL3Cgq8LYxhPDaT9HSvrpfJ",
  "key3": "54MexcyNKcJ58a3y58sHLMLDS1uJnakTzEqREfjuVCApxqAhpDkGFse8MeRMFLFbsaHwtx6E8yAMoHjPkc5wPBK9",
  "key4": "3WDgfmhHyWmYfiWete1HF51nopnouYPE9pgwJP1kmeDX4P8FqKmWBuKhy12unGgZd4yEiMU5rVGpcCYPSYkFgAKk",
  "key5": "dMKARDPyRXEDWDALtM8aGUSS5SP2shj1w6J3DMkh1QNWzMYPrWTLK6FVzEGoDs3rnZqcSpAq3N9kd75mCveYaGd",
  "key6": "28NqE6xtbyQyEgPSZvfaeA8yPmhYvVZZra9dHhhjY3pFE2Sct5xbnrHGVUxBoA1rSZowjroh1B1gwNzYdQhTaMvN",
  "key7": "4iLJL7HRitDr8P5qxh24yVkzbnY7GgdUP8gddBd6xFApbmRhfMihJFASVsdDAtmKboV5PYzhqiNd6M69A8pcPrZw",
  "key8": "5hbzc7vVSQJn4Cvenyf9yQV2ochPPL2cjeVtXtqyHD8VFT5kNd2iWURJ6sGk5abVVhYA1ENdyDAXTQwKcivjwZhh",
  "key9": "5YvsKErFaEvpg7of7jHYapzbeYGry6xGXeewMtJ9ALXPCfB4Bu58QutvxjWBir6ep4TRm3eFGGcj6ZiWPzsHqnh3",
  "key10": "2VY9umXvUjzdZdzLhYEuGgdT3sKTReSnDXH3eX1nqHSfBjGp1DCoDvi1DWsdiafCDoBMvSHYrdGVCTn8BBPB4rHA",
  "key11": "4i9wY3jHeM4zHgEi8CVoEzZu8AJEqWRuZK6BmkTRHvujqGoiKsRPD3jPFx8QZLgEMMsJBJbBn56Wun3NQDmvekPw",
  "key12": "1ReGPgS6Wie9J7vLJFqDd45Z1qT4uhcCdRqTfXAGRTjTBSVva9Y5eHBpmpD6CjMmHfPFVmNSBX5wTsqL4mrAy7",
  "key13": "2FPTgFbrmjDd8Djp6XgUarUo2zbcC4dgKmfTEAKr8amne11AH8DYmCBA457Qa3RLaRnPLJJb8tWqZ2nXSkc8LcSm",
  "key14": "3aPpNM6sxT42WAGk3qYiADZH7Hgx99yRtkWuGb9y7QxLSb5mSq5cXmHfkx4diTuYFxkCBg34B3GMM484XPjoSr49",
  "key15": "2GYcN97Wc61N6U2YHfhqxLvx9U2AM6cu31jMXEmcA3ZPvWwmoebPPMkWYaaiLbiJaDL7setHgX3drEdVCFPjTfxG",
  "key16": "7HhBpTzCnLoxQiGii2tZ8sQ6gwN7YfC3cLy7usecdwHzDTjY1geHKfux8HycTW6wVongH6RJGSow3p1Ue5kh7cQ",
  "key17": "2V437GAUscfizQusFDxdhrJkrJedJfL6egiyWzjnJKnge77373euWc3hJwoSTkUXaJfHqYsKzfJmUDkzDXVsEG5e",
  "key18": "3h9wQBFVgm6m83RWVaqaBxpRHXfyTHWUh7QkM84ntjgVRjtMjVf9KKwfh2H6cPvbGJmChnrhXUD3uDxvzBdx68ws",
  "key19": "HpWRpU6UquARuh9CB6cBPPCSL6Mz8HfS5snm2PvgR5zZVthGPMtBugbpxpWcXkV3s3rq6GBb4AxxxQPEAfz6Sfz",
  "key20": "2w4zdQBb3x2RDSC4NocAyW1arfqCTUtFkwTG2ZFcm9S1U2sMYQMG2YXQAJKQy8dSPyEYTBuStdL7kq52CYoPVB5W",
  "key21": "4QQxfXLSzcn8hrQZjUKNtNtCEXmRSeUiUuBsoSrwtTzCnkLdp8J6Y7dmcxEiYf8QA6cAE8rpumbGpjvrHMAKXR35",
  "key22": "2R45eUPiY4wxey6TjWXyfJ2tYBsprW9PGGYNphezL3UkaUVtXKhkKdobJBQr1fE2L5NWQSF8ttaWq6FiPpmAhjNf",
  "key23": "bxB8biFZanxd566pQfBKuMufBQd4RUCUVto6g8P5kdTvsMZGmfJLzKTftGVkhDTTkNaKciii9RrF9hf69hbGohE",
  "key24": "5w5pBgTiranG1kfmXPJvsQnMSxb8VDJ1DfWTV4ojRAa99jpByWju5Qs2AuRnCJCSgQPstvaSr1kxBp4wuWiyfrqP",
  "key25": "4opS48UPwtt294L6BRmGX44ALfaPgirzSuGCDQwDbBio1ffDmSBnNue8LWLjBd3cQiMdjWggAgDGywDR8kASFfxJ"
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
