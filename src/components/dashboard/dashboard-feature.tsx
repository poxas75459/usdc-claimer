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
    "2BbtpzHooSBH3XsKfShz4yH8XZvbCis3t2YRrCq2qmedR7CAEUEH1NMzVMKXRpQ1dftat8BWZrDBSQvoz7MH1KSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YKGaZqi3jLkHaj6EZ6AJcVsX3DhAVPYSc9BVuFPtTHit6LX9Ls8Acg1dhW7NyDY6ixwURFvkp7Q7ZrhPboUExas",
  "key1": "CbVfuyqggTLC4s5irxg3qCPbvpBu71iUfraruh86gryTgpfbkVKfBhmRi3KvJXkGcNVxCJnhxeQEqD2XuQS7Gqo",
  "key2": "2fEpFZiDpWUzCYidFjhQPy1tYhzNY86GhYCczJC3AcqeUtodUY1ubBuSKpieeZkqz1mQHVnNCHQhkuKpVr14CVS",
  "key3": "MPisja6QuWuJ7HF3ujz3kCw1SFR1DjiPnEBJc1hQPGjdF5h8ST54CZpTfMKLoPPYxvvsdVC7FvRxip82SSpNjxs",
  "key4": "2z2mpkgs7Hcn5YhkFNL49vjdtxqrRUVYKMjzrg5LsjHtcCTQHizForGgb1u4FNrWNzrj9wVVM69Bb8V2YJdbH96N",
  "key5": "2emtHDKoVdzjipg3bHo2cCijXDMa1iwycSpRy6qHHifA7sKgURMXanWEsDd4gy2hhBqkw1a1QUWqqy2jd44TxYcu",
  "key6": "5YeBwhsTPN7e1mKnphi6UhKSBkZc1CnqcWKghYcdCf3pgdD6zXmU6XCXvXNHVCiVXHTwaRz11LBNjf9XVQnLRomp",
  "key7": "2mFZz4x5btDkAREmXoND45HftMbc956NPn5rBrbbJK6qF1w5bEQLCeKJUUdw9HX6FE1YuwH9nvmgS7S4Po2Scymf",
  "key8": "5vnL6X3jZr6U4HmDshAk2qK59jcRP2pMA8SUdPC2TcmJZ7Mvj55cCrTQw2JuNGYJkxSrJYJS1bi1aLQa3PkG5BYj",
  "key9": "3p5hr2j5ScMSGX7Dw6YuAasPJGedv43DdREgeJstD5b3LgsakrDYHaDdB5BXxYHFKAZZaEoL5WRKuhuP4cp26UJC",
  "key10": "5kX7oE6eyoc7pfVJkKdis2xpbV76N8q3R2JUxUqEqGqr15jToZFVRe3uujGoonyoeaP8yWmAAYBeZCzpVBR7m4mA",
  "key11": "4zLJVLEgS9YLCTgRL2nmsZFTZYuyiaw7Hd26MNAuL4rZmkspmCAeYp8PxqaPHUUWmR2cbXBJaq6fdajYRr4GRWpp",
  "key12": "5NNEQg2LR1wqkMNitqiu8db2z5gUeetTCokCDkXS8E9CZVHgPzgVtrL6gyL5iFhkKARdBD6c1EP73C1FHfgaAFqo",
  "key13": "3tGAfkNsy7v79z7FLHjs1t2PBLNbQrZtKgjom4xASYwZf5W5squJceTDHThbxPAdoSLC4mpDAh17i9r8V1jQDJps",
  "key14": "36XvSwLTnUSQhMYQLUn9CzpDYVW5ysJ1q88fFeSdRYst2MSsUWVP9ozy3d6S8DtXmxtMNygtHs5kxZaPkwGbE2wq",
  "key15": "uzZExfxYfUKX4nUMJButEj46iAt4YKfiDjDjy2d3tbhsyR8SwjZDAoGyBYhGB3SbYn4f8pqD3efcMeAZfLyRaTn",
  "key16": "jRTVz7nPcoAfWjBvpjTnKW2TutJ9ghS5eTvwGuvYLSFdvMq1AcEi2czxqU5sh4XHhLrd2z9dM7SRZ3or4W7Jvdh",
  "key17": "HYqd8Pw7sDwB9vkCn2yKaLFSLZvxNhYA3ZftnUuEXh7d3XQxznDS1dVRnKR1TUL3boBHUfqxGzi66FBfsxnoH46",
  "key18": "5NQYwC58eTz9qqGh5LEEMweg1uow25ANrKwhR3dpYEiBL2MKAgKnzRpmkNjcsJRsybNQkcbYuEubtCjbDGmCuC2o",
  "key19": "VDyG5JBwnkdQ18qRpjUBSec8C8j2149epoLpkNLyaRJC34BUMX58xUFxoFtfrNJGeMkyesMr4BMvdSTeR86Y1aC",
  "key20": "5bByhNk3dCX92QvU4joaJrfKcXnJKUh6ETo9QB1CXZYt79FkvGkas5QtWVcxh4ryd6B2342Mafh8abLTUxN4ZKnF",
  "key21": "3PgSq4VAbnZN9AKmoWSujFXQtpuQfrVaZbbvjMPcbBK5SYog3xZ1Trmp5V3987p6GBrHWgvjkPEyk6yuG1fK3Ucg",
  "key22": "2ieyYmPGRbya4Y5oQ8DuZRroBSzp5HR8A2QftfrDBn5huaJb8FqCnyyatDyv6eEpAFz2Fv1eTx6Gg2EgtLt8D557",
  "key23": "4MhtHNPCST3zwf5AXFLnasCR1rqsbWuLF88yFqbhPJvf8gqTjnym9rWZhEn1KtmLUbccYuCp19UozTydLcdiKmHS",
  "key24": "2yqkUfvH5BrdieB864cGQhNBFfMKPcpKRfniSsBdpts5ALDgQsccGyoBtPw3xacKHBEkmsqR6rFESc42EAaG13Uw",
  "key25": "23QqpC2GVH7H3qL1Xftgxm65wPtBFzF6WTc1jFtiZg89ebASxGuzc16WNcY4MZ4edjFsx8yChTZiLaggvP1gkqq2",
  "key26": "prAQLizWaoRDKvKxomRsp6AFERczBKWpAo93DLSMfG3PfyPffTBxL8dLvUCmGqzi8UFva4zan1JfJj8Wd1e9ihR",
  "key27": "4H8hKJZSKjN3ESKcjWowohrY4ZpsihcJu2Q2XGgBN8TrWHLSSkcmCrrTBm745PdHoY8gDvEks3VVZJun3HoDfffN",
  "key28": "5ReNczH4YGTpuQtgy1RkxPVY3fZc9Daixc6Z9JZ1HEFL8SiLtaraEMZLkfeoFvx94J9uryw3PfA2wtAonY65XPXi",
  "key29": "2mfY3Y2C5Bo6AQknCRS3Gm2TtHdyu54imtfmJ7Nd6YMkSLB1YW2V5zHSsUWCH4SjraVLj6wK6HoaSNu2mCDKNtj3",
  "key30": "4AazbraFD9bbNwcNnG5Zrvc5NqgQzjPYoSsee7oSkhc2KMbXzz9rPamHkbM6z9s85NGNtBLrHrLV5MMYLXia8xyW",
  "key31": "2jZjkYuzdcS4gPUCPDwha3k86v9pkmBPkDMmvZpA2L2ZFCkSbPiuW1jRFKQaJ9ErEkGYSgwLFRpJi4c16wY7nHaw",
  "key32": "4giLySWjZSAWMkPrQ5UoJ536gZQoXZHY2FbnDhNp9TTEYmKdLcNDLUfwuWPmuWWUThnko2EuNw2NmZP9drufA7XU",
  "key33": "64MCBBh1pkYs7gjjFib2s6dwb4GzCRACc9v5SuPcmD8ZEEjBrRUj2Zfxnz5vHfu2RvUi1oMDVrpjsCND2dTYM96E",
  "key34": "2XchcdVafjR9UTsYrPQpKPWWhcrTBDknkpxsNJZ5YXZ4uYti2Ra7J1599dRCXboiUv7gL4j6m1o18DscUebJ2Pyk"
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
