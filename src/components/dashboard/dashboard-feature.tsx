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
    "5Yy8myf9BpUDZ6DcWVtW35TVBy2u924EZX8zptXxfvGm1idfXrghXe4whKJWGxAiWLTzJV2yhJYgxB1CHHeN7aVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FQASz92htgGkznepW5VvwZnj7Kwm2JPnG5JRQgJdXzCCYmnminak1DnazuwZPfCRdquPmiXyAURixguqMePmZd3",
  "key1": "3EL7Yfezzfzcqm4w4vb7B1DWrLaW78RuAaTH8AjmhrxKfWt4K8uiLYok95F9Th1TJMiNKrGpxpWDRoY9veZigH6F",
  "key2": "6EuJfJKhaEZTApR2CMLmF2mSAUT8XJKX7av79tWJatYuSE8KE2YacwUADCwc8aTB42eT6D9QeW3G9un66hwBxW7",
  "key3": "3rAPsVuR7Yo7dT45Syi9UruVbMRkbJL2fzeo2FWYZxRqQyYEMiuuj9hADKmyTUfygQ72d1eJTa4tqWou8UqRdUed",
  "key4": "2J49wqWb5QhMvZAdeJqdAmufd5T2pgjYtT2gDStea34uLNWgvVHVUYVVR1edWvKHxhjawTndrMWLh5fT3wzojhwJ",
  "key5": "3vdBbkqswWBdKQ24RbHoFiJMfYAZuzt2zXjiSbXd1GPU8aK1yu27EEv14gGWDeGErt6SHA3QfKZa8fDz5ch6qmey",
  "key6": "3RpwmHyiAASKjxNCsPvSAiZ6mPNNCBVcF3ZNqX2R9qTWa4U4yCDoe4CiYbmCxruLpkyK5tPCHXXhZL4curhuvEDp",
  "key7": "2drwXSabJLrkU112KWwBJZj6ZRH7XCXgPUqVGV79D7SeNBHcPtWFri1g9sRwTx4wn37BeYj6d8rFuiJNH3jNrEFp",
  "key8": "25jhVgiQeswAFRbFaURHktZigMorCduZm7bA3rg5JezXMcspLjXpRdUmMEyZdS7KPLMVK9Fe2FsTCfrzDdy8EfpC",
  "key9": "5rzxh2AUHhGGr96digR6LKaJujD9Y7dKihQWBbtjzFiDeej6wVgym8xeFuUP9yF5JLruPiNAS5PuRBdYzraTQRPc",
  "key10": "SFjpHc5dvV1g9XHueaDRBDyzpBedhgytgZRzPEBVbAgCxhFaN4ygnWWd5bEwMVHHPJQjdbARTME13p3mZ9jPBy4",
  "key11": "2vRR4ecVdLQfkG1zLQRjXt9LufsZZpyaxwUGhrE1NAfBdqgJtUWLwpesVAd1GtD4hNJBDJjJPFuNN5vh7MW9fn9U",
  "key12": "noMBPiRxtm8akXwTcAr21a8ebQ8QmqJX3Sf91DuLwc5d17Dnnh2sxehQpu5LZEqtRuU48kBtATacvQeL6ZpbPYh",
  "key13": "2H2ty3wGNGyPrzY8GfjZAzABT7ZYWNby7uzA16YgtQb4djLPSnhTgq7VyMPrQUyN4QonVNPTL67Ep9vxDEqLvRws",
  "key14": "Xdy98VwuQiAaa9UJ2Mpd8ehU1Ayfbg9qJnLVAU6yr7Z5irXW37HjutRAWi5oBTR9sACR1t3KFRJ1NT3dRcn1Ycc",
  "key15": "4xG3CytGKrxb7qX63EDCQ47csouP8dSeWVQZ1GakcZTiWzXhrwfSYuwCco8z8NV5HC5F3Xzkq44tZVpqu1m7bp4X",
  "key16": "LmFQaqYE5HJQh6RVfmx5RJpMMmjT7qsabHEifP6Rqf4ysG4oDxCbSRQpyUiJciaJaqZcbng3r3GEH2yNLYEg4Nq",
  "key17": "3nQfQATyMKQFebX6otDkwV3RE2aiyxfwWuoaYLPFzaqhr1S5c31jZheiUo38917LWqqrX5tc2LB2DMoU1Tr7PdC9",
  "key18": "2XHbUxjwNzg6BU3wZLGT7uJGrqdgbpZSAGtpF9EuLS3YBWGKnCJ3PwEBNR3Dga6U8m8da7p2zANaPsaZm1NcxJoq",
  "key19": "283LjH1Hv8JwLS3AXDmjqyuTVW4fH9tLrS1eKDrWikGuPaVnZLqsMfdBzS2vJqdr84nkiVAdXQuYvLae2KBvLDHe",
  "key20": "4jqQgYtegheWcH2HqZBkCvCaTu3ZL8wce9oETdiAXeCsAdxtaToPmmXuCzwtBYu56pbr2cXmU7dZSSXirizApCNC",
  "key21": "5QjgKD3aGfjhnV8k6Q7pnLPbXomXqGenRyvPYYmowVCKbkMiDy2FM9YpCcsX7WPT3KuZGwj6Gq1dWm2K11m1nnd",
  "key22": "XXnnJrwGEHCuuTauQpjKP4EWjy9YjUvGMGhEMsXN5dt1FVXHWMffrW1p2ENZgP9H9QWJ41ECQVgPRsCCDNSN8vd",
  "key23": "58hd82mTr6cpS7gxjjJ4LTaAh7iS6bFGpJMSb2KtKHpMr5rRhB82PfDyMWUuqrHPnQJPWzCw6HxEegrjqL3jYkyK",
  "key24": "2gA71sKkMhPLcYUDsXDL45FxqqtHQ767i8UnF174ZfAEgjqK5fM9mbtizu9v4iZLDDTjPgdTqY4cyeiHoVPRBmc7",
  "key25": "5pPUMGyW28beuQCLM2XTrGqjhgB7AXrT8Yq44MD2Lk7xF3MneikZ4KUckkGb7TGjSKjqGN2ZVaPwtcFjNQoN3xgG",
  "key26": "2dH6fndSJXitRTgCHnLXzwrXfFgxKwmqwyUThtU1is7sCweXLa9mpSa1fP8mAiAzrFbPf2s66FUZabfoWVo5mfC4",
  "key27": "4zPhsGpvrtDyTn3ydjE6hfcqdNQs1oypgn8hvwtF2KAjCp5uu2fiFTkLJpcn8Sh8Cq5v1H8rpztY6ucdmCdisNU7",
  "key28": "5nv6NCDPzgsYTfM42Yr7JioTitUaz2qu2QY1NGasxHRu5a2Yrzddoh9gLASnDhrmWiozPYPvavnDutDX3cynxixv",
  "key29": "4yGJt5o9cDC7xuryjqe3wgnNGePvvaJYDPMGyLVFpQ5MzbBGKyKDt3H3yF8bZXpkAsbsMMMDi8i2xCzorJuUcH9b",
  "key30": "2Ub3hnArBWr12fBmPvnstB3r2t5EJr2cmUoJjdhtHP5thSzouAqPv2wBD1FjcYrm6eApzvY4hXeLwJTQWs7x4aof",
  "key31": "3SCKGvdRXkMDZFNaMB6GHsTuCFHPuwPc14uFhHTKmvARqGYCw94wWwcuj9U2TBcE7rKGiBGCC7hUc4MkwrPBFNQf",
  "key32": "51h49zPTp2JtquRobbKbA5PgCt5CNdG8CEddPX5NZt7uCvFwwinq9Pagk1StToD9bi9uTpFVqQGqarGwjnQovC8y",
  "key33": "2EYZ3da2jTWkkgqRvjiKFcoAfbE71GThoc7V4PgYuo8wCRp4PnL5bhqk9R4TisuJyUyhrBDBCoQRuukd1UN2ZgpU",
  "key34": "DrwGhE2rHD8YbSKNmm5DhbMvgFNb3SqjZbjtEGf1Sj6GD6QEhWrtH37tXNyu5mL5vUzATajnGnzAatHMRNEo7tR"
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
