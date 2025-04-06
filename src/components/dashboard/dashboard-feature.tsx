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
    "ucsDkBrhCfVjzhz9uqWPXHQep9TaX4rr7T7n6M7GVt3s8iqXd4XLtPAKqbGLftLzE6UX7TvdpDisGEkSaDR5Kbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nb9xMgBPQXfq8qr7VAroWo8PtRxNjJJhDsSBdJnvfW4cCP4BoD9Wos51rsLTBXFQjbZ7TNssLiANi7b3t9McGSw",
  "key1": "5GNs35sboQgfmqJRyGE7AzTy8M6nvyc3Lx1qqut8exaviS2bEh4mr6jLLRaFWQyQ7ox5B2EiGXwdm8FoNqVvz1XQ",
  "key2": "1UmuT45U3cx96TWdDMLr31RvNGcXYLwm86WghwkEXz339wXyKHA8253MQQ2Qeunzz2g3HAnMaG4szDvztG3eCCx",
  "key3": "5fj5g9DJYdzB1EmyinFojVjXG9fgqERD6FwQ2tgN8wvYQaL29hoyBQmTLXDUNG2jbMwP5AMwR3xM3HWZ7f1uSSaJ",
  "key4": "57wobn4vMJuQunoJoukBTvyJua12NSjDQVccUSAvaazgyzMVYnqDKeoCdMMcbekc3NUDdUFuSe64AVJ3Rh2UPD3s",
  "key5": "5gM9YFrawGCTCqg8LhbKk2dFzdZtjLFEbvo5PhpYrBefWnU41V2DFpuu6jgoMHdcvfoG1VZn8b1784yW4mgSbEzw",
  "key6": "2je13SXgb7Mbem7pHs1b1CUTQDMc2ybQBVt4q1rggDMaxEdCL2SvdbkSAZA8U1whCxzgRQy1BXGk5JpL5BXawEnV",
  "key7": "5d6iWvqAtgFsWNNUtTb4KcUWdW2XAQLceWwiE3wGkaGW9rcq1h9EnwdHWT8UmXBEuB1G6qSajMNit8znhNCXRcQa",
  "key8": "67Bbz3nHR2RVhv4r9Cgz2dxfqbL47YBWPXETQf9rXLvoLnbpAW1d1DJbY5LyF2i7VES1epn8rj7j7mz9RjLuTFdp",
  "key9": "piPjPnQdS4a1r3T5cW5uEkdd8mcjteyRj71JHtAsLyk4QmyRx9phC6aM3gMBRbLXV8FuwxKvLKaSumhN3H3qKAw",
  "key10": "5qPkZpibfGQDQnwaTBUeV3S9psYaiYgKK9DUXwmRdzVzcaXbLY2sT4YVdQYv9mGzAmVCAbsM9hhVP8dgsg86Kwcz",
  "key11": "3yRKqSd9hF2pcfLm74fh6sD9GZqapy8qGeoTgSC7ue5TxtGerSVzhTnzWd7n5FWQPkpBdwPkwmzb615dEDapw4Ng",
  "key12": "3fM9q8Bxk3dHt24CFpsN1NjiFTA9t7Q9D9z1fC2JdEq64zvpG29Kmb5EiA3EebDJbDwE9oFRim2HuvbnKAVLWmzw",
  "key13": "hdA4VP2iqcG2WupNKAF9giRBnvWADtG16UJ2VPiLcFAR8kkhsAhzWLEta89pVWqxGGbKyjzDfxUAzPyTNtFxH7Q",
  "key14": "36AbPfCTHHbHRCsCPmGnX2QXaTqjTdJaoRUrzssHfftg7oxD6K35MWHB1YiHMYL2PATgETUD98exUUdTGbL8R49f",
  "key15": "Yqi3yG4pA3hhYVaH9iXoZMZCdxz8oPHDGGjF1nTrWJYp3Bi8ZXck1fexxnYCWGk6cm6uadXsNa7ma4LuuJ7sr6Q",
  "key16": "5t8K5XRiqxU3X7eDufZt2qJVU7Six9icS466pWc59ZEPvrxHf2Gf46ekAHo4H3uifxwWoG1xzLJQTT8y7X6ir48X",
  "key17": "2ujGt9BsKns8pFuSRiYcJnJQmwePdbGtNA5veeXhCvXJg4TtaZN9EUS8mkgfQbQJjAcLooELBv65UiZepmtn16Np",
  "key18": "4AXuTNowuLznQxNUMVv8svC8F5ptGzcAQRLbWnmgGdEfAL2vQxEHnF2vofnZsx3HV2wArDxHEJVtUgd91DUM2BVd",
  "key19": "5f5qit2Rz9KuqPBiTSE3dKC8RZhSzcwHcEKgjFyPuV7KevRj136hGt7XhqJ8HXyMtGhfjygSaA2utJyiDNbE3M3v",
  "key20": "33nxEkkX3qPDfAux1zrdV853jxgxP4swz4qH7UBAAaLh4KHAxuKxW5XG9kMZahv7gheZQxgWYvcATLHwP9VSg7LE",
  "key21": "2brRYxCBi56sk3Z7HHChtbcVVhZexMFi2SuNhM9uKBQSsXiQGRo8uSzev3Q1UAmrQeFRjVAMkVebuAtYjmnJhZ3m",
  "key22": "37GDiVDFTHJDQ3M89G7cKYMiT4rPF4hhXa8nBb4s1f2W5upqCd7p97L6tZbd2A8sJoQKUgTuEoZNGT34Rc95wggi",
  "key23": "5bx2L14ZZ2bM4DmWcQigMiELLp1ZNUcCozs6jabiqEUeYJaQFCwbhcLvqsuQ5AwqnVRrxtGwdypWTTbMWovHoLvh",
  "key24": "v9dwHaotk75oH7es3Frj95zzn8GYXPaYFD3m9qnoX2tQYP2AXNyhGUEz1jMjZmmcJ9eTz3aFceepZbfTHxR7ux7",
  "key25": "2m283sG3oUojXEYe7qNRtmZTy3bBLDrZfWgArERiwVagpi6HDarEbWdZ9pi9aHRYFwLnPb6cQQVsHBwdKjK5ivR5",
  "key26": "Dgy3NWQiMgPE4weP3679Ln6zGse1awdLbUuW5NRpUSmHMCjtm9LfGQVRQfw2fQKRaxR9f48KnMU1T2pgwaQ6ssk",
  "key27": "NGiRoQnotFFfz4zLJePCW9H9xGvzSntcSidiMpGWBYFexgDYXCKP4jWGerUvdz7thHS3uVzxDs1Bg4RkaKscjK8",
  "key28": "3RtcZCmWTLhketQFqiGJoEbmsbWeMdb39A3N6wGPvP9ZfKwMfH7VZaMY4DzvmtbueLgAXoxpeBh4SJNcNB82XeTc"
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
