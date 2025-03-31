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
    "4rsYrx4KW4eafUEVMYSqNACvx5erfKqYYJyWHzf95vKQffs6cUmVTjEopynNv3pL7FKHsd9qGYnvvumCNdFaBrjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3boGYPumt5ZuGc6GxgPPRNMB3FPEKhY51MJZoCgN23CHxWmwZCgAQdxDFVxLBwkam1JE119LZW8gAtQYkJyYsA93",
  "key1": "51M3QYUjGExHKFPSU2MB9UfxFQbygAYT5949DbdnoDepkwkxN9ZTkVWFRcb6Xq8tP4unbFFouZoZKdCE5KFEyG8e",
  "key2": "21EskDw7UYbAijiwB3dPZ9KsYM5bHw7AY4XKD9icjY5yqS6j2SkX52jk7U9vyRxKRkEJqxCumiHA6nPhYJzcuC9T",
  "key3": "5S6NHBqGyGShyunGCSuH7kPDY84YmkaLjuqTadP75hqdnqpM12sPMCxsZbA3YnQf67QTmkBRdJFAGzb3VztpPY8g",
  "key4": "F4M9xKzcorEqTnTAqsenDxkNZVfhqbA6fBiHKEopD2ZH6BEBbwanR7HPs3GEthszR7GzJR5Bz1kmBZ99TMysXsZ",
  "key5": "3fSYHVP4P7b8fBoy2PZV2tsiH4BMjUykh8f5jyyxZESRdEsAAR9qfAZDLF5d4S2Y8kJPdxUaTns9RJfmHEPqnm5A",
  "key6": "4mAaoZhr2L3kYz4S17sYkoWGWCKLBz9XmQZkNfaVf2d7m2Xf7qNViZ4VdfBdYEfb6pZR6wHaCUF1ZMeJa7ohe4fs",
  "key7": "5VxupaEkXH6cbsaEmzGURqKMt8F1zonFC5ssqzLgbNqgYtP22NN6StmQz3gsqwsVpbGzA4g55shNWP2pZTh9GSo6",
  "key8": "Fn9cGKf1vohd1TJvggc9RirsBBLnuPmfE6GrePYezkhUM48us1xYc8QxKS4Pnftf9NTkUxJvw64XphPmaG1BHVR",
  "key9": "678ekM1w1nm5A7duLZvDuxKWwT8Vc9bpQALT9jEWGyP7cdRq3JF1rQ78yeszyS4LazeMasHLjWQNd6mTRS5pSHBQ",
  "key10": "3g1MKGdW4paMUDtBKq96trQpNe98Z6fwTqewfe3fvon8zfCDYrhLzYvxGGzuAQHv8C1CxVuXxpZbf2VkJb7V3Fmz",
  "key11": "3trxpb6s5G3Vhg9ZrZMdJFao4FVTqS5uJXDZKwVQjEH5yP62GfCM9SepiL1oFDToDKPZZhBcbtzSWLnYds85wAMo",
  "key12": "4hXJtrjiUCpzhEeiShyZkVHF7KXJ4mRVfASYSkY87zVGAgc7iRZ7AuXDXykQHkbgoPrVcDkmyuEYnh9w5E7Aj1yh",
  "key13": "2Z67aW2sgQZJdzgd9ZRKbNiQYrbEqwFj9Zt4QJWJh36ZQeYHyb9eCf9qokFo9y7w47n7o3JAtqrJ6X1VTFyECxxS",
  "key14": "4PbLXmbiy2pA9RRuFTZRF91eDCKE7zmqX9QrM51dUrmQwHxKi4vYhEuoQJ64ZzbUYG1N18hpRcPP2o1Rcw1ZprAj",
  "key15": "2AKDDm32Eqpqph6oyRPoyTvbW1Ea9o473TNsvUMn7dmYKc96XwVDZT9Fzi1p4quagxp15qrtNGyRZYEuzXsFZ9F",
  "key16": "4uj5pFc5zZbgV8Hph28fBhh1JCAepXenAhCD1xZZrWVg5zpegAZbYvMgh3YjgMtZmCRFpWv9sHytE8fhMhHksptx",
  "key17": "2N74AWx1pKpCofxXm7UcK8aB419cPs1ExCBRUN58BxH3yXKvdfR6NsDQ7um7MYXbC5PfU1br1862XUcALERCXFUe",
  "key18": "3UgfJDNb1Srzzqx48sLrsGsb4qikdEnDY89rtHX1WiWjBoSo51VCwxf3ocSvkUsyCdHsRANfzMynFmb4gUu3UiEF",
  "key19": "4UKxykFKthg5efqK1hvuzAoPV2YJfDDeMX9XeeqsSuoUwGCje7BntxrgCNeDqQYjhn1GcgfdzYt3jwmUFJRJZAbf",
  "key20": "2owfVbZ8YbuZFykYYcCjZtnECwVnGyCfRQ87U34XyQRwNFQuuvaBB8jQLFjdWVSgaBXReAuPZT5G96uX1ZNfcqGx",
  "key21": "5bKcb86ggJZT2Pt8D6z3frz9pMctbL4RWM7JADm6soPPxfciJEW5UXwCxzEv1Wu4XxMtGKVZ66tu7A8ERCUJdg1z",
  "key22": "Ki4LZiSfKUbbYLPh8SCoCcpBpxDEFXpxRXtQBB5DtqvjHvWZRZzsRphaZFUFhBfTLh8TiCYYmAz1ZGKfMSnGsvh",
  "key23": "XcPKDUK6feUQsH2TWAt1db2o63djkN96HGQaJ6c1r96A4aZ65CGUvJq3FxYiqJY9b2ZEp4WhMVUEuuUbsCfHPnE",
  "key24": "2FiLbkzH5go8B9Vx2Vbf4wtLfXn9nHedMbqUyutwYuXnMinrVNoKdM1WLgmrDefw28q19LpPDUqLdTyfm8vyXQQp",
  "key25": "2DLjcfFDcKfPjQkw6dqZGTPeaeLWuH3mn7djuzQSnDLdBKBircTVjitWgP4BGNCL3rojD2w29d54dEYvZLi3Ae2k",
  "key26": "P6mGAmcFvGGY97g4qFFC5pKxr9wishEf7GxiHKxgKJ4bTxbPXaxvUpFjmmetwhwxKw27X47wVmxYfnJ7aTNMTWa",
  "key27": "3b7Cha2JTg72ncYPKzvXPbzymbhQGBxdR4U8UKyuBhizrRNhMvV3NRrqT5cNLxk9esW9V3D8MtBbktp2D9MEkmen",
  "key28": "5MWPXdH4LY9z2M8LuEa1mtAnYA7Q5uh85bCEruTFrZRkTFUqrQzygkDRWLDrStNnQJtSws4bvZff9RZT3dkGmJjc",
  "key29": "pazz9xbqV7QXaR26TrcfqizjsvXa6GGGD8mJANUyu3476frwy3HW4VEw3zDSRXDC1BPoCA3uGSeSWvxezKHeFYk",
  "key30": "5adniJq5wrCHa84YB2ijAGXDX7aebnzV9F5AbFMpVwbRZkEJiQgrmLKrioZYZuF8Yq5GYR55CE5ht1zVPvHDbvQi",
  "key31": "5gDXXrEi9twUh2E1Q9KmKJXFtnqAQ2peaXrRZwY1QcZAZekyMohcsQPUqEFTEPmSgq97e7HTeDmzMtSpkdK1Ssrr",
  "key32": "5rxLifY9DTSna8vtTDkwNPtXDCLHSQwB2jFBNPMzdJ2A5TMokN2b41p6oRAh78KSUaCWnxBzjMiR4QkhmacvKWUh"
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
