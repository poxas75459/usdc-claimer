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
    "63eKDLjarQSiKscs1YR6j92u8uuoXvc36PKAvEbmwHwxnCo5yUqQvsRHVup5BxC39jn1mkSR5SwwrwRWy2fB5zCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W5NDzs8ayHvKptSetpN9spC7LzxSuUKhJGrPri2N7FrPgtRoeSmJFA3JEKC4hKNj7fGx73oLiksR1iik4CFv8kq",
  "key1": "5nyVhRaRGP8Vn9kjcoBXHK86vchXtrtFtoZeADc2Lz4vhcdLWLGc1xT3Eud8kGb8hUsYCH9Tr6WuJ2ahj6iewcCy",
  "key2": "5fY1MVETEaZsYXRzhDPG4dHN2pqTqgpW6wJF1frgbJq5j6adsmWvaH1ZsqNLRpK4pHoX2pKhW7L7mRANxGdXkii3",
  "key3": "33cPaoCp8xonhWdroa1x7cjVRPDank4ikozgNRzMaLRbM7yrUXSXKcWu51hrEwfxqwEGBVWRamAMad5k2zpbpfHy",
  "key4": "3V59STJB2bsikygMHX82m9SioUCxrRF6iJu7nbCu3PcckmbYMjJmjGPezXfZGCsfYVa6fy6nSCHBje22bz5wRJeP",
  "key5": "DjKBj7Y35xeMsh3JqiSRiiAV1Jf9KFhW1g69DygHgmipetfgY43rahkCasTFAgmHG7DvLxbSyAbVk7gmRYWdKwW",
  "key6": "2MfhVS82wuknKCRy9HrS3GywS2A3W1yJnwEZ9SVmdg3MJDgHwbncn7xSgQoNNhoLmwnLGY3qMGxRX6F5uwvv98bp",
  "key7": "5cxbBv4mMXbFxF6m7GP2JVoZByiwtFRorQuBYEtEeFhKPWP5bidV3ueMpoct6tKFvqnjMHmVdpaDbDrhZ5s7w2Gb",
  "key8": "Pa6mBfTUQaEHMJFh9XxbsrPEzFvK7PQsc9tYB9o9TeiQBdFVXTERXSPvHtZvFDoSsmReKxfBSaZyUMyZQYVG24L",
  "key9": "39WA4kHXvw2ARC8R62stGPU4AJfHaup4Ro6GwhQZ9n9MBRKH3Ycb7maNrULSUuLwn9heAi2xQAhJVCKP5oauwnyC",
  "key10": "4bUmdJA3q37d61oNJqsk9RQAmbdXsk1mn2TcpRBWrC8fx33wZsXDjeVVUpY3gDAa7E3jprnEQTthLSAZjpogzBjr",
  "key11": "3B52YzvWGnkCZFprMnfJkpL5zFoqqNMrujaVxgozCN96Lc56CSLqqYg4fCkyzaq2FS3XkJANHnESbJup27RpGz9b",
  "key12": "3AEnkbGwD9Jip3oZHLdr1kCLzkGmLpUhqYZVHfX7qxLJ2pNp6TrYYMfiradS5BiYFMJNjL5yD658fz2WXjAidzRP",
  "key13": "23UujRCvFtim64A9A4kdncpppsWWaJZF5n3gmyGTxMxK6yzjFR4Nr4ojwkFv9cqZoPvXE1Empy3SicpQgRbjh6WD",
  "key14": "2xVPn3iKS2gDZeGgJ4vFD32qSGcTyJ3ZtT7PXjKsB6XGUfwEYofYLSWjt3SKmk2e2hwpzzmVEtTfjN6iZHJwL8L7",
  "key15": "6WT8aPXZfnJuCJmz2t1LLLZq6HQR4kb3i6XSK5vyd4gCpBMknH9q9YN6F5jaiPV7ETDJZxXAMVK2Mxt98Gv4u3P",
  "key16": "yFFSAbcjYTz9t7gxsDTbEZEkVp5EwG8mb3DUPbPH4co4dZiPyBtmkHQcrUWgr8hGqpXD6hfRKUiiEWTtGQAbHJg",
  "key17": "xRjRGhcK2HjZUEFFzSN52keYHSNS5FZCEEa2XhvZMmPW2X4HKyknPxRSNU7CjQ1rpNg8rSnM9RQxEC7vdzxX9dY",
  "key18": "4GYDxoxb8Zg8dm2mZuYE5R9oxKMdkpNanZY4YgeRKnd8CJe68D8RAhY2PrBF7uSAjhUA12XkNKUHbCi4uHWEU1p",
  "key19": "52MVA6rezdsg1oCh97nSQSS6p8L68CmQKKziE2GSM6zfWcK72N7Qx7rtqfWZtEM9Ufh8UMQsHZXe8H7NT6KvHVvP",
  "key20": "3Hv7tBCYNLHCEJemJvirLLfeSQFSQMDAxgjbUpcjBBLxvfJMQmJXSQVsnfDJGXerrhvHMCRKyHTEGDktVVmURVn",
  "key21": "2SvfHwcorjtwvbPQ1d7Rx93zT4xqcwgpHB1qkU3RjgXwKq8qddcET1NJH5vZmt6gwD55P89Lg1sKXxWeb7Lnb9ep",
  "key22": "gQZ9JJbPd9sMC6hB3rnoEjFogH79DkQJyS8rDY7hAdxoQkA2X5C967kbuxpcHkzs11sG4Nq8nN1mEPwS8PQiag8",
  "key23": "59wNEpEm4dKVwcppugcyaMK53aiEmDpMZyGpQkrWwLeRSdjttTAEM4i4MMpF5Vtwv9QJcppDb8wnBkTSwtjW7vbP",
  "key24": "2gSx7Sq8fL9o3tDNcz3Z9PLcPinFu78sZ4RxZTdnrfXLSB7Vsh71G7Bw4EWY9ptnjqWjDCwzpxmqhxuBEjkeTazS",
  "key25": "2zmSYaeMuSm8tjZkoDR5T32JkcCJvGkWuiaqMnvrForLxaDCAyqwbAtfa1pmcTPKV5RkMGqyaqorLyaFt5iRu5qd",
  "key26": "4Zf7o6mSHNaRPrCmFPFqJPrK7UnGjosxTRdn63PNMGZKmH5WErXL4orPPH5g44EjQViPqhriQHXr2w6xhP74mNQt",
  "key27": "4uvCjPDNwwUp5WxLFWLTPr2eNFomrjVjfqha2LmpMQdryGoqaoQW1xU3RojhriLxY52F6GinKuA5EySTsscooJ4m",
  "key28": "4kNriURNQnMSiEFmy7RCedvDDEknA2idPrcf8gSPqZHwXjt4s38ZoqyxMs4CTpBWbCFGyDMtdFBj5qhoTr6GK6wP"
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
