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
    "3WsNFWBwDpr43GQHcCSYLrSDP4jQvK2FT1ib9mNr9DoH9u3MsG5kZ1im676bVzRfRgvHm32R4x4k3jVRdNFF6AZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iaNgmPztR3Xh38QK3PEgNxda8B9QtBrGLdKZCrL7vLYcJKR9bCyHNdqfoPt9jU9PFnSMXd9SRRkcebRYqVCS9G3",
  "key1": "3md7S87H4bb7Vb9LVo9ABhZWdqbDbZJjty4kcvg97Jx8DcSuxGUf56ZCEvQPe6999G7Mth24zmXGVmDy638cAW9h",
  "key2": "2rCKFABHsNvYLDGTRrGV3VSduRUuGsZ6z2Pc3Cwu8897P3wiTvR9sMMKtAa1eRDT12ApsuVYy6WsYTKfkCh2v3PU",
  "key3": "Q5yt13pS9XHLLduQQ4wHX6Apcdc7Bg3DmwLEurCfLcknPEnskJG8C9FmBmEmuEAPoXQY3XWeosGah4Qp1Hrw7tw",
  "key4": "5PvvSesDsjdQe3fKabvrLSGipyZgL5R6LTqQL2DUo1XuZmnccYr5Lg8dogevkn83htLGGEKvnCz3drmwvRei6L4r",
  "key5": "5hdeS67YCEY7utMdfrTMSkSgi6TG7NjPfsYyo2TwJJCVjNtTz4Bg3JcwthkdyUJdoEmsjR9xJw7uCWxGB1YEYHQS",
  "key6": "2VkkAMW8Zetk5QHSBtayGzLnxFDxmpnwhpW2qxazU2WVpsTGMUJ2JfdLX4RRTxLjc2fNwqigwHjYHvKkgCkAGYh2",
  "key7": "4FNSE8aQM7NFtmmq6uTiEashFRUvbhQyhJvtfixDTpedGQeFhmtjzCZYxCHD4KZv3tZoanFwfHheTB6nkJTGbcQN",
  "key8": "aUrKLeWVQV1M5UZWp7f77b4WENUKBbxBAVTxatV1p2GUwu82eMvn3sKuxx4tA31LX25kSdcQvz38RrY7sfz91hs",
  "key9": "2s5BhLsXPJnq6ehmAdyKvzAYsa6ScRH4jAGH9LjxxPVdiwSXh22qJEDMqVrjUs4K9Z8E3YBKXib6XZ945vQDvaw2",
  "key10": "3D5ijkRPwrU9mbvis9Wcgbadr7xYGr8Vq48PXNyNiMNkuf4AU1Tpp88MJjPNy5PDJrM9vCqgZVFy2zy3jH2ytMG7",
  "key11": "36M93Js9qSVcg89oDwp59DEstAYKJ6vVMvR8D3ZracezXVB5hXuSa6vei5dzxc9CjCf6BR616jsxZ1fdny1rnRxZ",
  "key12": "4eCejwZj5JK2SrU7Gp8psqRJRh5mW5nPaE3p5WwV1FLrFWxv5DCQEewYpcwsHLMfZDYgcvHZbVs94cXonvzJiuWe",
  "key13": "2SunxvDxLuXQtrShdzR8WqZfvdPu9t4CC7MCBHxRjStTND8VQPkxgVq2secoAGSBtCa8DbYCFRr8HpbSyP6tP6MH",
  "key14": "4TzCELCaB7JjvZyb6sKbSfZZeBbxQfr9JjdADGY5jCM4AX6Sww1xvx5L6ReD1N7XqSK5WkHDb7oi4T7L4RLWaaZF",
  "key15": "56iJSFddRXccXVi8MbWCB6LKGjgEVW39bphGWGoS76eSH5VEjoan2y8eobDedQhG1XVrYkBbQAhRDbrXYgbyw8yb",
  "key16": "PjvAdFmSFQWeKGGXYXpAoPq9B1rtkDkHcddWvMQaxA7Ti6VzdsuwVZQFf2jia5ZwGvv52eUtCtvQE3Qxw1SfN67",
  "key17": "2YLd6i49kp4HxcwwUXPMs5R21YGRFPVYhquiyoKSDjRNfSX89vnvGjDxxRCtUfhQFboDbKduxKu1e1FqApMxPHwT",
  "key18": "QbqjWrDjNPojb9GuL8kqwEHeydrMuT5CbrghHvxfq5pKxHSpVzTpUmQ2kepPJC9itwgggrTVieLUubym9DrjmfM",
  "key19": "3djL5KE3rGnSNne6868pYUmm7iDaszbdUK5o2TNQJU4bwqoNYJ7aA2GEoDqG8PxESciLYTTnTH5NLe6V1tVU85tp",
  "key20": "3KgZD2ATxTXQw3dfLAFCoJQagxDuFQDJy9QF8verey3GULWEt6cSAfULQtmyDeLRpYjRFhJNF3Gc9Thjw85sY3fs",
  "key21": "4u7Yrgiaim71h9GM5nCEPxAmcwsbrhMLv3UcDtBnXqjk4Y3mSyd3LiF6474ydmSdTBehpFpNpcdSzUsEaFPVKzxv",
  "key22": "5t84P6q1ZW3TbRhWgUWtA6z2yTrdmq4BB1E1kzTSDzeDSjPEvmkcFLH7Zb19gWTkypnhaKYrMVpyiKRPCU2qfVvM",
  "key23": "4nqUvUHpXkMkERcjEeB6ixhb9Y1qkRUGCDvWRgswWssLf7ZSGFqsMnwocpeRw5bWRzpC5yhCeuzi7vRUsqAmYC9k",
  "key24": "3BpmbPnnsqwZYyf1MYpL7hM4MRy8XwVh36k3xbMkcfNXwwZmpsYuCffBw6aQULd5tnReyrj9cB7QbAnP7yBPtgPd",
  "key25": "2EMg4wyEqfbuFFXh6RvmeZAQp1ai5dJm5tLVpHx6EJcYKQvPUtbNYJ1hhYtBvp34B4XFa2zCb2Hh9uDqxA45JiHt",
  "key26": "4A8UrWLB3ucimQEXT3jMyNQL6obwnFY9RaC1GW199mqMThtQ9SRfJfSiPPbvTiDen18HhyfZPv8NCxRQ4MxyrEXA",
  "key27": "2gPVTEeZxuXH6iTM248AyQkd67Wra8Z6jVU7BmRgLab2PWmh2A8uYXUgGrM7Fha759NFWqKGTwsVW6HgrtPqzFyq"
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
