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
    "5ptGT9NiFwvvoM97X4dWxPYnVxoHtbyPLBzh5TwUJdzzR5LzdjpFk2GRhtvgBEkZ76DvGB76tpJFc1CYJ9CikXWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5re7T1ckdqvHxovChbPqYHsS34qabFeCWJsD4V5ioH3bb8mE4BiAAGsvewRmpLxj1rbdafeEhLbR4X9EomRN7px8",
  "key1": "D4qqTERnioSgrE8Xd3WQ7YPgPWa2nkHp3wEVeiYunS2tjqDvfcaFVLAzvLL2BTuZi247Dg2F2tScQTwZJBGGe5M",
  "key2": "232mKe9yMJ4FE18qVFRdXYm9pZtjq5mkDJAEGBN44tb9mxeXKyT8UAF1Mk5QXaZMjeMGtU3X1NExTgFp7B8sNExT",
  "key3": "4UBWPRSfn96MwEoKqna6M4yDA8gH7fwcxQWetXXcCUtZ9iP5ouzYR8qXv2prtQyykhZZj3BbjiEdrjw9U9DiPPfp",
  "key4": "4gCPJrE8DmJ9NZHSaxizpvDWNXuJ7mqMC1b76iE3m6vRvyGVg4BLM4WmbHtESRXDc3KXLTGop7XcST1VvPNhG6cU",
  "key5": "3VDu2uJy6pTeR71Lqho5X3Ux2DBgUuCU43qA2t4YPWYTyjysrsDvpLuUXkfGh1qE2eDGzGxqkRP1US1t7dJQ32dN",
  "key6": "5ysBF5S8U2nWbad7PpY36G9EZutsU8KZdkRN9ibTEhgoERMSERmcUHyEMFPUhuH9TU73sSJvk7SotWCKAbZ1eZVk",
  "key7": "5VF54z7vG6vqtaasvtgwWBKSEEjHLeeyX9RaQz4EB4CPBqKSBAn19Qe9peEQKx3dxMmzva4DARrkJRKont7wet9p",
  "key8": "3nDAcEXtK5C1e9MDcR26x93oPWXpMX6EhE8XYttbHR7hoWSQEdcVZU1KzgXJgdwTUG7tshmazcGVKZuqTPbHsj29",
  "key9": "a7H9wU19c8QRQ1X76x6VntGHSTmNxzgEmJCJ1u7VABmRmieVDiajLLRM79nxScym1vWU8nyHixXX3n95EMmygD9",
  "key10": "5prS6hikZNRoSyRB7Nu5pdXNDHdPeLXLook885LFLCg2J788KuqqHKLKBG9Faz71Ji7fAu4U8jY4gJJ4Utu75SWk",
  "key11": "2XW1gPEH3Pmd7twBWAQ4nP8Y86C7JyhWN7CsDmjwo9EbdspYhEMCAmUr3SLSoJ6axgJ1hPQNke5LT6CxPNQiPonx",
  "key12": "3348D5eqg9ZpEr2UztThw4PLrYaB9wd4fzh6BTZYU4RfnBf2UhVwoNeP58ibe7LawMatC2vVYRGhSEpk36U6Cg6H",
  "key13": "4RRAZbnUuX48EiRUu2bevisaViNJ9ZFU1wSLa13sosHYEv9izT2bxnPM6RaWfU12ZM8S9zEhHFkZ3yE7yNZUVZNr",
  "key14": "4QaPbfF2WZ6p81j7rrCcHNgprwLJ63wmmAJZWmZXPoAPPGv5uqDNZfa8Afx79T6cGRwTHbxkpPg9iX7S9TNLPvmf",
  "key15": "ctch2ptJKbABhrZjeb7UNPJaGrxLVeWhf75BwgJjRQa9ZcSCnniBT7NQ8EETHGFRXnyZDXHKCjNo89n5j5xiaJm",
  "key16": "WwsbBmVawUZHjQjrGYTa7jzKAj5eKrTiaokhGDbKFtoY2aFJ5g6QZD4zjndycTtNdW5enehBzGj4DsdVPDh8D8m",
  "key17": "5eZLS11TC1KdJBzVZkwEj7eSTmHpSqmS71WkhNMXxKvvM6jnTyJJHP4iwmGSWPSaHtq9Sp62ay4LKeFb2TDT1L2h",
  "key18": "3KTnCb2S2ohCWHM4j26ZkqySjiXZG2ngiVB2KSMziPdKsC1Xc32Wit2gfWTyMtZC3oMd6V45KX78bkjVEoKH5h7r",
  "key19": "4CxsYj5JGB6uJgcrehE6qDCpnJnNHQpShEzCqgKXJswmcZcto4czugDE6RGPR1puTFc79r9QWfiBwzTz1VyMGXgR",
  "key20": "3yqVo51gk55vnaruTAPNuNeW3tVzmPC4J3mi5rZZhWsGfsZThXmET1BqS9RNrKThoV6qV1G2XP64TESUhPqq65fv",
  "key21": "zSSwGHJGYpFgG4ooQZLVkF76p2doU7WCMhnCo1fmDQjAiCjTP6TRe5zPCdVfr684TpZtgZiwH4rUCfskFWG2grp",
  "key22": "3BbnYR5cBt5GB2MLrjFHkEh8qX77Ayh3cDvJGoiKxawsnvLssLoXRJePowFoBpZZ74FcY1KQpP5D6dmAujRQNbXP",
  "key23": "MKTYgbJcmQjpiLE1UwWpmtJniLCXvzyNqDqceSWF42S7weTtUKJAWJUGnVBnMZvpjSGHa3rJX3G2pMysMHvh9MP",
  "key24": "5iraxFgdrLMG4NorNt3t7ZzXH7tfmc7dAveXee4bh77hAL7EhKhphXncsW3V33wPQtfMGxG8kSwteb7ip3u16DwX",
  "key25": "4QGcYWL9c14Pc6dqV2orgEzRqWHWUkNAuuLTANo3ZRfpymEYd2BquGcjy2u4HGNfGxd9JyeQJKecJXK9jbVGmPvL",
  "key26": "5pt9UEadS5hy58gJCpAJMLdCxui4iVQXAo59cFNWj2N6ouujmm4DMMgfgMho8jCmWpf1FHegbho3guCW3w66429F",
  "key27": "4iCAV5PBVMBwzaxJodWHcUVFJ5tU3bty2nbztGEqarNCJWMU5r8NCCuKU4LLhjcDxuJxbwHuKwKbXZ1uxYmdar54",
  "key28": "rbVmGgNnd6sEs5iDE1RqXsF9d7QdTCp8WMA62R8hQmmYwZsoPaLn3q32hnMESDutJjE4MEESSYaXeRQ2fwUzs8J",
  "key29": "pjrZAhYLQJd32DzP1ZMbpoB7Q1FaLYxnmU7PyNDFGtnyWCkGz5SXPpdZ87HJQ16P63gBprSSEkmSfUdESsxXvWu",
  "key30": "2B6Y3vmvojJZ9UXDVNgcx8awDhFwDLRE3JMbRQs3GTERBoBF7S2FDqGuoViFdFTjUPUjan4UMLFA8B4oPBwwemnn",
  "key31": "5g1xXXUv3z8Rm9aaN8rkx75HPFzHKobjYJCRKKwxVRhP1LC6Ltd5J2ZSHe97YuD6Z4QPf7jx4i8W1adsCMiLWLgV",
  "key32": "3jyPTfocJLpoY1PRJSKxi3vXwNFqoSE7kTUQf7kLiHo3X3KQqrkL7fYCC98AVH91RwApnhh8asyYkCEjSF7mcBWM"
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
