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
    "2isznpcbFh2GEJ7W1386yGg1YQFu61zvXheapWQkhNaK7DpAbhHrc88buSKjVvU9wzaYNvjfoQmHJi9m5hmzgWL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VPgiSsajjccBmkrYmp2LUbyQjD4wtnAXBKKFnKkz8W15BfphbnsVM6vrt7fRrwgjcy9XqcHfYYHYt3hE4Typ6h1",
  "key1": "39ocJTcaz43oF6YhrsHxcWgejfyxSz3GfWXcyQF82TAbMeje8ea5ykyVfw9NYcdQdSBU2YAtr1tnRZGYRVcdgPEp",
  "key2": "2Ye7SzPUAK4tGm4pr6CS8G5kisJdnkF2ewdrqPH33FXV7ckV2bN44XkPkMi5GhqJUZyb1ppZxLPzCHNvVdkDH6V7",
  "key3": "32ZiT74hPifo8o4PCr7MXm3zEo5xe5odTFGuaDt1cRXH7EwtkSdAGedpdPFgkGsNSKaPofqsztxzrNZE9DiDwCBW",
  "key4": "63xDc9owFUYWVUjw4b6M7YCfKHYYCXtLZhd8eKCYZbpxLFNP8xCx6mGEMv8CaQ4oYmN5JjcPgnAtquF7sm1krNc7",
  "key5": "ZSnjkqwJ7eiGwj1mqRjop2cciQPgFLMDZzEVssUGqcynFqDRWFu5R6vhFxmBvsusHDsg37ZvLch6nMaS8CuTFfm",
  "key6": "TaxP5oCzqHehNYSAEieo6k8Wh5SWnDtwzNxnstCDrVAkiG9d8vntwhUEDkf9Dd9DGDqrdbPf7ccvCXY2WeMunc6",
  "key7": "sG1hzgu5C39CoJDgidh2LSDRcWHx1uAqzspPXamWNR9xFPjSbTrLFwPBEm8WSf6VCoZtvpEHWBcFePxbNPqsrUz",
  "key8": "268Q4XiuH6SSgbW5vsKH2qkmDTuiNUfcNJ7EmT5uhVkJ2JDQGGdhGo2V36sr9Q5KuzKJaUzW37pX1pU6HG2rfknX",
  "key9": "2Ax2Gpn6cMX7koqQSypySAmMWxUSBW866NYk8Jz8VCQt4ji4wtHUNyCM91DFyHJXsYimjehRvxfbd6rYJWhW33sh",
  "key10": "2iFhnJrJyEHRqpSp4UUptiR3SWpMYrLhmjJ2EcGVEYJ6GWGmE9kankPmWUfeqSvVbZzgzmVoqPK2TNqoMoH5UgnQ",
  "key11": "hmNPiHdXnmLYTgeYPaV7mv7CXTGXBm7aAH9jCLBZRi34BEidrvTnNQj23uBE6MNf3QBLLacvDdBCfxnezEvd8cM",
  "key12": "CRxm2fuP2auSC4rAAmH9Xe7tB3Bwe7NBj6psCYWyuvBeKjk92JU3usDEHHHousGGvf2YniJkxyB28Q9Qbb7ZWj4",
  "key13": "4RAgoJXcEm61ra8XgeBAoMUBN8HSrAQNBQZGjL6fz35HKfHbu5iCC3HEkQGZKtPKaHdDSwE4ysPbx1ZsiqNvR8yc",
  "key14": "4NYjpGtjj7VNLYq5AXVBEtkp7Fosi75RHTixoBFxVi35pxhK1SaQezfuYi4JQ982RmQysMEth4TmeZ4AFrjHokLY",
  "key15": "ErXqjbAup8r7Yu2zavNbgo7aDTX7yo4aqaT9VTMSeNNnLXEYXc3JwEDmAaDyFgaVW16HH4xkJqNPd6ti9JygUHz",
  "key16": "4bqtKqZsBXMJD26JuZjchLLruQYH2LPgR2KfWNm1GP6uHq6H58B9amqnG4DEcKZaCqKx1L8nnSN42F4g8eHvAs5C",
  "key17": "2M24qTemqdJKvDGfEy9UBDtjqSMYyPWQZ8uCzRfUNZY94zjqD7oDFbvNbYN7Vo5zKptwgvLpDyYDz3dXFFgetqmN",
  "key18": "5D298oD2hrutoD7cvcyNaghhGfp8nNHC4C9aV6DxYL6LCdt55pgUWYjSvJbvcPYeKVhNhKDdMqbWyHj2qtxiiDSH",
  "key19": "4bUueFHqcNKtxWq1YTJ6DLpFV4d8K2h5Kww74ZXPjj5mDkNb3KwPBJsk5mCW4i8sEqq6B5UuimKxPkDcdWbfgM6w",
  "key20": "3tDzQUyqtbG41EKCQMc9FAKEkWX8ev5JHSPTjVoGSpP7eQ3YTAZwzCFmWpr6KQcXdk2Hmi7nPDs5oR6TLBRXBwTt",
  "key21": "4fXsF8t7v4L2hA6gMUZBRjzRwMwkQk1bM39CsWk4JmQqSFVo54aouLxxzaTJ8Ty4nSHq4bNY5hJLd1KmkSE5tfZ",
  "key22": "5XjMvC1ctc7E5JUZLWPahWu9PmihZrPUGQ2KNkkQEKRUjNxi5FQzXvmTecZpzxP2jQWnTGCyi3EaViZkCe57Znq4",
  "key23": "2ifTF3kuektV6oBz4danuSAzMhtpTN94STUpHD3pepPGLf4woCmDEochXxcWK1VnGoyc38evZNKzVwmfMaDogZhJ",
  "key24": "8MDTeCASJmnkFxh5AuKLqSDe77c7SUvfBSr6af9axxobBHpuT7jgxuE8ac3tAoKSuqQse5UsfRH6SfVyWSSVeQW",
  "key25": "3ny6qSmPEk41K12z85RRfW6Qmm7hMApkMb61KDdJXbZtTUodv7Rw1e5aap5DyGhxLmDDPHpRgwwjqdZH4dNEBXif",
  "key26": "5ohAuXUko9rkyF7nb9WFGfWXYpHVBqBp5DaTa2sS41bB1a4vJ2m7f8NoZYJ2quq2brBDbCBbpLmmzLCq6kqbtyTL",
  "key27": "2vGGLt8TLAX8H2qz4Quozyn21HjAbXFQybmjkio8kLNR3k9aJinDSxE67NWu9HyB8DVNkn1xorei2f8VHNuhQUCU",
  "key28": "5X3kpcrNUFgmH6orTKpaPoXUDnxbsbBi6z7vbu21QkY7UuBxNASWbCph2o8hJ3zVTon9CDHG4YfxVts3V2nfakgA"
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
