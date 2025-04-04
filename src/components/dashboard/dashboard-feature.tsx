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
    "2PetyZxtpwVsDsS4PFZjYPdkws9u41HHHPeDnjmMb7BQQP1n6mSbqd5KCnAu48cKNbhaHkZXPDcn2eXBwwJTY3AB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wWGUsLYAgYEm5PN7jLMxpAyFPKTp4cBetQjLoX1TTbdxVyQw3UFpVsVT6HY9JKYgsdJJkRCm1UnZFiFYFQyHRNy",
  "key1": "5EsqEAXxvK3VEerc87h2Bc2huGd9nVn9mpWeSMsSDeeKqkHSP7SXME7o51cZubjTopd2LViLxurhvn2jA5B7BhpH",
  "key2": "2E1aYJzbYhskir88z9G9xREM4BZCCeU9hHjG5b65hsZNBTTAkDjUJgiEmMvZGjF8puzAyAjwJL9GStHpedqhAT4G",
  "key3": "5DqFmisXqtp8wW6edWJtUCckRCZ5zVVXvB8sShDZebn4xN79g1LsdJWV2U49notR7GkD9UpbxVABnHPKpAVxaSP9",
  "key4": "4fXi5f41441w1U5fSwHYksabtmd5HhxsfeftWLhSHsLVJeM1N7LZZ2eKuTEg1YKDTqkx8SYjXpDsX52FB2aVPn15",
  "key5": "s5WCmtWJSRJn8bgvcPbCvJNj7mrw2tQoVJeUdfrqD1XB68PNEon8WUj6HV1GcQ9JJjsf2e2vAWiKKiDEcaiQpFk",
  "key6": "3vrh2M94vocfMuADM4PbH6t8sAYjzzYo76FZgttkAytCMN1f7DvYZuScg3C4cABqFHFdtSG8ggqnr2kxXQjknwWq",
  "key7": "2aCgMbFz28cjKuPqY9PFbkwe2TeiRGWV2UR7VFZsLnL99j81SACtvPA95hrUEkaNipPirZEhKMAHGtZsdDANe5T7",
  "key8": "3n5Tc7NYmD7NLxFBs7rWwVcJ6pf368tUHvhxZgqGBfUqeNYQVoLpS44dWuaupeDfehYN3KkmTwprV9JziA9EepPW",
  "key9": "3waPq83aUDiizerBJpYrzEGtvLESNauLcn2gQy8CW2eTDSmFGrnntMiyDsQifmWsgn2F5dh2ybm6T6EypVEh1Gmv",
  "key10": "286uxdHXbpBXykzjk23fXhEZSwcNiDp83fuzYVXMDtb3NZVToWZiSFw3ydm1iuVueztGuJGy6HAgZZGz1nB1hEgs",
  "key11": "5Am5pT8uUbW726ni4DcwzYqtn95dwK5FAsMXjszE3Za8dbBRbnfKcSt75v9dgG9hiNRxQmyRXZ3TdYf15Bhtqr9A",
  "key12": "4GApQRVC4saexTbPJQYYXquHTsxv5JmCkEVBj78WACquVWeuhV9gCrUfy9gS8AEwwxr2sSZwaqcj8hR9ZRH8Kmbu",
  "key13": "9v1vgFkeQ6SHqZjRopA1FJWkuLs6A1J7iY9ExHVo8uvyQZBha6po1UYfhJXcUWUpdUNzfMRpMZyQE5nTnkCYvYE",
  "key14": "5RhZF4o23SMJi5DAWiHZCUqMLqKd6ycvsr6XXgMNfCtuozyputuM5RY6whU1dHSGwy5NVuGwC4xzkgdiVxtJ589n",
  "key15": "36PTUdqEeLNgWJJJ9kwH436yLEZXmiqT7wiLWsjfHb4nwnwank8HBdEmkxfXkrvA4LQicnoAB5Yttv4HPY4RAbwm",
  "key16": "35LJN5BeSGGdkQji4P9xwjEee3iM7ZmZEdYBY5E7wgaHf94KpZGHbLYVS2xe1vQcZsZqJxn71cf3s7AXdxQ3obLq",
  "key17": "TPf8espBsXz6BzAcoT7uSGvRTt3Z8n5zqU5TZNtKco1ktPx5M6CR8tDQFDy57EQG7cbAYaAMLqmwc8nru9NdZoL",
  "key18": "rsLv5EECPq7ACPV4y76J65q5my78dbHK3VwuhQQ9U1cmEuvsLUrPKQmyqjkUAQPCLb2NUXSRVx9Xaj6r4s7AvXU",
  "key19": "3u2YfmkCZN8aTuyKGnqmFUmzAbGnUpk1ntd7KYZjXgaJUv7kFsDMv7kSXYnD4PLBCaeJC7MJqXC3R22g1EmjyTS6",
  "key20": "3L7aaH4cnuC9LLe5wNN4D2X7vzKLxKZ8jap5CdPk5zPrvdZjBQ8WgRzNeMtZnrXXX6Po6NEBTc43iHy3L3RLJ2ms",
  "key21": "2giek6PfXJEuw1g6gLmsf3wGougWm2fAvPqf9gWCJiqJ7anCdHedNQxJzg7bfHBJZyx88WAqAXMRuhx216h3dShj",
  "key22": "4qa2R3Qwm8Ae4rd9FTNdyRYb3XaavQgykSwRmUm3ZRcZTzZMLec1Vb88Sk9jEPcge5zjbHwE3zcTDu9FnGrdWKtL",
  "key23": "3YDNY7ErCtepcUGeYmL84nKBuzg2Gd3ivT3vTZ1QziQaij6X8RazAEZp7cCMtxgVqL8e2rwNNwriPxA2m7DMgLbs",
  "key24": "3M459JwVy2LtroNtEng5Nehz7XCC6wbdtYsCazwrph26CHJedEnuJmkwfPQh6SysrdTPKh6ruHoUrVunmPb23fG2",
  "key25": "8b2qVCCCxDWyNF9vtyXifFbXrJFss9jKdgKq4p2bLzQ5ofUG4TtAtBJFJd6ajADQTYYzafUhpbP6Tgh52HmNhk4",
  "key26": "2z7isFsLuWqwnKfRnTt3v8pD8mSJU98wDaPwYmcZYUHq7mEnMeLNLiFmykDSffhJ58jDrhWRdGQFpA6y2LZtBuFf",
  "key27": "3unbVPmeq6mhsswhamVVmNuzdPw8tpvH2c6qM8GE22UMS2TKGE9s9vQCQK27Cw9mF4wSAYVKoLUW4wQe3uoDZrks",
  "key28": "2E5r3Qn1ao4YbB7JaegfV2RJFZeeZdepLBiSo8pX434aNRGd2QAnFugZRBCQq3mBJimCjjhhuhih2Vxqni8mnTC6",
  "key29": "4Dv742QHHTzfMzKgouFHKSwynLoMFBVVQRhAwh6s2ciJEGMrQRSDreQuvcVtvJAg5rAkLt3HaxSQV3iAj7WxP1tk",
  "key30": "4p2qDNmccy5MV7zaGTZSMEcMx8yg21D8zR6u6Axk2tTxHmwh74xuSrkayghxWckUFMoFoD41WJJRq8CMSEXkgbSj",
  "key31": "5MY3FHCNJFgRvgkaUzqwR6yvdPZbyb55EyeGeX8Kf4CRNaNycWFreABYPtRm7xqqDn77E5CaKMr3ccWGLDtjYQnd",
  "key32": "1Zp9ukF4c6jCYHfsVWxGtySGzL4zKJ1apeLiFNWKkrWdcCrKq5ExkeoAeMGV4bFxxAquxAK21o6VcYprEZuzP8X",
  "key33": "BTRttNHAnfR5zMzdZ2sEqYMfkZFTJhZ6MDCM9nBzD5AEMJgwfc4TbTx14uVYU9Wi7mxrvUULqKZd3Ke1xhEeKaE",
  "key34": "5aVZxSFa7v7GM2RJzxWJUNyZhbmpyjbbCFRSczkiACM6EfAotsAxGrjxs83kNE7LN6HbEAHZSJ9PoLQJ7cbZeUGb",
  "key35": "DKR2Xgez4Uapo7AWGiBW844N1TY1tVUwDpP5Fma9hU1dBR9Uub7r5s87R2P1CJkX5AcKdqSHsnvMrdQFSht7dHV",
  "key36": "s9hbevdLP3NKuxtdV5KjhZZrxVj2ojZgCjNui8aTZe2WPHCzLSjoRfGwHvMdEBBS7tkca7z3rHEZoJRC5jfYsMQ",
  "key37": "yvxyFAcoBAbhavM5UkDGVZu4cRBD6rs8GGDEaSNmZJqi8NKELUs2XBwY89Rqj4Ba2SMJjh7XmtrJ7RDwHVN91VT",
  "key38": "5gTbxsocCsTTUZJKWcWbfoThT1scg6c6dcYBnroyKtZv2nk2SBrzaNfkN3FqqufnFpyTsPfPd94cjxkANrXorppY",
  "key39": "5kqwX7R9YnwDtX7wWrro7JwFWuciwJGJRhJKwtfV9QQJHLoti25btD4ocPPXondtxKhqZxt1mvV6LX1sRhBMjJbc"
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
