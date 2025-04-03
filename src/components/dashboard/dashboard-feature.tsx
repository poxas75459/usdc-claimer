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
    "5sFoKKWFRz4FXAR9HSN96Z5yZnGbdjMBE8zaEEyDgtmubjmrFgihQybWs7ZnxM8RDa4YeRcmxcjN6RVeoR88tq3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3spmste9WQBhYGh7ByFreRnjP2vFzjmJwLup3g1RhAVKU8jcQZxvHEkYdxohRHaHjCc5RvNHfEjtmf5x4kWXFK3E",
  "key1": "5UaHjy5JUbFAkRCLwQeus3PEYWcvWFsmE81zpoJRrwpeCkWzdWt9Qy1Y6Foj6nXCgWZZGz6wNunDSQbkTok36R8q",
  "key2": "4xpV9apqM4Q4AFNCtR8UivmXq6dK17hNQh9xuUMNjLwn7cB2118wBqYFUUWpkK64okCr5nAcwzUwp2fb1oobChbB",
  "key3": "He3UbGzTaZfVvnfS7HYTSBLaeUDypfjZ5yW2mMAbqsmdKyBjsUFtLkphvvoo6GbA9i5PzRCxmw6cWmowSTPqcaz",
  "key4": "4LEmeCGD5QND2gEEWswPgemLJEEMGa98yYBrpMDXeMTTStGn8NbcL19PczQSPxAdA8wUt1f5M2eyK6UqaQSxMXSk",
  "key5": "2VFpWnu6b3GnqNQCreADwSjuiUdBBcUEduMoGdhFyxgZgmpAviQMPSsmkT1vydN5hR8iJN5g85EXFcVdscoyxs29",
  "key6": "39CHbqPcmNc2h9dNqLW9vpQBYZvVS7hTEQnDtvpughwaBaDhZRedvoyfEef93LA92k5gEhtPYz5CRKoeFQqa6Rvu",
  "key7": "2CodcYVZuAqEH9JwVmYz1LDx5P7rc2wWVkqd29hdysoKovX97SawypYhtauYQTiZg9edRhwNvbGt95rYLPEhCwvg",
  "key8": "3gDzP385kRKMiVaUQ5j2iMRdhrbbfzd7ft8dDme75ancMHgjDCH9GLKKPJ7WKpjvdyqFyDozgeH9pSATJVEVJhqk",
  "key9": "4oWLF69poQzahrbSkmcfGTyr9QYjcX4ryqRJMrQfHbsM2PziEauV1RteiAPavCcs7Up2YgaxgKKRJMuC5VW49Mnz",
  "key10": "2hDDqKcdzkvYz3ajQSCFnK3mVkVvhXRN6sYLBUeggzXqCY8B2L8ygeCjD3ZBHJ4SSpUvZv3dwJBd86JPtREQ2tmV",
  "key11": "59KW99yNThNSm4oPQms9Qk983Q4d2CdshLG4n8wQKNRhwLtLrb3FmVccxJ9rowdg2SBYmAR99UbTU8c5b6dS4F8G",
  "key12": "TNLbKxGUEAL84MZKNcq1XvuHBkMEsYcQxwwQGte4UzffwGJKUMPeNCcqLFxwssmsxvv8261TGSyhZTHbkTLYjMn",
  "key13": "5JCidmSUs6Uxd2QyaYutj8xFHMkAoeMD4wxaKPpFRm8Mtdd97VURdnasgpzAdpaBGopLjWfzmyzpuxd9krPfyd77",
  "key14": "5ohmuDaHCPeFhNkwJw2HDfEMy6AbeycJMZNvnuW3jiptZTCgZxhSe6YmQWea1Mca9CobjeDpMXX2o91rmsbmDYaa",
  "key15": "29WMrPaKa1RhkWMQsuRZDKCKmhcuzJSwzqeJoWirzCaTKZiqAXAaaiASYxfvYDzywNvMtQdwsSeo9GHvNw1iwRCT",
  "key16": "2zdEe2zi2ScUDaVHK5GHK3HXg3ziLDaJV1iURePGLT5fGDMZpUYfMCbvY2nWiWdw73zC93TpDqcwd99G4gBTV18w",
  "key17": "54qJVHfRTf5nf7cxqcDu333a1JKnSzKcN95yVQPo427MeieCu6gquhSdmx1YSVMzV7K2k9Y6HmCvasm2z4YmeQg9",
  "key18": "5JwWDVcm7x1xSVEtT1Si8ErBrgnfAUzrd4fd21XGcmipNxbBgJfuFNqCGgmHHZx3gC9BLQoC52DtSrEHPQWGszup",
  "key19": "38RL5HVRN2g7Fiju1EZrVDNBdaLz5F9SCwrxLmtNhMY2piKjezGc9bmng6fe1ztWgZMsYVZvWDpkhy22NtWjbm3X",
  "key20": "5Jnd561rQYemMftpqtoKzvuwGq7THh4L2QGvNTun9arLvuVUU476FgQhaxCoxCjminLFvEV13Qd2k58U9UMLR8be",
  "key21": "4CeSHeYHUrqMUZRd3ueBmzxmCQGAt5eA76FbD1UQA3R2HaqxdFTSrSeXNAMJ9Dq1NG5NAzGghxWMRxXvMEEf6AbQ",
  "key22": "5YXsWsVK7QqZMBXJdNfi4Ln9S5zhxz9ib35GBkYsPP9B4YJcpsqsi1g4PEi8drUvQw6FgKgiFiEenPzc7xSFL9aE",
  "key23": "3f6vU2YnuG3Q3q18cGBrn6WRpVwmvCNcmcP4UrLZVEUoVVpv6577UmuG15sm5wMW2GSa4EGbiRMWYvssFhMNkKRw",
  "key24": "2LjXDsgdFHbHGQk4u2mqz1cEV6JMwVAEevVvoRrQefPchiKs6X6MFo4ngLptxNscLBZCmQgkwbSpG2QJ196Pi2cQ",
  "key25": "6u1gwPGxVijtEptTGkN2CoWNrHyG1DiKJ1aLuHQ5zzB7do6B7iN8X93AU8ZGcWibVx26dz6LrUccyoEvrcVmBfo",
  "key26": "4i9GuPXfFwLp4SEsyMQF85uUbwk3bVyBwaeLAcoiij7BtH3Tg3FbL7Yd8sjFVAHaZrigHBG62tezoHLGGf1qM3ft",
  "key27": "4jsydCwr1WMqeKt5dVjWLEyHpERJQ3BrzwYTzVeUU8ParxVTPZixGEfRmvBNJwosUFW993owMRry7dgb6edYSJ4d",
  "key28": "2kZ8FucnSMnQm7x1yUhxzBBwn8bvU3qR2g3MyVBMxzUo2NcSM5gz8rMyciPrp8NHHXVUs7EuQkysA2HJsbmq4cha",
  "key29": "23AhV7H2RWuUK8etrnrZBJVfY2JJjgVatjNJA5CKmphQHLRQJSFhw8NsELvJBz7QmBLrq2h67zwPQBmSaGsEQG1P",
  "key30": "2BR21g5YWHHRWrw1WPfH7v4k3UPxHZ2ESYpNV3eLmV7pcswMzVhiCpm6hMGy18W49bUVwAG5fE9pNMRVz3qo1vyZ",
  "key31": "Xc9bZ1YGkW6Zqqk7y46g99KmCeGbMz4Xnwz5PNZ6cyFtNDb8qSTik1hEHd1JZUxdkViFi5AmdsY9AhRsVBsqiQ6",
  "key32": "5TSdt4NNPhaiz1GVw2oqM37uTxwn8xcTxt4K5ZCiqSDCv4ABKzgW4PUSGdGrjQmngza2DKfJuG6BW45NHiueVopU",
  "key33": "3evQmXoJPWqw2DuEY71uXwvueAvpJZfBTE24GDXND3XGdtRoBsgB5jS9JwdcNcRDGFMV1XXRM1LbXXVcLkNL26En",
  "key34": "2Qgt3V1XbPi8gwwGPZP8FYVp5ErxuA5BharTVCXxgywrqpgVABoiDvDbA4BryHTi7FxakJmdV65sMiv9X6PEnqA2"
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
