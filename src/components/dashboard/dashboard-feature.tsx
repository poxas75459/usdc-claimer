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
    "RyTVkSE5wsv3wJtyu4cCR9QeDBFWProAnpjKxVPMrxwUkfb32zRQJq7fkA7LJZY3oeTrJDabzViNLKW4sCFsueW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28NgyTBvGLbmFUqDrGhm4HanRDo3pEyN5a8bn24tg6B7Yh7Vw3F6Pq1wmNwu47bPvjNnzTD8nmEiHrK6KsAAbTF4",
  "key1": "FdMNjRxqT4BDo4Yp2FsHNAWmScwdjiSUpNdF6AcjJ83r1MAEN5yp6byV5R7A5KM8Pys83HpJA7Ajk51grHvcR6s",
  "key2": "3m9FWd2roamk3vnHhN2ftCbm6H4c36VZG9FgNYTtp1NLNrnjAzemkyYF5SSPBnfVsih2xGMy2szRgUJfdDizKMg",
  "key3": "hQQYz3tnAqBa32vqEYkmbFi1LyfR8LBiy1L62NRwAZePsDxB7U53A6zFZRiMT5ftPiuyYfGkWi19R3RKMcj7aRq",
  "key4": "vDgCrvF9zABkwwdWSbkTy4p5CAMXpjc3ejE5rzfsbN8HSBLAY1KfLiJqVp4D7GHN2E7AX7TLGudnnwov2cMRdf6",
  "key5": "4xBPA6bLXJ7xM5shBRtoop1DtWMMXdcgckjJ3JRas7U7EuhC2ojv765AhZJAfz2xxUBAGmemDPkoMji3uvoedxc5",
  "key6": "5puFv9HaYfX2Z77SA6FYMP8y94LiA3taCqY7U3S2XgXNECwBf65YzRLk2m8QLXnQEzJ835c1TuB3HhV9jGMvoecn",
  "key7": "4vF15YCxQoYGLb9vMFSwD2rCeBw3BbYuUHJfTi2jPwASKQaUBJAhqHdJeBPnPAY9d41gMEDSkmMQCJfDDWJbUFV",
  "key8": "5ZRkZsUE9pMFCqpsoTCUxmkwnnEwXCBACpH2cQQ9YzVUbvdv7YBLZK4EZ1xUecSs2pzdRV9fqPpeFzhhWiFNRTvr",
  "key9": "3e6df4WzfXWEDuergD3dmcqTw2BXapvbahcs5Y2pJak1Z7VsKcSUZQAZuNBmuTLKrqtKTxxKswZm3aEWFaWMVTMY",
  "key10": "21ME3XqPbseF6GgM7Hoxuzwk5TtgEcfurjmL2eVDMw3C7DTfoPKrHCFtZ7Kxu8d1nkPQSmWoUFmxhXsigaekJjhv",
  "key11": "ZxhU5FLmETCeZWkpLRwm35RCQg2Qv32sDsKcr2vqWfcRzew8qSS12ThVAFFYrS1UicktKo8Sxj9tktkui7Wb46L",
  "key12": "5qQfEnCeebqTQvL1BtNZXD91LLurGVGnPXYY4z1VfEcXkU92zaqgnu6TLoYqvGmp9oGTZy9z195bF5BknCjWNQAk",
  "key13": "4Vg6mbncoySuRKwy4f8gYWknUvi58qWCCGc2dLYFZx4GJzKrz1tCZtDsJVpqbeaWNY3GwUwPKo2zcxtF3iFXnn8w",
  "key14": "5FAwjd3nzkSSzF81Fp4enThK18PR9eGAxagnEMTNkAcTB1SPsrScdsgE9SJRzkc9kGLeEJveFsqPJ99n3H3HcVqS",
  "key15": "7T6xAPAf2nRUwMPPagQFyETzjKLPsEyvN6PT8wTc2zd5E9G2H3sapTJJmARo9QgQM25nRgd6KPdNFdeNfmij36c",
  "key16": "37HhuRM87wwRfK5CdyiMueu7cX2rhHwKuuRg5uWmeTPiRjikNkfZLYHZH7WXbzPEvEuYXBp1CVtExiafufKNrjrC",
  "key17": "2DxzxH9qq7u2PpqFY5PZ3nGiySoi6EQgHxGQJG3EiQZQqZeveHPYvWFCAZqnDN2jRZ4tySpY5HKnyQAfNNyitkqh",
  "key18": "ViBe1WymaAeMHDjzsKBXcGb8WuJQisaKYvFrFrRyRCC5715kpazgdS4Kdw1vpi5Nb897nXUtgxcLHoLseebj8jE",
  "key19": "5FdbZ4gNDtSF939qRL6Zz1BzLbiyyxnBCGTUgoRb9a3qtXkUa7uNcuYPENjMjfLuiCtWTbxyEKzNMBF2vT6ewaM2",
  "key20": "5A1JoGdBtxsxJQzGDAjkntr1DG88UZ8HDroLKfmLvToxHMW1VBCUimzBULqBC2mJZsrtozh1nc7cwKv9RpmUo5RK",
  "key21": "5j2Yycy8NkN3YX1iUw1KERgKNoW2k1DhwBnn8VhyW6MbjKLEX9TxvUCii9LLfBYJTqhb1dW8c6CyAsAw8TxXxWZH",
  "key22": "55skPgfsAm9fvFW9RvawojxYDZN7gPLMrUPAHef27MJHMvtGtBjXkXVWB7wH6MUts47hogRZXN2w4oUBTrQfq7ro",
  "key23": "ymWzrRKkMYD4Z9ggba9mn3X4wT25qntBTmvtjt43z72bnQ8e8ABdraJBhxh1ueWeRPHhsJWLQ4N2KREczU476Qg",
  "key24": "4TxQ8BeHGUVCd7H7Y9TndULEFtjsz48MJAFAxgmJZRnU7zEpHdiP8mxiWy8a6F22EuwHrxp5D5xvfL11Vc51aKFj",
  "key25": "3ztwQk8sLMaRGsvuKYSH2DmUHVLGvFy5tFjVW3t1kYYaWEwnAN6my9stPYbSSfQAs1xmTmjDVxNa8d3s3jFSgAgF",
  "key26": "5gWupkvAtuJ55ixkPAcUDbqnb2KwV7VRBU4cCq2LwUXJS14dWyU2THhmFNhv7qSiFYaaXNsLt9iDGZQsU544mxn4"
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
