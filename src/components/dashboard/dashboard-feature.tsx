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
    "2j3mS1wgdnT9vTkZG7DoHGwJUVj3QkrtDNWyuvGb7m99jKCp77oHR4DbddM1YrgfxVBweKocSjv7Uk5mpFnWDfKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rryP5uJmxRqEcP4ZxQjCLPuuYebnttFKkMuod6AJoiad9GNosT1SSG3NFe4hHHo6uxcvNmq95BFRTrenC8E3JCt",
  "key1": "K4CzFmsPKW8Ft1AGVtzJrxpeBYXRFUc14L5B2iLhLE3MXhxKRqmhTnC5fS6rvkSmrBvJewjNdTzSmN3EoZcKbpq",
  "key2": "3xxP4wBYmpFAizcA6TuL9jpcWSjjqRbDqrMtRvXqCZJbq1VWH5j5HVVr8T4RAZCZY6UkVmda1pAXJqS1KTVLvq1d",
  "key3": "2JjJBEiUCms3TwR9tNBf1yuWtpU1X88mBifTYpyPF7ZS973y2SzQqicUxiqsRFo83qJjcP67Vv5Z8HaN4aemAdUz",
  "key4": "3QLHmNXT3MV6Z61J5kuWk1R8RJgqiVqhhaY8qCNC39x9k85LyAPGMhmcU8m365AZzky9LadgbiaCwDDtrfFXtUSv",
  "key5": "2jaFVoMgdqG7nmLS2qr7p792AovPLaW99qpeHPmAbSCXMWJoBjpBmYeRgLRPFMUc6A6t65CqNzn7MhUEW637ytMh",
  "key6": "5KqMbP3sVHekahonKRskBQ8onGCGmbAiwbp7t7RoRmmR3rV6PL2STD8MkGm6ogmWCrRvj3TmBB4cAY4YsdQxt9oV",
  "key7": "36qN8Rzgu22H6gR8WJ7sSfpUUKQaQ1YEZuFE26YftwWzWcBz1baG47tEC8hSZN5wj82gp4UWZy7LQGj7u81dyASF",
  "key8": "3dyrAmUmYq2Fzf68Eu1zWTcgx1NmcgeXFXvZTKByjD8WaGLS7qwnDacbiUaVLWK8nw3nSRn32ksoJiYab9GW2A14",
  "key9": "4pYJYTq7SGcxWnSTzZCUNV9XX5xjmrG9RUTrK8AxNXfyy57H588b6gSDfA9QWv1vTMgAjmbUyQox27qZjXQV7cHp",
  "key10": "4vxpiNatgGCdc2WHxVq6kVieenKE1s9JV8omT5HenBx9e5b25pSTwokBdk6cBtDBU92Hho2QnYMEtm3ghegxbvjD",
  "key11": "5974GoJfMs33ptx1Z2TtPRgKpx8ppy5RiPVamqCzaj1xj7XkUEsQ1EEWy3TQE6VEWyG9Hq8fTaw46kHPvfFy8jAP",
  "key12": "4aPuUZngPvh52s7Nkamv67RqysXtvGjejE2wppu113ng8cCXvV3Pe5HxC5Dyy2r5jW6PzATGM8CwN8u2NgoGYGtr",
  "key13": "2ZH3phJgxvgdYnVdsymhRbXWSTda82tGppyQF87Ccj2WbVYyoHNKUrksvWzcihtA32qw3uB4bkdGB5DU8VERYip6",
  "key14": "65Wen9rrkzvFxsL7W296nC3gC7SbpaqwQ5Bz5vR9aAuwEcVA8jcPw3j4H4DnncwaKgs5Rbcm9coe2WWds8U1DLq9",
  "key15": "65EuDLThr2GDguzBqTggLZEkAsQK3PS75j9ejvPwuW6xAN6MFA9KwQ5aKe7D3o2bbfTJ8bMLqc5eprnwwtK9yCtc",
  "key16": "3U3wdxHptCdtgRiSgFHuL5RjcPSVFRMVySswyC3m9eocR5DzJ6q4FQ8GGR8Rrkr4vYFX73q6Vj7Hd5pYW9pWeu4i",
  "key17": "x7dFS7CxYBbFyeVSQdKz2eYPRorQsjcrc2P7qzH3Wr9UeWeZFrSx5svkYYQWKMzpxM9Z26P6rWFY5kmD4gE1MUo",
  "key18": "2DhQBv4Wnt2ygLaUzRkPCxub8Q6uZVJGMz1X6924yyLYqt6BibRiiTAZfebh5E5nxomZpnn3PNUD6aBzZD7n6Yi",
  "key19": "3ajmD2caEeQd9ve4ccKexu45vQeBYHh43NtXos2GHU8ir3r7ncJ7UoPijpxWeJT49Hewxf3EAbxWEiGZsAaQ42gp",
  "key20": "EP7idqC2GUv1sv7P3hPeFxs8Vem5FE8toP8inxb8xhWyMSJT7qgYVGM6fdUKwNdT65ZfMUxtBoBWYovtKQCCDVk",
  "key21": "UNx38YgEvdNSxUa18pKBAXvezyKsMaHwp63Nij46TRdJgwzWwLqDq2p6rWo6DNMLQqkQHVefzKoG6RBxQaFpVio",
  "key22": "3o3WhDQodB9KfgHYnrn2yCERcamSNfMWmACvQhMwEAdmWAiL1LkCijA6CHYc2fNxA3q9Y1KSVSZuuWWvSmCRHp6X",
  "key23": "4ueBm752Ep8ZR6FUzVobjWEoHxsWP3zgLMucVS9yAPmJaZ9QvMbGmm2mHBmxH6sGWEMZHLPou4o8jsDGT2MCg2ZG",
  "key24": "3zeGb4S98PcmeDaeG9p1yQN1Q5kfKr4JzamHbUecN4jWaGR9hSP2aWprCn55pr21QscGezpNdcijpJdtkVeVaiTt",
  "key25": "2EifufEobBF8iTS7vCnVRUVcU32xHpTzK6VHzax3nvbCE1hPP25ZZjqwQ63MS289Anvov7UWBPbzVqKecprvmge",
  "key26": "2jBx9PCUiNXxNrEhw8VSC5TnT8SLLHSt7SxYJKyKswgvGeJxE25eBknBNmGoBj52JpzhWKPLqDmsoAj73v4A72h8",
  "key27": "vkgxpVqAjEBDue7sBAxnmVwbz4vHWdqJVwWZjeGkV9SSQKaMbeWeswxjrWJ6WUNio5TH9m1gLL3gztyErcJivUL",
  "key28": "36pzoDwSEQavDGgqiQAgLwZVKabYLBbfGQebgpv6ThWJG4APeC7X6PFD6aKbAW5HfmbrTs9CbGzVb3dK45Z2SVXL",
  "key29": "4x7ZxtN5dFimiTNBB1ZFJ5UvsL6PVJGyQQ1DtNPwFc958hPmBz1QExEPcn1H8GJ6ZDN1NS9wrdNzhdZine9fPzUC",
  "key30": "3Ducy3gF7btFiLeLCFZeruGzq3T8febTAVFDPj782bjMcz4kjQZa4dzJGkTkgAAMfG4SZvzFd3VVi8f5ANyEEXk9",
  "key31": "31yHkdfZ8qkuKZASXYUkjczFYQ6KsiorFXMBYkXZWWvR5E2QmT8j1sTTqkkUryDspy67J17Y3JfhtKW6PnpinuVA",
  "key32": "2GUhsxJrWqagN6JTJJSxuk4tKpedErEgn55mK52BCA9bNT3rY8xrq2SHBro3qKWiQ5aqQYKRy9pH5mrDLgifntbU",
  "key33": "62duKJ4ZtHM6nYNjDKWJjehk9iwufPJKva9VJfuTvfARPT5kX2Y5dLZvoonpBXvd86NjjRn91WsM2VpbDjR7JtUt",
  "key34": "55DQnCb9Y683BcPxXEaAWAM6b3uEah55f8dqgAhRuPaVx817dV3NQ4yjGHBnRfHWVzbAfnNUMCCHxfE87t8dWAHV",
  "key35": "5BHYmkeU24dEkfHrSdikD3mKAdRg4dmVA2vaqtvQqezhoTiPbMM3gzzGdyoP1dTMoDiqDNeNEhJMgzMz1MkSANE3",
  "key36": "3njsBzERjeqSt2iy7CTpHYZsBypbC2XgvJdrZHwnAeFHuEzwU79jbxMCEdCHPvnJYyQMDCW7iUUrZAMFidyM5jo",
  "key37": "4mnTY9MX44YBtzYGAQY1egh5YGJZJL8nmXX6f74eX6z5PZaH8DLSthfP5DbYBKag7jdjXJa22MPLSkDKfaChsiYo",
  "key38": "PaCvhCQWtqRdYkYzkTHrFipz4ugfaKzhVzrgvdhRuDkhd2mjGBRi8so5wmwUB5z715YivWdpfNU6RhARdwiaCkt",
  "key39": "k3jsxwSHVGgGRBYWTEYgKGegwewXcYnHsVEHcJZisLwPbgn862Mi6i4ghWab25sY6CLvihZd3ZWy2fTXBXXnZag",
  "key40": "vnwTMGHxgpcN7eTtuJpfoqdPCz6Jn2WwH8YrN2kREmkxpuwCxpFuvZFZ48Ex6TvG17SsoWRRRsamaB3sfmzXYFW",
  "key41": "497kEJpaGdpNkkJrWvaKqe2gCqdmdp8v199bEtehZuWMTbgyXcSPRJTiakV8yjqophDJNf5aBjMxKYgJaWg6bDzA",
  "key42": "2fzBSM3beuCBs34HdmqvP4koMnPqUFvuocFRmgH6ANkswntfqKRP6apa5nz3jTCXe5vseF5uNqZn7gYo5mn2aR8w",
  "key43": "4SQkDxMLN32PsMiADoc5E55LLnvER2MxEUTjQ8KV9Xkum5kGyRSzPFApkor4axUMbvky22N8kdRkY8g8BJuZSqaJ",
  "key44": "3JfzLfjHPF5e77iz8i4EwSmiRAqWKxVPfobYjGSQGd75cqdHhdWaauPP5LY8PPx1gZ9coQnB7XiS2GKLf6XVeWtR",
  "key45": "5VxBC2qxKkEfdPL58eaRU4EQx1LHMcRkJ1z2Rtc2PnZ95bUG8eNADJGkzxd8WDygXAyWSTLMJompwbhhPx4hpTqL",
  "key46": "5r9FfF8E1M2MHF6yUFD7XUtubQHA8yAyWhQzs8ZwGfaAnSt2PDsKg5aFMja4L2VX1bRVsDsud9cjYMhgt71KKV2n"
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
