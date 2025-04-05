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
    "3fsEqcqbSxHkaHCTGzzzjuxRxK4GgHJyoMq8JRkhdxZHCZwKKAq958Kk7JhwKkrCD1repLSFuGFnKxJuD79f3xtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jAbFRD88waxS5s1ixUztS7LQNuqnCg3WkGaqzETpj2FfquSki1mMo52RF1ymXubdtMobx9FnrwcZeAJ9coLHCJ9",
  "key1": "37Vyw8jt6m7EzwnKZG3Mr9HHuSLJ96xHkL4RPkwDgdwD6cNoDrXiWWhnztSV9KFrQg5FZYuwQa6k2WsxsGS268Gw",
  "key2": "22xtBKFLN5JfFERYgeXP81kKPY89AXebW6KUvYYhPpParXwA4MzbAHS9Nd1xwhgE4bFBZmEi1aMcGmwXUbHECcGj",
  "key3": "4zpouriUiQFwkx7dyHz9ZG1XXGAiAP1WBiW4NzKA5RM9zyutC3PfnYVWUaBRvdHnu5WRWGfZxutbbu93q3dDVeG6",
  "key4": "3yu8Hp7BWBCQgbAENPxCyGxkEUDztzS2yXTGeww7FYFfpFNZCvrLy3fGTem1MPBFEcwLsRZdoHEnPLRzRKaLhMvD",
  "key5": "uygtV2RpsdvY1auT1YpwDvqpXa6X1nrNkYRiQN1MhRVL3SxmEoBNRy6NFPPJ2CcUmeQU5ceK5byaeQZYnLNemJ2",
  "key6": "2pxffU4g6PvQoe4uHjLvRc4HNSEutLqnAms6KAcwuKfKmnCVfD2bUpQEucfpYG5qxLXcaMfNBVuPhVxrUQaAGBZ2",
  "key7": "4KfvN7zso3gg81d3NPhr9jWMve5KF6JxFF5LtBtcFKfGWbzGHWnWFUa7ipb67QHhdPqhPccp4YLhn9mrpEskGxmK",
  "key8": "ENJTw6oy79K9XcgQNviCtDk2Xj4F1kZhizw5h3asf3AxRoZ2SdxFbcaRmjLmC7foSeDVcJ2C6QWpafgGCqCPap8",
  "key9": "Bb57nX2rg8A8B4CoUjtru9z8bYBCA7UyHf2SYn2P4tGsMfUNaVTqd3PyhuezUih59jTTsvJSSbiakJV2gQE9NjE",
  "key10": "VrgmGR2Q5PuKXUvLGroUDxocoafeY9tmUW49qjK2yLgdMkcWhmSswDYkRVRkAimLxkQBP5gbQu3PB7mNaZJeMX8",
  "key11": "3efrF55hY8BEfXpwxT7bzAXBNfTNoDQgtaPKwtGyzeJby7zUcFaS9xq7WY197BQrsqcB7fDe5LYA8q97ob1JGveH",
  "key12": "37UsJVnNkLzYTMCQnYWdFTjJBTZ6u7mbdXV56ihYktr2WSX7THy3KaJyfCjKQ3cjeZzc7hZqrJUxJcVE99kVwxZ9",
  "key13": "29J8CzwXmXAfMbLmLxFbxPFcaedWJiPJb2N8LMVW1mK44f5qgUXHNLJDCir7FLn5Ddb2JMUb4q4uHW1XB7xE5xV4",
  "key14": "G1nXeV4HaL2HKEDpKekCUQ29gSmk7JZjWdJditoMoMJgdfwVMtRe4sK9obPXijxYRBoyC1ouCFJR2vnYWzPFxKD",
  "key15": "27tJULP6VNm5ryzPWBbvzMhPEP7wkhqdNvfT3gGXMupyMhdgmXPgJVyYaZzqabgpRSBR9chSpvhGKFZkUb8Qw1MB",
  "key16": "3Amx4vFs4dMXgzGJRVF1RfZtkNueG1uepbS9cnwt9TWg3YnqruKDJ6n5La6bL4c3zidRS3etzRVKNatUHFbXqFj",
  "key17": "PjncL92hxczbGGs31WZk9zBneM9pm5TLmaNXQ2dMUu2XmuXzVjFWBxaPseaAwDCFL7uF2Vrz8TArYJ3NegNbVKD",
  "key18": "2MisLa2hpfTJFZZ37F2HbFdGyKe3AwJ62kD245bYEJ1qy3npJenUr3rkzzHaRG16azM7sHu9F5Df9hEVeotX1FoN",
  "key19": "144sfHwoMFJMzHJbppTmLwFCuaTWcfYkfFZDXEFJ7pd8GxuNTjBBGcb9w1Z8enztf5YhkJ1BqFfwY2pEE5BkT7F",
  "key20": "4AeMmwKfVbFWSeov8rtokFQTDFZSsYf5c6UUWwwhXx7HgJp6Dpw4eos8oihJVVvrJhEvE8714TUSzyAARZZKHsSB",
  "key21": "tFvqCwb6ZQKn2JnLGBsNB7ppvNuKL4dkSGd3TuG15TnkxPwsCmqxdi6CsDXSq23y88vXuKbUDXfr2XXpL74wYGi",
  "key22": "3L11fzMpbfoCtubfzH8ndUHEipYTfSuCzj6wYTdDDXqGSaLSxv4nkcW6S4jUBnSghSfWpR3siuUjqj74DJBvme1V",
  "key23": "2ozvK4gZhP5ev2RiNq4ZUJ2ysTFi142F8q7b4jRzEZheT89BrEfnEcEQJLja7ULykktCKGMWCq7JU9ZfEL6izM5J",
  "key24": "MAHYjozu8onWZBUqxSwvqV8Bd9LMoigsanGHuoi6umdqF17iQ6q6MBwhxXU76Eec4yAzahKYdMeXN7tk94mzYKM",
  "key25": "5TArE6SPCdynGMFZiDyhiFo8hdVRMBnd2taZpSJV1dh98npQSRDun97y1bG2m5XzxeeCH4ZXvCLsCJU3BiTo1JY1",
  "key26": "3ZZJdtbmn6u8MXAHv9QedNfLuYH1XD2iCGx6ecpM8ZjSxT2pcdCjw4uZnKR3NHcRdPF7N9zUm4VLu4TfCB95Fwbw",
  "key27": "Bp2kvmae5LZHHUs2a3ekicJZq4AJMUAyAu6ijfxxmjoMvKSTk7jS2RTfxzUsKABPrLSQpoNKupEGAJ3FGcxQGsA",
  "key28": "3RYurKEpdD7FYw5WkXVu75qrc7ATwc1A11rYhxGfCRzaxK1MLs6KWub4hDkr69wNLGg21RsxKd5UihmRUVw4kEnU",
  "key29": "44NvxwGxXykQiBL4WE6sRP3kKXLwDakQxvxEzbbJrcTXtB7cKMDq5mCbYoi6yNTEStWjEqhTFVApnTcHNSRVxnsE",
  "key30": "377tDRoTnSiJtc1JiebLK3nJfoSypixg4gcDQhAbuSGuuh5s6bvrS5aDp38csND8N8SJeBeKooU2yo7LKFQzPtQ8",
  "key31": "58435NnWZJpVvFFWT3Tf7M2qAfqa8sMmVHNxqFn66G2UQVmQPzxSUeaf9MPKduGHrfhytYQNfdqV2e72tFdtacfk"
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
