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
    "3Z8JZ1SQLjADgxLpJuiHaMLVgKUfzNUVV7Csxpxx9uAcrVheZAHi87ibKvqDBx3nK5kG2YbMJpqy5Ur7mMnoqzsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X7tYZtXHtSY9tmLeVDcmMPtP7tdTaSBcMxG7ryQVjBB2846fPNZhKH6Epas9py53H5x3XhKionSN5k11AXwZhp5",
  "key1": "enag3pS1okTfzik4NZEgyih9T93g75o7rDZBxiUeDeFs6hKbxPAjuRe6UuqQ3HT47FZJHUTgbEaCfWLgqoVVgKG",
  "key2": "gPw1MxghPFfJrLnZgeZvR5YZ44mLxwGMdvGfVzFcEeTFqmFUkQvj7Kct8SxLqWyamZjDULkyxErjmwZNRQpVhSM",
  "key3": "5XodFfaUeq8RD6jMHSZXhg9x3B2gUzzXuPy4KdWWardPzSE1WQcoZ9xQVdCTVDsrKN2LXEFttAUs5PTFPPCVErwy",
  "key4": "3tjbX4Nv3kYNmJR7SXWYXRqdP3PJrVJuXCfXpVCt3nVgyiZH6D73bq67NLeq2ddMmnQQd4ApcvVk1jruN96B4bru",
  "key5": "4XHVXMZLW6aF8KpCNVsVrdheUpb5XtZT79rGPMwgkrNryic37Rkh77QqEJkvQYFqfokvXA3CCQ9Dvjwf8riGGw8q",
  "key6": "3rmSXooCz7omDESW9LZF56M4kHuR5tu1wMd4CpCJPWwU3a1uHHTTuERwbBwj8hhCEYaoGYE61oU835bK9Nu2tjAn",
  "key7": "2exGFBtyTbySGdjHEog5yHsZ7qJz9zDM32Jzn67XXjzK47ih4KMS9GkKdDo73a8jx5w7iKuhMrp7WSEvdsqKY2tk",
  "key8": "2Tvs1ZTA6b8RQXcQSGPbqUq3uyUo3J7c8Q12TDd3Eu6UvgF7R7ap4r28J5UWCobaGr9vSj2qHgJ1VZwpoUN9QawJ",
  "key9": "3gUxhSAEYYn1cmkJJYZ6qpCQK4Lv9SSZiTaD49KHXvuAyzCqjVRopPER7kzWJP9NcSmxwRRAU5aiQ1DFhF9aZXBm",
  "key10": "pPp9SvdKPjzgizjjUWxzzW5xfvD85Lxi2H8zsj7mRocP9LEzGNUPE1DnsTPeA9FA1tT1ADKQuLi7TD3a4KU4p6e",
  "key11": "kszeSV8dh3hYfjMLWXbFMeT2AEUiGWWAtRcX9NyHyxfSbYDLnvULxuxEQ83c99LMtdo7GVUZcafMozw15jzP5m6",
  "key12": "3hBELSy6EjFe5gcYH6sB6uca47sqPph1oin3Sdb2wL3gRwa3sVjw38M8rEPHaQYNYJS8Emy5EWdSJh27cAyjXLzF",
  "key13": "3ocTYWKo75G4HnJK6UYcXjpvaQa2b3Kphwf6NjHYcJmLPdKZyH4nr4hWKYuJniGV18xfXSE42VXSdYJG2bWreMdT",
  "key14": "4FYVVb5HDzKUeS7pDD2WPRu7xCNw6LoAxACp8Y2SWN3dvgGmR6qLXa74LWr5vGDRXB24v1u4wJLukQfQVfFaZnbw",
  "key15": "5tVYZC4QFSMejEnVuXbTAjztkxiKbgrdRECzbpe5kDyNNmCrK5axirSawtwzKgEGqP6gabyPpGExRxtjtGrNRi8c",
  "key16": "65CuaAdk4Ji7Uez1ktrgfNMrQbZkzG9cx8qf2BGUjdPnt43kVnGVm6C7rX9CoUCUJNVWVTbAGm4JBDom88xFLpaT",
  "key17": "2VNa53fuNTUN7nQCEDCnMCdsP6dZDKrfxGcy2EJWSWvK6zegJktmhr9SyYn5bLr5TuSwD3G9m4ZEH4fXbBEawLJA",
  "key18": "573PKyZgJJmZgA6odf7KqMmd5yD5Bb4edSCPsDiktq6tgq8CYx1Gxb28a3nzAQcNiBHhUkQN5HAzEbhN21Nq3Jcu",
  "key19": "JDgKwgVuCYUm5xPfAS1XcEGB5whZFt59Dz3rspWXBNMRjhtA8wMKbFVNpD2ZekqdMYHwQcntkPGX8aEgDkvYNcf",
  "key20": "24G3vTtZk8HxVCKrPGs2tUyWt5h2yqJUa1KzsQfhQvVeHMLL5uqLy9JwyooLnNLTgHGVJmC4gHeDprmUsMAewmbz",
  "key21": "44me92cgzqhurMyS3KBKyn4kuRHt2b6CLwjDsY2uS192vNEwVyNkno9a4piznqd3zrX8EyCyLHiFbwaF5P5pk63m",
  "key22": "3bB1HgsW3NKQrpKyfv3dCTrvpuHiEAMpvHPRLQjp79iGjghMA7LEknVsNmBQktpbV73BEo77qDq45dMvPZFNcps2",
  "key23": "3JbSGwBcxjiP8Z7sS6UhjwqzN87enGTDPb1dSdW4Ye7hpQ1C54hHp9635nL4Myx5CwhyFBZ6HrCPbXrTPJ2i9oWb",
  "key24": "432krjf66FfNXhyeXX5PRHEnifNqverEVR7tfXSEkup2uJdcRJpqvqhx6gHANoUZH7uN2osn1h59tbN1x4SQcFCd",
  "key25": "5ra617tbLzNvrzqjPH1ruU6VWsyjvprD5E1DUeqmm9xrtjBBm6bY6hw1uen6AxDJnFCPqiSG9irYy57yxuTzMSxn",
  "key26": "2o591QQ2Gsco9u18G6EnL8vp9V9AXn2u4wAWy3gckRpeXmSEz92EA5KvsEremnqZzmHQJ4Kda7DLMrhtyzjbZoMn",
  "key27": "3hRpEZpMwRsipqg6bMfSQUR4vc4Cejndtzewofvt2QQm2ieyuHErQFiMPF8pJ7MFqnNYhS798ZcfetgFMnX44VLQ"
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
