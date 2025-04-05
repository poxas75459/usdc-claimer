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
    "3NvDrqY6JvVrAprpJbATKD5ph5DBeTRou5kf5Ta634VXfQMtWi7Det1MnCUWNQ6cia5mugkfchmoygAGJyfJ3HJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q89iWxmXqmnRLNG3LgE986EjhzF1unV122v4S1TE4D5e1A1JPvwKWbcAhPYHFabEFEQj7Ak9WHtVZrJXj7myiKv",
  "key1": "hBcfGTEGPzsa2U4T56hxNfEdb6eS4SFfndcoyctQUJrM26xQE8QW6WiLA5JLekSMpJJAEyavCP699LB4pcqWgJ5",
  "key2": "3qUmQYMGwAjKNPtyCpdXnWGN9xR3H38cpnycpBvZXPritJ4sH1R9bTcA3Np3SwQeydKb1QH2n1kDKi646DB9Dh4c",
  "key3": "5gTXzct2xb1AezKhx2wP7C7G21wXc8N1iZctKZwPhM2HL6xUzGbAeCfRpkeMY4h3ktHwa4Ze8AyCmqHU9XJqmY32",
  "key4": "4oGL2bdWHFhF9m61Afw1kQsUoqip2vMruxDZAcPYkxF1dXWQuuv6QXd8HeR3k4jjFDES39HvG3YKhWNscDaUeLFZ",
  "key5": "359sMZGEMLTkv3YhA5xLA24uGjFVMTGpwvkjUGjkKomhFdPad48bSLPjxSFfi4keHf4qPiR4QErHjmDr3cn2kyW1",
  "key6": "5W14ZACTpGJh1887zTBUKHXb1ShMS6trHjEWJZadD1SbnfaFRMpBMvky4X8RUaMbpYt4HFS7bLjtJNXFUEkJkE78",
  "key7": "5s1kTK7gFG8wFbT4RtZxcPvMR7bd9D6wqjJi5bgWue2g8jnWhVA5bNmXnfMf61fJn4G4iaP13g6mgojJ1mnnppwB",
  "key8": "5Fv9qY8U8DKXjuJWLdyyrwUm1F8mSmg8Q4iJd8HKGH8btrYT1NZqL38KB2fhsiqJRhBK4jVcDxYSLd2DcTeTyxFn",
  "key9": "1rWFK61rspS3vjgL3pKm6Y6vxB6vQcrX6EcGXqYmKTHb9ALfyFkXnJ7QjwwYtxV2uzmjfLew7zP3F4LyvkfMdV3",
  "key10": "24ZdnWKideQzDTBubvaGz1DxFyUDdm4uhyh2byxNLt8dc2eJQZPVinVC79WBiLbEmhho7LUquoaDQj1qUKo7bfuB",
  "key11": "5xQzQWymQK71yGgrYpiaM6FHAxEvD2KhbNeQJvjmif9FNtWTL5hqkCcGeDnfUntRTUFtHpUrSvguK4MecPyuh7sU",
  "key12": "2MHfqbRH3edERPs5rmmasSikPGfgKe9zMA7PdX5f3EtGKtr5t4jhudHaAmFUaL3LecdAg2SuR2aTPye6CmE8MWjD",
  "key13": "3Y8V6ZGVXgqTnJxyRc2mREyRckFxuemMnkNGv6eGLSvW5t2WiA9jLu92aNhc395vEE5pWuTmntZ2tFrm4NNV62SR",
  "key14": "3uWPTgK4CRFbuBcTHqb99tvnStGXRxEeZTjWAFPWvfQDW9a2jG4MdC1MievYhfXXMvUfaw3Q3e6Vyh1A4ww9fSA",
  "key15": "iYiUJzUGJMadj8MKiduGG6w3DVoBHnQ27YGwhpnCR4jrkpgzKZrZNYsgTqdiKnx6MgnoAn7RwRtooYGwJP1iAz8",
  "key16": "4KpfoLFVWu72BU9CQ4SKxiNqAyvx9iynXM3T1xv8Rxrz3uWURXaJJeGCmeuTGLhkXy4uj54cBxg4AfW1YvrSovn6",
  "key17": "reqyk3h9nT9KPzh53FDrgLweQ1kLby7fkocm7fcq69cfaCMfQrtadfyZqV1sTQHbK81VhPqKMywgv9f9pLhCCMW",
  "key18": "2QWcvZu2TCRiwgseE82MB1GfQwbdgC8ZUfWv6oKhtTU7gCoowewrSDEe928Rmw2UXdCXBj4KPZ5iZMnNGHNh8SdZ",
  "key19": "23UJ1arBarPhbu4TpmtDiDg6LyScoGseksFQJ9kygWAaNiatDHibtymTpivxvNLpsxh7fwABH7JW3fSBBQkR9KuY",
  "key20": "5zXajSij76wk8aT9ick2wuEWEtTXKYZ2ZxPWVLrRLMTcRzgHVvMG6YnyoB7gks1oc6X7mCewU9vZnC9kRUvQNyAt",
  "key21": "7TVBjpxueAuZKK5n83yj8QGhsTbTwYRfZtK1eBEVzX8DnJ6Zo2wCZtVyEZmsR5CYowbuJieZz1PZBG4izKEaLp9",
  "key22": "23GR9Fzxu4rEeXRh4AKKm6v44Cf6vJpf251QtwfpncYtq1BbkmBVi9u4ggsM9qWTCJNMschC3ihDP5hAnSPo8FB9",
  "key23": "4eiFxfUehoGxzguWwXRme3gbpDR3yXWQNMKkkCSca2mfqJfGU52kkrt6RFpGCDCZc4FKtoRSxVjMcpiuSszWCKm2",
  "key24": "KF5UYJLbQm77KpvN4vv9D8s1Ss4sVZoY8cDnuM4tSjxMb3AdraBUahWn2U5gGudtyAZeJSJuzW3BjhfQruji9GY",
  "key25": "9NPnMvQMvqnqU1QuaYJAdTdEi4qJGcKwajYiK1Stv3yirPNF5okT1yu1mm7XN5TU5XDiUNmzujJyDyafxXzofpL",
  "key26": "2w5LtJ4zCeKzpqcvFzpb2yNiWgkQMndUktoUBZqWfsgWfRF9ApAfd8CRv3nbxEgJdvrPAUoQz2AFY8HwqTb8KR4J",
  "key27": "5RZ67vMYR7jtRaLDQoTyL8P2doivrsTnVHzGiqyHsK78zp34sYkZs1QvHSaBasfJbxfyFH3qb3QzBMTxdYYtcorL",
  "key28": "5as6feKBAt3pec9N7HtKqPYUpzenD2UCPw2yxfZtvR1n3B43T6o3esh6cyJKo7uPXZSDmZUHcbbd619D7yUEzaJX",
  "key29": "3uXMLyKa1NH3DqHa445KQHZQp5dbU8xKf7k1TWGP1ewGbR2n6xtNvawZvjbs3FcKFfH8mfm7hZLdXZ4zZe4xdeqC",
  "key30": "iUFp18vHPLbyBZRJFpecrFtE4zNqduTwDdLyEi4LSbqpBWU188L8DfEqSq1P5QVU3LTjZPYJKaTHSFTR7HYgvgX",
  "key31": "42SFcBncHeRszUPXpKaB5q6XgvdoTwifTMpEoLwZQ81G4SUhgY9UgVnUWMaVF6tQsNrqEQQDEGhBzkSv7jr475J",
  "key32": "214hPMDDhMiaL5t5YS3Mk3DSMadqc269nCD8Q7A1RWBrhfXM1jMZXGA9njPHaiBerebG38ajn8677G4Fh7aM7aSc",
  "key33": "2LrNybuLMabpy855JoqQQxgcGzBa4UyKs2HERD3dAdgxj3QiHLh9qZWo8nJDJrecBxRfg3x43RxbBJ6L3RjgDfEb",
  "key34": "67ipiPhMoPAYyDAS54xrLCdNn9Uqfb8TjrHXRBJNgm7SUU39DKH2Nez6VNtT82XEGq1zEzGt8rr5U2geWoqGuVVG",
  "key35": "649ansor3DHF16DUkSF2w4puMkpNZT8Vg7xDyUPqDBThtx6MvHcgMuVfW1TQy7d7sHB7M16MHLtUEhpa9nk24jc4",
  "key36": "esJV3Pep1qJ3nETbrFK87KVKs5Q14ne2scLFb7sQTKuNQeo3wHk3pRQ6FFDN6dfw4Rh8cCkdW8knW11vhWaLJYn"
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
