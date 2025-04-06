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
    "3swowWTjhfdfBhGdhXRfDLLVJTepNcQdmXuhkVuy2dV915FsYd1z8XQNT5md7FNTVQnEwKxZi61uS5Lwvqv2hFj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CtR2iYv6PgRQ6awA4qjaYEhD6xBPz9jqNdSEu6rJC1D1PagzRRZN6NcMiJT51qrZvmV13m8kDwoq87CrVy6a8Z8",
  "key1": "2ffJDXS19xm3KsDsqeQSwEycDSrHpdRZLWpXhFSNENfHqZNuU9tgHugq6NBS51VvhUMZZ7ZFoY6f3DXXP3WJ5BEx",
  "key2": "5HXZF2veEnGGMZ6qrrUHUWmrxJHWLB8ce8AEoyLF8jeWZeywhTuxCXZzC547b4DiWVfDfBRSVEHFrhjejwWWmXVK",
  "key3": "4H88JSe4QZ4PT163PahL5AnSqQUncaGh5NW3VpVrxRuPjbBt52WDxs3TJNyvBg8PCKJzWre5pREur3PfBDV2mKzw",
  "key4": "9TWwufvvT7mJaN5rmJtBHo8YVWvoULk9h1Z3F5W5tMjimtVMFnGVzksHHSSWXMQh6qk9vMXYkQYePPYhPMLQrdx",
  "key5": "j2NS1WmAqQ3QUkXX37amGx3wQtCC1wZrqxrcoup73f4FvQjTH61wgWUw1K6JmwJ2Efc5cXdGdVyrY4t7AHgdMdi",
  "key6": "4HUgAxZ52H7EviTMcyTENVXNj4Q3SdLAcy94LAZrcXj86phxDMHt3oJ1J7XY6KiCTvYfsdTwSD77YHpbGYWsE12Y",
  "key7": "5KRCGV6q35eVfZRvTpff3GxdPvJgoeunWyMoATBH6zF8ao9fziEfoXdP4sCvXLaANn1PSDywnucgcrzwzJVGcwiB",
  "key8": "3VjrnhtjNQrqQHHLUtzjjG3DG9qmqWpWE4KGG96xqJV9js5DojUWdwRm5mgs3rFzpcFwzDqUugKSpsCRqx9svw5x",
  "key9": "bgLYcBmXsmbsd5sUkvGNCDYoYquAcggDMBnF1fGA4wucbJZfQx4bbReYGmaxxReXvvA2e9fHz7GGKkZkoqhmUEj",
  "key10": "5evHCjNkAw9UEupFqwDf2i326gVvekErgfZTnanLtqdk9FErG6H7XJDMvk25xTigpX9smqsdacspRQRAtwxr3FWZ",
  "key11": "mhZvC4LwqtA9z352QtvMz6QwdSD4cdEdkzgayXqAYjdWCYjpXdX1BZ4sWGAh1PJcixKJYDVwJMsWe4VMBSz9rmq",
  "key12": "4GwHQU2bGCooaEuvoNzfh3mwHVDsRLT7z2Xjrqhj75oeqFzcukhZzZ8UMXazzXgdYf1rQExUUaVKDUdcxVHfkmhY",
  "key13": "4w5sET551o72PuoC9wHt3UPUbpW5KtikiarqWD2RJGz4xv78DQ7Tq36J5T8bjJfEnzCLiom4dGAjimYtAAfZ6kfo",
  "key14": "5tcciEk3GxtEGM2KXPff8EzsK24C5eF3BEuDUAFier3n2Z1RNAb3YtatGzEQSgkjnh5Y1HBK9S6RsKXaVX2eb15d",
  "key15": "2EUwTZwdzfnPrd9uPwCQxjqWmTVWjRJXgoDgSB1ah41gZVRpV9Q288XS1chX37BQmFg6HB2JPhExCYnLWAPJDUVH",
  "key16": "4USoixsGgT6XoX5rj2JqkunVQv48k8JZxKkA1AiwZQ9XUg3KtjRpgD3raUN2V5XcXj6TqyJYPph2YXYHS7w6BRKj",
  "key17": "3ENFm7UYicArHZeFdCBvfc3i9N6qbmBwRWF8oE2TKrDHUUoQ7ktit81DJeAaS83TR7Dk8FzGvp9pFnVBSLoG9bjz",
  "key18": "3qo6s6Mxwzyn9s43dA4DcKijBM4hz6YVDe1qzsLFFV95ZsrNsPUjrvprrN8PhazWbA7UJEf3dqtwGCgkwgmtgLBi",
  "key19": "5dSL7QaSCoejx2r9orvXMSWu6Gqghbwqqkw2EpgJM335NqKMZZhwKKLafn7yvECYNJubZxWv8URMgsQrNwBq2zxB",
  "key20": "5hxy1BoHfnJX4JgV9KYZUo3RTv2Rziq863xXi4Y8qgACtnRtrpbUuJy7G32s3MJU7dUzfRREetYSBw7LgHoKN3Zi",
  "key21": "5QnryZN1757GubgyJtcEYgDkKhKupVjCtq2FbVG3oGt5qQRBdchmtQnGZL11maGxqsLpsJG9zAGb2SJnDbxLSLxV",
  "key22": "4zqDREpqwVnM82iXbSNXSdPyMS6oz385JVRaa9ksDmky7weYPmZbhfMpJXawDEoWTKM8ys9a7kbraKFTnLBHuDmj",
  "key23": "4a6zuDatunyuM4GejjbPJNK6xDvLXPRk2MFQBHPoXoCiDUdttEVPLWgzf6N5e1KwNCzjiN39r3psvP7ghftvoc4q",
  "key24": "HpmW1QWGyjW26yyvbsuKtpUGeaqhLBysbCyGws9m5hp99eXcHdPfLNoUMuhyg7Dv78cyaVtyYNCtxu3xo3xNu7F",
  "key25": "2UUiHtaPxg1ZTuhxYt1Nsessq7FvWQk1cArSRD7Ku9GKGR611fhvzotfQq27AioekR8VceDYCSNk7YFBB5z8YPnH",
  "key26": "9wy8Fma1uTqCzHxJ3X1G7xbAffXRZZ1vRRdV3GhV8uNzNmCRNxif1ByatQmR5uuXyvXUVN6RgJNLAZC9fBQx2jX",
  "key27": "3Vdbofsvci34JgxHgYawLTAYofSumpNjTHY1EWFts1NFqZkiw3LCF84fN9Ca4rn2fiEmyqa4hgntG3nfYGG9xJXW",
  "key28": "4FWKftmaHjWLa15De26BMbuikkBXtF8hiVLBxnomgoeyMDPfvdpQrCNeiAsuDbeX9uqJUasVZJ1b1ocg7JtUPmSH",
  "key29": "3JfLU5G7PoQgPd9Tq2SNWsDsq737bukwsPUGJAyLjG7EQRx1ZP8yF1oJRR8horpU9pwGRFaxnERVZbvhjDc3Phgc",
  "key30": "mkFpmenTdZLib1MMQQ9ZwprUBe1fGcAFsN5WVtys53yyBrXoEyaNCHVYpxpQkViBxjGqnYnbCiGAm2yGDWxyLaD",
  "key31": "3CLLqSy7Eyrxg1xZfVF5enU2TEau5WgDRC7vfMkMsJ1Ug4ZwD8vCZFe16ApauXqQFjpysq5nR1TfLSxDvMmtxjAT",
  "key32": "GEwjaY6dtMVG6PzSp4yvpEHYBHnPPRTam2HdhwR3L8cMWKYCeBDjFoTap3EECXUv6XrFNoam8U8PgVnaZG5hJdj",
  "key33": "431qB1M8yT31cHan8PpkavfCLqmWiY6seYoJ76MpPTKddL92veYZN1Gu368ozXuvdKMTdPePraBf4wbnrsQAEzYH",
  "key34": "2PUzFmp7jtRZNPbiAvg3murp1FEUvHYrj4XDrdDKBjxxx6EkMA9Arnd9dkZx3p7Qsv7nKVtm1Y1Dj3aip4vjZbQ9",
  "key35": "JVDkmKtbiueN5BWQSPeGpe1Q6djyU4RREqc1kdhXmHRu6Rsco7ck2xGVYtezdJR7inD3RKhQhJfHW7FEK9jKZ67",
  "key36": "3jrz8ZZhb1WnnXiNTjdpANSjxoeGjciLarjWqyVL9c1uPcVhQGQPFEydu8NVVyH6AJsRYzthQo8gzXmG62nPekgB",
  "key37": "cS8rKUF7LeR5arWohNRBtuc8oxCFEdji8koSfmvXh1HBxPayH8djk7gYnpzJrYrsY2pNRtkVWjyT3bgU1HCyeDJ",
  "key38": "65VSCCXsBMauMzqtjiofcnis6oHmVWxVxvB5e1CpWtkT7F4LKd8LcKqj1LfN9Drha1ZBcdRGTVeqfhMTenSBzMit",
  "key39": "5Q4HsrcGmTSisNXZq8EuoufM6BTEZDJx1CRRLt3bT8yeT3R2nucdkwznfeuvpHwoXsUfcjMSTk69kmkpDmmN1ghf",
  "key40": "T22VyAHmH7AVqJck1vQd43Pu7x5sEp7GDQvKzR9fAC2GY3RCrtb53C3K2gyVxF3JN8J3qXcMokun2HPsSewYFi4",
  "key41": "22bhsWkemJsQZVo4mcoZEPkWFpQ2j7YTpvXSfoVY4FQ2cbL7yEaQtV3trANg6jYGrQUi3YPoUoYRB475dvMFyHjp",
  "key42": "3M2DpegDJ7pyoF6yESbQsNDJDeBX49KTvKkHAAxwgfzGMhMGpo6D3HbfmH7CuwUPYdymrLtqM5Pf8QVYHZjWNXH7",
  "key43": "3TebukbEcJMeuCQvy5HW48SZYDpNc4omX53P3GNahsPc9bNDjihpSpG7siwfaniF7Bv5NkWjBmVUu25SCjrkw2qk"
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
