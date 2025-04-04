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
    "5W8ZWiCeBjZbBsXK82izMkL1wo4e877s8ET4eVPAVE9e7Z7Mz5KURopx1aHvtz98vxiGD1GVCdG11jPuNRMd9HKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iHuujTrdS3rz2g1nto4BHyY1cwvjBRnY1vjF7HmDgU9oNKpNFDFiRQXcJuxjGttf55PJcaAvvYBxsMJmP7AGgBY",
  "key1": "KAw4pBPSYzCAmdSQUrpMy4BcBwWem2SMbDA4Bi5NFvNHwhjtzD123p7pm8KbEG3egWEoVs7EbEXz75o8C84qSYt",
  "key2": "58ph5saCCp7apeo1vhXid7aR7KABRD8jn9LsiK2ZpXX6FHHB3tCF3zUVbSYw8o5ym5Gy2c4QaLSGKZnJV2shkhmg",
  "key3": "5gMoHuMRsZkSPTocs9fbe4JUbxH8GuAqZBJfHxyom1KD1qFhsshgUnET524n2gbknvA2MPXSFAxWU2rrLnfiLiqh",
  "key4": "pW4cLau7R25tHBzepQaLgHpzfsXbbLs2ajnnyTFWNE1euy4yFs4aK8G3xJssNNTfb4HtFx7PiMYrasC2bMmg977",
  "key5": "58gtdKQH9G8aGHsZDSHDjg5ViJRN4gpFoZb5wfSSxQ2UQNtJEE1c1rukh1tQwgaTUufcGA1oMhNqCfc9ufKdcsBk",
  "key6": "KgG7NSBVkbv8DQ333QkGtUoQKdBErT8XzyU4mDwa3jSXWm2R4QxBcHG3akYXfJ2kaqVMcbsYEFEN2bMzPJDbKko",
  "key7": "5qm3X77eQrUioVxxzVMmyr7jG66TvcVNTCoJLjumcj6zB8ZTZPDfd951gZiWHFrH8oVLATv7UGiHjzDxz1nyqUGX",
  "key8": "5kBh94H9J8g4cxUFsk621seSSzjqsUeUTMvj2eMveHVyDRpvhVTvHSkVbBCY7xbSeMfpCDgKpkbS9QmyNYVCRfQG",
  "key9": "Yn1DmWt467v8QBXzeCxWYbBPVzEck9hNo6VddappZ6HYJAy5DF9nqfYJYxWzFypDBd6DFQgzTdTBfjgN2P9nssq",
  "key10": "Kj8pWJ6vKEwELh37xpYwSYUTDnXySaen9vv9zyJj3kwbQ3ZRhhxUpx29ztRq1kSAsJSYCaNiwF4diArFH1fq6dd",
  "key11": "3nL2HpobXWJhbqyQJCX2zVRvJJ3kYiX3vCxfqm3e3LhEK6UQboeFXsqt3r2tcLRFjrxSECVh8CLwEyzrznM9SUpU",
  "key12": "2Uj8wZeUstJ3kycxYQJSauq4AhQ8vVkXyBSojYY9M9dqYtBbwzaLdZMvdfZG6pNgv9gDgb78NpNgKdiDwPZvt2uh",
  "key13": "5Q6HuJ4P2D9wSSVkYavoERZKTsJaJ4fKXtEoSquSnGn5jBBGikymZM4x6BdbkDnXXXcRaDWQroWWSDYzUyyuZ29X",
  "key14": "3mtzDzJ74NBuhgccsLKwR9o7AmNhUzbtoXxRqTitk5MDrQAQrUcvQFsK9bYL9T9WyWiFkhXnoBjMVeP5NfPA5uvi",
  "key15": "5NTwaCtcMYnQmPMecqUyqcowMUeSLCm8g7YEpskJLTVxMcfdUFymAWkVhsFz4eGz2vJk7S4WJLR3BNLqM2PuJTrB",
  "key16": "5Ncbg8hhSBgieacMayhzwDubRSUMzyzzs432EmG2BaeH18U5WtUL4Jw6Aaguz7u9karC4Sktj52L77uAFfNntovo",
  "key17": "33ZQ6HbVdSEXacQrLighJxZtTWJyedxyRkg6VvVDL87rsYLAYQHbZj9j9gWvD2qEKMxLSeuRrmyNtAxaUMma2RA4",
  "key18": "25oZTbn2WTgYXvMu6xHoEkQW31XkCAJrH9VYp4LcBDXfc7t8oX69T9TevpDseV2LLwqyi72CNBvhvpZ2tYzCSe8M",
  "key19": "5hiry2Saxjq7wX3C1s9a677nEU7ZTbqe45RdpgrnjyN3e8371wyU7tApzg9sAv5e9X8Anu66AoSjvb1yF54qJjE",
  "key20": "5rCdxqZSNMaNKh7MPdT1rEaR25DUGkR8V1XmH3VeQw6qNRBAGq6KLZVnWXA5TD99tGwxftJ2pNT23ojp16eT5BQT",
  "key21": "3LG6yW5tNrcWddLES8SaTYMBXSS96v6mWETPSpBfpLBqfxwFp52JKMnMgRwT1qmpwndxbHkmx6SRUkwL47dgWQ6s",
  "key22": "5W2ttw8i1gE68a5RZ9pzyxdVSFzknmYtBxMjH2yNoqMhbPAs183tqoYKUUnaFw8BBbh2um9VxWNwDTvvwckzyaxt",
  "key23": "5jwDLFMruEZs9cKy2SZCktAtseYv98jzhfJZwJbhjZVY6D4TcZTbKPc2uB33Ac7S9pXUagZg7cEGaS8Au2BCJgUe",
  "key24": "2v87jviYjVcvUfyWKoNn5tdFi1xSaRuG7Sh6UJCAG6BZa5QEJpbBcag4ZuFBekfRG2xwFC7KKuybFRvKPS2ajjDq",
  "key25": "3xXKySb7pGuoWuSj4C3pnNYz84hoaNqjsshyid3YGp8GRxkycUotds6pz7A8KvLhhfiYDu9CbfBwhxN1vYWdQHLH",
  "key26": "5Y3rucQ9q2fhWSL2WPChHjH4gFJU6SgRNZGfbxLRfs5p1cKGCQxLUTXvce23L67DAsqQdzSDWC8hhNCvuKRHwQXx",
  "key27": "4FmQWK3MEUzjLqTrYGhiaoBHqDJd1FTRriDehHdufAa3R7uaqMJREDNGeLLuDQttXv9t2zRbgHRoXA3MAUZQhAQf",
  "key28": "5hhSnVs2BeSYvTMbXSD7ThBLRtLXLKaYb9gPVbEqQmdbkhe6LvYjyAYYB2nPxc4q6LZgh5VTRpaD1scWfrmqM9R4",
  "key29": "anYMomYapyKd8Vr62D5qWTvqHewpzfUc5dwcUKFd7fBq73PsecWyaCKnujEpgyPMVcBR2HHk5ZKrXHUFPQoxm55",
  "key30": "Y9LQce5BnMDfr6occx8TjtKPfievANXxjvzipLChVQW8XuBgpB3amKRhx6dTjuS2ieSn16c4NMAVgcw3QDPFJyf",
  "key31": "2NMc6Lmo47WwYRoqSq39z5wBpMKjtvmsKfWZq5wQ4fgsJXvXjWZVpCfCWqp5VJMTsVqFCiYqtKde1CTWbmEW2e8b",
  "key32": "55QydGsEd6dkDKp5RLFCXv5qW6rrrw8gc9XTDnoDFBkBseWAXcBERKRcnEXf3eN2UvsjaTtooozLFGLzH6wfuUDA",
  "key33": "5mMBQA17QjYWYNiKfzjmV26ESQgez6dkHdFEy1CXeehDQ5RFumfJZ1aMpExi4Hk9HbkMqY34sUbrB9p9SDKXmtmL",
  "key34": "2ZkgVCGtuPTnXa3zUMW4s3C8Mf724n8L3aqGDXEaYcY31EtLx8WtMR64oXZv2ncBKGMTSGws1RXD81qvNS1iZBFZ",
  "key35": "29MWn5zK98upX2nbPTujwueEYsaophb4666QecgX9LYLeAAoGF2zmr9w4qqkusetCuPegfFo2gUbx7ZxchEUrddM",
  "key36": "ewJQCoVFAss82ZMwL2A9Y17KrARPBjCcRnRpEjT9XSem8w1QoA7APRYEwPfUYmKeAYRbAH5bHfmikSdWBUPsb2q",
  "key37": "M22QQemuKTQbcSw1P37pZNixJDemxbXK3toxbzZPEWZ6McaKtFtZ9JgttUf3M5wPMpx6mpbvbNQ8AEngGGBmJCq",
  "key38": "3cZwDZJducS9u9DzNzL7CHmFEp43QmHy8n3k2wRQ1hbAjXTG5H4JEWpvAUEr8p6U93Ej6HsyGdwK2tZcPrFT5B3t",
  "key39": "2SviroNjCXD2YJFQyggteoL5rmnmm9RX1CzZLWweTZygb1WLeG9vmcCs39svuBVaAUUGih64WfVrdJdo7ni1qoLy",
  "key40": "2jt4EWrJPyCfJx4yT6M5MkXtmbqGDKVeMdAA4zeQSveKTyq4mexTye7Ay2FZQEvSJEautwztTnaSVSqfetDsguev",
  "key41": "4brgofdkzeABcBuSiBrgzfSYJUsAf83p4LAUBJcELE9go12ix9Jpcp3D8LfjjfnyQ9VTzv4t6aStSfqipCfXmaeF"
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
