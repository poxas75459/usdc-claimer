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
    "DFK1hna7q4JDitxoiCNUULRqHktUNu45P8BFx1tM4sH5LpVTi63hiJxnkLYJHyEvUGuJDdsKBAMq1ozq2gQhs3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J2EeRg9m398rnAp8qvZv1qRQ1wPJLDjG9N3Guv2gPtTWce411jDGKNKTYessK5Wgo1avoekAmETPK4NYjSPnYhi",
  "key1": "5EUKqzs8BGpVPNedxN7PcfScTBQXjwX3PwKyYm6xbCgXnorpTSi9PDiDisA2ASJreKCUkR71dBoojZGTnufPyn1b",
  "key2": "dzZVim7xao5mgt5UrJngXU2qmC7gPnbjGetg9X6PgXM5e3acPKf1B4u8EwJfgrPREcjon6najCQjQbZ2gCv6s5v",
  "key3": "BGhVRCdQthPtAh4dCMvixnMyDTJXyFgvBkdFo38UAHtoQxuSfT9AbTgVuQbnpYRZFyGZxokq9kMsTdwHRoPW6HF",
  "key4": "4JD37gZPL3tjG2xM5rxQRDCLQqUMG3Fem6VhKsm8Z9dXmUAFwA7EFESYF4WHbqYykZqCdYvxh6HpahTCKbRH5nsy",
  "key5": "3oer5DXSb1qLnkuk8Z23vWMirNcNaHiXt5jZgkdk7WfhhCUCs4pJnikoKxbSJjaMpoWL1cugTZrhcHJ5SPdQUxQf",
  "key6": "4UGb3ULc7RCBvr2ovLYXokoZbkuFCoiQAQPyekhLYKcQi8DmoLYMU4WsVxNuALLXuPT3G3DmMTs34pnGzRqsYZxD",
  "key7": "3k8MA1cgaXdYm4sJmuLb3fdphajVtcoqvTgEC85ydbYGsXnNPNYKTkYHVZMT75kVXHtLKF5Mo1Sg65RNiXoM3fhd",
  "key8": "viQsdGRLgUXfewxv9zMYVwbHyJjVzXRdd4wNr5u5cdMEmMrWsVacfZLzyo5nH6z9E71nTBRm1easDwUqg6pgxaQ",
  "key9": "C5ipryHkiXsDjQmpVRf1ebgDYSrizCuRqeDv9cTBYZpowGmtLNeff5zhrmX7ZSeDyHMrd43398Sa4c7Kr51a7Tc",
  "key10": "5LpfXrzaT9dmBHkbiJi4i31QkBUa6vVCsLMHdWA5koRNVWdmsx5sC58HYVzFftSbwSZLiRgg7xthdhhe9n3GU4AJ",
  "key11": "2ysQoPzYYUsCm6pfRENCiku79kYTxrdJMsaUny467oS68B3Tz7qWxf99PrC4pTa1oXZ7vjvj145P2kpdAwfVucES",
  "key12": "5V4aiaPUQNCLd5joFiZLpJdtkS1xrNSJzVKUuhYxKFmHdBU5X2rui8ZVn4QSu74p3sRqgUYaQzGcTGFUgZobP1Yn",
  "key13": "3PnXT4g7nSvC78R3td12wjqhsA43VEX4zjhNGsvnbvRCUjgv2ubb8S9X61NY2xktkozVBXucGCeakFjReezBwqvA",
  "key14": "5wZhEQC7hSdUejpGrDBbppDwiRkno8Q4DNVditK3jdzS8xSN8HhM9fMmicrCaP2dmU7KT1eBi86nzFhrPfqzAtGz",
  "key15": "4QQAFUWWcidqAUzU7EzbtAiZBDM9QkzN4Q9yDoN39AkQG8z7Jj47wUcnhDGHbkzsrxYKHfkYAguCPy62sRU5xbQi",
  "key16": "4mWfBPdTDMs27oXWMZ8iSpbiM3MT6eTSGcwCYmQT1e5EpNnqXbYrwd28QkhTovTz8azXDvSRX3KMLC1982VvxrUY",
  "key17": "4rWSPNxZ3CZUzBYGjWRXaRoWi8d3qStbug3YfkwdUMGGtws4FjoogQSjVgS29qfTs6ewLDUuaStJJ62cfHozxfKX",
  "key18": "2hnLvcx1ZS5hXvNXeF72AUvyY3HM5fwKZT7dhgMZGPUK1Lu7M2AovBbaLoSxrBQQ47fsPhUaQxBL7xTP5npRrEE1",
  "key19": "Ln1oFuBqs5xAbPp9AAVbWcTy3ptEG7NWZAaHM4177euBVXqudjEaXtSewbLxdkDQFBdP2NTGRmXES4McvMGiv4q",
  "key20": "4DmKVWhiu8HDwmAA5AWuEAFRsUutfziWjGNj2AmcGW7wE3qEhuexxaDYNYgW29aYaQffKKJiktiKm568UjoNWoPa",
  "key21": "2jYPie1KoqcfQnYCsf18UvJvLVBwHMfCAHquBvJrtR5mjraZeEUUSSCQCaLabtGkN8UyhmCsyqxS4jTGrNwCXpav",
  "key22": "3v8ZDoeMsxiEUbNwofmQLq5V2eBuvLi1qbwkKvc1LRq4vPaPVmztkN9RTq1TmXXttSNGDSCV79eZ9zVoyVNu1Mm8",
  "key23": "7uqYaDKeLrXScGLiDccUmFurczMjENiF5nFxhBEGfG9uBu7Urj8sAKqvjRF2a1x8rMGVxLUNytdjGB44XKGihvB",
  "key24": "3E2tjyoDnyucNMyUoKeoGR6bfST2RyQEFY5B4G7AC125cMi3fHUWLajfXWVgMA38P4jHQTWQBkVHJ2Tm6G5g3xCy",
  "key25": "22xRbd5EpT6LXL9Sc3B7jmCyuWbnSuWhXBV2inxTXLV4UuXno9hi95ihJaZVvjUAXXUPcte2xD8YsuYrQCrV2XXG",
  "key26": "3iKmBvsivohQ84eEixWJTxoLoyFWJ5BxofPbYUZSjn9yeoUvgXJxMUNKEkyrAAsFWW6vxAGeZANpBv2azuoci7Mp",
  "key27": "5oBWFrS14E927BuPJxSg7rJKqGPfCuL9UoFdyYBfTQpYcuFLE3qQJo1ApB9UCSmBgyQX8PTWaySCNJd5yKPdWAeX",
  "key28": "2jHmB8utHkBEBiDsZarvxrSCuoGnUYKSwsoAynfM8KPW7jEQL8pi3TWzDTyPb14ngrWwoSghN4x1FQEBpRaRUPqm",
  "key29": "5FgV6LRKHWoJv12c7qvNf11eKY5GAmQxnBtoyFpv3kJvYbEgZKLPemsjHhs4xiuHfcbEqjpKz7R5ZkKoM1r8utNu",
  "key30": "5tAhQfEDJLnmj8Hc28rgDb6jU63mwdp5EFVVnVAXg2kaWbjxgFxVTKpQ6FWXzWGwombFuoHdB6emBCFNXdrVJDzR"
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
