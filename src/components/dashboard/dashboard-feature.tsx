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
    "3zDd9uEPMRFe75Xkc9TkQS52retMxum98LCXbi3avHWUS8rebmMUR3r5qkvKs4jg2mm4DNGncfhMWHt9w95rPL2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nWuxGGumsXURpR2T6HQgNVAs1D8qEnxv48ron2WDHNTTyJVz2A2tDBBhFsRqpNcZPtHzpvTu7nZPpTasJfEntb6",
  "key1": "5VaUQbSftmm151Y3FB7ZZzooKHS7xUJYfLWnVcYwmkiuP6ew4kMPsDY2PphRxG5KuSi9Tbg7VCfdCzWA8aSKDUe1",
  "key2": "4aceL9TLx3GeHJdVjMbhJ9suE5SEm165xr3yiTGZBAc4nXmBTzKfaerbC7xQEBeoj9nbd6Sm6TpWYTcKEt34QfUe",
  "key3": "28H41f8rUmUUfSf8XTcCgSDbthG2cG82xSbXibSmrU49e1HXA3fLwDnQphAnaPKXuaXm931KRu2jtocUReAMJcNo",
  "key4": "5jENbCAMBxgJPNax55hU2vucih1UNLmnE4froSxhh3tKvSFW5MkHgVHrWnaTVrrikhrAYcuaHFVaGNJZNAYMHrdf",
  "key5": "3bh9JSojNVUj8C5NoMtMsRU9inmtENMx7tZh2FxjGRoyyxj8T5quowWeXtG2T587451rHXT6rD2YFAoeuSURkwxn",
  "key6": "4jSAsydzazdsmC4PrVh1kdpjJ21hgxLpRJcdZnbvjgqLSz4micN2teJ4pZH7vC3JQDfQLCRMx9J5L5835C9aJiv2",
  "key7": "5B6y9weW9TwVuvU3AwFAXZMeGakhNb46uxq8s8j6NEwbPxxiFbeXCYN498mqc9Sq1cGd153W5YW4rjozogRtbd4Y",
  "key8": "21Bh4aqDQ6CxhYvhMcbsUCwKTzJ75uuACTaCgjA3dc4dmLaLQo4Pbc3bJ88mH47GcFffH4YZWtH2vVMYvXgbLdtu",
  "key9": "2AA1PS3heg9fYjFdYtYgjPNeomnk47C9BDAdDDewwiMwYkWwjS1fqcab3xSkZoHkdxrpPdpM4D8NDudxpqkccs4R",
  "key10": "5CCUmCym1dPwgomZZ4TXZu1zAbsJrm9wMcVJmMmjWEQ6XKMQoqsq1PXnMekcPfVZ6sUL51reMCj84KDndorZhakh",
  "key11": "3vXKC7GmbgMxDJELX23cFw14ZTVjjZEJWkKYoNjyrMj8GWf2TvBizkaMJNJ9nw2SddaadfxAN1cCWGXd421K2uBY",
  "key12": "vtMz2xNwWFVvjvaKF8E9VtjDPgeH8EADumBjWyfVE3QG9ERTLH3g7EiXdvJoq7N5sCjnPhtSexNCZFPoVDZkMoM",
  "key13": "3jPTU7WqgZRp4ENsjPsJC2tXDSPjcp1XK9JjZNKqBa9UPg8vcwz9aVmyv96BvaP3zLVtVxWBonDKdUUk3DpkVBcG",
  "key14": "2L9i198DwtgLDtgj8WkBy73vj76NyuigZXvazFZRUXxy8sy1wqzVk9GvoNzPDg1qv5KEBChy7FCrGqrZcsr6whCy",
  "key15": "28UWhk5ogB3HCs1XpwuFFRyFXNxi8fJVyeLobLk9JDp4n6f8gQy8uvX8Npx2oaHCs2uDpjah5YrdHznykTFaoMPj",
  "key16": "57rZWhBT2uXYdhchToXYhc3dmXLQRHjPDr23uPU9uAohyNXJS9nF7T62EykV2tHuUkLxVtahL4vN8VPpV8oRKgkr",
  "key17": "WF9cxtD1jnEbSt7sbVeFaPtb6JqSvoAx9X1UMhbdrTjpC7KcbMLb8oy98EvJfNWb4bhaWzSUV1WUBfuACLjBy3J",
  "key18": "446vJFnshn4jcJxcobfUTngiMiXtQssWYZ7oNmk5xhVahXGRPW58Mntib5v26EWMCULxwJeUBx6qZFYfKj5eo7i6",
  "key19": "hQyhvijW8ek9UZXu7rijYH1CYtEPXcm9qAee6ceaY19xxx3FQhLZDmoMpKAt6vMkfQt3E6T7UCJsULjvHHSEqQs",
  "key20": "318ayLs2jnuHeU1m9uQNFL4YQX8vVGK4q5AxkXG8Y6KCKvj1akDHbq79fRYvjeSg5MUJtDyUEKxFbrQ7a7a4LTdr",
  "key21": "2Ue24TKw1vpnZGRYp1pWRZHQd3sAM1aE1ETgmQKpam7SgNZehky1nekNvVrnU5rJZ1JeExHGtzKG5tWTDcr4e2W5",
  "key22": "3hpVRrKRHAVpydmbGGE5j14xhw4SBYwxgnkp5i8zED47pB3qYDQSnG99mqDJiQJCYkCXrnvNA9qKF2eCH1nSvDZ",
  "key23": "4CcfFYDzdDckMnCw8KqsnkHF9KGG85LyrNYRsHqNhT73wNACfCVD7Lu2tmtgq9MhdTNLAxYMeKjAEUjwUAg47Fey",
  "key24": "uw1i665JPfqpRHgfHcBMv1NahY8YJfSe7ajRFfsSZzammbdScGc8o7pTMBT9WsawaxK6uyJin2mTF62vShy4aXd",
  "key25": "sXC1b53Mpavh2kkK2wNepoWcgZKi987eE7fegJXPZXDa6E5EhCd63DS19jMX9XX2wmb88NE2n9zokrJ5yxBKDL3",
  "key26": "CgmCt7xNC14LU8CAFq6fQYFYYC9yZdRQNmgr69eB47t6i4t64QWV1ocZhwnybxqRQbYguYbVrRXhmWDTtEGLja9",
  "key27": "NWqF5f6JrKF9mCmgpbNzrWaFNoy6qgaZRc9JNNErapcMJmnSevfonR7EiJA2kB2GNpZRDodicnfyUwXt5XwZLYe",
  "key28": "3SkwwJYHwE6S5WEUpQeSiWCvZhF1aFeNdnHn6bfAjAVcS8h4r1dVrgcm5dEAPwxBGtYd9ECeZ2CpYJBsoFZuYbAk"
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
