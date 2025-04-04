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
    "5YnT5gvpj6NUMWmvvGjMs3AVozHj4eGuKBFEDTEidBHDdxirFvkYM4RFdJhmym52bbb6pPDriZt4hqCmWpjvkFtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MTpqQdtaX1fo9BEZx8JpVNX6MC7Nb6U2CUrfCEuTM19AnqDV7FaAxyXyPLXHKRdbhai2fVQEFFCUnVvb4DkKjbG",
  "key1": "3Z4ffZWCGZezmCePkeAUqLuAPJAdv4RS7D5x5X77aS4R7wqyPTrtA37HVLbwnZrw1WSQtHPYgP1fFw6o9e5z8oRi",
  "key2": "2KW2s4JCm2Npyw3dPU3SGJX3nzPPsu2Y4y3UU1wuWB8L6W1AGqMwZfa6NF88BmG83hYwmtn4AZpv1Z1P6aZEEKfP",
  "key3": "2hCCMRfKD3sTgWqj5aiBQEoE62jf1nHT5PUWSkFdYtTVDKNFk1eVr1nmxQvYar2Zso43e1UHfPVnA5YT4e55MR7J",
  "key4": "3cFjtyMfNZezSNwosm6TUaFVVSNwdJKNeFzvypAMPaUW8CbA8kfByDcGn4s8RcxwyM98FpkrdauLrEeyXfu4294m",
  "key5": "49bGbMrE1eWuvVFf2uCfGZwRdg3MyRsyrfgpGKXCEdMdoi961TqeDkSjDmFtmSU3WC5XBK4oWHBGDFV6KaWnPHgG",
  "key6": "2Ww5FK2MxepNqQwVSm4o7mZeawfWaZdDhrpLbiG7cSTH9HyXgUpepQkXDrtwR6BH8dRzmiRsjZ3t67rRBg7Uvvpv",
  "key7": "iN2L17UPu7jkV5AXGGPaNJZTDH6rxLb7kC4YmyHwXRz7nPKEBrMgGvAf7H4viGyAq7LHm7aP92V1wnMc6h3pVS4",
  "key8": "8Cu2LAXL2tiYrrCwHPYg292GCSEvY95Z5ENuUXfhr8uq9twxxJPQGjoYaBjvBbmrVeqf84LVjMvWfKbG1R4AQCV",
  "key9": "hu6e3NVWWgMvT6N7yjVUpDKBfCQthUPPpX1Z5S4qNcrXm3wkS22AD7WziNLwjCwiWwSTFMM25wvKiuzXSZ4brqj",
  "key10": "45AMkheunSBfnmkniBLXBMn5c8DkpDHRJkeQ8U7icpiCHT9eEHBP7N4gxkEfomSHfoe4TKWdqMrbcn3KTFUy8L5p",
  "key11": "HqzQ6z7NWYZvCtaWyfGhZ2b19NVAkrPY5YB5tVk3C1KrroJUcCUZWKPStf6TpMiRrvkhsbNRnXhQ1qa87t9gp24",
  "key12": "KyFS7ooPDK47z5wEJPadXTjftfVo1Yp5A5GKbmvf9ven9GDrnGvQ69TBavbjAoEp9VgW3XBYckfYdVHTdBcmFee",
  "key13": "Kn1W1Ep9h1EVrUK3whBCAqDzd6jvGEkYT7LyS5YfYxZAeKrQc3dZ7Fxuk5cUiUpRAnnvefCp7Wmg4Jp2YPn72Ys",
  "key14": "4PiocZSyeB7mukSneUgj5YV3EVMattsMX5kUamctkzZqsnC5Xh5utrkYQvMjDeSC9rNJXpAd7xMJLFPUb3nKNyjC",
  "key15": "yonnMB5B7LNJJ66aQvZFUrdw6aaN3BekdNF24bUuPDqnYrhLwse2uoCh4DTF47bb2Q3D2XEdbAH83LYgRKVAFvp",
  "key16": "21vaZLVpqTe67uuuLbLndBCFXcvdw3WFyH12Zeu67JzAjaHijMTXsMw7YH1BTQXMm2redRP81qpyD1HMht5Qdx2Y",
  "key17": "53MQivcf2uVFDfjkNNVicu76Pzw3MWSewNmPJSsgmxLTzKAVh7kgrKEMeVioV6d9a9dXaWyWG3oHFfUgSQfvFxvX",
  "key18": "3FyPVjKuwJs8mEJ9nT8WjDWuG7kFjpbJsfG1Xg52C12yxfyb5dZj4EeFVURLkScigfsxtpeusXEqYva66Q9YxkCZ",
  "key19": "XYrg2SZxG5aGhGH6Lw86ya7esLMMaeRFS7X2ZeevCQExPghL3TDUxJzqpLwL7uqVLvESM4N7gSscaS663NAA794",
  "key20": "4NkFgycHm8Bw3ps6B6csP5XVfoP9paqUoE2J9TNS5Nex4x1EJhVHe4GEWcyMWN1J4pFQWt4S6yQtCEj5NbtB87FX",
  "key21": "4dQ8VgdhrAhPvFTfbJaENtB4ey7dTohKP7ZFXa8hJeFaoTRX8vvRw9S8Y95r2prBPoJGZHPBtPdFwMKrAbpd3qLQ",
  "key22": "1nCarjLEdXNQU18BH3VYfmXdiDjHyDFS9dBAyRYLaZRWiD2TsD4aYDHdmocDsquW3cBE3TVUgwau8qEALfeoBQm",
  "key23": "WVMwS344wT345jtQzM2NMmXet2CR5diB41uL17t9AhUx9sFQh9PZKZPd7Eh7T5K8XYezJXx5sdT58H4FuR2VgZ1",
  "key24": "318sK1HTmZeego4T43fJ2vZ4sZUHrFRvetMzza74ZKoWftPUTmKrz3txU11kPC7U1UNc6FYeMWZDs9juAcqKphJ3",
  "key25": "5eEdj9L72oiiX2UaMZ1ZrVhGkRdtpNec4QcUVBdPSR5WTSFUAFYj4UAPpHn6ik4ARgb5mmbFkfMzwHWacrfhvezL",
  "key26": "5aaLkTNqi7xKpeSrF1xpHENbF5HVv1QdsMgTmZhcTbDnQnYToasS6GoJmSQTTGiT1ABDZSrRfjSVndwyStgt6QLz",
  "key27": "2US3jeKg1JoiDEK3FojFdBXfxAtoyQwu8FWy3HxNoDmYjg9KpbW67kQZwD5xuU27uAbY2q9qt3FzHcznmyNc1Va4",
  "key28": "4weukUFhJAD8o2tbsrPFJDQsW6uxnvnC9bPifn88xDtjYX3ppXA6Anuzv8Eapyzbymd8EBfKSwMejstfHrfi9cmT",
  "key29": "bafMq1aEt5FSxzEpZDJmgctfmGiRqBGToL8npXTifuQp5jpwX11HsxkL5hLtUGmPT49XAcZco1UYpeK6NugS7LX",
  "key30": "31zvbMsS8Vmd5opjqZUaRuzv7KmqeGzRsh1UuSoTuj54znqniVYjZYWjYqMCrdUNSfJPpFGPXk7oWjkWfiZz5NQq"
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
