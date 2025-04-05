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
    "5uysMSJQEzssPpaVtENS11hF4Wcd419Rms5K2GfeHUWXufjg3sfj5pVGGnZ5e5qmfKHVzgNMXBNC9gc9Wm5DSVPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UGpTwsLcVdVoYYmrGi3mNosGV9ePd7dWtuJGa13mpaoD2QsL8PQb7q2VZ7UhmGv8NUghqFBFd1nCbiTpLi46FZy",
  "key1": "5wCCRdbrBAXLemCrcsuxR7WPmA8PdsCBR1gpAHCnWkeZEvjZPVjqdg2k33A7s1L3mYtURJVwapneLp912k8A1duM",
  "key2": "2Apv4sNbYtk2Wdar5XtosTCEF3AatKAs89ss1ftSvjtAHeM6rnQ8zECuiG96H5WHNrvJDWaxJq1X8PFSV9NrEjW3",
  "key3": "3hPHguFtLFgyiXvN5GYp8WthCVccKEvW5qBWcAJgY8YQorx6gDkwFeBC9Cs4yArneNn2urmp8KiekrExmMVx7HKb",
  "key4": "43DMENQHMGbtzjeBVZhB9Q31mN97RBRfV4BNpj9P6oC4kHRNJwarMp6hCQZT3eNKWe3HWa5TcThqQV9kSJtvMaFu",
  "key5": "58FUsLFDdxCTHbXYLxXuLaXr4ctwE9V5rMQE4zTC6AUhfwUaRjJkUUYFy2Upi59wPj9h7XVgAHjPbKxHqivoTski",
  "key6": "rE1dWJXm4q5APa92qaktxTK66vNR6DR4zc2SPMrmqJKcpMZbkcHdDZXT1BoXvXBnWyZwXboVqUvuhQxeA49Pnyy",
  "key7": "1amNWt7w25Qew4ckNChk8V6DFkUSZe3UForBQ1f396Dq5bMZwtk8CTCZYddiKoXUqmUTVE11m6VjEpJjFZs7xA4",
  "key8": "2DfbsQad2ceCAmgtjeoRwESaF1QFHJT8TtwahrM9jkhY17ss1mnJ6yHgiRLz81rRVVh7uBptRX54w3boYQsZW29S",
  "key9": "oXomwSNzKxVKNsxbTqYsNCmrvQkVLUXJPJvyuYNo5KEVcw1WD771nmhceLHVMbHN4Te8Ch8NrschcS6NLMYpQB5",
  "key10": "1PzTTEiLv9vJTjAUmpXidmitNtDngapZd1dZrRcJ8WaqMw52rqqLTpSZFoXnEsJQ9bfBW51S9kAafycxNQmpaFZ",
  "key11": "37vmRgF3MdBGgk6qTx68Jhjxx9Sjyzu2BqfnxPLZCuE4wenaKY5gDbVpCojy8rW5bJnuXiVMLgvTk6coQ3SziqkJ",
  "key12": "2xS7R7ddXUtvNM8mb16SSbqMc7j5FFZ35LPdmuhL3TsDJErFm2V7ZEeFgQBnwVRJdH8UBU5q6g2R8eJxGxpRVteT",
  "key13": "2sy2p6MNsrxTULMQ92bx1ZuyLf34fUQ8h4vKfxcHeN5E1TFE2YFKK1fUdNDQDeLQ8a1TcZiZcqSZ1zgcwnrdajnW",
  "key14": "3CXYWJtbp8Rq2ev9zN1ToMZxWon51AXsMrFitRjoLdiUyJNRjJTuLNpX9pXQRMAca9TNZzenj2bU7VinavtVw3hU",
  "key15": "2MoeXoDa4fei4JnRt3LSZacqz2E2unXbypkUXie3cMQWbXh9j7tBDKRhsBaSsVhVK7y3qezUkseFecpfBpYRB3c4",
  "key16": "n3e6RnY8SuGkz7cEeEGdxMNjnvAnfiixKuKTzxn7ACy5HAHFsNuGNHYfZ917xfWa3UHBwKeR3tNTFNLNgSGigJY",
  "key17": "2g28nrBh6XXrojTqqHwZ2R9KfPyXADSAyURU6VRRCfV2ejmts7VrvyS1eGKFLhVmy88SjoBrcHsJGkv1LSof2G7N",
  "key18": "4yfH24cMHEJkjy8N7EXKECWkFM5t6ADDaQtPiy4H23SznVbcrT1b7jok81D4HiCvNmG8CLrDpv7aPaotMsyzXK7h",
  "key19": "2LqNM5dVFKqJLLbZPUqRLqNq4y3sb2FGeyJccyh8rC4h8rLMHEFvZN1neq4PfEC1Qz11Zq7kvFAU9kkG2Q6uyQBX",
  "key20": "4g6z7m1Jeeyc1goRpedusEhgrbzBqnXh78KAXZawsQQqHrsWEVmeLqs2ASkA2Qozq2driuj2PstZajRFvxMNtUDR",
  "key21": "3kzWDvrc7P6kz5hTd5h5tU89XH2k68Lp7Tc64NwEehunLNfcCuD5N29DSCaPMR4vYMSchK7Jcn8YXgwZ8pJ3mHbg",
  "key22": "3QDKYdS4Rp7CNNMqRFBZQE1qQfaSj6At6XrDhgn8doetKegWX68C9h9KdZyssdZrm3ALJsxreACXYV2hGzngZWbx",
  "key23": "3W5WxE7wXNikUh3em8Az1MGcmp4sii1jTF1peBS6qc6YCwgU5NiPCexBU459cCuW4LTam9oSEuhkkH3TTDChwwwH",
  "key24": "2rn6oTF6fQBUQshHGfN3MBpBixbXD9TgFfX2Kt76Avz66UmCrtKBVcNkzZDX2SHTaME8wZsuHCYJRNbACUFmxCtW",
  "key25": "5rG8k4TAmBUjzyTjUCYUVpFpaUof9eBbbtSiL5YbyTgmhHADh6ZgnWH2wBs9oV1s1QHtqbcT299irryNJVPDL9D2",
  "key26": "3BeDz7HUXfxxVyPGyY5pyHqvTBQ1mPXsCRFq3o8SXGBx37xZcboH9MJCZENj7ER7waqe3tjnhQBjsuL7X8CAynjU",
  "key27": "3ELo26kokYD4arbSL3gQMxaxY3Amy4u5QHYYmQRynCSfHZ8HTKN7RNRfdMCica8KVSwkB5heuudNEa5fPL2nRjAL",
  "key28": "43VY9RfEmb4kv9xJnQcLX653v7jKYBduaNb2VZGaMvRqAJcnavahPW9tB46Q4yHHspzLbhq3yXkW2CHVDUTns67T",
  "key29": "4yY4ZTm21q4RmWTFY4k7fWMbEmprkqzoCD4pfLEE71nNnTLJ6UHcaab7oqp7YqrRBriitAksKaZUoxT7iXL5qfdB",
  "key30": "4S3q62d1pkEU4TtDjWMwP6CZPyVG97pswsWgwFJDW4arTtE78q8TtjUN7W4zzvu7ccneCvhi38RQkY5eASHznSYZ",
  "key31": "2aVWfqpFuwTdh7Mv4fsLiTYvxVomtHPSkyu8k7jsUA5h4NPioMupLrJ7JAceNfHg2QQFeVKVMy3XsRkLp8ajkDUa",
  "key32": "35qT4evr6N1zAgQeXZrokoi24mze7ByfaqTCzCMLtnPp36vMP28UJ3PWc4HKy9J5jcTA1sV3d7ZAo6Vh6Dg4n6TG",
  "key33": "2Zoei5eBZGTJQQw9fwuRGCJ6skbofeGpxydcC3eGNcYxbi4bi1Y3FoDsgNLPov6WG6ZGjnvJm4Kx4BeDySBW6SxC",
  "key34": "4ApaEGK7Yj11APBEkxpaK123tbeApWNTQjFnXgpTTM6QsA5VFwDU8dubsxS6y5h1io9GqScMhLuPwb57zwqCF69y",
  "key35": "rkj53g6vrw6eJUFhm4UYqXiM8W6nm6woPSADzDeeysXzCo4sriSAgkXKdWvcnCLztgN2y1XxuwD4Gmzi18SXp6u",
  "key36": "dcSg2aadLLhKUZ2CVmxGGfpc8Rw6itnATxBbskoz1gbBT84hKVmNZPHikRmNCMBoFuSpwDMqwZ8UGVEK2EkMmMT",
  "key37": "TYcEE26o23RnF1HaVAiMG4iWbhgXNzHmY198ZbppGjdKHTjekbSFDGvHW1F2gmN7btLaERinhEGWGVkxmHEc52b",
  "key38": "4KUprSB7SN6848ipmXazBsb8Q4UoZ3dg1oEkYg7amCYH6NwwfFy8Jr7dgi7w3LV5yScZgK5v4XFm9t46oyHPUX7h",
  "key39": "4xrvbn9Bwk3f3qaQAH29z686mQnwoVC7hbFcUwq9RSSGLMidcmRLRUEz2wBipushezsgq3Ka62EswHxAiZ53JmbB",
  "key40": "4pZYTr6RdB7zuTkuLzrT1vLcpCasjQkC1EcoTR1muz1QDxzu8poEL8bQSna4AgF1mPiPKX8CYNUgwfRPWmiUAtAV",
  "key41": "2Q41fzJmWoNk754PcSuYWFRpmbixstvSuMd2dEDLDqtyehPakRzJrWkMcfX3MLNHzj7E3Ju96ZF4YLzQfs2dcnRw",
  "key42": "5mn7iv1ADpBN8pSHFhXkph6VZJvg1MhCoefHX7T3upUDQXHNv1DWYiqUR9GuZRsou4zwv74d8oY8YyiZ2c9DVALz",
  "key43": "37XVr9C1dLDBysZU4E1cHcXtcocHYJyofE7pXP92NUGt3ZtA9EX4DYspHbe3NyTonpyJvbcz2hyYrEF9tS6dFGVv",
  "key44": "3JWaX4eCVd1j8TrHcb1k8VHFUMA6GM7rM2edghftXbzisjFEkSdzJznfLjmAxnAfmH2u7vn5p1ShpgnjyGe5vuPv",
  "key45": "58nJnK2AH7cCmMi91nLubRgmqrG95VRMFcSq3ab5MmxT7qRcRdrdQAkaSgKpyCj2gCkw8WN6C4wsMfRsJ1kHNgLF",
  "key46": "3tG811T5oe5WSoqhrSmEUc3ioTBwMvRXQfNFhooW7JH2KQPKBX25XRZd3QYFXyE5snFZdpeAQJhCpyVQ4UsC65J6",
  "key47": "3aLWqk27FVYurAGYdKsD2WuxXpdX9KCyaUnLDzuitrctAmS3Ya3FuK2wvNToHzSSYczynkaLJkrCEgS2KcnZ4Mx3",
  "key48": "47RBEE7Y9miToBJYPqKMyjHRooufkGyZJQim15rvgVVTX62zuPnfh78SjudjjtpPANxKCNp3WMrHDEM9JB9P8nau"
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
