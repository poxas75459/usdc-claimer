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
    "5HcpTrv9wXGtk322sKgJXYRSzt72UCqqaEqjhih6RELW4Sf4KiJgcWc74UcPMY53kha1yjFrXfp2RLCBr3xjBye6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HAVEDNzDuoHG9ySCg1kJ1mAdvsQhDPrNKkG6Q5nw7PGJ3YBRnyTzSP2dpGdWfvXg6S8QxY8G11JhjNSvpbr4wdf",
  "key1": "4Nyk4kfPPy6ZkFcsanF7tgFFig4Y6DQpD63eM6eSi6ssZzb82a8bpuALMdJgStZowXRxNm8Tc2azc7qo8QQxazhS",
  "key2": "3PS4ib3ozMZDKX2PTSyHevnrqts8h8m7U4FZ2xRVSWorpA8p7nvgegjXiRuZNQToPpm9JFRwbyLsmsvLrzS1yvfq",
  "key3": "4H1MYW3ErcYGG7RbpibTa8Gof3rkzBTtwnEN4n9kGdgbnihDbHMWmnR36ieYp6BYnmnh3vtrW1eD75Dfsm7NBT3P",
  "key4": "5gEaW9QBVdmWwAZmrjRfbpuP7b9yVKS8Dqk5wedu9izXD5J4pBUC35eEnhVfL7QWwawAAQQLwfEpXQf6vZ5kpUEr",
  "key5": "27PSKoV2qLmYHUTe7xQbhvpm3yqv83EoMCew6wbLhmF2ZeYrbkhTcDcJhYWRjSk7K78HFKiMnf7uJsDrMHtMNaPT",
  "key6": "3swtgNxkcBD1CAyJ3U2PVutQ6XaqmbuoerGg3DUFRuku3ZkmncvtmRTsudFZVCtGTX2CEabt22KKLM1Sp66MHmV",
  "key7": "2byCXy8gPQDTGGbsJ1fes2ixpBz925ADmUThUbeA1QiE57o4eq4woeT67QVzZfTrxTGXcmw1Q47UDvc5YFzHRKLC",
  "key8": "1pQpzCGyzNNDXcnJs6TVuMf7XBZfD35NPUTy4tVJwBmNqV3U9hYL1nHyTuiUVymLp3DWUtuwTLHMiurKcgUSSPj",
  "key9": "2dgdkXVP7EA7WvGC8xHqEeDmY2tqJH4Sud2iWquNt4hDnX17JNKrT8mWnAL71bPSkPVirvok8zTqCx3nYjgY9ssL",
  "key10": "5qVC3KPbBpZetSt4yR2JnP1eUgpwXFDtZGGGfKuHbMtKbapKDg4tu1eEgQJR8VfGiPowqxumVdPxfAvVf5K2QBSS",
  "key11": "FWPZSMMn6T6SwJCqvLLXq8eXhodUiehFnVeAceMeeswapwfF7cRbfQxauvc5ePeWg6Zv1JGLzbQMsnsKazgCyUn",
  "key12": "3JqA15GgkrQfxDNqGrykfidh5JL1nq19M4EYPC1gmCkoP18j68maQ7XmQx6HXAqjTmc4mcq8irDfg6hjxGXksVub",
  "key13": "2s2UPzhZC47hnk2S5xJejAjfBfPb4HsZrshqEBv6Swjddj69sb56LoxT5fi4EwRPuddeQ9AZpANQUNUQNZSkxRn1",
  "key14": "5kXV5DmJaXf26qdmWQjQXz3EXgjBJCJWUwfFz7qthhBXSrAmHtzDnZLbTAW1zVncFmsLBqifinJvUGXySks4FVCS",
  "key15": "FYcsSX8gNqTEibY7igsed3eTc86UJJoy5hCM1EDvaamqRqdzpWBb2tgLn9QMp9tsM28jR9RoVsz2RLn8NMWsRtq",
  "key16": "2XVntkZZAjBoaZ9putXnkMQEgs7QU27xwgRyd3g7PYLLynLcYXXbvfFNo63cHndtYrS3Fs8xiJLEj3tPxn8GXpoS",
  "key17": "219EKdMLAUaj4MWCU7Dww1XtNmTsvbgqYWhcJ5RGFaAaQYnXjbsPfE1jgR2fTRDi8YzL5F1kYfG2UnaMWbd1N7TZ",
  "key18": "39VBgrmocHe5pcfQDbY1efYDpvGrE1PmQgbzX88bR9RUTzQPrJP3KeMafKPcSKi4khM1jMpBBYCVkjADEc9yBU5D",
  "key19": "3nHyt7nicAiHRc4AV8RQ2uCW8GEmSdKJz9AAB45yhBWiWDd81NgeAYH8oYBSemaitMbZL4J7jPYmdpioUrKaXan7",
  "key20": "5mQhkmJ3Ro7MBGvPPDvXHj3rX2sFQ9soD5Tirp4dfjaykwiotemNDdxSFTYfj1d7DUqhqYUrSbFKe8TrDtTZtxMR",
  "key21": "4oWnyZFm7pqjJ4wGWMxjAaQ5rThusCxSvUxa4khHd6UaDxne2LZafTG8dupPWdZFMByZ97yAVgVBPmUb3J919HBa",
  "key22": "4ZDLy8wbCBcYf8AFX3c46rxwHFYBQNoNr6e5AhjZDUQ2uLPbyJGLaFrJqjkp3bgpHuK2M6tyy3cJces7djFmW9g8",
  "key23": "2fT8STc8LDU7fzuSS2Ps2gcRBYWEPSY1zEJ1thfTpNNgYY6W8pMNzanGE2N9pCA51K6n1omFz92jjXRRuUBjdxbj",
  "key24": "2YN2CbHAddNqJCvxADXzxDuQ6n2QGcsRH9ySqiCtP5GXE3K6LcSE2q3KCRyRELAxENKoUuoCBMcGDpRH7ry2kQVq",
  "key25": "2E7bLDYLxjdbWrKq8eMos4C4EjVJzH6KPRDYRa2e691zj1DZ9rL4oaphUg46MquoxChtTe1N3ZiywCR1HjsY4wMU",
  "key26": "5FJCXeoaEV4iYce7U2x5BFAQxLbJ1DBjnsRZKKVNe234THskVfmFdfQiCuYaXB76T4ZWiHk7jitA9EHAtnzsE2hU",
  "key27": "49YA6Pfy6TGm65W6aCu6nA71QipQWny6oZ5dapMeZWwHyAW7WiCXmo7Wn8TaVz2FbVWkgsrD1P4qv77or5viWs7j",
  "key28": "4F9cH1iBLDGqs9s4TCfd7nPnvqBBaC9MijfrhrGXyt1w2PpSS4euRjA9Nps5DcwZwKTcRHn5fHvVYeJCukV1VKTn",
  "key29": "57VUDaLoNFkdo5ZtfZiYDW8ixa5oHSuk6wApYaho9cD8RfZHjEezvo2aWqTZKgndzfnoooTJvGd7LNCUUkAkeUjA",
  "key30": "UEJ2HsmKhVTbC2i9srw22EaKfGf8uukw6KnYGer4Xwn5Vq7pfNpvsHmgXiubpQaTWtTKvEpH582x5s8CZkVoP8o",
  "key31": "4LX3Pd1UY6mtjQrLiUTdz6D7iBVhtyv3D4PV4Hgy8HoLxvP8bzhzYGVVmCPwnVZmWCstwM6Sq1WHrY5Vu5vs3cKp",
  "key32": "4uoJNHjBC1y2526HhsGi7vg2gC2WpTuUfSRbojZ2fNcpYDhSRybQ2mgDJdNReTrtVSBJZsudZPw45d6qmtNW8Qbh",
  "key33": "63DuQCS13VRp1pSCp3aeGxNABvewRKvDzxTtq1QQ1iqTzkQqrbfseNmJi1kvEUrWWE2fmqEoaoH9TQigJgQQ9WNa",
  "key34": "3TUDUcMQd4ggpU22ftxumLnEx5xuxipfZHmagFXjULcPj3CL1HLwb3bqTmwZdG6xrAbNJvGPsZ1gAbcwVH9tKA2h",
  "key35": "2SmtcSf3Kpn7cMVDfLXKy1dvi6sdB3AWKjJgi2wfcu9jkP7c8g1oc6dkaYS1kNGL9JdpXsopdGcuGFPRWUJEWdDa",
  "key36": "U7PhYUsRtLR1879UPj1cGc72j9Dsq5rzoYzqGxX2hHs4oRHdum1AWejHJQrDsNFiNM457Nms7tzEkfSPxZixgeL",
  "key37": "y3pdtEWjiF1HP1M453WmP6M8KUmgQ8vkRsuvcxNzQzcgdNybjbo83ws3nbDiSbRWsewERR5X2uAxUBbbg2MxMtP",
  "key38": "3zhQEhoVQiXMhWDK5pD3CqMXMwycgM1mnHjuKNVsvKXpqLh3Juc1MRs7vnMmknxKDrbceabkK1JDTA86kFeD4qZf",
  "key39": "2rjhHLoHNezxYHCDmJHRU1tkYi7szSc2Poh1GbT38ocFNeXmuyxzE4Q9CQpZxs1DQiKK7ELwsVZwYwUELVUSwHec",
  "key40": "49XVHgWCA6VHFmAJeM1StsTXehC7Wr9RmaDA5v3YDs4BGFJBJuauKUyFC3rMpw7GAq6BHMSKXicuwx7ZRRJAVwjq",
  "key41": "3KyiSd1eF85oDMY44ujWQh7Yu6orKuaFS1ypCxkCvaxE7aGaNFqADCBH9CowSZKo75Zwqi4aTgcohyA66yC184R3",
  "key42": "2uXoh3K1LxLUTRBB9kD7oHz67kyGqhn9qWxhdWTm6onKfbmQKskAk5FHwsDvDPcxEt3L9pXJwCcswvjeafMDymfq",
  "key43": "CXgTsMf8g1ZaPez9eYpxduB7egbFpaF52uqDUd6socvgJmCX5MxbUoJ95bhmorRVNSgF6VDXF9b2ievTcLFm1RP",
  "key44": "4HV7US4NF7rdo6pyk9R8ckWkY6bwdxfBKZT86nX9m8vKnZxKyZ8kvtqrjjcbLd632dyAfobMGiGmoK52d4einfFk",
  "key45": "5fZHTMmgw7Nd21xivQcoC7owEWtrFKu29FFC5RGWHnREsmxB5EAiX3Wwx5xr5UmTVJiQzsKJtfj2wXaquqpbJWdA",
  "key46": "2Z1YpnSafHCHhUme5uoWoCkjzw5zD5tu1pTyLvumnPPYcomkcYjnRCP47w8TrXFh2aFt9URWCSbe84GZm9XEg5NA",
  "key47": "2gaM9aLYapXGygFE3gzXfNpxKqgNAaBBorLSxjo1WYRHaRKpN8rdixS7kvLQRMF9zXBADc4UJd8tTzSGMXzgFm9T",
  "key48": "3fPqPmsws6k42UgFT5VffcJbpDwUvmGvRAHPixaxKLbAESsLxyRKejCUDkWqSksVkdiiTrZE7tPKQsXr2MCoqgJ2"
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
