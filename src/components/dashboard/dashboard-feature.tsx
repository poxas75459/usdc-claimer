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
    "4LRmeZ2JBi5vnV7Kex2QPfp5Tw8XVpFcuwoTcatoH6biHQ6UK3aPM4o3LrNVoWvbSCbB3pQBA1KNBLoqbw4SoBdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SDNrLQf5uLuXjURMLv7VoLvDh3T2koHvp7UYxwE8VLG8bMWB4QS21io5frgtsxZQiyUYnjdoo8rJfdysa9daNdC",
  "key1": "2bzMPHzYuEa2BATawe5sSnafnruJguMp9jjCk7GiB5tdBLgf66VmPwmmqwEZPubVPeUdaG8dLtFVFu8oWTHejqkA",
  "key2": "3yntCKZG2vWnwbtF1qaPLJhUNVq9YDYHDFWrPsTFGWuHpJ43SmqmeAbPs7hgRwivb9Q2qYvro24GdRmkBpXiVxRa",
  "key3": "qftUNpMo1c2K3dvVAMJ9L6uSwvsW9vNJ9WNp5NLned6kU4HKCMTwYcr9NNjqNQNKLGmT5sm9sJk56rGmgrYNFSS",
  "key4": "59SWVXwnhgY4586DseMXYNX2kX3tpabeWeFWu3nrELzwEBx8XZSapFMrkGHcMWAk9knAr7heNZTUbb7ZFnBUQTcY",
  "key5": "5W9Aownes1ggWm3mvYeFS6TvEd7s1R2RMe8EqxmsBwxZF6F3hjujjjgbXPggSyuPwX2JTD9LD4HyQdjbuXTNCCWJ",
  "key6": "5xonAqE69APdbVyH15h79wRxDKij6VR9cXB2d9H6aEMBarrGTuBtzMBtfh2fi5so7Ydj75Cmc7o8bPhHLWwvL6Ji",
  "key7": "3q7U8C4KMHj6uQ1bTuZ19UwLMX3eodDoWe5a2bfg7g1zp1hZvMyRDFjkAwxqE7abQDxftuk7c5iBBdSv9ZbbvkGa",
  "key8": "235btTiPfHosZT1mwhoa5Hp15Qfdgu7vcE2GgFygW7B95HEcZJmADW1qQrtRJ2WpVW1rpQNU5WQqbNXAwptg2a2L",
  "key9": "46hefBQi9EnWyKuevKJFxW59uvipAw53AeT1rn5wQPun1ZFUoGRA5dbHvsQqi7jUAG49R7Wucqv9Rxpk1388rAcW",
  "key10": "3dqQFv4hyuAS5xZh9C24xQdJBkECCLtTeJVgT17KpWpBTX1Ugo4g7JgswVYzzd9BTnZqRJUivLDsH59GuxsRrdPB",
  "key11": "gYHeDwW5MsmiXDeBWvkd6ccSP4YZ6PGznXYMnnxGAcUiKNPG655y1JcqMQArMvxeuQ6U64Swh7zAiKsaovr6Xif",
  "key12": "3fDUkveFcJHpyRwkgyNeULbrL6fpNXwha1fXhAfPr4zk3BAZhnXXDRJbL7KnZT54MtvFjLyk9WwH1USshSFgVwbc",
  "key13": "2Zm7JwVHmtTQpCx8EeTPWjBfaE54jpzFmyX43cAnwN9Ha1jpuhyDzkjBDNQoqUyhaNGW6Ykb7zR7NZceP4FxXeUt",
  "key14": "2RHsHSUoLqnszi7eYuiRwrKvvGSwcKCYXp66LXCUM4xkSyMf349t878TnwqbG6TTxHX1M45n6DGhoM96Gt1WYuS1",
  "key15": "29JftsJx82fiRbTMjVsc8ejboGHbaLovfFnSV2gfF6QwtVHJhz89zayomKWArWVJir8AiEE1JMWadmAjTsyhxh7a",
  "key16": "5F8RyTZXXAD18mZ2vFUbysrNeFrugVoNow4H3CJ3g7WiPYZ37jjhSk87qiJoTryhobHkF9tGtgYTT99YM1CswTme",
  "key17": "3QNzvfymwm8JwZXQCiYbcd1SNHnEJyLfiWS5ZFVVaoAYrDsxHy1f67A4M8BbU5ebz5tVibfKyVM1ZggMrBJEZRFR",
  "key18": "5uGSaoBhv3RFFo89PjxHyK3CQehkzc4vypRXm3bEMZYiaHgLGjDAhKBxishBWgQsXUkctCRech37hV1emjaUbVH7",
  "key19": "5rGNi6EE2nr8P1t3xqv8oQ5rS6tCDN9N6UFYtgZXAyqskJPMGJLgjkb7TimZxUMWJ9Xv4pVxmkEC8Je2d5akh3gD",
  "key20": "nyLfgQV67JUGgqJYnnwtWgFUEjPqWv7QttPZDzDzW5MrjkL26cUkQLdwDyqxC9JKRSMxZfoMRSoPnVA6qaf7vHw",
  "key21": "2SpuuQDMUFyLa5HxfSMBobdcG91boLXwp67okv93s9TdvYek54P2T8LQCJ1u9cDJkXZ7Bn6rEHMX5cJidik3Caf8",
  "key22": "3jchC6zACCJJQPoYkPnPaWpUMAnG1qCwvEN1xExab89kRPxxsCuJgRfcbPFVUBxZPMk2GpfsGzsYsGj68Acv16jf",
  "key23": "3FyEcbjabZ6h47FpW9ELCQFsYsv7t2ufdMk92aqYX3Fv361FfuWho53ELTUaQLjrrs9hGHwDhW711Tf95oK3C5i9",
  "key24": "yJbdKmZwgZLVgej2XVvr3Ymw8AhDhHvyANf8uuExmn1ZD1gr9MrCiKLYKmpi93menbNm6nbHXRytMGZMqvMkMa3",
  "key25": "4Z86t6pSwH9soi3XyWMvM2F7Ncvo5gi8LwiBht8EVzH6iR9yfx4YgM5W1AaecH6xMKfadMhPQgupcFUEiHqtjbR1",
  "key26": "2y64n7vvFjw9GbpEhDQZSao1JWP3yfwy8Z1dsAFNBuu5MmUVBqkNpQ42QscSLqZgAcfpTy6Lxp3bQRAPcG1boUS3",
  "key27": "2VXm9veg2L1od39AaKf5yxJiji81JT4Vr5et86JEBqWvdBrTFrMoKKRturMdWc9YhLQKxM4o23ztQDfaqgkRfG8g",
  "key28": "2zocJgjsZW8EGYEb7RqUZKU43YxpSFLh46j8M5tSVci9oHxJaPCMQ8u1P3pR3pNfCrXswkohGGdPuX1n1aaRtJoL",
  "key29": "5qkmhjjwyxYhYCfcz4ekNo9cFbHv5ULv4QfgkVzDLkMkvefAg8cGK6FnRyK7aeMw6yxxHNiu3oTrMHunmJGRHTdW",
  "key30": "5CFj9XUhZwQ4XapjYGJgVUgKWZZZhanVGsBmQ9TaxXJtSbzZdF9ydA8NZUnUHbjKxPVyNHjggGfkkDB1RciaQTJe",
  "key31": "2sgwKeXWDMpNYk7kzRSLe49dHcJGgyXmSu7BJo3Wh8bjtPa9dy11UteyXCvfgCuxDNzmp9k8Z2fBirSK9RAS1QK7",
  "key32": "4kS44gP3tT2UN43nPEiN5Brk7z4S73NCwnNbqJLJ7iMQnHEszsjas2Cs2a7Ru9uu8iKhxnui4Ybxe5rFk6eQVLGd",
  "key33": "2HBmh8xRCygvg7aMTtR42mqcXMPa7v6QLjzwPjop4DaFimLW9Agc2TXhRw86MrHjxfnCai4n6EP8Hmn39Nu3K7HQ",
  "key34": "4uhUqRHQLQnhBWxBB689b6cAQjYH1WBEm2TW65s2yuEPoKL7X73rYLzbupGc2eB4xBhSY5LX65HaBLwB9LhNnK3B",
  "key35": "4Fry7NkR7KDR5aYV1NCgLeEpweS145RbXvEvQcJPy7zcXjUK8mvVwCMvbChdSQMaU2C7a5mcYHahmhhvetnaWDnF",
  "key36": "2nSWtSAaEe7XZEkDDtPAA3Vxd4XSP7j1CSvNUj6DDPbRwoi7ZxYrnziVyAiBQqYh3aSSQDrFxA72ioa3zy5uR4Tx",
  "key37": "4LYpKAjtfPWhmGCnnKXig2DxFTbhceyUfJWJrd4baPXUJaCobs7C1dD8tzHnYeiC3etstkcZyJCqsyAYabTycyqV",
  "key38": "3qq6snhRg7h3ztHNpZe6FWGsPJp6Lsob1VyG9mvk1j1avqGjgJTYuAyvwuiFBT8goGWTG4qPw7Cdt6DZwi2vQ2dp",
  "key39": "5amJ9dEqjGGbqXks2RzmiXsqc9cF4Qz8u8cYxYJ94j6D1BwT84dMfSkohNaByoUMNGnBeYUxMDvuHw4ENaWDC6iX",
  "key40": "3zEkLkBcGMoUXW6keDvt472Bpcm5zNT5sqGAwqfxfqQxnJWLn77TbBCpYD3FYzLcjRonuxDtHTsGdmT9ryo2yyXJ",
  "key41": "3HuZPLvSadRbhYF7ZdDhkCZkgu5GvtVwt9Ugeewucx1Es6tAVcFUPTiT15ceL8B2excK3TM5CUqXvYNjpZ2oq1Do",
  "key42": "5Cm3BcBUeJaHhS1vtsJ9uG7LC5ZBHujJh5A1NhD2AfG6gYYhPrPW85AMgK9ntjByeeWiA9c7j9bAJwVh1gpnMH82",
  "key43": "518g6hU8iDpb3sBRrC1rqyaVN9JnoxJy3g7rC5DHChPtVQnkSFMx2TWVfieoNdPyFxfUrxGZfsDHTGKKgPY1FYGr"
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
