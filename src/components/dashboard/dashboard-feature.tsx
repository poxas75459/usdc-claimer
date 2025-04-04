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
    "o6MahXhQuwMbQJujaQB5qa58XRxtErLgSfSnvdZYKDSgbpC6fEbbhPGDjV3qGTqvuDzrkgHDmnqHbseHALBwZZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eo7y23WnmYtDRLdBWEwWjpZB7ZZjWwhwkaFMAEQDzQmD3VTsPFTmXSRnBYjBjtvMMSMWFKDngW98GxrVNqg26je",
  "key1": "3ZoTHkj6remgKmz95sHpcYPGZfN1kpJDUTzp1EvNpvNRwk5X1xBeJGMQRo6eaM7jcBWypuPZzZwSJdzDMi8KrQDg",
  "key2": "5PJpEG7HSZ9JJoLHJmfY1qJqGfjU4nSfWXcd8EN4a3P4zRnXuGiJEoeoPx9QbiWiaJBUzgkwJ6oBrTXWuy94fFET",
  "key3": "coJCFBXbb7EeLsEBRisUNNfzuKCgA3n9TQpJRsg6hLtZS3qNfwuKNeEAsAjodjmiLCSkMNJSSDQxqepjz8RD9m6",
  "key4": "sUMRFd94hXkx9xsVfJh3KAbUEm1VdBki7Jxf3v7EzrDjo5qw1SmKW9ssQXW75UQg4mygqKQE7GghrhhJ69H3mbM",
  "key5": "HuaoVrf1izYnPxpQf2HHUeAvuff5zSwsKjWrb5B2keK3iETxJAQwP6pjndsFrTp1y9QuciA4ZWrW5SpwaTt6syD",
  "key6": "3yLHc4mh6jep3DzJYE9vVFAARqwTi2CR2McDyWAgrWCxxLtoLgvpeiVRsadTjoAss1oxSU8yGscK5xXReyCrtu9B",
  "key7": "2YxLh5HFKrKA6T59MKnQQNM4Aj1h83VxWXKXqdAvX2ngn2c9598V2Q3JEb8WWPS7V32rurNeoRDCeZBfvAmZEH2",
  "key8": "2ouVN1Hd1ZSH76LAMSvTqYbHtMLvn4P8QuxAHxCGCEbQUfxh66SUsf7mWAYNnFwHGYHLSJGfzZxotXvCroNcvGXw",
  "key9": "52AeqxJxEKTWKTDhMoVBgJ7hYqY2LjYN9JGgFKZdEFJ2SZRKBq94uZy6LDi2t47H5EbuyrMtwfKYPBrfdoCKDy1D",
  "key10": "fae8V92VY56LzjE7v6X7vELHYAYvtHZgRYt9xj8XLBrL7qedfkgWiSXjCisQwmeVQsvoDhyCRyxnnqTGJKgKL4r",
  "key11": "5Brtk48DAL3tN8yyShSdogVz4eV2a9ykrAtTbWcYECyanVkscyeWKMob86oJFZkQ3FkkeY3sWok21PEWAEmaek14",
  "key12": "5sbxdPzTsvn2WkmJRD6etcAdAJBX3wLB5ThE5pN9L2zw5PmhuMrFc8HXKL89CEKD8ZRo9g9LFTkWtX9aVFqXh1j6",
  "key13": "4BaBuTqrB1kkvG7aAAbfPPQvwDHjnKzubTzXWusMuULNxzL8ExKrp9HeHR8FPfsePkGSbfcDR28LdaVL7hkEXbg9",
  "key14": "4jhda2sqHFzrTTurfiwK6NfZBY9sWtuSWLahJiGa2UiKyLw6z8b9jCoNZLAQ4sctEgFXPNp3t2bh1HQVeZGgbndH",
  "key15": "3tyHapLt6VC83NfR3w5gV3EMaB4jn14bcwdbGNgTULFWBbbD8z84rR4ij3trs5aLbFTntNEMh1CedETKt7PDnEjC",
  "key16": "54c7goio3RVtsSgfEA6b6j49ceCXTUpK5K2qgVRX4Bg4fknjh4C5g6GmWwG78VahWFaaekhHsFPz94rCRdHAe7JU",
  "key17": "2M1GE62MevxtSmB6wa3v6Psf14zvvcutvQBrqUSiJLCBy6FSxTGkBsou2dVUVu4CQ2q239CJaWz4NyLSRammnqT7",
  "key18": "azbgXtYew3fDe6HS5vc2js1w1b8DKw7AmrDLMxo1m8v2LXLgBWqmauDtHT6ord5iG1GsyUGvLgTBDxTcXX1P6Qp",
  "key19": "3HkehxbPL1bd6cFVLWKwAeZGUzKQhUt8utRsQ3Y2RP2HzM4deyhZATGh6tJVV1hEQ4Fvwi7swbWcKZFM53TVpHy",
  "key20": "oXYujjZoxrDqYPLFuQ6Jz85A4qNhPnRoSFU9ExV2eM828ZCMdixBmkA6dwRA53rW6YPyDGfECEEswbLcsbxriS4",
  "key21": "56yKdBKGAQPpYeWjNtxGmH8ARYkzAbs4LfqpSWcrH4ebZYs9HJG6y7EyNiXdZ9dsJZU6kN9w5ceasZaig7SpCUAn",
  "key22": "4heWvSx2ARbGEF9duaqJwiyUsWUqRcRpuk5pBDyDHWdS9EtVg8nKUvt1DVUHtnHqCMfxijum2sW5Jem7BrskygJA",
  "key23": "4a3Q8nsfkyWewrgw93TYPsZZpvqkjBurkhVHMQAUohCMFG8H56qzWyNcnrSVa1whRvrydJB5i3eiBpQXz7d3vqNb",
  "key24": "5wLSeYsS2yA5Srf2hVjfoceLHjqtG4gS34EBGmD2euN7LnawjFHc1PJMTr5L7s2XmWJDCbTWwXXTpUoWg7omfVE4",
  "key25": "49bLeRnu8gXqoB56aaK8o3X8tacEzkmLGCfJ41LcKUV5PR9BEzAhwwtDAPewGVznbWmQ5kjcute8s8VSptkN7Pds",
  "key26": "2DdL7P3bwVVecq5bLhApTSwhrCL53CeeA1Q4umnQMp6Z8kd8k2jsumrgxwwjgL2FPVYjbUpnGhUqL7mExK5L6Mtc",
  "key27": "5ZvXe4gNXVYBCCyDHyMbiEG4neTFnuZeA1SrrEfhRaDgv9DR85CzuRZT7tfcNk3tB8VirQDjJx3ndr46bNXp86wo",
  "key28": "4VD5i7tSZL9hdBBK7Zncgj4QTyRwGzmokFSnY25fFQpR8Ar325PrUCYzKKGWopN85PF6HGKvLypNp3XaLYM7YRN7",
  "key29": "3CrKp84CunWSGAD13uRVcipLn9MemymY6GmLt3vLSSyKji72MTeGumUnnL5DXnxbkDNxkcsDAazQx21scphJ3dsz"
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
