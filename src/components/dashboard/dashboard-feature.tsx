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
    "26khi4GXn8TLp91y6S45oThErASYu8bdTmZExGNKVYWFQgXyeucvSJQWzQM1EwKkfzkejNbHoBvG2bhPV55FBM1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kFruCCpJK4QWj89vCmqADgWjofrL14k1qQ8FkJ5tUC5VwT1qU8JRHJVSXmFYiRrGn3uyGWEZLFDfjaumpH7wCYy",
  "key1": "5Z8gU1wSg8pPkT56Q53N5PxHS6C66CUAh3uon43KZBjNPia3oMA24bGmr86FLZ7Zwdy9BoHA97u3uevcqeHwMd86",
  "key2": "2Dzjmiz3SUpmZ48Z4gYhh68zRj99YPBA3VxM1oni3Vq6ZJYyJXCJNa3QCVLk6tqPHR8C1uDy33Lcqi7Nsmwa6XnY",
  "key3": "2ExMveE2qx5JmNHRUYd5v4UuhFcjbgE14vnjMzQxpzWveqZC9KNnNQZq1DhnGYSbVENTPp7bM8PKNtNsy7EU8VTj",
  "key4": "215ZjfLPCm7vqamyzqimmRB7u65LDsJbV7mjwMaSUaQXtudLkXZRPvtWpkz1sq1C2cTwLBzWN1hPdiNbkvAQ6HiG",
  "key5": "4jAEWyCS9WQhUD9J4roPXMQ77ChKHVXgGS7U8mEJBY8bdFzgiRwKgQ6Lzfb8ZL1NLcRnGiDKc8AQirSBz9HNRX3P",
  "key6": "34K13doJ7uFQDQYnn4bTcZu9rsQy998HjtrGsoveK724xzqtqac99S8mBmfu8Ztuk1gW6AN5hCWU5xdo6ueLEFcH",
  "key7": "4eYcaAMTfTaQy4dyt6kbspigXSPWDss4TmoKbmz48LR84vAvkpG1inHKfoDajQN7GiYLK2mxx6QXZMCZPkHbDfr1",
  "key8": "3amnRyfjLBXg7B8PNTF2tsDNn1VPPtiSzQpiNjvM26cydeD9Pqefe6CZRbyebucNgFANCRx1ju9AVRsDMywXaiBK",
  "key9": "2fdPV1Yo6y5B3Bn5dntSRfsfP9Noop4CUL7JKs8YxcUsHPFBGe8KmFdYw9LH29EmF9bYkpJKDJYxxiCUPSKAV99j",
  "key10": "2bQ7a1aY6SeoRBduJ2ZES6opPj37NwTPZ1Xfcq9LtTvFDCCiVWEVTxWVWueZGgNh11fVAL3DF5UBDMmKQNtCdarM",
  "key11": "4zSTyJ2xatD6wm1V2zoSgpcTo7vR9EhgAQNWDbTZeXvGPHzDCCZUXjsqXxkKZQdQekZDpaQDUwqs4nmm7wniCYQy",
  "key12": "2K36yVJKyHuwqW7msLFiK8LvSVQVaqCpbJwveNfEjrNuNjuDrVSYEiu9KaLgaEmMDkDoAvrq16E25JoyZnHeRttx",
  "key13": "3K8kcsF7Ths3w4nRpLuQKEsrbxUAdGFnTYSYEM3ME8TvGz974WBxPr5MAQqyXiS4ZGy7LbviRq2FjwdpFf9qnFjW",
  "key14": "58XygVMspMPWMPHAXHwNY9ixSTY8jjw8cURUjknkr4dTBAq1jCW7z7YzK2gqKZjA5LaGi31PVXEdJdnjHnkvSfeh",
  "key15": "9UtbZsqEyfpxJK2XcnhA8hhUEbrGxNM34PWBwChxfmcohtt2TkVedhKgYzWfapUjkWkWeScJ4rwi5PgcF2kVh29",
  "key16": "5b6HJ28q3JpQi5pvppDF1Ap3ZfTkMv1xc8EQWriPzwg3xA5L435c7YDHU445AwjVeCuJqWBwasfDgttKBnxf6HSY",
  "key17": "2j9n7H2WXHb9sy4Pu2WS9ieHu9dCteySCHQfYtJka91zURPX2t1DWa6cLrmCDrGiMVEcXNw9KWdzLC9LNDteQzMA",
  "key18": "uwdBR6wVdLem6vL5uz3D9RR2uycUCiciof3Cys4sSzqKfXkBxsbiPD5qRWMyCN4hAwH2QChk5Z5F3WfDgrqdCcw",
  "key19": "4wstKnUqS9S4U3ecNixK4hH6zDZ29Q1koZ4Sj4Pjuf8AuFSPFSyobfdQgu9MNrRVkBcy3nhm3cvM6jewjPvfYsQy",
  "key20": "2qoKMULCRbfkZiqDgUsfCjqXop8G8v4W2XEGvW3P5wuVpyPxzBQJu8YFhPnJHyWa3dgMqTPnTYdfENYRUDzDrnME",
  "key21": "3fWwc2hsyUVNTPJYj1NxgeRHcjtfFcDozFdadvhCpaiAMTLi1heoWjBFp28DUqEw3Wc4iECzF8uVThzuKCSRDrLE",
  "key22": "DzUp2MkjSkwNFUo38DEL1NrafFPsizBNrzuQmdb9N5CY5AXbbUD9KVDjK3rt3pWqYMErxZAq4jNY1vVnotAPiZH",
  "key23": "2pDViJQ9ybi6TH2CC8DVxCg97B63NNoo3nAukTsboarTfurvnjVtMbjg4qsvhMNVXeCvMvdJqc2BUye6xTXc2Gv3",
  "key24": "KEek2JoqZpWn8cscRqU7Y9fJeLW7DLSSEMmFqHQ49urtxwzxnpUiDMYoyPvpwv7m9wU6XKoT8skZvokkNhPvQQg"
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
