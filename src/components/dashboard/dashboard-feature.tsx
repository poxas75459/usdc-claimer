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
    "3BdG3TCAnUbVQD6pBK1vGoUdyuTtoo4xH7cXsVo6TjVaQmtJB3nitW7ARuzEK6dapc1Ev4ShCs8uWoVBE1pYMFMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s7s5wd57DbiC2aL727Uc8eAKT8qHaGrMo9egMm5CkkWQdsTpCQvHERjThvD9C33DQ494iPKJiuKabk13CRWHrnb",
  "key1": "3SpYqsRWDC9KvsVzyTc2ddnzhePvrJXYFcg5mLPzVfbPWXnyQj5opjViPSmuRttvh8xFzMh9rTuu2FRBj6Pm5WR6",
  "key2": "5ivoDu2KEcWvJ61aFd1hqSXzxJBfEKpkCsD7xQnscBXu8broXPpqUEdLUa4qLxBm9Krfg2xNzYvTRLDEy4Ui6P7o",
  "key3": "3nzJn1zYDatXxnpetCMZxPZnpK5fPhJMzEtk1BteSbLvTe4UJRotr9JLkhqqMqZQCHCFJFirad7mSYQuJNRd5fn3",
  "key4": "4KL5typS1mEWC14xEehvm7T6QTpQPYG8MhwCSSgevxDx3Yo4opjceDQ5LsQErHag7YMMfZ2qsLurpf9hq2ahbcf5",
  "key5": "VPShbX5fg1h9zScWYHjrFGGWEizFt53XazKizELpKnx19fh5TEG25kJAxzeCEy4FkMYSa8j3PJpJnVjFgz2Y8V5",
  "key6": "Fn9C77a5u6dMAwuxcwakXFTtoTHZXRJf2mL7ZJ4pYtuYbGsRkC9CQRXYeaLn4M5Fik9HjmPEyoE4WdHzJcwdaZu",
  "key7": "8pr1VNsdGZvw37qhTpi4BAvWejQgwQx6LndpUxyABHE9jy91XMQm6NhTu2PL8EweHNfHQ6KjJZ3JoNN6Wd1bQXr",
  "key8": "5cGGGaShw7fr1PLmGHAgeKyruSRJyAGGRybojL7Q3hQTCWnm8WB93sJoar8jTqy89TqSJWvTbu5WFYJ3bLU53r5G",
  "key9": "q9JuH8UrhbyBk9WkFu1m6zphRzPMyE5xKFdxExTBDbBMX2VEgz6zk8xAEDYtSZcpmVsNMVEa6n8gHB71DGfrQYf",
  "key10": "qbsEUfWyX7VqKxCWNWQk16RUW8fP2BV5vxMUvSEdCKHaFDFLAGrybA3ta9wQp7U7JhYz245FkA2KbDvLjmWwshW",
  "key11": "63ZYCG2558SyqMmfjjcRmAyG2egjsMigkDJUaESwtrGwJ9VzDJuaKeFKniUafX26UEs9yQy1X2ZBV9P6nuAUGdQG",
  "key12": "4pNTJ7Lca5Lz6tecPF3X9CGHsxvPE1CmniHGY1sPwApZsngkeP2VgjXQMgi5odgJ4g4o5v3YTzErG2BN7YUPJFWn",
  "key13": "5y32QNhT1cMgRQKLDWHX8HoQjmYBYVyt21V3131A6pzdFjdxCMip3DtWR9uPHCdzcQLowwjAvux1NugFQCAtdjef",
  "key14": "3s84RDtkSJZB41xsSeTHjEDZReaGu8W5CNEM7mHhHb3QifKtfyazX1GuevJh7DSq8Cerpy17e7xn4K5Dy7X8bCam",
  "key15": "2QLSQiEek143wnD1GAn9cKJgKWN26mNJVqKmqBPbqVuqQyVo5toRusKu48cuSWSLKPy5TdNDjiQNYyDFmY9nuDEH",
  "key16": "5QDvMofMPZw7FWDLET8DyYHRJrC3CXb6yk7PgFYfFMCsRBATHmUicX2zkxrJTWZPKg5eNGdHuh1KgtLJrk3MuGvf",
  "key17": "5317aCayuGaMCE4iMJ9XXjF6AAuqMBwJ5tPHLyndZLBYP5rSagdUvRb1N9m28X3K5ify895s72Fo9iX2ttpkAgXF",
  "key18": "7i5pamtHdswvHBPYQnrjLinahyDDXk7d57BuogTCtzyccFJtru13aAcnbWGWHjr52rcmcnE1MXJKnLjzjVmRFwt",
  "key19": "3JQM1pEuqUZM1DGGqdrDzMPP8iUA2ZxJEdQShqi4G5twT3nHwssonurtEbMzZc67zCJLW3EA8bsau9cQqW5DQJP3",
  "key20": "4DEHkifJ7qqF2bFissSFApqCuP92F7FoeraeALWkE2MQxA9cR8qnGYfHBnvFKWSqiMXU7wpPeRCezx6qY3sodsS2",
  "key21": "p7Jdz8vcRVr2vWUbsMu575kD8VvbimvmRDaBLjwfsCrTCVQGEjrpsi2LRW7Gf957NsMTSMoijmCwEYCuJpNtQwe",
  "key22": "2Lc4CQLTxwK5DXFQT422gyAf1WF9GG5FvJzmA7LSUgFKz6ooEE8sMKtqcNYbGDe55ZKKXuDcN2HaPErhXnSGRe1d",
  "key23": "697gjAmXSSEYPL2ZdQTWFJiy2n9JHSfkJ34N5sEgJDzFoSNxJXZeuVBZmS2xtPxnozABZF6pw5Y1WdezJCgYaJw",
  "key24": "4v5gpKo4RxJNv9BEMoe87MgpnwaPpV6oUpkMantuCX5jn1ejPXPWdxKJTEDEqB1FHDVRbHFNeHgMzS7dBYKpqoVk",
  "key25": "4eG7bTnDeHkbcY9PTq3eXckXh5rVJdKvQCPc29UHMGvaYoxxGtHHknGgwMJeR48Y8XuXyfgbEYp8x6zHw4obgPdV",
  "key26": "54LNS4snPLBR3oufCJrM9WASK7bmhth4Ww4J8jj5p9L8YsLH9aiD66cQVWyjWix43R1ocVNgN6h4hYteXKVEFVkY"
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
