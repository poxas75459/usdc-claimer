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
    "37CNZkYWzexuriwBfhFgLNXFAbgYceR9QuekdDBCeSHb8MbXNrR6xPuC7bqQZxP8Syhq5wFjGAeB1PhZmbgihe2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uVkahD5SqjMStJNZbv4Nu6QguSXWcyn2Crj8ZaDBqkc2WhzemQPJz9jFdmAe13i5MGHiXGgASMfPtS5jAh2fH4e",
  "key1": "3bExeLpcWuArtq4Yr4kNisBzsST15JmXVUJ3paMgEQQq5wiNcsedHFUVcKk2Q67nMwhCrwrJ9wzgXWmfScyxQbZZ",
  "key2": "3nyWTQwDyDEoQxPKsyXxHeaDCeV7KSpPNNDYEurbumUB8zDnVrb62JLzmFmDpTRWEEhRPTY5SWUQb2nSyntA1Aj9",
  "key3": "3NmTdwaHP89Tyk4RS9MC46u1H55YMwQD9hQhBgfXW9jSkrY6rFXnrCmvFbu9pGnVa4TPK8xaQNL13BoFSV1ecF8j",
  "key4": "33qmgN6UQG7K8KCHPu4qfQ2CWPHKbRJotRfLTupT6XEKgqhfgSW9bT9X5WvFSAr6LEbJegiPPN3KhSmpzEVVmLEb",
  "key5": "2o78Jvb9YBj1f6cNj6Ca4kiwaGt5bCRtvAY4pirJG2TPEw7afaTAiTwj3JWRkTvVz2MjXkyvhi6gDmM4xiXBxpWC",
  "key6": "5zXXn5RWts6evfjntxzda6ZcTSfP5NHp7S2dhSg6ARZukh3TM677gdcWj6RMoSXbDatpXpfEr12pencTmdPzxRrQ",
  "key7": "3Z7LMapJxdhQwTzEtA46pQd4x6eXt7YF8oZU3An53B5S4iREZGym9tcN2vqUTdHN3LjYK55Bc6Ja5NikzcE4BBoP",
  "key8": "aDWyMRQBcZ1ZVLtLdMGPnD85diEM4EhxNsoxaYM8KXmZbxwGMzTV38oUTgQ2CZsELg4CULNvP53UNvteazdNqoX",
  "key9": "4m54pHShiW3vGKSdBywRWrian7g4U7st3pCpG2nQAA8gLFAsug55THL7LLY71dtHKYVc4bnHbMUtPMfFpaB4PDxS",
  "key10": "aZcBEe9KywxcLpwP4wsddWofQNsZe8cgKwaEaUha6Pdy5W6hwtMEdx9jL1xJAcaNKDd1x56ZgfCYpsXCUyEu37e",
  "key11": "4hjp97cjhPFEmcUHdWJesfmL8CHKngwveTaAexKeh9vtgpT7wwfKNubST7Y7BGsheCdUKrZ8oCdBGWURgdY32zSJ",
  "key12": "34qk6EjsLCHWcaLzzKXU2oSLMLG25WubouMuRHzHx32ekVWwGdsP5wMEqH2Kf8LqgXuXxmBUh5v7kSB11nz744vJ",
  "key13": "3ePNtFqpSSrMss7meqA4SirZwvcS9t7zWaMSRhHWtMyrp2FQje2LzhRuRKoRhy73XMeCoED2hZ7p3KSdYMYNhh2K",
  "key14": "2RpC8n7wPaWcrnbN38dPj38SjqmSeDkyyL6u67yzmj59GVQP914HwfRg97Yqofrx5Jiu5G1P5UB1zryaD8HCqxQk",
  "key15": "3mVf5ppNgYfzE6XBFQwgEc8y7zWo3cvefktcXoHuyXkuAMW3izfmQRQ8kWK8PoKkk6PmRVSW7QTkm57pFyTZurbZ",
  "key16": "4pXp4Qq8Dz3xzviqiNt1GfUBDCiFqtsCi7ZbEUDvVepmrHF463b4u2RQYwuNZ5mt9nr98KQgiUjxgC51BAdF68eP",
  "key17": "2M4wSqjLUcTUinJxDPExjhedisjFBE8sq1B648w9sndTiUakZDbMfy1S9QDSBnDGRj1LcZLMcErTQhJWbtiWqP7A",
  "key18": "4RZMJiMpW3joxUAr9Ld1bDy4NVhzDp6gyfrL62tdLFfENbVFWQwsTfBcYVpA8aWw1M7CfHAWjUXBrqdwK1gEzVtW",
  "key19": "5FzuMUUUyKCVEuDT8vWJ9NnFXbCfFR6Bz89dYgdFPLgNGmjKyTkKu8PQCk799eF3TgQc945WRj34Grqwj5Yv2vfy",
  "key20": "5MkFj3t2h87oXEvdJd6SuH2CJ2mWgR7ugGzqAWPAyjQN67hUEhWKHkv1SJCUYewuYHv4yoaSf17cTBmHk9XGk6Ku",
  "key21": "4cLtJY8VJ95NGyGK2Rbcp8TZGvBPNSUtyDMyxELtHQgzYVXmWeqNXXhM4XU8Esj8GJ5YaMjaF7wzcNvFPRaTWW5s",
  "key22": "u2YtRWQDuUBAC3Xi3md3JbZsSG4c7SztF1khq6u3n4v1vcBZDgrPiRwwwaD9kHCPB1w5AA37vdvp87owAaYjKuW",
  "key23": "Em7XnnHDs16obwi96vuV7Hy67SWUjnvdjXS1VszHViaV8XoPRaNJnirp8VAwy6shbn4fTbyNqUva7Gr5cfFcboa",
  "key24": "4fqwMWspiy5rm3tyUmV8FbqkDTjUnh3MTuncCsdKWEgugnW3aLyZZwAMXTv78LqpCkvW8cDofQLwr7mLYX8JhzLx",
  "key25": "5E5hFrCtivWSqjn4DjE8G7tW7UP7xkHjWRVkJWqzayjbpJV5AUBCQNJ5ac8VWzSmNV2JBv2ZfBHC75UNpgDa9pd5",
  "key26": "5wCkTSFzwVF98jYUQQPfbJjJJtCdqTJwAvZF4VSVHN3WrnGQw7Ji8cjY5NUbrxHRmGXkiobXPNJc3wvhLWzeeEyY",
  "key27": "WLiCj8QMMZHUX6hcuRv1cVXA47Qu1EqNXLADJViitvwNQsMJFCvWz7E3FqTjtArtUjpAJjs9MNXCSRXAxXMRkis",
  "key28": "4YZKqUqXAgvTet26eay3oXYbKz55gyUrnmVcVmyXf4A1W7q21yneEoM6CiaXAbfUKwJuvZTw35QgFiqyqDfmmxhS",
  "key29": "4FgG8DzHU9snaxvutTeBVzBuLMKs7EQxxn24QEbFvEUqMptHfcWtkwLMQat4YzgiFgLMkuKLA5rKGZJTytpZX6CC",
  "key30": "4Q3cvAnVfJtzeXXnMFV3dVm9jzYQPJFFC7hd9PSMnNQ2jaATkF2GniLxWHi7gSV6bw7cSETbXdZdEajnsTbFykw9",
  "key31": "2yiUduQ6Avg3Npp4hSvXyzZdUg1kKfxJFEnTvUmFoHUKiRoioGnxduZLBmHkz3McUPbxNPgTxg4jfGzwP1FnuziN",
  "key32": "3fBnqNvssXKqpf7boDK7bSzc3iroHxn65tgtr9PpiJAkXzfimNDSukSKScYru3Cb1ynitjvn64AjkiJMHQox79jb",
  "key33": "JACYGDpBnNDs1bWv2LBe4LEqQJ3Mj1XZNk6m7YoSiPrUw19LN5LbjSZ3z2PPrQZ1u6t458EXFd1SH5X2PePofvG",
  "key34": "EKVA2S2xTk5ZayA7Edp2r165VFXxcLTHdYBZaeSB9Pjgdm8MMZc4xpioSkzoSD9cyjwgmY7ot65Y5T6Qqac4ov1",
  "key35": "6RMZ57s9EigVzZ3ECmc4dQwsbqidkw1nB2zuTuehqrHVD3T3rew6cTaF3KmbjFHemtbWrqXpqzFuMoqAPhV4iiV",
  "key36": "3zjzexN5EBDCdZeWBerBMvptidjU6UYTrHSZsVVEBrJfHXxjfzs51iPhRgQT7xt5Vj2EsxsBcSMMyhZAfL1SQC7c",
  "key37": "4nV2mmcv2USU1xWVxQKCT8uhuV7KdVi35cahDkNDMEUKbkx2Dro9akDTcY2Kh5tz8YypaGAGoesThm3PBPi328jQ",
  "key38": "222k7MQ2tErXtYrnMQoSExhd6KJGkL3tF1CKn2CuDNUaaivZ4jcJQgPqAmR97X15ZEvSx6CGiEt6antD9TieRBRf",
  "key39": "4hAAMcXweHJ98nqmoohXrwdDNnpkyMpvLKeexJ4bfaLKaXbnbAx5LH6DNiRZkcsWkmshVCzSKKJo7vpZ3ansoxBu",
  "key40": "59EmcFkHsAxbcitaRHdPvbD1CqV64aZ9EwpdA3X9Erg7sYDb7vZJtmQsGQqCdDUf5p3yj71XdQGUgrgoyAdxeHJF"
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
