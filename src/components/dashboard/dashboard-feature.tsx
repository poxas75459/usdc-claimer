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
    "4A5ABHSBp2Arn4nVdQmXSiecnrV6ayyqXqHVLZyZpTqhoAUWKNWNoFMgUTZBSzthrgWEwRvzfXYAXAN7GvBaJnTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RZMqM15jp8uHjQ7pavEGACLyU5eWm4twqNanrjDF6D4bjwpiSLr7nfFHt1J4nCEhprzKw8FuZHxLNCV39q52wc9",
  "key1": "2Rt6V7gShbZdRoPTQsJe8Fk67VxSs3EESoEU8mpZ1GUhroRDivtEcr79njHM4S8m2aBKKqsMsxdK12nK9kh9TQ6M",
  "key2": "573KmRxB1TvDcZyMEwgAXBXc8evck9uanJX3mcwz3Q173RknY4U7LNrVMNTSY1wViAUQ3xW7HxMy5RTzvvAX5TS9",
  "key3": "cikqxgewCcGemHsa2LpueAX41MYD8BQw9c4AVCuree5fz4gFsWxPwNr4JZvxjBaL7XWCqjzEDg4LmMc3PhTagDQ",
  "key4": "32jEVeorxuCoiHCPH58kEPa2TdwLnbfsxh26efdHiTpgDK2BzRhss9r6cPHb6trgbH3qUGLtU6MnkmJJ2zGYAgEA",
  "key5": "4FvMpmoj8ggRihGGnr9JVgEvg52aKGvLJZrm1wNjWY5kVvSWaLTQvpacH6a8sBB1zQDnorT6XpuCxxqUANw4ZZEF",
  "key6": "4msJw98Nz7YFqB2iP2Li8E9FqvxrrU4jJKHodqHKMhhdc1XvDXo1CgTa4KH9TakuAAGkjE9F2EbJj7KoejFJjgbv",
  "key7": "537gWar3SvqDQjHsWCVFLWZgJTL3XwCg3NUKDDUaihXRCcm1YYnpzeSUAQpnmdaYSMDvH7QEy8TVmMx65DF3qW9h",
  "key8": "3y8toncceFYbLCuoZPUHFushH6ubQTsDWeXnRbSXQeodjcHPbyuL2tNrMB4VRYpuwc1Ywhr1rP8jPiDgpGELmenb",
  "key9": "2zHNymewzf3vDkk69cjoKvzLa9HyTqUJHVQg5gsGoupzJoP4D3XRkDZo8iZ7b9dpRgqmGX8cwTYGvCXngbdr6Nhw",
  "key10": "2DKTdKBFFzYN2SmvQLTC4d9HHPc9GuvwADBA3urALJYcPcc7GCTpwn8xhrq9BKnYpFJPpUJiToh3cXLaaGd9okXk",
  "key11": "4WaBx8gQF6LwedTX4Bypp4KWAg6ioAVXY2eqghHo4KNP2DhivPGqMK2uMq1VTHvBPy53VXjw2MdEQLrT82QVBUJE",
  "key12": "3Avz2wkPxXxHhFA5hEYkYoJ7LSqyFhqmL45veE4TFPVw1zxoDmWMg8fmnhX3U2FSfjvrrzNssM4zmYbJBo8gwG2Z",
  "key13": "4wMwPTzAEaErRYaTYgjgUgUoLWauAsVHjYdNBFP1KeEK1Cj7RvYasrsiVkq1zf5qgtffkVtDAByk5uBw74JmrZRZ",
  "key14": "4sqc3TBYXezCk3x1GJpjP62xeUjusgbmACFLAjNkYk9fx4FFKi2AwinLy1uuhbxTywmZU4Rm12eSqkBVhFUPh625",
  "key15": "5vN2F7syQsVbk5AH9DbLBSv6fVJ5KTxoMbbiSGrLgWYP2LBXQJJy9QiPBMKgTED8Yv3H9nXdiYoTu8gde86vWt6V",
  "key16": "4rs7TyVZy27GiYMbMnpjsKDPJyi9EBVd6NdkmENk89u9rVXPwYyvXN2XcSu9FWw9imVxwRkj2ewtErZxoVcg8hQL",
  "key17": "2QaY8j8rvrScSqxLCy9PcPSxtpHozc8qNyLn3VnpSggp628tLCfNRKmeLPFtdVN6DMfgWWQq9ZLavTN3azrNp5jv",
  "key18": "3sQWLjdEE1YQTfRJKpr2JVQGeFR2eDwsa7wSUnuRW47DqfmoEB5eTsxT1zc5UvciWLJvdaCqtZ2XFRXi7hw7Hw8H",
  "key19": "EaC4NBJ4BiyDUb9AqvQqbDPMwJ6ZoWwLENUAAYQtoSpwZF8UeBK1rmpt12YS6xEecEuPjt7cZBZcj22WREx1Ra6",
  "key20": "5CXxp7G91hdZygiLLRbBS4HqZA2ohf4UqQDu325zfShus7Ngvr5nY2s64ZMntGikfWqQJGjJh3ENEbxT8YMQUyes",
  "key21": "4uqk1H2Eq1sPxzqhcjQRXx48MX4kuXeWZr6EMPmQamiiiiY5DP4PEMpjrCURLRz7hYqYa7Vq9ZfFnhKu7E1NskMy",
  "key22": "2VSthUMUbm5rJxjThM19tqUKwbaYamsSX1kD5LccEmdJNnngZvxbHs2XWuC6ynrtbq9FSuAmTu943ZAQjdXgM55c",
  "key23": "3vgVkRzXAva53oH9brTaHmcLQ8ecATKv9Do83GNnpCv7hPbi5VA5kqHUgWLJjo9VZpaWPHy6rs4pP3gFj6D7DBEz",
  "key24": "3JzZF8b2iiJRc3jiEZZFFT1yUnRfBBruU7vTQZ1eBdbxSf66uW6WKKPdToZmZEWe8iDatWz63tLMnQpWkHQfhYc5",
  "key25": "3iZ1WM8NVX9ZYU1skgdAGbidsPWhCmA7xHJaEXSYENfgpCEDT2kYrc38SPso9wtJdRRyrVvh9TCJUP5QQ5LYY7Bk",
  "key26": "2MXUvkAt3YpWBfskgZPXgd5agcwDzPBoLwGmt5PgN5FPdJq4g2niw4rBEdoUPa2S5y8R5FJiT4xbzSChP33bnuij",
  "key27": "2Pv2Xtbmjxwh2HpweHKpUkTtEQJJ3FCjLjvJPsdQ4L7p6uLnQTgAMsM3ux3QdEUfD84JcgZCxXHqei9y4zrNmXEG",
  "key28": "3iu6BFsbuMoD6STjWuCkHGguGyNBUhfdEAjPaV5uHy5vhUqMrWqrd9KhPxm82Ts8KsF6NoPm6cRbWxwKJvkgbLDa",
  "key29": "2nayfsB9mfw2Wpgcp4FiLGX7A9ktdkSLWchhYdnQg6CaBFtmBWadbey6Ejse8jPBeJjk8Sa4fdU4ZoM95CXSStSt",
  "key30": "nAjoXr15A7FUwiCEY1uxW1jqs9qeNjUN9sgbWiYcS2wfrWMwGe9EUzCVBWeG8e6JFiQ7fNAJTghGmCFYKpXKYg5",
  "key31": "4taxyZrk1BhhmkviZBESArq2uV6TpjT9MB8zZ1neUGY4EF9NKqyEK16APkE11FNCi29rB8gqwV1emQt3phTDkeT2",
  "key32": "5gapqCyB1Sb2dJ444Hh8szqJEdwG5BXH9FtvHx7XFfh1LwCZ1PiqctChhjb7A4v8vdpsveKKM2wr287TLEJyPn1t",
  "key33": "w5uu2BXe5SA5XdjLpDMpGqdX8k8jDMoiTi9dfJKowrq3thrFca2F1kgHw4X6gAAoqG1QXq8EpZWoXKifgUHDGXi",
  "key34": "4vd94Urwi5nz94XDLry4zcA1ZM5pKQbE2t3a6JygdW26YGm2gxbKyJTCcNmhfXSNvbYrYzkjkHUgm3tU2m9aq93e",
  "key35": "2Bja54pbTWyVzbf9mUB13zEbbiEUkyUt9HPnjwghAbziEkygN87PMaQjhaBvyDLbPPZRB1sEkk1yqqtSfoX2mA1z",
  "key36": "3i5ZJfxKhjkTF6uxXjtPNm5UL3aZrgjRhVLn1FoHyyNwBq4LiFWazSGcaava38cwaBRACZAbK7nnD94HyrahpN5S",
  "key37": "5jY9sjRfDe5da5yjrdEY7FaNkxu6sZEsbdXa1bozE9PUQdkwMYXFJLtqHfZ8rG2xwpyjzCS6ydPcR9DBNo6TakRG",
  "key38": "4jowngZhrP2wexaRiM6dyUGdZfYB59RRrkrhei7BB1CjXLutSTPpXAcZvfCx3gUWjuK1xLizdShhV4CVeg9J6qGa",
  "key39": "3gyrP3YMek1fJHAjm5uawB7DDs7J3zWdWhFNfhj9SuyojegcxWHGtSHQkgdUUGMM3UsyMMNyH23gdocGZVDWTF4V",
  "key40": "2pM9daw9Ydx9VHJbXucHJrkDmcHVYKfsgnixZfkSrCqE6MMybgWYRUn622SwF2Ve9zgpGjwgD6YWcu8SGr7BkZtP",
  "key41": "2iLroSfWcT3J5vLht96VtHXcPRpzxD1nDQuFKSLe5ZcgFRPipE3cNnEXoSLGCYYj3beaiHcnWW82qe1V8CQeoorQ",
  "key42": "52AKmFX23PjErMfP5KhVHHUSpkjZFyc94cnp1jd8rKo3wt1Bybm7H4tcdkGA1kdv2mtz3hRgoPnmEGAbkKBz7Ucr",
  "key43": "2SiLeAKN51DUecP6WKpxo8wKaQXbbMUk1waiwWjqwRGbxHR2m99pmDEMyWc5sfr5YPUnYeWdWzQhx7zNmWPmsdzm",
  "key44": "7uyyvxnUKCvcrGCFsFBP6vUGKvjkVpbahL5UhDjKijJVn7DVKXCYBozqcL1hNv2RFEm2NNS5Z5pEkiopX8Eo49E",
  "key45": "3Z7wzM3xAQ7JoZFMqj9qE7FgzooZF7XnxZXJHh3oEg96Mdi3XhDDUGjpoG3gL3Yre79Hqq4jubRm69QAHjjWDY93",
  "key46": "3veBL54rr5Lh42p91JKiaKszKCNm7wjT4xCaFonnE6qcAMqLUB67eNdUYibDpZGsr3iPbVwezJfCryEaGX7CS246"
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
