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
    "5r1mqSe7a1vS6vTLxcw2f4SqxzBwE1WR1oMV9k7Rs3pMuubgqTv4pTksccg5XuRiNMdCVRLdbQKsAdKUMcrULTgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JgP13upvEFsAcBHZ7QyC2E7gtdTG8SACVw4w4Hc88uBi75XoxRceTAXLwj5uBN8GoYZYwcVf62ZQZqcVcyxjw9M",
  "key1": "2LKa6keQX1apu4HC4VWnP2dCa6GXZ35GrfYe14K3LerX8AmihnteN9ToLFYCRQpnjRZhRiHhRL1Rfz9dyhBkyCPb",
  "key2": "4uzzMzu4ezZ2yrtvwbTSzBGave6tEE2KEonVUpCpvLcscfZG6uQ395jM7K4s8E9UxrFV8Hdsu4yxTe2eLAKFxjBB",
  "key3": "5Hm8Zgj487aTVjqNNDs4F54aL4CWHtuPceT6LdQiN4CjNECAaW575uHbFKkrMmPTk1B41QfguJkFJB2LeW5vHzHu",
  "key4": "4aQMnEtTX9Nx6gBX1rgsWKwsAj5M3QS5HHq58eYbhF8VPBTtttJwqe7MTAN82Ax7HGAweCQ17b2Nu7aUrsZz1dQ8",
  "key5": "vQNGvfZ1ismtEBfyTafLTELU7nerGRcqaPWqJogzqehiTZZNWMokYYZEDRqhWwETWd8jK9KCwDFxzArapjtStsg",
  "key6": "32G3cJhY2D4GzdncA6h7PhhyNc62oWTU6Vfyw1jdYTtJaRu83qUkjCy3mpXPwu4j3ELzfp62jF9QSXZcRoCK3qTg",
  "key7": "37Wcshs4FFLxPpXCxP9tuQ926aTX26qeZG9r3LsU6z5R8mk7Mm9u3dC9h8FrdgfHrxoC9wAxBums1uJiUJi3eegC",
  "key8": "4Dng2hnUDWmksbugy2Xkijd8Divz7Qm2UqQH3VvGa5dAUSKP5HBUvpbjPhqGdS9n5SpW1rttCccgFqciwkQ5KRaB",
  "key9": "3HGyFhQVpbCRh9mDQWSRygoe7yYwMfJnn4EUw4LL8jo3gzKoPFfNRG8FDg5aXjhiGbYUbekyfga4cKnVXDak2SPH",
  "key10": "293wsAWmsBtyjpUiCBY8Cec31RQ3N2LgKEUoyro5e2az3zMm7jc2bwpZzSFtDk1oq28ygRawqTQJAJNXQaEuVRoE",
  "key11": "5FKpRiVNsCg9sYkXYJqY6RS23U227gxpcmWCyAqawkumZjM4s6R22driSNqrK8ttBsCzFwRXz2J9ojBnmCe2SyPj",
  "key12": "9xhx2qCeS74SXoUPHpHQUmYJcMnSaSK5fxDzJFdCvakaWfBbjsVSoWGwGggg7PdjxSqDPiN9FU27Gi4GA86sHck",
  "key13": "5PUrwbT42hT6tU9XQwasjFiBdi5pjJLhKrPmfQJ5Kmbv7pG7kd9vCWs7zo2ztGcG9Y9QMFhD57dDZd5xWryTM8Rk",
  "key14": "64NWZSYQfm6JKHosDXuL47UuPK6Ua8Kq445Af33G6U1RakLVhkn7jQi3cAtxGvkftvtPRQUhSDAus9tk5kNa8EsD",
  "key15": "5RHhj4wdFCoGSD6uPe7dtt3arX7JLim9ePscECcAtDbDbYF9zAddF8i2eEZ9p77JkKaW7tS2RDwKL9igTS2R3xvD",
  "key16": "rTTLcQJsqsxBB2wc6ERucJVhQ2TzAEwq18s4NmtUwV7JGQBsVeqLygU2TeLDZx9YMNnR4nzoBVqCS1VGY9QhhoZ",
  "key17": "3Mr4qzBVqPVKzPHwjRrhW6cB3jjYA94SiFnPBWMTC2XaYwztgvjJzDTB2YnuEAiuq2rTeZ8XnNftFvFfhZygvXqp",
  "key18": "5912rAZKEqrGk8sv1viL25BhXURgAd4AFsnyVLidX6yKNbzRWFeZCdXB8mptj9qZQTUGU6DEPnrx5MDYgwSACm2N",
  "key19": "3n6xYHWXRwZvrLscBAPJHc5HjWYtoHWPXCA5dwYg59pWW8nHN9PU62JbsLh8zEBiyh9BhZTG7Zi83iJCHF3smekp",
  "key20": "3GXrn7vqiFN7g32nFrnBj8xQa3s8uVVQ8J969J2Mfomfr379tsACh5oXhDosGFUN883b7rg7v3uixmDCjpeFDWkz",
  "key21": "2tnaMejHsm2wGG1JYeVPpFb28pkDLPP4tg7zrrRdLuzAfwVb22sxjLwHfzHMavqq8U6D7DhtiYRN3sJKDSAz3hAo",
  "key22": "4RbS7MTUujtN8decSGmiCBXxMFXgbh2pektmKpDr6pt3YVwmyJqADieoTrivS77TVVSVWUrgGR8bpKfjggJk4vjc",
  "key23": "gnGTWVpQcKzSfci6t8LrkXkbwR57hSQdrFDnJPeW6TFY42hGwJQ8BR9dnvrw9CP3UEEP4mcpfkuE8vW4Cheveqb",
  "key24": "3wG3MMAndPP48wvC6j788cNofqyTxQ1EfQ6zfuwj9LM3aPWYmvwATEn62Q2h1ZN7Lc9gNvJtg8ty8To32EPiuko4",
  "key25": "5JVai3V4Jv557cMJGQwRGedhiPj3UAcYUCZk67sRRT6ocFCRTGgU4c7WfHpc4mjgLmV6yxWDsLhnYQYiUMZYmMzT",
  "key26": "3Thw7RuF86QiLk5g8zfTuKX4sKzuFmgYHTFyYziFWzhXzHB9Sfu5zVyeaKPkKj34szCVai7SxeTZhffebu5LPrvC",
  "key27": "39x8GKKQ8upxqgYYxKZWpThi4FZgDu2y3iwfbM9mYDUHg5YGBANPafyyUfyTJVLjT14rNHWQTmTeYmZd6NEumoAa",
  "key28": "5kbxmHW52ydrf4RYegEZzXfYvTZ7UJ6NSgRfCdFCwFEKsYTJxFguTadQti3crgqDC9FGdv3TuotzQurGUBd7DwTD",
  "key29": "51rZ8ct7uiYTVDWYx5PQb8duxYpDxuddsaAkgh5WEJGh3XDV5bh6DrxjZm1v8eLnzvZFtYbbkSuBJ35tEwrjRpNq",
  "key30": "55FZFhZpGUcwBUmMfCPuqXP5c3Nm46fMKZXEMG9gMHdBEYbRd1yWkrD2s8vhZ56X39LuMFPetT3st9rx67Co9trH",
  "key31": "25DQwmBv4XYBNnznVSUi7ytYXyCyDpfR4NdnGFw7B2fjq5uBFQe1HtLGJWqbhXhZFVDCje5YYMDbmpdHFo59y6wv",
  "key32": "4bxFJJMiyeWzeds695MBxxip5H596WyiZ8dvP4HKrXq3AY1mGUgwMrgLq5Go9k969Fa5ejtYgfXhWcftCxxQKEhV",
  "key33": "hSYafz75wtCYbHsf8LjmUyWMp8MkeZGK3YseMXZiFfaiJtY5YQ7UxUptZV5X1SuoHhKYiPt77r1wfpf6txUe663",
  "key34": "5effHx67iwjSM1VPuVhy45CbAYbGQYVnXSRzvbxTrHLjzvfwNMk9sAwyQT16UqvqbG7BH58AZZQPhZdVHvU8wntM",
  "key35": "SBBXzd9mV2izdxYxEpNmuAAJyJthkjVCFV4Z35TdWjbz7JUg8zzojogLei9Lpm95JDwXPbsg1RpU98hhxRgFTcb",
  "key36": "52fXfc6WBqZSKHxb9hiTrRwzasYfUSVotvVuQWdJj4VXYVRdnh8ddRcLkZw3LpowkruJo7YpUhSbMMGWDGXkLpE6",
  "key37": "3adt5ovDsdRG8C7cSUooqkXUFraLZD4pWDhRoXKvLjD6af1XbXXZtVa3tZkvP8xBwXhtzTF6KMA3i5rj5ovMpfTd"
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
