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
    "hMEmtnKpw4saBhzpgvVKFhC2q6Bi4SxBjKYgFzdB3gJEJiVkw6JJVPoHhaiwC91shK1cJNyChnXLDBNDkT7aYBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ZGMpRahGZc5oU6fnEZWzyr1JL2XpB5LYnv1PK5mgnm9pZ9r1wL2By3Bv2vuYdE9imBTBqmguhWju2MTbPtTRq9",
  "key1": "4D4sWZaEgH1GgDM49ccBGaRa7wH4Byymu122xeV1DRQsrWQf4ZwcYJU3uMN33vyG7fHkixqm83qgKiDz2XVqwaic",
  "key2": "4f2d3qw6UBT2mNcLHQsEDhKe5j7etbLGJVyNKZxmJFj4F7ertLgiKpdu9Sz6ptxPQXYCvUHDtAefpCBLfYzYKyaY",
  "key3": "3xoXVhPe1U2Ck7mcS27BVrKGpAd8YpGR9SH51E2uDSmpKGwKJuC3uujimoXsE8BTKPAkapUxnjX1XDzUvjDX76AQ",
  "key4": "uVyVfU4NCRvYdLfgWCvHhn7S8wLkLFoDJaEratditwrxN3akejxLZ7sRNM39XVcZsDRMtW1qovwg2PA9CKnErni",
  "key5": "36AEczvjvfhP2hx1Vu2FdZcde7e79R9SxpwdqxW3exxXt8Vw9CwfjS3dGexaLPoEpf26DjWrZmpnekXE365tDctQ",
  "key6": "5gPLKR2ZPNcgj6HKTbQmymgE9vTJ5LLWrsGVRKcs5tAjBnQeLpeScc6BAMX4PcWndp4Xc4e85P11LoYZzDbiGqrE",
  "key7": "8qq7hC5CKDQaRSqzgeUAbGwHXNY5etRC8NhF918FBg3Jh8amuu11FfT6CX18fCh4kFYrKZkGqVEqRw8Wt83eepV",
  "key8": "48TPEBAMmgVwE8dk5KQrxpVy3CTMVKg4eEaePKEWAjviXDp23bGtkWk6KSY7gmjY84RS2cVrYH3fxZW3wh2EGrP3",
  "key9": "3BpJoLWwgxe6tWtQ3oov6sgf8CfFzbrDaoE7LFeKqG7Rzmxu2ZbbXmq4Vk9hmFEAbM4CGPnrpd2YiZyjij8UdRxP",
  "key10": "5rGNue16RfconkBr9ia9tvhgC8414Be2Rxk4xb1Ly513nzU9GpL8WEqLYwCyqWRayxUtX35Rj1p4HLUwisRMVPRu",
  "key11": "3zWnpBZMnY4gVGt4tcWfyPRn8xhWDkyfmjphe7H8a32WesRJyW3PFte2djKrAxCMeqhUBAKDSWRQydtojH3ivdQR",
  "key12": "3NSqyWRbNrXPzwvkgt7fC5yGZEkAAvaFt7BGWtwQyBroGDE174GHnhDCKCyEpNrg61YPW3C7FiwyfjQhZYowZ1qg",
  "key13": "4sFj1vbft8wTASDp5XkfoYkSXBicnWwQhfD6BHhwf3x7medrM54sEv93sQ66yAS4CTWsBEsJKFR2KCmr1PnRA7zY",
  "key14": "56egw7JCtrLyD7UGaSwXAnQcwb7xn1tykNnDrXcBGVBrR51bEzH92Pp6m399qfcfWLACXFATtzZ3BPY2xWbdFJ8v",
  "key15": "3PAfATp33JsNBcQ1DnSiqxSQBp1oeMZFgj7ZaWPtiHnkD9vP37KX74NngARttx4itrg5D9mXazBvvoVBsNt3sW6e",
  "key16": "8SaPGfaf7oBcNtMDwoEfZ6JZFCtFM8dRsVQMReux9oRZFaRsZJK2MLqvMhrzGW6UhW2pdkuJsSAQUXCQoQrUYni",
  "key17": "5DNhJLZUiSTLEN2245HmEzfeujnTpz9fffkhWTg2tdFkiVM6zdvB8HrnDFQKrCi7ZyYemgK48th2mPGQtGUtcSXz",
  "key18": "5mxh3oH6knWwaeSE7tkHMwN3vVaMJBEprCNvHKTVBUEWQtL2gkPiyxVkduAmrMYSTrZYMymXzwbUfYxyoGD3MuWb",
  "key19": "45cvoBx4yMeURJbAieqThCRL3KFSGvDEzqTWkbe7aiTzrJeA2fM73NGmDmJbZ9NbSLN1VyEAoYjiG2haFnoCuVRM",
  "key20": "3BKgoszCWuioYKSHq2iS456jSCf3CCuPbx3UbyxEvLVTJhp1fy5ewXEJf41Jb1VosPSvsvUAwUR4CWRkCDCLLYj8",
  "key21": "56gx9RJ154ogse16TEKBpJ5srgHwY9JUhkXLst5dRomUEr9fQq8rBZa8NzcXq6UWYPv7MavhErDfCXtUGrGkUfyp",
  "key22": "31LorUjaE2RJqhBD8Kv2TgZuvBvpRD8weHB7VvndG47a9NMaCuvRDDxf6pVFxt2jvHhYCmrmiSKeVdd4gFC7iSAy",
  "key23": "5ug5Q9CFECsP3oLdWb78fG6XkufNpcCvD3g2SBkc7mmXGxJ8vRk8nG9pCH1f6DhjuizqnLbmXMjChFuGJAEbTxQk",
  "key24": "5LispoZRarXfzyFFw4NxC91jFRPwLzY6s3M9EAw2NRUeWEwG2w9Ezdb2YthzJxewUZ4YR26B83BhSbhgAN1BsWjH"
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
