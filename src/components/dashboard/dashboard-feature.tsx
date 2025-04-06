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
    "3N7QKhntSP8fom1rn1HqQNzq8PhEW6RmrKB1DGZbzBJAjpmD4mncgxQgew1MdDePfyEppTxZupSL4SpsqmC26i7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Au6AVbtuo6Gy8wQEDAfx7YqHUpwCBhE5Tk3TUBsF819ysxTdURQSUvJ5MiDpKCuwTitiEBaYbA4HBxzf9ApRW54",
  "key1": "4ArXk1Y7yWhU63G4LFPqjz8Xm7BF1RhFLhunALePkBi25GXaYqNWm7sLJEdnetsWxLhdfgWYpD7LFjBTYThJGBAF",
  "key2": "hJmHCT7UjVUg5ruX7mja9eWqMt2SRSCoYRmZqhcDPTVcuW9H5jDEvQ79dsuksB3U7fuNDHdmSLTxfYkceHsTQMo",
  "key3": "23c6eUCgonG9ZCZGhhcrZHaUsfohsFd9dcGvnm58gPovwaj7s4W5BFYFJktSe4Fwrj7W8UPt73VBUQ28LiqeaLmH",
  "key4": "3fAXCGTJysocU7pVfDgJ6ebUunaupTLJZixEQD7DMdW4ZJQ3JaAyn4RRfEfdBfs65zT5e8BC7dhBkpZw567LCF7c",
  "key5": "25EhGTnQZZKbVhDUy2VWyxXn4KUPf26GG8zHunJDsPz9HQo1svUVnTwMq5WrYKYSkuEB5DWUiDhM9VCkfbduJHNd",
  "key6": "5bqw8L2HGSpReHLGPWtFm1QsgBAwSWN89mBefz9ws6SU2Xrfh6pY9DYdN1XS7YFWac6b89kA59tC6hUoFqjxui8o",
  "key7": "5XDfdWNuwDPv6Jpja8y5BKoTgH5HLmkGzBxJkWoFLRpS1Y5uByY49G7PLHZkdmUsV15RdhAhX32h5yJeJBwPTwBX",
  "key8": "4Dv35NyiVUzWegx7E66izPghYJAQQtMfpubBbSaTwU23q8AxkGos9ndRKDFNBjXc6DMXYZArFcL7micUK9PjSuAd",
  "key9": "41xLQtVGchiKbG9jkod5DEGeCjfNHkGQzxhLWs5HLtmC46PQ9eVTL8rmEQqTenRDSk3ZSzhJ6A9Xuu38fcEFtChe",
  "key10": "JpAky723swQouQMEvxvEFjijQYeLkUkvtSKGPp9g98kJgQnYyKAJ3UZffDX7WEfCEdKeGYk8HqdXCZzivumFy6P",
  "key11": "2CBGykABjEWUHT4zcWxn9p3M9hh6sUtv1y3Nyw4YAx2G2GzFL6wdVfMFBbFnvGnHZAtsMqtTUrBkaA7UjcM4bmcZ",
  "key12": "5QnntgYroLwpGuoi9LDajHccuZVzHbAbkSfGjxKnerg4V3RsEo9zL3pJveT7mqhX1L2zozhjAqdGMGDsew47VrkT",
  "key13": "yY3bFwAZmjVFHPdoUSGGqWFTFMqpcYgr8CDP5uwHZkaMJ1KxpEXSr3zr82aZiV6aBmtjiVistQg8rqMwAQQBDis",
  "key14": "4SiHtQ42GCmttRFFvXWKn6TeBCMqDXSyanXpQZ83pfiyGbhbPW2sARce4DNk3uK6WzmM8sAahngoizfsv3eu1s94",
  "key15": "2n5mS77mLPZxpwhd8eDnDXsmZuhK7Kivvtyzy8h1cZHaqyBE2YJ9vymbquYPghTHhBcu6kRStHAM9TQ8VYL9hSdm",
  "key16": "53pWSyk3ZuQFpoGJxgtDkdA4X5Ab8r6fNo7M2c8X6jtD1Gd7uTt1biw2nQFTThp6PvQEDwEHBMZjpsuuN1vcBu2t",
  "key17": "6719WBNKvD3A5D4sB3BxVYeiFGQHU8PoYQwuW9zcV7ud2b9UF7kxDMJgSjiXowxmUq47vk8dHwAGbGHoQZVzSttD",
  "key18": "3XJHhGh5b52FydJWhuMotxrcqiPeJidUqddCLvFESScQRYtWx3RkCdyyLxJLmg2ehdcG4hUkxjLKp365TkvSUJMi",
  "key19": "5FebL83L6BpB2aL4fFDE1P1QKpWJY1CAp4eRZfsSi6inHFH6QDrpWDxC4bgDjLRQcuRkcMo66MhC9TN69JKeCUEw",
  "key20": "2FYosKH13zZxuqRK3sHGTD57HKwoUtBXT7MoqQAiRwmLgqVZpgX2LVCxCBXG5wPFLvCcCLstMFZvgqDswHsS7o2n",
  "key21": "iYMWxXo5XbFJCGQNmEAhZQwPz4hNoNFS1Qow2xG2L3BayLUCZKkP1yVGQ7i5hH4pnwNbY3Lb2zCHdf8LTp8S1oP",
  "key22": "3gn2SKPz3KFEEVgtQFvPsnxaaCQQeJLUKZgid3E1RedKYmUYAT5Yr55vYdubLU1iX9VM7mdBoaAg9o5tizDeESsF",
  "key23": "4a3poaiYvUoxZpj9kTjaDCYYAzDYKRPxmYubx653uhHG3rJSSCUyCkvgXEwghGocqLyuqYwLpmaLRECdwPwCsWLL",
  "key24": "4mvQgcLdBH5XTFE8iLdJJbSi5cMFm3chSq2dYnCnrnzh9J8G4k7c5rAzbT47Dv1Yr8vsaAg4aoBx1eZ5J6bwGSV6",
  "key25": "3K8sPBPWWTJo5VM5uZxhjZoDFLxe6Kp2JiQSUZGTsnjJXE2H6rw5jFwoqwN1RLTWJxu3iPzyc416xCQNn1R89Qoo",
  "key26": "4Yw2Wijjsd6fyvWoPQfyAUK2tATFm2ZxBjJXgzHTo94SVzQ2f6JkG8fzF7UY5NsVRG5h8Jm7WXM6aGGQF2KvDBW9",
  "key27": "411iF7GqP3hnhdNobD16dt4G1BfaBWCBBun3PHWtdFJkXAhBx1Cx6xufcfubEZ6EQwyR8UKGJdYBgVrdSPhAyemc",
  "key28": "3mZEVMPV8EeTDeDwBN8EzeFGAxMR7pHrfknZCtNAeAo3Knv1uSyUvgAwpcfA3fBUK46rXi5LUe637x38unS6pu31",
  "key29": "2DmpnQcqB3Pv5qNuRosFkyfCzFvy9tmYyUoPjknU9FgUz7ETHfANdvEKnYMovLy2pPKFnfmt1kSDGfHEPLiFpH4",
  "key30": "ugPpVyeHvyn1kfwXZ9dqxcP1pEJTgebG8eugitxPkgb46gRapkkTpsoF9TGbxi2kcoQvMhgxtFpMw4pwyX35z8s",
  "key31": "oFXDXyp5PAL1krNb36iZTmDM6Udgr8JZ7PMWWiFJHB5jayV8iSPSWYJYD7LwMiG6AmqaE7uiLnErvkqyGTswB4f",
  "key32": "4iZdNkTmSqoJfiMNu8L12JAs9XfA5e16SsLtCH29D5ixNbATzKUbGG74RG26sKpqzAdsgMxVPrmodf9SRSmHSVWz",
  "key33": "5XZhT3NcjptZKJvf6VxWiwzjrgoNSkEq5q867Rv6Wgm4oDLLiKNitdGkYoaWgcqg2QViCFGvC3TjFQ1srUyXRGzt",
  "key34": "2LW8Ew8a9zmZ1GgpJrSs8UcseFtZP2av69wRNZCuUsHaD3zMQ4YxoyPXmoFV8hHMb9xVGnoXfvXUysLq4fXhBXmE",
  "key35": "N9kM5jm3Bnq72L3TD2xJBBXTBhSjm8gZMMgM3PaEHhEYtREWukrVcceDZVS3fohHeULCEozGE2cSVRvigcH3yiy",
  "key36": "4orqxZv4N4KBLJUy31TmewwH9nCU4J83D97JKwqhyKXWkYRPfjRtVvR3SBCgeJdpFte5ze9hDDxVymdRV7CYxXZg",
  "key37": "2DnBxUr3GaUSL43EtCk2P6K442rduFZqhUMB288NuPTuFxss47gYTXKBxNUXkDHAGDh8i2NrSQtnzKaYXnburriC"
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
