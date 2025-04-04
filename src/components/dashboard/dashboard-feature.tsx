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
    "2G8uTWK1XwVAT46UwzamsgDiQR8QtUMNSYFqnxzPSvqs8L24EKjhqGqWhUdjiVKyg5NWuQyFwBrcL4mr3W35ujMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jKtLDRswzfszHPQpSqxrXc7JCipuoAY6vTyDKhnwpAYixL8ba2M35UH8xCWhhgEmdf43JedqYWLg8YbKynJ4MPy",
  "key1": "5cuisqyRqsebHLaexDHuoUR4dvyeCQHDP54M7q6XHttV4srGAny9LEMgTyxB6kQHdvYoBx2pfquKvieoS6tFWeKT",
  "key2": "328Seca9TbEmUifWNJEqRtAyCbwTgrzcPShCirMYdZrDfVidFP4jNzVmZA28gVPnAAMY4qM8anLGU6AS3VFcp5Xs",
  "key3": "zJDA7f1ZiALXSHmBD6HgxwHpsP5Dvo1f5MWcRgQter9VRdcLeX4QHLsyuf69auNaGqbkRanpPZzYhePTATP6aZW",
  "key4": "3iydqcgho4GsasNcxhHTQfNgvGEqj4Vq5sKeD2vCuomnRxBx4umtfMSGejnH3cifncjpjzQtRT7he2yQHuWoXKjm",
  "key5": "3AjhGFULMGdnuGmnyRZSEcQbziUhcrQUX9PFZArx1r7CiVKhsCWsRSn66r9TFKiEW5fujiicDAQqZUPyULe9KZa3",
  "key6": "5kvseWvgjxUrs4psRFL2MbLSKokk7G6hTiFpP5TPeZfAXLE458Vf8PDx8dMGijwoz2NPWseVSj2XW5qvwgHgVoZx",
  "key7": "4Wq6A6NAPmM9Ux9ixuBRc68XqcckVoRismTKLeB5xWXWEYpbXhyKxDHvZUyakn7XiweQAqWe1gLvNE6565kGdpZi",
  "key8": "4JaBo9rBoKHWNVBTufAHDqH4hpcKeNGCSfeo75V67FXYULFuFVqnB4JV81aQ2bLpnJYsCaus94Q92C34qYfen448",
  "key9": "5h4CN3bUgRwcoHVVmFRB4CJj9CD4gqrPx9QQGrx6cZJ6sQP1mRKLphfwKF1UT8v3uQq3vJyyeQRvQnvtFKsUhq7m",
  "key10": "5kPbkVHnWsXbr1ifRz3MgRDuSnPWzZmC3yXpTUfTjPMQ134Uf9f43DpfFEDpkf9UnRaohcHWi2wTGxVupeVNJzG5",
  "key11": "5gVSFgZbtNfimWTx8ZZ52vCqhxsUWF4HXyhPhRvv1PRMcEw7JfqZkmQm5ucy9ruV2Mp21jUAnWD7ppLsxfFgjV4q",
  "key12": "4tu7ZVcyFRHCcqScTXjxqWrCd83Lz8C7qvN8ci9PtP1we7iQf7BoRLgepB374Mhw6wxyTN88DwoCmNjPTFGDCsKr",
  "key13": "5bhRG86gGLqrVhRLxEeMATUmiqHsNEWKKbzRdGHHikcsi4633i7tQk6cWwcJbfXGJuC3as6Yu5jsU8xHx3oiXeiR",
  "key14": "vXK1BaMViDCavcvr4SDM42oYk11qXujLhZ2HAXMfixznQcD8doF9iUwFdo7RUs9b7zQBwPczQL78uEkd12vz47X",
  "key15": "UeMJBS1QWgub6NtUQxrmTodh7Xj2Z51vtUXqXSjZ7p65QM4kenM1ou7hhFjsevZUhDDrEqFqE7EmTsWs9j9bR6j",
  "key16": "3JGNv5ehUxdL6MDUkUt8DyYK8PcTVpcNy27YkxMRnBkuM8AeJHQ6Z1xe7Zb3ohrtxjZh4tfjTB9PnNxewGZimxFD",
  "key17": "UeQHy9kXHRMEq44P7EKt4yUopo4NqH12UZP66gQX4wRuvfMVhBTPPD2d2NCrBPYKC1fRYuCqiT2LUW5zA72fZvA",
  "key18": "4bCU6MvZ8qDB1qw8exYxP9cn3167e2ozmNuNz4PHdKuUFZ4Qjg8K9gqh65co4KAkMaiAzR4Yno7NW4An66kZqcEJ",
  "key19": "2iyD8GZXPffSZFcC8pNi1Z3za1MjGwe14GqeK2bMPT9AnzFpxBRSiJ6QYdnhoJiwSSoqkfnDRgKj5k665UVg6hCq",
  "key20": "4gTpkKUEBPgybiJJNbN9HsjpimpaoHAb4Mc2aLXi1UnfoY9aDJ7z5sQX1df8mGkyjJZJxCuHGcM1cfX5mgLiWcMr",
  "key21": "2ToWMsUUXKdDfDBxkn8g6sJv445MXEBmmJTQ2xXPA6DjiFm8D2qCsNXR1U3zxJt2oMjPywS69LX2wncYdfNnsh84",
  "key22": "5mnhCnKch7SqrG1CFjN8TGreLQEWri1DNvZq11eXPzMg6L5jhKREsC91Q5yPZGHvvALiacevyvkhnCquDVhiAG35",
  "key23": "2QnAwtaTBbwLy9KK1tgwdWNH5JtSsHuadctoecZ8TAb76SFCm4Rua3uxD7jjpdULQxCrdbJBAwtNtTLMa9s76baV",
  "key24": "2s9tthjuYkWxduw4DWCPQtbUrJUyzAkuP4yTXQc7ftKdtUQRMgfKU2viYBvujjpnXgFXM6grjbVZNdwwwxEb2nr3",
  "key25": "3BjzFFNLY89zEcSUx2RUftT8ZijPkF9vjhsw8MjaV1LkZHmmJ5TGz5wrZxJGh76Jxu9XkHBEabA2eCVpxJqhFN98",
  "key26": "T4biRRLaznXGFkgZcK4d328iSpA8o8Eu8JdLjagZqvMBEc8EXFPuGesyND82k9fe4DFdVpoN6f9tvLNSChxdr9A",
  "key27": "Mv5nqJtbxeXGUvCPHV2PWPX2q6HNASV5qRg3FZJjmaFeVPBWQ3e8fqvhPYt42DGH3iNWnAXU9sRRk7S8SCnAtiy",
  "key28": "37jT632y2e9CjGWoqtmT71wNvNyY5b9WmEqYU27TxTAqWXqBsh3T3ASDqz1yCUhoJYqTkYVMdugo9b9h41t2tYdD",
  "key29": "3TjZwEbvwrAdkpyZGhtP3REuyyNb5aKhdPNJW7VGDSmDRFQKrNnKR2A8prFkpqwvRnJVW9AtN4HuNyxW9WWpE6D2",
  "key30": "4626N8BpXa3PMV6WCMVjhhdJfmcAbKQB2XpPJVrt2kbKYo5ZwSUavr9NghxeE7BuacniXMPreyFQKgisXbTfQcxJ",
  "key31": "5CwVzzcY6BLoQLJ9aiVKajtz7Tm91HUC4ramPgLBbxqD8qheaSYEjo8bp8ezPrpvaYfqP4sNhH1FupYqjJzK14jn",
  "key32": "8eR7nCXwc3dGqAdvx6Sw125H56JRc6qmUi8yqkAFfMZ2F4PoApxoAmCLrcPhnavrHk1sHd7fSeKD3uSG8EAWA82",
  "key33": "2UVaBbB2spT6SUetxPeDZjBodYHD2iTmkY72BuK4rQYmEsYaCZk9wEyKhvhhvggRtrG65gmo5oMGEoxdPJwVCYsm",
  "key34": "3MKjjwk4knw3Y9u7pc6TM7G1P22e3pn6wRjFgs5jUPiWJZJZHQTK2vdQbrs8JceiYgVMbcrFH9maThcKXLgSnb4h",
  "key35": "4md87w7F4LxX4bve4soXaGxXK81qKPQDScv8tD5LwAZoiFKsCooPUnJSJBZqVxHQvCwbizJ56TNE5G8imZHDUDPj",
  "key36": "2byFyr6wY9UEZ7gTnVUJn7ojB7ZMa6um2gnaLA4zNB7QnhRx1gUE822Pnfc4i9pYujupoTg9GSZqgrRfTUhUCFjr",
  "key37": "4M2rSuyHzvJFAR22DrHyj9fKnFqzaERmc8Q9gfXz4ajkxvwwQua41spStZ2gBZWwBmqHwbbWNy6cxfBaBXXjASZ5",
  "key38": "2LYPZjetVUbjJEmyT1Qmm45jfSho2jRvkMeGZX8kKuyeFBCAsh3HuNt9n7e2zn7SjHXECRrojYdVkMDsL7RaYvWX",
  "key39": "4uQPAu4ouTdWnuXjDMGGq5WQsqthrUARvYPrzveZqvSPVCWnJBefnPsMztd5dxdC2ewQZe3eZWt7bMHyT76Fmv22",
  "key40": "2QZiZhdX8a8VpCY7uiM3p2cDDtD7UbK8ceTYL6Un94WcovgC2qq6Xr4wmeuY29echtCS1BtG4SRGz3cSt8CuA4v",
  "key41": "313ziqKTrtGUynBU1bDo4fiGaaRmSiimraeXSduXCD8vUHsNggqnDaiyVR4UhAygGnHtzSBYtRKEZgTSW5QfqvyE",
  "key42": "2siArBuV4DG642wtafr9GxTByHUzfbmVxFcS8PjFvwLTTAhHs1knFnTQGfGTBGfj3LYExc8HcbPpEqHQKgoWmoHf",
  "key43": "5WaWzgWgQV9oYFu3agr6Fgw1ji1Ha18N9YB74gtKBMQY31NQJZBdMC4KJ8y2uAfrDxU5ufdMyveWBFu8KWn6jP8t",
  "key44": "5M5n9H91p21T5qxojHPsGynoXHVMPz4QgBVTqWGXqEBn1DqXDenqjH7NhWSsxWBHcYeguYThmmwyHVu4LGtDrZ98",
  "key45": "2Nn2Ephukyn1xdAaCLzsJgmApBNf152gyDjUPxEwLbAnCL2v6r2MdwjtM3QzZic87v8bscXKerwVugb4FCr2J3bm",
  "key46": "3kvYo37QpJJNHD8Q5ttQg7xR5qRum9im9BLD6imExHHuFxPmaqhsZTie8zceuxpGHeouGB4vRqqv59VA1oSULweX"
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
