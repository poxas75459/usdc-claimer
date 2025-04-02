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
    "3QEcNJZq9LQYfovTJeEbkS596fueMoqfrZ4c2U9KEMUWZu2ViRyWP67JxLZnrx2coox7sFj6C1nZktSMkRBWFNVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lbt126C4yEzk2qgPTpk2XcYMhdqAZjJi2FgiyJU2vQjTmMBRAbAZQ7uCoVFufRsSFz1EcsArucUW4HjfS4GNwu4",
  "key1": "4koUCVvQeHoYnoT9LTarZnrvMVRabNNuFQJ14h3gSfEb5zxnDsZTTysZfiBJdkrmVGHWWnPhLdZzg4egeV7pWF3k",
  "key2": "pWDX8SH6KRZARyM98UyaQDF1jsvkNECZReigPmDTBdJqGwU4Uaz6niLnLJHC7D5pvbKrNgXhsLpMbjvEMgVx9cQ",
  "key3": "621cbGJckxiKnW3W6TpffjtrvT42GaV2hfVoQKsQd6acGXMw2env8VGqB8sGSwFopjyejDGqPB1WZxB9MSbzTUpZ",
  "key4": "UeTCAZvnREKhrD2LZuxpAcnSwTxCZKaYA19UPHVKvP6Z44cQDB56TBEUuJzpqGBDfinbZB2Vdvsh9SawxeXnUy2",
  "key5": "5YH5TWyuTqkn2uusFdMxBH8YgmfhGSR7HgkfUyLH53ZGXTY4BWCuZ5Jb3TyWrFBksqCWR6V29zMXHAmUHGa5cUio",
  "key6": "41z1zR39Sn1JvRXQe5kxMEy7v4rEgPxp9qnoh4LPtup8uT9ZUV5CK5X9WVRmKLmDYTQ5Q6yoKDDxzpxkzjYtEfkf",
  "key7": "4MfVyrGaHWKWaVqv4gvfFArbXv7o1hhcUGKGUcuuGFVheFQTktyekway3CmQap7BLs2rdEpSM61B6bn6zgHZHjTy",
  "key8": "22MADYo4pbFrnTsroDcdfDR96P9EJ4ZCRJdPNNGmLNX6QCzBvV7giBPSSpwzqu6242D1y4AmkJM5W22jDiGPcxfh",
  "key9": "4Ljwbah4GvenMv6GVstBZ5PNnJX8ui2FNk3jaytwY5iWfCcCY4LD9WhHoeWEpyVX488gdetQzG6WhHTQxRxD8J7j",
  "key10": "5dPdhb1ijqQgre3g7yoK18xtPekkpercvWj1TJo9BMd5Di4dRjGfrAG84yXbHF2ZiUvPir98QeCL8PRNiuv7ivq8",
  "key11": "2U15cBqbz2dg7NsPVRzXXCCfggPcVQWwoGZisXGyCpSUQQ9fdstkwraNMBuvHPVG1MoPsckZ2C5R7pxdm8PNmAH1",
  "key12": "5qvoJ1rMyG91KxSwuWdq523N7w252K1jjeQ3HYswtYhZ6kjw3doS3QRJwmgiiJu89yddE2ZuGp5E7E1vSHSGGhSx",
  "key13": "33jvRbcgoUNjAnxxpya7MMxWNwd1meCNpxbgoTzEkyrK8bporD6StW2gUjdGEMLptU1snUBfPqX3XPAs4cb5rkTP",
  "key14": "3RhCa4uF1QEeeWihkFYpTSUYGDkf6KQCpU6ds5BHtvWbqjdMvnva7NDHnesXnmjhRSUK3v1Fc79C5RA69FjBDHtC",
  "key15": "3aKpx1YUgFbVdH9NNiKV16VbX4WuixGH1U9GK63us4p8qZjW57zwcVxNT5tJawwCY32u717vekgA86fcFX7Wj2Ht",
  "key16": "3ywRzRNrpeKj5gNmfxDD4JNheXAvxu8wmck1jg17LbqoXipUwEP1HQGyomD3M2dubitCYsMB4KqYAR34P3ceknUV",
  "key17": "35387KC9JomqxPMcmFArbMNGGyPa4bpmkU1ZfLj2AYF2mGtsYEGf5fhFDMbv4b9PiahuRkLRNSNhRcx5xFsnTvSW",
  "key18": "3GwdQ44CYb8o6GfBgywoCfq79xh28Zmfu1aJFvKJcXb6WoM54sdLXBcdNfHc1T7jg8SaUPGggyV86Ao9j2HwmEoG",
  "key19": "2drzECBaFWfe8pRXSS3qWFwpdhuLHi5DKHDoWu1XnmBMyrxg2G7Aqmz9PeEdqtoXovPreCEGweBysh48LbPgMcXb",
  "key20": "3JPPZhFxnd8P9TKifYJ9WUshQV15SP3HwhZzZapvFyGjhXnFV3aGUYnKT7otJrkHhHt2bZqayVYW2RgEBSv93K9v",
  "key21": "2wFsf8wLpnQW5WiWd1B4h5KEqvNPHoSzQWnJUWMNVpdttoqwfsYR6S5KbTUzEUrzmKDK5HySHm3ybtdbrDhcRcDM",
  "key22": "5e8VyMfjBGzd8mJBBJTuZMHDjRU8nvsAdVhJA5moS2pAM8yKrbFajrTa6BqR5s48BDUBiudcALU1iVgT1dYzcp69",
  "key23": "46e7xvbeti9cMUV7jwX8CbDgmpdgy1H8kKBZqKcp35kgDdkrxxLiMHJbiKyZwe1vo7GPWrEQedns4EXLJnkMvMTP",
  "key24": "5n4KWFanRfTUE1zST5ve9vjW2oPZTt8HRrd4aGSecsKwdyC877dQSPwD6NUAfb8hcYkAqQMyppUV5AAK5NM2vg17",
  "key25": "527xi5B2Jxfv2xd8JmfkEjay4MPA2SH59oDEfEqD1yqPNidZdvzG33uM2cfpzaFRUpgBuvjEXWJv7Ge4HmYxXqRc",
  "key26": "34JtjQjrWV7wUzuUF6u8Zu39GeV7X8eWrzeCDYPvVErz2GN3P7rbr5r7YXT6aUjB59Q52tchKMyaSYzagfUd6pXF",
  "key27": "5VZEVqykVMD8aY6fCjWxZgf4D1p8Xmy81SVaXVSqNqTDptUVmFNWuGHW9jozVpf82Hx8hEe6mf53chmChiCX2pWX",
  "key28": "4g8HjCx6ateXwGumCLPYmNFLjoJoitrFrbeoxVxwnfaABihzCcMZerjAtCmfAEhkxWCA4Tc584xkv1UARfRTP73L",
  "key29": "35Q18VB8J4o5vyqVMRnuqyv3JErYdwt8n27skFYbt5iNKdmGSuoKF7CejQmhAMnkVM4AwdBdbafhtUcBADY4eXsG",
  "key30": "2fA1Jfuy4eQoamDPHoYsLmJhke8ZyuzRz7sBgRH4MVrs3RRpCR8ouKJw5KttBSSSneeCDvSkWiBEQtcQy839Z6qC",
  "key31": "5v4EYcrP4yQSxY4LBkiKydDNV6GCRH57pLDbNLykCEL3YoqeUS9tsiwiewytTgwWZSjV9zZ5En74KVbbo5KCNyG7",
  "key32": "54JrLowPxogeCHQWP3BLxBw2yrgR9ohKEP2S7eXz31rfqFfN85DatQkkrUnRY9APig1gg3UujUo1PX91XLFx5x9k",
  "key33": "4pLnGt3aHxGBvwJBzBK8JuJmau9Wu5LspvnLd7ApvMbHwbN1aXs4YiYrjSgUc7CA2dXA9d3ssasbJdF9FHZqCsAN",
  "key34": "cRbFbHSS9L7rKGJs1rtC2jR9LAnbmoJwS966kQUazZx4MQhEkR45PCgCG6MNujiyZviJyvRjZkQtESCv75PBsXU",
  "key35": "2YdHmxZJ49cwByf8XTx2uJHjP4UEYp86RLcppwXjfLtLxffSQH4w3fT55fgC3GLQApC1qjiJ4LX4S1NHTUZJREPP",
  "key36": "5vmEaXAgVWCP3i51E4fQSTG7XZ44apNfKj9F4kyrGJns5VV3AWqfzdsFqauXxVBnjstTx7LppyTzgYy5KK9fKYiC",
  "key37": "4pPHNNchZE4FPLmKsNBymdbF4WiGfDJoU1fc5wHGU3qjVyeNiiDjhRg3D8Jb15rbj8bXVCVciKnFUYiLSCDraoib",
  "key38": "2tQu1QQZXeyu6saNsgT47X8MaqjtN7ikHCi8Jamc3UCLYoG4YrVw6SUzT8RPAZV3ikexPQyNTNEEwcQeHu8NppLV",
  "key39": "2z2fjTou9tf6w92nKRHtJvLzpdCBPwNRfuCtr6PvCwvkt9GZoQ3TKKtU2c6RgUMUUtvLsdxz5UL89eFc6CEvNsQK",
  "key40": "2hnPGhjuu1rrL6veuvENXEhfon45QgJXRDZqLuAmyLKfJM76YRoWfpBVvkkz4AxyT3nc5LKu3izLsMZsvKK59h8E",
  "key41": "27H85dHrn1QQLB1i2ut7FLnQDiKgcqdpggccqQBYbxAi9mcLj1sqTe5J9xovbbbdRPWm4MCugDWzUVAJdEipjTyR",
  "key42": "2LxYpAT8sEusPjZFvvAjnhzWMPbXP22PUn9V9KLgKvm6aaYV1vXWq9TD2HgyhBFD63hUuo26tnHc96TVigxbeTpS",
  "key43": "2EDCQtaeKZwX5Son1K1HmP5AD4xAJgCSarynDVZNxkFxCtzEcgDgSQ3zuZ6xnEuC5kwDZQDSkJJdhXXW9pET4NUk",
  "key44": "3rUjptHCid7fXb5scdoQov5dzHbwxWgt5WgWymofK2BDQo8CzeQssJJGf31G34ouqqpvwzKVQgmGg2TJuXyAXJQE",
  "key45": "9GUe9uRBaJ4Ke8vmepFnZXQvXUGcju97piXBs4FLRbmZQnsR3iiczzgoEpTv8AzDGbC3CmyRyRTRRyeBHA9tLMJ",
  "key46": "4dVHXojsSHNVodcKzG8DWck3vXWZg9kCjmFkqMMqiMwutekx9uq9mPEQxrGQgwMUVc1AQhwQ3ACSMJq6h3KH2hPR",
  "key47": "3zDUBsjEHwATeHfmSU23sdHQhi3XZpy1Pde1HikTZ51xjNpr9zxNBcPj9iGWzjMztZVBFqGtcZDegL3BidmWi8CY",
  "key48": "4Pt64VQyZiuKoJPNfBpFdzGPtnr6fKwUFLf7RpLyqEMTUnbshfeP8Go47o3mKPJegcV88jY1w7eadqbQn9p35BfG"
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
