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
    "4v4uUpv9gjZzQHDKgSXiJLQk8h44UShykLVBy7JTBwoffx4Qc4QLoc6SHkxpn1KYXXT1uKzU1ZTRSXnveMn2z2dA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "777eHqwoDph88psbk59foeWN8P7PSCinouuRoAE9NXLKEEkd3kyLX9TVtdecVLTVC9YqAKWVimpVEXYnjjC2EHW",
  "key1": "4v7K8ZTDCmUDyxSgMgQg9FytmK1A1RWjNcm6mzoCAcnvfv94vmSyjfUznQTZvdXATQGiWNrCcu4Ux3eiujZBvsPn",
  "key2": "673c8vAgv7TvHQtnuyzngJkJvmFwcT9yJvfRntJnXJY4v6qa6mQusZyiqwRt9EJffWxsR7cwNukzfWKm2aFVAmAv",
  "key3": "4ox8gKn4WxyCnLr3UXcZEX58LPuc9jBhTho4yadfRpaRrmLwLoDdquLppX8QjVr1oPpPuXsQZYaZwhkQBQYqtCEC",
  "key4": "5wpgdL7xQ61nmDMqLuWbWYDYraRdoFQJNKrRiEgY8YNMHW1NJ92Zxe48c9YUnDPEWrK2uaXA6twrXUDofwUe24bU",
  "key5": "3E1iUNCisdGG51STSY8rJipCsfAxvAsVdMreiUe5m5G89ovdHqeG134Nss7A9JVgR4RJEjqx7UvdJSQDzu2jbbJ1",
  "key6": "2cHFgkUhJKcLekZUhXM8okQ8ruvTuBcri3cqXT1PnRdnRUf2hJoSE5yfgyvzQ3THYDE1EGwrH8zb3UpCEGWzP1Mt",
  "key7": "3KvFqdGdq1oRrnUY1qnEhKNuEynoHerX5fiVkT4W8x5ZBB5jVSfCPwJVKPHQP1fToefgovyTuatZ7cqZzLUqQN2h",
  "key8": "5HvEsVZdbMQ6UtpDDkVCXQkd3V63KuW5pBSq8G5CF3SKg6ndCQdT5oDU4thNpFa8RFcLvLUBG5nQcG68Jm318BYj",
  "key9": "5dRSGf5AtzSTvCFHSa4TWo5yvDrnCioGLqS8zWzERbu5h4yuWN4Wx1bvPEMwim4nduPu1HREz5PvDMctm5kWcAgG",
  "key10": "eXPFc2Vu6noBqm1gyc3WeHgXf7RZUsf2F3qjE4eRuHqvfrZNuvRVWbNv2LPnL7PTojP2ZBxkDj5oYEqkhRQM3RN",
  "key11": "2UYKuVSiahc7n3t8jUJHh777NftHuYYUX2SdndtUKk4JzW5mnq3kpx6w1okYh265RzX7xbMa3Vp2PCcrr9Syuz6s",
  "key12": "3iUStyuPqxMnvAVo2AU7zot2y8GEBxWqFDELn8Z6GuZmqvqZJbJMtR3uN4AkcerkTq4fMzSvYwjhT8Ex9uXMvv4a",
  "key13": "5BdVGyC385bCxkBXwLdGphzv4tMrEsDzWE1SUDZ5WctbAWSPhtfhJH8FjFCD3TmVj5C1BmvH28sHAPaXEhiXwKj2",
  "key14": "3Y6J4Aq1cGtEnJS873ApGSfeMjNeR5UHMicj3t7kHjMrQK8wXFBVyCVm9yMPHwABBjnpf6pcrdS8kQ64TWyVy6ho",
  "key15": "3JsysnAxrwwkUZRt5PySWBeA4t3N1FDweZGNRkyFCQAiQLiRnhPJ6omoEh19XD9ivdgVn2JpjrxRkUWTErBaxsT9",
  "key16": "3ijn31DXEkTrcw71kCi7kFpcQKNTUzdyX5CxPdDwLS1cBpYNvXrEWaB7buAu5YuYmDWUDGjkVmfkdL8zASRKeaqD",
  "key17": "21jNbjzkU9U3rFod2DSbMokPte1GbSdWGFrXCkCRFtxj9MMynWZmqAv4itGgWBZVuhDBRHcFhYWGHFgqnXmq98Jm",
  "key18": "5rviJYBgUKQveSsXUJ1sQ6QzyFa482xTdpnLpWrbLNcHh98smUUCFmB4SUgEL7EjrVBjfvPgPCkRaXrVr2eykz43",
  "key19": "2tQV1uGN6xVohik8a96jhKTd7kUq6Ew7df5tRKD3SxvgipcbaUB1PszUZTNWizWE9AYPpvqE4QAMpo7pciqu3bCo",
  "key20": "5ypigA7yc8uPwVomRPNARgECXb1wvFQzvJ21Mym9CXbgWm3v5rScmEPCBiNUroUByry1n1k9nTFZte625QZi65c8",
  "key21": "4piChrMnkjfJp7hVHg7n58M9JPK7VJgohvcQHFswEvQzPWfABZDFGZm6NLF57bqf6rfv28mr9D3tS78qyxbnkzwg",
  "key22": "4T3rSRwkyJPs9wSiHmiDCT68DfDXppc4pL2eWrFJLqUtu3LpByLt365QHyEhVXew6F7G4Dhrqp8GE1wf7EwSFiuB",
  "key23": "ZSamwjgRF5SwcywLLchNBTLKmi1aA8imNKWJaweYhLSTD4X5hqGfsDjYbR3WGcLMWKvH8HPCxNaE9tCSAQdhxJz",
  "key24": "4JzTqauuagbV1KzcgL12mHoAFtDDE53MvihTgTawPo6oEHcZWDipRQDKdf58vBybc9ZvUacjXDS6EYCq8KmVEcYS",
  "key25": "3k3qJ5Qi3tJ7XBBV7oFwVLTULpTigSDAh11hQY1Jog27G8WZHiUeV1fQrANCHU3eGZ58fyygdeZ3z1uFSzYRd6RS",
  "key26": "KiFVCUVyvzdp6ywAKEpwYG4feR9SgaFrMJDxHJkBr5r81CYxyrNWY4egC6aFwZWMyzAjAvvtojLWhVmR3XWxXRW",
  "key27": "5X111A54fCSUh5RQ1e9v6zc2Jws46WUUSrDHsdpKRjsVQ5UCvMGqNiHy7MNa9MnL31XRd2z5GmP6QMHmVMXs7qTM",
  "key28": "5pXCkKwsYW8hRanxjzNCYDS2joZUWRH5KS2okeZ7mL89YZwZB7jamoCyvmMsxngfo3h6bd7RWWtU6WxzSHsJhHKE",
  "key29": "32YKGpakNkoKvfvRJsvnd1ve46NXWFVfvLT4MpRCxWTjVKGB8Q2QxyevwbHHLJQ4QT4USuKAgVDifse76SoKtNSG",
  "key30": "SADM32QLnfYytbg9ZMWiGDnX6PDRXDfkfEmnvg8yfBkz59Yc8RHyyMDRjGo6Z31Q17U8bSyyzwwpWhy9gcEDtHr",
  "key31": "RusrcMwXmWSPQjWzuvLypYipYpDrqL4wfbP1oASFnHU7aPBKZy3b8drHCZT3Vu5S5Grt6quFXjHQUGhLVcdSMUb",
  "key32": "3BbRWRaS6p3WbA2j5f3CnqHaoJJjobF6nYqo1QyC8ggM2WsNZrqzSTsu8QW4kzCX27inipx7wEpQFgoEiRTdTonS",
  "key33": "2UvLwntY8quEEyCrG2omQkNXQMnkNn3vBgwPzqapfo6xF3tVSrs8wbfJaHdaVv21A6hvQhSzJjuYY77vpHTJ6Ueu",
  "key34": "3Q8ohoPcGjcUDRcSe49Np2tg57b8rdSAK6yhcCFMcrxN89Ju5wzEQQXWgvhfHNVAjPaj5hpeGZoyCbFm4ZbFNNmt",
  "key35": "5hSKVQu9UmqnxFYwosXUkWcPWo8hWk39FRGA2mbvyqHQJBRCscKmF5ZJ2CGkfCJyP4fBrFBJ5YpWEjTfJPcs5839",
  "key36": "2k8mWWnKTbPUfZeuBYqSf54eBPuQuhBKDTsitYr6w3aWWNxndWkQnVT9bkAEjhw3HreLHES3BXUY6NHxNH6WUbWK",
  "key37": "mEHPVqx1aYUdU1uHjhx8FjrgZLQgfYNfrpkKSmJpFH6ZjAhSpiR6rKHGhFNKiXMdzi2TetwsPQqvGwoX8Mr5pN7",
  "key38": "ZPLDHc8r833VLvowcVTPMa9HqeVfyPWHSePnYXS23N89DQJETgpVb3xYJc27nGFP2SJ32j5a5VSHbNJPerVktEb",
  "key39": "3Tvu4skXRTPssXaz1fS1j28a1vLi1B4qPPg5x4wCZawn2WQ1Fo6szqNXyq9Pgu8cUFZnrZVQYRy6zshVRrgE21gg",
  "key40": "4MdsjsmJeEJ16em2aNRaAxkMv8HsNmRVHNWhokgQQVVXBnrwrESw77CwzuNjhL6peJ7KMULE9iNJMrBbjGKvjbBN",
  "key41": "5tRPw25rNUq6gZnEJTPtHzysbuVQs1SRDnR4Zd1c62dyo9guZskD92VV8tDGPis5XVubj19fCtRBH8XSo4ZNpAPG",
  "key42": "23Kchj916cGufGc8CctxA4YhXyjdzeznkmeYak6eWWpsNjM2b2Lp7HyH41PABn9o4N56wQ5fEvXFDijJED3E6XMv",
  "key43": "3i6iBkTXFkZDYqGzTc9T1v8x9PLMZyVQzc2cJTq8i6MBm1KtV6Gk6Gp445WzJXntMQTsnQsW3BUrQR3fHkMh1gLg"
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
