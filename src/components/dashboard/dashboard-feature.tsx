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
    "4bHAy4ivE2ZU9skEnYweVkKKS3CGiJS7pKnHHL95enSXy3oFoyDahyHd7fBrWDrM55EhBcPVFBe5jEJnYEFb3cLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55TayarJTcmDjSXK1TWiL1htXar9aTqxzqqwjXZgZFv2LJdF8QFZhSRsPhJC6zgMx5yo1gfyhDpJLWsHbjdAH3zQ",
  "key1": "3piXP7xkPzT49QcoxHhp7rNmsJAYUg2efqqcEsAcAnSTsnMtXA3GsnrjJpXXjE3npwrScQjEjjCTfFbg1Sx2oBjn",
  "key2": "56fEvWVofUkN7uGiMw1Sz74hdEnXPU1rDiUN9bTs8AEPmY5pndcaGShj77r5c2XnptX8nRsLwRycvBsN3oZHZofx",
  "key3": "2rV6FNRzjmmSds3pV4VDHxufuYMU3UmVwjbC4nYuaHRmPE7WwdPpXjorDpVyj3T5s5rfMCjM9YFrzzrTfSco7mNm",
  "key4": "3yXmhm1hKfsNyePu4bWJnwqsDtGWcNXGio2MjqF9GAVZ3W39EUaegX8iC3DjK42roJbHn12uk8aWQKZMY2kDManA",
  "key5": "CXLZazawMgMHnAEA9c1pJy2jihomDLAuRjUiH8AmF7LuawyFFEz5SXkCBYdyXE5wYGRJ1Jb2J6yKBHHMcpQ3wBk",
  "key6": "3XfJf1gp2mcnvCD2jAD4uBxyuw5HEh9wXpq3R9Ne7CHyEAt8HUncBmSVbFVDpNbQ3zs89p8h8VnD65NWhWpZYCm2",
  "key7": "3Vuc8qC75jSGLSbaeekMZR8FxTkAeb8kr4gvWmdS1W1o8SdcFL9S7rKXfgaBaTtVopY8kf5j4cFSMpfFj9S7DR9m",
  "key8": "tpwcofULYLNGsRq65abDgpXReX4r94a3Y96V1AytM884VGu2bkKbUcF8ZHHLHai12FUJ7iw8H6m9mYLz46QvBaL",
  "key9": "Twb38TPK15LNThH3fpSVfRm8UF8sEYUoeQUwQhPsCXzXRCvt1Yq5hAYpGfJZPxSYPipfY7StnpHDCoc5FSQP4DY",
  "key10": "EG2zR4W5rCiwKjNx4vNNvp3fpi7igticw96iUQyGHjC3Huzo3CzNErXdTxeA1kdZoETYW6Q6m3t15DQtfbh7PcB",
  "key11": "2Jh23LzRNrdXfUPrsvju3bmvZqii1bDjoVfahSHNtu5qJLmUPeuF71t2rUrsfEDNdtNgxrTaUJNsWi7r4sEDqzoe",
  "key12": "2i24kXiyNh6Nn1WbLKA2V5mPFRcDZ5dATt1x3np679Z5m84p6GxH2RfTq3RN2NrXB7VLQHszaj5WC7yVy6kaVThU",
  "key13": "638tqq3WWnugZhg8QzppCtkgYoEJYMve6LJviVi75Cs41JBSVXZZzmiDxXS2J3tFdp9THjHU7x13bp9PL9MmaF3q",
  "key14": "3BzQ7HEDyhS1LchMKoe9J2w1TFzmLtcsko9T36B2QJ8Cy1HDMfMRefCQko69VvB1sKU8BGNntqsxfU3PFygg6vdd",
  "key15": "5rtXdELKF7jsYcT1kScgyjnVkv7UtT3nFPQEai8eX1rGn63dF6RTmNKjRxRZ4x5anG225uXrXLJFBYpna7kkB6yh",
  "key16": "4pTidxN1zMiPiRSjEGU28xCzuisBtewceW9EeTCbxDemPoCqFm3y9hTvhvMTXqVuR4v68EDJ9uhBAFKHs4Ehv76a",
  "key17": "F5QmyD5tZTDaNGRYVXLDw1144rs5FkaHDNR5PL3AszhSNgLTdKVRAWRqvirNDYynTHGwxDe4ys8KA8FogJifhre",
  "key18": "LsM5RQWf37xtqZCTbMVjpLYBrgNdxkZ6JTonzksway2gnizLS5WBY3xxXjPzmJMTXjbJZPsx6j6qHhn5oP7Tki1",
  "key19": "2678prJkeMRnjf4cgFgnvYK2uKzWscG4AZvKngBUAZqzrV1P2ugL2nMov3S8MQsDW8wwnds22VGqjKVGS7FDWx7a",
  "key20": "rAFEVN3jmiZnntxyawkUDhzoPFAWfiVRZoWoqZ2k9uFFSb4UkFDzodiZ667FawVwYUgWheFeKqpBYeYf2kJ8mvC",
  "key21": "4ji6vqamyN5dz9sNjY71k4BvrxFXs9bCBw9GVbdLbMYmEMtNqC3GDPSfm5gqQNueAMprZifL3uuZss7ecr4Ej7n3",
  "key22": "59u9EbY6v28Gkva89DqvNoDqRMdx4ocsbbtVX9gMyKdAw5aGGNrzNfjsjeXauqNxk3RmQALF6gVh2dchB9iBQL5D",
  "key23": "4b6saAUPNMN4Pymfi1CL5qaDViFyXhWcYu2emhmcPKRH7FXm8eSAK2zZWMxB6qqACDJF1LwGGekfJc7tK7p2UDN6",
  "key24": "2MG3Y3mDMnjUyzmhcjX3UpyiWMrw4QRDNfvMp1LJ9m1Eps6ZNpJd9jnuEknXNU7WxVmpAHuY8ZWohnwSnEhVWwMg"
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
