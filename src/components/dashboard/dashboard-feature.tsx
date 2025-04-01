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
    "5S7Y2BoaYCiv2DP4PjxT41gc6e7e3uXc2mHpHgisUnFDr71PGDnsoWp4D7132rsBsLSRrxbnHUVZZv12WLVCbvvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WgA3cbTDqKZkLupDX9Z3tyrNRWp8P2qe8EgYGYGoojkiBSLPPiP9i1o8xSZXThQL8EGE2zfPyaJo65j2nbCdY4p",
  "key1": "3VESAoEULBs1HBynK9TdgJr3DHZpqWmWqFmavEQ1ykX5CNm4iutMseBQ1emJmQD4gMQ2BUM5YKcFT3L2r85tvHWD",
  "key2": "67Tt8dBWKFa8Cx64tnjZgKU63PytZUyzaXHgHBpDon9cmaf1FwEqiMsyy3ZbBWfAASHB3mFdi264KTP4EXNjrvKL",
  "key3": "2BB3u1p57Hj1WEYqyoPGeUfHVS7QvDj4sEwPbfXGwUVj1nWcywJ7pCDfi2VUgCbkUJRs23MS33uoFd2XkM2fdvWA",
  "key4": "ttSrywqiXaADDkBhhqcWYMd1KAU5X7W9UgS3GHx5F9uKcjSLgD3Ns31aAYhUrB3yFv6NVGK4HYGtChAKdg89cDH",
  "key5": "S8nsMimywPSzbmCe4CE359iHi647R1ugJGytiyfrjWZ67uVS8tHDtUuXXyQvT3Ceg19ThAZwbRywNkfYHyzk34L",
  "key6": "5VsYZ64uhsZCiZSVXmaMARnRoVToTHafQbAWTSNAqUJAWerwAvftLvYqDQin94gQpEcJkfPXxHbXMEoRkukgTTHk",
  "key7": "5bR9fQaJVc28w6Z3QrDZAdL6tNVhKcQwRKJ8bejyVFozP7yk5Hv7FSySxuh4FWoZF4kEBNHpVZpXNjkTqpFRPqrL",
  "key8": "3Q2WSX5L5kFk4TDNp9chCZ8NLwdmgNX2rcW5daFH42uDPBY17NWgdmyhDgiJKZR66QvWgf2vugMh51oS7vA1FCD3",
  "key9": "344jWyZsY8pbMEtw3hpFMkosgnv6eKnrUrWJX1rAT4jmBERNr7G5WF41aGkywMJ9ifpmkvsvYXw8c1gCDD1xovtS",
  "key10": "3DYAeRRS12hzzf7dSnDBPUhHupyxJ5Pt86LZhPKXrAUt3EYo7rJreQYFPghLYGpzfLuoWK196iVMzjdUWHWZC7aV",
  "key11": "2YzLas1hY52FV9d4wP1sGaaeDCYyg5VDLSoHC86yrnxVG4q17oNdxQyksN4mTEyTeYR3JtZdq5KRH1LC928LPbn8",
  "key12": "4QmJyniYEQLyCcpU2LtAR8cnCgpN5NJokkepnrFcHsgAngebeA7BLYqS2Sdsggo2jRa1j56yU3hUUSKUnSQwfEAY",
  "key13": "27Bss6s23hvUiTG1k7i38HprUxrfdx8vCWDDxxQv2v6LoQsVHQ88ZYa2wn62bKkYNLXHfY2TPbfmz9Zceg63aTAq",
  "key14": "2iyoYXyvZAUEnYNjFrnXed36uD9a8hqmyiqpxSViH9Wg912Do7QpkAfPzALctK6WyEgGG8sy2rdNBkuKptNY3FAq",
  "key15": "4SqE1SLwsosRaJyTZV7jaE2iigKnhgNUo8MMkTNGrV5nDrSVHneYi3p5XmDZPhjM78B8uoRewoZtRoAinzHCEa7A",
  "key16": "2GCRCXeFoax83sad9foJxmPDM6RYz31uHYsbC8zF4YfWHVt1YQvEF5aYB6q1ySGP6Wgv9e2ipczWgkfoCsnUKx6",
  "key17": "XuGA9c1CY4Da38WgfajS2nnKmHosZDozRhKivMa34iw4jEwJhPv5F6Dg8dRz4E7o4aQJi6AqFsboPUzH8SrpzpC",
  "key18": "2SGFxXkDNcDqGfnbbT8mzBRnX3zhPWukGNynBvqru2JR9or31VgA4vhocNgFUjvRE3QygiRM3Fn5o4a6pBJd3HkC",
  "key19": "HJr7R1H8QVSp8MgFNKMZSfSomugUyMcX4Wai819W5e4mbdQPCCKgYyev6BNMVKpazsTzkJQc49xFUyX4RUgWSat",
  "key20": "4SwtcrmLjkanJngwV1q1aCXhxiLyfJumshStv6NhTtgYMg4dhaS7BeV3zZ2mzokzXZjhLHMrcpKD4serDhKevH4X",
  "key21": "2kDTkdi5FjYFrHft6YmQ5u1hkpsVFsF2xBxMq4ziNGjYvXc37Kkau9vFiiaRyvf5C75MPQfRwQfuWJCBER1SUo74",
  "key22": "Bw7ypXMJL2HXNeS4sMLyn32x8UrCF31TfFBUawAp1kwgobEWrDQkb1TTYZdD2eF9xYapRv4p2fEGC2seWRPdUp7",
  "key23": "ssQVNADok7BK5JBNJrFK5UcmmDhyiPbfyYGEewM8KnfuC61WLW7QnqmwNJREBG6bGu1hZoaA6Y9s5n7VG3chumV",
  "key24": "5DSRWvryY3gGfiReu6zGL5VRwLuDsQ1SeYCkEUMVocYZ7XNRp5jphK7ApV9MMLx1TAniQLgiSg9wzxEiYsBDye3u",
  "key25": "dhjq2fbpiGbPWDaY9AhvYekHQ1bT91AyfM3U8NMF7p5ZcEGJa6Dpt9qqAueqbZ6oGDgRNSMkbFpGPdK4oBe6p6Q",
  "key26": "3zweVegAfsx9VkEf4gVtAzYarP9NneCyueSCDfaGtQ9CYgVz1cAucA1Re2A1W59dCYWW1mE5sZF1EkWF41s7dxbs",
  "key27": "4L1hPLweYD3bn9yEBcbbxvVypbrb5NSodidiUQrWfS3FLeRHKW1aU51nKgE7VbwDeyhPSBM2qUFsC7uxJ1Rafe1b",
  "key28": "3FajEnZAYf4j5eHNJdbcmCpvGYud6wE6UJX1u3euzSBYHcgCaQVod1KtTN2h7ggt9J8FRJf6dtksKaS254HRqPgG",
  "key29": "B3zi5PJ28rDC2bUDwmETXPGk6JxBCSY6BnqrytUZSLchh4eU1C9bMn5nnpK3hX49gHQ8iDJgbd8Gz8vsJWCuCzU",
  "key30": "LimZFajq9VLBc5MuNohCWK8Z5pX8LgctQu2nzfiUnY4fdm893WWEoqtrwsJq6axhGQYoBaGj6S6yowk7kusb67B",
  "key31": "4Zfg2DbN1eyg9M7yWQZP3RZSCyjR2n8gSDmRjTeiEmQ3T9zH1wAAm8XhajEbFq8TU8E7yeL2K52hHGoN6SnSHLgJ",
  "key32": "5u3wYxYEwn3rCXFVAU5GNCknbgLtmfANRJwWpUxMTv2BJDBMZFrbeD5eFSmyiXJYNJidNNWrgQxBkqMYCHJNVJoQ",
  "key33": "5NSVsfzkg1btFehvTvhpY2oyzxrrwvVCcceBcNYbE79fDkxoowD9mB5tFMBVFrX1iPZiF4oCyN9FtZ1WGXyjEtZX",
  "key34": "3GCzqha5G3dTUqiwkx2wFtKFnuiuVASAKVxRwSUSfZga4RgSwAqdmRr59pyWrkNNEV3JdrAFPpUwawidcKtEwMfv"
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
