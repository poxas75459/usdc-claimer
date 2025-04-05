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
    "35LNkQgNEiF9kmx5om6DHHk4utQpU9dvP8xKoWKWbdyWJ8roHd1kESpsRT3jMsvcVDcbd57n9UAptKMLvjiBgiez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vG41ELzdyQAugXJeyQYsPd61eZzz4Yb1LBffk2TX2mVQeKfnNdaTeoy9zgvULA2ZswnsN6r7PRZPmoNXxjRx7U",
  "key1": "28KS4KvKgXMRp5AEx3CPBHeQQ9NS3DsVfKXBNhuNpEBkatQYEDA36EkGqhGWKUTYCk3h7crQnVCZ8xF3Sg3dQhg9",
  "key2": "5QeiAnd7eeHvmLRJz9595p3oT9GwnUW4KEf59oGBr8DZPMPPwHYiGR7qpfcqNtfz1z7Qx319zSBqRGA4d6u5HS9k",
  "key3": "YMo7DjuXGaP9Pnqw6Ztpd4uHjbBTA27h1UJEyfCc4rwYEuC4GQwrB6Rwik69oYypyc3zJzHismTGXsNHDparmEu",
  "key4": "yL9yBnXvWcXZQ1TQtncSgpDbVHpWRhfgh51LrXcYT2wDNHXsTZEZmMQtfQbH6qEjQriFKTCc818mRnYLyCKgaBt",
  "key5": "5tvJYbioQH9f5NnadjTZzKE7jwUMCyJzQ3JCndTrUWTThVkik7piUo74rt2uHHaBrAsZV7VFozFnkooNAaTNepE9",
  "key6": "4GVKM1KtwJTX8i1SXmGwTDw8UW8YEEywSSiYpVZYGzBuCGky7NLZjpDG5Qg6aHYq1DdsYvEHYC9ottM3AacwByxG",
  "key7": "9PD4VBJj5cuvVMApyunJ5VC2d1bPftjyexfpNCoVobYAQuWDuE99DVwFcXNEa1xbLiZuLGZEvLbqvZ9zsNeQGtf",
  "key8": "3pZ2iA3CacEtzPYS72SLhsS592FZ7UFAEBr9fqf5eMCn2RLHqwFLGQDYMipNRfyc54HG3w6V3LHPgFqp2nVjkwXF",
  "key9": "2hXYzr9qJRkVwCFDo4kfkYFajLcP9UpzMqUVg6PA2LYb91Hxb9p3zerpcUYUhQsZrzdvcQqQc5RGy9res5MbMEHL",
  "key10": "4JxySmKufomvznySefx8DQUutCHXRwnYg41LGZKeNp19VUqRLpFqhBjDbWxYnrRtbvAJ4seYAHKywwmgSXd9XeYe",
  "key11": "3JwLa4wgD71kn3AweTh3twowY2BX488GDc1EFbP73Wa6aBR2MwknuNsuNZJEApTrzgYm1ekJh2LXoZ76skJ4MDmo",
  "key12": "M8oPuppTu4UVNvRhVJ4jDiJoENiwPZiFBJnRbdQzLteHcqxkWmsAK4rQzWm2o9HQjnK2i9LxRVcveXjidV3eenn",
  "key13": "pGohKNYMduLjkyDMV3E9TStYFVfNRx4VLYrMnKEBxpaL1bp8AqqFqwZP9jsuuTrwBNerTMqXAwv7ZQyJ9rzcTfy",
  "key14": "4b2N1BWwBvPYqAQ7SYQo1SNw31WRXZh4ZBwi6g2YFRmgPg9pAktCmCgmS9jDd14bU6a9hRYHkmJQap3F2iDCShT7",
  "key15": "4o9QFEn3ZoU8w8zdkaHg4xMVjpYg6WMbmwK5RsyAxNiizt4SywumVGr5YKdYSCfKWyMwCCfwuLoHxReFHadV2BEy",
  "key16": "DrakTANMomY7M8dTQPowG1PnT8RgucMKpX4LVBnxKEcURwuxNgGZgeZhptNAfLkk47QQFyoJgCbp7ymNmSRdkpQ",
  "key17": "unQf2HePxm1VWSwzjPWhymkagf1bgFXXMzrfwc2yEwV6UDaTxpqgvUKpEJEKUBBTUk8XMNVQguc1XnPtnUgSqsm",
  "key18": "Xjg93bMB3SeUA4cj4tyzFCQYSUXy2ZQPdxZo3Fkk17nvmMY1ZQdNmx9uFnA7Jm6pLhtBoweHoFiHge8TnmsmT6u",
  "key19": "5HY7k4VTPfAzWcCELuwGeb9xdBhgPX7yjhqrWa2X8M4ndFQ1uXs3tDooodQRQJzyGjhphQqkFSUZgU5WzrS4hw8",
  "key20": "4ros5WrQhD3v6h9KbfhGQFo2DPNoWG9rPWc9bUUjnNoD469kq1Wx2WzGDkVbbgDKVeZNtzZ1J3yfWwdYMjMzhWMU",
  "key21": "54pCNU7yM3bofZLk58zeeTjB97c5vxcZxGerEEgxamcR4Qv5pFnh3Rrb5UkBM9YWpJk8Z7m7Z9pEa4yegH1BSFSy",
  "key22": "56ZWe1A6TCu8z8r3NQBXdZfMWPm7ApEaH3ithjREzPcypGRbLjMbVfUJtCQpe1yxsFRpCgeFQq3snrAjcX9ZJeBE",
  "key23": "61uF5srUMEfrUWsEWEmgrdTMvKqCt2wEPM5ALSTYRWB91qXNi7H9mdZKYGGAbEbP7WnKvVGEXRnGZPWut6ZPr3h3",
  "key24": "3G7bNR8Rw4yTZhqcKo9SLL4ZuNaKSY6KDq5aro3zzSfvQUedgBpTCNAK3weAGLMqnku4wDdr9h1grNermYfxKjAn",
  "key25": "5KAXNm3KKEuNdKnwRPJPj49EMcsHBB768gTueA5r4H6YrhHxso9MAHMTqFKyACKY41JXhaNU6dy58Fr7ft5uXhZT",
  "key26": "5o6TVCgJnbv9rse73MvAPyuibWXqFc3aFEh56aJsjyVsRQGJroeLw6eHwoPaAMaNmAZQD4SrbEaPwcAwnHBSrHPR",
  "key27": "2XUiDyMVGTjchQkg64tkrSvb93dFs3X1wvKRkJ2K6QuSUtUe1TJT858smnFfuyc8JaDQfgauY37riL83ySQ4GiVM",
  "key28": "2ARWcmmzKLeD5JGrF3gh7MhaycSgZczGi1GGAgTCGztcyof5dqYQnzfNQC6aD4KW7kVFcF9CcGtYTMNKS1CrGnir",
  "key29": "KjZ7hhH1pU3Tj5r8SE95Nvn9jQ12Zmomcvb7PB3km7atDxkomLGQXR1rRgPxbQcr1tePNbHEh32oJq39wuVARUi"
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
