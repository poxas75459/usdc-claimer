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
    "5tQjNaYN14kywbo18ajmF4GR6ADwyAncxDuFUBFz3gubERfNsXhjCDgsywTUFQjdTsb1BZk6ZM8uQZKTh5rupNCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CAj6c511f8EKm3Hmx2eZQdd458e3tE5ydSzkPzf4ZLWpR6VrM6D2XLsK9xiUMPHBxExi7D9kt4HWsrMme6qnxsc",
  "key1": "2H9AKGq7UgfVgrRuNKoNQM2KKwpxmvmZMHJ87Ea3EeBtxSEcSRBar32vCimbrW9JCAhWXtbYNDbodUnqHS3eywCz",
  "key2": "3bqVVNYpAySrqLU9TvoA7mTUKajcEQg4311nQA7A2wJPumccuBX1BdxbZZv2HQFKYbtBoudbf5PBGTkEULf28Cad",
  "key3": "52QMfccq5P3HkDUKgRbfDBpZK2JLLZJxfH8e6nbe1p1j2wVPinBNyfoct8iYdfVzBTDALjRJPZR4jDn1PQkPb6XD",
  "key4": "5EkTAyFRrfQqH3pxt1Pg1QboH3JHLrYTRUKzA6WnxLWT38LznhHeiYp4sGZf4JQhqdtPThNLVpDqXSJBYvR8JbaH",
  "key5": "3CHuU6t7XQ334295QzjXUxWJ6LUD1RHk6x3RGrk7cWrWRXpDv7UEEsFhu48cz2SgMXPoiUHJPYMY7GD6aS2Kn4xw",
  "key6": "4BocN2n7LA3pR6rmTLrfjf14qukmEmo38HpSs6uEfEkSiAbUyZ6Rhp6kZLMEtjgSZejJqdzdat9C61w59cd3KJGd",
  "key7": "4GxGvqLobBiGWXNXDyec9xjnv13ZACjCys3ykGXEAMbRQJYs9iNvV1RcDfZgUzdvcxuz737nqjjQfVRR1jm4JK1N",
  "key8": "3BaFAtmdUH9fvDS7dap2dmsz3EVT2Y1XusXyQ9QtTjdJ5WQ8SqRjiu5Kxb8Hb78SidRa8pu1mCkrX1KDtApFHr2f",
  "key9": "4BXms4KsjfrbJURqiMZrvSPzNgvtMhqjiTqihrHoyzV7U2EmYREuwcRz5ZeU8Ds6TVJwjpvEyAcWYdzXcjDkkykJ",
  "key10": "J6tbKzzFYDgbDd3Ex3h3GJ6HTEpZfmPppQC7goSU8T6RoTEo2gu8L465Bh8WM4WzxbxBkRz5SPuXouFwB8gT6HB",
  "key11": "4aNoKJ7ybbqkkJg3iDqy8nQ9viPnKvamaMFo4BqPZYr4tsgcfu5N3dhvdks8dLe8PYnZxvb7QCdH7mSJkvNn2C5",
  "key12": "4z6HLTToGcA7DgEN3xwAhdcfY5KeYG8MwafrgQmqEtdRXiojgs94MdsConYzWxERjSHdNSpWpEBov2eASsjsE8aK",
  "key13": "2FqRpGrjYR6xK1FV8YSzD73EiXF9jeWjeT2D8ekeraEFPVeSwC2WPd1VPQZPJQonVoptuf4diz94EFpYJCATK8uT",
  "key14": "3qmp6imwAymCKUBTkD17zGMK2R3f6oEnPq47URNq4G2WfQGajENntktmXCUgBf5ayKsTMfrpquUehf777RUCWeD2",
  "key15": "iRTnjmEtUiT1pYSC4U7T86tqpsEjrw2KXWo6zRV7nv7iGBUyxJy6xPCfnyVMrjAKy32H7VhhT6L1zoQMNBHW6LM",
  "key16": "32EJsaryjQ7ztYg3NtPbRaN8UigDrbc9zUNqqDnAkbUvuceeDcYRz34oni8zb9JdhyehGnu1f8tj6axVWy9kyipR",
  "key17": "4oEXnf3jPF9Sn4zZqsUBAr5SGhLT8n7qT8YiAriy73yCNyXD8P7uyTYCmfpEuEbKdQRHTXTbYxi1WyCofFMGADT2",
  "key18": "23z1HWa1P5LBp4yMGaP8XtFjK54NanJCxrA6dZDMmn9uRQLVDhvKDR7qespX3tUoYZhvrwKZSS4bDeGCVFfQH2uB",
  "key19": "373EdVNRNtz7i3hXZNvPWYXSMgxMeUk6HrgyZ1dhstgdAbRKXVhZ4GboXpiYJ1S746WiSxBgqZqztQVVAjsnsgx9",
  "key20": "4Nwofr4uB7vg4kkmJAu2FyEZX9CRi32trCAvxpwQaF1jYVhTmAbbCTZsf6htano2p93UKVTbQXSyfW11hccKqEZ1",
  "key21": "fqYcGf93sUpEAX37RAVioF543oAq4XbHD7wAFtYuKqdMMVcj76nFSniMjKHLtsmVDhrM73qZZPDhRWEvdxdSa4Y",
  "key22": "633riEp97DD7XioZfBpJxJp2bfRuTzbggg9JmVyxMJzwt5C1iKJLuzh3xgKZeFQLu5FXpccDrQoKs74XNDgEhTWT",
  "key23": "2cSvqAdHVL1iUA5k2K3L7YXsVhsugnj3CSW1oFQEhiB9nuAu31AEDAAN5onqcmpBZQLnYMitv8cKCWBmYLsguzjm",
  "key24": "32bwbeUA4bJ59As3vGHZRJYQZnjWQ4P1mqAjSVvAxPkezrXBCgHu5PMbV8RsYV9J1V2AB4FeW2nB9zBwKTvYVXNF",
  "key25": "2WSpzmaCAwLtX7wGTZLrUXsvA7BiFPWf2Cp5XxGRLxGXe4MHjijzM1VpsV5ap3YRxyMgsTWkEiwzc1bAyGgnZ4AQ",
  "key26": "4eu4CTjTA5N7Ws3XSyNMrzsyyBvXgUEuNgJAZ37gPBo5u8C5oF2dU7Rj7uTY6oeeSPEmBqgkEuMP4ueEwdyDf218",
  "key27": "QRkrig3KUeEvqgxFkSXixmXaux8dC3NW92kHz8wzBJAtJ56yhjsG3VH6ppLWKDW5M621GXwGMcJZXdqJAJLt7Tj",
  "key28": "4BdEL4tvJZfPuQKcsayBg5oHDrUr74J2D37XejkZgzTP3QYWx1mf6Ft38zdNQnPfZnTtcmL1X9wRv19e4AqoERLY",
  "key29": "2nVjESbouo2eTQ4NFpH4n5h4V8rwPBmhU4BJ8xbrKfQpFvT7jRtzSd9MGMHj1dy16meogtFx7B56w8kzTPLasxvE",
  "key30": "3hFoUSNdHJGX5nFnuoECD7Jba6YKSScdPNj4snTkR3JiqTSszWCYFf4pkpxFVUZ9uC6JAJXMfFw53ZdwSZJpbZZ5",
  "key31": "ynV5iGUataWyRHckkLfBW2gsQcVfZsScx8pe7prchsX6adeEGm68DsBqV8KeZm37gxfqhaRVTFWD7vMBFnE7fQC",
  "key32": "2BMjmorvopZs42haB2UZKNJnffXVrqKDqsdc3K3D5JSmqcQjzCDTWgYpNyFqvA6svd8zLqWNsuGEAr2r7M3YZ4U1"
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
