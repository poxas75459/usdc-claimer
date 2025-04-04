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
    "2LUXKSZenvN6sXpt6a341K2P2JdMXesKgdyAsVDRGTMXLuxxWcRrKU6g6YRSXMKXiK7cwMHNxwLzQzSwHDYLXLiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1DtdXQwtokZ4Am7vbCywXDw9si6GqV65GqBqDUtSVejAyh7qv6ffL8XGq5eL5tUGUvGncfg9bNoBmeGYm1ZRSdc",
  "key1": "R46zLeZ6niY3wBqNx6XZiPPLthcX2gXNFVJAEV3eeE1v5Q5rjjcKenXGjZDwNgNGVsRTjre8FzsSwkGR3sQUcn5",
  "key2": "4V1wxbevCRzegeUUckxX2D74SJH2udsJLRwWEMDmyERDdahCLTWbNpMvABFvdmi4pqcn9PXszvgioMfHKnuu2dRy",
  "key3": "2TiAZzJAFDCjCK2dbZdsHfFuzzqdWkSzy5RdvMDKfNMwHerdxMqMYzFvopSuwC55oFfeLHGsRZNREpuWBhWaNTdD",
  "key4": "5McoRgWWNVkhLAn5ESaPCkR5KdbR1JgJE9xcrTR2asj8aJGnvxgd2LNLGXHeFbYwy77tVHqwSunz6muupAVbHk9X",
  "key5": "3n1CRfXi9m3UhfGW5mVmhCbYcnDbFWk8nh81JqykdrLqxSKR6td8zwf7TL6LvSdKxGXZmBYvnEwsxd724Z4piuwQ",
  "key6": "24xcy9RkEWoUSxAYcBWz2hJfMHorKrrVL7w8R6o5KM7Ewk5zEZArK7h71KNia8wCgPTr7ZPWHakcNRTXBP9QXZDM",
  "key7": "vQ85iVAEKG8zrcPc1TtTTtSbiJK95VgTPmqUPM3yhBZJTrUF7r7m9ovu9Cu5PubwLreGBaxVPrvgHvwYLQQE1EY",
  "key8": "5wRaQBQXFQDnYoecqPnnBe6hY43Ma4n7xsfhkCkTtwUhScRpVcVgiHNnHz8q45hj3Wt8d7kwQ6gHvfpGrWRxz7Po",
  "key9": "wFCAnKLFtkhXVVV35XJXb1i2wGoCTtwZgwfFogurxe7cMoEXW1Y1UhmPnbYD9ZbTwQZqL7XoUjVN8pZo5bPFuN2",
  "key10": "24N2k8uNjt47ecnZ4eqD5RUPjX3WWKU5Nr63QpszHZpSmXYLNHMBV28Hn74pCrRC5XHofvGjs3V5sdktrFKs58Fy",
  "key11": "3jNZTXp1zAp8qy9H3RsWbWVJjs3dq8APBjvehgZZHNV5RxT45HYjgLqgaGEWB4EpQopj36LnkJaCcU8rR35ELPL8",
  "key12": "wNVxSPm1kwCSovgJVQiybsH3eDFRmf52sHckopUsAGmvz4dE7FSsLzc6JphB9dsf1xyxHzGZJmiRRK8sqArFaaP",
  "key13": "3rzNxhxNpy1imLywP297MtzjrcNFJrG53fbkdn1abompiV7kuJo1KJYLhQeynvuN3S6CKsBrTnEgcx3y6ouL7QAD",
  "key14": "rc8XH8i39AJx4EMsdNbxGC8eZvKFn12h41SEmXXqeHH67Kp8HCNYhPL6wcqdyNh7MtmvxUeK9sPbzjucAkYhwSA",
  "key15": "229cgraLeDzzikVaLSjR2seouhFsPRwZmifdWSUsQ86BzEAYnrtFZtKdvr9Pzb3dfptbGGCcTNtnHYqt2H9taAu4",
  "key16": "5FTF3Q4LvN6A9nkpFcJPiTyET8d6ZitUb2J9Vr9Xtdd43ypBCzB8mgrCLZgXWKhmAKZMcHHJLytzr4oqu6jJQnQX",
  "key17": "61DAah6vyvGNxsXQFEB2TWhKFp1zSranpyzZRtPDq4KvhR2qr6sW7qCeGdQpmtXekAd9SZA8dSA5d4b2RKMTWVd6",
  "key18": "g9FLoifaRXULPsrzL5eoxEyEjuKGum2zD7hy1shW6NM1N1qesQirFBxHyuh42eVUYouKKenZdcyeAJqzyYngPFt",
  "key19": "2RyJbFraogTRGyiKHpgj64hjRZVhoCusGToHbtY9eYCPAfLKkEfXLLTpnRTmNwRkg2zQeQwVUYs3u2iuU2ToLoAR",
  "key20": "5rAcd4hbXQSQ5S4aa6KtR8dsaMLQ6Ue9537pZYn2tAqeDhF5er5mTB3X6fXHMdfGcvd5wh6EeeNjyeY9UxNCRmUk",
  "key21": "2A9QBh84KHoMVahgddagXFBrotR1K2RcokJYQsEFUHF34uNFHgpgGenPWW5fTeSzJm5NrmJgofzDWYa99rNKtHkW",
  "key22": "2prWfGvXfXZLQy54GB3rvzpchv3z329tkKxQEUZjM9JqS7DShrXrpF2dXTyYQyAQfXpdr3n2KQpkWUChjwS4pToV",
  "key23": "39JHkepZzoJwHQ1dtY71ns8iXgxhMTdBpUkWKvyP1zrmG565eif4vYThDoNFvtnhHpRoBoQ3p4CSnA7sxn8CxfRr",
  "key24": "2XotQUzAeu5kt1y3cZGo9pZJp4cBqUc1DfUGyWLcGJw3itaDVSpFkXtSrG8br4izUrDfUWGCeZnShmGS5GHazUVm",
  "key25": "35ZacSsKqptiMgWY5Y6ZY1r74eK1e6RaFDuktYnJtyW9NaDRk3VdefdY7PGwv7EYeaHbaV2Js2zfyhVhBq1ABPGN",
  "key26": "2yy3tLN4MWTG34GViHBKL8RK3fEheJ9xR3KLoLUPSmFh4QucDBFxiBm6afT1J75HcrXrJa5rraUNPuJeWdPPo7T6",
  "key27": "4pomHP2rcp3AwNDvCfk7Z1vYYPtCMLB58h6HhTP8bVbEcrJg3LFqP1TeHQAbh7xqJUFuZFjGL3MqRS2TRv2UyPb",
  "key28": "2xCmCCBqMT46P18ugrHdxgDgSV2S4eB93DkP4FS9CxoCRaQeXftrKngD1ZPeVYeUvEu5z9uMBpQE2hvr8gTkyPvL"
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
