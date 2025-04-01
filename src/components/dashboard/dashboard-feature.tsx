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
    "3kTmqNSo2BsvziWqd7UoK1j26EQfBP9BvLrkDRcrnh53BJ2BYwkZ3no1L51XVU5VyRjWLifRfs32H9mwfBjKrQZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nWT8TNVPVuQKgU9uheAmerK3B1v21RW5mmLHmy57bFzKNEzGR7wM7Qj4moL8HSxV8KvzHa4Kmx1FoLYBoC2QvbU",
  "key1": "3Xzs69S9gSbCwFgHJPuNMbZkkERz1vRUxHmiPB26QJrojNC3YzXYSS6Sje7S66gmiMJckh4oGtY3M3XnPWGswfrQ",
  "key2": "2M4KGA4zUf2zzB8P5P3w3AK9gr3nRLrn6q8DCWtz3hZ74tPeHXxckdGZDKKcuvD2QPKhTYbgLN8unKhGhU68C7i1",
  "key3": "4fke9cLRaR6rZY8swXvFnxS7SbVdRUkjpeJtSFGU3PUL9zyira42ieXfKRRDepAzmm6EentDt7YjBJx6BaUkwqDF",
  "key4": "4uWhHnkRq2hEQZfSBPbqLtmk3Nug7Kte7P2eMssk7ehGFp4Z88KGjwnzxz7pSGfohJ3mjh3HZ4KaYEatLA3FmnYT",
  "key5": "5mHqiiRL9MsXzjHy411p1MRj6XKGktGJhSdFGKnMpNU3Mz6iRfWSWRAS4TRe1NTNLFpDP3JWHMvwb48R8XZMDvcK",
  "key6": "2xKRv6jh5xdZ4yATxexsvbYdJzYQqeLvfdUenTJ2a7KaSbYAGjKJrdq9xTZWDDBuRWmeCWYD1QPfbxMezML1yQDB",
  "key7": "4SAFwN87Zw5VWCKfZqAKXSynBXR3BTx9RGWeUMzTcX8Uo4wjjV1zaZhb6PUZbqBbpGoDeGNKXbCU1GNzvnmTqPo8",
  "key8": "ZuoELzpikTX9oy5wqPsG1d6etKn2RpYpxr7wwm7mBtoXkt9DZZN524ehHfkiWnzLQN65twVCHXniMEFKEZ3rdpz",
  "key9": "5tAzn1kaTvrsB9tBYCb416wVHh62M44ZZjBe5DcodGo5earEH5zK6cD58LKi3kxoqEA8TxtWeEqxSfBQWVoJjcYV",
  "key10": "5UhMKBaD1ZbnEoLrhtoWK6vnyVZQyPgFBbcS5xqW1MJ172tKjpJdixTXr1BokD23Na2xvCexMMaT92kXHfT518Kh",
  "key11": "5284ELVKdDgGENoDxea3btMkmhFU6oYNDHww5xJBhkrCyU8E4uufwocVhv9zpQcB7bhZ3GdgVjZZwPeRe81urkmw",
  "key12": "3Z6k2bVMuWG2yjp2Qm5iAYRrJirxKLwB5tEwCFB25YJr1VuGGu8rrqF6qRWy8Z3gVfnwsTAH3x9CHq3h4qjJVev3",
  "key13": "5ctfeDmaP1igAtZxe474dBrwKoMPgpHbxbPPWiHwSdAXQMSNhLejXbRt9ozyLxKZSs3aLM3JJmd4JXLy35q2qgzB",
  "key14": "5YY2V9UH1XhW7Wc85b3XQSnNYGHJLVPz4x17bxvnKJ81tydW3XcnHd57ExN55AU4j2JbrUKLszRoucQEJTDsaqCa",
  "key15": "4HABj5DFhwr7YPXCKRUwoW8nXkLP84rnyXEtw97QB46KhBmo754aJQnMWFRehsxLPCPYHsgddqwqMjTgEizjiKXa",
  "key16": "4zFgBbBeKbZ8f4GxBika7Q3h3bYz4YVan7MyecXjWHWDtF7WAifepynRCgNYBok5YMUNFkLtbBan3ufkv9fWeELm",
  "key17": "2xfPCEEX41AeWHcSCDVTf3L3MVYUTqb2ed61xes89bB1k7FN7fZ2zttA8PeaTZJ7gptdYXnjWmpALiASkB2ciTBT",
  "key18": "75UpQq6oaqsWSTKnE3krBNKaUhv27egx7vLW4WyTU36JjFts7585NMAdLbaFekSxHwPFnd6Yidrb37Hfwi2VvY3",
  "key19": "2WGQR2dEkRgwDT6XqEy7QCzS8ngTyt5oVkFCdanzLqLKqRgRntiMPaRsMc9CTZY9wTMqAV7LHmk4hUcTW5iE8YJZ",
  "key20": "46ppcWjvVYsv266QLUj5mg5p82kPoZ7oASdQtnvr5piyoT5H9KKR4zCaWnSNayM5d8qbhwbQCF6e1wGmZreLG7YX",
  "key21": "4ebj5mDxuR9dSjLmyRFn8dWGrh42596eUz3HfaTL1AfkH9w8S4Fg4PMYNFdshVYDKAoie27HxcbTdbjwJREMqHS2",
  "key22": "3CfQrAkSwLLUhMLAYURHQtzEYCfzvDdwyhSks1ubUHTVuA6Es2gwPEM5awonPGusaNiTZpoCzvSR1cYREReyCEUT",
  "key23": "2dCmC3ZMceSUG6Q7v8ffDooJw2u6HAeLMjUBMrnADwQJjcrFufrphZfMJ4JCw2aaGn3adz8fYq9VBgTu5thebNgo",
  "key24": "2YzXUqF63QD9PNB5WEgmNJdx8xT2wiTvbwYH3Fxf7C5JTAzPigwutfRVYf9AgBqvCYQh56Gi8p9eS6oibd4fczzz",
  "key25": "2U73oDdqzjyd5BZT5di5f6c7kZUK3mYkPWefLYKbgPL9pNWRUvyLnLyyfXMgwDztzKqfD4DbvvjBg877E2naE2rP",
  "key26": "4AXLD7CA7sct69TWUH8ApMqBKidkBR7fY6uMJDD8jL5wYs5U98W5AQ8LnFFeECzkffywVZaE8fEv1Fa6NtJ9HHH6",
  "key27": "3jDq3f2vWZ5QP8mrNUwEBdd1ANGYU3nWUiyGFB29NzeKjCemdveCqkLoMgGyMBqDpLuSsgWPxLAEDqfrE8arLuTc",
  "key28": "3TbtK2Y6QTCLjWjrmvrCtAGuSA9H9iY33QwWcjZzLD3f4Sck8Sm2Ee8dQEQJ1VXoEeQL6aboaNJEsSmA8rUk7S4c",
  "key29": "3TAf1CbGiS9Cf8JsJSy4Gd4ggQdCDuFhXjJekMM55mjmpSut8vR4A158apKFbbNZ55BgE1HUmk3obFWK25yuBPi1",
  "key30": "jnaPQ9cmcdfBP3ZBXxZgSKAFdwUf8oKEMH4h8Am2kRFwQem6TMVrs768h1QYuajJygh5bz3mb2TcVmwFUtWrPAC",
  "key31": "2ozet19WWVAbWTvqynp5EZBnXa4uYkjFn2DpzbMwttGL6DLh9DJWDNTZUgegT74p6p6nBj4DLLp11sjgRCgNdbJy",
  "key32": "53gLsisEE2itR1PKWC6QsgnBmasEg3XbWx6eNVPfRDAtEkXbXmzCxcGX5g2GTs7AbEwzxx58JmbhgEy9HsoFLBbV",
  "key33": "5is1f7EQuEptNRj8fvPkxXZfZMXL9MRZf3ThoCSeH4FixqYauhDG4aQLW3P5AFbicuDUFKRFW5ff37us1bZoFyq3"
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
