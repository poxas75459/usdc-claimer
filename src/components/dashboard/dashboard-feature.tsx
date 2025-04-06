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
    "4RCvagq2jmc3zujjsun8nUpJYK6rDT4fDwNnhR8q7ggADmSLWjVBCEhvPK27kTFfsxDYtyKbmA1yYtHk2zEPAmon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ocj8DadyCEMhp4beEDyoEaKYZjNoHtgjBD6v68ZUSH6SNSz83AuB9u9dHD3qNzAFVuuedwsMXNdVdUrhFjp1yGA",
  "key1": "4qgkuEzRy65xM6wyVbXcaC2oPPdksNoW5WbkcBFqPpb3pfCqctamcyJcrNXk58UheSNho77drcGBX539DL4PhgpT",
  "key2": "5U3NrBwMcEPQTgnk72F51u6s72AkuppfThKHuwURSNAJzb4qBijANdgLem9ZbQ6w42vQzZXhBksmQcMB8qmzjafT",
  "key3": "2ZQYxjNWsMGvELvgyPonwfkShjkdArLsS2bBDVgvra7iCNiZEk5G8Usd1BHtiLUGugMrGEX7ap1znKzbTUggAtWP",
  "key4": "3GorYib4m76dGUcc2HseuykYJBFM3fpg3oRnPJi8HbMFqueR1RkYuhd6WYDEzoSKWTg7rPdQkoG7K5vZzmmvwHvs",
  "key5": "jnxo7hcaS2Hhqpgo32RpJM5PQ7y6xeVvWjkVskwWPNyaYfpG1yhfxNT33xEpCpNGRC9zbQuLEWiVwhZW3HidC8H",
  "key6": "2ujYZzK62aSHDdoq86AaeS2jYQpkCQagXgc3A1vt8Ao9LgT5RoQ3UvV7gX77ZLT6QQ3GbRFRxsx295kjnJhFwVPC",
  "key7": "4wBx9NsxETQRy4QQytjH5ony3JLbHvZhhXbifHiKzdwYRCDBScAu3kBNkbQjbqrYscD8zY3BxvFcZnh5vvdviddu",
  "key8": "2NLMAagDCZNoBwAcPo9RpeVGQLN9G69x2tGTbCpPFpWrnivm8U2xopnWVFSGcPt2ZygJ8Azu42vQmzCjYmyjaQRS",
  "key9": "5gP4coDMxbH5r8yPaC691gnPSjCaXjnKb6yLMmksCZn8GHiDGpUb9ChUxARyNyY74fxYZD1q1tJxbf4jWHtWbfRJ",
  "key10": "3bgh5hDaJxy2mYFaBpcSKzHCrWv3cDSz9paibj46jW9noUJbQeZY6VaSmxWAGQJGLEKXDFtXRVhikJv8WkMhXbH2",
  "key11": "cBBjBdm9RBaTjH8swanGvw42sW8iiKAJm1z7wZ27jj9P3XBAmesjkBUA8BV4GaCxxy2HjxgikPwVQrcRMHQGAaP",
  "key12": "5QJAXg6bkhLbfF3Dsujtgdsqk4Uc6UYxytA59kY5c5nLbzc5qj7h4FnJoZPCBhYAcCVQ8tqVn7ySaoVaypWbk1kK",
  "key13": "2TAMLHk3RomRsVirTqT9GAjA2XLmP11cPV1Z8aYKoXs7NQPRRvx8QEKnoBVaJ4EDee3djxkR5YQDas8acVih2WUB",
  "key14": "p7NXyHsa4sQmWDrnKh9MyvgMDVgCq5YxPXBieLC3Q6XH2PsqYjRiCLTiSwa7jWn2i4Ncu823XpKoRvtGkhbcLqD",
  "key15": "613gTuis1ea7D41ayW1YS5UeBrtieBTaffH41DnsRFanDtWN9BJDm2FfP9sxvsGNUXjfY8PvRAkibtNpP9wKhYGH",
  "key16": "33sibVrbsJYEdeBxHYYQeTPsQYA2ehN21VBaAGGSH5ws4Ewp3kSEo7X8PKGqZUByCZAFNU5DdmrZDhKtY8VTxnx6",
  "key17": "2Gq11jsWY6kwhnEfVbwnigCKnW5eVoer6JKVzMLGWgFfDdJuDqNKbiACgegtrppwqyv154Am8vz9tkZQrnN8C2vb",
  "key18": "5jCLfnCGJUbKD3nyEiqwHJnacYx46i4ooGa3yx4Wp1JKgt1DdA4smnqcyCfixn3hu5dBGgZQU5DqbdE1NDuVe935",
  "key19": "3ekgfAbdwsdz5RgRLLiLPJzXpHr6v4BoKyEQ4ytDWD5Ax6gndFjiHWrvKKR31ZqixTvKPrEvnDenYuBD4fC19wya",
  "key20": "5BkSPTQ5zVsTwVeHQJwnSDDk2a3myKQ73TH9AKRYJzUvqyg45PTe3SJSm61ctJ2FSGEdxjxurw56ThkJ4JxAqk6C",
  "key21": "ZB31ETrktvZ93rGuNjhwLp17Sv4BFThEqe1SphoHfmF6JJoT7mhzCHXy9H9Qkbqj8DBW8Zg9qw1NRcu74UHbHBk",
  "key22": "6mdEzV1W7JHQdVP8Dn2GrBPSuYLwQHV42d9xM5iwsDCpa9Rd71UHBbT4sivZgVoG9ra9jwzac2ZiSJMsaSLwFzJ",
  "key23": "62Ybz2mURpxRMGaSAm6JeV5ESNC3oz16uiNH1AKBtF5C4hsqDXLBFca1Z7equpszN6fJaW6XriUYVT5TF2qSuyZT",
  "key24": "5L3yrLzR72A5fNKv56DLGFYruU2fm5vF8P2qKBt5Zgrs3yzFYLhbVDhX3EEHABLkJEPXUo19KLioCee8TUjnN72M",
  "key25": "3heBTs1g7vPkUUo4EDQJCqCWByEUSz9UbRExE3LrTu7itDYkxKerB4h2g95dhZEc7xD9gY6JojV1QKQPWVQ691Nm",
  "key26": "3peC9SSCSQW6LraXEEv5E2w7rycwzXWabchJbQLLpD44Q7hmdAMNyMz1z6Zo15mRi7GNxkZZwD3ZSn12rWeP6LcZ",
  "key27": "2mermFyDcBoaay3eHhqjVDVULAxEuXDgzYayyRsa5wP9ZU8H9KzU8rTUk4Ehb5TisPBpjauStEoEbSc5S1jgFki6",
  "key28": "7NyVWMMVHn1SVoYzqPNbz17vjoB452PvHmfQ2swg9DqD4sE8pk834rF9gAehT8pZiFN2zoHhxcLmMnMYXcocAoE",
  "key29": "4WDbMZuJYXKNhVK3LKz1RUiDAMn1V4DWCFyR8pocMuHS9KjFeqQtUoYV6pnAk5Ud7NEXp5FvgDTdrPvBMaBjJdfe",
  "key30": "5fPbTmsTxPbCTuvBE2r1Lo2rVXfEAze128wGiooLDpsfFFD1H7i61d2JpTrU94anrUKiVEePgpRGUZepVeTLhxVN",
  "key31": "3MyjYWv6mbsccf3MUMui9Sum7qSzKUeNK5VfhZohNZbbxZJFpr5MAfQwrt3cz1Qg9Mecxe75cWwpdPtsiBj28snx",
  "key32": "3DVJJpkM7Rtm3YU49ib9MkFmzMsh19giqLxbi2fwQLFxwsJy9qxFJ2BSMBDfYmkTmKXdzbv938VrVBoCuZfGEYNv",
  "key33": "3WzpehXjPdwn9pgGBzqzrKgMn2QfFSsDqzc9BuLFrnzWjqJ2nYTt37ct4eGWUwf7j5Z2kByZyHKdPA5cLY6qcdPa",
  "key34": "3NSRJv2XN9vsBfr33BK8yZDu8ZkshVoBK4v2fVex31igvkThqVbh9RrPheZpiV3znYk1zqjmmsSy2FnnWakPNLv9",
  "key35": "4ovkF7LqYWEvB1xxXbNEbM55ZxWQNhGsRdFGFNjUwbG745q9pqZZDMreaEqFWnC8ixEV6v5jLe4KUpnzgKY1n2Nd",
  "key36": "iHeHYcsDzAy3HM8Z5z3J1J8uToWYSscPCNvDZ29mmyXbCiwVoUCqna579RDWV3CzN3tF4gwz1ksBvCyYjDsFdMr",
  "key37": "5ZwN7ZMEnqoGNA7aVxMqn1dw68zn1DQjaKSgJzKtAPjSUu2GeRcp51BEEAWAQBWNwFvNHV79eNNJpnL3aa8siwNb"
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
