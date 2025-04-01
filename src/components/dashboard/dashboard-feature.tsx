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
    "46782NHfgYg57wvTNwHhyiku8c8kvdxAT1bfukJk54xVaCfd2cbeQk4cUyDZ8wTXsy4HJ4sveMMJgjmpUPhXZZUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AKnhV19czgnKEgMo2KT5qzbhhaj5KApWkwHfhDXbHL9M67LmSmA5z2EveXBkDiaMG1WCvy64EhKLs7yWhX5Z7Aj",
  "key1": "23J3VFosL7iTAudQxG6sZhd6h977nPub1cAt64bZg29AiDLeGAVVeKLtxzEGLXwiorLLUNH5iaykqimUzyfdpHF4",
  "key2": "2hBR5Z1AjTmZ1JNJbwSvxdh7X3MJ7FfQSf18xq9qCUiQFR4n1S4XNpcSkCu2iGvLciFDcr2PVSrKZy8wd3yqvvCA",
  "key3": "5cCc5bCdXN8oq6KCAoewCmGGLfqG3DZYEEBuXw5u5AsxeATDZRaXWCwWQoT9rU4XUj4hyLq8rCbgs2w2AXptxkzQ",
  "key4": "QrDrRCz1VECgs8FQBNke7U7DNN64cvZdNzjQ3dgLScrXqMXYqAtJpFjaxexuzpSQYgdREaiFz5yZ77fuudt859j",
  "key5": "48mMxP4vmQkYsZNhVT8cZmGcvHKMQFC2NbTJ658zzEsms9mgNeRJByY2Hhb8JvgmgF1PSLemgaAqyreqmh91mUdG",
  "key6": "3KYri9CndvvnNm4yaXgsQv8cykkeF5MMP2pUyxeLYpdvbxoi82MjrGx9nJw3wQ9kJm81vxebRddzjppz2apT1iqc",
  "key7": "5eMUpJZDPjoWZMk7GMFZm4T3xKZUZMPvVKgAjiQ8JdpxXA13QcgphuMf29vgMDcZqCxdW978fj9tgTKCuxjbT9wq",
  "key8": "9r8JFgdBybjQiJ4bNAYFLasPUzHHiPcVdhwmyt559NJCJ6rdZLfPR3gphgpXqtoPBz4KDnhpQviZWtJVFtGdudE",
  "key9": "WrG173GknQAjQcyLtwuETiZG12tqkhqevZNwx6u5bX1nec9qSi2xn7UXaDeDLcFn59s34Y9YbaAvyHaYixRHJ51",
  "key10": "2bCSkg79qmm2yPLRDJWMhmKCa6caFQc2ySKo9xqB8ZuXL8YdWzvXVve7gfzSDq4Zw4Ggy5N576k1oiaBzA3C7KSY",
  "key11": "5aoWPU59x1RwDh7myKTynkSiQTaNWDcn3jVHd8T9mn5WK7SSjHRUcozFSgdE7WsnU942JL52NJt2odLHttf7h3Et",
  "key12": "UXxF6QPmkWJ7d4yspm2VG4khs5QBVKX42KNF4yNhmFS4z4DVnnRss5iMcnRGohHvJ9kMKxHjpsMSo787heRjXEH",
  "key13": "2joDqgrDcrhH6Q1A6uCBXR8CPdE9XAbH67BJKhBvCnnYAfVy31wLSGnPaq3WTSji8xVtbbgUStfWNappEcpXJrJ",
  "key14": "4r74drVbv4GM5W3ri4q5J8sDKhjHqzCyogvCs2Q4L7cgoi7nFwSsa29yWAdjEeQesiVfseN7CjUBU4Mx8FieWW9C",
  "key15": "37zMetKtZkbE8bCGY39bVi8PkF6qHtWzDrL8kVdVRtqNUj3zXGGzHcyDMv53peqm5bXmt3JpzPmfSZCF4vnjL1uN",
  "key16": "XmzEZK7hEtXuSYRx3zQAdeBoGAZhAaTWUf5mA7hKvypNgPqeDLew2xVkyWgQQG1tn1asbR7dWzbXhvvjnAiSvY6",
  "key17": "2SHuebqmnV3iqMuwTxVvA6iXbgyyyBnnHSJ8bnxyWCpprSmdvMNotNV4dAdwudT76QKPkrNHQEAfkoLRvMyEr5vi",
  "key18": "37cQHAuhPs6d6FRsqfWgix85MSAxRkhCAPwsMis6TgjFMtRyaGo2z18iW442CNMo3EhwRmtDrmZH6BS8wu7Mn5nK",
  "key19": "4rVdyE7qVuX7N5aia7xmCCrVmsrMfmzv5s6oTtukbhXeoB8gogV3zkB4KHkpEFDUQ15HpcAXmjtynJsMbnsRq56b",
  "key20": "5vkYXEkDCjh44Amyeh5kEifdrAusszfBFP2foYus2Chf6BjcPhTvXWLL3BLptXHjffFSyHsZYtosBmkWToH6cUWc",
  "key21": "wG1UGBxQvwkEj2aQcFxaBeSw8sQbgDwVyVqyY3gQdH6hoSW8Pucmah31H1wsGHjzr2jwshV896BnfBHWMoJwpyC",
  "key22": "5NrHiPJ8BmtFLf16MMjLiY3Jx9wf3yVT9zDW2oJQKd3SBPJzjkj4yE2MFZst1gYwYZGLYAZiCtQ5W5cpXRK8E987",
  "key23": "3mJoY4LJa694SpYATP6QKUNYdLtjEhJt4HDdimivB89KinnXKFBpkHy3h7ocuoiACSojUW24VCEUcMbgFTAn1SpX",
  "key24": "5xBV44Gnqyxjw2PRF6y2nUzjq4ZDiyEq2nXdFiMwBzzk44nMb4DPNwSTeipGgG1LDDkosv4a2u14QbryjnHNckkv",
  "key25": "2mFe3o3rzEEFa3UsHDdTxmSWYVEQpUwWY9ouVQsuobig6yDGwsuFoZPFG94aVaQsG4da99bRcrne3XWbRpDXi4gc",
  "key26": "3y7VrSJ9tKpiQxmW7eRaWJaokn5kx93o2fRxi9FDo9qmKyYaxvuWHc3wYMD6s9qZLL2c1f2RPwi7TeGKEdVxMFC3",
  "key27": "5rKfDq1sQ12sLPJbkAbPDnSDUPkzfj4j6TD8dyYVq3JYQz2G6GeFgqPwWzWtzAWhghfX5eLmZzNJDRNv7PdvrM2R",
  "key28": "36oZpevAwfvxS8nAnh8y5WnZHFMUZWFNFJPikrtJrDmJddUKUCTMaXPp9tmmKySp3ig7X6tmg9KiwPdccrR9gKZN",
  "key29": "49K7ULtLuktjGv4q8dgBushsSe9rCYzWLuHKZqXHAqiXQwdNkKeGj5UNSkuu4RScHowMqSUGFK6bhszekFFwAMP2",
  "key30": "2jgGCifBQrfdBEihRrfYmQLSCUr8U1VVg2QZ3nsyb7tnc1ZdAQf6KrngLcH96YBCPf9peCefxr8MS2quCR6nm3W",
  "key31": "32QApgnHYbZqVqmShXzE3hxban6uVN4HtGJgFvVo13z7R4AkNK2Yg9G23J7fqPQ4FfW4BDV5sHztsparoZ6fMsqS",
  "key32": "4NkApw3fCDMorWtJhZJEd4yVj79uVXdGEkT34UJNsqFjro8VYveTzoePpDG7MZ7stTfgPeGFbcteTGuG3CFaa9df",
  "key33": "2DUb9hoD3xyGTJygUNfEuU5K7YxXezYMeVewZJCRptBKhJhRfDpVS4c6Jx1yfnjuLbQQuqwr9eoye5HfECuc8T8i",
  "key34": "BK5hCyhZba19apd5K5SVUH6sGL94b8tKVZweoPZzYSAhHfp6uVjx12atXMDanCzfGYn6yEiN46yFgGoWe78evWA",
  "key35": "3yECaMVwquZNqnvy919e2dR71vpd6L7C6yAT4WfA3iEZ5MmfpHqgohbABnaqURLpyFi78UbuuXK4Xw5R62oq9Kni",
  "key36": "rAz4YnjmUYBoe3rvhZ6jbu7UZryXb8rDeKDCk842WDbY7YNNodRGPHkLB3p8K4ggvQcGkPifyPoLgLd3ge6h993"
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
