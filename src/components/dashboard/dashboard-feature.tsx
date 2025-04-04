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
    "2HMbzx3RyKTYvajsutbm67oWkZVGYU6do4AhmRokGKEVAy8ZvE3f1asCx4DfetseeiJi4wsDvXBXHxGuNLNgfoJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WYErttzMfwBmx6FnYG5SiwoLqe7DL8r4RY2jbJAjpVhLhepxL7qQ4SQAZGwqm3WpQ88YdTNbnWSBFQC22DGddf8",
  "key1": "5CrTrwYuDUU6GcBSVrswo86R491wS7Pt4CFgfjuuufjJpM9mcM3k9a9bhGi1CaEcJsLcQSLpXnfBK4nwq9egoAEj",
  "key2": "2PQ1mK1ns6CRKuxLFdVFk5rz2eMkE4qneUB2rVqF1ih2gNBs7j4tCoSM1p56vWPt2ex6wLBNVbAgMDEfqar3NitB",
  "key3": "2BFThsM3uqDHqcyXQ6f1ij8X4eJQfxceUVqZrQXVjMn22rYPxpFdTbmoGX3jpSD2anFAUtgb5rPowNQmkEKHnChE",
  "key4": "3NX1HedK6LBNog6iH3UE9S5qq5GXQh2FUvd3QP5V7DtxrDhEgtBFp1F51sEiGETgBSAVQaomekfw3sbgyBcYp63r",
  "key5": "2VCuUtpyxR3cyG4qw5Yec34BmhENLUHpB1kyAw7gogKbKYS4yKdBEoSXnW3F3rdZArc9kjXh9xFPGVjy85gRmzy5",
  "key6": "hBwiGWn3WgvNEjdtKpMTgau4KpfipbARdgQhvzHEkMKzgm81TAXMCf2TcxY8BeVTSrp94CqBpDKXyLSBhBZXRmS",
  "key7": "3drrC31NMtrH8kpx6jxkvF6FyfUqz2hskKMjUkAy8eASkw7eoL714A58n5D2PkFkKbDUH9LzbJZuruPBPex5UqrG",
  "key8": "dPghB9mmZvTS8wpa8ynTz9iQ3yKg8XEnMVfbhiRtZJxeYtzpGfUAr6yTaZhdvawitUMAEDSpdUittpTJtup1VPQ",
  "key9": "27WWENDNWR6wN2Z4b4C2M3jeWdLpDzSbbdsnXSqgrgvQwewzSCPyJsNaabT2JCgyFmdpHqQNaF6CsuqCnCmbzW2m",
  "key10": "62SL51KBCbesesAP2muXhccHJLe3HpJoFk6uY5rTCW1Hsp27ocksGM1zEoSU6aALvxTc5W1LEQgvF6eTb5tYCygL",
  "key11": "4BjR72MNZDzhLDZMmtUtxLNk9bRiCns57PfFvWNMNV3nXVxhG6fRokMXh8ASjnXbV5j2qCYvZPRXWFsc2jHTUSNw",
  "key12": "21ng2fCJYXTjXcuG1pw6GLqp4vxadVtmtsgMSRhaXGYyrCX23Rfd1euzAeaixJS5r4ZRNT9mr3ePzjkts2u8KmV6",
  "key13": "62pER6ci1FhLz7aFHpWTntJSULjobnjWHQBDp5RvtAy6aNZrt7pUrNRERsnAX96KbsH5iyp5aeEkRpW2VDVBigrg",
  "key14": "MSWNSbaw9Q76iga6tQJRbb7VqwSktEnvuTKkfoFsStyY3SqRMb3kFv8Ebf9aYDqxfmBT8cokhXSjqrwRkMWZGmB",
  "key15": "2N9nokaajLDKbGDSu7GMixgErGxmm7YfDH5GFz8nBDYSTugpiV2EvuV8FJDU8CYH1VidhDDvZQmwo9FAAZutqDmt",
  "key16": "2qW6wQyP9LdKPoyR3vMCwVEZcfaPUVa4W5BWWobbrSwBNnLWxEQo61ruxN3Dv3Uj8C7HvdcwxMYEZYq3UXHgy3j9",
  "key17": "4kSs3on51HxuBSZijjto1Pokxsjq9SicACJA8R9WuKsMtL7kWoX4TpGvp5iWNPNzdZ4S4ttyJHudv7iQYdvbaseN",
  "key18": "TPDJN14PF3tQBXZmgE3AUAoKE28aZAfU6TGXhCu3aDikT8FoQGsnK4kJ22DdETkuiCftowF9wC6Y1PMTFW9Neau",
  "key19": "KK94FNfW77qaF64hNyoFvKPx1XkrqBifyUYFjxwsvXegg7FBHPtUkdpvzDNG9nqZHpjBqYFMc13gcVUv9zQz7Ui",
  "key20": "2uZY1cixE4YMTWAqB8mK5xfpAQQZa6kY7A1WqKwmMPG3qYFL89CQR5rRRfgeTqjQYBMTf6uPwndkFpvJCtmexRz2",
  "key21": "4TU9snwBbPmXo4cvSxoHG35aRYMJYK3ubZhw9Udei7VU7g7eytYQjTKfrbn6ThizYmeXtgwhQs9JGP5LLYFXnVL3",
  "key22": "3ySBS49TEzD3CPBER7YbqZY14VoeJgXfEQGbt45E7JwZD95jJVr9Fm5vhBvBGYsh2X4t19ANBJHuJPx9vhDG9ATP",
  "key23": "2wnkFFAyk5AKW7wGrQpZYtxcdSdFGNrFn8QfGoMZZeVjgQ3vANjb2THRZFHC9MStQXjFSz7A8JfvEex9X2qnCV1s",
  "key24": "4QQdQRuEjA579ZR5B1icuN5aox4CJv3SQ5PygFho8PrTNZE2ZbbmKXU93hcEZ59CXRtyEmZHKxeidVTHXTum2ss9",
  "key25": "3BfujyCee4Pb6ZrcqHDcX79Uc46FaQ7z5VPxkAuHft99batnEnsiFEG9yQM4hGM4svgWW8RRXWnr9XU6y17PWZNP",
  "key26": "35n9payXPF6L8khND58qB4ZRxVnbnipyUw88MvKGZjqMUNJy4gPS85u3SaL8wR6fcjmoSQesUS2qAUVUzW72ETwe",
  "key27": "3oTy35i6ZN1sCwUbLXAzfW9MUkYWqSFd8Zr6ZcuHoeNMgy76Q1B1pUH2stBEN2MQV2f4ZaCFBaHjvr4gKVcoPS6z",
  "key28": "3Qs932J96DgD1LR5cRTTiF5t4vBpSehdHiKhY7oBX3iaSZZ83nPu5Hu5RdHtTfjqLyMimvA3wrKL8C1EatTGXjMP",
  "key29": "3qbjJcZayxfmrcaMd1v8Y6AEuWeU1pnShu4bGzhKYNd4S2VzNovYP4J9bmnFoyMSS1L4KRPkT3zWs2WgqCzjFpq8",
  "key30": "SEqitSdijn2U1Hft4rZia8AcXCekGh83wjpVziRLVTJrE7HG8ckNiaBV1z9Q6wut3rDuLaex6JR5BSaDteVcD4c"
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
