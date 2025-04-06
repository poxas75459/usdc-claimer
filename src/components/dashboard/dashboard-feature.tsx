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
    "umWNtcoSErtVTU2Vouzz7C3v8Eq2FqEaZ1y46qGp9rLn11Mzinpn6Luu6hfmsdSb8to6mSJf9HidHpGoK3SiKr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VTKov1zuHXo6VUbmTfQs3zWyQjFiM5iZsDXuueyBCKaHUwhW6a4iZuNpctPbQF2Uhv5cQMrjhPSRbRSh8ayeTh5",
  "key1": "3igyNLTdBXHQRipEetCdQHgSjjRpoBNCYei32zGMU86Yj6q5a1ReMZ8vfk1yVHpoy5gDt3Ddt1Zu2LzWo4yMarpZ",
  "key2": "29T94cjf5McvFUKFvJwyxTFsuHUdCi1aKBPwBwqhE1cvMBFZhPe24FwGDQJJcAoifQrfU5Mkhqmo2oMyCiS6niSa",
  "key3": "4kQvZF1bpt3Sv7duiRH4vJvAU8VjB7ZjqNuw1LDTxBccmuxug6pk7GDPuJWPkQ6qVXQN51QcWqNjxypUrBmJiSDe",
  "key4": "49EwkwSbb1JC5kZXLw7gTvcP2UqK53DHbU61PPrKRi5GMHhfzGGRMhCQPwemRBVhdChRLxudTsVdSsfhrAdCmk9w",
  "key5": "3bZjnVYCjfeRQg27wdxDGrz9eEjtw1TF7QBuncJgWst3WAbjzer48vcRi3caiM9oR3A9h2kTigYkubv6JD2AVjuq",
  "key6": "5Yp24cDNAjusxJK5K8g8dJheRquziQ7fMbUWMEkzuHtnTqEd3627mffafKaHwoYkHMidUWKj3zBLVuqJzvbFgbi3",
  "key7": "4872qXQnTYUBNwmbG8W8FvmX9wNu6YWjKyQTAH7oHph5atmW9CuU59ZiNZdtXi6JyviTCmwzzLCeqQ8stec2euBW",
  "key8": "2TdJf23Tv2z7LiDNfNuzpsyXpCsfgt39jJDspjUACuq6SrHCBQH1QzGteSdg37oFZWA2BRUL5j9E69bxEWWkJ5M5",
  "key9": "52CMfCawU7bX1uGAgHdS57gsmKh4J4iShon2ho9iEbSNydg8Z7fjYAQ6VJXF5NvQMhgWjMJLSbCLT5YSUdKjQJLH",
  "key10": "3XrcxsaN4Q1vTCJvZEqAmFaVWmqG35TvmVsKLNARKNtmnuKQAX72KpXnDbLrHZ2VpxnM7Cwgj5oJuTChX1iBtGEU",
  "key11": "2ZKokxTndyiYxz9McKg7wNKEpAszE6raN26CUWQNyLoo5MfeFC2ERoVoTQs1P9orUEiC84tq2q4gV6PHajPJwAer",
  "key12": "BuLicwA4moUkPRYLtgMGkYJZ3d9VuTT9FJLdAojh14wD5tnL3ZWAF8xRDMAu3R9g1mF8Z2GcQdaautCftjTKUep",
  "key13": "4SYpxDSWyQMFTE3aQwNt4h9AfveDeiyZ43AbAkUCb3EfMcKoWDVaEy9MzccEunHxLuyLbLJD7AHLDRRrdux2VTPu",
  "key14": "268EvJJad9R5vQYN1fgnT3543ZxhfZXQ5M5gzTVfwNR21xSa9pbnZrm1kcXcts5Z68PGVAbhmv2wtao6ftFrHVFd",
  "key15": "3kLKKWxNrT1Yt9Nvx1RsUvw3wSodjeGNA41NKsiaBEwGokmokSkfyTkDDjuLsbdKMtq59fyjrGiqsNMPNdcmdEmJ",
  "key16": "3iyd9ebBJT2ta1vLTCdJREAJCRZ3oMeW4RuKSejFZ1LSQNTyW28edRX2tKpSWSgLKDNcEc1nmvBN2Rkt7jmJFXZ7",
  "key17": "4C8PLNWScpkmN57z8DDsk52tpaCZWAqh8g63Wf9GrHdwrfViaJn9Fb7YHhood1DmWACrZT5FWSguh1kdxmLBsx5c",
  "key18": "5kBCAfeJcbFxCUrwxYEG3wzNF8hiSn3kmX2oCWpVXkAiYPxvyTBinNMJArLwnnnjJUEoU7Fru8Qon3YRJvNdZoaS",
  "key19": "28hET7gxf3dXabqGNi8sAvvThPd7e23VJJWfYchxaTxQRaPSNuo7BBx4avVjy9ivTa9zQDCdMcZRvARHMndQjSC4",
  "key20": "KZ8QsLVFkYENMdHi37mfRxWzLeUd1GcSpzqnJY69uhgmfk9UmDVr3h3C3N5oXED2DzUTJWhZVdvXFWnGFubfXHx",
  "key21": "4JhZNyr7Y5TVtKXBJbXYDnDyXuVKNJXTdWmj9GW1gGEB4ztAsSrHswXQrVSZgJMCSdA9da29HcypRFiFdMP14gwm",
  "key22": "2JpZBej4ZJ25jjkMk89snXnc8M44rJWBgTseunNAHDQ5ywU3cS9qVScdRwaSGqsB39JU5qgLJzNdUmbtfjzHZ3gF",
  "key23": "5Yq8eaacEjV6rdyxvk2g6xEGUNaK4EL5LciKZ7qqj7sDtwFWPAE3CBR3adBHwULAwZnDksHYuarK94PGXmrtUiur",
  "key24": "56VsKhxVSCijERxAmdvbX1JcK5VR7NuQQGMFVBoBgM5oqFGFmn6GuZTrFhdBViohAavAft3uXAm5v3uU8b6LS9vm",
  "key25": "3EYw9Z2ZCTiYLMFSE7CMSB8NeduVNFusmyhNW5br3nZkio2RPjX68f3hHBx3i7S6rpDjHPpC3jy4UStxtr44wGJ4",
  "key26": "31NXF8FLKgDjjkNfcnW5aikofYyW1sHNndsLH1Br99hHPtpxko2qRDztPD5m6k8XJxQKHwHwnV87VXanZebTJUun",
  "key27": "4SdwXSSqvWawHPdKwszS7WKWXhd67U6K6KizZHPJ5J3Hqw6hbApCeMVwk3sNW6LtAHhuGeX7ymxwsubocnatQcbd",
  "key28": "3gAtbucD5AAwtkreoYFQSbXQPYDMkmCuhzJD9HDM3ihg8ALV38kqRMtBB4gTsxW6J7UzXM7x6nZLEMCbJXQCo9kG",
  "key29": "CKyMVokzinS1CSNjgPCAnzGPMagBeSmmzzYkeAhBBgYdG5a7tH56GDwq2KV2TAJqhjvZJZPkTsNTorXmvCKztg9",
  "key30": "3tDQ5y24B2ZifHE2qyNA1BrbLtFNUo32QYGjstoN2PMF7EaeXsdZUFRmNZEh6B8HPbvfTEjWScxfSvKDR7qbGJSG",
  "key31": "3niq4hjNS1C9jAzhgVyZLZn81BU7HRY6VJgKQeLvz4NMCzt9jd1KESnURWGZjL6MpBcJc7YhZfy9HZbkwgcXT4Kj",
  "key32": "5LBSiGpddocAcgvD6c7ct2BkSmL6GE17uzjqD34MHT5un56Q2z4ShtZRwtnUUmoC3DcMRk3Thyq1ScsFUMdTSN2z",
  "key33": "dUSo1JStwhacHazPuVDynbWrLPxTbkp9tVxmKxYNq1zLFnBQ6Hi2G2Kpp1NornU9yETMp2gW7T5gkxvzy5F9UMg",
  "key34": "2ic19EUYdsbo9WqWxzyY4RYa2xCV7nE3usZyE3MBScc5JVikBKHWqToG4yr3mJMgHXuzGEoJXYBSeYnGcDMw7b3X",
  "key35": "4E7ZZKQBT3SbUFt5fX3ZafWUVE5aZusa4Kt1uE7KDqUgS2voTnV8tZFgFLMSnLN7Jncf8cv5kBeCLV4SEHjGHK9x",
  "key36": "2SZJAuFPAXAb2XbAg1P3RCq61Av9eXhJXco2DZmK1aSYz5nMTGSqe2qYUshS7enj6GD69DgNqhyC7KJ4u9YxhtBX",
  "key37": "z5H1gceTxTXucmRGL8Qgsq2FZcdb8EAtw5iNdwg5LTa8GAWjNMBMA6QsLxkTRXeWpbemNtEgHFKRr8G7vSzEbdj"
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
