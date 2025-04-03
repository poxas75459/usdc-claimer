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
    "2Cyfs7eaeC1NkSxAKjjRkDxwvB7ZSzXqapnjGDbYvUvUByGJUvmU9TG3SvfBpicqU2Pe7B2tf3AWesKAQGywJtpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o7ciyAy9QSVwXVFTog3FsryiQF4sFeY9Lnuf25we1L7M4SDQN6wJ2jPCv1EBzJGfDB7Qb7KiN4oHkYuuGJjjkCu",
  "key1": "L8WdrBwq2TW3GcoKDvAAaK1uR3NR9QbkGzgmCW9wxWFnjP4L3y8CazAJNSSSrVpXbTxchCQyH9MHEHfMx8jYs3f",
  "key2": "2uyq6v3fQnPtd5EqEm9Y2zBTHe8cMzgXULuXAJb4txntRGscv4kNjxYtEGpvTCdPnBrurw9v3sYALLELctH5s4hV",
  "key3": "5pQggVuY7x4o8SFUAM3tY1LgkUZGdk6ZmzhULiieN4wqLP7yqhN6qrHQ8KfxRUXL4AsbWjns9VK1YEg2y9NBsJd6",
  "key4": "5ewXEJ7DQzrej95eomzM9sA147GCKX73AauRRepNYX3LQNrXyPVo5PdwmegKgHn1qQBimXdvyeu1beVTwpQWiquK",
  "key5": "5PvSyb4a91iVzSABMwxCjxKCZXczEu2DVPwFj1Ys4SiaN3kfB6RvQBuU13W8Kjmcs2vMjaDq41mTvsj3oUCWmVko",
  "key6": "4XcsAykDQspXAwdg2j9TYfGTEMRX5hyU8JPdy33cAaD2xr6czgdGNKjVg8AM5vke48g57taSPPrQF7SSEKN5pfii",
  "key7": "m4ndQcL3zLUJz8QLZ7TnhJPZRmbhQqk26ZJSdgSYonBwA2q8wAevMSXFcDbSEY3bmTiN552n5c15TcEtWKNfUd1",
  "key8": "3te2NQhqDXJUtpVkAeBGhrMfonKECMRVPSmEuBbs9JcXCbqdM1wsy2JLrug73tasAova8jSgNfMoBtCt1LEgwDD7",
  "key9": "363fwt5t6puVgvbGMfXkn6VG8rovmtH2jr5YZtahwGrbMDZUsziMf91dN1Gd3proTL7wmvNDFLYMybZom1dBnbBZ",
  "key10": "5iJ4NmFb4HiqyXeHqS3tmRCwJLdoLJCD5fBn14xT5SFmt6JuSM5Vqv7xNy6VFg4S4YRPwcP8WFMocytAnsZVVjx4",
  "key11": "2JcqLjXj54e1uFsCg511USpHYL4hrSD2odvzM4j75nHHtKAVt7vkHzvCPkHKKWZbgbz7XoznkHusgtozxzu6DJKx",
  "key12": "2AcaxkqFiE9tRBhEMsjLkvN39ToqPEc7Nk28CtFU5bdzgvtVd2r7Uq9D1arkD8EgPPNPbtrDbatzzNzdKNGXkQLi",
  "key13": "2n2wfz1kdKf5egohgg8jHZEQh3ExKEgte95yBHMJ5VycJADBaggrBhyTddP9dn4KBei5Uc7xiSbkW65bFYreR5EZ",
  "key14": "4cenWmu36DhCwfgCHgxjXXgYATAmboKyWzj14yNCcjZBbgFAom4a8iSKk4aEhbvNQtdSyiFhe4oyAZgap9cESYqJ",
  "key15": "wM8QUPvsHfJ6sJQDkzkzk2VNqwoyC8GWBqCTqS12oMvVBeWSf3VRWgkfBftM2yaeXpq5EpEFMvmeHN2eryr8oMh",
  "key16": "2t6dd8njky66e6qm4743NHsrcAgHEx1kQj2D7oBQ3F1epHE7LSmtDYiDsF1enJXLeaPWtTzsskou44PuEiz1NzpP",
  "key17": "2WHh7D2rKH7ZagYh4hh8TY4cVsAzfvtomBoRmJdnfxbUL59rUVAon56H4ed8NPy4fMBX6rYDDmZvcvCJDkfrjQmg",
  "key18": "64C9ACmVZvb2eQ9rC2opfdTb9c1p7JhJUVkGUnR8jYrWMRmvFbg6zQzuJpi2wJtTzFjnjUpCWfiEruKTEgG4peNp",
  "key19": "3nBtwc4VXXC8MvM7kPi2TPPYaNDBaifAco6KdjKvr2AcQszRPzsekRu25VmYDVjv3zc1AfV9ikrRe6yf5VTYknMu",
  "key20": "viZwqK3pK9XUXwViS5aBQS8VHmfGw8QcVs26CVQda8pnaWh1bHcDKoet3gSzkoa9DhxPtggNd3KnwQNBZ4mBpeW",
  "key21": "5GMEx86XcdDTd1PKRC42PNCAQX5HK6FHGea3rdaEDfVLUPHLgbizyYcsmMbRAL5XjFVpoMVNMunXupXN8V9Xsgef",
  "key22": "BFoH857ggsFRtzbf6hCZR7z69y41V86oJdqrMcJixVt4LmrE42vteSBR8rNRnecoa9ohvYJ4eAUaA4uiXBWKhAu",
  "key23": "3F4oaocvnuyFCFwXzgPZMgVS5heCVMvaXYagZ8bB6jkTAybJqo4mFswSTCKkSjQj3sz2TzJQ7dvXAzknkHPq3CnT",
  "key24": "EFA8UjxchpkoSBSftAC3yp9qU2sSRG1uEeGEs7HQUE98czyob4fRKMPmKG2uF6NWAH1dU5aTGS7aLaVrZWGr5n4",
  "key25": "3zFwjVschZuSjMWVaoSxFYUdSzaDDsm6UUqQuP1vP8eVbuaDD124HJVuesUeVy6vvWHJdmc92BpuoSwN9gevKhWb",
  "key26": "2v1h2Cy7Ye1gTMjnPX6WSJa6JQAHmGNKKhjE9AnDdUv79UCDA2bqVtLPQhBg5pt7tWjLUgxbZsyS9mp2aj8mRpbU"
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
