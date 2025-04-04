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
    "4EzuW5fQhzEWES2JfQeUR6GwFLJ5YgP88xH2LNnPzZdREqong6TsqTE4fgwdWGcCCQRyiZPgXED1tF4GESZgxsQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i3XgyQqzjE6CMGNKiQZK9YfbDqdkG9eooCTH9sgp3mXXVdDcJQ4Dd3GUYyQQcrHziQ1YooYqLmHAAyKdVdDbT2j",
  "key1": "5FeFeoJSEqpp2vrPrkJvRY32giSsPT25DQVFeuVSzhczxVwfcW3RbTZEuBCEgFAVnB3t7i4B7BdsboMW9tHHukU",
  "key2": "4s32vQASzHFswrZ4sAvPQjyULcAGoUdV711d2JA4pMBuvKAZJbFxVgkUKni858aVUUGXKDMNT1H3qf41tdJcNiLB",
  "key3": "5vWqrDtp81NWNk83u18bWMsYDtA8o48y4RDaE1tzbsAgFq6WKthKRoWCew3uWPFV2QK6QfWzj5qtQMuqFfGJas8b",
  "key4": "2fGg8mQmknnezxh8vUncVhtyVkLeBnRneRpWxLagEhKyqLkSdS9GrrKd9CQjn1qpCJKF9xKXsVpXi3o3DeCNPpTW",
  "key5": "2xV2PZZMHuwUGQqKrqmN68C16qp6GXuPoQW2sMp9k4jkARgCgcvAKTkVPZGHaitcHjGhdJ8xkEh1179SGYsL3K2f",
  "key6": "12KKLtKiuuir6cfw9GU9GXabM7NGr5MfRYfGdK1NL3XanYG1GZTPB7BFkAXne9NfWBDmpAT4M2NP3PwT5P9okSR",
  "key7": "4n7UDydBanZUXcZpUY4a9fsXK1FyuqznAu9xSz2ngvjjtAX2TxLWb2vRT41NEaqYgWxEHad3RB3iLuMmpPCTMkaQ",
  "key8": "Y6TeVmuX9H1pWSF9ax7K858QWyXkYUfeFcGcRVkVivVp2AtVPWmMbNsYTGjXs2DztPTbydVAaaRx4cH8v38JC8p",
  "key9": "3uo68rs4xUWhjHBgeZUDEe4NPL36uaZVa7bSm1dhy7BpYdt6HbH8aNvMgFbmLWX6pRKiDnRceDqsBBSW5shzyyHo",
  "key10": "JHj6T5fGURsJzDokm6MomYN24VdNcjDitj42EVcVwswTYAT6owHnPXDykCNxPNgZBsVFxLbQWvhZpf2ex8dn1Tw",
  "key11": "4EADZWBwKgEXTuHPuvWv6x9CCUTrod52bCs1jgbyVLMMktvsJoFgD85gv5jypafM4MYUw3n6Y5LtmeyYM9bcYdi9",
  "key12": "3buMsQkh4FFQq8q3oeeqJ5pf2MWH3RoqGGUHkDxdK1KB34UDyLBeJanDT2HGe3aDpy4LDvV4TnZniVTMp68cAPFc",
  "key13": "3wSkBa8v5iSHTPQRZbob3GRCj8U7pEc9jMvN7T5t1Rkoruc9fBcmZRqPX7iTQKcyQ52wrWRBrCNLW6CskvyAUZQT",
  "key14": "5B7LWvYKGSSBADfUFo23cqzggfEy8N4RXEdHu9shCw3LGEhGpJUgp4pjdPRuVBDtxbNjWjhpK1WGaarrgkb4Ye1m",
  "key15": "29Nfxk5Qk2A6ESaU9PnagfcNwUZoR7xcjzwF31uE3477hUNPys7eX2YJaM7qZVJBRVJy6Cc68nFEr3WZK4ywHExu",
  "key16": "2UX6PL7DKonQJb9YZp39Sv2RMZSLphGb3ifFEsMeqedqfAxxHoYfN6hG4PfBwpHsqEa6j6XdMkK7son2kqoYhbSG",
  "key17": "54kjtzfmduKCGZUf3nYSzxZCLHdfCzE2NG56Hn6Hk4mgDVnyXPJxwmddfK2uUQbXaVsbnWBAWntQcpRbBdDMGyjT",
  "key18": "5Nj94mt1Ju7VTj4mMyNQRbkmxmoCG2SpvPuvF2mAfAfyvgivW82B2oecmz9MutDj1Nv52T8aZSWEppxTAmWNohqD",
  "key19": "2nfSpovJcuvnCpxyPXRrDxe5E4aNZCX7rgjTMx21r6dqoSAn8ubm1ZHXyyS4HLnVQwccWcCjdJX48KJoBnQmtuMd",
  "key20": "3SMFai4SiiqnYtS5tyxfWbJHEwyVsCxd5vEWoG1JzxRMX8vr1LjyBPDVy9MJAuVNGXSmimLrFREdtQUbBhsPw8AM",
  "key21": "2bQfrgCzu7HCX3PA3eovH1aqxSxQDAt171pVD1LoSLHYRcYeBTSzaCGQSv3MiaN6vfNoRHa58J465s8zxrgNwWKU",
  "key22": "2Gc3U4g2fpWJA24K59WLkDCT5z82BNVij6ueKQuqinAhrYUBdGCeNt7skpWyvP4fWeyit6FS3McmJSMMnmLAXq6",
  "key23": "4snsdzJoUUQ6dfXh6d8eMm85Vt1LWME51pVXi7d2xGr5UGspSsaQigGuWejwLdUKyu6ky4nR1351UzmmjYhe1RFS",
  "key24": "56Vmg3fzRtzgXoKK5JLC6FL4bXpJUSqbT7j3JHq3vvH7aTZsgRNL6JHKPu4onE2suNbbBey2xPJkcxjUweGpyjTU",
  "key25": "5vmuAKxuf9btnKwLsUygxAsN7yngLKPnsK2ThygzwAB8ApyjLqs3wg6EGCDWsmMdHzyAGDd1ziLEMwiXG5ZYT9a4",
  "key26": "UVDb36g6uUpz3138vqnGU6n9ME3ToZinTeaYv6XpmGoCw91QgY7rnaA9aGANBCHGoVWKW2XFLqdBThndwryS9rW",
  "key27": "5Mgx5iTbYcaNfJ2RpfxepYR5TsshA7JBotV3KyW97wkuxjLcZqrZH6W4RbS2JCa7hF4SsSQfrcwyLsXHpFEnLy7g",
  "key28": "58RvUA2cPbn6mkGRRvWATyTCe6tnF58q6qsnKUVxJs6bWRBBk9iNQuj9ovhh9dpip6JMbhhqhGBqG7xw5Mc63FzH",
  "key29": "3sxcuQNcPGeq5rw6ZVdcNRx1iyxmP9D3fdyq8oQskrBLz2zBLc5yChiDj4bH5VZyGxMSWPowVCgjnVSFX7hwR48N",
  "key30": "5yxaJCVZtuVSwBFKCZspRNU4XH93SWyDx151RKEuq8x55kTHWgLtpX2B7grYKoBNxynCQTuutvXe4bgBXQxra6mJ",
  "key31": "5kLLLPMwi6HRMFom9z4gLu1Ht92bZ7KYEFp3NeBisLP6DJ85WMyucTs4dFjWDz39FEt69ZGjzDQY9a2zRuRUXPsF",
  "key32": "31QbcpQtHpyVxfiXmbxmUuqicXhmdkcE9SoaZjDUFumQNmQd6XAkwzW2gsNDZ7XkeeCrGxfSQFJZ9VkU9nPG8i9x",
  "key33": "2BYN5Gi5rBFnt9sA8kcJDHCpwHd9wPbNbQnXRrpD5capuFCVjJYPgBPGjtQMLXtXTehMSH9iSuY5xx5qvqMdw9bC",
  "key34": "tkkTNjL1DkUF91ER4fWAJWbtJbxBm4rvLdYbuZzuYwAJkQ19kxRu8qoWGBZ9orMt3GsdchN3saBiU6bV9rSJVV4",
  "key35": "3ymVKaNDmxstpoTsr5udcwBDQ1Mf76zsQgzPMSbNxmCMRTrEJbe7aZa5SWcZHHcDbBGxenPVybNkzrG7x9YeDEkj",
  "key36": "5T6wc3QFwr4XJKCeswWVxur9DzUea1VGFaz456YfYrRB6RvQceZpPk3zHmLe2xYh9XLWyFKvk7mWHdEBgozHEEsW",
  "key37": "5gEcprwFEM91BWDmjUU2qxigBG7vcFcUKYNMkcdte9Vyb3fgsmED2BPjaS6oJs5J6e9xw7LkGxdpbGZRrvLGK8ER",
  "key38": "2nmdbpPfrrzaDxw8Gn85DaCkCTuANrXqzKVxkPqqf7eu1e333V8AHTJfmZ7h4xPJATaG3Trp1znmd2t4k6Pm2ZFH",
  "key39": "3tDRbACQstXfRQ3n3GENF196bTX6rqexAwESD8ZdYjvgPJKfC4voSPQnVetJ9pwhhe7HMh5EEU1egs8HoEkaE4L"
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
