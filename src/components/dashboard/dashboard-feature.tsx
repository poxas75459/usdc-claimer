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
    "2nM6dVj7yNFsQCCBCWWws2nKfKAUCRFJ955e1ygoyFmtAYrGBccMfLL3PPmTgdN573bLfrcuKGjSfjbSXDwKxMbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V2fZCt9h8VqNyBjcrJrPzxfZPTEg2DC9AVUkMWj3CTnSgcHbsfiebv1nhziRsLsxyUfVAJ8x6P3KWdNuy4FfM8Z",
  "key1": "4KGzHi9fGthm4ELMiGM6bUe8jnrf4NyB4w8F75TqXU3mKtc4wT8PBh8xbWQJh6WfLGTJudBHj2sV4MdfvvnT5Hb5",
  "key2": "41jfrMrLVd2eNyedsVXS5EBcMVQ5N6xJFwkGNx3n6jL5GanrbCyDUgudBHprabXwoTPe2R9LxkasfxYrwrzbYPsS",
  "key3": "WG11i1XsJze5U981HgEEjJHmtv8bP26CrjZR5kEemo3S58BcGzvAoWjfXEWVxNkUgvsZEMSZmy6UYLWCJSt9AFk",
  "key4": "5RadHTnB9ZgteAiq9QMY98BrzjZMyWrhoatREsDB3taBvsFiNiNjDAZHdbBFvbrmWj84LNunFvfwzHUfx9QfTQMX",
  "key5": "gdscfP3rDuetFyA3CZmcHA2QmDSohgrErw5YgWURs1i95XGE49tjd3nhRoyXhg4LioCAsb7tabw7kFNuCfJKiqG",
  "key6": "EaAZZN4a4M4ppraKDSdLEQqVahT6cEdAtSPsDuTwJK6xTZbAUAk64mRzKdLyxsSA8YU43ncv1cgFrpomHRKm62h",
  "key7": "4HmMo2ciFrqp2v2LM9SJuPmfdmwKcHTDqFBEgDtapvCBmMTFstWQPuQaBzTuX7PmedVHuyCbWzH2dJQYg6q6A4xA",
  "key8": "2Zc8gpCEZ6h3nq9YpddQFhj7Z3zCZCofu22M4UpVk5Lt174vtqHMEu5NRjcAXoHoRDNwxCo6KWcEQ7Xbw75XjTYj",
  "key9": "5aQ9UUxZbSNa7J85tmr3ewe8zLCsCE9fNr1zg2ZDfco1RFfXuFqD6zMnrHA5S2JRMWjhPCXT3CPEysKY1uFf3FT7",
  "key10": "3TMjkgq8z5hwvxMvUCcdndn3QAbAwnDcCyRESsWQbABWaVkEv1QmJkqMP3zk8Z3ZiCKTEPmZG88dGqCF8F9RXmzG",
  "key11": "56XYDten1xGToKKWKmmoSXsELoH5451i9JrvRJUYvxYz8ZbEPSc12L8KQQ12VJ5VTg2iKwH52fMqWXWuoCTzVQSa",
  "key12": "mePugce2Yd9cVZNd8vcR6GkKA5mTTELAddifvmNNZN7znAFisamZipc7C4afWpWSRcqumvSwYaJB6gWpJnUnHNL",
  "key13": "2hgiA4cJxGEnaRtHeM9rB3jhKy1VxZPykPgLdHP7RPNAWek19f8YEs5dNcTqtpKi3tfKzcWZ9Zw3JL8nkEjBJ9ad",
  "key14": "67MrrcsZtRtC8yNMfxAVjXiWhm4VFHCYUcyFiFHyuBt7dEx1Gzj4VvhizfyZEGQ6j6TBAarLwqo5HZW5vZ4sPMFn",
  "key15": "46i7aQymPLQ7tRwt7m27YdJ9kxfzP2hM3tgYEFWy9ggAYWXCHybQeswYHbKw9Hb1yNYHw6KBSVdeBZTrMZa3dT8E",
  "key16": "2mS5JBUJR9jeeGmg9uBiLrcEkAiRqzGVXDpPeqGufuwWFkijBqCud93teavER5CYkhwpdAGGq13BfkL1hrLMoC2f",
  "key17": "iEkua2QN3BbdzgNQutZwp7JrWiQUjwfi53bnkLfHFfaHGYH7Xe6hAZvdHiVGmkePmRn2z55cCyPNhMDkzDb3aB4",
  "key18": "3fPW6oAsTrqv44PRuQYvF2S3tFJ9WECroNos7PEwabKME1TRsQTZ2tNnyob9kTX1ADxhmQiL4k63Kgs8ZaLthAmH",
  "key19": "5krXSAYBeUnXmHCL7rh4kDXvrH2Mr9xn6A8vhXXjcsPv5GdNemhMqxn3nDk1oxccwW6FKHD1WtPSnLh2SyWa8yFy",
  "key20": "24T27C7h1Kd4uEkWSqQ2TFr73yMcuLREStNGfHHgRmQQYhdhCcmSLaD3BawaWJ3tEYXccdzL6sRwyRbLwjCYSVef",
  "key21": "RuBfjjhGEzz4gUrKk6Ue2V91J46GXjh1jqhvgYad76qNU7ZDWMN92JJyuw2ydH8wg3eG3ZENPKTAF86W5uiKSXG",
  "key22": "4RyA47uNFL18gaJgxJzjjtRrz3nRff7c98u2bXnk8DgQe3d12zkAizUft2dD5Nzf5otEGtxc9MLkEb2Au7kSmRXm",
  "key23": "2cC2v9t6MMnuDWaZMbmMLZXoHFPCarV4dq6rXM1uXwBk7pHA7zHV79uaZzk56WGsG9pouS4tVW8zUT4cFdSStGYg",
  "key24": "7ovfrb5sPqZyqEmirUF6AoLZygFyxKDnhrNwH6QVjFBEgXMceS8eVaus3Ax7ZVmu4QyujguiFKTXbXBVhwQmZeC",
  "key25": "3HUZm6L8aLQJAEkX4HM7Xb1YTBo47LQ15uhJJrZxnfi2UkvJ3xLhGMwedCTyGDerPp4y4MC3MzupvFx7vRDXhi6L",
  "key26": "3WmAquHHx74eJGZbH9B8G2Hs7SjE8b28zcZZifUAUmkF65JxPW5ANZwN4hbbcZuhfvodexfeBHqEeRuv6KFE48Ja",
  "key27": "2T4Exq8rc9edEsHZHiPApqXZ6iafq7t4ungWLnjMnVi6zPxiVqvoAAZr1zvJyDHbCZ4rbXD4yzpBibU6Kaf7A2Ta",
  "key28": "uu4wXNeEUrQLPwJ8qssnRChD3QTSt4Pa1zNgq9dhS92Jvxt5kjzHCZqUbocVpnP5fTofEt9jCNr1ZCZyjWwwsxx",
  "key29": "M5L75UqtQ6JaeQUJzZ6fThqbU1opExKxbrJGq2y8BKD6ExXnd8EQ15Fd8sQrqFsM8ME4M2DDsfy84XiQgqSv7W8",
  "key30": "ipRCK4rbxMqdqGfBYQo58jwkw1KzGYmDMfHZakLTeqHKQEAuUQpeLFTZLJX9FktxyygH5JDWZg79Y4HezeEWj4U",
  "key31": "3cUtzqhsSfwTKqjzHocxBtehqv33jMskBdu5nUGmhD2P3rQDj1GyMBjcHEdMvJMwXf2t1Xjg5LPi6H46BeQVnqE7",
  "key32": "3mNdNC3yWSroTDGTJVt83sKfimKKQJ7MamtBNizuLu8e7Nr8v6PekZfhmztjKAZbgbPKHmucKnpDghDJgq7uLwDr",
  "key33": "2bdZEtNLuhBye9wUkzZwXK5NyYfSR9EMpiifi8jTygrevT69qtNaMrmDMJoocxXN7DgRPWq9C9wVtmJXL7JsD3Nw",
  "key34": "QdyXuykHqeoBtyAUU3f3JkrMU4RRWExXbWrpGkuCvmhrz84NDU9djy7kfeitssBTPVQ7rjdASJJVAq6ksCYADZm",
  "key35": "4D9dWDLHeJXZxUGk3P4S4ov6dabWhVtVSGHRD3Jx1yd7WTZvA7Vvmd3y3wU5JEWBeABShDA2NhBgDhpsWUrPr9Tx",
  "key36": "2oM9SrSk7G79XhMY8XoqJSgr6pzG7ReecgBikEMoprUwJ1wVUMxuzZKJBLu9QAsdC9dHA56BEa67cDdviVjzxJZr",
  "key37": "p3hnf8a23qUxBNbkCEhiJqpNjNgieyaQhxKSrsNPbKhzBWZ1BSVTrbtSjRQWmi6o43oXEsVwyCJU1vx9ybV4t3f",
  "key38": "5igWiuQ5q9GL26grDK82FBkUPr6eFkY3wvbSGEgjJehcYmvGxe5btcT8F9PeG6MVTTz1XcbjMBXNDp4noe9Sufb8",
  "key39": "3ZXv5vAxYAR2YTLWWz9xTMaXKD2ULhS19yB6rkY4AL5DAGuzvjW4fqRpWfN1yzWQzTV4xRXEyLJo2dnkafxJ6yr",
  "key40": "5mjrZ3M36AcCBNPv3LGhveEBmVMFT38pkrjMWF3s2dF5Y1NyWLct4SZbuTZM7bAGTUNhnT1BSLRZiqADoaf7hvMv",
  "key41": "3MRjm5GcZwXMC1j8u6U5ZZ2QVx9uvKvcJdgUERaFdBWHdkXNHgAFCiJEWimAfR6ZHextyUuvXFW2WfQTTTuDMKcB",
  "key42": "24cVXpRfsCw3MuxC6GSbLitjj7Rr4psDwLVTFhApUh6Wtis2vovS4gL8giTBwZmBPAppnhyMpKhCLsHizrsq9ow1",
  "key43": "5fN41mRSxJed4rJLChUh9iKDAKf2yWAbu2KSvY48Mj7Ew5diCegFjTUvALK5T87eXo6E2G2jCnQPNYSrQsg4pNVM",
  "key44": "2ybKguGv5xtMntshbXxdRU7g1ziVFfWDkDNieb3SA4aKFDjsa4y31y1oKCrzMdLkCMErNM6LBcmewK9UjjWXFK9S"
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
