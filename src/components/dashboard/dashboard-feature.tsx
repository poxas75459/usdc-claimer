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
    "3TCN7kdVrWr8kgT6xD5MwbSvWwtXpeA7Emay9xdpp5irpDt1K4ehp9d1pNaR8sDmPGp4pzqjjj65W7xubPRjK8Er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Rd5zBqFMeiLsmjcy1A6zxFrVkqotPDwJMnKu6aNRoLnx9bVSNBLoNPm6Q4rCzogKGkxsufrrVjshXjd35FQhMX",
  "key1": "4ERFzCh9KoWTEtowvb39E36KyCPu6TjfRdJaN6RfiqWnxNmypKpqebcR2r78hwvVNWjLfB8rd26nkuYghHmvx4eH",
  "key2": "5t6KHWQc9o88WPtJr5Q5uyu1AiiixMf3yk8KaMwYY9iwa1hXjm4tngwgaozU66MqA19PEG5Um9A4gaKKA6Tji3WD",
  "key3": "ovEovhoMxRaq9PbvEcnB62B67MM8YwWXhfHa3RCiXjh45gwsvZZVUB5wspF7tBBGeS963uc1wzYF5S21pcuyMNQ",
  "key4": "5cNcjwiaoXeFP8b4rZatHKD3vvuf8QXSBYSkZxKGwuqBrtP4117zq2qMhuSYYwWrwMkqgn4UhUPV91Whmg1rcmNC",
  "key5": "3zgL8sY9SNWk31vVp3NK268Yv1TUVjnqvcS5CSJ7qiJZjHSDGY4mNJPXNPHUHzrF1sN1k6h6sFLMhxWMdbW8WWys",
  "key6": "5KuYGf2rBJ1pq3TXH24AyinzMy5hiukzZ4UASpEtepbJgkjRAiteW48PatSr9hiFkbrr8QQFC9BkgbQBhLy57Ge6",
  "key7": "EWGPZ4hc2h3RPGhzHzijgBVeLirtLkjPGgPNJEU4HU9UE3xDEDYb2VyK9629wT4wZoxfGsd2sozxXD8gaQAvirL",
  "key8": "c5P1LJRgEogkiwzjuDMANdUrsMMZHxHKh5eWsfPQraQvSUwtGb6NbdyRwb9wK9gMCtswHrHDwZHYYzRzwW8PqMS",
  "key9": "4orektiWxX7AysAc3hW7yTJoxakcpJeipo1jmYDmfxcatjN1K3UtxVZQkWh9czwth74M8AZ2ed2vhkQAKrzJzWPD",
  "key10": "522uEPcTBSKzsX1WvDVdbzMEj67qC6bfMmShraMJdUzfpP32yThqQkr766CEBSYd8f2QKiRrY6cVvkHTDxmwSNNo",
  "key11": "2SLdywuGDmxPycwx8gKaYFYeSykTzdkWE8ngYXnhVRJ9thq8fYNybBd9e6qRaKy1imipK15MhM7yq2fcR2mQakBJ",
  "key12": "4DCCBiW76tyZHCemwUdMnCA4RyfgewCSCfLyTiQojH5Ku479hXbfTEKk5yG5oRuyS9Ap7WVMaRoDa17m3i3MgdwN",
  "key13": "4wpxYBgxpohHt9tuVZMBvmrkExSoNckKCQvi6n8Ai96MDczQmV3aWVtTcWDFwrxpgWcVhR71PAhMsmNesqAg7hCB",
  "key14": "2EXmeZAjcASiJju2X9SQborqXNLavUKsuj222NBJZNXLJ7txL3QhNhBEYszkaEVUz5ZcCi9DpWJ3RXodrJTxWnLc",
  "key15": "3A4cbfQYJEZjbxkRCpc8YaydXLz4KRk6YJaeJtWCekvJ6WjBhszwSPMo3fHDRsk8WuxSmXvGotZ2YyzJFPg2F6iE",
  "key16": "4UDgKw9SiUDTfe6d3JE5m8PreJyyTPBFGGjVseCbewi4fFxio4MEzv651WmAxJnWcSqixhpgV7STXob4NQ5PwbsK",
  "key17": "4RaBnPDB4xQh6Sne7KzJWFMJ56o5BHA1bq2FhEcwJDo2ZFyQxSNC4oxJnk59XWmnEJMQPujfTo4JX3dsimpkAtxT",
  "key18": "642U38NZ3veC8TJbpU6q2gWRznwSfq8MtBsMh8kr6HaQQLwkWLsktYcYpfsW4niYdxGrXyBTvBdvGHmXAt6V3EB4",
  "key19": "3B6LjiQoNo8QZwYmvBzwc8ucZzxiTwk1JG3iEywgqVs8n2Jdc7ovGpWUnqhP38XnnU3o8te9QLCApCeMm4geAGZs",
  "key20": "61pYi5mf9ZAcePfCyZqA5ghC6HbJACuKmFv5T3E2RBkX4AdTFY5jiHyrU1YWmoxDoWCY9rLZkt9GaUHskoaTGiEy",
  "key21": "4KugY5F65N2S8Cf5Hm6S81vokgi3WGjy4uy4n3ggktas6yS9kqjeWcc6MU8gApwHKJU4LcRt9BLg1Xq34AYAFwf2",
  "key22": "4vAnbumWpQ5ECov3MztLMWNQXjLY82p4dT9ARj2rPR7vDLRMAxawUT8zvp87pDe3nch1LyPoK6j1RTL9BdKeXpu3",
  "key23": "3NrpjtNJVZhBrBi9Jeso3M9cvAMXBPkDXfA5wAuUYRqXXpR4ttNRbyykNhJbrcEpeb3bEvoywtNjPX5Sdh2LD7tj",
  "key24": "4sDoEhVYxNzobFn2DYAsZxnEM8kEbBM91PsRCoWPHQb925VyLPEVDvgbtnKA5CjTXDBxXtH6QXKqJkLxteZVoKTu",
  "key25": "2kgjcNkre9WTe6jgzrpaHQGP49v4c6a8vPRXAtVrq3G4mugGNPyKQMhp9NwLeKZwtyK8gtjEpKizdsefUC4KgwzD",
  "key26": "3X2pYxMVbtVmJpQYHYDUmNJpkVLY1wnRxYJKZiNGLQTW3NCJwrGV7jRPFrVKqfNpA7f4gWKzwvA7NLtbAqHecw5L",
  "key27": "2gQ7dLyzzGwQhmnLvSPretvxE7vCnf4abS6GQQ6yAf8WFdKHGYeZpBu4pR4Tb2FrUn5yVcPYZWXgrL5KhF3R79Ch",
  "key28": "Fc6TrfBaN1umWkbwsScYeNDLj2gDy7TRas37LqVHPdgrfQz2jFnKZtVQFyFp8aH5gwiaLn1SLRf8Ro6ZHAUxutr",
  "key29": "4eDGGj8Js69QYkeYQsYuXCNYWq7xbX1gEfLDeVjcrUiQRdNXK1bYJyWaUJX8fSEBKqzTpMDJD5mQkEc47atSb3cc",
  "key30": "4zmKZXVZpWMzA7wNEveXGYL5FU8apTGFzxoGBiKchkuyRpgtgf7xm6HagkjdEKgwWJ9jJjAc8oirL3EUWbfXbd56",
  "key31": "2fExtU69vDRgyuty3w76zcFNxb6R1QGvT7ja7tLYuwsudjvHBAYHVGnd8anBUd4xmhqbuFfD6nVBdB7GFtnFSK8K",
  "key32": "63L7SyT848Hvt43CSAcCawdDnkqPntrpm7UBCxA4MDB4FZspQb9cCkxAmD9HBbfEtHMsRhbrkjzLRzVw1Fba2MTT",
  "key33": "4uvchNTa9gt9Sdgb4aqNeJ137oQvgcmL86iyLgnunZ1MAZRMY7xxjcY4Nu9cibrm8G6zyeeKPFZFMxbu4JsmcWdY"
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
