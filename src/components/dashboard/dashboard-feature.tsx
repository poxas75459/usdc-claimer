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
    "3Aun8B96mB4ti7hMd4pFZUeK7MmoHND9uu54J81uR1sHViSHpwGw127ZoohAkFvH8yhCEbstE8TDgpDQ2HJ5YFhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nc8gX3ahRChqZCCcpz4vZmSd3Godi8s8KmoNpJNJLBo9U2PiZSduNtMJAMb6cujMBZCckPo1vpNTggCw1q4n74z",
  "key1": "48HrwY2tBdnSBEM8sgZ1yTAVFAs9BwxDT7UmQdKUC34bDXg6EjGunmTP8uyWXF8vVX584QVRCUoR9EqaCjfbVNJK",
  "key2": "52TGxGXfgJSPuhkV9Wh8mayEQm2D572XiQBUHbUF22gVMRcKj4QNPLQ9TnUPfRd8kv3VCbxGE21v7Hj3QtZsPLzj",
  "key3": "4FsQYmg3nY6yWhEYmBAJ7EX1SpVSjyTkAK3cQZdhjrWQsf1co56tVvVHKvzbXft9VvGjWPnHkDgwvyidrCB889wE",
  "key4": "ZQ7UduLNgKp2wXns7og4oFaPxf2HH3DU98LHMvEW3Renw2DNRuD5gGYiRRw5zYGWnkNcYZT8iS74oCsRAwZsuv1",
  "key5": "3C2vFP8h9v1gtgFVxnpTE5cvqGX2pRdQsoEHP7JoGvophpdLphZJZM1waTArwM1gzUeeTR7ovnbvmj45uRoXyk2Q",
  "key6": "5jVSDN1Vf1b4kXyhFNEmh7LtmEA8KGwv2okGcxJVzUsjW7mm3YJm4unb6aMGcaTBHuFyygPgAWewEf9xRKhVj2uk",
  "key7": "3bPcSYz3LQ9B6Rg1AAcAVQNjpNmJRQS8Wxp5EcpDPhY5qKdPBYoHYFNobM2aUJ1LhGLPDsoDLwzBPECfBA1LAw6C",
  "key8": "2S4U6F2HvcYJvK7HbQNLSUtXxHu9xY4JGEfeYzeAkahLRQYETqtUdmeDN5BByCaCAocpwAf95hbVEdmMs2nL5S2x",
  "key9": "zLaLAFZyWBdEbYKa4gZ3d332tgD6oZKFDP3Qod52RQeAwK1WDTtvgUZKCPwqQWgHZVyN66EkTDjKmU22gdk7yWc",
  "key10": "3CuPm88DsRwap5YqxgPKgMDssqhEm5ufCvN2c73ENZ9i8YiKzmxW2EAYgBcWsEHs6iTqFj7tmZvEX8dbMLuiEipv",
  "key11": "5yYgYUqybZf1vf7sHa9hf6DziLiMR11QVrEHMU4iL5MohUCThbnM5oAHLBmVyxcqa6jbGABfxzG7s2et1ewqAAzA",
  "key12": "2vXCD5JURZ9MdCB7vthVYzrw889rGCjhPfHryBBgvYNRJsY59TZAihYy5YyBcf5hkKsHXebmzSb3AdRFuP8wNdhu",
  "key13": "3n7SFz6gezMMtCPhXfmegUBEpTiMV67SjDaBFYkrM4uMQS9TmHiYpjVtxRAs5VaZdZq9MYRhjGnZVh9sr4P39h7f",
  "key14": "5ypt6R1bQmLeu65bnJnSttEz8vr3BDesgH2JAgH454tD9WzqTuLgTPKn4AZ3w9WuRmsGv8Wizoovzqsb7Xr3G5i9",
  "key15": "5MtE23KsthJF7wBT9Y58Lu5osAmznoWKBYUBKHo7YsvFeRHMd9Bs2B4PoHA1grReMHddbrKijLAgLXgNpBhaUPZZ",
  "key16": "27bFzXbNo4VjUQEJzMF3TEaQYxazUm5jjHP6UNoaGidmRjvnN6w8Ah9zTKvTaiSdPMbRauSxkjNXxDWSyp6dm1y2",
  "key17": "37jGkBVcUKPpfhEuxU6Wsdcw413yvteakPAeqxBYw8Mw33kgcmDE8M7k1evR5KMUEQHwcBJ1CCJRJPXaUS11RGhK",
  "key18": "4p8EU6sYmUdfYS3z6iNcSgNNHtq5AbVLxmijAPbf3UFk9Mm7KVcXe2LeNeBEFUaertteGc94sW8v47pt6GFLAtdU",
  "key19": "bQ3hLAyaTcR112Z94T6CqJwjQxYRc9jYuhboT366phAx8fJbSfvYbjGnsstyQuSDbUcBwwWH6958MhcfQTA3Y14",
  "key20": "42uH8KPitNaeMjgr39xfTZ7VGkH9hciD3WuHAbLhE58eeXhzTCaM4RP4fGXJd4azE3BotwnmMKMXPZKkknLEeaMX",
  "key21": "mvYfQp3m4nTpBoEUeA2eNbGTYpRWbzs6uVW9FvW1xU8RPjBPExD8nn7Yt5R3vaq1aVtCRbwYmaRtrrS7KHhVFBU",
  "key22": "4vbSXFQm4VJQX3kPBHwtYhuiSU6tTaVDsN7AH2yuSLtkhHXXq9nxtLucWNB4XfpsbfcJF6nPXpKNV7VMsuUDMMKC",
  "key23": "2SHRQdPGfx7GmsX37CyiDRt3rZcCzdjbiPrmiEM97Asz3RRLPNycg6mS6TY5VdKGPbDwu797wBitpMze1LkCRevC",
  "key24": "2jsHFswGiyyuYakfsFrXhjqE1gSTFfZgcS2FMZRA3Cdp9DJbrbjAvyVnKmcuZqWMqbpeWzXVyLB28cVjCv92GF9c",
  "key25": "BjP7qN3wMusJ8XUgoPwVwe9jmNiX4N3HSWDr6x26KGZw8FS7PDnE4mLpCCDWotJLrz4dVQEzjYjpRasJQo6ECuN",
  "key26": "3QvyhGWaUSmMZ6cT2rPQpx4Bb5JUwQ681GtDsBErnp8jg7ucsdwMx6WW5ieFaRjfMG2WXPMR2NVfhYpUPXKGcg7Q",
  "key27": "5Gkvyjp6jVn3mGKewpqRmVWoEbP92fFaWNipGYUFXAFDK6KCJPyAdcdrJw3ekzopxUqviUtyQquCiEMndrwYvjnT",
  "key28": "2C9NMdjvUd3s4pMoacNAn91TNbUpnuL964X6iFwoDujd4MM7daiTaXVwoPitafvfMRrJZ6jxSo2VmYwzQM2dZyR5",
  "key29": "631Mjyh8UrJRwGDmVLxka2b8x5bWMpaAMTJmNZ38gXcoWAvQHEZQZtpiSEidwaN9h4sVjX1ruWJ7PJsEqE3sMbwt",
  "key30": "55whZW2yowwtanMKyCu4tGj9ZY6U7D5mzhAAB9kjqpXCCApL5v6rnU5Rnyxsptk1ew2cZMyPkepqemPaKDBJyPGT",
  "key31": "5Qn5dHqXe1SAkAKaSdXS614b1xnG2QjvcardFb1U9ojKhfZKnpji17meoB9ALh7K3dqsnTNppGyg2Jt3vZVU3vZZ",
  "key32": "4BjLtgBR8aZJbbriHTMUoxHRRtgYkPqZP61kTRRsfEsKmzBVt7ny2GiLpFtkoiKeLNyivZWaAxoP7s4n2xbTf6Am",
  "key33": "3ouNmUZGoV6aB3HCAoW3CocRzdkTpUp36wL7kFjgfE22TEDzTf8U95Q5Eea67yvwKVsoXZxC4L5gG3gfoiaJjQxh",
  "key34": "3X9gbZgDr3TaqNCJT5ADvsLuoARiULfJ8RXyPUXpcD9g4Q7wEE9QzWAuzK5WAJfyU8LgNqairKjGcGeksoarueDr",
  "key35": "5WawhkMDtD7z8oupDgdk6wcuS2BE9RVDa51xbP1SeSvsq4xtAVW6GkGwg3qF612MHYh92HbvjKWDYZK1kPKCauqy",
  "key36": "54xMg7ubB7LmLrQJ8SoUA942RQ9tTZv3QSwQdpYfLndAhyrau1YbYijFHuKwszZzNvz884EyADWiS7eDETvZBZ8b",
  "key37": "5C5qinj1pfZ1Twk1WFncHJF5wBQMqNTbrEmLT5rQVYwmtLWjerNqibKyidCVc6ztjH9VVZxYYd4e7HjXPPmQY4QK",
  "key38": "5JPRjekeopat3yJdphfC8M39E4As5DanJJyahyNpd5zZhpzSEyMNh3qM6szJ7C7yjCstUwPY9qzBkuJ8AZ8zT41Y",
  "key39": "3D7cUcRxVCBoHdAPptKkWsF9nLsHcFsjuUVB5Zh46GfPVj6DsyByCWDuqa5yWSk8CUU31534PRdAwNc3t8RGAscY",
  "key40": "CgHdxNaB7x2UY7RD1V2aWcroLqbMzhrVJjHTeNENWvpmJKwZ46k3o1apLsGi7vu99TkU2QDEpADVWhyiw4URUKT",
  "key41": "31t4zwpZP1p1D1hwjsA1oiBqY7fQfbQiALLP4fjpH1qZhnAdwKrtUjvFZRxpCkTPGgfBHQPrfkNfFhYG7VP44egE",
  "key42": "ckTyakCDn3jnxYC8pPqtkBTnbPXLRJCYNEJXAGmbtxmJ6L3mkF1tmPNWowRP4Ke8HGM8EdGLmxKD5YqS3nJoAGJ",
  "key43": "ACgbNmsE42DYzNcXD5bpA3sZdB8MfvtBc9HG7ycD74uv2cZDVpLkGnTbYjM8CQCrjVREcGj831s19UNjns8gUsA",
  "key44": "4JXUCRv9iyfLykUS1S6NSQrcsQTEN6pqcM9V84xFme6u83HAgi6xAcsM4oaGnBcYJBg16huioYN7114vgTm89pSL",
  "key45": "3ceoParem7oLB1tqMvyrbEu77k28m8xH4aaoGb4YVTwZryKNS2azafbV97gHvfnnvzzfALvPqDDQFfZw71vL7bSC",
  "key46": "2c8FHFNQGEGb8Q547QUuH2eVfz3DxM8H6pLvgFFnoyuf1huiqExm2Zy2nqJ4tHSqqpqDivDZW9p1AftDSAc9ix7R",
  "key47": "2G4WZWQfN1tfMPM649sbixpmttpdieVqPCQTrvcpF4PqD2KDPZcaYVq1UCN4Qqn3pf4a4RxS78TjvTNEeGDnPqrP",
  "key48": "4uPDUZTpFtfF2zaJHbxPqFuXhbm6PaXP5BUdo3cYLP3E3UPM5sXPNkm3F9atwkLNVBh7wpMwKA1GFBwTnG4FjRDQ",
  "key49": "24ngzAZ8bDsM97CycTjmrWReW82YLUrQbHeyRrmc4vhyL42eRfdN93HqJhz5aP8q1C8MzLYAFLWdAEPFm6aXsR1g"
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
