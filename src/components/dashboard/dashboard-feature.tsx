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
    "667g7XJXWSjERwcfqxxsU7Zdw8jRS1LP8fJKQ7SJxzYzjdxEwryCoRXiAA7PUi5QMSgt4vG4y9iqTs51EpdUF6Br"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yXkGcTJxuj8x9TSxrWxjD3keH97v6nNweHmKdDLknXPTKB6jELPWBJKcvvw2D4AkZhctLqCLyYudSqVcdRPa3fg",
  "key1": "2VQouncG3xDEpasJjSYe8kh6VSzF6MzWaJbDiFpopbNYNrbeuy2RxhtSGAYqXLJgXN4Y6iaqfbJR3RGueKH9QbVE",
  "key2": "up4gVYyPddS1Xz2xEfGkcRxosipSmLuaAwzUAgBM9Yx4wM178KdZz9QRYwSgfUEHJbSaiJGtika6agURU2i3LMT",
  "key3": "4DBnCUTvKP52YFQ8Hw9iaiTDe8CpMxqrWpGXnWf1WPp6CcHgJkFLrzvNWGrz5Uqqh3ayCaqotXboMZCKPK2k3CF3",
  "key4": "3RsFQ8UhpbdmKUonJMJGcSR4E1qhSQpwCLC9SNfdSbzah67s8DJj4N93xYeismu4C4JRJD6wnuPK9VmgdnQuhmYj",
  "key5": "3jScFEH3KxiB46wUTHwXzGn7stDuwWqv9pGkNxjp1ctte2N7LfnnTU7u7aAziFCBwM3fPXFRNKM4h3PP6D1oDQE3",
  "key6": "5RPDnc5v7ZxHMwA1keRQRBGBwzTPaVLnd3oh5qt4BSM81c8G2Gr25HEGCSEkiEjza1nUfP74S4cB4ZxK5RhWD6do",
  "key7": "3yGNEQYtvaRfDPcnZFdzcRREtVtQxMkNeWTofPKE1sWuPHeaMtiiA4ZqrgzYTToFAkJmn1KgZNGeGtSQZzJUkRpa",
  "key8": "heanL27HCwWxNU7jUriFVtjxTwipcf38DBr5ieWJmTxCwfJ6j1VZurHadfD8kZuK6ZvPaobiskUhGFwyT2YZJum",
  "key9": "5wZj4LEvSzZZeHvPCQgSEYikbAwR4isUH2TRMbDPvSTuCYcK4deKHYZ8aWUsXXCmirNMVQNhs7ErWvWVPKNgVExy",
  "key10": "3yyigE7F9wS56bjRpx6gqPSQ2pk7BTk7f5WKZbdgkVkVPeUNFpSojRk61UL5qeNXzyfHUXMCjLCjL7m9zR2YkQzp",
  "key11": "66hRti6s5ZYY1sSyHi2N2XsJWRK1Y9kKdPZiGXWSZy7bfX3A93HYTGKfGSmmoYm9nzJGyKNM3YZgn1fxECHdgELD",
  "key12": "5NNTouC8pX2uvVah9bwfP8bwHB6jhGzrwejHQbZkM5y19aEdouHvzCesB111ZPhHWuUBwiavCokk8QbQULRqMD6h",
  "key13": "2H2fztn8Pr5SgPvSdzcJMs3DFeerfkfU5Xw2qq7N3R43WfzsCENYuRn5NDAGtuiU8yFVoHeL1B8fTxX8EqynkRWa",
  "key14": "4WqMqfNmS6bkGvJ94wzRER8PLQ5E4cPWR66KV6vyMfeA4soJ5i7WNyXrbzUpMyfVDkpjc5jQhAxZQyRr8cyz13Wv",
  "key15": "66tuGe1mDL91vMeKW1CW1QtqYmJjRasbkktnmCdcU4znngZuZQL4FakPa9EpGUbr8fjDYX96JQN8DPuZ3h1PK7Py",
  "key16": "KZmjgm2nbU35CpEXP1wC8pM7y11ig9ZvgaemKppSFQKLSPTYr74aFrRtiFdu8h4LjsbEC6cft7zyindrZ7ykPke",
  "key17": "5cn2TAmG1CmumWPz97afyPuD2csXvfxTbLmed2u7b82sV7pi3nkYt28ouiS1odtks4RTAE3nWr7gBT42AJ2MNEyt",
  "key18": "2sSHpfha2f9RcmSqudrqhWCmMEAkD5AhvVomqxGzuK1Qy383yC9GQXorRXJk6ecS8A72nrEAQNKwUxwjCB82tt4Z",
  "key19": "4j1T8FJpmieY2yYcLEaetfiwUQV7mHVSDDU1iqNSzupnNaMzLmVn3GMhVHGxVGwke61WLftFJ7ZoJbwWiNUn9gn",
  "key20": "67FRQpKG5VsLY7u4gCLfyFKTmAVkwDH57NWbvjFj3sx8YsTabHJNthCYTvwq4c9fJbyRjFYMF1J7fduNUPwTE7AX",
  "key21": "EugJMc1ak7vmGTBbay1xFknpsznnrHzkWvnJDtpdy2a9kKNamgYFWuywrZNWqm2FXfHsczDrQw9tFDv9FdVm77C",
  "key22": "3Bs9qFiFHb33GSHzdpdyT6sVaUorJ8ZiGAbqrMwrkmw6cnnvf9WSJ7m5u66JEZd4Zu6FdFkEM21chxHUJEmK14JG",
  "key23": "5rggfuGpQ5qofBeyV6gDdzFY9QfSFoUR8b3L4qmJk6CmEfCrc6tEiE9eTeSpk182qp4tGfchbXLp2uKTax22Kv63",
  "key24": "67HuPCVCrg4tidM3haYmGg2Rm2nuhPiVt2QBM9YncAEexFotKRosGdexhEcuTsFcZEocV3A3ESkmVUfxr6knCxky",
  "key25": "5PPJEJKsFN9AnoZBDkcLaiAbqu3va2Gjr1StyPW4EK3CR8jNGPtimYcpXBiAbULUVaJbCWxNQFjp3ME8fesix78n",
  "key26": "UzUkwFZVhChZihG8fRG7ApCeS7CtrNXmCozkkiQSC29TK12dh6owfYNJNBcL4RMh4KwCifZ35BFFRJ3mRjn58Pi"
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
