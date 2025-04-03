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
    "3ugjcZwvpBnkS6SzjWQMvjLrTzYLEfdRyoDnzRF1YTADoqLFAabE9VueEcsCuFHVW2Gqz51g8qLjytkc68vFo83J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BTrHWh6XsRpp2yHHC2WxFZvGpE92e4SCWYPcjhjS4HGk2HL9mZKUEjXtgKV22mPpp1CdQ11Bg55J4AvM3grbGDn",
  "key1": "64pGLE6zbM33TiAchWWxk1JeYVH5G6wZCoeZyjYNdjRur894fcXjDLdmjkgp6YmhyhtAUPbrmr7jkeWsQn6J5hyn",
  "key2": "2mBSkHD8GSyF76QAVvfGTSmd6umviwuqmFaXQFEVrgjzzYeRr55vrZdmLkWZuLaRMDnARQWKwTrDP67YCwb4qT8N",
  "key3": "3igmZLncodSGadcnSmZFirfJy7MAvKRY6vZww15TkRqrQrh5q9ckxHb9JZ4rBkm88FxHU6To65dew4R12tw317Gd",
  "key4": "4UZCLM2oAnbV6TMZdB2WUZMVu99tDwqdxSwJfLVpKhD6QYZPKZv3fwfaKqNv9GC6Aw1vozPHsGo7rffYxkSfeYxC",
  "key5": "47nDAVWSm9jE5kY6Ua7uQD4q19qPm6QKndQmTef9VrmjnQs9qWWQksyFyrRwocQd9iCT4jRKAE8dwMbpbg1vxPmU",
  "key6": "3D5F5k3xZSZjrEqj53tSLR5X9uwiRZM25o2X18ugQD1eu2AwYsJLWf8Ukpj5WTfUdA6BXFQQbcSnHgpFkR1SztKH",
  "key7": "4K95NWVRQoM83XBSGWirKW7YP5mJcN6xcJTiWt1dUoLcj3zXLdWvaGmDeaWm617EAPUb5KZN87HbLKfwWE8GULfa",
  "key8": "9ZsS52iBYVzBp6zqmXqAepuYoNpfwaV1YPGkNvF7YFS8rco12wR9HzymzkRF6JfTo43m7cjHo7P6aMi1rtToCd6",
  "key9": "5c1aip3iRngbg8FPLusjnosRmwRH4DKrcXzwLSUTAD1cUhkas3yALr98aYK2wNGn3Br9DCEbHK3pCp9GFZ7fLVrv",
  "key10": "5JNnB5SBVnCPqzyde3nC6UwoqMXBvnoz4ZEQ5oGydSB1AFq17dAuFZicYDWALNb1RJcZ2PMqZM4BGuHaRPMWm2ix",
  "key11": "zg3nrKHa6DLXcCzQLof3DWVxArQDgjdyHcfawB6AzXLwtZLXEWqDe6UsfcpqQ2YZaSx5Z7nkD14pSky6Z2f1TRt",
  "key12": "5Tf2ToUGrM3yVBG9DaxMdoojh6wKEJsWnKcsK5Gh5ZaGSmxcSPxK5WXNLArLqH3Q7eqX4XKw5E9uQhS1N9nJWQQt",
  "key13": "BR8vFVKNKyaLZyi5ygdSGtKRpd3MWK3AJPAHuXxS5TgyQzA5sy9mVWfyzx3btdqMJvSZdZZcW98TNcafTJ1Fd7z",
  "key14": "2vJfrzypiYjWJmioWb2Tfzaz6GadJQjhxJgegQoKnao1twMqtsUBpBfhYNXUkLdm8wnd5WJRc3tpYSa4tDtgLfud",
  "key15": "3mgCaTTvAEdjgeB1ux6XRTE8MDQrjmv7BJrU4mYPcS9r1VehKfkfyQEqEWqm61jvjZ9iCsvAxcUDHHwEPphrANgE",
  "key16": "8hWjHE5vse59scUqoXXTeYP9NHuE3qXpNNdLyawetyzL2Gyqn3A3wusnEnonkZ1nQWP1Ck6vj4taCyCzTMsS8iF",
  "key17": "Tpxw5Kx2PMyUpb3LfKX8ey2g2ghDLDqadE5RENoqB8FezQM7FivnC9AzRPEHo1pJFRFQW2bPba9jqsKVhVktkNw",
  "key18": "3ruC7efBuiiBqnC1b3u655dywkC6bxPguQkr3pjzN1igR7NL9AyKRHAnZm4ez2TB3W2ajGS5hTSqzY92aZAMw9E5",
  "key19": "2G7fDryhVybA4KpKMGNyD7BGUVx7owAKvaoBTKRh9Rrxc3ei35LzrapLJbCzzPfraJfGhpUcAivZZATRSwfZpzRJ",
  "key20": "2VNb3Qa3SyjCnCgJyD97P4wzmhf7Juc2DiwNrJQsMjoyAFp8Cn1ureHPsALW6jbb7Y3ojnNo2cfK7trgw2YgUa18",
  "key21": "2ghQ8bL6QHHatuFCMzxqkjgCrkqyvbaKG6es2XcCndZEW4AvbFJDaZa1K725mwErViJAcUoYVcZxExjc99DqrZ4h",
  "key22": "3fLKYv1Mpe7FSSCEBL7DTsrBqXzFA1B218D75EuBNs4MNudTvXjjVG6Kmh7Mb22hsyeR4EGL1TAkMNsengyqB5gj",
  "key23": "2xEtZMWW7nVBYkuJmKib1YhHh2SFUUXh5mfHhAQjaXjccTkN3c5QbUjiytQcuBZKBR19cVt5dy85d6hcRN1SSZaQ",
  "key24": "5sSSbE8eS9UcVdjmrSvJu4EZakiKjtgetKSTqSv34m9vFebZnxbWLycvY4xfR4QP8jqE6UqHA1SkzVRaTfqJjz6G",
  "key25": "44ZGDkPpDsCQhqZ67VLzFfL8eEJbSbuxWoAkNhovkNaanwiMcUJCR25yuxhpnciiR8ax5JB4hv9BjdNcdHAx3cZD",
  "key26": "4GUCQ41h44RcmniV8vNhZ68Vr8Tuhq6e8etpVMFV5bREBj5UrJKqQRfsJj8z4mcReZ1ggftVvZmz5soWbBVJDtiP",
  "key27": "2FSg6JRie1Fyhh5qDCtx86db5wRXXVCnnysKpUFeDun9yaFeXA9e8HfwFsRXvsY99AnqMdZYavvwQ45d9i15S4b3",
  "key28": "23a1de3SZxuCnfQ4fFwbT6XHnRfNUA91QNxigXbLiNJg51gEhB3apdocMmUx8Zd1Njrs45n6omvP7Emf7baEw8n6",
  "key29": "5qPsFtT6byxBztraJ4gpuohvmfmVExZ4KupM2BqqgCc3Zr8R2hTTuvA2wxsHbQfcfYGGdoCxjujrKZPPg7sbyYcR",
  "key30": "122YeFVQKzozHyMLbZUKP988g5u1eRZGHiCERZoswpxkGGhVKdtmG2fqTzfdjDjfry5tqmbi5LidTVd3jau5QM5K",
  "key31": "3hPn1eW8rNKoaQS1Zz8VpSmnaAKdNw4rUegNNMxFmLobmvidP7NBPeavRfh6B3LgiiJMjYJzSTBHRAr4shmtoWf3",
  "key32": "re9JM2s7FENRV1qkXp3rRyLD5HL4FUNwNnxaf4WseMX9z23FFtkyQ42xD6fwFMkdgZ2X2pJnQunDUo3yiU9jsYC",
  "key33": "5P7iJS77aA5goyY8xDs6k7gAW3RTGdkbYpEQEGC4FgTNnjg111t1DH5yh5qhc3CT4a4Dy1DrQVsfEU17ufyESJjv"
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
