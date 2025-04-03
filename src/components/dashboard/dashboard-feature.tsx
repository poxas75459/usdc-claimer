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
    "5dYZoXLYLkKNH2tb81FVPhpTLv4pk4m5uA1ELpcMA4RFGR8LYSePR6ykEooUJ672xthmXDjN4m2bq5AcF8ym6Suo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wiVQ1t8EGfQaXx1r7t1WpVhq7Hb8pN3L8S56PZDev2VNtsdhpAs9Xy9WTyDemjEHhMzrus5AaK3F6U8cJpQ7Zgs",
  "key1": "wBsK7TbdWUmdCpjFkBJJMctaJncwAgDQEf2cNs39D2s7e9f1Qf9RVphMaLTujP3hjiTHRwhu83uNAsVEMhYEhfk",
  "key2": "JxV48M4kD6iKRWQAhZEuo3F3eyJQVqvjZceGxQVi1iBtBiMLe6DFnUFQr2GYkMs1fFfFtpQ6Tz39khUGfhD9yCK",
  "key3": "3mPZJTBC6jMKKY6HdPD2wL7pfWPrdEcTN6jiCWxWS93iV2RQUJY3PNALRgDkV6Dypt16tDTHRDHDVX2WxcAfpevL",
  "key4": "2MeRadhNQekVykQmV5VH8BvYySiCw35eKKEoB38hb5BDmsBZqVVgbvSvjCfKobWtE5h9Ye6zuUuCkWjLT63LjKYA",
  "key5": "5yk8TMocP7TYsTzrkRqj4LkSMzTYcZ2PUdJnYW7keVaKucjdm3GMPFmT9tyPQ7SsapgTSnKcz5ivDpiwK72LGHKq",
  "key6": "3BVavRPKJUHC22YKruRPQPwf7MXucJhBuUXxLuCmxRD1Qi8144HkayiQRrd3XKZnBtNFFgNeFivmgzR7qEmZB1Cv",
  "key7": "eZNvVDBiEKhC8QpQenczNbQTq16FEcbaEaBmrDePzDRac3pALximB7rd1C7K1GTAgD5JtVXxNprCrth8cjtjVPz",
  "key8": "2NVbTRs3opNwX9BdCMyh5mhm2yC4DiGuWprxW4maqzx6U2dS1JsmbXTX5xR8WgeZB28qq5tSBc3YUiwZzgbEuUWL",
  "key9": "35W5z88qFXhL8WKhaG51wiHmmGNNthXdUeyFC1CHDPE66v4pBE4V72Fz9qMsoG6B2JjJTSfopDKV5jJ15WQdaLWL",
  "key10": "VXWn9vrARPCYhX1ueN5ywrKqJZ6QJBmzcNLMpx6Nonm1CjQHejJuSaixSqzEkdcU1kmxXfdxE8GeqZkyjBF6NPu",
  "key11": "3LAvvRJXM8XhM4C5SpLGBwUQvUG8QvePhRPD76iGhhmbDfPEiZ4swyFK4b7jLaDEofMgTcTiJp2URd1mNgZB7Ebq",
  "key12": "3YTi81FMcNvFezcxfFvikmBDYMi3sxEUzQc5XMsCwKUpHnWmcNPQtc3zGKdhTnGrKwVj6DXSkfsJQe5sqvhi4TB3",
  "key13": "5eaxYQFC1WbNedykezxKLwYyNT35yQt8cokm3ah1xpErFQwNhvvp3fh4TUh5TQpXFZAVEMj9UDD7gEeWtDgCtkNL",
  "key14": "RrE564NZZ2GeynJbwuvayxyZxpJmJGFwL3P7qLcvfVCJpEkpTEUejs49YvYi1jyJatnVCWoM4ZhcXfwiVjJxPaQ",
  "key15": "2Ej6oNLH5LMN19onY9QWPnVmDVJYhGpCR6sKy5n7knF8bY611qzYUxoH9ZtG7bdDtjn8oB27qHtnpb22bLbHPBLq",
  "key16": "26Ua3yBtzaoV3qYDpjcoY7d6NwJvdHurFQJzuJG4pS3MiHwoDKqikFvacPW2LZbCarVD4uyEDeCisWVJYHyVMJQX",
  "key17": "2NLAghDEVzEXkTCXCSjzWkQL3Du77tgSaSFy35SQDZjs9EdSg4mDguGDcPDj2b8dSK7HpHveHRA3zW7kxMLoijVk",
  "key18": "2JefZZLUDerYRkjqAK5bS2BciPk9UNcGZuryS4UaHN4Dbv6ybaaj8CHeZ452irfCnZadwMcNVuTJACKRP1oszocg",
  "key19": "4o5tctWm5NGWkXXVyiFwZjnD7r5kBpWNanBMTWArUiYwmD7xvsjqMzxw562xL5Rk2A4hsTHQKQzdh1pct8kVLh3S",
  "key20": "3de937GSbAmzqLxL7WbH8h97U7qSVp9YfDexiLexaGqFNoQnoNiAafjFR6QpNv6rzDimvhnLPsx3Gd6KaVDLAS2k",
  "key21": "6DQszYF9U1TQC8aXGZUgwiUvQCJEq8s1GkgCjAWx43vipkXb9Pwuzb85ySVJufjgho9cacp3jksK8ATSij5G5HX",
  "key22": "4oCR9HpVfrkLuAZ11CyEEuAwrFGhfQNJZ6P7nsvc2bHrALs3qUYJ2LAPqF9HmuLNYKE8iezKaXwXZMe8nGgsTCq",
  "key23": "3b4U5cHzK7BokykruSsBw92TkEKaBtA8uisCg4aTuy1k2Mph3FNsKaBgPdGB28AAfQRL11Wvx5QT8mCUvTADrBzV",
  "key24": "wqJ3WRBBueceYeW1rFUGtZn6fWmcuyb37qicKqSq6B7RRA8wvdnD9T9CuZW2pyc9z8pji3CEYY5BS9DBp8MFbFf"
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
