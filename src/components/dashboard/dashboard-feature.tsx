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
    "5nK9H2rcT7Ti4U5yRTbMRn6ETk5YNFTMXguimysuTLhbseL8Q4QeX54nFPgnJ6LcZDTQHwe2w54k8V4p4t5BzcfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31UQTE3kpL3sHqHCqEbGP3vHwqvmtf3fLchyGZzWW3o4sFvGL5jZjTTCPcqy25HQPRkcPPEs5Pr9FBxaEmhDfA95",
  "key1": "4k1YmY2f3L6jsX5rpt3gET7cRUMey5JNjoLYuLmMUB2HBRwFTo6Gvf2kfZvPkXrriyw9bRwTPLgTZJMu6JgQxjhd",
  "key2": "e2JfR2DnBoryDtr6YmhSKwmfmVm4H4pcMYgaqzv5V2HMizqwKVPCW9XzUPwpdQzGTkuoQmW1bRZsVdivT8nDjyo",
  "key3": "3NLuaUzjEUoqHo4xfpBySde2ybC21trmjCJd8xkkyTimkhVPqtC7j8bWRALAYn2K5Fp2LuVoXkjjfaGKhrdkie1t",
  "key4": "WZcyw7c2JK2fKBGp6embbCU1VsGg2gEzv3PbmpkuJWQjWWA2AqF1vw8jauwt9Dax4xycnTfLTDGA6KpaJBhj7ef",
  "key5": "4XikjsughsYa8FYM17HRyVBbD8aUfPNhAd3pEebk7mBVm6KLmb6xd1KtaBuxJ1Sni7Cvw9PytcEvCbxvsseF5rt2",
  "key6": "5HmzngGeeK2zsR3Mctd2uxqxeC6kJNwQA2L5vm5XJXHb6ckstZ5XvNqcxFEgYnsZHQJvSwmak7KSqLvd8Sz8mfxX",
  "key7": "3YyHau1SJ217JT3147YYNxxxnqqAdaD4TWhKSRFYwwyi5fvDQqy4u1uXk96T5NLqCt1XJjWJdvNhLnSRWdPCzhoB",
  "key8": "3GpBP1euEfENPhjph3MYG3FFyDhJuy4f1SVw53CMRojNohHnGWRixZUdnBfqWSeU5Qz9Hr1nprJfQoqDFf8iNt8Z",
  "key9": "2J3w7oJhCj2YM9RoK1V3EpqfRdeC1yhJ6YaijQck9kURC57mCmReoTmUFEivsieZw7kszeVZCNcmRgaQDPFNdRiH",
  "key10": "65tuzJje9rugsuSAtKhqkGjGDM7g1PWqZ7ZmYmVnF2Jcjv28uyizmews6zRnnRWnWPhDjDgevrT1ubAdMfoRQjZA",
  "key11": "2ZhdwDhGxq73BBHC2n6CuPYGghZpJVmsHSRyqMgjgNFPne7MQ2azM4Gy3bYHZ5pD65EHPgjzLD5WkV1TdC53uLEp",
  "key12": "2f6gYVk7qcgxhtEXCj1NyiuDH4FS7GDnTG84YcmGb61jMEtk4FK1ZDzZuhAH859EuH6NbiEAPmMAL8LkTrPU6tv7",
  "key13": "25BBEcQtfFBh5Fk3ZSUwWwzgR8dREemVm6vmqGNRLAqEe5YuUt7JNvBSUfJemVajPoyWhM8drTXA6ip3rtNR6TZF",
  "key14": "W22kW2GHYaobx3ktHpge7HLbn2kzn4UQVzqG4RhxZLLs6kbo7YXcSaLiFyvVvPyyqdNU8AgP61Xjw2uxHnL8hoW",
  "key15": "4ZXgzJHTKw3YTRpWSjxUs8m8VmWjz4yYt8oUC4TQyzirVAuAhT29Q3psmFsUZ5FYmT57jRojkgoHW1DhyknKkYGk",
  "key16": "5zoMXvkfnGSauYUtx7LopDd7zgBMgrQMaMm5UimZcGgEseD1qXgLNmp4ji2c1PMmcvguLJWvnc59iJQrbwVGwUxZ",
  "key17": "41cFkqMVkGNFdGgxfAS5YEv6RejnMuVxTVainUiNjbwrboUEg4E3FKmNG1sSF6oqpDeyzCwPebvAc5K5hBNd49EA",
  "key18": "4ae7DRT4bBM3Dso6Rrk6VsK1nxJj7G285EDY7PTnMGTxoP4Q5Ki98GG7rvwwRzLGzfWuqgecb9Dxv3NBpeu33ksy",
  "key19": "61jDjj8DtgesmWw6VE2TDEzNeZ7d8NC1HpE4feNDvtuxbFbSLKvUWbd9Z3GfjGRhfwPGwte3dC9KxVBPnXEH1ikb",
  "key20": "VdBfdsu9kbfzuE9hHGerUvUDS8iukBqep19kqjCwwR94miKHEvuqRmkmvqfVohpRqnTVLGG6bS4D1fnMsrGBaUy",
  "key21": "24EYkTpcF4Jytby8oQhBtqqAFPw3J8WEKgSng5xF86Wr2dhgKGi41Nzxw2ySfcfNK4fADGmjLQJM9ZozmMEDEAf3",
  "key22": "23DSquiFXxoZzE5oPm574ycrT6jRZtc32ppPzUQLeQRy5RJadLX1h7wsaor4VbctcF4cjNMtUvg3kF6o8ATeiBQC",
  "key23": "gmRGpckTAbSbuECVUZKrYc44e78jYiUgHr3bSPuUsD62hKhD2CxjvPyM6i4UsXc1T3PZ54iaGxaKYCavHKZUY7k",
  "key24": "54JipxL2F3nAzMawwZcif9nojtsMLnpjEjZcwUiBKcVWYe5VbTcJQkWeS1Pa7ubojWcFuHuHisG5HqphvdusrCAS",
  "key25": "2stHnm6JbB4JnWjkEXzoSfk8KYAuNDUg2tMm1GzuCX8us9qZ7eoURbZbsDRXQjWFkTztmEKjTTTAdJ2yBWUkfkwB",
  "key26": "2tXNJsg3oFMvY16ULoNXvq3Y7J1mgubyEoLuopQ5aDWFswGkQ2mEQwu4z1x6eTQytD7VwVv7VwcMH1hAwW6Gwd8H",
  "key27": "3UCZW2mNXq41js3Cvt9Yb7Eo2oV4kf3MdmoFRMEHwfanfeCLBaqb7RFvkB6kXBegnbzWcErSUG9WjMUJ9k8CEsws",
  "key28": "5zdTeUsz6bzjhhg7upxXTVFxnATNxswywoecxtQGVCHT3jHrZEnXKqWmr9VPBFmsUX9hYemkcoJ8dQbH6TgxCPkh",
  "key29": "3fopVcLLYpzH1faYdkqzpitUmaayMXnPQ2H9EXTjib2sFfGcy9k9219c3supJYYjDdvbAp5d2eZ95Pxr2B3ocaxv",
  "key30": "2VHpuGDmWEtqJ4Geo5AE3SucvyLpKPkgeayReqJ5ij5ZiHTUvVZWuAquHygRN923MSwGqqDherJCWRjRBJDn84YP",
  "key31": "5Xohu5Aux4BKYLJEppCLfrTrqz2Ddy1yHbFBg4NwcZoG1eTxCpVaYmJNVMTN2owrnTX6KqRVmR3g4syq3Apv7GLz",
  "key32": "5nBaAK6Ee4AymeJbpeH8XP3prx1C4ThJDX9cCy3bHfaySuJhFuSCyMuk7mDeYRejvmtSDXSubHruq9n8AwjCZZ1D",
  "key33": "QQAmnPPgMHSEftWpsJHhR6cf73y81aWiedMN5QSWrswfqBGzoh5PNiVRxLAFQ6J2X9e2a4vr2dJMfVM4Yyv7ShQ"
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
