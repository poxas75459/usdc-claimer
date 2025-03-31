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
    "3jFuBMj3s2CKzHAUXHrD2Uhgnr5dHZWxRXTteFjXAfV7JL9776Xyzw3BSfEsebb2pAercMH7oLqe5qEMscmQMcnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TySg5VS3zXzMC3vPWvuANhVF9J1JaG7FMCos2AtgM2kRmv7iT8h8cmAjnT9nC15Qzm5Vkr56HAggPoi5sjeRkX6",
  "key1": "33E3gMYyoA4L1cpnqbK8Xs8JaVyTfLjkctMkX9jys3Vq45pyWjRM2YG78VeHhfMNv9hgNv9LB9mrUUzhvB73CeVC",
  "key2": "39cdgdrjuKLNNUgDTecG99PJdoi9ckW2pZVarUvHyVLVKGzkLNmZFFbQ4JdhnUeRkVtuyrutZcyX5iZN3fkoqHT3",
  "key3": "2PaPZuV7uzWk463Kmtb7UUMaeWzMmESSN5LNBjvs77EsUT9sYBafLrpzQzD4EFJd9AfWVYULFxpoZxZq9GTFX3m6",
  "key4": "53YG9Sd6CDtqnNwi5549AVcP3JaoLfP3XXa1pdSEdEprwgYWzLJACsBgfRQ9XnGfYw1Eygod7UwXGxYPrxj78cA3",
  "key5": "4agRMdP178Wfsh6KazUpxTbPeUtYBn9f6944fsQKQawiPHQe3wUPgvxb341mGTE1QAur2MMwJVfeNDniGepQiLdF",
  "key6": "TjsWwE8vMk7D31KZEFNQyKY6k93g7p66YRbJRNGiawmfKfXciQfeL4VeT1UYQYVnLh8Sa46FYjbpvKhv7ZjQuEU",
  "key7": "5SUcceobK3QoyX7s1zs2sazD1CwhXLyQ3xz9omBdHqCev1hHT5c1dPwgDWkNMkyVjGg4bM9GkQefmT7eaxgkgs8e",
  "key8": "3WFSWqR9jA62heNMbBcYV8uGJUsEb5LdHFLzvhuELLicNSteucAQ9MRKm5T1jZcniwtX8cFFuBWgbAECdynCUbfm",
  "key9": "2VFmBe2g9QsupYMsWR8HG4LpH1iPQEM2Nyx3xS5TVbyBENBFHsp4yHkgi73zabRvSq44ADHnBgDLReGxk41ZtCde",
  "key10": "2rNT7NMtxy11ebnFS5JH5gB73nvASZh2jjCFibijybFRDXrGn9ahE8pU1sCW9GK7k7tVvHVEwq7osHYMwXMfWHS8",
  "key11": "46VsLriGfPPUhvUpC5r63VBoXLeAKV2UVmPcfB53G1BW2KxJLq1YuHQM78xxA5LkpCko9CbLXFsh7ao8pJ8RP8sg",
  "key12": "3c6VD5gPipXFLRgk5F3k37KBQsgLLLPnr4fQZu7zGYaHFXCovDVfjvWoh4KAPhaMbT1wn6LwCQ8MdE3AxoEmpqgh",
  "key13": "5WMAe3Getmi68GndbBcjtfJ9LWJqaFwRAPTfyh7C2PbHPFi5Yp8qBi5RHnX8eXxv21P5wFF9A1y1a7juJF4HjE3o",
  "key14": "snJ4c8aUXg2WVt5SToZhpFBy7uu44NtqguwiwKvXuMTb1kTp5h5oFGjDGXbkkjyEUCaSKfbLRawupxPVustbXsJ",
  "key15": "3xKUE2ec1Nk5troRyAFNiGwtUt7bVZqP1sAJyxmXpQtXqfMSftsyrWybA4fGf9V9m4pVnKxFUE3MBdh9v57hnFqV",
  "key16": "2w7AA522t14RpudEkPB15F8598QMHSFHWBzF1jGcxYcmvbNefu1hg3dt1FTFP8k6Pz2t6sGaMzofg1iQn7bJhVQb",
  "key17": "5hdwYksxaQruAyKcdMt1UaYT7k1ntZR4RENhBk9LVtANzwBgFY3sQKH5N5trUVvu43zFcL8JhsQ2vqzKXRTVWTtN",
  "key18": "4LpQnTQNABNB2KcqCwH2BY6utBvZNzxNdpdsn3Jp5BJ2wWnPE1nnZdE8czPBWSMKaMDgJ6eLDapbt1jw1mQfZTDz",
  "key19": "2fFs1V3xZnxu6HFBgMqYoiy34hG3W2ab6cQwjK2XTrpnuXRDrFjMLWG6ZvZUBSEgceM7Nb4yZZjstpCe3o81NBN6",
  "key20": "2CE2UvnEthVxyeDR8qVV4RmaZbEiWFCDqPkM5PiXcAg3KQ1Djw8hthAmszwRDBxJBhWZppHJj45LWXxWjrG7utfX",
  "key21": "2hqGTZQ8wHuWVwVPqQxvdSFE2g5Umr6i1jsdqmiK4w5RsKnB7KLx2RDBq4ySnYtMp2hTiZ9LSbm9xTRiZssPmP2u",
  "key22": "5pcpBCd6SfNbuGCDuGYGGsYakxpom6BjDLNNF8ivXKyaL9rShJNF4jjKD8G5gY3TvRGpWUQrrF3rVggkFpo226Sg",
  "key23": "673UdYTFXS8HXet43UUBnjFbSFTeDi3TDQAj34kavYVh2FcLqJzP2kSj3AxFazAXNdrBZH8TW2Za22LjyEYmC6nP",
  "key24": "3cjhhvn8Zv8UGGq5Ki4vtUMD7DVqe3FNBaEReKWAr8T8oer4Ju3EB4QRipdYjnUbD2Ri5REK4oFP7Sn3xyCNoiwk"
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
