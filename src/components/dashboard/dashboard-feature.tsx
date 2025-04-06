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
    "5arT3P3SB3rqK3mRb9C6bsZ7x7XxDi8UjP5SbgijYWaEjpL2ciR7qiUWwqFAZa66e6tniBmYvtf5i3QYLSQtfuHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "593quQ8yjE8rJYTKsohT1bB58ppVAhuok2NsVG7ekK6EA9rH3wnir2ehV7vXKb1txDsjsLLdPX9WBVA8r4aG5pRU",
  "key1": "4C1Af22r3WtjBqaqpQavif3oJaqHmGscmovSDc6Z1XFRnEP8yFo3iNx16ZwxHwZdyD88r2TyuSgVBxTzkwcdmqCM",
  "key2": "niA4yKu23f2ZHQChu5FY2j41u5ZSyugj5YEf1UisRGdBtR9UTXLhb4J61hfkfXq2vcvJaDnAvM4zCgCFna8Zzsy",
  "key3": "3Py7YDqUUnye2UFQLQfXsrM6RgP8Y29eY6N7Q6yddvDHrRGBAgJjyjRzS8Wrequ3bp7Sv8yxJKrABJYHbrqwzh5b",
  "key4": "3r1frWetEK1qXFBq9VsDmJ6sohhCzZeRtQmJUmP2nq9Hy7uKGHoPz9uqSwTixmZRAmCSE7j46Bo3QTHPHYbLHFYJ",
  "key5": "tBhNTX2H32oWnQg2fMxD2Pme9ReLe1Zc1ntgbbu7pQMDoy1HPidanoTVa225nkrTxDA39cSNMwjUEzgzfRtbjG8",
  "key6": "3TnFwapgCRUhUbFJNvkMTkg3WjFFWNn6WTebDm3VYtJZvQC99UuicPygJz4y4PHKWCyAmoi32TQv22FP5kQu1jgZ",
  "key7": "YYePLfuir8APkTVezLfH9pbJ3pXJ6ALgSTmahqeKTe9K8Rb2cpJH9YvD16MED78BTSJ2fqfjYj9FyiVxy6kcWWt",
  "key8": "SMUvv98GvCvs2X4crQdbcxcpu6WSgK3xA6CgzY8BCNV5oukF3ZRwtqkjqxXLB9M9HyHQYiux5eBLU2wXrbNKTnJ",
  "key9": "uu9YNBDheeBZFzEcNfqRdNinucLLX1UiUVPZm8xff2uboLeqQnTHh6x1GkY7iZKhAovfdKFHRaRjpUZLfGMhZWu",
  "key10": "2JFDpvyeCt4rbDzGcGau4jKcSLY9Nu5et7MVoNdvt8igpemPUQhyvwF2n4fddU5jtvgDY5j8bLYtf6zgDP73KUwf",
  "key11": "5HugRBuYkxi9RYJJziXM6dH671iEjw4wKckEeySZTjwkc7MKWRaeu2FmpU8HKtFQSAsHxX79gDM1zMsHdUAfaLAh",
  "key12": "4PNGxXNPC46SvTEGBnez92JQmQPVqh7eNYmwk2UPP69N4GEPPP9naDD4xVLt3eJNi6cP5tC9H3oBidsM58kk9rgd",
  "key13": "5Db8jNnpxCPuLDW7AkBu4Cnyckm3YSK4PzUwaCdUmRE6bMBM3cQaQt9GZ2VMbHhRrjwbA2fhrSWaVZqKeWBQvSDr",
  "key14": "4Mq11uf96j2rExBherfX1BnranUnhxTjwKkisq4LPYh4uweeFJbj3DmPdjynGRAa96JjxcXwZaUU3p2VYkmbC7Ds",
  "key15": "2EoqrUUfosy2vQQedKHE8kLezPL227sjvrnQ4NyA1EMhNxbbeq22B4K7TqqXyoq7H81iDZWEqUvQeqsSnbo4sMZX",
  "key16": "36H5gZsbM1uGqVKhPt1JZs5gMEYsaBPPdXTKWSUmmGHCobEfMUvpmK78Y4SXgkroz2KRxa2X92CKHyRhajdQTfXx",
  "key17": "2YQL13E7DdTNC87gdvzUkxeZDvWGB16HzFfRSUBMHPYsXNgEqVurGM9gz1G9y5yDPuLRsNHtkmxMMn5xLnhXNAvU",
  "key18": "5rgBMhVaSyupsmpwDbgXzN7HGabweBX9wCJ65d8vx8jEmzwcUByS9Sib84CucPK5Ao1Zj4NHGkkK6rQ35dWK3XgW",
  "key19": "55KrDgUQZY97Y12eceHTDUJMertFj8Er7DzYVzqmvMDcHKfWG6M2pBZxdAnuV4p7RaKsQ82bvahnGHPLihjw2T8X",
  "key20": "5C5ZqnKNpH8sjN7YpcoU43FBE8DnxF3esjtQERYhJHG1RGLH1qqEee8oqxbmW957GgmLUvGrneMRY2XLU3KKqtuX",
  "key21": "2SpYeqM3SttdQFSeEAEomX9gjbDZVHfZsTGUsUnz7w2SoUQZnMiuoTY9R9HefPMKr2ZFC6L7EVemCGfnids1gNQQ",
  "key22": "qfZR8XNv1CfWu5UhikcFaw79kaSqjWbkgb4x7c7foNHo37YW46b2xVRhogWyWM6kWAkeM2FV1tZF5BgPP2JgEnb",
  "key23": "4TaMopTzMKM99GctY6adWDkUmXd9rbdkEH9ioWk3uX8paoKywWWtbivxjmNLR82njGmUyMGdS8r4HAhArjkbsCr5",
  "key24": "3FxKwASMkgVvdbLHspK3sUfHs13YDFafDuYr2ZubGYa54CgeT4HbVYHvZD3YKDpxyQuJeGxAzQSXYacqHJhD5X9S",
  "key25": "3EXwi1g4zDqrhYmy7pzu5w9p2hXso2YAsD7tNNaTHqB3jCncCQscfjvQ84S3eSNipYfho82Xu5iK1QiPtUKuoF5Y"
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
