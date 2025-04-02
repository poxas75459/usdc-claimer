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
    "4zGQszZtxhutuUJxtYfr5Kj5USJSKfxev3cDoMfLLuoiqxweeedM4QerJuax8zofWKpi8VQqxfPNJRWsEzHX25KM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q7qFCbx1Zet3pLvTUEgCKwdLFpGctjVYCv8y4TFkeUeVihyishs8jFWoZ9bpg6PJ1ovtHcx3Ld8YZcWimsvctFG",
  "key1": "55r4ng4Pr6sJ9rRB73JpPd48Z44HMH6UraJLkz9ArPLqH8jKjPnMYd1wT7EMaokaxAKpFxvQkevan7YD4Q465ziP",
  "key2": "5LHfY51SqjbMK2aGTfgs66sky2TDPtGMiaJTNL6LmC3WbW36BttA5WdRxWeFJpcM7AEPAcfKd4NpwLmHbPTvxaQE",
  "key3": "4rWsscyx469bR6ijN7koUGexoGEzj1WSP9Ybn8gf2BEWJV82KEhPNjCDggtixxguj3NHdGhycxKzsiaHdL7xHFqt",
  "key4": "2Gem9cU3mgbKMdkhVMdnmCAuA5Br4wbv3pdJzPc19kd2QCycDKi9YoEqGjrRbGbt4JXByx5jjmiityubTt82HenS",
  "key5": "8q8GEVp3s3eua7c5meLRFzYrqN6cjXZEN3T6JXxuWyU3oCNWZG2M3twuEhpYwytYzSnKXZDUVnZqTFC9hT4PKbS",
  "key6": "5XbfiEYPHAHbF2eVPu5RAfD5F4dDAnczDJikhcA7geQzVji2TbLcHVPrfnPVm4uyYTNpPf56hK1NsRRNUpFFteZV",
  "key7": "YfZrF7dyMd9jSKNurF6Lp9YMPjMA5GUkVcTdow6Pw7ffpddaUzC8kVt384mJ9URD3XBb9aKRPhGCeMRCxSmPCy9",
  "key8": "2jpypiQzCnjAoU6umuG9m1zWuYwq9kF22c43kzfW2rsxuLJuRqQEnY183hxZxkqdnQDP1ALMAh9dbPdXzZqWhvTR",
  "key9": "m7zfN4Xsq2hkeMGHsxU3R5HRaqgJ6XjASaZWYSAngezd2m8JZmFjUN7LZMs4Twrd3AbNDkKJTtptG9obh1EVDjc",
  "key10": "33aTZMQ51dT7gRvqM763Q5C5GF6WCKZUM19KV6bci9S9zpYpWFLgLFhFrwtpcPN5TMFRtfa1y2nhFZEQbcNbuLBe",
  "key11": "39YVJrGZ6EGMVDLEawVQvr2YSjtYBJ952Fzrzs1UzK2dmQCsVWTywnTGwYToWxj9JLdZiab2VsNjVZ8bs13BixY5",
  "key12": "erVwXGc7LMQqfRTk7bbZkx1pr7Axwy5tCk2CtywKX1BSMPbcywktLCRhP825WNq9yFdJcW5bgsafTufaULE6uwX",
  "key13": "5GkjNGZHS87ZoPY8YxrGo3EZ9ECYKDyvg2riHEZRd6jRas2pRvrpnsMBy4Pr1JsZE7Mme3djX2LKpfp97PF8A6Yg",
  "key14": "5rNFHQdJUCrfQAg7wtErPLQBo154o83V4F8oqkXUmUuRC2v5H9ERLpUf8eVsE7uhEcZuxd2fPYWdLj3P9ps6g5Ke",
  "key15": "AcQLVwzMdqCt3Dq5XPgPfgjREpXSTZ4YghrDokdjv5s13AWxUYkAazv8EmXvKsqgoYJEstYnXKzGHMhRP7gmQF6",
  "key16": "4RSEPH1xktoDQ4TQHp43sqHABjqkKVPypMQAkrunncvRfDbtufvBz87vBXJpYxzVMgUvBXcmCy3TFd1TwBGagc3",
  "key17": "3X4o9DjoTzFghWkhX9vh8ojbjMSJ3GTGp52upXxPTLBCMUqrHzQMuYvfQTfg1MKnAp23PAvY5ysFrHTsAWd5T6ha",
  "key18": "4EsGTTu7UXYLtg62PFnrR7fm4jrR7S7FQj18G8tsesaqG4QjfdYoqpE5sPbsZKUL23qgLmzV7rFctvqd1Dzhi2oq",
  "key19": "iZ23trPag1JaVBcXeSajJyySpf81T1kio5yTJWb5c9LtVAYqKJqnQTefqRbRMVuFRuSg79NYjcLKS5U6sYEFNBX",
  "key20": "55pVBFT1CRiMf5DHFoJ8CC2WQVsD1mdC5fNfnpfiGFHjPrwZqWbYxNYBDre7ddC7nhCqUDznpgotUpF8HEGG3rgy",
  "key21": "2F4Ptq3SHo6jXnjsymhRkYRass75QCtU2a1h5sekZawJ7jBLpM9mpdmGKdebK1AA25S1X1mqfhWL9UKw8WTdgKW1",
  "key22": "q7pbRieddWE4HBrNnzr2jYHmv3coXMLXyKoK2RMQijRB5cF5zfUwsEeK4J3CXucV5bViQ6AZTQFfMit8DrcGwsx",
  "key23": "2GgSRpQaXT1jqbyZjSUzQRhFGgvShig5DoAmrGwSE2EEV4bs6L1TeH2Hr7X9N1vrqs8U3iKbtU1Fczc5a3i6zdij",
  "key24": "3ccfPEUhthSWJBjYNQ7rzBcFMZxCwvMCX6jYEh53MxawShpctadSwFYLgngXWzqgt35uV8ybCsAvq1GV3foPRbTe",
  "key25": "4HFPfLEDiLG7d186dQdQq3oXHn3dMwcTccLnhzQ5v6ubNGvkZQD1Erimf6NFE9qDD1aXXhrQqVgPTL5KTQ9f1tiJ",
  "key26": "4Y7t4Yoa8WDN5V8odYqkhFfCs4Vv9RbwpxAXoAfhf6i5eZaxiLVzcRPVnXuC36bcqyh3Ys4SFfsaMQ2xQ2fmuEoD",
  "key27": "61CetULEvSttMxnnumjDBdkJmf6z4iNMRmmj8i37vc5vFEfeDkSnauLH8Q5Rv47NCoKM5ztrtbDhcDGFerpzm7Lq",
  "key28": "3DrzuF5YFji9e9o3ZJCyTcbfxt6uksd9GESj8t93dqEyNsDXyomi29wnAygLHDcgATFjA7LRQEfrC1t3NwLB1Ti2",
  "key29": "5j4VzW3sfPJU4tsabB7NRDCtq1b9RAV5Cx2xrhrHR9EU5zXLkwGGpX4185Y7jr1iSQnMcfzfe8ME9S8JUxYTiN7X",
  "key30": "57r27GTpxwQ5HnQ5kJiJ8NWaTqrdQp1QfhqNU1uhvxSkfr7d18q1KwRQ424vDgXLEmVUyRYvJSHuCV1Z9h17qq5T",
  "key31": "67rdCN4PcMe9XoaxT5pgYBtxWhmU2BmPGNnpVpFfhdiMDhmXETherv5jEcbTmKdMFKrKEgn9jkwNPWa7RczfV11t",
  "key32": "H7bwufpGVoPy2LccaJJtnQ1TKViewQccaaqWxDBwvTY8xMchHJRnrB6TQtWrqN5YYMDGzrCbCeCjyzH41DoLg9s",
  "key33": "5c7e9SR22jD8thC3799zLy6kVzfN8AAB2FJsLsUsrbepQhgeZ6CnNpGKPFTo2W5E9LbwLUhiqADd1YW523KHCSTe",
  "key34": "bRGSkRCQKnpbmegisDaLXnP3fJeKFREZXboB6My8gG1dFXssVGn9nEUSDh75FjHMkt1XePcnhZM9mkyEwNzhG1P",
  "key35": "3pqKvQJf11FxKuYr2nFbd2HxktcVXxyRNHdxRLtYxByVEyaJtyRTgiz9KYsyCy76WFN3PZzH3eNQqvg59591QxtV",
  "key36": "3ygiCBsTSh3ZHeRTcmQ7LC4rLxXurNDjXGxK3s6YeSUrguaTzvFbWoQco1ZH8assuL19rp8DkkUfxQzp17LZ2deW",
  "key37": "5YWTc3sBCXx3zpvQHGisUNzGVWBm8x9URdpskLiVbCsS1zeT4DafJYeTR8cKTnC8RNfwUJxiFfZGwjD2gLCzWfkK",
  "key38": "3YwP4pM8qUVy3efbtor1dVsfWffRQB89NrpxzVJpyXD2eD2qeeL9Ub8Gtw4SoUoBmKMMg6eQdtmWbFZjmZ4uqvcK",
  "key39": "2SLxwhmgxVSkmgsr7fqdVtfqtKcjcEAErQSZ14WJY78AZGnrFRbEQRQ56CJa1AsWVee4ScyACd8pdn54ewBbhFtm",
  "key40": "5nxBo6hMd8u4n5k6C7u3FYj9udiAVCBT6a3JfeHkVNBTo9NDrhGZw4kx1411VFkDoMunbbQwkWBmE4msqsT9iPFp"
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
