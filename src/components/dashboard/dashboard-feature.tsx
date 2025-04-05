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
    "5z23bB9fhTFCeUUuP1uJFWQRYUE4BpNNxj9YiJZi9dXoV2DzhbdybvJmv8MJCG1vuP6bU5i3bN9woGLLasoMw7Gt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v3a7oJfnDMMzPd6SzH5b6F6aZBKUjL4zkcpBQPK3v59k8grH9nqoMwmwuCBR2zeS4gzQ3HF6tsAFvftyRAZYuN5",
  "key1": "2FmVWMQrKMXRvaBUMBXM4beJZBaqfPEoUvHrXBSMXmmQca4AoN88xFjAZfGuuFrVocA1cz1BE9DhS68shs3qPMne",
  "key2": "2Z4mqxFquwSuXeKZUBwCtQKvGJjBEviqCsHPk12fF1H791wU94oBDzYMaxHs1PmxuAystxmywrniDeZeYLGU1Rjw",
  "key3": "31DunsXta5qjuNYdpHoqoA948rKJQEdJh6oHTZ6JDsbJRDH9KUpwNRmvw9ruzbZGa5WF2PjmYVKJcYc3WGhLHKgr",
  "key4": "4dD26Hn2t7fMYbh4iKUApMXkXVjCv2iuc1SN978qs5wmKvfNaPCDKGzzSVBMNE4bNvs3u7x9grgDCbNY1x45Kv3g",
  "key5": "5UCza5xedCT3u5aRWJD8Chw8z6XoiosJFKeuw2Axhru8BhybC74XP9irw1S4rFWcq18QkjJ6yAMCYrRVvXRH5NUQ",
  "key6": "3UHdCpAwHf1oQ263MYpHBW7BCHSSs8vz6Atq9WvTysAGBBb4hUoPQK9H6iY2xcWfsGFktkcepTSB2CKCgMnhv9R7",
  "key7": "4sLNQd5bJE6LZWACFsdbfUXKG3k6k7oVM2M4Z8QEPDaa4HoedLdPVucJp2WukA5P6esV1dMV9BfRjNPRd99Evsnz",
  "key8": "5M8ZKP5bUQU8QsYB8cTdJXRJFWNiT19YLeqe4iy19K3UeggYSfV5AA9rpvNpt9EVqwqW8oLK8HDZ71YLNT13uUrw",
  "key9": "4WB9UcPyQYpJQTTKptuCMydTXsABQPAhW9NS9vKN8g7STKqK6dekQUByh4SHLyWba4Z7uKnUrhnJC7WJ4qyu3Afs",
  "key10": "54wyd94GbV2KBwLBPrKu2nQz1LsJMP4JuuTAzWrbcALaCQozoFbAtNU25eWqLg9QFkCFMDqYjwsfPCZGczbpQSx7",
  "key11": "3CGrd2Hj46XdivS72XY9H8SAkYnjB6RMLSoRzhGWXSrqtUk9cCT2maUEmSbFep21QNzfo6VbTbSNQ6HzsAJoJtTm",
  "key12": "4kTdFPUBQzyu7pnpUBfVgXSLvZUcugyLVhzpXijHGT7GeCEHCRk57svdGKjazacfs3Mq7W9ZMec33LAdWHejLRzF",
  "key13": "3VUWo6jiWK7MJtChSsKd2WbF4xpeSgF7hD6wG9rJBzXyLEN2BewnfSU7XJU7KWWJmQR429tbLQ74RFEBchC79zVk",
  "key14": "iFygmfAvch1si262b8mGvi3VYxHE4Pnt6s8ZpSye9difgmyZNd72RH5z5hEmwaAMGoXZRUk9dnMzXudAzkXVdhS",
  "key15": "49qMoSeSsNXyyjVsVP9hGdinbkiYs3zwV93TNxHcKoVU9Fsd547h1mEELN9YHQ76AepQ95mUndTnspBdHN4cqRWN",
  "key16": "wWxvZUGtECmPVB4moCBcCwXfsDM5hrbEwnW1jrR7sxkoELPUmYFrvAbTZiNhK2wuTfap33eUKssTUPUaQDRG9eS",
  "key17": "4C2SHCV2rx8emHkCxpzf2RCxCK1CUyeYx5gBawrCEk8Epx4udf4JRaei4feL7kcjs2u5NgT6cTzawgLCz5zL5igg",
  "key18": "SuAUooTmTn3xcxcko9nhg4Yz5UGcQMksd3tG1h8dWZgxGYc39QwQM6kGe8rb8ha8HxYPJScn2YCefouGoBp8FLE",
  "key19": "2dyYCAY26bfbbAxdGzStTichEuApqCRS3LPGXQtQixxsrP5oBhXGCv8dbaL8xnNhRA46E46j4ohFMPZtBDv1kDBq",
  "key20": "4EhURiJVi73fbTqaMQ7iu7Pm53kWcbwHtim45UZD4sCzR5BMbo2HRnJHc1CG9jkJb9Aj8ag9EwyRqK1ovpsDCWko",
  "key21": "5JKrGPfxKswMHG4awbdu1PM1QGUEQNNqwjBN1Aa89bPev6oe6o2WUQhwb4xG4mdQUcXAawyzH8RVxf18in2Db3cv",
  "key22": "2f5b5RYCTBbSZv9Rysv6sT4AriMMtRCQo1a8NaJ2ZbHkRhvDWiHmw9XdGJapxDe1saU9PdsdB5jXoHFC9XsT8DqP",
  "key23": "3NTKPGDPtmJEz9BEjk4rtDMZvErc1sQbJKfv2M5i2AwhgP6Jjng9pndBLE77roxhWMEPMDK3WeJHFsF3xVNwG1tg",
  "key24": "5MA2FpyP1Brx88Pkryq5SFN8QSQaRMd175Z3Q84gga2rPao88iz5fQbCRSHgBnbcEfSjHgU9CSXyB5Er4vAa3buM",
  "key25": "5vQ9BCqxP6EKXa4Y4CD4NHTnoTkuTBeUykdLCyouK91ZGTPoFH3mjktWj28cgB1VYFR5h4WJwR17svPgdNv8i6Bt",
  "key26": "fgFRbdkmjcoxLyYHSfNFH3MwMYYWohkwGEPu38fY1z2pCfu2ZDKM8gMKZB2fvc3f4EicvKR6VhNQ9pk8WgwsSFR",
  "key27": "5mgFVxQRJwsHaixDC9ge8tCPVz5AfjNHDRikaqZW9KwEmLf9zsRZLfxf7PeVPAcEjVGwJ5vTZGmChWdptKFWRLFH",
  "key28": "5cXfKGtWv92JyJVtsoz6QEpKeW3rJRgAyMNBBpWsS1giSpfRPdvb6KXjwxuMMEhRUYP3Pg2L7fSs3T6eJic7hvWd",
  "key29": "2B7c64FdYPMcjLTKaKHsLX8mcSBJb9tJHoEfs2NZ33D65umpE3sNDVUcro1Twt18qCaBkpa7e2XjXajdW93ML71h",
  "key30": "5N9nBPfsTsYvWo51NPHVEN28BfpqgyoeVnLvVoZCYVpqgN1z3xLk67KRneUKDgTwKhpEJ3fHsduZnC7LFc62EJyX",
  "key31": "33NZfemza7gpcHH65JxBaWEWFycEgiwD1NBTN5tVQqCkR3NEb7ATojMpBqDyuqpABdaHmBdEd7wpN1TYmwLqSgGn",
  "key32": "9eZUvXoMB632ZzYqz47ysEMH4fuVr9chwDNTgL6TQycoewjY2MyBZTJhiP1RnoHtFZvdmSAvRrfhSGeoB11miFT",
  "key33": "2cstddqHvBajk2HpaSiY3nM7fvq31ZKEJrffSYUw7JNcHjkC9MLaWzvusq92fGf3KorB73FA7376MEuoHrxD7KRZ",
  "key34": "3pESeyso58VoUNDyUg3Hm15kjs3d3tgemqvrfRMQsekEW2mM9RnhaJSsQwFmiKDynV7P2wuSb1q5JtNvyKYcv3rj",
  "key35": "4jRVtQFSaehE41GbQMfMGe4nEMpDZwGCu1jDqRYXjVZkECHHqBF7CvF9cpQHYF5aoxkb1ZzPb4Ut79i9oxXGMorw",
  "key36": "3XnpckM6RxKajuUUX7BHKFiouS9MeEppBUQ1icQozRXwbJmB5SLZhmo1XYU2HDfx1x9Tkjugjz8AhezGqqfaWDpG",
  "key37": "38S7PxRyr1nAeWgHcYJ4vGTrrTrFGzq1HBjN5eSryvcFn4bdcefPhZs1Sfd7fpfKirg7FGetAngpXSYaUnJAVLmA",
  "key38": "2wHPMEoAyB8L97xtWnpzkvQLpfRH5tRPJHzEnCoYUMzSZimok4eukzMVgHk7EUcAcgTZW12pfuiUDHWtAAxr8eXu",
  "key39": "4MK8pb9kc3rjzR62tzDYs3uYs7cbg5aK5pGGN5SoBTU8reyteRFqEXPQFdJQCB6ztTx3wsjgiXSuRWTTSJ5kpdXe",
  "key40": "5u1MBHE1LqWTAXjh9KbZu45WbSRSTX2notpDqVfEpKRfv2XpRrSrbvukp7et5aWW8c8siMQRGXPB5CXn3x6ZrpYd",
  "key41": "35RCCrDJboqbffd23FkkKbnNJApAwfh6VRexph26ZuuZDtrVhFPBVZQqz4Hp92wGGEMvG2YWkA9f7j4FYkiNWuhT"
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
