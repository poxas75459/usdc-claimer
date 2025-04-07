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
    "29tt8ay37KLTdXVNzFtkoo3Xi4VF5abXnbLYHHXkjkwCsnRHRPXJeX3RjM9GZUAekULq27DL8mS4uofnedhrekNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XTFKWFC1E2j3k1Sym5CFJ9yM1BjHNmA618Vmm7K7n1qxLdDs6kfAA9S9jbnmV4K3SH7AnKhTWzKxvTkkTexspsN",
  "key1": "3AvWwninXMgP4m2U7ztBYjLd5rF4SEzxqSrhPHLMaYRiaZWFA8f9u3CY1UZZcjjuxF5NvXcBLuvxkUkMK6sPPp2a",
  "key2": "3nq176GGTdJdbZQPhmBym6dkF5vMf3CkqmxoovbGBRrGXmrGJPs9tZCrwEjNLZZD41QxFJD8u5GTGGR3R5S4L6pN",
  "key3": "G8r7XJzM64UmPgabTBUQRY7ihttyyqVdWmz39mDBMw7DR37ve8ABbL8qq5U3xnvywMsqabWBLPvWThEvm5xSDxw",
  "key4": "7BHB6tkAEeScthS7DHXHjGta2RbASyYJoeHc9sHPhZDeRXTS45gqwwxjdropP1HCk3Cbs4zxc2Ew7J1guYnPaQp",
  "key5": "4bSLyNuMNzR3GUFWfx7iX7qXqYvz4nhnF9vYFUkTGXvK1Q6eGXLfihRoyvvqcQFAbdwMBRFKsQCLGNURvxKnmkjS",
  "key6": "H8FybNhiTeSmKaQ8vtKS9gZP3fDTkvnmPVBsoY32PmvwVERoTLKcxQFqmboAfAHNDBy5D8dZnnVVhDi14H2KoJM",
  "key7": "5gWFSHK5SMSvQKhhBoxF7cvVxvFVwdsdkA33yiBdg1AVKB1R8JRnqzjXHjdg5UasAc2EG8Dmc8Tq9aVANrcLRi9w",
  "key8": "2c6PHM16NdSfSB15xFYjsEuqPV7ETeX7ftDuDqe61YuHgzQSxJFuJ34QvRcuJzSoHiDBQrcenFxf7bQ6XTJ6pvCJ",
  "key9": "5mZ7oLpaXHZgk4Xirargkd2YEpkuX9JjUAzaNxshkgDqtKomfyjkv3RGUNBhpLghJNRqedqYiXNvecWAeoq4wixA",
  "key10": "5bv4yiYqN1zZCvLUfPaScKpV2JUfRke3C4iSyqbTEP2YKM1cm3oQK4Dhf5VLYqocQqDHNbPzDnRHDZ4hsVTFuiKT",
  "key11": "4HVgFTqsqwkDBRw74ijmGPC7QFT61hwGsdCGVVNKYxykif6u2hhxyoDJVYTw1Bc5RF9qshXvgDgCDnfAsh5PqKC2",
  "key12": "2G6znVLJYZ5U84gRg2KEDsWKJQvVUPA4NXLPtgDDkpMCa3roLfs1aLuB13DuvAvZRncZB1VP5xLCJsbprDv5jouo",
  "key13": "4Ai1ZqLHrA6rYVCSfYyxXisoXupBRw4g89fQXBef8dGiGgp1t7vztEZdxvBsU8CrqWM8u1FvrV4m3uPmCHM874tr",
  "key14": "61mDLT8YQMjmxrh4YduULcCbpip1Gh1TPKy61N9ZWoaB9fz1QWJTKD1MesXAoN3ZaieBjkjEott2E9K8KqBZzW3Q",
  "key15": "ubo1PTG1RLHuxh8RHDeKwtYEHASi8pXycz9gzB7MdcqHDDiaVqJYuHMWZdEGLhTAneP27fT1vcZk9frkAUPhQnd",
  "key16": "3nsE4r3BER34jXk3j2WtLgchffhas24fGtpULWRrQM26iGpdpN8hB7i5ZiFqqKMvagf2Q1gYtxEFV9LX6VzMPzrW",
  "key17": "4CgXmctiMVUyyFyNwTQLEyX6Ky1oAjrHGGxnauqhbSc22Xq1it95gdFfnRCAAnFcZ8j48htrfHoooJ8sZvry4yEv",
  "key18": "3yJpzYdceSZREH1vRjY6F7SeUY7gFkNmLHG2AuWB9nCySB5qu6DfYzgUQXgxDZzVZ6w1CShcJet4bEaDj77WHeJo",
  "key19": "4PCWV4TsrvnBaHh8cZfG4ZYb5BevrAruunxdRf5uXbuBao4pMLBHD65cL4Ru367nwnq1piZmYsJXZ8JJckFKtwUa",
  "key20": "5Ksv525cwxEWvUNPsRV6MketGiFyfVaW6tU9nHdQeYqTUi7U9Jf4PsGEo2whkUVfLZCLmu2u7npbRPV3EpNC9HrH",
  "key21": "38zfDdJKdqpC9UT37R5ugr9JpyWXc9dz2fma44v8kpb7CqYMBqu67drza1bHunZSboV6qAbVPbkCN8y85G29hWzE",
  "key22": "51UXuDydKeTGGGQvAjgg48KVSbxBwdo16qWZJvyVZGuED6HwYytfw3zhakJLQVQ4TUCPEsvCcCJZPMkLg1bHzs2L",
  "key23": "2XLRYWA6sTsaBf8ncKp7pjzBvFHeZxk9RkZGV55grBG41dWCgJ4kSt9t21vrPqbj6KKzurVWdemdjhPaZ6cbSQvh",
  "key24": "4fkLp4Ho5XJL8jjoxSVDAV4wA7G5sjDE1Vn6zQbqq1qqbQfv4VtMgTmksd7resZ9iPQhtZdbnE5oTwSPeeMac3g",
  "key25": "3prbXirkqHLbfp3nzcnwQ6gfrXbJbUV16K74WDGqgxoMdS6Qjki4cxSmLH1yU7XFzgJaGTNCkyGGBRzKE5c2DhnN",
  "key26": "5673FWcnTF5LizAJS7Gm5nLeCv1ZG4Yy45Lg3RNtTt7KoxNxfYkPTZmjDGdP5fyEZPDA1eEacV4AajUgYi5i72Xj",
  "key27": "3znmTF37YH1hrQhcbGcsG5VtShDppJCnqpxjEzzS7PhjDmstTL7sFvgFynya22u85ksLZemgApot2axRuLPfMMQY",
  "key28": "2PCkYqUa5P45g7XPUQCrrGgRwj7YbKKps8nvyK9Dk6fpF5qtBk22Yf4GGSUxpLnreYbXA25S6bH6uSrNyDF6Esfd",
  "key29": "YRsNJAKRmfhoHqcvWYjtLegCv24fp2wWAhwfC7XaM3dhfLEfrNBGvmWzTeYQXvFDDQ1vZqRuD9xfj9FQQrjbgPj",
  "key30": "3KR5JUzeyLYqd6i8NEzXbeGcPqwUEvRPY4eTZjbCy42f3i5XDbVtFd7PQpQ8k5mnxqynU53MuX79UtYK6rg3Wdpa",
  "key31": "3WpzNmYL63Ead9y2iiqyhE8gAJhiQrKYvNu7JJdiz2qesmtaDx73xM1iC8q4fvsJns92bK28wRd2TQBCCk2Wn68Y",
  "key32": "3aEkuqTenL9ZyQKBW6T1hABSmvUvLPXigkkAjsnsGaXsb9FuouhMjMroJ5yZmyu2QzYVwxoxExyvhHRAGmjPquAS",
  "key33": "PGhTLdaPAANE8MvuPLieJ1CJqa5pg3tqn8VvnWUHCXQPUx6tQuH5or8LLEJwZaBzSJWjrUqqTht6Ks5xxzR2DgA",
  "key34": "2HyNNTj5fTrU4cLLHhyofvbMjGk3aggaixMvU4v7uVBwwyxBEmXWSfNiwnu7UTL5xFVG9wA36vjWq7CRxVEtPimA",
  "key35": "r1Aiuj6DuZhUd5Qgnmg1gStytfjGcFTHZwfvz8jLNxCKE5CyqnnZKmBn9oYLhMARcmLxs63sgDhTVQkMZavZi1E",
  "key36": "42yrDZC6U8rGhwAH8kQggoXe57WotWTCYwRzD51RZp1vLdPQk9q9FGskWzMDtjvj8P6aS6vfMGE25ehzxp4PRfvd",
  "key37": "5tCo9j5xrr8THPaVgN6c7AwwrPr77h48UKkoBpv1Dr9BfMteZ3TMdPJmnh6SEDU27WfvNc4kxBBXe6fr7v7nwhUT",
  "key38": "5ta4gace3ZTz74EUqnTChwFrAqVokx1fWcZXENjpFFWiC8yfcjdZfC7rn4f59SRRKUvM8EE1kRTXhE26cQF8n2Xk",
  "key39": "3igc8Upf1CBnXFNJ22PaZB9EJ2pc7QyjMXRSKapnVPvAEsJkEpKUqwa3LE6EpxB5ywNWeVqXpCJaob32fxM4qz88",
  "key40": "2DXvjB2bEfeQkwQZVGJNiFe5ARPm5aQ7a5AmD2caeSJuX3yGex1AByTwLF8qgWHdtxKNMqyvsC6fBRqhYXXbNMpZ",
  "key41": "5h5n5qk1dWu3cNv76ubMggnrS8QJQ33czYu9wYmJvbacVfZcy2X6vYPh5FjiQkeUugAS3sjkRYJvQXrFrEARPUi5",
  "key42": "51gSRx32Gq46BYUxaU8rwTLTJzWEipLXBhPRbRyDEvKb8aFmZiZYBh9EnYUb6SkBXsX3DuX76kYPogh1TPU1sCMT",
  "key43": "oJQZMaSYMZ32QYjEDVJyweX1mt4Fgrs8nqz3Ls9cttKnxjyrmFWRyt7sd8FpNamUko6rR3kzyFTto8WeXMigFNX",
  "key44": "5SrRt7BSGM6sNDJiAdUYsw6qCjGVCdBE3tgjsU4u83NNozwcEMyzJMateCNJ1oAWt6bDJoVGEPxLEroH9EC9AQou",
  "key45": "iAYJxSE3f8nrxbXifuUq4UT9j2JzwJfXU4vdBbTM6bBaCvzdHAYnMvTmqEmpNNgGaZTmbKcnkoyp6rMSd7JBrr1",
  "key46": "hQBtGLb8hgumKL8GU2UfKkE2VQsmuvpGkGDzenaGztWf1L3gw5hNQpPNCBGsyWAUaDGPz2rZF3A8VR1FV9q11qZ",
  "key47": "52vPUJM3CzzY5bJ5qYKooh7xGJWcAscuRiBMDA9yLRM2ZNDBbGXebyz5TUsRa1cKcog6xLFCTHGz6p9wSEWwDFKt",
  "key48": "5bqAZvbvsa1uuQ3yxnkLzEE1WtKJnU3HP15C1T8k2FgPZX4pWaXfWujUcL94tPEH6T18yK6c6Cf35QcANNoGVCbb",
  "key49": "67Cn4t9cyVEt295adgGr9vmjwhvRcCNe6fybtbnavqJJV7vdkeUGXoTC3hQcHJQmrmAFuNMRNxQrgj54JS3BVg8T"
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
