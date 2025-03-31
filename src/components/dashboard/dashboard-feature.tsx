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
    "47T76xn4D5Ku23guwt3oh2ZbCLyXkkzVvAjQdb6Ez1dxZoVQHbCPcuAMdXB5cUbUTL2FXiFtBHBDw7FDQjNC5LYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZM4uYHD2z1ZkA7ZdCTE38Ek8Qg5ty5CsMpfxmzgJV1SrJnBYMvvCCkfu63xfiYk85ahQ8vEEEzrGYFyaN6A6GwJ",
  "key1": "2VNQLrSu2oY1YF5EmMSUHuxL8HCwQLoX2rC5DfcZzjp3k5zqGv3C747GMvnxE8LC7ukyhyZ5UgX9sLw4vejM2Hbr",
  "key2": "3k6PtZMN1MAcTLDksVdjNvHYbM7hdSSPiJ7cU5u5LuhnwUkMkwGt1gwnh3tmyrJW8tFFdsgQw9XPWu52pE5XdsGZ",
  "key3": "53VwHrJ6vYGGVz6kQSTuN3rdAvHT7e7jaWtu8PT6x8g4ydTSd8WsZCKwuhSDQPqthX33HaNuLgTzj1nbJNJjeiPc",
  "key4": "2zFWHQiRdbhUT3U7g9y9dA9EAFoeuSZykBFn6L6dhQkuFc35UhgGRLK7ViaErArXjmZWzJVRQtqXMJVobCCNqbj7",
  "key5": "2XcZ1fkxet5VCntAWrusog8fEXFYJksZJUWTwN7WuWRSgnQNvw4BLZXcfk3T5cC6ZstTBE1VD6zsR61b2jzBDAru",
  "key6": "2mawVEwgsqWxSvVBnSEkQ4PzXrYAYQzSBBtqLfhsWk3rJAt6DsPAq6AFyrKQFEFggm1y5KqMwRVBrvdorC1HztJ8",
  "key7": "2Ue3ZWUrqJRyTney3oEEKpoF7oMWrLvh6yveLaPAeMSXFH9NciHn93Zb7FFW7mDCJVPH1ekPnTrpm2GN1ZAVcVBj",
  "key8": "4JzuHTfjVmVtF7nQ1nuk5pXvEbJvaibj9M9hT4g7GijiqWKscRnhm23Yzm2B8TfFyetusJtUz7T4W7vvNN8P81BH",
  "key9": "4ZFziVvFudqRZdNqFxEAP6ydfNPmr5BtGx4nwmr3pwbWk97V2F7o26uoBQpYeAjC61ig2Vg5MJ4EMJwJC28fcQMg",
  "key10": "4q4wMxP9KvVfXUaPV6Ky35busGJDgwjmgaSF5STWwZSuGNBAmiWjppYh71CLEDio7m3scMLu717eVKSRM9Fw5ccA",
  "key11": "2Zq8fMi3gZLoA7jQqWzX4fqo5wWxSsRzBXfnf6xSUpz2DmMxSYQtJqs3of2MCfovJ2JVFuFbFrUVufSDoiXaYePD",
  "key12": "2dv7dC4i6CNGmAzvraFWw8nB72vYaFCFK9aRgq8Gw6iHiSm9UEMJgVEvJUYiKdxLVX5Ji3PnTQUb76C4EfXMzp3G",
  "key13": "3E6e2cvhQaKtWQ72atbc2ReuzFJj8bR7iZVXwfo2nFw7HqjzHD9CgjoWG4GDn8dYonB8gV8vVMrSfYyWq38UJ7U2",
  "key14": "4L3nG6pWCzxJVjMFuzPu7si9agUXrvMdZ7vdxx7zpHpd4aE3aWthN8SotkK5RjCyXviYkxx8awPAYuuZAje9ci6D",
  "key15": "2Wmz19nWGrNQa2taWut1tmcgGDy3SzKZamqsHQd8GwbXv6xDx8u7kdyyJnDspgHsMpKMATx7ubbudMLiW31LxpYV",
  "key16": "3bMADDbFE8H3NZgpvRSt8ufqhcFa56AdTiif1LZcvmWYEd9ciaiCnC1u5rCPM6BkEQXDfub672VZm5LdBDfGSSbA",
  "key17": "zJNkpp4sev1c8Fv2LoYg8toe3eGzpicr5eHvUF4J877aM1wxYJWoMGbHuAx3gkWiWZekKWypkd8DjVw9XKDYabp",
  "key18": "4cD8RG5aPXBQ46fPzemDAJ4EtUxxwrtscpFDSDYTogEpjD72HfYQeS8FSuaetjyN9HaGJifyGgrUFo8e5FkAKwqw",
  "key19": "4MdgQLLtHLKQ6EYMUqvLYZwsNX1rAyX2vu6fS9ycoAra7eDhUzY7GPqnnNot8t5f5X9Wxp5GiVVJjiW8ctzxcE48",
  "key20": "2cHeZUBLP79BLoSxY3fAPHtsmpeUpBEqmKJ9QXd4n6H6M8cPqAhLujGN5EaPZ3iwXRfxGxu7H3V35mjb6WTXAS2z",
  "key21": "5kJaNyBgL43YXRhTjLc2iKcy5RGUGPSsWwob5Rovf8kv4vEWf2gy4dfQyKM3MsMQ1UDa9CMsvzReShkW7981HXTj",
  "key22": "522JbRQ5V6eQT7Rp9N5osTw53CA4Y98hiHiu3vsZ7n1LCokQHiukz2rhmyVRSQJsDSXFsgiR2CVs3FvWM2XDDFnq",
  "key23": "5MSCLEt5TS5PurLPGJbasHsaZFGaSHTzXhEDK2ojoTtHZbkZXs2npkxJqZ2kAgSxZH4g6boV4LZSL7gN1si1MDLP",
  "key24": "224rZrSMJn5jbVPfg9x2rZLa3ZgHTzYLDu9g2enuP7111K8RgJZyrhVe3RB7JY87YRm1rzDkKXERp78awbUUohoZ",
  "key25": "45ohYq4WAfp1hqVPhywyUHQ9KqhrEWtVMTzAodNNqphL2cqWpjsbEPgQvfuw1Tvt2mB1QypMPtWk57g1jKbjP6BR",
  "key26": "asrLtYcPHRETzsQVxBAUBisQeTugae57xhDMSXRv2fxzAVMU2o34spQU47grFaP7oyWsd8JkMCQj2n1HwfBmQUg",
  "key27": "4T2zZjqGcVGm3H2VeDcF9iV3hDgchWM5k6edn8xKEtyavaz7QQSbbQiSsv9rUKqqRWYKVzufL9tEpXdWyRGo7yyQ",
  "key28": "8AR64Tr3xo1aAMqh2i7WgMjixtUkY9QMu7rYqHvCLi8Xz6vtjRn5sMRZ6ihC5pCWbRpH8snevxjerNGkTfh3fZK",
  "key29": "4KJA9wrPyXvT8iaAgk4wGqevdvWmHD551RP9nspy3DdkznrPNmxnp2QB6SL9NoDn5byjsAngv9DaYuUHcaQuQ7rb",
  "key30": "59axsqit2p6mQJPwwQrpwh5uwzAv4raZ5aTeWZd1RSt5TyPWkTcEpnP4ew7NNhoEPAp9N9cS2YoJFFpRUmttsYoE",
  "key31": "5CuvPHop65zbMFE3u2984qAFGaepYT6sUPz9XFT7dzy7iFzWVJGkFZHLpA7MEDr46GVSRqokVo7xhbdaggCnPAzU",
  "key32": "5xRZQWEpk5BfKPwH9bYU62TcpnKd9SEv8iR4xeESf9dkKcH3LfjNYHFtV4AiNDGQhFQbBqKbXMxW3gqpEeaWrF64",
  "key33": "3iDW19rGG11poFZPQ52JbsAoYV51sr7f6mtetQY6ykxi1vEmWJNKpcqWxmJFVmcwNYcHy8AipZANGb2trGAiGFXH",
  "key34": "61D3d1Scz8iKcQ6yG5nmfJhHyWGQgfWKjyzb3cavqpCNt8A2NgM2Viwcf8EjJA9RNCfV8khNQZUMmiMFNq3AdXoY",
  "key35": "4cE9JJ3cUETVjLyJpzBjepdpAme6ECfqdzJRNPMCmEMpUYFqq13r9iUgbWg8tZsNoAUh1oAnxLgU5k5EsgktRxUF",
  "key36": "3KiS14jwvCLh42BuNVqKQwVw2BEJNte6LoFSfZsUY3HFk6KMV3KhwB7wCZWj7BYn9pU1prL96evsNwCH3N6iUUgf",
  "key37": "4LSf9fFdYRuTwFbn3C7dXKA4nNE5GdMgFtqpHaZ5fmVx2z8juR8QXTiRq7jNJknpNtYqjExygWFY9nFbnQP9BEZd",
  "key38": "57WxybfpP86BEbSSZArotVpYFNRifwA1HjqqKp5bXTkKu3gAJJvGYtHxKed1B8zMjz5gYVATDJLwnL1EKPFTu5j3",
  "key39": "4sY9VxbdHG5gHZQmKkHesiJhTe4v5bTHPqT1TANhvmmTEWxshTGf5829U5uvCiTAnEnqjNKw1wktCGuQWVixvyBS",
  "key40": "4P1ya2C7HD3U3b5AYjgG4hPGa8moGKas8HMDuUjyh8xP3AJK8fvz9mw4k6YdqVhJhMo3s4PTjruts8NU1hvXjYHs",
  "key41": "37fP9rhfCHATfu3U56HJWyXDueU6FTded5wTS2MgLUpng1Bamp55hfqejiM8cYHZ4NYZRcUMbwErGJEzL4Gvgryu",
  "key42": "4zNYhfbUw5ZTFC8xEJYpqsEY58icSRAHupWoSAtvSrGWv3xMfdUk23WXcUasA59JvsdNU2GothBaqG8tdkJNJtjD",
  "key43": "4mdHmP5eNsnL5gM6JRRJx15vdHNbVWGLhFEGyCU3uhF7gRYnG6WLNoqYpRfF9HgPETY31n2cjsJr8R5K1uq8f4C7",
  "key44": "3A1nyYKRH6QdTXKTWRrAi3R7VrUZV4tDAGk5Spu1ip4WBnpsPSawb4g4Mnhbu96ZdPyPD1EGXCW5frJXsnJBbBE7",
  "key45": "31omF3HPS5VDkNKvfxrfMwLbfd445u1AUakJMfDKcqj6uaWM8GJCPN35VYoAuRvsAp6RpKhXodVMgiU7SUspsc3Z",
  "key46": "3yYhfrKDCoemwWrz1p2JRMcZGuv9XGrkKLTCUToLdmcXhqTpuRt92HJ832THeNvkJ5C5BBbPqmmFVVMdhkM4rYsj",
  "key47": "UHsuhM6V7XDYL1TFpzxVfw1BRLmz2HETU4HMfRgRPHh2FSKzdJCpvtVNoPuLMWFfFGusY3ycpeUJAsUU5oBFwAr",
  "key48": "4BXNupuFts4wYfDw1KCKfykas3cZvNerLZ3eJeLM4bLVWzxg3FeBHGm3wqjVDetnsVytyjrLmi3AWBD3uENMk3xc",
  "key49": "2qAUSJSN1CjaML7RScEaNg8vXQDnBHP91Ez97AvcWgW9xXe2xjLMAgqvEdjmn7aKQ2f7GaVT6FA9xDpeLDdBxvYL"
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
