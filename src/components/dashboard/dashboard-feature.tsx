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
    "4uStLkBvkQsFnVCbPN2fKyxmogibGXY3hJmNP96QNtfznNXL3aKeEaHbx9qwvR4MoLa1RhvD3LjzPMkysxdM4wUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sgUzELETHpUWEMUMXd7BdRMR1kxPeHD84dMJ8D6i4UK1Ps8BwMTmFR4uTi12NAnxuySVejPP5ERhM2StzTrm6MS",
  "key1": "2TM9SXCbSXEz8w8ZFk1B312gEhwWPwT8eb5BdPQaEdrEBd4EnUVq45CVsqSAs2pgA9UzpDKjZveCEwGYvvnQkvUz",
  "key2": "2mLYciyp8yXCb6FR84YVU7RS3zd9nRtAZNbZcVuhAPQNb65qr1gzioGnQg9Bw29Mf9qRrdjQExPE1DF8iY5KEZv1",
  "key3": "2p5KgrkXvFC51fd2Mv8FBphyJAdob5zQYJvtqMS4tWa9bqB4oEpwRPhGpCc1FBJXUkQSneShzwJ4WUwvgKebGXwu",
  "key4": "4FNsm9StvmHuRT7SP3wx79J3X4YHPPyHDK9m9fLND3pETWK93PqCK6jbhQUKisy98mf5sg33JjLggzi6J6jk5rGg",
  "key5": "4Q8t8TruMXWWqzAg3bYfw5qwJcWyjQ1vU2eL4cT4sxBncCVhSUmVoG22kMCQC2NQJvGFtmB4M1qJM3C975ucqbGZ",
  "key6": "3xomFXTV6ANSKBxbV6q6bgsAaqFYFngr5B9xgkNvoAP8rebPjyoa3Gvw3TdTXXCt4SXHSPrWhf8P1XEEeDcEncjV",
  "key7": "3SbYNusUutsxc9Cwxme4KVHvJJg4rHCCiAywZUCsEn3HpxdtYXAbL2yPpe9Y2gFE6SJKwzjukXwv533F2JhTDfU6",
  "key8": "3XqpdQNVnwTmQAobbTF6XNwBciEBEGLfvhZhV7UuLEgHxeif8GjAVGdoaeHfYwgFfVCJqcrz7i6RLeYtfMpWnL7J",
  "key9": "27mL4zGrtejYrjNriQY1reyX5vka1zghM33ghci2CW5drGVCzkEUJi8NuEwJyUGxGaVq851huZaEoEH6x8MKzQ1c",
  "key10": "5LKGP5f6e7mp3DDYdrV9R9AeWa8YxXpUKAmiYMzeV5MK6Bc8hpWJkjxXrnJpdk3kebTQyV2JBTfGCAZja8QpjE4k",
  "key11": "2UMEqDt3j3McWsuS84qQSfdhFMRS6ztrTSnzgWXe8RHxDnaPwQ7SqSZpLjdW17KrfE72yzHzMExYWhXgnanwxH6o",
  "key12": "5Nsj4tiKvMa1enYdYiUPHotx4utfnbcmkAmfik39vBQnDB2x3xRyFMMpghzkay8LvKQZBkAo7AF1kkaiZ6MdpFsb",
  "key13": "62Ri3jWTgDdyyRsfGEc3K6xcro2GTpYpytjy2JwV17mR9o18RpEgEtq8n9kJCoJtuVmkTwFJ3RUAb5zTCooXxVMV",
  "key14": "5M7mgG1FjNQPBL6Yx9r5y9veRWCNM1PFynUcWgNK83nguotyy5zNXYbZKdyNtjvjWhnAhYb8tfDhYpzHu8u8dxCG",
  "key15": "3zQUaHfhJo71D3EtEGf9c8FyR8husCNm6zDktsXsKQ7r7T8scdJ6dzzCpuuvUm3fsYrTcvxprYApdtjBp1EvYR1h",
  "key16": "2TqcUS1ZwoknVZQvxPNWRAvvbttYYFFTnAiL8zfxZ8vmZuC3FDgUsnpvDUAXgU8vc8k3uk6Whdmc1woHzX6ryPXA",
  "key17": "5YaF3WWBNvQJ6tYHadce2nadwg1DvYYMARXk5FvWgGX51JGgnooXDHUqapkDyJDP2k8X7YfSfrmqTc95KK8XgWgy",
  "key18": "3fZC4fguEebjzngBrVmjsba3U44dTiPJskkio3j87WVgUKMS1U3meV98ngwEEbpHKNf6W4XB4kv3XmiAuMVmicia",
  "key19": "3QjLbXrUBgk1Y1pC4GPr7G7mPChTDsWm7XFa6TdLH7PABw31CBm7Rpw5yTxbFcjEfsyjjUvvtYCX3XYpU1qm16Yk",
  "key20": "CnuyC6HiPrMNVoRB69n1xp78JG18iGBt94ZbqAaciCZKE1XSUb74ak6n8CcNitLnSJ6b6yWvdD79x8GNHSVaXgs",
  "key21": "3P3vkCudWNxhwKYsXzZXzAGwuH72NEsN9K1PADXpZLEMhbap5iapovbnNyVaHMwDGH2KnktzS4HmbZquKqqoHn2w",
  "key22": "5tKBHbxaajoa1iVvcGKtvUDSU6AxsxTgW7A9w2jXK3f1brCht8Uq9N8HompG3b5Jno7JTD8rbaiyjqxSUoQdCfGL",
  "key23": "KLuf8HaBv6jN7TjtNVkteC3XdV56N6ATykoBViGynzpMqfUTrTkK6cdvkPZyUW9rM1TinVLfqreFvLnirUPUpjV",
  "key24": "2Lc9H9dsoWEPVA1CPeR4NDNuTVnFEwXuX3Fi8SsznGaHroEVMftNfsAUe7zSuQEk5pBWfjY4Hqa8wC18aEnda38j",
  "key25": "3nyxfAJLn22rFMqrzS5iQXCUKLuCMt2vfuPqBzsAuxEFXtrsV5qQTi2xvupi1sRLA1Z2NksXeP3xfPX4AwK2mKGo",
  "key26": "2c1mSysaCHfsoKjSc6zuwSz2JPW36YNUgPYCV1g7pCqLEYaMXiy1utSMpQPBWuc7jjwHajtrghbWmC3Mq719U1HV",
  "key27": "2a3qNTa4kErztYjSfMNutGFiJrJyAUZfDAccy4Xfxa4p43pcUWP6YM56xFCWFoJXwq7vSgRvhCTZj8996HRySssS",
  "key28": "5dRPHsXtouNTwgk7utLECsTe5xnL3BLGW3fpK11GTgmctseVpLSnpjHo7yP2dFoRZCdcuagRYWu4h4kA8vy1nQZb",
  "key29": "3Q94urAg1r2tQjtgm8sV9Tdc6JHtJg88JdrW5SaE7kyttv2RyyCtYHg3ZozA9yhB3bid9Gq1WG2CS2AyV1jv91Kr",
  "key30": "3ZQ6msEmhJFWs1VepTAVKoM4NEfHyyyoMR1v1aw4xuXB3PoyW9iRvMxpiar8s7hBCkTEjkaHnLLq1MFxaDkwjw6v",
  "key31": "H3YuHn9rADdMoGysc4o5zUXSJ2xk39KsCEkdgcpCBskPQiiHjUhed46BogTpaTovpPjRx6Wwd4vb1Yda4G8GXrt",
  "key32": "54R7S4TmeSvHyEgP2znmVVows6TaTMpZkQ3DM3NiJbMrAcT8QCY7GcEhR5ZmqbtbnJcTwaVfzbAw8MkKXF3dxd3o",
  "key33": "Z2Qw3WZuTuj62qE87sZz8gmxxPbVqcQBjoJB7513zi3JhE1qYgwynjGPvt1GVNsCfPzVQPTpsAfgXxbSCrfXe8x",
  "key34": "3xsT1KrZg7SMLX54hBZQ1haTuU6Vs7X4C9uCCHLzyb8KGETm8wzSC2dYGDRZqXVbkmyqqGJqesV194grKtxDfb6M",
  "key35": "YBj5kL7uRVy8subG1ZpCSiH8Lx3kM5kK2KhwJnsJKMuNewCz43jmJ7zhdwPBCyHb1qzwSmXPPZayNfZTuuKsqAe",
  "key36": "3hK23yaVsY5CErFV6pLvJY1VTdXyARcHvx1dLB5MAU4A7FdrZtjJRD3xpcXMykwH6AWmQhN3xHJ9VPxPHPGWoJJg",
  "key37": "2pR69en3FGQkd82kzhoW8r7j2LnpYLSPYbDnWVmuDqZTuAiuLdsUaWKpdhNijNUMX3GG1AedULr3smNa7vXZYvhb",
  "key38": "5B3EeTSekULiVAacGMWUPGnWoHojpzVTLNaZ7dzZt7rPMGTw2At6292UAiFCZRVUwskeWxKAFbvRCJgMixZ2yHFb",
  "key39": "29ugu1GvoM1W3rJev3uPNoeeMQu8sFdeRJzEZ4wjHxaLi2x8Y2SzfvhM4sqRMu8HuSEWHrsQRohdS2S7y1gEiHxc",
  "key40": "4VHYNWatgJnXtu9qCvsyRTbswYUDPbXpWLeL57Jn6WGc8QqHDLB2RDZTE4maBxewyzkHYBLEVBvt6PjxrXCBjVnx",
  "key41": "47sxv7Ug2LjNfFuZd6B3Jc6raXWq498c4x1fmachXQVoaShxPdXDRsC1FaaNUbvSTnWs9bdvDXqtgGGFoEmFZkw8"
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
