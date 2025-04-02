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
    "5hhBNcCATDfD95H8oXEMwyiyjfDMXqNxsBoxYDLKM2zdyqWdFCbatTSgcj4Ee8xdgUGMo3LRFxS6xTAWep19hzjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CM8XtEhBar49hfko4yfBX2J8EwgP21CK26qymxHW42eFbi2yne6rCKUCp6Qokgpo6tnexenh6mhjvTSiVXM4Q1c",
  "key1": "5QBjbTyb6Wur2Qa6Q9qRy173tGWh86AfjPvtGRQUSxcS5yYbpNmErTWa2s6nkXwQJyM9CqDsdkiTXijb5Nz4K1rh",
  "key2": "4cXbFzJyfKSsJjCd4JPh9qbG6L2STiuwnUKEjyBweXkPa5rzZ4FDcrA7q2dYBPjMjqYzhwAQ2RZPwDPFhTRVrufx",
  "key3": "4wTt3VfoSfgvarj8zPm5iAkG3gtKh74xVszAANtjmwSQGgVqESwpMFLr8aMkXu5U4HnoH8SF4R6E1qX1BwbyByC4",
  "key4": "5VCtcANoiZFUz8aMh9msbViUYf1kqE7BAeV9dKbgkcoEXGu3U1ToRiHhNQA8fGoXnvqbsaNp2S2ww72jo5fhH6VK",
  "key5": "56w3DTgqQM7JRRMbGHTjSMcc6XfLDzq2Z2ZjkKeAvAxc8TUXvyAyyezKtHo42rNUptYRDmWj65MVwXFroMUXuf33",
  "key6": "51rrNhEYBuoftUZGepgaBEp5i3ESp5mbn5YhDZVXqQbNATf6cdJqiJFXfvEz5kvmAKDPWdznbRLVpLF2mAwYdU4U",
  "key7": "34xEbNM4p2u5Fx6jSyzLehdeWVjNb1xQ6dvmUBuZYFtDGKbR96P4S39qb5LeE8MaqW3j9PGKbnGtPJgw6mzqmCEt",
  "key8": "3EfbXEjRoz6DrV965YrLV7MVr5WZppEQBK5Ycx9NcyupZTwaVYghjkazVDcw2F7K8KzYU4m9t3EnVbBumdo5zuuo",
  "key9": "AwCQeV7WbbbtXP3cj23WBfmRxYNpfMEmzudN8MxGvctKUZw36SWe3QaAbGiftKRiMH4bTFwkfDRGjxUSufB4sXL",
  "key10": "3hQVbQMfqWyyNR8VRfe8PXcfvsRbLCXFY9kaRFwN1wwgPz6UP7uCE88uRuNEkJvgJJsPv6Xq9A581oHBefg5KAYE",
  "key11": "4zHe4uFHexBGDdmbruj6TaQMHuqLXbo9SHsNLNjox4QpeUcGsdXBjE3w53xXzLGSdxNrbESr4RKUW8ZMxoBMbutb",
  "key12": "5QcjpUmPNB9N2JhbY3VZjhw5aro6zogQGZCPSDN8Jj3j2ae2D41Qxc6CB3NdH5JxdvMDTQS3WAPp283kxpbQkWHS",
  "key13": "5jiR861aJFvRPtejz7XKydrEQqNr8fV8YsZnUakBMxjMMBt2UMBTFitHrb4xZvD3GRuPQQrXdU4QJYotCAngzcv8",
  "key14": "22t6hVVv23UNFHKDqYTcTieQ9ET6Z1oFzJ6Yydyfq9G4JFgrVkpxJhdk92SFpM12kPoLmUTDCV9ad9YDyMwN7oaf",
  "key15": "qdzfi6NMzjpUWwkrqwr4Nv47ASvUJ9Pg5xrEXXa27PxpgP3TqDkVAKrku1SfKsTTWevLKkxn8qvKVJmBeS2zRjp",
  "key16": "4vBun8CipwaVJnb1AG4DTY4gaEjHVBs38FPug4YMMsmvgaHPdV5iMPGWbWDDNmCyC3YC4Yku7nKLqT6tjKNm2BEZ",
  "key17": "KQh181RnCrK4MzKouTXqYTF1meqZwMwt1PbZ31JwS5VwW4jptm1wTw7fAx3FK9d1FRrSYXvYRjnWmRQZJNk5GWp",
  "key18": "51rrXWyxDt2oFXuCyAF88Swau7pXJd1aUkSA7VpiMDWQKn3VTDryBBu4jjAfo5wktuGv6DxdGMR3pnH2rfCAPrja",
  "key19": "2Hpicx9QbZeY5xpcNS9eb6RdYRQKzDfxsrg941yRog5HKEGhwF4HYkNqkGgJEoJqUz31zda7fatzkWhrd9ahSxvg",
  "key20": "59hAApRitCViaT59T7PDMqWXrB2JpMGvg3zh7AxEx7nSEKdCdUzDvsZs2zJYgCnQ193CGYNNiyZj8QEnP6pjZK9R",
  "key21": "4uzV7jXMujPQQdvnjWbgEP2RJAoyn17S3iYyj78SREarxbPPd1A4yjJqP1aBGqzXcqEWQhHX3uZnazRiPLT8mV71",
  "key22": "2SBsLz6asiCURWAf2wEr2gvRVadJCbhQkyZxZNZRCjGyTvQYRJcmfi6grHP1LDRwJCbBJ8wGjKK7vx2HQYjp35Cu",
  "key23": "4TfsCQoDeAf3faoeL7LgEwZkXT67EP73vQs12hmaodAa6Zo5EhXBniBG1D6J7Ama74xdrWZRjyXeo8F9bNXAzopq",
  "key24": "jPDRDxxoR4TgmRYhwzBUkqBptH11CWSy2pdEswzHeSd7Jag4QvQp1R3Z14Pktj9YRL7FBBQL7sdackSPhDqf9Z5",
  "key25": "4czxqPaidGDFg6SDCW7nZ9UpFk4rKdho7x91SBvdRcfdu6QdBP2EeuTBNSvJ1AakDpmMHKgBFBSBueJmfAzA9BSz",
  "key26": "5qvMvoFPphVEtvgcFJhjhXymX8T9G7s8QVHmVrcaziaiqqSDNMyX4BbNXnSZn7Bvw3z8AnfdTmDpfrvi7kFLLBGF",
  "key27": "3WtMyvXPyKWCqbhbuQCHzmRhuWtUVGqantzWVwgNH5HRbCXTg4ik7pDkARAgn7zwje3kGbr7MHjYGYTNZ2ryUMU7",
  "key28": "3f6b4QFNCaHTqXb7non5Lr9LW81Rnzck2VBxLafrGiosXdrRuU3n1aTDTmJjrn3V28m4QGDHZAc3UcMn8rC4hMsL",
  "key29": "9V6e8GThwPoshe6EtaPfbCjwTdwJzFVNGf8QQkA2KegtfqwRa24PgrbUMyiad5EJuyyinYAxR2owugUmd3uW6o1",
  "key30": "56BDHu6RivwCMwGn6MqDYpvWep4yGVoSFarwBqxASBHZFUFsxy7N9daUG4nzJfqammV6jqD9WvFgzKmTLTHFrjpt",
  "key31": "2T4GiCddwpuaTPWFuVzvfHWffD4jYsWHdrbJqCtaftFDRNbQG4csNYEwjmJGfqCLHG9LvgC2rim2UndgRbuLDFEz",
  "key32": "2Fq2BdB1n46x7xZpqcUJXsQLy8mNwGa6PzSKa4j6Ex2qarUS6aY1u2ZDCt1YytTuZcBkzFMY83ezfCnD3tkNTE6k",
  "key33": "39B2HqoKD3uUUrkNQC4D1C8VFpL9HUtMLdjyXD5P5wmqenezznSXQRNX23CuGHH9Dn16BQnMpw8kKHV3qV3TYjvT",
  "key34": "3ypxMTBDV8534hvKPv5wx4MLE9dXiPWQmFDkt1UFX7S5RMdFxxsF18UMryZkgb1iViLMNFaa4gfY3xKczDyMxtQw",
  "key35": "3bVcBG4hRBSdmcwWsF9odDAfWnZvQviUh2DhT5xGspkn1xu6kojaUVnWUAZDTqWwHE7R8Gig1QXxRhiA7aqbg7eV",
  "key36": "37E66ZVPyTpDzsryFjVmTyV6mVYAYGA4Xu7HqKxEobDEJMcZfmSh7dx8NX7eqntkfjgvzVKZnPmNoMbU5UQoLQSG",
  "key37": "LEe5sHGs9bDySRi7cvvkPSEkkVSUQhBioxqHfezT982v1vAoBLrLzDqtNEP4RVommegtBKBwgspG2fGgETv4jad",
  "key38": "5Y8EZ6qZbjvyMnMibBmKpJ31Q9TLsGWCcw8pWgfxkju1Ju1oB7FFuw4PWdgmqh2tqBcY6PqypLgtUFWtyriTq768",
  "key39": "bp71j8NAnZfptGpdmqVnzMoacw5ocGG9xEhFV31iaAyshn9HaYSwHPBGUitKV8jjTqYFa4hHCAv8gTN3ZUcKuv6",
  "key40": "3x26vUaYJWa3P86nzmZG53RhrTrC7nZPCQNLi6SddobzRRVrwpQgeeSwJsAqJkgpwDv15NtXJiVRdmyJowpVGfkW",
  "key41": "3GbWCScpFfhk6RehWAy8G7utAi5YCJFgP7Fpge3MBdqNqj3bTUDLRqBZB1SqWHhhLJx4N9jG4N1iHTRridwuymyB",
  "key42": "vGUhNuRof7QsXVG1WKvz1eLkztAjaausiEKgS7JY1k13DugP2sJfbX7dHeeXsvviXtA7odugL82gHtaphAK96Hn",
  "key43": "2phHDRduSajtPMFrMsReRiiqTPjhGphnbPVwQ3Tq3jeL73odFLsB9FMTostDvbGHEAsASfZTs36faruAFv85pwSR",
  "key44": "4CyBhjDyikTFxs1Cytou7jQ6akWs5G5wtSSAQ3JMfD12r16GQpqj2p3ygCFknQbQdsDfQPdcEDzGSVHMQ8hd7Dqo"
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
