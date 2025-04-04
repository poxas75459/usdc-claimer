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
    "5zCga5szhZJE6uDzQ8ZfbTcksApNGTgQb1Xdo1fXeztRcfWzj3vV2gsL4iPEFgx1LoFtxSheRhc8o5LNk8wyLfwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z4Sn9VcX9jdT71amL9y7rVsiaW7kdnrQtSiwWwapQnbP9xYCEMU4cyeDLAC6vjftmjAFB9djS4nCcaLNNR6ruxX",
  "key1": "3AtxLdVWh1iipBKwkECvjhEAvYkcTyTvd8Dk8A98vZwLxWvMd6Hwq7gb4E7KmBnmvEJfQVFsbjo1Q3QDcs9mhHoZ",
  "key2": "58TyXwrgaaYn4CTUzGiYVN4Xu8S4iaToomybSaSSPuZv8sz7JBRH7MkZvRm35LoTvRP7twtAV1DzfH3q5MFL5yRA",
  "key3": "3jgCSCM3QkZApHW9kBhYLwk3YqbC3L19m2BRcsuFtVonLaGEQ2mzb735j855mVSxm5GhtjRCriCd1Rg8YrMBRXur",
  "key4": "3r2BG2Nb6udeSU8J46LdcffZSf6cBX34awShNJKJz1hiD5cLths8yFtPJg7QjB8qKAufj95nYvzFRPWfByWAiM8o",
  "key5": "4FUhUpQFCuHZtPdesDoBR5WQA7JMz7hc4zM6E64HcsJDNmEbmo6o3P3QQ1uZtQDKE4GVgBKxjTTBkqwuvHdqv1Co",
  "key6": "4dENKE7auKuHK1vxXEpP11GYxjBBXL9j352gKvTQ9KgTswXkQ7jexp4jLKNh3ZYf7hFzHmVebD9b3TPonw7ZvKsF",
  "key7": "uc4Kr2EfA52syVfeqocLGGuXrEznPUM2WydpnYdbuF6N8DEc18cMdhzUQW96tPNu7AArMMQdxCfaq9EZvnRUn3e",
  "key8": "3jMSAyoJv4tFQbcXsyjCfzrRH2Btzv2XFYmec1mp7QfSrg4ad5t4H3QqYudWkfmsnKPeF8t4gYfFcHGDsDzwQh68",
  "key9": "4sn713jHukfVuXPQu99hXEKSDGqWfXmcTjy61UgSdYUPmraRwWihiQnq9STWr7BPBqzUrLoLRrbgmEytHxPYoR8n",
  "key10": "PyPFCXjSiMrLY7avkExNxAUxhe9YGgwdVYh4o2QP6Rtk2Qp95p6tzNgGwfS4LTggQETsPuipEALxvPStbcBAHYm",
  "key11": "3p7qPERRWktFi74HmHYhUdtW9e82X6PkwVxGhcTKoTeKXH7nKva42yENFbqzFeWQ2o9wV24GaNNCcVzPJrcx2Tst",
  "key12": "2TQHZcctsKWthCrY2zwKFFTPuMS7cHP8yZDtgM1RceEfH1CJJto78xRSAxrRyn4KdjhmgWm1V6SzM5acvnbbZW4p",
  "key13": "4sEQs24hg8DUen7qmoyxB6AQAYxHj52kWubksxdCtNByZg1T5JHnG7JgHeMHVHSsYiMw7Mmr4UrLthqCXp8iBNzk",
  "key14": "4bXVLjaPXaX2awcDYEbgMmc9yMcpPvFfJP6HPCf2xki8nDiY2rspkhdt7A8kdiYQXJuL42PCMiprZNByo41d26RM",
  "key15": "2U8JLSvh8QQKjiqFbCLN5XDwR5EjiQDYcgDSUbf7LMok92UwqBCHYN68m6r2BEdFxrwcxAsuiLnaCQ9CGmTjrPTP",
  "key16": "LYwB1eFnq7Ffci9NYiL75UC5PfH51RHtE9cd8wehVNJUQ2Xnat1vmNu4KcTLd2JkJXcPtncWz1WHkF6ns8ciytw",
  "key17": "4VN8apjc96VG7yfTEqJ28CKJrjpnLsMZUhqHK4DXJ23fRuKftaexGyHaBqahHkU5rEWCep86NHmaLFiC5psziBB6",
  "key18": "4bmRpzUv4rQwyC3MgXNUxLrQaWeQYiWCAQNg4oEPTYiyKFKZVYyVC26Mfko5fVmi4gFHWtCFmTgWWq9VanPJbhe6",
  "key19": "UM91k7hQjjkpvme3vGBdKMHBUnsfmaYUuVEk9su9kXeeFnYPvir6VDEqysSL6xArumJmCxe8oZ5f2FW3B6MWuHT",
  "key20": "55opX3SDP4KiVtmK7oX4Ucvn2oFKJetZ1NXnF9RJR1QvYU6eb5J1urbS3RDdXn3TkAHnKaJ7y5f2nWYoiu4DHxy9",
  "key21": "4NWSJngHtkfuGAZuTgpKwAkx3xM9WhRgBmAEH2ExAdAoVV1Q9EaxNQcVPxc38BaL4C64ceHgZk674cokr3VsoJiT",
  "key22": "5g6t9H4JxsWZVx92CAbrw7K8hXjL6wEkVjbzvEp32ohjiz613PYZnFdLvTv4fkdDC5Szzw42HSbSXZNkUs2cYgq7",
  "key23": "2HTKBwA3WZCbWGNumwPQSssEVU6FhyLH7G3GMoV57sXC5jscRnd7mi6QYgGBGKQ3g9wbgbN87f8hgMzc42qEVhQJ",
  "key24": "4BoPvhviHEUhDqfMooedFTKAEhyR5bJNkwfdo5w7iS4CeB9TJtZGXr5tSnQGs9FM7uM1iu5vUR2cQTYiPgjop4Eg",
  "key25": "4DcvLxCV6brEg1psJSbu7Gj2j7zxRjSWHRANmkRf6owPvpeYc7E3xdivmhxPCepaHHg7G7UkDXWA63rRENZzxhvS",
  "key26": "3S3UfErkuj8F2enTpU7Q59aoBKaeh5yD8rjp3ve3RswbSbGuqTchRtbZs18r7Hk9XhdRpmcmcdacDvPBYfZBYqGt",
  "key27": "2hwjSdwkDN8H2YLjqyaLzFZTPqkJapEYCBexoSaqQ7SL51gmdHHJYbD2YLxi11QkYH21MwovXCQ62XCa22H5CoCe",
  "key28": "2pXG6MZEfdyxRmH39tV6eRHTWwdX9fEbedPbMEuvkLk9z2C7PugyDQLysANbFfQWv3zqppfgfkSUEqq8kJqfCsqF",
  "key29": "448m5e4ewZ9fJtr99DQQzDVM6V3r2rxWfp92anHek1VB49fr5p1LF7so2LGVKX8Wzubsc43k2ALMCWvqdhv166V7",
  "key30": "62yWnvGwDAdHKiQNjDpdGteWRtjnLYHLgR41xV15TjhV34uRuj6mdGzeXAtNSNjvwyD52FpMiAsAMTTvtb6PKeSq",
  "key31": "2RjpFJHRyYadEDQJj9rQmAQP3S1JudWZt5vbsQgCL2uYexDjA6du8crnpBbe3AFjd8rrGCHCd2fje5ut9niNAWT7",
  "key32": "TGphC7cipX6uzcsaMC6sfjyKJSTx1eP6xXTujbjEG9qdbYbrw8SpG6QKLiPYcXKq3gwFFCC6qzHSyZ9KXBUpbZL",
  "key33": "3mAuCFRVYD1Yb2YCQytn7nuUChdW7dc8NcgvmtdBcVC7K71ygYxdkxfBQLy52PZ5XZaJhyyfGkSCufUbtU5qMQvE",
  "key34": "5coFp3SRPp7miCShHgbq9whgMy5VYXa4zHtN6gz15rnuDZRn76nzhDnsVtBCA8dgZdgPqabJvS4VWXhC9yxfbnnA",
  "key35": "2BxnPgmyDWWQh6h4BdZCGodZDi2QWfnxKe3CkCxyuSjYsuySa13KLrMSByxqkCC584AMGJcWvJatRXUngGoj4Lqi",
  "key36": "5vo8CcwB9d8Wk5xsg3nPdzWMGXqQhxAUP8cg2T16H5wouNprzyMQdG3FeoCdpSLdCT7APp1MTimZrsXBqBiuBU9Z",
  "key37": "5Aouxw5TM1GtMQwwwkAq2U8vXkUsDdNoQUqW1jQu2Hevp9fz6snXemwVrEUH2taBB3XmMdipnPZdGRKSBpvxZFXk",
  "key38": "2oWkZ2eRgzACu6JEe3VXmMB8mLi2VWjbf3DfcN42zUgMWKmFKRT5nZJWbf144L8jbxw3vTrAHgmoYS2uTQ9VvMX5",
  "key39": "3cqs5JFGCdv8QZRGg3gsdPJ9r19cNsCX1YHwQVoZBa2d4REuBmkjcMsNP18hiaePThexWC5WwUE2hFB8i2Jwu45q",
  "key40": "2Ve4ZCcxEN8xLhDGuvLrHuX7GtmZeHFrJC5SnJd3Mt9it93f5iDXNebUatUw4WVyc2EctQq7uDafQUFdUcxH4y3D",
  "key41": "5EW69akJrg8grmm6piEYWsWa2LdiwxrVcWbjVZ9QBy2kadEuxKzKWbJ7QLvQd7tt1WdsBBhmx7Cr9GKKXNWRsinh",
  "key42": "2cADy1sbXBwLjtbrMJvvuJEts8UE5wwa4YpVEzCjiDYwWxq5YKkDQVignTEihy8zqTTYejBDCy28dZDLMkpi33jF",
  "key43": "2MbAuN6gqBftqR6YG7jTpAPyCNqXqZijx2nP59DyinhWHspExoV8qTJfMPgU3arZdWiFgCHCCoh8D2YSRmxn2g1i",
  "key44": "5ZVFQN6qys5AfZbbw3PVNRp2PknW7H65s9VpBc4AcokjTuT3ZgkvvMhm2CZqXHAZZ5e7vf1QbzmUziNejcvsHDSR",
  "key45": "2ANYnsAowG4NJG24y9xNPHBTPHTWsukrNXvu8K3ePNfKfzXgXaG5u9f5vuC4pZzx1UTw7A3iNLvXK7egoRH2q3it",
  "key46": "4rz42u3fyrdNhgLDjiEwpNVdR6GUZjk9JkH8Cf5JeLLF3iPbx76TxVShARu27jwvgcaK7hXT2xb3rT7TzrvTDiUR",
  "key47": "3rfkK1tPQrWAdaotkpTnYgYxicybuHWPyUp64ewJLVnpTENEVNoaE816sv3pWNGGsdquk8wUdTrrz416UUSN1yRp",
  "key48": "653P33pPZ7HudzQx3B48EcMeXXWbEawkGRK3yco6f5qQ1ToGdgVdhwJVfSqh6z64oYWv8MkDYNunab7LsSmmR1cA"
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
