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
    "57fFJHZHdsrhvTasxBUYUAuS7Qvh3gLXkdgnmtm4dyv5sUvbfeGgfSsxAnzaeKh9JWHHrrf1WhFcYmQrS4y6G9p9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ShHbdEUFgXtPFydsz2Q5mTNsBzWrvapncaJrJQMq7is7CmnmFQnKwJ7Hb1U6Enqf6EinpQJ7JeyFH73Y5ogc4z",
  "key1": "127WEMTVWoWUuGFF1vR5cYhHhiWLHhPTjiuLSd3PK2k3zf5xVJjGoBd9X1VrkvNzEYQxHy4Hi1DcMiizgWcDpGUt",
  "key2": "3Q7ca6AWFDVn4Aek8ueHY3CiRqFbC6hLzvACuZfqyqdEEAfTCHB4cS6FmZMTuW17cCEUXecNgpHbYJneBLVvUgRn",
  "key3": "oozALCXmRaT8LCtnVh9ZT9sS4akV5GgFbpX2xjnLuz8BFeASPoMsXoRyYS17LwY3GpP7CW2VC7kKXwef39Fj27Z",
  "key4": "2c3pA5TPCKm2EzTyeQcccPRhQP8XPSdzNbYmZsxb33VQQjH8qgz5edNzg3sLoHNQ6cmb75LjyzUw4QvRJsbveWC9",
  "key5": "2YHAdB718fKXS436gGya7wYGVKvmfQW68nB7n6Aapthj4thTbpM32zLP2EzXoipE14vELaR62ExDumuevma38GPK",
  "key6": "2bsAEDgzN3PqHji5uBt9fd1ptPv7Nrm1Fcu4rNwcWPTV4EngUof5iWWBEJad9G3e58WpjJJ8vPeYTCGLwkisNfe4",
  "key7": "5NC5a2TQWiuxNnruRWputMNyjaV1NfnfjogFZWCEZu3HkLLmSM3pu6zkRar1mk183y8LWkhB9LeJgGWLfnYBy9F",
  "key8": "2FAR5qLW48MrwBzdATvHqhn7NBg8Za2gLD7DAcNPTW9JKtbn3gjqfBRahk4tiKy32rUwB8mQadu5ZBMu1XmAaaZW",
  "key9": "4f3iTpE9Hp5t1LAnGzPZcm5f1kvvGK7oWSv4ug9bLcTiLnmYVenM5gpCg6FSEL6837NvM4hyty9udnokdBoQcVW2",
  "key10": "57eu45KwhSjQ1zxq2nLcT3BQNaF5gjEemCX3fPccZm9QdZZ3p9UFGDKSLmt91ZCQn9mjJiMUZzUdRCZwEtpuUDuL",
  "key11": "4PnRpU4ygibChnNueZ68NBLn8dkWgiuoMvSwq7r6F5vWHiGMWRG7PSVvz85APCYktVA71MGf1zZgQoVGnZH9UAHw",
  "key12": "4nuTiB9ta6byYPu7NDdbCYDi6mv7vgmoScrshweP2tyKspV595b95JGoaGbekC7jeiNU4vzFEnms9GqEgR6YyMbn",
  "key13": "4Erq2Ssw2XhBLWh7EcDWApBX6q1ez9dkQNdQZ3hgU4WqFf1tuaTv4EXyQNNcaVtn8pELCXF6fAGq9w4umSQuXSVv",
  "key14": "5X2zYFRezhn7CH8zVdpqPJ1kiB42i2wgE5z8zu8G2jSyCr3vF77aXFfveXhd8q3otMcDK9pXRGFMhkUwWPCdh4TM",
  "key15": "2CULEFZpMr5svmCszNHYmiTnaacs6JjwNcwo8vLJSXnvECgcAkdmqFXGmBhsjDXdEozeyUC7dftAGh4RxffY5aAu",
  "key16": "3CAvC6PU8j6bPjjVQN2iXR8jGitmpDE9PEmHKAun5DQPBPHyzZtFtb9LAPbWAspU5u353XAMYYNpgUeHb8EzKyX1",
  "key17": "3Tjxgm97jzUnD9xuRtnJvQXsyzLb7BkCbcnD6UWrzHGuMbvcvQt8stdJujnGCQ8WaJuz5ezrEYmKAdHCBaqMccTw",
  "key18": "ybNZLhQE8C5mKY6QDGj8T3gNpKZM8L3bktc5GFNkwHs4vtod1EevmxnmXDRpDb4dWxWpTFVYiC5MHaeoiSUArTN",
  "key19": "4u6v9jYuJ7vidW3fpbhVjoq4ACLYhvFjK81sUdjMyXfXn2Z39jA9kMAs8tdxRo3FZys4FzzixPG1335diC1nYZHr",
  "key20": "4BMkZjxwjeRxvhJm5DYrCdj8ecmwFS7XDUhHDeFjDYMvB8dHgLDX71ZS1BjidrPj5vmnEsmooRmyayB9AUSB1r8H",
  "key21": "2MU7JTbqk4gT3J8yUPSZL8UfPysNjBQNAxJrVwCgJXQR9NfzyRiFLY1tbptdB1EUTPDtYo9dr52uY3MW39FeSAGx",
  "key22": "22kBPjmbgkBp3bDbAzA9in6Tpx6k7Zcmsx3R66pP2wxrCWHdpDDiPZbUkp5rZX11rkUHhK75ezWPdiE8P9djaJHu",
  "key23": "5HzBJ1ufo5bMLMPejAyMLxqZXdn87w7pWReMmYCG2yGLMGUe5dQUL7ttURikh9LaJ24DaK1WK7TRLxLini3QR486",
  "key24": "4FP1bDBk3zLgVooayq3DaRAd6UsdC939HEH7gUfswfDm5Dzbeb6PkCcD63ZSasgC1MupUvPX9uPMFUveZ78EzHhE",
  "key25": "2E1jKUywrEhFsrrHbgV7GABSfbwbqdmZGnWTwFz3YM8fs9WWti3HjA8YbzkxzmWRwbV86YZoshYdzTgcyv9cNmop",
  "key26": "4N32c1QJgBtMvRmBwaypUW9bbnSR5z1benDRREiTGCJM9QpdDAEpz5KPPuWJQ8zspDjjpm93tPJHnKhEhNSFAG1t",
  "key27": "3A2PuzvZ33evxBhrbVJ8YJNfrEwouzkoAeVR6s2ScF86WDDMwcZsfMhuQNwtHLwMQnU1ZLfPRypf5rnaZ7EDCzTh",
  "key28": "47wGc2huoD9ywEsCWLMvHaJaVuTzh9pNi5t31WwSjMEqzDrKSA2t4VcXjCJh4voZQbgN5Uv8vfzjt7MYen6hrcHV",
  "key29": "2ML67Xiu2hq3FBQS2qTY7VmmDtwjivaH3QBumK3xdFMtKLDcHbW74wSTKKsyuFQfNvnnY3ukqLKuWSd7BGDW7sCr",
  "key30": "5GozibpsqXYdzd2rwg4sw7jmVERk3edDjiQRrxKq48eekpfDoKmjn9xSjvAMaPwMPAhF82QtfDYnqBhu3s4gyQZx",
  "key31": "4hQFYu6df9Q3Ffjf7x4ReCgZPaYYhGTrT4PdpG4UU6NSUWtzcmPt8BzSxQMfgcqYASLAbUWre7cbKaC364LCNRW4",
  "key32": "59c9Bz7cPx8BSUn5W4TgeySVhTbm96zRRzCNhAPzJxcSnZ73yKfeCRFCLkb6nWHrzq61jzLyzYVX5DYcRn5dGL2E",
  "key33": "ZZLabLVRRhG61zWzDxDppsTvYLgb6PbcL6zxk47DhbRamacNEYcGSsSCXxumHSzyTzZhvFoW4quto9nUYtzEYW6",
  "key34": "3ReFsZPNoPP89oyafbtdXq4cXkyCGt7roMUkeafdHxFcMjqH3o19XKGKBVGrMGKYKHRZoYyoQyFKvC1QFxHj6T6C",
  "key35": "4aeBYuEJf4ACr1v54xWnMPBBFSVjLYt2oKwX7iUSnLPS3MNYTZvm7Hno9TZRzXyAnKyZ5QXWJxS5TKwvDDzUpuGp",
  "key36": "3XPYiuF4KwRq8WDmzXncW8v43oQ6pnkcV1x6YZgaU78UzGDq6QYp24ZkHU1tfCncAvoPAPLox8EGuJcCpK2UeYiT",
  "key37": "4hZVV8nYAHnTeqKJtuXEhhq5sLa1NnztKdpYwyduy2k2DcXYtjnE9UWh16yVoUJEvsHWkEUFJmuMDTdcfsr7EDF4",
  "key38": "vm39kS4MgWemR5t8ZoAN9kDMj9TnzcB1YWkBwfsU54uYW5JiwNhX73EZyhXAivb2f599Z3syUaHBzDpAALY59t5",
  "key39": "2gfgf9CLLftSzBBLeBgMLcNwiRNL9riMEMBXYXnaZ9ir9Si4NDwM38Zvqwf1s3AhRjAFBztev4K1nfSowNHcSAqB",
  "key40": "rojSBpjK8Tyr8yZMHW12Nwu4B3MPCCcGU2nDCDGPoG4yJFNJ6F4iUYqUi7JyrqYYX7Jcs3FDSgPf9A8YVU7JU5J",
  "key41": "3TAWFX2dMcxWH8tyZw3VHqARV7UiwwS1AsWo76Qj9VhwZdAc5D8hhZQJtowFYRU9PLd3cgdfCnvcRjNhN9ou5w8H",
  "key42": "5FNUU1mxQxUVz1WotESu3m2bEMhvjtU1rygi2JFfD8aihjS6rGDNVc4g4nKpquRkDf8QDr4tsKRPQUkUVQVW7XJo",
  "key43": "3XRcSKuK7vou31f5AJyMLbTJwBLFMegmJjQuf5w4rQjG224wJE78dk96jGcMLSHe3r2MobbgD5BnEDKGyRgDVCqk",
  "key44": "3oRrD8j3ygfW1S7stX343hYnZmxx3H8hXGeq1FNsM37SLpGF2ULgoWj6ptfDvmReUcW4yTonQZV9tK3unz9rg32d",
  "key45": "hcgecWia71YVTdTL9Any6hWpxyRdDfdrtgEXN2cVcLwr5y6Zg2TV7A8s3vnYRECEmWbUDGmJvPvQazouU4g67e5",
  "key46": "4NftboGq4Tx3XdDsYZDfYsU7jZQdmA2rxJSKEm3FUErj94JT38ke8Eh3NZLuaaS1K2sMEMUqReEKK2MTo9J62txS",
  "key47": "5FsJN7wxB2XdWxDQAwYVMd6zRPCYsv7DLycz4URjrVwNhGL5qR1anv1aRxHVMNJni8ND5mv3euacVqTx2Y4wUDc"
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
