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
    "2MVRHjnhnSqX994TL8Gwngkbpf1eyuAbt92veoaB65kHYajB8TKjvsiWNGTo8wAvQSMaRopL3UgXEALDJn3gtc8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u3A3NiW92fqmvsiSPSm4QhYMQ1zeZBhrrxwfmoNPigQikLji3STFCVJj1RKPAAYzv7Hn26GytjUCJ7TGpPCDsuP",
  "key1": "63HCjn11zTwHwbWgpSYtGaZUuVAmD3zQdZwcG2Ru3mBS15SPWPgqdM4ms59qqvbH2oUSkeX7Yj8ynNRFCNaNrvvN",
  "key2": "4daKx2cMw4W28ojkfJSjxNbmFtvHmbf3qVLJQdZ5NC1p2ZyS9vqnygJs9wWSKGHEeRTnEAp8Fy2yUVqvo6hDhLJ4",
  "key3": "2q2FE5WZD5uRopWrt1AKASX8hvifEaYayQAhXxUJYvuthGAsHzHcakhvMd7j5tux4nzDF9xbGrWa9PoEtb18THgw",
  "key4": "cHErNKAYVPohWu3NRp3jgfvRKWht2FTvfDvVW7GAB8dDXGz1QjBEm7RBTgz3gawEFWNkRctyD5Sgmwaxbph9vzu",
  "key5": "2ogeyq37ZSrJVmm4eTH419fqovwUdWL2B1d29gFZtY8ZhEmGGDFEZXPMjAyMRqxwnQ4of5b417p6omsCVAr9Sz7W",
  "key6": "4WLub1VN8jXEzrqnmD8zCNhMy1BHVt9MxgrczC6Go1k3aPTxDKRtqw51N2g78mnmj8TzMMxjZW5dLo5eyDMqUexb",
  "key7": "kL137TuMpaukiAjYBERXoUhgV76cYwoX4Re2q3CoArWnwr3WpihB3SsiDmWSAcjpMhCNLJ2Q27rFcFFEPc3F5Pr",
  "key8": "2TQcxdTxTiftuCKGPBjP1FN5S58tHRX8jMevFLcwhugZSH43GwFjHdqvsH6jq4C8fMeqhJLm559qC3cV9ePdCypo",
  "key9": "4MrbTp2En8nBuMDFpPoARTS2dtVQBSdw9j9qQp234MVJVKuLeWkntwfDp66ivW9NQJomDPGfWs6wqyP6TvyfeE9T",
  "key10": "2SXJTrhZnW1Q5gGvN1WzxbMjsR1gBnw337JRMWJY2ySAsDcHnx8HsMzW3jaWFHTCxvDKxN9r7cTz9YWCDjhVoY8o",
  "key11": "2TsozQvhFCPxHqpqYB7MnkwVQZv8deNbPSxBJe6VnrAJeBmUgpxpXqxg7gRbm2RN6uhWS8U4Cf8Gbmb3ScCw2hBk",
  "key12": "Ftku6ZvKSsK53mFrQq9jtGN7uZmF2wUdohjHR79SQckEtMwGPNnujQbD8FfAHViGJZPgq7L5HiK5p2vRQ3wdszm",
  "key13": "5cvTSmbNpSPn1cheFmnu2gUvXgB73mDgz7uJwn9mfzqDRMFXKtpKPfmtroiZMZCu2F2pwaeg21wUddS4DDkF3CaM",
  "key14": "3XKRHJQzmy9w3EKbogcXzm4pexWN7HANXFiWWCY1WTKPcvtu4FV3NeggGM94E9RqwRNoezTe9yutnfAnpTf6QFPP",
  "key15": "2uD59NgbH8Zp2uPC65idtW5PRMW5AJXQYTeHfHNK76tkWCMkxYWAKmA7iawD4GDN8BvHK3ssxyRzsgNZGHB4QKBf",
  "key16": "2fzoeJzjNLN5AEUdbZpY5SFBFcuCiaAysywyWGpwMq3gFzw56mL75VVJmVU94r217bqNreDdA2nZEsUH3U6PTZq6",
  "key17": "4vojZZukoiXk3GgymwBYas1cLKw58dF23BKUsXCEqWSySSuXuFyroCLW9EtWjrdTWErNd4YzW9gPnVzCE1DKQhDe",
  "key18": "2FEj59c58YrdddxcTvPyM9GxMFnJKmb8hnHKZ6Z1R6v9kbis82HW1y1kJUPDxQ23Bxs1dGGaA3YGLEVmALkzpxCJ",
  "key19": "yUpfNYL4VJZ9iMHib7k6vvJ7FkXyXUARW6attUr9HX5zsv1beKy17MqPDj88FiHBgKdSsSHPGizWzshyB7CFngh",
  "key20": "3bNgoAX6uNEavdbdxMrn2UKoMvFM6L99vBQrVTqs7t8vx152VDjVz5bcz3Eop1TnbR4dhZ8hLZncxJSioA6vDybr",
  "key21": "wpyMp4wumjWcds3jxoSP5ep5KqFhEz5b5nZcEPPj1vCWiPpBxcpZgGBxctxWA4sRyDkR3sERpRNRgyXE9HBFaZz",
  "key22": "5BBTZS4rueMLWjS9GkdKmDRp9uuBVYajYRPuivDbA4vi3Ae3D9UMfzbVJbYs1miwEtJAhdjzBh6ACkDErx5RQs5y",
  "key23": "5AdUxUHod6Fopdv2oxhL2BAh6SzJwzK6foov4sQhDxyWvfQjWvr1YuT8CT9tY9myVpcQKZ7VW2JASBugdqYyJg2K",
  "key24": "5N65BAeN1BE7heqYDGekFy8HfpBYyV4m9yvh1ctgVNVvybmdj4gqqhCwq7GTc9H4SPXS5VXLdBs1b2CjyUmA2tb5",
  "key25": "2e9tEGpPYwXTSVgLawRDp8qWNCihYA6RLBwym5U3Txk6qgmuZMM7PcifBoFLKMSUPTD3nRaZVZ6jY5MK4mxp3DBK",
  "key26": "2D6d4UqskBZc3g65Bm7uNZhRppRv8FGTDy3d6LK3VwHE43xJH1gx1vQV96fjmfCmhQx4cxyjkNjjfovNtrt3TDv1",
  "key27": "37cVtwJ43uioREjwCEkP1oZwZnj2fTAkER5aMGhnQiSx7PfFjQLqjpkyEcJ8hcdAUtW4VLyVGLst3pGWPQiwieGq",
  "key28": "5R8FfMfKPqyiyk6ZWKQzVUrx7jDQKiZ61ezTQCCuzv5QDGXbJ9iYWHBTNC8tGA1whaNofffhBjvyrPcuJinZS2PA",
  "key29": "mQ7hUNCVWK4Prpp1FG5WRtwvFM9FSDST6qaHGdFViyWtwZ6Kxs1nAg9EFzuoTzYyhCZ24uhpn7E9KsP1jnaZfzf",
  "key30": "2ynhYqGT1h6Eur9gdBoUKPNF3p1G9CCQdGkr6vJX5qAHaTbX3DoJoYPJKNRJ5Df4np9kwr3RuVakmLA5PbghCqLs",
  "key31": "5bh1kQEisbdyS87PYKkAhkroFDrHozb4Te5AZWShz2RBYDmymPmQJmQq1T5MnDWqKaNsyQJbpsZH4dfhP2ZhVwsp",
  "key32": "yPQS3gnmdDP3Zwh9oM4VeLP7mPyJF88QLY1LPovjcrW2kVSaovNfY5BnZBdk2wA6eoRNBhNUZgQHSxvhhWYbcyt",
  "key33": "34VnwFuJuPbCC9rJk6J5AqX9TuzXwDUX9BZAvJVesd12oMZnSDFa7LyvDvtpDE5FLwFe5NghG4SAfNc9UMp3zijd",
  "key34": "3CACtnK9pL6Dvg8HftH79Adsu1687uZkUGQ1YLmjuixz3vXUtSqx9hvr33TGhNtqy5JEYMy6fSGViygVnH6zAoeK",
  "key35": "5MzeagSj3nik8aeDZdvUXBZmh1vWrD8W4hhE7ndXtRaBoJzm93YGhx7HFoC4GwAmbX8HGzSWZ9fkHqbAobQVj7Tk",
  "key36": "58gWVeezZRgKupKsPG7kp6YNtoLZoULaPoEjQdq9kdwXKEpyb5xXwKbYkx6uo13n5weGpmfD32n4Q6h53v6pPTxg",
  "key37": "2ssEHH2qRNQCops9NSawKWnxDYYdXLt98HmYxs4bSVreMV3aFTxLkEfbUoe7Nd1LXzNDhjJbMqTkrWeYrD1bjD1n",
  "key38": "x1GznSMR5c6JXr1Q95aDkkznHfEggRPG8sJ3yyTKt14WGZvgdodzBMK4NJUYHwiYYpHzXMAyKNyzCmxESho2wuY",
  "key39": "5WeEbUApVvLFSgQTd1g12ngJY3w5e3DUFgY4ZUqKLVBJ15gg9BjwwC8TFnvKoLyQLDG6MHygwe6imAJ6G3FGpALv",
  "key40": "4ShNvi1z8YbZxNqYLxX9V5x3AYpsieFVSE8SPVXZswvFNApfHYY11fsYWdxc8RxxLYyuvuZdQVpAJ2jxzzm4okdC",
  "key41": "3KGkkStvDnUPr3uXdvS3AzLo38dY11Nqpa9tbgWMKvXA5pY3PMeB9ByRuy12CctZPxpU1kY4iT5JkAJ7AcaruCkn",
  "key42": "w2b7yKwkE2isokxXfC5XqYme7rzDvokUfeU9jZdo3rjPgfSiUvsgjSZJN1YhjHUyvYyJ6UtV1Cr9mVnZCKyg6mv",
  "key43": "5Y82eGQxqh6juB7WxBTUZEu8G1nzY8WAc6P1RGB76nA3Fc98fyQEjwiiXMkN3Ho88syFTm1uVagAcxobPfQYTerN",
  "key44": "2XyYUAKAJaYnNiVhbGVsobHyqYZj6jKFLbydak1TbbShAQGASychyiw2boZ5XpobnMNg877eB2jpc49MWqMBBgNi",
  "key45": "3wTCX6N2bWjMLos4ibX45CrnWsyL13AvMNapNmTo6YTDDEuFmvL3UjYg7v4Ci32eZfYAYip1mkRgspamxhjgxSy6"
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
