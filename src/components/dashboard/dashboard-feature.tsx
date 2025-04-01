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
    "QMq8bvxYSfAbJbajxVJruC27B3gnk99whUkjoUTkdwdsYkjehVAiuwpFixo7boVidPTDK4Xx2SkKhPD6FbaKfGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Up3SnJK1MhkQLM2QhhLawfkcWji613NKp2UHtktsdo7kXXeNPLnrmhTsRx5h7W1vYJn7Yo1moR3FRS7Yxo41ihP",
  "key1": "4zSK2Hyvn8oxZ9vBGdyYdJXD49yopjJqcNCePc73rQkfoLS4UThuHD2NJDBVpY9BekPUBtA7Nf5Q8pvgHArPi6Bw",
  "key2": "qAZD1Le9jWQ3FY3jXStcLcCNkVs3ndLuPZ5DDiJwSRA5wYAw1JC2HRsPDqsezVu3mEu4r2EF4PRyCRfp477cKfq",
  "key3": "4CTikK7K9j63GRbzEg3aUnSYjHzYyGWFxwHYDx16wmPRTiRpQmpitqnaAwDekLMWKzrAi7kUyR8rw8mFkY4ZgNpF",
  "key4": "3oxXQKJ5mnfAnhrRZWRF6BiTzVJDToDZ4NrogoWYpkvYT5EzxqsVsSUuQwRB4Pyi2uZUta1G9eAZF3FKGWtKeZGi",
  "key5": "5fREAoRRcy455jNGTqS6Rn2YCU5XFJUB7LwmFEhHfVisJcC2WyNjqF44ybn8e6eK4TqefWPA75TYvYZuucbYqSyA",
  "key6": "5mRuiwu143AsanekfpNPPtrsYzKoTr3JUKiqZU3dsGKSfxpE3zxDJDksUvjofQs3fai6rMRXUgph35HXejv4vzS1",
  "key7": "45gu99Mq6Ma7Xv7Zt9H4mZdJgvg4ysYpU8KcfCGuXc1MGdt2HNhHzK3C7vfni9ZE2MWF6fs4KX17YsdnqtZanZDU",
  "key8": "2STaWze3h2LYb8vronCTw7xXWnBXHB2Y9s41YnRd2T3n4YydVv3xDxj94UEioSj1tQDf8cJ6LjrmP5YBYMLfzL1y",
  "key9": "JMDNHhse9J7j3nNUktndqw99MEMKw8zUEyyXB2cBCvDYJBPSfjmXmfh48xKmSAQqNi4NQyFUiszxKf8ecb4bruu",
  "key10": "4RvEQPd4F1LN15nFLuSHFHWmzoeQdfRTyJ2NVRY7z9YcLE1mjucj1Q1ipahJ1mCk35bxAX48vWvW8BEXWuPRNHa5",
  "key11": "7xDvQUvgKBNYPMqqpteCfgkuML4iyVuAwt8LpFDCSZoB8gL93PV2z8BCz8qDSnXkmDTnMWWM3xw7DSqTbSigo6L",
  "key12": "4qhEzheT8t3UDQyMQtVt2PtcshSxLds52UNGdcWKdkMZzEM4HPUtBxBw97eoSE3ezSi84m3q6Gd3uSQLqcPyD8AH",
  "key13": "2V2WyEhDcczDe5KCRzLmpoSEhUKTtCHig26zPsZHYF1rphBmvHF7zsJUYMDwZE4nqkv6w3CvrDRyAFHfcqRxp3Yk",
  "key14": "2dWxb3aktnPCrSfqvUvrqFbqgYhoWWxcptSozG1po4w8qESoNDRZo2kwXLYbyFPXCCMy3UPwVexrAyENpHXiFCAd",
  "key15": "4Dt6haVf6VJZkeJ7TnRPVpCj2MhyaroqiSenE8rVBp8my1PFtbgjtcdrcimFuAa2wsACDZb1Jop3BxmYKTBaLxnj",
  "key16": "4q8UbRDRHooX74rTsRjSNmtTbGDX1xctgCYU2XHgVZMgz6UtpiKYsr2nUBb7f6BnY135j4F17AwZ3Pci1k35c8ew",
  "key17": "3tW4TR6mjEWCr2aRmJZzubvhsxheLLj4fnhLbkNnTzfidt2fRV3n2bZ9ta12amhfY1gobzfN7wVqvzisWF6phMGB",
  "key18": "297vnE4tD6gKDrdZ3kMuxZXWW3qrqNdBtqiqhCWaBt1TZKHawCSzR7e7ZRfYhxd5FcKJbMWbpS68TKkXb3X1kYzz",
  "key19": "4GkG5BYASyyarrVh8m5vSu6GDvn32ipwwLAdu55r3QqUCKjUQDF1c3i9v8tYb9XjPxqMtNoSMVHgUWPXgapkfYsq",
  "key20": "26GZCrsafsFxyvCR4HDatXohmk3aTxRCWkXFE2kbFFApWn6W7ukZZD5AQ8pHRyW6gZ5nDJXTa8xbj3t8saxQ8rrC",
  "key21": "5dEC4w7CNaxGf4parP1t2AeDd1jHM3626yyHU9QP8DBHkdC9GaZu7qVHNLVgGXqMiHX2itw1WyL6hpNECGWLrUdK",
  "key22": "EGjHgRCnnrrphasHJn5nd1NVg8GKaYto9vv1xHAqpy9p8zwB5Ezk1xJdoTnRtFnZ2uR8jZqdSu9WfUAkaaNwLpB",
  "key23": "3GCrJcNy4mQPMeDTCvXYgR1bGWVn2kxuHvuQvFiaRF2z8rZmNueHEeAXE66NsEQcEHVt55pNCasKZXyT7UusJYRL",
  "key24": "2W1Ma3bi4ShpRo63z4qPKfJUtW8Mv1wsPmg21PVMZH5W3v3LVvTb13BX9VbK9aE8mUVvbnDiFsyu9s5LutZnE6bS",
  "key25": "5cfBZPQQeeRC5jLT3HpkSf3EAVUcLrBuaxpwZZiza8z4mpy7C1rN7WZ6u4HakDvdsgZS91j7ocsiAXWmWY3bt6ci",
  "key26": "84NMrmKKiqbmPfdF1D1o7NVUmZETTfNKiJP4aKhBMyfv9WeBXekCJSQCybxyDdy7fnmm143gMtnXmhVS8CUvCDs",
  "key27": "4Ya4GwdxSmFxyBuLDA19NdrbB3eAysh3xuGgTxGmHUr2h5sgmQ3w1kYrkWwVyurER9TceYdf6LLD8yw5ALXPJnbk",
  "key28": "3dZpiwko8xwGBU5Nabott9QsYvUsJy1kdZ2adMEoyg7JZ2r2Cx8pnTe1y4Dv3fUvMJTEEoRfnUtxkFYhc5VTMbcz",
  "key29": "31PUv2bGaPcDVwXJEERQX9R8P1oLY5MriSUkcK3xPL3AkSB1HQZ76b7Ky6LkaYDFa9yGkxFwwKvasLQ8hk1h4Ck8",
  "key30": "2GhwY5p7G1L9zRkinFnp5vLPxdQjoHqqWtgrFy4DPXLKbMjxtFZpVxY6dRARXUurfMjhaqQhYqjyf92NrM2PDyxv",
  "key31": "443G9iweEGjrTNsWSb37Qte7wDbL2pkee7HFN5yjH9pyTcXrN83UxwJvMNt5ig9xWiCPyS2nRqNkxpVy2ziKAdyb"
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
