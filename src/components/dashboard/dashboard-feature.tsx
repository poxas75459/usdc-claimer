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
    "2SPCbsFgMuQwhUf8vGV7gqyVwcTN8qDNhc3rB79VxMXD4MTt6Lfn8xj4PgMGTRsfCQcFyQFGoUYCgFR4Q9eE1Huz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vre9MrCAgTBTVNHKhCachCr4r2WyXqXTPf5vu6oRqqyMDusys5BfruueNgUG5Yw8MhX2LxfLDAiMuCQLhmUASa4",
  "key1": "sV49m6dqaJTVAyRT9V36ofZoTkUDwxGPQC7swx2axwSD1hNuKd4WQ4aNYFAxey5MoHjEZJZQDBYud52GgridmGd",
  "key2": "4YbCAPdBdhcmst7nwiwauxr9mjcSwzwiMFeWAk3efXZzEUVFDLTpSSFJsYNP6sJLbsuUG6cnJeiL9rKXTf8KMyvZ",
  "key3": "27icQ161HmF3q56MZbuJL51zmr8ynkx7dSRR11qGgHPNhL9CApHDD2vyhsDG1BBBf5DaqFQJ6BMVJjYNbiRAtoyU",
  "key4": "215hFSaMMjRFKfS2NtFmgQdieSc4ZmpkCHZLVFd7yKX1W62Za6WYMxSFSAQigaKKyPu6t8rT9pkPzw18nrAdd8ic",
  "key5": "zxvans1nAKLs3Yeb8irsNExQSBtpMekNYVWqernTQqDipuAxwQ9WWjd3vhm1Pn4XfFYqpCFGo1anoCnr51f14rd",
  "key6": "2Q5C38614xKkYBzuApQcp4x8JfjMxshXGebzaVJ7mDaYtD8rTqfjHxhXv2WTYfqa6GU8GG62EHpefCZHvQTDxiRD",
  "key7": "65YPqCCRP2hUBXnu1n3451STAHtQTCDdEhKsaYsM4CQQAiDkxfDVtgV75YxL6XgY3MHEzj7iXQVBH9LdCViGwt1E",
  "key8": "urpbgBPoyeLSL4UfHn9dt2MzqWwDDGSGRB2hcLsEWT5sohxVvZQp6wJ4u51EYpqaLocjU2LJi5rHB6iAVvYG3xc",
  "key9": "349DDWkBdVMBBjL9pfi4JwsZD4Ds1VE3gmoKzgZWR8ns2vrSqwGSrU6qFogLEezthonZ6DnzRPuuLdrC9r7tfpEb",
  "key10": "3FXpTvC8aYWiSYzuKTTCh4qZacq14E8Bg1hZnHCWDKe7h7zz2CcgxiPv4YeYG5PjC5MfSzDzSxphVPFwBNHA19d6",
  "key11": "3Na2m334F84fnDedo2m4zxzBsetkCEpech7e6x83DMeuqebT7kqgNpozzjqnaJyywTPZJz2iqp315Ex43WxR43Z3",
  "key12": "2AKqUFhz1HLvuVycEpbPQU3D4K37WU86dE6N95iJU3urbhiMptSTpiurE79FoT2PEAJaz6xQJLt8VWFzv4wTWFn7",
  "key13": "43HPhPpiSKDKjxny3owCewu7p1fU1Yfp3yCpqy2LU3wtKUphjDuKLtFacsKWppQVCr6xkB1xrUMFs7FhiGvcXysu",
  "key14": "2en4F8qdPYk9M5xMuzjAEcxguULFxVqabjpVVVGHZBx4Z6pHocEn7MYURUrAGBpUHKoGPPzrXqoFqrTCjutiG3Uo",
  "key15": "4z9NKWjcMjj2qzfRCoBXe2WSKyXBDeZNp6H4eREy1rWh3fyz8SuUrqp3e1anxmW1KBYCrkJXAhCy5HPyi2uPCmSJ",
  "key16": "3PbNC2dtbUiqhfsrcG9XVtjGz7quvjs9nd4Lmsuk1B8PR7Z27RLdLuZSujtD4bwWVYjrNoiNKDxj3Mutw2xqkkGX",
  "key17": "24FZ2Y3civ984uAcCQbCFe1QN3DxjG5hsfZ1RLKv8udcwobvbDuu5C3Vhr3fBeLdi8w1mqxfa7mARSQHJzVZP7Sy",
  "key18": "4YWxF8VvRrJkmjK4RuCMmnJLEqnrSpWTRfVdfjhZxxwtYa6ZrrLGt6x99LXpu28VSEguLmPfDfPBtWy8n6hHHn2a",
  "key19": "5GeUZCrBJsMkULduPuJg2pH98MfHJpUAw5PAv6EmAQMwn5yNb9DiZ1ymUoJqxtnDEx2SGptE456rg3tF16cDH6Xq",
  "key20": "4v2QzcKz9z9qNujr4ZZypa4nXEs9fgoRwST2cEHvzpN7FwyDfsF5BDQ1T2BJT4owNtLJdPJQUtMF1QthdSGF4rMf",
  "key21": "48oToaVuexxbCUufBxUYicGUKeUzUL8q7Vpov13FLMgRqLXBLT49EqVLv1Ggwo7zwZiC2Dxp7f5rvYg5MNqdTMSs",
  "key22": "5TDRM7q6vVfSjXHqoVE8v2gubXknCy2tqyhMKiGBKi2pqucrC5sZ5kry6iM3XVLaQpPNJRd9TtAndaSehg6yqCGi",
  "key23": "5chJboQN9yawDt89Z5iGqyhXdKiDabuRHFw4Tn1XfDHNTYNwwSDP9eJpRQyRMnQ2CtYXxV8yD9f6FNsaG6MMVgKo",
  "key24": "5JTECZMQZ7bByeE8QLtKyZGnP1wTQV84bDSjBDrJpwnaBFPjmwnsvTHkXbbK899FU6S1eq4oJuRUs3HffbPj9qq9",
  "key25": "KqH92KQVJ6iK7JtoKgoyKQPUaXbjHXRQprMmD5sZJSgZHLGDM9dJAuckTMZAqCE8XTKXoBNbp3pEM5sf4Jouvfz",
  "key26": "3uQ9eNEzUA8HSzmj7DZKYULDwWEx4EC8ifX1Mv1rZBS3b2sRrG1dcUuCrSDtzFuHuJmnCGDSkUjbBHya2ETRh4zF",
  "key27": "Kf5cwADDijsXFGJn9zLniDi7HEkdaNApwoDG8KZezc9ASSrghYVQmypyozkstwiPtZH5wWKDezJyW2Y7cuBpvwG",
  "key28": "63AF9KsyCpN6xmCiQfsNopqVSWgYLycCzhv5WTtupVqJ6941fMMBwJZ2YN2uEhbk8WU6ZSnmWycYvFruPapowVQ4",
  "key29": "2wPZbwDk8gB1aaYweZpEhTSWDge9973c21cRoZ9wazXEpWnGKBWrFeFuCTBLiGRSeazorSq1czKZ76az3DKjQmzX",
  "key30": "RVYmNSDovPbEUm8TKRri6n2bxtwT2FJv8fVFv6oCnT2ofxKPDSn9Z9cerJFm7WyaifriQiXEpMTzBAsMYSSrUap",
  "key31": "2oMMjJF935FfyWAxMEjrCtEDSA4PKjXZDKgAVNFZMgJqqSFJA52rGw76Z3qJ4odxuu6fgaauqjMHxJzAHHYTRRo",
  "key32": "2fvzrEnjzG4B6bWVRTWjjGe6SZdbnHBYsPk4YA8RD5LnpQJQhrsmyj2YWgRGoXx8riKUdasmM2XK22g6GxNURuSR",
  "key33": "4U4EJS2L8iqFgJ7aSJvMFLJaBFXFD89TdShHuiuWBoatwXxP5p6RtS4mng87thdq9RSoLp1s69b3kQv5xQb6AWGd"
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
