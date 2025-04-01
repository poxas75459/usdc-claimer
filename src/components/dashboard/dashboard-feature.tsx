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
    "3Km2FHhvgMqoss6M11mLLtwNdCBYuLxkwwLu2rooXg9UcyF2nRgKoxi9P3wqtJTDje8oiNzgpmSpDCgTBWLCrwPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k1bX3HFqJoi5zrjcbQYrxufRhJ8bbHDeUoPeGvHTi8f8XM6mg2ps2vUX1WD9DEqRex7oyfFj8xUF7x85DvGMx46",
  "key1": "5QPphZHdBdbqN8n4ZrSRJ9LZ1guEkfhnsDdaYzojXYY1xk3NzWh2vTD6gkptKWwbh1QoHFJiVg9DUrUgHjzqahs3",
  "key2": "34EiP89jSNhyfTpfF9y83qRB71Wm7UrjLR9WXzTn69bCtEQDjQVrn4NYEWQrHUUE54F6ajSK2bWRbXzUrJWv2eyd",
  "key3": "4T3ZpZZoRaZXKk15waW1pSrQCPvJGxrQS7wDJ77YdRsAaHDWjZmDxXCrEE4ajWu64Zkk3mvmzFapPdr1yXTSHo3x",
  "key4": "5yQaLtxnHFPL8MYqgcN4J5qw64W2MP8wKRsDx8xYpp1XA6P7RLcCRMH4uaRWQ4mf7GBhaArode4JLuZjvK5ci8e1",
  "key5": "RkYU1aBZNGookQirCRCbUGD1yuEQzpFS4PX9Z9L8aMbntdBFfSZZYyzVJjHrnfurVrFa49VsSRvLtCeiTtJsDUH",
  "key6": "2GwQ7FGMzopV2KrJ4hCWRcTDQXYrynbBA46FWpfDtBUrDCPDmFjua5VXKKUzAFs6JmhcuszkBsJT1ATGgQ2tkWsY",
  "key7": "TQDxTJzngt7MSW24CBDTF34N5nVpoFzSXkLYkZCQUbvviixcUVnNZHipZUXYeasmGcBmGWwf3mRur1fF3aee8WD",
  "key8": "2dnZM5ngdrLngFhkqZwamvdXbmAGhuk2e9W5XzTje3msmZBJiKJg6W8ktAFtnVUKuTh6JJsbsFQAJKLTS5jT1i1U",
  "key9": "4nHNvY9m6ybyTZLhSfRBhRQisXXG7EtJ3LCMpQqR7jTScX8qazBLUKL9eQcE1LL6da11W7cQz498pQvsV1L6g2jd",
  "key10": "5igGkaqpEtFWQxoaBHjBLD2tRK1CgGdoQyNkAxZxFCBMbP8Ki7tfqouXUx79e8r2MsVuDKgnrgW98MowzhtYhXW7",
  "key11": "44FhZCd4ESWMhX27Hz8g1rXz3794o5GtmzsLepQEvRknkhsZNzkV2j4nUnnwDeNMo4EutTARYkjsG9NdsxyLTrTQ",
  "key12": "5CUXyJsdFd8AQZErE7viEo6jZrgZZdUPuzn2TdJEzDXs2BSbxb4ZaFGkXoRWVh1wPKuKsYg8gB2FxvPDhCfPFf5n",
  "key13": "2MMdZxBnHtuSZVxc3vHeEXNXWnC6WCLCTuoKPx9vyiLtvH8p37251PmPNpwvmgGkSUgixBV8K1vsqW26qGmu9ixA",
  "key14": "3LkWsjghYkJgikaTWrNSKtdvPjfRmN3sVCQdH1qZr3CnrHriqpJUJFeNqdCUrhA4yaQVkKum2tgdB6iy2xvWqKcV",
  "key15": "FrTJvNcyFwDUDZgYa2gv5ExUEkAjHE8M5LqQB3JBPdEh1D68sUjXom1dAqAGEgo6ZVqRva8pe6ebqz6jKdjB8fj",
  "key16": "2JpXFcHgRAACV9AR67nPVvPiwbRZFExwZxHZfxrmYqLh7k5vtc9UfwNMu6U4JBVrDchz9esW8vHDxizXktVzKA9n",
  "key17": "3rKxrZ7aBLThsyVUKcuV2aSPnZvq9Yteg2raBkxgKvjPKSqkdrtxR76qCgfQytzwfGqBTUbpZ5NzW2WFVkAcBTCt",
  "key18": "3vXNsPoL1xhPyHLEsSqbaVauKJPMmZc4iWZ5zZm6dnUkhdWZoudverW78i9CdequrGno3m34njMJS9PmRo8dstpx",
  "key19": "3pFa1wvMM1QPKCSSG8bnykDM1sAwDRLvBviMqREZSxRiu1BLr56poxruuX4aVV1x9camCPdHxMwVNMpkJcd5Ufax",
  "key20": "4RZAQgLJ4ahBCM8SvkeFoxTWjvcnQKk1YToLwE2mHAn1oFVdpxfpnmCQX86CtkjH7FYV5tk3bEHyH8e7Wpncnc1v",
  "key21": "5BnrfQF2vtVbtwtGpKWb7P7Ak7ktCHJbmFPMhEuK8Hojzt4uuTCG4iNMFonuK2LYv5UfUe2s2u2D7r27BhxvWLTv",
  "key22": "5xZS8w69oKkqadFntBFG1eJxMxSgXAyBG6yJxZ9Se4S8SQ4gDsWra2X7zLCMCgznhsT27ncT6VbCxuHJFkrxC25D",
  "key23": "3DRJEp2bpoaJKjTR37qw92PQm1QB8wCjL6pWPyPqrDEneskNRe5HKpdcrhzCckasArx1Ng6ZTdYNY91p2H9F4jhJ",
  "key24": "5acymyZeuUwnDEcwZbpv3t49rNjtkZdpApxrC5UDTWBU5hbde9DfVfK7NCSRtvKkfqZgnbBHZAAw79TSihfWYRuM",
  "key25": "65kyXsRG75FB143uhCS9ZmwL8Bn6vnbBYgokfVzbuXRQv6nZ1XYvzRvLfrLEyE51c83Yikjq5XLz6kCPuh6N3o29",
  "key26": "nd9BhRkv1w9hzYgCfbz8LrPP4PN5CQ1dLS3dbeTQmivwUmf7DYHUwQ1AJRhxzky5nSS7F3rk5bcdodAgDpz4gJX",
  "key27": "2hJiFVcMxUPf3NvDGiRLHTmppPX8qKuGV2rrkA5ffwjYdyeNF1oFff2w7CqsRnUXnZ12ASHiMb5A39CzUjjggQjo",
  "key28": "CZhBM924bhUod8rV4heGibyTD3Nx7BHb6iywYQSEMbhJnT9y6YftLHjrHgv4ibQcYDBxTecbfu3iWJD9hJUJTqT",
  "key29": "LdA8YaKd1ouGk6ypnYbqEQBtYgfXTvC1K3KyJpkC4DxMW6ArR1hLFvKvqFpyD1uKv4wzFSNu6RCxykVpLN8Aa9i",
  "key30": "2u7ThmQQT3r3CVjcjcrFwCXno4CzwV2EW7wpRd5urQtNq4TqQPFkJyZSg21UrM3ZuVVd3gLWe5H2wSbq6Ypy9dZ9",
  "key31": "48nPVxLJCxFxnE4jvtSM7dKMD9Mo1MtxvxBfDiZ1YDWmPKdr2ntM3cKsugBkBrhWPkPhVb9gVUoXPiCY8vT36SDG",
  "key32": "5biGnLQDXVvHuSECJ4WqLTwbxmEmYjhNrV4R3StJuEFr5a2gvj2ogYYgP16GTiEspjrCvTtwS9NcKV26MgGQfNPm",
  "key33": "4d3WS6bpR7d3sjPBsZ4vgDMnMNv2aXTotF5mvefqGkBK23oJ97ipMHaSTZyURm3LK7Pukszr6drK2tZrYDUyGqcA",
  "key34": "UeDMWNULSY33MosKCG7xvnxM8ZaAD4fiUPs4C9z5zh5BVBVutNVpHy7oBVzeUpdLe2xSspcWPo8Kkf2PgUNbgkm",
  "key35": "3inGVu2chArL6cxrsj6Uq2mZxK86gsC9R1DLVmTqfecoUTYctNtG1txA2r5pf2yR1WnK2aCsuiApHAzstv6sE6xN",
  "key36": "5Po79Fks2XunrSYqEpUzNcyEx824adDPooxgoNX5b4Shad9mNKL8hwBpHCo67ELJiGpjgfwXuydChq4JJAAzwdXx",
  "key37": "3wo7MJ4rJRv7xgLrUtopMh1VeeYbRewt4LcpYcwJAcrBgSUTQBYkLmQgEmyWPkWvVz4vHsxbcQ6eGyMNPzrMJhrs",
  "key38": "4yYtsXDvcDMLSrcBFdnMjQm4MuF3mccrJXp5osuAvUczkRPYe1DPLT9pNDGFHAkFXYpHbrvnxY6ZjzHgYubde6uW",
  "key39": "qYMWKsC26opH2A8EJccnywe7GphH3fAoY7Qo4ZiAc1DqKmGtYFfzF4vRY7yxpSpTX7PLJQwPFMJr8ZxWpnpN3Y5"
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
