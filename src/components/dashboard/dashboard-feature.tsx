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
    "R8sjeB2bBwtPNh7b4BtJZeb3dNUWFM45UPVwFEPyUcREHJAW2viVP7qJ9A5mwiqt8fEKKQA86bwypNi1sNPsQsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23s91HgCpHZfpfjAiHKm79VEnr1qdqWnRsccQSCNyek1GbdzBjsEpVULVUkUuQBXab96n5pdWqb7WrEKZS5KoAWo",
  "key1": "5Wo223qk27PdJeyWJmjGqAKU3yMnAs2iEYN6eQUx5mChiLZu89Wb3SJuo7BGjFGiTFRyn4rVKThccMffNpL28Vm",
  "key2": "51rVo1wM1t3PLBMzSsfpnRuRM3R1eKDQer9MBRFqcpGayeCMKSQdV3EeuupR1FEKLU2kAXYb3CFmTMgt8ZyFQ9HV",
  "key3": "4fsTHv9CrMJcQnhRoxuqZ4CVyHaCjKQCBjUVurKx98EENBHQdA6yoxPxpFf1Td5ybAZAnKdEJhSEckrsh9dFU13i",
  "key4": "2sW1eGJZG7gb4CtTAEYAKnCT7Ly8ZRF3bcbtacKNmQ9SKrtiEJmZDG9g82Rfvdv5TrUt8cfkQaq6QwXU8kKzJVUj",
  "key5": "2EJDBSBtyJ6FtXVpBcetaBYVAaGnd1Dh6pZWnvqqn8wzUJ4pHDHibvirVep6JegRrvHMmmCzkT2futtr2Ppb1S2w",
  "key6": "3fAxTUtUSa46qH6YKdSZhi9Go828wtB9rjnmkKW379zbJCzp5C2UqEcTQctqeLxpszfCvpRjsrFFwmgAnaPXA8Hx",
  "key7": "L16TNjVNkVs62yYL5aMjuVyPhQtvJ41Er536sLG9pk11fzehjfpeZWhihZXdUYEG24ckW56VG1vxRdJn5f4XYqg",
  "key8": "23ZqWS5rQuxHruwL2hKTFvBUUtw9m1ZcsFD43Gg9RNy1b1w9cX9bLCZ8DZQdeMGrc33Go2uKgFPMi7eFXKv4R6Xa",
  "key9": "2MSZZM5cPLRAtPehb9fFG8wPZ97Z77u36gALFLJc1D7DnDNaHG31mugEz2phFWayAgy3FiAt6zN5kA4sNnwax33u",
  "key10": "3xkNUJnrVWLqkz8YjPPeYHqD5aX7Y6LN8DfNJb7f8UaeFtQB9bgvfqtSF1MFVMgSGNL4gAdnTPQ3yS3MTWmP5WJm",
  "key11": "5vGa8Te5mCndKFQoBnMGU3r8o7GYJG33RWv4qbXDqXKSs5nW44cqZ4Equ5opLyGq4uNSrgF4cQQj8KSc4VTU89YL",
  "key12": "FgW5dZEwU5MYYtrFJsLjUifLMCiB1xTmwpyaSrFj9bqr6XEXFZPzj2HYQBJ1u1owmA6bNQDtNY9MjsQHK2dHicf",
  "key13": "J9iNM2M3jfDF4SQXF82BbqrLtphximbZdPG5WtGPmBcbr698GbsCVGmBSxKEk9VDphs23aYQ8SJzaQPpnow7E9a",
  "key14": "nuimkMNjaN8wxqa4qMPpVbPLxUY38nxubtKQPsa8d5byb1eohJy9SdigYo71zfQezpFB5kQJXS78ZQztiNc5yPP",
  "key15": "35Km6jtDHMiTpYSTJDRDLX1xSxsDbqUgFohWbHdTnJc6BnGnM4X6ndfyNELAfyXkr7XAhPpsTF5G6Uh6SKmn6HL3",
  "key16": "4UujsM8s2cvyJJrcpTkLFgyP7B5BiACDCakyDefmmWL6FZcxjcZjzB7GCH9K4mXzwGCcdU2KGhebYt2TQivzBupF",
  "key17": "5JJUPpFyCZkLBj9NwGb9T5AJcQTpWkTzphKZirTcnh9QxHfKPhVKkU9gqVXxWPc9sd7byQAuu8MU6wF1gyBvKCAT",
  "key18": "5zf1RhAbAFrKqjTE9JrCEeK9fWKkD66F6sifKBxHkecjuveANFmg4WDCEJ52bPAMrQ6kFJTH9uCNeRqb9FcvF2rd",
  "key19": "4R5wUNXiK2n8sLHgDEN84uQRnnR3wVnoA2X8dXEwwnNborMCiBQXHWWFjFzekFGcymLUsnCcHxCMbyG2UWW6aGb6",
  "key20": "5bk6ZBfW6kFQvgQeooT92LPvZDmTg6TCpvEavgKd6ou9uEpGiCXBx1pZXcDiiB2TcdPSKx3g9rpuBktT69JnUSp6",
  "key21": "3RpAj4wX9SoQ6EkFAqydHkJfmthQVkTca223BWU6nFV5QzyLZvnZGGSgSyZHbRUzNLBH3UqDrLPjEbVwvkHw7jEy",
  "key22": "3UTSjZsJjCEq5tJxV8hdidifgTZmj9ydnT2pv1R5C3bnoyrMcZSTeWYpssTpjmwXv8HqZau52M39kRTzymbQmiQG",
  "key23": "5q1pGUxHCGtJ1LPSZpTY6WfgpDrBsUHwcfyfcHwH22q79PofsV4TtSv9g1NSZPSBRQc3oPQNjzQVKMvMYURaubqf",
  "key24": "4st8muA5tbDUWpqNYHnK2gP7fawEM27pGjUwaMyjqbdGxJqZZmdzW4AK9Ypa6HryL3DN6dMiphW7yxTaVkvKgM2A",
  "key25": "5VemfW2qsEukCvYKRso6Q4RcpjQmupMAF4PEqg5X9moviv7TfH4BPxsDfeqLpveGo3yuk88rdk6NVmDxiTxV8t9c",
  "key26": "NDgAnaZ5aFRHQ12V3GGFtYpS3xjbBWm769FvqvEjkNwhEoypqq4Bu6aMuPj1FUtGEKntnwSC6zQ8c4Cw7B6Gkrg",
  "key27": "2kzavQdXfTG4e9E2ViKydvaDnXMzCmp822qeRrwq87xDdnkZvcski9o2W7y6J9y3XS9kDqvnJ2jPUqq5eusgtSbN",
  "key28": "5QsZnAuNcb4Bmdn2nh6zc77knUZeymytrQ45D7wbyf4LrRMdCb4kJJT7u8u444kagK3tPt4sQ5FayvrmdVDhc9Yp",
  "key29": "4zcJssV9By1A56qqVRNtvC2nnEkLHgRMjtqC2vQvMVWHXKHEGQaJjPWbsDqJuDenTaaCeck8HytaUMa38FSyJQai",
  "key30": "5ZhMzNRei6wc2TQ6Qc73tuBAKH9YaBM32ww5yezL65mjJp7GHAyDkUBm7Dap18r4r2ajAkCJ38M8sXvcbDMGfauG",
  "key31": "2KcWhxCvYB4bCSRTEAGbqEzCErj2vsZjfWvJxJXGXZR75TUutConSmZRcq2MRiYFqRDZAiR7hzz7TxLErL8icbjo",
  "key32": "5SEdLbDMt2pQJHYyx5kDeWF9cQwqy2Zofj8XDyL6rtGKD6MHB8w4sVBViWtvpf4cr1XfyN2GSQM6JErQv5P9969v",
  "key33": "3TUNnXxCMSN8Nm74siD32rB2MZ2jcvmGTSvsvddxDybdGh5iYFdnnh1R1nTu7a3JXjC3EM3Wx3987eLFvMNWGx9t",
  "key34": "3T6bk11ziTV5SkFWJGD8iNLY3oerEKLBajtkdy8Z4yVaDXUJh6tx818R5paKyUu7vPVQoiX6kQAoYvbLUtLgduof",
  "key35": "QjrTvmYDReehNdc14PedkffN49pA55B4LEnVXn2gsWQsC7o3SFA43SdB1Y5YAvoMxFX5h9nVbDrVhyQTs6pDaW8",
  "key36": "2gqVvz1WUiLe4de5UJZxVYbuaUjR5pdNvTTixe47Pof9JrroRdAj5JbupSTHSDJVEEjRXvHaBaLEcDapKPUeD2UW",
  "key37": "45D2B9C5pVdksAnCuatYSgDyoah76H4uwKx5dYhABf76FVCyVUxuqjqaaowpfZKZBSkeXyGNZtaYNLhz6jSpyRaA",
  "key38": "3miRvygNqH7eoobmcVdJ3EoueYj58S7oswaFAjoy7a8z4ezrpRuCUASHymfLBGZvS2q4ikThKShuVA9TWbegc7wP",
  "key39": "5dyW5uBFF7pKt9Jhe7dvrnBWSay4EALbY3y2eSbAMqrNWbneBMcM9NUmfqe2AWTGJHUZGpfrPFZQikvKDsPmm5v9",
  "key40": "5jMx1C44MSW6LtifabEpt7m5FNY1QZcKounvkMatCSFGRzaAT3fw6u2Zd927HzrzFckXgRjCWN6PKuZiLg3dCqp1",
  "key41": "GxEzR9roN8TdyMHjX1zmBTyS1v4GtzicuTThBi9UmcpcCqfbZB7dx7R2t8QygqtTEjs16Tr6BW1RP5pQJj61zBy",
  "key42": "3k1K1Goat9jnoskezWp5fxVGdqtRksr553ScP5EiJtHDjE23XyW9XrrcpqNrVtd8wf5aSCbMBiygPXqmw4tpXLeL",
  "key43": "PAMdVvdaP9uavmtq83phe2TNek5QLAkVvoA8K8wEStzwd3EPkiMzVyzUmPCLUs2iRTy7311P7FtuggkHzx4mULh",
  "key44": "42fgBmGywWxJ1YCUGn7yjzMbyWtmHeZ42aA6DGgRJk9cMCQyr2gfennrqpC4436C8vyV4xdb19SpQKXL4PkVSvF6",
  "key45": "4SLEWyzG48uCNdgByHV31B3zjCZ65gLty1fsU1dqQDeN92AZLWT4LFyjHoA4mVTxeVB7KhXrXn5e1T4xboQU54DB",
  "key46": "3zs3AP4AhzQg4pT1rqxDbNrgGzMCbfzxGKNXFPGVjxCb6Jg2soJ3A4HtkKKjar9nHMH43HN7121TNTEmFx6BpFRu"
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
