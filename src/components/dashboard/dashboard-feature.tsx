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
    "61pTgipKLoFJAfKgYCecWqkcKx5JDNFF6pWhj87TmY4fXhWA5cPp28xbE3pk5G9PFn7xbPCCuRd2iqDvKZDDW11u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ArZERZTLweeNzD1VzRYTsZqNP3oWTgGpZ2xotzjaMtJf3apcUcCanMgngfidztiZStYiHiS5NX7Qm8mGwVqgvtg",
  "key1": "4ptu7cWey3FrByoRFTFBAQRugEWbPEnxTUozASj2hjcx1XihecdCEiCSehZC3oAsuuAt63gJzyu6xitZXoudkBhn",
  "key2": "5QuKawT9tDt7WDX9h8RL6dwJ5tP8irnicyAUTgmgSLRjYUQBLwm6z5dnZ66YHGhb2uthoESrPdihYuXqzXM2FgTP",
  "key3": "4JnNPWt62A9PU4QVLPUg7m3bGCSjRBAhvA26dpyszSAMoKaBqDV3dUpqHh3GvkhfwMvqAdUqN9Vt3BnTB4QxozNP",
  "key4": "3dh9Zmrta4GKULxKd4mJAv8AfmhjpYLa2MNKFEdMNDCrxDSoCytMnBvgUhFf95Upg9abvukSzi5BQkDWopJvcPWV",
  "key5": "44o7sqmGLpZ2ESvXWQFywWpkc54eGKuC1pSjDyY148gkC2LgkfP5DEjnb4fLft2qnvkfyxPHL6qBjrq34QQcnNAN",
  "key6": "5aTeoFr9za7RwguebLHJRfiHLDcnhdhmNyKFnLAtJT3Qyhda3rHMivjKi4T6BiFPPf6sR5W9rmXneKAx75nhS1Zz",
  "key7": "3qMTtbhF7Y36WMF16d6JT3B9CpTWVfy9HhJVNKwcirb93ufJtnz2mqW8iXk8n2t9xJLVpMVbri2UbyPbrym5Rxvu",
  "key8": "3AcsJHrJ1e7QdbrR5ciavWwVQHvEkvycnsSoXyGcuiV6xELmZBJ1ao3QQcN2NK6dS82XnVaTzSgWjrKayXKFmCSD",
  "key9": "5oqvZBCdYQ12KzsUM8GEkTzLH2JuXYHqm4M7nwTSY42PTBnqHnceX3P2sLQ2AezUwypDE7KkEwDgheNCk9MbFQJU",
  "key10": "3ZJjbY2HTtc5eD8JPqqcMgHCsULiUDBw2M75Mm4gGZcDwe3pBENPfNRcA3yL5atjrM34a7w4yaEezGuhzsvzEkmq",
  "key11": "5tSc7W6aWoxgeFkPXvno1xE2Cc33xaAJZLpgB9SwccyZZNnJND95gcNrYcNnBWv7FKrBGMg3CqAy7qqSu4SErPtt",
  "key12": "5oqahAUsr5FAMehGykhVPsmAQhXQ9Wb3iXBDbWQ2kxcsd5H962WxbUnmGg4FUHxLst3zi8einCWsmxq17c7VxZui",
  "key13": "UnYGbLrV3MSXM9xJpr6xpZexZbzbHucG7ptQctVQMbCnRCzbQThHynsgMJcpTiBYF6JvnNurPYYcozQTyfhRoZQ",
  "key14": "5ohEDftnjDRncekVtq77qukuxUPSkFRNhbi9FhhR33KTanVfFVpSApbnRET4SAwav3osZYYxHxub9R3USCPG65ai",
  "key15": "4J2V2VAynY7JLoqKwYkM9b96T1k3R8KpPx6BTYQj19idPaKyH24YBJE4qWmnZigDyJpPgDiUJR2ugfWe5m63e9wh",
  "key16": "5fbRWe7gxGyF33EVy28d3oY3qrrBgmkTXU5MC1vkh7vmGCQ3YKLkDp61u2fro7ot8RdCbEjaAKpgQgUzC98q8LDG",
  "key17": "2FQwyd4Co8tG5N22Fxqj88V7K9vf8puSK4AGVpRi4W928oGdJRcDPsCxBJ5ckRkt1eXhfkPgv2aT5KVe9vt4vWfZ",
  "key18": "9DQkE84bBwifTb879n15cc9Xkdi7cNpM15ivU9tscwxMMsxRgNPPn1c6Yi7TSkxYYMQTox9ccEyitLoQDQoyV95",
  "key19": "3RzWUKTvZspAVtoGuwFpK2sdpnQYKpuaCtDvsU4HKwfTaKwZh4ss4uxbmNb8VYkFMCQ8XLF37CuJ6Rm1yMswR1gg",
  "key20": "5fwwoMaES9Fxw7oNLKQe1CokeNDzEjDxNBDdgoSaXcqdnBFsmoxkAuErR6sSCUmPwSPGk6eDocB4XineGx2ML2zF",
  "key21": "2syMcdiFCbTyVo28L9Tpu5o5tZRT8SoX2G6AyYKXjfygYQz17sjX8W7f5RsoNoqQHfUujqCqgGS8aHvswhS9GAKr",
  "key22": "5kL8hKAWxkyUTnKQvrT6NLzDJWtNHouMkpSp5LaLqPsL9Qq5axah3BUamJrerNbQsXjHyxgehMdyfbMdZtKfy5q2",
  "key23": "L52FnaTnv3L5drdnWqhTm6L6bWho92VnNhQC7CWr3RuuaatrxSyKRYaDhitZfRnuAEYZbUbUDMD7z7SRTxgWxoG",
  "key24": "5HHwuq2Va94YXXHjLvQtozSdmyvfVwAyLdSBXYrJKz4Qj4dFPp75Gu6o718WuG513fEGUnywmvfFKMYY8z92kKhK",
  "key25": "2yPG8GACuJzvrmj5Y1SMcbkzCUh1wqJomEQdb4tmzgtFd5x8cSQV1dSw8pQwCezLH7SbBtEkTc1QWqzRiC7Zi3XN",
  "key26": "24HkoksvbJ2UGW55dvBnoBguqyomt3Pe2T9kSnLDKtTDutxAsUEWXxr8SVV3D43aLoDMbMo1rW528zDJdfuttHva",
  "key27": "4grirks9T1aiZGjKX6MDC8TFJV7boxBCAo7P2VBkNw2P8Hs6wpEUS2reYsvcCHDp1Rh6v3cjfL4rnPe4HRSVwWFc",
  "key28": "44iS8oUGwLYzYQb1GVuhKTN7bbLbokCTTkLP9h8QUU27TPPsQWzD3BrhNggdH2CAAc1F7xziRFRViHkLpvSPYhZS",
  "key29": "4d2nF4hAKuT7fRsTkAUxLMMya6wWvVJXo2vATjdbvx6DVxEDRSCN3LbJg5Jy8zziH811XNJmT4FESRYbDeipyKgi",
  "key30": "3M1whAMyRfgnmow6fFTDpH1YrMSNDxwXZmmLwKoTrL1y5w48WdKLVrEmQb3xkdNjtTfHFwkyaLeVPpXEuJv8DP1i",
  "key31": "5ZCQ6NDXwB8GYrwNhYf8BBtqFiSLSxMmA8PiZG8okFBQGTEZ7YEXbmff8mfNtqh1deHNpbFgesimAbtoJ6EmoZKf",
  "key32": "3td1mtYiX22Kc5UwE4kLgXe1rCpr7PdAsmRPH6N3jmNxWtqvZXenCmvqoTpfVZLHQKj2UN7UvtDLQsnk1vnryiCK",
  "key33": "3xfiFdE5MwkT4BoFwxDLFn85XK7485E411N1hqCFwRkhwLNWeSuiYqVEtbZ48isJnEpNgBaTkSvScHE4mtcDFhyV",
  "key34": "5qbWYAXkpCSzx9gHeNR6i4DbQZJ9fafGoid1rH3XkcAcfuvUMGA6FgvNaaKueuf33VQN6u38TXBBVApGCnzYhbqr",
  "key35": "4ZLJviWdfjrSzQDc1dzRqrKMrccpRKqazixscWY8CU8TVGkhKwg2xfxfFiF5GnvpPaY4BS6bFPhpAzQ6f2RpovpC",
  "key36": "637cvMcssePHcjdmuKJq9YCtarxiSBeYzXsLSDW49m8ic4suuNZ1QLsCZSvm7iYYqcHdapKmXsQLtmhEqKDUzceV",
  "key37": "BEVJh55fFAW2SFAUECg9VXyRFwRmF616V9Fgq2d2q6e7SianyPsHzzimZcKehkWrmAPL5NBsW4Dtwoo6A6LUPCS",
  "key38": "2zBasuLfVJ4mnVY2HBokPjrRZ34E9QKgCnq33zCtFABYP8yDH9c61czRMv4x6HmB3nv5yjMN7EiYZytLNs76FoAe",
  "key39": "5zrnKSdsTr3cjq66it64Tz6Mob4Vj9rUAQJUuBqpn6xypjUimAN9b8MAQN8mzaggfGEsm1tGG2ykhTfCYjuEUqDL",
  "key40": "3nykkJ83QrbYQoCXri8S5vjzcaTehh3L8bWvXHacweipx6TCypoqKhW1uZDNzCnKEswWWKSPeASgkmgxq7dGT85F",
  "key41": "3PEDNDDLVKsraMRn2Cg4rsnq3po1Ypu8ppdGSB1f5PavmgQ9ysjijkxbvYvfBVAU7g3TunnVr3J5KYB7j9Avht1J",
  "key42": "2hfdRHqdcUzHNUggH6uNhQtrtUUbL3hzB6KdvCrnxvqVMZhmk4GAgaLm1Xs5fCsJPTHAPNt1Yo2Ea3rgtiy2mpdw",
  "key43": "3hdvaPp9GEZW6w5nrrCX62HEDsgaHf3PZfUX3Hmd6aQB8m8ZwBCqi4vCzFTeZVkf5gNuMCG3bmse63zPM6h3pV2V",
  "key44": "wVuEd7ZvJCUiQZniXo3GDJzBFaDZNhntTjXZAGtTXY2UtVWhQd7Qv9p9AsSxpg6qQkyuriSadDeBwQP51nDK9DA",
  "key45": "2YNY4m6NyfhreFHejW8AoayxzbErF3couTEaqRMXPnPw4hKRipjpmAB9DzKVbrDg8gubaFT1Zq3XXj4ebDt7p7md",
  "key46": "3vDs41ta2fLyqzn35RgDQpJXpprwztJNUU5mijGuQvoVzyx5E4VQ8bPVHpWtURKw1iMgcHT9At9N6teBPxy8ixU6",
  "key47": "4RXNe6xGTsN14XknG1Trs1i669S1bsM3UfLCGL9ET1sq8VChaDDMTjnSun2Sg9z2Xpe7oeC1psEekiBaxYNUVvCb",
  "key48": "3rVSU4zgVpMznV7LJ3y4nNdpjDHKLK7uMYr85ejTqVVd6fpYSRmxJggdNyAdZWC17bURk7QnX5idojpwBNyh3zxc"
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
