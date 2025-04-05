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
    "43Jrv2Fza26SbRr2Ysk6YgmzQkH566wDp2Y8jrPCnywpV6YajjqVkBPGF58X5EyDgUnz85XjUUHtWH934DDQGa2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SKWTX3jtFBeHgoAYiYDBv2xV2bXrPuNQqp88EpCGZN4TffsQnbKPoxeyhdXPhpFuB72ThUESJvq8W9ndV922wz6",
  "key1": "3q5SDhJnQGrQTJLXo2x64F7qx6eq2FUNPWPVatxehDmCqcvUNWHpUttBKmnDcwMQ2Q5kTzsj8fpJqfktE53EL4PL",
  "key2": "3XeVzgjM6NTRnFxiDDFDKh1DrqHkpwXsxxfyFT2VfjkVvSMqRjDknZ1k1DMLHzi7bydxiSu8MWzftMnovsePkTzm",
  "key3": "2vzs7t3rdGBb38Wp4E3MxxN24Uo2JVhj8mPgHkdCLxqbWmqRPaoaN6UbmXzRfSG5jaJ72tSkZxnpXhKT4P1wX7BL",
  "key4": "22mGccC4FdQf2fXucxehDtzqdMn9wcSABCQYRj46bnbwftWT2ErB73WAJ3dvQsJnLiEA8yPdrit9dT6CYVDpMDsq",
  "key5": "TR6vSZg1mVPse5SuDRNBc8matypF5TxMfvmSR9dxg2s77iDKcfqX5emGb9BoCHC5WqKrWfVNxwKqBaPcXZtXjoM",
  "key6": "2PtghhARufTDDpWfkJacYXud6kpW9772FafiggwiwX5ejCatSVVUC8RDWEE478TELCbfZznrxxbT7jenSreCFEDF",
  "key7": "47ekvCXAoAPk8NqDiLU8ivEvM1ZuS2k3Z7oZkMRSr3f7AqnnQ5yNn3Fjtwpx7GQrAYvSFKmJZrcdSDDEzEeZMnS",
  "key8": "58Z9fFSEQNqDmjNyjhL8XoiJJ64mrLLEmfMZ2McdBKzcAwkFLmjhDUz3MFyXoF3cwXiSX15jVwx18ZJHweM9qnDQ",
  "key9": "29JAdbmeRTafKKXdJVAjFPqYtqSB8Z9vPxuchPqLQLkTpStNFzm89PqjKsPDUh589JJjECrSbLcVHi2n198Dmuye",
  "key10": "3Pb5PrNqS8XoQoXqQmh3pAkvAAKh54gonqR57MjBnn7rXVu3SiqkgKJTJfZTSWfigKMfhBJedgujf9cipdqvhxqZ",
  "key11": "4RXgKodMvPtFLLfadQQKzNK14EBwGFJjVdt2kquxQkKXcyuabXTRtPfate9Z9QwRs2yvsDUhKztpgs5YsRCGNZ7u",
  "key12": "3dSKX4AMPBHzsUCjhPAqg3LFqMktNwTDK5dGmT4BsH7ZwxNpRStRwjejXn2RCobakt1PAzYdSuizoJHvqnCEe16s",
  "key13": "44F8T6CUJr5oingEByzF4uahJceh9Zh3yMWTfbX89Z5oV7M1BLzhbbc8YZgeBhd4Jn5BDNRz1Q9Ex99yAsbeiN7W",
  "key14": "2phNGtneab5nLvTCDcpeBbKijERouA65KxXp9gDSUbZGZMz5bbAwpGj24BGobCJfmSfTEF1PYUahQ8MtMs2E9baK",
  "key15": "3dqWnadnKL6GnGcJT8s4odWxHbbvwgzsjSknZCsNKrFMgTm8fVx1VDrmJGE4c9RzmHLox5mvHXTQDa9WJEjWuCYQ",
  "key16": "2nrLdoyYxkjRpHNcw6FEyPvQ86heg4YgBLF9PfbNoAv9Cg84rfcybZQbjDzLDtk2C8C79e2Pt41sDRm3mfvq5W9m",
  "key17": "5ZCtRYgh8UbEoQktRkUNQJbacRpJ9VLssPiSMSGGKJ7zRD5VPMVziZkScngFQ9bH4ujGsb95UE2rsKCADoFhSL7M",
  "key18": "3Ckavqmt1dH3kKj6qRmUKYQGL3BN8Z2bo9QH73nWKiPjgFAJb6RcGBv3h1JvFNP53hrToYrCjdsJvV4DrsTkSzJu",
  "key19": "2bAvNb18HiBCDTdgykKP2bXsJueT2itA9wtrEN752znYRCCu2rKFS4Png9fKgFbn664kvahAWsn6t8ikdHFu38nL",
  "key20": "GfViCjxTmpihpGHoMMc5PgA9B2SXyYuL27WwJZssv8mcRqEpEMBQXW3yz3RFE9DvsTNFTGkKwNdoBMfiH3Kfp32",
  "key21": "53HXoW7nBYjM7RWUPuaacZ1EqenVtEojTiZGVrowPbtaLp3ZrTjP5tNpHhKMTh16b11boLuyA4iCsQY3R97JB38w",
  "key22": "37YGWqaLpA9WhCiJMtFRyu3B814fjjvUCsS5p5wDtEmxM4bxPWwgR2DVi39VeQ69ZYaprioKgM3NvuRt2H7FWA3X",
  "key23": "et5wBXCudtV4GbJGdBKzf9XTE1PPSvQaMzCDpW1eAv9sJJkZe9wdw28m4ZxX7yhrD173p5Gmu23B8jweerDHJJu",
  "key24": "3KuNZKnLjEmLBNrAm2bCAV9z9ZhEdT843uaHDwpifecwSkK6PZPD7VjMA4Fg9qrr7FPmx2L4Yo5rs7as1bXkGUnP",
  "key25": "5qgbt3nNHS7pHvBU6gVJ6H2V5NJFVfXALrDrSaxKVwpdY3WDLMVnyQoitW6eny7BiCNhTTpyeMxDamhxphXo5kFn",
  "key26": "4Tu4rTt9zZkqhcJzrdwE1yL8V7pohMt6PovFZbocXkWiXSo4HmEnd4hfEuJeaF4tv5MsMeukkKwVx5Ca2fyEn2hw",
  "key27": "CZSQ3oFY8khPtam5TBPTSdK1bpz8aYPjRyvz36NMNAHeATppYLkMxjNWf9iBUiu7cP4taPaxGGCaMQ4UA1ScKRV"
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
