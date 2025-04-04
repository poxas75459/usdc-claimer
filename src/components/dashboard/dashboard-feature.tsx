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
    "3kSm9kaF2CWfRLCd5wUxTxUu4Kyp1yzM1PtXoqbjNVaHgmb8VUXXN2FFFZkNo74o3bgzBunMXxPm34ztkvpVTbcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e2BVACsMfbvHnSsjdUpHha235rH2Yb8gscsmvjCMBQEGc7PxMpXJWdNKRDxd9s48KkjE5NkGsrFmyX9MPtmbgEW",
  "key1": "3xPH3rqkgszfHc9HAwzhd6eWKk9JZ4ofh9BbPJ9fm6q4wh1CDkXRJo319ECg8CZfAH1SPpkhPMVXfPRoPn56taZm",
  "key2": "3dgVCpWJEXmowmvebuR2BRdbubbRA45gZtgzsvXrs8wxEERDLYwBRopEhU2FHsagRc54Ka25p2tBaWaasZU2NCGq",
  "key3": "5ABF1dLJjDJiraT7rtwyFHM2uRavWjsBLZfnS6iujsJJVXju9N4eZ9wcdizngQfzZVk8tPRLZJkU1pFVVoURxUWB",
  "key4": "2USCE3ewDMm1zk5j5UHigJorBFfcDd42KdMKNJXFL7LwztxygboG74X2XQ4XD5pTKGbQzaSeCHqtptmXZqGW8Ttt",
  "key5": "4poMiRyFXUfCbLpd4tmFiipCnxvkazj9xCUvg9KABzuhTCqGdvC4jCUnw81HbMBMktnjqFXpEs8p9JFJuVwA6m1r",
  "key6": "52YqoK9ZqjDo9s5GU7dH3RpnoqDGDRbBfNM7nGtrBypXVxE84Td6D9oqFvWz3mGs4hg2b8Gtou2vUe8ZUExPQokr",
  "key7": "2FLDgQ8XgpEmEPNed9vPMj2uDictoqCcvGsW9kiLw4a2ac4pTjPG8zETgTu9hmDV8dS7ugHTifdRbdSngxBw5Gij",
  "key8": "5kCt1hnTcUvsziHPrtjW71hHgMMPmampMC4rPwe2jTQfYUXUBVWkauJwDJx6sHTyLLzEuJS6PjK5Bou4Z55Y71rS",
  "key9": "5hRca7AK88w2ezGX2JyMqn9qntGXEVf8nhegryoiufEDWpSCRE9ZRdazsVyAtqnNYqaPALKFj86519QYSCJwbsza",
  "key10": "2fmPCg2ppe1XpStMmtT4J8V98QD7DFjhqbTXfEcYVBkXPGyxHPi72hWpdVrpg4ECPtT6NTd7VB4nQCGgk1s5Enmt",
  "key11": "2m4Nazxo8wp8THzZSEFXQ3CEX5SvugVc1NY1QN1ah5M7Kn7cCp2q5pB4TdFKN4wUYTexZFbuwHm7t3gw2aJ3Ed6q",
  "key12": "5Ho3TABX3xnSs4rgLE8vFaADXfKdsFXgEfDVxd3PwiSEvdjs9FipuNtCoEhAedtPimHjvnmRZ53TnbNyLLqiKDze",
  "key13": "51SV6tK2sKSX7NAvez9DShKC3269rsCeEGwtpCJwPwrGbKKbWEZxcsnSifTsML6WKiDd9y8xZfx2Z7faMiQ1ELjg",
  "key14": "249XHTsuovkpF5WLejjC9e5bgUMmti6LkDmgPQcmPkKPA3rdsjvzU2m4YmywnGhhjTtDB7XBkeQG1gUUm6YjxKqo",
  "key15": "3H37VxjzPFvxA8Ve38wkdx4NfmEfYtAGqvNTLjXegHLWpp8BuwuudCDDGWGeHzoTijQAVdDCvopc47PFjwYab7jm",
  "key16": "3LB74JCHiUhK3DjMbDymQT1CcqBKW5NCKU54Z6BbscNoSeEes78u2C4fFgzUDR2HVwTL9HcJwsaBNUURDCNtn6Fr",
  "key17": "5WXKr2T1FQy4hSyi5BUTPRsDVmDRfKQWSaz5i3812MDt1qAYAuiqQf6wuFQrRP27wfUav19WLDTPfR3VH7tXNsHL",
  "key18": "zw8MS6jm36VBxQjNcSzwt8qS5XBNkUwy44UccpY8BtRdBGq9UG1CdJbJ1vjDFnJ8XAECuyAqEdMGQpwauooyAV2",
  "key19": "4iuvWkB9SaYRYWMRQ6WriM7FjBkAPMFtymqFSQDG8YHK9KxyigfG2vgtLvNPczHt3iosJyeuukzgzBAQfoNXv8x3",
  "key20": "5kLiW1s55AXXYs3RAiFtk8Knajd4NDK3HixaYbAnAtLn2uTBs3zt4VUjBuPQALLXfyutEzZryQTNeb2YATT8oKem",
  "key21": "3TxScTZrfK1ijtAmNFBwPzUbn3dod6mMmxNRyWCEWDKrQGeqW9k32Gz8vUHp2e7vvhb6JswUk5dvoDJmvRjRyLRM",
  "key22": "5jwNUKt9QbBx6fQRnN5J2b9RnjBc12YBRMQkHtrqpefN8XgSmy38VhGmzYApCSKrniogdSFGVgYN9xxk7D2UjhYn",
  "key23": "3yiDCa8g1AoG6xGKhGyBGD4rCxDQJGtNxbsxtphhh9rZWpbLZvdKWj17vftvoC4GFCQdzXbdC8vnbsekXde54DKM",
  "key24": "JxUbEzLNokGp58djXiiuK1QfyLCHp751HSkBHTatmTTQdbMoTQSC4D4ahbN4U1X2onDHquWSH7t4dmjMsvioKH8",
  "key25": "4FNhy31k7V2Q3LiEWw3TNCf8GX9uUUqWaVRBogibkqsTt8Mz7aMZc7VyAkqwhBx1QxdxyeTtiRt6hnPy5ErMkXsc"
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
