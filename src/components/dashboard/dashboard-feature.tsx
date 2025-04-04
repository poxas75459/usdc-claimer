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
    "5nDJJGAuBm4oRYcs6HYS8VPqsuYvEh2va6fu87z4w1r2xvSwjUiAmk8fYGNENuE9m2vMyiPnCD8ymoDARshhpEfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bYpYunJZzCVPyNHRXzsV6JJL9m56Esmo5sxqv4WfbwVk42tZHbRRcAATh7mzN11Mg88h5sF64N849ywycT8K3Tf",
  "key1": "3Tj77zVibAo8UA21Z6WXzXp7167jMXyJWLmhEMXaGV8xotgoGCuGCk5Zd3dkFi19yNqKzJFe4JXzcL3CZ32Frsdq",
  "key2": "37gc8qRRo6NhhF4AqhiZQrRXdHH8XVCm9eTXZ61yWJTasHkiunAKa5RmtUjcgm1y9NSNG6UiH3hQ9J2nwHd3FuFG",
  "key3": "5h4EonL8piWc8vmfuqCCSuxBLSY3rM4U2ymcSs7uhrBNnFejkzeCVA8CfLM3VNimmBFBHLx6nxKcbzfsBwmff4F4",
  "key4": "57LFuSmuqpQwKAvMEhCSnYzjWuaYYMuWnTx5Scpox2dmEx1HPvXkJttSF6AhPNcXtWwQNTe7WBq13pvLP6Cwk2i3",
  "key5": "bumpyQXBUbViEfYpB7NUbhBDgETJ7x6cMnT5uvSMgJo3VNgfFhx9GKagUNtqyY7nZMxk9r8NYVZRuenvS2PDBFk",
  "key6": "2jXF8Fq38PMp6nDTU2LjFBmMzNVYkU5kTWyU3kb3YAeU154pDLXrSJ2DQQQKfjYQReUz47Z1sVeK1FiDt4spqWS8",
  "key7": "4zFEvnvq5iRg7RBHr2xyc2vbypRKhP9PnfvwpMJtPa5Knfd5GahWJTUXkuhxUQbnC8FdM9eDdynyUJYFJBYd6dCK",
  "key8": "2hEEcNuzwCuaZuYkkqiFehcXRxuRwByuoAi9bZnJHrKhuqvGEiGoLzcEyFjYE9gWRQpcwrUWi3Lkv4N395hPD3Q9",
  "key9": "TynL6zgsNWtSNWrvpSyVd48zfgt1RWDvq3UypE1AR4SiHLdyix6ssGtykCDaaYsDyqNLBFzzZ7mJrH5m9HSTv8k",
  "key10": "2uNiiXbUeuxASsXcAMie5XywLGnXg6BMobDawH29KhF8d7VYb1GdGq2o43TnPGQqMYh1MGfyjKN6BiRARz3nPawE",
  "key11": "2vXizVLT7wsstvsVHL2NPbszzhfSh7V5m54jVSQxxL67u21CV4obNk8Q5ijC8cvGotnM6qgTZoC9pPie9MiJN5Kx",
  "key12": "9LofPJ75FoX7yKuyt33iQ9kJ3c64p9Eu5DMrq5BhWNcjTA6sRutUqaQBEaJ755KybVZK3X4gMrRao9wqniNMXvb",
  "key13": "23XV7rG3yTUUxG6sr6JDxqyEMGw5SUZn4SiVenG4k8G994KbvJQ2Y5DGDqXqSwrDCjqoqT2zQpGL8LMom52PtfEr",
  "key14": "4uWbvst5eJ9fivDpdqTNkDAJpCxZjfYR2yuVoECF7uqe4kerS4aooQmcHRvbnDW5sTJrb7XCbMJ87SMPVbkoD5hT",
  "key15": "5iWUQP9S1FKASU1fzqXriHAunWot4kz71gHoZYv1PKyd4fvQRbjEXrvm8meL4WY2FpGL6Gua6WXQ9MRCZdDa9jzH",
  "key16": "52VW98zStMmzb4U3HYM4agevgVqeHGkbosVpcALvBXU2dQsY15EA6tAY9NtPuanfaznvTbco4zEYZEpM12XZwnVa",
  "key17": "27AWz7aPQXmVrEneSTz1Dqqz9qWkhirmWYKmikqfz5erMG6ymLM316Zhexxh6QatjQjrokhASyi7bfzm1eUhAg2r",
  "key18": "3vGzK3YnCidUWAzEukWddHpPbLWKJftSDZH3QELDDCsfutL4PXtYHnjNcFG2m6MXujneuFPVypXzxBJ8BHsnzUU7",
  "key19": "4X7MPMhVYjbpFHM47pAcuLZmoTujZoCqGFotuZ8SWgESXiVfZgAHgat5N9CqvrFGFsMAvi9qiXzPDvG4a3rWK2eK",
  "key20": "45MyiEnBixMHyVWnra3SA6i3MmdpiUfdzFjGBWLWK7YX1oWjfEKqU7ySJ54H9QF7Eo66AjiraGpiMjWEuec8dEMy",
  "key21": "3ApUKrd1FQKfqwvfb5T2sJu3JkHkZXa1oxYHuY3QVVaUV8iSgqvs5oPULe246DbqHe5WHVUcAby9zupeb7cWBg1h",
  "key22": "3FyXagzf2voh1h5s4XbSQUEQwNHtzdNMj82fVP5JHgHcgCh6eZqisZEgHTaXaDofdmYdxRYMwzLENibkDCUWXGtz",
  "key23": "4yhHixHzJz35bfFPdZv3cRCnguNjCf3X2gZCLa7zwMA8xTiY73dm22HGZ7gmM4frfbgLXLKKvEHNkW3whXqcaD7D",
  "key24": "4ynjjL9BAabiSFKwQNR6Rs2f1rn5cfUTohEDaDbJKyQsqfx3H9QKG5Y8xXUzNJKgaR3WzCp6rHtPkJCFLwforWsQ",
  "key25": "5nRwm9owWbbHDsKB628cAGK3zhLqP61vp7AXF5HxUGmaYbhYziCh5A6VBoSLRVsYP1Af7E2zJkrH6987E3j1XGCR",
  "key26": "55iN177nUnuupu2MhEBaQeUkU8N7hQ5ZZfDWNiWXG5VY12W4H68YSrhYq2xCwqA2cEU2HnS7GYfpz6wtq3QiYuWr",
  "key27": "w9LTRZ8QegqFeaxevFECkLLFd6tB9u8VG55aLe4AL4fGT1NRsSZ7YvEFELuKnRuGUvCso3AAr7YyKc1weBcbFzG",
  "key28": "mubhiLeyVbhTSWEhrjqPSnETaiqTrfEiPt7rGe2ra7BiZUTMiU4iN5aKijX9BXDBphwRmhofXaLmfvQf1icYESr",
  "key29": "27HoWpzKLQjWU6iKgzGfmLcbgzT4kjjL6GC9mwz65mq6G43BDk88R3pw5iFBtTVXmPnUFFepVGZAhfLTSuGSrbJs",
  "key30": "4EjfG6ZTCrKGovsePKB1F4Vgzwdm7fZqchm86zpDraVsA1g3sQKg6ytpwx3p8Mi99whrkt8Qkkb5tefFH6QftUrn",
  "key31": "4E1FagSgDqJBjZSCJgVSA6JNnGmh9xwxjJmDXT4oQtWpbVSVdwyBxYixpvw8eJZNxb46U2ztvXsVpLoYA4SD9NS4",
  "key32": "xKDLFTqGcMFMCDrhxinJcWTySwA3YB8Sw2SvNGBLMn6953pgu4F3HQTb8WkeCzjPgEusc4ws1LwjC3QPWgmdFHg",
  "key33": "5beR65KoaVLu4TXBTmMpAxjLs12VaA8ZLUqHhQUZpyAa4ENU17ZCfcuuBfHq9cfAYRHWxuQZP9sv76cPyrPJUALQ",
  "key34": "3yLxvQGjr2p5gNwjYy5YQyvnyYbLe2VD9ibvCK5YrGajcEbXE6R3E5Zxmp9rkzrnGDkQECLZKPNzPMTXHAMb2KSw",
  "key35": "5NbuHZwn2Toawc9spk1iV1VGvazEYaAqj2KyAUmC64PKtUnmhg1ZYwtyj5DJ3Hjfp8cM4dN4BF1VjbXVtWjWtLez",
  "key36": "BUBuH9Pc1pvtFGxzXti1xhCfLPH8rogFe8QFCzxYpW3kQbp2BaiuuNWF91waQwJ7AFdYqwRd8sajchkxLgpdGiA",
  "key37": "2Zdty83wtk7ExyTYR3XiqQ3sq6aqtqF6hhc7bvfYmQKUzjXarF7pc2iGnpPijLA9S5MJyXdb3kqLFTeGTXcr1YhN",
  "key38": "2fgdgC4k7meLoGDvtURWp4VaJgnNrMzWAfNuhcxuGDcDXmnmcRKBeHXB21wY2QMee3PsvpRkyrGoWkViM4PvBFg6",
  "key39": "5syA7LUPeUMTip8XxVtbQrChTGnDHNBEFmwnm7gNwcumYbjeSLnbobex8a5XY3D98Gw7nwiBqtjfszcEtxdukCb1",
  "key40": "3sKwbaqoZHxQ4iTYDfhradjsW9PYDuevqf1GzQpoRxghAhtgpkBcqhhQeg7bnKhu5jvyMopWs1eD4VEoSsp8xwvK",
  "key41": "EcSC5WP5XV12t5UjpWBHWyg5BZ2HGoP8T7xiA9xRw6gme76e2CYXazecyEyTWRkBUT246tcaovUuAvTzPpvwvSs",
  "key42": "5NiJpmKNgsEUGFCYvXpDSccGQg3TBETCjvMjw7kXxi8KZKnGHdD9d35jXGjiXLYs8nzGUz161uwXDScJNJHcVRzx",
  "key43": "4mVRvoihHP3di8SnZWthn4dWWqLEtz5hyS39uhCzqvgH9JyQVMg5tVrNey5cj3n38QbC889ELcT669Ntgp4vcx7G"
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
