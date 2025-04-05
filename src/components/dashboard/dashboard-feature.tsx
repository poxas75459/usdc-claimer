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
    "2EJ39JnHy1RHLHoES9TahUy4QLQZvxekLGmD495T1Z9EY5fD6kZNGjw3UvkAb1xN7FWujgYDF7d9ttVXDKyX3gPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XQQQ4YKpCTCL5a6pd2Vn9su5HycSeKgmyWAfsxeyV6ijcEXU9Qmd7XxtmmiHrArZ5XQxiVMhEPZ9osx2ddVQ5RT",
  "key1": "3WHBdQMGphHRDm9kPFqDxHeGfn7L9JWjz2dSYqWnAnTHgAHt1fW9Wi5KD4erraAghGkkPgNyH4TgZhpAATz9KQ3w",
  "key2": "25UG2ydJ7Zep2UHtAQHNpN7DYRwb7WyTemEyfX43no88wPQfbZM9kSNZTNToPNPXy6KB64kRu7c1vZaPWvk3Q7GL",
  "key3": "5NR1dwxJQYdb58L9T7gdtUE8mzZ7gz1b4K82G3ghiEH33goNgmdX7TgexjkSVxRpWistZFYUueZGrV2wa7J7cuan",
  "key4": "58a3nM4ar3ndsB96VRNhcrBAaZ8xmxuphjBQG3WL4tpHQWNHv8Z5q3oPgC54rT9nEhYko93amtvmHXTtvfFqMhMk",
  "key5": "48ht4tN2AAjbJxkkfqtZBV5uExU5gzbUUMxoEYZgJ5e8kABXyZWroxW6c4qwsKnQ6PfmBrxPgaJfrE865zg1v5d",
  "key6": "2R39nxgRKcbyQmmJ2o32a3fDdtDgWv8T9ffQaf6radErLnjogxyokhM8SLcNrzSGa6BaXWMdvuVxuHmXV6J5hs6z",
  "key7": "3d3ad7fB4j8ZFd5VZpCi1b4EkMnDNyx1rJg3UUnMERP1uEQcnE3P3fw9PrMZfGApQyi3GEKNZfwraq52MShe9AqZ",
  "key8": "HGKksRrVayzrVGrJiXqxJbbuUWzNvnr5dpGKZ9UN6ramRSpo64rsKh5N51tWgwG2A52fk2yriorKRBYyQiHbWeP",
  "key9": "2541jGFJgY64CgyYG1xFfhojYYWwTp5SaYo4mqxAxqPc3Ea5VfYaSc58tHckheyrzqRgSAnF71PZrdUKYnPwb4zH",
  "key10": "3iJFX3HPDpGUGiRS5u69gvna7TzLqQcqWpSy7UjRczrLP2DfHKiTdYRjmHMR3uESmLghBY7T8g5XZoUSBqFmwue7",
  "key11": "2XXMUxz5o9sRcLL3R3z2vFniBNcutdsb6Cwib5Z7dJkH7nYttPZBntHRGFuuBQZGBinroU4JJ6Fw46NesbTVwKmo",
  "key12": "2wBD7tava4wXkTk2HLExt9eg1Z9xhuDpsEQJrCunfz9FdGVcx8ASEZZ4GcxrqAvADCji91MzPTrKp3fGiAk6D8AW",
  "key13": "3LZFhV2PYggNCzy2J77SdSRZv3RAFvE2RuU9nEAE6DutZRjusGrKzmcjGNsKP4gKDia8eDKg4N6SZD4SgU17MmBk",
  "key14": "3H7TFBEZdimfpmXmS12624T62Fw21uoKRM67WDzs6rZhxs469FqhTYkCESLo8fHrNcfaSC8PMHmeBRkkFHi1JHrW",
  "key15": "5UEHDiqH71me7xNeGBW7SjrCdYbxxozTmDF897qXV5zNW3VeSSd48Nswzu1zG9xNuALiGNfvFCVmFgn7KkdaF3PZ",
  "key16": "4Yk6dJZuYRMUMRT8jat1GSEjoPyiccnSSCGNGBf3q98RF5jnfmHus7DwoZJbjeAEMuEJHTX1UGr57bKNZV2UzUmG",
  "key17": "3ueG8Z7bXoSFw37BzgxoU611k8ErCvPDaGJRoTXAzccxAwjgpiWLF6yBFKdgBDMr2Fb9TPE7k1bEXKQkrkDHTb5",
  "key18": "hMZfmGJ5xBxEQ184HWKcAbHfkt8kw5iTLLJCcfPxQru2ViWPZUtWiVprFxuVeox4PBYSEpcmgg5KsXDrnbeotBf",
  "key19": "5EFNithaZTpuUwfN2PGEMkmsyrit5bcpfxFamzsbrLtGmLouFBoRkHsRPpCzLmHTzeVg9TPem3ePid5VRwm2rMhH",
  "key20": "4LnQ8yk5PPb4yPnEVxPffkD5WEQRdRGJRKMJebM1jsEtTbCs2kGC7s8vL4TCQzMq1skVdazGxjs6ftd4rYwoCeHU",
  "key21": "5JWLzpScnVMNXCmgWmFSgUWTH1NYp96EG4MdEmiGWqGHNVwhJEAKLRV9KDqe96rieUhZJ6ce6TgAjKz3165YdPVs",
  "key22": "4r5sYHb44WUWgbiPLMXp9z3oVwJP7DMRbcV1FBTqyKpYPjX2JXkQpc4EwDTQP9c72SXUcK49XtZfGFds4Nz3tG4u",
  "key23": "39zf3J1D66R4UsEPbKoBLkW531HzeQUYx1JBJYSeRMqGzZkqD64XxRSRFdKp1pvmP24PreCeGi3tCn89LFN89aRi",
  "key24": "578TtNtDim2nDPtZ4NxirWzcocp4dzMPusKyV2EBWxr4c8V6V7326MCwbuR5sNubYY82364ZxQ6S3LZW5xkG7VzS",
  "key25": "61gHFRqXueZpLn4J9oghpJ5sFwsw8X7JMK3BBzWSueCRsDKU4bXMZShbdELn3XKipToEHjLHShTzaymHtfVMAnoL",
  "key26": "J1uAu7T2koQpHAu1irQukaP3a5ckiTZgsndemMPfNEYEWMj6fYQ4QvAuNX3hFgtD7Y2LFCWveTgB8BXdRTXoaVX",
  "key27": "3ZhDndP3DDSJ3p5veQuVFXPmeBp6kpCLfGCiAfzWg6xGpLWdY8D8cTwzD8RkhsLo8dSwUBmFZfA41NQYXA75fD9x",
  "key28": "3xC7Rm87SLqPaBYreL3a1iqwEwgiZXQikTq4R2oDz5zzbMSy1JMGqq8iaykgMT7bn9qYsfGGv8ZXVmDYMD58XyT8",
  "key29": "5ahvY7rJwrtWaRMwrSEpKHs6JsY6Bo4wAofKQ8iPV4JUDWiExndNZ16H2sY4WFmA73eqjcFmFAyyekdKCtH1MQ92",
  "key30": "2RUMB5iZMpWVVPVA4yfNBtJtPzXhNxsKwcDFgiMHMeFaTijzAEguuxgqT4iGsxZ9G87MgUicKbsJ5UnWiFUzevMb",
  "key31": "5jzNbE78DC3Eea2AYM9q1x9z5ZKMMyhsN9AuLd9zmmDkak5j1Focz7cVLUoxZhar3gzSnjGTqoE97X3ZjasrcRwU",
  "key32": "2N6XREJBZfunkajmGna4vL6kDgzRfYCtqsxyqpq3m6Av2iUN8V5M22WZchXRSNy9Bd51XdPcaj1ohedeafgrF7Pi",
  "key33": "4aCcKLKhpubJHDnJmDipS4dDQh2QwtqAvNJkj8GNWUFf8SNAf33G8PRc7aBPyWp2PoM5BNJVDt8aLxQSeA1CagXd",
  "key34": "5S2EYQ1ZTZEMfkChGU81fqtfTqfeBv5krcv315W6UnHMFioc71oLWngFxR2tcmwzVPrm7ETS5XvqGjfV9DKgA8Dk",
  "key35": "3u9ZJHXxHc98W6ZmttgnaHcmRbsGGoawhkyBW12c8UDaXEdQR4cnSTGGFa2XsWVVMyQMxKtV8YE9P1zYFYyt8b7z",
  "key36": "4U7uoj1h92Y82Wa4XALH8AgsbUBUCV1MK2NGZU6q2gFkuWo9Z1gSkuyB5aqyb5fr9gVZk3dxeUTZY6LVvtKGD8jn"
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
