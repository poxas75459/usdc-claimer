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
    "3tVUQF6XovJHwsGtPWG79ZGo2REEoEzk4v4yx21GHF4wwcuMQRFaVh1MGfBTKT2Lbdqn529JMStbQULDB5riEAxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cS1kGCicUc9xjKQ4NMeKQtXWSWW77GZeCrL8eLSNnaD8saXuURxh4bAfZt7DaJdML8oxHfVjZ8eDQQA58hiMp1G",
  "key1": "5qWetSCzAUL7yw76zPaiYEthizuCp9WxyaGk1HQCWjXbPdG2UC4bCo5HnbcsJG12kVSBv9nF5ki2wXY22Y4ZLDEd",
  "key2": "h7s23WJASNz3cuVwJdceSnLqebejhSiGZzC7RsLdBbNjU3CSUE1UQY7VA9CkYYLhM1wTkpmBrYGhhFMD8jMjNaE",
  "key3": "3cUEV4Nag98gL3bB5ctqZ7sx2isiXaUieqYH1jr4ZKiXqcJLWPn8BL9ekAwnuGXmpdNq79Ab2PiUfNCCmWL82kav",
  "key4": "2oCsVoGQ79Syx4xZuQ4u1eXgc98eTSiCJiy6L8Q7tqz2cK27x8VbZ27uwC9bxdpdanrE6yMRe4282e2KwdRcgVwq",
  "key5": "5aFM3aWnAuChRpf39AahaLRN3Gm7y6nXDQA4ekX6gPM4XJGYvZodBPH1yRcY9PaFeJXfFgME8S4BN1WZrRtVVb8Q",
  "key6": "542BhaukBPFh5KoRnqtytbsUKkfSd2XzdbHp6BGoomfX2puoTxAjwkw4prrGPx8GMjLzSPbj1BkNRcw9LeLJiGGD",
  "key7": "3jCR7MGbjrF2g2XWyx8JqUHYDMq3TCutpTPQ3CxMa4EiwE4g69mrNDKdYqeTQZvoYg1iruo2YBq7ygr8yBQTVX6h",
  "key8": "pfvBJoM2auErR6Lg3dw9vZeVdagZoKTA4ArLzxHCr6EfQrQnLsXgPBNWdwQGtNS4B9DLxejXUwHDRwdXgpfNS6w",
  "key9": "2UqP4KALn9KPTobfFFUUpb7FqoC9mdfwd5FVaaVh6uRSfF8GTJ4ecqBrog6Au2xyS749Y7NV3B6a9wawXSwG5QRU",
  "key10": "5CUNbAvEAdqwohxZ3aZ1VJJvV5qk3AFLLULpQfaFZTVuMNidSKeyBxGWfg25ST9GSM3mGXHprowp1h5a4VayoNz6",
  "key11": "3zawDnNLVPfTwC8rvPDjuWPCM1DWLf1DXmoQ6PLMGCexdRRVntRcfLncS7a3F3QyybRTsxr3bwGqbQfkkCnc7nC6",
  "key12": "4rMNiFhfmzd4t4fqh5TJh5DHbHukB2ACVYCwfYHQiRTX2ab95uQgCJuq6zw2GXFXetaZSLSuBMhzYfbwPFK7KFwk",
  "key13": "5R13iGVUMSCTYBiNqQt7rHA3jfwViCFnCwkNqEZ53pojqSeyfuDNd2ZEsnZZwo7MpNetQhYLDG8KV3GoDD9BgesS",
  "key14": "GumEmJRH3F66DPyZMM2wbJKfJacDFaMFmWUwknEmGAm1rEAGDfsF8Z48jGjjPGXJRemkCmUXLZSVjfyy8tFB76A",
  "key15": "2yWtCXUyqdmP4pqk3KQe3Ru3XdUid9CREUW4TYBgC3QKPXjYK4ijVPV9rxai68Rk96ac6HunYfwVfkGrc68hL64a",
  "key16": "4JUZZ4kox1wY1vR76TBjcdMn7EzBKgLFBNeLsUyojaQd6C5Z6XxBGCPgSUCBgW88jyeHt6P4pDrJbueUvyrZ8ejL",
  "key17": "4PYudqSBHPc5tC7CaEaSLZftisSbFhbkHU24ssaBh1A3uLydxwZdsxXaNKrYNwBuNMtATPQAiQS6kFvzUPrxWbti",
  "key18": "2d2i36y6zo4ze8oGXtpz9q4G6gHuNbepg9dMMQa4NGGRXiHdQ26CVp43UaYpYw6Yggb2NdJYFTYqdtMDX9eMABh5",
  "key19": "5SvLtBk6cufAXuFdcsCRmRThBmzumZZAzPhhjqE4VEAq8cv9UJtfPxWsyRTctsdXaq1X1hHYLHgvBq87YkBQuxd3",
  "key20": "HxDREhwaoYT3Zr8gL6QtvDo4egfPRPMXEHsqqmPWjetSgBk7XUvYkj4GXdLbqzbAU6sRP8tCAVRDmTnFJHcmmz5",
  "key21": "5obRVQ5qdPSnj7L7x5eKNs6gAky2GDE3mx7B7jP38vVg7T177Yif6GzJWztasS3B7mpC5QRtwTSzhFHepAX1bkjr",
  "key22": "5wXBmdEXxLhgbDdovvESjRa4LSLZouSYYwpn57HSporc23vLYXYhAESjhrm3uGgwKJffKKUA4ogknKwKmmK1P5tS",
  "key23": "4hkmgMUG7KrXmaraSHqNiwrTMMfYByqoLwARjSVM5B9ccDyrVpNkdA8Lizizk6DCh9tCJRT6gCbckUnLWTF2WkfW",
  "key24": "55wERvFk1d8kwhc8DXEroR1rXwzR8JXzUMpPQLCxowghsfRmhLctSQvUmavzBt9jcUARDMwhHEH4t5JQV6cgACAx",
  "key25": "4DagN5SMC8YeMghwydawdizEDXq4FSf2ez2h6SDzYfa8ckk2K7GtydahRaUuXdFtDDngsbqm2nzuLY5BctVu3QU7",
  "key26": "3KNvfY8JkqKSGFmUM8PKbUgSj4YFfHvrjrqNrNXsF3sGihMvEaJw6GSRoBxd6qQUeu4xErLwGyizx1Fs2yY5Gi2k",
  "key27": "2sVAmWqcf5zqyFqSdLRNAYXrtZNt9GtTh7QhYUc64i94Rgi1WEPS8ttXChGZM5HufjdiXRpTWy91uAkSQqaEYrgn",
  "key28": "2VAkgqESe8NvWzBjjMAJPnUTsE1qj43yJiQcN4B6mhYsQrdT11jsQ3k9F8DC7ooVJaM4dqTSfnvkRVEtNLdaW5Jt",
  "key29": "HndJuuokd6vDZjDAZDbDw3GT6ZR18MyvWzLxe5e7xymEUTZhJbqki5jztvUVE7F2hnbpX4vs8dCFUY62EPPBXMk",
  "key30": "4mY9WAKCwQwxg7SutwR4fBoddRFZdMLGb9fCbD7CfgTDihRwk5Yvn6hS6quxPBSn4ZvV5mLUdtz9N57H7bLMKk6M",
  "key31": "4Nc182Yjt8HJeLkRyHnfub2At4QXZtAHzD6DgEgeFf8kuriHDNsAtgWXDu9bBiEbviEM1jrY2En6Ujf9MW3jm6Dp",
  "key32": "4Zpyhu39JGTcbNrMr2apnraPEVjK41Rakax7DvHpep1FnWaeCKvL64aAZYTnRkF2N3hAum6hRFFWmnZ7V4nRvRVL",
  "key33": "3p8SWsM5Y1VnbTka28LJ83CxpF2zk11yD599DMq6tfv9ZKYzNqbVyAJgn7p6LUBW4xhLfeXWsvHYW4i4zzw67dLm",
  "key34": "59wJcGMyDuE6sQC3HgXuqera8sKe9uSnWpSwXvME2Tvf5YzmBQBKQSvTPAko7sVUDGe68U3TLBX3mQNxiJit5jhe",
  "key35": "5dSjDokKa5mw9VJBc6N8feTDQeRkLp2y7sekWkqLZQJbypdmbUC3QTgLoM1oANwHgqumeMS5VksHCseVUjd2xNbx",
  "key36": "5V1uMirBjZbv2J5gnCztF8C6JhqBGv5Hk88VSZBbbZHArGWdax5P4L3h4RVAboWZaMm7PYHtA9LDZvoKWY48nd4u",
  "key37": "2wg1dQU5iCYSdqQALjBfNu6r6L63wNsGnZQe4bvP5gF7X4U6Gmhdn8yhTgwBLauPVxQEMEymU26WmgEhqFptu4ox",
  "key38": "HG7bgCd4hS6EgkLZegRAWZTNDBHVa9hXnQDBBpa529gCejdyLod8zDAPtFUkmEwBRAjZhivww9QtnLejz9ASPMH",
  "key39": "Qyn9g8hmx4RcyCo3pBuntKhUnArw4KoGZHubH6mT1rDbAeE5sAPg8Ctzk4M7iVJaCnKpUPsmS5Cqckii7aWHKET",
  "key40": "2ZzAnYYcUHXUMfHJ7qT6pFvEmbxG5EtWbho7nCASJmVfpyYCoXa5RwPuur1TxhCXd8cBQGKWdKphEqD7EJuT7fb6"
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
