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
    "4YsdWuokBAYpM4bwkjh2u9BpUUu43cL1knXE1GwSDLW444y6yTgK9o3SJ1Bx3aMWgt6yeb3LZuAx9LFChjyx5tMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CypTk6VWjKjquMPMawh1ccNVpt2UNcULpSZfEQiBBRfHDHf9gQarxDVanYeWt1LDRadwb7TVaLt1LNUze82UN1d",
  "key1": "2x6uxW9EHNYXjZ2MiDhm9WNCxc11ZF22XDQcV441kZgaHSekwWuGZCVmmR6sNWknEuqUTiiS3khUDMudR67bwVze",
  "key2": "3QQMwvZ7BMQ5VED5UB7azM7bJPenKcriNy3kEhTaFNDQgGxRRzaxENFhhFK2voqqc6q925fUTLGmXYAp4HWZuNHd",
  "key3": "3QgvPecNyFfzgLm9FBVfVwAVifumsLMqm7yRwM5S1w5ZT3e6capPHLcn5bAqKw4s2iULPGjqxem3pnzvWNo5agnG",
  "key4": "3PDV8FwUQMzRr9PumaKsfomdUwM8yjoYn6ZDKcXsXLXpWuwToYCUrDBgqKnW3yDv5XsH31vLsxeY7peR6qkqum4Y",
  "key5": "fSbSHhdg9PEESfUx1XPH5bw4SsuDpFJWEt8U1XuYQBjmdmc6o7qBeSq12Riu5qvWhUB5fjbXdUunio6vix4tBdt",
  "key6": "2Pj4sTJMVd3rJD1wEW6QHCQPVkJ7hZFnnTEfGYT2LY3kXJ9EcBFwGj5oWT5F6yi5WHdfXt67YpYAn3Ww2VqLT7uh",
  "key7": "28tUn4R64JBJYHf2mLy8GFnCZsWRDGX5SxTCVL9MnBMdVvQN4EcXJtFkHRYfCrMkGNWgTgrwjgSkCFt9xXwdjrAM",
  "key8": "4j8DDuXrj8JEwgXTY4gfUqooEJXkoRNJreNVLNT5nhWuqJdXPgiBL1H9GcbR5zvuBbwfbwiANgmoGh1ZHGYGxUak",
  "key9": "1mpgaYQsnX7unF3s7FcD7C2coF2aEYw9aMu6zjR4ZMWWT9D55oeNJB5eLJhzTZ3dkvprdiUmiKmhu3PzbYaqmyA",
  "key10": "iVEBoRpffGvjkHoh4tF2Pye81WhjkDYhWdFE8Gp5Az3Hbdb1cSn5aV17MkABb2oaDwaBuk5RwAfZW1G6eQBPeYW",
  "key11": "3UAzDa7a9YHT8jgpbhkG4aRUKBLZV6PzuqjJ1V2k5hFgVhzw6XvAP7horS6AqEAT1zZmihuRsLQBex9tbb2yWLvH",
  "key12": "Yav2vCF2nGJPUwHsbYg1uH7XF5MMukvJ5oheCTRDWkLEqjiC5TwxbFDnLWjWTyjPHgvn3fiK1TLTsW8AyMuGRUF",
  "key13": "2sSmQcLsHCFV6LVNfeN59Z7EENbsKxDMkpo3FwJh8EArt8AzZcwFQBk8zgiEnHH5Ea5GdACk4UY2seWH7qRJ8XzK",
  "key14": "2ajRB6RykSwfmAUFR325Bp4am6c4xqmjQfQxfWBiFZ7rPuvW1LfnS68bBUJgXQdDjzoguYRvCU4aEeT5CRwHuC1v",
  "key15": "4aeNQzfxZaKBKCmSd15txfv1JirHecassu1hn4R3mzEa2yMMbdokroAsiXEPaAdEaK2aZrjSMZzVAmwimi4uwK5v",
  "key16": "495yiHKw7DgcPeAmZd54fwKHqrHc4ETSPAniWy2CGMJbqoanKUgAgYVEbSwpm3gqwe5HiSA7wPzDYtqopapSUoWu",
  "key17": "1wSGE95joZsPWzxfkrGchnFwgSTj5q85PPFXMckRHmUehfnADxK6nmmkkJ1ep4f27z5NSVugMzt58UtXJd5Sgsd",
  "key18": "37TAZswLrpXyfPs9No7CMa3mb84vn9CWaQq6AXorDUtSZPWKQw5zKWkJzLKEkxu5S5WNAsokAX6ABMoTs3q8rrQs",
  "key19": "4yVMt6rgUAww95JFHbftwWvhFP1oDc2YG3NCQ4HZMaZ7wXNXVBCWcMYehucf8nfL73bvvTALaQ83Mv27C1hCdhGj",
  "key20": "4wN3UGZcPARvqYvNPrGzBYBQ5b2ebKThDexKavz16x5rJhWJao6J9E4KShi5DHB7L35DBA2coq23K28FG8r2Xzvp",
  "key21": "5R9Y1yiD5DfnbZGWPrjcr6gNcFQQjeePkXwUdrE6mVN3DU337GTqdfDffVLkGxYQmMEou6XMxcjBFCVC7oxRCKLX",
  "key22": "4mxrmLWA38on5ZT1kzsJ9n8a1kBznSMSFAQALmdcTk4AqwUN3Q7YizuwCukdGsQowkSKZYzCzjVmujyDnTEFgpzy",
  "key23": "56KDFtSCQwE3dv1Kv6F2f49xWwx4TzsM1JPrPZe21CJogYeyi3FannXZTpmnn4e9XFxNJniVykji2EmjQrQGSmmn",
  "key24": "5NnoLrW5AiXYaQVDvaCFPdLZuQsx8MapozPrW67XkbE5dbekEy4tBkf1qBXx4cewRUzE5vHU1c7k4AasVEB4drD",
  "key25": "4vQxevzZ4gVjoVyMnjfy43jzHnxpiU7VSU8AA7btVTnQzGEr4xmhGFUJc3nXbQhK3nQXT7GDV8Ldc4tg6qGJGxmP",
  "key26": "3Nbs7Rms8goP44PzdMXDAeX6wmK4A2UjVXnTmybPi6acv41NsjQMFPatErsk3djsfMC24qNfRSkrnYzGCHANcbjd",
  "key27": "2xenbjQUbpnB7SB1zFajJ53wjdoCPmtGUx7vV236hJuTGiVg96nBign6EVZBk48BQ1gb8FNwChYrkfx877QKZ4Y5",
  "key28": "mM6UcJserm3iPmhhEYo9v7PDEsR7moHueWdVVDhmA4VbTdiGyrvXmMv4Ciw194RE7czLfUQyW3LeEDFNKxNSJjz",
  "key29": "65qAiNa17kjQ8XikGHCWUyfXHFyEnr87YSZUtkYB7i5E2q9a6dq91WirFZfGmKE6W9gXensuarSc5HsCWqoekXq2",
  "key30": "41LcEzgQsE7r6YubE2noHLUU1gNhuWPptHgrdSUzJLTncgpZdfEV1xMuisJN2SEnhRYDAJYy1FcbyYQ4XpL7UiEY",
  "key31": "3p2BP3fnAiBT2UyWWN3qyXeqPsAj21aRKE56VFCUjLWkjgtRAzU7z1aARmimS91UgHCSEHmtmAJ9HTdV8cXrTvjh",
  "key32": "4zQt9HFj7bgCFDvqHJuR8sjqGwBrJ6UBmSCS3zsgdsoreqhPnpRYs8hhqyXTKSZZw8zRUZGvYyMX5vYy3U2abcjh"
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
