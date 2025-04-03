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
    "5uLrYHn3FZXGoAZrZ7DGPo3U5ai8ABiTsKMqct911z5qEcQi6vJ3qar4g8KkwvDKnVRNorHG42nY13uo5kkjqbRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WTJ4vHv9DeFZb8yERekPvyttdTwE1Tzripb1Hv9R2RG8skDPZZ1N8du1Q4aDTraE2Yte3b9iHwLvqxY8qJXk8aw",
  "key1": "bZqcSB4n2utFjZaexDCFneeHg98TWpaaFmoi1toxdjrL6NNoeQ6FBAr2eeKGaEmkt61XNXBr7VhZXjFkYd11DUz",
  "key2": "3qMCfS83dVoSaDQjf3fA6wiNYgymuFcnoGmJwtgeXPDf3cXP3CKYdxWYuRWHSnCCgvxynM1hRJGqeJ2yoodpdxm6",
  "key3": "3i2E9Awoaaqh4vmMkZRH2VFCoKhvBKqx3jBy27MfpPmZnAtZEh4ofynkvHfSQasoqJFMtwGLRuuWVhG71bfTnkQM",
  "key4": "4SfCCsvTz818V8ECbvqLfH4nHWdDEsYT3jLJj3yTN7DTXfig9X8BeefwELo3fiaUANQUepJE6Sg3QH82J9TJYwBn",
  "key5": "Fk4i6oUV3uGCJmU91qNWZkEe21GVsMyunfgv3VMxfC8yZK9TUNzjm3wueHxFg4QQ1P34r5SbBfzwT4ZVAXL8MV7",
  "key6": "3TLkSPL3D7nYuqANWGEBmmimr1LBhHFHE9yqxnZ8wK4DAJDm4Jv6sUV7KdibzgdL4Zq9ikTJ6qWn8tgNAScFG3nA",
  "key7": "2RKqG7FiE4oR4uotssLLQkV79rFf6KTQfPxM28N44KekYrHtP2vot58LHJFWDifKbE8JXkTxeyjSSJYVCFnyFddR",
  "key8": "2K8z3CuNYB82WQRiyPea9ad7PTUtox1C6Gf8mexeRHpdzarWo5Y1XqJ63J9XKaDioQvCuxwSidRvduiHN2bZoKhk",
  "key9": "5YYRVdChzcEAH8ywe9EP5bvKASwB2nj1LBQiP6ARuNtfC6difKyoQn4paP1SKJUG9hudJvGUmQmCNF8rJVe8oxyh",
  "key10": "3Vc8XerZho5TopW6wKjcBfWKd1CFNQbJTasWKuveyFDzj5BUQBfyDw4N9igiyQdVCYyGEu4T9W8ZLphin6n4YX3j",
  "key11": "5P7Z34i5csHnARPAhpzsmPUPtWcMZDyTGvFfjGHqeyWemgcHtkSD4rgZrq6wwosnaQ1kiYxi3ncNkGAQBDsyd7y2",
  "key12": "5n6fnXWCfcAU6ymhdLeAVRDXNMEVWjZDVRnWL79YE92Bmqtvdg4kpRdeX3iH6GjJ4jpjVuuktiJmWj1QJEzHb1RN",
  "key13": "49uyngCB8UEA67k7Tfw6RzZMZUCJkYo4ig6uzbhLY25ox9mrkApHanRvSbLcfQQqQVWUGLoRFoYhUWsvhxr7offb",
  "key14": "cnviEsC2gP5cXCmNcEbww3HPoDS3Zxoc89MmGxMzq6tDn38DFAQg9QQ4ofyNdjkUjUR6wz5hqi14YB9G5ooWNqR",
  "key15": "4pSYokPSr9KwUkGeSUMUtciUCtHN2eZn4TgUcMp7ZeYzk6Y78ctivdPpdyqy5eJykibjmTFJWJB3b38MeUmG5aTQ",
  "key16": "5Az87EUCHGgptL5EPLueTmm4LvhNoWRuq3szViBzBfg6Fa8njCFBECQeFnG6Gob29qsV42q6xmnwGDdB4xk5th3m",
  "key17": "4d8amheMrPCiQNVyhJDmZAoLAWAHdMMBeTR23KvVureRgmu7HjcPVS37ctmPEz67oxCqLoiTM619qfmFkUnQABYp",
  "key18": "2oo843rPkRNXThE79PG7h7q1ARcrp773qGNkr5fZS79EnYaWxHVVuxWHGY163AA3vYzKPJUE1cNLZ9UNwuhpmL6K",
  "key19": "4iXjitwxcUhebb5GQ23kwx7WF8tVfTEApAMGgAPCaqwgC2R7js3ZLx8DjSivfjqZsGbjkNv7FWvXugZswcSYnnoQ",
  "key20": "3bNfcCQPkzMUUvc1wGf7WsogmRsE5cqmpXnG6kaWH4iNW9DZmaXP1G6H7S6bQgHJRvujJLX9WAYDyYyfrTJiZZYA",
  "key21": "4xthKYWnj7r9Gx1kuLqo3K9qa5SkwCvZ39XsNGkao1kDXE2zpTRCRnpfhNisQzauRk2kMLoFjqhUfHnL66enXNXN",
  "key22": "Pfxd1PKT34fvwfUcm28JekJiNHYtfvQKA64sDHvv8p4CTxopPoEo8mBY1jRY1P7t4JA7TtASAjct3hjJoNcZchj",
  "key23": "3odcQYSEqkJ4PuHWxwdVAsLwAxrjzJt9YAcvXdkeMdgU2NWf1ASYCdUYy2ykR8YStnESeZURXMpWsg1nzSi4hAJm",
  "key24": "4faE44XFybvdsM1J8w1oxr2QyF8WGqz7FY6iZQDF1FmuwdvnRkZmDpCGe1hGjf1fA5kdoADpGJVD7pSf2Jnwnaq4",
  "key25": "4hCXnpv1JrijfXVKQyLmwSz3EEKKiCA8hUBJKQBcTpH11qUFsXHpzqJg1dKvmnKVeQ4pcbCEJgtkSMpbe8ZLVKyZ",
  "key26": "3AUUE7QerGGmd44ssXnVkSkWw48hk3vzhQmbQW4PGcoevPomtiwFEE7SmPiibVRoiJz3rhkAC6MVjPygKa6W1wh5",
  "key27": "4Wp7Fq8dCCyS9L4Lv8LThkbj9qRAyToJDEvz3aTnSJqAWnnJnJGazcXKxbWaVCA7SYQ1ay2m9GVADaiiR3RDdGDB",
  "key28": "3YbpYUaor8CKkxkxEAWdwW4PeCyAQA7YUr8Ho5gatCVm4PMk1sF5BebUx4xEvQyqFPNUMmFRoMjEdsAjhHZTdXXW"
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
