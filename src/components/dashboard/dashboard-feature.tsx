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
    "4Cpu4SedLrFBYDR1jGsDkn3R6DquX6duTyWbSEygFpC2veQHJo4fWLB7dqF87s6cVcSFRuCyjyiSAUaNLwva7gNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39tQ4WW6ANTSZT3VFFWoQ5SZXL1GifqjQHmiZg9GQyZDWiBWqrBNBMjZMPEnM2CFUpHHpmqsqNMHvjR1W3mVf5NC",
  "key1": "5sxjeLjLkoij2n6FH6YBLS49nj7atBXpoQewcdMkKwTma2XMGL4uoZcPiQhLSWVEPnA1ZG8fnbW3N6chkfHnH8vs",
  "key2": "4GKBK9LMyczAS7xPUEwvs3R5EtiMj9LJo1n7ccUNXSN2kZ2NYxwoWZHt1nukmXpqdFqxRoFrJwn4mWAgBVUGcrf4",
  "key3": "4M13YmGb5o5NcVyehxw9XohLAUVUtrEhAaQCwhRykTpeMAZ4k8zMmUiJhdc647SfVxJ9YwcY7G4fiZmS2bx2FZV",
  "key4": "y4y9mEmMb8G9eiaMmpiTdRYyJpfQm3QXiP9j7R3XZaTuCaMpcb3iS8hp14dma1tqLr7gWqsx9UjPK7imFAoqDaj",
  "key5": "5pBrfjpdNAhwnHDT8W83Juczw1yUY76VtqJfhCi4b763YKP4Yaq9dhDbYUdHL4R8eNFUS4r4SG4p9f7DbmyKaaBJ",
  "key6": "2Ds9FS38zuUjm8gLoYCBGbPa8RjCf5Hqq3THUVKktViwZ9zyW1ArpGsmAaooYN9JftYqLp4nkCLsYkSqZi32G562",
  "key7": "297Jj415W82xWQ4mGrabbKiaa65YcSep2kqjHKwMHWHvnCZ7zquGWy8jMBXVfGSEmTaqaHirZrjQbC8acgofzhyM",
  "key8": "cPU5BENV864uzpVwidWHekCtQRiqqPjBhprBzRDgCQt8Bg8bm7zt62DrGZXKra1YVz6ypcg3PxCiXnzbZbdh9Go",
  "key9": "4ufV8Gq1J8tcLoH9bxoQtt7j1zrCVVrPsPHZDrwuTXu5n4EjPkG9cvGz9sFoWz5qtwLMsBgB6WfMk1iF7XRFnsxA",
  "key10": "25HUMb7euwkNTeeYsgzADEwkJbJK5Ju5UFEnAZDqod7Qvt7W6ZuVby17X4kBCucyYaBbhFkHjRDpqNDCtGdrVG6f",
  "key11": "5F49ywF4TeUkTiqyQjUjDQmqPSJ1vEpfvRbX2MG5Gujf42HexqSWrHf9kxzgzjLYKQKexzgAJ8hyy6gFEG2yjWGu",
  "key12": "2HEguoLz1gUwmeuWdu3wqLmMySGNBVYPcHpdvn6GriavvwBMzQgSdidCyZaiUxc1yFGTZ94fPoS9EmWVzhc2uGBP",
  "key13": "2pUYesAPoEP3bNiKEH7r4F3jUvvA2eHCk4Gam6MyVdkcFXN2UYjg6ALqrnhvMVxqe3dNjnVzZp94yLjEiPdpeJQW",
  "key14": "FJNGPADuXGimXfsZLFK5ikQ3TjnUgB7YKYWcEu3YNwwEHhJxm4hGwcW1kd6yTX6Krps95mBQUy8ZWKWcKyp3ZRm",
  "key15": "HvekSvFrvM9BqndV1DdxJLjBevds7aUZ89Hx7fPk9pGonYEwEGqYKJwC3nESM2HHNdepo1jP7vBC1kYdgyjk1cu",
  "key16": "4D9oxC5Api7hyYiQroFG6FhvEjCb1bN897HQkYua19HgwkZ2iAsVYypBxCYfW23u3QM8H4ARr4J6mpSGRTVZPAQq",
  "key17": "4JWqAiuiWyWwU6Rch9oU895srPf65SSTAwo633WHhsxGpXyZ1sV17EtVSD4fkNDAjPqUngof7bVSTrTfphmSKa6w",
  "key18": "2hcioTDCPMD2RRKnZboD5ECLr8Kqv8oJiVRriKiUp8kxsPDJ6vsojH7BuNXks3DJmvseTkjtPbVYC4qsnEkJ3Nzk",
  "key19": "3KqG3LeJVXqAU3zEid78aKskTNtyB4JCqHPvhAzNRCjEdHrravmFjoDbyJQh35csgVhooUVDnaiY5bCKjftZASas",
  "key20": "5e1whL9wgpdzKE4EdFk7vejg4h7vxoYV7PQrL86HD4JE9sbvixGYQ3iK4TjGSREu99JwZCDejJPfL9hS9SP3PZvB",
  "key21": "3ka3tRrU1gJbZSAs54KWi5G2t63fFa8BzsVCHomr2ka8iVA7nuPq6shq3KeuciWeTv9oLfmK2vosFis6YimG1B6r",
  "key22": "5PaLnKTYmDcyytEHHx1qJ5mdoUSJ3jTphDbpqTsJqAD4Qm9gzhf2YpLDww4YPfSAiSCdRCxEfpAzZ6MV2ou7g3tm",
  "key23": "3NYe6sb6bQHM1Kch4cd2Q5qWJN6Xc5YvaRtyN3CQaWuuY4sRJJNFQuwqUNRQYoT6APWzqsMaCJSwKyjc5cDXsbh6",
  "key24": "3EdTQrvWjnzKb4NMVZw2dV7aDL6WBEUr8t6iQ646QgsBQRDcFsdhtxd2fnh2KhfCAwRPamMsuHzjzdCEsSPneisz"
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
