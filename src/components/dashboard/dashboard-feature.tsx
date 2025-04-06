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
    "29nemnmMag5x3Rp4wCJ7tvj4ePJfw14vW9wwqW9f2CBp1U4NQZzRy9F5Dvh9p7B2nfj3soRtPMMArBoTNYrp6j4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x8zPiqA7HrrhNK7qE2A38K5pXQsr3onBYAwUgAHkNaUXSvdgoh8YY5pkyHJNhnRHYExumNN2FYPqn35wz9AZShv",
  "key1": "5QBiN7qVQrgkVQuC5QYQNZDdok1dhXidFbGNbB4e9bGTdV2Z275YGN43a81p7Es74e2wFMYN3um9DJrgxAra56ni",
  "key2": "Z5NLJoSvn1YPfXdFojdmdo6FvWD5tALQSfdfMQ5XqKRnj7bnYfmnwn5essFU7wWWKTfQcZdnUuyjbL7ujw8P5z6",
  "key3": "2pb4Prz13ZNtjtsW7McFVCv9JSH4w9XteMJj5RrQKMRe9xK78vMKViiYYeW1ByyZV1er43xfrd5dSDix2MhGSVVq",
  "key4": "2o6tZH6AhGthJTjD7CzP4sUZ1gDU9pS35V4d7sPiRDJXGyUJVf8dnFCK8JUHrwZWYcb9sPuHam5vH5zNwLA3BFJ4",
  "key5": "XZK1A1qdVmf4ot9Ekb5tGX9wCjmK2DGC6tgtV89Fh7qqHrug1nAH6g2VSGZvDkUCcgiQFC54W8BEXxyLh7aUX2d",
  "key6": "59mHodEAHi5ckqy47To5MvBF5H5FPe6LjQkSFhbEPhoLWJgm1bhtu36rucuXnhvvYar9yaNczxbzaBjUjP9NDotq",
  "key7": "31UB5fymSz6zwTk5Qua3aK8CgCxD3Wmpo1Lz2zHnqYGrgV9wVM6itBxqTLeFLFifC54EUMR75skMXjnyvzH9zsbk",
  "key8": "58o4Eze5X5CGmSnyhvEPLYKRE8zxS7J2N5sbyK12k3cmagFAUtbEpggDwiN9Cxt9mGy6xh7SixzXtnnhrx2hT7p2",
  "key9": "2jeMeUjCGL4GDpHK9fKT1Use3qcMiA7gPrwfbSh8qV5zF5mbNM2rRhECj7WWVDSg9kZ2XdUC9bYZrn8ZWcz6QD6C",
  "key10": "hbSpXRQvYBf82L8DYSrUkB5Wj86yGfNcWLcnWHvDnKh7GJfshMiJUBfVhqJKkBhmkPuSQkhL7CCtjHQNSGLYa2H",
  "key11": "5yQTaTayqTqXUzMAHU5DszETrkonmdiwtWUWSQC5HoGXpGjycKy1Dsg48T3pqULW8Bob9PqLryUHVk8u71N1PNxo",
  "key12": "mmpV4MsCnK81cdpQEwViQ7XVrWdHd6vteTrLsBL9SM7NLCCLbof2sJuHpYhwywrwFju7W99ZBKNdPYtSWeMk2P3",
  "key13": "5ytikpTSoe1CvsPYpUsnd8CkNqaodYHiERvSMwqtG2qcuvCLbAbyZsxFCWWAARhWgbL2VmKJYJ8Hp514fopV47wY",
  "key14": "2aNfNT5nYqLuwp1zqkceGN9xB3Hit1w75aybaSka2Si5p3ptJpwxS1Tv1rdBmQ7UyDWGVQreQcqVGjryz3K9yPLd",
  "key15": "4pTJUqxUZ1VNfSh54wRAcjch93no98kVXoVi51Uzt7iDf3KufPR577rHFDF7oVJNsL8g4PUVx5wUgvBy2YXgq5kw",
  "key16": "FxK5qfx3NfwfN8q57Q4a5JyRMY1Be4P6qEx9kpKzeThKWu4WcdAx7r1Yn4U6ku57CZcUJbK7kLcTW22dLD23wTM",
  "key17": "24i7kvkCgPNEKEK8d4QncN7CaP5SzJ9TWEvDnaZEhEwkzVwmWrNFTkpT2v9x232yzqo6CHKUp6jAWRoUHtT7gsfj",
  "key18": "iY2rKJ2k43rDPdwrz2iLKL58LA14QEvHJui9WNXGyhBtCS1Suw27E3iS1g2h2iELZjy1g2pDjrkB6YTZ1X7dMvb",
  "key19": "63FFQEPkxqbzBebArZryyvRcb3occK3bqzHVMXDs49ZV4fDnsaoZExj1avi76JM64RCQaLqVt8WfYzQsEVSCjj6j",
  "key20": "4UE3iM6zr8eBLBxKhhYBu6TivCuKwthbjfeZCKovtUpUnHKfjPfafXTT9rdFobDGrQJMaGZQ2wttxiskjQDfiabM",
  "key21": "2Nffke91x4k6Fd6xpkE1M5BxakFfSzZCwwDpkuY54oBX4WNKkEPWjw7q8X87ifN2J1K4so3rKU17xJmi8p39JF5P",
  "key22": "5xEBwquMiAUzYi6JpW3C2sbEeTiPxMm9q5z4SuWHEJESLswwpEw5ZxsmqG6uYB5YKtVtVQTRWkWL8GWp3cLcwEch",
  "key23": "boadM2sy5nHRzDoPxbCgmdH8fCUsZzkM2u2DF2xDwFCoA2eo836B2aEsdPMtaeXcwCRdr3mMV6TN2Va9UkZLb6y",
  "key24": "3NvQYZCFx9rUgByqg4dqaV8RyZP7AMHVkRY57uR3Vwx4ViN38bkHhbnkHsYUPo6VA2j8ygEMJiHQ5myC6EL4qesG",
  "key25": "3iCLaiWxmN8RLtjAeEWxRSFauyvPHL88CrCmKaJjMprARx6Zikznx6dFH2QzLYEfU2ksXuTFK1QTE3SCRNmaSaN1",
  "key26": "VmuCTAbYUCB4zMgtSdXLi5DX49nyv1bNkXARXd46ELjFM2iNBcnsCkyCasTxnVb2RnS83rLUzojZUF1dtZHubsg"
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
