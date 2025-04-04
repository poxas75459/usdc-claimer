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
    "32GyojQTPrSuQgRt5CGCBkuDBA2spmKaYaoRut2xdAM1Xwm8W5XofAao4KtZ7AgJsUYAvQrkiHxMiVyDAUY3WJCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CAQcmkrVYqPrj7FxFEuwAPrcBkZpcMNua6RrqrKmacvLUj13BXNx2GTbg2uM5nkwqUBcFXXHXZimiRrMfBHdoht",
  "key1": "2t39S7po1PWU6aHE4DmVR8FUnQsbY7Anvkry3KDZApnsyFfdtCp6cEncDbtrh9A6ZRdNvdbdNNcKeZP9wtUXpheh",
  "key2": "49RtAQzQcjezn4Pn8KuR69V7SFAtBV5AtruJ75yuWzgZ11VE3BCgAZZK4hVf7Qd5SiEJowQjgFNzPWCbMch4yGHA",
  "key3": "3ZJe76EWWsFPHpvdcqNCLJ1HXL8Xf9wrVchc3MvQayfmQkLyPvcenhHsunsTg5Z6B19uRWqLZ1XNjS8C8C6TmvA1",
  "key4": "4eEK4KhQLnTaXTzpB8Th3gVMQ4MN6FmxejLB1NQseyqeUmWUVrpbUCG8GCju8h4YkECqzmcKS3RmAJPYDGum3YFj",
  "key5": "2HNsFAoRZoEeWkfsM75JRjPGzWS1ZGaxyX6pEKbC8kALy17eiy1recqFbxcAoLBUHwVZCxn1e4VdpZuFHj6vB7VP",
  "key6": "22atNxxijZjQSJ87YW4zeYWCHUHREYeSsFW1pAPpJJ1efh4b4JyVZY2ywxMFRQdgBHvR1euZTmkTvpXS18HfDt5Z",
  "key7": "3VTtHmNzj3Aqg5R3UXGmAWrHejrLXe6FVN6TFnASwCkTkcfNGUuLEozXCF7mHd1H5YLjxekwtssFGJx5EuVFSGds",
  "key8": "5qimtUZs1ETG6TjQGdTmCnYmX7j8TGbHNKib4w9VgoEk96MfaqpPf4kazQ6pjtmHrzLUf4UjFQj3JBhGT8oSFFFB",
  "key9": "qmgGWWf2EniryRuvdpRD8iNF4d3dqEChJ4xHJhMX2mszbzEawX3G9UTWR9ZbHiUEhkyV2B9r9eycZGnNk1jHmyG",
  "key10": "2r3qijNvuxnju2g7Xj7AxGmP65EMq1H6823EgfhBzWDoyCc6Y1Ga9W8fcZWdfBUxhcSKzEquBu8gxADTasy2sZAz",
  "key11": "4nexHjkJxyFprQ4p8fJy8qPrtiv7g79bF3sY345DDdGnAXyD3Kpp316Fty68HqCXZBq4DzUj7UkXx2iGJA1td7on",
  "key12": "64PC4rkQf9yU69zomJED4YRzjGpVoZ6d8FLe8Ve1YGhoFLdhfoVFkgAMFKAxT54yWAX4pVjiqxXnHeEZN7Cxh6DK",
  "key13": "2TQUZPX9tucYyzn9Q8AVc87J5a2a9GQA2YFEuYXXZcbArEwoNQaYyA9pVJkd17GtCJrbVJnENodXn2DJuaFHv9Gm",
  "key14": "5DLkLkdVgzKC2GbwXvV4TSk1XrATpQs83fp45b9xgoGjQnF7AJvmxqZjtrML8D3Jn7HzxEcaCu45Xas2zTdZ8ciS",
  "key15": "GPLe76CE3hccmtAYLxtX2RmKHmzNN7SShfa73btyEmppD7A6bDFk5h3ckU8tdvqqcwoSyFujX4ZBHqaRHceB9xY",
  "key16": "ED9K42f97WE4a8VNrb7SmJ4nXbfxJGSRZbhNFd8hqyPQWZreeoQ76V3dePKoKMX18RoZ6xu39cq4QrTBnmheogq",
  "key17": "5Q4AWQ6XixJzG98vPRvnHomWY2zcBdddSBJffL9kHitR3YzW2WGcvWGUBYtBquR6EjfHgEgaZNiFyMnpJRjWfjvc",
  "key18": "5NJR3HZZ8xEmqzg7GHAUkpdPg5gfHQ3SESZ1DdQhSAmkxREmDT9Ft7dQurcmy3cuXVfCtjY4ne1QGaSpR9s4M7sC",
  "key19": "3BPbdy6MQEtgYvZL2KiXBKJPgauJsM2iqpZB2P8nFZFEaMhf7b5VmiSZ9zr9WWYd9XBwNkN4qfMwBpHszK8MP5Qt",
  "key20": "BSkVREgyU3iiWtSCsauhTwRexUGEMMjCGAyLxmi6nEZrdvPBL5gibQXatY11rHxDqYw14WXM41QUyDKp6JxNjEs",
  "key21": "4sxy1G9fg8kiVsq7YaWxj6vihWrU2kd87SU98fmdpiHqcEhDyxWG5vz7yiu76X3nxrbHcM6KSSauJ4GagFDYRVtN",
  "key22": "4pbT72pA7Sk38Nq2wATmBgrw4qqv2rAVpB8PNGAkayRFdZN6737gdteq6msVcQ93WBroW7zK2skXUbXU5snaoy3t",
  "key23": "5V5Wv3BhB3z39ZEavGkDwnsv9f1ZzyBjjM3gcAffdTtdAjtCw7Anppu7WFg81UBEr28SxDCBgHzQTYBvh5djAY7m",
  "key24": "oBvxNPeMUG5MfUB4VUg4g1PXNqUDhStGqmN7dsk9ru89WWa8fEGqMz3NFBZQpgG8MsMcttbDYAcMgUtLF2VG7BX",
  "key25": "2B6dmKzySBaRPxwmnZ7VAY4KqwJWgpAz2WE1yvMypQPuj3a3eLUPpbYZxj68saFRFrERXqU8356d29AZd4zpqURD",
  "key26": "3JfCqaVnaweJNKWGMwtuqQPwY8rxLNq3VNunrD3RVAe3ncf5A8fYBdTG6uLrtG2Wbb7BtDnoiBApvXSCCZURdEjq",
  "key27": "5MqmfNkuPx4TphYy2UZovPSiNs2q41Pj4fgF3sbSs2WwNMRKzQBt41e12b65A3G3SMnQqKB9F42QUmL9adsq4rzT"
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
