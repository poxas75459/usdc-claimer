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
    "3zJ4nuAWnnNcGSHtN9LP5WJiNW2mCeLmddipbYPz5oGUxR5eBYezwPh21bjqkT1yCWyFwYE3u5Nz1LmczGU6wdbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54JXaTRHSxFDtvRvk7VAwZM3aapshkMd3PabjGR3qRSydrW4Guk8ori3UBQLzCKcSG77bCtCax5FZvG4dPaFvvf4",
  "key1": "4FFad28P8c4jrjZuEccJPQzG1NC4Vsydysg1o76GRPD6zYWmasLozR6fTwUiWuNH8YCAr3JsvXnaeQvKcJDg6Ks1",
  "key2": "3p4iWocmEGXnBC85YfDYQC2QAXRgNRmS86sT1P4EsMoYNYTDkpFRN4CMmoygPWYefz2ZZ7oEBZa1Q1gDrwhrbuF3",
  "key3": "2X8PbknJk8DyRYn7rktmrjRFMYAEZUEaokPuPJUTX8ezCZnu4gXmtoL6B47D8dLdb1UnnxsWd8bcorv48kuncFuz",
  "key4": "31qt3rEaDpXcKg147TUE3zP9xfvsgXEpWZp4hR12dneHH6TwhZrV2uPMc1n1P2FfsjGHRVpmZiYgugBGv698kDZq",
  "key5": "2ME35bBnYQKLSTzk3GpHJYG9HjKPDjseVkZ8SsPQ8MhwbxaVPwRuf7mPYKvN9p5pvbdiyGg8Ssg7RJdd6NU5Bujc",
  "key6": "BYTA9iCcaKC47h8BaokTdWvACGAcefToaodFCkyKsgYwECUCeRQoHeMbUQe21PzpcoSMfyhQdxU9aihqAL7Mea5",
  "key7": "27Eqrb3pTteWYYZ1BWGaAumBgMS22RGDGJcNENGYCaaWtA1L4HyCbdJhchGEHTxGGyiJBv81AmihBuZShMEyT2UZ",
  "key8": "3WqbzZWcsrEc23beJL2Bc7SVNHXEZDTpogzqMEm4uGx8XCpucYbjYHgXUzgFwAjsywtRovoT9fVQcyuaQvbCuSnd",
  "key9": "jDzZN9wmqBNu799DsgJwRF4ZAD5YAsLaXPVynUFZwJiV9EFLTexfEeYLmwTAnYJea5FVjRWHQ6UpLQHRzQiUUA2",
  "key10": "2WfAMmmGU1pkf8A5sCfoPHwPV73AVLpdVdECt1AvQMPgxXnXr6A1qs5j1NT3skcSSXJGuTmwPTbRXqnKVacCR34p",
  "key11": "5TS8chrK1ra956uLQYriRtgV3DUHm74EcX61qWpKkkc6VMAVGccoPQ86F6rEGSP7QaDse3tkZcoShZGZDBAzUKxC",
  "key12": "5sLRbZZGkxqRZ7MfVDXDa17gqNNwZTdvG97ZTrSaR7KBcKqaZ2grji9eU6jjbUaPRksT22g1yEW7qQtXkHnNAjBY",
  "key13": "gUvr9jqTiYuS5CHLuhbhzQFSfFJHSgN5kpPF1YBaZD3LhTEJn6QnjhKQU2GNSAbZUuhKtquBdLnLiySnRgFFNyo",
  "key14": "2eXaSF84HbuVt644QJP9vMQWpLzYgw9ZHYVrcow8qhTeeX9ZHZLsjy9aydnBDMAnzMPkLQKtnrYrMPDMi5SQadfx",
  "key15": "3HAYHroVh3yXUukrw1H3ZcLKnUCsKLJeUjXG5QrC3iMsedEwGLYToVzRiVPsu9zR8UntY34SMfeu6su3p2Q9SoK5",
  "key16": "52qVTkTdZWbuXvLiaSww91oMndUnHvNnb6znWxXRMCHbo1jyLLV3c7RhLJr7ByMG5QQg6HHU71BsVor3ghPTzQNJ",
  "key17": "2Dp73KiGm8V4YS2V8yLjd3y7vgmBuXXFafvdK4b3gsyLMVPCQtH1oAVF7kBzJ1yP7WNW3fw6Sgwfs32bHwf39C2w",
  "key18": "2R9HP11fNhFGrAVi5NZVVLftUBHw6NuEmavzsR8y4WFVVA541opNuo2H9cEmVPmJ8FaCWVPFmJDxNkBm5VoUg34B",
  "key19": "Ktxciqnv8B7MAYtQdpGiqh3yoveHpBhYFJu3GLncGFaeSmgNG8sezmNaG4XPxhSjCHvy7FtVJteFadqwdKJa2QG",
  "key20": "3Lioi8ho8mhsM2UiUnVfFotQp4MGB7mzCCPKGFuzsPWGMvdTR8N6sUESUS34ympjt3AHJbMgYuJ1k6DQv2U5ZYaG",
  "key21": "2EuATV5ihNcwouz9wu3A2dHPJavSxUq3VHaom3s9c2hrtAK4wAxv4qAJSeNq61bPbYYMTkMNGj5Ypsx8uEU1wqQr",
  "key22": "5g7SLhjws57X6qhPqHQ55r7QSmmbhjJD665Zz4uPqrWNSfFBTYEVnuxZ73kge2mm6VSgZPy5g1fL8tp7oNf9zRzw",
  "key23": "3NuqK43WeA7tJqK9baCCvKRCUdTsxQLij7QTzpsY1G9h1ZyS977dTzVAHShBPHYFAJtFjtnyngetPiJH2zZ3i5p8",
  "key24": "5tNHj4ZHZdecWBWT1G3uRUxWAVSRMWNwkcU1kShgx2CWS37H96RGbgymLZT99EaXLfgR7VccaH5yaSXgVSmreBQo",
  "key25": "4YofEJcWbwf85RZ6V9K4dFAhqiMSytKJn8MLSt7yXx8TnnkoUm25NwW4a2QGQr9upkBJg4hrMQYBpVC1QtaYL3xg",
  "key26": "31yyKKpQY2dZ4SABYXYNtLV4bLSugBaoLufek2PndN1GonCyULmvWH2MLu8HTFnbd7syWtAVg8wVXbQ6Z8zXfGDp",
  "key27": "5shu2sDrJkPog4C7UPWgDpp19nvvBVzVAHTnqGkwqkwbyqm5Q3BfPJGVap1uuNLqG695ouFQMZGzUQNwQY2jju7a",
  "key28": "376PZWT7DBPdckw2UPnvT9MZeDiiTiyEARsLehgvXV5GiceMoj4imPqojndiWr3oqoTByxsPVBR6S3TzQL4aD1MQ",
  "key29": "539aDG5J1k6goJjDFtChYTdwCB1Bfy1XWqaF5keaMoQYHU7XJDKrKw9L7xP3zRBBa45u85LbvqYLje5HYobatFYw",
  "key30": "4VcnX4MPwDPE8tCv3qV8iM1ADTQKxnME7g6Be12NQPfrfJZQNnLvZrnsJxqwuKDkeawCkJ1EdSVs8YGU5R9gnvwb",
  "key31": "3CnZR3hBJeoiQPN92kX2CsrCivdAsxSBDRATFHYzAmzUupHXRtoT4yDyfHM2QB2pjz8pzEeeLVNkGS2T4roB9Z5Q"
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
