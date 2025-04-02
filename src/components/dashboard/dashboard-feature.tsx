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
    "C8rXPuQGsR5tPCq5aT8ZtKfMfxPZ9BiGDUoFHecMUejE1An2xek2rNnQRTyRUWz9Rf5PFRwwFc1o8cZreJWKyMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Tr3vfbbEDfEoZZ9avLAn6rAhitCzo1xrsdPaMHBacGMjhvJSPHD1ym2noeiZFT9WkCLbqP57a5nMMawogL7sEW",
  "key1": "5652NA5sS9MqfF2LsAYZv15MnEvRRRQ53LDqtBNtGqo1ob5i2nMYRzRUaG77U5T5AAwMnprnNj7ycvgX2riNajS7",
  "key2": "33BaG4XRWPdYYFQrtA6tpydMKZdGfC9tXjANiMLK8fQXayufhe7iYrbzuRYRQSNdLaZkxYuA7wZtsQnKjzTRNZTd",
  "key3": "2xmGL9y6hgkv74tciMhuPABwxc6gycCuPiv9iv3inMGpsrxEtex77JvXDrh9NbcvbS8bwqRnDa53MBrtSvbu8gEN",
  "key4": "5wE5gafrFZTtZbRU2fb18VS9DifccTPSs9g1hQE2JBzhJ2KJ9rQYN13uxu7exFM7ottvxA4H6HWvrPb6GofFSnXG",
  "key5": "44wFbM3MkM9ku2iYrEA44HPTLq1rchcdpu239QCHDxLqqVE7UfuhCaAMshyD1KHfY4ABSrQZtu8FBSkC9jEWSGrW",
  "key6": "2XB5f4iUtWtr6fyemJCCsspYG3LupifETSefrrv9mkxnXJNQh9oXYXb5nh9AXNTKXUUeYnx1dUjJoZJd68ygg6X3",
  "key7": "5HfyZuiig9ohJsnR2B3V9qsnk1zcTp1favbyzr2Huaubxk2FYvbSdpys2GCXuQfBkkuygRSv5soBcoghUymouJF2",
  "key8": "6WkXnzpgAw5iYmJxZmVEZqk5EY3fH22TesWp6jjum1Wt8gzLvD6BH8rnsy5YuaChdtzu1jBkUn2yBcHk4wLWK7a",
  "key9": "5cVdG4aLyKj83Anzs21Mbq4cLGagmEKpHXzZZpatXNmLHxSmbnonmkc1zxvUw7gi4QNYZjqMbPSA1Yce2TUjr1eQ",
  "key10": "4nWkWQcSDhp8FAgYPJMFapKog4qkAZCCCyf28jhj5N84RnRcaYucSNmQnYQyxFGdVKNqZNZPnmn5D77j4vQg4TPE",
  "key11": "2wyCTmN7M1mxrWaJKVKHcbj2yNX68HU84Mp5wW3FowfLVCpbz5VDJqNg5hJHBFwEkhN4ku7pNFYnbgFE2oh9mL75",
  "key12": "5NEuBsVCmtjeeqgYkLRDenmLgMiSHo89bb3Cy6rYL1nCcBtGcGZjsRFnG97NWYHqL9x14bTF2n2rYJ8keVJvBfN4",
  "key13": "2U4TJSYcVBo7aGnnnA2zHiqWLmx3cU15tfFRXWmEzb36CEKYvzehctwwhnksMf43xshbT72iz8M5AVZ7j37HeCD6",
  "key14": "4XeMPr5LJpmVX5sSjKo8BWfyZjBHx8e7gbTvL2oovMmKLgr6Sca9q8fJkem9nKuZyw3QcjmBAr3A5DhabVRoibKh",
  "key15": "5NB582ad9ZJPHTG4nfY3sy3GruU2xra3QXniT3byTYAUpyx1rZjUKJS2sqriZSghKEbXxbD7aivKJxWiep6HYGgX",
  "key16": "4ATEBnHzU6vyh4H5Ed1jLhqxZXtuoXi6GEUmKw1G5BARYzzyKQfK8iNL8PjaXC8qRMYhGXjZLJupnFtCJZsggUkd",
  "key17": "4niMCnUgCQVAV6yvYuaCgx7bsJ8HmDM7unxwbJq3VKzhdJMnS7qrBqWUhL8Q3oKCM2ono8CiPJ7KoP7W3aGjMP5z",
  "key18": "2AfAo6os2qxoFun8MZTrKfwLjCcqv5GnCQnQPQRq5GFyksJYiUuEnaZfCvmFLyhWpKMaaCiZkWzCjkDMgK8vubAu",
  "key19": "4LKpJgiQQuysrK8Yt8GwHTPyi1Cfg4qNTNs35tixctf7jVtouQGTWaYdmS4uLqVWGFQfT2hUny1hQyJQNUUVzW6f",
  "key20": "td7JaTTGUZwAq88DVdka7Yqkssx4TDANB1VzoagBmfJZ5B8rSU8UiBPknv4btMywPLNYE5q9C5vXqTDqsXkroR6",
  "key21": "4VsDHdoqEJ67u5gXmBwMaCaDU9PpFYRua6h6YNko4ACiCLuKowvww7RNtK7JyHUKGk5sSh7MKRUz9KPinyUkRhMF",
  "key22": "2UtRMAFnrWH7zSRvYMedoQ8eTpeiE7ADwAXysWdZa15rMeH6E9HyNRvG3rnCWB4DiyM2LyZRbQWHi83XPNGp5ZjS",
  "key23": "3ycYTk9c6cjyTDVUhsK2Xt18dEaEwiR8uSRBgfgvJgyHoXsrsMPt4z31SixBWLkBytm4Bb6q7jbXxMsea5Jh26Wh",
  "key24": "53HzF8QD4rwpoXhUoxuLHN5yq9rwnPBXBtLC5yogyDAJYvGkAX5reb1ydoju5oCpgC91nFBnixtogZo2REpLnBuZ",
  "key25": "5oh4nmFtEPQqTsYme2ouDTaeLgvfsCpp2KwrYUiQTBzfz7Teg8rzewAGEpMkvoNC1byX2GFtiGN3AFmppaaEGA4h",
  "key26": "5igdVyo6xQeQTXBPwCYYqNQkRCSY2V7i9mwKi4wNut78ZqiKihLkeXRYirLrzcieeZcUDh68ESSTfWZrSUoK3enB",
  "key27": "2cycxFhunBZx5UJhuixmkHws1nR3XrhuE8q7kq9JvW4RrLj8t7bkw3BXNxvP8nxNgH2WKmapGo8BBhWsm7Bt1W7C",
  "key28": "TChCuqVLJFgidfe7qZq4iuAs4XfKjaUCs418GTgHLutBfJpk1GzEqxhL47TG9mMCT6UqGD6vW6gwh7QU4nwfgSL",
  "key29": "59trdZh8EuZZLTfNGwUBWmPrnwFm4jPi6Ha6e2CysYiei4SMuQYTyRCpS9a1MaeG1bCQGe2FXRbFX8mN6u4izurK",
  "key30": "3jqcUY1tj2etr4t7zTWnMM4oTfCmUJUoi3EHP67tyu23B18pvjjUXjbzrSu2cAzzhnqCU4XPnWpTLeBXc2saF5Vw",
  "key31": "5BE5g6MBvPMAwTeqHS4qURsJpXeFbroocXqSEymppFxRnf8jATqdHy9a3jHEoj3Ghp8zhvLcfk87C88eeEZNghrY",
  "key32": "5oeKhCLQEWDZVg6Y5uTrxHgqhnq1qNo4dEHV363ucMyAxs72s9jRvEaXyXWuQdvHJoBxjQb3fapXMjF7eqdRumZY",
  "key33": "3tHLa99hkSSySmaFdiMcnhc7FGEhY7ukFJ9pJfRjGYqbAZeq2QgeUGcYZ1Hk7h71aXYWHNV4Fc2xZda97sm7RGEy",
  "key34": "3rNKHToy51pYJySXzJdihycRZeNeNnwpFbVdbB122NzfYATvDAv9iKTDZhVWamNHtXchfSyrpNsGVncS4chfoFcb",
  "key35": "osHRggiKMF8Ruoc1fX1XhDAWKYcHExh26JS2FqaZuhZqgtdYyVe6AS2ETseGFTu4NHS3xATbfayHdpb4QSu5CkM",
  "key36": "5Dtv5dWb6s1KrjppuWNdmzQAEXyeVKjQrytZ9E7s966qEFcydRjfrrs4C4RkxKnEiBMiC4T6ymN8TFwQ5m9JDwyq",
  "key37": "561ttrdA3NFxXMi71A9RfXmEC2vvi774yxiWjhrwgNYjx6Yh5GLe2XWRYundkFTrrTHpXFy9QVDJT6RJy2Vtugjr",
  "key38": "bWvyZTEkmX4tHNLmzZDfAPUgsERKSseDppaFYb6bmNRLaHCur84ysdHoXcwGfXkXtLGfuRMvd3FN2mJmx5RYcZQ",
  "key39": "31GVpFbMU1BbdTaUW1BJghQtQpEjBubqPyVd2XRWJ9hdxYBjBZsU5AJ23QbV5fHxwRcQEsTCx8qtSa5xgbfeGNBU",
  "key40": "3p4jhK2rrpJL2ZyQusdGrPwjp7yTUXa6YNsbFEXePpta914qPeozgotyX5bwoT1dR7rVZQYtAYZk6jdqYhW7fF4p",
  "key41": "4k8xbkeUovh1t5zLrDZyhqYBPcr2kBDHynYWfZ9TsXYuMvRThLdoKrDJi1FLTgaq8ewX35mcgpUQAdBfNdN9BjDu",
  "key42": "5i11UdXBcQfzrouhNa2nMovkeZgXFXVD3iAfAqQRh9hwKTh4wn5py5CHGifxUhzJVE27VaigdBdudpSrLkr3CZVS",
  "key43": "5TM3HjGcvbDt7E927m88euCZqVopjFzThj39SBSyhXKZeTyYZThs3gvuZgCvofWmQhiUd1T8FRMJitchQNncT3En",
  "key44": "4kNBNsv3bXTygCNyrtHquwEsDKnvQygGNvENpAZyZy2TJALyER3H5tQq9cFaDjbxBR1p9rzKzDuT7YAuYPoLCJr8",
  "key45": "4DiLR7TejtWy2uNEZTMa9PxohBybW3afyFRZVEJKQLg8o47h8d476SdgWr98mEeFvN8PfrCgBdefXyAs4jgB6hZ9",
  "key46": "4hm8vCEgVCX7GRKRZC5gCHEJ6tTX4GtoQ6BcEX8NiaNameM9cmQB7GLadRUiCyWvb46wXwjYqUwtAKry2VgTi3kG",
  "key47": "5usQpR9hSqh22gHRMzfDpxwZQF4yB5Sj8D19A71kTQ2z1Zq2kv2LLVF5AwxAHyF8fmnSEbViK7p2CqxmfMxmGief",
  "key48": "593Atid35v4UiJ8sv78EHfUy6Y1mccsL5Y5mnB6RSkC463aVYRNWi9MN1wrheXEPQZv9Wh4dMeTo1GbL2j9xa1dM"
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
