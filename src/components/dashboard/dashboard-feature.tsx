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
    "2GtYZgxq6m2JkCNBzjkJfL6pCZwmyaKVcyKYJSiXuhjp5yZ8xrjdhyU5pEVQ2c8s6U5LPQUKncf5Qa3WUsqFc1Pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfZC4oHQKx5UXGbzF2tXf5vvLn3NX96SD2jpWnz6qJSiaogVmynJNyMdYTW7oxLz4hG1eSY6az4PM8WPfN5EG4w",
  "key1": "2PRtmKMauQwcUgniaMK5hBRHx2bf1V7X6a8Z75peasMZSXNLrAaMLfHLTiTDSFREQ15qpKJhgumA8EC2Zc4DB3RT",
  "key2": "4DT6qNb1dfudQVbTfhVuTgkVv2KUFrHZk21onyjBQkz6iHJFqYF9nZFsQUdAtRoBDA7ZshnZm82TVnTFStBMGjKs",
  "key3": "52sbUt1kBZZK86yXKJoA9qJRFd47L8UeVZ56op6CzWnBZF1JjWd29ZhLPh4EYRZ1ihwrdj3b7dAybn1pAd7Smbh6",
  "key4": "41KD4kro2c8u4vshFDnT3ak38J5fUaF4cFrNArUXTfJgQXi2ahPzt1GiHS5sHpEgKb6ecbJ2VBYfD8kJQ9GyuQBY",
  "key5": "2evgZ9mfWPx5hXRVv5iJPiKnFLKfg7Q5WSypSsXv3yiRSomZ3U1PAgetMBr2i1Jonbhvwt9cZH3tjy7MJKdZ2g5d",
  "key6": "5VRSMvL9ivo9bSTytGRLcsJ3DXksSfdKHoveXy5s1hmaHjt6Drf2n7ZcAeGcgUFKXv3f5QZo1Yz2gmoYDZwvbXCi",
  "key7": "31v2NUq8HH2NYZLM4Ctog44aZtQthnb32ynQqCKXN3HM4oyYGNm4oE5maEKF6TQ4HjQsuZ8ffu2akPxYfnU2hFxs",
  "key8": "v6hJ3aQsC6nu1K1yVZx7hKSxHtX7gsCdiQEMvwDuwhsuFPEEh8xT4sMVsMix42hJPCGRsFyCLbuv4bEQW5nmTb6",
  "key9": "3cMJ6cMAW7J16EPee6T1F3WthhaP16TBpd7HNVD3KdQRj4wQVskNwN7LacuVxuVVFjd96jVDxpyMeNxCXX7VSuPB",
  "key10": "2KAFTtSnj91fCHTRNnKM91afP3RFLZ9aF1GwDgz5Er8w5XaLEAtbhGgkpRzrUiDVARThWczoGYWrdb3YXSq79L4z",
  "key11": "2dTLLWPGKMyPHZVNZZX1YTP8Coa4Qc2mwKZUUwxLRm1bPfH8GhJ9XQz8iABxyX6iNnCpkFsD6i18uHWrV8BFYu43",
  "key12": "4udATb6qu58NbPpqXVHnhaNXRosALSe56vGuzLczRw89jLYR98BMvMhjBUWho3giCP7SfhDN35N385oMa2b8to6K",
  "key13": "4vTmuKYAaffSMZAodsU6Ca654JVv4mpYBKWRT5eGzHLYdA3NJRkQCnLm4ZroZXu14gfLXC4CspEfkVGgqhRP7NtV",
  "key14": "1cNHiAaQmWnFdKvsVG2vQdqWfmWzV8bnw4P3tt3847m7nF5aGUvWipAZJciG1bjYviqreo3Z7jxHGw5ztC1i6Hz",
  "key15": "3Gp2nJmhNiuJHookPjo58vMvvh6QVPLfKu2EUvp1YpYhG7BUPoMLbgGJ6zE4QegCT63pNjnSCtaFhUMKEonw5ufr",
  "key16": "2fJXBSTZfPP7PgLAjtyCkYtEKyTGeDGU25gtXxpMhDyBmz27yKpTvKma1EtMNJzaCtY82h7LRneYUVqkEkCKbTYA",
  "key17": "umESRWyNrkqn6TX4qxSua562Jc653v8HrxJH95Z71FNoq36L5JAMKAAhgHEKUkJJfJc8T2NyHwDzhk3u5u5t9is",
  "key18": "4fPANYhPkdhcTxevysAC7Jhux1gVpapZPPHe7T4VMxxi1H1bcaREKBBaSePnPuEdJZZKApiVzg9vfxAT5X5QCL9y",
  "key19": "kBZ7HnshPDZqjmaVM78UfpFvy1yuS78Ed4ZGiB7fZxHKvYPSosXh5yr7EJYTLjybLMghNTTCGo3mZJ1JkAcmqsJ",
  "key20": "44LzV9YbzL7Pn8cdnTdy1mwd47E3DNzmSYG1QWkoCF5C2WUKfjtQ9q6gFhagivQ7NdgktgE2nM6ySWABg2vgVkvf",
  "key21": "4dM5HpsE4aYWT4ZFYSQb6Mzww4zZHSz5yFigbSAME16xfQ2ZohujtRDohraJmXNnaeuXkAp7okfCypzaXEeSZsWY",
  "key22": "3puwgkgKHV5pavBvXB32EVP6BkPyuf5UpZDCrDgX9741PFJqopeqkL9VfJ58mizQpwBVq9akkwWFAkRBuFxFTsQU",
  "key23": "27KtDX2Wa9NbrKu8x1PAF4LvCkP8ib4zTVAwKPq3VcAHGN6Yvntfh8QJAFdGmXE4VEo7hguEoydLKFrBZzmmk8RR",
  "key24": "5YemHQFAYHDUArHGF2e3Uq9yNKJDgkesUTSG6SjCGpFDrRbWvzN3tvyoN1L5tDq9voeuHYg79bY2kWATVF1KLn9p",
  "key25": "2AJufKddSMLsYTB68Lh8UiUFZxh7urq7CXQgPh7MgHovadXgaBahYGMwHQwfa7UB8UvMc29D5R3Zzs5D3EqYviKZ",
  "key26": "3dGyhRb8KTKhW7gqQFooHAUmVLHpVg14GirvgLdEmLdZWMJ2DTB7zFKvswvX7pedFfXYaXe4MGvNxHpSkDYMTe99",
  "key27": "46jrKbTwJdaTiC88f5SgzNw5KoJ88jsZVJv9cCEW84ProtCWaMiTJGvV7mJNptwJrUrG3eNMA7r2FPay53y89d9w"
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
