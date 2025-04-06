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
    "A1nJiwUzCSqnmJ7dquEp2jCMsEP3NMdK6eJGpah5bcNVcMh8otrXiU2WQkZmXypaWMHn6tm99ncr4Uyndz1s3Sm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2agsSX9ZvEGEZenA4ZzCD1WbGnzzifJMPCfQuw4WYHSXesRdhm4cjfoUnvKibK64ysHJNhMHBtxQTPFVrZXfx127",
  "key1": "5EFtgP4tsLuCbSSqtACipgropxKmhMw3GrBEb9ew4BBsmxw1zya7Q5et6mGXXbTx4vH7q2EpdYkjwGBUx4nbQBte",
  "key2": "4qCkLLKBLoc52Bu7xJQ2Noq5pWtAzYahGEbJiJPGvKCxWbUiy84bwFrYh9XPFsHTTss299TXBqV81t7cTAg3u5Na",
  "key3": "32xza1PCGrVMZXHqzgxmAkqpdZNuPRKoLUTFxUknMoGJGQoknC4dqFzeUywEEdyGMjSodrTak3AFcrD6KhHZhzG5",
  "key4": "2b6ZFmHckzynVE7yfFz9oe56YfKfUkWxwKS1cDqnrAaYsqezJZePGxrEueRe5kGp8w5j7Xc6JxiQFuAoD9hUSDKu",
  "key5": "2Si2MrEVeYB6ztCoK4f7p3ivdaoAg6vs5PkNBJ1gwkK7ZjGszYWopPi352YefTSPQXxxPg8z8dL9Y68LBAymrxGp",
  "key6": "5eTu7DkB9RGEiXDdQhBqUfcvFdsTWwDT2c76j4knEf9HWbr5cfiUQci3RUVmbWd9qNdy7kFLgUez238JqD9ZuWyH",
  "key7": "3Zc5ymDfCoFzmwksV3X4npXqJDHqzcrcn5uv1Strwqnxv89Qor6Nsp5de2636c9D9W8C8g6ua5KesRthUin6ZBGE",
  "key8": "oroXE5Hasx3S3jvxo5c47MRmKHFzC5UixLZz9V1n3gQ1dr3GuTEbiKbYGo9rumAKY7UWKtgyWghdBzjjQbaj2Bp",
  "key9": "4saChNEWi3FQVWbTMZAfdxAGkA6qNS8e1kUTGsNU38S2VkHJgq6PJcMfx7UW9VDzQcxwnZhZJcv1UvZ89L42QJVp",
  "key10": "5zjD8v27454LpKtFZsFiPnh61TVpVD9jR34RDmB7yTR8ekSxVVVaeqTnxa86UkPpPBAVfB51t9s5YurREGxkHgA",
  "key11": "2J5tAU7V1LZccEH84oeqd39fu3ideNrdQ7JhMWkdQ9GfUAcdBu7rZ4Ebt3wiuA2t8PCgifUGGSDj2GkrhPnMQjun",
  "key12": "3pC8T4FmkYCpyBYwhLcgBk5KM5tiUV62jzhhCWBUhidrQRzrbB2r3QYWBj85Wx5sTUdkk5LbBdAXzTwxCAC5Fzdf",
  "key13": "33G3asZjPia7jkZZGr3D6oaoCNFJyGge4BJ6XcvtF7QRWJLZdQ1h5S8DcuWdnhZUD5wvxuHoQtcH8pAwinuGDN4t",
  "key14": "4WYPZjaD1PUsQ8JhwkeEYh4SkCHoLTyXSKrdvRn4KbrwpMzFSZ9WKfvB5Mif1s7u2QXEgoMfndSKVpgFgeki6Lna",
  "key15": "62u7UAZ2hQshoDayDMfnmjtVHrc5GcRZ4ghy3LA768ZRDbNEQFZp5ab1YVndd3yUjFRTMUPVA2oMxGJsi9g9Ki6K",
  "key16": "667PN3PLy7GPuYg4Hr4J7EeTtwFKM9KqJyrnVUzoub9hG8DYNgyhzwnXAyavqFKSu3KqVwK2ubnVttsAjyGt3CVc",
  "key17": "48K7nbY5d7n53oh9LJJD3pNBMhpM4UYrRDE6M5TLi8YtHY3q8CdG69SxcEUrNJPUJK4B58sj487xQiK6Z1KaSQc1",
  "key18": "FXDGTej9z7WavfUDTwoKm6nXoUXo66fzmiSofxJBDBmFaBeCv4yS95F5AWRh13aH6Sxbz9Asyzi2wwdALWNCp7c",
  "key19": "4b44FBZpuRZ42BheyWhN68HSPbNcMvw8K6DVQMc8TzS9oEhDNjs5HCv2k4BckekECQ9YP9y5uZV2qL8fyYAJhRDT",
  "key20": "dTQVSnr2ZboiWPwiTzPJuK5L8CW8z9aa3EestdwadvWR3z3a4HKjrXJkGxLgyAVC6f2F9vm2fY3ZRegxvogPDzJ",
  "key21": "6nUBCjiSABJ7tuktRVbED9DH3fDcioVRysKjaPTpAcwnX73PsTvuTTAJEP1U4gkVHGoYWttQWRf1FSXEg7JNRoQ",
  "key22": "p6RXecGH5qLJfuwdVeyt2RNa1TEVjZTsSqzq8RSnK4BofRxwbvsebsJBwEpaNpMALWgu3hGa7DRAmdJazgno34A",
  "key23": "hzfhTFK7fhWeMgBWxscSu1JsbT3X15xjudKHTfQRFyf5Xpjoe5a4go6K3EtbSe8QANyk5mw1fiqhdxbooVfG6en",
  "key24": "2rLFUR2EPvBHufggxeiNwNL89JB2vqnqDR6eVyGvuEpQUMYPwwAfeSbtLnfJkoEfU7eLc4HqGwpYunwH8Ra4ZHs4",
  "key25": "re4ib9QPgM6rhtq7pMgkKYyjgHX9SQt6dy4f9wDmxADL2NH7ypP14c5z7pBZZh1Ju4td13eSG5ok3ojpv63KG2u",
  "key26": "2BMFXBuZH5rTaYQGoQtKwh9cVbrFKcSDwjNz6uefv9wAUEG7rx8dhPgn8C7ykqCDiSymMVN64ufMzzH1SjRKWyLu",
  "key27": "2pi9pqdiA1q4UqpmezPmg4fiyRNjugviULKi7qbassekC7ryLhZTS6KQDX7y9KuBHSVG8PyRTG4JFb2E2Avc2sD3",
  "key28": "2GZurJghFBC1K3RgwJcZb7TtHWiPTdHgeVSYUd71SpA3xyVcuMMvgF4is6LCHXRVbtnrGjEcZismWPX1kGnEtsin",
  "key29": "3LCnCSwvgMMAWtTSSCvELcfUUjUVXMWsQF2LA5kwVH2LVn8t649jYbsoWCQWAm2LPKqaDH6BsJUyudZ2EdLrFSQA",
  "key30": "ArU5AeMjiuqqy22Q6tXzSF9GjAwPHCNNRZNgLMpqP17ar9YBv6v8pvwEAdddotjnSYRcztP1D7oqhZx4AyFXL1F",
  "key31": "uaPYrEdYnfD6992JmigkYLfqUjkkZCoxqvePMRGv4F8ZhaVKVUcaDUDMFJmRfs4q2WfTWFsqATJ7iiCSwCQPptH",
  "key32": "3dyqfadB9MnPVcCRiuVR1oe8oe4zVwrMbTVFJjJYnDdZvtBbpBjwctgmfT9TRhkKXdZABBZ4JKU2wqnt1zvs5183",
  "key33": "4vY9hT6hb2HwywuqdewWBxY5MJ73nPRJE1VyMLuzgoiT2uRZ5yf4Rywh5T9bgMVek8QiAcrtnD2biNy3CzcsMS81",
  "key34": "3hHaxjV3zTpKME2spFh8YxRB4dCpqwV6uTEqhYyyBjcm4oKoj9K1wKhn56HLh2ueMxQEcraTEtYQUYAKih6cfH7e",
  "key35": "3XPA6UVFnCHYmmtBoMK5aTNJ2SK7HF3qx578j5BuZPAwdL3AJZVa25y2jhipHgzLgrCbnEWTD6dazcJWcyoWNksc",
  "key36": "3KNhnCGxqFyCgzNmXyCn8BPHRP7Ptq7hLcu2agM3Z443QahrnxK18J2HKVD2hyufAznUAUkh8KK2LRVVhRmqaSfi",
  "key37": "5PEbQg1bBYp11BF5jaJjUsyo6K5vLHuDd9RJchDhojDB6HePMLuFdkzMAECrzsKFiByG51ZVeLpenS4vaQEqicvW",
  "key38": "4ySDRiK7gNMFC1pf9FdVfhsoatNkHSUpnJuUvqpRtVhQudrrf8v415Q3ZB739qDofEUgjtMBQWkiEyEzxhBVZzLy",
  "key39": "iTFvcbhZxMBfDkR7AYVEGTMQb7pnnsDiCqYXEaCFKKzGAkGZodP2Nvt8UVkh8yoiPVqKsJb748AfR8gKKrgD4y5",
  "key40": "KaePDPVrDagnNFoSiP9dpWPx7q2PUeo2gk5jjgGwnmqvc3bKfSe7X8692VEHdd6KXp42CVThmEYttzmpAZp8oNm",
  "key41": "5Lxxfz1uiz2AEubis3UgAEvsEKtCF9eKuZLjuHxZmcqqh3YcGXs2Axa3T4nRycnFoNjFtER4kgZ5dh2pGMT76UNv",
  "key42": "455AGb6dK5LJqybp8by4G9NfB9SJbm8QGrKSUi8xD2fq5NQAt5LCcZhugTm1J1QQBQqCXyYXs9jNJERbKW2xrQy9",
  "key43": "jRof7oUehvi6atTF4tx4sTbQgbpnCiWissCChEAiJcGQu9J5t7ajhFZZon1Zijg4G27cM52U4UegHktrzTksQ2p",
  "key44": "FJAF56nCyZ1VRkioNDp9p2hERAZDB5t2Q3apCWE56R9DMJn5BdntLoZkWjUcggk7i517XkzgHb5QmeydbHARn6W",
  "key45": "5936TWtHw7veQUN8MZJRKTW5CJ5KcXASvXwhzQ8t3EMhhvNfz6zQx3fmzqKqsSP1Uz34gdxeyktMenkGskwnDwrv",
  "key46": "4bScv8PLzjBksqbjJosuwxZeLVhDhHPVUuUFPXjLUFMgWwwTespTkihCWghvmnfFQEMnU9HZeZ2zHS3b7ZfU4p5K"
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
