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
    "GC5H94bmR69N9z3ZPQfe1RjKxARQX3BVHxybDfVbidvnJmKhpYzR9PcuRroQY67bE6R5SVpQUdudCTeLhTWnGLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tcvkf2gRZzWz9k8gNVq8XNFY6tEguisC2VJsynAKHkzMdE5YWmqGfG4L57FZVenzQd1SesfUmwgfWKpDaW54xpK",
  "key1": "5FG3xYJSmvq2dcDQhSVBqXEWMukBs8gesqyZGyDHJTfq4ddbfZ97Nt4mpU1PtNFShAotXL5shLWkw3mSyromniNt",
  "key2": "3pAVsYRadx7fTEPhZ2d7ibPtTK2i2qkP2k5C8Z1D9wqcbVQetKi1Y8Lb6XfDYwkRmuRVWKXXgDDEYSi9EmZSq3Md",
  "key3": "2Qv3mNTJEnBjGnMb2hYbDz5S2QXwnuqwgdpbZh7CVMDTWAP76Hb9QzV9zpS9ThjYGuBhed87ziE2KEzzSMNUQk4a",
  "key4": "5Gt9rui2NDhmQ5nCis9XyPP1JbuDzRrh41TxtLnPyrdRCjLJ2LXLdQpACtrqatsWE3nsaRVv5BrLGi5JLSGxL7ce",
  "key5": "h81kgkhNoeiF9JhVWFMeXdNpQUbWYukothT6Y1E1od2uyr4xKVXCuSo717QV89fNHAuPzVM9QNgw4wiD8RQHWgu",
  "key6": "2N7eZZDiMs55kdiu4qxC6vSxYDgiL9CS8qBksHEgJdNy3zxct38MQpzzKWsw83XFFMte47rXs63j2PFFcqB2GiV4",
  "key7": "4jJYtqt1HgERnoJ3ujKbfc3AZoainRPC67RaMGQwKup7anuPTt9yFAspoJBiiD1N7kVD4taL967dYJ1cb2mjPfW",
  "key8": "485GkeTiQ2ejtJ1nRNLSwwoyFHJq4JeEg6qNREtRmH6HvhpLZYdxgDzT1WGum2e8PC571CiiF5xhRH3BJutYRWn8",
  "key9": "5jL7wAPXpUEjNnesnYN8ZtW7LKzWswzLjR6LZXV6u3iJndngCGqEfjfACRt5DJhdJqR6Kxx5CpHrM7tZmP3jzTgw",
  "key10": "327Y4sPobn3xSKsHb3VCvEjSTL6Ckezhh4bdL2BtHcecbJP7rEKT9eHsYonr5bBJYsAdRDbcLTqLrnHCzAoCnPBn",
  "key11": "9picmb3mRyYUyo11wuVPNyRtdoVwFPAC6s4BHCNQN24s4BRajfFMkb2ysQPmQSgZJFQBABk4hTMmYRmqPfbn9WG",
  "key12": "aETuoZakJ2gmZASxyzS67EQ93CMmJ9CJQBk867QCDTJC1dWhtcGUAN6JuHqRefi9BcogmeSNHwGzQ5oQNtZfG5K",
  "key13": "4vP2dkWKpaPGifRdEBywun9PV3NjMW5GUT8vFyXWTbU4TpK413Pn13LvV8ZnKHPAWpKDheq5r6okZUdsxAPNZTZd",
  "key14": "2pKSgnHRYnYSKSALzugw8QC8EhiRKdU1WHihyr3Lc5wjZA4n3ErToMSnHQi8PVn2hiwzQ1RVzuBJUyKMVYLE46mr",
  "key15": "3GBc5iApr1fAw76gGXpAeYJRy7m6YvdVJWbhhqNH2ZBEdz7FDqXQAZgwbgv3wcK1tR3iV4qFd6cTGxALnMp1yeS5",
  "key16": "4kkU8FMj696dcNRJ1qcDZyDn8RTCBpWJyE4bXBSEJsiWdb377eCALnSreygauwwcQ2Y7qCUHGcJoWMP2HqRK2Spm",
  "key17": "27XW6PykoDiZE7tK86WbXxCpwowV3fo3cn6qrPak599BwJSDfgHGUd2ta5euEDNGtRMeB7Uaeyqvupp1Tddis8YJ",
  "key18": "5UzomTPPrJE6NoGbuU19qLYYXSjwNrZ2t3rjZZpBpFGEC3VskK2vPwndEjEQ1mK3c8d1VaCaWeDfrQJVt4yjMmt5",
  "key19": "vUa16StGCwVsdhGXKMDNepkw9CzJK2hSCRiHEU3T9vkUnKVvXHAbvCo2xS9D3fYCdJRfzQoS3uGDnn5Ct9JZUyB",
  "key20": "hRfez3t7fsJ2M3fiqp3GFTTGWAB2hsWVSrELb3ABVzLu6iPaQaz7vTi6gttKdWWeNYf2r5por5jnphMcGBgXSGf",
  "key21": "3A14zPhpv5S4v2UwZjPqk2ymvLuMeiUNEKAUNT6bEHCa5hNBqimCoA6Mca2Xdt49ewkkywRh6G39KwKzSmKoByRn",
  "key22": "4nsuTfTtnmYn4mioqr3drNJm3RAKV2gq994REiGYvQ8fMzREDKsi1Z5oMNA8kK9bajg1o6xPYUdFM9NZw2zwwpaN",
  "key23": "51fMV1ffdaoH65uRM3yhUmg6ALYvFTy5vRPMDQoiaQmaGUtHktcg29GzUxApphDqCSt5GLLbTbi5UDHwTSsPvkVp",
  "key24": "3GqbpjLYkmXA5ZDLzQ2oeMkh9n862Neo6EBsWfXArkfViXwUt4hw5Wk8cNG3rUdk1QY2sUXzkZXdchu6wUUjhdG2",
  "key25": "3MULPQhRNPXxH6jLcDN2CewZFBxBAGCq4pegsv3SRd9R6xdVhitbqVn881ZFJrrFLbqvwrrenXBFueBEyuxuTZ3Q",
  "key26": "5DXCTDxr7YoWkMTLGUf3vJ9NoqbG2sNugjHb9m9dxBqEj72mwEGCmQvBaGundrArNyhPriSeJtYZupbWuQNCDmDf",
  "key27": "3QtF6aVgu7aqnzFJeJgf6Euk8BzamWJRCBeLot7Jxnjy8YHqKSTiogovzbFXi8kmpmaB1EeaHiWyW3h1EzqMQfUZ",
  "key28": "3Qiv9o4YNZjQjUGPi1GhBGdcSRwEYXa1BNZAse5QFyKoTK3L7CEwCWdaxun3FzSQEKygnkvWNWYq1v9sWmMM86nZ",
  "key29": "57iwjk9WAdJ3Ys715LkNcocW2K6em9UyGhyTTwED1fY7sLHf8UTvvcb4RidFxoevZwf3TCW7eCkuwBYhpi58i6Mp",
  "key30": "4DnbLmzVB1ddVF1zWs1qUA6bYCW4DyJTTnyAjC1kxFnQtjwb8877qtDCNDrR5p3JWDixr2CEenNA9hhmwZEpRYhD",
  "key31": "4KNWbxvCUUaqqm6vMGvvdouQAQdHi3pg7tzDnHPJqeDUB5EJ6VdaNvEapcv2DSqemDxjS1fYVPnnDCr8e4M6jQcW",
  "key32": "2pb4bLmVwfgTJCd3xyqs9x7JwL1BVRxpvn5xVkwqkDFw1qawb4xCCVfWnd7e2AwZq5xKuy8BFhweq1eqyosRX8x",
  "key33": "5wycyMNi8ocfZEdsJqgMgeqBvm73cUfx2d3ANhsgbvxZmDyqNCqqamVXHPLWNqYBK6MC37u31gUc9LYzj4mFUogP"
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
