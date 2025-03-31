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
    "5gdN59eCH7RNVZ8oLq43NW7oTyPZmeRo5zFYw7xVRaffJiRgrRVzfXDT5Fh4bpwPqw3HqczN836k7AksRiZ1qTxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xp4KJYGDiCHnJdjWy37WygBmXoGEhPB625CFAENMdZCJ66DJRivR3spk2Vpy8k3pSjJkM1RWAerKtQTyjT1wn3u",
  "key1": "51SGpJcCrHJbYDpVH4iDr9nGtHDcfkDD5fDRMbr9XyaSg6wVhpKomgD6MC65ke9ZLMzg6SUbBa1XDFRaTvZF3Sx2",
  "key2": "2hvRn5L7aegHKQrn4kVmJpNpedCaN6ZYTwi7UsCNESeor8i33wWEffnhpVRQXaAGBpfdmjMRC7VkC8Vs1GtSDCbS",
  "key3": "22617T1hPqh1mAZKkphWwzEqEuqWMYmwTkyVYdDBvQcyQppeeU4PkW35QLvCq9BD4qbcEMKfhHQKBs1fTct3huYg",
  "key4": "5p4aX4sw4x7qXfKnWNBB8o1WgubYMcaUFMFgscKyYqTW6tMRyvFCTxnxgpxAAcGoUEoCHCkUvHX7oDYetZUZ8RMm",
  "key5": "5gGgvbbNfBUfrt2UCuNMrWfSbW9FRsdn6vMDwEcjsBWDWi6aG3aorAyXqrZEsbYRF5nMg2YEsEE5JHc3gzTqjU4R",
  "key6": "225pBYxYAdJsRV8JK4wrfnUA3Xu1ZYdXS7mSCEujpDG6PCiwvDvUy3G7fhe727ppFj4BnPkP22SqCcphdwnfj2Yh",
  "key7": "2JoUckcTHMm2Socr11YruTqBQpucQC3svoHL8JWjpBapmfpaeYZDSZqgzqoUMgepfeu4nA5zQLVuDgcVLmSfRroy",
  "key8": "25uJbsnf2wbnJrjyowGWym3AENws3tnvoYvhRFJT2vVAMMVgrvJott2XttgVpCLSRv96wdgMxLR2fB5PpRV41QEx",
  "key9": "gAm5ZHnAehShi1NB6LtSedyf3oHohJActD8wb1LByu4VdpZqGw9r76MTRVMuzezBwUWc4yBBWbZVaosFgQ6AEyo",
  "key10": "LKAnFMpuLK9gBMCNPZxtQuYMdwBMUCJWDMMdvKDzjifPcnLJcQb59coaeKEejLGHa8bZbbPz4MKxU3twyVqbJ3s",
  "key11": "4iGmPCRjB3jEpr71hATX48ZDCWycotySRgt8rAmLkviiJZjd6Xc9k7AM934RZN4xAhgZvXui1yHAWXy1ByYN2VmG",
  "key12": "4NncciUy6WVVxqgwD8vuQ9ZaCu2q8pwaA5cezHG1S8ub9k7dyNwMGpbTQ1W8HBoPXsQF7K3CnuWg1buVhUMK3vCv",
  "key13": "4rEUd58mHX5Y9HVpvFZtXT8bTi57YriYqMkVamiX1xHUFpf51nYBijEWnUDzYe3Qe1wdDjAXEVjsh6SxR1h2h1jB",
  "key14": "3aQ2gQQRqDS5mXcb3azkPvXFA35X2TnSDoFV14SRAxzMmmb6nqPGU6ezXEDrCmdabnPreGXjZRn73cuA6MfUqDJc",
  "key15": "3HwfRBK3Lbb6ufveAdVcSeYUTyyAxbLEGTj4UtteBhdcS7nngt5t5ffhPUFiVzUAhEGELWekxw1Y3inBYcRte6WP",
  "key16": "3DTfAU65BbZXeC6J3JjnbJzdGuFxxpfwHpct7v9u7vjRf2vEAEEbGKFAbn1B61TC2ExwfoaxPeHAUBmX7gkLMJPL",
  "key17": "iHJ6RN9RuFZapwjSpSFxW9w7W1BKeoc1zcmUmVwe4x1YcJPersH72SfS9MMv5aeLj4pDPqBdYkdSzy2jsGj6jFj",
  "key18": "62Z698cFMgKxsoQLp9rpa2LRW5t9BXuSTCit38CyyDZw6sVxXRmSSTWHwRDLJdasAmsnih9nS6Z7SoWugR8JCqwb",
  "key19": "5dVg9cPNquQCJFSmbQj1ipxqa4mznDZcKyrcBBLHdQRpo2RSNsg9W5yrDxxjyUxoDHTT3kUp7GYvCTphv1vjopyM",
  "key20": "2osB6QdG2EfxDx7ae5QqMpm4SrkA5Re5Sai9F6PRgoFS98Si5xUMrgSSh3xgHHpnscQFGS7CYb8gvfQNBFpvNL8Y",
  "key21": "5YtiTH9cJy7h3CLMLyNXYpLTZ1vaZGwXyL66Axai9tSi4ZCbBbsbwt6SZ4nBSajtDHcbQAjeaf1xUUXYSQ39oXUS",
  "key22": "26YvRD8mFP5BEA6ef1tW6DdBc5ecyJK7J84LD55jvShDVhxuRSLAY72rQimnLEZPcs6M48VxNrKh2e4xBYULn2zC",
  "key23": "3yVT6yY9ZrxC3HsNVMnxF3LzkDAvz8aGu38pmHghcaYU1BSdo1ZztdBmbQL8au4CB1dkoX9UBXub9zDG6JnsjCWm",
  "key24": "39gCNwtnWBMWZw1Sz3LRme1Vf5337idNYsouCQgSfgNGsMGJuvuGM3PF8WGryMh4jziw72Fngvq89gBXG3JcxFNf",
  "key25": "6kS5ruGYUXnx4Vdz7KqoZsN8KHha8gZysxdvFK8vEqfEP4r5u4ygdusDvD9ju4iXiJK13oqG1oMbvwKMhdbAUUH",
  "key26": "42jcUctXU5QbrYPRUSe4vEWMo4RNYCyfZbLeN5a7LMwS4dccvE8xtZuXoGGRd9vs2or9RCzM135tHYKCb6eYJuwS",
  "key27": "4p9fPkL6xFvJPapQtZnYkxjqRS2VbKFiP6JD4kx87QGr6K5pug43S1WiAQcr7358nCDoN1P8azRCT82NqM8XCmQw",
  "key28": "48RM1o8E1TtA1L19X2Apny36UKusrvtA967c8uqJDXNcHarwEz8q6eVVodvXGq83VLY3rnhgzffzS482RKFDQCT9",
  "key29": "67XVGYtRUr5SrJAi3pZaFK3ugwVLLQjrAXJ2GSfBJiBU9666PbepPpei8fCLFT2mFZziTP2XUAAzKro5hEG8mQgk",
  "key30": "5AEWm6cEtaKmAfs4gcGkuaD5t8Cpu79RV4QQv3EtjboXz7BZ4ktiXcUcbN6WZLwJNr5cgGTK93xLJwcVxrYwAGo2",
  "key31": "65pZ1sXWRSQbfE4zwRYyLgHoBDuU7vpPNdz3AwDGArTJiiFdj6QurCcdGkYE5RyTN7fZQ4mSxyefdoUFvCHCcxYj",
  "key32": "sZY87AJE6EuJ6EEzvvxzGEZJ5LPqShtM7pQC4r1mXK4E4XLzJk77sdL19khqAfFap2Xvmp1uG4gkWkvCg8FFmxz",
  "key33": "52wobwroThNHFfeyteBxHvn5iBikCFVkxs42qq8i15iJtJ8nBLDTe9vpZUUtNJPyxDXWEhAasVdcTPRGXPnxLWfA",
  "key34": "63Mi7N9W6zsB6LuLQNXUgAAts4SpAJGbZXU5ELrSuZKp8t6Cq7SCWjs52VUWLoo5j8s3EUHZUDkjb8zxQnc8bnX4",
  "key35": "5Uu5ETnPJiApuJtSH3VknbSG97DwA6sprRq1ADwheuBLjmQ5ggsQzp98cp2Rxujv6RiQo7a2cHW5ANgLeX5t9JSi",
  "key36": "4AtDz6qnKGDxujUtCRjDveqWcWzBZQJ5Ybv8SHmqQKn6zXV8pFAjtfDMC628VxZ1UMc2NCH4k3U4sz6Gkvf3NCcV",
  "key37": "35QzBtEJL1RoG2sq4CftKavj8XjUa8EF8o4V87BdwAmwrNXY6BRv5d9BSrXwR8zs785mbC3ccc3apF4yni5CD14P"
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
