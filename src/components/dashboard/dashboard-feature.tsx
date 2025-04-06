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
    "vPk16wowixxChE73i3ezc4mABExUsAuNSEvdXCePJjHB8SLcEveMKwYkzGMtMy2aEuDWKQRscH3ScERreppEDYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SnPh4w1BvzMkPyAf8fVoCyMR8KxsAnfm44oc2GVqd3PFKvmZ8wd29mixm5dx8zq6jYsTgdZcprFTATCTCKyi98j",
  "key1": "UMZf9VxByXMwpEsUeMvCchG9E18J9mSMH3F2rLR1rRhaw5srZe7YEXF6tvu7q9xpJYx9EYGkyTh8Q2DPuwzU9Zs",
  "key2": "2zX2mmUft9YEDPa3qsGeXTqDtjRrsMK1vh5PSRKu1BzhJAESvyWSJNWtr5hV5TzAacBGbSbMsVCcqKDKU4QEhU1E",
  "key3": "2gtYTwVGoJGYidnABHC2RkGFS3L7Wp27WuQKXBmJWigAZefC6tZPFqHM1QoTCbucLQ8BBwYJZb4zrfVi2moBg1bd",
  "key4": "2Z6pHeqQ315ogTuAB8ADCMSEAa5LYyFuCJzQiXF7Mxj8cVb8rLsyPxwGRDMNys8d3neW4ryAUHQ25YnCLNNNaWyQ",
  "key5": "2vC9YbUr2WkzGjsETJqE63pu8oBJhfEuzVqeccEZjyXomZ3Qyqr1xudyFwJEgQpzcSaLk745qZZSJ6M6gNZL9nhN",
  "key6": "51G1AuSX3QCa1Gj4MCYmCKAABLwL2wT5A3z7VijQ26eLzMNj8Fv8AetT6YE9PzWmc3Wdwx16kmBfiy2p6J9EM1Fk",
  "key7": "4JxCdX6nK2utXzUzN46iAPuw2zznyZYJk1kC6qb1FuuRJB5CSMauQU6gTGAUeMSCAckzSEQ5SxzvEr55FRGXiFpc",
  "key8": "3WtkrugRWND4o8V6bEXvxC3KbWWDTK3nbxaBebh3KPchEHuwSi8xPf1EsA5enqB441UEMBPGbsUGSTEWNosynZdv",
  "key9": "34mbJyMd56CeDpyFkUJDBPdHid1ZwjJ5DE4uPh8taUiDs2pBxcYkydmwWZid8Tr3yxSG1yNyZHMyQkUTeVxVamQZ",
  "key10": "5TMjyhWe2pGZEjx9Qc3YWofiwTrtG8PQoiq4coNPr3zhAdvuXAi2sdJ4fdF7wai6xFdAy4kwCSYTCZ3sPsvWDQCT",
  "key11": "8vymCvMVwzzzFUBJ2CqgVBaSTzKPCU8UBkqyZX7QBQN83uP78tnZHRiVPA3Vs3snJjW4mx5oMBkf5xqH7QE67d4",
  "key12": "5GWMhdxWauitLPKpUyvBCrQyFFXQYB4cM3ASHRchXh7MRUjkHxHTxF4E1xGprNdQAm5j6gPDNgmsqgyuZUJcpETg",
  "key13": "287xPaBxwqQoyuNRGqS5dMz89Hpxf8cSb66HykbF8SbG31VHTdNLUSYh24RGGrzB4xgoxTenJWiEfhLSqcVGXpaU",
  "key14": "3dVX2ApyZDD51ZB8HLAb8s9bJQo5BQahA7rNvu8JPZ8m3Lfe4AXoooqDdmL15ARRcmZzkotnDBfWBvdLtdQCiGkA",
  "key15": "35tDM25Ni2mYgp3NmGMwQxCVbAzeXg28pnmC1yAz9PuJRHhRwpqi3PRGt6SucPMGQFnT1QHjWHnqwDTmrDSpUvxo",
  "key16": "3zjc5S1DdTehMfdxhp9XX21B2zTxJJ4yrdiqer3QnDvhRqeE3DCx5NeRHj7Qb191KpZQ9hjTJcs7zNpPwEhETDMD",
  "key17": "43jerjubeZgmnegaKuLzxZitPxC8jcRPRbz1FULdPRtv3b1v4CkuWtsBcpKPHxQCqDQEZifLskSVqMxQ4yubnzNL",
  "key18": "4BMassJmtGxsnQaeQTnWTEoHaEXVbWrDT2BVVeuC9YZW69gsJ7viByAxbcQxeLyEGncdy2UrZvesogbqqNyCg4EV",
  "key19": "53tgTFCbhssrNZdtV1Nh8SAPjUupTEn4qDDZzsDZVUUQJfccgum6TaERUCLjYDqGDSVSZSATPMihcgBQxApkFXrC",
  "key20": "3fQ8cWizWkNQ311KJjFETqXKPURHCEvF8keokSfbB72kMiqtj1zw6pu9zqW7cKwwHPhynAPCi878ymyEk2XmqyDG",
  "key21": "RLCXihmHkoP5LHNzRetgkEZkKeNUgcr9UdC4zAhVXAiX3FJAXcxRb3XadYkZS4NmixSx3QYYfkpw7FJW35ysYq2",
  "key22": "62YnqTAJruoLKYa1dcc8hNtHe7YpKWoRAuAqYLmQYav5D1p2gkHKVFEoaaN81B5wbVgjxER9sxg2Deb5D8MhaFyp",
  "key23": "3DsanUzBUw3igPskvwZvuW72rFQ3um5jv71MJJMAojBNhzsNpgJPT2GsT8vpzTN1XaNq2n51Ufe4GtBAF3c59ZJZ",
  "key24": "2M6ovACPYXBgD568Y4oVCZcUBTeppVWv4P5s37QAFYQFMWPYtpHamDZGoirLE1xs7h8w3jdGzamSXVQD3dpgeuHq",
  "key25": "5NoYjAUCsLgR5KSH7FkAMxgPKmsK9BnWCRtCPoTDB5bLpnHxVwdCcZoJSringsEHBitE98Kwakvwa2xz7ziuvS4b",
  "key26": "21zn8zQJ4JUpTeAEC2LgdGfWXw1RFd1AdBU17h1gfqrFY8c6RoMv2SjSHA2tJEXNf3ST8E9KZ2Z6vph6SnLZEv2x",
  "key27": "2jMAsMpCdhMcGmCt7NDGSm4TdyHhUffCBzHvkGw6TnJq2z1dz3mntopvV5fY4yGHzcVHgcUyWEsg15hfpqKrGmgW",
  "key28": "5TJi5WQxzVbawj71KsEkXsnTrWaLRJitryhWiFe59mLLSHHiuYYSuomtrjxcZcvmJEbxaKzTdpBLbbsNavSjNaxb"
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
