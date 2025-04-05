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
    "i7SaQPLBAp15qdEExP9q7kV2vr4TbD4weC2kEd7HcWpWcx8iuY3Mo3Js3JJoyTZEztNJcrVSSQdFck9SsW1Yke3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Za24DhYQU3Ab4svChym619zcpCfZLx5u5e27DqHRPi6d3r8P8W1PdwcFRW7L3mJsTaza7aaqmiQhPo9hokaYsnC",
  "key1": "3AS3SX7BfGSDPQo6rt5QpgWLyBAkZYJVd94Z2TgtFbSNJ4JTtoqwxw7EKLfZLMMahMGEN9g7VDc9A7Wst3GuLLuM",
  "key2": "5Adc2pA17Zgcz3fwjnZapggcPcf58Ue9fUa8TQfWBMRpQAYa4XGdZMPPftzTtBSw9v5RRMp2e4omCC9Ap8JGetEw",
  "key3": "3qWdGaF41GXALJUPGobgKCNUfVBCEHd6HPcdLLxxEZRzGvTMxKPA1zj8tU7h6fbaSEZbvZwAFhENhQ6iH3Nrp4pU",
  "key4": "5wH2i34a5rdx4qub7m4W6bir7znuqsqdUKboBgrjoFBQDwkg7kpiEBEMZk6iBnMsK6xc7zyiSi1dXPGSUzFanGDz",
  "key5": "5ZuqeUmhgRmX8E5FBiDvewomFYEGYdqGdHEGho3NBmMh6TkEtuBhE2hYpqdtj6rcVja2SM3JfPzVptvLJXFXB8Fv",
  "key6": "4N2ck3SknhECwkyorPNK7pKKyP7MKeKVUrKKFTUFWe7GtFbA9z72V1DZ1UeQCqJkdon86x627y4rxjsniEescYQe",
  "key7": "3GuMJPZAVo7coNTPgzrJWTaUJ1QUv4fqMZHA26Ti2u13jFkZ2brJJG9jyKWZKLZ9VaTeArDXpX1HtDhWCFBwoFtj",
  "key8": "5uz7SsiUJYas5qXfy2jC7vWxHW2baSvdPfDdRUrqdj5Xv1jx54x3Vaq16A3Jui11qNVWQeedFBfP24yPBhhdw56K",
  "key9": "2f3vVfryH1Uc8starX7deiVoDuS9twNzewuXjzGaSyTGdqHBM3gVc7pmiNZTandGr8ye2HxDQYFbGrdarVSt7SoJ",
  "key10": "muaD7J89QrYF7GMi2sTx58fcjemtGK4LNfB2k4gb2qcVjnLwCQ2232EY8JpRPPEHsxJLQH9AJppsKdAE7PQZkR3",
  "key11": "2CkHrBrTpba3B7sM4aeRuEaDx7WaNk3KzMUB3h2oe6k5ebe9Xnuk6KdbTKquwX5fe6ChuuikzGw8LiBA8EGHKdhT",
  "key12": "4AhxCYfCtyJd8J8jcBzhbpktugBsZmXm9YBeBjL5WbDK8dpYb6Y8jQomhQXA86zANN1b2p4PkdqsSuG9yQFB9FwY",
  "key13": "5HUg2gnTSpykvKdLAdgHuXp1pA6BrBi8Pci8j8FE3p1noHaPufyPnKQ3491S8P3F1hYnHMZaF8YoX5nxSDeYPGsn",
  "key14": "4xb9Rf3PRNZWG6EWzMxQqvSPrEh76FvC9cZyFt2UCjMx1KNtjXtsQYi394PrCsVQhsWsNAvU9esXztXHJnxc2gtS",
  "key15": "2hu5NCVoiyKKwQcbQkMJqF8fuArXF4M1PHamRcky62BDuGEWhd1kPTrSgYk9anrKox9M9kmRRXX9PUWkifCPdNbJ",
  "key16": "41vbu8RCNVmSoSEyEQFFJWwHXbbzGdLUNovWv4ZAQfe8kPASwKGZ1UAhhUt7Jz7YPVT5pZxBCHjsRZiq8MWPceUM",
  "key17": "4E1JXkZX2oRYiqspnTtYY9RUMR6M1BAnRZhnuNwpzLF6swWU8fncrT4NDv5MXBYAHisifJF3WD3rPcr22wrn7Py2",
  "key18": "58mxDMXtZhuKC5YCRFHkEj3Hucznr8QRWPkP8wp4K1MB1C8axeg8mnnQj6NZ6MZ6QZDgwk56XZSrpSNQuf4DTJVC",
  "key19": "47cdxpPAod1u28BtepmaZDF4JSD2XNdpU3yUR1oYDWNqZh7naynkDKieiG3a3DkVDuLmD2jxwJYRQtwT6NXAHFVU",
  "key20": "64aJ4o6byLkWeE19AQrtqnN4UvDcJUkqvJDSLLcAxncuZM9WZiNtDm2xrDGr2eXmRex2q69SiwKddA45dyjSmB4W",
  "key21": "3yq7NP1cSgQqscQN28fALHw63HKxbXH5349qxi8HVDL9MBiBbjxbeoNokcxHR3Q5RYWhR752tmG5dB1uaJsVYeWz",
  "key22": "J824RcHJBJxECnvaboat3xui3w2Jcu1Q6hunMtiuvMFZbD9qY6enxZ1mZ3KdGQD9LKUYeEXsEQh7df9Hp9GQEDt",
  "key23": "52E8bVW1mZHiXmkibU5DEpvfbsJ7vMXyhgFztG6fyU8LoG21T5zqseU2sikdG5ossXw6ETnvDepuAGPfAST1wpJM",
  "key24": "4LFSUa7N3TnmAFkNk5LAXpoec59WeUnwEBaHwFMRe3U8ghKhHZLpoxS9TF3AqYtuoZhhVe3eybW6edVoXwyD2XeB",
  "key25": "7nct33JisCnFjt4fVKHMXtWqYyHUHHyrS1XdKLWQrDAwBwgwp8xcettsMfjRGAWFLDB3hecDRmWqaGpJJ3JeaFV",
  "key26": "5SRG7jjBfPiBdfrLsN1L6LNyTYdJtJqeWRGbseybSxBRmeDn5KBUvKvR9T74tFUB3ySkHj3JvNkcVHERS6xPHLEm"
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
