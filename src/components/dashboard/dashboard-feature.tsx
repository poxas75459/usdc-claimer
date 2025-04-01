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
    "3insJidrPm7RtvCA3YnDYYUpj7z4hCqoQoQVDrpz7WPbaPWdYCMgtNbtv6eKz52MSzRdvqyLPqqNmYXDMtfRYLDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JxgKdZSxaUVSQT3eU1w5t7iqDphjmC9HqVQGHh8BR1cf74KkZ5JB54aj84daYF7MkFdDumCm8QnuAgGmWe2v3vX",
  "key1": "pQoTexcu1VSgjVTUoGcViS5dS5Yo5FBNvGpWhfSNtzfKdcjmm6ENZ5Y3eWycT3yeBYbhLWTvBexUtp45zQAxBTW",
  "key2": "2hobmhSQTfe9JkiHxwG9UXSeBLtG9hja1kveD9Zt57smiYQ74GE7FLHyQgzrXUEzmKmxPXmcwbLbryonReUsMSdv",
  "key3": "4GwtyVLn37Wn1UnY1vKsHBhUJfb8ZuorBK4Q1v3De9Bkh5NTG2Ww47Aqs7snbpJBGiG5s41cM8YGZ1mXFGzC6TSg",
  "key4": "321NWeRYazJ1FneXLPgzG4EkJdr28Vsv366hjL25ba9hCgziNhTiZez7UHbBGxmQ3VzevW9VJ4QkwPh16cu2NCce",
  "key5": "Dj4BGwTTFLvFwKELD5fQG9czUid32xGa99CE1EFGy7c3wjx5dd1BxtBFk6xYJRfAJX7iMatQCaXsc1AqWFxQD9d",
  "key6": "5W3R51grbFDBDYqj64seX2hjpi6Y2wufiJL749ktfmX3PeY5t3FjLkXtrYLQqrYZdcPfShZFg78Hfsxgu4THHAZ5",
  "key7": "4TV1FYg2fS8DJ1d2mNEjU4yDfE24duv3ZuF3UqeXmLLwMWgcgJgNUH5iJtkwqKGsThnkHQvQggLK7aty4W4bR5LL",
  "key8": "hiJ9k42cJVXEfULA1vKUT67XMiMRqo1j9g99iyZA8hNeV2aW91Rdq8GSdFjDffnxVKuJYAggHLPsAmsdRPFtUEH",
  "key9": "2tEovjd5L8NTGrzcg4L7QktJQtpWh9kYcoTArhx6GE32dwV3awcj9jahDTUmkuzzX4iEUzGPGekAddHiCW7hZboH",
  "key10": "GXmWj9nTGAy3Ygn2c8DL5HhoYsSZQtwpThxDze2BWX7unVG68HnD4YQscfesTP2yr9yZgHS8Cxhdutzn8GqrxSD",
  "key11": "4kFLUoZQwv6Y5ySnu6iaefsJ3EE8CXcYNyJLzWu94bd1xdtKHcsL6KFwKEyS8NugP3chmHfXYLC6BDArWS3rwXf5",
  "key12": "3sCbegRAQuWTvqResz3t5qFLsFcrC6UH8MUkAGhhX2QiENhdarFcizVsNuBx1iHWz58BwT4mfaSaR6fseLWfR8vG",
  "key13": "4jRgxRsw5C2FskN3c9RfHqjqrR8mLsrwwzjyKiZtBf8GDdQRNDzcwZsqE2qCgaVsZ6uPnUeSV9m6Jn4WPwNE2pn5",
  "key14": "2qjEpr3NZeX3tdLtBPBGydFodpqkXYW9djFi3aiu93zSACpS3aqMQxJUiV7STvdp9P5mwofpb9HqMfdba3qF5tHn",
  "key15": "HsAWqdvAiYechSykDTHxorMQfRwBF3wxHr8Pt8pgmZ3BxqRnbmXVc8kdHQqPjWS8ZdAUj2zHDDrvroBmjjEbuKs",
  "key16": "GN7gZKgWP9aFSvmXnked16CPhj6WjZJCSVff4fmKcuwauTMrCcUTaMiMNbQbEw5jNDrLp9U1pdyrLb7faawU6Pd",
  "key17": "626WEuHLQuXdqa5yVMr6oFDGesNsDzwPNd9wVRmyN1HQxeq5yCk3etUzfzzF7UCxxSmoHmL71Yg64qZK7VPGQvSZ",
  "key18": "34e4ibhoTKoKQoxGC1uyq9gCzjGdYNwMt8re8P4X4RGNUEcf1w2z1FuPqbAWG8keb1Rn8EA4faGUTPz9KdFo2i4V",
  "key19": "3yDacr3aFskrhvYhv13YphMaGNWaMg7a9PE7FRknGYWH3982mxCuDQKmt7fXof5fjyPgHesGkFBoFcYDSxLVzXVv",
  "key20": "3iB47yCgKBgCR1yNCVfiYoFftDDubaygPNUcptLoiW1R7sGEuoLwKwtVaMKDt8xEQRLqEzEfzSZekLWgVtCFLnHZ",
  "key21": "3haWLYrSoqTJNLRcApAxbHsE5AZKcUHvb4etAqM2DB6C6Y17hhSc4H18KStr27u1qepcfHkRXUvdpXCVrphbrtGC",
  "key22": "4gpavEm1bijNXvUYa1RGHG4hZSwYXgQD5zjGzkit34hkMiBN98X6b67zHPw15S1LyDCamvc22nuWehpEYAtPaLHd",
  "key23": "3mKvfM96aJjstPFWCZRNJrBs1n1LmtoUCeYupyF3wBfFKLqzRFnbpESEEYdADejZQebMrUdbBCD8AugCkp3HGjMM",
  "key24": "2quLJGWDktVEvuapwdWhzTe2WFPh1Mycv6FpRvBdFRSfMscDBRxWD2b9494fiiPR4pFkTRB5zjQjLkj59sDip78a",
  "key25": "WwQMiMauGDjpZ6cBHQnQESmmGkJ5Xt4WerYhHqZCzZKPzw2FjaLVF4VsJyUAtMyHW7nqxi4NQ4Z4z2sRad1unEW",
  "key26": "2AALhz4x4c7cDbwiFb1ZmcZyAi6JZyscrd2JfuWwdkrxXV5KXBxd3QTr8wLEafRoP3w2TdBzGeCrXiEr7z1f79gR",
  "key27": "4SGjrNtgKkJhh5frHXTc16n53Toz3bGLvPZmS7t6W9cKsPJUtKGkSjMEJPUFKrADTRRRmGtCKQygyFHEZK2Lgpge",
  "key28": "3rZGMaJPaVbHhMFyJ3hFNc4z9PYw6iCS2y5K99PW5Eu7DfEqWxaZ65CJRqxBdVwufxov3WucRJiBULTNomgw1PJD",
  "key29": "32nxAcLAUR774JpAgffYe4Gzmb9UKJsG7HsBzXaBtQuvu6VEJFGWU3m3tGaMaSNMoZVLVAGWuFLx9vHG1wZavVZ",
  "key30": "3AhJL6sgUpJfGGiUmbYsSK2n72idMdrCLUR7z1fPJKAySxmV86cHisazFsh7VjqSKgJ4QXqkY2x3QRS14vEcuUMs"
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
