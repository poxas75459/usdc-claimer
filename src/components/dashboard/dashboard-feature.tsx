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
    "49pPpv24nXFpswXkoBxu9Pvxox3XkAqwhWGajK4hfgz6KbcQx4995syVng4JJUfLb87T9D4c8YmULfNrgRPU3hEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eQaiFbKBkxxPGM9kftDv2UR8P3vThgvPx2sC4k7xEoBxrP3jDXY2aALKJsTDBXpTkU9fogvq8QyEaKzhCzhdMbd",
  "key1": "5wcA96SRuyh3Be2r5Lmfzd6RPqNajmUVPN8tTFzv99pRpmkPDUHBuygBD4pnBgsnRJYDDcZuktmQGoPcUsW2dnp5",
  "key2": "3QHZ7JmbeXb4ke2aynjiMcHBoZJaLMgFMhAV7o6XW72qKzCaK2NupcBcF7c2SjeT9gXcPvm2XedZmuyFVqq1pnwr",
  "key3": "5tEfS2KEaFe6JvXeVfY9frTzumo3oGDwQqXHqwGbAGCa29Hff6wHpJ1QEK1fZ6ztDBf2MXiePjHwmBrQr7twaoSk",
  "key4": "26bctuuZMGbMa8v9KQ6nAXgh1EiRASWHaejZ7sQPaQUVcV6ZCtmuYUGqkhr3rKsjMza9VCkEaX6AhQRGU2ZTw16a",
  "key5": "5R9sV65H4EtZkUS9TS7oqFyj3x8KEY1MSCFeMYjMny2DepWSNgsR2e8HmKe1RenBkjNCrSznxU3YLJh9TvqQ8TgH",
  "key6": "4CceByyUtC1dVe8QpiKUKAGt1nPpVkk354R3F1kiEd3yT8FnRgedUsWvZKoSJDskQt4t4jEdaWaLcLqfsTwiawiw",
  "key7": "2RvJtgfddY9y9x4TgGmnpe5dn2pnzRhh8P2p4bUwSPbCkri3gS3ggdxnQqapsWs2yUhb6KTFXFuWRVQDJsDfijGu",
  "key8": "5r5jVUiwzTWbAhwxbgsHXUYU7KXQCXNRoYyQyQexRdxB4HyjLGitDYzXUnRSYKNgxEpp1Q2rXdR3BYGnTpGX3jio",
  "key9": "5JwvA6SHcAyepsT9q9tQj7Hbiai5akxUX3v8nj85NRC11NbfPYbYV47buV932WyDc6F8iTRYM4XT933UNpinNoJd",
  "key10": "2b9vd2QFD3MyLcJvvhFJxaNwrym8XSdjiycjAEGmHsdknHJQ7jQy98eDngu8zpjzy1WbhdYFVEdYVCdaARQRQSxL",
  "key11": "ubozLoJyKpysa1pcvR97k9A6ZoyRXFLdP7p7kTbpNRUo9C6cMKV775VmN4PHZoV28TTgryjNQt4ZAAd7w3oPHk2",
  "key12": "2oHWCcmDu933dMfLHU3cGcU2rLMYW4MvA6g9HMy1Wn7egVr8NAMR1PBiBkN7pYgZ2sd2XhhUsdie9Czp9VoUmp9s",
  "key13": "4K4E8r7BPvhbfpiVPoU9ir3fwWZRynJR1ZJ9CRULkUgJW3LZnosT6oCmF5Vkj6up84vbL9eJmwXFd9BNgfxF646a",
  "key14": "4dE54oBqaaCgnXAdmuxAnRL84Fnav5TypbxXV5VLhvdTvgFg4SnM83CbzB1Vfspj1SCgrWthpJcxqUxf5ymHmBZc",
  "key15": "5kPUEfz8ZytVjitZWmNgyZ8FN9v5CwRR3zSG8Zd8aDbAibf3tAfzbvph34ksFRus6VAoJS8uia7N5qpTnbroiAtM",
  "key16": "U2ncbuNdZQ3fsK78gyojsqZGSieAG9cawznbG5ogHLLcmXVm2gcXe51RNjJjZDo8oFvacoBEazDeG2DLqB7DWFS",
  "key17": "5AW28Kg25AhnSMhs6nWAYZqkmkePYwjSzqwqevrqztQtZRB4VDUaVeRq3JTKA8AmqFsecphEYcHJ8VEn17LryXLv",
  "key18": "PNdJRkTPw53mMNPVherjaaZzhz5vhevckx4Jc4SBC5LHVBoX3wMuYZwUffz1vAodwCuSifxKEfV8YF9XRBNF2WA",
  "key19": "321XScsUR9dNEuRKVqEEk2Qs1AcrZfKJFK9RGwsTqF2AXtbq9VkS2HWdf8v7UuWYNQ9SyXVYW9UQUr6c3LXSVK99",
  "key20": "27fjaBwTbNGXkC8ZXx68NbhmSecNu84o7eGGbnNmPKcFrPEvCGVSp1UXKejGXPGzg9PHaWNT4g2zSrh5LkJstAfJ",
  "key21": "4xro6vta3u1HL4kYfEz31AoRWDKbPZwHmV5YcTsPXKw8vPMvrDNp2R5bzaRbA7YbSTXARzYKLtRvHV2pQAM4WmUP",
  "key22": "r1RrCiGG6AquzUUoSGkZxNXhXCQn7JtCirN1X9XYZ8tp7NxpoEtpAtGHRVjfnvzmgZTUWzY676hpAHgutEpXpJq",
  "key23": "2j5kWHRGQUtxJ7mFhYUj6qckscaPyJpw7FT5rwMtHUgiDLZFm6ZPSKX6tXgiXGciJGvcvwLg5eV6JbfwK8JBKpmN",
  "key24": "675uWpouzC1n9o9jg9e8y2Yc3ZD3enJdjU5VqeTF3BmbeDgeFqujjWcAF16YRSXtftfhKFHcnTqtJPFX5o2gzRMk",
  "key25": "2AZPNuDSLe7wCwHTRrK7WMUgZC7WDkjPxeGVatNrMLyEg5anvnCz5GCtG4wmQNY75N7NZ4MjjQ9YtPAoVBL1Nti7",
  "key26": "tJYYm9pHTHnA4Vc2ddiJ88iX7bk36BzpJvZrq2svJ8KCzLBCH2Sk2mXY2EeuK9GXBKcftmJSfDqe2Xd366xWExF",
  "key27": "XmFg2V8XeRg6ZBzLdbLznBuCKCcmU5mC319phdZ8Ho4ik9YRKMjCTDx5utydpzSD9DNfXsGownVzrzPk6UNr1h7",
  "key28": "2c27tqHMYMy6fwH6e9jdfNoqvdRFe4XmA5wcKNN3uD3paHMqyRKZ5qXVTBjSUVerTRcUcjiFMAAiYq4QJhrWHYRr",
  "key29": "4HqBSshPrb4Xy8oWH12EVs5yhJVhqckb7Gdr8DM1iwDKhNuL2EoZMZF3cV7AuZHCHWYfXLvYNp2tjVLuMcrmvvUo"
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
