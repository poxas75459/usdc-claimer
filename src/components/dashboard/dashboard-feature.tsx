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
    "5VSJARvftLVoy93qYE131CH62amQiRZmAQ4H3LN6tiXvXZ2LvmGAK37847gCJnopMGWQNKFwNyPSdQUS3GEi4mez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57oGjSnEi8rzqXWjtzadicuWgRcB4a8aheoLhjjcYiQZ4V5exX41JBAZF7GdVxSKDEh5sc8NNv7JRwvbYFAAUkQU",
  "key1": "21iBLuECCh8fHMRh3QypWnZisikXxSchtAbdxXf7CQzzfm7C5fJft8suTHanu74p3M7j38MAMBB443F87VhNDDTN",
  "key2": "2QSj4YsdWrFAm7VTgNGEgzwp9ieTre2TxYZTFnxJonZyjLs97c6Es1L13CAv3oF5mjLLX4k6kppqVegFh2LSEsSj",
  "key3": "67ThdEwWU5i79mKd1VkMH2GVuqFm6z3YsxWFXuWJ5qaQ6CegZPRF4ovQcd5oH93MPSEWd1cwBywpDvkcR6XoNZP4",
  "key4": "42iZQyu6TZHtRLwGLgVDeud41FbGHKAjJZanE8g7GoJb5qJAxk9GwvHfZtYwECgBwDM6ewFpeWWbRwNgaqoHoWHn",
  "key5": "3pZFZMWyZhFw6LkoZjWVC2hXoHFKfKGGHSR5wy1NfeTHBVEo21ySRSkdLxJht12GhAuK4X9imN5TTZzRpFyCaTSu",
  "key6": "VskD6yBsmkmJPH92ZGbJjEgefXNGy4d21eZmygg2eoJ3GvYUZUBsjHEAVneHnuU45AQDXP92ftMUhCYJYFDervL",
  "key7": "5yDLs2iHQfqwa7w7P2jSo7h7KrVeW54JEUrqC4o1QYxA7dSWuy32Cc2q59XtGfSY7jfLN88ogPcbSJ2VMc8fKV21",
  "key8": "cjZk8VCg6EyV7vhWsSS7M5jhNNgC9VTHNVgpUWkFuqhsD9hPAqeBPLZyHqwLAZnsDYBduEjwTXo2tLMYLVB7t4c",
  "key9": "3JqUTGjWqmvnbb3P6nxvWLbS7kdb7wDAWf36ee96VZ1dk9ceHekDw3E8UAbkDCLkmz1g1pJ6P5M9Q9XpNaGDmv9M",
  "key10": "o8KmeR7D6jVcPReHUZ59T3oxsPHkTw5RGe1TmQjUuQ6K4ps2yxG8MqJy6noEvzVWE1rNes6DXCobucRVR3YAJ8y",
  "key11": "3hmjeoFUXQRvWzryMbLRzPcko29BnVst8paADJVViVdCLV6Wzex7mej83HnarZvg1pk4S4VFRHi3Kn58T5yZH3Kv",
  "key12": "2ecsEzD9fdPQMKZKaYvG3XvwDzhvjheKkDBvYkKSQ4yMDxekEyisgRcrGzKKufqraDgbHDVy5KN1uQuZeA5Vwcyj",
  "key13": "xRd7PPPuPyy8ar9AqC33TEv5EJjo44Sb5cnqtdtGcZmdjiH71FfT8JhHeymKoFoTdfv5oLdiC7mYd9BLzDh7PyY",
  "key14": "5uMAT9wLSz7z9qkWYC8EFecm1g94nuhQ1FQyiUG4W7mkWAtuBZP2Vn9fHwC6T1h9o8QKu5fFSWw1ZQw9jXNZju1x",
  "key15": "2LmvAbdL3FAG2HSSvZ3cq8i7DtxyKQwii8Ayzmjozi9gMnpmHmDTPU2Gjy4R5U12psj8DvyKs8oTVWPMVzFx4k9t",
  "key16": "4K9BCnMBK5BEHAY8eJMZJ2zFhXzr3gfFpatZuiaKr9vwz52qMZquH2Gp5qDnW3sEf7mtXMgqJ1ABrsizhnS7123D",
  "key17": "38zk6BZyjhPRM8D9o77aLiJeaMHYn832WPdo2in1MLTd4XNcJe2LJYraQgbhrqR54gqunXK1Kxgm9MG7cczNnASY",
  "key18": "oNhyHZMtjpvH43YN79rseSmMFHnQPh4WtN4N3uo7smRp9KT4twj9cDW8uBJQjB9q7StGaddTvkKtmWLumFobvwg",
  "key19": "EdN87UuEBaDGvq7eUvAoih2fGvnkzXFmFLfsHjSNnoZhkMraJaLBipCK1qqCRpNAwbMjYNKRXTN3JQZqBYxBwKc",
  "key20": "3Ew5xxvAZjTpCYHa4WzziXQfdPFD8rq8DUmwsPXW2NttyNFdpYZeHFMJ9M4pg5xwDLxgFGMe36V7zdEPmujnNjem",
  "key21": "2PZacUrJ7UzrNXetSrPMF9Lj8XmwgZ29vucmvSvqcDmVqceyALerViDKzQYLJ7h6JZoKeEQQYJUDTxi9zKAqCfdk",
  "key22": "6cXpJKRjunkQcrzaATKL2766ZVChiYaCNfSnBCA6KBb4haZKyyeagPwppYXxSbj9rKQf87hY99HbgzLdWNFqvnk",
  "key23": "cWpdRzHbGZBFVD6d4itaTxDm5N4HE5DCY3CvAdcHzGM1RS7S7Bwdnbo7fLe1rXCw8FgU4kdBuoYpWaMRSXSPHCC",
  "key24": "3rMcqKQmRqkJWp1fopgdmeZPAx33y8XK5DWHy8a8RsV8TPYXhhjm4SRqs7UHRZ3ibM3raYoywLrU9ozrskkYSDw2",
  "key25": "4KYQNtnvWUQRSTEYJcRJCifWRbjJvjkLiEsUXK1ycsYhnV7XpQHRGJytPWp6dtE5hc6BHPnATCgfQAiJbfbGc5qJ",
  "key26": "4izn8P9QhTAh5Ws6rw6zghhFyTVsWeUjU2TkVf5dNEncT8KFjEV8C4MwEwr3nurHPnPwMG18HHTFcRKvzaHmSVUd",
  "key27": "5eyTSnBPPvRL1FNymJBz63P9wd2U3tx56C69TzifgH5iVATGbSL6CJj1A8JJSfJWWRNyy8warLsyQBLFmATtS7z"
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
