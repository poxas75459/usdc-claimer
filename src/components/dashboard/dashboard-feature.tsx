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
    "4BDnrVN7ZcdzHnf5H2Z6m2hNS4J1PzTzDxgW3WFfe7kTQ75he3NrAhzBVKdT4Vskak4uvoK2gbr5WYKPeF4srxjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LWiH6a2NCEkJGsaVkxRHj1Vw8qvq9r83tFfFH14XhqX9Ci3zCo8VZrZxHui6HsdeTJvhfSXZ1z4ynpy5zDE3J7v",
  "key1": "51xq79rstRBk4EKyfbmEKUMKfuDfXndsr2FT3Tw22vRR5GrRx8DuosRWo5xxnv7JXwcNxU9fx88PSmvr8vkBsvPc",
  "key2": "31jJnCPvCVbZhVd2kvSMQW8ZjLyFacb9yhaWyzMF25g9Bcjpt49HeoknV9DjXBKp7r6UTDrwRmmHReG9cdLDVTCk",
  "key3": "62ZKKjnNVTqkEHJvwUbu2baCzCPiUuSfBSxZGjsMvVV28jBq19vfi9j1Wdr9jhFJjeDKHDLFLjEMyZSSqS8KsyhW",
  "key4": "2u5r1ErkyHLCWVXiJBDjL4BNgMwiXr3exb6hfrZEXFZGyvHnRk9gbCAUY1hvZvaCX4E9sL1YoFTSDqWJaPvf3kAA",
  "key5": "2U1Y2wZu6BRwrnk8nk2pFxtqrBtSqmDZiFAtToqQcMjPxDRG8gcemy3RBDSrJCaaunktMTyFfKubakS7Zf54csBF",
  "key6": "357UdeqcmosAgQSepTH2YrZDvRNg5yQEhwCrg16qSRna9ooMiBHCdVa6LYBAueFoF5W5WLpHUoB2SK5BuSnU2msr",
  "key7": "5LcmLnUjqmMGgNZDQKShTv5k36d4zYfFY5Fe6Hrt7kPKUbUKbmJd7mkdx6VbTh1d1HKEhHxe7Ahu3We8nbvnH2mt",
  "key8": "5yAqF9JQTQYMbEtQx9WdZojtCgbQsbtCcZWKogZUAeDZba1zu5ju4cuRxNSb9WiizVN247yv9wFkjejAEwS9i4Fb",
  "key9": "huCiUTVfmg8KrJLuzBPoDL3QqqNHmy6Kc5Gw9CEwsgAYhQ9wuNUpieFxfB7BMY4zAgNVsmv8xLahqZWdWjnn9xA",
  "key10": "4xovNBQwMZFqcUrJ6JwjVSUaT7NUBEyviPfxGM7TBqtcP38PEQYWAFDRyRQzRWybJ58kGjRG7GQHAhQxVhKPuUep",
  "key11": "2mMUkjZFNwEoB7zseGx46hTsXePxm8DdMppWrY3ijTpUzViPdJgyjuXoUnSBqCXYJzhATd7CUkz6EhPuhGmDo5qC",
  "key12": "3te1bEUjUmyoRjvpi2fXqUuHHiKchou3vj2ziLVP8DumD8XAxGeg3L7b9R8gag5vwVtXtmqyYjbH4NKgQTHiPNRo",
  "key13": "639GFQaB3tTTWyRnF33quz4qAbjabZwTPpc93ZSEXMKp21c9Ss2CyZh5Ve7nsNwWiDbcUTZ6smUTjnZ3EDfnd9wF",
  "key14": "UX9mXNdfnNxGeN7ozEhz4uDpzspxnkcy62oXeM1SvTnEG2zKGyoVdhNfLyWv5doWZZ2jwQX2n7pAyY847EBbXLT",
  "key15": "2hL4jN1L1wEfh7rD6DNFRHL15yCVPjc1eKYbz3qM5v1KwE8K5VxMPfPDKdde1kBcuyf1GmbPKxeqtW91xnym3M1k",
  "key16": "3eaeoMjtQnrGymVQA7rhGLikzJmZdnR5XnYf8tAmYWMN3amtWBGAShFN1xmohuYZABHoA5RQsVYEx1AUDz4whdnW",
  "key17": "2ckE8xRqBLeTrk2W429WCi7fAcu9RaLydCCSUQ62nPFMM15FcaZjKu1xmCGrFqqyBfutLKNR7zg9qNjVHfB31seX",
  "key18": "5ZsKevCn7RgKSPjHfziHkE1akVDN4PXygYA8yxv6FTTK3aF13M28cnSphv61qqozJ22nPe8XNSqpSSMTrgi4XZGN",
  "key19": "2yBeE447HK5K8n1jLxGfGnPdqMynYG1e6VbTLTPv5n6CHAYmvCErot2dge1ZdQfkNfKKhAAVtmbW3Ws7wU8AG2qP",
  "key20": "4a9DDNjiQ8z1A2Cxv5Dfe5JNZLNMJjNrNZtEe7Gt3PesQcCxumRg6KdS18SxW3dBW9xRmBXGxQMEkqZ1NgNAPj4s",
  "key21": "VZXsU7C3iEVVPsY7bgBh2hSHh7xZHn7dez2HQzebKFs1FtsijbghacGDak7pxWgy7bK4hUvjQJks4NphAs2HBvv",
  "key22": "2PiQQzznVg6Scya2YkAQErF3u8G7vDWMBrk41HGGcuvCaPDJEvLhUE66to3ZAWAmM7Q6uwuxcWv4jnZ3xpTdy6yn",
  "key23": "4ftCAD1EMukEHteh6YB7aXx7ivRuucbBLqkmJEp4ZxbRfjRrkKG99BquPd93e1M4wGcMseCsFu1tvp3sXcB2ME3j",
  "key24": "5vdwo4C3TA4LqPvnhUHkzPdRzT2st7Wj2EA3fWNHcLCSMFC4cB9kX5Ha4rkx7HSEoY3oepyCvMKeN8yVHL1kpJMb",
  "key25": "2gFTnyiCsDu41V3MB7w4LdS7XKdg85VZfddgv3hAvkiwRoLYNTzPdA92f5rSYeje79ZAHBtREC6cPydreRwWGJib",
  "key26": "3Keff2wXLagitYZBkoEeiUjhs5R8bsrzzKw8Hc2xnaKkAUXoixY6K2Ga4tpPzYi2dFNMQ7A4QKTqf9Aw3hhPgJPV",
  "key27": "Vsgh5Zxvzmx8PADUeCUmZM4xmSuHipWoiBswWsq2QFusdpMMgdNL3HwEqvt1bAP8MJUHje8XVcWccdQXv12JTrd",
  "key28": "4iGRgDvzQMSCuNKbtkpB4Dj9KVr9AXDsLjx7wQu5dzt72UmE9wCq1Wqp2kUCaAijD7DZ4KSB2MzBwx2UJWsA1YeU",
  "key29": "5CW247nYkMv7u2beP5chiXELWgN8SeMy3nxwbxAsU4znQgCCkPaA1EWkKb9Q4baBfzHpBip2urBk3y8y1SsxmePr",
  "key30": "5p9FrKaf6rgKeUKaxFH6PYH37CMYWzQBazUZHxiX2YHf3pN7zLNzBkx24QwYnKzzX8Bevz64ax1KHChJYK3NGyFg",
  "key31": "35KpFCmGdztcpLfiuME8rYHqAEZZek8LYWrCgEp1FxD7yaie3Wftci8ZLxTVxga9FWXptwEAQq2o3WaCqx9yt9kj",
  "key32": "36SFPftDAV8L9CUNtvEpwoKcatHKFmDfoJPMTiiLmybRwzGdFbUh1uHaydUjCL1Wkpwup2VaGh16sGeEZ87hp5Fh",
  "key33": "5v98RCgFVqLxnNRwjct7NUj2kbQEBAPcCLZFKnTCNiYmy6kC69G3eb9MsXcH4BKGbzE5Bt9b1Wivtn1fc9KVGCyw",
  "key34": "2GHHK7m18RVgH577oYmfcA2arUC95wnedAMJc7aSifT4mx6M32gRf1sVjEZ3NtYEu4gYrbT7Pfy8hBJScmEUohsi",
  "key35": "58CPB96WTDrB76p5sJiutPYZpRq23xDj9KAKmrwL3xfujU5QGK1oJCGLheQcUjHtBB6R63qFQ3PwFXU1bN4TKhMz",
  "key36": "3K9fbEZGSEJktAHppQmWew79sEn7ZPG588uWoSHWNADaPe8PNPCdbZMTvjvkDevTKaEa52S5QvR9cehsv6rqj6mb",
  "key37": "2YbhNpqJvSSSrYsqBt6QsDZicWtYPoY6sp4CViGdfnrf7iMCAfNL8ABEq5715c2GUhXVw42EBz38dMuqzAPhJiG5"
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
