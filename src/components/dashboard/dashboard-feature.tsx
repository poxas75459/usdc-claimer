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
    "5LC4UNu7tNEcWtPup95NLGfYEJme3Jt5gwpcDSwngKD5aANBq67wXvCquFso1Mv2TZPzhr4gcCuqYrK7m68PGhTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xt24ZiYQT6LFvyVB92mDTjjgThX6Dr6ErKvz1pRvAFZzRVf8RB5NKwYAquw1GhYXZhe7XNs4wuNvf2ZE3LP99tx",
  "key1": "5yW3nCUg83L6vejq7vhEqhETh9swfqRfYLMxMy6uN7gXXzZv6nZJmD2KQ2Xfbk24hJZUuPaqvbPqvXBDR65QZiom",
  "key2": "3zoQYz86auupKbS6Vffe4ZHT8ohNUbSCQUpTswhXBiCxGCH8WLLjqbtRQzmNidsijZvFw8w53rvZYJwj2mawVYMc",
  "key3": "47eEK1d4eG4PBLoYmZ5s96UNVmnsnkRZw3U7C7HZo8Rx86PjdJYAujboA8ZcRwVPm4ce1ZytsnUpmas3j4BfuyJg",
  "key4": "fkmDh43eyLFMHAou5hgus5ocNQZ93fJe3Zi1YnpF9z2fcGjfa8uk1WAhT3LYEngUMQPENeXZvqA7XagvZfuoU3v",
  "key5": "44uQ2LoSsQ6hpzhZBBJrpBfZtU9hApmJAxzqhGxpuhEJqDvrtDuRWTRshddLFJJDuxRdZiz32xZ2tHWKBgM74kG4",
  "key6": "Tau5BFmrbQgvuRrgvErFdb27uVqQXT2eS9e5ZT2fxsUxrTBRbvAyP3fXe5MMTyfhv4d87c8wCc37QxTVu68G8Yt",
  "key7": "n5p5ruLBUPnmk3fWiytotLxC8BLiAExgs7NtEouZJLMvUKm6MUTN2BbQsRRYvH35uABR8h3r81ypUxhYYdn8cpq",
  "key8": "5iMystueVMSzhNcf6ZAQtzurtUHjVTWowJmyr9VW4JWBZVsXiP2NA9wks9TUZwGWHVLtt7TYHoVqXW3Mp5MsvoiY",
  "key9": "5UuprNErW9HSgyGN9PiSYVPV1dBDoKVJbxUE1cYVTE9WxQ9zaD9XaG4y6xHyPRaRYuy7mwfyVL9GruqFA1SgbUnt",
  "key10": "43nofNTmYJgECo1mobR964H6ZsBJM94HGX4e6AqfTBpSSkzC5QgHA3FNBXpgmYoF3iF6ma5H8WhTBWCdBcgRhRjV",
  "key11": "2CTAEMaiEzhv4Hj9ihmxmtg7jgV81L9Jp5Mppu9acAUhDSZq9RzoEhW3rbtymRwWbb1ZVgkmVYAamD3XUCyE8ZvU",
  "key12": "4sAoA2RuSc15LiEGhn8o5boBgGPkydeCrpQz8dEyVuGamxMzUCL1PnZ2sY7Fh8gwmHqG8fEhkDZzFGcafkd6xhae",
  "key13": "37vpPZ5N4tFpoWLmUFzL8AMkSQvMVwDPi1rW2mJQHufaTb5oGDsqoCC7BpFwxoUbwuw99xBf4L27hAXD33WS9HZ6",
  "key14": "E18oggapgRTjjxU1eMVVoeKeEvftHx7osuqCsrRsQ3Xskxk87MLRC3P3RuFDGjXraqxN5errjjLogio43j8tkMb",
  "key15": "427MKquVzQvZKpnhX8VuecJvFUbEs6jqij8X1woUoRd2c8Vr33oPdq4oAaE81kxfZqY4nWojqjsp4KH1hkWhad7",
  "key16": "3LjXj5ejxN5shrM3BubS4Q9sRVYy7EinGS937ahvXwYcWvDguEHqpBZX76myn91tyr78wQvScvv57N7fghS7FGRg",
  "key17": "52afRcyGeaNwCKFaX25wVeK6SfjaHhqu4GkyqzFsWAy1AB9uBRHJx2qmJNqgNNCRQBoBoNXMeVqrTd8iwJun9oQD",
  "key18": "3pE7JDcmLisvyJuKqa16Xt6TmMVyrCc4DJFuFPNLBoicSPj6Ug1JHzjq9RmqAhG3eiP7cVJ8Lm8awEHWUVUkmVqX",
  "key19": "3kLk8cimm6AAq2e3ZeFzFPG4AkdFxLBcqYUSi8kUX7mE9M6VT4MFoKbekeRM4KqrNaaGRTEfyCK7A5MgXoGa8s7r",
  "key20": "QPJwejZMFtxxEPWYCEWo1u2hyBVpTu4r8EaUXxG7kpsD5fmsk2DhXwnts68to9oKhVTA3MoygQ614Y1X1MU5AFR",
  "key21": "4KacXCdc5ArV3VShQYmNEv8iZ8FXoHYpWnNSLDDQBJvZtaXUpCarpJ7vKnUy7c6EnWeMha4susTzi4KTjHv5zs9P",
  "key22": "2FH7rCXHwA2QWxCymQAcnDHRx2n2XBp4Y8JiTcedqWthqpPAkF72ok7AJADz4m51FtusyTfJfUeeW6xbdxSjzFnF",
  "key23": "2EvwuQsy6Hrr1cQz1UM8HiDd7S4UrMToyU61hWNLJpYAjouxZkfNgB23az9Z2VBBEW9rejLZvoJafCPGHULvyWix",
  "key24": "4DEZcj5H1VuAwdY8aqsxuZx9meC9ofRcHLsqTnZ9jogGgrjVVizbKC37Z6RNEUyZ9i3LuKtWVRFKcvcjSHZrthPP",
  "key25": "5raxHAcdKVrRkBXdvoyhbm6noZtHp2kD4g8qoeu7NP6ARSv7oYgA7SfdNa2PzkNVnr7SGSMw7Lbu1XiD76zt9tfa"
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
