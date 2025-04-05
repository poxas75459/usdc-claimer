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
    "4m6VdM9BEpx29YTwUeaD44YfFocXNKsWMWGm5EwKrEimFc1YHCLi3LjwPGJn4at5jGCgrGSKVXARLwzm6vUmKqmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ZCqG68yetp6hH9atwSjapBnvJLEeHYbdFZBq9SEsFcET7XG3ogtyziXnX6hckFBfmuUNbNZEGAsVKaiKoc6ZMb",
  "key1": "2nijm3epEbbDJc6HAiHf5bqE6FaEWhUHQzMrg53BvPZkbxSnC63FNWVyajrGT9FxtscPEGHK1xNtBRcUqfTqsbpa",
  "key2": "FbjeiHke8NbJVdKL8VHLNmRwhCTA9nMHAd3cuPo7kzaXXMpDAuanAgT7syAhifqPawbWWadfCXexE3npYMGXMxP",
  "key3": "4otxRe2Dah7TEYUSNKE3KRV4u7haWSZrmyTqF8BhZWo54cFq7Qthpqzccxs3bBcYTvtcsenEuSLLumwD18uc1x6J",
  "key4": "5ebLiCH4JsypsefVVSXV4H2JQFRWpJmWaqrMMcJpXXFd6E5zabNxeH21uF8rG2jzVEpvcKaVUQW83DimKNwvX1Mh",
  "key5": "rhqnJ6vtzhg5gQg5JgPjudc7v1juhmgCFScfM6QZYqW5hL6G9gKWHbbDQvP5HbSGMXHVbDRiSysEH8Lf4J3vRHd",
  "key6": "5aUwVW3LS9Fek8BKjb581yS9JRJpFDR6cGudYkQB21DTHHmPATSFutRm2Sz8iPWxxPkwZe13zR7D5aPxhTfKiKzh",
  "key7": "5o1LafkWBtjjydydKArBCESHStkcBQYebm5Gncn8gzzvygCsuj3EKURkMj9eneKFwA4AVWXNFxrH1roPRPjxEffA",
  "key8": "5eF55mAfysb721LQZwTuDzaUeqAU9AXEXu3sh9be6GZr4ucqwGvedm9mHRdVqbT8CHutAA4Vmg6eKuMgPQm7T6Ak",
  "key9": "xhcw7U8PEsTmD925HecdmBu2QzjoyQ6qMWpwgH8vocGQRNeZb9nMWzTNm5aA2tAd46czSfczYbw4GbbgNH6Mokn",
  "key10": "2up1HkiBgaLHLDRaMmJHw71bMP78hgmJYeMUf4hV4keyfjDNpj54rKb4NPquA8WNzgS19eFDUDeyAuVrphARPrm4",
  "key11": "7CZhWbF2m3uvEyCq6FtQiLMjr5d2k4AGc6WHVFxkf8HMpPzEbyVLXCzSHmTNJ5Z88akK781CmEtt8HP2yKfx2Gn",
  "key12": "2dE5SXpDyP8ycBy4b9ctfmTLt34zpeVgPfAqhpYdWGFT9f54o6iHuL5YKWCtMWudqP7sxddLtfjra1raCRgtg1AW",
  "key13": "4ToX2KmtwAYtsvujCFxZtWCUy1bLhTfqz6Rydp845Ub1LosiW6LzohzbXnA8Q5Mxv6hydr2xSLGpR1wPdzYJKxa2",
  "key14": "5HHs93ZhJEcEHectDTM5ecZ9AUVT38Ayv2YiDNNma5eSmusgZ63q6tSx96Kx1DobnfpYLdzYbFvrYDzFGtjih2vF",
  "key15": "3ZUSRRURUAVYnrH7QGjKyACLPpxdad15hAJPJzGvnnCQbSmoEynRfRgQALTfiVyeyA7YDekYTbDHtuidNhprDgyR",
  "key16": "65rXfnjKAxuwRLZ5o9Egrubq42eUqMf1GcSN5mQBJW5PMHca5Q9NuKh2Mrmxi5UBdfMUzJmcZJSHTHX9pUxX2NNw",
  "key17": "4s1NGGVdTSQCAcqHoAM8m63BBhWipEaTA22r7fNuFSaRUSHpZtw3wShnKwui3HTYdTHSejghPkwYzcbjmAmXwhy1",
  "key18": "2aXc3tisrw5QztoHmLYq4xHvXAqaTdtyZiiLKK2BXLZMLwiwjzwjwiFzwLfVRhr6hev613toQnWzbetYppnoGVjg",
  "key19": "5Y8Rk2naDqTG9VFe6gkJGDecZ7qX29nTLLMqwmSCavJ4enYjor1WaFkLpsc4ZP2tnvRoeYMWA9PLBeQ3mXk8fKvd",
  "key20": "47ogLTKDHZUYYotp7tTeHSi8qhC1BdYGo9N54r8mgxNtEp7NWaTgSCkDciJjyorp6LrrY5PL8k2yjtCtACWkrDV6",
  "key21": "3RR6Hh19ewD9Tz1jqKRjkdC7XtiAhK1WAvQfsML7au7PcwwRWF6suNDVRWDy5B8qCV64iKbh1eq28APQ5n5UVN5w",
  "key22": "57pGeXUmBf8tcVmUiFJ5XVTwQcUDScSWr6aSL7eB711fB3MwJWSvoZ6X9FY3Bo7nmKEK1wD9FZE3i95AWfM8ZNit",
  "key23": "3H9iEgxLFvR9xH5hjkEiLZFRdEAKiGbjXppKZj4H8ACnjZjBLiX67k6kqXVKzVqZS4YkxXcffhjUCV6DFksHTH87",
  "key24": "3oH5aA6CSsFeqG531ag47yyAbGp1hqhaumFqWrgNxpN67abxekm8bZQVojMAmJbUdz9aNApbt2dn3m6qPZF5yGMU",
  "key25": "5gBPNvUZTSgdnV8fHK5YwJLKpGzR1piBR3yUVm81Vj38oH7c4fnjX66BvspFxMiVpiF44ZgMNVBmh43aJUB4ciYL",
  "key26": "4y72TKfLpjvqV39WUAzXcFRaeDUeEWFXCYwnTbBmdRfGSvv7CG7sW3v9dXpoD8UX1oatbCjrBeYZuR26Rm9Q12ud",
  "key27": "4vYAz1LCUGAV4ZAb8AwGSjDsQieWxUBSFVpNbZwVseFzjgw77XDbRxncGQqZJ9r7CFQQ645uGzkamNVer8eJNVYN",
  "key28": "nyaHmCXzSgkRboRMdY9dhNRe1CXR8upBeG6Mp1dV8qpL5Lwx5MCZkzriL2ZKzftbBH5wGSt5RqRvnVPx92QmdvR",
  "key29": "2PBmYBPjmZNHr985Zy7MBw7T8UdGpM5v5R7iTyDkhQPgAqiv5HXB4AYiCapDkryiPBURPMkB5jWN7YUu6QZddYwR",
  "key30": "26LeSfDL7Q2CBXQzWSe5sQ8iKmiuGDwvmPYYJgKYz2xczSTki5pJwKyRKd39F8U3SicYNuDwBdheFuwcvyaNamAT",
  "key31": "4VjqgeMqu3g9nE9fuKYGrWhzHjQSkYkpTPhdR32RbKMC46KS2gKLZbn9TifffZmtQsGYrZr4GPxWQBhwK6BZcgQt"
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
