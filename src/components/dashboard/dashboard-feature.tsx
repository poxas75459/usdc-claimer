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
    "etktdjYnz1PBNH2TC4gmUST5dcqj46j5Uiozo3FkL2TmSTYHhjMnh4SqTWsSNAAbWCFyy81LhHq9fsa5SyXujRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WE3woJCYirgYVe5kYqMugvZWXSCyuFawJQVFZaqaKDXrNJp5PNuRqE8PH62W5HCpohm7UtiuzzkXQZpp2NcAJTh",
  "key1": "4nopjuqTp3Wr5LCQiU8jesVJfqQVwWim8dTFUWCv9mZ2A4fgnzXNZ6rYSsf9cMKpAfK916fER1mxU7wppW2aN74w",
  "key2": "2Y6cFvvNuGQAmjRHvxSZFxgcMLv2cwxn3NJWZzSCTcWdq4e84KuBB5TchCYpg1H36tpPn1XYmkDaehfcJRjuaur7",
  "key3": "9TYHQx2DsJ7wzJX5qdCfS3ty2mw1cs8igGG9qAW2x1FFFJbyTnQEQut9rDoakpRcMn31KZQgUwJ5yxLPsgM5te5",
  "key4": "dfGTfXCBGsh3bQJNehURSwEFZ7h7BX8TLHPCZGV2d2Q6Jci3zo7GKU9pdst7h13ai19djDobbaNqsvo2DGarPHa",
  "key5": "6VXpZdPAaVp4FX4NFJfqZomBccsaNMCKSd5bCiKEk9U8EsFM3nGrCQboTBxpD6DnVhHHhVVqCf3mCgPvRWN7k8H",
  "key6": "2yXEa8TirJCsxHdZJWNWkyfaCbie9rX5Psyze1o3PspoCU4vYvDc7Erq4mnMxpjknpxr64kJQYUgm7f1se6hdt3e",
  "key7": "4py9yPHWxzzJ74Yo9UrsF8pG645KWh47wbpXpCZwA6BHs8isfqx8imS8ye18W9ziQjekAfwSzo5rwttNywWkCJs3",
  "key8": "4P2S6x4oX5UsZ8AT8trRQpX15YZfs8nLHZ4iKgVBqno1Rgr8NyBFTMUfeFNSgXSEwx5U8gpo5KDL4QFXi4XCscLY",
  "key9": "2vacDZfK7iSJKugfKpr1NdVPkSY2YtzrDQM9xuZrwZtZYREmjkzy2mnnvwQtoYFHTmcxe9XeK6c1PBX5yjBppdiY",
  "key10": "2mWNs1A9v2f7sHmHWKTgE9gKpf4AcN1hexeoeHeCtsjMsbrZ1zHZWMfF3nPC9ZPSPcuxbFoSprt4aAMaN8Wr3gFE",
  "key11": "5GyUuCHbLfQo4a8VdL7uiin8vo56CANQgYHrAHNu2rAqMqZHshd5HZRkCXHtQ5qrWLdVV2aWThAJxsA6YyQkprhQ",
  "key12": "2a5rCV3Q9XYMsCXS4REwtZ7JTbQsJymERCGK6bcfS7dLah8maHVZmELgq71ydv5rNJATgXpeTfKpU4L8h8xQho4f",
  "key13": "4pGVda3DaW4U1zffDB3Y1KyABXpAZjR5hhrt3qvy8GSFsSpuwuFBeb9ATAXz19fjGXPwLPZF6jnAX34tWSewoSLp",
  "key14": "XNvZEiXYknzxbgN79pa9SHzCntfWuuYE45Q6VwkSGcjJw5u6oZ7bDNGEiVPbCYmmXaZ9MmKb8C3HGJG1YJdMfcJ",
  "key15": "5doenNBjq92KorYG7eSaGMmw9kvwbEhpqvbvNCfAnBdTBsmENXAWJktZSUrzKmBUTHeamVsDPdkJWsjCGm2TH4u4",
  "key16": "yWCa8DDJq7b9N1i5bdJFvh8s5giHRNDbQ3PERyqbve5HHkyZVVTmHSMy7VxrJRJySGnUjkC888pksvuMNb61jw8",
  "key17": "56y1tLvYhXvgwSRDJoEUKUJ55knHHXEf1igExujEoRi396wzYJNnpXE3ekCMhG8zZEigBtDYGx33NSoT77KFe2B4",
  "key18": "KX8Spma8G6teNa5HJdavoR58qRBvR9idahX9NSms4XpSGnVTLL6hFarUZpM6L3DF1VxtDFWbaXdsTGCvWAZmtUK",
  "key19": "4Tbr8HCSpCNyRt44sj4aRipm95Auhf5KpbGN9ctgSpGNv84Vg7RkEUeRrrHoKD5V2xLkjvorXcWBgA7jGDZ7Ksv3",
  "key20": "4r6xBayQ2ZGvXu3zaov1afWnsQB8STSnCunKxBwZpEcjebh69eUebmgjPHwBPghwvSDrEYF2vnnyYhUwjw5Bh6Jj",
  "key21": "2S8XhftTMajqSvA8JyRoHkAC4LQNDMAFWM3MjRWFdNnA116oQfkarBCFwALusc9Hcz1xASadTrPZQXMUprX8bdhE",
  "key22": "5TJmDNrrdX9Qw2GZFktgM5PyKfpApCz1JDaCnjGyEnBb8NeCsvSJ3QuSNRqXY3DLVXHs3sk6N46h3RFg3MQnoqE1",
  "key23": "4nYmUFTcgcgfCt5wc81QgRc6Z6gCdHxFTENiARWKeYgn5fVDkQhHs8zJmbHkTcL6k8C2vxSSS5gLZCdWsstmjtsA",
  "key24": "HT3iP3Xn4ufpBYo9S4qJm8T38RFKA2wfbwpvqrMCtUpDTeEvavZzS3HJyim6tE2exH7UD5qWKqr7pNisxRq183i",
  "key25": "5My5S91L63x4Kh9qFY8Urc8jPQ1Txg6ARpwcxTEEUuqdnMFjKqyxuu6Jt9QWeftV12v11HY3jkqfmL3QxoFM4GK9",
  "key26": "KF9KZPXYSpwxEDFknseNmhW6MHN28imgqJmsrEnCr1Sh9gnGFcx2CHCxqchKM5DKBMjQqMvyAWdxxRCdVLTJ4pX",
  "key27": "5hqPhQtkiU7qxNXLGxTNGSAkLsqfCYVTGTq8iEtj4ThcagxrbSHHtmGQELoPzmBJtbQ3pKKtx7QGmhhZv4yke6BF",
  "key28": "5MvJ8Uh5PvjbaKVfXiiKw6QKLkSfG8oj4ccERMnMvVXe7Ha2dLRVnk1Rh6ySLcWhLVr1Kb6D3P9KBZFpoNzQUQXU",
  "key29": "4xip1Epcu8wGcW41VmQyKwnCqDR1GwAaCPNCQHXQSAWjsWaQVUArGTP5FNX2LJ7CuvwhsKujjbaVvM5ZNM9ZPDT9"
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
