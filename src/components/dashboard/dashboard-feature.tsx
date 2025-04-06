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
    "2ZRLZyaqqkTidKxajMKXuDXMdPw8wZm6kKAfed3DbvpHvH2bQzWDkfbWECyLSueKdkE36fHXGpmYEs49tVxF7zEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oLgV16VuzuXGcfQyL3AKC2NuB9SSNGjWMLwutxm4qoZ387LwxrNaBiTD68NFsqo3pq8RDniDJPuL3F9Ytwh3eXo",
  "key1": "21eHuAxVGjSNVWfsk7Xn3kt6DCAzenZHH4nv1p2MZS59EfpcY4r1TNBjiGHgPo3FSgKQ5f3MgW86BrKoxRU6D7ru",
  "key2": "38qLncPp2psmaVbSV3SLpJnG4YEPeZVvwwcJZbVwXD7WfLxo4mQYVX1skaghaTUcyrAg6TQfYDA5eoo1AtPuaoCL",
  "key3": "L3AdoWmGeeRBg94w3rH5Lqq5gjntHyhTy4nhGtgSWsVoNR2thAswGs7yMVi6x3J1pW2SazbdPTMFHFRS17QUVcW",
  "key4": "4a2zxP6eZPMHE6VWGyiEUZg9sRPRwsqsip3maPoi41rPTWyXcjxmzKMZXBKY5EjM6UGo6McSuMVsnupS53jJ85hJ",
  "key5": "3C3z3X6UbU3kQaMNfENbnzBSV9bUVZqThQPQiLgwBPRx3mTHbzDG4BbWhUxwnsoJhr2qwtBEE541sfuNKWtRF3G9",
  "key6": "5YBLLy79yEZWnQiNkYaXvUzpywTJHZipUNAA7YFhWRZdCfn4t88WbxVdMTaqmx2Ga7ySrFJaFugNCuhEbyyCdZzy",
  "key7": "3FK8n4YZF8rP1qNWE7m1gPf7VXP7Nnnb9GTqHA4kKgVwPJB6QXAoB6QiMof2oztDBBmHTBcNHZCrN9wP4UWNcn8c",
  "key8": "4D93h5UQA31sDetqs5GUfx3CYLKtsC6KXuzVgnihhoTYTBsY2BX7SNYNyFYscQNZtkqxvPWCwxwZjPhK4799RVaW",
  "key9": "37itpiGMquCNmQd5M1Cxmag4ChM9mfzKLYkjaMDsRnXV6hLffQi2s3ueWwPdpdrWpy3f6tiqD7vNvqD7kk5JdAgi",
  "key10": "36msZnoiiSUxAQJDBAPJwCPNUX2Tjk6EZ42WUmK7Aa2c2sPMBPqFYX1nRM7pxr7VJimXTfBhxaMWYpP1B4mCPX1x",
  "key11": "5P4mRF6xLg5kUZNVKVo44FvjTtk2RDes4buiY1eTsHaH4oTzgDCKbnXPsXPccVhtcX3Qw1dxf36s8Fjer3emsbWm",
  "key12": "4GSip7jYizG2xqzzPTK8UJDx633muGqPBTY93cvgYFHDLbgs7TTVqfvaqs332H8nXzohLaZTJqkNJL1tjTkFvXCP",
  "key13": "4tUVV9XhwedvYSpwYiQCN6ZLpbQc2McCZQbzpbDwBKgF4aZ3Gp8ge85ZEMVhNcq4KQMP7csotxkYz6m684frC5qD",
  "key14": "eetJ7Tdn7z9oCCcajPwCbnwE75Na17wo4Nm5wuh327TJX8kdm7YePgaLGvU2D1ChgBFCUqjDMqtSEyvcxVabMEw",
  "key15": "5QegHkiMAicqfa6LQSvUvaC3VhaYxWgnJuUmupKBRaKqfHD1ahnpNTz1daMCWwjxjLzNV7dGV3WsENLjB7vKVMep",
  "key16": "mQHr5G5SyjnnFeq1QQJSdGbKQ3ie8dkPWEvW5XUYAmoFu5c4de7ZnsKiiBJ3dcL6nd4P4LHv3CVUCiggLfp6kZa",
  "key17": "Awo1eNuLDfDL2cJ39gbdtwAc9RTfEPutfrMjtJq7Aw1L8bCKMqi63jKD8kh5k9LxTW8nDWjQbnMEaNNjNPxJNeR",
  "key18": "5bnxLfo4JK8SKDVxedvRazLYegy5Pi9TC3HHmjfE1d2Fs6sffH61fWgX9uwQAxL6EJBzCjYC8ZMGQJfBGPjRxyLP",
  "key19": "2SkaYt8SDDTxiVpviPpSSC6RsPmKoiLe5xFRMRVrXp8zcBLwruepD8xhezaSAwvTNeYaMmbnbG4KUp9KdSskU7jU",
  "key20": "4q15bTHn9PuBYcfzsmC6ra3Ye12XxR3r2trUQGVqPxijtCeo2TWvadwKw3weNHvRkxGWd3kC69MECtwJbk5w68uD",
  "key21": "2TBmW359TNUA888EahEgnAz5ogp8gLJUoreNFLxzsRurXn1rF4VbPjtEmFXjVyZ3sHUSfSLaAgGM8o1fPFEvJhSJ",
  "key22": "3D1qZKnGzUW9YpiGmmg8MoHg8WyTvUjXYjE67sgkLKfjfLfViARvKxM7FJknbNNLbW4ahQZLBU85tPG3h8g4Mo3u",
  "key23": "4Q2WnsTHqx7DvET4smMxgboPeu8DanXGmY68SfFgQgte62DQNf3tmjQuVQMmS97t6YKxAH9EVYSbvomTmwzRmAB9",
  "key24": "3wvGs7UbMgVaMmj45jxStT5gy4ttR3ybhcwJww3FUZKpmzB6V3tSaezxhiShuLCDWY5qGk9djzFLLDsLLFe2z9cS",
  "key25": "5gZQfqTNwo2tvAeDiY2Sqpc13dCPccSwFoYrUArWW6pTe3yd9DZ3xwaerycShCLjsbJfUeGF7UHhGnctFKMu7pjS",
  "key26": "3EPDyeQ6BTtHxSSU2uuUqd3cSUCTpVZXy2YmScKTnWmNJBd8T3aEo4UDHqx4oC4SCoJ8ukTRo3ybpgTR4rnuCXJ8",
  "key27": "5dQ48oesAusVA8ModijgjEHwmt5qTQrddYgsGNhpwxo7unWYDEzAbVVNV28e9nXfcEGkL4zTTfqHh8Wjxe9n3YfF",
  "key28": "BWt8MS57RbZ1x9gwDxjxBUYMwxmjZDcK8YvTscSfq6XrKhsjAcfzjrAQd1Caq1XeV2gDtnZmNGje5QsRQZRevPw",
  "key29": "5bvn1LQFoETCax2msfwBFKCiA97TGTNk218B8hQrwLNdxZEt7SyKh72NAEy8ByusussJMERrgbGG8jZoi98bkx7G",
  "key30": "5iYhgBo2rAjEkx4TJztooe2uN78GPf2TUtWtcqNjQdPHZ7uCwCHMB4Lg1NFfKSiDGMAatSnHGqc58du9ooGDSAs2",
  "key31": "2fLkfP6wL9jJ8vkzs6n9d8tWSF33Hk2JviFBgSrvNLKWbbrtd4qL8JapFc8YhNzsTpCdGHh4JJKT4MczyDK29Xax",
  "key32": "2N7TvCHcS1RnfXTEDQPstknBdC6gUxt5MJdExx6Wpq8CCdSSgXwuYCG9cgzGxdLMtnjhFbGyAkqkZA7Lrajw2SN",
  "key33": "4SNwXBrR1Q78wGSmLXfQG1Q8Gb5dJ628TJ4u4y6S4Cgg1mhGjJskh5sG2Ary6s1Bz7GHs6m8X525PqG2UyZ2vziS",
  "key34": "3AfEmQPeixG84qY5mXuJet66sPik5gna5ucN9WTS2dvpdoLrtcbhRw3jTrCeqXE23WR4tyQ2cKpffp9vFC9tYDe9",
  "key35": "4BhcHDtPiLLT41AE5VNZKwCUy5s6FzNna2Hr4WU6mMdMfE1iDMVXFEVENWt7YcWBnRUY4Qs7zQptDSECnwCv1iah",
  "key36": "4QLKtxVVQsSbv7n3wxHBcARmbXovXFxAsZGrTJrFYgf23ToHdSReWHoC5fA44xWLzaAbSTBnmbYXDVPtHCc2ZRdn",
  "key37": "A6jXdo9BWDiwaTP3nZR3h325zdrU8Pxt9k9CN5XHEbGZmQgZutdThgcAB5yuohEd441QEAm4R73dviWwj9UJtfM",
  "key38": "hfswi6wMvpd93daV3wmRxLUkerFBxKijiUFnGb4BVTTu25UXNFrM4PWTuu2RuEHUsZheZQoWjxz9qraYthE4rFW",
  "key39": "4FEdLTwp7SGwrVrXkJ2z2CUjM7nfLKsEGS485XBhfMaru7bohazkYNvtBmsfXUsWCK7Gd5sXphF4UcLuGuwXC29v",
  "key40": "5TUmUxbgsD6aRvVrC861LV9TxoKJLJT6Dv6FMnMumLifCerzkbQiaLuhm43TLJrjKgiRwnugmJYW7yunzTwnaska",
  "key41": "sAuUGSpyXoS3muYpsJR81iKtenvz1nZM2XgCGJdxM6oyXQewivA52bevveDXoMgufwJVcehe9hzz58mhPCBcCmC",
  "key42": "2hmPQmEKSaeMZXHPhFzZKigMr6jtTa1zu275gCbGwyyTWELCECPeGCQBmVUtuAvtQEfgjxUfFcz9zCUELyuxKafz",
  "key43": "RM8UTgqpay9naoTWoXFCciWfwgnKqyfdiiuQEWu9MffeQtJWpQjX2ZtAGakDE5wte4pNLwz36aQvi2hKsPxaPQh"
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
