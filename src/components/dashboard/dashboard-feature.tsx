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
    "33R5n2DxG1j5Lq6CcBH8dTLcMhuFitrWfoaVZs9vshMQZ6kqDh3Ss9ZABJUSvF8V3ULoteur9o9vyQdRHUYUazAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "599uxMKQcjknqGB7BvxcighRJ5FCw9swjotq8ZYxiAt3rmtA3yFc5rRZBv4qioXDFJhZtbFHpEBA2bpikenfX24J",
  "key1": "XWWmLeeX8nrBruGXEmtBHECfMAYRE7VNcAGtnrELS9n2z99AgmkwbA1LrK1zH3cgjCdxKB82gUqRnPdPfCmDJ9Y",
  "key2": "65424UcJFonyYbrmUBemjFeSK56ftTHsvZskg34psSezN12hiCq8T6qEjdrnDn5umrTSWQsVMuaFSvi4MGLeWPrT",
  "key3": "41Wd37jRtDJqT2GRKDwZMrd5DboGBedyQjDBtGqeN3q9fQE88Ad5Vy8jKDra8ASgPW8BvLjyjjm4u7YrwEew9tm6",
  "key4": "3rP2WechT2Knu1AxRofp2xZ5zycgYeaTh33ZBoMLCrVdUNWTkcoVxpMKdF74vrhhAseS34MDwbY2bsQ6ePffZ5Dy",
  "key5": "L7HJRfCqzur9YpfpgQcRYviddKC3nTNcK9hgxhLGaCDNtMbxEwekwa6XHEqvDx28LTt4PMC5pfftzfX5nSVE85p",
  "key6": "3anCRATAAsYK9mjg6FVtBbLMy377rox72EkBwPsH9s12Tc8A5Ytbav9SYcLeE9SwYhLYJHkXFpavqSy2kbtNeiJ9",
  "key7": "3Ci7JUzD317fZNKR7LQpd4bC261yEJ7HXsga2zgUjVp4D6TEcjw795icT9nbLYpP1KRbBxhNnQpHDVkoNeLGvAW7",
  "key8": "22SMqeTrHQ9rLLGfwR9evbEX2Wjj3SCCuGLeSoULfuo4oYaUxMzBYNuZTt2buxALPBRL7UvVXfYSHX98obf7Bztk",
  "key9": "5iBaXEtw4MnRhnJxhyQqSatsHFdyoHRHSmc6sq6zrGiaGUoerVc3XmTzSwYbH8rhgxR7jKxQ8dtswQ5H23bGAuFz",
  "key10": "3sHPAugpmGrtBd5f6mEsmApBthiBdAEDBY7zEJTUvgcheHNZKvmk8PWWCWNnZyMMHK7KetWLQCKbhVbfScVvGZAS",
  "key11": "53D6mfP2qbTM8wAfpwitdD3J3tZvB4bKPztoZtmc1NCuj46rdZhC58Uc6JcXEqR8guQQqzJ94HLyKWUanUyczUfd",
  "key12": "3d2SxnjaHV8dEMkwKroBfxFVUWwtu2yjSyBg9jq4Af6pPjro4GcHdFLPgvjEVvvH8N9PZt3k1xrxB8JUrV9NFSfA",
  "key13": "4LgywS2jmjSQATL7BsTMvSXK3yvTPMLiYW7fP6nqH4CTjKis4qouyFJ6beq2qdgew2Zrt9fcQE3mes3M9KTJo3rB",
  "key14": "41gShWVCkp98B4u6QFftQFJ9nWNtgJvccHAAFn9MLjakYd5LMzjjhvxEkfqP7z3t2xpM1vDQTvvoXxNvokudWBma",
  "key15": "2VVAJDv9UT7T33GRPbJwWpQeWi551xMtPDA44KYxLsbeJfsJ8hrpRtsVhWLBBkhUYDLJGpERNefiifnVeVd3S6UY",
  "key16": "3RzDDj6QiTaMpXdiJXkoiowr3fiBHVaYw2fuAUQe1CXX7u2aQ2QoZvC5Vi1AexnwfwNKzJYNeQvYnkT1RoF9UmJS",
  "key17": "5GvQmpbCw7gR53nDz91W2hrpQ96KYavRu71No3FqghhQTAy166xv4VLm8Dp33RfeLagoD2aVb6nNW2stTcVr1RPA",
  "key18": "KYLX5eDqWqgD2J4WitMaLJaWV44p3bukC1x2vdwrgsrTGexe1Pj8qzXETnjr3BvdFC1Mva1Vk5bidQKD14Y1DU4",
  "key19": "3k334abYaSZ3QgFU3ZBFTjU7V1bLTjc7s9pULmcNpPiE7nTAHRB43LdNFvAvehcNVYhdRoBrc6ZypK9sxe6oMj4d",
  "key20": "6eipEUBCZkRcdgmZbLRrNW2QryaTPbDx91AjPcnQoHrbWdHDawxJPm9BHRspiZyQLJUbXBfVZtL7uHM7GZf95GW",
  "key21": "4yCrMFomBAV4dRZqSM8ggBZfLRz16BmajmEFRAPUPd8qZt1Fa7ifb2Yp1kn5DzJLQeMujAo59KT6aM1VhAuh9gmJ",
  "key22": "4wE9eCdhBE9rkGcWdToSSEk3bLohnW1pixLgAUpCUcHBQesgMgFPMUJyZh29DusYKa5UyJABKr66UATfsudao15Y",
  "key23": "619WHAW3Cuiye61vXBcoep4hvQf8Hdchjqia4VYRNNaPDEavEEWn3G5WSfoSCdwQuVqgkbwqUwaXUAydvS9Gbrna",
  "key24": "3ANUsPk8QJAXf7YXuGJtMsBJHquFG3jHV7VZx23SzVxoKwUBiTprMjqe7S3fHVxhBZ4ZS9g4pqo8ZQRa66d1WvHM",
  "key25": "o8sMLHEMM2RTsR62WuCznjQ5GuDL7M8q9MPrWBR8LvBnCcsPzsXVS54KcS2QuFnzWuSR7b9VX8P8Zf3gXQCj1GT",
  "key26": "4ek6bUWiXYPMCnWdxMcR2FEEcVQ627shCNXFe3XMx3RKh5tjYyK59YGHWqAXqpHqGeVbfN2pJK6gj7QzHWSfY9nY",
  "key27": "3aMKJP7Ez1hFjwX25RJYdCyy5A4iq5HxH94EH9FGHq21hCozVRHqh3dSBafmo44eT3zos1SaJZLxkeAsEyCDDDNj",
  "key28": "ie4QeybZj4q8Vj62EHr55Bnnt7b1rMLdUkF4tikGeud4gHx8M2dNqZewuyzSVNc9URpDkMFsyg335bXdQJdpQJj",
  "key29": "3URLy5TLgdhQE8Sd3SsnbyFimhuutYvmwMWUXDhVMdNVZxpz1zLhPkT1SGEbwjxPQQqwHch8K4XAZbJWhP3zjBj3",
  "key30": "3EF7iQnJqmbbGc8Wc49aG4w2B9BuE62BvgrGkefsbTct98LuvvU5PeFiEtYkPkJraAjW7sAQFpce4y6SvPxfrSir",
  "key31": "2F35CGoEcdtTrfeh2mzLKUHVkBYs2P4H2fyQEbMUgRRWAp1r34Gpdq66g8fHyWaavRd8SN89sqCwAUdWuLezwzed",
  "key32": "2fCEunJw6cBVdBAWuBsQLtcnqCxk3nsmysQ2i9xoGE1f3vEYK6SQdx3VWwCibHpshMfU52S5dw4kyL29Vtu4oijk",
  "key33": "8PNcdYsK4EHDCXSfhs17c2uoHxmaKoEeewtdk7mricJxSBFoeAP4H6bPyWpPb73WKLDjrPqMqwwcphfWyZtcvUG",
  "key34": "4H8tmReLuZhgjRsRXVuNguzvBa1qJwmR8yvLuoURchNaCDhfw6UAp6o9fWoEwjYx4zwyMmQro7PBy8UVUWVthVmx",
  "key35": "37LeJwTUXiZiEsUcnZ4VTTsYvciySvH1dNBgiRy8jzkNAnjTaKr5J3b1giMy7Zyi3BasvC2Ve2beQ88h3qHx2QFu",
  "key36": "5zbH1dhWasQU1yaUaGoyDevz68AsajvwVavZB4rnAtzRmanoLoFrX34BcaH8M3vJgfmJ8Sv55YEFPBgZnAb4ErHv",
  "key37": "EHn3v2NtUQ8TK4HKkFS8SJe6i8sYmBUSeWgJJ3XTwUyS5VVvcfPKGyYtEHbGetLzdVKvNEXyjvb1JDcCy2pLrsD",
  "key38": "7iUWjxK45aBNEThNE2nmPyZJQ4S97c2muptofARk8nbp9F3v5mtmedZzhFwJmQmMd4cjAnS8vt1Uf2yDcVxmWwV",
  "key39": "3ukGUGnKFsGCHmvxUShC7TocnmVHZxGdHy3a5h33BVjMjzkF2WMHyfbNigkK5ZM6mWxSkEd9dVTqFLC8mTRCTWmC",
  "key40": "4duJEpCop7NSEcstwzx78YA5dSKKcAbzodyMwNkR2nKrX8XUgpG4FV4BoM35eV5K9wYp56SbMRS3WtV4cV6gR8j7",
  "key41": "3JSh1mB5j8bk7oZdB3xFiksdEcoaZtSiKS6bNYdU3wjXNT6v4sfkKswmbUKdG7DYZFiMr4ZUyMLsWvCdCfon1eUk",
  "key42": "Ld5jKJXx8kf44mkksyD9vKjnrvKPGxKpaxhUY6bm3hc5MfvJjq3Bv4bWeMpgbu9jJGox3xCZpbDSv3SbwtU569Y",
  "key43": "5ScrmYJ3EMKGbaGJfqBzkuZbdX62AWL1KvVcEcnJU8y54AjBekJzNwsMQi7k9k9Y9Cy4BJxjkTpQsnKF9pfQvBir",
  "key44": "3PnTJsdiB6VwHQHe18ZdRHzr3V8MdooaDTJKXHV6uDNKQARU9NCLujPAaZXcj32hsmxQoqXoWdGrwmqQmqGEg7fJ",
  "key45": "2WhwphQaiizMYDJfSP9YA1hptxvB3LCZtqEtkjr6iGpCkN4Ujkgw3cnwaehB2iYc3H3aJBWh6h86B1kKBmh1SLHB"
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
