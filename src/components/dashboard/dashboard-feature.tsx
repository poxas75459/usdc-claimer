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
    "5ct4JRaTDY1daK9odMj3gF9Yw2mG91KVQmA9pn75BhJey3XvX27PGuTsiDtht27KHyTYHuVW5WtMdYCCTwChqLmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zq877HNrMqZTpbS76vRDdiiyGwVQ8fDQLscw416NnRppYiyTjpdbcy3qGk2KKYCAvaXPiKo86uXBsq6prtHa3mH",
  "key1": "LW9YtAPfZw52eZC9bt5ZvRvMUc6aJYWcJfePQS76mU95Vpaw4SB4TXLfrSQkY9fmdyhu6h5LCgUoXgSYh686DoN",
  "key2": "5wgnieZd4vUt6WsZCF8wSurwnPJ8EEAjpTxVnYkBUizVTXgb5Zt2GiZLAdKG2b6oGryEJKtudk8tjehjXztxV8AV",
  "key3": "3X5jzpLktZt15LMBebpw2xShmHJe5AuFW9mHKjrXUAym1Hcy17trvUgNsW1p8THVABaueDU3rFB6t3pKUpC3thyy",
  "key4": "3vtNRykuh8esmHfXStcr7d2mBx9XnNKUwFrAHyoG1QikALPVhYrZ2pKC2oGy4hkgHFANribFW3jDiWnLuQRVAN8K",
  "key5": "518vi7AQ4yRT4jH13Bx7Jw2HJA6ajq7Yag5hocRsEQo6JvyswBxbPN2p5D1Bs56P3JR3p28WrHLAKBaF7emaJ2Jz",
  "key6": "3KiCj2pHLaLCYTyhJQQVH3QSnfr1Joxdd55vzyUxtfp7yLVMQFCp4mNzBGMaHYbTs9KjGHMCFqX1aANXz4PwYtbn",
  "key7": "4bH1nxbhxYAsYdukmBe4kBqEMFBux3yZWTbeFbqmEwXPbfqoyxF9djkDY8MREzjTBPsinnpwMzFNU8hZMZq95aZt",
  "key8": "5r2ECo1dopm3tbX7JhDPfLvAc1Tb6AuPk6jsQUFxsvrEbg3AuHJfYgPNFHuFYct1d3NRpuoKMThKTE838tojHoZq",
  "key9": "2tTwdtsBqRei7TBVVozbnqbMD4ttGy6arKz5TAiMUjChP9ktpaYYbrAisPeCoSdQpby5jVvEW3UMC1ScFRDXN4tS",
  "key10": "36ei8rTkRBRD31fJUV5TKhLgwba1qp6Xrqtvoi4p7z57QpCGDnqNVWCs2CZPfdseQ81BZFY435oFBtKNayFfn9h4",
  "key11": "2wbvwocuQ7xMfeftzzyRPgGTHvTBXgNYWQ57a4G48thnuKsPuCQKWYfbEbZpTRmjFiPkTL3NpbUMaYSHSPDUJiGR",
  "key12": "4VHUur5jTpoRgs2j2XeRUpg4XgcRYpN68X9xNPUewGRVwge8UtUtfguNBuNaANFctw4tQtCG95SmaeqvhKB9a8LK",
  "key13": "61ayo2T6w97Mg64NAD4zMRYQCXA1Mx3sGY5yYK4uZhbdbAtLa2db5gbs67EmuBmUKqoFsADFGvEUUtGGFgeVRw6X",
  "key14": "2ZtiigXSMZfZbrX9qmteDz7CvA7jZFf7fHHGjH9yqbGd4F29ntwZBuDjCM1ZVeYmBgpD9xftuwtdeK2gtncUvLrD",
  "key15": "5zyGomYrLChkMmVv6ipQBds3UAkMtQcbEdd1AN1A3K4LbdYZFbwRkfYkjeArnaVhDddDcLwyTdH1xEu8dQALXuKm",
  "key16": "5PhrW46yJKjXB3jzsz5PDwzw69cfiWz4X9inTP5Nwi16PgCC8YakFy26tzfZC8AcTZHMr3JV44C98vvqsSWFJBYJ",
  "key17": "5pTJJrAhhxqsarT5oes4As6Y38AKidqicwCUTHa2v8h6Lwx1A82hjTLywocWJ559QZ4zCPEysV4qr7o5k14zwJkh",
  "key18": "3QNE78RFok7635RG9oqNkTNDDuXom2eFyS2WPnyW8rcvLUqCT4UcKDfoqTUBtmnYFxn9jSZPrbJ4T7LwMVG8catT",
  "key19": "huPWVVg1vpiQcno32zVzKG7ifE8u9TkW9EyJ2PLBmh2Lp8UbrQjcRKTpGzvbqvunbvx3RQnBc3Ebv1bEKVC3kEm",
  "key20": "3ACJWzFJaiaT9e66bLzExN4jCRXJ9ZMPhGFqMmg2S5AANPu4zwym5Vsn4nyXT9SLrfypNvxqyYJRT83yR6R8BEtq",
  "key21": "5eR4aUdLB9ogqrNPgkkxMCEFyb8Xj5XLe2iAZb6R1Vdrouyag5bWtMGY4GBc6bAxVc2ZsR5zuvvDQM3o4KSDofp",
  "key22": "2igX3s169sgVLj79nxN2Wp3JTeACMQpAnRao7bVDNHJvxG3qianPcDNuzA69fD5SuwkAC3UEgEwomHe8k8SNoqh8",
  "key23": "5ErxmSktHkkZToETZD44Qhy7fwv5PqY5JYGpkxWR5f3r85Fqpc6yuzMrQs5kWYaKq6uvUvaXk8pcHGYnZsDQrkzJ",
  "key24": "5zDgdyd7VwLv6eeSjVx8FrDA3dZ1HTR3rKRZcKgBHcUa1CzRRrXn7kqVF7LzWUohLaLB4SrQQaZSgXJmC6Z3HaFd",
  "key25": "26s9kPNR6EixHfM7QWm7DCgSY1PUbRZLt6vZVByp89xMRHyjgNULpEf5RbWbssj7m6Vw2fKwikE8W1Gm6Kdg5khQ",
  "key26": "5AdSUAVPqkQ5rnRt5Lpw55XTo1cRinZ8rW693yBdxSfc1SS2esA2vfPjMgXhGEC6ejsQRgCh6HiY4JCdgubVnRUK",
  "key27": "4xiEWQFd5WuFu41uQ5HE6Nzpm3qbiKa1mCMsQwaa8ZvTFHFAYABkBUBquGL2QxtmtwA4EjdzM4cBgNEmWr2zfe5Q",
  "key28": "3g97nsTbmxnE6fcij6qQGhNEn5cQETfjVWRvyBr13t1eHEmJKi5kSP974G9DJzuDNrBnDwFfWhKZpzFdfFLW5Srr",
  "key29": "5qbEB3f9YprgfHVyCsVKhd1qoxKbRsXxhY7Gshr8fpjnUbL8ivFLfjJpriVkXvaUsDM5vxPmCwK5DrhaKADDxZ2d",
  "key30": "YEyzmXAYWGLfoQeFLfwK8SaLBDruMX8j2jkCq33Re9P1ZAMmv5j17ZaaaP91eZgiAdfiRpofmXd7gfYnypKR4eR",
  "key31": "5Fj7gbwxebrgPMgG3Ph2dC3ucbCKNkJr9Lt7zG8Q9Gfyc6R1zbMQM3K3Au6PhsdPUqs6TkMY5t4b5ffiqKzgeqfq",
  "key32": "4SgYzNUrhNDfPjLsCRQL8XLqTStMXmHmXGDcZRiRKhybK5PEozU1qTH5B4whH5hany7sV9E7nZqDen84iBuyobuZ",
  "key33": "4D3QRRAidipCumezKGgbVfSBZYAD4De82ubxnuKZ7Q3g5TWvTXbtdpNsnd8ncFdGvk3GDS1A6JhmX2GjdqqJHodJ",
  "key34": "zRSLWFHuEHpY2SxftQWzLLbms8e9e7wqdtJgdMk71KTq5hQzGxfcDDaCPmMQ3dq1jNAxa5nkJE92QnBamgPv2yM",
  "key35": "5LUV9AnYnmxQYwifzhM51TrcsJ7UDZkm3bWh7DwvAMBEynwFAqmVwDZar4K4nefSvfDuD37qZS5Teav5fidQU1Tf",
  "key36": "X8yhq6j9pyAy3DL5dJqF44PSWT9tqRSxo7LmMk4owMFBQ8jMCxm4p9xGwyy6pqTfHdeUq9W6ZUQEeQs4YVp25zw",
  "key37": "4pEmxzuhUbRXgMeRq5Eh9EKowM3nrsbJ895eitFbXGLikvMGu7pezj9NV3t7fPK4a4irtxEEDhaM3kKuQKJAaAEs",
  "key38": "5sDgkr11HC3VSw2FkuU7ZUnMog4upAyMbAJxLMsHHGqbpGqkocfjAhprU34DJjDuxvssnr4cuJcgfKFzTZSMKvt9",
  "key39": "4wZHrUMCkNLrRuKMMv4mXHnCqUYCqyhTDGStNSRiswkHGsEgTSHySwFfNmZevpNK4vVG5mDLUoqrr9piWTJgKRZw",
  "key40": "zypcZFHPVSZwHdPeKaseHfjKcwjNs2WMUbobrVi7uyQXY2XDPTuwxj7avT9hrw6R1UQyETJ728Bk6265NyW8bcN",
  "key41": "5BzNgATEKZtee9yg96TRbmBWHpXCiPEeAHqjycn7CuaX6q2JSxmcfH3c61meeUstEQ2hTaaRdfjonDfUHaMX7Nq1",
  "key42": "5UP7R7YKdGTfWLWVq4tPEVM4uq6XDN96wjh8Pu2q26JrdH1deqaXxqcQa87Wcn1zAX3LJBa4zhuPyxTbhqEbE1Qq",
  "key43": "pjfJRxepDqBg5o85ZefHqV73PyR1fu5jb3526bkEoeLBvTGvRksZY7VBpE8yZEnBSuLLQgoE1hW9Hdu7hEWuEdG"
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
