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
    "61rTtq9bvTmqbkxjHJaV64K5am71MEmFXue5RAGWPwg3gXcj1oKBTbVNNR5PaJrRKf7RPoVeJ7hTX9bfdxToFUiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mr9mAZV6Z4cCqbotzpw2ZZiRQiutm8MKyKkguFBMDhuLjQtGWTvqjgZycmkdRw53yEUntYhzUgaRX2jzc9i5Fv7",
  "key1": "39ZGAUWyUX95QVx631yi41JFC6fWAzjNr2JXnjG7uLHxnWfSSmebdGDJ3ij1SCe678u4iJHUcPDs32Z4QU7SEoe4",
  "key2": "51TGyv4hkPkGq7LodoWf8ySNHCBJJMbtz3x7etrrhFjHu5m1V1AdKHfjNtmC9CQ3KTX8Rn3igkS9DtFH2XYywXiE",
  "key3": "3AuX1xTAz9ij1oRr9f5y1hAU2dQ4MW1wHSS9rLwSh6j7vxyAEzrnAJ1WZgUh62dJJ4xwmcpRHZV6e1qi6mDTMQ44",
  "key4": "4vLLxdaqnjwoRtEjQL3MYZUeFgceMGZ7uFbJEnbNSD9kgNMmkFptusNYAJ3prUuAhvtKvTEgddb7jziwQ3Wu5d1W",
  "key5": "3y1FSG6FBTmcga4xoV1aCyRueUSsfqRBLjXzrApsf3pcEoJfpTbtv69EHn72E22dAHzEwkzWbCU9tSy8FyXwRy4i",
  "key6": "32uKFxrNo8UtftsVW3D2MJEsY3mAHMTEymCqsSzkw7VP3y5hZzAQaA6fLDBa52CY4Nk6u9FYqoMuSWcHxGAuGdCe",
  "key7": "24DpGJJ91Ne3iDvVS4uTVMjoV36BQy3yv1mkNMnQvmcoUPnKwrBkW4WRdaCrRdRU2QPRU8DgxZmB1NE3XUjXxC4F",
  "key8": "2FUvkKuDojidZRN7em2gawCydUvUJMVLG5wgivryS4bsbDyipJR2bNAhNGmMnaTJsfWbRoBSYU9EUx8nQWjQWs8v",
  "key9": "Dat3TVZzXosFBwE88hoFccxyUTco2GtJWXt66zxhNFbvVZdttmUGCLncLb6hbMCgV7b9HWox5zKJrBdrZNXhJVs",
  "key10": "41ok3uWhHVYVgYYpwBjxCMPWJVbCPESDpGG3kfJL3VD7CLU4xqh6SDHRQemfPSm2AS6jXpifjuknHdwjxUHPdFoW",
  "key11": "33sv17RmcSKGri4n7exv5XXUMrX4cAjisoRaeWL4C7KqM1eGcbMRe3RQMjobpek9n9KRCSfsHqPJ1LUPxarRSjhm",
  "key12": "5nQUR7sEeR5SCAaxCgJe3MgbohTZSZARCPz7Pbq5G9F27UupdrbJwk6z4pYPQ7LzrenNVh1n9Hi8MrabkQPhLhwj",
  "key13": "3dEM9q9NJrnsvtv7857R2BA7CWXtdDcAcFohjkzWHdWsHveXPFfbC1VRPmtg1R31hmRMCqW9RZXy1nMrc1JSJ8b5",
  "key14": "5mrei6JkaV7X6UUfPTjicxCiU1qzmf1DrmKxjzGMUZCGvh6B7KyiZxuDqu5euMJWw6aXKXMbxAB7d8XnDM8ghXgV",
  "key15": "3H8Cbm4yxbeth8PTKYxiEmX3FMyWYn1LdktKDjhiYfsV7LBvNxefm23X8f9PGYkDtiTf8Ud5PFNJRa7aeQcJb3u",
  "key16": "4rMJVeMjYXHrjFb6JKVYT8H2wX2H4QrE8WycGhBokwXLbp5dApFNmtahFig7doSuJs7BhuarjuzZvk7DJJWGnpKX",
  "key17": "2KJ35rzmGSaouKVzGXgy45WZQFcLg8Xxrttf63b4sFodKcb5p681PwjcAKi4T1r9MbxKuyRRtp6P7n7K1zFANx4X",
  "key18": "619XsD77R8vNbiKm4DUJDdYBhUQ1iBJbm7Q3DKesyVDvpYT8xFQJqNNfVyBEWNpxFGEfenn7QaLq2uy7KwpJTXvJ",
  "key19": "2hKb5nMdvTH2J2yjuRuTmgNgUBuhCGgZMDnSA38DdfjrctqUHKcR2iQJWxDsbw9ukB2F3CYP2c6cs1m2TCdhanyM",
  "key20": "5YpDAxGt1GgEMVobTx8KoWRvQ8PEGH5m4SPu3UHWo5FXThxogyd3oGLBxqTV21L3oAnoyZpa19q3jzUyuSWzSGJJ",
  "key21": "5RbQ8iQ6WK6nNMMas6jkscTddSzuPKiDdXq1E3NYG2LZHJ5VMEPxap1hYYr2jYmKyz9GaHyYfgvHNZkhuxewgDj9",
  "key22": "5YvHkweHSuBtmtwMWMZgV5QNYMSoWhn6M3Hapq3SjwxJwgm5bhjjrKZwmMYnuDYpwnwMya7dMY4261x9JLNhUgHb",
  "key23": "4Xv2oS9pohjR27KbuTVewb9XnQas8VyXTVGaxNWrYmnyb3K53suzM7yG3JNPEkMxFBkS1jBCSRiZJhEz7MtxNed",
  "key24": "3nynNM4puWDYWFtp5k3bs66WiuTTHDVEUdbYVu19rBeuJ59BBVd6dArPeuVYeV6z9fx5hjabPqmeYy3fmmZmRUnn",
  "key25": "2KMEV27v6nqFWHzGEFqntCb7Lh6dN18DEogZUAviARcft99Cb8Z25WHbMHDAR6HQAuaphwz8TBcyB3ALb2pvZHDm",
  "key26": "3vebejFYZYRuMi1w1Mip3jeARv2z1w1XLUaQqdtE86dX4BPL4zqXzB6aUSZkWASfysjXaHUenVv8VA6rrqggF76Q",
  "key27": "23wkffdQsnHKeUa8FzbMjSn5VKvNC5dRZe6FWD8Z8MCDVwzGcCXVXQ3jCZbneNXUgEbcDuqeHhyjrhBvMP7pD4to",
  "key28": "5719j7TSHgmN9PCEut15sLnpkLoRk82cZiuRjS6PHBwD4H1P1P7bCrsLcgJnCsqAA91yCCrMCJwgurcjyPHXz9Qu",
  "key29": "4kz7UAyzvjzVFnfZbVx9id94HYhjmPB8S2tid5BB9fprxSJgZFm7qRuXAgJ9FqX7C3FKgeRuJst3aJpDSxXr678",
  "key30": "3ufYE8GPq59mDSCm4MxGbBLYuB1GdbKXaprJ6tjp9hhaDNxNQA88CvwE2wFidcQdeYrahidmNh6o5Xk5Yj2VnVj3"
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
