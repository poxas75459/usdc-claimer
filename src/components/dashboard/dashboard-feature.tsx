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
    "56kKZK4oyikuK86D53PiTzcw5Gf7erTGuD3uLwWMPsUro3BGCmZ6MeEaK5EmoDn1KkhAZmxLYTMNScNRpiukHqLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6CEzochbT2fN9HPqiW6nxvwd1VcrRNeRdihKgSa2e2uZePH3buqhvSqn9WXqKDhjg8eMbQQkmBGzNrmuUS1QXn",
  "key1": "5ijt8ySHy4mJ5Y6Vk6pZiewg2jeDQbDF6HE9DrMs4vuecwyRgsYvt1pszYx4nNJWSWAHVwLkbDtd4HqG5hQRAEU",
  "key2": "5vcyj6DRnUssWukGpysuW2M5Y5bzVNh6WkdJ92n8zybLdLzj2zxvbGBqqmiqVfWP7f2iVvJoz7aXT9yVAqhSqwgM",
  "key3": "tTzXDpY74EJcSKwfCzydjMW2TsUSznFQuRC7BpXrM3NC9bdBcYJ6wRgQMn7LyHqFvT5zH8Kmi6yKd2axwr8o6pv",
  "key4": "q3vvDhSaWBBd4EvVmK5oQSZQ41wWMnN9FB6e9Ss8qHVmUzZZ1vLPYvKoTxPyzSFqv8hH7E1ULoJ4pBpwQZ1fVVY",
  "key5": "LaPZ8fYE4jvqX2pSJvizXCwT2iFBQhLhVA3JtskHmjhkcjSLBW4Pgu76sPUf2myUsk5Nv7Mgp1dH9u58o6TSXpq",
  "key6": "2sKqEVqrZ3KADRTuMjtRPT5G2S3MW4bNJgW6yuL8EoWJgp4njYNFQ5vuZuxQuCWsZpNBb75JuArVoacoSXvzQ7rd",
  "key7": "2SwF16qaLJmTLvEUanauoEdQNLX8NxB8Mc5mLFziwPrfgjcfkbxKVjDk4aSKPZZF3zV5N2jZ4osPiBsM7VEe8rfo",
  "key8": "4jZ7Gy4nLAGaLpZGTJfnZ7gmXhFnBiNBMgvxmWWHSuyeGchy9mTDUpMPFYcXAMLi2XR2wWf5UDHhLWyyNRu3srbX",
  "key9": "2LoLwa19GpCdnwuisM733seEH7T48fdt1XgPwb6kNxFWQnXX6d3JczQDYuNDHQ7DbQji9dZC8Mex8S5yJTScoZYv",
  "key10": "2SUMdXGZAJKqRHbwLjmipHpmPd56rUuXEAwUnWSeFjXuXTC9HGUy7EMHDyB4TSTxicrRtmpLfTidbUC7QFpCcSmG",
  "key11": "5sLT4tr5EKjVnojkAvynWL3VFa544Q25BseRY4uohdkaKzWjvMqa1fDAuv11JXbrVgNm4PHrPe538PmY9yAF5S6b",
  "key12": "5Axeh4B14RriEMbqr1cFLh7NFF2mRHeXA1fWNnp1F9BVhCEU57s5URyg81tVVdYMZ6EYCrW2f5TKwPdk4joAoaBg",
  "key13": "31VrJMbbv4caPgdiM7rezhq3sMGd4dhBRsVtyuQ3XhfmAwnVErYBbGRVSqRfruJ8rQ5HyAggCDgkrcrWBe7B23PB",
  "key14": "3ozNAFTnh3tZsQdV8yegjV69qZyjWoDy9JqR8ST1Sh7QWmPUWhC6oHzSZuLdVqqUTmdTjwjjrcbxk1G22kmAUj7k",
  "key15": "3pJcRpjYqngsqmofYASfYTm7tqHZJvwuArr6ZYEhtxaKHtnJnTm5ts1kzf1GcEkZAH5WUdNsRV6Tg94M2GRJW1N8",
  "key16": "5jSaFs4SbfzWXtUmBdSuZGJigVVAN89eMBxMsUMZoLynoLWfRLFMxPStzwsxc8hTYKT8HGcfBzxGZ6PC1Z3YNuGe",
  "key17": "5Hv9zPXJZCg2QWwtnbjgZ1XhDGiUV6n5JypeA2PuuipDmNF9wdHmL5pURpEg9z4KZZMuqq8TnBKBdJe2567yBwmg",
  "key18": "3vm3MZEfzzU7kBeNMLVtbCkrfjDayTfSCfrU3iYyYAjvCMvdh8S4iR1S3QNMyFo6mM56NgZvhiJ4UZaX4gPGZaJQ",
  "key19": "2PUwog37S11RfH6ZnFE23cHdmYgBWgyLw8vveqp6o4V5bkJ8qKQafG46g8xXXMLyMM92CEHuk2B1f5gECY4tvGyf",
  "key20": "4jqfA9TuhHbbnWzSjC9uCFTAY4SqqBdpyHB4qULB73ytDv7VSvw8M41X2H7VK3rdZmf2XA2BgDZNLpnGoTU7cfSF",
  "key21": "5VaQot8WnLyzTUoFbFSvpD3PsUBzRFhddQUELpug1Hs6b3hso4yZyZNva5DWZ6UZ6VKV4hhSJvWstnm8biMraH5P",
  "key22": "5QQSTMSkGmVQgq7dEVhRwgB4inzMYhMbJAKhoZFFvVFfxFDjtw5ENY4qhi56FZN21zKLNUS6FXMy5fKjroMkE7P5",
  "key23": "2qjh64jniBAbyLMTGFLJtgqo8oU876VEV9cAHaKdE6eg313QJXdaqj1PkZD2GNHDLqsKy5YhZ6D5gvGYpV7qsydK",
  "key24": "2u2kGYD9UziH1VQZy1hA4EZRdZPdPef3MzPRQaNgc7KYuwDrjgdNjVAAoAVnKs5tpsAGkr8hUJRRKP1Q62rpurWF",
  "key25": "PhXQ1FA5XbefcJELzW77F4ojTUieUTa8zCBykXTn58C84zVv9uaE6cpLp7i5p9hSgw23UFtYFf8m9XeHwmCT8cm",
  "key26": "4HyxAnzhwDU8tq4rmVxJeGnGrKi4HVUYHkKU96j4TZ7xsQeHxZxpY5nwBkdhYp1JDx34tTbzgHJ3CGkgzsd5GETB",
  "key27": "3CwAWD16AKtboC1eGMrrvp677KuDFoY4uNZkQ2z9pDaB7fSS8X7ML2F1b5svTCxyBbwntfcz7zK1WJ5Ter6GBjsR",
  "key28": "3jsb4sxtP7mWze8D4pRpnLKFsXkW7RvpPb81b7kxn4padCQ1BuiFmF9GEYEHo9H2P1s2q5seTV553MEU1udrcEFJ",
  "key29": "22rEKgq5xcHW9hxKPd8nzWtEKLmHEt7dAMUvbGyQni8PE7moZFv5narSS8TNFepNkso99eGdWi48aWPQXkfvuSpj",
  "key30": "Lmk4erzJ6VvvExfJeKYTzbL3MbwPEFCCFfm4mfepUpMqGkdHgksFWpHXEQUK5kWgthZz6UkYWQ6g4NmWFEfDMRa",
  "key31": "5jvGxjy8ACVukuSybuxFS7rwbufQJgV7gaAvGMtpjmdofbGE2v1SkaGYikAaUxjRrd1v7ePd2eSnNYxXqMUxQEbg",
  "key32": "4d18ptegouUjM6inLiMA8hv3684vN42KVqFXRkBDu9uuNjYoomxpTsLjATGSxLNYYrRD6UkxM4Jdeoo18iTLqhBT"
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
