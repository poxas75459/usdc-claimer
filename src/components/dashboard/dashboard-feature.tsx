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
    "jjJAm3DVQm4saGK5p2i2FxG3xxWgCmN6qPAXUGdTCY1j3fYFweK8eLCoCQSjKLtyqgGp95qTGw8jAjRnVuCnU6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oED2CZipLPRJNR9F5unCjXBPzRZY8mpsXwkyaPjBKqX6EHq3nHuVQyGQHRRGf86q2511Rum7sZYuyTYH9AsBB1V",
  "key1": "5u1HZQ3sLBmEygjtBh5MdAjGAbSiPudwQVnRac7qkLeQCRCeu7QRPZ7MMCNNvrBBJi1enE3u3XRh8nsNvDH5PdJV",
  "key2": "56CDFoeNW8Hxqb2zb1R7CDBd4MxfvHHeYL3n82GUa3LPU28BEpaP9VniKx4JrSECCBssgZzexi2daU5GRezz7uf7",
  "key3": "62REzx5VtL8P9NgKRoGg9c5HQ84Y9coEqtayPCA75fLkhMPD1b7DJfJNZLNdckaVoLB1zXVqvbQ8qShdhAWtaubB",
  "key4": "4vMnq6mmpGsbsEeDLMqWAM6aJJQNMMSw7Mufwkwvk1xCPkyKpFKd4NdP3wPE3H8mH8qyaRy37k2RUJbPrBXNjiYB",
  "key5": "PGRN8azFVdH3oocqzJLG8v2MhZLRs8EpSsvv7pFBZwAji4zS1cNWQTZqRDHddm9tMr3ipH758HJVWmdoSw2n4GV",
  "key6": "4UoFwBe5QQYuiH8psTY5xk5ftKGT425Sz8q7R8m1pHnLt4irno24m7to2s9NSasfPgvGDAdBQFKXDWmTFkkHqeyt",
  "key7": "28KUYADxfdKSi4SgSNkoVLKkFz7mZBnRWtCF3aaCQA7QKJ77TPFQdELNrXSQse4aUTHkgEhL37KnBYQdncB4fBZG",
  "key8": "33LPTxuKfnr2kEwo1iS9dtb8oCqRS6jc62y54dJmJEsZ9HeJkMAc9RdxS5xPn7gNBi2gkjk99uzzAUq74Zwye1vj",
  "key9": "2dDjT23N7r4zJUDq3DFJnVsrpwXcX8M2y4MECcVxQk1UPFmR2fVac8398UeKz5R2mkG7pT91SXjsYCZ4F3LoepSi",
  "key10": "2sxqBMuHk97tWXNwmYv2ip1mumoJDChrDQrwiBzBhju9tn2aEMnHhwA4GAEJoNjd69ksqRMPFoC9BTQ2gzTra4BR",
  "key11": "5XLZZwJwvW7AvVKitSa3qfS8bL7ewHxZRZjoCiFAWXCjnWzp1gKReDv3FhXX4QU5nnHu337GLeQU7pqg1ztBSAYc",
  "key12": "4YKJzRhj6EW7Z3CgLV9BSbHrdStkpr9rrA87CcPFarXYBqSVBAUzcUxR1Tdg6zHgEMMXZmFSZx7xfoX3qwvbNgKA",
  "key13": "2ZfHgd94m45BXqfknojrx1x2oNQ96e2wUZfR7aT5kacB4uUDwfxLzjv9iLvFVRMypuiAk81G9QSjXDgLdtE6E5CT",
  "key14": "28cPHGh8ZQFucQuzVMGVoN4wQ3THpFDf2qNUQSszjGJzC1J598c1ZMbkFZPoshVzux1kFQWVnc5Qjy6BoMHd8xnB",
  "key15": "3UJgioKpYBNoDQ4gn9zYSvTbQEvganzf845fwB2qrLDPmMZG3vhFPkJV9CJzGRbZjRw9VFujokrKEfAMVnM4MbMR",
  "key16": "BVb9pnkqjrc9ypLKh5yZdNo4cJQYm4t91KvGK5jpkdYLJ2dXbDwyur8pVMrTSFmRFgheBMSHnh16wKDiuzZ6euU",
  "key17": "4LmH3uUGm9tbHjVmffq5zHJHEnx7FN9AopEvjsVyDroA3PfsTvVeGwEC6X7LxdRXuXhJg4Axn3pevFgHugGoHkZX",
  "key18": "5HQavfNNTG45JeB4kZAr2R5kG2AiVCjuw61CEEVwHZsMZ7HLU7LYnaP3Jv1maahLQU5QitK7tAE5r72qwBqUkEyG",
  "key19": "4TSgYN6zeUAgZXemYndrWYtg2fv1Yixs5UEcNuH4Hhbqwwd7oUR98vAWFiD7wc35fSW4DU1QBh4uZjjKyWuahoou",
  "key20": "4ScaV4XX5pDHa1cZMMVtThr6RAwWViWVZc8VwbjSpBFjD7WLeRLPMAHCuZTyeewBpbywF8itZF45vRpKgGF3Za6b",
  "key21": "MP7AzHuxf3ZF4q6WB1biBWwK8LooiPHQUUmYNxBiFB8vrQ5NpWgEVBn1sTcYir1RYYKcTdAry6Dpu2XN3gL4fmr",
  "key22": "2G341aMw9rfAxLBafh97G7icz7H3T7FVzzhPKFKxQkW3ReNeyD8332M1bBUGtLgBUP29NrxzrW7HYqy5aE4iwMUh",
  "key23": "4MpZ5BabSJdRvtN1Q9NhPtixUqidNH6J8p4fKrLC41xqu4bajH7nDtvqVNKYGQHTNixfS3mpGdJxwcXq9baFMXpq",
  "key24": "3AM1XVnJqRe66AzprbBfCsB99SWCPnTz2pLr3tCqAfUSSa6W76HBcgQgRCEiuwWGxiTu9xYnkD9yUpqS8zQN2GK9",
  "key25": "3hLei7jnRc5cD6ye1PC64EHsh6BWW8W5a7uRt8P2wSxb7igAto3hdatu6ga9cfxBGrw7TphdUtVgssjrFrFZ5bvo",
  "key26": "4x31QND5bP7FuPxRh8jc6M1divXNNw63iT1D3kHWTBvEDK8vkh2y32TxXnShshEgESUtd6R1MjZQ8ZkgbjdUYkSv",
  "key27": "5NJoihw6G4dbB9MnTjnTkXmq3gvh6FAoBuqzozQ1WftQC6wPEbiejdUiCA3gSheMdqhRmNDNQwEK9JP3qitss7JC",
  "key28": "3Kts8mrnLzfFgvw2U5kYovjeDyuGGiKLYug7mmhSjW9b3TyZMvD5WJpUzsSAsCjt9fTFB3hBKnDQ1UyDj264Fyb6",
  "key29": "3HifJQtUKhSkZ52Y2a8r4G7BC4ddR9H2qsQgr9m1uBRhcxeDAsr9djEgp8AW9ZdSfnLF1S8biXnuMrTphZfjGLKG",
  "key30": "2diYJs1oGpuoqMCbtQYMsNR95Z2gXbsTUsas3ysJMBsyxozHpqMbZMSNVCAFJjpnPPQTu2qdLojDdQ1pnFaD55YP",
  "key31": "5RZCPNyjwisN6UGiMzNRkniHKmacVsAju6mp7hBo8d1XMQWv4U7BSorkHDkijjQuoVcAeedXTHE6ziUw4gZDycJo"
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
