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
    "36n9BnJptnyQcS9orikPmbGGgCjvwXrF2nyk1q5883HKjUkpARKK3gvp4Lc5Echt841CJRG6mTQWxi6zpVgThSKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gUsxX7YBAKE34PzAUqyiY7mBeqXvnNb7HoHhq2CLpUpsAAv2q1xncEt4XrUXfoa7hQxpnqehRzPKo1BqYMMNpzH",
  "key1": "2UfvKuoiA1gogj2hZhbaiBE5GxkXdo2ztU85oGCsTYXXvcPgGgFSFN1Uf3AddsyqnC65AwUAzjaDgKjSy7V4V4C3",
  "key2": "2XtGEK3WbPrCoLbHbBax61W3WrEZqabwRQuHMCM5cY9RwTgBKSnZKXaiFm22Z5GQmUVZQWApNaoiZrGAyoDxs914",
  "key3": "2d5eHpggmPkoC7pXMF7mRXccGXmwi1vaC5eUygCPzFMZtG4HP9oA335yS6dJhZjYfMqZkCAxwaKccwUhkQJrDyCP",
  "key4": "3uYJvCPQt2JK3moATLa7wswH4eLcMqwccCnps41pvaPT8AYx2VyuGv7fXNuFBe9AS3MFZFMeBjhqQQb815arKpZb",
  "key5": "3DbiYpQX3BsXDgJSUfMJi1MbjvrAwqkKmnqKsgPZi99itXYJTp3p9tKMseCPTZky4Cxq64TEk3tfj7uyVNCvzNQP",
  "key6": "3dZjCeM5G6AepcmqHjo7MJwnG7o2SNc4vR9QbEsCBUX6FBGpxxY1Ay3MzjrKtMKkW1M2FaRuBqNgv15k39EASUvG",
  "key7": "2Tp2N4MayQQ96WVitJE1URmfnDeFvgL9JTqbWkSU1DDe8MesCenv4Qdf9EAYU6wKn6F93tLTmFALWDQXHueLg6G6",
  "key8": "3vpBXNQ4k4SKWqkfBGDfqvUMhCLdT3eNUjwMkQn68MrpbCnQdpx5TAXaGr9BD6jAwUpENoQiRcHihEGfwVGZrCxT",
  "key9": "2nSJZ5G6gVK1dodvyxbWcNnsrwQR2FPrCWdAk554X21hajaZoRZeZSYxybCz8nP2sTD5pF2Qsa1s4hGo5tpjW7e5",
  "key10": "34KLgSd47BTZqAf6hKsNJ414zCTCKso74zWkXAvPK83pFkK3UbAFwNS7KbrZToMhxQFe3oyoJZBiKAbi6NfAmU9o",
  "key11": "wZEyzdS4UotD2THo1cLJhuxHZCnvTsZneeQ4PdM4Wt2iDXGhFJahbM5AmTrEYTTFbc7K2UaLWSrJ2qKyVXbwDC9",
  "key12": "2QmegdxATUYcEaWh1QoR7kfp1nsB3CupSUPBEqQzdEDLpoN5dyMHzjAsmBSPgU5LiKFmd1XcVTRx5EPawZUn3Pd7",
  "key13": "62G2JFFzSD3jUuaVZMnBYQrNKmVVCeq1TpA3nYpxkG2S7GYsiEcDiQucRPwFEDVkGGm2rsCWxttT7nrm5sirZofm",
  "key14": "5EMgckMdcp2urYaZFCmcjMM1LZGHm7w1TbwXEEDtWqdgaQ2GUMpdbhDrZPBs3adXuXwdnN8vEbcsAdrgiUD2wVUA",
  "key15": "38HZ7MwvQ7Qc6FC3K7W6hGVYwbjuYgTcL9oz2HXFY1Vk4D8b5r2GajWsKdW7QVBbrnimkcYaY71iHJNpvXyoMWnW",
  "key16": "4Gb2DHEB4qXNJc8P85aooqc6iVrC4etWQ7hPqhYwZQ2DvWjVrVsnY7HbCsxYEWSURqs3Wcy7otLgBxzBBcRUjd9n",
  "key17": "3yj91SLCcYQ3iCWVCQoXVzV152PGoLdjs8ji4Pjm6wTBPr9CcVPjz4UrhA46SDZ6jQyvCFJ5Lw3UnQpHo4Tgm6Jo",
  "key18": "3LFFdjNvXfauY3tQb2yQ28dr8UCwH7S3GjiYtQvLMPJnT3zvY8c9NiGCyp3JWJPYtPosSK1t4bbEfyuN1Chdrfu9",
  "key19": "4Bia95pFK41Ff1U85KnZGqfaq5oATWRZzZ4o8WSMb87KDQv3XGryxkJC9xQy3yyJrmmEaunRWFs3tWp9kQGZcjBj",
  "key20": "62d8AfBTsryAWtzFkSf4g1ddf5VA8D5ic6RY8qWUx7hXNCxvS6YLSt8mjxgYeapCUmVRHGNUPk6gXBvFLYZ4HwbB",
  "key21": "nzbBwnrX5rSkkP35SD9nuBoTb7SSnKcombb9uDrzr2qfFwMqpETMWiWaZfi1AkzLSkXRG4HjLJ31Q6ZFQKxMe8k",
  "key22": "3dcdLDKGFFtEKmbhtcnpfznikLSiNkpJxcdhpCeTWYgPmvaBWe8mUjnzKaT7eb3cqoo9xdGdu31ziaHwL1jtV5Nj",
  "key23": "4LbTs7hSQFqMv42SnFhAnJ4dTafQUqcfWCp3Lz7hyjm9xnjmfpCLKbnpfrfrYcLu3JPukSkRjLcHmzVAkxAzSXfU",
  "key24": "2sXiEJwc7i7HchhdPqGD9i8ZrMNVKVBRE2ry75SGp8NR2pVorHuD6QLHfWmKYb89sXf1nNjSkCNRucywwpUiN7Ys",
  "key25": "zLdfeJn9G1Yu2PNsKBbocwco9bDnuvEjehXLk5EVgaeMHTHYRB6CVgDd4mFDu7pbuQGHVefMXM1ti5ULEbykrYP",
  "key26": "5TkTodfvq37KNA16WVLragHMtQYmf812jz9SY7UuMbEsfCmDF1tGQ9smj6aQThEaTikApeip5necfBbXsWG381tM",
  "key27": "3pJ9TqXGuUcfFQxftHz6BivJq6EyZk3UU9UiAn81q3ygYqkSKYfi1oJ8t1TqiRiabfcYAR3bCbVRJBGNJ1yNbN1g",
  "key28": "3unLzrXabqBXti6HQTgPsPwthfTyMy5NX3GA37tGAperzpQGHUhiSfRvFbUqLp9MYNXujbMdFGVHxdLK77dNGy47",
  "key29": "4sh33iMRoDqCurTM6tUi8cYVbXGfXHe7TEBPGjyNj4WDxvSWPZqAzQf4vkKeXTVgDZVm1hci3Dn6A2zYJBTdNsNt",
  "key30": "2UfgQukbrnepUtDtncQsW4PnT78TQRamkR8uL5HTrzJ58gxs6fhKuZPcq3bxLojcvqgPxv9pCE6EBmtkTRYaeQDA",
  "key31": "5pVKU55iNHo7YxeSLjHpgycSRaULXFBGoRXVUAf6DiRX5tpLakqR2GKqcEaF8chpjszbg2ZcebyK84cfrf8JCLxv",
  "key32": "5TJNrs2X17H4JQ1DCNdCdyDUiz67wZbp2EsjZhjDikPE1h75NSHZXQWkLM1CqvFmJmNU1xducFeBe2GYjCNpApgB",
  "key33": "1iqTBYHkHxkYxE5tiD99rotaQJV1HRLUJTrCmgYRCDSYVwUVE9UHWqPc6s7LE2cgoPh6RYKEty9JYeiq88Hv4DY",
  "key34": "2bWQm4Xt7q1zKHWkhncc1Uf3g6Cfw9BQuVvJraP5DfVbMx4D51txVv5NnEgnGwbTdJc2RRyJ7WLGBMzFNDLvpoEq",
  "key35": "4NHLDC8FAMSerbcVnRav4q3UmsNb4MbPrXbwfMyEXWAnCV1Fcno286N153DbpzxUhXTRhM3s6cEwhhXei5ZgzYc5",
  "key36": "2FHo732TvSGXLWeJU2iPA4Yp8oBP6wEkvJHJsZ8or99gr6snLSqxHDBsJvjGbEE6TCgNASYiWBRyLvRAMUuaw2B1",
  "key37": "2pN9UK6q2q2Mjag7QXw4txTkFKcsJ2HydDKjp5TfLzbPF2B7sMfjm2AcfwyaX6ahYJo8RXayMkvDy3d3eVbN2tAe",
  "key38": "3dBDWnYGGZnusnAR7A1AjK8gLTDrssJHSQatpzLYM952h4bWB7VaHtf9cDfshMJQJWs4TtPMVAnvnffNyTCkQkSE",
  "key39": "7b5dZcNhuSf88dtoTJcaSbVPJTUR1GocxikA8VcNyWPHRcZc2Z6QX3dTTgPHADj9bzeHPFcNFYeLDVehAJRdmoz",
  "key40": "3UqpQyLPgzW9KR1F7mptJsWWZtaX6Ur3C2ybqM5HbD8cTdL8WMsGfWCHAqwop967zseWfC8wjG8nTVdwq2kg2Bkw",
  "key41": "2wmSWfe8xo3Ktp2uSXq7GjurjtF3EC9XsFTFgypD9RaFiwJs8PRjfffFwCguNPwTckuHF2pXhAGs5XBVjMQnNvDi",
  "key42": "4bE1Yw5qBsRiMEK1M5X4uN3kVeGUYS64cQqBWs9FGHswrMXin74jAQh2gNSw43onJhgADwZZKa9PCFSnh35pGyzt",
  "key43": "4DAQF7yMADdtx4XqhZwWf3ZfggorZm4yUESTedR5ZLCbPsRp1sD96d2mCVdd5KWSudgunRC9KDgu9mHiNbxko9pB"
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
