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
    "5vtZQ612GwUUruAskNewPdqu12ngcFMkQw2QffraJnws8r4Zp9NaYx44EAeSq5HqvZUqGBpNsndo4oG7KQu8v3i9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EdPxJTbrVcrEw2o9drPVEDVyGYMU3PWSTUNcip5awLfA8e66LeN8GTkdTSvzMZ5PshEMqH4ndDHoXVkDdCDbw73",
  "key1": "3wfcRuR8RG8CMRopkgdpyuoJ1aLcD9skMps5mP8SA7xQyBHAJ2ooYQgNaqnE3r4cWCxix6upcugBc9UT98wF87mQ",
  "key2": "5HLdHh4WmjpMXD4rJrbWaK7yv5bwCJFAYnpg7ocb2KSY1AjqniXeHgnDX651jRffXy4RqwQMdJDtPvYYJB3fJyju",
  "key3": "5AE2GNkmH1CKdkJwchWpvCRoDhwHACwgdMZ5hRVQgHnYrwghHuGXL9kk13ycg3i5Whsw87gmqmRfoKxcfjdMkMzS",
  "key4": "55WfguyNAZnZNL2ssHKb4bDjgG4cUujsUvz7X13K5V3te7RLxqFSNNewK2J4LVr9tm64LHaYo8zXXZsT9e1xe7Aj",
  "key5": "3Spfdw25pE2kBPdbgPQVsgMqGJNxh3mxNtW7fmhjhuxw6qbiPiEwZAEwZmm1tdKMzkHf7aouiS7uZHdtvS4Ezub8",
  "key6": "4EZA6nNuzZmcF5pbsiF6B8Qn3P8KfpiCHpnNp7kZc2QSHQvCyJknwghMjGwwM3VHZuHWPripVaFg7JrxBHZ3XLLQ",
  "key7": "3NRgnbnFGXWAFLcy2b6zuwo22oqwgXe7MhY8RiPNFXdjRtrmmJ24VR6x6xgj5CknRGREukX7YZsEEvs93C3uadFF",
  "key8": "3nZNWaGj1WdfESjt396KvWNsyqN9F2TqKWp2KvAvyWL1vcjwUMFQSDZ2dDH5cWmk94LKhchtDK7kafidSHNpj9bj",
  "key9": "2tJWdGGTMTEGvbBjj7iveJTRbMvw7LCueQGPHwuxWXWZbUgXd5VLK1ngHn7Vo6yDJDcmc6g3p93NsMQrUYA6nbo2",
  "key10": "5rR3E7yV4Xo6B3fVemBdjqT4YduWocfDfDQUMXnkVGMwDZpBxCcCPt1apGXjcEfsJ9hFgMNXPQcukTAr2Dpero3F",
  "key11": "2HjFFKkAzEUJmFjfnT9UYM61nhyknydfhT6JsKHuuXQvMx4ntLzh14ZtvT88ZgyMkZm9wKwfMwA2TwVot1VkvBsj",
  "key12": "4yRzJjTbHSEZhqk4kuAZFoqA3UJBN8bPaPTojibpCTdf6BtVNXKy2eqRQYKeUQezgjQCX2hByLHYMfXcGsTPS55H",
  "key13": "p9mxXtNQspNoUuTiiEqW8dBjUXrpgxoyE3veAqM31auZG3RECkgsxFadoVx7Hvxi92fLPGsyiLKcMNk9Kg5jYRF",
  "key14": "2iYfL4xGpd7TkFA2oegeL75S6Gf7QS6fKMuhX4C1LDLHE7SnKgw4JR41khgk5ZQXcMNEywnpoqvoLLxk4tcb7jFJ",
  "key15": "46pZ1zWumVcBbRyTDgCTbw75cn8mz412iGVdSMkM24JGQBCdrxpjqXMBLKRhjbcAvrKH1MZG9Y6gWGFTNDku5DH5",
  "key16": "2vZ7C8vW8XVp12AQrzkU5BXQhn7ApkeDGe1ousXqzK3u2y2QxDpG8nPZkf4gCJNVqNbYXsddx5oetdoJkPaTjCLt",
  "key17": "Cy4Bd4kpiZwmEduz2QhFkC7dvKLaqhUVCBQ45ipcJcaPyVtKWRjS7afzsVKWMUAbn4VY5F9pL9PsFEcUSeMNHst",
  "key18": "4pkCGkH97sjG4z1kc2o5jvR67RxZpLnsd9LZ2XPSeNEL96AE3cPUBVUUKH4xHaaZXf1zkvB1Yxqx1R3YpVYNVRJ2",
  "key19": "4bf6zHLBxXJ9S4Yh5Zfh8WpNo4RDkTMs5fx3ThLYdxYZf6cRSX6AKbxuz4H5tZURY8zr3LFjuVi6nK5FTNQXoFNK",
  "key20": "4efmyzyi6yQqaCiixsVCzykwV2nBRR3L3aBL1ZHZsb4J6TWakzafVjmkSVhuavuwFyxC3tpEMpp4s8MUZy91NU6N",
  "key21": "39gAqGqCz4YzucVCwHCesHmLcMJ8t614ooXo2vnFgd2uz6XnKEwsmt5tRxfRQFZsfjxw2MAMnARxs8NTVNZ77RAd",
  "key22": "5SHpYK3qTxJdeF5LzaS2yNJNp4q9c9pK8rGL1zzDcpjdfEksPgV5ikatSKvUBRVZvYkLLGPk2xMjwd8L6SvTRFbN",
  "key23": "Ry6adhszEQb9nzqBHKM7EuvhpFTKpQJEEbSZf3K5Yz6v2LuPPqeSd4nJ3d88prRG5ovoUqAPUoSWq7XYyRE7EU8",
  "key24": "3iXUSYdYSPvkvEuuvU3wg5KkzbPfzMMLNkk4koMLewPk7SVSmu2kTRE7uoApQkMt6LoTnLzmBoQgQ1sqsh7Wus7P",
  "key25": "31wmenUSnwkdohcUFrSSZo1WMFsJWxc8iXv4pWmfGBDzfE38HPmoVnddybrV76N6cWWJcBx1wDgxHU8NwQ9CqiNR",
  "key26": "5DktuaChrTqUiBQwC8MbnYq1PR1Eeve5MKWmV1T1ZEbfBHVYJp1HV9XVHhyKbrFyzj3D4oq7C8akJ5hLdXyS8pvs",
  "key27": "5noxMRhLJZr4As6pjdN8qf9nc4PZMQqdvHWzBVMeBgpdWF7QJjNwo3t9djUtdt6ETyFPqcbNDZLa2E1Jcx2hgk3c",
  "key28": "2hCT1ruuojfVGqUrb7g6PRH1E9QWw8VSM975r6U4Bdnh3fCxYUyacLEabB5ndydY3pXsfM1a6ejtiYUKyiXZnQs3",
  "key29": "62HMEypj6E8otcbj9DWrftJ4C6KPzs1sxeM9QU6sqT8T6d4ogX5qQYFU4sCz4YLb4J3UjNx2JJWCeNxoC5Wh1nEm",
  "key30": "4hUJhvnkPTDgNQTyFfiPF4kY3gmFBHMFNbcZFZJUbTBxebV9mJf1tXqxJT8dGbFFatoR73oabkddJLp4jw5Zh2fb",
  "key31": "2NtF8rw5EX9kzzDtMCmG3iDD8nKUaVbVqEbPizoQEpqvvkQ3A4Bi4Tu4sLUXYLJA8LUXNZcArH5PHYvF37pYwszW",
  "key32": "4vZFmwcenkQxH1AwcMPmYcX543FNrhMkuKr2wdohsPhDGifv6pMmcUutBiS2JhB1ZM94ox9UJUqSKhMScYZDbqMv",
  "key33": "5eU5Vv4muHF964h6LRhvkxGm9HmuSSYn4E7wRwrcyXsUubQbukHytur4FUJdgZxp2YPKGL1Kb1CwqRRrQCnC7mSx",
  "key34": "53JwoSijaisidREY5644W1yAwgbgVCPJgMMHgzwxWPiitDveUg79MWevgVrCQHwwNRgXboz9YeTHAS9AHwwZxKTn",
  "key35": "546oqms5uakQ9jUXUFwEd3E9BCbSEy8Ax2DK8FaxXFRo2v7G2rBYJ4KqRc96yRDY4HZRYfNyFgk9gdNdqr2DZqp8"
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
