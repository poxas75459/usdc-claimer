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
    "2MXK9G6Kcmok7Xfh1XY7CpS7RpQr7ND6s7EvswZBJ6Cx32cbaFnJWhpCJTXr2PFMjNCKHKuSLghWjjJhDek4RnDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25mcjXVEF5aUVXY3daa2t7gWa59EqXKBBuzGkjm4VDSr7rZtPScx1F9b711c2jYDUQGa55CpjMxJ1hHHc4iUJiBa",
  "key1": "ZFuDrL8QoGRbk3ZyDohZ84Ng3dY2zWAKhBGyzLmWwRr8BpKVuXWYktzPDpALr61d6oj8xbrq2XEi7u1iMMZWQga",
  "key2": "5sgFW9yxZF22xHTJVuX877QfaEr3ppoVLz75EJLUvNutesMkyUSTq6biuQXeUHusHBFauYMs8DDzyFqZyTRZQDUs",
  "key3": "2zaDafpohDi7dZsZ2ZXu6A2X7WhMRhVA2MqLZhAdXoJuDqo3Z9w1QJHoqWT3tJwjFpyMMwTEAFiEyJkmeNP5bk7R",
  "key4": "7zaU7UmFsKxFSSgTbukRw2qPE9gzRF1rV4rLVrTbWSe2fjXmdkqNaBedCwxGDHak5xDr4Rt2Et4raAgjxhRdow7",
  "key5": "2YozfRra1nZNwBJw481yUrEbrb61axcv7xWeUzxdZsvwWJ97YEFcngH94zfGLFstPCyyEsY9oYAao34jV2rSUAa5",
  "key6": "41Ab9yAEz6uEoqysGycbSp4wEBvLdJEipM2GubTCAF1qazYemmb8b7Yzj7CHEDCX42DhjpnPTTrXyrEQgAqTT8DM",
  "key7": "4ySNcgqvisHMAKzCkfZbvTREXd7k8fSGkETPVbS61Tm4ax3qeAou7tK8juToAEuFCz7C3K28AZYcznmMo6mzmM45",
  "key8": "5ue69MhHjo5Pu98gbxWdqjLnFMa8tDPzn25z1VyGXEAAJ3bWk769Z4R32wcEMBMga5ANC2S8Qs71Ky4ufra3v6cj",
  "key9": "4pmnpDtk72QwZtMDSj1TFUrLLTs33nAwsujNv2Gs7dLhX1mBVSSw4JQy7WtTWSEMxFy33HgDmeDcgfnq6JqUV6Rz",
  "key10": "jBx6USSfn5wwWJGLpfiHMFHn1ncjmPk478CC3BENKvDkesduqqSQyiXGVF6LDzF3gY1uLsa3yRiwpWPxPDyQj8r",
  "key11": "tefkS7Ma1doTWoNVoQANDrsCiLi7qyEAwGbZpFN7wzgRxfNs4p9zSBJqEVVcnh5gHPygw2wWXhWN9uXS5Yzcg6A",
  "key12": "2T4fvkQW3bxTNkEHQzBaFhHZepUPhd1UcEzWJCTxaCkdpNbrx5QEMdfkYxYHFVX8b12DtZeiCUhqk7dKSBq92ymd",
  "key13": "2HRuaMFKZWHP5Wvc5jSLg6p4D8JCynui4d1RgvPxenLPkaQXDhQDUdWwfzca1A1Y5AnynZeZGYUVnwrxvZ7H2K6L",
  "key14": "5ChygWnyEiDgD4m6o6mB1QwsEh4HrDZx9LEHL4JsYrgewJDmGY88C851C8pFL58ADRUQNDvMz2hE8945K3PnbBCq",
  "key15": "5W7J1Abwsax7EG6SApv7WbTbN6yXx7F8bdqfUWgoVXgGVpHztBRZdBciUNGLzJ9cSM4A5i98p9yKbxFjuih6fHfH",
  "key16": "5bwgZLx115iF7oR6bR1b1RXy67p1a1y57RUUQgkagCLwLDNuUrFkRACC95TaHYgbkYTqok5jHN2rg9nPmUjh1EWB",
  "key17": "4Nj5LcB3KqqtRejaFsjWhEAPZFG3RG3TN4nFvCcrQ2c4GaaJz7CesG7K7Kn1WjYgpi73mgZsFyWhZtcdw6kG2LYi",
  "key18": "LyNSUrMo9MHMGkAcmBL4UXu5swv6cjuWfx1cq6Ry2iBwxaPfAFE8NCRii3SXjCaSgxJXBjyk7NdeWAEYP3RaiWT",
  "key19": "7HNvhm4Y5tQxk2KyaA6wBAw4dQjFndRhRBBnNvABfhiL32rwsAw2Gi6QDsT5JLsHnUDFCYevb6TFbEWBoX3JPLP",
  "key20": "4Jta36jYLLhfB3B9cHBMNbN3Tet6BaxvgMkEY2s7PKhksoT4vx3NXjGWhAzGpH5HZYe8LSoGJ4prsvWgaSSmW9k6",
  "key21": "3xmERdfCwV9A4dp6MSsd6zpVubLjpwD4SZPyNXhk8E4HsdKvNuch6p1LJM4hUW6csvtbaVLUn4NVQ7LuUt25cjo9",
  "key22": "4EZFSDpqwY1Hjp8gazAiRpxcojjXmwab87m1swGT7nhexpjDJqTVUaoAmMiuW1DM3i1A8mjP44qt5Qhkc5DqAXoe",
  "key23": "LQfVxQhjRK83Dsch5GfnHrXHWMnZz7HRNKxSRs2ZH41MCanEPqyN1j72DBSWN4VGL8NbrnpKhBaXxFLbqt8S69Z",
  "key24": "3pidAY5SvN4wh3qngY7zxHHyboEktqf2idd1RXsuxEqCLUiGr8M6Yecg3WtAFheoDKKGeN934Fgx2f4XWGkRicw3",
  "key25": "2bZry2ncriacu6qBooEZPYoeo1vpfrpY1VoQw1keJLKfmX2zjLLthL8PcSbCwSih28tgtFXFYYxELCsdGgKmp83K",
  "key26": "3GaS8K8w8vVUoHFZSZ9HVtMMNiKRgsr9HRwxwzmYM3Mefsymbkox9okKFKhL6xFcGU5Z3nPSdB9ySRuipJ3q8YcH"
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
