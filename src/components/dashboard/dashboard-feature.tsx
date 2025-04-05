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
    "4gGeNZY24wveE28ps5pN78D1QBNp8sLfgX7iHkEDwHnXDnaLxnDAJhkmc3q13h9VTBk3NvhsdVxdkPDBxc8j9TR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yBNuGcZyN3t9AhAxmc9XywHERci6VDuHrDG6kc4rzHds93Cj3LBkQ352ZALQiP82UYTgiC1D1PPHZxC5Cm28oyg",
  "key1": "5Cs7EEUUxYF82eS1MKRo7TzhcyFndBiKJcPZ3LA91AddJj2vZhsskAW2RdNtq73pRwyQpC32Mk7wUU7CMsUfjpSv",
  "key2": "S48NasdYM2dTjjRGJsvkjAtQfR5x7TEGHvqtq8Y44yFyX67Bemk6py1tCqFfP4MpQ8CdB3VfwCgNog3L2LKYVzH",
  "key3": "2PYjU19kJ1LNwBfETo4HpYihtiHr1m9J9ZnzMJbKNZ8NZM6B3TUikAqdTrbxKDd2PbcsSWcbkqFenawc5T8rwMHY",
  "key4": "GKkGJznZyrTBZBLZJ4rpW5KccLriLcSvZhWtkS6XgTc4KmFdENFLHim9jo1oi8SQXyqyGWrVcttQUdayVSR4j8S",
  "key5": "9Th4C7vr35m5Dgr4ek1Awgms6krPSbNN2RenTtpbwiGrtpvPH6SGG8gSyrWNs6WgoNowgebucaNTtYN4r8UDKEs",
  "key6": "45oAwnVqgyRoybEV9iSzuHbadHaN7zRhriy9okLcsyt9XmcktzK7PfwPfURMMcShktDopsaNmXKSq5WKNfQ3uECc",
  "key7": "3cKq88frQtvpNzh6ami8DihdhbWZchBuSwCf5gtjWU646VejE421Npc8KLCy3FfnJgeP4TXrsLrXrKnvH48inExk",
  "key8": "4CVpouPEL1XHvU94HfinYbptZ1c5gnjf1xYWXu4cKvc1iK49jeNtrxEHL6SUZo85iu1GhjrcmyxBxnKyvWUYmHDN",
  "key9": "2CZpAPdrRR9tABRjFrw8hEkvi9awNPKPqVGxTdeqbwvakUbKfRa39bZH1uTvwuq8HxzkqxQdCz4c3xH2wFPXQ5Rn",
  "key10": "2h3x6pAwEWuSrvjj8yRiMWCiyDyYuY5cbGxeKJ6DfmeMazVwy9WmmGhRFofScLQrQ8ZQjXi9Hbrhu6KjCmQFdi8Q",
  "key11": "5C2YQQxAR1pqQhrNg1EMx1tKEGBTwcbdFDiw5THAT92bHu68WX3eMWumWyBe4FpSCeGngWC6zdLP7XnfHAHjZqLA",
  "key12": "1cezoGyymUvDLchNCyjttjHEmfWsLMsEmMmWJkxsZ6DbH1Nxds6VgVy3uUFdGJyBaVbCBkHEswCtLMGfJ9QY2MU",
  "key13": "3W2sfVFb1bamgH6wdE4wgQLPo4GCk2E7XMXtfQrnRP2LUGE6rzoLZZmbi8Jys6A9bYkzHegczkZCoR2wscNSNWtm",
  "key14": "mWFLHhG2xcoSvjkcjkk5mqJaimZKjmDDJFLgxC4TDZBUE5fsaqYKywoTHg5nrrMPXLkCSRGzLn7e4bpTCGD1FfH",
  "key15": "4mwS7BhDpQ9aZ7xDEgTGydv99h8kwT1KRiDThfKShzQB3e3WCYCTPmPMYTCGdGjS4562vsdh5wUrQLP4Ym79ii5C",
  "key16": "27S2bF3tER5pa5oE2i31dvjmAuKtceTP8u4JxS7PHv2PR6VbWBGjnH28ohSavzzHRrz6JuRRwePZwA1QKsTtu3rF",
  "key17": "2aFW5jr6guH8HCB9vfcqRvUBfoQrLaP87eDmqxuHYzhHf6jiPj36Lzvn8tASyAtW7doufkGoEkhHYFve5QzD14dD",
  "key18": "5YwgLKBffNUAB9wbTtcJ25zNMs6UnF9dtxVq9GfRLmq8MFz3eGh92UHdEqQ2CyWUyMd3H4savkohUGyYRtjkbJ5x",
  "key19": "T5icYARgapUf2WntiBZ4WAEx1ZbELiJ49ahDneeshGu3QzDpC9h96juvVRYttSSNVnPF9kYABdU8ACVXLx3bbLw",
  "key20": "w4NasaZQd8vHbEyGMkPybZaByfL8hQ71bPjsyZRDn21gme6tyJ7BTeapWhdY4kkmqAkDHfxegpso4CRTAp6crKS",
  "key21": "5whwCYZp43qrwAwbeC7B35DG2xriipCqDJy7dKu5yQj31boBsqK8vCcf8R2Vb1wDqFSZJY9wNU756CNXd9KWaJPe",
  "key22": "2Xc2B7AUrzL3JBhWksKZMv7uFCg6MT21qgTYmmhumrAXXxjEiSPXAbWn7mt3sbnzevQNu6nLbVcqiQQiJjsFG7vM",
  "key23": "231bYEaw1xQM995RkzZwCmq5TxDhdKJKiJs55zrabtjqBXf2A5BQS7tAdsL8bihre4EQXYuokZ7vVb1Rq2g3zPoN",
  "key24": "J7rQ1r9hFK1nRG2zM7BgyEwV3aAJDbjv7U5JimLUMxA2cUGES1WZuoRyPcXPMXibb6FWrWDR5mWUbwGf3FyiFXM",
  "key25": "4GkxJSj5SH9RQqjFWA3kZW7pPPsxkYo5ifSHALZv9DQ53uEN4ynT9rSqaG7X87LCbu4vuNML7naW8P7Ao7d2YaRJ",
  "key26": "8wwbC1V2Fh4TECywkGmh798SaBLQbUKGmXkL79FdMyz3CCK9Y8c484vpZkgAMsa3iUkMrLWVDyLm1oeM4ZR1Tys",
  "key27": "4Ueur8KjWApHQmtBr2Cbmjtc5ER25MDjUCAPzo8YKRQ6f4FVkJzjToCvCfwC8jGGUbqFokcjD9zjPF4CbWnQ31tZ",
  "key28": "epM1qMUgeMczpaiBkKPRferKY8QnEYv2kvPrv3Nczp7Rn9SUKGsHxvzCffYPy1D8jSqfAPi9ASKQ7xdHyeVmAS4",
  "key29": "3C64mbiHzQQf8h9FWvEbRS8xmB8TbE7fnesyUbM6GTWGqcU7GymZif7hE3egNzUW8r1CHysH5GQ1ndJPjVKZV8sy",
  "key30": "2QnEqwT4tmq6BuiGZEuBMBjieRyLrr8zizGu9Ltm8DJozhKn56P6xze73zcnCmez41Wxh4bhDV27fpRssz6YxGnS",
  "key31": "3aPqrsuuTGcHy9ex7gogQibqGzUGoCUm1snPKez1rcfj37u4T4diCBCHpFS1PbRPWhNHLKVRaKRH9ZDgy6tbdwEn",
  "key32": "4hrPHebxqnH3PAJKReC1scxaVarENqLAQBKbBKYtsc94DjPnAP3n4x8aXk1HhrNCqHpLBHVRaz7E84aVpfipdpo",
  "key33": "5RmRrqsceF9CoK41B3MNwahySBFWvx8im8nwRoHrL2v1Vtw21gjxDfM6SDQVMFu8zoXCNaWfngNGEXqRnLPkxqa",
  "key34": "9XgTX1WKLYBowAV4jDBYzTHH5JYEZeJUa8H6z7nngdCfXeGnt79BdkTDgFvRNGnuDWhGHj9KS5XCvWQi9GYFk3E",
  "key35": "4AF9w6RRkFw7pkTAd9sEMhH4KP8i6mVUZQPTfzwRYvGvZry4f4UezPEkjHq6eVAF3yKpueej1z5tF8DLyXZspnpc",
  "key36": "2RWsYpB8fGfBb4HoovbR4wxkzcw1HHpucEYr1u1tLzjoJxfRQ4ddSjU4NueUdxznVXX6qbAovGUHmWCUhaT4kBGR",
  "key37": "4yfYThoJjCvFrpWLghBkCzVCSWfFGjm647p6EuBJPh7SZxZgTu7d95dBFwPdjoF8ooZsbteeBHLEwz45H7W3zzwb",
  "key38": "2BfTEfDma9woY6v8Wq9RzxuzHeE5RUUQAGpuinfYRmGhRS6CjboXF2TTr5DnJrSP4WSD65xbb9ATD6U1QhmX4hVE",
  "key39": "9hGGeKKcUrDMG8hkkaG7juS1D2KvdHgc9iq4YKWYxKaPdCkJK8gShU78tJZGnKYVAfnxHBGXhxLKgTgz4wz8RDY",
  "key40": "3tEuCuhsjWnoW49SZhHQXZsqm3penYEKUSAohqCXzoJs3vgGRWhw5D2cnBMWTCKtSP84jhxgcji1EsT1efv8SfrN",
  "key41": "2BTUdZYErbSNCnF3oywFcw58wjZ8CE59CWrBtJfA12p3UM2zpHKQBSGWf5oyR75LgWQnP8dy35ZRxUQYxWi7vxQ5",
  "key42": "3Aw5xNwh6r3DXkFPRMPVCpEX7SmXMFH3zBUKetcvE57b6GbCrc7tUkNZCDDXBAtmRFwwHSvfbDibELPr8K3tuQy6",
  "key43": "5ugK9a62JVn1bND68uv65TpcRAFEgDMrrn9F6XfBTp2gjUkr6sLdKnN5ukukbqzEocYMxRoUKCQrpD7rpEaEQa9A",
  "key44": "4DbRx4sZF7CkaV4a7NNbZSBkGveroQspgLCuLHGxz5JevufCzyyy3mqcdANe3BLGCAyPkg2wGZbABA9nxrsDKfss",
  "key45": "Dcr8oyHtZWNCcUy2oMHFM8wd5Kr2tBXomXgmRWxKeKwNxShHzzF2m69n3ovEpr5iUpsWR6q3x9nCi3f68raFw3S",
  "key46": "AsSpyHsVeVHfcZcjHkvgiCCsGftoad7UZcfSTtoe7gVp5b48KJCsBnWzmWTtmKQiPoSuF7Cv3dFQe8ChkRsmiCT",
  "key47": "4svbwr8AoedHppK2uscD2CrefRwJN9jw5iiy6b756ckd2PPh4PeKcgR9JmRtDAqsFuf3Rcwacg3GuWrL53aU6REV"
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
