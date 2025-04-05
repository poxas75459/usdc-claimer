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
    "2t3SNnqGvegCYjge3kqgA4XC1UQwbkaBqt3ABY1DXq3JVhcNFTJCueRyXxmRF3FWFQ9fRAyziBThwm3yJUKZwTeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GBryKkomjXds9KUs1weq5qwXkHzb9nkQebUaHVLkw9JWzFim3RuMgk9GgMVvLhYPBZsmipKcNroiw5J8bTspgYq",
  "key1": "47gSWxhdVkauJHxoGoYGHFRk8zFkJBYjNS2SPhAcTFuizoe7xoM8ZD6wQkjuSHLTssBeHKyAjEUkuHV8r2baXDot",
  "key2": "5BtaaWfpNH4kGDF1LMNDz7z1qhNACupM4Xdzy2Dsnsuizrj99hZp2pzRRCk3Mo1JZamvLtaJaQimnmeFvyawgsMs",
  "key3": "3WeiJpuzdxPrBBJwDpxRFYe1wK7Qstnwspp92yRAnFGCV7M7mq4LF5dKVFRfFhXSJhMptDDQddKXwDZZu1LpwWn2",
  "key4": "3FwG7kaz1GfNMrbqkZdHFy3WWwunVfxFdq52s8iSEBURaSNFLWuGgtsnqqfFfAryt5QVPKtrhGdmYbzFkmR2AdzR",
  "key5": "4NHJ4tDrspLvJx7ZDbJe38HHrAi5v2yCZpkB232DBvDYZUrerHkNSG5p7JdKhLeRt6PaERdEmCyFYkbWd7XVphxf",
  "key6": "5yhNippTuz5QcpP7y5J6ZK879Lk8cdY1C3U3sdWCD7zeKNUUShfZnxJBoYuuRdcjxJnp7x5hm6JXbUBXpfmBgXxe",
  "key7": "4CvR5kkashLgVTPKQQzoWdKEC4S9hHCTj6xNwNfhd1AWaWEwG51GSzmU1WhPDFv6cAFgckJD9ukiJW6czEcfANQV",
  "key8": "2tNettBNgKEkUvf6EvZQJ6iRn4YmdvDkA3xAQAmthx69XdMgxDdeHaBPMopZm3gTMZ2BNfHYG5oxhArGtKaEqpHs",
  "key9": "3mWRPQxeWTHJ379JZv4dBE94URgNjaEEUZrcbRN8pjpcXZ6tjsdJz3Lt71LVPTuf5FN3HGsPMa7cjqFtjdPdeKf4",
  "key10": "2Cshbyv1r8X49tTa26ucSpj6TFBjfWKYQbQfR1m65sUDQrdtXkvUiXVM8agYdMSQTxfoM5dEHshtvJYYaFp7ibcP",
  "key11": "4eAVATgkNVWHcv8Qu2gSdghSqt4v6AtCpViHEvGKzHjMbsdRTKGmnzJ6AtfWwajRQGQChVQJD4EtzFKbb7HiXK7p",
  "key12": "2NhCTBPUZ1V3i7wiYYbbX9xUAVHvTAjncMyptuV7X81Z9wpZZg93X8tkAj4GPJUZjUhqxmD7Ft2dAvRqduLmnphJ",
  "key13": "31sGemX3Buy7qYjxzBQtChooQDhJtABhdXayiVcEaEeac8wziP8YaCkbY7Bab4phAvTGphqjVB9F1wpouXaZ57kS",
  "key14": "3a5wMGooTdiGmv3U5gtRGdLuj9UBQy6v2m5CbM3zxoz57zCKBAT5y9Vt6xSc9j6ic12Jb9ytM5za9ZykmZBvvrwQ",
  "key15": "m6DNu9Qaqq77zp478gmNLVyV2sXt1VBc3bUV37MJRZAzv2AYLDRWtaJH9ZuLooMDBn2M567V3jwNfNhsYvfKHQm",
  "key16": "5npN6uzLKT9yzgxzTfojVJD5hA7fUhctUxyF94WvV51ftWEz3ALjxLowys2h4cXyH4vy8BLZwaRjpM9JE3BupSvD",
  "key17": "4HtQ5PJ9Sg6NnxBQnN27NipSua6i8YJkhvgGKNcx1dQgquaETfvwN8UG5LivgMJr6cfahpaHbtx3ayx6Kq23cHRF",
  "key18": "34x1Yvrq3zG1GycT1WdbyM8vQ87mcoeLGBzzrTHR5a1WmDZKowRKej5UTE2ytKFK1rGKoKmCW74hppGCdgZZPvHD",
  "key19": "NswFnFarDzCASGLcoiBYiWY6yAkmYkhHbNV756iS6gxcfb1Rnf5C8zPDpPRubHh5FfTQCpqsjFD49MmoZvkuFP3",
  "key20": "4zjpJR7YFnKFa8tS3TCao9qA4YKafSHu7X2ieBJqjNCkaDknJYvwwVvnCBeo5JC2tudHEAzqX4qKxXw31UHjDUJc",
  "key21": "3sug5kQu8KcU1HE5kVNU3rSbZMkn84GGq66tc7Nk1GC6R3Ev6jGzghsvHBjAS8NCcAmeHdQSApanZQU3HCU5HCe3",
  "key22": "22MyGQhGPSpEgwhHVU9WJB4nWDk7cRHpECgkQL61br8FwXUR4FWZagvH1rfn4Pa9TLNRgnufQ7L9r7MgMZRaN6ns",
  "key23": "4Fb8eHDz9XfVeDKhTRgRqQChQLrsgRHqJ3wmhBkk7MtmHnK6sMMJCc9GKUgEER8aPWMbrDoPtdVRJcWncHiDKNYD",
  "key24": "5VDJAWzNj14GwC71crzWLsiv51odCZ9dtx3ZZbQajRkBTmzQgEoThP77RFin5kgstmEadBvgD1F2g9JyAi7TSzKG",
  "key25": "4Nf2LBKtSw59DGT3ip3pUP918e3VuGapVjvABGFcWxuuVAAdM1cKCso1AzGin7tp738sfvHHZXdmuhUo3ZRUdqEh",
  "key26": "4P2UDGBxWtwZGGSUikB8tHaRrzsFza1vsWtpuNZaw13wwxVd1PcDyfZn7q3Z1F45gpKUv9d91RbjugHTNY3SkFFE",
  "key27": "5omFyGPq5dqTN4FZnoXzX3qCpyc4AhnCdn18RUMPFMiqZwER8xkFh61DaaJVWThYPFqPucCHtwExHCMwvYGzeo6e",
  "key28": "54szs1cTJHSn261VDbdVyWdWjWasBYVaWZ5SYyjfhryejRLqvYJjd2YbSVNrkDKfQztTfBpgqXM4bfPwYbyXBxpP"
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
