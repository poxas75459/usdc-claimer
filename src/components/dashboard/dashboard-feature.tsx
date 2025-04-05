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
    "435LfoP28J2ehes63q5DdUMXNvF15JWncVqxP2UC5RVnS1HqUoEqHFAMXYzUpWNbEU4JmJeBVk6L3sGCMRRPrYqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iqiAhG8DHijP97f4WhdxuSyz5Yc4hBq78nFaHfP5NV2qzXyd2GFJjuU8YbjUy7sEN67dMaMu8enpnbmA8L6shkq",
  "key1": "2QTATWUeGwLdqRGMzope5DZfx7LpWprgh8Ne4ofjq3mRVu5rcXfySrTscUQu5pWRnojuucSAdTD5Rndn43qvN8ak",
  "key2": "4d1W8YF3T3DcKkfQbTQjVM3cbFc25K4qjFpevGB8GGdvTHQt8MjixgTV3jMywdPYQ8ZEDh28WvBkAsaZ6Su43okb",
  "key3": "4THZJmGsLQLYvVFEvLKW89YQM1kGzeChf7k647oKkAc3THWKDQ5FAFeJmTZnb9zAr8K2tfjLaSvYD9BuoreBUnyj",
  "key4": "3PeTnmdBiVcrxdndRmtWVvjfG1hT8w6xwDxruX7Jxm4LMWLoaDj8MyqVpjidPi9iRyy679VTU2BgVapWbfhMP18E",
  "key5": "5TkvaDLrGAn6cLPoHfYy5H96z1WtfoGDCYpwNgSZ7MTzwJpkfUXRtRvYmETRxknJU4Cy4LVsjfwqRmKExNZ5GtDF",
  "key6": "4bTTmvZqurVDZ2ADTVcRSbcsy55dNmEPAQsks3V8pyh83FjvfpQCWGgrzcsLm5sTRiHm9QdJcFhhumA5sGv1ebmU",
  "key7": "2FF6f8yri4Ndsu1VwjtJ7R9Zg4ALEhwUJT41PRtRDarvQagp7V7AN7KXxfoReoCXVps8KuLJY29JcaNiQQV1e4Rd",
  "key8": "3jHnqdmdHaB5Uo7CbYyZzJnJAM6hkDYPiFbDsxn2ujJBncnjwxqEMVZ1ThwrBkh1HN9yKLnmvYXJjdorBALUmGLL",
  "key9": "33ixFPHJ7KzKSHoLTeU53AK2fVWCdm1TMFcDkWWYdsi7zFFj46XE7ceUjCRoSuiMSDbqjF7fqRzHUB3cBP5bAB4J",
  "key10": "Fm8pskomiKBi5tKcxt7Ggf14HvDAJc7HJkim6R3z8iorbAtZBD5dpbVQaDqcWoWuBT1TG6Ve2ZmEbKM7NgzKyc7",
  "key11": "2DT2jooPnyGxU8AJz9Fog3pNahQD6FHuPyHa4wWG4D9h2eSQ77aVM1ymVmDChrCET4qBzN4sESPu6DcA5jexMvoE",
  "key12": "3HyxthHGtPKeM18EQeX7BXJk68cfYP8pQkc3AeDCEg2wVwqakGNX5cgWejGtxYsJrpVjjD7cMTwgVnJyPB15Huvg",
  "key13": "2XNw2a86rnhBvBfeRKFtkx8DdD8WFRMe1g3BgeWmqFw2e71xtcruD3AgC59nNh4uBQwyXeSpf9fL3Vty8h6wiQaR",
  "key14": "5S9mu4PLGSKsm2vrG9K2gyMn6aAcGkTSDvRZpBcnzY5e5LwAFphGtWqgLqvmgK7oA2WoQMSvbb9UJyjgLdJ354eo",
  "key15": "TdHq22xgUccMFwCdS8DHVLCsmjHYWNaX3hs3iXwhBz2epbXVNWmr5QBCbhkVFxKgNFSksGEkAFAx9P1ybYLqdjn",
  "key16": "2D7RYFT8zSXYYGJcCWUsVpGKjVZEc8mug6q1jghhJRpuKRNLXx8EM6AgocnX1tUWypPw1qGU5zsA73VtwEMNBioz",
  "key17": "HYfYeShs5QDPEqAi2zf1LCcXLHM1HemReun7UvvwcCafZ69QBLgqFmUWpw7ktu1F4yBxEjhr4dmiNxtVMrrPxSb",
  "key18": "3uUjHHJ1vKvjrwmg4Q6BMNsuMV8oW9U3VDTFK1fDt9bZ4d3CjNZGiWTpcrBAwQDrjnkFhd3UkvEBcdcyvMy7KMMr",
  "key19": "4i4rqWEFZYzvdrKVpAjdv2AEjuhfv5Q8zRvsRyYeMdxZijaFcwbTr1ETEmdhEamL1ou6dPMRETp29SdsmPdM22b2",
  "key20": "2568m6z7S7DAEYD6YJ3imbij7crqv4cYTZ9xJpCKonSTuZbtUq9YUCv7zZxaPcmXXjiQb3reYngkqqSS633rbq3Z",
  "key21": "54tpWf9vvebBGRT29SUdUKEt63HnZJGCnZJE6ZBFkgzvLP5oQRQ1SbqibsHuLqA9XuSMaM8Em5LzWN1wLeFJzQ3W",
  "key22": "54njT8tVsUg4U6sUD4bhD38fGHP3FW9HycTpKfJqUURaQpbWjQ8vhhX77KxYrLQhKqS8pdQAsxXbUE2RXv2sSpka",
  "key23": "5CRCr8sjs8vVnzsXeGWmax7dS9akx79wrGm2fjbzEQk49QrFEg3SzusmSmQKTXmjWsb77XqHJhA7Vt4exKjL4rQp",
  "key24": "DMq71KTYvZ76F9fXQ9YZTHbigBXV3ZbVhzrLSbTFX4q9CvPZGcL9YiC4rBPgVGmCANynb5vkTg1o2TatWLWkTUu",
  "key25": "3E3AW7w7aCEKP52ahg1KTwm88kYirMkDDofXrXv1swzHG1PLK4ASPcXhiqqc4VxAcsoJ3bsu5GDm7qNT3dsfEYaz",
  "key26": "2m8oEmQVQxVTWZCVsBAB6UgpyRuSSxnFWE7476psndCeeBR65nV6TqCK5tYSi5E9ocjQXSpC8HcvaLKR3G8k5a1S",
  "key27": "2x9W7zAgCBaMivSMKWQVo5dE1X4PBfDupdxt12qnxy435LApfwwWwpJ53QGnftg7UcLsBCKvMSybwL2LkAemh4QC",
  "key28": "NuCgk19nmYzCqadKkxTKBN2mKnFfqDEWEc4A2wGgsW2akbUm5N73395dZFfkt7wMV2gRmSMXGy3ghEsZoR2xSjE",
  "key29": "4G2QeNVrAjLkvJwEhN989tet5ETDiiduQ9GTG3X449ygqzXPUxRqoKCzjrMKEroYPu9EfnjAie2qzPWN2vKGBhhw",
  "key30": "2XixdGrCXQcpnpLGVneeW7sqjQS3TrQxgvDR8zMp3B4rZkk4A3a3H6veMjqcgjr8zZiYq6HkaoohDWjkXS3ynkv",
  "key31": "3mrFP2GnGwbLzKoHH4fpQiL2aWBqzJDEgsRk7o5s641nYwYo6fQ4qV5hHWM8UJBEGJYQ6Pd6p3rSZwead6kEdQ94",
  "key32": "Xe4LNZYJDhSkh1CgCCA3fMBn9S8GFn7CarHmCmxHAeVq4S45jz94rQYAsU449DFt8JWeQew4imExEsdEeZUddCp",
  "key33": "2kQLKVVcHcSKSU9BYNP7UrUirUATLMm5stdoqrkFdXxiHgJU6qkeK1shDyLoZTaoV6H1ecvNpJAGkDmhBTXAM89T",
  "key34": "3fvifMfB4iSNss3qaWpyo6VGy1MwGgavirxMWLDW3io7D4HrDkm6wcK3hpuS2qdJDA6618QwoUoFS8vTDeGe8RjA",
  "key35": "NaZpULKw8PBwzy1W2VKKvaMLQmUd61PEHBZfTkB9aaTBKv9FdmsFzujAMXeDuH2UYgZJZ5PtcC4fJ6QhCBRhs6o",
  "key36": "3kzJy7jffjxXsaESyTquSabmz6xLhVqogxmqPuZFsg4GQc2aFM1pKA9foRa5oVwYyCkyBqcfZyDE4wvxKaWzcRtU",
  "key37": "4JMx9HAVD91RtC46NUKzHrs4hbuSz3ZW7UDsj6CP4tvcpcTA8ZymL7eCEHcmbyopttxuoDmdqWDgMxeczURcFRR9",
  "key38": "2vjmmxVPES8GahsZS2SuiEysdCBz2QtDLVpoTQbf3RXLa1hkXTcr5RsBMZocpQyvU2UupYPafey63xuBSkToccUF",
  "key39": "54XpvqBfd6zNgQyXcxqB2Ca3ZJFPz78BncDdsBLeRwwnJKuKHAwBUcUTjycr75pNoAmFvoyoko94Mj7kMKntYG5c",
  "key40": "3HfVf411LkFxgu6pN6xnRQm3ZH1fYk1XaRjCf3xv4Lx1TrS7eBaArcNxK8kpLu4v94ECtJWBHixKTYAMTPiKTqc7",
  "key41": "3vwwMTFnKbint63Ck8AhbshVCZtChroGqnYFFirZwcptayC5oTf4fW6XkQRDEZgsN7T8VSXLMyercWZD4juVgrNa",
  "key42": "MTjgz29arC6nv4PFWYmUmduG8rRMkf9tv2ttDCbi2fMRAQAzqryNoBLb5YRKS4jawSZfw41F5oHN1AYBG98FeQ3",
  "key43": "3UJRtP2pLL5WqTzeTGTgBpJpBgFN5b6saDb4dPsGbd4DWgpr8CaQhkQwz32VpTW8n7137fyzL84R3BDLyRo4pzHZ",
  "key44": "5Wu8d9V1NX3uRcRo9kwLWDX6XhY5DgeKtYKrp3o7KHRgjFSBP7Pm8rM2dUxvwEoF6GymECwM5kariv6DKvEyayZ9",
  "key45": "5SCV4JVbaTjVt6Q2YCjxUoiCXmsU5YJYxYTULorFEm8sxoZky9cMfC9TzbtS2aFe9otoYB3c7t519EFP5DZsDVUE",
  "key46": "4ZxPYCY8WJoAwjCgxh5tB9d6SyW9ynUn4duUuDJYVao2oaGMs4BnezYXLKZ3TBuBHrYCWSLgwVUdPoQF9LBTo6Y5",
  "key47": "2f1cns2QArPV2FXhHpqDzkWfYfacuvrKvXLFX6SpBvYGxWgA8ddzk9BEuuh5bxb9krzNVsqEDstgdA4zGP1crUJs",
  "key48": "3cF8HDQ9FYEqUNU9fKcKY9wFujRBj711v9LHuJFogFtmGvCj6pVPtSAo5xDsBWXRDD6FsRRAq4PN8weAAp1gq8sm"
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
