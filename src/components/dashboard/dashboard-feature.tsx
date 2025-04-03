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
    "yCozpUxWpPjuuo48pfMpBwAiGq8YwrjQbfMw4srsKTbv2QmGrnd95br32kJipRhDZyW4aMbDfaAkN2PV1QjXQKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jBVdxJvAjGsSqZtCsNakPC43Rc3MoMzgCQ9Snci9wq26NZGXZ35wnCqnC7LSeZ7Bma2Fd7z6AdCoPXkutZLSLHJ",
  "key1": "3syVp2D6wUk5DEjuSs6dcHCyUsUnhTdcsgxpQLx3yD6a2gV9gMj4HwJR1gEgiCKDmRAGHPphkKHaWtrjkp4Fkv34",
  "key2": "4kjdC4CKeLkD25xxCqtArveKNPzrVr61E6QwnUy8jgwf1t7jcBcLpXgPtBMFduf4SSPTrfJecnW7Eb2xgnFZubYN",
  "key3": "5W4nhs5mFzytCEAboMgkM51qTRSu2CWVia1CtZqGd2Ts8yBkz51Nwgcb46NM2S7ngtktsNdxgUf6p4D8NnajL9Dt",
  "key4": "4JSXcqcLvtguciSWP3aL3izKg4EhABVNojmkS6hfbC4ZgEymYLdXE289zUJ3BpY14K1sWB7UvNbboFW27q9ZeUwQ",
  "key5": "3Yxkf62bJJrMRQho6Z6d2h2gdj5FfLipcmGqkZzNLrwxr1bRkge7bgLKCajKLW1srXt8txy6Svy3teiYsyfUxTrE",
  "key6": "4rTbKBoYZBuWnp82sjC1mqPA1GX2rbRzdFBxT1rmYsFYexraYGC3NGfHdfCE6SxApTg9MWvD8zwSycHzquVb3apE",
  "key7": "L8Z87Pk7vPPDLqSwR2BUX7G1AU6H42hktavKTPT8XWAaSAWitywGee76Z7gyZo2ZSo8XHgERB4QTqdVkkfFtPLX",
  "key8": "6JdMsCE94L75LqAreoid2c2PfF1dZc5ytmRGLqo5EPZGafr5RvqQoh6otwfAyfdU3sgVXgREzjsZrjMZzyiMyTR",
  "key9": "29djfcZdN5jiBSRcHjkFCErZ7zsx4qdLjvGjjo9FPPp8vohrCqzCD6DFd34JGmwN2hVgyhVh7tBz4p4iSmD7B3rm",
  "key10": "386gZQ4s8DPqAbcagGPQgAiNei6EnHMgCWokVZJs2KjddSGozfuEJAXhmBpdwEHxim7dMcWppuKGF83yea3EXuTZ",
  "key11": "3dqBRaQN6pYDz9mztgoRsjTyiSNbVTPnDdUzMUM9m2QpUzuXTCcPQfALFsW8SfrBqVdie4GBoew9mQMKXupA9Udp",
  "key12": "29WjQgr4p895zuHDDs2U5f3vWDH7vyGEcttTajh24LzVwj3GmaYPntPhoJP6DZrdkizL9o1xU7chPDNTyevzJwjA",
  "key13": "MidR6NhhkTB8uzR2r5Er8SrdgHibLaAGsSQapDsvaPET7jig8SZ4xGMBM7mui5oQE5vUTWtvz1BpkzJ9cB2eVZP",
  "key14": "3HqAYtcjvK2mwb3wTkMhPbYmaPKfTwQ2z2cFj1W2arxbP8LG51nyC2yC87g8CoGSwY6cW3LpH2umJ2o5GVLnPzca",
  "key15": "5EHM17vzivFkqQBggbPhcrEmFjFsLjKBnNoDJJNhoznSUhPn6nsWtEpXU1L4MYZP9ystcNKqRnTpiG4ddV1xvjhh",
  "key16": "35q3HCafqaNCoq77Mu5SPLHKCY2oPH5jrhQmU2R1cZF79Wm9TnTYqsWgJZoRiU955rPej7moYm7XdwEzvciABSTZ",
  "key17": "4X1jJqkTRGuXGvr6jAS9J9Y9MNWvUPcXUo66AUnynvbFY2PQQxsNShDYZbxstSnHgFzQMVRN5yNQDr3ZRdC2dr7g",
  "key18": "M5byiEAxMhHCcSTHgFhsaQEfiVRUuEe9jd9xnKToHqCCjK5DcpkgujvySrCMpXPCsjDVPuMa3CDA3joe3b1Tn5c",
  "key19": "2TL1gMuwmZiYkNit5k7haxCNj2twLnoJGpxudXTUSCxe2P4CaMmRGfHPfjTqFiXQKfBdpCqnQTM1oERutTjKgy2u",
  "key20": "5BXimn8tK6iTWpdviRT2u6rMMg4cXwhSEgRnE7GQfHgVwjTFcexUXQyAufGoRq3hPrBTYF4ybcmpmNmvC8if416P",
  "key21": "3BBzkK6V2xh6QfEHdfLgSzVx2rZSV62JotqwnrxGggZp7KkxN62wRvUg3oNyQ7M43xux4bdY1RRebpVhb6XCTc8k",
  "key22": "3PJa5BnycZjz9b7k7vkGtLiafyykQYNoWAUBpQyPvWr5LTE9CXPGSUwFXAP7ydktrqMiADe6v4uY9bTqo6Pr1nJJ",
  "key23": "5adJaN6kcY3Z9GbTwzn5UAU46zga2UzMAwFN1W4SF8nDnsdFaihTw4tgPhg9KWNtwJ3hdE6qCjYYYn1HoHi5Wjyt",
  "key24": "52J2zoUiWdPDbyj5NKAH5vfzYMncYVGnYDecNdfHmE6GDyksJjy223XLZ54ZMX5zAMokTpytRncjLKLThebbreMn",
  "key25": "2ibmxyGTLnrtdE1avncjhKfK8fix8EvdiWfMjPrU9VuZnoN8W6RqzQN4tYcT5MpZexjuKuXHB8U8jSiVLvxQS2GJ",
  "key26": "5zeQPHs82gyzycYJCNB6tzfrXuXDJ5gbEV6iW3bKwZ8Br8esxA81XNhbq7X6mTi6Bmco16UtihM3FwvTEV9YkaGn",
  "key27": "4zMsnVe7mNSNJbWv9AULdHfweuyrkuoQGJuUpTNVZ9WXgyCKHavAxXatMnrhQ1eZpgKtJMGSEEL54Fc5A7Qtqbuw",
  "key28": "2kFzVo8VndefD4oZF3DjzBKUjtSmULw7owUkzmU4uuwKv9KnDYYJs7SdGEvmTt8jn94JLKmdAwWNruNxcTeakjcy",
  "key29": "2weiAbNjKbRi1WgekyBCAQtycwqWY7cjQW2MWQqhNxQ31sQcftAvTNspwG45wikJ9g92qHEj49wzpamSm2H6AoXs",
  "key30": "2JTtp5kAhqDaN7sY3EmH7DtBBYSQaMSFjGst1ZaiK6JRy7sXAxhAVKGVhzw4UBJc1XrCkYT8WeUyzgHdtUSG7Jpy"
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
