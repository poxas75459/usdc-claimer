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
    "4xuT7pf6UrGcZMJo7rKM3WDMuHbS82g5tCidwEUZMeUP6wqtgohaP6ERW9hatVUSxiiNfCFJGcFDmY5L4Z5bH9BX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24hzduBp7GjSB6YSxiwjTgJryxSMTCC1UDkkSZCzHXsSCAAyNf5P7u2WUmS6DPmSjGko4keaKH8xEuZvRe9piYVr",
  "key1": "4NVPuzBoNnnFoXYeXZrrREA7X1QgAUkKzeMNFfmARoz9eB3nhAX7E1eX2sprVVhoe7HKagGyHT4BAzhYzKBPJEoJ",
  "key2": "4Uhp5iuqhY75rXztPmmm5ERndJ9S4jjDYL1aAdEVC7bbvTmjiEQJKLi1Yv8ad2yVYNuUEJi8Hyp9SmGDBjTWQrNc",
  "key3": "xo7eiGtoG8S65nqriw2aX6cX6goCwCeCRroo6vVU5AhRhoFYab2DUiYnSEy5uhETmpDd9G2tKHiwCm3Q51QYNoG",
  "key4": "5S3vHKH2abwhWh6V5DMwAp6GShXRwH7BQwPLhK2bz2L7tgo8bbV6hZzrA7a1trKZ2uKwsYTEzC7d1FDEYUg8TeUG",
  "key5": "4LjQXb2CyxBABNxo72Vk4zKZ8WDayRumNKqf7zFZ1Vub5YYiiQgFQHnH9wiNDEAkpDxmMTbFMAEfHeJreUWTYKp8",
  "key6": "j2FNYwjrkQRyGNm2eHFjEG3p8KLsqwr5mSxiVnVeCGnt3cQTaUcwBL5fvexBYYVrD5GT7WryQ53P8nvwUZkraey",
  "key7": "35YJSa5CUHi84vTMPxnY2j4d2VB2icbdXatuFWaCr3Mky5igrqVm8qMS1HJRqiupjiuz4kdevSbQr8GE5udVFJUo",
  "key8": "VH4pNw29xh3kr61KwS6RsZa2cCvEsFPDfvzKumsC7NEuXckydymZ3ye5JLYq5xRYJYGcuFFCUUgqEZHbZLgiMcJ",
  "key9": "5eKuupCCG6saCUD1iUBPePS95cNcCFW1LhGVFc4eQyvTD48doYYWeXhjTjNtFUmefnD3qXu3fvemu2MSAinRACws",
  "key10": "3eDnoAEtvFpnXWopN8gmFQcBe6DVcxQvLhghurPWGjSU2R27hnnmJ7bhgBvJxSEynsf9Fjxbui9ofNkz5WZt6SL1",
  "key11": "57ekkNBWiTBEGwDAtEB2hio6io7itYktZL5T3XK6hwL5VRA976p34i7FJr3ahT9L7KH9PrcU3yREXpwCuoJPEFj2",
  "key12": "3JjL3yS2dzdKr2HQdJfPQZcDBvRLgxKepLaC88Dru1aoudJUJxLZ2rqnBtgyr18pZ4PKuAR7yKkswdzcKtoiok4P",
  "key13": "5B4v4ye7dXu2M2kXt5LMtj8i6xRyQZ774vEdQmLGPnbu1cEd2Gb8KMK8eo8NiS2R1KsyabVp4ZuwrYZAgyNyAK7W",
  "key14": "2oApEtuvcZM4q2pPdnBvk53PUbBSYPzhKNAdn472R3ySzZ69GLaSbKqLet2SsBiKnk2MeyMRC9N3mcf4GgDtLa9r",
  "key15": "26tgJp9asovL1sCfzs9jM9K5aSWCUWMbaLXoBzbTFCBrvQBjNjuKahumGaGBddMQg85R6c19kvfoHuLtabqZt8Dx",
  "key16": "4P7YQqp4eDStWS3muXHTyz2Wzaq5gyfufAF7sDGXuu2VJZYCzfiXDT8kqcHKSKxuwMX2o3xh51t8nrsCGNoTQ1Yv",
  "key17": "5iHfMhnAce4jh1hsV5teQEaysGG4iwu4prbnCVhg9MfjA2iMwsc5pEHvVHmQzBTYm8T5M9N7hkbWbAnNP9B1LepQ",
  "key18": "3ytfiGEwTZnDHsHKCAa6AWZDCLYZcrnSXHfvhSfuKyxfZHnQD2nzcm6qjaTYgScQrkyrNUhPeqEatHGd5os7u5fX",
  "key19": "4nFq5EMYnsuhPcKE9RLdi1Jm4XftKP8UtfJdvb5AuzEgPx5XXr9fkcJ5Bc8rbyBU773UJeULxX8XeLNnj2Rfdeui",
  "key20": "3GK6nfkwXE3WzmryAKsB7p36KRY2ksWzYDJxJS1RqWhdDBx1S4g6sWnYCiwMw26DmBh6pedmZDY4GL7Goa7gnvis",
  "key21": "49krN2aZxuJyMcp2FTYxJ97N4mzFQj42uMkMGbPDtPw9YcC6tHpSJEEZDpjsAnH2PbmwBSmFVV96hE14YpDhjVoK",
  "key22": "3NWd8JpxB8xELccvSPUyHZ2Sg9HF9bHSvDL8QW3KGRAAXy4tTXZwykkgHr5NTa48ZoNfwRjdTvTkyzqwUfmPWG9u",
  "key23": "3kcxeiVxWwaQ6FsCXGGXuG8rfSvTn3Tbwp7zPEczumzbjd5UtTpJ6e3NGgYv9AKfm2vXZUBYzHpxx1cgRVtui1CN",
  "key24": "323mTE7a23s8n4xhbJFm1QwfwZ9JqJTi79ShHjXUBUFdLzm9jjD9wzqBMU7EkSqypcBWBhvG3ysW9Am5veiU1Efb",
  "key25": "KbBkzdUWgWbGSQxgHLubYxdacYAN6mzSRGXCTPLYUEwWeUZnT1bciYusK13AreWh1X8y2o5yervYhP6qGZWCdXT",
  "key26": "62Uz9M8tj9ycDySwjE86PLnBg7LoGTNbjeEVUdJb98F5Yt87cTkkEb62uq8qAgwamGgfkxzGK3AWdrXiu7dSbNaW",
  "key27": "3u5B1Gp8WKp1GBk3C84uHt59dhhwHKzpbe1dzZyScAo6zV2fHDm3znziJv9yjPUuMBmmAESVmgXtV784vWmy4HWs",
  "key28": "4mKxQtR1jGCQFYsnq9QQoGDNQfQQLEHzQdRFSnr1onBw9cb7V3hmQtKTZebPGXgCUz1epFyvfipcPTo9ac26F1wE",
  "key29": "4GpqkyELN1SsYvGRoLdV8vxMZiQGCQQipyH3PeR9gf8cq2aUAHCZNaQE2VYTuAWCYYfpgkgm8Yiu6x6TYXH3SA7Z",
  "key30": "2dWzmnAt6EJ5ovE7UaYbh8g9Zj2Xr245YxKn7virAqjhQatEYVzYDMeLQkTgxkAk4XvZ7EWUou3ga85FrzVhkNCH",
  "key31": "XK6zVxupmNNjkza3Ny4MGTj2yeyT3256cXVCjW9PAo9xYDdryYxNFHU7C9ZyVHWUphv7m5vtxfdCVHC1bayPMQL",
  "key32": "323gsYVrH372s8P2a6YmkEqbPtCRjDay3jrTV6EhDgLqXqX4waui3M63bURju9p8cgHUFbfhxJwz7oJYri1tRWRA",
  "key33": "2vJrHPvAK44jhHPyxWRpu6PEw5Gvh7PJNP6M8e2xUf23JUwrwnZ7TFkNExMxfE8Rgz7qhYwwKqz2ETvWL3QCGeo6",
  "key34": "4kuzb7STnodQjBbPxivsJCaGDya1At86PPCyhFcqM52AH1ryGunPMBDJJbhkwFiuwWbd5rYc2r5CmB77cuLm5PaQ",
  "key35": "37TE78Di75LxVuNnSfLejKANdWrX1iUmXao8QXBX1eT8TBhWdFcruDKeXTiiYqKZcXEqkML2HXtXTUrXmeWzpA9U"
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
