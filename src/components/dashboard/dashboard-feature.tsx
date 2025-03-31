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
    "3aE4TXTXY3f3ECmfpGfoWCch7qyAPCJLVw8ZuenwkK5vVueQQftTnp2vy6zmDcDTWGV6nTPRAzGevoRKyGZ4nEfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V6yrW4z4jbCrQkgwYSTWzaYCJ3wKtzkkMJw5a1rBDCqAdLyAZMmMofqhLmTDF9EXTcxc9rs5eTnTUEDTUABwPbB",
  "key1": "2XRp2nAtjrqfbBAMuyCLX9guUsKG8moZybnLgUnEjmGeRHYACA2aeNbVwJXkEZ5eKTbEEnBE3VBFNqNinNaxFGhN",
  "key2": "3uqwD4YwUsusF2nfKU4nq8k4YMKhbKJZrrs8LeLZnrP1uXAHnxJGyGNzR6X7u7WN8tdLXRxVNEXR3xy4uTHpaxjK",
  "key3": "48cqo8YbxCrbXZyXGNzQR9adg3P5Bkw96z3hLDow7DY9op8UGUNXUmPwVePfbb1VDggGywVhDTDVfXM5XNiXE6Y3",
  "key4": "5Mnft4JioeSfCEUxUUXWbxqcNGQ5vfAt9b5kzwKhKoSF8xaq8gMTNLfDdaKLyPaQsvCMBCd6cRAgQ5HL5fLnmqap",
  "key5": "4TJEcu6xxF3Fu7FxijFSLxmD52pgdpkcL7Eqm8qK9q2Hq6kepzDkERggy8nfrSC32NrF3PdKJqVAtHqP3PjNcRyj",
  "key6": "3i33QZHLS9CWZTeR2NugYYCWCQhwndwDpfpayW3pNyvsacpaUDdkpEkJ3zVhscHTbdz7KJ5M7JaKbWemMP75c4W6",
  "key7": "3LekVtk7EybsvnxTzHyvfaQsZPaqWpAgFcgBpQUG7HqMpxtjW2UMUeqKTx4rVeGzfNsXPdUCSL5ErxiKvM2HfVdA",
  "key8": "3yvSWG4ifN6QksgRywcSdCBT5mPq4QmZWnYXrEjSWQMqGudEZrjvurTGjqWdKfZcZBkK6gehkMTBYqvXpJfXjpGA",
  "key9": "5FAiWURQZ4up55PXSLoKDTHhRxUq8dRsqD1p4H3Qbb8n3652KVS6ovh7jET2zttCz7GTe5ZPoZEfmKYuTrCNZMJp",
  "key10": "2K1zy6FzSy4LrpwbVLpKQqWSYw9dru3xhWvugW9HAtbPthHdQJa76rNHLNamr2kn7Yd32B15tMXRrJ4MjcdyHceo",
  "key11": "2BxHSv1Hbrw45y6xQefaN6Tfw3wdxsFDHztVTGF2NZdCeev44aXLmyEKxBxPmncPbcSzJnzC4mQxMzqs2fEWoc3z",
  "key12": "3UEue7jRw7pjcKsBa1f6GyqVvvsjuqCbqpDXptRPDQjZiJRMVRhYbgRCFAHCQ8zng2r2NZGAuYsGZVocANDJcgW5",
  "key13": "2hACn6iMA8imJptZTxX2YapMXVUW2dXfK5KKFKGFb9JfdzsTdvmpEd8CW5qzakZJNMreCqExJqr7Z7bXft9Pted4",
  "key14": "5xtjoH5qfYKaQ6JizTQBU8y58RiaPhq1j9d4wFmz6F8SiHX2FkYgPv3ihqgWyUQN2Nek9urJZ48RoCL5WLFoBqZm",
  "key15": "5612WVyqanfdgoUPzFHHJXfSErvM2XhTvSdeKi7KHkcTLoCewtXzv3qns1gfeg267idoyyFYSJLGXwn7AQXgcjoZ",
  "key16": "5j7MRrKwb4iQNKoQsKcBWm5HjhGbvVmRZZJK6fcs13Bg12uWNA22YrBgSt4dHoWLW6Q934f6TE7UndoH34daqRHE",
  "key17": "AFjL7M61SW69Dwuc7HV8B8BoztCHiu4qh6Fr6dTENgg88bgGzzYnkktLy23SJ7ogTSs4QWsr88ZdFRbrDdpD5i9",
  "key18": "bLsAFBi4qjwyVMLPgpXzh9JDKYijEFzd83SHkoG9pchLdihxqUSDrp7ToHiqGd2xNVrXDaDQpZHoMHmCxNdCUNL",
  "key19": "66SgdJva8Fqq4JuEa9VrL8zxXv2PoPjUwiVpYpCftGjVBWZqrxyUGgCcrvVK31z7HWxSi8GuihGdJzDAFVrcut7Q",
  "key20": "5YBHMYqzfykbvfoWK6ysq3d9ejguPaJNRapPCHqBg7akikfyUUhekuoiEwjfYq5jAG84xk3Z7adaoZo5rSEK5eLV",
  "key21": "5QSLhJWh3TgCX3e7oCDizpEDAbFL1dgpNVu8H2ZzJV9ByVBkYJcjkbMTySti11q3pWH71z7emCg6d7TzccshtAEi",
  "key22": "48nyM84TcMTg6CRsaSpSyjmpV4PgLXhHRHJ4a2mzbdE6kBz7MamTzL3q6JA8QqiMwiTwC6DU8qizgK3Vdv3kMjYP",
  "key23": "2HLToAMcgYiNtdaKzZRMMhKcjo79xxJm71sk8HanSAYYMbGcQz8MvRQj9spnUeUk1QsSQBFgyXF287MX5a4DhR8U",
  "key24": "dPCxHg57k6E7iz7d51dXrcyDQBQZwJzhLkpoWNSEDRq42FzzQCQ1jQtZxeBc1pdnn284ggz7N9XZeqv2Tq6xTjg",
  "key25": "pm7CwzrC7oDjfhXeh67zaCYgw4JAyQufhjaGwUxSN6Q539Rh6anMjZiM9FQUzrcsHhWajLUno4gC7uLA9k8vB2s",
  "key26": "nURNiKahRWyaetwEZuTy62idmU8W4mREsAytw9vofjfxdg3cwKqAo2XYLXKFfnoXXXr2fogQMRfgvpCnmuHVaZs",
  "key27": "5L7DK9P5JZ5VikbZ2u5okbKuKgtccAPtVLjBhWLC5FW9FHHKh6PzdsWNJnv8ErBbhXitmFZxe6CBNsJgZeRcj9G8",
  "key28": "3EHs54DnRTyYZzKwG1hJRVeCwZJpzt7ctN6PjEiwF5Yc1Anx9QDuMgiorQJtZqWQKYQFPei5GCiyAWxqan4xT2as",
  "key29": "3NWhMAzsJmkAUM5w4iebuWRxtW2immDVqtQ5bHw7Xb74FDQDSpxPafAkWK9A5ryvSuk4w2M9LxGwgHTmdHUvrEsR",
  "key30": "5GJbHcvaCd973RLF2YhPpGBVA83yPDzTe9oTxm3D8zAp51SBjvNSTq64TPuYaSM9REJMP4NJB8qbbgh1ZoojtP2A",
  "key31": "4tSU65dx6dMfxt9hBwua65WqFdTiu1wmXZkAXSC8CvbacTqiy8nAUqNxjphZK76Yvmys3voqRJrXiqFsPxHwxRNC",
  "key32": "3h2wwnB8grzGAnFDF9NBgk7GkaNZ5CgyByqcnU3rbjwkSjmaqtaXf7TDV2ccStBgA5Dq7oWYn8KonyhBE7EuBWQ6",
  "key33": "3o7UnqUyPQuq45PWfULPXUTQD3jd9MQuMRu3ezSi8ZCoahWoLV165U1xAa3msk4W9ejpg5FCYPox8WQaud8UpjCH",
  "key34": "2C3y6By12BUUb4xXWzxSEyYAqWfQ3bEX5rmxWuqQxXhrAAG79yrL8kAuw6jFxBm1GBr9pXDCUHQgGk8H2KmZZ25C",
  "key35": "3kcWsqYr3G1YpNBxstYcUF66jGHq2GYVdex3ePwZa4cU1r9mUSgDvcNUGoX8Ypk5H63r8uMcLCnEhBDgFoEtWjrb",
  "key36": "JLgFzT5dKhrF1mcxfsPboV4AbDrg4s6o7tvPbLsxZJK2ZZU5biH7gx8ZgKfcsu3pBXy482vpWNdwnnNBV1qZ2ah",
  "key37": "5adobpinJ1hSGhoaxDwU5GXvuc9YCvS7tWTLmpbUpBeuqVtvfYiDiweGFRmJ18hhZSmUDDQs4ZWeHMG212ndXvc4",
  "key38": "3v4Gyn2cQqAFtDK7m4MaVdBYNxq5N9RSW8vonkC4Y5YxPxc756FpvT4eRDBUhcAbS6xB9UqW8e9NvAewS6wdc6B6",
  "key39": "5vmCoynUpY6rzf1N57aomiJMZ5P661ZdM1C9TTDKpxYaUzBFBDMKZKmgUhSUzTPzSJxKMx37cBQXi5rwc2m2Nsm9",
  "key40": "33zgP59dmNJdwo4dakX4wi4ifpq7GFxnevyPG7QNy7HFjQT8uTs6SLxquXooFzFxzc8pKsf9kzasfgYdFva9MVyq",
  "key41": "3G9YYjTVDSbi9T69QTgdEvPBxGaawnJwLxG6uU3tnHu5ECg6CmR8aTQaRGTmPi1gx7UEzPTySGzV2nu3dkPH2zFf",
  "key42": "9erFwE8JjiHpq5anU8jD1nfzjs2rXJGY9DqYhXCSw2Cqun4CqEYpwuFW9CaPn3EquMs9AzFNW1ZRFYEbH7SsvgX",
  "key43": "3XkmyyDSitT6pm4HshD5dqK9SCqqL3ZQpTCpPRskrZVDB6UN5MkpVeko1BtmchTQ3GEk5u94zWMyJ9XBaRJHV7GT",
  "key44": "idCmBGxBoNwZv8VZnX6bbKtXXVCPyRKtfdSCX1Bf4FTzUytVM8rJAm3rL3JsGe69WGtod7zQqc4wHmavcdB9a5K",
  "key45": "3sRDLu8s8hokToiHskAJp7256msQ8SU1vUKrosQcS38qzx2kStc18HfbDqrK9gcy6PuF3LxkCBCc7T25sS1o28HC",
  "key46": "5oB8GYsZh56RpP5xwYc8HUCWg38YRKFXx29tM7oDC5GzmWqt5MtUxvbPSwxz1JrUhzWvt5XpbCSuce8xxtXQWEQN"
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
