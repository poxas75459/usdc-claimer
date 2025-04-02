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
    "3fhzrohhDNh86uxAJP6HoMCu9AsGVNRBJ1PHQgJejzEFV7dQP672GmCh6qsREpyB65WdvqgboPjNbxszgzbViAgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nm6yDA3Gvg1cMKTBXyseDgHdvCB8PxFoyXxR7qdSCqxCAspcSytEDSoDj1zpqr9Q27ieGSnqBzHsAWWUyvi2iy3",
  "key1": "47nVjV94jokyqgVsaKoyuPDEn4VzSnL4cAbbRfy3NHjxjEz5KA4za8ndB92BWS72HSAzuWARSHLsXEinSYH82bwy",
  "key2": "NhiVJjZXkoWbyHt3MY32cDuTs3sSnRVj5CcD1e5S89qA5mdnuxGnmMgxeHroenEFPt9geTpa5z4fbKeN9ahgb5h",
  "key3": "5nowNaRiaXr8R7TRTW9e8SQigVxodQUUxHkGnT5gRpC3cBMq1e6Rh9CgWHx5HGrNdQqUZMNHVAyZWNJAFJ6CG48T",
  "key4": "31Zucqt4YrP99tMfWKmYQcLe22oMwW3c3ymPLY6c1PtkZbowGEGPweBosjvPxeoudpe6eLCygH2K94L1wmiYFPAt",
  "key5": "2gGHc3xALnbdFS4wFodQknCYEd7sHbCwQjFRuRZDMGqnRzXvNJQXPZFhuysacqEM8Loq2LxyL7T3M4m2n9Mmu4mH",
  "key6": "4haDk2pJLCTQm9iFF3XpXxqHjBdTtMQPAZNJdfoBAsj97AmiRKR1opqZ5tHJnvb9UphkD3646cLoEHMarEndFT3R",
  "key7": "3XB7mPKeD4SaTmH6AkqcWAR174gtZ3V5Qtc5iyHVx9jdZyCMwA3gdJw4CHLdKRqWw8KChRFVp6rkmoBCk5dC8r7Q",
  "key8": "24ZuQ5Fhs5tpqrdS5N81CgHtD12X3GdEBKqc3eqiTua6ayWAbMoKGPePkddkLuUhCXuiJFaLxv4zr4pTo7j1ZNyL",
  "key9": "4AyLWE4CPrY9AVk9nG51AQQahUUm3MFomRQoUQNNhZvLbRKB5dKFDBPoNB7YekMfdXp3vM6KgxkzceRoQAjmYG6j",
  "key10": "4k28CV88XyHnzR5hYskj7URXDjyQAX3ZnshcZkWAwPWempLXEKBNjnDQppf4HZBkYEeoRng7cMDusw5ZfuhMtB7D",
  "key11": "5wqCT3aiojEZDarCFPxx4oya3BQeEMUnwNEeVvMFs6Rt3kgmJ2QooBbN7AjK6iEqDc43jfAuWisMrhiqRPFtYQbp",
  "key12": "2Q6gAgPAmbNBLe7S6ComfF3eT2wtv5NcUATyQBm8YunaWWRfUSxtg4e3xUGsoHWeFmtm2RWpaBjcqyic6YatcPNv",
  "key13": "4LGasm9wCUATWG7EZT4vSz8g6bBCKgvN6USHketssAXPYB8WurYjmkwoVL2CB7zXymYtwTwQx1mjdpakz1VbZGnk",
  "key14": "dVbpR9nqKzKCSjPVZ6QzUP3Tcv8Zos8Mn3NREa1j2rCEyuk1BLE9V4WVsd6Um8mG5CbVAZQ4QPm4MjzwPaMshe9",
  "key15": "42XHeM6RVV3zo2cmJ9KDVPJRVCZnvUnJPRmTLRL2r1KpCzcZkiZwHi79YWRwoGHnKnnoK2JWFCDV2uwdyDGRRAzQ",
  "key16": "5L6sck12saQaCmPFjnPEh6JmRT1vSnZVA8PRxzSdffS6keKbGyeX6wexQMXttTydfBDtHbxQXUYgeH8VMFV2mAX5",
  "key17": "5po4LBP9JzNrfsq6J5vnhbRisAwxZZETQacGx1Dx9bKBMj6LDg2FxGWDNFyyhVEBogbtPXsVPXsEpohFaMVdwdng",
  "key18": "ftyMcK4MNCMJ3YbeqaxuUS6qnryMSVdv887p9NsDVXeDopjTjTaji4MtzA5EVrPdt546xaK1rhAf63KKe4jqHrY",
  "key19": "5ZqEjih7k6VcBHwCLjNViHfcLrfMJcJUCdNH5q3GHtXDhmWcRFij34TgzvYAecey8GDxvnnmKckUswj2pjZnLUzF",
  "key20": "4kxybd7tWEgNBTNSZ1j6qUggLLuC7yMNYUh4M2hGuypWsvqj1V7VbxQyXviKLMSyZgf7x3iiC44Piohno1m5nYiq",
  "key21": "oMn2evtwnvjChiEW1gHwUM6sKAs4BkNG1DtXgLUnyiupmeG3Jr5RfNxJ1afQLdaD7iDj8sTfgcjLUAjkbVxMtz8",
  "key22": "4pwY2YEGjAdhgDb7WgGgobF1vAxR5xxU3wvnhMHxV1US62Hbf11BRr782MZraRTWewM9tgq2jEhUvLb5nVL3Jgzj",
  "key23": "4YVqYQJdfBLRH2oqVRpfcegnRP52nDBL3HqdW4e3ZkV6UB3APFY2Dx7uViS12Le319LmF6u6rF7kruuZT6C1Cp1M",
  "key24": "2tvN7ShL1R8kFtt5MZZpCB9fVexf6N1gUARveuaqWUFuyAmgsZNHE6orDx8WoQWwb65oWSegMhPWsEPX2ZLp83Rm",
  "key25": "e2LXWCY9DBBZDaSuScFvusVcYfPADPv6oCU38ddXQBSAUX5CZVXYgaaZLtnHMs6EP9CjGkpCD6iKn4rLfXuJFWB",
  "key26": "eF3j1bQhGqegNKfGb9tw5ejYvBHsDK2BFocmCNxzKpXN9NAQb53XK1d47HYZ7K8jjDKHfcBm2WPmzsh59eEHafi",
  "key27": "2qPZB1jtE1LD3hn1ctQuMeGnF8LJm3tLLcoP9cJ8XwghSoBYYexQk8YpPACqULwrTG94GR132fqQERwmUhx9fu48",
  "key28": "JDLsNKJL1H94TTzpzrAc5qW1m7UKzZJdbQARRTXVt7fvMrS5UH83dtY9WA333ocXs5sZerTTdX7iAzsXrgngnzF",
  "key29": "2Ukn4FQNXyuAPodFZNcaxbKxH1yBM3juaZMexyWxcCQPdk43GavQMd4GQ2Ga8Sudggge6Z8rKaNYuQJPo3moybqs",
  "key30": "3343Ct2BYYp45Fq5Bty6hDGnNoLbh7mQ16PadavbWjGmpBK9BAHrRuNAG2s1GiEooJYEjKHmX35DmcEMJ2n7uxx7",
  "key31": "nETVov3BohcB2ivbCHYjoavoY7FfPbDxUFSxywZtkCkYtpUbMWjtxVs88cxur4wRSguTKbVNSg1kmimj3uVM81w",
  "key32": "zWsdGBiobqr4kB6VgE9oXwUXau7m6NmAw19X2ki3QMfjfgmRu2G7j2C6PTtKfwKiQwqFPmLmkTk37y8xe3fFqsd",
  "key33": "5CEdKtT4argfbfJDEStNKyQ9MQEb56e6gG8YFaqtrAataF1qRPF7ku4v4BVqc89UhtZNHWcG2DozTdKwQtPgL59L",
  "key34": "3pMYbxDcishRqmQQfcKEEikBveSv8PmLjQrheaWmxfWAigPbgQvzegXBJvFRJP6b3bHyvjSx9saVBMpV96B8mbKy",
  "key35": "5KiNbjj98khFsQRTioNNuSBFaqkbptWHc9BLAP8VHcBhYAxtWSSheQd1WVdKoxdQVNJVwekRSLsbMPQY6rbWeaxr",
  "key36": "5rTxnRjbgfdHsx2myCyTmqG8oWMLDnR5fSD2J3MLisMjiSdEGgpgcaGwjyvqfu2QxHbPZcAMjpGzMXsUtpkYwanJ"
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
