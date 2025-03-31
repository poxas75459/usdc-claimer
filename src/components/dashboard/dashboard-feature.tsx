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
    "tQy6DobEN8zwj3nFaiULrcNqQzQ9HFEztV2adJW87q5J3XBhRDw14J46mhEQfnp3bbRveWHgxENhrSC5jRsJnL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Sn19uhJWvXLvuuqZ2faHttb8QmqezWpeuZaV1e2yN47Fxr3g3US6Q2j2QjKQRXFdmtJYzPW89dRfwfm5EjiBQx",
  "key1": "4p412Zs6SrHpN2sxb2rPd3fW8AjL4Zzzr2jPe3k4dvPhepE7hJ73hHjDQvot86xfKRduudgVdSao1niXw4HjQtVE",
  "key2": "3BXg84Pc1eajR7EN3tvMbadDhEw687WoXuAqMsvL6PYQAq5mHT7VHofCXBwGYZZzoZmFfRdgVwyoJxx9RVHycYK3",
  "key3": "Zn5Q5Aum71F9E4Mmhkqm8zP4m9wDheiMcofV9w5i4PPVcY4sArSwzAqFxWzyThsHfgrqRjiF2ZJJLVguxNKHn3R",
  "key4": "28obFzcHTiAiHArK1EWVnrMHkqzgKMNhWBFfvsZhhz2fzSQ6AXFW5PZ2ZWWG6YGyHDeLuWeUiXMJ8svQzbxw6uBp",
  "key5": "d8XzdC5BXmmoyKuWASoYK3XXLF6bop6xjtF5juV6c7gpgVCfwQbAUhJsv6tpEV33nrnsGtrc92jPvdKvS1xXT1b",
  "key6": "3eLPynMUz16Bwfp331T9UiY1WPC1dGqRHQBThsM9GmgkhZKQgLRJHyLnN7nFV1H33HnjUGzfuRQvE1AfqyMD8uEk",
  "key7": "qBvatTo4iAaa2pMbhdWKouSmd87jLv7xfbEhjiNkA1YaSHbSqCUcwzjUrnbqBJD2Tr1fuP4ER7czvJ5TgwQB4Bx",
  "key8": "S2Aqn77ijTN5gcQK2akrcehTzMfE4u3E2EZ6o1AfZJ6CPV7LxAZzGGKDi3ZbwMujxdgDdEMTn6BSBkkmEAHrRfk",
  "key9": "3vQ2qWifSo8gmwdjzhnVp7Whu6n1T8XXn78qGaAaJBtAntzNtereG3ty8f4hpviVLuV1BPmdeujwfmKxMVwfHXZb",
  "key10": "Fb46KBgfuBFAhAXXZZi6mYPCdDegHcJuerQvBTMkoEhHWJpwGorpjpRpVxShJmXX9uZYquzDnsFf5N13gAJmssW",
  "key11": "5kF4jhHqL1PVpxjg2ag1KtEdVMyrnTH9XbTTqkdEG8dH4KLF26JwM7hAqKuCkTPWmKUMnaasx85BvL2x1GWypunb",
  "key12": "3aL5S7FyNASx5WR5XQXCMZ3iSNj99p6eEw8TXLhkDYStHR4guEuLAmbRWcHG3EbYEdgaUSYSbKjKvTY14EBagR5n",
  "key13": "4ih2Jp4w8fSB68vNaoNcUAbC31BZfr9cGnZiRLWWcqku5ZGbaRBM6XUmzdQFcomrQ1UBUwJAUh6k8YwcQtTn64yp",
  "key14": "3cLVXw1EKKaZJhiP1HUnfWRoanyyR1XAvUKi36YLaYC2zMPuVUrJtXstevn1TVoVeHQUBDfqypBdriiPKzodUxFb",
  "key15": "31X5GHjUBcSuvDvWLfadby6gSUcuMfnT13yjWKnqx4aoiyd59eSHQ9Bvs4nCCNrEQ75q5NnbUfX61fRt1YKr1fkK",
  "key16": "45L9eW7VNjtewYMasWmc62B8j2arAxGM3ofqgdqV9vvR7f5PyXWfjTAMEYsNs2qDKVcwRHafDPkT5xsdBrGeNWBK",
  "key17": "2Vy2doxFRc7FWq8Djyu6RgCJc4HtqPNdpC8sZnynJeYEmWkMbHCuNnPeidsFi84A7h3GPLH8fTUicuWjorPFWWGg",
  "key18": "5QPjim3etKWkc9GrMiajq1QKH56EHrtCBiby1MG3iUe1iJMda6H5n1xiHEY5pFnDNomptySJnPEHrCPEAJijJv34",
  "key19": "FFHdWPqTyH68GG8jCMzoiTZboec8auyunPnHvCmJ5SNMWuRTLCz8N7LV2iQNUZP5pNjYmFovnvedSwL9ucRYYNb",
  "key20": "HKicMu5W7asCNSzyvz3R3aX2s8pqnqYsDVsiWENRVc9uppesFVJQtHEhDuc98GHfP5PvHTshaYcsL6StPNLJ7dh",
  "key21": "52ttpSJtNvwcSfJd1dzwDUDcHYKTem4CLnYTwG3vSr2Ywb14kfwNK9ED8V11wSSrcnnzx4sxf2wVybXD2JbMyZrv",
  "key22": "EMmzBfNKa7HqsNGB5tHKGEWiiLorCzXhYwChJzUCg2Lnem1bb41ReRqNF6QkkN3JiJyF5nkDXqVNZE6R4zb6Xn3",
  "key23": "3oDx18S3bmRifv2Fb95y9tpMzyvgKjHQWiojeownhjFHqdbXs5wyQVpeJWDb6NvnfoLHcdKErp23mTHkPGC9uT9B",
  "key24": "3Ju7owjK97iEaqxjYURshxLgYUB7G8MxHuAXESqX6QbCuyzTEZBKfSXVw8rKWifhnLdjFeDapF5WWjWi7gk5HYsY",
  "key25": "5x71cD8wPnQ6CdLAr7qYST9MkUwPwvyaA661mqK31bKPiiHA8NkryfW15B8FCuq2StM6bVydw51z2wjtLX9wBUfx",
  "key26": "eJqMfW6FR2WqvbxUUSkDhjrYhPd91oAUk9zaMB7bTHsyCe3vnxypyNszPUm24L6etaNo2Ut64pfk7ABguGKgVD1",
  "key27": "cRU7mbMEcMqaqTAEn9UKFJWM2HLRC7ATSvB3ux8C7oTwwAhtCacfNYvyJs9poCQcxtvaN31TA5x7fSRAi2reVdz",
  "key28": "xhCMkuVPFMju65FfAUpCVAxYgmXRD8kZpJxg9wPSebfeSjCVCuQeQBa7FUuhTBhiQRFb3ULnbasNQuPvepSBuXE",
  "key29": "4gp14PcL32dykhXgVAMwmKaRxywREBUBHrHDfT1qX4265NusasukgJUKPQSjTkoruXnaSs4Hir7cYeMhsVvsBbju",
  "key30": "35RMaJjeHD1BMjNJB6g6Cbk6Sxk1Jmfu9EotxFs2H25jip9Mqtj6eZYG4ExX721AHW3zxk3NY63BtdbMdhdrttL",
  "key31": "2QJWRsRkofkE1mkJbMoc9QpsziK9LZ9qqcG9BhH8SHobnSgJqP5diBSer9XZJN1D6v6y81LhiRn3qkP396htmwM",
  "key32": "57pcWHzZMMdasQ4KhnsFX2g76B8W28YJE1YQQNQjtd4dU1mQake8Zf2HaD39hVLVDrKm6r7HxVPtwKUPuQCxp4wH",
  "key33": "4BFHbnBrVwfJYXSRGXD9suj16onMZ9PxuzrNVdjFE27afYUZ1PCTX4qS2EpZ9kDJYwg72josFw4uJK9aNVAmQRk9",
  "key34": "42tcFSjoMZMzFxctBvoXK7jo46JzHbCodyPfne81qutToeHZD6v5AsK45aTuPhixhfNqBJY8Txpo1HEimY6yGufe",
  "key35": "2v1MXgH6FfAZTzQMeWRET7hydSNNecNgzzNMuC17UQL3ZoVMqyw2r1Tj7Qurp2aH9DaHhHeETaDQcvfqoKDThypA",
  "key36": "2z9hQbQtiME1CJUG9G1VKh2hU1uLRRzvWwuVaFVkWtRcJecNpPkD1TqvcttaQEz2fLuaTafTnogmv3LcZs2hVWf1",
  "key37": "41xbHmvXtHwyQXd5QHRvX1WmX271KHFRCS915vwhrdQcg2vjETc3N28sGQY5G5yrHXSHh5VFkYxSXobetQMwaRps",
  "key38": "46YRPGEZwgpSScainabJ2vnps8pNhgLMr1jf9AFMBQE5YEfrJUtLsGqbv1F5rVMSvZXTCvmqYmUDpNEGJxP6HVGy",
  "key39": "3wWL6txb33j7XP489fy5E62vWKdEwFChgZXyuE43KZQFBai3neMexkNVVxo8pyjn549zhANho5ezLshQ6CzzbqVc",
  "key40": "46E2nbqed83CJ4vTJGTXDdM5hXeJcCy8t8VRFFn2mQi7wrL1reqHwXozhFJzSG2yudVwWdTedmExWxkmB9Dypcv8"
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
