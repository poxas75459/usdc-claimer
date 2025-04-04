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
    "2rGB1Rwgb28b5FcP9dJXJHcJuL9R8KVNbxwWxUvk3CRAXunnyj3rYQxYY75WHoPLDHE5pVp2eMyBt4Lck1qBJ7wg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57EDERPhDPr5c7zdCLodVMoabT2XGRQY7RREbqqPqjsF6if3GxWpwFnwfA8DWjWTTB2P6pwvdQSZSazEBZWP6hYX",
  "key1": "4RwV97aYd5Ua7r31zZy4VJngRNJBKgJ2yvwrxzU94YeH4dnZrxFtua3bQRCZAbbUUPNwpqasVo9Tr4SpZFBi4czH",
  "key2": "X76Cwj3J92RqDKADE7xft2guSGDyuzaqaUb4ALyhKz9RfQMAhi3T6vzAus7s5BVDw5P4Mn4usULoALAhnCUVcJu",
  "key3": "3aX9RDQAXdwQKhVgVaFCh49qPwiesVdWyCt2wV9oe5fvV7Edta8DT73axKprJp4gpYDTD8p8kqsxJ3cxxBpYSHQA",
  "key4": "B6MdeCgEznwEjDeB9AFTLecs2QpAK1bR36ZegKNqkS4d3F5qLbDX9kDE94mAkuQZkBACxrjy7FHFeKyzxLZfrU1",
  "key5": "Cu48WTpYCV7Gd6npXD7X9FCSqmMChFH3aiKHEADZGKCCJP3vDJfTkaXxZ4KiDmKHUc51Gtm3ZBuFnEthBDgYRDr",
  "key6": "3xYSA2U5hL1pLcbRAbjLTaDFWBN1K31A9B5ZkM5otTUB2Ub4JtFR4SDonNgHhaGYthrfvwaKWv9an5E9yrj899JU",
  "key7": "4UAGhf8EEyWPaEBaFJygPxC8XibhrdZz3rU7JzgZdinHcffZM5HA34pS9YTjQLQB67gitJKhrwq85ARw9YTKxLHA",
  "key8": "5g7F8LkyR9mUxSq7rmhY2s2SaWwZjG571wm47UucSC69K4yxm5gomoqPSe8dQaoV939FGLhiTm2A9oyFfFDwvC5Z",
  "key9": "jNJCT29GVMVbcB9geeF9SFQtVjDjq3xvFuPKia77AY78QCWyn9SzJhzXRXcW9mVhssTAh1SBNDUKubZtjtoJK5d",
  "key10": "medHHnwGkjrXKArVuNzaeCBvJCZJ8imGJUwx8vnGhxW88DASWJX8SzYsbwYaEsJDxkNgzHuhc5kasFgpQS1rBjR",
  "key11": "Z9jHpR54jzEUFmgRTkPXzzg3GqrYDFQuLprprQZABt5P3LVPHfyryLa7Jde9Y8KcFbd63qU1kxrHRESPpWv2aqk",
  "key12": "3xvcnDCVTNnmf9sXvCRLxJMNvGFhThwQ2BrFLvkuF6cU7aFbu7scEjkbUgjPKcjJmVpYT7LHmu4aXAJsneXutxYH",
  "key13": "4vJ2qLhj4WPysvjYAiT49uqjZjb4YotU7QBwarD9X8CwWpfcgMjjmFA9582r6jB5429cJT9pj9sgjUxgqvjFvPQQ",
  "key14": "36qQv4FUByPEnJeg4wHMVo3TLXtYbSvjAB8ZhHQXCCCEncaNnyZE1gMyybK74zZ9RqpLGz5Az948aYsfD5o1zSYB",
  "key15": "4ptBhaDGnLVedKCzNdn5DwABcJKLdpwdRPipaAh2sU13HciiXUGvjVS7LxiyCVY7u7MFv4Cvf4865T2isfhpPkHL",
  "key16": "31wHWm1NMRJ2YqR9u6woh79og3Uhc5NL1HnSJaUQGb7JLvACNUCufcaTV4q2HLVn9qcPCrgHpXFpWi26bN9dCTUB",
  "key17": "4dDaFAgcohHhVC9cGgsxV3TMhjdRLREy3cfGVKGvABbbiDUPSkX7mXVh9SzoTiFE72AQw51KqR5b1dVRXRuWDke8",
  "key18": "5osvAmqwSfQKsttzhVHjAAKqxUpohhRMyqUAkpEFAvBH6BZJEW3srxCrJYDd5JPZqon2dGo8LBsg14P6CyDHhrR4",
  "key19": "5xcGxfBEoU5apvSRHxZ8hQrXdR9ioCE4cLEdx3kYtvFt7VnyjGboVxzVjsjkQUs3E7knrosPUuCmtTwt8Yhdh198",
  "key20": "4tKopRQv679HVLM7HgM72Bw7rPJ8CT23hxbN8VwLidsphZhhbHGcstqh3GTRvEbQm9DtjQzFNSdKHDSxG5KTJZbH",
  "key21": "3DrguMwX7gRfxkWoeA2GZmusADa4zMPiNQ7tbprXcdnJyxTGW9yQUqjSNKpCo6FoJ2LBc52c35pFeRssDRx5gXkM",
  "key22": "2RVk1Gt5UD5AdwmiMASmtwrpgt1i8jDietYciCxXj9RAfQ7iZtb8enGk1Pz1XJ2EPfjFrQ2Ebs8pvEzGe2Fq9yGD",
  "key23": "4gRvyx5dYjtqpCoBgYsw6zSQQjt7ojk85KchvBZWdfG3AEaAA3hDBaZLLJmyXPdGVM5VmLCEVV9caRtY9onEY58h",
  "key24": "5gwyLU3je6dv1uUDApC2mGtTF8p3jh2AbCFySi22s6FxqNQUDWGeEnZr9kdj7s73yRr5HWPf91CbYG2fiJUPTEFP",
  "key25": "2uN9CaREAydgADCfYwpcMgLtgMsH5YhZSDLvTy7tZuyFF8vZjLGxSTPeYyUs9Gdv8caMazhiRUo6fC45PK6CK7Xi",
  "key26": "kYFCr48BfgDNtdstam2KGifWf52v9T27MmTVQTtMQtqUzYqjzNBm8g3TowKm1MnvcuHEFEDkwY8FzqmYguRms8H",
  "key27": "2zXDdJqma2oULGVtzqWNDHfakJmQo5fRXrEKAWLqx3mm2ETPtwrqhJSvLubLjxFqaDeFY2TuqG3xK3L7BN8KNDCw",
  "key28": "xQeuSiRBuniwRz7JkJtHqSx6X9SDcPC5FktpbnjQeAuoDTa7UFVagd4PgR3x6G1jrdhny2e1KYwAukNPLiU1P5E",
  "key29": "4EwEuJC7DGdh6ssfy9v6yUQKUpJAaz1TNU7FtfRVGezPegf7PRS4i5y9PE8crL3K2LhGfuTsCq2eiqHYBHxD38Gc",
  "key30": "w7dQSpToJRWj9ZfbJqWbMJtHgZbDJEqyrqthD7iQMukBbjZvTUJBQ6HJpPchvYQr9nLQA5n4J1b1kpXUyvchQuV",
  "key31": "yo8bZksKmiVRyckeBpBdxUbafUy99wPuU1gppRpL33i3H4M4DsY5hjvvGFpXRvJJFxkbhjoJ3rheb3Vz5YufML6",
  "key32": "5Faew2fdCfnYCuMfbnRGYvDZCGv9GneRhXHreMApco5YfPjkFmLcG656qZqSezix8ndK5zJ4BHjnGa4Ge66BdX8T",
  "key33": "5fj8Ux6wpSh3zV1inqLpxFGPsuhExrVGy7VduBamLHjAdRzc9oyrudkUkf8rbDwFH4kgCUgeaAMX2Nb54gWJm2fE",
  "key34": "WLYoGxXQt5LoLHrepV9M3TM6Zj87VU7UkMTW1o1zD5Vv7AZUtgBqc7WewhjS7AGT6QtwsCrKNEsyifEHpEwFkqp",
  "key35": "wS1QAL9Uv1TANZW7nz9cdeMm7qPFFWgZnhYU59fsQJK3ur5VoaDNnhjRcRWCTEqAqKCDxR7N8fzFrs2MK3p7prk",
  "key36": "3MFXpZqECQXA55rfzSGU3KDtx7rcpuvj5E8XB3qVWmRA93PsConpNRATqMthfrQRkt1mrZrGiNZsRKG28yabYmJV",
  "key37": "4Eu17mgj6yFzC7U8DJBme8YJqy64qXJGotm2YebYDkroysPR4tzfsXDrFFJpiXEELS68c7K9eMVTTWaW7x8pmxsr",
  "key38": "zZM2QV1hwBWNQMosg9T56ZnoyvcwcCLcffopXttBS4Ab6DydDXvEBXXfTmzqAmaYriHg7cwZC4XFM8JG7Q9CHsw",
  "key39": "3uEGysBH7k4ddiEh76wHdU88Z8HVEfQKi4kHqz4fDsk2W8VzBfrjmsCKvKFaqFuP4dtuUM3D3ENusjgWd7Qzq1fF",
  "key40": "27DkJGJs5oz5hcLnmFYc8f5jXFPhA3NaQX9C9H6MpRRL5RXcEKPV2vgFKWGL4YHfXK9JXkqNUvPZqypMYMdkybWQ",
  "key41": "49nbuBJ8fdi9CiD94DY42BGS9Rk7L5AkbHm9VxhHtSgP7ogJ2uf2YkQwhCnEuZrCpxMDReKMyRwWha1H9KEWiFE1",
  "key42": "3tZ8qZd4KkobDXb7LraJzDrunJc1BLi9sXhGuMSZacmFXGRtnaPxN9JD6nCnfR7QuuotpovxZLjkbkkkGhiZiFN8",
  "key43": "4rqJfBB3wu6qurTYyZP9k3kLwmifjFJdk3TnMbqw9PT9MVUQAfwa3E1eGjpTzxsCQ7B2mKJjdCkzjzS4qr1k2yBj"
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
