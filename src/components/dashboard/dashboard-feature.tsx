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
    "43rzcjCJ47JXaZfreiRJxDtNQP5Q4Goto4aVT3U4QZzjBtKSDCmUMtLHABKAtEuabeV4BRG3wDn3vsBGHRWDHW6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WYHJLTFhwbQ3XTMfvWrf73Nprt1C6XhdczYRYiTHWHLXXJWyhfjxMegh6pJqSuZLcA8Pt3oj29bBZ8hXYwQPsPd",
  "key1": "67WV6UiGstbdZPxWFMWcYnUaxg62tSifK9XDsCQwR72JvAeSmSYdwcJNpjYpobuUEwCNo9JijXpjr1gQuwysRY6i",
  "key2": "5p9YKADXTJzk5rAZHcBjzwKWjrQMCTFCuMtiEJDxK29vd4dqaSWHGDGRUrXVsBeSQtKeT3sywfUtafUm4VSsPBXP",
  "key3": "2Gpr5wgAmFUZkfKBD8v4itW9GUHggNtaCYydxUc8HDHpXQXK4Wfr6SD4Mi6uaxwdznb7ya2HaTGxuTbExehMGvk7",
  "key4": "3vTSUuAJgz66iZauZqFyuHPYzdTxtx1MxGCTg8G562zgoGoJB87v76Vgec95t8ChWBUZFV4CMNdUBZAKGX7QVWL5",
  "key5": "2nzdY6HXRExWh1yfT1AarPusYf9i7h25HPMEFn2rVhVbExFFKqg77vZw58tMKTfwex5NXAnY9dVQsbMn6EXsCHFS",
  "key6": "66BbthQHHB1zaDXtF4iGfF3RjNuWdQasxeTfcT5bp42nSg4RS3n5USRodWSPZKPKKAa4BqqUQSBFoKWqYJdJqhAv",
  "key7": "ByzM4DhL9cce5CSuXjx5FLDTU16Ay6SGZm9y6PG9C4Y1dmE9gBoU1GZCYjKXs6UE7uWc1XEq79nWYESpE58SHnx",
  "key8": "5R3ZoHBh3RAM84vw6oB6e27yNxMjy26D7upjXcNs4z1AVovmUFJ2Lwvwsq1S5tMuXb8ENpJqLM1CmVGBv9z5aZXz",
  "key9": "66PNXH6x8aTdEfMEnvsVDZF7NCK8zwbM7U1TnkMhPpU23b8qdBA9XUBLRmdT7bnQ5xRpEoSNwBWRqpNuRwSHZXha",
  "key10": "2ek9CCeTh2ZPSDNyCziVH2bPJ1pqpqJ2FL8JyCuW4Kx1GUEtyM4Qafdbb5yB3VVKiwKqChrxBeugHteqftLDNvC7",
  "key11": "4k94F9nN4rzKAHJnqxqF4irWoLcX5pT4z4CfdPjowK7GCqs2fgCTB9c7HBTtTFiaJgh2auHhvb2NokiGCCCZhg8j",
  "key12": "2EgxbDSA5TXumr38W51JTCosDJKF55er1G9mK3FS3MF9Jt6jRwHnw6g99xJtuqYYGoHaZveToq8YnYZpfqkZXPfk",
  "key13": "5PC4aoo5t2c7nTTmU4pHbWpVrLFb7LM6EoDBziSSCD2XBWXKjkDmPMxh4NytVR7FuXc741x6tgtrQ8SNbSYEdEYP",
  "key14": "3gPw7uJ5ACogVy2eEegQcgrRHcafAGeXPcMFxvjGhh9XJqMWwR8PRHtxJ9teoHs2rGaXdGYbYXLpdjJg88PWw9ba",
  "key15": "4gqWKnAcr3LWaG5pAZ8V8DLhiNfPzGrBqVsSTrHruqk47d5jBq9ZaGpZp7HeaDAk9dBBBWA1bwwpxbAMmMLp66N5",
  "key16": "4wEB6SMZr6uYF6crm1fMeTh7CuAeUiUTSbvSpqq99xAyjPv29ZsZSJWNwY1EJpdKw1TQur6JGC9gqbBmWM2Ehczm",
  "key17": "4CzzG4n4KNFjbdBx4FB9FVmuhfYYbwRvyKTcaVoKDTsVe3vFXRgkGifeVc5p3dXh8pLYw7YKB7RQfDubvNbBhsjk",
  "key18": "2ixT6bqrBVS9tQCr7tFdw553xFJo62Srf5XenhSkVRHuFkuBwU6dMmHFb3rzQKrMWb7W7Ebz4uGmAcRRUnTQstJx",
  "key19": "4pasvvGF9bhGKzgaCTyMfrtpgyHKxKLSzTVoP3seFDnJxc1ZPnMGa2oFNmmdpVsSLwF8RoJWMqq9dcgzaw1RvdiV",
  "key20": "V2WYuAwLnC2qJCt6WjsWGttEvnn5WxbX58uBx7Z7o1eq9iCxhZNJKPmBXCsQAokgn6EVnnP1DsdvZ2DaH3vFY8L",
  "key21": "21KRNcFXeYC5f3A8iwikUWb1xmMrxZDnDAa6PVAXTqBsw3HSAcuRnVzQcfZGUy5yUYoP1rCKcT9tBx9QjiHvHQq1",
  "key22": "32a3LSwrrbEQYV1Qeg3LuJ9cV8pYAv8cDfZm6Jp1JypuE8sXfqH7Uwb3tb9UcigAneENX1aYZr8rcbX4mb2u5Amr",
  "key23": "kFTB4i1MXoeS3tXi3SZZUmv9Zd8RHA1ZY2YzijNKQPXSZpEXNRxhbx3aHTf6U2y8H8azmY9UctWos1G7c84M21a",
  "key24": "4FriVSMp1F6PfH3wGBidUAjDkDZCZ7c4NQvk4A1Yg4tD9hsCtuqePPDuiUNPS9RN986kE46UcJcv6vo1u66wsJBu",
  "key25": "31k3ZUmphK5YrbtWYSzoH6QSgqtisSPwvrvh584A2Z6fByWkqQHC6cjaB8gEbuYgdRAy8DrdWwHfLF4ZKiyUMtcS",
  "key26": "LCmU9jrSTemjr9CaRGzPAgpBh6NkLr51MMZkUcTQLmGK8iDaRFimNvPrvGL8CTuZy13agL19BH5Xye5GL3aMmEW",
  "key27": "3vCeqr6SwRqiYBPdC8DYgXyJFGd3GNoKi4UVjumajMoD2EadF7JHjSHNUKpdSaESvCUArR2GCYwnnyzVyfBYVDvT",
  "key28": "2UL19zAnBxSzEa3ejja5SexyhmFFQsLPLuvKwVePrq6vvqxvT88PLpH922auYDD6ALwdFnQmeR8AYWzLwgzYwJNJ",
  "key29": "66qxZLxt5xaaatPUeKiRxqskWfV53nxYWeY6pmsi7TizpE416n33GCaZbjMGYrdLEBub9KvNq268uTc3CisHUoQd",
  "key30": "4GD3UokYn143nihLGAQdtQkrmd2KHiCbi27FArm8ZJt8QjMGoyGPVygF3tZzNcpyfz6uovAFEPJ1V9uzmmif8LAq",
  "key31": "5LXFnLYmFuLyZnvr5SGxHbMBMLPnYtZ3t8Zz9DScLEhsB3AVcF6j4M5w8KTAPAg39cuprhmgmQmimDN4cSgSQugo",
  "key32": "4zVd1g7KofYCTnz4nxargBTNvP83X1B2hgwiGJbsjQaggpdLHZbEDoaZSqjyL4cgzT6cWA5H1KQf1NVHbv6qrwFp",
  "key33": "5qUGwahvAcd1vxY7nPwrrjpiwSMSe15HvvTQrf8GbjF3iiXwxVPk1QTQZWsPSj9ff13DS9xVrJksUsWaVd9f1HwH",
  "key34": "4Qm1yveW4ZYAYA4TCEGXQarW7559TvKvp7QU3U6QuzDbyCr1M6rThgAyz8bZnvpQ5vUdPQqJ7GnjzqDv99WC8vvW",
  "key35": "5SUHyaUSNckRSmgfyvs2Z9K9nG8ZPcLjpvgWsynNaD4MTjJGD54J4XtWNrBgVfQxxE6pTe8NYAJFBW5qbfk7qRrP",
  "key36": "4iAdVN7dtur5WVZsQ2EHfnnDCmdMgJ66gAmcxwY9rsLqEvc4q2wKyjVkjzyp5TZPNEG781mcqyXs2W1ugNMag7iQ",
  "key37": "z2eaaRcVxvyy83fLkBKGMuuFXSoLCrpFEo8xr79zBS7wLQkr5fyQuopeh6EiFTXQc2oLiXUjxryFM9S5oSUgWVq",
  "key38": "2NtDgYgdrTZMJFFNTjcaJtKf4G3dBipUz1VE1wz8G4XkgYervxHq6TLvZAVKtmph1Nsowgbdj451YtYNfTdLJRGS"
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
