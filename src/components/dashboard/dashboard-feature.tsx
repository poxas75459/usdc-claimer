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
    "45rcaQBo3rwYbufGhWRpWL9nnjXG5R7PbhqB28KvwqgXcTKXjAzVUiyAx1KJDpg2WLqKJ6vSTmGmWdeNWNhjjByW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AWBZUsrhe7HYVVX4iYbwqx1Re71V93NsfAXWiV7FTbkFJBc7QSK1MrC1Y1qZN5JnqeYMjG3LrTS2C1pajYkm1eK",
  "key1": "2E5GDzZPrVEhWEEh1oDvUSs8owMa2jhGjxWtyunrhk3pdQorJ9nRwPTXgbF6FDVUznkVGhkLBqJMs9uo5c6vzvFE",
  "key2": "4oMYBZEMWJ2QKz1qGjj9ukYZQm1n4EU1axncoYzbKCfGM1qMoHdUDp3DoCN4mXUSF4UQx896dmEQYoMAtDwHp84j",
  "key3": "86mvporho4CVQc34FtaJjWWkKgzLmi71PkyZMk9e3u2QseoeQi9ubXyWhQC6q96LXzKcsJ5SfcQZ39rxC6KjB6Z",
  "key4": "4DuzGUEBLLSoZyMnhDhxaeyiR2kbjaWHKxiXt4G3bfvwmrfoqhgbNaBrmUuthmscjuXmvfMgzSf1mppWT68TfQQH",
  "key5": "2iTvWd84KC2iqrNr3qYXC2gPR3HaWx25q3TfTjZt2eLtgYgq1EALWT6srkxBMWcDqEhAKjNPNyR23vKobzxP17uL",
  "key6": "4byecSUmzdAfTag1DpAzHc6gkX2XyydCPa4tm1bTTp73vKw8mYx1QgYVMbV1MYYKqzxrE8gmBk4zwnY9kxs5vzNJ",
  "key7": "26ae16uSqiVfAWoZEhQ1ucQnY4ES9vx663SncwyGSWKijEwrDj6Lvckgz9DgpQ8D3GT15w6SWvTSaBDCBHpbBqor",
  "key8": "2FTk56rWcADEx38yZprqJDWi4X1PLPwe1jHemXzLWicKo1JTtDwvtUkjMENd8EAZtJDvMFAYXJZe8VFbYiu6th5p",
  "key9": "43zsw5frMcrcYqbVfVQaTQMCvyY4cjsM7VTbcH68nAc4AJr7z7YsbstsGwd5eTGin4LbD1UCnUfzq8fnRsBMCBv8",
  "key10": "4d3ZYb8JyQE1vgBYLtzK4quk5dB9CUdVu5ojX9b7ZdFQZgtVhQ38NZoTmteMARzByT6qZc6KGHReG3ckUr2RGcmK",
  "key11": "2w844niKy4Q2NAWV7LzfLULGDp3Brngt6aoz1q9CGBMKmERpU6HidmA5tWFwiveVMzuLV23RKTaXtk22c6mBxSYq",
  "key12": "2iYqEsAbbNp1mFoTBmdfNPjMEAWsGVa8cEHDMCYcEoccr8jmpMVWjYFtqJePqK2aHic6vUnWn1AwoimtJ2r9CsCG",
  "key13": "3p8ZX4Hxq6mb56bdmhUvdJHfgLiy7zTi7AKovi7zw9SJn769et17gqyhQ21knJ9rERHbGekAjcpNknhoTnA5TzPt",
  "key14": "2yfisrxoEtodGXERCj5XUa7Zn3waf1anrLjWidMAazLHjzy5Myp2EqdFe4gX3utRpGmasjCJfqa2DAxdUcTS14CC",
  "key15": "3wWTFgWPsRLnaUmpMna2s6M6rnLx37QL2nQexwSEwA65fnBDDoYVBewKHjEFH5gmJBRRgD661ZYwnwHYC7SkBR2j",
  "key16": "3HhgWwLYqagCH72Nde6RvPPCTqVCu24UsBeZsJBm6VDoKMdBTCAWBxZjNvKW5XUSdFszMQC42wKx8CSBzhKhaihs",
  "key17": "5FFBAsVYBxC5SGuNBKJ3aceSK2As2eR8ciNZ6koeBpc1LmySyFRpbvuDSyA2bLmB16N1hvJTK8hQdoj2nhC82r3J",
  "key18": "22nKjd5so1FjPTPzJMQ2XcKpAkfW4PzrTMk9itnGzcEGt24W66nhA23vD4E72XbC3sdxNN9KZ8P9eBn9yWCPYxgh",
  "key19": "3w3829cJxNBo1QgWq71zsVqjEZtrEAUnTZuDmnziMMzZxxr8gMzg15qHs1y9UzaaeveQXqkmCGpsVzH5EnBxPN9b",
  "key20": "3FM2xiqqWAa7G4gxX2VyBZtT4VzTDiZwfNGdVLX5JakiAdYLCL2duNe4gDAaTNsigks7Hnb9XBttQhEUkTUW8Qn6",
  "key21": "5QkHCtGPr3usqUkQtUJfYMk2qS9o1Appy9EEbNNUkAYLTtfMshubXnBoCzHc4LCcjL6pKEvgoj3R8hWF7oPyept7",
  "key22": "cpuWwtm528hPk8YY1QRBwC3Zx7PNMY3xuU1VGEcV9m1F6kjRAjxGZaoKnesNRUzv64h9kG4gJYecnT6VHajQnbN",
  "key23": "2MNH5TpMLWZZqtyrUufa8iYvyERmXMrwL9rkDt4Ld21YARKNY2iKuZbYkmyQxTLfMT2eKdTsRCZBQYfKBoMvrz8Y",
  "key24": "4f5cZBpFW8S2YuPaWxvPnWmpRkDKTsUumY7mRh1nCdkMadb5UyjLrmCkqEgCWoQnaaFTcGMGgLHZTiVY8UbGqkeJ",
  "key25": "2xv4Bxc9wfoTSCqra62weZBDikJe65KViu6yu2orT3tU9TWXRqe96dNkYbsZwL8geAYjNHjEfU4fEvPjhcK2fJsW",
  "key26": "3cfoK8zAss3wfjzjLU45dFsWmzWhAegUBVrHHzEoPX9z2UspMMTxTopFbZ3xFoVGNp5uFHpGzcazscnAFmVek8Ko",
  "key27": "4woppTbqLvNw1pk4DvogdXAphAS1u99ETAyWgCYu9b7PF6q8CSPgb2Lg3PPRKeaQXAnB3uzxhrbXtsREmw3wUVQ2",
  "key28": "3zxSr88Dh9yGNruuZ1tnrTRrun85tmcminqvD6NTw8QeNauPns1mVUd4onGEHA3XxVzBhv77fwxZobmciCfmvSqt",
  "key29": "354vWYHrMmwfB9iP6pAjNMJje8ZeBivKPQqW8R2NAx2AQ1oZJLHigVJbkkztiojVLXogQEddfw2bYNocifGQu3rD",
  "key30": "2UxarqNUUdSDbR3PMT95LcLRBaatoKhaTgw8rBihCTWsoQumCyvZnJET6oewkxE2RGnuxVn4RZZtiT8MYMoZLDn2",
  "key31": "3cJpVRWqFVv2BnUXZPNtX9Ynd35erkrqexSt58rCrT4caoEihTyVHyGNiFLQvkydWjMAHGjqJTY84vTqHgYec8Zd",
  "key32": "3vc7x2xWHpJkJRjVt1vEc4VNstx31S7jifNSh1Jud12dZ5fA3uVKmwnYjEiUSZzTJErYxihXBG59Tw6Gb29jjUDH",
  "key33": "4vLqcBEg2KdLjZvnUaARt3AxmrkYcc8Hj9e3pi3K5BFKtmvLcUSr8vEHwQpvy6H7dZTiyLcmbYhEd76K16LyEP7P",
  "key34": "nvrBeSvNs1btgHtWiZcCRv3nNg7j1biuzhd3sXGo6FdBsu5NDN63eSZBiNJNnoCyyhC2UhDdvySEfm7w9X3AEcF",
  "key35": "2UcVHq6gMtCeMDR2f5Ag5s3sn7j2xYPnT8Nvkh9e184ytRJpZ6ZuSLvRk26qRvy4EvcuD3U9z1BAhNKoAHBXFcqs",
  "key36": "pasCyit899zs4NMn9AsBzbSKnUhm1Htr8myP1Q2jnF7ygoN42LmjAPxzjMM59B2rhR9854GYehDps1tfAv2dHtd",
  "key37": "5xXPjHwB5vN5diRAwHTue2AbVBew53eQR2GLH1GY73mPd9ui1r2S9BFLrDfeyA4Baq9D2kkAu54supdBjuJe4jE",
  "key38": "r5VxBNUhRYuySbARmk87aZvVud6est44Yo8Hrqu36N9YpGvQdLLfhKdTTQQyWqVq28Qez5F7VABiwB7Pug6xre4",
  "key39": "2c6w3j1fgoio96ER2S5sLcbpNuRf25Zt7eNDUozC7qTGbevLvqyq4azXH9tFBpZBfEN4szVgA3uCW64Q99hVPZsC",
  "key40": "3V5djix6CtTZTuw5KaAYgaNAyfurbLxdNwJxAkb5ChRYbkbezmb8qmXCDF9g5A5W8WCzwztiLmD1FgYbH26toujX",
  "key41": "3kiNFAK8hBfJL9ktunD7H8arMTr9mAoRhQ6HfyC8ZDVordUKPSTMwnNJneGqwUtoF8dJMpkkzemzriSgCsZ6d4a7",
  "key42": "2MNgH59pyv2UVEUS2GKh1pjsH1ck2MZRUx3YNHdc45c7kh5LgVwLaMAMwAbPTkCJ9oVo2nXYELBhwVgzBqAjAHd9",
  "key43": "4RP4cewiSe8TU9dd6yfuytW7KrcTotfY4dmoF4siSmZ5f1vb2ptL6A22yKZpDc1S6AxTuA3G9ofiagKFYNezZ1uM",
  "key44": "dZ16wbEDBXZSDPjZ93w2mSLhjrBmfKivBZpT7Siirov3ESUveA8WxPfF7xXPdpiunzK1TwNETzKt9fKDsitbSeJ"
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
