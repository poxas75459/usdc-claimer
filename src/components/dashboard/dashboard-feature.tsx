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
    "4U9VR39VEdr7zMYBBVix14o9rWLdK5WLVBhNqouqquCDUHwfsY9qU3pkyMPvcUKMYch9bsUT5Jh4TWZumKkCjvLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZvnS6E4cQiimjuxg6Gp2zq4BCkyF9YH8NBeRZUTykScKnzcsKGgXoWi3YVgc2LMCwCCMmrZVorVSjs2Q3B6Kgjx",
  "key1": "35GpHLPHLLEbrHCX94YPCoqj3jufmoLedmuVEAzcXhYXME3z2KvuAQYXASe5ytoKavwcQDzTdBop9cruCz1C1JE3",
  "key2": "5Y1dTMjfigDpXd6a5kr9HQdRFAmGfoeHK9PAMjHKWJVCbxy1xoSxyqivk7nv6kuJUrsFktD8XWsogSQMKQ2ARmAL",
  "key3": "34xYURtJDuiPZw9FsRLwaDhzaedF7DQF3B57ecB9feX4iUosXSNWUgkHNFiEY1jPwbySgRKSEqeKhFQAAzbHgmPq",
  "key4": "5ND5k7z2zrnmEhjU5ZZfCRRSn4ZnRiQARVx17FTKUtSFDpMVgZh1BynvDcpwKSLo9QYBU1qPcb4FeeDaUfRALkcx",
  "key5": "4mz4vtUNqj2Y8gBvK5vTLPiBQstpdmJyvMtfJcwUnnMxSJGm2FbzEY5vY2xKzqhiJHoSah4G5BRVUjoGwWfvzwgq",
  "key6": "593ugNBSebDVYt5dgu2EzwKVJxk6GWrwy6ZNqbSbe2F4DHxVpreG1ekrd1fWoD3dBECzEfszAeiPaDfAZAVfWgcb",
  "key7": "ALWKrvFXM9rdLGutBNecoW8PnHbF8bnbgTHDs84DBSKaYDK3Ci4X2zJ7HGf1k2Pv5Mx24GCGwtTE6o7Eu8apRG9",
  "key8": "47C9UWZWqNWqowQSngueY2f23NTjWjXFvc5y9T8JQ12413RGprTs1wrzZRRxjvZZRo5ALrmjMqN7v7Q9s3fgbwuc",
  "key9": "5wSCqtJvb6EUvJHHAMP6rfodWyF5KQPCsdmLtGXM9AxaYpmB4su2AAMyY74yCXafChmNm6LbGZg7tBA9tD9E7oNq",
  "key10": "2PRxhTtUbFMGhb8YdK95uDvwjXpP9rrnpW8gRoHZzhxS3EYCpUZ5pyLKSRCqgTqRQJu6mv83Svzb22rVcz5xk7g1",
  "key11": "2Tz8L7zkykfLtPyiABPEoeYMzw68GaeRoY8K5zifbDor2vwb1HZ29G86oZyyp7CbXf2cxZgotSsx1hLQZ5VDkzuZ",
  "key12": "BKsqFz9nzyW9pvusMLGReh1obDw36AKNuHbaZegu7Z1pvmMr92TG1MUTTxhKyXTGrWyCT5VRm263s9LabB4s4ot",
  "key13": "5nLTP3WN8maeKRdWuoDcLZPhiPdT9iDiLe6Eq3cipQ9C486e5rYL8o8PvdpN5VzpKQ16yfPokrwSPdJoQpTytLQL",
  "key14": "5whw6oYU4x1QF6unBepRgtvfrRsRePZ4AhJUYJ98qjwX5ATgpP8zj8K9xpNH51uWhwMHDiqMkfdRGq5pn1pMxkAs",
  "key15": "PhSaAkf2Ng8o6QHbyRUdyArurCvSrFxmG94ioedCEpNvPY7a4LSNiXrhJc6qchkZZFEdJ5hp1fdJRw8tbCVPwry",
  "key16": "2D8KpmxjQ4ECPiS64FEQZXYS6ktPDHAVuoni4oNFBbypNiCHb89SpJEnDF3RCdtLLWQ46xCUGeBo6iSbvxuaPQnj",
  "key17": "337FVaGWK6ztdDNdjjmTr1SHXFNZWkyYqUC9AL7GAw4CgsXst88TKsFZQtxckY9VWNSkKvD78KjhmPiFygfrjhj9",
  "key18": "3vDngGgM5Nj3tHngXtHy3Zcpu1m4F4SqevLtrqi2Xk2t1Wx5vnxGzKmhttJZ1Mas2vj2A9kEZJpDgZEPMbTavovq",
  "key19": "4FdzwAFT66NZAwaLPyr9GBLd9rq5CX5VDQyrJe2Cv8g1SyGyfbA3NoWAubqLwPDt1ET5go82pghDZMsws7YmK9Rj",
  "key20": "firWWabynh6TEM4ZHXXmAEpiJbeYUeGT9Vm6KaSEyJeVf5ZQk5WqpAnY7ZM4r4tp5V4jchwZygVnTFCq8buwpR6",
  "key21": "wPGYKFFou3ofTymdebHdpAiupoeqecFW7zzv33G1tXy2mXhWw5e6bk1uKdvrQtZknsZVb1gJQA2EpfjbwYMFU7Q",
  "key22": "22yR2YH779QGG9grqvPL8o6KSb9jq85iUnQqSdbvZZkUBMzhBdu6SQP4VbyrJ4Gp118WQD5kHAFnBjTL4YfhmL85",
  "key23": "4THEYW8Bnqn1P6wSXHBtFisTKJ5ZWLJbBjZxadHx8XKGe684xvmTjfykccrS3hwgxq6qjciW2um3z6npdNA9zU4X",
  "key24": "oznukaVTU4U1o7Brt2Vv9KaytQdovQeksTuXhqY2XBKtiRKW5Mp5nvKZrSd2Hw6rY5LHjdVQzKw768nikVwD511"
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
