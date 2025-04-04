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
    "49UuHoL54bG3EDLZa1Ca8FCgyCTNkPXZvESngr9koLSfcKy1Jmet3t8G79BYjxSsANCpHfq3oT2FAjBwrbnMDYYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f9vE5SEQ6sobd9UZjXtvBvZi7zmZQ4phXKGWAMQ1YApnzL7qGiUET1fwqoeW6JmM7a1zXLAue4do42q3Q45rGRV",
  "key1": "Edc8VuiFjwZAWqoVNQtCsgWritMaF1o6sGKAwccE5vu3DKpfEdqPzkodRftQrroqvTXEcaYGuDyMr6bVqytguAw",
  "key2": "5MJFJXJEeZ2UesF1W2ukr85PAR81mqATxn1659GvYXU8e3WPT64siy4tiCzfbxhDRJmpapCEhEZMQCGBJRXTcrD7",
  "key3": "3ENS76D1FbYqmfxjJ8keWJtzRsar587w37EiUzW3ZUJJSncdep59ZMFTbHfTYbFHP6bPGj1QeYye13KkXoi5eYGf",
  "key4": "5pohSkmBiY9uMPspfvHaWGpDH5n3SDNUJTA1F1pD5hdZtA6UJ6EszjuEGteytirx1m3PVEAxjhi4PTD7hKstjq8i",
  "key5": "3KpyYgTFJFbcUQ2qL9ePqKgFHtk5ZhRsxJHLZyZwT4YJAE3rpQ6T44a92Eyg5mk7SA4yrgMq1eJDTtbdxwFVvTP",
  "key6": "27bD4Uk2BWdehW7BVzbd4BMMXm5cvyDEVZ3WvYZnrm24pFXJaNAYndGf9rQokhiGtiu64KZaAP38QXYFfe6n5Gf8",
  "key7": "9mRSHeQTC5gYv6s7WnP3CS6NhAKPBHdy4QNEejmDmm9Cm4FRCqtqZeurEVDcMYc2f8dADM4YFJsCqfjpXkcqpbN",
  "key8": "4BddT6V9Z5tZU3eXd2cy1KyEhhs3YVHx3nALnLVhmqTyiNZZYxW8o25wHFZqfYEGgotbzyWZK5XH6yZmrSyWzecv",
  "key9": "54wYkQytaTuaxAFJwdPG1pFeN1ucHCB9EMA3JyGU32mQReFZePUcg5Z5YNWFkWDtJScA1V36XpuwkQhKuwDRvQ24",
  "key10": "8HpYnb33z2tGudhoMqHAFkTtwjD4nVX2BXPkSRgkYUXmCViY8ws7iXyP8qtA318qu4Kc9KrTgCekia893YcrJmk",
  "key11": "tgLqNPExBCYxfiMKtrciAJqYBpbAVWToTLbSgGnRrqH7rMe4rfutgnjo5TdAM4LAzqvSFGyGNTnFddJAfp159mx",
  "key12": "3d9swYMiSABG2kdPoN7cDCRQdH1WHGj4fy6RAAnnNYYfF3Yt9AMLPtV4g9j8q7NsQZkJwsnBx2SWKtLTM3FGLRYW",
  "key13": "5qTmuMH9v46KcYAY6XpECTCEFPGmXDUcdnc7KopaRjmMxX3oa3hAVdRKuJgZthXZL14WsmPUMjAHkJmH9b2m5yuF",
  "key14": "3ShYxBbjUDUhTKxEkVvmGQWtqh6LUenobtp4rs9BT8XXJU2smqbyvoDBA3yYHfFWkJ3bmfSguCcZNo6mKYkrMDCq",
  "key15": "4s2HgRLD1qMU9ShJWn71sxnQocQpVoiQQNqqMeJRGxBgxZDcQBvd2yiER8iAVgvr6iwShopj3xtbKjkYej2KWJG2",
  "key16": "4SjCba6cVnm78k2vBQZdUWGAKFDywaEanH2u6DxYiWDgZuxr5z8DHmSV3n7uSddUXYrKY1A33nJ7aZUnjLEtUuBC",
  "key17": "3UdvC9sNAK7SKrU9QfJo7d797asRhtGayzSSbbPW5qh76P3fwYP32C5Yqqqoo6BfRVcnmZn5jrjUQzEe9pfL8zXy",
  "key18": "PDzSA7xWV5uVefBh1uGbpKwvbRzGE8uxcF7c3dTi2oK4jky4KyvfA69PziQkcpu3EqcuMzRkdUgpTDrRDQUDTii",
  "key19": "B2qykXVGbQxBbgCJXjgswUKUjPGKQ4k1ecYBLXgWhX5CcHq9duoodj7y6gJ3Lqxfo9LnoFMdmQnE7suY4v1GebL",
  "key20": "sJcCDiCKBVfa4rRdreX5PjT9ZXPEdtmxAFi4bj5zZqk2vmqq8GAyY4kg1yeAQeJCrihh6EcNgEtEfFJoCrofTGp",
  "key21": "4PYiqiHBMVAMoZ5fxiTq8bYYBCoUxRWmCFw67QD3x1y9mM2W2XwK7ptbhcTie7u1NY1CnPin15mDHeNX5pckTE5R",
  "key22": "3Qug7oQtvxsrsNwSDDAoH9phSCUhdmGtGmKFsN1ih7qeyYzmiqw1wjpLvca29TRRPBhvW8x8L7QKDKTQ5g6Yvxag",
  "key23": "fN8hHT2Nw96NzMGafg7qCdQAQ2Xf6geKF88SKAXZcQkPasXNZtgHmgRzaUq9fMnTXPsVTC59BXr5DmRAZ2piiWr",
  "key24": "5WD4QQwcogjxseHDuTtcThshJvkGeKhE6wKrm4rx3NKWRAtMbT5SYr2KaiW7Ep4Er3KF9WhmpntkJYVMw7D14r8Q",
  "key25": "2mk5spQ4qSLHzYWKTtjwS24X9V3wn68nyPeTeigUwvSSnejtuwx3ishF2m9WdB5qqZnUMfnBs38NEdUzvk98fVCm",
  "key26": "rHNKzo5erKowStxzqJoNfDedsb4eMWz1pXdVH3YHimYMJGpR7LVirwRbiTkfSMuPnrbXiqj5MyWSKAjcXBr3dpN",
  "key27": "4FYdncXtrLaPnFDCeXu6nmoTQyNafbfQoXR37MozfrbRmyVhqJKuxBwveX4JVbCRPwz9eVZqooEHtadJPDoRbLZG",
  "key28": "qDBY5GbVZ8LRw1CAjSCECtPGzGvf6WuoRobY1QJhhkMPWqh5p3PQQySGRubtv4u1Ve8ho1daPr22UxAHhWGZciH",
  "key29": "3P5fvj2MFmPDLj3eHXpCkwFpq1LYP2cY3ei5yxPmRT5sxnocaCEMGZV8sevwnMoEdHYHFrpSJCvVY1GaBndnT2L2",
  "key30": "2TiAazTDT5ckBYaMRj2Rx7h4RFVNQJpnYGipZBXKP3zZXcpdqmgV6SUfXc6a84CURqcF7ktGu8oFjLWBtEAHvHbA",
  "key31": "4yskRupYgXgtT9qaFkf4zj5d58QrQVmwJbdUbB3iF8qyD1bWY8jPwVr6JEniy1F2XvgLbdhE66Dv8mSHVUMXjGbL",
  "key32": "5Fzxnc8BsCDvTsbqw6Hp1oTB11JYARekHPicM9HjwvwQ4tbYbkMAAWZ17Qdy7cyG8eHQUWdjQERrynZa37G61Phz",
  "key33": "529grcrePSPv4VJvakE8qXZX13pNWkrpVysKjyBjrn6i3yi62HkAnaH8eTZHL5MqopwyrRV9xvjYsJCZo9SQC2nk",
  "key34": "2vCgrKaiozzEouJF3wGVaZudeXKXDuATRtR9f6pojgiW5J8VjRhoMAkwrQnEgJdfS43xoNj9g4t1Mc4aBivpUSE",
  "key35": "4j1BZRB4ABRhbE4TF3aEZngURpnQHR7gQ9ouG4ayX9syVBjd2CgXxMNtP2Rs4i9SVPCZFxn6RjMikLGUHVHwJtMR",
  "key36": "4qfPUmyqoGRN1CEdksnnyzajeTMVXvuqWDh9dK87cuC4JQUggo4jTS7nyN7Ef4kANV36pSmDC8C53S9HCM1vDVM2",
  "key37": "3wu5MJQx9kKFCFU1Y41e21FtyUe6KN1iGQKAoWkwQc9yGrfsu7TCY7eJX8EPgMBwBVKwxAncTM99PrpiUnCPvrhR",
  "key38": "2naL66KabVsY5M11C8vxwTry3d9dGnYSsTHtYJSWVnFKHjaXHVhXt6m4zWwJz7CgQqoFwX9Qf96L7s4pbUpBMFms",
  "key39": "46m6gEPQ9hxcsB5ciLFMGKLJy3SLzwXbiFAYC574ZkDLkrV7UMBsNvqYm4Y3BsQrxK5HhEzipr6HuEozx9i9EVn7",
  "key40": "3AXFUYfKg1u5TA9nJ4yDd93fRphYPW7Rk9fJfggBxzkasgv4n8qXsuh1jcippcmVygHqn5JCuJTVv1U7yQKuBDEU",
  "key41": "4wqK1tpA8dLrtahV37z2wyBrrM1EZtQydvvuV9YzmsvHBjk2Uy9RLZVDCD5AN3BqZifUSgxqwnyfmanaX9mNP5ef"
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
