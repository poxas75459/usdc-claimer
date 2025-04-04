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
    "5iVfCZBUjVJjaVU7Dju8p1cYUZitneeQwatHUM3V96WmzoR42q5VXKVswyiK11x479XY4W2VVVKnhmzvJkdYd6mN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42s9QyxJ5npg4HcCHX5GNHUqsKMfHHP3o9Ggi5ncn99aQhg45rWTDXvAaZ6aEzjjNXR1reb7oNFKzguoctT32eab",
  "key1": "2ThQK9G6AdWFMYwJKaZoonNDsrUgQrTs1CjARP4E8CqPp2gw2GHNrynXrv7xHdhNwrs8B38ixkwvs5N7J3Dz73Jg",
  "key2": "2kJyyMELBvU56s9PVmv9VfszJWEBLGJuy8JWBw9JmMwPsTChJzgxYC6vZHs4RBrSmphMnj38QyAvWFWSCykFGMH1",
  "key3": "59Qu7mCiP5cPSjGWj3NznVyGXxZ6i3U2u3FDMMYT8JRBeF1vzuReRkPsSF9AHoeXHJycDKBq7sBv7jt4ywwCYoNG",
  "key4": "3uVkGGU2jL7SXLL2mUJgdVWeGTTEBRqPq8crhscrAwD6oSA1QzYPigW37SQtjNBSAjqwn8s38ZedKZz1cEfnYVzD",
  "key5": "4GWhJ7en7aWoWPX58Zy1KkTW6SMYPMQQYSyfUEzkRKn5BRidTwPX6gudMkH1Bf2MiJgqEKH5UsYJHd8Lxu4sTVEQ",
  "key6": "6NzwgKQvnALC54EsPHPVQthNbMfMhc9VykGLynxewYGp9qWyagfEHDHQZxan52W44H5vngvHnPhUwCVfMztztzb",
  "key7": "1EmNFTKgs1WbGGbe19P2DpLdsw64Hdcr5Lv1KuNdAnXYkvLVsWwNQ3KWS1TwixMrs76W6NaYn8LJSdD8PM9ooC5",
  "key8": "QJHqFmUbfpTUJPrdALfNhRb23DorBzReQUF5k8kegeT1govJ7FyKBHDJuPU4hvZgVkbePcFemQguWs3yzLztyF9",
  "key9": "2QARLRhEopdph82aDs6yESTjjzkdkXbt3ERm5UEMdWZYhhSMnq44pXzphv1FYvgGJGzEbHc16cAx8cYgsFb1M96q",
  "key10": "5oSyp7p9LPiuRrGmpriZ4vPmrsXsBZhse9aH5951toDje1huhL9hPGx98i8bvz2P1oMd8kQGApKA6ADdiGZu3HRZ",
  "key11": "312yhFA5dThRdi4bQMX2mN7NPt6EWgHMEEQoSMv6sPY6JQ17enQaVU3Yz5HWkNK7kJvWU3YY4jajdzpdsvPd7zbq",
  "key12": "4G8H6HdN2PSUjeY7WVFhHfp3d6Yx1nGxUXbCr4RZUd1i6iphYWAqNNrWV8cyMDbwH7pe6UdL9Dy7o9di4uBwsSQd",
  "key13": "3eeTvPejtD9w8iNxaXYsj9uAWfyrVap3uPWEuRs6bDSm9HVLAgWK5NansP8mGzUBHDpB7wfZ6KL6QWResfwRQWhy",
  "key14": "4X2FA8Dyo9w5YPqpeoLzTsxmX4CmYuyiNHQ5jfULnLUnsp8XJFTRbWXg6jowDY5JontEaj1TfxxuAT1VGNdoHh6n",
  "key15": "GgkFDxJGr2mcW1PpfYsnQ6EVKRVvkXN2fQ3Zbm7nVL2GagG8VtqmTftH2q3EjA3LsG5LMi9XhRStMYzuKXzTp9y",
  "key16": "4fRDSqFo6PFZvuT2ZWH7SdYtSVB5WSzFqxNp2L6CHeAFo3BTs4s5zQpLZTGz3TnTmZmmFMK1xLSLQwFhQ7PSmYvV",
  "key17": "4LrxQQmn2fWLodgboLmWzy2d3tZf5vg3FokS87sUNSpZyxvYYVd8cLMrxuHqYeG9ZZC8tATXd8hvZN3xPWs41p9r",
  "key18": "q5KLanepqvQq8zPGMTQgkS663kmzEc1Deew9fD85c2fBUfmpbrew4zJgtCEbzQyTa7cxiDbuXP7JGCtGsFKVfM6",
  "key19": "Dai57mW4iHkSdMyWWhozqxJZYAbSTr8ux4GqvNT1jKs3qFjqHZEta8etYonHB1Khwfqxp9T6mtYhM1Ko3c4vLbW",
  "key20": "5ALoqaPozhnwV9KGbW1NYw8D5XjtK7E6T5XvKESYa2XAid9QczzaMAYoxpJyTWoqyi5yUcfKGrQVtSuXPhybXPY",
  "key21": "di6jmraW6xNgE52aSz2gNstFQe4cfVNSGzJk77phQuNEZtu7gD5jSFzG3dLy13rPcGM1yhCzARhYKBLqB1bsNpU",
  "key22": "5ioAKjjeR5T5x7HcnaauiGmkgAzoanKBHJsh5ar6RygdvFEKmgt5RoAudpmuAwz57xx7JevFAE3eQzf8E7ohG7V2",
  "key23": "3UeecekuRjgfieeRiFztXAspZwNhHJSYgAzMix4qghB5Mo9w1F4QCbvHfDYDeFRPofEMTMRR7eU2LpLi2AS646og",
  "key24": "xAb1vSchTnV5tvaCxEuEtchgKtac3VgwN1B1ySkdj8itP1U88ncSuxmoJBQo7vJCak3Hro1woWx1ZaY16gqnJuT",
  "key25": "2sma6PB8MxoG45EfAr3xTNZbnEp12vTJmWDa4Fq617AkdQJF9GcZVgKev9jr4Jp7MH1TTLkDcvbQhEDedosX5Shv",
  "key26": "2u5ts5t6zb17dFLhYdPmZ2XGKRCU23GwTknqLu7N8sUQURR6C8hKRpX4mrNpy3bwboVADvMJN3EzZpyu4BCLMKKY",
  "key27": "5g8ZXE2hMhra9aod9isG9HJKrDJMWCt2vTc7BogrXna69cB7V76oVug7hoJpqPnYK5SohHWJuLAZMJ5XYoyfj2ez",
  "key28": "492YRXcq45sgtbEvkpMyPz5DGrnD4Y7PbhydH1SV7xHGR5UKKnSFGqrWk3aGHgsSi1nzEwoskUrfyDKiGMTxEP4p",
  "key29": "4wuqcukRuKjjEHvEMcjjEvKDfoprrTEucTqXTDEo9bsMpsdHHpZmuMFRn49G91aDTkmtfCHX5NqzxTcbNSZU5b1z",
  "key30": "3wfLSErQBxxmyHwWRnX9qHKiTSbeKNwXLKUe1K6pevqyjQ6YD2aHMwodBC6HvgnnEegfEhx7fVhtGgcc6PsYb4VD",
  "key31": "3TmXwLbnBNrH2fVPtwJMFSr2Wr9dAM5wBX7rr7WcpRFg9vCtqRCRm6EnKsKGYxKF7n52Ljf8fiHg6Ue4z7VDibYR",
  "key32": "khVzAdkv9n633XnD2j1q3Ljnjo557JKSu5zwwm9RjpPaHRUgekb4Moo46Zyk63X1i6z3T7UxxSL1zMeHrrU4FRW",
  "key33": "3zcgryYCv63jVrcJXVy5GhXCvxQ8DbGVrEsmuGChGk4N75t41rr7ZkgX8zi7q2YarzXJfi6AffpzW7tj2vrHsQrL",
  "key34": "5zQqGvnNB4bvXK9X2BK5GddtwEVaJ8GM3kVdRqH2ui8FPWQXq9ZTHRgX126D7dKu6rhbTJzrtbU1ZuZkxZFmtxtz",
  "key35": "2dyBnQPZ39foMpnYdAVMYgMvpyysP6e2QJDWEg71zcDPtMsdH57jyAZgSAg7NjaGFNTypQ99pJmyDcENiBXwpmV6",
  "key36": "5UtZv1FMNhkk4qVZdvAFqiddLCSCQjUXLVuiNGaZ6X3caw5K679zC4snGzXpBJbZH6sh9vaYteME99WRkMz9xEMe",
  "key37": "JMxWTbddfJkYK68CTfCaFRvCcheVSd52XrzxWX45fLmEzb2em68yE7h8VMonYLKgVARxqjXfestxANWG7qKnu6U",
  "key38": "3n3H1SB2e39e5Xvz1UvYZ1UDNnLVxkA6ViCoL6MX8ni5MWkeykqFKamErUwkJdLobXHVvR8GuyE533VHSRmmTCvD",
  "key39": "4jrZnG2dTcrhuwxwkWV38esceEbtRYMVJCWAqE4kq1GYxPwjfHvDj8rnTCSChh9YDLzs9LYZrVEerM4VokEhZRsv",
  "key40": "4uLsAzSLRb1ns3yHiMDA86mwNy8ZeZryQBd6VY972DfYnxor1E3Ws7Qq9SivZgWr5HxmXWaGLmVi2LM5uQZvMUwz",
  "key41": "2GgqH8Z8cXJLyRr9mA6GpLURZDqE4Eadx7DL5ahTK7qytWYFq23EuooxoYyUJ6P8Tz2AB7n2n7PrR25YbPSD82YD",
  "key42": "4n9HZDjAodxi2ACsDJBsMiVoQRio3MWLtJ714KiMHdN6ZEjh7qKYEs3JX68j34J7HCp43DMrvq5MEo9MV26xfdRk",
  "key43": "5v2DP1nDYNojMnFaY6cVkUwtjrM5hbv7w1iTRo1wCHoZp94nDYKqSVNSB18Pep3vMJopWNkiDFabgRvBkx9NCwcX",
  "key44": "2HJQzyh2KRs3XHJeUt2g1Gk2n5MJJYRkb1wGdDujh1xz8he78hhrhfv75S9U1xbkaduG2hMpXLyefN3bWbwGCAmA",
  "key45": "35Xq4cmjeob2mh33KWUoqd5PQn4tcPjNX1FNZZzwA6eAMP9aZnYqfSLY38f82ZEjZJRGdkiP7qxormox9wDGCkdY",
  "key46": "4quJp68fJqdqoNYkcqwwa1isxz39sPLG1f9LQgZSQ7GMf7EtCi32jw3gDPzVpYPoyokYYnmfDwTusPRGaEvGLBRq"
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
