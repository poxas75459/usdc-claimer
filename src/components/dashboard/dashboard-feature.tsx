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
    "28qe4LbDPMUtFfDDhotq7VFXepa6ZZkWwMFwPdnyxc8KGTqTVaNiF4wJ7FQWrWdSGESN3AdQPRaQ1zKxLSoKtnjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PU3aHQdAa7oZ2e3g13RV96r4N6Sc6d5xdnNqNkt4dftzu2Md8LfAzRxrP3LmVt4GtdyDCQ4GpKT8jm6KsUF2XLL",
  "key1": "5bQwsF5GizV3mx7CUnPADJeuw4yEw617Qw6ju63FomJcAo3N5wyNS68zrT7A88PDi3VCNCAZ6sBcySyuzsZp9D4v",
  "key2": "31DHn6fHBbVnMGHrdg1VXMoo1gc2XXC4MXu5AYPfMPb5o5MyChYcRChUmrp3fakxKwCo5GDjrBqRzjZsM3S6X6FW",
  "key3": "611zHy59Xxg3z1WWSoWYPa47NmXCDB8Wq1XXhjTpkrKgzEeX6JQnTfgzXVN596dUY4PNxNUUMAAB7MGfPCT3T1Mj",
  "key4": "5mNYnEZGQDByz4EbyaTKguiq3H5u8Up1qbYrLpSUuMBkXg83zB8fjPmzko1gDRqTTwhViBuh6vCFZLayyz5d9Apa",
  "key5": "22335LjGgV38KWRJtyTVYJG8PyvrSeKpA5E2ZxhYCmer1LCwSdsUuyWXp7MARBhixscwbFFwnTDmumdTYr7HhXTe",
  "key6": "3Ncx9v8tWYdWkk8PGfRTYiGJdkNQn6QsC2nF5RdNM1pf9hiN1ZW5uewvAcjbEGASvjUdb81Cd51D29Rg1b94CSpg",
  "key7": "5z1Xu4qLknMxExufftbNnn96WouxMzSAy2JBUBsdxUxt9Z1W32WRKAbw4VroNetTGwr43FUagoTgH9QSt2V12G8f",
  "key8": "2nC5PYHvfEufBEUBSQx5jNz2h6dKPkEd4MikwWXNsVpjLFkBBLhhgGkp3guUjNjm4a8wXidHnzGCMr1zQGM8WrDB",
  "key9": "KaMeTcvWddq1TpvHiNzkKYC7T6QMcxHuvxmzgbmzF9V62HMPutEuzx9AKk8QPWDXco3g3VBAgmDSdMejCTqBRma",
  "key10": "4XE1ySqAK5i3LPHg7j7FEQVMon6sX3PWB2cbeiKY1zvwkkWuQKNbKNh15XiXJwfgcE8fNUoxySWQy9FeVc59R9UN",
  "key11": "2ApdqHztrX3XNKb9BMo9NEoV4B9pnQ9V6VRZP5aTY4eWm7UHS73oLHYCEt3RD15bVSkdRNnXo66hpbDUkswWLxEg",
  "key12": "28t3dmxDnczhby7RP36Km1EiDE9U3rBE4pNmRsd5wCXPrEkzC91PSVCsUZvjgJGW6Tcy6oiWXTzZRDr4SwEkXb7Q",
  "key13": "3SNeVdNQSn7kLXPTcVwmVZm61qHFmCXqvaGM88BY3qcFpZrrxtyxRn9h5kni15cwDQdLTJhjGSDzACQcHu1gNygu",
  "key14": "3HT9x4uJoh1RU7TYrQ92oPiYvKoM5eD4HgTjB2eMa7ssDCg3wME1RV7MRoQ8V8bwictPeHAsZwTrXk3DzWwYoQQH",
  "key15": "2JrMuGrnp78Tj9cDsJyTuT44fWAGguMAWQLUxVqUgAzwz8HLvCgVYtLVQNXoz1ix3rctWaxpXtXFp2SKfJCTmJUw",
  "key16": "5Rvrvfs2XRuEw9UjkuCPuVRXTHBvsrr35eB1v5fYE4xrSGyGysBzyCn5CNEpQKK9fBn8f3G4FAngMYkVHwstHecA",
  "key17": "3yDMDqrHbzFwY5ioXDPo2VUEx4rigjfgDa4fPQP8HXS2mdSD5Q56PPf9zykxVHxxdHqSTogca96sxKH32j3scXmQ",
  "key18": "5oh8QY9ZroytPwTacbTHSEjEUsfa7w8j6j4HQtkpEaZ7hWXQXKx3f1PPMNpbRRVfGmuVFJPQptiXToRgJRXnERjV",
  "key19": "25tbvs7yLcVjPaiDauyBTzQa7cQC4gq8nxeZvfcATY2zZu1xDZvAGJrTX8MQ6nA1bRp5HoPL4pQwf9xbxtVnGCKd",
  "key20": "2MvV4PQobsJyCAnG9wdpQp7jhW2CnQoJKGFVW1rzyLzZKBh8kL9kt3wiSFZSatsYnADCneuwdTRkZvt4rEjHod7c",
  "key21": "31MjFrLBF7dYk2YSWtvVz9nYqdPLGcFbapaW8SRk48KukmFoXsm5ToUuwqyS2P9ta3VFN4GJ2JiHPYzV2zZR35Qq",
  "key22": "STAfEgcKNL7nYKEuegTuguGGJMSrwSgMQMKqxB2hp4rkzCPKJWWxaZ7rDE82pwKzDF5EXEKSkDVCKSrefxLguaY",
  "key23": "7JApM3h34kB8nEjzNa9B5JsgXmkQkcYU4nLmoNDVgdXSmH2LkvJo8t2dnQ3Vr4AF3UhunfG1UYnrfvQ4U9jfyVu",
  "key24": "2z3UUYStzzL7DuX6xJLXA6kTVdJnKepurqbpMSmp74CYHvAbUP2JkJF8rVVchjhDM2jGMxwajYLSMcnFm2wkNnjx",
  "key25": "2ppSUiKte9m7A3cPDwDx93rf2VwEB53mqSQMPp1aMjVbErcwxcfn6vHE8fmnxKS8ASiPG8KN4UErRFz8DsGTQfZi",
  "key26": "3VCtjzUfEvxf4BUTstqwtoAyps8gV5o2ZcdQZuA2m6kSYRLx1Kz4BwzfcpT6bgLxEK1vhk3dChwS9VSpTG8Xsije",
  "key27": "5Qi7CYWF5zs7Pci1TT5zX3sm8MW5rRLVKmRqXrBjYpxLqEYMP3t15TLhmwp3Da47PtQjRzvjoR1YC7Jb6F1SK6SA",
  "key28": "4nhQmMt7wagEa9tnJzbqw546bcCr5djsNsEyCzKAUxFswGoBDmksJdNaHFjHtddsQB4saJLZa7kABXUQFqzNFmBD",
  "key29": "3kHt6XEwWQCwCiCnwTaL8VDgDbotSawGNRUEatqypx9S8BKrdn3taUfEcokS3gdfuMj22pk3j1pmAaN7M4p1x7ZG"
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
