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
    "4ksvu2Gq5imFCLfTGZJAYv5RSq7i1uV1iDqGiHTyV9heRxdADobhxXfkmL8WDFbfnvE4oYkHL9QafJxPCWAdzVRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32TZERBprqLnzL1XLVt2vAqrgiZenK1Y6C1d1786hx2GAnjRr4rRZmrqHdKMjpUSd9Yx34QYkwvaKj9EdLLgQCai",
  "key1": "4X4NkA2Uikw8eUZfe5xtQRcHwmYXtHSmd5rXQVAa7MR9X7T1obS63k3r8RvdvLG2KdYFL4QLtpsryT7a8z5T1yDq",
  "key2": "4g9HkceY9EPfXNMHVvqnw6ScZ6YxrvR4sZQxWxqgyYPqgbSn93rBDSG6nostoxvf36fSn17Ppj8k4zawrs6dURYj",
  "key3": "5NHDFksLWGSFduDS5q5C3iGmozQMBCok1N6j9ygasDkRXbHpD4Jz6PViFVMm8QaFJd3YY2oeULMAtZWF2XXXukdo",
  "key4": "3qpS1ywKB3E6j6gRbyeWRqFWr6gDtbjTXJCKpyMgWvKWKgmPf3BSHbLibqBGAS5GsU5PYkdh7ig4htk88ugxdGvM",
  "key5": "5kjb7sCnGDMDt1VTG7xrhiHUUuWeZM5jcSTbmMLSqR4NzeXhLLEi825FusoqNnkT9M4qMzqym7bSiCiKecfUT8Vd",
  "key6": "iHu84ahy9Wzc1wEAGRPNwkD2pE5yja8ziT5wNiytfk3mKCdsjmDg3BwZf4EvgiKxMArfGhjebMmMPzPAFUGA6fA",
  "key7": "97cWEgUE5V7kqYmmuwZ9fxnqzeSYhYSgy2pmiTQ49A9nva8cwK7bNBXxi5u2kJy2vWBF8zaycbeVpUWGYoZeEAG",
  "key8": "3skLJqRvVE2or1Meko9eLMjHX6nwBkW8dLZWAhyHEzJK5HLsAgkQpKgTjVYXoHnDSQEcSUoiZapnm8muxv1cjCQV",
  "key9": "5h4epdgXNj9sefMGi3dHTxjXPbfivv2nsG5G4LkwDg6xuoWP3JYpqnDrpQPKgAsaTQCNo3bj4Nb28jaawf2eCDZQ",
  "key10": "3e5gRhmephmE1wuguE5itc7usef9us5yhsHoDb9xQZxaYNLZ8g7jwPXqnSc7XpJ3QTtSjyLH5YnTqwL6DckkmM5J",
  "key11": "4BxSMCosVZ4PPzryjXE92gFKRB6uBQs2Y3Aq5MQ2EFzeHKJEWgfK7RqV1VSQXh91szMUtQ7GBfpGsTHjGVHW5viN",
  "key12": "4ssfmc768AZVsBYjCCaBw4Bm1VvVUGtiFAoF8NrHQATf88Egp4RpRJwGbxAmvZnahcXvRkVC4UxgCP4cbmLtzsde",
  "key13": "35PBgKP1QykmvMsQCaPmbgzDW5F5nNpy1Ze9eGafr4E8kLi8dMzcqvcVjBTcSEaiH7d6inZq1GPqbbukA1h7wZFt",
  "key14": "QhPehYH9LLHBZ66tLXqWQLmKXVcVL8VJi7LsxSG5XinVQfaVgwA9Lazab1m6b4nDaQi61suzurzfC18fJP14o44",
  "key15": "5AB1oh1aSe4Pn5KLuUfuiJPd8HXnsh4n9cpwJi5fkp9dFtKZXQDw7o9yECds2it5xAYypCqUGkNWRjvXGSMbMfhn",
  "key16": "HJuf9J5y6bDL28okLT62joccRrYqdttbfH4gfpTG3VAN5uENr81keJ9MtbeYfoBa6T1oz5NS9rx8MwrPyKLhFQj",
  "key17": "4XtXAuM29G59NzucjYweMYX96Wfare3EmmwzyMdQPHBvZ7GnHg5WPzgaaqEFj6j4WeCtb9q6pNaxPSs8RskCxN32",
  "key18": "3qYJgrVb8gGjLmzGYxysX5KT4Ly7YQzALiSSqpJr7EgqN66qQmQpF2FCok9rtyPZ8eWfDRvHzHdSXFjX8JyhnaPP",
  "key19": "3L2K1RjSMBkgMsX6qma6XC3ReC1cAKTsWpwv6ZQFkpoZ691LW8LoiRM9Yop9sn6MjckqFppKMRB9AkxjmHceqYTS",
  "key20": "5E9rKPqVJveZVc5h3A3trLNg5XyhA5nr58nWgyTCxLSXbUVF5ksZmhQBjEcvCxXVCNHymeFsVMfgHrcAvLVe4ji2",
  "key21": "21o5jMj7L7FVt8r5AXWFXArSqmJrsuVuw7zcRV3EtzUK47iL9pcVUraU7DKZGbA4XMNvLiy3vhRkZfa12s82afB5",
  "key22": "4otWg9ckt6ftoPgrUADxxDCPDhVAWdLZAqRz8iyz8ertVPJtwvvcnTf9BWqSeuy78mu8be1aVReCEFkC3r3cKaRg",
  "key23": "3SoeLtdGT9d14Q35QwACddSLt91Bn4youqdkWe7tYwSUjPfuhgqwMnNhRNeg2hVkBCPERakC13GfCfP7yZKm7byj",
  "key24": "2z18v53WgnwK7fVohQPqCLfDhcCRb8kr1P4TycVCQ2g2k168zFnd1TCCTRekeZs7iwPFmMXnDCidnDwkMKsxnZtE",
  "key25": "3QkytnKpj3FrEuqGfbmX6qq4zy3Nm8npyWoje8r6H8CfkkSMhr1hZt5rXwkKvCSWTWdhRuRmiAuCDcSowCYc21Yy",
  "key26": "21zVtkQ284ets16a1zKVsUMWvFyePL5GVLZNjhFZH8uzMfHd727ZEsQrH67fdQ1TaW9QLHJZBneDm1jZSVbJWUTt"
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
