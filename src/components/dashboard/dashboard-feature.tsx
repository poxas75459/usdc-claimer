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
    "5hQ8kAKnnK3FDKKqauZ4hCuumdWq5nh8JCRhN9mUgtM7UT6p1pRTRHKL3A7CsDggwjhikEjomAfCxNLEkvTC9Kjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CyxTpvpBCLA3ZJ26kUrYFvJy31reBZZpcmN8QMP6RJDDGWmTVL3GveSVNp8byi59DFutR8uLiHfekygYCVEUueY",
  "key1": "58pjnYEsrkR31uJqKaFucq2rbVh9PeM55TpAgE7Chki422J6xGNQGqdYmPbhXH6i4nj4Y61YHKXWc9oHrxvEd66t",
  "key2": "y9w6yKVZ3MTX7dt5Rr6NBD2uE1A5QGyEUgtUjy6Kp4c2sSy7gT56saG7oFztjKvzYV33TbdFrChW9Y1Gsc9obR3",
  "key3": "4Tcgb4RggZQPGMVHrn9CrCAi6BSjquxmSj4cB4NHVi4r9KixT1Fb6f9mgw2bctcar7rKNVNQbtgGHQ6V4rbeXVC8",
  "key4": "5HGZSynE6M56iLTASjrhdzC9Lk2aeQxxwYYo82Dz7eoJ99mnkEbh4rbF88TGoZnS6Fxb6dBMCiuB2NLqG869LzSD",
  "key5": "2RJnehRM7WtWpWxtZUR1hrznhb8Vqyb1PLajELFLsSzmETnd3LMjXawNwxAEDp7dV2NudKYW9VkHVi9SXcFKeKFY",
  "key6": "2CdemeRYyu7YNyc4uWqpUz8DGYnAR5nW3EpHFc8b8WQEZQS4Fp4VgFJNLHar5NWVPLPyZ48HQwPeWFFiYUoSPSag",
  "key7": "3GwwrLCGzwtGMGpqLaczYozCGZkrLE8GaN3DNZzWu6eYVW82VRXNQpcBywKJBZ6rbck89oJPyRouUc8qGW2CjRyY",
  "key8": "5j5KCSkinXV5ck3uy9WUrinc6EExZFAcXGFqbcB2iJaLYxa9Ck2fUdkk5WjHzPrTP2kEJ6dLgPvLkfo8wT7EzTVH",
  "key9": "zcfnfFwveJSNAxHsnWGNtksvUMw3LpSG4odKCparhXQFD9WENa6cgaf8jk5upzb76erhq5ExrBRRQw6afKf7bg7",
  "key10": "2A5A1mFKtJZvd8L3qQw3cSbT8B1JRVAMdF5pnYVQxsAwy2VTYsoZ8HVyyrb4kTd6pRand1vSX7WzzRjLtcq91eS2",
  "key11": "5fcPi2z3uMzcKj6ZBtJ6prnrN3PtcDjQCzt46LtYeU9nefjW8iQ9DHn3rdYmYHrus5uhFjpM1mFNmssWhSVRPC7o",
  "key12": "XriH61uo6EwEKvtxAiwuZB85ygxhdtnkbiTCvvvDYjQZ7vQvLFRhCunxuMmtuRti45i6kwxeFjqPpSTUQovnngD",
  "key13": "2seGrB8i81qWpTfJMZ9atUHWpHgNaXEe3XxKu4Z8sQ6GNHSPqedgFxokLD6mhHk8UMkv3AW9jTP6UsGPewRguZcY",
  "key14": "57HhQTqVyPgUXMMJTEeGLuRme2Tpu9fXC3fDcDJxwht58bDFHKC522LjUkreUkPNQhoCpv8LDbu1yz5jBGkB1veF",
  "key15": "3PuPEU3VEL6NHA2MbXkxGeAcbY6mh79jtCUNun6b5WwH8wcd9vH8dhwtiRRraj9RVjtQVaUCM5NRKG6z2mdMajCJ",
  "key16": "3MsN6LsEg6s4qSqdCaBGiEaBdzmevMJr27uzPLy2U4zPgV9AkDXjPCTAoTpXDnApESPja7m7zMwfbSUTJ7CNTjPP",
  "key17": "5X4CcMm2iZtU22JA9kA9rqNNYHQBYzVMVk5c3FtmSj8wcxqmfCzhwuYKsdp32Vbzzafw7s4KvxjECoeE3Pf1vkg6",
  "key18": "2zyGUDtUmXv9Vkf3b4JE8GtBmV1R5pto5aGs49yQBLmtPqadDpNfHmBzmXjSpwCi8VdkzPcvQQAWKG5Qe8Etdc28",
  "key19": "5dZQBoG72a2vncVStQAuCn6DiH7g8AGAkaRX4GbPieM3b1Lbt3Qb5zZVz627kCv2FBTr6rpFbNpJUhQDPHubCzRH",
  "key20": "4maLXibDUxAmVjPtbKGs6eam1V2cKLXkYvnBm7yxbCVk6s8DA4kejDW5cEF3th8aFrqXUnjUF6FCx4MjAdyRButt",
  "key21": "2PDyy3GFhaDRsD4opSCtcMGgtLizcuLcZBTaezXgW8tT5BvayZmUi7G2WiDuTN9oVu1PSYQE4ThTjrKeg6bzoyFN",
  "key22": "3CihX9uh8ZousyZEJbu1ADG1RbewMehVK811cKx1DVtayEQ7fXGdyCNgrotAZRQ6cH94R6NtGqX3ZexmUv8PCiXp",
  "key23": "28qYuEhipKRPbBDTpN8wFJ4dihW29qzdvWyyxbh7miFBnhaRDmNk6Pn2yW6NgBAGwz8816jJrGpaaqRTD7pxNdjK",
  "key24": "gebEqK2YscqHm4WcJEMQevpgR1ginq72of6BUPp3ctNyW2epKnB9TbPL5SiKEqSmBtLuQzEMASwntw9TQERuA5U",
  "key25": "4evtDyczQaU75a6T5Jm2BF1ystgJ4hbua2e5ankmDqt4WhHB5nRRzCWuhXQtMe4TFUCwnzqX2WJXRh7cjDLFzGFS",
  "key26": "t7s7X29rj8nAx6osSmHvYWYS9VVbemfum7Dra9Qfr7i6471di8Yz769ZVinGGxmxGnDCWP8XWpiVYUL6JW83ULh"
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
