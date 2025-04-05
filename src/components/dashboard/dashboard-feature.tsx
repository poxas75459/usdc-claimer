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
    "3y8GVGSAhYeDXWFhu9RePzqxzqxXMEV3Gagivgej9HFJ3CLPgQjXCm74XtwGLh6iNgFqhrdYCV8u2EroyEutsyd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "632Xci2mDc5K62XJBESNCc8b3AR9bTmz2zX9WTwrqYEHWUZzNCJS5JKgnJ4PNZY89X8zbMJxR5dyeiKbXAtxauKn",
  "key1": "3trmCfPVHGWeTC59ZwWg1fjKgnCiPgwB36pT7PArZ2xJuFiGhwdZ4s1u4WMGbXsRTBsfLEJd2KoAzmFiYpqATQaV",
  "key2": "4sZbhC6XobSAnNLPT2ozLrhSC9FkHkRyYuKiTKpbXNH1GkUEovMrAWSiHbRXNFGv4vTT6UkG6dTYpynn2ef2aXf9",
  "key3": "wsnVq6Tww1a8qeUTpEvBuaVcSJjcKWZK4HcHar5XcxzqRNnsRKve8yJykTdae6R6Y9sbBJHir2d2EL1fPUKxSJ5",
  "key4": "3MUteantU1kTj953cFe9evYaGxDAyZqixty8i8nhXiHCewZff3VgnrATBTfg6QBF3CTv4LbyVFZxWTfJ5SPyUHRS",
  "key5": "5Xcg2URLSdmDD2mTGUWUXRAUPJ2vYAFPP2aWkKLomeGqwP5KgekSt45ZadJZzJgkL1hAgZzuErDafNqX9CQAUFgG",
  "key6": "5HLJh97W8iGqLKn4cD3oDD9Ht6SE9YTvjUQLPDtmqPDqfZqiaukhDcAtXQR255jYZrgJpyk3tWQp4iF2iKFTTMzC",
  "key7": "5zPiii4pNxPHNyp5aZra4ip8dKEpHYatNiTGUdDpBAcduEdC7WHdLcJL1egBgwuLRUTA9Hnh15q3rXvYaBQFgtyv",
  "key8": "3oyGV2vhE1i9YK7SgkPu9R75kADJEPWCZfdREUdh4iPKTYjbWSrJpC3ZXCTz6qRKZ69JqKupdYkwQ36j86BEuHLC",
  "key9": "5woxKbbWbcHpBh3qWeZA7oFNCa7ZHPXUxVEFRUa1ve9tusfSTYF7UAwXjVJBpBJqYWpXWLUXG9rhxuQD1J9gzW1T",
  "key10": "4rT5GciRWRaTG67yEsC14QKzRwkDcHmRuyPzQBkspMjqUS8Lw4S6bxzNcNc6masmoNc9s7Pg73Ti7J4Hmibek2C4",
  "key11": "2Vmwu5pqbLMYVHCkjs1CQtFptozCpFcdZrVVwi2y6EABTUmJqLgEo5d3QLvAvLogaN2Sdsp2zbc5FbAcnygt8ESC",
  "key12": "WhB37yTqbgGwpqKEb3R497zbg6G1NCffCFZThPrtew8CkjBMeEnVJLNSGDuT1RiYnWzKeUa6Qxk6R2KRqDLZRKc",
  "key13": "2451wGaF49rjpgZqS7TEa4dQ9y1trXHUJN9aMLcFwo8EbVf9K8fyPckMz69yT5RGvaNaRKngvEXu3XHBpfpiE8bu",
  "key14": "3vVEMULeQFi5MtUbuKsWze6oazbsdQLnDVrUPHnQXa1KRR99n7PpKTYcQcWPLw3CuuUFHRLCmcNecfgUB7dqQFcP",
  "key15": "6WbjUJrqFfJ2zdmEaWzHj8vu6w24kqSTEu3fjdTNao9KZMpMCP2tnGZKEQhj5fmvxGFoBaevE1RVYvz6nBuWD55",
  "key16": "4HY6VbX3ihWhCvbQ1PxX9fGkoogbijDKtpgps1peQcoazWgrZv9xzbKjbaTFEWsphvbHZ3jbujGC6DC1rZcDKRCb",
  "key17": "oCAdf4bm35md36aCYxJFnTADtNHjYfUC74gHFy8BPvYSDP671LFYZJNTxxPcDASwwPQvD3LKrw5UyHMrswNXgG2",
  "key18": "RhCXa5VmvWg9z5mDxdpiLv3bJCPc6zYySn2otGMeNLzTHS9nPS4ZqiGe9oNR4qXRce6iHTY1p9gJgRzB3BEwBLB",
  "key19": "4ex6VwMP7pj4n93wuZMGaGJKTMPdzUT9jKG45EbJV6FmEitumEHgXjB4A7XUteyGcLgitjg3E27JfLSYb5DHUqM6",
  "key20": "5zkMtwcJaEPD7DjnzWRP8gz9m3dPXLpCSNYN6k7d22z4syHSTv3TBTmPH86QVkceR3RsWALj4DDGhUE9BJDYuoEE",
  "key21": "4eSNcVWqpc7pdmwJwmVhospzkZqnWXAm1pgmjzUvZd4sm2Jw4uinEChRnmYtbttAbwe3jSiTvEazmYDnAuKBZ5pf",
  "key22": "3xtB5gjRSXJuhiFX7AkioW2KrnkQPsgFF7mXuJL2vMEQFeJTqaLzFdQP4ExepzJMsdu6dijqoeLwBv2yYK1J3hLj",
  "key23": "3hgfwgSBVtg8YkLABVZk942yNpFq12v2sWDYY3YRByHPGyvPY3GBYDBnnhc5nhF3Z5FqU5Jm5KYN5KP9RFdwH58D",
  "key24": "DrCfGSTePCpnuMwyyRZDMo9LSwx7soWXkta2J7gq382fn7a2JZ1pam4HxCqh8xnoVUoXeqmhJxzXeNzdUEuSXG6",
  "key25": "8MH78t1MLmhuv44pBu4A3MPrknovhg8jiZuAw8DxMePX8nhcbDuBqNwBT1j6BLQozTmMqG4etVgk4FJaoKYqHhd",
  "key26": "54odJnuZ7pjw2APynYYeMbMeHnpz4Vkn2oN1NheSREo8pAbs7LDH82QAS9PeRTdcJbwyfpTMGTfsJHCMU5qFdL5p",
  "key27": "4jQFqG55tFuBXqRK32nA5B83on7Q6sko6cwuVvgC76xtuZDcAhEY5pbUgsMJ8HqDj13U3X5ULiqowtjGX29itGnq",
  "key28": "3TwcKaHM83MbsLXe1CQwWPptMuPYDL4zuu2HgsaWMxQs9E91F9AxL6dhzxXn3k7pfnZWhNctkNE4DjdRGAo5kTRP",
  "key29": "FbErLTNbqgJx9NkBHqp1MEq1LvvHyGtkqTdfEyeBgmtFt5vgZXvsAMXwW6qVQrMK5miaXk8sJSNRyUKr6qoMbZJ",
  "key30": "3UwLgTTJBzpvTNjHAfoUeFordRdWMg4PDA4wnmrEuAr6AbrfA5DxBQjBRh2mWYw6cNmBS2wtA9kSdycVChm8HYi2",
  "key31": "4Hpq2jugjsjBTNf8cK5n1Se3ESwVBtWxDhVGgGNvJdboe8u469ZoADxgDSCDuR7Bs8MA9RgTQcBdTcG97k8Ta7sg",
  "key32": "4hGvkpwBCms9Do2QpUFbE3SVkap9tXTr1usE4wP5UvNFDkSKz4gziTQywkJ4pb1x37vvKLbGcw4MaGE81kpe8ikn",
  "key33": "57yQPmXCTTHhjkDYAfqogpLkfdPTb7mKuT55GZqawfnc7FLbYbFkAeDwdw2xrxCPGfDmBjsGs9ZZbeUtzTVxSHBb",
  "key34": "4YXqnc8pVet79rE5cfyBvS6kJe22WtHVLzS8ndxD2gcWkgRaZmTrxtHWDbx9E89dRRkejVezQfZ44f77Cv1Er97P",
  "key35": "4ySiwoDVBu5TUmVgDp4BdB5FAARaomy9QmmujaJ8PCTPtvCYVWinVefai7PQYBcefsAyoZ5YMiS3cRh36Q3XbPhR",
  "key36": "3ct3DeSxYaXDw7PJh9dqtQyudypDSfR6CXm7q2F8fbUiD64PWGZ6EHZpj7KtBjysRgUKrr11VQQdkJpKPXqE27C9",
  "key37": "G5Yvpu2Rp624nxWi4HvKTof6PqA2je775HsogCH2BNqu1jZHNu2iyjvhfxbih8TsZcdG4rpZZEXYpKE7qejiHSh",
  "key38": "55YkEdiQFsuXcVNKsp3M5aRL8fKitTxVBiGkvVauNJULwn64CgeUrpDHftyGThyaw7yi5r3akM6YcZ7Td4M2Mz62",
  "key39": "2DRy3eLHPXh7SiihagBxKhu1WTmNkDYn9UZ8gGERtNo5RRfFp51hPV1XDdiJVBi3WYqGo8jcZXykkF3B3UbUua4C",
  "key40": "SJsKJ8whLnFrqc4xe2vqkbHohnA9uM3p9CeYSR6mkeBrL3pWLEtXJk5vbHVZT7HU3i9Sr7i3CnRXnZzGR7t2v5J",
  "key41": "9NDSqaRcRKesGgS2jr62NpD8SStEoK1zsybP6ZBZwzXDcxA6oS6Net3KyEwwsrbmZyne8JHUzkr7H8XdsbBpp2N",
  "key42": "1pFN79pToafVWxYxFiEqBP1hPo7fHaM44U2PDy8x3QU5ADj9jjasvDKTbq61Xs17AjgTGRLdnh69DP122TkZqxp",
  "key43": "5wesjDBBYGUFJBArJRZo8ZeZSh4SLN29MQAUXKeg3aQnCYKXuCEqPG7UNfStt8yjBRb2XqDJZPVfYvjjwDs5WbcZ",
  "key44": "4wS89p5s43zxfTePt8YEFWrXKUrA6jny7yFgcxBjwfwpx3g7ATCL8t4pCBMLjogMevZj3jeuCArA6KzeKT8psX3b",
  "key45": "mHHjrmyd67tkxf69ZmLSrq7UerVqHKbMCViUdx6JqtbDR1hSPXJswywijRyFfkd1618p2SFCTrAhPEpHVBTNLkg",
  "key46": "FneqsEJbNLocArcpo8TtFKqpRxeaGMectJx7z279eZREgZ47fQHSzNGuAhSJznafPxDYV9ycG7RKErDuvYBufXF",
  "key47": "3zLjLDSZtRJcQhwVkHnwM6afhTjgtdSaJhP9r2Y8DrvjbyXZ19ecDPPhC1SCCgLVmjxVhJPQv1DfivxXxTD14xTp"
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
