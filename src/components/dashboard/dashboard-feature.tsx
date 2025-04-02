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
    "3UpsWdTYpk9TqiWRDjNijaGhowDLwegDzztTPoksgi6yT1oPssZ6FXH5waP8KTHXfPbvHJegfkJXGPKTpvmQFyhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sLR55b3GmwpAftJY8kYz3PYYGpXjWz2EfTQrQtMiFYLEWNYQS6HmkZKfs6m68bBLLCeJNYLxL4Gaz3NKrzmwjd7",
  "key1": "4ga1keXDq6sutAYzba9Q4uLmSUsvcKgdc4g1nttFit6m8V33ebrpV1fjQcZLT7k6KuLfp224eAKZTaCTbAbDXENe",
  "key2": "3oCtAyqLpzpHdv5ANBR4aoSXgDeCw6zd8jjQ9BCxDnmcJSSZQQdgLC2dbXfyarwdMCN8Sg1sWCUNsSz4Ey8YYqPs",
  "key3": "5T649przaYWF9xwf2PXLm8axMTLuHsfysuxJxWVUa4LuvqaDdhaNTzT4caEzSdPgB6sv1jkhLTEhXSzPKZ4JGzNZ",
  "key4": "3ormAoDztDwvpwbrKenz7QefE6eDARVHuJgukDfov5wqf3RVbZjfU5rKaQnwVyxVaV8KkNeyK5pAWHFdYt6JBXoc",
  "key5": "2T3jSBe8ULbLcYSGJUXTSCYjhQEu9gtPk5qqADstuR94KDeN1GTDavrF2TVcExPeJv9voAdy5ENboWBboQ96g7nb",
  "key6": "5iGPRw97XRNnG5nn34Qabd6Ad4gJbq7xiQASGYE5hfu6cYRZzwvu5sapsuSMMtp4NszE9VqAbGGbU4Ap7sPar9oj",
  "key7": "4qKzzUYHoSg84qcnKcz7tmEiuZnqEfaAfKbxcZMnsduuZqSXAVpA1x6nXtU9gdLbbw5AYzu61fAhEeCWZnqJyq9p",
  "key8": "5nBEsaaNQTjrawxJ7XqALKmYK8JkKVwxVuhqUPL8rZKWL1ju48hx3oHnpSXE4QBTudErqENdPUAcBCdPWJPRPhpJ",
  "key9": "5GwJ4kn6vh74MQwCj9SR3fMRs6pd6pRYptQw49xbnT1eieBbyxL12q51F2x8cpzZxoN2KwEAkXcsHxqLTvcKxzEN",
  "key10": "3bUqp1yHUzeHsdhSJSMGxEL5UrYW4zoRaHHkVBW5LULvj9aSUssSPenZuC1kVsMdV1Bp22QxJjLGHGowVV63VQSx",
  "key11": "4JikkaY81ZK8VgMh3bGfxYJtdqVeANqzkit3jnckUWAo7H7PnvNocdcDgy8qCrUQWzsMNHAfrc4Z5QoiD9DNoBwi",
  "key12": "3LE7NurqWwg8frwNRVjU3FYvmvMqTeakr9ztYV4UuR3UuL3fruFMuxFW589MN9zePm1uT8QUgBPDarTeuMvvXwcG",
  "key13": "5LAVE9u9as3A9jYCt7WMyGjQtohfsB2jQv8guHmwUcD6JGsKsh9pSgiZcT64JPe4aR8nvYaB9513fH7mZ4LSdiqy",
  "key14": "3b7ZAxPVGbN1kXF3KpUxCeQbcYhXSuMd8rERZXW73eSBS5k3tfTT4FpZMJGdimwSmWBFSbpHrkV9L6mnPTDko5Xk",
  "key15": "3hPgQ1DozNTkdo3tiqbwVaT9ghthgBGUfhYdFCPHW29G2rS3wjnydEaBKj1T3b6KKrsCQMErouucyiconwdVBToa",
  "key16": "hajGqAtsShGY6BzxdS4WXPVTMnsYWKa47SLYESSPzjJnmEs2jBHeZgqZZKnc6yWRFTzgDdAb48uP4jHDZYyo3Cq",
  "key17": "5NJYMWh9gABvjxfDfD9XwmagQ1mFgHKGywSG8h4ffPaD2o97DtV9HUbFd2gvR83G446LnvFuaKWS2t7rYM2swrv",
  "key18": "3qab9RGMwnJXjSQLLFgxJwFmtFERJNe6ButAsvYsGc4ZQ9JV92UTwsLFyzJ87o3af8nhTbdskL1h847a1VnUUHSt",
  "key19": "5Q84ubBiXdRPnAVBBEmYLwiauR8XWkhE1kQ6zkHdW3KM9jbwr6JndxRV8rQ3WpMXrFYGmQsyh18m8c8UyCDqWAbe",
  "key20": "3zibKQPHPeF21QxZEthboWh5vA43Ckf1tHDg4ozZ3Hwx9wcDxRapaMhWFsVyJK14hveiFuKjEuMGouq81xKoZ37Q",
  "key21": "5T4LZM1mbdruFXTdf1dTDsgboGL3Rz61XN2Mq5sNsoSKVcYFxrituMoB9xpyQ1h5V4utosN37BkFnbg8syeNJxd1",
  "key22": "4J2oHcm4JQgkLKrABmojciQeD1Pta7cFcvAhuogqcUK7gct2dw2K2pnmrLPPZikkoQ1d4R9jR33b2GYrHjFhRoMa",
  "key23": "5RLWdUkD3ZzgqjsPUYML8THgSsXRZVvLiY6G6BLAFiM7GV7zErF3x2ZZEA3uXMVbRcDmp7K8PWmCsjo1Stk4J1Zu",
  "key24": "5cLrgNY2b4vMpNA5eoVp8XaUUBMg14ULB8X2fi84Bef4v39gb8NFvQKsMzJHttJrfwjCTXo2R2n9RQeTexm3LCW2",
  "key25": "2Ah8Ua7p8fp7KgRQzC9FwaWPbrZpU5wbWGzLQfMV7z3SvoqN9sqdtrFnNe1HmxwXSFmgPuPKu9p4PVxzv2PNFMVp",
  "key26": "3fUM87ZfqeD4dhhJiXtewNjbZxbS6fXpBev6gFU3eCjvE2356EoK4mYkkpdAvPmC7Aa5esuaxrD4PYP7vdNAokhW"
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
