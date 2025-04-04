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
    "tH7tVZzv2qcXY8HzzTsYj6zMWRiYokmjgPTiTxY3ajVZTkyNLipdka2cr1kJY9KyRi2dxBEwYQ8gS1YfpZtKtJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WyZj2kDV9JnsqguqtqfkR22EU7cgyfMUDYpgKsanwt8F6CDhe5ZoqaayijTVc6ESdVoeTww6Kt91Yc1rx5NyrAk",
  "key1": "Sr8xgyENqNn4h9VLJCkBoDxQzMkRaRHFH41qpF3FPURtKk28ME1mWpGgCZHET8juMq8CyGZdFe5aFpPaHvQ2vmd",
  "key2": "34BfDSBFDnZJWqSHYyTBSjEiQEqjQn3C14nZdD4zWnharYYyAish4poK1Agf7JS8w3QueSdQayANwtBpk4E8UCcK",
  "key3": "5kfvEbjBG3NPf33xPwyPbFRHTZss1ZPL6uauQSS4sabXY4SyfCbzpzZUdQk4mV3mkzjPejd9HXdsqDJbonPdpfFc",
  "key4": "3CmsMP6Zd8TYKggoag24kmwqpe4uKb8jNzowyMppYQgW6tp9uGEqsiznbVC1aPGie2dto2jNFwwoThM1EYZZBxDq",
  "key5": "22cSsexnaCKMu4UbcKDvASvRMEESL7qH6hbjpSVFc2PkaC52E97mijVzHtsvzBhZc2GjAk7gMuf7dVbDTyYfpgq4",
  "key6": "5GCWrx2avM4jNFTwEfK6yz62fCeyAF5fdo5hDVNPk79uyLoW6emSYoagimtz1egX82VCoEdjpDw2JSfsv6WoKqFr",
  "key7": "5HmRpjdRfFrUFgEvsfxrkbgXENm3hh4Lfzty6xbF3v4gP1oMcFvDAV8XS2Sp9QZ99DjbJa5HMhnfKWeFcnkV77Be",
  "key8": "2mfSwHkw1Nb56TAcEewpDrGZsghBPZAoRx33y6J91ZH5jAnJZgLkY4hgVNHtzz3WqrRdW1EhKRDZnvzPfzDCX8Yq",
  "key9": "3oGPD1RLqigfLUqYA59j6qR49LJpBE4jAGg7JiJLfBhZEnRYuZaWueN4zZemV3pMsDBgXpA91ExC7X8jvtfstC3p",
  "key10": "26BvyUtXM7PgacijvjrXD9kgqTNsCBMK8K4FXs9qFUFG7JnQb2ZLnvSH6WpfFLkXBekh55hSE2zXC9YK8iyeUQ29",
  "key11": "eyeyRtKL1AhpfSbGwfszKWnjX7ESgRaugrfwekN4o1Q1tGiV183Df1s344risTRxCb8D9T2xwBv9Ao9sZgxmHgj",
  "key12": "2L2DAJDpya2wLbeKHPmhtkmNmLt1jkUvwaD9x64jfPxENE39DVLcxWJRh6TFCBHYKMRc1Xa3cdSwJGJno9dodeyx",
  "key13": "2fufaL5QViqcTfw2S6bRzrZFDfnM1fTTUxC2hAU7t66rs8aZrWUn43es4bvJk8EjATTSSz58KcemMskYTHvSoNrq",
  "key14": "3DC88bqYEk9hTvYcetQv8hikitsS3Da385HC4C4bpCHKxDLS9SBaC471vYEErp6ghHzQL4iiu5Qm8uCGhspPr7c",
  "key15": "3DHMoCyR6Pyc5jCMWWyXAEwpT2X4jYPyLyc6W3h6eVek5xM6avREpPD7Lk4vgCK6VbaQuNzFwaxRdkwd99jXpikj",
  "key16": "5FF2PJ9k5GGavjZx3BZPhyqZ99SmvFzt1jFbMXVbFaRqVCYLBbw31VokM9qiT2Jo9cVbBd1KrZVVd8hvf2yKAvXd",
  "key17": "4pmzhPB3nSaRQmq9JjcBUkMD4Kf1LTs6WciydWbWsR7nzR9zBQm1diGpfrAaZ8zc4CCetDSjgJ9oeJ64Xng4F3u",
  "key18": "XGDcqiEybdPLH2tdWormgDnqogZNvyveiqQLEteVs5xCydYu9qhKeukQvqS3MGcRSFMDdpzBkeujMpSqQMBUNZj",
  "key19": "5uzx6AkR1V41J1fyxY3vWSpB8raXNGwakFAXWVeM1YYUkCoekNKTMPPk25E2DdMN72TY7Jjq5bGYaGeSVex3psKP",
  "key20": "aeehcZQAEKNvD3kJ3BNytRMNZ65qGdCx78JS84FHbogRtqkuTXozJ9b2i6xUo5kHh85Wvhc2nsJwJz6mzmwjoDR",
  "key21": "TcW5Cq3mtJx231k5RLKAYwHTGkF5KfNmTigHZHj7xqWYDgretPk2WAK8XrDfndoaVueAzEQsN5KyCG6LFYHPKKw",
  "key22": "3Dz82xYvMHyhA4rAMJrp7PWq9Cn66bT4q6opEd477KMECWP7MWRCZFQcfHkTj4Xni8CnCNzkH4cmMNmVrJVUnx54",
  "key23": "xPEy84X3AiSzspJpsMp12FYQVk6cnMpMhQKnvtKjaRZRLaSpvt9DkRHY5nNRhAPn8t4adupMHW2TkMqxw5c2F4R",
  "key24": "4XGhPuwAA7eKp61h79r4qLKQY66JDYjidDYrR7fHYw5Vwv79DtL3TRNgfatUXqURgPS2jDxTM5F8ppe1ohv3k38r",
  "key25": "3zWXZA8awy57K6a4oYdqwkcyhqX4WbHmvbUkgLUmaePjGbrKCA2xnwwyyz6jUH3DDf3xLLQG4ZkKUcFkmKf8n9iL",
  "key26": "67fjhpSUmUEUYJ1CzUpYrJTfhcoq6aKpynsgfddH99i4sbNQchPqJzndkT3yfmMDMMtMEA69Fq85bhspynTUvsVc",
  "key27": "3iZwVSYUPqjFQWV6N2csZTYWjcTibEVYpzpJf6SQSH7eT1LcAGY18EPFpUrVqwLvrNqtLKmJyMAEpYGcBS2tWpo1",
  "key28": "2ypaSK3X4aBGMwkaoCKyCTdRRLYCEkZTtHWYMiniR5jY3qkMz1shNqNjAZPettXJqbwGcK19fprAGE8tAdFKk8Fm",
  "key29": "5PJmSJ2XSvjqzUPGA5FmmvU5DvxCLmG45Ae31PDqgiHJoC4VQnx2fxPqKW5g6XCqRkkNK4YWeLi6ZyEM9TiRQRhq",
  "key30": "4ujcBGghqSMYqwgwfnj6HUw6Ye1MKCM17SdLod9KBXJDkWjik3XqYb91dCio84n5we7NeLtQECnJ2vnZ13GhUGRT",
  "key31": "3mNFdgZvofnwaYa2sNAyDhSQyuEDy572vw2Saiha2AJia1Ft8N6k1ouG6rdKdoMQXnuEjqJXdz1mAnRCdvh3SLUB",
  "key32": "RTRcSgGVp1uE5svBb5e7FVu7dfy9bpxvmAYNpsftszWLGRL578w2hpye4gJxmnqW2c2FQh96aEp337PPgSZ2u5b",
  "key33": "2XdCvbCTY6HMsYopKsJA7cW3JYk2SSBkHNsNWCQA8c4kckT7gbnnY6PXzVFgtNgrwW14sKPyxMXi2aCCBYmPaZoU",
  "key34": "39VYsnAHczpW4q3ASy7Qy7BSw3kVZvZCJr2PbrLgRiiU29uMrmfUDQUDKQWJATriXG5vDLFoxpF9vVwCgwY6SHYt"
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
