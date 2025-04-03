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
    "3sf4hUMiPhdq3w87Hfce3hpKYKw8siwjGsXPK2xsR4RvJLMxFWq9iroqJcBZpsVH3FM59Z6a6maiFPGvgS5WyhSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "595gFgdnZPqCCgnBMU8N6T3oLVBcTLU97grKaeQJ1MC4pp1X1injGkynL9GXSqnrAxUki9jQLrctzTzfLbaGdQ3j",
  "key1": "4TbahcWRi9HCdQoGdhiKz3Mx7ihE1eoT1CSLaqYYBskK5k5Ug17x2ch7iu2x6vDF8fiEUZ4F7W24XgpRxZaCGXVg",
  "key2": "uTQ1SYM1FiYmokeAhC2g9KenH9zEoqjXj4EWKj5xDHgDfhuTP4hfWUgPug8ypv97cnjvGHJWhTEBEXtmtNwPTM5",
  "key3": "5kTnFJPN9NtSUCANMt9nRjB9vgHSR5KJwFYgMLYpixq5hRnWAQe9BK8v9Vdyo7P5SNkbn15oGktkcE1nHJD1t3wF",
  "key4": "3PeeQVb5tQjFkhtMZ5PhDUdbW5UfWLKUAX7YFVB7hNkprZKbpHaDjjUp2wfWatwXgdJk8J8JunNS9M4ipHg3HoZY",
  "key5": "3hVyyyXogWY6rXp2ZDmizh2gjUUWjmAQB98C2d8CMFCPhA4LL2rnTz6ng5PmGtsBtq6NxTvBsiaVr6xrYwhcLpXx",
  "key6": "3MWsvUJ1q31Stn3u5h9nRdiYAQedD7pQmvzKKrMMWMCtR1ny67kcS1Uk8anKKZpi5ESitxd2ng7EtY6jGsgh2J1M",
  "key7": "4R1TQ6m31y1PYK9BZNJTaNeHFRrnD3AJPmvVcHvyoX4gtCdcpuneUBpySvuT4sBrxarNx3g7UT29Yxgcc5hzdRD7",
  "key8": "5NsgChguEW47QNot3DaokqRLz3Z463JodUXryq2cABMpaRCZY1sMaSL2nLrEFqEMmsG5PEz9nsVwc9a3cNQjhRy",
  "key9": "4MWwn2gvkgWQ9r5WvsT7wSfnqQuVGsXJJWbCN2oKCDTwywt8TXvStgooFP75DCujQUcgAfGJcKvAZGU8UL1Efh7x",
  "key10": "32BXsXRR96dxJ3sVxiKmVwQBsWhMKCJWzXZxA4f5N9MJ8MdaFGenfNy6NG8VEHaaN627CVS9zYYMvCfM6kyJpDEL",
  "key11": "4chEyLeCNrdPt1RHzgzWq7f7CA13iGS3cQvnEk4ynPyEnSZaKyneu9VTL7zgZ3eUhW4wVyNWHSYDsENgEhDXPJLA",
  "key12": "3Ssqt3RSvsh7gWVtAicLLAPsmE4aJXPRaBcFcvW1ZNXQkHxQfzP7aEqF2uAmLtzWXETt3hncdgzGwp3ejSjA7RrC",
  "key13": "3GcG644wCSegVaUgTqjDbJho3We5mhvGmJA2SqXsrgKQhX78KYkULSx1TgVoNdLqAhFWK97ZjXBhZVXdi7UHLN2S",
  "key14": "3f7YTrSBH86eRmBpCUMjWvMEw13TcmtrtfVxrTsu6eGKGvGNtL8u7tDPwvLjmAwFTNp41Pir6686578DPRqZaFuf",
  "key15": "4pBQVZZXAcXVF9MtcdQbYAVX6sUj1zZzxr3w9V6YgYp5dEaz4uNUipof51iddmhEMCh7W8eY7ZwqWBFVcVLrDLwL",
  "key16": "5u3aF7AAaCnvg2XFvdbCe2waBHzVUfSioR2iDL1yxxxSoAZprDHCvhP7KmJLZpoKtddKneYbSHpNstp5EFn2TFkA",
  "key17": "3qNfHoMkJBYDozvyRjV4ry7eUaXgnDZdmKLPBthKTsQvS6i29MqdAfGS5SEzWC27ACaenAjjq48RRTunfkqLmzhQ",
  "key18": "ktoKtb5LSTTN2W7sXko4XznvA6MSbp4eErLtDr171293q5GjBcF41DFS7mH8cdqMwNxvjFsoahGMfuTCPAKPUQe",
  "key19": "m4yMZHSh7doaDBjKf733NL5aE7MbTSvZ1uvZ9AybWrkaFYcxvBUZfDGFdUWa1iSdkW55muBJTKygakE6Fkz7DjL",
  "key20": "72mxw5Dw8cfj4kGDfDr6JexbyXFyNVhdiYU528djkqPo7EnvTxHHLU5ZHBhNNM2EGQLr98YSspgucLuYmGzS7y3",
  "key21": "4a9f4nKdGhWnisMDUWkGiDciPfChCFxU2c13vwDVTjNg3SUbNhmwGRuY7fHWJRnpXxvxX7emmRLY4Bvwq8e7SoEj",
  "key22": "3s6AnJvQJsC2nQ9HajhEiLWg2rW73NXSPNkkQGmRFkb1b5kKn3L44dHWrw9MtC1ujBgdgCyeLQdBcXz9wkcGwqGv",
  "key23": "2XHvgNEJ5z4AGJfRu9kqPGtcN9k9DE1oYRu1ex9zFDTCgo2ffQjno1DffGC5NP8fpmJdQgLvJM89jJhX7N4SqK1j",
  "key24": "5Q346ZbUvU4XsXPi659HoM4NFFXoPAM4TZWBnQ6doRMpubquHRiP65GRjbmam9HGAPf7vPeDdsJRUzeNbnwkMUN9",
  "key25": "2zA3wC1oU6G5yPJ2nUm3hcwLJeFgLnu1FQtaHzLAaxtMVeKJufKUrSHCKvLgPeSxNHRDC1zKL8kg7dUA2nZGeX4g",
  "key26": "3wv5wX1bjFQ4GWPa3vpvVfsVreqfcuTSnVdTZM8SDBB7yX6rsgUq8UaHKamqkTYq94XPGSz1XaAYkAaHvTwqiM8U",
  "key27": "2FSwEkWmi3fzPa5nWwvFGe8j6YGDx77dfRcbHFVyDjkY4F8aPcbCaAkoMNejTzxnSKG2JYGYhcnaHmvxAsPnrPEk",
  "key28": "3WbHdTg793GmQXisbFDuVZ2p7rRfuNTfFH3NBDJPR4hU5MvySm6gnTwWuVRbQkT8iKNDZRRpxhERcabr4sBbt2jk"
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
