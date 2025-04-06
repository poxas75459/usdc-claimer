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
    "in4Rg6pWd1Nj1qtPWfFYFLnMQwuGZf7uKPQb26BeSjsx9UdAeX7S5xEHeuXThm6ASEdb7p374HaiU6BYPQcvdkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gBbrkr3TC45Nw6y7e2w4mVtoHS8nzJvkYWAP3FEcHopthJXwTHvZ5uCcLJ3eNqnVqQDzt5rDCspfb3Dv9wJugpF",
  "key1": "QdNfLh71mrhwJLXDqE9zxkhrRA5z9gnozv1ktFDyUPGPtHNWdnBBwaY4pcXnYxwFbb5U5FK5rWYRBd864jg6h27",
  "key2": "io8g68NJFLAoqZQU1sbRYMYmFDNv2kLV3HC1S6zvB5yDV88p7qVJpWEVbSzUQi2GfLvRRowzC7zWPmj7Wx5V1ur",
  "key3": "vpDEyCgkrtGJxCAXqVposocFD5URMJU6q1DkWL2PastCDBjWWcu1kcFXh5js6sJSVdZWnqr5SRsnoMDSXDDhtVv",
  "key4": "4QDmGi14mRbFXiv81AqiqBfmq8DHCVapaiQKophVib2Yf1BQwbDeJKaJFSTevK3yAsWNqtzwn1gH8u92SFfkMhfM",
  "key5": "87FLa2CM5Egncz88Gjy65dH5iVodgsRZYr7Nvf9L4jPEdLY6trs55UZzqKruD9vXeRUwfptAZsZdTTAUVcnKW7F",
  "key6": "4x1QX1EtRuyfkJ564WXLQ8sCNQdgVsn3z8fWExVDoPDjmBx8yDE2GtFWCLQsPoCExJCnuuiWAULdrpkfZ13vdgWD",
  "key7": "8Tm6dUBcmhgzwMkoJybrp6eCavVYKCH9GGvDQxfLZtJdzqzbjwkpaJxeJNNpmu96WLrA56Po3WkB33xWzEYpTj1",
  "key8": "3KwZ3XgiGTb4AHMLZ1Aeaa6hy2Ujfe5zZW7EqjJsyoQ3gxQmkKfpafGLJoPfn4vou9Q4YVUXY3EvMDYKhJVPhA7q",
  "key9": "5nXnNS9UTchzp8sp3D93AtSYPdgdSPJqJZ3HPuVgeXzXc4djDbpJiKoKdj8dbnFwk9P1naftibsiHPhh2JBv3kJf",
  "key10": "3xeZus9bgWqNq7ULRW3RFN5hXZbgXohEiam9QJHrc9EtZ1AQCp4a2csYf3PNzZ8sZhavSVnJuD6jCZazVzDK3qhm",
  "key11": "3wD2mps1cRBgddrzzx9p73c3JHVGeUUqjS6eaQycPjGzqPkQ6HYQMAc3ror6rXeATKjmbwohWY2v3ow8YgaxgLkK",
  "key12": "3ovSP1zTeFnwLrpnBTXhU4Cxa4ue5XP3WCJNnH3Nzy6UB5LtR79Pi7qUevJgN4qYCkG9rShbwMpcAQjUvckBadJo",
  "key13": "fVF9o9v2aEEWuD5PSx1fSKY1R45UoDYxsPnvbtMRJCq25sSepm3KsdzvPn6kt5bJzyjFiNcDDKkdTD7erpRWzCW",
  "key14": "3VVP2iU2yZBThrgfcmEGkqt8Mooasc8iwRV4WoHgoMHEhBWb2RYohDpffL6txYojAxr3AvxGgFPx9cCFxYXYwejs",
  "key15": "4xxMtBmMAU1Ba7fdhVw5WiTyv41awpRUyYhhZZgWrRz3SmTeqUs1PVTb3ku2ioU7m5bnAh8XVytQa4KncqfmTc2V",
  "key16": "4sNg96srs4eE4eZF4hW7n969jzPKWY7QZ3CZDqo5VrPozCUPrXZpX4P1vS3rmMiPK4kTTooZeZXDNBn3vww3ptR9",
  "key17": "VPbaZRGrJJhKAkqDtz9BP2uoneAj8rVTHHzPBTLt8Crnr1VK5Y9q9tf6AcgQtQbQQzHqg462s4PgV9RtSXEMFsx",
  "key18": "4pW8vf8PJkWM8Qg8MbXCxb5NxuExct4hdezMamQPhXrd4mLUQyv693sdX4m9fBBWtBzQqWD2PsbGWkCKXMAVCdXZ",
  "key19": "4WouDTU1kQJ7RWN9DVxCfX2RaAxzBv6VRyq6r8DWLF6oLjFXTAdj3Ln8rHpJHkDbGdJwddEbxijK1vozFSZWMyLj",
  "key20": "5TqFEKypRND3dPW32cyE6eMnM2jQzo94AbmBmkkA3tyNra7jKkmSsJ6ud4JXvXG4dVMt6AJbLAYVrJD1PDHJgUy9",
  "key21": "4djesXBU2kQHYvmAfX2rgg1iyHoCqpnGDUzCFefnUWaNR9yUywCMraG6FJrRBfvFiZzfWnabkTaJ2FqRtvoUPzos",
  "key22": "i93qwc3vppcZUm6KSHpMEjhjJJJhKN16LixkF56euH37YRU8Ktd28EyxehWicQJ76wRXSnPp23pR8XZcTVATwnd",
  "key23": "5k1GdNBACVTUQKupevMmtNoUpE9fVpmnSzJwZRwPA7HaEDHSa5KfNGn6vu1yhaX4bcahYzVmxmUoKbJ3TJeZB5if",
  "key24": "3Ze7rVssqt1yH3mUZaaHdV4HwSUUQ6hGokhpyxbFEMxJvo8wpHcSExC99qNLVJ6d2pE1Nzy99vhjYM2p35vgbPez",
  "key25": "3kC7C1XjzP5HYDGA1c3RA4EHSFGKiBCciP2eLy34XjVP3k3TKcZRAtyxCmxE1fF5cMtZuVMFG28xLJDZprTSmayZ"
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
