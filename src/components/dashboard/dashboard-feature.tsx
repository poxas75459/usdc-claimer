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
    "39PNrsL4UqD9gTP27dJZYXZYhEPiBRtswN1e7PKDGzVeK5GXYQ8WTNkNPu5U2EVsuJ7UDE3LwkaiyFxyk4Jq43yL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uoCzZ8f3sviE33yJ8iCSmfRSusVTtpb7rR4WFnNNeYutVXRVF4FS7W6oDQCLvVfDwj32KQwG2WaLMYcJSCK2DLo",
  "key1": "2QBdAGxxiReotjRWzwwFWM8LPiGFg4VRfeUFWigedUmnXo37kJ76mMUgRYFQWeqXXJzZHZT3DjE99Ym4a546ETtT",
  "key2": "34mhjw6QmVxSnGhNvoFvK1Bce7itd9JG7jghY4weGnv81XYDTdt2qzvMMFbjdKDong9pmzwoUDCCVw1cNdfupL3B",
  "key3": "4YM87ggG1NU8hSEhgwFaPH1UJxR5cEQafnZMxjapg32P4NqsJeyQzuqTVUNbS8mcQ24wTrZfkmnsf2RVZL8yGoS6",
  "key4": "5G3hwxfXtsiUG2vHKdJKYMKwGTxDxz7tcAWoJaZwZiD6WLMDtufM6Qxo85FLmR9ejQwUaJbQnQu23C2m3LSkbu3b",
  "key5": "5LC2ntjCNMwU7jhED9NUPCFKup6owJe3rnRyCyJftuBY28fPHnQqsUwbtMzjLVSFRYNYzfuRJHZTmxagLkoqxxqr",
  "key6": "24ekh1chyVpt1UGLSzTCapEzbDLgPuUHJmQyAbTM1vqbhMaPR4f61hRwxBCyCQRaYiupHN9bf5tMtANA2kjGTk8t",
  "key7": "269J5KJg1LkT6DCxkuaXtoBSwsiLXtSxThhFPFVDzur72raRm9onNq3vAuc4c9EUQJx1jQNrue2arhFD2uMNvpVn",
  "key8": "43K1XD6uA5YhqHcHsoFGoQcxTp7bLupLMnqCWVmEba6VFUGY9uUtH81esdbhvd6cntoxeUYFmkXn4wtxnorVe3WZ",
  "key9": "4yE5fpuNzNpSAwqawzw1AgLEbFLpSNx1hoEZu6RtEzAe6piqqd2ue5Xb1t41EwaCjgDmj4CUTyogFrG9prv94KYf",
  "key10": "3n8t5QZTj6zKvnt1vg3ZbWnrfm4Xui8QcEy9mA65LeN9bg59sACobhG4bKT8X5B9jLSHV4GMEtHKWhzjMzA65om9",
  "key11": "2j8qMUt19sTGeoPShwVr5D4Q2bsL8p8Tg5849Q7CGaahaXKv6UXNdr7H6hcduZWkCpJZ16AT1ujUnkY25ddzHtBV",
  "key12": "4Rf1pmdbAPCgoDXJC7emi1dXHKtX8GMiPiUUZ316Ho2QYxDAkuwcAvzegfLzFfyV3AHBVQAC8LwdBGET5TFteYKA",
  "key13": "4WsiKeBkJu9iezmrXZK3F9CpRLfPzd6mnXGhAZ8tnDctogTYdpLwewLctqJmv7CiWaoEmSrSR4HaWpmP7UEpHzuu",
  "key14": "21NptdMAzj9Vr36biUHZVFsmgskf9BGNWWvV9A3ju15G6V4YnoLuFH5zgtq7MLCfbxanpTAQ7LkXErhRAA5Eabpa",
  "key15": "4HXCrodXociSgm16E58J7Yvh3UeRWHXf5srxb6PmCC4rpWZJrFfhPjwk8Ge9oHGHbx8jmBWD2kyqqx2sbfcXr25G",
  "key16": "4NuGBJ2rZQEAdXxA8593tUCCcVdAnYDCuvAw33MZUPmP3TULD1hWDxrpu9vMmxfMocRx1TbU93TKWAc7HLb3FG1d",
  "key17": "4gaiPUNUcPVJsDRwwRnpWsADqy8GqVuCz4M1iCy84a8AjEBrkcUXZwCyjrPeVDxiWZzYgB9evZk8cN3gGxFBMnAZ",
  "key18": "3wcQosrZRGFKbQgCaPT3ewh4f7noHkzUMBFf7fSz6xKsMZn74f42RFnfuAsqnWdxTaUPUfNTQwse9xh4vx1MBLog",
  "key19": "8r8Js5ryCiWG3tPEtzU8fi5Hdo4pqAFUkiLbS3w8V8MVSjP4mehrnHHgLCjA9fP1jHtj5FVBghrEKmJEf4kqdNo",
  "key20": "461rMP49dpKZhXZqYmes77ySj5BbPmWy4tcX7gFueBk5YP4J1XSvLH6UK22cJTdtSX9QFZ85oqV4PNjHj8M6Ni8c",
  "key21": "5TGLYycX14BmTRuefcyZmPaeTkSYCBU4XdnoREq4F9gebHFeJcJCUbLaHJQzJz12BTHgAavzvJivSuopw5eB91b1",
  "key22": "2iaacSoVHGoc58ocwHj38rkMUDBD4bEGxwrrXP1nPmA46vKKdyoMGyunkK29XDV7UeMTQVCvfyVeUrSgqrHP8X2i",
  "key23": "49NXsNeaFRhXiESnNCANcjKQV4fqBAje7VCzvwQ8swMwYcvGjZEf4Q8Pmh285WBAzGgqA18SErghxY7gRA7x65u5",
  "key24": "3wA7YmTvxkf3NgYGyZLaHNuiJ9ubHX2oRS1DsxMMrqSSuPRqzyJ5Wt2AGRtc1QJKixsFTGo5K729xxVU3xXwKDwg",
  "key25": "4RobCVZY8p9GRL2WDERSQ3ZjkSQidW82iRPENjB7tYSeyANaffTSvZMdjB9M4vnP7ATQXU3TtEq3qjqbYUYTJYxX",
  "key26": "5ke38fH5VLj45FPA8otP3A773rZrgkMfq2dZCfEACVdFqbWr4Kp4zBMFKRkzqiipiykMBdytWcZcTNJQsEBfe6Sc",
  "key27": "g3wJirKtrvBK1wKADrdvQYZmocL1VvUQ3UdnACZau9zmo23WixoPkz5isRkLXjD7GCLk7MWoaJ99HVMEVkLpBw3",
  "key28": "5yMGeKRJ5EAfAga6USBzuFEtdtzDtEqn9sMaXcCfjepdaYNkfEXF8Cn67viVFzYAUuihy3jzdh1gM3ZgnpVjnGdi",
  "key29": "2vTBVEYTJiFeb4gLjV5qDWffUg5T5VjcCFkXLPKGw8h9paggMKx4Htd9C6ZnARWP5RuHcJ2uZ4TrfQffFWirL6Y5",
  "key30": "5Gu6RdAf3hU49Fag8SnzethR5pmkqmQfieLvSQ1zbBRcRBeT3k2noeWEMxgKubjSV5qdCxuLLqaB8rydUqgqS3Wh",
  "key31": "xKwZZdgG8Tb8QRF9VwLX6sys7kR4x4aegJnYEL7dkJJAAPqRS3vHrSXs1Vk7osTCjgQBwVMciq7Bf6DckGDtsa6",
  "key32": "5rpBqUdToAgHyGedN88CwFKxHuWNPHpQpYXVTzzEYyV1V6YtWXb82KZr88qZVwZJE7JbXnCwKYcn6btGr9D3igQg",
  "key33": "Je1X2J4JUedcTTvkgAa3FM28EamB2SHyh1mfXuoBBCMv4Fs7RJZGqFUt8swKGTZRri8pGfM8nYvsQmcBXjiCaP1",
  "key34": "5vezpVyBp3s1T8qtaBrGHAHkssNiP5mRGhTQ9ZaFsWCkNZET8SdPvSXbh5K41rdmsDZ5Q2grNu9ah7rjra7ebHJy",
  "key35": "4bHcKRfM5Hn5bNCH8HaPpW7vvx8gdSS45eVwnWsDX2aKK2ChHGJn88snBrBJ9kzQzHCeZZAumUoxEXoXuhpwfvem",
  "key36": "653ryBzw6fn8XpAdqkZrru6dC3wQDGZR32p7SmbZEiMqdhvFdoh4FF3s1qhtxyh2NZvYDz9bVmdtnkreSqr9x2iK",
  "key37": "5sMLaME7wtrN2UAFdsPwvn6M556nnaPtH5CLUCvTkdoSLjguHTq6Vx4q192W4AzxvyDkps6M9nW77FAU9XfCBJm5",
  "key38": "125qrK86ZuqmUaJxANLTSpAffYCMpycNEdaZ26NFSQB7yFpZ41cicuMau5JMminrhKU6AqKXqVj9rvHWRtJ4pKRG"
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
