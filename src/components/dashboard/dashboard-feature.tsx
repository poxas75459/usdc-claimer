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
    "DNRppUEVFduatVbJqmp1HHJYPn2a4k4m6ybYjRgzLBz4k8oddh5Z3oyvGsRmcAcbT5m3hfVDPRYB4m2BrBzGuRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59HatdcdMW57RZNiDN6yLLp3mhGv7kkRywUPaHc5DYmzb5VdfSEgKfqCZFV1xXWSSK7LaitEu1wpeR9KYGhEax1p",
  "key1": "YQBmetgkE5ugVhBdZmBF9v6koiRdchUDBgdYa4xdrT6hSbSR3F4srNEa7dKPePEjchmdcwxjPDSDrjFN65DUJNC",
  "key2": "2UFs5BW9c2PDfgGh7xMAjgUtdqWi6hU1sWPXrJPh44nsqdogxPTPzssXwD6nEDUARTBhM6o1n2D77u9WVsx5fkaE",
  "key3": "4tZkTg4KZTkPfxx96esdN2oWqCFDjZ9X4Smghtng7Gmw8KAKDc6bDGgWcwckURv3SL7ocuZVqUkacUyGAG3yDZLW",
  "key4": "5UzrpDjUsScxBoZ355sF7aCKVn3Hss2gePkCmH6hXw4ArzrLScL24B7MTbCGtcQBmechamZ3pMa4N4EcTitnHTAf",
  "key5": "bPqcpVk6EfjY47yL8aX72P7t4W3XZfmTpawc9v38LdDA8pG4PvH1EfDcDThEVAjSmBq7xqtRJrBYwZ7WRZRsnVb",
  "key6": "4VyFBDkp8or3gEonZeJwy43NSApSmUA3SehFjxVQt6Zqj3FxGW5oed7g8gdc7GQsR9cJJ5xKSwrtRHDoMhsBB5xh",
  "key7": "55AWDTDwDGfXgKtj6KacHDjct6iVyyVoJsBCktp4NxNBAq8XNc1wphCKpF4htY6ks4uRhQnHKYbmJ8o9prRod9v",
  "key8": "2AEEmsxvM4FauHphM4i8e85f8SmXdBcfuLhZKAbQstba5K1D45VSHJet2XVcL3YuCTEMG1rEtFPw1cqk3JCFDkh9",
  "key9": "3rwq1zeiF69aRCamUAEVgDRGaHBS3u6SBwxAGL4tcZikcvqL4wJKouUZUAF9q1H9tVRR9RT6QPbJR82MUSgsF8Wd",
  "key10": "2dQoPubaWWuK1SAeCweqfYhw75G5rkM42krV2shCaHBMoi4NDrmsEj5Ja11J9te3TGTmgyAPRd4Xx64KotgNwqVd",
  "key11": "4RiBYJ9wKYW83g86Gx4QW2HfWxModMo8Cek1St6vZs96go5jLnRMAkLQvT5DEHZ2VJXU5aLHU4pugE7NYWv26yCj",
  "key12": "fxqPF2JQYGkrxtwyWzvzJ9uT18nwoPHnX2Ryxn6X7oaHUME8HNZsNXndMTTx7v5wXJ7cvaMq8DkNEaEPABjcqXb",
  "key13": "3oNeNxvtEdsH1asJsG5REbF9wiRtgRdNNBM4WySCYj1qyPWotcQ795mffJ35me7womK3mJfN8AhKqYNcHdoiQhKu",
  "key14": "4irrEZnr22NwbCTpXTwcLfbLBMxyisYUHymqNEQBc3aKd3iQHAsQsLnRD2XMgQwb9tbvfWfmPi1zsjxLvSfGVjh7",
  "key15": "4T68anN6ZxLC8YyQ4qN8kFxmBVU5BftyDRk4NptJUv6G6ifqAG6GVaRx9wNwMJ1Nk9KBGnnmaG2unWMt3piAnxdy",
  "key16": "3kLYzsv2svzqgGRwXtZsmW9H3VQQ7Y9qXZ5bQcxENBJSXjFWfgC8L84SHNTBt48PognaYkVaSKNYPxAY7wdGSeQR",
  "key17": "3uUnMh78oc8nTCKZvNTpicbCC7Hv1aLxqzYHvLJkPAoxzc3BSJiKMmSAgPKhTjcE9TwvKs2MPeB8sCaGKpwhdNjT",
  "key18": "GhVfKmcEAWf4Qt4vgWiEJBrtzhn9CzGxUh5h2omnExPmWmRwig5YdeHPF8kAFEkbDLTyrM7LUGi6mNPVcXbAXx1",
  "key19": "22bPvNUJPTPZChffbQCVgkGkUMr6FqrjvsjJe4L6UTa8ByMkbjnVYt9aNzifRKKhRynQY8oLhgVSmvimoiycL14j",
  "key20": "3KuYMKMWp99kY9AaBgoXpUNfPFtFtDi24kJt5T6kjjZz9vMFYqs9XVDpXfUkoxQn4ArEAwGerHHPUiBkEsNay5Fk",
  "key21": "3o9KX8e4sh6eYWqGGQ3qWg5Z9S3QKuUayD3cUrWrr2iQZPgnm9FkQgbcaRuoUjZVAw968hYA1V7FQv7nFt8cNqYC",
  "key22": "5peKxw59aZDHXKBfwT9jmjWU28YakJhf3YUbT1tS6jFbBP5vfpe4D2NzzepRmS8yK6bwRjZEFC1VFpEBJ9XCRzvD",
  "key23": "3jTigNxMiHNPdg47Jfs9QmDtxfHKBWMwiJWCsJw9zCLZdkMa9U4GSuCC8bAbAZhXWZUALfxcxqCR5K4mhKq2JW3X",
  "key24": "2T49YBeYwh77jURLdf8A7tG2tjwmBbgpTUcgkfum3BWYgtsiywrwnVz8VvpgisjGC21R2Cee7aQP3QiSNWqF2vpi",
  "key25": "5FBbU943N97BVyTKeT7xo7vLR1LDDyt4AzZ5TGXn5i6kNNV8xqLh9swEwrm6ZQMFS9nzMQ62B8cEwCmmTcyqFpSz",
  "key26": "3sKh7K1usixz9JHJQoy1LRepFpFoqpqk4RvKNtAa2FtM2QkSCXvfMcDwjnAD8MSbdbZ5z1Rgigkm17XNAB5Lvmt4",
  "key27": "3qsT9SpVPwnYXWk4Bjum2BUNpV8BEr2NLpDpWQXUT9zMn1SX7HWsD4k7Y3vFykvj5HukGNnVzKjgdYMXDVpbsk3X",
  "key28": "4MoxwGDoQCWWJzmDi64XCCbeLMw9dweGrgRpL3DZ8YhPMbNmQZWf45di8VC5mkE55DX5V8CRT4XFg5PJ1JNuAWfb",
  "key29": "5TX9tpRxhdpxdADuTXsMyE6KWxEsAKyV3T9hkdJacgrEFyDaMGLesYcjEV2DVZtSPCVp9gKG15Av4weHoZQN5WRn",
  "key30": "5UefDkKiZAYsB8WgZCBQJW1SgVyraxfUCNDK1xtaEgrfRFkqPW6vTZEa7TFTF2Vr9SY1NKnGCrr3BTo5HFk6Xuac",
  "key31": "5DfUhERRMxVJnth4d7jqrQ148ScvU4YmxGSF37EwjETogvXytLXqoMTbuEMPMdc3Jae33NQESJJio5kE5rvCkztd",
  "key32": "4yuQxKz7ZXDmbf9nTzFCwTjgBtyw4p63tfHAzUKQx2wUTgr57HoVURDPos4RmKuUyxJRnjWtqfzRd8k1HxfdfAyu",
  "key33": "3GubHYbuxzmAUfke1jHVtxsTJXFNxMJzQyMTNk8BY3kXtk1FfcpNKvbdXVbdpKtiQWVkyDPuAYfBwhxJi15PgJYj",
  "key34": "5RKWmcVE8epga87Y56oA6DCXEwfdqhmakZxasX41sNLcTXu6AQTYHRnyHZg2mn6AmPwFxArrT6N1z4uyqY5JxkhB",
  "key35": "23Ro7Nj6mBYd6H1oT3SfxSnfup4Kgw6rDugkPKvvUL2aTfo25cwAzxddGbFdMSjZGTJNSjasUieKbZTF41Ls48jY",
  "key36": "G9tGYshzpR2XFRKSMH2F5FagLVNxhtNqsNxiTQdYYvqkbX2QcAD4G4KtSm7FAz2teV5joeKUCi82GciZbtEgeoV",
  "key37": "49xyJVpixTVFweRdmY1PzwBUa1mLTqq5TSWgEbYt8EuBKuhuzvshpm8JECDEguexLgfjz3BY7sLZZysETs5jsSyy",
  "key38": "2TGbL5oTyxdTXAuZSNe7FutckvrV4dtNXzWYoANLkM1igr6mmFyMqxP6kUsdN1zy32WBzdKExaqKaCKmVGtnu568",
  "key39": "3QmFBNLk4d83MGyNV8WMcJQsx5E7N67XHe1vMiaw9XeE5pQgwvfNgEHs2osC5NwsrLpZpte1qtG15uRTDiRJaS7m",
  "key40": "4LssYu8tNngwPt8eM9wNRRZsg6xuFQHUoCEJHprHf6ph6bEzv6ULdkd671XUZhCFMWakbC1FBw3acung2zJWCgab",
  "key41": "4D3sLTKGXm4bqhbAtxKyN1bi77PDV4hJbVyxL9eYmc2hAZX8xdrwGXJgoeoMEWpUxD1z9wq9nctGGhFpNPYpsJ9s",
  "key42": "2GqkHH3XWG4EndnsYtyXb1nxRgiP6fuUVpCKWWaK2aWBBy99yWQYqJg9vebbDMRHrD4DNN7Z9fobM1Tdxegmn6EN",
  "key43": "4kgWV1cdHhhRvPeo8xA7FYYRi9MqNJnCbftZS4iTuTVCg9nagdfWQ5xriQHWYruGbaMqi92o8tv9vNecBqtjYm7e",
  "key44": "5YEvH5ukPKKky3Ef8VxR2SogFZxtbeuyGUiEDSgFbm4R8QDcPj1oMy8ApZvk46x8D3iFzeaFkpwL1fYTwn6A2ZGC",
  "key45": "3FaiZb8dAFMcb1xMga9jr2ZJs5TkX2auUe3hE8F2DS6Fdubvvw1M4rH3oTSAGEbGg9vqBxRFywAzmS3qCy2wzAdP",
  "key46": "1v9Janp5YhxZtfBSTQg1Ao97YfFvw8TtrWhgdfVcte87rHBy9vJMjew2J5htdeDU6Y6A4x3fEzT9WFDyz77CiM6",
  "key47": "KKW1nDwWMcpBsrf5vHr8rbyrSHEW1rUHY7vv3B1oQzbGQoPt2tFHTYrmrKybExNZoUsmM8AQLSjzqkpNtbLSv1J"
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
