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
    "2xvtykZrgEwoFt8BpwVRxmozaWb42XYuF4VhuLAuHvBPXhW11fh6gZRvHvkK6gqqz4zdJJ59KVCD3CHJescb3bZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cnrLPXwfoyAbKk1mmsMSv2r2CxTaHxfPeJ2FUGF5nu9sDix9kHDQXG2XnkPSfPn7uohFVskawjJq7JReyYHM2fS",
  "key1": "5ka56sBJGFMpDVUYW1fQguegLAD46xPUkX28Xj2qVVb8cjRVHjYxjGt7ynX1bmRz2d1Xrnd4EiDcymnpczmzCGKn",
  "key2": "2ib7x1KK7GUy92Gc8GMzdRPjwrMcatvxjo1Z7KGsLoMg2rUy7m5vvyS2FRMHZKySApC8xcsx3fDmLtNiA17gz88m",
  "key3": "3esmsERBYR8AX1CShZbWzU4dUVXrJHRLyBjhq7EwxWFY5r6kFj2vN1PeCXaE4o7SArTwphg1iMSG3yF263CrMFHU",
  "key4": "5WDF2HbC6CH2FdJCk1U7VdWQTLAJ1b1j8fHokuXBPmttp6PwcxhZTixkzow4BGbWBMcsEYRuxuoy9dgPUACatMDp",
  "key5": "4V3VUMRwk1agFAwj5QELzznf4sNi6Wv1dF1T7aJknepo1Ku5jLB3J9caJqzKQwTs6tcfdY8UNQdW4MpG9p6jE5Ms",
  "key6": "2b7wV7oNvApqGF5w8dqhptZxyUc61FruF5vCLEYgfRbHzotLFHPZv7Jf14NX15teX1fKpTMVNzH4fdygKiCVuY8G",
  "key7": "5TFBPHMmn2q4sLFQihEvntRHTk3DsAzugR7ZSUDNH96BVKBT5f7BGRVD2CkD4Rtp5VM9a2DNrdpGeDW7nQzwdR4",
  "key8": "3SzkvzL27FKD44Sy7eAr5FEzhznPW1JvMEs1Btb4cchpJmjBogKFwT8SjvPYQ4JJwCD1vPeCLeJi5Kn25i778a8B",
  "key9": "46f1Gifj5q8q1SSjNtthKCRrPeb8iDJr7wEvWSN1srsvZ9oBF65AKCPrqj7qzjsDtoHrFrBwpTfkrDdCfUv6HtEY",
  "key10": "G3SQ9Qx34kzfDj1otCiERtYDwG16LJzmriMCWxXiidJDJY8c2jW17FQazNmn6kafwYZAKMdAJRdqXTBW4whBqbW",
  "key11": "4qghwGauJzWsHaF6Znf75qKcWKbJwC8fv2FMG3K6HBqV7betHXrtDQwqo1AwJroQBJLqUKQRn4kFhAEeS9VuJVeL",
  "key12": "5nFr7CyYs1dT8TJNbswr1vAsFubCHYExhdD52u336328jFi4tGUi87Png91LYwtYFnEsaZwvNLjYjTNH3DoFWt6X",
  "key13": "3xbwAtHNo3pfshHEiqvLd527KvaXTazmKxfKsZU7T99GrCJtTgF2BRMfQkL5FzsZ6ki656GJa83hGyY7qRqAq6U9",
  "key14": "5A2SU31jddMBwBHcqK5aCkLvaYTPeUV4JfBTHkoBGgPA4paZfPF4MFa4Ru4HQM2WA1kCDPsVyejBGCZPvPpqSEGc",
  "key15": "35ehFp2yHsVL3dFx6GtquLWL4m69jS2tYQM5ZJzKuTkPGvdxMueyi13uhpRwCmyUxc9VebhN5BN3ogWTRjZ8cJGe",
  "key16": "3fAigEqKuCEoQbaXaKP5EDUuBkwX5HWV2rh7nuALaWREgcQodivg75KcpqYYMqRV4yugbVVmDyZGmFnkyaKbrWty",
  "key17": "4rr2PR7Npes3UybTMJ4SoxiRcrV6i9CvaW9qUMUb385hzN3qgVXpTdNKvaCnzeBA97KrUwEPYPN8n6b97iqFYGie",
  "key18": "4YHqN1GLgB3FVNDptTfYzzbYKGgugKDfDxhNGVH7boF1FH5qCCdNosfe4htzbsPEvUmMH14bWVW4CUaVmf8oqWZv",
  "key19": "3kcSdcdRg2zajpP76wGXZ2vrZCaBaNpwqdDhcfHXCWruL78QZpCJ4cj76XipikMApX88Phnqj2H7UnZW2YFyNmSB",
  "key20": "2dSeEghU8s3wVrZzUi1ZKNvCdvYs8hjXujEiUr3rdVWA5DZkA3xxwS48KTaTTgzGfBLMsUqxJtFRyQkHJZEUuqJB",
  "key21": "3p5JUdHouashfXkZX2UkzvvUQ6m93bVh1ZKx384WVH9Ga7omPXw5v9qgdmhjjEg1yTko8XSLS13i4gXFEUAtcBNN",
  "key22": "QoHwwNEKJgYz3nhQFftT2FfHEKULKpafDz1piXFs6go5rw9HrbuJR1vhr8qbHmTdHUWsqkA8Tfk59RzHDyNWheS",
  "key23": "4b5NonhDsu3jGJb32ZMfJSAFqoviekcdx1NUuzxtr9VVcU7ocS9dV1hgJTwsSBTqhZmXTQZ6FACErTG98DL165zJ",
  "key24": "4NfRXGGahy71pSQf85Y1tp5k5aik6D3wgc1zKquvwN5FGrizVm1zhzoVUmGtiSbXy9L1ksLP9pCFFDFaLbHi4gNX",
  "key25": "zYwDbaGGPsa3qwusf1WHejJ4VH3ZnPQUDuQWZza9Df8ETU5cevy5EHQ5z7LPy5KsPWME7yLojDNT98C7qMjnUf4"
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
