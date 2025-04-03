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
    "2LDdxqURvL2LndvrpcD2G76DiHmrq8RzaoiFD32edd6vnYWjNmorWAEB2KCrAwcJudR5V4A2voCo5JjeztdkuXW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mvLcmzCTfWZvmGgmmVmaiSjautntCSzxAtyzPo2Hm6kgbAQxFKEkq3dSBiYkqdNSdhtfcmZmhFTJqPkPwTNFeK3",
  "key1": "4KTyhvTM6G7AAC8XBbqM97uBqNXzmRzKZrjJ85JZDESX3CfNoC8Cty3YpFrWWggG1m2ZNugKwjKMG22yqgznMbZ8",
  "key2": "2pQLpL16haxxvjRALxg8Uqd2gYwZztT53d7f3YKuiQHjj1y37fxR8eY4DcN6YCjnFBD7PeCYxGt8Mesr38uezXZG",
  "key3": "28HfGUcXFPacckPVkXFsKvhcLWRjYN6oSWpbsx3frt1N9kK5pdfN8Kz9hDt7f85h6UGtG1eb5qkoVBqhdc4kX7Rj",
  "key4": "BgfGYz66koaG5PMaX1jyzw32gQ74yR6kkYxyCyd59pVugrFZXJZEmpzczcC5ZjW86ACVW2rx7JPsUyBxGXxbdzy",
  "key5": "2y6r8hBp8uPFEdzQ8iKXRVFbQCmDDx7xtTtDinMgcvNxbmah15s8FX1XKzdriZX1sJKEjkbzemYKpferk47Fy4H2",
  "key6": "2WMqG4v8kgbGAtg3ajh8dKCu1D4q1ckeyBJHX7Xsvps7sXTXKBFtXd22PtvAihq6aSGBVUuPytoThq78f3HvJzqJ",
  "key7": "CZqUfVx29byDUTbsT9JSTybeJmsScRXDeW1V85GjPe1AwV9vg7GuJgGx9Au7wFuuNRjrfCNHe7HBtvGsfS7GjQf",
  "key8": "5miG1JK3Z8J8dM2eci1aZ7P3CqvuDuu6NaiFQTErgXSAu1SdP6BaGsVp7KfVDXCFg4pYy4vYwd53J63EwTh1BCRZ",
  "key9": "38PKDBxgspdme9B3xQdmFib5ctZKt4iGFkp1dzceywriVKmcsPdVHiFmNBWqv7cWUtRCmByPKjfoeja1sKX44Pab",
  "key10": "2kQ1dRP5MUVdVwc7uxtagTzJ2xVW3hjhuq784TenCQ1CicfDbFgU7aBSCsd4nEcRftvwEPoKLg29xYjoiUYukV7J",
  "key11": "3atdQ7oqQ3mPuhULeQ4WkfTyPTa6kpbLBL1m7bfQ6B5BcvN4Aqday7JEqx4769P56ap7hYiV7a8zjqACFnX3Qbwg",
  "key12": "2LYRAZ266m2Bd4kSpPLEnQhmwAsHKaLVcAzYa1xbHUCrMPxVZfd3ywtrFaBDh2b9pf9MVDbGnNES9VYLwEX38Szs",
  "key13": "yYhQNV35zvPA63k7NStQhbHDN8b9cz243L8HYS4M7ZxUxxvhBSxNaYM3Uu6Pr93DCEopi7Mj3KrFW2xNEPEuGaA",
  "key14": "5BGnGdRsSPH8cReMqeoJioULQANQ65S11dKcJQQ4rozSHTXA2EpGY4Ni5PStqxQBvRJ3dUteK24pdM8hyfxz1CF8",
  "key15": "A4uFYfk1n3zYR98NPDeG385fjEoULhgbtyWXjTbdv2Eqg1k55ntRtyZEqLVqGby7ZTziiM9aWDUxXWPHV8gCPvV",
  "key16": "2Jawg7f5ZyszgKa5BcDKbWrSGqB25sdKJWwu7At7TgAr8s88Xu2yMwyT71iStzwPrGb38q3aTS1jGzYHxE6qaDwT",
  "key17": "2nyYYCHTj1Cfj4wHTMSbXqgVJ33t2ZkbFjfEt21CB9KGb3Xj6dFtLYZtmBX5emuVfZ8t7d8V6exHBFNtXBRve3zk",
  "key18": "5sweMYuBPHiFCwD23GR8moVz2L4apdcp8mdodGS5fHniU1sSxwdik21r429zkUdW8br7fcFkwSBdqGC7WwBq7umo",
  "key19": "32sxjLsk9kTtL4VXNQTdVBx6a4TWBXvikTWkP4FNPhTRetFFw8aMbM1UHLBr9pjb2UtDsx48PwtbDKmfD2fqSWoP",
  "key20": "uTbAF6dwrsUrnTAgeDMTr4g3t448qkeoZ3dcZnUd8VwiydoeoxakSALT3YK1JVfJ81pVWiEs38ysCPANoYb58AS",
  "key21": "4i4KWFXNTTXDnKXsQCigHGT393BjisgAAN9amzdRBNaJg5SYMgaAboh84tAJ79JGxhpLWqGP4RnqHwA5wQ1rgrnX",
  "key22": "4tbxy97bUCj4ufJjHE9zgEX4nyApui4JfVtgKaoa4ALoX4KoTBzeSbDkiqGTxWb7i36QcMPqsPqze8g9o1sRqaRL",
  "key23": "5yRrvbJyfjTt9zmG6JcGarTJaYdDsss9naaDszV6ba5vhqs7PALQvJSGfdXcjTd5nyxwt3LJuvBqTeAo6CzzXm4H",
  "key24": "4Vw6iRoYZAU234As13cEX2fiCVYwqDrroRuhgvZNrwoftxdwXjvX4eb8GKf2Bp78ircNv5TMaR6uSXdP9kuZPhms",
  "key25": "iZ27JUPF53sehRvPwrnQJgX6pYmR4qv8cJn2MrYUfQtrcZNj5HaLpbEGPq6gFsxEa2J6YSebqg9cmkq735WC6D3",
  "key26": "aemjXgVEJYm84ZhTwxcB5qVc77Nrot844m3Bo6vTwoA86knUK3VuGy9s9Voe42fVNSeTP2p5eSDuFD7GbQbTjPB",
  "key27": "4QrUpaicG9h9ZU1vFoX8d61DBHPsBg4JaRby4WCjiNk99L6jZZhtUuYUdkRJ8yTZPCx1za6oxpKRX1dyCrMUgpAD",
  "key28": "4nXSz8o2pMUYAzjKHeDViEdBMQ6DyQ5p7aucisLxPwVW3kdNMEBGQ2NHZvoMEPzhGzDBC69GUichheEGqvbF8u6k",
  "key29": "2UQ8oMesMaXUjZc2F2NBGT4csPxeiwhxpczAjCmowZZWuFVDbwF8qjxNvpE11TcXWxykz7yVoW9JuB1coz2u38DJ",
  "key30": "42f5BmekTzzLjx7RhnejJwsiJD9xTwhZjhPgLCMiLVkfK6CZcYT5v3FcNXCsV9oS27YTcu1S1HqdTwQ5F8krW5Hx",
  "key31": "5R8pWQo42MwndDfZc97M4RGw728z4FHJJj3dtqM6dpBFUAfz26wCAuSoScEEVsiFBYz9e6XvgWW8dg3EwvpfscKj",
  "key32": "3y8LxfZJZJ4gZkPu8xXpbGnZAFzVHVLtug14GKthnXzHyKUhs9q7vP4Kc53gLosoHBVNA8CrZG7KZ7pRUtP6vsQx",
  "key33": "4APVie8sTuyMpoC3ZfqB5bR9TySDxqJuQXzdQXQNLSRPs8XsznhukShCnwWqxgeGTVoNwMdUDGhEg1QaMgKnhTSL",
  "key34": "2JwJvBfqSM1uJzp6nzWLMkx95ybLHetRVqeodxxuxJQ9ydoJgMjwkKHENt7JgYc2S6TFK2pa7KL3jPrHC9PLoTKZ"
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
