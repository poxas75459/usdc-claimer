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
    "5PJhnojcFqp1ZCUvQcx1YK4qo9niF3rVxU2f2dH3tDgiydSbSrM7ihAv1Wf3peysaLi8gSaXyryXcueSjFtSdEEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fz3LCPt8LsrMcV1fXQ3KRm56KJDuzAJNft652UBVBFyPFvX5tXM9CJXWp8Rw1K4sKNt7qXcyR7i1gUCrM84xmir",
  "key1": "4hxV63TNUR2Y6DekxsmkjwV1f4r5H2Tj2o1uYtb4RA2bwwvMoXfEN6mQZJSWY2DzqHXx2VnRghgorRzBtu1yaAV4",
  "key2": "aFBKStxaTe4T7CjUFzzRS9hSgkP8nNDsvxkWhM2WYhVZALd6yHs1Ga2By1mwSQk6nXoaY3YDLavngMt1rmtQHRS",
  "key3": "22Bj2nu5Bowk8t3puGTTQ2c2pzTyap3uVPAUsTPzZ33CL9zRGy3mbNH5PTPeoiKCrBGuNTp5fkV3cgYkibq16tNA",
  "key4": "DfsCLVcBnCb5JAZqmWGgMnVV8NkNNG2fmUK1K2euTUtE9mXzduL3jUkAJUAKrQAebdYCFEWQEbfERaDAEw4Nx1Q",
  "key5": "25AH2Die9PUEKhmWs3WrRSCuqAHVxMNhzdE8y2B4dXtdtTgoGSoZD7vBJMz3R7859Xq4EdD2FgbXRxFCAz1cj6bE",
  "key6": "5Ay1CoaD4Ab2XoB4nEYGfS54xs9w6CSnhBgY9FCUxMk2TUZURnykkfjMpemwvfRcWGhKzVXbRP2KTjFnfRjpLQb5",
  "key7": "33PkR1S6atfSo7eKr6Tir16rP6AFHtLCcYdbu7boz652GJGTcQmTmWSwRiKbxBqD8tt2uJbbLJ8Ljn5XEWRbCCwv",
  "key8": "5jc5SLmEdUw3SBrKYSpCwmak7Zo88EkTMVgEUuyVJVB5Mr538mivBXxzmyghxvvA756sy9CZwE5e3d2EhZa9K1pa",
  "key9": "5qZmtviYjHMu8o9bKkLMGhZ3owS1M589m1BHyWf6TVRzsfvQHnDw4AC53QJreSWvjGeHMYBK9LHgakxuM7zTZ8G2",
  "key10": "5YNEvCKQvsyXnn4xM6DPNnu3xfMpaEnMqvwrHHGvVWouGihRME3a7iM5g6mDaeXCj9AyBYNHPzzKjVGoCSMg6fhm",
  "key11": "4ika9Y15TzJ6jJGa5CC2fr8ejB66mdMJCviN9gwaAi6Rpi3WYaV9j9Y5jHoreYKCVE5fXrmY91A9JiXR1aWRjeuy",
  "key12": "257tteqzd4JhDZaaN6wz9MiMgf4FsgGz53Wk86nEYPVNEMMJDkV7Jkgp3hitVmP9pyvbgKsPdV546P8i7zMXYxQn",
  "key13": "2mvcm15Mo8zW6FEeD3pKfxvXY5t2eVtqvNW7CwRhBxyQjqWVDBLKvuhQfTmDg8gyAor91XLxpUv7sudNVhfztzLJ",
  "key14": "4Za19ZvoDeEayeH1VJyQu1u1dPhfVjhgYhH8Bcm6dwgBwtPXG6CmUpps7seEh5p9m9xcAGHrTLQuj9x3gJE7Bzvw",
  "key15": "i1B5Vpde84a3AUFoxDzhPqWokNkimCXyiSSRdr2Fzq5D4gV5mc6Du4Rh8MzWx3anvu1g8ffputqCpRtzTkPchEy",
  "key16": "28nksJXbKHA1Kvz3YVuU7RWMF1KytFcFSMAauXwAE93hBDeq3PEFhv959LB2c7xvs7i6R9exbT7yH3KhHUG7SpqS",
  "key17": "57YQikqiueDZ3RpiGDC8z3mF1kBLJmdjC6H4btyzBaFaQC4pmqxu33Nrg5QcDu4vDjh4FJUeWZbHczr6X2JpYwow",
  "key18": "291ZXs5eQiCpHDCPrQZ7trjncADoWykadk6fRCMpzuKnzkp4kcp2PJ4RddJrh4ecVAdBYf4wp6vo4whfPBjKY3Wo",
  "key19": "2iFTMR7wKcpPy326wNCU6sTgfvcr7gSoCDMjCxxH7wyhPhW9XzLEAyfuqbh32m4VJq8JCiiNvZQevKk3MNXeGG8F",
  "key20": "4fYBWfZ58u2txhR4rb39z7X1zTedPYGi2SuhxKVqD8FZoZjUoxTfR1xf9Xx6Z5QonucNnAAi2nZRVFWx6KEy2tGY",
  "key21": "4Eb1VsCYaDCMjtQ6ixtQTiwMvsKGAjtn6WnXcgQUXTP5JED2Q8ZrwYCuYXaHTN5qxQBWxmYMoypeaDKG6TQkLc29",
  "key22": "3dr8ERwDewP9K7PuZBUcvU9mFUm4hPGM2hDmGzAocBe43VTHpJNSZq6rEtQRk1D24unb86wqXNPK3ht44ewLWXMA",
  "key23": "3FhUPFQms23cXdF6KfvZZ6iJHFoVJ3L8bTpVeHdojLedi3rQtZ3Lb53kvBkKDsXQArqiaW6MrFP4TB7fS3iEoqUe",
  "key24": "mLmCwYisn8Wq4vMRikrnjHCDPoyxpg2EY7HJrtVtVAxVomppm5PJZqEocM3pRF8MaVV6BiqTLwwZTda5oMDiYPk",
  "key25": "5pifZRNz46qhgKdkFM2GSikc3FY8wLu6B7GpkSpxfY5ZvzJmwy9ns7yv7xjwzVFCFL1ZuPEGRBFGbkVutn9QXapQ",
  "key26": "4RDcY7KFDAWXBfY7BybJYuTwnjCgUZURbvCdrQsnBxjY85V5jsRcHBrt72rVYuz2BPcUSRJairS1iSNew2qBAzUx",
  "key27": "2BH37bkW1W8DL3VRjBiNJk6ir2JfLQWYzrCauz4LE1CK61hGo22qVh5BCbULifQ2nYjT9Eu14MYPvjx947ej2K7W",
  "key28": "27ZmnuUEgnun98yDXA6bUiGQ7v2Vro5FJf6Tdyx2G9AquNAEcs9Yp44GFXjKyF4poz8UUZcovbR99wHipYrCHwkc",
  "key29": "67e8NehbD8azH8NSqfdQfjh4mXQiBtqutc9mYhSQXbu7Gc7ASxaxyBt4q16u8DHEqkQZSp7xQHzWHnV6T7UQX5ng",
  "key30": "4kgzq2UAkeMufsbvkCBiraNFvxP8nQSUNeGE5LFJDLTCn8QCJfEsSkTTZvFjYDwYpxcBxvtAdiuxYjt9pYaP5wyd",
  "key31": "4BfthG28Vxn8zW41z85ao7iQHAcNavmTBr2i4k4nizemt5d9Q4WdW2fi3MQdUtKQkXnnJf4DscCtJk6fCeeukzRD",
  "key32": "5aWrZiq8GDUKzT9fcAFcGiAzfpqRVqRSH814CGQwtBdG7XNSBDibE1vvdEMKgLcp2ArTjhqtk7LLE353mJKPeNXi",
  "key33": "5fVZPK1ojosyX1gchXkynp8bZHkZ3emrL2eFfE4moy3griNrnvAztMUQZMa6UrM1vsJ5sn14hjGDa9rgJ9jwbBLk",
  "key34": "4fWoYBPy6VQWxod1eVRQHJwAiGxpCbX6Nek7Z9bkoZmbLbopCdnCHk36yBWtsafoa7QKziSEEQNGRianw8EGrWem",
  "key35": "4r5FyAm5V9xX9cCvRx1SX5S5YBYJbiQ3z7zNcY7audYYCHLusUd8oxBAvGqFGajiYPbahaTAUPkmJWXZmrDYj2Zj",
  "key36": "22W44pCLqPvgTEkH3VSTaEYKHkShTbgqGXEC4isj6jxLzkh8nnk9qUyhdesEBaNujFDFp4w5gcVS8QQscHnAXnWt",
  "key37": "32VnN3dbc7st6Pku2xgmQNoXBaiaaf8C7rPWsPAFFfXQgbHwn58qddfoKByaXV8AX7PdktzpfUiscVbfUhXoJFAs",
  "key38": "4JAVQrayQtpWzcC979c565ZbPZzu3eLzQ8CyJeZqCVzZtvaaAaEMm96T6Tk8sF1wPP4Rds4GFd7CnjsekbWepEwb",
  "key39": "3HMGPPWa1rfxfEmSqDvfb8UeqVqZGHrXwbQDetjcLymqYqQGMeJE9nGrM4r3kKGAVbLhVwDw9qzSfuQrRWfS8fJG",
  "key40": "5AVgS2oFCqVYERUuCAoTbVgZFnu7KnV8VAmAzB2DBfqdMz9zyqw1sY3K1jm4anfd4HijTZeGU67DTyzmLMUQEhEQ",
  "key41": "3MwmixfbeXytfZsoxsCTVcKMyPRbn8PwXPAQej5urqsa93GwwjTuBBjArZi54MoeQTFth7ZfWKf6NA6NVriBoLqk",
  "key42": "4qFcAtMteznbLbedEr1H9B6cbiinCyXEzts7rGZ3od3rVuGAGRqcXfozfTifvv9RZRUvkE8b5JqrTUg9KDsG1xWe",
  "key43": "2rwemRsBTjK9Fnn4x6FcfzdNsSAty6a9MJXp8ZkmjqTCgwHzaKFKx7mBbY8XxWVXmemuLJuN4rUx26th5V4Mb8bj"
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
