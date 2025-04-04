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
    "3iabbsvpqNEzm8N1J8bpSm2ojmZYbyBywnPU4kmGrdbvSfje2K3e5VhfwnSezesHzD4hnBDD8Pem6PirBD83w3Aj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RXBqRveeQnT2Tbux55o43CEXZpN21QuxnWHudjUBwUa91GkVmhHAqAigm3MyLqCTibyKXJhqimunMLbQLFR9NWF",
  "key1": "5gKA9T5k9ndti2gR7t3e2aXLoXjERsw2H8erQjKjNizbGhYq6wRT2fS2GbNJn3jvjhwGvyKPAF7ATphXWmG6pTRU",
  "key2": "duzPyHzSVatkmjdt5ixSu84o7pjE6NDChQu6HjPQsYYrik8HKVLtEY7Cc8hdZTD35yTGwgmCczvehWXypnw75uF",
  "key3": "4hC744goktrH4qfK5TT3StHxM1bHeUXb5XipsYqZWVZfCGFb9rLJhcUJwdnqGEeLLB6MU6NUD283EWfrmmthQen9",
  "key4": "4qHyAgEvmPBgeBTcUNc1S6hxPGk5YREHM68VFNGckK7Hm9zGX9yFX8RPgbNk3prL8EVNVwMRoJiXtEbVY4kypVnf",
  "key5": "4N1bNMJYrpJuoexrhzJ35HA2g5KoaXUxf8p9RApnxA161keLmyiER1fG1XTQfajX2ZVm1xa42K2ENKzPn8Zriepn",
  "key6": "2y4x8Sefk86MWFcRnAKRY6dHpCMhgw7CMng6Yxt8geZXWW2NNZHgpaT14mbedW9nvPA3e5iKizg4jKQCs96CnJUS",
  "key7": "rp1htrX5rVnM6Mx6EMRjuShsT2e9Ts3NR6k3mARCWQVhZHtv7RhdK4xpsZZqbqYsrxSQRp539VnUMfL9bkDcXNB",
  "key8": "3Q31ZoviMzE4sBGBCVvKhQxEVYAaCszcKs8A1DbBQEHWxNgYH25NkPoHQM8xqfsxzjqGG67SRBwEqbMEpt5HfYB3",
  "key9": "4DieDSeZHYyy6zmx3gneyqiCsuY5xyxU81nsWWyWHU2t7eEbWgQ1dHw3wruS6jXtDQxYFMet5nvEeipu7qsozW7b",
  "key10": "3pbzFq2o9vkUFCaG4DmeA6mjwAgWnFkEA2WaJu55gHed2skA8SpVXrN8gTu8wjv6dYdfS33qsKty7zZLNL3hfztD",
  "key11": "39TUVqZUXK1S4M18WHWBFgVhiHNQQdqu4CJXVd6ZT5Te521t5fjGLZzEubSKoDzEJjekYRGfe5HEmy4yuzAvGZ6j",
  "key12": "4dbiQUxuDdBttZNWKAf7wzRNZL8KELH2dwE8chphbF8F9AoT9teCYr4LpcbN8VMmmS9mh3LpVAX1ahpbrxueU4Jb",
  "key13": "4TG9KjbLkiRVrFrMeCErUAZMb7REAfuovaFqUnd4XsJHdkoHkP3ieDmZWvzMC4Mq27SLWgyr85yBVwP5yn9fd7ZE",
  "key14": "25xgjN8sGwzdm2DPiQr4niHJdyXjvkKrfHysAV7Mg21RTZNDv8M8SJtmwh4NHaUuXq8LBZhFeHatUiJMNCXYFkur",
  "key15": "WwJ1fT2JNvJp14K1zz2Peu4ZY23cJa5j9xZriQLMYwLPuN6mSjxweZwFpHAnwkCWGQQFv9Xk2RN9FCiAbvRuFoA",
  "key16": "3UW8fhaD5BHUNwgQLSvQ8N9qRfpyoe91p2QcEjRnt2CUxMvzAHj72D2Fb86QSRiUiWWyz9odPyNwSfX2eFCyjugy",
  "key17": "2aHPCXDcokh7cJJdys2ED5UfKiU3vtH6ckHXtWDjPDJRRvScEoEGXczY5CerSXFufmjXNtiPrP2n1cCjedf5Agrr",
  "key18": "vncPRvfJpdEMiEBtYwDByjh6EzoCRLNdQdN9RnPnGfjRu4scrBCc3cRedP8yW8nW4RNNsBuahe5P74pz1WFbSDa",
  "key19": "2mLUixXoWYcUxyexiwjd7RqtApHZ99i2idte7Yf9qqBMmPuWNwMoUEiKbfNm1Vgy4h88kHaLWNZF4rcrSgxgVEnA",
  "key20": "5s6fKKjcH7bMpA1wo5UCYVWCrubWgPEGm2F4PAZia9SdAroNcFVVK8NpjPBiyE8Um4ntj2JaCqPpdykXe1XXg9aS",
  "key21": "RhS4TNiZfXnpdTC2LmBUKYywLi21z8aKmidWYVvvPZptbq8ejDTKN6uyQE9uLEydD9BboBULCQs2GFCEdmhfwt9",
  "key22": "2wyu7ryEXayoRiLUcF1wxXDe8fptKyRtGo4CN3ve4DFPHFES73KLMjApDKjH9337yfSFafaYfwWwcczRiiEiCYus",
  "key23": "5aTu3L45f37GaTm4iyT8QA3273hFvYXH3SP3do2oHGhVavwjLgsoSxACpKoZBQZeBagUXVHmr75hC77uu8Zs2PrN",
  "key24": "2GFFVGoDLte9kiWX7MmSz8VFgxra8JPuU2Zh9qt4edLLy4Xww9PJfZwCnLbgUEVmP2odXtAUKGg8nfKsxAAVMrQU",
  "key25": "5akkcCSVsGoh2vhKqJHCX2bvEwHaEP42LJauUiy5SqxVudL3AzNp1NGiApeGQmpymQmjEYWSv7TiZ7yjt3tw93tH",
  "key26": "4Cdhwcw7dFTsXFueH45SWF3ui6x8jPbhUi873UdxGQKkNFV1kUkN82FfN4kLbookaycMFWUv8eKHkDEHKECeSHXr",
  "key27": "4bV3WKUpnBbrHx2A6U6tNzqv6Kd7NnDBJGwyqCTqWiSagEAt9iuf8bzxq7EQfsDHsSKVGLxiCz9FyBbXWUpZjSef",
  "key28": "5Khk6ZRAuHrabR7tt5Z4RuXkEtQthG8nYnJ4ufNB3AHEJnjgoQimeun8mVgeoEtjc2vCiEJoYWnEi9YGNjtuwtgK",
  "key29": "kCAT7tQ2jZdubBtCNCyPsk7eYqoXxUTQzcu2CGbvr2fv6NwZHsWD7JLoAEgJUMnvzYm36W7vkafTYv6F4KMAyvQ",
  "key30": "4gcttVC5D4ieTyxYB72J4soUPiY1LzUGMTTDDXvrxTVDiewHenikPzNny8hG8cWsXCiXE9DKQNaGnVPjXQNCteFw",
  "key31": "5ojmB3af9rqbUHjiiURxsWPSqqeMNj85VKNDVWnLkZQEw8f682vuxKRUM3ZQbTqsTysDa3NNmHpzqdfLm7k2AMnD",
  "key32": "61uhac4oQKn3EszMpyaxbzNdaMg1YJF3S41UeiUqg4R5Uevd7oBtF2j1JA1QHQkHicneyc5oEYoH41t2p3CojbUK",
  "key33": "BtRwGqFpyGeCieykg7Q4GSvoJEz2ttqDWDbDXquMb6SXQ5DtMw3iXtPtGyFMS54a4o2gysL5UWEQYSYaczZQnqT",
  "key34": "2sGs8MzB86toDm4mDMW99yq5DBAKChrGr1FQYpRXkKGRJbc7u6KNNFoN24mT9XJTkaGh6U5iFKvaTBq3JEHovutG",
  "key35": "2mhd5LaddZW4aV7SbDyKn3GxaVB6Q7N2hGdGE8XZY1GiPeqezGrJTmyNmc6Anj4wfd5W371BmvAek2qGvTcGYqjM",
  "key36": "2pyq5gNUzTvHgfeDqAZMG1qGF3wqq9i5fvuSKCKeboBtcai81pogRXF6mSHFX46mk4MdPXwqD2LsrtpPTTSYDvmP",
  "key37": "56rBdhsVTUaHUAz3UXkezpQ1N5vb9EkSrYEwijPRvVzjEqaGtFk63ngJ2ZrmEm1UTQ8yhPoGwrhur1G8tJVac6pQ",
  "key38": "s6R9wbrS55BMMccL5MtDHKWG29pbPkGtf6mjXfKUVpuikzV9VFaiqxcW41YyVphiPfqJ7gwCbNmGXJqjcJXxh1u",
  "key39": "51QLHXBdg4AwdWGa1oRCYs13SCa3K3VCnBTdYVVSnQ3JLgi7wbT4cc51ELMppeA1X4UiPxPBVXfdGzJYbmmgCTTd",
  "key40": "5PEZ3udz4Ux1JAMx9ZD2kcfyKJRf23r4oRkduv7QAyhBEY1zrS4mUNXJy48ajSaZwWxoSWKFKPfBEm7kJxNWbTXk"
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
