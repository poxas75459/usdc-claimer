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
    "4B3Bgtks9WU3ACbALyyyWeyyFPMWnTvZcQQU77UZHpdCNq6yPJgvrCntk88H69or2w66AquAsBQzRjSByPDrAUQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jCd9TabuC3HK9pEDWdoxWKH8kHtpjvDtRQhq6ekXoznXjHDMUYK2Wv6AA87BaXmf97N9GPXWt7KGmWy9DykNwAN",
  "key1": "wxFfqL8qj22jBReL7aYznVeXMwqxtoqq9o5mQVzU9pPZDGWqGs3LuMuqDbFRYy1pEgyjdMhWmDek4kJ4D8WrYAP",
  "key2": "4qmaFSC8GvaoRn8dXPeeUgKV3GY9vcDtG54v3bQRv4odKbAcQ2749t2of7V15dhAq69CQxViuhptXEFFKRScigkN",
  "key3": "A6Kj1n12nY6vEv9SFeTfpcVkbqwwstNi3bNKYwgDAmzZnPXp1Mh4U18YZMdF5foiiuYniQkPoXAcpJZLetQ4Y4j",
  "key4": "2XphCv7upPhiGGp4eHuDGLLmH8356GS3kcypDy9tNeVM8eiQTMgLqjkNU7dm6SkRmVViSb6rD2VGZTFZEqdZY8Sd",
  "key5": "3YAkCnR2jdzzea2knSeJBG3oorzzrLpfQDN6UVk1v5cbhKGbTpdXSP9fKBzvD8KyLSidf4e5zDbfJ7hWUfzbvseM",
  "key6": "5Ao1LvLxtwQLPLaqn5KnXksoZ6NzZbtpwUWGNT71pK2LvZqp7wncAGtUmdPeyd8jiQrxynP45wGXZxhUJMnqPKUd",
  "key7": "2w8Wc3VwEz1JDQ8f21oUJZiNBYepcvMF36Jncvjpmpd5q7Q5VDAVYmvqakgnDYDnTvgBtWjY8A4eRneuhvktFVp5",
  "key8": "3nbASio8sKArpsY9qRrC8sprWEbh3U9NK5BL2dAeKiGFCyQaRT5YjnEea69U6SoLLkioecLbz7QNdJYsUwDzKUBN",
  "key9": "6r6i4pERRn4K9mAAHQ7UnW4qCtbKCkScFceZh9AvVfSbGq1MBRuX4dWVvVymwBhXERh56f2ioWrCPMps7yWgN2e",
  "key10": "5GFqtNjwFzS4MykAStR8pECQzYx2LhZiCcvSKTY5n4FAduJZAZ23XnkvzGYWsPgWTJP61gmoa5y3pAw2YzHx1Dez",
  "key11": "4D7prH9w38qusk3grecezC3vNB12LEWD6PvnmvR9G2Fqjfo39McZqLWLHnHXmAZ7N28AT6rdfm1YQja3nt2i2kup",
  "key12": "36C3cVbQRjVpZPC5ZXBog4dNRJnZy9LLRk7Fph28KnhH6LBxQFPdPwpQtZBQKmhEVdxvuou9NvDNhHftjncRrfPG",
  "key13": "5qqSucthpgf99EhgRw8pgHHRC1waNBvYXUPsfKynBeL9zn9R3matRfatkZg6AMWVDr3QJkcCW2FK1kTksA3tpVZo",
  "key14": "392gFzJYavATJ8Hu9PmKUivfTxujCe8pkv8aCxkgXdfGsNNVFKa5HFRpCZXMZ95Upt728EkFTx3F2rcAfiNDcd1a",
  "key15": "5nGV2Z6Z8bzveMEZYfL41QRWADrBHaLhCjiLaAsq29Y7AyqM5XibTr3mHkfBLeLSZjdNj6ryauePDBvdC3xGwbFD",
  "key16": "KmzvTrLbdF4arpsiqZZ1Nb8Zv6owRGXDY4nvYhLERyYNMjhhew3AtgRTxuRvW6BTMtTnUYmAeZdw2yodjhTt4sD",
  "key17": "4jyuoDJS8nZzZf2yu95YXxqKzY6wzs67hzuWgkkPuMPZ8Udb95wZ8pZ9RqbxRr7xVSr2QkMPxPPeJEpixaTw8Rc8",
  "key18": "373uBPzz7Eh8GsrfZpYCAtBs5UZfsMvEJjftGHoXK66FtphxEHRzseiHAhA1kjdXruKnnaRJ9mTuDdk7BSZB91gh",
  "key19": "m1FTQU57JRV3mkrGGNqKHio7xafw7WkGPu2wczXXiS3w3HDyLdVCcXGZWamf7yuXoKBoKqkG7Mv6yZqmg85VZjw",
  "key20": "3vSvPdj633kcSyTofSMYETxMkKZsQbE4C7hLqoLCT5mGSbKjWuyYumDfae83qnaUDMV7UxGTMP9CEsWDaBa1tK85",
  "key21": "3VYWnL6SeatdwHTnET38rDmUS9LG66shc6u82pnHWQBu8kvWsVa5DcAV7HVrvASZ6bFGEJL385dca8wFrohTQfpn",
  "key22": "22cW1qjAEMessUufBGAhLcx2QQKP8KZnRYNUpGS4N5WU1zNp6GHNzv3Cj1oSbMXW8yKUuYSV236JMNChf8UXYEpF",
  "key23": "29JuxpotM8yaTX6WY3entqgdDu6enjaDCRJx3M9s6R3whZ5Kqote4inDKxk2YwMbGAKoAHysJPaUZv5NyqJqWB7n",
  "key24": "2NFA2b6y7uYDbiosqXPQzWiUwVPGDhtQcwL8JWn4vrkh4TiQ11v4qwbpxfBGCu6yLPD1gMdLcP9StFHM1EQcwQjm",
  "key25": "3FKvGVyE35MYJiYp6pYMRLJCRD1SbeKTkVMZ75oRqQui7uFLvi4oqFpFX6sy8zxDrV3VtPiqUgDeB2MMWVdUPdRk",
  "key26": "3ksz5imRThdHNNsBZWZ5UEe4gdvpZ3MCLeSLvie9THQCxsYKtFshn8KbWXBjfUKvNKb3R2FBTwfxHCvX2Gy59jv2"
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
