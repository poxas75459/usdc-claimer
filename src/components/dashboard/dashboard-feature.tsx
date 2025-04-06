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
    "4Mo2WTtmoJuEbbmRk9eu11df8bPtjBAvV24nqxEf7KjjT1re4Kkk7FHspJfK6rZYKw4tEckZPmg5mVu44EpEDiQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SiYjhpLQQGdME4AjMDZXLzTboouH5zsDMveScDpG3xhA26KYb9gmwbcB6UDWnfAWottbfcUYMWETQBXV21QQp5m",
  "key1": "3DgqXRUE5Bfjmf5giRmDTmowVoLGojqzKfaV1pd7d9uffCAbgUL2gjQdsfFxC3Es8r2F4ng1ZeS3vSks5KVd2sAA",
  "key2": "uwWmiQJz3GsfWiLRLCR5gMy2eqY5cbhXbm2TwfH7x1iNHjRXiJsFBdWjcxk3gFNDtNaU2LfDfG41Pjvt1inug5W",
  "key3": "apUmsTnu5s4Q9yHjDAWVpYgMUCoXdkLv72j1qddP51xfyVqfD2j9vpn6sJunJ77X79g3GqFgDtDnK31YzqsFxEP",
  "key4": "2Ta5zjPVvsrhsmHkTczVWGwgSWnmX6iwuPUhbQG8Xk7pks1dbueUsmPA6UotZ2epVZH1ypBLNo2w129sz47k7RJq",
  "key5": "3s4c46qZn9ci6ubZfC7uerV9LbXq7GDCJF6d4tSWxAekJvt9xyrdH5yqWC4b1nuUvUeYwPrFz47TcLG4U592t1qL",
  "key6": "GT9gru46PLja6kRvdSwPNGUbjwwPXnoQ8cVQmknDo6cYhmSFyYRQCC8FJUHkhSyBFhq2MJ1UdQ2ysUT8pkp1t7J",
  "key7": "3CEBph3etmbLTn4aoRUUC3JYqbug2CmPqS94b696ULnG5kmCHZNJeGWxqgpP5mCN8nAxrxDb1fRQtRZw4sW1as3d",
  "key8": "2jcT9HYvX4Nhe9sKENvnE3H3pof1ZnZSB2AUr6Wqtp6k36K2RkbjgiFBAueWYuWuuoBu3nkFiqcBm46nXr2G2Nxt",
  "key9": "5nJQxeSFThEKWVScmVxX3mRSViTEihm66B3WkzY3jRhFMNeioVrgaCVAiWX5ebJ2cnv3sFvibJvtVfckG253DPwe",
  "key10": "2iBKKD58tSssGrvsjZUvV2fGGunZNfkyUMXGCAxhyj8BtakByLUhroZk9rq3h9x7xyCdW9ygMekTu5kxTqZtUhFt",
  "key11": "GmYi6f56VseH7khsGhig18WWNnaeBn4URsjovw49kwKnQvx8P1yC148jo791kNhL73TjiHFyK17NqMj54vaz1GL",
  "key12": "5nQArzbSED9xce7RgeHqhN6y6RVqYdfSRysh7rqR9kCzsGzgcNLzt3Vdbeg4DeXNgfw5vGNS3D9yyMPPqT4QfatS",
  "key13": "5dHD46m97PTzz76ZUh8EVy2H4LwrBTvw7EALvLM1YLd6ZVzUYbCSqFxgD4EM8i5pqHxzsGwPbgpUQSCUwXoJgPnm",
  "key14": "2Gt1w8Bc4iDgyWxWeDyvMLMsdRDs38q6eQrV7pYtN3zZdJu1dyRnc1ieuFnrkAcxsnF1XMU9HPWecUDoLFSfuGP",
  "key15": "ap2yBDu39WdqhkfVs6zqzXY1dJ3tawASm8r9j5Au6sfwz2ZFyQKvGc6D2rnL9GkTgWrsEMRNrcWEg1M9hXn5hNX",
  "key16": "25nzV1K67JbRWPRFRUYDKDV6SFgkauvkm7aopfcrKehANeQrLiggZQBJX1ngEQdv9zkx9St1MjAEnBgM4nKPUajn",
  "key17": "2fcy8ptLqrwxJTSq4WVhJ6Bas5eBYmWGsVit9Q93MrqNUyU2oQcugimVjiQkC8zVFRVPz2YB69Aq5f37WUBC6mTU",
  "key18": "3gE7sUiGohsDdzntZgbb98jwJiv5pndgGHKbMUzW4sYvBBJJBjABp2B4gsCuBhVAba79ox9kURjLFEa9uYZshASG",
  "key19": "3Bwn2vhodTdRQDgw8LxtcPLHgQc6evNTmBvy6YVUjX7p8WVqrCDifyNepe9tmkvQdrzWuoEjvDhzcURu6yYjVChp",
  "key20": "5Xkz7ZRPpQnC1p28qnQ1J7rVmJCnkUxqB7TwUu2tcgej7UpTkGE4KUzgaBi7GVFA13Rw1ug27FNRRcD28ASVG9bJ",
  "key21": "5MQvp8ocjEsufXBwBZBKqPk5gMdFaDV34tr9nYDHSNTWNVba1wn3HjzFYLr4ZHRDvPhAADVhuzznyqrKCFfuLKv2",
  "key22": "2X7gacMyDxKTHRCJD6xpDyJ55zFi5YGxzsmhhsH7Pq3EkoyheLioTdbRiGJyi5Q8rkPoB9RK9ugGhQitAQcvKYcP",
  "key23": "5cMafGyVVARXMuU7EyTQrVpZ7hzgF32xNPBRcdpy7uvcq5HAT9zmZ74Cf55Bb6QTNxBiRmuxR77ajBzVvMfChw8D",
  "key24": "4RatwdUQ9dEaEJuwsL6iuhKWBtf9xyj5NX7n78T5PxMBRxSMadawjjQ4pH4eTVpMsnkzioXP1J7vYjYyCnKhoiER",
  "key25": "G6Fu8H64oWEqYeGB1zRsmmDY1Zqi9u6KRDLhXygh7hNCLYuNjS18PDT2Zf3yZywLuu7X9BsucCNfFKJqDiFPurd",
  "key26": "2yMToreqJknvNeS6CBq5oCkcMgC28c6ESdbpwSwecxRMMyWSFa1yLQs3SYs5Pf7vhsRKnm8d438Nh17tAJddedv8",
  "key27": "5tcQjBTCXKa9mrHbkr3yR5ahzNgGv2s42Jw8UT4Una9GvEpzBMJLtW6JNdDSG8iRQYit5U27wtAivgEHDD24bJw7",
  "key28": "iQrfr7HDM79JJzpAe59bhN1mG14wxE7dVcsbC7okP3Gw9MwiB58nkEVCExaQ2gkoTSUQj9y4j2xkmeTUBynddSq",
  "key29": "4DyUCLybkVwqd2xdDnpcnHgRxPgiiDqcpL8AJgXbqYAoz2pndNn9B3kNvVhPbAUELtmMZFiTEfsnjZhX7wG8rRhf",
  "key30": "4WsFEYhxedZA4aGtqt4duxke6LBgNiFuZ8Dbw9rUwDo5sU8jCJufmRwvra7fQSvTbo91Q35a26JtxZPfQGU3MZWY",
  "key31": "5hdCRoK32LuKzHXSxFQKhsEAqKzxKZFgCZP5D4peKweX2wg9BKry3YogKP3MSwyzZfzma93iikKEgPovqwpymjo4",
  "key32": "4Ge4qpCQk8LNMp1gvHnjYangKq55BbuncWHU21bdKDEXjDDFJUHp6jfpZAykawjsARGb441JGaZ9sEvKzsGjo5iJ",
  "key33": "TEFx4UN76bUtB6PqkbMzfqau5WMkr1duCWmv2CioLUyLzaSR15HPkbdgE2g6QRQApkRvhutKKUW12yUAPWZARvq",
  "key34": "5EqihkAYuzf6m5cfc3SZ6bYrpYHHxYbApc8YANs36aTp54AHxffnTMZn8z7nrFg8NnH7dNungyhyapQR4j8fcTAK",
  "key35": "5976cw2j3jJyoc3kzkAcKXqK89MMHM2nyHjPiJbSDbGYxo1SPiNA86Ng9CdEy45CNav9fkub24Qf6dTjy6T8hgX9",
  "key36": "4bFabvQJUb4Hm6s3GdrAk5kD3wQxZkngH5jCN4TgVLnkNKC3Hq2atbaLn3PcNwoELd3sZuNV1uwmS7gjUAmbW3sj",
  "key37": "4Pwf8MWQ41wBW7qDijJFEUp4uGGGNsShDocyqTkYiBbMkYcxH7Y1ioLVEz3bi8T23inJzsBpV2fk1WUN1E7Uwzep",
  "key38": "3zGGFU9B4rDNdZYpJ1TtpsdL6GoxyvDtMfyvCioVGSBU7XMKGFbL55W9idummMykwXYMMG4hfUu5yq69SzpLUj7C",
  "key39": "3Kui1eFhzMWo63UsQ8kNDSbCLKfcMyuah6k46nAJZEUEGHiTmd4vWuiCUZ53AyrhC97AuVNNqdUNk96HtkC8qJqb",
  "key40": "2k9a8nChFa93xxXRoUzusyy2x98Ug1rGVWoCqo2415umFkvjs4FLToSx7e4bBarXcvtAXjNEnBt3cgf3s9AmhQMD",
  "key41": "5Hk1XNhBXVTXeWvBUfcqegMvY85FHt6Y5Yt2LT8TtFpeqQJSTjUt2s79pNCaUyAhB1xo7F3aWUDzBB1duToT3Mpc",
  "key42": "ngSeLeRcXc7cXBzEJxCVapYNyYvX4uhSjm5Ys17ntPE7KVq97hA8JqLMzN9iPYLczDwZNLcrLoqRhm3i5T71gmp",
  "key43": "AMqyQarrnCrZRDPnuoRvPLj5ixkxT8wSFAooM8ajGZUouyQYmqEFhAZxEk5bz1HLQDRjnJJhFY3EJMmk5BesXZd",
  "key44": "5i7cmCKsTTBxoedk57mNffvmP5ij21a6eSVRPWPDWBCGJhw73tWJ5GL8tTUnxiycbzqTFJu5BtwXrD9RBdkRmw6w",
  "key45": "5mitmK1qgmdTcfgTLCX2Z6zM2av5mLEPVSt9CkuPE9657SmUjJkpWnCdXTZdPvCaGjXXTyT3yzSfjvrLdYCZGJF5",
  "key46": "hEFoP6Ew89vL7pcPNjA3ZQ3U8iGZiGPLbzNeDx1DfUqAbQSJCtB5k4PhxFuJFVN9UteC3N3HNuBjo8zTFNHvE4e",
  "key47": "5s2dPufKTXav35b5bXQbnpE4zRWD1GjnhvpXFx55rui52D9fNGwBT9p3fosJ5YTCqymP2kWk34SMpxVSrbQTnEvz",
  "key48": "4z9K7n6Bh3Ec3pzCptUvcAkaHpszvfqTEwXNGtCvHMa7dgUDfziKbyqpEU73aHyPjKFZ5pJib6jydXGKvRZo57Wm"
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
