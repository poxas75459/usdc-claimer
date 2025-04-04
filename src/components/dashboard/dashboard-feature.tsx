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
    "4zNegAKQCBWuqv48oVLiUTKDAxw2xdCURV2389b6qmmXQw75T3VE71zUXTxdNRWZxpAg6KtdV3QwmqW9cUN5D4H1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q44Hy6wadHjqH5iuBZJjC1qQhq6SSeDzhBLEpjZFR7gJhVLrFeGoynMCWZW4TMAvyEcMYQk5VZ6aUdca71tZWLM",
  "key1": "4HYXRFb8TgKzyyCFowwtWNYfRcna4QAN1k2u3tpd2XKBmqqvR3mNaPAPTbf2thSB8nyMpS8qSqSQvrna8RxDfd7b",
  "key2": "44hxkCNWAwyvr6WGeRTa73DNmN99uyiwfGBxvrdyn8UtuubJxKL8MdKZT6HphPjUqChvzeSJS1hNgan5qGkRauyu",
  "key3": "2Fr6m88TB6KxG7U3KpuvJkumBvxu7ooERx9XziyiR2DnYSsLDMGYLY3X47Qyd3qKYNDHsZi3zSNTTRAHnjgGEAL8",
  "key4": "qeCRjCiDQiDKfDqcz9xU61SZiK85gtQatQADK1H1kGmgDDnuz4XDr6Fe4pRjq4wosWdzYPVXexbJrs4j5AroBZ3",
  "key5": "GVJ4Vt8RiMwsg77dWcS3HFyin9jcKXt9R6aYfNe7Qayc5ey9ZiMN1MYWvXqqPC2pKd6oBf7Mypb1dvpoNeUNED2",
  "key6": "3rUcKE2CiBWGbB2DDBsxRBRXzq1RRMwzgxN239JHPCnDiXQsDW3QxNrXkCstAQLYcPEqL5rPmRsuSKDf5s2q4jAK",
  "key7": "259UL5gp8cxLWGnxCZ5csxGTmM3SGRGFWs1vRXhDpjFcLF2H2HjSuWAJkvziWo4AGRpqzf4kFc1V9gp7gRctDPgN",
  "key8": "4D7ShSEYEuUTdesPufAFaoeMNtnMz6iCjzepNoGADvWWdYQZZMf9gZmwpKGMHnSJBsFSpB8iigEF7goCBHrHLCcK",
  "key9": "3xs1djsw2d8hpZpTjNN3urjsTSDLzQv4BRrjbx8neYL6YgY1oYAVsS9qmgRrFGPsz11Zrn6QMoSHkQ11yjossNpp",
  "key10": "4RLPUiCJ56jDcC4qfcuP3bFbSE3V14NQimDEvG5r3YXWnoA66335brQSHKaJ1rUmR64uasEjKbRB88wwgzt9hCxv",
  "key11": "5awmwnL8mVEH3NBxiHzaSuJFqsYhWapKeFtTfixPxBioNPwfCs32sUg9QrzStiFKuKSg1eQskW9HeQx9SmV61nsi",
  "key12": "3HhRmhYrx6SQibPEuVa4VPNSE9wDWCLpGjMGkeZSNSjwr54KaoBouFAsMLWiQU1jiU72iZ1FDAD8YsLM98H7p1Ai",
  "key13": "5FUDRXDRQeci2cVBr95etPCdD3TUna47Yxgp3JGk7nXLAWdsv58k73GTrJwppeEB23SopRQV8gQMvFy9xDiMnrv5",
  "key14": "4fWNvd1tbY8cSt7Uf865jTiSCFNHYNMTGANsXy8Yrj2UwKpbcvGJpNAxnvVMod5freqsf7Ns9dRwZUPFnrvZRSjG",
  "key15": "5rH7YE5uhu8wnn6mzZRV8chhv8WL6HZiUJDXGQGe3umBkLrJCEzti8m1aLxcptccN7gUMv97oMLVTN2ALM1kHzFC",
  "key16": "jmVG7bwJHkJGRT7Ri4vW6qFr7fuDn5RrrggqNEqEiD7J1eJwYedyVedtzACDh62QkP6R3ZV2YbCN5tvTHgw2TWR",
  "key17": "5d7hq9PpcJix7A1RabHuDrG27E8AJ57F87RLqzGyir52T5SuG1fAYkPSxBEdCCKeuVMqooZgiVaTvrAoukx3JhgU",
  "key18": "2jQ12S9s3Rcx8ZygLp6SygQszA9iGGkMGpctfsAhi8whxY8YbPyyW8T7dYeL661xqgGbsk9urMnvSTH77uCVX4sk",
  "key19": "2WY5L1zJZt1L3dDtdd2QTeUnStYQYRKLTbx5Tcnz3Uor2JHbRW1TrrugDR813Qdsu2Xrvo7V2q7eQqTWT6RpiYYc",
  "key20": "JBBidWSDBWS7kcsNS6eJ8eE7NYz9XDpVDq3coATY2swycqyGm1fMmnyXCRrpTHnG7PtrpBM2HXtJ2ZUk8HcYvnC",
  "key21": "2P3uaGV439uyVqZQqqkpvRd9f5SV4J1zzSvdWSQoZ5EJtDnxCftrx51B3HHfa8FT5oeMbZFJf1uPjebdWD9artS5",
  "key22": "kwFcfTDU6a24i5N7UV3HakgbzFthK1c3MnHUxx7odbZmQFo7zgkbt8zDkkwCSfNXdVZCXdSaH91czjMNvw4SsRF",
  "key23": "2N4cdVfWbLr8aoRAus1TwLzHp57exwVDtjFvyjFE3Mp4CS2PZJsJ5zWfSSHeV6ccoarzeCdZVtgrETpvBu54WAVT",
  "key24": "3M94nWk4oSkjvQxg8zVxxBVZLBUndoAaGALYynQEkpUFFjytNxK9XorAHpMryG9mKTjLxH9KpWYnk5PeccEvoyLy",
  "key25": "5oaNf3vdvkzwsAaYRNjE8DV5o454PrLMCjcm4aFjh1B1nqnwfb7pRnPgp9n46JSxqSyAowXAX6DNsviysEN19i6M",
  "key26": "5oSkpVFqHDhGM7qzSYvLUfCkE1HyoNYj9MH3Krdsk8GzZqqAJYazQLQ26h12CHrZzYpAPyu69D4gRem1jV8JG6wX",
  "key27": "4HGbtEuiVRxgiTZcLVU1Nz62Ew81B5neujcXDm5QofADUWB7PCh8XYLYvmSp6sD6GDACRQucDW4QdCZPvqz44hwq",
  "key28": "aMX2Cn1hG4S3qAgeiPh2Z7yBMvfjo6C9YP1jYHycuZRcYyBiX6L5NiTd7bYmfY44tSPWAswQzCbbkm5xFk5nAgD",
  "key29": "3YpXhWqX4yRFKh1WHXCjw5DBmp1wUcmFQC999waed7R2d5tM8rzv9C6qcup4EjRdK9TDR4iJxzavVjo2YSzmUSTv",
  "key30": "44Myugw4GHpGcyjzTGTTKqhCLJD2oqYttPzj9whLZq9AnqPaf2pJThLwmi1dpWtX8X5AQS2ow2R48A2pjuKY6La5",
  "key31": "ZXMAw98T4Xhne3ggTYToWyzZowqU5dpHsegBv2C9nvMxSe9crUYZhfUcyhmV2ZvyypTqANhnPTgTnHdA2xd3Yfm",
  "key32": "5AWNgnUHAs5eoZ962c93TN94wCECo4b5xCrgUfSd32XTGFS1vSnrhzG8sLvJR9w6HKnpF13dWZbYE3PV5Zjwt1ZL",
  "key33": "4PcEugzttWDbRis4kk7LHG6k4XkBuAo1PbSJKLr6X1EcDD8rYQbsq4wn3KyZ3abqbXkFAJJMLni7LgWcVA8tyFCP",
  "key34": "2dLq9ToVuZZFSbQyx8a8EkdyxX8Jw9kmHx7sM4iVSMSbzPbMpwrcRqmxERspSysP5QnaoZ7bKCSqjqrufHv3mCMz",
  "key35": "4ymjm56wUj7gxY8NoPDeydtiCuagBMbxRLAUaXQYPSgHn9EPRMZ2Ex4aRZEs8CbznXtnFEKMGXoyN5dXN8x2rdrV",
  "key36": "2s8RyLEbF7PeC3cs35T2eYpbJ9yuEAnJAqBDKZuL7P4EDkvLZxS8Tcxs48DwqwvsG6DG162DeJqgF2tS9b9YjsXx",
  "key37": "2BHgihvZyj2Qh2uyssowpQnaNVQcuhQSUtEZWTZakNXucKmpQSifjKPFZkMkJBVNPgK6fqYStrrvnBikygaXMC11",
  "key38": "ujjpwNNw22b72E3vCtPLyNGBXCHcVo4i1e47HA1GxDnKd1yWCiu3heuAeWJTNYHk5vGVJRDoT7rBJ71HXUtNNGL",
  "key39": "3oQkbsPJgQrpUpMaUrSvhAb9fXPhCA2QtpcDtCouVCWKxMH6tXgXkTLfPVfNMj8nTkrFnnBUFx4aJkAKdipFyaKt",
  "key40": "xgjH1zDKE29WUkV32oJw91D3GGtePk1uV25yqutJfWJG1NbjiYLe8kUyZu8hoZZt5MFdPMDYbsgTyaQPejeoTg4",
  "key41": "31dZkexPmh6QZ94FMKMoeYAyBGuY4qQQjDAcWJfsKu4zbT6xKtXYmmc2KSZ7QqTE4xe3mX3ETfruLTgrUMtSBEuE"
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
