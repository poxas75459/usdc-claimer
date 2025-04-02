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
    "3SPEbMAxAj76hxwasFRUE9CF2mY9db2HfNL6MNRvXgy1dxWXU1xtbmXy3G8NTxnhfBWEDNGwwtbMEhXrczekJTEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SU1EWC3gKeRTTuHYD32hALo734spKn2fsk4ksWPzgrE5XTBE4neLKTFyL8D6CY2HG7pKwK1BTG2p5S1AYeANV8G",
  "key1": "PiqJ2yGgRf613Ce5brGZ29LhqRX455r9qHT8av4JgmUePE995UDiUaHttzWcfx1wF5CQSkycr4RxACsKEH6DjLm",
  "key2": "2oZyppg6WghHSw4W49NE7E3sjy3qqTT8XGz2qL6zswdGwcNe87gfCBxvZHXoR5NKXjamrU3B1QW9Wyx3wyBW7V6N",
  "key3": "5z7MYsqrvKfAqXAyS4Bx8kWeAqeR4rWyESSQsRZsLU3t7ZUVfcEcqKnHssEsyY2oWzYbYCErLjT7VKXRPZDCaYgm",
  "key4": "4kZLrPwXZ2qoY2uEwpX81RxzJzLNY18jE8yQstkdrvPL1F3G9AhX4vpPiFXBETDx7PtS9r2qSA6P8gzbxhujeo7L",
  "key5": "5a32FLaGAX2QQptCbR4HNJbppSoBpXdhrrE492MWDhRifD7wSZBVNPMMsYKJdtxikfzG6Meo5azbUGLuTi4m1RK6",
  "key6": "2283arkgABjbtr6hmFxu1ejT6f59sWEZQyL9nPJ3JPquG5TEHFHXPuy3bPEaQXMqC2zJcAK6psKnTDetG2rpiEH5",
  "key7": "2LEa32VAL92z7GkVUNcjXvEzfypRK949Knfw3NEzQJ5pP5kKDWUJRN4yN39nwcFP1r5e2rL8yHnngtnWT5gSnReE",
  "key8": "4LD18gyKMGgFWcckino5qAByQ8jZv6fQLLY33VgzLDdL8nyoZgCugqfT1P3Tx3cV9JhonhLVEjJ9Bi5sRqGUx77i",
  "key9": "5BPExJomrJKuYiRcSGe3gaVhWVJcbkuTzzRgxUtBshX8uq7jNWMYySXPFUh4s75tQ1gb9psz9QApsCQRyHZZtvAD",
  "key10": "35R3VaCM8i6NeC7GaXWa2HGCiGXKmiCBSZ8ioupN7cjLDgTzntLpR7wz2FXrd38V7aGCbndecChvCpJBGCeRdENR",
  "key11": "39C5JJ1ETju34TiRCUwjBXF56URd17GGLTd8NafFpyd9gvGPibSXP6kgE6kcoYsS1Au47ZMq2RL5CPQZpVrxeAPi",
  "key12": "4YeQrdU9KMVN1s2XDdBr4BgpnjWM6v41mBCUUG9nCCuXnT9VRdLx5ksVy4D8Cw7tFbNLwL4Ws32dVHu13asG3DBu",
  "key13": "5GGpvQatMEUEZnHZswj6yoPED7Yv1ke2UhPUL23iqUwgjt2aRjZ7yu4uXUP1qxTGNFBG3ahP8EgxTTWVLWrvmdha",
  "key14": "2wxVKu3S6kpaqQLmXcaFhcJ94VjEukyiqai9p8J389zE6ZPGjPPUybVqbCvLjJUfAUNbn9fFSghDivWtibBkqwwT",
  "key15": "BrybXfq5Kw5HxSVJFQnR1ytWRenKJougNRvzh5BZGpZoDnDsapre34bZLtiQVc8XjwubedfCPzA6gTjbc99Fg65",
  "key16": "hU7HaoXBLYGdAZU5Xwg5ADXTsqRsA1gWiPqp5tyYw2byQ4DjYR18hhwUjktgNhqPjk26iS4H2pzjuR6Capvndh5",
  "key17": "dBs89vWkZkWWCtStsnVaC3ycobVmqQCpbsDjmypgm5xhSx9dYRdNDdSqPcg6vAbiKijQREZSctqyvRUBxZQsLjm",
  "key18": "2T68EeHisj51torKHytxDEyiUHUSvYJPiCpfPD2asV26oCko8ZBtuRw7yGXnwz8uNCaUXsZaiPu2PFnfbhMvAbtq",
  "key19": "uD4Z49P2ZDtswFranhbM2svoWDVjs67udoksXxaBzHYtdiRoo8NLzVq3845MHqr8kD5vLUmQLipdb7Hoj1tTADy",
  "key20": "4piF1kjJck6gkWHsQJn3cuQgUQZzyFLcrvgPCELc1mUL3gbjXz7jjR9HNP51ZnbUik4e6TDZNaq32Le2yNTrgczQ",
  "key21": "4Rc5uZ3ehNZkshpvYcQwqpcYQDG9arqtShoEPtk8A6ueGRU3uCGj3JG9Uc3Xo33mHBdqdqDDJR62vbBDgGcjtfbA",
  "key22": "pyTZ3p89KV62fZy3Fkt9o5V5rJNSNvaqfW3X2M1fcZGy9WnpC9sXDTd17te5s1uY29VgpNPgTLpMbMSJYm1oGCq",
  "key23": "54U9CFkFp3reaEh6AGBW3GSe4h8UFoJvw8grPKyFYVkyRMtZJqUaJFYYHnicDuX2C7mR1PcT1P2Vv2kG5LAoLVH7",
  "key24": "2Th8AeATsY5KoBu3n8C7GYbNjkFcQLbUv7TcGMuK9tKCTSJiiK3Dv6kjBNhJw4Xptaihg31KhTc1JoQLs86Du5ZP",
  "key25": "5V1XWhEsP78Pq6VPkqSW1jMqfMSCRdok831HELcgZwg9Po38CFkvG36LdYwXtFiWXmLRTPQPrSF6t9AS9bib7EQB",
  "key26": "gxbeKaEWage6RWEQshDZqQ5Bb3pwT11xT1PGCeoskKdNHd9h2oeijcnTDZrXTdjuNfgDYSWEy95Cr1YyoG7BGhm",
  "key27": "3MmBtM8C6SKTdSMn9NQYXEb56zkMXs7Bc14aWkcc1sh6FsKZJBVwMuX55duc11Ni51KcTpXvhGVFtEy9rqHWoWnN"
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
