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
    "2hq2dikzdx3jnPaqguKDGQJ5EF2kb2JFHNiVSGNMMoEaA19J8C1GYgFNcqzqsgHXLLk8qEYkr1tfauPXyoPKESz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R7U2t9n54Uns2xKTzyS8CaNyRxvHz1hkdHQBspsd7rMVcVosBCNL6YVAnfpv9A3i27ciNX21wKhKyC7rS731PqM",
  "key1": "44amKSUuQ41L9L9BhHjkw754dcUAWBNB6G9Q7DGJgSgtPnSrsksvzvWjR2aSCKZpnRTvvBLGQqS6N2Z6XDzU36mk",
  "key2": "U4dhvtcGqWPWQTUVbNjgT8jBk9DSaPdq2vSJUDP8qtPRUzcZtkfSyrJw6881ZJhNa6Mah8AjHvRkjHvWAqkZNqc",
  "key3": "5tPGp4FSGCfttes4SkVmGUWC3S7Fq3KpdDSFRmjHS4vx2QP1RZj192EBsUi8uvycsPYTUBX8yF6McdnmdDsSzGPu",
  "key4": "5ynF9qQqqk5DJQ42WBmRgYY4DaS1qU9ahLpJ4p3TVMqYAvvPYEjK9qHGm4Eim1w396bWk7GcZHBxxBeuKAPJtepX",
  "key5": "4WQdGaZvwzymPZYEUnBUNWHpgf1Yv5i8CnrcFAAcsfmVsZGjwFgRfoWNtq5BoLCdGPEsVTftgGbh6WP78eL1pxTW",
  "key6": "He5bk3dpT6Bkn6DQYSm2GbCfeqJFPfhhrR8fKePhnxNS7LdP7FZdFEkr2mGU8c1Y1mfiwa97jn8rZwEn5atUVe5",
  "key7": "28etNjQYtdGsULuaWwKdgWgS5KqCjjpGNW6iazgTh6wYs5XAYcCs9dvR1mWr33uMYMRr8hJeQwiwAF7tD2wU3aJN",
  "key8": "4XbBAfF9cePBrxpMjxTP1QMX4ucifnx1gTbDDM8FxWheCyWwjzJRp7jDQnMGqHkrgwVWhFyF23psPQAePiACgZTA",
  "key9": "2PBXKMvYmscJMQb4qPBNcNrvnrcMzQj52sNWWqw9oSj3e9ge2cBuuG3hnjyZT5eQC8WDqRNaKyLqALatZQPQYB9x",
  "key10": "2Nk4ssPE3FvERZVnVbtncRMT2bFE5E9RtuEzjNhucqXHkmBDKzAknmPnQakAzxey121ehJeQMobct8f9KJMXb6Nb",
  "key11": "ZbZvtW7cNs4WTt2K4gksKez3S1qp5DRbo49FjmY9mbgAVfTc39fmhiW9d6pnoK3BGFV25jgMSoKU9iD2UfS7jTL",
  "key12": "3WGJN2YF6gi14Zx1TdtA7dL3fvnQm6QMZnDdw8PBMGm3n35C59E4MrYxE3MjvNvrCT51BFcvmok4YowsfU6NbHzu",
  "key13": "TX3trNXKTwZTTrBi1rEKCiiqRWdfznEzSEQNRCRY3CUrrAkwjSbXARRUL7yPeykJv8QP7BTumbCR1BiijLHyWT8",
  "key14": "2pSCo9iUFyA7fqD55y7Jy8f2rvapvQfGibRSPAnaDtNDfMiGhgzCQKkq3eQAvhBgckHvMSSt6KkMsiahXyQ1PjRk",
  "key15": "3KYnNqHUSjwRFBMMe9ADDwsYWkyw58azFqbdbuZSwws4e6iZXAgHr9x9Uooyb1a83roHHqEHkr8tdWf2AkBgRSxx",
  "key16": "2cGaCPWgcjjW6YMBdaGihmAotZhL9nXxEq84cTW4kEKQ2spTGMK81MTyetyEb6iLRa4iXbfSa4MocNknRvDxpU16",
  "key17": "5oEdeFomHTzdyn3wziDT9eb2ERCrmLpVjdkUDuAYYNU4oz6XiAs7frszWS2y62VVFffZnBJJbbLyxLae3qtFTeYS",
  "key18": "67KXGt6nyX696fRyUfn3wq5LFio1rYt2BGNgF7CQ351GpjvM5MTzi7bnKEcwaGMwEaPP2G4Ske56ZT9ZqDBNkAZ6",
  "key19": "4aQZfAvTiNEpDbNNbDAngrcrW7Dp2AcDHxdE24mW5oofN3VkHKMM5opWn4Uvxjyz963XvTNzpQnaCMYkMFJq7FGx",
  "key20": "322S1HdYNgh8bJAu5XLuahMcjk3XnuEfXH2LCaE9mZC5XUUAhUFDB4CFW9hAPNCPcs2enozUW2pAa6QKuLmypdUk",
  "key21": "39X9GDwhE5YXHrdp5NLFcBzDZxDCK2teP73GMpmQyN7Bpzoon1tKt6ucheGv7WRQuZtQBCgQ4PjSHk776sDh6oEe",
  "key22": "2Jy8WiwhdHZmDzdqxsjGXJi2nVsmP95aZZp83Wm9mPft5uQ15Pec3imNsrAGe7JdZZQYnGN251faBt39PCPN4p5d",
  "key23": "4T1vDNDfhUVmkf7ofq5Noic97ZfB7uSb5fNnydk8BYLTi1VjYFhm6oF4kbqq9u1es71F4TMyRG9WTNmJsEiFGZvu",
  "key24": "3o9TRxefHXochDQTP4oAD3Pt3rj2gUSnndVm6pGyDVCUxMr5dp2WWnBn7XTGEdD5ptjEFXzCLErr38Qs6x5MF2Q1",
  "key25": "vXqLE7SMEAmcY9oTYpWGHhut3pkppsVm8V8zm1yhJg7XSuehxki1ga3PNcr7fZTFnQNeEkhCVcHkMhY6X5qrMKz",
  "key26": "3LV3vA6zneBDjdzFDDcPaNz5gDHqpeM79Rf8je3N73Nb8ky9k1eK41bd8NePBtZiAusTE5k8XgGZDzczcevQduQ8",
  "key27": "42d6P8B85VZMjfKiu49EPoJSztyJ8UMQs8x1v2AmruzFWLC1FAG43F42atxGd5S5x88NVNTRrM7VzqafPntYUNNV"
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
