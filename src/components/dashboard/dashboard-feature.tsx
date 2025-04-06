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
    "Eh5UpZTy8uA2UyggP7mesB9Vs4MhDr2NKyjXCvxfErxm1Dg69o17QjtfLvr4kE1oB6a3TQmzLxUJZW5qJRhCsAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhgEzdtNxmBts9hsdCnhDu3KEBQiqi1fiWCZt3unjdUk6LWMn1xCYjv1J3nDiFEaUFP1W9cAksx22kA5oAwU21M",
  "key1": "5Mc1syA4J65PzFwbchEAMZdtH8N6UUzNSLMhQBTaaGJEHQvSk9Awey9NxyDZPUeKxDPsqA5TySkM3r4KF1HG6ELt",
  "key2": "5q9QBpUovwN9HuFFTemT4ToQgz7WJrodBvgNjLRs16nHaPQGWuiJwLGBJCyQ5YyNaFTRgbVY8R4spJ3yFMeRHnHF",
  "key3": "66pz9fknM5XHJGnLejoTk8Gtoncqq9w1eBqW2WspNPj6ivUP6EfWZwveoXEVDvZzAkXdpUYvqrkSXYKZEhcb1rwF",
  "key4": "bi1BvUf92Ag6EjtzEu88TouZKodbz8TsQhNoEatJbzzeJyqtRWxLcVXrPVKhGHSiCtVvJvBwUHZ3GArgywq2C9D",
  "key5": "4vfWxofpkeLkd9eg58V7HTt4ur6DJyWG9yoNAQ3UuZRFLHm2ZHo2MJryDeEdR5BeDQxvNSctyZ4HadLU514Lerez",
  "key6": "5wvNjv1ccapMcRZYmNgxbVhMTpCT9apiaqUbz6fYi8myB1sGC64H2H7Mzs1rECt6XUxbfYDLkj1ynFUZt7jf3tVr",
  "key7": "2xVvs9RvTAYDbFsE8Eg9RekdajbFwe73SjiEW35Uw4srJLoAsiWFAKuWnmzt8psJu34LpeD66Fb99qxdmjkQkXuG",
  "key8": "GtXVcaPVn5w62txjnHEcqzXXrfCeDwV7P3AGekPeqe6Z55y5krHyA2YCDiBvENqizj2fTbwBDHsogZmJKEQU15a",
  "key9": "F83uFFGtU1PhWAJYDcii6gmq1QREAD6Djkt1Lm4MqqtyEHbg8tFhPz27iEGzRdf3MbWvfeKpX9M81yrnXnXZkRV",
  "key10": "5Z1yt39Zh51qtPYUWh2MAT8pVQt7rk7K5ZDZn546qB54uTPnVtHMBXMbSemyy73pDygP3PoRXnauxaLbLLAdQFWb",
  "key11": "4AsWjb1VcnkmkgtXR2HuzdkyKUu2vSL3sA8ZBVn3v12MeUafxf4rKpwEG1BuEPNh9S6WSErxHExNBDcfnEVts8e",
  "key12": "2wJoi8ToFNf6r7ChqhYJTwv2DR7iJdYQB4yoRNzdUp7dEwm1qw9nts1UZXbo5ziV4pcTN4DfymBfmRXc9v3ix1YL",
  "key13": "2zQ1QZ1MUJjbNAUp8uff9mULaywQaC3Wc9wFHCzToxATa21fbwc1Cz6P4Pi65fkoSxBzP24PJ8KaqkSpFoZMAGrV",
  "key14": "3s6NA2nNSp7gX9Zvt3FrSMwVrSnBdcRSrFEbzDgNh2SnRt1UhXSkqQXQuz4jYxCSJfzus5yVxKsjyhrhiJnFKPEp",
  "key15": "5jxAqFJyiLSNRdZc1TToJcZMPFAJdu8J1YNmrdTTpumvpbfxdQR7AAKkodhhaH9heLVi1vsZESm85ayJ1nodtbhL",
  "key16": "3NE28k5EXU8B8oTjx4mJxgQwsx2Lk78fDumbxFhqp1QCSspWHEGidYmui7Jqjo3oED89oSShB6M5Gz3QsbXU1Ae4",
  "key17": "5V3FxSvrAgQi15f6Z6Q19saQreYHC2P9Q12m9Bi6rQEEdW3WtHhbaTGNZUSH7CR8VuLRmVE7hFuT9j3pTFv8ztGA",
  "key18": "5dqRw5WQyUT8gih44qDA5xTkhxGUbqkb8P5uVK62TUaeeqz4EvgbpsH8MQLdhaVwdfKVTaFtXRoonRWjGVe7E7yq",
  "key19": "3oXLC2rmBTyHjaQENdtaPXknzjCZ5VYvCFojD5smMxKQLCKJyac1gwJ9NKqLSt8zQwUgpjadszSUeQ7MLWJ4Z4v6",
  "key20": "2RNaiVFLaWhMB2TcJK9Yz1fkoqs1xh8CFArrVK1DCUYT4nugKn1hdmJsQ64CQEDpgghxbDPKQocCjko34P8NLzXT",
  "key21": "3tqRfLppunLbLaLLXrMYfQRVM1zMmDWdR9XPfzWfxNDd6vfF4GBKWsWbDpnafxKXD6QZQFdG1FVgRE3S6gnDhVjp",
  "key22": "5X1YX25ZtE7D5FPBNxSL2vt2Hn7PQJwP2HxUruZGcjCvezWpECNwEkxvKqMBPAc9nY3ncpVZGvDbDMtMDLt9SnNw",
  "key23": "5HTrrYptNKP7cK5V7S3e6FjgQCpAbUTQJaPmjVC5CWP69mkHb8kSaKj2DctDQc4HdBfoT8Mb1Pai2shvjSd1ZxiV",
  "key24": "3GEN1FjGCtReHPeECvgqZrg4qzVW1si1ZkcmH6JUKnnTZ8nCuGTZLpKeUK8S4wVMY28d24QYwvuWiuiiZAw8gMHs",
  "key25": "3ND55hdXyffq46fnDRZxJwsq1mk4XJKohodA5N5BvkYZ3mjmd171iRU4sinGRYCqwmWNPm577ACnTrSNpX5FmaFu",
  "key26": "pYVsUcBZdMAWrKS7nXXbveGN6ninVtcQdB73jDQ82czbd9wQ5AuMmgvUMzgXAg3Rbr2UixEs5J6FcjgKLTV3LPW",
  "key27": "3gpjH5EMo7KBUCytTZ8RnCNbR3ve6EiJhyPB5B3ZbZ1eXFXu5vhz49orvyZqD692Qz2SkRwabrJ5exSqzxdzBkCN",
  "key28": "bseKEE1j2SWJrNwsbQ8aUpFZvaxuGJKyRnbg4sshAAGVBNMP4LR5HBCXWyA9xKb1tRvmDeZ6Quwhh2yK482irLi"
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
