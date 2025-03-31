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
    "61Xi2p4yxDceYWL1dxB3MkFmSgbcaFRGpg4akiH4dkrCvFHcTYjCc3yxYzZw9wVjvjQKvqAnfK7cugThns8DtLrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21EVqJMay8ypAQYkjmK1Bv5T6iqsLGyEhfK5LJstBMcqf3mggVBi7WceYHvMo7jDS7higpUydHvnmv2pjaYrg1TN",
  "key1": "4L4Ko9evRDgE1apUWe2xrHjKCGMLYbxVarxkhf7NtrsajmhcW38tQDvurNAGLzfJCKzawsB71aWnpKNufYm1ub9z",
  "key2": "31zVdyVwRxaF2qCChbmRucZJPJTKTtajv9uWesZmpuCUdJQWgyg4h71FuVh3CbaDGhPKjuYCgNXbAiZmAnvZKkfg",
  "key3": "pcS7zVaAwbd8vyJLspcydH9hXF2ytDEytNeytNmU658wdgF1BqN2pSTrrtHUnQ3fmf47FKVqsCqCR9LCfTJUAMj",
  "key4": "3HVXi8mzgbhc3KN398TrWJtuTGvoGPGTX7rwTAyKjz8gkXQbaLCii4CWZUFNkza5XxmsFVJNgenuKa1Pc8mun65y",
  "key5": "2BzbvGHFRkRZQFP19Cdca4P3nEJAaz5LpL8Ec7FbUYfmtkg1kWfiRXkY1QAERHMgMqyeez4ZznYkfm7VfDzgWBWo",
  "key6": "3bwhZ4DFRk63nLVyR3GhzbzFigNG1T7Ep6hQKr9eVJNcgbfjmYAp54tvChnEVJuwgWT3gExU3RJpvgzbvqtN4jka",
  "key7": "66i97kYhLMMbom4d183aruK91yGg7qKMXdFEJ53WxjrXvf29eykiSnxw1ggk6QSizyGzmXjt33QQYdrsDJzFVDa5",
  "key8": "2xAeRZyCh4wELaDmx3YnbsvYE39QpTG58BHzc1cC7GH2qv5Zr5N5Ec4pPJFhadL73xbNFpKgBmjbjm9izjQBH8D8",
  "key9": "4MGoDP79Bnbwx6nbnqiVbdv4Jy5ABTzpi63ZFZNeEM16b2XCEtgYrSDthC1sWimp2qjs6FtYc7fmihNJhLXht7A4",
  "key10": "22Xt5CELTj2w5BnW7qPdFrhkTfWcGXqSUqZMU2K1PfykWFy5wYfrHYe9E1Tph6UW9wsQTEZBaTBLqvgsPYuL8F6b",
  "key11": "2s9qwg2i2roSpJ5mLrjxhn2eNbR5FiYBApo6ipvudBqHCkDcepveYg2VmjgHq7Efc46SRsmE3DKyYcXXUHe5LEqm",
  "key12": "3oU7hbfgQWCRTDTd2pfsogCm1V8ocMuqgGJDz4utqAUFP9NVikrRUQg5k5EV4ocso72NF7PJx6NANjb2Am4cU9d",
  "key13": "246fosrMXbNWTtQFuwGogL5VLgkTdxEM9oNUkQDJBDA5xtg314Vmdsy58DTsahzdsgor1ptRMv37xHnotNR7Cwyo",
  "key14": "2h9sXNPrPiYPnPoDH2sJTqHTKvzotZyTbNCaaCRrcSpFF3MPu2DxmTXGv35zi2UCJ5T9YrBF7V91c5p5EMSdq8iE",
  "key15": "DhYfyryVCorvrEWr9bM6d6NRxx6ogvf9EuJgFbb2D3xaNL2j2apb5mqqdzsP4Z1EQGao9r8UVTkmFELYBrmKpnP",
  "key16": "vUqcHymkKi9VrX7NrKPKKHKiucMYhmPhFqgvD7QTRpQUu77wNhQxbGcM65FX9SLvDDteJQhabqHdPUBv6SfMqHu",
  "key17": "ULzNHUebt53stL6M7pGcRSZgSMYbB18UxJvxw7A51VXYGQg5gKoyKtUwjk4NZu1em9oYTxX6n2ABQedgBc4rRdc",
  "key18": "5hVDXr2qxVj84PdZXRFeAp4T2KiBJ1rGCaAoo4MujZqSojSpNcUtrgwHngcBToM87fMkYGK7sbSQiN8xNp1WxbDk",
  "key19": "p1ZwyyL1LypwzJqebjLzFXPyt7jdL6KppcTkMbo3aGuvkorjqmbfnVm4tchoTEBJ7qwWijt4FYp3sqfzptmZpVx",
  "key20": "4KokYyUaG46SwgnG8r8GXtuBaLAgf3SC7M5LV79dKNSYGowUnLJuKomHK5Uefe2cfSbYa4xZEPnQFky1UCsWHyx2",
  "key21": "2T3wWxUTVSr5eYnDWPdj3Uyx9dHTX9vcwurjYxsmqXppy3Np6r2ja6snVRjofomarURrKGQ9XCokzU7A46iR2cvu",
  "key22": "49LrJM2xmqNxLRvinyRCmVdvDzNg32BNqAwBhtCLJaLhE4QMEfdijtwFsCJb7GeDBm9yCB8wn6vMVZGh9Lkap8UK",
  "key23": "4z7kbVVHcE2ytmiejYaMSLzbPMg2xY2iYxVZxqiSLnAKtEfKmPJQKGHqxnoE8g9iCepbWpxPMuBMt9MjbZEK5HF9",
  "key24": "3EQsc5bxkr71Xb6wjaUm2Tg8Qav7wNc3dUUBo84jkeuGM6NS1W1ocbsjApxaGfntUK3QR25N6LLzFhbVNxgZtdJu",
  "key25": "4k2XbEuK1CXazYByeP42M7zibomQ6VgFHPv1Ja8GpybTtTYqfKk2Uuc8VnhASaGDSovDEKn3jyndM6PqX7tNeT3D",
  "key26": "3fWP14p5puHEYr1nrDkq57YppGXQ73U8JSya2tLe7DGRPvi6JDzGHw3tfPRQ63wiUWn9BcD87nuEVBwsyGrPkxq8",
  "key27": "4jJnB5VQz5R5RzQVVMVXJfPSLVC3yeCiQhj6Byes8iEnMRhva2zHXTdGcrSdxUzcn4tAgcEhSrXi33npvNLcYzPk",
  "key28": "5DqZ3wnd5d1uShXaAyJXvoH9SQB4QncFdPLR1a2yk9m3M5pND7cvthnSeiQsqKdyCJcvU7VBoXCzwtP4NjrjgEnd",
  "key29": "2Mb3f8r3goFFczCQ1rn7c8tT7aFzEZ1pZuo3mg4zvR77ZxPbe5WHd52BkfQztbSdgu5fNTtLduaBswU6inPGrYNm",
  "key30": "4bzNVcQrNgpGoVvbqjrkx5sQAuEFQjez6rf5CFMJAKrRqfNX2uSRnqGa5h7oDKEVDbXKDM2rw3S2xqsEVRP1axnU",
  "key31": "4LDdRwjXSDokqmCsbCJYGiNSCK31jmtfJgtxHiegkZsVMZhUuTgq8feSTEgjwB7BPea9uAj9dHvhqdoBgMo24hq1",
  "key32": "2FirGeaUfgpE9RJSdKWvksropQTyHZZyfWaZomrvMZw15Hn9NCcT4YiWB8unoUQNPXGB8tdBuG8Unaww9Hu8NNki"
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
