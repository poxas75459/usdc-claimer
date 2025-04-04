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
    "5C2iej83FPrSyZ4hRsopEHrzkCdMWK61n8UKfokNg6kooqfEYtRhqxf89dUbMxzf1ww4yzVmDPxWJwqPYbn2gdR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HntZoMi8iRTdnxcfN6KuoFv9wozGQDv85bLpk8aosaVx9opqbBkcxZDwN8Cd5wm7R1bEZkhCCfTsYesWKy1QnSE",
  "key1": "nEWrgvjQu2xnBXVM2fpV2dFE3tvY9oSQNk3i4Rxma51XqK2acu4SAyiyxiMfb1c9Psi8zVNWJZcZ99o4LY3qKtJ",
  "key2": "YJoCPoVzMe384LnkYY3LfbAGmkrLMJcdreL5x7FxeiguXM1WR6MqsPRxjgV7Fd1MoJfiJGBruf7zdNLFfAnUZt1",
  "key3": "K1R3B2fMrPgFRfRhNDTQM6VfXyxE6fewcAEp6XZ7Vug2vy3uUegrKERwGdv6tt3r57as4kTJgXJUuFTwJBuJmbs",
  "key4": "67qo3Ut42U2B4GXxqm9fPyrPWiFbd82KnnQFZJyxSaGJ6y8zhmkq3KMKwdrq24SWKtgYu2eaEiQghEJtGdbuRQAK",
  "key5": "4k74kaWe3SzxioUHBYhNfdEEoY9jPpbiMLZTDqe6xSBXwQZwZYByLMt1re2xvKg9LrRvor4KBeMMc1d4PudcFe1q",
  "key6": "4XWg66osdeJbiXPyAA35XAmmA8DAtqQtaqcgN1RSD5DnQf18AXkDzt2EuUR8GzHpBQg4ZhC9UELNBigp7WodoE2Q",
  "key7": "3PtvigaiyVJWM4WicF7MD7HuK4xR6M9sDD4nWjdowj7RqM3gjQLfipZ2jP4r2LGQJU8KPNqu4KTjEbcrhDZiR6AA",
  "key8": "53ReRed1pUgV5QvJ2HtZamvenUR5stafhaQ2iniA2SoTUzD1MrFiPFwUFwWiSxwiuy8S16KuTexMMrWdxpR1VBg",
  "key9": "4GqLRL6b5kShxBThHy2PnMvK5cud5CvCZ8TyWxUHEaoJPF5Wd8cbnwdPp2y6byAY238S7VZTwwaR4kZGwonjX9TQ",
  "key10": "2Qr6mEuxTR62HrgprfJ8N2jD76UGV9zHbrVNqSZa3mr8m31DDRMd6bckvsaBvT4RKW9eWff7mLiWQQBMUZdEqfLo",
  "key11": "3HdkLRWcvStrYaJRLNgZFYXHM4qeiBXA8FkUWBb5PHNvgcWApwiogigVGCPmjGJhLVVDU5mzD5v2K9cfNKXD5XKh",
  "key12": "5RueCkweMV4NjhYemDSFfuzwzJFuSo7yDBrhQmbnJn9LcTcfFuEkXg4rgnWiBosuSveoybFicuCzGzDX1oAvEg2t",
  "key13": "4dRgbmXhfLQhUZj3VR932nrts4GjHrjCkjnvox2PGsGiGgv5wKwebfZc6tRo4Bua9FCfsURqCaMCQGt1h7JwvXBV",
  "key14": "2JQoXoB6hgHGshyg6bLC8dMMT2SRPdY9Ggfoyvnc59avY52MJwFkeR8q7tdgk989YrckaZ5t2ceG7pdrStFFieXN",
  "key15": "3GLykYgYzkgPgSwZUYwK8FTLopSfMQMo8P8MSFWkaQDK1jfm9CHanCtjcAtB2GsAEnuhNpzGwjZLZ5LuTMhscqJR",
  "key16": "322pF5XWZ2DcJyUjb29P1oCHzNJNQD9D1B5CLDjcAafWGDok9ojUeYawrESSHEQb22wVWCiHuB3NxiE69MLng39z",
  "key17": "2fnBmxqGugRjPYSHfkbqv3caBHBaergyDs9BdbDJN9ApwJTZ8RMws35Q6Z8iQqtUqzuYMMw5Mh995BnLjRNUyiV3",
  "key18": "2sxxGVybPZZm9wiWDGaYUUUtCw9f1U6gcCb68Si2VDur4URrWJ5UMi6LTQDpFZ98K4pNHavDCVh5DjDFUHuKCEDV",
  "key19": "3L6kGj4bVxJ7xLkNAZo4q8gbLNQbDafks7EqQCyjh4bjUSdaUxKyq1fFPfntKsn1beKjNQgYeExanbVRJm5Z95vM",
  "key20": "4o4fHEyJiSTjeQSSfNVchyfCtyvufnqGb3XT7JqkHyQ5xRaHULf1beVLSRKYZ9R5dEAs3TP1iaF1K6BpfF1LD5P4",
  "key21": "5fugAamNeLm3TrnL9dXfQCut5ZuBVCtvASt6ojMGRgvwqa5jYCC8k5DDsXWuKcyXFjJ8nWCLEnVZkr7c1ZwF8Yc7",
  "key22": "2YqqKKfK4SEXmvezZhJFpDYmfAJunvf4gMDTmV7bRy9WQG8GAFGnfgSwtNdDprfjbtu9mNSsZb3pEgNBU6qQ5uHS",
  "key23": "32QoV4bKWeBFu7X9k9BvVNoNmH7uaChmdA94Z8nfFRMifXp8vQy8LbbbWsJUXvb6CjQtuCQrmD2YSPh4kY7tPAu6",
  "key24": "AEWGzjSyQ5nmoq45cn3zV56bAiQNvu9Vps9ERPvGdHLnjzdnajSZnyFXrqoA5qaVrgEpyMo25pm9t7MrisAaREa",
  "key25": "3bZi74BLchQC6VkkcomLTYpa5JkgmFUnkjaZWPHBHMvG9T37tV2tydttdh4b17qcGZG2oJm2iiYaBSgrps84uu8o",
  "key26": "PTCKtxrK2aPrzGf5y7iUXLpeysgs5d4hh4ZH21biCVwEmVTaPSemNjcL5dfT9ArJk6QYQ9aPhT3swcJnPZ49NrZ",
  "key27": "3wCECGckVcirFEoMcpmMmuGNFPdJfy8pDF45LYmUGC9kwWgZYYhZtNfHgWBvKHvm7Ts1NzUGbZN8s6Z3SBVarpCP"
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
