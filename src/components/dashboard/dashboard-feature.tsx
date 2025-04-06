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
    "4QVTWCkigpKA6VGDobiaLddrbZRfoggpZDEL9N6iLDive8pzW8d5NdiF8WUdECDCtZuvjH8ZdoY2Q1pMPtHLwpKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bR34MoJvSdg9VPb3vB7rDpGyddUgA9LfctzsC67GE1sbcPM8MDbC8VN6xyykkb9rNN9wRPso2oZqFEgPTRP8DZA",
  "key1": "Mh8cngJwDMfxuzDxPKkn2fZgcnZAdBxpYyTQpcFQk1RM5wzvnaovVUZrLicuF4KwZBNA8pA5LMYeHZ4rLez1tSy",
  "key2": "63vkiCABPChY7ihoSFhRaXNvGRzAVxQgC8UtDkaEebNTLnyQkTfUt35sVimYQzpjMtuiLu7SH4E2bApaAauL1FSC",
  "key3": "5iWw6xXqXLJUNumpSuj6fo2yW3iq9mDJG4E8sdU7vVcsK6cMCtKGiMCV4bQyYo4qPYziDu1iXzEFg7hot7voh7ZD",
  "key4": "66ty3ykgecfXVKPyyy5uDYaZzDjLWuk1xYphR8i14qUaKWdBFBy9oPPprt84JDKShvAoUKDTpFQG9kCYRD3a8Nxw",
  "key5": "3JMboDR2JzdzRTP1gzCCCXZDWUYnps9VVz7ZCWKAucXkXg8ntgftRYi7qNX5pZNxeooXixtN93vzrgvYSEiwmgyQ",
  "key6": "4aw28S6RBJcJSD7KLDxYzx3BtHm2XyiU5BETsPCX1uJkid7XqokP3g7ji6PxUVz82tzKp8KynwwLwDRxX8aiu2N",
  "key7": "fsTLE9g95cxEbg9KYYpVqbPX47wV8RioLCcUQBu45FhnzsFmN6sE2VWvBMc3uXs6o5ceroQ4DmZDMwTrA2nMJt4",
  "key8": "2EeNhEnWGQE48WJ5Psmd8gWkqQ7kZJcdAQ6n2N6MonB16ZmnAtk4Sxh1hwDPjyAHHJuDrtd4ZKThpkjihUUv4fVp",
  "key9": "3rRTc6Bx4qVmPz4Fo3JrEQjSLsGSLWGg9Bm1vDsJvMxG5G4w2ecm24tmAkKEHxJkbpLfR4pLZAgV9Eq3KcXRqC3p",
  "key10": "jgESgWzWEwH3qMfpxcRe8pqwqzFwcgKnjUJn3b82pMbXvf7Rz6mhgLxe3tmZbu48zPSZka8pq8SSSyU8nPfus8U",
  "key11": "3itdo3So2r3PLhYurGi2XvAHCBrCGx3JsmR9KQcY1HbRwjE1kq9XUdnrN4UEVK33Yq8Y59eJYYJYDozgiuSzxm5Y",
  "key12": "4y728URBmrwSqzAJez5PN9xt2dsXJinAVo9fzDK1V1U9iJhzga31N9dCjHvYAYMH781BuXjYtXn2cxRvEdKZpvMr",
  "key13": "3mUrT1QHLXPM3CJkUQD8WongyrNQcmjKHfQoaq3t29Y1dRRiwi7ArvKD5KkEwMYmGbdwJQsGavHhF1cCfcrRu2Qw",
  "key14": "4YEwSvHYN4Kyvt2m6WpkL9wDZW6pRgJHNoE4n4Gw1Nd6GBtXi36jadECP6H1tk6ysYseCjBkGgBVakdwuY1PHADj",
  "key15": "3avV533rzZsPGj6mD8qQtsLhJWHvi4e4EkTyCY3WZTvkgx4xypKs5gJfT6p8EaAnYF27mMK63nVbM4UTf9scKQnK",
  "key16": "62Ht4GN8gw8AZ9bi9jJxrnRX9kqShLm2RHCcZsRzr1e5at4bJrQWb8c38LmQTTcM9cw1d1VU5oak6oFZbH7KkWAt",
  "key17": "5sW2kvuswMDfCm9HUxx952QTT3xeoSgD3MKGyqj2bzf2h3Hmo4sxqN75UNn3SCmEwng1aXYyUuUWRda1xaeoTQok",
  "key18": "a1b97kvm5mx2MNBNB2W1uQNnBEEY1EpsLXMptRaTTua3rhKNfo6x7EtzHJ3e8eaHbsaSA1sKywgiRtETeyTdFJC",
  "key19": "44vzxpivB4jy1ScQgfYY9iXDoDVyt2EAyNcEn6pkLzkHrdWgTA4xoNnfRFd4KQ3E5Y3MSrFCjEbAXnAsqpPH3hth",
  "key20": "4uxqUfVog7rTHjFq31VF3AWkMK1yXpNXQPezVBBYk85cZx3HyyPQnN69i7sAX4huE6tr8v48Zk9TMQycwJxBXZx9",
  "key21": "LNVMrVzfU1Csk8GNHyZSNoGvsCQQPVaE2Nm11oQYWj5USoVTbxfwLyKy13xxB8umURgDAWKY7zv363LALEFUYxi",
  "key22": "5iBh1qsnNLHwLLqc7e7yFucS1sAM4c5jM9hmK7VKgCWW8Lm7FTtBgTRGc8L4hn2BDgJu9tmBp4Kuvh7rQnzvbmwB",
  "key23": "3eF1eN8xb7gxQKoGzw7WEGE5P9akLEp6JHq5QT6GrB9ZgBuusLYy3dNfawDZ7zBC597yxTJHnJM5PW8dMBZmVumT",
  "key24": "3ZfRsG21XmoWWpsxwGaDLtinNVCQ7o1bbrspiKahfgFQcS9gcW71uN7TWie2Kp9DonR5BV3KPVMBQy2gUhiTrsRj",
  "key25": "5JEwo11jnNHKTwfR5GX6zuWkB52p2khUmWWkFBSBi9tP7gQGRrz7XcyshMcuiT2tFB9tEEPgSw7cXdoH4xTgByzr",
  "key26": "LUguRiCb6BTC6EijFQzmbFcwNLAB1mkk26sJXJaYx1R7EFcu11bBKofpZy8MzS5TSMb2orAuNAwnToMQbSM4x5u",
  "key27": "5yP3tsJLiDiirpQL5K6JW35xUgDk18cWUsH15Y9dmEVhvjM7hquqG2VAZDfyZ4VsxFF2LM43zmx9XNs7PNb1vHJP",
  "key28": "3xmiYhe1N9RrXMftA6jHwvXTD6hLviuxqoZjo8vJAqR3picN2MEDeKXTGC7gww69svt44cbYWNkVdFoFV7cdo2a4",
  "key29": "534ZFk53WFzjX17GjfL6UMryqJFJig25GDfTrawarB8NM61rrcJmTARpN6tynjPe5BUxDAGCTd9Sb2CoPPTYk4Rz",
  "key30": "2smBf7vw2CyzxsjL93amfS5Yi5qHrbDCA3CudfXaP7i7kjBaZipL3MRYcsD5agEVXThakAazpn3kHPQHfKLfnUkm",
  "key31": "57ZL2hweRsRwVNjXHzWyt9ybqBZ3PQHRSDxTxvCsFFb9pHpEiaRzmr6fFTLTPppXsRkFPDYUm4gMgWsVXej9z8ro",
  "key32": "2gybEcfYX4hzPDVvWiHbnQYnyS5QYJ8o5ZG36RYZN8m6xq2wiwPXbvtJDrT8qRRKwvHAKnx3xR8Exd786pDDPcUr",
  "key33": "3QnUti3vVPujVDdJ8bChatoRuQvJZw1tkMoGnzoMu7Ezfg7uJm1EmK8cFEGyzTHXJqsuJpSquiSuhHRnG28CuH3C",
  "key34": "26RZFun8tLgTxpHBAqs3QFdpFhXLRRXWqyWUKWKkAkVLuJPhtdUxR7QecmvPGEvPaey4vk2qowB1FdSSuGasoXj5",
  "key35": "6FHGZWTAvn1pYBgshVrgdhGx7u9QZqGHwwbXwBScgKrNnQtbFZRhMrZLzRnHp77DeLw49pUrMkvD4N5ybZxhYVN",
  "key36": "4QjDw9MY6TxYLrQ6H6DG93mFnuvN7jShQnc9HQwvTGKUz9GQ3H534N7N2TzEadBWJj768YTv35kWCsoor3FveXda",
  "key37": "2MMjMqgTbycZbRtUy5bNxXeNAdBXtJ3cf3RvR3xfPkx9PJYmqsWhgo14Smm1DaJjBnasWTWrhLA3qJmPVtv6Mnqr",
  "key38": "2AqNT8E2XZriF3URWTPBiPTVtgt76kqPwEKF2hrAaL3MtLMAvo57JzvtYDHdbB4uPVryf2k16tYsBQ1yXAff6Bwi",
  "key39": "4R8fWqf1HKGSn7fX2tHEBMFpftqnC374iyLFbuDGu9xgEzuzwZdqdE6TbgkE15XwmVsBs2XWG9eQFJFheBDRSiho",
  "key40": "3QRBhpURfsNJbxYbQxjcx22LMjooXfMeoYsYT1krGguj7W9D5f668748BxWgddtEYm4oFy6KwNEdjCgkBhMmz8cn",
  "key41": "4YsjLk421TsA3dzM4iobjkF2K1T7k6DBRv1XiUruvnCz6FCMewTtq426Nfd7L4myvvkEieHDX1HZCmxtb499phJQ",
  "key42": "4SNWXGvGNUwxZQ7x8CGx2JojSB2EkNHvSedDoH3LRyH8ySeRkSBC1mGE9UGmrMxB6Uw9VCMwvd2cyZQLgHrqGxGd"
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
