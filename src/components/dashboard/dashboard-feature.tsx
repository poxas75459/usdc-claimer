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
    "5Uz4BdKFAHUFD9Erh3wjY2ri3zAHK9mH6dgG4UnHjkaSixBtudE25M2E9xwCTkRz63Pa8pVizFXoEkRXPc8pmiVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P1D7Lc4yMDg2mrcLLiJwgQe5LG7cgadGdzRuiPfMTsGSCGApcuDK8vwN9Wkwqp9xGv42LvwW4QeWABhTD4H9u62",
  "key1": "3DxVvi27YZKDss9YNSoQHyRbTGyX4N6KWWVoU99swhyEyJ6bBbwJBLzkjRtvwNzqFXEkEnfwz4TwKui5t3LwW2HE",
  "key2": "5HgFPUwe2PQ36ZMFKJ6RmqdfVgSPVXBBdSgannY3QKXSre21jkDFEQrkM4g47GRvHo9StVqLtr5AGrdQ5LvgP8Dq",
  "key3": "3NWsuEA5yeSnXkvXMwZyeAW37BSdeuiTD6Y1GDHyq6DDYqFE63vRPaW9F3uCmgmyHCfEXwiu7E2EjGXzzxi5C44a",
  "key4": "29MKEpbaXRSXs48JbSA9bmef4DA66TT5wSBRH2HWgGXudUbrMZFiz5WB4QTc57BV3Nv27dZQEXAXvgkWk9XqPvm9",
  "key5": "2pRggrCCbjp6NAKeDaX8LQihUrvUetReUWRQnsHDdEcNGEhQxvgPs2RDXTqpaBwfQ1rjegAu47fxSqSyDzadZHsN",
  "key6": "D9oo7USA4kMnndV7ZFEDoiQgSmZwDvimABaD4GouoH3iCZh9tRQVbDF1bQB4GP1ChR2zR13aUa87HLyV954PgKp",
  "key7": "2HY448tfMdsp9ibqRgjesERTuNV8FmxuvAvtq18Wao2ckgLtPkXCpCfVV8568nxk3SXxHuAzyoaf632UnRn72Jwe",
  "key8": "2nfpSpYf1ivDWeTybuUb4MfF4MQB7f4zborPoYrKVEbqBs1ELuaXyueD8TuW3NuEZkNHMMTA5QyrUnMSLkwMVG5v",
  "key9": "5hoz8PaGvY9pXMY47iuHBXTiFTgetXBw6MwJ2CwSJst2qLcnaQRW3PAuGpVJRApbP6pC1wneEevkob7Un61Qamvz",
  "key10": "bTWxaLem25bVPHKVEZbipwJ1QYT1CYaBcqURoFwUbsuKoFNgYe3v9hbnGrX6Pfo4PXnz458XzfYvRBSCdgq72m7",
  "key11": "5bPcRbH7os5YwdaGvVu9RvDWUufQr9UmkoQdwQDpwuhcxfCBR4XDtRFW85gBQH8sxs9zTAuRpg8hVDHCuDHskeSb",
  "key12": "3PocK7rc8YgcmDvYSxrow682PLe8UCqPuvyS8esxQhtysoE5CW1o3rQUFQJLX27eVD9e43rLcBjF1sjAYoiU5Lja",
  "key13": "2DRPxv9VJey7Gp63er1EP7YfiqosQUTowwGvqYkNMFWWWa9nBeZtWbrPVa6crjxER8hLQpEQTSvLF4rnUJy81UNr",
  "key14": "2WSegkxoGgbFPoPwsbYxRGTYiQQ2FoPdWi8NvHEF4R9yRneNCUgqbCXxdqfSEgXK8povD3doeuEyNhJwfTdf3bjL",
  "key15": "uuCwNTKShxLGvTggAvaUwBXNTBMVq4yHq6qPU5ZNmBndhrJYk7ZL3pnpFtpifiFsi4uMhBbox8o6GXxA6zm1Jfo",
  "key16": "JhqdFaArxjZUBbxVMuxH4K1ucyrFsbXcJonujYegejYrVcQ3MTwUtspaJALbjkbxkHuNt6PJ3wHfEik8xYfSE5u",
  "key17": "5xNiuczt6tT3jFggm5yEMqPSVrAT4W2YRGGhxiMdSra3B7S7ydVSEoJ1jr5EkBDZuRENtEAZqhBnaG1fVnH15fwt",
  "key18": "4LFhVjFdvSjfZ91gYj6bZ7MvwE9qBs7fBiwWmMsQmhFKLPQYz2CJj4FGRw4KCsaBAyDwBVjsYjgPPRn47X34EC5N",
  "key19": "4PUiN2stZkh82R6YC3tjscQMRoB3x2uwBhcspUSmjziXgb9kV19QdzukT5ePT6ei61GJBdAha3QiuiFCMogUBw1c",
  "key20": "2jbGN17NPKvN9JqkcJFx2vBUTMQgz6PUxjjecm1LALcixJ5pASkAbemtM38pF3DyhU3qRsJNnLfHRSn98YCVRF7v",
  "key21": "5MobtkWEw3hMLCWmj1ZredSK5Q76fEYBjAM185xrwXSXgZzMsQ3bLtxQjLL2RxuCqby4ft9sT9j5c32f1knc43fQ",
  "key22": "4xZha75ixPTV5cjWpWtYmL4wkYtvtcGTwDtEJe6chpBDK5XSfWX9gKGJtNnY9BCGRiT5GVCNXqQLHgqpVdcvNSta",
  "key23": "4Hzbz621bNp7vrXfiZGb22eiDutThmXbBLgbKPGKFEqrayK6m9zqa7g8R5q7PvPv7LuL9MYguKSMJ8rriENZV2by",
  "key24": "M4wBezzv95shcUFdtmoqSXMLqH6vEzxbJTRdCmeVdJcHz4BzTXrurLHF8MQWsfFiej8YEWv5bLdsdkACAT8X7ip",
  "key25": "2UaFFKNUMYDkVDVQ95PsVg4VyB4GqhxPQSzcVwj29NiPsdXe9CTk3E4cUVSSQczpjstxjJnNB1VvT9mt4CgCxy6J",
  "key26": "2CCLVP5gd2dahtFMrPeND5q7GwD9HpkVH9FqWG88QAz7Wict799z6h88u519jLd4DYiDxbF2W54jqS1uC3hY9cam",
  "key27": "Th346LNQRybgtTSwyWaUBgBAkQBBArkcUcRiTWohXxu9iqxoGvMLXTWNgozGoCLCPGKCd6Kn3FDxfwJMRzwE4VY",
  "key28": "Rmw2YKb8oHAfVEF97AskiHX3XtNP1kvsHPHxGwQyLVXQH5zRmkyTfDPtHr7TxbNAZgzRZBzWMAhqEVeFxLiHpYS",
  "key29": "4wU1NwKi4X4QmtdmXGwQAqEfHegskWyPXYuFVVR1pK9oZo3wXuh9PDMddua9SyNY69agdWQVy9PGdHRwAESraiYf",
  "key30": "2hRge1myKUN15LscKVRQjdjikzaoc63SU8v7NWiTUekkHvjdJRtFg75DFaRqHiDiUgFzL6nxayLL15cji2v24pPw",
  "key31": "3GE1pZJuU4u87isiBJoXTxzQZCSQwcnBPS6SYS6Bzy3Ha8SugaUCCZD2X6xg9NcR651wsDX8M9CnLurWEkJ8TWau",
  "key32": "5jJ2pbDWX4XESbz6PMS8f9479bHqQKQB8SUUQKC41T7qWaVLkGe6jzyo5cx7Gdm1AxCEAo6Mw3oqwTSyEZqNioRt",
  "key33": "4fZxRZyGpitpshe8s6ubNKTFtmMqXS9cbTA7mQYZETYXucPpi3HNG84PoJ3oM9YbgfHpPvg8n7GVVqzB7Ay49uwR",
  "key34": "3td79BueeVQUCzorE8LabZLAgb5unBXdGhPP5ExPoCrZnpTQ7Zcb8c9xKZ8NiY2dJC9H7fWXtSXAjeqwHDPsucjU",
  "key35": "MpnxF4MeCeYPEg78ydSpQYusriNS5LUihafFfhbb6DA6M6bG9uTPtQa4wsG2EbMhJBCB5QxfF4HiuXjsFrys6oF",
  "key36": "5XTLku8RN9XMqdK1SfNR9YshSonD35VGNwAfExocwAFBLyCGTWe3GMc4MGMDwQqdNztNm7zXdgJyT9nqvBKsc51C",
  "key37": "44xMTL8CfrpxGbRmyK2fkykjQPfWek1im2THffSrftmhf94V2Um9XX2uRgKVHTB4k7oy9SuGdcG6cCfAM3e1SE7p",
  "key38": "2R3KxuynxiGoCSfZBoZL1G4NxKu9mzw7EMmQNAh2wDzJRzKqt9pSjta1yLmVSNgVqgHF9otUj9XpJP7fvmn3EpYN",
  "key39": "2VQ8DtQE2BkTybH8kUaxtoSnAmJQNC1RWUeEpVktBD2gZronHboF77MmX99gz3WvQKcL7uUCJ8qZgenofs6MARhH",
  "key40": "3R3z9q92MDWk7fkTuY24q5ZaYcfy4eTdu9miHXhWu5YG6dc5NuT3PpxtogdFhu1G6HoVvnT86HBPfLebd6DpXTVk",
  "key41": "65h2UeT6nTqqdYVvWbvUgzfP5ky2QceG65bs7KS1RVx6MW2tLyG4Vt7JkABktAe9CXVTapT5HPUvHxNgPbEM6Cbh",
  "key42": "YzQY2vhqepMo8Pcg96Kvo5JafThXcNowao9VmWzeGpcw3TFBkzHADooV4XoBVGKqDub5TX8Lbwd4DDEFMZgKsWK"
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
