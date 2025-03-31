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
    "41ok5Hf2frhmXRb7AzvQhMoG675bSQwifY2jcbWCjhhPuuheviBWYTEAQ9TZyh7UpwagDi1Tgj8mu1AhWGhkE93d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ocSwrkhGcvZQkAzruaPjNsg3KRBhbLypoayYZ6shUWmA4a6H95x2M1u77CE964iYceiC1cQVyVzMXM8oC7hW9k7",
  "key1": "4N7nUFE3C9VYRa3ob4yAijKjv6XgtxJDr8Jysjsa43RC1mBLKHEMz1LjxtJWXDpEXExLft5DDcTEUPTDrPxeAAG3",
  "key2": "4enXR8DdTvD5XhkzWigH2Ah3W5YKreekmssKBLyAqzDm1eCEa7NC1r3ctD45bhqspGpNccvzny8cXai63P1V5W65",
  "key3": "JE2r7iPoGDqpP9HJzewdwisNs4oK2MicETe3htJonviEVpazWwZh15FJJ37voRADmx43CW9RhhTUdR3nhJ4aYQ7",
  "key4": "5PWXmjy2XyjsJ9EBVXPu9oSktDjWnp8YwvW7vpaFAKK2JZNYRAYWmysic6N2gfsPjwcFpksXPSS1ZeTRFztzFEyN",
  "key5": "QZa453DR6DKnnivT28HdXWY6dHHrY4kLM9U6cF6jFQVfmAFx6wMtEgZ4zn7U5GXU7qQXX8qRXYtYNoTDa9vwZoi",
  "key6": "5oz1CyqWjQk5jZQbmMrrNeW8AhXnN57f64akWhnTCEPLWuZJqHGXdyLPirPLZ1Tr3cLoAdDMdotorX7Zec6m1kCx",
  "key7": "4kBZwg7WXMw2XdMFTb7jhriBsX3Jm7vtvChCnDb9rd83P1jYwcbHEUeSFttyK7TKTAx9G1PknYW94aTTUqk9dtTp",
  "key8": "Nbvvz15jHSRpQwMBPscAaQJ7mrYBDZpvLfkJYZTAF5SvezLpbpZyoqzgyXLxFecSbfH26LMZQfxGSMBq4ZFbaUF",
  "key9": "1Y18HKYD3D5eJzVkHdVRfvQ34NMRLZ4FMzHjJbnfRe121TDskiPvJWt8a58wScESpbtexW3WU4SgJimVCLcBgno",
  "key10": "2CKL8gFiv9LehrsgKeTnMfXazjTmC2AWzzxStazi5hqJmD1joBcBrSc13p3NPTbZBGM4k9TdzZuc7piqt1wcrGu1",
  "key11": "35ru8srxk134xMzuBYYeohGRbYptmWJhtf7buQEz9mYMwxuqsKD2LCVpB1Lxe4cUr8PNtf6WArqtUVWtjdvACrJW",
  "key12": "2VwNCZHUuKFKLXDTW2dom1Bzvxc3XEQUtvoUUGdZirLURkEu4NZCFUD3ifZeRknu56yNZqAYCuY8jsEChfQNTj1X",
  "key13": "5VzgdCfvezKVkAVmYhMwnFWsKHQYKuNvNx2NMCgQ3eHYAbSTWBfAV6rRtktNryn6ZRkg288aZkQAsKwU6zk5ngut",
  "key14": "P8YGX9HmozQ1i5Hv7KTGhqMKDe52AvpXYgse5PTskTdSYXaw8qseDqxyY4PtgUUHyDVeo2JqKvewdMwMqVKpdBJ",
  "key15": "5eNDytCuRM6eF5xz2muTWm8CTqdM1UfsGm2SSZRXtwg1GZHBoo74uwM8JiEv6FRUcnTnEHSKLx4AtLvLEjWS3yRF",
  "key16": "3gLVk1QvuvsEWNYCLykp6U1wQSsx8RL3LwkCEAkKFTX5EnNaD6PjjxrFupgxhHdFx7n6kMCVHM6Yk7R2XdPkateg",
  "key17": "3YL9Mb76rAAULSdDLcx7x3yeW8x9Fc8ULJ9gpkyWfju2xskaqDWhCz9Vs7AVeNM8ZbtgEESVKmr8A3HW2ycjaiuq",
  "key18": "U7fD5qzVt6vkdVWZ5n9rMhf9BqAKi5nbTqijFvUZ1xRtyoZZjmxBrU5FEC7isSEBUTxXA3soL1v4MUpzLCswtBg",
  "key19": "XggEY2zLvqEEJTFzC8F7h91icSeqR9CBW9T9H5N3WsN6aY5XabB8GeU9fXyqwgCDMF3dDtv5jrXNh39je2bbQgU",
  "key20": "3bZgoAoAMrSzN8B9veKvhaTyLcMnqknfSpbtB8vbxZhoZPtmUb8Noy1m4hwf6FrhtuCDMve2FNBNnoyZNUf7EFcF",
  "key21": "4dodr7XfKGWvVoce31AjTTJFTpHk2o4s33xv41dgicDC2xKjQNYsS67NyCLLFd67QDssAaxDuKS7p3nK5YxdG1Qb",
  "key22": "5x3UWFR8qsLXxNYZWCCXVCKFg7kcUuhNBVVUApoHBJM4spaSQh4bgMozh6A472KsW9hpQgnHGxJioF3Twcc4w9Vx",
  "key23": "3Y1W7t2XedZAhbXDXyTBBGaFpcprDwocSX6o28y5U4MS8WYnmm6AJiCkbpctdAYVbA9ZWpVpxwKR9GB46PA4XiMP",
  "key24": "4T2Lo6pwvrGozRPZFXsVuALF1jDv8Frm1UyWC1EA4RBFqhoS9btM6X1f8qXWWoHoNVqtngzqpv5hxTs5e6by6875",
  "key25": "2b5XUwqTL5rS3Lf7FNsSQyhJUGGZewCUD7nSHmH4XYTKsLoVxiwbE7kCfn6ZVxq1WoNuDtFXWyhEVcC6SQ5bW9Kv",
  "key26": "4FMGgZV8LqQBthwwY2on3NKmKfpaqBuPk21Avw2zUN3uNypdhkvTqgyrU5yzMiSvc6V1fjRZ2BUaKpj2wWJ498zS",
  "key27": "5D8cyZxRUZqmSJLH5iRSzg835FUtaM4FUf76pAu38oF13eq6HtoARX4xX2tvutCFaXyaj9DRfUHWGWUUs9qH3DEh",
  "key28": "3f9ViDaVmREyQDVJYJTASXKHecRdacVN2JWb5HkC1FxCa8a9FbgJnv4bCCGkFjxcxh7g8dH5Z4zaMweR6VEcUxMi",
  "key29": "4JcSF8Mv1zQpCp9s6kMWWWwEbqsa9CF1DyZeGFXnSCSrHiEzwisoVy2aH3Y3FFqefWMtGw8Rpc1kT4AHuvREBpgX",
  "key30": "3svzw82uGGGVPEJ2dzoxxzMQoT6z4FxGmSTzDvgP3tWJ8Cq5Ber9b8fGpjbY4r176yzGN6gewcfjADGvLavQeogm",
  "key31": "vggiN2uDwjVkzh9uEj9JMWeFuDFBfWspdx6btoztUuwK7QmmauqWfUZaZJ98CCSnsJBmYZbwXzxk6Rh6DwMXqSk"
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
