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
    "42TNJXNSfNvfKz1TY4bR7FmJRev4urYtTU3oNGftEFUNdJJe98zrF24j1LSPnmWFkRoqvFNuuQY8PY62Td98XMXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59SGRcMK47xZvJvfy8qiVvGQLzVdBkDASdacKUdHVMPyGf7M6A8W2mKvtki8tvsDzZW9spAKgD2hQkzKAeHPnxdh",
  "key1": "3gLgebYjVDs9KetTsDrSkBmhgoVGM92BB8hi3bbNoRv3EiVrh7VX1S3TX6nEY8cn15NwTENhZKhpP6amAyBAnUMA",
  "key2": "F7P64D3P9w3jxh2fWEuW5THjsEXxLwrnkpRDpGDv6hSQAxRkbvuT8mHbenyVEng2tHsa59H21TtUULxD4x8PdDR",
  "key3": "33phsZfFNRuWxXeqnf2c4LCui4QYVxDpEnYViXzatrPCtKgmr6fPG9MU2eb9hmzrY6YLN5r6Y6EsYHm9EKgAdywU",
  "key4": "4LbXJgtE3r684T6tVpYubuLRMM2Vbxzt397GU8vzunCdD18cgQJpo8KusHqSzns5woPYq5Ue5Pr7wjjxG6EqWcYB",
  "key5": "3afyte6Y83TtJsDtdxAViYvBpLJVn3HnGTh2m64WG8aqurViboWykgm8kCWb4esRTeYiUyYEWMKcbQNQ8TBmFH72",
  "key6": "3vQy1xck6rEvRfwPAA44Ueed7Di8UpatC2HkGL9HNpKXCxsEyf7mRPpcknWAMkiHEwHmr5jX9h1GLC4WCCuAzBJi",
  "key7": "657rmGpZvMRCB9FJxXW7arvdULgWB2NT3XRcCzCeHjFEaLKe1c24jtBHcqYb47XssKmtx9MmTA9J4ZyS54ehWdE5",
  "key8": "4hSrdb1rjzMYyr2u3LYRb2F9GDjrjp5aWuHSAc1wR4s8yy8iuamFaEswixJzbXxkCnntBngbUYmZeP8QHqrZwMxS",
  "key9": "4TeZgUjz2WQ31RoPrqVgnErAZbyUJcH125kZQ2HNhgva2bgMGxh6NhKH1afDTaDuzjQm9Du2Mgy2oLXbmgv7GQX8",
  "key10": "2bc2WNKZmRK6ehJ2H164GwBvBZRXCBgLvUGEPTcir3M8M97p1vufccPR9ZfYJwd5CAwQT8QRV6zBmiBWZ2igfWAy",
  "key11": "2iPwUxe1XXo9i6ZW3GQBCw8Y9JoaLDyxzMoPjZXGtBeKkb8ckaBaJ7nvqfNjMX5LyMLvcAYt6ot7jYmPCWsTv79s",
  "key12": "5yM5G2bYdtdGSFBCVEQNFVUNdJbYVejtv1ydfA1KexPzexYnXrg5ucDWHzEiuvZ8uzGFnxEH1LtabeLJ54EKTUsc",
  "key13": "59t43hM6n2ehwC75z2xh2aCoth7egB97dS6L6PgfNTabXABhySnNoEPaf4r4r3VgXP3HKYH29FuZtjNpN3QQzTMM",
  "key14": "2RVgVbbrz3KSuuVoyhHQRFPKtMSguQ4KQS9HcPSB2wRUUjN4StkY17CLM5DbEv2Un3hzLoBFaCN7HMQtEUsE4DFt",
  "key15": "3J95tdxENhsEo1P3iqEXNTjKPepfdQ8QF9UtSghjAZ5EmepEqnyKqyiyE2TEUjTdaqtY8pNMw7ktdRSnAhdhVU7U",
  "key16": "3Pu2pQNSh1UTnHWDrrYdBvFoPPfHsZ4dvN5aPfRLHXsLj86z1SyiArqEJ62K7fUn8WxoJamUqp4tfZzJ58widGvh",
  "key17": "45FkDAUiz2B11toGsBfGUQqRNh2HTR35PE38bvDBFhcJKFzEyq6JGaZCE31YNUxaHFdacLGD2P5wxucTwMTJFSB9",
  "key18": "3t5drruWSzvSoXku3to27JcHrYVvF2wuRFquCjkayuNyqLc8Ub2z8MjLLqiKznryuoazBAMFTADFLBL2jtfSbtTA",
  "key19": "4WD4uYGp8RXk4ba2WUy87DeBwtZjSZTosnLuPdSEnrpi2eDsgEeZn6bGVUojECahs5wdhaqWMz7kE6AEVgi6LBc4",
  "key20": "35NDsNzvBEXENbvcBxgyvARFgBnwzLx6Rtspa9AmXHwBXhyaQGW1iTm8iKcVrbBFEWUQ1tFEZwcVrjSPXDFY9Eee",
  "key21": "4jxydxkTMgRmeMBMLetWD62uuH8FTN6zMR6aLrxjZkH2SZUsXgjtrtdcubs5u1Zi1RiL62cyBbMi85o3Hi9oApnB",
  "key22": "3cLFza9PPzKAkQooRzwi2L5sLuyyhphFryw1yj8pGi293o8noWUqMgKqC7NZvThyYqCgiWfTQuUqTMpXKFSEf54o",
  "key23": "nkx28CVYNJrXGd6stpd88QWhS3Y1dm6YFg6L4JsxewMw6UwSan2eWXHToQ5R6KrpN13VM4eS7Qbsr4X8LpD6caX",
  "key24": "4eCqBSwWzCcsfEPwECJAkwtdEYXsU5ehvA5y3oQkvZffTR4tA3VHcxE9vNZCpBnVfp4YxWaCEnLP6jPzoyyXzSug",
  "key25": "UWVVSXsryJtYj8y7WTZRkpj83usE5LfSjMFeJQm9uAa5FLV9jg3uR6jpQAdGWoqxny72CZxjgq4ptpjyc8F7fgL",
  "key26": "WoJr8j7FNbNrcZmYYoTBevXh3tMhDFztexzoNXkiKucKnKADTnt8P6TXE62TNx2UCscM7pqCpsELobVczJ5eZZp",
  "key27": "4zjUF5UmhisL5bLnHt7E2yWNoW8qvXyRRtoFQo2mA87rJFrfY6qz2n9SsMME8VyjPwhbWEoeHrhQrMfYe6hJjYXL",
  "key28": "DQpWCaSBzxuFEXjUTFGsj9MecWypE1cyXJHDGtv1j6LjUUktzUZMxioq9spAHUYmRnqGe3HY8DZebPaRYxC2Ssh",
  "key29": "2ZBeAsiVzFjEyRaLoRkusaifRhxwhJHHe9CYsaygF19U3JCEhza48sjCNjd8RUzo6vSxoA9Tu9N6q9N3FscqwTER",
  "key30": "3e9rWWjr1tVPMnzkXP1MCk3S8zsFwJE3DkCqAqQ949KrT6p85W57zVq6xjgtoFdLWKH1D72QnBfwCFXvnGSN4VvX",
  "key31": "maHxUBb5j78gdpT7VSGLgLpExQPkJWim1TjhbZphCJ9nSrQpLwYkBinqur1EUYdwemgveuJNGdz9hFGSCSRForW",
  "key32": "335vh2Wp5Qgv9knvLyq6ub4pKgsELNdnHNH7gMnuDtHf4f6LSVRcSSgAexq65vgNRQFZykE1DLMU2A814ASkVAMP",
  "key33": "3MUX1ESQoVtF7dRUrHDTYrToESTLyLrLTBaG19eL9Phb7eGuGHefQrgkmEgCR5v9oq2PkECfVNGkqzcHgyRPNdkY",
  "key34": "wk6aqTHGNb9RW8JtSybZZqEFebpssc7U95jT5sEABYMQ7YrNVpALYHxdvtyKJK9GCm5DKQqFToYLGRHDCinCfzW"
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
