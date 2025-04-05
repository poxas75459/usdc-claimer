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
    "qq2ckwcu2ADgiVgpEsvY8QdmSNeeTuD6ufUa7YE7m2Tcd4YhZX8FyZTkApQBqd8dajmPZ3S2i1z2FzaFFBRQBmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dtfveaAGNfZmjSRMjN5eRqopRpYLMGzfEByHcvhfb7VNbomX4svqKHg5tuYXqknkrHAn3ytvVWkff62PzsMmRBQ",
  "key1": "5Tu34fdVzDzuRxPbG9w6JTocEq99TWr9JAQW6RxbKpnGJgC5rbtFJSnWPwv9y71ogYWjwkqrMzxt8HB4W9ezhJL8",
  "key2": "3Wm7N57HZtacBepAddahaKKCY7ivwTypb3YHVoKnanHfBx1RpjA2sbsJSjCR2LTct3b31Wv7XQMqj97HqKbNYfQp",
  "key3": "GVTbLbcRmgkvCsAkeQ77v85nnW24Ae4gner1dVd7gtEcmsMFedgR5Wapa7y9CfYD3QLz2vdEYZECyc65wQ1di6H",
  "key4": "3CsCFbqrsnDFRVSqPqnsL4FQ5GBy7HuTXxHQEgC5HM78LTpb4QrtQJ9cse5K64JPPeWeNX8UvrhUJA8pGpcm7YbS",
  "key5": "4MkNihdtoqWn4KjaRYpPXD8VMikD3iVLqXVudKDhBzi1LtQK42KqKw9RBe3fX6tWgzfNfqqjGP8LWdQyx8HBcW3o",
  "key6": "3rRCZmz1MGjcUQyzDxpGWPSRDB3jmJpXZXvZvcFwDVgt7jiE3kxFvCWBUS9zCeDhaNdmxbCjtunWdrKF5GegKHDP",
  "key7": "2CfPk5nptmxfcgH9ekVMmTtY7V3ZeoRKee89SPLFJwAe8yadZxQpeZuJonptL9ssD87aYpAhHP6rAYP8k5bgw1CS",
  "key8": "2vfav8JyUd6tEtkeoRAfqJwg3F12GcAjuxFZHW5HFWjtfnnubAS7CE6Dx6DWNErjxTLTa9rTooFg5KmcwgYBLcdb",
  "key9": "2fwyaZPSBuumJXnMV3zV7vKL9AQCe88Cs4eUZgLUyW1iL1AcpEcYroX7uT4WHrRBusiScWSJPhhKB6tUWm8P1kyW",
  "key10": "4C3bNGMrjsqygKHf5B3F8eGiN2hsLssW7nyYW2HVuQjs5dKwKnFasjNqRwbAgY9xZ6PLhvQ6DZDn6tbpFMM5p2Ww",
  "key11": "41WeCNihmkLkZohXh7ESTZCqLQ51SV89b7kE5KRqzNZ5N8bYQ2z7YQ5nDz5yTYx7esbQ1KFKb2iPmSuwYakdvePf",
  "key12": "2y9MwUutRV7amN5V22QpbQ84WjVebCQmwRGfkNzyb6bfW5dJyMZRYtsqA9paueVAfGXEqfcyLemGJ2AtmLsJC47v",
  "key13": "5MF6wjRLKEpaGaqkGoEg59EgTepQgS5EGE3cvW4ZXvVfmDwPpaGTTNL1xy1Gk2FecSFhfefirHAUcU8jHExFRNop",
  "key14": "hc3D3AQpZNS66m4bUHKwC6aBYi9f94Fffg8iW1PmSXxvTigczF3wWQckGADFDUaZQM7t19b7S5rNH8H5BbsRoED",
  "key15": "3c3ZqfzF6PJbgad2NWZ5cqSViA8fLrxTXv92i1hba4SKASPds6dRUQGTeM626fe2o6BktnhDGtZJhs8p9RdnPrvr",
  "key16": "PX4DDPdB5hj5dx8bBs6zm39EGMy6YNni2HWecWsaSN4Wm5g6byaQPerPDGcPJorid1TPomNie81i5tAHJtoiM1i",
  "key17": "57Q9usGS8eaZctBFh6jsMomQUXrSrureXXVLTJ8EsDAiY4ds3pWZgqLgBwRefs5qqHLBrgWaM9ZKAQR1oAZvkZFv",
  "key18": "3yPPV88pLxQU5h7RpwpJaXBpyjhF6SfFMhShbybSrtHAB4Sw6k5HvJgxmbXXuHDZn98Jh1NxLKJU8QmzcpYeLVAT",
  "key19": "5insYKnXr1pPqtgKhfmEm7t3dZ8MQtAdXAuG6FZ7F4h5yFthcmizsMv98Et62hhNexDLYRd15ZSzXo9xqbkcS4oC",
  "key20": "2nD89Wm9qsUi6r2WCLmeL9Z1rJ7mzRT2hWWXGcYVYLX8xuFtiBKXmfufFyPMFXNeveqh8htL1gB1SaKUrzWjE2Ct",
  "key21": "4PpLuWU4v55xvGBvP84kcMsD4Tg9wNPHMXvG9jbhupZycV9apU1QPBWoRhK1obScDHWeg8Rz21HyeEL69mNTvhos",
  "key22": "24Zs1BGeLQcwRDuSXB5kH5u5NvcndZPXGMXCWgeRcFHBAm2NJsv1v8buZZRuyASUTKCtmTsibLXhaiFWnFMW17GR",
  "key23": "3eQx2oHEsW6H9jrqVGvKZ283NDVN4n8svUW6kLqfcN71yVdTZGywg3gX48LBVjSzhRhgBoPMqmmDRcUZo3NUnCCW",
  "key24": "5uWLuSDprZLuX3PWEge3zmVigRnWtsFJMvdcFyixoC9unGKVrjwcqJCg1eKS6K2h7LUtJtSXyq7ZohLnfS8rm6Cj",
  "key25": "27CNHpEaamoJVUHpWosNH3egsriGwLDc9ZdHWX9KxCEWBP3gHh3tFFvL8QvJYZzpkmrqCn54ZhehPjeSp1bzrAVw",
  "key26": "tyu9yNUL7J872Bc69va827boqxeCv5LUadHyeMG8kGdK5WWxTHP5cfFzwhGahguSphVEy2tw7xJEBHGazapFUhh",
  "key27": "4WJeh3TVPkvLcWS2bkuzvWFiGWZXHqE2vusvRsLSYJQ7qh8uJSEcwsR2aeAago4tSUimGSJGcAMgB7C52g9mZg5",
  "key28": "5s64RBzWJosyQ1qho4EkaoqS4wmJ3dgEGnsBfxDDnbAdU5tirP442y5DUu8cx49pY1WURDtYwzfPMyL8UvBYujbw",
  "key29": "55GAKvUvw6gjYaHYRmF2YMF581odfobyDii2axqgBjBL6dTs2RdrEb7iPacTQeZi27Hu4NEKLb2vxT2qAd6cVFwz",
  "key30": "4c7YbHdYm76pszzVgUJtUt9gNeuBG1jQD69AayESdDsCnpzumju5VC1cCBqTqgbxeETpxHDR4VbBMRzYTjCACbBy",
  "key31": "4fJfBe7mWNuKw4zQCWPy8yqrfZ5CfWwUpbgJhxZsYe3UwtKsMWZcpYALSueYRvZieT7qsHAqmC3wtW64jkVoDErD",
  "key32": "RGKW7EHysyYtpVeCnFs26F1CBAjGSj5ZkyRxUqnGvTcrUjDRUZYPzpj9tmfCMxKPwUzkyMjnGqAHCsUijprUk6e"
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
