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
    "5znemYfrTgPzs5w7RciNSzHD8XWqgDNNKYjbnwjAXAizty6d1Ww8rUPoZVWeYZcMBPg1gzELsPry5DoBtbq3Hbem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vp1zVTwuBE2CjbhTrWsVNxTxjB2Cj9AGpWEXvVBuHxy2uCwVVNXzmAX46AxCFhxBUvCiC6KSLJS8tRn7V5ViMGo",
  "key1": "4SLm88MBtgMDG1Xqefv1oNQHT9DgCSvkYjNNA4vUAjekmJDwsdW9GWVyv9dFcG95gXUiWuJsCj88cM2CKstxnsin",
  "key2": "2Z2Hxf8Jw1Q33dDSZFMPfB5X8b1yeJMP9LZSy6nTrC9NBkGCEWK5P33pucBYcbb7gabUnRaHnyne3r5f2VNJeB8L",
  "key3": "4DRkJb1DNcGepGcr97h1AKgs2cFmK3ErKngzDtrwM7k7tsKbi4TvBNkC8swQX7zGiRc4rbirCHG5nfxtw16NTbrp",
  "key4": "32PkLSgptHzxPSB2DUF5bgUxQyXVEd9ubQUiK1BeFs7zx1NyeoPFXt3Tna3p6GcaF9tie422hKEkjExzQMKSQXzz",
  "key5": "3nNgLZXDGN7nkFQZVnV5sxf3wdtnxreemnr7N4WMUwiJUX1C1TF2drGHvhCwGD6hL9CYqtfZbYo6io1ntmp7b1mh",
  "key6": "346FhMjmV6Gnirz1zm2tPUDnm35jWYqijhj2T1fewSsaZmWcJEfweBaunZGVP8HmLUJwX7QTjgeciaAVvG9tvkrr",
  "key7": "5KeWujdqdomj9XfbfuR6Ay2cXfB49rgkpkHnD7mwf3BzDKamneXd8QHfAmCuUoord9QKgSSrXGa7Ngu6zBkSMghJ",
  "key8": "EFDvDzBdy2rbFcsBnNU1GUacqT7WLAfyH6AvAnv4cDUNF8q5JHzj2e8iqJHj1Qso9iHQhV2XKRgxYd4Fzt8UWLV",
  "key9": "2aTx3UBtTi4jd9XF3Mx3psCp2XxYg52zw2w24gt6vuGr1aJBQZb8hmBK5VxKd4uBjAmV5QJFk4yqoVzFKnZEdvao",
  "key10": "GNS5vKtQt6piMDfh42uurzVjEVHBGc5zjCMwcFPqtv4FkzgL6iYfJ5tMiarvSxurx3KP1dUwDmbrht6BT9HCcoo",
  "key11": "4y2owUmbJhaJasU7d49D2CFN831rZDpNy33qBALRT1utvFFAsTnq4TpzE5UQf3Z1xoRiB3f6unzfTdpTZBPKiLrF",
  "key12": "3NpuiQXYavsWdZejTw1d8ZDRzZSpEyPJYyc8grBFmMeUXaBjCTbxjv9bWQYUrRFzAusQYpiqWFaABtb4SFXGByFB",
  "key13": "3HdsgJh9hHz6hBXfFBFryieteVg8J6b3V9iq6YKTh3Fjv38hfT7FDdmeDji2G5nfsQNWopmQPy7wxDB5edNAfa5i",
  "key14": "4kJSCPtgKt4CQQq37hJKk6ofbeYApsyPZrYFhty9t93uyAytCbefCxLbL8YvKiJVtjLiCZ9VFiMveGfBsopNWxxg",
  "key15": "3NM62Brams5eBGiN7mRMGuV6m9EXTxw87naj4aVcBuhdpuYjgbgcP5GFuDuv7RpzM5zpEK3iBQg52mrudLkXshYg",
  "key16": "3LsEY8uoR8bsWEy8w4XGuRiDu984QarueeuFT2AZfjwCLSHDnkeQktDj174nTcyaeebtdTfy4WAqeWaWJF913jep",
  "key17": "RZVqbXMfL6QgFFbbb3ZB8yJFYGCjTUiJDq86eBXCBt1G2mZiVeN3svcmRsqFJhyg26atdqU6bX9PQz5aSj6uTyL",
  "key18": "5yENmzohm5ChVi3dssVcESo2nAsi1AcqoCwZHsiuUNBKhUn3fNJKNnuc1FmqHfVxFrh97fnbKWRD6ngoxKRBhZbe",
  "key19": "36jYPU94VAP6Mge6nD9uFxFnLxa98FvLq9ayxvKx92994aremPDVeZv36CunDHkBhR9LyhxkzSbDt4Ydxs8XJaY8",
  "key20": "4mkDQZLiDVNApSpzEptK5S6mRt1poQXXuvYe1pe8tFF3D8DfFbUgzCnjabc1AHW5pS5JcZoRWUCwaBmAX4FeGGwM",
  "key21": "3v1iuzGXgW9rNH1hnq5VhSqf8o3s4kaJDdYJtN7PQmi4Gc4favXyPPs8QB5K4uYeGjCr5nZtGGm5JJz8UzRWJ9Ko",
  "key22": "3YPauJQ2ezVDYciHpcybEaJdKvYDvugLBA1k7nMCCa2mpoSzAwf1FfoCVtghobLFTvu7tzLJdyzBrNFhSThprNoy",
  "key23": "UXegD4YYsQ5rcEPV8CfTGrhJ5LPrVQzKfJwhdSusNP4P2hFcX7n1GARVsHoZZ2XSodCff9bwjt5GCfxDouacss2",
  "key24": "5mEBmvjrjrwnsxA5aQiKhk6CHS25LW4nwwS5LrMsT1mjdkcBd78LjaeqNYoGgpefoNcRnJ9JLXBe4oFTK9x25MTA",
  "key25": "51jsUQJrZTNqoBecvkefcnPMWKiWB3ptohBeieC6gTWmySZVgHB2as3JitT6fh3URo7C4mZSQgwk8CJ9pAJedqhj",
  "key26": "g8nvG8x13VbjMVFaWCdC4gbeyc93yD3ChbhUNiRXjRYTJEs2nfu3WkAW9AhJ9oi95n9uiyUK4eT1hDKREfwY3JF",
  "key27": "44vj1c1j9ABMmTDVC3Jp8jvZqVp3WQs3pFFvwBinHu9nA15NHHyvMi3dL34TAUqdWsiWv1qrbXPK7HuARGsDwhjN",
  "key28": "5wcWpoYi8RgoZPXfpZwwXCmaXAehemRMXpycS9b3Qk96ephg2iLfTM28N4MjNieVVjEBz8AcLVK5Wdp9TaGS7mMr",
  "key29": "37vrKmdX896VQ2613e3yUysABhAt8ABMFvXYGrNXxmMMYKVVJ6u72NrVM4VUntEnJb1mJqMPVQacCCsKJfsQxPuC",
  "key30": "7NQzNTJ74tpPZckfNPRcuxMRWhSpzXim3AGV7Ria3NQvwVsyQrooXXcxf74qfRMq6sNa5suHuHq5Vcg7b2pLCo8",
  "key31": "3QstSKjNxkL7NCGgWrfBJuJkoAwigt8gotttcSaLUJGjnvjnijEKPbAHPVutyRYZ6Qv1zcitSH79wcAQQ1P9yGCF",
  "key32": "23nWsdC35bfC84zvejN5sE2Wjfx22pubthJpwvZx5J2UeUDHv9W1nuqzprYB2FKejTZsMvD8kUxnfUJrcbD64tDj",
  "key33": "tzQhQT8LFKrigxExyqQQuBzpwzSVFLf9GgjNVbihuZsc1rUoLWpkiX1QXrNckrpnoAPctfpTuFKh8xKqc7hgdBP",
  "key34": "HEJLfMWFJUHiUuT2aTAfMaYYnXWJ1HmafnM6YNm3Qh3VBRjcbtpsfD4yfcAwgGwpQutPVCKcFNNHxHxw9WKTuVp",
  "key35": "4QbLQG8QzVjzACbRTBWDhm6Eo2FsqF4bvgbehM6kafXFfojETzodkjiuFggxUDqy3oovvs86qX4DoNWFuiWCg5J5"
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
