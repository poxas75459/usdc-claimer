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
    "5iR1djuk8KDj1ygG7HvpCHXdUTSits7vYgPZ2ma8dB96T39vi9gRuNT7hYT6VND3gsDsgvEhSBDfKMpBNpP46BDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cSWeF6cceFgFhy3eQewxTMgN4xqmmVvdwzYHjbr3cMHGbqktsWWfr7jQ9ypVXyB19JiYrKnSQvEinWFAiKjUNQz",
  "key1": "2yYmK6J3z44CZBEnh4fviajtNjYvvxBuAteE4g7uf7PhmrogC27wqZyv2Bd9mTr1ckuFw98p8JvXasqp3dU7KSWW",
  "key2": "3tnTg4ZfggcoYPezb4Dr95TnNiCxkH4jQKvf4bffysiwD2BPVk1CpeNHbrUUDDecRrSJaBNPyzGfJ7WxsSPYNVPn",
  "key3": "5mCErNfex95nMaUoqSEH878cxMaYAPmqtbc3vM4bsEd5xMPq2fpUU5AWgWCkpEVVCsBRo8gJvZMorXTTPr3QVGRB",
  "key4": "27DoKKfmxM9X1YJuuEi84Dmwmh6hXFzMJsFhCjF6k22xADFf7RjkopQe6MaNr27GjMGEspCRFSZe3P6AaLJtDDJy",
  "key5": "5qdp2mmkDDBsxyAtXowhhxmHkxVoj99bkShm8zTjT79yiHqiSW8JVKc74XRiEWDxDTRqQHXLUpNzx8dRNNxVSZpP",
  "key6": "3VVBwtqj3rcMmLDp1aUNwi9Xkd5m2EHvG6S2kZwf28PYST8m2aX6bKSWJ3ghFgFbMUSoM3nRj5r1nDD7nbjzSxhN",
  "key7": "5z2VxLuUPCMKafcYNUk4mieVLECVMth6F659JLUVBVoUGRVnxqYhjRDVmjGbcQJESP7cpL7zZHWk7S4jmjw5tLeU",
  "key8": "4fzvGihxsChVeomqxRVYoURtZnQJMcpdzPSNbFt4zmNF7GJABeE5t6JpBs46pfDFqQs9G75QdNJGVW1SK8pHh5s8",
  "key9": "5SsRRXAZHTaK7xSd2wwyu7SBHNapMk5mGNS6VDZi2UJ7yhxw5Nn1k6rrc47MjFJ1gd19Xtd75bvhJwhCv6EsrhNk",
  "key10": "5e6KoCg8vUPKZ43SDzdQaGgs6grXq5PSaYtxsioHsPiBnNdaor1zF4WdZcrDFVQgcBJ6HsBRRX3MtMvzDbGDmZDe",
  "key11": "35koi2u2ov1cirXLs4YntKt5oi4Uxi6JKkKk4Ys4kgeuvr3MXQUg1ka2SBz1inr8duQ5Pz1jrATCo3CDQdomqJMw",
  "key12": "ALmKo2aoX1m76r8wd9urKHzYDN2G7NEymcnYDRsPGEhumGsJejK5nKYDi6FDYfbUnco8Eve542dVUqsb47JVMui",
  "key13": "3n2mUu6oe8XSV8KDYj5RXwmiKesKboXaAddEeKWWo9WqAqwKp9ZDFL92xgDVfXgzjJbby3WtDMYXJku56XgJNnnt",
  "key14": "4xUFtrgaFvE9jCnQVs5ur7axVGZz4VxRNX6Fe8MGSd2j9ooatV8xkSwVYwN3UebEsSj5YFiHypqhxAUb1QZhX9mY",
  "key15": "4SraHnUPg2nQXimSbBa7W6hWF4qM8g94CxyGENtDcNh4ZRCkEsVk4fD2WEDvQL9BfbvdonnjFnuW6oX46ybfZEZd",
  "key16": "5kNw37jguo3BfB6feaMmaVhjK3p6w92bPMD3cMH6gQz2H2D48kG1K8HeTS77hFZfdfpjF54tNfZ1n6CEhK46vMR6",
  "key17": "4sEZBupyyyieZdXvnLeQc9H6wwsH5fZC7V7h7BLvAz37YYVZR5uNwHpEanD8GhC2XhJjpYbQLSCvJo9MiB6nyuUn",
  "key18": "58y23kZgZwYqR5fkPXwZoA8YfN6zz9Vw8C3MBUE5zDqXKMz3p3sci7fhAq88mb4mRymnoRpdc4AH6UYgAdzvrhd3",
  "key19": "3LtJnKFtnPPo1UDYzA7MLEfP7cSKhKZhaAUumSEVSdSsViahGoYygdT7rrv93eDYbBDgEpppbfM6YBxvx2d62Acv",
  "key20": "5y4VMvSK1uLwCRdiZFMSgfjWJEzh2BvzrdfM7PQhnpS6K3hzfTLZGUirAGCFN1ky1sDxntW7XMXRi8DsonfiRkAe",
  "key21": "4TrgPxYEexQ9BcsSx2Jx9r7GUutgrTE3im6echzn8z55gzTj73hhBkpvqJNmXvKYiEx2weSXq8nPdNrAkA7WKZD6",
  "key22": "3xAZ5qcj5RTBwXA1yfzkRAYiUPoZS6C387XuDizd3aC5D3qhhBMwYLWJXLnfHYymSBVeKATm19ufnEF6RYj87tnb",
  "key23": "WXVYqRyhP6ymQ5fDRwxwK9DvGsQjLJNMzWeJyXS1taSiFBfTEZgCni34SuLBiNQbNnrBr3LnsG4UCMrvcQYQviR",
  "key24": "5mLzQjJG7SQwJLvrqfr9X3rbxPoSWkBuw9TtwGYu3iaZBrbS8xj7RAeLWL6R2QdAjmimNDHASER5J3Kp9Giqfoow",
  "key25": "3qsLo2NDUd1oQhkDsgKEPSHB7tu44t5t3296RB4pJ54XKTtiQHDhztdmozmLnwwupk7Y1REY818tN1cg4Zv5iwsj",
  "key26": "4RsPnQmtCDecKBY7zzLFU1gLmzaTGkoR2ynsYyshKTK8VDCxPKUtSn6PDdrgRa8r2MyFcmp2vC1CFnXD9ubR224j",
  "key27": "4pfeurBZFwGckUNv4vywtGu4mjb8icMPQWmXsTCXiWm4oTG7UUXPHmKQ6ERpAmHopiF9d2tfTCyt5NZjHUsgy2iD",
  "key28": "5PHYdAfEBW9WoEBX67ZVY7enSj3o3ixVkdLaHSTPNK2zxTjWL7Ls1sE7wmJnissRzF5ZTCxp4HVeVh2qjwxNeRja",
  "key29": "2EzWzTeD6NMxYX5E5v4CEj9ZbLwQgkHCiRjUMxxiZBpQJs1BtojAFSLhoCDpxfeQGNqZV5XhSPBEjD9pEVsrYcSB",
  "key30": "4bVthC5mRAPaPtzCvf9PsdjvucLMsGhqZ3ouEBL3MPs2VWDAYXW4e7mf5fs7KyAxnDmfYoRNL1aJvnsJN5RVrJDh",
  "key31": "4sLDMpMSJreJAjVHcaaqxXxw7JZ5ZNHSPAmaC9szXUzZ45eGxX4wD7zJK98r3vTCqDXTt9Gs6fUeHcmrGSkp31sf",
  "key32": "y3kE96J97Jo2gZx1XrZ9eJrMdF4ZF8yWTnPbPavfSEU6qAoJodLx1m6M4RuqTM8bA8GDfQ2PAdPVaEPHPPBJH6S",
  "key33": "2oCbYB4tnAKvqt2qzLbfTCiWB2LdHo6aN5pfWqMwKzVtwAjAihw4SSx7nXfSPh3XajVk7jMG6fSPTvMJ9ECzzVVS",
  "key34": "SrKaVGnvUMwUS3t3wiLUGhrgDqpLiwGiYYFt7BWc2FsKwr9FSDWVQ1XkGcR5ZVGnJHWd15g2cPhyd6Kpc3dbaHP",
  "key35": "UCfWNJ7rEAYxokPgipYUhfWVBASDX3Nb7BYGDtM3JXeCAt8SsUNDVaxZarSJ5xvKQRa6PTEtLQyK4VxFXVrLyFc",
  "key36": "5MkbgajshjmEMiFYDc4ZT6Z9CQiRKdKJmegQiHL4g7RQKsNdEdfx1Mg9itq8c63sfEqADfy6zwEekBukW49n5GZX",
  "key37": "5Heo3tXhKcX8HZE4xq5ir6gGZtmABEhT2Kx4HURdVH7SMHcV3jtXFNuyiNiRPP38WCwiono4ZbLPyrt7x5tCCfat"
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
