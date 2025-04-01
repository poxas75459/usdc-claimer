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
    "5yBxcaecgDgfBjuUrM78BYZ34FS4pif9vwr5HUXk57mbVvXZu6Dajc1eMmnM9JQtZmhWHxVJBGYXniRUE1XrdXfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59kKdQvWXJTWWRUgZsXojPYTde4J1r2CeJgSbDj3BxxJuz6xD8JoaBkfTK5ayjaFsD7YkCnFoXBAEDZTPffTiE8W",
  "key1": "3fKXZ8ejaSCQYZDy7N7qogwCBwNnjZ7uAA4YhwmHfSxhzioiozrbCuWZSY61jpRY7o4UX1PydzQA3DHPNK3M9nFt",
  "key2": "jk4rRgr1a9DLUNuAdJDzewaZ6Hjd8t2Wmg5N6tSQBBktvLETgZCdfjwmjrqAYNxveguG11vADPxp4YVvDCDQqNF",
  "key3": "3e2eSQTfQYrMB5JkGLb4VjiHVnEVA33Ecj2WhUPCoGDaB1Dp7R3kutKmkAo7t8jK4fasCCJF5qZCdwTsMa2utKvF",
  "key4": "4es8V4nmqvujH3eiWuSAPBX8wA3Fmgbx3YcDdTPE4tQNLk2XUog1FrbzkCB82JVCLnaKWBMsieXUrA6M4TLmVoTz",
  "key5": "3o2U1KVvVWmCcqoedSvbe5ZwHgjE4EtcvmG2bSiTCPYTYRrhMjc9H1oQKGa1BDLfuZJSdH8hgC493uoMMUhnV2Wt",
  "key6": "4boTFWH4ewWnxiUixB9KPm9MseizEQZRNzgi8EM3Mp6jghYi8y97vEz3KCf9ZXrpDC1yitQdPopSbLhYCXPY8X9h",
  "key7": "5HeiyEypUjwPtXPubZHaB46wZWpTL2xxpopJHT4f2bo7iLXZvH1u8tb78CJvuh7ZK4QAsJPD8QdGz8AV82ZDfMxu",
  "key8": "5hEiemn1Epb8YoPwmt34DJ1ZGa1Sm7rdy2d4ETzu14ovpCbqKHK7SYWBZGf4ddhgkGMmfZR8UEXqevzQk49n3ggV",
  "key9": "sUePsGmDwJvNoYmdqWTQQdU48LHNSyh7FN8N5X9a4dKKzNjJvRDoQdegEX2oBs7BRymMaeUnBdpnCeAuuXjTUVT",
  "key10": "q2Ye8KHoxVA1ATfwWgxrDwszgNCUnYYivJsECeaA5UdjJZfBsaMtt6qEST9qjaMGVNzXPoDKzWi63bxEu3Aca9N",
  "key11": "2ABFtjbefbeMUr4VNXBUjthYpb867cUcfTPh3KGKk3tLwEyBJsPxQJPAoy7kfFJcNfAe1AjLdM54g9ArxhZUyQKP",
  "key12": "2o6dMgmX4CJ8fAiJEH4W4uhR3h2nz5UZKH8dYG9ZjnLmfUtAtpKrwa8zNYtbQ5AKMNYSMLRmRDC7g3oED2Me5XxL",
  "key13": "PbmhegnfAMFw99PmpzeScdEL3b4iPrVikckpdepeajbmNbAbWiYcgQ4YUbUTs22J1ajqoUptebWaAUqksBhfmvF",
  "key14": "3rWtWVAYS3HTYKteLEXDptg5S1sdxtSpcB8yPk3bKzhKbPubhUmsybD7t2MJps7mV1EnE8VLuNrFem4idHxq5o6s",
  "key15": "v5m9A8f5U8wMhVNTjHaxwL3ing7cGH7PCPqRdVoCNb9MGmjry2cD58qiHF1MTJYnfHzzDENKjoqvCUbAhh7EG2d",
  "key16": "3NuZSf9zHejps2hXTonsEv2dmtRiYrrDK2ofZyzCpQxjKA7MRZhzWG1b24FHsayGyWQEAzQQgjeuHLiPqX5hPYSi",
  "key17": "3AmuvAS45YTfhPQTMt6DQeRUikEs13tZX1NTNgonsueYikv3keTUMKnw5nEuSHVQwkB4kfBxUQMkDkkR6Y5iUP8F",
  "key18": "5tsqUAT6CFLsPk3DcsnhctZ7bqHTaBnXCGuB5kYw7QwD4ZiDgAe4sdF4uWASYjWxk6cFkWUMb5izWECWC5Df2Xxh",
  "key19": "33pZf6AJbBZdkCxcaFDNLuwY2ptoXppnJCzJaGYeNkJQvyEX7JA9wTj2B7nybTbbiTjkS13JM2e7Dyvc6Jza4DVu",
  "key20": "538uNjqscUPHp2wY9gXn3jxhCg3pcyGDPdwvE1j51Fz4QPE6so2GPo1iJBw8Kv9SJUQZQhKM1jwTmQ2QGSso5s9C",
  "key21": "3Q1eik3zApoeTwivx4uSaxkvhSCoK87XLdh3x9L9jtvWAHGrE2dHHJq1Asa8bMbjy91g5Lfa7sKbfNj8wJcje6e3",
  "key22": "3cgaELi8vWfgu5hXefkvYjUoAaXyQUr9vwP8pyyR72k65wR9T2kHqae4pMSPh1gfJw4S4dkFB9NUXekefKXEuvCF",
  "key23": "46NWsfN6S41bsfZ6bh1XJhtLz2VLivhTX3cJSXGs3fD9RUF2QDtJkmHuMnA9k6TuWDiBGMQTPt6UXeo57NtJUJuR",
  "key24": "2j8hJ3CKT4KtnzoPpwaNVqcJXKLQYQtSt7sxnECAV6Yn4QpctrEiHpZtKan1ii1MEivB539LoGWh33gFXLLEzt58",
  "key25": "4UeqDymKobFhMgZFCzMZXh9CKJEQASqBfR5jm8yYUagHpgvVpwYdVEkvgi8TMZNumBV2oJhukGNwZsD4Ez8t2Wfy",
  "key26": "2wugguzwRmK6iwJFP8azgHqpWSjFm6EBDhKHf66TJ3uzhCL31G9vGqw7awpY8ZufzJdg9m424FM5KtG4bMXnaBfH",
  "key27": "5gbcva6FN1rqPGyXLJx1knjW4FWX4LmcN9k73Q9PjtCmPw5prHjJqvhFoDHXZcG2uqaUsFwQLYfdB6sZdDwYUwNJ",
  "key28": "5rt5Anj63KkZyQpGQA8tm8EDMV6BUkh8vMix7D1VGA7JoYmXr4Nfoa5VjPcxyTbBRpjHsVucbruzABKpXPvYN2HS",
  "key29": "2ZTLdBHJxvKd8Qo9HEathviRbBaRWbMK3tfBgFcuDm6iLbDmtvTujMiqBUsW4Xv2TSn6WkFTT2yQakXywEyQzASN",
  "key30": "4AUGV2MJKyhEZ6TzGK11EBsoCySxcAnRPwtig3gLSbsZvnJHszCUihi7qjiWrSe4aeWzhpUS3QaNDy8K1Pz9iAB1",
  "key31": "4H4QqbXv41C9dgaCEP7ocQPzU4RTB4DLiaTfcxxJdvnH8eHWp5HwVXQEfRiusT8ZFt4jXMFMZ7fWH8sCpyx1PLj",
  "key32": "5ahe31EDMBzz15LDZ9GQppopqCJkCpoDqa8TmRNV6iQBrs7PLfM6a83e7Msk3RBS8ce2tvRXdaWWmH6JzxoJXX3Z",
  "key33": "2hHkKYcGhofnAmT6HuruSaVBhJGxcoD51RqctS9RBzdATpVtdFHfsDYR3nLnTfcyTUDLxAkrM4QUJPDT3VCsW4g6",
  "key34": "28b4hrBd1ZoUad1F5Z8PsjYX8AmPPHQqDgEusEZYvn5Tw4aApgPm9JdF98huHYKQSbWqEBKmY8fN2VDnMyJajZ3m",
  "key35": "5SBfDXGJE39QfdxBfxkPFJEkoQ4f9L8AtrLpnqLWPSaD7wAiuoyGHqxBJhtnmWPTtZZTHfUgdoJXWV2MKkDzZayh",
  "key36": "2RHw5XqTbfLY8dM44BpFb9iQmhLxm2ygmoUR7zh2PY3Fqx7bWPCkXSNKsUmhJSyQbP8Zmpng31xa3DqMZ4aeFt3o"
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
