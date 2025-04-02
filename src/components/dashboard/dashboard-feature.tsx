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
    "2sFMN5nnSKtW1NLWf4VTjM9N1YzUsxmf4RLsvAJimDgf8LX4ifC1SBCJ4gB5CqbbpjtJ74yNGSET2NG2Sfm1E1uB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55YgrSpkCqLEiwFtDGcsNydgq3wzMHLS4tLmr2GZ7ELbGtCEyK5w9unRCGH5Cc1cfMrBuH4ZhUL8S9GHtEDmuC9D",
  "key1": "5fYeDmmyuZFcZkDtkR8GjgVJFB46mwVBZDaB6xSRe6i5ciX49r34pvUiLwGjv1gzugVEAG6pCJoEnAiTHL5QZCS8",
  "key2": "5QDNAjm3uEBjidEUEGZLHEhkUoBVfyRgfJxERwNgcBRSFoMXyfb3PF5naKGh6fau1sfjroR66NHjubmkp8TiMWtB",
  "key3": "5FmK8xTHgMQ4CNWVf3z5sMr2vdKvt5ePbzT251T2NLhKbpi5Sz9bVtEwgZSzZR1ZhByzteg7yQ6Y2XEV3ryGzp5e",
  "key4": "vsqHkN4Tc2x6Sx1XkGHsmEdpEhS2YEkFg4RrCnbbiwPbKnhezwazjDXXeRLzwJ626BU3sSAbyDGki3Jv1zE3VBz",
  "key5": "4Xjxn4iM1XxivXEiPThNJJc5N2c1TMA9Z1zHewW2d8xKSWbG3ufk1E1UddzzKot4Hf93hKsUPqqfmzN8hJbmQbP5",
  "key6": "2VX86tsaMSEv4bawBBWv6YEYZ46GX3smCe1MePDoaFDJukiaQHnA9Db1ktpNHJRAPFqYng4eCei2kT5UFyFYabHv",
  "key7": "QYFT45qTBW3Q25C8PvASFHnRpL3HpVey2C5YibJ3vcCk8e32JopU8XCdhHqqhvhgj4BBruryZwrSAX5iVYg4G5C",
  "key8": "4jvRikrBHWw97vhVtyuZzU2dPHWgr6J7YEJBJTbDSJvzggE8FwGkR3W1nMd9ToHAUx16M3CJdex818VQPZs6DFbC",
  "key9": "3Z2ULmf6ThRMr3KE8BJp2Px4SzXfdpvKjSkykwwrdLPD7Mz6XhLgukuLVLFXdykS8v9J5uR5wVc6bVsKDyeBBCM2",
  "key10": "23XJtpz6fmBkckofG53o2W7qWAsSJtRB26njY3xG9k9riKQHJuZz9jDUboYj762b2u3wY4kyzdDqd5wMkF5zhvnG",
  "key11": "2My193oChERLrMgqWFNvJVkPqfpXfx9eaLHJQNsFo6V1YbJn6naXPnzwvyNKTgQmGMvZyxGxmS3D9d3diTvJA1Fd",
  "key12": "2gMauRtL9VqB89JqY9qzHFyj2VQ4gdiAVKwwdcorHpiy7yZxjqfmJkVLHJMjXr1mhZcHYoAn23kTy3bP1HceFwoj",
  "key13": "2c5JJFcEFTMTstYeF98xsnrN2EsUxZuzo4NKSbqXwgkNiWcbwPSaKtUKwUF21WJBDKHp2goLuugVuSzvoazVf3wg",
  "key14": "vQxcahFPB3J6HwzP8BFfiYhjma2UXsbPefeqt56WqkQC58SjECjQ5DM5uBgYV6wiko92BbN9r5AkDG1nc6Y5kgL",
  "key15": "YaAXcsufNQrGjYstyRQ1uedV58WqFrgpUoMkeaGwo9M9RKdgpaWMStg3aU31G3wtaDV6nxLMfNiVsPkfBELFehK",
  "key16": "6K6JWLhqpG1N99eSn5d4bJSPMpoARsRG5U5MkgcnMBHWLwKFh94AuCyFNX6AdstfoEqMsqruAXCLM9CRe4TVYvx",
  "key17": "5jBBbLrdwBAGrq6NViw4KSnfS9iAetyNi5a4FXYPwfWCCJqFD5TtNyUsR2aD5TJiaQ27uZNkD6dKeN9FmRt1tsbp",
  "key18": "28kDcEvhjdRnLFc8y4z8cetwQXuNFwuLjaLoSMBv43chqNWvUxqWtSgGEkqfGdebTfQGY1aZX9itk9dd8WFh4Sue",
  "key19": "2rFRBH8BjNuqu2MmzSsU4wwm49BN5WbAQbzPjDuUMKXXpmQrp6bMB7vudd54zgDs19f6QAnhBKNBNMyjSF2S5eWT",
  "key20": "5LiFqPXHrrq37kq6YjFVJHG2h5khunV4vrkQqHxB7Nk6sjbLqTLzrVxqQF5f1Z8zjM9Tt85X3VZ26TcVTWtj1whk",
  "key21": "2zxFn8wzhwWvvPgfc4hsVJkF9Au7siCakCCsCja4KAX38mKBnNiugwQ3fEDVsCfqE4nA2bbjZhWYTdMidE2Mgnn4",
  "key22": "5xz8pxxxVtrP4HHtS931RTWUPsH1mnxAP1MvQnPzshra9VFTCQKdg1tqKBdGQWhbxvEB5EpV1iT71HWsiGbKXqTW",
  "key23": "5P54ijz2jEvntNEFjzKaPfsKiGga3PUuhDvQTYcFUj1oiFZ67XKsQzsCvx4p5pogLnwXgvd6pkKTAqGCRiAPj88M",
  "key24": "2UPXNkaQT7kVdEQ8TcLN1e8nrNvqeMv2DadVCCptNoTwZxd1iz1HRhAZCHJ6mU7Pq715UYZ3h8LNNp9j33ajPLP9",
  "key25": "D9ppHSrEk9vzYLFpZrDezceybsDrGyipyQQnd4i564jCPXn4YwnvUoABPrap7cxpEsDvABoBMd4Ex7oXHjHjfyo",
  "key26": "5XhU5k9NEqCJNu2HQRT1uJTYQjP1yY6BQdnkFKJDehb1XjPENaiYftboJvW5qDPgEvBVY6DTzr9cxU2YicPhjbuS",
  "key27": "43JkzN5B11ka9WViJhaw82xZHYeBrdvNZLpJNs6z1gofAPvRFda4DKvVyhkQjxRFHBahZtf3gjBQmXoAVfS84UYH",
  "key28": "3Gz67ZkooaHD4Smb8a6L9kkHCGa1uYwuojZnW1NXi1wKn82DRFu6ejQiJA7j1sjUsiemgS84wAfZKnY8LyrKpYLd",
  "key29": "H8rVPL2pBsqbUTqfjNyiZnP1tZXRneSut9By6xk7HFToYPRoRr2YCUxLeipjfEf4Ubmar6sj8aXpkZd57CAGVG7",
  "key30": "4gTnFYLt53k6RWsT8aBRwML8ukW8ygGFagDuJfGE4fCiggoueLCayGGojCmxiG7p6AzTW8jq9NNadVWkjZ1X7eps",
  "key31": "3aGRQNQ2S3W9EemfeLxZj3McjWDcevLigGc2XUKkyaTgwz2KW5r9wcD3NyiSuNcaWY9ySoyTcd7Faa97Ag6f4hYh",
  "key32": "2PvWvcVFXEftsvNTdo5L6qG1n6WCpWzvGAKSj4uyzisK2ah67nfYuSjE7duhYcn3KqaebNA1g5SFT878R8itiZtc",
  "key33": "61gatvfBhtUN5ifNcfK5JnRC5YRXCiA8b2hZgdvJjthU4zEJGiNUfb2WSV8ibq2ojJTQhkJTUgfL4rRZpKPrpe2Y",
  "key34": "41y43oepUDoXYpvsPtWNWsoGmeZKT7DwsNk9giKNN7qq4Dp1YxHeTcfQsVficNzKuVB4KV7H2r9LeJUjKQQZvC76",
  "key35": "3K9pWjwssWFgQ2y5QyqA5dTSbkChLSRdi7hLe994DB4o8RpX1hZMxJv58zpiCggYrCY3ZwTDPqY2xVznWsVgu2mB",
  "key36": "22Thzd1NBtL3cwFGdDGaJoLnMAwC2zk84Ln9mYR2X4TbgYpgEPZyvFbppKW97vGiKfCHkkaZeei9sRzM79j49L4Z",
  "key37": "2aAmS3ESPro6Pt34FkwCS6HMrDtBn8ktosCRHAvKyWihyhNGbyuTuHUxQHyB75LSGYmq8UignHUqvQ6HsZPJXTsR",
  "key38": "2cS7k9uQHsjDu3Uyw4pbSPzt1bwBKL55bA7VhWLvWFWEFUuzFwryEkBFeZbfy3763axtD62FV2uvMQEC5a7Nk57B",
  "key39": "4rXyuTEd5bg27wy25iE6QxwtX5NcSF1PMRv9gijABYPNUsPFgqDAWUYmhb8xNG376S8dgNnAFxDJMyKuxgTNPkSR",
  "key40": "4hZxUBi48bKB8k9U1QHg8MkLNshLjCedj9BpvvVD7FzMG4dLwvLpDEn9twySvCwGkbNRJdTBLTiUvZ3HjjZvQG6S",
  "key41": "25GyyBkxdiXchmoAJUM44LGbrkD9jvr5caCycCZKAmKSzL8QbQNe4meEivWZQzNc9sZpf1461r7Wnj1wzG72admz",
  "key42": "52e5d1R4SzS9yhktoJ4LPRJKwzf6iM16FTyK2CEzRRbSNKDRR6vUXpejfQvZMiJ1qKSkKT7sYPoDZ6rmnrdmrAe6",
  "key43": "4ji2kuEE96yetJoNs4sRmKSBJqJg7U5LxmzdMKiKBXt5iUac5hZBTzkxMDRx54pru9bmjKKBnF4XLSWs8unPZNL1",
  "key44": "32iRAzaeLhvug3DUUFifV76BBWHZN8GMEmztdQmCCmcjQWjnjqpNgbT2RrEqQvppCxafjQmbXaJZPteYc9cPVGd",
  "key45": "2X7UeKTEnW6EeTogruYne9UDtt4Fs4DEdnRxDPy2aQA216WhD2QpSccSE83UJ8q97diPLpSz4ePmQAA2tDnHDskp",
  "key46": "2r6m9wtvtS1ikbYBuWyPnYfaoY3E3X9wJnKjsyVDiaYuwud9pSggh9aUSLP7oPyr8eLYe8y5bUDG1KAHVtoJFj9n",
  "key47": "kw66DJoMVUrSFRUcY6A4BfNmxZaj3iEc4v4zupvd6CDT1MbG8wrsWPGy2dhYSEorB6SoKuzYfwnYT89Uotwa8JE"
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
