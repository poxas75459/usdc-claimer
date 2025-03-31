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
    "2BVccF5XEpdxp3osq536gDJzyKjP2R6JFuWLzXxj7gKQJrJk1RbEQNkqeVabKVDtHzRiA9p2Y957gTAnExjMAgpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hb1f4khKFX4Wax3X9xTUWG1Pgdj1cJSgBJVXnnNyUDNHz8SsW9BERZoui5B1mRr71Yzbmj4w1Yjcs2wo8Gt3jZQ",
  "key1": "3rjw9AsRvNTz4iFmBVDgkkuJyUNE27AEbC82bjLFiSTYg8tigXuC6K5S5aWEdj5LUuPAmtXqdJUEfhUhLKXu6YsK",
  "key2": "3Kg1831YyxbK3VJ3ac7Tpzw4Szxyh4T8DkP4GUAiHyyCZ7WLRYwqTozcmGt2DaAFYsKZwcG4Yb8ftcqawcJJWhUF",
  "key3": "4GcXMYoZ5e6aysfsjdjAbkdmVgkSywJEwG6JE4xud56f5dVsyFLUs7KM9YDRJv89hQsrNkpeVC9PMWZTsQ2pcJyz",
  "key4": "2y59RaL6DbyU7jp2mnRexhuAPBMdH5GopLZSeBWAdotci24LH7RQyMeumMyLgi1Z5tKt1Jv9QSEu8vrf1Ucj9zVG",
  "key5": "5BEBbhS7mxSPuiMZQgaD8AdrLRxmdVBsJmWGmHkwa2JGnu2veDBsRJ5HZrbx2mzz2C9LBSUirgkWr7eP6cwq8qQU",
  "key6": "Q3q43rTVJqQShuSNoL7EwEdzGxkZYAPZdwfzTw2zDdngKE6VQ6SGFLZ27dWdmdyCqycxv8H2bDj6KwsH9xi2Jjx",
  "key7": "5NBZxYcRw5yYp1aRLerK95Qqw4aZVkKN9Jbfrqc6Ct7xXDNLetVpfvrCVwwnkCgDG5M8eKowxAfgdAjRk9Zfqjo1",
  "key8": "2MsXzBK9vbaBy6AUqrPD6qB1ev34joXdZpKV5BUzD639KzeVYbEuSfH4FyVnnQv8NxakNpHw6PLyquTxGW9eU79W",
  "key9": "2wUMM8rXjXiVhEmBT5vRNNcJEAuVEZVQYEeKGNoD98pPZLAWnuvxStfY44uMyXFjmacaGhJh2DCtWnpRQzTMq6zT",
  "key10": "2diSoFmKTTXJAB3fWSPwYLjtTJZSfAEetgxNsDrkko6fEvFkzn2feqrjKEiBjmQYwtBuhkpAy1BNhLNf7Z54B5Hv",
  "key11": "4AmawpyvqWVhVyDuGKW71nrGdQZ6hNNhpnMuX6uQeiR4xmjy8b6rEsCnb73T1J2xkvhuQjYnQ7VU89L33f1ysUyN",
  "key12": "4cmYr7pvZXG1jLcMi7QY6fR2cdxEFSQ1pmpWvLNCUwVW3R9o6KZD4FTzcabizppp4CybQk4hoiuTF9RFE7ntTvXZ",
  "key13": "2Yo9ajenZqJUSmwo2dU6qczj594MckDQQScXiFETdU9iYTJRyMZudRFGftnottAwNzgo2kWCBniGiJixUwz4DWkN",
  "key14": "4Ukf18G3DF8k2o9NnCevXxkQR3QfJaBsRxkmH6vte5FaTh3TR4nMyaVLTtSb9Em6qWUMrBsScQfXRDocweRU9AUp",
  "key15": "4p7JRo4adhS5xHVuEcqbAuqTZMxmx2tPQ2wW9fCgtqSi7jqCwMzFPxEnzK3eqyMXC6kZUzE6AvzePr72vHN18YMJ",
  "key16": "38FqV5oKYfWkrngKC5KUyXGabzCpN6g93YwWiW4wKPTYEmzvV2wLwmLHzYkUShJBjs6LSbbt3hzeSP6EHQs6HgAo",
  "key17": "tVNJecfa9zaaoTa3NCasVy226PSY41j9qX4R2umApxK45JxYVRUzJkxUf8wL1mb8weUrXAocBqhQYwuwCyt4cCM",
  "key18": "3Ucj796YAGVveUaMTaWTZWueSY1F3ZuS38wCFw3vvuiw9q96YVyGoyp72jJ16omwxRMrs8BKWoAoesvPMKqZBUS2",
  "key19": "3Y2WUizRM12bZ1eW36nXE6istqMWzsz6vzdvbU72jVD4bF9Wga5WvZiAiT4oLYXMArzUpKH14CwMXPUnkpue2Pkt",
  "key20": "ZjjmpU4YxpgVwPMmHjhrrUx5He75zqj54wtxF9Rhf6Kkw5QRC5NJbL7BCwwyCYMVVjSUxSEWqEbraFsbA5vmu1u",
  "key21": "tYG4ZTotGHTxBc8xHaXvd3hmh3eEsmYnJp9zBW11su2aSQpZZjUMjqL5U1FiVuq537b2jZC8eR7a2qoZSwZxd8n",
  "key22": "2joqtnbq1KotRWmD6VCZ2D1jZJowTKtp3suFDd5f15cRrbW6NDnjMQuEbqvkGeeNqCf1ebXxAQufGXUyn8yycf1p",
  "key23": "4Vh5r3qfSwjLykm2gncwUGLCe7dF4JTLfekjagtX7hqjnv1qjCX1vXhaH7pmLoZkQQ8cZahXp5WJaqb6XsLkSFwQ",
  "key24": "cnR6AaNr4R9bvcnF5jQFHQCNjKX66DdXxpUHiq3486v4djpauTvxuyC35QG3PtEENVUazzxCquKkQaAnpVvPYTD",
  "key25": "39U8ZRqh452bVDgDyDDGpL48zpGC7HjYZyXWHHXjecNiQ9RvN2Rdapm1Q9qJ4d9s2uEdAfJGDWuhbTZs7tzDuj9t",
  "key26": "2jiGf1NQJdkwXQRvSNZqa1kbuVHDtYAL1tX2qU5BymSWzWhwioNtiZju6CyRiPaHHta6HxjVGnwpdUPyaKWmQW9Y",
  "key27": "64bHTSzr6uCDwkkRWyiaMKS2hwJtfdMqGYXTmLUPt2QBuSgekSh1g1zFJkHLMiLsW8EzAVfwcdHAe4VGwQKj5J71",
  "key28": "5YFf22AKJ2e5i4YW4qqe7PDf5WnhTQL234gztE1ELpB5qAAAKiGHL4XjBYhCBY8uwr6ZrBkFzTWnhMkXwoGCMfFz",
  "key29": "5SgiwMAJHtDpaCGjVTp5bzhD33e6F1wgoGtq7FxowcG3qvyzfpPwq8rrXwgsZTEqrfWKDW8vkW6Ste9jXjCPVFrS",
  "key30": "5kyELT84vkKrBrMD9aaRBH5snPwyPrrbLm26uSNMhZi4YF4HH1sze7QnipHv5j4T5PX6yCdUURKKE6BXRQJWSJNC",
  "key31": "ZzZ76xpBK9qMo4PUc6VGFmRHZJLLa75Z73BQsVNZFFDjQp1AfG9L98rKroZSiWgeDg1ZaSauk4D3NTYFMKygSHc",
  "key32": "yCPjStwYHyTDhq5qAgts8btMepmsMZJA7ZUhZeaJetzkJtWYZ26xJwtQ2eozdB4cT8ha8w9TJDvphbYaQLJ5Uur",
  "key33": "rP3q2bJDun22kXk3do9xMj4ktmDXSijVFUWDsztddnfuoi9BkY65df4FYUsVFWbePhK3VMFKNsoKgepgfrLijD8",
  "key34": "42Mwm5Db3JtGzjEKcdiDXBCSmpFPa6hprRap8KFESDVeuEzMaAfsjPt6Bmtm5YVRdkDp6ydt6SV3j3LSn8nAdnbr",
  "key35": "4rCV3Z7kDdpkAzLaDnDiCjFxzA8kLuK4ee988s48wAxo2AECr2fVKxdgPvir57rCzXJG5jdP3bAd7fJAMht9KWCP",
  "key36": "2EsjDzZt1ybe6T2aU9n8nrDCPH1trQNeSBiq9Sz5b42kYQATN2KkMPDKGdtatcsqs3ayyYFTsGvxbky9fuoov7p9",
  "key37": "3zQZTj2UpnUMd6kceDxEFrvPC2RuYXRPNV21dYD1CEbvbWs8HcSDdnL9nF7oDRBSoNiw2uryG2cwRsCbNuHbnpNR",
  "key38": "3qMNyyShLPNmiCddkittLQesmh78Jz6KA5wo9vroBZ2US65gEndxFgUqnwRb786mUf978eG3iaE3YBdUHkqSg9gf",
  "key39": "3q8eMi95CcBuoghQQeWzP827iVSQ4VyZ6sWrwD5sbE48YvkSKrWH4aoKfmo8XA2aUVHY7mJjrXz23N9u9zSFqFYc",
  "key40": "36gu6sHYejodEWUvCuULmcjpG8yUmHmounwCj1ztAqa5GAGnk8GE3jJVdKK97BThQTPZgvedgN3ZiJLgjHiNPyf",
  "key41": "2fvv3U5Yakb3srrLqzN146Wumx2ZddLX5N6239KLphWhu2Y84hjtTBnZVg2F3oMPM4srUn4ijC236rCmCAx1pyXT",
  "key42": "4adjMV8P3871eMRKiF83PcM1XZzJrWTwsoCVxAyKeDfMW7LCMVWfYcKsVzFzv5LKbri6SvfGe8XLMft9XpHfvq6E",
  "key43": "3ict3B5Jv8X8Pj1oYy8wBBYVPBVU2HwV1StnvkgD23hDK5R9jgnwnnrGA1kx6HkTeGF4QRoMKJk81vvWNjFmz5Pd",
  "key44": "65V2EkXosgK2FPXKjwSRbxUFuu9xT3HGdneVSgCcwMeQvuNYbped9YxjihoMMojkepGFAQKR7A4Y4JG5QGWRk838",
  "key45": "44ZwmUTse9DAsf5GGQWVfn9tDxLmTKBRVhridj3si5ofBuVVhPy9ecmgKWpAiQLkMNdHWwTY6hVhESu6LafCbKey",
  "key46": "5XvUJFKeZvxaEfvdcZeJVGFfeyVm9G2h7CLkrHMgk7zXhPdkS4a6emPCbDJ8u7vEfHEM4FnbNcuYov6DHGSnMzJM"
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
