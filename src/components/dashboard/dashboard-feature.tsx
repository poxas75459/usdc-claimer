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
    "2ft2MLTRGL8Gc21c9oQVf1ANsj9PXUQtDttbndLSifjyXSELNhTEuYp4BQp4Luq3jVSfxGaH81JQVWTv5rG8Ecrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pfacGKXJg4QbinqHgBdWcn95qsCG3oJiqjoTMEL3Y8AfunY7xZ1fg5Q6WVr32gDpzpUwBNFuh7XfNmVWEfLcSZ5",
  "key1": "5jCn3PqQZati6rA5YBLXV25qj3zDrUNoSgeSpuHCQFBJ1PUFeXtRc7opf5quELMCVnHjRqAX751iw9NkJyaBZFME",
  "key2": "5iMexEt1ByQSnZRLrWPJs4CdkLr3t2oGVjSdzTCwpGCjJJbJvadEn5qc2hud6bxQJeKs9yoxEYHMj3EDW6FchUk1",
  "key3": "4KCsMhgRsPcoWhD2TJRge1zjMRJBZnL1Vsw6a98R22DtfJLuRhLpPTQgyP7TJpwkBSayAYLtkxryXheiyoETChHQ",
  "key4": "5J8f4AsZqw8mwqbTsjfZgXoaKw7LyoWMonGrBFrZjWu2d8zoEBmxMVt3m1A7c5YvmuZKB4LunNec8iyBjSzq2QHg",
  "key5": "TBwfMvqKRoeycBKCd5sU7gmb5QvS3B4o2NnUX2eixxY6PDqVcSMJcjBYcivDap5SZcrsBZ7vNME8Q3KfP8Dvrs1",
  "key6": "4nbm1qeVcAZKnBnRhmjrbpDdGq7eW623rRwXjgEFwBHujxLPcRhhXnuXwvDpfyT7u2R4BmTQwKLpMoVcjfqRbu3M",
  "key7": "28JEjFsRujgBzTXRjh3FEuR2QEkpawpWxqczavnDx3SS3q7TY7r5ERSszayLhKSZk537F1FdDDwwiQqFP7sPiJiG",
  "key8": "2vs8R6ZNrpETBZLkjFmQ9nLQaR19os4TJMQJ7LfMzrhkGqUasej6e6ksyRCifhazpS7hCAyVvmj45yT6DGgkuTWz",
  "key9": "3GH9spbNBGN6D8QTTFtiGA7LnpBSFfzvSLBvdSZ6K9pwJphYFa2KwzfewRVnsH8KV85XPM2MRihZJbbyJ5ReqEiP",
  "key10": "47UzgNHX3E7TgnzmvwigpSRiHCK3rLdTMVg7eXfLdqe72GYgAB85qTHdbg246KGdvYbkUwBzpNTwVSrAQNGL6oVt",
  "key11": "2c9zfNWV28LoM8KPygjWQBUHKHj8WZhPjrwu3AVxFFN2b1TMRBwXSNbgfepZydY8Fe7UovfsVdoNXnivF8zDUpDr",
  "key12": "2geVexGTactDGLF3bkPT6orG33vqCzPazJR3mS35cxgLqh9T8ML9SRyrCPw6RE718McSgPLuhBebuHkLU6d7S9us",
  "key13": "3vjC8v59MKcUbj3ugj4vzCx2ehqWsP3rqqNBvxi6kRwfZLmWrs49LbHyVvmyZuPDW52Z2dknapLjx3UAY58oRDxw",
  "key14": "trxVuXMa1GABSW83qTnjX3RziPciaFTFTt35svEZ4PjoxQQ3pF1MFVMmYLdnhxiKS6eJq7MejjsCYGqTmDbNYMN",
  "key15": "2re8RSEuhtJqkSJyopRvTAqaE5Eykx7zg6fBLCDJt5mjrTAAYQqcTXEg7T8AVxqT3BQCfFwg3Qvv4RCQkqk7HFkd",
  "key16": "5614m7PncP149T57K2htW8nrUy5yLrG4Yeff9jCHaqP8GT1AwiTWW5U9WiRGLRcFggxKPLhKexApvZPf4QJjjtif",
  "key17": "3ABY7CU2QM3mV6ZSLtzRgVBG4nK4JGDJu4S9Cjvp3h3A4upo5p7G8QctipDmtmRXYKTK7wFMHxRWp7L39NKie3rD",
  "key18": "3DkSA1JNty3CGRPKvaBQChJEoCspx2FSrrqPEoZgTRb3hJmgBbWM4Ys3Uq2dW2HpMir5zEmdhDiG1T6rVvsHAYs5",
  "key19": "5SjUrFSm9g9xr5WU7HAusPYkixwUidCZcumjB4PGJVN7NFV4uG43ddErsBZMordueUcXtHJ7hREBKCUJFTTx49MB",
  "key20": "477YPKWDd7tTEYSRTPLZ5yqaguidG3NZqUkHj94BNftF9xXzdu5e8aJPkwfN39y9h141cokE5DpbUX5UL2VKG39J",
  "key21": "aVPm7zUW3ojB6wa6JUARMFGQ3LNYz4RqUtsXasTZYJuSUFXoPeKNkcZ2VxK4KqVyJr7No2PLxvEshfSiqKGUb3n",
  "key22": "57LpALFhSBgnrpV5v1xBsizmwWzXsKUZQLfE6CLrjbmSiwVKLJKq9CRbewAaPqTnetbUFbaXy5BiWwHCo19BK1HX",
  "key23": "4FX3tatavkvMNQWC8ypMJSrymSCS4Vdvj9zXMMbtcppW53MeQPNEY4EVskKXhTMPb6n3bHHgAizA41RnKM5naXAP",
  "key24": "RWSqkxioNtNcR2RXrMhC1Vj5vK7DKqgUZuB85PAwYuN4DFuuw9Nda8agWhjrv7qTGqabtUB426ZgR8DXwHFduGv",
  "key25": "X9VqYnnxtiEgVXK5sAs889RrHhv3Peg3Si7FwdxZQDNqbHqfx9r3KNYRhAovvpJ6GEStCFBzZxf56DSEL6KWET4",
  "key26": "3GECsgwNExE7zVxrDLXAwPcSZxWePsUzFnS7sEogPwu6bD4AWfCvtKQEc741MkLpi795eSBY2T8DXADiNeofHwdo",
  "key27": "29b7F1QdY6mt6vrCZgN6L8NkaYYmrEHKELs9zJZNxYyJNPetTdxJ16njcVnf5gWKHHprpzHn76UdfNqB9jpcVdvy",
  "key28": "3GCdbAhPCxjRAHRdjdw94csZRqNo7SinAmhX8bcSi3tUAeCH5rukstbQY9i7tR8dPe4Hoc6P5D2FydMqvGoaePb8",
  "key29": "kghtPNYiapC4VhYANZnNKDgswhuTXkFsqzaX62PKsHV6k6twUKRv8Zz1YdPM8ZHmDifLAinyKCmm15gJqLKpVzF",
  "key30": "2SkVKyDni9vtrnbZTjfyVH38CD4nYKDnyQcpJMAQpZ8YC72Q7fxBrAgGgoBE1dgaqbPqgiEoNpXG2qMkD5Mz9kA2",
  "key31": "17RWCsG5pUH36FapWjK5hQqcxnzXagXNW47jvKMicG3ksuEKDLztiqpj7pcgFPxaz6ZLDkJvAyeuiGZ6CCkBmUK",
  "key32": "4SKjSDCUgQKzgfrfNmsrz8inXAGKZPpGRHrNT8vGYmmdnoztcGdC4VsFJf5bK3zdYy7dH3QHhDbnnjr3sYgG71hq",
  "key33": "3TGCq3ZhDpWYghouFU1szZ5pF9Kr4GoiVg4CsJ3MQ3bSVP8yhjX7mRtrmdGpaZnMK2PjrEU9dFfgch51KYPoBg4K",
  "key34": "3YJHSKGA6TGtaUQfay6G2HiZLZPaEwvPvZUXV9eF1wdHZ6r5ND96rtwFVPbkKq6UnNn5THahXNdkTYx6aJTb9FLr",
  "key35": "45b72uhUr486KfiVUSacfVMVxwBpnybTGZb3NHG3qo3Eq6jD1VXg8naKusmED5jtYW46QHjRAWfQseqE9agzgKyM",
  "key36": "42iq1aRK29fCDWFboaHScvQwZdKd6Tu3bFjFWZvUYLUWqNGy4XHE1MRnDxvPsDTKiy5v15aBSKiVrTJ2UHDVWJ8i",
  "key37": "X47vDuT4rYkSmyXs8wfGmfBSN16DebYSdRXWRf8n28x8C3dN84XbUWD3ZkiJbacfu12hdBV1BFCpQq5V3aCkwFv",
  "key38": "34mPGYREDZkYFYMiNki5njeH1VBeuXyycuwNQu8LXeX8FKjAZxXDD92wzp8gACzxz179rPpmA5taX9e1u86KqtAR",
  "key39": "5jRJiaAm8Tn3BEK9RkRaNqxonABf4TuhPXCgivYMKXB5ENn1EC3gBfJ4Qded9jksKLyeUgv6LiCYqJW36WW3vyGX",
  "key40": "3AB9im2N1rpXCAsAoQAXCVWUXfggo39MCLqhCLCuHAuUh8tnVJX2gv7D7UTjaAKvHm837oXSLmiwYjxeHnaMdbcR"
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
