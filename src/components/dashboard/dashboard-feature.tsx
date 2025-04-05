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
    "3fKw4fN1UKSiuCE3S22WnPs69YPQYUWarUYxJVhMUKhC3tDeqjBHF6nc852mWcAEq11DVMUunRmQixNUKXrxr264"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fX9rJjoCnuiyd6HM4yRThKTv5JvLZUKaNRdXdvBtBxWwGtxiPRn6Dv4cyVmkKEwC5cjER53osdxEkDR6Q6MMkrb",
  "key1": "4eHjLhBxvABws1qgzHitowCtub65eWiJKmDtnCvuXv9zgDkD9UCX3JfgeQ9qTgvA6PbYsmuhSYNSgfrEfmPcGNJr",
  "key2": "5Bqv83g5QsqjtyMNAr14Q3fn9BmMvMsD6rnrAn4mPJUDYoNcJkP2xH31GiU3CaQ9N1mejwa4hgUqbMmmePe2Jpex",
  "key3": "3wvGr2xjamKuzoTXwS9RnBmnQwgYYioo6jiGeZ9X1vraVsSvgNczM1yTNriE4hadFMFKyVKaAKZN3v4RN2CoVBHM",
  "key4": "4qmk1bu2btj2VpbUYh6q73h3G3YqJBFz2yQx7ZrfHjsCwvToLZ93JhQ2vpdntqxhSE8DgDgNEbcBGi44LJLPC1Nb",
  "key5": "5J89NUrajXsc288Vegz4DNgjLQyFdzsHTbVfCrdm1NMH4NqD9xprfC8MdMy6dZ3s2aTJKH1LkzkQwfYvHbbkww2z",
  "key6": "38FMsYGgHhNF1mcitQpE9jDRDMojZ2ZBhYyFuyKh484rqDRCHuUM7Vt5g7KH7YQiQGcNsDrsYxSPoKEdko6Zpfym",
  "key7": "2JFsUaFuf2wvnQMR5B6TSaxLeMqvmH5FXZYssYQabFXxYoRujPbYUMg6aDTzJ9pS4e4QmW9me7njSRffEmdvMVWw",
  "key8": "32guUeY7J2dU4qKjezF1nQ649rzSet11MxUdoD5aWSDyUdiJp8U3hhESZ2Ur1zCrfyVn2Q8VDf441f98kzcLWt6U",
  "key9": "27LEvbnYXcNMxm4pCG1q8MqQxJEmBpkRGEPqdLqmaao1prs2EqgA8dR3X4smvsLsXo3cbmg97eCW9FVMxL8EAqm9",
  "key10": "W7iHpEGiDviRLgFb3zE5aCb83qZKDAnZj8zMbcM2a6mAo6yLLDrapdXDYqASQbuZWQPMXd3P6zP385mzEK8irRs",
  "key11": "4nAPVnZAzZRgP1piaFyLuFnufjPjnKyjrZvtLs7Wgiaewu82DPfBqzMBS8kQaMW4gLAQCsLARZYq78hY2zKFcaBG",
  "key12": "yf3CcUZjSt67A3PokfzQW1NSYzUPucVnHzUJoi5fQgSjgAPLAGkV2KFxeVegrWK7daWWZa2rMdhZbT5nZBVQ8Em",
  "key13": "4xBGrBTaRnQfSsp8uofCRxDZNbypq5HN5j6ay2GP132nRvFfrghsDZHQSs1F81KUaCAdjSQQmWdPYfqBr87VnTgE",
  "key14": "54yeNNB7B4fUexU1HRYHB53j1DptanS9XTknrgKVxAtZb3iNQo5xT6CDNF97F57TzXXb7Vs2sXdY7UfGTJLD9B24",
  "key15": "5H255ZkYkPD6dVRvNhpAMSRVmkjQyYxUzaP5qk6ZBamrQqiKeBkfWsKvswEWfLFVPvRrKPoHharS57dP2siPQFUB",
  "key16": "291YwxE7U4PoYqySKXwGPdTuiLZxech4VVMbH667UQpeJ6abahE5w6B6WcsjaYhM7Tvqudj8yn5ae4wa2qtRdJcQ",
  "key17": "2bJAvbUQGbeTcFDmgBa4uBVQ9UfSyUmP3UwFe2XqrWUZGH8uUzBXCX5WAjLe6czx5ocGXz9wvvdZcRo3Zo4Hcppw",
  "key18": "4L46rjjzfmbeCw3neUYDXhqZykAcf5p3NiBBJ95kE9bnvK12pRhZWgEKbpSbcBcX9vBY22kW793Sa3jRXSPGy156",
  "key19": "3UnHXBBLmCBLWqoo8nfxwuokeUqiBwHdPXgqD4TiP24cH38ZuGT67ngoFzTVe4F3r1tVfucLUECKRerErevJNnNq",
  "key20": "SJKDJYDca8CJzYFktRxJKiUGKCzZjeS6ApTCuoacntAB7dPziaABxrrxbErsh8VtsDG115U8nnGjpPzXu4vswwj",
  "key21": "2wArv4eFicPCxZh5JNzUKEffA72nU6phGx51buEbyU1wEhtjSVW62Cg8kmHjMyTNYyHveN8nkwRKA2qonaJ6cDaY",
  "key22": "5MPJwTVRi6SRi4kCoLTxtHvCLVZxNrwVQcRDizap7PxTTi87HEV6uf5JiQX14WnFkYWR1XxZUdepyDtUk3zhquSv",
  "key23": "37HG1FhbCVZ93Ff6cs4C4iLe9ugcjbQKyzariHJnmUT79hoBkVGbtyuwBoSVc4RAzCE37j2aXmTcDcmwxkX9FGbB",
  "key24": "9bNVK6WrfPnwBBy5Ky8fdyqd1Dtoq61U6TL42azaVC31w86KDY8VZKqCDZWBf3p5ZSwcw4sSWxYZfbLudvMUCPK",
  "key25": "3PHQnBgnV6zaVmCd447dQzATviS4iV4N3HQoADMpEngpg7LbRUxeeDrxMcBjNynYDfTiJcp4w31EAcGoWesLNKBM",
  "key26": "ywxvzuZq7LS1BUi7KFZCjm1D9DCrMZFDdZgTLTHe22QspRY1PjdGjdv73re9oMjkEdkvXZJQCGjuquSv8YGVm72"
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
