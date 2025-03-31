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
    "EP247iH89RJ6eqgdXHVm11YCxZzhchhNUC4SPiXS9AmcVwvnEkPhKxdYNxK3dvG4LzS41M7oRDAFGcZTUniokbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c2aXk81uK6vf5NQYR9ggGX55idgxe5gkRxKVfUweqsfW4YqYsnw6JfE8R4WAdqzJhcg7Q76XVWqA6EQTgT7zTKy",
  "key1": "3xkqMsS67KcMnHvRUSqjtcpcBFJXoCCGETvbHE8sFCYzDH6csnrhA4QG8GvcKGR2Hg7KWYhkQmeWihCoqJk1ZCmc",
  "key2": "ugbSk74kWkUWJDHbEVzoQbhYr1ky5pWBHKD5QEvgpdarm4VnbwgHF5r65fyutspJkFTqyxKcQQYjGEUuSovogp8",
  "key3": "53SK43cu34VD5wQQnyidYpoN7xZg9PhH1LaWBJsn4293JWVpmFJgaSfET4qM25rW9tSPb5AxAGamYQXaW3jzXw2V",
  "key4": "23Yt4q3tQdvfjZWcK9pkKk1cBMTcWVvuh3JPWPBq8b1SVazPRbQQNmcAFFPGL7zDiRRinC6z9Mu9i4pjZSQh4Bg5",
  "key5": "T9pDsPPqPWn9HGsc9ZPkeBmpdpZ6Sxad5hLYryKkFdG6bwmdy4py6XofaJYXtVYn12U6daU9ty3y6KJ7woRLPAB",
  "key6": "38eG6njjhf5hwCDNsuLhW57DvLHMThdfXRPCCVWnZoZ8RydK4bACNoqsMtrTBMSKCBDpJZpTwFYJpR1BarUSXJVP",
  "key7": "3b56q9HXmYK1N9xk1GQVT5GddbvWx9DmALb6nS3xYkmJceUL5xdxbh92D5G2AqAfWyUZi72V6VCznBbfVMWjmmAd",
  "key8": "dzYUjwBvGbdPqLhTfDhFxsEryamfE2BEBdPN1aTdNEp9sCENoAED1rJEFt9X1U8dqTqd1TRGRYxHw2ZcGwNk9vK",
  "key9": "372APqkCXkcf9aJQcH8hmZkz6y8Wj3Q2fBbifNVEeHoG3NRsr4ar5rXiHTrfGpHsJXSFU5ufPWkKpZP15bfMzYW",
  "key10": "ZzCUHzY7NRPJAHfZnaqTqPGb6YEh1Gsmxe8knZ2nxCaAqExDo6bBSb6gHcDZRe6imUmx7K8a2DrK6Q3M1H7ocdm",
  "key11": "5nVipG5mr3DsZTFjDu6BiZyfHqRmxYaXiR3PMB1vZ7JcZ1VbRs2YTmwms4qnMbAMA4g3i1kVB7mS5mFwDTEgbkiV",
  "key12": "3FdP2WTBKWgWfb3KExoYbPEkVxNVXE2vsXAg1nVEyXfBaobKjcjQ8sGvG1AG1f4Uf536Bf7cqnPaSg2LC22nAtQT",
  "key13": "4GCPVbAdDNwJTem1GCwpAejvDUuhDPTSSAhXZCHkm66XqsQzXHi69AxAyFYZrDC3KJE1up6x55z5awvswHG7byHS",
  "key14": "4mai7fLyGNL67pGnmcUNQvYmoYE9uY58Kip347cHkok2EyxvMAxQ9McLempWC1u2G4qTopg3fLfFPZm1mc2Tx9M3",
  "key15": "3K7u49qLkgm4nmhye2Vf8nk2by1iRPAqpehnuAPXrZoqA4o8zZsnZEg7kNHHkJaFSykNawN13HR2hcDPX2Lbrek5",
  "key16": "2TYnKgn2CWc3JGNzed4kNNdxjpKufJ2a1k6x8TovwBuAMjYmyGXHFnhEwzXpS3hQJAdzBzyoRnLhDzTKqYESdpv3",
  "key17": "2rWb3BeEX9iBurwfKNAH43bxb5zh1Ne7kuirVPVQ94Xjje9Kc87hGLTTE8DCMLW5aHUW95vsgywb2mqCc7Qh6Lvy",
  "key18": "2PVVjLsr4AzWWQVEMBLWg4fPW7F9Pf3eF2Jomro89H212881yC7hFC7aktvu8Q77uNL4KpaQaLcMKng5DKDfJ8G7",
  "key19": "24ZW8GG46pikEZaicZsD6G1Y7CDsVZvGPJqZxSw5WVFpZi6PU5EcTdfmvWKstN2ftwzBq5QyA2XsGQ9grbULqjUE",
  "key20": "2QDVwCG6543nQjUk4Zasb576VyDTNthaz2Z3ziFXCoU16tKGyLZSKgXhH4hKnbvQsAgmEULo136jQUG5raJZiN2h",
  "key21": "FvReYmh2etEYe2mW7r7NNU2Pr56kYibJJ9pPiPfDiPjfFEsArVv98kDFG6JWWZdykRiF87552eeVcmdWj1dJDYc",
  "key22": "2xfdrY6sTAZ4keqEsNc5aJvmhUKBveHptkwWeXdpuW6R5giS3PcQ62spt1VXheVyuBcwwgKUcsmp2qdGDt5vogpc",
  "key23": "53ueHn1R1k543zmicaT8JMXwxj9YeKsAWR8UCLGeF88i9rRAKoV3Mc2y1njVPAKQMSRzigJatQqqgF5VNjm247wX",
  "key24": "5QF6ZnxKxkoyntVUjCC8tjaGLT7j1CfryBssc7ZBBovL6vv7fiBFvZ2krgp66r9WMPvGfgWYjdzBVzn7keYtyAV",
  "key25": "2cjTLFCZYn6fUcUWsK99LAG3544Q9L9S5YQcs6Cw1FpjAxaBKanyjHzHA3TqhQgkMWEP4p3hYsD1GhYJvKVLTMD1",
  "key26": "cicdMTgT3WRvsUVQCHt8fQc3BPwFa2JwTg3UKY3x6Ae64nSjebFAi3apMi2ZnCg3dAF5Lm8YdBEHt6Rfk85Lw11",
  "key27": "4X4UWpXYG7VYkKsfJSXDSq5cykXYaG3VwqSmnti9q8s5fAmdfKkNcVvJzgcn272dVP2W1gHJBLAcY6ycLV6Thau8",
  "key28": "5JoyA6GYqFguNAxwYnSFFYi9chdcA7WzSmUJF1Jb2znQWFPTnkZLUfGLh13Yj433mHJLcNB6KjSkAag5qkwQu6Qq",
  "key29": "4QrS8Y19V7pQCYqnx5xQtoCZa8o3jkcmqGAB4oSsYsWA5iwMVeWWpSznU4QugYaUARABY6BRKVhnYsU4Ucrzgcnq"
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
