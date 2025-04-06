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
    "56tVaoMSmCt5HtgC6EV3LU4YY5ZiTDqoMJpAqGQFhJWvzmv695FouHo1qzPYJFFc4tajhwhCHGgmsrP4sXJJ3TuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oJPSccpkNCVfsgRh79Aj75c4JYsUABotrU3bBieHrJiWkXkMVpKEjGru3Ehw9AU1hVBQmRyXuQbECvuF5NfWr1T",
  "key1": "56nEW97i5iP8VmdVZYreZtoR2FkqfnwMptHh5DLj9zq6kGnN6aufyxR2Vsi1Pz9UqHYH8EPuSr1NHaCo89xEPy7W",
  "key2": "kFakuczzpQvU2AoBFKivrqowEk2Jvt7ohEfeAMEC5XbCwzynGjgEJFT2z1vqgG62WyCgdBL9McXuZPQDTypT5UW",
  "key3": "CzA3Ur312BLjpSTCKLJFsjBVYkNNhbZ694AsTun4MBuSkM3LkwgoJGwF3N4YhYvYoLJREJMNLEm6td6FjptvkMS",
  "key4": "2udLkXVdZMBwbb1jWacTkzHWm4ig3kcGjtVoeu3soYKH58x5ZqeKwVughdtaqh2ThJBgdhZoVrt8bTxJN2ncKNVW",
  "key5": "2SYUzWMsaYgTxjCqNnqXFaFKtGRSXJ9bYZ1RfSBGZihrzz8Uj4AyxM9groftt5LTtXteWWmr5vUL1S8tjvoU4r9U",
  "key6": "5qb1e2dawQyjjLdEW1qsyhCDbJgZ7r6RjpRgz2UgbBB3waSjv4G2MJ3wpkG3AXNE3ZCbSY83PqGdgduVN5mpoezw",
  "key7": "5HRPvkHXRcywNfd3d7PzHVmG9VE8bPLXiQvvyQp4qP2HzXZEijGnZCwp7U6JQqnr84q7JaiTFkh3xBPspe6s7Knk",
  "key8": "2b3PLVTTGqQcVYhiHEKtgR8w54EUBk3EJWtrhg88Zh6NFi9B1pHh7zjcTS68cuknaAP8YBuDBjpEquCeYwkjBeXB",
  "key9": "hfA3gDejAivF24AdKa5giibbAzPN7xaWntsGJ8JH2ki3f2je6NSXQX494Z2cTrD4k1UsWr3DyRijsXMTU38nARt",
  "key10": "2sGYA9PHoun4K732c3SjGsX26Bv152xVMGGBcNkPPKLd6AfXmUnePSQfhuLVDcra5814KmwbQEBCz7UgmzkLNguq",
  "key11": "2MycT5ZLyjE2ubNmTUqZ1JqR8Pyi1agd6Ar8fDfjdwbSc28URRY5Rp8yK1AsEeSygD4fmkTi2msKNULyCKeMt5p6",
  "key12": "2QtkU2TGPgfLtuxeHeCVt1n5CEmjaUvC1E8ptZTaKAk3FkvgA6uennGZAPMLF3cZLSo7DTFZjy4JJ4TPzyVFJKGP",
  "key13": "3tbm46iwxwCCduFz28woXgoju4dMsZYKVGubqsXYPedPmXFFVd5uV2VzBZJmSAUmoSEVkAr2hUr5irzTfMQTXgus",
  "key14": "3tFjrz46a3v4zpScQDfsQH44Z4HL4MgCmprHPnyF5AqcxQsMVLZ14U1brAdKnupD8Q7HqXJX84R4VBLgj5tLzsW3",
  "key15": "4c4PehxcUiAsBQd72Fc3f1vD5s9k3q8xYQ5rZRjz8x1WtXgZv2pXciHX22xzbou6CQ3tYrSuTfdccaUWL39vjPyQ",
  "key16": "GiWpL1rsd4E6jKK7Qdc7gRLSJrgpFza6UMkEMigKhSSL9PpAEseNygqUppakxfXw8GFgnT1NxfrtPsBEhezffuH",
  "key17": "2jktwBiKJC9rDS2eWnV5PZzM3kSM6G1Tyrp1nQW3RSdjLVCegVSHYYn9JhsQ3tT5abvVVBeNbQjAcBryZyGosBJw",
  "key18": "59LbUSYbFj9Qb7BcbjndiVRcNBh2Kuhv3hYT5Y52UmwQNHnU1hHgy6Et8uQsTVRk1j46aUrEunmeMDVDeSEywXMn",
  "key19": "5gxdjdthRDsEG9mpa3Kp2YgntuaVQnyZbnEGKSvcBFm4uzsbaAniwvLqx1EYbueiodyQvPTn4GA3rrRAL2QtF7mx",
  "key20": "3S8CusroRGiSjdnpWND7Br5faUgAD69HFkwAMBsnYNJLcyeX46hK18RM3wxKcqvXefyf2PxNb7yAYbSDAEu7Q8ob",
  "key21": "2pwSW9z3kV6asCYsRmozLhKkrFbLkUVaQKqHpkeE83tVTpbNjRuguRXb57iFLdnpUkumvdMmy98sHFzYk63Heqvv",
  "key22": "3bH1aajiWhMf2ojQQ4if2ZydeKEh8o3PUB3Lm46obW649nwUMP6hQALoNvVT4wqFUGDFCTBFYwF9HaBXMvpL7Xi2",
  "key23": "7zDSUp3iBpkWGQtdGFDS48X8131ZKtYmZR86dzTBuRv9NEK4nAjrTLCFfbStCgqKoRUEvswVNJ9Bog1cx7nWbXv",
  "key24": "pgUF78aiVUXk6YweRVQDZ9KeXWXnRUVLaxLZV8WReVQg4kDopK3YiqQhCL4XENYoxEjzQrCsgDUa5czozBdkyUw",
  "key25": "5cgddGDoJrBLksVyCBh3do1sk6gkpckwyMdAxMWUShFHAa3gvGWPGsjrEVtEX9QAYq1Ch5SKEC6g5jetEc3aez3C",
  "key26": "5fNj62rSDbtCAJbmmVREvqGS6k1wERz7jmcLK6hTuAYSd6Cznk7ZGdsyMUbC49stv8QeJaacWUjXk5ayZ2K4cnaV",
  "key27": "5AHjXkrQpb4rUfcUpDS4rLe9vgznE6jphCxTR7WTdTnctuUqndrC7dSuUrzBy3NtFbHQF7m1TwPudpJsJgDaCB71",
  "key28": "45y4C8wkXz41r47m6xYgmXsPjjsRrym86ApC411eQ7xGRSwtJw6gBogHAjeAoe3YeRXzrRiSPgcsBZof4SkoYdpc",
  "key29": "Pmn4JYx4LBhiXEy9ubm7XiaaUonABYocE1mnYchdhqaXNLiMwMCXPA755AyJpzrKvp9ppcsNw2i8BtTXzB8Xir9",
  "key30": "4Dv7uxm6y8oK8MSBvBN8ze44ggpa2Q5Sdhw5pBdcuCX4YdQv7xSARwE37bheujgxViJWvkeKnysm1SXEbixjk5Ln",
  "key31": "26PMMdz74F5rnL7f2eDhSH1ZiXvnR8X1hs9ANPPSohjEUQtkvf8U4wg5PHoiTu1yYwdL4mMUh8G7UsZFgwsVzTnw",
  "key32": "67eaWU9sndyX3fGT2eq3tLHJyTJ4N3JbtPcfxL7zQyhTgjQCwQm8gbG9PF7jNQuMpbzcDXh28fJkbfqK5HTBcv16",
  "key33": "62A9mTD7u2gDS29ubA3ukh5f4eqtSPrGnBZUUTaBUsWk3iABjPcmz4MzgtLfsgeJZ24PBj7ygwHY5Agtns5Rhk8P",
  "key34": "25RkoXWV35qriHKcYocbNtyfoU3uNZygZ4u82AWJiVFRDdmC2vtvAmxggtSr7BKLGQhi1e3rPBjNRqrBYcoH1TG1",
  "key35": "2hKhxVeJy4UDMFDSEZ19R8BNYZ8n6bBt1HHPeXdTBMdSM8TSuNZ5gCot6FPFz71pKGN51jSpqKpcjsUiC4TFyfyo",
  "key36": "3MsAG1J9eYrK6MTcfftExsX3Nu9uDEaFdZ4W125nDsNnS7fBchYXgwv67TnWuRyoKRZ67Yu5LoKrC8m5ZFZLhg3c",
  "key37": "2Y6XmAgqznT8jLdLUfL4vME7KhPwiASqzX5usC96oVUe78SMAA332Tf1FdkYnntZHLZom7doEy3Rw3X28S3H4BXY",
  "key38": "2CWz9QHvoMdwSwVA6WARWcotKDdZbZyRu31MZAYV97hEHCxxthhV2raYsTKTg5SWr7jtiqd2VHUMKRANVTVhBJxW",
  "key39": "WButVJqsGdZ45VJvRXHuC5e3sTuhr7jrbwgAksfZpgxVGxjF1x1fgCfxwRkZjbz3Hx9XCB861EqxFUeSUxXfCC1",
  "key40": "31CH96AfW73rQAfYgPAzWkDQg5557upFrhfgtkE4WPoxGmJEo1F8inuxEkX42ytDut4Mvhex83puQijU8XWHrcp1",
  "key41": "xRtstrK3B9avrvwsJapjR1vYjXAVb3DLAamjBwHGGArCdEtBNjBFnB4h8dkz6HsSpheH1pneFzsZEu7Q2VgubQ3",
  "key42": "65Ma8gFMv7N6kW5P6nEvLoDqN8Tygu52o1NBom4URRmyssoJhWNC8YGEWVGsiNy2NKyZDDA4N6sTuYPWGnan89WQ",
  "key43": "2oHJzx22cX8KZPUPpUkzTiqZwx4UNcHwm95GtCi4iuwQHE4Q7eSi9M5sQg9LBHq5WqkV2H5kenfRorqAJzNGiVmG",
  "key44": "622FSBNEqa1gjVhWTKU8Bjau93TSSCH35UoQYNWgnRATFAYEHZjuCQXM5Q5ChU1FSXevQUdcrZ1uuFmDqNZHP1aj",
  "key45": "CEjE4tUCr6kQTghV4jnwjZK2J79zqdqcHiL5a17rtj3Wga6nNkPPtVpgP9hAA9i8dG81ZenxXsAgBb7hNH7ToKG",
  "key46": "33sNN6Cq1a4G4RGNBzEo11rcGwmEM93kfS86xQMTSmjmLGYQnhgmmEBDVWbRDwt5DLj1CijiMjXkm27r5BYKRhYv",
  "key47": "4CwHu28PquPEh8fcwbMQf6eTrr8j4H3Yf1sZQuvmRwJrzSa6TH95x8eGChsCbubWCRe4pg2hKnwTffeHe2q9GnTr",
  "key48": "62R5uh4vawpQMxdxXxDaeGdCqZa9DRStuSMbeDDfFfQGXd4WF1kyCkKSEibh9yyYs91csvUAV75os46peW4wfmNw"
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
