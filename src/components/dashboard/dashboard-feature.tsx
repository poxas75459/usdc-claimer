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
    "SisAdRZhr9qoxqaqYkU5FEYdRsRdrka7SBuK6Uf9HpsFuKPqFurgDhVmUeYzvtABizeFBuuwBfmP9UfXw3uJ5eR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T43t7SyGCirv6Eh8fFQPPoqzdy3vCsAL3VGWLqga1Hicq5f6FHV6ig9jWGyr9yDXHWTuvb3N2FTE7UZiZXBpZKq",
  "key1": "4xyhxx49PzACQQrET3EH4Gv5ZD9gdytd98rBJxSrQiE4VLwXpsdr14LxigwmAL4YeuwyczygpPK3oC4dARDUFEXe",
  "key2": "2AdKdrWNUMwPhwKRScpkiyf1fVEiuCxTLX3kHpp8Xuun6nYgStpNJgRCZKikPgV1u7hv8KENFPXqRkZafCvWH8kM",
  "key3": "2sW3f7HuUZNzmxQ5TBAjTR9jtaL7yycfsyuxb2bo6Vduexq6xdTS7dad4tqDzAEFW2tYtrhEVXFfi7yhZiSgg6MK",
  "key4": "2xhTFk9yreKcPoui3U9EJkqMtx3nBxmEJXTbiHBPaUztwjQLpVkLqo2NexduUcWQjTADWpoM2FbmWHmykLk7TWEi",
  "key5": "5bBvgY3SruV3CEz4o5n9L9jdN9tijBVq7i9NKnquL2MwVWR2aHQwaZJ8nzH4XwiPPTw3hx7RaM3NjwgYh9dABfca",
  "key6": "5cnoPEjDHyXjiG1XFVuYLCU3SXuChBDbNqTUjJJbhyEPEFfeWba7vC7umWgqtpPbbwjzQBUFTYSdG6ETHUf1FCUk",
  "key7": "3zFEARqKYsJKF5RFMpqspvQSuLoJYBezPkLyzYHRMZeyraDw7n2f7VBnSWD8JutBU2HZD9rvrsQ5PrxwGEc2ZWhQ",
  "key8": "rt4PWMjWnAcg2mQYJfYmd1CyYKTW9iAkgBxA1gX8bNQbBK2VyxKoCJMo3Pg6kVrp9Uxeph3VQp4tvpRER8TbMnp",
  "key9": "5D64ZrEv8ifYyTZP6FXp4VSynuZUSsESTdZm9kYqtBQK93WyDLFrETF2QMDReR2M2pvoTBdHJmp4bXbKwEhyg7d6",
  "key10": "5MgBV2cNVVJ1Xg9uUSdM7WSYBHycGrpGpJRtJJe6dvTFVMY4sCTbchbmyoppMunh7gntjxGrWtRWcBocdNMjGrEL",
  "key11": "5Gg4ZS4RVFPUfWausS8WoEKVGip2N82eXKBE6KwqFHjBH11TfMFx43RKahCzEH7XWmANzUQUfYhgJ9rsMMyCCQ5c",
  "key12": "5BXwsnwixLvcMEoYdhG5RNjC1NtYenQPdaamf4GskMbn4CuZsMQjjx1Sp2PceT1g18rp5aytrihS3L3TxbWPXjkh",
  "key13": "3mQdFy7qhxcBFft7d9YzGq6JzKVeWbC9XcEe4EYogtNvkhnXjVuYdJrrUHd2RMynK3jSw93F6YKc1tE33JaNk9YD",
  "key14": "4nRhCtkUWnJbsJQ4MUcsax6qpeqTrK1HX9nsy6cUqskvi8Uk5nRbKcti1mHMkcUyVDqD7LmjJowibnuUvQqhmaZU",
  "key15": "4svzHgYragXaUbmT5mjZaf6W2LoW9WX9ThCCjXoAh2XJCoNyGQ5Nqrf8PZk5kpc44AbU4yumtTfbwnQtMs5dPGJC",
  "key16": "5gtEqyC94KFAEtoicu2BsQBAFEVuLggFWX1VkWu9SbgRZKRyTQ3yo7uMs4XUP8B85bRpzsWNbzRruxr4JdsHNLJL",
  "key17": "5B3ZAfbCgWLrYF4Lf5F2yJvTaLMNxT4mu5CCmqum8KFYNdbQMx95HvWq7A5t36vQJeaBoSiwJ8YBse8hGBuF5vyy",
  "key18": "4NK2m7yMj47UA9PzC6HEAP3cE6CBc5GpQktKSHEJ8HcPJB4EjbHBGDvs6P7nyRkqGR6KiZkTsFcgX1W3QoqdmsWn",
  "key19": "6HDg8k9hBjH1sJ56Vv8QapexfYLrwMagdtcPYuCeXgQZeULkBZFonciRg89jq7qpVZwC5HU5UPmv5SXFixo6GZq",
  "key20": "aigQTziFJFe2LaR5VMyNZuvLTQbbWmq9LzPHbQcPR399rMG876u3ob9G7p1kgpg9zDbDY7j3gMTwk92ecaWptB9",
  "key21": "4ms4CCiQttiktMiSRb8M3VrSo42nyjvQDFbkRNeooXWpw8XQXFQkCwceBp3qKoEYGP5VwcLsAok7KbVDxuFjRRqk",
  "key22": "hq7ATuGPpqWbcNrnNDK5BY4Fkxnnj2witnu9yM7vkGXsGKXtb9E1VpAjkXyFW2zUitBUSWBFdVT5DaT3ZHEXd3m",
  "key23": "31AkPooGyXgdZshEoNJAueYU2Qc1KXBbb41jxrptjZZHzrBiVNo4K27mnYQTzAv6u6WWvx1XvDsVnpCY5VMLrYYU",
  "key24": "4AUApwkB2koy4eUZ226riKyKj8HS4rDRS2wacnWPrPedJJWzVczqJo4wmcrdu98LDf9fiJERHBNtshV9gWmci48K",
  "key25": "3oCaKCJv9wpaeXxigLh9dnUWVBubUqofLAZd6hd5CnapkcXfEJvAXo5JDNe3s1msuZpuBSKQWrJaaLjy69wknQS4",
  "key26": "5cozqpPQBxy1mtwYGUvnmd6jrQgpA3NAed5N7ARhyk5biatsnDAvaj21quZhw1bZKNLGsh2h99osU52mGWiN3RtQ",
  "key27": "3SByWWemsYLGi3HCwc4n2MoLGPCMJD4qN2P9TAHioK6AQD9hZ25n2BWUgeZMxUW4WTH9PrJFwMcrafN1RLdFpRX6",
  "key28": "3LBCXC5tkZfhMbHVFWaMSDVg8WspZYRJg9qnsdZEQGo1pCUQA9Sevv5obRute9KL8oNJCwGEWBxRmbY1TTins7gm",
  "key29": "2x793RM2C14SLGkPcjEBXf7eGaBxB7BRS8XSTfX9pNDdHaaNwnTThkPEDQTQa1rdMDThTxvRUxxYfTKuUfJBBxH9",
  "key30": "2J6bQyk7FEHq5WmWgbDZTdU8CbrjGfMZPa14UKwmJoTzqVcWN4YYKYhG6SvmBW8YCvosokij6RBvsvkhhnaz6DxR",
  "key31": "4AaYCgWgSUqhMtjRvnnwskvtT7hLR2JbjZ4SwnX6xyqRDhsjoFyMhQ7R8ovJgnU1PokheaiytRH8Aqj12Drffx3Q",
  "key32": "3AufrbmVH1BGPn3p1vnryoDwwiA1MckHcPkt6QFgTGs6ASDMGYjrSTbn1fyTEQhuaijCVBaMoi7NRKYZ86fZR6Ra",
  "key33": "29G2nmR8WX6fALDhDkoyWGt6mtYK1pNFsKH128Fxvjr2zzJsVH2scHx3pTAHxWP7BkUHdLHQyLN59y5LTwaav89E",
  "key34": "oin1bikgg832maPSJQvR1Lw96WGVxdqumx8LndUKG1Zj1PYDoWMc6gipzVWviw64yMZbFxLNqiCx6etbbinu3nY",
  "key35": "441UoTT2pzdyBvyLsj81MiP93gDo1QELZHh3CCYQU863gZ4KKmNQZ12CLEk4MUrezoCYyUHZpG3eQGrNjouJoXPk",
  "key36": "3oTqF8SLjTgCWFMaSVA4wzD6f6Ai6zR9mLpGZozNLZpE2GTsCJCFXXbD43GoH377jnwU1Wz36FLBTov4jmFPzidm",
  "key37": "4252YLAAvEoQoCHMQdkAgjpbt1vJzK1nKAgxxvERSxDyJsgcpdiVRNXpYm466zbTYhY88q95VEEELnJ3g1TQzYf3",
  "key38": "4FwHVaytTP69mh7ypZHwGrmLtNZTUACMDoFZdsZj76jxpFU2GU5JBECHiTrs6McGm5fNkjGDZCWP8Abm6iVEgisW",
  "key39": "4djkqtyFCscYpfXbG86PpUznLe5NasXu7nJLcuMitXkiygZWTqDAzsXMbU6dsgYmZNrzwh365V5R23B8jo2DyGhg",
  "key40": "5J4MEddYLxhk2uJLjr5u8H3YY6SypPARTWbf3Bj4Yb3dHLCE4K1g95nnxDLkd6QQJPeriGo9vD9c93nqxk73MmXT",
  "key41": "tyaRnMxgXxbkSdDZNj7YwXgP7dWNf5c7uKTK2wtKTSbgqEjjKYF39eggx8m8fHqwUvnSWiD6ib9xt9cXHY3Zii3",
  "key42": "42enyv6XxVqgaa1hoJ9nRJrR67bM2hyD3R5GDfERgZqbDA4RWrGttH1GN2e2sNj2BaSGXqosTjYDarwPMF6ddjS9"
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
