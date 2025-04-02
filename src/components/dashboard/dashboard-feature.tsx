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
    "4aiffn2WfYknhmu5SEbjCQdFdgERYcBivFuYF1bWcZT3dpgVWsUfWvKH257rQWqkjKybDv3tSsd5H3PNnp4MFDMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FjboAmNHDy1nK8rVEy5RuHSN8QCUaQUwWw7PRoPGV8nAjJssXhdobUU6v5r9qdcjDvp1yNhdyjjo7dhVLPLVtpS",
  "key1": "4k5ac4LcLY5Y574ai9ETacum2XwcBvPRWPswAwuRR8LgbPVfDG8mSSmvxmn7568c3JdC7QHcJvNEhX3okiR6dcSB",
  "key2": "2pWSbU9cStMWuoVHTCWfTfhFJbcqnAmXR2McZS8CjBPHB7EhaCNGM7LyjempPgis2nZv9s2Ff6Y3qY72k5fGXS4P",
  "key3": "66jR3U4ajm3FwiaKqZvEdy6JhSDfXndVHeGDzvuJaaByypGRYEFKvPqdWUHxpbx7eaNgPD6HszJwdJpJhPpoNWeL",
  "key4": "5tc1QV46i4ZmG6nULFBraCftXVqpboDsgxEbmvWCT6JpDUxniFT59cwDMYRprUkWxM6Ezg5ugQaX2NVbNdKHQ4WV",
  "key5": "3iKudPhX62cP5EFLA8d2i4auG4dHwfqYVtex2oQfGuNg7rmtpMfTiuhbHeJ1Hg2ybcK9DqyRWrFL5HSXgS6BBaok",
  "key6": "5cHiuB3E2W3DDBctGhttanx5mmfMgsWbRLKjUHqrCJkSUJL27ZPuoQnbQoZ8KZdQV173VTJKEjJYJxJemwCkLoiX",
  "key7": "2nzScgDK4vwh2GRcVuhCU7z7J7pUuHT4wGACL6WhLVRa3Y7B7VnUjz1JS8hrE21F4CThEXZ6QUsnkX61kRKz5GHu",
  "key8": "3HEztR2pCTnGTfAjLjjtArMnF6xonrZhNoDwjddCsiMPiSTggjzoRwfhykDTNM7QPYj5DHzsi2nFeKpYoei1JebR",
  "key9": "4R8Kw8WSiTDcfGuvHYWAfwvj4FSTC7dzTwtx5uWuEFgTYXoWugRDou8WoTe9vCbKqLgNjeLGDMqAQcFK8NvUjgnu",
  "key10": "2Gm9saExDzriHhVYdiz7W6u7Ty7A1GvabpLa95MFUrTvdL51mkUfWAG9cgwnXuZ8XJ4tr54huQVUAGBXjPbUKR3M",
  "key11": "4jhCXaPMTS9ntZhx9iZb8y2z8eMjbB17p48ecyzZjSLBrvg5EBUPJs2cTWpbbz2W4qp6NFPZwCu7MyvwRqXZLci5",
  "key12": "5GUMbfMBoPNEg7nEKyBneWDg7NaGrFFBgxU11nr3G8TgdH5os2zAvikuEEV85xvqseHdZ4GqLjEq5FYCHFUFfaiD",
  "key13": "2nX76uqPwfdeiUDNP4BzXMkuahiGfMEYnYdLg3DFjiUyxC6Tu76WstJxssYquV445zZps2ymkedDXFTXguV2QeYD",
  "key14": "4ncYBytHRratpwDx6Jnd9Wkp6sSxjFsy3kPtD4cJnrqTLEhQypEdNDzrT5EafV5ZgZFgvcakfjPC9713ehf3ZVzA",
  "key15": "5xZS1NTpwjm5obR7U1xLZFuAx5rzuetnyjQZdRG6YGkJ3zLLK3Ui6ApZwSTyYgkJmvJc5MXBv324cyTM6cwfm4Bn",
  "key16": "5LYVHQRzRLa57ZLXoeEnGF4VdWSoEiufFQBZh2DutShTFGrkmtXcSu1ugcq6AX38RbwCpJ4itcbXNj8m9T4HKXzk",
  "key17": "4TKz5uqYA4wmQz8zrpvCxpqUT4goo3XaQ5kuVUxoRjnKetXWHKwJLiE6u6mF62KTEUoNaJtHMj8px3ChdwD7xJEk",
  "key18": "21ARBJNc795DYtAhhHQ3KYB7VaLmGE8bU5TrwTtHHU5w2X4RPrhCQnvvu9Mg5J8Ryxq3hR3nE4Td99J6k6tkPhjN",
  "key19": "24jm7Rf4dRpQqCirV5mhpEkW9J4EToShBTMgZkSNtjAr4McV3QWsCvrcWCg8i597rDgLSVF5p92AoiTGaXCiwE15",
  "key20": "2jHvBHTKsGgEzWU7y1h6nDtJTFRaA9t2wT7nBdXaPm65h37gQXWp441yTZ1GSVjoPTMvESHXSDVoX5G6Gm7pNZYU",
  "key21": "E42o2aN5KmxcK3s3L6Aq1kDiZ6aibgFadn5Ygg9ThySdYrgwxYPakDF8PPtNhMQD9xJEisV6srQwCwUhbVKAexd",
  "key22": "rsbCKREjKzBnjDSeAM3Rxpa4mXpDozkMNt3dCHvRN1HyCPWTaSUKCMdLdVfA8zKbxia4W8s2Bpb5rxZmrBSodSX",
  "key23": "5RReys6zW8bXW3TwczFjemgFfVU189XbyhMrBNNYZSCWRzzw4b3Vqcipjc1V1mnoZok2dnwdUErpb4131k8uh35H",
  "key24": "28wQPqSDihBtVhePHfSNS2hbMTDQHtQdhpQAH6xgv49rmqY4PKKJH4EX2PEpj9HSsKEAGHXmM5GK5xKtJu9cpBuu",
  "key25": "1uatAwVEeFm3u75YDQ4yEcFrsFBVUk9hz7Duwtks5FGESEpGUJ79WHV9yJxF6tqrkRGFvpup4mEtnDLjNEvgTfZ",
  "key26": "59FcsirxEMuUbXxqyde1NjrPqEFFG4ecBnP83e8eFGMxJKPbGhtvy7ScBzasXvkatJJvKVTGYicVbBn91eZ7zgV3"
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
