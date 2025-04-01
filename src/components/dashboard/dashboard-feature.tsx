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
    "2t2XVnV1g9GwRwp18ptDC4MV3P7PX2ZaDedjc9m3uogmZsoUi1b5q9NVQkw3dgJxtjuEBFJF4tp6XvH77pFtcZM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5amSpqyBAvVE1wbWiBzpjFGih6bSuXPcfmZTDAiJvzhvbuHP8qffUzp1dHKMmsEh4jgcyrrmsxjYjuDsjmJs3LCx",
  "key1": "3uXdzdVEa322sEmYSQhtnfvgsPmtS2sPsUC7o3Yw3r56HpLiNCkQLikLXZMyvFUZKBBesW14XXurafNop5EntVC6",
  "key2": "4GZQT2AkCtQcdaqSsMHVQEFvsDioRQewxVKR54zHLnzQT87XUxrG8UVVMU59rLmz8VKtW3MiHt2EVepVae8cTQ5D",
  "key3": "WR6YyjxKWBW2KAb2LuARUjNfsjJApkse9nETSdQUUsgnPosWtxVESeKpnAQvU6zDzvuBGTmiajbQYh437kkCyHU",
  "key4": "3oPAZ4xTvoHpdpJ8Z6KYuEYnANTXqTPiCMsWpE6hvofw6mFsjuZ3nNNNqYHFGxstMK6g72bgJTSu1ovjsvECDjKb",
  "key5": "4ckR2XyTwzCy8V3mEmd33Ph48PFc2Shc6fqy4v1aSjprxEtqbcz6RnZpdX2tVi5UgFDFyN3k2532SRpgrSaKUp6A",
  "key6": "4DJrmNRSd34M3Y9vLpe6tX3An9ighDGdNKo6SZppBABRkKnqTVBpspUpAyoTFFCvcra1qw4iggzmXQA2rhoAj1WD",
  "key7": "eapXzpCPfnjQyXqDzk1MuBBdVdiZJiZhTKtgaxjAvMCMhLrupbeT7bmsWHB6uHposaMaPAQ6uRj6f6Ey5XdQ5J4",
  "key8": "2fexbqat1ZeozQnx6HJ9d5PVLkcQeYqvbxgEPdz9Dt3YcN9VwHbaB7MXuoHn92FwoU5pd8EuEt6gtrMyLR9sCz6o",
  "key9": "4vvB83eMUEhmczdbCY387skMiYysgc3ZC3v4bayDDkuqsBeZn88aq4QXMy7rz3LKs8mVVXxaNoE2PEU6mPqEuKNG",
  "key10": "4xm7RegfczeUrfryfSbngEVbBxCi7QqaSMwb7syHrWtnQoEjnbWN58vWhtfCsdbXgyKdjnpoYQuHCGPA8QjrTrdL",
  "key11": "2cWLA4fBNg6A3D9qgVbUFCpsWjBetrM4CSsXTjgNaZASCqTMD3UYVDappZC76vbTxGs6b96TqJLbnsqvoyaFGPYA",
  "key12": "4eMRPymUbA378VsC4jM4Br9ij7c917qHpimhSXmpwJH3npch7afW8ki7CifzfDonCuachjeoZJoa7uGH9dPEMMzm",
  "key13": "58WhEFc6MbnmTVEtqduNPooQsRaPHChZJfsXj7mm2HatV1QTLb3Sc3CTYMBxYV4GhD5vHBh19drh7QR8QThb5Q6v",
  "key14": "3R1FD77gLSBKT7DcKDPykQWT9SUAwvM8xDxbCGv59jJrmHJVRwksEkKzAppor7gxnKeyg9DpHQTcycUyrhJS2pAX",
  "key15": "SdwxHxqcRskTMfCQg273ubCWNPj4KBLjYQPA1UjAXR6eNFSibi84SVnEa9ThaBjcWCAqCiLNEBU83TsZsCgpwWL",
  "key16": "2FEUp5U4hd4kSvmct1k1mdw5EqCEKZjVhDXrVv8nFr6jnVMVFirQUFh6z3X9gfdKg5N71mCkNHCU621p8fExHZz1",
  "key17": "2RAe9XffMrmAxRVW3huaYu2NmcT23fKMi2R1pk18kWTupj3HirNhWjqRhJFPj8CBqTiWe4s9fdF8bA1BP1rXkXPi",
  "key18": "W4aZDWaMs9YsBUBGi64KphHgcZLFnsVu4hVvZvzCrcoxNdLTB2AYeaNDdfBNkp9qcs7tvJ8Bsp8nKM8kquPdwx9",
  "key19": "5qn8Fg36SbNKmjSqtGPxzU3HnnWyLoTUittRm691yh4iU7y3tgap1JUgX49jRp3J6CASiMkurDCrjz1c3yFrafzb",
  "key20": "4hw7PUSBYGHbTcthXzs5gQjZvY8Lk4aZpBnJwpjJaxKRqPidUFeVdiL9SdbK51iJSUqyftnYLfCduoyCciuWLfwY",
  "key21": "5u3gYV5hdqDWbzxUdJHFa98pFcLDCTkRBv1SrwGif6F3jx3CQqRN9PoceKUCyqTAuP3eJkxyasg7CwzQ1Lv7oKyy",
  "key22": "4eRGXNAcsyVhitcHsDVYUAtdQNw9kKbFv3EGCd66mS9ZqGt79qZKiZSnFAs7HApGp76ZxKTeV4FdbLzCW4QcwVgC",
  "key23": "3QWcRnsNBVVcRfvAufyyfaSafNA7JXYSA9kg9gmqfku2qTFPjrY6Uba6eKidjTL4mpsDGbcWRP6mMg3VrMRjVRxJ",
  "key24": "2ZTHkVuaeXmuN6SDjvSVFLX6Bk4bPVVtsvPs1DyjbZaRgz5gVkJ7Rga1hdmV1szs2cSsH4GK5EkPkfWL93gCCJus",
  "key25": "121rdDPhVoPw3L3h21eNq5VA6fQSVJQbAMhkGyu5bFmH4emZB53DxMSKoHgW29ApBMCGzeEmBQHPapC6hWm3hy7X",
  "key26": "4NamfUrbc9RM7aHc1GKJi8hKa9jcdohgVNK1rAnK2oUR5y25PnTHbGgjRGJWwFoXC46BDGdFi3VLyM13MVRWo41t",
  "key27": "5q5cTpftgTm6dcCZk2J3iDLc9mvNggq5pxYuNwhX266Wjgybs3iDfLHyTWbMdS9p4zE8BrdDWAshLLzgcJXoUxEC",
  "key28": "VDtLw6WhVTErV7JRegJp45wcMcmrjF2v5akFGi2wekq6oa5yijoaYCNLvDqehQrm42knJ4kZfLyAoNJ9AFnPQub"
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
