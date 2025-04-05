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
    "5ax9X3LoNU7ptrsxQTLZhdq4Ehye1ycTtWneBc7cNGG8qbq1baqf5CWBEz7k16MhPg3HmfEmxkRLxTLafZrxjg8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YTnUVYjFDkirRgRKBe7tpdSf8SjLh4heEzMpwNEghLXBr6PNmWxHrZmD6nP9i3SgBdq1sPAdXkU3279H7xMALRR",
  "key1": "62vtgHiN99CvrL2AtCPpxMHvHDqPkbYSBFWVHizXaTscnytHiPM4gWkgAPhd37VHwkPjt795ytmxkLhPdxKZkCVV",
  "key2": "2EFKko5rE282oCcegYVuyC7KCVUzMQxQ55Hi4PUDjCp1BhFcP4DYdUkReEVbHJijroPcpzv4wBdMNw7NRs45zqjj",
  "key3": "2Fy7DvGXVxCg86kkAzgR82YvkpzWpCDTPPc5iWw3XafB3Tgo1W1yGP2o4nZMDeK5eMhqPcmiwd8DinU7Xq9S9NiB",
  "key4": "2AXiRK98Un7zBruoa3B47kN1vV3zwiN8LdL9A8pCEjXbPVHLqTTpfxC52CBEc2vETvS7TrnuxZLW49s2V8TFcrzL",
  "key5": "3xaNgNdCtnogz12aA8H6yiu7tikJ2FzJScvHHYND2NRNHGVYrAe7UZyvTEUpC5mJ1fzLvJRCki89a5mDApqUWP5A",
  "key6": "22RH1WpqZzFGQpeFog2kMVCZTNX7HihjW77Lzq1ZCGQAVCGAcLEs3Yswiv1HvqbW12WGWFzdeBmFLvroZEz8rZPD",
  "key7": "6erPJSVSdwtVqPoySE2wzG1yzaYH82xjKJnBHbwoVtX9ZMhMGYLJSfXbmvLCcoZpVHeDQTp7HqoSDixyKVPzQPy",
  "key8": "618Sr1bfg1PtNfmvc1FidsooB1Gbszg6qN55RnNnftJc4hjwBPXhKg9s5UZm2fnc1srvTp6RegQbQmapj7Wasy1y",
  "key9": "3Hi8jGhnP51vi6djEfhUVmfgay42eGXdVq6PeNXx8L9j9C4Ewggtpgrohi5Kwm55Qhuvod4ftniavMhh88bGgxsM",
  "key10": "4WqoaDKcVLz35BHmLXtZSHWu1kFeLJVbmmmSZt2aoVTYsr6KovJu1vFw2CESHtLKnZwaMZv7iPXZYpQJSeun2UoY",
  "key11": "2aQdfKiN6y9wUufuYqikaa6qgN5aPKiLJFaLs3CSw9DZcAzvHea48TbyLWTZia8zUPvg59WbzrT1StJdaBSoZikp",
  "key12": "3g69QFgHxhNxt1gNzRMLA344LFWK2j8mPiWP5k525ZGPgG1Z1AMnqtdoy7iJPnQuC1Q8HmqQQykPVo9NATrx8yFi",
  "key13": "4y2a8RLPLvYAEYrkHahQGRVJ68ybRvofdBkMevzWqpsL9BwaHhUZKDrhtPWxboCKTphvZB6ZQTr9iJ9n5RkwA8iz",
  "key14": "tmaYbxThJsN9i8QtPoNAb3JpUnYBhdRmZbFPs7BPFSkBnHj2rWsDuJNjYdZ9qEketJ8gm8NFs1atAdtBnFM6b5P",
  "key15": "3jDdCi3yeDXZUvAaqaXAGN72koDykKqktu6mtPh3Scnjy3iJoxc7p2tk5uv3mzFWZqtumNBJ7cDYEhKUgq531Qz8",
  "key16": "2i6goLDZuNB5JheEidPSmQoMhm5cJQeWCG2gzbRRBcUGB4krwQFJmy9hqSuUsf4ZX3uMuPQgHmbkB1zwyykmvK7Q",
  "key17": "5xxFpK7SC9oZm4zM5YhvBV7mGQKrP47XyPgNZGUim36UM4QpbZxA5yHTcW7Mm9xz3bf8J4pRsfh74VcqYVj9iQL1",
  "key18": "r8JvpD4R4xia8mVakyXwcfxj5NhFqeff4Ld3yCLaAbLdXJ1DzMLhiFwAdo1zVzVUVRKooSp7SSTVa3Uk4aNu44x",
  "key19": "25wjUr3VDys8gkwQ9Hpc7EK55cvDyWU2HvS4WWhBKSutq2tK3HNqhpMFcLvxmCk8Z3m1146aHYfTTzr74ZLFwQnd",
  "key20": "3h6ZmZrgqS6KsEXnECuW1LvUUDna2Fcdp1UWRkcB4ZFosyBJ61Xbcoc29gZ1H1CH62kLeEJ3W2kmqYgC386d38Dk",
  "key21": "3HnawBDpBX55gVPbgZizhErd3Awrk1dAo2ctE7pVjjxiaBTeKoJMK6EzzQn7KRkpfbrek3KjWPibtCffV7gpULMn",
  "key22": "3LFeng5vvYAXMkVXUFbKdWCEgRte6epe8YpZkmPXqUR1aPPSrauRdHHVNv9m8XEcnbBTefh9JVTJLQ4p3ETJpiDN",
  "key23": "599cpbPtWehgdv4HJQ9fcbizLttzAC3PtawCZZ9R8i1pMCBvBR17iLsDeJJNRuu7zhHiJkEcvNTfaZxRRKEpL9WS",
  "key24": "5qhUAF3BMdnFQqZM87bs1TyyUfxD6DJfYUuyCHhhMtnCFsqqXhVEjuajZY46gbgApupForvsB3BPb6zkUuk44LhD",
  "key25": "2aNpMTGfR2H9HAQtcmZ42jQEQrBjFJhA8hjEKVYQMGgpZXbpjvg6srhiZnpwkZQYZUTX5HBNX33zy49RBCRy1Wze",
  "key26": "QP52i5iWsfx2bsN4y4EFn8rjC5MUVL7EARkndB7dVundFwd7ch1gjvuWvkCMoB5dCNc9jgqsY9APrfHtsCoziWz",
  "key27": "3K9d2sfFvQyRvSGrJUbwiZfa1jEUenw55GFx2LqzS18G5MaPzBt4LjV9ty8ARnDQoafJZtwwydSj96nWpsbXze2j",
  "key28": "2A2yaw5g6BtS4evh5ABVgUK9JXUjmFfeRbAxii5ZMumNEjw2VDEmKBGh1niaGNi6VAismznQthzbS46T3dUHAX4r",
  "key29": "5Qd1JpAWcrCrqAMHNtikKAgiuzwrKVwdJUHuQcCvvWzh6CQNEF9SV2v2PNsR1aKKrKXPmQHxZwy1WiMmVeKGEQ3q",
  "key30": "3Nb5qfbHWwDsPsRpAdJENqNMJCiNAnaXzKD1AjenquE6xs2yX9NxqgFRvhTPBjtmybPwHsfBkjEZuUfyCKZqiF7a"
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
