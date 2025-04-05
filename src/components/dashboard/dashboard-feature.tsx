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
    "54WmXhEF6qHwy4TWBRvur7X9Bf28Qty9JxYH49buNRBY2QFMhRi4TuuJVyjJqDNwxyNM8EQdfW1omVFBHbWrnRcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43VkiUfJmiYsmFpRZAgBCCbWWSoEjZixrFNU9kgWN4UwMZs6cExs3E8k18GsWPa4khtek3qzWCXB93dyhx1Ve4tL",
  "key1": "wERSQ5Cd7yPhZi8WJdZe3ejnStaB8FqDNpqSbGynzrSyWRHto83Vzk2AaXrhBZyKwiqp5m5YRqBFs51eMvAKb1u",
  "key2": "5kZ7Y9qWenXFoUHdj27swnakPgkG71MoGgVPWvKei6SSefVMu52FY11pqZss9yN9SBQoTxKYG8owQrKG7nVEdVZm",
  "key3": "4QBAspMSbSQg5N7MRMGSn1LvCbTPfZ3nsCYABu2QMEWVoFfBedj4obGD4wLuJwv2hmRywerYJC1yNcPoVGMgaWYh",
  "key4": "44g7QPf8WMuuAZ9XiQopEDXhTj8w1po8T5KKCfB1qVWAiJpoAgyjeDAQRNUbqBGFDyKLK8nqo8kAvcfrwywRH9od",
  "key5": "BaovEhFA5XRHutX7SiAqB47miJAUbrpFfpQjLkjJvATPT2CSVX9qRqvSbvgQs1bHdKomwtKgh7m7eyBh1m5cXPe",
  "key6": "ThzGFgUqdSfETeXHNeBeDTXcnKBTssawEyEp3c3GvBBecV5NoQokquqbu6auhv21pxfdFASjUqbeiAgxk2F2QAr",
  "key7": "62dxJ4oWTVoYXgPD5jQupUpQaSNzC1VBeaZtMsTTQG9jf7UfFEQTRzS4GpUZh65JYQNnXgQGhoSkNMEVekejpZDu",
  "key8": "4yd67JHEysdTSMFCNHU9cQpHMsiiPXcVsx7DBmDGwCNp4YzyTmuFHRbLao7eoSfPnPWKEAdRzEmYtQGuavwXS5dB",
  "key9": "52DRSCnEvUkzrB8JUXWWESbtECC6eSKKp5fpJVCW24w5UdALp1djBccPwMJPm9WpYVP43xXpAW8oEnauey9CUYkT",
  "key10": "5WBoj3uJnpEVQUaEeenEnePYAkMJLh2Psgz71yx9Stu6FtprqvochFjzHQqNVz6aiDyEKQ4dnRQVBZgWcNJDxC1k",
  "key11": "4UqxGy38TRRnncTciCS2x984oJT3PtXB7a1HmwZqxrzwUZPaJyAjo9rpEaVnK9jocyNzzMJiaYMHBEMKf6GzeFm6",
  "key12": "3qvxuo9cDDNhRxxTXbCSu9Guz2NficyRgxFBCNAvRnCDqfyLgT6zRne7gGRrCGj4dFXkUdrzuoGh9XjnDwtftzNq",
  "key13": "2raMwb8hRfHqSCgn41vLjcARht492Rt8PUvPSQBxUaFnrATGWzbmwLBSzBSR5T6dFjUA8XMcmHqjn92yqMRGgLrV",
  "key14": "3PJkGurjcSbJvPbXvLTT1wJP1KFF1ypsjDVZDfRCtFBEvBjDRGR7339tjFWNwL1SXmxHqYGMpZJjjHroiAErLkFy",
  "key15": "3S8NqDNvDHxsWEGkTJsp8ihcCtne4q1a4kYtjXbSFUpjHKFVAQDhNBBmptreFNudo3vSsS7DAfDuahXaPdjAzYSD",
  "key16": "NF8xLz8bQbEogmcFwjjmqec5yuqAvsgbbfY38V6itYR3CvDSXUD8qZraYLEt5BsC2qaDtrhexZrjaELdecwSWjU",
  "key17": "5Tdg679r54xnwPzgRKA9u3QZHNQrjnDd2sdG7QygDJaNXnacPNmkRcZNcYc685ejA6P2h7Ux5r4Za8HzJPdUrD1",
  "key18": "Bu3DX4dg2HgqMyDiDpXKuwyhaUfzgv7fourZsepTdpRLtvKsiksoWEe2MpZ49ftwc72o6nPEm2RXn2rMNxGpVQR",
  "key19": "274gTHQ4oycFJvprrZY1zc5X9AKgyiWCS8KY7iyPsmXaxdEdgeS8gH6VMe6xxpv3BpqA8v2q3dJNqGq79BHoS6EY",
  "key20": "dRjGWThVVF1DWNadyF8yCBSrPiDCGmQNwA4T1VrxLVP3icrFtcmtBguFpVUEZ1nM4TSbUEmuuiFYg8ZEW9NLpUi",
  "key21": "4y2p4fXY8EDFwP3uSrWbQ1YTb3CQHDYWTvhzZZDndsFTJ8DkFZd33v6DbNKcGJnjR5nzaCd7PFnfAnmX8a8etekZ",
  "key22": "3Lj1z2nnv9vjvV9VxPL1y9Lu3g6Y5w1BEhZ5s5CbcKhdWtsx9w5EXivKJ89XhXFgpJSJTK55Zmo3YKXrFbkKXXUk",
  "key23": "5xPkSbcYqCH8rhxK3VTzZN9iMn9m1qmcZp6HuWL8w2utP6A79Zm6GKeSXtBW73D2bnDZXWB519aE5fixavCo5XF6",
  "key24": "3ZNTbvUSXMZH2ySXo1uAx6Tun2YPDk1xZBD1pM2d7rCVqgbETJKXEv5JZt4CqV5RSZGG3BaawaqSUWBSwh6dDEWb",
  "key25": "62P37wdQ1sseU2VEDDLAomZi6ccSk9xVMKLfPVGBHvvdhgNUedPxDeLeC1qxkmCrEpFk5wPqMahrpHmS18Guegyp",
  "key26": "3dgj5vChr6Vvz5EUC7APTAZbH7cVnV96BzRk1EErJxWmQwsf6sddj8EantyTLKhRpx2y8vf5fPZNReaEBqZ8g7Rn",
  "key27": "sNgQde2PCnyQZb1qFks1337PSGGJ6KNct35oSp7N2naTaXkbmbn81EXQwo4JToKhsgMrAqGjUU65UauP3BfgfEK",
  "key28": "557VFszW1MbVjqoZ3ydW5JifgnNopF7y7xn7bEwCj2sgZ6Ao3ncVPNrC33G2FZMZz8so4MkDKGABu9wmakrqmMNw",
  "key29": "45tya8RodUECe1hj8TrBXTqhu5jdMWm56oRd3dmJUC3JzLvQvDN9rniX8XVTHXHcLuNJyM2zAWqYGJNDPeFyXuBw",
  "key30": "66w82B5FEveQCvmtJrB256qmt7GvucUbjyTCqtTzz5g6zVN1QadNMZCxKLpGheCXr7c33ARjvY4HisrcXY73NppX"
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
