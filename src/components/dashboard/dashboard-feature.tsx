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
    "5X6fUwap3h82J2W18UCuALASbZB7ncbPUkEY9kguxYvDCknYPEP1TQWr2XdFirUX3QXFCPMBYpvd7J4ypAjGqrgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EAzdfqTtMRyr74XPzYAWkGraNZDjwJ87qwnEN1Bfo6bKQoL3Q3KPQ3YPxVBc8jP4e1BtqBMqyxwTmybMcBEgP52",
  "key1": "3B3q7dWyZiYzQT2ftvAsgprsyi5m5UyBCzg3iPUcAHy1Eb2UEguQgfRHzcqR2k8HB2LaAm3y4AH6ur63ZRhJe587",
  "key2": "wTWs3NPzTxhGTBJoPBjnfaqBUGvuTSD87w2m1YwhmhCnFwHeBKJrtBpxRmcVcgs4ZKGRWXjKDCxYJWHwBLVRYU5",
  "key3": "5vkH4dHMp51b64RyuDd6f21dYuw5qaR3gqhybWZDsE5WxMYG9aMuyWTsKoiz1SeGcxhxokBKu65sAsUwEhmnajN2",
  "key4": "64YbcA73SWUt556fqH4aiW6BgamBZAVwKE5YTTxHL8NTb3gt1gcf2ooBJhZJJkU4DDyQFCNNLNdbCwAftgNiaFBi",
  "key5": "5eNPmNPk4ehZgvHMdNDrjCPfn91TijdQp8FJFTMRNG1JRgBB32tDuL7dSmM1SudTMHWQstoS96FFDNdzAQaMWmby",
  "key6": "2nfYGNC3dTpeP3n1PFxsvXqkN3hZceAHABpcGGBioCnmWAbQ1y27QCWfRK223xbZ4t4j8rfxR71dh1gygKoQK7sy",
  "key7": "5G7n88r9LAp5xNGxinhLc6MBzVBZYNQ57UkdNxLjVizQhhUr97vAyFDpQ19XPy3g8UT1meufJgYSgBV3BsPUwCa3",
  "key8": "4LyvmubXMUSiy8mkNvtmLGwZZkBD7qutZoLQN8wqKQDCFV1xXDfwhkFWgycbcagATDLS1ATMnb5e8DVsXkStMHkr",
  "key9": "4Lmf2AmHTQoLfgZ5NycYkcku8Cq4VPvcEk5t9uXXzostttqVADKEBqnpoCUfNFeNVq2p6jVE8xhbwkBx7saiEMoP",
  "key10": "2emf14wm1k4mFCxATxhDe7soS7U5Z3yexhwpUmjz8pGM2SCcnesusFfZgZ91HYupDXBe5dMTwXFzjThmnUdjJrrH",
  "key11": "5nE9kkmwM8GCcXaknkU8SZ3hWojv7WCBhAEWWLcfS29seXs6hz5G5p4P7D3kMK4ioYbR8ytswyiyMghRveFmkNfi",
  "key12": "4RGFVApmYddtdxXP54pQvxTDkunDgTSec2VPf1DNTkCDn4XJkJTumPRRUYsDzv9t1RqW9nR4TX6GUF8BFdGyJj9H",
  "key13": "4ggj4X2r9JDhgZJPMygXB6ALG4Kn46JC3uLKGDGj2L1w7rtP831mG62jBzWMLesg9qWbmbZHewQSsjaMRX1eSHpQ",
  "key14": "5PTDvUh3szX2i4r3LsiZ9onhTQVjZVYvazzfev8SkFsQXj8dBuDzGcacwdz6sU6wCKkAzQAVwqE4qk2kWB7G57oC",
  "key15": "sq6GzrLMh2AM5t9tKQY5Af2zKEtc3ihwpyTiFbXN3iso1DMmbew8wHa2CrN5C5g84oSpUBXF8tN9NahmMgMQ1Be",
  "key16": "5NftAw5L14fJCE6hHzdcCw5vnioVz9rZXXTvJsJSBnbd8xdRZ5S7x5mQZ4wuFgLvJnedMHLZWUXhSiaBgG5pE5f8",
  "key17": "4XcsU3gXeifbvWELd8hR1yNtb2UNQ4rAmWhP8AfnToYhrjjGD2AHYJD1F3bzUSENufhA6gcUdP1ccNo84U4zsR8W",
  "key18": "3qt78ZVbzCpDgQnmDPUXDxPJWSFQE22VyVYdojFR1jzzaxeRhKYDoXEBJChD1pm1ZLMqgwQ6dfE85gbVHoskkqvg",
  "key19": "3DThJsJaQZpVPL5y2x5VxY34tdAS3MfdhYpRKLevouDo2Q2fyxeG1Cy2ecL1ZGqT6zSQ59LrRsJg9aiETsMWuWgL",
  "key20": "hP7hi9yxWq2btto3i4kMPYwdNaf5bK3fpw9pJxLLv2WHQq4fMC6w2Tk94RheVquoMeD2c7TCjocKXT8Kfj2euJh",
  "key21": "zWheKwtHXejvL4KWeeyiWHPTY5PfvzmpryqKRppmiABqx22qyVa3BQkQGEzSTLppLKckUfT8HeypkKT9TKCrYZv",
  "key22": "4Z1rLhW5zRNgRmSd1QP9sNYnZ3KcPcksmybKfTJqULYZALHbDmbhuEDZ9ffdDYvC7c1bdq9CZQE7v3nJjUAPgF3w",
  "key23": "XRbXZnf8rCNzdAjm9LhfVCSXD4YmbmF1rdo8UMKgSPKWVX9b3v4N73CZmSjQSqozEtwXTojtfGAHbG3koZoQit2",
  "key24": "dVezjhFHMnuChfQoe8hkm7nZTJvhtTnzrr2SgkGCyskWaFZ5M8iZFLD2EdtbdXQhu7R4EwuNEahZnA83FspSfad",
  "key25": "5mK5oxcRYr6UC4zAd15Mk6iGtRiBYYW41BzRBnAH5BadCCHGQmozVpZNFgPWCPPj56oBXfH5S1bkVyfLMNNFJU2m",
  "key26": "3C3Ttnw2YJaoQaTxMeErqgk7UhaY7BUGsJo3krp2sG3iAj1bKa8pmn6drhSgGA8fguV8is9ydhNRcHKV5qT77jrP",
  "key27": "3qR5YKizCQWxrAHoZShM38Qhp52oVG5wmWoVsgVUcKwe123VffdGhDCe9PkHhUXRX2W7bwNhuWrdMpXtF2CP5FX2",
  "key28": "5dAs37GcehnXzP9dshJFpiG3prhAuEaeLbXAid5AC21qPBL8MKsPHD1DbtrWd1ZYYsLc1LDHtDAtHFAv85qwr5LY",
  "key29": "4S4UreRmM4MTP7hrR8gcBqJ9WPU9jWMYh3ZsE7kFH829ePQNwiDP4ziEAgyEdCEfL9SGfjsBorKb1UEFGH1nUJHz",
  "key30": "5cpkKpmhBATm3qfsmrELu762c3doK5gaGu2WBLTWHxZ9XHJPqkkm9CTgTzxnMi8jAt65pAaAq7DyVynFU4WE6npH",
  "key31": "5BxmusCVYxb7ESAaMfKQWcuwcCDqjp8KKmnR4Bj9nUHZXWajLZsSTzexmMTXNkgnCPVWK6v1EQ1NTpAMkwaUK5xJ",
  "key32": "5DeK4h6b4mPGMWtfGUy662Jfx6HY1Wk4ZH85Vd1xWRKuZN9gwwLCKAJEhKBrKkRpHNhn56B8SvFTfB3Dww6mstg1",
  "key33": "2cxhryYFaPL2QDuk5BgpaXYDTEDBE5Tz6LWeQxmUCXKvXjJdYYQvtKEbAdzqiMwjTpcGFsvxaEUstzRPVBTCqA3b",
  "key34": "3TU3kjZgRUPJKtbuFXnQGkpbCVbkFXjyTacwhU25pZrMBnp3fhNEMhPaZdmzgnYMyo2JtWnRSVMtT8SSdWUzp3HU",
  "key35": "4orm8p3fRMUMu4PWKyQykcHAntixJTj159H5gxu6XuegSQ6HCotS9URa24SMbVy3L1Bx34aagDesZvb1DXqMeXPB",
  "key36": "6p4LoHsCDnkd9ToHXR4CiP8BnDNgC43otThkYSBUtdec2JHUeJKGC61nBtYdDEuVAMhYsc6SWMMF79wn5voULKU",
  "key37": "4X13diHwFypmkQuETQ5vZMmofGvXWPvfJYdy3ELx3p53XabxpGcWTNbyRn1fYhztoFqwyYeLd6JVZy1WE9oykRFg",
  "key38": "3tXsLqVNJM8YyKWVaNeZTh6NiAqtHUETL6SmDxGj1ZWvvrPnTJow6JrKqDjQrFxhTZngKWxhZLedfAt9yiWjxi2P",
  "key39": "66EU9bNnY5ooVNCZH2k9YdREctDdcetaa1oiZhLSP6CYEw3N3vXfdvawT2gDqUpXz9HcbTkxMg3GcLcnfKKcNksu",
  "key40": "4iDEBVd4K4iWgy9u89hbpbW8PVHtypTnfJhaTHwwaT4nqepWLSAMZxpeqWbiQRktzZSps1Gxa2JrpxAXfusshiVd",
  "key41": "3jqnMVQcPYPYLMP56X9gDKgW9A1ibJiQQyx8icmUGVSSfdmKkpUL8qymwck2ExFQVb3e4zm9kXZBAfJc2GFVFXqP",
  "key42": "2EJuBf61334LznrPjd26u5aoGwEc8e9hShckHk2KhXaD6xVP2fg1mK3Ju61u2SvAnw6bfLGB9RZWspQ5rHcXw6Hp",
  "key43": "3FQ2Zf8BEq3YXkfJiNV5pbh8d2p3wqBGiVW5NTUTod8UMUM5jvvKdeznARea9JMYLqCaM48Jgs8uX61YCRLZ13wH",
  "key44": "5kuxwceJBi9Xu9FPcuf2Qn1XBrFVnA1VkCSUYLtmdX5pzKfJVVXmksgSvdLbnKUicJNYaSqAqVsgWJFpNCr74sLE",
  "key45": "41i3GGNwVmDZk3BMMqGLx46pwPr6GiEyf5Nrp6jDqDhy24NHXnzJZJqbznwkZtH9b1ZMXNC1FWhSxEknaRMLSrxy",
  "key46": "ZtY8RQyzgCtLPu1P9FoVRw1dz4iE9zNoAeF7rQUmCgYsi2V3y5THuJdTm9rFiXZGqBG6JXGY6E6MrNbjEqRefFn"
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
