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
    "3nQVZY5sd9aCyFrYTPxrGsEsmoiZMGCZayHos2wEKzZusRj8BXHT9nwoJCJHMqF6vEHzoNf4em9ycDDouJj7JwgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KWPP66JLMfEJXnGXUdiH8GPCAa5UTt2J8fe8VATx241haKifGqnA9gwi5tdaX4FaZ8w3KUJbD79Fb1VKe3SzFtV",
  "key1": "2jynxa9VmSvgpJUPn7ci88QpmrfczvtaZaeu5yjt3ki81P5mkccwVxBZXegc7LcdJaPYuzyAFjquWvaPrufGuxeW",
  "key2": "3WRyuqijkcz3yqNCipDUr6Q88p1e7zMR489mWPpoVVeF5TBZuHord87Rrt9WyezcwnRuNwb5ww4mggrgZmLUP1MT",
  "key3": "4qQFLfGRWEJvNVkJST6n8mnHRFPAikyjgukzBP1H4tsLrrNr4gbkUqj8GcsZyGnTvReGfoPA3xQrFy1nQLdyf4cZ",
  "key4": "Mcy35ponWpsaNLBMyK8GHngw5ijWihfUNgxZ6Ti1AWxL1kKT7uStXED7XnRMfVroiXMyiXEo9CRY3HrraiaBJ13",
  "key5": "3mgDL7Hs4VCiHwhpjRs849teitdV8SpczU35ne5mfVd3XLy8VPy2nNmUpZYk9TGXsfMwwo8K8hKNjh2vGk7SaUsP",
  "key6": "5uygUhau9AbTXSDarsFeG5KvdbmRC6CtHQm7JrPDzrarcNLUjyAAV29cK58dKWX1BJZ3Ei4ZnAynzRXYpUSxWiT3",
  "key7": "3V6YotrqY6iTDhqxaoSzExQYqXCpXGpcPEbGJgwdcGyuLZMHBnibZE9nfv2wi3SDcUPR7bW1uwmhPRBuZScxVh1",
  "key8": "2ps9FtnH2NVjPLRRnrMgGXQhThnB1vx5Cwp1fa3mPJ382hTdwt4s94vXvy7fjTLuR8pzDUhKzUQw56kYbBcbLh9c",
  "key9": "4ggznrPXQqysqUk5GZfQvMRqUNWEjPgXGKPh7LkyfC9kYdJrP2ayFwSm7ayV6AB79iSkGacjstwHCBXvjqGAhzhc",
  "key10": "4e1RxgRNkET7a2CjwkX1Bt3h3xTy71bDsp2unb3Zr2XvVcqJHs5Twnt8teUeS2jzu68Vv3QDWW7Gnmn24gDh5Xoh",
  "key11": "xnPK8z9vHSirMoighMmYWCjwJYJ5GMnzxHX46hKE7Wvoj8i5s5YtdxQjtk3eR1qTtZi6ju6YNKzkqYjUwqFrTby",
  "key12": "4h2ZF6qekVt6w9GfeUqY9oE8KtA1syHPcP9AyuwzEEDEizuYUjH1xet43zShn6QmpLAbg4sBj3p1yNtJAwkgCvQ",
  "key13": "5g5iTipAoWCX9AJqvUkvF65iptdv4v6RPSayWSaA2RmTpxz1AzhoAGgM6qxRHqGPR9DUvhLKEaPAJYRfDo2JYtvK",
  "key14": "5BM55gPLQmfvzh8eVH5LcF44AkAGXr95XiTQdsCfgjvbb1iGNJAKoRws83Qa2rrH59YQjT7Ach7ke2138AnK9Qgq",
  "key15": "5AHGAyw6F4tteaMNc79H165PyJWcUMqo42awc18RoFowb5R8JhNVATScHKA6z35aAyKq3mR5gfm82R3V7DJpddMn",
  "key16": "4Kp1ohmANFQUExXttQzfCBQUYgy3whXKB5ukY7Acot8i4JsFijM3tZwjYny2tZSNQu7We8WTjGSwFgvTdvaeMeei",
  "key17": "5Vh67ewCZCRf2djMbcMNW5LbUGPxje6sixkh16c6LNryhgnBUmVtCVpas2e8kYrZn4uUYWfXwzC8ufNiuUX7EJ5m",
  "key18": "GZMkV3FjdAe8sZ5xYhromfTsjxvdSKUPoJL8cqMQ4ftmu34EvfxCC1E9axgmbr9oA8uafmR33ZAimKxhk4NRYn4",
  "key19": "ZxwKqZMCYAtasxs6Xj11X82HEyfE11kQcA1RZbriiQGgfabMTNZ92MJVt49uex1w51GTsaCq1PCWRZZoQkbHtoV",
  "key20": "2PdT3T85ZFNE6T6ZsEmNYKphMVpTkeh9EcPnzrgbaixtKbZfrEnj3KwkKbS6SxKkQHkZXSYdiG1BLuLUy2ZVJafR",
  "key21": "4kDkWmit1tsMCTx7M2jLrfVZJVBSnURiFPAeV2d1sB8s6kZ77hCTHxH987WSjP9ykzTLEF4KLxtJ253pydDA5Tnw",
  "key22": "2aXPkGeSDGUfaXMkpg4SR6T33bkEKuL2DP1A3VsNhUj7nfEYWwgSwjYBTZbMMgnbPQQgSkaWUGyHDL3pPRzFWWCZ",
  "key23": "5gcxVwv5Jx7YcHqLC1fZyqfDQmFdQe4xTPP7e2oZQm7w7bwWc1KnngfWMqdeK5G97Em9QK6yenQBqvw8wqpWK2A9",
  "key24": "4xbLHxYY3bcXvJMPfA3nAxYczwkkVqDNenuVMeNyFyAMLR25ecT97ajjzvDd3zrjV7buLMc9tx8NY3JZzsmdHjSn",
  "key25": "63J8mDXPNBNqHzcdfsyimcQTxhJxcQbh4zosiZJL88ifREgDgpkFVTfDD4Ek4vjTG2u5fkoQrCQkgVELwqbTCK3D",
  "key26": "bUzoCnD3AmvPAmoj6o92orgzxgE1n1QZMxBs7M6UhgeEiC9kG1Wbe1uJ1Kx5CKqoCY1Z7pRmaVvz81gmtzFdech",
  "key27": "2DkjKz7FgwtB9khNrXcvVtCtazUL9uB5HBcxomHGX4NDwDPLwCdN6sbPWVL1gGgurzwv41kbNSvqa9z6gKjW48d6",
  "key28": "2DDMiHjxHgNtvFPdFY6gV2yn5ahGhkVKDVeEtZap5bPm8hDwrdMHA2JRujjGupUexJ21wGic4Q3rKe3YNidfZMtR",
  "key29": "5txdTDx8iwUHY5wqkx6ia1eBbek8j4kpnwFAzKDoVEkgsttFrV61U7Y2E5TVm6sXibH1ovXy9MoiApXAd1JjvaKt",
  "key30": "D9TitYiMGtDLzjCpJdBvViPq6eyvzmykdX5QR8pZmUT2J31d3WVAeQuq8dSi8qY1ZxWyDnJBPYsB3eDT8NJLyB3",
  "key31": "3u4ZWhNNutbJP8iu1jhMwE6RyNuURnbizLHWCpESUyd11SVngunsSx3aikWvJnshaCfGSNwDZuBLzJjtA1qRH2uP",
  "key32": "63pGXCEySxbnBLBoirJDuADweH5KWxjQJ4Qdq99RuEaMiYGNuUBr85JX755wx67c7WaCEQfKZgarkkERyn6GmVHN",
  "key33": "5AmTHSapdUTU25RNUv7bLK5Y2ww2sfY5MtqiNup4M4Ljn31rsS5mbiituY1onzYgvcEwLfRkmbeVjxi5EDqfjaZH"
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
