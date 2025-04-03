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
    "3S2GLv3q8neYMshir82YHnL8XevhacescPgWDeCQUVVn9MhjHDZ1CDbqC1fJRfLg9uR9NWztpBR9EbeDSmvs1Yba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BR8E4pg3SG9GXdKzB4QgZ2bJApru5Z7AwGS2rMXeZM6WiGGvMwxeUiBRyMnrNdNakrM7yc81YC96tDd1z664sJZ",
  "key1": "9YFufpF6PKpgQm8qirMhgdv9trtohM8f9R1DCihVrqA5grugAtyGen6919iJLHyvzj8FWtnMjTUJWkBbmFz7Dx2",
  "key2": "4bY6dDCHNr3Do7uEHBWSbroVvpYUFqEGwmZxdTrhmyPonciat9zAiXzGYzJqP7HiLTmrJ4Snkdy7Y6Jfr4FLSefW",
  "key3": "cDMZT7sRnbCtMfgtJ13Q1zYniPPyhzqaMt92YLvNGpLzBgJDXW5pcUv9Q6JzqDQFdJnW5edxVfThweVqe3jYsXb",
  "key4": "2CQhcSeJow5G9vASTnvzvag3b7jeQRRCUVZPEC7NLeERwWTaQr7ve3WQnyCCnNok9bpKYmfU87PLuF9TEkG1dCb7",
  "key5": "23NJLBWEcDciTknLNUwYDB5Eo278wZhKYhhTNpMUftLoWmMGErouDaU6s7L2cfvuMrTjWZPWT1E5BcRvGyXhzqS2",
  "key6": "3ieX6dt4NXuGwmwtJpSViP3ecW8PCe9h7orSTHGBt8WumZbQJtDcoYFhhuLHwuwYwRFUeFEYEhTZC2aBoUJNwTa",
  "key7": "ANhwqPFXCRGsgfSSW4NSgMDF78SRLToGaCtVmEF7beqc5AfSiHYB3k6JtV8s23jyxTkLqYyTmhsMyhokREVSDVR",
  "key8": "3zUZRjRgtqLnQNiMUwVg9FEYXtn8c2yv1MERz3tAmKVH4wHpNrHkh6Uqyjm27aknH31sq95h5n7AhGhcRgP35HrJ",
  "key9": "3uk7sJQnYcedZMsMJoVg3tzdp8hWkVJP2oCuYkn1GSBpY4X6v82S5advbE7MxDaLNkBDBBdzC9KVcsSC6BdwhDzG",
  "key10": "5o3EhsupfZGYce4DENKWn83cJ9usJyRyhMrrQ8jWvXuuQURoohPtr87Riyg1rkm5kcs3NoEE9ebHCBKBHhLnq7to",
  "key11": "WNpqJCppp1zTNymodzndeWbGVufutbLYGqmhwhL47qWXYRU1xQXgMgApiz5gtNhwZWwB12H8BSPYyznBpqwmtrQ",
  "key12": "2bCvppGT4FUcTvfH9hRAt1Yqr5HtEyfB1jFyaxgDd42Fpfk3zbFmqEUWSk1SCLd1TXZMjR6iRzAfuwPDhEDp43Db",
  "key13": "5iBTwN9sp8n7SASXw2sA1V4NrXMCAuzsL12rzxVBerzyjXCR1q5xkGF4FWYgNQCQU5gsEJcBW9YmnePZHiJcuKok",
  "key14": "4wJjbTiApiMT2jpmFyhRvvX5nWLRg3kUxMff3K2msLuAPkYDiE3vLFVo22hF99pG9Fv5wLsFzQsDp5t1Sj9sX7fC",
  "key15": "5HusskmnF5XMpbeZf2KRzxFFASKhuxsFqvSE9mJQ3TxYRU4Ls3eRuTtpU4r1Z3c7QxEgzwBqTTeZfsfEicFZ5Qg5",
  "key16": "CKXpEx8srSq5rUDgvrg2wWUUJSi7ByFKgiFqVxtzzE4LuLprcfur34qicSM8HeSHsF5CcgEgyMJEGLnw2WkXTM6",
  "key17": "2bXJuZaMHetbHTy86zAvWYuqZwvBWAaSMuJCXGc17A6Qh12MjwkNQWtoXsgrDVkbTdaAX5FF69ptWYahhT7ngUQz",
  "key18": "UT5yWFDUxcw6PCDxcjMwARkdJQmZPgg7j5bZW5tHTNQ4GP88k9kzRsZ7FJkyfZrQRL5RZh6dssBvenWAih9zVmE",
  "key19": "21ufQntrAnMqcgvYW7Z9NY11mzH2WnXVCA6mvMKp8YKs9LssiK9ACYrdyyacJHcSQr1c38PJ59nFWf4KRqRLykK4",
  "key20": "4k2GNTNJ5R9iJ12kwhKis268uDrixvU6uoFjnrCM9NAaDMaYwvVtQyBomkYqzX875sjGxAL8rBmeRw4Su2W6iaFQ",
  "key21": "3jKsNn857AbKH175QoYUhxG8gKvTG3QB99tBALnubAe7kdgS7TqbvojYXNdjs1jTyT5Ayqw8QWNKPXbfQa7Mbdk5",
  "key22": "58xDXJ3u3DGB4acvurkEj2k1DaWtpPfcphiZTcrkJiofgePkNPVzDFjDZ6vk13kYPdyWdm8WFz4HWstQBLLMbBD5",
  "key23": "4DeGiYA5ihuk1y9arwh3eQ4FdZdKVTpCnYgachCbBNrpt9sAVwxYdhr3tH71LSNp8aLTyLKeodmV1D9F78yjPq8V",
  "key24": "3c7CrZAHyjuZrp4SayrFbVNU2R57YUvZSXeuq3dhuzq2z5A6f1XQnhMwsWTRDm9MeCBe46mFL38Bt7oJrhN7raPB",
  "key25": "gAnvjvt1zx7FGDFRZ7tfbEqJHNYiFhue6CY2xnbG6qVhTF67FZwsjfcLfFL7XftCAGHxBdMfK6pnRt8kLFWk69Y",
  "key26": "2jkmz4vVcZEbX8FvCTUSwS3EiSgVHm7Ezn2YdKbdwmYaH24YpzQxNf8AV7AWFriotdwhszm3CDZvGS4EiTPmTF7J",
  "key27": "3FznXLues5yrkTDp5uoURfmgT5r9VoRexCpioqmw4spPTwqY8K4jX1EnGfQ2G5SuZszDbMqKaaYUU1qwH799kEu2",
  "key28": "5dKJBy2ghxMi4u6uXbvHPYxzbkPHDqs39Mo1gn1XQMUWHWiQZKGfEGuXMf5WCAk588357HiiQrRXBSbcCmjC8mCU",
  "key29": "DPpLfMYMDnUv2Ybyd6tHN3zythCRHTwBpo7a85FCxtf45r8nFr85eDeXuJTQ6utbBuMS37duG67RJB24yN6Shyp",
  "key30": "5WeExfjrpwczqbXwGt7RSAKuJtVhveTpgSwwJSR4osjWtbJSarBrTqHWnXLRZVmi2S8NnVhTLtyB37HYq7kNSRof",
  "key31": "44Pbup4CPJ3EzEhofRDXEmCAkiwZDTn5xTCSuWRhpRdoSPLj28Rn2DC4xQvU4oMgwqyv5BWkyYJsAahczy5rSe3d",
  "key32": "5HA3SrtEMEJPjcmP9PyRLwzTR7G9Epr7L7aePw763CVKiKoHy91dQRrA2P7rbXtkD7dV6sgz596jDH4jj17Mt7ts",
  "key33": "2RY1gr6PL7gpWNchUZK3fR23NnxoYyQeWWymZpRid41oqjPu55oZ9rM8DU6geEAEEpFKzdUbXDDQSTcEKwTxPpyC"
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
