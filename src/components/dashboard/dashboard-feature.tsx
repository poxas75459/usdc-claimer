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
    "3JMsZhvH9gTqnjBL4xnSVhN7pjQScpj3CrfTseNdWtU4VKqhzDpbTjbRDFrhuUNu18jDHb9Rg52c6KWfE29eZPjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2udTNNXCK986CR6kaQD3YFS1fcPVjckeoX7rVPuzahwKCnKXtpDi8SYpR7j89upacSYGT9vGzRvpQMeV2tYBkoWH",
  "key1": "54nv1mdtGJyoo8mc7B5d5cns9juj2TD6Y7VM16MQgBURvGkDrQXVN4LjuG14oC2an6eUDdd74E6Do1ExvqyLLwST",
  "key2": "AvS8juMAVTM1DfYhmuMJfD6C27oMu8bJPV3Pi6PFgXXXpCVCwQi5iwUogbaW1WbYgSiK8t2pkRAETpK47NaYeM9",
  "key3": "3aUQgL1nYFnnwammrnEjiPzue7b45um7b7CnvKx6y6HU4aq2BMMfm5sZghEHMTgVDhgU8GKYSZzT3jaHxe765zRJ",
  "key4": "34VV8uAku472XTUFjXnEZHR63wNQeJ4i87bqtfsqpDXAYKpsoZrbdoKJc24cNksA6KBRH69JvHHxPm5yCZEFus98",
  "key5": "4EjJPVf6GpqDwKdZH62CEE8VuNzmPSoP8erSmuhjxgLnQcU3oj5wVhFk8YquhzdrW7jQWvrCcTkZdYYKekyYGXuA",
  "key6": "Ym9Cqsgij8uLSgfCLd7pCuZzrjFiruSCEHALuoU7885A3yhBjgiz42cSZ5rxMyDAa2nAnTTD39eyDeQvg4tcPHQ",
  "key7": "57iASQxQsNRy6oNFCDMaBh5aBH2xcWnnfuoMbQrzSb4nFbikzMynkVRTiyLvjRH5WrhRUqeeu156s2NkAsMGgxSo",
  "key8": "5xWtPeX5pKRqTwgLPACizMRqzjumVRizGjiYesZAbBpH4H7eRkwNmiXXJqEUKfrJuBsDiackaHEgebKHnMJXekm1",
  "key9": "3Va7PJx3FJRLo8RbCn3vVrRoUxJ2j6CPkXrLptTTdd1EHAd6RZHu3dEkLmq1WQjb1nh1MVcmvQwjpHhTibJEoCeJ",
  "key10": "22LEmQA8txngcfU7MH1iFKsFkQqC5FBZGXJhskvA5cjCWEtGkaHSMdBDoA6rcNzxfVypiMd4ERrpAzoqYRxGHJnx",
  "key11": "2HoXTBEpZY7xRYBzQ3UEcKi4dPWrHoKQ8NB5AFWkwuHTie2h6tCNrQ3jDAjtFezoaNeBLUZ2HtajQumBsmspAe5G",
  "key12": "5PdAiG7D15RrCkUD9sgQuxyfQVDmArYL1arvH3xhGQkMK2eUNDBw1WXmksKtaGrhvaB9xL1oa7mDvUL8GPjWKbKW",
  "key13": "rezEHRdWjMdWjzEAzaiLepJgPak56o1nnJ9PwcFcpttJeQPdhALZm8zakNif8x77WS6VXSCvrF7fVQD3UC6onF8",
  "key14": "5xCFEbUN2LN3hUTgfUAK6sppTN7GGadg3RTbFvQLTgvkJZVxC9GG82CUMJML2F2apfSwas4P3PSEs18Ge9CDvtD7",
  "key15": "57xvUZfbDF8y1vWCdS4bkHvdVREeWn8PHwbfR43jhGRVKDS94fRga13WhhzcQVJZLiieQWEgwfevwN5rxFEMShQF",
  "key16": "2jxKsYwyjVp7sfYVQBmPsbnJXDrA4opTYvfsXY9wTpi8ydMcemPnESjnuqQs6i3t6GsB7TeEGecctmp9ra7byw2o",
  "key17": "5eUZsnjYagLNQX6qJhXtkhAKN8y8BHXAg381t6fcFqBCCKebrFaWUtTjm97YMj8rKx4ZmLyVpfc1hzP2rZKhv4Zy",
  "key18": "MA7Wrb9VQMwHxBmgtEHXMKmNZ7Ejh85NxMvwA4iNfqay8iewpeuTiEL6TP2PebFBhe1pphEz7CGpESQot69Ccab",
  "key19": "5wPdj1cDVCQQJpLSyk3cF1S7tGwTMjCHk2deSpH5fyRV2GgHtejQR3QMqyeAcwzqggnUmZii9fYhZ1ugGTExGNQ5",
  "key20": "2bNp5ssDUaxQ56qX67juSCNyPBoixHHtDhcnbTi3ZWXd29JdQ42s9oo4bZ4saDbzieBabUNdWsREiZZX7eWgfNRV",
  "key21": "9v332gwCawPyXWPcGXz6cXH7WG9PrxZCyj6DabwKGJK7ee1J2BiE4S45jh8RAVjKw4FaDqRAv5iQD7kFqfWqM6z",
  "key22": "3gMv9ACgt7LNJ2pD5sJHZAwKdpDWe4bsvi7QWGi7fjUkhqSetbg7PjFFG8rAXizegZ5NbaEyhY1RTAtoFXKjMKT6",
  "key23": "3sGo8DZp6sKRcai4K2am4ieK2qeZhChd52kqKgbaj5PbUoFVzYpxAxpG4KdZUaAFbpaJtjVvjrtj9AcY7TFgcf3S",
  "key24": "5VjcgLeBbTkB8PshC8sjnPzY4mMaKTkKdmHCSWN2cdnx3bioXeEJbcGWbTXT3nKUdHA75qEcpfuz79ZbaKv7Qr9T",
  "key25": "3Wu6GwC571GjiM3hov8RvxUPDmrEpaaZejHuPNzNCsvtynrv95de9yfBkGrEGk9SeEZoGREGLkV1FDc2TZSm1noo",
  "key26": "4eQca5FA2zU9wd5Y1YcS4zyCY4CBwCw2Lck1LGrj7ByzAbEMsRH5KGJLxcb9R1dsSDSghU7zyXYgWHyhw2CFivKQ",
  "key27": "2NpimYUAFYJGQvDoXarCm3smVWwEYYNZhzNUJmeUFVyJjtZ5ksoKdSx5WsP9Lyq3nBto8ox8zsQQuVH1G7Sby9ij",
  "key28": "65kN8yQuajq6cM6v2jKJ8eyfbNnLWr8WcWJrhQ5o3szqBMEyy3oBVBjbZGPoStowrA6h4qbQNohBSDEXUhKVLAie",
  "key29": "5RRRnsnrZrBNV7GrkizX6vEsmvqLKsS5w29d6TYEi7ehERYwZsKJ2NFmDxAA7R9wF1QSok7wUFP5GEfiageMFeQD",
  "key30": "EA3X7arLgz44yEecrQd5owrX4WqHGcHZ6jzN3ofCQyKL5cUR4fAAZZ546PpT7YHoGjYGAA6HfttGaE38N5sta2s",
  "key31": "2mk68YBE5XFcTRhPnsHxZHERCyuioVbnSmXcyWgL9GmtkdU9quKYsdc1zVGgxaPEtL4wCvWbK42aTxLV93Smxiz7",
  "key32": "3FmproB1S5cGjEobB8jctWNTJmAVQsjVQ4Q2t4oxpKD1kedKumCAWKQMpnp3ahzmfYUjJjot3y7HZrVjobSsxZKX",
  "key33": "2pFAgL5bzT9kxXbqkAeFt9E6Nz5t4oNJpxiekk3qNwN4APZUihobwjNfKTvjU9LZy1yvF8XvE6JwWEy6NGRs5Tkk",
  "key34": "mNVg9FZ1Y4mepZ6bTNqSRYA1F3Y1atPyicbXyLgxYZJkVFw6SUNJ8ZAuX7rAudeG1J1VBJfNmz2HCCuGYkC48n1",
  "key35": "eThCzdDHtGaXCsAvKQCPTDgWfwBPcrKUvjPDRj3NknSHVWSdhukLrD4nNrDJu7X61xi17VdrWsw5Ng4ve9ZpYoq"
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
