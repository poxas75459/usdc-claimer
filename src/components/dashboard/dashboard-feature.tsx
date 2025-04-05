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
    "2DXspMQ1wDeQZerDV9Ao8vEeTNsnb3HW7YoQnh7GUx2MpdEQuApseeBAKA9JxZxV42hcrUDbQwvPQEKKHUCk55sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cwn9P4yFTqqpXFyn8McZVSADD76pc16BJa5QUiSNkyEhEmt5RLrjcdm4KDjV7kBZ2k3k8CMqZCKvxL4TEQGJuzn",
  "key1": "bwe63uK243DhhP7t5ZrzAtdxPoyqCSSS6m3zJ4bXPY6vHqZnt8bo5dZbevQVLCUvE9NhLcdeGfvrsKFFYcatEDq",
  "key2": "3kvs728MeDiv1prAMdv9ZU3UXzFcKKh4fvWcv6LPdaronYYG8N5EzsDRsjcKGRcn5bV8w6AxWsbUV8TjJAUZDQtz",
  "key3": "2P4Fn1vUSdTY2hpV1pH2MJyHTvc1n8iXXLsufbveFK6YgSQZnMU3EGQxEczsV897zBCZEysPsVtsdzALkthVtsNo",
  "key4": "4WexMuCo2AYVTzXcA92z4a9otbFDoZbK51nyrwKapJF3nKEhuTCkL4BpRf3ZeRxfTjFn7BaZpXHHmdrRNhYvQfwv",
  "key5": "643KekDDcHgkSLwPc8rNJSwtmCzFLZNNGgeLCStcPzqDRp3ESTnZUfDGmQKTzahgKfm13AGtUSqT6qydSWiZPJuC",
  "key6": "3UuDMJwEtjstyBfWVcZTGjRF3WQnVDEnT1XmNm9phLHSwUZBx8rSA2BjNMqpdqWBJxJ8KrTaT4EVmV2qSompLqfc",
  "key7": "5wp3PDBU73ydCASLVhZeAu7rt6Q15eBoHfuquPw8DmixW9S7gPnwfWmwnMKjoHUb92aLr1rjjkfmaMghyR5pSyye",
  "key8": "25Z67FeMT85fBCHq27YwLya4dLGaaJnVAkfAXS6KGaNUSUjHYCURWfQE7noWom2SLJi1jL4iK9T9iH8YbRUivVvv",
  "key9": "p9RNRYzw9xuJLqds9iSRJYidXpbhr4NR1Tf4QiMgfwJukqDKaGYtQgVwzxFoZKkvaTKT3YYNV9usW5caQ9qva7N",
  "key10": "5MgPifywwfuE5dijRpL4jeBxenz5TNSYnpY79UCZzHb2yVarKtw11VZ2jyHGu7oE2xvk1BC7CYNz6kEF1d5okmLX",
  "key11": "3nGZPqeRsJ9yhLLxuHRuqvE1xtcrdGJfeGXqACADFUJykVWwqcJVZwieyYz5FkSfq996VFxcMWMopVv4oB6nycP4",
  "key12": "5RcvmMcSeKj9Y2uG31EBdr2o3GmGN2pph4Xg4vmCttzhXJFbCYMzMjkYpBCDttnzoZ6ANhG81rN3p6DfhaQVdDhJ",
  "key13": "2iPE79ko5whJSpRLYhGrkzuApyWswGziCYz7VLzYtPsc2DdgNhKBCRnLZY5ykFUdUnV7DT7nyh1q3Sn8GmRADfQv",
  "key14": "5JiRpNTG4kFoh8TS6pgHKsLKbw4XwJxPbwNm8TgvQ8RwsDo1Luv5bwhUursKJUr9uBxQYQoxCX5heWSo8pT4aKn5",
  "key15": "62wwGhrXMHYjjHrSzpK1si2QDKCYxzKKXkH7hMLzNM3V13jZbNvZis43cewzpU3eVs3bXbPm4GXtbbPvAJ61C2UK",
  "key16": "PUREwqqgTVHi1YtkMkryrSK3dRPNWKLyvgz4yyBz6NQTT8Dc1rJ6cw7sZQuzFX9HCZTj7cGiJEPNVuSiP7nxBjn",
  "key17": "3MHJSnfKrvGqzAQrWnZkYpZuZPfFrNpmpZqzDeMNZMK4dBg9cRXavVcKTfsrQhcvGSpKWGU8PfmgwfDxdVpYMtHN",
  "key18": "5JXjcPGUB2AT3ubaCcPGoY1gie2jzziqD5gL9SEgBD313XX86FK9yZvjXqexaUhstEUuyvtW7j9yPweYfxH4429W",
  "key19": "4W48pAPgdPDVdiGEEBG1nQJ7j6ghmibJbFkH3XTykQzA8P6uk9S7i73gC5AT9roApU29fR7KF3UKrXxGsMaFaKKy",
  "key20": "3Lk6iqqLvPxHhynZH1LH9ZxN3F374ZxLSVZp1Xp89r96ErbShzoD139VYvCviBZjbKd8P4wrd8e4KJVf823cvhG4",
  "key21": "5BBX1TXQXwV76nE63WZ6z1bachTHSzTPccwdmkKzKPDqDoub5YGaUTuJ57Cn9gTfResbCBtdQo7r9gYW3fWqKyEh",
  "key22": "38WpUS2Hj3c6uvkTn9cuDBFjQSsMWzy6tETEwG2ceDKXUEq8Q29UotT51CdgXKPu2hnGLbCjDZdEWepgJZAeXfuB",
  "key23": "59buQVB1Nn3MQatP9PcNLZFavWwAAwTQeGkiryKVnBfYAtEKfimzjLnjxrZGUqmbp8EJH8Ac6rwCKb1x9PkYb1kr",
  "key24": "65SWKidL3c2p9HznCqeYpFLR5xo5XNHSDF99xT9ThBXyPfU77MXE8JKb5YcaVXYZbNv4AZ1ebHagzuVMYNK5x7hK",
  "key25": "2mh18dJoCJbPxb3omsMcVULhPctgr4y5oENXWA6GLuhGDjtgsYuUFfo2pHaonEtjfvdwqHp1m81P1d2cWBGhgmrK",
  "key26": "zbruvCpmqnhfnsvca8NbaPXPfAQLEBqmJpeYwbGThdvDDAMNFDwetxCJxUSj2jMb3fd5pFoTCvtDqArgPBLC5qk",
  "key27": "3cNSuCm4QZKisVHcKTHtxuU6LSkyzJ1nbmmN5a8ezeLC4ntxfDobHsbayA689nxjaKDatwm8FBP9Ut6QwoYf2Fvn",
  "key28": "gCHsFFa1A5cHUFhxqAaRogj6zgiXj3iwnu7ur1Y3aRVuZzNQKSqqtJx28sDreEtdevX2vKgbM64R1Q1kpLSwHjh",
  "key29": "4hHBifRKv3MSJTxS63JSa24GngavKUSb22WyCMFir8RoKF66x4uD6iBLny1JNr2jPB1tduN1AGt8MrQYx3rsMfTy",
  "key30": "64v7UtEbmM3Bh6JFUfXJ99fJoBs3bFodZ69vuP3ksnqwEgHmBbVCBzg3pjbXzCvxoekppuXtCMoNS91HGtXo1wSd",
  "key31": "5CF68ZRuToHZxeYbvzXzmjeNDEpd5jz46tuPD1XGZFyQJwyoTMNmg2aTjT1EnFqTvPm8ivs3snGQf3jCeB8k7zso",
  "key32": "2KKTvBUnXit3MpnnPabnV5gzZZ22tHJFAReQC9xLQQgPNfZPmBnBrKztrYsCwpwH6d1jnwpcEpfLnJSP7qj7US6V",
  "key33": "4zNp86vEkXFEkQTM6sXygJhyY44DojsSunGYY4cfeCwbjo2FY6tk27btUcHafGHK5Lz7CubjB5pgD2ahxCrKBCjp",
  "key34": "HRHYjhoUC7ox6YKWQ4Pa3XWmDYDTjauw88kghFbvEfnC5F8iVpGZ7VJkG4MhrnCFR9g9TKoNnxtemfrTE8vNDwq",
  "key35": "3zpdnAW39njacPqLuDeScTSBpts6T7fQiHQre4DqbsK6scbJD6DtSP3uZxfHjD683CgzawKHrWN5ot4RnCUZ2euA",
  "key36": "5wz1RZH517JhqvgUoX1LsuC6MftngduNr7FiZ9zDF4ztE6QUfMukAk878AfskruNj7D57MDvqxwhi5RK6mYpnXqC",
  "key37": "3dwXHekwkfr7TuXwH5r5MSK6LQzG7DxWqYHCdK7B66bprRPFJVfWWPwv9vxYCsQ7tGWrUxEo1SBz1Tyw8n8ryMoz",
  "key38": "4MRuGZgTGpC14zu1jrYDLLKLQmpn4WuYo2NB3FjrZdzQM9knQpy9Ki8fTiUB24CCs9ew34eFTrDyYmA2kL13zBSe",
  "key39": "4nc4XhwXxK4jAHiCsG2ZDk3PPJZBRmZXEDxvhE645iTgyJfX87rNfTEoRPwScHXpmGwbzZgZ1yGhaoLCfAxMSi8L",
  "key40": "3SuCRCUq3zmtrjiWF4MBvBHShWvKQJPGcAeBdqMWHxUX9qk8Rxk89a1nJrYcsgPnG8Po5bZvwxdrWJrK5iMLaW4R",
  "key41": "3YJfHkHhi35r9C8DjAxwVZJ7JvNvduLWbPiGMLxnZPtu7SqwkgPJQPd8eLYYsdhszGSabb6CSzX1refVcERRPNw9"
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
