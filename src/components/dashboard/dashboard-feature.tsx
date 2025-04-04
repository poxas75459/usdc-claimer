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
    "4DaprxzJkm7Ln5NtWsoSoAdTMd3QiF5Ec7sf798pQvYs3ToUy5YVJdT793LZzMzPkQL4u1qeZkFb7XSFwuzkB9Tz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CUKRCzvBywd71HBycxtcjVH8n22reFvaGqGF5Y7z3RwNcdqbZYtBPHkwACGK1z2Td3ZiJxWZtvng9RM4k2STK7A",
  "key1": "35BYmjS57XQ9tCphm95rPk8nwBKYW5E6Pc1x9QksQKHaTQXaAm6H6Jo289EdFvKgDpGsZGSjMDXB6D4Ynx8ergoZ",
  "key2": "5Hxa2MS5tZFAP6VV2vcfAefG19tLxey1gMdnfX9isYKtyHKA797NStTvHt5UAHrGt3inL3UsgTPUg6kgqH1NzTyH",
  "key3": "2mhEa6WYUuJwFRsCvMhtPfPJBKjCAgYoCH2anfZV1GfDSvck4sB72WUDeJf1RBkwE6sg2zYMRuBGikixTQh2Y43i",
  "key4": "vNfsabZJLP55MT6bLgZBJhsY4Jf1R2MqqdTV3Z6zvN1oZUS71KChuCWrKUwPGhgwFpSyVs1sBGURswycMrZ1PBu",
  "key5": "2dN4qRNXpDSZDVprucnPxL6E14WPRtaSyjE2DaW1xEsqUw1GT8G1oHmogST1YF9vvQxBLi8Jk2xDe12mo4MKRbQW",
  "key6": "3u9jnxKAzTZVAvb5vqrNCLfdh6Av5sAcA4PeoKZGQmsKsajomDXLnUjN88aBsnzgQVTfsUp3AqfNKR9Ww6pHNGrC",
  "key7": "3TAD2mTvBq4DWbH28hWqYo1xpgEs9CAhZmjpDAvACACjSgLtfB7kroYptVrXFumfrAN51o3NzuxQEMwSzDXpnRFz",
  "key8": "LSjziUUqYasCJHN83cT6XivugE9XuPKwN7ZfQWQtr36wquuZQHULLdhYBwwWrmcZ4SL6tXdrxmTkWsfgyn2h5jM",
  "key9": "3gw6EG2hNDMYGKpG6baf4SEEvbx49Y9A74PVwq8UnuSLMYogwK7dZx6VNV2SHf4s4hr1q2uP4yrtEmZbos4EyWfP",
  "key10": "24bbBYr2scJ13terfFDPETw49zGEmokQc1VQx58m4xAd5Y9cR9zsiEQdmzsW5cWrTHZoScKYkC4sx873dgmYjt3K",
  "key11": "74o3cL4NMmHfFPQyrrAP5zcsDS7e9SaFv2kQWjfe1yhii665Kjw71YxgfvECwGWYyKB2QovhJ62s1L7BRT9ZPpG",
  "key12": "3CqQKeRSuD236NAJhCSnKeSPNT9vkZ7w67Dg5oFqRC9T5PdnNzPsAD2Gp8Eo1y7voJkLunQCBj2HSH7L5ECSJfSu",
  "key13": "q5VdQc58UtygXZAQ489uAncegXm2hYwJBWX2qEqi39MfKRakQdavxQtkZnuv71xVp3KajkiiwiJ2jeN8j7wmupe",
  "key14": "2jj56AFcgpdkU1tCNjt8djSSzVmXUA42mC9YAAXmLrGDmwMAUAtTcnADyHDbFcVuz3hVmRTmnYq9jt5tFRq3Qn7N",
  "key15": "5etq5k2TcmuT3bdFDnQjb6CsGg28RqvpY5Zt22xVQGure6xDp3oEatJdmMhS49kYUPzWjzTTJGHQ1PEg6We3R8dy",
  "key16": "5PkTbXFWfCE4SdixLyAKSKExxZSXsxrKobbvFrFbnY6Jzs8tZwypGbkC1RhvppWTjF77Xvtcm65zRrLYciokzymT",
  "key17": "5KbfkdPTP9Jxhovk1DYgK4R4FMZv29W6aXNLZtANTzLrCYg4Ar7Ku8hvZMKBvkThNYVMsdvg2erKKSAy4rbw8MjX",
  "key18": "3ajY1S5mQu9a1BfX3NihzovAnRuYpZCd1DHfzgLqwi3wbDjRiLptxdxNxJf5wvUUv8xF9Sh2AVZuy7dzUpJEmjLk",
  "key19": "2A57NvcLETngjTpgP3ZMEnZzQ9d74YZ9avt5s6MpGDNRPqQUUT121VpWVrdda35TTvnzdELKXaFzMSVJ8QYGxGML",
  "key20": "3bXSKRD6iz2jnpbBCBsrtdwfu9C86rmqPEchaTMRn3KmohVdZctyEU31y22M1s5mWbH8pLFt7iGxGyeG5s9A5yYb",
  "key21": "vTuSDnaFNRTAj9DvQwSn9QHf8pES7z1mRtzwxTbFZcbBQA9PszLtBHjfEdDJhYqTtw5SaGwU9dCj9SLsp2ffx4s",
  "key22": "4AJ1StASKjGEUfUwpFFjuqVPHt44HEiGgAzfFTJtNUezZLUSUDzsBXwwAXRpr2qU8V4SxeXD95ztqz6HT8HZUVhg",
  "key23": "4pg8CkjjFcEcKEnEPRUCAiEKMVRYMWdxWfeEB7opnrZjQwQyQGowt3ezRcM8qZsDhoZJLd7GjQbhGab14rxiytJq",
  "key24": "4tgyVohTtARPBShNyV33EzDQpoeHFmRYomBZWfc63Uv9EYXNxP3fS5zaYLkpDuJuhsi6qVhApNHDyg5gpvUowmqu",
  "key25": "WrfBBowcihufCrGUDhKGXd162u4dr3ob9NGgtT5fgbf7HLGKy1TWD92mRHQdKhjVEpzHErjkZBwpZnFFxBSMwPZ",
  "key26": "3G9ZzGN99YzCFT6PrqvhKXCKa664RiLCXmiRsdhgJ3TxQ2AE6Whc7mq8Ycj6PzBUwEZXpUT3TCSt7G8wGaKvmfFn"
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
