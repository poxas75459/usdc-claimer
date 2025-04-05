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
    "2bGxo8o6Eyw8jC9QbsXe22sNwruSVbbfR9NMY7YUMFWfzT1TFq5jtnc6MBaVsr9DDBLa6VNhbYVDXWLMpKAsdber"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ZXJYjFTaxWXXa8NKebGWqJFHEtjFUCXTGb9r3LrkYKGeeJdxmJrMJmWTCnvE359iDpbr8TDBekuS3acjfPtk2J",
  "key1": "2HkfBj1Q8Pf2U5EcoFkrU6szrNZegZtHChQi6YwrHZKkZFWEAZCWJoSXKFjXSXnot6rR8CAM8wXpEMP7mdKtL9Bg",
  "key2": "5cRWsf9DJfgvpshvbvEN7eeaTmtRjwDVCgBt2ZH6dzj74CLVx5y6shei8bbcQ9ePQ27fD9Ya1ezym3sVCaKWSAC1",
  "key3": "4Lpr46Fn6M4XM1ebmmuNQdCqCdPhMt1YcHskDZizYEpR1q8oWijvoBe1B1PhXyjmzahLk2eTHJriRrk333Yd45bg",
  "key4": "4oCrqJmn2namMMD1jHTE4w3eZfP1bcGGhhr2d52p67DEzDsjn54mPJL4JCYs5UPpZNKt9YRgfSSFNaCFXLUcyrpG",
  "key5": "2Kyrrehrt7ApRNcNa4quuku9oPdomY4rT1HGFqg13intKGSh9SgzaxTKaBP32pKCHmMjV4NiLEkDvabucxAGKUg2",
  "key6": "FgoUJsrt63NE979QtHKhRFyvNrQ5dAxQ3JEmegHz8Kjn3tLmCYSbstYrfSHHL3TzbJzhZy66vfC2xrwv5BKuN2Z",
  "key7": "5yG38SaLcZUhGX9Aws1cYQAjp2B7dtUM3g4SQUsJTBKvaen1p4bUTsCPoJ9rHqV1kood1S4jkTxvfNGZpSx61GKg",
  "key8": "459q4fTQ7u2j45zWs3f5HkRuPSe1JjgvRBCBk6gjbJuHJdeFrzov4ASdCcyBiE4Le7BSX8UTTCvbUcZv4sQn1WQ6",
  "key9": "4iTwJp8ymMqBdBoMTUfFUeFWvxTApEJeRyL7KvZbtdMNePGDKHq2PivPdRmVRErD4WNqSJZBx8a3z5m3qJVuyS3z",
  "key10": "Bu3XKGjDJoEsasFi9VFgxrTwhpvAYzAuB7ZCcnDAZrAFUoYkGnLCfjpXNRDq4zk87ttrhzhKBFGSnGN3BnZrFgJ",
  "key11": "5sFBAq4QoxKyp3KBZUzUHk76wYah276mbK779Lho76PSjprxQSGsbDZ54E2YzDk7kjd7xuJ67sazkf91SosDkdHb",
  "key12": "4VgYxfU4vhX985zN3JnCbjus5asXYcbDmDHpfP2VNJfDRLSomDYFQEm6HLQJjYv2KizE2A3pW7wHgtR6HDaPPyTe",
  "key13": "4p6FJnq4wd3prs53LmSHrmjsu6eDHyoJwRpY78TkuAKv1dmKCMHWAr9rsJAHiXD3bNBKLvNTGyf3cvcQquyEr6bk",
  "key14": "4K4WKfF7kErXA3K9gmamyyDEEfZRxijVbp2rKBCgxJRoEz8a4Sam7ghqMVsKwnzjLKADPB37MiVuUmeMQVXt7Miz",
  "key15": "6728BdPCE2pPh9nSE8bkLhKSUFGU4hSa1F8J48U1sw784hehRr5Q4jUartB6TrhrurugjZfHekm82oEwM4CAyvfZ",
  "key16": "NJD632mG4DgiusXr5K8S56nrML4DMLNTEcwyTR1a7Jd2mVNSipRHQ7eEfe3k2nZVCn5aiAYE4CWK5VtgJZFYjTM",
  "key17": "5ZowZPZDiaAjq93vXt2qgCK2CsAVqANognoRAXBkHcHryjM6K6yNj7v3Drkq6ZSFA7TjG9sedciKmRBvKSb9BSDM",
  "key18": "36VifmmGEPdpHZTeqNw5gcVEkCmZ1aiQv7hnJTohkeTrKjQZmYqJijc2BFjKKLGBFBJxSfpNNCrCU9HGLrnYJ6Se",
  "key19": "xBVBrTqMbYobiEPCRAiy8TpssYLtQX8fNQXTwLwKBt27kBihYBSsncoVYSV9CxKnYryRuiphgz8XMfg3PxGr5nh",
  "key20": "2KUWJ27VMHHn4VPMMPrNkx1Vru57ab8NDqeASEo5er1HhKPt2mKsYUARHN6f5wURbRaXEfTx22Y5q62VgykJnerL",
  "key21": "2phe9aZi7q8MKVidTJSGvxe1rhLpA1kiEKFs7xzGYRcmp2oM8iQE7C1J5HTGo7MLY8hFBzEs3RaAopak3pUoyyaF",
  "key22": "66SeUNvta1PbQAm8f7eqSaKss3g3zAJozV2HbvDexNQU2vU8gZU1dFRAwUvkKLWGG2sv44GgchQtbD6Kkk87myj7",
  "key23": "3K5aPuWWYws9MPrDM1eCGoEaqAfccKQgbwb45FuMvAu8DMdUGdNbnxsevJYUY4cZVyzmyteEnXRCS8vwDeesq4vy",
  "key24": "5eKDyWcpzJNRKTQQpcfFp9RQjnXA5XzGamtiE6QdhTyzCtwtT2QWbfmLLQnWdurzUNLwFsqGJDGbAHGmXU2wswJu"
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
