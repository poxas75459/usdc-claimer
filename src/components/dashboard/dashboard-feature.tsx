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
    "4UqEKF3aNT61H5xGrYRVnFLGYptMz7w7PRZrhaZVtcwJTBevA67EzQ6LogRpgQhPqsMRFUN5GR1eVda8X3gtKsJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9msuADcPnHrnRPWw65C8LB6MuRfWu7ee4n3ZsqMSwL5mHUhEuYPDM2MJCQfciBB97NtobPKvvqKzpUJFzb7FzVo",
  "key1": "2kiCMmyGxR5MfgBTXXrBWNhv4ynwdmiQCQgNxG4DYmXWjznJoWSkfLWCfKeenqZxYShn5F4SwwFwzPbrthUasFqg",
  "key2": "3uSvpkXYwUTXjuM5ZGFd41KnsWKs4ChYaRrEck2JxpEpyU8n2SkYXz1DGsSErK6GvYoknyLgDFwbFQn7krKsWjgR",
  "key3": "3ZsUx4HGWMV68XCQFVZsAsVe1j4zxgL3Rjaf1FgLWAtYF1zhcb1zFJMMv4weo2yMX32zwNGEK9dUXVAL9F2JnyhH",
  "key4": "3zqrpgDoMKQbJAswac1SiNy8pdwqrd1Dy2HECqrovqAfTZoN4tWLWguZbWjA66X4VpCXNK26r2KXLQkeJUR65fSb",
  "key5": "saodnRHGETtPsc9ZEWsynkM6tPYWbed1Jkk8WwYfKSb3fqQrKissZWdBt2i58WP3cvvWTqmzQ2MgCGoGqk6Q9Ch",
  "key6": "x5CTPJJ5P9SkTkDPzwMz4nK1wYn8RY6KUzvoxyYcpS2jqJ1hXhLXiuGHAixQvSFhnicNobbV8tNZnHcV3t3MS8i",
  "key7": "3j3UxwMMmjGaVLRx4UtoXbAKakjp4sipDoUj52HejimdTSg3EXJe1QoV312pGEZbfq5pvL8E8WEUFQabDhPhQ6bs",
  "key8": "5tBmc5wWP1kTmwFjQttrP3uTAXJoGoLJYT3MZ4vUdU86M8ipSPLsDwAuhUu6kD9M5a491Vdqs4ukJngAQfaEkogs",
  "key9": "SvXSzdNeEpraJ8EffWSrrTuJVZr23YTwTzkQKz4fYM26j2ncaWghfYaA86An5GBhZ7PowJRq5b6s52hhtNSt87d",
  "key10": "2hWYosZLdFfU4xWiWnb8DZxwBK7LVFaonczDCH7VnZqsh4CfocdFZwwNb8JxcTXtZ3fwALFofccrwi2YtykkhrkK",
  "key11": "JC2NzFiMQLbSqxkE9YPKHjxDzUcUDsmqeudXWSUHq5QrFzxksc8ePvWvNVpQcH9QkVWt21gw4ab5qC4tcYcMAfz",
  "key12": "4tH5QRd5bEquyt41r9YiWvSgjjQfChMmGC1PLhA3GZGgo84nmuBA7HdkhcNw2BsgE49yDELZ5HSvLb58YV7uAghu",
  "key13": "5oZwApauWhVWePqKzXqrEymLu7aHTmECuKc8qFWdwub5qdhuhXbrryHE16nAjDAYA4HmvSugmeHX2wzDuuGvzjyD",
  "key14": "2F2Z2i3zYw8xJHLES9tyha8Go6fbawMp2e5xSZGN1QqU8VmC6qZyvYW4wuBqqwy7k8oytWenSJHC4Pn6ByX4dp5U",
  "key15": "4kpfk4uRUhM3tSe4bzSEoDVsdDrebn9LdAE4dVEkbrFDzWpkdfT4Rub7e79Aqy8e62RWzy3tQcywwxyxxezk6yfi",
  "key16": "4ohKaFuQWpdpa8dmYz6jzp3Y2utqmss5Nm6bbiVUaUE4CjA3Q7ktCrpEZVazht5CGJFFJjHB4vNV5LGTjNFzwtoD",
  "key17": "31yGkDw5f3B5JmkmSC42dpfXuwyXUgsvTVv74V8KHcxen926xj2YX85qcqZxGh9ojjQLvrbQkWNEHkEt38HaoDi",
  "key18": "36UgFLaRDjvNHTN3JT3mJ1r9NKUVk574HyRfLTtpPHQyuURWcU2JX4pUDHgtUcBzJEyUQ3btCjaXiPHxxbCdBpFf",
  "key19": "4JXkDAEKZyuKdKZbU2q3m6n6NGQZPimtVkVGPhfvYpYgQwEYGgAJosdzNcRVKKVBf81uVLW7Loqa1BxoQk2YrwNu",
  "key20": "4xxwJAeq8mP5Z5qYg49kUeSWAfzZRaZmjHSmuiPzjrtdYhfGjqC8twvbXydeARSnu8wgYjaDh8rvopcHZPUk1n7n",
  "key21": "tdxgVLc9aHmSiN8dNEapFZ1bYypSuDzViuYP2zYoVFW9jDohjetYBddtUeYm6K9SzGYUsZayytE2XpdpWo14Y1Z",
  "key22": "3D4eGeQuZzaS24YSqvz6VdaeBeLjqeuHgMEo5d7VTeNbxWwxFb51GvtNaNcZMmEFCqydff23TGGUe9xVe1ZbwtkB",
  "key23": "5QRmsuvodQvnRbm2B1wcoRXb4rcUwXG8EVQSJFbhzVr9mtACTCCDQiMvHhk4RfGF7xoEbCpjcL7EaNB4YjYssiLc",
  "key24": "4PiEXofRHcpf2hpjBL3V9aUtEW6sfngEzJsnwVwwHu7RZL4a6Cz6QMvkTrwpxEGZmXDimoUfsmvm1iLWupUMuFgS",
  "key25": "2BFg6ukGPEAMu5qALBKUz1191J9sSvZ4PXYLHpctaYZ3bg57RuKCzCB31NTySWydYwg52oHkk4Sa32jKccDAG229",
  "key26": "ayMU1eNWef48yoHR96Auow9nZJSAGkoQHuQW4RKXEK7U4aZG6uWFs6wufvxU6xfNTbPTS19SkzvVcQEeZipJiyD",
  "key27": "4VehRvxxhzDMsuuEPD2Eu7Vj3BVDwqzKoJAkEem4NaTGGrkMFnDdYr7kBXfHqZqSqM5bAc9xXWz9HK68ffP8UsJM",
  "key28": "5Xj2zqRauwSF9rvDyFBeowCtgSB11tH8ZHpqURub9edJ4iY4D3h9Mj2hxG4yJHqpDo9E3FTJWXNTTg3yaSzZQ2Ud",
  "key29": "2fVSCLjAcGpqSJgGuhjqaT8ce27hqxwBMTb5RceFMPYpMgwD3V8C3hgPxwvUZk5SS2osKDBkEeNVzQ1f7CoijeoA"
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
