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
    "5Zx8xfgK6uvX5YhXQozTBj6UYR8ydwYF6YSSSzMjS8vnATP8bN7D8K9RWy3tNUcQMvLXYgRcF5eMHZF1XuUoSbTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eeTbkFCuq1AMAGDHW6WRsTrDK7TC2R59dfFJ8La28kuGGJPfxpLy5cUyQhzzZu6mJsEjrYYgxPnRyA2S4aMF6cW",
  "key1": "ZuV5LN8592vNarkFhXNdQ8YyRsA41zSAN7kd5vMECgMmdVHy5STc3fLtFTZ7jzbJ5azvEzDRwfpPwv5bLGbrYVm",
  "key2": "4akz347mEXjvGHHFyFpzKeFvbpj9gFVcGayaJGh9UN3Q3XTrWsF3NgyouB9Wp6Gag6oAgLsd641fEjSGvAazH77N",
  "key3": "2m8ZN2BqxxqCpiK9NERSjTA2RNQVkMyxDM7PmxH1zScK1jR2Cc6D332m5uN8U8CxD7gBnonGPtLxmnR4kxUy4FgS",
  "key4": "5ernWqACJ3VqQZkppGNUWaEUZhBAkLs7XXVSfY9Dmmc6oJxLZ8U7vMnKS7gmR7JmYgwKmv9bgjRSX7D1eMvdiBbM",
  "key5": "5Ea3XnMgAEMKqYsW7UPM9hW8auQjP4wa3rbRvVRyNAFVrMLgTc5xZTwpcCpPFGH1NQRRBFJym5mVj7Rzv4vtkAzB",
  "key6": "36tSWZFffkw1RxJV8fPtzGrsN6vLdanpE7CanxtauALk5CTeweDLM8SmprGaKi6LhFf46RdwPnCNkXFz8j3h5Dk6",
  "key7": "3278egG9zQYbY8FrErvHtW4QKoNaJQHSSf4dgW85vLoNcuWJdJPzYNun58zRWgsVz2D9uAgz8dKNCp8ZMyFLaYWn",
  "key8": "5kwvgSnEDsXgB1ewBtVoEAXaHLcAAyLdUuHC7XfXMrvXdrtNDshhn8MoUjbk9334yFt7BJixXCRbDsxFEwzfeevX",
  "key9": "QAWjmuuQCmFHfgv4BweqP3kZDk1qhYvAi3EFo3D61eMPFQQz82maujAZno8frb7qUDKxxzgJDafJbSAPt7z77cj",
  "key10": "2nJAk2ax4DJvGFmbbbnRwtHWtvkbwBXphAQovQJur4bw1YgPBQwXWnvJ9rZLTgAwUbwT8oqpUpHGoZtDbRrESfeZ",
  "key11": "WjV2sAoVjKSoyHDrsWFjuAmGrK6wJaNY5MW6KxWGTHnzJDkHrJeUQUFCuB8v8eqTePSUsRxoQMDgenxHPSNrfBi",
  "key12": "3pfZMwscYzowxtMkpJCmpQZxjNvEXPB7pcF2p7VXA7pwDLThQyrqymzGbgcof4Cp9Cp7hRm2QBcEmvsbwHoXyBDv",
  "key13": "2eqif3PcMKeuaQvcMn1bxLde7UaP13yttPAuVgxKwz55Mn1zQwX9oL8JT4Vu7jPVu1CQnQxPyqjXE7emRpctFFX6",
  "key14": "LoRqTcptHzppJtgzCx4rqd1BMmzjz3WBB5WsCxWTU63JpMa7dpUAiA9Jfr33V3Qx5p3jgQA8nCu4aGguVWgVX82",
  "key15": "3Jn7nVy3PTbrw1pWqUYhLpqodP1CjSq6irfW9jaq95dgtdinmGqSZ94N4LNqinvf1pg2URP71beAsMpBiQwk7ToR",
  "key16": "3Z9qW9oAAQDmc1ZEu33GNxKSHrRP8UmatxtY488ouiuaPaVTdD33aGpsUkqmnRYdHn3MSPuwku4ccryztH57g9SB",
  "key17": "3sHZgd1GVXPPEw6vcZoSXbGb2mZbQQ66q4G1CYJ4L24GXVaYFUh6654eiZaiuMqQcyeqFkS4LcsDzgqRKU3diGNh",
  "key18": "4CqRhDc5YuxnccYmUqJZWfvuwfYWBhuBQwtZYq3HQ27Z1YSNPTyXLKZSptk4fE9KQFTwynVrQevATLFon9ytGg8s",
  "key19": "5dd3LrLxbMYkTtftttUtaTaMSz7SU9duVhDuUWFHzbcGzYjep6qNF41vx5GYRhRiYmtfFXgQ1xsatRaw6Xy1hPF8",
  "key20": "2Dpwzh4RfQJExt5LsqKBFYR1aE9WgJKw4tuXMQvawjqDvcx3CSV7enECnxy7f7RSysWaTh5mNUNWMm41u3sR2gkg",
  "key21": "2XkUoVy7UiGZZeQKdsA8iLc2JDCVsRETbVYFdoEMDJe6sV6B4W3upTXbAZZUm2g9d4kZzZRQNvnjDDzuAr9djDV2",
  "key22": "3xGfEgB1tcr9zSmJ4ev8HcyTqWEA1uauLUa4t26om2yafuiQKmVkyZhRJKBa6W5Ex3i63VEH82WCHrvDK72FR198",
  "key23": "4wWN3t1YiTbLb73EmV48UALPQ2iSBh3Hzf9UDXxPcrUz3k3caFpK9oGPF56bPoA1PPChAFtdaShDy9vdNMEUStBj",
  "key24": "2DeFRdKLVkAQHz819wxUxhnqhidvrLycvfHMzyQNea6fArx3knX3Eo2nvPLYd8Gf9zgaMq2kSHXBXWxC1ggJgC4",
  "key25": "66A5hHd2n1P5sFq9Ka3VUsp5u1g8HPFQ3PKEwnkxvKnsZ9ibksNS2CukF1FUdApj5dJpTxqnLVk7Kzn9DGcL4EVN",
  "key26": "4cDGAyceUdxwfj3DEuR16iDnxA9uYdCp2Ah1pENPdSwhG6yaoi4Zc9gF72FQTMQqqQtjJSX6o6un4vi2BQ5PhvZr",
  "key27": "Wc75HCSQ2ZLc94oE1ANXAiNGZLY8eNceycNPhx6HKD1ibB2GDCWsHcrAvd45qzWY34u82Nhr4DRACwuTdi3m45U",
  "key28": "T2y2LyNdPNsJiBQtnvKC66gtbv1QisxeejQt2LCFMnJGsmNcakbh5bFshFpWRWxun3TLsjXJTqKZJK4qci2BZ87",
  "key29": "3KvRPgj59s1QKYvyjotc2s7fVawjHJa4bCD9Ax4Lb1mEgie4AnPgYLY26Tcpedwq4p1jzv3HGYxpuso1wiCdgjRt",
  "key30": "26sipipr9XtMNBMigaYJ4RDb6ysBTSKGWM3JtpJFcFDW249MV5gNpP6kvmDHmbc2smv2mm5YcEY7KHjKM6CBbTpG",
  "key31": "5bneyhw9UPci1PtsgjyteKSfe1crgib2Kr9JBZtq2sjTMnzN2YozjQWZAUeWYs2rzFc7wkzwCjC8D6y1earMWKYm",
  "key32": "6781WpUrvmM7pr1WDgszKHGSikaxFQ75uaWTPWdZniC111PZyb45ZxfYunNE9x7o6QDSaJnzom5dBpCKPLHVs6rn",
  "key33": "2zExSqKxiPuJ5xb8ymd5u6Cuk76nZjVoyL7Dx7U5hb6mqs9scSHi3A1FU4HT3yK8XXq4jdE46LEB8xJvtaphnd7K",
  "key34": "a5ziVHhDo7To8kmrt6s17UWY4qAgBSqnx5Y9Z43mWRrWMGhdCQy8DY8pNJZDvJAxvvPspL74tLdMW8Q9UJ825ya",
  "key35": "5C4phQKeCU3618uKSqsQuhBCVCcoLGiHNjotnwJwBZuyVFdMLWTbSganKvFrmPS7EQ5jjFU7J24WZQa9v9zjVVYw",
  "key36": "3BarcxiNZR9cAKS1JpjiTXzorJt1Ae7nfuZPCiqPsLSJCQvuFPT3d4TChkE9NAnG8dZJ1jBF2AV1P5KSm29QDJj3",
  "key37": "4fBu6XA1GEc5src6VigUbQhhC35PrMJxh51S2mcrzsEYLWS5BRV952ZqnsHdo8muEtt66yzHAccpBYX4DKizyZyD",
  "key38": "3VCNM8ehDoafZewQhyVu9VrnpMdasnuDqQqDYLUHZr2JSnbu26TUdDAy26EATGS5xGeNwAdLfrUGBPLgKddtKREW"
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
