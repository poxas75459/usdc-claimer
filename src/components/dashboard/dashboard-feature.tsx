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
    "y3gNSmcqANo3gETn8V4rfjQAwsnCJRJAhK58X24TekAeiVZaLMHeJ9ExLH9vK5dKLCoxCumBVZqaMG79quPFxSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uBYYRTcX9vyWujC7UQmcofCWXDD1SCS6ynFEUjEiNiKRvRruKSXuvdEaTtysUkz4yxcEs4hFRC7wgYeMfaoPDPX",
  "key1": "5979q8YtHRJaP9kM8jFidyjuPfex1KKDZW5PjWDAiAdVQ11PtfVWxHgzFU3cvprD5spkGjuqv9am4yyErT1zKHsv",
  "key2": "odDUCYupUui1LpUVQLQYEoAj13CzBw9hpG3t8Rn8eLov55GtJhj47kY5XHs6MBXqZHrXdJvnmLH6QiDMs4AnDDt",
  "key3": "3g4Hw1YL31rQhHqVd1i7aqMiXJ3nwQyNVrPuD8WnZMzSHF8x4uuucyP3Zr1YhJfJEhBJMcR3mqRhK6Ww6QmKaq12",
  "key4": "2sDW9VGneJ6pzVZLyGFtNA1hyfKVL1KLFtJAgrJhioXuChHQBDsj4RQpKZdegadFg7U9AALrKYtUQUz6oXF5hdSt",
  "key5": "5d62C7mVmjp5LLDvY97bmQcVGd9YS8BZYbEESHyc3rEoEn4Wj2mBLhGNf1ZUQEmZTvmhDMkxbJ3GjrE2orKnJeRe",
  "key6": "5nka3SHspva3uxpL8PvTdNo9GkPnwTMh7J5Xeb2NEnAFJ21HPu5vqm5YATL1PYd1GgfWq5YXdnb9EqMKTRze3Egf",
  "key7": "2PbrvziLMey5fVYgQumrwv5297WyLuURupeyUpEnt2woETT4iBVo2v7eJH74gxbCe1gunwut17VTLnLEjPNVM59p",
  "key8": "2GPbYXWg1fckuquDNCXEbqSejAkR42SagxszFqDUyGUCXcHVPLr9C3gLQTeMKPhsYQudVe7Mhbtg4Qa49yF8WkjF",
  "key9": "2hkTvzJYkadG4zmw7cUsbdReCSwRULx9n18RVf8BvitfPnRptgJSzpFCYGBYWCgTmjeTWYs6pdhUo4QCqYiSsDLe",
  "key10": "3tvxVpTH9am9SRnsEmYGP6eg2jNF5gME4b2d1DkiVU4zMyfxF7yT7iMKrR3YNrCAdi25GXLorggrxaTfWAEd2icL",
  "key11": "5Yb3TNk7Dfog1fayqSJMSZfgZebWkspfHLwAb1xv5UARKUnMejqtGw9tn6H3GiHXX2TmUfzbrTRXGG5VR96fzYpD",
  "key12": "39aYTy3VrtNwrohWBenquDF7yVLatBByU6Qiqh66LnKjE8pbUrHmjw7ocRcR9BTKHgJqeV821FXxpXdF1qAKRUB4",
  "key13": "kBBgeh1VGsBxvcToX2JvK6eH8dzibtmsNW5zYEMF24RHQBZZjahxPrzFL7AcRZ3zGeYp1HRyo6bLYup2D2J9Dos",
  "key14": "5fT7mtYnesT5HJKc3isSKiqdCo5pF4TydCASGdAg57J199G7QGfLuBBPfTeTcxDDn38K4Sf2M9E8n6LJVzcy7gq4",
  "key15": "4AbJ1MH6Z8xmwknbJv9xx3GgmfA9xAqpu8hPdkGJQXqrSj7WBMoowoTtge9gFkTdSWbNC4mJAGws2vavFmqLnba1",
  "key16": "2dstG1TxXEk33xZamtrX1X63NrhdsuKVyRZQKCVPdSwBWUpJSMgd76Mk82mQxu9vf1gfJ6ZcNJpGMiQNx4abd546",
  "key17": "3hYdVKRbQrgZtccukakJUAWQpZG8Cu1UjY3Wd7d8n51cKVE3JeTH3dRqEvqkogZX84udjYkp7JhEkgGhyejJ4J1i",
  "key18": "2eyWJWffHKz3oVJhwdikwRho7jMhnTcRpZXE2Wq3Ecw9gVQgWV9Jhws1NH51FG1AyHMzRHQingGKo9UM2rSMNFct",
  "key19": "L1n6VrxotgCGdt2eHc6MHdfpzeWJccvKBVcpqf8faHMGgiB5FuZSZPgAw3Z4tmUYMBjRaBShZnZwMJxRHiV1u2G",
  "key20": "3fxbUnEMVq4jVXMFY4qhF6RBhFY8yMz13MA1vRnh35SNwBpWf31XFer58M431F8h56KwnskkryV8dKA7gurNGz5C",
  "key21": "5LvUiRG8Wxv9zMYp7kLGGttgHLT8fg16T9t25drhwp728t63BpCciRHA12BjYgMqc8tLqkkPrqHRfnJtGdbidUHN",
  "key22": "3ASJkWFs1ATSr5YWiy4uiAJEfBmEPUY9vgGJSQpxSu9PK1UtBjctU1JBQYicZRPQTXTkGrL1xoVsLbg7XH1TCN2S",
  "key23": "4hpM8z7oahwNFZe7eBECSEwxR9ePnCEv2MVHqD5qjat6Syd23kWJujYzV362gbm9tKq6GYzofU78zHNna6QhxYiZ",
  "key24": "8G8ByYfMRtfaXuCnEkBPqiN42uP5VMXtQ3b5pNRF2KCGGtjQLSYtvBNnDr7S6Y4Rui6dHNjEkqSoaKWobMoDurs",
  "key25": "2TcBNPuDVQiY5XNsZSASgQpDA3T4oNrUPm2KRcEgn4sr3o6pHqfMzRr9PdyRFUjXHxM1tkagxBk2THFUg4D5421v",
  "key26": "2i75zAK59C4UFnF3YDYoZSHrUcEAmSF3YWxxJBQZdr56HN8vPJwxJNyKAczuHm9g5NQwFbXE8ZHrWdBQcLKr3nex",
  "key27": "29jUk6NNvEG5smMhstEb5VTLowNEDW8sRbwe3UM4U6XqEmts9ymF5hoFfzzdFx6gxMRxwoZPcCRv6YmJWVRhnq1F",
  "key28": "JxMFatRV6DU1FpPGCHsXvHAki8ExG4dhr4jGHP3SA97jETerjYtGmihJHxxKnYeRrtTg6uidE6zV6NDyFqLqLpg"
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
