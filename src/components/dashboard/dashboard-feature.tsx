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
    "2D2kWeX8fcKx5WCrdbQHB1WKs4CBuuCz3sCpmxDfuNf6J5Ga93QVepnhn7bqRP5Kt58AJthNLAfZWizK3VUH4pCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "trGdZrNGxxw4T5MzHdF55VyuUa7Wfpck22y5gumxyLqpzgBhm7wuZS5YMZi4s7hxtse95T8rbHg1RCLZo2LZGEE",
  "key1": "5jKPL1RJwqgtSnCjJkVKbAmN9xuxBufPNLf7HjakwzZts1uJUN8E7waZFYhHvVSGmCqmBDbVSFsMA4dzXs68gWyi",
  "key2": "5QBAzQMzPsEHkU1iWzDrr9Rt3GdUCiZtWqBLN4stGEmLhSX4MGckeosYMJkssmbhMgm7EYYcZMA3xcUvvvNgQpKn",
  "key3": "4HnfQEjZNVhJfe3n19PWaJUJm2xczDFEWg85FJj7Hed3UktHgy2Rf2K5xRkmhLURTQk7sacSt82cXkYKrEnUKWQx",
  "key4": "36igtEXQFgbe3974fpUBHsxQsGstUQaNeck746c66BwzaeSbGBYQWJWMX5BtT5UGBnDm3BGNZ6fG6ALiMvF1eMZW",
  "key5": "2um4PiFWH7LS1eXdVkhJ7Js38G6W6JwjkYJqN9gcUKYEfF36QoqJw5fRvJC2MZek3zbRsyhbVJmv4p7nWEAUG8Sj",
  "key6": "2GXnvhH1qRtwJh1PwH2TFteEZPQsKBDhQi3PpnxBBJ2jfoxaGHTpknpW8wT7GALEdFDPMvEwsJh3pi58wBS8fYQJ",
  "key7": "3UndFSXqYQnToRFUTtoyBW3Qd6jeVJDaowbL74EbFmt4EZzyefGW9BsvK3cDpW1e8Pao8af5rv5EFqu62uKGC1NV",
  "key8": "44UBfhgGeVdv8JSit9eAmC3THWX5duo5Sn6au3jMuKk76QhuwYYyocBSb32DBBL6r97s9akV7MHBjpuGS9BLPTXK",
  "key9": "5Y4GNjh7WVjgE2JNre1Pn1SzpwyiggP5edLqscEkVCz2scHbzgjCJ6cSU4LDDteaWGDSZ1fR5ZNAMX5pXdBue7L4",
  "key10": "5aqUNXHZsmGaKxdn5gitQ9KZWcSicQ9ig9rXnsF8Tu3gMuRv2YaS8Xt3crzgbAwk3hA8yraABWoAs6r8EECszEie",
  "key11": "25wn65ikZPsu1Pf62Eu9fqKhrSoPmAunbvqa7zHeSSQnUKYhtuiuc6AkJEzjNK1agKWgUJhDhjErXCC6XwUhXDe9",
  "key12": "NMSyDEB2xeTaDA2B9ZPp4fYfht5uEsVWmYvGVFd6cEto75iPrR2q8jFk3Vnx3AWBXdvPkC8YSHqqNnoeZyYDH4y",
  "key13": "enqWWcfp9ihACjKGc9irR1w4wTXsqRkdw1DyWfpiB6dp9VdehhLxEFevVNYPtaSyhA3YcoCt6wub14NJa36PApm",
  "key14": "3xs65VVyvmoiqjHqMfdkZTw8CtyuUfni8rrynPcCCFL1DbGupuPD3eSkd2DcsMtRnRxJpedUWjo3CsN4tNzeoHea",
  "key15": "4xWkAMQLunXgR4GsLCCnWKWdjVH7m7ReZ1SeTFJjC14tEmuJ8WmfzCwx6J3sPzKHcst39xNXB71Sbegb4V4vF4RE",
  "key16": "4aYR8zFpptTrHnFgP4RwMZPhXLEKwA1sjZbTz8tHf9SBUHM1kAkheCbCjuGsthx33WbgtF2F2UZdV3L6fUuLPZNV",
  "key17": "Adb9UVeTSwYjZMrKsEzvkkwbY9hmaaktV6VPstHnuxiHee5BEq7cbaZK57gvjhsD5L1cRNoZiENiejyLzTt6bZV",
  "key18": "2mvCiQH6mZnfn5utW72PYucKjoZWB7zSJLC8z3VZDxQ6FperU2xAhTm8b7WiwjbgtGPLkwXdfTTGY7ogp8wicSPa",
  "key19": "5XTVNzRCjNZGV6fkCNhmqrBTdqvPC7qCr63wTnCaSxvsFT8r52w3y5pboNUdvcXHvdpTvUHhwEZjnrVSj1k3hej4",
  "key20": "2wnjKAT3Q5ioAx7pvGyLCKLy8UbjZ9BadMwuEsf1RsU3o83VggKgGe6kU2FGZDu9z1s7e4X27G7hUSWzT3UBxZM1",
  "key21": "2VLi4V8x3C4dh9v2U7gWktRaKEZpfot6z76r5tP54juBuGaUbmgJoKDCyJmuV6Y4tkbG2LXosjSuCxFc6kYgrkzE",
  "key22": "3MbPXxYtwbmCmNaaFbpooXZEeDBGJMJrZmCqvuCWNgQ9r76fzEowP4Cg9TiykMCw74LcSsnoLfGjkWDimjZLXnTy",
  "key23": "4eJHWwfuAAmxTw6BdHrvKQM8nTXeYZYmJ6mymrSrDbht9YzwTrChhgqEgo3eiThF2gYQ9nFXLp2m7qonj1jR6kpE",
  "key24": "yP1A7NwiuLCjuoYzv4GcGpY9CMiCQDTf4JXuKAYmgLqGjne2RiVnaZgqBbR91dhVBQw4RFeWfXmPnjtTYdAK2XQ",
  "key25": "2CgvVTPrcvpD55iRjXzcG3B9dPQL3s8njG6Wg8TGbLeccKKPKQM65Ds6BrE9PswEvUjCteLjgPJR52eyLkNjcycR",
  "key26": "5EPBzbP8MC2mFP3FguTt9fAGDuVFRBb3Mj3wvHNemvWzdXtfbRc3LKivW4wpaGJAT3AqcX1Fv9hnkx5RfWXwFkm1",
  "key27": "hDxNJFpeydgnXJ6B9sJqD6Adn3TnCDCL2EAm1tnLVEvuE5zRzx6rH9Hqxvhgc79cKnn8T8SL18xy6NrHywnKMnB",
  "key28": "3qtt2VXZk3yR8Yu4JUESfjCHpdjEx1XV3eAiJuWkSmJ9MrWWkScasFMPHw2p8ZtxXUaYzdxq4Cne2RMUY3ZSi6MX",
  "key29": "XZkn8UAeEVgnRufUsbDR5tCdWJAmZv1WVRnz8aMB7gMpkbZU6zd2ustGbsvUpJGhMzuDqsnnrhRpeaeaDvMDX6E",
  "key30": "2VdZzMPBmVoc3171U5Yjo4jDSeHnGPYkSj44dA7QogemnDhqCzTW5eMChDNXZ9cHcZa6PcudhSWCh1xdXfwNnASp",
  "key31": "1MAKpx5NygRqzWwdCsAG3ck5TQ6XT7CryKsVAGvFxVGJPxNY33WyAeQghGN8Ncsnzsvdn2xE5CFWypcSXgAD8gF",
  "key32": "kd8AfqYHzS9UGxbQgBvyDgpFY9yKReVReYzAL8eq2zLbPXe5cvxj8LX3P8Nf9AgnLCCGqkXbsvzy4QYCt51mqcK",
  "key33": "3yjUtaXrPate8xHUE3rcLmXWsv9gupphKvovsbKPUMGm1wxwGNRHfQkHD3dDy1hZCHkkYhXbzEeiHGJTUS3DaY7Q",
  "key34": "2njbK6q1Ywca7ABq39BGH7231QVXS7J2dqXk9VkQCy4Xi3gcBGHS7bVv8gpBzRbUpSjASJVEtUrU94YK59bZJPYg",
  "key35": "3fPUWqScC64DXysRgXMEe3pZZgZHvhdjTKxfKuDgNjJxWd95n2gmRuMEdTK5UxwNfjSv3Gg1gmiUh1trbWupMuVz",
  "key36": "5EGtbgbcSCinLjsnCqiVAHM7h8W3ycd7GqCyVzfseVVedmyfBsGDPptnwVFX94Vxqi5QzN6r73UifoCxjmuMRVk3",
  "key37": "4YkGinHq71vJ4vnEw71znCLs7hVhe4uTjPRbx57V7vYYEMPqvLit4nyKpYGwn1ymTW7n5g9JDj2xQDWnYNk9xuGr",
  "key38": "5n9Tj4zfgrGmLH82Ta9DGFEhr1fLp5zr4sNA3M82cGRdmMPn3UYDiko8QoVAUxegVJ1zxrUP2Rsnh9BFCxoyGN9q",
  "key39": "b6Pf3hb9EGtMbshuQAb3ghMn5bQJR9oXMqSbGW8PFKQF3X2SaDKS6FJrgc2qRYTvhFR154icmDqMjnST8BtUrxG",
  "key40": "4fNM9qUBipp6xtCMXTugG7BD2QQCcZy4rSieLvVhU7G4siZmvjSvBgHUVLpYjaQwLtk2CX4jP1twPF4B6ndmh37s",
  "key41": "42j4kTogFwLpwvnbmB4e5uevbFWXfHniaiEqi6CXxCa6nCW8QteJhJn9zphvZLwso7NyQHuGTf4k7ruiVNXYrTZL",
  "key42": "37QQzrGtyjzq6bcuBE1J36VJ9WM7p89FQJN6hDh8ytVgK1Q7QM2oYFtKwX48HQHvthGMEP5wLu9VFhaNDvduXvuR",
  "key43": "L1K2ydRwWWKCrakwhTLq5fJiRuZ1FFxn4F5erFKr8D1PJ6TJiCiaSDJvMMmBo8jPrZE4jBKXgyA3M373g5e3Wxr",
  "key44": "2Uqw3NR7TSstN7ZhVbfbeF52tVxu87HEeTLG66eCEo5u44K42aA8wCHbC9Dg3fx1bKvQhn6yxZeEvFj17qaP3ZSK",
  "key45": "BFfZbxhUPKGAsS416nBMQYLhRbGrrVBPLRZDLe4gExQPFY1sojCAUKiqXuhNymZ8FvE8WwrCH2QQdF6HbfjBKvH",
  "key46": "4G5Xm1XaeY16xcWnQ8m33a339Y3X41hBovJfbrdxLVwCBmfcWDdpHbSqApqP52PRx8NVMkPk2im7vs4y4RvBPnX9"
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
