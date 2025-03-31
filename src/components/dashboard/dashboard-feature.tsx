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
    "3jgDERkNcpf8vSjv9fQwKGZrmZBbaCbMoCqKXaXDq9EBCraRkHCRAvQLwt2GKeYeaNfb1kTa5gUTvyYY4PBpZpNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CyaNoRxPtaUEt1n7gNSnbBWyzp3eD71G3g1PTir2WsgrLQ8snHWrqoZ6cVmftaYv5JgKZu5kWWPVJDyZA21HzWs",
  "key1": "ZTnrdsMN2sYArQpRHy9KvdgkAEmmibozzjNNqKjPK6KKY6YZg2WgX7ggEf86xPPP1tz2r9NDc52WxmpYHfSckFB",
  "key2": "FYTjyqZuA7LkAdf5xFojUnN9wRHqFMLUy3VMNH32mSeC5vHMPjV6mp36E8Hu76BCxjkzKc14joeqhN3JfCLVBUU",
  "key3": "5syRRYRbRAnN2SYkvVagz4vse8uCQapgrMfrKgop3ZoXt9c74ZimdEdCRkdH6opWy4jGnfq5cMgeZAazdoaj2eNa",
  "key4": "5MkpZSLEgVMPWy3yMvnX1rpMEr6mQB82cVtjs2FTbfY3yKLfFWxpQxLQUDvbBvQ6kWc1TDLVXwafSp4jokxBfrwC",
  "key5": "5ktZG85UTbgDvVMXpbadKf7NNXeWa1N7pSa3CoBPdqJuZB8ZvwAxjijgZLNwCZ1R7vNgznLFxGEzeqQrTBzStyzS",
  "key6": "22XGtg6dwqzcoFcXNNcNqfdNcZp5uunEgbSyjn5KSa1pHFaYjamuiNbDWs8UPamSEQyRvsiiiyU6ZRcuDiETV75y",
  "key7": "2SzAkdcv5PSdpoP9q8ACfzq6qCtY178MPGyU1P9ms2vo1CQ2x83gBwoK9VQ7RnZyQvvnY9dgBJ6i79HuC8oyxTRy",
  "key8": "2yTnfiqt6PkJMyQAp4ocnuUWbXh7D4oWuSUkiVPGkju7fLMh4S267mhQNJZ5Nqx2iTe4wegArJeSxLMNRZZwxjkQ",
  "key9": "5tScbJHQQVcUnTKMwg3mzEsp9hEKTeVscyXu8zCeYD7q5abXcLn9GHJZitXsEuNv7a7PwNi4kqoSvFXqiZrMbo4w",
  "key10": "5hjgXmMQkGVkPjYwCNNhTPssGbmQgL8oPH7e5uVUAcmHXq4G1bGG9HyNA3A5VBJjrRU8StN8vbAmzkXUSspi7gp7",
  "key11": "53do88Y6muy1DsKWiBsr4HEeqcpxtdHTzvusKUfsPGs9XxFzfsbDEfVMbJEL7Ro3TQXmpqhjqMcRdgkqj1M9fgst",
  "key12": "3aznaL9kKovnvN4n8iMdhM4j7vFkQwhKfamRUxZMKmp3jw9HPYdWNWeqZ27mMvZUdFWHPY2W2vEdkUr8w1bd8zTf",
  "key13": "2TZEoZ5DQFDtvEhAwwLHZd5yar68HeSRUsWxCKBHdN41M5sUSzi9SvqJnnbq3b5skjuCRc1iA5JF79VC6mJQp7Vg",
  "key14": "5Uom2pLKR9wbFMDS5eJiUWcuAnpjUXa879KuSpC1JpoTHVinWznZ1sk1miE26HueMRtU4vHSDoY9Z8eryyZ6wqbr",
  "key15": "3FSD2yd2hMctcw9nd2gKfzgEhunDFLcGjzQuvH52Yb59nEH2ryf8EGugiZJSS2sMeDx6PBLMJUGvGBnbEZBPLbdS",
  "key16": "4H6YEwu7ET768Ah8fvSb81ymttn1e4bXUvvjapSBsjevSpF243bFYPs4Cu4oB9kaDVJp4mazUyTHSxw6agSJRtP4",
  "key17": "4GxpZb3pyNykHXPHyn2Gq1M2SkkM6MKfwwm4zuQdNVag8ysrw88XM2FVymN7757QD8eURkA4jE8umGRXtzSeDDe2",
  "key18": "HqazNrWZ4aVwyGtHavF1iZciDTBYuykTaDErBNgGSghEse2ar91QMUrkTtiinWjvpYAjHSYRdaY95JjLHb7o6dX",
  "key19": "3QFv6cyLRjjcAA63ChEV5NGnZ3ooMKswfGGycEqquo9NwJqdVHDYWwAqt6jeiQoNNPmLmiwERRDKbFLiU69JkEMw",
  "key20": "4KS4dm2Dw5bV4tEEwoNkCyoocQ3XSnjY1DECAkzJbMJgCKSFDJZ3nX5fXuriXuhwiZtcz1EBF2XvHjDKKzCv8RW",
  "key21": "4Fx8erqxUngktzFXExX1LuMZHFqxDHspvPzGh3VjFmySz2iHN9NvjtMAG69CDV3LvBYjvmAJy6cHdDQmVvqE1v8P",
  "key22": "4L9D3FB263x75hePKQ18gZWLbj8ndCPgZDJgVobzYcgt75y5HhpoKsxGTUMdWcfEoapXf7Q8CeuegZ3GAaG3Hmrf",
  "key23": "2BDxaCQr8MnvFN7R5iAsfDbVDM3gLWFUcNzYnhifUN6K5i6iqTtPvFxrJ8UV49M9ttLBAikjhC2SXzKmqMLU3j31",
  "key24": "4ssj5vLCW4PLrvVYmY3zqpGPRBiJokcFE5566XcDZsQY1fNnB2UL9gHMzURN3NcGA5KfD8EJm3NVJszbz4PV5tzw",
  "key25": "VXF1c5sCcWiiAEeP6hm3AwBkp6otdLQyTBtjVGrPLmcKJhVmyn1y7VEbDyWDHj4ZxiSgFCeujigSdoqSscTGUes",
  "key26": "orSq4sM3cbaUYRpBNfjjBxXkP3o9x2Yabirxz6PJ2BxpRL6mjDYinTh8ctCVk1cLpauUinhNPbfFUfnMREYZVD2"
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
