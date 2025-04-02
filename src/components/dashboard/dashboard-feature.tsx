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
    "438yFEQpaESTTP8hHpgE3fxtdv7YSNghPCh5ycMja9kvS3qMUAZvDsQ7AKPZJoRzr9uhVVDpR697f4Uu4a8upBQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jnmppCeog9yaB4zJ6JJhP8G9FvjCVbpfosWseBdWvdpTJuYusCm9UFfA9pFaMLqH1HqXBg56wWdxdtWEAg1qdDb",
  "key1": "3RWy1LuaVBCP4rQ8Qt8ctrwv7fX1KAMsxDnSjkxsfB4oKo4m5x2xyxXntWnJjQLa1VWEq4w13uAB74m26BeECVuv",
  "key2": "2Lpxm3FxpZ6gE7VGGwrLyzWsQAP5JGMb3ZbtnyoKgo89QPaNgUR2LxxtDuBcLzqCGbo2AmmnZWi9F7XCXgQ5YK4i",
  "key3": "3y5eyjym5QHE2MnM8XjH3t1aCWoYB2fLBEUaT1wwvZj4HowQyyWxAjbnnXcfvmeSDr8iVJ7Kan9qru4nSXttCRma",
  "key4": "4gTfMuQyQykVW9hiwgiyuFE6xYs6nSPKpgke1DrDHdemCZzNBs32vqTrHxyStwA7fMXqKUweLQN9NCvA1GiJCxuG",
  "key5": "5i7sjqowjjUdQwe37hCgTNm3VN26aXNEbEJP1zSLezpLwpiijt9GAPuwBDNWXRdEHkqUHa3PrUr9LQT1oRULeHTt",
  "key6": "BRvoJ98bcNFbeTThC93VA3cHHMLG28YWNbyANhDLfRtcN3gM3VXpGK4Jw9rRwKXFQfWvaVymLzcG5Djv9nmXUKt",
  "key7": "4qt7Fx8HHgRvB6Te8vD4Nsjyfmx6QKQjqRqbiZa2U6TgofKHUn4WfFZRZPF1Y4rh8kCE2vmAesk5EhXU8zgMuvN8",
  "key8": "2UC3NTxz7XwtuRXVKhVDw1fTNQbqPhgKiX7uPkD58d8TBqf9XMfU1x6JzJRWu58wWQ7mMLuFRuMD8b6AuxRWgnqT",
  "key9": "2Ngux9PUsQkjhycPt8Jn4q1gHWMVjEzJPC1SvcLRZVGjHHstgP35L8uosRnoQmfn5o31wiosZE1Yu1HnEBrzGyqV",
  "key10": "3p4tKHvKdoPzu98aoUFYZzHjwLc7ra24TMfEyZNE7QYuest3JvvvTYKEjCUNaidfrJ4yrfa66QkdtvLQhyEYd6LW",
  "key11": "bPjkp2vkSLP7x1DVyrvcQZpJjKosBAwfsrF67UvgTM6boHRrthcxryupYx6eeJAgsqXE2vye1qthF49tfM5mAvG",
  "key12": "2wBZLxhcfKGuZ88tQJPvL9eyLfhLMKCSeD98SZxc4dHxGH92ejQiWUQR8ARtCzUFcSoyUToH3ctcSyABdmB3Mqwm",
  "key13": "67KSLiinMaNzkUQQdkrud35y8yL51hgo43wtcbauu5be3YGKEccjP8w7i2wErW1g6LpoCFsnSpManquFdCeQAoYB",
  "key14": "yjNwEk1NetvCFU5qrcvfFaPFcwNmsCFHHxgnNMmDueKHeEZnFx9SABsYgsJWu3gmeKtfvcwCH493S2k3QMShwn8",
  "key15": "4Qzjs72iqNbxb1R1VTUvxZo9h5f36TGEgkkCK8FJEoXDPQXoGhnC4G3ZQfPU93GtooiBB3wUJ96P22aELbmeACYt",
  "key16": "3d3NPFcyqcaZdUQRJfNr23VB8PKbCeh97PLKmVkCyuB4w59SUzc8fgGw2ivVu1z3oBAQBnqLTdh45GLax84AiXgp",
  "key17": "ndU8nTwN5ApvsfPxJiYgTx48FyLvVHyWRrxCYmd8Z1wJ5zLN2yS3kSm2kSjceFWKHkBugf9kWy5CCN5h5QPqUkH",
  "key18": "66fVUr5s9FNsYGiuMziNzHsbpQhz4JyzVrKh1vDWPJnj2Ne2prS5QHSDUCzbbWTNjiDBZA9MPjuxRMemYthmdV3n",
  "key19": "64tTXFe3Cuw441CLm9JXi3n7A1eyv2NYVX6ZApVADTJDnYyrsPnNkECxeot1or7wppMKSji4oYAnhmfRd4X3CKTx",
  "key20": "2mj1f4PhEx9zSL3dqyM99pDDQP64WHfNojvWsRSE2U8p7bwcoCMbxEBZNmxU7uZgVQq8DmuSYa8WgReg57dK354p",
  "key21": "RxzRji5VenP5toCYRjH3oJvM5MMm2HUTvq64wQvNB1YdyUSpBDYi4FtZX3wVJXu9p14XD6hn9Nrus5kNVnvXxgc",
  "key22": "29M9rbZ7mRqsK9guiyYYw4ne3dVNztLcsgojnYCMYag8uffg17YT11JSgpNa89aq6AwDokE5MWod5XU9k36hoWtR",
  "key23": "xvtdcfEckgu5C7xcBbPdMC7q4K8JpQKx5wxEteBxPcBQnFvuuFGvaxckkPqjED4koQYRGkuTfgk7avyq63LX6Uo",
  "key24": "3rdpNQdEC4Kx5TkGzCsEqVMZtgN7UNiqiGGD26Vc9YJZEiKTTCfwxXFSwuGv6RpvyWWQecdg16Wiud3fBbwSqHD9",
  "key25": "2rPDBmWCfdyXiVSGXEAu3sgvU6UD7F1U47MuRAkWdwHrJMYkURADoKtBrMPUPdjbSgsd4vVfHN13UuH3yxE9KhDt",
  "key26": "5DxPb41NmSkuXgJuTXFPkLovkRu9Pqx34UzC2PSycnBYGoMg4cthWsYRpxZL8A61ten457PtQgDDtCHwnKn5dzTz",
  "key27": "2AdxNmdnHKJpVEmP74k8xkF9khhQebZpCuUBQLtkKhk6ifCFsGW338dy9iCzb5CqWepdcV7RcKpEQxikHY3mKmuJ",
  "key28": "3RWMxVHSgTw6tgD9mj1ocbahA3RyU6jVND48Z7KWTcpdvmaYmscaYqdKHFNt7dKdbSmUouBjCGgiPyH1YXtyVg2p",
  "key29": "5kFyQxjJwKBmVBcmseL7jyxSy5VFaWKaL6fKrVSL5uQxni35JxRZJbZ9aNVZw2uByNUSeAdku4yNcXgkwqStnG9q",
  "key30": "zk71VCnb5tfJQT8ayAPzB7o5tHSqo9eJEiBoBWhin7vc8UkwXE7UA5fXviu7LaEbhT6y6aiRzwBnQqg6Djs1Gac",
  "key31": "21pzjG4KqTG8agrtDL97HpcwhdtMSZCSsVJaEd6bHr3A4HfxzvdBZo1MaPzaqcrZueCmT5zAB5EF3SWNUrsK2ffz",
  "key32": "4ihkLp6kuMmrALjrKCyBMmjiu4PK8DuwMXWnjyAtJT4Uf5Qqz9KoJtQNzSpQMiN6qhyF7K7AU7NrxFq6WoVESEXw",
  "key33": "2wbnTs7L7nXjsqgJG5nRjwF8gw46k3qzfH9Q9GLoWo8wX5RcNdmbd8CwRbTHcUGDxq7b4Xe6uc2HaZ5FCz55RB1A",
  "key34": "3MQjufLCyAvR5cXaNZyhKYjC2Es8qtecaug8LjEKGbFzucyFdxxKrTAR7a8Kyf5hbtENKMpiBHYNHuDPZ3deKJSH"
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
