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
    "66qcA5Xr8is231UtVSfCUBfKz2SbRTawPHTAvN5Mzv4qHsDDvDeshT3KxNyHNTeLEYU9k1u4yoHsZTxHa2mFipqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WU938YhE1ZhrVwkFEZdAsnfMnyMGN9dvATKgEQjgsApsC3tt41sS9MFAft1hj3fPEwkghtshNn29PTYAxy6t3rb",
  "key1": "3m2YjRDVZAzN5aAGQVNH7Pv9xKwSHyfBz1HjWCq5RmMoYzSXZixKG29zDkXkdEMr5Qs2RV2VhTUo2PyVYv9tBnUN",
  "key2": "41wYnDVaA87LkXCXJKDPEp7yN5k86SrzfhrLbSeZmXb8uYrxmdXVg5qGvAcZsY4R5aYpj16882iJzoNNPbB8g9j1",
  "key3": "3dhW5gMeNbLoRXSAWBxQvtu97FEYcvMPRVDraA8vX4DqCKJSGeSHdH4XdyLG9xVhuvpWacpNfn5ApK7mx8iXgbv1",
  "key4": "2yeuoTNVP8U6NnGkKd9NxqUr3yA7cYRQX1tf3umruy54Sn8JY8xyBRMEyZkZT1cATvFL1JkBFYaUEfwhC1cRNybG",
  "key5": "32LBQaUVqqekBpMN1KqeKjDySgkVSxPWT47r9beiUCkmygig23Y53k7QUccB3dq9uaNWwAoKNTDjEgL8Up94yGVQ",
  "key6": "8gR5CxGRzTa9hS6mT2L1A7YSHSKDrW5kJrfuq1H9EXLvrrAzGrXwrPJqJ2b6Tftr6gcCtUjqwAbkPsqneE9eZHV",
  "key7": "G6cxv2tbFpWPLmaK7zDgvcDjomVAVJ9aCbvUSDX1wwwMqN1zTxfLpGn15tvkepeQ3A3p6ndyRdYn4KLjsmD4yH9",
  "key8": "3fwgmSMDB2atBNryaD2yX8bXNVp3G9N4jh3J6VJmkj9td3FzfCLqUce5zWH1VVi7XrFT3cfsS3CtKQatG9TzqrXo",
  "key9": "5sF2yD1rVEgWQmEp9Fb3ksW7yM1vMRjYGh5gZN5UxnXC4xHpmh9M4tp5ENkbwcdK9mXG3vCJZX8qEHnN1VwSsud7",
  "key10": "2iMWKxa9X5WrFWcekbB61eVM25Kihim93rE98iDWFxsarpHZVM99iQdAQUSasxKtu7j5cpWeiw3kPdfQxx2rv3AG",
  "key11": "2zRqXqy3TKPMkrM1PwmuR4GoZjK5uEqHfDWsZNTNxqD3k9bzpdwhM5c2WwZ8x1RcAEZZtnF4AAqNAe7rihDaQfr5",
  "key12": "3ENDFP8SRShSv4zirQZaT6Dyw6g6ZJ7S1Gi3Xu9seAVKpYMR3ajZ3D7262eXCESrMzuuVpDzW5K52h6RCFjsLnfQ",
  "key13": "5Smtfk1PyZhQwUDub5v4jnCL6RfG2HjJtGRgVv4F74os1aq6GZ4iL79wKnTLFUoavQtEy3n6m7g1P7iwrT8hdJzr",
  "key14": "4udMwy2z2ctt95RQfEAxQsptiukP5479ygR9KHwvKEZwsTwXfc22FsMxhmEkT5nrixzyFyXiNsCSx8gXuvRfpJn1",
  "key15": "4BRQJNHb9nh2M4Esh5KiSf9ZsoBZuip4STzRybMBCumkP9ra6t2eiNeM8uivQqvaYpMDgEqewXu7AM9LaByvGatd",
  "key16": "299onAF8hSCwx5uma1FAEDogcUCUwWP6HpZd23YjcMcPPwd31oXg8qWgKdZeqNaoaf9kzc2yLuDmUF4aemZMAZXQ",
  "key17": "4sx5K3iazE6c6dfQvaPomkkco7eTooSWhiu43xtsxYUF9M61x8DKkiitWW47EYvngXfAAeiW1BBntQ82DyJaU7XF",
  "key18": "5oV97hL797g4ZoTDwimw6uhJFxA2HyvFT9BdV2LGu3d419WgocdypcAyUz2VyNKDy1kja89QHviRGqUTwsdLcbHa",
  "key19": "gNdCneu8baqh1EE4dKBNqBQmEvqYGTJQ8xZ5fLP6CQB4yceiUipkzJSRJZyoTDXHaBKZAtWvoJcCHe45bVSKRUe",
  "key20": "5sqLBM8sGQJQAcM8Zud1RRw73sF6dJgo5HkVbYsLnUrU4QshXY4pFfmL1Q274SxzaSMrbTpgetYfMwfaeNscjCbB",
  "key21": "3hd88gXkoZ5jkFS6tnZE4T7Gc9nXXZQK5GUXsZVZHk7niGjdtpC5es8FJfMTYfmFTHcsAbB9ccXBs9P2WSQWEbTD",
  "key22": "ikmw4nkTDZa2czCCkxaiakxsLu52hugwgf2uXj9cm5tipoKsvyhr14Y78dx4hEKSCufwaq98wNmo8VALt4ngeMx",
  "key23": "5KVdyDAN8yBDNyq8pnWZQpaaf1CwDS11tyP2jdzGjXrrFgnCVyB1urJdukpk8CRi8QiBLFdQ26tKkEfusomLYVxR",
  "key24": "3PLrzxeWxYus21QCVKpYgMuiDXXkaCix8GLKjkz5GGBJTpU87fRQeDZ5h2852LJiweKD4wJDfbRoqYupzL6qpwei",
  "key25": "4itkxuwxrELoMopFKg8tnaA7N8YJN5fF9mXUvFrYu5YpJhBeoBGtbFucSynZw522CVw97ymXip92DUVdgBCPurFZ",
  "key26": "5tDhVNWLYNZkPaxBzGUhr6ZYL9tMN7xKdxTa67j3HBCWxbT5932TMyUVkBFGNofDBbY6J8QYdAJNJ2W68v2oaNKd"
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
