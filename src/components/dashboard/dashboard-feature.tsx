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
    "DRbNaAqK84i6eHhXUXYUM8KZUf16YLkg6gELmRMNVipf1Lh4A7Dx9CYDVB5hmuZZFygxW3mSRMzsCZpTX7XiHzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XrTDffis1UM6fze8sd6zqyvQiW9qSC1WmhqUzrkXyLBLhS2VjaaXedr3u7oY9ixeNCTY9kbKZmjcnimt9tJqCNh",
  "key1": "3BGgDf6ZZDaico7fBUD2oTEw483QYwAEajYJJetWh6LHN3D1BYSoHKmhcT45nEiRuyYTozmJNtYfNtTKbwjBnTDS",
  "key2": "s7zNa1T1DL6Ns64p7C3pHjod4iTpeWkSRaecfXbTcfPguMrBwUKeBV5E6LYoaBVf8HggaCVxmkHrKzK6iGv4BV4",
  "key3": "3aMVys2VP4d7GHmDnomNKgSv8kGoofgwviTute8YZw93EiixQX6eBsuZqSfAaosvW5oWpw5uFZw2bZ7wCENfFFnm",
  "key4": "55dqfZpJkYf18Cftn4rhWBBdPmbjgLyK92BDG3m9AZmpByfgsfZVWnp9ECCndX5yzD6ZLjX8heeMmryLRsBDcQNm",
  "key5": "46V5cJjw8semoXGaU4HisP3hn8K5uTspHZb5ZZsiUZv138dahBEVa64ef4BvrKrVU2a7WpLhCrRQin13ek1Si43H",
  "key6": "3WrKWbwWGHrpyEmq7cy1UFtAjSb1dXkvCkai5ZL7M7DZkgFEkpayRKypEFG4wxDETPM1j2cAXtrag49tMgbBg6UU",
  "key7": "54UJJihjyjRMfBgPbvbY3Vo9DvKnd2g15yxBaJWjmT5DT5Gb3EPq3ZYzE854StGdUsGcWoGBSF5wcwxf4EZFPFTK",
  "key8": "57QtKqKaarRqHcgKnF7WdJ2rteUM3S5jwNDTx6TgAygiJyirNREHjzGhCGpHAL1BTsAmQuSTo1VsETgSjJqvhyq8",
  "key9": "2kQcoZgHBzo1K3ZriG1J1QxWmHLU4tJKm1DZGMRDP7KRGWV6yRyFtZ3Qv42rTkmsiEVyNmwdmgKRNC3uwwUom8eS",
  "key10": "4wadXotTF5EknAaBdG3cT2YmuCLLAMJsq6fnDB45iXTosCCWubSrBPjRB8pPn8fkMc6aVNZctDCSGVpf3EwEWkoM",
  "key11": "5e7mSkhnTQ3bkbkUsVg5DU6HSw3LvJ1394zH4ia3uXjhQtk3ACwAvGuoYecb4X8j3KkXNbfch7D51YQfGgchCepu",
  "key12": "2McMWbTVRJo8tfAmMtTphCpnYsfPERmtPwdUQ65YD28QR53bP69thKmL54f9YEUtEfkF1GBMeU2KBLVpt1WWpVhR",
  "key13": "3rbsfeGi1BfgZEN65teUjF6K81VRmKJnKoLgqJLWAgKJgkWUd4nVBSWAqmUiUSk7wNrSACZLwDMFDh5Q7WHi1jLz",
  "key14": "B4bxKcJiigbXdTW7uFVuBi2NYgPt8MyLxcP1MMV4W6souVkiUJ7x43jWinKYRzxJbwCbRKCu19kawCJUa8qeZnV",
  "key15": "3CQWbKQ3kRCj7TADfv77JF6xSJs92j1WT8c7AfYSAKtPCT7L2S17FvuT3NaBDk8iy42wzydgNXTHFVGD8QVY18E3",
  "key16": "4k7CBQHe6ryenALYipYVTVVWeD3aPJridxDHL1McCfTM3VWFgbchH7asfFtJ9a3dD3Ghvo51P89xfMUyR7VjD6Ua",
  "key17": "2b6z6b1jwpZyhGaDHw1azshZvnFTz4XgWV9KoowRRK5zg6ARrboGeyfBAzNYUdywpr3RionE2B7G7rwoS97N2piL",
  "key18": "4epGHYweBJ5ZSyPPeGByitQuqCvDdr3xxKWJmF6JP3rE1b5iTXdibwnD5vFPmCeXJYP7oSwSLGV5HZ2mrTqm978u",
  "key19": "21vZFmiDHpKFsaNHBgrQMi3hjD9K4cdkcFQbCPVCVckfsHrhxpT9a44XjrrWt5EPrxtozz7vVYndR8HDPs7PkYuU",
  "key20": "4JwntpKVXbNieKdVgB6tFjfqamzUTGcEakRyQV5JTSX6Mgpv8JozmHvRQzgMKXWSke3xjM6RPY8JnEfbjSf5CZ4k",
  "key21": "3W3xsoNWK8hyBcZTmsGgwbZNS71So7yEtCEd6h7oiuS8xK4DJkcASxZDn1dC4RNKfFrzvAKb3S7nhEC8mHxX3anN",
  "key22": "5NLuAnUUVzJ94KinXfFxbiU1Wxsx7KLbByKY7BAMQTpxk5Q261ayiXzH9JwFANpp42mf69EEF4xnyYZU4eCsXrx",
  "key23": "3qFpsgvRWKKDkURfn8yYZkbV3RTmu8ExHZPy6u6JeNi7rn2cSmBSAU6EervnjctSw99wuHUzxHf8WSNdLCBLmQCK",
  "key24": "TorGbGiT3aoRuUXGDdqLwH3oECDUSWe9nyBTcX7TxmSUAD7CoXHQGj7tGghQHR3UQmc8392rmwxL33kcQzZb587",
  "key25": "2cra8bh3MZ9DUyePE7e7GJo2VSiGjwqw7ui8usCYhvgy2Vak75uXzU86yAZ1Lrdau51SzGMHon58QhN3oc7mpyhA",
  "key26": "GWCXcFHAybqTNgHsWnBxXUdNaNHxwZQG2Ljx6dTJfNZrR1HGAeaYjpsgJ7S9L1K5sH1TweVyWWWqUKcrNiXhQAr",
  "key27": "5E2p7Euxrb3QUyXaArCirxUyAC8YDkNALWAEhE981RVG7eHtLq7aVgMfDBrd8D27L9HpagZjVRDCdPbVcEoc36yQ",
  "key28": "3jV1oydjRoYYg5bApBbNtPUbjpifkpiEQDG2Gh2guEfGAsQZc6SFnaSfCQg5qEtdSGKvHkixTJHwSv4RSWe2VCeL",
  "key29": "5bngYpDLjJTFksboWSDEU1a3c4R9WvbsQ8AN49JyyKH2kZdjfHKLWiKCFL6mJwdDJ7THcorQaa84G3yVMQqntTEJ",
  "key30": "3HEeyd84YpuZywr3oVCjGbgRT1ktL5JQNGzkovt7uQ2AMDS6JJWWtbJric1HfwoXdv4723LJBxcU56fQYtJN2J9w",
  "key31": "2ZUBY3iTHYjuCPKqsCE4gzrSfwdCgYZoUQiYTKfsvRZrfkzcBZvJaCJgknCk1r9CfPyeZoeJPHqiGkvPUsAt7g11",
  "key32": "5hb1bhT3GYvMKDprTpBiseqKEvkWxnh64PRciwZo5SaLNdy1nCYe9NkYQBWd4w66rhnqLsuV2tjhjU7U3Rmon6JF",
  "key33": "5M1ncnfRjvnF1SeFRvhvpYLWc5Cxs8Eh62mDaQctCC8AbgwEcGHbgguYsm8mtDWyVVm4V5878LECUpq7eGMr693W",
  "key34": "3zC6ieabpUm5v999YyuncqJrKbX4ciawxx1BB78tKJmzoRvjFPekVWfEH29dyqewBivghxWp2mgMfZBqW3aJQyQu",
  "key35": "2rWAydQfCHC31TBGzqvxzmPfaC8RBcNm7H2ePNVnxaw4BzRDL7stJkxcuawkwfMZNjAPJZPbXneZvWcKSbsNtrF9",
  "key36": "4YEmULhi4GfQcWRNpomMHZ9pDPkWNCZQwe4ZBcxwsV9ioSRRgY1Fd1GqtytfBiiQg78ePkq443kGMciXUU7GHUkT",
  "key37": "4SygrPok4BRxagQqcNV97UFzSQbZXPHKgmbbc5QciGFJM59zkRZQZSMUUkqDw8pqqmTSZu59tr123rWWGomdfAAY",
  "key38": "5vtnypVeeMKurD4E7jGMqPkYJS9htpdK7wZNJtX5g281wEZkFTXWyVqvXUCj6ZU56EjECP8N7B2ZbXima1DUPJsq",
  "key39": "4hbaRQ3SEuvUKuaGfCBY5XDMb9wqj4qUFgKRYWBKLz8kawVB32L6QEKK9A97qG1K44VUEn2W3FgKRNGeUzsMvKDP",
  "key40": "HNNKLamcEaBWhge4hupD4xjdNN1HRdFEjGPd7D2iqQmLWv1A4epUHWCS42M6eEgS4gra171SWVN3ExDQZNGbc1a"
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
