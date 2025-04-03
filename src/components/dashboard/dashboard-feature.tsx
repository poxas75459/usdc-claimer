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
    "3kZr3h2hNf4fNJT2wuaEUWJz5qiK2kNufp6qt2YjGywPT68pow5gYAp5TzYEReyE8LG2DEFEYsu3QVUWP5Sqoqrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U4HhZg1Mm2y96oo7PrLBWcbGQFzipLyAuXgbavYowbpdXWgHa3QKwDBoomyzh3Zx8uiktf5A77kTS8HUz5cQknm",
  "key1": "4KY4AtYKv9p4ApsBoAbMKjJRptQ37jk2dpVgNFJWYsjbroM8KL56v28QtsQYdrn36P7LhiyESyvzie5eg93nv89r",
  "key2": "2KEtqKET37Hpm1AmPhF1ARrMudSD4sf7EwqrYHa9VxBw3E381DUuMZ35RSZn3AdMx3mv2jR3UnS2hXsRr2FWGbQm",
  "key3": "619gYchQNALeXcq5PMBCQPz7ughsteXqfid123ZEQa6HfZpor7gU3Eai8BCU4yMN2m1VKUonxFatwhhmfdzPY4Cc",
  "key4": "644LKTZE2ygQ1ckJ9Josd5JXnDsVXwGm4d7WpVi86TRdeMFZaSR8VGQim2vf8d1t45Gwmgv4fMwFLF5VckjKFimQ",
  "key5": "x67cZHLqNsBHQmLsuMBHBVFdEK3ouYseV7gfVbG9SdiB2YBuFVWHMDkrpRTiBoPamp2DsnWzi4om2ad62CAWgCB",
  "key6": "257xEs66EwjLpq5t75heXALMZgw9dRinLHxnhCFNZeUqPq2CZQuZw7B1XD96GVU8sykhAHrfAXZba6WFtUSyGxRg",
  "key7": "2hF2pprmDXS2mXYeGoazYPW5ZwELPwDKossBZ3M3UEzHNCPkKXZtKtJ2sKfFM8u4sVtJzyzJ1oZwyvZaZfaqPgWV",
  "key8": "3r5JRLZ5naoqqZFU5yHsWTLsxJ1KkgaLAnjbGf1wdqUnxrpq2fMXTttR9LrH6Z8Te9ohexCNmAYsep68TPsNXgP6",
  "key9": "21oaaHmCSwYFahsRihvH34PpSwVVLL3Q15wyzuKX7KTWjv2u8jgTLwhfTEAs8qMyVTDznoG4ERngYQth29iSGKpR",
  "key10": "2JpxYuLMb25XQokLvvaYK2JHYTp1Sx8dqTcYjqHgoNhstG1oHxPGXZy92Gahta5k6xp5gtKR9LcPqQdtNK66XkeD",
  "key11": "3FKpymNDBLFx9mR7gdtWmkssGP8eRZTF9pxmwcjDw2eeZBAnoRUwEJbNfydPPQeVnQihmkTp9n5Zqx9R3BCumJFS",
  "key12": "3XPXGU2bQM3oWdYztoDS7VBXBbombFz4VvD1LeQFRVAHuESpkB8RNZdq3pL2RiC39tZ6eVPxfMiAkZ9pyypCTJh9",
  "key13": "5fipXZDHLX55uZHRsjs7KCG9oZoTaGGxakPNGGTJh3t1vesJ9oQbpPxuWS92WQK5qw6AMiWrN39q541Ewo1qwdrh",
  "key14": "4MsoJ812qheirHSutMYcpZRk2RCgh1A4p6nxwLbyi4iJ999sGihdAsuJUxWqMJjFjqbHYuGtQS5bL6GmdGjgYTBh",
  "key15": "359yDXcVy8eYMBUJh6YYBqYLZZ7ArRhFCSq2kJwbttSh5MrE7ofp5TGfYGJXz8ntmMkiHppYSCDADw6NnGCv85Ap",
  "key16": "4SnCpsJqhn1Duy2NYp2u3iZWgCjXfNmfjXfno5rywmCVoqsDtRkzsCM5EywaEkSggDxZiMD3ZtmAsymg7dyyPPeH",
  "key17": "Ms9ksDyi4FMVGrsDZp8H1jk522ATrGfDirZbAKNeJNEY37bCccy7TvoZ6gvPdoaVMUG4GjjzATD6wm6qEgyp9ni",
  "key18": "3WxReBiRjcetuCKzgfibkxpM4s1vtuaHoMrC9ZWWK8aRuCRq1DZ5QUkrYRMtpgu3poRAeW7AY6nGTTz59GmD4YYS",
  "key19": "2822AhsYZKr431b3WeTnEXowf1roqoykiYLQVDgLjZh46vf4QSnwRyaG32mEcHNcLAniVbJLw7h6o29YDQqJJyL3",
  "key20": "3SArYaJKRxhS3MjE1kEA3pTFJQZi7gQRGoVhcsDSgsojLhHHEVTtADCBafEsBX1oQovMx4rS6azGSPPnYGXKKYKw",
  "key21": "4b9AazTejS8zYERi8DY41RvdHAhon1VANunHJRrzd1jGybW8QCvXbSpKUuiQjvCY8VCfszQs1753vqb1SMZc27ik",
  "key22": "2uGCNc8zD3VuskZ6hgqJN2SDFAdLcmsEmcw6cyJ2QBvZHNRvJxhch9TcK6vreTJ5xJ6pDz5NfVWvo4ENtVEeXZy4",
  "key23": "UyuJ2Lg6XbTc9H7t1w1gfhLgGU9J1FchYB6K8rATUV22gNoas8kS8v66QxzUBK58gYqRsN84F3ag8GSBrp7KRBU",
  "key24": "4bdMy9VRYHpWay2nVCQvuyQDgnXSLx7bGbmLPeX9M921VsfTTUYLraRBTwJijswTGp8wKtYjBjw6J9QQG3vzUtUk",
  "key25": "2vzYLLMZPaTon9211GgDauqTmCLonqMP51kt3kPFHpg9iCD6jyNXK5C5uLkgjMNBV9FnoayYSaHHJWuZbAbbJ1Qp",
  "key26": "3dyV5g1ne27t7q8cjfLVG2Fzp6j9kZ4a3i6kFJ4kRu83TLFXcDtab6aTAqYVtJuW2D4BS9stawjAbLGtFThx3F6N",
  "key27": "4Spjzvv5fPHEynUdC462GBwG1XpQQLPrh5KXuHnH8nKrx48RtbupvZ7dq8WZxLgWFqL5gvPcHrCkgSsbYGCiNJX5",
  "key28": "48fk7KaCabHcybPfz5oiYxFEJbUwVeBQCJPAte3PLRvn12mFF7i64pas63Lo9aT2qzWfUtoqciGnuMgJXmgiQ9m2",
  "key29": "423cYqcq7eVaDikktdNmv2bxsPxMaebKKZhhZUSTbdUPjSY8Xcvb1QQ8GHS6avSefxkgzv5fT94UTbHxmtumsZnG",
  "key30": "4guVxmdsftiwN3Nk3d9j9ZRxDEGXDqjbAQEy3DEajKvdhrEWCRp88eAG5rsPza11fdg26sf7tJzNVxD1ghHCikdJ",
  "key31": "3aQ5kdHUn7cjMvqhEc7Y7dxBL6TwwYorspX7Jwm5ESXQVHcBPsaMBFjcXymFYDEBbG3MXC2RHxFBNJ3BvyiKc1nF",
  "key32": "284udqCJ9SjGAWTufZ6qnTavBPWD6i9uoLZABuRy8ppMU7kbGtbsPsPosz1Ck5S9Gr6nu8R5J6h2Jn4rwx73p3hW",
  "key33": "1sb2Aud1s7T8u7DdsKNbEcNscBxbmKsqFcXoVPfMXYJo1mz2AjJvi4Mw525E8TeJW17cP2KaXJ22kKDVb4W6att",
  "key34": "Vk4umvfwqh1V6R4xUjtFwevV9EnQDkPyoSJ3pk4dixi4h3rA8fAQaUjWMtX2sNvRRiiEp6RBXAtnHDeRcYozKE3",
  "key35": "4z3cf6VnoyTMw1pec9QBGG5GZGU5fxVamkqvULNwZDESrgSvrdVUZ83FocpwrqGZDNaXxUr8jK4CUKsUbbS1iVRn",
  "key36": "4n3UsnV9vcp8RiHwT2nV94vNVGQugN38KwBmn1eXa46keneFkeh9r438Y5XnTaxzr7i4ymm5VMPjAfij1zXakw4k",
  "key37": "1z2ZFUcXoS7spi8oRmoL61q8rYiWEXnwkGv2AsQh2Xnb1GBMq2BZn6SmdLpNZpBhpo2PC6TL6J2C9MRPHzyoiLf",
  "key38": "2H1CtgTgubNjUZbxeLNA18PJggGw8f63TiE2NdAqhdWvcQtykRpUHvzsEnNQ2KyH1bXnvoLeYSvu5Di7aSVL1cNn",
  "key39": "41yaNtqtrZ9rmE4vfC3oBKdsT72WTWZ2urfMS9Zoh8ARnaDWNa4KUxB1Ei8v4WbQZ138pmWxqSzdBbpqGnUqmB2N",
  "key40": "WSnFYf9hzpLS4fMiYqGAsKoWjGzCvMS8M7nHbtTr3a9J7rZvrZbRv2y47foYnALMgM7CRaw4xCs8grtz2ucKqS2",
  "key41": "5hUKkdHbDXeQqBA9TbxtcibKQzvdS4pfZaTyDhRWR8RzMf2M5kRW81eULoduxquNkPhbS7gqyrjw18RS6hpMAeoo",
  "key42": "Mi5sgmdzXpt9ykGwzRABV34HdEAbEBdw31eDoD6BURgSyv3useCFCBaXXbSf3pnbmUe6m6RXhDfKySz8THc6bsB",
  "key43": "43dJs7WW3uSpqa8paUwjNnB1YwQpZYUykdByVPjMpETMWdkE1b3NpSP8GunbeJYzHDWP5P9737bpfyPX4LNiLp2Z",
  "key44": "5cMo4L4d2ZG8P45VkKzziLjye6ng3MsJiUpLgU9L8cwN4Ubrx5VCVZFo7MGFPdDsQqbEudADBzA9QSK4aZwkeoSr",
  "key45": "FwyBvBmHBSq8GwcmPkjorFNeoPT9sNmyeQZi25UwW6KeiV8N6i3EH5ZBzsZFegPwKPLMVqeuhMHecXQkxisLYE6",
  "key46": "2HeB7q7R4P5q5z9Tsx2hphQF4L4hLuCtVYqb7oWEZH37RoKMW9nnRu7YV8mpuP5S422bPko92qLJyoov9iPAeunf"
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
