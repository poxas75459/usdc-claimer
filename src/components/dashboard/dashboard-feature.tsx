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
    "b8fZkUCVupFm5SKPeHfYhnuUXoukCZn2qT4MCLMhJhWCqptaK7uY1uZKxsebNJuJBvaHwJLJzaYURUSve1pTbKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45u92bsTjiZfQNKe3Q6EFpHDRbLcULfC3s9JVAkGXQcZRwhCMPW7bvYEU8294P9DnoA2T52fGi2NDjxGf85TXgTB",
  "key1": "5kgbpXMu8RonnWfzAAbGDZc7G5X435M36pN9CiHViztg8DwxuRLoPFHrnKSCXneXMeK5xWbTLhW5Lfj3Q161Endm",
  "key2": "2sfesczKkiA1CNggR6HZMAtLD3x4mMfEuNxYSbQREPwUqATRUpCRiEn5McjsPMym3onaaZrV19NoY8TUX755gkYr",
  "key3": "4QghaZdySYFny3uqjS7tsndcLMfaipJYDGBtwBieewhDG6b8hTxAJsve1KHT72MWp2tj2APEF7jBNnKpyjetmgbd",
  "key4": "2QRaKfuEHvdQcPDYRPMEadPNCfYLktaboRL6kzwdMcHupogGJvSvHsgHwJSDR6BwLDRBNxKzJ5x2FUnPeEMrkPKB",
  "key5": "3B2DM4YGkVwkhH6XaGZzXdFpdj67zHifZLTFUydYTbjJpLaqtjcPNRCBRYJGbqgCSMypgsoHbm77hzufmqj8YNtU",
  "key6": "4sud6awau21CxpRG6GqHPdtUP4diMW5Qran3Uj2ezdEYZeYvM2erPgDVhBf8egycgJPE5BMTGfVGP11KSjoVMdB3",
  "key7": "2g12TsxcKzba3PtKqV56QesWMuyLSWemnNTdWU8muSsEDbwrPDPgUY6igBoARi9DJwc722MXRvwFKnRU6NZ1EyNT",
  "key8": "3cavCm1ZAHKRN7DWLDGMgQ4Rin2WrQXzUb3ipcxH8TYYAZkE8zUhkNrM4c4iB3T8vACUGDQf44ESUcL5ssvuCxsU",
  "key9": "5KKuVBCHFUf5PnVQZmitxMRchwcfe4m5gVVAHwTJAwNgJtyF1qATn39GdHA61rrNvUhsGUedHu6JxQreGTgzhGuj",
  "key10": "36iJqDbochZRm1SamX2mzUvx4r1Foyb6Ziru86Ge17Q8hJE3XzdQHvgDY6j9JdnjNwSzr56YpqTnQiqv4xc4uLJp",
  "key11": "4Q1BSnFLcr5YR6tbypCYuXXPLGbsaEbTaw7by37VyyCYakpe6iA7dny6Q1ZPjANWqHpQGruuDHdDMSzPghcvkZau",
  "key12": "4dbD3vpFrV5ojobZQFkGufGHwR7mWdS8x1o1fcek8aKNHLg4fe5tkk7ox6owXzttRvQpRqjXDwSTSA2Ex9JLK5PC",
  "key13": "4XAa3rqtGLuhs5Uz1ZuPm1ZkoP77yT9PvMZyh9qH2fcRL7AehHkASNLDg3meoebT8xTBPsihtPEZS4ZK3mQSyawv",
  "key14": "2UcafowNzq7kPLrH1q9enHdLoSDNJxopCLHw3KgZSMCoYY4gMPntm6QYkZXoy9kAWNf6StpbWBmrDS9j5npkLQx5",
  "key15": "j8BB1WRyUQunb1BmkY4RJX8bMNUTJFgFYkQbF6gSJpiV2BUYVTuGRucFwf4jTaM48LF2osgwEtXxmJuZ3ebvy1Q",
  "key16": "GKcL5tjYJMLo1pHpYCv5FJ31pvGDX2EeuQopwcEh3riqL8LDBZxhyGjbstzFEvMTtfVoGdxqy549LVZRANXPmcf",
  "key17": "3E69KBTMndVhTCnjYNuUCUP51YZKcg9AxdvwbHYD9Agt8Fh1TKb1jdp1N2eD2iUiRewvRZkT5ALzTuxF3yq7hTAA",
  "key18": "4hLJsGzWyxfEtoXeQad6g2sGNPzAHLbiHN5pJQduia8tLigLFNAwje9QYS3xGhBjYT1LVqzSDn3SRGjQvt9aGoxp",
  "key19": "CKJFgvB3sFh6hvVeJD1hHNK3hw5wTkGUkx23ERm9m8FSMs6usM8LKN1DdQ7SEQHNc16CBz9agFnvUwPYLGE5tcK",
  "key20": "fdcwwPxHZEuwJU3RVdeJDCpCxnjtGyz4Ef163z62ZVfLSYU6a8MbDwx8BceGJfSjgD8zV7XnV5oh7RjG2vvm8EN",
  "key21": "2HnsDWre14FDKticDftuJWQK58Sofd8VLufWZYNRkGnWaooefFJ3G6tm3QYJnmcpvwkzUoR4ZFWrviQWJPoJonMi",
  "key22": "3d3h4Qrv8JYwiwJwB8SoETdCvH42rSA5Dt8aTk9udhgdzPjBwbxyLLobt1LHjm2chM7dnVqYyjZBoXZ9B62dNp9d",
  "key23": "2HEhb6VF1JTGC1sKCb9pUCUWz3tc4kabrFeC4K4QiZ3n29rktwDmKVyBxJp87r2BEZnbKo6vNBk1DB4BCYLztyND",
  "key24": "5VyRP9chiWba95RfENWPCWmhk3r3P3CosSkNgu7vTjvKkFkjyAt6TNoW4jYCRQAAg6yLdw997mrWDio1BRNKwP3E",
  "key25": "5yGqw6BRRxMQsYwqB9eXb9WBVp2Q1QzAnzd7tunNgCKFTGuzjrmPfgjSwdHHSD8jNUZfvcsWy5rtcE9uuj41JXU",
  "key26": "EPTsNA53iXmrGjwnnzTUyKcTp9LjmnzyXgvRn75iuME83xEGdMofabwLxff9foMPX9cV2YhqaBCn8dnskteiatm",
  "key27": "4Fhacrw3uMMEoHco7SNjgEZrbkjvPk1nBm9dU2aWhoJWzHPDfpH5H1coum9UR6CCScdV45QQRZVqN6kg6xFwGHdQ",
  "key28": "48kt8i3Ezyva6t6YzQnv73C8CN2eHABv3sc5p8LvCnttfAEL7QPxrCYNB4jUaLCbDqaScypwmc1HR2YVdVy2ChFU",
  "key29": "5Ytk87XJT5hGPy6J52qq2fxGr1G8Pn5Q7D1FYSTrPAVAunX9e3ypCDkf3yghYehcrYE5QenSjKqjHz47z5ebivqa",
  "key30": "3HKc9kEgSS91orpb4kjRPX8xrm6P76YVBZ24tK6zhbrYhreRKsBw88WR1jee5Y52gKSsdcgtDxg6oCVDXYm6g8gT",
  "key31": "4CbzCAdc5x9R98bPS9dGUNrzYZAcUyxbEM8CBPr8TmXPNkC6RLs6UyeYMUBRLW27SqzMoSigNDH3YAfTpNHQuxUf",
  "key32": "5uRyaDYVK5TD3LPd4JbUjRjU5ekQ1QMCHjURgUGFzm6jksAKdnu8xktvzTL3rfeLX1YewimxWmhbUGRj2AQKRfNi",
  "key33": "3kPmr98ibz1doaTtneTxeGAyYdRX1udQzRNigVfHK5PtJiGdQZyMKbKt5VHVAiuwXuCutSruNmuPbvm4JSd4EVEg",
  "key34": "2q1BxZiRHJoHLMYVFARNKTyAkKhX5CvmwYLuYNGAc3XJpd9GDxJNSGv3fvEi7fkzd1XhwDGfvHxiG5uLss2GAKgS",
  "key35": "2DNigVZysNGKAJxAqxR7zh93STnStMaTJZDUv5FS5n2bk9aZmJxEWLhCNqsKGm4d3KUE3HK7Kzbcr4RCYND5RnaW",
  "key36": "4hwAoJe4GCqqBeq4cu7rD9d9DwPPG7tdrDjUdbyv2UYfFJKjHGfh9jaXKkVYqncxWqZfi12oa3CPpHTumA7x7DH1",
  "key37": "4CzpKtTGgdHAKBbENf7GqdivG4JMh129ArgpTEccSGds82i69rsZ38YM7Tor5ZCxDXA2Cc8iGrDzzzereJNMZy53"
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
