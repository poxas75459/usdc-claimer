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
    "4JujU9bioiLZhV9HubDXVPCjZdUzX4voXoeraA9sMb6vxf6aM7ZHJttj7cL7kgCbsC6SvA4DrQaExVBoYn81r4G8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZmXCsDPY59XF1LKEwE4dt5Nz5XwCqqGWfU7Zxb8khRtcAfYfX98sU8ga8etMfwXr6huRrWnUN8JeNBHn34XS9f",
  "key1": "3oHJ3UXhjPxLJ2ufxfuekpjc6Xk5gNyhAU4aEiJZf9kev1k2GBg6ay9Y3Q9u4xrthi7LLZfeSFF9hmtpkLyuvxJw",
  "key2": "4bQbeRDNai1YL4jKurh36PFpjNAHJqfj4Uw2eaJkQcosK7Wg78tTDiDnbdRt8yx5s6t8Ukhn8gspA5BxAaJKuzE7",
  "key3": "5Lwu4cB8guA2B8rY8iDb9rrUXNNH83CZAdB44BaPQ5bp3mj9QKgpcVyXcniTbx2PExcijJjZsrVXugpbjg6Azwbu",
  "key4": "41YJSDBZsHKrKq7htq8E6v4hjeJBXuJgmAYUMkHidqLVe1gfGcwG99soG3u8ayBYtezrzsztWZrgs5RmRjqf7vLh",
  "key5": "3Jzht1pZe9YV2PHAFYpQX8ksVuvdAN6pmSZU5oy9dEd2c8xYwstqGXzTFB7ttu6A9p6GzdHkmLW6is2jkpj39pW1",
  "key6": "4ZwUyMDFX6koE7qrbM5Qg3jVCzfSQXbSV6ueqTffCRhy6KWmbwS8c6t6VTdnFicz5EPXxGPcH6yzRVXUj33LtzKB",
  "key7": "4vPDAjJgcxf5QQ7ycgkiFUPjm7g174BqkTmyK93GFb3kGwGwmwGLXd6bjw7jh4F5CmBPikMiVEEAgWpaQJkMEwnm",
  "key8": "4etJc5XFYWymhZAN7EpyHFZpaRJKTUxsJApCpyufT1BYtt3cvsDYaXrPSo8rvEeQomFFfTneVcXwuzfwTD41x2rf",
  "key9": "4e9yH2u2NwhqruASBmPoLybGLe16LZS8XwJwDgW9E1C5pHqeoGMGjuZHPuxLkiaP8tH8m2Zd2JyGSp6jhe3E4QWX",
  "key10": "5k8gtt2QpwdMeNtLTAHhGm5QX7YZ8YDx363kXNHZcHA38cRFwA5DSKLiRESKaBcWB2pgTQ5wavPeGtNjD9hYH9PJ",
  "key11": "4eSriNEXTndao1CSx554SHzyMctuwbNaT1bqvAks5jYNub168b87h4qkutoPitSkY1C6ZPYh2ZqH3Mo6j9xcDjbj",
  "key12": "4ZU1zu7iPoodJyidVYaSNpvqS7bjD7ceVpU23qkEgufCo87UF7KE6dNU6WzytoAnmhh4wA8YWbbYEWNu3wRLv9Fr",
  "key13": "2kGxwAABergjuxQ1cFt9yCuLKBKwgKf55VwxYaFHx2BQLnTXM114A32zzFjFGjC3RsPRRbrfZyyxeUQCHdckQQWn",
  "key14": "4BK6fXLxQxaMXUoyWAdaPUCVdfxGZJ3fWhiN2XS6iMyTHKkpEw8NHZP72sgC9pXhf5QiMQhLJDHKhHjhLzpsBSxh",
  "key15": "5nSz8LVasMqn25nJzc4AAEG6TB2eXk3n6wA2aveq41sDC4hnVcFuArx8EnTx4wL5xkNFvNENqdBodsL3TPXsULff",
  "key16": "5QdwWwq8xhUqjTMhsoYqks5ykkXoBL4gPYaLgJxS6WyCGz9AK3Ur2kKf7Jxtx9sGf6dLnfNLEEDS3gh93m2F5spQ",
  "key17": "4vWgAdtwAcwNuxREkhGEuHTfphYpEuraLZdaiNjfVF1W9mJzs8hL3J9tYYuGmrsAmm9VStv3HhVCbUDgt85P3GBA",
  "key18": "2JxcbD9pPQUwVqnZ4pTw8VkqSzQkcTNg6ZULJ7rG2roNa5UbWWg4k7mVcMUiAECwQ2156cb5ovLpwvGmhxNP4HTV",
  "key19": "3eHhd7H9qQH9MQ1PdmP5PNfik5XLQVm4jXUCFFQdq99cNkstwU1w7VUED8BQsUNu6imqqtvCLMJByE9pvNRu4W6G",
  "key20": "29G7tiAnLupB2DpBjbKR7oCLYkcptcviWfQhfQEcfCxQ634rRMoNvGNTvKnKgByQA8cPcT5RD9t7ybMwiF1m7wHi",
  "key21": "4W7RfnvoUCCp6mwAmBYq7ZJAmawMeNvqit4mZuNvj9caeEuECN6m8rvu6Vvy3Rf6P9Q4k7vu5DAigLSqq6aRoSdk",
  "key22": "39JxHDPbmmPenpAfnqvyPDrenku9QiGkDq7VrcRND2VPK5mc8siWCpPxDScfB4Ar1k6Qrtdu7jMomysRkB2jAsDb",
  "key23": "23aoG76Fwro87WsJgnvbS7pGeKZVEBioRhv5RT8UmfvMdoFkjhvAm7SRBdgVMoxcn77yU8ccfPDC92dJCdCDqC3m",
  "key24": "4Q663315D7eCkfbJwJTTSNifgxZ12W3kEVjdvLpBN3vdhXcxJYvfppJeChpFtSG9f87PjkzgcnDv4cjZ6kcRjXba",
  "key25": "4UjrS5W83pThkKXfhHt4FmjJQjZLgGiZKLZ17ANSQ49oNyzyDazJBUfCrJvmP7wPT73gpAMtA9sAfKpi6Fr6vaiR",
  "key26": "3QELHKDWSG82oydzTcBbNFPhyFBn8tVa8MJ3zCtukanhbGzcy6E8smDAyfAZuj3qG3V5tu1wWFeNLuTt6cd6Gx9L",
  "key27": "2kSuuvczDBojQXeCFpbtAzK3JR6aKQw9yHbYUt5tLh8Jy4NWwiwVLSDJWTp2NTZiV6ufDRZrbUNnSdjWPs1DJdFq",
  "key28": "3CUa5NGTiokwB6bqw3RUdXdxnBWCwJx38KByuymLC1trye4TSzBZRoRXF5CCE8C6Xngkr7oiDgwCsnQSMKQDtkA5",
  "key29": "2jqAvpWbnuqZmahGPYtXnRvxQWmvkvH4UGAzCRhGHV2me2ZuZDn72G22aMUvBkFRS83QpUuEvTNPnEFi6ftX1i5n",
  "key30": "2RPN5Nf4qGvjWobWExePGdm2WxMRKyUYvjZF7hrq4nhi57q3EvL8EyzYByk3ztfywqnWnWwhAUPVEnCF9xkU7K84"
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
