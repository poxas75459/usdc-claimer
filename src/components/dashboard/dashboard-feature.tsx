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
    "2Svko1VFnZrA6ANo88eoPmYWHkmNist73D6fC5HEJXHVT6CmN9uXYQAnKEVP6Ni8oSNXsZJUnSCuAmQpDkrxbtJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D1Xc6pEaxiSUqVBqWbtTszN21DxHa2Q2zEzC3JPbEeLjq4EApjd3UqAuXaanooXBqpBpAprZiAgH37hupdmHXiN",
  "key1": "3XACkVu4YygSoqZtg2dH4eD3mHCCmCXxGHK1hnt1J73sJwyTqsjFvPtMB7sWDrR1xXCSeoGJC6bJBevDkTeucpAJ",
  "key2": "21z4tARC7vGqZqZZiF7SrMuZfJBQtAKVAZVFcHFT6khza6up3rd5RXrDRWZnGZ16rFcZE6hzimHGGsthTpcMggov",
  "key3": "3cFwzW9jVGnn6h7qabMgjPRFvgPmkDJ8iyKxZLo2yw2QRWqzZdbsK27C4UoLbhPrhpNjW62oZrpctasUUjus1kjA",
  "key4": "vKTqiT2X7fqPjz9mTBjAKJMfag4uLdPLb91v7sjQNX8JzA2aRmYwNE1vGsewVdhYCFhNbitxogGwdTVRSf7GXZc",
  "key5": "1RqAyKNjphDPKJBCQArjou3wcKY9Qvky1irbtWfeDL5kLPVF2PTAdf6ioAmfz8qyZm83kbk7Yz37y8uvinSPaEy",
  "key6": "2DiBicqJDVtMJv5AESYKZBinbWZLB1w9RffmJYRuSQjYrxoRqvPTwEGy4VYQQQyCqMUvQQB9XG7eo1n1FB5xsVRz",
  "key7": "Pqg5WbsSipozCYW1XfGnS77cRUT9xWSuJ1YdCE7kjWiReeneSnBHC1RZWXBNfNh52v5xRa78GB1AckeiyhKyvkD",
  "key8": "2qaR1XjLGrGPURnDbngSPnDusEk87G8m8iqaUtzAgHnRXGwBk6HvaWQESHYMsApPcH3sf7tE7cT6NJFpYVZzWua9",
  "key9": "4zKYpRXWCnzoZHJNiHuHFo3TeWK5emZJMKnT1AiwZMVmxDGv5jjtARKTf7NNREQ6TQHfmZRADLzJgWGN1JLEozXt",
  "key10": "jetTKCLsau8KiibZpDrhrAS2jPML9djEsB9dKQ5hgnNssJNVfoi595JSWYJJhgLCBagcfnC5qrQWWa6uVgxBD5Y",
  "key11": "3ZLMtV4Sf1bDMNB5vj7eBBMpstetjvf47aunwv3V83rfRTdQqDaDV3hkdwqi2kUPn3sXFzcEiivvEL3TEJfTjHD1",
  "key12": "5CTMc6NswLYiBvXt5DEqEmeC7zs9AVcwGzcdGUpxFzYUmxP7ZSKAGQURD8N3w8RbQzhfuViVNjNosKYST4z9wtev",
  "key13": "2Qr6t7KNzWWtmua8DSZPJQ74VdYAt9qECwKTaRe9oHsTzQxon8SodQnvk5aQYdNvr4SdmduqjJb7xtPLqGRGXJtt",
  "key14": "7j87bchAztsTxSd3hhWYBShVkcGcP2p3dXgvngm66Wt6W1ejap6tZqTjmVUjxfqL4T6r26CxuFCxLisTasMj6Mb",
  "key15": "3vSenFUV1UxDir8P95GhosqkcjE1VXW1RLmueVKZGxZysUwdUULqJwBgTSbrcefYANjmfDVZPCLSLcNoZSWWs4Yv",
  "key16": "2vVXfoFqwbUSGEVaL4qwj7d95gZyS6MeNGnJ38mM7buQZZf5wWJ9c1SdRh38LwNhQ7CbMcHWxXjRbBgnJh7UoXq8",
  "key17": "2PoTtHgbouDjDFzho1XFHn1fLVg2USr4CTiQXzdWSBwJW6VxUSF8k4XbvTtDkcgo17UhCuxGoAcPD4JYg3WQbex1",
  "key18": "3T6r8f4PTNakN9dMZc2mzKe7HMpd1n57Z7m1oPTaQJeEtdnibrUWRBQtdsdMrjTyawGU99JxKR3efCrbmghSHLjZ",
  "key19": "1Bmb75bMsM3DbNRzveVUKA7xShMQWgH7fPmKHCa4XKjLUh1UoahLygV7MCYtGVNfSumEPgyKhNEbTcdt6Ve2ZDt",
  "key20": "XiqkXUf3zwbhJa9NnCcoh4sws6McDS2LSpSAyzix21o1zmSx4cPoCgWyNcithTbci5vzRqUtjgBKbBwdwNMbWwS",
  "key21": "5D1Lz1pBbtddFAH1Xo9xDA3h3fBW7avGk6wbx4xFKJkTxfNLmJdpFL6aei6GLSqKqsJhgFwdYAhjLn7FYWB6JYR9",
  "key22": "4h8NcAN9wqCrcmwDhhSQmAF1vaxRDkMJjsxijTMhMqtp5sXKthhwGbjXf4m3PWaRTPwUAt1XKaBiogpqfmr4vHff",
  "key23": "uEwZ12nNWA34zMRPGektFagzdqNKJr8GrGcWeYx7r2HzXh9EVM46AvNyhbNk8K99Qz5N4X1cae5jk4rk6Z9wcSJ",
  "key24": "38RfF8YWtTWCs79tfzPwGvVk5xr9WqeXnSvyKuXmtWYRcEirnSvpgkD9KJcVJtRPvHVBXyByr24acSsSpr9DDZ6H",
  "key25": "4ENwg5Zepos2Akddo3Nu5DcUWzSrDnDAaGUzrXmSSWDNHBCETX4MMtvBcT7FikAyBo98APVpLssqUTepmgasQpEy",
  "key26": "5qY5Bpkxz5wXozqkWU2TtDHxZJRrYasqJMG5VA3ahWKoP2nvZxHUHNXqPGFcrNRK5dwL9eJt3F3iNfkFGrWbW7Qv",
  "key27": "2S56M3hk35addNG7Y5K3RmZ7DPnkCPvx2FmpEWrFJgRtrjoJ81FHZuGbWhAfGuYSYPX98W7uPYPFBHLSG4uTXVAx",
  "key28": "3duydBzC8iszZ8PbRTj8Aw6wsvPt6Z9ENKksFq9QhD2arszFXWxKvY1BGpTv4vdX3YY4HYpDXCNCcJdNdp4vEUJa"
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
