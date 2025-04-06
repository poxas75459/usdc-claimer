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
    "55b9FPC18PE4ph4xfrqrbm1dGWGriX5tf6GuJxPv46QyzFjEL4MDm2D5qGYptH8sJuoPEZUDy5ek3kyZKDtcLovR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LAPrGqkcUeXwKY6HMFDaEKgz2uwPeDX3Jg7b2YihTHh6n4rYFk7undHa8jnEPBkL4CXtUgsy2UwgK1ry9Bj1NGG",
  "key1": "3Gxx7Yzk27Rdn4V4o7Uo74E1a3AA24QR8nF5cZPicDoDcGxqhzw784A3nmUMYLCk3RYdtemAqYeBpncMQJ4FjyZr",
  "key2": "2isk3ajwrKVQQ7GPBuVQLp5N28m6VvTHaE5aMFpCNo5mxCKKYjsznf3RbXzWiQfDShxbQaKTKcS6eQ7KUrkzVkgV",
  "key3": "41Z1ByECkvcRqzQqq3Vs79nvp5WqntB5UMhuj2bBihQkJ3T4Jbr9KLKB4uj2X7LPSy6qggMaAHqaQe2gKkXJ7Edr",
  "key4": "2XDRigxojXYwxG34dpgi7jk8mtRkPfUVPi3pb9tV6XsSa4faAVBgRDVeXtmcyS6PJwXRcsDwKoxDDfnooUxqjtFC",
  "key5": "URXjgjtB82RX12djdDBxVWJurqQLeWAuR3QU2vHH51ELHFkFHSis9mcp2SinXgQzy1N2xFeLyNQJgjFGyoAjPgR",
  "key6": "5mqbAF3SErCPpBEYP9xK4P81vVmrCxbdUVqkHj66rVBJS3RiExApYNqaLdtZRFrR2KXku9q7DpUv57ULzeyWRrWs",
  "key7": "4ZX8YBMNLEQk4R6ZZB9bTXKeAfk7xdHZ1XKoQrt2J4357yJavk8EUhGP7ZYUdJPASY3ZRJ173HLqhYmfai4mD8Mx",
  "key8": "QEZmu63EpXYDZ6QKkwAjfwUMoSJJn7C7LxAPUR31g9kGh9SEnqxRuqwbPqHXEJSUQ4yNFKoxhf3pKrGAxJZoKLc",
  "key9": "2XUcuW4gNrquQAMR1rtweJ3wtMYujm4gECshFZmXkM6qTg1F2T9F3aMBGUeixfBmfFCrJCS2sQXVjnAfAFpumURe",
  "key10": "51sdrdhp1b8cGBvwGxS18DG8x5v6k82NwxZsohqjqvzyQutaUDN7d6BM73oejboaf5RVvSYSPVyKqtayTmpLRxWT",
  "key11": "5QWdxurLdHiwrgXaubGbn9nbfoCk8CYy2sBzomBg5cMnMMb9K1KXZUY5zfw3REMd2JHhcbMhFHtGFa2uDuHTeWSM",
  "key12": "3bYWNhihA9eo6XyLvwpapXWeTRGUug5L4Fcuno5K8bjPoL7gXiLgCmA3wQpUCf3PwhZTvCyqGUsFcoi97ZfVggKX",
  "key13": "5rH2EHoRA8jmHJbyLGxRYpbpagWKKE1QLZq5g1Nc2zdddBBU4436oxE2A8RRzJsCcPcWUMu5VojjWw4cgJgZaMUR",
  "key14": "2DrH5z7gxRcJTbv95gHY1CX9pjz4aVbeVQu9Wbu7CBhqoW1dTguQW6EFYEQ8CMg3Ry1JdjWUwpYptZaAdYb3NZao",
  "key15": "5b6kzCEh6tXZvfq5TreB7K2m2ESaZYmDN6kWuPdEZ75NxonPKatKzpHSyc4srUceRUWtNen4MFXmMrvAsyXYc38T",
  "key16": "5buiwGSthpH2Td4bXPfHeS5mDCWSj9Nd6Sx1JVUC2e46mULCFTfDzGMiLboYMWV5AKCUa5xZ8iJmFDSL5of6qKP3",
  "key17": "4nyRJCSxP7QdRxGuUH5UfM48N63t5owmq2BdEH6JZ6jzmdY34ZzfQ2LskaqvaNiZYcApu1WnAPpYgMm49afAEkGg",
  "key18": "31WwT1snyusKf6e2pLPYjdswbHDEXFyk7KiXpgezAfYr3t6xUxPQL58rBvBksfozgik1oFBMZne7ZtiGzCN3Qfdi",
  "key19": "42uyT1o4JL9MXemFKuMcZSUKzKYDjdyoUSRyvonbUJKz87hCgKtcHGYSafiPagNFQpZDzJupHCdW17bASE1BM2HN",
  "key20": "4BFtiZhmKYdyLbP8tFaVkDo9VVQHVjUko2j46pRcDiAMuU6meokZNwyBYhnRoFWjoDLzwPji2BS97uUPSwXjU5BZ",
  "key21": "2qsN71msGhsETbdgpWziP8aDgatACnzWiwSmc4Ck7HUoNGcTmzdFkWJnRx3S43Q3bKZJTE9K8pjk6jCUpPNubY7i",
  "key22": "27aSK5ZSxM4aWmx9nbdfvNGb7NPsF8XkZwqmPGGabtnPy3sMzh6CDHwLkt9v2PPH4jdrW6CQTVzCmo3doRQeLPoX",
  "key23": "4mea8yByF1Ew3ekzBdFX9t7xpw5Y6fkerKYut7WruTLpkrAiBHSFmbEqGuxGnYwz1hbTut6WC4LU72wJpZbFMAAv",
  "key24": "3ti84QTJywxFTu2mTxMiLntPj3mUTkaFGnCK3caM84MwguBRWCdVTZJeirYbuc8PEXnvN9Yf8BsVpzNi7tWkgxhL",
  "key25": "RpwqjbEb1nTFB7iEzeEeMuG7QDEjwVdFwR1KU8DdMkRGkDDTE897FRkdbXkEsW7JVaAKqGFaRiMZxLzWpgpW4Ue",
  "key26": "FZYb8ReXMiXSc3EnqwQovpUTPWsvLQf2qywARmVnDXykNEZ2DCsyupRpmYtVxQs3GRYC3gsK1q2v8Xe3tEUNrwU"
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
