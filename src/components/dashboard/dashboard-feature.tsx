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
    "3ea8QxCAXV6sKeT2MxhzvYEBCbNV2zWLWRwFqGTKercs2utMU1ZZpe1yfUK8nVY2y4B2Ag6i5ND7WsjZowE9Vm33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21EDvYwpDWpVruPGPEyEdz8GarNe6SkVhJ16yxF3UiNi4bFdhXbWrDJjTo5WcPEEokHF6rz71uNuLQnf2dENVfLY",
  "key1": "5nShqUfNPk1ZTKoR7AmgzV3mX5bERfuuN6Hu6WpzTC2nUabmhpjHaJFXAgfSYRJo8Via6fS5JFLHS2fPkwqfMQuN",
  "key2": "4tta4EMooRHpBYCmrbSEeHwDki57HdnDZDYqymFH2BAtC4EsyTFR51Layu6ZNeZ5wLBYg2jrfPzb4fTMugrFVLq9",
  "key3": "pcYyzM4rAqSazwtHyGj5oN4hjkicoEJaaAefLdqbTyfBtqmw2o25DvGAYAxLeRU16kAjv7VGvWdKy41TPmNQ77h",
  "key4": "4BLnC8xAeP4Sfqzzr5zrzjQv2KVW87wxXwekdNx3H8xftTVzKeZ5GJYS45vMXpbVFivvo9WJz4uBT3Hm8wktqm8Q",
  "key5": "2VXkscwFZRLinpJvsjWswaKtwtzZaPTkkKUhDkvBmRsFmzao95idEDJZL8DzVzzy7QTvcHyUfBYtc72iCVGrjeL2",
  "key6": "5pakZB7RiBC52ACUsWbf9iDq5C4XPoLKGGt2RmTjtAY6HBd4p4tXuxqZfRSf5WvMnRsZfY5edrF3N5wy2tSRKe4U",
  "key7": "vu9yQ6cznAqnq4m6w2h9bbrAuN7n4mr2ZpUXfw3o7CM6aKE5okqPmL42Lmt1SWz7Wbv3ZkDj1usPPAi2WEgErcq",
  "key8": "ZvHStPNU5H6WzYgKMFhaZDGB8jFefRhZU7hDtGFgyK4UDhxRkgYA63UvcYBPLYpHqvRHmZRTPcKSRHfDWDHzteY",
  "key9": "5Ym2efKnDFCBA4pDJv5d8LnEaXhEqrjPqtE59VUbjKGPiSVb3Mpsn8ECPN4vgGwRTa831JE9M2mWoBeHtVx24qAB",
  "key10": "3crAyEXyg8SEa1egSX7Hv8D7NV6KGMBcJse3ZQCqwYJTS9AfRXbXDngsNEyhMpYBeuuewViaj449aMU5a2jCarkG",
  "key11": "dw51WNRvYvw2jwM8fKZ4BhdseRtNrtLzQfGkakfza3b7a6fwoCrtwV2QaNcPrh54zViHXD8tbGdzkMfLYQhNFdB",
  "key12": "52pSpWhLNAQvGPQVm8ReUL1Sgnkb8GDFVoYp8HdKD1zNfVnNJRcAERq7nisDoMfmtQvvZnH6YEvmUySJ8o8qFtCW",
  "key13": "4LiDbDTNi97HTZb2mDvDh5yySFNnTNYb9TBV3eq3qxwWtZonkV6q2ZBoRxmvLL5QWXYcxSmUJQw2cFxRZAb9KuK1",
  "key14": "FqYZCJHoQDF12hiespbPkdyg2taCTQvE34LaD1wGmLZPxKNLEm78sUHVoiSNbCmnz7opZPVsWmszkqCQCbnpwdG",
  "key15": "46ADPjhUZBJ8jLWEsWkkAQL1YXSrYGiGaLGnobsYCQqnV92KEUf2gU7xHtBdKfQvKoJHFzYYDFsFgTRMrpCJSAdY",
  "key16": "2jvEybDeJ7ScAjRxxYvm2Jjs3kDsh5eG9Jmy9V6Xjn1LA4Em64mWXfGfgJy7nYN4ZvQm169gp8E7Y388oX18uryR",
  "key17": "3EwiJfMFEqS2LirmegkNCyZx7uwsvtGzww6CdYofPFiu6Nda5cTnppFCzQkrRi9P3U19KipzgnTGoBGrJRtYmK7c",
  "key18": "22QMiNQJSufhoiqUrSo7BbhMjTQZ7vjnEYHLmLXpj1KcVq78qwY7py3Ua5SWr5iQKvi2vjdsUGkmdDZ9AC13TLtS",
  "key19": "4oS9n3tVHCni9RpDphakjdNcchsWN6ZtRiBy4HrSHAHCcXqMRbcbHadr5TgnvL1FFgDXx2soHg6YzGz666WgtZjJ",
  "key20": "4ckZWEmQ6HiWKECUjPsNj4maGpYSBcZ4fdyDwCmJdxwpkBMLps6ZHHdsaEnUGt5i3xjgA1YiP5mzrGeD5abDKs5U",
  "key21": "4DZ8eTdGoQYKVT1gjrx1UwewcsJFWKCrfkEXwfLKUicnXSHMGkmLRRDxY7CG1k6H72kQwAYzNvFcG9z87MSaXTtF",
  "key22": "4W9zWr3fsmwUNWEfWffjkhZ2dkZ1eySf9nneSuGnVmny9rjNuhYQjZRSWnTo1rcZvK4srsbFnxuXWKbLeg6UYzJv",
  "key23": "23qfd91pZePJSQMr7B2VECNmgeWwtutHvumd93FooooHVwmHpquoDHCVRpPnXDeg87vUWds5gyZJWFtqZyM68Et2",
  "key24": "4TkLWb4L2c3jdJvDTtQ99k6eU2x3MLUCkyWbg8NqEhJTz5f89ejE4hgVXe9HthrFG3AohHg2uwA8yXY8uPkRoCs5",
  "key25": "iBrtJTg42ohF9e6ZwJ6ChcZoANA74CuKf8x5cKBKsA2fcvJ7pKY5MDs6WNcMKXHimgz3nUGerXsvAooHm4UoMAs",
  "key26": "3WZTEbkmVRHp46owQq36WpEMa97sW7ZkD34ku7jH9rRXHC8T9PmHpDqjvawmkZW3iJXGk5h4wYiGrYwzU5Lqwi8L",
  "key27": "Jbad7nFSLrufiSQRWtdooXgGiVuZwV9se1ENXRjJU6YF6aaZsVUG9gTjLu7qS6YguMuesPGFEhuQzpKEMsqwLy8",
  "key28": "62QHctD1TQWgC5GxSHuLgifp6wz57fG9byAfnTbcgdsLJHUQux6TTiWVGnQnM3SR9TU1B2RWtBB97KmuVZcdBLKq",
  "key29": "X7gdDeyk5fAK6QxrKqQphhCJosTPaKjDhw89aRF8wR65xWFevDEamQZN8nZFcrb5eSFtuk7xYa6kZ6yC6pP4r5m",
  "key30": "5LYSt32CZBLnzgCiyXbq2gBoomrmjFaLzfNnZaZFd12yRRGTRUdmnguMz4wBpJX2gXh3kNSCtiv3zcoDxH6xZepb",
  "key31": "3V8z8xvLyfbdNPFui3ZFyQFHM1F3HtjvAZaDEoJiqdbrzpJZFFfH8XxiYHTo8mBAMvPAe2wHFdB4FuYNAxW11vkz",
  "key32": "4K7P6qKNC8qPd4tyK69Ui5GV5zXUT78KhuUjrSvsdtbUjD2gthPRCnkcvF5UswwwY5M2QkoCHYjS88NaTeM2bhhx",
  "key33": "31ssseyShUBhLTf64qmMdezYFpdyA7FbchpYoHmXTqNVe4d2sUrgctp1mBY9hcZ49HJ3r9qpTdQrfuhMQR7cuHuL",
  "key34": "3PmKymYKhwiPSTmoYF2e6iS6yWjsXaupwUUPCvuBUfGNKYwBUasvVEqgMExggLcPsbuZmTSfxDpt1EzGXwStiSSY",
  "key35": "2bbCYhZVJpRheRExtcqgxRaCqrNF6kXfCVkFcvrDCTDXn7TzPbdioEmW7AFBiDnZAcuENtrGniuThzRTycMMmUiE",
  "key36": "3SnrdeTzH8VFSRmzxVbAvaxaEpzmMpGUbgKBukxZq7LR7QBSf9CnpfShsZhRTQ6QYPBjxTa724mNs2xFJTQFvw8m",
  "key37": "4UT6iQN8iBbBW48idZf8BBrqntbA9fkbhHuZDLxjpbcgVQRpVTurFidzC3uTE9BVMWcKmaSrjrZXu1LLvf2FEpQw",
  "key38": "47DBrR72KpMJutwcPhB1pMghP2nrBtTamdXRUnCZHtWsN1mQPxZmABv64XnuHXD5fbksT6p2HjGBDAhHUfmos215",
  "key39": "37xA8JkJCimQNAi2DpiZXTDPJFpnBiorgpR9Vv56wx7gzY9FVDAYTrPSeHjXhYiLqcM8G5JyoNW25qswe5Sbm8GA",
  "key40": "WkBdt3kWk18cCmzThkhaurYKhRxvYhuUK24wRShn5W9MVrpiGwhZ3dqxTunKPPXLJrnxnFGSetLAKWGX1gX4mGV",
  "key41": "2R1ziDH4wraUVEnL8LAZzmaPiNXUu8eKjjmEmQu1zcwbQyNVJn4vmikMAjQ4nSy2vApRqYzdZLxeShuvaJfmrz7j",
  "key42": "5wPcaVVdHmGrP215zGPQoNLkTpVFQSPxBy4cE8ShNzCkxjSmtJiw77m4BoXqEGdVpTTfQHGTagNYCZ75U8eg7kgH",
  "key43": "3KBGLjf3cKCm6oLSGzLWuqq5xxu6ufgKaYYvVrcy6Ley8LZtVuPCGWjtFMRLd4nctAxYLYagwbSCp9pyCAU2dPkq",
  "key44": "4BSg168vd9k5pbkh3R9qKg93oNTFxs5tDPAUggUYVvCrBN25QJSVEFvJrfpDZsQqAE6vYxf7U7qYJ1BNKSxDsPVn",
  "key45": "KAHLa2yXAnKj1XDQhDgqMtnzywnbwqaCiWm8xMB8MspESx2uut2UJKSus2i6TAvmkyF5kb53uGrS189ZFHHk2QU",
  "key46": "3ERMgZSCovQ1XQYunUQT9aXxa62PeKCLHuWAqrYQruFzG2h5BA5do6PaFCXKidan1oNkeej9FixcSBYni1wgJEAP"
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
