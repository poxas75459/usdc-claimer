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
    "534wf3Fs9i1y1t4M2fs993EoxicMDnJEiDEUWaxLAHpev5xmhtFkkVf9haBxZsUyTwDSpuy2EUepCqboiuXTvW1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47kkcUNBxV6PWsWXCMeDewjB5pT8iawSscwUhsrA6onKXhEVDjHjfch5L8M9Ery1WNVdMHscRAmEenBpFWrD2xib",
  "key1": "3mn8LXT4dxGgcorXEvVNtNh6rd7nGABbm6L56q8B7idQAoQy6iWzhntSPQcEj75G2P8Qi3sq5mCRAY6VL8Woi8fy",
  "key2": "4AzwDTjxoGRoz1nPVJxtsaJzm4qPVS5vkJ4zqY7chxCmfvDv9GdDk3P8CPW2xZnSnPhVMZx67rBQGPtv55vhyTdS",
  "key3": "5bm8MtwhGUtdPDHTSDUbwBFTnTVYHBzxT7RsJ7SpS4McKWx3NmVNbFrFwCsau8ByqtQbTEjN93WUhmKCtKwyEtQj",
  "key4": "UEfvr9QkmHn3HCX4FmNaAW47theQTsvvf6yPPRfhU4vU6T51HPd8ujfNF1c6FoCtketbpifasKBbzN55cJxvcsQ",
  "key5": "5VkMN8Zx11WfRqcmWazDNa6hVJFsJ1EEUeup1XvbuX4icgEvr49iyQBkpfmMQfhno4Hry6dLNmrxZdWBrxavTr4C",
  "key6": "2ggpRfEt8F8kJh1HnjBzeh3BzPCDJWsRtqdu1VbjwqgiadRBCHbo1oCAc5tZGNiKmh6u4WgiNFpUHE839p9jWvBw",
  "key7": "2H3F4Wv1ERqGfqXX4DJsJAzvr8uqE411DQArYNj8pKPTouwL4E1HjJCKfdeiWgXvq734uabj6yUZRzR64ZEwxiG7",
  "key8": "3KErUdgnWdSj9FFzNXpK7qb5fH8hvzFkj2mue1gA7Wmur2c6C9Prm3tArG7EWeTpQfhZATigLo63gP15HEjVMtF",
  "key9": "4W5qzKVWLejJjMNSMoVhjKNw6JFib2zkRbY7BMoz5Gp4qHstodP3z9ghF2Z9aovbsAEgcxnYBkPV7DUWNUND6Tbn",
  "key10": "2V8a4sSBcBVx7Wuex5Mu3R7hXKADyiJryU2Zx3m9YWM4QeFRXycjRs2PwiJPyfb6uwa5Yvfchkrtr98J5gM143Zf",
  "key11": "2FnDhuhbD4BWHUTG3MZw5v4LbXWi9nm4CmjvrVng86uBbWkorVCUkETi1MZ9bciQdL9MqbrTkuKrHDEcgDY88xq9",
  "key12": "5TydzLWSiapYvU13H25CVBnGh7zirrnG8AhHUuZNXVcy6Eh3GQeeC3CVB5KuTVZBCTrHAobr4WGNHC7t3h3pPn4z",
  "key13": "63zF5aN1BoyzJJoHLs9NFiY9FYm4n7maeUM7bMszGoQ1n4P87i6xFTEb3fuRxcAixEEn8TQbXmFDJtv2UfCDwA2c",
  "key14": "46zwFXbkxzGMqxnSAQWcYjiF8Bz4w2WoC9XM4AwJFMcuTeGj265NQNgR6JgAfcr8tQbpT1ksiwystGYTRzhvUmn6",
  "key15": "57LTkYeK48P1byUCpHBA32hvGPQCoKbdwSpTcdxnsj4RHecU4S3dYXA4esM7Cp9SYKRMMCFUds83KJFP5n8jAoX1",
  "key16": "JxFihTm3ZYk4CUKE9sH9LaMei1K4ZjZE46oFh86C3JXJZwqWeuoYxQPwxi6xuUH64dBR2m3KgCmUJVwEVrJoawj",
  "key17": "5pDfrzAMkRBZ94JZxneF8gt6dR3aPLgvnXbQVLMXNicvNWCi24si8CyTZdhQuqiS1rHRnXRXzSy6wV6aLWpmiGSr",
  "key18": "5tuaFVevbweuLHJxFUPSJwJC9fXq3WVwVJVxp2ikYD4or1JoNLyeG8iKJz74eWWRjsgWpDrnbcCtjL4Bz4fopZFy",
  "key19": "4Psk774dU8M4awt4agniVoGh8coHwmVeuCTiCAWASPH6yZ7oqtTgu51yBrnFMQernP4zqRho2ybNMdggbuztQJyj",
  "key20": "5YD3XaHgy9bQajjfNYkcWHL48SyFT1MiBKx8MkbFcw6JHjqnYTxXFWFKztyynkNny3eXBfR9jd75oXrmHcVYrPEV",
  "key21": "1dqE1ghvtQkrfBEMzSeHehhVqwD6t9EQ1dH8ifRzcoJLHmZLabb29wPe9yPuVJtEQJfpYophsgvvANykSHmuSy6",
  "key22": "TspEWabJD2gMvxkiy2fpP8XHjCNWxVENAGc29caNXC6RgoEFq5sG8qX26fL7i9R1uVc1H6YKG4Q6MgcaPfVNbpj",
  "key23": "2MDKP6pizveEDnYzjJ3VT9krPWU7xH7jfzKC9XFAj9pzjoDWsy9yMUrUSsKZo8F8mprBwLXiB4bbXADAWfKcNJQZ",
  "key24": "5k6zVzkaQz4QtB8CfEuKwDeiK9AoqJKp2vo2uDsj9sRp6DG2ykFUUUhUjFvmFsUKTmgSpEmdi4jQDCPxu9oYrArn",
  "key25": "3YKmyngVFyNfWEgPiU24uwVq3ZeAbQEhAxLjuQwB7eVHTTz9xpPXe3RuQ4yup2f1mvzf7umTyAUrzezSEi2ZiVtn",
  "key26": "2F68Q6qJoMxsnXFvv2ABpqdCi61RusJgvhvRFgDWSFTrwNbg1jYHXjCBCvYCjNwH1R699V24R2wLqMAuSkXuFuRP",
  "key27": "D4guv4J5voLGfsmHLjqXc19hjfgrdZ9GE6epAUgdn5CEc7qmcdJHGJuDrwNcyD52hdreKPk4SLo13MsXpN2PMSF",
  "key28": "4RBGx31KYyQEk6NLw5fwLnnKU2b2JSvKRADFQeDTscAzCBpMiiKzrEEvPuSqKk1TbdU2Nsb2Dt2XwF8kAXTf76Lr",
  "key29": "5uVrCv3Zcqd7PM54whT94WZGNKKtYnumHcMxcYh2pEEE7JNvwqjhR67v1emaLCTw7XBML2GEyAjsP9XyepTadZUA",
  "key30": "3Lb92tHPrqBcYhAiRC4Rwir7FTL9t83fFJemYJJb2DHYKhqVg6hvjY3kxhQRcxnAg447VEQ14AExqWqocA2vrw4y",
  "key31": "5j3jLLZBZAzi8itxMP1P7Gi5dHppjRPRT56KB8EfUnsXSr6b1kAKYK64i56wqYAWn8qi5du4KCTyZ1FTxCJNLkXy",
  "key32": "hGAh7wVBQtyVo4hwVq5J4nuUQ8SqV34LJjx2Y819jiejGY4RmGaCKUzEYXXchJYj9dQA5TC1YM1qvwhWAEi9SYi",
  "key33": "2BtJTDAam8fqWwhzutDvK98ZqaqxrdAsqYeJxesUWSJGeBNuPmy1t2Y2NBv8BH53KmUUQDKze5E77iUr1PLUXinC",
  "key34": "o24pHEAPjikeMEmdDtXFhcKuhtegz1tTpuqgZxqchYcf5u7xBiiGMSNaVobjouVTzTG9i93SpsxV5RA7j7y1ebr",
  "key35": "5uef52UCdEKhBDrpM4Hh2TGAWTSmhSJUB8xhQS8jQ2sgszvfyqWGJK1tXMTMLD263c55KXwVHiYq3yVrK4h42ah7"
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
