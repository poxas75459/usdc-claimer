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
    "5n7JDwUPGEFxnJKCBaPDfUhMULyh1hXbVHXoGKwfqbitCzcyru8pGCYu2rRXcoRbKcLqTfAKcbPsrmAvfmFW1LMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QDu5pSuRyJRFvCDyrNQfib5Tccfqri4EhJyMW2rhgcHuMcMJnwhS2RZmUc2GzGRgBCpCCNn1J5foF2zg2eyy9Eu",
  "key1": "2ydRzc1gJHV1B9fVk6naEnHw3GV51fWPdgv9CEcgdX9ntopfGWdFEQUYrwHvjzGk84Xi41CWdCmHrBUvWcooNK6a",
  "key2": "bESpf9obEj9dcd33nUSWrVXWkZsHKVk8kTMXhCzNm6Wvwvy6GcBa34jnv1MgZoZvk3dePXMr5UmooxUSRobZk1u",
  "key3": "WWg4GUYDZ62M9e7c884gZxRrzgGmbXZbVN6gj5B2yRhTtDces3Drvh7EfmWGFSqTQidmKTnHqRTQBYr6eJmbMU1",
  "key4": "NfDZZWygMmgTD6vgNmpFgPkzbTSdVsXh5Qxa9uFT9HYLytsvSQepejnEMxrNuEksD7zC8C4sxrGwNkzsVucLj8G",
  "key5": "3swLRHQ5fH8RTzzsF7ysrWndRw9oaeDy6igzSREsg6xFTHj8mNYexeQxnhzLBFtsFLfrSH32PiVGNtnfJN3E94zG",
  "key6": "2Gmxo9GD25DvT99RYF8yqh3DSPJMtp1uz9XRYJn9rKaYESxwWpQHfGTexgfMa7xy7gHsLBtxDafA2JWZPD9HZkd7",
  "key7": "2MYzHZjJ5Lr9K3thA9EtRoMx1J1enePuWxnZDpQUAEBjSAFDoaJdUg699q7of3ZiUb7iUDHfWdeaqVYg8db229yp",
  "key8": "nxmJPV3r4Xg2jrABNnu6K7M1KpFp3pm2kn1iex9GsgyzxA59RzAyPLxchSskX57wGRadPwV9urjFzDYYUg4mcx6",
  "key9": "5nJJqZHqSVoEfiZ4vWazw8vJU1MwP7vfVv21x8NLykuzhBNVNjdFHkmjLdzBhMWSmPpoVanpzTsVKhPEzd2LYnQS",
  "key10": "9kckBUZ2FzSajEWoXXm3xXGKBoXLXLRnhLQV4w5YKSQwDd4gpf8y2EyHd4xgXWBSTyrT62wLjAXEHWSHZkG7XcB",
  "key11": "5YZUD5g3Jkf6JdpaCsBkLYNHHHv4gYyMN5eJB8rn12z73YaNhhX895raCqVq4XciqaHKL1RSkERN6VFpBgfrW14D",
  "key12": "64ctawDdshuqYNhZyUhBg2kDnfc4FvRYr7s9tX33YTBqNcavUZteEp6unv1vzGh93FUDsK26NTS59PRuxZtHcta3",
  "key13": "iw2sJRuEd1uT44edB54gqEFdrWBdXt4Sf7TAT1oEHdu9L9s9jpxv5KM9kMLJSdY2c11Jiy4x4fx9jtjB9bAXQDX",
  "key14": "3CG3xd3Qhd6Hzm11JMC9LvtVkBMUZePhzfQSWjgsYL18sMB62ckG1sWeeNCw8sM2hkbYQykXu2LSKtQWubuJs5wJ",
  "key15": "2HmbPeBr3qjivpoYxiKgJZrAA9YRc2u2776KDjZQHWUATohYcrcswEqfBUVpqyrtxNj6iEohvkubBFmHrw9NXC6o",
  "key16": "29tsanAvK6ZHHwedU8iLsQDbotwQtAKN7kJk6u8kELAEpQHuA9BxsiT43p92EJe41dbbzShqPEoXRpcAYrq3aaTm",
  "key17": "3g9iS3gkomGpyFmpNysSYMDm4JxqRLC3rqFNYToWdUGrPazSwpTGy8z6z4oKx9kRjb31rVvXWyDFBYasd8tgMKBy",
  "key18": "zCq23U3dLxtBqmhkpCvaCUGFVLhc62b54KVe3rdyjoLszaXbrxd9QBQ52e9ygjzg4j8w7t9omzZUtKpBG1kgtcu",
  "key19": "2wUhmkvsXvKnTfQ7MFiNYgHeBUro1FZaTcpQW9EXove2xqS91GyGkYg4gqqPZfmLpx13qqd7cHCWHyR9wpTLwjbZ",
  "key20": "2dSvT7uKXTwWQZJjndJtpzbsD8gRSMa1yKvjvjvfernpGAVgpCW2rxswAmPvMk5mgSSmYXHE6SiwZezUdM22Mg4h",
  "key21": "3thERVcjKVSt45F9Ui6fSSALErhkANjWVTBK66EAb3FfgkBFvQr8Y96HTRj1tr4kAFR4acezaw7F29bPF8aKPKr",
  "key22": "vv1R3cUn3sqR9wxyWSaUNtYnU1nwgSEe8oXntPCHuzK4Wfuc61Tr4qnNBgbuP1W55Y57P1bH9268trmazDJbDGt",
  "key23": "3rUPZZZAwsNYA66Wg49zJ5sVZmBtTQGPff6aRwjgvQWBUJDfJ8dra5qYVVe9eVuhqC1YXoDHCq4BatcZ1jRLbM43",
  "key24": "8tdUqKyAey2ogGr4Tm3xCLr5qhbRZKbLuCFRd8W8YJPK6BskrSQUvUFwxaWvWejpN8UQjx35WJD7At8WisVrQPr",
  "key25": "52rmVkPGjnJ9Uyy5z5uKsDR4A1VXAP2SrJMYg2jn8Kz83VDM3kGQ6mnESgKFkP2ycfvHwuTfc5LKEiZsdrwWFVxj",
  "key26": "5KUPDR3gorCkYfJmdTwZJwEq721N6Nww2BexY6Wd8mrbDFQGWn3si1qgkhVTAxoJUyMsnyYCuXGHxQCB5T2vk5gH",
  "key27": "3PTXamvXDfQgdSiWqG2c1ZeRgUDJqAktjNmm8Jr2pcRfCUYQ8mtWCn2kwadiMsPDCPiPZD8BXceYcAbv68BACG4Q",
  "key28": "2p7Kv6ZcLgm4daULyExeHrKdc53NZY5SpfqjZ96D3JDSAMRvVDXmfmLdhYzfGU8PNTJL8f5ZnRxFuCywHcLwxWJR",
  "key29": "4bmkfteJSmdDHqV3EZEPLXduEqZJpRs1fGimM5up61Mf4xMxqrpiPb5wkm3J15Rru6u9zHSwzxqEe8QwidZuz3uv",
  "key30": "5phN1XZxb2mfD8gF8g8UEsgWVavEi6yJsRFjH3aP8YiLF5iQQg49qGyJK74ypneFPHeXF6bUGMrVNGQ4uJYbJC36",
  "key31": "42xBbDnQw6CzmADW4FTbjPm6yzEc7hh64xhMVRG4yq5o4z1KCafXPfjn1DwWrtY32XrmCa1TZy85gAXxV6YUMvr4",
  "key32": "4QZVuKmFVBXHXhNHZAf6Y6MF8DhnMkNPV1pQiLUvuKe5MxBdkjhVUTs6ZsZrHqWFw15G8WhTLgJCbRj7US6JVChM",
  "key33": "3Co1RKQEeg6bvLUhF22sY1Ek5K5MPtvzcTsbJsdEQYtsE82W47XYpHWXK2RGFnW2FyBeW99wsfcqW6AwWNKRXXZj"
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
