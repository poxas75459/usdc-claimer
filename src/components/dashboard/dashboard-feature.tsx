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
    "q1B7g9aSZL1Amm6paoLLTacbwnXJrfcUZLaC5YehSq65D8wjZM8mjgK8adCBoVitUhm5gWe2E8DJQ2FWbTSoGcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28jc7wzEgP551agYSzQkvxDyHxTKkdkxEPYxaiZZmD5GbrNbmmUfDTzZwM7YaPhrdJKM9PD2NVvpKnkBks9B8EQj",
  "key1": "5ci5WcHLnYieG9Y3JbRpnbPp4xcT2RAPNtQTZxDP6DxJ7eAsPfjt9zMbovw8YcpupyyN1ERCKKXXhWY2yKud9UEd",
  "key2": "3LcWvHeoqVkeo8yycrS8DPkNLyJnbAnzQUniMJHjcAcdr8WXZDNcQFmEoPRBhcH4TvsCLAgB7J27nruvrsQL3fvU",
  "key3": "262vrx54HxopL6GHCLex2uGpH7FUVPAW1HkxxYNLH9C615MxUzz496fkUx7n6ru7UyL1rQ2yAbJYEnKUG5EZr4C9",
  "key4": "5iDkZn35d1GaMs6zuhMPHbn4TzA7eAE4Etkq9RQPC5c7vqTVM1Px2yZo5MEpuSkgsH8cd2wdCL2WVeR7tpcQM9zT",
  "key5": "6647QUwcK8Ciy9rDqxU3HednYFgFEh8zSY46L2H6zdWXWMwnzaFa62TUmmDEFRWxNVqRdpAnoEtW3KQkczWtEzws",
  "key6": "57KZEWZ7wThaZ9rDZsWRv3Esfy3AUyK1ZgAjnsxmg6K7roE5N5tz452KYf5kWfYPcBEcwCJcuMYLmBEA4arGZjgq",
  "key7": "3ZFTRoULsAXg4tnz41EtBYei6AUT4QfnS7WWEdnHfXVbvCh25gnUfymM3qywLqytxE31mXQsWkcyrhifMooemMBW",
  "key8": "58aXDTCrsZ5RqJRNWjMsgCnJRmKycESboeMJMhCVpbWgqNF4bUjoYVzW1Q4kEjqUA4QH9s5hEvJbvkKjrM4wgZKp",
  "key9": "5z9Bof697WZbcwf5Qr8PYENPW82Hp3yRZ7HQZK4b8WQFpKhGQbWqd7ak7RzAApkW5vYZQjoE1Zdq86KN7V5PhNLm",
  "key10": "5hjVuWMmZKMhgFHeida5kRw4qp7NDM23RiLG4VRQ4E2RiHXcyKrFJNt98mpjHPg2FY2bvLBcXg2saq4vrmcyVTsY",
  "key11": "3BHeYXby26Q7kyRzvPdLZUEVRXSTdCsocBk7uGbpJAJEChY7f9gkbbfLhy69n3Q5RztLGpusRLLK37kjwNn3wbSD",
  "key12": "3cUmiuTLxcjUagH6suZjpCXHtL1gzEj7sPmUg6PgYJa8vdTCZcsvC1CiTxSTvEN3p72cS1jwAG53iu983KYHFqkP",
  "key13": "54SFUdfvmxg3xyPxMvVT77TVSsFChn1WJJtKMnZ9dDF7updZEwPH3QpZd5bQwGZyrTCMHf7SgzfzDgovXco2EBGo",
  "key14": "22BVuveozC8hHwsvXsH4xMgvWnN8nCGAVHiVg9kXuvHCbUpYa1UWssQs98SjZFtSX2x2T7rmuRVt4ckGrSf7aMec",
  "key15": "4Fd4KjwY1JYn8jjepA3vWv3ND2bcDgccZeq2oJkYV2QhARiDEvuGEpFbxrAGesMeUFHggFQx4dbSDWem938W7NZ8",
  "key16": "4HfC4r1AkG2WV7CNcTJ5xB2QMUpoQiDNa9HZ4WRkj1BpVvMsY9a6VaTtGrGMubhPw8Lf5gruxbTJeZTeC3p1vGPW",
  "key17": "mrNv6pWwzNSFyktHvaDct9qGWvNos1wd2NeG1XPWQQ1XHcAQx7eRLrcA9tnkvgBC4vcTd2rXvkYJsLKNb3mbFsy",
  "key18": "4iZkMfwCXzUqqZ8K5tXtSAssw63zKBT24iLMSGCboAqUdJZNfxiwUJ4FXA1yVwS3b2ihmEy5gG3DYWuc3aqHcdNR",
  "key19": "3XvhGS4ePsz4aRuQqbpYfhsraK6RzNshHA5PtySABrjV5bXWNCSsxGWSh8juSPd89DwBtrz22c9YPmrwLNPQtRJv",
  "key20": "4CLVso6ANuXQcsAYVfM22f6TjM9enbec2frmbN2sEXxM12816r5xFGCNjcRJoVLYJS4ngM5wUD3f4T4W62Afz2cu",
  "key21": "24bqrCVC3UXBpj1BMSDyfCxHBWcrWwrHfwp4w8ARwcKZ9XYKLcEd5PPtAcPgDShQ5o1ceGFyPWFpyYQKF6zUS9Fs",
  "key22": "5Jr3rkhhS2r5mzZHxx7QzdYP9MrjZSmNRwoH9ickjKzSV9dRZLLWFSynwy4j3NxTAtimL5qpUgQuQACrpjgr21iE",
  "key23": "5ZYsCo5Q2Hqv6dyyvnS3TEwkG2EeEeSMifiQuQHkccbaERzVscb4BccXHTtGP8rEbYQwq8ykpqw3g1A1nu4dkGxT",
  "key24": "4VjwyvChAbX8w3Yg3Cm8uMptBwfNwKRmwXsVfKqNYiTxDyiMrn7zUN6N4HGdo239enjSXsgo3WN18jyMsJhXwjzi",
  "key25": "5buKwskbMK2dZ35pqkSxffTwpzaG2HeTZsySAC9QnHzctfFrw1sK4rArswpQQVD1SSGNQpAJeiVzGdJEKmzm9HNe",
  "key26": "2bNRTD3kbgiknk6caKXVcdUaJq4sYTGrXPreX9QeHWPsJ1hndrH4iNN2a21Ae1iDB7Fbyw3nLLnc68KWK4TkvF68",
  "key27": "65Y6RFfvaCxd3zEwZRgmiuHKC2HSobgoetrn31vTGcCazPcJAw6SCMiN8Yz5oQcCEgoQqLykexNc3sv3t7No2yrU",
  "key28": "4N1cKGEXoYLCExhAE2N74tcV3m5W3EP1Bt1SSJ7aufGBhLL3XHLPezkwcJzMnNs3p8rPaRvD1DU4NtaoPTUXkWN",
  "key29": "5nmRUdydGaTSKLT7qSVVP1rJun8d1x5dJc5PywzrHUGVEkqG5vJAB3mpYZbCA4SM6w76q8Y5dJFS6wPw3YqQEwo",
  "key30": "X4PoWMgnCAYxra4WwNHk1yGVZwRk6tTB3zSjAPtN73CqrUzarZ4bYa1nAXMwDkVGK1EPNapf9DoCWwYhE3uRtss",
  "key31": "4WQAcGaun5UWLyCCfz7U5ENatfxzuHbiEaoCRLvz8PqRh2gnLsudUXssq9Z4uBSUhUmxPkqfsMpfezYrsmMq37Um",
  "key32": "5xXTC2KHjDFbM41jGhxWnzEQQEh5hcNq8Y5XyqBEjgmvJGkrevqpNzgCoM6FLQkKD1eWX6mfF8zCMvZ7XDD1b44h",
  "key33": "4BUgGJ8KU25TALYSSP2uUR7MMgLaRsgF25U8tUfntTTSZJsR4zYnemHPBm39jVU61yMTjViZAqdWPfUNJ7Nn6K34",
  "key34": "oswdg1tNPJEoKgJo8RdQU5vxSd1McJk5m156ZiM2VVoByatNtipg7FP5b6EJmRYm2UCJEhrwP7wSp2ngNwHCXey",
  "key35": "LW2LNeQWRzzgawfeB8LnEMSomvuaHGboCqDaE8YV2UTEhSqfgxy3LHdS5mxockGrBUBsqKdCSP4oMkR14ZFGZRZ",
  "key36": "36N1YYAPSu2XuuL6HhYWqTvnsGBUpW2mCcGjMdGjm1a6rXmrwUDgFw7wvUKQRs2ccxWSoqsL7moc2QQSsXbZAWat",
  "key37": "5oWuY3cYMHodBRc9dzZ55QnE3RRRPTZcNpyCndjTVavnPBk8L28kZJogAAAe332khuZFwEjue7dAQVDZJsmTLmeD",
  "key38": "ENq1maPwePgLm3JpSmNMfH2HS9N5qtWenJfpLLrpK2L2qY7i3X7n14y5R7eVwTudLrJT1TdmhR7MjRBP6rxq3ro",
  "key39": "4uNJa1hzXjoQCQvRST3dxuWgoMaWKUpXTreQWWs5xrXLCnAvJd2ruK8bsvAfZsK83572VyX6GkwcsL6eYkGXf6e4",
  "key40": "2gyMfJvHapPMhwBptoq4Dz3HjhXCfbM5j8kTJ4Z565bynmMzwCAtjg1a2hkxhGdbtLTJzzRn3isrqiChRgcucwwp",
  "key41": "65K1BkfggZQYgBgJyqW2atjXJc7AEBb2xzGDdZYMUK2GrpvYtm8EVSHqaHiDNBoSzWeNrnoJySKnfbRyAKK3aRdK",
  "key42": "AaLYK3rAD5Amb9koT3qmWVfEnZdwkYu7hWogaT1YrkVQLhDnUicfknw9Hip7KS7SLn2vzwkae9tqYHLXAKBQvv1"
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
