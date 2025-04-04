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
    "49xQVcV2xcJjGTViL1LvajxrA7yiuF6x8wM6Hgrbrn5nZKtbWXabsgjN3pr5uaReb5edzAnNrZuPvAYVscSZ7ZWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GTekgu95KaCnJrDih7XeWpJKtwFyLhgwFyZJZywvtx45UGXihz49vWJph7mwnfXVBwKRwnUJ2YjrNpeQq5DqLxT",
  "key1": "5HCyDkKtdGKiw32Sh4adSX7rzJUPp6HVdERxXTNNB8scjARazQtPLxUcw3sSaiUyZj8iErCx8zP8d6TR5U8TRLhD",
  "key2": "3gfLk5BtdPh5jgCka2aLPZoZy5BQZZJvswqr1NxUQPgpu7xuTpu7vUU5C1r3L5SFSbfE9YFX2crGcUTLLjEqhE45",
  "key3": "2DzmBqmnaQCz6FmJLLdVhTzjahzL53wFnz1Eo68RYRNLJ95Q9m36vFeovGyBZzuNjFSYqTJCQBz3bRuPVNneEm44",
  "key4": "AAMmuc3S2J5roF1u5MbKHKszee6Vkpe9ZoJG4zPvNzmwek75jmG5NhEBKiiTPCWsGS6pZj7HwyuWRo3ppxLBCqF",
  "key5": "3T9mdq1KbghRQoYnRXvFuvPUiehy8uTZgHXTWSukPphLNfKA7LgUCj7hWppyrYLiATtYtD48iRihpqyQCxHDaGnB",
  "key6": "4nJKRZvrDjwSDzC1UjAkq6Q2yZFUgtzhLSGno9kSW12n8aA9xeRJMw8uCF3iEYcvSiy8SDW39MieKHZzTNuYXJUP",
  "key7": "3HmxAuTdSPzPoXo7354netaeYSjG3sZ8kRHVzFSD6CjjHEyj4PNWCrzQy6zaH2Mnzfyc8JSPPLajeVD8pdkcc3dQ",
  "key8": "3J3SgqZGHgnHeodCCF3JwGeocHxEhyg9Qw8RKaZJpRjy6cKSJQhU1ZacugrieA3euXeqnECk554ShFQin7D7gc75",
  "key9": "8mormfSFuXsbA9vM2ke8CobUvd68yi99aLqJ8HhJWesePFEztkjn4sdYoRdUnD9HhKczsNMPnH4iw8SEa5L4ctd",
  "key10": "8vx2gHoZ271Sv59HtwrNyRgnH1iQDoRB7WcWmZyQiNGEWisJESpEh5xV7KgTziFmoj99NexRsxzTzbmi3G2yyWt",
  "key11": "2tqA5z9Yz1wcYD4XVtBaWXM2kUES5RucYQBreq8EBYVmQnnXvQ6xidDLYRn6W8Hct1XxDaP9K9ZwSUX9ZfwMBpsz",
  "key12": "xED9Hsdn9a7vJH6oDG7Vx4MXTRg8GU2WhdR8FAgJQQrkVn56RVMQbVpAUuGm3YNACaabnMB2SMw7euNvo8zDGR5",
  "key13": "4NurVi3GKaS6o3QQKVPdX3FMyPhjDMZcKQZJZiGMMkzMPNUbAaC244dfH762a6jBToQtDpDY2W9s8JasQV45ExVc",
  "key14": "2TXHuZWYvXZgmbgcv5H9XYGKAZ3SiQaqP5vgnbsYf2Ygnk21h4rRu5hfKn4Bne2dkea6biSkXKXcyVbYxi6CdFsK",
  "key15": "4ZuBT22k3pVeh9bxB3son6eprmy432wcMbvxAiw8r8jELyBrjDZHC9WbQkMvZLYfv2p3SJbyxAnwDVBjWGLs1KJQ",
  "key16": "2g8b9N6R4mV6JDu8BMn7cyB5F7yZZiZLSYxpdTut5BtHtRNC3iLEcEqQd3fdeZMUKDDpj7f8f7PZk9H1HTyjarFW",
  "key17": "CYY8pRsED4bJbgpEBZaFpffeCdPkTiddQQB2JisLB6xgMHLSSTEu2LxhZCs9oJDtHBEeABgn4kY2G2zcZR6wxUY",
  "key18": "3SrL7RqFNUegwE9Tn5knPo8W4i9hKLnoU1kNKScPq8viFtMKnpeLbjYpVh8tzzpApdKy4AZPXaL2VhDDtjs1jxzb",
  "key19": "jh49fi9fxnGBzdfqcqxVmyobC3NrBqNha8DikRb26YwcrBcvUiikyZBzd6khJXxXTqYQ3SW72FngaVdDoUokx58",
  "key20": "5LRqX6XmJoLZ78idiAdgrXSRqnAkhKtFh5WCfY15crvff3739t1PLaXwrBqKEckCYf27xdkqW81xcEK8qXk4XPHA",
  "key21": "4ALRBk3FmbMmRMDZvayVX8CYqzfG4f22ZjMUHYBmgznkms9qq47H2wyn9BHhHDr5WLY7iJDUkAPxLWUgXeiKo89r",
  "key22": "4xSYaYkELSUp5T89jndH8G6UULsFypEqhXEL2mViCAgmhxUNBFvXPpVduebzou2WrQfnpmnu9aMwrpGrqxy5kPXt",
  "key23": "2kKDSS3CozqRSafb1XXrJu4bXHnwJQb2EoEt6hHTPW1oeBL56M9unMgQNyB64KDUXFd6baj6eGU2QZWyYvQawvM3",
  "key24": "5gioczqMyerNNkowV48peZoPJujNGBjLEYGndLYa9QcPQtdj355p8GKuUBJ6NG43HzLNiBzjYjiyMFjd8hh7WK2v",
  "key25": "5fedtkuFTpdqUVrh1BgrzNPw2geYrmAD4z8pSYrSiFTrG9sinMh5ct4smaVerymbRG98B9f7ZkvctA3feB2HTyfm",
  "key26": "3B6Y3NjDDjL9ENnSXyydga1zGraU1Ppwztrn8MmTg95eXnPsrEY9DbL1UToL6DKoqQkp8b775BAC3cPrFZuc76nJ",
  "key27": "5XyzSBLhSQBzJGAHEaztgG1kUcFd1bxhRjpZLPtQoR3UCqZQ4Ld1RMGcDxd4PcCmYNQamU5Z4Up8cGpUqVHYzLkL",
  "key28": "3hwyvo9udFRAziirtaE5zhMqhs3TGvp4VRGFjcJjNh5BYUiKvkPpYztaaqJ5wWBZLdxD316YueJHKBTD4BHuZuwm",
  "key29": "FGfeBqaPBvSL8DhAS4aDot4hz44MpvDts3SMTQi4fDukxyzA5GRFK39vQeECwpRnvX2V5G1gveevJjTzpf2CN4B",
  "key30": "63iPiJEUA6LVcDMrxnJbfLGj9onVyB39ut4CDWadsVrbQFKeEC3kqGj2GZugkok9NizFZ3hBJgixDnUNEF5opg7a",
  "key31": "3x12Fo9UXnZ4cSk6yw3LXYfguUmfB2H974ydTQ6hZh7TW8yAEV2AypRfGBdSZsp4hiLP8qTNpeNixwG1rpCpRKPs",
  "key32": "39nnirdXia1sJDK6yhaNKpKJBo682KmWCYCSxX2TPcfaphU4Xyr5vkmZRmAGkzJD611ZpYuJQ2hcKEV68mqKS7xT",
  "key33": "2DpLVa4ujXB7etUDTTBxoiUhKkieuvnkKiGZXJD9ZXSUtqxE2GcYJewdKy2nfDHv8RXknQakgxAam27uj6u2DBkE",
  "key34": "38MzvGRz5jbLTNV1q7h3Zmd4Un45PrnjBgZsVsemxUcE55uWPUoPeTHsuxPg7uZiXvG7ChjkFuotWvjsBatVQWat",
  "key35": "uJqWA6wVjK6Bzf9zoB98hjXdbP4jdWKNGHT5ZRvP4W4tLXv6ZyrSsFLaLvcQv2Lc1qcYo7YgKUn8vEjLDYg5Gme",
  "key36": "5kueRsHe2kbGocnqi8SwHUGinBXRDwrYz9vWDogGfaGtkLMJEsqk8LwhDqM7hZaML9Q9No4EbgUoj4YrzKhJA5wA",
  "key37": "2xF3znSexBUE9QgB9z4Q9zuXeof1RKoyGNELbJNJJQjp3QN81k5F6ERASjNub7aTvwPg1yQdYyAjUNkxBoz1LFct",
  "key38": "65WGXiCfq5ZBwrWhDTeDoEubEZKRhEehvgacxfxSyvFLw5nnkm1uu9go6s2oCZiGmFbAPTuxvhdzb1MhC3jqY8AK",
  "key39": "3SFdiT5u1d4SxbZzEa7gncmmti187XZqZCBK4gYzXtumrydRunpCKuJZxSz5TnyYNhScNc3fDXQR5KcgPtrVg6Yq",
  "key40": "3BqqqKBXtznDmV7E99yLZa5nnFuWZkDWzoaMyhxoqjVSHbDeZK6chmcReE7B5Dyw4dGLjySL3RY46WiNorYptH3i",
  "key41": "41XouCiteyViwLK4AaArNPiMJDpqQHmV2vy73uCTfWfvTJRRrsRe4N7RB79kK5GBi6MaS4zFc1wM3tVtGYgBVfkc",
  "key42": "Jhvj5jWwwnQSvmpJ4EVprfg8kcXU6QYuiMNsqGxZKWC7tquqfddqsjcfNjxtx6zVPetBMMRN8fPju5EHPT8afSL",
  "key43": "3CXKG4yhQuNYKTDEr3vFzVgVzMdLm4TMitsy2GWPaBgvMW8F6cJGfXLssu22A9MVfSmwB5xuypAPkQQ3eqezPwuq",
  "key44": "5Lv9N193U3U8eubXLP2wxTnVgg3qQRSpjJocMyazqDsAi3FmNRXrBb9brVCeYcH79DymrhMLQBrbjQwBQe4hwC7M",
  "key45": "2MT8Et54STaCAoQEaE9LohaMkhvR3fVY5BAGcHRQr3GT5bcz8QfcWpnDAGm5Dgg7MPJLbqLHbtPvaqfKwLELx9VL",
  "key46": "4AtYYftqqCuPW6E8BTkNRqA94GRnhKczfS61tpiVgW6WohDjoueYkaVU6F4BzezZrL2jspSR7Bjhw44H8q5whY7r",
  "key47": "5YbZMxiS3j6zEX5sbKNco5SHFey78pEzNBGxLMkWUvn4yQQy7BcxjebKFxhyQM1kAim41f5DrpzkNG5tDZzTdzXX",
  "key48": "5ZTcAFoQNARcqBQL5tbTtWtKLkHBK4Fa3j1D8D5ngghJqyN18okqqLERBZMAjTx5p9bxkikXwoEcUv6eEoVYbHY5"
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
