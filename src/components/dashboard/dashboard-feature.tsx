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
    "4Wuh6QinQivdFeFTF2ToLpvtbE9Kf6FKA86TAWnAW8UzEXW2yNfw79S9izWfe9EJNo5LNM7c9JPaKfEPMfBijwR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RcNsUmbXTJADqb6BSiupemark5dzTtoCTCFpPMbkEs4ruVt7gB5Tx7PhsNWSfF7VP1CcGaJWPMStq1246WEsyg5",
  "key1": "2SSHnv7QPPRk4kbdZAAugdhwLpsX5CrGeqb94QZ4fN5x3BiD86VbWpDYnkzEV8u1WBJpuF5VteMKdcAUHzYoUUQL",
  "key2": "mQSLg5jcMUPuXGS3ccXZRBqZGe8QhZ36Rcn86Xex5NyuphnWpqjhdnzrK6tC7YBW9KwUPrr8xxhxq6G7WFMiyP2",
  "key3": "WLH27PqW589BNMpJ9rQwbh4gFdgBnezhFw7bsujWt5HZHPBWnCD4QnqhkSutFy8EX3gt4YwNz3zEcH9cQSbtq5u",
  "key4": "UXUxo8VXr426F4uAftNHaSsPrH1p2diXX7uokazZ3d3ry7bprqHwJzNgg4XGdJMchoriDq9cnsXUk4Gw3nKr59g",
  "key5": "2FmSPT1Hxw2RdZxPEbgV9KWGPXXCW2kPmixxuBevDdoa3EwZDskM3r3fitBYQ4ueBUHcqXXgjy874VPPxW1JEKdg",
  "key6": "5jg9n4fqZPg4LzWWUEuESo4FGwsSD4mfv5AgvzcMkFyf8CyuARGrjpB59WyGusuxC7zgLsPmYbbTMABbyAeFvptv",
  "key7": "3a2YPv1nJ73FPBX7gpaAM7uhmBC6HNWTQi29PHuRJJRf772mLAAaHvhoxaF5ayvAkHevkrdGwTfzg7igEmKLGTyD",
  "key8": "RKyJESXBEvNcsYsf6RxgSo7D1itZPNFxiG3AyiJ9DVFnxuR44y8zX8NJy7hebUmLHqt1uTthLmmgRkgAs1xQEiy",
  "key9": "3M5cfrTXBswjq15Q59p9uqoKyh3dGRPefonTnsh8XMxwwob786NpdDEcynSooetySwYtNjVPQb6eXftZi2RLHesB",
  "key10": "2J3KHoCgGeM5KrcUpod6N17eSv8jzDbcpVEapwVP5EmEN8BkYW85XWhsdxRDgW2BXrfm9MzxNtCocTesJMGvMtLQ",
  "key11": "tMnWPGTH1pn7hjy2vGzxsqVeZAQzeH79KoKFChJqU5rKJJ6LLM1oBoUCVPfqxDePf7LjgKm5XafCDC3sdKESiTj",
  "key12": "5GpK6qUkgGSj1nvmDNHSkt5yQNYKkAVqUgRS76pZJbNnsghycthd7qNnJpmSWj8PxqEHhuRJhd3ajFMGhgZxqm72",
  "key13": "2tTrUrshTrgnwPG9wWt6pyRpzyKfxaXwdVj1a2XqEYk28GphbfaRJ1VPGe2WoYjCCMfJtAYX4ou9PYDWm1BgNdk8",
  "key14": "29U7iswDL7TyaF65GnuTGq26aysUc7hk7iHmDwGqPbViezvfxvGbobfqM217L881AFsXWzQDMQhsmk8C8g89zksK",
  "key15": "2QYjPx9WFfeHzWZNamakdfv9qjhvRdTfrXDz5SHfjDsZbe8P2cDxN4UaESFLHU59MXKSsRJyqiHnarsC86pxAkXc",
  "key16": "2edqrwGWnzwSSrtsSmDUd7AqHLBVAqsLvbh6SbQfPZne2y3aQai8riMStjD8NsGyeR2S5TZw8zmx8gM2PEMDaoet",
  "key17": "62tM7G9ebF5ZLiixpFU5JW27qRKvA4RkR8Q7uSEgyDUA5euqGhKG6smMjegvGrqMuTfkCgYVUnWrxNDKXCACmKmi",
  "key18": "4BB56tgoBKu2QK3SXn9CEZY2cWJYgpmBdoLtVHvz2U6Tm94VF8LWyKUcekSzRspHxPYwi3bqybpbevsKmwXFx1YD",
  "key19": "63vYFW7EcmV8hyTQgVseq313QYaMuEDFWhPLLkfsTiKrCARAdfJq4vfHUJrhmCtWBUHTMf2j61ce7v1CPpmGy26n",
  "key20": "D4QLT5Hn7nKGfGGt2RDnmZmfrcNVnfmG5L97Kq9NjHkcso3nDTN7GXnNXdyU19uKgpnHsNtMpSkby7Kst4tjSmi",
  "key21": "5D2W1q8cSD8YSftQvxkry3yxEiWAwjwbkoqTj93xzWp77ukf6P2stkDvREm76ZxbkMpRZ7fbhf3RZuPrMybQHEia",
  "key22": "2bKKJr6BwXfppvxbUysaQvAjWcYiqJPvpvahP2y3MDdfeXiqPuJHLAsP5Vjk5YE9pV8cWX6CS98j3PsUooy6xQW7",
  "key23": "4F74RGKNyznP4XRoLxYf487K96JoZFLhoqEi8QRPZqm5s97gNYhQVXo4ezfKvmDg3HT8zKuMy179GXzBAegceAqi",
  "key24": "YLg4z2CmPEJum2dzQDAEAQbJp4qr3vdPH29nXXgCgu1LD76Ap2SMpLNR48gQTzXCU2Rc78QMLHJo21TCq45rGcN",
  "key25": "3CmCtVtgFHLXzFkTJcvjLAZ4bmF7y2o4SMPq7YLhazUZCH52exCr2dLWXkCFmbxheD1Hv5SGjgo6dftXFD6VHahX",
  "key26": "5pPMC9pTQWAZ9Y7F59WdUgwJzCaPT1qy99JMwG4R7ygaAkHB7kSdedR6vdheQL3AeDVxMv6bWBSVs3uvDMTLpZ3e",
  "key27": "e6fxqZ9Wg4x6TQkQsEh3Kpw1744y3pW8iDt2Njzzv3Bx86QRALKJmtbffeqVoNLW4RG1iL9oFuU1MrsDZeByyBe",
  "key28": "65sf3NxZR2ZUKrWVPbhEuQz6hQLoSDPrDcciEzVSSq6YcKx9b5jJkVewctGwwXULmo8SY6uX9XTatUQRvzPbSo1B",
  "key29": "oAzTxqaPdgan9CA3SPzkYK5dD5kSbrNkg26hvN33s2vxjfWKyyGTzH594zHrBWCpZ6hSMzKQs2mssm2D7HZLHqb",
  "key30": "3yBUzAeJxricnJGZnbKerxjCAySUbXeP1TnQy9Nw9GiGHMeaNyZarBW3gmQh8bAo3A6FggaMQuoH1j7SvDfDrLGV",
  "key31": "5ZYjGRhxbhYy6g51naxe1bzf9CFutv86Zk2nv5tGg6YZGh5XY15SM5A9oaUbD4uA1hKGF5LYiZnqvrVSJRJyqedc",
  "key32": "2346uf8jnFhQCNdfyZxLeEHpKtUM8LdiZvfSDuwZa1gwcX7hjfA5GZjeW5JBBp5zMGKk4Kvhq5oyVvUhzGCsWudU",
  "key33": "5K7FuV6wGvXnYBwbkyBXxbDC5tfzuaomuPMW7SziXBL35rNK9qibEfERHM6HGKqpWYiTRK6g59nETTvJmpmWA8sG",
  "key34": "5MKVQFSHYV1bUH6ic1STZ3bP8fAmTdWdcBGhJYskJkoq8LeC6NX9YoNYAjfEAcDXtRKRuAD22JYjFBcpiYEF3MmS",
  "key35": "3atGPje6aJMPptXw8tChULtRNban5Qf61NuZQUzcuzXRyyJB8ifTct6cPkJumhiiayUKV19TNRjmYBAGKUM7uyen",
  "key36": "5rrKPMEdicYHYxHPG9fgB1hHe5MMkfWhcqo3LaCifmZRugiyaWrkBHfYBUDv6knogaGTkkwc1MKC1yA46VdZotcz",
  "key37": "4yKjPZwVSmzV1gQqBtuPyV6jf3mJmUMts5XRL1vjyeCstVc4juHrvGq9G1ngpJZpRdpqrxug22C8pieYoZBhnvjw",
  "key38": "3eJautR2pW7RBsBttihjMKN1m9vDPdtXBTH2ge2z3uvrejvWDm9piQQgfF5sT37jFyykDD5UyF2CsfZorKG2ezBZ",
  "key39": "34zUjwqzxLzDzwjsRs4f2mn23dvnpdeqvn8cuXETKoWyg8dE2nWxafAM74KeGPhQaxrJYM6dqPq2p5Peqt2r4FDD",
  "key40": "3QTJUP5p3W4LSFdTdHtPEFgPNBrYcDNpWrHAoREM6Mdp3drpAn6tueBEb5PHCNwoBr5vLmaq3MtPbFCNYPqNBSMG",
  "key41": "5uWSvFTyLstPP2o1S85LobVkYWrWWXZLZKBqaANaZixprW3S6kfW3WHKTWdLmxK9FcmxNLMJc24gHobtiYCziVhi",
  "key42": "4xHazUQ2MPjhZiV65BYwQG5wWSCUsEAeAhWp1aFAxxBVm4L8r34FVq2q2bM6NT9iHhakbY5ycp67wyukMW16izju",
  "key43": "4fidKXHmVBHYL4uzPhS8TprLYvq5C2nxMxqjaQsFBiAzH9pB4MNAphb6yz5uTc7vkaGjb5ugcvcxNSJP9gjkG8bB",
  "key44": "2quX8z8LeetSPNr2Zzcc97F9R4mCbuYXzsheoiUoeksWgRQSfqP2HjdUE49ffpQ33QKWX11T5YcBrf8MGQEkJ4P2",
  "key45": "63pYWwm1Zk9h4GtLqMELsPoxfSHj2VX3upVzxcBevkc6VsFb3rPXEE4XTtU4XntrtXNs6nFuNPDVR6EpZ383JMer",
  "key46": "3jLiVVGU77ZSZZz64ngwkRcFp7QFwZytRnBs5CHHAZd98M3Q15kQUfRcVGYKRW7AEmSPwEgEa9FSKdKS5sv8pYPY"
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
