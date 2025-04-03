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
    "5sVC1YQadq9FZ6tMUhhRFtYykeqR6nwZTqvYy5Yu6VTBQx3z1L3zjGqAL1XH1PjHGtY31BBT227C4kSe5KfPL49v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ms3q8AZN1K6VfoR3bXTn8x9kb96zT4pEKUQ3zqPafxfMtFdkjBfw3snzq8D8aDrRjKdnEi9wbjNjBgWg4wfyPQk",
  "key1": "45Wr7pcGjMBvAe4mS5VStAC7768SYJ1BopmZTn2W4GwfLyFM83AqzbbBa1tTRKcoZZz7wqK3fDR5FCaNPyTFKiVd",
  "key2": "cCv8cuk3azZXfHqBZQfnjWp8ee41z5EhTwL4qQwyrYQN6U8Lh8VH5cJr4JquDw58KVGdP7QNeHXQobftajKaZcF",
  "key3": "4yeBs1gy4CdLjNEoc4KWTs5W6KBhYYprZQVnB4Jm5BKd85S9SMNToAXpPgbgFyCJXxnv41PXBDPHwQ3ceovrwUDk",
  "key4": "2A7gjXSoyFYjMxHbNtkCeNJo5ostNoY1Ri25GXwvUEcSsW9Yy2urxg8k14Km1nKsTHKZ5smbsg6wGpAJGfUsdnNy",
  "key5": "5oHZ5R8Gy6daRWZAXVHShyozxGZ1E81fajVTr5tHZ6xSwG9LAG9SG6ma1wJW7PV2G1wmTFQaF5zcEpBmopSb968r",
  "key6": "4QermiysptWmxmWJuGxF61zV3LNQrXEsqm76RYkuASszfpAcCDUtUsQ8g7V3i6Gwmb58ekY9Nah3t7iKzFZJNJb2",
  "key7": "3QSd9eEMMnYqQidyzwXCKMo3K5oda6DD8Ry5itZFhFvWW3pjRAcLqcJuxb9VSnN4ffomoW5mHZGwAaYj8biehPmA",
  "key8": "1XQVcWtGkwRBN21mGZSmbuTFPMRUnFiaFjfd3PtgTqw7kYD7zEWGyZa2uZgWdbosRpahmiEkwLnSLo7uHbnxtzE",
  "key9": "z29PZj9G4mXB56DfzX9Bk1gJsb13DrDnaQnNhZTyTcJHzj8Be722ip2tepkXZYgpuG45tAtABBpycyZkJoA4ggo",
  "key10": "4G2JVcbqxgiPCgxMLygMNo77dNbimaaH7th4aE2xptfTWvppYmfZ6KAPHJ7ivWRDrrCAPPGG3DrByH4MenvfhcHf",
  "key11": "2m2ENyNCRA5nmPwKTzhfTYmw7CdoKo1rYVvfdzWnRq3Szf19wDU55BfpqGEDe3CCnn3BfwUfzXENhjDRpe3dTqSy",
  "key12": "inn1vJB8kFcTj2XdBCHBnUcEEKuVDZMippkMPvLtcyXAPBAEAKFpwa5gnbzuAzr4cUn4yyhvDunVRUzaMnHH7ym",
  "key13": "42jJMifF3vh6fw1KvT1EMKSM8sZF7wWfHj4WdeyBZCKvTe7J7sPgNfG85W8LwagZoLNa4dGBzijbFdVLAfz4XKD",
  "key14": "aSStSdUfkrYZ9XwuNWoYurSFMHANULLgqV23fpXAYtMzCGhisXLGFPvzYqEPtPqM1iGqF2e8Wu9SYdgboa36ZLe",
  "key15": "3S8qfSh2L7sxkmFqUAtNmNxqpFw77wV9niMv5Ksd5NRrafVsZw37JhuwNCC2EybFshq5VwyayJQJaSSptBVfCfjg",
  "key16": "4nAvbcuaBP8Ge5LLAennQvzxXZpvFukaC6r6XRvMnZazHw1YbeqxtVEiaYa4cTbajoL6t33y6N7wWDGy94VN3Csq",
  "key17": "4rerV9rP8UFP5soMesyXiyEyRzjurioyQxNo4Z8YnCc6ubx13Q9HokevZjWcPGDmMXZ3sTJgFiWx6wt1RtNxawQj",
  "key18": "2e5XgDi7PZcMu4bgNJKnFePv3i57n5qnfVqbjTAV8fFSHFgsqPGz8RVoAXEN6TCDC76XNMbgVAPGPJy2333zGRe8",
  "key19": "2W2fN6wAND6iR8AkuNvZWVoLXx5WDL8QbQ96EFhK6juKZhp829XrVu2RLDuPh8DipwXLUBHjUBfkCC9tDoEoTqXy",
  "key20": "2NdwcUKZKX6BWdARs71DUhMZhJycU7Sa9iz38qrByBEDESeZUHCEdpshxqHeKrqJaC2W8WkXjZVWMqLdtjhxbTyb",
  "key21": "2Efgt8b8S7XcyJ9Vj3vbE4gcgnG539pFSMmFw3MvnUHCfEv9cbJBmQ9EwrCJtSzzouwwH4vTTL6wiVwk8P548gaz",
  "key22": "4Gbg4bAuxfqTWT1Q11VQEcPB4rd6nwLH1cjunLHtTK2HzLq6zANDEqRvTK75Nq6uW75yd4h6k3KQ22Lks5RLEThQ",
  "key23": "4pGEU9VJUCga8NKiLq9QnAFB3DYRUz2c7JHdf93iv3zX86jxuWvh1hQtocmZp2sjAhDob6hej5GoEPqB3t87Tcay",
  "key24": "66FrM4nfWRfNpCfgokDyxkGsDNFbmAEcbB4B4hMdrjoToxDKJwAAd7NuZCxEUFRYrd7oRk7hT5nWRbV34qYXiqqw",
  "key25": "5degUpNbqrUMvMybdZekfDSfrEJBiXF2qoajYK4P7espASpvZDjs5UJLAHD9zV3PxF4DgNq3qgLKbgiysXiNPFcP",
  "key26": "2SZB5H3SHPQkYuJGE9FfohQyjQdRxTEDbC22vAPu9qm8LMvKZSPyHfe1PXwdWDxzjHCvG7kVHn4R58FCvicdWnEw",
  "key27": "4VkPbB64Q5GpoGdMT539HQqMUNk4tdFaCibJ4F4TERGYceoru1tNQ7mERFuimNSuQQncUzr3zSQSetCZQkQpBS19",
  "key28": "3dWx5dJYNj2DNvRnSzFR4bs5X3AXjvWdYpU3WduaPTEW5qQVnzU49aFfBfEHdwCKepWx5Fvv9K9Wvi37eRVeVbYW",
  "key29": "66SiEEME6pc6yqGvo49tnxF1fmNjKiY6EVdhpcf5QVBbUk8DoEH8RXd58siAddgwKWfFfgh1n1PTe84uqA43NiW1",
  "key30": "VakhpetncRRzKWFRhkWKSYMd66NzMcMCg2eYXwQxrVTzcsXLjikrZdvfHBE9yUtG3NUuZCuRmgSiv3GciZraL1g",
  "key31": "cu3UpBLnZ8wMNy1xnkUF1q8jE5qeZyG2iHjUz7RYg33AH48scd19yaDKEEDaeCKwbp2qCpLETh88Do8X5CceoPJ",
  "key32": "b5xG43Ja6Jf3Cvpd4Cbfey1WBogmn8qeAxgk6RT2xA8agRfAmFL1tTK5YDTEQMXg5kmsnRtqYVZ1MSzrDSoGWEt",
  "key33": "39ke4fQ8i7JAPiaDqGWPsL2zAbbVZVbh41SsoxQjiYca66LE4qHMQ5PnkP1GzgzhkCnJ4WyZ9e83rXUnPdp9iPCY",
  "key34": "4c5hqgkfKQsLKQVVys9exjUM4GHrAQawkBFnF9egCFqWLtUhNHV7M1ELRgTGe2Dr8FY61kh48PW74CkYbkwnShMY",
  "key35": "53jcQGjsZPmzbZnu29FQnP4RsNmyHGfGBsnRdSXrm5pMGPYg7vztbrHvCGWrGRpxJ7iAcwsbBbeACaeYorvfXB5p"
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
