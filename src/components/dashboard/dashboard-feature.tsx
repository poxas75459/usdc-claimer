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
    "4V7e4AE2P93cHQNtMAkMPb4YBgp7G6Wc9hsyVvaQyy3AiN7DFP1sCFxSrX1giP8Zt15upF3N5vzb5ze8TyfXuEGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DZ2PbcX8zgm9HKHX4o3A42FQKyS3GdUFvmRex4KF8ukWXTkscTsXUv5Tnp3bHLSBq24oJ6DZpcLap4ds4up1KXu",
  "key1": "2QBics1ZVbMGjC1ABbr6DYELrZdj1qDeQYqbeW6TrprQXW4wGncRtXU6BPLdTiLEGHc7BdAq6dZ1ucZMvd856XBH",
  "key2": "2mTnYiSxVr4jS7nvWi9zARpZ49Ady9dGcGGApcANZfCyoAg7GWLFGUwRoBRW1LJPgSjTdYoEHxfefPK3TAhUXZbX",
  "key3": "3hdyyW7idG7nG5dnxCUR9QxVSauee2CezPsotan5tmDkVGUyGyuK9C5LtQqWd5M6oo5KG3ZwCR5WQipBvMJRVoi4",
  "key4": "2csFQJCzWJ3mzRngPYeMsYdxWmThyhRV4CpjUo1sMCAmo41LqLjsGtzyTRw8nDPTYqNdJ93dqWeFTLF92LsoJmXN",
  "key5": "57NZSTRqCugo8GfsaxvwPGFsTRLrVaqaNvA9yXvVqpefVRsMAzngnfvQuZaWxetgdQVQEkJasddV9LuzEiJUwG1p",
  "key6": "5oeywVgP1GgCm2uKa6dMPWpsBodSaEf8946WVYxS1KgUjLwuThrEbiMECYVLsr9mpzj5S6usZAEgGicbh16myuo8",
  "key7": "5WTpNfagC3vqcowzgBPnhrpTnPbo8tfAKzo1P7EHdbrwToXm1m24Pr3J7W9RJcDbmcajRQ19WcPoo8DAR54Yas69",
  "key8": "4YMbGsgTaqKkHFftr4B6yB4Jh2bmUCwxs2z1rc8Mx2srSiNJp1bXp2Vy9GEAe4iaaAwqDvGst1uGDXhMG6M5G8Ej",
  "key9": "28nsiLXZMPsSLzbNce8sE2waJz2AqwZgDR6RZ16HR5iPFVYcrEwwk2hJRbayCsaQDUDDQYWs8rqyJLnNeTKF21kU",
  "key10": "3vVnfm2EcbU7pwdkxpcXF7aaRNuGHsmkTZHKGPPUjNmN2pdLoNZN1pUeBZ7BwfRwcWWSVcBttUbHLPEmyA7QBvU7",
  "key11": "5EUn9JjhC7W6TpzujLNGG348QW5V4t4YsFLZwGF6URmbEj6okP3oEZaXte5sJzmXzuXSiG8gC2z7xF3A2s4EaxKy",
  "key12": "LyoQtpmZxCkgWWwY11Vyg4QK4cygoSbfaevVBQrWWRPNSCytbjGTgoiyD6hAMcPCo9ULpTLrjsfmtEfmqMX5U4K",
  "key13": "NLxxo5zkzSMZv6Tg1HpHg1se3TL8aMg14AzqHsQ7C3fEuN9BJkKxVbp9Ujdte41rXi8cvU18SsodRG7o4Rv7ywS",
  "key14": "46aYKL5CuAE4UfrWHkgi9nRQyekDtRtm1GqxaaxPpuichzbrC5PbQ5z23oS31PW6ku9YJbDR9SYpteWYCzgaDbFy",
  "key15": "4Qtz2NAPfHpPxMqaK7ndYrsQD8mtxpxhcFeLVYnHGSVA9JJvZaAksfjkEpDP2bJDMDzB5t8NcYgs6Z2YRct8jeDL",
  "key16": "neSswGY3XrT1oGQdHG2V11td6gJA3vNMqYbYUhNRqYE3srDgMkcEr2yhvi5Fg5NN4e6gDFVvrPsHKMQauMkqbGw",
  "key17": "3ePqXRDmguoZsrxno52gN4Gj5YzU16MNLGaQtaHAH7eVZibmA3GJFqXHA9NeUDWvPAeXmUxQ5sq2Yvyfe8p1rZBZ",
  "key18": "3MYiXRX8ahXAXwGvusyLNxjUpu75JmjUaoDEgKzuN3dauKeyRtQVHG26S6MFJKPYw3U5eFFUxh9TuKaU7Trwzgqj",
  "key19": "2kTmu75v6G8ZBpNRVdyHXYwwdWg22iThns4kPHppmkDL2sYR8m3trtVbrpgWEuh2Gz9AevKfxSdWjLkg5m15z7BU",
  "key20": "abaNxaEyZHWXmHMdGxsV6GncoHrVs3rT4JxQrse1gyToynKY5x8eF2XpenLPfKpSzGC35juyTK88grFDnwLRkNF",
  "key21": "34qjcSDQJQpM6HBLGoN8Wk57VtgpThTXpABeNNtSn4Cp5uBPLBjSp7xMa9wi5F55fvkChzHR73qwfuyoxy3nFJhd",
  "key22": "7ygvM8LchvhGi3dmBsi1TwXpLznpqcxKnieX3ux4wt9fWVu4U5fxbkwHetMu9H5eMfxX6BpieyuYycADZ1qHP7y",
  "key23": "5e5W3Wwo7YhkCCF4rR8tttRuG1UY2C64w6Qj9YNKEC3EXwTF2ewzvCRw3y8UiEnGZhXwJ9EoUXvkJT333gWs832n",
  "key24": "5RWNh3yVUoX6nhiwFSBKMvxxv9KkzXR1sHp6J6u4tKFgSZbUJUr1bUHDJ4dTys3fLX7yCiPWN2HcyUP5MRrMsQ2w",
  "key25": "4dhAEC9x7d1V93UbaTx2E5WT6VsEuKJ9fpSWvBqyEMMV2HvHo5TskcbNF7wFfoUfq9QKAEUr4sewEfaeYySidExj",
  "key26": "3zeF85Fo2MT7gnmT49QM6g6Gwr2vHL57vBHLESDMurzDvHfeNXnLB7gcyhtQUEGahRyxBsX8esUVSGoYfGSsFxUg",
  "key27": "4XF4DUcipV9fXt7i57kB3payZq68zX23d4dfaaAS2Qrcptu67B3UWt7bA33jv3urMXniecrsyHcyq7grHgydWbUK",
  "key28": "594uxZzFV6Fvebu9HH4Z541cbvYQWi6FxqdAfyUodC5xkhC2iaxjwYAKvk61rqUyKMXuV6AYMpkrZDBZLBVq4Zw7",
  "key29": "4bRjFjg31MNWwYvwDst8dWTL6fzWnYigUXvVggCkrKoumve8pDT17HUbPJQyEkms1r762m3sfoLSUDRsic6uK9sQ",
  "key30": "27yUCf1mH5aMwUQCoFUVGNH4nMBVaB54JyQiKvjUiAJENeuifkuPf8WpBLwR7RYyJshYCFZxbqT5bUTsV85ajQD6",
  "key31": "v26iUJfxwWZ3oJMR2xj9hubyy9dkHRk9aabECfaGJkNccvi8otBEtMuuVNX8wHSvV5NNc6yxcNZUuSSWxvLAxvA",
  "key32": "55zmTLcJLqsLtDk86RUZfpJ5y5bWp4u9UGqBk3yXSTJtspbUzU87dpyymFjeqhTJqFVLDrr9QfWnE1bKPE1MLqEF",
  "key33": "yQqpq4ATPaecU7WbQqMSVdiNqoBorf8bh1d8mngC5nLzknRV6Je2GAY86VjxumJgC8JCSMoxaxzS2FHK6unFyqB",
  "key34": "3kGwZ9GNvqAAHYncpLwFTE5KM5qPjjcbJg43sa5KVYMJ9hXkh9zQq6V9BtHCSF7XuwxYrm1diQn6Af8k7tuhrobf",
  "key35": "4TWt7ZM4KwFMpPFJhK42UT4aYETyGU5puZ28VTtabK7qiLLSwBrnTpZKLZzEr3WD6XxWWS9XQjieAE2Hb1mCFY6H",
  "key36": "5GqN117AUM1g6JcvhdehxzJt4QR3mrtCFQ6tvaSv7QeWMwoMrj8RKEfy8U2VgjKMDLgm2BWZLnYv1Pd93KzPfjqK"
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
