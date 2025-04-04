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
    "3KVPgPRNEuCtYSmQRHd6vDx9Bjx6cvSTPx15xHSqxLfSk8DkQKZDiqAJ2sRoLWneUhdEQtByMPWkrV45ESLzKQdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bSn3ZbVgosJoPLtPXcJQx7xupE7C4ZUXj1FbCgGDe7s2UCRHR4dGHzjdf6Tp2rEKEcuDJWGK2mUMxmmHhUAjbKE",
  "key1": "5brVgg3wz76CNoRgNzQQ5oyc5W2aYiaUdtgwM7h9TpMVVkSCDe3uKZzgtBii7igMqqKCaDBp7SRQQJjxu9gJnoec",
  "key2": "25mcFZkgc5FyjFASZHJcVj4fnY28k7wSaR4aKK9DU5FazW5Y4EjfNw6E2bkJLSeng2EarRSBD6Epad92Fhi2F5RE",
  "key3": "4jN4qQhyz81vRUHCAgbHdgwWPAiQpcAhWKCMg3xat8stdVpbDb3APYpe5Y1Q8UPkMJfqpgvytvpAuR99jYCz9ZZe",
  "key4": "3H3oXziWAgFRGnuyeRHL7UhEL3XMUwuoi6RKJSifupWHtHeXRUUE8vnh4SXQZCDQsyrokAMRYU9kvBuWj8JsMigF",
  "key5": "4nBN8N3TYjxPPbST5ep7zUwSfrNuGX4wyQyap7ZwAodK8HtTnUz3AcEiPjpH4TsSN9xf71o32RuECgKuZ5XV49Ft",
  "key6": "2HDXZJGNnbPU2rShpSDAYBGJ1TkEdrt7R39nNeQR6b4gYhuwdJnftfaQTnZkVo1qWeFHUyKPx3aiXmPr7zFUWSK",
  "key7": "XqvwKpjVRESCK98bFXyaNvuCMa8fSBeYJTmB8Ak7ybhHDFiy7JDUdLkLu7YgFz1vTkDFsiLSAcV9KkbLgBHMUKx",
  "key8": "5jZfkh6ifzrqjrq6AV4aMhd2EataMygiPB5BhY3xpg47tw9QByrcVwUjjDygVqVTWwote4cjXCfKzhDMFpGF73o7",
  "key9": "2xjcBVxxHJZyaaRUHxX1T75CQm2VhS1ZY4iUL3pVJtNM2A9PF7qYh9WZAaqTcAkySnfsdGJJXpv7r959Xx2e541n",
  "key10": "63fAN6Z2QJxMrr8zYK24B4xVxg9hQQosPxhHphBriFPPKhcmRUQiNoZ2K9XoyHSCpLYWeTej4kMsB4pRAE2oXEPH",
  "key11": "5jsrhjerzrwWeWgWN13bk86GBF2bKinmh4s3PUgXeyUtnKr6imZ52oKp31BdWs196CjGWzhK387JmrvPTNGSKssa",
  "key12": "47w7x9dMAv5uuMBTdGkk7MizAvc7ogohL1Qdny5NTTWZ7Cy1mDvgu9ZFwwNDe3SYaduqNjuDPCJqFeWQg1VXuzB5",
  "key13": "3XkkU3XjNRhBTLDkyEn1F4wdjp2Ddfx4y49AsvuvebpXcf6d1czwUeggkU34VfdGijDJhE76ayUd37TtgeAQRV1F",
  "key14": "3tpR1755YGzuXdV4B7nn5B5G7VacNvSCDxVWuCTX5Jc5sZ4UpqNNBb5zm2dhH6FwbB1nBrpYAzhBy6epyTbEoiAt",
  "key15": "541xJsXxoD7eLnMno5S5rwYeg1XP1CH9DZtULixXQ3ozAQttwHzhb5VDrr6b3Rfv8nM5yV7uSVSPzMEP1EmS5cbP",
  "key16": "5zFFu9xhZiSRA8hPGWGqmkrmubSdwXLUCkuz16gNAP8or4Aw2gxMbANYbJZ5ELeABbfDufKSwUyjfqZUvjFbeprX",
  "key17": "62mpU3Dr4oUqiE3iF6sdgYMq26HSch76UdpVsKfafogAvEdH3VZzJcAH3WaudiJXhddMsk95EvQmAraUv1nm7Yc6",
  "key18": "5A6PobaDe7iNTH8Xh8RrYweFhrTFx68zvjZyws3qC5rYFRRAp3hDttrsNrS4udv4KQMAt61wZqNYHzaWv6enDY56",
  "key19": "426BqiWgbQim8aFa26b9deYps8hhhbTDiBdBwmJozLrD44mtscD6TWYQcGSK2qnvG9NMECorSxHAeM39KK3Yj8T2",
  "key20": "5PVd6amL2XxHCMNFEmhniKeWeBmsW7ggBJBT6S8rZxEk4BzVifhwWvRaKyZ2fJLRA9e3JTFMfrkAUChkR28yxA6k",
  "key21": "MH8rzZoSQc9NHS4FsymczjfSPFKvcoqdyaek1gRoHTgumLqAr48Cam8dpeS45EZZTrxmtNWb85mxoeR8vEaQUwQ",
  "key22": "4k5TBVNJa4oV9Uwz4FkCXV2MxWkj2Xky2U6X8cwGxFxuYMRgY3761kTvQLupEizQwDg7hP8AKeT8DVne42e6eqr",
  "key23": "2VJBDUWJBhNDdCuHes1pdeTwXqCJR2peTsmd2sDCHB8KGSoB1ykGuRnCvmiwjh1R2dtTRQi4Wwuq9W3RChDzr24Z",
  "key24": "4ktK4JADBm6g38yc4AGucgCpJ3VbGr2yvxi7tsdT1REqfvebcggzabTeAMKj3YrhgBSkQELt1HPPSjj4PxS8Yevg",
  "key25": "261XFRuhB1yAPEcbouQKDdMYNCw6jPtZCQDrbpmBbBa7oaK29EU6e3JN7TkyAv32aGbuGLPc5UUxKhKR4PD1EM8W",
  "key26": "2NFbqNTxsLPV1UB3yfyrz9VpfeEjUQgwh6DM9W98wSchXkZp9dmTrNW6YMbqJeEv5YFHifBxPSNFkfshpKePQaqS",
  "key27": "qoVzgn8BeRLjJeckaGLmhsvLyZU3U96Z2orrryBBiu7NooLTRDXtJRhQmk8nhWbnLtzo26T5HtMMLMUBKri3nnL",
  "key28": "3ANPduPBb9uTZiRRb363Z6TKNuAerouPRipha7jyWvubvr5rnt9AvE8NFEfqzHELqbHcyc3oDveAvMyqvvksS7Ti",
  "key29": "214oTFFSAVeLMjLfV2qRYBaczry39x6ZZreVZBUUj7oEHA9WJUzeZ5ubDpniuF1rJfwqFDYgSKojQocnnBBQGjdj"
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
