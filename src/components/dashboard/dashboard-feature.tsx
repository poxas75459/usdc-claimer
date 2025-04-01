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
    "dLatCMTYh91H3xCDasdLv1ghxzqRK4H1MJGcCRvSsWbUFUsBt5Fzug5Dp9aHFDjVrHAfd6JahrQ9mTMzsyGSjzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JFU8V1Bxx8MbfoqbqFVQrjhfYb5UDLtmvCF3JvZ61NXevBBhq8n7yriJiuapYWVpbAJppU3gZn6PfmE5wjnei2g",
  "key1": "2MFMN271fMRGwSikRHZRZqu7sxRJ2Aq6k76TVoSvoHe2hrF52ZqEX5R6dz4PADpWuRYy13EFBxqVvzgrpMZeWUW4",
  "key2": "ymPrwyL8fTZXKzsU8xz2ooADnhQ19CPHWJDaH3253oZdd8HhD3WZRomETTMDGAHtfq7CHiBR4DqDbNTjbc5bUJx",
  "key3": "3GSKjZD5zhjQMWdwNHxhswPTAW6YnPa9MmHcQKHvF2qcWuJYDhojpSCNyxncWX2H6qWrAkPX4Y86QPXAXbdH14Jz",
  "key4": "2tFv6Y5GehgwDn7LnZ4195fNepMstg4RYG2Y7kiXm62y1txrdfKqAZ3dDB4xmvEgYkrR4mgikeQmNAiNQdUoszWF",
  "key5": "4YLCSErNv2V14dPh5gYBuRdSXySmKixkdWjaGU8hKEhBXYPFxnW9XwbCjdqpUEcS1pBMPppr793RcsmDax3AF4gn",
  "key6": "4uJGxJfv5RPb2uHS5T1SsZqyB5nNCwfgVSU7NiRzdFLE89PtoqnwEA9G91mkszonPFBjWAgwtjYAQPM9hTQfegaN",
  "key7": "3Pfjp6GzQ3H4mK8TEQpXR8LLr2DLYMkW9eXr1JpgU6wiwwE3ox3xJCt6ji8Yx38ivV9fzCbF22jUseBJMCeCFfWr",
  "key8": "2kXuBMAH77UgM45Nf2iSyx8NzCSK3nL8dZgkiL9V66krhUkWw2YsdGkY4QrpLz3XQ6n8NN3ebvk5sGEu7rwco4gJ",
  "key9": "4kGTbkwDx8gz9HeVgKw3XMzJuMahVPEsZJyhUGLY7MRAvAo3P8MBTPLKMeQuyKQv3Tbz7sVwKegN1XCUcfdzMFSd",
  "key10": "2PkFXcnKdgkzUBxPH8tPVADs7uzJhRAUCgTW1XRU8sP2yKMYTheEe5M4xqr5tkx23CH8Q57pVKxwNgna4xF8Ncz3",
  "key11": "uAUbWPUy7J1UApTP5THXcrZfKq8v2UpciwDDt1CYT6pijz2jFya6P1xpWV76FnXnKonEAbaZDdvRQPrHgNP6wBu",
  "key12": "5GP1pJwcRr7UhQvYKKnjmH9RBzcs4f9We7jp8bGJTWHtKtokfWrbfBBZvjJo21m1j1PdfHpRCf1Muw7ixddQzh9L",
  "key13": "4VxGTcsXgUKL6P6tABmcf7GSbB62ryWZBrQ1XjcNZx9rnoeSwTKGxaRTi7fcUNxuRxj8mCNFhBxNZXMHsMn2qwHo",
  "key14": "3wNWs4e3CqaB9W5sxBePuE7om8mivBsxZ3D4gBw5qDwFZ9zwWLb7vzhNgaNBfzyZbxoRCzh875ivumvStfSVUyrD",
  "key15": "4Pcu4KQK9eLuA5HpbdCFe9Zsy6djCKkg5sxZf8YAPnQ94n2uADkmaknk784dXSHLJymJonqTqJLyE1SHmGbadc7E",
  "key16": "4wdj5BQ6hqZGJasRK6ELJRsZ5HLfY2UKBfDRu4hEWZm2PkmqbG5JPqXrULySKs88yPpbd8tqGspWMc3kUjBCwGEA",
  "key17": "QoqXNDAAEVvTLRkhH3bVmy2CS85VFAPNsrxCPAMS7piZpJt3QZkJM6ouN6MvPGyzu3SkLwNcdt97fvMbZU3hFX8",
  "key18": "5zT6A7a364rzPaxHiuuiQeVkDhgtYBwoqsbW6ozvX286TdzJQc7U4BRaEhkjhdJiL27hTQoVqmB7pJ8wRYFXzay1",
  "key19": "63EVaMXd6gcx31cqJxbHBAYSNCpJGbjezrsgG8VvWJ7KEhmz5qfsYVKboUrL4t4y9QdfG2ekRLVwFAArVtmWCADD",
  "key20": "45aFVTZACQMdmBy6gfkBW8q5Px3RqQE5wVYJR6EV2syHMsyeWVKkMo6vCDJCieXBXpY94h2NP1RxcsHEYMBmLyEA",
  "key21": "mhwB5NqZkQ59Guuu7eqjyETBo4xQayiYZUVtPYm12PyHgSPupY6v2xPefiUY5yo3jD6qu9uXos35t4gqmopwWDv",
  "key22": "o78QzVSu1VU2AeSpNkBFUAcdEUSABwQevtUDtCaZqJy9BmpSW8chF5y6KKnFS269Ze8CD5r9cPvvBroQQqLmXKU",
  "key23": "3RHeHxNkiD2icpPVLzDpUwFYM3t38ht9ZAAm8XTnj4esd7iD1kkzJufbKWfm5r7accfQ5EVnAwj6z9AQK6oLaaQD",
  "key24": "3QtHgXkq1XK1djxPSTS6G8hCsGXcbme4SrvkkYWroUz3L9MPsRm15N9m9vRubxC3Fvn2HiLiDASFfG2JmYkVtN91",
  "key25": "G1Zm6TUEy4R5wCh2PtVAr7eoJRAZXR4itxrkrgu5gfFvyn74RvFtoVnd3CE29fr1oBnBxxCpXQqFSY2AHNpiTSq",
  "key26": "415wLxiWcaH8yaNhNXU4RppUqjbKMgx5myaFhzjGzVKUkaDAFaJCN2iRSHtJ6iZ7q4PcS9WnCGtuc4JaJBcntgVm",
  "key27": "2sq5qVEYKM7BbhYFhH6BGBeHg1RvMFENb8GNfG2XmdGqimvaaUrzEEWmmMZSLF4amxSGUSGY7iwPGJHuVJmHHMJf",
  "key28": "5guApbM2hZS52sTbtu3oWVupexG3zRubRTKUt2v2Fwb4SsfnQ3HFqQiBWyytsKXUVYq6xNV8oYYzXCnr9bWGCTTJ",
  "key29": "2KJyWpwBQcxyZfnm1khiUY7qutnbzADpSmCNG3D4tGzZgtTngGogTi6chxduaHLqBzmEGZAAPiL52XnSSjzK8s6i",
  "key30": "reQ7dArzGA6brPGzz2wNZ4m7MaMajkG5p2NK6ke15BRAymF6eoS3YtBrs7fW7kx3TFdnTnacqx6y5aveFjTyheD",
  "key31": "5KyvncTCZCpyrvydb9qDanu7nMTFt8x7kiQHunwPH8ge4FsNz2GoWPCpabVnUQKb5vJRj7jfPBErGpRo2ueebQ1v",
  "key32": "4uG4ob6Z3shvZkD9kb2fDfhomA7h2JUYf2T9TQVKxuhWM5DKtxNsjcX2J6BDvnVy5FwV38jBxU67vCSee1GEKWUP",
  "key33": "5FTFbezv1YK3Vz6CLyyx7CBkvzH8a9at2T7T7SVLBeqM8PKDKLH1FY4TKVjDR57GgJPCVRxaYBSmQ1v7fkq6N78k",
  "key34": "27r5QY4PXVkSBZriu1MPTsbXfQEddYY9vdsXrPfcd4u6FhmmKop5F2t1ykRsQgASKFNoXcbidWLgkfwQuHc47TmJ",
  "key35": "4Meunbdb5vMBozZzGH78dr586BP6dMVVZhBeciiy9pbFeYJVjipnbTammVb9xj7pNLkjE1Do1YxEoeKiKWBC8AZf",
  "key36": "2pStYRqLHEB86QGWNxvU1on4C7xpfJW5fzCwVwPqJbhmbaQicVwFVec2TPv5C65h8v4we8713dX2qcTuYoq35DWU",
  "key37": "29oBng2MTqSaMZ4Ln7bWF653N5zaip9EA6GRG2vUwVQzHi1WexWtu6zthicChDziyG2b2WSxzcLBAN6J4NuB8JQZ",
  "key38": "2EiiV1skGLSvViA1i1VoAEwuUKDWbDF5aMNEeyY7AQ7DbvaDthx11C4QYMiR8eJczoCEmGjEy5ZwTY8AKnoTasSP",
  "key39": "5zZphdgUFySfnEZehAhGRUJ7aFSPHt5tTsCJoeWwXCq14iqSsWf968gEZzd758Wi8kEFHvy2jnnbtjVdKLmDM9mG"
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
