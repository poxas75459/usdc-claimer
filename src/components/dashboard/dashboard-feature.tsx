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
    "gVHRxDrVKYDa6JxmBpwcSsx7kf979WeP5c1vAq2UK19wJAxw3Pqfs9bbJYfk72PXz97pPdhcLXSQiGvc2yySjES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UHnie23WnqmFTQiMNwm3QDGucmKCuVKA19SgGw7DpstrjNYPs63yzp8rzgT5gVwF2tYvk5LhihsVHr69ajmnouQ",
  "key1": "5YEXKJ5Mp9i8kTLDS3mript11NH9Nfyhu3SABtcPH273cA17Kc1GLVnjnZqbCzHc1hapV4qX9qjWH48mxkyiVLzX",
  "key2": "5GXAeAR4Lta3hwkvMvnrGM6MmS8apKPjcEfSvJ9uz7VqSstx7No2TC2eZMksfVbcwcW3pjGcEFPtvBwJECvFS22k",
  "key3": "67Lc2hL5a63yiTR2Wh5iBiSUP6WjaJb5PqKcybjxojS8hHvJXeMYaFa1F6TxLfADptB9iNTgCGRBsUQ9DqRa8C52",
  "key4": "45wCwqxoNnaJb6XaqftoJC1UnivojJRESMFbtxiBK933nKDE7YcN8e9auDd2QphXCBDKP8bYzHTZUZ8aNe6fizeq",
  "key5": "3PPg9wdpPrLhzeXia29Fns8pHfA1xZTckstdvmLZLt11wA99GzW7srFwCuYHENbf31XKDsNxKKtsiwykatJZscok",
  "key6": "2uyd1seKTmoaTySeuWQHmumNeWbxdh1ML3Az7bb3FgS5FFdTrPvi14wtRiJkrXqv1uxKC5BH29pByTGuc56TeFBW",
  "key7": "2rD5HooTkrryNtB4AvkjkFfcnicbcdPAVvCtmYHyCTneLiicxpG9boDbAotymuYYjoAvkJ1XoW8P4JviXFzuXc6y",
  "key8": "5wST4fdbyEkm6qsXgGUe38uWstBjnbyrFHxQQE2NShfS5SYWj7jnfpgrF97H8UPDKcAkHUeF79BZmxevZVQBeKtr",
  "key9": "4cj9nnkCMY6AygJNYUJx7Cd9megQrzGfnCZdQRqiV48eKeBjcnTdtGngUiZ1KUdLp7MzeBBZTy77uiaKcUhhmRzX",
  "key10": "3QsrBvEhtgMNUGe213yfq6mKZAsYX1GzAXM3s1x2uY7BY458kifRnNHa91JV4hJ6XMUNnfDogUxSZv58AuM2Tfo1",
  "key11": "2rmWvcDCazxJmVR3ffYAxu1jqLtwM2fp8KBhkhsRN3uVWnx2cKHoQeSKYP2JKY4TVX8TG8e6f9xi4UpnPbxHDWd1",
  "key12": "3p8NYGbMXUpHzp5c6EiCU1HPvfTnuHSiQhp1mdrXL9jHKtyDSg3GPEdxAJjKbgyymWDMeqGaTW6d3QvjvBQRnUuX",
  "key13": "4NJ2PgeBV2vYVGLHTkgYPEQeKzTw414no2fwG5afhgAmFK6yJtRPjydc5gLuFMbRHTtbXD1o6D7jMB9byZgDN92P",
  "key14": "2FnBw95z2KvbFRPGQhyuMx6XjwrnZAB552LNbC6PZA7CFVCywthUfGXxVdg4XtkaogdSCwvvzRk6Rwf6pJiLdYaa",
  "key15": "gtNmeRSsjNfRFRe136xVyg7ffLfSHMkvxv2CXQYSMXJT1mB9szuK8tHEJqD52ecX8z8excQx8verNFPUeqgemrk",
  "key16": "3ZWd3h4V4vSGebhpkYGDPQdjhiSoQ3Czjp9qUrHA1HhFmSTD8ksJQUMS2hScVb5xPnTfZRWTUE1kfctzGZ3L6u7q",
  "key17": "2CsH1nNdgmPKU8RWiHTi6RYAJo4zhvJE6wFf4uqYBvWXRA7uETfqc5EFB4294JGjaihtVfFtFsqofGPdEtEKPSQF",
  "key18": "5fbPYiQBwG9dMHWJuf4THpJCuE5Z6mr6baHDUU6KWQWbL4r7yUZrz6DuNrXiCNYJQ4GnifruSZBkYNkEe16m5HVR",
  "key19": "hV1pewsMChuZ9QoPbVek1TNMkCsZWEduJ1ZPtHnBhPmFzFK2RyAzUsEebE3J4Xoskjx4spJtbaKMXx8YmUQejUq",
  "key20": "ABeTF7aDLhenmHBkxKgMgt5GFE9X8qs9YUavDZWVTRNS7Jy6zwmoNcFShKsEyMdZ9u2imnsCJuZcHNGRUzCyLTY",
  "key21": "5maWud8f5mde3oYRms9ifMRckPgCibkDt17oRbSgbVsW4GFBf7yYUaZRQCRWYF9JUnRGTHNPG72LsLCsomiaepgo",
  "key22": "5bJpM4Ppey1Y9DsxQFpHg3L8H3Zn5GeYTbz3L6D1nJ91e4yvRCHRy51oWrKsTA2RYjpMko4dqwhrya687TTVT444",
  "key23": "49WmBfQnWogvPKbaBqzj7Lv1DqaUtqb1pYZYLiyWnE4C2cSebgF3h3QgYShxxUAbMPQWqP6C9nUWseqX4dw5rsZx",
  "key24": "4teQPJVaPaNRDNFvRF9M2YZhtk4sC9sLFCvcSdWvoPbY4XYajG5hpn3YaNFKEMFbeQVSsYoid37hRAGW82epeEB",
  "key25": "2HvBBzpWHZ36ZUWkMMgLk4EomFRk3sacTbUhV6TauMTdenaXTZos5bZx7vooQvGHG4XWek77Yy4w36j9JnMhywkZ",
  "key26": "4FGk9t8N8cs1dDMMLZrS444bi11tffHZ2oZGBJJBBRYg4fVEuLnw5qqCMZKF8pykctvxofcTRMNZBTgs17smXPxu",
  "key27": "3S7UDx5V1W4NBXb5pUt8KbypmdA2ohG8QkSBunF7tnVJnmyXrxfYWfJw8yAFhsKKk5wYVYzgmjQriWbaZ54UtTC",
  "key28": "2uGsJ8aJ5Gwuu23my4U2Lkm8NikFMw2GXddUo5wNpZahJq11Qfkx8h99XuAbTaxQjs8Y5KBCBCW9EGU7n7R9m2vU",
  "key29": "2z4hrVZAT6Ykb7sVLFy35m4z196hGmFzCsaBpZEm5uG74Kjwj6tbhiMduZGaPnT5QEyHzxnLfyZR4PYZuqrMJdtz",
  "key30": "4va7T8DejNkpFX2WgNVKzacsvXRCGdEeH6EdBP4VmqkfMK6ckGAmJyrDnXsEYGPz689Jiby47wbLD1AZPYbKk3e7",
  "key31": "2PvLJvXbWkBUemZ3XFjaWvdpVfLbQLWoSUJCzskpMKqgxy4ZxS1rvEh1t2aE9tR1QR2tzQkvqnQxgrH1siGVpbf8",
  "key32": "5fCabRrX971imR4MgguRBywWZPrpk9Zrdw2c9zupLrFgjcifQRM2pC9xearJKEPsa4GoySnVdwH9d7R2GwZykc54",
  "key33": "5Hq1Fv4AP4eyeNj65dSQyQxG1tEBW8X9fwZQhMm8U82RTV5ao6UcTmmnWDXithvY3Feh4gNi7j56S9gNpcXzQXCz",
  "key34": "2mAQ4UK94QJ6jSdr3kyFVXWRPMNC9BEAGtAU9HUko1pruSvSKDgmmYTmwWB6tZTT13CiaopPxRSAewG8fbtgdRXo",
  "key35": "9LiDedQhDCzP8KZwX11ow4xTnAMK8Zvi4FSwGmBTx5UHnmPsC8Bm53LnLAZyDp7f9vU82GpsPykREdEpQLqfyzR",
  "key36": "HgKZEfny8fSFKL1Y5A6t2C2bpCfAaGKJoRwmGmh3ad1TtLLcpz8p7VtJTrkzVm9Kt6KJwK9egMsWmXyXA3ci5LJ",
  "key37": "5VG9wNWeNYYgJ1tLdCqCGeT8dQ5HUVFmYR6JpHCUK6bxy8CsNt9n3uhRtALAGLFGAT86HCLXWdN5nxhTaJEVtmph",
  "key38": "357iK2FoZctAaXQz6sHKVPBME4PdU9MTWKDvG444bbYwSMxfdrCKfpZQpy47hiyKJULGzC8AfDCGqjvaU9zBb7W",
  "key39": "5NR36oyh7NXCckPFBpmVhyHmYmF2UdgdhUSMKJVhvp1uq7DAtYoPt231Ab1CWEV7tLgMU9yehE15VJZ2DAN24nYe",
  "key40": "4N7L2ugchNJTwHKUy3s1f6L194yaj2QT8nfE4jrQ3ad7RrRVkGQc5LFZTSCWPjgfrudYDzWJEcvsgZ5afT2WmYsJ",
  "key41": "3LYNCYLeDZYk3r2uNBQStP8ziAQhsoK5tg1auHiZVu2LbRXCYqsq6mLfbvuysvj6jGi837MTr65TnkpFY38J6hm1",
  "key42": "3ct5d7CGpQRgdoZgyUhGrUYAgTQ4R7vUvVsbGsjbTRshNDqEnZKTQ8MkBKESiAz7dnkngeT77jBqgu6Zsh24X55R",
  "key43": "583eChNrNVmpnB8uSkLNwEKM7dXjSwidQbkEbn3RG8zuXxcvUtGNkF4imecGzGuPs6RDW3Lwx27BbvUm1fXwMfKs",
  "key44": "ZqS8rVfaUEVB4JYRZrfqq6YDpAwF2hFZqHquGstxAnFNnAgYmh4cs1upF8tQGG5U2AU2piowijsTUSKo9w7VpTR",
  "key45": "2Kn7n3Cv5NtTCyRGoHquELjz3xvJ2fySUZVcV6WozWQ1aCiQwcpSPJ35myn3NkoH5bdY8sdr64aJBFFG3b8iGYsG",
  "key46": "3gczrB6FdDJ9gwTV6dnYrK4FjLTFvBZu2raUnSF2g7VZXGYiTV3SywpF6sRkgoPpSYgbw4kD5oAcQfGA6TvW4wRg",
  "key47": "4B1YPpgQKYCjHzQiVW7W8pVEr2f14myrxXBAmGxsmrFR5D2ksEFKPWZxa76nBeQo5chrDpe7FBnzhWtkTjGcS6PY"
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
