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
    "3s3hizMTSkyLG3Bvyf64BpSgom6GRCPCJdcUuzyJQFQut8YyWz8UQgGzRK2jGzMYs5YttV2bGEeZHzd6NUpCzzXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5He4m6cnuhLmfSTmfUtTMWxhFciW7g5cmcBB7icTHsPyTRPAPeGydkgHJZGK9csBJjCsi154EKuTFZFUP1N5DN4q",
  "key1": "4LBoF57XVSzN8fU55X1SSKXKVycvnfjPqMaoBppNABAs49o98YejSvbZZFa2DEPWpsQB9LayM1abLe5xkWUceTuF",
  "key2": "33aTLoGUwpLkEC9UB2KLDnP9WKcwk7nRPewgMrjFGJJ941h45wH9KWeHa82jjYS1JN2Pc1PcEf5F6LCFKL3cfTBo",
  "key3": "3ghaiaDXGguP7ELU3BnREsC1TdXeaN9PE3WAotvPh8DQDd7ZUHaCxPTTKgFYomcbEcyMXMvapTHLgufGtPJA6vWi",
  "key4": "4gEJcGYKXmfsCbc6zbzP6HiUeRPgq3uYsYwVXKtVGoq3gYGeSE5zHLN3ZxY4dRW38piN2rtJkEjLtPXMMQa1ExmS",
  "key5": "5JNPFuWH8kPRyY5YmfnS7W62vccmyrJrZQLowmoB8TW6k1N9My9ZTe1Q4st2i9DBiC2Fcyo3sbfQYpBTRnE3Dk8Z",
  "key6": "FD6q1drCwG2fvPREbcBaJECmbYmVMgMmnThe835Yh5DeFDv7csGtD6rtJb8W8tMSSJfSA3odCdaaBdBX1P8FkFC",
  "key7": "267dyhRM5SQTenHjUd1rbnp9xA7dTM6TwPLM7hifcPgWKCfFmWUtGHyWgAvLVUpNkxTWVYdCADLabimbLfPiJtM4",
  "key8": "5HwVMDh524EUFNLFhhNnSFerZyV3czPmdUKAJchiGvVBoyMdkCkTkTxyfto3etiofmNEfFfWv9d1KfrwZGSpaeXL",
  "key9": "4rRWsEeQ5RAeJPNrDfXWS62S5iJFiWYCW1bLgvfsC9pYC3VnPAsRbnisGNswxgUErUJ4Lu2oXYeFjijEEFN6Umky",
  "key10": "5M52LpPPJrq5i2gBYaBBVUXYtEEMUYVx2a3ggeFZstPQsfQehfACE3ZvxDtXf2xWjUydXgmyUstCogXou1thheYZ",
  "key11": "3KtgfUEuiU2eCwtxLn8YRvH4fBsx9P3xpP33egdmPfe1wMwNjJzuPBE5AvomrbFFjUJkBosRRLJRkEytJ5db4dXb",
  "key12": "47JreKoXHSCfNpbq3Mc5H8xZsa8vYZQ4NNgPU7xKpEro7sQ4WPJpmD9YMwbPzvVTVuad17vCtvoT4p759LFcRzaG",
  "key13": "RGeZDYU3CCvnPztrrRphEn5w8qSmNTLPhNKJWVZkAcZMFKUaZvNpi2Q4HzaQY8MknvEhmHKguA8MkXLiRKZSdzM",
  "key14": "2kuxakzWbdTdZu77jGcocHxqHGqqYsM1Tc9mbwJimLVFhDuapnNu1biAcPCwzQ5NitA9Q9f2xDtN4TRVbqV4X1K5",
  "key15": "5Tetnjvg3ZavaEmzpci6EKRYLTotGGYEUUNrwZLR5WPs9LGoKZ3hgCFBzn1nnanUNrZJADhT3QVqq4hPBjfoivZH",
  "key16": "N8nnzK5SFNgYfvgtxETsvnCEKoMR2dkTinYeo2yeELYCFHuwwfZfH2k1pzuRGhfCMb3yjKLFzeDSEaXRioRrLvX",
  "key17": "3pXd2NUrdJVacLaaUtx2CttYKR7mu7uPaJA22iPorEoiWxtbrQK1TwGpCT59XR3mSdyuAsrBm56DktxcCpnFBEkE",
  "key18": "5wfKUHbnZ3CH6qUfdXiBHnv6vXPBGeVqLvczqabUYJHWB8no5vSbfaKLsR8BSks5WXdE2mhoFxcVfCLG4LThntEp",
  "key19": "2ETQwkCkwhJCWy51MnBsysgKENtA6PPp4XEWRLMxXkXeZ8Z8Mg31bGoXqc2JTDR7tjjx2chzBShPyWSjaRENHJET",
  "key20": "4Lwm7563vBcDyW4PoKr7oKPbH4kMQwD2HBWaQk629xxTgjTcBYLT2XV4ZWF3QHT3Jheq3Do5Ve3oJSp6LJ1tkUVC",
  "key21": "6XVRT5HiYD7RF8E2u9iVjvesHtpmnFeqMRvQ4pEMTUVu6BRmhvoGTUK2mCfHBJsgNrfMejEXk4Tkf5hq2jZKdmx",
  "key22": "2HTvWHBXRc6ftQwwZAtyx3BedWkcsEqm3dWRFiuurb1qDt9WK26HfBUAUrkkRCzTKD4S6NQyp3NTDzipr9uYLHGG",
  "key23": "3X9aNym9HRSbPnUykqryxnx3KtZR9Km1A3GdBHdKnHMH41yFyxmqhD8my5ePED8U8fnUNJVb9WjMZvb1FkXkTegu",
  "key24": "oVSKz44TccYxWZ4LzHDMxJB5Bp4RmBdKn24dPsYSAunYSHLEhjp6h44LpKHB1bNSMbF5sgdcQyge1PBtHyixEh8"
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
