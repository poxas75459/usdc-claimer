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
    "2Kb1NfU8etFmXVXgamo5yjNdLufcQTG5riGcPm4VejPugwwLMZvEmjGTCXF8Qe1Bc8eMpkvBYwPiYMei1ypDJFQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QffDzk9BmKG9ThAUAFwnP7m1VS2RpvNq1NaWejVWATXs4ScwbgeDVHVFvpqf7kpofYNvQE68qdNQqsnyCrDmV6L",
  "key1": "4uXnz582BdFG3MAdz2YdXfoJcfmuV7knSnqL6pBY1WKyGuUkkkoRnsNsxFAZXxnn2kgtMdGQ25Yy7dp8BGSQJxCB",
  "key2": "TgFVo4UHdYH7tJahRLurmWKprgtyKjmdWttr1Gf5whba34RFTKGbCkDkmPADhzPCaCdpmjc3DBpH6rtpQABkfUG",
  "key3": "2kzfuWBddg4F9XcJVxR9rFYLAA8JDisbgAGJt6VAcFGZkcwWem6q2HWacZYNozAwzcbPRvaRFLBm2KyWkEMt9UrJ",
  "key4": "4Cpay9AAg6wQe1eXrbMhc6dxm5vYxZwmGeEX8z9Compk7PkoGfj8KLNR4fuErGJVtmA8FNWHacpUdsCayw5zJr4T",
  "key5": "5pXeuKfE532M1sASaw6rBR1c7GmE1PiAZV1cQnVrAc8pshS8bei1k29VkfdNNG552ZZvTejoMh4aNMtGkwDx1GNK",
  "key6": "z95Kpey3ka1vKf6EgWc4iFXvip7x9kP7gLrBkU8hkCtSCuB1fHneyMYf1Pb5YvwtuKBDWCec5f6XWpzR48cAB9P",
  "key7": "2WNHSQcgm5wYzyusGYBDN21Wfzp3uinUNuFyqhajcqbGWdTWhzNkF8GmtvtFL6ELZzZsgmmsiDTx7jQkdpL4zrEf",
  "key8": "2a9rm7jzFcnsN8Bc8qMNZpeSH9xFv5mDP5FZRqBDsX5tbsaehnNkNnRYGj3bTNSCzFkujp4e99eBiKeMg9PBPMaH",
  "key9": "2xD7tqaZG66E5B3PzekAioAkcqih9ZDtQEtDif2HvQTSXuyoscdQEV1KmfuawWwAN3RpqQUb3D1cxsFkTpUWRFus",
  "key10": "4aAaRXmarLG5R5YjMDFirQ3szmMgyefsjUAe4TLYqqMsJVqpWc9Td7kkYiBXUkLPBroKNvXLhwujnE1BGgbRThWv",
  "key11": "3z7BA1CXv3Zo4zpRMi9xTcY3xv88ajtNgwLHsCpcHe9ZiHbYoEsK8XEYb3GeaUFUDBy7syHLNpfmh2DYz91GpxYC",
  "key12": "5TKRWgV5TyQQpVwRdLrX9Cf1yhkZ6rYgGDPjyU5Zxf5J9K9eFEjM7ExH65DGRUtTXbzb2c41nXEcuAEC1aSZuacw",
  "key13": "3epGKzPQguKzpN3HZfRLk9SGAVzZchEAMu2xsHX2iEhToscos9GioGnEDdUsswW38WE8iRiH5yCXqogYxmm5nLcS",
  "key14": "2273Fx4WPRLofkPrZtBE6hYCmArLEoLwcPZ9JjLWwfDuGe66wVf9RJkn5jQEbz7T83kSrvJp2Ufnbhdx4beJs27i",
  "key15": "2p8v4fsf9Ft34CAk1x9AMPdSXbRxuKHuyBaePw3kL7dhjV1u8LeyULuc6MmAmccXfeAvnofsbygU4Lj8D9zXSRN5",
  "key16": "Rzpuw3wkpXfLRsCq9986fsMmVexeP3wjBzFTnWBJ3FRkeTzv99LTXYE3CgzfanaALuikfUdZmd97afv7CSczfDB",
  "key17": "3cv5kfkFsvh4ShGU4g7jZu2KoLRcBS9dRaYB1n5BRhAPf5HLBrxp4FYsTJ4JaQVmxgtpBeYGSFNqZHkHcLdfEWMD",
  "key18": "5wYP2Yyu2usYcfX9KuNoujnYrc2MzkSJ5wjrrmnkekT4aBgUrLSPtAmjdqJysJDtG4bp6iTWFaxnQwhkSqCukFoc",
  "key19": "5nDHcR7eXvcxxfMnNokoBwsFui4p1deoJb2MnH6yA3Wcw2wqioE5GE6BtDuiLKoAbMMbZSkcxe4Kfr4kVtrKGPJy",
  "key20": "62sN7xVMZKwMEtyJPEWk2peY9acBqA5ZwfZNvbYKoy2Q3HsoojBGFfAgv9p32eN2zTU8WsXuwEjUzQzGfkk5A7cR",
  "key21": "3sXRzSnufZDZmewLc3qTvhX63mM1kKXnNSGWCLCAmjvC4BDKWnUjN4MsaUTBbBRN2foiBcFaBRFgjmQ7iEocxCjk",
  "key22": "3hBd97CiU1qZMoVVQbMmxLaNiNvF3cXMQr7ziNLT6T1DBpsL6JSYBBc1knXTcUX7YkT9nojQpepnHHvuHoUMc6bq",
  "key23": "55S97UZ1AF4h8XLzjMo7fkachTwyMHwvKzU8hSGqYX2ghJ3g7ZbmHw1ma7HjkMyWiAjvRn57WmmZQn8mVrHeBfm5",
  "key24": "4G5pvPcLkRikfrP6kBzLWX9Vv3itFbXKbLki4GaiyYyQarQggD2XVbpdVuZEG2BNieEW1j55MQPFo73bGqbJD1hL",
  "key25": "2BCdYR7i2wuF9msGa2W5S5e2kTmuP7quiCyxaZ3rYM4z6Mhn8RpfAhyKAtKKL8KEyiZcASJx2vYyzTRApyqTuqE4",
  "key26": "zeM8L8GB45UzmvGYpQi6wW26xvAbFCZt1vGuiX3qbNSXQxjGQaAHCbcQTQc6KR2dg7VGFw8ELhvzKGeUof1oE4h",
  "key27": "5Vkv3Xu4F77pr7ggd5AD6JkBDrvdtoJjVnAudLRGfRGt7EWn91j8PTKZHYSb3RkHbBpSSPedpNGY4MyyBARsaFFb",
  "key28": "2AeA2JaKfaTnh5rvLbFGp3Q257wWrZnTLJE8j4y1U17JuC67JebqPHxWm5QVJv4ybRidbXyErqAFei2A7SVgu9KV",
  "key29": "jtvzPEFwB55du5w5gX3LNiPYp1XJk7QBNDy8G7o52XB4jm47Q9BLREKZk1SBRcjwZ2vK3C9ZSr3KMeae6hnosgd",
  "key30": "4YLZb5DwtKVgjUT76zuZt7PQ4BLB5K6YiVASySDnML7DJunX33FZmXDvjBC2Lnioz5LwUjEPW16enJWiK4qYQhp7",
  "key31": "Q2GnmpGEgVHw4Fr2s3cBsW923ngjFpXfZS7u9HrJtUTaehdsx5GbK8TkLsyqYBx2qoMUoDZb3S8FqQC1bmH9c6q",
  "key32": "gvDpS4de42z32VVztCq36YXxgwFfdcvCDeo6gLLGw1U7zXEXHr2wXnyhkvLKmwpjSYb1EmmUVaJsUfVDVvZGjtr",
  "key33": "5qwRfhVrU46LgHuhRmdD2cPwBkAWC7gyW3WGkt6DgbuKqCM2KcwjYRcCRwBJKSkAUtQXxFyVCfhSW2Cnf4uUoZKb",
  "key34": "2mQeSg9UHJZmTRbYkRfWwqZF6arsxdYmHPhuGz2yWyBGujFw6QFYiV9LYP9XSEGaK6JQEUxMyw21zfwj7XFuHacX",
  "key35": "3PM4M8jant7DrDK1cKYSfLRcbEHKZYsnazuBQ7WvzBXAhGpkCnwbr8Es2XsNHjhsS768BB4ki19umqCBxajX4bSQ",
  "key36": "ZNk8ifpCYDqrgFwADrjYjEG3SyEj8uRHUpVpkDNXnAbRFGBMXig9PPmY2r9xzFUbxZgn1DR3MfsbJmxb3id6YQy",
  "key37": "FMTCqodwn4h9DYi6AeKufnnYKAvWgcEmWkR9Ay7oJhYxfSLQQg6H9oqwEfo9pzH3BVSHtB2VTnb2foeWZRrJJuz",
  "key38": "5yCJZEoZSDRiFxseXByneUjJt3mu8E9iByP9DJmwt3iJkTT5mJt5rgD9mTFdTPx7GMWUwWhb8ufsL8nHfVMDsEvB",
  "key39": "4baNFtnWSMXrKCmSb9mTMyLC1Ap53x5QSBRysgNQvBmg9wb9CBZAUoCnkZdqqK3xAYFtWBjhh3AX4T1oX5puY32B",
  "key40": "4seqK2CqFgNeYwouBBaAU8WGPUYbdd5afYpX3v1FWqiZePWCa3w9izxQMcT4SWJNfrZscD5Q95hRZwEm5SukamAc",
  "key41": "22My5BK8L6TpeDJBZioDUHRDs8FDtPNq3PuDMjNt7bn29vHuM6wLV5BqfTDjAae29Bv4UtPqLb3rzSWJq3wPEKM3",
  "key42": "5nEV7AKgkNT6CRRBZBweGbL55X4aNXxRB6V2FW8S2BbA85LXRob829TBGnCWy4B898xVYq6hWnjfyrgVFG9kmFLw",
  "key43": "583AiwWhHgFWzB2AepSuScRnxAd6197rKRRmUkfKFh2s89fQB9oefUhycA1AnBhDS7Cc1ZkrZXTfBUrX2GF1ZfQc",
  "key44": "4PYVc356dcJdkZ8ToTKkbAAL25m3J13g3QtUG7VuS55avYUTpAi7nhxKJtWBAMiPKvFiCuzyPnkSduWbb9szqLs5",
  "key45": "241AQ6BMcD9ZTEFrz4SgRB8u6XSzQQ4tpzqAx9QK17MGZi9non7eMi4bwWenFwDc43zujXKwizLtSbWrcWrPp3Vb",
  "key46": "4QrS6v6Ln2Weo26JxJyv44uMcGjZjjHJaWcPrXfzkrgLzeTxvxXRs4Jfd9VFueQhdvTzBA6gMhFh1ERrn5kmU3GW",
  "key47": "4kcE1KxrUM7BRJ8ZjmfBupCih9qWVDNh5eRiZ43XrBsWLiDmESxV85Qf81JuZjt3FyCSHWqqYdu4xyCziWuXNKU5",
  "key48": "3vWKmF5rwfRPKSasUfhC1J7qhG9bUz1YMjkxnzGD2xvkDj6Gb4DoLSCutoakscmYd5yzxP4g27c8qVkEaCqanRjW"
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
