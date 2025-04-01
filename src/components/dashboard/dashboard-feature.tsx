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
    "4zPN9PCHB3fywUcqpLB99T2mztJyDw2XhCg9zTui6RBpdo7FjE2MVQiLBGgTgMkeeSeFTPqJq8XhJwTV8HGqcH8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ykGRvna9rkbrJjPCJ9Uvz2oUG4qnVwEQAR66Q9815Fm89WZcKErEsV2VuerqxGjWcEXpPUFThoLYCAWnRyLBUg5",
  "key1": "5XVsMpMgcnLrJ72zoPxinuBNBWTcbgWZHr2kFSUq2Rky3ZwGaA1qYFqwgvMGzMjGYv33mb4AKbPp956RK94ZeX7x",
  "key2": "2QuFj2M6tkJJLw7CZf3T7dJBovn8hmqttTfBwTqDTPKbed9YU6V2kP1KcRRSAuSuMw77fZyiJ1bYiN9oJZVycuxF",
  "key3": "5jqcUFDGQayF9qxRwpJs4P5hP6yqcoG8qejd85bPyTNPBUz1s22Qfxt7c4uNgpK35jdcDe5mnYDpXGd3MzTFcmUY",
  "key4": "5ZPRESg8mGuxfiAgzxhxh7c3qLehPN2WpPyX8iqFQVJPjD1DUmPrYMy4nCDHR8mChkw3yDECdsaxQA5Gt5BGHMqV",
  "key5": "b3xpPs3yWFiptykUKndrZ9Ttk8PF8Q61WhTsWhWfXSqFXACE26T2n4rQiQNo76SAqU3B4C12sazRwxBwGmz6h4h",
  "key6": "3sPrF9veLQRbExKqJ3nUje8YiatyT6gRvuRdpgfd1kQDD9ffrMKFwhzrk4fthgsgDpjnuNbDvF5MpDjkjnHyRUMV",
  "key7": "n7rg7UkZ7a9wPx3xHBoHSeAWhFwxvg6w1mydXXy26GWiww2835GRzKEM7Rjhcz4cC4qwTCoK8fSmW9QoNN99Qo8",
  "key8": "a24WxaSd5QouFhYyknRe9AvMM2VekAbbbEo4SgRh3m88Q5NobApPQqKChqu8TxPT2VRR2SaeiCgrZizk2LKAzCz",
  "key9": "35HZoM8hnW4sUdSsi9jVB9gQr2pcFMyQ2PXhGvzymY68gb7mKnAdUyUFDq8nVzUU1jjJZJC1rvwopF9jZN3K8kg1",
  "key10": "nEF7f6sc4SmP4oerYd9Xpj5FufiHoqz8TRaurxvEEAYr3sAaE71ofdRvzW6XvAoDcvX1y6yhr4nnKbMGZyqU6T3",
  "key11": "32T4jqqV69LoGV2B7eNKTHoKYCa5mVnLCZ9k5bK3pFwmjibZxvnh1VkBwaeJ6Zo15QoKuQvYtwGR7PQDv1chPGqW",
  "key12": "Rnf6mFmgo92f7V3N6d5w7Zde3BPRBXFTyvtys7ac4YYFNzBMMS551tV5gdjUXyh8BHcT367TtdtCD2oA2dMu3bG",
  "key13": "5V89gxsKmc4HpdnjHtmbkX4vpGtFwMiSijyZW6DmJw2rqhwd1rpnDQbBqnPwXZSTFAKNmhV3ZU6j2M8brPmH5fTy",
  "key14": "2FKQ8QYy7YBhknsvUhMs2c9PPAFayT8687tjNe591rxr4krn4kdkW1XjCk4HJjEbCLwmnwu96MCmZ9FnkjmFzNQr",
  "key15": "5C9532px9wbGdYYwRQJg7nwapeSiEqucMwb13fuFkLhx5dDRgPYsS8GfnY8jXiLmVxghDLF97s5A2dfMiyDPysnh",
  "key16": "2tU5F9bT5jGz1awqtExC96Stm4ip7LBg5iXDduwSiZ9QymD7BS1vSsF7KrwkgLJpzQixHGEAXBbv7N7K2qdiYwJC",
  "key17": "2UhMJNCjMnbPw8cVZ5jZ92phaeZDKR3Y8365yWHkWReM4oR8PtGrdQ8rsoNDroe9ETRa3vV469RChEY1Pc2c7nBF",
  "key18": "2L2eLpkBTNfmx9y5zmVDa9L7rTKrzdkLtuirkB449ok4NaX6SVUu1FkRTNfAwAQMQCQMrPmpg9aAvfC2akHVFrVX",
  "key19": "31sq1PAZWQEyXM84orNrjeNY5Gd7jwC3Yi11oUCZNbLxacbLnrSQjnp2hmVYBt9dNg8JqzaAwt76dRnFuhnDNo1q",
  "key20": "YVB1NBWtLnB9j4RkSCdjpixKAUhGyMPaeYesSMkDjwapvvEXRfZ1j2hxkMngy31VewNP1QF7mWLHq1XH9zuLvAs",
  "key21": "q7vRmDMNvU55toraHdatQMMuZRNZ1SfXRMA2BW89fmbKGNn6RjmjfNG4oAUoipM693qYmvSGRNicKvmhkdx2tvd",
  "key22": "3ENjs4rWqk8J43b61CP4v9gpKxLivHgthUH3DocQjGNkkdessNWjoxRtXdJWs52obPGuV8TBGX2vcFs4r2vu6QPn",
  "key23": "NDEiVcyCvxveA6hkvoB9m7pVHeunUQvkt3K7dAGsRh9bodxAaaqjYdB1teehibn14bgFkhzEvbzssFkUExtVG7G",
  "key24": "3MigHHCCA8kZjAT5onLAkdgCHTgSGNDLhLTHSSS7xnWWhFhWZLXEzjJMyYJdBepnNe9aG6RE29s1h3DNU589QiY",
  "key25": "61eLZAfzuA2iqo4GER5jzzmi5Hj7bEHfanCyN2iyxYpU6HsaseV48zQDEWw2mbmdutUZKtHJP2veQrgWsitmyr4",
  "key26": "5eCk4UGqf7Gr7jYanmq5m22jn7R4TPNqqVPTrji3XVXgtiEMuQDM2uSFz6EowTxsJ5deR8W62EnvZsnHUDuPmFbu"
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
