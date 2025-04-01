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
    "49EXW3kypxUW8nAew9vqRoqCjBGFLtqfdRenNe47RgSn2QqLJ4YE378kmeZtGA81Fdd2oM5dW9Wx3UfGYYByaorc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vc1QhyyJ8Fxz7pwRL8LEGeex5AbBYRYV38n6npB3WFWdqAC3us51VSTjxkXvfpY9VFvzbD1Vk3ahmrqSnMbYgrN",
  "key1": "jKiMfekX63eZiyGDVQ4VSGBB3Vax9CCXXrhuV7e243QMLCUitjZspV3Cn9uHekYBVm7bCxMxx9e5kznKbNfTxDs",
  "key2": "5gDDAggKd67u2hyKyoXaPjd6psRSU2ycwgqjNm9eD9yp1GMZXEhLue3MfNE6yy7fysqTv67W5oirtTeC4UqTiDjK",
  "key3": "mXZA95EJU4addv324fmUZXBF8PvHvBrZyS6BYeeQfyu7px8gakAMocQ3dCKa4vQVmAp7vvciApRUzGEymSYoAjn",
  "key4": "izx6xmBxY2xyhHQibMZGGLnUq1LVRttYfJNxrgifcbfzCJmHDB66qEbQTHxBMrWe47Y4xxGxX7x5KEoS79Vvr7e",
  "key5": "5w8XbMRfw7XYDtF4G3efXAjH6NAk2VqUkHsc6ePz5Zvtd9REvKorThPfaLzGNr75jq4WWdZ4uQgEbnK2bJprgrNA",
  "key6": "3Lnq3CB13fr1JudrDUgUa1FNWGbadbUZzLjmkbGDcwtCZEjvyy8UJkf7up6W11aC8fwomtVhqSpa2eZqQD3oqf8h",
  "key7": "2psUHsUeQEc5vaX4XMqYL1bWstxCZww7gpaKtGgUMkVoHF676t2iRMUt17pLurjbnsrHdx65kezPK6bQ3UeUDaa6",
  "key8": "3UTtAkCeksWmggbNruYvxTtGV6mGmSe8pE62Nomc33TXZNFGkL1UiE9Z3PhrfChpRyBokhwJTPKL2AX7r3UQRoKZ",
  "key9": "c6EUaHuRYbVTa4q9b412fB4d2kSn38vweQcBt3kaBw93eEabyGENofbdgGfG8VBFFf5KxhG1MCw7tFeg3TSCSoa",
  "key10": "2r2aXFApbYjjQFzUZdbrrmPztdqfv53KZL8ftd17j9jJSrmhu7cpQywd9uSyCnur5YuhQrVnEMs4aPg8uJE6bPe9",
  "key11": "2opXo8FnFSRWfiTbbsiYX1yA3wbZ1nowj9KBc7sX7Ecz56rsy3AnWZWozQ1VpxmwyuS7Re9PVZQWBsv1ZhECoosX",
  "key12": "4VE95MquHXVxNYZ1pMaoZJV1gNyNuy6tq1BZiuinBRqwE574E5XqCuybWfmU4QGaau4ckib16vh49arguSEYR4tn",
  "key13": "eiA543zq9X6u5xqYxK52QhxVMNumTR3jx5WNZAaeLQ4rMapRX4VXhMhfyTGH6nFfdugNWeBeaj3acWCEjmKU62Y",
  "key14": "47tZTE29EJUk5TZueghDg9mFJkGVdoJtEjBA3nXcqAPQsRz59GrfGZnK6Ybah7HheGXe9eNkEtPRxdMVJ9BuQaux",
  "key15": "4KcREsHDXkr6XAB55LeXnkN5WfbpcP22BnmN76VbT6j1wwHoo1fg3ahSg2qtb5JccJt8NthcAJdDHDYYM41PBY9Q",
  "key16": "4SGhGeNX2aj3fHyT71dgQWpZ5nqUnKtVUqVim9g7zQQyma2mV492uakZGt9BmybV8e4SNtgq9ybNoNgs95RMwA7D",
  "key17": "BcQXPU31AvBLknP3SEMGqZMCgPwejYYvN5SrtXkGkcekS2rUuaKrz3UmFu7NEoZcdao3ZK6giYkHfcULUcSW6PJ",
  "key18": "3VrzTsFyKVzuKmozdMZMN6GSzoKgFeyH9RBF2JiZWg1yWqaopnNW6wFCiak6dZfn2yhPS1wBysb1yV9LAkAKBwxq",
  "key19": "65UEQ4GPypKvPXXEoETMk7aAFgQ5THRbkGYP8AZQdD51boNmDCWefpdUzMqLfJBACdaqn2gn4nkSdWr7xrPvCxur",
  "key20": "2TPRpPvrKtf4MyjXvkU7h396SqiEMg2wLMaj5mgD5TfKnS7ZEFEadZq5JcgZmfpM5nZ3S6fCXCA6LChCeCNnmqBL",
  "key21": "5ZWfody3DwNgtquCq9bne1PARJLgFbHJLzFamiqPLocRCrLi9CXu2gdHy6XjfNreLugsryCzqx3RELNRb1GzqvDa",
  "key22": "2hyMzGFgmhJRokvrzGeaEbW2PJMuDxfpCwQrTM5qoU9cKVgZRaPd8gLcU7nsxS3wzrMz6mStyTbLhnL93Bg2yDeg",
  "key23": "YFGe6n1o5Kd73pENZQdBFcmUHqRrp6vjMdR9j84iP9SUscmRABx5t7CTbEECpiALQqXBGhkUCLmH25c6N9V5H5G",
  "key24": "4iYpxZc5mtit8TwG7JQuz5ee5qtSNxmySquCoLQp6gf7jraYLK9jXB2oK7XCmkfPjsXxpBznHxBFXdrhU1K7PZ7u",
  "key25": "4XEV5Wpyb8qrVo8Xx2xv81jmneofUggCCYw1XkwNGiHPgBtUCz93Pp9ExvxXDy8ia1W2imicuZbN4UZnC5UdxYAk",
  "key26": "4qZ9c3JyUqEeuHEYM42CTGBTmuiZJyaHyw89qwvjnPMzc2vX47Htk6ivSpgK7qDEnqbpHsffioKG7yoszJehwn3B",
  "key27": "3vJwx2qtBCGu6mRP1MX1pF3cTxxxbYVDcwNcFPqPp6pbKV6pd4MTfwWc2vy4GcaEFYF71FEVSdjZDv3JaDwYMCHA",
  "key28": "r8xu9s7Jhy3669GEUp8Zy57VK4rcrFJFVTVNJf6sgHheQy7EB8Dcz3q1P6dr8fE4EAvKEQGcB23W4cKfMKq1RCq",
  "key29": "3Lz3bxXR2vdeAPq8ZdpVt27mzBzdJb9h4H6o4RPqw1GRQ1dmnwWqjiBbbY1wQBHVFsDuq4Rb926o8gk74CAH2kim",
  "key30": "3QK29DRjLNhcpdxpY7TAkanP5ZJKVgXjkQKKs4fjQNeDpj1wxkDRXjUsgoKhjgaJT5WkjE3264NwGZr2tLjBSEpy",
  "key31": "5fg5A4sCeGeAkBT7ikmi8zLfNBnPhDdZaMS221zJTY5FQ9uoBE1qHUKnYpijKjxg4FDSFdip6Dd6VThGtA2KBvYt",
  "key32": "Cu52gqMr3TKwU46Bqu2zytoXQxDvMhz88vc4g1P5wi2atuNX1QQD1H1fzMsbBsBQR1d3J13GQPVh2mtyYqGogDS",
  "key33": "4w9PcmnDmp1GZ19HqJCkdzDrmY1xXMti2FChjzunTnC31Mhdq5AUqSvA36W92QvxErkkPGq36UhaW2WNTyk5yZ4Z",
  "key34": "4aYXT1wo7bv3cfFz6YRZt7kaUYfHgY3bkfHTTaRinVgXGoNdkMtoU22jNvGSTnZGSCp7LqpXB66AgkK5vv8w4cWY",
  "key35": "5FW8nDEz39J3LsDvikdsXoxuMFUvJ7a884UZNqCMTDqGSBjqnEaY5ANY8W6cZR7pe71HtDYHzLp8wW6TbpgwKVpQ",
  "key36": "3MuYDd4pNNNztNcSP4YMUWfninp6JaX46HonznRVyQ3DzH7UmfGgb6frD2BrnVtR2VKwWvWvmko4hQjVqphm9QGj",
  "key37": "3CRbjzpxFsfwCxGsfyCh4rHJ4gfmYF7izmCERnmveQ8rVV15qVoLb9QUrraHDCqLaMHkMsuNzxJqScDdrXvmDvct",
  "key38": "4cngYPsniPg3sRm6gjJwkRppieh7ELVotEH6CztsJAPWskZzgwDWypZfYCtHizPuVBBUSXewHKUSoiBAXsdrQaUS"
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
