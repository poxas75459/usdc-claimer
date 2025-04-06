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
    "RHyw3eEte73jPmyNWGuJqufoUjYXVZTRPWytNhYRGBEuDYF8fkbxc8NiRqZNEgUwG1PomzvQG8dCbi7iY2WwC86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iSPyvxcC5JMuUMoVhdSfViapGVuY9LR5am7Dp1RvkHJL8fRtzXxAgE3WmVYdeinxHndC3UowyeNbwjqVRUAV27i",
  "key1": "39hq56ZXwLm6Skg6GPJQk43CNFp2m1JCMH4717L1P7LMUsMMimxvgiHB1nFgAfXUPXRAd2CJFV37CWyA3EXk5d7v",
  "key2": "4eQ7MZVUXSeSnsjqcmHXZqRv5TaNWb1yRfgWGt2Q37fDHVgWqP2NRf475brJn92NoQrCLBZ1tAS5ddDHr2LwqYgA",
  "key3": "pLfMn9nrY4sGEwJCurqQ5fcB82RcwiVV98fz6kzVLqgDhHSZfc2S9mrbbncpDjbCJaukbR4VLPGpZ6Qd1ztJiKn",
  "key4": "Dw2caxadcqsJYEXNtY1Fe1aeCmcGk7MG6kHBet6XyUNAEJTvDQGduWZg4YHcJz2358DYcJPdnztWh3DcRwg22u7",
  "key5": "d28hTosHv4hH5vc7odKXrZwA2inXFzMUuv8kZzX65aqZLDPjjQKihXnHYpwsZw9F7ZgrDL1E51GwhL5E9VeqpWL",
  "key6": "5Yzmo5d69BBd75yy8ywT5KecNxPhauc7Tx4u9jW5HeVTYQ9qASr3SkFYApNDKgqBRGX6WJRDCzrsUnoFS5FXHCuw",
  "key7": "4xksLBCPjNqnk9n4AzUxB36Q2bJDGYZ3H88RvsgMQsQPcGGHPfeEHjeoSysoo349KC5AN2RhJNwXj4GUrf9Hce1B",
  "key8": "3WG1erZjomaDrCaBtwzdpME9BF22rbjGx4RQuR264hb1Fh1GMASfwuQMS1pRgynDGcAUoQ7HkDw9umnLnEsP3mxF",
  "key9": "UVmoxJabzEUqPKSrgbsnF3Uq2Epi2pvyHZNQq1NGgvNMnwYXbCDcSu4JURLqy5VjBMJHWrd5bwcGTh4uhZnvbzn",
  "key10": "5xba2XPNCXafU5GovwUyRqP4rJJDqDFJcuvSEsRu12a7fKivCka5m6KCHwtJNKa6sstR2aG5eKJjoCUQbCqyg7Z4",
  "key11": "RLWuxBZHfXbTQt4VDiNuSocJz3NWJQo1HE22aXCtnMEWPLbyEWSsXt7vEVdHHnURKJxNAhdRpT5BHe4m7jsoA7m",
  "key12": "3nHvmCSgJDriLXsAXJBjBVpHL6ierACEk2Qk4uJb6C2Ca6txCtWhkuuZfyAFU7MoPcDfsWvA28fUvcVYPPVtYwB3",
  "key13": "Zg1fvttKvbuLNyirGCxvE7Xrmo6LiBdDuGc86qVdqqpAWScvrfn6GMqJWRoSHACHRsDgjhdZruEudaeU4JPC3Dr",
  "key14": "5RHgdp3uHTEtpZPHxeSGjoAioyHnWMv1DxbXeDg4RH2xAwKtNEpj8oUjcjjUi2qkEfEJFaojsj9LNdLC3jQoCxbN",
  "key15": "4bqjQWSC5SHauVVREo9PzLgRcqJ5N8hQrCRWZTbyughbuF7JBKDwZ6kRX64YC5oAS5fYAE3RBEmbsM7bdVFZ73hQ",
  "key16": "4vtVcjB7rvkNX7pAEXwsa1YYUunVWerwcykmqSsBkfyqUEtCWpFMWBu9nrWvgat6PvEdyzULJixWodvx95SB4y68",
  "key17": "3Yvh67jqedbCTgiiT3fRAkDetDiBhRwkAafs9P4LbZW9iPH8cz6XdxzHasKdAd59sPEf29QsYEv5aMN4JecbtAgA",
  "key18": "mHjrB3nc5QA7cyzTnuZhVUmoYF6zZKgoFf3oAomuSYooD1g9Wg9xc3HTiq5QAU8jYMZxvX5J36AmUfcGkm2v88W",
  "key19": "59EjecSiCoUWnGiFzEfXZp1ge5xd13Ef8Qi4PrgmoKY6h8rteSnBYNohPYyaswhNgBFjwguQMf8FgV1a58p9XpXt",
  "key20": "2ZPZdP8wLZ6FNs6eUA4Qsv2qZSmmJ6w6YiSfA7BcmPPuLBHt8eGfTJFFPG2N5qUsqc1wJc7Ci2dMeemE7X6QDzmD",
  "key21": "5Ra8CPiyoqztSnvR5FD9EADtQWvFFxMnpgQZ6HYSJGZxbNZVcypNNq4zvzauzWresjQH3VQpFfPTaqUZVZpA6aHW",
  "key22": "2HKctAhZrN9jwinxz1BkpJ4eTZn7vVxo5f66SpCnK3W66QW61ekNyzc7JX2AnFRtvDSZwL6W86ex3M7HYzZ1Bira",
  "key23": "5CJhPBsUNKcqLeKwFn8NiABQeTEiD3YiKb22nh2ikacAAAPVZ7KmngGMXD8QxdSrLu9nL9rJMEodz74dAmwknKo3",
  "key24": "pfGBBWJPT17ctrrjH1jgw3z1BiVvbc7QLbpUF4WUwKxbsw83ay8Mq67CRMin4hcRCMYyy5j3S8Z11vZZc7Uj8qY",
  "key25": "4Le2xYbet1AK5ymYUJWgVs4bqjN1Mjx6bkWuymyCcZXc52RvpX6UU3uNSQ3K5FKUZs8QMXjZSsGcGp74Ci8xjFT3"
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
