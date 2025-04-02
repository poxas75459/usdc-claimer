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
    "3oYn9h1dG1Zir2ZFJEXA3qxPVpCg53mP7oubiweRR594HuLQYju8PMUsr1GN9L7bJVfVydekbQoPmt8c2DHugZ76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HbbvHuPtCpbZxGeVjcCys1rVpE7vLoE6BxXHuG7p4xFcQh1zuTJSLwCVo8z6WNJP1rRgjuXS1B5EqPk48GbUYLb",
  "key1": "Jja5Vi6W6Gx687C6ZNPxHiqbRRjHRhqXHv34wA7wCKzSKS6JpxhNHKTBDjQgpsQWLLujkkaSZgEcmak97fsrQh5",
  "key2": "4tCkGpV7ZYBCnc9F7F2gLzuR9Qz5iukht12b8b5wcSv1MCAAhKsg7ERhLLy7MsxssV3cPoJC3SGJM1NdmhA74WPj",
  "key3": "3UBwJiZ6E7VHHGcUR7WRF3TDtCoPW4FdabQd8uy4Mp45ceN8UhZZAGhr5KQ5YP7ovvdYEqUwu4hqpGm7yDgPdTF8",
  "key4": "3Yaq8Cyj9eNMSGTJv26sryCnVTC3ZCEf9zWr9ou7Sbj3drpSuF7QeGk5PGV4JWdmGvPEaZTDbUeYb1zGexwZAF9A",
  "key5": "SmqnWGZd9cnTCve6zJAwCz3RnvAyh5ik7erXBYGRTmBR6g1DXvJELDQxTUiNcNkGv5ZUhdoCcVbfmE9oMo4UVdw",
  "key6": "5gA5ieDbSazU8d7GU9NQgfaTjWjzV7fUxS1iFsnaefGhBXZdBWdzSmmivgKACUo4kTqE8N3XHTrF7LwirynYGXKV",
  "key7": "3uqqJpCqYXevsoVsBuJw9hkSMrxnLE14Qqhv49mnFY3B56zuTjQRKkyUsNpXd1ixYdTYqGg49Uvdkm6dxzsXTBwB",
  "key8": "VBux68ChJi8jsz1VCQhPb8iY8gCJzsBoEifKXj5tH8AKtLCFp5W82d1SR1rzxLfr6MwBVvr5LutFsc55euYauFE",
  "key9": "5Fxi9Vbdewo5PVe7rq62xP9NRYqnezgr2sGgZ87ZZgWztTySRdVTmGCkHp5kr1jeYxFHmqnvrYAk13Hk4sFN7vVB",
  "key10": "5nBZDP39QkjCypoKPpacpSWMCbAm8qRpwVYhPDsJBQ3ThGEgGRP4sL5Fb3Rq3MENv3pAWswn5Ws5U9zx6aQMwLhc",
  "key11": "k5QSCGWZAe18R7DD91SKEQTpxjBGnncdC7yVrjhScaj4No1hmUMgiha16i2ZpzAzbF7x5iDJymRAUiNxCi9CSCg",
  "key12": "5j8yCTDYMxxjhrPHUbSN4nxanGUZM3z5PQrAzT33qVYkZEnNFfri1bVcFMQLLKKvK5vCsANfbjCmg9VUYY5vwtEW",
  "key13": "3T7ZC95sCLWfV7yqpUAa3eiEpdVBrxcVbX5mRTZjtaxZsLmFuQfUhCpFC2Ljc69k81PGtD4TQCCL79HQnm2sdT7Z",
  "key14": "hR2YVeoHxw4LfY4K4y3M7gU6s2A3sCfU5H1gsKwbDUUwGymDLTNTjVgmjKFj9m6nqBT5oQ26CdkfqzHobRmN4ga",
  "key15": "2GPixXbU2YDU7j1hZxT4nKNU8uQhyj2ryRJXq86Xg93ScjN3Amjob1BNugaAVZ8aFv4XfVAp8HgbzjHQWDjkf3V",
  "key16": "3iLRhfkd6CbbavATtyGj6qJPRM4Zot5iLVTZwgyddUsabSnhKcmZRr5jBvdSAKP3MmwMexPe7oKtp5yaYoTACiWT",
  "key17": "41VKT43hy62QVFxj7rDFUAgTDMiRLyYKr8RsMo8tGy4ZSe39DobpoLLYGXC4prd7xKnat9Mm4r3y4jvgXLkR4hWG",
  "key18": "42e2soXqHdysqBoH7jyhSVems25dN7m9p3CWRKpQhM2n4c8ypcf6ESn9VoKJrjiwixb98QHoE1prFtbMSGdXJ7ge",
  "key19": "5xp3gMrK887nwcw6HiG8QfVyEuhB9mdWRjR7ct33kobt7PyTnVyo1Mk9d45n22qh1XDHkvV51muDrKNCkrfjfCT5",
  "key20": "664z9vaHXNyvb4bo6B7BpdKQppYm89JGmuwuFs7f2qtX1vZaGTaci1MEYDGAoqLmAhHnUYqa1VGJrt2e5uyxkB2Q",
  "key21": "5bnZZ7mfoYTX3YfAUgvDDCVMJWrPE7Bq6F1uJcGuqASMqiXtjbgDaUeFg7FxPR3V3sVubFEkfTBEaX54cVPtVgqS",
  "key22": "x5TcD1Lg2iNfhqyE7T9VYrGcReLJRbXzqZVLMFuqpN29DF6J15GKH1hv6hrNLvob3juEit5bJ74NcVUa3FfWb3X",
  "key23": "2NnWVBHHEXi8TXWDjFSaZgvBDb5WCfw3pPUQS64b1BxVEDdztaUVE7JLpWy1ZTHd41YTkESPmPKX58rCmGV7xkwr",
  "key24": "3USgLAWrZxVotsyiarmDRd6LgDUvzRqsehZaMru6dBpQhUFTacdXAGsxQ4vgsAZM9ss6MMUYWzKip4dVBQqnj35E",
  "key25": "PTBH29Vjj88TUGLRjpdxArErQMwow16PAm8y7pj9MC7YW9F7WhQzTgJsoQAtjYb6fTgVPSvb7qBknaaKwwNxKNL",
  "key26": "4D6y5YSuot6CpVsVU7dCwY3PzvpysXrTXM4GF1SHbSWEAtwrJ1QVqrEkdqb4Ya87mXttNSCS2WeAofwosVSu4ywU",
  "key27": "4SPxssvAaB3gpPDNoRd7hNqASnMWSjYd8Y3MufMecjqy4QGi5cvikbM1McpaJdVJNtpA6LD5U4XS2MQtxuvaNtBB",
  "key28": "PjwB4eYmSftA4nZ1VyBSHCy21BLRBmKvEFjz4FLBDQs88wpJQKn848DaLbbdyAcYwyLumknZ9b1ycihx3AyGQzb",
  "key29": "5e5dbEXtf6eNcrUi57uhkEavKGUPzY9d4AUhepJNt4K8cJcjiKmdE8kTgFGkyZ127KhUmJZ4wMm2Ub2EkzP7aB3e"
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
