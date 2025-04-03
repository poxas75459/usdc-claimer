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
    "4i2Js7wqiTKJKMdyomsuM5EMf5MxszEzYfwPZbqGQ63NhqYVufyF4d8ahHcivarGf3wDVg2qnLXM2GY7JyTW4fiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RW24s2shhEXWviXoNw82UMKeLvaXqQnuUkxmGUpGewiXrJrfvbrrqVJqdir4aZwuM3JqTndbJ32GgqYqRdG8jnQ",
  "key1": "4xr2mDTyutLfkysNHYWmqy7o831wH8LNa5TmvMSrCPZ1AJsTPrboJRKKkKGAjJ35Sb3rASsXDcsxtPbmRVMnc8t4",
  "key2": "3MiCE8vP8jg8TdH8TvWBpf3YMds4yyMuaKgBMMZkeNDy7gYKzTgDZdkfk2Ao14BYzjMiTNczvQPSTu1WYbr8sFRz",
  "key3": "4vjUxWo2mbvmgzjr2kBY6Um84r3ye76xUX1dGmPsSq2FQPexS1Nrxr7duJc9ot1oHgaYh14gMLV8KLmEhxSNVnfr",
  "key4": "3KW7BagRrbP5u1UfEyVYt2GAA2G4EQcF8RBD4HfUYxYgMaqn9sw9RoJ6iMsPbRh6vKsKoAPEkypaFCa9cbmyBiUg",
  "key5": "2N5X1XykbhwwrDHmBShQ43T9fkY9CQfdDXfxnkoaVssKKjcQKXL2jnFN9uX8tNronXze4DfJcamHv1pC5tKhpfJY",
  "key6": "51dSgsaGVXYVCoVJRQEw8NZL9Paqd8svwuS1RFCMmCViEobD1y3x3P4xGqKkv5yQHiiUDTsMndV7sjWbMk8ZdWFz",
  "key7": "4NBYBHefUxWktn2k5AqZiXvYhmh1TXLYWMGhALPnoXprQg4Vwt4TWKNp7oUzA9MgNQYHGJCmkiFMVKYRYjkARBjh",
  "key8": "2jyJ6GWsvV8dF9QasJ5q3NLa1JFMiPaQmsZmzw4FKvfaaU1zhkovtzegcXk1dMvmJWKf3yQy63HkSwVPzsgk8ZDP",
  "key9": "2sDCt7LQi3MzrzQXypNWnqu8MdGxWY6Z17rTbb1zWFF2Hg4kdJC8N4pzqWkqDkGFMAv9KhV9SQRae2NHB1CZCkno",
  "key10": "4k3PYsNPdEptecdQw4gcPcYfJvbnSUsmQuPtVN4CBkaticYBP4StTqFzLVCTsB7NNt1dPajx2ZrMmUpQnd21soiw",
  "key11": "3riBMFGLW1r1F82WB2pGk36C6h961q9BX5Eo8xBkzSGgbXCixqRwvG9Nwhv7K3hvCgNUEvo5G9L1VRahTdeH3z8a",
  "key12": "4ZQM4CfMGJ856UF7R3tmju8X9ACZj1xvaRDnQVDrjVFUSavZ9vmkRitJKR7VNKvZ9p8kkdXhoPi1LAgY9cGnECo6",
  "key13": "NcEhW4A6douW7giXv2FB2r5yJf75Q6CWbza9nJPKKiSp9Z8DMroUVqRD6v183TPpbrgWYiw2Kp96ERETJrA5B3D",
  "key14": "2iTUG9VFDrNsgug78sNkn1cUBGgmd41JYCEw4DVxh1C7ifnf5X2MXCMj6uWQadzNj6UwFJH4XbHqd24KNZ9skhcb",
  "key15": "1mXrY9nuWx2JuiedUBFBnKmjFMyZUkeDY9sxFJ9AMEkiJavsNEELixPeHpoj9qgX3sat5o9dNJKA8sF2txCzaNg",
  "key16": "3z7H7AQ2xZTQ7W66go8d8CGE2hBxuvYiksLN5ufL2UEDVQrZJLKzrRffs51sp5ggxE2NXMLhmHUVJdj5EHJCRyrb",
  "key17": "4WrPfvtRvKHq8t68e21p3p7jg9yBtCXN43im39ApRoNTZ5vdkK1krfsb14rco4CCbx7hDFnuMuSL7y4AF37dQF3T",
  "key18": "5jWdTqkUiCjWDxvg8CtxePnigKUf2ArfP3NgAH44rm2eWkYgwDmn13fq73USS8gr84ws9hCuwEayRbM1kGq21QHK",
  "key19": "3y5kvD6Xs5RQqJ63n7oKrfbB74SYKFqtphoFXkkH5Ghjr91hTkoa3QTaYhRzU8NyanVUFyG9itVNwBBzQtTqb1G7",
  "key20": "332MX3BewHHMkjzwjHsWi6m2xxZnY3CY3svrVAgbQhc9ng7Q7LjVyvonPF9NXakTzR8FkUc8qxQKXz9GBDQib34U",
  "key21": "5zcBzU9vY7ZfpNUpYu2vwnBuedtHbUKQBHGFDtubmc7KnSH2kcJirtmroVa3ssQF4vvY4mBAoDTt8LJ4en6DYPYZ",
  "key22": "3KxqtWSeCozeNxohGTjopwoNJsAyc8a9aJuFn4byPaYwbDzBJPtHFKP6ZLH2mU5wFjxvcQcYUbj1Wtv1eYnijF6Q",
  "key23": "2jrxQwYCkRaEvhSErZ69HXVUzRPmGGuDEu15JvGasm5tUccnf3qejMj4K4uJ4RjHWr4kj9urr3hNfakSTuWihRfE",
  "key24": "2ye5hUoQzubB7ExDQZY4ZZ2g5UUUbg35nfp3sf8KfdNY5KF2bhuEHYxMXeWwVoQ17kDU1vRjM99n9VMXCngVXuUJ",
  "key25": "4Q2cHYATa1D3aAaQx8WE6WE2iYJcrMb2B69CtYnnwH1QCfK5EG3mAqTfMwRE1xWVvA31KERKwnXZoAA95mi1rv3a",
  "key26": "29Sn2zhUbC63AcJU5h4QKXr179kiWsQ1W9t3jkmbdTEcDLGzh6K6M7kZGGKkEkRrYfhaMvAsKq9TCUuNxucDwY7H",
  "key27": "49xZhXMP4tm4oWNR1qcfHmykuKn2LjQLzJwMvS38w2ixL8RwvAvh4K5USCoQzZB9ddiQLw7vPuBfZoBYbpQCAsk7",
  "key28": "2E4q27W4cMugMJ5jsxwJLcM7f91CqwDeKcBJyeoEujZ7YYa8jcwU6UznpMmH6HGQENTydAYvBeCKXYBEHkeZA6pd",
  "key29": "2WErdRhwMgZ1XUSMej52ApY2rQyk9qThMNdnBbB53GkTe1EkRSFVWMsKcg7xXekv2HKvmQNRPursvyAhL7Hd7jeZ",
  "key30": "3BZzjanzqn8UWoZEmqwoSxBkFB4n8awK2CVnY94kNqxDQfaBZuZTnUkmf6Lf4UtUf4BBJDvEYcAeJa4WLNPRJT9u",
  "key31": "5idSdeuqa9gc4cx8Mzcivfkw8QYSLw5FE354AA7UwyhEutijsmuSHYcw9b94nWfotdZSLwrk1PjwzCAXQj2amUHN",
  "key32": "3n1zRWAffAeK2sBB6VVpj8c6GUcUVmKHrtcETtjdYCgGjsWF1rdaLRj9vrDbzxe7miU2SvKm1KgNj7oK66JKSRCf",
  "key33": "3T7pkdmp7vhe8qnWSc9wg5jvXZit6eBHTfDSLMfz1y8jELKiD8SM6x4ZZVnE56aEmqeyNLUVB9aS4v1Yqq2MTjxp",
  "key34": "5tz5sZdRW7PCQytfqW7MVNDVeJLp9qZD15JU4kess3gRkMwkRyUHfyU72Qh5EsrQ5DU9dtoyScdJVVeM9KswgjZ3",
  "key35": "27XkYxZrrd6aHa7TVXXRTLhJAnMrMqXwWtSwkc3HkPrL3YeSNkHuEytTgSY9yHB4bTXCpTfyWkMgPDLzMdUfVzDG",
  "key36": "4zemg6VVeWnwY5VFYkqV1FyZLRqMgGPTRmKrDCYAG4XVnf49dJw6fU17ucpNcp1sTQWhziFkzvUAfPTfxoshGPrc",
  "key37": "4xBHf2B9Y9WGwq8aCVZzT57tRWxpMUBie3eHTCTUR4UMiYTbPZ4XaaE3uHZVjDxkL5bLCvVLZF4gWf4xhgHJ4Te2",
  "key38": "2pmVivJHUUiKFM37VyUbKgRNxbcfwE9cqPY3Fc4NL5YphjGe4p5E8ZEv8cvwgsTzVLnWzTBtRMB5ZYKxtDEk4CnK",
  "key39": "2KNZvCoSWcKA9sjC3d3vm64L9hU43KmFvHCcbkBBvYYGBa2SiM4PSVpF6uus2BNjWJhAeit7wKidyf3K9tpebiR",
  "key40": "2qdJw4gaaHnr7AQXS1Jg93LvNtS3huDhcvuzmPWHgmakDf99f7YkBaXcweAMVAk7KaccWHReDf7wcCn1MA5JxmiV",
  "key41": "5snWrtZBstkNrSNPUuSTDvCryYEZTHv5btgc1uP4mUzyc1TsMWZoFPVXe37GdXGECR5WfAJmhkZA4SYG33FAPh3t",
  "key42": "67SA31natVW48QLzymZrhSyqYwpNdxMoLH68eXDvphqJrz6nLY1qYmGm4cYX6a56NkVpPQSUnVrU8fcBq7nU9D6o"
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
