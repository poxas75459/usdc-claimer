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
    "UqxYJpJbQLr7iaPEtM3YazXWSpNiryj2LTQHt7UqhS57KpNMUf2c7Us4PwXNPkqK1AKWYopyKiCc5v9ZZ9EHPjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6w8VBpTxg76XscKJ9nXKM2UF3UtqeQEiYhc9DSks4FoxyqGPDBM1M2dU3hABg2FxhcXuH2KZvvpCPo3iNPHU2CB",
  "key1": "5GRgnLpvwnjxKCG3odyEd1NPPviTgZmbCaLw5LL4FbRgn8bX3neL3AJEzSCuYdKJb283onPM43QRvj6L7jQE4GeS",
  "key2": "4PsBxkwwnLZYJ85ZDPtWAV6wKjjDKLb2jQDzKRcgn2Wcp2n5Gm36yq9BMvPoGK51tnnwFW1cGMnHVUJLuacENNe4",
  "key3": "4qWW5JL2vcXFLyJPXufinXfQ5FszPzjve3FXgPcFxzoevF7cXQpagFnQFMsh7o8yrFDEpyn47PRM1wNk5FLNcVF4",
  "key4": "3NrqSTmFQMX6xJMXKsXdvo5exXzPvt9pZFevEdH4r7D1oAqwwpVZmp5aycp4yfHoW2B4V1LaoqNNXVzzba9eUHV6",
  "key5": "5WZBxNRMWmFtoY3DK7ecUUP3WuwGTJWTEKbWukXJPdUwgtF4NgXBjn6Z3rfmJ1bqvvZRyky3KwgiDFqUFRNUMH5Z",
  "key6": "2QJnkDnPZ9V11BKuBVbp9KLQ4nkuk8Hv5y9fUvBKaLHSeF6DiHwj2cTiq1ZqV4Ve3DN8GmxauDd6ns8kpG9cwzZA",
  "key7": "4GKjudndXUpYkKcF4BZipCC8XyfUn5TaCL1eDu6ZzBAkfxbqA3T17AgXyDjQNfY3YXMg42EuWnTMTk25NhL6ULFH",
  "key8": "5Ld5Dz2QNTFoDXid7TmqaNM6S9Gx5eE8Qyh8NC4j4uzBKDEeabqwoSxYWikgSsoNgbLUmgwwoEVTuKiHh67ncty",
  "key9": "4LSrSUPbxiyFrShj5y6ScWypaJbWTRdsPhckLkxpQj95GZ2MDW9PumWgWeSLChd9T6wWZ4CerAfgxqNi7W1EiXSW",
  "key10": "3xvDmrAhYmH58Kmnwc3x812zc4jmP4fKUNJq6wTxxotkgWkKcFTPMvyU2GX9hzKULMSSgBPTwb4nMnynfr523GQ7",
  "key11": "5jmAVXDu9uLDGzNaFGrZ59xsa4JQBd9rDWiqRsSWaBU1a2uDzWQQpTmqA21k9vT7jLaN7CPWMdE6nTAh8eSxWcVj",
  "key12": "cT8Se6qXxgSuowbDdx299QZMTdfFwLfPNeJToi9CMZT8FqS7KqsSa41c8yyUjfeGQmZ7i9wxuftWzkogPSVm8Bn",
  "key13": "2AFC9t41xr4hxvZQnUwWCVS1Jxy5P66ZPnm62ZvvxqFhJhvsdMgXrKAHrx4iVHTXiHNW2h8Cr1syRUJUwAVHfCnU",
  "key14": "2WwJFKD9F8xoaGytkm9CPE18LGAuDxfeB1tQzJjtKbDfA1Dp7Bmwij7x3udgxW4TwcZFUWr3vzuukAsWoXvpjkak",
  "key15": "BTeQNnThKJL3568TbBK7Knk8tvHkUSiaBn3eLSr8sKrCyX3sd5txuJ76zAThgU25jqYJ8xGqhuLWXsjL8ECV4Ej",
  "key16": "5DX9Hs1cgGvGeMyauMeT9akncmnuVNQUCjJjR3HDr4QhozaiEZ6vM2sX6FNvxVNG5c3VdtxoW2jdNvcRd9F2arai",
  "key17": "2bv7dMBM3THZToEhTCSB2YkkzZpyJdaUNKKSbaVBrgyiUU7xcccXx2hVqNwppQT5PLKgLQ1AmFgDo8BGHT6m2rMA",
  "key18": "41htbdvx418mEA4MUmeVkKiF1xF5R5UWrrHehuBqGVofJkmgdMbgeM4fE9xK2iRYDqf4omJvJAkyNqWemyQymHcT",
  "key19": "5agWYtniYQrQvrPZ72tDvZZFTU9be5ajYNp1MJ9NpZMHrRKJcarS41A3RYYeovpauF7FoeRpZ9dQdHkgK5JQdeNU",
  "key20": "56mYDCqT7YfPAWh2T6vypJbpDm2dXhaRWQ3wdm8ogSKe46fBHcixqgRVahDZEF8vdp5FZdb77CPyPwjx5uJcPNxo",
  "key21": "3s8CYoDgL999nYBJfAVZfzjP84DZZLKPGgGDZLMZieYwYxYgefTbYEm2c4wJv4FLpkR86rkvpxcy9neMwzcq6npE",
  "key22": "3wXvjqE3NX3F9858j9j1KG8bCPt1xwmBHF8aQPVt8mDRKbiqwDH39DXTQuhdV8dhLbTy6grVM1t3AA29x4qG6zw5",
  "key23": "5QRRHmEDrwThvXWo4i4SCyWwoHCjd8SoS3inEkVxENrE41EuwSjDzuDEJroPqVxt4kqga4Sbkkb52y7ZXhzeHyAr",
  "key24": "4SAuGjDzcTeQnXE4rUsaivU8iHm3hWv9HqhEMk5VqVhRTHejMYVLyd9nZDJMU9jCMvRC3Lav88abnBwUGKEEc6mP",
  "key25": "2cT6wYB8c52s1SVYH52i5TPHmwCNWdaMKmh1pi6HsCQx61aoSJguKNPhPibLUvuvUg2LM9K73XK9CXzfouuw77hL",
  "key26": "3FMyqB6EwwiNA4bWG6cxhi3e8MpQbBryBBgDwviWDdvgArMUjmVPfRZwLKUPHZZZ7uXMqFobiEkb2GU3WtnrMBY9",
  "key27": "2skGSivrjEqVgAa2cq66ERekbR6Ud9D8DDnbbyq9KyBJkyVJQeST6eGheei38x9GdAR6s5FyaTiQiopYVuZZN3i2",
  "key28": "2VDArkEJphEoyYJTGKRgPZDwU5yuvhmCEcw9vii1WDmCsABkYwuBrC4tHHPyTHBjfEmig3KxTaBajRTC1eXmaAKa",
  "key29": "3PiubwfV5tmpb3Rax649k1Xm6zrVgtnbHjPaV9PjSxvfJmEUZNXPZsiTKiLCFPwfFLALaHoNQTodLW1HK73sNr65",
  "key30": "331tJgdGqibTtJ39q4CjeqBU2YW6LoPrbdZz8MzMkihjbzhFH865hAJ5VKXRBE5gMySPxoNp53pu8fpPBeTpmCte",
  "key31": "59Pku1XDcaQcH4R7EqxNHZosmr46RJBkZLaPS3jMHHkfyjzt9pSBsm42jnCH6Va16zcoQ5YZv5njtGqhssEAsTow"
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
