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
    "43y4y66mmTTvRmgnYuwPL7EPxzCog8JDheLJo1QLpas6KZ9qJKdwoUVabE4GMDyRN99tEFoesZTiqCBHRTgYmECP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qyxjqsu1oHCetGmrq3HowJZiJ8mWx3xbnVJWCzFCTcaDTU8EpbfvstEL72XojbyMALf2TyUyJFMkHDQ3LXyKUg8",
  "key1": "3oE7Ukjjp1cbRDd46o8buoXPQdoqnpfoannTRgW5L92tP1qzBLV8ZAKACRP3MdQG232yoRT1XDg974EL8ek5khep",
  "key2": "KRBchNDc5S8ep8uB1Fq6HkiCdbE4iMQ7ZmVReLEPhgocsKKvWzuxdaSSq7kKeycN3duPwKPaTn4zVaXqY3M1qEz",
  "key3": "koo4bKAPCb9XgnBGYQTrpbndaB97kjCjhWkYeUdWiZ5NsjafZwn8CggihECcrLbTi8QEZuXfwXkCSUQYPiABJmw",
  "key4": "44vR1GzjLFfiy1LKavffRTs47yX8REe1ffAWb8r3vW49z6Lwy8vrzPxqeudyn8xn13QBrA22Lhq9ps5ZYn2a3H7U",
  "key5": "3JPd9yCA8dBim24Ai9NCWm1z2KMuXovJ55dduxNvJwwLjLVfh4Cbomh7LZHjLFkR3NGvL9FvWrDuaupfKzWNkTaw",
  "key6": "3M5oYy4B1aWaTa6bdA9TADgTVfe6oA4Zsjbu2AcJbA9Cgotqjaj76eAk2Yoc9ux241fKa7JZcap4gnRGPtYBQVpV",
  "key7": "41G8SA3zqabuCyEnScZyogfGtiwwHQkz1zqZ5GaVxaPBPDdvBT44UV1Y3uXXPGKkBxpayTrUi4btDwsd4xasDWFe",
  "key8": "2vt8qZmVqzP1rhe3uv2jnAkU6CrbPTxgLVhvLXdtmteJHeS76sfc9kyznNcMpmSPXWRiYoYVWaFdMqrXXhsZdMSM",
  "key9": "2wzR1rni82y4joATV2Vgd2GoFyi6drzjcJKc95hjdaEpreK1VwqJ6wenuBwGmKwknsH7MMaT8zMtN8dmBTC8LytQ",
  "key10": "4YhMh5cc42hqKRtuBf1oLfhqza7dagP3xYqLgmhu7eE3tvnfYTUzzMotEtMS63jEsjNaGfyscvY3jyVyx94ee8Ap",
  "key11": "27z6LjW3DHZCALBJ8NVwFVo6bPQ96a4JgUa8FRmUn5pKyPA7ZBLcJD6VV4AYiQjSbHPdnyHjwVi6totgoTCFDwtF",
  "key12": "4XoCrBr3LmJK5mVexbKp3byKjhCzDvznSPtNvyhfHAMSLRksLJHwCPCkE2ji7c35pwaCc1WxggC38LiSUWVgcmEp",
  "key13": "5bFKYdXXUfmNcAXA6zDUdVbi51J5DpfKGJBdSfdWibQ1gwvaDwvgtYPKBK6Q93AT5max6vLuo3XyP3VQ5icTWiZd",
  "key14": "P2UubY7MrFCCQWcUn9abVUphnZQzMW19uCmmSbg2yPkmiuGXT8DRBJHWN6e2tUfenvT3smZ2necgTqV9wWjr4xB",
  "key15": "2D1mg1pDheHvxZVeiKduEYoozSUVo1G3dRECe566GVVU62VmP4LNfbW8AFsUXxeMERPYnRf2xrNtuCefmmQCmp7v",
  "key16": "APrADQ7pf7rgxFGHAkDFtQ7GrY5kZnctECX3i8d2ycMF71d4DfuvfCSUkSxEES1aomywWNZDcQSh7pnQYguvnNT",
  "key17": "2d8AN8NzhXntG6Z6g1MZA3ucuWZD4wKbedJTnBP7sBZi1aDkscWyoCyYsnkfvsejq4vJH84fSjYKghXNR5ncwZA9",
  "key18": "5shcx92zzUg5SNuzcPrFwad3sfsBsx5Z18qtkUhVAQ1sVpARrXoBJLoUZpv5wxjHDHgJKa9KrL47MJ8UQron5Ga2",
  "key19": "2GB1PfjRtLwsd2rvsuwfQNaGJKCuuUy5xqHcJqHQfRJJwF673NRFPN1FXSfUHmnYH3fMi4rjp8S7xxqwXiAkQ7m8",
  "key20": "5VMyPTwmu8rKLNHftZ8py2fxNSWYizRMqfxsib5QQK2gRW8iaKtLkhocvWmke37XNENWUD4USUCKYJ51SV3nTbCd",
  "key21": "AfaAcdidV3tDNyGfuTzQZpPSKmDbe9CUFVSwDXXNV5BjqUfHQbgfXsBvJcgDd7g53xMBWmjf2aHooSVNetaMhEo",
  "key22": "4wbrC551L8pkgJ8R5rUvKNzVDAEKBjNYvTEWHhDRR3tj73XNx4eBAYvzaXfp4MrER71uikAq3KKrPBNykeSFkuz5",
  "key23": "QDDLKYTZdbm5M3MPRZNts4wzFVFiGPRp6EpFYizoohXkduV2YdUmj6VNRoiDi9Y8iBvKT323C6b4tpaGgX9WENb",
  "key24": "3f6BgVBBHDTNm2Kuy3ZHWLHDM9RjaSFoLt3CHzsWztQXgkrFCFeabeNgkCHMR9Fk3gLp1mwzxQQTMReYEuRrxWv8",
  "key25": "58Hw8obo5uB5pmejN715fTFSBr949LP5jGP1YtcfKR5DeNb1UBQ3jd6HCj9vJbtY2m3ndhopKsPRHfghgABFdHaN",
  "key26": "5ju9UAH8DTeNJFdEwLWswTTZjrGagA2DTHo5UqK9G5pt9vESayR74rZEN5e8rNVYnegvaephpC4HWSFNiHnpf12p",
  "key27": "3CFoQGnufsuFvj7CYw6WwSq16uU1ToHmyaBTFKP5G2yoiDCgsbGHTYpF7DF6GRD6H98AAVbKQkwS7R7FXfweF5dJ",
  "key28": "3PH8gtGAV8Sgu1DxbNzPErkRwJnLBDm8wHa3U4433xenroXrQKppV1LjaJS5ytXBmLqnd8MYFpAAES52tKfdEGtq",
  "key29": "3VyD6BiYTP5UhHYk1DTBuN5wSXkgSom9jwHm5k8imxVQu8etfKdXjbwuErRkFghfyJBovfJCqusUjmwqthQgyZKP",
  "key30": "o42F6NpUbHF1Johhc2NEvnhr8PMSyHipjvyskKRgquWH5oB3AQypUZAvnQWDMXFGL7nD7HGQQ7qj57ZKVke4mGu",
  "key31": "5zXE9QcXxffFnNYkMkeFxoTeXG7LUMS6Zcw3N4iSBa8aDZMad4ZDdbjDiFcmVF1yPFEyQGBtyHaJEkXG34ScE3oZ",
  "key32": "2wiekchzzPM5JJUp5DN5xXoP3rhFYLE3gMGip39UyEogvhjzD1vE7ML1RV1oCHqzw7VAbcximv7tAdpEZaUQN4uQ",
  "key33": "672zEUdnHVdNUdmTT14cS9hTXQ7DFdfnXFys438UrEZRGKaAbHr1zvAosk38MkaR98wNnoH1SjGfFqzcWH3vGu46",
  "key34": "4sVoCipAm6NhJhVj8MVoPdkP1UxoqkLxxrJqGw6S7ggx5WhGbkUaLHhDkEJjLvMW7xsGpw6tKJ2BfynScatTMhde",
  "key35": "4DrNkt3DE8Lf8rHs8q8MEtdc3TRsKCruUfruFQMwMfWdwwVXx13VuZq1bF4CxLudnfVg3eyXCtnrJ284WB2gDyf1",
  "key36": "5m1heiF1dr1finebJ9wp9BwNkFwwd6pHA8o6EoAEEvaVmVruHa4eMZc1WFNpns4BiVYYnSPmPPv4LF4xSibeoNU9"
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
