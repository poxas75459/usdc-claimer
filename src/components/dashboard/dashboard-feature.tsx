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
    "3V7wcohSscwtWnzaBq3wDZCGspigqvHVWeGj9GbWXTSwouZo7LW8JqacL6zPCnGXZPa3mP1YALEbPjvrSvqzVPer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RvWEzb4XSSVnYtEVGFf2y4Qi4Q3z9RA9ottUYSQkWHHk3kYFSfpwfcUVuPhaFxT79tJxZgkFrQWpw6KT1qq6Ygm",
  "key1": "5j4Mj6EwtZoPDg21cA8TuPDks8zTzPXcKQcufNkuitRbD2Jn5EwdgACzpmjUxFC4U4WyT13xDzGnCZPNkKbfeJDx",
  "key2": "5X7TtWCgorkJiWCmeVnTVxit44vSvhDP1Ep3fzTypVeRVtXSh4kq6Qf8enZZZZTWvLCnUJcCKNk3ZKVB5Q2JZSXg",
  "key3": "4PRk4RMheasWTpTi3ot9rFUDzMHkDkfk6K7Arw9y4Rj3RPvsrFRdq8mjEiKVydocJRUMVf1GNPzgtYCmrvm9b3Zy",
  "key4": "Dz2XY37azfKVi7o4pp63GxR1YT253pTFJRJggNdo2h72ATi3JSEv9CKCSk4kBoPyMi8zS1k49FpuFkTcMMFEnaz",
  "key5": "tvJxTxK6WwirFmkdStQuqSxd5mZ4efuXAuYjANGsiBz8dSUHmsU3duQWjUo5YT6VLBXS38PjsjnQqnsdRqnfNYk",
  "key6": "JstPktWrLiawrKhnHKN8G4ZN6cxBaAyWrP2cDHfwmdpEUQiPSYUSVhH5AsiXNykMLXayPgKdztXtzuExD1neqrC",
  "key7": "qxk9pRuZAdz5mexkSgqirJFfcBK33i5SaebrGHu8xXfHQSpjJr2icvjwu6buzRPAa7z6n2edjnt4XvojwVuSwYU",
  "key8": "5SXUjwVpho8McDNiEnwkGSShemFdBkyV5HEgZpk3omvPpqjGgtyj2FPY93JnWupHZ2acRku8KNA87iKZ3Pu3wCJj",
  "key9": "4HJFN15CYfSxmcPTzwtBcUtabwrkLcUaNfK1xb27JPkmNYA37N3fnrCkema5bMXDJPdanYVL5SoiStFEwnTcbepp",
  "key10": "322Wv5i78D5YSSHPbNDE3Y9wchLH5FHD2s63TZuCrpX561oUM9dN3UzFb4x95VdUYPwz29pMngyt4CtZz9zPurRh",
  "key11": "4YD7BShqpbqzHL4Es2EZ5J6Lv1sQCdKqZ9myfYFsvfZFftd8MjWw7gYZaNmQqkLbBdjQJA5o4gPWisJzcHFpTBLn",
  "key12": "3HFsJhsXUP643hoMzWcLK7mFGVMP3qLTKUAU6UbDzKCfePZhyfcNgVQQWiEDdDKpBLeA4devkgpFrjaMxQDJfUmB",
  "key13": "5MBBjfULV4UX62rJ5Cz1Xd7Frc4ccMJMoHYpjSZMGZjg2VbcpSsjKdLUKcrQFDTVP7Tc8BnXWMPawYGTENQvqgHX",
  "key14": "3hfcsyztyp7Fnu95JHuWj2cySUE7jXv7f1JtMfwJ6wiFXNpwuZzrxZnBbBboNq1cYvMQ8eqCMcxkxchKCpiDoXec",
  "key15": "3TD1dUnr8PFsydjfRNMfwn3iarF8XRQauG5Tmd5mSBkxtf5fXL15CUVL5NdzrVo4TkYcD4xEErjUtbogYKdviTpB",
  "key16": "5mX9omcompiA3psfAfQZPQXCpWf3RGmC4X2xEjetfRrRcgeZ4s3u8xAcaBYuNZ3QL7tJXQcfD6gNP3YDFpB3v6Zj",
  "key17": "3o6ZNnpMBTow1cdrmNXuzYa2v5zjf5X3BS66Nzuk5Yief7zY31kznD3sTmtZHng19RDFzTwqz9jWWxwS414hYGvu",
  "key18": "5Cn8C51oumkTBJagSd8uzXDWL8Sj3xPJFyjw96cTyL8J4e5Rf7UY6zpECrmgkQiVme9suuM7D1ZjutZJQVENkVuW",
  "key19": "3VC48TNLqFHu4EqtdAwNpyp7XQHzcEMHYXyFFGkgWZub9MbCCzfmkatnkwCBoZ3H1ZzMLr52myovKTWszbUxv68P",
  "key20": "2cwctSj9bhgViY5g2bvKcF6xay2hJjuuJYVvngJZdjHUSfysicYCwFnUmFt45gfJZ9u2W8dXsubf9QVZ78Zp7KWg",
  "key21": "3vHL6phJR4sunA9Pg7AviGEGLyh8exjwXGSykUVBoqsRJEQcbTWQdhvapUCSMJyEsjVR1XdHmAy5YV1Gb8y142dw",
  "key22": "3a7mdiVSKPrHuViv45nDuaPtFtbVjrVmXmVgMeKmVzHh3WavvLt4nbGxFXwuB5ttLX7wknYaiXT6hiNV7mptNyyE",
  "key23": "5Fz3ZcjXYzf8587WaSM4NZBAhrUAoFUU4gSK8sPfKSE9Eh1AjE4PMWPt61YpcbbQ7c8tYLaGtBXNF3iNZ5kMabwt",
  "key24": "VgNDpiqzCLRwvZSzyza4cTrXm6fK6NgFqM6ux8yAmWjrQFW5FJNQrJsYQafiP48P7YBUxDYze9AjuEX93uESgz4",
  "key25": "3a4DH8et8wu1srzhosyRtHmYDMC9DzodM9h6r28ZLf3xMfnmsS7FiHR67hg3Vtm6snmmuS75UtKR9vGtPzz72TW1",
  "key26": "4YQtL9sBVMxCFLD7Rz3mCKL5F6MK8ZeMGooVPhyV4fyZLk7mtZtQLGyoCN3VZZVkhL3nF5xMTFtv1vrQE18VEdng",
  "key27": "cyMmeLdWQfMpnzZyoGSrHtTWscUunZYH8UBEJYsYxf6tkMoCH6es7x7PQg93sPvLj3xiW2b8XwwzZdjYSocod5u"
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
