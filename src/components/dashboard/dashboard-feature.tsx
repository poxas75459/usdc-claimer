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
    "rXBu9wb2Ur3vNCYGCxJfuwQdnjUBZMC5jHSLpbcneiYHGFbfHudwoUx75yhxUu1TzRykDkrVjwwPY9Ao9yKUC6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gN3hr3mQMaLkVH4wGXenCTvWNcTnvQ5UZbryyxJNWk3q4CXHjBcifPvwP1JyMv7LbcEsR7fRz1fV7SMwyi6JEEK",
  "key1": "K5dRQj5zbw5G3mzfGA5x9WorReP1c3vSz7AidG6VgemQABdWHn2dRfnbchj8okz8jQhhLRujVL6nqgkSPoLd7xA",
  "key2": "3PS2z8R5oBLnufSVd978eZx9SZMpwRfYUSfS5X2zocwCdyr2Ah84uLxepsQuwKJBaC4fRuW5sohJB95EibCq1wwp",
  "key3": "MkvhHCrrLb3hfFULCHkz5b9zKpNFuhjkV1dkZZB71fE2cYV4GjwDWDmXJWsf5582KBZr1wcpZv6pdh8vm5oKdwf",
  "key4": "Sov4psbUmMHaU8QzFDkfCKu6bvTvJ9CvdTLwogbafiyMReBJxcjt896xBdo9QVTES6tMgs6RLntyUirPRsKUKv8",
  "key5": "5KWxnxc2Hr67nQZ4AhxxTkFSzHqrmQzdB75tJ1YxCEznxJDvZhBmdbro27fezJSvgbcRiSqvRrCTd91vz1bRR6we",
  "key6": "4tt8kfR2Bu93NuvGtf7vW5Jpa9FoFx71o3PrCoH4KKAHapjUCY5UfG12srBknRgy8XrQ4Yyb9mU7p7mFzUoEJ6dE",
  "key7": "4FjiGpigPZx8iuy37tEb6JRSkWefJFaSwtUquZJGvX93qxwt2UConB9U1Hmfp5sBBKwyESjYG6PkhkA2ypwiic8y",
  "key8": "5CTa7SVhGivW9NPq7BiR5UWS7scoEJdksP6cmLq8WP18p6L4FkSWWmcn36qov4VzcCBgZvx6Di3eaUP6N2cMoSFG",
  "key9": "L3eQDwA7uigShidUrZyGja4gKe22WNgnujM3y8a9HyoJDb8CjtexdhMRhEJMihnNDq2wTFuT6v5vicpcVZqiSxJ",
  "key10": "2vUyqfyi6Cr985YLEme3Kt5Ztiy31Zg9rwEDgdvV4XtxPJjw3ZQhtdB9TUw2VNPAnyEe3R33AipxzqdD3ECXyfjq",
  "key11": "67bEfDMH6U9c2vw7hqcMw3ghdGKiu1jMTpqJcqLaknBpHb7EG6F35axhaFnauuNm4rwFEXoQAFShhS2iHS2xzw1b",
  "key12": "3ZbyB5RqavixgZdpvMinH6J7o5KLbmSVLesgfU2nAaWUtXEszTphT6Zge4FDzyzFtLUWQD3CYVniSM6sN3LQz7R8",
  "key13": "53R6hv6Kw2uovEYzE4fHmAV9dykSK1VEoysXwgQtAY1FuVYwugzkCueis2tdSSdHMHM5dVXER1bZvxRUnLHSArnn",
  "key14": "4993AXFVt8n5FS9yAvqgBe5tYaAizjNEAPBRNywizLx2h6J1ffwzC7dbN28jVmCemj7aVMMDc5TpgYGmJ2D6dMQ3",
  "key15": "61T2JuDRr9TVuGCHMeNBSxDfVtcRiQCW78JPaE7PSEVddjMFY8JiMmz8iLzdXnTwAsVQmyHs2iXJaGQex7amESnS",
  "key16": "4FXxgTzyoWBP7QwDDoa7Sym6kf3Dud4iT6Y1HXUkPk6YRjjaefRzNvgbXzKuxhwGexckLfUsMNSHUWgSMhZ6QSHX",
  "key17": "262qCP8qp5S8xBRf4LPJyuRoMhpzWc3XBbkJYWnjGfpnUqs5MvNsKhH88ojjHYAjrNgZRmPQMPgA4PDsmWBnRxPH",
  "key18": "5JZomL3iG3HeofMLKdV7gux4wZfAxUV1eCCdbPQBsHhyp7ySLFapbwpadacZ8f5k7FL9E5cWvddDoJEEXwWUSBEX",
  "key19": "424K4QVvgkdbcYwfUh7AgjTRwZtKEucSzg9a7m8scqBtqH8fVJF1YqxuhaEEtwDNiKabVuAm5AQh7kpiU5j91m9h",
  "key20": "3GwFNZdr61bDcR8NqeiMYTBbsKUcuRsNWUqBFcaxXuXqDBnGEmsxiAzD8vVQ6xqdmNoACeRY25PJobAsBTwqgyk7",
  "key21": "27gm4xAYRH7apwtJbxqQAsPNorVGJUk8QY1gqGN2LnhsHWyAd8uX3KGLkx5bBgo9RS3yDUo2Tn7VrBrgX9WSrwsD",
  "key22": "5SEBycyP3kChfM4FsK18Gy5YdStL8JY35cFtc2Bu4GSJd8D5HhYurf7hhCYPTkkA5PWpav772xECWP6oa72ekTRV",
  "key23": "CHtqLjTvpSUsDxWLSY6h3gZfM7R2bjv4V2q3GBod6cNxJdzkYNsyFMgSEMYi1SCBPS5D2Ae3Vn5UNrFF3jV2ga7",
  "key24": "51b9LfytfGKPrpv7X8zSQrmhMPjovznBJdCX3Fs2yrnWkrDnErKWbWVXCniHYQK2NReNB1pnAX8h5LMYbqUWbisG",
  "key25": "25uuLwLLGPv55wBT2pkZudzvDahDEkSyCPr5mgKG9AyqgrBMaeAUsVqqABcbYEkySiFmdFtovDGJNWgwJK1X2UDw"
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
