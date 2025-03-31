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
    "LdUJ4TU5nFVdEHPyPWeVeF8Lfm8JoGAyRcFDuGkpiWefFifPyRqmtM6BucWbSi8GvHMJKQx5ZgwjqbZ8YzFJTvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CLpWdxsX9Hknq21QMqov88wr575hnbDpiLNbobovFr5M4Ya6JZD3LYDZ7A4PqM52LMTQzgNLUaq8nJZvbKfUYjB",
  "key1": "538wpKj2VviiyjRKJATiEGHbcbuastXoFVU8nFbFbLWpJi4BtWY4ABS6r4fRNGpADgg33ZeamdVD1MnBqabSsLgH",
  "key2": "2k9y6zzLtJBbHwPmejt4FC7tHa8us1kAHdG5GUuppDphyiUiQYFh5pTPpv5N5CSLQc3FoZuFS38SPg2xfwNxZwrV",
  "key3": "2uKXFifJ7dvLsfWe5uKr7tnTdCU92uWaaEo84Eq13uoyF2nTic3qBg5xC8vpH8CPszsYwzq6Vww5QJsBKBBP2z5Y",
  "key4": "8F1LHQ1SmUvWco4WRTxKfGkAG3UAa1qoWEaEcQxbCuakyuTKh6o4Uh2JjwQsLcnBpVwiT1yZ6PB81LfLxkPxegb",
  "key5": "8EZveQQXZjGJkz5oxfC2gRGC3zGR2TEJNpJJGJbMdXC7JSh8woJWEwU7FoQJeNhKksvXcP9nCqtwvsHmabtVM7c",
  "key6": "4dJfbSSr2tX6BNHtivSDvczAVDDLKLsyfqUbWwHZe6uuHWYB2fEwPXnzyF4wRo4ZSHGpSA9YjjEue7Yo8R1xjrvb",
  "key7": "4UWbMyQ1oqX2x17RwLTiEp46QAx3k5BV8dwq37XgCgKDYSpGA5CZT1cKZb1mgRnDPS7RfhciYHEiWkwThQdUP5QQ",
  "key8": "2WPHqhcuEXmMNNdLtrz3aji9FeFLAT1WxzVanTNDupTJG514BunuAgFJLHNTP8CtNHjzheQZskUppxWLmjoGk7Cr",
  "key9": "35nXDYRJtPCLsAwi45YdgBPnKBjrAQEewyJM5gojrEQLKP83hUs3Rmof29SxBLQQyPnrEqq8txLMQXfAuB3ctgwD",
  "key10": "2PbEzZrxq1AuvBFZCNR6F5QbGuXC3wfDBXQ6yLsVsVs8e7ZnhwgRGBFkTbsdNbgtxESNvDgZjpLMMzJSKvyN4o2D",
  "key11": "oTisoqji1P71JNCzthNxcHcNhBTTHGCL2FP9PTzBxgxUFdwhWMTyo3pKqsn6y9U3mkSL7cMY2CZHXC1wkSURApi",
  "key12": "egkB3SfFXSyYXCsmwGX5BuYZBZrM9ZHGWPCCsSUpkizDbvg66dWkU9FjWjn9Jm6GM7uNDLcNCLA1TdekvRCyr8q",
  "key13": "2GzSRAEfEZGaGvDRZwfmDuahdv2JArH9zWKsjt6TwmJdhsmvFGMPFG3x5ufNGkbFLv1iVtAz1zR9SdBRqCUthWze",
  "key14": "3ebaGDYVY5RGk4QJSi7vG9ND73FcF54hEwzwzCgowDVZ7ngk7EZY6Xd8NUkdNGZv6KtNNySMeyuUG8M4QbdBqfu2",
  "key15": "5pfLQBS98YuM86g8GqyCYgsxDM41oroncU7RwWhWwEovw1hpfy4dWntUdzNCN6efzKgTo8ep8rZQo8TSYYFRZsYE",
  "key16": "3oUsQRBJ8XEpitKp1rzQ77MWxo4EiGtdx8NYVUgrz7VLGi5driZXAGSCZ94ZEWRkfbeidt92dWRXGgxUEH1mgf65",
  "key17": "27a2U7LbhQnjoKDmdBm3V2RvaGCNErRoU1K6U54ofFbuC49bwaagBS7usKR5YcLiMW14bSCD9XfTs4dUY15MxGBJ",
  "key18": "4pmXFJaJ2ETUhpQu97bK69ij12CKxMr7tyZLv6wbbMJKCXQmB9pvKVdXqgD4FGQ4udP6Q5bPw5qsEUU1NV3Q4akM",
  "key19": "3UDqeBWYFfB9R5wVMKgg3UTWv3qUZgoacUVpnEs7FfJVXQVqHM94UGeG1zERoef6iaPkxJbEtnFUMyVHk8pPtuqd",
  "key20": "5LaZUfxwcMzfRGXTBtsovYKD2zWDJh8kzGQi7VYYiu968hngKsvMMTb9YmSxdTHjGpesqiETfHXzNFRYnvqBKwQH",
  "key21": "2J18ha3gda3okf267PBVBwjK2bn4jhVzUcPSrpcj2dqY6xnz5yFjxsXi1nvHzvdYW97k2ZXMMVftMTLrqHsAyRhd",
  "key22": "5AB8bVpthMk7Ed115vmALSK2qbfdcb1dFCgKkuFWksDGQBqnyDe2m8PL5eBypwiEj1U4ufkccwy97umBMAPpjvGD",
  "key23": "wEaqrHkam739bbFgmfiH8W4V2aKtbP2GKGm2MthChB9ffAzVGYBp3LsihM4hN9U3tDrBFhv5Nx7b6SjA7rPeYVX",
  "key24": "28psM1QwaQEGaaVnryvjqdrQ36ma4JveLo1VN1pb7mraXfXoWAB7HzaX3DjMqPVHPBHDuwgyPpHYr2pk2w1z79y8",
  "key25": "2ayZEfQmaivLXhBisYoLsZ9LsgzNEdz1jMKpyRSd9mu5aAcKSSM9FAgA28jDRChgwpMhiTwpANJxENodRdfUCmtw"
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
