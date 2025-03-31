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
    "5VscrYuRBZ9LVJCpsnB7azz4H1RKjvyiLFeGugd2CFdSjkrrUP9AhRHXSHApFDehqvcJ4P6hMjtnjBMvLtRrpRbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xT1q5EeEZFNvX2mCvNLbjKLb4kF123hWwzyFghKEJckLzmYSFdHkrgBummUa2qYLYSHK59maAT5U4LWLB8wTtKY",
  "key1": "4yp2f8RHf1DLu64Z7YM9MX6Ccvw2NSsCBJ4DNwRR7zPNsyvYLpPPm6kxDxEhriARDkxFUrUHo6XMyJtFF5kG4mDG",
  "key2": "3bHhKEouGVAD8ZGLoyoYPi29RD6NeuT4jgeaWh7jhXBWRQXw6jY7JBH2hwuibgHzakzNN4VP7GLzcap1Edysk4qf",
  "key3": "5Wj4mfwnK6cnLcNfMt27zbi49P4nLC2AWtJeEFtgSffdfiAKAXfDKSAtyW7shcjFHmyEkZpNg6H9HcJysiErbtyH",
  "key4": "3EgWZ3xeBWD6T3feqjcWP7vRGq49uYz3pxtCUqnfDJvRPKisacG7Msamim7ikfNdwgxNUn27UzEyEt4X1dBJh6Pv",
  "key5": "whBKJ1MgZ7A77Bf23DMJXqGS5nvrxrseNP7QTw63bauAGKiQHkjzdFKcPaoCuoNyvAMdCXDb3YHVtdtMu882Wdu",
  "key6": "5FyGWRWHGYBymtsu6DVfZfhq7jH9qfhEeZXDVgZTXMuJQs3Bh2HJrzTeUjH6kXyDjmQ7FqJra8qna7UfiiDDyS8U",
  "key7": "4Tc4bDFWuB8Bmox8cr4xi5eDNjcH852rrgK8p5Fo3gGM5NVoQ3uWRZ7tNJkS7QCd3NbMCFBGpZ6D8Xpva5hqvvVr",
  "key8": "5xBE8v5LUa2sqjRtuWZ2LCegtEHnKWB5jGSnPCDRdh4ozMn2qjtDuxhNYY3dxspYQNcnnPF4XmHUUxXJdgyHJZ2q",
  "key9": "4eueMGFzNsnu8xPLZYbqFDP5PdTKUZfaMTaG2hM8mVrNsyzJWtzEti5gURp7FfrXM1unDvVp6jePMPT9V5cAqmd3",
  "key10": "5FFQAbLZj9SQnVtdDi6WqBEdPfnfiWSjaPMYMMYgFGUrsP6JWPM7FGpEFwFgvskRKFuTF6KJAJzeKvJE8XG3qs79",
  "key11": "CmaX8FXnHneaf22ooTH8HitF7RfmpnPwB6ZN7eyMwmznsVgMxK1RzpW1ywpwrsx3ANCkJVQfF5un13uD23KSkCF",
  "key12": "38QrqPpNHacmVUcLPBJ3xZHRmNgsXgDdZSYDxCLTbEJ6NZAFt4tTAkURYeenA6ttEKaYEb1bo7HhNhHWjc466Tz3",
  "key13": "591rf3rZyXngpA4azoDK9oAcKb8pP1FfFXPUWk2sDXyyMCy2xXrKqLX1LRWEHgrDJZrsvttDYRDA62d6o9vt841q",
  "key14": "2S4jj3r3zGykcj41VnMnUHeMGt3ARQGE4GvBhf9Hym8TghSAKC2QwnnJJFtvg3c14krazM2drURVEfuoyqYZ4Tp7",
  "key15": "4VLD3zV6jQrwvW1XSNC3TaSXE8UrnZEtas3YvBvsuWidg3TQSB2JXpDsX2KjDDaLgVf8GFKJJZM8W5BrF5F94DZZ",
  "key16": "C1wfvBzstKdqn6oHKeivs7bDr6YNbXKqPbfgBgJYgyEJXpN7wz6RzGGhqcPQpJbErzZpNLLWEjndZSsYf8nxQZg",
  "key17": "KBLMyM8vE9XgCVa1wiaPAka7SyK7UmZNVx2ndc3yF9bU2T1Uui9arG7KVFYLC4gW2tTDa5QNqWNW9byFSLEnCaV",
  "key18": "4Y4VhzDoxEJavrttwu8TK7VYrWGhKb8mQw5wHspx2RzAWby5r8TdRhtHo2azdgFU5ZfmshRfqw4JZH5NXeKMW85j",
  "key19": "59VYxjwqXNm2g7CgpuMHn8NnGBbQiz7JdBMA6zgAFnS6C2fDMhnZhuAzYVDQC7NWqZKFEKqyXG9bNwUgL5rdSGSn",
  "key20": "9zdZtC5fPV6ZgFAyTLaR87vQCAGaG48fjPNSsA3DKr26gGwc9aYcndYYmbo2ifGGimHGuarLU1TwUYYrN1uMMzW",
  "key21": "Lmu96SLE8ZJWEHpRninwmqFmdR8NrBpk9yLt3QuXE5sPLK3vu4LUT63PvDgnQGV8deDt8yjtu35rePTC4TBX4Sr",
  "key22": "2tZEGgAD4EzrLP6QPFfdfYDZvJbQ75kenm1Tg2rgSWgey2XZWywbVCLTqZcJbUUUHNyj8cTxc5N3cWbLkWyUweRY",
  "key23": "32fFP3YFuEt4PWNZF2W8kQznbkPgQtZ6dK9AdAvE28ewqBWgoCW4m7A832g4TcbMFqSJAViv84rSLHK9NBuwAYge",
  "key24": "4U6FUiYH3RLdbLopP6Ztc3LZGXwpefRLJGZggdt8q955tLztbhX571xDnu8daaMdLiY1CCQ4ZbVdQ8q8c14GvonU",
  "key25": "4YbS3BWK2H2q4Grv6kcQKPJMcyMc2JwcN2Tktn8b4JbtX5svtSeJC6Vmaq4FZZVCBceq9a2WhjQXPYfZ7sTk1CqD",
  "key26": "bfbFbXts3yEvM5LZS6Nxs5UmwY8FXtmUkS6Hq3MMnbJ4gGuSdkKb47eQ2m2ZEqEQJP8BPVtuo9gN4hM9aj2SGzf",
  "key27": "5xjXJWDHFWvc9VXAAfESoVJiUFqqnRUhk76M4MVHNkN8enjRkz9Ysykr5xapWj2Fjucx3AoGxRM36MbnCFSpPP49",
  "key28": "45CJE2aKVRphzJy9PUvqK1BcfcFipLsUUgTEvxJkJaBTP3EhAv8d6uFY9rnsGiRpGZHhNv9MHTSq41CXySQe3faw",
  "key29": "4yh5Fidk6aorJuUxGFEo4fQ47tJQn2SqSgXSpHqbkZxmLyFXmp8xNLcnhrwzyFBSJwFdPXbSAC7HQJJ6tKoQWuMf",
  "key30": "WbkHfZcjdXZGb5rWaq3jhroLTrowJZjuecdxQENSUd9zA5LwjdhPDExSikpddkMcsoMkbHkfLCn2ageiao7bYYb",
  "key31": "4PUFtg38hKeu6QSNee4DxhXA8WZjmJHDc6mnrN6SHnLFRU7EUGauHuFVjfdqENUZMbEgG3nDduLwBJHzDaAtaqXb",
  "key32": "UZ7QSD8pgkpp6S3LidqiPfRFaWMbaeSwom6MoYNKoEzqmbntf8ZyBNLJA7spNHAu8VidkU2X8Sofvz5gNg2R1Zh",
  "key33": "SMpeBHcpF7hwgqti77DjaYAvPitx8xBi2Zp9PLkRdogrAfTLFR4YLWTSAMjrTs28qtymVB43rLsKCR8Nc945LYD",
  "key34": "5AooVsnY9DHpE3yej5Bi7SKLbv5WronqFyeqfCSrodnhuDmzrsWQEwJefk2EHgir8wQPusu98yaZhdK2DMDZ6KmF",
  "key35": "AVTV9MRghwpL9fbVv2sLfFZcYnHdsjFsvjYpDBZYfYsw6Kmzck64bKi7zE5YQx7UhSZ2P9eUChj68crqmKHtb7f",
  "key36": "4MAGHW1f86YZCeMc6xiaHm1sS1L1ZaSJYjjsDCj4DropXAhecHfcnzUkvgps7kXerh7J7jKn5Hjn6iV6XrGVigvb",
  "key37": "4xvZw6ETWsZcXaoYMTcnMpKxXHe7hcBM2Ht34QYsP4bWNtJrQuahmQDpd11Nyruopj9zt72EEAjBCnscB9DTUQZt",
  "key38": "2RsAUPDgmRZ92kGQZ9oqLdrfzbvWnuFAPnoHKgAi3BbGQcGn7AzDPxxq7vZyKijs26WrSHSCZbWXTyvC8Xgovwjq",
  "key39": "9gDjfKsBbzcjq1c4LjwvMbiYgpNheggrCAJECCQnGVG6ULsTTuiRYeyPf3Ub5S1rHi6st4C441b5iUzxn1Gqn7p",
  "key40": "5PVvSSszLdGHnBcdd44xqz82HSXrCaPgFoGTu4doz7kibdQ8o9cJyJfcZy8doHZYm9YzwTdMwkQB5DCaGJNJUqdp",
  "key41": "efVDNg2JKUMmqB4qg2QgiL6VdxdJrbj7k5oTTYMzTmz4TGJTpeftg2YJ7QYyFscGFtEhhqQg9UXxDHt6DpAAUyQ",
  "key42": "3KNjsxFNmWr18dik8iyddR88RrJ3kNNbAwHiyX5xG4eH8ZKSSDDvgUMi7MyjNcwoEbMXmAazH9zTCFkkpgmpLAtZ"
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
