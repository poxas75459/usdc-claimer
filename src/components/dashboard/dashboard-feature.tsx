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
    "5MgHjWAk6TsQVExG4Dm5UAvMG9GSdX3Z3bQyMrtG3URG775Hes1BYTomdPSccsVxoUQgGhSumGVY9FX21M5Fa32s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bNQKfkNa7BqJgrrHGF6KffR7rA2vQUpUSpFVkZ2i5axwu6xZEaJZqk2Knrv9BMWxBZj8FyM7oRJW1SjD3vzkQn2",
  "key1": "5GoBoR3Lw834ERM173FrS1PjJLogJVgVMvQ3grU1h6QmPxkuQ4FVTS9rzogz87XM4dtnLAbGFhsy5eNyqpaEi3an",
  "key2": "5vkTMCPfp6i4uu8PN85MVkZkyBpPLwZ3R2REFTW8NRvmZ1nVHvowdmPShr2NKCB7FMUf5BjzJ5Eqjm4sv13UwnZH",
  "key3": "5GgXkxPEnPAGGUrwh7hnTGm4aEHP88yFaNKg5RPwvXnrqwjA3i2avBjzswTSUAaXftDYu6eqtLYNGh7LVBvU29cj",
  "key4": "4nuTZi3H8kRe2SMscMgkK7mjdKoAY2JvZikzD6rrUZQ6q4L7QwLFLD6Uq9TcgQqyhaLMcA5GgS9GrzetsqBxGLpA",
  "key5": "2iSCTi9Y4YEQct39kpXKJ1oSsLan8JgzYRn6sqekmRHfMy3Wf8TPZ6JTuZQFVjogkfTWGq3DPHazpoJqxgLV7DAM",
  "key6": "54rGa6xRzfb3RmcpKPPVKFj2L9swT13Njt9iKmhaXWjeMz68iw73Jmd1KQmNs4PdxRSFq4HJYgHUPRadxjfPakkX",
  "key7": "2gcTyZkBcZm5M2XZQmbf3bRBiXcyWAEvDbeZVcGCbrABRFTLVXyd1WNjhge8woLFprvvNWjdcx1S47h4Mqa1S2nD",
  "key8": "4FPXbhYTfoN3uzR5azdrgqBqRBVytbyxAce1k766jTq4Vheap7gGBasw63xhRgieExHAqc2D1JBdvcJuWjJpWxsP",
  "key9": "3pFMQHig9U3pABUVq38ea7Djd9TouS9RxwFVkUrvKpr2cetkkuqPfzeTrbAzVLMpPEoNs1Hv6deC68i93spk9Kaa",
  "key10": "2LsYDhf1aLwtnhv5NiioSirZC1VCxWyC4DUczcvyzzTrTkD6zoCYxiNYNHfjJNoP9dxEDn5YRD6XMDLYhqP1kn5w",
  "key11": "3NFjHGyhd1z3tkyK5sCrjNcm5cxFsudxt2nhA9JrWHEQMkKkBsp3GKsWG8w8MVYvsM27GC5w4B6biEKayrTEkQpU",
  "key12": "5DTXygkQyyS9h9K7HiP749x5uS3fpvyWY5phZg1uKwKFGVAZcArpoeF1L1vij43QJjs1W2i6Fp4NfhFjaFwG84c9",
  "key13": "3Pon3S5x5oT6dLfe9X6g8uF15RGqZuZaXa8REL8qLNE7idpKgs4uRHmAJaQ9rRrFtkwHYrXSyCRhek6TLRm4hxsV",
  "key14": "5JrjLxoEEPMkMog5qFTaS9W2tohCocu6mcYSDJTDA7dXpCeYoH5RjGJxAajiWBkfrVtqiDsUdLDdDXk9ztC77WCh",
  "key15": "MVfizBchgf1znNQaJzZ5ZBTRdVxzekbADNSfpUScXvVxDSMFaa6XmotoFaTzB5fhZBw8Q2MSpSEXLxqPTdo2KYy",
  "key16": "Bdm97Tpbr9Sr6gsTYaghaWt5BbZE9c5pFZHUyRTxTFqeg786D42rLgdn5JEa54XRwQxDQu2yUM8SYwy4r7tuFeo",
  "key17": "3PMTXRZWBCzhJVXJGoPrkdeNpoGgCayXwdDh84i9iuiaSmA9i38WRv1BaqQSu5hejte3CV4JeRQUENMazQZ5roCc",
  "key18": "37uM4c1E5uKFHSjdLBxMEvEyA9991Ep5ZFJ1FeyUawNoAJJ9JGekiuHuQy6HkxutNktbChs768daxXRfv9eQ7ca2",
  "key19": "49avnMGXgArrxmsGzXSULp9asq8N4pGw7juRcuVyMZtEp6CuAtVm5zLR1BVnFnCjFYHKCzMj37XvkubcuYmmi6PX",
  "key20": "2znJhzDoX5xv2nrNYrH4UC9BfmDmANPvWpnBYcapNMibn631eZrtFxcX16DHwCd5vQzC85y3Ui37k4aK8dVVh8Lr",
  "key21": "5AByNfzCBEFATxPAuvwXHLMZT4vsVhATyaDe7KqVz6NxzPTHhGUcRH4fCyTfkWZ356aFAuWuRjnHavH63X9Pf4xi",
  "key22": "3eoEcZeriDM99guH2LC8UVkFdKAj6esCjrLQkrp2tSLjmKJBnAJbPJ4uvBVFxHu8p2axzr3r9CCFEMiARPiNLg39",
  "key23": "4xCUtq45ZeZ6cfkFQwcP9BYnXWfo6yiutS4PrrLLwddX2ooGnjsUR1zo8PApgYDDwFBNn31dX9wQKnzia6LTSK2x",
  "key24": "4jahGBvVXwzryCiS6mWzCRv8m1sd8veudEgGFRCxjxFtnHW1mrE9EmAHqidj847a6drcNfNSXYWKkpBCSFVAVFsi",
  "key25": "2qsGAAN2Xs1obKudT9Pmbx4mM1Yg72LzUN36omJ62eTpN2emnb2zkGG3zvM6NjrTSZQo64PSfVtVbWhmRqGd6jba",
  "key26": "4PgUpDWxFNmPN6FEuDdynY5oWhBK2X5WfCKyP7B7jwNTQjTXpzs3NeYordz82SYK1mBtA6EBBhewieNR7tjz3J3i",
  "key27": "iuTzaeEfRx8qTW4ZN746EeCqpbkLqFvdpWvu3zfqRJRagi17Yic8DC3o98sc5jWuggjgsBg3zPoVGcC9By1Euzo",
  "key28": "5GJqjzcXQvCRvq9JVubYVjLdozHqLUTMc6Y6MZcuLMq3HPUwTcYX9my9RjgMyaEG5P1vSJEMLy7zMaBgeyqracz8",
  "key29": "5gasUXdpDTKmke9P68UYZw46tg1GrBi7bj1eVtHVfn9pSc6Ut5aZRy6x2gesd4YBfqTSmUxTEsYHKy5aUukjmJrX",
  "key30": "5JSKnBgvAxhcFKJn7ue1QhQPFPWj2N4xczxuxnNwAwenkPJfzAaSaAr1qpPSwT6ir1SqYU2MP3RajChxAG1vcFeH",
  "key31": "J1tDmgNmjsv3ha3REMYwCiFJrCPH1xqBY7ygdNxVivg3FZSDBcCwPADVA5T3WceFtb6kXA46qTnuaoz49i8vCE7",
  "key32": "3xoi5D9uYVChCUPuc1r2tBQHHVMXtdruK5cJmBfbdT5ciyMuofZdWF371pEahvUCWYdAqgUGdPzM755FYVMGrPXi",
  "key33": "57DwFyW6UyYzqcid3uL8SYZ9BvEyx71RQzR845Hzdc6fnZM6h4txU6sSy2GuPUSWXD493Ynq3cxjGK75R9YnSkmg",
  "key34": "3yGvess6DtdH3ArqcfmdW13QHvhLxq73HfZGpsDV4dD5smb9vD1Kjq8eARPd3YZHbKfbJXu2GSPVTBYnfjbJYtCx",
  "key35": "eysJSSB5LCq5jFzoSRqofvWSovKZsTn1jWmYPweUqH7FckboheXUYWiDdF6h45ErmQpWBQkKHhnnPQPYvebmRvC"
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
