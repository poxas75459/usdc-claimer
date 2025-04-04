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
    "5HvozRiJQV8RETCS2Z9KNR7cEXZM2pyzEPh7iQ2WvWUovn1v3tP5ResojiR8hfwcuemLVKEfbxEof3avwLPx6H6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zfkHfLdLp6jEfzH3nQk1N5zELjd6qisRn4V2xfY9rkMbUp5LenRfL6ai2pwbBEz8yu9rvRsVCmEazo7ydFAnuLw",
  "key1": "56gHJCYHhDh8YXAy1SHXN8urzPBf31JqYB3CeNbLT6kMmiwuttH5ZYWkoFDVyhm6yxGyLgG8t89yVjroxvVPaEZc",
  "key2": "4W7XaTkoAr8TB6vhRR1tvrFtkoxFjUzBTNyVdD9oSc5DH7c6yrMD1KetLDStijgsYWHuGUpTEAssAUnKCWjC8f3t",
  "key3": "2mKTV5XDZEFwywyRCyvUaUrM4hyR8mQsGTm3whohgez8L8ggSt6a15jjs5oZWqZsbEnd54ieqBe1pegkTXuuZBj5",
  "key4": "ZvVyPv7BiGCfZVZiGwf38NtBgoDK23romjSnN8wudEqBYtHzqRL46Mp95LUUAdbMsGDgg2UJ3GdfAxx6TyipZcu",
  "key5": "4d4vcz6H1DVQsKTNLSJc2wLrrCDZcW97mGH9WCL2HhZSdpqBhhYyXqX3swuBLCXEy6Qf6shiECKFrkquDt8R6Fxn",
  "key6": "jyce2Xvti4M2RhA7vV95vBpNuCTwngiVGK6LmLPHSXrjCZKC97Vw8dNM5LZiP1tky6yKtj3nTS8bTP3aU44s7x6",
  "key7": "35y6azB5HCyZpqBqmm2oKppXpnCDrzcaBjBfc5aCp8mrwy4juPxJozLdjC6aARQukwDM2nhk9ycab84w6XiN8Aco",
  "key8": "4ZMENjKKYwgjoNN6kHC2XgHkmDZqsNgXgk7eL7UVhxPFmTG4Vjx1yLNtkVaeDfniMqZzGrPjsztUBbGgedNNno3V",
  "key9": "21VKTRTdQeVFi2vFtMwCenULePkJ2RzwPu1GTxoiAuY7u3bicDYqeqawo8SFKhpPX7qgeVd2GNVWHLA28AtMadr7",
  "key10": "4vxs5YALiwKBM4EE1zHM4otrqsFsp5KyTrreUS2rx3mdFWiergfcZh9NFw3fbbWHG8qhSNp3PEoCcV58fJJMiNPY",
  "key11": "2v6uf6xbWnaDcxi84NWn7HPjpbS792YpFN3gW2mVKJhZHECojmRTe6PB1RgTLLW74N9XMsNM2j6UJv7RX5rxbZfE",
  "key12": "22Po1YosqyzDvnQsr4e8rmSbvHseuRppRFgqsF2wVs64oF4H36WbBiVMBDpvYEJMRUpoi3niNNUyVBV2VLtwVTi7",
  "key13": "2Vt7SHGzYLJraV4wXc5QxgXyU35dsQMQj5CXG3KiBiK8pVgDuRyCftTwquJGBU2vvL6fJ1QEFUABYGtKtMoenTyd",
  "key14": "2E6x5aJDgSWYEN7RkVGNP3rK2Ed3Nw4PVRuVER1mtduhKahfoUC7NpWaoRKezzMwy6BZjEM8NZXdytCooKbXZXpM",
  "key15": "4nDnekKBzfVESELzjduyqfELHCPz9siJ3iv3TtzxqqMc5gbGpp1zG7hkpX31TLcAQJezk2PiGwB61CJHbqjRFiGt",
  "key16": "5pRZze3pAvTrcoHWgFF8vw1GvvVdJAw4VYZFNkfQPeQAZj222Dw3mXh9P2TcYADrCQAc7ybGWxqCvJsgLw1dK9Ze",
  "key17": "2G9ZZneVN2RekskHb5au2DiksEaZtUR7mE4xF9i4vsbbEzzhoWqAYKQxdsCEuXC9eKFHrLN96er9rRrXMyzsLJ4L",
  "key18": "9s5Hwe3U33oGVzjkpShbCskxJzH34Zo6uwPkVA82jULMdz6nSFkzxy7fEAdcex5aztp7mXH7HqJuiu7qCwiJ9xh",
  "key19": "13P6PXC8XETx6uoihXRA6m9Sw7ZTD6MixRqDYCaWwjWe8ZR2k4G3vYwCX9spyKdHckXBdvCeiJaXjjCVfX5t4vL",
  "key20": "3TT8MzgZWFeGD9UyYbR4EtpF6XCoAqSGVBy5FVAyPVR8ovPvCY4AmHJdxrH9rLSUVFK9tt52QF9HKtRemTB73y3J",
  "key21": "3KgCfhFLD9QtLKfyry1McDqHVoByaL2bPXhvaQDgwhtmg3xAQQmKgXSDy3v7c5vKSQyUMd6D4qhoNWiLbohMKbd5",
  "key22": "5sx1Ubb6QBzstgxfrfGKpDjMqFxQQoiuEujr6XoCs9MzYgz8n2ZSKvgsKrvPXgJdHPVGePSpqS4AcuapMcvAELtc",
  "key23": "3LQkBWE8GsBE5vpXVknTXCmFbJ7AsnjSGA86cCvymsmiZSb3UGoa1CBikiD7Gn16vWvFmEr6YxRJiuHomGjyoDsq",
  "key24": "wg7o6JeLdHY3TtDTtMr4iYitCt661my4hhWbgvKarVsJoFVFkGyVrWLDjjtjiGXwLPG8w7QVriZoZSnw4NWCVoC",
  "key25": "5C9SopoMB3aFnFJnkd3hmqZLGXWfqTw4rKMopXRcabWAxsGcw8p6rKPVLSA3j1vhkXcAABdjgM35MUGA7T15qUnz",
  "key26": "32H674PKTjUSWWvHkDrVp8Wih5mpLotpisfxMWpEkxvzYJ3K9YDcU4R2FMFBdWsPAweefYEQwedroXAyDRc2WxXP",
  "key27": "xuFETDnVoFEVpQErwWAv2AquFhV1oxzwMkVE5NURVxNcfEhN1J3ad5UxXfASMhxmCUw7YoSww5nWLb8wogwcSjE",
  "key28": "5VjWARPxEeu399QtK8K3ZTybmq32rHxdZiTzqh48eWHpj3yfDYzZYyxMUW48hDY72DWYXRynegY5bMdo62j4wwTk",
  "key29": "3qMJ6CPc2k9BcYEXH9bw85fBXqVJAwFf8GRWAyvQDW7hznSjt9u9bAdXTAwZBJsAUagnr5deqxSw9YSxf1LmpWAs",
  "key30": "5RCcyzpctJDch6q7WfYwdMhaSmqR7wiFLzJRy71oo5qzRXfJ1iihoskmYvZdFMD9mPfYMzXXBnKzF8kNfGutimda",
  "key31": "GJVZgEVVq4xKUEd7VHpCiAZut61ozv8tC18pxRR4o1zSHMvCA3wD3rv319vw3qikZDuTUCuWJs6NPcefppcL3os",
  "key32": "3W1zaMFzDXadyfrcvZfQ5hALGdphLeQxtZgZwJEAdsxpHNgNdQZK6QdEpJ166W4ZSPnUDUdfBhBEFw5REKZBibam",
  "key33": "4686e5o3utZcvSUkroquKVzjBxnBWzSghGkmkGBThbbkqN4nxATZk4Lz5w3Ua2Q3AEsDM65hKWGGFKCTXCoPnfno",
  "key34": "2GpQm5WZxo5m3riD2om1qtxA2KPeXHugRX6UAxPxbBNBJExAtmBdUMWuNuKF5MKweQ3Vk2novHqpzT9NAuzQMYRb",
  "key35": "WbM6ZN7wbYz7wUBqUBwQgeN8YiPreazYXMfWLxGu2n6DRTAU4Bk1wHw5M8bV96bofXDoHP9JXVNrGAoDajLQHrR",
  "key36": "5ZKa7JNYAUv3UwYHDo8ZvCAHpme8ckndsSk4HvgjHXnSfifLSpvJv7Y55BMcm1ujKGb4i9f9sZbchJU3jXB1tbVR"
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
