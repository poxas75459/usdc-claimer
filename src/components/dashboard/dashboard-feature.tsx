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
    "5iTsNCzcg69ripG2YsSGoMQsMiEiPWQeUB44B8AxyzkJvsdMwFXPDA6ctkMMf3ZcDWye5w4qHxZrgGLbV1mDgBGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m6KnTVcqLxJjQqvGvpfv9skW8dsa5NMbZ8M6nHadbw2RDR6xoSjyyMZVc9wzVgoJBMumj4zBPEnaa3qvnF9Cc4Y",
  "key1": "38rHioRSeqFxtyooB7uBRrSEgrzfgzM2PBAPt9BniPnSNHxA6LosGsmhvATbqi5ZV9EwnnGU92dZo4Bvrm1LMiLu",
  "key2": "3zM538c9NrKMDKk87KbQHGASjbZuyntA5UKu56iSf8SvkV7pqkz8pAfU8qQBghELd7fHS9HAFV71MSVP14Lvpe5H",
  "key3": "3QXJPcocUyxLDLaE5ophEQp5gZbswuq8rutiNDUj35C7XL7DJPMkiP6N9j8gX77MdWXgBBwndFdcuyvBkpmG2jAY",
  "key4": "3HpK6UuDFvJcBvPHC5vRmKox2sAZMzqzd88zJsagihiSXbGiYgfyafXjsdfb9GLx8vBYU6fRm41j8YfGyoSiv8wT",
  "key5": "2g1mBvGfVAscYzJwsgxJwi1SMdoprgqtk9fyNtoqRu5gXfkAbJqAARfPmZ7NTXkPf9g91hnyA3oENm5JDbpbqLte",
  "key6": "5px9Q84RmcNXuBEzebScDqhHYBzjAv2fckKYskEywpTgN53SLzzj1bv7sSESRXbGeu6JVGdwcWn5kr5nf2227bP4",
  "key7": "31eD8EYbAHCC8GRVXDCFZR1kFCFXrso33dbFzbnioyCVgdjKB7YxJByyGV12bxkU1yr2U96LvoHQFX77sgUaVmgA",
  "key8": "4rVq7W9vo462sDouKuxhmx8PzH5GbMoWoAfYkkpXmdC3cobBsMYug1FNwj7uYvhgSJmL9RHiDKyZd7Cu7FTBosTh",
  "key9": "4sbHr1ZgbPoFbkc1P354qVXS1BazMMUrTLn9WGM76o4ZZqipohTfRDTq3Qo2xGbtXzuu3fdXe9Qd58n2LRGsJKTP",
  "key10": "gBwnfVt41UCibPgp1r35LpgKYcaSecZsDZ7eBhjnjrwzYjmnvRYMgXDoJNwptdtzZwNBiC2m6jqLuVNjh7i6EmP",
  "key11": "5dBWPvxwKCRpMfUsNVmh8zHAMWRcyppvJoUU2DvcV4PaPAN3DoSTAt2JPZR1QJcE7J854Gfuio3MehuTJ281LBV7",
  "key12": "22bQoyNQTQVdCQLHDYh4yyR81nKDwd3Wf4BaLGWZnUS9NqZkF45FDzrru1pppZF7s3xL9rmATT2aiwSRJbBA39KQ",
  "key13": "3uKQxQYKVNsuMXvWHTLNm9seLBqXqvZ86vF685ZzXEMgWLywCEXF9SH6GP97s3QMQMozvGqrtj9ajXcbCiDaZqZz",
  "key14": "5MrQ1A7jDaNtEyCiAz9r9wgxCiSvAVzQJphxJU9tVRzKk8S2SEP7GwfjszCG7AET13eWZR36tofGMyLRv56nv9Wh",
  "key15": "4z8PVYSJNpeKoNWQs9KKwHrF6yyCeiQ5P93DiQk415b3YGFnzSQo4KoGHCGzcu1WZKGXdC14WdHXi6opegGEMcSV",
  "key16": "3pJfa23XJiaPsznd6rJpHy2BVXZAYwX5YbkbdD2JH643KMyqNVBRtJHeLHjPgWaFQF15uE5FHPuXhdrM4YxygVpb",
  "key17": "4XPoNb6V8cqNqXxso2UpEabDN2mbB884dq1M89ED5ZJHATNuWs6W7amoSyDYppFKW1kKzb7UeiEaVKfUvo284tud",
  "key18": "2hW56tkaZaNvKXTyVagP1zP8n44FBEwt8hia7K8cV99kQzc1RNUspSqpQQ8kLe5xYCCeFveeKLNkNzHiDuoYeBF3",
  "key19": "5y2YHr5SJkETRqbqC2kLby6m25SVKBkFp9hgLSumDJNzD1QsYwRgky3KdZdrvFBao5S7rHWwERqNYq1fGuCNzzr9",
  "key20": "5RZKxUo15LmXyVsQfD9N36RQci1anhNaBEJtSaS5TAJwJoh93KFoyrNr5gT35qg4ZicPJAPLJvoCWpvCyYEjtDdd",
  "key21": "3FpDZzitdxEaraBTiV7BErWLsP1vzB8sZj9cWVo2o9QaLBmes9YxqSjKfWZSQmmKFviHyw7s99W8tW7EXoXCbChm",
  "key22": "25R96dS3iKtTXhKkojYYBFPnLUmTkkqpvdjFQfEkfwRWTMR7zRJ1RZq6onxjEj8otD6wgj3zj3aWjcERz21RR92F",
  "key23": "539PX18ArFBk3qTqFeaPzQ9XwQbvhcdG9Ab2qP7FeX5YoPan3tvBchNJRnVNZrcZQR2i3GsWmxfuszMVkxqF2Tpq",
  "key24": "4rBrxDuumHxsHADJMJTZk2eHikDKe7mJ1RkbnMnfAn39GqfbDoYfxmeSd839TGhe7o57GGhxSiquxwSSNAkzScYp",
  "key25": "SHNy12XmdKhWsH5i8FL4CMwVY3TzfxdhtmfrcBnaorJuhfgY7ScbXdZqoid2w5VXUq8GLFcUysfRq9pDuQnpEQN",
  "key26": "2DiQNh3bjEcTKH4bmy3JTbnWcC2AXpsq4t4jN8wzEAe6uZCp3shjhJJwi7yLwEogM7MzYGDDfiGaR1F3293SeMqU",
  "key27": "4ky1UMaL81EJpGhcjrUrLyMYAks7WPMVbcqoX5rX66DmD21vmzYs2eHuj6g5zqnZR7SvjwW7g2D2LM57gmno5eNG",
  "key28": "3gShv43tAEMP2wTw5HDa8H3sxkJiwRs7iLu3J2DKFAUFeoHrJBucjLELEQDPVYiT6jvEfWrmyjt5Md9JhvFoD1WL",
  "key29": "4kaLjNR2efyAw4aybbtdoTyraLokFY69PKMv9howJSiT7dFAUEoym8RrpmXV7PNDuKDkt9RKYN78QzAu4hvPAd8K",
  "key30": "3rjwx3FC7fKpGirVHscXBFdrYpdnYkUUawMMB2dMYeLJEfRxg9cw9QU2UoZixqRU7TsPXPatBZSoB1KifJqKEPWZ",
  "key31": "3kUrvWg3u9QPNP5J7MuVN1SPHSQ7Zy4BJuPrTe3nZBc16J4L2hZgf8Lg9PzHrMxEntL2xKjUXx9GM3m7WMQ8wZFB",
  "key32": "2uPajdj8irp2v47xCVHLxaZzYDs8k6wW8591C69PPPfR7LqXe4FeHJAUXmaY7VCbUmjDAgARD2ouBkCQz6cQp8NV",
  "key33": "5Sk9b4YbZdT5tscFPU85joogvRRYQmMWWadqjRVZjTneodCmFzgmqM3wSGAUQk8A2h8jUmyeRZBTbAVfAfdkkhK4"
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
