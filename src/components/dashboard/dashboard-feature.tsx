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
    "415h76vhTgApBSkYdFxL2NtRubkZma9eCzuXNa3aufyFSS2u6NEJvgJ49NrcmuU7EjXXtBRH8agVgTsir432sZFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jwj9uDbKFUprYUmXY2duHdtfNDLPW47gcQZBGVWNzh9Y3VWEnDZ2VtVnrChKX2DZ9fjCxicLsAjNQKVjzCS4QqZ",
  "key1": "241U1ZSUtJRPDSLdok95S488sCGUX4g8ZvG8AprC4HQ96KMxF3pNYWMcbyy8jgEvDSYrwWP6bsjVxHYzxF8yEwoh",
  "key2": "vYTEqRbdceXX6Bv8GDpyJ3LF85rAgSDXeAq2ZibpvWu6L9p4xwNekvU8Byd2qEjXK6CxbGSo6mmDompesuUNpF2",
  "key3": "2FNNzPhgB3UQx8xY915MniQg9QTCE5L63gLQ8kBYdKd5F5wNq4ZP3B53PrExyyJsRX6x32ucREC3jX3xeQm74Vtm",
  "key4": "vXTkdZMTFKQDTHjpt66SJHhmkm75rqnU2FRzX93XAu9smvM86y8TpMuqfkXE6r8xwBSAaUoDQj7PciNopF9idoV",
  "key5": "4UdYtjQmWNMUT2w5sM8WTySGDBu7o9wAkuEKWuUHHb1rDwjPgWxLv7irR2o7H984q6qTpiAXKCx98qiqE4ewBy7Y",
  "key6": "3MKtNYxb6DTYv9j45eFbJ2ftox9JXHc5kWipMT6Qn9hJtHGhKq3CudiFc3wGxxyuB5syTEPuR2oWZgf3J7t2duSX",
  "key7": "3PazpFeCQxW3x2TbH4RAeWmPwaAZ2aV3ccJs7t2XgpT6LMBSA4TbEgfH55pbEWYxmdowHemFUbGf7PEWTX715pKm",
  "key8": "26FBsL5WJ4BH7iCmt5mTAZfa98ShNRxiFaYYdkfHNZqZMAeSTDH7dMYW8JZmNnQBh9WQ4hGpKUbDfK4e7FmFnAKn",
  "key9": "4XvWNuJUyZa35bgF6qbSptXsfUsYgBqDLcEdEDEWdUU1aBLWoRXYSjLmG9cv6oS1M4YaWc9gujcuBECn5LAV1tBB",
  "key10": "2aG19HKHax7Zf5hqsSqpX4oWNkeHX9ikHpQu64ht4zqTty3NgqjbKvjDAuBbTjk46fRQ149LoR9UQU3uhjsE6WGf",
  "key11": "4mkwAkoJHvGoVJpnTfgse4whbk4m5Fi2Ef4gp2R2dupuuYbNiGhSxatjLQYzakhC7qD5GBaFe6XKJbF4u8SpJm2A",
  "key12": "57S4dSKFhUq4RY1now9APBDQ1mY9GhUwzd72S96s5apNzb6XVtgoHzN54oQ3cmcR12f5FczHx4ycurRqdib63uo6",
  "key13": "59rZYtPd6mTPXN2fiRKjXGq9viTf6ZHYuRzLSTJt4fTqnyRpKEthQhVhJGGDDV5QptAZWkPmi7ZjcTQ3TZ68mxLh",
  "key14": "2i6wAK3CiQExg7hrnRG6q4PaJVPZQkDZjZoCAMMYbYrgJatQ2cEtiX5RZxhLxJwoXqc8ravk5AdL5e3dW8Z8yQFR",
  "key15": "5ijsqYTYuCDt1Zad9E5oeQtJGfQWNveBH7ycjHLf764w4aByaeHGrVezevRfmdrgvEkQ4vN1frgms6Wt2JyArZX9",
  "key16": "268g63gnjqXPsAN7nXMAVzdhgwyctE3XfCDHzB1QVUtxczeE9eqeDvGR8DVyeJq3X7QstgTfESvT9stEmdKt5ppk",
  "key17": "sXiySRaCFZTtGE918z9yBNK3K8zwVsW4kSKsboQ4G5gKwvPLupTQNbCjmsbnvBnm86BNy47uzehFfCpDCMibdv7",
  "key18": "2gy4ZybdXKohWR6TrgjgZAcE6BgDbS4gVEYoAXCCzM1Wsho4ZnVeup6nzdU3ca5XGnrPXE3rA4MWFgkPWHKLPt5w",
  "key19": "4qqcKoDeAyHsQzHWtBsVtrGKh5owM2YB4uFGey1L2AwHCXJxs4LffnB8BZS2FHqLwsCxExGqh3fmvtipSeifkeTf",
  "key20": "5s81ukEWoJynFPYDtjxd1MQ2ucJ9VK8d2gYjZbvkyqwBSqcMogtdbxbQwEQGJYTkmeSPhFyXNsef28YJXWip8pey",
  "key21": "34Ci76cW7UUicDosGJPWoD3GvMGXcEHbArQ2bjpWmmCyzfY5CHiT2BAYteyQJ8BchvLbEYYSb6qwRhotMpLafuhP",
  "key22": "2Sj9eKRuaLVoNaFdB8M3FQbbgcQWv721PBmH9TUUSTJJGfj8kAEZShK8dgeHZNJDVtibFFm3agSSXuaudUK9iTgT",
  "key23": "4MJbTkZwaA3f1pc8tjBPY8sUGATpVEbdvUSYjsE4N1Nr5ckyX71YAjWhNK55yx2Np7CLArhGEtPxqk9KBsWG7Dpe",
  "key24": "5e9CbkYe6NsetkhjBDNN1owJ3yg729Ln6uzx8czqjpvb4XJy2kBrtKbHbdHjZ7wLW8xAUqYZ95QGJMFMMUSengph",
  "key25": "56zi2apGgQLc8MWTVDJZdTnqGM3nks94itUGekTwNiFHHuC8FXSWeipSsAbs4c1sUuZVKVBrAthzcYjU5YnMemeU",
  "key26": "2Esb2QCvBixh37opJz9ugu45kfwDGmjPTsdAGiyz9hi18oeMw5LqzfLwvGLRB5PeLJUj4p89aJ5FKnRmwErXfb7d",
  "key27": "DwX1omhF5zs2NzL6QL1k7ffUT9L7RbAsV8yXw2q8qy1FVoe1y5FFccng1U7aSaqW2d7pMhKwkEGA2bwQr5A7vaH",
  "key28": "2fARbjx62vqqy297b1tS83xifbDugg1pwN8728bahiRdE3d7EDX27gWy2PEULDXwFXiNeu4RMaBPetwpJ4khUaQz",
  "key29": "3Ek7NQUhdPzrGEsKSLHiFxvP1XKMoARHuBWeoDHqu7rEvGs9w3XXZeCL8hd6i1hsyXstTtsC9SV6kSGEnanbFfYQ",
  "key30": "63i1GmAe5nReBNvfKpsnp7b9SCTFuEk5QsNAEG8MXWqK6BmMrTyQRXD81ucw2ECLrGv6aysiMnanQRfQWmxxd563",
  "key31": "4sS3Vg4D4dEVwbmTkKQjmU6tqTyC1d2VfVdn13LRBsE8WfEXxCX2bRb2oEJFx52ME4kYEWSEJ92inQifyuCCojLx",
  "key32": "Ss2ha7FUG3QJ5RFSovgmFSzS5fpiNA9RH1wJzhinz26iTb9scpzmxjjXM3K5bHPHzScUR43wnG7DWMzkT9MhSFw",
  "key33": "4d1dAUTzbgeBbZNaTZneNps2L6eGk5EbDpdqp9D7qgxHLJNUBK7YjUJs8oS6kNhWXsnCsw7iJioXHCpz3taY58aG",
  "key34": "23zVi4Mfq4CFcPx1XYT4Rv6T5ZeSwqj3Whuvy4qeHW6daUXcrGFtixs2PV1pEAVhyQEhYkvcxzBXP5kQovbTL8N6",
  "key35": "QGcuW9N3N57DnmMtoMiW9tzmj4Dn1vpX4oGr848vPo3KwWDvueYsfHCxHUpdwvpzMQsCkMRnRUPcs1GarpmMYCZ",
  "key36": "3hxUHZXTMcxrLPZLFke4KUuwxdkMdM3AWc2bD5kV2wpiYQ4CdhDkdP7LiN1s3KkneVSmyCESSvFUFDm6N2WUoQaV",
  "key37": "XpyTj2LtW3NC763NRMaLQxzSiHAGiGQM7kw9apzBNurBbXxBQ6rdLNAiqgdRj4THhM7xfYGj5eMtJML5KH4Snh4",
  "key38": "5JsVrLdVz3FufvkABYuhKQnrN2f1qCJGt6bysVpPzdJUZswKZKtQVx4jEmLTPtbahQwYig3vaVYVPJPeND4hbRZN",
  "key39": "2QySmZQzJkDi8gynuuscLosQUwwKaY5jUhyp4oHzdPLB6ekfREV3isth5ycxoGk466xiS9pNF7kvhSDE5z5iLzjW",
  "key40": "2C6WWEYRJ92s5tfiUGzRnU6FvCGz7gnJq2AzYv3kiVKLyNxVEQWUhruACmkjg8QRQbp3Lc35DFNdszB6p7pdSU8q",
  "key41": "3JW2YZw7zB3MA1ap2ZpKcWhbuPYYxqd8XzEXshjacXVL7drKZmXMRDdmRayg7fs6E6DK7TKt8SUiUbQt3QiX2aek"
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
