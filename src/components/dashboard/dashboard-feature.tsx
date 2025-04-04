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
    "5JqzGY26QURh56N6FUzjyZxYHBumae86Dhsa5dbHHtZAN1Pf3zgEko8pYzVPzvKtDUdAC35a1E6bA9oG4PGQ9yAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HGfFTnbXGAHj7ZcdXuPkEPS7xEuTg6uTYdq5jX16f9yahCB8WcYEbm48g8rH9UUtaZ2VZ4Dhy92LEhZYXeGenwr",
  "key1": "25yQY6Ct91bniCtdPYnwEB1CaK27CLD9QxXC7SN36pvSNN8N7QpUBx1zDXExwx1PB3iwaGMArNXmP3nCK26dAiJ5",
  "key2": "3C8kQdZum4icERw7yPb1kudtxYWPY1LYLRR5tgCTLUbE9dXMj5af9uhjJbjmu3zRURHB4jY8HpZZ4xVTLsHPJyf",
  "key3": "4etXbH8rni2fe7QMcKBmSQrKjSCJb9McB6oqBmoNLGNFEvMhxqVeqHk2UYa2HqG1ujWQBruLo2nW9f7qD6TFMjes",
  "key4": "3wZKyYJXao4x7L4Lad9p5Cp5op5MMxEYSBxUJEyHzX3f5ojWq9yHC2NMgrdXyxW9NPUA8E7DWEXB2iFNaKqguG6z",
  "key5": "DP4HxpN3BTCXTjeRuRXigBFo1mZTzcU9cM2V3fMyb9KyHUEroTvkEASVqsv6wuCUH3j7ZvAYcV8RUoW2FTmMgW8",
  "key6": "5KcTqHdDvh6MK87kneMYeKaiibfe5DbHx99cXetc9oYWMn5cqSWvRdZzwEFUn5BQtzRDDgJm3FEb1qtR6SwLyAc7",
  "key7": "2DkhTPL14Lv8McgSJmX1qnKUXFWfsV2zDALoXuMMN2niskjhVUNo6LnrtwHJzmq38BLNhxpoXeLkKPv1wgQEX4Sq",
  "key8": "2qG5zrmDWyTRLsiN6UgvhoXV3AvHS2oGRRbpqTr6q2FTyGeWncRzUFn4hQvZ4uD8eKDxBe6vMn7TVQbKj1rY3sUY",
  "key9": "22GQd1UnQaPo1pP9gSH135mQyrCgPJY4ZNe6fT2qzTdwsP46txvS4ADyrv7Xphod3RMaWj6bq2jPxJdo9PQPkUBS",
  "key10": "dhgp38Bz6bYAV86zJgqj7hJehq5CxFpVQaNSAeiNf8AGkU6coMHzq9EZa4cqK8LQ1dk7Z8oZGzFYNTVgBKvNo8x",
  "key11": "3mcbHSoPaX1Q9BakX2jsGB8RkKoFrpNbxRCaM8iLkxFm6D8uVjUDsoK19fT2jBJUbbTHJe7rApYiP2c2QMSUawAD",
  "key12": "2rhRwDgkSr1PaSCPKiJsNhcgGFMyrDqPCfUvgwpDnHCLN1gdAUNuMmT7wy1wRxkLa1kBtwtPMDsEoLTR3eDm2Fd5",
  "key13": "62j42PFxWT4fjtSwFn1GJ4M237KdeZ2TgzcobwBUbmpqewjRrVMYBvvK2S4TLMy3yjUZDDvWRSwSz5mEEstY6jTY",
  "key14": "2R5bWwyxKA63JxdwxSpLSedFvEh3afUA3v9enBc4v4m9UC9Bs6LwPrrGUtGX3Tmc84sqfjvxCmK44t8xGJzsrto8",
  "key15": "3gzeeni3A6WuwU3mhUGbNYN92MCRw2iYZirQtuNEmGBdpEv3gu7774Zis6Z3QSEHXd7SmvtmaRhnSQt79ouDcaaT",
  "key16": "49ZMrzki7Gs7iFv5zePfEXJ75Uvg9KnKBS69W6EjHFcYsEfpGyPEeGqSyCs9vVEMGzBNZsTEfj8xnTmmi69yU9pP",
  "key17": "2BTfnj82UK732zwHfnoSNwvQnuqQKMHULbQyXEfc8PLbfoy79BejwF36DkQ7DhixVWsxWuYda3pxUDLGdj4ucy8y",
  "key18": "2QfWxFhiPizSuRMzhFEJ2CSqk91uhHBZ523X5kKAsfJ5USNfD6PWPg6DTZjy856TBjxvkNHd8d6hBzXG7Y6ZmonH",
  "key19": "58k7RYWDFs7Z49Kd8NnRDeaY1aafaoQ8h1SrR5Y7B5xUse9Eyb2u2aiuzvwySq7Y2yNbRtcsgq4YdK1s3UkbHy91",
  "key20": "3SpWveZwJEPX3pCU3mqJrpVtuofTFRMBBdCLkoRQRKEXnfYhoL7asWQuxfXBZFMVUwm4XhUmn31ctRG7UDM9RadB",
  "key21": "33d7BN2U3qnruRKX9dNn7uhMPkcrUoXQqJ3caFJFpTZQsvjoGhEAYXhYH9soYWJ13tEAqXbbrHc8eTVPtvUFKXud",
  "key22": "2WNdPgvcRBSNtiUk7k32VQegnxq7SWxKmRNWctVGDGZcSHxSzpTLuH6g6ZvgQYWiP4VC6NEGQF4JoTseNk8JGuGX",
  "key23": "agtvRmnC5kwhJNeaKiMYYqt9UmT95FCWEq3HvPRwVTCmPZURTfS91GYcJ7prRz5KWJhyBRgT6tdMDdXiXVxTvJ3",
  "key24": "Fu3yWwN4reZVL655UYEYUr3jSiAGqyUaxjnYu7U4y6inoDbBbR8hpi67iytaA95EGvStj9fiEq9wbU8SXXpXEwm",
  "key25": "tjWk28aeFYoRB7LAwJnCcDNaAWj687PwCkAGcaYKwARFumfiqWmcyoNYgzQ2ht7b6FKdknvtUZHYFzvKjLyaWgf",
  "key26": "q9KKmejxMPsG3XabQ2vCMKUC4sZK9pKtm7UnVSoPFdATQ6PUtW9n1Rkfoa5tdWpBAKfcMWtrFYLKbMkqKqvGxkt",
  "key27": "2TrNBofCEqUGGgovm8ipNNk1ZaTGB9p5JhPzGJ2eHLsSbaif3VvGMLVzkaCkiZNp4REuKa8np78GnZATDPZ4WpPK",
  "key28": "67R7A9hTH73pMq6VuQLvgnXbW3oq47UQzk2zkWFX1gZA7eAgfjsW2T2JqRdmR8DWTfNuE1JbdL45oiYXFM4g5Zv7",
  "key29": "674SoBx4nyTydd9UL7BLfy71m65CyQtwQMF9gD1Yu3ALwXTAJamX3CCkgmCdy8PexnPCp3G9ghNhoTj7xd7B4zF3",
  "key30": "5adRhdWMfNAx1KM5H6K5LDXyCiw4NnPZw9uV6pQkwNWShcKVXoASSfD8K5rRPWi6FE9S1XC7UjLgNKyFs3xdGbxc",
  "key31": "5gvTJX62j4zqiuti7ZYQoMdt5EJsHJ6NE4RqWS8ykdN99M1L13fSbHribNpwXYCYWoQggxTQztpT8yUp1ZX4qGB4",
  "key32": "5MPpPwHmpHkNjB7R8QB5MA7eYWoGYECPUvY136tRQCiDS6MkEhcwHbs8TwnoarLashdVVG2fsTPgbscaijRBSULs",
  "key33": "2aRY498K2BdS59i3cJaTDdqqKcQWf2bWG9KFdgxz3pr4r5fMQdWjnew1DmRs6jsw13yhBiGShmKt5D9L42i7Nqda",
  "key34": "3vJmUUzUofHw3Mfe8K58oFUnevPzBAXD9voCG2A6bRtJYhQCAkD4pbmJizY4QtfMTkbHg4CQH8qQC7MYNRC5tDJV",
  "key35": "3PKQqDTAnmfe1yqU3UAQNSXUC81VkSmKaNntLe7bd4sYGTDdUYvZRY9YBx8Ko2MajFAv9ni7iNr1geG7pHXCaFFF",
  "key36": "DrM5un6o6R2eqYFhePuRbxLwwbow45Fs42tsMBYmbXgTQTpUZE8n2FcHodmP1HJHytftZrB867rGdPPcfuc8PVK"
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
