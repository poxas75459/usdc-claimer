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
    "34eDZk33vRVpzUUsvx3JQH7ANm7pFMxZZtoUugX764Kip12gemuk6enuyUqeLqp6iNxeX3CqFMaz6w4h3YjMYupf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nCwoBeCyK2q3bTwPuCYuWr2N5aFZ8cveCNmbEgW1eJH4i7CtWnNrZZXxEg4BX6qVsUEa3Adm3gYeTyXzcA53rJw",
  "key1": "3xevV3xCqJMSz5ZXZfMZJQk1iWrvDomSpTaLUcombqstdLSKtpfDGpUT6vX6duzRNZn7bwcLeFXVj1Y2qe3jmKyd",
  "key2": "2AWbygveDaABwaati8nzLaVtAxBe3mwiUDMoXbSdp3FDWE3ZGTUSh3CCNAprD14iTgEuhRsn9Bcy8PQAuQ5Bq48H",
  "key3": "2P7KhGyPKkFuMmf95hrK2pcZbeqBtBAtTsCGdgtBLvb5QApyNbFfN2ESYjNVkYfd5EnFPDpqHMLbhnp9aekxjUwo",
  "key4": "39dPSTWVAbFx6kVV7mhRGAcFbwjpJuxBQQUAptY6YVU57jA6wqGPWsVma1Ei9C4dKbSqF1eW7MQjLCkFKUQ8E8Hm",
  "key5": "2vHgVXcvXyWh7seG5K9LSoqBAh4ryks3U2mnt8W4Cn2cdMiEMVQ5QSamm6MASyscXUjB7waQthPVRbLejnaup5x7",
  "key6": "3n9JfYXrpTQ9F1kdiwbn3tj2S8es7cF8Mirx3ibrZCnLWrUgUcG7ywfuuMFrNwoVpxw9N7LT1unbJzSFThgEGpN5",
  "key7": "2ZFKj6NnY5TxBFqzchmkeqptn8LcQCqVzV1ScqtYY6i5xYcgWJik4phwVKXtSU7fCfEbLqsWxkfDjTSn5KzGHGLK",
  "key8": "52TtR22zWkU26jL3kzDDXi6eMRq6GbKMMsyT4DtnTdWwk5esMJHcjVChRFfefqYWbzdyfN55Vga1CWuNh4EC7haw",
  "key9": "2YWrgBaprYCMFRyas2uViR6m5EJVkKFiuU71Tnkdv3npWEdmVkxwGnTsQXc4GuhL4WFWcYmFopnc2GfP8LDRkPgC",
  "key10": "5sUuGYXMSiuvdF1kZPdz9bVmhoyrnvoFfKkMXRmEr222xVrh4DshYrArmM6vMsqmZjX2VbqX8ycDGmcf8dAAzTLZ",
  "key11": "5ZVosH67U2JPLyqHMByGcSkbDQgpbaGDhH8WZviEKk2QeWUZ15CXdbMDUjzGtfVvkMeCPg6fSwp5eFCtpz83LTBQ",
  "key12": "5RuxseLuCSbKK6u6nRZDwP2Y3GCpbhnrCDHcSYqWKioUyZrL7Bque5sDNAeUpKmKtNpWimMqz1muj1LSUeqkENv1",
  "key13": "2Nu4bJT2N42Y7e95GWTqF3JyBdrSfcobvyHN7aPteKeuiAzUjGL8uMt9fxwyjcmynJo7M4tBxBxQWQWeFFUwvr7T",
  "key14": "2LS8pKKpkvbj71efq3chodSrsADPfPR4B8rd6oW8dJbcbrEScCNBwaaTejbcZTE8EzU51d4o7sTzKnNffcnJZPCk",
  "key15": "3oia8hYFtTXAFEDXU4KByUTmTCAyZQgFWF3kTPMhk3o33C5Lp3bkE3NicLtGQMshTQmWpE95rNEiGfr41QAFLeMG",
  "key16": "kM47mbHfhuv3wJBSDPFJieANwcVMhyNSFcteUnHyc4fmMxWr72xEB4Ww6J9j6XVP4fMeFKcMp7UiajH3nLSRtg7",
  "key17": "3qzZxF2vDQvW8pjAaDSF7GyMU5uLmnaU8TLdnYkJnZv7LGY77yYKysAhcgsVNguzNvDRBZs3oX1T7eD7uKbDzNiQ",
  "key18": "3b7C1aodrREkCvMM8vHeTPDUEZe8muizfeakSgfM2B5fsH9QokUgxebDk31cJYWnQK5CNyqC1gZL1qGehMA2H2FP",
  "key19": "2jqWaSfiWu4RxejBH9E79dH7UfWvRJGTXwtm6KUk2uE5pepJbNKspCzLuMp1NUiphv5JbLWfkC4RrEPgkbvdvn81",
  "key20": "2jbLRyHy9xQxvZNZH23d7imYNuTowjkDaLJiCfjC61G9rUJ6me4UvmB2Mob5NbG7zuZkVduMi7hpnntwMvrwg8Rb",
  "key21": "4oaysZPa5BBt1x97K2DWwzY5JqKWF7A3xrjLhmg4y2KHPxsbstqFu4UQ2Sd2p9SRrisFxHMmsWxDhe1oZrVJCpDS",
  "key22": "3vJmWR8C3iqYf84Pxh5pRDeYF6pyKrBRWkFeRsnEgMS3W1Qk15A8qXX6QfJRqKUrZZMAqEUk7Gt7TreSF3nFNKmJ",
  "key23": "48cE83nP7o3KG93oc8ZHEsRB4Azo16122pweUxUijpU5ddiiZi92dAU5NguVgiXVNmjeaeQMAF5SSgmQHjwTSTgC",
  "key24": "3jd4Lsgc9mQLfRiKpvyQx17N7Mmeff72cgNGNXTQRomtnWfbeKzfsKmaa6f51j9DX8rfLjzh6qR7e9xgUeUhnA86",
  "key25": "5AtguCoAD9fxuARPyJoYzNFK8Bzk4ks9HK24w353ghwg6r337c7Jm5KvsFSLriHs9J78Zbk1gXS4eKTAB79Aegb5",
  "key26": "3ypKYrX2F3uoD5QqFUCch8x3pHU4dcXfXUUFLJQi18ikcgwZwDwkGppCJVppg1vPo5f9Uv3vzwVHLpavYm8evu3A",
  "key27": "3LBNZv3NCEnBcSGdeeA56XP4s5UrHWpJ6EDSeS6aa27Vbm2qCV19yiQiYzznbnoM1FjN4XoVtkGDpDaDLeJ3ET3E",
  "key28": "4BBtLZsUTtz2qAycY3LmbfnbGAuuiLcjVDNJ7oVfMGfEzE177Zvxfhxuo9Jsq4HzSnyCydUXreigDW1Zrke5QiHN",
  "key29": "MHBBN8KTw2LZBHSoDLcMbqX7nxGxKpR9xfGr6xo1eaPvcAzK6PRnnJQKniiQ5xA9TK5PEczjWrneVGpv4ULA6Yx",
  "key30": "5TvGZHE44et93e9Lau6r6vvgjvgNPyvavDFhbhKh5KZmgpovVdMecHb6THrxjymAh2XnxfXfCLLsHDENjw3ao7rE",
  "key31": "5tMTVHxQAkBwD5vBbDShLQbjRo6Fo5aQU8hraKURWSMn9vfsXHqpDSuuswdo9WpSzPtck6gidG5iXyQa4Hu6ykot",
  "key32": "drLxR9QYHx39M7J4t4McMZepMqLFTMyg7syAkAK8uJZ16hVv264oaxHe3UEQRyedf1xP4T7HhAa8pLtLvztX4pv",
  "key33": "3Yg3D5NjQvRW6QBYg9UBXjT2NbLyYmWNLGTyYqBoSd9ifPpcWF1zjT5AcMvX9HsQS7DarXdVavAzBja2WtsKFPu5",
  "key34": "2D8Qhsc9FKtqsv9KeG6r2Gc5pKzBY4TVAB4mTsrgTmEtpYjv5DcftUvB4pwXURquiMvJ2XECEiMpz1q9cmT49biv",
  "key35": "21mSDWKXhc519wcdjAxLw4XoToSuP1i33FrrTt67WqrjVP2pJnY4jZufbLmPQcw7W8jTXm5tm7HL6aYMViUvMaUk",
  "key36": "5smfEPjZSsjNFL9RouKmARDbkcWwWbNWWuJAuvXxy6LCoidgXxp2pqx2j1H1Uo6iqDmzRnFooKNHwAoX8Q1W485U",
  "key37": "4euQ46usq8xV73uxXNfrKn83ufHMGSX4HjzWgr59u9Ji49c8QGAjT6gnp9C4ajociD9PFJZnXykk8Zk5szoT56nj",
  "key38": "44nBtG62sDHXV2oQCBUM3QQZWTbuPTYknB17yNLd5uakjCYABKKE1tQSgszYSfXNRAG6eu8THXZwhQrdXthUHJWU",
  "key39": "5Q2xyuhrmR4hG9SESDrhVTsgZLoM8ftJ6ZgZBQwDymHLEir5L2KPrR8voqY1CR1F9e5oAqH8cQ12DLyJtDza7N15",
  "key40": "zCY7PbRVn98cMhpr3JAd5J9UnupMMDTkgwYGAbq7yV9r58FoK6879oSF1rnwrKrQ4RvdMgVU2V4u7a6zUtqVzxB",
  "key41": "9hgbqMFtHv4SRrxf1RtpvWGUG5MGMCWmSZ3KL1r6KLBfg6nz8b3C2B9SXprcJ61cuNkjLSTtfQwwWXYfLGwanAn",
  "key42": "DefnLd3Aqjb1ZW6UUsRH8fFBhuNqZ1gCzquRcYG8UJQaPguJpf9WSmVkBPSx2A12KoN6Snsn7DZ3VzBcK3oq7Wa",
  "key43": "4NimrxXNX1EWFcfqrzi4DmAUrCcqHM7rwtBaZQ5sjJb4qf1MGHndEFQ3vQ3ZCWiaRr2AhYLJVgZnaLnHcvzkwFoT",
  "key44": "LLnbMSKqBADBjz3qpRVoZ9MvUeUP3uYCwvRuTBou948XfXEf2mSdUAZg32JoioceEqX3UwMapEad85FbYYSBvFg",
  "key45": "2dc3DTr8Yum1vgH9Bg7wiXLetVun1sAFPR6KiTpKScDYExNiHgx6bZJFtPshaPdpVAaC7GfH3MSxgC3xBYgmWmLp",
  "key46": "khwkxVfZzyHmmfNKh73b67RrCHm4AkTxMHCyXYCe67P4Eh3tAz3jpMDAoRfeZGaBtLXPX2N6zcrVi5kEhcrajPb",
  "key47": "4SheCQqtXjM5qf9awci6yrqDo1S1VhYtKyq1wC6GwhvSDhs6rXGmMhRtk1Z2dUc6qDo9osLnysRWkxRFZbvf8b3z"
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
