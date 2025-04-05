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
    "4enLYG7zy8atP4KtyAkovsh5dKHi6sC6bxmkE5T4goc7Gu7F24J5czpuemNZygeUkeiSJsnBPcuHnsXUC1wz1dSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ytFs8jAFkWRhRHPV7TaZrcCfQR4kgv6pzgtmXTuYxYy3doiFEHyz6E68ms5A4rKjVoHF6en6M5gycEWHuVniYsw",
  "key1": "2AQCsvqvY1w5tGnSTrki4pVBwHAXo3xygvBX5e8Tq4WKvnZXmNsv5C992jcPj2mb1355vj57CG1xVzDmyiRFFMd5",
  "key2": "3VMhneZ4ZDQPd4ffqidMrr9yEPMaYYJnX2kcBmd1fXnYz1awWSsub9mGtJ24XAZEmTcexxDYQPnMTfXabrTTVshk",
  "key3": "nhXQ7rogbf2K1UwSAQCqRSwBATK4L28QbpvuwCu2BwiwhemPM8yAkmPvBp6HLsm95Cmh8VHp2qZEdtJ2tP5SKgQ",
  "key4": "5LwFznJmxLyGXpke7cNy2xvkNvXiFTfHTQrQ5Ybp3Bhk5iAu5p72mL7HN4mhCu7Pb4ugPhHjLTWTTAgvXqr1Ne6r",
  "key5": "pT5MBMDJx5qVjTJZZHGrZMEy8igLB7NP7wPFF3zJrQg42cjzDF5dhfC5CU5pEFWMhs4VznRxbchiJohyNjdnuL9",
  "key6": "5dds2SGrTXhXHD7fXKpDw2dzPhfpAdx1vVm8bpGcSG9yRtkzTMqBPuXLErEo6h2MPao89KjtKXXpJhaXWKXv5D9W",
  "key7": "eL2h6d7RxE6ssnJpybAMzkBKUsEApbAYHyJ5VCDBWjDQvpcESQJMJRFLUXnvp11StvPZVcEVixGPvmUAxD4vfzd",
  "key8": "3gb9co7EZwu5WPCkNBEFiEtarjsDYE3UjMoXFmteoF4dSpAVQu1GRqryvCJDfTzUwzMDviY6ryCwuH4Spn6FLqyw",
  "key9": "4uRKZuiY14qyP94Cqpdgiwhc3qUeg3X2fcCpg7Bjxmm8WpSB9r8wyiJAXnutnsBnjQ7sZqcKnZqYBs8CBc2puN5",
  "key10": "LLvpDvgCFdxAF3jGPPCnRR2gB47EJZGPPtddUVp8W1P7gVrdPrmQn2NusXBKnpE2aGbAixjwbj8q4oi1v89zKiV",
  "key11": "2nTzg2VPVsuygHbSKmSFv71CR81sLXT278Me9CzKurGuXsQnRc3vwhtWsWmKbpZDJ2FZisenhwyZyKixyzX9CEzC",
  "key12": "wBeqHput8YE4gJeL6f62AX4vPnmi1GDoL3WWvVBRvWmUaM8ezLEy8n42yhHBHrxY8XmFXLu3AoYjQutRiZYNPge",
  "key13": "3kGDN4zEc4wbFxXzC7ejX7z2UBV2he9PHphpomJ3FjAc7u8id953G1Pnv1LWsSWLiErj9q8oWPEWqdMwsw1Ugc78",
  "key14": "4FDDGAzxUdraHzxRPuC2Rydqj6z6V3CEGKEfk2yzbo74PWZzk8BfyQf7UYXzV7gcTjxF3JFfni7R6rPEwzmg5qeV",
  "key15": "2XxDrzJThDELTf2qmeAnLtbXm4xSM8Yeb6E4ubmfei9a2oPLmSH392iiZi4p7by3ZkU2owDR4485rfpuysXG47kj",
  "key16": "2v8sC3sy7Y7sT5PuC9XfZEksH4KFF7wU56ufLpPPKjyZHaoMKhB1VCiwu3Hx1jbHaYvqEpXBriGEGLYMxxfR9XBe",
  "key17": "2QAQBJdJ5JzEQe7AWVBRJtjXm2Lk5pYmbo7Ak9jgGrrY2EJe4cjk55MmJeaxihAATkmTe1S7cPkraZrjHH6E1k3v",
  "key18": "3gaNgPdWyPgw9GH9QubDAW7zkFVwdbj2tutqweJsZM2WLDZEJSuNPUZFk9mVHKnPxM94LfgkmCxA1HCwvbvbW7cA",
  "key19": "4D3aGShLB3gHTBES2vvsrrKKktkusjxQL6u2HtiDTBWcZUgtmGPKaJs6LUb3rKEZXg9nCvcAuFHTY2AJFsLejMTr",
  "key20": "51XHsSHCR7p5vrvWRbvuBWMXgSPuEbyBaySrYprpw28pNRtPUWaZWS1M72ryEa6cuyRM13bDgkPzhR819E6W64TQ",
  "key21": "51AEx1LBDpeREgAjDgebKX9EAMYLa56CwcqGyRJW7rr58juazSYt2NUJVn7eVY2T8wV7NPuKygrZmYsQp6MUXQvh",
  "key22": "3KPyPDJfzPN1KwfK7SnTApvf5o2BLLVakgUrWKPLARhLwHPWffNWKg1FQj2MhWfgxRUsHDedXvgbum11SCrx1Mm6",
  "key23": "dB6piPWFyZC3AhUFGNy1TPEht5ie76Dd6dMuKLj4R714RiA2pfMbs92NRkWeADAKPK8QcEdgeYrnw23aV6cjqHS",
  "key24": "3VcXytfFEQbhJBriebtAtpGdcs7P283LeZ87RBqJo74AoNpgf3FCnD3Rb1PK23nH19KiGDnhXZxY6bfpcBkt1zFQ",
  "key25": "5xhfETwBVtjMRAx8GoTL2VKe93QDgYxNtCp5GkCZo6GRNSiQrhHwsVzRyTdmUAFxJE3wjtqQQDAqVtP19oLNVTt6",
  "key26": "49MC85YAQbaZJakBvUak3dLZUv1b1rkzF4sDUA6PZz1WkQy3viuRtBVTEpo95H5opJjDBhH5NsUHDQQJCztKR2G",
  "key27": "MZ2CUTb5C1NZt1XvZi7yehfrzzN8Qtz6NKwnUZzAnS3X3TWErzvsc5Y45LmFNoWQeqWzQ8W3xp1kBEWWvrGom4q",
  "key28": "4sBvwWWPgtSKBpyCnrFrRbCJpJ8XoqsbDiwSFyrUvVRtrCQHm1DyC4moxBiPfwwTqm3L4tZszpon1EmQsK8C4Usa",
  "key29": "4hNRsYPU4zBAprv6iBfz3k8P47t6QqoxUDmU5ioTiaHqgFwFKevqQbuEtxw5fJ3L87YdWgdp6xth72cEr3iujLha",
  "key30": "2Cfr3qomwLYxUu58BvcrY7H3dBV9B8J4bnuAG2475AESUwfx1kG65ykQYQHHzbojv2AEA71ZAVJqDdK3bXc9VS4o",
  "key31": "5wHabdAAG6eDeyDPLTXBjuyHJDG9q9M2JzXroLEXkZNHGo7qWYcCN86Vj8hzcMX6gTbV9pMj4rX4XysCcpvvrueS",
  "key32": "36hrJdizFGtmrbmkAS6g9NSjdr7SRVjR1ro2SUfnjdnjNPwuqA4iHYdeyQjBKn4pTkfuSsPqp5RPRbm2Wqd9nzoc",
  "key33": "39kCnSnkmmuEnxWrWPmHV7mCE8wKu7w39uEE7UCXAvY6DTVkBSraZYmGXygbdxWnQCcJDAQmTMBZiUg5o7YkCtJJ",
  "key34": "4Pny5bw1FFkgurL2V2iyNnptMtvHBjPCXCK7w2nx4EVRv2vfxAiLFSfg4BQxL8coDTHARwjoyDhddduQz5McbojZ"
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
