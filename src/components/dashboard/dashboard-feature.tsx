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
    "3YNCWTiz7KGrADnvh6fW7qPpqEmv8ds5YX587kY9zJoy1jN5zdDhKbEkPStCubvnoNUab12NwgrfCWBPhAGnmXiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62VoipWBYiW7U7Sc69QDoJjdRHXTadqJp45xVmEPAi74Z3d7ZdJy6WQtA1SwAd7cNFzhiLptQ5mfmSy9vYBafFZP",
  "key1": "5AY3s4wkUvczAKz3iU6XuqxsSVzNopadGBQudoxYMxXQUD65VCXijPp7SLjXTU4KVwZiMUxnfx6zgN6yuvifv5BV",
  "key2": "3UfMDaFZmfpUFityZHj19iZSWVJmMKD8NoroA9mgkPE8Jm47Mu8GpvzP9o7E3Mnkzhh7Bxry7xauZ5EWBwcwMqX1",
  "key3": "3uX9EChZzbXg1o3LALEfkgmEfatsWFWFeqR9EbYztwYB9qfw1xDdkB2P52rPkvjCBQDWDr4KmPWDCYJShvvPqkuW",
  "key4": "3JM5YQh6yhS7biAQSLByWvj6YUrtKTBcqWhWyp6sSQrgrHWNQmqo9WWXVrnS27wkL6kEAfpGcJy52CAfaGkKRv3x",
  "key5": "4E9YEedFoJLHYmVp35bAPsmD7mwPpsCweANFPTpBg2mZ3hg4GkHLcVFEw3WW4yohyoweCCM1LmEGwbrwFtjaQ8Bn",
  "key6": "5eyVKXsjLsncgsGE93ZDmZJb9khkJ8gp88ETRkR8DpjGqr3LXJBFeps4BTFFvFxbCA17p6xkbvd4ZiNPMeQznWRU",
  "key7": "ZCT9r9DeG5f7d2bEjbEDfNqyVasXN951xmHjNnCu3P99Gdf1JnN97Qr5TwAneC9Nqx5R418TtgF7iEDbBzjYowf",
  "key8": "3vfYBK7g7vg9m2UJf15tBdM9qwLyJHxFfqqafFNwGey4QVJDX5V6hC3kadeU3xLoBvYJ9CcnULc9hdpazXBEtZ7F",
  "key9": "3z7Z4pBUTNn8NL1tHrndeAYDfY6SD175kNn7UXx85x4Cm9tK2tA7ucyTMtMkPFqk257tAKyyKvvBYiQapEXc6VqL",
  "key10": "5emEY2Xwzii6BaHryHDNJP1WEkAqMEWZVDMteetb7EXYvSbaFbjsqfnYZ9cYqjxYrQzd6vWn5GdryLBYbxSiNkFA",
  "key11": "2tZrtfV7dnE6VxA68d6bvjjHxWJceKLYJr4HLYRcsWXVC43VMeTbtcq9UAdZbju5xhavVNWFsKwdrsCYY78MS4us",
  "key12": "2V8LdUyoDyoZTVZ6teybXWgoYg8ChiJ9X3sV283bS9X1A9XNDo4gk3zkGjBpSGDZApEaEHTvf6ZdnVi27J4EzYpY",
  "key13": "2YMSh1KwZvaTm2xAnUnLuTQsZ5gtd5JZAZTUkC6tA1YgAg11gjtK6X4yoG4iREG72HuLrirL81iVfxY4AjWpg5Ld",
  "key14": "5G9wczeTtWtf7p6rPH3ymHoP8HyLuJijKV83aeJeV81TZNjkUsaPunEScwSQJotbXbzf51aQqTkC1JKHx6Jtu5et",
  "key15": "2x6p4gjUpVVk7LLs5MVPNaSyS9XgLbHDYYDcyNW9xvp598sYzw51qu3i8xA9kPEeVkBHjhp565mYvLGUw2LC1FtW",
  "key16": "37nShvX17r9f9UxWtu2Jj9wqDEVR9mPb6MPGsvAAYyxAP5Kpp6eVX72DxX2kbtfGUsrYR9vW1RSVUkVogYRG2ASN",
  "key17": "2qG8SG14toWFiXqV8hcHHSFYeeVThQJBiQcLFMmPXkjbeBVFQBnEztcUkMB5syQWAoxwh6EcudPDdzwj337RV3cE",
  "key18": "4U9UiiYh56EXCJho7u8TeVkm5XY9vMqaKiFbQ9ZXBfXmXWQdabn6uP7deDUFcs4e9yhp7iBV6g7ooHwDBpbpbRzg",
  "key19": "4TSVX3tnYKfsfCHkRrFsismzodcVjdeKEhsjcHz6GZD5V7kJHuYYHbpoYDd3PxUunqbXFXod38wz3Tp3niBFgXgE",
  "key20": "5nZ7quQv7QxAgxJ8GqjtMevnfjnqJmEYmfwzTs6Ti8bvcS9feYJEXk4mqMZjmmVjLh5WKs4h3WAQuJR7aVuL546H",
  "key21": "48at5hDcRSYFu6i2GZWeyZMT3vVnhcFF8t6RcjDpWcB5RoxBr1vkMQxzU5NWLCAXS6cZnhU2dhv82vEx2XGQ9CT6",
  "key22": "2GzJkZPpzNtoSKkgijodjdZJqtpy2Rt3yzwmPfR8NTJTUdNgcuJ1CnHAcpZ3J5yg5JhcsgsAoH87f2pS6tH5zwLf",
  "key23": "5igwy7yeZdU1MZQQ49jY2PRqgaucX27gcLJkMwzsYdjhBLcEzQC7VWDWc3nh4tLTMC1SPgLKbYj82NZxjDUsHGsy",
  "key24": "e9JMrC553Kr8Hqq9XDinPhJ4YAUmrYofAvU88nNY7TRfPy67SkGHacRLnTCNjbmEBVAqKVHh1twRfEHkoFriGwq",
  "key25": "3EYCvvdopPq4j8qpCQ4gFPDiLvJxVrrgjM2ZTgwqJeYnE7sr3uy9yGziF1vS3Nkn97xZCxaq4J8AbJ9qd74sXe3c",
  "key26": "22eV92Xov6Y5vXKkGSctSozseeATQHWdUTDL7gpLqTmkNGPTrx9i7dGGbF7MKopgEvPsNRQggbPV7FU6KBwRmt5G",
  "key27": "2LPuNGg9PgSngbo6myKzxuihtXk3a3cichBAX8KGUDv6EwiGmEnkN8WtSrjCeeiZYT3trvrPbKU5srjfJWMwBiYt",
  "key28": "DRq17a7YWMJZNK79f9wbVbwNHn9hC2L4f6VNpV1461FWbyaJH8ghVUKcWEfXDZhDPGfZijEA55fnbMpC6SdatcP"
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
