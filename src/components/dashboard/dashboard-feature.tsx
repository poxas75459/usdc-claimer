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
    "4Tx4mhvaqtuTTPm4fGS4tHpvVU6atxDQJ17zxyN6NNhieExbrKFtf9b4FGQN4ZM9C2q9tP2Qug11jrP2vUyVEoyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21RyTwanAXUkLAqD295P7gfGhszfW9E4we2t5pzHVTXkUuJDttJx3dpw4BwoqhuD62cX6vFWRtmVFJ1smVweBMbY",
  "key1": "vnjWhwZtjtXDNQSVvoD6xMZzVZbkLiqbjBGuEHKFfyRrsuymucqQg9FRC7Be2uBZygziFqbQWYLLWAtKf7UT58t",
  "key2": "5fWQAnMKivrEX77MfkiA9SXgwcwVHrUkcMT4MWbZuTTHR1Py3zHk2TtG5U2zTgq8rBKY25sGBqnn3hQtymHJqYCR",
  "key3": "21YkpokmBciLxUt9vsA9P4SsEfBcqoTQ8A9hJscnenVRt5UHSLmZS19H176RhdRsKWTpT6mKhLH9PnS86yXDZVkt",
  "key4": "ae2MK6uiVmtH6SRGUJNjv2kcNsS6SzYqnjRmbFBAL78DjoRaWRdKeyhHKtJ9dnKSqXVh6TVHoRg2fpj876BDubn",
  "key5": "57yrye2hGavzh96ppt7ApmrREgUZtxKXPXNdLiqcRy66xiBebNvXxqnYY16QLLpqUsyDGdgZ81nCrs8FkSxyCFQ1",
  "key6": "3NEvggsNANYNHaNkkEFX6BHaCAT5MUT22ig3rJsskwNk7w33JbWaPenBNa8zh9286K1gE1Sr2kRxfoQiXbncD17Q",
  "key7": "4CZ2nAnGApHQTcYHAEciKQo1YrNFaPwn9A5kSDrpyKWB1XhCBgWNfwt6vFF9gfKVJ2MRkx8eQh7PGK9egZkEYyDY",
  "key8": "Rg3sR5BBn8kTLZKYKFdcV3UNBF5EN3LVqWUwp4KA4GwQNWWeJ45LBzMuwJXNzUYQrTw647a7J5fiGQa4YBGLrXq",
  "key9": "2D6dc57WvRVYiXe6kzjfQGTgGA5woWhFAHq3yoKTFFWivi53KPFzLyiMa9bAwpceiGyJWmbU3TzJXuTog2v4v2Xy",
  "key10": "59KRvN7KYnGW6eKeaWUjMDyquemUXKCPYoodbjj92er1KHvyMBn1KASRsoJAX8TvwmaSc4CiWrwP39AbAKvabiYS",
  "key11": "LTHg1Q1ydiXN2Ln4xrNDWrEjEZU9LtBdferQNtumxBaNCfzwe62fjPB83JFXE7qQHikGJW2HhMh2H4edy4DJxKF",
  "key12": "66wVkp8SP7Thxu2z7ftWDxJpE7xLpKEL37Zi8SX6vynCXMLZKePy33u99Sxv4U79VTVZpyZ5EdLyMqgBZUcBuz1w",
  "key13": "2YvnAwAnBAPV25N1YZJDwmKmcgL9qqmUV8f3QQpFk5WGGEDh2ZPTcfEnMWAJ4K7p4KfGSR6Q7wZodbrC2zBC7T2t",
  "key14": "gxsGzGvvQiSzTRbKEnfvVqLEX1dgYgCeETBcEi2hJy2esdoWJE8dGsuZSDWPufAyjinNaxC3K9P6iAAXQTfNYHd",
  "key15": "5q9hdP1VYHdpiZyn22DrTPCjHpY3wtac5f7sER9ySpU3iuu4s5z5gXgnWzWpD6CGARJutApz8kw7saZAkxZrQ6nn",
  "key16": "3gHGqpZWrFcVJGYKLCnD4qXJmrQ5LC92jVEVFyy4UDfZ4UtMFiz4zPzVtMkf7rFyiQXptJySTUAyshgkDPWSe5hg",
  "key17": "5GZiU5dy1snh1fMwsxPDnzbGdtaGkLP3C53vfQxXK8TmqEGuC8cZLvfCNBfAQ2j6hZjbXhG1JMWqZ42BJjEZmQCb",
  "key18": "2ieMQnSSsejCFhHrZDhbkJ795TFgXWPwJjtqvnxeZNKT9WjEUxgqtB5jcV534e1NLNB7iy67qHas5V2mgkpyn5JH",
  "key19": "3bFJM7c3m9R8sC4bbxo4Q64nKDjS1jYNpqvhKHxBt1xThjkAd3AF14De5Yw8vnM59uYt2UeMcdYikJKHncDBafJ8",
  "key20": "62fr5GrsGEwk12Jm5oCwX2ztQcQGT9UwP2HGJ8gPpgJB3qahoSMV33EfCsNYSPvFk9deUwJUq3wzsDQRafb5yALC",
  "key21": "36hmhEjAP9Msu4JeM5K7Ptn9oCp7WBkQycwLfACtzt3AckZK5fhCiBDy41wwcBsLds7ZLG3A6bBdUijUHpduaQaV",
  "key22": "3RXGX6X184rFqUT35KqSRjAomdke75TiWSDhe21PhXFJ1nrci1DQ3d2tuy4UvbH4kZkemtGz4VKrfj6iod241qYr",
  "key23": "2Rp1sNNVvX76ijuFY2GExxjb3znFJQejXHGdRMVQjKehMngKFnePCxusj72aUaJj96FDN4NMdNQKdF6H6GaCnDLk",
  "key24": "33CDdfjUmQ7LTXx3TDzT1bak8Db5j4wXDu6o4r3mw4qy5y49ruNnVLGTS9dxxZwayYUXf8VvWqsZg69Dc1dDxyQv",
  "key25": "5RXKcWtCVuc8vLtwSq2AKQ6VfZKeGFzLQTCXxGzNoDbTpLNN3wo5fKDpT2zFzDYr3GaKWBuoiYZFL9Z3djaKYUKu",
  "key26": "4H8qe6qMWeBhMEsjRmE8qnAubytG6rVtZMSqxAzuLr5vfy6KSxYdnSTwpX4pBege4dtMRPNkNdVpJ6RrKrMoJAuK",
  "key27": "2VQRYQwdiXMznL5ZgfEzmCshbntdQj47Bivu8BiUtCfycBn9ZZv3CafmEuzchoVp6NYVEUfNYSkup6ZemW9gyRWt",
  "key28": "5CksuTS12WAe5LJLRkUJMLLA8knifv1rVLtd9oexD7AwLf3mYSNZtmfV7UeHQQ3ZCAbw1oQC93wyiDKDJ5twxwew",
  "key29": "3qziS3848pSuovD765MgVoun7YJV8gCKmrAARUn5aNWru2LqFdYFn5CsjBsMeGy19PkA77oesCnS423M61vrped9",
  "key30": "QuNnkPn7QarzNFz37yinHeX8N4TuEtSSaxKghWgnze75srmUUUZd2pGfSvSzgTPC6KXb98pHDDcksTCJEkKnWUF",
  "key31": "4PLFvb6R5hbb5F6c8X3BtsizHDCj9HLmkndPsehvhtXuSJVdaJ5zZ8VCTzZ1Z2KX644kAQbvG9F7fRGGQ2zmwXi",
  "key32": "5DiTNugSQD276fswzRwdsN4pRXkZ1WTQxo34kfz4vFBwUEnf3LzMZ79rocxJqcq8yrJWyugA9Ptmm7aNsTZ2pVEz",
  "key33": "LJj1nArrsS2o1tq1SXLLP1r1WF5mvPStbdeYz7TtYyj4GPXGhj7Nz5UWgFEjRTuRpFZMK49eZDVtmXuwXD4Xy2s",
  "key34": "4DhNiawEua3jxPQL8ficVE6c6v8oBJRzed65xhRsH6z2PnmPaNR6FcmzCtUUstxBCVK8WNRE3aYgEDoMbDJwigkh",
  "key35": "4bH4PzfNTHhwQ3FypSDFGMzhFppt52yWmvzhT2ULsQ6dsHHR5v1uocCMBBpozkumumfdyLyr4D7MakbRA9joENhe",
  "key36": "5z3hPH1qB4T6svww17m5PpMscn3Y5nMBDP6khwsjVFLWGu6dVoHuZtagmrqDRa1SgbHsgaqe2tYAPfMrStoZuw9i",
  "key37": "4mSq4zLHLMTm8iEDaNtUmPNvrboDrhgGk25uVNQQHM3iwRkKoJ8jofRzu13bTS18DWNhijjTDoQmewcb3iKisLLD",
  "key38": "2ssohVmzqVatwKjG5VMg7axk8EzuEsrXr9zvxsoDeMhnL4dmJag3htnzGeFYFC87EgTydZCYdRrMET7X8SSBCXmV",
  "key39": "3nQKXWKoLVqrnr9ugCMhC47ERdeefTdYwLoRoST3ERPoSs6dZSUpNw4nkwgsbPsSDG9b1bWsaKUAncWSSGnYwaFx"
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
