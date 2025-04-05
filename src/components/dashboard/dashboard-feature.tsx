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
    "5B2ztfGkpRH3MvAfpL1EVNuphk7VXdbjyNZmRVVcMjikWy2CGYSSm4HCUNWkCmUNHJAtpBWJczVmcLuq2Rfcax83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AugFHFN2NEx3g2SgUPcnYYrzKvGyBtkptJP3Nk3n2niz4f8XqMuZndcpKhZpQtRRhVDvzsw4zjd2TBwbD9V2GQx",
  "key1": "5kpZ9myWixNn7Uwbsju8k6v7XqmcJcEgYDgiJcK1Gu5NDQcUo5p5cRMBEFexs64x47M16DASqVfYPCFnf4eSBTww",
  "key2": "3H9gR2dCjNQ2tdHDuxx6hnnTVozzkYgr5yZKLXryQFa5hP6FapraHCexCgop9Rine5nTqZPVYDK3DrZu8UgLjkz9",
  "key3": "5ZKE7pWeQJAd8jUqYXQ2JLHmUcy8szSFVj1qrQwJ4C38uej6XTE7ko7ujCaMxcDeHLiJzSJCcLq6NDagW76AXFEe",
  "key4": "2DwJYYMvCCZN1VHTra859X7TpsEPQ166KjapFFTFvY6K1d6LiLHXic6wePxWx1tuLGrC2EmqPusHoebKk7jxq7S3",
  "key5": "5zv9JMTf9L8USi6zyN2AZCLYaJM3jGtMd3nqcrk4jgbxDDvmvtaJdg6ztD2A6Nx5CKUtFRu5CSAM62QcUbm1P5NZ",
  "key6": "3fwezL2QjWuN176jKzc9nwF96nQYi5nY3EVUQFmprwTmx3komCzD2KJnHKPq8EtYvvPLAW9mTQoobPr17GagjwpY",
  "key7": "44ugHahVHxPx5WXKXEEjiBVTak31yLA1ZNjHMi83mKcegVkTNtpNMPYPLcnQMgr3JQGf2sz1DMJaCLntqYq7K2iC",
  "key8": "4uj7kPsQQumext2ada5Ag5EDTCxJ6DhA5jpgs849pajs3XsRqmdLyHtdX5oTQEaBjQNBPg41yfMB131CEqKdzBdw",
  "key9": "3HAMncFazi8AzQB17DmtdA9dFEVJzDJitJu7Lsf2EJXDq6KNtPzDDyGEgppkF8x59QrE3fhafFLRkr9Hzh8T3ysa",
  "key10": "2spZSfy5KwRVnTsUFk5c4JTz9WCTJTSCD7Cj9FuTmbiqv8dk22jK3NkirAqMhkWywSTSA9BvR4Yq9VCfbj9Fu1MJ",
  "key11": "44VkSaXZ6V1idu6Awmskwy5gY1fttmUAfqXSSGLpwJ9iqhGcJLDH41AXyzBVToxokLaGrhhnvnw2uhaEPweeo28D",
  "key12": "3aQWJATYJbi8JghYSshcV5nQPmUapKo7iFhvrmkaV7ATThZwveoGKSTW546u84rMgT43h8aaUdtf4fnH7AovLGbm",
  "key13": "4LevFFdqYvJTm7yZW49aF2tnryMqkZ6Sbw6dmtivM1XNmST8CoPPx84WYMrHXmkR1ZKfh4MeFCAcdSpxobnu2yRx",
  "key14": "TicrxHuet54tiP1RejFwn78sGt1LE1gDpWMW3hQbgCuGj7XXMPisJYwEWCiyoWGxWMiv1XYkp7QBthrHBtKx4t8",
  "key15": "2QcHyfF6n6L1JscQPkuQser6JrDW8ZGZPcKJeoAGwcatidz1QU3rMAf76beJRbeoJknndKwbiVxWEU5ca1eEKq96",
  "key16": "5nooVjbTrtxtSbAPwqP4rtzTV8UcD6wCY7ta8uVWhMm1zV1CmH9itmz84Eph11HAyk1qtyEuLbz5EKncBvM1tEDY",
  "key17": "4zdL9LrcXQiCC6R9a6CMMFqXWPkyzRtR6gVmGrd6NF6d1Q1kFzWpnVjaSfvM5Ugz5wnLveF8fcuGvFq2igpwUCiY",
  "key18": "4z3kSxKo5rAqueqmtmGkKL33LJovbECHxnq1iADWgTm2bvXRCQ1LaSmKcW4JnYoFqfPeRoBG2E15LTCp88W3hpqz",
  "key19": "5dZDmHuZr5tiX6Lx73JbuUN6JDoHYdaJ85KUgKbfw7EodE7QwoevgrvSd3BSFUDaBEWvKHw1TAdBSMjrYRuBuu84",
  "key20": "3oWPJ1UQHLgKKvk13DghWijapFLWgCcTsJ6S9utHDB9hAwfTDt3xCw3tQx1nzrAX7pL51MDb1LBdNaRdX1SC9Pq5",
  "key21": "p6S1CRTYUQKhxUrmV7Ng2eTYXagJ5xWGsVzYmJP2bDYZPg3QDhdZnmSWSePJrSTntgbetoeyWd8rWhwpxviPTND",
  "key22": "36zocaQCaKwkGqCufNSJKaeZ5gWWczu5QueEy2S2oqf5JMfaqG4hVNRPEQH4P8tLQjyNkugMjYN18EDKTs5UyGag",
  "key23": "2pPVKn9rsw3yEpw4vgn5ZT4SRgt9qMYPiCKLgPraiEhc8C2MoVRrq1mDvE4gQ14EX3cPgpxDJ6D7UyDgdE5DEyV9",
  "key24": "5v8WUTtosyjRoCFJURbW87ygcvnwpRaFyV2dCgRumYVN47N4Sp7VaXizauETssajYknbtnndeqrxmVgY9QJKuxc5",
  "key25": "4LnnbF9ZdDx8ykup27uGAQdmWPhXJ1CnxbWjjHYVCV6kiKqRyHHW1hDKcQe1vWmNg5Bno745mZFd4iUd6a6rERXU",
  "key26": "2wwTK3eh6tbJfeMEMaibLYnFuNGgUpkJ1QpS4RxXgYA6TyrePaWoFggfzcDUZMMubbvcFx9k7PY8HMCtFTEAdVUY",
  "key27": "2KKttHYQrQrbaXFpoYKuN4wH23zf2CB1Vjsht3Jc9d2YZsbBUkwawRFKYZEfjkxudKL1VnWeSJQW7NMY9VRgLmNG",
  "key28": "5vkK4DKd56mx6VYt32RWd3GJ3uVpe6rFkekb86U5SdQQpPSy6YaPt4PWBzp7AC2Yi2kiDirtjQj5S6cHV7sddCTu",
  "key29": "34m8KHAdCVGSuce62jA7y7Asf7NNKLksfuNNWNbrzw4RQREcrKs1wAdG7meyANryh6AKM2tY72hXtuBTpXqgJdCs",
  "key30": "ZV3tGwjLcGit4f8VtNJjHsMTnYAP1Am19hKB2CzPGGX3wHseF3PNUThSLCvpi2XMBzGrtqagDmqfPm3D3skudBr",
  "key31": "2UAXnnqg1BCfAGw4Eki3zC8hax8Acqu3WQoYJCZ3DMiA99CA28Do35jT2EmC1HGKSEUMZJxS6vkyA6vgLLZNaZAR",
  "key32": "2p6JRHqKi5mX4yZXFkxUyvBMmKDrHiGNX6xNFoXyriihnq5kLUimE6xd6evQh4vvHJmUHVSXKhnusqMCZm3tn8qf",
  "key33": "5dWwyNqaWSLxB44ZExoKqNVUxskfoFgyZX15srVXbqVyCqBdXWsXqfrpyDt4rZbEHdxrf5B63cHp62NP17jHews6"
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
