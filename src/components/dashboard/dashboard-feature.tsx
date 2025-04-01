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
    "3UULhJXbS6Aw4CXUq3HGNxdv29bD5PHiMaGps425zAP3uTeaGGfLFFyvq1aP9DtmP81ax3KgBBUnxemZDqLJYgiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57kvHqzMgqJW4V8ZCXcVmuhDzQBqVXvF4Xmstxf8PvZzqwqMzHb71z6uL2ZwWiH8CDLXDNGeqnU8iFfH4wRAeCJL",
  "key1": "4Mh4GQEKeCqhyaA2QJYzAwUSrQbZ8xFsuz5AfJh8op1SH4pKaqKZiMCThuHW2aWuMw7FBRsccUkugEgSCjs5JdTW",
  "key2": "34MGTvo7nvi4pPWgjHUMWnLGNeJpGsvmtdCrBR2wtEL8MmGrt32E1CWx4j1aY3NVMgdFsyCbTMqiYV6TtYYe5iKn",
  "key3": "3j7Hde13CqD2DNtR4dRU58zb27Cp8W5QscCK6XZyFBbY3yXZh5GYEwkUHxCLih8ejsgH5kDDwkKAVeHfbFi8jqe6",
  "key4": "b95vT9AQyvUGaRZGMibS2JmWXYPZPyzUW4QxEUsfZaEsQvPCbwrWYEZuHndopnn7ooK2uozYz87uwLQv9k45t8o",
  "key5": "5CVtyK1Lc2kGX7Uxxim97GKrYxMK2oWpa1Me2zmLKWJK6XwFZmV6LcdLU9AmYEwXBHBDrWVYrkXBAdJx2prBro7N",
  "key6": "4NPVSUKjj9X3uUiRAvv6T6xdQWPiJJgVyAaGQV5DZyLGqgtKs6rhZxT3vq19hhTS6ingEq4yZy8CZaaRuGzQTZzS",
  "key7": "41cci2ccJdffZtxN2RYYnaXPs132GkDaVgUiJV81SBen5WWUxxLZA2XZKWZX651C9Ta5kLqc6hEP5Kj8WJc36iNV",
  "key8": "23KYrw1UrLFQpRQmPapU2w5LH1BMetK6F9gA9w731my6wrvLgnUk1jQM9VDU6hZ8oWd94AqvXTzTsy2yatDCVYvh",
  "key9": "VizPg54Juxxb89hc5g7tZFLvr9Z1dYbFYmC3GXTxKn9fnyWT1ufpmSDgBDjtX478wdRjV9xNPiRrFcBHyz7eeB3",
  "key10": "rx9VLAXPX9qpGci6ad4kAnuh2zuFtTG7eFnTQQKSY1qqWwaatEFtDw49AcpVdap3fMmZWEeDB7oXjXxy3xxLoHh",
  "key11": "3j3G8RTNi7nndJ7UoucgxdfCfMMHV86bZ8xJAgaYjYCZQhXrzPVaeKay7oKVJEnsktfwrfxJYEn9bPErs1fGtoCk",
  "key12": "5gPCxw6abC5zpEKQBvxgiEJPunv1zMvd9RcuQmVtV4RqRbt8VFhUXLJo18hMwE4REcAKR5nHgwJiL1P2TeViTPCS",
  "key13": "62PAN8SGdN1kPfVFTeDV6ZFsANeTGXXaGA8VbjhBM5L97bSCsc8qghAa5xFFvocjfKW1SnDFehyPHmrkcAD44UUf",
  "key14": "3jwtve1RBWWaBxp6jV9N2PnZSvVKA6L369QbPpZsEaDDdxj75stQotzbYncSbFMctDQKYaWvnmW92kPk5KNYVC2F",
  "key15": "2hwAsJjUa89kxvjYBNteuvujJ5AaueCMMrxUpW5ZLwMqQez8wLiDL5WxAM3sGWWnpWGtkfiWY5qpU3a5pDbLVNua",
  "key16": "FE8ajWrrUWRSquBB1tRZxfjNtyLbNoRPMon2gyaH79YAUdbjBxFMnUTAvENnegdDRuirrU56xaYvCQzS3RS6HX8",
  "key17": "39AY4RxSu19bYmdMMyauAF72TxqPWDT4Rdd9dabTUQFHoXFc9NVqdNBkhBJypKuWqLkttVFrjV94bBjKeefEd6vh",
  "key18": "5ahDv8PeRRewTM3LmK3MqDcfKMoJmY4RU8tG17TRvdZ83NZzQNgjtz8g7um4BJva2Lh6M2qyyMNmB512Yu58d7RK",
  "key19": "5LivTTfvvQkBtgsjYbZMAbi35ZPgpxLNChr8fUX58Ge1TrKMJsL6AM97chyaDqNfpwS5coXeKBn6dcSGTtfbaALf",
  "key20": "2EyeTTHud6GD2Ts5XqtvDWkfPAPauUKL8T5e7ErZUva78DtsfcxPMDE3h1exMoyzADWAmuHK282zsefGXQdWBS3K",
  "key21": "4H2KTXDrdNxy3hxinr9uMaqrxK4Mqu7LdZqSW2WUziScs56vS9BEgzMB97M7oU77KksnVe2f1dA8D1XvxA4LvkQJ",
  "key22": "gRtKB9gobVdJXrW5MWL2yN7cWAn5Y1intHVHRWwGy9TEpSUvYqkef88XBb3WZazqetDMsesVJAn1835JTotrGRV",
  "key23": "4mkyzsfaBcB8cU91H73Zjqy3uF9YaFbHTzqhMNHspxvWTr8UeVsH8tg5Cr4exMmhRxMycRZS65tjfrdsxm9qQ4Zc",
  "key24": "5BLJxJ4KfvWg45k2npRnqD2Myr5CL3k1CjcpXn4x7R3WJjaeU7sZuwZsQDoAVPELX7vWA6H51pmq6TkpyFrnZscp",
  "key25": "5UYHPoq2BCpBRGgaUc1hNuhA95b1E9EYaxjLLWoBWugHHF5LaT9HZp8eXyMfYYMZXd6KLGXJQU8zaX6QaRxaS1PG",
  "key26": "pTRqSEX2ebowccMesyP37QJjkh9rsAJ1BXQRJea3mNLUmB6jHC27ASgSxW3Fv7MAhs7NA9VEuPxTL3tcC77zFb6",
  "key27": "5nsmDHGkxpwKd6Y3Qq8YhNejQCEEUw4jX9NaiHbZnYnkYbfQWHk5aGaPyvAJHPgY9HUBk6TwtdHNnSHMCsfudtWj",
  "key28": "5pr2u8AuTGsnLYY1QVX43EiqmjLZWbCdGJbDTMdooxqxGDKTVb4VAS9AyjddbabvfoycsAgq15mVR6GBfP16Z6y7",
  "key29": "44Da35nkeUAVKtDSZHBHgSBZG17XhvAVqfAAyEcbQbmHNPNsjQuUFDaSn2dmHdGP5T9KLNrJdgpCTRsnbkyGEZWN",
  "key30": "3oZXHZmpo5ccMWVmYkVvae6R9EHJz8T3kC1mfEjpcEm9kCLYoyrQWfTg6e8bmWPfXtmV4keE3pH6N1g68zfzCeJ7",
  "key31": "3C1zT4ydNeNzuvfUoSbHanwHHCZcjZhcvnW3EjEdNuxipZ554nG3Myg4RZ4Nu9E5yoe4ugpwByUenGyARWvjcYWg",
  "key32": "3MBX46aXUtccGMjpiTU9oyNqDNu9WUooGofg2nmZ841eksM9Uiv8AztvHT8BTmQxhDkq7voP4nd58gY51eYq6P9L",
  "key33": "2rVJwMETYF8PWBqQvVumREmLtKTvkMzfVNHuKeyNbBwLhCwWagARbvt7Mov7sfuJAikoEtvCFDYPceuRpPL2mng1",
  "key34": "FMC57cLqetagLKV1cFUS6tctB1AeSH1ody13EwgSdQBhGnnpEtLraL9XXZbiQLDaBA7gWmp44d8gR7qpMhK3ZmD",
  "key35": "3hNEsHpyYxsgrBZFxaQZkHye3uJoQrL3s8oZC5xChCBugNP1qNRYf63RNmu4EMM4v6KG3B5VNRJLq1aXKEgCNk5B",
  "key36": "42qGknHgNiN5L7t2uo2LSa7WtxYmyJxT8c6joqgUxcryg2hKWFsEdTBAGRu56DFJNo5ezj6jpMTv34Rp1w1KQJMy",
  "key37": "3kTfVUM5d7TWFccZoNi83eKbGNREQ2RYwrTdUkMTGrYjaCjL3PRRKFApHNWvcZTkbZd4uoTvcrW8f3nAqt3CeEhT",
  "key38": "wJJy5QeZFF8QJJXixRQJYQU5asTyFFEcxygDahCZiBER4PciQHekdT2EjJUtd9892iJEPTKo77PZNzaEZ9WUUn7",
  "key39": "svq3ETrN8Jn93VUDUpFfVFi5iH41K3b1hxSgrmKtmPAFyZzotJjJ9d9ZV3rk5JUvyCi4L26v6gwDzmvUJxTpx5a",
  "key40": "twAT9AFgZ9F1tg78nrSJBAtvkvoi8Cjs4piXLWvaqkB6ugjYt9YRrVjkS3sCtGUHMK3NWtHyASdEPJb8WPJ3Srm",
  "key41": "bJJ5BA9hkZDWRB6fbNnSsnrRAmYcymY6VghZVJykWSEESBrqGki8fStWxB6XPiuLmVMK4mihQhuQAnW2iEHEK2L",
  "key42": "5665QNRv7w1g3V7bebXUpktT33GhhR9f6giRR7FjGcQtVMabDQYUeWNHwdL6vCgrQTWtrZ8S9bGHAhs524Uy5iWv",
  "key43": "5Re5nZTBMvPPC6XqozzuzpJ3f9JtkvXH8aoKDgkbKL8FbZoaVNpvFBm81pTdyy6mSBcZt63UzKf7kc1PLDuSpBK",
  "key44": "5V7Jtz7vRPAB5tiMTqwyVpbWqypTboFm2doezgYyeALmsGPridxUDpqD4zCuN9UdVXSABs99cLbyAWydxhWjZL1P",
  "key45": "q6Mhj4HaTF82vEBECLjGq693uuxxj8aE37wvC3Pk3zgHoWb9xPwKAfhfXcHHZCVXrobxtCEyeCKffk4VkSDWeUH",
  "key46": "2x7kzVtvmf3eqYmbG2LssTqja8eGWJBvswUF1Qdg7vSt8hejA3bBgMqTCDMND4S7L7aKRwezaWbtH4EPQPJSgbZ1"
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
