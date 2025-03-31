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
    "TLMpqzkoasyCCcMSiv75hcvuRiM9U8C3nEZEpEKWrDrmyT5rXV2b4MVPYMf61sdS7odD8FRXC64RaT3jt9YXmoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zp6WZtkJx2WJHFkYXMpLo6xtty1JhUgbWwm6iv2PkEuKMeUqkfVCNbwxQX5mmpEfZFoVNMwqq2aUZpLSGsbukc5",
  "key1": "21TXYdh7u3VnS17vmtKD3w42o193cf6yhijLoJGfZBZq1jSrYoNySym76FhBupMptroJqGWnoa7sr4EdKBNg75W3",
  "key2": "5PwpCa3jUqJ5ziCiwoijYZgvrTxVd9cp9e3hUszD2iJjuviNh5HZyQ9XiKjX5noES95LEo95jQkhjy9gYisjsFzf",
  "key3": "4aBekuawF3HzLh9DpUnfiJjbeVuyY5jJNV1PqovpdVuwkWt9FuYnPM1EBfguqtNWwdCWCqXCMQyM7vZCBz8waf5s",
  "key4": "2jVLeoffmF9ioERsyE8jJf1kV5oxD8P9nnG1xcUeb6Nvp8T8cPGjM4Vf6xC1mpkiAPSZ9mh5AHXSvgj852KKfkHx",
  "key5": "5P1tBtDbsiJAb3fMurjQjLe8hfKgTmTMN5ADv6LSzNVeQqA7Q9i4ST8vkdt9hBcYcaTmn2jwPYyRW1bZJPCzVNHf",
  "key6": "791vRgBm5xqByz3GUmvgtKf1bkdDvRPc6JfX9MhnTZadw687FBQZAxfux1KJLGBU7wBdjkB2Dwfi5nqQkPmyEst",
  "key7": "2nBwvY6kfH2FdxvZLViLj1B21EdaQNxhscacvzRaBAtPQTbPVbLPtMwwbC5UJcANnLa69zKNrTr6ggLVwUUEBLzS",
  "key8": "35zauFngMseU2rmgBWtzPpQYydEPBJHhqEHKXZeb3Rb4jF6BXa4w8y5KM2V7pVCF77MKAvPAUcMye7T2XZKAd28K",
  "key9": "2HxbFZpuKzFQ85yfss3EcCSnEwCG6Axp4gzZRgwd47z3Hmq9Eu6jZry2eM4s4GwqTdjgNuNNK6HgpoKNSpjwmJgF",
  "key10": "2MfjcFV7ioZeBPcU17zS2coq6UyD7w5P5SHUrtZwvZGnVT93XLf9jtVYLZ1x3Aa3TBH7GZe5F3DtAij2vVtKEfRr",
  "key11": "2rJqvhvce3tAbxLMxgN6wdd4KqH93UjvjhP6fuNoPcinu2dtrtGNCPB4doxqDG56VkC6TwNYpKeRiAf763XgsL7U",
  "key12": "5pmkNKrAD6e9E4k8YFR1bMjNY8ZfCHTDqWV3m7b7BUJpatu5P6jLqj5ufkn8NGo4dxXzrmWZUBeMVg2LsC6Yb3G8",
  "key13": "5BoTkyG3oLHvUaDkjhKcsxURk689PkHF6GNaWbQSMV8y8R17zVoRyp57Exd6d8hmzQhggqdZWrn9eHJen1k9SC3C",
  "key14": "3BoLn9hkDdWBD6JCSXUmK2cAbVrEm7yWMGmoqdq6nQ7LniiYyFDbosF2JGDYyDEurXZhwhMqR7aao35AtcJFX9bx",
  "key15": "2isUbeXNFHsq1xrUibCcKhGRpFccYHBDoRxaax7Rrz9KEoqtty8nrFaHN7ZThYygEoaqDr92j6BWSPQv2DNZfjc8",
  "key16": "4qXqmUK1mzZJibYEhsad4knjk7W8QTmyQ5GfoK7ka8jEHXTjdLX4KB4SoGgVp6cAz7kQeCjB1EYNdwmrm1ueCUtj",
  "key17": "MLgE8jpdG2HXsWjiVtWUvVfx2Yq7GVDVpAHVjnStDUsVq9dCcfhBuptzTx2BQDuyLnWj9xJYYzoh5LRVCv4wVQa",
  "key18": "54kso3fvGTmLg48gLGNDrp97Mg7rqPb3yo7ffVeaUn8boCryj73RDuMNKNZEvucncQj8Mk9M8MvrjttRzQKyFDgU",
  "key19": "4B3BfqMguQj12vyqQMujR6RFyYz6MuoUYJNiLYj8gZFV3zvK2hmtDRAzzusee9EpHHduvF88SaBrnv6eUEiU6t6N",
  "key20": "GTwzK2BLJoFz6TcgC6bpsnt2Gh6zGCzJ3MJVsWCy3G2cZQ2Jrh8YPyiK8wNhPvHFuqUEL2QCtTnHxd1QTon9fim",
  "key21": "rd3sRVoeZ6RGoYE5dYTpUAxEdRMLxu5Rh5cN2V6UeTjo6QrXJBgTNap6f5v7T3wTU3SMCrsRxgWjhibbBEoGoFT",
  "key22": "4UpjQ2XaJVafPpBY9KX594Koqh7w7YqMWQri99cpH5hzT6cCbZfeqfZbEbNMnmKQbLkDP8AnMFQV7ESPUhSe5rVZ",
  "key23": "343VQAUWDy3c9W3Wqxm6vNxD5EY3U6GyJKRngWykoKj3DBaDxqS8dVqr5bCtsoSdoenscxaZfrduosVFTmKeFC2i",
  "key24": "3p4Y1tjzJFzHFAcYwjUFLKgTWAERaUzEdKSSrQckujFjLWFLDPZZ2khFSEdihZis47vj3qARESPT5XWhKjCwcMtB",
  "key25": "42pdy895ebVEyFQiqMDEqJKZfeZFuBDdgPfFurxFeiupo9PGY74iiM9XYsc12wa8U2pEwB461mEmnDKu5EYrEP7H",
  "key26": "3iUrejr4qnSEtmnr5WJ1skiZbFUEfDqWdYsZz3MkJ17RPkN3N7WZgvHEtoQQYKSk8mmWJbwkTWPSXWcYgwwaGNQt",
  "key27": "UENicwwdsqrNVsRG5D8GPmHMHkWkiJ5ktCqxxseerGpixyLypcEedyoJJ8qgES2pD5xJ7gkN1rRp7X4u6UUF1f5",
  "key28": "2GX1LwbkryW48BuHx26Z5hZRJ5A2W2KPxieDaXGpaRRwifrFQbtN27zMRQuYNUqdKd8MBj5mQxReyPc2MGXiix4b",
  "key29": "3F7tpnTzGwFtkQ8vAiKhpugtuAQekQ2Ro9BbV77fTkLRWyCyr8iFNJC5VHVfCbAtVj2Pn6dwZL5TfydFsvXmXniT",
  "key30": "4coWZsE2N7EiQ1c3e7KaRMKZKtUju52UqHr6J6qoVopfsJJWih3HosEeEDMuorfS895VyLDPN62vLrTpfEJwXSbK",
  "key31": "5qg42H9vtpUqH2eV3ktfUs8SmBEupKHfu5pY9YHiD6wZNTqeLY84ZwYx7BWZFmrAGRtyodn7qoMxXdw7JN869JKa",
  "key32": "t3bYxGg3xbC6D2nxehsr6Gewp5XCUVRMjmMaD3oKNiEXkCNh2J8QUCKJ67dSHrey1CFEGR3h9oxrxdvjis1vWEf",
  "key33": "3Fgc629D5qrEdeQv9TiSEnmnTBw4ai5ELJ8dL394JPnkT6BBVLD2Smy1RvqrdaVCBE4FxqT6kCKigA5Sd3WZEdJP"
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
