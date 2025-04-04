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
    "TKsASeGAHqjJQijWsKaY5pgVUaSwZpw6XZWZ3imQ1jd1j1fci8KfruzpVSWKFq3ThCzQby57HyP9crPqFZN9yzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23MAGcdpcFzVDnGbTDRuL1SAyNggi4JQjFfaxXVDaK9xGaxhAiig2ujPCkHTuG4Ucma5o6TmYKR7YjF5TA5ic2tf",
  "key1": "3jmBYu5SRLh6MpcEwXSYaZxNZGmQ4YU1uJhXCVGpznkHgdLZJAJiyYPJb131X97WojVQH3qLkXfP6vcwBnnqjifL",
  "key2": "2MMFiyUwvqkoHCTh9rPFCbyP1mPSdH4CMK4PmskDDjSW7c2aN4aXtd2pvZtHkpTncNbzKvedTiR512q4FRrnRhSe",
  "key3": "37FGumz8h9EY7QPWRGN8grx8zouPJPTzudjuanJgurTC8MAhdw94JNSn2tV7o7kezj7Ba8TxfdKXRYX1bVfgt3YY",
  "key4": "gwnZ9oQUJZXmqA1D8cMefsophDsbnPDLWu8QguepT2y4A1ozeUeKmqEjXgoLvdmnKjbdMxqZspYnZbzS9yWutSA",
  "key5": "ztrcRcUxMx4oXg1ykTSDKdatt1A1TtyaTpvk7wtpPejooNTAedqgVNUTixGGNqgm16tgbgj6bDLN7jFgQrwbeQz",
  "key6": "4LtCWrTfyovcp6rrLCMqtDqEDV5oiaSPsC3D9MQgXbjSDnUFiS4cwrqMDqEg7Q4SSyAbCgLMn64twA1ndDTVrmwy",
  "key7": "4vPQyq72CvpwM3bVfDWV5dCXkZAwHPju9v8ksV5M4wMnJxwjvaixEfQz6D7V2k9ThRPSvYRiN7QAJMiTQzSdi1DM",
  "key8": "3mvQuHo3sPiq4eTuiVWLibvDutoL8jRGQnbTNG8UHstxh385GuoHY6Nf7BxWMhxBQcdV6MzUvw78TvQSbAgRDkNj",
  "key9": "3V17UYQVgEpmNyAECSHtu3bL8bLWLVeBYDeaS5vAumHxbY2yXDhQiLvSsDBvX1RjTmwbzEUTy1MWbUUCMXCnwKUf",
  "key10": "3TDmn3JfZ1gJSuFgsn2T8oyRpPXsqyDggEnmVmMFmLpKaUbpEveCWMZ8HyPkq864MfzNx3q7uF3DEioZmCgbyMak",
  "key11": "3dQB2MQtJK9tgXNLFetZL4iKxLMk16p6mBHxHYfLDPeDe5NcxaJaHqhgVeeKVbwBbYnsScJdgGDJE5nJdsn1yi3k",
  "key12": "uZJEBU26QNU6Xw3jk42nejmeN5LaTS8kdQq7x4tHMGvMm2rEJSJNPy2XsVcRS7TkyangCAwucUz135LDmyFbN3b",
  "key13": "48GnWykNWmkun736vEMCEBsJefH6eTpnvvi1S9mNhGqoF8waXG5su8AtBRr1ekDCkQSHvAJN2mVjB8KYxYWN3Rgc",
  "key14": "64KdGPsYhAMBoBV5SQ4tAV6eBrAddXgCrLMw58BnYYU1cviTNJS79bLjFSVduysoTHEQnhXUXkeq43umn2NowByF",
  "key15": "4Do2uFoPrShvuSSC2yJcYRUdzQndgcZSukoQYm8mDqq6mVS8P5g3CkVwuDFSAsM72YgYN5fZ7LD2ngXcCzo7MM4y",
  "key16": "62SMifMB8t1TC2NGt74S5hkEvbme8CcpnTKgWfW4rnPWrA22b4nXv8DHUSQuZGGXSXG8g6oTzyWj3RsXikAh5U4u",
  "key17": "318zhndQewiF4ADyWCvGNLoXoFyuNmV5wy78GmRFQVs7foJ9R9wG2zdfFexmF7qF4o2DhvMzp2WjqXJ9yJW9RxM3",
  "key18": "4KdjwXWDNadPW7QZps9zMkTcAY893nbLhGdQxvgNmSdfMxGJzivSWHfC3iLLMuDvejoBX43ZcDF9QHFsbPSYKhKZ",
  "key19": "4aYowuwhju9fYdXSzZxP6mAPxas2kfg7dCu7Yt5JHLdUbLz8jxKytZ45VvoPyedAVyjCRNBKnhfCTZiRQaa5N2vG",
  "key20": "5VdLFoJxi6sfJ7rc1uifbBk4Pa2484itX3dSy5kg7r1QQnYk9ciZaqkVMe9cnb2pw4LynusVA2W391Mbz5KWeRBr",
  "key21": "2CyfDVajFNTs9bEaA6sUYZkErbjmh6JYEY27gUEXDjwvhweu2vxuVPYqRoVXQnDBZrJ1Ko8k1mcHKbUp7Kkk85dT",
  "key22": "32Ap5BgLD84tAibZ6wz6YKYB3i8ZZPCULnwFEvNzcgXJaSYp9Feb2v9pW4Q12crDAQcY8XuKNzTnquPrDHXJwF7F",
  "key23": "3vLqvgwHQUHP3Qr6pTsaXP9jTjqZYQSFvUJRam2krkph1CBRcjd2WjPBe6u3xXcGUAMVuRwgscyxuoNBFN9fy9zq",
  "key24": "y8NUWUFN8c5ZiJ71TZaUn7iw5LjxAsUFnQuMs2uNY4WGHezYLWxtj8VfVW63XxNTBDUjxhpDbaik3c6qFLGk1zE",
  "key25": "2WZF26w14GjqjBi7qpVN6H1ekWXgfptSb2Guv8V15twyTMtHiAD921EC5dtDGBURxAYX4WfPnSeLU5EXs51HN3Ma",
  "key26": "365T7jK8mXHoHYCznMRmyy9FVuGLXQYofarnrhhSiycosn8ytefh8eJjczEFXzyd1VKmC3rVLBGMR7GEQHNr8cYa",
  "key27": "2VjvdTooaNaee9Zkxd1zC7dDCo4a8fos1ibtAgukkGiBSCoSUaUaw4fxHk6YeZSJSgR9jbuUkyB2zaifQ42fUXgF",
  "key28": "42MkpQvPS29ufcRJubshV3AMT1eKfPoyRAHLkdFcdBegoNv2Ne6PDMLT43r1bVhN2x7bXqBAJCQgg2fQ2W4LkGwF",
  "key29": "4nkn9ze5RtZUi6j3CAkyU63J4qoFS9twMUhEQtn1kGMY59TtM1fZSFsesidZ5s2zMCQRE6VdBbffhoL8gGuXSkJ5",
  "key30": "fRX4pAPHDgvGzTmQJKPVUX7DwESreSTQy9E4aLo8LvPhho4FLh1Eu9RQHJJ5HN3wo8uz4PXZq68ouZfwB7DEuTU",
  "key31": "5eV6bTjRBt5HCjVVW1vZiqAwZkgWJTtvWih1A5FppF8mniW4oit1NKwX62vwgY6gqsP5ZjYv7RMZFT5yscm9Gq6b",
  "key32": "2TnbDURpZXtT4GZKSJBFAARaBz7oaf95xfR5JkJFRf4Fn64udiWUCC5T3EQKRcvJnJd2fGjqfLMAfBPxtCQ8tca2",
  "key33": "4mg9BN8sPoztX6LxjQgEZNcg5pSUQm1gcuboBUXG3foKdQoiCknZeApZq6jkniPATrv2p3WTXnc66jQRvqCXz83X",
  "key34": "3iQqKwyb7jHqquwotrNrYB2dABrkHFFVTzqBpXjFb88uUQ5okWdEjgkrghsF8xnouUmMjVCUexjr1DKUQKj5rTQ8",
  "key35": "4cnMQCQiyk8Deuin12cacuGS6PjNWNDoN58Bro7KGmiM4P5re5tZ1Rswkt1t4mhSv6nmDEG1GBA4FWJHR5tSLpqH",
  "key36": "3ntw9ngfG8sujdE7aq1BJ88PDsxr6mxRZSkU8P3bUnBXiqShSD4KgNJp571hAvzDZgbJVwZPe2M68Zrfwok99ZRq",
  "key37": "3iDLPybC9kWDr1NoksVcvTHfgFju82T8L33JddhBEjmpfWwDF4d5vmwFZr9pN4Ccj6r9YcuaoB1mS8LA4D3VKEUz"
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
