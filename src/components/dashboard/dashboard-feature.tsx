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
    "2sTrZpSkwajaXEFZiYRx8QueseiML8sp7LGjiXkFqFwwSof9dbawGhSbmsxz1tp2WPYPRL9qNAmAxLfBNEdbjF8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5biy2cEnQvx3svknWwDtcdN37Up13potTFZQwbJLA5dD9LBx6Xk5MkUDeuq3dhfSyPSpcpLgXNFXVX2fTBW2BU1x",
  "key1": "fvRBtJFzXimWCToTuBENoRtXjWKVdQhYJ7MC8NwXkri9PZXppQajDoFbDxPChaQbaZHKT1s4XwmvdiaR1nsA4Bq",
  "key2": "oGn17h1vgHiuTg7Wbr7pjyapREy4mpofHQpcsjSWD9VcdkUBHLvUDvpMZhSpfJURsPaz63XNx8NEwpFMnsLgYrq",
  "key3": "5B7HXY9czvvcqssHqVqW4jVGccv4jWwnsr5nRTuYKuCZBTrX6sYQ9AiwYLgdTp2PPhzB9zXBVy9rVECQxxAFGAQQ",
  "key4": "3m1XeU4K9yJvB4GePwpHPWdxAgzjougMByKbvFK4XUEhYQfxCmfmfz3TfyW24KT8qyuvymzB7N2MhLoG4wa7CZWF",
  "key5": "32xYKYUSauenNPeASfxJ2hs1Tkk7gGNWuYLVrYnLCMxT8F5KZWuMowjPmzANvqRVQuMFnitM6BU1UKefxrVKx9Ka",
  "key6": "5wMbGAvCqxB8pm4GZ1LjA4hicVTTvmsECrcdJTYNMCM3kQaaCjBqjR4kAymDEwkTZsSH93oTdyLMf75Nf7Ck6phf",
  "key7": "4HXLNi1zdQ5tyr92JwCnPApH7upCN7pvEAW1PWRCcDYBsL3ZUEsJ8m5BDgYhdCWiwdGLpXQQMaGfAYF155uedXFD",
  "key8": "rirPdB2xpB96uWFo1BLcyF6EQefU1SMvYvxd71TQPat62pQH2UN6TBPEGwQtSXiYa2iVC2UQVgr8hByQhpsHfFN",
  "key9": "3iVqW7KPttkPCzFVcE12u2RB5L7adRUXQLafwo6UxdUiZL8vVbM5mfvZtzpuMWd1PeieN842pqaN5dVTcAGDZsAy",
  "key10": "h7a2RCe9ErWYV9AgZnV8Vnj3QL33mAJaZT7DGFLRj7KoKpHc8Te33Jr4aKRUs9dJio71drCaj2C7u7JayLuCMK7",
  "key11": "2YVXx7y1QGDUUm4PSi9AjtpysxpuEVAKoHJespZ2hdpyFquEucUEyZTninGDxBBLCnXXNgBqEXoJRb9ktzbmrBCP",
  "key12": "2fB7V8tvZgZKb2euFwcbreriTAR237LfkZS9n4g7QwPXp3vpTaur7NRkzgLLGtsAQoGzMzUUqFwrSE8M5LxTvjf7",
  "key13": "4wykmP1gEUcrzrYdWn1tL2VmkPg9yYDt6TjLeF2c7wVbEnuq6K3g84nPjhaemrfgBsKaAHhheeWyfiW99Q49ukRA",
  "key14": "kD7tCvbY5dKBk1scKAnUQNwq2cTUdUJ257Tnh2pqKozUkYTDyXfVzcj8NL91AnsS22sEjMjjKqM5e35XJMed7WK",
  "key15": "3NqVGgwasVn9CcXDSHwCCVzPVMH279j7N3gJFNe6n9kFso59TGsLeBCYNyDtE2xQnsFF6SkZTNGgznaKydVdxUoF",
  "key16": "2TyPWX6DV9AiU42T9hY6pTDAcff6L3Yfjao714uJLDRkbuMSt3FMwZJ6Yi1ZUdyx7RMuUAjLVSURpA62XKmWd3Rd",
  "key17": "4JiSr91QE2ratuu6as1exuKcEULYWexnPGThAwKMxXhnKt4QLd5ifyC2cFCktgfyb52XcQa5ujKJ2nL3bpr22YqD",
  "key18": "535xTTM9jM6EjtrxyHfzrFerJnxan9TsYMgPtPxRp3AUkWhq3dDq4pgCxi2F6hhsmdDNWKiMVhxhwwZTcjSasReZ",
  "key19": "66pXETJrGfomcvedB1HR42g8FSFUY47EnURij9Usjxj3nuZtznssx1Q2bXMkDEJPnv7qAbTx22xhxLzwc6TDBANi",
  "key20": "oN4q4sWvZAtrzpz4Mk4gE8DQKXh6PPFsty8qzR5pJN7SiuLAVApGmwV3RAykSuQ32WFo6C1pPAWYD7y2r8o7LBR",
  "key21": "2WHkCB3xTuZ1sGzB3bxeR6CzPnDmDFAj2omPsH1X5ahroGvrsnS3SQfv6i9yNAxsD3HcuWsVg7xYxSoMc43ZHd55",
  "key22": "5dQyHn8vGGzJ5s1BGGcxjToMR9n2HFxMWRY3m3Bn3uU1ssHq3reWtmVKg59NK4EopCkFRRJ454KxApTQ6tV9T3KH",
  "key23": "4FhU3Dvmz2yrbKxssc8TtJrbUABmju14JRqQmiqLMXKCLb2kAsWFRYy1sYS3jaKEdeXGeDFJmjBeNRTv6QF6ymZe",
  "key24": "51LpyTbsZDzbBeg4gbbL4RzohUzT1vPvCWA7XMLHv3Ltpf79uQhKC1buieVEmXSkGZiho1vbQFXeNaBKGD2NknoH",
  "key25": "5HgJaDth1i18ZqS9qNyPZ5b2EDvwiM9HqttLwuSJ3HxCVye86rp2TELUKhEw9QDqmSoZb1WcuYTEMtU9DsHkqsTY",
  "key26": "3hZNqYe7cNyxzDqV5ezSTzt1aeMwd5ANZJJjkt83j92C2ppW5G18FgPPomhWCirZHyL5tiJ3ZAQXjDPL5rmzLMJa",
  "key27": "icP6BWXqXRJikGM2nQeiDfaDzsJQk6Fx75mSxzN1DFr44UDnmDkcFFqfUUa3N2sVouhfh7QgSRvBBjRM8LvicY5",
  "key28": "adTy9vDVNQYM1AoymoLzaCJ5jM7i4DSkFwvk12m3Fsh1M6snUMDKtC313XuA14fcJqBEGBngrBdfMDd5gqM6LvX",
  "key29": "3vzUKqcKo5v8LBDsCK8y7JfGYXtpq93UAoCLCP2kcXLqtbboSJk4QaBoSYgY88kwtzLWgUuGdQDGwkRmHHbGRD6s",
  "key30": "5hm2yicTmGLV4GyrmtGCb7wANJD47z6794ML6Rc12aZk57inEVm8D61ur7Czb1UD5eoznCLdEpxevLudEWcEu5Gw",
  "key31": "3TtMtf7P66zVyCuFhbT69nvJ51gCVuCtB56GsUkzTxdNjmA8yeK4ji4LghJosPkN8cqKYysZckuH5Ei5Y6x9exz3",
  "key32": "4fAwt2zAh3TNRW5SRuEnPPiTU13k3VVtgM3c2JSiyHYpEF58beHFMWynuu15gkRqjTKQmvXqibPLaYGFVYfK1H9v",
  "key33": "5YtbxbTgbzKbpJweeGXveNUMB4uLNfHVM1Xj39QcZCBuLRyLReN1peWChv5nbxt1GCE8MAKArLPK9Kno17aBfakg",
  "key34": "4BX6FEegfnUVMTosEygGvpujSJQtzS4KrZkSA959RqYQ5Qscd3vymF8F8eW9NAZ2zdfTfAfQTZMzXmTApi5sYSLR",
  "key35": "2pTJmoiv8kdT5z6WV5XVowj4LpoAPBF8ypMMdksc5HC2CNgNpAvQ2vS4vHQBFf3FAVV1MFajkBGhsughArzQrZqC",
  "key36": "4x7Y7oJRQt1FXwjvJgKxeLXe4yzN31thUYQ1ATGJwq3ZQBttcgvEmbabToDxCYwannfczJhBV5jreYvkCJx5rf87"
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
