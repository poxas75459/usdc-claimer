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
    "4yGF463ygWfKA5z9RPzLUBAR7rQWDtJtWh5FHFTHwd89ReJNT5Dms2GfJbfbAD48ydd4Rpz4PVYw9x9PcU2HheSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nEjdfw7FEoJwvCe7hBAu2aHBksBJPzz31PSYqw3wzCYfwdDEce27XAd4JsM8xDEJHbDy3oEQ43rQ6Pi5Fk4ZqMy",
  "key1": "tunYKYhPru7q6VzGJ8LxWEvzpCfSkgtfNgszSuddGMKcXWhETbKmDzuj6frjpuTpijmjac5uTmGSbLVKgfejxiR",
  "key2": "4QYP91EwGZr6yJ7ye1e6aHqEadybXSxtdExr1Ekq8bz6XeBNE3kqGoni7FcCzm8EfiBR5b4rzS6ovTVWXmhezSzA",
  "key3": "4kH7UjgRznCRAUqBGQFps1md6t8cJyGksnrBWSMcjWtJAxecv6vyL2wsbNb61vvXsqkG8hmvtLVeE2d1DBb5LUim",
  "key4": "3LYLJUDzzhhXygW8SbKcPjrUVHm9EsDmscHtjJ77Pz6DyB1HLo3gBQi9xqaaXyVbtVnimrohHP8q8uH6MuQ1HewQ",
  "key5": "51DHPwVxbyPsL7bUJMySt7UjQNjqFsanpwKERvZMpH65xy7TKNXoDpZVQdyKMahvoJKj6no1fBUz8DxKvrmS46BB",
  "key6": "5nPRARtV8GipmUBDanzVDE8bvVEE3hFFuWXfKDuSFdmn82me8xxCRY4Rs8sZ2gD8rDebsnAeZAgfF6SiR3BvUspR",
  "key7": "4PtZz2WwiRC4cPnECDveFzsWERGyqoNZ9VSbBf5ojdbrCNYESVN4V6X2aANbBHaS8RvACw586m5YiBoiwn6aHxLL",
  "key8": "651qT8AwSjcR6M9w9DjAV7sWNYjpEBXyrz4GWQYZcgr9QeCGoJg2AWZrDYExbHHoRErv9hVcKK6w2iH7CM7wwyyb",
  "key9": "3RdwnFZSJ5t5SYUH4Cgu2NVCoCHa6ZKQmECnQExsbsK9j5pryay5oed6uDbwjntybzeyyQ2jdGvvPdrDy9tGdasb",
  "key10": "52jz9959iCsHqwRyqH3WAfsyEVga8vttiNxgEidRjpRkMEqmXdg3NmxBP3yRGcgUcLvpFPbMfi2mMWDEcn1ZB3Hm",
  "key11": "4AvDLBaWcKMaDEPitFYHKWLfC4oARJtt88sUTq7VLzdzRLBKxBAy1FtMMe2Aef8CufW5xBnTDqEYqsR6NNtGiqpk",
  "key12": "46qwE58oFmGED4BDRdxP91AYvbWv53R3CuyDv3aQCHKBsQgYMChzyCGDJuz2unUtUgNZi6FPHSuQWyPpdSaZfG6S",
  "key13": "3jMQaHurf8sTBPzpCxCoohj4vhddsr5pE4AzrwsScURt7GCJLSnN2irEFAaZ7VBetzoxPHZMSsAPvZuDCHHwt7Do",
  "key14": "4hvvW6NoCPYfwcXBwhWfcLH1DXVwJUVM4YUovUWUH2tEHhCMWqqj52D5d5gCRgd9HmnqnHWupD6Q1kjHsuEeGWGH",
  "key15": "4eZnZr8P6KoFDeYG75i9qibbnubEWdyHJSe1AAkNtgw8ULmUJwEHjT6Adwtd7bEgGoiQqnc4zTMZZeL5HbA86AJz",
  "key16": "3DjHXptfBtVf4Z9tyqcUCyp9R8JFs5uNJxGaTciiE16VguUVuQTCiuD5CYZHg1Q5FHJB7vCR6BYK2B9wV19QTsTA",
  "key17": "2ahFnWmmEa3HCgh5sv9ZqoszC5sXwiwqcyNyt151GHHJKqaPxKJyPBYMRyyWPKKVzzBsfJiTi7zbxp2fhjUXo4PD",
  "key18": "3jPtxRDEhn7JykAchNF6b9D1qegYavBfsAD9r2ZwDDjaprbDDXhaZF3S8iEmYgEqprEiXP8ncSWt1VrkM7fS7Pm",
  "key19": "3wYD7yYQPzwWnNdN1XRjNcDj1Ri789xZbed45q1iXuGmp5Yy7P2K58CT7MkzasXAjrxt6PnJtbfadR9TzcKpreBZ",
  "key20": "4RVRg9Usy9XWVgxhFYkdMJn7vDVEsHCehg1a5VCvhA2d3HGThNQ4jqLEZLtKqwCRYfpx6fTNGhmMxGJGvSvUJmY9",
  "key21": "9BFk7K84WBGUmQkaZsVdtGpbFNfYUwAoJTcETTTYb1hkrYmYwm4y9CoHK27z73hntqNFT4sG8KMvBYSpu6BhVrF",
  "key22": "2QbrrvGYGsZGATMyhMrk3cg4Qmia1cpD42YGGA3UR3Vy56NE8TFYzbWA4LCiPLb6T1Ni5gWCPW1UfbGe8kF3tyQc",
  "key23": "5Pn9pe15iLqJkCXMs5FJ7rBjWffYz5gHLDEDGerQzj1c3ELG4NkcYmxL6GaV9LNrmNQrsz6PtTd1i9ZtzZ6PtpPR",
  "key24": "RGhaZQTwTmedDGtpbLrLkEPGDyyVuCpXP5fPVeRZ6ycCt4hCLwuRK93eLNBfDZpqhifmJfXMD3TEmz1d788Ua2U"
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
