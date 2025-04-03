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
    "51F1Dm4Xnkju3m18yvgsTbRk8LT7oVFTUhTCcRmJAJP96PgwPZaCMsxY4XvobxEWjErVosdcpuwWERUV6yaMayLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JBBhtLPN52ou43on3xzUpZ66NJk53Pfwt5Mb4zXtRNZKEbEGA1k6a7bJn6GUbLwTCrr1KsuqiAcPM9ZVdFuz9hu",
  "key1": "1NJUeJCuUdnSiLBSU8FP7cAH62uLQfrrFYKgpLCBHNzVfB6Pt22ydkTuQ6psmXPxtZ1YWPbNsvZzNF79jViaHyi",
  "key2": "2DF4RkBgkyB8aPBeKQN58dCV4zptozxEquNcwYpBjtjZngddbeN2CGtD8gPFS5JVtAuDb9gBELn4A8todmGsR2E5",
  "key3": "27zWR9fpYnzqjqFHij2re6uaGxXn5ET8ffhacmLye9pxEWrpRKH6ojGAm39wMyC6seW9SNQBGa7urM9cX6FU7Bru",
  "key4": "5rfDHfcXE1VvJBQCf4ePSHAhsfjQC8yQLyptAJenxq8UPWRD38ab8A6V4Ph6HRQyThFxdmnvEkcFegyNCRjRwnpQ",
  "key5": "5zhnCGHT7kgSu9EWiPP4DwurtUJki8fBMx1KNNC7shtpqi5bsguxW86ipmuzu5uFZiMWzhPQiVZPvsLyCFzHYqEK",
  "key6": "4WjHkC3133p3wkQvNc5A2ujXBhm7oykn3xNP3xCyJP2BBATiWtPU6afV2GBCkaxdZgPNDjqcM4X8ckd85UV7StVu",
  "key7": "5cMZ7cWcaFkfp15S1TPJRUZ8qfzJcC4UXCnD1g4c1gqryVUY5LyzKj2CFn3hTWrQJBP8XgobxkCZSap4VUTPusQq",
  "key8": "2UkCXMWC8GBQiAMutgM3ErbBfFTYMM7gm3bJMXTjpXFimMWTV4tMARUzPevT4GxEMe5fqCkZRnoWyZDFXVpChKA2",
  "key9": "4eyGciyMQu4Q2DpsCxv6XtWWLQ9yNxQb9KuXwD5LCSAEW2W98NRMyHoG5KTHN4UBbUCRXxj1ynxzmCYvBVeL6ppy",
  "key10": "4vPu558RQqPWQTxBFmhXBjSRjkpQJZWuGudnSjXT4aQi2FvvMnefkVguDHU9hmMXCSQFRaXHJTFNTNzQp1HWxXyg",
  "key11": "2UngY1c9L5Z5Q8p5mKnWHhTsD6nNyS6JdbvJP3hrDHoMdpURrfm5vWSswddr45UAoDeXK6Tku6T3q2KcJMyQfUua",
  "key12": "2z9NRLx3ED1z5cTY1fU8uu5zZ9DkZQ16WpAYzQ6X2rN3W27j8odKa37ANDGpKGCoB6Ao7Qojb4UDrauYX86ejV1z",
  "key13": "3eC9Uncsss7PgrL8CfsfZtRiA6YLRbvzpRCsms4KFrsQadE6AXKw9tk8hS7bYEHB3ghwqKgsXsFAExhkp7E8REXQ",
  "key14": "2qmNgHDwW83Z8TjogRkawYVHRYj4ZBjwBk4toR8M1yndV2EB4cKgCGqaGjYynd9QEd7694UctJqPWajDRjJC89Ti",
  "key15": "5jcqFYVtT9W27GSGuFhkKHKbiSyfM64AK39jAJzVgxkiKV7oNkbQP4AP3yp1D3Mf1Vttuv9mu4cAf7a3i4zaP6jd",
  "key16": "4gR2GJMSYrRR7G3uAvHraXMuEgrXDBAW2kRzjM1oCg81vQYgXNU8CiNg7ti7JYXz1uL7ksdcWytPUJH9Zz4nDKHh",
  "key17": "3KCczXJkdBrJsRN81TN2pTcwJJNchT1nZAeviu162x3RZf4xLLGf3w7G219FFRgttBka9MnaP1euujCZPgSx8HXn",
  "key18": "2bBR7r85DuK1Z6dnaRYGUcW8mtH1Gx3ha535LfEEKfJqsfwac9gpmvxMvyAoDPwaiwh2fwD6rD8aWxELNANzXy3d",
  "key19": "53ZuaTWZ38F4AyGWkqsh62f3KHjxDmAu7vyURZXHHeaFXALir7VV2vX1yzBuXCecKBGkbXh4M3WFKebGcwPkxFxD",
  "key20": "3jJYXwBxqk1RsP9R7afd7HKpDVogce9njDZWrmtK9b8NB8jv9qYCsWTKRDqHQxhcaxaRyfRUwBhZeasYRh8nLdT5",
  "key21": "3hapkKKQzaejPBmqNjfNy5KM7CFQbyjd5E7gnemDrmSKTsmKpkaibR5Ai22hQYdCuRiXG6jafDyDtoAcY1dWRvY6",
  "key22": "PZASPKmTgqMahcCTo6byhhRJtP6JbteB4gjR6W919fKa5iYQ4tvvFRQJiJULAUZ2mQM4oTNGHiWTgrA86FxuL2L",
  "key23": "BkQbnWpfaLg4pvGaFfAd2rGhE7KuywNjwNk5nfXC4EBHNc9mivQi4LnttqYGcPRqHNKsRoCauHgTuh3N1QWD5EQ",
  "key24": "5uQuZnvT446sYSi4EYFiqvbk9XPQ7hDM2nc6F9HPkiRX8TfwRi1QWpQ51NtTzY3rymNwhBKDuP6wrCvqn9m2i7Hp",
  "key25": "4uNE3C3ZZjUpAAsH9nj4QCXteEsyzHeJ4buopUmqME9aoacTX49ohJg5X6nuyjP3qDzdLBUkbCQt7HYB2KVVWufC",
  "key26": "4gnH75ByRjD6MfasDpc8TvMkpgEe1CepdcjDwnH5YTVfPqaV1i8RBRxcok1JjDPfe1ZJcusNnS8k9eZgezSUMX4E",
  "key27": "ahvAWHjKDop4PSpH2zxtntTjRNVVeboyqx4nRaxNQoonyMhQkH84nNYfwRAzbhHxu6WA5RevHtsP3gVzLgTw18f",
  "key28": "4hSNjdgZzUc4hiw4qpAnfRUTVNgiLEANajyVs3mU4n97EEGgjCC8MZ4ziZC28qNVzvJoWHQZpJVAeG1F29vJnPWz",
  "key29": "5UwBFvW2xGf7CD1hgdrviko4LKECbh6Rttc1MsqmmF3W1XukWSxY1GkeVy9gxKe6QobY1p6norHAgHEAgSqGyGqM",
  "key30": "fvA8iE4Z3H9jEgDKMP6DhzrqPUF5wHWnSkWiaP3HAUVR9Zc86HTd5MYRWW1nujonXNL4ds11B6bTcu4Rsb6fibu",
  "key31": "3z7eNrkLLcCUqA2ruQcTD1Va6j8UskAVc3QKcgvUT8chR234rS52Tja82GVTwkNmkspSZ5MZWjqPyJUMhLRyEsKy",
  "key32": "5id6X4hNDyEfnLg37z9kcnQCnR4xNF3V9i6w6zpDK5T2yo6yDmmx2T56zaQrNXFfe61MkPCm3EuDcYFFn8BhxndP",
  "key33": "5XdmmMHbtQV42cuNmqqFXXMtsA5EBuYtQce7gikQ5XHno9pgC51zD5vcASsQFZm3GRUabyu5MwBpTYHXZ87mGFns",
  "key34": "2CvfQtWDdSRSMtMxNfftTaMa3wNT2e1rUbjBbR8Gkj4TKuQrcW5MMGMACbNSghsZ1HkdJpuBdgtJ7U3HNkJ6NCpu",
  "key35": "57bCtQJSqiHNdQTo55fE599aaYqBVt9jmiDp7f9iVyTWzGcJgkRMwwMAhvW7FnZFALHVANMSq65fkfP9xhP1oGxQ",
  "key36": "3yJuzmniRRKshknYpvafVWYUUq2NV36FxXw6MrXGsnSjvLJzQaE4os1NrtQSwPfsV74vVtsbrXok2ffS1ePvow4F",
  "key37": "5mYMd5uBWD4G9fnPACRhncvHMK6qGnFV1DBhYX2fj4tasibGa5oqxyfwh4NvAKrGvUkN6coMnW6K9bwsbGBkcTyF",
  "key38": "5esBmf8bsKGitiqUKkf1U2VNdh6eheceSGKikfjSHiFGwVJJfe5ATcbteb1ZsnThmo2eVyQfvm6aDvtvxmcdWsWJ",
  "key39": "ppmEWqMXPeSPkK6JAYUfgKHw6kT6TNKmNxzCh51qqETGWfpvN6E2dwy63UqEoETtoiVJJa47Fhq4Pphm5z6SkNL"
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
