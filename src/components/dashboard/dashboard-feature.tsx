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
    "2X6YKMkHMygeo6SjZYBs39FTea7a6KBiXDj1ZkVS9VPy8ryMAKEbQmz5ToLgsQ3WUdDAstZF5zTmXQsnvEci1M8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fFLBRDDTxqzsLqb2xDm9uTpdPchjN875hfnUhiHTbJQtR967KpScFuhxU8j2yEdBUL8atE9S6sxLuDQz91rYp2s",
  "key1": "5obpnt11wZAdyQk1F5NvJ9yYYEPa95pgJyAp6VCgbPg8JSzfEw59iznXsFbJbcs1PzPMFmSuf5oD2UkoVkHrPa3w",
  "key2": "2vHeYDcbZH4HBSXavFm5ogmJifsKsRLGTWKv98tfzFciku4DxXUwsHfgkq3ygv1X9Gu7NaUvhnhP3PA4vorhuLZD",
  "key3": "39nbRWCYPSZFD9JLAuRvc5UkerwMCyVZjfRaE5dySYJHTFdxDWMFqyGRLYNw8YRE6Qcu78zz2X8XWdhZfBdm35Cs",
  "key4": "5kUCJEMXCdub8nD17iKHpiwX7QDEjekKcNi9HngQW2qZTqZaipbobA9szaWbmJ7cWTBV9vuxRotUhZDTb9Ba2Fgn",
  "key5": "23uoBj5RtN8CNyAgpDVmhPLHYJZjxhxewuEj38WYRgfnf7gR7PxSvdykMw16RUDCHCa3JytjMrrzYvRKXPkHpgsG",
  "key6": "3dGBWdEMWYhiNGEve9FgW49RrE7PrADjqNezrbFqHZ5e4GZGnLNjbnxwKHXxa4oadU4yT2iPPnZ4oEYGGCzviXBM",
  "key7": "392K3LYrCYwkTBAS6TVhud3Wqx1fshefwmrPUk9NgWJYKsgKQcqFZ3BArirz6ECbMZ2nkUTAjLTVmG3cZwm2wW57",
  "key8": "5of52LaDK27Lfs4iA5eQLB7prALTWQjUdwCeaSGwrMcTonZdfSBCMks1jkgBJvfU7uT4YGn1EVDCwh6pKvru42rX",
  "key9": "42k3hmoC68KxcLTL7joDTRPmnhK4skrQpSqYNXonWdJ8UVH1uPtDYWCZB97bMyfKffFeGauiZS7DPKit4JUpSQFS",
  "key10": "3azR77ZoP58DpEgRCPyAbL4ejjVyyDuayAceJyjHRkC2eES69CkUtBvXENQe1vgsRsZQSXXF329JZTwv7SVvkFMx",
  "key11": "77n3pA9CLRvuo4gWWuL2yMZxGs7Cg82cAaZC5cEB3vLxL4vd5xpwKzwdVzWMZ1NvQjAxcWFut3hGo1QgMVPc86c",
  "key12": "2aXgP1tBsyP3FzEnTzjwm5BcVC4oVCywPgbhzCFrTvPkWj7w1NsN8MPZ9K6rRsbGmMfzYYqeAFrPauVaUr5ovHqR",
  "key13": "5UrPH6X56k65YNWccU6LLZcTuFSpxQ7pi95k7tqBim2a2DQsxSUC6u5wtPwQCeMC7AsLY8gvgHk5ADL7yWWD2qp3",
  "key14": "3X7KfvHDmv81hDDxrw6HixmatGT1NLDLhEgVnAWEkp3MMx1J1B7rjUg8cgBFMjXHLRAQUQerahfdCnNTUPoTudTx",
  "key15": "4oRpcV2fUrb9VAG7J5gJaVHFgwQfkbRoui8oSco2kLaLJ1favsNYB93hzMPPP1tFiy2YqxsiXnBjuVc7V9deV5r4",
  "key16": "2yKqSULqZnqgHX12v1BrieCaeaUyb8PBKhKbDwb4P3ath1cQ6MAyFcYK41Y97XWxhjEexBrcjnFqbCRiX3FfUmdP",
  "key17": "52Ss5Rt2nrjnGkJwUkRUAMFc6ecAa73Ey1XDqCh4Ww71JjdvvpJkkN5jpNMvb2dzH6dJ7CCDYcS5zHfVV2aWjC3d",
  "key18": "v2trPswu7v9mpBHtnAz4VuE4yW2Tnk6D73rqYCvMTaEGHvAxbQM8L3NLeKCpWarxy2HTmk45XDsiS79sQ8Wfm3b",
  "key19": "MBRfzkMug8AUF7dAJ8aXaqe1SqEknrwBChWi5tE3PztmvwpcDM4HCAW56JBy6dEWHjPe9oE3P3DroBA9HZ1EWvq",
  "key20": "4tWdjdk3cdaojinotvrsLDPn1Eud2KzZxwZcehFuqJ3f8Zf37Y8oCVAkSuNLYTNjoA9ivSKruN8JAbYWdYRmpasT",
  "key21": "3MgRtejJiMZdoXaCxiaLvxyGpJ7majDFobyntDAPnxLDazhqHVMrVvJicc4eEgsPqmyfHeysa83H6avpnQUJG4qa",
  "key22": "3obzw2RWQFrRTfEvgDzttNGUWkggCCiqk9qy7qKmKso3V6HR987WVHZdmsM9WgZzTZPYrTFb6ojugE5GdAAzP8Em",
  "key23": "4u76GGdDCoeiaPd2r6n5PhUwuEWWsPCJzW1eKCaupuZfCbxe1oX848t1pAMAuAYxmeQ5gnLU6mXPHSweb6hJH84Z",
  "key24": "56qB5puYYVCpc23bekskcBW7ThvCSAP8XvVU3jYgngafG9zjdyxmqzBoe3FsVbnT8L9vU37q5TaS4tWMgyaPBbu1",
  "key25": "2PYR9hwo9vpoaz8R8H2dGU7YphzJHkSdMqCtr35Eejs4JVHY5YsFWiCrMmHSJpNrgaQ1sULV6ADAc2LntTenJyBK",
  "key26": "3LEZKtqfLxefjK4n6G6sa3CXF736t486johtEFFFsze3CGogzAPbTXoZDJ2L3tQRzyhGFnwXj8EYrdrnXzuHzKpa",
  "key27": "27wHX5Jc786HWQFmADmLhac39TWZAESXbMxu8SQaFKEJFhCMGRg1o1NkWo9SLF64WGVKTMNSdVUCPFWTRgMbnAMY",
  "key28": "5UudBcG1372vAdP2yhk8j1o8GcHn4Hktn3zHxa9pkUjttpgb3nHS2eHNJ4oSJZURvJ26t2KHrKLj8xDaa2aN42su",
  "key29": "31r5t7Vngmd5Csxrn1jBrnRMThrxwQVnZYJ58SuntYdSTBSm8csuVCKPdwwwCpWXgib7WbLKohidZLK4C1kssZXZ",
  "key30": "5mmKNf4Sb1r7ba2eFAb4QCyY6uAXEPPJDBT2kRifjTKGu4iAk3AuMkJmkF4mFwvg45FrP3KwH8LpXeFwikSwfE3y",
  "key31": "js2JHmnyXNtrRbUisSxbtymEwoihsfzpTTgQhr31RNz86qzNkcZqq894KTuZ9vWK25U5NEzH7kPeX7WtBRiGo8b",
  "key32": "5jNtywBtH2LT71W7fxySQqxx6yEJ6Zi5PGdChXLtL9ehDnAAtMoVEFt2K1TJumfsZDZYnippTqwi9dxupfoNqLhy",
  "key33": "tu89SHP1UbKSWLZZUvTg4CZui5k5m7J8sQzi2qBfGeUxyPxe2EcEWH3De62r73SYxe9RpH5AfLLsTG6evQvWUPh",
  "key34": "5vRS5XeQiR3HaUuZ8MEic21ciz1fTDMs421JkQsoppVLPJr48pWXxwMt3B1d68kUesi6njJ4o1KSYGiLexN754LP",
  "key35": "2XbK2M5csb45LtKN532qjmTXiNmcP1goJQ5i2LMLoezo2eefdpepxT33w2jQSXi2aAyX8HCMwJhAfyfjvxLgibFG",
  "key36": "2fB8hdzWJ4v7wVnCZu2aYxvqTX8rE3KSexFZ5TDbDx6SZyL7PeMAAiT67trpH5Rf7Br7uSkwHmG3g5mxhxdM6KZC",
  "key37": "25RntmNWH3Ana5WnLdznFB3tjV4YfKuoTirwYNqrKg1dyawg2C5z6AmCpps15kv6V59V4syxUZGKjCtG9QHYR8Vc",
  "key38": "5pXhvUftmLdtNuTjDzFQxDTuVFoczkfqmxzzSra3TknoHWbvZWxd694cGLgccqncQZ8MC1ojdPFPPCTbKwS9f3gi",
  "key39": "67YgHYqFyh6gTfC9t5uSrxGQKjnhWMETRYHWgRCkwAVffaJ55otXLSPn1QxT53DV9szpyn2UsD4RVbGbZgLVyQMj",
  "key40": "62dJW84d6E7TBTQUS2K4EEadt6TLUHdqKsVMUs2Cai1xaNkwJyF4ftFhpMHqJLLRCo7p2VP89mc8tb7gDTHLuXYS",
  "key41": "4z65civFbbG9Acw5nBReFWN3EPDeAgpe2bS33mfUpHLYDMSTpFwh5pT11pXxtXBSvV8fh7N6PS1uigyTXphdhcVH",
  "key42": "zNacw18CHh1ezqGto9PKmFUdjQ75yae62WvhaPnbkX5nK7e42sWZncwt4HfgE9AK2AyFxJuWygJySdZHN2uxntv",
  "key43": "29vzdJgGCaUvAjENSjZWsdip3hCAvarRExYkc5gjYkbYGpWVoRx93QHrPEtsrr2qHtP2UMp6Ack4HbGUVcotSrzP"
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
