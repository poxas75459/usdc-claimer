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
    "FR9LR8aWtsjPdfsD4QFnJN5LyWRymMH8w9n2PjGkk8Nk8AQb2mNMNb2kpiPXzQ4W9bLjJ5iLG7Dk4ohLef5Cgty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hvuPax6w6kJzy9CJwvvMY4Nb6e7haTFWnneCUvWnhTpHk5koNh2iq6C1PiTxZseexpy5BzjCoSHMC2MTpL6NXJS",
  "key1": "aSmyKxwatADdGkTyXXAMTB57Z8V6gLS54Yyjv71Vamioum1WLUWUtVY7CJVx9kLwr8YwVk8UdNYtSbzcTVEhuMY",
  "key2": "4C79GAQ5DKXXSbRFVpuf3Lkv3zNABVwJxeWp1cvmZmafcJNh45r1QTrkJCU1FX6PnZcdy56LmZ4Dthkd4kiKUDkF",
  "key3": "2uk3CsNdA8Yh1oPdcZTkeiGKps98pjJj5qXPTFLdjXZF6bfqVZi7YF6jUsQe9qtgn3o6XZ2AMxa6xNid2muPdjxD",
  "key4": "3aXv84yEkhAU4jeZkPQbJPhrqfnwSCeYkTxThakQKCESXGKFa4kE1DsaiucCDNvkc8ASb72UZoEHr5X1p3DX5zVB",
  "key5": "3JgcwEmjmRDmMR2Ycw1UWTQ1NNsYiipPp65Z12VFWtCkz8NeuFCjWpJUuPPVMQC87BLCz4o3hp2BjUZByNdGVJkS",
  "key6": "3Bere3jk8ufUoEXsQXsEk886h4qwACmesWQcW2YnAbtAfspkJyJ1WbqmZ3MZP6nrXU3iVHF9QiAccVEAzCXrQqjb",
  "key7": "2hykT2ShFA4sYtTPVAeYW8GGmbpPioCarBwbP8KpwDfGchCfHnh7wZkN1vsoT4prhTkegZDGMEYu33fysmiQuhYq",
  "key8": "B1qjeaS89uU9kxaRqwPesXSEBwKE5upp9Ta5Yxuoiv9cPAjEmnSp1h1hLoDKT31M91txBPDCZmMhQmP8yYNHYbR",
  "key9": "2892Bve7Ni7eL6cwu4K6z8DU7xTJz4itdPaHN8fhp5rXkKVJHbwtCbLrQWfaWE6EGLnQR1yz9wqGc6UWiVYuUewn",
  "key10": "5dTAh3Zc5txn3roRsRu3Ru3BZN8fcDuAARmnB4DfgMHJ4yRnuDR5S91FTCNhGV4Ucb9ga8rUCCWXmC2CgPfY1ZTr",
  "key11": "3f8szyeXkLU4nkRve9dn5AdDGKS2Q6dAjDQhbd6mCpUQHDv8nvMLkcMswes5kSZvXvPZX5c7kh3AcTiee558bhi8",
  "key12": "wWrpxe275RrbBZRY4HRYzDY7HZUoTKzoxzBDz66MNNgvJCbgTWoXdicdRFj3L8pzATdjH9PYHjK8xr5DeaStRtL",
  "key13": "3Q3izkQA4XvtWRacdsyEFrmJmDhR3FxQxtV6fHojhph5M6wnyBnS9ikHhhyQ6zjyKvskQdqGMixJ7BM8e8mUKks2",
  "key14": "5gTW4cML14QyoVRUjMbXP1WsvycxrxufSAnv6NXQuxPjJGRe88uFnXgyzyKi6L8cJ7xMLKNV6ANutuB3aAXpCCfg",
  "key15": "5XfCAtuYdx89bsWaTkfBB8HFzLRzxrLa27uE8AC4JrCZuG2EYLvJqRYCw5TegGE9eWJ2hRmGmcN8aLFisPYba181",
  "key16": "4gSrpWdrGGmiHNcuf71gxZHcpFxZjdCYszqnBeyAAH94AgYTDjNWAUmouNDuymXxbtd3vpJWGJJnzsvSxC11DPu6",
  "key17": "5SqUeKgy9JRPk1gqKNjA3ELYYVQFXTsjcTYDQAuSawDXsZW2hDWX7NdZ4gYYCmW881PA2872E8PwNraWJBpFiHfv",
  "key18": "2ZGz6YQBSes8uMyxXCND52rhBq4c9u6QCRLMhDQxVAocga841UDhqwQjYVd3AFu8SUTaTyeyNzUKooGwcECjjoXx",
  "key19": "5Vzhb4LahwJbmQd91MatPqZD3hi6YW3h2Lc2KTqNm1i6gFWrjnirqLYDohTUThPsUJ1tJfzdx3AVjLkCf2N4MYR7",
  "key20": "3XTzwhTAQ9WYJrdCxQwg4ahe2B1NdEa8TXxvCNzxUxbGbyUWkhozhqcXpC9hC2jArkrmDMcRnY4gzoffwtYmm6Ng",
  "key21": "5aSjpKi861TjZTxoG84g2bjxWguCRcwwJzBTjrRFFhGZteGDUhiKzyoihdZ5Xc3DquUWTFA1jvkHRhEeTtSJZn1t",
  "key22": "3Lcj3SGPxsecUX5PcabCQKenCz1R2trdvdXC9pueFrU1WZ7zeGuTPunLaXDFWdPSJjFfScVKMRHFYrH7RVqkFVwG",
  "key23": "5uB26Kaf7fxtjcEPPw7pgJntsiGRJpFRFdfVe7Njvvb5Dj7b8Yn3kksmcyuSgfm3Uq1ZxgEWgfsMjdi5Ys4MUyA5",
  "key24": "4oV7k75wrJgQPHZdafpGHwJd1xUuvEiq6qS1QMazAjL4d9LAFGGtNJvTYP2LzNiprR2vhKdHyzrXkyj1cTC3v1sH",
  "key25": "T9kYvqWBGcsKhuvfxHTAA4pBaHTLbTeGQxtMUmNp3VyDpdMG1ChpbPyUoUQiU3XNnNTu1Ybz4UBojm6kFnVEgnp",
  "key26": "5cXA4yKkYBEHH3hMNGqff78SShciedkfFnjMsjdgPBc2JvDB1itBmJJd7QksF1M6qtFqtg9727rAUXrZJnZqNQMx",
  "key27": "xXevWvbuf9xd4Q5Z46149coMCR1QMGaUzrmNdLEnW8c2LT1jtXNstkWrvTxssfFgxnkySKVaQaPkwruqvciy7kH"
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
