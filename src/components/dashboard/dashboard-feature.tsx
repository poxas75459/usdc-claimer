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
    "3UUAimStHXfv7qUooMYAJkRbj8R9eUcS2ciEZBEdDaipQuZ76nZbhEjGbwiJyUMBtfEJkvy7QADVE9yrgSZjB1Ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SAJgibrsm2rQsTaAgdygAPcHvGnjZtw6oWSnV6FdpmXauu4xAhThAARurz6kyERTvyn3pXrZdCJSB1bsbLfpsvT",
  "key1": "4NKJFJcLyoUWo9vAcspfKiw7pgg37LhWweHavbFfvWvJAyeDciG7sB1vjXSxwPDJLNf2iT56X9xELXXqkG1ouimu",
  "key2": "3JqzCbZU4TxUfujhY2JsBY4t8sETtuzKzdV6zr8ZEQpEPojBeuqPB7Ww4qkoRWKRyd7nSX8vCoe7eu2GYQ1mJ6oe",
  "key3": "5352UxCdrerq2y9x2y9KCJWu6qg462Yabi81zssAZwAdvEquViX1tJ9BFWNK3wdk5T5DNJZzMBoJjuZNsTSEqgf2",
  "key4": "5s1JEU11pAtpoUqUVLeczbrGsdx5Kua7QVakLBjvSfLz5h3DQhyJHDy9afC5rSqVaLPqQtWWjgiV2Xwc3uBWwXor",
  "key5": "zGszQY5n862iASnRrK5YQLiU2wR9ehhwADEejxQLEE2i3oaxhEtirhAaPA2vSnaFDTruh8vSJ6p4BDyPcRDuDqR",
  "key6": "2VRLwWTZnA2okbRHAEV9VTu8imh6kgnv9eaMeR9eAkPqNmgeMgmtjHeft3m6HwmrYErEYEiAcAw5rhG5tDdEnFkx",
  "key7": "X3wwsPZsVeEVjs6HcCRVuZvmZVAe6yWV3cs43egN6mMWLojKf924jq5qsU1wwCZuSVHE3K7hujimSA8uFcqTR2N",
  "key8": "2NrJAULXZ3M4S3Zu5FPvwqTSkHU7vNKed62NfEKEmBFs6cGzoDxKLdZbbk9PAheXjvd3ZomqPKwYZLNF3U9aVjaj",
  "key9": "55aQCUsyR33pWLG26aNXmLe3zZhCvHyfuhDNDxx3v8sSUiVYB9QqHDnR34CXQTyfUQAjsNDdJtbXD9fu7xSAaKCn",
  "key10": "2JosXzT3BQgXyjNVrkX13baDUPYMp1pqv2xzYKTAgEHk9eWgzVMckjKcRVMfjzfE5RbpYbwy5pwYW1VNUH97nwZk",
  "key11": "5ZHCaBWqZJf7wsmnjaBKfs1QN8Hutms916oA1kNjUMTiyq7Fh9jdxehpERFLvZBbY3ukKavY7bNCQZ52mvb18yHH",
  "key12": "5oXDndZnVG8RNPNs3SMMipLGbisKSQ7WwySbtQtqosxT919e9LkbbEz9i2GLV9ygfpivDc73tzDtF2zNzWUYtMgL",
  "key13": "x7LYyQ3Yj16gVUvZJ9phonF45nbJ8dB5EP7YXjNdd6wXSiuMi64y94Fus74QGupbJdvM39nQK51yq8n1WqZyMhc",
  "key14": "53Jau7AVuMxo8Y5PWQqQ2w5wjry6TBuesGVqU3noji6X87wkeD4w8G2zJhUU8L9oGyj4B5VdQ6f2NsYVoJJ68XmD",
  "key15": "29JsmjYUj9cnKLqGtus1Eq2PsEW5MsfF2r1NA2m1UFMLLC7m52wax2LHZfpKEgTWuWTVb9sReEwNRKYGQbRjucYD",
  "key16": "2fsxS4NRNodzo21otjEnBNM1qg6iZ9ZhwXB4QGFgJiGTJ8igKyDzq39EgAXzakZ1NTpXYiqnp2UeNKhNgFymxiw5",
  "key17": "5XjdtG9TQekRDQQJ3Q75fDNj9HkzrhfzMTNDya4hTGax3kxmsmBSAvGARAq1HZhxpQSo6jwDPXdtBonZVBrYYJMh",
  "key18": "3JPry318sdS1SXYcbpYCzRbNm6beZzfvbxKDkguWVVuzXXfiBnFXJkmdboM5nhRMwCFN3qNfpaCnqAUhq11patQg",
  "key19": "4doxgJXZdwzF4pvH7CACAVTDMVKE4QqLwBo6P5Y2jVq8cQFRy1T9pdaNuCbnNH3huZqHLkPQu4ZoA3jdigQBqE72",
  "key20": "2JxyTvETjtjuZTjS7FoHcZkwnt4M7orHnm7d5i722jwTFG9oesmc6KfRk9QV1W77kPrPbP6v61MUnoJGwumd5xU",
  "key21": "3q4jaexVN3gHrcHGE2AkSM3P4FVGMzCMc34R7u8VN73j82G1eMwGvmAmXeKBopFGTMe2DN3pi8HQh5yNdHMnP9M8",
  "key22": "4NoAZGURhmHYrouq8t8prjCP2Sttoi1eaMGiKdpzbyj2dZeFFxgu8QeqyCYkRpUpkfBZRykzLCPjfnRsoS7xc8kX",
  "key23": "5vYDvms71e2Emiq8yXxQdQkXUtMEUe1ZFYqtELyPYP916vjAPDLjx1j2kXg3fYisUbuZPTi99GVoMF7pwsUTEXY4",
  "key24": "gVx2y9sD27H9cUyrzyzttdBvwFrp3MVVe4xhwWsVwR22q65ckQ9zxECBtAxN9g563aVCUTEtCRXqwuYVTfDVEDP",
  "key25": "4oCgBafbzXfUTNW8iqj8DaNwKgNa84ssk3ZUqVd8E18y7vvguCdn7HxeZADSffNdZ8fHLCTL1dSBcGxkQ4VPt6A",
  "key26": "2ZtWs6fZz7BydviLAyBEcJGy2aKVeYzMvXfBeCfSCXpEKvD7kbxaaqbNQxjP2PmZmvXtrZgyiheZTeBUjh3u5Jj1",
  "key27": "2HY7oirV8YtUAXgPG1UVrF7qCKFRvtEeti5gupntSeYaxmA5UonmejkGY815gEi1t29VueHjjG1qCPUoaBa1DjTn",
  "key28": "3Gb5LcfqQdVPMjfgrbvS5XkHMgQUgE7ctNEQV7PRx8MV3LgbH8EJRP9DnP38GuTWZUqzV8uYTEb8yo1Lb1qVxsAi",
  "key29": "3srM12S3NoRci8W35tcFhhxKm3YUA3CCca4yimFKprPKzrQK34xd8DaChqjpPTfS6CJLZyzuMMKLPjnquJQrDxbJ",
  "key30": "4mx2n9JDp6qj85YgbN3XuKQMa7W6eCA9wZzVZLomBRSzFejkga7RG1QweGTqR35YNwujrSm1w1dLmrFgJR7pCmkk",
  "key31": "3KKh9h3nW1sqeUqSwGtwG3KQRbjjoyhRVrKNseasBxZN8CAuxrQ7rNDfcd5i8fMek12zsTpi9VCCeAnk2BK8C9iC",
  "key32": "5YGaHoicENrGCzc6yBmiVzCPag3XRq6EK2m2i3koWHWbXLfc58i2tKNDntWtASmjcMWFCmL8CmoFayFitjs66uzu",
  "key33": "4gj5aKtefU64WzKqTdi79NDvnZdDcoXKCBFdPPBEE1Z1ix4AJ7r3YGS1nmhXeTsseVTR5Zs6o8SNacKMSYShsS9i"
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
