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
    "3cXs2K7fZUUFKvfmvgoaGobcFbVSPEHp4P4tnJy9Rke7fGq47XLAaM5fat5basJZpG9js3bkMiZbrsDvqx5Fcw6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X2843qMbcysyvhA5euPwdVzU94Q2DnChGSNJfM1VdJk4r7JPmU1ykaiTfXm3dmLyKUaE4mmUtwLMAsEw7moWZXX",
  "key1": "4U7WSwFAqsG6D7pvwnUdXqsX2PtxKWYSzecVsMXoBW85uKNvLXfSfZKZT68DhcLiKAzTsmoZsyyc8ys2kZEaQqRk",
  "key2": "4QBiqm5zwMU6DwTq5ikXm6dNoV9BvaGqUrRtXTyZGsfYGQvMbf2mSnNxey8HrVmJ1NQdDjrmzYfqHK9KyKk7cEBg",
  "key3": "kRe2T89bQRue917mvifvbfDNQD9FYL3TjGk4pxKvs6jeRoDeySAZzvMjQirBTVgY3Jep5h5h2cZFEF94ZePzpn3",
  "key4": "4ZGryD5V5wvGKpMDW2Ym4pomM5MC9qDJzoPW1niHS8dSxFkPS8Efq3LFYHc1mfVKJUJfSHavSpdqLSrEi1JSzfQt",
  "key5": "9aGxjxPKxBeWjqyN5ebeywX6VZiiXTH7u2GVrhAAn1eg3sfe6ZGU6m2EBys7F5sfAziAQ9M4yLCC7tAoytxotAn",
  "key6": "2kXTDUavPoN1sYBPCmsTTEcYbrXGo8CX33uq9nXMaaHTEhKtNDxXnBaAWW844R8y5tFaDcVLhwJGqYa8a7gxQyxx",
  "key7": "4drxYnZpZMaP3TzvaarSkzPLKP73e7eT7PbNPaTCRNEox9ffyiRgjUc9qZfKEKMT5d69papvdyUmnzdSD7NfLhSk",
  "key8": "2jYnuwvduFeqjL2a6g6uMNEPqveeY9wporicMNH8v9zXkAtWezCK9CvEHyjC1jbMeqiTUtBM6TMfj8EhV3HJrs1p",
  "key9": "w2PWGGtJiRgrkbBqkmrFiLkDuMNqzkXistReEGwUXEVBxsDwcFUvUBcjCdaGPdJf9a48br3Mn13DS8imSqcJg3P",
  "key10": "2o592W6ULRSucFgNWi8qyCBzMqChdxb3WZ2cU2G5R98MTr6ghsBx4K7Foh7B4ZZY843yd63tTuBrdfs36GeD8gFM",
  "key11": "5MQL4zvjhsvWUdPmP9qC47LAZnzqW7sYr4U24ifaTyszxCrmfZwW7PXE7nJ67gFrEKvS74qcSshWynw9WzAggPjq",
  "key12": "61mZPdp7URPYtf1WC4xBbmLrjaEWwpYUtFuxn59nxk6gSrEGeVKhzuXG8WGFg2sEeWgunwT4kmWsdByoKATD35xK",
  "key13": "5jpDdBxEpTqgTnw4Vd64x18SaJ78bfAAxdbYDeut1HAm9fzNgHpwUjVGX7xMoVhbKCwmihci2m9o6DSbiS3mKu35",
  "key14": "65W7uLrP6KXXy7aRnTUNvetrf9VGcMtaGZYEirT8naodKLdc2561SmN3oc8gy6gz5ksh8ptY9R2vgCtAaJVZGb3L",
  "key15": "5jxEjB2BqttmV4Q7HhovcJLk97VEFyRDLotFPASBqpc1EAKZkodpjEW4GQkDymFw2TaLqXhHdEexyKhozk9ZNP33",
  "key16": "5NA12isrpbDtEt5pR5Cp6F4edSZWjbrytWDbFWSW6SSZRaC5zRhiBKQH8aNAov18gRk9aSm5WRkCCySbJnid449c",
  "key17": "5LQdrEPo1uT8aB61BD7qeGwUjeterFLYjP6ZQwmuvwzM8hn1QRFGWcrypd1h8b5W8KJ6knVTjSzQWVagCeDE7ZCn",
  "key18": "2GD7ezKCSBiJD4t75vHtjaJ1LLvaeqZVss3LoKv5GE5XPpgtcZKWxCY4UnwyY3tJd5tzEbrqhZqei3EAxS6NZzD2",
  "key19": "3fTrBWmGctfywwGG5kWTc4WiWihME3pZaaejwagVzzXYBiqLSsctyWmpVSyezi2xwnwgYmPBh2Cgkba9CPPxdjo7",
  "key20": "5v9GywNZgsTmxt6pBw4KV2QQJu5aijrJqA3p3egNef3PCHcR9b4MhkJbWqprjzNE1Js2CgpocjJy5U7wd4T12LrE",
  "key21": "2BD7Mj9hK6pasgbzt4jKBXwbHC3kzJZJAU9RNta1ka9rXMV1yHymEBRJXHG8o9VWEaSAgiLRt4nowH42Dpgu5NzG",
  "key22": "45dBBjT1MRT5XzFMx5dCGoGdAkxuvnb7EPLb5nRqTVaSc78UsAHcV7c3oNohptA8Vr2d55i5VR3emw3ow6ELjwjz",
  "key23": "3vZPjD2gWBjr1G3ABCwrhfbeHdM8VWjGDMgTZbaGfZYqcDbdLgEy2R4VjGQR1nnb4jnHa6ZHcUDi51dkkWtSfM2u",
  "key24": "3CcecfSZVVDBPufsqv2xktAvmqUsKQSiEBARYVgw8rehBDaUxz982cJRd572wRmDXZ45kG8jxridVHWTr95Zz3wJ",
  "key25": "2GjJbGqagr1QMuVnnMfCSGvNAaum24UKTnRsgi8FouPeSh8CsUEBFnq8tXPStn2n7uE4qEBFdfLfy7hK94VhH7sW",
  "key26": "gMLkCPdFSDL8VXRvHyrvPXk6fn8Cm1wATZ8EuQQkpnQfFwCQoALXwH34kekU9LcJ6xUoMk4guoLE2xvCMHUgZLE",
  "key27": "4o9xmX9NqN2hMsgpQXNVQEAy3EjZCapN526WPKYQGcHmNiSASsQTGCNJYNHVFxTA1MZtJFpWC3wpnRrd4kug2Unu",
  "key28": "31n5dpCLFQ4bmNLAdHYiR1SV87FQQmJy1KNBcYxtjHDw3rY8NgjENV2gZam7CjGGUufY2Qqreu1yLotGvnAxdxgG",
  "key29": "5ccKRVh8Sg6VX1orZFp1yzSCqNBxhcsWJRE8i2QvghW7is9Emnxb6wHg3ifMT3kJBvyJgqqtzY3acZAY7V7QPFyx",
  "key30": "4zNCZ2PKYryXbg9JpUazr2udK5dvG144YEaB75khUJmebUEMzaKGHNHP5gbVdeDNEDTcWrXwqTmxGsrxiWZGZPHt"
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
