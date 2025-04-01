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
    "3jvPSvby3ZyQjdMCp3BBtfsNYSTm4eVKoPYLYhJ4vsh3Uyhf6Zz3nwwE5GV1vxqWLxDE3cpfGYy8QYCme1V7KEL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tVXXA2dZKfaKzC75CXtgsgGqM4p3gFgv3n67V9SeyFMwvDjbmMpDKwbe7L3cUL5CH2bsBCKuS8vvSbyQRquBvfW",
  "key1": "2TVChiBNqBCPxZoqFpBKgYzHyU2p67gixnJqwAp1iiF8TPvAuxXGuR1Zizref5aTp8PBg68pdMUgTvAXtUcms8QF",
  "key2": "4X2WUz3VafrEwWM5ktcT1q8TmSsHzfXBQsk7DCKPfEn2o7KQ9pgaEtz8DH3DWN4CwVTY2nyL8vYSdjmtwRFRoLrJ",
  "key3": "ukte3ZeKyRBKw8LTMxdCNr9KYCMDRY9cXNFbztJk7kEYjFgzYzuNu11y5hdUsY3TdtPX9ejU7iyJPXATDs4i9eu",
  "key4": "5BpcLJRFiJWiESWNVokt8532sCm2ztZNcgJSVF8RAEdLQZNxfPFyErBu4CiWQELXx5mTHHeNnYp34Az297Ct5Kqr",
  "key5": "aXL2aeWEhts5uf7TBhLt86FpU6DjDtweaYSNNm9UfEmAjo3FrhVuyP2RAyQ3ufKaXXfiSWxiHcZQKHkcaBhLEnb",
  "key6": "4yzj4L8M4vopxKpnvrV196RCCBv6gKETjmyDKhBU2qMP7bLTu7GKrewmFFfdzvMork7QyfjgnP9So2AH8prLQaE",
  "key7": "38tmyiwi7LVL5uZugxQXaKNx5eyT5fE42bv8bEgpqYtXrwHBcAyscj4s1RJeXP73M34AS65mctZWV8h1HGVpepyv",
  "key8": "6FgqhbzXnQvyr2ERE83Wvg81Hisob2VzHR8W3zo7ogAx619XhbpHkjhZTY9EWbTi9HUyJQgcboRw1Uc1KE4nXHW",
  "key9": "3ffjZ1jQFS3cQwMzz5MjDZxgMLGpreduRPu56PKaUzNJa8qN3RQVsuieZm8oQfa1TyQAgk2sQCCqHndLa3WGc81x",
  "key10": "4v8Cd5nKq6X1wJ73uamqanfPtXT7MPk4RwVtFtQbjdG85qm89aNPd1oK4eDgCZobEQPPxHQEeT3bNZeQeZeXnq44",
  "key11": "5aPtZ4yrDwxoRoN4PBgKWBPYWdmbn9KJzass9LZfDdJcAxPwoDNX1jrpHsFkqFW5xWA53BDx97GGd7A39Xx8fUhv",
  "key12": "4stHisQhaCwjuQZU569h1tRK45xXMkuUsTx85MW2ViKgKUoMYwsnLV9QAY4aZm8QRutBFmLfTAEnvBVrkH8hk7zL",
  "key13": "5d2hUUQkFYnV3C3JeyMyZFg8BAieuaPMT457vpZssr4FsQvExoEHYPX8HU4iXit6A1ey1HipGHNWShDfcUNXwAdz",
  "key14": "2wHAjjR62jti2JBoaYd2Y1St2bRR9qXhPnzfstK7TxqwZSz3CZhScAW291XMs8pvnAxdvbM2EUPijbMKLS6pNrpm",
  "key15": "59euZgc1i5VdQoEPn6ZPnEWMk1tGG4MRvaGxbsUSms4kmMdPaHDCNThwzDkVJUuGL82BjUyRYiKqWph58SE9eLPf",
  "key16": "5MtMHTHnZNT29r7PDDKLUurXWguvTaxtwrLEAQFF8FZmkZFhKMyfLbKqYS4ihSzxsT718xELKxYWsMgrktqCt1Jw",
  "key17": "2xnXv6XQSVUHZ2SmzBikV7AZ4vuakH1VjvMCLo9t7jgcWYspfyqTavzVbCzXhSxThDaP7DgCg5D1vMbKn7LtkkZZ",
  "key18": "2DkKhC1FRkczD1DJY5C3kjNTQG9NkskiAasqigncAkEpmBQFtmsietZtUtkkBWWRm4RPbtBnXFTrgiGDBj8CGQxb",
  "key19": "23rVrTtHE58GH8VHXbjJVHReuNFckfh6Jsoz694NbuSKSrng3qYVWi8uk5LNT3trQSQDmMxMjDk17LLbRZuXKHZz",
  "key20": "2CtAt4FdcXp8jpG6tVtA7ZwcpXg4EWhnsAwd5XeW9kHXnpmik31SFoo9tpQVTvapGmwkAcMi8U2PDrwNR2Gqooqw",
  "key21": "2zp3C6Qey68RuFq18XKYcfAeBySPFNesYyWzbYpZoMS2yMemh2ga5btsYBNCFqfjvXQw1ESWSno3tr8KP8ZvGHe9",
  "key22": "5YcYcjNBGPfSsMvoC4WN1cVKDo2yapiUzmHXnnx53TJrxqiKbBg57gWCrn98bMUX6dqzxbybbTqub2bLJ1FHavQu",
  "key23": "3YUj4yndRD4L3b4neumrynf1PLeunRuiP9hDnXNZTU6iQWXYXynHybptjK4vYhcZYLddxTpoDNpmMDpYGDYpctcM",
  "key24": "47EwzLMG5fytqv96vyrZHS9EHLfs566AVqfi5qJULgxRf7NQNXjgK8GhzY8cjxkKZNZ91iWxUtDn5KHGibotRdsQ",
  "key25": "58bz4D8cmUnnhZXeoDFcSJjYLuzyLHKp2z9BZKUnaBaHEMU83puVt8itE4NUeWfaWvQoiBNzFa4oSuoRZSfGjx8L",
  "key26": "3Btc4XUVQxcm5Yipbttv6GyfBRPz6SmdAjS8CDGeSY5aLPZyj9XBVQ1UBRxVSPDbFiphSxpJjs657pJjtLyQbkeM",
  "key27": "2HedxAwwecQG9CZPvxits577YE9Nvpom9Yz28iRHgqWTccJcyd6aZB39b47BERTwrPzWf4Zgtob5HtDHvAV4z7da",
  "key28": "57qmCAX125w4yQj9n3TBPPohkk2593mJzgfFQWJqCAc73xwfsB3L6rwPZr5ynCpFhSRciqNTznyhDixBNhTArFdU",
  "key29": "2iUrSZkTtdZF86RM2wXFokkpt3B2vgLswEzqDkafDmSd7ckKm7b1MWWZ2BY7awz4UC8iMQzznw8PiQQH9ur1hgjw",
  "key30": "wgB1JAUbK7zpECH7oL6PncWQMD1DwZwppuep5tGnoRXmskauKGUAsd7roXh1pjGxPdWVRX6rPWkwsSbgEq6Yts5",
  "key31": "3941ZquPvJfmW2ucf3Jybhxgoo9mFArGFhWsxKQNzxsc1hregWTtSzpE3hdHi4ZHhtFfQB28KnkYKAGYUadw5FSh",
  "key32": "3hRFcNTFyK21qqnmBJcxbfeKzXvH5pzwnXHmAJnmA6x4yzkPFhmzt9zaVcsBkyjLPYU2WVQnZkooKnBbM83mUDaE",
  "key33": "LJDNkssycrKZtNJ6aQfQAhxDXdfhtgAfZoJeopb1nFWWqNtYMwVM9mgiaTuYMbT7C6gSddZMP7wBZsA6dHcjoRV",
  "key34": "2uTnaFNBap6cwosbUQUgSngEbNFxhUPnfheT7yLUPi5uFVaHLbmqwQkWWemas1Kb7XACqBC3uQ24FSELQ8ebumXZ",
  "key35": "2jmRdXhUxi39NzQXjt3jSLjNNsxSaR9hT9aBWByjv9potkyFWMitVeCP3nfXzev1dMCQMtXYHXYAX93mZZatmFyh",
  "key36": "5UKCfw8Pi4jkhbyf3u6uPWtcnMNXYm6UGnurpRzW7fdjiygfEqYTAqsoL64EiJd2a4i3EBdy41fktpnfjZjc7cik",
  "key37": "2hR2hFQtr24mnthE6kmDnXBnnuPYyRaXj8SopBR4ViiMorL9hMg2XyBCQktrCAAdfWLz2zJPCyVr4p1wo36SBbia",
  "key38": "5E6aEVD67M3fd9t23VuVK3Wybg2Aw5tfyJ83EjaKryj7Yg6CsfVtFFStudftj5hqS8VE86dvFu6iqUfM5MQJRtw1",
  "key39": "5PqAhRmRqhUtY9roP1HnoA7RTmswXS6koL6mWTF444KT1cAApQ2shFFx1d7wYcC2SBiR1MmT3gdkXWPKhtETvFSV",
  "key40": "4iWPdFLcpccfnpEunKy2FQkUz27VBbAs2GNfcSS7qcrAH56z6HHfNqawYc6RtANwrYzBXTRxYJdc8LpSyqh21gdp",
  "key41": "5oJ7VnRo5ogva6AcTWp9ZFwsM9jYcmtMrUb3MY6Bhf6TkqgM439cF4kpkxKKT1D34BWE6dx5ckxrn8kbdzEoApu",
  "key42": "48AtD3SCN8CRrimJ8Z1XKnVBJbogkCqQK1ZVTx3KmZd9jKu5iF3NM8tqLvcC2P6uUEmsZvt2NMt3Yk7BfMNansgj",
  "key43": "2jAtszSC5TK2ec1FazTXkhmRAi3EmkuPYLHGp1AHzr6YuLPfps1fah9kBfwYJRzkguMw19p7gGPeB9ppZLmpFXXT"
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
