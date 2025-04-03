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
    "2Af4nVqiz4UFqPCqh7Ui8y57eUygXowECbCqC287yo6fFFRZaKACrbDUrHiEmLFzKGejoQZmcGGhpiPaNBTBjF3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fKVb83oj7tsVWXfUSVHp42jatu1NNFDUZi8Yb3oAUWW4kLEe4B9dYqr8239mdmL1QUyRM8GmQmVy89TSDPp7pvN",
  "key1": "35HvZ1b61DgXWKzhZFYo2TCGApWmCa7bUCdEC2J7NRxxPQR5zxQLPbSosjLgZBbJ5E7EQiEGrtQb7m1hTnkWeiYz",
  "key2": "5cPu8Bzw9S5TpNx5w2U1eu6XU2yMF1vLYmZCATPK3hPgEnKnfyV4Gzbxv8MFAvZrgf2MrWfgFpnCvBp4a43f2Bc9",
  "key3": "4DekLfMET58vK9XDqEZMg2offHYL2VgBbouBiaiQjyqfEUzp3KtNwMkN3bKnR3SUmrfpmavQAJNeo5Ngmb9W34Am",
  "key4": "2wkkFFPaCF9ecTg9VjM3hTWsugs6wKfSDPnWMJk65dtphwbynx2ZcbS4R4SvQ3YG6wH3yiZgETcJtRmxPRq3nQ94",
  "key5": "5wDxfhSMdXx9AKKWSnpG6P5CxdECZy7gQVDChebbtKLXJBeHN3rqr2w6tQVYBi6MGemKVKzTWmabdRLFCboNz2eb",
  "key6": "27nGLrNLvpWAHV4SEmD5tqL1vUnpc3sJNFq4YobjSjKvcyH41SUchx88S6s3FSQ5RkYWtCw7YSNLx6YPYkWZAfsD",
  "key7": "5VgN1W4zy9cP6we1hpKjY8msVpKMi9Z47SNwdbzCxfNYG2tYPgE41mw9c3Wj5oXuKQ39wxZ44ZknHFPtnXbRcUrr",
  "key8": "4f9Hb9dFPCKvkY97gqV4dg8qiU8wQAaYTUrKRkPbiq5ZNYjoofT8TJcfEzfEd8ZmiTj218pdTiyY8YEUvxikcVHj",
  "key9": "34d7Hg8MC463JNU8guUspbXGoFJNj1oFdSMLmrsLsrGZdi3E6Z5tahrnjK2seCeYV53xi6zbopZ1N7JuhrqxKShD",
  "key10": "2kfGH6zzGpSuJr3Xfaw8eUvVDQbGPJSnitZw741SCvb6K9vUEEWK7n7tvK12p87WjYy7hEm8omqWYjHzCzUdzVWi",
  "key11": "4NVuf4TrqsjWuYdvFxzykp6gPFAaB6AopoFJbg2zatTLw1ipPiJV4p7A1in5LpSNBGx2ZvNDf4dWyo874A9jmWB8",
  "key12": "3uvtS3yzpazibSeK4poZGaqyM9pkavYoya7ifeZNw8k3vC3GNkf24bzDBf7NwB41fVUmK9bnjhMqzgRhThEqTad7",
  "key13": "3GYutPrwSzgV56kwKFfRwRuf4kUnwQgSor1zPXYEh4XKmeZkdwc27wFoSaEn73wcdFq7cunAuSqp2ZrhLcYpPxnM",
  "key14": "24u3wAVTQUWT7wZpRYSTp8VmvCJx8GXonJAM7LyfnVv4wPp998nhwEwLG7F2Ng8EkmJvpdKYDHDkPVJgDyJtnU9J",
  "key15": "CeyGmX1uNbZT8PhcuvXgzB2Xy5xFu6Pr2mmVcBm9KWgefyUKMTvnuae3rPYmsqZCwxAnqVuJZ7pC4ZEAJ31SPi9",
  "key16": "3fBqurcNvHnBK8eGLPmroZshtixEmoqeYiYCZhMhhszQz7Jy1BDcgS6zNpJGUG4cXM8pUm8ubWQLCiHSFc7v1DJf",
  "key17": "678HaLc1WkY5JzRYgcVcWxr7qYViJNN79jUx1bTYcC7Xtm8G3SERXyLrt6oV6vWz6rd3nM7pJkXxhcYaKW7Dfm6w",
  "key18": "5FR2RiRsWaUgDXDf7mXHFn8TZhcgpHzi8bbESfoMw7dBkSjyw4aWh9iUwN1VPweuNZdnRyv29oXhE4ZhLFDFRh5E",
  "key19": "5JW6KPcyamNGGuCqdiq61qq7wn3so65q3umrfk3tPq9NKrczLZmUPfYJsNiGeeUeL1dcf4i2Yhw6jgjRGXKrVFDh",
  "key20": "UDkXdBxfsWUTH6mf9gKXREGdJ5nLa3GKMrw4zyXsMHP8HzavmEvL8XP4QeAxkRY4hFPkuqwt2ebpLp2kGuNZ4nD",
  "key21": "2EyUKRiXREyDCVGAAD4FhovQULmi1NrP4NmtdEX8s7Fs9W4PNxMCiJ2HwyZEunS39qubxhNBqpEQrmoaixU9qtXF",
  "key22": "5ghBgBtNXW8L3AbaC6y9odFnNhNH2SXaLVRhsTWPiaRX4nEx2BXXVsVYVbwLRTga9u9bEKZikqLSgitvT1uYMduA",
  "key23": "3MUq36dReCcZktYksijKWm17Xy8PviBTXAMmGuCGPr6XbgGPf9kEhLp6QBaLUMFjJZTmZ4JPqQDqdz2uQekeuip3",
  "key24": "5bpvwShJA5U4xQu3jWRVd8wQMFca2x483pCy3jQnDNQnoQDy29mYPTnJgzGksfbQHNDmqZzpPnMbDtYn3sqKQ19o",
  "key25": "3d3X25Dyy1HmaTBD9BmNAJ969LeCwULtirtrtgimkrYMMg6oV5Ts9Z8s7EC9PtJ6ZWUaAVhFQx7qcrynKyMNvBq2",
  "key26": "2mVeTsPi51p7yzaue3VRZWfpPdS5eKfcD2ayPCBsg9vgzt3hoxaqb47PDpmm38B6S87iQv5bFD84LYBC6UyMfsBD",
  "key27": "4xhbpQsPe2bCWWDM8MkpgjWMk7X7z75Ruze7jjQhj4ZCHVgnKyVDu9ZZuHV8PLiT455XLcFNfsLvsji6QR7jexP7"
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
