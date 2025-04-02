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
    "BrBxNUD8JvZLpVLizmMMxhTdeWyV5FG4Bt1HXwe649LXWn79cNeyV3TAj5W2yqWpeXLpFqrUzv3Ce7KoDHTPZnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33URBw4jTvvPBjM4QJdzUptAz7cfXP7dMY16BHmBMmvs9ndWkQV4aNFwMbQyBnQyk5qht11mgXLskeyVRMD1orht",
  "key1": "3TX1Dv3XVvpZZShq5HRa5qwBBCeja2M3TMGGB5LwVzP2gG45WajKi4tjdVJppntFAPombQ3aFhUquPaW3TYEwWRA",
  "key2": "5H72XbXgqMFBmTphqaUZaZEhKmDPYZRV2eCBSFa8vhvEjcRuHRTSoqJfQDTrrMYr8V9vuxtmdHPSfzGkHd42GQaU",
  "key3": "5HsvYVfKb1wnmy7fTZjgTzE7TN8pL4UzhcjXs6bUBh45UurbKMwFFaHEMKG73qzeWPtHzfjo9VgTLGKDxRhFKPjS",
  "key4": "2KBxYrctnMkNYPY6nZEBTzN1Dzm9WmRrw9yJHYJY753uCkKyzuL1kCffYnRWtcvCdgv5tuLoHWeM5SvmKX1rAcnk",
  "key5": "pddZxQFbup3ZKKMwyjCaZFZyvDxR7BJkb2CXBsfJPuUtpmEMnyUhbxDeREji4ae1ASQikcVP2MJ9mop1RQoqawt",
  "key6": "2YyDYnPttLBGkkw1t2bJLVYdMZKBKTDeDhdVVygA39pQp9Y4oEyfCk4GRN3ngNLv92w2pDbnTtq2cZKk5vZweBfk",
  "key7": "129BqJgg8DBpHaKxsRzeJmZ7LsTvkCK8QAGrXufBUu5r7CvYPwD6q4GUpd8vNoHZN1NqPia3pDs6VyEQHk4QDH22",
  "key8": "FxyQqWuouJx9HzZZ1eSy3VWvjPvMSN9UG28HUZBQX3ZqQsj7LmDEPnBo8HzDHw5kdnXrswvi6M76zXP6xTsahxG",
  "key9": "3oRZhtWarLFo9RAdyAmarRn6YEXU3cBenLVd7bWa1XpkCFavnKuzCyoQ9XuGNfNRn2AqAgVBvUqWC5SB1EvcBanu",
  "key10": "5X3riBj4jccek7GP7fG6Mi8NEPLn8DU6TMs5hg7GnXW4JAeqRvqCa4SiwG1ZNMm3o5cmPnHP8WnQbvhibfHdQ8Pz",
  "key11": "LKMbUgN3AQRoaAiS5esFLpwvnBzzXuDbXeArNSxZ84mBoKfRckor8TjMq2Z6she3PawGbDz6oLpSER5fm9NoZ2k",
  "key12": "5Cw6enBJt4mh5yUVbiHfsQujSFeYwi92hGDpfgRmKLBzbkmbd2pRDm6C4cV8L1vTmDAkbsh2S2ygKawbJoQodEiA",
  "key13": "gMjAGhXaFrhvt7QMk3vqi73vLK98f6KXVAy5D5FjTgT1japhbwGURYh2FwjWn6QDyNPygXz9L3Gd7RaQmjVKEYq",
  "key14": "4fb6tksuZ2Gnpj7Vi9mR8TSV4CJAQrP7KEQkEAqaFFzAbXwEpbRUuQwRkQna5PkhWyYvU3XaiPGLXBbAmvaZwcmD",
  "key15": "2csXJZRrPB6goqtzS3uAU63QTqkphogmnD415DJEsfGG4ZWGnMevC1jRMard7553DL6MQupKr15uQBDbszFzhtjn",
  "key16": "34hcZd74MpFkHUb27FxvwErXK9Yx2133eMkoaitdko4eFuh8wM38qYzVvWuZVMWWcV46DS5dkefW3z5357WxCftD",
  "key17": "4yEPDW4YavVUBjFKnjoTbhPRWQAGEs3Dvixdn2xVNxn4YVoeWBZGxqCYsawHUMsqJjB1yHRHLE9zGoYLV1i1ScMa",
  "key18": "5nNHQ6cPZgR2UrJXcimzxxwetgSoTUW4K2ZoQfvXnE1yVhFygbrwnZc7yiBWGJQT6KNgoucH9o16WWi6LsvmBcmk",
  "key19": "5uaYfXbKSujvk1NVJGsxDzZ4KLVbTSmpoSyvjpfeontnfqynGKtrtAvAW1CSCU5vyBSfkwQ95FRx6ksYGYbyTqa9",
  "key20": "5jZQHS5YqoyjkmBx7RQte4mVbG5dVsPMaLoK7P2fo4uoVyjhF6GU5AhmHCN33TvXMaDSPMf6Qc814QFbJqpduAoS",
  "key21": "4ZpWyZmiXGnUHjTZ3Up7wZkdynsVNMPuZz4hhFjqhV99mUarVBHDEiAYs1nB4WYPvTyYLMspYYZ2M8NcB9pxp62H",
  "key22": "2PuMyvF72cv3Y3dcjpWFwPnNPXrmh91eK5SRuzDRSyDc3DGEhQRg1kp1jiBNxYye1sRcrewBaJ3h36FYP1kNLduy",
  "key23": "2gUje4DJVFkaquPwwe2XnXxY6iPAva5CaaZGENF1LDkUwu5pvut6VaTnmE7FEp1gEQALRXyEGRcgKsKYoepyR1Hc",
  "key24": "tZhhpumMCcHec8bCJQtokEzZVoxz79hjWnvqdJZXPtbcRXNdobvYdiyi8kVSu3mMDEu2EKbw7T2oHpC4FQLsBrC",
  "key25": "4woUr8qFoikZnN1wRrEj5F6mgUhuLVXq1eBmuc5joGvasZ5qBXMdHVdFMQF3K6ioyCyJfHE8TiP9hhJ4CRaJHApr",
  "key26": "3sRdygAZZNkrFWadbp4CWUcrpsbhjX4CMswbJqsP2Fw1AhVUmH4ywVXhrYMMwpvxWHGLrnKNGvRzEf4UQ9CkYysv"
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
