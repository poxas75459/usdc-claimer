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
    "5u4ZUohYG4i312YvJbMPVhXXEhTxN27gqudPyDK5iJV1Ya9MpJy24mCmqdvCj1HpdTNsyNW48cKjU5J7r41jkmpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rKmpY9o9s9hD63RPnqg8TPQRF1Ah7WT3MCrECNBMyZDqJzaUymGNR9jfBvXiKHs3uvjRYFgXydzSEv6eVze9shk",
  "key1": "2vwM8pzW1H7ic5tRe6U5o3NEx2VdnXWoTU9B1XTACAHQMAopxjt4z4j8K5suH5pYt2Gpy1cCgfxiY1TsWYPLvHDd",
  "key2": "5RjPHiaqhZhkN5xzMbzxayrBReGmGNBuVbdAQhMkcjQ3bmJccMEhqZn3DuDvg2jtneKa9gD6nyZQBi7iVa6bQD33",
  "key3": "59TNtH7D9Sakdn17Tjd1bW4HHmiJojV3tH8CEnYtj4seXq1mrWSLqtkusVfGosrvqbmX3HNkxxofJ4LgKdrSunkv",
  "key4": "5tEGF35ugZDGW3tiLhPHvsTqadqSC6cujq6gK6vY5SCFdvDuMCTc4pfTTWyL7Y65nmJrHLu5SZbNXomdyakx9sr6",
  "key5": "xre1N5fSkKTk42mJznzeX3pWb2dqffSAukLD2gu1FP4pM45WHom5kaMdSkQ3CTocB1NhyrG952jvTV5ziuLFN41",
  "key6": "5Fvxt2ZnyBXXBEvqKksL8ZVagb9gLHGgk2fN7dQjg2rVh6h6t4yCBNXknKHgQvgEz48Qt68DhwG5hCM6JCvf1gvn",
  "key7": "4jA8WNoxTfFTNQVb4dGCiDXjt8Q5HwchFBPN1WbG61N1qknpKUMPJbif36PnAyF3ysSnPnVJT3un5WjXRfEez4zY",
  "key8": "3huA1LVY7Qu1JcAePnwUmBrGnGZpMR2s2KHtnRRtohgMNbwETQvtMe1hpmGBmaHKnPJYrVCect7YN6fo4NNCGG2g",
  "key9": "5M1bgvnyZ4ensXaEbnK8vdoPE3rdxxCmbdj6jJJzDnqTzbxVzS9zhQLrwDEipPkQ4GqK7qHSB2sGGfkPUSyW545L",
  "key10": "5oJnHBkt8tE2L9tHZTgHeWrbVSR7CWcGELmbvEKqH6MzmEzahJHk226RhFAGyknRu42x2wyE9Qrb6EW3AJqKEprH",
  "key11": "4hXj3aRokwCKks9PkYgCvvipg4to8iTx977LKqVyhdxLYR85KV1qTgEJAczXN1MhE6zJf5TvmKGTVmZFcDqU2TVH",
  "key12": "YiTufC4i2jghLz2pqEwQ7wyX4JiVQhXYCya8XpxWg2tdTzNzwaFC7ckWHszR3z7oGfehKVaq9T3zdeEEwk4tXrE",
  "key13": "21CUduyLbie65naqzThZWgaQwtVkFWVuSXHgT7EPNU4DhhBfqtYUqhpegZowecbG3on9FMqPmrQw7wzLMXyXkahu",
  "key14": "64Qw2nhmNPLRVR831CjabGfsJhcDtH45QPRZBMVogRk7pRkF7vMvcvSfEjihb22xXC5heakDo1RvCA2BXQtcVph5",
  "key15": "2xF3A4BCAQ63YAjKjAZh87Kbektd6uXBBPnbA95GjGgu2uE9XSvcmRKYSzyyi8LDtTkG6cbEvGQ27ECCejyqpiii",
  "key16": "5LzsZg8BkSur5mGkC3aR6KrS3ENsUJa3mEGQ6GMpGWsnxTEU6bD2XCkPQCaLjhWehzp5pVR8zZrKNmsxabRmvhVE",
  "key17": "2Nvx6D2jJJ9gE55VRRnUEF9uqD9b4eu3PC1ibwT6XhMcWC5kgh7BFY2eZ9FoeX1B5EGGiaVXkMjibcxucZGFa8GQ",
  "key18": "2eXuEhCyW8ZN3HXWo5C8HAf85ngd6rh3Jf6VFve4gf67V8u1ubgm1iMsQssF4qDZVuyp6MRw2r9kMTeMC7shZ4wR",
  "key19": "2Fr4GCutCqmTsAr1sg7MMe72N4B2HSeCRsahKRre47Fv4z8svFWs58KoXJ4jQuzSsZYhhM3nz1uVtAKV8o9kYqpP",
  "key20": "24ECZREwzRKzF16jQDf5NqNwgSmfPEgjmr6KrKdr8vsJWU54yDVxHxUK3F7Ha2NbP9NFvstAa1WiJgRnVxNghu9N",
  "key21": "5Pu9rQ1KZcojXimbLStKUpcqJVpbqazrN1t7rvDygMW1b1peAmcbpTCGyroveqgz4Z9cHnnth7L3VJTF4hcnUpF5",
  "key22": "5AMrsk5ERLiT9hDUH2FMwh1GRHyNNHYfvvJ28vjyDcjtXwY4uaN7CK3T9TRzyxM2UFxVGxX8HTCN9utomG9X668X",
  "key23": "2DvYyLWnSABqFVrTAqdFmbDV9CZNmdUtU4XabYPUJboa5vyCqwuBKs81UQse7c9JtnaxpCiroqnQmopUZVVBsrFk",
  "key24": "5Fmduk8dyEyc2K7SB2GzLRcbSTY7axEXgUz8gEQdWDj6NFToajfaM7gsmBu7uxbav34ktQaFJy9sZFc7MxhkhqsP",
  "key25": "61RD5LPKS4mSPi2PFacV3inwgMYDeDuH9zZJvZtdmpu5QgVNiFye1eZGcwD1DozzNgFCSkEGu1vyvzErXZikfj2k",
  "key26": "3bvM9vy9qkRKtDMfVtSHRggxPFx8HmYJHzsWwfxw29dgzGDGf4a9ujWrFce9UpeALWkFpvHMTm2rfRnrVmYRQkBL",
  "key27": "2n4rnmvyR6htfWBFyGxrNRQ2FAuXcRUzJoXBwpsUrEcHYiDXkQaWCKwLUqNgidNEpbP4NUnfn5SpKF59fnfEiDVF",
  "key28": "3TzQVnwYmfV2qYDZ3RNGNQU35CjTv8tPvV7GsArAQ5yzboQnP6Epb4SRD5vC7GQdvf145vTYkMXB2K5iFcz7nFLL",
  "key29": "49P63UChcK8ndqTe2vFsN7N4B3JQ64Uwyz77y2CzxVNBACMhy4cfPg8W6ipV4mws8aByoTNbsQHbTrKbpABJ5RRt",
  "key30": "5ETANcSHJdbk94QVohBhZznat5uwXyt7f5FXcMxowcSu7H2rKo6RzTLnhp5RR8TXYL8iMMTQbWkxHbwRZjdh2sUi",
  "key31": "ocXxCTGWDEN2dpXh9Xdzt317KCczjuvh8iJ9RP81ErXSivynzd8VkuZW1RNC1eCJ1XRWVVAUBidV38ELu5i2xft",
  "key32": "25DsuNEABAx9b3L2gP29pCerAuEDe5RBifFkcbZgbLJSrVpZk5pcET4p7gJn81AaR2Zx8JTmP8kgpneNzg6iNDcE",
  "key33": "28deE5SZoR1jpZrHW1mx2KWt4onVmBpVXutLAb9fbZdv4dmw2VqRabf89gVLtZAYA4AibtDqvq9N3HZzas2XZqdK",
  "key34": "4XyHqcHxoByXVPfM7omauKdftULRq4Q5Ptf3UkF59sybY4Y8SfemH6uQnagvd1XmJfPbDKdh2LmNE3kYWXaxiERj",
  "key35": "3V3x7sPQkTU8p7y7WEEto6twUjNn4LEPvduRqau9eYd4dQNYQhYxwcYYFRPG512gVwXaPbRrf8fWymAhMvcJv24j",
  "key36": "58Y321vxCex5C5yPWzKTgMkNCPQKUewJskMxNhfFyJ9w48GE3fNjuTSUepBDz35awq3cy5WKnC2wtvnxxXPd5j2M",
  "key37": "5uzjEmmvKPfspmU8LDXtdL6EwZ29w6dAKacpFMZUWz7NuCVvUq3J57NeLZjrY4RfDxwwQxBLECcWASia2oQFdXxC"
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
