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
    "kPcAKHSEXmtDZjmdau5KnL58MnedCfsdmLueCWdKcFhxrNJZcTaFVx3ewe2Bd6b6GZULJiUSHQmvH25aVUub6bD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mu7zNKE2PXsKZwvGVd7g3BwREGtcyUBZCR3uYGc6ZVMYEpDafgXYYPg6pBhyfFx75fF9bXfEtroV7dxEsNfxSz8",
  "key1": "4yaVuduFrKNSnW6JTd9eUJoHEodGkeWbaYcFaAf3JWE7zHmJTxsY2RpRndog1TtccqZhKS7agp3Sr9vaRWNuMJD6",
  "key2": "3DBkspyFYu3m2ajw3D27ajLZKjYEaUwSxArGcwLCQ1TeTwAsXx34Tp819g3gppEXPQj6FMQjKzTyMh7T8HrFdwCo",
  "key3": "gCdC4tT2t93kvz7E1HBfDNat8pAsD4AGgDQkeYwiWmZCWrheyFVtzjVQkHPHEsqJbGVWyZH64QGiAyW8L9PKUK4",
  "key4": "5mJeMByBNDWRb2rEqncaXE9GHedTVC87Quvi4HACe8oY4iaVdrzNKBmBhBjY6JVsUrw1bKGVqDtHMbGNeDctaAQk",
  "key5": "npSHCzZYFXC3b7UQ8Tejo23kEM9Qz97SV4VHs359WseHZZc3toYwraNv8XP9g6TrDtaNgAaZ1aBrv7DpghomCHn",
  "key6": "2Hsfk8WWg7RjyxHEwEGqunkSHpdVjMgQZYhqppCFP4sk2uq2jtR9cMbpCfnf8TzQ15upqtocZfeTxTXCXUra4L2F",
  "key7": "24jBMYh2nUFn2Xj8uuVHuhWJJWaSSAGZswzP5iGxa5ScqemGGRpSRdo8hWeD3j3TxP3qJhddKfAPvSqxcrnfHveU",
  "key8": "gHDCjaA7agXMVsBAjpw2Y9eUNzAJKmDSmQxjBo2ufnoeKchCbMMvvXDZqR5UaezYWmTKq9rBRtU8rtJSLsamN3h",
  "key9": "5QygewPcxCY4eqZC6ycaJSFarqo9Ff8uz3Un2YRgZWxnZKREkn3n1GsHYBk3s65DVZeiHp9yQ2DNxCsHVnciCv8o",
  "key10": "AfeLLAVAFL6S15k22xEykDMH9UMZkPZZeFgREez9CVEAPYCVJFf687jcG9GQ3haGnH5LCVpcLiLgtemmLKo2Jaj",
  "key11": "2iFBkHKGZUziaukMFyC5ziKX2MAaY7aWF7NbicYH6sMU69zTPUtnMnAghoWdTzQTFQ9yrJB6ajXdzPBZ9c1KPetc",
  "key12": "7wgPkwGxiLNa4AKaWLrKWVtTkz1pE7wqffWsjD3423bAMhV1zVS8XzSiwLA9eac8unK9tCp5my7HkGLexCzUgR8",
  "key13": "2TbdtM7V1Dqv1on9FDCj51vWKocsZqoHraWmLxS13e6V2sQjVbSrAStiw9mBDTG2nnCNkBm3pWmFKJZ9sTwsvNkP",
  "key14": "PXmngqpX91nt2t8BwQ1uzzk9fjEsKnM8V93LJPaTD2nDP3MnQftSnASKhW6eceTfB83Mh3PGrxvk3xeYvpfDLTm",
  "key15": "67YnNQ9CphkPtQMu5VozwAZeWvxMd1ZGQwh9efMMDGv6yFXbRKUreWafPre5swSdXvDUtpWMEk5uGYK9mtvz7Zj8",
  "key16": "5wj32kUvZrqfN2UbLYeeWBFazCM7PiWEqXbe2UnMTbCgtQWV2GVff6EWU6wXpbVLRFTfLBN9VzhSJuEqxuXnvBe2",
  "key17": "3HdEcxH9Q2uW5EfJfnXWodBhx1fq2K5r7F91thmGsccUz2SawidQYTQiwPwhnqkB15KC4kk7ZVx2mjUP2Cw4hD1e",
  "key18": "2XuzYjdToWzBxsnH3T5gEYDR2cAU5hwrT7JEEK8mximqhrsaE9akzAGVTLizJX3yVFDQJkF7SuA7saLd5uCmDUoS",
  "key19": "bxSLaXyC7QuMP6wZq5E4cNBMPEhsdaY3QtBM6LxmET8AqeJcrKnmaPcrNf53VupVKDt4nZLxvbkcgtJ7HBMERxL",
  "key20": "3tqPvT73CRm1w83E8wgJGuwPLbMR272d6sJwGyCn4BKYzJMPPBcb1Y7CPNG8M9CR3YBwRZoTfQecWtHfM3U3ZSLF",
  "key21": "2RyRCkme26iBizrUoCXQFKQFFpF47RdXn8XP4braTPovBsiasfXGqwqcVsdqFCPCbm1T9QmucKbuRyL8JudYSgov",
  "key22": "3HtpoY96mLbcpSuwDUo2YGopmcrJhkuGY4S2AXQYp3FsKzSC31wWsvNHmJX7EJPk2QBC4KtbRPwYxLX5qJHv62D4",
  "key23": "2g3hjdR1u9m89umXKCY2LX52pieirwvy8UAVUNQy5PwXJfy4RmSH2x1mGg7VHqpiqRcSS4nj6zVAesdq6iXHUcD3",
  "key24": "5dU6Mb8Z1wcRSemWecqzzPN1bkgUYWj4u7bJHjadn1bZenezkXpimsKKHo6Pu3Nawdce2RiohkPeR4AhiWwG9Xch",
  "key25": "4gKSGrhzss5iza2K83y81L5fpXs9X9nXowSxTfHmeSdZ15tw7kcZ8td9fnxt9BpCSiG7P47UDAwTjgJmF6W52QAV",
  "key26": "667mKSPyspP8SNpAWu7P2JULudNbYVtQjGYoyZNYYYjSzcuboxVvDSWEsYGV8KFeg6qMRhhfRYGyHWp7HsjfRpfS",
  "key27": "4nG7AReXeJr5C1S4cqczxQPrRFxbry546PBHa8Nb3J5FcG497j1Bxrq5EkVUFbst3LyZ1h3nihaaykJL8nTEfzbk",
  "key28": "DxyaNt4ZdKn6y6chy5FPsbamtMAgneW73FxKwe7PwiGB4jUdyddsgFuLb4Bn9M1NjzFDTtDU8qGdvAjuiAoCUZc",
  "key29": "3mR5tFkzNzmczpkbojP4Yc4ENXpXYxEbw5aEJVrKz4fvE1WnZnk9qff2vD6oSD9d8XJsBZFfCijujd5qpw677vvY",
  "key30": "4wkKUn35WD649GdJBeyMoVVTqUHGr1w45vYRwfg2WbH8qC5muz7QTrTD1EmjETHC8yRbLwogp9r1Qdd6U8hA2UZg",
  "key31": "4WNUY14P7bAcLVFUArF4prx36otEGai5NJU3UM73dYF7zsZ63H8VVbDDR3Uasb2a1KKeSbUt6aGBBz5VsvHVkMdt",
  "key32": "5vB74Xmai3ac64PBgmRPoqDVpTPfoF1DXFEEfE61f1Pwj8CofKaETGG79PCjtUSzSaq2BuxqZSxuo9oBLmk8io1S",
  "key33": "36MoTnsAcNmvrB75xtitL14VBBPgPyC6Z1hugantWa3fMfNXKEB2CyRCKDW7whFfpfgrh1gSPmXDdDLUmDiM2JDV",
  "key34": "25SL6MbanwoAD3r9wNyv44PjzBQHMzYTe7HXfL9UUvniKW81zFxxYLz4SQfwgiKCcQb6AUQBe4Hx7ZU2sUPDuCBH",
  "key35": "4bBDS36vNdjEB9PNghmntobbz1mXAadVwFVyknYEdErmGZf8wiEvhDELZ4BytSR6nk5J9mMJdvDTaoBPHXhKr4w6",
  "key36": "5yh4rGNJP9EWBKCqcSBjkrRP3fUHaJXN88mmvMHjPF5XfnKwTpxxam2gFmTZ3bvS2RcUiuQb3hHpYqW2DBYw7pPX",
  "key37": "2tTqEwqjfe5vgqSPhj7eKbCDRdZ22CWE2escQRppuzQUD28i5UqZCyznCqU3NrPXkKCP8bLmPjag1m1szBSkU6Hg",
  "key38": "gJ6ww8hMbeWEdhiBpi2FndoE7KGPNMQWH2kJXjLjhhoC1dH2WoW8GLGFGP1LayyWYi3VWJzSKWQwbhfk4tSAEUy",
  "key39": "23UhHoxVWEKe7FeAvDt3yFE6Lu7YDzh1UkYPg5yEuci3wrNQTtaZgWkDtnDDmA5BKsQ8E7wXBanvqMyPBxX1WZ1b",
  "key40": "5WMLHvybCGqUWMjY99nk7cPP9jxqPUj5GRJRAV21kaYcyroFTxoaRwzataWjpUiz43hYMfwcP2WBBj7o2xPPSvrh",
  "key41": "3nhAwbkY5qALYvZrDKnB5uj6T35QAVjfZMx8SYXHEXmVPbjrMx4UiHmA4kBnfs3HbKBX1EoamCaVQxSGyDRvt712",
  "key42": "65wHXB5JyJGqFEs3yVGu4eKLeP4yNPN39z7M4h1M8BRHpDMy7xjuYwPKd4rRKHhex858G6Jd56cQxDay2WkwtoCt",
  "key43": "4R7beYYwHif7DDMd9LL3bzSNVKNwfndNbZqoZPw1GfKkL2zE4BYSr49oayaYkS5EyGJjXSdyLheuXRmZ6wKHxCHc",
  "key44": "4RngPNqozaaUQaJjZ8mz1ZL6ULqm8rDcu4v5YQnwy3CEiDUnPnJ6tkcMcfEKVE3XLyV2BjLSKwzsq1bDXkF2tmzX",
  "key45": "5KXj7u7G3SsiKAzj9yKZeRoWru1B59n623oy4Mvh1pGzeFNsgvTudjq43dtDc2TGyGNLPjdzZCTXvS5XnqRnk4tD",
  "key46": "61PaDfAvT7JqUUkNAp29L3CN1TxSJ17Be1aWsdeEDrxCjCwy4gS1cvAKhg45AodLJY2FMAxrmCpGFm6RMNeGruQ4",
  "key47": "jx1CSkYsn5Ck4kxNwywcds5k7DE2jYNJJaUr3EqHzSmTNdoy6yEvhRu5nEG6Xa7SnW7it3bJgVW4V9wxM6td7iN",
  "key48": "3R6EWsyuBDninRWpcG4TjbzRH5qy3zmcjJ8F5Mdzmbie1xSQ4qTjsDkABqYTdT7Ehm3HSMXXuMcoYBS3rbV89CwD"
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
