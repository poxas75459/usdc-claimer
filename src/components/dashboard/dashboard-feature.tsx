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
    "2cH45m3H8bB7EpcfR7QSGZ8DMNz2sQtx3rsnp3VfmVKZRne4AyoVQ8QXRQ4GZq2RjqmG1fXxPJzV5mpy6w51A6uG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b3Pjun9e5dandTjZLHhPVBv9cGgMG9NeWmwcgpGc44aJruWBV9LNCyUWtEimybvUf9qvwrQcE7zgVqDHMrVKaeR",
  "key1": "4m9SaEE6PSU1NnF1JTRDdsr2i7DVZb3ZP8YthnMiXTg7aXNCsjcpxwseZbXTS14gc7nbs5cxT2pEijVhgufN63Q8",
  "key2": "oTyGwtEpcf6yb9R6RCXn8ZbuHLPbgrANHwLfSevPyCNvXgAzQWMamCqtrrhGPrjM2suk4GDu8hoHzKuZFPtcafG",
  "key3": "4VtztxsGgJAysnSXYtQH62CSfrJdXvU8jeWTLLDvuwunkmhqUZhPqZG6CGEEqrhjrxE1xNQNpmSoZvHyjGdjYtKb",
  "key4": "FgJT5gz3RxdqS8tmebqiSfT4W1GLdcRHEYyGnn2TVWokxgJDWYqHzZwpyv4ygUUWzKZLAmk7mQkJD5SLeSYCD33",
  "key5": "58cATgjXzexiCFDVgrgryMdCx8b4LNkXkkHsCu57gYwLqVuyipqmV3QxKy6FR21ygGBBDMT4xxeWKUk4hFkHS12a",
  "key6": "7NX8Px7SLpsxzyBjB5Ai6dmrJH4bHbuteZEiV5b5vazmP8B1VCBbJNxcnu28PcY1KWca1eV9wH4yfcFYjDcNWro",
  "key7": "3N9MAPe1Rdj7fyV46VERpAfdmZNAASdUwQQos4eABrursEqV427EjUoo16nbeUpY5rgxMJujiy3RvbtWgxk86TGE",
  "key8": "4SXK4jSJYwqzyCJPM7zNAKrSTajd64wnLS6b37YHpkqM84JCVRbQ7GbDSS85ije1xpBMR2GxnYPvSzU5KPvoRupR",
  "key9": "27CqJxhaWDWcepgGvx5VUxKdV9C9j7JPwh9dKY5VSG6yx86KM8YFjwNs4gp2VdyXeBcxMoAiZwviibXJFSBaeh4T",
  "key10": "5PhNQ5w6Fv5KwBrwacBMejz2QW9VN3AGFUS9J7eZigbkangh9ke5MSfE4yrVZLUaUgBoF8kMT3VejHvDHriUxrpV",
  "key11": "5cnu5uU6qm2QEw4AH4ZgUX64w1KJtDTW88wQR8MyeN8apUa5igobvjETL2GFiSwSCpmjDiGe1RHkSA896poprwkF",
  "key12": "36sovbHxhuX7qPMKZHvvBAa98W9ffZMZkcFeBAdsHCsPorTmaEPJgHc4w5XMAB7tdkpzbisZxbr5Qjf7R6jM36JR",
  "key13": "LjuZ71VxHGg2wjtbPDPfdTrw3NQKW9GvLXPUrjQ4CadEuuirkaGTY2JeNKkafG64ksv256GChNH3CTqpj8m2u8r",
  "key14": "5rhKiNYeEWjKzGqtfvDvZQjFaXCqagkYMn4r7o2kDCv6LV9BNkM3fJfu3jRzenUxYoWRrGLdB6KAgz9oWQdVnnHg",
  "key15": "5zX2k7usNKRaVYTbNvLYhAFFdhFTwvoBStJt121c7cvet2g8R15j5eRZXbDBkc4MQNP4Fyn842y5TpPCXTHhtQhF",
  "key16": "655La4XtUn6V72Q9ApP6modpCF7qSy1nEottozMWQ4ryUUAAbyUGGDcCsHbpAh4LNGzUuCiaJqEW7qqnfSC9x3VX",
  "key17": "4t9qiUUUSVroZMqZ5925u6CrkTotaCDsh3do7CCpQ3Ws4QV563x7xqxj714rvnie536pVmw4mkRc3Yyz54kpRgVV",
  "key18": "s2CtXQS5C4qDsrBxEFYKpHe8ZSY1Eramj6p2Fxnd9Z2iBRwdVeabC8vGwYFTZe1q4FMB7icW324FRvdHA1iLnJ5",
  "key19": "4Ze86takaAKdrM2VFRa1oLtze1das7yoGZdvFc3f6LU8SFzHq3ekGiPiHsAKtwBWqVD8LtgFEJg14nsk915KPqMt",
  "key20": "2zvfPBtkPrnEBneQnkatDDUMMnMntjWgWaESaVqKdZL29hXB2z6cAR2zGDRy61Mg1uwc1NaHRk3AMHVcnuJhXRsm",
  "key21": "3Q7BAJJ5zGGoyyzKLqNvdQNxdc3HBqtWgsNS3auqWnKcs9HmZ93GHcDp4QpG5ebseGhVDR2L8A5oGEErEf1URFcB",
  "key22": "4z5Ak7u3kmeZXJvyY2JQMFcxi2ycYncK37x3jv5ZXtdWRxB9RXpu2uvAX42hC1bpfyepCuMf8meY76ci7RfvFUhw",
  "key23": "4xjEvHug8SinWbsKacuumT1BDMAeECsYeAWQH1L9KbMRhjxGkk3wqGjMhqtYYv8hjtLVRQE5xpvyZsCKdbfkdx7d",
  "key24": "3dkDbbAdHGS28yoZ9YKCVEFLKqBE4nQSvai4BDB6cFUrtAgKdtVq32SbAsYMQB5gXCPkbHdWAxGYbPhrcWC9wEVa",
  "key25": "53uajo2uZY3V4DHdM1ohGCMfzXHrDJvon6JyvVNxyrazLw4huTTntgugxo3eVXfDdXUZPvoGh8p5unaRQQnYp4Xh",
  "key26": "5z6CjHonj3groZxDvEoSnMeoZjfRiyg6Fsa3M4CrptwAzYU3vHvLYFjF7jBjdJguVPK6YpdsaejeRi89p2MxRXoL",
  "key27": "AZuEgrrtEuNSmtY4Tqw5cNHVPkWQVLBYngV2jnuK5xtB2HdfUNWmHgxzoAPrYkNdkimLJg95xEmJJTgyiENBgqQ",
  "key28": "xfPZmSMjeB1gB3WEZLBeQ7XSnxeyvcLGpZewtdMcixp82tLF59qiKJfij3S8S2dC8RJN5pK4WshsHjuyxUaU8xD",
  "key29": "qF2K8mhhyFC6He5xFAQXv2XJVAw2V9JUZFTceBBdkvUSFBCFLdmP2NVfPSwpB4euXEk4aKu1fgAhWeTtWbxaMiF",
  "key30": "3VfpVQ63vMf5G2FUnvgZCESbg8XEWhbkqEQFsJZCnFgUpJdsgoNpAkCJSqkybuutydYqpanDjJrrnNeMqGveVvx5",
  "key31": "3eXSDBTBPtiK4qHegMbSyxWn1JVb6thcF9oQyjCyXC384bo2thNid9ThD6CVgFL6emjxZcJc7TRvE7bRWQweUwD2",
  "key32": "b7Qv5XJgsBsXECxc5g9ByjBSJf5gyeage5MXaXt4ohHnic67BJZzoNkUbsqj1geZMYXupCzazoFnQ4ycefCFYK2",
  "key33": "5XiGEzG57r1smbV5fKKCDmLvmUPS8Gxfh4YAVW7hFb8ZHAzVKqTtE6fjZdCkhC4K4FDvEnEZns1nr1R4qNrvSMdG",
  "key34": "qheRC6Dyv9psKHf18UL3qp6ksHanD8oRJcocrd3tSdqbV2ifPQUSRKPvpHT5uovxkLhEctfxZyT2WhnVe2D8KLd",
  "key35": "CEA73ymxpMzWq2jTaAw9tzyhSkxUcjfwMnKJHRJgxiBuoerqidjhS4xwoNR8NZG53825Mz7w67EdF7vjz2YtE8c",
  "key36": "2RY3iYdc67prLWSZCXJvoBMRCETU5fKGS5gfR9n4nXsh9ur5Mq7TsnxQNSTQysenw7Ppogohz1qef3UMtK9kNWTH",
  "key37": "5Ccc34zQ3UC2uAbBAJ5tNipAK6tbDRNjFjnqRbTQW98wjxBdm7frhUDNSqTZ4A68LgwmipVzXS6R5LVSHPKV1jQh",
  "key38": "2jKsZGhGHb3E3ZzHqsCNfjJkUpkATJJrycP44YC2PZEjjtEQebqGXNQLxh23AsBZKMZcAik8LRXsgZTvsS5MYPfC"
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
