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
    "abu6Beqyoxa1eJzgAvVomJPDdAf5pTUoLpVb8Z8pX5sECC9BGLaVpG69rg7p3xXFLkBPnX1fsQ9SKNim4ebTbxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2455Z1we6o29ko3chfXKxQwzHREaXzJRkQSVjnSApHn2eWnE4rJ9ZYiWkqyxzQgvhDxCB7WN87yyKK2y2SYbbb52",
  "key1": "5qxwdZ3X64Y1f1d2fZ6RXeUMuY5xP5rxXzp4MBNg4LtLiVsZJtz3S4CzVymZnu6ZdjqB9QRUeTCTH7YYLqaGn1L2",
  "key2": "6mtg1MHFKBLUtq9zSthGmBzVnW25hfkDJ1cYKB2kZzSvPEDMe9XBEFirNGTTZBD3S46V1LL8ud2fzNi8KuPqDHi",
  "key3": "35tL7rBjAiSsP5Eyv2be6rMdhNjUgWvMN7RhMTgRZVR75LngnYo1K4UPs4r3L3ZZZtGt9etscjox3GwyewgQwbZf",
  "key4": "q17Cdyqh7YQdvRHFjwQbjRLu77LVNCTsvN3oAif89iHTt6rMGoiSahzrLpHQym3eyw354LCukEct4bYyVmu7MF8",
  "key5": "2ByTxo2xaxQDabx55BUSY2YRN6x1QmY2NfQB6hxA9ABBMSytX9Ps8W5X6eCn6qLwz2tPrLpDXLCyHqMxCoaxXGQi",
  "key6": "5tBNwcnDhLnoZrBEvbkUsmpPws4EXhjAAMpwrSbSqN1HC9X849RUCZzvw1JjmD6kMPRShrKHEkoTaiGyTE4F36WD",
  "key7": "aZKw299suk1sAPHooRMQCao1u4Dg55nPNZjyvTR9uoUh2x9z2AcTcJsev8oJYayeFXV79vipDaA65kc1MQnqXiK",
  "key8": "3ZH6wn5GHk28x2itXpoexQdPARs4PC7KWNjdTiqCwNj2b7zVvXH18GBQ3aVWCFxQEFNQTEJTxkN6scpiGEPTp6n4",
  "key9": "4JtiRxSvs5j7rBMh88Luy4Csa6GdbQDN4BXwwKansLHn3QmSfsY5uPEvN8NoZR9xumotWe7xS31xpoukGWGwFLVZ",
  "key10": "3MJPyDffSmjG8xL2w2HbXpXLkz4RTxoxdUER5KRA2uhhZ9Dz2z4Ri9iDGYXJV3nEetqsnqLUGngK37mhEtskj3yh",
  "key11": "Z39xPX2vns7hSAGUpYofL21DR6Q1rEN8S29PQ3SYQTrSUJyGnVLWkmfUNoYvBDB1LkaroakPsg1nKzvse74s42y",
  "key12": "cmTSYgs4swQXTghYmrXypdzLc2T3QnNmDBuhq8SMxJnEFHcTyuzcVacLTXmKASv6RSjH9SNFnMqfuVeX1XnhY6w",
  "key13": "3cZ9aRhcVShT28rXLYEH1HbuZnox8b4uTLZvYVeZnCXjMQ2QuqP4L4pRA8ZULuk3HJGqVQpS9itNAWJvCoMkcmXq",
  "key14": "4dtLQHiVr3PZY4oMD115u1ZBVZPXg5u7H1GYJ8TCToRgKtcrUncpkxQL1cEPT4ULpvnEJLfcbn4NTjuuX25Evsjk",
  "key15": "3t5ASfJBDr8kGtGMWfgtDh7x9EyTUYKvtgLuD1L8J3K8eNr3QEyywpKoxRsMDqMtGKAXw9xT6xdt8mXJEjyJh4Py",
  "key16": "3NL1WT2ru1vptVjUV5dGfwx8q6ZXYtvz7opAnjGRajGZtwCkL98e8EFSZpzZAQjhfCnzZmcBRDS8roBbDFMEWsfU",
  "key17": "5h2Mp2dTerka1b6WRisXH3FYtW4eGBHHVcnez8j46d4yZdbqxMVHUhMYhoHDajDvgNVhuzNhfHRo1DRXmtVPP8Fp",
  "key18": "3D7va5Ftfdgn8dA4pEKQdtb4jy1fUHj8v4yg4n7p4FX65ow3Mvq66cyvwUdQKrdtMPSYTr6GaQsMgzFnr1Dy1kNf",
  "key19": "yzoKM1wr3gWqFgUnN5kW1UpwtatUuD1N2XCxaTmEaeyiXAvp6EXF2n9Kd7boKKgPySaJckPTJn9C4Kgg8769C8U",
  "key20": "zKSnSBZ8tPVHrqM9vwZ8WDiNxMhduM6ShEJUfDtEhsG3FwAaig3dhgiK5KXzJxhBeN4pzN4RmuatNBikg5kkSLH",
  "key21": "Tkam55VTHcdVQ8H7eitiH66tKwJaVRjvkX3735fymZaF4eGc1ZGGeaBsMfxtwuTordAqWTRoy249YyLak4VtnPs",
  "key22": "5EEUp7y2RTHVtgYX8KadFcWDA9jepCNUhJJeVJrtGsrjkQ85juvdxBmVFQ7V2FHQXVGaipAFG8eibqogeFHQBKe3",
  "key23": "4HWMsukP6tm4fSG54xDUak1pquDYXjbKVGTx1ZgqW7S55NweceNBJDFL4xYYjqzS9Se1VQ6hDUhMwFpFSrmx25mw",
  "key24": "5VNQtaHAS9WXNGLEmHLUk83JTWCbhXNBqfHwLcmotYekESEsDBiJfrKo7NeEWSVo5pStmzN7L9AdhWM2YEPnJSgS",
  "key25": "4Qpeec4g562vKLyLtwMnkZBZ4gLpzZGmfAfydrHraUBW12yyHeuJLXEH7XDXWQSX5PwUUMmLg4rXAXpXPniLuooY",
  "key26": "3pLZQpyHxpjBvUyHLVdgoa5qjwssNBw2pxXJSyDgVnN7TG9nAb8JvEe4gD3rjDrH8WrchV6BPAT2wwL7BU5tP1d5",
  "key27": "4FfyLG6CTiSwn5ZQ5Dvx2W36UhPtX2W6wp1FUeodEfdmLsPkcaE4aFxLoaHRa5itK5aAdDH8eHcdpdyTL4e2Rpiz",
  "key28": "2jmcnMxvMcp7vtvg8hTT5z7UqUJswE6zWiaqEtFeepZVvZELXKfkJmaTD2CgguUFwR7AASU1oWW9oCeGnwSutzz3",
  "key29": "5TAFQdreNTjV6bAAYdDeDiXTsRj7bMEr9A4BHPWUGbpFW7gAu1nqspYQm6LG9MoM9RNDWtmhbwzBzv8cKqKgM2py",
  "key30": "4TYFSRWoTWnT1xybVYyuAf2ZwVpDxDA7mkFTowcv4jX3g6imM5AvnFHsNdvUx4qATpL9k8SdaUmFMmA8qVpbyckS",
  "key31": "4eMvmKDJu4JUTuivUeWkEZyttL97ApNJsybkabhJ8szVMLcrbABsAsMSEB9bWnHYN3sGGPHSLPEybQ8eB1EJTZ8e",
  "key32": "4qaGPwsEDYUAgzwiFrLvJevpx8xKtQVoo7hRyRMwhQpzAvhd6GQPuezwfHhRq12uw3dLR2Jk8faUXQjsJr8yBfmc",
  "key33": "4YLuFAXPtbL1QEiUkRXdpZMcg9KVFiUdjgS6HdXVS6roposPAYbxBrSfkxZfd15tVSHCPngz7qiBY4E234jH39nz",
  "key34": "3GNvpj9ckCrGJ9wbsL6Shmht6meqL3L5gKCwirvJUDtXrV3ztL1uf8K2NePJdXFV2tuzJCsNPvzwXM7sgWFJFfYs",
  "key35": "3LcQAJRkjDjLsqtR8uV34JYypwCzVWD1b3trEyLeFGfHZBbcAh94hCbQP8Y9soNQmMxTSjYgpGZQwW5xtSNeHoCF"
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
