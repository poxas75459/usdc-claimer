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
    "43PUemZn6eDV9ZeaiGc3kTF37v5p3Jx7Md5q38yjAvrAkY582kCaHRCede6EipU6nyZLkgLxA8uuwxpcmWWSVPvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E8Yg3RQDX74L97Vfbg1n5yHPqJNeATsRVgfdtJ7uRgqNRU4zGyiJe5WrUJu92XQny6U6qn8wSjcz4N525vPLrZ4",
  "key1": "51ZUwkXTnCyUUBzbJwtcSwiXS4e8L2iHBxt37YuHPAtN7moKjRef3hkCNfmpXba4PAJVKFF25BR1Zqf2F68ZEGwS",
  "key2": "4BmaxkY7QLBHg6RbvzQL19H6CrM27Ef3zEL8gJGMbQjeZeTNTpxcZ4XsvqN5HRFj27A5WnaKL1Wh2fKr9mdCVaGZ",
  "key3": "4QxvQoWhJgpMzm4PCHstF6umnJPy5R4yUqkT1qDZGq8AnBCX5TxvPNZfe9NU8UEtdnhHGvnFCZzpff46AcVEGqu6",
  "key4": "5A6aboGZdCe9QrsYdGNTAiE1kJ3S3YTqnht8viVK6WCREw8Vzji4ME2sDogUn5GDkko1C5Mya8QysR4XDY7jzM55",
  "key5": "59yKYZnoA1MtVLjyd8X3NiSbT1mbmghxszAhn8NbNQY2xD1UYQvEeLZxc7jJ9zX4HPhEvsUsgwD9VrBPdY32AB3q",
  "key6": "4z6aizmjJTy22qcztirYduGBFxZGq55cZ2nwbrbSCyRT181RN7b346CDRaCkSkzcndZWV7rTbrCKQCRVF343CciC",
  "key7": "4q8oRMnoAsxi58JatxryWEtWTAGwB1V7uFapF8Gsew965iA1x4T5VaURu7hk7pbBLzD7ya3uQhsujgK2kQDcYody",
  "key8": "jhdWMgj1UitmUVmTNSKnf4c8LvUqsvcBwipWjxBnAGsvxLYFtZzxGcdnHW9J3TRzdMLZGZtMVi8gHxKkVbPQAJn",
  "key9": "4uyjdkv1cw9JckFzUzdmRZdPNLELxD6Jdb7XtxuM4Nhrkb9XVXuBJovCpKkj7zVJmqqbKe3nc6r5nBw1k4qtybwR",
  "key10": "pXzj2faESpWEyAn5rm918DVMfnRWiYAa1Zgt17Q476LL68FpHFwkyzg3naSQD4mcWmwZV6wGFurRqoHL2taNCgY",
  "key11": "pNKEBTkuLUJiFywN91oNRihCowSfijjZ1dS7CwMmtNYCCEvTZSRvFXyxQgqZWMfRVrSupVjpM7Tw1BZYyrzdjmd",
  "key12": "4kfKwrrud9ycUvjLBs8MV9nJ1KkErgV18UeQHVNpJo8JGvtfimyocyxL6eHAZYNQebEU7sTwNxrMa4YUHRkvphXm",
  "key13": "3qAEYuFXHgq7yfLx6hj6H7ZTCxXXqDpDAKNEyWsUvcZw3YHAVBS76UyS5D6xm2c7kdhtBgVYaBeUo5tAQcSfALPL",
  "key14": "3hEWpkBzNwssHnu4a68KPh23RUf1aaQuFunXhfY9DfeFY31bw5Z9WDp3ezxWEbJwi3hU1wJ87tvVL54zVDAcyaEB",
  "key15": "2V5J6TuQv82a8mps2kHWuDrAVUHdR3EP6JwK94sLb5iX9jWoea6xKETwMuK2SgDoThwqi5Syk4TxjXJgAUm4WeBg",
  "key16": "2Xz2SvDzadebXPhbQNrPPqHUYE2vHvfHoVbtZBVFNuKarERbVNNXFQMFaXQ7qd7thBcEr5nwEdqb5EFvkwHAQuy",
  "key17": "osWebFoE7WtbQe6RafuuHRVsRwfUTTjfmhYJoBtiU4zzU9RYTvZJdmj2WNddDQxgZYCbAycqtjv4KPFPUvxF4yK",
  "key18": "VRmEBJjEyyzXYzngacNg4rwjiCWGb2ZWwFxrqg5pF9D4bKHh7YRYJMdSnDgUjcU5k8EuJDPrnUJmrAcf2bNoWJv",
  "key19": "4FRG5jtB5CbrjUSkHQDaw9ZKbccgUjkeuoxUttnNCAZ69ds3yKESapM88Yja5QM6gzqahCCiRBgot9TQWrnRirUh",
  "key20": "5No6yUXD5RvfL6cruPofzaZSZepyjA8mc7ofzTiAEztMVysSpsMtqaQ4ynQ1J5Kh6Ps23ndZ99KBpJh66gwm6hVw",
  "key21": "5qUjAAeMtxa1d8Wz4vxzkK33knUMrjjqSsSGht9bFhvaak6W2sLmW9BKkKQxBUQ2rq2mpYHkwreWqx5z2KZAiRxY",
  "key22": "4RbWGFBRZyaMDrxH72hear82zZj5pXCD5nT4ZyPGm9nQAzxxVNWtqZ5DdYhmDpMbuC2GqF5MhH4aVCvumeSy1zyZ",
  "key23": "49g9441Npc515Pb8jMJsWugQkSri2vGMkSaJvdsEctqaBpkGBASfPiyhaLEzQ78BSCRds4qs7FFuaTYNYewfhwFd",
  "key24": "dhXokxD28VtSAQrDMdJiTBGcE2u4y7img5fvwPe7mZyk1dEjBuDz65vugqPy4thxCvoWXcV6YnJBPd141Y4tfNR",
  "key25": "4UQme5DNzbMTVu9egXDBSMfYjnLFCa5EXeNBnWoLiNx9BaYocBM7r5U5uc8DznZY8HLEC94WzwxRsLG3FN5bY3T8",
  "key26": "2hkCAVLPGnWwSupngZR2Z3mzb7W4hKXCj4NLs5b6QgSJFX5yXsHfkc2SyiYJ6xSuV5gg2r7N3W3pNvAhj4zvzrdX",
  "key27": "fMKEYg3TeJ2qqAAnG9EhcANykHC47dsHSg8WM8pKQoVvpVoPKfFrS88px3Wciq4mX2oZnhkuxTZC1swX954mTNS",
  "key28": "T2XEBXJXT36ovVqK4JiE4fA31krqUGZHMSa3eyXDWGXC37AxyGvzM3QCk8dhfzkivrKEkaZkSBAzqVydLkufqEm",
  "key29": "4wTPxU43PpZvhhjkTCtFJt21To2Ebmrk88QTU3HaS327KZPmi65M1dJ5C2Ao2idfQusnbigSkfAvvWrjmyyjARTS",
  "key30": "vtHuznRJu8KWoEPomo9FqxUpCyvWE4c2kjPtwZQMMuWR4acoxYuX7kPc91qvRspbyBzhxRgTaoiTb7bc3R8wtcX",
  "key31": "BAGafSf2SvVVmA7uLty8UC7wtANnBPChVYxxFqJH1uNbLUaZJVyEEaotk6ybsJq86v2qDJqADdiQtCN4z1CR7Qa",
  "key32": "4FUJWU7HbRqhzsQykTEak9AokQyzvAuF1xTiFWw14CFbekqcWybQ3pL4YNXMe6ftmZaLca8aVgfgsWcHUmDPZFDa",
  "key33": "2WaXyVkJxt83S7TzkvJvU3ii4f5KzjKycenk8y2gmLmFWNsa84BDAm1wkxKeYFC1MdVkMU1uuQZ6QddTwKVhG7Do"
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
