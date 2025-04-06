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
    "3fkcyserJMDGPGdTu8NHy7CBEiAofaBd1Z2yym2SHxVaosTtBY7t4jdkE2GjMEEk2J3KHUA59pVqAGHXGMG9M1zt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wUDK8noMDrdNng3tRtdTo65C9Ft8CCdh4xsbLQ5bTUo4pJNFsMzZZ2ngMYifqMqVZrouSuCMhuwBSU2bgmiePZV",
  "key1": "2nT159Frd84P89SCpL6CHoVnpcx2PKs6FPcAA8vyYmCzCGwttbn84knKQSNmQ2hbbzcpXezWPDebrK3iXnvvmZ7z",
  "key2": "44NRfiSTQFQ4At9uR4pVaaYorgsFrDRCpQXKmfwkq62NPMoFe7uyi6JErqCxKNo2pWCLDHsBq5NV1Y5zxjjmgzpF",
  "key3": "3aeCbxSEYZS8m2PhoA4bbVPTzxAAH5jrRphoXfPWc3uoJ7wJyXYFYP8BjXe9UsWekuWAbcca2VHBKdbVsaUZenXt",
  "key4": "3GEXwVJgCwkNigGVbt6agz5QKmwzNGEXk4wyv6fBBWdj6AzJ1ujJ9YLTF9BWN9wreRurRhfqPN6cXSZdt7TLPfem",
  "key5": "GfvPfQnbFHKETMyNambk9YG4tyTQL6GJeSeTvLaH8cHpJtCVi2pZLqfSjvaSBJ25mBioFstyesAZk5t9ZQNVpab",
  "key6": "3Gk8BrqsSHHSM7qSTAjBMKbMx2WyTX7K29bHL9DdwLyBK5aVhYQxaHBas7c5Jt4u5qE4k4Cu514jaLyexZ5xUhUU",
  "key7": "BxA1BCyKPxLjVpjevXUWjbPnVkzWhZ7AHudpiN8QZBihvnooZL2sPBEvdRX43wVStWDwhTErLtCRbrYxGYyJYaD",
  "key8": "4fhG7zjfhtC5TsdYLzsQjFWRWidP15HXot2iVnwykHmgG6u3mvXWaf8KojtcpqvyhgzyBVqwKQYChmYpWeVPGvmk",
  "key9": "5ZufbLzAdEpWYhkEdjGnEJF3aC89apdtyjJ7kogSqRJLfCqSnvPPT7J9YbhgZw6hTQavyKrv9TueydjBQ61NXkJ4",
  "key10": "3Kd9F5JyHhQfMkyKTocNxYKakvWudWguG5eKcB3KtwZR1hbSJHrdXsoVeJZfVmhNhZNYrTzLHaYBaxzc7DPMnr1L",
  "key11": "5RWjBEqdcnxqcpjpRh1Xxzco6LVrgjkqiCJfdNehXcukc2GNtA6qAJFv4FPVKjxdCqJN3AjsgC4g5ZhJ9Mg53NQG",
  "key12": "3rfcEfYMPqyKmDmmtqejmwRUy9gWSezt4FqKxRKcPAcx3ixSW8sReSQuoav6N8QkaGknFtFQBkPgSRcnWPQTnoXx",
  "key13": "iw9W3mpA3cYitKwVnbp7uLUMSBE5vVXAzXo7nz75HTNMFfHX5qSoZS9shviDj5bVNuJtVcgDCXjbeD6dKd5RdV7",
  "key14": "3Wow5bCwukmZ5V4rrK7Y7iNfugdiAPDatgaPC9RJdKF6VjN1nrCJTMRd1MC5iVNRNjP4oDhJQ36GNf9J6qat1UWU",
  "key15": "3jdWPbgcW2Yt4Lk6rxR6g8v66cdPxqh7z8ZjhmKkJNPAXxvetvC6ExbQJr5XEm4H2KjnD9sRA1TQoUU1ZdCJpvzi",
  "key16": "3p5bik4iEgAHV1ihveLhSiJ6TvKR9dN2eg93c8EaPXAHw49fapHy2h5764RWpGuXyTjd9JpJiSwdUNRv1aN4o8D",
  "key17": "5rLLZAKJchMbNgW13aqY5dmycb5ee5ee96G3fwFL3eHpBrM1JmdFcYneEDzVKJAJ3XsKYNHXNBoWpwJCfyxVofDF",
  "key18": "3ixTjAPWoDvFcwKLUjfPXVoefnB7LAnUX6DncMeX6aESDUeM59YTVGuZmGxduGdK7hULwSN61UtNUNqwmpiCLKpp",
  "key19": "2DnFHzX7eLHbsB8on69qdZGvUWKzyoker4hj3QWLkYY7WAwEsc1t6f2wbtoKHmucrVdhmaskG7PWDyJG2VYPtv8",
  "key20": "3HyGdycbLMGBQGpPLby1QVzP4DPx7b69A4gqtnoeCQKomhZhc1Nqkt9otHE6weQD43AoGPQbvigbKMLxrPic6Nr6",
  "key21": "3i3CZ7NW32tc7MBA6oWKaTuAFsCDchmXWqhLadQTA8rgQ9qw4yHQQy5iZydgHscgHL3JDaqPumwbWtSQC2ciRhia",
  "key22": "5AJhxMd22Hsp62xprM1JBkfKKSjDDmrWUPjVExMermPj2Z6epPmoq2EECmk5dNi3BgRbKyqcLafovZpesLtsyUgi",
  "key23": "Y8oxV87Y1yTShSFqXT6fAHUCh7gX6fTrQYbHXuWEdbA8oKJqoFXjtqrqyME8UKJTgFyk59SojHNV3sBztBFTssD",
  "key24": "29MhJjA23Bje1S5rubBqBjYsKSFkYHdHkygMo8JonU38FrUPefuQBqz5izeC6kfEzgMF1xTw2q8Yj6AztBC7SQQa",
  "key25": "Q3M7AkqBkxEByX6PccvLghvce6JvLDKDcCETEX7MHGySpa712dyAafgspLbJr8gPoepW3u8CYGPyBZW1uL3DUTm",
  "key26": "419NMPiFwTYs2izLBcn7PzQrix5nCGJ3otXgUrdLsRXAzLqJtNS1wkWSJzfxm4dRBYyoKQPgoeL3q2e2HaZcM4HB",
  "key27": "3cD9e71N5W4YVAuxNHYoCn2VtGSrcVdXASiznya1DKHGPuMTcJjrpKTUxpwaVhrGgszWBNM9pQ4T69RbQdXKzfyp",
  "key28": "27HZknRDUudthiWkmYmbH29LUXU1LGCznDmkcFiVYdzbeJrceZBPCgpQV2nRvJeYcuYZMEMsm1hPugfxaphRvs3E",
  "key29": "4ipLYhko9PTYXHcbzPRzGJXpusPLw6QYLpWkzmwbUjF2zuiYtsp91r5afYNhCQWDyyVhVvW4G2NsHigrYXUxHqYC",
  "key30": "edrgebwMHLqZ6iLBNCHWwTBHxxXFVYmDw4YziZk8FTdYgDVrWe7PynuLePutjTnmMUpZ4a4HSrFRgCchJbPfTQH",
  "key31": "3mx1x9ZbYFeepNzmskTvEvc9zMNYoUvKxEsML4UKR3KWijDzXkvtshu81pDRfUsYkHKVF9Em2XRcbFgNKySEk4HJ",
  "key32": "5P9zbPp4MgAkaWfnsgDj9DYFz1UwjKtP1uN6JQgYBLW5XnaqaaR8dZJFpAhkrobxRhwXrBU3GSJ5ido9zQcumD9a",
  "key33": "4s8wE7UQq2HiiEsJKUbKaXM6ox8LERLwNxvQL6eiKVAWdyRAEkqwMtfHisCf1yemjyYQtW4VvCBwpasmU8gLvafe",
  "key34": "5bB6R3kZKiwpf2WHAuWVLoRTj8aodVyZRmaopzPtjswcKGT438fTMwk8mUvQq9MBCQWfwd5Ef9vXgYxZC7bVr9xg",
  "key35": "3eTbJgoQ7oVJhynBk1XNphx3rsDvHxgnJnTczEHjZkyBXg47Vk9d68bwMnfm4cFVnCCYCyugwVxeq2ayHDqmGd6x",
  "key36": "4jBHYFn3ccqtQKkY7QL4a2yqHK3rfPHMFjMzCW77ubxqCwqqdforj85aJXuEi1j43si1oP1osrxW2rFDiHcP8ne8",
  "key37": "3VWnpsPN8McSDpaf9p2edb62k7XD9mtDVvLwSBnhgiNqyqTwGkEx4domc4EU37EVS5CXK57gPCFBmDQbg5F9c4kF",
  "key38": "5w2DuDHd7GuUt772L57yYg8ksHnn1yGivjgv2BFZqtyMinZ4ynGBAnrGCrFwgC6V7xYHZnBtH3sx5e1b7cvsL2No",
  "key39": "4aRN4wgKPbiRYFPTaoaBAd4xRQ1G83XChj3Va7ZbNbHk9Ae8uuutTRtxP8JZ9rXB4JbeSsn3frVMTy59YRdNkuBy",
  "key40": "5GVAM3vPGLtbznFpe22Fb84G2hQLMTaCwN8vkcq1WroJ7f4DohiF4FN3tF8a2CP2GsJ289M9H1mV8dqBNcWgpK8M",
  "key41": "4PFH78zS6i3Vu1B8yGnQ73vMV3AKbFg5QLBxdyBU5e28Kj8Sq9ynrJJ3DwEgo3shHcTj5QEoWJr5gpgxWRB3m9o",
  "key42": "4CLGoRfbUmKusXgmbxa1xiRLQVWkFLsodcawFfJp8a15jABb9q3TwWpuuFPx3QVSuR1BpFUQxuJr6dRAMogGV5VU",
  "key43": "5sczGGm2BVE8ivPjwhQX7m4hjnUA6kfnVjXgGbujAojBHyXxXT9kZaTXowSoh5rM5ECwjiYkiMLb5Xq82rJGV9jE",
  "key44": "ni7t3y9Kra66npQPFYXAJ1Th19j76YjEzHmZJ5u4EMkqn4p4ayZ4Ne3a4dupy4yiPoKb9ypJKdMUzf4CLJnuENU",
  "key45": "3wMor5CPBDHJYhnee4MV2PYkA9RUkDBrLojV6FLPqS94R2CaxYVDKJVHCXU88tmTz2V65kKWZzh5B6DnMYHerQGq",
  "key46": "3gkZFoNppYYccLs2PRJkz6N8hyRmafsvHAvQA6Q1ieXqbgfKgUNnQRRvLj9egJeiR7aSYHQRQ5SH5aMBKBL5VFdc",
  "key47": "eDxKfmWkYHCEKPs47vAnYJEVYnR8mGw4rgy3PFaZRhYd2j3wAeLdcSwiuoYNGUAXvtha9trMc8LhFkCPPVTTuGZ",
  "key48": "4pZvBKdwcUfj6ZoCefX1zpJ9pnuup49mehHFREMPw6GXfK2AGWQAf1B51K7idfBeMrbdTMvh7LS8uCd1mppQpB6N"
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
