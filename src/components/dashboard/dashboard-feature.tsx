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
    "4atjdAskhmxie4Ttq6JkitY97QjYA3aJFiZDVNhrqqmzQFNL2W2wvZtQstaQJAQg9ANMCXF8UJHhW6rim4qWY1iB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NpEijeY3qvJFswSL8ysscAKGoWGpMYMpFtoJm9Y9i68Mu2woT7PHWaxfnQJ6BoU8EnUz4iEaBUn5AwsGS4Rzz8V",
  "key1": "4vhokRgmPkWmRCoYFQmv8qx3TMyd14eMqVMqEJQk8oUoabnMgTQ2Ky6wAi6rEaJKbfDsSjd188Co3gXPDTWqEKA7",
  "key2": "2adEPxvKH2DGRakm1aShR8tWhEt7ECN1pjg9EWXLPZ8CRn6tFWhnAHLsUpybiYzdDPjn6nBCW5hTXLLqAM1fUy4R",
  "key3": "5pkYiewXQJUbnwZUnsmGxSNMcppDydxvZ5DdXWjoEcJCuCYyg1nwEefUKpYB9T1C1HZT8LSAr8YXfuDLX43C2Gu9",
  "key4": "2wYZqVknMbg2kjd4GM7xmEFNvkEcx7kmhfcWCzUwpBR45oYwsH6ZU5w2vrfrtrXDQVxooEQfznM8sEcXXTmaWkta",
  "key5": "61Ku3mD2ziDSfGBuWiYe2XuJC2ZfBz93VBEyJqqGWScGKdGTsksytK13XXHd7tBQWz1mu7tKbCp8mgiqmZ5i4jrt",
  "key6": "KXqDFq4vdAAD8Sr5sYy1mNtVXMjZCHMDGoZ3zjCjSnMEubYvyuL6gmaLHV6NM5m1vKA9DUeprn3Py4cXExnR8fz",
  "key7": "4YXcuULbfjpXMprztGGj6R816fDXCaJrpH72rBK8qXkbPdJ5MKpyjybNXzxXmJ2ydyx9w3CEBixGSvkc5wUh7rQ5",
  "key8": "PE2198htEvxWUshGtS3W6P8Cajn7nUGFJAXo12hTMSnCyfC6wNqzPqzQxBGFybL8nVe9Mt1NMhsk2xkto4Zz3eE",
  "key9": "2RfheKgJHZQnhsFLpjNtQNvwshCa8HEa8jyftTYeAs36KDrfa6YG9JzkVQmv7ym3JpZvNsJibUdasnrK6nYagboG",
  "key10": "x9M4SCMiSQpfrGAgyRoNRAyq62YDPtxsyVuKtX4EuKDzbuwS4WfyjMaYMhMuYHixX5MuJL9H5azEfZFT1Hp8vWm",
  "key11": "4mqjQPcL2iCzJ5PQ8rS71YubxhhkdxUr36zxD5PYLEkE1x8yPp5qbYiZ27irt3PijRxYpTjAmM51ZEZ6QaddQs4i",
  "key12": "2fTQNFPoZEmkeJqgmuMpBMRPGT6kaDBK6njVs3gWgsL1k3M2eopbQkaS6E26kYBfinnTGPh64L1JS3KvSMb93xJu",
  "key13": "G2DfqewGwkt3fXE9R6QtDNKSQjzVHswmSGX7PPJukqj26FS9zrQ4MHH1uhyx9qrF3P98arkPkkXMbYXBoJaJyhj",
  "key14": "3P3DkWc7C8c5iAKfkoVtgiPdMLnVqpRbSjhWt6Hie3WkAnXrRVNDeLUXesB5maPLFeWLME3X7vS5Go2uF2DP7XRm",
  "key15": "67YaCqQe4dZdovYyehZyQPCagqT9nfesSMTY93jDWoyR2qW1ASAdxEkYvunagVwRmUfV2aPvjJ5fKYLyh1QATPSz",
  "key16": "5wNsng9pKKEctP9SE1ofR8JGdMqoRv8EnmZKxPgibqiKFKjGCBgrEK2KYzajdG9kvWedKNfDbDEBQ3KTojFnRJUJ",
  "key17": "5YaGcV62z663zD8NCRun23nRnu5Ek4DS5i19ESmXHRpeF8UvSzhto2MFnVH2ekUHbPF7KpzYp8og3jxQgR28rdSb",
  "key18": "472FSCspT86h73gbm6b7pyoZ7pSrNcMNgF7t12hDE3BFVZaMH2MvWvnUQtYfgjzthN9rozKjGDTYVZ92qo9Q2gFg",
  "key19": "2X7UWwTUycgcmavPxxLTfQ7ZWxaRKDVC2HVCVPoXNgRcCZBU6MQRyzzBwiK4ivJnH5hgBxUYVhVucSP9w7vjjirD",
  "key20": "4uoCqHWhmYynddKpkakq4vWHfg4aAyDkudSw3Xbh1BiBxS5aY6gBA8TCGVuz87m4XaiiaZJh7JjkpnJREjm1YBVY",
  "key21": "2VYzxjA7p12gSdqq3k1ayo38bMzq6dJi5YkwfxYVYY9EgRLf2P558FUurAVD9mh5b2EWgubR5PYF1UTLgz4gp3vK",
  "key22": "53VPxYJ3T91GAgb5DU84SWh8o7DDJDhSn5D4TAKfXcWEbgbFnbNFFNHZcZ3de1mDqkULmSsKtf6Dchcxr464adBH",
  "key23": "3GznaV4HC4QoEYAg15Ja4DMAtk2mcC4PLLPu4rNUSYYDn9LfNKSND6WqZcfZqcr9zoqmC94BqxDUVTqQTfwXoPa5",
  "key24": "5HjkuUkRwuxR67txQL2YfHWRbFmDYBBd4i8HAJukRW7X9hNSeKYBpwPqbQCdgAtpT6ivVLWp6g2ZuiZSW2MFfEEx",
  "key25": "3qw8qiCiWf9X1AT3UuLDmhWHYVzrpFeMa9fdnMymiJRZR8iLic2B1othneHHBaZzfMkJ43jUf1z5k6jiHFiKbeyu",
  "key26": "5fRXTKQGfMYp9nMn537eAdq9vvw4QuzZtypSbPtGUnTTkoMeFL6uZqR8Q2q4VK4HzcxnatMRGPGZQk1CzJsFkjD3",
  "key27": "4gtgnL6wjxmCVLgB5nh8NreQV8Q2w3LRV27wS1uwkyvgdJpwCQxgR5BNbQufC7jZE3YTjVoYy1XSK1NhzLiu2SPD",
  "key28": "4iAyM72zhBoXcAcvEzXBNJca1Lw72JCByHmsQL5NZk34sdvLnZ8UwSikNVqw278hbJo7pdzqENoNo8MosfuWD57x",
  "key29": "3niPQ9TQR4EMi2cSE1uQB75HDfdzn6Z7p8RQfUGnDKyHBBJWWBdicLEYrdGj8sgMV6W2vbFDJENXPYCb5GY7puju"
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
