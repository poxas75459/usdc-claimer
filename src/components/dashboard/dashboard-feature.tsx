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
    "3xk1b1Ms72D68gtezGkrNqAKo7QzZBH6bkvmUPTjaWcCcSjhdKSf1hNxeBgdvG2E2DfEYtRkhdL2frFiuJJHacpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UTChfLzxSoAh1JDynykb7sHgi3jnDcrRJirW6BJq3ekyNQpKNvjmFTwcUnvVvP47R2A7fB5b3UcYks1KZT3Mks7",
  "key1": "4cKnuBpuTtDgGLKz57QbCNh4LYFHKZnURP6StevAkdqDrGw2YgKbKLxFtunndRm84dQydsFjSDjLCsURk1R4MVGG",
  "key2": "4aoGRtD5yPSz8riegpfvPdL6NtTL6pS3tqfJ2FuR9dw4FbAAdRUQR1mmdpyTCYsT3AVexFoYvi1iJFMFQjpNZ2nB",
  "key3": "5su58f8gY3NMEZEX1V9zobHrfzTDNLZPVRkEvqSgiRsRFeBabHktysvHBUEPHYQGx8naT91rVfvb3Tnhp1tDNTtd",
  "key4": "5DLxsSGMPc24koYRAGfFVbA6DoRsz1o2AKH5PyK1jkWQYa9RASTxeFfB8wh2TVvNnxNdcTpBf8CYCk6J6MtH16Zi",
  "key5": "De8dJgg4MCjsYqR3zQYJCTSvF9kuUuezwHbHcx6GLHyYnA2ujayV1RNRv24ZETv7ki8attyYugt2656ZVxB1gKY",
  "key6": "46SdaSuaCpt9hUddUFcb8H185fXjREA9vQ9VtaHBzACqrV2wjGQEN8Va4J6o5eMBpPeWb9JndW6WNy71pngiHF3J",
  "key7": "2MF11myGweJHR5RNB8obr6PZeWz7n8EyahzanDJ7DJKHbknanqS4aYcP6jnmzdF7pvwW8Ks7ByV9kNUv3bmjqpqP",
  "key8": "4umySum8fUudv9Z4mAEiEwZjB5eYKNwTVhDtBmscFEjiaxXV3Dgo72yaepVKCZ1Ug7bxZNYVRCjx1sQxSskYbqFy",
  "key9": "3mQyKVuVbNJ2QgFSudzrRW21CBn4pZ4NF7hXsacLh2SfWYKf22v3mkEZzLomvZcyHguucy7tiuJavYEYF4ahXsaX",
  "key10": "22n3fhnXBZx1KZH3RFUicCApAFf4Rqn1enLVZCATNzmqu83t7oVH1Ri4bmo89z9x5FG4qgMjGcvChADdM7HThWs8",
  "key11": "2XkKGnyq3q3Je2MUx6BzccZtfaQVtG6HjeWr8a1Rm7roQVKqoHUyYKrRcJYdUhXaHdh5JxjcvSkFEsiChvfMc2X5",
  "key12": "42XQ3qH1d6ww6emSqKZ9g2k4zv2PL8D8gFiTARUiHn5a9paX7VyX7GVdP9XHHLrH5ARV1ynbfdPQdd4JwzLkJGyu",
  "key13": "46hg58RgFwKCKxZnd5ojx6fAb9TyUbkqRcRb1sV2aAo4MqSq6fFULCi25rkVV3f7C3TkA6vjHFcRvuCg7e6fXd2n",
  "key14": "2d6PdLo42UmGgCczZcd2wqqzvGViHCYmpFX9iQVChDLHUJbmziN1MfNT7Hb7PixQktg4dUMHKJw5dNBFvo4S2o4F",
  "key15": "46PGZ1AKXwFca5jEbVNoMcz8D2npsNypH4xPJLLWVJQeme2HyBpwgwgy2tKYHvcHmj1Nmr9xjriY69Mjtrv4ybSF",
  "key16": "8iPXypScwacLyS1aR5KEcM2hJsNzMsHhs4CbQgjuSi3Ewtw95qQpSjnhBNrhSjAZ8KNsxDsPNcEWhu9mjHVmDvr",
  "key17": "2gyTnEms7pTHTHGpmeGmdsv2J7HffhrvytwJYicUSPL6DE141sQ6sR3mBV6vh3VaYKDgwnLi2GWhE4ntUfALPURu",
  "key18": "3Wryxa56wRXEps3Kq5F3Fmr8GruGTnwdnBAJe6PHaoVoAKLnaJw8ePVs8dXeEz2hk19FCWcUg44GpiEJ1U7NHQ3m",
  "key19": "4fDieMWFLj8T6uvxPYgxdSm4Qt82WijFAu2oFFghiXnFkVYJPGDzJmm5Dc5ZxqhqD1vGdUfC9CmLfymExWPHqkZi",
  "key20": "4vxmdjymjBwYMzU41FprMPzGgh3yTX6kfoj83w7RkoYu9vBsmoZ9EqxBcYjh2NChVZmi7kvbAgNqoP8Hx6fiJFai",
  "key21": "5C3dJSiZj2mprbCDEZu6S4Wd28iCoEqmHfxwrQHBQFR6fdFB85HgrEeNsVBStv9GkdsvoCLwZagQtnzji9Yo79iu",
  "key22": "2XoDCZXDDsjnbmrBH8pmYWH4Zq3RwfWhCG7rVB9jrsYmtzsVPnccnagdEL29v4gHsFWnhNdPFf9sDQRm7KqS3Wrg",
  "key23": "4rVXVwNLA3EcJRZHaQ91Y18shawhS9bAwtRN5jqaBdGc6H9cCzt99w4D3uXqmKXx3p9Pofzo3EKbFVZQLV3tCUow",
  "key24": "5ti2Nn9giyWW3KgfqWU2Loisz9fvGBJJSTdYTLB4kuEdoMLVBWkgnWZ9kWcd5r4apAFPFq5gbkGWxVQCqCAPxDLZ",
  "key25": "2EXG5Md4rz1QoVCr6Utqm7VAxWDy2oY8H9seAVXqkRWKC8AsY3zhap54CcnFA1cLeRKwmErXFwvQbXNMyrMkkzfe",
  "key26": "4XXaHiHAN2dRzRQQuaKQHEr41CCfgTrD4YdLbHwNzx1KHdqW9ADGN26XbMZdo73XP2s3Wz4vjRuLSQacwiHEDp4H",
  "key27": "3L4fgCaKRq3vL9L76P5BmMViQ9ZAJkptqxWCNFeJ5ShUtTksMumSvMvP4jDZxTvXePDgLiFRhXsBFHSTbJULh6QV",
  "key28": "zGEVxPPGYdKDHVwE6YoPRQo1kXdndnuG9ErmXFrt88MdbTdrXK9PgAwfbzgQhZr3YNXGTtsyPyvzLvTdYSWTuK5",
  "key29": "41v3t3YAgqMBfi9SHteS8ntFEL7A8tTyU6WSCntFsXS4JHhiokt176oTsVH1ZEV41GgWfrdMLx21NX2D3ksvQXXV",
  "key30": "3gcb3V59EXvdXxq2YXEL5VfaJAUzWaJWMrWi5nwFc2afrxLfzFfjcbu1EViN1bQnRWBHJU9kenLVB5b5LArVBpvm",
  "key31": "5Ki9eTAzwVwVQJX1BTfb758kqWWekzoe6quu25yVb4RX9F5CHJ8CU6fmMFtPyWVZU3aHd1NiFFpgN2HuvqyV9Stz",
  "key32": "528QMuBBwueJafyVpok8DBdvRAk6Bqp9wdwW4ZYGaWuyo93mhQLBqNhAdZehMmVz5HS4neyMTzdn3AyG6ZAjQVWr",
  "key33": "2FgfirsnKN5S8YNYVDSqqt7aBHKcdiTALNm3jfb5qgdW7psUapi5Uf1NuJ5tfqgkUf6EUviDN15SC27pPBfgAHHP",
  "key34": "4kiJqhQC2XJ4xCs756JGJWGyEW2vT24na4aAFAxx4TXa9iKYAyTamQNELytFRiBFGGSubCqZDhMtpka5jjCzpyVx",
  "key35": "5tejAAw72bfRKUbZ31fiXBS5zaX85JG5B9x5inXZ4x8fbguZJoBUBQTYcmGtcR8nRz51szYZu5iwUQbykooDY2R4",
  "key36": "53VLGEFiUsYmA2pDCEL8nFxbKYB8hdKBt1iPgU7YRsfG9GZuT4zVY4yV3BHheg6HTsaQm447jUsVoXgKz3c1rasx",
  "key37": "3FKcKJEeKZbbuozX52f7uo7mR9Ha9Egfxuw6JY5LRk4rKMn9UWKCo2BdqPawCQf89WBEV1NVELetpK2myTad9FVo",
  "key38": "39dGKu4FCWmQMhdJ2JcGcebist6A3erHiMUL6iWuGpaRwkoeL7D3J7PuJuDSfykUT13kv347WEjTX7c9ytjMuwuC",
  "key39": "48p7vxLtThiDBd8Pkk39PJGBWTr8pyWMj8Adk6Qyp4ZU2qxKiUbopAHd4MSDLDTWiJW3q4C2zKngmy5kfXYo5amf",
  "key40": "4CfKK2M49HWChcFrb6nB99myTsFb3V8uP7cUxv7Jo1JNFrMbyBaJYqnhgrnR8YgVGh2ixECUhDvnRwzwkC5pN8xU",
  "key41": "3hx66WjtjqLfswLzPr36jgAGpB4b6irBCg1PA6dt7pRAeajAaBYCci7pqM5ZpUUCzJbMXnbFrUiXutqxkVoTrWui",
  "key42": "AEjRJgyzoKVQB1DX9mGrYVt55qqdSkW3Y3WH143TFEV7EN3b7PhQRC8yPVKuQP3zHHhpr78cMNDeh5uVsfMyebP",
  "key43": "X5VRiYhSzH7W716kciCk1Zyv93evSVYHNhSAN7wu38TWawKws2FQjiBsuRQJyLi3hs6udfL7DvptdgZXFPm8Zhp",
  "key44": "3WDSKoAJbqNNV1D7YVrQJ4rWDeWR9z6fvi4gz3u2fXG9KFD8wiPjRGBeMff2BsxArNsRJgzAYG2R3iYYRcUhGZfY",
  "key45": "5WEbNmAtTdsSezkcBhivyf6bMiQvv4o5KXf8tBTpUCznjMCdEG4SmnE3XZF27oSGm5RqDF5YfTM3mAfkaZyGnPbd",
  "key46": "56G8cEf8JanBiHpXtwPsiit3jZinizuWdWDgu6KMj4yAt7fseYRJutgdDmT9sKQq2KPzFD7E8bLFtK1pUbbGK6pa",
  "key47": "2Qw9tDurWZmfMsveQ1xsusBwDCiAtznX6fuwQ1jtmVWGtHGVh5h4xePLtFR4wSjcGDzSBRmhLaaYa2NnR6VBUTpj"
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
