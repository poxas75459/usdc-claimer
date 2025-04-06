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
    "56hKeVVrxiH55xXC8HMCuiDGvfSUoZhbfqe9Tv7iaaqUaykMsseLPvYVXVvEfwXZHYrhvhSXGcJeSfGSVRAGMy5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ei8iggSLyJUxzoWNwHAW6W4UUNGF9KXiXPHoo2DsiNhRzAa7yrEWjh5JgvN8qB1ND7RASnHpCK3UssBuNmxJUTx",
  "key1": "2kRrezsjgGk8nn7LTkGYcUYux4asqcwvF9nKCCgE2VdyZPDrBTtEkDbzGEtQFBU7rxWSKpckae9Cm2CvUXCtogbY",
  "key2": "4L1pTuo33AZCxyLC7KuSYdnj32n2ZqK9z86BjzNR3pHXBkmXtTZPLm1if5RThbL9V9jZ5yyoMLx3wgCfoJqJgnXV",
  "key3": "2j8w13ToYVj2mzdC4qESTS6i2U6U5Mh7rab32tJtAjg61M6Qs3syxLTZ7MxMowKDViZqEHcVa8YFpSEbjbQNHBYN",
  "key4": "5xUSfQzhb5Vwa796UkhV2JW7gFdpnQezr3H6qkUWc1XN91h5Rz234rLADu8o1BH6oBwAmuiCez3mP3BYKG3Xk75i",
  "key5": "4TLuwvpwz8sdndGYMYYHK9mDMFKixqEP6cwgZPZt6CdS8JuudZkZorGujR6xUSYjCbDwxh3u5EnRKnC4HotZitiN",
  "key6": "2nShZrwtYoKr2FyaLd6bZcotFrBX7n7q8HYaGyXwYmChECwDRXeXZSRhuJfzr86WfbWSjaWBmFGo8H22YfdaBUA",
  "key7": "5g3HtD5WaX8eyBmPbMnAM4LRxEasVoa5ms6DwQZhaX6aNqW9ocgBcjF2eFANp9d1wZ2WbtTwEdk2WeDkzEuhDeAF",
  "key8": "4rkh1Hhdxdytk4GpQrcJRBCZgrHvmZNr8oRLeTrpEhsiNUchgboKqvoxtkqGhGHUBfC5yUSYjnBK3sq5yU9KhPW3",
  "key9": "4c8t851HnuWpXv1kJ7E4FgHH1CKE6Y1n4a8GumfJMCHqMazydwfGPZf5YRHZeVfagR3wnsv9qfa32k3739iGq6Ea",
  "key10": "3DNBSokLx5XF5Yi5BS5bAVF2Kh4rrBcvf5KN435i56DurLP1jNkAAQUXBYybzWSDJZvPuEpwGkGFVGL779E6nK5o",
  "key11": "eobeh9rT1dwUN8uPp5B5LaDg2hEtErtFEi9y6rYydM2iQbDhroRwbAzH1ijTfZLo17JaJTZa8BqVMPirHjcGe8S",
  "key12": "2WQaFCBoAGwuEZwbjaVnhL9Qp3YSVMrZwtP9UHjAEdRWxRzGUKkyZDDSRMWiVYCzJc4L1xNCwGgtEM515FTZFraf",
  "key13": "9giwY1GCz7w9wmB81TtJVfAcR6duYdT84gg4oqUTV4H2gQuZFcAfBBeE4ybBENHRv8oV4GQxguiimpPL7T2tjhB",
  "key14": "5bNd3eBvYXqEszH6Nv2DgP2irMZmY1qXj6SC7ZCJUeKUfnDkCAznULQ9hKDMqhUFCyqqdiHJ1fPVECurtcCBspu4",
  "key15": "2oZ6cBPqiUWvHMGg7UMjDmQYU2RF4HhUFvR8VjrFA5eisU7r1ShSzk2ReZFfpq172ks3pvQp6aVSdjMA1P1mcJZn",
  "key16": "3f9TQhVxLU5cWRVRzgrCycVPmrK43ftLNp2oXuVcgFSqygVYviY4tma6dPDAXnZ3Aha9GooJ8YHgXvZMSbEwQEwx",
  "key17": "4pX5WYkTAf3YGPjEKKnyZcJ9UHhCughBQcXX5uBxipb7ZnH5JrMr39khrYBuArTiHvqkHp1GfhMshvFH1xTT111c",
  "key18": "rdnH3YkZvQL3S6xunv2JmhJgcT63CoQ19T13zzNAwbeubG5D6vgYp4WqqaU2Su3hbGBmD47gm6sFgjyKWr7sj5M",
  "key19": "5Paym5KRjgKNhvBc2pQf5RXV4KNYuhgEQg2pAEXxtmrcf3vfC4hF8rs8iJ2UVfqiXU43rX7V5HQWmorWq2MFXGeE",
  "key20": "2VDVMQu3UDp4wGQY8WbwHNBpALfLjiKqQ2xbYr2a624T1tum5ecAUAdByhoxa6UijaGnXE41WP5tDKbWR7iDuAp9",
  "key21": "5bVQUBe72tcPe7JPLcYGTPyN4W4Je9jA7jHdo8R2dsVRxLceZ2VEE9BXUMdoEAk58mFvYb17zLbKySh3euuMqie1",
  "key22": "4uUvDte8voqsw4r7HENMpG6Xv7GmWsyVMcU8WwQ56Nqzhi3hVnUTEuNDckgsS6bgixXKjXMsLukRsRLJC1zCLvpp",
  "key23": "4fnrqHdhKJeh3vbQqScZq368scLLHChgbzmeJyKskhUXp8TY9TsK2Vq9vsJ3EVWYVS6WMx8R6wiGsDfHUqKYTVyB",
  "key24": "3QRMm59HR6jzKU26rwvJTtXhDxErLUpBCyvVBSGBSveMjKtsNanbFzJkPeMrebbUFD4g4PuGkG1hnhQeVr59kyWU",
  "key25": "4biWjXPhw2SjrjVVMTRxHaYiAqoeRZNRm8Yho3aSyajpoEHCjNPR8fk77A2htj6445nNxmrS9tvqbPAhJ9GAJ5jj",
  "key26": "3puH5F7jhQp8Axmi896PYWphzjX4HZe2JwUev7xXPfMRjYYhp7WhCFsb4MqEUa2mMmoc7Qqg2fWYM2vtv2qs7Gcn",
  "key27": "n89aFTs4K5mct7P74Trd9Ww6SHGXbmxEVhLPYDXax1zhRgzDBMgaS1d7L2QCTJtgwFaXK1RdKdKjoAmqtEPbn6N",
  "key28": "xxidEMZFGtbaj6uidFQM3xQ2uNvNMmCyptMPBNbQA1mhpY3X96JJeVQoNqWwahXuKfVVpGWSB8Ga78MmixiXq2A",
  "key29": "3284rF9ohWRQ8oZtJcqJRfMjNJQqGZj428xhBagQTZUZJxLcdHiSSLLJKFo43VKuEhw7rwYEqtYeaP1NLTRD3eLx",
  "key30": "52D4bEYc1cTTKjp3Y3EDhMYAs8iYZXZjnrTuRQK6SkGLpbwYGvejyyqmqH84AXVFdp1S3ePTgdQGvjsex5ApSsrU"
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
