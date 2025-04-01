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
    "wCUGn3RhEeFnLy9mGTBLHBR3ogbrLM1EAm8xCnhHaNZLWBJk8GY9WDZBKdB7MUtCYYbvV6EeQ5b4Rv3gERYEcAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HVredkDozMBiXnYqVYbycNSxF6PgKML9LDsFTvFeXZmtxJs5CNXEsBbrPVXZtdTqksERWyK7nsBJLJ16Wx7WPdQ",
  "key1": "4rjC7xtCGPMK6pyxuzW52yEmgQE6H23B8s6K7pDrmzFow4xJwjHtDz65XmRkKcGMhbiScak9bM5bpSK4mvVrnJTL",
  "key2": "4B5gyiiyMA8JH5rKFHhhRQzjhnXPRqYqzepfRfzFoNeuZSXX1AMhY6jp6sXuMkPniSak4n1YCDLfsHi8zUVJsbJC",
  "key3": "2Q7qTMdJJRUmCbp8UCajLr5EhRAMTposBcePvFA6gLToDzqHfQicYhrFxWRb1k2D3CZmt59h8EFoQC7zc3JjfpWe",
  "key4": "9ndSwhYEMWv8bsQ1nuByp216dqoUvPyxG6EMZ8penkSmUsC9h5ZG47w7Gxzqd3VBKHcTnaVSg3z8A5kg5EdKUpY",
  "key5": "Qyo2wQZrEq4DhajeuSDT55FFA1bGdjt3FGXhVuVKAvEx8MefHncee5wtZXnHfJPz5tYuupSdNNk7qvsa54bmitH",
  "key6": "2KdECcnVyQfynJWDYNxYkae86DxxFdbLa3R5JH81NPczWtrgLrDh978SLofqLvvCcpX2EaSVsvKs1Aq1esfWdsrE",
  "key7": "27KNM3tkqL8EgwzsqpkcXSMZLwz6QHXsuWcU8VXfqbcJ9ZXcXGjWxuwQDEcRvszaP3XP6fabGRLVxs2ggQ3cAU2L",
  "key8": "3nWF43yhMuR5sEHdJ3kiH591yBNSbh2pgNpaEVrpxKjNB4V2VvTBPzZH9NDMs5mLVojxFxqoENcM9YH2DG2485td",
  "key9": "341cyWsAfVCFeYbr4zGnHmPGVJBuAYWgeTbJsJZHbmyR1n6KYcX5torz85YgEjaJmieyeSCrUNhKRtUsWyZxcoM1",
  "key10": "3KrSnxNeDKn51MQf9ud3kYYw16t2Fk1Yc7dtYQYZnbVSZvp8RjNaBfTWZGuEjPdHUrQa7f1apWG9VxJFe6wMHS8B",
  "key11": "4FMoiYRDA9UnacwYgSddSmEZ7tTi8pgfzxui2ZZTeEuFwmbFar62Zhq7dbChBWfmw8EW8U9VqJ4w2JDoREHUViYY",
  "key12": "5FVTKjLRE5Vzj4FcA1pZnuMxWfPyYJKMJgn6HXGtps8hh22ewDght2y2qfYUbJuCU5sUFG1iigNWfP2vRkYHMZYm",
  "key13": "4vZ7g3Y4a8A9yYesuugPZqyfmJy5KNudtt1WYooMY3CJ4r6BXeFogmPJ3mJhYAjVuCAK9QKrzEYRsQUeLsCbqJBZ",
  "key14": "3RKGhPa7CAihJTr3uQxJftmtjUUS5SfK1HjkLZxD3aHZbcDhyKKAbBP4zVSTqSrPBsBpG2yGwxmBy65NWwWPCVbn",
  "key15": "21pc5NnYnRSCf4EnLssGyGq5tBG8Fgo6Zx2gB5ydgqzmwytJaGFwu2cV9AuBwiUmrAZJNmYXEtgiJsAFDM5tcc9L",
  "key16": "2j2d48Ym3WcL2tj2vnookvEvvcawAuCDBto8jdcQ85rLzdS1P2rrNioP2fDamSDcutrKoN873ntJH2BDTrN8Xsuo",
  "key17": "2gHkbBSaZnFWDGPxrrgGNpGRWjbUtKwD3YTQVsiyrh22fpg2reJtun3gtKW8DNPSewEWwQUZgbWG9TnUk2PtJoaj",
  "key18": "5sdtNA4nSMWzGWC5UsYyYBxbcuzYw728zWwdxMSLArtmFqdwLkumGxyNfLVhayDzwx1KdBHBGAPAMmJhT4ewMFya",
  "key19": "3CLeS5YV1ZAV33jfNbjGCUTenJ5t2S2keSCuRDr9VY3quRxVaUvP8JdTNUih4eybJQJe3rxGcfe7azeSR6e7xQg4",
  "key20": "3Wf18kkKv5G6Z99TRPKuNQ4yXKTW9jYXuRPmfK2cGHb4NWNFZhAfpYkHvDFJLkKnBJoYTh1gaf4CbZibf4D5w7ib",
  "key21": "29BdcRC442xjAsonv2X5YmingfCSMeC7fwE3Fy3CZkHogv9GUvJ1a6ZridYyJBruXKmJBetMXMVUsZpTv397BrwF",
  "key22": "38ZkgHp5KYVtvfyajHUdoUfgkorwcSmLvbqj5TubLxRoYRYht5Dag22P7uQQhMBb57aJY7nSJLn8gNE9hq18T8Ws",
  "key23": "42acsvMxX2VALnxrbZwpjBwzB69QEjTTajf8jXshrq6XUe5mJPnxaKkcicuEvBbXa7tSogYdLziXWnZS1dX3RfG6",
  "key24": "4cdytEeUbccLBqatQiNq8GkUXwboWuvGM1mr1KyZMY3kebsUjhEkxZ6xLaWZDFMdiKpVKAmPsCJvBXVYvCmmdjep"
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
