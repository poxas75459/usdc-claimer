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
    "hwTC4bYQ6nxELypQjs3ykLHmj4BycjyocQpF2fvSBWWrtZctt19c69z6gu9shwdLKhpqGArtSMn8EJr5Ub7ykCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24VV2ZnvxWk2Sn4VQcP24aYUY8mmTgpK34DRYMTnr8EpiisBrExGB8dn7NyLFYXTrq1GeKbg9Ttza6fXJD4G9CJY",
  "key1": "5MQNWQ2S1XT4cJkxU1D6QbTyFFupX99sZhj9mnr7zjz9SjkhWifi1ecTrRRJetDZ8avSnXc4PzLCqeeknEQKjSMX",
  "key2": "5ktHgi6DTioSdFsq8C5sYxHYGDo66E2PkPojXJ9iihEyZwNNUCWBxA6t6B1fycR4pPhCpEvpVDJ451wYM3d7XHDY",
  "key3": "5CjmDKMKTfhFQyiPy2CTrbFJbFtuSfEyJEYr8Bo1Bs34CCe8AqDJ7rs4Pa6fh2dmxYn3TU56nJDjqx7P72VkTGwo",
  "key4": "57hEKwAoiwYVAH1HxbuXNJBDqzyno4fg7Wey1JRH92H5jJGyrirM5KngcmEXWKRgL7GE6hEo8RMc8JJqdTJohG4b",
  "key5": "tnohMfMZdXdaRAw2gbpxzU8ZtVGeXiwgg1MGsb2diF2XsZKAA9GiJD2dC73VMxesZ4LW7BdWuZTn1446hvAtiQ2",
  "key6": "3eXkgFusvks9BGJAC1W3ssQpA3qVu2gZaVei5Tx2uAyV5Mhy2rg42tEUt59o1EzuHUzEfUarFZqta1mB3r21C5ZM",
  "key7": "3Ag3jccxVf1m6DJyDr6c6wbGevKEKsCcsMBfrNysejbzUkTRrPyxiVPPD5Y3woP2rtdCQhWh5tC7csaTYqnjYgZG",
  "key8": "36TAU2RX34q2tmKiJ8PAgFEuR8wT5ebzfSXrrz9WvPVNFDwfvm8gQA9U1L7wAKHZAoShttKBWg2cwDqYfy9nm2Fk",
  "key9": "4Jr3vAtEhz4MpfVcyjw8xvAqZPVzMKdMgjjtZGcF44MjVinZHsTtA323iMyRHaijnixe5CVFgEkKJYiUSTbJwGmg",
  "key10": "2dfP3TPQwQuf7ngmNwpUpuHMtyv3w8kdqCSJ67eWxw3acARH8E7fwcPHPdiDWKEhTKotYnc8ZEDvq8FqAeHqfB6A",
  "key11": "26me91GbnQ1tqzpztNyvMUekKsBW6ojJ7ndhGU6x3rJbAoDV918sWQGURXLyzyjxZnvJ5U5V4VwGdriNhumGckTG",
  "key12": "bLaEVQSYo1oDuUWEtH71CCtjRfHTngHfsj7hyXCAaY6JZnr4KGPHH2EviRwzjGvHjEX8asmpZec7JWrd1wZDwAY",
  "key13": "4v1hDSRXXuSbkFQn2UXZ5fBSrofyxZCfUcpNFMShEX1sZLWrKx7fyyRDwsUMC7NKWk8ZPHsAEEtcJt5BKQf9gkcp",
  "key14": "3GpR97dd7zD9V5FEpvVXXkkVzZAkLrv7pracDBw9dQsFhshSJDKHZ5fwEjx3x4uSbEoaqNKYU3PYbaGTEx344RTu",
  "key15": "3fT16yighhwWYF1PaLPfKoRMa51RzezvvVHPyagMVeEYzEJ7pVhabU6PLKWYynA9imbtARwegdiFu7yzpsxJbiZe",
  "key16": "5AZuHUDtgrr2W5eHUjKRuw2JF47LP51vkePq78WbPmqYHVQmNGbsLyvRwTYDCLtDjy6zoADLvGydWDZtNd6skBLg",
  "key17": "67dtxuaMYE89zn4whTKcivw145mqpiRuE3zr235LDgvL7dUBQLUs1RH3yzoK69isc4fjTkQpRPXRkn8oKBJ3mWwu",
  "key18": "5LvwnGeVFyyFmQyuA244cwddonX4wcgQjfXqA4CVfBHuduvSSc2G3JzsBwxy9umg2ECzuLkt8y2KwfRfyNNCqTnz",
  "key19": "4tMunZB44D47JBMtSjtv4ohQtn9CcJbTxHCkGuHCbYJjou1pZeDTWuSK8cfPq89Hz9kFNNfqRwkn15H979ecfPxP",
  "key20": "5dGfgWsgAEMPsH4kTQriWGJ3jSBEv7P2RKrn9zjHZcFM6rFQjQopHgPM6LNnGxJR4kQqTCJwJHzPo6bRnsXU2Vpf",
  "key21": "3QSA5fd2aLux8a3GvkQL8ifPRizR1BWy36DUbipYeBNrBfXSAheDHCUUtywrve9rWq8jznpRCEUmjReBHRYWPRs7",
  "key22": "2zu37ChnjuVyFaLEE4zXNDmb1EBy4QkkkQaC3yYW5MirLqBdJWCxB1kCRAhwjsT18XjUMJSnDX9V87fZpnknGJME",
  "key23": "47C5ZmEzayByighgxQdu1rBpXoAFRRoXheLsNToTaiRsQhcP4YLC8BTiMWN1Csy1uvFqbZ2qE6PLtcsnauLNnHZ1",
  "key24": "2di6oHFbrKF56X5senmxtbVpvq7gWxGDGkZQYKmyR8tmnKTurLCQPDYVcEjvf2bJVTgT68YRu25VYZjEbrjceWEC",
  "key25": "5kUx4NWJjdnAK8JaseDJg64uWuTiUat6nf8YUU9fJEU8ctuAbsc18xsp7D7j3GGnsHBSFEmNyVf1LpqbVoAnt5j7",
  "key26": "5hrWAFMAqh45C9Kn93k9MMWtjZz2N2MnUGxVQurLJUbwBtr7HmNeNGyKLprBSHPUcqh3jsVPm4toFcC1JvUWzaRm",
  "key27": "5xpt8yTvSSCXbLHn4YupeScq3Ng5UCZH3LQokjgGZcU7XdT2h9utCdo1BBhNoRXk8974qGpHNjuXYzSR3NakKJiS",
  "key28": "37s56vKGwMpLMTEoDjY1YPWhXxBLHjxggXLcfyDJDVoeeUZNCBMrPvPVP9qUdTQFHYZdSTrfSrDSk6vu799UfoRi",
  "key29": "4PLR6NvxZfoxtELGVJfxaJHHqXPDEUdjAgqmNCX6AK2Wg2H2y3wbjCmXpc4LVGR4aJbRZVdVG1dKnt1XFo8Xc7zz",
  "key30": "2cGM6VAoc5CLP5qBLrLnyzLE9pETDpUn1DcfodphcRkBNJqZ5DEU3S7ZgKXfm6gVkun8GWF32xGKTLv11HvRkXRy",
  "key31": "35fNyPHwgiYayKwkKoXJAj7phmPp66Bgo5TuHirTfTQ3vr3sAaMoGmzbUzugjM3GtPYDVghHyr8P1T8TfmJujLce",
  "key32": "psg4s4qbEtUWXoYowTf2JqCJhUcD5SuGxakRqRdJyV6ovcH9vbHPMY99JbNrd9ZBerjYnEDopLHZyRbD1p2ZuoN",
  "key33": "58ZGuoJhpJNh1gGNt8pJXDGxrfdUmNs7KWxfD2guh8eGkBGvWjLcsFosjWkMUTLBuZ54L9X22sYjs71YfvxSM6pE",
  "key34": "5nVybVAsoA7tYGgKyBbzU3JKK7S7pQf6LbSz7MymvcUjCgCPoLeva9agteaezeYh4nRZxYdgn2ovegGVmx6od5fN",
  "key35": "3UyoPVuWmYiFWFSFQrbwqVTWkCYSeREgCnmzcgjqR5Xeat8bv4ciNRmouKzJiNfH4ef7z3xvyrgX5aJq3CobMLas",
  "key36": "nXx5W8WpoVQAjErqU9jhKRshMRQ8D3gbRxuFAPSfXZektESBvRZ7Z65HywhtA1hLp17YqCTpSFi2aqYTiBLoF1W",
  "key37": "4ZDMbh5Dz2dE7AnfhJc9ykbVRm2pQs9XcANc7s7Tjp6ZkRCtefavGhFwojurxYC9R2HGx4oiJ57bExuGaCqw6CVV",
  "key38": "2wsxwqzTGYQZPwLztppHhjY69PqpRLnyzpSKT9ufF1odPEAios88kPU6beyLXEWeTi16VhCH1mZtm3pqn2Njenyd",
  "key39": "5yi5PFovr1Supe3CHkPDzrQGGgQrr1EAyUVTPtp4UiHR6FYvcjBZAzpuhqVZxJJhbec5CF2f7H7zmtC8hjM5E5tH",
  "key40": "2TPSDuiJpXCdT3Ar3BJ5R1XtCfGGDiTpJhQ95yWgej2FHX6GFb1ThMH9eJV2w8qjyv4TdgnC13iFA25D5CRHL26e",
  "key41": "2Z7iHBQUFkKgz5zVn5bxHuvKJrcykydmn8gQDpwXvmZfUrboGQbkNqzPzf6gJf6CicusS2XwA2iKGCshs2yux67v",
  "key42": "5gB4irN5GpyaQn27WnW7hXBFt58m8qYQe8Cp21YKCTxENH9GZ8fT3D1jpFDt2kJUDEMyTQBQFT7pqxCwJj5BwJdE",
  "key43": "5u8ZE64aczhHENXjYMhnnm4XfWZxnmfWHdQ3MrrAmjZF5aYahZpyUWhRHNfz2WeEyvfqeFLuyR6AjQK8tgcVxgAe",
  "key44": "fh7jFjCL5wQyC3EZAFm6Ux8718SG9cy9LVXSRdbheyEEeLxX72gWBu7WHJwjYzUPAqh6vJWanqPnS6GCvFgMPz9",
  "key45": "56G32t7NzWPWrQPpBJzugeH54TxnikpPUuygDSppk54wosj8DgT1Eedzw7EWtR5t5a6H6eNDvj7L5aqsgAnyQaPc",
  "key46": "63fJSDRhD7kj7AKKFwLBaTeQUH6mLg34gLC5yetCfNDH4Y4no5V8bc4rhvjB8YRebjFAU3tzPtE7QpoxVXLQDT9n",
  "key47": "5Vgk7xWKrzivsGDpS4yqxKSXrbUyb7aurcX7UbQCGCGwcPU94jg2BCEqDkxxWAtLyLfexPFddna7DNBLiHTF2eZJ",
  "key48": "5Uzx8QMqR8J1KkAzLWkSRXQfUnoyRUhAkSCf4wQQnMzWBhT5GwVtDF21B7V31dTgGLJ9UhkgsiieRyCLZHubPwqB",
  "key49": "3vorYTQDQtducyWBnuXaKaHBZUdswiC5VDzmHHhi3NuWXSAbCoz7fsGdPRRR4TT5qUSM86D4xfRHindq9Lh1EVNR"
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
