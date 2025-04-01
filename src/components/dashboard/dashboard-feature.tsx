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
    "3wDFPoG8nN3s1GjXwMoJvnwLLz7A1vEPoadNdLmNddExBtGwNPUGmmdRSDCiA9Vazj4gAk5ALnmX86uwk4eLGugB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QZrTxbbBu6oezLtbfFJTmJVtWptNQAA5ebttci878godTrF4remGPhc2ER5PMUiRDxti8QEwrhYqVBXp2RwART3",
  "key1": "pooUrA1xMM4C7FtQ2z5x61VrfUrR5yynmB2hH3ADtn7skBktRfDhFVuvE1fAHteMF51P3mHsnUnXnELPHVAsxHL",
  "key2": "3nhyCRVtcyVHX72BSLzh6qE5iK5bS7ASi6RHM6yVQMvPMJeaUzQELpiZH59Jt4rttaqHiyYaABdVR2cs9xfXHoGH",
  "key3": "2GHfGEoKmYGTHtWg4rNw5y2Lyr93Cd6rk6z32ji32FUXsjYw4YVqJK9m7Vj4GdnS8UYokVnVVKPEv9bm9a6pftfp",
  "key4": "2D8DGSwh7nkUKTRbSJhz2wVc5epVHz3n5hbxHRqcuyYtrn7m567yN7mmMbBheCp8f3uNCazjgJaamrsHTyqyGJEj",
  "key5": "5fgQB7hd6ZvCNZBxBHbjfDX3jSpjouNKszs7FTnhzjbvTDgUyD1NnRHTbk4yat4vWBPwwFrzGsnydHJaox8JgDfo",
  "key6": "huvkKmpMaLqsmXPdnehLmvDcKNqkGE7rmbturzWFiFZy87DT5ojmhBp1aSB6WaqyJH3q1SyjKKwumifzo5N4gwB",
  "key7": "3ynNFAEwDT4EWwWNYSS7TNgfxiSbPF5ucUmUWEogWMrRxajskpkVU8Gsx3zHLseiYF6Juxem76nTYxRqUPPjEuze",
  "key8": "2eL5mcyM9tneBUbjHA1j1i2zR4adcUSesgmKxUwZ4M17wFVt1Sy9KhHuBNDSmqvijMd1VETmFR77yJEV92po18XY",
  "key9": "45uqaXGz7rWxxSxFBegYtFXRwqgbtz2QNB8xxHbMcGQMvksPnbNiQNrVkFcHR5trigd81h948S5TGb6Xw123MY7F",
  "key10": "om4Ujj463T6HGKCLDdySDYgXopsJwFEwFYUH4GsQ1fZcG5JDr6NLeWZWjwo9bF7VsNMR5Vb47C7pjA9iEJS45vD",
  "key11": "4drYbApQadJDexaSytjqNBpZ1UpJCNiQW4RLpjvGn7yQFCFosmktCuguPHamxwfwa8oFtDw3L4ivKHUM3m8uVBj9",
  "key12": "5qej6eyv8aQU4iAzCjWFsTntUvg5A8KWJbsGZGGUJZgKmfKB9yF8NXeoRmz2WcrkCUMv6i1ky8D8DyJNc796A3fY",
  "key13": "rPX5u4yXgM53rPYZbJfesw7pTedjbVofuQxzgrWDdpUsaituR4NFzkcfghi5K3xp7zEFwz2dfZeTgvVCyv14SnK",
  "key14": "5kdi2uuX2TohVkjoiXH5tch1qiFffTEgx9SzTzczUZpPnvqpMXrCPVL4h5K4yR1Kgr2j59QH96HgCvMXXCV4TfaL",
  "key15": "3LVh6cTh48tP1PRMEXgfXGxxJZWx4LHycw3keAsDwcaJMEY49BSRQDCqtW5qsd9Q3Eik6KaeXASLgL2YmGqFgJUP",
  "key16": "67Vf2AvBNzScTCGSFkAKKQRbjpXajGPorLqZXWnYpU1W7N5KoeDaTXH5Bzv8T3WLac2Y924wYSpSbB9mhs1bsoec",
  "key17": "3iJF3BwPQYtX6sG9sYerYNZWkDVWKcSi19LNCDHQ12K8RdzUTHsHvBv4fYxgjXVNgmg9DYuHw8EkCq8u9TQShtgS",
  "key18": "QiXKLHro1r4VLpY34213e4S6HYgqd1YgiF89W8dnspYiGGEVUnyoN9Jumtk6A4nzYZnCHed1CtwKhK1YH33Atc5",
  "key19": "4uBgY68sREGtSaDuaRgNF8HZNdH7ejL7U8P6CwmMZLdH55ZiDXZAXYbuz6pALSiVjcVsmix6qor3V9bfTiwygQMb",
  "key20": "31Xv1mnyJ4M83KwCiaU16ZTtqTteLKs2KiuECmgnyBcS7BUP5htr48TU5bepyqxVjMmXxoiWoMmknGwoLEMhEPHZ",
  "key21": "5JuVFiSRmAsxyWQSNNfpDf1deawRJx8uSA3nHGKhfyzbSVbNBaDJAhLBDwShPQFMjcrpM3GKqaBnCssEWZAWJWe3",
  "key22": "4b2TErezRDvYAjhUptyNzaf52ZaDZezX488fjDBNSjEm92YKR9i5mPoSQMAh83Giu9boch1rqYHw2CzSnB6XASLr",
  "key23": "KDC1katki1ppBQBaKWVg6dV7WswmTmmhpjvfvTekanherRwtj9yuznpVatV4j8CxcS7au7Z1geb5qCQ36ysAAXA",
  "key24": "3MUWQBLNmN81T1f5uX7STMP1hVqG9hCWV9MGcLrV5fdBBkjQ5r4AArHtYqWZJLBMn3Gy8vXDsg4Tc3ENpujiij5e",
  "key25": "ikDG34F1ESozS3XSRfvv9Udc6sFPXNTSdGJqT7MjaLfWVJHkP6AnfayDYEBjVjvWf5TcWJLeUgdFc4jPaXN8bju",
  "key26": "5CgaQhrAWDuYoSV8Zs6uhu8oXZKEbacfiE1deQ54cMrmqo4j2pnouauzmBjTzJzseUcxAYZesGKb5Pa4XbGk2sPi",
  "key27": "5M3wMe6BzQCpe4qXx9WdNFfwzC5tivQHVTaHWyxeU7m8THFgVUPDrPEckk1rtPPqm5BdKKnsaskszXfzP9tEKtuk",
  "key28": "33rcHScpFpGJKUqr4iwFqtKGw7umN5b1jUZGVn5vZ8d2JZ5vaRQm3ZPUNzZonKpYG3xnzCdgzDCRon3ohthghy4y",
  "key29": "5dDNe5DmGfG23s6jyfCLKyYDAh1ueQE4HRuvZ556F224f3G2WrpqG7Q6xtNTYz84fxm48RU8kCosiDfM8S3289Wh",
  "key30": "58BjaJ96rrKgvbbrN5EdWLsw2YryD34q2w29Dmb8YVTv5nS6tDKg9jNe43pZsZ58BGGgSgXdpFbHge29D8qXPNyz",
  "key31": "3qDp8N6rzLvTMY7P4sdnumHjxU1X8uFFMBn6khjhfEsZg3ntaxLZLWtUR5XuiPbwSbssnAFFzRFdx1778Kj3qVxR",
  "key32": "5znyMWLyEU615FkUxyN5QkvoV9VzNstNMW4tqkk1s2QgN9ANzc3xHLkCpY3rPUpvdWjEEWuuX2ZTtuaYrpDzLRuk",
  "key33": "4ao1VEaCYCpPEgarqD6pjVPcxqwMu2ZQjZQANeMaqpxMpchFPY287vzng3TNgtL5GHbyrGTkSmnbpNF5omhnSzkw",
  "key34": "3uo8SLzUmRkGiBgmxNb4bxr5BZn6dBk193WH9jVfwTGWgUyieqxPqrx1jsnQquEdQVe5hVRFw3QQeAuPjSgQ83s8",
  "key35": "36fc135kcAJEUEemPWxxXAUMu7JXvqUGSagq1jcY4LwBdrrbQ3XFqo1z7FWAp1BZVCKyrHr2zcEM2GqQ7VGu1aJw",
  "key36": "ZTUi3hTmLkNQhYi4H1C7CoGjcSQt1eV2LDquwYrXtatPDfZ4Ry2HXaWhTC36gM9Cui4wYzjoRoxxzyquw2g3buk",
  "key37": "3X8BMaATp1KLbddvB8Hm5Kqa3e2whJj2FHuPPRvDvBA19VNuXfUM7vNkm1NntfJuC17MUquKQn3ngnaohfQqNcn1",
  "key38": "3GwUL3rGDHQwXPQwXq1uoZoHF9aHgaMoqD85Yy3o16mdpr9Y2sm1sKNikLokZ12sBHPot3UwBZygcwUTUWfMaUZu",
  "key39": "3dPsH5aC6Midon1Lpoj9xtjthyp5QoUTx64NkYXsYhBYHc6SsgNtyRuoMPHo29kMLw5LXxYM2b8Sy8PbVRKMtmDR",
  "key40": "53cJKktsBMwQ77s9XHs1KG47h5aMNPDsbsfRtcbCTpQyWJJusHzRtRgmSf61tuqgMRJGrgimCkf8EVrJ6GYYWSRi",
  "key41": "5q1xuVs63kcwKFx7wGZU2F4YB1zwgZTLgGAFGRhECfsRfEKdHQZ78DkMMnRobtJv6FMEW2rjyeTNGs67CpHQLiS3",
  "key42": "2s6gFz9zkaUx16Wo9fSHqTnoUByTK14HvCjt83ugGb3NMP2Nx8RVFqEhqLdw25RrDcs4iRTyK18M8ujPDharBK8V",
  "key43": "5EzzTFp6CtPiQpGm2rtY7q2FnWXrXEqSgyK7rCgJRXZQ7npA1PBB2yxLAnQU5XrBDrD9iwyM9XnC9N8ta8ikRcMR",
  "key44": "5pS2k1jVoUAk2jAHngaprmqeazQ1ERak6rqXusWEG8zrx2dnKxo4SdrB9Beys4HE1FQP65LRcbKPKsZwgivnyze6",
  "key45": "3ziyEGZY1UbVftxuQPtWjAa2p1CQHWBL827FfsFEw6hvB2XWdBBPf2SRrZuwikQJZU2ghYFu7F6dCh8HUXtJsowb",
  "key46": "54pFowMfBuHFvgDZFzREqas6BR69psBGWVAHrB9ByeFvNiR2BgCVrAGfsGS86ZQb5YHB9hJiSTEd2kC1kPcTUwgk"
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
