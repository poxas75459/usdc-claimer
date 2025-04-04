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
    "UkE213tPn4P2RwdSESs4DhBrPCU9ayaytY82ReZ139MNruTbDeB7opHi8idJVPJrvMHRXqvhpgW87TpRHXCAo77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cwzXMXE2qyPq9q8cCv5sMoLsZJv93DCrGuPSbnAHmzjAdxBiTJAv41keyqZKsF3yMBTvhez9oSZihfGpbDgehRc",
  "key1": "2kcymthcifLRc3UdzxJukdv4zGKh3NYxy3tgzkgW5PHH2rtBj23xmRXia6JDb27qK2KnbNapvaGegh5Cuu5LD6tL",
  "key2": "4Dc5jvdJVuPZV4ZQ5zaDjgLsY5mXZtxSm5dKxgP2YPMNj5MpYg6DATqGFdcZrRK1Ri6398iwuHFYV6MCLhJkabc7",
  "key3": "2QxX3QvdGDoxo7YLMwu2g24KcSJBdmhhbSeakow4g2dQ5kTwYYErSyrf9Vkw4mGTUs6J3pTPS5u4z5BbCBkmzbeT",
  "key4": "3pE8bwUFjtEPvuxEDNsSLZZ8sijg7C318yH7hvFYhskLYGFw3A9C8arEWNrG1MNEDrj2Sv6aMpvMNugYDcguaB8J",
  "key5": "nSrdMBmyktHFkrNyyvFBPcoabyeGhGo3Nc7VV89coWvUMcnHMry6iUoCG1UKCysB2RDT67M3GNXbFJGJHtRmnuK",
  "key6": "4XVaSErmXYuh3UEjTJikTBCxT65FnqS8GdReSvLBeonyrgJLpXHEXFxEkTz8W65LtiXrZESapPhvxWgRy8oXdiPk",
  "key7": "5UTgz2scK6NonniugDAmAgBmmu2hUwqbtxvHd6VXn6BcSPxPu1WsxbXJheBjozCU3szdPUzxY6pmWMKh6PJJV3ic",
  "key8": "5kvCz32zWqbayuKbLVNuNNvCApftardVqsy8j64cQLFQdJEQd6iZwYaybnJtLDFY95J7dyrGAudbCEuGLph2uNse",
  "key9": "4zQshcsH1DTYkMtTCHMhMovPBGcnghY18waSD4o7Z38AUjByXsU2L7ixpXnkxdgAMSExBzNHNo6XgdvPz48NAij6",
  "key10": "62pxan4tbWPNcTQAueKgmUksWFizWFqGzui9QcrZdwCEhg9ska7h3WHkYYeSPcaJZkVNbXhLGa9vJbbJG8otSm9s",
  "key11": "vDE1QF7xYbYpRRZ7HkJaEWudQ7Fbfr7NU6EGpGugvX3shz3v7rtEyT89LfG6mr9XhzNrSeWWFiMY1ViUzuFoeHy",
  "key12": "4648v8Wk5VkkECgMwFiQP8stDuFUBMkVyiG5bNhXrniFTADnoFXQyUNJuRMLMKkn8MxPEcxBdkvm9uHiwLpwt4mR",
  "key13": "5zFoE5tfV8VdKxe1W39qRZZvNczxWovU3vFXmHrLiWZgHuqXfeDF8zKs7aDTC6rL9WWH3KV86oeeFtm61WKDxzCS",
  "key14": "2eV4CoMRCeV6DGGr77Ux8E2VHmnqaGH6vGYYddaWhYScgAW4nxm1Y6eihiWyMpii6fMiitHEEw3XhDeBGimSU1ko",
  "key15": "5vHDsnCPvxXzxWMmRF2cV9VhvCCNnEHPVpN856Fr9VppHGAEHfXFT8xmG1XcYBHw7yTRCgABJDQtFGcV24SboNHE",
  "key16": "37oJFV92JLJd8atG258gAYbrrCLR96h3Kwsmoh3x73naJgjutWMiwT4ZKHQHNtyRNttskJKU5XTR1MZmHnww68jw",
  "key17": "AQ16M5FGt17Ya3UsNiLAe2nKkQLDFKgvmbRfNusgHGoWwD6NMQaWNpSnTgwLeAfhmU7J6jL7NieVUtaBYUjhTdL",
  "key18": "3Hb9xBUNh4WkbpKmzDoReLXyAAdgW5otcvyCQHEUR8CyoQBAZUcymXQ18JhzJnCm3Ni85SGPuuBA1gC7XyxpdPPD",
  "key19": "3Yfa51au3ivhRWpJgkfRSfGnc2nPKUYykcQoYMcLkkgPVrPtipubtj3dxTozn9wv9GpHRqbRL9r7hEjuFZbi8X4J",
  "key20": "5TCNAf3e2cTNjCTSg3q5BWQYUkx8cBLQf53YaTzotcy3p9opmvpbWYcz8guoF6ZGjU5uJHpiSAG5ES4bN84H4mUB",
  "key21": "3mJjgAHQrxUxCE4KSWXY92VcZy9MmckbYU4YaQTpVz3wCrV2L1uNU5Eb6JhcTXUyCTMee4xauN4abEMeUgrJEQPi",
  "key22": "5AVpPVgpMVRh9AUpx24gNWqLq1GFauosUTkMKsF7FhQKwoF9WZy5kd2pcZnizkh6G9L9d5fC74T3NAt4HzkKMJDv",
  "key23": "2pfX4TMpjWxeBg3okPgft6HgLXSf8MnH5qRcMzzKvzxebWmkYBTdvRu6jzfBrJjHTK1C2cwYYayJXXrks1znLZLx",
  "key24": "3vjKUwWYdiyZj4eeaMqW1aPNTxMdLxk7tfSsEUAe4yqAvqV6Nj4ahhVSK5MsoGg6nFjWjwpBxy8ZmgYrroJvCz5h",
  "key25": "3bkUecuHYzBcWFVdUEkrp5UPC7MvAQAdkgr8YSwcqjivEDdaFMA31KEJMsQ5gfvdXvETZYyxxXtTMMFGfB2pyJu5",
  "key26": "q2yaZy9wiaSdD6NSp1hK22Dg7vRK7zocuzzKP6hUpatL5NrURxfb91v4RdjsWDGrZZi75HMoZAWpDfhsLJibhX1",
  "key27": "5qcFYgxRECD4a2Bi2etowwn7PBQ7ki4nuRCRcoHktF1WaUjwGTNtCYx2C637pUq37TVZ8s7m7Jd4sUDMsKK8bhe4",
  "key28": "rUrNhqmkhjzF4B5CwQ6Z6mWFGXNPLrGHyjrBDBHVpe32NNUq41rnCPAC3aAZUoThAZcCfU6U6By3NxWjCGbjZnS",
  "key29": "2ZsBX4XyMPJDqVumyMgq2TwhQwMMWjr87eiA6FRcbBjkt3PGAEszTPKDnGYuax9koaUAcfWykAPTgnvtTK747cRP"
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
