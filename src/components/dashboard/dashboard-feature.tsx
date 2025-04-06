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
    "BUzF7am8BxaV5KRrdJeCjd5idJQ4WaQb7zzDz5Rf8niL7nLE6sFzVTe6gNCojzThcWnAAGBPvp2oHptDXfs3Qzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2avoc13fVy3TEiMf7MH9PnNa1H7HtLj7yPsFSosjKwffrz9syAgX3qGnutHfmJuRRGKHXfrZRWM4vro5gC7mH14Q",
  "key1": "2UchGgRCha63v6jcSPAShfBZCduYqbTRN5yH2FERYh6YHSnNK2TvBbgNdbXVUuFvakHmsZsLJDa9fCZuVoorN4xz",
  "key2": "3qGZPiP5aMBQtdMDsawZpSUfxvrPp6EoFUHJJvhd8FQQeCWNvswPmyGhMWj62f9Fq76pzSv6rKF4j8BRwf8zeaQB",
  "key3": "4QtNjgWnvwgqdJ9c5nibDmUaF9idDrQejXxRXVmKVfNdnER2XKozYhvcCZu9DTHdUHv8DLX5DU2hfHSxgYSnNJxg",
  "key4": "31NBTvgFZXcJfJS5Jkk3TJjc1rU8eTT1a9F4Ezwm4soKT9bZj21thK43N1U6xKC2YNrByg7P2ojf8n3Nh7zM6rj9",
  "key5": "54qtQymyMu3YmUe3TnHnkBHzYFoyvRPytg4AFvYSHjDk7aFhPjuZk5jwWSVFqWQ2ZVox7v4E34XdFG7YqZa8Zfp",
  "key6": "3mbjZ6hqt6agKigb96XUiHAgCi9BgUdWSxgHstcpmmLsfyCxyiMTBnzr964f8nrPAQVnQDGJKRjjhmfhnCdeDjbJ",
  "key7": "4RzrQcRRs7JAke7ukBnfbt5S62DncFFPu8MXNYtsA3pew6B7QPyzFAdQi56WHr8WApcPwvssuEwQsuxDchXV6TUZ",
  "key8": "3bEV1w62PYmoK5GPpkxcCvwmxAiQQ4WVkQBBMgWzEw96zRjB1RqDibD6yPNgMFvi1bWK28SZv23ZGsfVJuuX62cL",
  "key9": "5kCqeDh5v6sFmfFBWtGKJ81QKr5gqvpF7xSQexBuFpPapFHoKuhcKPHaZ7Fb7CDfM2qV6b5bmQhgScVpJJyg9651",
  "key10": "51D1ptaGLMKJajv8tLnYAKbVUNsjAvACRrZfgppZgnZSNPZ95c4dNVoNAKwebJ3NQxfTjHYKP3wyq1tmoEKw4Rhb",
  "key11": "2tC9nknNNzSivv8aM2uZq5Cp4s75HVy9xBw83ZJ5FYY9ottVmwdHqrYYZ8tBkCB54Jf5KQEtbeCn9Asx9HmTUcGQ",
  "key12": "5Qbme4ZXbRyqUeaXNsMbaEAux631oPDJS3xWU2NyTHuFERvHdfGbFsHAt27RaTwjpV6yBRUwsnyxBuVe8oKJKrh7",
  "key13": "4jRixt3CrLrSQNGiuEHjL2P4dcyiDmhE8A3HyKSAPrUh3hHkqb7Xz5UZN8t3ddHHoyY4PFYfr2wJaSD1bF2EBBJn",
  "key14": "31KcxvGZqvV9oBt1bhE4Btxp8rke7eRXxXWKHbmJpi6eHwcBi6gnBJ8dE4bniaYArso1iLphZkNxnKzk2jvN9WXD",
  "key15": "TEvihQ71KX9iAs9ox2K4EGvrV7VRy313H3177U6RVYGiTMZv1JShnPwPNPk3n9k4ZP54TnZ8EM3sKBqfH8cGTPq",
  "key16": "5cGyeJuYm7JmKPgpTCpNuQe4bYqE4oppWeZZiAp8cnuMR8vvD7cxYqBNGQKa6VUXEggqVXxfP57iWocLqeD1NABh",
  "key17": "3MUVTLCpt1tkF7JhEZTwvAPPwMPbD7wpLvPthoUigzZsqgfJAE4uAvBYZnaCv81jHRm9H9JnNrLi9HvBH49SEXHX",
  "key18": "5vHyo49ttyVGHoM56gBh4nvns8wx1xVLHipWASuY6ktH4YQZsdG2AQEehayL7PYtxCK1t8BhHmRYLVgMJFwn2Udr",
  "key19": "3MwR6pfemhLoxwC7MWhuvLgo76cddsxiZmYc97ki1XcTiQws47xf8zf9LPuT8EdriZipsDrXyjjQRrtNnma1ug2h",
  "key20": "3oqpuBPRHGSkQqC4cpVV6K4vgaF75vWDFW2CKsyodYmuGCK1LwaKQ2B5kms8CbnSwdoTGshoUcrCBx3GWzkKupmt",
  "key21": "3kKT9rCxnHrVsmdzSsJK59Gak4MmuvieTwreGytBE1BLdRPNnHJVn9wxxKfGNSaR7xXUWW56K6Sfmi94puB4GX7R",
  "key22": "45krP3LYgJRcWw3HkyyQ9nEgv8KeSQFij3s8QCHanFfoUCceymUVhQYEKPUMYLPYVKbXP5eAgbWbuJsKZxV87Nsw",
  "key23": "MwLfoAzjX9RovUFCtvveh5UAEbuXLBKGWU72dwsoQrurrYmRfxTJNaKaxTuLFS7ZuPmLaVkhvWogmfFsVowXvsE",
  "key24": "2Sj4kWPMqivdXYVQ3pKHrkKgvmTcv4g4SxDubs1t6mVveDGSUxbk143gaFrZef5jbyDsRNNYw8h6TigUMFzgEu2N",
  "key25": "54X7n8w9nZTVVRqmHkoe3LgbJvpW1dvY5wK4Lcdi7SRDhMuoRiD23guiYhPpzmLeomx239sQSAgcC25jy5fPGfoU",
  "key26": "53s9tXy29oxcVSkxiBCoX3cA42oBVcxMqJRvUMAz4dP3iKxVMGkjD3KKBYJoxZV5XoeEskM4P2GXXqALi8AP54Yx",
  "key27": "42yEK5KNjFdrBSJo9xVeUXkAX7qDN3YBbPiLQnqBiP7TrGwZYhLYSGoWTRsMUmtCUfRVDqKhAWV8cWMmBzw153FG",
  "key28": "oKHvjnDzkp4xqdckxsRHWsG1i11bAv7S4KWTVBz3YNJJTc2orWMXahqkKKuE6bgDpyL9HVjyAhn46tqxsfJzJkt",
  "key29": "4kzJvcQsHU8At8fQG8EC6FiESFeCvvVTzBZY93Q4Ma9QyoHjERkJvmPaz87VHjqAWN1xgiSzUUcSFVL2xP3W19xs",
  "key30": "5v7d3RDw43JSFBwtatZsvxSJ2dgBLhE6xoaeZpph8kckdFzugkRGaNQY2oGuuqq3vPD6ZYgDYvvQH4RenRgZut4g",
  "key31": "2taLDq5cvk6hkfq8d68QUFDZUf8mcYXejUaW6VANWQyw4ujUfRX1CjfGXU8ZNsRPG6YeNF1BCqYa2faxTCuFxyHi",
  "key32": "3dd6euRSzsjYk3PvDUCWBfhBffTHp76RocJ19N4Z6DBxMgtg25atqv56Pgv1J8eFEj8e98uJp91mHXfTfgBhXQUC",
  "key33": "4rHCA4cux1aTW4FqgifoiqMv2fiDm9xpc43ijGXevh6RDLUFzqd8VWMac6h431GYFY2sY6CHrWRWdfpqpexNcpYV",
  "key34": "WvqPP2Pa7SqeH7VyfbsobDvTtQ8Q4d3gUHT7Hw9JsSBQQJz3sDSCW4MAaQnS8a8xqPFQY6szsgEoFhiUgzvk79c",
  "key35": "cPrunUYnSKf7dry5UW7HqpLqVkL1rtgPgvp9LD7gqKYze3ZEvAt2YWJGZnRJTCvBG1aa5aWiuz7pfJzzRhnvoCm",
  "key36": "3xu5hde2MaVF3mSDKL1DM9SY7Tpc6YMvDw2yLUprMnWRFVwRzFW1y8nsVJTWSzzAn3oPZ6ZNAjiSsyrGA7meLDCm",
  "key37": "5fnAZWJFdBGKzkN4eNuGEPCnuep3EVv4rFA3zajAG4avBbsFhvqcCia9GVYswoyhNUwuQBdu3XwU8iyVbGLUkPMT",
  "key38": "65QevBuXfqpRDYtm6vAxL47Sq76VLMmqCwFFqDY4zAMjCeUmvdiC5XpVAesFdvY4CqozHQX6pj1VfbrTsUde1Bz9",
  "key39": "3ve89gdpVVqsZth5ED6rrYFUUozr67T33X6NqZ4XZeJLWMSpJMkDCrGUr4s7twNiZTFGdAPctP2Eeq3G4tL9gSHG",
  "key40": "2az8qoofAb8rnM3tBNXgRRnbLjKwMvda7mcE788KBqjEAXZFJH8fKRiKT5LiU2aU7g2Jd4LaSNJnAWNNoDduF8yY",
  "key41": "eLWeT2UPcmQAtYjjh8zkzG17hk26pvovVAWumtiE1k2q3D25qdpTyxLhTSkLTXLip4gdvGX3hjsb2PehBeE2nuu",
  "key42": "63vH3dT9nVSavA4ZwmsNgMpwoTfa6EZS8cYDtw5cSGhSrJaQJXeteKWCN8phkwg9iBLe4TpbTgnPrKcnptCwLug4",
  "key43": "5SPjVrBPaiUp9EZsM2NfV8o6LMges4x94L1A5gP2Ffn9UaTg17RX8vziidPdE6ZZN4vGLjeRj8vyUuRza7n9EKyE",
  "key44": "4TWFXF4uGnQvH3mpUiyNvBwi3KYgGokoNzVo8RnRxeTM4VEuSDDFPh4nUmTuwQpsimuhU6wWjCao3HkEKneCER8v",
  "key45": "64vCH2XJppVcv39zrJgxqUYgfyobCYdegAAyUnfLwKyyBWE5Gybub4stzShXQMEKX2DN21NBHVA5L3TdVdkAdHJ1",
  "key46": "2orUioi9aCB3UdLB9HCTumM17u4eDZGuJHse8gWgym8XcCLJfLaVaig1h8vRBtiw1BDhEahb1qGB2ExkitN2i3Rj",
  "key47": "2UwE45dLhDAGZhmy7YQ4LKGADsxTAHZ5ECYAKRvp7FYu6ch8Z2v8UyXxuWaesxUKUir9L34gwziScGvvRQvK5ntb",
  "key48": "5AYre413qcQsE5eRpWJ9puxzFyAQDF56rzxFvwakCNc9f1PwA8ALSRPQnYJZAiEs2TStGVrSogGaCTXAxdKVDSr5",
  "key49": "4ZHuYeeydoLWYoSKjdxyoyXsHCDPgo6vxfQnk3c14aj6BEnfBmjUkmKPKyAkin8AV6NpjQCRbPgKjNRqVzFRFJj"
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
