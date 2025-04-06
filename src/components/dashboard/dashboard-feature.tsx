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
    "2aEPBTCzA6g83sW9cB32ZwF2p6qvuPYa5bjw7KyiuYP8ek3TnsBJMwbo4wjWHoRgqHsMyMgabfWAmWqnr2ge14kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gGPRVPk6Chx76nb8CkzdM9bqDYs9F9MKL75t3zmKDzenCkwPajN3cyDnmLpyZwtYmXsJ3NnEpAa7jnjRYR7P1ps",
  "key1": "36KzSejoELdCrSxMD1Y4hSfcnewJeGbCbCKq7GafLkeNLCwJAU3ST6H972HH9TQZL6LzRSByByBQsC1nk4CRBYrT",
  "key2": "4ssXu92KEL6Jwiy4hbYkFtBv3niRdgkde1MsGP1qvmGUDvwuxgHnpTTTaSbkfkyyew43rhwp4CxtpMaXfbbBbA2X",
  "key3": "8CMR1tDGBnLG2C3aMeqS58RobasaUJRK7LF4awWkQPdq9TSiGeakoQk7PGbJ8HwfyCYfWULdMf6EDk4r7PhHea1",
  "key4": "4RbQK8GxsVwTUpr4V8XqbtqwavSqs8E5cWSecCY3YnE9JMQAGGJq14Qmhn4Lb5eypmBMQpSbnH9cN6Ef99F3oKy",
  "key5": "L4Qxezf8jETsJQa8qbsxxA4WBpCngMUF19Zcc947F3i9tDZnqsFhBb4eZbS8T51L8S5YdMcVFUNu1LBCF4gfmqY",
  "key6": "3szKzLnAgaQ3QD2D58ZbtYPyCt7yyUbe2VnxKy5Xwt3n6Y6oSYiiNNqPH5EhEpUMvZ7Rnn8uRyFCB4Vh8EMSWLGG",
  "key7": "JW9wXdTa4CrCV6zRoQnqV1rCaYQGE8vMJysiZPaZTHPa1Tzu2RvTL57jdXaSqNGLwn5bXWVGy7RM1JAcuQUpmFZ",
  "key8": "4L2AB5qdJ7LNS3JbH3vYt9U4zPbG3yURQkFe3A5po6M2FjbwNLVLtmeFrLeRtQEY4mLFdZeFZsv37pJ8Qe98tMXj",
  "key9": "2KJ958Bx5QJfRsmBrYPy9h4KpxNF77kUvJitGE8RyijarcaPykQmj2x2MiveX3X9iuuPfZB62rvDT3aimFfPfkTG",
  "key10": "56QUyqKsqFSGiza4atJExibuKE8t7cQppYQSz6c3cd3ie2bvppDFPMApaYmibDkh9nrYeZArMSUGkTPbMsYX4mxv",
  "key11": "44hpQ83ziaJcu2UEMP3fiPYjKS9igUoQs8tcS47nZGuCBxvfgbfKEbu7FqUhYgrkq6e9qrPZtmeyE1ufPsSwBmtW",
  "key12": "21AVCYSmU5aVWc7vRpKCczbuWBLF535aeLrvFU2TGGYkU8GGpN78hQRaYYUx5tKSKCC3L1HCTJbmRiyQPgjJkCTd",
  "key13": "ckJzMMVNZFJKdjPQ21JAL6gt3qwTydPaszwTEQFhwr5Kio3Rj8e9gCFTdvwhSa7HX4oqRNDrf2VDB3CtkZTGL9x",
  "key14": "3aUzLBmkvAc8KXJXLHgq2MREoCpLkrFntkWM8GwRrJ9PSGdSwMHeJd9EQFk8JCkwAvrhr35T6cY3ZxTgU9PPygDP",
  "key15": "3J2arRsq6NFTEpcHEZxddcZJxuUMbodrvPyB2aBBwzYWBHeFvX3m5tssNmHFFLENNy4uFiTCEtXQTtCE5Fn8HTHX",
  "key16": "2z3N4BByFbtZs2yQSKpo761WrGFyPUWn8a9bmqovUbxQbPH9DZT4XPVY3ro7nRJtaLRdmJGRgc5F4UoowbaVsCSa",
  "key17": "PF1DQsbL7F6k3HuWef8vLRT6DH2oHAA7hBaPkJDWw2QHoLfGkneWEydo42BJv3MS2xqbK7jrshQVH7cFhzQTK9w",
  "key18": "5SW1hFTRFXCiuSWHXFVtrYT7ViHZUX65o9mASkzo96CjqwVB8a6kT5V7kmMqcaSMDh2QVDnHGbP7moAXwstkYycv",
  "key19": "4u9ZcmH9B1WE1vR66STSNKZ2aPKHNmqFjx7qqMDNRxnzJsfCRz3NVJrJHCLsKDKbr98aNysaXPqdTETaVpTWbro7",
  "key20": "5CBYHzN4DPNsh2cSqxjeEwGJxPhRHMZYwBmFb58xmqqpWognpKkhn61WMchGh4RR7atvVD1khr6fH6tqku8mE2kq",
  "key21": "qu6XN7N1zNQm2ML5CUV4X4wQq9QZqbSeiU3GCXZZe9RtidDkxi17dK4EBTTawFnvsNMV4Tmb6SCW2fGRxTcYEar",
  "key22": "4J34e3W7LaM9AxLnEbqdNM8scDjKqFhjUYUj9iq91W5QeJtR7vP6zsRFwkuhCXVw6Xfh9wu5tUPDSKwNCpbmZFWr",
  "key23": "5zaY843AVYJnqKYh8oeBGEamTdgBKdLi421kgNcBEvME9hv5vnpPhnBok7gsydKhi3FtyMWbQVdV1Jvf2BwvbCyE",
  "key24": "2VZPMZZHsvpKz1TcLwjXVNyvWhwq1yBLVpVopYvxFYGeqYn8RcF1JbNzaZihQrBDKoW3pZxyQrA4L32cQXJvwVbg",
  "key25": "5aT27AqSa8Hc2eNZ87EsRmozHrCQ6Bd9NmQXL4waDGFnEvzEyCTpQqAUpRAWQefv8HxavXjjT617STMrc9fR5tsA",
  "key26": "4HXTXAuh9AgNJnqBZQgT7hzbSaUvngvQsg9pKGyN2ZVfaHUTSzhxVq814Jd49rG4hcpmmQJHoxf4CZKUVQ3R6bpW",
  "key27": "5pBL72Y9TytuaeTMkpTR9KJfsZNC416yeMEcig7siNzpZrqTzRjtboxbR2ES7yYMP83vCDeMamB4ednis59Nq4fD",
  "key28": "26d3Eb5PgsPs5j6XWLKp7KPFgjsdn2HEXinWmxDmGWVTUxYsSrbe8SJjZ2sNG2tp5BvWXYU175bpFGr8rEPkH5yK",
  "key29": "36eYC1ozN8qwjxqPmbT8fD18wTC2PGTaE7ygPjawkyqrZFMnwvNkMZKfNnGgw1vKs5TrWPvQZko4V46gYkThCNkv",
  "key30": "45YJYa7eRgXyGGJEkfi73Hqs3zKXD2uNRvsZpFT4rHHx1h9NHJG4SBEe1hfns2ueNE4ZUApLtyts67h8nXs9VY61",
  "key31": "FNfRh9ewFNGvGZvA3xvXA3FCrDu27as9zxy8Hnt7AsCjrkvJgAt1uMmUM51gPGK4wz9CwXRDixKiS6BrVAmQ8rv",
  "key32": "5NSrpcToiakSc2W4dsyD3DXpjtMk8cXJMHiPdUDapgtP4pM3G2Ka3HP5UknmTszHLTeCLEMxy8e3QeCMAqAq9kUn",
  "key33": "4uJ8MMbRazjCcMojVPsvQxT35mZPXwSh8WwWhCNmMPbjsomrFYWxqBjwX49cZpgVYS7Bk2sJqQ1TsZM7tiUkpxrg",
  "key34": "3uLVDKovSZfZHbxya1T8mXrYfJy4sEvN8ycAJvu6eFpsVwZB2yBgxYmfnENz21JQphWNKms3xJCfHoGoXhKZgbrG",
  "key35": "2tBU2FUFcsMJpzXnNaqtmMttp2gQcLzQEiSogY7MBRsawSkEkpvrYYa3rEj3wSvChzakP2QuM4pXXqEJcfYMi8E1",
  "key36": "4G6qJg2Etc7kG4WCZnjHvohApnvTSMGRLJ8DA3Zvi8XgY8Bp8sLf39XSwxnDXuh5YmeCHtLKDG9VMtXJ1kXvGUBv",
  "key37": "Pi1CGvrWieGkcJ72XCL9oc7FNzAKPGFfPm5Mp6pPMRqFfLzZVEU11mrH6aWuM5Rc1bArc8HvUVn7XjZc9373gLH",
  "key38": "3z2j16HnUbFURpcWsQU2VLS9aFzekKzCKPR5HVYoDztJf4TXLJufWcmkziV9aN7iqm6EVRXL2sKerSSVukHn3nan",
  "key39": "5Gq2Qsi4Hh1ZhGp1pr3Ti9dKSo2q548ev6RFPxj4P6NV6VYKn1KfyESCHq28iTbr6e1sPgwnPrgLrwazPohGu7dN",
  "key40": "3WFJ714oe15rayUQQCyRXNa3to1SYnNZgcD3536bY8FHz6gWdM8RpDuE5mCjaszt1jXgJeSM6yypTCbuvMGyhPZC",
  "key41": "3JFVmNEKCJwCdtEBYiyiFmLhDpL1YgAwTDp5vSojoodsCbz4Y1nyArkySPYassXzJPtaKHvk5i4hgi2j4UwftRaq",
  "key42": "3dSmm3MEbdGC15At6B54dhUJX7HUaXtWAcLtTJ4Qoso4MhvKtZ1bPy5GTRbEHK69sRLGL6FUtUvewFCMVhhxen9d",
  "key43": "GgzRvBC94ruZcY5J1FryeipSVJxquDiRsfR7KwSgYyN48EUGyribK9XiDVv4XHpn5ZJnPuE6FtS61J1gzzRE9id"
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
