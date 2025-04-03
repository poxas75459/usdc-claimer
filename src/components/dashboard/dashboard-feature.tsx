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
    "4veN9a59QEgmxq2BZeAMfg9r3i9pyBXKVgYhJx4JjCvqmG3yf8VMLxg8weunTbm8eYj91AnQPnmQn4EnHUYu2SNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "518CYqQ7nFkpxeEiYZYKjqqWKypQBPmznMFoMtbnqTcXcQamuKyk9pM4novcNfvvKi8p3JBVqJdUaRGtPH2p1mJ7",
  "key1": "2UY9AxVPxTkaaxBVE92SxBBiqv5NcHvLkz4BPJSmYukE1jkkmCvZiFev7VBEYYV5ngQRiYnWUdUEw5tbt67FEPPM",
  "key2": "5ssAY98LmX5AhSamiEkb4udxCYz39R7WGys2d7mWD5VBHc9BizVUBSATYq48H3tPmaYkU5AZ36EwUocscR87FGEP",
  "key3": "354hYDUyUC7oY2C9FUL7pY8sPfYTkYaNJvwztXwHHaGkV6AthMg4BM4ee2BsE27gB4AebFL8SRf7FYdsKdh99jbT",
  "key4": "4jhGdttuvRe4qUj2MJSZQp2Db8j3YAVGwQLumh4qkuCVcw4qMcU1YQw88c7zFbv3cvVseLVuP5RNXTeaPyjEsLTP",
  "key5": "5U8BHD3yeV9g4eE52LAPi8mgNCCSg7N9AfwWJqMsX168kZEQkyiAEhPVL2v3hSAuyPiNmBjHEN82Gw1qyKroPsVg",
  "key6": "5zxqVgtrycyngJJtLi9pvxWAr6YC6c1fMYKXum21apKcNU2qum8d3pyNHqxBbJYMS6XPV8XTm6XvJfkGKd7dHyYu",
  "key7": "54yWAP2XU81NyqWmzPsHMnCZ5iNtZMaWXdkvaFHWCAh7MJ62y4LHypGR2Fc3cp1q4wbnH5aHuANv8BkNsw2WLqL5",
  "key8": "5QcKUwdPkjheyQ6TWYfk9VBjN53Ua7Su2JsZ2BHebfEkUtMC2oRgtXsxF8xuNnyYSyHKBjzA7PprThJt8mogNxfP",
  "key9": "59Y6c7xytjv1PA3PBU2iqmbFMhgZ1Jk7ziJ1QHPp9rSCqi6iax7kTMXd1iGN74Hmebc3rhhFg3pwyjx3SzGAPsJW",
  "key10": "4bwXZ494oKmi16WZ2q27Ld7iTL1Ac56DZNXLvMqEbv5ks6eoYtFFmKrmz6gfiHWrj8WA1oaqePZstKvpjdaV9wdW",
  "key11": "5x1SLVc2w9Jk5BW5Me3iHrfCKBH8qdJTXB2ebL6BezqoB6QSjMoj1h946JxFcUuyBtP3dFKJgmvAo3CSwQcrtfzE",
  "key12": "1zYBDwNC81yTMtMJgVqm6bqhoyTF2S7z4sBVgcuKjeLzsHNN8DwHTvVbr9bPbNj5LkcTxZAGr22cAVhdVNxUX2V",
  "key13": "4viGDHoiCArgGggkqEYRajqXMeki9S3yukaSg7zfMju7ciXjnTwEsCStMfHLNQboAeGPcKWSvj1PhaDttAWWAWpr",
  "key14": "2ZApLpC3gunMM6T1WVvEMgm3wvvnM9zYesgn94tuC49j2zdjdh5XQGnw8nKdZ9vwc7cTjXGWyKEhx4ohUFgqj2fa",
  "key15": "PJ5Xexan4SRC7JzZEGasvPrChTpHe9rfPZYr7ADQefGgq3kSc6k5p7xCiMa3C9eggBSLqsGQDXVnYiZNhdju7UZ",
  "key16": "2FJxQGfgkvhh1aTPmuKqs7kausrwiXqrbCVNdD61gDbN9QpNGhJXmX1rdo1vBiEswmbw2zKy8JEDW9HoAkjcYUeb",
  "key17": "J2PFtPodE2gALME5hm8Hizffwa2HqwXam3FTStzQ7odX4j7K4gzLy8oZsWNRvL8BGvW74db61jqMRWMrEoznsBw",
  "key18": "h4JhFd51eGfr3fNbmgCf86vGnMidkUDvbi48RKuKzJCoDwMkGahkTQg3YtjcHXEbRTGEMsgDHZsiGKcDN4fnkWk",
  "key19": "4bGsosjhR8nRRVSDjFi6sAWiAtBXV4ysLn7VNT3cCjegZkSAD2vrGNE6jUN8cJP5sWVGbtTWo7KZnXG3fJebPhmH",
  "key20": "qXWcVziaBNib9TEKS8gr46HnsBBMLZRFJjYK3FRa1jCkCRsw7svpf5tcEUgc1iKsrJp4vvvFp1EsxahbnnTV78M",
  "key21": "5qpNcfsQ4Uf5vxx1F2VMT6amh4UnJ628LWDtFnjH5TKpQ7Aq8zxiZbHUgFh2yzi2G59HuRBsSiwpTXmzTjLqKTxu",
  "key22": "5fqUpTtWHQRAbPH9tKZLtRrZ2qrnrSjcQdrsvLQ3ago22R1fxkAWTm9Ucj1517eMvn8Znyre89xkrTaW9epRjRDW",
  "key23": "3DWhdxxeWpnPhZFJoU2LqHcs7wNiVdWWsNZKzEAwrPz8Rxwq2W1BUftZ2ZXQYCMLNuJR3DqabKVZUqeBA2faREqW",
  "key24": "66weoxtYwWgLmoAP2CmNiN1jg26D7Biz3HSoihJihVbijwP7j7V6wmFqHDFWqHQmF4uPm4fq6hMLmNKX8vk6AmzY",
  "key25": "RAAno4CAeXzqxaKZmALJmGuGZzEm6nKu6MEd9JoNHPWPVGGcW9mVkASnaN3sAb2kAgELYCYoiswShUv66fVuj23",
  "key26": "4NwbqkKHBgvtcDpaVLSF4eBJuSfgyeKAZ1NJZD1Dod8YPvb3ZF4D4mgUhYQgpBd1qMz5SMpgYph9haBWH6MwveTX",
  "key27": "5BVShVocxiVxrN6kas7o1neyWqnj5vmsNFigtUXp8eBKoCR684HJwWSiZam4EkX924vmnysJHZHZXrptxK7VHcxz",
  "key28": "2BTdFEBx441tsi1NsRFG9ys7zX83fHHeSV7QwPxgTCGo9wqk9bzeF8Y622DYMxsbEY3ZUFppJYPe87sG2pRc7Bef",
  "key29": "g18m5Cg919YuD2ytXKcy9hEYjm2RhFK4F14TaQZoNddeBGdpWLptj4L5NnMue1cvgGEMgBJdP4waWtu1dz968Tm",
  "key30": "F2MEVCZ93zecs7kVXDscJqKBXSit4NecZERwSBpuR9ktZYkjQzHFP5xSdEY71ht6ktBxL3tNmyLt8nS4yL7Cein",
  "key31": "2hqtTBvV7oYbPcZ9NR9c6aRRdQkgfX5a3nZ74AKXUnk3U6QnxaakPf5Z9xP2XfMadx2wezdRenfimXyAeAhb4QYQ",
  "key32": "3eBBZ6ZcDqo7uEPXuDJWbmZwGSHr1TkjB3YcnFkcecrGzVZES4ptPnFQptp5R6otHLQu8oyt81TfroZUzE4GxL4N",
  "key33": "4a4KzXWHCaq4YPpVu48hpTXUJuxhUpUExrt184tnfZKNxGwWM2DaZejZ7ZQC8UNuaCbKmuRz6HqPiwgP3NE7kLHM",
  "key34": "3N33ogEQDsrvXgMtvYYUEjeHKwUWK93AbAxsvQXYH6YpkQpG1jBsWPWLLCvkpNB3m2JTemfasn4WzpCeyu6HYo3n",
  "key35": "aL3vwCWncxZ3Cjgg1R8t3EFwwEEYyVbCBeB8DK1c59QtjiTJvchSsAstkdEb7uDnwotS8aB1517nFeCkwGG3daG",
  "key36": "3Sohhgtao9YC5MrnZqFRTGaEdjziNoDYPQSR8RFR7o7id8ePP3rSw7Xu4fGPQj2w9K3sFxy1jf3ECbofJEW2TpU4",
  "key37": "6BVN8yuoihPX2g6qucrH5gJCxwKeMNULrbCxNRgQKAxU3VmqSPJj5Gcxw9gmZDbHyfgwwDSRA9TzrrAHzgu3E2C",
  "key38": "3WrxodZc9fQ3dr2dkaU492j33rBnDW5DSyXLPTw9v8JfeiahPgnhZCFkY9u12rL4qJfJWfRtcGooRHLwmMPQ3FRG",
  "key39": "26muv9vv2wq6vvmbAcugoiRHcPevDfttGGefH3gpogCWLnhrza2Ygcn1YQjAjE2XPaR7nJAxFrBUnFZK18BEiKep",
  "key40": "5zDXQhuy8bFaW2F7qy5Wjef7jnV4tNqRxrVEo1BXE81bacPScW3BQfG8b8F9g93Pk69k3vQFN2qUeRRq5aUc1oX8",
  "key41": "5oEJJHhGqcGwx1XKFgQ6DdMbVxV3cHVGA6pJi1J81Ke3dyp4vF2StSpjgad1mVWWkax4giQN3GiQ9MhjnosY6fvR",
  "key42": "4omCLsNPQMpUrYtHJgWf3SwaxG9BYt6za8p1ME25BVQEss6ixYMcgxUfwA5DThUjYt1e8H6L13sgNdhSgeDMKsrf",
  "key43": "4viuT7ACzZ3yasmWMFHuz9i2zAnj1TtwgpHq7pkMkY8cPPi4SXjKYBNgr7CHZpKC5kawH1AL61iEpxJBVTtbbycs",
  "key44": "nyUxgBGGeJfGvZD9qQYUAWW3n6zTs42ztvPNRtUVsMMJ6i25CCB2s7mSHpUvqRAjBGHyKDuy164CwADAEva5An1",
  "key45": "5TD6CFWySubjYWReDtNuWPoJmpui5npC5KX2fZTA68zZUae5nVsfEHK7WmnUGoA9PBi3RNfhUJK9pygqkqZjtEx6",
  "key46": "4XhkwhUiCr3uhJz57uV6bjTVCpsSdgU1cQBRi9AvqvPnPtLGEsBEouR3B5j1sac7bztnTgwFc7d5f6uCHjhf1iru",
  "key47": "5tbDXZkDnTYPe7SbtSsNrpSvnLjjQLDiZRtqcs6PrvYmhLeTap1BAeR3WTtmPYB1hfxmp9ifTqBvErh46hJ6srs3",
  "key48": "4cRjoWzqjEQfVqBm5swRLr6PXa2VbijsFQGSwQcVY5a95BMa6n29Fozrkw47HkjmmFPcbaJQKdSonX34kE4KzvsD"
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
