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
    "5Lbch9JQvELe5kYPRt7ndSCwhce75b1BbmiXYGvnda6w4B1vvbXyFZMzaVv6si98r2Cr8UeMCNchrTXAaUfAU26e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DPB6AEjmFTtMKvRo9PWCbDym7RuhUDcDmRFRoeYVMivF7TYByz2pWDbe9WZqpAWWtQ5nDfBTqjcX5iEz2Rh122Q",
  "key1": "Y38dack3gn7Hv28Dcp7ZiSQtB8d94MQZ3wDGhGx9EYhQ9yRymdc7aeU7ZRMHrF5k5T1MGKhcJkDBjU18DcKkQFK",
  "key2": "3MsoVirfTXZnyWyMXJpaf946XEV6ZpsHp5dUPGxsrw37RmYvJgN5i6q2DGE26Mg7exE4Pn9nmETeGbExz9HGsawV",
  "key3": "3TDk4ighvHqqmhew6qL3qouypzZDEddJYFcMQ8BfxyZXBUL6KRG8T6XJ3abqEgdAracq2aXB357JySTf9P57RR8T",
  "key4": "QnYW1jfcYfSQURYhuic52bvYix6m6rW4bTMhf32J74iFSHTr1DPgiD7pMooDKyX1PttcLkDXkaSq3XvA787FMrH",
  "key5": "48GPLvjbeWMUc38nkUFdWSEFGouguZz2y59oCE7VSjX99uXiQT9ecqWVyYdfnchvDBGDPuWDPFstuWVKQdgZn9XP",
  "key6": "2x6i2LipJ1BzgiZ91oXRpmFKxiiiSjiXtg3TRVujbTMZNwgbpDx29CE8RZtKLkNcVAdDMzhELa5SEndqCRZiVqmC",
  "key7": "3FC5dCpevvATjquZvG2uyzajpnWePmeympStWDR8aTLuuqyC7gp1P1je3d9jZCFvTBivhpwZQRYN2XtQimaSahfF",
  "key8": "5H9jgcxjf7GJKmMyEf8Yzkbb8sVxTkCwe3miE4DYyadfCU3WSAFLkMaUvkZsiEsK9RqWy2JJk5aSqXvwAkJGbByV",
  "key9": "2q3wKeg5n6bKLSDTiQbMfSehtrZHBdt9S1L4RcQrzdQcUpWeTaAmFX3fAiSHipqjueJ1CAystSkkbMqVrDrvGnv4",
  "key10": "5JAYSwt3ahw3HcHgtT7mtKTP7vNkfZapVUxxLgy3FsMW9v6nYk5cNxdU496wEjokqbUqEdYfK6EykBXjWv9vb2UR",
  "key11": "2wJU6eBUKKK5LP9uESMtqUfzW7RH2JkwaEeHMSk4AgU2rL77wts5dcCLNdtpkHLRkFKjGXAghuUWzJh9Cgtqk5WA",
  "key12": "gCeWmCwY9tbHnsuePC4KBn6ktCNA48vS5Roo7N3My6ViNxCNNkCXGPzQcmtZxmVNbRFf6SDWqhG8vzYVbkBkW5V",
  "key13": "gkqhgsxxshc5yYTqMeA3MQym3qyKoG8reRmtgYxMX1RYpYuyXuwToJ49FCF9Nxn5wCSK4CRn6ui1DYXzBh6pzw9",
  "key14": "4WLwJPN2waVVgBg2h6DHimkbFoB7vk7ckTP24gQiKJatPB35NqmTbrWb4EsRayEkqhNR1nBdyWZspUh7xMkNRX6R",
  "key15": "64rC6vZ9DyG89wQsifeuNYCBKx3raGPDczdTTyZsfBKx6Qb8A5vc2UFoMnd9fbcwjgTnLZEdw2QVTnk3Dzf73utb",
  "key16": "54E3b3T6RxrrHWcdejF4S7ZciDGfKHaKXETuXVRdv1uQ3WqG7458Pq8WRB1P1fSgsAMVoucHEd7owZ5or5KB2Mrw",
  "key17": "3gzC5ePPRLgDFWcmojeCoVsuoQxbBVEQ9uTeEwdGye4JJ25jgCcTCvEh1nmJaeWqv3QTdg45j1SWaRhBgNNwYjhM",
  "key18": "3WqQCPNvax28EP7wH7GmPstCDYGhAD7bPZ4E9uACzUJY1aozgq9nVgH3aYNxLTzkMitpmKQ8x1DrELDXNiKuTZ4s",
  "key19": "2aAqrcLbZ8qSyXnKUM5hPM82S9uYgMpKMvXMsNQKnehRebjKCTjK5hZnRbR3jJm6yLjQrNGJpzaT2g6uk3Z549Bw",
  "key20": "5ZikAVf1nJqgpWhcp854EiKBs8LLQGKMJ6GF6AHFi95BvygWYuu8ZV2ySt7manGcasTp2V6GCPMpDShEv5RbDQwo",
  "key21": "ogELk4fxyiVTDJYac5A19QoVrSZurrbk5SyrddBUHiVkKp4KQUgciDgLVGRqYLG4wnV4HSkSpjKrVutZgfxL2Ji",
  "key22": "3k1dwnf3aFRz4TSrJDo4z3j66D7tCt6EHLUyCkbscDvcV7eb1D78apgSYLu5MTWTgsSkCsv9pbCfzpDFUZYCPgAJ",
  "key23": "4eVEb4snouKFQSNqUuJXiMbqjtE9JhpqNiXuQG8yfbfMYmJFKeegnReLuxWdgH5C2U1X6TRgoWsTcHuhmZyCWBZQ",
  "key24": "FA9Aee4j4HoYYQgJoGxcCna59HUsNYqfcqiX8SPNXLB8zXtRsGwxFpZFQAdSt7FGs6cAEN85zfMRir8v4nDbo8b",
  "key25": "4iqG5bXeoZfDwrY9V22yECPuBHeTf5nA4eiHyPWRHzCZF145MN7pTyF5hVK5vRmG2rMcv2mxFBBMkwt1nyNg1P14",
  "key26": "3FdwQTV7Wt3bAmX5eXssTFQLUMawkZLWSGrGJcHtVqf5UP788bctWooToURxJ8bLGMmd5NzgqpwXErsuPTRZchjV",
  "key27": "4Ho5yMsXaf5cjRaf45mbr1JZiRERBFxAPPTSr8zQYcr7rX9TLGcRXoFgsRccLskw9EXbTPHVzwbdD9r5p5Rn6uCw",
  "key28": "DWr42R138PXwTyzkwZRzHSXs2APHqXUPrpLNU7ckf6HUGe2kc5CabW8QbEc7Pv8VRBpqvqM8mCcmwDf5JNva2ma",
  "key29": "5xiSf6A5BZcEsVgzkExW3zjSnB2S71G3ek2URNJqnV4JtZG9dcXkv5idY3sX1iFPV87nPLP7o7AfEmCZW7KNfswr"
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
