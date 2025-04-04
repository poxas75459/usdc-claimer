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
    "493fu4TwbwnaFS3inNojLfg3ih1Co5iPexrorHVCDTNbjkm3MQKW7ypLwxVy8tRB1KCM2xbXRcMs2ngqaqJVqiDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gPwkUYbgmLuFsq1GYzSsFpt7H6nZ6cK8n6Z27HrYTn9voKJEJ6eSSUkaMESC8R9fS9P2Dqgu9ZtXLZTFzWaRKBZ",
  "key1": "4Jd1mbNNvRmxtsnVT8yhWrisLP4NbgfvuMiFGGhYcjZynSWCMUaUaQbFXD361sadZpH5ckb3RHKMhjCegpPF5Qsu",
  "key2": "8dF9ekQnmF7XdVKE9DPQ1dQpRzoGUeqqo7QYu9PyoA3v9ivVyk2LrUru1saVpG7ELK6DdAeivStjkF9VzCfMPFz",
  "key3": "2sjodc64mBNdBwuizdAt22yqKAhxmWkRhSWzmJFtWHV4za47wktfAp3pPC19Nh1daEbxcKLudr43tKXQx5PgVEKp",
  "key4": "5DDT34ZtkMKR3otJwN2dx7ieF1zqrvGeeZn1TZLb8N2dixvHRzg5NVizehkZGvr1XyuLi1RxDpedtsY3xstsQ8rf",
  "key5": "3Tj9mbRKrjHgHgQLQ2c6rsZVApBEGtrtzzYC7KQMVZyWfUepCj2ib459HE3V76Q25L1exj3cMF7kifCvqb3J4BH4",
  "key6": "4Sf5RDaLo9q8AqEq8xD3LmRDXFSpYD2cENXsraVfy1oGSd53oHNJAoeuEak6MEcS9cr9i8d9A7L1YXLREYX7qJK1",
  "key7": "3zatGMN9pqrkW2zNXY7M4v3GB2jfX2q5WnMrnsQMquJgYa9vMEeqe5A4UkxrTruDtb1AEFhwCwqD9mZ1YTPT7s4J",
  "key8": "4pxz65Hj7ePyRQaBoyFnJiw1zyKgMjYti7TP4bK1Z661zSFBWXTBcxB3hiErouDxWdCLeh1uAEyXj7UnRvX2UZ2R",
  "key9": "3QtyjoUPKipcDSiSDn1whDtXL1QpsoJmHrzpZZMAQxsUduGfXpVciPi1dt9Y45cgLrnopmHbX7V78kzDbAerbQZw",
  "key10": "x6GF4fWrQfcqXsWAzqztXsFDq1vcY6zFuWCFh726tqF93hsA4jEjUJzcwRgjVA3ALkqfjf1EYP9seczsXridDpH",
  "key11": "5vSyX4Vmt6LF8HnDBDymi8mWGCn8znfznBVkmZXBR8U9AQ1F3YtSxUxPgDexQiQzyt7Wh217fPYd7AMhBLubkVU7",
  "key12": "3k2hhw74zWgTGJbtoTEsTsPsciex5r1hhroMuFE1KAvywfN8vJ9PukewtfUmFjrtnxfgTg9GpC7VVLVuScY1RzFB",
  "key13": "64imakRU9NWXU1ZC4ooiVJmvnKwZzyWZ3XtriWtDFVCdKJ6q2zpeXVt8Q7G2W4v8AUqARgBqLpSKhHw3DWicMNco",
  "key14": "3m8HA6PM8Wv548bYKwGjifugnzBUQWTeYdbUNpbje7UaDGqVj3bYt646NQjTRrJivQLwexScdQZo7rMrUadeMvYL",
  "key15": "5uXFaKHT688DEGiBXVj3XPfvrfZ9hZZP9JvA8UikYGpKUQPHJetY33PWfqNQZCvUrnptSci24LXkCgSEvjmUTGA7",
  "key16": "5i2Egm3ZaEm2sEVZxNp5P3Xet5XBzjfN12gSukwPzGR3h1BbvY88MTUFptrEbXsBeqWjh5KoYu37LstASfFhF1X1",
  "key17": "2RRqBGR8HBLDZJrCJ5oHRieEYxZ7TasJaWKrBk4ehy5xLtJC4SFLn8iwbzwKw6i6CAMaJhUFLxaYteeegfjcCHRv",
  "key18": "R8QuzgdgSzXjT7HSdv2FKRijYbXbubJ2SGP6dKZZFynxeVbc4X88p8uvpWKMLSWdjqZ3ZmZunmyrwLZRRfXZSwd",
  "key19": "48wSAQaQSPvSn3vRU57uTrpTYpJYxT8z2WR8BSztvwcswRkS4LA7Rjnpm1RG2WK7BRdJwmqCcJbPNjMwNSEuwZFD",
  "key20": "2p4GLweGqFBNs1vRnn7Hzn9ivFZQZ1LXk7feT2qTUvM7vkhLRZcfcLDeSiKStZegAuMrw6aZq6SdeLv4XKfGJaFm",
  "key21": "3QEUfvw6xPyHED9rmg4cCbvtjmHX1V5jVkG2FDFBLW9mDZu5LGQRrGnN38rzE7koQpBqQ1fMsMVkiYZdMisifhQ9",
  "key22": "58FYomABvFivZXa4ozMdBBoh3SK8xhpFh3Q97SDMHQihns7qdcf6XPVvtDdvZ7BnrrhtreG9pRJYTCZDWLzHpAsJ",
  "key23": "3fPGukjBvq6Ve7p2cNqJoQvv3ecf4R58SPUF9Cadv1u8A9ubP72BkJwg72fgi6NtSTfm2adodju4JuSSYdjXeUax",
  "key24": "48unSLbNpdwaUTCPERmbZ7Pe8udRyxT3TyTcjtogpQaVYkiBUqnndA8fVmYuwWKT8FCn2PXT5P2Zq9Jt1WhUMRYk",
  "key25": "zpGM7w8CmQkJAoUW1xB9iF4oEWXkoMSV8rkcZLCsrtdnu5bUQrYZ4rxYAextBWi3Fs6Ui8max4S6Tk9USb8o1au"
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
