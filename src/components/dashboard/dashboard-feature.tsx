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
    "6t3Tao2PXce3Hkik6hJHeF7HeTdHWrwByayH4ipGDnszrgwdVujGfcM5H25zJtBNJBvAVK2YEPLTkJiYFXtmocR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EWsg8pj46sVM3GJQDFqWVKtrsvD8R5SWHdzEr1NW5re3RS2NKaH1WX2TmMFYdcQv5pYUKegkRqucwLxVdL3YPAQ",
  "key1": "3uhKcXTw8PY2FiS9obM9245uSTaAztzpoq6erNiM2o9EM8TD9kYYBE6zQTgppvrbEmXANd6EYWCzbfEbMxHkdq1",
  "key2": "2dPskveAfUhiQi1nJg6q6eBHamudroYQ5HiCArTQUaKKpRNQoNTP12CMcAYQ8Bds5XKqiZoLtZkp72XeQm6RJ3LK",
  "key3": "2tHJk1FB1tmbDaXcEGsbJXi29hr3Gb6DcdcJ5mMs6uvqctobgKniAEMqx7BZJ5ZNiz69TxkT7YCPgtpowbNvNpT",
  "key4": "5c7pk9BbCBpovpCugYyUps6298VL5uaUvw77Sv9ooZWN8JdXgzDsRY9hgEMLqA2UGtkav7Y9RZ5x3pMrpCPp7saD",
  "key5": "3zpDVCKNuWYYZN41bdQbkchogzW7FPJ41EsffaDzDKAdboRC75iu96kyNKuYAJuriKYa5WB9JLyRWKxi2kZPGgaS",
  "key6": "2DZopVA939fpMwc78tcTiRAdKnj9daDt5pwshGUgRr9uJ7hZKaF5ySppjegmn1APm8mjcRkVjmjkSUHuoLvTqhjC",
  "key7": "3RLcwbbCiSCJy2BbA1fDjTHGsQ43CkkgeF1yPRcbjSU3bSHYvTitHTwdqYcrUEQjcu5XcqRNDvGsXBZPxLc7Z18B",
  "key8": "ja6ZN5s4epvycaXUyHkcow1PSrMEYVDRf3zJZdeGLwoCW6vrzwJpkezjdHQnZM5rpUbVRdvvbUpddAhFhsTX1To",
  "key9": "4NfZsm39a2sf5JruJVz41g4dpaXUYEuvyAR3gCBiHUDyU3SXMsctJ6ZSaeqjLvydgRowgjuwph1MrHqPG7ab7Uiy",
  "key10": "5VtzSx7J2igntftiqoja131MyczJxn9P5KbFb2wxySjZJDyLHbxLxNNpX5MM9NaAa9rw28QWSux8C8jnfuX9k18L",
  "key11": "wmEXwCYAvAzC2vd4JRwkx9Bn66Uxj7AsV71qMzg2DTn8znknoyGfhUyqKKTwAnYycvZry5eWDnoT6FpM2hzS1Kw",
  "key12": "4hVJsM98gaGBjUxFD16p2Er1Wataxrtz9PDtup9ZmEHsfgG2wnAFTqhiv34hKwMYityzgT9iCtZSZ18m6xfDZrUw",
  "key13": "3tNrYcE88HM24VTmJYLq8tSQszdGXy5MiB9kUNx67PDDHawFnnCHrbbLMmtVUva9ktkjm5nw1tXYNsfP3VhuEFHc",
  "key14": "4e2877GYftT63t5maee4Loepc53tvoS1RrYfQkYrNggvvRiLHD9DJBXn6R3f3NxcGADAY267dnxwAxaywgWE2eZj",
  "key15": "J8xNHo9ZB4dbBLnDpBjb5SSKLXEHs4g3WfDqjgBmg81c7Us9sKA3mz2jaLPcLcoN1KFB3TcouQjvsHj8wTcqcZz",
  "key16": "5YSH6uTmQeCArP58xcjF2wmnWNM9nEkb3NnDvokuWc89kznDryxHK6iqavTSg9zUw8xfVrQks8wcGPQojgkfNeif",
  "key17": "5BNei2GYz9EiWK1o13g3DczCRMUo45KrtrfxhK6K2SSgXGFTScwZ3JLHjbLK16mdixGumjVpko7YAv8iJTvKMWZC",
  "key18": "2SaAaZ9t3E28BRXkscrwWxjWuB5HuCTBAGUxGfyyknWQvKNdSgKBnfavK53xHVTWCbvAYVigVtmxhRuDw5FL9BFz",
  "key19": "2dFCwjfyABzwqMjBerp54Q4D91QQzqj9dNJgLCCeqeWHnuzR95zpPm8oJPLZ8PdHzQQ6t8x41fX6dsh9h5hh2jVu",
  "key20": "5MsaGHt8uXauo2RLVtDEfGtghpdQBLVeRmKnTY7kXiEv2i8SBRyq19h3HMvvEitg5C88dR5k432vDAKykcUn3W9m",
  "key21": "UqEcdFsWvCkaEAUKiFS5zjHFd1jGq3JHAZFaXPnxiMG4892Qygasdgk91zRu4WSkzy169mhMbKZiKsndxegohyy",
  "key22": "2LUrxbDXMXjHtb8yoeRZ5974az5Mr8i5d5dCUzCaFVm6dL2WNiTDuyB2fU79M1qM4Yu4Gy1x4bFSTq5CRfXQCYVB",
  "key23": "2zbPvoTRDN7sA9wU7HqDyqGsehxTwTbPKZgz2fno2ttaTrVEiNYqUw7XjnRATePnJ3N5SsQKibtvkVvA2oxMzSQg",
  "key24": "3DM9AVhp5wz4XmKLxqhUdPPaLvf1warhKo1K89me6GLtsoqRVNLRxqRCRbzysMdN3MtXH8px5SEpyim6s9CfagBn",
  "key25": "6WxZiohk4ufQHpE4Mi62hDNW2SxNWDLXnvbvyHmG91QeLhZs7VNgS47cP2NdPAw54k3yaYtRgGUaJcrMtL5zvsy",
  "key26": "1VNVm3qkL152TBoCfRSTjs3HX6KrExB4ARoHWHCyuaaMMDpyJViUU1uE1PhjRRxQhejdmwwVTz27yQ34nGTBbi3",
  "key27": "4D5hzFTaWEJVucKa8jmFygeqbD22Z5BQ2hd1kro2U4Rk8bnsjvt654eZK58eCaBSXesKJT4zHwFGEPNswwYZy5pY",
  "key28": "H7PSnoVeyR4t7ybuwtYmCSv1qDYkufzzQFZTaESpcAG7fnewM8znzHfMzGtzgmVgLsWS7LmASTnXmLoYBZUmN54",
  "key29": "3iB5cTGkKmCGZLye3PJUTfgs6tGdYTrFfHH6nBmGP5qRLM3SNcM1EEW4BseuzKH2RXCpi6BHTdFDpLaj3kzkQN77",
  "key30": "5B2jXiKPZwoDWmrBWxsh2cQLFTbz9FynRZ9xVbTHy3uZtUVss8nnLHEomPYhtc4s7hTikkNijkR5df2E3zo2Zehh",
  "key31": "4LNz2Re3YcuhH6edkWN6sPxMXcVERmWppXZH4BKdhhMSBxGt7TB56crGgT1RgmDfpJ6JU3uQYvzACwaFD5VLQEKR",
  "key32": "2uxX6RACJRtJ7WzzL1cPGBomDtA4H2uiB1zC16v3C6oWpmdCsAxQtE29XzPT3zGPzDtB2Xg6MVYDgDfYbnNayCCk",
  "key33": "5Ai2eiMAcZULUw419bXrq5xngHudaysakpGeWzyFQrzah64k13jMtbGzHhF36zKZYmiU1zXw9ZqpJrzC27NizdS9",
  "key34": "58ZvXQKzHUsjYaAMc9Q1nseGXzWs9SW7BwvE6HVywc8cSBaUAmbvtDGXgYZ6VJxvM8PcnBHQbPSrBXwCddVqWWhw",
  "key35": "wauXQJYBPbJrum4tPMU9ckGhJ9p18JFKxw9tGRZ499f7WmEu2FxFEAyEK2KqhBkm8RbqnprwWpPhdw66GdxtUB6",
  "key36": "63Qgkkcc7h8BZVxFiKX7wg3KZdGWSn9BRMosuWLCCTbimze5mUcduUdHBJT7reci3VuHHbTrtiVx7m4sVLaALxEu",
  "key37": "5Za3UjkU8gMKrMBUfGHCQhKMpPG4f9fjdxWKkd2iqsv5ZjvhKeUmqdbAEqDfXoYqwCDsG3TVpUoUAoanAR8azdkM",
  "key38": "3kfTkz5tYicbKEB7jLWXHQz1czrRDfBhBpuesK4GGhp8decRhcwpGo6DZL3QCND4XjUy95EN935z8KwwBuH3Gvs9",
  "key39": "59XRrzsMDYbXHPi8F8vM5zJLwsVrzjMjvpJhU3PnRzBLMQ2Hve5hDfVzttkRCk2VKpoWN6HPPD2ER9uyZq2j9nmF",
  "key40": "xf3mj1YLxNjihjGpVndzG95XDgz7LhHRQVfq6Bw7HLA4nFSE7No4GRxDcbPEm1r3pH9sKpH1mSCM8K5GfqDTGaD",
  "key41": "5Hy3ZmvDg3tAR5SMwbXfET77EqPTXNeULW2RHVZ7CeUc844gpMyJChhTcc99JrAwuKnMwSXkJzsFzFwb5b4EqBHz",
  "key42": "uYindnxW8hNVRvWLmFz1kRBvd5SZE4xJ3RMboyKMFafTnM77gYRAQNRbeBz8rqwqXCpRXSRf8NMq2cPmswSptzX",
  "key43": "29wcsAKAkW9Srv3JRpfpgWwGznnMiUYh5Sr9JWdyXJS5KCkSNpQrQcuSc8Z2nAHr7Gt28XkCRA2JNnWCm61iThWV",
  "key44": "3QLYif9JUSquteL6XdbQ7hX2wLKRx2mKNswtTTVuHm67z3u88oiAd6mb5MMmm6uPDcZpuoWpT2sCJL2wkbSLzz1F"
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
