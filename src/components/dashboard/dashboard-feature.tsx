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
    "5zJRy52pwcMasWq5KySg3jBNVZJpnETP2zUbAHq19QHLh74yW8LspXjNykz9GgzJ9mfXE7y2sVEK9XoByfjJZHbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28QTw6xDeDNxKgcYn7xtt42hE27wQVS6Y6w9jGzvenSL1389hdLgMcPRM5rw2Mo4zzaRJ2WBvNUeV8iGLX1FHCex",
  "key1": "4583hVJvqAa9D6Ezzzzw7EKsvQpMM7vfs2wjasuc8ZYyQW7hrukof4qaC7DxS6bBfFZm7auq6vkybTELhBLT1o1z",
  "key2": "2daSkbMVq54ktQDGybsRVDdSfn8PozGRri6RAs5ttXWK5UYh2JBmVdwVZ9exXMtrgJvcWKF4eRdpbq6AkH3M7dKh",
  "key3": "4driyMbgEnVHz65kMZUCFKpcuCuLmt4ojj6NNbyEvD162pXZTQvKbpGqeXnT43S8idmSMJNva6iU1nPtrzsg1gGy",
  "key4": "3Vt48cK4R2F2jEymQwh1aQXrB75z86znJeBbVKHkjBGP4xJuXFWKRqGVUApqgMrh56BFfaE3cJndCWx9no5483Cv",
  "key5": "4mrQuPQdqPjpWUz2UXu57crjHRuQxKy3rP1GyQcXSG9pmCVQLwhCe2JsMQoazQs9Rba7UtcsqHenaEN643Wz89Jr",
  "key6": "2RUemYnLg4oKJzZLskaQoBnQkpaz9NWvHsgGXSG7PkeoGZVQ6AF8zHspZCT9q9UxNwVNcKgFCLmnFqCJD5Shv1KZ",
  "key7": "3f4urhP7oBaU7pvF2qt3GurvYucrHSXRn1CshvGWmwGi28f5VXDhrD8PWCxUdSLCSEQ2Q8Tc1DS7KrTLEqd8Ds7x",
  "key8": "4nWFfpHvNLeoX9d5aAWqWLz39SmN7UfcxJHCUpsdDKz7qZLxavvPKA6XrjeiW9jNiGU5fzxW2weR8s2QiNDSQTwz",
  "key9": "5psum7fn2YWFabFJw57kb3ppYdzAhCU1i3vkxkC8KyGqj8cy3e4AJ6NjErrwWxamtmSNBdztsEKmNyahbPwCN1Ty",
  "key10": "33Wju7ZhZgupdS6PfzUNE4i4AzdT3u4kAN7RVjYLV2nhET9Y6U2RLBEhvH84jy3Fr2YRMNcpzK2mMjAY9P6KALXV",
  "key11": "yw5pAPCLNJ3ZwepgdHV4tMoh5LcuFDdMUobqVx6b7DwJHyaT5DaYDWDyhpk529KxvxKLBEhTZmFDJLgHQYWykWk",
  "key12": "4d7UhQ1q9w3PMapZhSSu6vpLhrwmvBRmm4ntmyC4dCByrDHWB6WqzfGVRcAAxt5pZrdZQokjviUTs5hAozzUTPZJ",
  "key13": "5aSGxek4QjfE8pbKcSLUpCsgzEDMdcaPdkznCjhuXLRZxUiBBG28abKk5kYT9r1A8wYPK2XokCxWRRfLqLq2GYqM",
  "key14": "MTb6wZzUFwFkuUD8s3oQ4AFddjVRa9UAMYNMvDcvz5rzuKsBX1YHBTddptSwnRyzchVrE4vf8px2dC3mt8eUV6E",
  "key15": "dA2stjDa2MLQrp3hkA24WnwayWM9hxUKcFQP78buTf6LfY1caTjDq3crVTAXUcWX9kMn82Yi6ZNSkuxmRq7ezhw",
  "key16": "5qgL64MBdZRYGUPJiEfdiFxBY9yLiqrfHC2pvxYuZJW9y9W5MceLPHCvoSXrgi47ypQbjPjxHHHYK6hoyphcXgXu",
  "key17": "RRvEcZA8cgXkCyzRNF35HgbBGCvJ8GCYX769jmruz9AQpPKg4XyKgswPT6i9wZEn9Eon2RMT8aQhbvtStnxCCaq",
  "key18": "2R41inboCmLAakVGNHSs5wktkQRFrr76o4Garwr6WYRDQfiCSB7YMpyMbCo1rQmEKYr8WXXpkyyRPVKFvyCJP3cd",
  "key19": "32yrPMTPJZSyAbLBdtgW52jWHVYsUBVBiWbiFxiYM5SgfoVjGGGKxmxR7rLrLepdH7TNAC1fQYvo4MT5XfQTWeoe",
  "key20": "QtxDmvcjh4BDsf12j8RqHUwe76iXzMsrRQVF47uVUk3pyySNHfzUb2ZBPS4DbBeukrZ6iDgP6DU1qX1rXnjxqWu",
  "key21": "5Wc2mhu1CteHYEyKVQZf5d4rPaXLQxRuH3eEYUBPqEErjqiK1c7cHJ6W3bjij7o8rFV2SfQCeHyMwvZwRxPmmooc",
  "key22": "4ccWvoj1moLRa8oTYD3EJ3QfNTqfHZ1HG4o6VAEMhxYNe9fBMV57bjK1XkghpWrCjmW85nYZvQAwYtDo6WmbHbZP",
  "key23": "5uWvcpUFkm4VGRFKDEEXCYqmfS6ew6hDZg94hq72Kru55SnqyJYWHwxyGM9MxgwM5im5xfXFArjWHvg7KUybHXvb",
  "key24": "4H2hUxUZw9MVeD8Lyd1ST9Xus4qzq9mKerbzotwtPVx2RLr43iKVExqX65eyaCsyuh1D5p65KdvDBcjHQpEZ1iHz",
  "key25": "4q9JmGCHCXmn43oZAG8qFQEW7iLj9KYN9bCfNRN2gynevkBLARFyWfokVtsf9UCmgDm1pzobeHQFsXdNS2CMGcTM",
  "key26": "3SpnEDkZPvTZDxJGpjSs2mvVKMs1juSamK3MHA92qzwZ2SjRxB3cQdScf4qKRbJW17qH1g9Zay8tNRmX9ghiDjJL",
  "key27": "5KzM5AR2hL9F9BfCnrfbU8yiNrBQqefbDmCi5ARWZ5LAZwMgysbaDnDxr7Y2ZxsQSZVFBZYzZYVsCs5udseCb4oY",
  "key28": "3Dzgiwt1s516jdc4S5AWGzxv4tPZQLiCnCzTE3x6wjEA9CZ4aBaXEyTbYWGGxQnuRyK8v4UaZxE9T9xAKptHRNh2",
  "key29": "4C1AhPnM13eFFeGePRfZP1SayfqjJLAK3HjzvghEhRANkCM6SKruKjzvhfPb8wiqKRvrubdEWBTXPt5v3uSpVpR",
  "key30": "3BgZzt5xTszquovQdTdQ5EQd628ZrBr3kr6Rfww84AkpKxnpihjQZhsHGE8FqXpQ8vg7zFjqKG8gnvpcbaKAAhHa",
  "key31": "5RSGFT5U6Fqb3esEfZjP7vRKbpg7hRPpAEczDd4XAB7tDUZSEbyffAmhXuhQouJert9ndxFryWCv6wk6dpB22kE5",
  "key32": "5rcV8Uv3NHfogGzHtf2GF8TzpyqG6BmsaT1uLrZkEaDudP1opkV75HUUm4cvKiXvwkbCnN7jt7GsZW3ptKW2QFhb",
  "key33": "3DKAoWCb815bzkFMFhPUUVhmp6vCF8N6hBa72LtWMLBQhLnXo3Uv8vjMayM7XeyLDGL1Me2g6EEpQVz2eJfntcfy",
  "key34": "notv2reiz1BSGcFjC2kSmfDBGy5rUYvhDGD3hEKiwggnZSZz9HuRBhsUgEo2y1Uzh1pst9YK3tZSZLrv1Cef3qY",
  "key35": "PGd1zwyqqCaX8C7LBgTWDxT1EncbzRAV3Pd6xuV1FuTXA6nZGCo26pFRStMmmemLo3ivmidX6z3fyqExTotyJhw",
  "key36": "UkGa6b1V11QM2sFFu8f3R4LZcT12rjdxVHxJsdP9WWeZy2FiRWHU23CpPiS1E23wS1hatGSME41hhqn1YffkTWy",
  "key37": "5nMS82CPWU1QUx2fwLNM6VTw12fBdUViNatUKF7FFRDNKAbq2suzy5Xzy6WHTrCne8ow4ydMrEM5rVxpTnE8bNYf",
  "key38": "3NgCdywrTzZS9vDjKTthGs6Ed71dPw6pPaWm7XWYfhMW3eA9fVpTgvHjDrx2FfJLoWHp1N1nMfRZEQHxkZ5c4RA2",
  "key39": "2uzknSN2dtefXJg9N8zx5kL5B8amgzwXcnGdoM6V2gb6vxHxUjd93UdFhAdSRRtPon62usT9aeL1gfBfAEC2udCM",
  "key40": "3z8PYKp72wuYnsEhJgq65fF2rnTMyJw96modYmqmwM4qAcg6n63iB5T6KgSaagV15ddZG87epiC7C34W1j99qSQj",
  "key41": "553MXoDVY7FN8Ssh7bxZKpJQ4PB6bL3Ajo4JA9ARq43cvzVEdZ3QPsWe1s67hnGS8Sf2Q6gFZMpkV8JuKRcySmaT",
  "key42": "D5ZohyYiDzWpZ6zANY5kN8BPAfUpBZLKtmsNFcKRXWRbx73UV1Uz5cCkGQS5q4MYtbcMLEvRcAmFEYoaeG8eiFM",
  "key43": "3PCVnVtTiytPszPwE9GRFFq3yQSmBynKeFmzkvHyMLXfGMLjY8NAMBAyVwQgCVckdRq4ocrkWgZBBC8AwRnwCjDA",
  "key44": "2NNF2RZkTqRwW6jvrPbqRMYYuSXeC6CtJuASkHhvqU99NiPnE2ETF15vLUGMC92qSers7seZwmD7HyAFkij7L8Q9",
  "key45": "T8spzSfRa78PJ3ktBUtHM8A5rtFCacF7QUkH6XYEVquY8JqNEoXAY9xitFgjWfoxe2zi1KoK6jMiPXjwvtPJbZY",
  "key46": "44qSPQk3azbE3auqK2MxQgwbz6WB9fCmsG4xsnEMm1AFTVgQugH9UBKXGHbNes1L4m2M3Q2c9UzUzZa6LFUWZgCp",
  "key47": "4qDnidSJpJRweHSFRp7fzNDXiPjVi5zda6vVhpaMUao9QgsajajTdoKG62WdRnK21ZENjgh5nJbdzGVAwUGzGTCU",
  "key48": "4ff86mJRzh2m2eA4YYAR7cAzab591uMwG8wfDvWKT4iiaNTMNk24vTNiWW6R1LcoNjmR43EZT4Lv4y2aH5RueZzR"
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
