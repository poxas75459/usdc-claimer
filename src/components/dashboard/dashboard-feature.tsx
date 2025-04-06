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
    "2HnKvtwhMoEsBJwTvEKtpNQpodsmYq4ykw3DWDfNedbL4nE6ktZAjCM5RsbfaN4Bfh713Pr2pBPsVwzq76XEgRg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eibVzPYVPUiHuPwG9KMymyjRThjdKYAeXcWMxbJsDTY3yr8vWdhs2pN58MMQWsv9vujjaKLrXsEGiz9EdbwtgMP",
  "key1": "4zA3w6C1ap3vaoUo9fxQdKt9ufFuhrYmwVora7HyGo1E43K1Ny9qzX78QzsZNVRXkbwYnEp9WWBJm73ryPS9gLDG",
  "key2": "4ScVKYctAbpZP2aUwyig1vmGBXxiL48GNoF1fSQLx9pd24hA3jYymnmHZLTLqrZ4RgTYu8Ga4jZCrRQwQJKzCYfw",
  "key3": "j6FN9o31ro6iA9F9BdhkMwgMDg6nCevRAsbARXAiJ1Y7mSrCghmCNceHvjue93Ecg6cQPd5ZinALdt4YctbV69X",
  "key4": "4aPtXhRFvHSLmthmfsjQkqZLjxgkg8yHMPjqxnKb3hXjAYcwsY1AS9aizDdzVku4zJWNegLiyGabzG4kxr2xYUJu",
  "key5": "4AqKpTbQLDdvhCa1Sr6XtdztokUVUnwyFrnwcczZu777Qqrk2U1BduLRd6Wyito5gmEoHwSgQLtju8Gt8u6Hb2wZ",
  "key6": "4ZnuCnqFAQiSFtWheFLAS8DqQvtyCdpp38zHPwEDEywApPszaxcPkD71kLnosT4NteMrjP8v1WfSX89dDwWoV8gd",
  "key7": "4pvJVE4rUf4UR9G2kLeapUhgzPesxWFJcnpzNoXSCFH4HK1Jz7bypUUdhfTL1sNaJnmAUmLgNpFxthtgoyhhSG7x",
  "key8": "5ihvTEtS2LPXqtCaBeL4FSUyzw9ix7RZbGkzwv49ukCpn4hbPebVmS1GxjTd3NSULN2uFDwPq8MMGDsYB5NrjTuN",
  "key9": "2RAQ1HUDJFNEkmFSYADnepkpm94hP7FVN3qQ2PfxYkhWFdKfADvwnLgZbof73BYB9mWJ4gJ8SePhf1QZ1Qyi9i5p",
  "key10": "52YGmzy1vQffptsnZtafgRB24DW7FYxPbg6stJt2xG8AcJbTfBDRK8dkSdFnGMECgLkggVsyAaviUc49AmG1niaJ",
  "key11": "44KwWf7LiSdmioJhMaPUe6VjAFi2CKHF7BtHDoGTrfR2wL8jhZMiT4QD76EJEe9yy6Z6uXwSGro999eHbSgZgBTq",
  "key12": "4bjPMnRgN199VRSkEgH19y2XPUfD7Fkj9V4bcR35nBj7HWxPwDYf482gLjHK6rAnXWrU8fU3cmZpLTRXiGGfDePN",
  "key13": "RgQtYhn6TaYWj42yN82C49MaxRFMTfF5HSxVBefw4c63GszfBZ3vWm1EXnvn6MRipJH8RuAMbct3rq7cDu85S9w",
  "key14": "5mbYBQnBjAsUGuE3DAYAnGkfCoGfpMPYKB1XETqg2nL4Au9efPHtECU425xrxPgkZS8VivGTgDjUtjMv2Ws4wwB4",
  "key15": "4UNUwNE6WLyzCNXX7nXrNSj1toneFAQL8bX8CuQjDU2qdWkcsaQStkZwiPq4n5LfuLt7tSzqxLdPGFjNU2B5QSrZ",
  "key16": "4Gq6ynP5HYVFgxrRdRqabxHhBmfz9MVbvV4hA3rWU8La4dWXAHQ1ELJDe1TUM4BDuLSBjcmcbwq8kDFH8ncGVucR",
  "key17": "NXcyH6kVfUCufXtezGJ3ewGYymTbxRK1N1ACDWN5RtpEjpTdQhQqtfgGeh7tj8KeDfSFdeAmpZQy4HmfWTCPrMi",
  "key18": "3UpTa42SpLiZs4VMjEpvVzvmzuyXDvvnx14wsCkUyRtbVVyKKnXViCwsi7CpTkJyHvLEPfrBEe6ghLinj9QfGFap",
  "key19": "2pq8DS1Mko5FTgv8sb7zpyCDKf6129LiJQcoZHc1MAyBnmMdJSnf1RR87dsnwtMSYGmQNGsWkv19ZGBtJKgE4KZE",
  "key20": "RYyF1t66rqLCuiGgWB4J9bKCiamrUVSubCKTs3idmgieZMzoiZXd4hmvcfjUJiGcegYx5iRYp5n7QCCBok1V2mL",
  "key21": "3kaJHTfzDWPMzqwXx1GbSg9vtduDwU2DkanWgaU3Gx8c8Th73p61FqESjnsBxuZLVZV31SrpDnVdcYk42Mnw7MFZ",
  "key22": "z5BRmnVJ3t4vHfWwdho6M21sMNTUKKmuYrEiBsFHDQ1huRz86GX9pJYMVJjbCi3GseeZE8HywvAgU7m2EKqinPz",
  "key23": "5xAKHNbk6FHroneY5NwK4NFrkfn1iyRqbgdhquUsm5Cg4gFBmA499ZSqXfkpfgWuHqH8bdATK7tLRKoPQudKpcpD",
  "key24": "39D9XdBGGz4Rz6oCYgJHKhirj3tWkJueXT3dU5GXebJmeF5kV2wUL9j1FcRqcvWaDrvC4X45KmxdrDwNGxZx6FFi",
  "key25": "43uH5rnnLK1SruBRkiyk9DkUZAmEVUWSRQ8Hf9qqVRFRQDwogb7NHbBd7tNnu4rj6MAuXY7yqjzypUK27VpRKVQw",
  "key26": "3MtJTCcKbSorcbmq8Wjv6Sk94nU52U5TQYnoAkogbGZAM8xd4VmevLyj14x8QHyExXUkFt49pfyRd4gMdkhR5tNz",
  "key27": "5edwrmxkivoAiy2E29JNAXCDwCq5ibgwFFgGQ8JAbzgQbvUEQrZPeR9saYtCdhkEuPEv8PVQY6wEBjq3gY1i1HCX",
  "key28": "2v3Jx9UUTkZQocwcycw8Kkv2Fw6Lz9qCnw7geJuqwJaWoujbZg6oFuEbPSELyyFUHK7gLYgHyZQgzdBSX7yjd4U9",
  "key29": "HwAcwa3GnfJhzqj5L3HpvX9trAPPd5bUfX9vwSRRJgSCmeuwPkHKDGJAjLe9fB6PGQRZxsTjR4CFQDoT1gy8mNy",
  "key30": "3mSCaqRWT4dwTtDufn5fm4sbwaays37ZXuU9PdWY6fHUJ7okKsuddXri4S9vVeXHjpfTyNaXs5np8T9FqEwXQDuo",
  "key31": "3uxakWN535yqZNY99zuzXvRonNWYPq1gHRSRMd7MeJfzBxY7mPGGne9KXJ9A3df9AGLiATTP5LpM1V21Ksco4kWy",
  "key32": "2AxaiYYdMm7F8EZtEbiDSx8tCJjGJEmqEk3TLGQwHgxnZhiJWtoLzTsEZBHWEZsmoFFZQXuwPo9fmdVYsxfyiMcM",
  "key33": "5Y8DgqdWGovwC4MEivx9F4SipXvC6UgV9wH8JaWoCF9w9jQn6J8oCHS4MGHM246fAuabe2HQjE4vH4rW5ZfdHajd",
  "key34": "63PSEa5EpKd4Ced43xsQwha2ouLibFZBwNwDePMAwdc7vrTT2UQbGZ6Kjpb9cxq89EqFrwUVt7zNxB3CMNbJVaqY",
  "key35": "26nuNLFHqLLYQQAh1Dzk78Lhef87r5CSVyHVDsDPSR8FvuQ3zzvXUXchEn98U9YWWskKP392e1BNXf4crPLPQiro",
  "key36": "24uBuNMjdVAqNoPFpZT9PiPiqsNVLTyZvr2TafEkfFaFoJMM7rzaqj2i1sgYz8a68Li4bFfZj4PRF9Z59GMm6DAq",
  "key37": "LkVfwz3t3KXiC9DMkwirRuvdqzdCeesrRnq4QMSTK3hafR9M9WFttB6qDcfG7fdCW9fQMRABzMrzWWqwGy9eumV",
  "key38": "217n5ctNiW2L3aXQzjvTuVoLsBNcQ3KopdKKbAMyzSc2E5hkPBrbS7dtgKx2YQ7KVnqsjgeGAF1tJx4xA2buBWuc",
  "key39": "656uBwQ6NcQkyMarn4bNwWj26BrZepNixPj23Zzq6XGqEi3Rd5yuZEF9XgE6dBRc7GT9fGveMN8uTmvcVkEi471y"
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
