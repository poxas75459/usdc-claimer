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
    "2As3jaGpTXj4ZsFWwKeYzybk4EmMFicN3iwLsvttNUj5sHVsrueVc6ujCNmk1UFYdxz3FHKaUrmD9D46TmB9Q4Hf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZpeGnwq1H4Nv1b9zg4ih49CgAbGtTLkaZZnn2JiEoiRFMQV1DJxD2FNaaBsHWviCZho2sfRxcsY9u1keRXVd9wk",
  "key1": "4fzc2nXeZcBNga6xfv5ckJJofesBXrkHN5FSnxex9Y7pvjCMEfyeDMpUtqxz116sqJtLXLbGvhkgrwH9mLvXEU9h",
  "key2": "5vWFyrgfxMSThysqNd9y9H2BEoeBev3fxXGp9nrwxNxKV2fG9a7HQ9BNbYA8xbsXnMV1c1WrcXL7sCpz5Lxsxzt9",
  "key3": "5FvwDNgBuYffbsGwCFmYj2xdwGTEdCbK4MYxBrs7Tju75MGi3gRQ8KDZyZoKjRAMTMZqNZgKKvp2tXSrVDi7vm2v",
  "key4": "5C7zvcLWXJG4VvBQNXYetPZVTrbNCmVgoxLZKTH5fDmgEkv1SypGDYZmucd6ddqnEqmeGEfe9mUpYdnscYzrzn7D",
  "key5": "3qZFa6DV2aVqKExzG2RGH2e61cnqR8t7hz8jKxtPaM75YhcNuwYVKAJX37HK1VZ4eo4WfQhdpnJT28SdX1qnBTJA",
  "key6": "xXwSMApYJTWSopAoichwxAHwzGSFRSfuztFPxYkrJA9CLagZfEZDCQBSS8vcYm1FZKmrMFGzcQhefY7d71cS6ga",
  "key7": "3JmDcE8yYhUKn3fzUdcPdymSxDUdw3jzZAWULma6GopLbSMJPib2S35yV3Kg3vNi3jDLJN5P9ThQ3MFAFBao6kfN",
  "key8": "2u49CRtt8sdoGdShEr1tSWhqQmLvniqv5j5AzsMYf1zRHGKWJhotDWPDK61iBEQAo2R9PPH7eQqhvKKSGSUhviiq",
  "key9": "2s18nzkz5GmAe2xvgpMSTCtGGj9grVLm6eZyJX8uaApmkkCPUbF2Q1f4K6rDLFxXxx1XZ554x82Q7CRZfQqSKBcZ",
  "key10": "hcVD2TGi6PZ15uP4eojXU8i7rnktLJtoefpKrkXC967hpQLgYWqeeiftSN9ucADsWXKkZ1iDFB9Xb9PGPjqk9Rd",
  "key11": "3m3mR4gUfGNotiv82BHufYDp44zivpREb8cEAPgqoznW63BvWpdAtkMQtrdXXf5BQzaUY599Pb3vph6DumXJNkyN",
  "key12": "14TFDqB6i6bD5QKyPMJRY8sfhuSdzQsxn3UDyfSoJD2ykapv7KEKvweEeF3XHAkZ6o86KyyvMq1fA71PrCovDiQ",
  "key13": "3qXPRVrVGNxkUCtNgnQknaZ3ETF7b36HAUdZG3b7Nmbhs9Y15d5DH9y9E26UopfZpRf8wDsHRcABVzqZ6Ngtxa7D",
  "key14": "477tUrYm7CRT5M77DdUTuWy3ruJPf6rKub5Ejg3Snz3xHNoT6KUJ8Yup1X71p8NR4y25iNUocHY1f6M1B347GeKg",
  "key15": "2KXNYH91XokWKnBfcwrfyDC6BjqiTgs27jYUcGTufQaaTRMoCtkatVvatHCU5ymfmYGr38aBVxBB4kZQ9cZNgzMZ",
  "key16": "3kfGNH91KreUkUxaNeVmtbfGJp8R7No2VLpR9AL6XSs3WtVvU6c2JbnBKpEnudA5d75MmRaFWqEzU2sSpH8wF2pJ",
  "key17": "qYZBgkWQvxHivmCXs1gK5ZS1kkrZU2CvK3xcCN3hfMJb8hYLYq8hfTRF5w8TvagwfSirbMkW9vCnpsrrWhsxyC1",
  "key18": "4QFXsHhuzELJY4JiqRLgP11c8pQR4TUuzR5Li97oyBHc1McVQRwYBM7QDtP2scbhBFfzaxpudxPuzzifTMBZin7S",
  "key19": "BgTNsUSgqWHVxwqVk5ZU8hXAnhXRvrWiwhcwutstCjFsjJjsJGNXjV1JRym7w1yH9FcSvhTJGnyny7s9exMv3TG",
  "key20": "4TugE1BQdLYXA57GnPdphCgSwe144SpDqCkiLAjk1Wu2uY5JUuLkGquqxBt5fUEtNVagZMd5TUuL5Z6yMQ2H2Bof",
  "key21": "c7C1AYLfvFHMWFMw929j3DKhLgJD7xDXpTuqpFsJGR8MmnGRNBKFztPqKaZgsaWXFa7oKuDKr18JZ6zkKqRf9XJ",
  "key22": "3QqJu84huztkcJeWwA4L8P46UZb71APoT4Vf3ibwYt5WGMX3HdEk4z9XX8XHj982KSaTXxnnZbBm3z23zfjVrs1B",
  "key23": "4yULrAsiz5oLmrtodKTFXJCG2uYYZAo4to4xnvMrKgBC1R5rut8NgmJ428zAky9xbnsJyTpjUkdwoMgz9KJ5PqwK",
  "key24": "52cs4AoX3xAgcoNj18WRwj3DnViXJrvuNUkBcW4de4KiLzdXarvjBpayux2jZri29VHUmGdPKADPBx77UxTJv1CL",
  "key25": "4kFdJd7Li9X9cvhuCgA87FbzgsmC2RfCbr1YQasHj6bzRMo3kxdSNrhms9YQZDanCRAtLrtqcRbJQ3U3dfS9Y7DB",
  "key26": "4WMPuWmBAAekTptTonJ8uMKknq8XPyX26Dx91vHt6tRdtvVqYpfnuHhXEBTTgUzepDM7QkG82zgDUbh73SjChtS7",
  "key27": "2CQF7cq9neCfyPm6gV4s9AYb7GdfbseTNX3ppiiQLP7YZcxCL855o7yFC2ZANE5E1EpfrWS8Knz6VvaSZEETSS2K",
  "key28": "2wQPm97D1GzoTBsFH6MdpCamqhxPd27K8XQsh7HBfruQV4fsgFWkx3n53zCbU9AhunAsYu428HjhAgN3nmLuQuVv"
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
