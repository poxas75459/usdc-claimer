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
    "oaZr2LDrRaxKDCdSCvmQTciWmYusY8b7Tu2YUcfxbyETM4i7KYhFZxxzPrREKcfjdtz4jd7jXWRi8Wtxmzb1F2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dUpK9Kbt93nR6xfsqazpS3UPBFLgTSJotdWQgVfiBTCmYQa2Cv89cn3wHUy6VJSfcRpjWbM2oefA9JkyJs8T7nL",
  "key1": "3QBgJKv4f75FjTSYJvhmg6B4czFcUFxCN4G3TcUTbXzNVvCewLnANT3QLv8M3HWpr3CBvHW86VGn9nynv65M1KKu",
  "key2": "3DYo5aVF3XXdUFNA1YqToPs7FjAMDpSVZMBNwCkYtmrmUE7j79MkfDKf1YbQe1s9zvmiFSTpjKfWVZwPKAoYPJXy",
  "key3": "24oYfqBa8eeiKkHTqiQA8LMvMYYXoCYFMXWwaVkw8GULnU7WE6E9hVnTJK8yVNuc9HF9fFvM7YtMPhzbXzBjx6XX",
  "key4": "4BLN27wp4YwhYy8fXHgVsj1n32KLcFHe5knMmdCtXCedAoxumJixve5JmkFntYZpXc9zyi2bFsxuQRUp2wa4Z4Cp",
  "key5": "3bRD21cWeD1BwUfN8A1rCPL978ACQVbSKE5kNmFWWawcxhQcrYEBWcZ4uv5geetTvqn6s6ER93oLU68HCaYCZCX5",
  "key6": "3mAAVv6BGTvJJhwjyU6zhk7DsSpW1xPrLKXBVAjDNFeirtpqr76nQjxHMZzhDw4LJdRsTgce4hHt92nLPE7wyi1F",
  "key7": "2o9wsPtCvTzfVJv779oyJApoGdvpgLLsNLGuRBoURL4bjHmaYezLYfmgaX2x9z13CX4PFwzoeh8Gu1DBELZkQ2tL",
  "key8": "3PBfz8Ptdk14H8cXZrXqnkR8RLa6AaoN9qpo1ucWXUy2Hsu21AWbFjoxCPM5ojZfK1Jac9wBnpMNcPhipVA6y3E",
  "key9": "5WzQeVPNVfW9JfMLB4q9fP6zkVusnmvjuYYJ4sX55YpHqQgss4NKRFDnQLGRoNRm8oxZaDYKNoymwHtPRSKhhoz8",
  "key10": "4teAMxM8mD7ewi612Ce45TbTaqTE7o2xEZF2XGoKZzpKdaxFk4j7HaDL3R35ghpzxQDgyrH9po6VzpE1xij4n55L",
  "key11": "3TLjYaGLgnfYhpDmRdHZvaJBmR5Lr3gewagejnZESTzr8zbK3JTSP2Nos763Acv8Rvcjwa6GS5USNsVdjUbaosWZ",
  "key12": "bqX9ENP8WkSaWUb1pKdrfmc3jeZWhm8HcZBsbYk58zyhb1KWkjSjPtU4Ep3uCgWnffWbbtnkjmyoMz7BHs3QnsQ",
  "key13": "C4CYkA1V3nNYVxRVTpGakYoSd9NqfvttYZ946woq4ZYpwhBc9naU1ocrbQEzmjpkw3GiCGHW59CV7pZAKfXL9E3",
  "key14": "3FQUmKZ5qbwDrmx879J2HvVMtPmy9n5gQygt3BLgXpaVcZ9RPN8kjsxRMHqJywx5BHmAv33wYwvGJesTSR6F8AzF",
  "key15": "2HvTiu6LUGoEzMvsNsdfJ5HgAoWZdzb89RML8ciVGayngh9aNK7CAStmdSJTC35obKNCpGjMLKdzRy5oZHTz9uhQ",
  "key16": "j11rSdM3Q4HTpppYwAfqC9WRidAUxAnApCQ4sNxWbRP7GF346WCFNkR1dCzkoqv48Rterjbx8Ps3Dvfsm1LRTTq",
  "key17": "BgHtXDwM2KfJpkbgUCtijFui1xsNVRH46t5vLNXPFjS18Sq7JUxAzG1gy6xoQUvPgAGJSiRT6yiqT1sAkWpbnnN",
  "key18": "2MptxTnbD95rYkL6nnbHNPJnexAACu14erH51xWrCvEaVPZCTvUucu4znBPDg5wGMFfoqDDA8tXySkbLHyHKrYtM",
  "key19": "5n16pMuyTa1RPAXNbGThSJYParybmBTRqVyxJxRukRYFf5wV3dEqKZWtN1j2UB365JhY1Kw64eRuhfWwFCWw1DKy",
  "key20": "4TxtLnuho5uXc1o5q9Jye4B2TqCyCJ1arNPNUJh487hZTTYAZ6gCQKETPZmMpBehvkjpeDnmzfViU3EaLmCvomfH",
  "key21": "5nttcmMaVUFXoMgyxWo9MJBCSZxdTzXvvnRZReKeySJQMfWNnntveBe8Qz5rGzvzpsAkqbwpEqooRaZonUQim2Ed",
  "key22": "xhQgbYfdpjePt719HW8vHysWEqqFadjSTrdwBJdUkFVWrbWaiqLFLLDaQFiYYqprXjP73hP4ypxcJLbX8TC9zXZ",
  "key23": "4U1FYfPo4E1JRmL2Ru5mbXwGsmuA6bn8e2WKZbLPChoWxAC1HucyjNtee3QpZbiH8udTGQxy1rSEL1TigmGj7kgm",
  "key24": "4iVqkQccR8emb1PtZakt3meFvjGfKyXL1SB1QnUWJK9XSt18KCDHnQPyUU22PEJkPrmLCFP89mo1zFwesn3mAP2N",
  "key25": "2GrUfjvb7T4r5EeKthUa3R5nAcbPFvPa42qU7u9wCzFVagaCAspfETpeQNRv6R7kaPYgn4phZdaLay5vSWSA4Vn9",
  "key26": "3TLMCktuNBCggmjU99xeUKvZRokffj7pogufr43KN3abVUZ43awXM3hfE3SDs8t92PBFuWVpFmVtAxy5aCWvMKBh",
  "key27": "4eLeyNnDAVLNQRBxDFtL9RxQDhm9Zjq2QhNv11qYE5qFFa2XsXFPVFiSkbVBS5P31XuYrSioye1pbyPcp1FkJGam",
  "key28": "4ECJmA4KYATAgp2Bp9R5Qr97xN2HWjaXfjN4qaUb4vud3QXvTwiaJ2YY57p34GExf2a6iDdzxby47Hkbc1pwnXwV",
  "key29": "2kskK2Jw1PMZS1uCnAYFkbzn6YB3aGUFfeTnu5eqSB2wEydHVf8oMm5ueVPfzsHcPqsB7VWN1tijaL6XzhRZDV1A",
  "key30": "iDBZvaArLHw2w6VDro5zzvgHuZrZU7q8RTM6PC9jvyWxXmUCjT8mCaibs6miG6WrgZEDxdKvPSX5nnHqCujCoVG",
  "key31": "5tsPR4PyzQBzthvyPyPzBzrf91hjcALqrLEXj3USURHeCw1W1stoBKM1QK2Uq2i5c8pFHuZ6c9BWaBdyDwYp4M4J",
  "key32": "49s18mtiKfTTtzP9UfUt8W41XyWZYxrENxvQL3h6Y2LvBtdbaCiY6DJJowmL31s6JV3PMv6L8xCDYKzikuN8R2tj",
  "key33": "5PmQXWBgJBEwYHoxUnd6B5VoBLqXMB6uCnzo7unRH8JcGST2eGXbmeVni7tyESZP8nbWwcC4BBju8ux8YK4zMtqo"
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
