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
    "3udLLyysqqeptTSke3eWRm6xizkGbFcRrUZ3jzoEvb5nV7SRUNrAwf89nCXczq3gsUPSrGbCGoW7Jdfnb2fMygUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w57iUA6hyCYKZHswRU6ZJiwEXvKEAyD5iW7uvc2PthjXudtaVj68L8F744ByuQKL9XF5oQvUJARj3mCbGH7tDwz",
  "key1": "2Sjriwo4aLdQiLf8FBxqGdfXjmbMkM3sMLHQB1H9kyS4MVnnpGLAv3GT1PniPusZvSHD8j2YieGud8QHBR4AQakF",
  "key2": "ycyTGe86U9JXDNAXpq7WB8gyvYpmeULz8bwV7y33EixVzbpHJqvn4j2WZtH3drQoejMjwEqsMA1V8tDvDKxo6Jt",
  "key3": "4VzMm4qPWVhHQLjmbVdDUc8EFCQw73YHmgBb1RbBEzcT9UjDHY92N6i31G9T3ftFzu3g4VBXonge9REmDRv8ANP6",
  "key4": "2sz5LBq5hCdqMPFoi7NMV6vcZ53rQAL8orerom3PArX7cYuWGbfy7bA6rVkJjNw8uBQu3NQfK2Jzrg83K85JNRDr",
  "key5": "3donoSqZMQZTqJfWYhG16X95BdBdSSem77wa7H8RAqBQFym8wo8wzupV99YWChf94hNhoMsbMMgmyc4poiMJQYLy",
  "key6": "4GdLh7hRnTefv9VTeNmHvo2Zv9aZ4cjjLEjvSyKcBjPTsupbAnSHEfizhAqBxZMPLXFLMpXSGN4AjtodXyET4QZj",
  "key7": "4Cw3cxqmuK4h3SQaCfk7BgebP1NvRXdPHNBHFtR1jzHkdXifLa4Apc3WfosBw8URaCr9v1iaJtJiaJcTN4PHYg5X",
  "key8": "3cmPmM6r6nMfNsK9jJyu5skeiiE7CV6JDBCDmQzTsfDomGtijDqaXgeqAnDkqPd1MXYX2Xg3Mtk3ZLfhUvNqvew7",
  "key9": "3VEXqEq6ZEDPCaJQSU3safELXU21kL7xkpGbdBnkKF1oZakinutfqJWcdXCBH3x27MY47ZF3dCGWbRVigo1tScnT",
  "key10": "2s8ip5HCvQY64WtcHBodATMvc71t3PePMYAEjLkn8qRonwVez598BaUoxs7YmBb8RayMbQhMmHtf861o2bWUSpmg",
  "key11": "4pb9jW3CHSLEHcB6jmFiCVW3virZPVp65cfXnvQbZ1M9M5JzZSvfnK4Q7bBJDo3e7drtvEpw2wxbSTVujJNQ7Nd8",
  "key12": "2SPrdrGcVNbJocuT1G8wgvZYt2Kp5s9qgukZDarRBFUWCH6aSa8gujMHNzav3KRdEYntNyLRU7hQdcBb8eDkwzQs",
  "key13": "2xwzHtpGBg8pGDwFQzxBpwccTWGjtsK1PVq9j2gTPKqgqk26oruEnFNuyPWoMCJnS4pDA8GiB2o3JfF6YcmdjCY8",
  "key14": "2U7b2rEA1QyCV42LS6ShidjFrNHJbpEFwbgYzqifuM3CLHc3x4RwJcgiFW9ruFQxgANPh63DLRhEXovjEVJiVxof",
  "key15": "853rtdHFD1sLrvz2CJ9puRv1y2nuc1wAa7ysicLnNBmWvJexnjdkDsDdR1svbKBwcpUMgG1CPFpuEJPJraUmrKe",
  "key16": "5sTeS7gFvc9mJUdXLJDEVqK8G38hjo1CBgpekD2w67E4BJ9ZfFfnBECQggx5oP2hXVXyqAcwmWKkLURTbuP7QcDr",
  "key17": "5RkstpoJPSX2eGo8ikDYyJbrZh9Vg5BA8nwt34kqXvxrM8DftV4Qk5hTCkendtPpzZUASyTsRF4kgVC1T2t9YbnJ",
  "key18": "2x7PkvwuFoaEpnLsbZ8Zp2mrT5tjujJNM7VgNVgRMw5cAoRy6WWfk5sAxf4TGhuQ8ZCVQXEWR8p3S2aXPv2EAx2c",
  "key19": "5ANQbBpbUjFYwWoWuB3Qhc13Erw9eHTCpBQw97tkWw3zSPSig5FTqtJ9GK8xZNCG4pqGoB7zjKtQWpfbrUCX83r5",
  "key20": "GmVAWyjtCuhhyAs9R8xeAhryNmLmjob8iP3iQFxkNghFFZXGnVrKmaZ6gWHvvfVzQTpgwnik9P9uE9gzFY1zhSA",
  "key21": "61QitxEZ5h3XvqMSzrZE2Px1knU7xNrff5ciD3HRtA47jk7MMKjYM2tCwoVde5PxZB72DwfxR6w9VGhFLvpZMjCd",
  "key22": "qU4ptiNunEcJggnZQXgzppFYNeyGVsN1AHRNhEFhYbSGm4yk9tTprCaz1pCdyhWfbmsQQS6m9iVBTDDZsj9Jw4Y",
  "key23": "5JMQdwGGiA3vk6qnxXoF7uw9kVk4y8KbKTNCgKhMaAzc5ECN51vG5fw7soJu8occvbWAFkXJvaJFBrV8yvuzDjkq",
  "key24": "3UvHEMHP5GuBtAWewdUF5a7VxCafJjWaDykpwmcRfdxfTQjQH6tAGt315q2kpBFawMpG3mder4N8wbsjJoxi8Enn",
  "key25": "5Atug5H8CDvVau8QXC2oaTjCDfJ6oXZwYjazaK9S5ZS16eBKjRYcurYpHGJStNSmSPQdWwuZijiDKyb8A4eyovGc",
  "key26": "445kpS3pYBj9o2BNkzNz5MdJzrNGaNxhwrW9t9LhpBwtKE27937qghCBGujs3FxFwWdE7hHEwhBnXydh6iaPPP44",
  "key27": "5cjKd4yax63eK3xUpcGJ4kPcDdLaNmQfHLKvj1gn11aY14cVdCRj5MGvQB1nr3DegY3QSCLG2aXmEWi9oiBiZLPd",
  "key28": "2synPy2anzn85yfBdLdmzWjb7rPCbSWgdpM1AJ4sWVSeVVRLQrFc3VTbT2NomNQ5tVUqg3vwdzzL1NRX47f1CCaC",
  "key29": "5KxNwTNPCcV1SSdmRD2Tvyen5BVwqivM6amQGGKYybNTNxG8oGFuaAfjAnR7yVu7zoDXaRjMzvUbFXHaTD4FL5gt",
  "key30": "3eRBmvGDALSyPzd1Gd7KvMLKX5tUq2P4r7Df5DHvUQhSpnhPhE7k9NAxqFW6KBDf5V571MP9rkAkBLKQ6TcZwgFd"
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
