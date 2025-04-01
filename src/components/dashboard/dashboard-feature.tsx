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
    "4JTxUmq7gAucqmsEaDLWGob5uKce7b7xpdqN94vuHe1ZV75ZptUdescxs791YGSRHyVFdHaPsfpGSDwZBm8yND1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NkUDaTfh7F4fMFvqzFCnBL4GfFhnf5HYeqn4NMiopKFrraCzsGKmDDacRD1uQBS5J9YmF4hm2mPv2MP4PuTmain",
  "key1": "2QBsh4eijaBPY9HJ4C85peBJ6X81ao2wcGBCfNhCkQY3df5kWgTh3cwELqcQ8THsjNxQj1QGJafvEF3Dj7vQ2hR7",
  "key2": "4bCEvTJYXJTp3thKeTQaAZCgH7xH2bH7XKocZAraVB1sqSeey29kGFxJtcEKw5KA2YaJFzv6Sn3XscbmozCYy1ox",
  "key3": "2em6cMkzsUJwNZvHxyqjd8cXE1KqKtrYSAD5L1rLmYyB2KmkfUGB2HUJconbYYgA74koRQPJE4fTvqnn4toPvxNj",
  "key4": "4gvQyceUWqzkDUb6p4BSNGqyLwA8oncPE1j7XHV5rycADGYxyEzixCzVPcxxnyLn9rF9gKAojTkBG3xVTfW9yNjK",
  "key5": "2g7KqXvRqNExDcb2zoaSr5EiHNi1mxpP8R5nJTEWC7QwRFzJAufK1ZnUVutPeUGHFfYGi3QezjboLYGNfSzE14xC",
  "key6": "2PBvLR9xbxeY4AsuUvqDmVVve7XsQBbh96UhF1WBuzuGxqUS6J3CgB4hJ6eh2YMgoBbYeHhaQXJS62wMtYGEqW76",
  "key7": "5CS2DhHcx8qSkhRfP9bWBvSQ1BxqSBp5eV1PWAkuMxLhSQYEdGeYc98fXYC2epf7sKjBRS1kGN2s13uNer42swfK",
  "key8": "2bj4Jv7E3cVrYcmXPDzwTCUv5HkZywd1vHcrBXn8KBdhaLhTocc6XBqknNawibLwduieZZprCYcZeBPmAPM9TJPh",
  "key9": "afEpUevFazEPBS5XmjP9YcM7F3DgF8GFKXZMD6Jz1WMC2wxQ614QG7284HB1HWZia6mcQMEXp3GhVjQvg9tXUKS",
  "key10": "5Qxv5Tc2RG9q1ARDtAfwe9pvXk6X4bNExD3tH4Cjsjuidt6bBVyFzFfXy6qvEyvMFVi35ocJL24ASaZk26aFTh1S",
  "key11": "5n3R42qovJTKosymC4JTfhHAeiMnBRDXpYvid5xMAqaArAhfrV2Wfq3BsSaJNacVMUkcg3ZGYUuUByhjXu665rcG",
  "key12": "3yDw2nxGJuSdFeuHH77MgL2cQPWnqXBRCYuf785B2o84kbiNdPxx5r8v8tdokc9KeGJ5yjohVwU5fd65Cdwg65m4",
  "key13": "3YasS6tXczKUrooscgaxoaJ3xrivvcHc63HsWY1tHkQRxDXe5J6FESoZ6wXvpebPY7h88jc4WWoG51prvSeLHYEc",
  "key14": "2Dc6J86uxM697xb6tvFRZ4ELSprHdXAMhiRaQ9m2Y8aBTEJmvM7R6PQg3RECkNi6Bzo9e4p2yNt138GFhUN7pcj6",
  "key15": "AUMYYDimuUs467Eu5EPYpNEEhRyb9d5YZpbM3vkqyucAsSESCvgPXjiV7jJiVFc7oz4NDEbXfVo5b2m8oBD7wW5",
  "key16": "5xgjUb73LoDYkushzBDnqtZS7Ms2xYFBkLH2HYaipWKvbCgC7jGGKStfo5pegp1HAmYbYUaTMqLL1acHkFA5haQR",
  "key17": "3ZK4Y3L2w1BALjaYNbDb5fPB9yhEyPCqdCHWAoUd3u4yXNvGX8pseZkgVNPzWQ6LL1CK6DdoHQhnDqx5Mq2cYgXK",
  "key18": "359RGZi4yAfQRRzrgiinLyZgKATNW3foQckNkzGJ2YuUDUqmjm3KGghzAwoViNY3dapBFmQDzV7KoVJsWmrv5gLR",
  "key19": "33mVd3xb29jmL9QtkavLJWWdD62YCF3AgLb2YBZLFFPf5EfEH6yZUpJB5d2S1kt8A5hmVMmCTCfqCvV1qmYHSWWS",
  "key20": "3aFD2ZUq5pgFJEBUyhJrrupDvJUxoYot7mvG4kMwJSFxjRjYzqgEykauBDW9NjgMsSFRv2cWYStwY9ENmSnJk1ro",
  "key21": "4iDLjeEBWMuttCv9xVDHEf3rCQj86FLa78b32EePAZog5S3q5UP7Sp4AX8Xr9nHts9VKcxBmh9Sxjd1CTCVn43X9",
  "key22": "vPGVpPD1E4WDRX4RbaVofpemvEvN1XjmX4m2UVm6ZipzDHjf7aTnCY3aAQdomqpxSXTnFvXMjModSQh9Yzx1zxf",
  "key23": "2VHDECh5FEoJ26F3Mgm2gny48G6vQXeAV6FU9dt8XsAJ5B93JqfB7BnvFw7ajdpb2YXVoYCYp5LMYCfkUZbhbmdY",
  "key24": "3J1ZKqgJ6fg5FDVasMx2Me7v4iDC6LXXzodFd3rH5q9ecodmLig7GXFyCSBasXvzzAXDNTSskTYkTReoFo3LPkKK",
  "key25": "5PNpPSmr1UchVaMiTnTj6MUtGr9xBWujopkgMTi3AAEMGwDKWzz85iUxkt4nXGTgndyfbe3KbqGyAbu6nLrZJBY5",
  "key26": "hMTUDXrRmdEcpADMej1KsiGAaE2YCYUXCR2afG6M7DeToL6DfrvfFoV3cVbuYhuzgpewi2MFo9JzWa6SMC45LCM",
  "key27": "2MA5GuDjMuphEDZjyZ2435wzLQ67u6W5AGcKuqjTXFuouxHr8gYq8eS1AH7we4vD1h31DDErvo6uupkpfDhnfwHp",
  "key28": "3gx3K6q762HxZML2jLMTGvsaVE7Lzn132K7NxV3hWNX5QFaHdsLQ5trfRzwZNjZzcaZNNA89VcUj5fHBcUiS8n3T",
  "key29": "yUTNS2h9EKYZH1QJSRC1xeNPZamQpHmE98TX1RPqTdcsFxdZzAS1RJHvakvcARwLQ8wKyMoX7zKk4NWizi8HN58",
  "key30": "39gnfnsH51gwyhR8KfHoo2MgPziR13mzSpj1LRcDzsfaf1pHed9hYkaYD4tyPcL9puywswGzZkqQdRG1anuoBdaX",
  "key31": "3BuE7mZ8kFfEASMDiK6Vres4N7QfQZnUxiJA2GL54F6r5YHF3uzWCC3Fj3x5JBuSNX9vqssVPNoWXJj4BKcGYKXu",
  "key32": "3pDZygAZx2aYH5vRXbfcKNhiEN4MHwSfnqsC1oW7fKvGYTWLeHWTRMbLSmKdWPv5Evk8As9qM3jRzFLeRMtRnBCr"
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
