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
    "5PTettqdHWc6AdCoftScKg7EzXfVADMhYCPuotg8MqFCC4owzsoAnyF9AwRhYaNfn4mgV1NbjQUUMucYMPWpAaqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21CcSL6Efq2DkXsv9Ykf5aPAo2qozMvT5vhVCwkAyc9oZGYVvCvwR3DucDM6mjbfccJ7NtDA42aHnnr5ijAffdtD",
  "key1": "cYBAJnf9xXFUgjKn84P3zsu7GiFGC6Ga4Wm2UtWygsFtCaFpeaN9N2e6MB3iMHFfUZcDQQcL4WukcWQ2YKAaXEt",
  "key2": "2C3QH57fKfd1ASq8M6GwSFoz9nWy37fnHGmUVmrqczmiA251RLnu58HKUmXXTPKKr6XSDgE792j1BQk4fLUiEY7r",
  "key3": "3PioxQw7PEf7fqAQPvNKgGESWr9qVFVs4QXnjJfUGJu4sNdYqQLnYAgEoKR8jvRJjtmoebShP4YdBtPnLzFwPbxp",
  "key4": "3LBxk9Kq3Pa766QZdPuZqMwHKBm8ANNwZVNaKV5JpTwj4MSCLiXzpNM8XWbxYdbfxcEzBpeNKRWFbAHiuwNNtAnG",
  "key5": "4szPkuz7YKnKaQydgfH3GWRxZwtbKMWhfPmrsq3xAqqtdtKYvMbyQqMpwtbQqjaNszFk5ENKwJWAKYr79BSkuzjX",
  "key6": "pkjYmksufHxuV1wD3m9N2J97mAntTxTGWpwHiXt4ArWgnHauK9zm1nCZfS3423YiRXqowCgJpJYHcoULwe37UYV",
  "key7": "kCNUkaLXUHUnhEq6xNSTTFaDMhCJya3aSVCaudy6TsKPf68mkkMoJyg2gkMtBmZrUu3sLFzcuoGczR81wgDsoKu",
  "key8": "4GkTtE9sktDFhva6cZEcgnL3uJFugg6RaS7ouLiMN78Za5ao3mCUYPpRssg4iLYPnKF3ehxCYp3eRpkWKATkkEMK",
  "key9": "BX1hCLeA5HtSzjgxKNSgKuZP8UU2e44wiHxcSYieCBGeFff9ouw1Cs18PYS61u1ngAc3TBDXVu56VdNrttoQzj1",
  "key10": "5LppCLvabrY145AS3FKYnHw1B4wWWc32B7ixwPqL1QipC6EVM4Yx54xHneQdBDmwYfZVLB6eiFrvPLssxA3CM7XG",
  "key11": "3BkvoV9QwKf1WQo4Ns7NtxaUsJvM26R3bcx4Rn458h3uNPJ3mRDrh94X3n4sj4hwpTco9hPLTdJ3xsxg74VcUcQn",
  "key12": "afLQyKoYbrrw4p4KxGG6Fh4qSNRjSwzzch9Waqf1Kp98m3RWVqqAmf87F6DqBzbktJMVixvJtKRrBgknwmc5z9d",
  "key13": "3QYSHgTmveDitB42oqT3HAptTM42D1VnmNEdSJpWAWiPSG7iarpzU8a73JunHcARzUGpoevwCmKjjZQUAMSDjGEV",
  "key14": "5qK2BzTnkW5e74xQn6AN8QnyUNwSvzwRtu9MW79GjzoCBtPf6M6QShqjN4u4rVXs8Ztz9qPQyCrSgoreJAbv9PA1",
  "key15": "4GpBpK9FSDebG4iLoEANtnZ3wvuLobfYakDojAWNg9NnRUWwJoyXJ9u22HJWcB8SK2SrKsymBp3h6TqmNU2cFTyG",
  "key16": "3eWDm6VLYG1fdh2XreCsJWXv74Kp64bmVHR6mwk1PaYGZRH2P7z1ykRnieyZ17QZ6EjWU1Rg1xSR9yicWCU47CW9",
  "key17": "2uaYLJzmX4N9TMBPFZnGx9ScHtn1BNkWj4EPp1uAYfdbpmv3hNzUQiYqCjqQu7jDPpfimaCSCGEB9nvgAKp9GH15",
  "key18": "4vrZokqz33ZCfEVvu7T72dEqfM2casGw61TWmX1jikH1EnxSYQp8LDXQaxKfbDRfjuYbAaQe9NSwQfxFNzzFRx2u",
  "key19": "xEEpfGhmj6DDaDd5AoYLReSaiHu1PGYTGehQzwB94EoPkQv4fUmPro7HUyn3CHn7Vec2U3F1GPcajZnn6uWdg4F",
  "key20": "2hDKB7gTvBCs1uRRZMFxRi32awFFYJn9DL4qyW3qoQV6aDgC6jxpVUL5gvztqPdwSHzqnc5GaJnmc2d73QbJoqxr",
  "key21": "5d2VpVUhQW7i2phXVRRiVUYh2VtpyeaRzTYfqiCPhyfjjNXXmV31NxzcbLvoxmYeNMLBfPgeBQbvW3qzHrZae96X",
  "key22": "5A7qxkxMdBBQcMchpmYXg5AGLwMpRfvJVSFUEJKZGG4LVRymqBFk5G39Rng9PpgyVyLahqicDG1evVvPCbZUZUsq",
  "key23": "zP3uQ4zLskJXeYPttF4JHvJwQzgeJda5WaJoNrgmATLScjuLPT2yzE2VD7BTkeuEh2hzMtBQA3TKJeeVy9pakv6",
  "key24": "5m832MyCMGrPHGshQ5qALDG2gA4eCyu8udeRHv14QpEhDx6uNQnx55J1EsmSJo5CRWYYHtWAYmsWccQLJ3JmK3c3",
  "key25": "2WwtMxmKuHJ7wu8thAStoXWL4axP99R3UkaWW1R1uMkPoaFqF9HyBce1vHQuJPqkMWK7cFjuhR1Mz66BNYM8vcUk",
  "key26": "96JJwwZuDyC2WbjGqbi5YL6unVfrU1asUXk2pZuTM1pEDgdyRJfSoFSk4CWmovbserAvKyxma775wdQRB2CjTbi",
  "key27": "5P1MpxXGfyMJWNpEq9oNpiDd86wmyU4kKC8XUed69gv6cCdMPWrNCvBcj9qw3PggJXPngQm2141j3gkyyJJnFDa8"
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
