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
    "4aTvUkwaZfbLRjpxaSKicVdUGY8Nckcra1jxT1twm6hXTMBQb8ezmJ2BoFPBGRTUvzP6CGJkhbCATuekdMH6aULB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qUAKAjV6cqCQyo7ViHnKUWJVVYS5AG1f5pURavMby1cfaUVN38UwS1cZVfAJVzJ3AjMFzVb5uSTJo3kb4A1fedr",
  "key1": "NoV3paowAHBv7h5D37R6L94QmzM9Um7CeVHpvLDMToaRLYTTj5T377GA74oqQ36sDr3k5spA9CLAkFxQ4uCtVZM",
  "key2": "2Vz1opa4iHvdA2qKm4nxt6qjZUutgxbbUD8YMvU4LrACSi8e86dPYw1iwn1jKEj5gV2DME4LU4oibxZhXNhPEX5T",
  "key3": "4ZmqKJAdftHZZacKZgJJV1tehdjAJePVR7EZFmgqCwrYy3RDE122ZcWxe2kFYKM7HvHUw4NVNnn9NAzasDvJKoms",
  "key4": "3tpxWF62CFHV8anmHus7zuyVmqxmmLNqu1PBCio71ELUNExM7nQmS5KzRX1MP2TB6g93qDhXNCe3ZbcdHdqb38GP",
  "key5": "5UMjCm4zVWEiFQT3c4tqboSkzvRRPNy229iN2rqrGaTxZ7fYAwr99AxTaHV7YPSxrtyPPAwgMuh7tRiHykfeEKvQ",
  "key6": "4VXqnAwPxkjiTP64tBNLZKUYFkTAddfD92TLdRbknNPHUD2ZdnkvWZ9voDoKSbngkob618MuSVMGL7DfgkyY9mMR",
  "key7": "2pFSCJh5oksLVp4KpiMXJVNrFa1fMzR7254H2xW2fZvLgMKtK8m8V1Km1H54Ksu39U2iABJGeLgSxQZqz2LHLsJW",
  "key8": "4VSRdH4EQS5Fu9KdU6ecKV2YSBF4EGexTp5wV35H1kvPcDn5sV54n265ifQfiA9T27KQoRHHqaKng5HfxoQ3pXRj",
  "key9": "4824XnJoVzE9GAERWnqz1pS5x9PdJWRdUoLnx2gzB6oZSGKzEG8NBh3Fe92G45HeAu5evTadVM9hpr4A7DNhumJU",
  "key10": "5zoGcTRFcW54T4obz2RXoY63KDkHVUNuNzangnqVYNVdacbknJy58aUALUcsxGjCm3gUsNP2NXqG2jW2hXCpkxqd",
  "key11": "jfCkJrxsFoHxV6j94fdNw7BwojBJ8GhfZrUzBHaa3opeqRgZhiaBzKVhiotsLbRjUzGpmYEQvXstZT2bk1T4QXC",
  "key12": "5h3XxMB8Hjhn7WUcHauYQ6MifoMdmgdkwsfNBJ5b4MiFTohSeRsxZpqxYV63fpVzMZ5UubmeX7hNjKxKX3pkGEm7",
  "key13": "2Ui5yXC7dZYTVLVw2GNBzeqbyV59Az6tLzxjBArG249WhVXt7s192u1PBsFB48Lg4nG3ryeK1opJLrQZTeGKpDfC",
  "key14": "2RtDKHLL9MK7NCR4L1KwwEesNSwYrv5SVcBm5utxFiHjTwatncnE9zTm5CWaRae7GA4zersjoUR97u5VuKLm6SCN",
  "key15": "52UKAvZZLzDcpZFf8tzs6BLMoi7Zsvp1RE4MrrBcB1gBmk3mtSwh8Gv8d7LqbtneM5TaCn8cUkTdtAkVueWmEetS",
  "key16": "GAjvZES9GsqvgL6ZTcaWgWdffUfxfHjD9g3mXzipvtcYo3Sgi5bnqy2ZhGUvAXqLxBk9kr9gTYRqRoPsYPdmrpy",
  "key17": "25ppdqdTjAYCvbdUUHqQZ17a7RmvUKqoXSWkUfG9P7sc8aR7fzVmGQurQfYgYtTgKheCsMG25pHrFQRftZAtRSip",
  "key18": "2SjJbCzC2d9UEHxxcwyf5rDczqLuxG2odUevobrebybch2ndy61H6NMSSA9jgnWeCk47akASNdT2nWAAPEGeQ1tQ",
  "key19": "4cgXsr9vLCy22Kn4hAV6x1zJVvDZpFHDYxs7gQX77bZrPKgJL6f73hZxmK8S7t8sqWqd8k2GZcxdCQMdj6svN2hp",
  "key20": "382Eph7wgX7PNpZ3SFQiLCT5C9LX5jnJMognCZqJQua1bhhKkZVnsGPzUG3QMveyKFty7GdVm6F7MmzX9Nda4exM",
  "key21": "2A9fFcDa51dmFs9yxbjjcsC3jrhignm5A1MNowz6k7A8Qj21xvQ1xJRqmYYy8Tykc9y1W4uNELgo6kHXHXRDQn3q",
  "key22": "pURqnXiv2mMPtuDWRyyUbkyFZgQ5ywbuJ4eqnV3DwCnH7U28K3svekcgpENqGRoVEcsdBFpoJRmdPpMfep8sD2b",
  "key23": "37Ad2h78ZVbzJdNCEtAhdzCvDJq7wbyqDfQtbQRbQdkQLduFZMbhLFFGagcbQBzZeWhXrFaFSzHfYeCJvGm3v2r6",
  "key24": "3y1p8h5JBJVPmsta5ayCQE5PW3dgd8eoVtrjxTEjNtgRAn4c5gkpVd4pEUq5taGtzsUJfp116uXHRaQx2uwMhpkR",
  "key25": "VTSBhbvUNwTybBK1BsH7RJHqxBmC4EerEYnUNa2Yhjh57Tjv9xKfTzGcmSuFhC4TryDatWuceK7KWyLn7jwzy8z",
  "key26": "idzWLzTYqbS4vQ7W26UuEGb5bWBcrBv9iMmsvyXWdue7hA7TfpHjQcsn31SDApKivR2FSDQ1cAG6x7wm7J7eHSB",
  "key27": "26pnrSCtdzCQzP3SRZT8ywfDJejSAZr9XuBZdXLT5Dq1kT59PkTdTmxZerUS4yTuRXFXiqR5jkeTi8KNBkpa5fao",
  "key28": "Znmgb3a6Gm5D2P2vqUQABrNpV7VS8wjs2csW71fMMd2bgPMY6msHun1FPGRbJjVh6WF8a7dRZRvPrk9vyVuMT5L",
  "key29": "2DzQCPjHMMeHCkbHN5vLyh5DHHU95mrUzxjyqX1fgDYNW43aCqY6weskUXTmJnMPGoVMqdPUgiAKBSXSktiuWyJu",
  "key30": "34DkHEJ9sk4UkqbgNjyHbiWV94fzNpouSJqeEWq5Dp8qRyuexEU1JXaGsBK4iRMSk5wrUqY8hPmT2H7dxz4F5i23",
  "key31": "4DAcTHo2ANsxo3tPGCZktMx7wpH49sLG3hJVijoEDgBnLAf7AFx948FWcG7oot1Z1ohQYKHPrUbjZLd77mHjd1t3",
  "key32": "65YhxSRDF3BtrV4CTMJn79xYBcJG4wq3ui7uLyFQNmK56iyxTC4XmyQJctGgF8uE32LAjrMCyomYzSm8CBYiqcFc",
  "key33": "2uQ93o8NeDHXYkJfjsAFusY1DEZoqRb6vzzcijrjBMG21rMJ29uwEXoNtfTuSYXqCwYGoVy2jRwpAZn5yLcEEsdp",
  "key34": "66Winm6RKZqU8waoYisdzhKmdqBQsU4iQZ8LttGJHswxgAhFJei5YxB2GBCyz2PmSnh3KBXCspxT2NWpcAJVYe3E",
  "key35": "3ymARYFo4pzwZSp19U5gWs2JjsYLFsmVCBZxpwYvtsZDRHXvh27qWGLERLyktFVdB77qCHyhUStpeWzyrGnuwwvW",
  "key36": "jQfKjqgk3xis3zH4tt8wTC6EZds9qBqRK32NAxQKogtDe9DsafJDckcV8H9QdJKeiaB4LqNpKkjAU8QAHScrQ2F"
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
