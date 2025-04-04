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
    "3cCqBYes6ck3WpDDJCEbuVKAcbB9qzt4KS6Ty5tGxdwM4AaBWGJJq7wDnmH6vfwTM4gBK7KY1XdqPm9wGiUJ7yAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4imAJyJSwAzYDZB1m82cBMCRJhUDvY8XHWZxU81abDttp421Za73fLdsKvaqhvL4dFHK1ds5oS6xv5GSjwGAt4A3",
  "key1": "5Hfynid2YwjNPC9Sxwbs6MMjtEbpGaajC7wNzSwMywL2Se33GmjDnS86cfGBnFwmw8sFcvwHiW66WA8UTm331DHs",
  "key2": "4t6ZkrjNPHTpg8NN2iSCcfvHf3zav1CNjoH63RtbAif9Xb4fswExhWGDNQGyPd82UNT2WRV1AoPfcSWK1bLQFgHd",
  "key3": "5WiGhSYvJjtjc84f6n6Vp2D3JfWfD6Z5SKQGbkzvCxqaaWs5iNwgPuqJxuAHiEXh9Wh9dRD8nXC43c6daHdbmvsF",
  "key4": "5SPhQ78j3nGoudv8mJt6ufzj4AAaYHWJLCHZdfA8Df7iK8WsxANxCx3SqeGp5wjquYS8iBTatmF9opQiJ6X7bY8d",
  "key5": "3GBdYjk5nuzH2nqjbAXhUmcaoZgzrvj9DA5M1iuHVZEHsNxkqadR1aeKpvQNjCWy42VUWDcrAgCQ2XoCN3GLP4Fm",
  "key6": "2SDig8qpHk2NbWPX326bYHUGM5Wt6neG3URj2avfboiVGT3wjb2Gtk85swaUKtJwnWBjcRYKKs6Ghgnxnq45oNLg",
  "key7": "vvJLGukj3qAFG3mshadBCvCk6t4XfiMsFcbS1Yj5WymsvHPARRauyrTFzoEyoxQdkYbB9hY2ofitcPzosWu8Mam",
  "key8": "5jvbUNV3KjJ9QMD8Q6fXMB2LLxhJvtdUNHJ8N8nH5me5FPHGApQtXgk8iLwmG6xDGrQSHqUCj6JrP7tKJzo685B5",
  "key9": "vea9TaFvKctU3tCEzShxEkWYrPsSNfJ9D8A5JQhgRKb15LQEySQ4aLZnwYditXkoUepe3yk7SPEVYUeLkDPq1QE",
  "key10": "2tTLPSjSiDKA4C3JW1N3TxCoZHjxYLRhZ7qMfkscjNPmGHJp5HBzUCMSXqkjmDSLrtUFTV7eHPTJXgC7p2zn92Li",
  "key11": "25TMrMtTJhbBfHZJsDb5TH7j1rkj6WeyUCiEzxYSMaBnhhpaiba8ieCcdJHRBCRowA5R5vpBn3ys3F9EKGDuv2ww",
  "key12": "5xF6hQVx1PzCD6HeuoUp8PH9quGqBW5M2S3ib1zNzsQQJ2dFAAn459jir2xoARnqgA1NntL9UXkDjsjE6rgn58oK",
  "key13": "2w31o9VfFmAER2grmL6jFPUDmCy8aMprMKZptqSiBu8KiSVfU9ZN9eZfv6AyTfWTAhSmDGRzKM2v8gTs4dBsDtfh",
  "key14": "AB8nnurphkLgiLxC5C47WsxKwo4RUmjgJ5frjWeV7ELJ4JoajLg6wci1EZ3UqxtFzah5mH8Ldgwy4qdwhKEnf6Y",
  "key15": "3uewnYTwYrRt8sEWU6ZoAskCBP2fjHCKDxgeE8Zp9bsejPHaarePXoTpjVwddDNQQLNQnkDHGXXiNxCg3Qk52uFG",
  "key16": "4yCqSn1s5YJ7P5z4KACc67rv5oxqbe5Uv3GCTSFP2WtjFXZsEki9EgCEQx9zupCjNHJjWhLu3uCEHjqZg8mLXWrT",
  "key17": "YDCojif2sDrc9ZLcepBDtr9qKmDpxauRqGCCuGXUqDxPs1rpncC5kRnTqv47Dof4uBAHbRr2QUzNipMzDwMHHyV",
  "key18": "5E6n33xZM4UGXoKPiJqdNXPCiUNawyRy6MvMJnGjWX6nZj3UcgZ4nAuz1Ywfk3kih3LzkmwVN79bA9N3rEjCQCHV",
  "key19": "5cWzZbYf9NjSbPqLGRCnWh6eMS9zbTHAwPss5nauQes65igxaDnPJD4Gyx5zCFnYNwCyEXW2q5H5XNwzZCKA8NU",
  "key20": "Feh3j2tmd9rhi3CsA4FochuEfDg9bvY41c7zstboJtiyBwtU1Yh9KNuaXt7DBMxPDq7JdxqLo33m18A5wa75khd",
  "key21": "3T6dSxHpPQ1d4WbDivLnwtRWVgWNb5DMXMhDTGVGuJhu721fUzTicWtQim3BbtFkCKqmnyyPU5E1FHpFPM3Ck8tG",
  "key22": "498DeRRZvdRacjd74FBkdW5YisFiazwLhcQYrj3NLtBDxkaEXfWAxTt1rYz6iU2AdhxSbLfjPHQ2YaNEwJWWsaH5",
  "key23": "5ho94PjreSaNyr3xfqeYFwf8PbTHak7kY7tCPPrh2hocSV4YgAqsUDbu9nN33XaK8SF913n7h4kyuQZv49zmNkBF",
  "key24": "6432HRzj3gcZy7Becbfozfo1mAxZud4m4cxGdamqbUyi8zAM1aNnXtg6KU8i8zH8Nu2ymucRYApkxcs6sirEMktN",
  "key25": "5m9PjmtzTaBGnXBWaDa5cz5hoPbXoiCyV3DF75Lm495c1E1eX1CgD6Sr8TonUD4mmV7eWNDTtSvWYAhhtqSzQtS8",
  "key26": "5kiUF7dzt5WvUcER5dF4jb9rPryycoJAaCw3EEAYoZrRcHUATVuJ9tEYauK6ArPGNCB5eiD59MLwXYFTNyZ49rX1",
  "key27": "2WVpbBxSMNvj1wRj7MkmNJc5HQqEeQDhveAwNecTBnAPssuUgL1psF5BGQWWNWGpqCkAcvAQQWKe121Q9STvtNJK",
  "key28": "cB87UnmaW68J7dXxwzdwUARg5Db4tywrAuw4jDGPHqSdypHCehmgYVDf3Ffm9T8dagJPN1HGypsa4i6zfHwiKEK",
  "key29": "2M4jRTm7vQLLZ38grNkcQHVKebHZyp46QUxm3SjVgC5zLDxscszkgowXWGFwBbwoBTcsZnXgF6ZCiNFYgEZVnd27",
  "key30": "34hVciKXau5c99AzcuFuPDqmbZ7xhbAdxJR3D4XspMHaqN9nci9b2oMUcHJMrvKJc4ZLnPYFcRedCMoWJnZzJwWE",
  "key31": "4nJ7wDmzzjxKCeGAtdJoiS62AY8Pz1bs99SiFTJV1LE5iPspjuui11xKKhV6iuzkiyB55PsRk2RA4WxWW38GVhtJ",
  "key32": "3rkEYJyCJhNvFqa3i2T1KG4Tc11ZxJnZfqe6as83nogXzKfpcvWuTgKGGAZH2zMgibUiNMdASP93WjYZvByQouPf",
  "key33": "4wj2SrCvJfcvKwS4YYm72Zg6XTcheSwkEpvoSwq48kpp9aW6bNrKAN5Rwt6hhfqHHG5M6oMki1m1aRjUihMapTss",
  "key34": "2Fu3oPx9PnDDpz2qVimSXWtvJkyMrHEJdJGQdXGXBcLztruGt5YCnNqZtRPGsxG36DgGmXKMN37RzsBj2gsNutgm",
  "key35": "4wpVa8ZKbogyr89fWzQJCy7D3Sg9HCFxHYazqXyyz7xPsZaxudCRsGQdcvcDL2xsf5nLYQ29WdBWwQye3HBbgBsM",
  "key36": "3N8pLBFeQL21v1nwjbKsX4dQcuj5rFfYamgGaJNHqyYBY3BsN5KUqfFjEkbT67NRXUBqeShZHKVefaWQjc8xVAn6"
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
