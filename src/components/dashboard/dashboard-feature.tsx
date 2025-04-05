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
    "2HBRPJskGvTyUgZW8u6tmtvrEBLQ35t7N8tVrcFu2VDynrBHavpWq1niyY6D5bBPxkoqNyK8oz3FKv8RWphiw6zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ptKsjXoNkJb8UJ5zHSzx1NaySNLVZ2NYMRs2saChjY3fsJ1Caa2st5dZkAsMsr7d8KG5aRWoPaSdRtCTDow2DQ1",
  "key1": "579unTefHxKJqF1sQCxQBiyA3VnQuRRHaN6YUgUH2C64vp3KsToLbFHXXDLQysKk6anXcJn3M92MxBwKpDGYx6sN",
  "key2": "39PQWEoifRQNDSvhRUzFqU45cthbVkShtFK2w6fHuH2GHxUZebKaiWsiracHyNNLAxdT7sM6yfCrEEJixeD2Exmv",
  "key3": "3LV7BcvbXEPJhVmeb2NG6f4ExCfUnzUd9qZwShv88vciiBs4YhbpoEL1to1XjTfdVbfZBWUCzFUeFge37mvS7a22",
  "key4": "2pPzjqGmqNn87QFUkbDTrbjz7aeCkkpvdf9YQdkpNNbyaBAJGNuzi6KNa4NpdEXVex4LHWQZ4gSSB1Y679461Eem",
  "key5": "4JsHKngkWjyjM7kiBnTnnhML6NHCMtE8eTGxZBZJomZkNUG1nUsN3qW9XAUEBp9tmvUubLXn6BQhwcxKRNwL1RjX",
  "key6": "56LLcpMDX32zy7xw3DTh9FkvkzqzUQoUyKMFGURA2KrT6eehbWcZ528HLXzRgiwQEtYoeVA4WBuegLeeRDgRtBDe",
  "key7": "6489nVqso8cbhd3cD8BPSt8QBM3LtrckXrHhXTapqxDY9SNEEpJaJbxgEt3x1Gz4WSJS3wyDbrgsRfBpnSjFWUr4",
  "key8": "2yaBgDHydoTv3rQ9z5GJWhxnE6gSaaKfT5pkVF4QE3w4vggQ367QtQ3VFnrUNnNdfApQ6vmxnTf2xLe4Mkg4xMVP",
  "key9": "4yRLccZXhwG5C2SiyTacJEc5VjBC8SWzGN8R3WPFkcs2fKofhnbnD6yR9LBgxY1y4iUFadczCaj8oQqBGHzUq3bb",
  "key10": "GF8THZA1kCcHQvghtRhp4wHxTs5ZXQXUkFGfH9vYTc1y8TWff5HfxJPNQHZY2E1xbLSo27AyvB4XLVExfLLUmWF",
  "key11": "3TJoGtdqEvZnimSsPThU1ukKaFrFyWTwqmBTUZKcfu1QyGvQT3TuSkbzBFvHjwAzetnGmgNUK6Ckpkz9daWooHjv",
  "key12": "6jqepjHbA88JNxy3WJaziAmXE12JviXvnWSs3Vsps6k1WoZ22FvAjVpucKvEdxj5hbLP7btH9CpXDXqqKYhZWVQ",
  "key13": "4mizURR7kqfKRJ3hZNg7ZMBcEG8EZGchGjeas5XSk3e6oF2Hg1VUZean5QX2RyzAEHiJC28HsTbrdzMqrhSmTMoR",
  "key14": "5riWEfW5JRKAsApFZZhcA6iJrKQyw4gpK1ZEKTRcX1WPKwkRdMLgAyR19uupDtsX8q5W3SvnZLa7rW8DUCD33tpx",
  "key15": "2vRTLQYVbBU9uwoSVorheQ4eFmoTQxtrbuWdVz5F1rVtvsit8A3ESTbYZzqnRKUmgDnW5hvMuSEhbHQMnb1MUrjK",
  "key16": "5SLAbTn5RMHeqgf3zHyZiPqpwwn1AGLNQ2MSNQ9cDGDsR4WFDwy2kk7nmKh81oWYRY27kJ3CXNdzRn9WB1HMH1v7",
  "key17": "5ZhFPRJgMTJDuWmqAFTbsPctYMkNTgLsEzKqv6ZGZ9N2SR25Na6nS8TygUMZqAkLGnsmpHczgdqtihjsGRzyKdf6",
  "key18": "4pgeyJh49L3SswBHxJwxrX84ToaXL4gXttL27Gt7Vp4dW1dsf63Jb4fnXPecwKQYgoAFTb43uZ9REXPX9uKyScz1",
  "key19": "3G8NxgpNMyyG4bsx7odSuA9EjgphrunN6kMyakTGWCKYde35VaTFj44KoASu9X6pmVPYLuxesDyDN6MgmnqFSnQA",
  "key20": "2Ym8BY4Tkzm9NPXWwgEssfyWvc939C5vKQMj2GM6gudiYNyUZdDkEvj7egkBZnJkf8YqBATyxw2tYHqb46jALgBr",
  "key21": "5G6RenZZoD3pSCsM9msrCa8wEt5Srhoq45LCtUAMBjehjYYTvUSp3vUCKnMcvs7RHUYcgxSpFiZQZmwg1st9DfYD",
  "key22": "3iMZ3SMaUxLV7r6wjd1gA6ZrNN1LCv7EQarysexZ67MELpKSjwfCRCrLy7FL3YmDsFYmHC798kcmqx1A9aPyr2oL",
  "key23": "5S5jiSLAHo3t8AN26nyqjfZo48NMW8E5VHefbeKQHrymGiPWW9AQKrNWzgjXbny8d2SMf8tF9FV52mscd2gQt5kM",
  "key24": "4fo3ujmAMepDz2MFSNGxyCJK8P5R1ZNmBwMMyTx923XM7qo26NAHsR9QMHAFC8EmHYwxJvJyL3fwzGDTaJ57kkRE",
  "key25": "5jzVrq3R9QxZWZdxBbSkPLwaZNN62cL5KfEZK6RDNGPe6JtvUfb1hFTASS3WKLNmKV6NaYn8MhZnmx2ydWQ8EfP5",
  "key26": "4ACn1gJ78GapDa1Y21MyTgupcCbrmWPRtm7WR2kFjDtmPw3jvzk2sxkdgG7ARQ2rFvZtzxo9ZqDo9Fbc4YSD5pzP",
  "key27": "bVTbY16kQvsF21FQQyyriXKenbRyx6UrtxqTKc5QvnfoCnJoWPCNRkN1LAcB4TmcCAP3XiifGFA4mGtMGLANhbj",
  "key28": "48HdipWAjMY73JyemymroQYA7BqXiJoi74p2U3go5eJhmNE5Yhx54F5uGm7dxSHC2Kow3HuYnuDhfqUK5S72ZkuM",
  "key29": "5eG2qU1TQ9u5o4TuzCbBb44xmNa5JAk8nJHeRKpJvaLNRK7AnE7d3iLAkVUXin5RFqq46TrMSEyJdK6bp5aoWHip",
  "key30": "2xn5sdCQPZKissHLwHKPyKznnncTtCio4Q5nFir3CqnfJ5bKwuWwoRbiHwU4jpFoAQY3WWNpY1uZQJpjd9jeJhC5",
  "key31": "3f8hnJyQcFTMDVe3FtXZ9fqyi6D1sxpTCNDBpy5fSbgJmyV63sheAP2XoHvixutzpB8s5Ppxif6wiSYcYsWkzxf4",
  "key32": "3poD5Zmi4t4x72RfJju9abE3MxUiVHdpcCV8ks2hT4JQ9g3zegPAFBgYJyeJaaWZg5jtnznsriH48nb11YzBXRiJ",
  "key33": "PECiKT5ksJXDgfix38xffFkBMQH7wPvDgPRkbCg55xfTj1TdWbsvAhNGg9gr5haNuJG2JTzG9yNsou1uPXtNiKv",
  "key34": "3yQdmvn3NpaYX2SnqaHbxcBzNF99p5zoZVoG1J3BoqZ2LNdRgoM4h5XtPSCcZ5shuxfU7txdcxdVJFeKDFQds5Nt",
  "key35": "5vU955dSFmiWydMA3oiRmjovVPyHERHRxmRCtvwH8ooGTKViVCyNetYrKzTsM4Efmq65pWNZn5uePctmx7FgyhnS",
  "key36": "67qtHdN8pM6YNCA3CN6j8iM3Hb8qMTTGBPcwFhGeP6BBdkvt1c2upyg8wHZvYA5aiVDWfe4nBK9cjj8szch5ReAd",
  "key37": "32XuhUpZW3MPsDnzonXqiRBvFG5zhfrzbahhF2bSJEcFyn9b8gDmEQGTTtSs5ubkRDzQXWEDign7TKLnq3Nk6uoZ",
  "key38": "5r1zVyTVSNsSDPZ6bTqgSBN7EPgHKjP6ne59975pCe2FYPr4PykQ3dL1jGv2QeZFNWwRQXzqAqwyBNMH9RSMn2wJ",
  "key39": "23JVgEqn4aG1hVcLqe4ykJkbywaziqpZm7YdBSruPV8MT3gKdtX4eRQY18pyxEeXd1SYFRVnVhR96L2V3m2kLWNF",
  "key40": "5PH2kBdgjMNh3PogGdP7N6YM4aP6v4ZBRd3YeXNPhdiH3AwWa9Qh57nBgXkF4okBZyZpHVrHX8KgChanHF6MuPpR",
  "key41": "frWJ5YztqkqfdnvZqVBBgPfcAeVXRVU1vybPpXncNQaZAgP37soFvAdwRwB4jjiEK3KQfUtxzSbfqLr9ncxFZeM",
  "key42": "2T8T3ZHRrukkF6vohCwtXBk14ujwGcdt4tu4JMhVAxfpMyv6QuYMUhhQ7KoRRRA14gUaaSdzyKyD33y1cR8VYTrJ",
  "key43": "24cF32jgNtMowXU4P3errhbaMng1CokYNMAQz7ch3ABPSmKqy1a3EUrWiRJHbXswH1pAkhvfQwsx8Hs7MYgEVUk6"
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
