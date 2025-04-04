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
    "59TRZiXbVY9DiYKczfXG2udwvjvcDF7YQDHcH5uYHb795T31yTTFtQyemfVfsC69zEb38sFkSAqqx3CXuBwhPdmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXfAEtTKoHp2iqwBKtNwg6GKo5AWs9mrYDMAxu44SdcRrzmX4Mv1S4L3v7RwA9d5RVVzqvdmxJHJEqDgq5Lrbv9",
  "key1": "Q3S1wMa2eukuD3tpek9kV9DnibXtYHnDsAJLR1WhVefLk1vtg4tJZo16RCK86F2kmTsCNTo2sivWcC2jjqviG8G",
  "key2": "5zWCgxYU69xZpeisJzAKAVF4MTTcnxmu2Z4UJH8urH1xuP8JvzdEBsPdXyQvQ86AYm2jXpqoEncm3v7AcPgYuZsG",
  "key3": "3EeZ9cw71Biu4WFzi4PnB6fvt6XoYqqvXCNBqyr1LXkwyrrE8G4wGjQ7WCf6n2E6ZhsA9rhwP3psnTJiBVBJa98L",
  "key4": "RVZBiT6nfE6bmVGRYoYKV8t3zgKa5TbD2zswSKqxBXUtPKojmEwfEqtRtUocsALnEHP3vvuK2Jt3H9noNEB5gJ7",
  "key5": "2oyg1JD8oRyD5C53mTV27LZVJsxmuoYTAveEy1VwaM9yCmyRBcZrTPJZxQKVGx9LwByL5RkedsMSAqeyWCJ8qJmf",
  "key6": "2QtV64fKy7YMKVDjykjVrQP8pakx5UF86Ye52snrq78z3xRyxMi5cPKUb428vF5TPNVT3eENqCcQYnBNYsr6mvct",
  "key7": "5j8DeeTkS1hf683JZawozauerKwwvsQysvDALF9qPCzSVSCrfTKc6XrZPB8ZHMefNTRVtUySvjjdCwKtJzW4M2L4",
  "key8": "5F6NdD5Cvtgqte3AupD2k6iSYHkRrW6uGP33JVcn6cqizHBf1rupkqD4LgBrDhjoZmiyc2CDBtSurXYP21Z5JA2k",
  "key9": "FGacp16tkQy6JS8515BpaLUYgePY84Nhaw4A1adwSdYeTTPALvKenzc8NDucU16CUNJP1B51UHoVEKDjsRLG1gw",
  "key10": "zmggu3pjmBgt4PQpbumEM96DVsHs3wKzjX1mkjyM5zRkRKFE34ZUSK4PQTBC68pjtbHSvNJBuinDonwfXUgHXFt",
  "key11": "eUkEPk3BCPUNKQs7ctEJ1G45XPu1EWgAnAUKP22UtctSd7VL56YNc99CHLYShvELcxy41ebbJFBBh9HhUoSKvCv",
  "key12": "4hE4EP7AarvD6TgUxNi4F7knraRHksRGWDFAm3gq3CFhh6Wr9JAyyw6ZJXkbELbTz8ww5xLKxxFNAFFQZXnGQ3Jv",
  "key13": "5EqgXZN8JrSnyJWV7TistueK8tb15CDa52nR3WEmAFrdF9mts2H4njPrCQFfDAPQe8wKSta2PdQyzGbNn6FWGUDC",
  "key14": "2ASDAzpbm3hJuBJA6W5ArWYTB8jozKSmP2PyjjhEyVcG5VWzLdLC3aDoQ1rFD3vCTib96WKwn68wchKt5VATu2mV",
  "key15": "3N8Hns6tLu9NhPVXHbzgFF9fbGiUnB47xGSXNrniPric8Z1wqxNJCwUBHrCmBWYhGHPvwAe4ri9rehVyeC7Vs7WA",
  "key16": "54fTTS9AuixnPPDVLLEsS41PCjcfBy1r5FmucDtHFfbicP41x7a9LYwL7BXv5VWKS9JsfxVx1Y5Z995Ji2JYSxxm",
  "key17": "52KoRjidB2j7ejCLWP4Bqa7uzMbHkwczF2PWKcmAXX2A1zjWRfi1LuuVmbhrorZLrVL8cUfsuTX7PufR3tep32qL",
  "key18": "AxT3fcb9Mz28fheP1uLHjicX1YSZTz1GaJE867oYXwA3PjfAixyW3BCmHzxqgESFmrHGDkDpDtFYjbfXMxSugc1",
  "key19": "3YVrRaRJpKDKBcQUwXTtvMijbJLXL7JxMN4AfexSrRL5SUC8gPEUZogarQGGR4BL8cHKCfF42E3aaYiuNf7hFWsD",
  "key20": "4dBr1Lq2wzfKP5vmC9q6MtHy6XgAT6YGyftT9PuKH9QHsdyEs9X4KJJ9dtro1G2hqazXbeKDsbVfpdq7aYWHT7jU",
  "key21": "2V7JedDF15gtThSmDxCg36gnMSH36tV5eN2DvQLd72E612eHfHKZdhMGLfLTnwAUCJyacX2awt7htmwXKVtTvW2F",
  "key22": "569iei86cStbRFB33G2cy7o1L4eC87X2hxZZ5HB1fJT9MvHNdQQpNbDDJu46g3j4XSM8iq1YzDnWpVbFfAsaEfEp",
  "key23": "67KGpnJCL7f1dvGxKR8HW1oL7bdHQhJw9tdmK2aCW4P1mSKULFWiiku8LtLN78fm3giVpzq1MYWvFGCCrbV1RckV",
  "key24": "2fxR6sc9K6vw4ZvMoRgfyu3XqvTnqmoxS2mU7F84JLn5ZzY76caxJopsFnzHTPcbmvhL2qc1anQwBkYroyoMD7CL",
  "key25": "2M3s7kHXZC6FDVh2DMahnDP1js4gukSSXZEewtw6YTbBq7RDs3DLoPZfZ2LgudyE6kQHznPGVW2eygGJR96A1xj5",
  "key26": "58FnpB9n5pmY43cBVCJksEsRfTSCfJK6Cx6KKVPs6N3o4F5tKHQJpkj9A9ZVEtn1StF2weLofQXh3zyQwAENRoT3",
  "key27": "2gJEMrMaL9Cn6si1LfHg1CZdD9AFtGRx785bbpqfFtZfcxf8Z4oEmzPsYNsWAAdA8bJfh8uNGzVFRA7vFJWj6EmF",
  "key28": "4YvdgUWNDS6Z9n3SEe2W2WjsLJT1LhQ4o9tjoaTbdKe95Fc6jK77xTpYxTU9VMsrd6RB6JJQefnrf4Gjk6aQLrUf",
  "key29": "36hoypzyYmFv6VHnn799Yw53qDhTHnpEkksBrbG4haukMiG6wEsXdeSYURQjfP86Pn43qvT7gecDyD5L4smJ3wsV",
  "key30": "Zh4LnKsMBNLVrtomBeEYjjirdcGmEoSywxdmZNLi8dXYpiaU4aGpbUXEScppZSxo1CYHHgBA6QkpefnHLejz2Va",
  "key31": "3o76ufAFUaa16oAjjsfnc3PS1LtAYpjfA6pRgXTFu2xAAS81v6ZqLaRLjzPw3Mr3GEiFCh4Yd16Kzxm4TZCWfS8n",
  "key32": "392YTQFrcvkeAprXQ6ZBHXD6CHSYWsKJCFoPHQL9ssfM53m1rPuEZMPFjC6qGoqQZpV7pwt5FH3s8mE7sQSGNryL",
  "key33": "RMk9VxRtkZAgZcDZjYwP2p1uM2DpaPj92oTM7E3QV1dQBYvXzJj3Sso5k6Vwpy97DLvPNcV4hE4d9Vv1TXQGYSu",
  "key34": "4fC8fJvZeadN32yUTZxAtffDbRsR2Qp5c8QVCYVRpCRFZYcRkkX4xnBfbSDNnWLpYBoCMy9975MCoGder55RFdqX",
  "key35": "Eqdgcc89SXj6ffMWUzQKfaCPiThcag9DWfbpdRfu2FYq3mj2oTUgRLSvQbRV6ojcV88Lhsy6jxosEukUy5BVGpm",
  "key36": "wsXMgFJPL3PD8G2HMYXhVoUTesFg5UcDfX332ZW2pH6SrLdprAU6G9aNwfzwAE6mTrzixNVp88EzJrUTwoUZ5AA",
  "key37": "49JEJtrFasydbkD5GnBD8VcFpV3n4HjuNBATCiDaAAPdCjBuwQeTPZuwg45BMYViJmvMH9DE1gJ7gKGaFYqSKHJu",
  "key38": "561MzCKb4PnpPVEmRzFwk5mphUEcVfZAAbC2EfC3Hh3g17hbtDM1CiKsDBjrj2XwnfnYun2X2AeakA44YWb6sNqM",
  "key39": "3BNuxNDzuQCsPAQFoyUbnxmyQtkRjrhkGXynarLUsan7aCmbvhQ4JB6QUiFmAcGwreBpL7sJ9CR76LTo7yqVhjt5",
  "key40": "5ugSasDYiwHrSXgNtm3NEACUziT81LR1Q6KPpXbbB1J1bQwDa1i678dDnLjifJkoM448ZZWVzKwWonXnhooD8g9y",
  "key41": "Pw5Hc31cpcJCxE5tvYCeE9XXGcpsgV88j9zDnrYLURm8XaaY5LfZ6ZR6nghip57hzWowCchNXiW6wvXp8ucFCCx",
  "key42": "89vj4RNykJeuui8QfoXpD264VhvrnCKNeR96uZRubcMFpJY9AUcdTkdbtwSQw3kckfC3xyJSESKYfCchVrGeDGp",
  "key43": "fhSaVnBVjYgNtu7ieYARVhGKqwx21DxrvwscLpbuxuKrN1e7J8HwLQDmbdg2jzTaj5c7sJhJ3TT93LVyq7a3fV4",
  "key44": "5U46QLsfD3C6dUbi1L3FV8v1uE87A8SAhMmK9o63wpAzJganDqj6JrpjtHooccLXKt9rY6NRcZ9pKDjrARHVgZ47",
  "key45": "2pZMoieG8tSbrXyNYCwaMmUUEYcPGxDVDLhmzS6TB7dE9VM7KuTCp4WcD3k3hfnYGk6L7VB5hw5cR1tMtMdD1KkK",
  "key46": "3Hq17RMzq8GnumY466kL2mUPXKZ8Z87UvU35R7txuS76nneGftTnW7bT3arhpPcH8vc7VfLboPYNf9T4CJJLMoJw",
  "key47": "4TiGRizHQFiwZXUFT8zYZKcnQmpqKfH8u3FDhPW8Wr3GpTaUmzDRy9GHCAUdXqPyCnxr85vh7iZf1JRTWAbnkk9N",
  "key48": "5xp1ctBZ6ErLWL2bNij6vht6Mb47TxecxhAXpyrekn4XFD4KqZbgsNwcYmhs2JGkpFyABwKE4UoSajoBJCGZu53L"
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
