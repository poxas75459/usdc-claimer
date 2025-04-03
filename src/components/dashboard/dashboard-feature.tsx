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
    "2QHNPhRwHGbBGwB7MaEf6WsJ33wNo4UyGk6hJpg6ZX37WoVtpKZVgujRncXKYGQjEpHZ2ErNYXY3aLX9qgQC2FUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ZnzkFPgb3iJUncHJ44C24xKLvqAj6Ggf8v43SX9WuK8en3B8wCAtK8YrNpkXYsxq3oaxT54wfFyp5pjpdYm8e8",
  "key1": "3D8ZkmchQxPoCvfspCFHpJYdaWMyy8VsA64TvNg1PHqVCz3zqayLUXTVDJnH8oCwVAZYsYLbFT3HxiFhqaeNFao3",
  "key2": "2xVGAGTgLDXwKvA56xd2bfKd1yEv4vktPTWQaF8xEf6RPYeVPDAMZUbg6BSLQ7Ucd9ENGX9iLTwZRWncbjG6EY56",
  "key3": "42ztgVsSzLeQPE8ejJkLArQh9q8PrW9r6B9madFhGtzd5NkmH7EKDABdFiGA2n5cau1cZHehhYr8waebc41b46Le",
  "key4": "5jHR7vbEUeb4jUqSztPuVXG9ZpqkYtbRXdGmwdG8aGRZAura26Wx24PuLnzskauUyzZzLZjmST3omPmWUqAr6FZj",
  "key5": "97MNy6tSFV3q8a8uzrPygXXoyv682zamP63EhNMo9wvB5n2GD7NXd6QBGeTvWnKQxvBZNJ128u85638LxLbKZp1",
  "key6": "fXFxEbYUncFXWNBrNyf2u6VLPdPVKx7zPagSiMRNR8PoXPGwhcCWP1unLQ7xVgJBeWEfZTGjgNarrMEozqA2iEJ",
  "key7": "2U3KVMXMKHcMaV7aDrsyf5zKtwfJZ7qk4CgEZbGs9uDroLdwwjFnFWJrgyLuRFXbxdAynRfRgDZcrFHtJjLKaHNk",
  "key8": "CpCqTGd8JHWLj3xLebVBqrqf2fgPUGBSc5kfPkavVmKvFqGTCMdyLSq1FEWFxRhsmYtAYZc15abbddMp7TxtizW",
  "key9": "kW4Du2UPP1FnbxxuYsEoAWtZDuaJd8HVh5Cv5V2LdcE7vEpzX4L8BnxDGZ5PXGn9vfjK81jBxLvEBk79H6Ad3hs",
  "key10": "PJwqQYxBaJw2Nok225kfUKHTwe68KquqLCMSQWzxoVV77Z5nKitH7WrkX8TcynmuCLhmVWk8cMmGsT6fWMsANVy",
  "key11": "3m2hSDkR29WZWfhuSnEB7Txhj8zF8VRouoDpFe895hMtbGiUh8MobwH7eLpHHArkyrbGxpfGiKBtJUaVENjU1GpC",
  "key12": "4g3De3zCTWQvrCSpjkAJB1HDXAXoFDkizjAfn6tYFDs3hMiLovtrjmiDYRgFP5ArtGZ2bNRpv5SfG84yVBNj9QZB",
  "key13": "66h2Lg93oNokxjqUopsyGRPePx3fGi3T4XxnASPC68yKbcVTkJBsKvbtPjZZVgpnj5ZpCerqbNhW8AZ1vCeyLxG2",
  "key14": "4jEQ7M8kBcZWnLgLKcg7LaucR4Xrg13qjb6kp2A6goaen5wkdHnoM3rig4PFdSLtkjAAkvJ1QUxkBrptUgePZJa8",
  "key15": "4CwFg5KFg4uBwGz4h2mELqfH1a7vJ6Dpo3TXpeHaeN8nTUiAQ8ii8g5DeLs9tvc1QoZ8kxwCMxcEV2NMw16AXQ9h",
  "key16": "kC72BncZhzzjM3XLpx21AJGtverK3ztYaa32A8HPNLx6ePEfma8M34SaK6UGtoGXCazJ7cCc1rwvuY2Pj8n2mG2",
  "key17": "HQovrWwRvohtEGZQnn1upxhHnNAD2dwpbo5uCT3HXYi7NYoCDRex4c5y5dPHGicPK7RjYA6oA2HX2eBBn4ZJGKL",
  "key18": "35nGDfnQQ76Zuy3UVFrXkg6ENDcD2pJ2RvJP1yuyM2qpfoEK3nZXuoP8wKkBYr34eHdnz3iAqdLecwcZkwqEzsQ5",
  "key19": "5vVMVGbyBW1dhYcEYzuG3Df7DHtNqpF4p5yXz7q8wRCzfs5Nfyfq2PTcuJWmKreyfW8Te1BHCREkWa8tMJP4JPKw",
  "key20": "3envUgN7eWktsuuwsoXg4dfKXok6Topxmep616FsE8tdfziFrNKDmneuwJWCopYzn3RWE8uMTSHvBGdL9L4CNfco",
  "key21": "4bwTnqMvB9JSy3uxmCR9a2SgBJtA3UT5Fp9ioW5Nay63BuqGBoeT3GdBm4T5BssGsg7qdhtNK2WGQFkkoCQiXfYo",
  "key22": "4hHzbYrZqySyQZMnzQp7W2d34vvREH9mWjYaLw9wNxzPzueJ1J4ptfmc9KtQDb9Xjwr1X4sDn65TTk9Xwdc4cLG8",
  "key23": "36RusE1McgCgAweYdAVeveuQhjpYVrUkFfM86joYpakwLQHr71qhasYS3oiyxAh3BaMMGr3Yz8V41Z3aqhJV4GGN",
  "key24": "4ispnU3tZR89cRWqZzHKMzLVChro9sLqqxMx9abJRv5Kv7CWEVpNQwEiANcy4RrySQGKXzzY3zkPTLAZa8o7bVSH",
  "key25": "m1zBSNQU8H4BibZ98pdMWMpqRueb4RoQiPirVdXoxXHh3HZ3cXXuNB9nYo9PJAb9csAE1pJ5cTr9HFYNMc8DVCr",
  "key26": "65HBF8vEnQeRxqZ7xkQgmTUPYzE94TM9yvkUx35XziodZYLNjaCa6bUXt6jV7UHQLyTbrSYXDKPk22sGvaLu7PVx",
  "key27": "4RQWWZTuvxwFa8Wj9bidimZsX1vnDWu32o4Gs8qngYqpUS8YeKhgMgPzoVMhnHeBPTRKr9DHJKvt37r1zhHX33Mq",
  "key28": "nEpN6wP1E9Pqi41Mnuvpkmfq1ovH46WSzzT9HdWoHYMu1beLEC1GMoKytAh8XA9Vu2j3SaFN2p6yofCexLdTxwT",
  "key29": "3yYRUdvx16rPmrVsXhy8AACd1ozByibNy2SExFBQJ55Hce1hJ7L64dAfxAHbE4gX5dboS2bMorN2q2vjV5CBWaWa",
  "key30": "42THSSqNyHDNt33Sw8dVpYjhxHZgLYDP89wDGP9VGuH6dL544YNmJaEDxKfJq7BfUB4RZxJnFJHFk118P8uiZnSG",
  "key31": "wQTicNDuQ9w6SKerUJVi6dpGXq8PoBYS7fpshXBNvEqQrfhauGLD3ockJovREBZioqbymywwKV1NiAJWjEfgAfj",
  "key32": "5oZGkC92QQJzSDwn38EN4WraqkEWNFwk2nzqRXBtQ7AFhbKAL2giyyYzSdixu9E8ws59nLH71L2oWiJSK6Bsktbb",
  "key33": "4oucYuZtBftm98f8N2qvmarGxExVBsq9DUF6ixJHtAiHRes6MbxCnNR93ek5eXYYgPAUv9uytNCYAgbXVBTPEKyG",
  "key34": "2KSLME8kZ3RirZ641qj3BNrVUHXezGSA9XTHVejwScEQH7ZMz22ijaFLzxjhjVSTrPuWmWmkJDLBNQHYvLA6J5np",
  "key35": "25rXzfya6Y81xh2DpnzAoormTnhJdQ4J949ethEm6nBo3ma8RjWTee1kVz5Vvv8612tqhXcz7PyJxPV8MLV4sHSR"
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
