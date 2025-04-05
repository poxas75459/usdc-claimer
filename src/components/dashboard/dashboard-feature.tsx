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
    "5FKBDRsjGiqC3oYmGwjBFmzzkacdoeKcEgyitg9rhUpuU77UQz8fcHHWSYoZRmdZAoGTzJ5gdXHWgLiJE13W2pbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VLcdiVkbkZw3TYxMfMyx6LGa7GyBEaUpm3pt93HLfWyqDkmTM5EjWDx3uhiaM43Wfb42FPjS4PyctZAdgn5Us1e",
  "key1": "3E7kZ1PJskRJUgWmNZaJvPAEEh7x1fPnuPibCGSSF4DDDDam4Bi5cDsuCDE7eYLghwp2nPyLAjnTKq9EH2yveH9S",
  "key2": "5QtquejMw3s18fWF9HZP8mBY81E81EzY3BmfCkxoV2bdfhDzgeKA9iUeVou9xF8F8pZ61vZFXy7KYvnDe7H6n4EA",
  "key3": "S6x48Ysbkpb6gQoS9jjyn7DrzaXVu78ERqhhatfJ3opzqADsQG9UUEXHi4F7XDBBjyJ3iewGKK4xwvJFJuanfFq",
  "key4": "4EtmQ8JxDcuHbhXRhmB9K33hELLTsfxybTZqJDwgX3YAhcAkLdHqHvQbZeWmEJDqtqrm5Mt3UzHeoUQdadMGXykN",
  "key5": "DdFWDgEqj8MT1FyWVm4T3VYhVvJv6Lm4WoG9FAHmykLF1XKqTPC2JWfhCTMhbAezPtYGMtrEkss71FZt7Wj1TwK",
  "key6": "3AVX69XRTTwxgDfhW2sBcuPbnbUcCptmKfXpcgMXT9G1idhhaJBi4iiwMJcUjA2basKzg9vzd2nd6rqh5VMQ8msS",
  "key7": "2asjFZ1bGGAqsbgsC1VFzDFe16aTqJcizgrFm6ADg1hTMNgY8cJCkNTj3wyrknWMttSp2RfeYQ4YAScViU6H5sDr",
  "key8": "5rAvpeAeDnjDptwmJ7yekQuKedsN2HwJEVJvH7HNkuZzEPHtbYoz46sqe2UpDDeRxkoxGmvRbCYsF2YCAcYETdpZ",
  "key9": "5PkqiSojWBic4s8XsZWZkJsD2pxSxdxqeVqo9uoLJmWVoeHXofzQP5TDSY4E7sEEQXdCkzErDkrqtNsAmxULhaVH",
  "key10": "5rG22c4kzmcEVtHmcBi4w4knbb1Be64nG2JK4smvcpP7NBHRMaUVdzMbD5gGhXquUgapS7djYW4pdaidU5Gqzfk3",
  "key11": "67WjpLwm4hEykuxXgTAJVpzZs466nyZC6XZBRXRcf31cnH75inwcJf1GuLiDrdjehFvNsVEAWP1hhp6F2sjKkakL",
  "key12": "5U5zWXhb3TCpeSU4qcdvoEzLzPG23ksThXZiVaUQRzyQhtJtaTRu2w3BhfMzH3uSafAuKpuTeqhyXzG2LsGJ9FQ9",
  "key13": "5HEuByXxRmSvroonrmVqy3svZaZsHECL1gqxBqEwWbJiKxJHEgAXrvKSZQ4dAuYYAjAfpxYLFP2fXPWsGswB797d",
  "key14": "4RxSW34eJpt4KfvhUBWEHZXwB7Mu6wZvXH9dGcJ6zvTRPNcH77H9REDhtqfuxSWkcWVEcaTcNG89swV7VCicWiys",
  "key15": "5ZNoCWu4FViXk6XPEDgZHLwjvCKf1S9Ti3a11fakoYy2paP8HUE5pgGkBTapUH8FFT9XuAUrRi9wYqLJExq2DnAK",
  "key16": "3eJmBJzbzKPEymd7B65wDAoMhuq3YzXhepGvRnATZ5FTBiwrd2Wb41NNduornNWfGET8j116NPVDpDNBo5zLwSnM",
  "key17": "2iasyrVP92XCKCb2n1HERYftxXikCyu8mRm4i3jTUQhUZSn3ei4tYTHqEAM8mLNbq7Lpp8RP1r3Q7z2KdcYWSG5S",
  "key18": "5iyHRswDcqr4q2oWxKX7ZtvBBvsWKnY5GzPs27Fm2z9YxnLTXSYjoyGqwo8yM8K1qKdDa1V5FLPgEsVdquFSdos9",
  "key19": "4T5pf25DioVusrPYrY2ADE5T7fwenpNUGf8jyxQvSaFa29KYvnMcfFXUMjYiLrtfuw5XZS3ZfXsF3nDBw4TEBCFG",
  "key20": "4jLrFmeeG3mnoBn8G7fAM2jTLXXs4kmpQowEJs1Xq6tz4jtXwsFXu4WvCGpNBU9TenAdYeyMmATggqe4c4tKrqku",
  "key21": "2H1LpeT9dmiiZUAUUKj86rVQNJHJ3TQbmTfFNjihizFLaHAYgPEbyD5S9qCLFxVQbQFuwmKRy1pGNyUzBx7DYA9",
  "key22": "23PvC759pgdVgjG4aetRLcrdhkYWQBmqeisWeq8ifMb5ZArJi9rh8TUJcbh2bLf5fx9mhismsiWPzW1wqRGD9gNH",
  "key23": "2otgprN3CDBFYXVZwfP9ZNBK2eZUijgrACnvCZa63W6PYQNhpxQvpvRSb1ZUMVuDBdq6zn64soDGdCqEhWXEzMvz",
  "key24": "zJJMFgpxqZZCEYx1gfTji95p32W2qCRvLuSqCaYkDSTTjARTX6GPaPz4wboxeuzEiLmafRaYtHGjr76f3LuZmn2",
  "key25": "4NAcaDtQkgWchHDYMfhXtSLwWngLwksSRB2M8Dps7SoiF5iHMaNgTJh5oYbzLLaLVrEdzVjgrHiMxp8hgfLLuwiM",
  "key26": "4wdZshtL2aoTWnP3vJkHu3vbMmnm8e4Z1bXtYu1zqRoxjd4zpLSDeoPLJMuCdtxGVwBXinn9vipqLSr5QFs2XETJ",
  "key27": "3KaGUEzkADDoVhHKYhnNKUVaKWW9nGijze1RRbjEGz8e6da8QPv8nZw9B3vWyztfvyVqEtuuFaXvgRrKVXkqyrer",
  "key28": "zsbqsUpw1YAZtUYU5o2CSieWvf5ftpYqq4Ke8LHKLJ7VKCqfMHnHZ3Gt72TbhDKQs7nQdc4C6GH3KivHGtX7kL1",
  "key29": "5HYf6uc4hGeJTN8JN628KkWiNhZ7hdyVTSr9bQqSTheZp4GimHYfMhn6GEiqrMYKsDwA5xKmwwQWY7C56LyyWimc"
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
