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
    "3SmJyQTgMJmhEv41fzAkiQbFmF57kDVnKnjbLahFAN45DYGCiGeXbQ26VWiYVSMN3BDcit5gv145hpZkhBzXaToL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Gf3Riqmyd4DSs3zb8j9kP4aNev3bxHSTTUP8AZbTEvqezt5YPtG1Ks8ACL5qGazRMMDV7NA8s6nu91ZjF63267",
  "key1": "tXcnrxzt923uTLQ4uE8ai7nZe82j9ZzYLVnrSMgj1s2kksdRTd3AQmoumyDM1j39NFXwo4ZjNZpdcKpnFYZcCUB",
  "key2": "3NmyC5PWXoMxiMuahSp4xCTZogaWvjfiraRBcNcDLuyPuNr1WoP6izpSMa6g6qwUHfhySbfwXPLDNzPQy6S3jsCy",
  "key3": "2SdiBrvVZZPSVCZanncYANsnkLrtRovrjrNRqPDtK3KjxDphp8wchycuLBsFQnDtvWyV2TnQRtT4wSd5PGEYza7s",
  "key4": "4QkkcXv17c2LogeRhEPLFnC8fkoXbbVyxzt6dt5umffLcL3kbnx4XDoAWV7qrYpQ9g6TQ8etxsATregyu3zcFTaj",
  "key5": "2M4U3qa75PREtH1GW15cWSr3S2qMYLg6ofQM7SRicy7uuBJqJZ32C5K7SzX6aH5Wk8xmMEMbjbjtE7AKgMxwPWKz",
  "key6": "2XFWpjVpBVngi3CeNLvx8CagQsKyTG3zVyEgB5jURCCCWZ9w29YVBL61YsH2AT4oQPeiawuMMfcExuSkc4FscLxe",
  "key7": "5oA7mndRzHQwgzoRtS9TSeyojnUzLGbCNsYfVkcSW6Z5HbTnMLfSxwjaz7AzBAwmBVSUgmh329vnpbHTVPTdvNFv",
  "key8": "38K2QEN8cw7aAPVGXFFeckuFefGE581xWEQ4us7ZUVFWGU4c45ir7PMwDpRe3i7iY2dtdsFNM4nwyTD2En3zw4Lx",
  "key9": "4cxTGCzbqz9sL6VssUXY9EKEpi8va4NDkAFXKUfqAYgriDcsF7o3q517zgsFPF54zxp8CGsN1upUXwynhRTVvmFi",
  "key10": "nYd4CuYFfATj2Xa53yFKMyCpZXPz9WdjPTHXziLmE15t7B7bLhn62ZN5dxfT2cUJhRWmXsq4vF8mGx61j1niMps",
  "key11": "5kFEigy3mmMxUx669BbeGVKyUfrPVZjfru2SevASnwQq8iJ4yyNpBXr3u5NKM45YU7jgA5spgzPqCJD1VboaHhu6",
  "key12": "2vUx3EFg3MfBZqCzKJNgeFozaNE9Ns8FcJ5V5Znj3ZqvLAoeuWsCqizWioym8hvWQZsPm68hthBSpvtSJsEieqx",
  "key13": "u1UTEX2CjYMwDPYxXDGbwDdJzu2eDPjy4dzZAyL9YBUxkbcDitmmtifDVXstjftRn9fqGD7buTHWSjyw72AcjmL",
  "key14": "3pLuU7Cq9QMKRHvrqXGRedhBai7nLoNKk3TmRfEKhu75dYfNCyjFkpgWELMykCM1wmJSKe9tBwdf8hkDC9q3rZyU",
  "key15": "3TZbveVfMkAT8B1RyzVyrrjGwybuS8myZn39iFuW1RPynxmHddyNcQdWAqdF2DJmRfJcGeVLdcQRgGtcsC9Apebe",
  "key16": "3gu4MNnGZcKttBecNgkQWYb6Yx3t2cyzhvsaAfUTEnFi8nCrKJgHxf3xG6xaG3PBfgQq32q8KgCR3zqYR7gSrALQ",
  "key17": "3UKEV9J3Q7x5w7Hoef24B4GegBafJFBk59gjtb1seVfypMr59C5uXvzNwLqPrrULLgZNGV3EE4SbMaFRzZxnzkou",
  "key18": "aKekNZjgBczHNExhHWd7eFKAov6cnaotQLLfKEFP75YRysuxj17BVC8nXP1J1Rr4GbUDAQPXa7baGDWHEiQoNam",
  "key19": "2jaFxR49ajtHS3EovYWFKfHpGccGUJQGgqDmVVCUD34qRrYaerAanp3Pz9RJ4cTLrZi1f6A24GpEET8Tue17tr3S",
  "key20": "okhJBvTc5dRDnrDnLaSt9zuuHdJn4wmh1XpKFZmkZF8BVs62jBdoWLefYR5scu3jQFxwMmbwfoLwpQtj4jynkvo",
  "key21": "25ryaQzAQa4hiUUWEoLzLu712M1aCAQsSB98Dg1ivVKDz5AMeNS6hSCuum1GdKPb3HYPKCwARr6SG4o42SYQUAv5",
  "key22": "2KLLGwaQsY1fyWPKp5xHUMdbYBRcbXaVgkR9Gna2nYHR7yQyJ58yhLruASR8UXMVLHWGWGpK9jQxkt42Y4ZcWVJV",
  "key23": "2TwKKYeGHs5aSFzAqfbLcATtU4GjJvqm6qBydKXXgqdX2DTLypnM2pLvBq1361DwXrPECpFTHjESFzZzqXiaZfXu",
  "key24": "2LiZe4WTjTrYopmp6MuV6azL243GJZJH5tAUnAdkDzk4tDDxyswTK1C9VbTpHeSmzk6fn51GeZoLvXSxfqFRBYvM",
  "key25": "2MMJEy5jQsYxxvNEiCdXtnXM3vt2z9KogqeVysZ67cg1BAHZ1p9GLcuQG7HGJWgsMr8GyGMd7ykKUmjPaxPQGCk",
  "key26": "5C6PoiTt3DSLqiJAGoxRgWT2qgSFg59V6hZbp1hf51ku8KAFXoWUUBiHrYjzy4ekYcRw1Gz7e7zQViLk1DiBJDjG",
  "key27": "4L1HAahB4cGcNwiimsAUmNA434FfuBtdP1GBRPHysmdqiw7UM61rDWgXFGQVLW7jdhsor7tWB1keJ4KA3GE6CtrZ"
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
