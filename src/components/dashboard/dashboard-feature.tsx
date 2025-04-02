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
    "3L6y6iYkRvPS8XKx9WbgZ4rKF1NwSubc1zmhsEFmsHZK2SDjhX3YfC7k5AotjfxFDNtrn21oJGuGkjSpmWJMhRjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wPvi74sh2nUFwrYM3DgHDUQnUWnVmZjscjhDT1J2BPzMjt15FSqW5XTaE3gnvmkWktafCSUi5q2JpTaWHavXmBc",
  "key1": "37ndjNCtk7XHzxKHJA3KV3naqsoU63vgqcaCW2sWdPnWYWz6HRUfG4zgzuvCdmX5QywvpNBZ2Jd14pEMSHCDMxWd",
  "key2": "7xWakcuEiRTv4JJHnbWPATYqB8gmBhHM9idLHsfAhCoRGx9zjBKWBuc8k48WGK6rt6TkvgBWkjF64zCvwR3xkgg",
  "key3": "4CuT9fPnFNS8LsB52HWi8QTAnnEwb7NusYLoQ65j1Yzxj4Ka5oFZqrdFjsDRenL5Esuu5wsHU2pitDfKMcYvLcmQ",
  "key4": "2mmLtg2sB5tTescoFkDDYB86TT9xGE1R1W7nGBFCae3j35FidrWNcnxnBFuA8AUojxz4ze1au9EvYeiuZTqrYTuY",
  "key5": "2BwSLZmzcwPsyGJhBSxQ7PqbsvoKLzd5YqHAK1BrMEM1LbdRxRMxnH26JvRFYRu53ccpodf6HrchqCqGSQ2epmX3",
  "key6": "Rydky7sLYsdAkAcBBAbufECqidsUm4CnF88wG3Rt3cGRHNsfZkESAiGTTiFme5ciaLiEh5MLd8UtviG8hSgse3H",
  "key7": "5mssr9wRRkAFGQQqa9KnBX2ds6frYribxajrxdN6Dx6rzmNqKJ1UQFZAmSDMtfufphWaYrtVpJGNyBLNWbVBVd1Z",
  "key8": "3SKeLa3vRtavzKGLkeJc7BtL9tLo82LEbV28Mkc3Bh1rfKkPXW1BaDSkdixoJ9RvEXYwENxBvmhZCQBSgfWcwmkx",
  "key9": "3BYQrFED3Kcb7XmJxwmkEoy4dxQTUqYQEphUmtqDxL1Mp8ZFDeYsAK4VHibiUJi8q2zEv4xqfKWLhPYom6sN2PKq",
  "key10": "4gUuSiX9NocxWFZmMJ3FjWsNrxpfScRLpfif14tCG5HBwDmPPj9YhkVQT9duKMravXj2KoztCfUcPgdTjQ1Ls6gM",
  "key11": "cCZjD9MQDPmQyBYXS1A8eJaxJav6EWjH5kSRuKk6HGVmR2GUxinqQPD49S2FGUCgjv5umSwmPpqoV1SbBYcJP89",
  "key12": "633yD5avN4iXMzPs2cNQSB3Vk8sgT8qDnRrKtdG8EctxCUd12HjYwmFVK2hpR6TSFTwxkNWxw5ARwwanBAceJdSr",
  "key13": "5rfCofF1Aizac1dAro9WY3vamyvC6MB3rC386Fh2kQ3QpE2RQ11obS399ezNMNxqzgt3n9rrBz7GAtG444Xtsvta",
  "key14": "iMjiiPzC1bMCN1REVtxS24FyY7FjJ4hoDWjwpmzBiHFEa4W45LA3CFzda3iMZQJWJ8X1ThXzNq2u1FuLUYZbtT2",
  "key15": "3wizFwMfCXshLDMvLXjf4qv7fCj5RYrLgmWCuKrHAnCyKiKAoHWpp85tWKnjqbdy512gcnSzRVtScFvH8YCdcyRD",
  "key16": "5UxyXx6xYmrBzJLPZJjRrFEHe1uxCuiNEibCzkvobw3UDyzv5xrXoABCUnNUfS9AeVwjxCpArSDAYhGJSLM3L7nC",
  "key17": "27mTJMnocMxNoSKiSHkMW7X2A2h7jwwNvEW8f32UnKABF3QtT7bk2HhZg8pyC8JCKjqziLVNsyfFxWXJh2WmiYkW",
  "key18": "2jFc411Dr3uQd9wsbc5mU9VDvdpdfwzTW4Hnoqt5B8vPaDsc9Hxx6uqADZWeFngfwmWKwZxNz5cKpNYbaS3sKAv8",
  "key19": "2NHzdcNMd1Mk6hzUBfk16kGhZb2qrMmcBoA42Dgb8CB8Y3GyY7FMCgVsnrznDX9KxAd6okDbwDBCo3H9up5FhqTr",
  "key20": "hNsVwJuWcwi3rLUUXYbhzbyQgxPBRWbuXsfwfHiVnmic3PaWLtzuYxi9z4HEgRYNuwN3Pb6bBLMVf6wqrPQo63A",
  "key21": "brRSoxBZ36u8bA9SZ8nDcRy4iBa3VBHLxxzpziTSEZfGGX9P7HmL9az9teKvia2X7s8KKKij3xypQsGt8D33ZA6",
  "key22": "LjK7p2WBNkjAuXH7RmHEkn1AYTMLZcom8k3RZYtyJ4bKqQ8Dyvd4ULGyH81ZD5H13MKKE9Jd53ACHesze7ra7mA",
  "key23": "3RtZ5kLWG35PZp4QCVBoEEa2pq1khwk3eKmyA1kQrykJCZcs8PpYGYG7o2huYUyqpMTNKwoFRpdHfVcfbyDKqckD",
  "key24": "3QKH25L9whoRSrfSAhNzTLuH4npLkC4YzFZHmnAiGhSsPzDxZUpAPZgEW655na4fPmmFZ7SXcRfoZ39Lj7qZRGYk",
  "key25": "xdmSi5bZKrRtcEm2vGVRxx61UVGNLCN3zxUH8NDtZ9dVMnw3x7czpB27a5ZsLutrq6gsSTyN3AjppTGqtqRMnnk",
  "key26": "u6YDaxA4zXPuSaBthgADV4tGDFNU9zztShWJyNDijzgMAPN3KThX2isno6nPEkScUDmzuqN5fxq7dzCkhNdciJ1",
  "key27": "5UuNxo5ZW1PM5c1Z1hRSet41vKvFxHaFGxNv47qFr95rspFoq3KvRCjw3zWV9kpTs3c6n22ZrFhfNDsQdXujuHRZ",
  "key28": "3dzbjwfeixpyJNSnfbQuifvbYApwPTS6Q9gXAcpAzjaVxbn1ECEJbhHb2EJEa6HL66cZeimoP7r8z6jfQy9szTZd",
  "key29": "zhCGnjAnXAET12nfnPRGGosPUTwBJMmZCiypDr6xzs5SjKoeLSHZ1EqmXvsRc3L3aReAFCvn1TGjrp42T6ztsBM",
  "key30": "3kvM7BEUkiEked3zZ6cNpHYwsdbFkSe3EH2S4cC3df2BZjJUH9YrqiTkxF6eR5WcPfgtuRJYqUvNxHCnrWDZBeAi",
  "key31": "3yTiDugCSe3svgnbP1b4z2SXtkYY6rC8hCpQHCCVGe2bT5HqRbJEBdsdbYbgFgBUaDGgAiF9wXJCZe3G3JntA5fs",
  "key32": "GoMVnvMCKNwxho2TYHcTwp7mgY4HGPDvC6JWcZfmemGuBJTkoNZGKWmZMUpFkiUAr6NXxg6tN43m1ngcTa1319E",
  "key33": "3mMbVx2KmhUDbVGqzcDrPYgayFBLz1hgU74WfuWRw2u6cv6hobCUimdh3FywnHYFRQ6KzyaZvTrpLusVPPuvrp9B",
  "key34": "4buqJXsz4KiSM1RMABHLvoFVPU9UdD7ZQexfkYu9DcqcQNCj5uLRBsEPyFHwhCqdcZFG36E5CxkXrkG8PfGp3pc5",
  "key35": "37WQuYh9BbCECmk8R6B14bqAfpqnqLmhBWXFYyLPgRUWuFUE3qqJfmeMXVzUS82vKb9rrVRGdQnBJQYc9XC2HETv",
  "key36": "5ipxNmwthoQKdcDSNDKFmbBvKEAj3hZutLd7dBcg46yyMEzQgAkVthqAYkF3sTR5L6qerzFcS7sCrx4ZAtFPJoSG",
  "key37": "9M8apSbX8NCnJYnUD9w2WbCq34TmyGdE1nyj8mjbUCnvxpLYCraGsENnA1PZzatyHxoqc7C66mvfgPPHzReT2RN",
  "key38": "4yGc7pVKVeaJKSbH3xxpgmLQHib8cT86fSgzdmemQtvTwo8Cn6kfjyrJdjxgnwUKZKWycwQE4Y7WnVyiW9JiXEhx",
  "key39": "cskw7SvdR3oGBiopC63bHNMUE6Ns8d76LwbtkrWLhFeF2UAB79dPjUxyV5ibELSx2m7HtDGLNfuDNeFdifcrVKX",
  "key40": "2SBzW22rRYYbys5GhW9bYZyvy7X3MFnb1B43GoDNPMEqdZkv5kzv2kWZuak1EEij5wkJiKKULSD2Nt8qaEV3sdod",
  "key41": "5fJmu8UX4xcKmRVRtKuzKKm9UGb9L19XRywd4J4wAzUrQ2yTY6Kt4VK3RwrfdKvhA2MLQp883XrVBFAr3Q9hP6v5"
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
