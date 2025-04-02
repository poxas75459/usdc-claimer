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
    "5Hvwg7sDqXSYRkeWoUdkDrVcdbkTZjur6wji48MoDtejewBfan9aUHVfQ35uRxmD2jJoZ7uo8JGMqVDXQ3NJGD2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mwn64ib3UvrDj3nXLhBHVUPGREKQcoTZHVGm7FXCTYtjNUM2ZzbimttSKXXtyZmRrBqL2AAicA4NTuHJztoEHkY",
  "key1": "5jtTohnCK4pVLStVcnL3nrc6H2i5ruco6Po8YmiHLHkzxED3CPi6SD4aJYugVev1qoEvnW5CmKxfxf3TPb5gAneL",
  "key2": "3vQnApRDaupueTQ7j6zH51okhnoFbVxG9yRuxDimUt65Cxnb4DT2XCWCRs1G65G2khLBzmEpxk8pBn8C5fBpEJN4",
  "key3": "33VxZjkDApkm7yoTMzmqtuFNWKcFRZzsq18vGtxnRJQEE3CVez9wQwiyGPZYxTvdmq2MzvqDvf3LtRPUhYYCBsbn",
  "key4": "2VGkZ379dNVSLNKShm9wVTXz4zV8JX6JgW8sPBXbKmYibHwEqSGwLMMc8FFJ8LR5FZHYVHgrwNvmekKE33q1QnRr",
  "key5": "FUiwwAJvD9GPVQL2sAwcCbDDfjMagiYZEF2y97wYq8dsPfDoyCKiTzCheXtThMgYr8nnew6Gd1JtBT8TEQpM3dC",
  "key6": "35nWWxYtheGoALoL1h24DiY12hzFvqd6gAhEmkPgRuBLE6bEVhLjNXLqhHYABKrwNLs9UEhdbDcT2Td58kux7h7P",
  "key7": "bG9FNPkeCXt9B82U2dTgEFSdYhBiiqiv4pwgEu8sCVygsrXBHnHuJNAhmD8wPG3B4agyiWP7eb8tbgvUUitaAkW",
  "key8": "UBFfVmEzwD9vxA68LpQWEJFhvkn94py1KTs3w4fNkGSGDxwzNrG9ukc9DTFShwJRouqbxbfU3ncq4zCaQUeXMTa",
  "key9": "2BDMa3LHWUtuviS9sTQCTkxuccR4TwAcMXzQgtottCXTn2Fs1t4hxQDrWMrYh7ZuatP65x3xyRBPoSM4GBnFEaTk",
  "key10": "47fVbUP7DjaStHcGRGuCJiqFR4FDSb4Mv5ZmgbM3aoZjQYC8A97yVA1eTv7JkZ8Zj93ejA9DjNa2TDMQGAaM5h4y",
  "key11": "352omJpi5Dvz4kJUtzJRmyRERtiuLYuW8mzRRnV9chUT1ZpLp3WNR4hmsvtYVsbM6XeS7ACpBPDTGY2NtTPXhJd1",
  "key12": "3yF9L291Wd8hj1BaXuqCEstHewW2gT9d4xCNj33NtXKq92pK3wuJ5zEoMyacGjgWEd1xCAyX9NGhZvSXJCzskM2h",
  "key13": "5K9M7AT3yZWkVJDnnDQXVw5efXJnzvSokSHci8V3qXEUAarLcQjBFeWL38ZJY1gtFjZbCSkBdRmiuQi2U58ZwMZu",
  "key14": "4d7p6JkmcCpdpDkXmKp93kN6gEtEB2qNiockZamiiYq19kiGB6CLo87zTb66j3H92S2s7bLcg3QgRbTNNZdcb2ey",
  "key15": "5xph48C3ykPFt6M33HGurdn9WHczL9Bnf6FAseha1hDeww17RLZKEQt5G7Xcdxhdfm5fgPZ6XvEgpiv2aS8twSWs",
  "key16": "64PXcokrK2rtvCm2k8uDqyYuFqkrEMMzdYDypFMNNMcvWS8oR4wssPawKNDGSX9xR5eWm6JWiMZ652zffeTFRh6C",
  "key17": "5xtUQ6iZJwdb23tQyDnfdawWMw5LDMvz11Zf86igRWyRfa14S9h4jT72xwHBAuqKDaQP2dnRrifVanTuweDN4NvT",
  "key18": "3cJxdf7NLZawPsibRqBoUdQQmdsQXabwsGppz6D6mHoacuACkfvTZgfUGqHup4hHr5ZZckvacPgX4K5xDaMQp1pN",
  "key19": "5Gz9CbPzTwpn3W2qZ3pHsSGYRXXxX5Fq94GrAJad7T6QseEvUEWTLX3j9w3HXx6N8vDpprw86cbXsamygXLw4whX",
  "key20": "2q1fDPjxowBefhB8AbxfvDpvGNcvsFcLpvC2Ckk4ZXc4Dbb4ZK4w2AHdfnobQdZ6hwqGKT9n9t1ecASe4qQfm8t4",
  "key21": "4jXuWUNbhqQMcvJ1apLV4uB95nx4Dsb3MnkZ4tAHrUe3PtZHBCsp1uSVXq4ksXzYizZPeBfvQ9sJMtGBYsRBexoS",
  "key22": "556aK5HwoVgj1AWR2m3RbmpUBtxMkMJMi76EVyDsm3Gvy6Ugto5JFDGvPi5SDEoMNSHmUW6yvFiuoANxTu5zPK32",
  "key23": "31eNaQVYstgRkm6PbCRijkbxPhSvMWXvhajjwMd16h1uv8LzKMrek5Si5j1soi9F9iH8owTpMrQyy8VwyMQVJfkQ",
  "key24": "3TsEGMv7sqaUop9pwdmMXH4cSpEzn2eAVAv66YxvLZSXtbkU2oLXiHsSgGPjpBX6sZ8T8Ak1JoConHRoowqCGoxW",
  "key25": "54oVME6fTDP96W2AMGKNJtMQk4FbbarUML5jETe5mT4k1MH28WxZCnXhkv1shBNk9Wv55YsYuawxM5Tzu8NfXRP2",
  "key26": "2t8p11DBtgfVWxvchhrVPoyoJMDfV7BZ6i9DjEDkSsx1TYbcZYoVdRBuPr3tx7FeLFcwRiEwWn5w3LJTyA18jKnF",
  "key27": "33nNvg5NQ4Nnobukq6mxkSPDRnm1EhJjecyPQV3yJM35UncHkdj5cE4eckm2zb1XPiBJLUhVW8FadSE1poycjswC",
  "key28": "3Z38q4H9wshUyHR6pk2eafMAWHMZgprwwPRRmA1nDWntLMT2DAa65TCcQzQXrPkmJ7XkaYzhoXx864KjCzUbMqWg",
  "key29": "tutuoGM5ePbVoLN2vA1cFCUdYvwvXqX5HCUjnaa4ktcRjgrXSJyGok516dPiAmBHoJVzkLyuV22NaD4Yz7EuzMf",
  "key30": "P5qZFGeaD5hb3ZNcbx2dd2oAMrPYdc2fj3tgirVaZ79jB6mvirakziWbzCoUxm9EgLAAgyiZNyxnPmcpXQgViVk",
  "key31": "2CQXdkT5MqQoKMictVhMNfgxtLjBxBMToAtaKkBhLeMhAmjgVmDJUnvpkgHFx2GXuCoLPriYc9rq6YVtzA2AhiTv",
  "key32": "3BDxSMdnuwaq7wXrGBeEsaJ8GzCtUJd64H925vAjFJhgdJAETDFPb8fbrm5ojh5tYPiqMHWURJoqneVM17AgCBW4"
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
