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
    "2N1DZEGMG36hxKrw7hQBJWkLGaVogf2TRPqypNKa1JE5oFyGxg61b1d32gPRTsGQJq1SmoJa8GHV1HeefARqSh5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aMmUvFqReqy2y6ha1g398sBsnC9KsEffnBtpg8koEq15KgVwsP3xFaQ6PTEKrnSwjpr7tNdPmDeEN9XE2qXRyZZ",
  "key1": "4NCpYjHa1d68XMnMTAzmmKZvRqUah6b9fYPwf1g3J4nddGQ2Cc9XtBVLAr9im41bjHfSEFJfUPqnrGStoQHw2jRt",
  "key2": "4KxhbMx6yyDPCycReTkGLC97bsokgHvwZewsDQGecfMeoouD5Civ9F7bSEnjfmFVtCgbQzhHJUbQSE8y8C1CpHim",
  "key3": "5ANeo33ZMNRvStop99un5MnFJf723agnXANntsWnTQQ5o4fb6RgLTPHUXZMcW5qCBPvZXRRu8tdfavU9zk4RFB2v",
  "key4": "2RVt6KLUUfv2Wg3wfLoE3pBgFKBkALHrRpxb7Ekhg9BdBmnN79srBCC8zjoxzx97MQA9p3bnLD1QQxqxndD44ynn",
  "key5": "K7QBiKdNCaFHTyGxmAZiPRDeAMs9yLKAkkK46deURBX1r4sK1RxDtcRhvsgQXmXQMiRKoHBfCiKtcFYmvKPQE5k",
  "key6": "2kEahit9mBvmnpp6oytUuBdKPatk3q4fnwmjYmvYH3wEozE1vZWRKcvfo7ZyjLV5FfNo5rQDY7hcCgfc3ZD46hhK",
  "key7": "4MGDNyHYmQn2bqwyGrVPv6ME3cxf2HVbYJRBVJwudAgR7c2FKBTR1AcTDKV3Nx3NfXBCXtSnJCkaJ7RU1VRB34Uh",
  "key8": "23s4Le6fijAMaGmrv8vSdQ6F3dsVjaJv7VpbwigyjyTCh1dex1AzLC6tgnk1MCMnCC64uCtDzXo64m3N11QodUxL",
  "key9": "BZNzjhsEajaDKYY434USynbJRqJr88hcjBLWSBTZLZkTqjq2azbsJoqn2DqZo8m23DgJHgCDtfw7ows2EytnRBY",
  "key10": "PR2c158kX85Jn9Gbo3YY3v6GxVR7fGr7fqpq8bxsakkWmgnUvabXN59aBJE63FfnzkyE8vn3aMyW5irG4kBNnmj",
  "key11": "52uScVzcVpJAb82ZUxVcD3a5FcLKNFYabYU94VVetWBJK4HPogG5L127hgSekzA7iDpwLw3e1bcgy33yxa8WPyZn",
  "key12": "nZ6jnw8qKhykpuTxfuyEhHpubNcLtAQGKMyYDvGVhgDhrnNaB3j16r54xdrPJw5vT1u2fZQq73Mt5npGkhuUADy",
  "key13": "5SYB3cWySdnioSSJm2RuQmq1dEBLBbe8vV4ZhG4ALD7Hk1RnFBWrEE4dhzaB2YJJ4diYbHJXCmGGQRDwY8tSbq9U",
  "key14": "4Kdj8H1bCjiymtqX4LjWvtjif4ZQMpg9ULBda6dxHbuuAmS8Dw8CW7CGRdUiEUjhW3kH6yFPmd2VEjxBSYXvfUqx",
  "key15": "2aDFMU1LvD5jdyPfiPYNB1fEuMJ2cPTkSwFzMBXfSP7uzUM3Sx6YMuRtGVkowCbzk63GrN66d4HuF4veCVu3FWuv",
  "key16": "c79RJGCSn7f5o81nQopMRHd4ARoWGtWHAA8so413PBiuDFizM2cVREBtcUA7yzR9g3zFyUTwMntMo4qq6aoRGGU",
  "key17": "2i7vGPRGvhemAXUSwVBvnoNrATWaPD7wjBFd8q55QruQGNBnctomtRXFRaMwuecmJEVvmGNX2nuj4pSvJJwvV8fZ",
  "key18": "21S6HGFDKb1k93q48zcGVqPGNpBP6dr58xL4dX8dGfWJWU2jRSvZLEt4YvmygsFr6W5HNu2i9MivmU6uuLBTvefc",
  "key19": "631DUmpDVsF9WzFcWASDX7ftpzk15Nm5nc6Up2b8984SA4v56uc8BMWwicmGN6JBkjHrp1ah9pLtAUpf7eNWVxjx",
  "key20": "2mBNg2qkENEN9V4UTbKNJhj12KABdDDeUuxniA3w69Y3y4Sut2iyachpPGHM4t8JGXSotrcp49yFV8d7gE3bgv6B",
  "key21": "4Bibgwh8csDi28Piu24SVvJgJwTcJEyQGTuvq76eUQTkUVGp3i3R1tunNdSpmdFGjyYR6hcmRxuFqGbRdHSCSyTn",
  "key22": "4vANkeM1JbbXiZMVpQqauUy25KsLADmhptZfqjs5o1pZNRpbzw1uMyQtGW1Yc9bWXNrjNjPwETUcMhHaui6qBU4b",
  "key23": "3cfwX61QA8Msv9smvLS3k4ygCP5TgmR5AjhYJniduZVwcTHpwhQa65ycMcVapPtBcEMwBCtQPhefBDuoMNEdLKi3",
  "key24": "3n2ffgyE75SrEDfeFbT4LgNYBmqf4JfCZgAFUf9scUdyBKoKs8dsU3Hn4vCSD9LVx421EQo6AC9Hrb2YksfY3R7T",
  "key25": "3pjyB4CUXectT97j5KwiBd7bYGwkrGpiDfWgGi4uSgE6e45tAQdf8XbtpoW6z4CN15ZR6mdJpHkGJc4YxxG6Sna9"
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
