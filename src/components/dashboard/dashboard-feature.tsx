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
    "3fhCViUvSMCNiNw1mnLLi8WXqXXcL6YSGuUZz6eppprnFPur6nw1Ti1vx2D3uCizdwTwvEabukBpbxhjvnYAHXBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FxA1PmLVDicFuU8vEqXgMCew5GbNXCXxwmfcMXCz1pXa3RG8h1YoC1rpcmas9NNQsKiqQCFpLaYNEdW9jy6bDqu",
  "key1": "4AFUdMXEtTVEffSfS9fQTw4a3CP8VFXMzTrxmq9FwkXtzViKkHHVU6CGPMsKw717VjTgBsKGe7BfVDPUrW1DBck6",
  "key2": "2zP5FqXPpSFPnTCbb3bb9FRKoZaEwyMpnoWCmP3GbNK6jfATw2psxgzgzjddF294ZNoX14fe6X1tM98HvGKr24uG",
  "key3": "3RmtJwQ86NutLjbcauYy88SZGN3FeXSiSroqaGi1RxZ7HADSi3pDVUtce89bBwqx9byDKYzuEPhNUgAtZU5c7i2N",
  "key4": "2ubQ6jRuMC3zghuw4jGbkxKqJV7bELTYdXRBCmTuyMy6mmvvCiVkduDYGB9rHYgj3RUsXZfhiuoRbS9HkgGUY5se",
  "key5": "5p19RKmKDSAgpVnC65u2Fk6VsL7kSoyfCrcRBS7DrPJKXJjLKoQF4NVsCFnG8fcZWHgicB9F7jwwQf8hkVjsqbt3",
  "key6": "3x5VfyHUvWAKq8Crsbp251NqGyPBVFiQLhbKTeznRJjJJysQPMRjf8qNqNuhB7woYjgqUExesenSHnpNwxZ92NCd",
  "key7": "2BGDNQGKDN46QXHbdF44etpcXJAcyE7tbwWsZe34YoEGGG7NvqhE1i6ddnKrzmeBaKtZqjDhjsQMenjm9zr8shNK",
  "key8": "5qcbcKumXUALbuYYvvgqmAHp9e5bUjj1UhKcALoZoLCULtJuLsH3V9JewfXUzXASk4qbidWDcTeJqWgPX7GjGk5W",
  "key9": "32TBXTd6fvG3sPfkevgLSBBFd8RJQ6TJtxnQWXTzvKVrAbtWN5sgyfnmoUnGrLqWVNtFsRt8CbBAUyM2cCRQ48qa",
  "key10": "4wRFkHSq7Nf94yaBk4jKCTWgq7ddfUR9QnaoWjt4zwJ2gubgfUSWUGWV5uXuVBZt5Zrqt2GkpzmNU1pr62cQobnZ",
  "key11": "4QRjD6z2RHAjUKffzcPKFs6Xkn4oWW2wjCVvdxzjJxg4pokmYWp6AJHoVtZAQCQy3zgzQ8Ce6ZHXAjcsq545sy6X",
  "key12": "5Yy4CXyhrx971nxonFJ7eXYdPV9R51Rk9AWyZe74DvLTN6beNE73b8636zdaEsZCGezie3AmMEVfDUBkKxF4yuK3",
  "key13": "ws6dYkSmHQDiQuLfFhLn15qe9d6HFSGeKABAfbDFagbH1eVGWbL1f8CPWEH6fvkvjGu9L9f4svh6mFE28qWUy6X",
  "key14": "57s4tgm7TsqHk64c592UjeKouz8B7i9M9vSdwckzBPyrF4a8hRLoNcZdXFRUyDgYC4qo6LiHE3jJFUeNMYtk2rHg",
  "key15": "5dbKtaz7x4pp2ohXMJF7rkN2q53kC2sVtUzxmKYB9AjmqxVgWAWby7Dy2fLAkWdAToUgPRdKf8CEpTjcWFLFdmih",
  "key16": "4rLWUt37LMgjSBfjN5hqUUhCDxL1ZhNSet6YqoPguU38dZ3zeJdpp1EHZRNxWEoPFHJn3yWwNvz8ML7UfRnGTBZr",
  "key17": "5ZikMWhX9ifY65YnZ4rG1eAr2y4ZTKunKYWX3LxmDEMruk23ZLy42GUYpz9JmYhz93vtgKzQKaJmi2BqKRoJhJKc",
  "key18": "4448t31MsweAooVQ2p2NSAu4op3GS1cQcUcKgkD9ZMB4qwvzZRAu3VhYcBtz1NmGsegd4nSY81X3sTzu6Uq1FsK8",
  "key19": "ppgAiUY5F1a8gRDNTW69PuBD94xgzxNzmWCA8ZuHyDip3casjvcvv4tKYQ3hVZtFca1KiYoNThv4c7PAUPYrPkV",
  "key20": "2D51Eg2WmDtibKUNP3DrE5L1wWfryBJd77rw4hyZdqtvkp72M9BhrsDmSPV4zSPMQucCS9jpii7uwJ4oeReKzxMg",
  "key21": "4S5qT18Dp5PTrE3TuFHfYLHQ2XKxw7mD18dx5ZFRjVCr92uh7z22YVSXNvUokczcKzg2CoVAPQ1GzGJijLDp2Cwg",
  "key22": "3ypaX6oeyELrUrnff2oGF1DnFYE9bPYKg1kPivmgTZzEr5wxrpPtq1UjVt4QqG61jUHLgwkhryTSwAmT5jQMUqSk",
  "key23": "2ZJv3bu4N7k3b77H99TQt9UxWbNocKv84ujeL7EEGcgCg13CFTzeEa7WTnhGKb2XyoJV4tKtJTyTDDN49QauxSET",
  "key24": "3dqKGYaXANGnWKLRzs1RmvYfoVKUCgNoitwywUREqp6B5YemcZgYSga6ufrje32tq6dPbb9vYiJ4C15qxMiCUHNH",
  "key25": "J1ogijWtj1ZccfJMtpZGGW8aEutXkxW4EUfesxjsSaQtgJFtWMSbSDmvZir97cB78ErLsNaA1A5Ru11Fb2EbZ8K",
  "key26": "4ZWfzfX5Wu2XjGHTKQLmZDmHsfN7njQntQP49Cx1uX2vCcGYf88Ur5s9zMK3JwdNJXot2MCVQoYHCg3eqrbJ931P",
  "key27": "55NaHzDDjT62iVtFyBdS2irHhXk4ruLFUWp5SaHCUhRtMh2QPTQSGfe5rS9Ne5J5JrLnhzc85YSoFJTT5vGPAPtb",
  "key28": "387PF5faTHKikYoRLYCPqQgxHSiUWnukSf5pRmdhP6Tgn6zCpeHDL2aynC4DsNMYgXUWEGDSr53vofnmAydw6TUd",
  "key29": "2h8LvJ2i1XsfN8pmmsYWbWpVUvzHEkJZyEkJ7yNhPPHFjjs6oWd64aJV8vJBY7mkAWCvju4REJQ6awV3J7N5EuDs",
  "key30": "3nUfYP3xpcKyfcrTQDopP71NbJCVVj4FMwzvZgWuW25gWSG1QQtw6MUB4sqQaKvm88pcZH4J5ctbqmbnjVogKBDG",
  "key31": "44mo1aECtB6t4ac9VdRuUSa8PSmSA5QkH7XFBGxaePk9pfvvebKAXo5df75zk2T6xmxiNdezS75g6fYq6BvwhHfU",
  "key32": "3RNxxnviB153fykGY9ujkPEo89SkYa6YQEfktEX4wJ6Bi77EnRB3poFTFzGm3JngrFyH1K9isP1vcFdK5QnnB5PK",
  "key33": "DpW6sAhs4PP943jGyXrouDkozQMZUCumYkvfqcm8ePQMTjgW8tFHaVFCnrjoWZXLhFGApkc74bBXtWUKKKYpMTu",
  "key34": "3bshjS6S6GtrY2yjKCZkZCzeHSqFTqTDMe2CXD2KcqT3fkJVfYjLSPmn1E985uDW2KtbwC76Bj7nWgqdSuNFcZ6R",
  "key35": "3PRV42NVjy24mCe8smQposQMrEXQfvxAhdQeNtNfmG4zCffaLcuLykAM4kL5x9r5sGEnhNrM76X81WRu6Fba7vC1",
  "key36": "2zR6yKwNydLDaSBqz6t2VYtp1DrtYHTo3MewAnS1Pag3xiFpbby1mjNP1mFixNeWDuo1oAoH6HxPtdczj1FeaqyA",
  "key37": "3XpDiuq55Sw9z8TGPMKSTWfHjdH5KSFGTSLZHHsMMztJcaVmuNpbq7SxR5wuXnYZ7kkXH2dqSL3sNd9YQfxsJjcF"
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
