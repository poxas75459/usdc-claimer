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
    "4q5iRUHBL8mtuHkzp7Tczpw13AyCEbZPdEraL19YkkE73a6KmvFaJ1hDoXonryfwbX6p8NaCM5ZcDEt3Wt2aonZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vzZ33a61Nuu5E1brzLFxU8mhrmcXyxjsEzTQekmBjpX5RQPrAbzcXLbzVUr4JRuo5dV7yPku6aPY9YoeF7eBRyX",
  "key1": "4rmFNTvpJkYLdenjNmNBpeLRv9x2zDpktsJxtqEB16LVJUtiXpQBss2igiq3wb24q697dufUST8BCs7uTppGEazm",
  "key2": "cWgG9tYtpc2pS361Tt9h9ctPALvVG3Hgk2xLYuy2svsBr3D5QnCW71ovTKFK1qyerFxMBVhjnvyBECjTS92nh62",
  "key3": "3Kur4x4VLCEwgJUKYPmXoTgukTbDPM29j4Sq79KJMBfBThta5LHnWgVXqaGMLsAiGyhF9HNvmiw4uWhN6Bzs6kuz",
  "key4": "33e8QfvoYXZpo2RJNsgotaoe4dqREXjk9YqG4ooEEv6xRUtp9Dt3GxkPhhA5awUzjtkiPHRFPuaxevHQ2nmtxYYH",
  "key5": "5vSfz3RJfZYjWovt3XirrWS3fdNZCh5DWpEppAfgVYWD7yRcJdKSQqT13ooRHgkoqK3Sj1qvQens3VwFn4ZDqdv7",
  "key6": "4qrw1g7yd7eMVYTMKURBtbpk1y8LGCayFRuveJuzMuRP1XNmY5E3bJGgyojuMCEcwj77K8Ti2SxzW4CVEPTtSpsc",
  "key7": "5BRY1VSjSuCfgLwkpABMGDHUiYrq9gK1zmRbkBxw5K1zgbzmLsTdiQbqCzX5xwWF5MZdD3iW53NcxVR29hmE9Yft",
  "key8": "3CtmgjDLhPsPqXQ3xE1qnrBDCipkGLUPtX3csTZZ6K159Da2vzjtgQk8W2K9eAWbdPcLmpQTRAGiRFEhyHvvGqh7",
  "key9": "2w9gJhRLyxBDnnDumezchHCskksoissAGD6egaVM1fiDfA5GLvZ7mGE7NQg9P2SWPSUX6Cv9xuyNnjikbwRFy6zE",
  "key10": "5VwVpTE2noXEfSBDTCBbpiuJM9JVqZkBZHtMs4fuqqPmrSwUpseDYcrGd5fAnmBQsQt22h1hgSbgGqupiA7SQoWG",
  "key11": "2rzPctp2qAKerk9CvF8xoz97QMGubtBtDyUMhVSXmTFZVF9CntBwuJzHg2trPyAtXLWFgKQP8VjYoxBjEeQFc6PU",
  "key12": "WJFoNrHh6jojPSjvQ49WwqHLF28PMTLcP5LrBDzSQphdu7SFeaJhmV9BQ7TQGc9NEweoxURdhPQP1AaqHepzw16",
  "key13": "Xmfb2oZjZVm24iYdfSjhsR6Uqbw3T3XTaGTH8sNRrgy6ky5jWRHUWut7NKZEsa1zbxVDYW66byMcaGqc92gN1Q4",
  "key14": "2rdyaqagrnujN4kfcYMGgCGmyu2ePErVDFtTiXGZm17fRW4avNEyZmv7G8xtVfMAmvqpdDoYofDrykuCip4eWJix",
  "key15": "2sdCRtghJhQVEuJ4QwaR6aMw2SEPZ9v47R6RsCoXAkPvixj6y3daQYW68oGeA5pRzhyxcAx8dhZnbrZA9EmYVUXQ",
  "key16": "4MBySVvNSipesCnwir6m3xxSkXT7HAQoMdpv1pwiaajFcnq6pS9VDSbGaGymbdHckVnF5LF8H56J1n5jnBrSXjA8",
  "key17": "3ePAUmaLKmgCfcKr4hZstHX1ckqpFjh6vogqGfBR7xAHK9TFevh4nwSBeLiLaTL1C3oa8KEeAHQaXW3Yvi3vKK8G",
  "key18": "5HwBLnwZAdykCd7pf82pxxMYEop3KUEQzG5x9GmBrKVqxoue5CiTcZ82Ttn5Km1svvGaxPXWPzD9JVJv17Q6x6qk",
  "key19": "ukhEd7D2zc3qdXTE4d7MUGps4YDVe773vzqMm9cSQ8x5gYrCPWkFHJwGpT4UrGdkwr6KHMcF5D1YVng15w1XW8J",
  "key20": "2Ute7K8ZUgYczmfXaCG1WPwchxo8uCcuZkAkPXud969WTFx2DkqhRqqkoQuu1y13h1movZGFKKhjQ8VunqKz9iUm",
  "key21": "3QzZZF9ua6GsyzLhPFqy9eHEcqdt6FWtYQgK5LEefqtzDCkt1TiBy6Bax9wpmg2tiV49TdKPz9cffp3As4UGZVfL",
  "key22": "fXLiTwtFDp64tkm4a3TSCvnvVgSagz8rS5ZpmdH9dRAkoi3boWZfk1ACK2xgnqQAYp55gjhGDCqTbKaDURvTz94",
  "key23": "26KWwByCGuUpQtswJ834PcKvrHvAUajXgdSDHBSycntwZ8fSGZTR1n8AuYUSnFSFi2HRpApkANYYiUfqFdgad3oM",
  "key24": "euBhG4fKCCx4TgexoWtaZupcayPEFoC1YwZBkQENLsk8ZVHecejKH519Jus9nsPxpvPUwnXQAnKCr5bELEZ2Dgm",
  "key25": "2QSDg7Q7SfifnRLcN8nX3UtBvSs9ea59qZu1npdpD4qxwzjC8heYLvkY949Y77Aputke1nrjkphes5QoowvvAfkU",
  "key26": "2GQDJiaUWd6NFABgQrYByt4V5BtaRBYyNj9zVppS3h6iNTUJe427sskyLL89KwTNG58ZWxkqrxFfh4zXCpGJR5A9",
  "key27": "3cBaFtVutYWjGJwXrJbYsBKVWLXV5SQTwYLs2meixdJc3e3gNqJgW8hrzj3fZmpuyf42JcxK3E94yGARFo573Fdj",
  "key28": "3Y14v8soQnVJQxNy1q6vYo1qTC1ezVgcxa5fQwiU1b5Xr9EFsVKxGZbuiyvZTUqgQWrmML46YYZQnGnPFvQwcgNU",
  "key29": "2RRtjhuTQeH7ev7GNgx3KyMkQHUmSmy5YmB4TzEzsQ4tV9TuFW24aPf7QM7smuzgYub3CLPcbiM1X4i6jEhNnYBb",
  "key30": "3Z9ey2MyBoay75mQ84aKF3uTcKGFqckd84G8afoPfz9h3oa3tWPeoTj2qztwAbzCHGDhm2RBnacTMoyB5t7tJ9PH",
  "key31": "3Sh8NW4SyVW2njbqCSn2czX97yVgNtLVX5ZbTQL6T8qF2aDujYgvNCJYWyBjrtppiA26hkPotrnMnQi5bRF3LqAU",
  "key32": "zRh516DrBLtKDpDL2xgePeXMVEYfpfSSFpaveB7LiagZdWNrjm7LKEkPj2c4MeA8X1JG9t5LfyjFzNY63ezfuK1",
  "key33": "5dP9mcECv8DkPrEmujGUSH5xCabN2j436xGuf915W7t4tofWiNQDVG9u8vkRfdMUkQN1N2xcKayKV9bfmrvijgPx"
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
