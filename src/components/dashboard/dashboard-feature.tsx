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
    "z3WdFqouojRtguiGQnvkABdASDrafd1CxMW7BwafxoVn8R6sTKMKwFo7Q9KapoVMG3wsGeJvjomKszG2ocJNaQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TjYbTSA22UGb7rhxRHEsdxbGsDQpPi8eA9e9DdHnogpcGKrqR79G212VbcKeJfuBgse4fpeHUtds8fZG8pUWjmL",
  "key1": "5ELGBBnZWJUJ7m11nvu2W6BKJ2ey3rHjdLQxWHRojcx7wJXk7DXPmLv5DjDYehJRkEWvuHZCVegMFmNuGJTHf8Yk",
  "key2": "5HdxLf8SJNoAZdCmLkDBScxMRZVc2MGpqjwdC7ugQnFgJUn3vwD4ZXCdms5Cay7VH3R9W2zSeFQUKgHQ1QF2W2Gw",
  "key3": "4KZH6xm4WH5x7DySNUwZeTs1HJQMbpN7bGV7M4PaeiwaLCjbG7uXELj9MWjWchVnSNE6qyi1CFoJWoTyZKhvEJdU",
  "key4": "27LeCLZQ1dBPQLBh9j4B1QSc14k9663fRGvpZFipMbEMSHritreU1PsRDQb4uSfQ5iu8fbuC81aB2nkL6TKVvg7K",
  "key5": "31b9i3PjRdnPEb9CJseK1uCPj2NjxUW2vGfzw2bgnATL78U3HXWGYzyHB2iWgvYrE8SehEdV8onnnSSwg4JL26Dr",
  "key6": "4N8bmH5vvKaP48mXdhmCcRaxeZRge8QYNDx13eQXBM9awctEqq8Y9ytxCVgWiNBS8oTusNSB9wNJCRWG9R7eMSyj",
  "key7": "iChuh4KLQfaKJYQbwF5tjVDHwZBwYZSgEHExvhLfpJoZxsCVX1mwgneohK2SXpEBc9S5oVFqXaxRacbwEs86TYB",
  "key8": "cgmys3jW7xt9Tq83gw7kNitrKBzfYHY1Cpj4UvmeUjNUidUtw1yWkUiv52nVCQY28dREhqhKyWVZiWpeUVj5qx3",
  "key9": "3uaycLGemZsHkEJUjw1Lb7MU7jjE9bWjknQK3mSewJT9pCCJu9eEgrhBg9K4x6SowxmHVmrYPouGq11MG1QfKUBM",
  "key10": "3Pqf1Z5NgeGJT2pfH89Ue7t1jaBGaZiWv7u97QvtSS86UHR2BLAkGM5fc3GpCWFXUTrkyWnXbpRQg17sthDJGgC6",
  "key11": "37ewcK5i1XPix4Hu7WxD8DaxjD6zdmhUeozh32uyaAeyT518phC2mUVu5j5CUN6QQbUBkqXSGSWc9u8K48NdkPMX",
  "key12": "547vwbrKURBpmeiWZZGiMC3fdv32vtvZctsSFbZNu3qEopaMYcxmauMuTxJLbAAtbLdYDCfLNwAGqb5T1PLD46L9",
  "key13": "225w8fUKt1bKhztbEx2VdFnqzNdCCQUKjQrvWFGMkUCGpR7rp8HYJQdPYZr3KBLoZca9Yyenr7McFCGFKC1kA2aZ",
  "key14": "5mKRkJweTuFiadoadVTWTJMdpzf6rE3JT1j9YXv5azJiDA3nBgdbvvBpxXmtiijCDdnPk8JP2Zm8pgYdfTBiMG5B",
  "key15": "57jXxfF4GUnnU6wpiTHxKqTCiuVpBccfvSy8j4bRPjpdgvbqv5BLy3RozW8XoQBV3T9vXCusCGRwUAi2CygTPfwr",
  "key16": "5PQrcMGS4AhQPLcWmJVsuXYVNDwiS9RN1gM4e9zDSNPfG54wfvxs6w9r8PZ2nZsf5tEJ3fxHrWb8dbNpJoP4ZH6x",
  "key17": "Shwa7zG9rbRr4tH3J77BnxaNQrRfv7Zvgvjd3ityLsPTdFkzd2ffopQGANLfW2hPzMT5kXNYezokL5aJ77EnuAG",
  "key18": "4sDE5K7fR8xGXWXyCXg96c9MSGDDEEPdCbVZb74EsYQjqqDuyPmZGxnuQMyfPexL7stbhmdSCcVCjFYtT5pDPfBB",
  "key19": "5dGJ9cH3WbABhUAfSEemKTEwFCs7YVmwgk4rz2SRoQhPUs7YxdQsnuowMc8CAQg726CgpWFTXNWNT61WZwSkWS4P",
  "key20": "5avXKSKpiGxzL5eT3etG9PfMNNGGzozHDe8B6K81cNK3MGgWMxS2QEqDUsepo7P3FKGLtpej63Y4aTrxtWcAPWnp",
  "key21": "3LQAde7DMjACight3bcUzUiAkTuvgRdqZSjU1rhYQiK8zCN3cknCkFjUpHTNTN1H3dkhd3Gr4U9491Z9c2JpBQmo",
  "key22": "KUo3p3ZEVJpckCeU4CmTFu6cDPunBHkXSFTAmuLGqDgbUcY55Nrnhump48B7gbm8T9nwsrEZWseQ2h95zBqTqbk",
  "key23": "5Fd7aA4FgUEkjCRy1QLyF8SQK4jTvvKB9Qo2soXeb6xyXFH1maV8HA9p4QUjauerDiJtv5gecje1ziGQgpMsAyps",
  "key24": "Gbypwf2a6f2G5Mbxtx8NG82nWnj4PdErsBisDT9uxuRT2Wa6Vj1ZZHvgK5bpqekKJK8qfYqnj3kfsoW5qMAG5HK",
  "key25": "2jDVhoPsoJofUFKDkrGbwb6Y8rERMVHTRWbcz8ZNnZ5yQPiY6qsQwKJEQb75jXTfQ7jzESUMYSmTLBoL7EBGbNZD",
  "key26": "V2hPHQtqTMm1tdQH8jguDpXJftrfB57d7aGJzEdR8LpaQduxh9eQGBgKJ2SbezVdjwpay55L39d3jeuCDuiWrtk",
  "key27": "5GDTd3Z2gh1mnQeNJgNR3NhjTkDvPrdnYounQmmuamz5W6LV2Et33FpRKuAhftjkfpwAfhdZhMLWVQS2cxM9KCmA",
  "key28": "tHoZXJQW7aHcZTZNg1yLjPnbWbGD2KKLH5tcHczXKMsXYDScFFiaAjWejVoxbubDSzHWopbJkmcAQvMmrU5iGE7",
  "key29": "4R5AWMn3DDnWE8Y3xL6fhtM7KV59SCgLMw1ntFMJTLHLj3bRibg2oxvjMY9AHb3Q9meYsukwsqs2o3EzKCvQq7py",
  "key30": "2YaMFfnmZRMJMwgBqJXxokjTqingipvqy5M1zvrP6uyGwgUkgz3e3AmzDM6dQD8QZP9kPwRGMmMEiuXr3REBbG1a",
  "key31": "4fZw1mee5ykw73hcbyTWXgUsrb849MC6GN7A2fRoegXQfdZDzMHnafM2nztFgCmjFUGTkEKbd61iuBS6bf3Lpb6M",
  "key32": "3dLRHRuif7e47yCYatkEnhWDvtZ9f6ZeUTC9a9VERrm4dVmcLUGCQge5yHixuAqGYrwLJvpbyBbt8L4v5oMSK836"
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
