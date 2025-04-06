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
    "gcaXx6eJyRM2VMpydGZSV33bwsFUmTMLnZF6bTm9UnZa1qBvCpK4veTtsyhXT2RkQzFKLqmWUzHttJs13fvVwrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmQsdKKMZfEVVroTJRUif4x65uij4DM8bge8r47pbxqmCN5J6ddAtiearzD2KiWrmh1y7NJq5yZmpJyhadokEEX",
  "key1": "rgTHFxeXyYZRqMN19KPfsyEteCNSe52mDY2PKJX7LCrMV32UVKMj6S7szjXULjxTAgk2Zr4eZuQu72XxKCvXVk2",
  "key2": "5jSTVAoUN7SVDL99xuxsDRBa5zyGxB5RDTBC5hKwTjz4uqFuMapSbnNwq8cJoXXdyKtrM4WQJr8jy2CvS5RVuqTc",
  "key3": "9ofQ2KvjCWbQ9H42vbpYNKCMjNji9PUofFqzKUhA27VbAXhA51WcgtfWmEXgHnyRgxPuYcCSydK9gzTcTXcKVUr",
  "key4": "ifGQvLMRnvjqzUTJNXkVy7oQsA31pd6wQuEY2dUykJgY4sme6rvXwnU6Pzox2XoD7QgV5C8EB3Fz6tweVBve6JK",
  "key5": "3oeQWpSXprzQbyWMsU3dL9J7CANX1nzWkbfP2WKfoopLGq3eAJR8jT9mm9Z6LCbJgtQ9BQVqfGFagNUftFgUP3q7",
  "key6": "5pnwH8YS7zcLG6TK9H1nbS5NVuq2xuUBpjxNBLSgASHuZDyrAF61UchijPkFBJ1wWa4pUD4yf1F67XPTajkqv1Zf",
  "key7": "5BgL6pE32ST65Nk18QxoCP1e1Y9P8bvSTwvNcE4SGVB3GZnn7VvJvDtUPwcNVB7VZmXRFLH36pQ2q8R6mbkHevgC",
  "key8": "ZwGjHb5f73brAYqkQMcSKEwzrZNVbwcx4HnVjyvPvVvpRZx1KwgpgqU8bX1mFSRRNvM1t789UMWj1ZUo79mxC7U",
  "key9": "4jY63czA2gjzFPCdEaq128dEBcqicZciLMxjfpAqHs65UMt4tYJRYw7wpBz9Y4FPHyvFxDxArCgRRXTQGwMAGJCH",
  "key10": "39LS2SRCKcPNzy63HbwCqJoEjLpgoDsHzKGXAj4RT1PbotaRgQUs6XaLgfeKSnhUzGad8XQmJKFM8VULcy3qfAro",
  "key11": "2EFqt9YQzTMyi3TFvc1bcm4pAsrfkjy43UwuSsSFK54CbHmz7TDhDkpAfxg9LwD2uah8G6JvpD1sKBi2dxemnTRv",
  "key12": "2CMywnJaQpoS6x7kk33icJaYhPCykPN5kRcZhpzLLHK4q6SgBuqAuvRfLMsCjZwrkdK4ginNyvcYTp9SzQhnA7Qt",
  "key13": "k3JXsMfs81B4TziJP6ohm2VNLkkDA1adLzyyrBij9LMgVsim91W9MoNNkUqBnpJW2wLHDyCwSm2aQ8KQ43XstHv",
  "key14": "3xbxQ3s8VGLHVQmJpNDi5W3YMKNWWdohdP61sXJu1fdmiv3GPZQ6DzNkk8gBSpXVTwawrkkK777Hg5Afvfk81sbf",
  "key15": "2o98XRshFhrH2Z83b63neqV7DPtMQbtCPymnnA8keNYhSt9LsyJF7hpThXVeeRaaPNCiCz9zHX1JqWAoJni8gnNg",
  "key16": "5rydPxsqVatScoqmeHYakDiv7n3MZ8osZmLQAWgQy8ZwTYDP3xwXRQ1XnAEtrkwTEb2iafvie2dqLLs9hg53hbz3",
  "key17": "2doP5uKXa1wCeXRcNhuU8LKH8R896CefGX6RL5egSmBJdcsaCBq1UujLLoEMcFAw92qVbN9HwzrbQ3hJcenL1FcS",
  "key18": "4UuMh9nLHBRbyP9rcpbZ9uanP6TKK1qTrhcsxeEoEuKXNeTBq32pE1KR8DaSpr5p9Qaxc2txH3BQuakKgci8bJEh",
  "key19": "PS3GkXK6XbjS9jHTCo5qYSaDpDfCtU9uCggggnDShMayezJ1W92E4G58PB5aQU3Nkjxz61X89QVKy9FLWFvArDe",
  "key20": "3iANFPtb378vnxawnnv1Vz175bXmqGEzJsgwYR18NnkWp9RU7hauyBvQNAAYnUzKX984DbCvQ242JUXQCmcpoS6n",
  "key21": "2gXEMnQG1S1KFkYwXNsk59aFMsWUofURm69dD7wqW4S5ta2MFEgEx3ZtLSLX4RqfDaCqrZqS5rGxGozpr1fJHsVZ",
  "key22": "22DCfgSvFkeV7JPxhZBcztoKS6M8osSTeuhfauompGS7utLn7WJiteHRQsRDnTgxDATZ59d2vsHhw7uNKHNfDSHw",
  "key23": "Va9NaRdmgCWQaQqX62sMhftpwnJpL5dsyZhShSd99iyY1k2NoiLSNzVrpwijDLL4UuiXaDf5PNEpprMCZbZdtR4",
  "key24": "571Nsvc3RuE889Ykr347hkxhZwz76ffCRCZNfEwC9fuHpKQLYMKi85YB5Hh7pN3EXEtDohkpbQHKJg9Xtfj62Tt6",
  "key25": "5t6XL1Z3i8zyfLMpdig5Qkbb43LUvFT3UbRDDhjCJmb8WNccyMcufkEvykj3SSFoGEu6VfUdzxZw8AN8xcx3UEmd",
  "key26": "3n4aFEqWxh8KiwUTtdTSD74fMPHZUVhAEYh63LceEQaCBTuGN8nQMqmfRgXmTTMieG1uAnFVNmhhkUWa4Aeiebks",
  "key27": "WkFfdHU3EGgvzqt15M3Nzc6hei88424pRvvoh8TxTzCQVTEPKjj3DVSthsrzkNi7NPjh6u1YEaFAEt3xvC2hwoE",
  "key28": "1SXg5bti3ymrRU5U6R4yoceZ84i2L8ua8brZqZGLN9g9jWkAvYtUbCDaKc3dbAkiW4R5VNGWrNgw9TePwtjo4fN",
  "key29": "3z9ck3F5A3f8W1Hd4HCdMXyjjYe4rHFzVrNKfNRZMf9n7Wu9MeumiDxKunUChCAiK9GnuvD7KaQK5ASt41AWMNmi",
  "key30": "2nUtmUgtvqF5vgyXCE9gDPuPnKLvyAKCmENZqMdv8qe5ZhJ24P6gvhEVU2iUGcZkeoPsEaKrQWa8PFZ1o2z8hJsJ",
  "key31": "4QhDCaUrd2LzULpfa6rz9jeNKzwjRdXuPrzxuVkttQBSrcT7p7cUzmARXnhdiLona5aM2KbyP5366SwGFp6V4SmA",
  "key32": "2Cv4DzWQ26nTujcFyMCAWJWy3pmihCbpWFUg5kzzBzEev7dt2QGvyM1n1xDPAQoNzoN6xhpDBmjb9KnwjosH6R1z",
  "key33": "4XycCasvNPcviWgv6HMsyCasQdjiBdNwJsDN7uo451R64ui2QeBt34Qj7Ape9ptGFMYz8WmyBxc5SaxWD6tJpRvP",
  "key34": "5dre8zR7kYWtMGnVmaUAbxcbEdv3cjCuyvMyHbMbMFzYnsEfVDjoAFdouo8i1tegJTiSADigQ1ZVaVQ8LVfMysm6",
  "key35": "3fuFXz5mGduPyAaytaRStVsJV3Qr65thLhtKpmgB9PSGnWW3hubvfmPXQC8v4n6R6Q64a61HrHM1dEE2hiugFJQH",
  "key36": "RrpcvnhSZUKLtySXXMoSjDoJG1PWMKg6jNwG6CthRrR2J8p5wn8fkxYg2CUH1WKZVDRaeyc2SpWMj33WyoGphU8",
  "key37": "8ZfacbLBry92w8vyvaxfpfUBquYDM9zEowkeSfXtzve9w6ZhH4ZbQf5gRRoEHKBGrRtGebV1MZ6PgNgjgKkcbd1",
  "key38": "vWWdUmi9pEGiPyNYYhzZWWr9DQbkGjM7s5mKATHNEQ5TF1k63yunCnBagF6GvfwYcoPLSuryL3SoRkHJepbe4Mz",
  "key39": "XLMFGcvR4cLTXf9JamCYoCRxZyo4GHDkUbawo63osCDsJNNXULV9S3iZWx5tygQeWxNdiNVkiGhM1FoTcVbjCVD",
  "key40": "3MUFMgybhKErnspeaDR1gTZLKwjTABD5PJqsLzgH4jTDvocia4NsEPGMhUfvkD2XMEHBvFFUesWZFcFaMCgcwXAV",
  "key41": "TwEvTeKxX8wFvM2jvo61sPbn44JqevXEeSQzAJ9Y6mhDqvEJescsq2rdh31HA2fRd6rzRz61EtTYemg5Bx4GFhg",
  "key42": "5qi87BSExsptjitE7nWkcSNYtzV5hr5qmwofTVQjrKMz4i5yioukcV8TE6FHvFT3Gc9ZswBbfwQXxABh4fKNuzer",
  "key43": "2nYZMob2CzJEcFYEUVnusQbLwPkdsjLWrYvkJP8gL1VdmgN5o2BfV9MsSCkDnyc9Ubtqm6wNrYL3yqQsPJ6xsQ2J",
  "key44": "2vBK6M2mWxxDvNf8UErYJAKX5UCZFYiYw7i6XMEDPkpmHbZcpwzH5x2YUNqvcV6H2e6Aup5PSdApR19WDxLMUnfY",
  "key45": "P2EQGedHLyGmsYR46w2J1Dy3kktbsvZFjyqGnL6ekDoKcV3o9AvcEHuFY65vRdh2fwvBhZFjemHiQAjZLpTrq5Q",
  "key46": "5Bf2TmqstgWHaQVPM915TnpztRxoUbBXk4MfxKR4ifR32DnKqykSddPUG7DwZ9jiwHgkygasK69VNZaDUD3eVz8i",
  "key47": "viz4HCtg5hj7p6mAqGepEFU6gbGxUciYehLdQXpiHA5Pt6rTnon3DJBSY1qeAJW9F417y4ejWbf9KzeXkHV6MLe",
  "key48": "2bsnnveNEyShX7CSd2cp4bTMNM38NznxDNh3CixXdBPkd1XQhc4btAjLFymGEis2Qrk9quP4ZauQRafukmacHxUY",
  "key49": "29VCN9iK2Cv31PykwQSoVRLjdoKmkTJqGWfTtei9pECevYrThnV7PjKh7wBdYpBmLNwNMF4ZTPASXd9GNzcDT5sb"
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
