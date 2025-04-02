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
    "4rKHF9uhiTt8MiieFMSx2NuP5UiWu9rJeK5naCGWnWFsoHyGCTcmxEAaeJNyBa4se9jN3borAFnsD8U1Qu7NdQeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PYMyZhCJZ5KGsirDR3iVt2hs41HR8YMLeX5PCQzUxdw7NRG9GUtw1aEKVcAZfzmXV2DWwMq29jmxHtyW1gs5JRd",
  "key1": "43Szm98YCLCHhdVYhdqTZfpyqa9Lv77tZjDtuKRhqY54pMTwprRJh8Y7sMkHFknZ9iVB88xvEJuFsbrhn4SoaWAK",
  "key2": "2Ers5P9DK8d1dDxBtMRDhJmShz11BR9wMhGeXaJ2i5X23XkkFLD27CXuLbfmRAurMerN9EK2cTNkdPTGpt2a5be",
  "key3": "2q9pNu6Pb4UvrnaXPJSCWZi61TNpJ2HfDULzo1j6bb6dT4AWdVTujiVmSF4cZFVyaQnr5MNw9K96uoYxaNKF5W41",
  "key4": "26h4n1rA9Vh9yy7kdsyfbWULnKS9U4X2HA1FCt5TDCmQ6Y94iuMVqVZhJ3PEbZPPPPcc9tV9JM71gzmTQ17os4us",
  "key5": "3bduzRnrWjQcstRU6KYLgb3vtt89dbeWggS1Bb5JJFpYDrYLbnxU3X8C3SwHZqk3qRXeipSCnSpeosPCG5KkMr2U",
  "key6": "2BGy8UQXqFZWaAhqSJqFmMTTajfNm6K6TtMApicxiWY2BTkD1WXaKMd5sTE4XhPXfo7aTKM1NtAFGZg3dH38sEBt",
  "key7": "2zHHStiYv4ijZYctFeWixekj5ZYfcwRbHmJQGyqbmGbfJtMVDJoEMz9QSvFkaqCBVKckqVnpJMxgcotTBMbgHKES",
  "key8": "gHJAY7AP3yvqw36X7XUy4SkQSmtY5ynmoMyCBakf5N56RsyhJRSNvzV6fCF47pPHTCqb8AUTJTT6Y3Q7uS6sn5y",
  "key9": "2zqaq6S7QWqY3N1abSSyBctTCMFuBenVPgpqYRR3sD4CefMTfUNX196zXoNwQPjxVJsvv2F6TL64TfvdmSUVq8Rf",
  "key10": "57ZYUHWroFqBEFEhWf1KJBDxnbW33A1DzWwJgSKQiErrjQpqDjMTf6YnxD6pJcGBUhRGsTNfj77LHjU3am5xz2Ht",
  "key11": "62Jc9oWFspvQYHXoJR4q66cB4WV5WsCcdYvJJNMHc33sV7xZ1E5dAuxzcijAJzgLnMiY7WB3XTqvxgBuZyW7aUj8",
  "key12": "3R9AxTEF3QV4eKUJ9FvPprPLBhnxUHPTdAZJcjHPkRALa9GRcD51q1rJBTxTKJC3TkuMpxnjqpgqRGTDzVbMjDrL",
  "key13": "2n3tcrVb9N7H9X92ny1dJ7P6EkNQFDkN4L24VdLbiGhtmTHdkfiyjMMaYRDpLmu5vpRCU5ij7QHNzHJhRkvxWbo9",
  "key14": "4USYpxMZ3cx1nF87Tb4MXQxPW8SkyvYnRv7kq8YQ9weZwjLahHyP7hW9NyYUKMkAe1PXowEMKYamWKkahM8N2paX",
  "key15": "5bPihFzVvh8TBPTwgnc8bXa2nwfxYsTNXaNjjx1q5dk7rp48annn9wNf3TYXLZ75Au3TExZ6uJrC1A5MCrLkr67J",
  "key16": "3KxeVPqZgtCt2up5frCMUVzbGfGC5ZpxuYUDTfcWGp9k8a1NuVCXTyQTY74edKPXE8YtkaoiSE2YaddmPPoJauCb",
  "key17": "2CcPpLaCRfMAacmQyJZFScdy78uREiwtqCKUZJhMzsurAYDYPTgXgNLUVAssNHg3YmhgpmpcceSyccHKagN5r96F",
  "key18": "2RGmbaw8NbNcMYNYTRHVXBEA9bNba5eQ7ANDNq9Z47EGJKy6p2DGHNruH1EraBHdandZFfcdQk3PuqajX3HhbjG3",
  "key19": "4N2igv2DUSY1Eptzcu6i9zGvg2sK5EJFhvJTpoDGWt8Ng1v38aVtjfpGrPBP2gJud9xvjn8SfMeXNnbnTLF14fBK",
  "key20": "42RSrMLs4TuQQAGZA2afVzu3GZTLPpfdzV33XZXJNQN1eG5ihLChX1RXGmaXiP4qqJEwDdnitaJ99ZF4qwUf2pKE",
  "key21": "2uN3rEMEZyBwdnzWTDi2Xwv8axwELxKG2qCitNxXAewFhjJRSY2Wty2MGFpTBijshfDAVhHbYmyNr4jxRHy8xBo9",
  "key22": "4v641eaUwExJ4Z3rKiqgfis2BEGDJieYjDDZNqykDLh4Vj3hg8HJtXCtvTQkjcMkwoVa8t6LqsEBwPyPiydCDhKq",
  "key23": "3jKC8mnR3s2xUHk3vPHGzE9QY8Qpbjb6JTVYteh7FU6XjoiBYzPQgXYV36p8HVDMXwvzPHmwV8YJ38KMSS2FYqHX",
  "key24": "3BDwLG5MJEPwSLD13f8EZFXJNWLJrtkJUD1V5gKn4FhF2nvbwPoFJ2C5PTDmW8dZEMtg95qCYvS4df24X2UnxfHE",
  "key25": "4gV7bFaAfKQxeCApSWZH42qiQyb1cw6Z37YVsBYEXDcEpV4C2vszaG5rAMz61rRQGoPBZHYhgLL77gNtjdSs5DYT",
  "key26": "CRpNrL5CTjXoMNQxEqpYU5njdPtsTzF8WuXe784GLioJif3m6vMjGG9uU6c6GRzJoB5rxo2PFCHXXwnTNPbpRQY",
  "key27": "3YB9u6RZVtjHTA2D4S2yTV9uhMk9NFfWhcK4CUs9faxEJ7d1CVqPedtJxWFR3cLM2X7VmdQPNX3kun1hRfRedjXa",
  "key28": "4ei2HrXkjyAtZC9ze2eFdoWSHAGMDjbkpXKgho5zyi5hTT66dBzo2cqHuWcCyivJbWbHtbreCeeyME8cvZNeQ5Gd",
  "key29": "5StvP6DVrm19oAoYXKnsk8HD4UUghi6BUZFkW1uBcJRSDPJztnq8cwzTHJKSsbssDHLPHG1zbpNtwyZxcry7gBS5",
  "key30": "2bCmPPyRX76KgWzQyQG5LvaUvE2aFvcYmio8VN9v6qmPMvbqTGhJFxTpY5ULohtuJZzBHX4xfWReFJk6gd5kG5Tp",
  "key31": "3CAoZDg3PrKibw3k9iFybAQPFrGqyaAKoihaBqv6tops6iDTLQhFaVP387SeWZXk5qu6LxYCxXbuWFfHDjDXg67W",
  "key32": "4BbF8BHDnqfXuJsuTQJrfrsWF5ktPikRivzZ3XMpqWbCKQrMstNh8Pe5R18NhuL9tESpmZAuET5fUzJKKDkq8dAq",
  "key33": "gKcL96YbY1KFkukypgQBwNw4nLuCf4Juuv37ZukzqnifsrkCjxtFYG7T9itPHNwK685EvoCKHxUPq8pVqZgixr4",
  "key34": "2AH6Q1az9EPUD6gLYJEZvkRSkmYRU7UvBhPUt65bNH38ZJezaSGuzDJetGAFFXhRXPSdtbRg48TgyzkDj48oLQ23",
  "key35": "oPGftYGTKKXDR9hr7pd1cxbtjKhNfHyAuw5txmagxkxAfrYzv5xVEEkwh83cxg1M92yHdf51YBmQYEPS8a2Fkn2",
  "key36": "4fL23Jf6rA6swCowTF2SxZFpoXUN9WbtXbEYLcMJzKCaCxjBYWEq8a7eRBGdMyV37CyNyeqr5AnJVjCShgkbAfQr",
  "key37": "3krYgAPAPpMvhqaZjzdVHSJucuK1vsfMy7cv1B28ieGaxhQ9fQ6dHwPrHMQco4cEQz71cz2tJC2gSzb6Giu7owc2",
  "key38": "CD3fmfTajtKscMtL41cnmsYMj1gbLNWNteDbWD4DEUkoHv2Nj8WtcAGRNjaX5tGSUEhaRPGLE8dG9KmJYYUJL3j"
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
