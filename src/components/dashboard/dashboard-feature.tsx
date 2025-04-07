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
    "2KyDVWUdprugco5GBm48sgpizmHiPpnMdAJjihVRU6BChynBETxnH2Xr4TxkVJd13dTrQjvAARBwD6zWXZmssBoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SNerfEzf4ja2npy7KizVzx17cDPnfC81kH7wEA7Bmc3nuonjkfJB3W8rLegT2LM8mHGddiPdih2qv3bmvZQKzDS",
  "key1": "4oEbXrreSpikw4j7DwYbzJn4ur6TWp23RBkqkze2mvz9TJUuQfM8JMvXokAcEnp8tKVGMdcdMByqxCpoWudoMqb8",
  "key2": "mto1m7GApqt5KgLaWrgx9sh1ALtj7h3DGa3bs3spHeTZmQdusnc1cZBqcykyphNgN8MgkLUybiLg2EbVksEJPi7",
  "key3": "3DKnbrTs9UFdhXiWFuhaTQiHxtHC4DcrWqAjvLssnp7ThcmT9MnUk2WsGuztmNwnCt5KbN5VRDPhf8EthJo1sB9A",
  "key4": "4UbE5Yu8vSCNLogANGbdT2qHLRA4TckK4ZVzQx5WfTdqauVUrNeDpyDUzVeTbt5dsyTm5AiVSohKcP1qRkcBriCs",
  "key5": "3VKfJCgCDS3YU8WLLpqupwVco1BtzvA16ZWVKD9yL4cJTQpkyS2f6thrggWjG7AciEKUWJtXwngp5Bw8Spu9GoM",
  "key6": "2dQETNzR7N9WV3qXfTBWxEnjyD5gSzkHJU4nufqU6FjfSGhiPNEA26RSVgkJQVKeQ8VM4Qhtg26PF765u95cEYnD",
  "key7": "3Vkxg5BQNNEPBL7FwkY4bJNGVXXkdTZmFx7ADuYuVePfsNnAs4n5TbBdL65qASKF5xQCguzSrWyro9EzK77s7Wgm",
  "key8": "4wbYcS6P3Au4hKKBUwX1icXrD231zvWJYhomxy4VVVWMAPQ76EEH1brB9wAVbreFyfeWUN6aKFwrY8J9Ym5tRCjw",
  "key9": "XqcAPjkmuAscPyWRCJVwAK7XxYkaSnvF2gWxFMs1vhnC8aA9KX6saPE2dNbqN6ZoAaF39ZsyRpL4LhWQVoC9gfq",
  "key10": "guWEfA17RmjSzMH6vbiSjfJbJ2DXqow1icKgy4WH8iw3RSkh7WG64dzbMe7rUJQJYBiA28i9k2xVJP9nkKd3S3B",
  "key11": "571Rbj9ttoUiv2PjgkQMuZeYKJFP8bRPgHUbwZY3DK7qJ3JfMSqmb7oxVZf4tMb9b67sQYEmUV1YxaLapyFRESm",
  "key12": "2ZuDQZK5dEHj8tTimGodu2bqnuxUx9apajAA5vyptyJorqCcA3BEPXTnvmP9ThLixAXBBr5HP3EqfRxUAiL6Mxoi",
  "key13": "2fnR5u9rRFzcjdbHm6iFMsuGYxeUFEhS5RTwY12idLbNJFMwgaFtVtKpLoirpsuMW9eFiN5WrXSf4B4wi9mB3z1V",
  "key14": "g3XLKJeZfcmpz857GgfKE3AykKGR9f7mjzHFGq97GDUaCjASJUMwVu59RC2YJwWW4biS9FkjryGwg2incuWPJYw",
  "key15": "67VyfzMEbcwuoKXxCtfTwSedzTAabeHYmbBy5UQyyXViNgkZLNTAnrVpFRKmQSx267oyPua1jNt91DaRDsgUfARN",
  "key16": "2LreqreedJ4Yy2poPtMshmQbHLd9LLMtzin9dVvH21PzzXpHhmeaDZ15SQ6xFkqZG5Frv5i559mu1dbMdQBz1Pe2",
  "key17": "hrh3kqpKtBvLWQcVNHUDFvFWxPbhpiDwAHMqbWqjveMKt8WipmVNmRyARct9kcnAUxj1XVX5SXpteVt7iPKfreh",
  "key18": "4h9xroaVzfhZYbGioyc351fL6Y1CaGnAgwRb6HiwPYpEba3EcU7ETZcy62gZyKoMBVH5Ktv57hSmQ4GuNugZ2vQf",
  "key19": "29Ssdzv4SGW67UEcV28kj7bsi6eBf8wkk38EwJwbXVGc3zWJz7KvAsmrPk8p48EFDMwWhEwmBb6UzGV32Qxfe47V",
  "key20": "wtuvBa6z4F15qtnQN84DhvasAdpuserR5paAxA926XBbFDVRmc4BFYo5n1uXGg79gBKNdPeM9GxLQtUHyRKCqyi",
  "key21": "5NDdrn8osT1X7zmLUfQ3C3UGC1qDQHXiWL4HnFeVJY61c8pS7E9q58Nq8obK1NqWCno5NJrcioo3BYyGNvFQB9xp",
  "key22": "3GcG8HBy1TGFtnduinNTwZHH7vtAJGh465qcteGUzecwLvtqMapUL4mdFeLc7FYNDhku2bFCHbPtQDgVn7GgokoL",
  "key23": "5CuFfhjN8GnbJA1Uazw9DJJ4XSrB8zheo95z7TEqogwRUxKUJVQtWU5Zw5wumuDopLZ5TihwGN99xxFoFnkCNGKw",
  "key24": "53KhQbbbrwrqZabW8VCtqTaB8W34LZr3icWBy8rCc74NJBHbUoA3aA7KScwbrSftFbyBGETqamo926njGrzDz2ro",
  "key25": "XqGj3v7JdCmBPse5s42ejFnswsqyAqrTjqzoKxaH6AH1Qsa6BiqbDjUWyzmnjuW6tnCwT5ooCFd8XXN7fM1EWdu",
  "key26": "25FcyocQ1dkQEtpCqRVYKK8VEigg3ohQs7sYZPo5zRAxc3J9EWZhHo9Z1cgx8idPw3uXnchk45YR9akewsrZvt8M",
  "key27": "4GYTBNta4nZSF51XAyMaGkzwFEthqFvrFUBQViSC5RWWgkx1t9ghKqBEx5JkWFMG3p97yh5R7WyUDVbhff2F1PYb",
  "key28": "3mMhVEh5aFkedWhfmvxqzupSjyd9zCSQKPGLm58M7Y71kuoV2AGvwDk9vU71YaxCDjeLcLLXi6E6N4VGd78X3Ykk",
  "key29": "SMVM1PV39WNrGSB6jiNYkgGowBRohmDGAsWbu1nTnDYYMi5JoZjebqegA4AzxmPgquBRoVMdBbYWWfyEPS2ZBgc",
  "key30": "4j3XyQa9u8ECB2awBeDywFR1CiAGYVfeBYvVMNeJV8trk3zieUf2C2F6uqJtxeg2H9ki9euMvRAHz13HYrpH8PRM",
  "key31": "47uYV86nerkPTdG83AAbCiZ5PwQ6oRuAhrdrzmi3cVTh14guJeH7YUVpU8KBhLDRcwGj4WEqRMYMeWQD9BBk7VM8",
  "key32": "5zi1hqMjdCAFXxFG3ASVGD4q537T9fL9VGY3UaNftSmeKz5W76h4EtfpJCviN9dMe1otRSEQuoKyCFhWJzAJt7BV",
  "key33": "27WkK54GUKGKqFyuFuxskJdfWEN3xxjToB13WFxVqzKW3JyEPiau7cVoSr6rDyiWiDEP6iuedQG712kVJnw9kX2r",
  "key34": "42JZMFoCtsRchySrmN3Bz2sLr5xWtRNp7Aawkr1p4kLB3vHsfZ7MV6Kkrdb3TscUAAb4RYUZjRn61VqRP2Fv1VeE",
  "key35": "2hxyXns4zFwgU7m7heSyL4YJvZiHSM2NXADFfBEK5We1aMWEZDXY28FPEnatyym8bGkh4MWMNACfiFTTFYdbF7Qh",
  "key36": "Hwz7bVkXLk9pzPK2hQmx97L1gRZiGMCuQBe5uXqPCU47e71mmRzdsd18jvhqmnS4g9YHbL6YNECHNcquNU2HnjV",
  "key37": "3peEBwAyS7S7BaRwubuggqGoXmrANXnEnaGno9JwAt6wa1ozxsffdYipzm8a9fNwDur5yS7eTyhBpBDDF1ziwkVC",
  "key38": "2wip2AMEsuZe79ZnqY5nqBnpGSAD65dTm4sAEq7yCe9TEY9LxPVEWg57QG4Rvjc8ffGfEKrucFLqS2xUjoNmRdZz",
  "key39": "49hYqQGqCpTfaAmwtS6CBsnUjs4g7awRoSRRU6KRHr3EWdti6QS8dVyMacdEcdV5HMx1X3wDAJ7gFu88WeCsMLEp",
  "key40": "2gLMUafH7E56MjjCc89opW5M4aVYzhwnXgBaMCVwkGckntWVBc6f2BJuvV64FGQnm5DwFDBU5newbrjbK7sYnPTb",
  "key41": "5vJHvK2NGKiqazg4gxKtupR6DisHJSSFtvAB4b9LGmw1GuwzmUVUQMso6R5kDoMKthfDaQKXnDpzLHrqsmh5fquv",
  "key42": "5jqDSL4EXoJtsu1zT6EoXHRH8gn7UH9cxfdrngZiCArojG329W7vKZcuNMbWCpfJ3oKKWNf6qXycaK6u5SUcqyi",
  "key43": "4K4JkpdRhtvRPXDGPcBNbxc9m1hTyffLfgbGoaLhdDQn1ySKnztrdEQ7HV8HnN6m3pqUpnBtJzKdQvKJghnKbxTZ",
  "key44": "6K9d7EQJ48bVRVyNdEiLo3vnbFaSKhGBDSUrUML7GZS4ZPs2XUqb7FdX2obygyFrJMRQ95DveYcs4P3DjgGqNEg",
  "key45": "5ejwiu4cHM6j41ALeFhtEiW41U9MzyYeHNXw9TYSkf3xXL21SLUWCmduBbVNraCoojmy6ep578ZuWFn5cB5cQ76z",
  "key46": "4JGRC7WkZShNS49xat9cxPWm1zp4ykqnMiwyfh1qLGjY2sKKiZ37zpe5poXK8xJHo2cNJqEexGAiU9RboWJAg1w7",
  "key47": "4jEoxbfns9QBNCTVEWdXjHans8stJfxiAxa18EBdRAZ352tdkRYVRTc4N1XFxZYMZtmfTrHYdUb5QvUcn2Wpcenp",
  "key48": "4dS4J5rfbfUMB2iJpNqy9nxfj9oYkSLQAbT3z13yihZcQs92HLRcHjfPwEyvojmuSk3Agtg8i28FkyyuN71eHhQr",
  "key49": "3rzfUMgHYFcAZ5okWoT4ZH1dFWa9tUKYYvApdfVhcU6NaWJW338mMEY3zPyFsw2taEGHim8EDN8PvN7FmV7rpRvX"
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
