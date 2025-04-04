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
    "675hdbKH4nca8mCfuhQ8LoLGRJ34sKUmoi8JcWvFHgxXPTdQuXQzGFNkVNgtqjYxFk9eyjpY23KxtpExMK7FMnHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WvYvUu5XTdpFuLPDiGNpBs4aNP9u6iUt87WSneAb9nxGownBKbREXWus1EpLgNH6nSYxC9Zyd5sC32KZ8LT4PeS",
  "key1": "36NXtKq3zcGdxz2c8E1Qsek8rgrwenS8VwpZi99ZjgWEYFCj4TGur5vYsirn5aQA2DF268htqiRrT5x2CUC3creQ",
  "key2": "3ahLF2kg4cJjmCxbE9sFm9VC6gxkwJZbhgLNHToywPCFppcQ6dc3EXEwSnc3dCgvrDfsBZPUzPvTxgEWWwbePZjf",
  "key3": "5dcr5RfQB1TH69F9p5xmjisxbPZgsUZaSLYbcuCWhTMXChDcEHTrtGV9oRjN5MxARSsrn928JA6kt2scJHo7kttW",
  "key4": "bhCSV9amioxohtTjvSeCqMsiFA1qAMgRMtS7PL2G36r3fchisXkypsodEwSyNHmQD6yAhMu19g1tVmHfbDQtjGq",
  "key5": "Lw61CiMLsXmptQddbKtphXu5g3qVvztGN6Mi8AJttJhqU3UxTbcMiTCcvs2cgdQUPcnPSzriRBmLZHAtbns1ha4",
  "key6": "63hZhRTeKCaMprDKeeSRmLLpQZksFu6CY3T98VSXtvp125TmVayEMcwiruRrc3TkHWUUxih7vdXxzkkjRCjmwdCB",
  "key7": "qTCm8FrNuArWBXBpPAwJjQPeXa65ZbzTAY3HHk3xksB5rxC64igkqtB2eb8qG98gLR9Ro35YsE6RUtAcW15bbyf",
  "key8": "5z37XhkZ5WWXEuApm4fYhAmeA94tj2x6YKJ1yh2cm3aNWYMCNqJCKRVCh6raAfD9e2jWiCTpt8Cx9nos3hPW7hWr",
  "key9": "4HbRobnXhQe8sWRP28n9WT5GgY1s4SWTrUA2FcFEotFivXLqJBwrfr3do5soEVHhNeMqRKmfiK4NPhAKanbL8vDd",
  "key10": "2K4FC9b4VUzMeZsisBpByD4i9to7kaNDhbWR22MndcoADdhWjxGGB4U7X2kQKjXGzrfZbBtu3csg4rpwYKUPirxb",
  "key11": "5wmxCcMNXJRFFo13tR6MQb3EDQGXUUfa65iRPH7p8sT6sACcpuDaBsYXk3koh24YAQ7KX2RjR59FS6tTPMQHu5zu",
  "key12": "4FAjcAHRAgcAeYhidu7aiumwCN8gfjEbUkgVLi96J1cU5efBRMLwwzypxaHq6uCeaAdtt5XAh6EVncBUbMaZkLeT",
  "key13": "5HNYGQV4ZHNfk8xNbokVhQrmAAxzCc6uaFSidCBoQzDRpeCW3bDHdMjPPME3omnRQtmE5iV9mTMqoKWSQGHot95g",
  "key14": "3YVApyhuJx4uaX4DEzRB7Q2CxufcHNZpUmpMPVpDe9eAYvWdEDXE9w6WrBMSRQumydhAQJrTzYw9UVwWmHjdwmdQ",
  "key15": "8kgA86UTRx266xFyXesudjjCGMSNVVhM6e2ks877btoB8KhrPqayXaexrXKXeSBhT1JCzT8BqNPub6cFn5EPj8G",
  "key16": "4DTTBCsX9zrKWuDH1XyaawHCKonnxhm5ZRABqfqcLZp4TDMoWXyCYPmBjbAyqsQmuKWQHb965uDMeBukmB27rpS",
  "key17": "2X4fT7Jj5XQbfua9nrKg873YDku8Cnh5uGEYF5PJCYKPFdN3vqkm5trazVqHc6LtshprhGn9CRyRHQ5UPWZEsj2P",
  "key18": "5FmWAQk4YkDEdLq46Hi4PTH2gDf7AfpEeSpaCTi93NZYHpe38D7VPeCgrBWCHrDmVvaF2eK87j8y2kXhtcQzF2s",
  "key19": "35jqq2X4n3T46E7EGhjajNseUxZz9eX2UEdsBrsTgTC3Vw3ztHV16dPDRLTNsEx3iWoqTHpdrEC5CCFDx3opLfzK",
  "key20": "1b269qmsZnUafmsbdb7JJQKoX1cYmQVDiiP5gGW3fKtChqR9gvzJC5vCkSp4hdnNFpLrbWgJRZwsFWmUvVAtQLD",
  "key21": "4Jwx3D1kTFk8CkLmfQRg8SUCXPnVPrucaiWSJbztojWqStFX1PzwU6HZUtgJjvZQW7qaaMNipn7YXhTiQyJieb2M",
  "key22": "8E8SZKmKYLJySymXCBdGqupCpvKaHQYj5dhNpgCvq5dJGxv5y67gALgEpK48memaK8q8KGYs31vLKCeuQzg7QSQ",
  "key23": "2WQcRLjo8F7q8HZwc6ZT9KgMW8Vou9eWm3HWaVozUze7jnvh5WECwG1Ew39zGm2uy9o9yaEuVSrH5soRk9LKvsvE",
  "key24": "4JFBAYoRqrRNJiR6ZzY1UTxT7PS8CqRhHUuofeox9iTtAnCf5MbYM2ih2ukmbjpwwoswnsC1jW9HRjAkkoRhQhJt",
  "key25": "j3Z2aH825KE8j5xHubvMBX8bJyQC63urp7FRsoA1rFVaTwF9xNaG8cYesbyDiQSn35mdCyVGELMC5xcrEwhtxFj"
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
