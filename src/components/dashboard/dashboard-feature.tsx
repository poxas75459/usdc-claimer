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
    "61m7KMMTh2RzW2oFCy8uKZrSgRBGuRu88VFeKNVM8u8EUkXnKkVmbox9QkbK3X1dTn18Cv78Lb8KnrbHZfv77PxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qUWNqLx1YpRWHcxiEKuftz5YHmMoJ5p1KzfAHWwDqPeUfGDYeFVH9BqbQphNMwdptYV4F7GFvs5NK1wvqSM7pdH",
  "key1": "586gz8NVJv83iRuxobrnZbThtUEgnbttZAjsF6ndb27Ce76LGoYcv6NBZcGbWMHQ5xpvfexByGohpJ1R7k7C5s7Z",
  "key2": "3zRB91kdgbeMqXxwXFhxR4UppzYiLNww6HjfRqyHQAZsMrkGTasiSigtccg1F1M9Fk1w7ZQJAg6jSZNfJDf4DRoy",
  "key3": "4qmiDBJeA8bnvL4C9z7UFjgEyCkJBebMVps3mXAGtpBPy1eqKH9qtqwgfvSqy1FyTQUx1FEHVftKdUDzt3iQHuth",
  "key4": "3pF8HWwfGU3JrgaBRAm2Y9od4ngPR9rFLU1s7Uyd2AAwH7AdmB5YuBK2ZqdHVvkcGXobYsFMsEpQ6EzhnBPydZ8X",
  "key5": "65tDXMy9M1UqHgBBr6LoPuqEEUvUM39uVH27d7spsxgLg6odGU9ro95W8vzZC7SNQaaLedMr9TJNaMPwdLoNaB5X",
  "key6": "EcemoYkzGkYPEEA2bokPetPsTMyrHMCW1k3KHc7t5agAJtdCqxzF6Qpbu4Taw78WpEo1NCMfgStdvSanqwkzQAY",
  "key7": "2LH6VAnX8wYcRBZ5mj4HNrXQ8CbMaZmhkjQYZfPfTxKhPkDPhRhY4aFiAPGczH1xtLAS6qPxX2A9GpGZaK6MKwmh",
  "key8": "4GXyftwC3Y9H8QYTbC61q7W78DAjwzncJe9E787qW4ZPqiah7VnHi1ZBrNtsxsMfHoqFSXsNeiDFvfpjWSQ82XFw",
  "key9": "29oumf54bnFpMFkyyGb5TkdAZ4MkamyuwLxdNsR2ZnizvPMC5MbAhSeEfvUGTM9cKLHYKkEZW5CSGnheGGuT8r4T",
  "key10": "2Fq8mMCCYWL89oBjbEzvYGdnVG3xpaF2dpwsnASQYoPzZpAQAJgeU2CDxNjcnTpfqCkpZAFNATJw5bdDoLgDbJSr",
  "key11": "2bxJiQYFvgga7dRsVfbLamPhtvFkuszxh4yjX2NqLGpgeBqwsdxkWqUnGJEBJNVgdWnbDzYCeEThxWqsYVXo4VBM",
  "key12": "4uyGPnZjNFCk7zRB6pv3mZ7NFnrSGQSVD5jG1evM8TUPbCyK4kQ87BphrU3eV7W6N9w4BJ7Akvoj19FuAxJ7RdqA",
  "key13": "jWbaFPGjRttkTyMCjGDZxUVtsCBjEniPwzzoCA6RndbeHSM7ETvSkxHa63W2pWSof7mK5KLLu3TfL4H42fk35sR",
  "key14": "3JeyUiWiFbUHxYWnB4c96QXweE1XU87nXQVj35bPjBW6f1avkzs8DSsPUfxJZEwkbPFaqaNPcy8QLiN7xBAgqeu2",
  "key15": "5icVRLA1VmRVkU4LJsQC9oG2xwSW6gthwntCKWRrBht8vcQFSyWmytkdfzJiHTRn2ZNmXNfpUZVBqRh5b3o2t6F8",
  "key16": "23TQnvcHxK2NwF26XQxA8AbMY2URMZdGBrB4QZ7F52KQTaaN4tQTQRSyWbQ28eqx9AMbrvaRWCBoWmrd8RCtrG7Q",
  "key17": "2quFWuyK8j4xf9gb9Pmu5YCtkTrNC9bV3eNP9AxihemMWMidvX5Tek7a65nhZTVB4WASmJThC3yHwo93wN3mMvsJ",
  "key18": "6vACFbYSbQWB82eBpskjDpNhUFB5Q3Wj41fcWXnGxPZ1h7ban3ocEL4C244jQFosqDdR4F8dzEc7g6nxpjKRfD7",
  "key19": "5ng4aWV9qasMU5XFsGoVMzGqcgaD35zMVb49oKVn7an3E1CzsvCJ9K7VpNSsGieji1fQ5GS2vaSyidBnvrzMrMYs",
  "key20": "29RCy1ebG7gNh1GhZEM8vcYitDJszd6CzLNxV2C5m5kq1oCERwwhVvAPVSTc6zyMQuo7b922ZxCy2G4VH7KTzmtt",
  "key21": "4btocjJ9jF6oTS3PKB6CQaM5nPchHfPw3Rk2mDLbf97joFGGsVTs3cQrRZMPaxyhWmTnsojyqmpV1oQ4ooGwuRa8",
  "key22": "2N4NA8BAZ39BcVLuXVH8zDRAHvFtnBz7uh7rTYRi7urNcoEAU2uxKwCrPXRnGYdTVBVWctqLqLbDbNFBRsBKrfnh",
  "key23": "5TvQYWSy9o7ryWr4LETa6rFmzt68ZmyPyax4VG3LqYxw5VfWaSdTGAY1vQmhwn6b5jYWTA2ZnNjkvApSCmFHw43r",
  "key24": "4ByZjAS9PGPH2jp5iS4fzczmtbumca6uUexSqYKMTLRQJA38f3f215ms3VSxdcqSHhcaGKk2QCrcM3m8WcxfmXtn",
  "key25": "3XRe9YMGavcfVpLXmemgryDjQdmHpQqXrNmii8nuVWP7qGCKUVZxYNFXvUoBkH5AByNeVCicEhLTWsr76uZxdtyr",
  "key26": "3y441aCxcbV2ZsmUEFsxuqWRt7JrsQBHzH4N5TyGdwvdz6Eb9AH7nPuVaeCVKiWWaYpNTsMLXa8TYCG8NSaVF7SG",
  "key27": "4mQZJdXyWNvzjnCPuCbFzsQD5fnqawnCmpHS4KzaPiJ6Q23wBhNNFgJnPLdxVEvUKhaVpC2DrStZxSbgS67qg9jL",
  "key28": "3gJXHGnuWxdfU8xRbQPyJvnsMNGGBfFdaEzHfh2FU5tx62L8iHK1Hb9f4TVjxbHarf4w1V3Z2ETjj3ecJfzT7w5g",
  "key29": "5Qbn5VdJymfbjf3b3XddXENYMnVqzohjgq6BaS92FqMYL7znzcEco6dtvQLYv52pATrMJey9JnJF7vbxkp6HX7Kr",
  "key30": "5d8ZEGzkoK6AgagE4ZsJdmMsWfNnCg5RUsvxAKn4vUNMmRudt66f79s2wGdX82qboYMFD6uzqafHfQYR668ZNriH",
  "key31": "5y6BAr8W47MNf7ad9LpphofMNexjRgVt4VgwqGnh96F9ojtMJUkwA3ieKD594DbD2svLQT7c1JuuYQjPwxoiwP22",
  "key32": "8Yt29apZzN32wuz8fuDXbtJr1QvVBXndNp3dvAzxN1VRf7qHGRPPmduUwHGxh8uKhw2CUzUMPsaMAFY6Ydr7DfU",
  "key33": "44vaaf57u1nqa7gjzpY3BJT22saHcrMscLdZS3K4xuJZKhZZtaTUJS6NR5aUGYw74LjMrKxczRHbmHsVsm77DE2d",
  "key34": "4SynMN3MUin5TZLiu16MHdfas2x9S9e2KgQBKAb16jNJ1pZh3Lam1LmDQFyZHWkmF7BKJ25SmjAk7aHVmweF8emB",
  "key35": "P4icPhTnRCASeA5SYbE8J5DjzY3hD8S9mK4bEFg2FmkmZcpjGXRwmDH4no5vpcrcKPDgR1iCQJTBDoTgBAtr5WU"
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
