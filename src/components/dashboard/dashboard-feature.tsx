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
    "3NL1U9pja4dqrq1ZiLhfmNzGaQbA7EcamMAH3GwwyySaaoBvsuwG6mpeeXthywQ6DtYbptLrHomQ4U4XLVFbS6iA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bfbbyUcozvdVok4UgcWH5v7eAv1P843fd5XNGAgKn2vg47QkRYwBvF8BC3YNt8uu79TBPAgz6cxTDsiejQQx87D",
  "key1": "ipofnX6APno3HgSi8uEjG4icf5EpWU2wDVxE71VZmqqL6MgCQGeXoaRJpWaaUr9717NXqHtFpTHdZyVcLyP7e4s",
  "key2": "4ZBrJLs7NKzLm1A8W4j2dRrwhmhTgj4N5zGa3Ka34qqpnCmdhAKGLSLDrALf2z8kysfaarMjAA7qAAn2W8NKqNom",
  "key3": "2DeQCzPYCt7kBVppzpz4reJaZnUfrf8BWgCWzNoDvnJ2G4WFbyPwNq4pothEV12z4LpcWwpoVNYLSVvWyKmPqsjb",
  "key4": "5crXKRjhk192iRHwEJgwAdgFZc836RVpkxpGnqp7aRRPfAMxTd1dF74pXwN4jFtMYnVnTq6vVHdctqR72pKjZtGh",
  "key5": "5ncifpiGSJqu3zKtwb2mhR6GFysjWZVcd5s7eFgk8dYrh1t8GtptiMKGDaiFzRCwKzC8tmXvsd3wZu9hkvofpnko",
  "key6": "7gindqhrRgDquUmWGGMzArjw5jqhbjSzPBSBcUdhr63qtbp66ncpBwCvWH9jAgwGjuoG4zNxcuFZtAu8kEcUfyS",
  "key7": "5rbuQtBSiGaWPVRFfgt2VYmZP5xtAAatE99ngp6UN21og8AJJFZ4sntgSDhxbQxH28c3gyXnk1n9YhLsTjGt8MWT",
  "key8": "5iC5JDBbW2UNE9K1PSBaXKDXscQiGo9LKvy5TeLhVoyHNUVmuyXdDhh9zFEK5mHFZdJWtioMjFyvsaTTtajtGvno",
  "key9": "4qM5RZof3VNV5iSes8eV4yNiAwXd5PrYRUPnYYaGoysHvZ2x9zJeHZqjEFSnPb8ktoDP8HRJDGioDBkzsQ9b4AZJ",
  "key10": "4RbSyrNEopoM3UhF5gAqh3UrC33KK8rSoheNR485osXXuJaf9YhUendbjBByfVuMrpxuuYSDgyAehZYed45VhWkF",
  "key11": "5nNMjmUCjWjztGry7851Hc4cG7LRZguQb8QKN4j8Uc4wsuXh9Th33H76SjN4txv3rFemaMA8JCsp9bxZgtnxtxWx",
  "key12": "2iLVQ1v8DUMcHB3StsfC5FsFrPEmqpt4pbiEUbnAgWwrevWhrcgykNU7XVz5Gj5ApW9JyAdrUtWRQwHrsToCJsxC",
  "key13": "5NtVrUsFC2SxqauMqxXfWPGngehyqqxraxJmmFU2k3GZeWDxdXcxgouLDaazTd85hXjmisNcQXEAytCUPQW9cH3",
  "key14": "ViwQfv779TeNVnCy6JRuy7sG3puXXBtquK9dbRoM8AcdVQsd8KCptGxfdciMwQJfGKWxPkime2Nf4xBHqv4cG1w",
  "key15": "56Ky6iVvDXWQojAqx3piFznWPzUphtca69B8RP7aMUvDafehHGFTFukbSUpXhUpojbkSvFbqy49WTCrPd9x2FWV4",
  "key16": "4nFCPoaAtaHEJ2TesMry2nGTfMhFzAU8uEZL44qdgQR1WfVQ3DeePSJyhh9LjSSTMBKvX59K5phYY1N4hrr1FzvC",
  "key17": "25wgRhYENe1CeKZnwQHoAQAkQoGne5JvUEfcTeEw1ivzqqLdRPK9Gp6jFAbUGV4vKKmYvgxq4MvCJGWBm6VTnKWg",
  "key18": "4jyCm4dzjTAatGjJMnptDzpnBT1TrLshByNgcdi4mLHMFyHL5nFmrgJuJdXxZDBvfVwo4TYTTjfRdDVnQrNUg2Tk",
  "key19": "66eJ1qETzLkqtBgQKMzVSV5iipuNRcrj4WGHJa7yykw4KeUHYDHUJ8xFj62CuV5ovQb7u8MXwrwm4G3paAWT49vX",
  "key20": "61b56u32hHkBz5KgEVzXgk4TLXKq1sMGPzkDwXU4AbaswPFVmvSyRUJQmiPJuCnamToqSAoPBD23qFKvxjNsiq51",
  "key21": "22ix2wjnrR2DXDZP4PLCEDQprP1DBQ7pmKdXFe3YyhBNc21gesmVrNw2VzENJh4HJpSmNL1GA9cbdMNrUeJJv6mu",
  "key22": "3Efojo71NX1k4YBCuvTvsCUwAgY8wzDhr61xXedHpLnNRxGYhpX5jFbChaWsD9Se4VSsfKRYHJBWvdzN8MEYTR5C",
  "key23": "caiZoS6k3K9o5JRQ5tSeafWD17YWbz1iokXfQTGNnadTVpeEVx2HSd3jXrA5g8XwokpGodefD3wrphPrSR46DnJ",
  "key24": "ULY2UGuwCE46PqzmJMqoecrbe3SELv8KnbHGmRQU53cEGHupqaAhVFQVmWMAg7MHAb9wUSWiQSyWCHrwDwKMmf6",
  "key25": "3Fe4UTRtDuK9SLTnwCTqFmgF3DH3GYYQv4MWDkuRRuPEmCwruSMUFMdgFWKQKY4pdoMfxjkTPzMbLjquY3jd4mD1"
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
