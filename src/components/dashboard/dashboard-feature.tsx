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
    "5uEPxNqrpYuTQxeh9A9C9s3XYRprsBRaNxVHZV5n9eBuVnpUDYy6zEQgKfCmexxxJbshkc14PFDAbYynEgTkFrco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UZzfBmLEFXoaMHFBKu3WFxZTpngRubSdoZhjNydbYzAgkQKizji8jee9tXWDB7uentk3DxzwKh9kTN9LdLdLuHj",
  "key1": "3yeVoGGnqqrCy21Cm5RFSRRxJGZjJfzWMEEocAENAA1Bs2T242Y1sx3vRa1nAVmojy64ezfvhoEdDo456CCMT5Mj",
  "key2": "5oAPJtGnBkZcZG5Sj4Gy7hosVzA6JwNwTxHhQuUbiwbxjTJKDoKShFq1n2bSot9nSieMX9oQufqd2oJXUubnMGut",
  "key3": "5866tGQ73fsJGGEwskQEE5LKSYRjpRCRRJhyPi2BW1GWHC4MDQxEmTWLMsNY9kFj8g75Pkr6Nd6TdA3piwWA3hPv",
  "key4": "9grL8BQPRXWZ9UwSj2arcYwDThxUeZ7ybfndL8oRta8126yArNntsaL8UgKhY664j1dvkNbjuG1ejggdBzeYSqa",
  "key5": "vnA4k4itiMiwhgv9Vzy4UyTrfe8M9uBwJYRQKV6eDnsqaLWa8cApb6LtPC1B3CPxBmA7usftEdogreVDVVGvFKo",
  "key6": "2ydxmdwaRpYpWoEAFcYTsXbAvSMEVcZF1vedTXyaJAVjHYuzC1C66fyZN7ws5xScEf5rhA3rRqMBFYkSQw4JdydL",
  "key7": "65PVCfq7Frbk7HRT8D3ZK11hD61Hb8K8jMgL4gTPGmZc2xTjshk5cRtZi97KgZ3XDEF3UR8CeMQiLLzAARFnafCc",
  "key8": "29zMjYQGwoo6u6iqSSsgvuDZ9abj3XL7DXUnWg3uWkV3LxCN14W73phXhWSv93NjHoDjLComUU1NKMdsMoKf4vXC",
  "key9": "4DrMTnWgHTfaVuEe8DyfQpWL6Vr8afCGTniZA7hNdsLDcUHTnCkbMG2fU8DDx3xrFDkeKPJFmuCTaczYSPR3yiXw",
  "key10": "5Co2WSBHLeiKN3wtfS3WcqbH5V7SKTxYJiqrXU3kTFAETzKZ4A5UbuaK7kw3EZTk1HUnVzWH4MRMCZ4d69DEwGL4",
  "key11": "45Ny5gvXNgP3iuqkpBk3TVEd6XBqzqZeRyzVyxhCmQvtNDg3FLs3jKUbCXUh1EUm5jHv48UUv956PQWeM6unqSPi",
  "key12": "59e9BofT942X2Rri3kDwiXGbg1oCAJJPmTt8F5Jg9NumPw3vFaoDAMvioXpDae8hfnaYzEwY1kDQKuTY6uuN26MP",
  "key13": "3CBKRWFNPj5utWWwNgB7ApziosfHVNQhc1C9NQUEwQi8T9Tg6DdRM49ULeagkn9WsVkhCFq9R884EapYDbGFS2JT",
  "key14": "45rXqmuyCY5y6JXydCyz8CE3BvFYPxM3ACd4jtfxGt9RqHNijZLJKoYQ7weERegzwhjVSNnucvAqCnztxh4uFP6r",
  "key15": "WPe7DMriGyxDASqFjQ8VTitgxiqxinWG4mrC9Uy5n9deiKGFXixYfw4bwXpQrea4Z5wvAfFiups22TPPZhKG3AC",
  "key16": "AGdFsKiMnaB4unNHM1AebRhhYrqt4pKiPm4shwuYbjY1TK5jtzex1eNzhp6uezhrSbDddi9ZzSwb97jJdacgoim",
  "key17": "4hSiMyKMGvhxHXH7x7Pcn1V4Xvt4Poeuh5f72iFfvjLzf4AFuEfziGxERPKQAzW47z9dtwSotQJfp7Fbk88kp8fE",
  "key18": "3xR1EbGFzfwyZaPQAA3KuKD465eSDGeW5jrc3LwC4Em9aMYAmeSPtwAbGiHAhw9czKV3nBgoipKKXqnHTdGa4k6L",
  "key19": "5r5Yz4tNjH1guDuMnSmQpArBhqTHZeQQPXDGTUartUdMLqQxenAY2qUvhtfwAkoAF8uaWGZN15yWVhTUWFXA7Bhd",
  "key20": "4qHVB92UiQdVTM5RUWKEsfJZYtm58RrpuzakmYGMVK4n8kxNRE7TcSaWJAN8TZLTnbMsoQFHdZmajiKX9MouQVmD",
  "key21": "5zjAvaHwoanREcgoL7isZ7BgcwidQ5jX9bxGxrM14D4nkigMigafqb7Ctmj8qnJAYm4tTHMYxQtMBC2Phgarezvu",
  "key22": "4jTvxsnixne3y4dkLcdvFiVPu4EBJqEBPitcz9GTKk1ewftQD8JiCZG7KrJvz748fbsaK5nWwVCAbUobMrXkk3gt",
  "key23": "2UJB4YtuRtrj3vThVFZJh7WSJMfJs5vgskJVVti6jVTof3FA81aVcGrP9SuXdZP1j2S3yWKGiQmxuw6fLHvNN2Nj",
  "key24": "wbZMEpnrX2J1sNMhdwzxFx7tWYZvVyU4EZQnWKzp9HDDex8vp4y1HEoMNQEkJBtbBv1zy4aqwPzmiAHwyyRw6ef",
  "key25": "Vs9WdMtSm4Z7z5D2wMF8HP79jnkKJGnmDzKE7jkmsP9ET5ThQF5MtdmT69UYmZddUtpnXUebJQsZgeMuyFrvEaB",
  "key26": "4SsDYqj2C27Ceu9mpyMHd576eAsX1fRFuETrJ37q6128PyTNbwP797Pvx6ZujSLmbWKhvXmVK3c8szofEvQ5g2gk",
  "key27": "327mNkhMTFn9yUJkT3awAJTXkvZpzgLSNmh4equAAWiDcCacWJVN4RmVzEnmtbVUbxraRVUjKXECfF1cipNL3Ww1",
  "key28": "42adRX35N1JH8FmLa8xDZe82ko8N3x6QqE4KBphSkMQM7r3oP8tMHtud9df4g94VHcR46vgFmqagEhhbHtDkEBhA",
  "key29": "nEnfNpbhqckt6BAGSHRVBC6iiaJkxmtFZngAM15BN7hsTy5e7SzvW2dwWqkAdaNSyq2rhoeKDc4ShKhBivBm4xK",
  "key30": "v2tUw6kVSmBupFowz1Ly1xHsEorGpRDYHDRUZ1Ts2ygXLhxqknHqoCys2p4n5JjoXEtfSjQnqzss42nsDtnmeon",
  "key31": "2hKhgMqJ6aXC2M2kSfbHfd1wWvLqh1j1UrDJ2BhjNyo2AuMXFf5gXp9fpLL7NuUqgDQyzsnrjH9YStiAq17ZqW7n",
  "key32": "297Wa7eBPSraN9vzbDQKby39av9rZ6c3LbwM2ENq3Nyc2iE2KvMWGbxAzTgF4gmmnCYfhyVagcssDjbe3uidCJxc"
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
