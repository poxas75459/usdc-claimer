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
    "54tuZP7KGmNjtjrjwauoiJe2sqpuM8cLEuWX8rspqLic1ANgz4L92ikYhAnCvifS1iRw8uivoucTys2ffGdrRfUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52NbvvPKhE7e3LRpFgj15gH3LGHaNubsA1uh95boucbQGwsJLf66AiZAEaRZ7kwnkaYtTe6RSJWeAVMpEffRUqBF",
  "key1": "wipdAWivTLt8j4X6Rc8HGW6Y8CZRbNJGR3uPFhjT8tNzjNHMQErA1ZVDCgw4HJRf2FuHoL85gL6gfFfd6xcoFsV",
  "key2": "2QdeLi12Zm3DCN3NrS9KoGwfR7M3C62aAh6tWeAinvaBKkUwxNdPszP1C5mAPYAkSLHkfhnXy2zgLjcMNomWKfek",
  "key3": "2ueH6mPBk8LuDQvjFbKT6NMJ5meBzc8VFVkUJr97ZPC7wKYM28Br5JzMLjQRQskoXZoSjVwx7ufjgFJR3baAhUhq",
  "key4": "t4852epjZ2bnqwm6kq2KkkiLMPNLsqskRKs6BcAGrkUjoo4ouw2LjfiLQv5uG1ewJZbryHNYpCqct1grXB6pWmy",
  "key5": "4qKTMzuqk7C48voqanzUU5nJvfosYC6Z67icn4sDu3nqYLfyd5NEiZxJNPvgtwy2yZUFFAXYwyNMnxhErHuL6MCk",
  "key6": "tbHVLiY3P2GbDpTH9LwyUakUYWCZuFTkb9AjaDj6TSJgg6iG51fjBjFoJLtVfsaWpicWHdKDhYPg7vXZ2quveUL",
  "key7": "3MyRGYioxci9MqhaAvQ7Bov1c6sZXCJ9KucKdV9dvBYnKGrz4wQ8HQqU9ETtL7Dsd4eud9wxKDJXsqwkEJkuuVpR",
  "key8": "52S7QrjDTZ8vmKvQuWbFmmBeDrEgWh9TnFqavhu5NMLiMxTTQEpktrLKN4igQMmKgqMfJBsEuEDmHgKho3k2VHn9",
  "key9": "2NUufpbNBe2JanZFENJBC8XNabw9XXQtYHmXWACRp6iVC2rT5rp3GPgv8oMayEH6rVPyQqe5oSa5egkTyCB6KEBP",
  "key10": "65xYaHWo3uQJoFcqXKxgThriBhu3FhksbWfZiWyVmMJZA98SEF2bubq5yiVPQTDsHuxq9GjDmJ3VTGkVwzT7VEDq",
  "key11": "4xCQ3a6AWKQD93StEg4kHWzxZof3zMyLa4WRvJtoduTRevEpin6Jiy9TkpmobsLyRQHT5PiiUHsj9oQHgtbGfSvh",
  "key12": "ynAaqwikWVDePtGrVmLQhcYEMmxHWLNhAKhkpuigBH8HiPCmzZxv5uPLUeabVFZi9CZxhpAe8DTQpcqUbkok67V",
  "key13": "3aK35j9huh4sttKLgH3VBtb2e74K6tNbpuptRXm8WJLPJBdcmshryTd9K466RX2dV9s1cHMhXR2UEjvfPuYUxA3C",
  "key14": "4hczzq8bF4Die4PFswwadq192A19zMPki2ze1ueMRPFremuSRwkkFTNW8ijJHTQ1xJMZ7h9WSsNm3EvGAoY9SJmL",
  "key15": "3AkYSPuE2ebKGg8PTjGnwfnwX2YgRyXtzT1T38YMc1yM2kCfP9feJ1AoDuaPjefLhw4Z1NCEe2wdYXQwgQRWLvFx",
  "key16": "PJ1CAkdUXkFrZ5dgr3dQYQQYfpPeyMb1EpZUdeM7XRnYGe42BxUpBpA4CzFd44tBcMZKZTv4Nb9H6oznxsfc7hj",
  "key17": "5DVSNanjWmwLdabuBN2DzTyUN1kAFUUHm6PhzforqXTX1iEDMx7uqgBbpu64e7NwoPBxVtw2fcwtZPvXKK6Sur5f",
  "key18": "3DWqRKib7oFxNgBQGJnFHHfHUB5TdhQ73wTnxfZHgLcHu9BsAYtrA9TjVFs4U87PKpd5Tn1X3X76b1eB5wi4vq46",
  "key19": "cF8u4MoAH8qK4ZFWJjdT9pCKgT3t7tLpe24fqS1ukzt1JKYC3DTJs66XzfP11WbXFxpLeSvudHGz4ERSNH4Q2fh",
  "key20": "4sgwna4bwnpJm4BpHtnCAbW43ThKdp6EsX7Xf2L4nS5Q436ZzFtZpiL89JHs7ravqJt1LtVt4115qLJTqNM6WwW9",
  "key21": "4qAL5nztd55jFTsZtaPDWGVamJBVKaK17ByypjkKQPks6U6BA937kLPpbj3sD7zSK3HJbq1HMQWYhYFr1fn7LL8E",
  "key22": "5vtK7YH5P3HvTstPVfdpQ3CsGSTadGunTjsUNVhfFwuAti7aAbLtD9ZzVerHSjX91S2Sbqn2v7f9xF2TGPoEgirA",
  "key23": "5FLhfZcRXQyzhSRnZ4s8eAu8VtWrFq9xRikw5VhscEc8r2jdmvwG9qasbrBxFyRYrzJvTQPaxLxziaEroxG3QbXf",
  "key24": "3asbTr1PEhgERsihioEKL888gDCPtAbNxAa3QocJkju9znzzHAYZJiKDjCjzz1Nx9Uf8uH552XY2VhD7kMrsVf9R",
  "key25": "5crLTTJrbWd9wpE7a67S4NukC2DWMHkvBDyc5Pyt5omifrcWSgUktT2M4X5GC1FFghyYZaHhxNJoLKJAvT7tbzKX",
  "key26": "yNoQtgmc7LUtH8WsDhqsD79ehY9w4c2xiP3f65QQTgNUCQuVDhHQ61uNPJyXmHm2eYRwxmuqeRbrGD9hn89PbMZ",
  "key27": "5LCHKYR8akbgHYKzg8yDFJZEdkF8DmS2WjauDmgKBGb14uxvV6MCebVRdRrdB7N9wTyfjWReePNg8wtCMCdK38F",
  "key28": "56PFBg8yVk4m9bXD3963u1G7QbNrUQojRxgzEQqbnByJRHfxF5svSi3Lttm9uKvchcytT4JC7ZRiTVoeXd6M2dRQ",
  "key29": "3FmehBehVAzWj93xTivs1irNNQKLkMCuZaEaN85qibYT7MJirTVE7PrHE3FciQfsNqa3CHiBWqLYSAEkgLEkd7nU",
  "key30": "TRMqdPt8HGSzR52R2nRtsydFC4FA81Y6oQ6GUdeV76h3bAinDZf9GFMFdab8peWCHnFn6BUMTpBMh4vEyFZi6vM",
  "key31": "5XTahaWK61qu6yjvDKgC5raKSZYarrRb4GWFAyaD74rWA43hwa18HRyNyDD1yTc55t5JHWaBXrt4qKjwviHysgwV",
  "key32": "gKY6pnCzjEdV9psKLrVE8JjCu3FnWMNro4rPJaJMA8UhTDCxJr8m1PdPhbM21ewGJmjvN3EmSq6yqMp9wTbfwWs",
  "key33": "3oJby6zK6M4A2iqH5ERzb1VqVV346f3GyHvjHdWLRY6x9vnroj54GbrxDVj9Ec3hE9wG68xLJ6MfPUj59STpMHaQ",
  "key34": "2sbGiM7yRzFLVBh5ZWMi2SiKy6ygycw3dgd9iTPm7vdQ1xb3c8HG6wuPtB15VHSyLf99mtmozeBf34KVnVvhKssp",
  "key35": "5gXAxg6zzY6oQxhp4uCgdzoAkiZWC3BoTTN1onkDVBCtbxhwZdxCgLgX7hryjPvV2CSUZ1AJ2cZmBxWChrDaadNQ",
  "key36": "3gkNXH4XNhbRDK1xv8eyPfjEfLnjXDKmyBToWQcZqDKcYE39Kx2Fw42wc8rivge7mqva32dfn7gm1sJxgm5yJib7",
  "key37": "2ExEkzG6pwc39zVVpiG3t9Li6S12ptfRe1HNUHqVpRKgjEjyB5D3knQfW4VXmMJ1AUeVcYgpJJY5SEWqY2t8W2QV",
  "key38": "JSWvvrhq7FK7avD82hXFfuf6uDDQ6RySz3UpxAhyXyb5xFnExLW5TArBAZdyUzFEsLfL11J9sRSLQuhvepBFQsr",
  "key39": "8m8GuevpnVSTaRmmfPEfcUcUGijnSAQoMDR5V849GoYQf5AvxwmSeYCqqY4VYAf7M3jNxfRLqbKnD37ttosREKt",
  "key40": "3JdVJCBtgf4mR2H9GvAzhRF6DMMwmnrf2grELnCSFLT8DFhQa366GDLMRGL8gMdpLT6N3sXn6mLJ7aq2V5JNSLB2",
  "key41": "3aS5QAbNj5vNUd7qsPhuYP4RLL9Q8Jqv2Lu2Wem7ugUDQ524kCrsnsZG9ziQRc5HYLsmPUGm8U3xWGWG1TL1SVG3",
  "key42": "UxTLbq9sFfFZp5qrTphheuJYkD9PymBKkE2FFF9sjtDuhp3PpiRKvrUne2SoNoXiyietFZS8bBRK7ZBr1TULr2W",
  "key43": "2A8YrVrPhwagiBBEPAD4AajVe9sArYyntaZnat4fEVHwtp8uuMTqesvRont7EwkkdnzDkmfiLRNr2u9tixh9ZzWA",
  "key44": "kLhBedwvXZ33Na3dVhuds7jJCN5wJ51VjwRcUcvPL6V621UmFeJfMWH4ypcUFV7dhD97wArTykYXa8PcmGZP6FT",
  "key45": "JUjpgV38NDYg27qP4py7bKVuzy5TqFM1AryTendfbPgu3VU4EpJdV2FRvskTjgAFaSRjaGMFVjiFTMuJYgLixVA",
  "key46": "2hwGLPxVUqsaRMeD39xhqg6ULXVF1kv7WatT5X7PcBKEJ6RFdLV5mfMYoyZp45QC9nALep1NhU5X5vY2Jgc235TF"
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
