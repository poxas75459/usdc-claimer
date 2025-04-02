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
    "4D1hNg5QyQpnnQTZAgnaXHS3qSM5jMijR4traqezhcfrXuhL5WnrnQPRTbumaCsD3b9VqdbjntGN635qmTpmpwqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vSkkK1a5B2dysUJL59SKFeK5VZsFKqxkpnve9tPAEsK7dKYN6tPM6E4TdFKCZsZUqdMXqxDUnYH5vhRmz4jSnD9",
  "key1": "4PbFbi9cLNpF538e9dEHsktph3xo2buvDhpYFMbG34U7XbSD5RpQvvstKqstSkRREP3UM666LDJNqbf64Z7k51So",
  "key2": "3uQagMbkbzf9sFPm8tRDZ3NB4go9bnoVnCW7ecJZHJX1DydNMha5J3aULWJEPUu2Bib1Lhc3CviDegtXiQynPMgr",
  "key3": "5PS9f9qsJsJzQVJRGfAVeDVyVJuYjo9TiD7UE9awErSgnPa7RKhDEzgxMe4TbXPqijQX1gnsyR1exW6fiF9nE4ri",
  "key4": "2u2pYRXzHYy1reFVeKmDd8oMjzAJYDhXT1L9Zea3UWUVw3V4PgCHPD6G1kw9i7urfJUUfsqW2JPBhPkuHxQ6Bot7",
  "key5": "3xHQs68Rg89WjKw6CPSmAyv6C6BJtirAwgAqv3gesxCh9jpWHbNqbjnKrDv5c5xLYMvXetyiz19boTSA5Xe57rd",
  "key6": "HK5fppvUALUboQeB5qrjhNwWT7FPMh938sAky2jwkes7etdzZi3MUqks9dQGf7vh5zjsmuKeidAPUrDGbtF7ojp",
  "key7": "5jt8AxyrTtQNSCUGGN2ryafs1jtMvcKUQkDtRpWQiZ9F1iiG46xeTuC9ZwqaGA92L3ND9bDnezrz5s26b2ZtZNDM",
  "key8": "1KeugjLfeC5yxbpFjS1cKKb2q3ZSD3et3Li84pqPeEzf7hNz3NoQ68m1ujVk85Y6MeDd2nRDsEft8mREv5HGqLE",
  "key9": "D32h1ctNiY7xRuy5xpunLbsMqx3Wu6hyJd2eopWpPu1prHZjxxwcGWD2bUR4jtTKBwdPST6XyfRpjuLBdviTHsE",
  "key10": "5o19F32Pvesw18cwAna4qTvKwQmLSo9aTTicYMucuzJDNRTpCRjxvU8Ea1M1mQp55uWa1kWaps64RbYiZhrTQZNZ",
  "key11": "3Ky2bJDqmT5oDo3mt2MjLub13khBe9eH7QaiP5RATtTtneRfUfCjQMt6wuTjmqAtMqiKG9Hjjk3kePJX7qmvw2b6",
  "key12": "34scAHxQKXKHLeohK674HtWCwLSC5mg8VnBvEdXinKk7WwkdEFqnb3TQ76fQvZG9TBqCjpEihU5zbzjvN3fGmLSB",
  "key13": "4Z1VBGUwcx5NUpH1jhtnGLD2muCJLetRHpFgwdxatWWJLA4aFgXZJ2bYY6iwrUa6vaGrQA9UBxqGMYU2YhysRe3C",
  "key14": "3ft2wY5a8q8nFt5ytAr4uYhpndKZYDGmdz7cvvRyLuymY9s5jEqDDLEgv1RU8vyr42FiMcVGMENn1N5QYfJ29W2d",
  "key15": "JuUrMy4VoNFNoUkLUXegnweV8HbmPQSn3wYNZKGsiDbVdZwN6NUJyasnoUYmrZ1YTV29AiUXMEYr9TFG9PfTXiA",
  "key16": "53Bec8fC7njnDUbES7qs7MJ55aaeT2mtZhbXXJHggvrAfQVU9VkwR83R8TPWgJ2BkrVaQMsGabJsxCxCYcWGdTSe",
  "key17": "3QydM5GBA31MxHPHwRaGqQNA8gFhtCeCDGeamKf4RcBpKteDGzCFhL1uHho8u5rubD3a9pK3yECG4pMiEj1oWLX1",
  "key18": "2wXsWJjDzFMfP1CGx7RNPR7kiVmMquTEooMj4twWzpBqq6BBQd3EHqL6rvZxffNuRv44CeSiDsc1RQZzWjEuFkvr",
  "key19": "5eKUYZAVEDTDpKwKvJ9nrCUazKsXBhUSbZ6xnZqhRgokQRF98CFpAUgifWoddLprpPpb8ZYnKdGSRD2eizaepe4A",
  "key20": "3Etyev6GXMV9xNDLtJzPR8cCVW5ky5PHiHG7yaKqY3cJCnocCan2F15kWyiMMyLTJTb6PoBgJKrEW8mc1jVrhryd",
  "key21": "ka8yphSCeb7Z1g13gbZRLKFquiLAugzU4bQxZSMFYTcg2yVfxrjJqyUzx1mgHff5HBK8Lz7gJ9HLda5ktauiUUR",
  "key22": "3GFAFHjepHcgv8ubzRbH6gWscX7WTrtPhcSWXoZpdZqUQDdGANgrcw9K6RRPTsdSghEiWf3xgMWfwDw82fhimjP",
  "key23": "2ZeSXenxeMW6cf52iSBTweeSvkAhCB6GEhFm2ba5BPicSH1hzDiGFkX4tGkxA4wmGrx8betXAVB4brvdVixTgmZg",
  "key24": "nKUDwrjPEA8jNyjW1PHpagaJoHN1zQHjdF85zL6ungu7SkyKPGoMKJEtDXT9k19jPByobjZsKZLsHbFBK3tfjYm",
  "key25": "2h95oCxQkPJ5rv7Utki7cWUaW3vhsvxuFPwQKuq1okrzNH9ReZsozAj1gPNzsHHBBevxecCz9vfC3AMyKUuk5r1t",
  "key26": "p5bMSc13HA9XZi85TjGk98uydDtRWx4M3bKPMqGoQPCCZnB6p9xTEVkcg9umLvCYNYENkqYNiJzRD2QkacajReX",
  "key27": "2Xvtzb3ADLVo9xBaqtPLoKiw2GGnQPQXCDTboek4GycxigkaYZhNHxZYJbMSD2qBbKXAB5tbtmZCuuE4LbqycQdT",
  "key28": "3wg72j9yxnornyG2xv5Wo36H3qXTouqmrRvefnJAxSozJSDy5N1yo1c2Q1vDaFBrFX7DMTBvyxLYChjHUr8ipYBw",
  "key29": "3MBrZbPagqkvJ6XbmqrvE7tbWUpi8wjc76kV9Y5xwdLe2Ta1wR61KVKFjo1hejbYwn7WoBzN399Aj3fKdojKZUkr",
  "key30": "4KaTuqFQJNELVbgtjNiKoSkrDKdQ8swwzsQ4GLWXVnPpZV3EeDXQ5Tf2gurHzRqNdwsfca6Km8jP68q9JEGMijRb",
  "key31": "54zUmyYaEGCUH4SCLkxCUzeL1oGoZect9Zn1ehw5D7nnHrD8R7zzzEEbWoqFvzA6NVsijNLuwzHusVPrMWJ1RWLb",
  "key32": "2tUHrjBZJtrjdvMoaM6ncND5aBfn5DcbSBQubUgvGJEwNPBTinScWzohXDtnY9EEJ42Ze8rH88EaXMnZg3WNYmwA",
  "key33": "5GJv5piac2qvHJYgF55z97iqoHvLKVcoJK1dnzv2c85qnhYq4P2oeGDhqbApJqhjTVmzz5cTNJFUqg9EtBm2RE2u",
  "key34": "2sSgETLCHRC948z1WPJuMb39DKZ1Hr2pAXrjhVmiL7eq7jPyXb2MjqWmKviSVsjXbV6T9KYbu8daR8ggcknXx1it",
  "key35": "ETuFuAcAUc3J7jpAMTrGYrsg4FCFheZem6ymZ84BDZ967T9Krh9h3keA9V4PCN8Sr7jncw8hcmNbXShVK6vRtyW",
  "key36": "3eFqaJFmhf9hU3YUWi3Efxd6XvnMEBst2RHQBydQN7FRTWaMbrV5o5FejpkmiTQVJAGiq3C7bfiw2NUQN3YqDqDg",
  "key37": "3J2M2SR14d5aACtr2N7mybhP4UhkY4K6CYPUTEDB8PLKVUXt7nop5XXre8PUZCgaXTfWG2J6N8zzLnUxnASnRyEY",
  "key38": "59CiFnAjbTC1oZwk3uPX3cxcyVxM9jYa7HXWGEcwmjtfgu8Rq63F8MP8UAR55gjEofv7x2kvrRecXN6GZyuR8yoM",
  "key39": "2cRV22YJBcBD4Ch42fQA4iWsTXfKUSud4w44e42Uj1n5ic8rue33ijqLispXTfZ9TS5sp48mcv6bqhyyqd8uW1HV",
  "key40": "QaV4pmBrnaUbGBZtCig4Xdu3wVyHjyUa4MMydLC9TDhBvn9dHCqZ5mPaUSih3e39KdaDkqk4wYT6L78uMn7i9Er",
  "key41": "Y3oexwJAwFZfd4jPzQtPPF8fvKvqApqeXr5rEQRNkK5wbmBVLsxrV1aLPjzeTmKYeYF7URG7JRzfXYhCdx7iwpa",
  "key42": "4hiQzphxdS6R2uEDiNc4nbkXU7ky8Cmc5fr6fx3uEQSQfzZMesZ9xuffTVDRMiwZW2dy5Dov61VzJsBXGxW355U4",
  "key43": "4YRcY6ryybFMpDJMvBoNZotaWi17pdSMCU4ECzWwxTogHcaWwtpUEyyZtUGA2vV2NTWJkvazrxsHJxdddSt84Nkm",
  "key44": "4mvit3sxmD4VY8HD8yeRNubXMok6UxXJfjxjACbjQMbjPceQcBa8UXUbWNxU2Eoe4w6JJ8hb88iuCqCjFiNyRvWC",
  "key45": "33MnG4awJPUeDsZtbxfKKn9SNXzcBt7GL2ngwn5A8KQzitpnAuf1VqHzxbsGb2tAmua8VwqVUff4quLp38W4p25i"
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
