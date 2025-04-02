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
    "5suviPv8kS1EwYzhy2NFoJuxcUnBnf2vnBS1PTTWDy6DynxXrPTUXXU3zTXYXV84PhdugCKtUZ2WTQbiBFtagsJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45NffqRnPwaCoV7WFeAMTGyYq8bVSGzueY8zVqB3ZT1Lht13DsAMJgnDQGxSYjoScNmwuBGWDPSn1uhdPuzL95sS",
  "key1": "33HTvT8AK3h5atf5JvSgmv2qwyo6ixFmaV7y7PQMJEZ7kNi7pX39pTQUhb3vSZ9p9cKaScuVQ9Bbyi4XtFJdcswN",
  "key2": "5DGFF1oi8JR6LwCTThocBEa5LLKR8CUg8yCWaneh9vhK34JkfPm33By2BnQbJvXXUAb6YH4ERni9jpb4pwBfQbXq",
  "key3": "2BKdTX8WTvMgmTKPBqDZjEXn13MQ7p2wgUxyND8tV9MkSHtFkhBYEzrnrCH5NWHs36a7R91dbkBiukaqKNofRbkt",
  "key4": "4ki5uHxrrHFm8nLgs2q7GNWiy6gDp9LMeZ4sW6Rt84J2jLHRsHwR8pqhHVHDBiUbZnEzMyh9pUhjHPpcLMCV5yG5",
  "key5": "2MRQ7iqLeqTuzGA1TpG2Yx947KJyTVB9yVe6ZxnR7WgYfx1YadsVmR15dcCzDHUhy3vcEK8bhg9vttkocbC8Db8U",
  "key6": "4ocCUoNryUyvcCyk4y3VSjiejtXR4BemysPf6vCBubd2Ki6NmhtFnc74mWeQaWCxxE7XQTktnacu3kJn2Kwyp7Ep",
  "key7": "9AMrxXrCNQEF35Gn78wfQiGDrV6RQnPYoTgjbevW9urBiP4m6HSR3udTwbry6vznDgM3FgJVytAmJBSY5gZe48L",
  "key8": "4xnpYc16VPS4RhsBjuS9Tm9sJKaocx9P9zVnjgScKeuQV3BPqWPHWisuZRot3c1nBtrxh6EWZdCUYJUSgxA9Mc9W",
  "key9": "FwAYc1C4CoApRpjFuUpsEQmLf1DzBMyVjKXbuj5n4hPXiSmqGaQdKaMvL1PjoWvcNRKd64uGJtjdv54YNhx6gFM",
  "key10": "36AMrh16sx8kG8UBARiRh2L5EwKjTy127j8DjJADk1v895bvZixyPC9VV5h1A8FcZxGW7ChdLsytB1eN2iBUnUAc",
  "key11": "zFj6LYWRQkpjBVDnX7mdp3E7LVHZViiUiwU4CZaYELXYMsh9TeqxmTrKkSDrANgEc8JLvid48dYD8dy4gjbVQu2",
  "key12": "23rBnPNh86dN7X8vw7ixkS4bB22dn62WcEVgK4xWkaCnkGDBLDTYVA5Pf7ge89htfkaWnjGu3uApogN33zLNg75b",
  "key13": "4bjSSiCZ6piqu5Rj4AGcJZkpU14nwM2mJsRtyhUTRzBwg6vERyKngAjpRma8cXVqig5aj2cXYdJ3pjVb9CZAuBAP",
  "key14": "59d3FCC2hCX8BGniT6rRPFdRvhC4vCLRE3PsdgPFWDD9wEx553UEodEAPLLYMq2cR5znCdPaJQBuvgmQwzwqDrTC",
  "key15": "2Bi85LTXPBDmRV35C3Kr6nGkRFWzowQ6P7wn14mtgbTA5GQDuZzrNGjeNAnYgDjvoePc3ak522ti8sFvxhTgUJsa",
  "key16": "5RMyJtnD7KVodt227bi1yLknEQa1XMQiGdcVRzBARLQVKocBSdk53czCV8tiLE9cncttifdTRohSpvaL33zTkHtJ",
  "key17": "2Ynq3rwxXEcWmSRoxeduKGnPk3j7oETUYhggWX5AymkUrPGNE6qAu4c3EwkjC3u3tU7v6XBqHbYWmqRW7udzKhPw",
  "key18": "2KSDaHi7uwAoiBeCVsQaQnTGEzAsgAD2SzQYkdEHP2C2KqtScku2YCnFACED59dUBBq9W28C8Em5cjNcHMGTzhmU",
  "key19": "38kmbBxVDUf9TTy9NB66uqVavxFuJYmDpd5iN7pTXPna7Uiobmqfw9D6xu98Fkhf2TrV5xXvCAZGWhxESfcLXb2W",
  "key20": "6bfhAd18Ybor4xG1N7vNojcdAApn28zk2ZfTsouXKQLg3RiH7i9tQAxS4AJaoK2a3g7sB5WrW7tbGCDsUAzZjeG",
  "key21": "4ZDdjBCmiLdh8Gw95my2iW5fySut47aijkFMuoc7FwAzCoExnEyuQq7sDMnrtVi1tSc4ecViBfvTRQbgVwJUZP57",
  "key22": "5RorJFeQihx4kbNTio5n3YxYpnnAgpQZYPTW2ePRPxvbk3h9dho3nimPdDzvC6Jb5ar6nXFqzJPbJRe48fxJDvQX",
  "key23": "3iWyTEavLjpP6te99ofRHgVTC6mpHhLVvUjJoWeMC3D3hancJPGA6kQcj8xcp4cadBenD2fzjotFAstS6VoTpXAW",
  "key24": "5z1EgLVXAiaDwjfHmxNuHkJpbXt9BiqA33U77AiQuwXWW7WpugjEnq5mj77YrbpqqH4Q3jPMcXhX4q6dKvJz3PbH",
  "key25": "4mQ78qaM19TXW1NgD6ee652oMS4NAokBJfmgWMC5svJExmLyJfiLTSeLij6pwXYeSTMLRjDCUjTCjAfebeMeoLEy",
  "key26": "5jnRDjs7wqm2JAXYuGNHApJ9eBXMsRGL2vdhiUZXXzXMsVhkJkcQF7hBVXe4mrx6aWDHHBxuJAgwymg4LtPXiYrQ",
  "key27": "5t1H46vgMwoG6vf4ViDbzXq4p2yWhXa4iN6NfqAvJE8bZVwPrzgwo8pAJwmGT9rqu3WtMPrZ5aMFgxGmUPhWBNfK",
  "key28": "5g7zjx5EfgaJBRk7hahNZzLNJJx7gikxQKk79SbEiU2Boj4gS2uwAnsM4WwJxpKrroxxXneJr9u3gy1xM1G4f6A1"
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
