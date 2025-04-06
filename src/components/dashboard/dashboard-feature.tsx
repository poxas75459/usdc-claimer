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
    "oKn9ZCH2cxLr2g9H7fSNALnJi7SExnzJi5EaUX2xLKDAXjYfUgeAbj8fEW2UfpJ3PbJ1Qc7PB7ApGEqKUeoMpef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zhS4TGoEt3mgQ2tu1vJoiU8Sk2JNPbe57jBZu8wgKhYjkit4cUyomdgpXPfDWi8jPBnLTh39w95R8anZuotsfUL",
  "key1": "3fVyDihWcazSQjwokjTC5cq1s9U1kqQC3MYEMYH9pBUdib7cGzRdm2VhW7tyLvmJHJPc1tsveJEgXwSxmmNvDA7r",
  "key2": "2TuQaf2QFFWiSdF6bwPENAG2R5otp49Y66jcQdDeSySAwLAvbX5uc3iGZSLkfVesSek5CFk4cDdZKmxzSc5fiD92",
  "key3": "4vawnNX4k47qbw8y3u3s2B4DLswmwKbo8314mfFkRpA4qndtiqa1XqX98ThMVgKRTuuS8DZoAjTahtbD6zMVvFrh",
  "key4": "3p9qmNHbRZhuLdFL5ozdBCgk9vucbNtbi1hqUGqRHtLnCSzMEnoawXyvBVcRqAMCv2f6y11UPXudxp3xt1Gurje7",
  "key5": "3oT5qJ7MQsGu1orpepqjcfnKwyKwkM3PJnEXLoMz65qr7gE2dLpD3v2b6tEkqCFL58b3dfV72s2p7Qb2NS3nqgKH",
  "key6": "AUFk3P5ASABNX51uqzhpgiRKsU4cSm9quB734KumkhxcJyb9GiGNRFz898ashs45JWzXcD2kkJbLsqtgXw62dn3",
  "key7": "3jDhRXkwc7qcvLzJF1oYs9CGm1sHV94vJxihK2ZJ34dAEekcifZaSsZRRx8txZSNowdMN3RFfc4GUha1GAsuUGJb",
  "key8": "24LPrGvG2xprJjqyCtpLA1hfekNLKVt3JfN5kBivxgDLTSGMGcXEK6oLii4wy3f5tLJy6XVSrnUjrndWArPJNJ23",
  "key9": "LAVtdwwmywT6qiPy7wyKr6CRo4T4NsHhDvSee19rqXvVpSjWE86pHyJy92Tr2C6uV3DeGbsMgDDRwaYbrU32vgL",
  "key10": "4M1P7L74hTxNVmsqKjYjN3mpWn6jDtoyjjSSJMdVpobzLQgpUezERy25nktJ13Hc6XAYcW5sgwsABxaatJLEJTei",
  "key11": "3zRkSguwN6yRyMf8aNsGrsrgKBSKhDrqcp3qBpnbjaK8Lz8eKmKYaBCV8WvghWRkycm2pxDNb7vsVWyCumpDbC6D",
  "key12": "416uveWK5THS5f7xXCEqhLVujfAzBvBf7vnd2VrUDEe9kNizzRSoeP8jgJTKkVG3YuV5Wf44TUyLExXZ7ZNvXL5S",
  "key13": "3Jr3i6xMeXpVdeUAh9tnHFegEMKp7oHEZEhvN4mwaKXSkwzjbNUpi1Aqjzmh4NqsjnKwzTDxdvkT4knJLc7tji2t",
  "key14": "3RoaarHzb5myqzHs4zVEHnMsEZPz8spCx4tsaDQu587pGLr6CjgA4rxYa9nxe9WKdHVgwQ4Pw2znHmCQNPsLAGh9",
  "key15": "4VQfWD23CaxDY95eyg9fSVPRjnjYVUBsQPeMx95y4otk8b1nGpMj27fyCgqigWvmMm9AhaVGRvFn3uZWnFWssrvJ",
  "key16": "3beXUBzZbooUipBQFfikRhfXyPWLX23kzXAxFqyuWMvnR33zPHEmL14hCPqS53hD63Vxv8vDu91jqf9CeNc9mBPj",
  "key17": "XxEqTi4if6ZCNFr9AEsPrbKgYqpnapLe3o4JN5KeTgsw1Y2eSUqi2VFqQyUWmUN1AxD7CyAvjdGugQ7HZpNV1cc",
  "key18": "esv3GqPewGCnrRp426u6jLaR7CbfsdcwZGbg12DthGgjoe5dkExBekThRMzhQ8EDK7WvrwwoDQ3DrNDVPrf1mwV",
  "key19": "PCALMCzoZxjmENS1pE3JTVQET9pdGdga3swKWnLDnGNk4ihziPnv7Xqq8NXtyMhbsVGr22dqakF6vpkkASnBEfG",
  "key20": "36ZbzCeh1vbuC4BDW8pyZFd3yqZahhTu9N5qSWSm6Xt21cSkjCU5Mg9gmgX9ietvvqKHrC5Ror3jgGVL8boVo2CX",
  "key21": "33MGeoE4gNnzfyWuHgunjXTpyVHrKyLeVdF6MrdjhBGUDSuwEYk26BWPdndKnpmVBTGBQmQ3fSgFMABWSf2AY7mk",
  "key22": "56XAPC6eVAAzcnogHrsq79MFLS2iGL3we3u9t3T3DxDNpDKNTYEcDwX6yHC6ScPo1mz1i8KGPqQG65mgfM13LydA",
  "key23": "59DtcKk5wzv4qetPRcxm6MiLnUenWvepxF2uQrozdS6Pv1eS2RHLw86FYJghDLCJYfMvjb7KACtW31j2r66BFrzx",
  "key24": "2YZuKE4dLT8WgskTWertdzqeLq7oDi63cGtmiNJcJeWy9afyqk9VqJogzi94N1XHBkq4Jsy6FA8hrMD59svQWuHN",
  "key25": "3RqeJjDWKhffs8z7CJrRR6efRt4k2wTdHbQsyeBh6bWM7hN39SQFdFZsSfBMdxyjJp5yrtUBMft3kgrCujDTfrWf",
  "key26": "2yJDiu82eYT2Y8czTbwNR3u5B7i2T8ZCbzxHtcP19WDbRnhuFYist7y3b7ahj7a5Uf3C5wReLH5Mjzixp3XbVEyb",
  "key27": "54fMmYSg2NHpJhCB4RghGZD2ZnA5Wc1a1Y2m8AZnHMiwa52RihTuXMKAScmdGEy61j4hfScZ4tW3YiU5JPaLzGGa",
  "key28": "5K53t9QpJ5kBUvZ1vaQpXyB44MvmFegbn3wjLEoHgbUVRQST3rg715vFbJC5MTL1H7TLQptQ64GbvHMLurYavCzv",
  "key29": "3VhEQ2S9naXu3UyrCfmFtQKsRCTDZ36XZR2ue5w8jtpLg7wKWp4ht9XF2b2ycYrkQbEGpK5jH1HcSgVKHrvZeJVH",
  "key30": "28Emn7vgPdrzP2TnsYXvXGMZAdMHbAUFrVPEfBQoh89ZvVDoMR5oxi8h9pqSswGWUSRQun63QtQRZbszcpuNYfUb",
  "key31": "3HeeX49MLNfLw6p5VV6KHYqsxnjLjVv9Hpe9woFRGoML8BhT4C3fh5S68DqCg2TmyVGK4cQMPHxKFLtwKsitWSgT"
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
