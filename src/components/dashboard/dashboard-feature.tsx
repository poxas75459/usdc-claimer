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
    "2Fy5WCYTEjatF5oraArEn3gQ1hVdm8GksmwGBg8333LiJGzPxLcCVx93WPhLJbuU6PJeFu1AzmU3bTbD458b8uyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MgxSizQqanXRnkofvNMv9R4RsaUz1LqZePKb5mNXCyBURuvnTwJRYVPGowHqHZMYkv8sGNTX7Vuz41qRNpTUX8f",
  "key1": "3fVbRt9PY6dkYBcCpHFw4RmAthVmFCgfvrqbgfisZccC2GgNCZNUkEMhSz35ZFLtF4NyrfBEMPdWAepy6cENRDMy",
  "key2": "616wZoLiH3wy7pjRHK5mBwrfMnJ45hzTU1S2FPqt1gPHxfiX9KtLghuWSMZ54CPtEdSa7ScRNsR1rDj5WjKt6vm4",
  "key3": "39vjbW25bsuwQH3tutBkBqxuY2KJMQxyprbCk6tGPJJNdipaxw2daVYKuHcU9BnzboXxZryJz87N6Z4uqkgKJP51",
  "key4": "jsviq2Yx1uWXsn6H4STGu8PYagTugGRF2w6c4mW2Yw7N9MgSLv6dr5b3gwEcmZkUFnBRtxnWTFKWc2jCpJytQed",
  "key5": "2ugr3HcJdUCh4gwpLC9E3UUeLXBe3jg8iQN4BtAgCbyTJGA9k1Jy5C8bVoUDnakowzoxHrTmCvucJpB5wqe2ZbCd",
  "key6": "5wFDpmFQn1LC9tDPwz2kQbB2iM1wMvqxHzQW8rHQzasZDzGRTAo1fbKe4MaN4apGsGcMYCgtgGv2xFR7AbohZM5A",
  "key7": "5zJQvfu9uowYRfrUH28SaR3ck9xkgYo6QHCeQkzpcAdsqmvvAvLmEjGFzn62mx8h4HnqYbs4X29vHKyVJv7SxpQL",
  "key8": "2G25WgDRngpiW6ZfLVDBBianitkCCcr7A52xbNS72EYDqLGMf7kzXCKW7yBrFcQLRAYP8wwk9mwpBwLLTJnyrquo",
  "key9": "3KVVgfqLqeY2a99xdhgk22pjQMnWaWGyKiN1z6haV2N7AynvLM7pZURPNYJxsfDUTx8Zt4T7F3eDQg5VtTPrULG7",
  "key10": "4zjRZcxzpYZfNVr8ubUE11CUFHonMPD9T8Hv9RpMnWM51VcRP5NE4pe3yvzGFTK4rXHzMRG4qCx7LHJMyKc2ABQo",
  "key11": "fT7nboTzdUM31UgRMBgZJvhheMrtEiiS7opopJmVJMd3nCnfEM4dndvo8EffmD67n7LZUyamE6efQATKRTdcXg8",
  "key12": "56WSVSM97kTwCnk87o3ieTdCv9yLQaAo8dMftG1XVqHzudv5vCrxi4yEaNsZ6xQmEgmsiasBVWAjxexL4bNskGvD",
  "key13": "QQxaCR7EXj3mXuFfW2mqtqqU6MGKumdVqUJr6rR8muCKLZG6z8JFMJFCwzSD2LsDAXE4UPG7i5tGMy5kVopXtwf",
  "key14": "4E38z8TFdFeVDG5UPgY3q6u1Mn3JH5hqUXtDvQ7W285DkkmLPjvwwrtLsLPLKwRkCeX1mA8FzDRYranwL77kVAFv",
  "key15": "3vWkdnDkHcV74qLyS55872xY3SPphUYyr3JaZVYakxZwESTdtmFQMDaR3tjcqfNd2kCEaCCZA46SUgMBQBncyzRv",
  "key16": "59ViaxpnwNaGAK3vH3x9wX6Uzybx3AKC5u85q591WkpnQUNVivbtjKDkvkjsAr8CFBX5p6aLBH11YcV3p1f71ty6",
  "key17": "299vvKmRWdXWJS8WZdV9KPntdj8BaVUvCkrsd2E33kBRSTSoTGGawBjtNtUo9BChquU4zvQddavKYWKVno11Q9G6",
  "key18": "M6SYbhGZmobppVxhYt9N2GJTep8qQabtaHPQCU7ZWWvpBhQcDpamGMMhgWPcZ3niqwXGFqzPiH7Jb49GQwbgMFo",
  "key19": "4Gf2Lc9Ts2CGac8mMiccK4szzP4m8HZmQjnFz2dBiTpToKjTKXR9TwT3eoHhAdA12doQ8Td57QUEVs3N2ia9axWK",
  "key20": "2cxLsLPrVPcyBcLu9AtxkFjn4wFqEbLfvx1L3dbvuMszTXtFKpSnAmzbE72xpuimfd8TP6wzpL6en8kVzahJPfp5",
  "key21": "5WEXVC81xv7p9oLmhyb9LcSctK4VFX7eL9HxKWwkKJFPEXUg3xc1JeRpJeoY5gJee2DNPnJDkNrzf29QuW5u238q",
  "key22": "4DNfpqK9p5qhWyJYAJqyKsR1Vc7i1dGiZMmwS4u3GpAofoSMxUKhJbw297QHiLvSuVwNQYS9Gjhaj34LBHKWnPiH",
  "key23": "5mKSW6cUVUW87W3qdaudU7e7SiKfMdavxT1Xp1qhkKRCmcnUH5JYZCfQJtdKeHdyZrEWoNKdoaxHpkvjNFkxc4d5",
  "key24": "2MUi3MdDAYfvXhzR2F59xDbdvmumhAdtiDrAYDGKuZjWmueZ9a8dK48AT3YtKemyjo6DxVAY5cPggUmhnyopVfbM",
  "key25": "5g4nWLhuqZbUFEzdfVnWo822uT9mwX8TM3dyZmiMLTVaFVD2HuuRRVrP3cZE6HXdhtkyEM6uwHS5H6unGqFRFMrj",
  "key26": "32tqzi3n1imC7v4DPrsepwd8bgX6bHSsVFyJh6ozQVH9HBEbC4NdQDjoErggaedDqsW4eWPvjSyRqceVc1vUoHKq",
  "key27": "65MgS9bYez1YV2PWzSddAPeuQoA71WGiYH2sL8deQZNaUqG659LLShKERVRaYS9KmQnjAMxQ5HyBraWvZhHKU9kR"
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
