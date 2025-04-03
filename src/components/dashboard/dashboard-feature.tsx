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
    "47bAU4YBwGjLd1ck6EXZbA6msSRAWxRCRLCE42bWGzMdsUp7u3RTCYBXuifXgAAJE6NTaetdggpnkPRJiYNxkYz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P4wbaBAkrWBTKrg533Be2yV1pGsW9ckXrEmuyoU2Xm7C1bkZ5f6xxbdW9AxTxGY1MDDGUAPnX4EquCM9zJZdQsF",
  "key1": "4E7RgdrjUyLzLZjY8UKmSYynQFkY3BLG1cYXBRUi8m845mCYEqcPSBaYN31LUXdmCLPHhcEsFkwt35n5saUX3qtW",
  "key2": "2KUJ8sirurfzvGrBkCnN28xbWyDWz6G3CiD7NH3tgPnAyDn4jtcdz337pshGRuGsyL61jz2uVnsCsdDJEzbKMCeu",
  "key3": "3ykZ5Kn5BDnavHdQsyLLuy52EmwWgWgguYNMCz3QdZP8tSCAeZGASX3PxtYrxcCxum7rc46FCsgtSJwwd3GyGj7N",
  "key4": "4oVUJai1ZbnPUHJs139EzFo5LHhFm4D9iTNZU6K5H5MytB6Upty4jpbFMs1D6rt29sVJ4Cvz2kQP7kzE2hA8f5CJ",
  "key5": "5CwQPzt2LE9HMfoH2M38yaUKTuXnVZ6KpsaWCaxXKUj5698ub5kAThSCRUZ8LAPrV7AaGj4jE37ycKJKM98P4eyk",
  "key6": "3VPpcHKZ3Zo2CmduRZMaXnja2CZQfZ9v7LYEg46XZfUctoEXrnv6DaanAmY4WiPmNrvoaadShp31KhhLQcZAHMNh",
  "key7": "tpn6XoKx34RQbMeQZ1YSVtK2B1dLMxuYdvqDNd6qiVUchzdNFc5cMtXszwTomUyXMnX2oxw4qPZ2f5ud2YFtwV5",
  "key8": "hE1AkCT7YMxmv9rkjnyEWGTM1h6xfBYzi3XXQ6J95154hawUTQsfSv1Je6ePF7cwQXmHDXCtCPu1w43gPnQYyZ5",
  "key9": "4EAX7uwAzRT8micePZojQCFKnFGgELybzQHDZGxpczNWhPktVwUzsxDneozXxBSEXsotBxALtPjCEYNMe4DevRrD",
  "key10": "3FEb4KTQZhtTavo92PyMMTLZMWNCoi1bMfaEp3jURnBYaddeM2j3t1TvuFditHTwAkNjsyZcZmMnamejaWFPXaCG",
  "key11": "XGDe6hTBxDGqMqbbYjZMSM96x7fE4TQg2czv7W3mKJxNgud8kCWS8HeksBbaFWEy3pP8KCTF95aZXg7TTaTe2YT",
  "key12": "37krKwtFeYTZppWY7xr7krhKsFdV4kvnc834gPNSnwY3AUWXoRdj3PdZ3BrATkVSKWBTCjbZXXprynCSg6RjTJMU",
  "key13": "5Ny6LSSgdFpCfXG6sD12GQHSETYm8DL2xYnsJtk8BMdPpu7GoyKPB2MSbfRxAsmxZccQpyNjtDRKRR1LA9FT9KeB",
  "key14": "2TZGHvLi64SnNP2SxeuxSVjYeiFRQqSrcNMnLMdJpR47k5YkN2C5vCt2t8E5U7VXA7LYXKrKiaHzHP3BqgxQ1g3B",
  "key15": "26hvpCYBZZST33di3eDZrsjyVawJuhwu5FfrDwMFQXnCWRw5fXZxCToYztT3n67REhPBt4tm9nA6GeGJGscWC19t",
  "key16": "cxKukheydXNphFmQ29cTNs5pyd15EfQisAFR6Ax2pM3dpS1JBRCzbuutp4oSPsP5SUtEdQE2ShXiyTe4pJYBkVJ",
  "key17": "5YvgvBxJQgAFid3Wo2CxyhvhFgwHkNgFqFVGa8vnTQbEoG8tSKjBD3h7yqdyBLrWtVrYoNadaHe6rSbwiHts1qqj",
  "key18": "643tgpm7eXLZc8HqswDft16y6ZF3ARFX41x5E9YDdrFZYgKGq2TyR1byG7LHiMcrViEqudrtudvdwWQKdwoYLAM7",
  "key19": "LLP9ZBkJdQ5rJD1V4XmDDq7PKbVWspVykc1q94gcX9TopYTYfxLNCpEkXngSFnHohR1xhMyW2CsTUKgY3B8K8xA",
  "key20": "5ShhA4ugSvNShK96L4SD4yCds4o23gAhFfYQGN5tS5ubX9Th92aFBCdFHHi7MBjUsEgf8Npo6xKLqVy4ZWojM66K",
  "key21": "3ZXQi7nxtmoNwarSXf34gaBKx9aNQTxngvmPcwZE9d6vuz2Z2dmiSaQenHMzQiYDRrQGLkGW6BeWtZMcoqn5Ws4Z",
  "key22": "3WGLjCkCYHhkLjYXd4X87TCQqAA7sDvAeftTryxjDzwMrjsqdwagYqyE56HwYAs46VXfVmvKky3hiiJtGmWwBTnb",
  "key23": "sJMTJY8FXREDmPcAMn4hcj7P55BrAjZNt4mugnPD5MDYZo8r5fzqFAk9PApWoNmfCdUkyYivnTik31bedEK77L9",
  "key24": "3gKbYrjDsNEnmdFsDmx1gQ4kgdLjfp9wvUdRgS3zxdcru7cPUiQLHLDZfCGTK75x6sxEZsfAS8pCfmYJBSCuLsAu",
  "key25": "5VeRM4uxs7ghcfGEMqPPWYLKG5wVYftAZEot18FZDeuNV6reLKw76izATM99fkKjfyoW2om6ceL7BiTTiX4Q9m5u",
  "key26": "4UNAzHvg1iAVNH3uNoEfRnmhdMEL5WjEmAprvFreD5dZpaYrLLENtpwSzqdd8hLNMZeKPh4uKcaS73v21jJ73DvK",
  "key27": "4ypSYREKGyptcY9pDwd5N4uXmrHSsrAQBy5oduKPUm3xSTShwssZEwFCdEjfp6yidUquhXcLtKjKTBV1cDuDrfLv",
  "key28": "4wg7ivaZ1DgiGrZrVqrUPkBDgU9BJyQguGABXSMoVajNyF7idcSFWzuyn93hUKHnpruZtJLFtD5jERAiFYoTBTH1",
  "key29": "3Y7yyAkHKUVGmkeLhM294LJf94bHmDtr5fEg3pef9ajywoe6FnbeZfRB3qqd3YKt7YPEfWnomuiDPcDG5yG6RvRe",
  "key30": "5LNqSsn26Lgy8VzN73c7V9kZ6F29CjLtWeadP3vbZAesNs3EZaetQwALZV4sPmsWm3s5zRdbspf6jXCBkiep56qR",
  "key31": "5d4LvkcspYtHPW9ajL7HpGxwbDVTCjagWqXy71SozSsWm5rYs2y34TQ1d1LoC2KcNnSGvwkwsrJFuFbHudEQKoz2",
  "key32": "7MLZ5NHBa4LQWoqB1Z3Rx2D1vbEnc5ueJB2dzdyCvsRCLBbypmrFYFfJFzkFD42avpfbRU7sSXYEEbZFY69MgLK",
  "key33": "QuD9DTdJg1U4STdVSbmydf2maTFBbLCd9YKr95A49ue4SPww1ZrGwK5KxPF43qpE5EekKvAzQPHwpw9nfMQDwQx",
  "key34": "4DRZs7A4XmsBJS8uufFZ49NWmrwTVGef3D5PKSd2qbpZ2gPAPSBFBnVYvmS8fJwt8rRHo5kHY5RdRmWj5Ykxv7vR",
  "key35": "2nUqQxcNDMcdiTxpRpj2KCYuEZYhheLPEdKQVnY11vvrDiVrzMzBJGZec8SNAdvfmCRBPVMLzRxtxhLuzjZU2z8Z",
  "key36": "1F5PXZbyYh1T4VsmPM1XtNMpoL9kDrgWz6hmgFA6GUbuJCmaasneFoxTmXFg3p192wMc2DCvRJmHjZ75ws6PBRV",
  "key37": "56XGCoVeLMrii3vakbKzsVBBBUVw9mT7BaACzH5cFTk6wSWsbAvc1V8t4yoS6GNXuFCGcsp5StHVrNHkJixy4HiK",
  "key38": "2RzBGCciMQ5S2o5vfgWZg53y4KXYg1WWKQHMHP898UATzb3tGTnbuLKQfCZs2TW8oNT338ErxtwE669Ydu3sez25",
  "key39": "3pKCM5syoMP5xwa65pdqw4b9F4vKn9WJS9KQeSr24vYWokkQjuTwJYsHMQPHViSMj5LGgHNXXidknzFxYvX8YDv6",
  "key40": "9MVwY4eNFR85tBVGBSjE6AwRP67AXH6wRonENCsaJeSVfWhVjY3q8oQX5fD1ZHk15uTxC2WtAyZicDPuRCLbFsC",
  "key41": "2zRxsLuJ8NmLnTqu3fLrEHc38V1Yyru1ozuJfixUopfxUd8pCEJ3Gip3RQNa4pqyz5ZWUcZ9kWcJqKYmMpXczv1A",
  "key42": "coLk2Xjty2ZWSv2ZDUEPTJb28iN6mSzVscjjjGmv1gKcvSSXsSp3SS5cMQJX9NJiUvELRNaBKe3m4PDA6D72tnv",
  "key43": "3sawwjn8ZxB514F1kGFxCKfBcWSt7FVCprKTTi23NURekxNhFasxkkpAo52iGwjXkyVWGkq6uqZWQ44R9WAFGBLR"
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
