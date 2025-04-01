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
    "5QbkKThgBCB2X4Swd8ar3arGDUQ8VZJVjb1JnP8udjtL53WgVNuUmxrt2A3Y3kfWNPUw73MXmtgjqCU7yiL2D1QG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jSpfMVJ7xH2QZbGe7ivra5EtbmmcaWkPYTukzQh55zmmUFpsp6TXDXQba686nRKTQyth2YyPkwFkqzKRL36i1ZV",
  "key1": "2GXUZ1xSnf3wkoNqaoFnzPdmskSbAwppuetv7PRa7qMFLUT5TChJb9dpjYu2M6uRnCgGX8tccNdqQArxWCPZnhNu",
  "key2": "4s5SeDPpDbdWZL6M1HWNQhBt5yRDbDHxbTWCEw9hsiwZkiTWo1Lj2t7tiCmK29RWeSpzHvXYJDakx7LtUj3n9Hhq",
  "key3": "3k4RxgjwRLyLPFfyd8Kqj6hDG9azfrgvz1QgsTJiXD8pZhmczyva5Y8kKkhcTmTYXTj5nCUu3FncUfCtGQ9dUVXD",
  "key4": "2MszKDz2mME5oSPEunJBeztby2rRW1mWQzRppn3L4Pt44EDsCxyE89xpFFXEzhRX2G2ZspLd9ygbwXvGK1EVDfU7",
  "key5": "5b9GunWm2X84eyKPttP3fqC3Cpc24XN2FCEBr3e7fCFD5TKXt8ykdN14hBLwsRFPNWPhuLXeumh7hw6rMZcQMemv",
  "key6": "3cy6V5zGacjoGprkBEAbn3mTBQjZjNRyi6q5hE5i8YLsjw2uVP3HWuZr6tgLJKC2PVptgQgTjgFVZLf41sNWF9Ri",
  "key7": "3Rb8KBuaQnux39ZnmnZCKKeEh5Vy5LNnu1o432obpAHo9Sz4JCimb5BAyo6DrrdmbowJfubDEGapbPd7XKH34gQY",
  "key8": "4WwCoFjDvZr3S6sB7TG3wqizZxNztFKDQahqtZLMso5TRdGLB5YHcJB2R3ECR4S5LvTNNDHvMj3bWd6n7SYu4CeX",
  "key9": "2y5PDDFxJnCAJcVWBcbrGNnXriD8egSa5qDQqRTEYmjR994ikiFfJtmf4tBA7zKb9gqcbi3bqMv8cQ7c4d51enFU",
  "key10": "2oJ62Ydx9xyRkGZ2tTQjk9vLYw7MQ8vpoWPVzXNjHHxrZirNrV5NPZFsxhqngzDRxUXbo868bBDSydFFm2LLSFeD",
  "key11": "C7TANKqCh24GLYjDrebiboxTm8st1T92D4k54Hgxn1SYFniRFvBc7W6KKBzMvaQZY9G8MAeBMVgrhTM2MycQxBf",
  "key12": "4UmCF52h9mbuxog1NafpE49qipkyCpnTmuF8mFmhJZvuy8W9Zm77Y8gQft7p4L1cpQmcjJimiQyW3L2ZbgatJjc5",
  "key13": "2eMdvj1RfdBsDUf4DZCZa72Q9vywvEshP5cfotThgs25s7dqq4S3MhEdoVME8Kx4KLB2Wgrr2Y68tFBDUe452zHZ",
  "key14": "iRPjUXQMZ4teVsQ1f8XBSvDtqXusMkmodyqUPJ6H64rSw61DTKj7oazPmJXdkwD8AYhVNmUKns6VMtP2hG9KQYk",
  "key15": "4EMLRtFcnpYrD75G8ucsrqm8MNWFkFK2HMfEePs2n2SWPzivQffoB1fWRaShWwqFkF718yRJhHgaD7crnBYvQoCU",
  "key16": "26Q1D3XZyDDh6pcHT87dpfVWPRPpWcz75FSkLcFNffQzjVv6ne8AJhBeCKRvNnHHMbB89WmFkWZDVpPVpLQEW5B6",
  "key17": "pMdaVboG8ZfDU1zr9nGRoEavaw7ixevmUMLuoVRfhoTaiJZH96f17CuHQxRNTg8pUcWbferXhAaZuaSCHLagpAM",
  "key18": "3pc2S1UUrWsyEcs4B2Fcs9BHmM7Mbf8f6m3RQep2ZBp8pBR47uaS6berVRBn226hVE7oM7HMttbdZUQjcrDiNkFz",
  "key19": "5MoUgfoNZesTjcdmkzgWcXDHLMP6ZNZM7yG9b9KJzJbFAz9XqRxpnRRKbospLmQczL6GNAGNgJeNNmoo8xoQ9yLg",
  "key20": "2SnUVtXLsgB1zJfcoGuVaCbiSizCX1DL1bQeG7azmYQnXK4ps4Fw3TMWGcT92T8hgUhz87FiYTK2y3tuQfTzaaZa",
  "key21": "26XnvpooQpENc1suhQfuKFfVEgobrv5Seh8DKwtvDRg9pj7pDtTeF4zckwrEvKWAxL7ygwkZ4xmgB7VEiywKL3JN",
  "key22": "M4ffrvXHia5wanLCQkrEbQd1zDpG8pR7FBaUrG4fG85my5vdKFyPZA62XK6TbFCzJBRXfVwcAJGXeZq572hTLXs",
  "key23": "55RJjtskXdCi8bdsJpFauf4RyD1suxbAjN4wwtkBdbKyH46gXJVSiZfQkdZgNGbSnqurFQujVHfiE8zri5QzRBFL",
  "key24": "3u8ednyRxtmdUBKYXKu6H1QD2offxmPKs9Nzx9jZPrtbWQem8e8fWYpLy9QfMVcZf7VD1vgUWf3HA7xDs8e9vpKm",
  "key25": "PQYkHuZJBebQx76o8B3p3zNPupXWEoxdKibdMYeC74SzFbPrmNMXSWaubqAbxv3VfvWXn387p5Jrod2RUfmechj",
  "key26": "MvMDkYmh5dUUHTgevspQ7cDQFrt13vKj21xLQ5nZD84nd4pGhUnADre9HGq8X7XdWY15LjHzasdUMHqC9duKaMv",
  "key27": "HHy6fCHtwQk8uUvC5oN1FVhhgatdRRMRbr1sH8M7F85tQv5Fq51KspFSRvYEnv2EM9gGUeXaxECntj5zPbG8cpp",
  "key28": "DNdtqWCGf8uLXCQ95n5VTs3YSdU6pLjh8FuNWmaZdaDFiLL9VWTfvNrrZN3tKoGChswjP8iCVUENKkSCsod3HPz",
  "key29": "2sxJhi2pUFpb98C7s8KGqYm59fWneeMRwM29ACbKcwncGftpPR6ksDKFvPhpcJK8z3tUtChYGzAwLEYVHVNovnjV",
  "key30": "hhLMZUhLT7vw9qycd6GcZF13KVgdqWuHwgQWXhtV54sZkF4xKcjASw3mgFW4WLm1vvwMxbkZUcTFDWPvpQKDLrj",
  "key31": "2Gz3UqSxZwoxpqLpj3hadfb4skFt6nCnwfxWgqxu7Kcqwvig4aZnqF8XRuzWz8tTtjki8Qyg2fpjJCe2cSn88zht",
  "key32": "5YnHQqfzhX5VZ1nkCXTAYqcb3BsGNixvaW2PhN7Ls4GsNdDEcqZU4fhfcCmB6jVZPAvz944nSrEbUs68Y4TPAw2T",
  "key33": "67nxNgLJGifCpUTJExZzDL5hv2nrZRtytnqkYyf2X9yowkYHQsg8fHFT3cewR5aHFBxZTvK83SUMhqyePikR1SC9",
  "key34": "5p3mn1f1b3A7s5NrHqFuEqXghQFPkUbh35y9DtwR6dZnfQctzRvDFt17Pggy8fmtu87ScNseoJe9UYLtYAvn5WEj",
  "key35": "4DqrKqVZth4XJeD6eRbwYD652ztaRPmfb5KQjBKf4z8sYoMuaAhfz2MTTF5BGAmdZYLw75WNujzPoXTLfRHt2YEs",
  "key36": "54GMoYCLE1tRXWdfF3tDoMco54mPiWNiUK4bAZKfZP2P7VxPTseCcxTZBu9Q4E3GT6g8HmYqCFV7QCsdqShPnPKK",
  "key37": "2CHJvoKbQyYJxzftQzqr3EZvSn3pAi6E7oDcTHXDL6TMDoxbKzS1bqDvmVnNMHXiEzYWjQiYtWcXDFk4omfTrnd3",
  "key38": "4a4XU8Cagudca8GfkThczahY5DKVH77519jTq6cnWeJvHeRQHs92wZWGHpBwqHyPxiY47vg6V3ARgbBknPj7aPZ6",
  "key39": "2FrHE8SwjyCSFBJtaoHyV6obj6ZSyHTHS64xjtMzZ6W8qCYS5Dc7ggEHfJDg1TPkud3NqhFSDCY3FLXM1N1u5Ns7",
  "key40": "4YnNMpEy7TQeHZQeN822RJgtXQ5CFXmmZHK8dPRFUsXVmVjgZ7euU3Dor1Wyznqg4P87Ey6tdgLDBbqwAGwhSjdZ",
  "key41": "4FJ7vqKZjDhzGgPLQ8gAAxzZSmmMz7g4Bxy6vbxuvqhPabCyG2f2StGu5DkcrMmCcKrbDeo4xb8HrFT5DeUqkegh",
  "key42": "vT5Kgbi82HumkwM2YVtMFUFipaJByRDRMgKsPBYqpty1HeFnkW1DMH95NUb3TdCV8FvSkhGfCvTamWG1DTV9fSr",
  "key43": "47562PAFM7LmC1VkmmXwdHx21uuCkopsynryds2ypgwsiDnDjJNqz1ipjKYH5dU9MKAYtF7FpetvxNsYLnBHTDB1",
  "key44": "3sTFhXFuMZYt7e2787cZSwCWfzQrGrwBRM3LHwPtNfHJYZRr68nCyndr5P4HDspSfPkE9FA38ZVyiUy3kPQcMErR",
  "key45": "2nwfJaXFBfHAbPbiiyCV4uQtFeaEhKM4s7T8Vk9YeY7KrMhYeXYgdGBafiXbq8XJ96tkt8gRHZKhH5vnenKGxY5Y",
  "key46": "3MwsXuMJSjmuPdopDF5ytiv5waGrHcHwkFqKvg8NNimNBRPEwCpzTfch7rgVVByBFb7h4rWLsDpzAXKk95GjYs97",
  "key47": "4SWj8nw2WvQkEbmRUp2Yyde3XTS13E7gELDinMYxsyXZ3BDvWhHa4UJBQTSrNEoNNx6Kxfa2CWx718xUb3DvmBjZ",
  "key48": "3G7PJyfH3KqtbqkmfbmvMnazwmE1VKnyBQxZC17zN2GF7wQhHFfpRjiStmv9PF13w7uMQfSxrPtKx38VwtHhSDki"
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
