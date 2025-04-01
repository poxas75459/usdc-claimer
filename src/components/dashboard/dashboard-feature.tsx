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
    "4MwBThvuFy4KMKzFkKhVtB8xrHqFiVjgziio75ALBK46PHV2Yixf2LSrEEWeiFmXUhDcwFGJR14NSHbYRKh7LZgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GjQoBhVXepPpM7xwTFnUC3xXxrrRK6TDnScHHPSRCCwqDAphjJLhPc64RDE5DmJ3KrsFBTWv2nTBcL9hFqtJDrW",
  "key1": "54bGp6iSUmkUEPVLvxLJKsqV1jmChsDA5ns3NLBcSrdDuf1AVagrBgssCjwNZSbikcz6FZ1smjQhMZabAzFQ9Q1",
  "key2": "2gApq2Rg2LVvFwM1gJxgwLi9b1otrHkcrHMpYjkJEVwNcAvLfaSZTb7B1h5WdswnW6X1VRFvS9uGHNNbxHF1fpvk",
  "key3": "2RReSiF4h2qWv6Zsevh3KPZoKtMFjUNm85Lmdzbj8JU1DckmxuaegZq4AS7r4Nf5mVpLdtpPwCL5cie2pmJrGz2j",
  "key4": "5CxRwtBuvSoy88QcpLY3FJ4FmpUABNiBJ96m2wrc8zwvzHah4HwHLS8rrtf8E6aSZ8asKBGhjpFh8rPdpPkDWAKh",
  "key5": "3tfEengaRkGZrvs9xPPGSbDBW9MkGeoRqz6urd5NkkKp7nMgiNEn2P2UE194zVUWGAuMBfs5xmKNNUgqfLZ37Ges",
  "key6": "5RrTq8Uv4kZEogXJoxdfaAqkh9AiAH1qtm4MkCU9UbcGgph1dGtdCsoor51mbCR6CwHwwVBXpiMfLTXTcY3mHSxW",
  "key7": "419dL5NZjdPpur7A8KspnsNHxsr8XHYuExfnx75oQ6Kpn5wjNC9RRnbBJ6TZhjjp5ZNyt6sXVvZ34eKWJXWHXeJP",
  "key8": "5pjjLSqUynWw4ErkSkRuYGPEqDa6SXRYLLFMMW6QLAud7T6tkfYbVy5rpf517em1pRv8bSpHibXnGopwncT6ffDQ",
  "key9": "4KkAstBWuywtfCudyCv6rDyAkZMoVzZsj1fXHtUNPMHzmb1HBCCak1xuyCoKdSSMNYWjLAsAwjKz5KtFWULj5PCv",
  "key10": "2MTzFrnWSbibMEoAF9VvFNypJMUggaZhhg4Zzrrtusj9yiB2EUM9zbA2oe2KAURDfJ2j4XFhyLNTMcBn5cbMJqzF",
  "key11": "5dPZgEdCvMkMv9EMD8zcBFbXahKpLNewg6PP8CiuicvqR3KSwWJVKY29u9pDhcBYjoerQzuNrotGK9Z6qkXM45C5",
  "key12": "2dq97wdJ8kpFuVBEr9nTEC5vQYHaR26tBk6wBo9ymB8Vuup3iVf5WpActCyiZLuQy7WbjF7CQGSKqpc44WDCkFaJ",
  "key13": "5SBoDXKb8w6qaD5saDvkD43bACc5zip2HTB24k8PR16g6XKTB2L1rqDLBiBtmMkbktX6jnbB5EWu659K2szewMV7",
  "key14": "i3PzDJPCfPBPFhtqtMMLBV54aDjt4kU9yhABehR2RDoiMk732Bci2ds1GCPFY2k9eeDN9ZHrdEt1LPb96Btg23V",
  "key15": "5DShwgzuiQTtu66KyXrqjBddUDyTMq6qPfHo3tQ9NSNW9xgZBrkQFyoMydGgUU4azzw5rEj42TQByuyUqqxQU3ME",
  "key16": "3vdgYC62z2zMbVEcYG7ag9kKobYbhrz8JKPj1aWJdv7V6dzpH5vdvRRLqqgTgtuiN9NLvMQSK3WPQsxznGmpfFLy",
  "key17": "2gtdY5Jd72Efa5NXo5aTfWUueBfAXU9SQKDGr9HErZUaQ9PhUs4urTBgVjfE7vBmghP2Qau3F81u2RfS3JRqTsm6",
  "key18": "3jpSp1Ro8wbyW9dBwR7doHESBaJBscuBqzJf2LFHhquxHiEpdMWUNoqAyjQ15sHzPTohoTZQKr4zkmMApvwh7qto",
  "key19": "3kZqnipCjkyq7MVe1Jqfc6BCRv8K74ZoMMjsozJaZWeyavaypbosnHcdmKJPBKKZaCioBJznBBwSiEnnn7VKsD8B",
  "key20": "4xJf5H2DfchmTwAXF1TFGwp7gSbK6Yms33NRax5x1mKtJXZN1cnKrWa7TgbnGdmF8qj1yfTknK1viznMhUyQyRRq",
  "key21": "42nmtfRyRVe4dzuG2gfHnhxWZtLuwTJnPusirE7xVm6ngQ7jejbSM9GFjvPTFnJEQ5TLwsJW9gbkuWV4UtbJ6RRj",
  "key22": "2XsdWuXFhWiQTKWoLXbWEEFM7G2t6wp6yVNiKDMKEcYtxN3eoybkdtfsy3b7z9aUcDDBzozeyrWG7WR3QUPFHquJ",
  "key23": "3NH7yijCnvU5TC9ReQvEMrV9h9UjqwDjkMBi22ojmTTYyT6uDfWqMoZYiRS2MWWmo5umkgTZ4R72UGydxYXGi7Yi",
  "key24": "5fQEqF581EDfwgcfWzP4EZrWazwQW2J3DvkHjuUjVgWExShdnD1vCs53wC3ZFhwLeK8RfMbQBb8HXMQ8QJ4ZMHga",
  "key25": "XbpypJpSpPkvPjKQQ4z4E4hmCCgD5mwKBbjT6EkP8eyFm9gqsaX4W8gRPeUxNU9NsNAk41L1NyVKYp1dnUeWxqq",
  "key26": "5T7yM5FhRibUZ2H64QyMiAzGgKR5BpFXBJcotGgU6uzz8npsajTKCRcR5YrWqjvHifKnpt2JRAREDXq66jAEjDci",
  "key27": "3ihLr6nhfig6MJYLnzMRzaAWSCWrFj4d6pjQZGyKcJ6Dvhd4bBRpcxN8RkZ94pLBTFJKk3ybn2jasvKCcXLaeeAW",
  "key28": "3cizJTP2TpvhvSbStfR6v8TwPMn83R7CcaWHnQ84xvLGwgwJxbFtSDnxvPooxeUNnDL9xrMZurz2xkYAGwHK4XGP",
  "key29": "2gDo8beiKeiD4xg2eWuQRrGo3te3z56PHGdE5tpWRMmi8hr1eAk4TrdymWYZHEN38yoKSq7bvaCj1NwSdevmaV9j"
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
