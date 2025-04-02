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
    "4fQRA12pmCa9TtBbTpQmHYTLqyPvP9JQ82PdveFJ47QaHVC1ciDBr3e3Pf2HmPv8RVCBDpwCdtsiBAG9Jyz3mjiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51oqe2KqCgCp7vn4eysn2hVd5trFKSEcRKfhCcAajHLyTM3Y3wc3Vg8F7Dp8qumYfKZeFennDEPuobH44GFvGJ7q",
  "key1": "4CzjAGR1oowE1LDP6CjJKGFk78bm4A92x9aJFc9aBnSQX5rfXgQBwnpXTZpx1FbqaRPRNfgBXohohQUpBLvkaUN2",
  "key2": "2ZDgTaPD7J2MVykN52yH1oFJLMQ5PqE1acgz8H1JHYL2EWD68m6ud6LfgySUKVN71MWMyt85ApaWqJeq7E3FFAb8",
  "key3": "3VxetqwGhExYVnZnQoN14Go7r3NNdmHPCzdLiNptmFweEwCQoYPp1YqpXFNa67BgvJqVANXxoquSVa9UbhRX4tMn",
  "key4": "62GRXoDfyxhcy3EvaybPtZnGKfHYL4LbuAWSrYaur3TCSr7AePzEqWpbG4BuUQr76J8TUrQFU1WLBLDdVDxq9ozF",
  "key5": "3mBYdmp8WRPEgf9SNcYf2w6YGbtKf6RFEDQMef2EaKAiDRfGsF9vsF6quJRwuZa5cpmsTXg2w7RDbrDdZThWARSF",
  "key6": "5UjkPQZeBLWgUAEqNBKGiWYwtDzCUa1tAGZY7KQ5BSMM5cSZ7fe49V53t7P478Yt5a5i5kNUgPA8nb4z5ZBpYnUH",
  "key7": "5zdja25ZQnMqTzn1dRmEgpAfFBt5VsmMABjM8ysTFkdDx25XzSSftNJUtwfdfhbif4WGmNfnbv4KKRkqjDELaEM5",
  "key8": "4ET6pNhRECiCPHPKm1Md9Jw4ocNiVP79c9iBvaCJHb4t12d1smahLaMRyApzVwufKJTs3Xq8vWk8jyLVTPgXHRQq",
  "key9": "3rDL7e73SiYHJccJ1KB1z58q3486rxzfwS1hYCu7E3qokx6xhRwVD1Zz6SLFU51r3ZQJB2cx9mYqUkRcu6DRRXtf",
  "key10": "iPDNgnH2P2Do96fcT8JAmy7T286iaBYU3sdZL7EsKutYjhAbf6TzLoNsbHDGgdd7xh1ifFHpXqMPLWSo9PXP2Ac",
  "key11": "gDraKDrxWeCMmU8B18qoqjLJi2vZSe3v4EWNEB3tHj9tjgBoAG3ksXXw1GhpEW5rkv75oLvEHKmA552yd6959Di",
  "key12": "23TDp9qFUaFCre58zhgo7VBe4mZa6aTWsDyBrJR7XkqUWSS4h8CLfrssBf1oVxDsjbuoLfUb882cYzk8xj1MaMqp",
  "key13": "2FBcNfqXhF18TKaAPMPV7edRxh2o4uBqu4nCV72AkQwPobkrAez4cqDDQcDm8DmQjSf38TCgWvQ7fvRuhnAC1SqT",
  "key14": "thgUqXYB6pPpkrZVVhbgagcZ9shzbskHj87XCbq3nR793bvJV1aFFV97KKJjkBnSCJKNnvfj7Awvx786Rc1jsYK",
  "key15": "2pH4XaUvdVxX5pfiJtc3btQWzsvxRuDqKfhQK1v8qMwjd16GGWBWJKfmWXxVGTUUQ8C99tw4hqUc2NmyZcDKx9cf",
  "key16": "4ttmqSfJgGXDWECHc1mWaErbkdZYqBiWrU5VvE7vKZS8bXVknaY6gadu1FK95kNS9LCeUcJoY8inoUUezNQE5eaK",
  "key17": "61DEZ1baCVxjKNBfdo4s9p4U44n7vij6HGiRZTsRKz8f2hpgFTbb4RBidtNkK8GTAQ9miGdKrwiVV81TGW5Aqid5",
  "key18": "2FEr1GmV8UmXi5W1kqHTth4a9RkjtZ57CeBQ2QqnnNF2VdamnyWPg2hMf7pzDmXbe2wAUdutCRb1z4QCsNKPssD8",
  "key19": "5yY7eWvEmGhAXw2nooFaXJ2FGhR281hnT89QkbkoKB4bxUf8gzzpxFvbrydWVv5WG7Q7YLFqccqpigoDkehifXW5",
  "key20": "xgGtRKNZMaxA84CyPiU6k2ydA92H7t1ZJbnzuy835Bh9qY6jqcBB1KTtUMhd68DEm7Fxse2sLHePiDaG93ve6ce",
  "key21": "2omnhVmRuGWLNTcKYmjEctfimV3GrvihYYf5zKjoeCE4g1EfXJnpncYd8WUzzXmg1i4XUCCsqRofPW1BPweUN8y1",
  "key22": "48waKonfQb3cc9kNSk2G7QkkgG9RUncE1SYybjn9tPUcTxtogET7MqzmuHnpP7zobEswvXCkThQPDaziv2m3KXbf",
  "key23": "5tZmdD8Q9mq63gf4FMM1qSLfKRUP49b9BPDpAheEGEHUNvmVdsF5kAKriE1tAu5o912jbZbwUhZdRodQn3Wkqg4t",
  "key24": "3qWs9Xyeme8voLZU46rdTyqpkWhJzMNVurCFuiRBoRSTXKFVx822nw5EEwiNME1CFvb4bZ7gwWrtszczdEgscWoh",
  "key25": "3Vwq9dAey9eFd3TEb9ABtbF6XpwCGuL5p3VyvQQpqHRs1JyGNmS1aSpWXn88E7yFR5eR7QjJFQDudvh3TNcRhAu7",
  "key26": "3enVXKPRm1JjSn2GL4Hv9aRRtYbY1x7BP3gSBh5ANTCbhE74o59qHPmvY7NC3SrjFYrfhpLBoUQTkSYDQs5MbTzg",
  "key27": "3ekdR8JeLrwLVmtFfTkEHAGkmS3dziLUCcZhbKPZVcjMNh93AuRKqwgQPSHKwEKX4skJRvVCaEUsLbGFDEqKYgNS",
  "key28": "4rzSeZEBKWbQMMPcLaMe4fj82b5cD2FJufgBdYzKq5WkBKsdkGGFTrsnsoaoZLq7kc5HTGcLCz6mXwJfZpnW2jTA",
  "key29": "4umPCANwFP6P3fWHZss6ActmbhnuC7y4cha6uzPprnKg8tFnP7LUHePbPDhfzQnWtfw81hqjHU47ebw8eEYSTbjg"
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
