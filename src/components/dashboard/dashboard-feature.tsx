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
    "44ozbJabNFjKbVUdYcoNUaoWiCV1ciEs9wKowsmnb48q19kzKX3HHHH2zG9wLLX5LsHJoEoK99XMP4j6CbMF516B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6awfuJyL94VZFAcMuDzaJqLvZSEGNd5mDexLek4yooPt6RfNojVG2VNYqS8K7ULNrnjdG4LTmutB6CLxkL876Fw",
  "key1": "5hgk5fJpgZUZwZF9cmYffagYyK2EvSPJDLD1YfbNdpyFinU3rFcy8gPyW2thL7sRKZuo9xbgZuzuSVerTJYuEwMv",
  "key2": "X9vwGaV2jM7DijNGum3EHymKps22C3auVuWgFFxfbJZrABXTJVJ45GUpVD5tjg8wK2okQ6i9if3RvwZ1Y1x63g8",
  "key3": "DKC2QdC1Uf5LxJ8cvCG1RvtisspndSJUcQu1irdhiZFBFiw8aKdUrNhrftWx35xmyAGim1v5VnJtWxJVwcvi5q2",
  "key4": "3WQxjHgeJvsPD1v6SrN8fAdw8pvxmZ8YyTLrHtTyXeAdtaFaqzPSCT4rFMvTQVhE4ac4rjCqrPKSj7wqxyLz93Wg",
  "key5": "3dtDJSmLYobWrXiQMTpbaPqjfa93mYpByWFGASnTrSRoXeEdkqkd8KDLophvpBjjauZAL1EN71ZEUbrJQWLvXYVo",
  "key6": "52skVWghiTMizhjxUpxQ5SPbXyj5crWNdhbwJz3bjWQSyYzfCkbMHE5yA9Tup9mnES794u1VKfGYDPy5gemtjPZX",
  "key7": "5Z7PCZ85hGyMJYmMxLCoU3EmyyPZbXJzHZajnqpWsmVKEenq92uh4d249YJ99oi6mU4Jsw2fNG8waHh9FW2Mb2oc",
  "key8": "qRJSEV5YSNAS1GgL5Ry2TbutyHSTCzhrWNqMZi8tpQyeChF8JBdypxYczbxgGMKiVCJJtfa6ggc9WZ5kqPKTwKX",
  "key9": "zfYDgmTjFdMuApDP5nTJxUjh5AzFZZ9zVSaivfxQVhTSuuPbsv9yctdGsd6sRpw6NcBw5x93jBhH6nxz4VVj6UA",
  "key10": "4s2LDUFLd6q4t2UCf8biCne9YR4VmxHsY3zGeXz9P73TdQR9zX2wz2d6qmbvVXKKDwSKoP9giYTXkbi66UUmogaP",
  "key11": "4467tV6w4rWnyEr9UDSoxD1UfGk9dcVpk3dRSRixVnQdPLEJfZRhrsX7HLRJaH2vPBU6AD6kRmXTENzEcXT7jUxC",
  "key12": "vRKfuKsrp9oYXcFRoFbBt8P6YAe5s87AZbVGdDaDjHDzLNxzdGQBr5djDfMHGu15B2cva2cKwNtY429yxdeSZig",
  "key13": "2s1dYb7rA2e6SDnxf2Ut6TAgUPZ9ZGEKKK4CCguMN8JUZ9L68cRNMP6AWiU2ZnB1Xyf2V55FgPrfA8tKV5yozbbZ",
  "key14": "65hEfpuqYc3NwMNLpT3rhHLGq648FatsGcTjQNUuhyiU91y32UjRNhHEfSrkiXLp2F9dooh1BW3e1ez4cpKtud8Y",
  "key15": "5GqpRhQJpBJLh69GGwT8XEm6LqZJvPgEjuGbGtxdtzB1wes53YMz8Fe3AcUHAJG974eSyDaAKReNL2eRSAB7bTRK",
  "key16": "GT18hzKoQcH1pSKEzVnnUhN6W8Q37Ycc9XvdJuP31Qw6aD2Z87mhwquQRT1xYXkb3nZuMq83Mk4aFc43mQkpr7q",
  "key17": "3PwRDnvciUPQYaoxoej9nUm8BkKqs1GUZX5odmByAmZxZXFfQTUa7QdhWkJpsXoJaZEUfYHECg7kLrHVkFj8cYNL",
  "key18": "5HGt7D5e2xKkrM6ncoYL8EixGz3RDyhucpmPtgcDC9yK5qWEd6BQRr1Ye33YLd9XGNfAgdt111fTuUv8NSaDG553",
  "key19": "4cV6CZZcLGzbxRC4eyTx9WUzbD6mhRHT5Cm7BoVsQp8Due3XXXeLDFzCpFHna1Y6Q9MDu8gHvmLGcsYp8pW2uhiQ",
  "key20": "3jQGRMms8NDtq5zqv32m2LQ5H1Aw6kikFu3DxvXPZYToha3zu8pmLYuCzVyRr3DUeU4gZMXKEV17MxNjxMK9LU54",
  "key21": "5pe6bq7LnigR2voUEwdDTQr9MfYNDd4NaqUJSazqRNarmZeMgAYy8BdRmwCTrHaum8GWpY6mP2ZWnqNX9msq2ynR",
  "key22": "4rn2pkKBFWH2cBSbdA32mPgxJY5kW3QdZX49ATPQbXrw8vPcq3yw55F561ZRzi2zvnRmgm22ZCjbWWHg4QWVSnca",
  "key23": "3NNwn1cZBNDtbRpbULkiRWMGGWofgF1FfLdvo3hfYjhHd1rz1RpvFcoB714HJPWk5zU3KF2HvriRQNu6uk9tpX3x",
  "key24": "AcjNU2wju7BenDEwAeghyY4oPmZBaG4HR1tmyUspLvRAu2CimN4iUVwprmZi5qxVQYEBovYwTW2dKX5SaD4d6U5",
  "key25": "4ui3eZfjAn2ePFPFyTxMxwJxqMHaXWC9SRDpNXUTKzR4TdvxLD1iwcVSqHsNKzSfcqai4HqxsC3dg5paeht3v86u",
  "key26": "3FCMmugofkHWrop3gMUcXxPNu9YZNMLH6mAfMEpXvyyfmSPDqF1S7eV22CzLkY5jnGGNq3TZoxvdj7iNQt99cFsU",
  "key27": "2CZRgdy6wABnefYqvAaL6iGWH2FXWAxFDyACmxXEd1zMx1FaRyXmXPJxtoPg3owwo29yAhfyHX1RU918vgkYtgb3",
  "key28": "5751Tg4bigKAmHzwC4JXn3BfhjfU1QrQrfdtMdPevX9XCcTEvxRiLVtgLaEZWsAxFT5jicKGahGktnXJUTH3G2KC",
  "key29": "3CMckVCZDZBeVs3NuKaRunv1ePJHsufN1sK1DUh3zPG37BYVDmVyX8Je84ocXskvQhUYNKhfqqpzZho1p5gfL7ng",
  "key30": "4QYULp4HGqZ1GBfqSVzbJkYHHai8eg19Vu4umTxA912vhYBBStvtRtGsQKQ77ofyfdLcTWTSrQGnkjEkpyXyFCD3",
  "key31": "pVLwxWKzWFoABbYAowG2imxY69kHAC85fNQ1oEvC23TNnKoK2EcZuMH5jkT4qm22sC3fYKUPpR4jJSFvqPkGGbK",
  "key32": "2pWZeLoxWoGsKgWML1kc6865GqLwNTTNXDM6gzn5KesJ1AgQc5Cr5L8DQRcXeKjsfSsaVu98Zm7sA3ZZisJnHKKS",
  "key33": "2piUUb9rDqVdDzGaLmyXWuMoQWJs5FyMoFTTXn4WyvBPfzebH3ouKJrpYTe4hAPhTFyCF8x8rmZLm9NC59K5TSfi",
  "key34": "7azHRyiqzgHveSJHrSiunHj7ypWAfyqgZxmXwdpC7cFD2wRpzkpdkYzsk8vuK8kSoZgmo6y57CmmKY2cuS9E8pN",
  "key35": "5nDcSqhd7v3tkfZSGSQtwDLkE5BRkCbGXJcJesqVm5LeivaNKSzytikuT6BG9ykEy1nSdo1HrrbEK8T6AAtnqeL"
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
