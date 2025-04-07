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
    "3596PFTAj1gABJ3sKPrhzoUvjMYfzWa1vWhVwK2aaC7CB9VzdFkqY5Ru3AR23gj3yPU1s4j2AZ55A4BgQpX66a6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4udAAMAa9fsyF1CgsZh5bucCqo1LsTPHJu7jKk26AYtYHzwB7ybbPomJHLNzTcwSeM3KEEQpVGiVX1hQTtKX28oZ",
  "key1": "2a1HhaduesDXGom21fqHufj7HnpMp5AvjcBC9hw6XbudjDUmQeDyaxNydJgdw2xsZMod4XpmxRzHvZmnYYzcvhyo",
  "key2": "3exFYJk6RPMSLysquL5YYRhmwkuFpWzzSTTHHvKMvutGQ6PLvzZMfsE43rwN66eMVoPCiL74a2iEd68pPn4W1TB5",
  "key3": "D5nciFVxE1EjZpvwGNHuWSSBqbWDDYTGj3zPvtTkDpJcWXfj1rU3tmzLztrfdDFZrVdQ4HApVSCF1MAXjwKrEnd",
  "key4": "2MYctaGsez9SSvjW5Lu4u2Gja1yf2KnCHGv3Lc3c4vNC6sX7M2Vf1dQKqgeAL4sYJaTpFCg6aXi1RvDzgQk4hzV6",
  "key5": "4oU22aoaumsgvHDvezNs7a6fh78WPHhE2pMoww9gUdjfKBAoUFSJ44NQX4mMG5Lmvg9nB2kcgrHxqQu3LWJja25H",
  "key6": "3uuHSp3uPyMP9RTGRhD7dtUJiuEEs9Kqibi8NdYfX2FUpzmDsk8j8T1p2FR8r6m5MaefVF9smYeA6NCXPryKNMH4",
  "key7": "4MhwMjaHNbdoGbQfeHZL4GTXqjd4aAyQkYfeHBo2sK3NMk2zfXKzSPupJKm7NYBEWRcaYeFyUdBc63MVNWEA4Vq1",
  "key8": "2AU2kNkBGPyFq7dnWVkstFSqGsns2h9piUAxr74LTE5Uwt5ZWomqUXkhSpiejroGEJ6HKp34DetJHGphUPHg6UgH",
  "key9": "4mGMcLBFq3FkrThyJv9wY6ccit97yH95tzmTcf7jvx16RaRw1qQ2VHSTe86poM4kFkmNuWMjpPgGyx7wsJ6RYugX",
  "key10": "41q7NMPanDJ8VJQpZBcv15KS2vzSbXopj7Cyp6DVX7DneVqgN9MJY7DqgLw1EeEKxCafMCNQCGCHsarvgRPazDcj",
  "key11": "5VmszxrSv5yHkNF96fz4eo1kNadmCWyS6aQqVxu9X2PpH8yR7DYDeAMANSxPctaN5fi8mKiuthhsG4JWpPRsNoSb",
  "key12": "2UDN7WFeTpgbwQ45xSndL1DGrJSKCbiQfwv4Nw1fWUJ7U5SiHgXrqvFPecQXDma7emVaEw1NxJws4sYTZgS6SztJ",
  "key13": "7mXxbBxY49kmvD8KMSRHdXPKtgoQUhwJoGPM9JSQD8w56csYDfT4Ryx61Tf3Vx5na9VLm6mdpBKiWTDqGzuaa58",
  "key14": "2Y7k4AqeoxGQXgw9WqbjVE27LLxCD1yjg5HmmKzfMzqEcQ51h6nCndK6KfonnBsRM5pcdSLhV6BTRn9dH1cYQzdy",
  "key15": "5yr15Y3AuXf9TwBKtMTo3zXATr28YgPSrjqoYVGx7atUFBnWwxsf29iqv44yY4rniUGpx6QzdP9chcHsUtfCLr8R",
  "key16": "Nc57HBfFTzqyLYKMAecXZLHocJcA5YLdGPxeVtCo9XMgwP918x87ngu3pC1QJU1Up4jTiH6EKmt3gxPaoNAVEA2",
  "key17": "qdppBcAZ4hqZhZFz4183Jsu8pLth7sPWeWUjebCgtWzgY2ywwg1Dap7cTuQSVcBSgiDGnaNY99ZhHkA4U4DyiLk",
  "key18": "4rwV3xytdKEyM9CxVAX3er13fcBNLVnDgMq87NALY68oPnzj56aQp3BkmPtDChFhHJ65XoQEKqUtTfQnU4DQhkCW",
  "key19": "322q46w1SAoWr1j5TjDrMdp3ehgkzNFNXunQcV9XkyQYinE29qDByXzYUZ8dxd3hh2kustmT9sWCH6HscSyVEVML",
  "key20": "5foHgj2PySkSy9Zt2mhMRmzNjwZxiM5XVuWojhUQh1LHW4qSqJYPRVnwo2imVfuJbgG61YHy3DK8sFHhqKpsy8WS",
  "key21": "3A4deL8QbYWgERky8vnQGQ2YYuy97i3rKSSpZA9h4xwKoWzmsVDf386R4TtzMJGkhu4iWHXAhGev2REKo3XVtGAJ",
  "key22": "2MRKHdwBpUfZFnwQF4xWo14d5UFs4PLuUS6inijuVJZQPwqGYLCggej2e3EGdgV7H9vNoBXZZ4tX9XewLy8iZwgz",
  "key23": "2GFUMqmtFc7HSMi7QLkCnoZBpdU17vx1ujDMCZSZzQokNaENMwCbMk83qQnFYL7DHFrpFemKUY5xFiUc9KjhQC88",
  "key24": "MxkSzLxucp879VCsMkRgucmwPe2vP1CGKMoPiCYCNyDT5RaS9TwHUEnArvTMjwgC4uLhdENm4K8XCxuqvDtBjNe",
  "key25": "4jsVSx8LGEEUgprPanCVt2W1Uchg2aHPBoSbxCBxcVfBuc8JD2qzFQPhLLC6QDjMFuYcqtwne5m2UnvFUxnbbEtx",
  "key26": "2PhLGF7KDJj48QxT88zE9pAqU3bRKfGYkSZaAgdGwewKSroft6Z1QzvQ4jKhhmJA7yNL5azd8ZUi2X1qVZbREYsG",
  "key27": "4L6Y2oeDFWXANPngaASMagjsBCY1jVd1HfghhyzJWFqhHq3TupWC9Bn36KcPEVKSipzW5PPy9pdGS5n9vmLUDwRa",
  "key28": "5Gg1LSEZwJPgeCbcNzqHn1uWcUDSx67qFbNkAPmntvdoQ5S5hbKtgYFGsNB41jWcbJPqmt3mLHL6FW8QmWnsztJi",
  "key29": "7WnuQHHiF9hdDs5kujY38VnEU3ejhM2E4xUsnGR8UK3tjhep4XHM3P2CfdYKPVcM6MyNHX44FAbSHoZzPMQEtMs",
  "key30": "3TWfqrdgoFwQVkBztaQxPAGLh8XaTQZ5Vj2GvpBqBsBqg1BrTPC4D69DoQ5BsBW54moWSdLc1DR97nB3q6hkeEwF",
  "key31": "2vZoVSQ4jQtXqaPRSjrfrNkHhptYR4wMu894WzuCmVsPvYoTN7RUsD8xatMhBJcz7MyEp9UUNs3mBcnif7UyKHte",
  "key32": "2Yvk4jRZXnoJibeKxwkXb4TpVAL1pPuXMY89zQBzsTxP5yPkyErfagetVyG9T7jVxb7XLr1iVD8GKsP3gNX73xUM",
  "key33": "4aU2g43XXqtMLXPHNCdhMMy3nMFDdiPjv9BoQG1aLdFvSMvA1ECo4oFhXAhAvWGkfmF8RLsJmVqNCGxVNJ9AvsJ7",
  "key34": "4Kw1UR36Eqa8Nh1r3k3xfW4aceUzjJg9CX7PuWofo9CrU6s25vij1a92HfJN2xDYSww8Ah9DjBSNwBAuBbyzcB9z",
  "key35": "iHXSJhgB8zjgtrCj77qZs4wE9PRdWpNFvZQgcPnd6ivbMNTUyZTWne4tJVwZFpD8rz1Kt7gAv3bZPps5FaL28AL",
  "key36": "3juNchyeyyXsKenNw8GkjPuEqrByubYhwXavWxcKHhQcR3CwfQ76779RHRJde2FXVDpevryPARGG1iSD8RMrruLE",
  "key37": "36gtWnrpk2pRB2ogZzdhfXSdZPmyBaNZUoPQ2PfAVEAJWhisLEqwGmNJYoF5LUFur5GggLHnuvEmCkUdG4A6SEwZ",
  "key38": "2SDqAb1hhwvP8qe3oK562ZumATtZXwX2iAStPMwDCTDo4kviDLY7CBEmctrmaBFGqV9TbLr5t3U4PWS7avRKjovz",
  "key39": "5vgEbtDbE4R1kkPDmbgG8DXtoFbi1rGGRt79wiSMqoEBEPwpTkJ5Hx98JvCsVVVPijUhJ1K4KXmhXnF9VRnDDNKA",
  "key40": "3eMgZVwdZAJVE7bcHqhVRFJeGt6jg1w4FhUArigpqnW6XpFzAjJX8knbTy2U8dKMzUeRxYgZJwVJQX46BV2yxQKx",
  "key41": "3cbR9pGLxCxCSygHhk8aiuojMcxURoTnqwpk7gx9EZLyErHyNLUuewCN6uJCpHqA3VYxZgztWK5QgJVP8XwSRKuH",
  "key42": "5Ng23J7aA1vchXn87fFqyYTADhi2SkGzntdxKuJAHnH2j1HHRSwz1yvMnSVWwVgxSox9ctWFZpBWugvVovJb3MeL"
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
