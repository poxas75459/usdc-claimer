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
    "5ZVQyZBrvqSpUMLtDc6oVdKw8fn1PMXJPHvEEx48uWY3SbUoZDXv91piZnRqMUb8nL8JKhVtxbVUVHQGiTRwzwcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hUosejL8GdAXWLUJZ33GyP6f7G7Y9jTReEWegRTzanyFq31mpARyhtpEzqjjZx2D4yVA3Ph62AJx3FVLrFgLm9E",
  "key1": "22ZQ2M97V9pfrFvs5vaPTP6Ad6LnwyC3BeexZTdNMfx5mxVQm44ceR6sz2ChJq5uj7v7VzzpgY82wzJ4DCivjVLn",
  "key2": "2GU45afWNw772cwy1rjxLtZMeQxrGo3iCnbv26gEAa5CUXngjEVXZ16UMW91bDGUDyMym6gmUN9tqXhwuadkmEEp",
  "key3": "42VJiNdTWyh2H3TMv9zR1QeCd3BERyVujzkvfGUmg64733X545cJjZS69yjuAMcYUPtxyy5EvQRDsMLYTpm2f9W9",
  "key4": "52vNpuTAh7SA86SND3FM77B8aqRkcuT3ZyA2XVxziHNSgvLg9hibYrGKNxN9rLHiy8HYQtSQJvnesDVEu3D3cBsR",
  "key5": "2oEGm2xrhnu53LNJJHtmh6zWYvt7n3eSPWfUhKuhywuPeqsjWP288wXp5PeNbR6qzTc8z1wcUeo21FUtNVt17vnt",
  "key6": "3A2UtWR3unV6dAuVHDHPWKmddfBKwyYvHzMK6xLNQvyRAh3e8XrgJoGoQEVEkSWNPw3b8ajrgBh46yWtq521okkU",
  "key7": "3DBZafXi3tpo1xdefCMm7EzLhmAde11hGXenBDNmGnqE8qi9acRWqE2adZecz6aE43Pg9BtcU8CimS6KzDpAcGp2",
  "key8": "3K9irRSxd6n9VBpMEFdQsKXtR3HHhdBZqdXmasEEWPSZVYSKSLGPmzevE5LwNq957f6eKoRTW211F2djsE9PNXbd",
  "key9": "2cTK2yz1FrKbYEwzVm2jZ1CD5rR5ZZno4TBC8i9ENzVBrZU1Dd5hnpoM3mnK4rXpwZYTrhnkYX5TyQcAagPo6r7L",
  "key10": "4yeFKA2CnpdktZmnRmj88ht4Ezdaq5uuCXTmcngyD7x5RXPY1SPLyRfBLqW4Zt1buJwaYC4Fb1y5qe3UkYC5Z9ka",
  "key11": "2BSzzjLRd8L2LJEsS3TqdytfAEzxFG9SwtcCpJkiWjqyPzCgGXB862tzaFuypa4mokypj7xAqxfWF6w9nwrRQD6V",
  "key12": "4drKWDjvMtWjk7kisgmgi141KvcXuis3QC3mNbtWVoBM4a3CjBGBuLTsZcqZmsgPKNLLGEwCxNwNXsAdk17nsZd7",
  "key13": "5cTwWPX7A3u1Ue4bpp65bbym9R5EeJjMqLLqAvZyYZHNA2m5ujTVxreNEPGng4RFWajVLaQgKy67RPW3meTyZueK",
  "key14": "2LZL3rHZChL1UBamkSTy8evgaffm9Q1SGf2SsfXAME3KVtyTD2YzWSypFq3hJBSX57C54jnHNrDFRk3RMVKAGE7H",
  "key15": "5upsSGFnzm7otPR6377H6coPoFH1okiuihh6FsoAUJmD8dxKdGVtqZ3bcKmwGfM8kYKTFEDwwx4bhiX3JuWft4QS",
  "key16": "2VEA5e96nboee5CCMXQy9HMUP1bB83p9LXQADJAUX5rET2ZCypSx66y9CjkE17dGEShwD5F1muJhQzfkyqKzS1nQ",
  "key17": "5FvVfMiZcvLR2G9ciHyXSTjakX9i6cXHaWohbBCDFiyedqVPxbVxb8JUMGdChuzHL5hFEkzhczFu314A42fTF5kK",
  "key18": "4RVRRnpanxa9AbwvREG32n4PQpmbJm2DCWN5xbXVYqPUpdnbDQ8cvoq7VDtLC1vs6o7S7UfBodgpuciTognEuEpQ",
  "key19": "447e6DuDH2gURQonZLAtRiMZDhMzvZ4wVpuHK15T4Ugnzeh9fe6pZFpbvqjJexpPfynGzHiAu7JKo5GJnZXppRpi",
  "key20": "3FGYFfUbE1kSV5HHwvHM6DRiygdVmVxY5cyD6ZcMjWt9E8g4opUytK5VMtubjbMDHw23rcaFciRUxq5SLVPHMQX2",
  "key21": "3a1gyYsckjgvrN4cjCC64H5YedpaYBuycT7wSiuBrN9s63MFktFxabqiRBnqz2bgfNLq9KurbqwJG8rU1zrCkGmH",
  "key22": "4Pwip8shdzJKXeth2dLUX5rKok1BwLpowaZYogbHJYE1rdRR4DyXs1Wf7PnHk8V4n8QThJvfWcDeGJv8bcgM6CVC",
  "key23": "3Xq3fufxrSH5kgSNoTrciR7z4nEVRfLA5B8mXjLqtaNB375HfF7HkavzgbfERcxEGsQjSbm33h2Ar1jisEtbqZ3d",
  "key24": "2dNQFosJ3b75dof2ZcZ42ymDmpqNzHHVkiExD9N6wkms3KZ6GbfzMbVDMspZ3ihLmPbouVLD7shweQSgpH3DA9PB",
  "key25": "3MdGrBFiRzZWihVAhxQucV7coz948TKXyRKx2MGPznBvUWYq5kT3kAd6eb2hbQxCJheQu7EwNmSkxtLDKWUM8ENf",
  "key26": "5x44nSCsiDqyTpoDKzjEdYRGk3pcn8ydT8cAzZeCygu5oxKeBoBSpq2xEyz4gPCLcS3qEM4eSGYCaMrzUtGbdymo",
  "key27": "4jVuBp8DPXJB3bwzjrBLpV2pvxZDAYBSoS7sfmczSLwdjm6Qp5pE63bmZ43dFfURMpzn9orvZgsXkZnNJqGJ3zgK",
  "key28": "YyjwkV1oqKirewuTr9hvdQZSvhxkM3v3Z2LWD6K5MoU6Kx48eNaortZx37cQs1B65qMVrVFP4dc7oz6eB6AsMVC",
  "key29": "5W661DnoCGPwf9A2Wq24pWmuQYUab4HQAWgrE6VAhkcWdYdVd9kp5ohzVgTFAfBaUuVEGFhBVVxRZda7bmfZCb4Y",
  "key30": "5FkzJPxXfvGcS6aQcLjvGTLFrDzY9MyFsGjQxLV1c2NBEu2mY1JfogjHBkF9Y4bPadyc47HXa8kVhEZftNR5P9aw",
  "key31": "5jw4ikHYEeNqbJyTDb92cTvfUeDyjgmmPxtG894nZ8xRVF5nBdwWBjhPPZ1o8xeLgUGNX847dDh3edjq6vXxnbLF",
  "key32": "4iviFAvuRWDMhJvosXjpGkW2qZdX2Jouq33HiH9qihxuvKHv17TwY4iuwVbXaVXutkV4JXgmQDSpD8uBSomzmTB1",
  "key33": "J58fqxeyGLDzzYbpam6E4UBKscn3vWP2RTWzj9ieB5NArMyTERWH1PHap5wHGWK8VHizm6CmptJzcPNQUAkDDFs",
  "key34": "49sFp5WW7uJSSud6VHZibfWhnSvmpTzKgeSYhjydNck7zBXJMAVMCjAEmSDmC3AbzDeXCnWZN7ZqZPL3v9Bs7bwY",
  "key35": "2SWkoX7batQdB4zxqaq32phQjtNzRi6Lr2xuV9PEih1brjeBs6eNRtBtm8tj3RaVDcEyRd8MgqkXNTw6BvVTAKn4",
  "key36": "4t8hva1r3KwZfMydNLKWE75xE1TruFGUTgRVJfXR3W7C1hUaYj14hokL9C6fe9HF2UxdmKGR3qvcLbUFcnnKPnJu",
  "key37": "6S8sm9gZwrceboPmd6x2uNXdp3B9XWbyuCnb9jeV2kFvfEuYu9T1Kp5kKmKCu4FvKpWwCXgwTn29ViGuqyQcY2w",
  "key38": "ik5hXfNgQQMW1x9uT4cwaRh7WQXT8ESiBjfWRd8eK7DtHDmho5kNxbeFqq1zLQvEi43F5sAGpp6899zX72XhNgv",
  "key39": "445pSFqEVzNPoBbYgmE7vhzGEaNx9pmqV6ha4BvZ9JbtNTCfoSwfNS3At55mQoxSLRi7bksziJryR4MS56J2PAa4",
  "key40": "42GdKkVpmeVqgnufwa9aYLfFoiuemQmRhaoeXNMXxupebE8CBhFjQ3AnDuZz6SjZn9TDr9Rn5hgVfttyjLR2aUDg",
  "key41": "26wo9nZh4B3PUrJZZPqm4cPf7yj7RscPAwdweVQSeDYGCr4qUTf3rCvgxpWWDGunw8HR4wVsxS4H92C7UdreiRh9",
  "key42": "52JK3yhJNeTsj97R7yxSM1EfXzyR9UYZAztfJNKGFA59YxybiGQNqYgwHvsFk3grPvDbQXCbJ56BqgurUAnmAaRT",
  "key43": "cURRc5YeemFowmpmPA6EqwhAxWijQ5s4henMjEN75UdNYhbVFeA7HXGjsK7frLiHsc76kECYi2ZwLyLDE12T9Nj",
  "key44": "3EL8iwwcKN8t62E5P661KHrct1khpUf8MJTCMm4rUw5MJ9rTnHtGW5TbZCaEDPxE9LQynddUb4GKcqbyVNTbPV35",
  "key45": "5BAmBbgLT6N45xswoQpfiddCHxFGgnuXV9ycZMBgBFe8xwyBP9NF2wfc1hFzFh1ewN5WqJW8s6Ng3EL7biW5UUS9",
  "key46": "48ruGxm2racbuPBnF2SUtE3MN5ZpA8GNFFKKJuoV82MMjsF5m5e5w5tcLTjF4w4zSZtHcKtDLpj7TzxELaHFKwaD"
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
