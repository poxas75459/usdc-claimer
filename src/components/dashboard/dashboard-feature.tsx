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
    "3SiibQ1beCr3ojmvGpC3QWw7z1CfunsMvi46p4q6884Af5fiukZ9Kds1hBNzuEBTssGDQUiPGekzDVLWNAUn23vD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uvs9efBAQwrvpLpzvDvDN9pfpXWqME3ebstkkz7gEzDCCFzjFtrRKCH7FiHG21ArQ7JGW4ZZyYq7XRqr2BKRd1m",
  "key1": "pZt6DhvrTotNkeP5Qn1Fw12i1uJhpfK2s7AVx41sEeMY97HZAJ5QX8Fs5ZKgodjhAdWFAu28x2G13txZdbfyd61",
  "key2": "3z5v1ncT7moE7nuB9xdBYfqWUtn6eWEutBHE9mc1WdeV4p262ScqCrZ1YLneaLactsQnBDFuaZnhNpFZqwW3mJxr",
  "key3": "rhm9AgX13vUamYzNt78JgnG3AKtoA2C9RroBXTv6pk3QLP7nxfKBgquP7NW44wdxzUwiy9mMd1kfe3HJ8TxxVQY",
  "key4": "2zWA5A9GVdZvhrThZrm1Qc11EEy9D2ehaBKnQ4HCyqgfrJAnPc7nTfTMrCMwBcTVL5rSwNgMh9u2xm8YZCboYUrP",
  "key5": "vtNiFrv1v7TaE2A7rQm98uXJZAB4K4tNUq7L2muz47GfHAxWzjfZxaphBQ1DGqLAdyAXYogC9TfT89YnfF9AFSn",
  "key6": "2ftg8Uf8fByWoNQxDaXpN5M3ea94ANZg3UQWCXJVpbe251NSBQH9aVP4g3K12jGeFXLsRB58QqGmycjbmd6SGz8o",
  "key7": "3RWfcsTnVjxurrcA6EQeFTQzRQZnUxpUheBeonncMVieAZLuShwBPxP9YGhPrhUA2Hv3prSU9sPK7v4F8gNQsiPG",
  "key8": "KsAheUsuWhjQhdyeqrTpNhDh3KoNSNi93FEmWQy4EBuurLoxAjQUSvkPBipf6DQqhYB17MsKywGVkHsEdMyXPxk",
  "key9": "2QvtDEjiMPPSC1xXiFKJLoCC4LDmn9qBkDUwQNFWavAZK21UNJtJDARp6nxznsRDZPALHADwy7aPrUALKCjeDzVR",
  "key10": "2JaX5tyZrFVz2UUzmCNSDv7DDaCcgrpj31foyVMwR56zrd9MhkkhzQon5rDdZf2rnsgagPi72Sp18G6NFjUpHaXA",
  "key11": "4Msx6X4eQwU9eiyKbk2nLi1ju8vcCVDhDNquzxuuShYMUR7MUJrPqaot34JxMoHNYEYqAadFJmh75vKN8iJETiY4",
  "key12": "2KiRVENfvb4cK6WtdhWD4v7KcXbMt5hgbbPCKRGgXuN2UrEGWJTEQMP1LCZsZBqmVm6Wmrcd3GQ8AvYuLEa1MPNa",
  "key13": "HgTy5MMJ11noWN3buRZWGPhWYkp6yo5J9211rC5vk296s1wkFjhe6J63D9rBNf34dscX4koG4fm7799ymNWi7p6",
  "key14": "r9ZcTkAkbzWFWdX1HFipHA2Y5mMbvRQDVTuHD9TTAVD2N9qgsr6dsg5YKcPjYEMs5YFT6KdpcmXVbCKf5CV1Khv",
  "key15": "5z88NrcGyRst3DXgZzpLMFdR59wqZRhG5ViqCYLBUTTASmmqHKYy6pEpRvPTMh74hNePrhLuK3NjZPYgi3xaH2A",
  "key16": "4efs6Cx1SQdGcGoH1dLP9ZuotVhyX5Luy6dP2KowTWsUQh3isHZapWdFk5vdar5GZHoApVsjdReS8CWVLaeg1YDv",
  "key17": "5FiahNbT3859SyU1r2tyhwaPtnAJCikbF4J7x2nuv1g3t8AuQXp9vCthTbGM8hyxaE5q6vsMHEfUnvB5WYEU9FYX",
  "key18": "45ZtSJtU5XzziHtXs8M8gBafiBATSzP9ioztvivusJuJ4YT672T6ihEgKC8LsLyLjeckEmSVeysmKoTEohDhrAMb",
  "key19": "3mnMu9WWCoUq2rb37kHY36vXNKDionCduybcgoTaMqkXJkghb7pVR9wZt44384wNVfprYZWgE8mFYxaG4unDT5qh",
  "key20": "45uqZZ3EfgqsNcQqUAHeh1aynEBPPSnsek5U7LSeGwDzKhzXxiC9XaeX3f5sbFNX7HonopBBJs1PuGvqrTQwgdXd",
  "key21": "eySsaG3B3X4NFLmrbfyFAfeDm5Npqkc6J8czPZeSpjE53H1BakezeyiWVu7H5CDF4FvWYY1beRKxqxDtvsRi7Gg",
  "key22": "2rts7gi98d3WiiR9RvTbngHCmHLRqBHpJNtnKpUFHhiANe2oV95jaYRybENxuDSG2ALuX4VkCo3W2V3kAsioTagC",
  "key23": "3A65ErciWPde7oDsbhS62iy9HqspPzzo89MvGGKdpziV5HYghp28ZFvyZ74PnftjphEALD2NU1mTotkmigs3zQoj",
  "key24": "5bgySvukZHJwCwEMUt51LFmtvynCmHgy9hRnTfb1G5DGDkUCmGFgxQvbukJFxUirUU9uLAhaYEThhd6g5fB3pkHZ",
  "key25": "wrJaue2qWRTw7Tw2XxKjmjkeo8o3Yow7UHFN5FW4qygzuhJ4W9iN5x1RARCVHFKm4ztoZypk1iSsRbYdH8qhdUw",
  "key26": "5C7nkVyaTieMwwhNEJNZM6LJ9AskWcJSnfHfAbYSmsiLd51xrpqiR7XrbbXc3TKFQ98hUyqJJLHegddJJvp7PQ7W",
  "key27": "3w5e6EVscoHX3nxPvgUifcGmieTN1YGNCgZV1tUpFqPgN6yDPpsUZeqojhXM9qstUhVXCv3Be4VcS1uctUncUhLX",
  "key28": "2qXUBY6X2eTzRWrtTp3L5KSLB4gQK1AV4nuQhWTCdsy7zogoQ4ppaQNQ5zwQzTAqWMUBVijZhCungHY1FW8ZjyBx",
  "key29": "KoQmVz418RYBFGMfX1DekK4137fVszxxTBQqVgzHC6Q8szuRi3pvr75FAeg9ZK88yegPC3DueY593kwTK74528A",
  "key30": "RxSUeZ5eAiBBcEtGjeH4erXy6ab3xNLT9TJtdYS9K9VDZqsEbt6xxBAGdYXBcFEsVmYRiCsoL6nzuhXbzpMcLfd",
  "key31": "vmVd1ZCHZzZYucMoJXw66P9AHoQdTMTif56YM2p7RNTbkeD2WjineYcSJk9iTxWpr6VxCsuKVFWt6vK8nzeoiRf",
  "key32": "2QV2HesmD4NBQ3tnE2yLtuzLZpqPTsPiXX1x9fVyYTdZYri9D8Xgd3SqSkna9zbqp1V32XqrKEUoBpixH6BHPRi8",
  "key33": "5XFZ3rTcyVC1z3ZCnzW7w6b7drB6ZkUeRtg5tpRPugQuEfLWYK2J7sxopXYxApikrk1V2oRtaBQj7trem58R4KvR",
  "key34": "31276v3UfP6WfGxUd5vxfEgwSaRLu8s9C7KhyTj94FSuTXwkQ9hk98fvRNYk16j1zoMuGDZz1ocP7d1dWuRyoH4k",
  "key35": "5K9px36emGLxk6RKcAiEXDM7vCtHXVY96kNLYA1hPRLnXviyb3AW4CqucRPy9FsX3cL5fHLeu1DqXchtrJMaeeoy",
  "key36": "3qkfC5DTpiagatyZVLA14UAiid1576HybXifSvoGLvyMt66oDH3y8sPEkvGp5W4Bz24QdNRMupzCGPg7ynscjCFP"
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
