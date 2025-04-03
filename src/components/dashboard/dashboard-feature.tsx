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
    "2k45RY2skgDnR7VJRARtL3uTnioSszJrjwshzcaSAjRoeqHdpUWtJFxMo5fcTE8dztPVJUX99TRahgss3vhdQGk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NfxRtzApRcKx15HuP5pywrYMSkLKaf39NvCL6RGDme5X4AnWLFSPbtdYJmD93jbmPPzeZTvtjr9bKtaDdU6rMmj",
  "key1": "2sBFFiTsSzMK5pnneaTXZCZ6fr1h63rsJq94asck32f3C7s5anjCqzPESanXurxyZxFErj4X37q7XdBwjidEkYL4",
  "key2": "5cGyWSxpmusnX4fLfyo3tMRJtuQQszkGnTVkvwGes9CPBc15xxVqFXq9dGzYHvc7R2jG4XccavVrK7SystT5wisq",
  "key3": "4qQ7Qezdv8abAbSmTQ6JGtie3szUQexheEE49oVj2h6DCLZ7buAxCMej3Ev5SjnjCQL8a4QBR2Y967UG1fPwtNoa",
  "key4": "5VtCwTmki7DTgbrspjrqVrJE9XAz3rmybPaXsEFQKWR6Xi7oTVQ2u2TWWqTRyBLLaNahP2neu553KwbaKnogARwu",
  "key5": "21VwF3EPnoH3qdr3ErsUUWM5oP4KA6JXWnUAV1cbtm4E5fFwp6DraEzaUYMvkWGK691grstL6ehmvijLTG28bd23",
  "key6": "V6XB5Lnq22myEmKZDQ8YAmCsKgcmdeAxnM5xLan3M7sko7fhEog7qh4JLjx5P4zUBua52iTT7aNmroExWveCzqf",
  "key7": "4dnQpqS81okrCEVrDLtbcBgALCfBJiyBXozM4wghns7EMYD81Rsgmz4w65EUT5UYeCsF3c6a7S8NzmkrAQquDXXh",
  "key8": "38byHBrSR1fgQymWJQ1JDZ1fVB19Abz7TfjwWzqtVLmKccxDigp9sF7ZByFnBYmZvo4goymkPf5KLECZJpgdKNkH",
  "key9": "sRYZ9EkvLUhzYWqFX58n1hKARCP7XEx7VrF1NMpzycwhUX9xXCQP8ocVQZ4wRv3xbq4XyjiGW64h6TdNDh8n2Nj",
  "key10": "5uG48ekR7UrWTPuT7kFf7vHB2XzjDiqexqYVqbVhEzfNY4apRr1xSivgnzDTDFzfNR6yKKRXPEK1ejVw7fxUD1hF",
  "key11": "2ghfExwKTsp1YjxbMovjZPUPxorFax6FX7P1MNf5KfejMtKmQXaMYLmjg919znsAnBjntgRCyJmwtTo3bSDjBPFk",
  "key12": "cqGrvixPxNVrdFMxRchCDpZ8PEJp9rVbFwdrusaJ9ybFhSCpfXyjnotcMza4nrghPJewPKVXy3ttfoHnDnHGPv5",
  "key13": "5YpAcGaxJN9BTinG2vG7geZdZHfh4drRCnWVuSebuCWbDQyU3k8MEs5VrNDhzcYn4TCtnbWeWik72srQ83tyZAcE",
  "key14": "5wWewbfUUUP5RyGL6KBrwypf6CGmQT9ZghSdrSH2N2MgHeHQfzdQZSpPkyLJZRVjxVK6AUXyPLvt4zkgS3Yw9aNN",
  "key15": "34t6wSUpS7xCZyYypvR4Dy8ZJrYy3GVhYpsmqd8qLMV1g7oP7r7zpJ1dZWTQfScsX3WnE6qXKiwSnj9zEqG9ywqp",
  "key16": "5nS2uLzmPSZcsMamESvosiqkmkwbkYLrkB5oTbudfw8RxBa6L6R4e3GKtgSGBN2BNQsYXGBXnTk4k1uQTk8WqkcY",
  "key17": "49CHG2SE3aroHEUhjRkvhMzrCunHL92VKa3SakHZxnchxAmrcKYxcKg23hdRRRbUaBTpgTNZi5CPiHX2Gaf7RxVD",
  "key18": "5myRKtKKj7rqGWvxJWEFLwbhkDCUW4dzFv3sZztV91hdoz6h5xCPJUmK5BKDwCWU54fLLuwUTTYKwCrscsBb7DG3",
  "key19": "x4HjfU2pdUSimqQz3kNcEHb6vy6AsEgYBQJ8wAdQE8CX6H6UMG5nAEUuYAmnd4t5jM1ehhZW2uL3nW63cWAsNrf",
  "key20": "2tUD4rsrKnhb57za4UgWHa7G7CjxTYKdpCgC7hvVSZ88RrtHMYbhZ6bKWJ7DjbEqM6rE7QCSBeAwTfXeiNcZbbWC",
  "key21": "2ZLfKnYdPXMFJYK3YJUUzSka7BckTuYa5yNtLStZQFXEGfKY2kQvPXXwiuUnhBZosAKzTVoKg9SMNSV3NiwuhpLM",
  "key22": "5xizYsWpLacFbxoZd1ycYWHQ4T2DLYH2NpYNjgSChNF5yVcHZSiKkj24yBfvApKQUnRajVWgoLMNzQY6cCkQ3uQq",
  "key23": "hFXxxHrjicaWGWwbtGhKf9HtyKrxT5ZRDFTaxSdG8p5dF4ygLhrMHAuCMV8wz9Yijh5QCMAVnJ8dJZUei2MJFq4",
  "key24": "2SFs3sNXsb7twLu5JBeASpqVENboDJXAQePSV88uDyptpF22yozG5owtNhnpLQ4KTrChY5NpecbnZLuTBtJWyMWm",
  "key25": "FZ9fryS7VygLqFKESLR1zmtgA6Xyqgu6rG7YAbCawjPTqDksLxMakXG7uTPPzjRhjYNPXeFFJPChmHmZRTRCpia",
  "key26": "5oShocSbpq5njqgrT9DSuwXk2w4iF7GoipKb4RsQtUDW8GwXYA75xrcs3hBsdxNCEgKwBg4RwaouuoScqHtctiw2",
  "key27": "2YiYUPg7oHL8Pj8kcafBjNTDyiEamu6vUPUHDiSb5PpVnvWzipQs2yArEu5uTpjs9cxjg8CwGfw48mAa81rkBzHB",
  "key28": "2noWbvcwjpmUKSwomF4E7KJwY8mqGtQ1qT4KyCeoiVwChRnzkyCc1CLR99jhRAEQgCBzDPLAgZ2LvuYkJeksKV9w",
  "key29": "2mqD6SBWpDtknWrFLT1RMZWhKF1ADpue6TB2RznNnHQuDaMSn4GgSdf2kAP8XSTEEbokxWKexYCwyBUerg4Ddcyp",
  "key30": "5b5Hr2PAGwnidtgjK7CCjKUpDp2bwpC6V5mqhWak4prBcwJPiQeejA6kWdWyuxwakQxaE7XomEX7iRS47dvDWu42",
  "key31": "63XWdVx8LiwFEVGd2iysQQqZoVSuk7BUXJQAKgTsR2gXoPUGyhvVmgfGxSWCGszrP5aJXFnWdigqyypXMyC3fyfy"
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
