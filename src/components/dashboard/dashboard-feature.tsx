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
    "5J4GwmCbqLXjbJfqVhdTPyE6XGiArAo7rR92X2X1LHhzDHLpa1DXvQ5hdEdLVtkEALDE3D4PPPFvb5Uh7TittqHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QDtEb2GxyPw7Lg7jF74JddtUixa5FN8AaTE88KnWdm3phxrsVCtBDdVYCqV7n9ve9yXcHVHiBmVWkzDBx7ouNqi",
  "key1": "63pEXUwJ4aQDnyrfPt4roDKafLzAR7Sb17uyQU641Fdi4t8VWfZk2FY52gsAMzSCrKNCzEJie1B1HdLskEPaXrMc",
  "key2": "5dyiMiib9KXL9rNf5D7hpp6XT8a5hEf6gsLL8haY83s3KPxLCwsi1o3VddpAcPii2XQpQiD5UB9xyvomQqwyFfog",
  "key3": "wHYSVgfP7VVU5wUDRAbAxi8xDmibovdeU55jK2kxZEi4mbCF8xB4z7yo2T9jBwVPQ3NZwZkArpwtbXTfEkteRU5",
  "key4": "4qo3RHcP3xyptLDmHfuDkKKqC7b4YoWSSHzSzRFX73c1pZ3npbhsThWAFpXR6JEfHLKZFdUXMACCCMRpEkBPXvLu",
  "key5": "uagBdpbdifXcLu9XVjFGBeFph81SBzk7SMuqYjXZSgjqFa1rKYrqzK1miKi6q8QciwxsxEUdsgjpmmwgwbKearu",
  "key6": "3b8sZdvW7r7XnKgKFQdT1s8Kd8TnQiYtXUcDNZ2q3MkyULHF7sZDzWNrEUeEXW9FkXdJaE61drx75YkUW3emhSJV",
  "key7": "2M7ztwSM8nz8uBd9hmHnpgnB8BkyZRaP7SN5tPsE83S5L7kw5r6btdNWEqdKpK9jLFk8yncUQ3CwQRFarchmSVFz",
  "key8": "5KNPs2hZpz7AX3VAX2a5uoDDL8hmcfTyWVMxyppkKMAhbP7Wr2eookDRNJnri36xpfD1YRJU57yEF6zMDK7CVTAS",
  "key9": "5htYKVGKCMt8F66iXaomhHhwHfduebvC8nKUtfJ9cLDmWnk4fz89D4k3mU5q9i9x2Rn6NPpuk2BxWSDfBvSXJsaF",
  "key10": "4qvSypxFoLkEmPopcbrwytnVbGRg4AiNtDNVpTkKze9ZoFiZTb64uhXcVsHUaKFiGJRxRfNwMMktVsVcMzGG2fTi",
  "key11": "27H98e5eMXzWt1USqSRsJUdog4jUQ8KHJpG8vu74aVSGLL4VTPWnHVJeVwupttdogY9NGxvJDRU4TsDvZSMpCYED",
  "key12": "S8hzv7WC1wkBM3tAscqNUDZrZ2HZ2kF45jHhv8tm9EjYPNnANgcMaihfCMvxBSNmsu175rzfty2CtqktbNSPe4r",
  "key13": "3qJE3ZARcmCVYSFVg1jtWsJSJMyrsh9SpBCxfpNvfvXcr1UubsBZxK2Tw6qyvY8n9aHCrUPnUQzcJa3gKmVmP64e",
  "key14": "4UUsB8dShLcKwgfzhgP6XmyVjP3DWyrSz3EK55hLCLWDcijXKuZ9SLgW8efJ15RTEExpQfLExRoH1NZcvacv5PBo",
  "key15": "dWBxLN598o9bHbyCSyC3RUBUqZTcyyLDdGf9KouotvzgkN23Cy383eUyyXHGeuaXYYazA7oWnBdmc3yqz7biKkN",
  "key16": "5fk5EzNEzmWLRakhjxZGhafYe6bmyCJigof1UWpd99Hh1XDPWG2C2qJb6nwXGTmqthNs65GbdyPiMcdhPPGUSPFF",
  "key17": "4ogV3XfjKP8fmQJm3WBqLZjD1SWUPKcs9orjyWwythmrhkh4z9qVp1MMsb7kQQbun7isWV5Ypf6eX1G2g8HP4m3L",
  "key18": "5RrZMFyR6dUikr8BctinW7zKdc6Bff8Aykk1uQp9S1aqXa3M1Lde3JfTN3oq1xzW8s8NVb94sAWmL71qPwARGHNb",
  "key19": "35haaL5EzPL4eXcPNpQZjRGnrZNGr43KCYKTVpBADrVhuV5Usv7egMSQGRykAh5Miq6gPTHk2CQiytdZ3EePBGtF",
  "key20": "5zaYqiDJmd597cmS5EttdayjVQ9XfkFxPVyZ39s2pG4A4n2EmD2dYXNNBv6w6fxm5ViLEtWe27PqGm1SLXidTiNQ",
  "key21": "VhPVPTfnZ55jVf2xmNsdQ6o1SSM4TdEr3qYyX1gd3KrxmQav9sG529R4dM49mut62BGj638mdnjmWw2FLwvmxPk",
  "key22": "KAu5vwBDoHBX4U2gAdNbMX4KWodT2zLVJhcqruZM7BVE42EqC4muKyTZcPBfjiTjQzZvuRoFsw5x1HPJ9SVsa7J",
  "key23": "2bwgZqvK3KPohfoS3uuN53ntBWxJfAAkHA7oB5U4HCnPPAVzZWV3d7iGGkJAzd73fY89ewjXn172zmkAve8bqFmT",
  "key24": "2QvXjYqmEH872dSG4ff7J7y1a4hT6cWxnRuBRTZqeTQM4NRMPJgiDS6DvBWGKsCxayuukH8fq3kQYcffsixdkG5X",
  "key25": "2cRoiaFw2445hcGx7AgKPmdM9eLBdoEZnwaBj9i4uqT8hoDjMfqSYeMZfPVXfhYsnDetZk29EXUD6nKgSKJXzRoY",
  "key26": "SgGb7XbJBtTpV7EFyBrbV2F11opNoNVPNcqfYqHVkBBAJXGN2MhiLmHn8mycvYB79baJd1DmvpRPPU6AAnHs1gn",
  "key27": "u97eUKAnWnwqwVgnsbAj3DsSeE5UMQ1H9ALKJWQ9M4112R3FRGmWdHv6iPs1LrRwP9FYsqo6ThLcjCjuhXEnpTc",
  "key28": "2MNvEc71duqGMY514XjMA5XejtyKtwfp5eZnM8rr4nXQJLmwX9F6J1Yyi2gQFr8WByg91gfHwhX1LkJBG6ujAWzo",
  "key29": "m6ULQ2W5zEQBkSUqmP2covDLqpHPubLCdTL45GSoKacfo2mCVG3yyy8mKqZhs62bX3QfuGjNAPa8xC19L1FCBzk",
  "key30": "3DQaBjPxEd2WsWwoVzWj8GGg9Wo5aaSDfmCeku9ywsP6LveC6Y5sAoZMTvBoRATkTJZy8PwsJThRBpof3BgVX2Lk",
  "key31": "55LsMeX8vSKDpq9Hstc3UooTwe4hvsmwKVw6v3vvNaT4BCAR8sjXwSmeJYHKiXEwo2yWSxpd2aPTZjRWEMh3aCwH",
  "key32": "2q31Wq46jwyvJeS8fAhTGjkgJxvUF7pn6xFwZFtsDUoUzxRvAE6VyQXxUN1XhaCKFkhgdrd8JFtKoT1VHXjp9xAD",
  "key33": "3FgqorqDtJQujVpL2qqJxY3XxxUxPUrKHeeq955nxwzG7RfWPFKk9ZSy9w75CDG9W6Fdtnabz2B96z2cfA3ZRHW6",
  "key34": "5cjcWeskSXaKSr1mGn8F38i2BJ9bEYFDfBKTRvy3GUafGhcFzcrGEcbVqPaifqXgMvXNdAYBan3y9ZpcCLKySWNw",
  "key35": "3pKbjfzWpCewvXhQv2a2wtr9wb6bJNKfJEtTZ6kw4eg17uUwcEFuXUU2k7Ue1KafFXzYMJuConVn4c1JXQHwoVcu",
  "key36": "4n9erfDoiNKizkgLGPqzLPdahHVX5pbyrFuYdMDEWz56AB7s2iA4M6rgD3noP4wEVijH5XtYkfsj48pvoExCUjnW",
  "key37": "igSbfUYsqxFcn9C5Fd2jws14bfSFN9qnKoy4WkD8ryhFqEowSarf8wWpn8jMHFuNWXVqE9p7yNC5mFmD51k4HVv",
  "key38": "cbuqYgb688rF3LbknApGkJUYwm1yeenh5zzaKDGwJUebVBEifVhgcTfNVzUGk3wWLXb98d7pHDyn4ofjPAE2xgP",
  "key39": "259pe5tA4KagSbQFDGNDuMp67GWhPUe5oHueHASy8aPzmSQU2M36j6D45sFjaeF6onC2JmK3Z7FgxgNFHwUcugjr",
  "key40": "4sN1U2vM8vus5bsfyV8PTrmzmTfNAMKFAt7yiextVPyUhvqwkJkztTqtgZqT9RavxxP5iiNMB9YhBPTGbHkr5H6i",
  "key41": "5xg8ZzDidoGY751DzMrdN3UEX8APHUQ4DrZJZJhwptcKrehp6RpbcQGTxT9wdywS1qbXz5EUatUGas1MekYtWzyk",
  "key42": "5SRH5D6YfU4gYBTvKYL5YCgbSNaVxFdJb5LxFazV6jkmvDi2zCL4DU3hmGxjUptqoJmA9EfKKFEGb8qpt7tE74mV",
  "key43": "YspsSxnKqoZ8PkKMvAHzdm3M9iRfUVTts8JcG5gMEffiN3DSMPvDCqp9aZZXcKATkFbWAqFFu6K3kpyprfzP9G3",
  "key44": "MzdSBnMs1aAo9eyaGJ8wKVgvvS3iKstt4kDSmt12x5RmdcCxRw4vtCYWKZRx1QwdyTvY9Gzarj8WTntwYyzdx4q"
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
