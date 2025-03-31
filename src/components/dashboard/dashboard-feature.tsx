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
    "4gqNg8QG8ecBYTpESEhCgMdVA3fWEwD6jGfaqXpzPjAd6gdP6uCiAj6fxQL5EXJsxo2ykHZNRHnVz6mbxeFnLVLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HZFwosgbdJ32iWAUuo6ZmmBRRrSmJXMeUu7y7kvFiAqPAtoKuHv3EGiChCBZArkgCBiNCfdBQUyJJLsTgC3dRQC",
  "key1": "5D4GX9vuHx8KwVArrXxdsvmKAvTgPhT1Z8oZpZ5WoZMbpfBK6DLSzWaCw51hrvfnxSPNMytQL1hecdYtR4U4gLPb",
  "key2": "2Fkm4s2mrgvS4tcDyrTkWKf6itgjL431XDs68x4vRqsQ27EXj2VuKKfN5ESxCShfXNAUBJKvS4GrhYEkUboYkeHi",
  "key3": "63qhoKLnNddVpUz7MAma4frymt1gPWMpKPVUnogRHJwRhYj5C8tEYKh4qcfe3kfxC9xmZrZicjgYqeFiNPPiM37Y",
  "key4": "4sPKgA7yY69gH5SarQxE7ecrWTqBQknJSRLRDLyfySnphfvWQ9WSY4AWGgUPCYcB3dmALu6LLhs1acBNzT6wW7Ky",
  "key5": "5ePZRzRZ12hJUzNPS9CGDVVBcvcAfNYx6nei1HsEaCiF7qFY8kERdB3puhDEeYRSbmbAPVguCvxqu45reM8JAze",
  "key6": "5FjF8NDzyYNU7qFhkSekTbGMRrFDPgY1L4kEZVnCauAKZ5b4HxA6LPL4dygaDCWb3Ka7rpsqW8zWRWmRhfuVbR8",
  "key7": "5hn18MQDV4Vm3ipZ2ygW2FA16AbQTGyCT6A3Y9AtLu2rKwS2ob35txzrzFMeDMWYnq9vJnaT7fi3kNQdNRwGU4Kg",
  "key8": "3cZ6Dxw7TzBXNw7XZtz2YiGtUWNL3DMcNYqo5DD8h4BSww6yGanmtfBcthYEVedQrNRQ2zvTRYvFEDGyuvJQedKZ",
  "key9": "4wtp4s4ved1TbNU8nNfSHw3dVabZ4TsfxYrXXC6xxSV4PFcH65FR82wRGNZgWyj1NRbatzqhRT295Ap16n6khkAA",
  "key10": "3XwDUH5HkLLiGNCg5Bv3vPvkRmRteXiUQVWTAuBKrn45ZonWyzvDj24kBFLknpVnB3WU89dvGSK3aedAqwdiadDx",
  "key11": "eC69nZHNHnM28wM15FzaG43dduk3BfmGNgMpsiAp8ZJa5yqTWA8ac2wStRdmiKieexycqstMeAqiZWsYpzZQtjk",
  "key12": "3DRQpG2oAdb8n17AYPjvCzgP5wLGkDx7au6E7HBEJiJviauXZRwKk2yDCxKeTXSEDePxDB8x4GbQvUioLMNqBUnh",
  "key13": "5tsttf6KssAm2N2NHbVzRXJRV7t26gJjd9HoiC1mLjsShPuU7RJTvzJhRuk8WpsTZsXv4EgphyDDueC38DSyqUZ",
  "key14": "4poqNdvrBrr5zMv799tWrERTMdtdLrcZwmHymakRsMhZkCnRhv4ZVP31qVoULig38ChjUtxZwM4XrQ7KJ29VMQ3F",
  "key15": "47JQwGe16iap6JbjjW6qUDEbdmzABNx6BZRxx4DygMakYEH21GkJjMBzcBTdY8BBEhhgPNCPf2V6w4AbP9Cy8xCG",
  "key16": "431GFKu1ctbGceR5iqTgEZREVALjeoybDS7nq6CYSPsKTn9uyVeVGfTmqSUqQMxZNVUoBALKrCMtmc53nYNZXzeQ",
  "key17": "2s1yRXuYHnCMXMJxL7ubneiM4ibtJNknJRyTT9udRX6usfy92Yoi7hgREvcKqm9Bp7AZSp5WHRyKKN4UuAyTcaKE",
  "key18": "2rqeEGGMAq1FmAZqnCAUSAUzHmQFAYQ7oepWUWVwTNvQXvX42zBgPpHMN2vU9ew1E4b6jvNWb6uUdXGY6uvhV2oi",
  "key19": "5MhY7PzNM8nJT5yV9AM6bnmX2Sdz8BmXtZBEcxrfJLc4zhKzNCWoRHzmdzZnnwQbKQhPaLnUxuggBd1HmJ9Su3yB",
  "key20": "3KDNN2riFUH2WAWatJchLTYnZB6cw7sURHpdkuY8rWP5YLzr8YoETYxAfFKtXKNFDs9BdwYY86oDbig9i26fyFSv",
  "key21": "siJgs2mdZJKTrxS6mkv5yYk8FqEEya26rDDUr5aTjnALm8LD1Qw8YVobXLvCouCacqf69c7sLFhB8DcenP77Scj",
  "key22": "57LAK87z9AVGYHYM5f5waxkaykfeRxfJqxn5VU8Ncd7xxkR5a1oXvZSmX6V8WY3obS5t5mgvPE6Hzqrzn4n9gL1Y",
  "key23": "kvJHMeZSyHbtdJCBjfL9oKCNzhWQkLRdFJzHhi9e9oJZQAZKXakiV1uHNkTuM6KaKjmUnFtkUkFqa37g7ZAwt7k",
  "key24": "4KubYmfCB1QKhbDNeegVAz39RPB3RVkVmCstDbycPKavM9vdQEWW1BqyzsDM7nXdDZKzfbovyPcXSqw36bMzYkjx",
  "key25": "3TUScjYTi4AMojELHKA18MhwfTU5Tm9DTS6f3MoQ8QADg86b28XRNtsaYR49rSkhW7eRSHdjbd4ZkeXyRvkUKAVW",
  "key26": "5hUddNM6HMsVAQSDXRNePHTo5nnhfQHZYGwinCDta57pT6PjsaxUmuRnkHtpEyPXyW2iPVLqRJUaG99JC92G4pAe",
  "key27": "2Cx3XytmcYkavpErLk5Fj7TdeNSbe5tqdYyQTWxKxo6PbZp5bpKCXGdiDnMYgudnagnFB3EBjgL4GxkyuqPtm4x5",
  "key28": "5JFdKcfuRW63yTYL5AyHJwj2dbEqAYpwHMtdkExMCsSyk8FoWaAL3FbqxSCRYZpndiP8S177RAHv1SCodHgxybrb",
  "key29": "2rJ2vzemQKY3NzosiYTZJj1x5yRMejhLTABgCwq3FFgjQ9psqiBXCX1NyFJgvLoPRkPLY8QG2ttRVpucmjM4WYTM",
  "key30": "5QaFDZ6x9zAZuKD3HgfwV74TvFko7u82dRy14U3bUNZe1F4J3MG5yJnwu5zYL9Zt2BzhwSLn49Hnfz1fW6ZHPhN3",
  "key31": "5RtfGJEBqzYDbwyck7hAcku3dYt2wqsqgH5f8bD4By3Pz4U1BEBZ7rF4yVEzF94T3GyT7om8ri3GBpGEYCWhcGd2",
  "key32": "3dAGwi6zpreq39nS9jtNrYJYjtkrPKuA5vkzjo1yDsYWY2CU92JNLMxK4cheywv2Bcs8uJ3qfN52eYDME9odu5Y3",
  "key33": "NHbhGucZDvLJTy8pG7WTEZabnoHFCsjapfjbJDGMaCiqJurww19QQaPxxVUGotamWwhVkRtvLUAeK3Nyx3pcykf",
  "key34": "c2rXjrzxiAjHz6B9khqxLhnH9q8WVAmmXgxjgmexuirUi5NR4w3odnqGarDRCmugmUp4rrxpye6KP469RYSxv4G",
  "key35": "ugAxihhRyFYov8zmKLKuztRRTqvgS2NbBiHCWT9pEKSXDaRykG9WPXfy8wZaihHXthhWDfSts9nTfFwUDqjzE3b",
  "key36": "4jLydzt1h3W23C6iJBxKRFG2U92Tqqh699RgnesEgEqXUYf2TzaSPbW8nfcaQT58N6cj4G9zzavU4t4CPzZGU6Yr",
  "key37": "3dAaysFarJFd3zjioads1Twa6yKrvc9F3Z69XqoKYYAzHCxT9hhwYumLSia8yPXaAuULW7Z5KgLmdXadHbURYs2h",
  "key38": "4MRCDGRCVwh6pxH8HH5MuNKpsgVjabGVpYt4E9zMCSocZqYaGKHw7ZxJuMToVjWmgnVLGEDovnzYWKiM6S2ksCLA",
  "key39": "4566aAcRgbGeMCDsu3TrmfeBenJ9QjTJEZYa63FufWQyGSDvZWw4VyPuVLj3Z4uAhwWLcDcggRXAbgoBLeB3Wc83",
  "key40": "3MZTKanyAfUAtsZYwrzdXdhdfWJC8TJanrFCSKqW7gsDezgpoYMNUWGHAg8SGLyDucAaH2cBTKE7uonD6KPAhJTm",
  "key41": "64BGPXiJr2b5SkKxZ25J6QHp5X64f3LHXYLef85418S6boyjD1fLbknVUgrqAtNbAEw5ZQE8fkwedkBQBMhr46E",
  "key42": "4yAf8UmtPkoJnJzrL6t6VmG7FxNC2mVKWvtEVFfuJUisFndHQR1MP2ir4ULUKMmygzqA5CsfJZiwKLJMKrGYK6ng",
  "key43": "e7CPcMBywyBPMSp6RdfU4stHycy1ax6VcqJkj7SVneiPwfPYpB71uh8ZbxTU6Rom8XL447CzMHsaVRJovuZDzJq",
  "key44": "2FAoh4ujMLDyh9WG4VvoAZXbbHuTJPu8cZtD9YBknVAuZFxDQSw4uLTZZesniHNGYVdHE99WWcuVQHgez13ypYb5",
  "key45": "5Uqu7zypY2Czy6azexHzxuR1rSxyv6nLKB6rhCxQpuJSaes56q7SnN9pRLMWdMprEReCaUJU24UGawvynHBdQpBK",
  "key46": "26NoR8kpkzaEcPGunCFFRGpDyxwpuGGxMcZT58hPn5pvLaPRxexZDjAqgrJmg8hMf6GR4XqD1e2cYw83wBXotWUh",
  "key47": "45KzZabTh1gJcqtsCnHX36o97ZF2mu8MFZbk2Dua9q8EyFD1CDuoxhyXKPxekzD4W5t1wNaSZVQU55CTVFiRLFyg"
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
