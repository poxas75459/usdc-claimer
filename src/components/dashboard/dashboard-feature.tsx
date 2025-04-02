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
    "2TngoYYhTZ7mt9Tnhiu6gJvDdFj5ggpLiMvfHTdSYbCss18GFcxbAMxNXpyFBJ3tz9Unatwt1TEmyD6Nq17o1BQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3szUTsHmungCvd2WYydjJQ9k3XEFtTZBr6BbNMkbaRjou5V1CJ7byXfqRE3ZscMpRD9X5gMwZcxTc3FCK9fsJpYJ",
  "key1": "2WZBjFzJLrWkXGTV4CvohLho9qdW5b318zhhU7X2wCjfEASc1mLpbfayj8xvjc16DGu3ZQgaqiFjyHyMBkBvQ4XG",
  "key2": "5YsLWbmE1j27Kbk7M5RKUJLGYL8jaZUG7N9eQy2KnXSfuRmCgoEW9VdCx2D9GCF4PaZvGCMEytqTm2tiqjESZbkH",
  "key3": "36kuEt5EPEaKLExMBSg7J4GvYuRaA2dCwsSpVurSkeRdK3ghZhwSFEs2Jc6orxCZPfiTunrfpYVSJNxWMqceoRKF",
  "key4": "woKuDiA1wXrakXzGyt5zFtfznfBuqwnntctFDdeeNHTNEyJqdX7857ps2NjTvLjDUCY6AB8Cv4LCFL5FDdBqmKE",
  "key5": "iPEHu4hymLw7Jyz7mWAdkKE67m4aKXdJfwDhB5uGYgFLXawckD1Kck7dHkpEb8o8CiP3rCpgjLbaTAm4PWiGS3a",
  "key6": "4VWLJwu1Dx9hrjCT4VYQb7KRtQnjoJ5NN6nThGzHGRGLkFJU3VgbbJSNeYsHSd7cLwcbxHAyge4xEW9VmTX6UQKA",
  "key7": "4eej4GTPoR5PfgsJFrHBLA2oRvd6YDrLQojxEvG12ZjPPjwjXGLZbCHJj4TLThL7K7o1cLZ4D6rFEcj4pmAKQhiY",
  "key8": "2hpvsEynY55FxC5cjkV1YSSwJq5uvRsPDLRm9ksjtVQ2iWh5fq8CTFpBXo3sySJDL2XrGUeBHNU44S74GZ1VYrpQ",
  "key9": "4fyLo3hkj3ZhkV6VpdAAZavBvJDjxM22xuGx17gEGMRyEax7KmmY5X5ujP9yRnstknEBPH1xyFozbiKjiQgiW8VN",
  "key10": "4sTwty42TxP8LUChpTdVYaSZKgDU3LPkufn9yCCuUp8pAJ4zCobWRmvDpN4eapLCmEJ4uzthGq1Jx6EJLoDgbauy",
  "key11": "5GWNCqQfv4CgV5MVJrH58a7QpkWYgzwSFoUa7XySnqrsFWXUDMsAKsBmbfdkVfK7ATvoeKxXR2JJBvc3ZWYKcAGA",
  "key12": "3yDRSeVLwTF9anszQqZXLN5nCophFaVGvx5KLvtf2QdUiKqLAYNBTaz3ob3LAijdX2PBAGbTWg4mYpvpXwt7CTR7",
  "key13": "Voea1UBLVAphbmWbTsrw4McBmb4pdDZevuX9aSU4nnKQ9axsSBVaQqCHR7gwQtxY23gUDLGHJ36FAdLoMZP2wzJ",
  "key14": "2d6cLLAjaeYEQEugXY5H3cAjTvZPfdZY8FzGpVJuWNSj4WWZ7CngJsCtCRJRLyDxzVNpdkV5D7pJr3FZbC3BVDoE",
  "key15": "uvfuJ8r7ciF5VRWmbsrvDbndV6cku8aVA7y8yxJ8wBzA9zLgw5PxAU497GU6u2NyVEDewdnzAmTi68M1yNtgEgn",
  "key16": "4MLWNPTtu5MCtBn4veddKme723xLbLZenU3qAXThWuibVX1hWBiRU2S9C4zUx8BWYSMUmgMhToqNuDQAcpYMNKue",
  "key17": "53xC5wEXvmSn87C5Kmmh6jh2fcVmoKHhQTi1REw4L45jtUTQBMV9KGFwKeZPswk3KteUG8P7EnrYxcfKV8ex7TRh",
  "key18": "45mot5Yw9PhQwjrsoVdpH2Dbn2ok9uCyR9sxY6BsX7a8UH9rEACNeDTRYK4SmmcC7L4WS9JQmD79T8quNfKb4qSs",
  "key19": "rXk8cwnjbgWpzXx72btrThKmrMf11LVBPtVcYa2r1ds9aQpsCmmHcB6U31MMQF2N7bH8x1K3YQJonQVSpHLPDZy",
  "key20": "C79a52gEks9eZjeQX41sJwvaa7gZ6V8HbFMSf67Mx1Jco7Z918U4q7T37xuLXfskWsupJaBDtj64piyS4wApXCn",
  "key21": "3e1SWRvDp7RbajM7svkrkps5r3aEEhVmbtracxsaCR1EczgRrKnw6GgK1da8GgqSXfNSkpvTdbPNJ1ZvkpcZd8dv",
  "key22": "4te8Jxv1HkSMsSsyu94zCMErssWJW7Rf72q5Zma1Bc6mM41Li9SsiVd4NxeUNZQ4ef12Cz5hhu55hxDb5BJLyu3e",
  "key23": "246Gj1TdivNhNwokZfo1yqXMYNg3rGH9SryTrxBDym2i9cuetNsvTFiL8WNBFxfnZDZgkMaTCcApriMkdBmBWnvV",
  "key24": "Dfav6yo2S97nBnGnZRWQQzCVjx3NwYK5sR9eJBC9dFqjedkh3zgDi1fe3655QwxXhepYRJdK49KBKij5bFtreqZ",
  "key25": "2SPx6qfgdcRLwtNbQcj9ZDQVUMmKRPbgyEomo3jeXyzAC6e1cJ8yPFLbAzRZ2jPshA1kdURpPhm91VZzFtGjE6iE",
  "key26": "5xmKZVNXx3PTWhYmEn2YgfYJvE6g9xTCEeZRjiX6UwRZNLsJUropNJKKZ4r5niTmkXYiiRkmgqXYWrVwCz3izk8Z",
  "key27": "4WfsbJJuYahp4YGdxQdWbbmwAt1KbBUsGUrJ6mXZZ2mDnQMK6AmVYwUfcrduocUup9EGtPu5CwQDtddzMDKpUs4x",
  "key28": "439UuPBTdYC4vgpSyAKCjP86eV9Z5KjVYUSZP9EyrEcYfFvSn3neNDJdnKQcboWtt5e7MVS1LT6nhEPdgdHkCYRM",
  "key29": "4i4JZ53zvLYRY2rDk64ms8CHr4SruPkDackxzsKcXWgr5a5SRzShfsmQpiSyPrWRdGUf8RiHNagSS3eCshgMwd1R",
  "key30": "42KnzUpkyKMb2gDjnm2vun5EhYpF9kSzTJCZwyBp5CP535Z3aCLBmAC2oHGAoBjS9W84qsrMjY2MG1MnFh9MVGtb",
  "key31": "WrhU2Lkjuf6MGZpQPYuWWE7HPAZ4G599fKDybLr7dWREYLBdef8vYxsa2cJ9b4QRcREhA6wg3WnaVANKSMGydYL",
  "key32": "5imVVzazRXWJam8NqenUVy5mA7dDLFBCEyKAEJUV2ftZQ5agg5FtxBQXg2mfFKLxuzxhNkwBBuZNzdW1oeeHUcbP",
  "key33": "3jurn4GayuGtea3xxkQB4Ma4WMX6369emRKudMPALRQhTmj2a9RAN28BQv1SLrS7Yq13J75JxBdkP9CXge2LewMg",
  "key34": "4SDcx49BjASDTHmqAri2siswPg7TJX8hewctHJbVvJCMTYtvP5G3KWVYzG88htTwjcKxaU59eV83fpDBb1jYrwqB",
  "key35": "3WQP9mfaDAs4SDRa3FWay3GWgPpGPZjb5zVYbeEyMomneAPum7rfVEipff914Mz9UuPwW3Eo3utjF6MqQUfNLNBC",
  "key36": "2EZkbdqQKPu5zfQTwM1vUUL5JE6EVg25gg8BHKBKNMs3D3VFkWEALPniaL4uCyyHSXFPJtjTQ9pwVet74x1331W",
  "key37": "2VVeX7Knt1X7CfFSjGF3sMMw3vz6ZmuyGdDYnCQCpKonaWYYf4bjqhXP5f5VKuo7TstbLjNwytXWUDJdfstJomP",
  "key38": "4xBkz5kwmtru8XUfuvk65X9uwswjMNcUKcR68FA7LH8KEhpuUrVV4tvYNpr1BH1H88KJsPphdsxogAxCAsU61nHU",
  "key39": "25T6Fcrf1QKSxrVY777MB3NR4y5g29kS2dJLgPZMoeu9ghwbFDNp5bYGDSqa7pcqZgWRw4QDCKgfVCPYp3u7u7sa",
  "key40": "2cdHFtsv56EsWzHbFXc7CCXm5n7dk3E48r1BbFah1nH4k3gYw5kEuUa1r8o3kke2UF97sDSsMFu549m27ixJi5xu",
  "key41": "39fQmChR23Ze8kwpE4uctoA46QgoqqrqjWQnaEyTqdgmxbSSM1fFyxc3wyY4iaE5ckr5mxLyzCYWnHgdwWvNwuWM",
  "key42": "98HiYbTbxZrp9hSBriXDFnFfWyhoz79ojQ28bH1WnKe1fLqT3rmNyiQiFQLVMgJMbyf1JK16Ehoa9LNYi3Vpzq4",
  "key43": "4wRMaKH4BDEPEbVj5LPZudPgeZAwJ2iTet65XjHkqmPk6eQAy9WvMLmdE8H9kydBuhV97gNiuSmGopcLRSQuD5aN",
  "key44": "Gchtk2s99yoVU5Yta95xwNAjLJn8EaJfZaE8cVVN7stn6DQ7gAJk4fBiy5uap5UtP956WPun1uTra8dDMuduQfv",
  "key45": "3es4JWon5KBg952JCSiwqcXzKSnbHoSVouGfMoK33Ws6V2Jmr9gFqgMPRtYLM9mPLAi8BVhr1KazRPhTKbHzHxh6",
  "key46": "5zE6isAzUboNNNZsWxfN2V8jb7r8WvTKJi6mBmU98NCYSk14S3s8soQUonUHFrxhjMVUdY73yQKNyx8mKc2KaGno",
  "key47": "WuzBwfF3aDcq3Ww5rnuH4RxXbYPVXibcMdXe2zLcTYWZnQbVt2Z3qomo36eeAL3N1xGxX44h2MzPz5CqX9TTTF1",
  "key48": "4ZJrQ1JWUUmLX9MguS2iUqzWcrxepMjodWqjZSXyGz8R95jJLuG4jLvPbKV9ixuCW5RXRWGio7T1fjmd2xrLWJp4",
  "key49": "5ToAZBE4qCqmnzu8pxu5HoTRrL9w2MCGdAEuPt4E8fPUaD7MQZDhFJiNpxEKwe5MfzDzbfaasZW4zcxXzuJo5ArD"
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
