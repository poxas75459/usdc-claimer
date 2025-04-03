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
    "3d1ZweLeehEmXxhLm9JQTRcvRusLttQ5dnPw3fSC5V4iqHKX976Zewaa8Xiqkjf6YBVmrR7cYtpGmqiux4QtGxpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EXEJvjHMLT5UwgQbF6r7dmGbnReQ6WwEzvvdKGCnKZFQcSqbxZozhQTgSnS5W5jzy4b39oj6R6Qr8SzzUgQfz15",
  "key1": "VuKPJMjFqgrjCkW9BWE1V13fzVoBSyDUJSuiNRjnunPxYH7WpRomdJ7frfQ1xaLhmLS1eVWNE4Pb1Ygzn3yu7x7",
  "key2": "eRrpaMqD4YNpq2hbjnE5v1fWD4pogg6GhEqeyEwAobmg1TtbVAuxKUmTzD9TPTgKdoJsQbeetnLcngri2YyLPiS",
  "key3": "5fwCZZQc7XB1Z89ReVPqYkcpRL1k6mtq13W28mVfRiPbSLSzAtaY8QXtZxw1tmU9ALk7ZgaqesquWd8uXby1nw4E",
  "key4": "2u1vYgHJcPnVaWgUxNgjTgDZtX7izcAH6FLrfFjFAeijwBVhtnPZYQ4BiZvo3e7P7mNUnH9xUUnktEJ9fYPoduHC",
  "key5": "2SKUhexn1uVV6CcRFLDKust3cunhhi4PofD9YukeETUtw1C7JeDKq8Jh739uXp9jTWD4ufRs8dbKgN9i29YyxuNw",
  "key6": "4fJFxJVdSHXmKyzR8zXgF6mN7NQVthapSodmAxCy7YWxTpRMhJAWFp8Ko2ZhGTbPeu8ModqfC18Sv8WKFroxrkX9",
  "key7": "4asKNdwAoG5PPyToauvDsvPxuRFHNm1UujbgacL7sqWrMwqdRZMaXW6EyEHuSmUyVb82LswaF5ZMWMzniyKrMroh",
  "key8": "5Y7HF25GUNqNJvT2ybysmBrigDTceYYMiyhDBn5qKWetbpusHrpBYt7aKtBaakPKEFzrckhmrMQxRwvjWEbd5TSf",
  "key9": "kZ9nyjnt5jyrNFyJeVfsqGyimBjEp4tRmGH6tekNeax4NpFKjN8fA8UAvoDU7XDSN8ZuVGNXkD8QW8drAkqzxte",
  "key10": "51nNwbcTvGS6wyRb7MBktd5sfCduPMiwoddompzRwvdWkvkFAMpHQcH9KsBmH8zen2tCQWkXRWVpJXVSQm8YuxPS",
  "key11": "5F5FkCGAtHumcLiPMB3v98PtCYatqGQXQ1DYAQh45g6nzLznWWkrR7ucCxDD6NDjyJmv7XCRRxCEgPYkCi6qcqSM",
  "key12": "2NgJbt1BWKFt7fFLpNZipL6t59itTkXgRrAPdVfZYteKiiSseheYkunpkv7GMKNgDuF7cQPsbkW9miKEKYuQFAmV",
  "key13": "vrabB4syVDuCbkPNTZLHGEpx22ousrpiknez51tuAySd5i5y7z4cGoJZd6cJsSUk4bc8f3Q2NGswyLUFgJH8J7d",
  "key14": "5foy1XD3UTrZz4VfcbTayb1DRLJUjgVz8F4HcwgkZiaunFgUirptE9fLmK7oFFYLk42LyLt8jSEP9ati17yJYKMg",
  "key15": "3DP3zagLMkYVSy24ffHtaUjoTHNTRhwbjYPY7N3tiDD4fPYEzN3pnhTQFZzJjQaMtJpwr8J4M2gq7Vy83NRbpGiH",
  "key16": "eh8iKnP6wATJzNgpLi8YMhhgQKnucid2jBWRH93yrMutvbCJL6KXpk4NHbUbY5nMFd7zK2q8FD2NN8e6DhzXk1Q",
  "key17": "4n4twRGAWaQZBUThQ1GUXeK4P5xk1mZt4bEBHzkQVZZ2f6RDNssgabVedBHumeMD24qEFwS9pEpMJJAyvpH5tNaz",
  "key18": "2wPtdMekVpB2g9Er47TaDybisYJ7S1rNy3BtBMngAe7Cedm4cQaDQRLBeqtRyAZpyAUXj7QV3eh9oPJ9jzo33buU",
  "key19": "h6E7TTN7AcUUZaDybQU5iQUxKxwMNdXYspfEbmtPAANjbR7JNQg1ekbmmSygHfLGiYQcpG9Y7yfScd23sDTRmbC",
  "key20": "2GcHePcV4VA7ndDLWe7vDBv25K5MpTDKpFLvZwHVDo7UZgurZRqRCGScWZYQbcP4D1fyiWr5aKvT1D7Ur6y3g8jm",
  "key21": "2ar93L7KWGWVKtdg4saY16fjhJRs7XzATQbcKPbAkUyVb8Txt8VLjEQMMs75hMbwyGjkCmbzwwJfbHzT7WKiVFPd",
  "key22": "5xTBcv9Nsdj7noCuST6ce3WZbcAhhBjXNSAdYoeUjnGKfRNzLh3io6vjGfRZyt4f43bDD33HiFckauVfigfBSPeG",
  "key23": "53SxYYWigrYGgXXMNZRvNV5NJrSLquvxubN7VnodsyxNd9cfoiqSQaCmTZgQn4HfKVtXwkELuiaGuFGzKohQ7Hzx",
  "key24": "2ugBeHLs4Ce9U7mp956CnafiJoeUA7SyqHaCSzRFqk3N9qx7R3zMRPiosDVVfHSUSBgbRzFF9gqWnUY7vkdLxbFR",
  "key25": "2UeVQ4d1G3wvcMcUwrtBVxPMNw8RqwK5VjRTPsEDqZBXL8MvoV1wtGhQn2C4f4E4d7Zc2ykAuhNoo6ZtEMWuo4NZ",
  "key26": "3nwkZgJUWfDJ14DxR98k6ZwKSUJ4FctLK38kYucayNcfiKA7eaP1LtkwEngvS2wMzu1ZYgV7GSYGUrTMAhF7evsS",
  "key27": "582GHSer4B5kPgC96spJCHPp4tpiQ7FprzhFuWSJNNtm5pFN76sSwzoRnfNeCZCLbv2x7Hg2NZeuR7onNZpM6Cvp",
  "key28": "V4cpJwwGA8bahxrZvi26YoayDXr7fTfftagEYvT8B9yzr1miDdr7fzGfuir5TopPvPae6KPS8f4fkT9Hkfivo11",
  "key29": "3vTWyj4VkDUuTaU8EUe9Di3NTSCrDEeQi8p9P4U9E91BXE3Sc86jBurdv7daeJv6Q5F3c9DgrhjXN17e9LQnCqFK",
  "key30": "Jh59PhKmHkBkNzVLwQEye4EoYYQ27NboEnQbVUGVodLdqhPvstzfK6LaCNugKrpkajWL37Ug5bPspLkKMevo7s7",
  "key31": "5L5Lsk58njxJDbhyHdkACeZZb5EUxrGVLzo6jqeAhSknmGSKSseRdCcMoUy91b3h11gULGc7i4CBtz5D67fVf23k",
  "key32": "5WpbVJrdUyDQLzqRcwU9F7LoUzNJ5augkHkPvCdUzbPgC1KLEYgpGHNttroNjTtGytVAHpRFFziLBk3DFcAmAKBa",
  "key33": "4gsZyLKndZT2dbWcgpcxRdfmre9syotoRKBcMR28CubzCaDtvpVpWG9Ga6ViXP3cktVgHTprxfN8zJ7kDETrBkVU",
  "key34": "3DY8WrhCSha69ywAbQrtdxAmpQXysCUnVcYkJodXzRRXLH2eABdqnDEqM9A39avdw7mmuxKokEWNZ8maphuqiJJr",
  "key35": "pChABWHb27EreFmKwYEmN574Lfkog854sSurWFUEuWgu9yRLCz9LD1qFwaeLco2NaRcbQzm6JyPzFXtywRTtVJB"
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
