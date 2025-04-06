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
    "3acUHFJkQ8RQm4NsM76xZNVwkNgoxJv8ydrzffzeXru7ZfXBabV3xup7J6rWXfzgzTJBu5oSyqWYxCyXYWQRtwnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YSJsCraEEGoqkcDNVnJvwAcUqs9QciSj6std8jVwj6SyyJUdL8PuaRZzz9QMXyrWQEa4C9Sa5FF6wWvTDaMcKHc",
  "key1": "2ikRHJGhRkF2uGYqkpVRnUfHgRtBJ4RHeJTULbJ52JwMZrk64SLkmXXfetCKfaMEnnYcKQhX8STAwWFnzZEVr1YM",
  "key2": "5Jg6zzbSVoNNuSJNQ8JQW8UqB9R5xT2hVPw6NgssY5uNqcnMpWgWvTjYWQYKp5gnpcPxUKgBF2CMdM3xiTUQ7gmi",
  "key3": "5xd4Dqx62LM5X8d1rACNs7BX9uCdyYS4GZA96Wk7KKwf2XfSMroGvrxhZqnpEqvRJpfbHsvXFy9cnrWpYjAbWogG",
  "key4": "52HiP4QPD3UUSwmxVbio6ipZcg5vo3oa4x2dLkHCUvzyuL93McpdYyfPa2ZiGtA2SFMpw11XodzDQMHVQABwWzsC",
  "key5": "3JAphD858xTVfkqTVFjNYdNg6RXGwZhYGAcvEX65tyLBhZwyrk3F3oEp5zzuvWQQvypnCMUG31C1Ls16cknLXpk9",
  "key6": "55kWy94RkYssY5EnB5tqEuxFAsQ2Gbo5PmFFyyuEzJ6C4WayQrsyfZYwcD4gkrSCtkDLc7p6i8kL2XFhEkF1Gcp2",
  "key7": "2bP7gj1yENkwqevuDv511iy11vDeGAk8Ue1tGh3TTgu453xTdDxurMHXeSJ3aurpavGjFrAKSBZiJ9jGgpuynhZe",
  "key8": "58fcfFEu9Rgukn9pfkRfV99wioJ1fD3qyHuAP6KN1pgt1SCteiSDD8QzjyEbXbZk3GaKdfyDURcX6wq2BFH5RScY",
  "key9": "3wD15krukUaug2MtpsF1sxz6oTHGyCp7APDqKU3BTTcQF9uuuFQd7Ng6VJn1QKTrfgHTrBTvE9nMoME7b5V2HhK1",
  "key10": "qsENHcofJPbeBzGGX9cuQ4SJRHB1ngBtQ8eHD9DGBCgV5Ab1XwYDSQkptHJJ7QTxw6QGaekFM6mmSkSYD71vCqT",
  "key11": "66121foSWKeLYv1XFZVPfBnZHX4tusWSg4EeYDAHQZ4edZTxj1ZeLAcYZUvF9Di428VdoqiYoyFpmZ6YSBTnVMCA",
  "key12": "3pkkio6m4XU1AgRSrTe6C1SChZgXatgau4VEnA6TUeEwx4DQVkkSzAqfSo2QtWK9vRb5BEKPc1Gdm2dnSGFDD2Fx",
  "key13": "4scTKk1xhnks94SKfxDH2fQtSUkq6ktLVEFr1ccTTcnThLvDsGf7UtzZ8HgvrrmCst2XeUsCoZLmEgck3hTFRzc",
  "key14": "4XpDZ2qCFFfJhMq5buvP5GiP2tFfgV85LkNTbSWkoyd3aBBaBHxXueEYBLR8M5rBvYk4YGnvD3iS6hR6UUr9tc7d",
  "key15": "25EoJ3EkD63DyB5tQgygcmPRaFTUGMxrVQDZWmSqTAfMUt9o6scrGpG1T9Mx9Dt7RAAsi58k75D6CCh4Htf8bme8",
  "key16": "mq8mgMjW3DS3oodSCfiebhTntXnQoqV7L7prEALHDqrkUqhkFM9FHN31PJpf2aeyfAw7aNCzbheHFpLZvNNcnqC",
  "key17": "2koEdgkvKGrVLdRN3g5tE4bv3wxwWiJmrwSek884g1GRQtaF6NXEEhVRWZo74Y3Xgm4s75CD8owveVBS4RME2XWE",
  "key18": "2fWn6qGL2fCKDaZ7eNsq2dK9ao6gysr93xW8kgBGSj982ojPi9kqk9qx9hw3EjWhsrDLzXJ1DW7yut8Ce6D9GesV",
  "key19": "2BfXGVoiGswFh522Td1xF2674pSZczXdS4KwLBUDbr6hD3JUnWsLwGkZ2Byjd6o81VPozLifNS882pkz1yGL8tvF",
  "key20": "4QDymxSzyUK76Ezid4VCeFsM33puf1aC5DGjD7zwFitsp7kDashSvsvjjJJcTRneXYCWK2nmbh8NVZmebnLr6HjQ",
  "key21": "tffhUSgN518qhbmAbJ9wiicaPAcZ7CcqmHp9dJipQCgDjJvGbZpGGrZE2Jp3nkNoXt81J4pDpUPyqiSefACXHWx",
  "key22": "Nn862cnoshPyeaWgDADWiAbv6nQz5yr71kPg2c8BhgtSwgvyQ7bpFMzfgkG3orWfsi6WLgodixG2M4uLL1Fpdfc",
  "key23": "576nAUgWKBgx7LjKtLJiAmc4vZ7jAgjBCrh7RGrovXyLWNDBE9qWzHfJ7t8EW66TgUvmkdWbc3Dzu2HqBtS1tUxs",
  "key24": "25C5xY13Q2FgRZLeRoNsLqmcEAmAezmGawxchBEvWL9W8DE9FJuLLzdo1FgrD9LYHTnHURWmfRmucvPxkfq5DLmV",
  "key25": "3fuDtSNLVq9iynRWTW73zUZKS7oNvJooU5S5P3xK3eRt2vyZ71r2wdSZ6t1GQSm89WwcGwHXBS1GdnC7btWN9HTC",
  "key26": "46e8dfMrAWoJ6NHZtDXJLvRR5ygtHbFPtFUFvnWux6YnjvpsdYk4wpbvRkRwnT9Z1jrGVwfKxXhsBZjbSLqfc3yD",
  "key27": "5teAyduGsVKX6jQUgCDegN34xtCJ6VzhpJtq6xtTzCs4HM4X2Mio9JpyTnEeK3LX3r9Zv1JEE796W7Tp2JxAmCcX",
  "key28": "2Nzu23SxCYuLaY1uJ12eyVoyDwbi66TGjwNkVbW4fJv3dMCrBkjHpYiydEt5EcrD7Fs4Nj5AXsChegFnF3oMtaYc",
  "key29": "4jmDvj4zPAaAQ6Binicm22dMacAuiUTJmY36M8UTdScauzdJ4XQjjXYp7mkSSUKEEW2ZirSzmkFnxeUEEit1Amnh",
  "key30": "5pYvsdvZzBVbwbNrxhQUSJhgnhenT6HzUdJizyNStKKoCVJcborFjmG5VLeoDt6Cosshnb1KiJzZhb9NWfxzbu5V",
  "key31": "4hgHfhoLrJjA3LwgHgHBF6ednJamgsH2Gpv3HAyWE4DhEKakqqi78gkx9ueEPB8a4z8vpqhGALN4ZpqJYX8nJAyG",
  "key32": "8HHp3KquCGgtZ6UHFLj7N8oAY6aW5NPfgPCsTi9J53Wmz5AbKnKayM3DQ5HJ65Gwt5uemXFgA5XvkkWPwPYZztu",
  "key33": "5KE9qRzPa11CDYmCkqc3NCc2Ge8jBzL4HPokYjCqi7PCbGyrtdcLtmMfU91q9wQTnR1WZM34cgHDvoWoKNF1AWMQ"
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
