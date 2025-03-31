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
    "4LdSyNx374PL9VJjQ3mxLKNCUEZXhSH1RiCouzgpkpmoiusLvCEWLWaxVwcBAL6abmtSyvXEgHKve45o4QmkMeCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xUd4NtGYmymwnkLvTWzAE3Hz84yRxGHrtgLB24JgGAvHVYeRKYFBZ955FcZbe556eSSSTsyR7fCoCnEmKCSms92",
  "key1": "351ywTZippLrqXeAb6Bs42JYAAwDezSsFq3ce9rkKckXsGtRtKdn1ecEE5Lhdm4DNy21TMYUqHt4xr6YykQXW7R9",
  "key2": "33Bmrx6jvbhzC5UuZRbn5MKojsZQhue8FCGgRzViuaaDToPTsU9kQkVdBJWAzkVZdcBAwb6JsQC4D6SCwSW5MFYr",
  "key3": "2sHnMtqXvhxUM7ULRfA84PJokQknSSTCm7vu6yJXjLuQmC5ELGRbfauo175Ah72RuirZTXXFtDBUusCAHfE3pdLN",
  "key4": "3wVydKn4YGtA9pzgyCnWdses9755VfWL8BsEDtfX4N4MuaxbwXudosyrbSXVAMtmc9GWGyc9weHaokX5CH4a5CsP",
  "key5": "36DVtXy3BRriLvxyrEcVccKhwFg1Uexkb2ZnwvrbyN9pMUh1yQqDWQhP2otDtjNA2gEAnSDeTg1LELpu7yvgKd9e",
  "key6": "9URbiKeHsSfoZyPVCyFx5VE6g8xAhjNGmjSrXXKbXJyQ7C6yzeaN7cwuv4sFZ8tS23UhBVQRcGDJMmHX5CKfKfJ",
  "key7": "4nSV55VNqLQJQhz6zRBCcj3Gkdno1ECknwYUGhkRKsUcosgrZ1mibGMYWXq53W1scGAkGA5YJ24rEcSfGF4LS8kg",
  "key8": "5HNmM5vk5nUz32brH6sZdjuA2gr7Br24pwEvQuV9NX6qajqVKmkxzqpLK5DiBLGoEL2NH8NWZkc42dECUNyH4Hyg",
  "key9": "3KPP2ZjYsGDWcwSoVpUMTAcgPA1rJHk76APaHpz39KLEEYjp72THAAvnWSG8iuEpotq14hELxHchjQJMYHZzJqp6",
  "key10": "3oavFUgdkwWRZPuEoQ3zMm78ciU7UYk9YKiKyZEfMSpqTPvR2KSUtLNZsvfCJgPwbiBabgmFppRdGd21eSUtQ7ZH",
  "key11": "5sVKVuNe7L1KTtvXqfbFjGTx8FRNm4YG9HVohyBbkeu5JuXKrCaG41vBKPvDXrCmAWkkevtkfPbDVmMiburqW44Q",
  "key12": "3iUcgtmGeVE86v9YNmGGmdJ4KYb6DDtKCN8qFW3ZcWTqVaDAKakuHSi23kcgv7vyP7UN9VTXm9Zu6Vigj7aWsyQK",
  "key13": "5pf3Lt2mgGpzaRKxVWJZjmkJD26PhrGsdbfHiqhPh6pcbqUvi453n8x6qVy2wcFM1EYzarMXEX4rAv5fRoeUjebo",
  "key14": "54aRLwwyCDTyzaEBadRibrywiZ5ULyheiaYyypwDJiAwcSawKEJL1H8zzW27xH4VEvmXwFbt4Cpehupu4jPRBDTP",
  "key15": "3HgXLqmzXrdiosEaZJG3ZYWUhnapjYucRjz1UkTWFscukt57JWYvCGyeohJgiuXWiN3q1w2ryXZiAsi3JQAC48e4",
  "key16": "5ePzucprdrPtfAuQJFRqXmdBewV6V4nTo1AmFqywD2CzvQ7vFBNzzbAhkxTepGrNkDUhh7k5AN81cP65ZLYMbtyj",
  "key17": "5hETJGPkDQsyjg8kzbeK8xy7qvZbea5Fnc6QTVhLWfimE9UtsTgbWUM2xA2bcXSFJuAo1rmXR7GLeQpKzj4aRWdr",
  "key18": "27FKJBvsjgtfa7EPSM1qaXpW7D72WaezjYj8Ku3F9fHhh593RbeufyADs2JLxNQygaNMp43WsEcRqgaT3jTZauXK",
  "key19": "4icEjysYDjHwzUzCE1nLXybMJGDVKVuK73wK7XoGKJToXpmmH9vuCDSYL71Xyx8USYpxVc3RMcJ3GXn442gwtWyC",
  "key20": "2Xu5p3jagQ25Vxyo4c4GLsQ7vgTDTKoCGJR2EQ9V5ipNFog27fxfiatATPX3eqrNoe1Tj8MYVssNpCGn1VX1QYTw",
  "key21": "5VNWhvqYNKSTZnt31yf1CWW39zAwZT3QtaKUhwR5LbZrartxLQFwQJusmRdYeL49g5DRiytMnL4EJ8wixTrVyqrJ",
  "key22": "5kmpbABeJwn4zACYSVxxTgfghkxgrpZQyb2Eyi8MiwhrRMpQT6NWg2c5hRyRMTTUUxzB87XAQtoYVUspzbUVqHW8",
  "key23": "pR1D3Wk8cw7bqGf1f7j822gQNcJP3yXbtEsfYpdEGST8WdfVfGboY8EmMbxxgZLRuPMTfutAAfEMHfyuTLX71UQ",
  "key24": "HtKY6UyWHrR2GHozEmoKa4JbeR2sSU2mDdvKoSEGCBWaPkPURjorgC16mCJLLyUBB5ypLdeuQkuQzNYufk93Tiu",
  "key25": "5ewx2unxtxdPMidEMvYkCHQWX5ofDCsPL5XGonRdWdxnZ5zN1yCidypC1YXNjcZeZLHJEWGdQgmcbBMQH8N2prKj"
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
