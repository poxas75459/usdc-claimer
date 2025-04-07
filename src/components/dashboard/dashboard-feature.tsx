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
    "346DUozLWvXMXF38Jcv4JrkzAR5o1ujjM196eqyABMUmpbGMojAFPTX7CcX1KYdGy6pnbcbzjsZRVgkKSnhYMnWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "474ak5oFaU7anXp4EMWHhHQD5zC24aHr28JcESJYtH18GPJjYP9tP8vzEkR6Pw2UqyJktd9nyH3Sjiyzfg1yGHaM",
  "key1": "23wzWoavUysiuAm4K64h5xNBC12VvmpsNUP1UxpfCjbgYYrVXGsUENYizAArJeerfBfwEFp19nNPm8RzFKREUvge",
  "key2": "2qrzcb1hJmZcofunbNWZyz7YYjpt9BfrSW6yKVf5DQt1nn3Rb7zyrcDEacKRSykJMdGjicp6R3DWd3n48RfeMqY5",
  "key3": "sBpxwJfawGzGGezmE91Gqsh5RiSngVMkRFFrjXdPu1u6YTHmBH6fKna97cJ11H3pV9F56MPsqVk7M3RVoi6tFmk",
  "key4": "3EquABf71k5CQuAepfCvokn3LCrVQaVjYPkfb5SkZaJ4WeJXxD9iKTAqo1hsprmVJLNBCftK45EvbmjRWS6HstkT",
  "key5": "2huzGgztjy3Lwnh42G56a9epxXiqPVgeY6zoaUR9DDzy4uuQzMwPXFFCN16rXYhi4Tmt31E3h7DJdxXy2Gg5kUqL",
  "key6": "4SPe8pfmDunvXPtVqWNKP3EyCkGwaPMFccksKSDd9mL5MsQ4hFVN4qXS9QvfpqMxCiP2XqAWN4HMmGEMPyTUJXRh",
  "key7": "3N9zwe3yvP7KRctX2KPiynkrShFrj8C6YemSX3SKcrZpDDDcepJt9w35Vg1zTabxPNNm4HMKAJjtify1H7b6TvES",
  "key8": "5EW29icoGrHGvSbDvt9dw4oLPvNzJRFt2RqEPNwYqjvfzAYP5BgUBom77XsPGmvZsDdcPwxUiQaJHMDYd6YrQfWn",
  "key9": "5eVDzvHN66D4MZ2NinowqFygQn26SUDkkx2eWec4u3G9AwoswBZTbziTaCcytSosJDTxozEWoBkW7t451haBXDUt",
  "key10": "2XrUqLRWYXC8sPc9MotMnmTemLRpTQC9Z3TqP2Do62c78vV3iAqoC2pqA2CxUyuddGu7ytmzHPhtYjbN7WmHJoKS",
  "key11": "3hc5gvVmjnH8TU1PEijjoSzeLxBtrQkcdxaHRAskpo1ouxrv2ASf7S52V7tDxBSku5uPfkVUTZcKDaCZVNrc9Mxh",
  "key12": "2UCpugNmxi869jLGJQFqdeqp5qCPmEojG5PCDwx9FSdU4skdQoHPVdsoML9Z71zf7iu3Z8fFpGYmee7qhmG2yHrX",
  "key13": "3VVhLBRwhWGe97gqXjaxEiqdmKU5XCNBSTJ7vAPBctbNCpC9YNYuYGMd89gBDyPBiBxZZeip8YBjU81pihE7j3kX",
  "key14": "3sPxCuJ1KszYdTaXsFhJ4fvkLp6F6zaTnYzTaxS4VGAgLrY5tagsXpJrZHWYXSjjk4S4hFxCwFnpucqCUZbMUCGL",
  "key15": "3Vcv5wq5yzT5sTPsyP3VnstRoithfSZUKhPohKbWigcdHNXMRMpyyB8JmKhEMUvgk88CrBLg1H4PDLaoHKPcvzh7",
  "key16": "66g5kiP6jNbpStaY8yqn6CnCXgP9JxSSSE5nnhE5wyUyJF416irwvwqYSm4HM933WYAFpm9MwsgosthvFXhwduWg",
  "key17": "96x86PFnEJvcMxZ9FJL8VW1zQje21rHpfq3Yjvsc81CvLQgCQ8P6zxJEdVS8HCJE5t78DC4nKL2LAy82iHPACW1",
  "key18": "4BYbcamcHzN9HbygLgKAMHaHuS98dmMi83TdEViHydDfEAE6V93VHr4CoFR2ysf3wcZ4JdvkMmz6uzq8pMNJLpK8",
  "key19": "3PBCyNeQbVqdgfgVoz7RDMYcx3jVXsnaZ2kuEdPvUk53KwxoWoy9nF3RSBTjUsL7Bk3GC7hTiVqDLNgN1XXeHtef",
  "key20": "4tBt7AXzRHqQfNidDxsL6uGbmK85jhmuYeApNJxkLruQ4yc6M9bQh93TNxrjVfbnRaC94FovSnN19gbUpvu7yhXu",
  "key21": "nWhziHrhodHpPsFnGEUok3WnPDyPyzLnuLfEd252pjRoBVm1DTHfoZz22WTNWPrd6JnTsfZVc89oWzvHkY1vjgg",
  "key22": "4kzizaBymjHKNJcgK2NooFS8SceFuxxnB7NsxmPMwRNbooxyD8tPGVARTT8ZavANX1ufHqDcMn52CoanJYaq8qS1",
  "key23": "2greAYR8jzY9yuErQoLybv4eP3vCHoAoPWgXyt96Tfadz5UddFnzKJjKiNVrDMCZSWEtCFJ4Uyy7cehKQHmAV5UN",
  "key24": "x5azHZtWTiufHqPFFYDKft1mVHS2ouskshisbr9t5t5v8fGjNRrCcTk8XKwL5ieHHB7vRB8UTJLkjpwoQFJcQDv"
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
