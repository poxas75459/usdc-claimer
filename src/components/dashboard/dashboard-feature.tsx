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
    "32csVKQCuoYEqygZGV6H1uLGzvJiyFjDMGZ3ArGQXXVW38AEoHeiRGJS9v5KK5Zo2teAg22ZMSwvRxWkVwNPBBZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Si8dxh6knWboj9vbqF7KVfj7iuyZyWUGvo1HUkWD2ithuaKqFbVeBN8Bo7K3T5ttgaUWpDZvb9Lv3SFYWPdWPNL",
  "key1": "5RznMbRCeSdcD3JLTLxPqnvuJyR1FgZiWwjnZwv8u8GpBk9ypJkbmXqVvrZ3kyTWkxu9XFeKdezqoAv57fuWGiNE",
  "key2": "64LVjUf8d3Tgacd3GkL4CCsqaWsXn1rgQ5sNe7NGgqqd3aosRk5h6BtQLnJF11LwJgmtFpBvJJ3FKdqF88QDXcTR",
  "key3": "45Pb2WMaaZqC5ByRfvgGq986q97rzNRuJcMZEYBZaVfCMHz2fRrJBG2YcoFWXFqk7hXHBwRQKC3sBU2jMwci4nn",
  "key4": "4f7SF9sfRcasDcGcu4W6LmpGWAHgyrufjVqi2pcW9fdyPYJuXDzpXvYVCHcmkRhwg5xCFfaam7P41t35uH2ADbPW",
  "key5": "2FuEM1FFUCWDYDjhsG4Qik7eVf9ZMkz2qz8QBjdtMgJnuxbHAGK7XQtjDtJZycH4eHvq9cATKCq5CiyE7fXJnX87",
  "key6": "4XVtXbtxLEJggCm43FL6CYj9wV6meCTKfrxFDnStppFS5zA3W3nM6a92QAxJX7qpBCBWUt9Cg765KJsWKv4pBT6R",
  "key7": "AmVPRZWGhnp9UREUKMjUvhy16CfMm5Ua12ivSFitNvJXxMH1pHJdouyom1PCV3Ycv5o7QSepnNshz8eHVr8v2ZE",
  "key8": "3AYwkL6v7hqWzDyFfXdDUr77kXUZKjBrrxeWEpR9oZDDTpbshrFwVdz1nmwxBkoE7Vh6jsBQzdgxq6MqwxEgEYov",
  "key9": "4iRaVNaozG96hxeJcWwEm1bfVykAitF5hD3DCZqmuetC7mSKEjZxRKvUTRYwr3YTxkwsPfSPhFgjZZviZBsuZmka",
  "key10": "4bA3W19XaHgCXC913KaPKmViAoXdphcu8atiSxQcow3EWTg5eCuNiM2Pt1FgioLGK36UR5joHZxaaUvVBxDMhkYP",
  "key11": "39M9YRbc9PjYTYnMKHesqcW4XNhuVPZQNx45evMAyRZC4gmS9mTcCMnXxRCLvwdwHHR1gyp4VYDYQ4hEXqMtyR62",
  "key12": "cuKtW5NCWdQ8TwKDoJWPcK4ha5KVk7w3WMQSFjEoBemEPCdLTea1AFkqeFSEiW79ZCwjoQh1Uf1FqUF5WhZKYA6",
  "key13": "5obHtisJiM6zGY3ghcipbwbdJUhdZdJndZmGEk3MazxwNMcYA7A913Uv5jokAkaTRH4gwhFYNDLMkkReMKWZUifX",
  "key14": "5ZCdu5tgWpbUsZkroVEfW8QmZ5vD7tDZfCep68UqaWbokfPiQKAraX9yngH3pYLHfYPsDmeEQNRrF3gBdtdj8siW",
  "key15": "5G5mhQ6EJEw13EY7Su19HVQAaRpHHGRfo3PcqUEeWeYEFt978hiupHzgBAQi1QWs1BbzMxm2MM3kv7s2aGEPDwnJ",
  "key16": "5jmrpXrgmmDziR1CuS4f2x2DQBZivAgV7MtUSiSTK4H16VHaazfGGkR4MvLHStetEQUeZX4oMyj7UAQgKxbJZ3mn",
  "key17": "5PKKD8LbpJCuGySuQQPrrNtH6x93vJuH1gWUrtQL3TcvEHhx6djUTEkDqSeyRAtU48ttpy8JoUjCnzjN3BP59yim",
  "key18": "tb3b78Pgo4btSCLUush3VAn8HGTAgnUUXEcrAp1bDE9FxrC1r3pzFSsrMUqkm1u9oHpJcNmhUf6PEsuHgKyZtL6",
  "key19": "5mhP8FNMxqzg1ikLFZyoC24ttspYujybi126ir9rTjuTAfSqp9W3kVhKXDVfe3cZwsZ51pvDzKs7ZQQ8SuDL7ksP",
  "key20": "3YBuPNugCakR5pw4uxhVaiWewUh5VLctdthoTUaonFmTDdkEqdT5idYy4bsCNLBy5qeTeANtX6cWLJNLSquoYB6E",
  "key21": "5GqCs6S9QnEt2ekTF3HraxMTgQ6Y45GekqG8EBXnNomFUcmVdfLWP6hqTGN2DbKMvaohvakoRqrC6QfubzKzgQfE",
  "key22": "3srzV5FJC4pp9tVzdFconophBibrwYAQfi68N1GQ5WKjLBFzuS3f3fj3RwZBTmG3ENzp9tANvpgZKmKx4qSy9Qpg",
  "key23": "3dK4646xvomm7DhRgYL7myhBKNjzEacNNqQKTxLNiaNwXaoPi7M7gpwoUBcnxGsQGyq8LSYx5WGNpdNrZHV2S9EQ",
  "key24": "2QTscYPYfy4pBQw5BNUWqeCZFZHoKR6pbKfMUAbKbH25QQwYrgfuFSFuysFUGrqwN4tMPzSgQm7bqspkRiPUHbCs",
  "key25": "2sKAvdXgsdEpZq6yEhQYb4ck2QxJ7K3gva8CGUWFj5YbnEstTePyoua4uCy71qJrkuuznY19Yxvjs7YHco79jrGb",
  "key26": "4VwEkAJUTAagPyaDKp4g1AwGANiiAoJaqheoAhVhHiLeCHjfBMrUMaekA68Dk21mBEcReCah3PigXgA2neYr3ndF",
  "key27": "2HF5oeEMgXpo74pD8b53XdjC2aj3ury82HAyciUoPWPQV75xpjdbQjyLvsLYhdrPYsCSu3A4QdfUUq9yZdAp8GKs",
  "key28": "s5Pns6QLirRayVQVqd7ZDZrsQTfEUw3TnnF6dGX6C1HsNsBUPL14yJFFNC3inMkFH8SojdexnEirUaJvvDC7urL",
  "key29": "sXi1oo7RnUgANZMy7QS8HUyVrz7cu7eerqtZ1BZQfn6wGXoYE7kfRwjQX7vhNhya8121JZHdtrc1okxMrkodNjk",
  "key30": "3TTBANwSRVckxynJzkFVKsEnPe1F5DVqRdDw16C5JXPr4gB6p8LDsurGHoe8hGVLYtGLb8i4aQgXosyafkq7sKmz",
  "key31": "2MpvjxAv4dzEmf4sBymKeaqbsLGSb936cGTj6pd6xEJFoCZYbCsPdhsJCfFQxaMwvXXUXWMcVtY6AJjKhVsJPPKs"
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
