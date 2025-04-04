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
    "2BisLv2etYvcNRnXUgVofWEEhRLkGNQnv9su5BtVFbWm3WjsLn5wWSc2SoWccfKRJdMPcvvVZ9Nct7c3qWMdSFZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bWsPpwMFkn1FqeMUVukSF4fwoeNLc1Tjax78k2Mqa87scUfcWSVyFmyMgQMGxWMa764xGvajPNYtB3zSVrWdL6R",
  "key1": "3siAgP3gBpd8nFr6UPktYE843MQgdoA6tJEq1btvfdNNY6zEgLZxKNmygQPDrb24em8x46u4L6YDJzZKxFGhdk9c",
  "key2": "sp8zEHpVGTPqo3FRKf2a72CnXPog2UTtVoQSss4AYXKP2g2k8JGedHyHZCrBc6EPcXFbEgr2Rx9jb3g6Ltm7uU1",
  "key3": "Wtwp4Urr52uWMXsxv46scxqUkxwGDPy6BcjhBhqRPYrp8Xtk8xAvC1zgwXbgz5fRQj6oaJFedwSj3ADztgrSmgU",
  "key4": "3c5cszCaXn9qkFKiVRqjLoFePKUpTiscJKzxXY4iGfwbTTEUii3srSoUHnZQEkFHW3uYFEUKxZ75k5ycGji3XrqW",
  "key5": "3WMx8KME3bzcek5XRpyNxxJGk1aAXQFToSkBztvDDzV4LBH3bTDBdb1PWCBdoc1vLKGpxvjNxg28MvZkvg7rhxAs",
  "key6": "4FWdKCqqfqNGoi2AqPdCQ9yiXXKnEeTKaNhdUi7EdRQRzMLp4PsFjSzn87txdE5a43zxtjExy3qEcg6si5e8qTkq",
  "key7": "2MrnzEaK4Lzx4GKANvXFEoCYnfDUfm5X5xmLDkDByisYMLTGUpLWNkLVBbu7GxA9FdcDECWQuV9RMoodwUCAsmvJ",
  "key8": "nLfEDesPd1dHt5JXpRLmvY2HkUkyP3D8NwrGAPGbzY4bgAd154AvhLGvRrjeDeXvUu5uwDbFhCT6oiFYiBgNjpW",
  "key9": "5bpayRnG92RH6PSqA7njGxaxbiK5aYpaWPAhErhSK2wpUWUeJGQKMKRmdfz1WBATYqsghLuDPJmiFTiHMQMTXjD8",
  "key10": "4szzSiX5NHrbWRcxc7f4roygE6hF4CSVdJTLGoM4W5kEjk7EckdzT8tepYuMDn3SzKUcsT8UPNmr8FQfgQnbxDWF",
  "key11": "4yj6zrDse6DVV23dTaUazGQvbaCQQy8vXFwR4gdhpT3DqHs4AWtNNUtSxhvqiy1Dfy6fkJ4s4CRTDvJNAVfWhDuD",
  "key12": "GpYucwox6Fqo3XUehPWYCEPBz3WzkahDi4oMNMsMJspxX6mkcfCDwEAd2yzb4qcKfiPuSrNSWQTPBzhJDnBXVph",
  "key13": "9MyZWu8VKxmkKif1vgSnGtnwooxuZPRxCoAfPHiPbZb18V3Q9dHqE4V4jg55kc3HfWN8waLgmDtPnWhsisoz5gi",
  "key14": "9CVS7pMrZizmVDhdNu9kbNUXZ3rjjt9tk81RyjQS38Luw27iViHNxY2BriN3Lq8uLGRvJ6Z7UK83X9EYLD4QFZy",
  "key15": "2mAWLwXYb5BvAuR2PNS12biEhV7UzypgPikjwMcHT6D5oQcSGhv9VcDy4GVik6AJY6kazFFZM8RawswJVmXEwFxL",
  "key16": "22HW9fYKxuRRnQuB2epw66tE5Qh9AzRMKoY4Bum9tLXCHFRc8XP7A9SqDNWS7d7nsLwujJj4z2HGbuPtyoL4K9Q1",
  "key17": "3t1vCDPSikQNP9GxTjVcgsyzpcaMFN7XEsZ5k69pNKoebZxh8sTfGoPczfQMEJnyMYBARdmhGcfU3oUa66DYTqJ3",
  "key18": "2b9roke1ujDC1rgoVxNybXce5oNZ2bZ3VGAV45HQZKvBteq1WD7perPktc4YetwfUcNCTQHu6L6GiULRD7dT2PZg",
  "key19": "4mfcHbXHt2m9vkAmNYXmbjz8tLdBGJVBxs5nT6DgyQF6JuFrn9Mz13F5PMxGB7ZbGzYT43UU33bqc7YYqUnBmMHB",
  "key20": "4wTUqAAwtnTrv9aoiTHmAHTV7UA9U6pFfwdLb8fs4nJ4qwjdY2Qa4Wuwf8za69RiiPtABPWSKHfABCJD9oiTgVyh",
  "key21": "4f3CGQhWF6pGoXXd5YYybvwCuqeGrvig5j1ajLCyf9PYxow3TWr7wKKeXcU2HLkQtt2npxsiQt6B541zaZuwvakk",
  "key22": "49wiZeP51XphfiPyCoY5smVAUy7G9ofBtxpoFeAHx6Cvr5hmoYd7fhraFHASSxp8ShdMZguHDMxcEVN9EwNEpa8B",
  "key23": "3gKxaTUitbUF7HrU4r7FZUwwLRniZfMxKuvszQkQrfquuMTQBv7HNmttH9LMVYqbzeusdxE6jpawp7MMhkojRTN2",
  "key24": "XwKXqxq4JQV3cyQqrXGGniqbKPkKn8wzaAuacHGzSYQPwcSydn9WU9WUDtgrrjYVCdP3mshzExq4S47qooa6K3s",
  "key25": "2NWEke1KaCffZYWktqEPvQPgsE1Qiz98gmXyoz9MoX4gpWmcDs9qmfqXhncPfmBMzgJZgcQFpZbPohSHp5e2Npgo",
  "key26": "4kgNy3gWYwycUC8SRWYWRxGKnkQhLbaPQdvvnNMwuxGvD7duTHSFERKWorLVk7ygMyHkcpLe7iZjvB6F8nDxb5WV",
  "key27": "3ZuVGwo9PKpFxAKZ3cZdEJnwWQA93y9xRBuTeiixY2CAeeyLXwFR68qE5CC4j1nKLgaU47inDbafBaJwYqscbUFF",
  "key28": "4oUDMWZjUrsWqC8ptZRuEH6EN4EbDNhRhMWB5s3FqT8ppzHpkznbc6YgMj9uhjPFT34DWQ2XA6GCPEfDjHUr7PTa",
  "key29": "PxTXAMnLTzryM9mTnDPdaeEzintXdE36Vi2acPtvSLhCjX8YkXsRBwGQXyrRUYLzpzFH8gJ2YQ2prfvpkAsJdjw",
  "key30": "2Mkte6eHskCdWvtdHYZeqNzpxGDJX36BfR7jP1KMeV3NwqXU2B66LGT5F7AbvKWURYq1KW4jRXvXcRd3rFbpFW6z",
  "key31": "2MefmqUgbTJthBzcCam6omp2sEDhBJ4Ww7i6X6siPAZyYuAFcyJmt4nt2Ssn1zWg7NWUo3kC1up4Rr5NQ5PuDtLa",
  "key32": "2KWcSoBs2YPK21fPCHmkUZm7gqWer3mMNYxzgAh5LmKiCMBRbbT6vCXa5oJJWZd4krW8dHwL26rePjBZt693pCgs"
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
