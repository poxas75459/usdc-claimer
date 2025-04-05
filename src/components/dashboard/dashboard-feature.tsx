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
    "3QEhCcG1Fw2PDoLuUJbwMYPoPNr5NcTpTUU6dByXgVXM2YSKzKtPEcmB7F4mXnKTNnW7SyQSLvyw5whBYSKQVPLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YhTLYWKy7h5jUQhYnckWekHWurUDetrwNLfDB9qmTcqkhvW4n92proxLHua1y6nDLGA77qwfDSzgCvvJh5Emgmv",
  "key1": "SKokRMczxDsKHprsoJ2GMXuqrA1yAK8MpF2G6QgKu12wUdJsi9Emnn1JaSJG2h9B1PBaYdgFMpudErREMk7jyi1",
  "key2": "3ho25Kb5TN6VBaJVcH2PCxy619JdXJtmpRPVeYNKYFVM1vPHELFJSgrBvxVYJpe9M7YG8cF4ZvSwZ1qUMeDDCENr",
  "key3": "3bbhrcqoK71LRfejZER5fWV2n6SJGfe6qKaoi1srP8guX9Jfv34Mdgec5nS3eMsM3qVv7mxC9RnCEfKjrwJAyVSP",
  "key4": "5oZd1bcVeuJ4VVAAVYAd9NmmgXi2EZHZmXx8po8uKAd2cK9vCqiyQtXkpXZjBWc2k6tmzG37a9qWmx3TGiR9UzQs",
  "key5": "4M473dK6UEbzJSLcXgzHeapxKp6jCpiDjGhgbAfGLA1kwHAcmQi3HqdYaZeQqhrMVcYsaHZ7uMcrC2mYJe2iSMcg",
  "key6": "nCtoHo7GbCMjoimHFUwGYk4k61Z1xaeRw2bcMRo2BswUdGXJPaEi1pqYfKeoh7LYSkExHqwSGpirqJsa9yDX6ee",
  "key7": "3hiRehEfpc1zn1J7Re1SDgaXEx7g3u9nxF4ZDyfUSvN5uSSmY2dFvj1XCM31YXfB5v5WxS7zDAmgFvgqUfvdTYqj",
  "key8": "2gp5zWE5NqYjhVwDCsVXaU4o2NDC7uQsSyZ4weZap8vXmQ6WmxxepXjVT3QYrWJvXcfTLc5cnCSUEBZWzqK1G3ad",
  "key9": "3U4qYx8kPWibDkUVXFeY5jEcMW9w3Zw8Gz5NP8uwuzNGrq5xqvQ4PYNh11ZK45c39pK1PjCLWFsDBLvTQNxxvQVk",
  "key10": "4wdJXRbxSktfjH6k7aeGMjopQJBEu4nytbDipfyQ66F9rDbkvGfZ3GqEx9AhGKeaDwNErtpTjAhmTURE5j6mN8BD",
  "key11": "4pm1JMYJiKGEmLV73JpTkEeTqLLBJ66F6AmRNDb56YJiPHWr4nJBmQkAmvq2i3Lup6bb4ix1NnL68sKeivRAwhKU",
  "key12": "FGte343Vd2ZMDDfdTy9SpgFv6EK7NRKCxTssQN91oeMtfteJahTZfqAEYSFRNjnQK5NYamLT5bQUCctAoP4qcff",
  "key13": "Wc2qqCi5WpkPKwHuR4yZF1zybRuvr86bzYeRZ2R6ju5FVs6Eoaz7bv2RYCNN97UbhWKD5JWYiZBKnFVqS7QzXQq",
  "key14": "4rgjQCs6dbHCYJgcK2TjrdyV1Gd6ffrMmH6itnFhD6kKMXtnZXMrQXfHTQVJ93cm1pAS1dRmk61KPGxCbR4rEyCa",
  "key15": "kF4b53AY18nVhCAgFHaDwHL9X5ynwYGSzeP1BxtXj6JXjBSTTXwHuqUHcg8buqkzk899uqpex9hzUfQxSYuHpyZ",
  "key16": "42L4YP9EPJuNLKERernXYmQrE54GqykkGFVN6fBQvE4MU9BKay8pqZsojjhM9scRBLUq5gcZbTkzuN6c8EHKmriu",
  "key17": "ftoTAG6Bw71w7yFWxu1nvnmU9Mi2ufLroxTKjwnBnMz1ncUZWqjEnT1dXe7dpwUpEp6PSyxSTiaRM74wqmXNYJo",
  "key18": "3y9zCFBHbzHxswBv2xNbmErqmcWXBHdQnX1Jjf59bdYTrJ5qZRsdWu66swrQsaDSGnPebvjnzbY2Fre7kVYa51Ny",
  "key19": "5BGHYWfd9nr1K68zS65wZZ2R7bMvrDorUbKrdDCFts1YicZeDWkg4Vaz1aY7djkNGVnxrUGEZnuQqZpwZTuttWoa",
  "key20": "2n2MHLweCWi9uc2ishtendCaXitwADC5Cr3zypTh5rsQYCSe8RD86oHnnFJgBaCcu7f33rGKZewYo1CdarMQ9Qyk",
  "key21": "66zcRCRnTsSvGGNnDbKTcP7HxVrkkUjiKb25JGaSfRXU3F69uzvyTQW5UxVvbQKnzyWREig66oPTcirfE4mrQnLf",
  "key22": "5iSohKphwZh7gSSYC7gkZ5apoJeKFWmzwQVKTgy7ymM8zfwRQkk7osAcZawE8dzxpP5MqUd4MUXXhdz1SNehSe4E",
  "key23": "2ebp2n1WewhvUfuAamJHLpSWGfXPuTQYPsafrpXGoDxMRoF89i2NMYWkfhe47JxAocSCbCjHevi1P5SnMivNaqWc",
  "key24": "qfYgjp41ZcndeDeG75Weq9TY5E1Y9FhSdNSr9KGHT6ApByYZTRR9EDYZ34iUdbCSUiJQoxju2qk7qoxgrT6mW55",
  "key25": "5r5Qx8pzFWd2fvRhH3szgazx93M1hAkp6CkMCPv6EokSf146qPBDLxR4Fo3KnZTzBSgWTGrCzqTYvjuLenRRTokG",
  "key26": "9oiYS53z1xCDYFYNkPbrwTBWRYBPSU9yWHFCD14DaHbZtoygzXMh2UNQbgJX2RmcH7QJSMH4HMWasqZ7XN6dFD2",
  "key27": "2EwEpBWtapJbfYsFnq6QWSNQGpqaVRyc6ox1tAwiUreANgcNpwMntLLy7BZ1RrT6BBw5K63a2j2Q9wbtj7EfTCuv",
  "key28": "KYAiLmg7Xyh9BxDons6XixGHenKH82hoDVur3KLAgMimGzvcY1v6RbujgZUiV5VTqy8ZjX47p36PHDx3DPtrz8v",
  "key29": "2UPmD7w4EGXRJy5P5HH2oa9S2rrmDiYueNDPyzpvEPNHcwMZ3TTtY1teYXotsosNGmi2d8qzk7EW3rzv8BVdVND2",
  "key30": "vVEq2abnrKJwKSq95mA2yZazUyJoTkvhhB5DJ1dYsf6M3vNS2ECSzvTr9gyagAvLPUfDWm4iC9yoZvMoXxvFXSK",
  "key31": "4BW5PDPYh3Dn5XLwJqMtbDryixg9fmBCMoZDeZaGpfuU1dCYKbQB7dXMtHS1smEdhiT4qycZzGMug4hKeqVpD7D2",
  "key32": "xDsTGYt3EgDz3b3VCgV8Kipq2jHpUDhzD9VpxRsuAfGJuCsKpALXwAR3Yy3UbrYvL8744rg16igV8w9f9DMu87s",
  "key33": "BeCEv4A8LzVUEESNGd7beYzrD6759ZjSmiGvcFjRoEzYsujqFzpU7vrPWx6M1ECeNn8JkEuuczHwawYq6mnNwyH",
  "key34": "5V788ZKiVf3JG6s2WYBTidhr7CxG87kaniD5BCPosW34hWTqsxA2HkExw7LLZvRUNCQ3sxWsntX8oqNFpJXw421D",
  "key35": "4UapdGQ3AAuaMbEMdMVyCxHFZ4Mdgsiubc1x16fHd4w4D12UPTUoooCtvT9JRiPEKjc2LQPu62SAnkdn6rt5oH6U",
  "key36": "3WnECQoMyndjtAcFAgLt9amZCkgrfct42vi3aeTgeYVsTQRCwArM18Xd4i64d3qQYQxMLe28QF9mnungPj4YprnM",
  "key37": "44x145VN4A1zn25QXC4zcDHeNAjrnmDdepbJXBG82iQuRDkR5cJh7wcc2ZRih5EpaNhu71kFdX58UTrMefE8iXiR",
  "key38": "4HTKh3omvii6YvgD659okvdhKhXeQRiYqz6enVpMD8uzFdvYY447wSwZArTvXACwkMZXzkddb9FYNWFfn7pdzZdA",
  "key39": "2VAhA9XxYDQFYWaw2inR1pPjN6c4G7Z2t4zZSBVk7CNeLVjP8cgRqJcYftkNTq2V26XuDDvvTuhU2qF54eps1LK5",
  "key40": "4kvfuMR9KgWfb9nvgzKXhRKu9kF9hmAXbs3AeCx6t448oYQhQ8E7Fhe6Dv9Jm9j2iwtZnqU5LXKV2eUazidFL6FY",
  "key41": "4ukvvptipNy7XqCsj8rYvxcavFMfDbvRzCVNK4Dv7PrDDgXYJMHHoUerNBpbfnuCE7Pds6SJVKNf29NAers7Fjeb",
  "key42": "2cugkXzEmE5JkbSaSQrefATCrMtkuKPhtWBocun9v1wzLc6hnis9tXfS6e18dKPNy9E1UgaPT7RPn4wfbD82zRWF",
  "key43": "4bcKKX5NK5V8rWe6tsC3ijErFwyQqSo3gR8TS5Lg7LZu7V6s8kwMbPorWL6zmx7dgvd17VGv8S9FhrzdWVJMm2ff"
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
