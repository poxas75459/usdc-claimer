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
    "3A7sph3Dx5LHrDUkJZ8a7uiFNzHcZYrcvgqLoDFLYY1agp8waaPHvnz8Eao1cMkW33UXzzhrv67Vhhg5horm5cWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dp4yytvrkVWnk4pWv4wqf3AzvFTh4uwekSCz71XSXEhB3PtTLF3YZsmwnW76YtkzzyC8Ln8HMZNEGWdCZsRNzP",
  "key1": "23NVAgQH644fors97xdGoxGPHJGy8tkdu6vLuJPC2Y9BgaHdfT1XEvjMP8pAvwKqwMe7Y8dCb59hctxCcrisxN9q",
  "key2": "apB1Bdz4pmuArmmSkZnXV5p4jGC8Z7irP72tsrS4jZZY22TKfuBBB5jasm9acY8fKfqcQqCTn1Z5wPsTmuuYd5K",
  "key3": "3d75oejm842KSdDZs6BcjvwvrmySzvZcthQkBPxRUvMoy7BZJHnTey97KFr5eCYjopRsoVJMTEHaEzs7vc4oBMf5",
  "key4": "26ycujj8njHDc7T46umCXeCraBVHXEyrdD4nQci1draGFdcQqKUoMt4nD7TB8NJwUQQVaaY1LusAUk6yFocMDRi4",
  "key5": "z5DASsj8RX46s5FRC79rHub43f9CvNGaGhCYHHJo4YoV5iuJGvY55bRDpbkcfpvDnh3qGrMvRACVHHKj14TDYZx",
  "key6": "2BG4kFUxMEmAyvxW9vfrQsEH4PsC9RpQcda6Y5zkKvRL7bAkGJKxFCVq4CnCTXtc7Gboa9AbDMRhQkzrpL41ACP4",
  "key7": "3h8KSxp21tHBNofQpHpdsRJXsKehJv7SMmPiuPGXG8EB3ZATjQJyqafRnb4J643vHm5EPk3mU55sPrxEcZVpi4Er",
  "key8": "5WZ3CPfYVzmiP5zN9itQBiSjUpf93ssgMM7EprKo2Rzc7kZLDzwzR8Kg96ejBkKmjxToroFjSzh5iJ5TU5kioZrv",
  "key9": "7D7LJa4nLNmEKhPvUtLgjLoDmL2b73mSQr9VGh4v3K7jjpKUttoMUCLBpnf8pZYaBja4HnoNWgz3oHxhi2zhwiM",
  "key10": "tPqh9kEZyyMyxVtfze5W6oZr8f9RuaYWsdFEDuetJPorEhnZ838uHNsLk1kUyjvNFGrz3g9zusLwS6kEquoWvqY",
  "key11": "572wPAWmD5RN327rwekSEqsYkb2yxkcyK7JSmiHXTtctMDHmAy7YvC6QDTsHKLGi8HDMTafezFwXcgttk2cjnNd",
  "key12": "5A8U45ZdrZJ6HPauNDJoXfmHSWV5BdtF58yK6ZrBhEb7bTcVFvrjLgRvjhCK7E6cW8aCiA7di29hgd55RJdyzqyx",
  "key13": "63CyyV7re5SETgexv1HLcYkBjJX6MqK65SYrJvZCsV5ggsUDLBjuBFhYWGGgA63qR8eNjbz6hDn1ugLG3hrhtwFX",
  "key14": "592hbeDju7fL6GvuHFZNaxFM8j7VbD4VCggCJFQsaRXtXwqXTK57CgAWz5w5DHqhJHgEHoexcgf3Y4a2SD7zzi59",
  "key15": "577nwFA3fnn1Br3eFMZRD8MESGeXD6M98S1NFEA3Zu6YPzgx27NAJwsk7CNe6SE8KpzHN2NftVtuMxXw6qszMTws",
  "key16": "3admBXHpzqHYc4HsovTH7NXsrPmRCYxE1MwTYp8nQtanHxGQV5pjDyuhkGn314mTZ2oEXz1iNpoHaQ2EoTTDttmG",
  "key17": "2UKKuHZuqV1WKv8ZLMpToLtZcRnZ5TjbZ888nNmcjWABrGRZKrgS6a9bP36vVQcmWGtBWo98uN5yyLnkuvCnE36j",
  "key18": "3jnTfjxkb3phDuutZwqNR8er92dPCHkHwdS8RtfAmunc3SCm4gk9p7objeqAvM9G6dwnWfsJFToUmAWqWXqDBFyi",
  "key19": "B6mr15LyUGwFXPCSL4dTvLy75GKAPv8s6fGsuyZCG21dPJW2SsumpJXUYDhAwurwty94MNGLfdNY75FLoduUNkP",
  "key20": "4rn8yed9PZuf43qmoHE2X6EYSMfg6AGJbgMxg4mVkutUs7gK6JJ9Aok1fAoFC6PBQkG9ZWAR2fJTKJDEZqtPRMnX",
  "key21": "3KkDyERtaxgdkLAtmXARF944qG9XCuHEXLQwVkB8eAe33YLv1xtae6WELUrAFRBNJRPKCnBSnRhn1QwVwM2NFuX6",
  "key22": "66fccfzqzpvNn7sCg35RKPTmpSk4GNqCQhi4v4Pq5VR77EBpPdHMczbo4XW5U4NgWF9mfM5xKmnNrQbbxL17APw7",
  "key23": "AecaFoFgX5ZhdErCaBeSshthxovGAntQbLPzz32tg5Lu4MsaNP5jNi4vaoJ6guoqB5Rmkix4dXKgyzuPwYVFxWK",
  "key24": "2dHKorjebJnJmv5iRGc5HE4wFGDUgKjhcpR3ubcAcpsBDuEsPcywgNui9YBwakmE3DqAptBGedWHsjxWa6LhnSmy",
  "key25": "5XY8Hp5iLbFY3uPhqX7Zzj2qMPLbjeQgmfk5iH4mKYU7u2asJzo4qkW28PbkEH138MUZ4VoLxNSfsGhY2bKBmkQt",
  "key26": "3r2gnifqKRGZQRi4Egs8DEoeLCKmtYdCjZyZnuuKVXCFsXizDNctyJB6M3uTyByJF5infmh7Rd1FLpMp1ZZChB8U"
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
