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
    "4Tiuj4YFcxcfkrnLDsvB5xdrNXjxaNRy39nRpCcX5H4G6pqwwJg5vcSZyiFz31wD1i4EgoRnZgUK3JE9HU1RNqKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KJfdHBdTQL1riBDRqTyATWUBwGJtAQfez18kdr8PNDxMzzoBXcdZ7d1WyAB8e31LUMNvnpvg6N3BVAMFNAw4g3L",
  "key1": "4wj69W7WZeaSUN3WG6G1rrhtEsej41AU6rbN7N681ckq424cQ5gzT1Fk9YPLG9GH1GXVyXEDvukFndtdSzT9eKaj",
  "key2": "3AK4ZQHqyZwfiN8Z3Q7DB2J1Kkzc8iDxEtDuucqL5Bd8LbpYFVMuNojiR3LDbm4ocTHdvLuc6UtVfRTGyWyRsgZd",
  "key3": "38F8FNwrr9FTbQ2bZvMAKiBVhapEoaDc3BBsVJyKuG3pRFRUx1MxShYGx1wNXZWUhAX4Hq86XZjZEFZJrUE73Xwr",
  "key4": "3CLdu9ry994Hi2w9wFtvcG9ztrLiCe9W6PiATU8SpRpRbFNZ3QWNYuqHHHzoBxGTiqdzNYgE5VnjfwQZSiZbyzAa",
  "key5": "2fn4tk1rJL5aqv2mgVcfZxTKkjybMoFe7HcJhnZGuskLiueVMVi4bWBj5g8pcDcc9w5GVtauNC7zi3FND8UL5uJx",
  "key6": "5b88UnxNK7Va7UsFdGxZyziK4QQCjstJUZrHxAiC47Vk3Ao5fcpaxrzRA3eu2YdYLRLeAktdmMrK85Lq13trqByU",
  "key7": "k5f8UoUpbSuKwh7C1XqAsRrhLpEb5SEKKGpbt2X1pyKtKqStxMGvBjXitQNB5AzXWcd59T6ckGweemYpXbhRFkB",
  "key8": "3JakPYPeygxJqZHtXVAXxVVuCgV1TegH6Qn8VmrNgpvq66LEx8eyWoMXHocUbSXksQskSQGLSVHXvYM6xzD5aFWg",
  "key9": "2dmP53QM5BeKSkWeWrcXNQtmm3NrXbJRNBLwJMAwJvNFtP5V6M9hpYq3ZEKbA4znVoqmhVtDZU9H7Q9EhEtXJ72P",
  "key10": "4f75vA5GayYgnyPxREupSxEnqXGnDGpqtw7xaXRqiwyLbYYUXJ7KCA23th3Et1r7XLU2MYfBz7Fyv7dD41CoHT2N",
  "key11": "4oVpV3VAdpRrydrtn5ogSsANQcYVjfyU5kkCvQxvX9buUxDaPEik9iJaSx3gNKmW5sbJEgqHJUyho3TmuySMz6tH",
  "key12": "4T1amt29gsddvTfHmaerNuLB11XRq7NWSEGLJm66Aspwo4rLPNhnRTNRd9XpSjG1HpN1YC5N3698QBd9wadqLXMJ",
  "key13": "4kbnVWEPjGSgNkPKQfMuPD2jypAj6YGjJAqqBCLDjTKxxzHH1sLXHi7ZURmCHmuaEKWRzXNFUgKQbgzuEVneXivS",
  "key14": "58fSHoHBfFQZnQaQi4L2ek6F55qaFTgYHCzWrnvNyZTHYJU5PbS2ytYZcxvRdQtqQ5TLXSo2kbdpKZQFQvqsg6Xi",
  "key15": "37AzGXXmVgptUZtiQp7Rp7HDdNTRitLrTeXFoBg2juaBLGjv5Kx5BUhoAB6iMBPVWTvmAs1hTh7Jz7zS5VhVSn56",
  "key16": "3GJQ6G7iXJacu5vG7Xb9VXYFqwu83RSbkbZX1aSvB6MXQ4VrApUkRXzqBoKoZZr5D8owDdg4jyBPUso3kdvjduqa",
  "key17": "2LLiAmuFwTMxA9AYp6QKxtm1WaCbKMftFBkadSQep52JdjL2gxTpWvnQ5G8F6fazKvqEZXYdsQNN9YgJL5Yeh5Py",
  "key18": "4J8VCPExNgTonkWF7MNgWpSCyJU5czboJDZHTF1BwTFppbhcS3LAVQfUTxEENZBoqNrDZU53ZBQvwEUN9dbGmizV",
  "key19": "45j9Dzb9SiQCEZRjc19KagGvB51L8Y7j9RJshrhPTMnxSmS9CQSV7TCTtNTHnA3pMfwmh8Yxaeo2V7jdDtDWrqRC",
  "key20": "9j6sQpVX1doUAkUwb2nbrTdVYvbHqnV9X95zWat8r1CgRnar1hfCRcJUfXrhjmVg7LdRq6RVC1T4JiNjTTxCAMC",
  "key21": "1T8XHVWHswxtcHj6eDKFrSm2p9pQxrTMzwdBiZdQaTc5MKoXdRREexRnpB3XNumAuPM9cGigwhBh13NrgnxudDn",
  "key22": "5zpZSNfpUuetHrjasMU9yF5RbE5NKzYrBHNvjkzksk9YWD3GJJzc6Bnz9KX125KdZdEnXVCinzM38hSALzeof3DM",
  "key23": "3MF8esE7T6CKfEBE49ogBRk8agvfy6iXvAp8P9brdJx6YY9PpEjsVVs5SCEhPVCofwtafa6uBetZUHWd9mXerB8K",
  "key24": "2tABQuH9cMdpbcEhYLqf4czBbRo3aTfqaoGf2cm16vd31CvwXxjbMZE2hBktDdrZMJjHvSC5JnUAeW2d5WKD2zuL",
  "key25": "4hPNkhBiwpWS4ataCYcjnyn5ZETsZd18rbWUYkh1UtXsR6nQuZPbmuVfy9mDitunZYzVNr2a4zGDY8U1CNLEBu9p",
  "key26": "pAjrYCyMnERuMpwtcWRzBc2CPs2XZrk9z9RvS69KqoBZpDYi4cxfBVa6sN27jeVb2YXM5PURKiUhqXa7Zry5Lwc",
  "key27": "5CzvYPYJST3u13wHZCwfu8YjXkw5TZpEWwqZYhBfKCVqPELakufeRt8QaYUMWDYZj7LyPkGoZXQkgk4dkFxEUqck",
  "key28": "3S9RDfdv6qJtmHHYnxTofpBm8Pp6rJ1nJBfhUx1RmHGHUYZgxoiTp7VJHWy8eTmfA5FsKUitronaseSyAct7M1HZ",
  "key29": "4CLEKT1r5KB7mYMpXiNHeBZMtrEx7LoXAL5Jukc8emfeQRNbB5KfsLKguTmF7ik44woXEhgyPJEe9RxW3XoPKZYW",
  "key30": "mKDAJwYdNJGo4hkdZC7D5HQKUegqgbzkwwgWkGCj2zNCpQypQh63UkftgfQu2RKiJjKfadE9jnynu6Kmjot1Zkp",
  "key31": "2dkZPRUNyQkiY3Q3DCAZkbrKG1VbuoeVe7ikneCcYtXmiAVF3sqQdKqJmu1oM4BcezDogvsu1MoD7iCigjQv9gu6",
  "key32": "3YUUhTNh53YsZRkijLP53ScubHymLSiwYRwRgPhYtjJLHGWCXzJ47z4ow8Fc9pHxoSCj63YmxVfNk7pwgVSymMFf",
  "key33": "UTAb84tJvXYpYfJ7KqBQpvpNrC2mQ6x5B68TSDRJBVPr5FSS11aGSNCyRp5AGW4nbSZuXNCspu7Lu8ahK648gkA",
  "key34": "3KFV72qzJEKHVo3TMemunZCH45okgpEqiMKwMpk4sq6FP7RMMzmcShzbnSRHLCnmUmUA3U3qT1idLddEE1qBrtpY",
  "key35": "57tpPpmjNfZaFZ1wxaarvVdGx4PJ8boS3dFsZ2bu2QqadBcnVqbYeRWRiDyQJwUQgkp5NUxdoBPw53TNpP8BL2Ds",
  "key36": "ZZtMvxbruuEiuXM9aX22qVY1LLwkv7ZVxq2XsrQLQJqmunX6zvjL8yCxZPWLMNYttbZdAnjpitiNmstuJVFNYfx",
  "key37": "3PrX9oonHrkprTsqjvDBS4XjE11Tz5aMgC1QzToe8WwEJRfgezff4R6CBPWEqmkEA2Uo5qrjLUmuKiQT8djFibun",
  "key38": "5P2xF64XrGqXFLqY3rtnr9pcAfak5fPZvxvWvkBM5XLoEUDRcd9gYFcwBmQ5AK54Z6Zsvn2oCaYWQevoUg6p6VWh",
  "key39": "58dcYjvwZaVmKfwwAAfYMsUVhwmU9qzfuBQzEmsEjZTd4aS7oSD3AZ9ybSREmSxdtQb5bV9KotWWTB25aqWYMfND",
  "key40": "7MxpEewzCzYEmwQxzm8weEWHpqkcdDtE2Vy915dNuxqSvLG9CXnKbLE56AdLcp1Q9BPmeSPf1sakh8w54AvWZJk",
  "key41": "2Z2UwKGJ9N9ktL6bHsnar38jj8VRr5XnJ8XrX11EwQP7sTF7E44wYYCn4pbxqRcj9mWaHtXw6bTp6BLGDz7K6NSh",
  "key42": "5yjAYXqrFCuFrnz8JbkCxJvujncTQSz2EMNTQeFKRm8wNu5ucm1VCx3r7jF5JFoy9nBu5WZ9WetDDviM4636oxyg",
  "key43": "azky9XQWLPYT6tu3BJ5pM2qKv5covQSjvHEB3q1A2nhRJ6jGAVcuU2AjM8oM5Lxg5EKtFZCbWPLhDx9mTzn1Vcd",
  "key44": "4SRaLj6vEuyceVnHacCjFXG878MKyCgStBaDRr7fVEisD4NF6EqJUpZgySbK6N2NB3btrqSdDmaNfe9YyJxGR9ma",
  "key45": "5f6nsDjwi33CYh9QAj5p58yWnhTWkk1HDDgXdW4bbvgotFT6JQcAv8hJVQRxmDvmqm8gMBHcWrupRobSUsCAsvWg"
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
