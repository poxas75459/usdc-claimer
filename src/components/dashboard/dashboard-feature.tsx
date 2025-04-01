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
    "HKwcTaNqyLjoaEfx2ndkAuz4NofuENvHoEPer7WE1tSknykQcbWkLgdJ1m1L3zYY1pi3Puc3y4HxbjPSjCm95aD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gCAHJbtZEipPmxc38AQqpejbxH5SNVDBM4G8zcspbkzM2opm8HhFqeGPJX9ksBrPtZyULb9ix4fnnoLvsiTFj4H",
  "key1": "5YtQyK4wFgC8GXBWGdnARRWR4pa4B1tAHVuuZBvCijoWrNfwpcHmxia3Z7USfE58hEr245yeBEHFitFq3NyECkJt",
  "key2": "41bcewkatzJHgKn7rymyX8S1cLqY7tDvfVVAwLtbz3cjpMNdYjKUsu8eDxeXtGj18JTW33uyL5teKTQzkHe96xwD",
  "key3": "2fQDwZkt3rvqqVhCjVk3P4ayYKhYRdtyMo98RU5GmF7EokAuZE3TqL8Jb3j2Tw4Sv1X1eue1CsV8mACCawubdHRU",
  "key4": "3xbe4fr5JRJdk2c9jEDJ1ZtfBXpGbSCAP5bTKmRf14usH3oTsipTCYHPJNSjgekTTBp6SLSVxUW2crTbkF5EheJb",
  "key5": "59y6Gsg8wJicPxUNkEkG6RBnka7FqjRoyfV2CpFjEDVD8Xk8nTwirKs2doJ6Cbcm9tTvo6CwgRTDj82rAKe8v2fp",
  "key6": "4c1wwpaDcNjWGF6u5YBV2f9sSwC6qovk1rWoFgbL1wU5FQx3SrFpe8vxPgJd66JkTAg9TQvncMpFZsmsVFTirMEz",
  "key7": "5JETbUc6u4ti1Ftm8sePiFupcwDyC4Y97rEWiEF49qH5nEBecN9rnLu8MErKsvut3Bsx81RmeiFm4LMm5GyGjh2h",
  "key8": "26v3XZy3ttK6JQbCm9YGc2ueBKA46T99FpctiH6Fx91iLRg6ZvGGYjz1j43kizsiiMYnB35Q3BWuzqaSu2hipH67",
  "key9": "3QuFxHWarw3uHyRP2emGcVfzcGm6RzA6k2yzMcsMLoSVVEU2NWmPeTbJ4R7ha3qkdR9yAwtQSvxgKBYBJRVcbgGr",
  "key10": "38docjasYg2T5FDV9jEHXNsf1ZwLo7sVpKHGXQT4o1hDFZWYmXrzdPcbKXbsYcCfn7boHySxftzH5nFZqsGPKap5",
  "key11": "4VBn2Uz9o7uPWvZfoajKde1xvX3s63Av5Xc1QE6vsyLijBtPr2ZFppJQzXgxUV5nA7vZBACx7hFWc39drS1dvggk",
  "key12": "56KW9MLhvoSQFiLDWsoH2Pjk4Agj46WWNeCtCk9M8zW8uLWZCuzjxSmJju37NFAEQEoRjTnDaEazzBwSYy3SRd27",
  "key13": "3y5oLzAbmFCWYRGtpmDST5nZtDxViRM38UtN2SFVqVboM8qo8Gb6yYq4xyQAQdcERAQYEzXWWWPvmpNhGAsx576D",
  "key14": "2XJP5vcrpkdncxUisZhip5zxAR763tFAgitob5d6HhFoku1qkmUBpMVvxxRJRmTiKP1amDV8EL7nJGTrGt65vWVK",
  "key15": "5U5hvQMU1KQgachcNMxZPUvfnLN8vqP9ptFp1XK7pWKgF7fjGuLfYdrLqsmrP42wQ3ZVsfUyHqEjX5zaB2rpbPAQ",
  "key16": "5e5vsrzLPATQcYtGkYBdLH6CoWEwDMoFirmEnpgkXsBmFqAeeRtATvJRa9RGZWjL2LAcaUZLMiVxDMxHunry6zQg",
  "key17": "5R1Pb6X6KTmwsB97b8e7xqFaZsasQAiPv3m73pWKQs6Z7xcoEmLkx8VPETLeScB8ftKQygA3iQy7TUEku6u7Gxzd",
  "key18": "a7t33WhVsm7oZkYoFZwVQmXPGQ2Z5wMLAzCWKhqsrhbJJdnaMtWQz9cuDCMLNWF1VPW4ziTUzsYYB5C9xBTmZf1",
  "key19": "3UFBUnvmbwyrmzWE7wdswigVd5RmPDH4kE7Rc55tLr1oF4raihBSDWL5cSRWweseaNwwRmpX9vaLcT2jGyYHR184",
  "key20": "ZzRVvssMXiz2qwAxkmAKNRTJeBQ9jSAEwi7ptULubhqLqeeXMHiQMSHWS975CKhuy48iKYWrEYbotji6Q1Y9tqa",
  "key21": "2cE8SZaiKzcAameyaA5jjXkPBMhv7v3EJ1RYMWW4DuqPjjMzBmFSs7t9RiwwkrYLG6cwJuPzswJmTxyHVqQv2gqo",
  "key22": "49vV2qctK1g1caj3yrxpzPn36RJpM1izXE62qQd4SkwR3LNWekxBRqMhDvTHQRHgvx8up4GjWK4DyWbeW1MNvBPN",
  "key23": "5vmJztQ8rJ7qPrvf3Y8zjitFDgHvpXuUSEhUm8KyyYvW2oDygjE286jmUvjVwqBztTGiuQWNyKBUZwfxYaThANEz",
  "key24": "27yUxVpbvAhEWLRHNW3PiZnVTucjCRcjioN3xR1m298fXP3WFDxJEcLnPRPy752RwZj87U3U6Mw69fRSj3QG23XQ",
  "key25": "ZB4Cc1ds3Gw3iHoMP1pkp9QqoVz8VsxDaTKgpbyzDciks7AuwSesacvTFnS2k5vXCyyRgRZRNk2XGUmgfbtzvQB",
  "key26": "5ikRtBoAagoULbSh4xTRLQ8iMJzNhh3x8idKXjKzAtXjC2cBk4oj6ekyttFpuGx9YmabyYLYUquPHfbbabAGg73E"
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
