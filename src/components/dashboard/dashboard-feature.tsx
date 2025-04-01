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
    "3hMUKKguUQ8TdKiMFrADPxSLWMSWbMm1ZeEoJS5qhzYTBgn7vjKhKyqMkKa8TRi5DMhZ9QQD2FgNqA5KaW3masgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PUG9dpW5W7bRZHMA5Ahm5LGJfXWjGiZqMkmhdHNyEjTeh5GgBcyaB3oDGqXc27nMTnTWxsr1M9ReJPT9oUSzzkU",
  "key1": "Yag7NNGDF4B2U4vdV7ibxh2M31W5wFRUAhJm581U8j2AZ2bDWbEW56Dkg7Mbev2YoCTTrxB4ZqDqvJh2f1H8B6N",
  "key2": "49d3hHjv1Xn29vRz8adRdwUTUSdPE5AgfdLvTPERkMLotJVVLs6GUpDbodKx45ES1XqLUBBKRSYnv51CchrNvWFs",
  "key3": "4t2xXFo9NKfmuwQ2GYKKWozwMtmZCcdmMvt9FJJ2aKy2n1F1jW1qFFuW82A4ghP9GkH3xqirMCM6MJUrPZVUk8aD",
  "key4": "33gVoYfcwi57LyB5ggCs8B7XNM921mCJM2jYQwsJTtf7KYbZ7dRq3Vn9QF4JPrdwGkCD55ppvcJ8gFbqfeQb4AWw",
  "key5": "4VETpHhPiH1YxU8zu7aLA3Sp9WWXoKiFLPqP6vYh6J6ZUZUdHaUosWogzbxtNVfQnpUnmZWn6g2b7WHRemf87XjD",
  "key6": "p3ae9LBZrBqJzkwGqJXshWZWhZ2z8qjmx3HftaPCye1pKPCPMbxaxo4LdUtY56pRb3q2YgvJgXNRp8VK3e2FMf4",
  "key7": "2cQ3JRqH2XNurLAAekUMUojEmHd8BcCYGDyRYgcbxJUR3gmNmkTmCHszE7R74MMjViKNjEh7deK57HjZp9ARze26",
  "key8": "43vqjri3jGVMhB1n1oSAGyhr8dfgGL7JaHnx2Fyn3UDqvqZVMWPFeCyowDh8jVWZkSDqfHWzarJm2Xzs8wfkn7ew",
  "key9": "2btoq4faRr2j6fSk1qMC14KBvDCboi6sqGpGpZFczDSPE62htd2qKTrx2LE3heVSiCZFkx7G1WqsNoWfgBiQ7GRX",
  "key10": "p9m7TmWSJQ4YeseeA4NKDjfUft75FproAfbHYBZGhCtGRMe5j1U2feidQkp194eei7MRh3Chjb7zs4baV2UVjG1",
  "key11": "29Zd3DVxKLRgiCZaTZBfD2R5sT8aatR3PwkJXyLh6qv5uCgQDLyk5oUGcme3WVbwGjMBAQgLMgvaZUW5trexQj3g",
  "key12": "QS7ec9YBtfPxBkaAmQfa2wBpV1nxuAFLjVaP4W5V6yBz8QHrsce3gaZdNeujrzB1fV3QstePXkUN798heoynLCN",
  "key13": "4SPGuiihXQwKVKdm6BYCYjTaS7RhhDdu1cpBoTewGrBryvQfEG1Jzjv4LWbr9WNawkP5Et6UTVM73iPR91KUiVMj",
  "key14": "5va5eZPrGZ74ezL5HiaUyRb98noQy6v5rmp88utXUpU9P46h24Byebb76ppe8vLJXoM5xaCSxcdyjsD4DKa7fvE",
  "key15": "5XnzSr8PhwLheD125ak3nDymTTjcEoUL8Gw1qVShco4v5KmdJLZ2djRimUepgH8Ej9RLHFLuGWu1MjwjGh5BDQZG",
  "key16": "5YYZmJeJ59PtX7pqjjyGsHHVxuhgtLWnMosbGi7o4acS7nbLaQyaKyGQTEY5k4Yxp1NxU35wmRSbXeounC7kWgoK",
  "key17": "49UQ8KLu5vDrmuAwHwRjMgYQVSxaPLvqxZ4dd3kDnaxk5pZ9BYA428hqjkp4fwqP736w6ftfLMJEBLaHWwpvbK4b",
  "key18": "5AwpWVEfpPZ7qomhgyizpmGrfW2t98SztWPnV8vSGrVaBoKT9uY9q337t2cvoS7vMY89f87u8Y5cBnrFzibntF3X",
  "key19": "4ymNkiZN1GxyAQoL9rBGeHxBonQyvwyGUWpxUyoxw3bEqETpbBqoH75J3gVFgkhi5ATozc9CHRi5sUWkk4rF9DgK",
  "key20": "5jEXJAUrzjAu6jXxcfCHKsr6atRanLSdyAypxqkx4kmzCvKpKSBNoXVLtsySWN1vPM1PEEQd3NPhQx2ASTRHrR5q",
  "key21": "5o6DM6wMfsR4XKdySxfdXeo6ttnJ4tK9gGU5UeUv9Vu5QeJJKqETWjD9goUHzyXVqgTVjif2yuys3gcLXQhb99dh",
  "key22": "2iXVqdEw7vj2hVYnZxWWbEvASooo9tjSNuXdmadaWZjCVSF8Gw9Hkni9fTqD4jabPK68rukA7TKdgbYFkNGMrvZT",
  "key23": "2LxGd44ADCid8CfTxub4SxkSATEiVU5opUrvz2YUCRqHADCbgpAL9tpMGeh34kvF48KrGmPEXWjaFUYmpyaiQmkn",
  "key24": "2StkXPTEZvdFdzRMbMCusi32kao3BtipAa7mBprqZQPvSgj1pLzYijR9cMrK2UuyEachYS4gdxzVaj3ZXrw8pKEy",
  "key25": "3y7doB8Y4EbfoM1NgfyWLynZfycBGW6NeKP2WZqyiDdpVkq19q1V1rMFDd11p4eRLMfp17cYV3Sfd7cWNWsCU7ML",
  "key26": "3gJwkfS3Q1mt5jmS4Yr1gtRNJZzQyUYvyZ1h9y46W2sKBgk3PMQ3YV9hop5C2FqHuPkAoBy49NEwRv565AsCYebQ",
  "key27": "WnpA2w16Fp3HA998zkypD5HNxsd386RFFyRfr917gemVoioSvJ5KQjqkamqwF62cdotitqSvHrxpmcojRBffVRb",
  "key28": "5vDnxrH1dRqjxRnDA1U11RFmgCsHaCUoRFcBGX3D319eK837QZ6dtqEUEVqGinnowand4Bm2qYQKTpPykkd6Dg8Z",
  "key29": "3GvvEixgqsnmXM81UUAoEcxYxwR7vtgHnPS6YhRJKJeFuUXQHQMZ6arF7u94CVMChtrr7vg3xZxCohWZDWwc2nsQ",
  "key30": "3QBWWfz5YhQt3MM4zFmpDNQqYELnx71GTZ5UUbt3KL4xEDT8pPHJ846khfQvuhhR3iSCmqhjzy7ucLtLJ3j68ymT",
  "key31": "4UhYhz6h4zBcNAJgqKPMKzEQfasHRyRK7JTfzugYSdwDv53rRNDAgTpekyg7cdCMjiVqKX67QAVVQbwJtMyuVtkH",
  "key32": "4hrBb6EYbHHiedppdhEZrnHummGB1ZsS8CbhUSoEwZyjCLhZyxYU1vdEWzNGCB282YQkfjFgnyNtoLrdBoP1VUnE",
  "key33": "2mP5xXYReLzgeSmArty6Vgt3GmaaGH1mmJ5H6KaW4hRPUQuScK9rn2mf3Ava5FzsmtGYpTyXVoibPdkfcp9yQD9U",
  "key34": "58SkWSbcgiLpg173LzFdUDF1oCQNrfFP96unZJ2dNig5Lfv2S4p9JxeRdxJ7iT7MgapWgWj3Fd6vyBGXkbVxekpS"
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
