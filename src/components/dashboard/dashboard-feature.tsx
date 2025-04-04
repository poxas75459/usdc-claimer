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
    "j6x5BcKbB1dG4qhGYFxNXwKc6ZqZkW89rACHB3fnoQLFDcTAYoFMBN9awVH9VWpWAukahyXfsp82C6Lu4xv1KtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mxaHs41TR6G2DEkmwo7g9BcQUJbPnEgEeQC4TWooENmZt535pMGSTYMesQPScu5KR7FbSGKcthBGXLgkPPatF9A",
  "key1": "SczEYtYzEH8ZFWaP6aGQ6KJXRV8BzvMraRvjxhLD8nNm6JTKTniY2hXekKn4jzcnqht9DkaJoyrZPFDGC6fCeCk",
  "key2": "4iye7DJcwFp587vcz3VsNcjJKCkR9d82XwNA96CFW2hErjEuyzNHCVESVSf4if7MAj111HcdBRZmEZtHtwa4vQLf",
  "key3": "41pb4P5Caui7ZmBPgVzKUH3XSHQaszcA2rnrkndhTni4H1unbpXUwXJzhqzmzymVDdFVAWRvemkudpWFgTTbQYzQ",
  "key4": "4qzycz39xuh9scoENyxKhuRKBeVCripKoyKivHyM6RVfwSrUjQCLTNdhSDB27beXY8AnTF3VcaUK33H1TEvoW1gh",
  "key5": "5Hy4haLASQHPmHrQqdYBF3EjWR5rFckyZ1ito4Q613Jy3drCnEdvkFDrJPCntBsRA852wTMRzR6qSQpzboZZidMS",
  "key6": "52kqKriV4mAyJRH8wa6D6x3zMibS4Mvkd7dxNaVuoVAozQSFoY7EvDAcrtsjYUrxcYPfC3pBL9Jk58aQd9YTDToZ",
  "key7": "4V5vQdem2Nj4CrMPybnHredza8TKnyh38VJGo9Vsmcj3dXkQvBXiiqU1SepqjDLVqJ8dfDaLZix3AToEzwRbsbNq",
  "key8": "5WmLm7wpjGyCZ9CnYrCdmHDJLGD9NLMwd81dVhrxSV7wDwgHpeLakdCrHQKVejjALNzKSMcuYA2q85V9vvn65JYK",
  "key9": "29P4wh5WzjBfiiji8krfmwSfBJ6ojREqjmReDEhwrzeUt2cesxnLgXXzW1m1nfre43KMDv5GXxmCdvQusNebGrDD",
  "key10": "2DgQtawx8kXZV9hVB4WiAcXd6PQHZDwirmKjsUHEvTtzVSbvKKweryVKavyngJaCygJqsYQPdoV3JCc39WLfvK2j",
  "key11": "5X1LDSfU3uQ3akg6w8xb1NtdWheyRb4DTmMLKMHxpnLdpZd3ixjAoaWvu5Lvt1Gvc768gWhrNiDRaqiKMLf2gmy1",
  "key12": "4Ned8rFD5by8BaZmmyHQafDThUkYE3GS2DAxjAZpYo9yBkZJXxSgM9ZY9BUv4HDMxXBveVeFwPxPcGRUttwo4VDP",
  "key13": "CZW7WC2FDuN8ppWE22Pds7X6gd2SekJKcgxBYs8gaYgYjNLwXSoiFV193CXX3eooMMTBWd63QediDzcNh6on3hz",
  "key14": "iuNvwuac7X2Mo78oFDfbmp2pH2WhhEee2CQp9s3He34MBZBxzsz9CTbxsaqm3KWovnX1QhA3iL9PE59u5BXSCUH",
  "key15": "jcphmXAeVvhkffMbBNnemeXS6VN7vHT2q94aTzpXMmnXnU6p7Kq8ikpQTxo4MMGEzppYDYHDFH8oSTUZgQvFgyb",
  "key16": "5t5zfs3q7qBKvGrSsrf92AD8cZQkhZDUyXzhaFUnGXCS5MUueEQxyHJbe4rwte1qVJ3XRBfFLgUa5d1Hn5AACRn4",
  "key17": "5GxeKVgo6NNPh15DUKcFRfWwRXoUyDPUMQzZ1qHR1WWygJPhj4HLRwW6Zenp8SSosF96c3NfdJDdVMbJGX6ttUac",
  "key18": "5VDK1vkeiFkekwaZAw1Khm9qHFJjQmA3bm7yxKHxjrBi84H2ejvM6tRqu4nbPkosarJSywLP3qcXjUtFeMadp5vY",
  "key19": "Y9eChGoEoNABBTUq4rVQoYSLTSc99ynRDY3vBXn2gt4FSWW3psR9Fgg6o9G4eDEgaCfpBQM3D66bnPuiqpbgWUU",
  "key20": "4aLtmfCNuE1zhUqnoAHFjBy9NxjGiGPnbZHYtXBFXoSRdBD36iRBq8eF3r5YBKB7RCsmdmXjUYt4WrS8QaQp1M8K",
  "key21": "2b2coU2qrAhW1wrELRwS8h9HSH69aG5vwY2D3cgDM6mBDWghuEYYT4sUMhoVK3xVMgwdA2w7hFTiprcb61vp261T",
  "key22": "4U1keAP3EaCN7iiJRxvgTmZ9FWRdi8DB6JL8duGoUZhvrKNF5LdyT2XorHiCyCTUhVUrZQu4qjcR7Knb7Nbj1Cft",
  "key23": "5jG6xbkMcX15k23sDW5XdUzETzwLMzYXY7kb3TJxXMS7yn8MC16wAAH7KoxwDNJzj4UNE9JMgsCujgmn9YoBrHfi",
  "key24": "5cqp23hmgueo15DFYusyi3ieagack8QrfdMaYfzompwngSPLQChmoCuPu7uAqd27LQx5TcKWLA47cidoDCFv1PRy",
  "key25": "2ipQZ6TfKSxRxxqdo3zgJc2A6SYUUvmAUj7KDqLL1FPoMT2mgsQYx5BA61XfkvFqrzc4Kw8nAWqtM6nd9m5CSoQS",
  "key26": "2VnetMZU253S7wTYYWZuqEAZEUR5VjyvtRMeKSrjY53wHCQ6KBTNypXMuwQeuY2rgz38nn3PKyNujegQhYJxADvK",
  "key27": "4Z3P8ikAcoWeLpHMWrGMUAc4xtJv2su9Eg1TjjkCVKp9HQwKYfQ2pUbG2mdVMWAJb3XQvar31HccRwApGLn8mfLm",
  "key28": "5sYcJK1HepuGuCrD6WgLoBuy5bSUov7AryxGnCVjBcM249vZbbtK4SENQfgW4ua6JkLFiYZiGa2vgRV1deY4gFPR",
  "key29": "VnzUZCqLyRF4Fo8hULMUjUbHDGM8TNcwjniUkVWiK8AtfFUv7vYmCaJboE34oiRUz9C1FZPvNch1S3W95WPD24o",
  "key30": "5qLoLJnWgcFiDN1T4HsDqWM4qgLdKfeN1UAF6Sq7wH6herRSEGMmVBXRdqriUBvwKn2iYsQsLdNaHHRSifeFhnDn",
  "key31": "3Lmdsm8GEjVDDGDe8Ho7uhSBTaFUyVc1WypvakEiqGwK74QbPbDfTz7EwKMFDFpg1RfLKr3A9BxLFNrvAAkAVqLc"
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
