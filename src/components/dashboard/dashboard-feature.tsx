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
    "yyMwrsBovgcio9fqYaytkfMUYwcScuZKArDfR2Rp5V5SEc4rGZPEFxhS9oyj8Nmjq7GGpxUnb9RdbyQYB43b9RV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NUGjdEDdiSabcxNcBR7JSCwJ8ZjycYeXSx7WCREvq5Teyv1aFxLAn6f6ka3aHsmBJZwpQ6Sab2e6zNsbNHvybzQ",
  "key1": "oADSEsDYs5bdhQFbRN4KSkZiJnA84qBftmVVN2n2UdhYMbchu7ga9Le92KHoNpF3xX8HQ5q3qJ4CGhUqLhmHSYJ",
  "key2": "4wMooZzFyPnRKPRtF3RoH3fHxwmwUCtSXgFCycGKeGGYYWx3vwxpiuJs7DYxhHmpCtDqqmQ1zC4qTujUpxom5CBh",
  "key3": "2pWRYCammxdhr7CmcMozX2Gvudz9dkwTXguWsrFfN1T9fNJAPn3ZKAXUSqZukLWKtZPkWnLTtq8HC7YSCccaPabh",
  "key4": "34J231HcGe4hhp26fJugEtr34MmvEZhWXZeE5MUf4Lgp5fifHowXuo6TWjDPSxxKHTuD4LqkKyFJC7HmotWkBSUx",
  "key5": "5zywXhJTpLuF8UDSvwpQxz6sU5nX5LFKXrxc7u19gpe7AQQi7AEBPBM4Wxdx1WBo1LyfH8UPR78mpmaupGvkvRY3",
  "key6": "2xk5hY8pz2Q26WsWmJsqfPLL4hjssPAU7X2hNqR86YHj33StE5BwLesWRijTn1Ds5kccLr8QS5L6EC6ev5uRCEs7",
  "key7": "4dWMhYdKZEvs5yucbG3EZJD9m7RVGzQ6WncXknLguKx3jroogywxxuVSzq9uY8QenubrBitiaenDCzHXFC9bzMbA",
  "key8": "5a796N6sPY97J9TCmYaNRyonN5ka4bHvmKSGKHVX6X3YbUk9LfZCBe85MCxuPMdqoC9wRzM5pWi3AsWR5X9RLKzN",
  "key9": "giAsC3uC16hd7a3L6VxNPAarrxQXJCimfJiS2p5Ygiy366opNau6jp3euFXXj3xsHiBPwDJ81rCYZuoKPjYXFB3",
  "key10": "zr6oY7kbT6zAqrwC5KZEKq63WZ8Mncf9cBWEGnVxhPJAYWafu2KgHAPK3RQtCaxBYmnSgpN6uehsCbqStVfRcpE",
  "key11": "52GpP32ENynb6GnUbtFpQzBKtCHcmTiMsRT8iY1Bq5WZi2nu7Ce5wCtYG6NjwkN2RJLPiAFR6QxEKJJBrhajiBSS",
  "key12": "2Vgukiaygh13W3ZC8ue7psXyGwqzbkCceQKc8ag4UzWtrAXCRyXrREcawqAdA37MWxiCrHXmn2herFYeGhobopHK",
  "key13": "49qktLwerFkKhf79NMjTmgHE9vhJSVSANC8itdE8hbPfUY4KrTsnzqyLc2AGtHMZxLvnSejvMN7SWB8b3nziLt6W",
  "key14": "5oFd9uNCWwpWcQpBeEg4zUP7gdUtoT77h8DJAJF2i5DGAnMTQUU26wdXuLMggPqh5UABtnzakViAcb62GB6VwCM5",
  "key15": "1CdDjkMS5f9vef1KGhRM8SzrSu2XRAkVpxg6x6RQRpSrRW2h5JqMPnRXg1EvYkiNE6MgaTxuQnDKX1eyaXiQQY3",
  "key16": "5mBf8s2G2KjQUwkmEEsW6UPKtAYQYd6eyE6KbSB718Be2EuM42PVgLXNB3DRtp5WGLefF65gGdWFDpGJY4WN9xQY",
  "key17": "1L3CtrMwFjfYaefhc57Q5qUY4UNsXyr6CjfXN6fj1KnmYeEj2ZPWnuwKUvfCCkZNQZgvUcKozn2ZLWjAxvhDvAS",
  "key18": "3Sc98PcASGPuUSRiMBNTouvDmQgHwZY31J7dHbmYQdfzt7m1MoxZVFJVz8Xhf8ekmQLAqKCYS8ZLU4LStY8tLVqA",
  "key19": "29DBNW7hsiFGQqAfS92LSWKQCgWhJ4vend9X9ghrALZ1QCNdzh7HiJtDvWoRvNoVBTdLV6whV5nTT6FBpMamVyqo",
  "key20": "2pje9KZT6BDNhH9MjoC7us2evqwr2t4w4ijkV6tXArihxmCNXpt6p82pzeNhJ3ZXf3yp7wyh9HfUU7FxTGVfu1SD",
  "key21": "39WCZrFnBLuUtnXmX6DitTAc8RGVnc89qmDwVtnXHpD1bJB6zv1rLUjAx7Hvvb2AJfRqT95GxTmSpyXResivvCx3",
  "key22": "5SAr6SorPMTFobRGGPDihgoG4fjaTYZEYFqoExcRkCQyS4iCohRAEFrpgw7M1PTXsxVarxF9KcEShjorNBoLv3xk",
  "key23": "495ViBq9ZykoL9yEY4cZVT2xBRyTa7WE8MmvyVP53dvWzHidSLmhGjqLN3geaiiGnshMjhveoMuLDpCWQTsbmoBV",
  "key24": "8Uae4MeUWMPQUUTTyCa2Gn3mo2Lg9GDhb8b49H7HnhWgCLNKvsHRPt5eYmxd77cjViPrSQKqEJ6TTk3U9CQADFh",
  "key25": "yU16C1ZdBpBEeY66D3xA9DHa6drWDvbRadomSp61GL9XvkBYigwxM1QmSGFtXEBc5egSVNAfQW4ejxoBzRbFVrP",
  "key26": "2YU7sTLnTTPo958iVtXvWAfWfQXyTujkaAjMimyLY6m1DA3G1w2KsihyYh66ZAPXcrVVUEug678akDxdxsMvVxa1",
  "key27": "4ctBfBZxB4wDRGqug76WxFxN2NRhovsZWs9Hb9j6Cf9VcKSJnDrmSb29s5EWkZEVdZER4D3EijYzMo4Ttu73ZyJQ",
  "key28": "4rAzY7Lh7XDE9NJrVAACZBwkTeNaZnCYLX7ibqxnesyKgA5ERePgeBzjDMbGFnzb94cUcaBALpNRPZc2U7ynHNet",
  "key29": "2Sokd6yUDXcF3n4HLw1NP3k5RRLg2tGwoAB4EVNLX5Ppdk3ehzNaMnJLDTwziE3APsxuJZHFnGcqoh6QkN2dqEam",
  "key30": "VP6jfzagJAXaYb4ER8vUPsfzXUtjy6FoSXkecBmgCXfGMdWVWLpCh58drrJEj924L1uQHTmGpJGZw5X2d3gTx3E"
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
