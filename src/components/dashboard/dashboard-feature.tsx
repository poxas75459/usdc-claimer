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
    "29L3Azizu1fuzmEknaTJotoo8KhXgx2j4RHMsAD4enQTNKPDxLzNEzv41B2zG2WPZdSaUAgJswYJCu1qcjBMgC3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34X7fVfEtoJDSHboUF7XH35fwucMbZwBALXjW3Ed7viKvDJ2eLWMhbpFjx1Jej7TJkKfP9atKAWbkvqNn5gzoD2z",
  "key1": "4cNpfALWUb8416vDJ4wzYXneNWSFhHP6aM3jstkfhtqjuzjfv2ERQEBisQeBAnCo77f3ZpBW5ZQSwdoiumaFM18n",
  "key2": "49SW8jKNpG99qgue9yFvaY2uXpCPNvhZsXkLF4d4aYCUTh4SwsB3qnTQXmwj7XzdY2jUCWr7Cq1mbNebiuMJsSyD",
  "key3": "aTrHPKvGC4Z4qZcsDZ9AuL9sGzhfSwtFYg14YzgHdYdm1t3nvvgKWL9rSt3FaPrqifdd6m3KLmQK5sgTcy7aixk",
  "key4": "2RMsKitW13BjDY2sxmJjnbpaNh8x9qpjFWTfniuLohgRU4eBNE5L5ELDQRTowpEMTmMrpUcF2qzGTRcr7T9KexNQ",
  "key5": "3gFmHSW9tCkF1sA4Gu5hF9e5xjZ3hpQShemhVP6dKW8i9V6NA9LxrnzbtLPXVQLYmAfZL4Uk2G6zVp9YVsUJic5L",
  "key6": "2nBW2WLdBGhDEuEzU2MzYUezak3odFShtPWzfuG6fGcEcSDKFEJi9Dej238Drp5EYJeBa6oj8z2U3hNLkBZMUHTu",
  "key7": "2XRztERtGc96YRfn9aqnX47AKwi16GDs5oq6aFijo2hoHudNKSZnMw1fjN2SZP3UcFfLXTghxt2VHkcNGKdvaZJa",
  "key8": "3xJUwBeDfLHXixqcdXcWRGQqoghFoSCBWLXkQ1wwvZZGFFtotwJ5wMWsebnKiExLt3mRztgAqQ9FAB73AGNCRsT9",
  "key9": "5ktyMyRXkKPUbrQuQzidqVA577ghqxKo11TcQkTaWRToMZ4YUi2zTyvPrWy9kNmFEzc8S8fh8ppkFH1K89X8crDh",
  "key10": "8512PrNW3StDExQS8E7LUK5VSPWKALigsNxiYRZLe2cZETnjHyM8NvYNDwEJmVzCs6LgHxshu4xM4NvqMGxiTJQ",
  "key11": "2qNvbnnNxKLDjjSVqCWAx7MYWATAHrkEb8XTLwtZDdj5BkvasYsp5h2zQZrYyqQEL62zMcA6VmK3UTSJ4sMapy2v",
  "key12": "4ZaeSGEiJ4zpTJj8zpeHsr7wtZuTqYLsdLbdz2edNFRDQ4pxfH4vHb3guSptzWRqunVdcjFoiBhe93kCvnDBCLVp",
  "key13": "4d8Q4drZzAQ1XpmDTGNinN228StYHX27TYXsLJT64d3piZhRwdmBDb1rEYiNAuHiuUNoX2gxEHU9rgcCDyW2q6e3",
  "key14": "3TukyqZNmb6Eg1pFGGXbkqQFyN1MvTabfq5Hkpmrnz96yUjtj3jyVRLHhcmXmJj6o26WAhPMbZykFH6Tp3uDoCU8",
  "key15": "65EnkooNgH9uBzZGAAu7MaJjCAyRqTdwpaTJgHRsw52ExLUCp9nVdRpzXNMoqeYR3jaPH3XbFf8hX8ZdjB8VEJcL",
  "key16": "29QaZTPC6APWfZmB7YgUvZ91KC5KCeCS99aGEozdJPHKFTDFWxbWNP1jDye2SQrTuyEgJdVM3pdRCJEEUu53AP6J",
  "key17": "4TwSACtTQ1SpG3xCwBwHhpt8Gq1Wk338BBVWL6pUnqtqG4PdDegBHs3djFBWkgevD8LLwbyU7dLPzdCmEwhnP5Fx",
  "key18": "239w4FPKvtdy4LM7vN87Y2HCtuoa6Xx7XqRR99kCf7nGgb5mMYunwJhJeTtCuY7LRnK26cMtrpDccL6NTyi3xGjW",
  "key19": "62AZkwSo11xsBdbVDPtom5KKkUwA1MF4vf7xsCcvcosu6ndZCmGCjiBCWeYeNoka4hr62aLHn47MUPemrXfJPN9M",
  "key20": "3Bv1RAkiM77S4XUD5NULkVdAYL5nSu1t8m47kmST9UXbYofADW7A2bR3VZYedviH1zvLDFwaQWnuujEveVhTN48g",
  "key21": "2swusSHb45TCUed7KemiZoCBCo9paNAUvpyojpv7ERwHvm65w4cdjRLoFRZPsGBJ456yzZhBQLEJjLDKAfccKgte",
  "key22": "4Baibksn86tUiMw6cbPezP3M2rNiQcsFhSsVrBiaRJoYNAx7chV3xxkZ4E8UwTEg2sQUArdbSU8Mvv6mZM3qYcy7",
  "key23": "5n4udBGfJAwegxqDeCb66KEm4DWTKkdh1Rc8ANpLMVxezko4fT8gH3w8vy4EdnLz9EDyfbwJSVxUUDKST3yo4mCV",
  "key24": "5W6seVbr1MALdcX9URt2bayPQAPkKF3FgiACnEtc2Z5WagERQaz5WyyGr1j2Chcae7eTCBFihrLZdUumRj6rPZTy",
  "key25": "1GVxTxn34gXUpaJ47fv8binuVXywWTpc7qA4aseim6JWRmYWntWf74NtNSQY3vwfuFPA43SLdqTCyoGwtozQGrH",
  "key26": "5NVnb1JqwVMf2MKAfJ8VhXer4zTpX3sVnPJCqSBNgGADLPzqhtKfYeqRPRpKpsrbmtNEg4Ewjjbiidr87sRemdKg",
  "key27": "4jkFGxgb255319T53FA754A8mgsRvX91QoDWm3pbcFDUcocGzAgcfT5ngifgb6KeHLAgGp8FLHeqGqgFAvDjCoi9",
  "key28": "43wbryjZqohLWMC3jSZWCmwvXGGSqrXCqrAswz8o3a8WkAjej3fH36LAQDATBJVS6goV1W8jcLvnzUjSdkn868uk",
  "key29": "5tM84Y7MNHkYtVZfAGzVSUzv51AQpG25riUSxjJs2kWdsvJsKZfDJEvh6VhxLS4N2XfCfSCmQC9CZ5SgFchWy1Yp",
  "key30": "3oFccprm8HN6w4nFRiREVMLrZ4XcJPpFx2gTrhX17j5y7sn3tHgU2kK9CcZuWM2xKbqPPpPXdQur5xaifm6icCxT",
  "key31": "2HPvEsgvk3Mi2C4JeCfYoGwPsWhvcL4Txym5P6KrRVtCV7LVCPnkd3DhUeypJYnpdJqGk14Wjz15cmKphaEkMJqk",
  "key32": "2tetk1mxips66gRcY3ASjLJGUQsWZtFgBowsCywyZpoW9papXaVWcSeH9qubMSjKcBYqXnDMfhygWejSQQFsTyq3",
  "key33": "5wqHKjDAnWDLQKqx5Kcczqtgmum1UHbKcj859ps7GWn7G5zJChHUEjypAUHC2sYtPrUvc5vq1dNJ7iqhk9DANFP7",
  "key34": "KBjF2ZivzPA3HBEVJAtEeWm1Sg97t4uS27EUZgTHeQaTUwXpHFTEfm6yxi26oUCYLz5eEN1WGMBifNy9bBn1yHU",
  "key35": "2hsAC391bqNqAmmwoHtY7v1auppe1yMnoht8Tdft22wmgCVVgPuvjFSRxpLxQctbpmjdXi81qejj68C4THmbiNhK",
  "key36": "2fTSnW3SZAUzAtDkS5GGfJNZ6Z2XXjZGZS9xCok54on7Rf27HATt2MMqm1Q39SSApX4dYrirbr5KVviUY26k6SXB",
  "key37": "3CB1Weqjp4YVSJQq6s4tt87P7qWvdAPsrJHJUPvbo8VfocawbEtAAqkDN5fDh4YaXPaEaCzvWb6podxBhxNTzYUM",
  "key38": "3SoukvmoNHbin7xsad4Szri9eDocCKNdNA2xspp7ur6FoFrVBpt7fUA5gZBUWBDV3u5FwZZccAjr7cfma3npTRrs",
  "key39": "4AgNMxxH54dB3bytHBGNsjxSn63A38ikaXzHVpY2FnRryemdzmzfNqpCZFNp9oNFKGCyj1WjtuyPKvamT7CGK5Aa",
  "key40": "oYKuS6khPzDo3fgqdcs37s4beyHp4raGxQDEeJqhfB1BwwinCQAQdnGM3vVrwpZY4hQAHmp4LnvWfkJDEvcsE3c",
  "key41": "4Mazgt3jj6HuomyDBmZHNv1cPUAR6Vm8ircvfMZr38P5juMJNn5as6Q2nWDH6E8qXpb3ssqW84cyshAAWURzBRd3",
  "key42": "4A8zUtoLKKkkodia578PbsKm6ogvX7kxVdqUQw67arzvBb2mdsyyFfGVcwkiGjsAJh2LTNdwLmb2WbtFDdkWxY1t",
  "key43": "2KVqJwJPuPE1XLMxbkzZMvpkEYLG6B6dsDgWaVz47GKBZWR3CMwiyg4psDb6TbcT96F8bJMSr3dvoM46qWZgNux8",
  "key44": "3TritpG3mEcHJrPB4mgCouGtYRLwFmEJVttoZhuKVfr2TjAHKV3SSbAdfBT51pLTNYcE45w9xKbYe21pC2d2ZGf",
  "key45": "3xyJCA49mYMbHzNHJ3SYhnbMduBhrbN9GLVhmsJ8DFKDMkMNpv4ADCXocTyGsYFZKs5xecevfLyYfYfNxNEnNHfA",
  "key46": "uRsA7SFA7vn9nyJhsrhc7smNDXxokvthheYsi3NKNwKgwuC1Svk6DT28jHr5s82bjz8mFv38ceSh2a7pStcUaJv",
  "key47": "62v1zNwiPDiFn1KLzBMD6nJPdtrVvhQjTm3nKDuaoV3XPfUfrfvgq3pHBDf17HBNanpcwWRNRUraQ3F3gfZDtC3g",
  "key48": "4uvfsCGpDM4bQiSAZxpYTwu8XLjgz9krnTzVs4x3TWXUoYeqQxutdAwAj7RkY63JT5VedU1iPNvaGTWkcNkRjniM",
  "key49": "4HPzKNdDVajaDoS7CZKgd1MX5V1BW7krPtbfT9mespsHzdy9f8TEwAwVQB4hbPc38UhMPbC8qSVRwYRWaYnij1YF"
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
