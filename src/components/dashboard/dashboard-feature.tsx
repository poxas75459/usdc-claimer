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
    "3hjC3KxcTkdaxfLeExems3AfC3F4EAmwCHj1MxY3Xh7PHi3hxoQgV1jb2mpMpHfzLbRVConTFgpXxWCDwbx7vrYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TWQYsrKQFCyAv4RnX893jXgQ2b75kZq7sVw6M9iAMTgmUWtMsedzexpiop1sLRZVs7jZtyJk9cNFmBLQGUMX2T8",
  "key1": "5DmtgYG9hAFn3sPipLFgPSEk3qKCJHEdsj7AKhKjJkp2CHf2c3wpfCHjPxLvQdg7KgjVMwYHx4cumezd4BNgkQ2",
  "key2": "DHe6N1TKyZq2PVvV2UfSBCiDJKJt4LtQwXCQDJqpjztcnguvsAgRHKMZ6UYXbjFsZG6QZUrYoCkoNM49LwZrHmr",
  "key3": "5CpBCTZbNo2M4AtizvhXogF7UGShstngMFfkMy5aXEKoKXV1hCtdsJqmy8VgLRCLvCjYA19r6EZb3Fd7dycwXMbY",
  "key4": "5X1gt5FFpCh9aCkG4HFygnn5oK6f99bVGc6tXKJPuShkzJwFQLNzq2Y58Wi8Nnw6YCXwTEHixkTG5pyBQ5Hw7pUz",
  "key5": "zXPJcTp4QLmyxs9guKyDjXnmtRBbduuiZHZDbVdx6mY4y4KWS21RDugnJm4rtgZvG1H4BqUeq8pYTNoUtVgqvLs",
  "key6": "3NgrZpFYrqLh6c4YN83EXN9Ruc5xnqWTxcAGZ21zHV3bx9xESWRUAN4eq61hyEW25E73e7ku6Sg2oxUsbct27vmR",
  "key7": "3ESasscMrJepuyFGjZPBCAxZQNYCvKbvVS8XiAFaWhK7A5j8Ab5mRGqt4UuC42Mk77UezVmGwvwXTEEQgVxPnebX",
  "key8": "a2guTSsNAUgwbmhKTCaUXYttSzXyY8zPvsCDEiExdUG9AbeVvpCZQLSgsKpJokGPQyvPKFpTLfnS6WcBF1r6umB",
  "key9": "2WDcYQ7VsumdtcPvoNFsbHprZ1b6a8otnGh8Z6ZUdAZk4uSpCbRpZD2A7Yk9gFucPGSQNvhbm22pNcT1CJGffTJq",
  "key10": "MnUaHygcGfTc8JMhrPeR8o4CKav7mVudZ53PkqYGsh1Bwxi2D5uBu9fKzV8PDK3txCBbV1LJbFjhpcVgJRVohdL",
  "key11": "5mfunSyXqRSwMhz1biFmmuaGZwWCkbUiVKZ5yHRhSWq3ZfjyvmCSHCg2YwNHp23Rhsyp97VCX1ZtGQAUDPu9wrDH",
  "key12": "2TUCXETgGYVDxUx1aZwyENoBj8fjxPFeoHyKvA3LiNMFv5BeqpEAhKKBmpubxR4AqNXtBbgMutj6a2QKxufhKJqh",
  "key13": "4QFwtxnwLPoo22QVthupcVjmzXBS5pPxoJBxe2rcbKKHjt6q4os77s5FLcPQe8TpCpg3MyX1DJ8Wj87zMfbdx6xd",
  "key14": "2JgU4KS2ucGRucJZLpK3NAYAzLim8ZtY9ASsG2M8DZQtkwADshXMNpsJdcWT2CvjWUoTF1jpUHkcmt7Xhtu8NqZX",
  "key15": "4qhtVEQZeGRabbfj7x4jVgdEPLVisKfyrzXgEFtSoM58EGxZRa4C2gXuazUbodNDKLC9dwaQLhuHxU7dBYbrui2Y",
  "key16": "4Ur9Viq1PHui8GA41RZ2Uyryr6QEVGjaHi99EwDahutRus7y2jozJKcWVuGCfW3CSsXrePnB4hG5bdzmtQqAp2eH",
  "key17": "65xHM4H2aCSTj55fpyjHU4EzvnfMSvS38Ek6zdx2cVRPooL8CXYzZrKtLjDFhRHxdGbbGiGgk6Dd9TVbRNyBFhsd",
  "key18": "2RZ5g47fhD1wJonEu752xHrq73AXva4UKkCXHWv7AUZkKcxbcQ8U4gUjEmGbAXZd3BVKZELp6UfA8pgdvRxSe8LR",
  "key19": "29HoE1ewYCrKVbdMxScKFyfrZKU872kgzoMte58KeS5X3KehyXpp1X1w3rjLUXj3WbK2CxH5KQNiCwexXa59sUMP",
  "key20": "q8hnDgZMcKDrw8WRDHYmQWp1Lccbt4aA9CmmTUYVctRyewZGSvJ2uF5dTCYVP4mrQDNgFUEneTp6m166H1A5Jd2",
  "key21": "5cwDUDbt76xW7fJYv8rGsWGMgTNh1uznoAH377bUuzHsmBuGGfkVQDFoHnwXQvmqirjENi1AfFSFhSTFcXh55T1n",
  "key22": "XUCH2PFW4mihmGLkic6PdqJ2rMipjRadJ1peuYcBH62Y3iSus8WxVzFRDpYXTTQYL8EvXB5PsaDtDoJ7ozgosc3",
  "key23": "3SkmAJRxFJmE6nv9N8CGvYaG77Y1wvHGj1h6UJK7q7f1zDZRPsYZtQsakJ2jZ1FSmbrsWh1dUNEXwk4tTio4PNUe",
  "key24": "3GKisEYLzV4rHQSYW9VZ1RsworuMKSJMXVLbvP1niPfK63gFtmrqXb1SJcRCoo8oURefapqVav6SdCA3VKzUSTgQ",
  "key25": "3LV3qKgWfmwqyjS8Zqd6bexP8A9yCy2z2VYPZzpCPL9BjU538RhKYtZqcB7pQbvTBXsMQjuXDLy86HmKunxdmV8D",
  "key26": "3CfD5bpu4eWtSPnwijbeb2nUW3RgZp68PMfJ5RuFPAKPz7YBhUMkmZDHo7uiQXUZbNu6YDcFTyaDF7Ncnca1Hrjf",
  "key27": "PjDofHRcfbiUnGcMGrkvHP9g5dLfcR55CY8A4rSxpPNmupm9yDsc1AhRCVtRg57CEF1whuiDjx33MRUUoxg5PDQ",
  "key28": "3qFmsWGuWxzZ5j2RVTeFtyNA2EjWQdngUSFTKH1Q1d9ggj4qyv4ejmVT1tQyds7ixRE8cVZcTtrtAMRS1HNnNaox",
  "key29": "iRbiA6pJxv1m68LUkzzmJLJJ29Hzjgqqru2pfzrnCZmVQuwmyri5EWjViT7UZAK9ymNCW2z7AvG25NfEUEJSbUA",
  "key30": "4dt4eW9PmiKRn2nPsNdxuddaRPoiHEMznJ5AD1UT3enSv7jw4dKkhxav5phkBRqsesuPACzw3CuM4mEENAL1jFN7",
  "key31": "o56Hd366wBp7Avk7224yTesj6eHca2EorLSF15Ygzk8NnzopzU2n3kftEZU1HWn7zHTgJb1zeH8dNGKEeW6K2ZK",
  "key32": "nHwGwo2DYoU92oCtDGvfLKSHhXksampSfsMqJXgcXAL8pThHCSB4ESJRYhj6meB2pv4peb6oP4JGAFmMsCEwJHz",
  "key33": "4HLiZGMcMP3VS47eXVgDC6CPa6kVuni3YwQSLDyhfyamha5uoLvUHBznP9h5bjzNwDcixzvPniV12jLSYuSCfWpm",
  "key34": "4Fj7729ADWZTBWuLoqsKsrzLPFC4vZPoXGMhzgrWinKmLv7zATHtrgeaz9QeDaYoJ2VcnBA7ohqheG4DXA98YLz9",
  "key35": "3yYb1CRYDQCabzUh1WBKvacL6n8q2U19eC7yCDhvo3jXcq3pp4erqxb9xNCP8Gdqx6PbzX2NWBLopHKeykG8o5PJ",
  "key36": "5fcSyWfYnCiTWQNAjiscZju1ePQ8AYMsyND442gH8XzhTAWQ4zyAA6kNpcNR3oaaoG5aNV197AU8UDkmvJ8f2UjE",
  "key37": "36UJmnTsFNrXNrgy8KLhPd9q5MBpDAAZC5sF3yVDVTdSpPQrT2EsC6DDHTuRdaEJY4PNvvtxaBWQNSdDNF85z97a",
  "key38": "5HB29oEitUVk3CcqUakV244xQ9UM8Lw2LnFe1ccxC8ZoUiHoZD21Zrj1ayDuyM6W1uzs222h5nJLXTZ92UG6ffYS",
  "key39": "4ZJy7xjSFW9nGqLEyJgPY8EPZWGGtBQrqESLSauYQ2XmNQFjtpfnvETL3CEj3wPwPMR3X8Em6cmXo3QpvNRQUYfr",
  "key40": "5cH73WhqfM5XbD5HYMST446Z5U9Ga6f8vYDgXzD2Y2SncJGTK9u4KQLiq8Vy4HejBVwZQp1TN91hP5HXQGPtVLLg",
  "key41": "3hh5k8AkX3JQ1hVkpSoZ1SxZevex36uh9KrrSFXHEa879KQFfBWbDmyi6rrsoG6VsS3DrZqyawRLMXx3XcjBfRfF",
  "key42": "PjVpraGnrcbyR3TFRjJqKHsnLDF4EdCxUBQwqfcAfKifcPhhyziW2YTatLyNmr6utAtom8u8pQGHBvgiQz9pcT8",
  "key43": "BoUiEzxHpzbY1f9snnZvcNwpCixsd8pxo1Fq9zmrp7MET8sSJQNTFp27KohT8uydQ8hLrb1dAqeLHwuyi4vsX3G",
  "key44": "5AdRnoDt526T95EVm3Ju3vTcVqpoaYZzVFUmS7pGJtXLdz4ueJBaDp8g3YmNVD1ykwhE7SXx8AtZbiiJMxXnUu2K",
  "key45": "49ucUdvi54LJAG1CpN35FGWAkLbzM68D8xqWbijgrnn9QJBB3UTdAdY2JW9YrGvxj5z395CqYku3XiAEoaxGAdcR"
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
