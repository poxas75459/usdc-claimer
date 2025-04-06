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
    "39WsvvXHpWgFKbTdNqMHHs7gqLWmF7duauHXkKePb84oG5qoPBuhj5e6nSFvdTYksxJX6qRWJDWpDn9s8GEYdcgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QLNq9NCGJcv8DeNyrNFgw5Fp6HNgtu8zjKoAxjKWpt55zFtzwyNLSb5zFX7qbGWzxrmrZMu25qkq7CxMs71rLRT",
  "key1": "4aPvgYqXRZxefoeY7uNkZxhtKzNxtzm3zg2m8mfbWANZiGauknkxDLPk7bu2eNraoFZMQWF7if7TkZthadQP1fcU",
  "key2": "tChcBiVYTPMpAc1tF4dfWJwW9XWwjDTpF2rvL8iavRqjBWuPa5s5Qg6Hv2R9b9AjYmo8EcSCN4UhMrRJaBwjWCa",
  "key3": "2haLpQHtVEZWuWfiZd3G2Q2eUfUiNcMWQp96En4rsd2AoZaF9jrSG4BPUDceCQjuivUKugQ4qf5Ly8wJDMemyJpk",
  "key4": "H5yiYbQvVwX7TYEvTnbTQwmkyhDzZpCjGH57ymUjkifEJaeaqz12v1soB7Uw1AUS45b35ivKZMURVjHG22SWGA4",
  "key5": "4acRVH4JySSnTbKHCb6nt4Wn8djXUjzYE2Spd9c7EBCgeXpiZUxFxaPqn26LciQHLp6Q6Z1m7Q6TD9SStdczR5iH",
  "key6": "s9AXxMpHzVueF6DT6EDUUmSGPn4QR5i5emqF7uCck8pNgRwcLwNxga7hDZLArsQ7DDCiuYh8Wu5gDcRXy5Zpw1g",
  "key7": "K1zNd2U97nRybap5mGYEKWWFV5gAkeoGsQcMbtwaZRJwvCB3JBHxCiuyh88ZXXvSWL1guzAdafqF3ucypoD2Phc",
  "key8": "32o2mFbBkP9J3yAe8Kq3VXpv5kbSeQ7YrsNrbH8Jb1G1nYMD86PeZJYvi5RxDDvbqYRnwVAjAX5tDkVhQeJWJvX",
  "key9": "FK3RSSHetaw85RUHiYPk3GNktGckPU85KJCJEYXTJKvVD41x6JCwNenrcc1b32P3E6orUEyx6QsEYombtUxcApE",
  "key10": "2sdy8pN6H4m3nw4rrTVbjC5cjWrHaLqYDKhcrva8SbSU5BEUSYLukUqLeGPQBpUxTDdzBNjibVSWC3UGdE1Rzwud",
  "key11": "64e4n22EtoeHrG4N1HrurmpmQrPcPXm7LdgEpPprxmeWCPfZNRjxYiccJno6gdop4nJ91av1UEg1g66n7dFBxnCE",
  "key12": "4uquF7dM1rqjY7cZfLHJRmrq7KjiT188vNsrRgnfnqfiDJxsFvwU2gBb7tX8HvWZ2zgpXSsC63ac2pWgFHBvzyZZ",
  "key13": "5UpNEXguNuiAYxcc7kaquu5ifdD64yJwrZEjtMEN5EkTqxtHijz9u6mkT4A8xf9ZiVVb6GLzcwggdDJPYEmxmw2k",
  "key14": "4EAmqBEbtWfBwpsa3Sr57chssZ3rahdqVWWdVKw1h449NbTPxG8NNkLiyFPzMTWMdZTE971SxRU3rBUbJFj3RU2R",
  "key15": "2MFFUfgGSjwWaHox9Buj3CkbMobUTX9XoJVMSKZ8qDx9XanYUMz4X1kw2KdPuVh95B8mginsQRKs3tXdJQHsTwML",
  "key16": "3GCESG1BC54xWU3XQ8vxq2imx5wBs3WR9c33sQpgroaZbGGMnsGUNooYmsM2t7ktsWRrZhya2P8LJfNP33qEp42R",
  "key17": "5yi42WcHLFpgCWTYpyeBbP7y4fGQFRV43hVdxJc4dYNEsfmkYnBtz2BYsoxN72VJxqahsUefDCpipgJ79kHug7Ca",
  "key18": "2ycp35ng3cV31zjuADNnxMSCXsrrj1iuFTrdQ4JM7RXbrdmTLu7eha8Sr57XLud6tzBzuyVyDrRKMBKYprzdb1bD",
  "key19": "GczH5HkHzgRnfRKoZS4EtUZH33vxGefnPqpCeK4R4aBvCYUJpB1F1tdcXnA6eWFN4uk7LFzrxHZYAAc9go3C19w",
  "key20": "4kZhVnWsbwEArgyA8XtNs3uhKZYgAUePyzcVgeeXm4vphbVzhJZ13fN8G2EhQgYn4yfuR1oMPkecPcSGAy5dXocE",
  "key21": "4MtpK8HHrdrtXUJz2Yn6SLubfuAzWmkExi5ifRF4fN6H1qng8X1fU5YKBaJqFk6pH5wZytNEUwTak4p43N3EWgoW",
  "key22": "55s6FT5qgrzzWv2DV6pEtEb4TQsh1rgYPBoaNwrqRC8aHwPVBy4yhBDVLmbnBECyr3qYduXnKVFe8XDnd9TsRjN5",
  "key23": "3WEPRnTRfryyJfwJ8xqMZT4zW6cRjzVAdm5NiRdaCuPhDP1r5nukKNtSqvgnWQrGMsqQ8qqL6LXSAuXnL3ZcAyoz",
  "key24": "3eqDBk9qqjGca1xZW3j8TbZtYkbavjtZ6nPadBDSXnDvJf3W9bvmsyBvNcedyKaxZbz3PFMUtJR1FTmvCGJYqfXU",
  "key25": "4xSt4AEiumuace25qXYNc4sKDs7n4Gw1iWvcNEhBdsA5h5PMPhMuVphjjhz5PTpTp5TSoxbyDf5LpQGxgL8f4Hqm",
  "key26": "VswbeQvVQYmsJYp548KN61BvvBrCwmb2gh66VB2j9dzFr9Jd9mqMmGFXGq8Hx5rGZucxye4EEBnjVh5tZ1BbPdm",
  "key27": "28NfwoZyQuvYYApa4rFNm37tCfhumKGKTvkoN5A5tHD6uufU58dK536Ynw654ot27SgCabTm8Kta4EQCXhytxtDY"
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
