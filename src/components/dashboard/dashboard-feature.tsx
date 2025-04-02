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
    "4rGhvF7MYbknL59BE48B2Q4EDJsGuxu1aR617LGCTUdv1Bjo8ga5v3Dzr9Q1H84LfYjtS9TJT1vfHakX6JfmgFmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i8DmDuTsMVjC3JbK25hAvFcdZRb5SmBa6CLjCYmzawZEnTD4XhcAknzsVqSfxMmeSR9W2iTB13ZEiLTXdz5URCN",
  "key1": "32iY9poSUpeKrxPoDtBgtCnXKvdgURuYiCGYDDfYih9n4JFwyMnxLUZavdGk48MnQuEJMpZ5zu8Xi7QzeN2PJLDf",
  "key2": "67WfiTLv9grqjLMcw5juBcX1TNi52ZVD9kTBhnhZ3xRi51rSCoaZFaHwnSHxfUoNufGj8KXcN7Qq3ho1p67bCB3S",
  "key3": "3xZQt2fxnoupUoL29AeG3D5UBppAnB59XFxkRARd4QkGnyDPVqfiZEfZJtzwqJPi3SM3iaYqikF8YECN2mRtwuhL",
  "key4": "24aAmU1cArJvt7LfYSq91H2enmWRbAzjwV3rWvn2kKwB44ui8dZyzwqU2QNz5xmzDrgtU9npxLR1xzRzmaM4Nf7x",
  "key5": "5LDtwCCscxy79ZJY3ygcF2XNSERPUo9vr7M1pwsREA9TRt5h28TsrZFGW5LUebegckrtN1Se8pyKDqydH99wwjbk",
  "key6": "id5LbBB39mJFmNpUXwm2AyvH5sssgjnhnea4hJ19EBdkdrpzr2shdC2wNnxGd9fmT4P3E9YRy7uVZH1J77JXN6w",
  "key7": "4v9s3ocnjzmgCVAvZmTWWdCbovS1PHUgbsCY6wgobV2wTseh93QAN7chGkzqqBJToc7N46KLY71CRp43fNutUEFz",
  "key8": "5Y6NwiQ5ofDar6uT2kiBugQRbZqer9dwaHcY3PPLbrYigqBdu5ymnQwGThExajmnCNLYVmVEa6fNqefKX348phHC",
  "key9": "3GDk7rD4oc65h5JnmNVB5UA2xR4zTpAAgjG1ZFStj96r47XjoKUuPJpn24mEEmnGJxRqWVW66jcBx9tSvhpH93sZ",
  "key10": "2zrbR1Jz6kcdJP7zY1WcgRy35pLZmQjPtYaDuyQKXjMhcYbqddEZkYqpoap6nsdeL6H4DhU7JDFc8NqY5KKMp2eh",
  "key11": "2nkoyxtshKsStWGQ2cE7e1NxYpj36keCiU4sYD2meq2L5KfqVUygi3Qmw7J3JZsyESrtz5h8gpgReR8SqPEYZzF2",
  "key12": "74MdrfQCJzS5g89eFC7RMFLFFXEApsB8PEuHZVypdkdW7XXTfWs47BbhSKf18V6b79f8rVdLcWjdo3EQJv18AGa",
  "key13": "3dAmxUmd2tMx1WrsytshQX7eQDvZTJxgVzRVkTvb166RdNdTPiAJR7VycbtV1HFV9qbAEWMjTMaq9g331M1NXydP",
  "key14": "2qEXcJbV1JYMmeNnwfnjK87Utz9djgNaVYygM6ruPzWnyPeyi4VnKrdAaGGYLVgaPLkv5Hz44Bp3kHhEfRFPsjvB",
  "key15": "2SGszcvkHqsFzD5XiGQmNy4dPpkHfXKK5ywzn6n6Vrf4Df45hd9G9GAHNRyfZfjetnEmBqwcYnz9RzS582gbXWEV",
  "key16": "3rpsS9RTXJYq9NkDKpg3z3NiUneqiwn174dQxPGZRMr3qgu9L3ajKnLpcJ4fEj63L9wTVpo8r1NfySvzCVawgfZp",
  "key17": "3fveGtSUDaLipHSrrZCefK2zQPgSrdfV5LuUUqSkEmz8h7jqCvcdpoACU3RhtQrqXAhZiQW1c6G7hia1pKWUn3Vq",
  "key18": "5AsjAFJ1uTKZeyn59izyPRMnmoArGB6mdUWRtTzohWP5Jx4Qd1gQbmZrQKygukWMoyy1Gj3HkvWwLFfpRVANJ5bW",
  "key19": "2mLGRSUnffVcjJuQ8YWWhwfMYTrQHN8nWA37KFjsfrveu7WAP2w1AQPo5Fmy5htMrTZGaHu9DZyUUbPmaWnqMjNZ",
  "key20": "4AoJsB7AMbiSJEpi4Lz1JAovAAtH4SA46WhRt9GXuC6xUYrNYxoKuybR2FHTGtRHA584guzueJPUU9ryhYoecRsw",
  "key21": "31g4TXraFPYqFdpz1FiBmrpctTvcF26fqbp1uuF5LPCtRSiYQNWShHhfFCtGcCzgtsmjHMAd4cqJ9J7mBnJRcm4n",
  "key22": "24DPMSAMtjWa6e68cAp7X7mm62JURgkqELuoru1hMYoAZZwokeDLA4gRzVEB8UgyG4ZaZuAdxM4E2EoNN5VvbUZg",
  "key23": "5j5NeJWTxgbmgb8JFkSh7DbqDvBAvEP1AVtjsJQ3jXJNZGUFcJ99Rmqtt9aUKZ5S6pY523MPKEKTvXPU7Lb4zSZd",
  "key24": "vdqS6QegWxqKeGDQHEkG2Xjk3JgaEzB2hGa9KVT3buv4skW1o5wgrdLkhySrbiXPBsv8Fb6LHL3za8hgsP5xUgM",
  "key25": "DrwGWFn78byNperiUp7PG9ARHd9zYk4HrbVcq31XJFvRg7c2A3szJsP1xo4UgCoFhQB8dCvhfQWifCbyJ5gxZW7",
  "key26": "2pGsoZV2UoA2NoNCcFmrbSjawuqdLiiy7sgrGrc5DxYeaG5VF2YKdLURib6CwxXEB53dn1ZiAmqqBC98qafCefxf",
  "key27": "4RAQR7pwqJK8CzJDDo9Muq11mwoCVLgsRdLkWXFGCu84dvto5pDQrNWMxSUvTZ9Ktskejy3qnKbuxdPhF9CKRiuE",
  "key28": "2EcpYf3YhZZyXCSkLXTqciyrYcQJJJrHYCtJThtG1C5FdjPmtiH44n9ipEev3ZysQAwKdRAyAyonkox7hHiM4eeg",
  "key29": "5EK4SV22eixfQiumdJFM2zjHLm7VhAFoMPDFMFv5VzxL39mF1br2f3qTQTn2kwfrzxWag9ce7zEhVBMLdLcBh7rG"
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
