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
    "4QgiTUaBj3DvvVzwqpuq6oxgu3agz4i2nEdhBbu7XS27fRmiLv9PwkkakG2AFib6pYXnRribXNwr6dhvaPAgiiMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CrvDCBFwTRb3WvtMrvyxnFb2DebgYcrXzTK84CswkmYCWK2tSMncDipg8io5xsuuz8me25qxAnWB91cqDbLuDDW",
  "key1": "2BNY5fRMs2FAZz5Nbhoon1txMb2fVc34zGv8bRQQfMaRZBAxgSSiJB8DwKKFkKknVeMpEJzAqoqt7Mc7uaodeanb",
  "key2": "3pPjpPf6nuUXPCHL5c7HYGzUbLaCAW9YfyAzRjXrfy7QcrsmdQRp4Cua9op2r35zoBWeAXy62adPyVVAk7wEHpRU",
  "key3": "48geBihG7Duf3UjzMXiRfDkembBErmoBX8yfV9k5sqyNi9Phci9it2APV1weswjQSXdwBHKRsoT6axnhjg32224d",
  "key4": "5BUUaxC9Xs7NkqykuKeZG8QknwcV6J4WobnNL8xezeF3smhoJiwpK2jNrfAX2aGZnCSYihWFSdQGB9tAmYE4pp93",
  "key5": "J8n9978bdaYhRnr1gz3StajJDLDy7K2Q71TTrfPad5yzMxQLdFm5PS63nrvzMRmmGxeMMLUrdRkmWv25tZBQHxB",
  "key6": "2d2UUMFsCmEZJK6SfSBTMpLB1u8dywbYLRoxgccVrBhcVQdmPG64REBQYgXX8uJphNsGvD2CLMm8kSfcq7pbXoxk",
  "key7": "5DFkH2iutNLAZhKkyGDdv6bS51vK5m7awYxZaehPeMQHGPD9VQJwQPC5UK4LrKmtAk4FGjQv9eTCuDJjnmjJHHgW",
  "key8": "4cJzcSofDQf2Bhv46kQs2xQvmVtxsUiuHttTiKSw72fyERkBF2zh55HFLw7HF7dGe7SYmBFZQeg8sg2i4wovifrQ",
  "key9": "5SdosnUpU1xx8gAiuMiihD1bKRKFyQX29xkkGNXFheok1UQAoEf4nRFyGkdwmc1QDuQ437ECs9dmHQ7auXWnx26B",
  "key10": "3DNCrew9fUKn1kbDBf5v33FmHt9atnQH8eCKMtGCEK9SrGP2NyukpoofQbPbksqumJA6fXPVgCiJmh99j3971p1c",
  "key11": "444BfjKcRhJzqwcTn8heS3RnjWaDuaPoMR8TyG83iJfoczJFKJuyNM5XJXe9Yc9t5R69zPMysMLX8XFdsYH8XHka",
  "key12": "4wM5vadQzECZHHXouyszvH1dtzzKCTxEFubSJpf96mTbEiAr4YsJKpCe338CjywFNDHar1YGacXdoZq286UosM2z",
  "key13": "N9dBjeoCBsrySoZmH9fvMFMvkD354Ye5x9BKUtFk2PywKbswiXcKnw9PT2QZhHrhk7A2rq8XrRg15SUmfr3tHzv",
  "key14": "4SKjBcsh1VeWVjAQrJRAwpaunf57yW2sp771NKj6zdkNykmHdHZPKePaQuQDDz5fX41JLrSuEBwnY8m1EBvzmSqS",
  "key15": "5gG8DiEBr4shCAgS6Hor7CyYxdg3g4QGmNXN3SkkttXcBFvfbh7cFS31rznZ6KSFycxGS8C49WFYRu1KmJ72yWEh",
  "key16": "3SCWt5PCXLjpk5JYBHfH1vnzmyEY7zZBFSwuPr2ZJwvUFWiH29SquHztSqc8ZRcqoJLcGWyZ6Ut3gFtdonzGbpG7",
  "key17": "2rkNhcwUqvFvD551GksjeVYVkRbZ6kt3KAdoxCHhi6yaRwqNRrSsgZmQsgm1878qQ3dBBb8DA7jqkfUjEfqoqwJZ",
  "key18": "mueTpF2YrhmGPu3Gx8XHvsPpitb93gb4NRJfBVWt6Y7GebMdGw7JoPP41eXdsgQR8PbrSfZbCtPVHLh29Cq43mT",
  "key19": "5BBgVTPGw4ReMTqmjdzxKp3vQmFaZXTYgYvjBDAC8ZpJpsHvPVU2e4NHfh4g8nU2BR27r7DeJXjfzUucXzAAY17j",
  "key20": "2pn2KcgfemaKfgLeH3ooKcLT7UhkBhFWMMTqtncxDZniz7HGWgo14ZpMYncnwjy6dRkMhs2J6Z2GimreVsMAvVsB",
  "key21": "azAbRAAoskrr7B8cVJDYaufdvHgsQqtytK9bz2sBccRnufdjLnq2zJxzamj4i4UhJvAQ8nEumMYpLgCTqw4Sxw3",
  "key22": "5MVWRadfB4EpvB4itxDTop3HStqhSR6qkqsUnyA7SNjd7gtxHQrhRF4brMZJJJvm8jDByAj93tNEB4bRX1hzEGoV",
  "key23": "Ts4GNPNppQAZDuDFwH8dNx3dy3MjS9QARsVx7ouLcGDPdbrEtyrvEiE3aiArvt9tByQapMip75fmdZRZCzdz9Bc",
  "key24": "4HHcqDdVzdnAc4pKBbDwhd1pT1wCV2ELyMrV5CV3vjjnu42TiQS4uVwJX1uB97bGZX7SdAsgXTwrFWKnfbVpucvE",
  "key25": "3akRb4M2N2QjYmqELUgn63MHu7aYdUagUXyprLp8VN2uj1x7U2T92CR3LDPgCqWkPwvY2hVfg1Yib6fDbW311EaE",
  "key26": "2jMAzS5htpM7vFp9BLc35soGL2Xr463MiVntPMWNBXU7zSf334Dn3JJbbkSQ8h4J8bDiJHTpuZMpV7AtTxS2peRV",
  "key27": "tKeuekKFMvSesGoi1qUyiSASn4wDHwM9K9Cs3xVDgFjPBPzVfzuJDeDBWz3hwGxdSdsSjPvkkLLeLv72h7iGZ7N",
  "key28": "5CALz5LbbEgqFYifVirw3t6qFSGKryvPw466oX9jukKsLRxtMgF71kiMjjFxERNRvxzB6V5ASZnQ23bPztbwK4sF",
  "key29": "PVaZ4uK28Zbki7czuHE99Dcm8zdnye7fejzpYaALTbC8quBGfDhyLfX7GjRhootZ12UTiQtu7HPBAevEBwYJwv3",
  "key30": "5hFLKZoK3kERx6GDq6ctnMgkMAHduRfgVnw8yV2RppdwpRtKVung6o8FmezTQ7YGx7iX4tpFsGeG7Y7kqsEs7czg",
  "key31": "3dtHEt5pZcMQQKkUjTx5yrPbVYgPDTspeidjw3yib4eajeVdcqfg75yLTT6HMzwjVkPhZWx8bBHkrAVsDsusdaF1",
  "key32": "5MuRxoLLv7xHD4dzLZNb9sQLHXyrcbpsj9bAwrue7yL51GaxAbVM2mNqAs9KwpA2jEGM4tx8QvARzCFynSbqppZq",
  "key33": "5uDCAuNLo9RZcj3QMzkKpAiYmDW6a2grELQu8GQD5zdVv36VeivtA2QxJqe623YysjxT83VXerzDVEpEmsHqj3TU",
  "key34": "5nYbn1Mrvegtyw7ZtEk4UbuSG4zG43BWuNhiVUqLqP5WxT5ErDUg86xCaeaCJGkynKS5E76NU2xLSJtCwsSGQEKF",
  "key35": "4BXGcAnmHoMxfYUNNFAHLw2ZyD1ff1VMnPNkkDhb5HaqM5STL2iTy2bcjgEiPLANcC5seioXGLNQqyxu56Jbbypy",
  "key36": "3bTs3UKdJGfBatD8nkd5FJLsHQLQ9ZPKoyhzYFDnbS4LyMTsE8puDnaJq4Amuy7xfeNKdegKr3YzLLdcTYckyb8",
  "key37": "FkofGf2eRtHdkJt5CgsE95qnLepR1fnhzqxW7pSGqyn6S3PbvftqkCQd1AaG2EHarKYdrKpNG7E5pQgiyZ1SPVk",
  "key38": "29TGZyTTCNf8KRx18PA1tQKCxquYugDvn9P4N9qDTYGHAPe1exSpey16m9NcxMYyLn3D4xS5zS2uWyUDqKf99r3i",
  "key39": "azkUyuRzKzb653sYbcf7wbCbN2eYYapig6xWUzmbHRDcqv88Fn257dvcASAhUvw2CTDYSHHM1JRWwMR4LJJLMr8",
  "key40": "ap5AHB5EN81WDCaGqVUkKa9oREQmNvgKa9aVUHcMpr6TFVoVpp4pE7gSUDwjNMEuReTHhbtaWk2qzbzAuyqhdeq",
  "key41": "waQB3iYrVikGhrvhqRPvtU7FTJxDsUY9M5JutpDbATW9epT16dAq9PKqfyuguVsKcezDJswPkcsoa3SZKwmC8u3",
  "key42": "63ADoH5fvf1KAhDYcJZ9iGkPM4yqrrg7R64NJqNv8NbHZkM3dgBvpzAdX4M5HUBKMH2M6UQKJCu6o1J5yB8kPqHE",
  "key43": "62PM3KK5CEV9Esj62Y1tB6ED1caqaiuA4hyPxfZUCeeuMZnu1TdursyqXxjbtF4XXXWqd39c8bYrCKXdcHdmKetd",
  "key44": "4yySU1rcgU246c2yAaf3nxeXRBmYaVTGV4arLFCyQGgpcBTvyrkUDzDGXE9FZEBUDH6M9akvPNf97BQ2k6iKQ61f",
  "key45": "2j9s2G4zRQQSyhzEchc4Wr9YmtBqQxGEjdrcsD689JSxWFKuf7btz1svRGM4bEHGCKgU8bKbuRosmbknxydfZqVT",
  "key46": "BSAyirDpHt5i2bbxREmjjnbi2176oyqn4jKG8vVL2NnZWyoNBpc9ux5n68uP6Qvwtx14bAvuXg1a3pvJCwRJW9T",
  "key47": "2cVfBd8QZam3UKDumBFrrQtJ1uEFiEpmZsy2gnnvm6MpCHXz7YeHg716vu4B5Jd7CV8G36MFvaorEadF3Rwbxp3w"
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
