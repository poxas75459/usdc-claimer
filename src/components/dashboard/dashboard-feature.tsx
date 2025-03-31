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
    "LZV7tPizmcnrt2WU3aqJUUdyeJh82vHtF9pPjHAAWSvif1v2zWwxpEmHz1NhoFcJq3ecuxee71d1N9KPykD8cnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xUpztRkxd5PSPFYaihSGgDYoxXxxxw5eBRndZfATFSgtMRrg61aLRqjxx9Nx5nKChxYThyjZcpCR7inRcRAx4E5",
  "key1": "4tL8ZJzjAeng685TEhUTkesSqHhkCpHSArHZkR7siq9w6BTCpYJpTezPucwphC4QSw44tBcdR99VdWzbexSqn4xN",
  "key2": "smoQwiYrRr4YneBj3Gucnidat4csRVqZKCrmKvKwajMCcZSZZgcFfY431tH8mHk2Ceh53JtxhF3tRAjUy1zWBpZ",
  "key3": "vDd3jnFuHjVHrzTEYf5Kp6g6AAriscn3MVMR8CN2zYpmebucewADFaVL2sUXkVPGYWw8zhPava7oR3u4qJnNCm2",
  "key4": "3eBwdd9TvY23dGBeQdoxzYNbGhSs4HAxwSR1GTKZJNjQ63LBe35j76Q9PExpwEC3D7TeJaQGvreVrJ1sW14QqAhp",
  "key5": "iGueAZvbUGu9kzy22b35FvEa9j7zoZNeRVw3D7aGSDbEouxKssMAaZVkujMtvgFjRPiM7sdxU11WgACUcqXEfh1",
  "key6": "3tgzJZeKeEd4faJDdqXpgb2DtYWUeZb84jhBzMgnFj2UyRoAEC8imPPwXPhGehsEFPPuSLEkv4XsUo6xbLZHuN4T",
  "key7": "5rsJ8Ei2wjD91umJfrGczaW2KWXBfnyNf8D6ddNtasb65s7cBrQvaGo3YnvEaVm9U74MGgh3N5iJN3DkiAf9DUsQ",
  "key8": "4pAWGuayexuFo4QjmyzUQ3vw7dJmvBVSNbiQv3cdxPk54YnmoDKQay4PKKcv1vZGuoaTA2Q5rWwubSah7bg8rSCu",
  "key9": "yPyX6y6wAcUBXkUaTNtgXFBWQDgfQbk9b2gVRKmbZBfGY7u3YAN45TCF83uFbwq8hwgjpwfo4P5YmZU5f1kfTHR",
  "key10": "QBdkE6ebBEtaue28KcDUjhtfZhshvzXbGvF3SFavoA8hyVTA6yQVmguJyfC39kzUUB3PVkL2WBB2u11vE9orMNW",
  "key11": "52RbignqJG7yt341Djs3MKzgWbay4DcbMRAogQEvHeUMCiuMqAtpRd8XU1iAf6ti9yz7QpS46aCbaVaxkXWJ2M1E",
  "key12": "JQ9en5eyjsHCAvgsLu7oJhvBNKUKZ7sF6293KyHc9DAxMjAyxMbJojYmaEPWtQoiNovjbcipb9k2m6LiZSnGxHE",
  "key13": "4Cneq8EGvZHV8W8SKwANVzoz93wNdWR1x6jhCzBes7G7RY3BUM3ZCuJPWD3LYq32VqEi7u63dokntB2LUUwzE2z6",
  "key14": "nUS6FGF71yEgjhP5FavbtNmxXaTV59WQYQGv9ZaRTAc2M7nCdkqA1coRoTS2BTfoKuhYEFCkcuV8hKkV2frJiD1",
  "key15": "mWdZ7EU4tPDPuYgj6eoMViJYxf1csFPge391pUrfSwrkoFRJLT1LMGMvEaQNr8RF5hwfRTEGsD1J4BPeW8HznDW",
  "key16": "4vLESJcSXfxAz3fBAfrGQDpmPf1YLQfYKpEQEiWrEbTZB44Rzs3Ray1RzjPfKpTiBVaFLgPyuD2nod57E8jxtgBc",
  "key17": "zKDweUhKxKGDbUBSnrx7cy1y72SDvZiCX3yxMsiuYy8GiVpwkoXkZ1c9xGHss8bUZQaLsppfSYio4CX1zZyibFw",
  "key18": "2nMXhBU36AcprEDvnaJB6NARDNDp1aUCBhuYDLXjbmf9iKAwYh4L4oEeSVBMrSbdEnNDHPeN9FNcRFsewXVVZcX9",
  "key19": "2fjSnKfq3LUzNJTc2ihXyDkK81Mo1zVF8gG5pjRJ7M4kWA6np2mzd9Qr6xq2er6H3RdH6hmAhMR5H8kf2H5zdCsM",
  "key20": "3WDByDVXQNStfCjXbFXqiKSyxg1rXQwGagmP9NP4gNRxv43ivBB15uBVxVr8j46t8BkFdS3R4J4G8mTVBMGfLT6v",
  "key21": "Xp8mUa5PMtEyLDxTjbowrAurQEZa2JqHZ64ghRJvW6F5D5C5JhYUxVTem6EnkHVouM6A9UxyBGCLGfqCNUfpeAY",
  "key22": "FCTz2YbHkCatXiWAsYG6YSj8RtyruzLiqW2STAtivBNUwBrFtwASFQHZwqK2FiPR6vy7ioAXz1r5FDbHYKWF4Em",
  "key23": "3sc8SagYNixNa3pDW9D327A2ogJwhwt4NheMyPcfxmvb21qu1SM55axmhpiqLYr6RRLKz6iPdCYFWESVcpRxP1pH",
  "key24": "2MCQuJFQ1XxYrzpPAnZtnMs9Cfw9ma2gcVJpqjFZHiCkJCbBU3HReXCaDazx2AvnDBeaRKwTdQ4oz4poUiANw6V1",
  "key25": "3meym99Y3aV2grfJ8Dz4hpmazNA8EUoeLCwWTsJvqgHpyDuwUpM8qwcJ26wt3UMDyRZTf13SWgcWF75m4VENyNPE",
  "key26": "4GKB8wzn35jNb97bPaXb2sLjfVEnJvhgoq6YrKWBkgEugrY2gPv1t28WiMAsR77rFbDvXFZZmqSmp5ecdZCBSUes",
  "key27": "39aUWDZ69GsesRL63e1bFExxcwTbfiFPxWHStZgyyBQbkorM6oB3uZtLr9kdcDTPQ4Vsu21NfcL3f3X6zv6fLBSB",
  "key28": "4nmaUgWEwXuPUpTQqEa11veL5sUw6evstwctKuCq6dXpckcyneJQoAWpvJtMLrTvjN2k7eytBz5d5avxS8QXXEnM",
  "key29": "5QEPDW8kTCfpqTXtcv4eqBVC5bQd2vPduHS3bnJwnBJFsNymCU6jWMkV4rTEQdw5eKaLErtTJz5vaVc74Ky4G4U",
  "key30": "5VZVWh7iC4UEAJKPCCJU3Uo373LRnNP158rRjxCr71qREhaZfZw2P62eTxEKoRwGQH7jAEeKVXctWBR6AGMKRtcJ"
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
