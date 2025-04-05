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
    "2fwQCKpUN154KHHUaEK1J2ERLiGg4dK6xu3rxA2qnMw7wQYHvPmtUSRxAQt5ETUojEh8qbmhYskg4kRwvAqcH4JN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cgsSJUiash2cnNSfTSfDeZKjKfnSZAMGEFHJ61P7DJ9XZMq5yaT5yDSCLjR6NDYWVppYw1Z1RQNvjm59XQK518V",
  "key1": "2Fy1MyVbRsbWsawyNzpCJeTaxRWAYFK446kp7qsGwPLovsxiYzWMFcJ5Qqa3VbiBqCQZsK38FTdmwxV3YtgMESib",
  "key2": "42mbgSr1uMSADEDekhfmXD1tVSKwqDt8TynnPmhBSMbykXW6J18z28Rup3aDCYgrV6AwXsuEwjp7AE8e6fz2GCTw",
  "key3": "58ck9VwpBBo8fdxhC717iJKvAZY3bpNsik3Vfkv6ohcAwDHagVo4VB1SwvABvaPFmseVyVXCSn93phrft8LQm5Lw",
  "key4": "4WacaMs1EJnnxcBnra1rudVJUdsG22ZfESMBQFusVwpaJWdPnULPGjzkQUsd2zgU9goTLuAw8KgCjS5iXGphsSQn",
  "key5": "2BDywaPqaTWdPLmTEqY2JELu8H3skt5EjbKSX28iZKY26ozpTRNtdngmKbQ9PpvKjCuDfQegUJhG9Cemx4NM3vg5",
  "key6": "2vTmqGdhDE1WZ4cyZadjeNPthsdLwTSvhXQmeGgXW4dK97EMr1iRzdWvgEKZAdX3nQpxSgGg8JdKH8dBV3gRXC5J",
  "key7": "J5Vo3iefzX8mcyd7bozebSWB5ABVgNFZyccMY9C6fjy1zmfgKQq4MhVf6ySjNYCEvmKGFZtPZLTMvjpjGiYNahe",
  "key8": "3KJVJsJs72VGtR7Vw3wTSv772uMt8vtGnLwFoaVr6K7rwoTpZPC6H4FhXD9GKT2PHwhRX2nmEYL9VZSM1CYHcZ63",
  "key9": "2jWhrLyMjtFCdjRexwgXT6M253ACKq9BrA26cvc7mnGNcxG2PBh1Kd6VeGbLdPqqEV5BXwcicWY5iqdtMib3q4EE",
  "key10": "YPK7oEHyr4vtujfhxWch571pSLLn1oBXCJAactXQFiRXNNKMELADD2KdxGh7dL7NyxqrvJxjvYCYYzwLgbepaMs",
  "key11": "35iuFYSgDU4SLt61BJAE6Yne22RxwH8niS64PE6YF9wcfqHofiPBvBqnhBiymsP3GARq98MNoCSrcmYkJTsT7Wip",
  "key12": "526W6ipH2dYyVWbRfM5DLNZrqXU6Jo8uqeWUhgcUb2dqmEZE6xNxvgD1u2s7CjiMShEL6iEyTjKqKwsHfJ991RnG",
  "key13": "5mUCi5vwriZSLJtsrWCXh9xF7JnMsujduemzVJjtgdWpF6iWTnEpHqeq6fcuGzf9Bc3YYrY7ux3RLyXtkrmYwD4m",
  "key14": "4zPTrf3qLLyEeRtk7hJHez7fnTNzFBAn6cCmVaRd5PB9sdGkMiwbkMHabJR4btGxCQaqFz3LeiovC7H1yjFQrrqL",
  "key15": "2FwgfVRVjED79qQvfgJum6fVdBue2EuThiB45P7ViwnUP8eiCZa5yhJ3ztAe9NZsxQjdxNVbXwfzi4VmqPQw7Epc",
  "key16": "2JHsRZ6qEPTDJ5WjS5s8KNeoiXGfMHWBHPMnF1XEdZRBR782MGeohz4E9xy5eRkseRWYWHuyF2p6BpLQ4N8zM5ge",
  "key17": "2LjBfhXU9jqAn3v8HeDTNQJZTkUYLTbU4MG9aYvsTnWXYSW2x7tNP4MrqzmcKcT88JxKGg7W8tAz48ukqL9FUTxM",
  "key18": "ySGCTwDG1GMw8CxQSfKQ1b765B6rKSLrrR2Z5Ki7HfTRgCd6sMcRg7hrhxz9iG9upq51tBj3mr3yxX6cvjBmS6q",
  "key19": "4EgE6CKt9sqWgzKDSYDJdcxKzim63D7bUBYBMcdnRHbGfV8RwuxcebnBrN8Y4LAEnhJZw9y3xDzT46x6gkQLWuYD",
  "key20": "2PBCfosLwKx4THV1RcRwtkdr6ciQLNNEbdL1ucnRKf2xUSL4UuJK9AQCYKhPpFwJ4mpveC4dPAVQx8mnVzGcn6Fc",
  "key21": "2A3jiEzHnTXxYPjrB79iBGmZJwvg9X6M7f8JSiXvvHZJDGPFSun81jLkiiDHYfJnFzWecEsvvEnf4BTL5rrfbc87",
  "key22": "2qWhrqpTwrF8aBQsPQo1ZFRSvNxdAGQoPT3gXaFYvpTJHs52mMeq8pJZ3iQRKe4ednrGCh7GXHkiCzDDZrPBoYsk",
  "key23": "3GfeLdnipmMegKsSPjrt2nL7eqQqtDzm4Gkx3FswqEogERsZQMufY8RwXb98tpFrqC3WKiBnewpuSB5whVE2gtcn",
  "key24": "mS9v6Ec4CQTg1FnvXrxRRCQ8x2rKyNbkDkhQV9XHyH7FbRqnN3Ydcyb4fnpDnBUr31fav3CSnqStTCKvQakPqfd",
  "key25": "3pzAUoSrAKP2bpkkw93SJPnUmKmELsYVM3NPpu53VrjtgejjcYzDMoQNoeQyGtLwQnEoeyD5tD1d1pFQCVaJS9xG",
  "key26": "UMFuGtvLAp1vimpx4xXBDmu4JzMEEd7brAFpUrNCthLBQU38tWoU9s1aiRBAs9kZWeSkDz2DqZvqz9fWPwUHjjW",
  "key27": "4YJ7qjJsHiJzPqoFbLWMsDejVPx9UTS2wbGzRvzAnMtys7XT5yoAgGByKDro8iFW1VAHxzarfT9sE7ePHBkgSKEa"
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
