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
    "4kfJS38H4tX1Xof1HaeUQeL4k8MtFNyQuX2LuCKw82dY6mZh9s7t5SkWV4parSGWB1e1MHsBzfG8ACyzCt4GsAdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zwb1mbTMXaZ5VYYCjpRdG3e43RCKDHiw6qyUYTZnBkRLwgV8T4RE8FYz4LAwY9Gp75a7Bvm1xiK7MAUsZooDCfp",
  "key1": "5DPE51Eg7ZQnfH1ZAuRk459XQmVL7Xytr1zVAsvnxjQZ7Yrzi89TrGbpB3q5NdMewdiHENvTqYfbGoX6os9osTg8",
  "key2": "25VizG6cYRWRE6JFHCMfB3enp436zYjudWUZfHtgQCQnJrdobZAUzd5mev87QTvrDZ3xTpN8GmWaU4VjJYBL5Ax4",
  "key3": "2ih2TZ24kLa4phvmdiatL3osfaLWX3iWWnTpj6EYUhAi5KuoS669CWcy4skMn77au457ahheEUBDnu68Wc7V1SjR",
  "key4": "pm63hRrppaXiJp1FUmtsy8cULzsptBx97QXT3gjWrG4QmUMbZunBhXdLNtxnkNWkdPLaxfB4nsyD28pUcP44uk6",
  "key5": "3Cc4Q7xm4nVAQuZ7T63ZKGQ3ekGsPfc4tajP1kPfWW8JCS64iUk5StmN9Q4PwykiagCe9QHuWouohUwaTwF8LGGg",
  "key6": "57ahHn7g2JJRKEnGMDVgWUtg51MHTDjzACTVA7onGPaXyByQ9WypuFUFz2ZTZo9uW437nmo9BRaUgknhu1S2RB52",
  "key7": "4sFfvmDvGj6p3TqyRyH3U3zyZ2BP5CRFU6jW8jDMxyofHLdmLs7dCyqSRFgjkQ9E6G26rKW3S8FATLhnyxQFPgd5",
  "key8": "3NCR5Sg9JpgNig4kPXFoAsncdTR7ErtSEDTNzaiErrbJrRG6TKDHQpCwf7H5Qd7MRMBZuZEaLGCpfv5BCJozCGev",
  "key9": "4ErF1AfxYdXKEVCSyYaHH4BLw6CnDMdUzAs682gaM5jcCPYSD7Vw9BSvCrxzdaVgGhHPQ5ZWSZGHy9D7WWgpasa7",
  "key10": "4VUtREb7WVE3jgLdwmMD6t5KcoLFMpM7UPi14VkWgAJnc2ctRgo48GgyjJajk8shcGwAWeD6KgRKotjs2CfhroYp",
  "key11": "XhTpVquwDemYoJr4qjsfv2C3QKQaGFjKQ9fE9FTE6bqnHXXqiiW9mD2FFgVuwcipN65AZd3GWmxfjEj7fMYnxWJ",
  "key12": "5FA7gvXmmWwSFVf5LmtGkbBcG894zyv4ho25GNoghdBqt1F7sAqc2eiFjtv62JVQvGr6UArwnStUzGceAfqxAyjg",
  "key13": "2BBfcVnfkNaLR4xtB7ZowhLnztowc6xr62xEVRg6Xm8GRp8gm7Af6KyJHhTYZs2GvQ79Ldo3GweqnP2goXYJ9gg7",
  "key14": "4yi7Cy43aaKExmrvHPQobdAw21chsjJ3BoZoaLwswaR7Az3ubbzzbEzrMqSkgHZTYN21QN7FCjrtpchj7xZsZ4Tf",
  "key15": "5q6g6A6MdUUr1F9pmctMCCmwZ6eQ6DsvepHBmsWCXLfjhfxtBWux8A38TP4uawafiuKLzwvueG6LRivkiHSxa1nw",
  "key16": "4f7rohSc3aWPYAHB97pEtufcfFwUZcNTVnQD15S9UQ2P2tj9bkz15SmV1HopA9dFD7xKBXMTsJRkb7nRoKhqtXjL",
  "key17": "ixUowYmvh989zixMogDSdenBmWCcGtmaaFFpKwRD8ZwF7Y2U9DLvVh4rBgiSr3bzkzt54Ptmci2FW9mhDSSYmFr",
  "key18": "54zj6BfY7Gth65gBr54nugHYrjkPhgxbRL6fBaKAm7A4qYNZbi42ursaewRHidNtjekcaHRXTNmZ3mrpWQ5SWyXT",
  "key19": "2s44vVbpYeave9dJT8RbFXAX4wV1NRWrYHj6XCwLP9kQH3P7waY1TgHTBEpd9vDp7AdbHcgvehtXFeNRpN2zm1ym",
  "key20": "smqoxqevbAadoP5ZthAzcoULsWcUGGqesSckADQ8DtuU4Y5CKFM6D4qUojucJVZB6cbpmPmcTTeEnqXKNFdPACP",
  "key21": "3EPSW4FH8HKkSB5RD5KrMDvPd9gjw1VjJrVA1J5vFU2Utbw7AQ72FNdZLtUkJB2TUt17mxXJBBF2uMM8vioP6hkq",
  "key22": "2wyaWZnyHQPZfgcnXzfkXtGWG7fXfxwTw2pfHSv168Q67ayggjDtuvKfqnMKWttcGRU7ZuSJPMvBV3MbeP11HgFf",
  "key23": "4c93Kb4U11dsBANrAhj2SR1tLTqJGMtqLXwcRq3KpdPgpYrHZSqTU5BRLXdnoYszywLF6BrkrDterXjepButqYdy",
  "key24": "3DhoLDBZAWS4vB4M8SU4AKhJfctbqWGPe5voXBHNBN5qEwfdhHr3iQcUJtxZdDWrerNeyL79oSXkZxkQbMtUp4Bi",
  "key25": "5B7i3oJmQoc1peQAy7RNxQmmazQAkc6yMTh9EJ3PpFuUxNzJjV7SdL8yfRzgYix8kzgbfctfkPpq4ZeNJ9G9UQq3",
  "key26": "5YRUDQ654Y7Ckhx1MUuuYUXRK3gXjzTUpLJ9nWp9odjkvpuVajHMK5CpCYd9Df1sZmc8CzMrzoLAt9nsP5PXnuyo",
  "key27": "4U6NbTD4fi6Aer8nGS53ydjHc3HzazEJvu7Hh3c9afNBL1QtkSmJrYqHm6WCFyr1V2xKSQXUQmEPQkhRoaUSahq9",
  "key28": "3wfKuks33r8KgnaK9STChFVnsGsqA55Q2DsLZjFyiKJ41WC7Bp9htQJ6H7dejZwRGpzbWqrQ5erZEXCCsuStdcZa",
  "key29": "5xuvPFb9UXwBUkwgLeXm55djjZEmnj4Zqmen5VEqZquGS2yZBWBFQ6jCbU51XrRFCArRftN2MTjUa3xPnU6uRn5e",
  "key30": "2xqDmoYhvN8ASBYypd5EA9V4YJXiKNzeKC7ZR2qMGx4E2LZ34sBcyQbedMEPRmi44rdhEteci3LTKGb9BDpS62fo",
  "key31": "2BwqVeow5W73CHZyjfPCpxh367ccao6wQuNhigsdREC8ZF7egG5yErrXyJ71vqD7QxiKAcrAJ5dd6xNRAQNQb29S",
  "key32": "4jL599is7P2NJeZLAAv2EyccdKWKCVBUhHJTZ1aAspZ327N7DtYF3y8iEhaoqkUED34CWPkDCFxfmkCePVrjcwXi",
  "key33": "29BDPdWERsPszdu7ocRF7woB2nNxc3XKhA88v7BZ3CXANafX9ggjQhbmP4hFQT3PV1rzrZVbQFBBbpbJjY75XieP",
  "key34": "2VdE7tbvdj864SMmzQT9E9YsZUpicEVRYCNRiFJJtrAmw2wHF2YTdi3mtPnLtMt8igtkkPgmkDChxfHWLDHicNsJ",
  "key35": "2MfBbiH2W3GUGCJaULmEgyQEZ9Uq3n2vv9HJgN4qgMuLaA2h4ctd1FXAbkP2FisSmMSEZVJDTZDNVtT5n8VrTjKr",
  "key36": "2xbwmLtxqZ6iTsPee6w1mAQwwKSodkXyJtX2wf6nuzqivoLTaDUoSbwEAw4QpcLqKwypiBy8YXgz3sck2Swfk2Y2",
  "key37": "NMumfgw1PkQ3jVyCccukKnitf5U74t1tr7Lq1kqFoCKQj4YXxoo5cednm9WNngjqvoxehW6dHVdkEqwXEYeZ23s",
  "key38": "5pc6TwrTnmUYAupbGvuPPvCjoytf3yZVdydxVr555S4nQwVEj5F59SuFtTjtN3ohW6SDcetNLQXVQpTtGjsxZCa6",
  "key39": "EaPuDkAjf3aqbP54hJmRdgCZcKQCxqHXFKnRoC8KYWFsi4fqAVivoQYuc93kwZa1Pir7JtAqbd2i6oTxi8AawhN",
  "key40": "3Zqcfgiv45uJWrWKsXDMAkJAQd9J3jEK5htGbBNAEnW2bkFAJFEE33UWp3sZ3wuBuNrNjWDw4XHi7dSrgcSFb8R8",
  "key41": "m5zR11fH18aCytt1xmxT2FFnwHdVA92DjwTsBJ99YUUGM4Br5yvU3qoHg5vPdyKkFN3Neg3PsPAc47JuE5RiS3Z",
  "key42": "5GswNoFvysZvoW6N3K7uaQuVcFibiVggBdm36X5nPkbA6M7B9go6LqTncGRAv8wRx8K4LjYjQ559n6oPttU2kR4n"
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
