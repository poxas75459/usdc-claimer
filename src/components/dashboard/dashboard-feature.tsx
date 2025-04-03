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
    "Lvd9d1K9sCmWBttTadXKx4NcXbfv4bkEbwswdzkQLpArf4R71va4hd22QRBYJmhk1J3aN1uxgrjeGEMCq5vf4vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43m8XsxBQbpf21zs5puBf57DXZoJBHnspCcpe29cSCnDH7uW8N3kc51s298NTeVTZLKWyhLNe7iMHnT4dTZzEnxt",
  "key1": "3T1taxr1FtcttPMeD3wPhbixHWfnbv82tYgKN6wSYdjVqMxcBuVJWSNMY4cqWjZccXm5wojn7EavbqwrkfqXWJgy",
  "key2": "5waFzFVsHDdDqCurE6MB8FrQU6zevS5dHs3yzWAgF6qr9uvR3zZFnh1GUjGWWmuKAFEitvJb7FEov4mmaeT5Kjt4",
  "key3": "2r74tmqPzSPyawamKYmq21PNMn6Qz8Aw2WomJMgP4npDQUS2N7Yb7LipfwXQVZPm3c49VPCk2wEiCNbpf75cBhub",
  "key4": "2Bs4tjgY5qATanzyndhnFrmdNvMELDRuuX1aDN9eYT6V6VqPxsAJYCxkMWyiYE3ofLVFE7Xrwy6JwjgjA8HUHcYC",
  "key5": "4Nj79jKek1zFyJso3zsJ5a9DNcuHKby2vngnChZrxXiVLudHXT1w4iCq6Xg2eS1C7jQ7z3L32tjZSnaqW995tTUh",
  "key6": "5hrVrda2eTUb7KqaW4ybS9eHow24g9sfnnbSUE9LRAECc8K5dvpLg8q74zN5R7YbYhwpXrjvKCvgc7D8NLfkj4sD",
  "key7": "2k8E2R8rEA8yZeMtxvmXxvgqZAtV39qJAvp5Dvru1F2f5KPVbHtdwjWKJvGQJN17dsUPXyRM7ypBiP8kKw7D1RyH",
  "key8": "43W5HU3mLivUKeHFAJFPQunUK6SrzQyPc6WwJch1DQPkfmm37k5UgaFmaMQAxoVXxXk9pjGMcMR3Hbzq61A4JuYP",
  "key9": "4crS1xTcDQvhCiQ7V12JJusb44iZidpnLnuAbyCozhXnLCBevWX8pRkPYnnmeqA8JpYmvqybk2zZr8jjrcnSDMPo",
  "key10": "4EMWX1Pu5TZ8ggAAU5v4BDHBPkVmuUdCLs8orbsyXff9u54kxBTni1ovdioyhhQDyS7ciDkSTZA4JgvmoTD9dHuQ",
  "key11": "42fQVVhnhUUJei1XSoVTJCwYGKdCS3iYGAXwvQ4mB57CwvDyjMV534Qcjn2sMM1KvWQrwaZmWhC6DTMtiB3ny5gG",
  "key12": "QJ9WANowGgtBudNc2ESch9UtEuDU8RoXCKSWzuZJvt1ek6RzuRY5BfJQJ7mR4bU1K2SeqLao2bvqYUwo9EZKCQC",
  "key13": "3nFZmH7n4u2NfqD2NCJsijmjiXBEH2hRL9mQeYP6cz35MZov8tSQr9SktMmBHBk31JS1Zg3kCj4dxX26PgzhyZyR",
  "key14": "4QTUdYxmnWH8ARy4tnVXxY9beXfVivrJnkgmGt4GTZ1ZLQ1Q2BpypDx8YBhhsWHbosVg4gUbMeauVV8ujWfDE1or",
  "key15": "633kbFrB241sRffYkaoLDGGHFaiEyck7TeiFWtrovWxgjkEsiBKYtR9uGKSF5RD5eJp9CB4hpTwBVVh3Y3q5eq8a",
  "key16": "5yeQkn6FDUTpFJVSe79JZs9uobhe2TsP3cYunkMGhEK5EvHxzV7vAguyHBcDcK98URVDBFdLTqFUXDWf78tj6dxQ",
  "key17": "59UGqkLR7EXd43KekH3jmpst8jVqHip72gjGBRJ7VY12mEm1t8WLGJqWNbZSjhpnf1D4CtnUUwPPdiyzdFe4v4VQ",
  "key18": "PP5Ugp4U4YtUQmtpquRsQvRQTJTjXqFY5kTyEaaFdg3wiabn9UA4HMf8zitZH2dWLgE7rd6w2m6ZrcxL1DHKTeP",
  "key19": "5EoZogfwtceQjGeVs5zS6j62t8Z2pjR6U5GgpjEvtCtDgkKz9s4RQFiwRMD753fWLoWGPiVuSFBzihigJVP4P48W",
  "key20": "2cJo4MU1kwhG8biapQucxZ5xMTCHtx8kHqo8iheTtBTADGJQSAHt9WV6hMZrXxVm1QF1W4Amfn7mrHMpZTyWSnRa",
  "key21": "3k6irH686Hcjb9rMWGyiEs7KhyNqYgjRFxMBacmD3cdUGZXBEJpowNh6vXRSAGsUsyy5nWZxqE9FxLgzbHFq8M3h",
  "key22": "319NS56B7bPwqakNPru2AHhZcFLDSQSg3RFjY2cqvmL99ViYroXSJxDWkPn9Eq65J1whvknPQZdT5d7iFnRgzB9o",
  "key23": "5ibudUD8L17EYz34AzsTUUqZgRwUCPUFKnZjzU85VScVgX3y5R8GbWnwriZnE3PU7dyiYUNwWC8tYN7ddDd6t8ER",
  "key24": "58KpuTM8G6SXsYZmfn12BYQZGpxztmXy1AJPmKfXTy9fWKf28cQfqhDqXT9pbtghhVjN7fVQniAJvrV71Fu4iDAz",
  "key25": "46xCWqwGH6DBZyhJMUqtAwWyRx2G9uPrGwYF1AX2rr3r6LNzXy9KFUSuYrbrUrZQdhgqPobmTcyJeZ6m5q4qa617",
  "key26": "23Vg1E75N3RHzzgfWV3G8ERE6YgPu5UAwdwzR5Cd4P2ck7J8p1gjpGzQPgySvvcLGyCYwPCB4mMaBf7ybzCBPk2M",
  "key27": "4JQk5HuFXgRxsoewg1KTRjg23f62QNqwqbeooM5hFXkeqPtWnqcH4uvB1RGgfj4DAQbNHWDZDdUxKS4py5aJmatY",
  "key28": "2t62MEHBo2VG3PDwEXLgudKu9gwM9L5kV86ogaBSFbM99ZzkALSKzduEg3mPtGXMttM2YenD7mXa5PAEXWfs3UxC",
  "key29": "2AsEx8vBWvcByPophtHETwysuPv8ZmMsUQFkDRgdbGxt14xedS9Dw9qe8tZi5diojZMKWmVDATqFA5Y7P295VifF",
  "key30": "5oLCk7BPRVWsanKrHkDTBUpYxqgdxaxNExpV49ak6Sd8p2D7XuGSvSf4NnHpxeF4dyC1Kh8zykfZiBAJJJeS3iq5",
  "key31": "5k1Q1mrQmFc1orHpY2gkP9ViV7pDWwZGLBjfqVCwfAJnimZLCRu8jvdG4WZPMjcLwKWfD6wAALwxjePiBbSL1LH7",
  "key32": "5uHTi3LCwCWKj28UHzCQ5xMwYtvHA2aL9HhN2ebrrue3fyK1iCyfEQp17U7q5ax6i3BTCBzrpcUqUAKB5qqg4zh3",
  "key33": "4yEXKWM5rvfgqybKMzQE5NLUP2JVPmvw2iHwdcyqHq4KKUY5zV4R6LKL9Af7LbaahFVyStSnrab4WYXAk3a12yDW",
  "key34": "2KRnL12RuvdHzadJ98UDXKG94gZDi2AGYKBsCPkYgDodXpdXdAUsUFEMpf6xN13oCtZqJAUDH6qMim1hGZ1eZJum",
  "key35": "F72JU3k84i4J746q6ebXHNkbTEATUPPBeG4BcET16nEWmmUkE3389wxUVAA2ZkVuSL3xzsdYUrXfBRtvG7mGjhD",
  "key36": "3hVidXHVz6y7Ec7Mjp2B9gRG8XL1LqhKBxNMGrsnN2zXhAUdj1Cp93Y2yxfoxGX6qS1d1Hh5JAsU3qxMAYb7mGeA",
  "key37": "55w8VyhwW5nvhqvgzA9v7FJxiX2sYTZpCPDiprd3gARgjsmSRJDA5WS8sSAE8KX1Mg8W1xPZTbfXnHrFA94de75B",
  "key38": "Ugdzk1ssVt33v4UTmvfBcre9PeXsar2dt3A3C6Dq4CCAR3L214RYBKU7vxkEpdo9M8GGXU2B9b1H6f49pqDrgdb",
  "key39": "4yxgeg1UMnq86qbv2mWkkx8NXsrbDenbjm91FhfXymRQ7eJhP4qR1NW9W4ssFRptjyJQ83vdpLcVTXnmGjGQNSVa",
  "key40": "58re7GgZmtWTEuCyTaE5CLqjgp5ijdnEQAEv3hiBcrH4Rm3gtg8fXBYqW5Sg4UGcdf3ifBG2DAjEPMLmaXCcivEc",
  "key41": "3yHZ6nB1f3jqAH7Mf2BxJ8LAhTeFNCYCMYNZLYya6rVAoNepJgff5JT8JK6Jw3vcM9qMonxdrr7bu9Vjgnq4nLvB",
  "key42": "yTLR2sAEsEthUVfPcsYksHaTJPUBfrcCZ2Cv51wjYNA7UA1VNmb13fW3TnzgbSx7s69UB2KTgQXkPjJECr8CowR"
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
