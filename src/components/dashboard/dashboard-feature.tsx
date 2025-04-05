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
    "4qCAQS52L6rKJSXsaMuK9QYZ9MHwjRGdWbEv1RiP7WnKFVD6t2oXunQ7eWvxjZbhwy8pr46JP3UbHNvwctRfkCLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GsbLUcuUVm84wJ1kMmVK3mJ3AZNBX9u2sK58z7fUGvo3vg9GnN6kMpR13Tahhai5Ki4LPVRhMNtjDkYujV6McA1",
  "key1": "4DJdUdxZ74QACDrQWkBs4MAN4TKr8trsLoxLt5sgXkRMExL3if2wx7E3iQndGBNahBapb9TnnU9tYB4MSA7PYeLn",
  "key2": "5wSNDV1Vr4XmKkfnXX8KntPCb1CiPCa9Pg5EzniqAFjEPDZmfCAmYd2dJpBxpcrFvWZ8C5KaWLBmJW5wukTXTA9G",
  "key3": "3HMpNrmFJeeZqy4EEiBRGxL9Pivn6EJADoW9AeZzfu7tAqazq88NXakMV4qcbe9AR4f9NquEF5cnZsBtVTtzixcr",
  "key4": "4gkP4A6ZqjJk365824Shscy75qf5VeySkHxhqoHoHDD6Cgg4pmtQCtuJAdvwhXGwiho6TdNpr4yEVN7dQmDWu1zF",
  "key5": "2wvWDJJpwtzFpMPsSLejqWmm5jWYz3p9q4bRr83jWkjp3eTqjD4xpfikQiX72V3cPFcpd6byBuSEAF9XG7bHbY1w",
  "key6": "3J1LoCmCm3Jub3gGYWGBhQEAd5i8ZgJwHjmmws7iZ2dNkRLuyjzZ4HkyJBCeTM9LgC7HV5nJECHQPwmcAvRfMuFd",
  "key7": "4aQVbCiYXfP2eivE6GmHBbq68trb8srP1ridWxaJWt9xPLJSYWntM5FjDCQycBkPUCnddQkMR8APkGYbDThGLtxY",
  "key8": "RcNeoFP44afcnkymUhwWPJdFafZQQfA7pTyDEC3ugHQhWHntVEDfB4S8dGPzpN6HHFzc6wyMPw2YaGpkbQRVh1D",
  "key9": "FwGHkLX9Rnr4CNYj17aWYsckVejqqxeCnP9ni9WutBwX1HJFgnycGyfgW6wzud2hQP1SmabKfJU3CRAvaGSGgZz",
  "key10": "59L76CypwAXfxw4hb59PtBxMp1pkDjhTML2VYNj1oWK2W7JD5P67NpJHjEUHF4vDUXDPzsNW4uXbH1aujqqNjse7",
  "key11": "4idJ4kRmyDJFwbgSd2q3H9DVPhN9D6qotQLCSG6zxfjh2Cv7ev81QgnsoCtS1Cgi197Zw8EUNiKbmEwffqi1mpUG",
  "key12": "yipagi57ZTs1bb9YHA3cswPHeW5ZqiT9NGzmfYsTxkvr1LXQH8135MwWBbiJaMY3M5kkZoCRtErRTXjLsodpw5g",
  "key13": "4ZiQFeNMffdgNP2hqzDBKsCt8YHAkgWagWjxjQ4SHyBNp9mjbA2NeN42tBVP4Rpz5tamFPZ4QYJgo3tKP3Zmi6yj",
  "key14": "3yposuhcvC1cM8eZgkWVrdk4ejKds32jspmcevJ5x7yD4jGWLELuw5txVoaQxaok7vddts3HAxPyzfQ3pVGbGehN",
  "key15": "DL6CzTj4aR84WUqNqrTNUneB32Xpd4YzYf9YRELLvPeqhUX84wfBfhFsEMju3pr1sCfs5WPWqMBtq6HjxmqUd93",
  "key16": "2RFDsB2PAgmtiRNjEpy3VwJ7qLgwE5CD2RtWyy5FQxSd5y1edHPJwKyPKrVrJfsA2tukJuUXTvVeLDGAg58uHuj5",
  "key17": "2Ya5Sox3hUjuZNX844nPjBzGFchFBgEcDbxfCmPDHnijgT2b6EjGAoZkawQVXBGFG77yZYWVFKSjPmwV1UsndsNL",
  "key18": "4FLHpbQcnhiSfD8ccWKCvHh5YDLY3vkNGFXa732W3YcYdBJV5ZMH5Rw7ascT8dcS5MBCSZDnoXdT6xdy38e3549z",
  "key19": "XTjXitMgimAwTGrQLB7SzB7X2Fhoi133KqM9BhAPGo1NDVnMmAU12EN8mrSbcotRnbTZ8juyYXUE4njWU9xZ5v7",
  "key20": "2Y9pxYEPxtPvrrWtQSGPperq1xDFHbPzc1pvL1PF7yXR623n2j78DLMm7zbByVQCxLNk5t4VpKDKZQZ9B3rgAVPy",
  "key21": "5CoJjLTZ8fWazHycp9XZszht8PTdRMwYAbY6gCzJa9Ltose8uz1jY6gAv9sSnXfBAXqedcaCawbf5H2ZioFK1i7C",
  "key22": "2v7AtmPjWWUL39bHokaPuSRvLJ7DatMJbHduJDXrEuSvtpoANDaLF7SZTKxXEMWdKh5roET4P2Rne9X4Yh3mVqbM",
  "key23": "62XSvcrSqphKjwkMnLvCVXZhjQErzu3atPpBvMtHMXK45UNwv4bDt3C3wUZ33qkKgw3ZRGhnVXMsJs7eJiQeD1Z9",
  "key24": "3tXk3eHvaESnyFA2iGVd2Z2BnPkF1956qxnUNEDScND1mNDhzfo28QqcD3296hHrofwt9c8pYLQexDe5mB22U8S",
  "key25": "VHgFq94USQi37b8v5wUDWVt2A4PeimajskNuSoLTbRbViBBkNKq2YJXZpSEKX6BY6W7hKc2nhggi74gmjbQx4nE",
  "key26": "3Toz3yMpam3DNpqtVn4gdLCugxUgoy5s2iBgvbBE1ghf8VoXVHc8ZJC2dwoaaqqgqxNDrKkKENeZ4FR3oLdLmvAF",
  "key27": "2zuUvU72mZSco4UEvzcxu73yV7mytzDkzQ63p5EddQhSV2vr4pc3LtnNAeWEzXfatcwFZThiJbJxSqngrtdhLf3z",
  "key28": "2TPiCVbJSe6m5qXPr4HAk1BaAxMPs3eTTdQ4zKtQywQhhDepvoxCikMAnmGQSngWUmrq139vuLZ7hskMoBnfHSXp",
  "key29": "5t3zEwHKXrvPpUwUa2dHeWxZ2bgSWJ3N6UKesG4zNJQopoVXZfYBVYQvBSfmCzhnxRDFWomRfcb15EYjVB4RyvmN",
  "key30": "4QXpqWebD44hF9oUEF3vWvJF8e5bdJJ6BJ5cc8zWiMkpifsqfw8Wc6MuJwKg2dwLdyQzCnn1EXyJMrngfWkqkAjF",
  "key31": "2f95VVNXsCqSWpY9XPBjMbRUaw2tGz2LGfUQ996yRicYUCBzw4wpebbZagJqKWjHdonJtJ1FPdRWe9yiuxZXiDH9",
  "key32": "2ymH6Y863NXqjsMv8SRXBd8iTsPJVBVdehea5sthPfqUK9P8r5vNPcKc2Po7Xo6XKbtnJPSkFNLxD895CefSYyTy",
  "key33": "4SXdJo9UqxMYXv9MKYQmy2gwrPhbFDrAu3UxRe6AoP7Ukd8uNH4KP542QeSFQf5Xjto8TFzTAe5tNDAh1NxxgS2T",
  "key34": "4Xtw32EvrkucD64BZmjQwmetyTX6UsN2K4LzxGik7XiwNH5TwonrrX7M5knsuu9MDfTdAfPzHWCUVFTJMkeYgCPD",
  "key35": "eM2kxEWmLcMGQDduMCHMotxqAg28x3L54KCQ5Gnj2xJBQXihRf2x2RVqUBZPdbpamUC32JrQprR5fDCJkKf4NgU",
  "key36": "58rJVniKJyX4YHXCohUR6VR1w4nR3iz6yi45EKCaKtaHEwARk4XTXp7rbAcDDQ7vnuZ72Uc2SqbQr9YmcHz5e9U3",
  "key37": "5YkBAUuJ8qELt3ozVTMwDPZxkiTxWBhAxU3h1s1yFHjSsTbXEvw5g8BnV5AXb1S3iyLq6m3WMH1r9e2ppakyMgrc",
  "key38": "57KkVbxwjyJqURUEB8mue4hD7Bv2CX2z9XeZ97xnd2s5nNSp6T9CHbKefYFqZJ3BLegTQq33awdcHJppQxE9Qu9u",
  "key39": "2BynnhzWFRduXdo3CpPYLD1aejqFXdi4VFhBQ4jst96r1mWqEcf9FR3SFxfTjKj3TDSNPkPCkeDoJrfS7PYAVaEU",
  "key40": "4wMj9om2m8PR4fb6NUp8DDQt6Sv4o2hzLUxagKYNs3qNxkaPzWkvqan2DBKCYq2g5mGs4tXD88PLMJ2b2uSpTd23",
  "key41": "3fULTKxcxG895FJBhmmpWRwbDBxvU55csHV3GLHx8Y2dGwCPMKijDx7fFgdrMgmi2PVQS2b74zKVbTTRdQJBsrND",
  "key42": "5uohNczMJ11pSdqDwssW6fJbZ4PjJAmBhDzKmPetqSpA4ikQwDF5LR6RvRC5x3HuPiozhvNuWWVSf12WM2XpzfLm",
  "key43": "3QmYQR45GEtAf9daJQqvLFDBL6UjvK8AoqMwa7xugdBzExt28e3NEpZY24mwUMPd2nreVEun3xbQXZsmnph8Mi7X",
  "key44": "5LnRsrxGLPRYUbzkxa65B7DstPwoGZDC6Cxq3LbPqdWUeySYa5fksypnesHaxVTzFNS4Hu4CM9edgTRFaSxP2BBT",
  "key45": "nTAtu8XcFtLyv4NnHMi1UJd8kPmdP4ddUMYwPX5qQGNEuaoFh1Rx26UDFzDeCEeed1zyDrBWVB5Co2qzCvZBwGF",
  "key46": "Pns14JaHU6puGhnkMRvMt6Div5LovzagUAergDzx1V6CssSg1n3cMYHudet963iMXJnGrXvFKR1f7ZMn1bzEmM5",
  "key47": "5za5RmC2LKHqLYRkqKNZSVVkA9DCAgf8ny97Psc8xKd4DzEtfdxEVSsHqerwNPwnrwrf2PA8tZ24yZBfy4BjM2Hy",
  "key48": "gugye9kv7SNj3D3nTkUSs6suAt2QdrvnNFZKdbzRZjzdXJ2xbkgKzKJvBd2NsxDaCN5jBpThiZhNBNoAWJuDgwK"
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
