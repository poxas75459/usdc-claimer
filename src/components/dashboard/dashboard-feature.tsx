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
    "ucbk1zcqwwueCovmm16H7e1KzWKaP86j1P4kaSLRr6dWzQQfvCDQS26eTNFDhXwcKLU9S42o23ZkWeqgw1kgkmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A18zQJ5kgu4TkTwq88xK9ChFjaSu4Xy1oH4mXJVwUcbkbbniHwbND9dKkA2TednPRtAW5QUyMLWk3DpZxxDvog8",
  "key1": "5uubcgLaapUKQ8Un66wEQWMmFfgmKvt1T8x98kzsuu5eoVCVGDeWMU7agKAVWMTp2PccKBFFbYVPvFWUwqzTSrTo",
  "key2": "3ua4Zz297rSFHTcDh9cP2rkBy4qGRFZwnxMzh4R9fvmA5wmPtsfUxkuAekvzsBqdP3GTHbwsM8P2jV51bpSmXyo4",
  "key3": "5KiPAsK4iCvuGhbZF6PKkVL5d3LL3F97azZNkYUu7ki7DTiR193W46tcEVhQaVyr3NkT9sZhoKWq8wCJS4TzbTQF",
  "key4": "5wfHNT9YGLWS573iMKkdWBDKgfEjLvgS6ofMq3DwoLs78tFdXokA1uZakMW9qkoyTSDpXUbVwJRjqENHK7xnRXeY",
  "key5": "2sMNnQ8KwCAX5ZREhQr82UAKqtUbXTm7BX4aVRk1feRqN26Mj7A4jCS8xPfGJFtNxigPLYR5vZs12fTtZSxoupDt",
  "key6": "3fVUo2x4RG9brRci53KGpvwGEGocMaqm75fEhVMTXe96SSP7e8okk6LbbEMBei6hXZaDtffw4RKjjGyUG8tTqM4y",
  "key7": "3DZghZQme7KHPgHsYune3s6G3oXpw4FoAtopuBboSCoE7ykS1HF2Fuv8syAX2xc1VhNpd8kE6Loo5Cv4MqeUcXMt",
  "key8": "535xJEi368vp5dfbLNB5S9gAoCj2jrSH2XgjHtz9hf5fMUMdLLdEFKnrSi1DqAbbu2sGLGeFM99mKjPXc3mZsv7a",
  "key9": "3BELKb9kppp7juMAh8TUcxYQWAQMXHypBKuk2eydkzgDy3bfb2Ks7cWay4bjJZvV3r72fvgnTpqBe9JJ3i953d9W",
  "key10": "2fa9FdsaPqmLL7626PdJgKjJugcAY6oPeGgC4jJ86fafWQPE2GZLznVTu1rc5jaQgg373x3enrkSfSKLJiwrREhS",
  "key11": "5KsmhNeKprBLSJECsuG3F5cjsDvgCg79s1tkzFd6Bhh53wDVqv3CPiXo2QLWoF7BGsW7VZNSrj5B64Zxc81RXJBr",
  "key12": "2CfFnZUCebBvYXnCHmKB2RRzRSz8en7GEv2Cg4i8RwEaBdivHHmWxRHKVxPJRGGYHHfZRQv7P4Gq1f7p9meXfxRr",
  "key13": "bFWd2mTcnTM6S4ueVmmL9AFe9KtZwTd2Puaiy5Zoc5YZgB6V8bgubyZsyNmTzEtViAS1WtoXNFhs9eSGSXcWqEY",
  "key14": "Y56JiP8XSLJCmiWrgnwhT5qn5P6XBwKspRx2CAYt3m4q58WeyhwfpkXuV68a9jEMUWpMfJchaSsscz4ex6WtnQn",
  "key15": "4gmFwtybRhj9e33yMXj2heGtFQAHyLLyqWXJG4gWHFx3BYiFaVh1Vu9hzfuprW2yhN9WUHUv3x42Qxpgc3Vstwrv",
  "key16": "4Md7piq2oyXMTLPgHEiZ4GW8guJFhpwjLpPsxEAuwAweVtMh1EtqzZ3SjjT9rS54WvbzhuyixmocvdjVPVbvd7r9",
  "key17": "2ocgizpQ58ouHoKKfH7Qkek1BQGAHaSqkQRnTN7E4prRAjjMMPvA9cNVGtHZsVQNszkfj4pxfZpNXQjV4mhunXcF",
  "key18": "4bvt7FgKrZoJkrsw71R2wMfxDPssgaRMc3XzSj29a3iAxEn5333F2jsqfjGAvjfQxMB8yVtoeYuzx2i3iSbMZWvU",
  "key19": "63YJzXRW2Bc6kJmee3ZVEkFfRftmhbL71oCEdmxCwA3DVkY2snBNk3SgTNQsa9BeQj2ezW7vR9YMTPBzrhrSeKjV",
  "key20": "5Mecz5Z9aMK2BRRGgBhER8afoPWrN4XsGXsc1aQjsXkgbru6Sxut7e1WCcCxyfm7advdNSNQeF9Xp8qbcDTvPyAb",
  "key21": "GANKHZcb6A6saGHMHKrjf5VfrMRutRjrJwzybnbRVT3k2nRLSEX9u3EyT7NK9hpMXPPKALjgBhe6xBbVSHu3hZQ",
  "key22": "6NR4vJbB8euWiPj8PDfgTzBBxBEEUuZHZG6a2bJRWMCfFNL7KJfA6CKgUDB4q9XQuekGT3YHkj9pZa7kb6VarZD",
  "key23": "2Rcf69r8fJ1NiM13AWyC8vsj3bmHUkvzEbTgoF3Ea2kCWfuHdPyRsi7NuXthZ9bFnUnDWKKpSQ2ihkx8Xrwk9HWt",
  "key24": "2FiciQpkfRW5fd4rYb2PwqDYUygTqjDWhwiHumN5MsLAsJvBkXNMgwJBNMYvBFCqqcbtBRrpTzutAwcW35C3h6nd",
  "key25": "4m7YJpfm2TVsJA1yaxL8VbXQd1mW249MbCYcbcjmRaGSxp3o7QgzmFGP4hvaBjUGUuJSUwQbRnMzGyndDjTuKbB7",
  "key26": "5y7UbNP7KirkkfZsYu7nvf3tYBX9EWm92em2TmHpgn2jATB6NLXd32MYdfDHPQzRZ4QZqvyuvt9A9HunWGyQzokP"
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
