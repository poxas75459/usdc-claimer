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
    "2XN85U3NscHfs8SXiXjeLAY2Eyr2uKfCHX3nyKrDUdr5qDMKrC5iGuVs5T2ebsDN7F4Sgvb3bZdYcffjD22jbwDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ge9YgJ4zBj2tbiYWnbVorDeUwUpKWH9BR8QiDsryMgKvuQ8JWMEFxrqCiBgLATf8B5gime3T2qXGz8T6eBcnfL6",
  "key1": "cifPNk9NyRpiEYytiiN1k1e4zkzJc2GLM31e9FM9gkTaYmyYBLTSEd7Y85fWai1eQeukcBgePQgY2YJUrQ831Lo",
  "key2": "65hfsHiKp8bN9r3NMDBy23ojuL5kpdHN5gA9P9HApy5gMY1pYzsaLCmVt2wpkwtNAbNebXfMNaADZWYinQH2GSzX",
  "key3": "5wv9MPiwzeuXiY3Nsyb3FpUpxfXquFawcJjE48DeABqyPW4nqv3psYuF41SYt2Cphb9uN9Knf9x1xEvadpoDBK23",
  "key4": "67rLeEgjs3AT4mHVJWX4oCEryAMb95RcfvVkQejnJNZs3gqxBUCPf1a3oU87J3jWZD8doaysKstr8dvA7NuyAJLM",
  "key5": "5RdzVBjuDSAYtUyq2FxPUKK9jpQkitCN54Cp46pU8sKmhRgqgnu7EPkXdju3h7uyCPGCP658XTA8yb845Bijc9kb",
  "key6": "4aUUqPnCXuQ28sWARbd8fw2gikev8SXrA3qETFLj96mSxAbHK685UQEbsvdX37JJk3w4osyAWhX4mNeqD4tniShU",
  "key7": "38B9mne4LFUunVsJ56BuWCWjJddCYWp4dRBZZYXsqUTWXUQADxW5Uuaw4sPBjnbd5i7BnYAdSQh4Sfs3VgUcSaa7",
  "key8": "2AaxSkGgTUAB6ZYxWwWzFSJyTiLEMUM9gZfW6PuZvp7MDszSePpUs1s9JAKyVZm9Br8yZZ77D9oCbSZnR5F63UTF",
  "key9": "5DdJYogiWXNGLhLevQT8uopJy6JxrEYzJueWTw7Qq5B6EP3dsFSYaU8GeuyqeBvG6FSwSWDpnR3DsqGcmh9VdsVo",
  "key10": "231qToPHCJ4dtMhFaMnHzi1n2wNXs25eQLQfmfoVR1Wop2nVEyWczdm8x7K9rqw74AUD4nniy1kNiRJL8Jy9Xpiy",
  "key11": "4JJvXpg8oiRCftUKd5iWbvGyVxTdu1gKtQmE4SAepQFPvUmT4AhUHtcH64Xy7JLQpR5kzxC7pdnaMbv6vGs1bejP",
  "key12": "5CTW5XVZozp7Hz6U3677bWZyMwwDiEMSBZTG887zARkTDnSMV3d8k5qysk8NVCuz5FGk2tv19irTDb7QKLDiSsi7",
  "key13": "ckRZSzREDvz95Q28WLi7ttK5Pg4Q1YaLcV6QVzkefrGMCqGCt6D6hVrpLZQNRCwVgUKZCM6t84B4mQUs1bHjgMZ",
  "key14": "3xj4HPEdwUgrnwvyH9zQZGsAtmh8c9qLvd9cHJqZLmKqGHf7mwsKqmXa3oAo23hujT3G75k6LLrC1ARYgV3wJBcF",
  "key15": "439cBbpMvgU7P8G37nrPjbhVxevowbwEW28qyvSjzo8umA3T9GExf1XZZkSjMvZJyXUWPrHgvixjF4A5WiCYVJsU",
  "key16": "3C7yqXhmV6Bozv1RREkGTDjPWoMaiP4LkufvnZVkGzTe56LKs9qLuV8evSJ4RN88zNZjw71ryvA1z64cyU8CqHSX",
  "key17": "2qZVjkxYJ63pogSDHrQrMfHRuL9Qx1vc78tZXSwhRjuMAn5aS5bkN5SZ8FgiLRDUr1oEmCoRP8T3zf8DDpqXZbwy",
  "key18": "5Zg5L3WpY6Dn4SZAusJhK8jbE2Bdgh3FbZCoGgydrfsFya6pYsUYh6kVvSTJMGEnBFxvn7cchGw5ukH6ET6PMjej",
  "key19": "2EcrF6Xc1wc2QYpQQ1ApqcD2DaTNiW8nxdGmRVLqV9534cgGgk5HpMeXdKs6AEHw2vmVbE1Dht1NUKhKLniemUSv",
  "key20": "4XtkeVRQdeXwNVuJfSGhLotAmPJ1Gr2HwKgG2VamCGZhmnxwP1zeyBaEEQ1WsiVtN6fyktbwMXQchMD5RTxAj3ku",
  "key21": "28yEg3Q8N642shNhjyKoQbECee2ZLZVxQYufJ1vZMa2Mdy6oVQJt38ZNpFH1tMqCP6vzkxd3HPS7EMrYtjJjfyRe",
  "key22": "5Qo3DjjwTz4SHn4g6empHoQooC4f4UX3cUkebsqt82TpbPtvJ9YunFc6PSLkWsU5b8W7vUm5NzmKM4pXc2CMmRR3",
  "key23": "4Lhx6T5JJhmDKfJg6wvsS25vGYSBGDg6W6cL5yk62MWAk8RinxtQ4XfTWEQyYKYGb7VHuZLdbTU4SrJm5rrsAS7f",
  "key24": "5VB5wPoPLbjKRJWfmArie7HM7THf1zodVFA4oD8HWhvP6AHabf3HE7bRZY8XyoKnUhaQVfaacK2dPKxDpryNLXSZ",
  "key25": "U5u57QpSrkwQWtNt2k7t6iYhj91k1iE25aPasoEmVXxi8FcUw2SPgVtoVcjbBqXLWuiGpARqu8Afujcu8nRUtKk",
  "key26": "5AbPPvKTzgWGX6LFVifU3P62RyEom6bRCcyrGSh75baDS4YZcFav71r6d2nfZ7o5e992NJdMaw8FGTXercnZobQM",
  "key27": "2rsRg3pDMMF7mb5c7AQm1dKWUBxdaqfDKQwDTZ9Nvnf9vWPkJqG94AkqYmj5mxd2LB84fnUF3pYx6zXosF6WuVsg"
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
