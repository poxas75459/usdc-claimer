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
    "41Qn7wG8Dk2xmD65dGE5M7Jk2rpmTXkzXAYu6F38Y5M5dgbamKeNX1ZKzmpv771VMg3Kvvxavn86AS3xdLvNRr3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bTtiBKHvh7CUcE8YTNq2uHa9zSj1cn5udQZF13E3bdyzNvkMRaxYfVZW9BFn3CFkLdGeYn2KHnMHAxXBNss2Bjj",
  "key1": "23HkKUSbJEkAUpNustRBa7LDAFVfkZUXBK5Mnb59yr6C73jLWCmXvBTSD4b6ppuFfDZeKj9nASTVtFj743z6f2zQ",
  "key2": "mDC9C448FA2yFgo7ykgeUWA7Rh8PEr3qn5fYezo7udTn68SkCLByAqjxHZ4pE3VT6M6o4NkxbWwzQoBqYrLxMv7",
  "key3": "5tyxBD2ToyqT1xhU8MamZsFdWLLs1qAvz1hF9NRtY1K5wf7K3pfXQvvsBqmfJNdYptQ1psvD2UqrY3CxpSCGH5NU",
  "key4": "5moBMkLUfnQHeZgNfWU3sVwwwW4sDs8woohJgpbw7Cproi6et4NHPNELpBP3untUK1fLtq27WPfKWXy4MjmBJTxC",
  "key5": "21qEawx1iiVQ6usCkhxGvNeCqkT6UqFdE8WRwmU6iBEZMa4bn3ajCzEjsWxkf4NjoAtRsQBgruQKFrCVC6EssqAQ",
  "key6": "2bQV3txnBDJ7vbQnvER7M2sKD8TXmLqFGW6FZ3DfLrjCQ6JdR4towXtU9tGDsWHB1Sr4KSZqwGpFVEwVUBAq7ojd",
  "key7": "65K1YLU973djTUcpjQXmpDejLquCr73cMSTC1HJPctLdSa2TMqwLK5LtGuDLnmTQzdEaF8GxUR9gUF9dsjnh8QYR",
  "key8": "4H236Lk7YbmGSAfZ5AjuVe4jHdXYa2kV8Wz99z2jHXKEZ8xV3qxBEh72MzxsNvmx6ms2tFQ4fkqdhorpxMGJHcTs",
  "key9": "5xpaGipLsZvRAGwzdx6xHLL77ZYDqxneDGMvLEd1UpDzhxzNCYFdquqjeDkhEYvCSS4Lfd3ARw3CChy3yodm2XL1",
  "key10": "3KUtUBwsRqWZ4tVV7GouSx7PMiP9uCGap1HSA8fSBBgyqqToEfLrgsVeDcMeJqRqEnUAYxEbxL1dTLRcniAfFfaM",
  "key11": "596rnSoLnhkHdbja2qSGKfYPaartBpZGuPFJ6PJ16vM6wVUHyZSCeUKkxXBfW3ExrNPchs7koRKN4ReptoLPCz3h",
  "key12": "pz1ffJPK2VVaaMK8nPHyFoNUrDSNWqMiDEy7eTf8bcwgzGTgYoquooKGkQMHUeYrr5kmZQa9Ltmoy7sqvJ3BCDx",
  "key13": "4vqL3L1jNvQF332YHRvo7TSj8xuCW4ScwYBcBNRKuDBupRLyuiPAXwrEoTDswuouWqNsfnmsJPmcWmcW4k6hewpU",
  "key14": "2HAGvUVBtAbE27EAt86RPuy1YsxsgeGLXy7kJs3ZKu7AN19qT69AwKhPjrh98otW79jRdaWisoTCopYpUQ36DMBh",
  "key15": "2SfARndnovtnUzi61hgj1QnFL3QoLH2m8RUYbx6PUxsmXjXfZM8KADSv3e5EPiWNoqgyuyiFM5RKwM5XjS46xJEZ",
  "key16": "356jy1HJRhPUiLN94Pnb7u5tJseSC4rU7ecD4iTQWmbjRVrftz4ABVwLQ8VTKV8M9rkuHGhMbYHcSe2sxdyhay4h",
  "key17": "4M84MdrnmoJguoBJQ2XhJJviFhJKAwnqPfQuKDVQSmsyUjqCFBge8X77CHLFJVyxtt43wPcesUPMDxU8XWzLKvHX",
  "key18": "cgXxjK7cJXENhL3uR3kirJoi1jUHffRzEtEqjaeNreFfDfKrzQxxUiK9MbzXr2BnDgvfrQ4crRa1MCmKabjxCw4",
  "key19": "2PNGzyB7c1g7BTRSoFBoVp3ShR3KCfbiJufQu9ReRAsDUoenCTvXog1rgCLXieiBXTFU9SkFHXi5kqNbgvEGyDwd",
  "key20": "5BqHn1LXE837FeKtAank43tMnsmeyo3MtG2jePRKQGWrFpMQX4ihshyL4snJzLpSwNZWma21ysqotJpxKD7vUUh3",
  "key21": "2kYs2DSMLJGdySnLSB6TqJYwncWb5rPKYBnc6AtDrdogm786ahZJKjhG1SjyqnyEqnmGu9VfLqah8aFVjYukcQUj",
  "key22": "qu5X5KZU3QCj8GsNyjYK43wZYud1qfbhcZbL5YJTWMfVGTBnqbjiWTcTmLQUPiyiio8bPbBZggPTRm3obqruCLv",
  "key23": "66AfmuGCAV4z15ao3ZzzoHJxCDJCLnHeZYu8KYY5ASmsNPgAjdKSqvybshgg3ssW5FKT3jLFfsdCXxtk8cnRqpm5",
  "key24": "4ZXXUH6DEHRAv3Tr9QK4VBSTkP5e1yfqEwAC4J4tP7QpSGThxLaVDJht3fXsn1zrZMF1aNgg4gyvybFRYC9yPQGB",
  "key25": "4JLKxMq4wKrWjFZ9Ngt79TevyevuUV6g64qzemRTN92pNTFs6ALsR3yzPrY1Kpf1GGa74BLLe9ryKDS4BMXacVEJ"
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
