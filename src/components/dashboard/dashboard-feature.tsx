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
    "45r5pMbLaBPrHuR5q5oy8FPUuMtBXQeNrEgpx9pwp4Xi6xe3yRHgWzXt4L8xdTfokjU6VCyR77g7husg4Kt4rmbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L1SRVdqQWocDmZiPcMYuabnqqFDEdVkCDqMP7xQqNUGqyGdUU5FsK2p18FKk8DPHVUsfFzUgCEs2CWq51g6uHeU",
  "key1": "4SVBL6G1u4ZhgKAP127JPxTmPSDuZAv3kgkHNmGWxfTmmXPgMQhjmWexnccMhnm9m8mQ2os62Da7zN3cqvQiXWN",
  "key2": "4ayfrqFG5py1zjnwjGgANeBjPhhnLraKowyRJf8LgSCXRWiKKkgySEyHLZv8jJBkmVNBWrYY6Bqszk7Zq2MhpkNQ",
  "key3": "3LLdpWYrrRoENz6TXPfFNx8Uu9DekUqLKEdhBHt575QJARbHn3WsZVAb8A6uxKkewWS7Z9bhg2AFZXewAUoe6boq",
  "key4": "4LNjeTXLh7EjSaTBGJ9cuLsaL3wZersUyZ244vXH1H8J8FJHYQwQAFKcyjQnuPQhiAXeDiDtfMC3ZGwfCKVQ7qP4",
  "key5": "3hRF3gesuFTSaNBhpZfWLvRpqrRGgaBaF7TPEPx9n6XB1NtsLX1ELzxNksa5BE1QPZ1yXDyTVsRoiTq6W2dwo123",
  "key6": "3D2kFs5nRBc7ohVuXoF9YKpgEy3uEShCQ1qdJJEFaLMg3ZVHH7ufhcMqp8ciTEm2fJTbPt3qETE6eLB3VSQWvUK3",
  "key7": "Te6HUoK7iRxmksvroXFXFAfNu9HVYqksMmCdnPb3e2Y3NSVcD2uB25Zs6J94ewgaXtPchdJySB3T9Q9LXXxWjDY",
  "key8": "jgRv2DXQ1zNaFFWTB8jSwckzU7fNJVSk1TkL3pHwZLs4vsTN9UDd1rA31zdkyhZv7dfDmamFdEGWKcNiPJHTdow",
  "key9": "5YsQyZH99k2SKsY9ERfjWZxBcoymeMLBi2mkn56f6kBeue7piLPmCsCbVNPYx4Mx1F2QARmYtNLYdXUZeB1DSbA6",
  "key10": "5yLL6ZTHiwXbCfumUgAsQGRyhPseVybwkosEzSEreCDKCbajFq9xtB3y1Dy1FRTiwJTDSHgE5qNNSgK3HRmcZWHT",
  "key11": "49bx66bW76GuvrSCmLjm3G1JVWvsJgDyFBHYzMnFUY5oaJcZy47DGW5dVKmtRxhuAUsSB8R861mnh9Tc8KQeQ9w6",
  "key12": "36pnxe5LGzJhZPJ2Bk5dpJ9rHLn9q5SevqM32MFJ8JXaKTfrHbKhCE6iSqz7unQD7SJS25eFCWRYitfDrxp2i65m",
  "key13": "57cWGPiwgbC4mp64se1LAxpMmE8YjnsrwfEaufFZakGsJvGyvoPPsmJbHJRDornKpx9aF4W9xp9TgRSH5o6Ff1kg",
  "key14": "35SwobQ447sFb7wmVAvP2GkuUGLD6y2gtfwtXG1GhR66SiSFTHRDv6iNvnSC6ivz49a3RJgkrFJdKK78SfCWV5cq",
  "key15": "hhR9gX8aPuoBr8bDG7bojoExV2vXqsVJskG9RdqLjsKteSNCALJw2dWbHWx9e1TnG44rpzwKooZ61mF2q5BUzRP",
  "key16": "4VwkQyWLiwpQHNwGLrR1axKf8wMwBmCCL5mrFuYHYB6PCdwzzCmdLQReJH2agWtQ55wT2h1UBLRhkFTcXU2YLARy",
  "key17": "5VzRGLsjyW1qXapQUoEfvh2rWBQRcw18vSypjrsuxTeTtiBfGmRJAciqfbGuA2NYT6F5hqeG65E7cMXVZKMazWk5",
  "key18": "5ikRP9AcxWDDhcGikPt1RjWXxSMYpUPrfRAYzGBGxxBmgxniianGXdgKkpycpWN2Hd74LmhCvykLuvjw8CL5xwU7",
  "key19": "4QY5TdaGaTagu9yPmraR4QWWJ539TpSGc4xmk2b9UDj1CuZEGqZLMqsoGYrx4E6GXT4zDJwgNcSY4sB3A7rsGHHk",
  "key20": "5BfNdUHPxRB53EpSZLZ9YxV9NDpwKXZnvHmsirvcgfA9BhkC9UCkZKVH9nVynscQaesw5f8huGBtHzdXP1ePc4Tq",
  "key21": "5Sf7dfjxVWzNBVfQLQAKFvKFf9YtnNL37fH3cwfJ7TAWjzaMhgyifdtzSCM13Dt3drt1jjyhEAQunHhADB363NEs",
  "key22": "PphYgiWTS68RBTmxqh8iLzCzW4jpZcoStm2jM69jGWRhtKGGs5w3cfW7q8kvtZWYppCMwSvDoGfQu3LmK2a8VNU",
  "key23": "3ZZkAXXeC5kc6m7aZq8ibNzGVrKr4iKjSSwGYtmAdf4CnuG4siqmm17ZBYsUUauMLXn3r9hBRpnfseLrnoMvRnM7",
  "key24": "2yvtPYgxgugENZKyGic8RSp4Uz9WQCd6bwfQY5SJaAK1dr7QkVSVrgJtVcEC8Z6WobH1ghqpDyNjf7a4Zr5uxLhs",
  "key25": "2v2gg9QNo7FAj9cahEWYKM8z5Tvjrsfi77fMjfavDzzCFxJr4x1BG699kAWEQKrY9B2GQBFue8TqiHUJeWzRRMcb",
  "key26": "5SAxqGjwCfMY7cvKbsfG6gsEW3ZhS9KbFA9NNC8Emayy8zobsiXqdaarHuXhvaUuRDGUoTkVgthwsM34rDmsdBnx",
  "key27": "4LuFcXiLxQ6iXW1uc3DoA6EJgfWkdgfMFniY6GyLB727uVx8qeK1K7SsogVoyP1xkxoxpMQyVBWUi7MAPKPpNhRv",
  "key28": "36N5qinsCbsFHECXipdBmMFMoh2PijyBTzJH33hDNZZxeN46NKxCGLarDfdtEmNZTVyFgHRyznPiXpcanBH31hXX",
  "key29": "3McHTXrosUsbDCCiUT4ktgmkkeuiqaiHuGAiUHX3tnoUBJ3hWSxSVBuHyvqH23XFm86m4ZgpRDP7eTdnZZAm13RW",
  "key30": "62iMBRNLZ1YSvxsBeUEY1KptrdKsoMDi8CoV8X5Pe1oSupJjqLdqrVW5qXGaduvbuqJzQWzx8rfjHqz4pB6ZLn9F",
  "key31": "gtyEgPFKzGMXY9uHsVinS9cL2hofM7Tfw9iCNrLBHQuFcV7JiLF4L31rmvvcZTDkUVv8sM9oainZnwhZC7eTue1",
  "key32": "QekbMu3tCUG1ThDYgwTzuzWEoLePqXkD5RaiPKjtiL8WgzasrxZH6gspu69iDCSyr971dFwD3jM2uuZPsVwMk1x",
  "key33": "3SyTfSD97xzWKyuzKvfheTQLD7X7dTiEPRN98NcNMZTVeuf4d9Q2wuVEztHLJn7gUqertRiAt5AJvcXKeEFRufto",
  "key34": "4CvmyUcRhmaNyfbekJLCrezaun3f4Ek7DcPjPwTPrdyxXSvyJvSN3QHQXaYbyV3rhd3vBnjkerXvo2VNqmkC3qck",
  "key35": "5jJZA4CmaXwuqFFd5crb37JanYfBQ28qycBzzRa68mFTXupJkR6zNZQrGkjgRFTrSmG5E917DfcHTrmas6m3STg3",
  "key36": "C1RYHNeZx1eBuRM6n9ypEASGyjZ2CqPG7WZ4V9aYMZDSL2A1Q8r3My4797oNYmYGUJivndmDp9x6AUz1KgQAuyn",
  "key37": "5dH8YsD8KUWKCZBdZQqYzmVPXGPDL4auvU6NodVAKzvttWWiiRTH1PwUPiL9BM27ob1zuBr8WDHzmAbxZrc6KzfD",
  "key38": "3b8PFsuQ8shnbmRfhavTr7GcNxpX1WXgxNsNf3K5BWFC5xg9i1fVzjR6oMApskWvWMgXXXAgWo825qVSd9oC53zq",
  "key39": "fVGCS1JBpUf4M7NMXMz2tx7dZVe655n5YkDmYrMZdbqoh8MuUNig4qJJp8rWZf7WVga8JAMV6sgqmrW35QxAQJx",
  "key40": "2L9tua1zCCbXkpnRfJnLASbntAzGo29JcwAaZtHynjJ9YZgH48ZzMi4Z8CGNJnLWyo9rQ1gkrV43thJJFLUZHJxP",
  "key41": "5EW9UTeCWhbdS1uYsXXd4wWA2xRUcuo8TfezdFiSPTpUvr9ATJ79fuoK2yFrVGthqPaRz8nhrNqUw3BgKMqS3Ntp",
  "key42": "5N2gD5WEVLDTvokHJiLeQdUFgZU8Jn8egiy6sXnsmHUpVjrp5Moi8oSdUdbKJjiRo3NQxENfEiiEvoqzey1h4bRg",
  "key43": "2cBTfv57NMPgdqrjSeK6zJCpPEi3eJ7r1GauvXSvQ9sGiC4gpvEcUJR3Ln3GjjDUhkztnQFuA2emDFPCbmbFdnvA",
  "key44": "5ypQdW7SDTCZvQDFWZ3UscaqjPXQuspbZpBt3JpAkUXfNjGmuqEhHo5awUdWjoPBLsTjZzZ93nWBS2wMFCfmHfzR",
  "key45": "w9yE1EU35ngzphMuMxiSsxHGem6Vet91W6VUyCbBKtctCpAeHkhgYWijTRvnrZ3zxrSpUKehQwBB2aR1bhxvTa4",
  "key46": "2YsuaD3KgxAJWCW5N1wrAZzAEBPQDWvPckcjwZKgXgZ3BhSuNpDAxDj5oAedRDLLz9FQR4EsVoTNDKxSpAb5zk4w",
  "key47": "2mB8An1udvBMfuHpPygujyL1ayh5BuJkFW71TbkHRSJRuPW7Wrqx5ogWmY1E9ceobceEBAnSD9kaNDcg8EpBwp5r",
  "key48": "52ewSefSGNHuzjk9Z3xod6b1kQUCnmh8ku3PuvbdBrbAyYxnaZBhNKhQ6n7WmJydqwFFquVULCFeRf69gpVmyrCf",
  "key49": "2RiAH3ZP91GzX5wvj1Z8CLTrQzFv4h67WbghTqxMfXbJvmomaRWoBZWmNoJTbdonfr85LUVN3yWf6HAwaX1AUaJZ"
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
