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
    "DQ8G98dywjbbR2j5FRPhZ2aSvCZmhQjb5mrnY8BKxitM1QxPNDbtWx9rR4EXCVPps1crj3frd1jz8Vx2LKjcnow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CTKaD3qZaiRVnFyYcRKofSB8Z7fbLEuk28QT6sTZ6dxkYvQtdBb7fpusnPbjtaP3HkuXB84Kh9pLH9EaLm4xLX3",
  "key1": "4y5ES2L8cUdeLVAJRjZhVekaJKGFvnmFTFy69EK22DGUkRZtjNn69ojhWRVYWutsy5u6RajA9j4y2toi8o5pqR2C",
  "key2": "4fpdajrmPtk4c5AsTszaaEjavTuBLCvpcupGvEVefazNZ1oiPMoc74WtpbJjhJXMN7J5j39DmjjZKiXiFnDmDr2b",
  "key3": "3aua56vw5g4jjJK2Q6kBcYwFjFexuaF55hUYnjJDxjQUEsTRVs1EAhciCR6QWX53eLw1WAGnFD6FpBix4aS3fL4y",
  "key4": "R3GN6BLyrarHNqjDNX6iDbrx2cmZ5aNVeFnj17RR6cPKr4kCnREN21Ly6DsJSjPt9b3FM7SFamencQmjYpwmQ9F",
  "key5": "3sLBDdUgLDKyaKR7gtX97Ee11irrxxRib3T735Vwicp4LAE7zrENnRVfuBreRHKH7b9m3mRHqHbnb1UMZZA6tLWZ",
  "key6": "LEBcAVxarvrpNAM8wMf95guqzMK4jDWUt2XEPZpBUApwRT9PdoTvJU7Nf3bwXSutGzhtC9SHxQdscNa41oHvrbN",
  "key7": "56dJZiuK8Jcq3Mzvoq33VYiSpMyms6A6maGEU8YGDKyeBkLfq3Vc3T7UjqADoftPS46VSnvEzzk2wbxQsr5iVNba",
  "key8": "4GZQqEM5hkhYodQVUASpPXL1sMV7aCkirUamxN85SFeA7NEG1dyeUGPETcdyPsk3htrFi9488PbQUUE3q3ysQGQY",
  "key9": "3fqhyq1MRfn7i11qgK9VoNA8wztoMHrfXqgTWSziyKDtgmWqA97r9uFaCoanub24UChD2yxQS9Dx2ArBUWLgrv1p",
  "key10": "3js4iCSuf4yTCuypL5wFT7thWGpr2ioHSCX2sM4XoyQnBoF7B6AZ1ckJRcF7T9xdBf7PKYc2oeYAjRc4GzYUv7hU",
  "key11": "5BfTaxwQWYWtT2NttiY5m5aS9abheGMgkdde5XE3SFdEn1QtCH9uwQHSpFumBF5K4s49SBB48hqXLdKMjoz2KszD",
  "key12": "3RuUQj5KBkE5W76HcF82exZbJRGuQWiV6ZCQLmoqgcmpvCgAaX74JKh39493WXH4AqVjVmP7aUqt9qgGsHpnuJrb",
  "key13": "654yJFCSCHKNBwPrPySktopeYetwLKUvLxJbcKb6bP4oeojTXP9vA25uujdC4iyTfw7smeF944x5pYTdn99PGshM",
  "key14": "521QDcEMisDEstEKghs9PcWRB32bGwUEf4MgtyTeXXgcqLjemzHL3aoKqmkvG2shr61iYDBHYfyt7B3ZxAAVzJJR",
  "key15": "4bffhRit8ha4HbY6gcSygJZkt2P2W16W2pzGqUC6kzbHHMw4XaLEnZWiybk9JHKCJBLzqx83GbCtWBydtsL8B82b",
  "key16": "3eSpAcghvrAPNVRBEJZ2VhEZTNaKCnt7v7u9zWHcXioey5wXHL9VnqcXvMtbL2M5jq6Hi2823DFZ4yLTYxDJmNwu",
  "key17": "5YpjLsWRxZe2heBpbw9QT3PsiRbzYYT96hxfDuxJRBZrJ6ZuJdXE1QQjyaNirAiF8X7N8RD4SUHGyZx1QThtRrmV",
  "key18": "3qr16GAxMJfYisgsBW2nNc1wZVGYjwuHRMfEScf1S9ifiY1hssMtknW7wPaLG4a7FeuoSFQkRmVt1yFa72JUGgrE",
  "key19": "4GS9GSEtSm2j5cPHsBkUDei8PbW8315PG1ikfsi7f48n1BmFkGed4w6dDcsnLq44zgZu2au2KvAk7qwMmm4FzXCe",
  "key20": "2xcim7hCZKH2p6kmXD6gMsfF7qn4u4nFDEsqFV2faYfZzFZt1mGc4Yus6CHpjAF4VzcrrRRMK2g8zxDhGZ759YGs",
  "key21": "31T5vx1P9Wc9QpqHnUoRvzzpgJ6ztGR6zfbvLh1C87ThHzyqLmy91xSisDGx4nyTW5Z6k1233ZXomTc4KaHgoDmX",
  "key22": "cXwiVm1hECYSywG6QebmzwBv9RMcrUoKfpEztTY9CKnfJM1vQD9Tp4HWbASYfDJmyeihaTV1mXZasbhqm3qbv4g",
  "key23": "54Nd5ZehnC4GZnZ2peTCwuDHg9QS9821CWjVNDRTAB2axzAemn7HEQEM8tUgsEDiUCiUUqn36Mi7kfE2Jsf4KY3j",
  "key24": "2XoHjkrBevNDwws1uTCVgrjUDbPdBsUh87AaY9McWocQi1okE6u7y6c46P9XhgxohLoQ5Qmh7R8bYCiuPjrj28ms",
  "key25": "5JJX6CP3CXXEMoSjBZcxErR5joLhRaFCPjNPbJHskSgiAg5ajZ5pWdk9Ey9aoD5R87CPFvCmtHi9C7xmWj4VxRxE",
  "key26": "2rswzzAYhtnMzDwJwRUF1HoT53joM9cUeVFmKenwPRnYzPjCEwSUjRWiwPza7ncHziYwhRaEWt7SBnSoXrEyYWiw",
  "key27": "2Fni3vNLSuukoYEtvxF3XQtNMeKgBwWKZjkBne7B9cc9NKRXonbxoDJwsw3etBmiL1TGt3qUicUzcrWzEtP7eqgi",
  "key28": "3KX9HnDeybg2xWVaR9ve42GFC7vbTNV5rPnkBJZeP5NN1545M8xvexwJLGxeUXptLz3MegSbHUMczRM8AzHAec3a",
  "key29": "3ep8j4m6uEAPtrt2rZi1EnkoKia88FBHwiKtnf2R4wS517UEnb381MTdKztFz3EEELqomr32Maot75Wo4cYiLdTX",
  "key30": "4Wrqn1aHLJ3ttCpshzqHZBaAuCQR81B1BhzToTYPDyRLHLh1GSDwQtbiezhUT7wcKhTHmqdq8PuEf83TyW57AjyW",
  "key31": "464EVvGe82wvkqbpKJXc5BEj2vJtrkSP9Zkd7UBMHf8oqQEQ6oUiuGU1ox8Xr28KKLPvoEeCvcicn2jiXYrPyBAS",
  "key32": "47xrwzR1qeZBUSwJ1TkQbmcXnSDokpDaJ5wmU1KbKmy7cXg7eKjQMqs6SX3HWDpPBpYTY7ZrTm5bNBuXqYTziJ1G",
  "key33": "3SyTRk5N4f9Vz12peLM9KtNX7Rbj8cKCFeiGUKLCizLQwm5B5jVLRtD69XAMix31fQJHW45AnH4w89GXVziYk6XZ"
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
