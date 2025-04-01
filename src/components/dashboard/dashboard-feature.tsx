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
    "5XVfV83BZWByf2EgHiP7rynimqC2usGFQmyGXjXsJLAhsVGhaQcumDXTaa8mqJpNfyq3zfRUydVemdtFN9XD3EwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhqMuxTEAKWq32tQePJ3gYRsZjZT5twbYeA8ncY6F9zrS97pucGZ3dgWzjNhMscDuhmdAWKxrd8xfGM1qxTuTSJ",
  "key1": "5e87GB4ixoSefgHdkV1kRtoK3WkV2MpbPAbfPrwzZ8do7opT5NmGdbKqoM3ViG2PHE9pB49UARzkaxwktw4nSYU6",
  "key2": "2b7cv2iar43DDpdBZiNPLXw8XKwicqC7CXojSXi252nkZDgh1qrsxDxKGvqqSFGiMDTzKy2HuWgYT2zg9bF9U7XM",
  "key3": "3ejfzZdXtDQgPD5YbHRK9Q3CaqHBgAC8B2wiAdLTuyqwd5L1s9TL3PXqKTLPYXza4RJxUD2pVLhcAX2YJr5zXdj2",
  "key4": "4ZC2zffhtHZPX12U4RGuWo9vfCPiRd5sJx26wPuunsmkgJ5ATJCMrJX6DzkckLV7p5oR4Rs5jX3mjoY9S46NVGoc",
  "key5": "4QX9RYKx775xdEiUuprqev3C3PZ8GNdCLXEtPRfrKHKJbAEnZGEsabHT92F7boQxL3Mge5RME5GpLABeUMHHbPue",
  "key6": "37S8Jqu8iBhrCXdpPVF1dfocqL1b2dLmsELWZXwvUAeS2ENnsE3PLQz5P1THyJfAa4SknMR8ozKdWGgQeBFCZY3z",
  "key7": "36ow1dNaNQxHCgoZETefWHeLGXCpUpiNudPHkxbrWBZQypFvTHbxcDw1wjXNXBw9UYYnFspcMKRHk8AekYbTqWix",
  "key8": "51C2pHrqhawy9EeV4aQAVy1p4qHw9n4rc7wqXy7SKdssnLsAiCEHLkDCyPTAJdDyQVtKQtSimWRTSUtyHhDGotnE",
  "key9": "631HNaPY1h2LGAoQRRRGu85FzE93duUWicbvBdiwk69xueirx9vAGUbzG9jdiHwttmuGieMhPoXoyDadwwpbv4mm",
  "key10": "3G6d572df3zcKM74uh7pVikvKRviVegUrTA4XKgk5rTvPXWssVec8NfeH1mEX17ciXA7wTaTxCcRgurYbMseQPBV",
  "key11": "4xJ45qmRoLCvGhLEYpX3YDNjyfeuh65GzbTKEERhsUmcjeEgjzv61BemJndvf9sYAE1fwi8aLh3jGkZWda946LQa",
  "key12": "2A3j22UQdmBNJx6NM2CSd3YFKBvYYby7Rkkbx8toCYW7JSzEWJuoz4Y9VYpcTJEqRyr8jyWcQKrzgTRhRV4ji7HN",
  "key13": "4Z3qp5zf6dutdzygNbcLbRW5X82k9BNxaJvKaH5s7H3fbgckmLzWKyBDsyNGn1hGH8etBd7smQpfWG1DwpJJbbvk",
  "key14": "3E5zCLvdjPtAHC71K6d6DLZh4cnL4CKbe6fjcEEG2o2JAEA1YEAGmEYiisM7QZ2sFFr5do1jwXPjao8KUAtwqJLQ",
  "key15": "2R7qRx5EZHZzoRucpNwi1XM21Ct8Cb3C79jgvGZFR5z7U4XLZbtk9cEuPz67Wn6Xw2KbKzNSc3A91afXTwsS8qHZ",
  "key16": "3LE3uQYKtcWPWE4b1guHyTV1rMufVDvJU7HDMjCZRi6JzoayMqZwaZbPmixqwggg6HXLhGsp7RffMPqQWngppDsp",
  "key17": "4ATJMFhmbkr3zTBGEsnjftgWok8M5mBXKGssjvrU8nnrHLd2q9v4WSJVX8XrQA4Hb7Ac1kqY4rg7aPasirSXZBCR",
  "key18": "qHTns4G8dPPPyc3eR2hMiuahEu7jLsEVn6wg4Xy7u9vtYbhPDxWyqLePc6dkpC1JGiRrh6qPGPZgL4ZaCm2ozAv",
  "key19": "2wJRuy9xxEFybTPKNp9iyz6zDr52FQNizYSvzEAgTnEEHU5VGGY5np1toF46QKBqsBGhHtPJwMgn8JcZKxyjpeaG",
  "key20": "2VeVEiqtxU3oNKahe4t6TnXf54UbAVRmnpvjhfT9cWf2Jizda2642ncSkndE1AmbS5u5XWiLrr7rB5cC6Qpept1f",
  "key21": "2v5p5QXGc9bzHpr31rrBTRNE38JR9RUNTdJQHfz3qGzW7854u6bgmDSocfEPuX5TDWsBZioMcwCaRanpiY82jaNo",
  "key22": "3ZdjJDDXEVPGB9q5JygydL3dTe5BWPyeGcWb9fza7WBbWBSj4fMx9rMFFWfqE7ud7gBbWVqEiCmn9uJLewvwDb2u",
  "key23": "3hdTHJznW9A1KiJxXYe9Ctv8PjUbTMEWe2M7Z6F9piAWVF96s1arnmC4W6yR33HtSq1AuJHSyW2DrRy4gqp85PL1",
  "key24": "3TfCCbQ8asMPisVXxWoK7dHcd2YQoTjtjVoBFEEMQqv1yixDwRaweghrHAWTuDmJjBkKLkHNT9F6X3fyou3Baefb",
  "key25": "3LgdEybvmNrsybrATdF497BxHYRicJgazzjFm18Hn7QbFuYWfApefQzQQopwjBYLQyJ5qwzMbRHD8kmP9PS2ibQe",
  "key26": "U5dA2xot7hyRUxWjLAE4wTN4d4ArX9MbTsLyRFhyqfu9PtkHT785w7DRoQivsUDvivWC3nsf5dnTUdcJCHdjb6C",
  "key27": "21t6BoNCCiKiDYUrF5X3LtZtazixsQ86iyA4ub9zkwDVjyDAEDaCsP6bJ3yRC4vkbFZA2uiHiyTWCXm41SA75ueV",
  "key28": "2EY3zEmRR66cv9x5pDFqioYVyMmyLqE2eJqLLFrfMzYMLn5i4zaSt4mbrQ6e1BAVycHwg7gL21sR2ETzSEahd6mQ",
  "key29": "aMCBVwMSKTbwfzPbBwVEPpUo9Zg33rKuMRgcGCpsUarsxLyeyeKYd2ub3HaS311MdMfPf9kjh7MBkMvnEDY29Bf",
  "key30": "2RPu1hfwHFooU8ys7UgXws8hMAQiAzwYJdj2uRoQ149M7x4zNJ2irm1AvYx3sBLqZsJxzt74AtYzf5VaVjnD929n",
  "key31": "52YRb5uEFJGF8WXsEmhyS1n38T6Zdyp61eRMBrYZf24TPXedjXAxB2ahjxSV8XY1EiDxiJs4HbupNYh9vSYC2pJe",
  "key32": "4TWNbvj4vw6fGm12XPummFvkkLNYCosvyGfXFQ3XGV51W1XHzsHrBknwCs73jMvmVkWi2jd31KtumueKhfenu1fQ",
  "key33": "2cvS44ALVxXf5Hg75u3zTi3NcpgDXX8LWUrx1SmMT6hCG5jf9vmMdeYGRib2q9uiEESGegTZmmikTvVdrtjKEQH2"
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
