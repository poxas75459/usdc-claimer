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
    "3X18MbR7dN81EE5iHARpsELyy5mvFaTSx7pzCjEhmFeza5zaEbAcVQDkdpaymp3963rgB7x3sU9SAF2UxABKojyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZsGaWzuChcP7J39EoLncEZgLVnTrz4fMRC3hpLRAhbg5HaNx9qiinpENnK3ake9NTERTH6K8vQmzS3vaov7BDyJ",
  "key1": "3NvnUA4uqy5DynDJabpi6Yyru4JQgdMJnX2MtEkxXy2Kn9GVnPLeVarpirTPG896SLEYdcrjYTw3Phx6g13ixjvq",
  "key2": "7vP7Esvh1LA9SA924YgxEf3fEpmk3eaX12A3SspTqcajwwZiBAH1cdDgB146kytDZFn1Y7t2iSk7Bm218zKW8Jg",
  "key3": "2SGThXpdNRmZX4qEXGzZigq63Sq4QQTfCs5PLM6x24HeJJh1imDTU8KanjuNDH7v7EayUE9TKoXU8TaQHciijg5N",
  "key4": "Xp4PHBdXHoBRSN3byDSrD1sCef8VC7LCCgcNWNgUW1qUYi58XrHPwB7JZUSEKMAzLbwpDbEYPtfvQyQsXok9vTP",
  "key5": "5g6yQNNJhbkHJGhVc5C516iGmuh83HG2xbHqCnErqRTiM8bJjrX35SrNcvs7cuF1Bb4shFtvhTe7XSdJsBFMvHuY",
  "key6": "5FKVhTxumyxex2QkHEVbqCY1hto8S6Xqz6m9H682E71Cr2CDFdVVXebdeyfQzqTne8qe57azutjWoTCeG2M6uid5",
  "key7": "4VJhcbf3cY5YATAKfBHsPzJQgS4CfKvtAWhhoFHPpQ3Ed79pfvnmB1Zg6rSzaZAFBKCNGKW4xzKNTMLRFtEuUJ7v",
  "key8": "3dMBXvhDyXiS5eiuy62Tiq3GBwTDvwoz13HXLYYGsA7iHw4eNHyGBQqtrneXuBx7WbGLif21G7Fxqc3L9Z712SAX",
  "key9": "o2q3skcJjKHfzY2ru92sKiQvapKUNjiGFiFhkWcFy7komXmDFJSyJh2J2DKa6dqdLwFDt4AMXGSEevoEi4kK8k8",
  "key10": "5a2nWLWLYksM9j6QXjec69EYDipY8f7BUCyMNAKHYceTs5AZBdctABs7kdBGeezjeHGckb8p8tkeZVNLJbvdw7eF",
  "key11": "3pvgy1UqNXkCvL9fUNEDQiUDrs5K5MqJpEw6KVYvkcm2XM5mADQ3F1XeRLgaD68KSvXMNpJw1F7dxLF1M7PAvMVb",
  "key12": "iCW6w4QYAVSuwe1zLC9tMqAkowyM5rcNumPz3SR4LD1LjZzqTQZa6wAhPQtCiA3Bmipysb9bpoiqNybdA2826c9",
  "key13": "24RJtDr6zH6z3EDn2myDVXMwE4JnQjdKLRtaan6ng8qe25Mfb5nSFLTcadZBSSPekXWqoE4X44sstAKrQUqWqYKX",
  "key14": "59coVGYtkE7ZsGyPtwnhyua2o6LGyhxiNT9PhSSw5aWexzP2eZZ4jkJWzX5tmiP3RXxJpHHWf3dfzy2fmZh63U9b",
  "key15": "4xiPbkW18ugv3w9BMFSKoLpju4Nt2YFfPQWmemJACPxNnC2dbHBwrktmEwCHzaRvsJWaxegR9nnCJkSHjFcuG7PP",
  "key16": "4SASVnpMGtjcxDBW382nMLVYUousTwrPRBjk59yiQEZMoDkoFAWMqrCHM4aJhz57uoKhMvsYuifRspZmcSf5opd6",
  "key17": "PMNYcZEbHM5fqycBSWU3hZKb6bPR2v1xKZuK1st8wEMK6nbCKG5ZgQ2zAd3AENy8XQLFikH7n8JSRJV9UzXQM9Y",
  "key18": "SRuf7jMFYrHTYpeX88KuvdRFb5p2W6fo6auHwSZ31XeVDJWeiHYc1G7UphSpdMgdKKgMUgZptQm4uHbEXU6s7PC",
  "key19": "2eEXNYJtZKDjdvCKJyG8apYXSSEQcC71nQAprbLFFg9jpf4bhQW3XXt7fUCKSRg9oKd7ennX12Ny9b7Zc4U35RTq",
  "key20": "2UeNEVZiGVs2XiBJtGpdLLFfBRRjD7bgXeakqEhxSvFkqzjTnRwVbt8tUj1yA1zK6rmPixdZs4EFkQTMQJTiUFrJ",
  "key21": "4pKJ2V7wXh1CLZSH97UxY1e9h6HUBrr6Z35XWQoUTsQRXbCJcnRCs1DcSjL8KAAhcsitytFKuP8xre8Gk1dvYWXJ",
  "key22": "5ZFfCtnxJXJHzWz2gziZPWbnrU9GYL8PsXavu7ePmi538Ws9bxVL1WZ3m8i2BVj5TVqtGiTCkiYNfZKfvRKe3b6h",
  "key23": "2vxrkEYfYxwAspeAYcCcpf5Yi1ixriv1gWAomFUabdMEBDuiVzZrHttyfKzhHVaucBPDa91MYUTVWQREUcBPGviR",
  "key24": "5bEYrVP1k6CE9L9otwwRExdJarGW9smCCNCwqE5oW1nVaNGeupsFRMioGqG3oT1DAJJRgcG6X7Wbrfq6Pq83kAY6",
  "key25": "44LThokxsgff2d4AwjPGP4RiGxBAHhxMUS9goF2B6Fhd8rstQns8Gi7PhSARcQvvunzgFV44JbRV2KK9oBvz4Bj9",
  "key26": "3P7RtdHPjiyerwT6Pb6BjqXGFCq6mVtpwrWXx2ZP74LaY6Zq5zN72GUCxxXTQnquzrysNoLNsACg3xLkfeiKDC4Q"
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
