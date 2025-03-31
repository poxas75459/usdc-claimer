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
    "3XU54sf8qixp4o6fLLphHk1NRTUZ1Xhv7eRyaLtKX1KJkrw87Rzng7AgD2gAgYsrfcfSSWxxhsnXSZEZKZHw3Ex6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CTQFYgktqMuBiwEVcyYbAR5ug3Aaw8rTs3ZyJtnjy6URHok1ZQSgJn65F2QHnu1fv7AFyLzxQVZJnvyo3BMz3sE",
  "key1": "44mZq33S6kPeiU3s8Jo4LnZEHXsrwbz3jY4wxYcBVpktLqUnNpjKWo86m2zBovExFCNdhU2514HRFTFDxJaph39B",
  "key2": "2X4mUueP2yH1NfAa2fvT2M3MiuCoK7wDax2LgNsb1E62mVw4dqrQGgiD8VhR8LpYBh5zeq2xcLaTCQd6LTX93PDP",
  "key3": "515suKX4XHsvX3Ap8yn8wVEuaKRJ6t1vnfNarSqyYEFu5XR1moNgPW3ifu6sghCACTVs8shjaUKHAd38F9SmQVGu",
  "key4": "2HADCi9pp2Roai3GRtLYF7zudV47yr6T88yFJBFqfYCbgUGafc1fE4zD1t9caanVEiUHbNBkydq2kPAk7jsMoGzB",
  "key5": "2kqC1CJ22Fbm1rdQUop5u8L61L5jZM5KqcK3CnPTS2HpWWZptLqgTxXV5Z9xDaYrpvMkFaXgjwjR1NMVUkLZ2Hic",
  "key6": "5Lo5k1JkSfk8akAyoivcTe11KJJ9yPn4inSLQahYJgJZJmvjSJ5Ea7mTgHvDpMpfvwxETMP4HUxATuC8QoK1uTUe",
  "key7": "5CcTgFoJi27uxt1Px4BRGYiHdPyKqLsHF1KyzNdkqxRyzMtocTTM9UoqAQiSVGoEwx1TaiWM1pA9iom3a63AakRk",
  "key8": "ZDsTSWqAShAfA6vMadZcxM87XBAvuSHjWhPJUqpXuDYpEXaszX7oitA2PQNZ4hNk6ekyaACJESYnBB8rwyyDvov",
  "key9": "3vg7C6AWkRJF5y64v5ejLw5VmmfqdBiKhzeAYKJDTchKMaZhL8QPb7bSeb7q6qX3r1zZjTRmXemPKvUpcZ4tHofi",
  "key10": "2h3xAu7uAA12MeYNXAmwhq5kfRP9CBoQwPCQAvP81BQZPahq7FC1j5Rr7oV4EQ7byPUgwi7jBKEU5tJj9GQxkxhT",
  "key11": "4tB1qozERMNQYsXjMLqoRbzj7pDoiCZGL2HZC1QfegjU6NXq3rsW4y2pCxvK4iqPP5SbrdZzFijgwj1CwK5SQdny",
  "key12": "qEiKyYE1ftuYWdfQBHsaeMMKhzdsBpT22DTHtF4KU27ZB42QqvCwg9LcDYSzXwNgYv5HzfojzaTQaPntF5MACKi",
  "key13": "5VDzEviudZ5LLTmHLjcKeUULsnc1GkuhLJuQDjwYfiEaBRNqqVeqsThzRK3cdfEtNRM7a9z5cdtGn7NfJRJvL1Ew",
  "key14": "4FGL5tM59JxasGWuz8ayvxegqHTFYMJtEj6RpQkeXuWyQyxGDn6qQuLTn9iPALwffwKRnkbQ6w5gQVE8F93pdSre",
  "key15": "2gwnkh57con1w2cmXHoyLm2ncRaxPgCmgXM4nfvfVkQqwd1jM2mF7Nqfhkg2M8GAZadJAoVPdgU3KidPVVmSS6mA",
  "key16": "3soGxnMJg9syssL8JWVLwf26dCQxHRtEMX7APNfjn7RAH7dqQmateQKcgGsLY7FFNpJNP5usij3fF5qRACp13pji",
  "key17": "4zEvMrLUbTLLDiFzBUMBNaZEc3xuW1KkqVsHHwmBKEF1sayeewu2QgJgJh9XYvSVQn6LLXZmE5gUN9Mx8UTS7HBS",
  "key18": "5znPPXTdg2t8DxhizJaTtJ5nDLsj519H1WsMbVRY9rjCMS7eWjYYwrEgYKWR1WLqVN21LEHZPzqxQrFo7cpdrVPc",
  "key19": "4133ukvRZ27YUn1yYfVwYcZRv44u6oWCQHhg5N6StGiqbPvtqAZtoJhDEKj3ufS4B72pvA9EXbmSzduia2dYsXSj",
  "key20": "5NLRe6mZGcxBYnBLS4KMiu2R1n6JEhttG2KM2VBYKWG9ms36YQrLiUdqtSeB6NAUsWyeErsZj4k7Aa6uW4Q4FGM1",
  "key21": "2rTqMxDq2k6mg3pWkL242TQRYKaxskxp5vNUzudEAvwJeZGsGMaBpq9HNRfc4CNJngMzKNi8fkQ5LzhnuGgkx4js",
  "key22": "3HPjJhZN6QqeqTGo3rbmUtz7JfZqsajNHjPdRgUfDu2dxSqcDjWzLm81smQ82Vvttx9aEiPrGHMWfTYUS9yREBcn",
  "key23": "5nt1NwaeujtDmbigP6iDqXewGBUgBBbLRHirX8Yt29D6vnh4R8qRZ1UyC8WG4QnW4ZPnogL7j8ogHJAsN7u7QQrF",
  "key24": "2tsnvXT4GS1xh7XcwWAkEKeBvYkxrDxMLuNiEpTex62XeGrJVE62iSb3Ew5gAuGf8fbugFeYuarjBLUs3VtaxdA5",
  "key25": "2mkpLmjgZCSnAmYeshD5NWjkbZMtoPS5PAf7xdggrVAm1j8Dq4hEpf4gVVyCyhryYuSECxpNY81jNeFLLrgN4jHy",
  "key26": "2U943BLLe3Nx3TBHwef588Hf6uYswcWJpL6PsqGzh7CGyRxTQ1tiijQtwGWSJXUynVuFraBenz3PTzZY7mBxNEuH",
  "key27": "5ejAFJKJy5cmi61u4WEiDK1ubaGgaLJfM8iDj4a14ccFf6cWU8fszGxBjyjxqStEdtwJ4o2HbEaAD5EVKFRLj7k8",
  "key28": "636YYjuWGrLrBM36e4XSb6tdEQsPXx4NBgbsse8FXreRadFLkyM6i57vN8CRtathMiFN1c3jRR78wDH87NtwCMLB",
  "key29": "iGBDie4JQoXnZ2KkYPxxDqKedpr4XufXJzwNFyspoEeDEYUz9ha8Auu3jTNReTB1TQfxK9Jgw91dN56idroLafY",
  "key30": "56993t6KZGFLtbx6zC3CVNhaSpzNJa2ymXakADLWAFyprLUR6Li4XewFWqeRDn7oXfRc6gMT3ypqnKY7Af1SgPyy",
  "key31": "48V6Pko3F1fvve8oJrpDNZQV7tyGZ7cio4D3KCwnobkKMgW87m83nTNpT3rVacSDgxbfhX7teTgVKZsUXTxAvm9Q",
  "key32": "3vGkXVNg7JNCaRdETjkxWQdbU3fRtjH1JcB29mVtQuWR4zXGXobF8qcssJ3LVQ2Jcm6973ztQ15z7QJpxaBnNVdE",
  "key33": "5b9h35KBiUxm9vvcKwwjxdkbDSBydHov2tGPCEN8KtUCcFvVjrdJi45FVakmMR4tk5nDQEjA8hRy3j7WgJj2oU1N",
  "key34": "4aogkPc5jFKhu8RxpjNV6pVSagcjmBjzFYhYU6PEdEk3GE8cBuKkSA73SGygyzfe8YrRejefnaFkr8wZvPBxF7xy"
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
