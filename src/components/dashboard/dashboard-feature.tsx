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
    "sutoSxgWw2f9t3KgAFsSeRZaagYGDqzpdwTkVb5WXJeYRmxVJosHRwv1JF62HpwUq11re7Tf86qAp2ack54SCtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GaRVAYdxrfg3AZ9F2UdbNpfUsp6acHpUdgeJ6hGw7XsRvc4eWXZU4GN1r5VXGTWihUsongXnhdqcd9fmAKauJfX",
  "key1": "34DQy7eEHbaTXukNhmhCjf4zdciTCRdhPt4an1XCQb16LUV99Gti25t2fUnd2fAtHoQ3u7QwMqWfMZ65o3xHV2mm",
  "key2": "5UbbBBEfgpjYz7odZu8MZH58CKHYwu2g9mYkZvbqtmE1sB1EHzxLZioEGqTM1MKp3sqaG5C4W3RnH6LNswimZ9Pg",
  "key3": "nHH46MCF3bnmjMcR6hoPqZ7oRYV7yYf1iZ55akEVWVZToNc6P5svd1A7EGCDWusYcsW2dVdvbhC3iG4ef9iHVrC",
  "key4": "2ZVsN25KSzyFNncZnHVhnMi2Y4fUQzH1oNsn7QfXavVYKthoeVuSC9KvVxULxPCEMkpiP9dyvZe2p4ULXD8sSXVD",
  "key5": "2bG6bbUv79hg4tuJyLuRY8pb9Du6TK7ikQQLyuwFD2YuYJ8PVFEpUJWojpfygFYWL2V3HWLmNuF9PvSVVhTcujuT",
  "key6": "52w57WYkRSi2Ua4gRice8ixHwdMNmDXYqujdYJpsF136Ri82oZdUqNXx9CJ9i8zmiURegg5Sm4kCZsWYrvsTDjDv",
  "key7": "27CQi8ogd5SLszubSVvooAtGfdv1cx2B16em9CFvVmpa67dUb98YYFx5NGcmDhuaaSQxaZm1dSrBcU75eRsVPxvi",
  "key8": "3xG5ebTnEdVxDfPCqvZqhkEikTieZspAbppJSQVK1uun4eL26yjBUVxxaavU5TxFa1SC3YKRBgNjYMipUNYFNzXN",
  "key9": "5J46LdCUijQ53uhAmXbKwWH13enCrU4o3NZamT5TDeqK8SoPPE5zAJfk1garGn1BAxciV1GAAnqRG2hYxewQsoqr",
  "key10": "3MhgrDaREjM299mTFKQobqpcdZtjEf1WoSboGcBTPG4Dn7jWrhJWAbykUNMTStJt7DWmjY9yXYPKudLRZaJswHP1",
  "key11": "5ZuPpsebWYK9oobnPzKfC93wDqSgKbFAif2oiwbsWurfm1uAMA4rSVBYkEpLF14a4czikxY1Gk92djDrvAWpfbbp",
  "key12": "A4a9hPpYRxwW81C5Kw4EZaUaafCVDqUcRhw3jLX8fujoFByT795F7dnRryabVAZkwQzcxLdhSHg3L5pWg4b8LYj",
  "key13": "4PJY15LroUzgSjysvhgPB5TYof2R7SG8hyG58uoRUQRZat2aEtwZgyCGQ2hUEg62Y9D7uSDDLbKviRJkHYhjbxJn",
  "key14": "3Qbr8QiNj6x2DiKWaYktZExHZbrpC6hrdfLfHHSGJCUhfN7EQgFydDUuJueBBTichX7NeTJsQJ9yL528tVkH5Bhh",
  "key15": "rmTpabnUs58jsWRceuQAgeJhfyiHQ9AqiVhHA8QmZeQKtTKkLQorbzJWdGV14ppk8AEZdR17jocXwpEhpC1TvTj",
  "key16": "53yWgQXvriFH5Nd8BebRsi6KiKL2GKMjSNFzGtNRBTKah4HmueiXLw3ofxLpBK5oqonHTreyB9QbgDLZQGaa3uud",
  "key17": "4T7WCEg1hLdLeuRw82Nt6RrMyHsZPnkTUkLQT3TADHYrNRzjMqS1GvVvVuWJJ3eW5uGrxAtjQw5nudHksdKpjdRJ",
  "key18": "4VLSKjN44YmY7dhfLFRn9cdKbCuzqoU8Twj2iA8hLkQwC37hGfNVMMbqHNTjVQn5DsenJg9TVD9iL97hNPFsBttu",
  "key19": "X8FHFDCDojHsEqnBcrbTg6CMpuRQsVHWpgMuMankVEh7wq6yuWN1ikSBbqe4PaEmwGp4YZSy8s6STHQHwgcC7RM",
  "key20": "45PAA7MT3kv69o8nkHVsqN51twMBmuMNKFpNkiPeSRYpwacoDTh3FQ9wMcnAet69F2PDNLYaeXARFrqHhQrS3G1e",
  "key21": "4xLm8Fpb3yrE475TGCuGTNLXk8nrRcK5fNawJvaVMErv7SLZtnPKUUBtzRw5pd2JjnmcbL9543UaKFgikUDxxoiB",
  "key22": "3L16CU5HV2CnuMJzgRHuxdu8HJfnQkUzw3byqUXPELcBi3VH3qPRNNnDfbJLp4zd8FCAPTUyGp12piaGDay3MhNG",
  "key23": "5SmRwjmXmv34A2gHK2G7apmXktaHBPJ2FBHukqhGGaRPYygqvXnyMDDP7tfFW6tL1R8e2A34aAAvUr6sadPDAXJT",
  "key24": "4MfQ8SwwkSf3423h8aD9NUs2zgaGWieYixoFKKt5tvgaeo54gcVmHutT9CsrgrcvFauidboJyPBQU9hFvhz7mKT2",
  "key25": "261LvowunyBuqDNNePQCfdr6repLWHQydTGJSsmtvu8zTZgakRxTCuy5fpDH2rS7QYcVr9s72xdnx3JRGCdpfmss",
  "key26": "2SARUyiYJApDzGoinPVpCmUSYtZ3SPNnDLfxNb1pzPhUiv1V3f3bYg53WJsjGyANQSL2sq5zanr45yoW2pdfafBb",
  "key27": "S9R2oTycVVNqjzLii4TLs9cqM3QsLHb9dgLQ89RGDG73gemqha7DuaVTr9dGh1KuhqZW8Bag8LcyyLWZV2mF2oV",
  "key28": "5cPv8xeDcvJ7rCzjxoohTY3Vhg7bEmb3Ve1kGkzznZT8NKZ8WwAFfUSRy2SPVeuBaKegVQDZVwhA8zhwhYf38EdN",
  "key29": "4BEVmmLF6CvxkwRkcoFGtiL6mJLCq4KgfgzNEk99EQuDqDr6gyBLCFbvFt7CaUfRPpbrDgF25HZBkQnkiqa9YSMn",
  "key30": "4rLECMWEyVs73mEvt71U464kgJ6NwWYrgDK9p2H7axe7KNSNHXHgupoiMjLm46hGZA8LE56w1nqmmDVyCEaTnS2E",
  "key31": "35kKL2maZHVYKtPkpq5N1kcKWFGUmsL42P1ePbdRkGGA1z44hfSV1VxtA2SnGpe6QsugZQZ2moh1CawfUaPPSWfr",
  "key32": "Ry89fRnpzX6u9ika4AfQZL5htKmBALKSwJJQFVaZ5QmDVLpqHZgTdpfEh7DjvoHnmDscWkGTUJPHMaRDqZRHCKT"
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
