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
    "3DgvTFJiiu9K2nt8gAbUvRA9XqXNRtencyqUrbEyGS8ctQcHvMrCreNLs9pH3kHc5RUMxJJ2vDVgh1NsEwJ75MkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BDTV4FxTayYHSeGkqyFNkrARgbX2Lr1zy4sZ5VTyvfmJLRTGjCy88U8PCVVRxFjxwTw9dHvuVWFqKEkBGeYW4q2",
  "key1": "HSBpEhmYBnCk42Z6hkbyjxcQN7jneobPr3B9MriXLx3BsKEGJ8LMk6CEvLyMvPAkxauuhqqYmM2q8cTAcMqWMVK",
  "key2": "2WDvMQqH3EBCeH3E8C8LBg637tABYdFodNbGbdgfj3k9EVYT4GKpsbid3riAJyGYUcb8SVBQz87Ab1SBnCM44KAd",
  "key3": "2k2SYE6fd19k7EHJQ4Nmxf2B6toepevVgu5R4188P42hjcwAq3ZJmzjE1L1rwWenEyQtn8n9GLtoAt8Df8C9CxC5",
  "key4": "2AwPEXs9X5LqUZnWDSWvnVgwitBdDpE1KG5vBJtepmQ7HpNJt8kV3dQppdrmSmU3c3MguH6PbThis1v7ME3HqNzq",
  "key5": "3a6iz5sTXZRA2dh33tkDT6pJxFAeA3hEUfeGFiFbMUg6Sk6EeALGJWhL3BbPFNBJPAsFFVZz38VS6Mmjk8w9f5Ua",
  "key6": "2w72hdZxMTjrTTFZBDZVMgSK4qijjPDnhPadQtb5g4wHe3j331JVn7yibN1cpAc6WqMGY3t7F51JxwxQp1tiSM43",
  "key7": "2gez2RjBwrjDRz3seWY6HWC2Bp5LxezBGEgTegXBeD99hRzNq8Wu3GzzMhBxcUbNJnzJfqaEBM6mkoHuyTmXGbL6",
  "key8": "W8PxN7Z5YDEK4oRTg9Gmt7joDMDthetuR7Tv6Kq5tM1tLAJLbes7gVrZMRXcu3GHmRXWx1UCZGsQCVc14NpLbfY",
  "key9": "49c9qYqQVwZfeU97HDNJwD31trvKnT1gs7fKpo2VCRes9UeiPuYKgVq2d7YpCNPzzwz9rYhR625GqzP8KrR8AfQb",
  "key10": "5FSGEnMbvuMCTzDJ8ep9nYRPJ8TM2qn8epmgVdjoYRs7oFipTw1VcotsVo65J5JixQbpEtcMCiuvc4hPqFfysKwH",
  "key11": "5fUn7QU2Yeotmiack51op4qjA1D1rWMgF7E5N8MTfdFGHugwF49MvS2K47yLP1HE5RLygAHzDQi22NBXFyMFeuJR",
  "key12": "4vJ7bWZQUNJpsfUzvHro9jWUSpJ76V4chsJFwUzcwVqRuDBca77VKYRVnTtxuGYyks5hLfDfeaS9qRPCRCkLdsMY",
  "key13": "27VEZqQwF6Nj2KcGqXZHC7PLAJa5S5v7DzPSEoSAqnshDRhrKqck5ifcTzuGVFNkVvaTgzxvbrr35oTZhztubdRV",
  "key14": "2SDGr4RPkvpBgJj8Ln7vMiJRSUEMBJdSkon4TAwJw7bw3ZNZmy6862wgcmTgRRqbmg4TaPvjDhLRwjWXTzK7YVCn",
  "key15": "47ebANsgEwFXTvxY5sSTLjdTZf8wZWHtqRzkuQMtEXyeuV1Ft5FhMr9J5QDnWvgEX7SojnX4uACitvieRK97Ftic",
  "key16": "3s8pNKKvmK7NgNQs74audsVtnqqT5P4cqzPCBjYp6vsnBtmDZfNfM9QYczitcZDL4gCaFaZW2A7u13xyN41m4sQz",
  "key17": "3FZJYqKMA5pSv66S7B93GXtzxDtaSQdoLAaodG42XysP5zxw6zAYcvtKZQaAU8XfAWD9hi7V39C5Cc71kofQS22Q",
  "key18": "3EP8h1B76BMXGMgXghni725YfWP5MkpGG839PuX448mE1E1utmQuf5mMLcNnCzDJnRJoXVCFMVTSxrKmEqN8xTjj",
  "key19": "4UAsvXppmwiShkVZeWZW3jZbQWQJq2MRjedYpQhf55gpA7Uj6pzkZYNHvjUmUDsawN8rMacMo4ShFp5NAU2ujUts",
  "key20": "56tVc45zbNCjVQUaEv8mPXHqmrbsmj8yeRQcapbaQCJCwLRq1BBZH6KQKeyHWTPYReSZT9hFP7jVRK4CmxtP9BQU",
  "key21": "2Dvj1xiwA8DpTLRGr1Df8gpd28xH8ysEFLheADtutprRGQu8BQ6XMjuZ4MnMsmXm9DzKVF5j16NoWj4EhCCrLL7W",
  "key22": "yzBf3ssTJW7azP4iiqSSuS6ysu9cCPLWdL8qPkeVe3zouQGB1Sn9RtNJLiVFQdUy4uyXxoE3v1T8Bhr6Wicik31",
  "key23": "2G6N6p9zrNcjCwAQZRm47pruHQ91YPhx7YhZE6bdpYAGx34fTFahxAPYzQHVvZSMCsz5CjbB7xPw1wZnsqPhGb7L",
  "key24": "51Mxb2xoJiKwr7PGiyEHhKSA9QXUdzX6tF8Hd4ZKwh7F23PQ1jsgKFUqjP2acwieugScCXiKvo8iqH7UKLRzV9H5"
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
