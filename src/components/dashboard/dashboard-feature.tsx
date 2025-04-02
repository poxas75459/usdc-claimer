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
    "5LtPKZbrz4cB8ZtQpetfDK6oKC2fkf2Ffp3MxfCRXhr5rM5x3jLNCiC4nz2CE46WxH5WENUN3ytrfkuMWezQ2vXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hXGzBHeH1J5HW7FMFDwdmZrLipttwrP5Eqk5rbifBXMqUPfttbiUdFmriuCFkS2AfpMd8cADW2aShakYGe3JqrG",
  "key1": "FVtMidv94R6XiJCLw1mgTFjxYYguHMBPRcqpCtadAoYSSsJHyxogPdeihvKEYojjDWXy3UeVfefiTjWH5nshhhm",
  "key2": "5DAt1GtxxtBzxmi9wDv97iYYzKVFEJRJNKrCS4EJUepv34fWzM3eSh86t4f9sAof1JzR8drM7JfZY1y8hkgaNpJb",
  "key3": "4b5t4zNSr2N8CCjM6sDpFUCdyDZJqbEToSH14s7LaWyuocvHeim9u8b5EcAmXVFc4V7t3mp3DRnUshVxiL4kaCU8",
  "key4": "2zgee9Be7znhugr8UrsSj8y1nnkXh3AruumecJ1UAHukJ5AfFB4guTFZ6YKQSfecwN4p9K94zUZgoUnBMu9ghByj",
  "key5": "4U3T1x2Qz5ZUA9yGiaBbTWpAXePD9kKZpsMHtxUSP9KoPoCVxiwGaLGFsa8AJ59hYGyGbCYDodFcEcXzPWw5NSWH",
  "key6": "3gtFeeAvZnuGYAuMBL4SAfopA2kFuSV2Sm7FVEpAgGjMqQB3w4vLbs37cxHiAvsCgCGT5UdF2CqEGtdND4uZxHfG",
  "key7": "67iTvDCng1kr7sJZNxmCTXjPCZjX1pW1SWNZ9YG7XqEMyMisHvtBn1496fiFG1A7sCyMfHAQyQtnYaZMHSZBJdcq",
  "key8": "4J59cLGbJswTFwQmGu3FoHwjN8cAbkF4CAuNTRzJDm6q8o53iC8dys8s5hxkfCfHFMkziDZy6wuSvDUEC4HEd5xM",
  "key9": "3azZTDJNh1irq3Rbq3FvJdXSADxVpuBUcRy25vP7QYUu8Atdgkm2puFs32QwG5qcReG7szABKoJK8dbhzDcDHM4G",
  "key10": "Czwu9Gyrn6PzRBfAtkb6p8n2K9YrHjnxo7YT9HxeAV8crzohXyYcEWxG7CVkM3DdBkCYWKXFiu4655XD2m81weJ",
  "key11": "2VzwCmhPJzXTzhWnterjUikExmzb25EGiRzfjEBYLoGNjaMxQx6K8WjdnWcVfvpXs2dm9Lj4FyoZUdHHjy2ALcHk",
  "key12": "szw8EMFkgFN3ceuJ23WqgSAPosYG57ofRjpboPNJeL1sN7FiVibydsVrTSY29FZy5TGv9XqTC9XYiqv4J3eaeAZ",
  "key13": "EDw4csNu3ANXUyAJ6Tfo33Qxs498TcbX1EFVpYMkAgMC6UmrCsLSSAPGDRra9qwS3YYC8GddMrKrpXZZ1jz2zff",
  "key14": "3zWJn6BRRfz7BqmLAAGSVR4YQT23QiQgVrcfMbkTrYJyQ6VMSjAtDCwGmH8cbT8FSCGFBiSDpXH9ryZZVcn12mr7",
  "key15": "12A2mFJBW1FYGM5AJEi6H9Dvq9CmgVLcZV814w4JWDZxQXSEpRw4MBx4NbqisCDs8uPXksiKpmj6Te9FJRUD3XQJ",
  "key16": "5GempdKtxWVbCH2EErpEGDbLvZ2k4goBZar75Nyxog2Ex5zbp39nr6795pxHwFHgL7vxvhf121fpZtSpTMGpeSKH",
  "key17": "3S3W44fcSorohrJk8z1hkgB39b36wESwWdykrBvyubDWSCV3uRUVhvmHnzAJEh2aHa5dpbadkN7YYD4uyUZyjnUL",
  "key18": "2JV4ScPYH7RoLVSFG5mLfBKRaPb1kQXa8ASb8cx8TxP1M6cS2F3H4s4qinJqQb2H1AkgmbvqZZjf6pxCgfBFXk1b",
  "key19": "2LgFWGzMi3CYZFq8NPNWVGvuRHWQ7WFvmwvDJao67yn86EaTg37rLJjCjsBbrV9rkDvCTModTW4CyGCUhKjRXFLy",
  "key20": "2VXpCSgBHTDFS3SbKP7kiLowvCUYTT2cirEM7QSTjnHAh7cLKa2aRoGoVVveVhrxMVBURKpeeFvJ8fTg9X4s1uRw",
  "key21": "64L9Q6rRFNconoB5XLhnSXUP6nwwEefVaydWSexo5mEvLCzk7sMHu1985Jm73dmVd32GE8ChSybL9abbSN4rcF8B",
  "key22": "4qomC9b7CPNBZZALZx3RhYinY8FRsD1bVSXNJmVAtosa8SFGL3QYebf6MfdqgG7zUUxtnvAow3JhtNV54PPni98b",
  "key23": "2SKjPJhe34xZWkjdRriM8gYtogy4NCDWj5WUvX9ShuovNb6Rj8vwsy3tp2euNm7QcZ3wE2mU2XMDs9bCdxr3H7b",
  "key24": "3reVEsX4aZ1R2KqdYHwV9uoTmnEBL1e4WP1gQ6eQ4ET3wJaHT2eqxShjE6MrmJyjBwrMyW2P7cHshxgr7Ktj411x",
  "key25": "4QpZNL5KmaVoLwAw8nyF6yE6nqTB96PPK35FPbhcKxq2zmZQBenpWfZ6vTGD2a4K4DR4QER4My8c11uKy768CBKi",
  "key26": "2pyVwBxoM6oXBEADYq6eJSVbFA9jFtG6WHMmoVpuP8KuXQ991bGCNfCN9iSBhvZQVUZfYKfn7gjDZhV1P3mL1xeL",
  "key27": "3Ev3EePTNLSTdi6vP9VbhodP9TH53AhdL6cfGtUdrjzong5uFs3qkdy1TrEaytzdJaEvx4aR42P6v8Xpg7dPHAQz",
  "key28": "2hufT8cT3diYnJV7AxknrCL3NZd7tfKaHnKWB4ES5e77oHQxy5ZsJfPNyNU4Zkruju3bHQ3AZHeEH7gaAxYc2TQi",
  "key29": "28E45e8zjUS3xGtsb9oaGieZLR41HxktSaf2EJW8n9echXbfhN5XTbPHP7N61bLwfKJxSLbAGoBEiBJxSgTyQPG9",
  "key30": "2DW55DFDajVz6DyctzUoDoaVLhq61XXJK2C7XMvobfiFYvoHafp6ToAV2afp3mBrZvQbjFsrUDXK3F4VAqXXCSbq",
  "key31": "46DNP8mEpdUwz1fmLMcQ3JimGeS4aA3QswqPhqVH9fTpxPs2YkYteYtDFwzuwoq8dMRVH24nAxGTZF3JU2jwMa7K",
  "key32": "3L9MGTEHupVwZQ5XPuAkdxvtTQZRzdQVofaocqNNnSf7eSzcHGtnRTaSKFKUuCBynVuismYxJrWRExVraJnqK4jZ",
  "key33": "J5973Bk55dzRMpmf9gY897eu8JH81Y1cNyLfEe44N5tUqnEoTe6jbj7sSLVujKaqUk1kJSmZv8FF879q4HAt9vU",
  "key34": "23MnxrbpzhRSmz2rpYJXrCr7bczs9Kn9p1Lz2r7iMxiPFwRUznxAMscNPcgLCK6f95Wo4sjAo4N5wq4jTQoBMb6s",
  "key35": "3sQioBp1JmdNQbWb4NBDGXkhRyB4ehpcp42AdoqU7d6RTxswfuWfu5Q7fyaB8XfuK5UGR4ARBMnW1ZHgKPtQe1jj",
  "key36": "56d71yPHNKqhKdQLYyNSq5tmw5SZEFHa5BxnAYRRjghvZMshST5dhcjtG4cB1Qy48ZKVoQEYAsVqX7LMptFBvZST",
  "key37": "2KnHdWfCMG2WbDAB5hNA2JdRGeXXd91RjYcxcwg7txqRnt56GSr8vjT9XLRYeef4cd4ATEQ8g8cbEmGJeiKoPsrK",
  "key38": "5qLhaZpP8VPxjR64t8fer6tCCmt5jWJKdixWZoTrCbkKqbaodkkpT4o1ywkhWfi3Ptia18WrYFjVjuVB9P56edG",
  "key39": "aFgznkWXSydy2RkbQdZzgmMUAUAwo8xQdtrz3QVCWeAFckZcg15LSFMTu7pohjb2SUokef1j3GeGc5PQQAU4tdo",
  "key40": "3qzJiVX5xSrDtPqJ8CmekGPZaCSe5A55GCASD11w4gLfvgrGjA1LouMT3joBaMpLTFWSgK3djztJryri4xNANdDb",
  "key41": "3ejNCjcntTpL4buSk3Tgpcu49TsNNdsy6t62hp8L7LBUzfd72aaT9HgwSPHB2sNDrP7vRXPf5ty1KAcHsXmZND35",
  "key42": "59MSWdepVoByQbrAnRVSoWE9W8bsH1NuqtpmvmPwCWwy4v6GohzeNjThLNvKZnB9YwvNFCb1XxZ6TKRAo997KQo9",
  "key43": "4KbioK8174FGWEfPUPUzXnVKu1YpEYMPAzmGVippk7wpN2Au5VR6eoXx4uRAMc542apBwZZgdTWj6WDRvWcEZVX5",
  "key44": "37Uo4hU1b7HcY81jyrZ4YJ53XKUJ1jnxU5Luu6g9C4rbsp31w3uME54nZjyc3Jhh29TinoHQKPPF6m5WPhgvEiij",
  "key45": "nYc1ZnKrEVrwN5ur8rWESxjXufq7mXwr8FYgA9fkkRCACT3dFxTJWTCvwPRfZk3vogWMgzpatgxTS2QLzA2arRW"
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
