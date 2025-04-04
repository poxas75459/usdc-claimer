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
    "3vX4J8BtzVRcGV9NDqET446sgZJRaWeY42BAQn4LoaH1F3mB5VjkHvN9Eo6tGXJHjvZLJsWMJpeeKcD3buTDGiuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41JCqBH1XMtKEgpmgmSzFL17BJmR8iBTxVR1zDBhTnipyN8zyB4e9AcwX8B6ukvHM2mtGrFG2ZkkSzLyj86dAZ3M",
  "key1": "EYGq7xkLBrueYgvfqoLnHKJ6b7a5WtM4RYtobdVhv3YrPnDiBwXrc1weSN3Q8YVJ3XMRqSjgWiAPTHgha7fmvcW",
  "key2": "3wjaQjNFi6NyLhUyCpTFDujaEWYw7NDjJxPEFy5MAaUVfYoE4tBkucCk4B3C7w437vzoVmNygGugdmkZQg53RUTS",
  "key3": "2sYj27cFgpFUyD7NGX7mELrRKN7f1e5CRXZwLGbhFRczJS5xWc4fzhUVbFWuffqQbydijf3yB1o9mYkaPrrpPxLp",
  "key4": "43rAegVVxXa4Qa3yy7ViopWzUjnoE9D3MWMPBA7yR2eiPxRn9fibafnbFhiEU83eooxFcQMsD7iiMbjbF5FVkCLM",
  "key5": "5PVtfiog7zciwn3FXycAcLFJHQxKE1FAWjitctuAFn8EmCGxjsckN9Kvey41fQMDEbtXyAor27T8J66jGNY9RgcC",
  "key6": "3vEDdThgBB68iPftEkN8wKhP1RFz4MTRkzgEsvfeyyfWVhdcA2zbXrcbMgnB89gnMjQc8dCuNmG6avm2wGqJoGmv",
  "key7": "5XgY9gbvT3ZwH9PrYS2Y9JBWM4Nx13u6iAvShYrUczb4EY9CaqXtuDvYWph2NqujXtaaLvmz797ENFc55GWTseWW",
  "key8": "2AMuDA2aBJaEEq82S3KZnT8K1ZGdRitCbgQC9e6sCQnJM7PJjXVm5Sn3odJxeAhUf5zFToEz4gkNqzbim4xR2A3w",
  "key9": "4yNrsACRLJ3VJxYfXm56X3tSZ6kDCStoUSvGWHGai5nGrtRmks31BPjUKm5jta2uwa1jxaaLETxe2ShC4ub6CXNG",
  "key10": "3ksRqYsiwDCQcA99F1VwqFGwiKezLXvCGgNH5GuWSGEbea8XDgud63DXUxAciDxg5Q3agwM7m7fBMwdbGUaWkT54",
  "key11": "3gkNggEtsKBbmoQcCd2KrJ4Kyy27wMStWY4yJLW7wAdSEaNSzzf62UsJJan9ANhrP6YY5L8nzAb8C6eTUtAmniVQ",
  "key12": "mmYwQTYYfVbeRNwyQYa2ZBsSQV8dbseazpvTwPTD6bpptjE8f8eiwHpvMeNFw2vEZGituDK6VZpcdCLrVQiX2Wb",
  "key13": "5AcG7NngiTQqyMEQgP9jXPa7sTGn6EV8wkUrUESfm37yAtc7StPkwGr1xpFpHLwhH37uBFd1y9rpxpcYDzcuMpzG",
  "key14": "2QhMTPxZAE5DTgiXzkdskHbkc4DqSYxFBrAcmfftCckgvWM8QnQEhZjkTi93YSqQzc4Fu3BCzZ8SSU29zFcWHaw7",
  "key15": "4cjxE5qzGfqsii3RRQTpnSxxgQoJhEW9raQa7NGWBaAA9sc4PKLsR6BdRFrCmXeYM9mQvTnHz6tsuycZS9ymsdU5",
  "key16": "3atgYTNunquEBf9p913T6k7dnX2g3A1aKdN6tmjS9DFbBDdu2QETvQ36Aq141cLwmqveuMDbrcnU3GGtqBomswwa",
  "key17": "sZjZ6LDzKjZ6djSND3NP8b9kNogrAoes1kbfvxNQtk6oDbEMcL6pyz32stozBWWyvFrj8iztnZEcEpcaADpiCTz",
  "key18": "4uDbq5MXHsLMcvxfzbB7q3YgpkQi3pvDevcDGSjZMnEemf91ekavAxPyytjyCfquDfEVULFPFhDzNHS7ZAbn7k6Z",
  "key19": "Y6gaHdXTPawuwYGWHnPGxeaYEeV2DS7CCYxEsA4VTueyxiMexEjWNN4xbwuEKebnAK7MqC3TsYyjHzwjYDUn28E",
  "key20": "3NbDBznqo9USJuN35u7axGnY2uk4EjtfwyUmYZJxYJEoL4Yo1oKfLoc8ZA6TPqXfA5Msh1MUxvjGYVS8JWYmwhUn",
  "key21": "5Wtxeymz4uHuzHP1Xtkf2Tw5oDmvt3gPk8bYMpeza6dyTqdFPYYKfQjZ3nAbcDvC1pNYCYkM6hoqAusRiHgVGTiL",
  "key22": "4KnezvJ7oof8mtGgzo6Hf7NvESWBhpPtW8dTyz1BmQHjcYvqcX2xAdx2aH2fKQM3yk84tepoeccCkCjDFck5kMX",
  "key23": "4U8PcikKEXGLYj3yYDGauCeiWsBoY7KzsG3hbmVFvD96rfofkDmExKARQTuhYWrXvJzLWjp2V8NSsJX9peQCXhee",
  "key24": "2pvoDxYkEjZVi7ZrAJXZ6JiEm6apeHbjLDRMLhb2F3NtutSWeNFwFtzhNAH2PGdKhwz5CB6hCguuRv96ZcCE5D7x",
  "key25": "4Shtxk1w8SVNY5mPGWWfMcJotRtuHeGLryNWCjHztLFAeTffwp816NpuNPSPLRjHBgB7dxVuFtmgHSTks8zdaVRo",
  "key26": "45U1487R1ygiifgJ9ggQ3D1KRzJufohmU377W6Hcr1sHKgBheYhpaczcND7siGsd6GrB1TvWJigpC7EGRr7ANMpV",
  "key27": "32kjkaYhfss7qR8Hn8rLirHzXiGi4iYDC2KLSqd4pBpRvbEx4hyYKiL9XBjtnWxpnicgUYZnFbSENECh7KmXCwQS",
  "key28": "cX9YWBTJwuXLGanubpWrKbNFcZHrUZrowQZNX1cjEPLJirDLHdSSGdXhi8dB3KMfqM2F3JCQK2BB7Sm59VA7rGW",
  "key29": "4THLDJbkwTSfNU27FzsCHnQ4byevjepVgWTwSL1F3RhyFAHjKKgrJ1o14Ce8j5TaZdBZ5WyGQJ2nqh3rwYEnxY75",
  "key30": "5FaDeFRfPJh3EZixvPNc8nV8Xz2YRqmsVxm46ijMzHiNptrxFhw8nZNjsAp8aJQjF8hPGGMyUstQXM6h3P7Scati",
  "key31": "3XPqRRcUVpgiyJf4KkhGLpTwz2GUTtkb1Q6nBFQihanWityonBqMHgvZooty5YiDZbCmwAaCgL5Exjuzod331ud8",
  "key32": "52yNfwbw4vaXu5GDVvTPqg46Ar5QSdsDeA93wh3ELSrod4rU4EFqahQpH8AvXdjBWMx9GFhrvuNRu87h41AXerdq",
  "key33": "4wB7gS8gYH3pNZHsiu9gN7XVwLGuBwG7BNQWyRKD8ym9KiFDF9dKaqpUSicjsRVisQsQWYJ9cL8aKb2ZHA4uStnV",
  "key34": "3CMtMTYZ6phiCvp8Sw7fNjex5qUNX87QM7Pzo6kDP3N8zoWZ9EKGqRza6hQyPYtiCnARs8V6a3jF5tsZ7g2a6RMv",
  "key35": "7t3CY25JU2Acb3XMzbpybc2N15wpAkVPuZUfsP76LUcJVMkTDKgc6KwA7x4wy2tDzosXRKmj6rLUcw7YpsoPGi5",
  "key36": "63xrHUqFPkhD5ZUWB7J2JhbHqXUkhcxRiJ67GBDS1j1hVwZqMgFS7WJLd1iTqzgeJRHECRfBGJncNiix847z3DEL",
  "key37": "3aNxrtK5uyWqGhaMXtagkJFpT3bGE9eJqbkwEoPBUGU1MebZKZsjCsTfjapZpu6YyAFdkm4hBbncos62D7g7JrxL",
  "key38": "FhnBUZBQVeTBtsAQeugvn1DSQf6PtpYycYTsJcvYHRHcor49bN8MSzhmNKM8GHLc2AqZsdNhj68TTiQviGiqRbp",
  "key39": "3j4WHzRh7aMS8bTQLCU9ZbgmkcRN27R85zAYvCEi5zV88Z5JhzdZNaibL7zmQKeN9DY1sjJ1umgRo6Gr6b3XAHHo",
  "key40": "6P5oQepCJRGAmn3MGRW6i4KazgrSrPg8Ygiqapgd5U6FNM3XzNkVfuHiHYZikgWS7Xdg7grMBWj9p9bJC7dnGJx",
  "key41": "3D9dsh2yvZx1Z3bKvKLgvwCqmCrje7YPJqZpNJ9AnmDskHiqH43Gnz9NE3pJtnKobhKqgwPzGSe7WovJMF17gDja",
  "key42": "28zkESrDnpyYy1vSqEwrEDVDzcezYw4kKm6DUydEYDLExDbgoacRBaBMZgr6Btmj166912g8fLzWaz1iBW2tCrKk",
  "key43": "1WG5zonWtDYyM3ERdVYBRHpp9zZ2At8Wcm2RrQ2esRrs8B6K3j4nSXPCuBM7JYYWdfAZx4LrhoVWgFnUnoky3Kh",
  "key44": "65ae4ZHA65kyZPHBWGDRGqPsTGv54p2g1aXw99qbzirphsyj11eNfoUwzbFfPXc9BtLHQra9XQuWWSRFEMQNBSni"
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
