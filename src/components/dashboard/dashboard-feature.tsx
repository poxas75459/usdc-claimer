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
    "3PtvewChuXuMJhz9oiMECn4GN6sDVq2eirD3VjFD8ahwc6mU7RnEcLMsApT7gaweFkHBNRY14LApGegfTzXEsEaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j2dzNAUmQWnj5TwDjo5YLUefnX6xt5Qodzh5HpqmS8MBmxVUL2mP2cc2kD7uirLXtLngEu4X4UNewJ2KwD8DxAA",
  "key1": "4xYpztNpYBjUYAgR81cssQd1uSQKxzssWP6ma1pz5pDPCKsJn1i1kpKsnG5S5tDFaqawk1NddjpCyBCFVw8Y1j68",
  "key2": "5tgQCb6rDebXgK4JTTqe77FUt7azgwFinrwNqYe6JiCVbdcRWZ2TL6JhwoQrE5QW5dSzkbRgDX1MkLaquYfNBLQp",
  "key3": "2X7191R11cRVtYgf3EBV6VMVMArE6L5b1zvmNVkSWdf6HBWUgaGtbSsNVzZFjKWkrbjTZ9nHJd7aRvwJVMG7KSBR",
  "key4": "5skj4WrvQTQBV8F4BqpGuD1Y1VxAmwscJJEWxyeWfWdwp3nwmBo2BpCEqRoSkJQLPbyJrcMsrX89173FubAZteMi",
  "key5": "3BPkLojwmjFBsS4s5wu7MA9ZdpU74TbRDSefQbGj1dTbaFmHpRS116BfC2X9EBgy6wM8a8KkUySnwj6kQQuV2SMN",
  "key6": "3HBNdXaqHVyNThwiyTRca3wRfsnsGkW1QWYaDP9enFKSLoFTQhtrx88PQc8xFnPAcUkjnFkPtVBHetz3QK5npgp7",
  "key7": "4Sg3ezAAms845C6uNPuqduYcVbBGNtR4buhRtyT1C5Gi1NeT4sBxgfgY1VMZT5RNSpyD3RNRWD3knjzrjAkGGw7Z",
  "key8": "4jj5ajc29MgS9hgkkPPteg6y9ZU7sjMC9TeSMtJ8Z6zwKJgGi2Ym7jaiz3rMHdGpTRj79L1gxzLncKeQUn8pZjVy",
  "key9": "4zhNGEU3YRM8QAVMiHY5YLwqEgZY2uunkDWF7run7BbNSkckW3gnr5ASuTtMxPrk9L7yecJadum3u4irKsGjZyfR",
  "key10": "5K1XGJxPep4zUmaNScuTbhbT8RhvcA3uJZyuEGWrLdwsvpaGpYbCuTTViBTFyC3GHA1umq8vRgoq2CdWvfHgB8fq",
  "key11": "4imD4YJ75VyTqLWae27YFqJiKFNxXyqFP7SMQwHVMhTeybaQxJFZ8ZfTkaawDa3id3jjBQ12rw91jTzMsd2FGL8k",
  "key12": "66XzCXzjzJnNw9TDZhETPNssm4ebp71EiuqEy5jFttuRFdDiQgafvFsbBW4qPXXEhkR1WKgD9ASsqxAuTmkZGUzG",
  "key13": "6MbpcuWCFZP24NNQmBSp8mEs1Y7bS7xQxewE1ysV2Uf3RUesZ3cnHkzv6aVnqC1ifUsC8u2BV7BndqPxHTmCu2A",
  "key14": "v9qWXTwNxd3KW4cu3W4H5onoi78zW7WBRQDcf4VxSLJjciLbziq5HuW7sNgiBWAoRCiThdENhb2jm3UU2LYiVrw",
  "key15": "5rXwqGAewXMhat4NBhhDGGefirqrhXspN1PBRTaDZK1BCK8BZAcFcEHPtpsE43DvsmypjF9QGvkVt5NuLdpMXbRJ",
  "key16": "DZk4Bj5nS2gCp97rWi5yxsXRjPUc2ZY38woUyNe1tMtFtQfGH4C5UuH3MP1wEFCNjMesHHRjkHWnY2uL5Wqgeb7",
  "key17": "UeR4FKUHC9cmtcZPRwyEubiZt8BL8gFHYRzyTUcFgZgW4LuE9Xehkdj22jb4hYisuRU6CEHh5LAFKuRqZ7wqS5H",
  "key18": "27csinD3hvAofePbZKSpioPdAfMTuRimubxSy63NkgYP6xThYQsi93Ziq7ePP9YviHJp62b1EF3UJNDzXkWHC5nT",
  "key19": "ACodxV21GSpS4xAjAUuusrtTec7rZcY96wQdCzA7qd3VzQaSpkGorkFzH3LsNaYkeMbJH6Uic3xqMGGBXTzqYga",
  "key20": "aEJ9Fi4u6FBFy9uukaCSX5XNpG3S5oFj2VdcwvvuZJsu35SLYsyVYoP9xjmVgrQTp2LPJNLX8oFAGJhnRwMesBs",
  "key21": "2CQ29cWrheYuuhMtXTCpeSkauS82E5YQPPxDCVf5wWkMEwJQtvMerrjsLUMBE844ioB9PtLDbjJqATV3t789dDoK",
  "key22": "3ijzm3Ubf2dTaxAS4y7S5kzzbcyxZKGiBWg4c7zamN6JbV5ToAvXDSz8kc1VjwgipisJQiodZHzpQkqxACZnxVik",
  "key23": "2P1vunahoYbTgYcDpvCRYaZbxKjn9QMK1JPzmjAbwszEbqZ9xKwkib7gs9TY4pjNKUaj3ZP4gpo2mnY1uPsbForF",
  "key24": "2P4jzuU3wHeXkvquw9A5CEf8DXimjFbuZ5665JuuwvYiFSKSGW43faTNNKYqQBRWSZXJ1YM8Tc6j9GvSjsYXfMpS",
  "key25": "4kKyWbaXgMGv5MgQKHLNpjgtXqyUwUPe6gmX7QHorwC4aeV1mJmUuB9XRQDv8aBayQ1ATDxPgoRjQFn6xRVAJBpo",
  "key26": "4LjyxY125FnQhXympYa6jrQEUCifqppnAtyWqYTW6syBJbJ7tnB4w3hJ2o1DqApac9e1omc2kbbscxi5wJ7y7xJG",
  "key27": "55MdwuifCbQQW73bQKN2iWNqZxrcKTsKuXMBMARHfRSt1zrRDzAEY3MkphaS5AyLqgTxiytakpVyXNPfgciXcgN5",
  "key28": "5KZcz59VpJDgsycQAKwcMD3KGoC97E31iVA72hsDMX916Gk2nYjUZKQLBcUfVb32zxGs7kgJ71p4kA8RUtfLfsaL",
  "key29": "2okUvL2ouoBgTzNZQpUcfLvRfwP69UqJmb3j3Q8Xk5eDJXXMhnkX4uPU8gG8w9Yech5p9m6YEgwNoGx4VW5zbUa9",
  "key30": "5g2R3W4QF4ok8z4n6ASokdmMGgUHHyofptSdCNcSpinKMQwzLr9uyhGm99jd2k9qRdaUhUWWcPYpUqKkgPA23GqQ",
  "key31": "3m1UrcGAh8tAVuatp7pNPWA9TV23kCCH6BBTtbFj3mekPW9MeTsUu1WtsPLwqn7ki5eG8Ta6PVFk2WbbusewMZR8"
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
