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
    "5wmeMrsPhpTifv4mM5cLkCVDqjTxV5k5Q3YXAbuDaY9Yi13fZf9qzJ1VuL2pNmpYF1HeGzMPGZeA6ekKojp8U2QT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yv7yghYVBbpM4WaexdSiPSma3A5hcd1zGBU5Zsqtc9P7Ev6888vwqr7UBipXcMcZnr4yp8SKoDStmB8wBRvzheM",
  "key1": "4dxRR2H36yBeGmrnr456tXf6rkJ165wPRXX1xXr9sGd6YNENbBkPgs7aCLwj6zSRAvTeEo6U45cZeegAMV449qxg",
  "key2": "5fi1JNEiytnkh2CUUeZs2FRZrR6AninZVNtVVg53PGmE6evMaHQWHVUDJu7qzsBzeB2NoH65x9o8xqQvMWsoKTqP",
  "key3": "nTaUKDjavyzQoDbxdvCheRDPQ42S6ABm6zeiWfg32giuA6uNPGveRcLRzpRwNEMWQ2bzHuBcKF1FsgmeYPaUBTj",
  "key4": "4uKyZ2atVqX54RkpUs6tauiSGz3aN4S3EX9mSPMDgGbZBCbgsxMGhPoiKRHqTgncsPuLpGkGtwJqcD7NeDQSa2R5",
  "key5": "2cwmvaoQPor7n73RgFWFjKuRRqydGCagYuTLLmz4SCS4Gaq2CXaasAtqpGrBKH4J8yJJ6V4gsiztRokDvNttANFs",
  "key6": "4QNPBHGpxmBmBPLeh5XRznGenzsJuBh9R4ArnpkdzwwWF7YygoCYz2DF4CmmGNsKNpkYZpnvi2YSKBJzQZyKPrJd",
  "key7": "2u7aHn1pArqXLjSWMXLnnfPFacrphMXgwjBcBsThcuW35ihA4obKvh75BiVHQLHLSHTLqkxveXXxdfN1vrYycjnH",
  "key8": "Sbus6vextMCT7FhycDdu9z89yTXGFUDi8rc5aWrDfQhExG4zcLKNYWtrAU8Ytz7YrJvdtiFQd8oNmpqmKWGZ3Dy",
  "key9": "3dzcooDjbXykavCDErWPzCYb61kzPQigArj8Ac6kmk8RFgMTr4dqYngFcJ454cic2HujXHpCiwYibki2AiNcGqqf",
  "key10": "59hKHm11V947r3gvN4FBHmjaqSjzVCswNhSa8Q69cXf38Fc1nTQ65a45Gx7YsUqmkLRjdB3JZff9UEg8yejLxM17",
  "key11": "27jM9ek7jZkrWT4enK75WN5ZRLwY7T86uX5B5FSjC5kosGX8HHjXfYKssWzfwwJYmQ8wSAdUnpALKkZNYrRU4GGg",
  "key12": "4NbYcSB1qdm7b9dd4J1Dw2c86uor1AuZVKQMn5xBQ3VvgCMb1ThqozCmSmviz2eVFex9tqgszfvwthkLjFb7p9QD",
  "key13": "5d9koYpKj5VcvRurZqbSrkv8349YWCwMrHr8jpEcVnTso4UBxahrWSxT7fw2d2dUTbH6Bb73H5TmSzs5yXnKKjaj",
  "key14": "5CQ5ME14ej9PQwd3T74SG9WgLYi9PRucXxbL8Gg813S5ZtTBLuyq92MJ7mwYQ9stqz3emtfduTCERyLsBRc4V9ZE",
  "key15": "3UacCVkFKny9MNMdzeiJTGt6c4BhvqYMyGNhVKPff9QcgLtsRPibt2YPBjh7hq5nhPseQ5Cmnne2wZtceUFZ34rR",
  "key16": "32dVkEqNYZrKkCQgN6yiAeSX7aJA8FTKSs96gmGGA6K3JCkMKYrV44KAh9Lc4KwdHxV6QsfpJakSCaoQGeEDsK3V",
  "key17": "56kHEAfGGt45wQfmZdpJ7j4DJ2KaW2HxLioBCoKUvJwcWwJAJVgS2trodJWLhdG37iu96qryXKdnQvxZfzFMjumn",
  "key18": "3pYgSXEUEStNvF9J7j6BmamVgBmtNu5ABUVypyQvWGcHrvQ249g2899F5jfM1ViApSJneVpdEGacFcrmXyC4oApd",
  "key19": "3jTrGzF7AW9vXRXktdZHXxRhZngwrHMnUFPt238La85CBFBkvrnBneGL1fdmibwnXjsPzt8PHRdiJrPRHj7zvukr",
  "key20": "5U3B462Kmtbx1E3bUDgn5hHEk9RFJLunJzMTt4q9RchJqPXXmMe9Nop3X1JoeU3uZU4o7GLhpVKcEhJLEpfLg7KJ",
  "key21": "MxDiuzM4nAgkdudkaKx9n3NXWKMZZVggUG8sDHNsTUyjFJu7yoF4TtbdQ5MGbqzRJFdETeMFGK32Y6wBbyQzeM5",
  "key22": "49GsgAcXRVYJHRD7vSZ4cgLrEAMJcK3u32UUfhqmyQsyLbHDtZRxNTA9V2cPyd9cB39pyWq7sZTemHE2Rbm26bF1",
  "key23": "44Vo9pGtXwjD9KBMXXoSfsemPJ46ggVFLMwbANqZep2jSSok1WNDuTDBXqQp3C8iLiM1SwGPcPyzhHJoPcLqywVA",
  "key24": "5zN68cF1xyKBG1LwU6bdFeYosyFiFjAzB21ghgkchiJoMyiKM69MCagcoA15nAYb7qEFZYZZ5JshGaqifRUwnE47",
  "key25": "VNnPFGicNu5fcjCWtDaEnSCXt3n252EvecQM2inDqUs7UJyHLGvA832kmVU2oVx1AXCt7Bned8eNidH49evwaDu",
  "key26": "4LNo2L54LEFHxcwfA6XFqXh8njutYUwhUXUdw8Jb982i931dFczYWrYr1gfsBQDhv3oRz5cCMqmeCnZD7FRnv8f1",
  "key27": "JPttHZDkTjHCSxmAHv4Akyo2Fpm776gnjS1i53NmTZiykctizJKQjgQ4wczeQ2S272PCCQoAsQK4PKM1Wmdborm",
  "key28": "4n196P1bXxcXGmU79WMGMGasUGWWJ3Hh7ZfwePEwaVVUdzfZMnKoNJPkqu5FqXzbUkSdfAvxhptH6TgAzn2uF56U",
  "key29": "5swqjJwGWQmwKPWEfFfCKRbGXh9cq9tCoim6oByyisMsBpCegdxZer9aBC4XwxF1H7CNS8vJtpX9qp23rRMjAwjq",
  "key30": "2Xr4ViVtiqf8BAsNJRWvxzwC356wJVnzCkxvuWazroJMLQcmqeMNQUaJK1MEbXmNYGUWm6iRx7jsFDx6ZhMoGbwb",
  "key31": "5Eq2nB3a1poe9JtCN8ZJJ8WZS5DKWyg8AcBRd12v2fneRoMpKcheRU1uZVuq2eTD8eQQYAp4oeGBspZ7cySJyxNm",
  "key32": "2Bty16e9wtdvTucMWRHafNhUYAkXoDukmB6XEpwNTS2tmBvHYAK4An3fSAY1C2AAD2ztcU2gBdHBJ2FU22YyqHqe",
  "key33": "Wi6brYFxQkT8sfZrCP7nZwTCVdYYyV3cySHMqLHNCuu8DR9j8sUgSzbn5rAT2TXVnHLnJUYmawGXrhwLpxpmsge",
  "key34": "5JQD5Bt8CVJAoYeNBsVxckrwLD4yfPTX5nB194Wq6DJXK2okFfv7dnVnL1WRzEfBqU1ScudyuBQELwEHN7yFUo2s",
  "key35": "2ChraynrPCEvNJ7XpujBkG2yUSJfFTNCRjzmcbLDiPMp9hxtUgA9gGTaHUQ3a7ozJZQz3xnfaaEPghgvsv4XPjin",
  "key36": "4f58vyc6FBbPiUvC9Sne4P9RgoxhHN9xWjrWCiL2WwPkeQyYtfVgxmkoeRf2JPrwPrJ3mba8xa6k6LmL31v5Hugf",
  "key37": "ZcxJ28hpHb6Vwg6vY7mQQ2idsiZiQwWX16TjgvvKorV89721w9sxRuqkqRXKT1QqEW4Zaw91cvHFxdXaz8iUjmz",
  "key38": "3DueNQJy9BUp4xT6QpFH9naFwgpwTVFUXxp7ryuA6L4C5QyHr4MvmWdEdoKaCcKHsUhXHKUqMr8SCV6NWtwmHuJB",
  "key39": "EhDvCDSRdZZHqQUQmWYVD7yLfrrENP6XauRHCfxYvGtaLdeoiepEzSDwywQAkpxj15gddYdzAQE5s9to3DsBNtz",
  "key40": "46fNoj64xxEZ61bnuhD5Hx6g29tweEGPYW34wpVZh8zjDeti9ngRDRPe43PhzVGv2WZG64D4hnn5Hfftb9hwXmXo",
  "key41": "3metFDVcq6kKriBAo2okrRz73aZrJWxkz1RVNeY6NCT7dy6gB7ENVZLmKbGkG1mcYxsSjtc41EW1MvvrzgUFUoFx",
  "key42": "4uKVqYxbRF5U4d65SzT6EvivmngwYG9idZE6QqumSsnZAudHTaYuqn8QEtLxYSXnrvMj3izsGURjdhCGLmixQXgS",
  "key43": "3FCpE1yB5g1hq6XDQbeZpoAXjNa5wx4TqZzE2j32YbrEXM7BVUuWZCJDoBgRTzQkNmHPpd2eRnJvZMXo7GfGBv2Y",
  "key44": "3psygqUymnnykxUP6bamF8B9H8uJe86ZRPxJ8Y7bEM9kjH7L3sZA4V8bNqWQ5hJFYndFmvt3cREgZFtDQHgk3V46",
  "key45": "3WhMpxavHyvPVQRCmjegijtd2oinjYJKVww9ibcSEDfigxGxhUr5HqRNbBWqaEH7fscYX5FNy6H5mRXdkeJvSh12",
  "key46": "36ZQ68rvZ7KokuwTJVZcCThP1tsSdFNi1C5fUMt9yQqvH9y9ywRWBxyc57jrLNN7uxktinVoCod2L5jfo5Jx7WDR"
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
