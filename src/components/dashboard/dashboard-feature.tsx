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
    "46pSR27jH6X8frsY8KcaNbJYEwqpRcGGtfuDnNGZec6zdkHBUbZ1JuYwxKaXCn3fQnuRbTodRy7mYq1SneujsFKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GNmRb1zwkPwL7RNmnav53beHkpUJjac861p9pWQSbXYYSA6c9gt4f56jNLkUwHtesu9qsFj7ufbMM31L9js6q8e",
  "key1": "2MEKfAcJZaxd6h8m4rcA7tuWRg4znt71i7RUQ1neAVbn9byYxDpYMomgoX157vG5iq3EHBZ4C41tE63CLpPdUcWQ",
  "key2": "4sXtmF3GyS4TDckiSDxU8qKge1uFDxaFxo4gLMgtEHCQFTsueCQaonYoFYDWjM2mg1czcdRJjt2DBtKt4CBeuYjx",
  "key3": "1MpbYhMg73EXXYzeem47dxbd4pmxyd4mqTna6Sj6zatnGgx68viJ33QyX248hnQ2UkN25nXmRUibB8HQippAsAY",
  "key4": "4YB87iBVuJA5tSUnGxGsQsGzL2DNw3chA6dSE9KfHcKC4KbQQK9Rb9HDa13dPzCwHP3LoSVxgVQHZQFhMpXBqeR2",
  "key5": "4b7ye3exotGV82mvpRL84MidcZrT5tEayN4LhDkLrEbMZNvkuhFobHW37USkJmTuYAd2Bw7B8h29fEQxBufwmRiP",
  "key6": "4ioeyE5ckriJrnW11pF7eqHDZDU5fFiLc3n1WK1kPNRVpJLkALiSyr4Mi9PSaHXBa9dq5H1JwLFhgezhn9WRmSKq",
  "key7": "23M8gJdioZs7o1gb1U2EuiPdgQ3sESCaMzkGLyryVB5hzDAPmt8ZiCNNFBvqWANYpqs2NSUs6yRruCSMkmpkBHdx",
  "key8": "4ruQRfspXY1VUueQRLS6vG7q6GhxeEeNMB4xr5d7VjdaVRGovFWn6KpKdpyxwVNSh2uCQ9Fai4ovGsC5ufMB3bQb",
  "key9": "2Hdb263wCNoMXfKCNZocMUwvqer6sWxnMEbgf3yqGjdcLWsyb1a5cs7kzniT2azEwQgRrW8KUzbRPNwhDec4mWw4",
  "key10": "2hnUBL75VuENUbE4opUU3zKYms9U7Jc8xvsEKJ1f91wENZxFYLJJbGRmMWhuEdQYzu7MKN63mJge76zNvfbP5AKm",
  "key11": "5n4Z3BUS7jDTDPpw27XSY7du3G7GjaEWNFUQU6PYjxeTNyuZMWtqM9KYMQTxXCX4rDU6N9QGttcfrj6AJgGSZqAR",
  "key12": "3PeKNNZnkJknNaaYL198S9JFRVXWP2ePMKwqaAYb4XBn1BvFGz84f3Ry5wS7MFG83ELrWMGHnB936uWE5ZXTkzck",
  "key13": "v3wgcbs8YeDA9rzrT8rrySzwdDpMt2UjReSSoDdjZyWhFNRQRS2CjZiG5GymHnzeavT2hEG3qA1FgGWh7JetxwB",
  "key14": "4p2EL3VK5S55EoG7QV3Nz4yWtqbiaM2CB7joedyBNZp9TvpPLD6tyUDwJLdaq9Cbzwmx9DJuhZJLZU273AaFsLbb",
  "key15": "3JVSunqtG4eG4zSMcSvhWzmAn5oDjb25QpEanSo8fBXtTGifMrCYvXJHs1cswUymbe4NkA7xhuVPhpUt19v3kqRe",
  "key16": "4uwyVR2xA4jGTw9K3znFfi6h7tfYeNTxTM8TazPWosv4u8XjBKPHiEwGffjZ3iruUx7qZTvKhaZCEDpgbyoFn71h",
  "key17": "AAniiDwnph8ovyudTc8hmDbvgJc8BvZDFz9A5vJqnWSfKjzbcu7h7bzg3tkwMeEVJWcc6NEdQE77Q7xEH2xyJwt",
  "key18": "5H2h7P9T2DRy2DBcm6ts2GNVD37o65gmmx3TvmbSbGwyWqWv27YCg3ZhTGKimfuUjmC5vzqWfxZAu8jXbZ22Tsqn",
  "key19": "dZa1BU8kBT2JkKLEPHshimC1b454mXkS9RPZX8ZZtR7sVUJ16NrS6sUJ4YHbvAgYhoXK8jBa8dTB1cYDGEmAKpQ",
  "key20": "3ZFrT3RKddqukP9C97QiPLDMwaNFXRNB9yicyFuEhcUaBGxjM6tdJXc4kS6Ah3yDb2nB1nmaW7xj51C18wLHFu8Z",
  "key21": "593CugW2gdnWis8yGWKqiFxaJctPshnQAtx3F3Fa8YR1FutQWXkfKrUqQHQCG7Erfh6xCYqfQzwwNZGKbDwVgf3X",
  "key22": "3Qvm3NV8UxvYtLVoaMfXyxU5TNPMcxtvZ8GSnf8PPATXb21DFE6gccRgiozErqkDoSaKzzRhG5nPDo8v29c1Jo9P",
  "key23": "4tsstkqVCJT4JbzZcmE5wqS7VK7421SyMpiZJHzhypfJ2R649fKRXazUQkExy9hHFFwGAYY1rdu8vKCmUjwR1etH",
  "key24": "3ZbjjWPBz8NKmm7zLqEajXWox3NXorAoNDZYAuhQJ4UHfdZDmhmiKMxsGswdde5tbxLAnvEQq8KFWKLvcbx75oV2",
  "key25": "2THDAvjFuMH3iHxBRBbjKxVSW36AnY8FFDkt1MBRXMby97UUtc8WLhcbzPmNnRmrmjXseVRY48enMrGEQF3Dk3vz"
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
