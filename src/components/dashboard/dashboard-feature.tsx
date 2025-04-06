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
    "5m5ybkhiHtYqQL4CCbhTGUTwQRY6KtDW1SHuxdseKhwG1Y1LrrhPWtgBSrBwATLd6QDmQzeeQNmrFY1ie3aB6ix4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LaVtT3U3afYuw1Y7KDMM3mPUSfHMWZ727k6UQYgSxbb3z4rXq89ZMbVZEEydrTwVvq5pEbXcEoJuzVaT6umsdQ",
  "key1": "3b2SmFGQziNgwqEMmZSxjX6zZTicA18nb3w3juAYUftAvW7rAxbxDpX7BKKq65R1JioQRtyWzeZqbvPvVghEBtk3",
  "key2": "2AAfVonVqmvoTQpY15yC3pUc5BwvhbTCXvx8wEjtUpvzBJacQ9VjT4VvFX6a5Czqq8wVB7Q3RqaPC3i9AExJFEJK",
  "key3": "k3GzMioDQxpXYkDy7WwYYT31piKZ6D4QWFvVxxxYvQmnuJKEpkNumMxwqcMGTeEJ6Ypi4yuWB6ExWrvW9DuboDX",
  "key4": "3MYpMQEfrpqejhoiFZPx7FusNSRqQ8R3P3d1ty3fQdSyN8F3LbhDcHn21T5aXFpkFz5jEntTQ3UaTnSQifV9E6YQ",
  "key5": "42h4CU7XFG4toUPvhxaVM5auMc8sggxZZwYtwmY23vjccS4VmosG6v6ohHsZHHSHJJkF6qWWxAhsuxr4fccws6Uy",
  "key6": "5h34pMHydkBAhbwjSXde9ipypvZneF4YJ23YnZCyejWXnZrDpa1fkypvTnKQpBkdB1yQdeR2pdWtXA41Fgcn9wcG",
  "key7": "43eAKfs9M7eh88hJdFUChJbUjbYoR6x2uds1sYZqCyy9xDMn5aGUBqRhWoHQ934vxwSspYYqrJsn4Au6e6KEAsE2",
  "key8": "4916yoETV4428Rg8CuLwWTRSmy4YevTstGLKBaeC5XpVJf8rwx9tXFenftQ6GRkTjs8YaBHmLXdfBxvbLzeAW9VC",
  "key9": "e1xjWACJZURJGQXjdsmbHtvCdKzvYQXimSt7subqpChU152GCLLEmmidehDAEbBAtnrsCeaia5wN1qXMsNmKj4B",
  "key10": "GVxXLKWU27bKv6RDy4UkswKh1t11qYgWK7RrKGkjAUrSS2wyAQXgwTKfDKWiDdEfgYUtasq2EzCYP62nKsWzv6h",
  "key11": "7GcSxVPvM9U8GskduPiFFd1vzppSYg5VAzDKZ86ekqQ8EeVMbQs2m2YSJDGxAfkr3TjPm6TG9AwLxT8p3h3AxL1",
  "key12": "24tPKMyCvygUSZfq9pBXzRFFtwT4Bg2SRB6DHHNQmnryBcUnKeUJcQhNWgEBKJiKQCutpQSHqAQ8MMe9xvM6Zpah",
  "key13": "4MFtkqYqbNwyBtsa863Sez4g1JktZLH2JRM3JwuS6Fmzqs1XkApCQXPFi8PaA8heML1t7RyAivQBRStxFCw8SyFs",
  "key14": "2MJ8GtnWpFtivvGoo9fPsnQqS2o2PJxi4gpHQfpgtptLTgKi4cemNBYc3UmXDEJKCSjejx9nakCLywygHKuuqpLH",
  "key15": "3fpJEir6B1jsfiRtZ3EMjD5HPB5CHgEedb6NN2SbyCH7TxbUSLQs3bbSTGq8YPQYky79SijW9SuotbF6v6gMoo16",
  "key16": "4UjYkCWGHF8gTm3HSMBznRcW7qWE6sVHhvLQpfdhZkVDUZB5ZS6k9CvcUPrpMEu3uDkf9Sow45DoCqLEzrbxAe3V",
  "key17": "3QApM4ZiBnSN4yQ4N5pYEpCRxbt3fCXrSt53KhdWHdgTRg4DHMo9UU65L3ZVvQ1c5TRVfUJXnh1KrKJJxZCsvMwK",
  "key18": "5EBEbqtvRe7fqxYBv1jH6UsFEbppDcGmSb5DaZyHBmwwcXVuogvhYwjen5MvDta9uyHWNS5PBX1QJRC6s1ejy86i",
  "key19": "5vFqBCQEeK3i9uWcwgbAM8CAkPDWsM1YBXRcbMfcvgKToawxGtQCDSdSYYW1STB38sibFwGLK8HotDeatqBd3Kso",
  "key20": "xZNNUGdsCMcfytttEtjfdpotTbig1jk6EHkg6kW31sctb6D62dRjJKJHm95XRsw6yBvGnRaCRRKc6wwA7feK79J",
  "key21": "uwHskmcGDYhscpqpZtS4FTa2BGvXLkVCmApQmAR7KSmXfN5Xu8FxTgexK6z7Xq8xPCyN8HkVBJVb7DB3HQBQwX7",
  "key22": "4rZRY2othJDnYxtCF1YcxEypnjcT2XqwLcLBP1FoFgZU2v3yJGUp31f33dyNPxd6Byox4RaSsub1NFNzzGwGEkkt",
  "key23": "2M4cCqevjh2hgFE7SnnSEtJ9NCSgnC3dcTUBC69RTt5wTgjMHFDFg1gGYBuBeQ8ggMZJwKE8E91RSPa5CJ3SE1tN",
  "key24": "3Lt2b2tkgV6DgydHsEieYn5LBLoD8gqHw8HhfEZXRy9SyLGiZ3kzJnW7fxubJfg4aR3d3NMEcmHMZUVmKniRRcaY",
  "key25": "5JMoTKDJr8cSk5oQvod7McKTqR2iD2HJWmTUzfyWAEU35H345skP3LGwhnSb8TMvgUaJjKe9mUhZB4sJubrYk84X",
  "key26": "Jit1vyCXX9iYa2xQPRC5udrkqaPygVnrtfinYBpiEZSAjrhHcCkhE5WJaoYG9eBybZm2ByAfpD2RkzVwCsE2Ury",
  "key27": "4nkmVArpkdwH3ZjauTPHigefYznCjCoNf5Gg4fHXn2nbNcYmNQgHVbs8kmKs1yQaz6cuqyYpdka42gr1Qoiqs7y4",
  "key28": "4f84rdg8LWFk4UPSd14wFNapAUkiAGfgANb3t9NcCTEp75HP3wYZGWWjjnmu3yS67DnF6oxeLJ6kmyFkbhXMkQBt",
  "key29": "UiqNDmw4HzURYX3dnbjzpCzWdXFT9HFSuUdck6Sfa1CK7jvr6ZReBR7d35Zu3L42HkuV2f9DQHqNnvdL9MJofsB"
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
